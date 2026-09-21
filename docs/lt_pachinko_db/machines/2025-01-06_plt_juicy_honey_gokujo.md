# PLTジューシーハニー極嬢

retrievedAt: 2026-09-21
status: COMPLETE_CORE

machineName: PLTジューシーハニー極嬢
manufacturer: Sansei R&D（サンセイアールアンドディ）
formalModel: Pジューシーハニー極嬢 MA
releaseDate: 2025-01-06
modelType: ライトミドル / LT搭載
gameType: 一種二種混合 / ST / 普図抽選
jackpotProbability: 通常時 約1/199.8 / 右打ち中 約1/62.8
initialPayout: 7R 約700個（払出）
rushEntryRate: 61%
rushContinuationRate: 約55%（ジューシーハニーRUSH ST50回）
ltName: ジューシーハニーRUSH ラッキートリガー
ltEntryRoute: ジューシーハニーRUSH中の大当り50%で極嬢HONEY BONUS。極嬢HONEY BONUSは1000個上乗せが50%でループし、上乗せのたびにLT抽選。極嬢HONEY BONUS1回あたり約50%でLT突入。右打ち大当り振り分け上は10R+αからLT直通25%を含む。
ltEntryRate: 極嬢HONEY BONUS1回あたり約50%。通常初当り基準の総LT到達率は直接公表値を確認できずUNVERIFIED。
ltContinuationRate: 約80%（ST100回）
ltPayoutStructure: LT中の右打ち大当りは10R。50%が10R+αの極嬢HONEY BONUS、50%が10R。極嬢HONEY BONUSは最低2000個、以後50%で1000個上乗せ、平均約3000個（いずれも払出表記）。
totalPayoutDistribution: 特図1 7R約700個+ジューシーハニーRUSH 61% / 7R約700個+通常 39%。通常RUSH中: 10R+α+LT 25% / 10R+α+通常RUSH 25% / 10R+通常RUSH 50%。LT中: 10R+α 50% / 10R 50%、LT継続。
timeShortening: ジューシーハニーRUSH ST50回 / LT ST100回。ST100回消化後は通常時へ。普図抽選のため残保留なし。
cTimeOrSpecialSystems: 極嬢HONEY BONUS＝出玉上乗せループとLT抽選を兼ねる。上乗せ発生ごとにLT抽選。
ceilingOrSupport: 遊タイム搭載根拠なし。
gameFlow: |
  通常時 約1/199.8
   ↓ 初当り7R 約700個
  61% → ジューシーハニーRUSH（ST50回・約55%）
  39% → 通常時
   ↓ RUSH中 約1/62.8
  右打ち大当り
   ├ 50%: 通常10R → RUSH継続
   └ 50%: 極嬢HONEY BONUS（10R+α、平均約3000個）
             ↓ 上乗せのたびLT抽選 / BONUS1回あたり約50%
          ジューシーハニーRUSH ラッキートリガー
          （ST100回・約80%）
             ↓ STスルー
          通常時
notes: 2025-06-02導入の「PLT激デジ ジューシーハニー極嬢」(1/77.7)とは別スペック。払出と実獲得を混同しない。極嬢HONEY BONUS平均約3000個は10R大当り×平均大当り回数の払出値。

sources:
- https://news.p-world.co.jp/articles/29541/yugitsushin — 遊技通信/P-WORLD、発表・型式・1/199.8・1/62.8・RUSH61%・約55%/80%・導入日
- https://news.p-world.co.jp/articles/29526/greenbelt — グリーンべると/P-WORLD、LT・極嬢HONEY BONUS構造・導入日
- https://www.p-world.co.jp/machine/database/10173 — P-WORLD、61%/39%、ST50/100、極嬢HONEY BONUS・LT昇格率
- https://hisshobon.com/machineinfo/95893/ — 必勝本、特図1/2振り分け、10R+α、25%/25%/50%、上乗せ構造
- https://p.hisshobon.jp/machine/4461/1/107072 — 必勝本、LT名称・ST100・約80%、極嬢HONEY BONUS1回あたり約50%LT、終了条件
- https://1geki.jp/pachinko/p_ltjcyhny_gj/ — 一撃、型式・導入日・基本スペック照合

confidence: ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率: UNVERIFIED（直接公表値未確認。独自合算しない）
conflicts: none
