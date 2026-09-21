# デジハネP北斗の拳 慈母

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: デジハネP北斗の拳 慈母
formalModel: Pデジハネ北斗の拳慈母SSPC
manufacturer: サミー
releaseDate: 2025-05-07
modelType: 甘デジ / デジハネ / LT搭載
gameType: ST5回 + 振り分け時短 / LT時 ST5回+時短166回

jackpotProbability:
- 通常時: 約1/79.9
- ST中: 約1/7.99

initialPayout:
- 10R: 払出約1000個（実獲得目安約900個）
- 5R: 払出約500個（実獲得目安約450個）
- 2R: 払出約140個（実獲得目安約120個）

rushEntryRate:
- ST突入率: 100%
- 通常初当り後は全てCHANCE TIME系へ移行。ただし電サポ内容は初当り振り分けで異なる。

rushContinuationRate:
- ST5回+残保留: 約51.3%
- ST5回+時短25回+残保留: 約64.4%
- ST5回+時短50回+残保留: 約74.0%
- CHANCE TIMEの代表合算継続表記: 約65%（資料上、各振り分けを含む合算定義）

ltName: HYPER BATTLE MODE
ltEntryRoute:
- CHANCE TIMEまたは残保留中の電チュー大当りで10R HYPER BATTLE BONUSを獲得。
- 10R消化中の「無想転生チャンス」成功でLT発動。
- 電チュー入賞時大当り全体では1.0%がLT付き10R。10R大当り（合計1.2%）を条件にすると約83.3%がLTとなる。分母を混同しない。

ltEntryRate:
- 電チュー入賞時大当りの1.0%
- 10R大当り時の約83.3%
- 通常初当りを分母にした総LT到達率: UNVERIFIED（直接公表値を確認できず、経路値から独自計算しない）

ltContinuationRate:
- 約94.0%（残保留込み）
- 必勝本解説では約93.7%との精密表記もあり、約94.0%の丸め値と整合。

ltPayoutStructure:
- HYPER BATTLE MODE中 特図2:
  - 10R 約1000個 + 電サポ171回: 1.2%
  - 5R 約500個 + 電サポ171回: 78.8%
  - 2R 約140個 + 電サポ171回: 20.0%
- LT中の大当りはすべてLTを継続。

totalPayoutDistribution:
- 特図1:
  - 10R 約1000個 + 電サポ55回（ST5+時短50）: 1.2%
  - 5R 約500個 + 電サポ30回（ST5+時短25）: 78.8%
  - 2R 約140個 + 電サポ5回（ST5）: 20.0%
- CHANCE TIME / 残保留中 特図2:
  - 10R 約1000個 + LT / 電サポ171回: 1.0%
  - 10R 約1000個 + 電サポ55回: 0.2%
  - 5R 約500個 + 電サポ30回: 78.8%
  - 2R 約140個 + 電サポ30回: 20.0%

timeShortening:
- 通常系: 電サポ5 / 30 / 55回（ST5回を含む。30=ST5+時短25、55=ST5+時短50）
- LT: 電サポ171回（ST5+時短166）
- LT終了後は残保留抽選。残保留大当りはCHANCE TIME中と同じ振り分け。

cTimeOrSpecialSystems:
- 無想転生チャンス: 右打ち中10RのLT昇格契機。
- Cタイム: 確認なし。

ceilingOrSupport:
- 遊タイム: 非搭載

gameFlow:
通常時 約1/79.9
 ↓ 大当り（ST突入100%）
特図1 10R 1.2% → ST5+時短50 / 5R 78.8% → ST5+時短25 / 2R 20% → ST5
 ↓ CHANCE TIME / 残保留中に大当り
特図2の1.0%（10R）→ 無想転生チャンス成功 → LT「HYPER BATTLE MODE」
その他 → CHANCE TIME継続
 ↓
HYPER BATTLE MODE = ST5+時短166（電サポ171回）+残保留、継続約94%
 ↓ LT中大当りは全てLT継続
171回スルー → 残保留抽選 → 非当選で通常時

notes:
- 2025年3月6日の業界発表ではホール導入を「3月中旬予定」としていたが、実導入開始日は複数解析資料で2025-05-07一致。DB canonical は2025-05-07とする。
- 業界一次資料は型式 `Pデジハネ北斗の拳慈母SSPC`、通常約1/79.9、ST約1/7.99、ST5回、LT ST5+時短166、継続約94%を確認。
- 「LT突入率1%」は電チュー大当り全体が分母。「10R時83.3%」は10R合計1.2%を条件とした値で競合ではない。
- 払出と実獲得目安を分離して保存。

sources:
- https://news.p-world.co.jp/articles/30366/yugitsushin — 遊技通信/P-WORLD業界ニュース。型式、確率、ST/時短、LT構造、約94%。取得日2026-09-21。
- https://hisshobon.com/machineinfo/97420/ — 必勝本 基本スペック。導入日、確率、電サポ、LT突入定義、払出。取得日2026-09-21。
- https://hisshobon.com/machineinfo/97421/ — 必勝本 大当り振り分け。特図1/特図2/LT中振り分け。取得日2026-09-21。
- https://hisshobon.com/machineinfo/97422/ — 必勝本 LT解説。無想転生チャンス、ST5+時短166、約93.7%、終了後残保留。取得日2026-09-21。
- https://1geki.jp/pachinko/p_hokutonoken_jibo/ — 一撃。確率、ST、LT約94%、払出/実獲得。取得日2026-09-21。
- https://nana-press.com/kaiseki/machine/942/28218/ — なな徹。CHANCE TIME合算約65%、各振り分け、LT中振り分け。取得日2026-09-21。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当りを分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH
conflicts: none
