# P花の慶次～傾奇一転

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P花の慶次～傾奇一転
manufacturer: ニューギン
releaseDate: 2024-07-08
modelType: ミドル

gameType: 1種2種混合 / 転落RUSH + LT ST
jackpotProbability: 図柄揃い 1/319.80。傾奇者図柄停止時2R通常を含む大当り確率 1/205.44。RUSH中 1/62.36。
initialPayout: 2R 約300個（払出）
rushEntryRate: 図柄揃い時 約73.5%（傾奇BURST17.6% + 戦モード55.9%）
rushContinuationRate: 戦モード約70%（転落1/131）、大戦モード約80%（転落1/223）
ltName: 傾奇BURST
ltEntryRoute: 初当り時の17.6%で直行。7図柄揃い、または7図柄以外/傾奇者チャージ中の電断演出が契機として案内される。
ltEntryRate: 初当り図柄揃い時 17.6%
ltContinuationRate: 約87%（ST120回の約85.6% + 残保留引き戻し約6.3%の合算）
ltPayoutStructure: 傾奇BURST中 10R約1500個 100% + 傾奇BURST継続
totalPayoutDistribution: 通常時 2R約300個+傾奇BURST17.6%、2R約300個+戦モード55.9%、2R約300個通常26.5%。戦/大戦モード中 10R約1500個+大戦モード100%。傾奇BURST中 10R約1500個+傾奇BURST100%。
timeShortening: 戦/大戦モード 次回または転落まで。傾奇BURST 120回+残保留4個。
cTimeOrSpecialSystems: 転落抽選。戦モード中に1回大当りすると大戦モードへ昇格。
ceilingOrSupport: 遊タイムなし

gameFlow: |
  通常時 図柄揃い1/319.80
   ├─ 26.5% 2R約300個 → 通常
   ├─ 55.9% 2R約300個 → 戦モード（約70%、転落1/131）
   │    ↓ 大当り
   │   大戦モード（約80%、転落1/223、以後ALL約1500個）
   └─ 17.6% 2R約300個 → LT「傾奇BURST」
        ↓ ST120回+残保留、約87%
      大当りALL 10R約1500個 → 傾奇BURST

notes:
- P機とe機は同日導入だがLT直行比率が大きく異なる。P機17.6%、e機40.6%のため別レコードとし混同禁止。
- 約87%はST120回単独約85.6%と残保留引き戻し約6.3%を合わせた値。

sources:
- https://news.p-world.co.jp/articles/27896/greenbelt — グリーンべると/P-WORLD。P/e両仕様、通常時振り分け、転落率、LT継続率。取得 2026-09-21。
- https://news.p-world.co.jp/articles/27825/nippon — 遊技日本/P-WORLD、2024-05-21。型式、RUSH/LT構造、ALL1500、導入仕様。取得 2026-09-21。
- https://news.p-world.co.jp/articles/27879/yugitsushin — 遊技通信/P-WORLD、2024-05-28。LT初当り17.6%、約87%、導入7/8。取得 2026-09-21。
- https://p.hisshobon.jp/machine/4327/1/102921 — 必勝本、17.6%、120+4回、遊タイムなし。取得 2026-09-21。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: none core
conflicts: none
