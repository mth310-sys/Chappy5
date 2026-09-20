# P頭文字D 2nd

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P頭文字D 2nd
manufacturer: サミー（製造元: 銀座）
formalModelName: P頭文字D2GFPG
releaseDate: 2024-06-03
modelType: ミドル
gameType: 一種二種混合 / 普図抽選 / LT / 上位RUSH転落型
jackpotProbability: 約1/319.7（通常大当り）。通常時小当りCHARGEタイム約1/546。右打ち小当り経由図柄揃い約1/1.1。
initialPayout: 特図1通常大当りは3R約360個が99.9%、10R約1200個+LT直行が0.1%。CHARGEタイムは3R約330個。
rushEntryRate: 約83% TOTAL。特図1通常大当りでは76.9%が最速ダウンヒルRUSH、23.0%が時短100回ダウンヒルRUSH、0.1%はLT直行。時短100回の引き戻し約26.9%を含む。CHARGEタイムは0.5%で最速ダウンヒルRUSH。
rushContinuationRate: 最速ダウンヒルRUSH 約90%（時短1回、右打ち小当り経由約1/1.1）。
ltName: 最速ダウンヒルRUSH LEGEND
ltEntryRoute: (1) 特図1通常大当り0.1%のSPECIAL BONUSから直行。(2) 最速ダウンヒルRUSH中の小当り経由大当りの5%（10R）でLT発動。(3) LT非直行初当りは、CHALLENGE BONUS成功または時短100回の引き戻しで下位RUSHへ入り、そこから5%契機を目指す。
ltEntryRate: RUSH突入時の約31%（公表値）。初当り0.1%直行あり。通常時全初当り基準への単純換算値は保存しない。
ltContinuationRate: 約96%（時短100回の転落型。LT中電チューRUSH終了確率約1/23.6、図柄揃い約1/1.1）。
ltPayoutStructure: LT中は特図2大当り後もLT100回へ。小当り経由は10R約1230個5%、5R約630個28%、2R約270個67%。特図2の通常大当り約1/319.7当選時は2R約240個。いずれも払出表記。
totalPayoutDistribution: 特図1: 10R約1200個+LT 0.1%、3R約360個+最速ダウンヒルRUSH 76.9%、3R約360個+時短100回 23.0%。通常時小当りCHARGEタイム: 3R約330個、0.5% RUSH / 99.5%通常。特図2小当り経由: 10R約1230個+LT 5%、5R約630個+RUSH 28%、2R約270個+RUSH 67%。
timeShortening: 最速ダウンヒルRUSH=1回、LEGEND=100回、初当り非RUSH時ダウンヒルRUSH=時短100回。時短中のダウンヒルRUSH突入当りには救済時短730回の資料記載あり。
cTimeOrSpecialSystems: 通常時約1/546のCHARGEタイム（小当り）。CHARGEタイムの0.5%で下位RUSH。
ceilingOrSupport: 遊タイムの確認なし。コンプリート機能搭載。
gameFlow: |
  通常時
   ├─ 約1/319.7大当り → 0.1%: SPECIAL BONUS → LT「最速ダウンヒルRUSH LEGEND」
   │                    → 76.9%: CHALLENGE BONUS成功扱い → 最速ダウンヒルRUSH
   │                    → 23.0%: ダウンヒルRUSH（時短100回）
   │                                      └─ 引き戻し → 最速ダウンヒルRUSH
   └─ 約1/546 CHARGEタイム → 0.5% 最速ダウンヒルRUSH / 99.5% 通常
  最速ダウンヒルRUSH（継続約90%）
   ├─ 小当り経由大当り5% → 10R → LT発動
   └─ 95% → 下位RUSH継続
  最速ダウンヒルRUSH LEGEND（LT、継続約96%）
   └─ 転落前の大当りでLT継続
notes: LT突入時期待出玉約12,979個は、初回平均約368個+LT前RUSH平均約3,532個+LT後平均約9,079個の合算として業界資料/P-WORLDが説明。払出個数と実獲得を混同しない。
sources:
  - https://news.p-world.co.jp/articles/27353/amusement
  - https://news.p-world.co.jp/articles/27396/nippon
  - https://www.p-world.co.jp/machine/database/10035
  - https://hisshobon.com/machineinfo/92001/
  - https://1geki.jp/pachinko/p_initial_d_2nd/1/
  - https://1geki.jp/pachinko/p_initial_d_2nd/51/
confidence: INDUSTRY / ANALYSIS_HIGH（主要数値は業界記事・P-WORLD・必勝本・一撃で複数照合）
missingFields: none for core mission fields
conflicts: none identified
