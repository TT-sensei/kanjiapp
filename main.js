// --- 状態管理 ---
let progressPractice = JSON.parse(localStorage.getItem('kanjiMasterPractice')) || {};
let progressTest = JSON.parse(localStorage.getItem('kanjiMasterTest')) || {};
// ★ マイ漢字を廃止し、2つのフォルダを追加
let tokkunKanji = JSON.parse(localStorage.getItem('kanjiMasterTokkun')) || {}; 
let nigateKanji = JSON.parse(localStorage.getItem('kanjiMasterNigate')) || {}; 
let bonusXP = parseInt(localStorage.getItem('kanjiMasterBonusXP')) || 0;
let currentChar = null;
let currentMode = 'practice';
let currentGrade = 1;

// ▼▼▼ 判定エンジン用 変数 ▼▼▼
let currentKanjiPaths = []; 
let currentStrokeIndex = 0; 
let isDrawing = false;      
let userPoints = [];        
let isAnimating = false;    // アニメーション制御用
let hintTimeout = null;     // ヒント表示のタイマー管理用

let bgCanvasCtx, fixedCanvasCtx, drawCanvasCtx;

const CANVAS_SIZE = 250; 
const KVG_SIZE = 109;    
const PADDING = 15;      
const SCALE = (CANVAS_SIZE - PADDING * 2) / KVG_SIZE;

let isRandomTest = false;
let randomQueue = [];
let randomIndex = 0;
let levelBeforeRandomTest = 1;

let pendingLevelUp = false;
let pendingGoHome = false;

const XP_PER_LEVEL = 5;

// --- データ展開 ---
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

// --- 効果音システム ---
let audioContext;
function playSound(type) {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume();
    const now = audioContext.currentTime;
    
    const createOsc = (freq, type, dur, vol = 0.1) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = type; 
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(vol, now); 
        gain.gain.exponentialRampToValueAtTime(0.01, now + dur);
        osc.connect(gain); 
        gain.connect(audioContext.destination); 
        osc.start(now); 
        osc.stop(now + dur);
    };

    switch(type) {
        case 'success': 
            createOsc(880, 'sine', 0.15, 0.1); 
            setTimeout(() => createOsc(1108, 'sine', 0.2, 0.1), 50);
            break;
        case 'click': 
            createOsc(500, 'triangle', 0.1, 0.08); 
            break;
        case 'error': 
            createOsc(150, 'sawtooth', 0.3, 0.1); 
            break;
        case 'complete': 
            createOsc(600, 'sine', 0.15); 
            setTimeout(() => createOsc(900, 'sine', 0.25), 120); 
            break;
        case 'levelup': 
            const melody = [523, 659, 783, 1046, 783, 1046];
            melody.forEach((f, i) => {
                const o = audioContext.createOscillator(); 
                const g = audioContext.createGain();
                o.type = 'square'; o.frequency.value = f;
                g.gain.setValueAtTime(0.12, now + i*0.1); 
                g.gain.exponentialRampToValueAtTime(0.01, now + i*0.1 + 0.35);
                o.connect(g); g.connect(audioContext.destination); 
                o.start(now + i*0.1); o.stop(now + i*0.1 + 0.35);
            });
            break;
    }
}

// --- 経験値・レベルシステム ---
function getStats() {
    const practiceCount = Object.keys(progressPractice).length;
    const testCount = Object.keys(progressTest).length;
    const totalXP = practiceCount + (testCount*2) + bonusXP;
    
    const level = Math.floor(totalXP / XP_PER_LEVEL) + 1;
    const currentLevelXP = totalXP % XP_PER_LEVEL;
    const nextLevelXP = XP_PER_LEVEL - currentLevelXP;
    
    return { level, totalXP, currentLevelXP, nextLevelXP };
}

function getTitleData(level) {
    let current = TITLE_DATA[0];
    for (let i = 0; i < TITLE_DATA.length; i++) {
        if (level >= TITLE_DATA[i].level) {
            current = TITLE_DATA[i];
        } else {
            break;
        }
    }
    return current;
}

