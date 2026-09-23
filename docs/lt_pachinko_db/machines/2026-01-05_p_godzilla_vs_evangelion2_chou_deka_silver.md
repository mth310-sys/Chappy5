# P ゴジラ対エヴァンゲリオン2 超デカシルバー

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: P ゴジラ対エヴァンゲリオン2 超デカシルバー
manufacturer: ビスティ
formalModel: Pゴジラ対エヴァンゲリオン2LV
releaseDate: 2026-01-05
modelType: ライトミドル / P機 / 超デカヘソ
gameType: 一種二種混合 / 転落型 / 直LT
jackpotProbability:
- 通常時図柄揃い: 約1/174.9
- LT中図柄揃い: 約1/15.1
- 転落小当り: 約1/94.7
initialPayout:
- 10R 約1000個 + LT: 0.5%
- 3R 約300個 + LT: 24.5%
- 3R 約300個 + 通常: 75.0%
rushEntryRate:
- 約25%
- RUSH = LTの直LTタイプ
rushContinuationRate:
- 非LT下位RUSHなし
ltName: シン・バトルモード暴走
ltEntryRoute:
- 初当りの約25%から直接突入（全回転/奇数図柄揃い/偶数図柄揃い時のチャレンジ成功等）
ltEntryRate:
- 初当り時 約25%
ltContinuationRate:
- TOTAL約90%
- 時短10000回（転落小当り当選で終了）+残保留4個の引き戻し約24.0%を含む、特図2に限る
ltPayoutStructure:
- LT中大当り: 約400個 75%
- 約800個+α + G覚醒モード: 合計25%
- G覚醒内訳（解析値）: 800個+α・上乗せ80%ループ 1% / 66%ループ 5% / 50%ループ 9% / 40%ループ 10%
- 800個 = 400個×2。G覚醒では400個の上乗せが各継続率でループし、終了後LTへ復帰
totalPayoutDistribution:
- 特図1: 1000個+LT 0.5% / 300個+LT 24.5% / 300個+通常 75.0%
- 特図2: 800個+α/G覚醒 合計25% / 400個 75%。いずれもLT継続側
- 基本払出: 10R約1000個 / 4R約400個 / 3R約300個
timeShortening:
- シン・バトルモード暴走: 時短10000回、転落小当りで終了 + 残保留4個
cTimeOrSpecialSystems:
- 超デカヘソ搭載
- G覚醒モード: LT中大当りの25%で入る400個上乗せループ状態。40%/50%/66%/80%ループの振り分けがあり、終了後LTへ復帰
- 残保留4個引き戻し率約24.0%を含めてLT TOTAL継続約90%
ceilingOrSupport: 遊タイムの搭載根拠なし

gameFlow: |
  通常時（図柄揃い約1/174.9）
   ↓ 初当り
  0.5% → 1000個 → シン・バトルモード暴走（LT）
  24.5% → 300個 → シン・バトルモード暴走（LT）
  75.0% → 300個 → 通常時
   ↓
  LT（大当り約1/15.1 vs 転落約1/94.7、時短10000回+残4、TOTAL約90%）
   ↓ 大当り
  75% → 400個 → LT継続
  25% → 800個+α → G覚醒モード → 400個上乗せループ → LT復帰
   ↓ 転落
  残保留4個（引き戻し約24.0%）
   ↓ 非当選
  通常時
notes:
- RUSH=LTであり、非LT下位RUSHは存在しない。
- 遊技通信が型式 `Pゴジラ対エヴァンゲリオン2LV`、ビスティ製、約1/174.9→約1/15.1、RUSH約25%/約90%、LT正式名称、G覚醒を明示。
- 約90%は転落型本体と残保留4個引き戻し約24.0%を合わせたTOTAL。単純なST継続率として扱わない。
- 800個は400個×2。G覚醒の+αも上乗せループであり単一大当り出玉と混同しない。
- 同日導入のスマパチ `e ゴジラ対エヴァンゲリオン2 超デカゴールド` と別スペック。
sources:
- https://news.p-world.co.jp/articles/32625/yugitsushin — 遊技通信。型式、製造、通常/右確率、RUSH25%/90%、LT名称、G覚醒。取得2026-09-23
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/bisty_pachi/157/kh01.php — パチマガスロマガ。型式、2026-01-05導入、直LT、基本構造。取得2026-09-23
- https://www.p-world.co.jp/machine/database/10412 — P-WORLD/HAZUSE情報。通常/右/転落確率、LT25%/90%、10000回+残4、払出、G覚醒。取得2026-09-23
- https://1geki.jp/pachinko/p_godzilleva2lv/51/ — 一撃。LT正式名称、転落構造、残保留約24%、LT約90%、右25%で800個+上乗せ。取得2026-09-23
- https://chonborista.com/pachinko/bisty/250561/ — 解析資料。特図1 0.5/24.5/75.0%、特図2 G覚醒25%の40/50/66/80%ループ詳細。取得2026-09-23
- https://p-kn.com/pachinko/4442/ — K-Navi。型式、導入日、LT搭載、主要確率/継続。取得2026-09-23
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: none
conflicts: none
