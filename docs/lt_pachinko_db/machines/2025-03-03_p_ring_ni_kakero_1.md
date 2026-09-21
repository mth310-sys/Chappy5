# Pリングにかけろ1

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pリングにかけろ1
formalModel: Pリングにかけろ1L-5S
manufacturer: ニューギン
releaseDate: 2025-03-03
modelType: ミドル相当 / LT搭載
gameType: 1種2種混合 / ST型 / c時短を含むリンかけCHANCE

jackpotProbability:
- 通常時図柄揃い: 約1/319.8
- 菊チャージ: 約1/325.8
- 通常時合算: 約1/161.4
- K.O.RUSH中: 約1/161.4
- 超K.O.RUSH中: 約1/94.7
- リンかけCHANCE中: 約1/23.5

initialPayout:
- 図柄揃い: 10R 約1500個（払出）
- 菊チャージ: 5R 約750個（払出）

rushEntryRate: 約60%（菊チャージからのLT昇格約0.1%を含む）
rushContinuationRate: K.O.RUSH TOTAL約57%（ST99回の約45.9% + リンかけCHANCE5回の引き戻し約19.5%を合わせた値）

ltName: 超K.O.RUSH
ltEntryRoute:
- 通常時: 菊チャージ当選から約0.1%でLT直行
- K.O.RUSH: ST99回中に大当りを1回引けばLTへ（特図2大当り時10R+LT約67%、ST回数リセット約33%）
- K.O.RUSH終了後のリンかけCHANCE: 大当りすればLTへ
- 超K.O.RUSH終了後のリンかけCHANCE: 大当りすればLTへ復帰
ltEntryRate: 通常初当り基準の総LT到達率は直接公表値を確認できずUNVERIFIED。経路値から独自算出しない。
ltContinuationRate: 超K.O.RUSH TOTAL約80%（ST129回の約74.5% + リンかけCHANCE5回の引き戻し約19.5%を合わせた値）

ltPayoutStructure:
- 超K.O.RUSH中: 10R×2 約3000個 + LT 約60%
- 10R 約1500個 + LT 約10%
- 4R 約600個 + LT 約10%
- ST回数リセット 約20%
- すべて払出表記。3000個=1500個×2回。

totalPayoutDistribution:
- 通常時図柄揃い: 10R約1500個。約60%でK.O.RUSH、約40%通常へ（解析資料の詳細値は菊チャージLT直行込みで59.9%/0.1%/40.0%表記あり）
- 菊チャージ: 約750個。LT昇格約0.1%あり
- K.O.RUSH中: 10R約1500個+LT 約67% / ST回数リセット 約33%
- LT中: 3000個60% / 1500個10% / 600個10% / ST回数リセット20%

timeShortening:
- K.O.RUSH: ST99回 + ラスト1回転/残保留4個のリンかけCHANCE
- 超K.O.RUSH: ST129回 + ラスト1回転/残保留4個のリンかけCHANCE
- 電サポ表記は資料により100/130回+残保留4個（最終変動を含む）

cTimeOrSpecialSystems:
- リンかけCHANCEはRUSH最終変動+残保留4個の計5回。大当り確率約1/23.5、成功期待度約19.5%。c時短を含む抽選として解析資料に記載。
- 菊チャージ約1/325.8。通常時図柄揃い約1/319.8との合算約1/161.4。

ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時
   ├─ 図柄揃い 約1/319.8 → 10R約1500個
   │   ├─ 約60% → K.O.RUSH（ST99回）
   │   │    ├─ 大当り → 超K.O.RUSH（LT）
   │   │    ├─ ST回数リセット → K.O.RUSH継続
   │   │    └─ ST消化 → リンかけCHANCE5回 → 大当りならLT
   │   └─ 約40% → 通常へ
   └─ 菊チャージ 約1/325.8 → 約750個
       └─ 約0.1%で超K.O.RUSH（LT）へ昇格
  超K.O.RUSH（ST129回）
   ├─ 大当り/回数リセット → LT継続
   └─ ST消化 → リンかけCHANCE5回 → 大当りならLT復帰 / 非当選で終了

notes:
- 2026年1月導入の「Pリングにかけろ1 129ver.」とは別スペック。混同禁止。
- 約57%/約80%はいずれもST区間単体ではなくリンかけCHANCEの引き戻しを含むTOTAL値。
- 「RUSH突入約60%」は菊チャージからのLT直行約0.1%を含む表記。
- 通常初当り基準の総LT到達率は推測で作らない。

sources:
- https://news.p-world.co.jp/articles/30236/yugitsushin — 遊技通信/P-WORLD業界ニュース。型式、確率、RUSH/LT、リンかけCHANCE、導入時期。取得日2026-09-21。
- https://news.p-world.co.jp/articles/30251/amusement — アミューズメントジャパン/P-WORLD。3/3全国導入、LT経路、3000個比率。取得日2026-09-21。
- https://hisshobon.com/machineinfo/96440/ — パチ&スロ必勝本。詳細確率、ST回数、出玉、遊タイム。取得日2026-09-21。
- https://nana-press.com/kaiseki/machine/940/28251/ — なな徹。K.O.RUSH/LT経路と区間定義。取得日2026-09-21。
- https://nana-press.com/kaiseki/machine/940/27917/ — なな徹。詳細スペック/振り分け。取得日2026-09-21。
- https://pachimaga.com/free/article/20250302/056165.php — パチマガスロマガFREE。詳細スペック、LT契機、時短表記。取得日2026-09-21。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/498/kh02.php — パチマガスロマガ詳細。確率、連チャン性能。取得日2026-09-21。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率（直接公表値未確認）
conflicts: []
