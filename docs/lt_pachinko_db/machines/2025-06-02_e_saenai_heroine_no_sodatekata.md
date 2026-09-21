# e冴えない彼女の育てかた

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e冴えない彼女の育てかた
manufacturer: 大都技研
modelName: e／冴えない彼女の育てかた／LX04
releaseDate: 2025-06-02
modelType: スマパチ / ライトミドル / LT搭載

gameType: 一種二種混合機。下位RUSHは55回、LTは86回。
jackpotProbability: 通常時 1/179.6 / RUSH中 1/35.1
initialPayout: 約300個（払出）。初当り51%で冴えてる彼女RUSH、49%で通常へ。
rushEntryRate: 51%
rushContinuationRate: 約80%
ltName: 冴えてる彼女RUSH♭（資料により「冴えてる彼女ヒロインRUSH♭フラット」表記）
ltEntryRoute: 冴えてる彼女RUSH中に振り分け15%の約2400個大当り（1500個+300個×3、V入賞条件）を獲得するとLT発動。
ltEntryRate: RUSH中大当りの15%。業界記事ではRUSH突入時「約3回に1回はLT突入に期待」と表現。通常初当り全体を分母とする総LT到達率の直接公表値は確認できず、独自算出しない。
ltContinuationRate: 約92%
ltPayoutStructure: LT中は約2400個 15% / 約1200個 10% / 約600個 25% / 約300個 50%。全振り分けでLT継続。2400個は1500個+300個×3。
totalPayoutDistribution: 通常時=約300個→RUSH 51% / 約300個→通常 49%。下位RUSH中=約2400個+LT 15% / 約1200個+下位RUSH 10% / 約600個+下位RUSH 25% / 約300個+下位RUSH 50%。LT中は同じ出玉比率でLT継続。
timeShortening: 冴えてる彼女RUSH 55回 / 冴えてる彼女RUSH♭ 86回
cTimeOrSpecialSystems: 特記事項なし。コンプリート機能搭載。
ceilingOrSupport: 遊タイム非搭載。

gameFlow: |
  通常時（1/179.6）
   ↓ 初当り 約300個
  51% → 冴えてる彼女RUSH（1/35.1、55回、継続約80%）
  49% → 通常時
   ↓ RUSH中大当り15%・約2400個
  LT「冴えてる彼女RUSH♭」（1/35.1、86回、継続約92%）
   ↓
  LT中大当りは2400/1200/600/300個、全てLT継続

notes:
- 大都技研のLT第2弾として業界発表。
- LT突入時の期待獲得出玉約12,500〜12,516個という資料表現は、LT突入までの平均出玉とLT期待値の合算。単発の払出値と混同しない。
- P-WORLD等の「ヒロイン」表記と、必勝本等の「冴えてる彼女RUSH♭」表記は同一状態の表記揺れとして保持。
- 後発の「P冴えない彼女の育てかた 99ver.」とは別スペック。

sources:
- https://news.p-world.co.jp/articles/30880/yugitsushin — 業界発表。型式、大当り確率、RUSH/LT継続率、LT名称、導入時期。
- https://news.p-world.co.jp/articles/30869 — 業界記事。2025-06-02導入、LT約92%、LT期待出玉12,516個。
- https://opt.p-world.co.jp/machine/database/10280 — 基本スペック、RUSH/LT回数、15% LT経路、出玉。
- https://hisshobon.com/machineinfo/97662/ — 基本スペック、2025-06-02導入、LT搭載、55/86回、15%経路。
- https://hisshobon.com/machineinfo/97663/ — 通常/下位RUSH/LTの詳細振り分け。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/daitogiken_pachi/045/kh04.php — ゲームフロー、初当り300個、51%、55/86回、2400個LT経路。
- https://nana-press.com/kaiseki/machine/953/29735/ — 詳細スペック、振り分け、払出定義、遊タイム非搭載。
- https://hazuse.com/machine/pachinko/4P1740/ — 型式、検定番号、導入日、メーカー、継続率。
- https://1geki.jp/pachinko/e_saekano/39/ — 一種二種混合、時短/電サポ55/86回、払出と実獲得の定義差。

confidence: ANALYSIS_HIGH / INDUSTRY cross-checked
missingFields:
- 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（経路値から独自算出しない）
conflicts: none
