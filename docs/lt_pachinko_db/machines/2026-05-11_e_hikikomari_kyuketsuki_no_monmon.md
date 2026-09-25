# eひきこまり吸血姫の悶々

machineName: eひきこまり吸血姫の悶々
manufacturer: 藤商事
formalModelName: eひきこまり吸血姫の悶々FHV
inspectionNumber: 511107
releaseDate: 2026-05-11
modelType: スマパチ / ライトミドル / ラッキートリガー搭載
gameType: 二種 / c時短CZ経由 / LT ST

jackpotProbability:
- 通常時の大当り確率: 1/348
- 烈核解放CZ確率: 約1/129（c時短当選からのCZ突入と大当りからのCZ突入の合算）
- 烈核解放CZ中当選確率: 1/25.4
- 右打ち中: 約1/99（電チューロング開放確率）

initialPayout:
- 烈核解放CZ成功時: 1800個 or 1500個

rushEntryRate:
- 烈核解放CZ成功時の超孤紅の恤RUSH突入: 約51.0%
- 内訳: 1800個+RUSH 約7.3% / 1500個+RUSH 約43.7% / 1500個+通常 約49.0%

rushContinuationRate:
- 通常RUSHは独立して存在しない。RUSH=LT。

ltName: 超孤紅の恤RUSH
ltEntryRoute:
- 通常時 → 烈核解放CZ（10回） → 大当り → 約51%で超孤紅の恤RUSH
ltEntryRate:
- CZ成功時 約51%
- 通常時初当り基準の総LT到達率は直接公表値を確認できないため推測しない
ltContinuationRate:
- 約77%（ST144回）
ltPayoutStructure:
- RUSH中大当り: 孤紅の恤BONUS 約50% / 吸血姫BONUS1500個 約50%
- 孤紅の恤BONUS: 6000個+1G連 約12.5% / 4500個 約37.5% / 3000個 約37.5% / 1500個 約12.5%
- 6000/4500/3000個はそれぞれ特図2大当り4/3/2回分の合計払出
totalPayoutDistribution:
- CZ成功時: 1800個+LT 約7.3% / 1500個+LT 約43.7% / 1500個+通常 約49.0%
- LT中: 1500個単発系約50% / 孤紅の恤BONUS約50%
timeShortening:
- 烈核解放CZ: 10回
- 超孤紅の恤RUSH: ST144回
cTimeOrSpecialSystems:
- c時短を利用した烈核解放CZ。CZ約1/129はc時短由来と大当り由来の合算。
ceilingOrSupport:
- 遊タイムは確認できず。推測登録しない。

gameFlow: |
  通常時
   ↓ 約1/129（c時短当選＋大当り由来の合算）
  烈核解放CZ 10回（成功期待度約33%、当選1/25.4）
   ↓ 大当り
  ├─ 約49% 1500個 → 通常
  └─ 約51% 1800個/1500個 → LT「超孤紅の恤RUSH」
       ↓ ST144回・継続約77%
       ├─ 約50% 吸血姫BONUS 1500個
       └─ 約50% 孤紅の恤BONUS
            └─ 1500/3000/4500/6000個（6000個は1G連）

notes:
- CZ約1/129を通常時大当り確率と混同しない。大当り確率は1/348。
- 1800個は特図1大当り1回＋特図2大当り1回の合算。
- 孤紅の恤BONUSの平均獲得は業界資料で約4300個とされる。
- 通常RUSHを挟まないため、LT RUSHが本機のRUSH本体。
- 同名シリーズ別スペックとの混同なし。

sources:
- https://news.p-world.co.jp/articles/33226/greenbelt
  - type: INDUSTRY
  - retrievedAt: 2026-09-26
- https://1geki.jp/pachinko/e_hikikomari/
  - type: ANALYSIS_HIGH
  - retrievedAt: 2026-09-26
- https://www.pachibee.jp/machines/about/126040003
  - type: ANALYSIS_HIGH
  - retrievedAt: 2026-09-26
- https://p-kn.com/pachinko/4493/
  - type: ANALYSIS_HIGH
  - retrievedAt: 2026-09-26

confidence: ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: []
conflicts: []
