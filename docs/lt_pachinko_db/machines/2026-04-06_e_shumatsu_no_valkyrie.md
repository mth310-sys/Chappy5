# e 終末のワルキューレ

status: COMPLETE_CORE
retrievedAt: 2026-09-24

machineName: e 終末のワルキューレ
formalModelName: e終末のワルキューレEREA
inspectionNumber: 511081
manufacturer: タイヨーエレック（サミー）
releaseDate: 2026-04-06
modelType: ライトミドル / スマパチ / LT3.0Plus / LT搭載
gameType: 一種二種混合 / 普図抽選 / 転落型LT
jackpotProbability: 通常時 約1/219.9 / 神VS人類最終闘争中 大当り約1/39.9・転落約1/116.8 / 神VS人類最終闘争CLIMAX中 大当り約1/19.9・転落約1/58.4
initialPayout: LT非突入時2R 300個。LT突入時はVV BONUSで3000個（1500個×2回）を獲得後、約50%ループの上乗せ（1500個 or 3000個が1:1）。いずれも払出。
rushEntryRate: 約26%（本機ではRUSH=LT）
rushContinuationRate: 約75%（本機では通常RUSHなし。LT「神VS人類最終闘争」およびCLIMAXの継続率）
ltName: 神VS人類最終闘争（ラグナロク） / 神VS人類最終闘争CLIMAX
ltEntryRoute: 通常時大当りの約26%でVV BONUSを経てLT「神VS人類最終闘争」へ直行。神VS人類最終闘争で2回大当りするとCLIMAXへ移行。1・2戦目の大当りでも約5%でVV BONUSを獲得し、VV BONUS後は1戦目の神VS人類最終闘争へ戻る。CLIMAX中の大当りはVV BONUS濃厚で、その後1戦目へ戻る。
ltEntryRate: 約26%（初当り基準。RUSH=LT）
ltContinuationRate: 神VS人類最終闘争 約75% / 神VS人類最終闘争CLIMAX 約75%
ltPayoutStructure: 神VS人類最終闘争中の大当りは1500個約95% / VV BONUS（3000個+上乗せ）約5%。CLIMAX中の大当りはVV BONUS（3000個+上乗せ）100%。VV BONUSは3000個（1500個×2回）獲得後、約50%で上乗せ継続し、上乗せ成功時は1500個 or 3000個が1:1。
totalPayoutDistribution: 通常時は約26%がVV BONUS（3000個+上乗せ）+LT、約74%が2R 300個+通常へ。神VS人類最終闘争中は1500個約95% / VV BONUS約5%。CLIMAX中はVV BONUS100%。
timeShortening: 通常初当りLT非突入は0回。LT突入時は転落当選まで。神VS人類最終闘争は大当り約1/39.9対転落約1/116.8、CLIMAXは大当り約1/19.9対転落約1/58.4。
cTimeOrSpecialSystems: c時短のLT突入経路は主要公開資料で確認なし。「神殺システム」により3戦構成で、2勝後にCLIMAX、3戦目（CLIMAX）勝利でVV BONUS。VV BONUSは3000個スタート+約50%上乗せループ。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時 約1/219.9
   ↓ 初当り
  約74%: 2R 300個 → 通常時
  約26%: VV BONUS → LT突入
           ↓
        3000個（1500個×2回）
        + 約50%上乗せループ
          （上乗せ時1500個/3000個 = 1:1）
           ↓
  神VS人類最終闘争（LT）
   大当り 約1/39.9 / 転落 約1/116.8 / 継続 約75%
   ├ 大当り: 1500個中心（約5%はVV BONUS）
   └ 転落: LT終了
           ↓ 2回大当り
  神VS人類最終闘争CLIMAX（LT）
   大当り 約1/19.9 / 転落 約1/58.4 / 継続 約75%
   ├ 大当り: VV BONUS（3000個+上乗せ）→ 1戦目へ
   └ 転落: LT終了
notes: |
  本機は下位RUSHを経由しない直LT型で、RUSH自体がラッキートリガー。必勝本は「RUSH(=LT)突入率 約26%」と明記している。
  神VS人類最終闘争とCLIMAXはどちらも継続約75%だが、CLIMAXでは大当り確率と転落確率がともに約2倍となり、変動効率が上がる。継続率自体の上位化ではなく、CLIMAX大当りがVV BONUS濃厚となる出玉性能上の強化。
  3000個は1500個×2回の合計表現であり、単一10R大当りの出玉として扱わない。
  一撃掲載のLT突入時期待出玉約12599個は「LT突入までの約3000個 + LT突入後平均約9599個」の合算期待値であり、単一大当り出玉とは分離する。
  メーカー発表を伝える遊技通信、グリーンべると、および一撃・必勝本・パチビーで通常1/219.9、突入約26%、継続約75%、VV BONUS構造が一致。主要仕様に未解決競合なし。
sources:
  - url: https://news.p-world.co.jp/articles/32766/yugitsushin
    role: INDUSTRY / メーカー発表、型式・製造、通常/右確率、突入率、継続率、VV BONUS構造、導入日
    retrievedAt: 2026-09-24
  - url: https://news.p-world.co.jp/articles/32882/greenbelt
    role: INDUSTRY / LT搭載確認、導入日、基本コンセプト
    retrievedAt: 2026-09-24
  - url: https://1geki.jp/pachinko/e_ragnarok/
    role: ANALYSIS_HIGH / 型式・検定番号、LT名称、転落確率、振り分け、期待出玉定義、ゲームフロー
    retrievedAt: 2026-09-24
  - url: https://p.hisshobon.jp/machine/4719/1/114476
    role: ANALYSIS_HIGH / RUSH=LT明記、通常/CLIMAX確率、転落、継続、VV BONUS、遊タイム非搭載
    retrievedAt: 2026-09-24
  - url: https://www.pachibee.jp/machines/index/126030002
    role: ANALYSIS_HIGH / LT搭載、出玉、時短0回/転落まで、通常/RUSH構造
    retrievedAt: 2026-09-24
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/334/kh04.php
    role: ANALYSIS_HIGH / 通常時ゲームフロー、26%直LT、VV BONUS上乗せ構造
    retrievedAt: 2026-09-24
confidence: INDUSTRY / ANALYSIS_HIGH cross-check
missingFields: []
conflicts: []
