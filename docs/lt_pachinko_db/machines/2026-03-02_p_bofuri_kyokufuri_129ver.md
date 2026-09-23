# P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver

machineName: P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver
manufacturer: 藤商事
releaseDate: 2026-03-02
modelType: ライトミドル / P機
gameType: 2種 / ST型 / 下位チャレンジ突破LT
modelCode: P防振り 極振り129verFVZ
inspectionNumber: 510561
jackpotProbability: 通常時 約1/129（特図1小当り確率） / 右打ち中 約1/106（電チューロング開放確率）
initialPayout: 約300個（払出、V入賞が条件）
rushEntryRate: LT GETチャレンジ「NewWorld Online」100%（初当り後、V入賞が条件）
rushContinuationRate: LT GETチャレンジ「NewWorld Online」は30回、右当選約1/106、大当り期待度約25%。右大当り時はLTジャッジ100%発生、成功約50%。
ltName: NewWorld Online極振り170
ltEntryRoute: 通常時当選 → 約300個 → LT GETチャレンジ「NewWorld Online」30回 → 右大当り → LTジャッジ → 約50%成功でLT「NewWorld Online極振り170」。LTジャッジ非成功時（約1500個振り分け）はLT GETチャレンジへ復帰。
ltEntryRate: 通常遊技全体基準の総LT到達率は直接公表値を確認できないためUNVERIFIED。経路値として、LT GETチャレンジ中大当り期待度約25%、右大当り時LT発動率約50%。独自合算しない。
ltContinuationRate: 約80%（170回、右当選約1/106）
ltPayoutStructure: LT中 特図2は約4350個 約1% / 約3400個 約10% / 約2450個 約39% / 約1500個 約50%、全てLT継続。各出玉は特図2大当り3回分の払出合計、V入賞が条件。
totalPayoutDistribution: 特図1: 約300個 + LT GETチャレンジ 100%。LT GETチャレンジ中 特図2: 約4350個 + LT 約1% / 約3400個 + LT 約10% / 約2450個 + LT 約39% / 約1500個 + LT GETチャレンジ 約50%。LT中 特図2: 約4350個 約1% / 約3400個 約10% / 約2450個 約39% / 約1500個 約50%、全てLT継続。右出玉は特図2大当り3回分の合計値。
timeShortening: LT GETチャレンジ「NewWorld Online」30回 / LT「NewWorld Online極振り170」170回
cTimeOrSpecialSystems: LTジャッジ — LT GETチャレンジ中の右大当り時に100%発生（V入賞が条件）、成功率約50%。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（約1/129、特図1小当り確率）
   ↓ 当選 / 約300個
  LT GETチャレンジ「NewWorld Online」100%
   30回 / 右約1/106 / 大当り期待度約25%
   ↓ 右大当り → LTジャッジ100%
   ├─ 約50%（約1500個） → LT GETチャレンジへ復帰
   └─ 約50%（約2450～4350個） → LT「NewWorld Online極振り170」
                                      170回 / 右約1/106 / 継続約80%
                                      ↓ 右大当り
                                      ├─ 約1500個 約50% → LT継続
                                      ├─ 約2450個 約39% → LT継続
                                      ├─ 約3400個 約10% → LT継続
                                      └─ 約4350個 約1% → LT継続

notes:
- 型式名 `P防振り 極振り129verFVZ`、検定番号510561。2026-03-02導入。
- 業界発表・HAZUSE・P-WORLD・必勝本・なな徹でLT搭載、主要確率、30回/170回、LTジャッジ約50%、LT継続約80%を横断照合。
- LT正式状態は `NewWorld Online極振り170`。下位 `NewWorld Online` はLT GETチャレンジであり、LT本体と混同しない。
- LT GETチャレンジは初当り後100%突入するが、これはLT突入率100%ではない。LT到達には右大当り（期待度約25%）とLTジャッジ成功約50%が必要。
- 右の1500/2450/3400/4350個はすべて特図2大当り3回分の払出合計値であり、単一大当り出玉ではない。
- LT GETチャレンジ中の約2450個以上（1+10+39=約50%）がLT移行、約1500個50%は下位チャレンジ継続という詳細振り分けを複数解析資料で照合。
- 通常遊技全体基準の総LT到達率は経路値から独自計算せずUNVERIFIED。

sources:
- https://news.p-world.co.jp/articles/32725/yugitsushin — 遊技通信/P-WORLD業界ニュース。藤商事発表、型式、通常1/129、右1/106、LT GETチャレンジ100%、期待度約25%、LTジャッジ100%・成功50%、LT約80%。取得日 2026-09-24。
- https://news.p-world.co.jp/articles/32706/greenbelt — グリーンべると/P-WORLD業界ニュース。LT搭載、通常1/129、初当り後LT GETチャレンジ、30回・約25%、LT構造照合。取得日 2026-09-24。
- https://hazuse.com/machine/pachinko/PX0338/ — HAZUSE。型式、検定番号510561、導入日2026-03-02、メーカー、LT約80%。取得日 2026-09-24。
- https://p.hisshobon.jp/machine/4690/1/113552 — パチ&スロ必勝本。2種、30回/170回、右1/106、LT発動約50%、右出玉定義、遊タイム非搭載。取得日 2026-09-24。
- https://nana-press.com/kaiseki/machine/1122/35459/ — なな徹。LT GETチャレンジ中およびLT中の4350/3400/2450/1500個振り分けと移行先。取得日 2026-09-24。
- https://www.p-world.co.jp/machine/database/10423 — P-WORLD。LT搭載、上位RUSH名称、継続約80%、右出玉が3回分合計であることを照合。取得日 2026-09-24。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/fujishoji_pachi/405/kh01.php — パチンコ攻略マガジン系機種概要。型式、2種時短、導入日、30回/170回、最大4350個定義。取得日 2026-09-24。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: 通常遊技全体基準の総LT到達率（直接公表値未確認）
conflicts: none identified
status: COMPLETE_CORE
retrievedAt: 2026-09-24
