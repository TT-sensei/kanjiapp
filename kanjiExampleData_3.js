// 小学校3年生で習う漢字（200字）の書き取り練習用例文。
// reading は、文中の対象漢字の読み（送り仮名を除く）だけを記録する。
const kanjiExampleData_3 = {
  "悪": [
    { sentence: "悪い ことを しません。", reading: "わる", level: 1 },
    { sentence: "悪てんこうです。", reading: "あく", level: 2 },
    { sentence: "うそを つくのは 悪い ことだと はなしあいました。", reading: "わる", level: 3 }
  ],

  "安": [
    { sentence: "安い ねだんです。", reading: "やす", level: 1 },
    { sentence: "安しんします。", reading: "あん", level: 2 },
    { sentence: "この ノートは 安くて つかいやすいです。", reading: "やす", level: 3 }
  ],

  "暗": [
    { sentence: "暗い へやです。", reading: "くら", level: 1 },
    { sentence: "暗い よみちを あるきます。", reading: "くら", level: 2 },
    { sentence: "でんきを けすと へやが 暗く なりました。", reading: "くら", level: 3 }
  ],

  "医": [
    { sentence: "医しゃに なりたいです。", reading: "い", level: 1 },
    { sentence: "医がくを べんきょうします。", reading: "い", level: 2 },
    { sentence: "びょうきの ひとを たすける 医しゃに なりたいです。", reading: "い", level: 3 }
  ],

  "委": [
    { sentence: "委いんに なりました。", reading: "い", level: 1 },
    { sentence: "しいく委いんに なりました。", reading: "い", level: 2 },
    { sentence: "しいく委いんとして うさぎの せわを しました。", reading: "い", level: 3 }
  ],

  "意": [
    { sentence: "意みを しらべます。", reading: "い", level: 1 },
    { sentence: "せんせいの ちゅう意を ききます。", reading: "い", level: 2 },
    { sentence: "わからない ことばの 意みを じしょで しらべました。", reading: "い", level: 3 }
  ],

  "育": [
    { sentence: "はなを 育てます。", reading: "そだ", level: 1 },
    { sentence: "たい育の じかんです。", reading: "いく", level: 2 },
    { sentence: "まいにち みずを やって あさがおを 育てました。", reading: "そだ", level: 3 }
  ],

  "員": [
    { sentence: "かい員に なります。", reading: "いん", level: 1 },
    { sentence: "てん員さんに ききます。", reading: "いん", level: 2 },
    { sentence: "おみせの てん員さんが ばしょを おしえて くれました。", reading: "いん", level: 3 }
  ],

  "院": [
    { sentence: "びょう院に いきます。", reading: "いん", level: 1 },
    { sentence: "にゅう院しました。", reading: "いん", level: 2 },
    { sentence: "けがを したので びょう院で みて もらいました。", reading: "いん", level: 3 }
  ],

  "飲": [
    { sentence: "みずを 飲みます。", reading: "の", level: 1 },
    { sentence: "すいとうの みずを 飲みます。", reading: "の", level: 2 },
    { sentence: "うんどうの あとに みずを ゆっくり 飲みました。", reading: "の", level: 3 }
  ],

  "運": [
    { sentence: "にもつを 運びます。", reading: "はこ", level: 1 },
    { sentence: "運どうかいです。", reading: "うん", level: 2 },
    { sentence: "みんなで つくえを きょうしつの うしろへ 運びました。", reading: "はこ", level: 3 }
  ],

  "泳": [
    { sentence: "プールで 泳ぎます。", reading: "およ", level: 1 },
    { sentence: "すい泳を ならいます。", reading: "えい", level: 2 },
    { sentence: "いきを ゆっくり はきながら プールを 泳ぎました。", reading: "およ", level: 3 }
  ],

  "駅": [
    { sentence: "駅で まちあわせます。", reading: "えき", level: 1 },
    { sentence: "駅いんさんに ききます。", reading: "えき", level: 2 },
    { sentence: "駅の かいさつぐちで かぞくと まちあわせました。", reading: "えき", level: 3 }
  ],

  "央": [
    { sentence: "ちゅう央に たちます。", reading: "おう", level: 1 },
    { sentence: "ちゅう央こうえんに いきます。", reading: "おう", level: 2 },
    { sentence: "こうていの ちゅう央に みんなで あつまりました。", reading: "おう", level: 3 }
  ],

  "横": [
    { sentence: "横に ならびます。", reading: "よこ", level: 1 },
    { sentence: "横だんほどうを わたります。", reading: "おう", level: 2 },
    { sentence: "しんごうを たしかめて 横だんほどうを わたりました。", reading: "おう", level: 3 }
  ],

  "屋": [
    { sentence: "パン屋さんに いきます。", reading: "や", level: 1 },
    { sentence: "屋がいで あそびます。", reading: "おく", level: 2 },
    { sentence: "しょうてんがいの パン屋で あんパンを かいました。", reading: "や", level: 3 }
  ],

  "温": [
    { sentence: "温かい スープです。", reading: "あたた", level: 1 },
    { sentence: "温どを はかります。", reading: "おん", level: 2 },
    { sentence: "なべに いれて スープを ゆっくり 温めました。", reading: "あたた", level: 3 }
  ],

  "化": [
    { sentence: "みずが こおりへ へん化します。", reading: "か", level: 1 },
    { sentence: "きつねが 化けます。", reading: "ば", level: 2 },
    { sentence: "あおむしが さなぎへ へん化しました。", reading: "か", level: 3 }
  ],

  "荷": [
    { sentence: "りょこうの 荷づくりを します。", reading: "に", level: 1 },
    { sentence: "おもい 荷もつを はこびます。", reading: "に", level: 2 },
    { sentence: "おもい 荷ものを ふたりで もちました。", reading: "に", level: 3 }
  ],

  "界": [
    { sentence: "せ界ちずを みます。", reading: "かい", level: 1 },
    { sentence: "せ界の くにぐにを しらべます。", reading: "かい", level: 2 },
    { sentence: "せ界ちずで いろいろな くにを さがしました。", reading: "かい", level: 3 }
  ],

  "開": [
    { sentence: "とびらを 開けます。", reading: "あ", level: 1 },
    { sentence: "あさの かいを 開きます。", reading: "ひら", level: 2 },
    { sentence: "まどを 開けると すずしい かぜが はいりました。", reading: "あ", level: 3 }
  ],

  "階": [
    { sentence: "に階に あがります。", reading: "かい", level: 1 },
    { sentence: "階だんを のぼります。", reading: "かい", level: 2 },
    { sentence: "かいだんを のぼって さん階へ いきました。", reading: "かい", level: 3 }
  ],

  "寒": [
    { sentence: "寒い ふゆです。", reading: "さむ", level: 1 },
    { sentence: "寒い ひは てぶくろを します。", reading: "さむ", level: 2 },
    { sentence: "ゆきが ふるほど 寒い あさに なりました。", reading: "さむ", level: 3 }
  ],

  "感": [
    { sentence: "感どうしました。", reading: "かん", level: 1 },
    { sentence: "感しゃします。", reading: "かん", level: 2 },
    { sentence: "ともだちの はっぴょうを きいて 感どうしました。", reading: "かん", level: 3 }
  ],

  "漢": [
    { sentence: "漢じを かきます。", reading: "かん", level: 1 },
    { sentence: "あたらしい 漢じを ならいます。", reading: "かん", level: 2 },
    { sentence: "わからない 漢じを じしょで しらべました。", reading: "かん", level: 3 }
  ],

  "館": [
    { sentence: "としょ館に いきます。", reading: "かん", level: 1 },
    { sentence: "びじゅつ館を みます。", reading: "かん", level: 2 },
    { sentence: "としょ館で きょうりゅうの ほんを かりました。", reading: "かん", level: 3 }
  ],

  "岸": [
    { sentence: "岸で つりを します。", reading: "きし", level: 1 },
    { sentence: "かい岸を あるきます。", reading: "がん", level: 2 },
    { sentence: "ふねが ゆっくり 岸へ ちかづきました。", reading: "きし", level: 3 }
  ],

  "起": [
    { sentence: "はやく 起きます。", reading: "お", level: 1 },
    { sentence: "起りつして れいを します。", reading: "き", level: 2 },
    { sentence: "めざましどけいが なる まえに 起きました。", reading: "お", level: 3 }
  ],

  "期": [
    { sentence: "がっ期が はじまります。", reading: "き", level: 1 },
    { sentence: "にがっ期の もくひょうを きめます。", reading: "き", level: 2 },
    { sentence: "あたらしい がっ期が きょうから はじまりました。", reading: "き", level: 3 }
  ],

  "客": [
    { sentence: "お客さんが きます。", reading: "きゃく", level: 1 },
    { sentence: "客せきに すわります。", reading: "きゃく", level: 2 },
    { sentence: "げんかんで お客さんを むかえました。", reading: "きゃく", level: 3 }
  ],

  "究": [
    { sentence: "けん究します。", reading: "きゅう", level: 1 },
    { sentence: "りかで いきものを けん究します。", reading: "きゅう", level: 2 },
    { sentence: "むしの そだちかたを くわしく けん究しました。", reading: "きゅう", level: 3 }
  ],

  "急": [
    { sentence: "急いで あるきます。", reading: "いそ", level: 1 },
    { sentence: "急いで きょうしつへ もどります。", reading: "いそ", level: 2 },
    { sentence: "おくれそうなので 急いで しゅっぱつしました。", reading: "いそ", level: 3 }
  ],

  "級": [
    { sentence: "がっ級の もくひょうを きめます。", reading: "きゅう", level: 1 },
    { sentence: "がっ級かいで はなしあいます。", reading: "きゅう", level: 2 },
    { sentence: "がっ級かいで あそびの ないようを きめました。", reading: "きゅう", level: 3 }
  ],

  "宮": [
    { sentence: "お宮まいりを します。", reading: "みや", level: 1 },
    { sentence: "まちの お宮を けんがくします。", reading: "みや", level: 2 },
    { sentence: "ちいきの お宮で おまつりが ひらかれました。", reading: "みや", level: 3 }
  ],

  "球": [
    { sentence: "や球を します。", reading: "きゅう", level: 1 },
    { sentence: "まるい 球を なげます。", reading: "たま", level: 2 },
    { sentence: "や球の しあいで おおきな こえを だしました。", reading: "きゅう", level: 3 }
  ],

  "去": [
    { sentence: "去ねんの できごとです。", reading: "きょ", level: 1 },
    { sentence: "去ねんの しゃしんを みます。", reading: "きょ", level: 2 },
    { sentence: "去ねんより せが たかく なりました。", reading: "きょ", level: 3 }
  ],

  "橋": [
    { sentence: "橋を わたります。", reading: "はし", level: 1 },
    { sentence: "てつ橋を みます。", reading: "きょう", level: 2 },
    { sentence: "かわに かかる ながい 橋を わたりました。", reading: "はし", level: 3 }
  ],

  "業": [
    { sentence: "じゅ業を うけます。", reading: "ぎょう", level: 1 },
    { sentence: "じゅ業で てを あげます。", reading: "ぎょう", level: 2 },
    { sentence: "じゅ業で わかった ことを ノートに まとめました。", reading: "ぎょう", level: 3 }
  ],

  "曲": [
    { sentence: "みちが 曲がります。", reading: "ま", level: 1 },
    { sentence: "おんがくの 曲を ききます。", reading: "きょく", level: 2 },
    { sentence: "この 曲を きくと げんきな きもちに なります。", reading: "きょく", level: 3 }
  ],

  "局": [
    { sentence: "ゆうびん局に いきます。", reading: "きょく", level: 1 },
    { sentence: "局ちょうさんに あいます。", reading: "きょく", level: 2 },
    { sentence: "ゆうびん局で はがきを だしました。", reading: "きょく", level: 3 }
  ],

  "銀": [
    { sentence: "銀いろの さらです。", reading: "ぎん", level: 1 },
    { sentence: "銀いろの おりがみを つかいます。", reading: "ぎん", level: 2 },
    { sentence: "銀いろの おりがみで ほしを つくりました。", reading: "ぎん", level: 3 }
  ],

  "区": [
    { sentence: "区やくしょに いきます。", reading: "く", level: 1 },
    { sentence: "ちずを よっつの 区かくに わけます。", reading: "く", level: 2 },
    { sentence: "ちずを いくつかの 区かくに わけました。", reading: "く", level: 3 }
  ],

  "苦": [
    { sentence: "苦い くすりです。", reading: "にが", level: 1 },
    { sentence: "苦しい きもちです。", reading: "くる", level: 2 },
    { sentence: "ながい さかを のぼって いきが 苦しく なりました。", reading: "くる", level: 3 }
  ],

  "具": [
    { sentence: "どう具を つかいます。", reading: "ぐ", level: 1 },
    { sentence: "ずこうの どう具を そろえます。", reading: "ぐ", level: 2 },
    { sentence: "ずこうで つかう どう具を つくえに そろえました。", reading: "ぐ", level: 3 }
  ],

  "君": [
    { sentence: "君は どう おもいますか。", reading: "きみ", level: 1 },
    { sentence: "たなか君と はなします。", reading: "くん", level: 2 },
    { sentence: "たなか君が みんなに やりかたを おしえました。", reading: "くん", level: 3 }
  ],

  "係": [
    { sentence: "そうじの 係を します。", reading: "かかり", level: 1 },
    { sentence: "かん係を しらべます。", reading: "けい", level: 2 },
    { sentence: "わたしは くばり係として プリントを くばりました。", reading: "がかり", level: 3 }
  ],

  "軽": [
    { sentence: "軽い にもつです。", reading: "かる", level: 1 },
    { sentence: "軽しょくを たべます。", reading: "けい", level: 2 },
    { sentence: "この かばんは 軽くて もちやすいです。", reading: "かる", level: 3 }
  ],

  "血": [
    { sentence: "血が でました。", reading: "ち", level: 1 },
    { sentence: "ころんだ ひざから 血が でました。", reading: "ち", level: 2 },
    { sentence: "ころんで ひざから 血が でました。", reading: "ち", level: 3 }
  ],

  "決": [
    { sentence: "やることを 決めます。", reading: "き", level: 1 },
    { sentence: "決しょうせんです。", reading: "けっ", level: 2 },
    { sentence: "はんで はなしあって リーダーを 決めました。", reading: "き", level: 3 }
  ],

  "研": [
    { sentence: "研きゅうします。", reading: "けん", level: 1 },
    { sentence: "むしの からだを 研きゅうします。", reading: "けん", level: 2 },
    { sentence: "むしの からだを くわしく 研きゅうしました。", reading: "けん", level: 3 }
  ],

  "県": [
    { sentence: "県ちょうへ いきます。", reading: "けん", level: 1 },
    { sentence: "じぶんの 県を ちずで さがします。", reading: "けん", level: 2 },
    { sentence: "ちずで わたしたちの 県の ばしょを たしかめました。", reading: "けん", level: 3 }
  ],

  "庫": [
    { sentence: "れいぞう庫を あけます。", reading: "こ", level: 1 },
    { sentence: "しゃ庫に くるまを いれます。", reading: "こ", level: 2 },
    { sentence: "れいぞう庫から たまごを だしました。", reading: "こ", level: 3 }
  ],

  "湖": [
    { sentence: "湖で ボートに のります。", reading: "みずうみ", level: 1 },
    { sentence: "おおきな 湖で とりを みました。", reading: "みずうみ", level: 2 },
    { sentence: "しずかな 湖に しろい とりが うかんでいました。", reading: "みずうみ", level: 3 }
  ],

  "向": [
    { sentence: "こっちを 向きます。", reading: "む", level: 1 },
    { sentence: "ほう向を しらべます。", reading: "こう", level: 2 },
    { sentence: "せんせいの ほうを 向いて はなしを ききました。", reading: "む", level: 3 }
  ],

  "幸": [
    { sentence: "幸せな きもちです。", reading: "しあわ", level: 1 },
    { sentence: "幸うんを ねがいます。", reading: "こう", level: 2 },
    { sentence: "かぞくと すごすと 幸せな きもちに なります。", reading: "しあわ", level: 3 }
  ],

  "港": [
    { sentence: "港に ふねが とまります。", reading: "みなと", level: 1 },
    { sentence: "くう港に いきます。", reading: "こう", level: 2 },
    { sentence: "港に おおきな ふねが はいって きました。", reading: "みなと", level: 3 }
  ],

  "号": [
    { sentence: "ばん号を かきます。", reading: "ごう", level: 1 },
    { sentence: "しん号を まもります。", reading: "ごう", level: 2 },
    { sentence: "しん号が あおに なってから わたりました。", reading: "ごう", level: 3 }
  ],

  "根": [
    { sentence: "きの 根を みます。", reading: "ね", level: 1 },
    { sentence: "あさがおの 根を かんさつします。", reading: "ね", level: 2 },
    { sentence: "はちから はみだした 根を かんさつしました。", reading: "ね", level: 3 }
  ],

  "祭": [
    { sentence: "お祭りに いきます。", reading: "まつ", level: 1 },
    { sentence: "ぶんか祭を します。", reading: "さい", level: 2 },
    { sentence: "ちいきの お祭りで たいこを たたきました。", reading: "まつ", level: 3 }
  ],

  "皿": [
    { sentence: "お皿を あらいます。", reading: "さら", level: 1 },
    { sentence: "おお皿に もりつけます。", reading: "さら", level: 2 },
    { sentence: "おおきな お皿に りょうりを もりつけました。", reading: "さら", level: 3 }
  ],

  "仕": [
    { sentence: "仕ごとを します。", reading: "し", level: 1 },
    { sentence: "仕あげを します。", reading: "し", level: 2 },
    { sentence: "あたえられた 仕ごとを さいごまで やりました。", reading: "し", level: 3 }
  ],

  "死": [
    { sentence: "むしが 死にました。", reading: "し", level: 1 },
    { sentence: "かっていた むしが 死んで いました。", reading: "し", level: 2 },
    { sentence: "かっていた こんちゅうが 死んだので にわに うめました。", reading: "し", level: 3 }
  ],

  "使": [
    { sentence: "はさみを 使います。", reading: "つか", level: 1 },
    { sentence: "じょうぎを 使って せんを ひきます。", reading: "つか", level: 2 },
    { sentence: "ものさしを 使って まっすぐな せんを ひきました。", reading: "つか", level: 3 }
  ],

  "始": [
    { sentence: "べんきょうを 始めます。", reading: "はじ", level: 1 },
    { sentence: "あさの かいを 始めます。", reading: "はじ", level: 2 },
    { sentence: "じかんに なったので れんしゅうを 始めました。", reading: "はじ", level: 3 }
  ],

  "指": [
    { sentence: "指を まげます。", reading: "ゆび", level: 1 },
    { sentence: "ちずの ばしょを 指します。", reading: "さ", level: 2 },
    { sentence: "ちずの ばしょを 指で さしました。", reading: "ゆび", level: 3 }
  ],

  "歯": [
    { sentence: "歯を みがきます。", reading: "は", level: 1 },
    { sentence: "歯いしゃさんに いきます。", reading: "し", level: 2 },
    { sentence: "むしばに ならないように 歯を みがきました。", reading: "は", level: 3 }
  ],

  "詩": [
    { sentence: "詩を かきます。", reading: "し", level: 1 },
    { sentence: "こくごで 詩を よみます。", reading: "し", level: 2 },
    { sentence: "ようすを そうぞうしながら 詩を よみました。", reading: "し", level: 3 }
  ],

  "次": [
    { sentence: "次の えきで おります。", reading: "つぎ", level: 1 },
    { sentence: "次かいの かかりを きめます。", reading: "じ", level: 2 },
    { sentence: "次の じゅぎょうで つかう ものを じゅんびしました。", reading: "つぎ", level: 3 }
  ],

  "事": [
    { sentence: "たいせつな 事です。", reading: "こと", level: 1 },
    { sentence: "きょうの でき事を にっきに かきます。", reading: "ごと", level: 2 },
    { sentence: "きょう あった 事を にっきに かきました。", reading: "こと", level: 3 }
  ],

  "持": [
    { sentence: "かばんを 持ちます。", reading: "も", level: 1 },
    { sentence: "じぶんの えんぴつを 持って きます。", reading: "も", level: 2 },
    { sentence: "わすれないように すいとうを しっかり 持ちました。", reading: "も", level: 3 }
  ],

  "式": [
    { sentence: "にゅうがく式です。", reading: "しき", level: 1 },
    { sentence: "けっこん式に いきます。", reading: "しき", level: 2 },
    { sentence: "しぎょう式で こうちょうせんせいの はなしを ききました。", reading: "しき", level: 3 }
  ],

  "実": [
    { sentence: "きの 実が なりました。", reading: "み", level: 1 },
    { sentence: "実けんを します。", reading: "じっ", level: 2 },
    { sentence: "あきに なると きの 実が ちゃいろに なりました。", reading: "み", level: 3 }
  ],

  "写": [
    { sentence: "えを ノートに 写します。", reading: "うつ", level: 1 },
    { sentence: "こくばんの ぶんを 写します。", reading: "うつ", level: 2 },
    { sentence: "こくばんの ぶんを ノートに 写しました。", reading: "うつ", level: 3 }
  ],

  "者": [
    { sentence: "い者に なりたいです。", reading: "しゃ", level: 1 },
    { sentence: "けがを した 者は いません。", reading: "もの", level: 2 },
    { sentence: "い者さんに のどを みて もらいました。", reading: "しゃ", level: 3 }
  ],

  "主": [
    { sentence: "主じんこうです。", reading: "しゅ", level: 1 },
    { sentence: "ものがたりの 主じんこうを たしかめます。", reading: "しゅ", level: 2 },
    { sentence: "ものがたりの 主じんこうの せいかくを かんがえました。", reading: "しゅ", level: 3 }
  ],

  "守": [
    { sentence: "きそくを 守ります。", reading: "まも", level: 1 },
    { sentence: "こうつうの きまりを 守ります。", reading: "まも", level: 2 },
    { sentence: "こうつうの きまりを 守って あるきました。", reading: "まも", level: 3 }
  ],

  "取": [
    { sentence: "ほんを 取ります。", reading: "と", level: 1 },
    { sentence: "かるたを いちまい 取ります。", reading: "と", level: 2 },
    { sentence: "たなの うえから じしょを 取りました。", reading: "と", level: 3 }
  ],

  "酒": [
    { sentence: "お酒は おとなの のみものです。", reading: "さけ", level: 1 },
    { sentence: "お酒の びんを みました。", reading: "さけ", level: 2 },
    { sentence: "お酒は おとなに なってから のむ ものです。", reading: "さけ", level: 3 }
  ],

  "受": [
    { sentence: "テストを 受けます。", reading: "う", level: 1 },
    { sentence: "せんせいから せつめいを 受けます。", reading: "う", level: 2 },
    { sentence: "せんせいから くわしい せつめいを 受けました。", reading: "う", level: 3 }
  ],

  "州": [
    { sentence: "ほん州に すんで います。", reading: "しゅう", level: 1 },
    { sentence: "ほん州を ちずで さがします。", reading: "しゅう", level: 2 },
    { sentence: "にほんで いちばん おおきな しまは ほん州です。", reading: "しゅう", level: 3 }
  ],

  "拾": [
    { sentence: "ごみを 拾います。", reading: "ひろ", level: 1 },
    { sentence: "みちで 拾った ものを とどけます。", reading: "ひろ", level: 2 },
    { sentence: "みちに おちていた さいふを 拾いました。", reading: "ひろ", level: 3 }
  ],

  "終": [
    { sentence: "じゅぎょうが 終わります。", reading: "お", level: 1 },
    { sentence: "そうじが 終わったら かえります。", reading: "お", level: 2 },
    { sentence: "しゅくだいが 終わったら こうえんへ いきます。", reading: "お", level: 3 }
  ],

  "習": [
    { sentence: "じを 習います。", reading: "なら", level: 1 },
    { sentence: "じ習します。", reading: "しゅう", level: 2 },
    { sentence: "まいにち ピアノを 習って います。", reading: "なら", level: 3 }
  ],

  "集": [
    { sentence: "きってを 集めます。", reading: "あつ", level: 1 },
    { sentence: "集ごうします。", reading: "しゅう", level: 2 },
    { sentence: "こうえんで きれいな このはを 集めました。", reading: "あつ", level: 3 }
  ],

  "住": [
    { sentence: "まちに 住んで います。", reading: "す", level: 1 },
    { sentence: "じぶんの 住む まちを しらべます。", reading: "す", level: 2 },
    { sentence: "わたしは かわの ちかくの まちに 住んで います。", reading: "す", level: 3 }
  ],

  "重": [
    { sentence: "重い にもつです。", reading: "おも", level: 1 },
    { sentence: "たい重を はかります。", reading: "じゅう", level: 2 },
    { sentence: "この はこは 重いので ふたりで はこびました。", reading: "おも", level: 3 }
  ],

  "宿": [
    { sentence: "宿だいを します。", reading: "しゅく", level: 1 },
    { sentence: "宿に とまります。", reading: "やど", level: 2 },
    { sentence: "りょこうで やまの 宿に とまりました。", reading: "やど", level: 3 }
  ],

  "所": [
    { sentence: "しずかな 所が すきです。", reading: "ところ", level: 1 },
    { sentence: "じゅう所を かきます。", reading: "しょ", level: 2 },
    { sentence: "しずかな 所を みつけて ほんを よみました。", reading: "ところ", level: 3 }
  ],

  "暑": [
    { sentence: "暑い なつです。", reading: "あつ", level: 1 },
    { sentence: "暑い ひは みずを よく のみます。", reading: "あつ", level: 2 },
    { sentence: "とても 暑かったので みずを たくさん のみました。", reading: "あつ", level: 3 }
  ],

  "助": [
    { sentence: "ともだちを 助けます。", reading: "たす", level: 1 },
    { sentence: "ともだちと そうじを 助けあいます。", reading: "たす", level: 2 },
    { sentence: "こまっている いちねんせいを 助けました。", reading: "たす", level: 3 }
  ],

  "昭": [
    { sentence: "昭わじだいの おはなしです。", reading: "しょう", level: 1 },
    { sentence: "昭わの くらしを しらべます。", reading: "しょう", level: 2 },
    { sentence: "そふから 昭わの くらしを ききました。", reading: "しょう", level: 3 }
  ],

  "消": [
    { sentence: "でんきを 消します。", reading: "け", level: 1 },
    { sentence: "消ぼうしゃが きました。", reading: "しょう", level: 2 },
    { sentence: "へやを でる ときに でんきを 消しました。", reading: "け", level: 3 }
  ],

  "商": [
    { sentence: "商てんがいを あるきます。", reading: "しょう", level: 1 },
    { sentence: "まちの 商てんを たんけんします。", reading: "しょう", level: 2 },
    { sentence: "しょうてんがいの 商てんで やさいを かいました。", reading: "しょう", level: 3 }
  ],

  "章": [
    { sentence: "だいいち章を よみます。", reading: "しょう", level: 1 },
    { sentence: "ものがたりの だいいち章を よみます。", reading: "しょう", level: 2 },
    { sentence: "ものがたりの だいいち章を よみおえました。", reading: "しょう", level: 3 }
  ],

  "勝": [
    { sentence: "しあいに 勝ちます。", reading: "か", level: 1 },
    { sentence: "けっ勝せんに でます。", reading: "しょう", level: 2 },
    { sentence: "さいごまで あきらめずに しあいに 勝ちました。", reading: "か", level: 3 }
  ],

  "乗": [
    { sentence: "バスに 乗ります。", reading: "の", level: 1 },
    { sentence: "乗しゃけんを かいます。", reading: "じょう", level: 2 },
    { sentence: "えきから でんしゃに 乗って でかけました。", reading: "の", level: 3 }
  ],

  "植": [
    { sentence: "はなを 植えます。", reading: "う", level: 1 },
    { sentence: "植ぶつを かんさつします。", reading: "しょく", level: 2 },
    { sentence: "かだんに あかい はなの なえを 植えました。", reading: "う", level: 3 }
  ],

  "申": [
    { sentence: "なまえを 申します。", reading: "もう", level: 1 },
    { sentence: "せんせいに かかりを 申しでます。", reading: "もう", level: 2 },
    { sentence: "わたしから しいくがかりを 申しでました。", reading: "もう", level: 3 }
  ],

  "身": [
    { sentence: "身を まもります。", reading: "み", level: 1 },
    { sentence: "身ちょうを はかります。", reading: "しん", level: 2 },
    { sentence: "きけんな ばしょから 身を まもります。", reading: "み", level: 3 }
  ],

  "神": [
    { sentence: "神さまに おねがいします。", reading: "かみ", level: 1 },
    { sentence: "神しゃに いきます。", reading: "じん", level: 2 },
    { sentence: "おしょうがつに 神さまへ おねがいを しました。", reading: "かみ", level: 3 }
  ],

  "真": [
    { sentence: "しゃ真を とります。", reading: "しん", level: 1 },
    { sentence: "真んなかに すわります。", reading: "ま", level: 2 },
    { sentence: "りょこうで とった しゃ真を アルバムに はりました。", reading: "しん", level: 3 }
  ],

  "深": [
    { sentence: "深い かわです。", reading: "ふか", level: 1 },
    { sentence: "みずそうの 深さを はかります。", reading: "ふか", level: 2 },
    { sentence: "ぼうを いれて かわの 深さを はかりました。", reading: "ふか", level: 3 }
  ],

  "進": [
    { sentence: "まえに 進みます。", reading: "すす", level: 1 },
    { sentence: "進こうを かんがえます。", reading: "しん", level: 2 },
    { sentence: "あいずを きいてから まえへ 進みました。", reading: "すす", level: 3 }
  ],

  "世": [
    { sentence: "世かいちずを みます。", reading: "せい", level: 1 },
    { sentence: "この 世の なかです。", reading: "よ", level: 2 },
    { sentence: "世かいの くにぐにの くらしを しらべました。", reading: "せい", level: 3 }
  ],

  "整": [
    { sentence: "つくえを 整えます。", reading: "ととの", level: 1 },
    { sentence: "整れつに ならびます。", reading: "せい", level: 2 },
    { sentence: "つくえの うえを 整えてから べんきょうしました。", reading: "ととの", level: 3 }
  ],

  "昔": [
    { sentence: "昔ばなしを ききます。", reading: "むかし", level: 1 },
    { sentence: "昔の どうぐを けんがくします。", reading: "むかし", level: 2 },
    { sentence: "おばあさんから 昔の あそびを おしえて もらいました。", reading: "むかし", level: 3 }
  ],

  "全": [
    { sentence: "全ぶ たべました。", reading: "ぜん", level: 1 },
    { sentence: "全いんで こえを そろえます。", reading: "ぜん", level: 2 },
    { sentence: "むずかしい もんだいを 全ぶ ときました。", reading: "ぜん", level: 3 }
  ],

  "相": [
    { sentence: "相だんします。", reading: "そう", level: 1 },
    { sentence: "相ての きもちを かんがえます。", reading: "あい", level: 2 },
    { sentence: "こまった ことを せんせいに 相だんしました。", reading: "そう", level: 3 }
  ],

  "送": [
    { sentence: "てがみを 送ります。", reading: "おく", level: 1 },
    { sentence: "ほう送します。", reading: "そう", level: 2 },
    { sentence: "たんじょうびに ともだちへ カードを 送りました。", reading: "おく", level: 3 }
  ],

  "想": [
    { sentence: "想ぞうします。", reading: "そう", level: 1 },
    { sentence: "ほんを よんだ かん想を はなします。", reading: "そう", level: 2 },
    { sentence: "ものがたりの つづきを 想ぞうしました。", reading: "そう", level: 3 }
  ],

  "息": [
    { sentence: "息を すいます。", reading: "いき", level: 1 },
    { sentence: "きゅう息を とります。", reading: "そく", level: 2 },
    { sentence: "はしった あとに おおきく 息を はきました。", reading: "いき", level: 3 }
  ],

  "速": [
    { sentence: "速い でんしゃです。", reading: "はや", level: 1 },
    { sentence: "速どを あげます。", reading: "そく", level: 2 },
    { sentence: "この でんしゃは とても 速く はしります。", reading: "はや", level: 3 }
  ],

  "族": [
    { sentence: "か族で でかけます。", reading: "ぞく", level: 1 },
    { sentence: "か族で ゆうごはんを たべます。", reading: "ぞく", level: 2 },
    { sentence: "か族で うみへ でかけました。", reading: "ぞく", level: 3 }
  ],

  "他": [
    { sentence: "他の ひとに ききます。", reading: "た", level: 1 },
    { sentence: "他こうの ようすを ききます。", reading: "た", level: 2 },
    { sentence: "わからない ときは 他の ひとにも ききました。", reading: "た", level: 3 }
  ],

  "打": [
    { sentence: "ボールを 打ちます。", reading: "う", level: 1 },
    { sentence: "打きゅうを うけとめます。", reading: "だ", level: 2 },
    { sentence: "バットで ボールを つよく 打ちました。", reading: "う", level: 3 }
  ],

  "対": [
    { sentence: "あかぐみと しろぐみが 対せんします。", reading: "たい", level: 1 },
    { sentence: "ふたりひとくみで 対わします。", reading: "たい", level: 2 },
    { sentence: "ふたりで むかいあって 対わを しました。", reading: "たい", level: 3 }
  ],

  "待": [
    { sentence: "バスを 待ちます。", reading: "ま", level: 1 },
    { sentence: "しずかに じゅんばんを 待ちます。", reading: "ま", level: 2 },
    { sentence: "じゅんばんが くるまで しずかに 待ちました。", reading: "ま", level: 3 }
  ],

  "代": [
    { sentence: "せんせいに 代わって はなします。", reading: "か", level: 1 },
    { sentence: "じ代を しらべます。", reading: "だい", level: 2 },
    { sentence: "やすんだ ひとの 代わりに しごとを しました。", reading: "か", level: 3 }
  ],

  "第": [
    { sentence: "第いちしあいが はじまります。", reading: "だい", level: 1 },
    { sentence: "第にしあいは あしたです。", reading: "だい", level: 2 },
    { sentence: "うんどうかいの 第いちしあいに でました。", reading: "だい", level: 3 }
  ],

  "題": [
    { sentence: "しゅく題を します。", reading: "だい", level: 1 },
    { sentence: "さんすうの もん題を ときます。", reading: "だい", level: 2 },
    { sentence: "むずかしい もん題を みんなで かんがえました。", reading: "だい", level: 3 }
  ],

  "炭": [
    { sentence: "炭で やきます。", reading: "すみ", level: 1 },
    { sentence: "もく炭で えを かきます。", reading: "たん", level: 2 },
    { sentence: "キャンプで 炭に ひを つけました。", reading: "すみ", level: 3 }
  ],

  "短": [
    { sentence: "短い えんぴつです。", reading: "みじか", level: 1 },
    { sentence: "短い ぶんを つくります。", reading: "みじか", level: 2 },
    { sentence: "えんぴつが 短く なったので けずりました。", reading: "みじか", level: 3 }
  ],

  "談": [
    { sentence: "そう談します。", reading: "だん", level: 1 },
    { sentence: "こまった ことを せんせいに そう談します。", reading: "だん", level: 2 },
    { sentence: "なやんでいる ことを せんせいに そう談しました。", reading: "だん", level: 3 }
  ],

  "着": [
    { sentence: "ふくを 着ます。", reading: "き", level: 1 },
    { sentence: "えきに 着きます。", reading: "つ", level: 2 },
    { sentence: "でんしゃが よていの じこくに 着きました。", reading: "つ", level: 3 }
  ],

  "注": [
    { sentence: "みずを 注ぎます。", reading: "そそ", level: 1 },
    { sentence: "せんせいの 注いを よく ききます。", reading: "ちゅう", level: 2 },
    { sentence: "こぼさないように コップへ みずを 注ぎました。", reading: "そそ", level: 3 }
  ],

  "柱": [
    { sentence: "柱に もたれます。", reading: "はしら", level: 1 },
    { sentence: "でん柱を みます。", reading: "ちゅう", level: 2 },
    { sentence: "いえを ささえる ふとい 柱を みました。", reading: "はしら", level: 3 }
  ],

  "丁": [
    { sentence: "いち丁めです。", reading: "ちょう", level: 1 },
    { sentence: "丁ねいに かきます。", reading: "ちょう", level: 2 },
    { sentence: "まちがえないように 丁ねいに かきました。", reading: "ちょう", level: 3 }
  ],

  "帳": [
    { sentence: "て帳を つかいます。", reading: "ちょう", level: 1 },
    { sentence: "つう帳を みます。", reading: "ちょう", level: 2 },
    { sentence: "わすれないように よていを て帳へ かきました。", reading: "ちょう", level: 3 }
  ],

  "調": [
    { sentence: "わからない ことばを 調べます。", reading: "しら", level: 1 },
    { sentence: "調しを たしかめます。", reading: "ちょう", level: 2 },
    { sentence: "わからない ことばを じしょで 調べました。", reading: "しら", level: 3 }
  ],

  "追": [
    { sentence: "ボールを 追いかけます。", reading: "お", level: 1 },
    { sentence: "にげた ボールを 追います。", reading: "お", level: 2 },
    { sentence: "にげた ボールを いそいで 追いかけました。", reading: "お", level: 3 }
  ],

  "定": [
    { sentence: "よ定を たてます。", reading: "てい", level: 1 },
    { sentence: "じかんを きめて、よ定を たてます。", reading: "てい", level: 2 },
    { sentence: "らいしゅうの よ定を カレンダーに かきました。", reading: "てい", level: 3 }
  ],

  "庭": [
    { sentence: "庭で あそびます。", reading: "にわ", level: 1 },
    { sentence: "こう庭を はしります。", reading: "てい", level: 2 },
    { sentence: "こう庭で クラスのみんなと おにごっこを しました。", reading: "てい", level: 3 }
  ],

  "笛": [
    { sentence: "笛を ふきます。", reading: "ふえ", level: 1 },
    { sentence: "おんがくで 笛を ふきます。", reading: "ふえ", level: 2 },
    { sentence: "おんがくの じかんに 笛を ふきました。", reading: "ふえ", level: 3 }
  ],

  "鉄": [
    { sentence: "鉄ぼうで あそびます。", reading: "てつ", level: 1 },
    { sentence: "たいいくで 鉄ぼうを します。", reading: "てつ", level: 2 },
    { sentence: "こうえんの 鉄ぼうで さかあがりを しました。", reading: "てつ", level: 3 }
  ],

  "転": [
    { sentence: "転んで しまいました。", reading: "ころ", level: 1 },
    { sentence: "じ転しゃに のります。", reading: "てん", level: 2 },
    { sentence: "いしに つまずいて 転んで しまいました。", reading: "ころ", level: 3 }
  ],

  "都": [
    { sentence: "とうきょう都に すんで います。", reading: "と", level: 1 },
    { sentence: "都の まちなみです。", reading: "みやこ", level: 2 },
    { sentence: "とうきょう都には おおくの ひとが すんで います。", reading: "と", level: 3 }
  ],

  "度": [
    { sentence: "おん度を はかります。", reading: "ど", level: 1 },
    { sentence: "いち度 やってみます。", reading: "ど", level: 2 },
    { sentence: "わからなかったので もういち度 たしかめました。", reading: "ど", level: 3 }
  ],

  "投": [
    { sentence: "ボールを 投げます。", reading: "な", level: 1 },
    { sentence: "投しゅです。", reading: "とう", level: 2 },
    { sentence: "あいてに むかって ボールを 投げました。", reading: "な", level: 3 }
  ],

  "豆": [
    { sentence: "豆を たべます。", reading: "まめ", level: 1 },
    { sentence: "とうふは だい豆から できて います。", reading: "とう", level: 2 },
    { sentence: "せつぶんに 豆を まいて おにを おいはらいました。", reading: "まめ", level: 3 }
  ],

  "島": [
    { sentence: "島に わたります。", reading: "しま", level: 1 },
    { sentence: "はん島を さんぽします。", reading: "とう", level: 2 },
    { sentence: "ふねに のって ちいさな 島へ わたりました。", reading: "しま", level: 3 }
  ],

  "湯": [
    { sentence: "お湯を わかします。", reading: "ゆ", level: 1 },
    { sentence: "せん湯に いきます。", reading: "とう", level: 2 },
    { sentence: "さむかったので あたたかい お湯を のみました。", reading: "ゆ", level: 3 }
  ],

  "登": [
    { sentence: "やまに 登ります。", reading: "のぼ", level: 1 },
    { sentence: "登こうします。", reading: "とう", level: 2 },
    { sentence: "あさ はやく しゅっぱつして やまに 登りました。", reading: "のぼ", level: 3 }
  ],

  "等": [
    { sentence: "等しい おおきさです。", reading: "ひと", level: 1 },
    { sentence: "いっ等しょうを とりました。", reading: "とう", level: 2 },
    { sentence: "ふたつの テープを 等しい ながさに きりました。", reading: "ひと", level: 3 }
  ],

  "動": [
    { sentence: "からだを 動かします。", reading: "うご", level: 1 },
    { sentence: "うん動かいです。", reading: "どう", level: 2 },
    { sentence: "おとが したので どうぶつが 動きだしました。", reading: "うご", level: 3 }
  ],

  "童": [
    { sentence: "童わを よみます。", reading: "どう", level: 1 },
    { sentence: "じ童かんに いきます。", reading: "どう", level: 2 },
    { sentence: "としょかんで むかしの 童わを よみました。", reading: "どう", level: 3 }
  ],

  "農": [
    { sentence: "農かを たずねます。", reading: "のう", level: 1 },
    { sentence: "農さぎょうを します。", reading: "のう", level: 2 },
    { sentence: "しゃかいかで 農かの しごとを しらべました。", reading: "のう", level: 3 }
  ],

  "波": [
    { sentence: "波が うちよせます。", reading: "なみ", level: 1 },
    { sentence: "でん波を うけとります。", reading: "は", level: 2 },
    { sentence: "うみの おおきな 波が いわに ぶつかりました。", reading: "なみ", level: 3 }
  ],

  "配": [
    { sentence: "プリントを 配ります。", reading: "くば", level: 1 },
    { sentence: "しん配します。", reading: "はい", level: 2 },
    { sentence: "プリントを ひとりずつ じゅんばんに 配りました。", reading: "くば", level: 3 }
  ],

  "倍": [
    { sentence: "に倍に なります。", reading: "ばい", level: 1 },
    { sentence: "倍りつを けいさんします。", reading: "ばい", level: 2 },
    { sentence: "みずを もとの に倍の りょうに しました。", reading: "ばい", level: 3 }
  ],

  "箱": [
    { sentence: "箱に いれます。", reading: "はこ", level: 1 },
    { sentence: "ほん箱を せいりします。", reading: "ばこ", level: 2 },
    { sentence: "つかった おもちゃを 箱の なかへ かたづけました。", reading: "はこ", level: 3 }
  ],

  "畑": [
    { sentence: "畑で やさいを そだてます。", reading: "はたけ", level: 1 },
    { sentence: "はな畑を みます。", reading: "ばたけ", level: 2 },
    { sentence: "おじいさんの 畑で じゃがいもを ほりました。", reading: "はたけ", level: 3 }
  ],

  "発": [
    { sentence: "発けんしました。", reading: "はっ", level: 1 },
    { sentence: "がっこうを はちじに しゅっ発します。", reading: "ぱつ", level: 2 },
    { sentence: "まちたんけんで あたらしい みせを 発けんしました。", reading: "はっ", level: 3 }
  ],

  "反": [
    { sentence: "反たいします。", reading: "はん", level: 1 },
    { sentence: "いたが 反ります。", reading: "そ", level: 2 },
    { sentence: "わたしは その いけんに 反たいしました。", reading: "はん", level: 3 }
  ],

  "坂": [
    { sentence: "坂を のぼります。", reading: "さか", level: 1 },
    { sentence: "きゅうな 坂です。", reading: "さか", level: 2 },
    { sentence: "じてんしゃを おして きゅうな 坂を のぼりました。", reading: "さか", level: 3 }
  ],

  "板": [
    { sentence: "板を きります。", reading: "いた", level: 1 },
    { sentence: "こく板に かきます。", reading: "ばん", level: 2 },
    { sentence: "のこぎりを つかって 板を きりました。", reading: "いた", level: 3 }
  ],

  "皮": [
    { sentence: "りんごの 皮を むきます。", reading: "かわ", level: 1 },
    { sentence: "きの 皮を よく みます。", reading: "かわ", level: 2 },
    { sentence: "りんごの 皮を うすく むきました。", reading: "かわ", level: 3 }
  ],

  "悲": [
    { sentence: "悲しい きもちです。", reading: "かな", level: 1 },
    { sentence: "ともだちの 悲しい はなしを ききます。", reading: "かな", level: 2 },
    { sentence: "ともだちが てんこうして 悲しい きもちに なりました。", reading: "かな", level: 3 }
  ],

  "美": [
    { sentence: "美しい はなです。", reading: "うつく", level: 1 },
    { sentence: "美じゅつかんに いきます。", reading: "び", level: 2 },
    { sentence: "あさつゆが ひかる 美しい はなを みつけました。", reading: "うつく", level: 3 }
  ],

  "鼻": [
    { sentence: "鼻を かみます。", reading: "はな", level: 1 },
    { sentence: "はなの においを 鼻で かぎます。", reading: "はな", level: 2 },
    { sentence: "かぜを ひいて 鼻が つまって しまいました。", reading: "はな", level: 3 }
  ],

  "筆": [
    { sentence: "筆で かきます。", reading: "ふで", level: 1 },
    { sentence: "えん筆を つかいます。", reading: "ぴつ", level: 2 },
    { sentence: "しゅうじの じかんに 筆で おおきく かきました。", reading: "ふで", level: 3 }
  ],

  "氷": [
    { sentence: "氷を たべます。", reading: "こおり", level: 1 },
    { sentence: "みずを こおらせて 氷を つくります。", reading: "こおり", level: 2 },
    { sentence: "ジュースに 氷を いれて つめたく しました。", reading: "こおり", level: 3 }
  ],

  "表": [
    { sentence: "きもちを 表します。", reading: "あらわ", level: 1 },
    { sentence: "表を みます。", reading: "ひょう", level: 2 },
    { sentence: "じぶんの きもちを ことばで 表しました。", reading: "あらわ", level: 3 }
  ],

  "秒": [
    { sentence: "じゅう秒 かぞえます。", reading: "びょう", level: 1 },
    { sentence: "秒しんを みます。", reading: "びょう", level: 2 },
    { sentence: "ストップウォッチで じゅう秒 はかりました。", reading: "びょう", level: 3 }
  ],

  "病": [
    { sentence: "病きに なりました。", reading: "びょう", level: 1 },
    { sentence: "病きの ときは むりを しません。", reading: "びょう", level: 2 },
    { sentence: "病きに ならないように てを あらいます。", reading: "びょう", level: 3 }
  ],

  "品": [
    { sentence: "品を えらびます。", reading: "しな", level: 1 },
    { sentence: "さく品を つくります。", reading: "ひん", level: 2 },
    { sentence: "みせに ならぶ 品を ていねいに ならべました。", reading: "しな", level: 3 }
  ],

  "負": [
    { sentence: "しあいに 負けます。", reading: "ま", level: 1 },
    { sentence: "あかぐみに 負けないように はしります。", reading: "ま", level: 2 },
    { sentence: "しあいに 負けても あきらめません。", reading: "ま", level: 3 }
  ],

  "部": [
    { sentence: "部かつを します。", reading: "ぶ", level: 1 },
    { sentence: "ぶんを みっつの 部ぶんに わけます。", reading: "ぶ", level: 2 },
    { sentence: "ものがたりを みっつの 部ぶんに わけて まとめました。", reading: "ぶ", level: 3 }
  ],

  "服": [
    { sentence: "服を きます。", reading: "ふく", level: 1 },
    { sentence: "せい服を きます。", reading: "ふく", level: 2 },
    { sentence: "あした きる 服を じゅんびしました。", reading: "ふく", level: 3 }
  ],

  "福": [
    { sentence: "こう福な きもちです。", reading: "ふく", level: 1 },
    { sentence: "みんなの こう福を ねがいます。", reading: "ふく", level: 2 },
    { sentence: "みんなの こう福を こころから ねがいました。", reading: "ふく", level: 3 }
  ],

  "物": [
    { sentence: "たべ物を かいます。", reading: "もの", level: 1 },
    { sentence: "どう物えんに いきます。", reading: "ぶつ", level: 2 },
    { sentence: "わすれ物が ないか もういちど たしかめました。", reading: "もの", level: 3 }
  ],

  "平": [
    { sentence: "平らな みちです。", reading: "たい", level: 1 },
    { sentence: "平らな だいに はこを おきます。", reading: "たい", level: 2 },
    { sentence: "でこぼこの じめんを 平らに しました。", reading: "たい", level: 3 }
  ],

  "返": [
    { sentence: "ほんを 返します。", reading: "かえ", level: 1 },
    { sentence: "ともだちに ほんを 返します。", reading: "かえ", level: 2 },
    { sentence: "としょかんで かりた ほんを 返しました。", reading: "かえ", level: 3 }
  ],

  "勉": [
    { sentence: "勉きょうします。", reading: "べん", level: 1 },
    { sentence: "まいにち さんじゅっぷん、勉きょうします。", reading: "べん", level: 2 },
    { sentence: "テストに むけて まいにち 勉きょうしました。", reading: "べん", level: 3 }
  ],

  "放": [
    { sentence: "とりを 放します。", reading: "はな", level: 1 },
    { sentence: "放かごに あそびます。", reading: "ほう", level: 2 },
    { sentence: "つかまえた ちょうを そらへ 放しました。", reading: "はな", level: 3 }
  ],

  "味": [
    { sentence: "味が いいです。", reading: "あじ", level: 1 },
    { sentence: "きょう味が あります。", reading: "み", level: 2 },
    { sentence: "スープの 味を みて しおを たしました。", reading: "あじ", level: 3 }
  ],

  "命": [
    { sentence: "命を たいせつに します。", reading: "いのち", level: 1 },
    { sentence: "ロボットに 命れいを だします。", reading: "めい", level: 2 },
    { sentence: "すべての 命を たいせつに します。", reading: "いのち", level: 3 }
  ],

  "面": [
    { sentence: "つくえの 面を ふきます。", reading: "めん", level: 1 },
    { sentence: "ちょくほうたいの 面を かぞえます。", reading: "めん", level: 2 },
    { sentence: "サイコロの 面に かかれた かずを みました。", reading: "めん", level: 3 }
  ],

  "問": [
    { sentence: "しつ問します。", reading: "もん", level: 1 },
    { sentence: "せんせいに しつ問します。", reading: "もん", level: 2 },
    { sentence: "わからない ことを せんせいに しつ問しました。", reading: "もん", level: 3 }
  ],

  "役": [
    { sentence: "役わりを します。", reading: "やく", level: 1 },
    { sentence: "しゅ役に なりました。", reading: "やく", level: 2 },
    { sentence: "げきで どうぶつの 役を えんじました。", reading: "やく", level: 3 }
  ],

  "薬": [
    { sentence: "薬を のみます。", reading: "くすり", level: 1 },
    { sentence: "薬きょくに いきます。", reading: "やく", level: 2 },
    { sentence: "びょういんで もらった 薬を のみました。", reading: "くすり", level: 3 }
  ],

  "由": [
    { sentence: "じ由に あそびます。", reading: "ゆう", level: 1 },
    { sentence: "り由を はなします。", reading: "ゆう", level: 2 },
    { sentence: "おくれた り由を せんせいに はなしました。", reading: "ゆう", level: 3 }
  ],

  "油": [
    { sentence: "油で あげます。", reading: "あぶら", level: 1 },
    { sentence: "せき油を つかいます。", reading: "ゆ", level: 2 },
    { sentence: "フライパンに 油を ひいて やさいを いためました。", reading: "あぶら", level: 3 }
  ],

  "有": [
    { sentence: "有めいな ひとです。", reading: "ゆう", level: 1 },
    { sentence: "まだ じかんが 有ります。", reading: "あ", level: 2 },
    { sentence: "この まちには 有めいな おてらが あります。", reading: "ゆう", level: 3 }
  ],

  "遊": [
    { sentence: "こうえんで 遊びます。", reading: "あそ", level: 1 },
    { sentence: "遊えんちに いきます。", reading: "ゆう", level: 2 },
    { sentence: "やすみじかんに こうえんで 遊びました。", reading: "あそ", level: 3 }
  ],

  "予": [
    { sentence: "予ていを たてます。", reading: "よ", level: 1 },
    { sentence: "あしたの 予ていを たしかめます。", reading: "よ", level: 2 },
    { sentence: "あしたの 予ていを カレンダーで たしかめました。", reading: "よ", level: 3 }
  ],

  "羊": [
    { sentence: "羊が います。", reading: "ひつじ", level: 1 },
    { sentence: "羊もうの セーターです。", reading: "よう", level: 2 },
    { sentence: "ぼくじょうで 羊に えさを あげました。", reading: "ひつじ", level: 3 }
  ],

  "洋": [
    { sentence: "洋ふくを きます。", reading: "よう", level: 1 },
    { sentence: "せい洋の くらしを しらべます。", reading: "よう", level: 2 },
    { sentence: "はれの ひに あたらしい 洋ふくを きました。", reading: "よう", level: 3 }
  ],

  "様": [
    { sentence: "たなか様に てがみを かきます。", reading: "さま", level: 1 },
    { sentence: "様すを みます。", reading: "よう", level: 2 },
    { sentence: "まどの そとの 様すを しずかに みました。", reading: "よう", level: 3 }
  ],

  "葉": [
    { sentence: "葉が おちます。", reading: "は", level: 1 },
    { sentence: "こう葉を みます。", reading: "よう", level: 2 },
    { sentence: "あきに なると きいろい 葉が おちて きます。", reading: "は", level: 3 }
  ],

  "陽": [
    { sentence: "たい陽が でて います。", reading: "よう", level: 1 },
    { sentence: "たい陽の うごきを かんさつします。", reading: "よう", level: 2 },
    { sentence: "たい陽の うごきを じかんごとに しらべました。", reading: "よう", level: 3 }
  ],

  "落": [
    { sentence: "はっぱが 落ちます。", reading: "お", level: 1 },
    { sentence: "きの みが じめんに 落ちます。", reading: "お", level: 2 },
    { sentence: "つよい かぜで このはが 落ちました。", reading: "お", level: 3 }
  ],

  "流": [
    { sentence: "かわが 流れます。", reading: "なが", level: 1 },
    { sentence: "みずの 流れを かんさつします。", reading: "なが", level: 2 },
    { sentence: "かわの みずが ゆっくり 流れて います。", reading: "なが", level: 3 }
  ],

  "旅": [
    { sentence: "旅に でます。", reading: "たび", level: 1 },
    { sentence: "かぞくで いちにちの 旅に でます。", reading: "たび", level: 2 },
    { sentence: "かぞくで でんしゃの 旅に でかけました。", reading: "たび", level: 3 }
  ],

  "両": [
    { sentence: "両ほうの てです。", reading: "りょう", level: 1 },
    { sentence: "両てで ボールを うけます。", reading: "りょう", level: 2 },
    { sentence: "ボールを 両てで しっかり うけました。", reading: "りょう", level: 3 }
  ],

  "緑": [
    { sentence: "緑いろの はっぱです。", reading: "みどり", level: 1 },
    { sentence: "緑ちゃを のみます。", reading: "りょく", level: 2 },
    { sentence: "はるに なると やまが 緑に かわります。", reading: "みどり", level: 3 }
  ],

  "礼": [
    { sentence: "お礼を いいます。", reading: "れい", level: 1 },
    { sentence: "たすけて くれた ひとに お礼を いいます。", reading: "れい", level: 2 },
    { sentence: "たすけて もらったので お礼を いいました。", reading: "れい", level: 3 }
  ],

  "列": [
    { sentence: "列に ならびます。", reading: "れつ", level: 1 },
    { sentence: "ぎょう列です。", reading: "れつ", level: 2 },
    { sentence: "まえの ひとに つづいて 列に ならびました。", reading: "れつ", level: 3 }
  ],

  "練": [
    { sentence: "練しゅうします。", reading: "れん", level: 1 },
    { sentence: "きじを 練ります。", reading: "ね", level: 2 },
    { sentence: "うんどうかいに むけて まいにち 練しゅうしました。", reading: "れん", level: 3 }
  ],

  "路": [
    { sentence: "どう路を あるきます。", reading: "ろ", level: 1 },
    { sentence: "がっこうまでの どう路を ちずに かきます。", reading: "ろ", level: 2 },
    { sentence: "あんぜんに きを つけて どう路を あるきました。", reading: "ろ", level: 3 }
  ],

  "和": [
    { sentence: "和ふくを きます。", reading: "わ", level: 1 },
    { sentence: "へい和な せかいです。", reading: "わ", level: 2 },
    { sentence: "みんなが あんしんして くらせる へい和を ねがいます。", reading: "わ", level: 3 }
  ]

};