function updateUI() {
    const stats = getStats();
    const mascotData = getTitleData(stats.level);
    
    document.getElementById('title-mascot').innerText = mascotData.mascot;
    document.getElementById('title-level').innerText = `${stats.level}`;
    document.getElementById('title-name').innerText = mascotData.title;
    
    document.getElementById('list-mascot').innerText = mascotData.mascot;
    document.getElementById('list-level').innerText = `${stats.level}`;
    document.getElementById('next-xp').innerText = stats.nextLevelXP;
    
    const percent = (stats.currentLevelXP / XP_PER_LEVEL) * 100;
    document.getElementById('xp-bar').style.width = `${percent}%`;
}

// ★ フォルダごとの切り替え処理
function toggleFolder(type) {
    playSound('click');
    if (!currentChar) return;
    if (type === 'tokkun') {
        if (tokkunKanji[currentChar.char]) delete tokkunKanji[currentChar.char];
        else tokkunKanji[currentChar.char] = true;
        localStorage.setItem('kanjiMasterTokkun', JSON.stringify(tokkunKanji));
    } else if (type === 'nigate') {
        if (nigateKanji[currentChar.char]) delete nigateKanji[currentChar.char];
        else nigateKanji[currentChar.char] = true;
        localStorage.setItem('kanjiMasterNigate', JSON.stringify(nigateKanji));
    }
    updateFolderBtns();
}

function updateFolderBtns() {
    if (!currentChar) return;
    const tBtn = document.getElementById('tokkun-toggle');
    const nBtn = document.getElementById('nigate-toggle');
    if (tokkunKanji[currentChar.char]) {
        tBtn.classList.add('active'); tBtn.innerText = '★ とっくん';
    } else {
        tBtn.classList.remove('active'); tBtn.innerText = '☆ とっくん';
    }
    if (nigateKanji[currentChar.char]) {
        nBtn.classList.add('active'); nBtn.innerText = '★ にがて';
    } else {
        nBtn.classList.remove('active'); nBtn.innerText = '☆ にがて';
    }
}

function setGrade(grade) { playSound('click'); currentGrade = grade; updateTitleGradeButtons(); }
function updateTitleGradeButtons() {
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.querySelector('div:last-child').innerText) === currentGrade);
    });
}

function showScreen(screenId) {
    window.scrollTo(0, 0);
    isRandomTest = false;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'list-screen') renderList();
    else if (screenId === 'title-screen') {
        document.getElementById('home-search-input').value = ''; document.getElementById('search-box').value = '';
        updateTitleGradeButtons(); updateUI();
    }
}

function handleHomeSearch() {
    const query = document.getElementById('home-search-input').value;
    if (!query) return;
    document.getElementById('search-box').value = query;
    currentMode = 'practice'; playSound('click'); showScreen('list-screen'); filterList();
}

function selectMode(mode) { playSound('click'); currentMode = mode; document.getElementById('search-box').value = ''; showScreen('list-screen'); }
function filterList() { renderList(); }

