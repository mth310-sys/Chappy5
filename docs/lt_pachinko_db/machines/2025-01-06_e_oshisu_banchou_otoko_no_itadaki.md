# eぱちんこ押忍！番長 漢の頂

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: eぱちんこ押忍！番長 漢の頂
manufacturer: 大都技研
formalModel: e／押忍番長漢の頂／L09
releaseDate: 2025-01-06
modelType: ライトミドル / スマパチ / LT搭載
gameType: 一種二種混合 / 普図抽選 / LT=RUSH直行型

jackpotProbability:
- 通常時: 約1/179.5
- 頂RUSH中: 約1/99.5

initialPayout:
- 通常時: 約750個（払出）

rushEntryRate:
- 頂RUSH突入率: 25%
- 本機は初当り25%でLT「頂RUSH」へ直接突入。通常RUSHを経由しない。

rushContinuationRate:
- 通常RUSHなし: N/A（LT=頂RUSH）

ltName: 頂RUSH
ltEntryRoute:
- 通常時初当り → 番長ボーナス → 25%で頂RUSH（LT）
- 75%は通常へ
ltEntryRate:
- 初当り時: 25%
- 実質LT突入確率: 約1/718（業界資料の直接公表値）
ltContinuationRate:
- 約80%

ltPayoutStructure:
- 約3000個 + 頂RUSH: 70%
- 約300個 + 頂RUSH: 30%
- 3000個は1500個+750個×2回分の合計表記。払出値、V入賞条件あり。

totalPayoutDistribution:
- 特図1: 約750個 + 頂RUSH 25% / 約750個 + 通常 75%
- 特図2: 約3000個 + 頂RUSH 70% / 約300個 + 頂RUSH 30%

timeShortening:
- 頂RUSH: 157回
- RUSH中約1/99.5、継続期待度約80%

cTimeOrSpecialSystems:
- 通常時は普図抽選との解析説明あり。図柄揃い段階ではRUSH突入可否が未確定で、右側電チュー（特図1）入賞時にRUSH突入/非突入抽選が行われるとされる。

ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（約1/179.5）
   ↓ 初当り / 約750個
  番長ボーナス
   ├─ 25% → 頂RUSH（LT、157回 / 約80%）
   │          ↓ 大当り
   │        70% 約3000個 / 30% 約300個
   │          ↓
   │        頂RUSH継続
   └─ 75% → 通常へ

notes:
- 大都技研初のLT機として業界資料で確認。
- 本機は下位RUSH→LT昇格型ではなく、初当り25%でLT「頂RUSH」へ直接入る構造。したがって通常RUSH継続率はN/A。
- 業界資料で実質LT突入確率約1/718を直接確認。1/179.5×25%から独自推算した値としてではなく、公表値として保存。
- P-WORLDは通常約1/179.5、RUSH約1/99.5、157回、25%、約80%、特図1/2振り分けを掲載。
- 2026年の99ver.は兄弟機であり、本レコードと混同しない。

sources:
- https://news.p-world.co.jp/articles/29596/yugitsushin — 遊技通信 / 2024-11-28、取得2026-09-21
- https://news.p-world.co.jp/articles/29588/greenbelt — グリーンべると / 2024-11-27、取得2026-09-21
- https://news.p-world.co.jp/articles/29949/greenbelt — グリーンべると / 2025-01-08、取得2026-09-21
- https://www.p-world.co.jp/machine/database/10179 — P-WORLD、取得2026-09-21
- https://pachimaga.com/free/article/20250220/055960.php — パチマガスロマガFREE、取得2026-09-21
- https://pachinko-spec.info/spec-detail/148452/ — スペック解析（型式/導入日照合）、取得2026-09-21

confidence:
- identity / formal model / LT confirmation: INDUSTRY
- release date: INDUSTRY + ANALYSIS_HIGH
- core probabilities / RUSH structure: INDUSTRY + ANALYSIS_HIGH
- payout allocations: INDUSTRY + ANALYSIS_HIGH
- LT route / rate / continuation: INDUSTRY + ANALYSIS_HIGH

missingFields: none
conflicts: none
