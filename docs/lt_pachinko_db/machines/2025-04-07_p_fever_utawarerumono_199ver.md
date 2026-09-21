# Pフィーバーうたわれるもの 199ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pフィーバーうたわれるもの 199ver.
manufacturer: SANKYO
releaseDate: 2025-04-07
modelType: P機 / ライトミドル / LT搭載
gameType: 一種二種混合 / ショートST / 下位RUSH→LT昇格型
jackpotProbability: 通常時 約1/199.9。右打ち中 約1/14.3（特図2、大当りと小当りの合算）。
initialPayout: 初当りは2R約300個（払出）。
rushEntryRate: 約50%。
rushContinuationRate: 通常RUSH「仮面RUSH」は時短15回+残保留4個、TOTAL約75%。内訳注記は時短15回約66%+残保留4個約25%の合算。
ltName: 仮面RUSH超
ltEntryRoute: 通常時初当りの約50%で「仮面RUSH」へ突入し、仮面RUSH中の図柄揃い大当りの約20%でLT「仮面RUSH超」へ昇格。残保留当選時は仮面RUSH側の振り分けとなる資料注記あり。
ltEntryRate: 仮面RUSH中大当りの約20%。通常初当り基準の総LT到達率は直接公表値を今回確認できないため推測せずUNVERIFIED。
ltContinuationRate: 約75%。LTでも時短15回+残保留4個で、継続率自体は通常仮面RUSHと同じ。
ltPayoutStructure: 仮面RUSH超中の特図2大当りは約50%が10R×2+α＝約3000個+1500個上乗せループ（次回大当り濃厚）、約50%が10R約1500個。3000個は1500個×2。出玉は払出。
totalPayoutDistribution: 特図1: 2R約300個+仮面RUSH 約50% / 2R約300個+通常 約50%。仮面RUSH中特図2: 10R約1500個+仮面RUSH超 約20% / 10R約1500個+仮面RUSH 約80%。仮面RUSH超中特図2: 10R×2+α 約3000個+上乗せループ 約50% / 10R約1500個 約50%。
timeShortening: 通常終了時0回。仮面RUSH/仮面RUSH超は時短15回+残保留4個。上乗せループ当選時は実質次回大当り濃厚区間を伴う。
cTimeOrSpecialSystems: 特段のc時短依存構造は今回確認した公開スペックではなし。LT中の「3000個+上乗せループ」は約50%で次回大当り濃厚となり、その次回大当りでも約50%の上乗せループ抽選が有効。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時 約1/199.9
   ↓ 初当り 2R約300個
   ├─ 約50% → 仮面RUSH (15回+残保留4、TOTAL約75%)
   │            ↓ 図柄揃い 約1/14.3
   │            ├─ 約20% → LT「仮面RUSH超」
   │            │            ├─ 約50% → 約3000個+1500個上乗せループ / 次回大当り濃厚
   │            │            └─ 約50% → 約1500個
   │            │            ※LT継続率は約75%
   │            └─ 約80% → 約1500個+仮面RUSH継続
   └─ 約50% → 通常時
notes: |
  型式名は「PフィーバーうたわれるものZ」。同日導入のスマパチ「eフィーバーうたわれるもの」とはゲーム構造が異なるため別レコード。
  本機はLTで継続率を上げるタイプではなく、通常RUSH/ LTともTOTAL約75%。LT発動後に出玉振り分けが強化され、大当り約50%が3000個+1500個上乗せループとなる出玉強化型。
  「約75%」は時短15回約66%と残保留4個約25%を合わせたTOTAL値で、単純加算ではない。
  残保留当選時は仮面RUSHの振り分けになる解析注記があるため、LT中残保留の扱いを通常のLT振り分けと混同しない。
sources:
  - https://www.sankyo-fever.jp/collection/979/ — SANKYO公式博物館。型式PフィーバーうたわれるものZ、1/199.9、一種二種混合、RUSH約50%、15回+残4、約75%、RUSH中図柄揃い約20%でLT、LT中約50%が3000個+上乗せループ、払出注記。取得 2026-09-21。
  - https://hisshobon.com/machineinfo/96838/ — 必勝本。通常1/199.9、右1/14.3、RUSH約50%、15+4、約75%、LT突入=RUSH中当り約20%、遊タイム非搭載。取得 2026-09-21。
  - https://hisshobon.com/machineinfo/96839/ — 必勝本。特図1/特図2の詳細振り分け、LT中50%の10R+α/次回大当り濃厚構造。取得 2026-09-21。
  - https://1geki.jp/pachinko/p_utawarerumono199/39/ — 一撃。2025-04-07導入、ライトミドル/LT/一種二種混合、通常1/199.9、右1/14.3、RUSH約50%、約75%、払出/実獲得の定義。取得 2026-09-21。
  - https://1geki.jp/pachinko/p_utawarerumono199/52/ — 一撃。LT「仮面RUSH超」、下位RUSH中大当り20%で発動、15+4、約75%、LT中50%が3000個+上乗せループ。取得 2026-09-21。
  - https://chonborista.com/pachinko/sankyo/229574/ — 解析資料。導入日、特図1/下位RUSH/LTの振り分け、残保留時の振り分け注記。取得 2026-09-21。
  - https://hazuse.com/hd/4p1607/ — 業界DB。型式PフィーバーうたわれるものZ、LT搭載、2025-04-07導入。取得 2026-09-21。
confidence: OFFICIAL + ANALYSIS_HIGH
missingFields:
  - 通常初当り基準の総LT到達率（直接公表値未確認）
conflicts: []