function renderList() {
    updateUI();
    const searchText = document.getElementById('search-box').value.trim();
    const grid = document.getElementById('kanji-grid');
    const badge = document.getElementById('mode-display');
    
    if (currentMode === 'practice') {
        badge.innerText = searchText ? `🌍 ぜんがくねん・れんしゅう` : `${currentGrade}ねんせい・✏️ れんしゅう`;
        badge.style.background = 'linear-gradient(135deg, var(--secondary), #00E5A0)';
    } else if (currentMode === 'test') {
        badge.innerText = searchText ? `🌍 ぜんがくねん・テスト` : `${currentGrade}ねんせい・🏅 テスト`;
        badge.style.background = 'linear-gradient(135deg, var(--primary), #FF69B4)';
    } else if (currentMode === 'tokkun') {
        const count = Object.keys(tokkunKanji).length;
        badge.innerText = `💪 とっくん漢字（${count}コ）`;
        badge.style.background = 'linear-gradient(135deg, #4CAF50, #81C784)';
    } else if (currentMode === 'nigate') {
        const count = Object.keys(nigateKanji).length;
        badge.innerText = `💦 にがてな漢字（${count}コ）`;
        badge.style.background = 'linear-gradient(135deg, #9C27B0, #BA68C8)';
    }

    let filtered = [];
    
    if (currentMode === 'tokkun' || currentMode === 'nigate') {
        const targetFolder = currentMode === 'tokkun' ? tokkunKanji : nigateKanji;
        for (let g = 1; g <= 6; g++) {
            if (allKanjiData[g]) {
                const matches = allKanjiData[g].filter(item => targetFolder[item.char]);
                matches.forEach(m => m._foundGrade = g);
                filtered = filtered.concat(matches);
            }
        }
        if (searchText) {
            filtered = filtered.filter(item => item.char.includes(searchText) || (item.reading && item.reading.includes(searchText)));
        }
    } else {
        if (searchText) {
            for (let g = 1; g <= 6; g++) {
                if (allKanjiData[g]) {
                    const matches = allKanjiData[g].filter(item => item.char.includes(searchText) || (item.reading && item.reading.includes(searchText)));
                    matches.forEach(m => m._foundGrade = g);
                    filtered = filtered.concat(matches);
                }
            }
        } else {
            if (allKanjiData[currentGrade]) { filtered = allKanjiData[currentGrade]; filtered.forEach(m => m._foundGrade = currentGrade); }
        }
    }

    grid.innerHTML = '';
    if (filtered.length === 0) { grid.innerHTML = '<div style="grid-column:1/-1;padding:20px;">みつかりません...</div>'; return; }

    const targetProgress = (currentMode === 'practice' || currentMode === 'tokkun' || currentMode === 'nigate') ? progressPractice : progressTest;

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'kanji-card';
        if (targetProgress[item.char]) card.classList.add((currentMode === 'practice' || currentMode === 'tokkun' || currentMode === 'nigate') ? 'cleared-practice' : 'cleared-test');
        
        let badgeHtml = '';
        if (progressPractice[item.char]) badgeHtml += `<div class="mark-badge cleared-practice" style="display:flex;right:auto;left:-8px;"><span class="star-mark">⭐</span></div>`;
        if (progressTest[item.char]) badgeHtml += `<div class="mark-badge cleared-test" style="display:flex;"><span class="crown-mark">👑</span></div>`;
        if (tokkunKanji[item.char]) badgeHtml += `<div class="tokkun-mark">💪</div>`;
        if (nigateKanji[item.char]) badgeHtml += `<div class="nigate-mark">💦</div>`;
        
        const isFolderMode = (currentMode === 'tokkun' || currentMode === 'nigate');
        const gradeLabel = searchText || isFolderMode ? `<span style="position:absolute; bottom:3px; right:6px; font-size:0.65rem; color:#999; font-weight:600;">${item._foundGrade}年</span>` : '';
        card.innerHTML = `${item.char}${badgeHtml}${gradeLabel}`;
        card.onclick = () => { playSound('click'); if (item._foundGrade) currentGrade = item._foundGrade; startApp(item); };
        grid.appendChild(card);
    });
}

function startRandomTest() {
    playSound('click');
    const list = allKanjiData[currentGrade];
    if (!list || list.length === 0) return;
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    randomQueue = shuffled.slice(0, 10);
    randomIndex = 0;
    isRandomTest = true;
    currentMode = 'test';
    levelBeforeRandomTest = getStats().level;
    startApp(randomQueue[randomIndex]);
}

// ★ フォルダ別のテスト開始処理
function startFolderRandomTest(folderType) {
    playSound('click');
    let list = [];
    const targetFolder = folderType === 'tokkun' ? tokkunKanji : nigateKanji;
    const folderName = folderType === 'tokkun' ? 'とっくん' : 'にがて';

    for (let g = 1; g <= 6; g++) {
        if (allKanjiData[g]) {
            list = list.concat(allKanjiData[g].filter(item => targetFolder[item.char]));
        }
    }
    if (list.length < 10) {
        alert(`${folderName} に 10こ以上 登録すると テストできるよ！\n（いま: ${list.length}こ）\nれんしゅう画面で 登録してね。`);
        return;
    }
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    randomQueue = shuffled.slice(0, 10);
    randomIndex = 0;
    isRandomTest = true;
    currentMode = 'test';
    levelBeforeRandomTest = getStats().level;
    startApp(randomQueue[randomIndex]);
}

function handleBackFromPractice() {
    if (hintTimeout) { clearTimeout(hintTimeout); hintTimeout = null; }
    isAnimating = false;
    if (isRandomTest) {
        showScreen('title-screen');
    } else {
        showScreen('list-screen');
    }
}

