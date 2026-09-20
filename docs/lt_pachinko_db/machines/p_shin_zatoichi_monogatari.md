# P真・座頭市物語

収集日: 2026-09-20
status: COMPLETE_CORE

machineName: P真・座頭市物語
manufacturer: ニューギン
releaseDate: 2024-03-04
modelType: ミドル（図柄揃い 約1/319、2Rを含む大当り 1/207.39）
gameType: 1種2種混合 / ST型RUSH / LT搭載
jackpotProbability:
- 図柄揃い（2R除外）: 約1/319
- 2Rを含む大当り: 1/207.39
- 右打ち中: 1/90.90
initialPayout:
- 図柄揃い: 7R約1050個または10R×2回約3000個（払出）
- 2R: 約300個（払出）
rushEntryRate: 図柄揃い時 約60%（10R×2回10% + 7R50%）
rushContinuationRate:
- 竜騰虎闘モード: 約75%（ST120回+残保留4個）
ltName: 神速一閃モード
ltEntryRoute:
- 竜騰虎闘モード中の大当りの7%でLT発動
- 10R+10Rの後半当り時も竜騰虎闘モード側の振り分けを受け、7%でLT発動
ltEntryRate:
- 竜騰虎闘モード中大当り時: 7%
- 初当り全体からの最終LT到達率はRUSH内反復を含むため未統合
ltContinuationRate: 約87%（ST178回+残保留4個）
ltPayoutStructure:
- 神速一閃モード中の大当り: 10R約1500個 100%（払出）
- LT中大当り後は神速一閃モード継続。ただし残保留での大当りは竜騰虎闘モード側の振り分けとなる解析資料あり。
totalPayoutDistribution:
- 特図1図柄揃い: 10R+10R約3000個+竜騰虎闘モード 10% / 7R約1050個+竜騰虎闘モード 50% / 7R約1050個+通常 40%
- 竜騰虎闘モード中: 10R約1500個+神速一閃モード 7% / 10R+10R約3000個+竜騰虎闘モード 10% / 10R約1500個+竜騰虎闘モード 83%
- 神速一閃モード中: 10R約1500個 100%
timeShortening:
- 竜騰虎闘モード: ST120回+残保留4個
- 神速一閃モード: ST178回+残保留4個
- 10R+10Rの一部区間: 実質次回大当り濃厚の「慶祝の儀」あり
cTimeOrSpecialSystems: コンプリート機能搭載
ceilingOrSupport: 遊タイム非搭載

gameFlow:
```
通常時（図柄揃い約1/319、2R込み1/207.39）
 ↓ 図柄揃い
├─ 40% → 7R約1050個 → 通常時
└─ 60% → 竜騰虎闘モード（ST120回+残保留4個 / 継続約75%）
             ↓ 大当り
             ├─ 93% → 竜騰虎闘モード継続（うち10%は10R+10R）
             └─ 7% → LT発動
                      ↓
                 神速一閃モード
                 ST178回+残保留4個
                 継続 約87%
                 大当り ALL約1500個
```

notes:
- ニューギングループのLT搭載第1弾。
- 「図柄揃い約1/319」と「2Rを含む大当り1/207.39」は定義が異なるため併記。
- 出玉は払出表記。解析資料では10R約1500個の実獲得目安約1400個、7R約1050個の実獲得目安約980個、2R約300個の実獲得目安約280個と区別されている。
- 2025年の別スペック「P真・座頭市物語 LT99ver.」とは混同しない。

sources:
- https://news.p-world.co.jp/articles/26695/nippon — 遊技日本/P-WORLD業界ニュース（ニューギン発表内容、取得 2026-09-20）
- https://news.p-world.co.jp/articles/26912/nippon — 遊技日本/P-WORLD業界ニュース（基本スペック、取得 2026-09-20）
- https://www.amusement-japan.co.jp/article/detail/10004088/ — Amusement Japan（ニューギングループ発表、取得 2026-09-20）
- https://www.p-world.co.jp/machine/database/10006 — P-WORLD（取得 2026-09-20）
- https://p.hisshobon.jp/machine/4267/1/100872 — パチ＆スロ必勝本 大当り振り分け（取得 2026-09-20）
- https://hisshobon.com/machineinfo/91285/ — パチ＆スロ必勝本 基本スペック（取得 2026-09-20）
- https://1geki.jp/pachinko/p_shinzatouichi/1/ — 一撃（払出/実獲得区別、取得 2026-09-20）
- https://www.pachibee.jp/machines/mode/124020003 — パチビー（ゲームフロー、取得 2026-09-20）

confidence:
- LT搭載: INDUSTRY（メーカー発表を報じる複数業界資料一致）
- 基本スペック: ANALYSIS_HIGH（複数資料一致）
- 導入日: ANALYSIS_HIGH（複数資料一致）
- 詳細振り分け: ANALYSIS_HIGH（複数解析資料一致）
- 払出/実獲得区分: ANALYSIS_HIGH

missingFields:
- ニューギン公式製品ページの個別URLは今回の検索結果から確定できず。業界一次系記事でメーカー発表内容を照合済み。
- 初当り全体を分母にしたRUSH反復込みのLT最終到達率は未算出。

conflicts:
- なし。約1/319と1/207.39は競合ではなく、前者が2Rを除く図柄揃い、後者が2Rを含む大当り確率という定義差。
