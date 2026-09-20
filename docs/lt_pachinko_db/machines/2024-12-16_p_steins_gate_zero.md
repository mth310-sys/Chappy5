# Pシュタインズ・ゲート ゼロ

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pシュタインズ・ゲート ゼロ
formalModel: PSTEINS；GATE0L2-K
manufacturer: ニューギン
releaseDate: 2024-12-16
modelType: ミドル / LT搭載

gameType: 一種二種混合。下位RUSH「RUSH 0」と時短「イベントホライゾン」からLT「RUSH 0 HYPER」を目指すST型構造。
jackpotProbability: 通常時図柄揃い 1/319.68 / 右打ち中実質 1/89.89（大当り+小当り合算） / チャージ 1/516.03
initialPayout: 図柄揃い初当り2R 約300個（払出）。右打ち図柄揃い10R 約1500個（払出）。
rushEntryRate: トータルRUSH突入 約71%（時短引き戻し込み）。図柄揃い初当りからRUSH 0直行62.1%、イベントホライゾン37.9%。
rushContinuationRate: RUSH 0 約80%（140回+残保留4。140回部分約79.1%と残保留4個約4.4%の合算）。
ltName: RUSH 0 HYPER
ltEntryRoute: (1) RUSH 0中のタイムリープ当選時の50%（右打ち振り分け上は全体の10%）でLT、(2) 初当り非RUSH側のイベントホライゾン20回中に大当りまたは順目揃いでLT直行。イベントホライゾン残保留4個の引き戻しはRUSH 0振り分けとなる点に注意。
ltEntryRate: RUSH 0中は当選時振り分け10%がRUSH 0 HYPER。イベントホライゾン20回部分の引き戻し約20%は当選すればLT直行。通常初当りを分母とする総LT到達率は直接公表値を確認できないためUNVERIFIED。
ltContinuationRate: 約89%（190回部分約88.1%と残保留4個約4.4%の合算）。
ltPayoutStructure: RUSH 0 HYPER中は10R約1500個+LT継続80%、タイムリープ（出玉なし）+LT継続20%。図柄揃い大当りはALL約1500個。
totalPayoutDistribution: 通常図柄揃い: 2R約300個+RUSH 0 62.1% / 2R約300個+イベントホライゾン37.9%。イベントホライゾン20回中: 10R約1500個+LT 80% / 順目揃い（出玉なし）+LT 20%。RUSH 0中: 10R約1500個+RUSH 0 80% / タイムリープ+LT 10% / タイムリープ+RUSH 0 10%。LT中: 10R約1500個+LT 80% / タイムリープ+LT 20%。
timeShortening: イベントホライゾン20回+残保留4 / RUSH 0 140回+残保留4 / RUSH 0 HYPER 190回+残保留4。
cTimeOrSpecialSystems: 突然時短相当のタイムリープ/順目揃いを搭載。RUSH 0ではタイムリープ発生時50%でLT、50%でRUSH 0巻き戻し。イベントホライゾンでは大当り/順目揃いがLT契機。
ceilingOrSupport: 遊タイム非搭載。

gameFlow: |
  通常時 図柄揃い 1/319.68
   ├─ 62.1% → 約300個 → RUSH 0（140回+残4、約80%）
   │             ├─ 10R 約1500個 80% → RUSH 0継続
   │             ├─ タイムリープ 10% → RUSH 0継続
   │             └─ タイムリープ 10% → RUSH 0 HYPER（LT）
   └─ 37.9% → 約300個 → イベントホライゾン（20回+残4）
                 ├─ 20回中の大当り/順目揃い → RUSH 0 HYPER（LT）
                 └─ 残保留4での引き戻し → RUSH 0側振り分け
  RUSH 0 HYPER（190回+残4、約89%）
   ├─ 10R 約1500個 80% → LT継続
   └─ タイムリープ 20% → LT継続

notes:
- 2025年導入の「デカスタ Pシュタインズゲート ゼロ まゆしぃば～じょん」（1/99.9）とは別スペック。
- 「イベントホライゾン引き戻し約20%」は20回部分。残保留4個込みは約24%だが、残保留当選はRUSH 0の振り分けになるためLT直行率と同一視しない。
- トータルRUSH突入約71%は時短引き戻し込み。62.1%の初回RUSH 0直行率とは分母/定義が異なる。
- 通常初当り基準の総LT到達率は計算推測で補完しない。

sources:
- P-WORLD 業界ニュース / Amusement Japan（ニューギン直営先行導入・全国導入日・スペック）: https://news.p-world.co.jp/articles/29543/amusement
- P-WORLD 機種DB（ゲームフロー・継続率）: https://www.p-world.co.jp/machine/database/10151
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/94863/
- HAZUSE 基本スペック/型式: https://hazuse.com/machine/pachinko/PX0250/genre/101/
- なな徹 スペック詳細・大当り内訳: https://nana-press.com/kaiseki/machine/842/25358/
- パチセブン 基本スペック: https://pachiseven.jp/articles/detail/23244
- Ativo 型式/詳細振り分け: https://ativo.jp/2024/10/30/p%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%A4%E3%83%B3%E3%82%BA%E3%83%BB%E3%82%B2%E3%83%BC%E3%83%88-%E3%82%BC%E3%83%AD/

confidence:
- LT搭載/導入日/基本構造: INDUSTRY + ANALYSIS_HIGH cross-check
- 通常/右確率・RUSH/LT継続率: INDUSTRY + ANALYSIS_HIGH
- 初回/右打ち振り分け: ANALYSIS_HIGH（複数資料整合）
- 通常初当り基準総LT到達率: UNVERIFIED

missingFields:
- 通常初当り基準の総LT到達率（直接公表値）

conflicts: []
