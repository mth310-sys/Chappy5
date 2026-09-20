# e 新・必殺仕置人 超斬撃199

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e 新・必殺仕置人 超斬撃199
manufacturer: 京楽産業.
formalModel: e新・必殺仕置人～超斬撃～K3
releaseDate: 2024-04-22
modelType: ライトミドル / スマパチ / LT
 gameType: 一種二種混合。下位RUSHはST21回+残保留4、LTは大当り対転落の転落式。
jackpotProbability: 通常時 約1/199.9 / 真仕置CRASH中 約1/28.1 / 超斬撃RUSH中 約1/32.7
initialPayout: 3R 約450個（払出）
rushEntryRate: 真仕置CRASH 60%
rushContinuationRate: 約60%（残保留4個の引き戻し約13.5%を含む）
ltName: 超斬撃RUSH
ltEntryRoute: 真仕置CRASH中の図柄揃い大当り約50%で高坂超決戦→勝利期待度約50%→LT発動。したがって下位RUSH中の図柄揃い1回あたりLT発動は約25%と解析資料が明記。
ltEntryRate: 初当り基準の総LT到達率は公開一次/業界資料で直接確認できず UNVERIFIED_AFTER_RESEARCH。下位RUSH中図柄揃い1回あたり約25%は確認済み。
ltContinuationRate: 約88%（残保留4個の引き戻し約11.7%を含む）
ltPayoutStructure: 超斬撃RUSH中の図柄揃いは10R約1500個（払出）・超斬撃RUSH継続100%。
totalPayoutDistribution: 特図1=3R約450個+真仕置CRASH 60% / 3R約450個+通常 40%。真仕置CRASH中図柄揃い=10R約1500個、高坂超決戦 約50% / 真仕置CRASH継続 約50%。高坂超決戦は勝率約50%。LT中=10R約1500個+LT継続100%。
timeShortening: 真仕置CRASH ST21回+残保留4。超斬撃RUSHは次回大当りまたは転落（転落確率約1/199.9）まで+終了後残保留4。
cTimeOrSpecialSystems: ラッキートリガー。Cタイム関連は今回確認できず。
ceilingOrSupport: 遊タイムの搭載は今回確認できず。

gameFlow:
通常時 約1/199.9
→ 初当り3R約450個
→ 60% 真仕置CRASH / 40% 通常
→ 真仕置CRASH（ST21回+残保留4、継続約60%）
→ 図柄揃い10R約1500個
→ 約50%で高坂超決戦（勝率約50%）
→ 勝利でLT「超斬撃RUSH」
→ 大当り約1/32.7 vs 転落約1/199.9、継続約88%、図柄揃いALL10R約1500個
→ 転落後は残保留4個の引き戻し判定を含む。

notes:
- 京楽LT第一弾。業界一次系複数ソースでLT搭載、導入日、主要数値が一致。
- 「約25%」は初当りからの総LT突入率ではなく、真仕置CRASH中の図柄揃い1回あたりのLT発動割合。定義を分離した。
- LT継続約88%は残保留4個の引き戻し約11.7%込み。

sources:
- https://news.p-world.co.jp/articles/27155/yugitsushin — 遊技通信/P-WORLD、主要スペック・LT構造・導入日
- https://news.p-world.co.jp/articles/27366/nippon — 遊技日本/P-WORLD、主要スペック・導入日
- https://amusement-japan.co.jp/article/detail/10004195/ — Amusement Japan、LT第一弾・60%・88%・ALL1500・導入日
- https://hisshobon.com/machineinfo/91842/ — 必勝本、大当り振り分け・高坂超決戦・約25%
- https://1geki.jp/pachinko/e_shiokinin_199/1/ — 一撃、ST/残保留・出玉・確率照合
- https://www.p-world.co.jp/machine/database/10024 — P-WORLD機種DB、ゲームフロー照合

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 初当り基準の総LT到達率（直接公表値）
- Cタイム有無の明示資料
- 遊タイム有無の明示資料
conflicts: none
