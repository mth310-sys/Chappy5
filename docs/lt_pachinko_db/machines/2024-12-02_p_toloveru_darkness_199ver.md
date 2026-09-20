# P ToLOVEるダークネス 199ver.

machineName: P ToLOVEるダークネス 199ver.
manufacturer: 平和
formalModel: PToLOVEるダークネスL9YZ4
releaseDate: 2024-12-02
modelType: ライトミドル / LT
gameType: 1種2種混合。下位RUSH「楽園計画」はST66回+残保留4個、LT「超ハーレムTIME」はST100回+残保留4個。
status: COMPLETE_CORE
jackpotProbability: 通常時大当り 1/199.8。右打ち中実質 約1/48.5（大当り1/199.8と小当り1/64.1の合算）。
initialPayout: 特図1は2R 300個払出。約60%で楽園計画、約40%で通常時へ。
rushEntryRate: 約60%
rushContinuationRate: 約77%（ST66回の引き戻し約74.7% + 残保留4個の引き戻し約8.0%を含むTOTAL。特図2に限る）。
ltName: 超ハーレムTIME
ltEntryRoute: 楽園計画中の10R大当り時約1%で直行、または10R「超ハーレムBONUS」を2回連続獲得。10R獲得後の楽園計画では次回大当りが10RならLTへ。ST最終変動+残保留での10Rは1回目として扱う。
ltEntryRate: 経路別の直接値のみ確認。10R大当り時の約1%直行、または10R 2回連続。通常初当り基準の総LT到達率は直接公表値を確認できず、推算しない。
ltContinuationRate: 約89%（ST100回の引き戻し約87.5% + 残保留4個の引き戻し約8.0%を含むTOTAL。特図2に限る）。
ltPayoutStructure: 超ハーレムTIME中は10R 1500個払出 約50% / 4R 600個払出 約50%。ST最終変動+残保留の振り分けは楽園計画時と同様で、10Rは1回目扱い。
totalPayoutDistribution: 特図1 2R 300個+楽園計画 約60% / 2R 300個+通常 約40%。楽園計画中（2R/4R後またはST最終変動+残保留）は10R 1500個+超ハーレムTIME 約1% / 10R 1500個+楽園計画 約49% / 4R 600個+楽園計画 約50%。楽園計画中10R後は10R 1500個+超ハーレムTIME 約50% / 4R 600個+楽園計画 約50%。すべて払出表記。
timeShortening: 楽園計画 ST66回+残保留4個。超ハーレムTIME ST100回+残保留4個。
cTimeOrSpecialSystems: コンプリート機能搭載。CタイムによるLT経路は確認なし。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時 1/199.8
   ├─ 約60% → 2R 300個 → 楽園計画（ST66回+残4、TOTAL約77%）
   │    ├─ 4R 600個 → 楽園計画継続
   │    ├─ 10R 1500個（通常の10R時約1%）→ 超ハーレムTIME(LT)
   │    └─ 10R 1500個 → 楽園計画継続
   │          └─ 次回大当りが10R → 超ハーレムTIME(LT)
   └─ 約40% → 2R 300個 → 通常時
  超ハーレムTIME(LT): ST100回+残4、TOTAL継続約89%
   ├─ 10R 1500個 約50%
   └─ 4R 600個 約50%
  ※ST最終変動+残保留の10Rは超ハーレムBONUS1回目扱い。
notes: |
  2024年6月の319.6版とは別スペック。199ver.はLT搭載を業界記事・P-WORLD・解析資料で直接確認。
  型式名PToLOVEるダークネスL9YZ4、導入2024-12-02。
  右打ち約1/48.5は大当り1/199.8と小当り1/64.1の合算であり、単独大当り確率として扱わない。
  出玉300/600/1500個は払出。実獲得目安（例: 1500→約1400）は別定義のためDBの払出値へ混在させない。
  LTの通常初当り基準総到達率は、経路別数値から計算可能でも直接資料値が未確認のため推測・独自算出で固定しない。
sources:
  - url: https://news.p-world.co.jp/articles/29035/amusement
    type: INDUSTRY
    retrievedAt: 2026-09-21
    use: 平和発表、導入日、LT搭載、1/199.8、約1/48.5、RUSH60%、77%/89%、LT経路、払出600/1500
  - url: https://yugi-nippon.com/pachinko-new-machine/post-67084/
    type: INDUSTRY
    retrievedAt: 2026-09-21
    use: 型式名、LT搭載別スペック、基本スペック
  - url: https://www.p-world.co.jp/machine/database/10130
    type: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    use: 確率定義、ST/残保留、RUSH/LT継続、払出、ゲームフロー
  - url: https://hisshobon.com/machineinfo/94646/
    type: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    use: LT正式名称、発動契機、終了条件、ST最終変動+残保留の扱い
  - url: https://p.hisshobon.jp/machine/4410/1/105434
    type: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    use: 特図1/特図2の状態別大当り振り分け
  - url: https://nana-press.com/kaiseki/machine/852/24548/
    type: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    use: 大当り/小当り確率分離、払出、ST、遊タイム非搭載
confidence: INDUSTRY / ANALYSIS_HIGH cross-checked
missingFields:
  - 通常初当り基準の総LT到達率（直接公表値未確認。経路別数値のみ保存）
conflicts: []
retrievedAt: 2026-09-21
