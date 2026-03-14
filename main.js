// ============================================================
//  かんじマスター main.js  ── 周回システム・進捗ゲージ完全版
// ============================================================
// --- 周回テーマカラー定義 ---
const LAP_THEMES = [
    { lap:0, name:'はじめて',  primary:'#00D084', secondary:'#00E5A0', cardBg:'#F0FFF8', cardBorder:'#00D084', emoji:'🌱', badgeColor:'#00D084' },
    { lap:1, name:'1しゅう目', primary:'#3B82F6', secondary:'#60A5FA', cardBg:'#EFF6FF', cardBorder:'#3B82F6', emoji:'⭐', badgeColor:'#3B82F6' },
    { lap:2, name:'2しゅう目', primary:'#F59E0B', secondary:'#FCD34D', cardBg:'#FFFBEB', cardBorder:'#F59E0B', emoji:'🌟', badgeColor:'#F59E0B' },
    { lap:3, name:'3しゅう目', primary:'#EF4444', secondary:'#F87171', cardBg:'#FFF1F1', cardBorder:'#EF4444', emoji:'🔥', badgeColor:'#EF4444' },
    { lap:4, name:'4しゅう目', primary:'#8B5CF6', secondary:'#A78BFA', cardBg:'#F5F3FF', cardBorder:'#8B5CF6', emoji:'💎', badgeColor:'#8B5CF6' },
    { lap:5, name:'5しゅう目', primary:'#EC4899', secondary:'#F472B6', cardBg:'#FDF2F8', cardBorder:'#EC4899', emoji:'👑', badgeColor:'#EC4899' },
];
function getLapTheme(lap) { return LAP_THEMES[Math.min(lap, LAP_THEMES.length - 1)]; }

// ============================================================
// 状態管理
// ============================================================
let progressPractice = JSON.parse(localStorage.getItem('kanjiMasterPractice')) || {};
let progressTest     = JSON.parse(localStorage.getItem('kanjiMasterTest'))     || {};
let tokkunKanji      = JSON.parse(localStorage.getItem('kanjiMasterTokkun'))   || {};
let nigateKanji      = JSON.parse(localStorage.getItem('kanjiMasterNigate'))   || {};
let bonusXP          = parseInt(localStorage.getItem('kanjiMasterBonusXP'))    || 0;
let lapCount         = JSON.parse(localStorage.getItem('kanjiMasterLap'))      || {};
let mistakeCount     = JSON.parse(localStorage.getItem('kanjiMasterMistakes')) || {};

let currentChar   = null;
let currentMode   = 'practice';
let currentGrade  = 1;

let currentKanjiPaths  = [];
let currentStrokeIndex = 0;
let isDrawing   = false;
let userPoints  = [];
let isAnimating = false;
let hintTimeout = null;
let bgCanvasCtx, fixedCanvasCtx, drawCanvasCtx;

const CANVAS_SIZE = 250;
const KVG_SIZE    = 109;
const PADDING     = 15;
const SCALE       = (CANVAS_SIZE - PADDING * 2) / KVG_SIZE;

let isRandomTest          = false;
let randomQueue           = [];
let randomIndex           = 0;
let levelBeforeRandomTest = 1;

let pendingLevelUp  = false;
let pendingGoHome   = false;
let pendingLapUp    = false;
let pendingLapGrade = null;

const XP_PER_LEVEL = 5;

// ============================================================
// データ展開
// ============================================================
function parseCompressedData(grade, compressedString) {
    return compressedString.split('|').map(item => {
        const [char, reading] = item.split(':');
        return { char, reading };
    });
}
const allKanjiData = {};
for (let g = 1; g <= 6; g++) {
    if (typeof compressedKanjiData !== 'undefined' && compressedKanjiData[g]) {
        allKanjiData[g] = parseCompressedData(g, compressedKanjiData[g]);
    }
}

// ============================================================
// 周回システム
// ============================================================
function getLapClearedList(grade) {
    const lap = getGradeLap(grade);
    const key = `kanjiMasterLP_${grade}_${lap}`;
    return JSON.parse(localStorage.getItem(key)) || [];
}

function addLapCleared(grade, char) {
    const lap = getGradeLap(grade);
    const key = `kanjiMasterLP_${grade}_${lap}`;
    const list = JSON.parse(localStorage.getItem(key)) || [];
    if (!list.includes(char)) {
        list.push(char);
        localStorage.setItem(key, JSON.stringify(list));
    }
}

function getGradeProgress(grade) {
    const list = allKanjiData[grade];
    if (!list || list.length === 0) return { cleared: 0, total: 0 };
    const lapCleared = getLapClearedList(grade);
    const cleared = list.filter(item => lapCleared.includes(item.char)).length;
    return { cleared, total: list.length };
}

function getGradeLap(grade) { return lapCount[grade] || 0; }

function checkAndIncrementLap(grade) {
    const list = allKanjiData[grade];
    if (!list || !list.length) return false;
    const lapCleared = getLapClearedList(grade);
    if (lapCleared.length >= list.length) {
        lapCount[grade] = (lapCount[grade] || 0) + 1;
        localStorage.setItem('kanjiMasterLap', JSON.stringify(lapCount));
        return true;
    }
    return false;
}

