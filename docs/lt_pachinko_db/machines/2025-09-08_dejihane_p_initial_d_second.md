# デジハネP 頭文字D せかんど

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: デジハネP 頭文字D せかんど
formalModelName: P頭文字D 2 GCPC
manufacturer: サミー（製造: 銀座）
releaseDate: 2025-09-08
modelType: 甘デジ / P機 / LT搭載
gameType: 一種二種混合 / 下位1回転RUSH→10R契機LT / LT転落型
jackpotProbability: 通常時 約1/99（図柄揃い約1/100＋小当り約1/65536の合算） / 右打ち中 約1/1.14（小当り経由含む） / LT終了確率 約1/32.8
initialPayout: 図柄揃い時は主に2R約160個。10R約800個ならLT直行。通常時小当り時は3R約180個＋最速ダウンヒルRUSH。
rushEntryRate: TOTAL約51%（解析詳細では51.1%表記あり）。図柄揃い振り分けは10R＋LT 0.1% / 2R＋下位RUSH 51.0% / 2R通常48.9%。別途約1/65536の小当りは約180個＋下位RUSH。
rushContinuationRate: 最速ダウンヒルRUSH 約88%（1回転、右打ち約1/1.14）
ltName: 最速ダウンヒルRUSH LEGEND（業界発表では「最速ダウンヒルRUSH LEGEND97」表記もあり）
ltEntryRoute: 通常時10Rの0.1%でLT直行。主経路は下位「最速ダウンヒルRUSH」中の10R大当り（約4%）でLT発動。
ltEntryRate: 通常図柄揃い時LT直行0.1% / 最速ダウンヒルRUSH中大当りの10R約4%。通常遊技全体基準の総LT到達率は直接公表値未確認のため独自算出しない。
ltContinuationRate: 約97%。LTは100回転で、電チュー終了確率約1/32.8を引くまで右打ち約1/1.14の大当りが高頻度で継続する転落型。
ltPayoutStructure: LT中 10R約820個 4% / 5R約420個 17% / 2R約180個 79%（いずれも払い出し。LT状態は終了抽選まで継続）。
totalPayoutDistribution: |
  通常図柄揃い時: 10R約800個＋LT 0.1% / 2R約160個＋最速ダウンヒルRUSH 51.0% / 2R約160個＋通常 48.9%。
  通常時小当り約1/65536: 3R約180個＋最速ダウンヒルRUSH。
  最速ダウンヒルRUSH中: 10R約820個＋LT 4% / 5R約420個＋下位RUSH 17% / 2R約180個＋下位RUSH 79%。
  LT中: 10R約820個 4% / 5R約420個 17% / 2R約180個 79%。
timeShortening: 最速ダウンヒルRUSH 1回転 / LT 最速ダウンヒルRUSH LEGEND 100回転。
cTimeOrSpecialSystems: 通常時小当り約1/65536でCHARGEタイム（3R約180個）後に最速ダウンヒルRUSHへ突入。LTは下位RUSHと異なり約1/32.8の終了抽選を持つ転落型。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。
gameFlow: |
  通常時（約1/99）
   ↓ 図柄揃い
  0.1% → 10R約800個 → LT「最速ダウンヒルRUSH LEGEND」直行
  51.0% → 2R約160個 → 最速ダウンヒルRUSH
  48.9% → 2R約160個 → 通常時
   └ 別途 小当り約1/65536 → CHARGEタイム約180個 → 最速ダウンヒルRUSH
   ↓
  最速ダウンヒルRUSH（1回転、継続約88%）
   ↓ 大当り
  10R約820個 4% → LT発動
  5R約420個 17% / 2R約180個 79% → 下位RUSH継続
   ↓
  LT「最速ダウンヒルRUSH LEGEND」（100回転、継続約97%）
   ├ 右打ち大当り約1/1.14 → 820個4% / 420個17% / 180個79% → LT継続
   └ 終了抽選約1/32.8 → 通常時
notes: |
  2025年9月8日導入の甘デジLT版。2024年のP頭文字D 2nd等、同シリーズ別スペックと分離。
  業界一次系はRUSH突入約51%、下位約88%、LT約97%、下位RUSH中10RでLT発動と一致。
  必勝本はRUSH突入率51.1%、他資料は約51%であり丸め差として扱いCONFLICTにしない。
  右打ち中の出玉は状態・当選契機により10R約820個、5R約420個、2R約180個。通常図柄揃い10Rは約800個、2Rは約160個で定義を分離。
  出玉は払い出し値。実獲得値（例: 820→約738個等）と混同しない。

sources:
  - url: https://news.p-world.co.jp/articles/31382/yugitsushin
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: サミー発表、型式P頭文字D 2 GCPC、通常約1/99、右約1/1.14、RUSH約51%、下位約88%、LT約97%、下位10RでLT、2025-09-08導入。
  - url: https://news.p-world.co.jp/articles/31414/greenbelt
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: LT搭載、基本確率、RUSH/LT継続率、通常時振り分け0.1/51.0/48.9を照合。
  - url: https://1geki.jp/pachinko/p_initial_d_2nd_99/
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 製造GINZA、型式、導入日、1回/100回、終了約1/32.8、LT構造。
  - url: https://1geki.jp/pachinko/p_initial_d_2nd_99/39/
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 払い出し/実獲得の定義、通常時小当り約1/65536からCHARGEタイム→下位RUSH。
  - url: https://p.hisshobon.jp/machine/4581/1/110613
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: RUSH突入51.1%、下位1回約88%、LT100回約97%、各出玉とLT搭載を照合。
  - url: https://hazuse.com/machine/pachinko/4P1286/
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 確率定義、出玉、RUSH回数、CHARGEタイムを照合。

confidence: INDUSTRY
missingFields:
  - 通常遊技全体基準の総LT到達率（直接公表値未確認）
conflicts: []
