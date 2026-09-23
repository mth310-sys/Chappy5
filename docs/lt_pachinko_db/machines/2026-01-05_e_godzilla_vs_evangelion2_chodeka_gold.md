# e ゴジラ対エヴァンゲリオン2 超デカゴールド

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e ゴジラ対エヴァンゲリオン2 超デカゴールド
manufacturer: ビスティ（フィールズ発表）
formalModelName: eゴジラ対エヴァンゲリオン2TR
certificationNumber: 510468
releaseDate: 2026-01-05
modelType: スマパチ / ミドル / デカヘソ / LT搭載
gameType: 一種二種混合 / 転落タイプ / RUSH=LT直行型
jackpotProbability: 通常時図柄揃い 約1/299.9 / 右打ち中図柄揃い 約1/32.3
initialPayout: 特図1 1500個+LT 約0.5% / 300個+LT 約29.5% / 300個+通常 約70%（払出）
rushEntryRate: 約30%。本機は初当りから下位RUSHを経由せずLT「シン・バトルモード暴走」へ直接突入するため、RUSH突入率=LT突入率として公表。
rushContinuationRate: 非LT下位RUSHなし
ltName: シン・バトルモード暴走
ltEntryRoute: 通常時図柄揃い後、約30%で直接LT。奇数図柄揃いはLT直行、偶数図柄揃いはチャレンジ成功でLT。特図1振り分けでは1500個+LT約0.5%、300個+LT約29.5%。
ltEntryRate: 約30%（初当り時。通常図柄揃い約1/299.9を分母とする公表割合）
ltContinuationRate: 約80% TOTAL。時短10000回を転落小当り約1/107当選まで継続し、転落後の残保留4個引き戻し約11.8%を含む。右打ち図柄揃い約1/32.3。
ltPayoutStructure: 特図2は3000個+α+G覚醒モード（上乗せループ）約5% / 3000個+G覚醒モード約25% / 1500個+シン・バトルモード暴走約70%。3000個=1500個×2回。G覚醒モードは3000個を起点に1500個上乗せが約50%でループし、終了後はLTへ復帰。
totalPayoutDistribution: 特図1 1500個+LT約0.5% / 300個+LT約29.5% / 300個通常約70%。特図2は上記LT振り分け。出玉は払出表記。
timeShortening: LT中 時短10000回（転落小当り当選で終了）+転落後残保留4個。通常落選時は時短なし。
cTimeOrSpecialSystems: 転落小当り 約1/107。G覚醒モードは一部3000個から入る出玉上乗せ状態で、1500個上乗せ約50%ループ。LTとは別の上乗せ特化状態として区別。
ceilingOrSupport: 遊タイム非搭載（解析資料）。
gameFlow: |
  通常時（図柄揃い 約1/299.9）
   ↓ 初当り
  ├─ 約70%：300個 → 通常時
  └─ 約30%：1500個約0.5% / 300個約29.5% → LT「シン・バトルモード暴走」
       ↓ 図柄揃い約1/32.3 vs 転落小当り約1/107
       ├─ 1500個 約70% → LT継続
       ├─ 3000個 約25% → G覚醒モード → LT復帰
       └─ 3000個+α 約5% → G覚醒モード（1500個上乗せ約50%ループ）→ LT復帰
       ↓ 転落
     残保留4個（引き戻し約11.8%）
       ├─ 引き戻し → LT
       └─ 非当選 → 通常時
notes: |
  シリーズ初のデカヘソ搭載。非LT下位RUSHは存在せず、RUSH=LTの直行型。
  「約80%」は転落前の図柄揃いだけの継続値ではなく、時短10000回（転落まで）と転落後残保留4個の引き戻し約11.8%を含むTOTAL値。
  3000個は単一大当り出玉ではなく1500個×2回。G覚醒モードの3000個+αも複数回/上乗せを含むため単発出玉と混同しない。
  同日導入のP機「ゴジラ対エヴァンゲリオン2 超デカシルバー」（型式Pゴジラ対エヴァンゲリオン2LV）とは別スペック。
sources:
  - url: https://news.p-world.co.jp/articles/32624/yugitsushin
    title: 遊技通信 / シリーズ初のデカヘソ！エヴァが挑む新領域！「e ゴジラ対エヴァンゲリオン2 超デカゴールド」
    retrievedAt: 2026-09-23
    confidence: INDUSTRY
    supports: 型式、メーカー、通常/右確率、RUSH突入/継続、LT名称、G覚醒、3000個定義、残保留
  - url: https://hazuse.com/hd/510468h/
    title: HAZUSE / e ゴジラ対エヴァンゲリオン2 超デカゴールド
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: 検定番号、型式、LT搭載、導入日、メーカー、通常確率
  - url: https://p-johojima.jp/machine_spec/post-22273/
    title: パチンコ・パチスロ情報島＋ / e ゴジラ対エヴァンゲリオン2 超デカゴールド
    retrievedAt: 2026-09-23
    confidence: INDUSTRY
    supports: 特図1/特図2振り分け、転落確率、G覚醒、出玉
  - url: https://www.p-world.co.jp/machine/database/10411
    title: P-WORLD / e ゴジラ対エヴァンゲリオン2 超デカゴールド
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: LT名称、突入率、継続率、残保留、3000個定義
  - url: https://1geki.jp/pachinko/e_godzilleva2tr/
    title: 一撃 / ゴジエヴァ2 超デカゴールド
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: 導入日、型式、確率、転落確率、時短、払出/実獲得
  - url: https://nana-press.com/kaiseki/machine/1086/33990/
    title: なな徹 / ゴジラ対エヴァンゲリオン2 超デカ GOLD299 スペック
    retrievedAt: 2026-09-23
    confidence: ANALYSIS_HIGH
    supports: 一種二種混合、確率、転落、RUSH、ラウンド/払出、遊タイム非搭載
confidence: INDUSTRY
missingFields: []
conflicts: []