// ============================================================
// 効果音（かなカナ方式）
// ============================================================
let audioContext;
function playSound(type) {
    try {
        if (!audioContext) audioContext = new (window.AudioContext||window.webkitAudioContext)();
        if (audioContext.state === 'suspended') audioContext.resume();
        const now = audioContext.currentTime;
        const o = (f,w,d,v=0.1,s=now) => {
            const os=audioContext.createOscillator(), g=audioContext.createGain();
            os.type=w; os.frequency.setValueAtTime(f,s);
            g.gain.setValueAtTime(v,s);
            g.gain.exponentialRampToValueAtTime(0.01,s+d);
            os.connect(g); g.connect(audioContext.destination);
            os.start(s); os.stop(s+d);
        };
        if (type==='stroke') {
            o(520,'sine',0.06,0.18,now);
            o(1040,'sine',0.18,0.13,now+0.04);
            o(1560,'sine',0.12,0.06,now+0.09);
        } else if (type==='error') {
            o(200,'sawtooth',0.25,0.15);
        } else if (type==='click') {
            o(500,'triangle',0.1,0.08);
        } else if (type==='complete'||type==='success') {
            [[0,880,0.08,0.18],[0.07,1108,0.08,0.15],[0.13,1318,0.1,0.15],
             [0.2,1760,0.18,0.12],[0.28,2093,0.15,0.1],[0.33,1760,0.12,0.08]]
            .forEach(([off,f,d,v])=>o(f,'sine',d,v,now+off));
        } else if (type==='levelup'||type==='lapup') {
            [[0,523,0.12],[0.1,659,0.12],[0.2,784,0.12],[0.3,1047,0.35]]
            .forEach(([off,f,d])=>o(f,'triangle',d,0.2,now+off));
        }
    } catch(e) {}
}

// ============================================================
// 経験値・レベル
// ============================================================
function getStats() {
    let totalXP = bonusXP;
    for (let g = 1; g <= 6; g++) {
        const list = allKanjiData[g];
        if (!list) continue;
        const lap = getGradeLap(g);
        totalXP += lap * list.length * 3;
        const { cleared } = getGradeProgress(g);
        totalXP += cleared;
    }
    const level          = Math.floor(totalXP / XP_PER_LEVEL) + 1;
    const currentLevelXP = totalXP % XP_PER_LEVEL;
    const nextLevelXP    = XP_PER_LEVEL - currentLevelXP;
    return { level, totalXP, currentLevelXP, nextLevelXP };
}

function getTitleData(level) {
    let c = TITLE_DATA[0];
    for (let i=0; i<TITLE_DATA.length; i++) {
        if (level >= TITLE_DATA[i].level) c = TITLE_DATA[i]; else break;
    }
    return c;
}

// ============================================================
// UI 更新
// ============================================================
function updateUI() {
    const s = getStats(), m = getTitleData(s.level);
    document.getElementById('title-mascot').innerText = m.mascot;
    document.getElementById('title-level').innerText  = s.level;
    document.getElementById('title-name').innerText   = m.title;
    document.getElementById('list-mascot').innerText  = m.mascot;
    document.getElementById('list-level').innerText   = s.level;
    document.getElementById('next-xp').innerText      = s.nextLevelXP;
    document.getElementById('xp-bar').style.width     = `${(s.currentLevelXP/XP_PER_LEVEL)*100}%`;
    updateGradeProgressBars();
}

function updateGradeProgressBars() {
    for (let g=1; g<=6; g++) {
        const { cleared, total } = getGradeProgress(g);
        const lap   = getGradeLap(g);
        const theme = getLapTheme(lap);
        const pct   = total>0 ? Math.round((cleared/total)*100) : 0;
        const barEl = document.getElementById(`grade-progress-${g}`);
        if (barEl) { barEl.style.width=`${pct}%`; barEl.style.background=theme.primary; }
        const lapEl = document.getElementById(`grade-lap-${g}`);
        if (lapEl) { lapEl.innerText=lap>0?`${theme.emoji}×${lap}`:''; lapEl.style.display=lap>0?'block':'none'; }
        const txtEl = document.getElementById(`grade-progress-text-${g}`);
        if (txtEl) txtEl.innerText=`${cleared}/${total}`;
    }
}

// ============================================================
// フォルダ管理
// ============================================================
function toggleFolder(type) {
    playSound('click');
    if (!currentChar) return;
    const key=type==='tokkun'?tokkunKanji:nigateKanji;
    const sk =type==='tokkun'?'kanjiMasterTokkun':'kanjiMasterNigate';
    if (key[currentChar.char]) delete key[currentChar.char]; else key[currentChar.char]=true;
    localStorage.setItem(sk, JSON.stringify(key));
    updateFolderBtns();
}
function updateFolderBtns() {
    if (!currentChar) return;
    const tBtn=document.getElementById('tokkun-toggle');
    const nBtn=document.getElementById('nigate-toggle');
    tBtn.classList.toggle('active', !!tokkunKanji[currentChar.char]);
    tBtn.innerText=tokkunKanji[currentChar.char]?'★ とっくん':'☆ とっくん';
    nBtn.classList.toggle('active', !!nigateKanji[currentChar.char]);
    nBtn.innerText=nigateKanji[currentChar.char]?'★ にがて':'☆ にがて';
}

// ============================================================
// 学年・画面切替
// ============================================================
function setGrade(grade) { playSound('click'); currentGrade=grade; updateTitleGradeButtons(); }

function updateTitleGradeButtons() {
    document.querySelectorAll('.grade-btn').forEach(btn => {
        const g=parseInt(btn.dataset.grade), lap=getGradeLap(g), theme=getLapTheme(lap);
        btn.classList.toggle('selected', g===currentGrade);
        if (g===currentGrade) {
            btn.style.borderColor=theme.primary;
            btn.style.background=`linear-gradient(135deg,${theme.primary},${theme.secondary})`;
            btn.style.color='white';
        } else {
            btn.style.borderColor=theme.primary+'66';
            btn.style.background=theme.cardBg;
            btn.style.color='';
        }
    });
}

