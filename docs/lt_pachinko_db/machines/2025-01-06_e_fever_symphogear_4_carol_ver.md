# eフィーバー戦姫絶唱シンフォギア4 キャロルver.

machineName: eフィーバー戦姫絶唱シンフォギア4 キャロルver.
manufacturer: SANKYO（製造表記: ジェイビー資料あり）
formalModel: eフィーバー戦姫絶唱シンフォギア4F
releaseDate: 2025-01-06
modelType: スマパチ / LT搭載 / 399図柄揃い帯
gameType: 1種2種混合 / 普図時短ショートST / RUSH=LT
status: COMPLETE_CORE
retrievedAt: 2026-09-21
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## Core spec
- jackpotProbability:
  - 通常時の大当り確率: 1/159.8
  - 通常時図柄揃い確率: 約1/399.7
  - 戦姫チャージ: 約1/266.3（解析資料）
  - 右打ち中図柄揃い: 約1/10.9（普図ロング開放当選後、特図2大当りまたは小当りを経て大当り。特図2に限る）
- initialPayout:
  - 図柄揃い10R: 1500個（払出）
  - 戦姫チャージ2R: 192個（払出）
- rushEntryRate: 約50%（RUSH突入=LT発動）
- rushContinuationRate: LTと同一。TOTAL約81%

## Lucky Trigger
- ltName: 絶唱RUSH
- ltEntryRoute:
  1. 図柄揃い後の最終決戦勝利（主経路）
  2. SPECIAL FEVERから絶唱RUSH突入
  3. 戦姫チャージの一部から絶唱RUSHへ昇格
- ltEntryRate:
  - 図柄揃い時: 約50%
  - 戦姫チャージからのLT発動: 約0.1%とする解析資料あり
  - 通常時全大当りを単一分母にした独自LT到達率は推測しない
- ltContinuationRate:
  - 時短15回: 約77%
  - 時短10000回: 約99.9%
  - TOTAL: 約81%
- timeShortening: 15回 or 10000回
- ceilingOrSupport: 遊タイム非搭載
- cTimeOrSpecialSystems: 戦姫チャージあり。LT中は普図時短。残保留型として扱わない。

## Payout / allocation
- totalPayoutDistribution:
  - 通常図柄揃い: 10R 1500個（払出）。約50%が絶唱RUSH、約50%が通常へ。
  - 戦姫チャージ: 2R 192個（払出）。一部で絶唱RUSHへ。
- ltPayoutStructure:
  - 電チュー入賞時の実質振り分け（必勝本）:
    - 10R×2+α / 上乗せ発生: 約5%（最低4500個以上の契機）
    - 10R×2 / 絶唱RUSH10000回: 約5%
    - 10R×2 / 絶唱RUSH15回: 約40%
    - 10R / V-STOCK即連: 約5%
    - 10R / 絶唱RUSH10000回: 約5%
    - 10R / 絶唱RUSH15回: 約40%
  - 実質50%が1500個、残り50%が3000個以上。
  - 業界資料では「1度のV入賞を契機に3000個以上の払い出しが見込める割合 約60%」との表現もある。これはV-STOCK/上乗せを含む見込み値で、上記の初期実質振り分け50%と分母・定義が異なるためCONFLICT扱いしない。
- payoutDefinition: 1500/192/3000/4500個等は払出表記。1gekiには1500個の実獲得約1400個、192個の実獲得約176個の併記があり、払出と実獲得を分離。

## Game flow
通常時
↓ 図柄揃い（1500個）または戦姫チャージ（192個）
図柄揃い → SPECIAL FEVER / 最終決戦
↓ 約50%（最終決戦勝利等）
LT「絶唱RUSH」
↓ 普図時短15回 or 10000回、右打ち約1/10.9
TOTAL継続 約81%
↓
継続時は1500個または3000個以上（V-STOCK/上乗せ契機あり）
↓ ST15回消化かつV-STOCK告知なし
通常時へ

戦姫チャージ
↓ 一部（解析資料 約0.1%）
絶唱RUSH

## QA / definition notes
- 2025-01-06のキャロルver.（型式eフィーバー戦姫絶唱シンフォギア4F）を、2025-02-03導入のPフィーバー戦姫絶唱シンフォギア4 199ver.、2025-08-04のLT-Light/Lightから分離。
- 通常時「大当り1/159.8」と「図柄揃い約1/399.7」を混同しない。1/159.8は戦姫チャージを含む大当り確率。
- RUSH突入=LT発動。下位RUSHは存在しない。
- 約81%は時短15回約77%と時短10000回約99.9%を合算したTOTAL値。
- 普図時短タイプのため、従来の残保留込みSTとして記録しない。
- 主要LT出玉振り分けは複数解析資料で照合。払出/実獲得を分離済み。

missingFields: none (core fields)
conflicts: none

## Sources
Retrieved 2026-09-21.
1. SANKYOオンライン博物館 — https://www.sankyo-fever.jp/collection/972/
2. SANKYO機種情報 — https://www.sankyo-fever.jp/products/machine_list/ppr/
3. P-WORLD / GreenBelt 導入記事 — https://news.p-world.co.jp/articles/29950/greenbelt
4. P-WORLD / Amusement Japan 発表記事 — https://news.p-world.co.jp/articles/29268/amusement
5. P-WORLD機種DB — https://opt.p-world.co.jp/machine/database/10149
6. 一撃 — https://1geki.jp/pachinko/e_sympho4/
7. パチマガスロマガFREE — https://pachimaga.com/free/article/20250103/056410.php
8. パチ＆スロ必勝本 大当り振り分け — https://p.hisshobon.jp/machine/4433/1/106125
9. パチ＆スロ必勝本 LT解説 — https://p.hisshobon.jp/machine/4433/1/106128
10. ななプレス LT概要 — https://nana-press.com/kaiseki/machine/862/26637/
11. ななプレス スペック詳細 — https://nana-press.com/kaiseki/machine/862/25088/
