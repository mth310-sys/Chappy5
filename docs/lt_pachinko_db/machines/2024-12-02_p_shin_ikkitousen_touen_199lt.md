# P真・一騎当千～桃園の誓い～199LTver.

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P真・一騎当千～桃園の誓い～199LTver.
manufacturer: D-light（ディ・ライト） / 大一商会系
formalModel: P真・一騎当千～桃園の誓い～LTH-FH
releaseDate: 2024-12-02
modelType: ライトミドル / LT搭載
gameType: 一種二種混合 / ST型2段階RUSH
jackpotProbability: 通常時 1/199.8 / 右打ち時 約1/99.9
initialPayout: 約900個（払出）
rushEntryRate: 約57%（初当り55%直行＋時短引き戻し込み）
rushContinuationRate: 闘士恋撃 約50%
ltName: 超ドキドキ!ハーレムタイム（業界記事ではハーレムタイム表記あり）
ltEntryRoute: (1) 初当り非RUSH45%→時短20回チャンスタイム中に大当りでLT直行、(2) 闘士恋撃中の大当り1回目で25%の3000個以上振り分けを獲得するとLT、(3) 闘士恋撃中で最大2回大当りするとLT（1回目75%継続側でも次回大当り後はLT）
ltEntryRate: 通常初当り基準の総LT到達率は直接公表値を今回確認できず。経路別値のみ保存し、合算推測しない。
ltContinuationRate: 約80%
ltPayoutStructure: 特図2は右打ち大当り1回あたり約1500個以上。解析振り分けでは約4500個OVER 6% / 約3000個 19% / 約1500個 75%。LT中は全振り分け後LT継続。
totalPayoutDistribution: 特図1 約900個→闘士恋撃55% / 約900個→チャンスタイム45%。特図2 1回目は約4500個OVER+LT 6% / 約3000個+LT 19% / 約1500個+闘士恋撃75%。特図2 2回目以降は約4500個OVER+LT 6% / 約3000個+LT 19% / 約1500個+LT 75%。
timeShortening: 闘士恋撃 ST68回 / 超ドキドキ!ハーレムタイム ST158回 / チャンスタイム 時短20回
cTimeOrSpecialSystems: 右打ち中最大2回の大当りでLTへ到達するCD（カウントダウン）系2段階構造。Cタイム搭載根拠なし。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 1/199.8
   ↓ 初当り
  約55% → 闘士恋撃（ST68、約50%）
  約45% → チャンスタイム（時短20）
              ↓ 時短中大当り → LT直行
  闘士恋撃
   ↓ 1回目大当りの25%（3000個以上） → LT
   ↓ または大当りを最大2回獲得 → LT
  超ドキドキ!ハーレムタイム（ST158、約80%）
   ↓ 大当り時はLT継続
notes: 2023年319版・2024年129ver.等の兄弟機と混同しない。右打ち中は全大当り約1500個以上。業界一次記事は右打ち大当り25%で3000個超+LT、最大2回大当りでもLTと説明。P-WORLDはRUSH突入約57%、下位約50%、LT約80%を確認。

sources:
- https://news.p-world.co.jp/articles/29352/yugitsushin — 遊技通信 2024-11-05。型式、1/199.8→約1/99.9、RUSH約57%、下位約50%、LT約80%、複数LT経路、導入日。
- https://news.p-world.co.jp/articles/29385/greenbelt — グリーンべると 2024-11-07。初当り55%、右25%3000個超+LT、最大2回、ST68/158、時短20、導入日。
- https://www.p-world.co.jp/machine/database/10156 — P-WORLD。LT搭載、初当り/RUSH構造、継続率、出玉定義。
- https://nana-press.com/kaiseki/machine/841/25411/ — なな徹。特図1/特図2詳細振り分け、払出、遊タイム非搭載。
- https://1geki.jp/pachinko/p_shinikki_touen199lt/51/ — 一撃。闘士恋撃ST68、約50%、2回大当りLT。
- https://1geki.jp/pachinko/p_shinikki_touen199lt/52/ — 一撃。LT ST158、約80%、LT経路。

confidence:
- coreProbability: INDUSTRY + ANALYSIS_HIGH
- rushStructure: INDUSTRY + ANALYSIS_HIGH
- ltStructure: INDUSTRY + ANALYSIS_HIGH
- payoutDistribution: ANALYSIS_HIGH (industry summary cross-check)
- release/formalModel: INDUSTRY
missingFields:
- 通常初当り基準の総LT到達率: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH
conflicts: none