function showScreen(screenId) {
    window.scrollTo(0,0); isRandomTest=false;
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    if (screenId==='list-screen') renderList();
    else if (screenId==='title-screen') {
        document.getElementById('home-search-input').value='';
        document.getElementById('search-box').value='';
        updateTitleGradeButtons(); updateUI();
    }
}

function handleHomeSearch() {
    const q=document.getElementById('home-search-input').value;
    if (!q) return;
    document.getElementById('search-box').value=q;
    currentMode='practice'; playSound('click'); showScreen('list-screen'); filterList();
}
function selectMode(mode) { playSound('click'); currentMode=mode; document.getElementById('search-box').value=''; showScreen('list-screen'); }
function filterList() { renderList(); }
function toHiragana(str) {
    if (!str) return '';
    return str.replace(/[\u30a1-\u30f6]/g, c=>String.fromCharCode(c.charCodeAt(0)-0x60));
}

// ============================================================
// リスト描画
// ============================================================
function renderList() {
    updateUI();
    const searchText=document.getElementById('search-box').value.trim();
    const searchKana=toHiragana(searchText);
    const grid=document.getElementById('kanji-grid');
    const badge=document.getElementById('mode-display');
    const lap=getGradeLap(currentGrade), theme=getLapTheme(lap);

    if (currentMode==='practice') {
        badge.innerText=searchText?`🌍 ぜんがくねん・れんしゅう`:`${currentGrade}ねんせい・✏️ れんしゅう`;
        badge.style.background=`linear-gradient(135deg,${theme.primary},${theme.secondary})`;
    } else if (currentMode==='test') {
        badge.innerText=searchText?`🌍 ぜんがくねん・テスト`:`${currentGrade}ねんせい・🏅 テスト`;
        badge.style.background=`linear-gradient(135deg,${theme.primary},${theme.secondary})`;
    } else if (currentMode==='tokkun') {
        badge.innerText=`💪 とっくん漢字（${Object.keys(tokkunKanji).length}コ）`;
        badge.style.background='linear-gradient(135deg,#4CAF50,#81C784)';
    } else if (currentMode==='nigate') {
        badge.innerText=`💦 にがてな漢字（${Object.keys(nigateKanji).length}コ）`;
        badge.style.background='linear-gradient(135deg,#9C27B0,#BA68C8)';
    }

    renderListProgressBar();

    let filtered=[];
    const isFolderMode=(currentMode==='tokkun'||currentMode==='nigate');
    if (isFolderMode) {
        const folder=currentMode==='tokkun'?tokkunKanji:nigateKanji;
        for (let g=1;g<=6;g++) if(allKanjiData[g])
            allKanjiData[g].filter(i=>folder[i.char]).forEach(m=>{m._foundGrade=g;filtered.push(m);});
        if (searchText) filtered=filtered.filter(i=>i.char.includes(searchText)||(i.reading&&toHiragana(i.reading).includes(searchKana)));
    } else if (searchText) {
        for (let g=1;g<=6;g++) if(allKanjiData[g])
            allKanjiData[g].filter(i=>i.char.includes(searchText)||(i.reading&&toHiragana(i.reading).includes(searchKana)))
                .forEach(m=>{m._foundGrade=g;filtered.push(m);});
    } else {
        if (allKanjiData[currentGrade]) { filtered=allKanjiData[currentGrade]; filtered.forEach(m=>m._foundGrade=currentGrade); }
    }

    grid.innerHTML='';
    if (!filtered.length) { grid.innerHTML='<div style="grid-column:1/-1;padding:20px;">みつかりません...</div>'; return; }

    filtered.forEach(item => {
        const card=document.createElement('div');
        const ig=item._foundGrade||currentGrade;
        const iLap=getGradeLap(ig);
        const iTheme=getLapTheme(iLap);

        const lapClearedList=getLapClearedList(ig);
        const isClearedThisLap=lapClearedList.includes(item.char);
        const everPracticed=!!progressPractice[item.char];
        const everTested=!!progressTest[item.char];

        card.className='kanji-card';

        if (isClearedThisLap) {
            card.style.background=iTheme.cardBg;
            card.style.borderColor=iTheme.cardBorder;
            card.style.borderWidth='2px';
            card.style.borderStyle='solid';
            card.classList.add(isFolderMode||currentMode==='practice'?'cleared-practice':'cleared-test');
        }

        let badges='';
        if (everPracticed) {
            const practLap = getPracticeLap(item.char, ig);
            const practTheme = getLapTheme(practLap);
            const color = isClearedThisLap ? practTheme.badgeColor : '#CCCCCC';
            badges += `<div class="mark-badge" style="display:flex;right:auto;left:-8px;background:${color};"><span style="font-size:16px;">⭐</span></div>`;
        }
        if (everTested) {
            const testLap = getTestLap(item.char, ig);
            const testTheme = getLapTheme(testLap);
            const color = isClearedThisLap ? testTheme.badgeColor : '#CCCCCC';
            badges += `<div class="mark-badge" style="display:flex;right:-8px;top:-8px;background:${color};"><span style="font-size:16px;">👑</span></div>`;
        }
        if (tokkunKanji[item.char]) badges+=`<div class="tokkun-mark">💪</div>`;
        if (nigateKanji[item.char]) badges+=`<div class="nigate-mark">💦</div>`;

        const gradeLabel=searchText||isFolderMode
            ?`<span style="position:absolute;bottom:3px;right:6px;font-size:0.65rem;color:#999;font-weight:600;">${ig}年</span>`:'';
        const lapBadge=iLap>=1
            ?`<span style="position:absolute;top:2px;left:2px;font-size:0.6rem;background:${iTheme.primary};color:white;border-radius:999px;padding:0 4px;font-weight:bold;">${iTheme.emoji}</span>`:'';

        card.innerHTML=`${item.char}${badges}${gradeLabel}${lapBadge}`;
        card.onclick=()=>{ playSound('click'); if(item._foundGrade) currentGrade=item._foundGrade; startApp(item); };
        grid.appendChild(card);
    });
}

