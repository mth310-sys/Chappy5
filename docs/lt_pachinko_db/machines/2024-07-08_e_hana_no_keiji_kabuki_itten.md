# e花の慶次～傾奇一転

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e花の慶次～傾奇一転
manufacturer: ニューギン
releaseDate: 2024-07-08
modelType: スマパチ / ミドル

gameType: 1種2種混合 / 転落RUSH + LT ST
jackpotProbability: 図柄揃い 1/319.81。傾奇者図柄停止時2R通常を含む大当り確率 1/205.44。RUSH中 1/62.36。
initialPayout: 2R 約300個（払出）
rushEntryRate: 約52.5%（傾奇BURST40.6% + 戦モード11.9%）
rushContinuationRate: 戦モード約80%（転落1/223）
ltName: 傾奇BURST
ltEntryRoute: 初当り時40.6%で直行。7図柄揃いのほか、7図柄以外/傾奇者チャージ中の電断演出が契機として案内される。
ltEntryRate: 初当り時 40.6%（RUSH突入時に占めるLT比率は約77%との資料表現あり）
ltContinuationRate: 約87%（ST120回の約85.6% + 残保留引き戻し約6.3%の合算）
ltPayoutStructure: 傾奇BURST中 10R約1500個 100% + 傾奇BURST継続
totalPayoutDistribution: 通常時 2R約300個+傾奇BURST40.6%、2R約300個+戦モード11.9%、2R約300個通常47.5%。戦モード中 10R約1500個100%。傾奇BURST中 10R約1500個100%。
timeShortening: 戦モード 次回または転落まで。傾奇BURST120回+残保留4個。
cTimeOrSpecialSystems: 転落抽選（戦モード1/223）
ceilingOrSupport: 遊タイムなし

gameFlow: |
  通常時 図柄揃い1/319.81
   ├─ 47.5% 2R約300個 → 通常
   ├─ 11.9% 2R約300個 → 戦モード（約80%、転落1/223）
   └─ 40.6% 2R約300個 → LT「傾奇BURST」
        ↓ ST120回+残保留、約87%
      大当りALL 10R約1500個 → 傾奇BURST

notes:
- 同日P機とは別スペック。e機はRUSH突入約52.5%だが、そのうちLT直行40.6%とLT比重が非常に高い。
- 一部二次資料に「2R 3000個」と見える誤記があるため採用せず、業界資料・複数解析の2R約300個を採用。

sources:
- https://news.p-world.co.jp/articles/27896/greenbelt — グリーンべると/P-WORLD。e機RUSH52.5%、LT40.6%、戦11.9%、通常47.5%、約87%。取得 2026-09-21。
- https://news.p-world.co.jp/articles/27825/nippon — 遊技日本/P-WORLD、2024-05-21。P/e同時販売、LT ALL1500×約87%。取得 2026-09-21。
- https://news.p-world.co.jp/articles/28315/greenbelt — グリーンべると/P-WORLD。e機初当りLT発動40.6%、LT契機、120回/約87%/ALL1500。取得 2026-09-21。
- https://www.p-world.co.jp/machine/database/10063 — P-WORLD機種DB。RUSH52.5%、LT40.6%、戦11.9%、右打ちALL1500。取得 2026-09-21。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: none core
conflicts: none
