# Pアナザーゴッドハーデス-獄炎-

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pアナザーゴッドハーデス-獄炎-
manufacturer: メーシー / ユニバーサルエンターテインメント
releaseDate: 2025-04-07
modelType: P機 / ライトミドル / LT搭載
gameType: 一種二種混合 / 段階時短突破型 / c時短併用 / LT-ST
jackpotProbability: 通常時 約1/199.8。右打ち中 約1/77.8（大当りと小当りの合算）。c時短 約1/312（GOD GAME中と残保留の特図2のみ有効）。
initialPayout: 通常時大当りは1%が10R約1500個+LT直行、99%が7R約1050個+獄炎CHALLENGE。払出表記。
rushEntryRate: 時短突入率100%。通常初当りの1%はLT「GOD GAME」直行、99%は獄炎CHALLENGEへ。
rushContinuationRate: 下位段階は獄炎CHALLENGE（時短20回+残保留4）突破約28%、続くHADES ROAD（時短53回+残保留4）突破約50%。通常の連続RUSHというよりLT到達までの2段階時短として扱う。
ltName: GOD GAME
ltEntryRoute: 通常初当りの1%でGOD GAME直行。または初当り99%→獄炎CHALLENGEで大当り→HADES ROAD→HADES ROADで大当りしてGOD GAME。メーカー公式表現では「初当りからLT直行、もしくは時短へ必ず突入」「時短中に2回の大当りで確実にLT」。
ltEntryRate: 通常初当り1%は直接LT。時短経由は獄炎CHALLENGE約28%→HADES ROAD約50%の段階値を保存。通常初当り基準の総LT到達率は公表された直接TOTAL値を今回確認できないため、経路確率から独自合算せずUNVERIFIED。
ltContinuationRate: 約89%。GOD GAMEは時短130回+残保留4。時短中の大当り・小当り・c時短および残保留4回転のc時短の合算値。
ltPayoutStructure: GOD GAME中の図柄揃いはALL10R約1500個。HADES ROAD/GOD GAME中の特図2大当りは10R約1500個+GOD GAME 100%。c時短当選では時短130回または10000回となる資料あり。
totalPayoutDistribution: 通常時: 10R約1500個+GOD GAME 1% / 7R約1050個+獄炎CHALLENGE 99%。獄炎CHALLENGE中: 10R約1500個+HADES ROAD 100%。HADES ROAD/GOD GAME中: 10R約1500個+GOD GAME 100%。すべて払出表記。
timeShortening: 獄炎CHALLENGE=時短20回+残保留4。HADES ROAD=時短53回+残保留4。GOD GAME=時短130回+残保留4。c時短等により10000回+残保留4となる状態あり。
cTimeOrSpecialSystems: c時短約1/312。GOD GAME中と残保留の特図2のみ有効。獄炎CHALLENGE/HADES ROAD/GOD GAMEの公称突破・継続率には、大当り・小当り・残保留c時短等が状態別注記に従って含まれる。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時 約1/199.8
   ↓ 初当り
   ├─ 1% → 10R約1500個 → LT「GOD GAME」(130回+残4、約89%)
   └─ 99% → 7R約1050個 → 獄炎CHALLENGE (20回+残4、突破約28%)
                                  ↓ 大当り
                               10R約1500個
                                  ↓
                               HADES ROAD (53回+残4、突破約50%)
                                  ↓ 大当り
                               10R約1500個
                                  ↓
                               LT「GOD GAME」(約89%)
                                  ↓ 図柄揃い
                               ALL10R約1500個 + LT継続
notes: |
  型式名は「Pアナザーゴッドハーデス3SB」。メーカー公式がLT「GOD GAME」とワンルートLT構造を明記。
  時短突入率100%をLT突入率100%と誤読しない。通常初当りの大半は2段階時短突破を要する。
  約28%・約50%・約89%は各状態の公称突破/継続率であり、単純な大当り確率だけではなく残保留やc時短を含む定義。
  LT突入時期待出玉約13,500個という資料値は、GOD GAME突入までの出玉とGOD GAME期待値の払出合計であり、大当り1回の出玉と混同しない。
sources:
  - https://www.universal-777.co.jp/news/20250114001619/ — ユニバーサルエンターテインメント公式ニュース。メーシー製、2025年4月予定、初当りLT直行または時短100%、時短中2回大当りでLT、GOD GAME約89%、図柄揃いALL1500個。取得 2026-09-21。
  - https://www.universal-777.com/product/pachinko/hades_gokuen/ — メーカー公式機種サイト。LT構造確認。取得 2026-09-21。
  - https://news.p-world.co.jp/articles/29998/yugitsushin — 遊技通信。型式Pアナザーゴッドハーデス3SB、1/199.8→1/77.8、c時短約1/312、獄炎CHALLENGE約28%、HADES ROAD約50%、GOD GAME約89%、状態別定義注記。取得 2026-09-21。
  - https://www.pachibee.jp/machines/index/125030005 — パチビー。2025-04-07導入、LT搭載、1/199.8、右1/77.8、時短100%、20/53/130回、c時短と出玉定義。取得 2026-09-21。
  - https://nana-press.com/kaiseki/machine/915/27128/ — なな徹。ライトミドル/LT、一種二種混合、確率・c時短・突破率・出玉・20/53/130/10000回+残4、遊タイム非搭載。取得 2026-09-21。
  - https://chonborista.com/pachinko/universal/229728/ — 解析資料。2025-04-07導入、通常時1% LT直行/99%獄炎CHALLENGE、各特図振り分けと時短回数。取得 2026-09-21。
  - https://hazuse.com/hd/410215-2/ — 業界DB。型式、メーカー、LT搭載、2025-04-07導入を照合。取得 2026-09-21。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
missingFields:
  - 通常初当り基準の総LT到達率（直接TOTAL値未確認）
conflicts: []
