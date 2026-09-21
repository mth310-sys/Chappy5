# e一方通行 とある魔術の禁書目録

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e一方通行 とある魔術の禁書目録
modelName: eとある魔術の禁書目録 一方通行 BIG JKZ
manufacturer: JFJ（藤商事グループ）
releaseDate: 2025-07-07
modelType: スマパチ / ミドル / BIGスタート / LT3.0 PLUS
gameType: 一種二種混合 / 普図ST / 下位RUSH突破型LT

jackpotProbability:
- 通常時図柄揃い: 約1/539
- 打ち止め（ラストオーダー）チャージ: 約1/994（チャージからの突入当りを除く表記）
- 通常時大当り合算: 約1/349（図柄揃いとチャージ系を含むメーカー表記）
- 右打ち中電チューロング開放: 約1/110

initialPayout:
- 通常時図柄揃い: 約1500個（払い出し）
- 打ち止め（ラストオーダー）チャージ: 約300個（払い出し）

rushEntryRate:
- 一方通行（アクセラレータ）RUSHチャレンジ突入率: 約51%
- 図柄揃い時: 約51%でRUSHチャレンジ / 約49%通常
- チャージからRUSHチャレンジへの昇格経路あり。具体的なチャージ内昇格割合は直接資料で確定できず。

rushContinuationRate:
- 一方通行（アクセラレータ）RUSHチャレンジ: 100回、成功率約60%

ltName: 一方通行（アクセラレータ）RUSH HYPER

ltEntryRoute:
- 通常時図柄揃い等から約51%で「一方通行（アクセラレータ）RUSHチャレンジ」へ。
- RUSHチャレンジ100回中に約1/110の電チューロング開放を引けば大当りし、LT「一方通行（アクセラレータ）RUSH HYPER」へ突入。
- 打ち止め（ラストオーダー）チャージからRUSHチャレンジへ昇格する経路もある。

ltEntryRate:
- RUSHチャレンジ成功率: 約60%（成功時LT突入100%）
- 通常時全当選/通常回転を分母とした総LT到達率: UNVERIFIED_AFTER_RESEARCH。約51%×約60%などから独自算出しない。

ltContinuationRate: 約75%

ltPayoutStructure:
- 右打ち時共通: 約6000個+α + LT継続 約4%
- 右打ち時共通: 約3000個 + LT継続 約96%
- 約3000個 = 特図2大当り2回分の合計、約6000個 = 特図2大当り4回分以上の合計。V入賞が条件。

totalPayoutDistribution:
- 通常時図柄揃い: 約1500個 + RUSHチャレンジ 約51% / 約1500個 + 通常 約49%
- 打ち止め（ラストオーダー）チャージ: 約300個。RUSHチャレンジ昇格経路あり（具体割合UNVERIFIED_AFTER_RESEARCH）
- RUSHチャレンジ中: 約6000個+α + LT 約4% / 約3000個 + LT 約96%
- LT中: 約6000個+α + LT継続 約4% / 約3000個 + LT継続 約96%

timeShortening:
- 一方通行（アクセラレータ）RUSHチャレンジ: 100回
- 一方通行（アクセラレータ）RUSH HYPER: 151回
- 普図STのため残保留なし。LT151回スルーで通常時へ。

cTimeOrSpecialSystems:
- BIGスタート採用（メーカー従来比約1.5倍のヘソサイズ）。
- 打ち止め（ラストオーダー）チャージ約1/994、約300個。チャージからRUSHチャレンジ昇格経路あり。

ceilingOrSupport:
- 遊タイム非搭載

gameFlow: |
  通常時
   ├─ 図柄揃い 約1/539 → 約1500個
   │    ├─ 約51% → 一方通行RUSHチャレンジ 100回
   │    └─ 約49% → 通常時
   └─ 打ち止め（ラストオーダー）チャージ 約1/994 → 約300個
        ├─ 昇格 → 一方通行RUSHチャレンジ
        └─ 非昇格 → 通常時
  一方通行RUSHチャレンジ
   ├─ 100回 / 約1/110 / 成功率約60%
   ├─ 大当り → LT「一方通行RUSH HYPER」
   └─ スルー → 通常時
  LT「一方通行RUSH HYPER」
   └─ 151回 / 約1/110 / 継続約75% / 右打ち大当りALL約3000個以上

notes:
- 2026-07-06導入の兄弟機「e一方通行 最狂」（RRA、約1/253）とは別スペック。本レコードは2025-07-07導入のJKZ。
- メーカー公式の「図柄揃い1/539」「大当り1/349」「チャージ1/994」は分母・定義が異なるため分離。
- RUSHチャレンジはLTそのものではなく下位状態。成功時にLT HYPERへ移行。
- 右打ち3000/6000+αは複数回大当りの合計払い出し。単一大当りの出玉として扱わない。
- 総LT到達率は公開された直接値を十分な再探索後も確定できず、経路確率から推測補完しない。

sources:
- https://www.fujimarukun.co.jp/products/e_accelerator/ — JFJメーカー公式。JKZの図柄揃い1/539、大当り1/349、チャージ1/994、RUSHチャレンジ約51%/100回/約60%、LT HYPER 151回/約75%、出玉定義を確認。
- https://news.p-world.co.jp/articles/30868/greenbelt — 業界記事（グリーンべると、2025-05-07）。JFJ製、LT3.0 PLUS、2025-07-07導入、図柄揃い約51%→RUSHチャレンジ→成功でLT、LT約75%を確認。
- https://hazuse.com/machine/pachinko/PX0298/ — 解析DB。型式 eとある魔術の禁書目録 一方通行 BIG JKZ、検定番号510135、導入日、各確率/回数/継続率を照合。
- https://hisshobon.com/machineinfo/97825/ — 必勝本。通常図柄揃い51/49、右打ち6000個+α 4% / 3000個96%を確認。
- https://hisshobon.com/machineinfo/97826/ — 必勝本。LT正式名称、RUSHチャレンジ成功がLT発動契機、チャージ昇格経路、普図ST・残保留なしを確認。
- https://nana-press.com/kaiseki/machine/966/29728/ — 解析。1種2種混合、各確率、主要振り分け、払い出し定義、遊タイム非搭載を照合。

confidence:
- overall: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- releaseDate/modelName: INDUSTRY + ANALYSIS_HIGH
- LT搭載/構造: OFFICIAL + INDUSTRY
- probabilities/distributions: OFFICIAL + ANALYSIS_HIGH（複数一致）

missingFields:
- 通常時全体を分母とした総LT到達率: UNVERIFIED_AFTER_RESEARCH
- 打ち止め（ラストオーダー）チャージからRUSHチャレンジへ昇格する具体割合: UNVERIFIED_AFTER_RESEARCH

conflicts: []
