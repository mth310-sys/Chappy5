# Pアズールレーン THE ANIMATION 異次元トリガー

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pアズールレーン THE ANIMATION 異次元トリガー
manufacturer: 京楽産業.（型式資料ではオッケー.製）
releaseDate: 2024-07-08
modelType: ライトミドル

gameType: 一種二種混合 / 普図時短・ST型 / LT搭載
jackpotProbability: 通常時・SS RUSHチャレンジ 約1/199、SS RUSH中 約1/82
initialPayout: 2R 約300個（払出）+ SS RUSHチャレンジ100回
rushEntryRate: SS RUSHチャレンジ100%、SS RUSH突破/突入 約40%
rushContinuationRate: SS RUSH ST130回、約80%
ltName: 覚醒BONUS（異次元トリガー）
ltEntryRoute: SS RUSH中大当りの13%で覚醒BONUSへ。覚醒BONUSは大当り5回+αの出玉塊を形成し、終了後SS RUSHへ。
ltEntryRate: SS RUSH中大当りの13%。通常初当り基準の総LT到達率は直接公表値未確認のためUNVERIFIED。
ltContinuationRate: LT自体を独立した継続RUSHとして示す公表値は確認せず。覚醒BONUS後は継続率約80%のSS RUSHへ復帰。
ltPayoutStructure: 覚醒BONUSは大当り5回+α。開始時出玉分布の解析値は約2000個0.8%、約3000個7.2%、約4000個24.0%、約5000個35.5%、約6000個19.9%、約6000個+α 12.6%。公式/業界資料では約68%が5000個以上。
totalPayoutDistribution: 通常時 2R約300個+時短100回 100%。右打ち中 8R約1200個+覚醒BONUS 13%、8R約1200個+SS RUSH 57%、2R約300個+SS RUSH 30%。
timeShortening: SS RUSHチャレンジ100回 / SS RUSH 130回
cTimeOrSpecialSystems: 普図抽選。覚醒BONUS中ブルーアウトで「蒼海乗せ」。
ceilingOrSupport: 遊タイムなし

gameFlow: |
  通常時 約1/199
   ↓ 初当り100%
  2R約300個 + SS RUSHチャレンジ100回（約1/199）
   ├─ 引き戻せず → 通常時
   └─ 約40%で突破
       ↓
  SS RUSH 130回（約1/82、継続約80%）
       ├─ 30% 2R約300個 → SS RUSH
       ├─ 57% 8R約1200個 → SS RUSH
       └─ 13% 8R約1200個 + LT「覚醒BONUS」
            ↓ 大当り5回+α
          SS RUSHへ

notes:
- メーカー公式はLTとボーナスを融合した「異次元トリガー」と表現し、覚醒BONUSの約68%が5000個以上と公表。
- 「13%」はSS RUSH中大当り時の覚醒BONUS振り分けであり、通常初当りに対するLT到達率ではない。
- 小当り時はV入賞が条件。

sources:
- https://www.kyoraku.co.jp/news/detail/754 — メーカー公式、2024-06-10。LT搭載、約1/199、ST130回/約80%、右打ち70%が1200個、覚醒BONUS、5000個以上約68%。取得 2026-09-21。
- https://news.p-world.co.jp/articles/28017/nippon — 遊技日本/P-WORLD、2024-06-11。導入日、時短100回、突破約40%、右打ち13/57/30%、覚醒BONUS大当り5回+α。取得 2026-09-21。
- https://news.p-world.co.jp/articles/28009/yugitsushin — 遊技通信/P-WORLD、2024-06-10。型式、1/199→約1/82、RUSH構造、13%覚醒BONUS、2024-07-08導入。取得 2026-09-21。
- https://nana-press.com/kaiseki/machine/771/22298/ — なな徹、右打ち振り分け・覚醒BONUS出玉分布。取得 2026-09-21。

confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率（直接公表値）: UNVERIFIED
- LT単独の継続率: 独立RUSHではないため該当する直接値を確認せず
conflicts: none