function getPracticeLap(char, grade) {
    const total = getGradeLap(grade);
    for (let l = total; l >= 0; l--) {
        const key = `kanjiMasterLP_${grade}_${l}`;
        const list = JSON.parse(localStorage.getItem(key)) || [];
        if (list.includes(char)) return l;
    }
    return 0;
}

function getTestLap(char, grade) {
    return getPracticeLap(char, grade);
}

function renderListProgressBar() {
    const container=document.getElementById('list-progress-bar-container');
    if (!container) return;
    const isFolderMode=(currentMode==='tokkun'||currentMode==='nigate');
    const isSearch=document.getElementById('search-box').value.trim()!=='';
    if (isFolderMode||isSearch) { container.innerHTML=''; return; }
    const { cleared, total }=getGradeProgress(currentGrade);
    const lap=getGradeLap(currentGrade), theme=getLapTheme(lap);
    const pct=total>0?Math.round((cleared/total)*100):0;
    container.innerHTML=`
        <div style="background:white;border-radius:16px;padding:12px 16px;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:0.85rem;font-weight:700;color:#555;">${theme.emoji} ${currentGrade}ねんせい${lap>0?' '+lap+'しゅう目':''}</span>
                <span style="font-size:0.85rem;font-weight:700;color:${theme.primary};">${cleared} / ${total}もじ (${pct}%)</span>
            </div>
            <div style="background:#F0F0F0;border-radius:999px;height:10px;overflow:hidden;">
                <div style="width:${pct}%;height:100%;background:linear-gradient(90deg,${theme.primary},${theme.secondary});border-radius:999px;transition:width 0.6s ease;"></div>
            </div>
        </div>`;
}

// ============================================================
// ランダムテスト
// ============================================================
function startRandomTest() {
    playSound('click');
    const list=allKanjiData[currentGrade]; if(!list||!list.length) return;
    randomQueue=[...list].sort(()=>0.5-Math.random()).slice(0,10);
    randomIndex=0; isRandomTest=true; currentMode='test';
    levelBeforeRandomTest=getStats().level; startApp(randomQueue[0]);
}
function startFolderRandomTest(folderType) {
    playSound('click');
    let list=[];
    const folder=folderType==='tokkun'?tokkunKanji:nigateKanji;
    const fname=folderType==='tokkun'?'とっくん':'にがて';
    for (let g=1;g<=6;g++) if(allKanjiData[g]) list=list.concat(allKanjiData[g].filter(i=>folder[i.char]));
    if (list.length<10) { alert(`${fname} に 10こ以上 登録すると テストできるよ！\n（いま: ${list.length}こ）\nれんしゅう画面で 登録してね。`); return; }
    randomQueue=[...list].sort(()=>0.5-Math.random()).slice(0,10);
    randomIndex=0; isRandomTest=true; currentMode='test';
    levelBeforeRandomTest=getStats().level; startApp(randomQueue[0]);
}
function handleBackFromPractice() {
    if (hintTimeout){clearTimeout(hintTimeout);hintTimeout=null;}
    isAnimating=false; showScreen(isRandomTest?'title-screen':'list-screen');
}

// ============================================================
// キャンバス判定エンジン
// ============================================================
async function fetchKanjiVG(char) {
    const hex=char.codePointAt(0).toString(16).padStart(5,'0');
    const res=await fetch(`https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`);
    if (!res.ok) throw new Error('漢字データが見つかりません');
    const doc=new DOMParser().parseFromString(await res.text(),'image/svg+xml');
    return Array.from(doc.querySelectorAll('g[id^="kvg:StrokePaths_"] path')).map(p=>p.getAttribute('d'));
}

function initCanvasEngine() {
    const dc=document.getElementById('draw-canvas');
    bgCanvasCtx=document.getElementById('bg-canvas').getContext('2d');
    fixedCanvasCtx=document.getElementById('fixed-canvas').getContext('2d');
    drawCanvasCtx=dc.getContext('2d');
    const setup=(ctx,col,w)=>{ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle=col;ctx.lineWidth=w;};
    setup(bgCanvasCtx,'#E0E0E0',5); setup(fixedCanvasCtx,'#333333',5); setup(drawCanvasCtx,'#FF6B35',5);
    const pos=e=>{const r=dc.getBoundingClientRect();return{x:(e.clientX??(e.touches?e.touches[0].clientX:0))-r.left,y:(e.clientY??(e.touches?e.touches[0].clientY:0))-r.top};};
    const sd=e=>{if(isAnimating||currentStrokeIndex>=currentKanjiPaths.length)return;isDrawing=true;userPoints=[pos(e)];drawCanvasCtx.beginPath();drawCanvasCtx.moveTo(userPoints[0].x,userPoints[0].y);};
    const dr=e=>{if(!isDrawing||isAnimating)return;const p=pos(e);userPoints.push(p);drawCanvasCtx.lineTo(p.x,p.y);drawCanvasCtx.stroke();};
    const ed=()=>{if(!isDrawing||isAnimating)return;isDrawing=false;evaluateStroke();};
    dc.addEventListener('mousedown',sd); dc.addEventListener('mousemove',dr);
    dc.addEventListener('mouseup',ed);   dc.addEventListener('mouseout',ed);
    dc.addEventListener('touchstart',e=>{e.preventDefault();sd(e);},{passive:false});
    dc.addEventListener('touchmove', e=>{e.preventDefault();dr(e);},{passive:false});
    dc.addEventListener('touchend',  e=>{e.preventDefault();ed();},{passive:false});
}

