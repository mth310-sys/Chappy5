# P FAIRY TAIL これが七炎竜の力だ 89ver.

machineName: P FAIRY TAIL これが七炎竜の力だ 89ver.
formalModel: P FAIRY TAIL 89Ver．FWZ
manufacturer: 藤商事
releaseDate: 2025-03-03
modelType: 甘デジ / LT
status: COMPLETE_CORE
gameType: 2種 / ST型RUSH / LT上位ST

jackpotProbability:
- 通常時: 約1/89（特図1小当りからのV当り確率、V入賞条件）
- 右打ち中: 約1/59（特図2小当りからのV当り確率）
- 別解析の詳細表記: 1/89.8 → 1/59.4

initialPayout:
- 3R 約210個（払出設計値）
- FAIRY RUSH: 50%
- 通常: 50%

rushEntryRate: 約50%
rushContinuationRate: FAIRY RUSH 約60%（ST50回の約57.2% + 残保留4個の引き戻し約6.6%を合算した公表値）

ltName: 七炎竜RUSH
ltEntryRoute:
- FAIRY RUSH中の大当り約12.5%で「一夜モード」へ突入しLT発動。
- 一夜モードは実質次回大当りまで。約40%で約1500個の上乗せがループし、終了後に七炎竜RUSHへ移行。
ltEntryRate:
- FAIRY RUSH中大当り基準: 約12.5%
- 通常初当り基準の総LT到達率: UNVERIFIED（直接公表値を確認できないため経路値から独自合算しない）
ltContinuationRate: 七炎竜RUSH 約88%（ST120回の約87.0% + 残保留4個の引き戻し約6.6%を合算した公表値）

ltPayoutStructure:
- 七炎竜RUSH中: 約1500個+α / 一夜モード 約40%
- 七炎竜RUSH中: 約210個 / 七炎竜RUSH継続 約60%
- 一夜モード: 約40%で約1500個を上乗せし続ける。特図2大当り2回分以上の合計は約1500個+α表記。

totalPayoutDistribution:
- 特図1: 3R約210個 + FAIRY RUSH 50% / 3R約210個 + 通常 50%
- FAIRY RUSH中: 10R約1500個 + 一夜モード→LT 12.5% / 10R約1500個 + FAIRY RUSH 27.5% / 3R約210個 + FAIRY RUSH 60%
- 七炎竜RUSH中: 10R約1500個 + 一夜モード 40% / 3R約210個 + 七炎竜RUSH 60%

timeShortening:
- FAIRY RUSH: ST50回 + 残保留4個
- 七炎竜RUSH: ST120回 + 残保留4個
- 一夜モード: 実質次回まで（解析資料では時短10000回+保留表記あり）

cTimeOrSpecialSystems: 一夜モード（LT発動契機兼上乗せループ。約40%で1500個上乗せ継続）
ceilingOrSupport: UNVERIFIED / 本収集でLT到達に関係する遊タイム等の直接根拠なし

gameFlow: |
  通常時 約1/89
   ↓ 初当り
  50% → FAIRY RUSH（ST50+残4、約60%）
  50% → 通常
   ↓ FAIRY RUSH中大当りの12.5%
  一夜モード（LT発動、実質次回、約40%で1500個上乗せループ）
   ↓ 一夜モード終了
  七炎竜RUSH（ST120+残4、約88%）
   ↓ 大当り40%で一夜モード / 60%で3R+LT継続

notes:
- 2024-04-22導入のミドル版「P FAIRY TAIL これが七炎竜の力だ」とは別スペック・別レコード。
- 約1/89・約1/59は小当りからのV当り確率であり、V入賞が条件。
- 出玉は払出設計値。約1500個+αは特図2大当り2回分以上の合計値。
- 「上位突入率12.5%」はFAIRY RUSH中の大当り振り分け。通常初当りを分母にした総LT到達率として扱わない。

sources:
- https://hazuse.com/machine/pachinko/PX0269/ — 基本スペック、型式、導入日、RUSH/LT継続率、ゲームフロー（取得日 2026-09-21）
- https://1geki.jp/pachinko/p_fairytail_lt89/ — 基本スペック、型式、導入日（取得日 2026-09-21）
- https://1geki.jp/pachinko/p_fairytail_lt89/51/ — FAIRY RUSH、LT突入契機12.5%（取得日 2026-09-21）
- https://p.hisshobon.jp/machine/4466/1/107224 — 導入日、ST構造、12.5%、一夜モード、七炎竜RUSH（取得日 2026-09-21）
- https://www.pachibee.jp/machines/index/125020005 — 基本スペック、電サポ、払出定義（取得日 2026-09-21）
- https://www.pachirinko.com/2025.kishu/hane.fairy.t.html — 詳細確率・振り分けクロスチェック（取得日 2026-09-21）

confidence: ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH
conflicts: []
retrievedAt: 2026-09-21
