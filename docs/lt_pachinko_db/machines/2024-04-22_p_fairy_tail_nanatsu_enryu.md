# P FAIRY TAIL これが七炎竜の力だ

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P FAIRY TAIL これが七炎竜の力だ
manufacturer: 藤商事
formalModel: P FAIRY TAILこれが七炎竜の力だFSA
releaseDate: 2024-04-22
modelType: ミドル / LT
gameType: 一種二種混合・転落式デュアルRUSH
jackpotProbability: 図柄揃い約1/399.6。FTチャージ約1/324.3。両者合算の大当り約1/179.06。右打ち図柄揃い約1/58.8（解析資料照合）。
initialPayout: 図柄揃い約1500個。FTチャージ約300個（払出）。
rushEntryRate: 図柄揃い時 約75%（約5%はLT直行、約70%はFAIRY RUSH。約25%通常）。FTチャージは通常へ。
rushContinuationRate: FAIRY RUSH 約65%（本体継続約62.2%+残保留4個引き戻し約6.6%の合算表記）
ltName: 七炎竜RUSH
ltEntryRoute: 通常時図柄揃いの約5%でLT直行。またはFAIRY RUSH中大当りの約40%で七炎竜BONUS 3000→LT。
ltEntryRate: 初当り全体基準の総LT到達率は直接公表値を今回確認できず。入口別は上記の通り。
ltContinuationRate: 約77%（本体継続約75.2%+残保留4個引き戻し約6.6%の合算表記）
ltPayoutStructure: LT中大当りの約60%が約1500個+LT継続、約40%が約3000個+αの上乗せ特化BONUS「一夜モード」。一夜モードは上乗せ成功が続く限り約1500個を加算し、終了後もLT継続。
totalPayoutDistribution: 通常時図柄揃いはALL約1500個以上。約5% LT直行、約70% FAIRY RUSH、約25%通常。FTチャージ約300個→通常。FAIRY RUSH中は約40% 約3000個+LT、約60% 約1500個+下位RUSH継続。LT中は約40% 約3000個+α、約60% 約1500個。
timeShortening: FAIRY RUSHは次回大当りor転落（転落約1/97.0）まで。七炎竜RUSHは次回大当りor転落（転落約1/179.0）まで。双方終了後残保留4個の引き戻しを継続率に含む。
cTimeOrSpecialSystems: 上乗せ特化「一夜モード」。Cタイム関連は今回確認できず。
ceilingOrSupport: 遊タイムの搭載は今回確認できず。

gameFlow:
通常時
→ 図柄揃い約1/399.6（約1500個） / FTチャージ約1/324.3（約300個→通常）
→ 図柄揃いの約5% LT直行 / 約70% FAIRY RUSH / 約25%通常
→ FAIRY RUSH（大当り約1/58.8 vs 転落約1/97.0、継続約65%）
→ RUSH中大当りの約40%で約3000個+LT「七炎竜RUSH」 / 約60%約1500個+下位継続
→ 七炎竜RUSH（大当り約1/58.8 vs 転落約1/179.0、継続約77%）
→ 約40%で約3000個+α「一夜モード」 / 約60%約1500個+LT継続。

notes:
- LT×デュアルRUSH。藤商事公式機種サイトへの業界記事リンク、業界一次系、HAZUSE、P-WORLDで照合。
- 「大当り約1/179.06」は図柄揃いとFTチャージの合算で、図柄揃い1/399.6と混同しない。
- LT突入時期待出玉約12,544個は「最短突入の場合」の定義付き資料があるため参考値扱い。

sources:
- https://yugi-nippon.com/pachinko-new-machine/post-62880/ — 遊技日本、LT搭載・型式・主要構造・4/22導入
- https://web-greenbelt.jp/post-81080/ — グリーンべると、通常時合算/図柄揃い/FTチャージ、LT入口、期待出玉
- https://hazuse.com/machine/pachinko/3P1434/genre/101/ — HAZUSE、型式・導入日・継続率定義
- https://hazuse.com/machine/pachinko/3P1434/genre/104/ — HAZUSE、大当り割合
- https://www.p-world.co.jp/machine/database/10020 — P-WORLD機種DB、ゲームフロー・振り分け・一夜モード

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 初当り全体基準の総LT到達率（直接公表値）
- Cタイム有無の明示資料
- 遊タイム有無の明示資料
conflicts: none
