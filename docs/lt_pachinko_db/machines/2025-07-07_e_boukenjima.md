# e冒険島

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e冒険島
modelName: e冒険島EHLC2
manufacturer: 三洋物産
releaseDate: 2025-07-07
modelType: スマパチ / ライトミドル / LT3.0 PLUS
gameType: 一種二種混合 / 直LT / 2回転落システム

jackpotProbability:
- 通常時大当り: 約1/155.2
- 暴険RUSH中大当り: 約1/59.9
- 暴険RUSH中転落図柄: 約1/63.7

initialPayout:
- 特図1 5R: 約300個（払い出し）
- 特図1 10R×2: 約3000個（約1500個×2、払い出し）

rushEntryRate:
- 下位RUSH非搭載。
- LT「暴険RUSH」突入率: 25.9%

rushContinuationRate:
- 通常RUSH/下位RUSHは存在しない。

ltName: 暴険RUSH

ltEntryRoute:
- 特図1大当りの25.9%でLT「暴険RUSH」へ直接突入。
- 内訳は約3000個（約1500個×2）+ LT 0.1%、約300個 + LT 25.8%。残り74.1%は約300個で通常へ。
- メーカー公式プレスリリースは「チャージや下位RUSHは非搭載」「LT突入率約1/599」と明示。

ltEntryRate:
- 初当り時LT突入率: 25.9%
- 通常回転を分母としたLT突入確率: 約1/599（メーカー公式公表値）

ltContinuationRate:
- 約77%（詳細表記約76.5%）
- 時短10000回。約1/63.7の転落図柄に大当り間で2回当選すると終了。大当りで転落ストック2個へ回復して再スタート。

ltPayoutStructure:
- 特図2: 約3000個（約1500個×2）+ 欲望ループ 40% / 約1500個 60%。いずれも暴険RUSH継続。
- 欲望ループは約1500個上乗せを40%でループ。
- 解析資料の欲望ループ込み出玉分布: 約3000個 60.0% / 約4500個 24.0% / 約6000個 9.6% / 約7500個+α 6.4%。いずれも払い出しベース。

totalPayoutDistribution:
- 特図1: 約3000個 + LT 0.1% / 約300個 + LT 25.8% / 約300個 + 通常 74.1%
- 特図2: 約3000個 + 欲望ループ + LT継続 40% / 約1500個 + LT継続 60%

timeShortening:
- 通常時大当り後: 0回またはLT。
- 暴険RUSH: 時短10000回（転落図柄約1/63.7に2回当選で終了するため実質次回までの転落型）。

cTimeOrSpecialSystems:
- LT3.0 PLUS。
- 業界初をうたう2回転落システム。大当り間で転落図柄を1回引いても継続し、2回目で終了。大当り時は転落ストックが2個へ回復。
- 欲望ループ: 特図2の40%で約3000個獲得後、約1500個上乗せを40%で継続抽選。

ceilingOrSupport:
- 遊タイム非搭載

gameFlow: |
  通常時 約1/155.2
   ├─ 0.1% → 約3000個（約1500個×2）→ LT「暴険RUSH」
   ├─ 25.8% → 約300個 → LT「暴険RUSH」
   └─ 74.1% → 約300個 → 通常時
  LT「暴険RUSH」
   ├─ 大当り 約1/59.9 / 転落図柄 約1/63.7 / 継続約77%
   ├─ 大当り → 転落ストック2個へ回復してRUSH再スタート
   │    ├─ 40% → 約3000個 + 欲望ループ（約1500個上乗せ40%ループ）
   │    └─ 60% → 約1500個
   └─ 大当り間に転落図柄2回成立 → 通常時

notes:
- RUSH突入=LT発動の直LT型で、下位RUSHは存在しない。
- メーカー公式プレスリリースがLT突入率約1/599を直接公表しているため、25.9%と1/155.2から独自算出した値ではない。
- 継続率「約77%」と詳細値「約76.5%」は丸め差として扱いCONFLICTにしない。
- 3000個は約1500個×2の合計払い出し。単一10R大当りの出玉として扱わない。
- 欲望ループの上乗せは約1500個を40%で継続するため、「3000個+α」の期待値と単発払出を混同しない。

sources:
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20250425.pdf — 三洋販売/三洋物産公式プレスリリース（2025-04-25）。型式e冒険島EHLC2、トップ導入2025-07-07、LT3.0 PLUS、通常約1/155、RUSH突入25.9%、チャージ/下位RUSH非搭載、LT約1/599、暴険RUSH約77%、右打ち1500個60%/3000個+欲望ループ40%を確認。
- https://www.sanyobussan.co.jp/products/pk_boukenjima/ — SANYOメーカー公式機種ページ。e冒険島の公式製品ページを確認。
- https://www.p-world.co.jp/machine/database/10276 — P-WORLD。通常約1/155.2、RUSH約1/59.9、突入25.9%、転落約1/63.7、継続約77%（詳細約76.5%）、特図1/2振り分け、2回転落構造、払い出し定義を照合。
- https://nana-press.com/kaiseki/machine/985/29607/ — なな徹。型式構造、一種二種混合、各確率、特図1/2振り分け、欲望ループ込み出玉分布、遊タイム非搭載を照合。
- https://1geki.jp/pachinko/e_boukenjima/51/ — 一撃。暴険RUSH時短10000回、約1/59.9、転落約1/63.7、2回転落、約77%、3000個+α構造を照合。

confidence:
- overall: OFFICIAL + ANALYSIS_HIGH
- releaseDate/modelName/LT搭載: OFFICIAL
- LT突入率/約1/599/下位RUSH非搭載: OFFICIAL
- probabilities/distributions: OFFICIAL + ANALYSIS_HIGH（複数一致）
- detailed 0.1%/25.8%/74.1% and 40%/60% distributions: ANALYSIS_HIGH（複数一致）

missingFields: []

conflicts: []
