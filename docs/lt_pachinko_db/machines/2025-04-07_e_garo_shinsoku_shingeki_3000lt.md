# e牙狼神速神撃3000LT

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e牙狼神速神撃3000LT
manufacturer: サンセイアールアンドディ (Sansei R&D)
formalModelName: e牙狼神速神撃3000LT-RB
releaseDate: 2025-04-07
modelType: スマパチ / ライトミドル / LT搭載
gameType: 一種二種混合 / 普図抽選型 / 右打ち1回転決着

jackpotProbability:
- 通常時: 1/199.5
- LTチャレンジ中実質: 1/3.226
- LT中実質: 1/1.316

initialPayout:
- 通常時初当り: 3R 約450個（払出）100%

rushEntryRate:
- 通常RUSHに相当する継続RUSHは存在しない。
- 初当りの70%でLTチャレンジへ、30%は通常時へ。

rushContinuationRate: N/A（LT前は時短1回のLTチャレンジであり、通常継続RUSHではない）

ltName: 神速神撃3000LT

ltEntryRoute:
- 通常時初当り → 70%でLTチャレンジ（時短1回） → 1/3.226を1回転で当選（成功率約31%） → 約3000個（10R+10R）獲得 → 神速神撃3000LT発動。
- 初当り残り30%は約450個獲得後に通常時へ。

ltEntryRate:
- LTチャレンジ突入率: 70%
- LTチャレンジ成功率: 約31%
- 通常初当り基準の総LT到達率: UNVERIFIED。70%×約31%から独自合算せず、直接公表値が確認できるまで保存しない。

ltContinuationRate:
- 神速神撃3000LT: 約76%
- LT中は時短1回、実質大当り確率1/1.316。

ltPayoutStructure:
- 右打ち中大当り: 約3000個 100%（10R約1500個×2、払出）
- LT継続時もALL約3000個。

totalPayoutDistribution:
- 通常時: 3R約450個 + LTチャレンジ 70% / 3R約450個 + 通常 30%
- LTチャレンジ・LT中の右打ち当選: 10R+10R 約3000個 + LT 100%

timeShortening:
- LTチャレンジ: 時短1回
- 神速神撃3000LT: 時短1回

cTimeOrSpecialSystems: なし（確認資料範囲）
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（1/199.5）
   ↓ 初当り 3R約450個
   ├─ 30% → 通常時へ
   └─ 70% → LTチャレンジ（時短1回、実質1/3.226、成功約31%）
               ↓ 成功
             約3000個（10R+10R）
               ↓
             LT「神速神撃3000LT」
             時短1回 / 実質1/1.316 / 継続約76%
               ↓ 当選時
             約3000個 100% → LT継続
               ↓ 非当選
             終了

notes:
- 牙狼シリーズ初のLT搭載機。
- 「LTチャレンジ」はLT前の1回転チャレンジで、通常RUSHとは区別する。
- 約3000個は10R+10Rの合算払出。単一10Rの出玉と混同しない。
- LT中の約76%は1/1.316を時短1回で引く継続率。
- 通常初当り基準の総LT到達率は、経路値から計算可能でも直接公表値として確認できないため推測登録しない。

sources:
- https://news.p-world.co.jp/articles/30318/yugitsushin — 遊技通信/P-WORLD業界ニュース。型式名、1/199.5、LTチャレンジ1/3.226、LT 1/1.316、70%、約31%、約76%、ALL3000、導入日。取得日 2026-09-21。
- https://news.p-world.co.jp/articles/30371/amusement — Amusement Japan/P-WORLD。初当り70%→LTチャレンジ→成功で3000個後LT、LT名、約76%、導入日。取得日 2026-09-21。
- https://news.p-world.co.jp/articles/30297/greenbelt — グリーンべると/P-WORLD。通常時70/30、右打ち3000個100%、LTチャレンジ約31%、LT約76%。取得日 2026-09-21。
- https://hisshobon.com/machineinfo/96783/ — パチ&スロ必勝本。詳細確率、時短1回、3R450/10R1500、遊タイム非搭載。取得日 2026-09-21。
- https://nana-press.com/kaiseki/machine/924/28390/ — なな徹。振り分け、3000個=10R+10R、電サポ1回、遊タイム非搭載。取得日 2026-09-21。

confidence:
- formalModelName: INDUSTRY
- releaseDate: INDUSTRY
- coreSpec: INDUSTRY + ANALYSIS_HIGH
- ltStructure: INDUSTRY + ANALYSIS_HIGH
- payoutDistribution: INDUSTRY + ANALYSIS_HIGH
- overall: INDUSTRY

missingFields:
- 通常初当り基準の総LT到達率の直接公表値

conflicts: none
