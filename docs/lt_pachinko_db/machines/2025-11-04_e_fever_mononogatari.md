# eフィーバーもののがたり

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: eフィーバーもののがたり
manufacturer: SANKYOブランド / ジェイビー製
formalModel: eフィーバーもののがたりF
certificationNumber: 5P0760 / 0709-156
releaseDate: 2025-11-04
modelType: ライトミドル / スマパチ / LT3.0プラス
gameType: 一種二種混合 / 直LT / 転落タイプ

jackpotProbability:
- 通常時図柄揃い: 約1/149.9
- LT中図柄揃い: 約1/41.1（特図2。普電ロング開放当選時、特図2実質1/1を経て大当り）
- LT終了契機: 普電ショート開放 約1/111

initialPayout:
- 10R+α 約1500個 → SPECIAL付喪ノ戦 + 次回大当り濃厚: 0.1%
- 2R 約300個 → SPECIAL付喪ノ戦: 25.4%
- 2R 約300個 → 通常: 74.5%
- 払い出し設計値。解析資料の実獲得目安は1500個時約1400個、300個時約280個。

rushEntryRate:
- 下位RUSHなし。LT `SPECIAL付喪ノ戦` へ直接突入。
- 初当りからLT突入: 約25.5%

rushContinuationRate: N/A（非LT下位RUSHなし）

ltName: SPECIAL付喪ノ戦
ltEntryRoute:
- 全回転経由7図柄揃い → 約1500個 → LT直行 + 次回大当り濃厚
- 奇数図柄揃い `SPECIAL付喪ノFEVER` → 約300個 → LT直行
- 偶数図柄揃い `もののノFEVER` → 約300個 → SPECIAL付喪ノ戦チャレンジ → 成功でLT
- 偶数図柄揃い後チャレンジの解析上トータル成功期待度は24.4%。これは全初当り基準LT突入率25.5%とは分母が異なるため混同しない。

ltEntryRate:
- 初当り基準: 約25.5%
- 通常遊技基準の公表LT確率: 約1/588

ltContinuationRate: 約73%

ltPayoutStructure:
- 約6000個（1500個×4）: 約25% → SPECIAL付喪ノ戦
- 約3000個（1500個×2）: 約25% → SPECIAL付喪ノ戦
- 約1500個: 約50% → SPECIAL付喪ノ戦
- 3000/6000は複数回大当りの合計払い出しで、単一10R出玉とは分離する。

totalPayoutDistribution:
- 特図1: 1500個+LT+次回濃厚 0.1% / 300個+LT 25.4% / 300個+通常 74.5%
- 特図2: 6000個 約25% / 3000個 約25% / 1500個 約50%、全てLT継続

timeShortening:
- LTは電サポ10000回相当 / 実質次回まで。ただし普電ショート開放約1/111当選で終了。

cTimeOrSpecialSystems:
- LT3.0プラス。
- 転落契機は普電ショート開放。図柄揃い側は普電ロング開放→特図2実質1/1当選を経る構造。
- 神髄JUDGE発生で3000個以上。LT中大当りの約50%が3000個または6000個。

ceilingOrSupport: 公開資料上、LT比較に必要な遊タイム等なし。

gameFlow: |
  通常時（図柄揃い約1/149.9）
   ↓ 初当り
  7図柄/全回転 0.1% → 約1500個 → SPECIAL付喪ノ戦 + 次回大当り濃厚
  奇数図柄系を含むLT直行/チャレンジ成功 → 約300個 → SPECIAL付喪ノ戦
  その他 → 約300個 → 通常へ
   ↓ LT（TOTAL約25.5%、公表約1/588）
  SPECIAL付喪ノ戦
  図柄揃い約1/41.1 vs 普電ショート開放約1/111
   ↓ 図柄揃いなら継続
  1500個 50% / 3000個 25% / 6000個 25%
   ↓ 普電ショート開放当選
  LT終了 → 通常

notes:
- RUSH=LTの直LT型で、非LT下位RUSHを持たない。
- 業界一次記事、P-WORLD、必勝本、一撃で通常確率、LT突入率、転落/継続、LT出玉構成が整合。
- 初当りの厳密振り分け0.1/25.4/74.5は必勝本で確認。一撃の通常時大当り説明でも1500個LT直行、300個LT直行、偶数300個→チャレンジの経路を照合。
- 1/588は公表値を採用し、1/149.9と25.5%から独自算出した値ではない。
- 3000/6000は1500個大当りの複数回合計。

sources:
- https://www.sankyo-fever.jp/collection/988/ — メーカー公式オンライン博物館（LT3.0+、通常約1/149.9、LT突入約25.5%、ゲーム性）
- https://news.p-world.co.jp/articles/31752/yugitsushin — 遊技通信（型式、JB製、約1/149.9→約1/41.1、LT25.5%、継続73%、転落1/111、LT出玉）
- https://www.p-world.co.jp/machine/database/10338 — P-WORLD（LT約1/588、電サポ/転落定義、出玉構造）
- https://hisshobon.com/machineinfo/98916/ — 必勝本（特図1 0.1/25.4/74.5、特図2 25/25/50）
- https://1geki.jp/pachinko/e_mononogatari/ — 一撃（導入日、型式、検定番号、基本スペック）
- https://1geki.jp/pachinko/e_mononogatari/26/ — 一撃（通常時大当り経路、チャレンジ24.4%）
- https://1geki.jp/pachinko/e_mononogatari/51/ — 一撃（LT突入経路、継続、転落定義）

confidence:
- identity/release: ANALYSIS_HIGH（複数業界・解析資料一致）
- LT/core probabilities: INDUSTRY / ANALYSIS_HIGH
- initial distribution: ANALYSIS_HIGH
- LT payout distribution: INDUSTRY / ANALYSIS_HIGH
- overall: COMPLETE_CORE

missingFields: []
conflicts: []
