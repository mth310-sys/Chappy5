# P 宇宙戦艦ヤマト2202 超波動 森雪 199LT ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: P 宇宙戦艦ヤマト2202 超波動 森雪 199LT ver.
manufacturer: ビスティ（フィールズ発表）
modelCode: P宇宙戦艦ヤマト2202-3MF
releaseDate: 2025-05-07
modelType: ライトミドル / LT
gameType: ST / 直LT型

jackpotProbability:
- 通常時図柄揃い: 約1/199.9
- 右打ち中: 約1/93.9（大当り + 時短図柄の合算値）

initialPayout:
- 特図1 10R 約1500個（払出）100%

rushEntryRate:
- 真波動RUSH: 約25%（初当り時。RUSH突入時点でLT）

rushContinuationRate:
- 下位RUSHなし。真波動RUSHがLT状態。

ltName: 真波動RUSH

ltEntryRoute:
- 通常時図柄揃い後の10R「チャレンジBONUS」で演出成功 → 真波動RUSH。
- 特図1振り分けは10R約1500個 + 真波動RUSH 約25% / 10R約1500個 + 通常 約75%。
- RUSHは直LT仕様で、下位RUSHを経由しない。

ltEntryRate:
- 図柄揃い初当り時: 約25%（業界資料・P-WORLD・解析資料で一致）

ltContinuationRate:
- 約80%（コスモリバースによるST回数リセットを含む）

ltPayoutStructure:
- 特図2 10R×2 約3000個 + LT継続: 約35%
- 特図2 10R 約1500個 + LT継続: 約40%
- 特図2 2R 約300個 + LT継続: 約12%
- ST回数リセット（コスモリバース）+ LT継続: 約13%
- 3000個 = 1500個×2、払出表記。

totalPayoutDistribution:
- 特図1: 10R約1500個 + 真波動RUSH 約25% / 10R約1500個 + 通常 約75%
- 特図2: 3000個 約35% / 1500個 約40% / 300個 約12% / ST回数リセット 約13%

timeShortening:
- 真波動RUSH: ST148回転（144回転 + リザルト消化4回）
- RUSH中は序盤44回、中盤90回、最終10回 + リザルト4回の構成。

cTimeOrSpecialSystems:
- コスモリバース: [1・4・4]停止等で発動するST回数リセット。真波動RUSH継続率約80%はこのリセットを含む。
- コスモリバース時にクラッシュ発生で3000個BONUS濃厚とされる。

ceilingOrSupport:
- 今回確認した主要資料で遊タイム等の記載なし。

gameFlow:
通常時（図柄揃い 約1/199.9）
 ↓ 10R 約1500個
├─ 約25% → 真波動RUSH（LT）
│             ↓ ST148回 / 右約1/93.9
│             ├─ 3000個 約35% → LT継続
│             ├─ 1500個 約40% → LT継続
│             ├─ 300個 約12% → LT継続
│             └─ STリセット 約13% → LT継続
└─ 約75% → 通常

notes:
- 2024年10月導入のミドル版「P宇宙戦艦ヤマト2202 超波動」とは別スペック。
- 本機は「RUSHは直LT仕様」と業界資料が明記。通常RUSHとLTを別状態として作らない。
- 継続率約80%は純粋なST当選率だけではなく、コスモリバース（ST回数リセット）を含む公表値。
- P-WORLDは右打ち約1/93.9を「大当り+時短図柄の合算値」と注記。資料により小当り合算との表現もあるため、定義注記を保持する。
- 出玉は払出。3000個は1500個×2（特図2に限る）。

sources:
- https://news.p-world.co.jp/articles/30770/yugitsushin
- https://www.p-world.co.jp/machine/database/10263
- https://1geki.jp/pachinko/p_yamato2202_ch199lt/51/
- https://hazuse.com/machine/pachinko/PX0284/genre/101/
- https://hazuse.com/machine/pachinko/PX0284/genre/103/
- https://p-kn.com/pachinko/4330/
- https://chonborista.com/pachinko/bisty/235355/

confidence:
- INDUSTRY + ANALYSIS_HIGH

missingFields:
- none for required core fields

conflicts:
- none. Right-hit mechanism wording differs by source (大当り+時短図柄 / 大当り+小当り), so wording is preserved rather than averaged.