function showStrokeHint(index) {
    if (index>=currentKanjiPaths.length) return;
    if (hintTimeout) clearTimeout(hintTimeout);
    fixedCanvasCtx.save();
    fixedCanvasCtx.translate(PADDING,PADDING); fixedCanvasCtx.scale(SCALE,SCALE);
    fixedCanvasCtx.strokeStyle='rgba(255,60,60,0.6)'; fixedCanvasCtx.lineWidth=5;
    fixedCanvasCtx.lineCap='round'; fixedCanvasCtx.lineJoin='round';
    fixedCanvasCtx.stroke(new Path2D(currentKanjiPaths[index]));
    fixedCanvasCtx.restore();
    hintTimeout=setTimeout(()=>{
        fixedCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
        fixedCanvasCtx.save();
        fixedCanvasCtx.translate(PADDING,PADDING); fixedCanvasCtx.scale(SCALE,SCALE);
        fixedCanvasCtx.strokeStyle='#333333'; fixedCanvasCtx.lineWidth=5;
        fixedCanvasCtx.lineCap='round'; fixedCanvasCtx.lineJoin='round';
        for (let i=0;i<currentStrokeIndex;i++) fixedCanvasCtx.stroke(new Path2D(currentKanjiPaths[i]));
        fixedCanvasCtx.restore(); hintTimeout=null;
    },1000);
}

// ============================================================
// DTW判定エンジン（かなカナ方式）
// ============================================================
const _svgMeasure = (()=>{
    const s = document.createElementNS('http://www.w3.org/2000/svg','svg');
    s.style.cssText = 'position:absolute;visibility:hidden;width:0;height:0';
    document.body.appendChild(s);
    return s;
})();

function resamplePath(d, N=32) {
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d', d);
    _svgMeasure.appendChild(p);
    const len = p.getTotalLength();
    const pts = [];
    for (let i=0; i<N; i++) {
        const pt = p.getPointAtLength(len * i / (N-1));
        pts.push({ x: pt.x * SCALE + PADDING, y: pt.y * SCALE + PADDING });
    }
    _svgMeasure.removeChild(p);
    return pts;
}

function resampleUserPts(pts, N=32) {
    if (pts.length < 2) return pts;
    const ds = [0];
    for (let i=1; i<pts.length; i++)
        ds.push(ds[i-1] + Math.hypot(pts[i].x-pts[i-1].x, pts[i].y-pts[i-1].y));
    const total = ds[ds.length-1];
    if (total < 1) return pts;
    const res = [];
    for (let i=0; i<N; i++) {
        const tgt = total * i / (N-1);
        let lo=0, hi=ds.length-1;
        while (lo < hi-1) {
            const mid = (lo+hi)>>1;
            if (ds[mid] <= tgt) lo=mid; else hi=mid;
        }
        const t = ds[lo]===ds[hi] ? 0 : (tgt-ds[lo])/(ds[hi]-ds[lo]);
        res.push({
            x: pts[lo].x + (pts[hi].x-pts[lo].x)*t,
            y: pts[lo].y + (pts[hi].y-pts[lo].y)*t
        });
    }
    return res;
}

function dtwDistance(s1, s2) {
    const n=s1.length, m=s2.length;
    const dt = Array.from({length:n+1}, ()=>new Float32Array(m+1).fill(Infinity));
    dt[0][0] = 0;
    for (let i=1; i<=n; i++)
        for (let j=1; j<=m; j++) {
            const d = Math.hypot(s1[i-1].x-s2[j-1].x, s1[i-1].y-s2[j-1].y);
            dt[i][j] = d + Math.min(dt[i-1][j], dt[i][j-1], dt[i-1][j-1]);
        }
    return dt[n][m] / Math.max(n, m);
}

function checkDirection(ur, ref) {
    const N=ur.length;
    if (N < 4) return true;
    const uVx=ur[N-1].x-ur[0].x, uVy=ur[N-1].y-ur[0].y;
    const M=ref.length;
    const rVx=ref[M-1].x-ref[0].x, rVy=ref[M-1].y-ref[0].y;
    const dot=uVx*rVx+uVy*rVy;
    const uL=Math.hypot(uVx,uVy), rL=Math.hypot(rVx,rVy);
    if (uL<1||rL<1) return true;
    return (dot/(uL*rL)) > -0.3;
}

function getSVGEndPt(d) {
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d', d);
    _svgMeasure.appendChild(p);
    const len = p.getTotalLength();
    const pt  = p.getPointAtLength(len);
    const r   = { x: pt.x*SCALE+PADDING, y: pt.y*SCALE+PADDING };
    _svgMeasure.removeChild(p);
    return r;
}