// ▼▼▼ キャンバス判定エンジン ▼▼▼
async function fetchKanjiVG(char) {
    const hex = char.charCodeAt(0).toString(16).padStart(5, '0');
    const url = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("漢字データが見つかりません");
    const text = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "image/svg+xml");
    const paths = Array.from(doc.querySelectorAll('g[id^="kvg:StrokePaths_"] path'));
    return paths.map(p => p.getAttribute('d')); 
}

function initCanvasEngine() {
    const drawCanvas = document.getElementById('draw-canvas');
    bgCanvasCtx = document.getElementById('bg-canvas').getContext('2d');
    fixedCanvasCtx = document.getElementById('fixed-canvas').getContext('2d');
    drawCanvasCtx = drawCanvas.getContext('2d');

    const setupCtx = (ctx, color, width) => {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
    };
    setupCtx(bgCanvasCtx, '#E0E0E0', 5);   
    setupCtx(fixedCanvasCtx, '#333333', 5); 
    setupCtx(drawCanvasCtx, '#FF6B35', 5);  

    const getPos = (e) => {
        const rect = drawCanvas.getBoundingClientRect();
        const clientX = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
        const clientY = e.clientY ?? (e.touches ? e.touches[0].clientY : 0);
        return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const startDraw = (e) => {
        if (isAnimating || currentStrokeIndex >= currentKanjiPaths.length) return;
        isDrawing = true; 
        userPoints = [getPos(e)];
        drawCanvasCtx.beginPath(); 
        drawCanvasCtx.moveTo(userPoints[0].x, userPoints[0].y);
    };

    const draw = (e) => {
        if (!isDrawing || isAnimating) return;
        const pos = getPos(e); 
        userPoints.push(pos);
        drawCanvasCtx.lineTo(pos.x, pos.y); 
        drawCanvasCtx.stroke();
    };

    const endDraw = () => { 
        if (!isDrawing || isAnimating) return; 
        isDrawing = false; 
        evaluateStroke(); 
    };

    drawCanvas.addEventListener('mousedown', startDraw);
    drawCanvas.addEventListener('mousemove', draw);
    drawCanvas.addEventListener('mouseup', endDraw);
    drawCanvas.addEventListener('mouseout', endDraw);
    drawCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDraw(e); }, { passive: false });
    drawCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); }, { passive: false });
    drawCanvas.addEventListener('touchend', (e) => { e.preventDefault(); endDraw(); }, { passive: false });
}

function showStrokeHint(index) {
    if (index >= currentKanjiPaths.length) return;
    const pathData = currentKanjiPaths[index];
    
    if (hintTimeout) clearTimeout(hintTimeout);

    fixedCanvasCtx.save();
    fixedCanvasCtx.translate(PADDING, PADDING);
    fixedCanvasCtx.scale(SCALE, SCALE);
    fixedCanvasCtx.strokeStyle = 'rgba(255, 60, 60, 0.6)';
    fixedCanvasCtx.lineWidth = 5;
    fixedCanvasCtx.lineCap = 'round';
    fixedCanvasCtx.lineJoin = 'round';
    fixedCanvasCtx.stroke(new Path2D(pathData));
    fixedCanvasCtx.restore();

    hintTimeout = setTimeout(() => {
        fixedCanvasCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        fixedCanvasCtx.save();
        fixedCanvasCtx.translate(PADDING, PADDING);
        fixedCanvasCtx.scale(SCALE, SCALE);
        fixedCanvasCtx.strokeStyle = '#333333';
        fixedCanvasCtx.lineWidth = 5;
        fixedCanvasCtx.lineCap = 'round';
        fixedCanvasCtx.lineJoin = 'round';
        for (let i = 0; i < currentStrokeIndex; i++) {
            fixedCanvasCtx.stroke(new Path2D(currentKanjiPaths[i]));
        }
        fixedCanvasCtx.restore();
        hintTimeout = null;
    }, 1000);
}

