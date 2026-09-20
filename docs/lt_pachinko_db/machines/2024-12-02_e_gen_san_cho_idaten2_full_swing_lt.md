# e大工の源さん超韋駄天2 フルスイングLT

machineName: e大工の源さん超韋駄天2 フルスイングLT
manufacturer: 三洋物産
formalModel: e大工の源さん超韋駄天2EHLD
releaseDate: 2024-12-02
modelType: スマパチ / ライトミドル / LT
status: COMPLETE_CORE
gameType: 1種2種混合。下位RUSHなし。RUSH突入=ラッキートリガー「極源RUSH」。
jackpotProbability: 通常時大当り合算 約1/199.8。内訳は図柄揃い 約1/487.3、チャージ 約1/338.6。RUSH中実質 約1/2.7（大当り約1/199.8 + 小当り約1/2.79の合算）。
initialPayout: 図柄揃いは10R 1500個払出。通常チャージは3R 450個払出。チャージの一部は10Rへ昇格してLTへ。
rushEntryRate: 約52.2%（図柄揃い時52%と10Rチャージからの合算）。本機ではRUSH=LT。
rushContinuationRate: 約96%。時短6回の継続約93% + 残保留1個の継続約36%を合わせたTOTAL。
ltName: 極源RUSH
ltEntryRoute: 7図柄揃い/ロングフリーズ、図柄揃い10R中の極源チャレンジ成功、チャージ中フリーズによる10R昇格。RUSH突入時は100%LT発動。
ltEntryRate: 初当り合算基準 約52.2%。図柄揃い/チャージを含む初当り後のRUSH突入率として複数資料一致。
ltContinuationRate: 約96%
ltPayoutStructure: 特図2は6R 900個 20% / 2R 300個 80%、いずれも極源RUSH継続。払出表記。必勝本では純増目安を900個→約840個、300個→約280個とも掲載。
totalPayoutDistribution: ヘソ初当り全体の詳細振り分けとして10R 1500個+LT 51.7%、チャージ→10R 1500個+LT 0.5%、10R 1500個+通常 47.8%が解析資料で一致。通常チャージ3R 450個は大当り合算のチャージ側通常パターンとして別定義のため混同しない。
timeShortening: LT中 時短6回 + 残保留1個。非突入時は時短なし。
cTimeOrSpecialSystems: コンプリート機能。CタイムによるLT経路は確認なし。
ceilingOrSupport: 遊タイムなし。
gameFlow: |
  通常時
   ├─ 図柄揃い 約1/487.3 → 10R 1500個
   │    ├─ 7図柄/ロングフリーズ or 極源チャレンジ成功 → 極源RUSH(LT)
   │    └─ 非成功 → 通常時
   └─ チャージ 約1/338.6
        ├─ 通常チャージ 3R 450個 → 通常時
        └─ フリーズ・10R昇格 → 極源RUSH(LT)
  極源RUSH: 実質約1/2.7、時短6回+残保留1個、TOTAL継続約96%
   └─ 大当り: 6R 900個 20% / 2R 300個 80% → 極源RUSH継続
notes: |
  RUSH突入=LTという極振り構造。メーカー公式PVは「RUSH突入で必ずラッキートリガー発動」「すべてのRUSHが継続期待値約96%」と明示。
  Greenbeltの発表記事は三洋販売/三洋物産の発表を受け、12/2導入、RUSH突入時100%LT、約1/2.7、6回+残1、約96%、300/900個、期待出玉約10,910個を掲載。
  P-WORLD/HAZUSE、K-Navi、必勝本、遊技日本、解析サイトで確率・突入率・振り分けを横断照合。
  「図柄揃い時ALL1500」と「通常時大当り合算約1/199.8」は同じ分母ではない。チャージ3Rを図柄揃い初当りの出玉に混ぜない。
  初当り合算基準のLT突入率約52.2%は直接資料表記があるため推算値ではない。
sources:
  - url: https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20241004.pdf
    type: OFFICIAL
    retrievedAt: 2026-09-21
    use: 正式機種名、型式名、メーカー、トップ導入日
  - url: https://www.youtube.com/watch?v=9IUsqjjTgiw
    type: OFFICIAL
    retrievedAt: 2026-09-21
    use: RUSH突入=100%LT、極源RUSH約96%
  - url: https://news.p-world.co.jp/articles/29111/greenbelt
    type: INDUSTRY
    retrievedAt: 2026-09-21
    use: 発表、導入日、LT構造、約1/2.7、6回+残1、約96%、出玉、期待出玉
  - url: https://yugi-nippon.com/pachinko-new-machine/post-67223/
    type: INDUSTRY
    retrievedAt: 2026-09-21
    use: 型式、基本確率、RUSH突入率、RUSH=LT
  - url: https://www.p-world.co.jp/machine/database/10139
    type: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    use: 確率定義、52.2%、96%、時短、出玉、ゲームフロー
  - url: https://hisshobon.com/machineinfo/94465/
    type: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    use: 初当り/特図2振り分け、払出/純増定義
  - url: https://p-kn.com/pachinko/4228/
    type: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    use: 型式、導入日、確率、RUSH、時短
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH cross-checked
missingFields: []
conflicts: []
retrievedAt: 2026-09-21
