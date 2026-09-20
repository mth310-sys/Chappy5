# P世界最高の暗殺者、異世界貴族に転生する

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P世界最高の暗殺者、異世界貴族に転生する
manufacturer: JFJ（藤商事グループ）
formalModel: P世界最高の暗殺者、異世界貴族に転生するJMB
releaseDate: 2025-01-06
modelType: ミドル / LT搭載
gameType: 1種2種混合 / 普図抽選 / ST型RUSH

jackpotProbability:
- 通常時図柄揃い: 約1/319.5
- 暗殺チャージ: 約1/580.5
- 通常時大当り合算: 約1/206.0
- チャンスタイム中図柄揃い: 約1/244.5
- 暗殺RUSH / LT中図柄揃い: 約1/99.9

initialPayout:
- 通常時図柄揃い: 2R 約300個
- 暗殺チャージ: 約300個

rushEntryRate:
- 図柄揃い時の暗殺RUSH直行: 約60%
- チャンスタイム引き戻しおよびLT直行を含むTOTAL暗殺RUSH突入率: 約70%

rushContinuationRate:
- 暗殺RUSH: 約77%

ltName: 世界最高の暗殺RUSH
ltEntryRoute:
- 暗殺RUSH中に3000個大当り（10R+10R）当選 → LT
- 初当り非RUSH側のチャンスタイム70回で図柄揃い → 大当り種類を問わずLT直行
ltEntryRate:
- 通常時からの実質LT突入確率: 約1/863
- 暗殺RUSH中大当りの約25%でLT
- チャンスタイム中図柄揃い成功時は100% LT
ltContinuationRate:
- 約81%（163回、図柄揃い約1/99.9）

ltPayoutStructure:
- 3000個（10R+10R）: 25% / LT継続
- 1650個（10R+1R）: 50% / LT継続
- 300個（1R+1R）: 25% / LT継続
- 上記は払出表記。V入賞が条件となる複数大当り合算を含む。

totalPayoutDistribution:
- 通常時図柄揃い: 300個 + 暗殺RUSH145回 60% / 300個 + チャンスタイム70回 40%
- チャンスタイム中: 3000個+LT 25% / 1650個+LT 50% / 300個+LT 25%（図柄揃い時は全てLT）
- 暗殺RUSH中: 3000個+LT 25% / 1650個+暗殺RUSH 50% / 300個+暗殺RUSH 25%
- LT中: 3000個 25% / 1650個 50% / 300個 25%、全てLT継続

timeShortening:
- チャンスタイム: 70回、約1/244.5、図柄揃い期待度約25%
- 暗殺RUSH: 145回、約1/99.9、継続約77%
- 世界最高の暗殺RUSH: 163回、約1/99.9、継続約81%
- 普図抽選のため右打ちRUSHに残保留なしとの解析説明あり

cTimeOrSpecialSystems:
- 暗殺チャージ約1/580.5を図柄揃い約1/319.5と分離。合算大当り約1/206.0。
- 暗殺チャージは基本通常復帰だが、一部で暗殺RUSH昇格の解析記載あり。昇格割合は公開値未確認のため推測しない。

ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時
   ↓ 図柄揃い約1/319.5
  約60% → 暗殺RUSH（145回 / 約77%）
             ↓ RUSH大当り25%・3000個
             世界最高の暗殺RUSH（LT、163回 / 約81%）
  約40% → チャンスタイム（70回 / 引き戻し約25%）
             ↓ 図柄揃い成功
             世界最高の暗殺RUSHへ直行
  暗殺チャージ約1/580.5 → 約300個、基本通常復帰（一部RUSH昇格解析あり）

notes:
- 業界一次系で型式、LT搭載、図柄揃い/チャージ定義、RUSH/LT構造、実質LT約1/863を照合。
- 「暗殺RUSH突入率約70%」は初当り60%直行値ではなく、チャンスタイム引き戻しおよびLT直行を含むTOTAL値。定義を分離。
- LT突入時期待出玉約11762個はLT到達までの平均獲得約4936個 + LT突入後期待6826個の合算値で、単一LT連の払出ではないためコア出玉振り分けと分離。
- 3000/1650/300個は特図2大当り複数回分を合算する表記を含む。

sources:
- https://news.p-world.co.jp/articles/29455/amusement — Amusement Japan転載 / 2024-11-15、取得2026-09-21
- https://amusement-japan.co.jp/article/detail/10004619/ — Amusement Japan / 2024-11-15、取得2026-09-21
- https://news.p-world.co.jp/articles/29442/yugitsushin — 遊技通信 / 2024-11-14、取得2026-09-21
- https://www.p-world.co.jp/machine/database/10161 — P-WORLD、取得2026-09-21
- https://hisshobon.com/machineinfo/95145/ — パチ&スロ必勝本 / 2024-11-30、取得2026-09-21
- https://chonborista.com/pachinko/fujishouji/223791/ — 解析資料、取得2026-09-21
- https://p-kn.com/pachinko/4248/ — K-Navi、取得2026-09-21

confidence:
- identity / LT confirmation: INDUSTRY
- core probabilities / RUSH structure: INDUSTRY + ANALYSIS_HIGH
- payout allocations: ANALYSIS_HIGH, multiple-source structure cross-check
- LT route / rate / continuation: INDUSTRY + ANALYSIS_HIGH

missingFields:
- 暗殺チャージから暗殺RUSHへ昇格する割合: UNVERIFIED_AFTER_RESEARCH（コア必須外。公開割合を確認できず）

conflicts: none