function evaluateStroke() {
    if (userPoints.length < 2) { 
        drawCanvasCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 
        return; 
    }
    
    const pathData = currentKanjiPaths[currentStrokeIndex];
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', pathData);
    
    const totalLen = pathEl.getTotalLength();
    const tStart = pathEl.getPointAtLength(0);
    const tMid1 = pathEl.getPointAtLength(totalLen * 0.33);
    const tMid2 = pathEl.getPointAtLength(totalLen * 0.66);
    const tEnd = pathEl.getPointAtLength(totalLen);
    
    const scalePoint = (p) => ({ x: p.x * SCALE + PADDING, y: p.y * SCALE + PADDING });
    const targetStart = scalePoint(tStart);
    const targetMid1 = scalePoint(tMid1);
    const targetMid2 = scalePoint(tMid2);
    const targetEnd = scalePoint(tEnd);

    let userLen = 0;
    let userDistances = [0];
    for (let i = 1; i < userPoints.length; i++) {
        userLen += Math.hypot(userPoints[i].x - userPoints[i-1].x, userPoints[i].y - userPoints[i-1].y);
        userDistances.push(userLen);
    }

    const getUserPointAtLen = (targetD) => {
        if (targetD <= 0) return userPoints[0];
        if (targetD >= userLen) return userPoints[userPoints.length - 1];
        for (let i = 1; i < userPoints.length; i++) {
            if (userDistances[i] >= targetD) {
                let segment = userDistances[i] - userDistances[i-1];
                let ratio = segment === 0 ? 0 : (targetD - userDistances[i-1]) / segment;
                let p1 = userPoints[i-1], p2 = userPoints[i];
                return { x: p1.x + (p2.x - p1.x) * ratio, y: p1.y + (p2.y - p1.y) * ratio };
            }
        }
        return userPoints[userPoints.length - 1];
    };

    const uStart = userPoints[0];
    const uMid1 = getUserPointAtLen(userLen * 0.33);
    const uMid2 = getUserPointAtLen(userLen * 0.66);
    const uEnd = userPoints[userPoints.length - 1];

    const distStart = Math.hypot(uStart.x - targetStart.x, uStart.y - targetStart.y);
    const distMid1 = Math.hypot(uMid1.x - targetMid1.x, uMid1.y - targetMid1.y);
    const distMid2 = Math.hypot(uMid2.x - targetMid2.x, uMid2.y - targetMid2.y);
    const distEnd = Math.hypot(uEnd.x - targetEnd.x, uEnd.y - targetEnd.y);

    const THRESHOLD = 50; 
    
    if (distStart < THRESHOLD && distMid1 < THRESHOLD && distMid2 < THRESHOLD && distEnd < THRESHOLD && userLen > (totalLen * SCALE) * 0.4) {
        playSound('success'); 
        document.getElementById('message-area').innerText = "いいぞ！ その調子！";
        
        if (hintTimeout) {
            clearTimeout(hintTimeout);
            hintTimeout = null;
        }

        currentStrokeIndex++; 
        drawCanvasCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 

        fixedCanvasCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        fixedCanvasCtx.save();
        fixedCanvasCtx.translate(PADDING, PADDING);
        fixedCanvasCtx.scale(SCALE, SCALE);
        fixedCanvasCtx.strokeStyle = '#333333';
        fixedCanvasCtx.lineWidth = 5;
        fixedCanvasCtx.lineCap = 'round';
        fixedCanvasCtx.lineJoin = 'round';
        for (let i = 0; i < currentStrokeIndex; i++) {
            fixedCanvasCtx.stroke(new Path2D(currentKanjiPaths[i]));
        }
        fixedCanvasCtx.restore();

        if (currentStrokeIndex >= currentKanjiPaths.length) {
            handleComplete(); 
        }
    } else {
        playSound('error'); 
        document.getElementById('message-area').innerText = "おしい！ ここを見て！";
        drawCanvasCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 
        
        showStrokeHint(currentStrokeIndex);
    }
}

