// 小学校2年生で習う漢字（160字）の書き取り練習用例文。
// reading は、文中の対象漢字の読み（送り仮名を除く）だけを記録する。
const kanjiExampleData_2 = {
  "引": [
    { sentence: "つなを 引きます。", reading: "ひ", level: 1 },
    { sentence: "ノートに せんを 引きます。", reading: "ひ", level: 2 },
    { sentence: "おもい とびらを ゆっくり 引きました。", reading: "ひ", level: 3 }
  ],

  "羽": [
    { sentence: "しろい 羽を ひろいました。", reading: "はね", level: 1 },
    { sentence: "とりが 羽を ひろげます。", reading: "はね", level: 2 },
    { sentence: "こうえんで ちゃいろの 羽を いちまい みつけました。", reading: "はね", level: 3 }
  ],

  "雲": [
    { sentence: "しろい 雲が うかびます。", reading: "くも", level: 1 },
    { sentence: "あま雲が ちかづいて きました。", reading: "ぐも", level: 2 },
    { sentence: "おおきな 雲の あいだから ひが さしました。", reading: "くも", level: 3 }
  ],

  "園": [
    { sentence: "こう園で あそびます。", reading: "えん", level: 1 },
    { sentence: "どうぶつ園で ぞうを みます。", reading: "えん", level: 2 },
    { sentence: "にちようびに かぞくと しょくぶつ園へ いきました。", reading: "えん", level: 3 }
  ],

  "遠": [
    { sentence: "遠くに やまが みえます。", reading: "とお", level: 1 },
    { sentence: "あしたは 遠そくです。", reading: "えん", level: 2 },
    { sentence: "遠くの ともだちに てがみを かきました。", reading: "とお", level: 3 }
  ],

  "何": [
    { sentence: "これは 何ですか？", reading: "なん", level: 1 },
    { sentence: "何いろを つかいますか？", reading: "なに", level: 2 },
    { sentence: "はこの なかに 何が はいって いるか かんがえました。", reading: "なに", level: 3 }
  ],

  "科": [
    { sentence: "り科が すきです。", reading: "か", level: 1 },
    { sentence: "せいかつ科で まちを たんけんします。", reading: "か", level: 2 },
    { sentence: "り科の じかんに しょくぶつを よく みました。", reading: "か", level: 3 }
  ],

  "夏": [
    { sentence: "夏に うみへ いきます。", reading: "なつ", level: 1 },
    { sentence: "夏やすみに ほんを よみます。", reading: "なつ", level: 2 },
    { sentence: "あつい 夏の よるに かぞくで はなびを みました。", reading: "なつ", level: 3 }
  ],

  "家": [
    { sentence: "家に かえります。", reading: "いえ", level: 1 },
    { sentence: "家ぞくで ごはんを たべます。", reading: "か", level: 2 },
    { sentence: "あめが ふったので ともだちと 家の なかで あそびました。", reading: "いえ", level: 3 }
  ],

  "歌": [
    { sentence: "みんなで 歌います。", reading: "うた", level: 1 },
    { sentence: "おんがくで こう歌を うたいます。", reading: "か", level: 2 },
    { sentence: "がくげいかいで げんきな 歌を はっぴょうしました。", reading: "うた", level: 3 }
  ],

  "画": [
    { sentence: "えい画を みます。", reading: "が", level: 1 },
    { sentence: "ずこうで 画ようしを つかいます。", reading: "が", level: 2 },
    { sentence: "おおきな 画ようしに みんなで まちの えを かきました。", reading: "が", level: 3 }
  ],

  "回": [
    { sentence: "こまが 回ります。", reading: "まわ", level: 1 },
    { sentence: "なわとびを じゅう回 とびました。", reading: "かい", level: 2 },
    { sentence: "こうていを に回 はしってから みずを のみました。", reading: "かい", level: 3 }
  ],

  "会": [
    { sentence: "ともだちに 会います。", reading: "あ", level: 1 },
    { sentence: "じどう会で はなしあいます。", reading: "かい", level: 2 },
    { sentence: "おたのしみ会で みんなと ゲームを しました。", reading: "かい", level: 3 }
  ],

  "海": [
    { sentence: "海で およぎます。", reading: "うみ", level: 1 },
    { sentence: "海べで かいがらを ひろいます。", reading: "うみ", level: 2 },
    { sentence: "なつやすみに あおい 海で ちいさな さかなを みつけました。", reading: "うみ", level: 3 }
  ],

  "絵": [
    { sentence: "はなの 絵を かきます。", reading: "え", level: 1 },
    { sentence: "絵ほんを よみます。", reading: "え", level: 2 },
    { sentence: "ずこうの じかんに ともだちの かおを 絵に かきました。", reading: "え", level: 3 }
  ],

  "外": [
    { sentence: "外で あそびます。", reading: "そと", level: 1 },
    { sentence: "ぼうしを 外します。", reading: "はず", level: 2 },
    { sentence: "あめが やんだので 外に でて むしを さがしました。", reading: "そと", level: 3 }
  ],

  "角": [
    { sentence: "しかの 角を みました。", reading: "つの", level: 1 },
    { sentence: "さん角の かたちを かきます。", reading: "かく", level: 2 },
    { sentence: "おりがみの 角どうしを ぴったり あわせました。", reading: "かど", level: 3 }
  ],

  "楽": [
    { sentence: "えんそくが 楽しみです。", reading: "たの", level: 1 },
    { sentence: "おん楽で けんばんを ひきます。", reading: "がく", level: 2 },
    { sentence: "やすみじかんに ともだちと 楽しく あそびました。", reading: "たの", level: 3 }
  ],

  "活": [
    { sentence: "げんきに 活どうします。", reading: "かつ", level: 1 },
    { sentence: "せい活かで はなを そだてます。", reading: "かつ", level: 2 },
    { sentence: "はんの 活どうで まちの よい ところを さがしました。", reading: "かつ", level: 3 }
  ],

  "間": [
    { sentence: "いすの 間を とおります。", reading: "あいだ", level: 1 },
    { sentence: "やすみじ間に ほんを よみます。", reading: "かん", level: 2 },
    { sentence: "でんしゃを まつ 間に えきの ちずを みました。", reading: "あいだ", level: 3 }
  ],

  "丸": [
    { sentence: "丸い いしを ひろいます。", reading: "まる", level: 1 },
    { sentence: "こたえに 丸を つけます。", reading: "まる", level: 2 },
    { sentence: "ねんどを てのひらで ころがして 丸く しました。", reading: "まる", level: 3 }
  ],

  "岩": [
    { sentence: "おおきな 岩が あります。", reading: "いわ", level: 1 },
    { sentence: "うみべの 岩に かにが います。", reading: "いわ", level: 2 },
    { sentence: "かわの そばに ある 岩に こしを かけて やすみました。", reading: "いわ", level: 3 }
  ],

  "顔": [
    { sentence: "顔を あらいます。", reading: "かお", level: 1 },
    { sentence: "わらった 顔を かきます。", reading: "かお", level: 2 },
    { sentence: "あさ おきたら 顔を あらって はを みがきます。", reading: "かお", level: 3 }
  ],

  "汽": [
    { sentence: "汽しゃが はしります。", reading: "き", level: 1 },
    { sentence: "汽しゃの きてきが なりました。", reading: "き", level: 2 },
    { sentence: "やまの あいだを 汽しゃが ゆっくり すすみました。", reading: "き", level: 3 }
  ],

  "記": [
    { sentence: "にっ記を かきます。", reading: "き", level: 1 },
    { sentence: "みつけた ことを 記ろくします。", reading: "き", level: 2 },
    { sentence: "きょう あった たのしい できごとを にっ記に かきました。", reading: "き", level: 3 }
  ],

  "帰": [
    { sentence: "いえに 帰ります。", reading: "かえ", level: 1 },
    { sentence: "帰りの かいを はじめます。", reading: "かえ", level: 2 },
    { sentence: "じゅぎょうが おわったので ともだちと いっしょに 帰りました。", reading: "かえ", level: 3 }
  ],

  "弓": [
    { sentence: "弓を ひきます。", reading: "ゆみ", level: 1 },
    { sentence: "むかしの 弓を みました。", reading: "ゆみ", level: 2 },
    { sentence: "はくぶつかんで きから できた 弓を みつけました。", reading: "ゆみ", level: 3 }
  ],

  "牛": [
    { sentence: "牛が くさを たべます。", reading: "うし", level: 1 },
    { sentence: "きゅうしょくで 牛にゅうを のみます。", reading: "ぎゅう", level: 2 },
    { sentence: "ぼくじょうで おおきな 牛に えさを あげました。", reading: "うし", level: 3 }
  ],

  "魚": [
    { sentence: "魚が およぎます。", reading: "さかな", level: 1 },
    { sentence: "みずそうで きん魚を かいます。", reading: "ぎょ", level: 2 },
    { sentence: "かわの みずを のぞくと ちいさな 魚が みえました。", reading: "さかな", level: 3 }
  ],

  "京": [
    { sentence: "とう京へ いきます。", reading: "きょう", level: 1 },
    { sentence: "京とには おてらが あります。", reading: "きょう", level: 2 },
    { sentence: "しゃしんを みながら とう京の めいしょを しらべました。", reading: "きょう", level: 3 }
  ],

  "強": [
    { sentence: "強い かぜが ふきます。", reading: "つよ", level: 1 },
    { sentence: "かんじを べん強します。", reading: "きょう", level: 2 },
    { sentence: "あめが 強く なったので いそいで いえに はいりました。", reading: "つよ", level: 3 }
  ],

  "教": [
    { sentence: "せんせいが 教えます。", reading: "おし", level: 1 },
    { sentence: "教しつで ほんを よみます。", reading: "きょう", level: 2 },
    { sentence: "わからない もんだいを ともだちに 教えて もらいました。", reading: "おし", level: 3 }
  ],

  "近": [
    { sentence: "がっこうは 近いです。", reading: "ちか", level: 1 },
    { sentence: "近くの こうえんへ いきます。", reading: "ちか", level: 2 },
    { sentence: "あめが ふりそうなので 近い みちを とおって かえりました。", reading: "ちか", level: 3 }
  ],

  "兄": [
    { sentence: "兄と あそびます。", reading: "あに", level: 1 },
    { sentence: "兄だいで そうじを します。", reading: "きょう", level: 2 },
    { sentence: "やすみのひに 兄と いっしょに こうえんへ いきました。", reading: "あに", level: 3 }
  ],

  "形": [
    { sentence: "まるい 形です。", reading: "かたち", level: 1 },
    { sentence: "さんかくの 形を つくります。", reading: "かたち", level: 2 },
    { sentence: "いろがみを ほしの 形に きって かざりを つくりました。", reading: "かたち", level: 3 }
  ],

  "計": [
    { sentence: "と計を みます。", reading: "けい", level: 1 },
    { sentence: "ものさしで ながさを 計ります。", reading: "はか", level: 2 },
    { sentence: "りょうりに つかう みずを けいりょうカップで 計りました。", reading: "はか", level: 3 }
  ],

  "元": [
    { sentence: "元きに あいさつします。", reading: "げん", level: 1 },
    { sentence: "ほんを 元の ばしょへ もどします。", reading: "もと", level: 2 },
    { sentence: "かぜが なおって 元きに がっこうへ いきました。", reading: "げん", level: 3 }
  ],

  "言": [
    { sentence: "ありがとうと 言います。", reading: "い", level: 1 },
    { sentence: "せんせいの 言ばを よく ききます。", reading: "こと", level: 2 },
    { sentence: "こまって いる ともだちに いっしょに やろうと 言いました。", reading: "い", level: 3 }
  ],

  "原": [
    { sentence: "原っぱを はしります。", reading: "はら", level: 1 },
    { sentence: "そう原に はなが さきます。", reading: "げん", level: 2 },
    { sentence: "ひろい 原っぱで ともだちと おにごっこを しました。", reading: "はら", level: 3 }
  ],

  "戸": [
    { sentence: "戸を あけます。", reading: "と", level: 1 },
    { sentence: "あま戸を しめます。", reading: "ど", level: 2 },
    { sentence: "さむい かぜが はいるので げんかんの 戸を しめました。", reading: "と", level: 3 }
  ],

  "古": [
    { sentence: "古い ほんを よみます。", reading: "ふる", level: 1 },
    { sentence: "古ほんやへ いきます。", reading: "ふる", level: 2 },
    { sentence: "ものおきで おじいさんの 古い とけいを みつけました。", reading: "ふる", level: 3 }
  ],

  "午": [
    { sentence: "午ぜんに べんきょうします。", reading: "ご", level: 1 },
    { sentence: "しょう午に おひるを たべます。", reading: "ご", level: 2 },
    { sentence: "午ぜん じゅうじに こうえんの いりくちで あいましょう。", reading: "ご", level: 3 }
  ],

  "後": [
    { sentence: "後ろを みます。", reading: "うし", level: 1 },
    { sentence: "そうじの 後で てを あらいます。", reading: "あと", level: 2 },
    { sentence: "がっこうから かえった 後に しゅくだいを しました。", reading: "あと", level: 3 }
  ],

  "語": [
    { sentence: "こく語を べんきょうします。", reading: "ご", level: 1 },
    { sentence: "もの語りを よみます。", reading: "がた", level: 2 },
    { sentence: "こく語の じかんに すきな ほんを しょうかいしました。", reading: "ご", level: 3 }
  ],

  "工": [
    { sentence: "ず工で はこを つくります。", reading: "こう", level: 1 },
    { sentence: "だい工さんが いえを たてます。", reading: "く", level: 2 },
    { sentence: "ず工の じかんに きの えだで おもちゃを つくりました。", reading: "こう", level: 3 }
  ],

  "公": [
    { sentence: "公えんで あそびます。", reading: "こう", level: 1 },
    { sentence: "公みんかんで おまつりが あります。", reading: "こう", level: 2 },
    { sentence: "ちかくの 公えんで ともだちと ボールを けりました。", reading: "こう", level: 3 }
  ],

  "広": [
    { sentence: "広い にわです。", reading: "ひろ", level: 1 },
    { sentence: "ちずを 広げます。", reading: "ひろ", level: 2 },
    { sentence: "広い こうていで みんなと リレーを しました。", reading: "ひろ", level: 3 }
  ],

  "交": [
    { sentence: "あいさつを 交わします。", reading: "か", level: 1 },
    { sentence: "交さてんで とまります。", reading: "こう", level: 2 },
    { sentence: "まちの 交さてんでは みぎと ひだりを よく みて わたります。", reading: "こう", level: 3 }
  ],

  "光": [
    { sentence: "ひが 光ります。", reading: "ひか", level: 1 },
    { sentence: "まどから 光が はいります。", reading: "ひかり", level: 2 },
    { sentence: "あさの 光が まどから さして へやが あかるく なりました。", reading: "ひかり", level: 3 }
  ],

  "考": [
    { sentence: "こたえを 考えます。", reading: "かんが", level: 1 },
    { sentence: "みんなで 考えを はなします。", reading: "かんが", level: 2 },
    { sentence: "どうすれば うまく できるか はんの ともだちと 考えました。", reading: "かんが", level: 3 }
  ],

  "行": [
    { sentence: "がっこうへ 行きます。", reading: "い", level: 1 },
    { sentence: "うんどうかいを 行います。", reading: "おこな", level: 2 },
    { sentence: "にちようびに かぞくと どうぶつえんへ 行きました。", reading: "い", level: 3 }
  ],

  "高": [
    { sentence: "高い きです。", reading: "たか", level: 1 },
    { sentence: "ボールを 高く なげます。", reading: "たか", level: 2 },
    { sentence: "高い やまの うえには しろい ゆきが のこって いました。", reading: "たか", level: 3 }
  ],

  "黄": [
    { sentence: "黄いろの はなです。", reading: "き", level: 1 },
    { sentence: "しんごうが 黄いろに なります。", reading: "き", level: 2 },
    { sentence: "あきに なると きの はが 黄いろく かわります。", reading: "き", level: 3 }
  ],

  "合": [
    { sentence: "こたえが 合います。", reading: "あ", level: 1 },
    { sentence: "みんなで 合しょうします。", reading: "がっ", level: 2 },
    { sentence: "おんがくかいに むけて まいにち 合しょうの れんしゅうを しました。", reading: "がっ", level: 3 }
  ],

  "谷": [
    { sentence: "谷に かわが ながれます。", reading: "たに", level: 1 },
    { sentence: "やまと やまの 谷あいを みます。", reading: "たに", level: 2 },
    { sentence: "たかい やまから したの 谷を みると かわが ひかって いました。", reading: "たに", level: 3 }
  ],

  "国": [
    { sentence: "わたしの 国は にほんです。", reading: "くに", level: 1 },
    { sentence: "国ごの ほんを よみます。", reading: "こく", level: 2 },
    { sentence: "ずかんで いろいろな 国の どうぶつを しらべました。", reading: "くに", level: 3 }
  ],

  "黒": [
    { sentence: "黒い ねこです。", reading: "くろ", level: 1 },
    { sentence: "黒ばんに じを かきます。", reading: "こく", level: 2 },
    { sentence: "ずこうで しろい かみに 黒い クレヨンで せんを ひきました。", reading: "くろ", level: 3 }
  ],

  "今": [
    { sentence: "今から はじめます。", reading: "いま", level: 1 },
    { sentence: "今しゅうは うんどうかいです。", reading: "こん", level: 2 },
    { sentence: "今まで できなかった さかあがりが できました。", reading: "いま", level: 3 }
  ],

  "才": [
    { sentence: "はち才に なりました。", reading: "さい", level: 1 },
    { sentence: "おとうとは ご才です。", reading: "さい", level: 2 },
    { sentence: "たんじょうびが きて わたしは はち才に なりました。", reading: "さい", level: 3 }
  ],

  "細": [
    { sentence: "細い ひもです。", reading: "ほそ", level: 1 },
    { sentence: "かみを 細かく きります。", reading: "こま", level: 2 },
    { sentence: "細い ふでを つかって はなの もようを かきました。", reading: "ほそ", level: 3 }
  ],

  "作": [
    { sentence: "かみで はなを 作ります。", reading: "つく", level: 1 },
    { sentence: "ずこうの 作ひんを かざります。", reading: "さく", level: 2 },
    { sentence: "ともだちと いっしょに おおきな まちの もけいを 作りました。", reading: "つく", level: 3 }
  ],

  "算": [
    { sentence: "算すうを べんきょうします。", reading: "さん", level: 1 },
    { sentence: "たし算の もんだいを ときます。", reading: "ざん", level: 2 },
    { sentence: "算すうの じかんに くくを こえに だして となえました。", reading: "さん", level: 3 }
  ],

  "止": [
    { sentence: "あかしんごうで 止まります。", reading: "と", level: 1 },
    { sentence: "みずを 止めます。", reading: "と", level: 2 },
    { sentence: "こうさてんでは いちど 止まって くるまが こないか みます。", reading: "と", level: 3 }
  ],

  "市": [
    { sentence: "この 市に すんで います。", reading: "し", level: 1 },
    { sentence: "市りつ ずしょかんへ いきます。", reading: "し", level: 2 },
    { sentence: "せいかつかで わたしたちの 市に ある しせつを しらべました。", reading: "し", level: 3 }
  ],

  "矢": [
    { sentence: "矢が とびます。", reading: "や", level: 1 },
    { sentence: "みぎむきの 矢じるしです。", reading: "や", level: 2 },
    { sentence: "えきの ゆかに ある 矢じるしの ほうへ すすみました。", reading: "や", level: 3 }
  ],

  "姉": [
    { sentence: "姉と はなします。", reading: "あね", level: 1 },
    { sentence: "姉まいで ピアノを ひきます。", reading: "し", level: 2 },
    { sentence: "姉が としょかんで おもしろい ほんを かりて くれました。", reading: "あね", level: 3 }
  ],

  "思": [
    { sentence: "そうだと 思います。", reading: "おも", level: 1 },
    { sentence: "ともだちを 思いやります。", reading: "おも", level: 2 },
    { sentence: "この おはなしの つづきが どうなるか 思いうかべました。", reading: "おも", level: 3 }
  ],

  "紙": [
    { sentence: "紙を おります。", reading: "かみ", level: 1 },
    { sentence: "いろ紙で はなを つくります。", reading: "がみ", level: 2 },
    { sentence: "おおきな 紙に えのぐで うみの えを かきました。", reading: "かみ", level: 3 }
  ],

  "寺": [
    { sentence: "お寺へ いきます。", reading: "てら", level: 1 },
    { sentence: "ふるい 寺を けんがくします。", reading: "てら", level: 2 },
    { sentence: "まちたんけんで おおきな かねの ある お寺を みました。", reading: "てら", level: 3 }
  ],

  "自": [
    { sentence: "自ぶんで できます。", reading: "じ", level: 1 },
    { sentence: "自てんしゃに のります。", reading: "じ", level: 2 },
    { sentence: "むずかしかったけれど 自ぶんで さいごまで やりました。", reading: "じ", level: 3 }
  ],

  "時": [
    { sentence: "いまは さん時です。", reading: "じ", level: 1 },
    { sentence: "やすみ時かんに あそびます。", reading: "じ", level: 2 },
    { sentence: "ちいさい 時に つかった おもちゃを みつけました。", reading: "とき", level: 3 }
  ],

  "室": [
    { sentence: "きょう室に はいります。", reading: "しつ", level: 1 },
    { sentence: "おんがく室で うたいます。", reading: "しつ", level: 2 },
    { sentence: "やすみじかんに としょ室で どうぶつの ほんを よみました。", reading: "しつ", level: 3 }
  ],

  "社": [
    { sentence: "じん社へ いきます。", reading: "じゃ", level: 1 },
    { sentence: "かい社で はたらきます。", reading: "しゃ", level: 2 },
    { sentence: "おしょうがつに かぞくと ちかくの じん社へ おまいりしました。", reading: "じゃ", level: 3 }
  ],

  "弱": [
    { sentence: "弱い かぜです。", reading: "よわ", level: 1 },
    { sentence: "ひを 弱く します。", reading: "よわ", level: 2 },
    { sentence: "あめが 弱く なったので かさを とじました。", reading: "よわ", level: 3 }
  ],

  "首": [
    { sentence: "首を まわします。", reading: "くび", level: 1 },
    { sentence: "首に タオルを まきます。", reading: "くび", level: 2 },
    { sentence: "たいそうで 首を ゆっくり さゆうに うごかしました。", reading: "くび", level: 3 }
  ],

  "秋": [
    { sentence: "秋に なりました。", reading: "あき", level: 1 },
    { sentence: "秋の このはを ひろいます。", reading: "あき", level: 2 },
    { sentence: "秋の こうえんで あかや きいろの はを あつめました。", reading: "あき", level: 3 }
  ],

  "週": [
    { sentence: "いっ週かんが たちました。", reading: "しゅう", level: 1 },
    { sentence: "まい週 ほんを かります。", reading: "しゅう", level: 2 },
    { sentence: "らい週の おんがくかいに むけて うたを れんしゅうします。", reading: "しゅう", level: 3 }
  ],

  "春": [
    { sentence: "春に はなが さきます。", reading: "はる", level: 1 },
    { sentence: "春やすみに でかけます。", reading: "はる", level: 2 },
    { sentence: "あたたかい 春に なると むしたちが うごきはじめます。", reading: "はる", level: 3 }
  ],

  "書": [
    { sentence: "なまえを 書きます。", reading: "か", level: 1 },
    { sentence: "と書しつで ほんを かります。", reading: "しょ", level: 2 },
    { sentence: "けんがくして わかった ことを ノートに 書きました。", reading: "か", level: 3 }
  ],

  "少": [
    { sentence: "コップの みずが 少ないです。", reading: "すく", level: 1 },
    { sentence: "もう 少し まちます。", reading: "すこ", level: 2 },
    { sentence: "じかんが 少し のこったので ほんを よみました。", reading: "すこ", level: 3 }
  ],

  "場": [
    { sentence: "この 場しょに ならびます。", reading: "ば", level: 1 },
    { sentence: "うんどう場を はしります。", reading: "じょう", level: 2 },
    { sentence: "えんそくの しゅうごう場しょを ちずで たしかめました。", reading: "ば", level: 3 }
  ],

  "色": [
    { sentence: "すきな 色は あおです。", reading: "いろ", level: 1 },
    { sentence: "色がみを おります。", reading: "いろ", level: 2 },
    { sentence: "あかと あおの えのぐを まぜて できた 色を みました。", reading: "いろ", level: 3 }
  ],

  "食": [
    { sentence: "ごはんを 食べます。", reading: "た", level: 1 },
    { sentence: "きゅう食を のこさず いただきます。", reading: "しょく", level: 2 },
    { sentence: "こうえんで おべんとうを ともだちと 食べました。", reading: "た", level: 3 }
  ],

  "心": [
    { sentence: "やさしい 心です。", reading: "こころ", level: 1 },
    { sentence: "心を こめて うたいます。", reading: "こころ", level: 2 },
    { sentence: "ともだちの やさしい ことばを きいて 心が あたたかく なりました。", reading: "こころ", level: 3 }
  ],

  "新": [
    { sentence: "新しい ほんです。", reading: "あたら", level: 1 },
    { sentence: "新ぶんを よみます。", reading: "しん", level: 2 },
    { sentence: "新しい クラスで となりの こに はなしかけました。", reading: "あたら", level: 3 }
  ],

  "親": [
    { sentence: "親と でかけます。", reading: "おや", level: 1 },
    { sentence: "親こで ほんを よみます。", reading: "おや", level: 2 },
    { sentence: "やすみのひに 親こで ちかくの やまを あるきました。", reading: "おや", level: 3 }
  ],

  "図": [
    { sentence: "図を みます。", reading: "ず", level: 1 },
    { sentence: "図しょかんで しらべます。", reading: "と", level: 2 },
    { sentence: "せんせいが かいた 図を みながら はこの つくりかたを かんがえました。", reading: "ず", level: 3 }
  ],

  "数": [
    { sentence: "ほしの 数を かぞえます。", reading: "かず", level: 1 },
    { sentence: "さん数で くくを ならいます。", reading: "すう", level: 2 },
    { sentence: "こうていに さいて いる はなの 数を みんなで かぞえました。", reading: "かず", level: 3 }
  ],

  "西": [
    { sentence: "西に ひが しずみます。", reading: "にし", level: 1 },
    { sentence: "がっこうの 西もんに あつまります。", reading: "にし", level: 2 },
    { sentence: "ゆうがたに 西の そらが あかく そまりました。", reading: "にし", level: 3 }
  ],

  "声": [
    { sentence: "おおきな 声で よみます。", reading: "こえ", level: 1 },
    { sentence: "うた声が きこえます。", reading: "ごえ", level: 2 },
    { sentence: "こまって いる ともだちに やさしく 声を かけました。", reading: "こえ", level: 3 }
  ],

  "星": [
    { sentence: "星が ひかります。", reading: "ほし", level: 1 },
    { sentence: "星ぞらを みあげます。", reading: "ほし", level: 2 },
    { sentence: "よるに まどを あけると たくさんの 星が みえました。", reading: "ほし", level: 3 }
  ],

  "晴": [
    { sentence: "そらが 晴れました。", reading: "は", level: 1 },
    { sentence: "あしたは 晴てんです。", reading: "せい", level: 2 },
    { sentence: "あめが やんで 晴れたので こうていで あそびました。", reading: "は", level: 3 }
  ],

  "切": [
    { sentence: "かみを 切ります。", reading: "き", level: 1 },
    { sentence: "たい切に つかいます。", reading: "せつ", level: 2 },
    { sentence: "はさみで いろがみを まるく 切って はなを つくりました。", reading: "き", level: 3 }
  ],

  "雪": [
    { sentence: "雪が ふります。", reading: "ゆき", level: 1 },
    { sentence: "雪だるまを つくります。", reading: "ゆき", level: 2 },
    { sentence: "あさ おきると しろい 雪が にわに つもって いました。", reading: "ゆき", level: 3 }
  ],

  "船": [
    { sentence: "船に のります。", reading: "ふね", level: 1 },
    { sentence: "おおきな 船が みなとに つきます。", reading: "ふね", level: 2 },
    { sentence: "うみの むこうから しろい 船が ゆっくり ちかづいて きました。", reading: "ふね", level: 3 }
  ],

  "線": [
    { sentence: "まっすぐな 線を ひきます。", reading: "せん", level: 1 },
    { sentence: "あかい 線で むすびます。", reading: "せん", level: 2 },
    { sentence: "ものさしを つかって ふたつの てんを 線で むすびました。", reading: "せん", level: 3 }
  ],

  "前": [
    { sentence: "前を みて あるきます。", reading: "まえ", level: 1 },
    { sentence: "ご前 きゅうじに はじまります。", reading: "ぜん", level: 2 },
    { sentence: "みんなの 前に でて すきな ほんを しょうかいしました。", reading: "まえ", level: 3 }
  ],

  "組": [
    { sentence: "ふたりで 組みます。", reading: "く", level: 1 },
    { sentence: "にねんいち組です。", reading: "くみ", level: 2 },
    { sentence: "となりの ひとと 組んで ボールを なげあいました。", reading: "く", level: 3 }
  ],

  "走": [
    { sentence: "こうていを 走ります。", reading: "はし", level: 1 },
    { sentence: "ときょう走に でます。", reading: "そう", level: 2 },
    { sentence: "うんどうかいで ゴールまで ちからいっぱい 走りました。", reading: "はし", level: 3 }
  ],

  "多": [
    { sentence: "ひとが 多いです。", reading: "おお", level: 1 },
    { sentence: "きょうは くもが 多いです。", reading: "おお", level: 2 },
    { sentence: "あめの あとには みずたまりが 多く できて いました。", reading: "おお", level: 3 }
  ],

  "太": [
    { sentence: "太い きです。", reading: "ふと", level: 1 },
    { sentence: "太い せんを ひきます。", reading: "ふと", level: 2 },
    { sentence: "おおきな かみに 太い ふでで もじを かきました。", reading: "ふと", level: 3 }
  ],

  "体": [
    { sentence: "体を うごかします。", reading: "からだ", level: 1 },
    { sentence: "体いくで なわとびを します。", reading: "たい", level: 2 },
    { sentence: "そとから かえったら てを あらって 体を やすめます。", reading: "からだ", level: 3 }
  ],

  "台": [
    { sentence: "台の うえに おきます。", reading: "だい", level: 1 },
    { sentence: "いち台の くるまが とまります。", reading: "だい", level: 2 },
    { sentence: "はっぴょうする ひとは まえの 台に あがりました。", reading: "だい", level: 3 }
  ],

  "地": [
    { sentence: "地めんに えを かきます。", reading: "じ", level: 1 },
    { sentence: "まちの 地ずを みます。", reading: "ち", level: 2 },
    { sentence: "地ずで がっこうから こうえんまでの みちを たしかめました。", reading: "ち", level: 3 }
  ],

  "池": [
    { sentence: "池に こいが います。", reading: "いけ", level: 1 },
    { sentence: "池の まわりを あるきます。", reading: "いけ", level: 2 },
    { sentence: "こうえんの 池で かもが およぐ ようすを みました。", reading: "いけ", level: 3 }
  ],

  "知": [
    { sentence: "こたえを 知って います。", reading: "し", level: 1 },
    { sentence: "お知らせを よみます。", reading: "し", level: 2 },
    { sentence: "ずかんを よんで むしの そだちかたを 知りました。", reading: "し", level: 3 }
  ],

  "茶": [
    { sentence: "お茶を のみます。", reading: "ちゃ", level: 1 },
    { sentence: "茶いろの くつです。", reading: "ちゃ", level: 2 },
    { sentence: "あそんだ あとで つめたい お茶を のみました。", reading: "ちゃ", level: 3 }
  ],

  "昼": [
    { sentence: "昼に ごはんを たべます。", reading: "ひる", level: 1 },
    { sentence: "お昼やすみに あそびます。", reading: "ひる", level: 2 },
    { sentence: "昼に なると こうていから げんきな こえが きこえます。", reading: "ひる", level: 3 }
  ],

  "長": [
    { sentence: "長い ひもです。", reading: "なが", level: 1 },
    { sentence: "こう長せんせいの はなしを ききます。", reading: "ちょう", level: 2 },
    { sentence: "長い れつに ならんで じゅんばんを まちました。", reading: "なが", level: 3 }
  ],

  "鳥": [
    { sentence: "鳥が とびます。", reading: "とり", level: 1 },
    { sentence: "こ鳥の こえが きこえます。", reading: "とり", level: 2 },
    { sentence: "おおきな きの えだに あおい 鳥が とまって いました。", reading: "とり", level: 3 }
  ],

  "朝": [
    { sentence: "朝に おきます。", reading: "あさ", level: 1 },
    { sentence: "まい朝 はなに みずを やります。", reading: "あさ", level: 2 },
    { sentence: "朝 がっこうへ いくと せんせいが もんで まって いました。", reading: "あさ", level: 3 }
  ],

  "直": [
    { sentence: "まちがいを 直します。", reading: "なお", level: 1 },
    { sentence: "せんを まっ直ぐ ひきます。", reading: "す", level: 2 },
    { sentence: "こわれた おもちゃを おとうさんと いっしょに 直しました。", reading: "なお", level: 3 }
  ],

  "通": [
    { sentence: "がっこうに 通います。", reading: "かよ", level: 1 },
    { sentence: "くるまが みちを 通ります。", reading: "とお", level: 2 },
    { sentence: "いつもの みちが こうじちゅうなので べつの みちを 通りました。", reading: "とお", level: 3 }
  ],

  "弟": [
    { sentence: "弟と あそびます。", reading: "おとうと", level: 1 },
    { sentence: "弟に ほんを よみます。", reading: "おとうと", level: 2 },
    { sentence: "ないて いた 弟に おもちゃを かして あげました。", reading: "おとうと", level: 3 }
  ],

  "店": [
    { sentence: "店で パンを かいます。", reading: "みせ", level: 1 },
    { sentence: "ほん店は えきの ちかくです。", reading: "てん", level: 2 },
    { sentence: "まちたんけんで むかしから ある お店の ひとに はなしを ききました。", reading: "みせ", level: 3 }
  ],

  "点": [
    { sentence: "点を かきます。", reading: "てん", level: 1 },
    { sentence: "ひゃく点を とりました。", reading: "てん", level: 2 },
    { sentence: "ふたつの 点を ものさしで まっすぐ むすびました。", reading: "てん", level: 3 }
  ],

  "電": [
    { sentence: "電きを つけます。", reading: "でん", level: 1 },
    { sentence: "電しゃに のります。", reading: "でん", level: 2 },
    { sentence: "えきの ホームで きいろい 電しゃが くるのを まちました。", reading: "でん", level: 3 }
  ],

  "刀": [
    { sentence: "刀を みました。", reading: "かたな", level: 1 },
    { sentence: "きの 刀で あそびます。", reading: "かたな", level: 2 },
    { sentence: "はくぶつかんで むかしの ながい 刀を みました。", reading: "かたな", level: 3 }
  ],

  "冬": [
    { sentence: "冬は さむいです。", reading: "ふゆ", level: 1 },
    { sentence: "冬やすみに ゆきで あそびます。", reading: "ふゆ", level: 2 },
    { sentence: "さむい 冬の あさに いけの みずが こおって いました。", reading: "ふゆ", level: 3 }
  ],

  "当": [
    { sentence: "ボールが 当たります。", reading: "あ", level: 1 },
    { sentence: "こたえを 当てます。", reading: "あ", level: 2 },
    { sentence: "はこの なかに なにが あるか てで さわって 当てました。", reading: "あ", level: 3 }
  ],

  "東": [
    { sentence: "東から ひが のぼります。", reading: "ひがし", level: 1 },
    { sentence: "東きょうに いきます。", reading: "とう", level: 2 },
    { sentence: "あさ はやく おきて 東の そらが あかるく なるのを みました。", reading: "ひがし", level: 3 }
  ],

  "答": [
    { sentence: "もんだいに 答えます。", reading: "こた", level: 1 },
    { sentence: "答えを ノートに かきます。", reading: "こた", level: 2 },
    { sentence: "よく かんがえてから せんせいの しつもんに 答えました。", reading: "こた", level: 3 }
  ],

  "頭": [
    { sentence: "頭を さげます。", reading: "あたま", level: 1 },
    { sentence: "せん頭に ならびます。", reading: "とう", level: 2 },
    { sentence: "ぼうしが とばないように 頭を てで おさえました。", reading: "あたま", level: 3 }
  ],

  "同": [
    { sentence: "同じ いろです。", reading: "おな", level: 1 },
    { sentence: "となりの こも 同じ こたえです。", reading: "おな", level: 2 },
    { sentence: "わたしと 同じ ほんを よんだ ともだちと はなしを しました。", reading: "おな", level: 3 }
  ],

  "道": [
    { sentence: "道を あるきます。", reading: "みち", level: 1 },
    { sentence: "すい道の みずを とめます。", reading: "どう", level: 2 },
    { sentence: "がっこうまでの 道で きれいな はなを みつけました。", reading: "みち", level: 3 }
  ],

  "読": [
    { sentence: "ほんを 読みます。", reading: "よ", level: 1 },
    { sentence: "おん読の れんしゅうを します。", reading: "どく", level: 2 },
    { sentence: "としょしつで かりた ものがたりを かぞくに 読みました。", reading: "よ", level: 3 }
  ],

  "内": [
    { sentence: "はこの 内がわを みます。", reading: "うち", level: 1 },
    { sentence: "こう内を しずかに あるきます。", reading: "ない", level: 2 },
    { sentence: "あめのひは こうしゃの 内で やすみじかんを すごします。", reading: "うち", level: 3 }
  ],

  "南": [
    { sentence: "南へ すすみます。", reading: "みなみ", level: 1 },
    { sentence: "南ぐちで まちます。", reading: "みなみ", level: 2 },
    { sentence: "あたたかい 南の ほうへ とりが とんで いきました。", reading: "みなみ", level: 3 }
  ],

  "肉": [
    { sentence: "肉を たべます。", reading: "にく", level: 1 },
    { sentence: "やさいと 肉を いためます。", reading: "にく", level: 2 },
    { sentence: "きょうの きゅうしょくには 肉と やさいの スープが でました。", reading: "にく", level: 3 }
  ],

  "馬": [
    { sentence: "馬が はしります。", reading: "うま", level: 1 },
    { sentence: "もく馬に のります。", reading: "ば", level: 2 },
    { sentence: "ぼくじょうで ちゃいろの 馬に にんじんを あげました。", reading: "うま", level: 3 }
  ],

  "売": [
    { sentence: "みせで パンを 売ります。", reading: "う", level: 1 },
    { sentence: "売りばは にかいです。", reading: "う", level: 2 },
    { sentence: "がっこうの おまつりで じぶんたちが つくった ものを 売りました。", reading: "う", level: 3 }
  ],

  "買": [
    { sentence: "ほんを 買います。", reading: "か", level: 1 },
    { sentence: "買いものに いきます。", reading: "か", level: 2 },
    { sentence: "おみせで えんぴつと あたらしい ノートを 買いました。", reading: "か", level: 3 }
  ],

  "麦": [
    { sentence: "麦が そだちます。", reading: "むぎ", level: 1 },
    { sentence: "麦ちゃを のみます。", reading: "むぎ", level: 2 },
    { sentence: "はたけで きんいろに なった 麦が かぜに ゆれて いました。", reading: "むぎ", level: 3 }
  ],

  "半": [
    { sentence: "半ぶんに わけます。", reading: "はん", level: 1 },
    { sentence: "さんじ半に かえります。", reading: "はん", level: 2 },
    { sentence: "おおきな ケーキを 半ぶんに きって ふたりで たべました。", reading: "はん", level: 3 }
  ],

  "番": [
    { sentence: "いち番に ならびます。", reading: "ばん", level: 1 },
    { sentence: "こうたいで とう番を します。", reading: "ばん", level: 2 },
    { sentence: "きょうは わたしが きゅうしょくとう番なので はやく じゅんびしました。", reading: "ばん", level: 3 }
  ],

  "父": [
    { sentence: "父と でかけます。", reading: "ちち", level: 1 },
    { sentence: "お父さんが りょうりを します。", reading: "とう", level: 2 },
    { sentence: "にちようびに 父と いっしょに じてんしゃを なおしました。", reading: "ちち", level: 3 }
  ],

  "風": [
    { sentence: "風が ふきます。", reading: "かぜ", level: 1 },
    { sentence: "たい風が ちかづきます。", reading: "ふう", level: 2 },
    { sentence: "つよい 風で こうえんの このはが とびました。", reading: "かぜ", level: 3 }
  ],

  "分": [
    { sentence: "おかしを 分けます。", reading: "わ", level: 1 },
    { sentence: "あと ご分で はじまります。", reading: "ふん", level: 2 },
    { sentence: "おかしを みんなで おなじ かずずつ 分けました。", reading: "わ", level: 3 }
  ],

  "聞": [
    { sentence: "せんせいの はなしを 聞きます。", reading: "き", level: 1 },
    { sentence: "しん聞を よみます。", reading: "ぶん", level: 2 },
    { sentence: "まちたんけんで おみせの ひとに しごとの はなしを 聞きました。", reading: "き", level: 3 }
  ],

  "米": [
    { sentence: "米を たきます。", reading: "こめ", level: 1 },
    { sentence: "しん米を たべます。", reading: "まい", level: 2 },
    { sentence: "せいかつかで 米が できるまでの ようすを しらべました。", reading: "こめ", level: 3 }
  ],

  "歩": [
    { sentence: "みちを 歩きます。", reading: "ある", level: 1 },
    { sentence: "いっ歩ずつ すすみます。", reading: "ぽ", level: 2 },
    { sentence: "こうつうルールを まもって がっこうまで 歩きました。", reading: "ある", level: 3 }
  ],

  "母": [
    { sentence: "母と はなします。", reading: "はは", level: 1 },
    { sentence: "お母さんに てがみを かきます。", reading: "かあ", level: 2 },
    { sentence: "母と いっしょに だいどころで カレーを つくりました。", reading: "はは", level: 3 }
  ],

  "方": [
    { sentence: "あちらの 方へ いきます。", reading: "ほう", level: 1 },
    { sentence: "ゆう方に かえります。", reading: "がた", level: 2 },
    { sentence: "わからない ときは せんせいに やり方を ききました。", reading: "かた", level: 3 }
  ],

  "北": [
    { sentence: "北へ すすみます。", reading: "きた", level: 1 },
    { sentence: "北ぐちに あつまります。", reading: "きた", level: 2 },
    { sentence: "ふゆに なると 北から つめたい かぜが ふきます。", reading: "きた", level: 3 }
  ],

  "毎": [
    { sentence: "毎にち ほんを よみます。", reading: "まい", level: 1 },
    { sentence: "毎しゅう みずようびに およぎます。", reading: "まい", level: 2 },
    { sentence: "わたしは 毎あさ わすれずに はなへ みずを やります。", reading: "まい", level: 3 }
  ],

  "妹": [
    { sentence: "妹と あそびます。", reading: "いもうと", level: 1 },
    { sentence: "妹に えほんを よみます。", reading: "いもうと", level: 2 },
    { sentence: "ちいさな 妹の てを ひいて こうえんへ いきました。", reading: "いもうと", level: 3 }
  ],

  "万": [
    { sentence: "いち万まで かぞえます。", reading: "まん", level: 1 },
    { sentence: "いち万えんさつを みます。", reading: "まん", level: 2 },
    { sentence: "さんすうで せんを じゅうこ あつめると いち万に なると ならいました。", reading: "まん", level: 3 }
  ],

  "明": [
    { sentence: "明るい へやです。", reading: "あか", level: 1 },
    { sentence: "へやの 明かりを つけます。", reading: "あ", level: 2 },
    { sentence: "あさに なって そらが 明るくなると とりが なきはじめました。", reading: "あか", level: 3 }
  ],

  "鳴": [
    { sentence: "いぬが 鳴きます。", reading: "な", level: 1 },
    { sentence: "ベルが 鳴ります。", reading: "な", level: 2 },
    { sentence: "じゅぎょうの おわりを しらせる チャイムが 鳴りました。", reading: "な", level: 3 }
  ],

  "毛": [
    { sentence: "ねこの 毛は やわらかいです。", reading: "け", level: 1 },
    { sentence: "毛いとで かざりを つくります。", reading: "け", level: 2 },
    { sentence: "しろい うさぎの 毛を やさしく なでました。", reading: "け", level: 3 }
  ],

  "門": [
    { sentence: "門を くぐります。", reading: "もん", level: 1 },
    { sentence: "こう門で せんせいに あいます。", reading: "もん", level: 2 },
    { sentence: "あさ がっこうの 門を はいると ともだちが まって いました。", reading: "もん", level: 3 }
  ],

  "夜": [
    { sentence: "夜に ほしを みます。", reading: "よる", level: 1 },
    { sentence: "こん夜は つきが きれいです。", reading: "や", level: 2 },
    { sentence: "なつの 夜に かぞくで おおきな はなびを みました。", reading: "よる", level: 3 }
  ],

  "野": [
    { sentence: "野はらで あそびます。", reading: "の", level: 1 },
    { sentence: "野さいを たべます。", reading: "や", level: 2 },
    { sentence: "ひろい 野はらで しろつめくさを たくさん つみました。", reading: "の", level: 3 }
  ],

  "友": [
    { sentence: "友だちと あそびます。", reading: "とも", level: 1 },
    { sentence: "しん友に てがみを かきます。", reading: "ゆう", level: 2 },
    { sentence: "こまって いると 友だちが いっしょに かんがえて くれました。", reading: "とも", level: 3 }
  ],

  "用": [
    { sentence: "用じが あります。", reading: "よう", level: 1 },
    { sentence: "ずこうで が用しを つかいます。", reading: "よう", level: 2 },
    { sentence: "あしたの じゅぎょうで 用いる ものを じゅんびしました。", reading: "もち", level: 3 }
  ],

  "曜": [
    { sentence: "きょうは げつ曜びです。", reading: "よう", level: 1 },
    { sentence: "ど曜びに こうえんへ いきます。", reading: "よう", level: 2 },
    { sentence: "まいしゅう か曜びには としょしつで ほんを かります。", reading: "よう", level: 3 }
  ],

  "来": [
    { sentence: "ともだちが 来ます。", reading: "き", level: 1 },
    { sentence: "来しゅうは おんがくかいです。", reading: "らい", level: 2 },
    { sentence: "おきゃくさんが 来るので へやを きれいに しました。", reading: "く", level: 3 }
  ],

  "里": [
    { sentence: "やま里へ いきます。", reading: "ざと", level: 1 },
    { sentence: "ふる里の しゃしんを みます。", reading: "さと", level: 2 },
    { sentence: "やまに かこまれた ちいさな 里に かわが ながれて います。", reading: "さと", level: 3 }
  ],

  "理": [
    { sentence: "理かで むしを みます。", reading: "り", level: 1 },
    { sentence: "りゆうを 理かいします。", reading: "り", level: 2 },
    { sentence: "理かの じかんに はなの つくりを よく しらべました。", reading: "り", level: 3 }
  ],

  "話": [
    { sentence: "ともだちと 話します。", reading: "はな", level: 1 },
    { sentence: "むかし話を よみます。", reading: "ばなし", level: 2 },
    { sentence: "みんなの まえで なつやすみの できごとを 話しました。", reading: "はな", level: 3 }
  ]

};