function evaluateStroke() {
    if (userPoints.length < 2) {
        drawCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
        return;
    }
    const pd  = currentKanjiPaths[currentStrokeIndex];
    const ref = resamplePath(pd, 32);

    // 線の長さチェック
    const refLen = ref.reduce((a,p,i)=>i===0?0:a+Math.hypot(p.x-ref[i-1].x,p.y-ref[i-1].y), 0);
    const userLen = userPoints.reduce((a,p,i)=>i===0?0:a+Math.hypot(p.x-userPoints[i-1].x,p.y-userPoints[i-1].y), 0);
    if (userLen < refLen * 0.25) {
        playSound('error');
        document.getElementById('message-area').innerText = 'もうすこし ながく かいてね！';
        drawCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
        showStrokeHint(currentStrokeIndex);
        return;
    }

    const ur = resampleUserPts(userPoints, 32);

    // 方向チェック
    if (!checkDirection(ur, ref)) {
        playSound('error');
        document.getElementById('message-area').innerText = 'かくむきに きをつけてね！';
        drawCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
        showStrokeHint(currentStrokeIndex);
        return;
    }

    // DTW距離チェック
    const dtw    = dtwDistance(ur, ref);
    const endRef = getSVGEndPt(pd);
    const endPt  = userPoints[userPoints.length-1];
    const endDist = Math.hypot(endPt.x-endRef.x, endPt.y-endRef.y);
    const ok = dtw < CANVAS_SIZE*0.20
        && (endDist < CANVAS_SIZE*0.22*1.4 || dtw < CANVAS_SIZE*0.20*0.60);

    drawCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

    if (ok) {
        playSound('stroke');
        document.getElementById('message-area').innerText = 'いいぞ！ その調子！';
        if (hintTimeout) { clearTimeout(hintTimeout); hintTimeout=null; }
        currentStrokeIndex++;
        fixedCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
        fixedCanvasCtx.save();
        fixedCanvasCtx.translate(PADDING,PADDING); fixedCanvasCtx.scale(SCALE,SCALE);
        fixedCanvasCtx.strokeStyle='#333333'; fixedCanvasCtx.lineWidth=5;
        fixedCanvasCtx.lineCap='round'; fixedCanvasCtx.lineJoin='round';
        for (let i=0; i<currentStrokeIndex; i++)
            fixedCanvasCtx.stroke(new Path2D(currentKanjiPaths[i]));
        fixedCanvasCtx.restore();
        if (currentStrokeIndex >= currentKanjiPaths.length) handleComplete();
    } else {
        playSound('error');
        const char = currentChar.char;
        mistakeCount[char] = (mistakeCount[char]||0) + 1;
        localStorage.setItem('kanjiMasterMistakes', JSON.stringify(mistakeCount));
        if (mistakeCount[char] >= 3 && !nigateKanji[char]) {
            nigateKanji[char] = true;
            localStorage.setItem('kanjiMasterNigate', JSON.stringify(nigateKanji));
            updateFolderBtns();
            document.getElementById('message-area').innerText = 'おしい！ にがてに とうろくしたよ💦';
        } else {
            document.getElementById('message-area').innerText = 'おしい！ ここを見て！';
        }
        showStrokeHint(currentStrokeIndex);
    }
}

async function playAnimation() {
    if(isAnimating||!currentKanjiPaths.length)return;
    if(hintTimeout){clearTimeout(hintTimeout);hintTimeout=null;}
    isAnimating=true; currentStrokeIndex=0;
    drawCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    fixedCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    fixedCanvasCtx.save();
    fixedCanvasCtx.translate(PADDING,PADDING); fixedCanvasCtx.scale(SCALE,SCALE);
    fixedCanvasCtx.strokeStyle='#00BFFF';
    for(let i=0;i<currentKanjiPaths.length;i++){
        if(!isAnimating)break;
        const pd=currentKanjiPaths[i],p=new Path2D(pd);
        const pe=document.createElementNS('http://www.w3.org/2000/svg','path'); pe.setAttribute('d',pd);
        const len=pe.getTotalLength();
        await new Promise(res=>{
            let t=null;
            const step=ts=>{
                if(!isAnimating){res();return;} if(!t)t=ts;
                const prog=Math.min((ts-t)/250,1);
                fixedCanvasCtx.clearRect(-100,-100,(CANVAS_SIZE*2)/SCALE,(CANVAS_SIZE*2)/SCALE);
                for(let j=0;j<i;j++){fixedCanvasCtx.setLineDash([]);fixedCanvasCtx.stroke(new Path2D(currentKanjiPaths[j]));}
                fixedCanvasCtx.setLineDash([len,len]); fixedCanvasCtx.lineDashOffset=len*(1-prog);
                fixedCanvasCtx.stroke(p);
                if(prog<1)requestAnimationFrame(step); else{fixedCanvasCtx.setLineDash([]);res();}
            };
            requestAnimationFrame(step);
        });
        if(!isAnimating)break;
        await new Promise(r=>setTimeout(r,60));
    }
    fixedCanvasCtx.restore();
    if(isAnimating) setTimeout(()=>{if(!isAnimating)return;fixedCanvasCtx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);fixedCanvasCtx.strokeStyle='#333333';isAnimating=false;},600);
}