async function playAnimation() {
    if (isAnimating || currentKanjiPaths.length === 0) return;
    if (hintTimeout) { clearTimeout(hintTimeout); hintTimeout = null; } 
    isAnimating = true;

    currentStrokeIndex = 0;
    drawCanvasCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    fixedCanvasCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    fixedCanvasCtx.save();
    fixedCanvasCtx.translate(PADDING, PADDING);
    fixedCanvasCtx.scale(SCALE, SCALE);
    fixedCanvasCtx.strokeStyle = '#00BFFF'; 

    for (let i = 0; i < currentKanjiPaths.length; i++) {
        if (!isAnimating) break; 
        
        const pathData = currentKanjiPaths[i];
        const p = new Path2D(pathData);
        const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', pathData);
        const len = pathEl.getTotalLength();

        await new Promise(resolve => {
            let start = null;
            const duration = 250; 

            const step = (timestamp) => {
                if (!isAnimating) { resolve(); return; }
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);

                fixedCanvasCtx.clearRect(-100, -100, (CANVAS_SIZE * 2) / SCALE, (CANVAS_SIZE * 2) / SCALE);
                
                for(let j=0; j<i; j++) {
                    fixedCanvasCtx.setLineDash([]);
                    fixedCanvasCtx.stroke(new Path2D(currentKanjiPaths[j]));
                }

                fixedCanvasCtx.setLineDash([len, len]);
                fixedCanvasCtx.lineDashOffset = len * (1 - progress);
                fixedCanvasCtx.stroke(p);

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    fixedCanvasCtx.setLineDash([]); 
                    resolve();
                }
            };
            requestAnimationFrame(step);
        });
        
        if (!isAnimating) break;
        await new Promise(r => setTimeout(r, 60)); 
    }
    fixedCanvasCtx.restore();

    if (isAnimating) {
        setTimeout(() => {
            if (!isAnimating) return;
            fixedCanvasCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
            fixedCanvasCtx.strokeStyle = '#333333'; 
            isAnimating = false;
        }, 600); 
    }
}

