# Pルパン三世 ONE COLLECTION 100ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: Pルパン三世 ONE COLLECTION 100ver.
manufacturer: アムテックス / 平和
modelCode: Pルパン三世14L0YU1
releaseDate: 2025-09-22
modelType: 甘デジ / LT3.0プラス

gameType: 1種2種混合 / 普図ST
jackpotProbability:
- 通常時: 約1/100.1
- GOLDEN TIME 65 / 105中: 約1/66.7

initialPayout:
- 10R 約1000個 + GOLDEN TIME 105(LT): 0.5%
- 4R 約400個 + GOLDEN TIME 65: 49.5%
- 4R 約400個 + 通常: 50.0%

rushEntryRate: TOTAL 50%
rushName: GOLDEN TIME 65
rushContinuationRate: 約63%
timeShortening:
- GOLDEN TIME 65: 65回
- GOLDEN TIME 105: 105回

ltName: GOLDEN TIME 105
ltEntryRoute:
- 通常初当りの7図柄揃い / 10R約1000個から直行 0.5%
- GOLDEN TIME 65中の1800個大当りから移行 13.2%
ltEntryRate:
- 通常初当り時LT直行: 約0.5%
- GOLDEN TIME 65中大当り時LT移行: 約13.2%
- 通常遊技全体基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH（直接公表値未確認。経路確率から独自合算しない）
ltContinuationRate: 約80%

ltPayoutStructure:
- 平均約3100個 + GOLDEN TIME 105継続: 約60%
- 約200個 + GOLDEN TIME 105継続: 約40%
- 平均3100個は一連の大当り（2R/9R/10R×複数回）の合計払い出しで、単一大当り出玉ではない

totalPayoutDistribution:
- 通常時: 約1000個+LT 0.5% / 約400個+GT65 49.5% / 約400個+通常 50.0%
- GOLDEN TIME 65中: 約1800個+LT 13.2% / 約1000個+GT65 46.3% / 約200個+GT65 40.5%
- GOLDEN TIME 105中: 平均約3100個+LT継続 約60% / 約200個+LT継続 約40%

cTimeOrSpecialSystems:
- LT3.0プラス対応
- 普図抽選STのため残保留なし。GOLDEN TIME 105を105回スルーすると通常へ移行
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時 約1/100.1
   ├─ 0.5%: 10R約1000個 → LT「GOLDEN TIME 105」105回
   ├─ 49.5%: 4R約400個 → 「GOLDEN TIME 65」65回
   │    ├─ 大当り13.2%: 約1800個 → LT「GOLDEN TIME 105」
   │    └─ その他大当り: GT65継続
   └─ 50.0%: 4R約400個 → 通常
  LT「GOLDEN TIME 105」: 約1/66.7を105回、継続約80%。大当り後はLT継続、105回スルーで通常。

notes:
- 型式・導入日は1geki/HAZUSE/業界検定資料/G-netで照合。
- 右打ち確率、50%突入、GT65約63%、LT約80%、0.5%直行、下位大当り13.2%LT移行は複数資料一致。
- 「平均3100個」は期待・一連払出の表記であり、単一ラウンド大当りの払い出しと混同しない。
- メーカー表記は販売/ブランド上は平和、型式メーカーはアムテックスとして資料に差があるため併記。

sources:
- https://web-greenbelt.jp/post-99713/ — 業界記事。導入日、通常1/100.1、RUSH50%、LT直行0.5%、下位13.2%、LT約80%、平均3100個を確認
- https://news.p-world.co.jp/articles/31179/greenbelt — 型式Pルパン三世14L0YU1の検定通過を確認
- https://www.p-world.co.jp/machine/database/10317 — 基本スペック、GT65/105、出玉定義、ゲームフローを確認
- https://hazuse.com/machine/pachinko/5P0282/ — 型式、検定番号、導入日、LT搭載、基本継続率を確認
- https://1geki.jp/pachinko/p_lupin_oc_100lt/ — 型式、導入日、確率、ST回数を確認
- https://hisshobon.com/machineinfo/98512/ — LT名称、下位/上位ST、発動経路を確認
- https://p.hisshobon.jp/machine/4577/1/110609 — LT発動契機、0.5%直行、105回スルー終了/残保留なしを確認
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/067/kh02.php — 詳細スペック、0.5%/13.2%、払出定義を確認
- https://g-net-ps.com/info/p0460/ — 開店日2025-09-22、型式、基本スペックを確認
- https://p-johojima.jp/colum/post-15224/ — 2025-09-22導入境界の独立カレンダー/記事確認

confidence:
- coreSpec: INDUSTRY / ANALYSIS_HIGH
- ltStructure: INDUSTRY / ANALYSIS_HIGH
- releaseDate: INDUSTRY
- totalLtArrivalRate: UNVERIFIED
missingFields:
- 通常遊技全体基準の総LT到達率（直接公表値）
conflicts: []
