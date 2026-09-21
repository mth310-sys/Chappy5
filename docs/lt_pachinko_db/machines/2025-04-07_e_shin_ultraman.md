# e シン・ウルトラマン

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e シン・ウルトラマン
manufacturer: オッケー.（京楽産業.製）
formalModelName: eシン・ウルトラマンK3
releaseDate: 2025-04-07
modelType: スマパチ / ライトミドル / LT搭載
gameType: 一種二種混合 / 1回転RUSH

jackpotProbability:
- 通常時: 約1/199.9
- ウルトラバトルモード中: 1/2
- LT「ゼットン3000ATTACK」中: 約1/1.34

initialPayout:
- 通常初当り: 2R 約300個（払出）

rushEntryRate:
- ウルトラバトルモード: 50%

rushContinuationRate:
- ウルトラバトルモード: 50%（時短1回）

ltName: ゼットン3000ATTACK
ltEntryRoute:
- 通常初当り → 50%でウルトラバトルモード（時短1回） → 1/2の大当り → 大当りの約85%でLT「ゼットン3000ATTACK」。
ltEntryRate:
- ウルトラバトルモード中大当り時: 約85%
- 通常初当り基準の総LT到達率: UNVERIFIED（経路値から独自算出しない）
ltContinuationRate:
- 約75%（時短1回、約1/1.34）
ltPayoutStructure:
- 右打ち大当り: ALL約3000個（約1500個×2、特図2、払出）
totalPayoutDistribution:
- 通常時: 約300個 + ウルトラバトルモード 50% / 約300個 + 通常 50%
- ウルトラバトルモード大当り: 約3000個。うち約85%でLT突入、残りは下位側。
- LT中大当り: 約3000個 100%
timeShortening:
- ウルトラバトルモード: 時短1回
- ゼットン3000ATTACK: 時短1回
cTimeOrSpecialSystems:
- P-スキップ搭載（通常時ハズレ変動の演出スキップ機能）。LT到達条件そのものではない。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時 約1/199.9
   ↓ 2R約300個
   ├─ 50% → 通常時
   └─ 50% → ウルトラバトルモード（時短1回 / 1/2 / 継続50%）
               ↓ 大当り 約3000個
               ├─ 約15% → 下位側
               └─ 約85% → LT「ゼットン3000ATTACK」
                            時短1回 / 約1/1.34 / 継続約75%
                            ↓ 大当り時 ALL約3000個 → LT継続
                            ↓ 非当選 → 通常時

notes:
- 2026年の「e シン・ウルトラマン 79ver.」は別スペックであり混同しない。
- 約3000個は約1500個×2回の払出。
- LT突入率約85%は「ウルトラバトルモード中の大当り時」を分母とする。

sources:
- https://news.p-world.co.jp/articles/30261/yugitsushin — 遊技通信/P-WORLD。型式、メーカー、約1/199.9→約1/2、RUSH50%/50%、LT突入約85%/継続約75%、ALL3000、導入日。取得日 2026-09-21。
- https://hisshobon.com/machineinfo/96856/ — 必勝本。詳細確率、時短1回、2R300/10R1500、遊タイム非搭載。取得日 2026-09-21。
- https://hisshobon.com/machineinfo/96858/ — 必勝本。LT発動契機、終了後通常。取得日 2026-09-21。
- https://www.p-world.co.jp/machine/database/10231 — P-WORLD。基本スペック、ゲームフロー、3000個=1500個×2。取得日 2026-09-21。
- https://1geki.jp/pachinko/e_shin_ultraman/39/ — 一撃。確率、RUSH/LT率、払出/実獲得の定義。取得日 2026-09-21。

confidence:
- formalModelName: INDUSTRY
- coreSpec: INDUSTRY + ANALYSIS_HIGH
- ltStructure: INDUSTRY + ANALYSIS_HIGH
- overall: INDUSTRY

missingFields:
- 通常初当り基準の総LT到達率の直接公表値

conflicts: none