// --- アプリ制御 ---
async function startApp(item) {
    if (hintTimeout) { clearTimeout(hintTimeout); hintTimeout = null; }
    isAnimating = false;
    currentChar = item;
    window.scrollTo(0, 0);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('practice-screen').classList.add('active');
    
    updateFolderBtns();

    const msgArea = document.getElementById('message-area');
    const readingDisplay = document.getElementById('current-reading');
    if (readingDisplay) readingDisplay.style.display = 'none'; // 元の読み表示を隠す
    
    if (isRandomTest) {
        msgArea.innerText = `🎲 テスト: ${randomIndex + 1} / ${randomQueue.length}問目`;
        msgArea.style.color = "#9B59B6";
    } else if (currentMode === 'test') {
        msgArea.innerText = "この かんじ を かこう！";
        msgArea.style.color = "#FF1493";
    } else {
        msgArea.innerText = "うすいせんを なぞろう！";
        msgArea.style.color = "#00D084";
    }

    // ★ 読み仮名の自動振り分け ＆ カッコの全角変換
    let onyomi = [];
    let kunyomi = [];
    if (item.reading) {
        // 半角()を全角（）に変換し、不要なピリオドを削除
        let cleanReading = item.reading.replace(/\(/g, '（').replace(/\)/g, '）').replace(/\./g, '');
        // カンマなどで区切って配列にする
        const parts = cleanReading.split(/[、,／\/ \u3000]+/);
        
        parts.forEach(p => {
            if (!p) return;
            if (/[\u30A0-\u30FF]/.test(p)) {
                onyomi.push(p);
            } else {
                kunyomi.push(p);
            }
        });
    }

    // ★ PC用：<br>で区切って列を分ける（縦書きなので左に列が増えます）
    const displayOnPC = onyomi.join("<br>");
    const displayKunPC = kunyomi.join("<br>");

    // ★ スマホ用：横並び用にスペース区切り
    const displayOnMobile = onyomi.length > 0 ? `<span style="font-size: 0.8rem; color:#C62828; border: 1px solid #FFCDD2; background: #FFEBEE; border-radius: 12px; padding: 2px 8px; margin-right:6px;">おんよみ</span>${onyomi.join("　")}` : "";
    const displayKunMobile = kunyomi.length > 0 ? `<span style="font-size: 0.8rem; color:#1565C0; border: 1px solid #BBDEFB; background: #E3F2FD; border-radius: 12px; padding: 2px 8px; margin-right:6px;">くんよみ</span>${kunyomi.join("　")}` : "";

    const targetDiv = document.getElementById('character-target');
    
    // 画像のデザインに合わせてスタイルを大幅アップデート
    targetDiv.innerHTML = `
        <style>
            .kanji-layout {
                display: flex;
                justify-content: center;
                align-items: stretch; /* 高さを揃える */
                gap: 25px;
                width: 100%;
                margin-top: 10px;
            }
            .side-col {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 80px; /* カラムの幅を固定 */
            }
            /* 上部の丸いバッジ */
            .yomi-badge {
                writing-mode: horizontal-tb;
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: bold;
                margin-bottom: 20px;
                white-space: nowrap;
            }
            .yomi-badge.kun {
                border: 2px solid #D6EAF8;
                color: #2874A6;
                background: #EBF5FB;
            }
            .yomi-badge.on {
                border: 2px solid #FADBD8;
                color: #B03A2E;
                background: #FDEDEC;
            }
            /* 縦書きテキスト */
            .yomi-pc {
                writing-mode: vertical-rl;
                text-orientation: upright;
                font-size: 1.5rem;
                font-weight: bold;
                letter-spacing: 0.2rem;
                line-height: 2.2; /* 複数列になった時の隙間 */
                text-align: start;
            }
            .yomi-mobile {
                display: none;
            }
            
            /* スマホ用レスポンシブ */
            @media (max-width: 500px) {
                .kanji-layout {
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }
                .side-col {
                    display: none; /* スマホ時は左右のカラムを隠す */
                }
                .yomi-mobile {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    width: 100%;
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }
        </style>
        
        <div class="kanji-layout">
            <div class="side-col">
                ${kunyomi.length > 0 ? `
                <div class="yomi-badge kun">くんよみ</div>
                <div class="yomi-pc" style="color: #2874A6;">${displayKunPC}</div>
                ` : ''}
            </div>

            <div class="yomi-mobile">
                ${kunyomi.length > 0 ? `<div style="color: #2874A6;">${displayKunMobile}</div>` : ''}
                ${onyomi.length > 0 ? `<div style="color: #B03A2E;">${displayOnMobile}</div>` : ''}
            </div>

            <div style="position: relative; width: ${CANVAS_SIZE}px; height: ${CANVAS_SIZE}px; margin: 0; background-color: white; flex-shrink: 0; border-radius: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <canvas id="bg-canvas" width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" style="position: absolute; top: 0; left: 0; z-index: 1;"></canvas>
                <canvas id="fixed-canvas" width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" style="position: absolute; top: 0; left: 0; z-index: 2;"></canvas>
                <canvas id="draw-canvas" width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" style="position: absolute; top: 0; left: 0; z-index: 3; touch-action: none; cursor: crosshair;"></canvas>
            </div>

            <div class="side-col">
                ${onyomi.length > 0 ? `
                <div class="yomi-badge on">おんよみ</div>
                <div class="yomi-pc" style="color: #B03A2E;">${displayOnPC}</div>
                ` : ''}
            </div>
        </div>
    `;

    initCanvasEngine();
    currentStrokeIndex = 0;

    // 薄い青色の十字点線（ガイド）を描画（画像に合わせて色と太さを調整）
    bgCanvasCtx.save();
    bgCanvasCtx.strokeStyle = '#D6EAF8'; 
    bgCanvasCtx.lineWidth = 3;           
    bgCanvasCtx.setLineDash([8, 8]);     
    bgCanvasCtx.beginPath();
    bgCanvasCtx.moveTo(CANVAS_SIZE / 2, 0);
    bgCanvasCtx.lineTo(CANVAS_SIZE / 2, CANVAS_SIZE);
    bgCanvasCtx.moveTo(0, CANVAS_SIZE / 2);
    bgCanvasCtx.lineTo(CANVAS_SIZE, CANVAS_SIZE / 2);
    bgCanvasCtx.stroke();
    bgCanvasCtx.restore();

    try {
        currentKanjiPaths = await fetchKanjiVG(item.char);

        if (currentMode === 'practice' || currentMode === 'tokkun' || currentMode === 'nigate') {
            bgCanvasCtx.save();
            bgCanvasCtx.translate(PADDING, PADDING);
            bgCanvasCtx.scale(SCALE, SCALE);
            currentKanjiPaths.forEach(pathData => {
                bgCanvasCtx.stroke(new Path2D(pathData));
            });
            bgCanvasCtx.restore();
        }
    } catch (error) {
        msgArea.innerText = "エラー: データがよみこめません";
        console.error(error);
    }
}