// ============================================================
// アプリ制御
// ============================================================
async function startApp(item) {
    if(hintTimeout){clearTimeout(hintTimeout);hintTimeout=null;}
    isAnimating=false; currentChar=item; window.scrollTo(0,0);
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById('practice-screen').classList.add('active');
    updateFolderBtns();
    const msg=document.getElementById('message-area');
    const rd=document.getElementById('current-reading'); if(rd)rd.style.display='none';
    if(isRandomTest){msg.innerText=`🎲 テスト: ${randomIndex+1}/${randomQueue.length}問目`;msg.style.color="#9B59B6";}
    else if(currentMode==='test'){msg.innerText="この かんじ を かこう！";msg.style.color="#FF1493";}
    else{msg.innerText="うすいせんを なぞろう！";msg.style.color="#00D084";}

    let onyomi=[],kunyomi=[];
    if(item.reading){
        item.reading.replace(/\(/g,'（').replace(/\)/g,'）').replace(/\./g,'')
            .split(/[、,／\/ \u3000]+/).forEach(p=>{if(!p)return;(/[\u30A0-\u30FF]/.test(p)?onyomi:kunyomi).push(p);});
    }
    const dOP=onyomi.join('<br>'),dKP=kunyomi.join('<br>');
    const dOM=onyomi.length>0?`<span style="font-size:0.8rem;color:#C62828;border:1px solid #FFCDD2;background:#FFEBEE;border-radius:12px;padding:2px 8px;margin-right:6px;">おんよみ</span>${onyomi.join('　')}`:'';
    const dKM=kunyomi.length>0?`<span style="font-size:0.8rem;color:#1565C0;border:1px solid #BBDEFB;background:#E3F2FD;border-radius:12px;padding:2px 8px;margin-right:6px;">くんよみ</span>${kunyomi.join('　')}`:'';
    document.getElementById('character-target').innerHTML=`
        <style>
        .kl{display:flex;justify-content:center;align-items:stretch;gap:25px;width:100%;margin-top:10px;}
        .sc{display:flex;flex-direction:column;align-items:center;width:80px;}
        .yb{writing-mode:horizontal-tb;padding:6px 14px;border-radius:20px;font-size:0.9rem;font-weight:bold;margin-bottom:20px;white-space:nowrap;}
        .yb.kun{border:2px solid #D6EAF8;color:#2874A6;background:#EBF5FB;}
        .yb.on{border:2px solid #FADBD8;color:#B03A2E;background:#FDEDEC;}
        .ypc{writing-mode:vertical-rl;text-orientation:upright;font-size:1.5rem;font-weight:bold;letter-spacing:0.2rem;line-height:2.2;text-align:start;}
        .ym{display:none;}
        @media(max-width:500px){.kl{flex-direction:column;align-items:center;gap:15px;}.sc{display:none;}.ym{display:flex;flex-direction:column;align-items:center;gap:10px;width:100%;font-size:1.2rem;font-weight:bold;}}
        </style>
        <div class="kl">
            <div class="sc">${kunyomi.length>0?`<div class="yb kun">くんよみ</div><div class="ypc" style="color:#2874A6;">${dKP}</div>`:''}</div>
            <div class="ym">${kunyomi.length>0?`<div style="color:#2874A6;">${dKM}</div>`:''}${onyomi.length>0?`<div style="color:#B03A2E;">${dOM}</div>`:''}</div>
            <div style="position:relative;width:${CANVAS_SIZE}px;height:${CANVAS_SIZE}px;margin:0;background:white;flex-shrink:0;border-radius:24px;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
                <canvas id="bg-canvas"    width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" style="position:absolute;top:0;left:0;z-index:1;"></canvas>
                <canvas id="fixed-canvas" width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" style="position:absolute;top:0;left:0;z-index:2;"></canvas>
                <canvas id="draw-canvas"  width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" style="position:absolute;top:0;left:0;z-index:3;touch-action:none;cursor:crosshair;"></canvas>
            </div>
            <div class="sc">${onyomi.length>0?`<div class="yb on">おんよみ</div><div class="ypc" style="color:#B03A2E;">${dOP}</div>`:''}</div>
        </div>`;
    initCanvasEngine(); currentStrokeIndex=0;
    bgCanvasCtx.save();
    bgCanvasCtx.strokeStyle='#D6EAF8'; bgCanvasCtx.lineWidth=3; bgCanvasCtx.setLineDash([8,8]);
    bgCanvasCtx.beginPath();
    bgCanvasCtx.moveTo(CANVAS_SIZE/2,0); bgCanvasCtx.lineTo(CANVAS_SIZE/2,CANVAS_SIZE);
    bgCanvasCtx.moveTo(0,CANVAS_SIZE/2); bgCanvasCtx.lineTo(CANVAS_SIZE,CANVAS_SIZE/2);
    bgCanvasCtx.stroke(); bgCanvasCtx.restore();
    try {
        currentKanjiPaths=await fetchKanjiVG(item.char);
        if(currentMode==='practice'||currentMode==='tokkun'||currentMode==='nigate'){
            bgCanvasCtx.save();
            bgCanvasCtx.translate(PADDING,PADDING); bgCanvasCtx.scale(SCALE,SCALE);
            currentKanjiPaths.forEach(pd=>bgCanvasCtx.stroke(new Path2D(pd)));
            bgCanvasCtx.restore();
        }
    } catch(e){msg.innerText="エラー: データがよみこめません";console.error(e);}
}

// ============================================================
// 完了処理
// ============================================================
function handleComplete() {
    playSound('complete');
    const msg=document.getElementById('result-msg'),icon=document.getElementById('result-icon');
    const isPractice=(currentMode==='practice'||currentMode==='tokkun'||currentMode==='nigate');
    const store=isPractice?progressPractice:progressTest;
    const sKey=isPractice?'kanjiMasterPractice':'kanjiMasterTest';

    const oldLv=getStats().level;

    store[currentChar.char]=true;
    localStorage.setItem(sKey,JSON.stringify(store));

    const grade=currentChar._foundGrade||currentGrade;
    addLapCleared(grade, currentChar.char);

    const newLv=getStats().level;

    if(!isRandomTest){
        const lappedUp=checkAndIncrementLap(grade);
        if(lappedUp){pendingLapUp=true;pendingLapGrade=grade;}
    }
    if(!isRandomTest&&newLv>oldLv) pendingLevelUp=true;

    msg.innerText=isPractice?'できたー！':'だいせいかい！';
    msg.style.color=isPractice?'#00D084':'#FF1493';
    icon.innerText=isPractice?'⭐':'👑';
    setTimeout(()=>document.getElementById('result-overlay').classList.add('active'),800);
}

