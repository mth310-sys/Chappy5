# eアクダマドライブ

machineName: eアクダマドライブ
manufacturer: 三洋物産（SANYO）
releaseDate: 2026-03-02
modelType: スマパチ / ミドル
modelCode: eアクダマドライブEHLT
inspectionNumber: 510887
gameType: 一種二種混合 / ST型 / LT3.0+
status: COMPLETE_CORE
retrievedAt: 2026-09-24

## Core spec
- jackpotProbability: 通常時 約1/319.6。右打ち中 約1/85.9。
- initialPayout: 4R 約600個（払出）100%。初当り後は100%で「ドラマチックST」へ。
- rushEntryRate: ドラマチックST 100%。
- rushContinuationRate: 約62%（ST78回の継続約59.8%＋残保留4個約4.6%を含むTOTAL表記）。
- timeShortening: ドラマチックST 78回＋残保留4個。LT「アクダマドライブ」120回＋残保留4個。
- ceilingOrSupport: 遊タイム搭載根拠は確認できず。

## RUSH / LT structure
- ltName: アクダマドライブ（資料に「LTアクダマドライブ」「AKUDAMA DRIVE」表記あり）。
- ltEntryRoute: 初当り後のドラマチックSTで、電サポ中に1500個の出玉あり大当りを2回獲得するとLTへ。STリセット（出玉なし）約19%は段階を進めずドラマチックSTを維持。残保留当選はST1回目扱いになるため、LT到達条件の2回には連続して数えない。
- ltEntryRate: 通常初当り基準の総LT到達率について、信頼できる資料で直接公表された値を確認できず。経路確率から独自算出しない。
- ltContinuationRate: 約77%（ST120回継続約75.4%＋残保留4個約4.6%を含むTOTAL表記）。
- cTimeOrSpecialSystems: ドラマチックST中の約19%にSTリセット（出玉なし）。LT中の3000個は1500個×2回で、単一10R大当りの出玉ではない。

## Payout distribution
### 通常時 / 特図1
- 4R 約600個 + ドラマチックST78回＋残保留4個: 100%

### ドラマチックST / 特図2
- 10R 約1500個: 約81%。ST1回目で当選時はST2回目へ、ST2回目で当選時はLT「アクダマドライブ」へ。
- STリセット（出玉なし）: 約19%。現在のST段階を維持。

### LT「アクダマドライブ」 / 特図2
- 約3000個（1500個×2）+ LT120回＋残保留4個: 100%。
- 一部演出では約6000個（1500個×4）表示が発生するが、複数大当り合計表現として扱い、単一大当り出玉とはしない。

## Game flow
通常時（約1/319.6）
↓ 初当り 4R約600個 100%
ドラマチックST・ST1回目（78回＋残保留4個 / TOTAL継続約62%）
↓ 電サポ中1500個大当り（約81%）
ドラマチックST・ST2回目（78回＋残保留4個）
↓ 電サポ中1500個大当り（約81%）
LT「アクダマドライブ」（120回＋残保留4個 / TOTAL継続約77%）
↓ LT中大当りは約3000個=1500個×2、100%
LT継続
↓ 120回スルー
残保留消化 → 通常時

※ドラマチックST中のSTリセット約19%は出玉なしで同段階を維持。残保留当選はST1回目扱い。

## Cross-check / definitions
- 三洋発表を伝える遊技通信/P-WORLD業界ニュースは型式 `eアクダマドライブEHLT`、通常約1/319.6、右約1/85.9、一種二種混合、ST100%、下位約62%、LT約77%、LT中ALL3000個（1500個×2）、2026-03-02導入を掲載。
- パチビー、P-WORLD機種DB、一撃、必勝本、なな徹で主要構造・振り分けを照合。主要値は一致。
- 一部攻略ページに右打ち中約1/85.1の表記があるが、業界発表・複数主要解析の約1/85.9をcanonicalとする。単独表記差はnotesに保持し、主要スペック競合とは判定しない。
- LT突入時期待出玉約13090個という解析表記は「LT突入までの獲得約3600個を含む期待値」であり、LT中単独の払出振り分けと混同しない。

## Sources
- https://news.p-world.co.jp/articles/32613/yugitsushin — 業界一次寄り。三洋販売発表、型式・確率・ST/LT構造・導入日。
- https://www.p-world.co.jp/machine/database/10413 — 機種DB。特図1/特図2振り分け、3000個=1500個×2。
- https://www.pachibee.jp/machines/index/126020002 — 基本スペック、ST回数、継続率内訳、導入日。
- https://1geki.jp/pachinko/e_akudamadrive/ — 型式、検定番号、確率、出玉、ST/LT構造。
- https://p.hisshobon.jp/news/2242 — 発表時記事。ST100%、1500個2回でLT、LT120回・約77%・ALL3000個。
- https://hisshobon.com/machineinfo/100805/ — LT発動条件、残保留の扱い、終了条件。
- https://p.hisshobon.jp/machine/4681/1/113385 — 大当り振り分け。ST中1500個約81% / STリセット約19%、LT中3000個100%。
- https://nana-press.com/kaiseki/machine/1110/35332/ — 特図別振り分け照合。
- https://pachimaga.com/free/mach/maker-p/sanyo/064520.php — 1/319.6、一種二種混合、ST中2回大当りでLT、LT約77%・ALL3000個。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sanyo_pachi/360/ru01.php — ST構造照合。右約1/85.1表記あり。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率: UNVERIFIED（直接公表値未確認。推測計算しない）
conflicts: none (右打ち中1/85.1の単独表記差は、業界発表＋複数資料1/85.9を優先し注記保持)