function handleComplete() {
    playSound('complete');
    const msg = document.getElementById('result-msg');
    const icon = document.getElementById('result-icon');
    
    const isPractice = (currentMode === 'practice' || currentMode === 'tokkun' || currentMode === 'nigate');
    const targetStorage = isPractice ? progressPractice : progressTest;
    const storageKey = isPractice ? 'kanjiMasterPractice' : 'kanjiMasterTest';

    const oldLevel = getStats().level;
    targetStorage[currentChar.char] = true;
    localStorage.setItem(storageKey, JSON.stringify(targetStorage));
    const newLevel = getStats().level;
    
    if (!isRandomTest && newLevel > oldLevel) pendingLevelUp = true;

    if (isPractice) {
        msg.innerText = "できたー！"; msg.style.color = "#00D084"; icon.innerText = "⭐";
    } else {
        msg.innerText = "だいせいかい！"; msg.style.color = "#FF1493"; icon.innerText = "👑";
    }

    setTimeout(() => {
        document.getElementById('result-overlay').classList.add('active');
    }, 800);
}

function handleNextClick() {
    document.getElementById('result-overlay').classList.remove('active');
    if (pendingLevelUp) {
        pendingLevelUp = false;
        showLevelUpDisplay(getStats().level);
        return;
    }
    moveToNextKanji();
}

function moveToNextKanji() {
    if (isRandomTest) {
        randomIndex++;
        if (randomIndex < randomQueue.length) {
            startApp(randomQueue[randomIndex]);
        } else {
            isRandomTest = false;
            bonusXP += 10;
            localStorage.setItem('kanjiMasterBonusXP', bonusXP);
            document.getElementById('random-clear-overlay').classList.add('active');
            playSound('levelup');
            updateUI();
        }
    } else {
        let list = [];
        if (currentMode === 'tokkun' || currentMode === 'nigate') {
             const targetFolder = currentMode === 'tokkun' ? tokkunKanji : nigateKanji;
             for (let g = 1; g <= 6; g++) {
                if (allKanjiData[g]) {
                    list = list.concat(allKanjiData[g].filter(item => targetFolder[item.char]));
                }
            }
        } else {
            list = allKanjiData[currentGrade];
            if (currentChar._foundGrade) list = allKanjiData[currentChar._foundGrade];
        }
        
        if (!list || list.length === 0) { showScreen('list-screen'); return; }

        const idx = list.findIndex(k => k.char === currentChar.char);
        if (idx >= 0 && idx < list.length - 1) {
            startApp(list[idx + 1]);
        } else {
            showScreen('list-screen');
        }
    }
}

function showLevelUpDisplay(level) {
    playSound('levelup');
    document.getElementById('levelup-overlay').classList.add('active');
    document.getElementById('new-level-num').innerText = level;
    const newTitleData = getTitleData(level);
    document.getElementById('levelup-mascot').innerText = newTitleData.mascot;
}

function closeLevelUp() {
    document.getElementById('levelup-overlay').classList.remove('active');
    if (pendingGoHome) {
        pendingGoHome = false;
        showScreen('title-screen');
    } else {
        moveToNextKanji();
    }
}

function handleRandomClearClick() {
    document.getElementById('random-clear-overlay').classList.remove('active');
    const currentLevel = getStats().level;
    if (currentLevel > levelBeforeRandomTest) {
        pendingGoHome = true;
        showLevelUpDisplay(currentLevel);
    } else {
        showScreen('title-screen');
    }
}

function retry() { 
    if (hintTimeout) { clearTimeout(hintTimeout); hintTimeout = null; }
    isAnimating = false; 
    startApp(currentChar); 
}

function showResetConfirm() { playSound('click'); document.getElementById('reset-confirm').classList.add('active'); }
function closeResetConfirm() { playSound('click'); document.getElementById('reset-confirm').classList.remove('active'); }

function executeReset() {
    playSound('click');
    localStorage.clear();
    progressPractice = {}; progressTest = {}; 
    tokkunKanji = {}; nigateKanji = {}; 
    bonusXP = 0;
    document.getElementById('reset-confirm').classList.remove('active');
    location.reload();
}

updateUI();