function handleNextClick() {
    document.getElementById('result-overlay').classList.remove('active');
    if(pendingLapUp){pendingLapUp=false;showLapUpDisplay(pendingLapGrade);return;}
    if(pendingLevelUp){pendingLevelUp=false;showLevelUpDisplay(getStats().level);return;}
    moveToNextKanji();
}

function moveToNextKanji() {
    if(isRandomTest){
        randomIndex++;
        if(randomIndex<randomQueue.length){startApp(randomQueue[randomIndex]);return;}
        isRandomTest=false; bonusXP+=10;
        localStorage.setItem('kanjiMasterBonusXP',bonusXP);
        if(checkAndIncrementLap(currentGrade)){pendingLapUp=true;pendingLapGrade=currentGrade;}
        document.getElementById('random-clear-overlay').classList.add('active');
        playSound('levelup'); updateUI();
    } else {
        let list=[];
        if(currentMode==='tokkun'||currentMode==='nigate'){
            const f=currentMode==='tokkun'?tokkunKanji:nigateKanji;
            for(let g=1;g<=6;g++) if(allKanjiData[g]) list=list.concat(allKanjiData[g].filter(i=>f[i.char]));
        } else { list=allKanjiData[currentChar._foundGrade||currentGrade]||[]; }
        if(!list.length){showScreen('list-screen');return;}
        const idx=list.findIndex(k=>k.char===currentChar.char);
        if(idx>=0&&idx<list.length-1) startApp(list[idx+1]); else showScreen('list-screen');
    }
}

// ============================================================
// レベルアップ演出
// ============================================================
function showLevelUpDisplay(level) {
    playSound('levelup');
    document.getElementById('levelup-overlay').classList.add('active');
    document.getElementById('new-level-num').innerText=level;
    document.getElementById('levelup-mascot').innerText=getTitleData(level).mascot;
}
function closeLevelUp() {
    document.getElementById('levelup-overlay').classList.remove('active');
    if(pendingGoHome){pendingGoHome=false;showScreen('title-screen');}
    else moveToNextKanji();
}

// ============================================================
// 周回アップ演出
// ============================================================
function showLapUpDisplay(grade) {
    playSound('lapup');
    const lap=getGradeLap(grade),theme=getLapTheme(lap);
    if(!document.getElementById('lapup-overlay')) createLapUpOverlay();
    document.getElementById('lapup-overlay').classList.add('active');
    document.getElementById('lapup-grade').innerText=`${grade}ねんせい`;
    document.getElementById('lapup-lap').innerText=`${lap}しゅう目`;
    document.getElementById('lapup-emoji').innerText=theme.emoji;
    document.getElementById('lapup-name').innerText=theme.name;
    const inner=document.getElementById('lapup-inner');
    if(inner) inner.style.background=`linear-gradient(135deg,${theme.primary},${theme.secondary})`;
}
function createLapUpOverlay() {
    const div=document.createElement('div'); div.id='lapup-overlay'; div.className='overlay';
    div.innerHTML=`
        <div id="lapup-inner" style="border-radius:28px;padding:40px 32px;text-align:center;color:white;max-width:320px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,0.25);animation:lapup-pop 0.5s cubic-bezier(0.34,1.56,0.64,1);">
            <div id="lapup-emoji" style="font-size:3.5rem;margin-bottom:12px;"></div>
            <div id="lapup-grade" style="font-size:1rem;font-weight:700;opacity:0.9;margin-bottom:4px;"></div>
            <div id="lapup-lap"   style="font-size:2rem;font-weight:900;margin-bottom:8px;"></div>
            <div style="font-size:1rem;opacity:0.9;margin-bottom:24px;">ぜんぶの かんじを クリア！<br>つぎの しゅうへ すすもう！</div>
            <div id="lapup-name"  style="font-size:0.85rem;opacity:0.75;margin-bottom:20px;"></div>
            <button onclick="closeLapUp()" style="background:white;color:#333;border:none;border-radius:999px;padding:14px 40px;font-size:1.1rem;font-weight:800;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.15);">つぎへ すすむ！</button>
        </div>
        <style>@keyframes lapup-pop{0%{transform:scale(0.5);opacity:0}100%{transform:scale(1);opacity:1}}</style>`;
    document.body.appendChild(div);
}
function closeLapUp() {
    document.getElementById('lapup-overlay').classList.remove('active');
    if(pendingLevelUp){pendingLevelUp=false;showLevelUpDisplay(getStats().level);}
    else if(pendingGoHome){pendingGoHome=false;showScreen('title-screen');}
    else moveToNextKanji();
}
function handleRandomClearClick() {
    document.getElementById('random-clear-overlay').classList.remove('active');
    if(pendingLapUp){pendingLapUp=false;showLapUpDisplay(pendingLapGrade);return;}
    const lv=getStats().level;
    if(lv>levelBeforeRandomTest){pendingGoHome=true;showLevelUpDisplay(lv);}
    else showScreen('title-screen');
}

// ============================================================
// リセット
// ============================================================
function retry(){if(hintTimeout){clearTimeout(hintTimeout);hintTimeout=null;}isAnimating=false;startApp(currentChar);}
function showResetConfirm()  {playSound('click');document.getElementById('reset-confirm').classList.add('active');}
function closeResetConfirm() {playSound('click');document.getElementById('reset-confirm').classList.remove('active');}
function executeReset() {
    playSound('click');
    localStorage.clear();
    progressPractice={}; progressTest={}; tokkunKanji={}; nigateKanji={}; bonusXP=0; lapCount={}; mistakeCount={};
    document.getElementById('reset-confirm').classList.remove('active');
    location.reload();
}

// ============================================================
// 初期化
// ============================================================
updateUI();