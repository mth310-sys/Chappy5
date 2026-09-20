# eフィーバーからくりサーカス2 魔王ver.

machineName: eフィーバーからくりサーカス2 魔王ver.
manufacturer: SANKYO（製造: ジェイビー）
releaseDate: 2024-11-05
modelType: スマパチ / ミドル・実質MAX帯 / LT搭載
gameType: 一種二種混合 / 普図ST / c時短搭載 / RUSH=LT特化
jackpotProbability: 通常時図柄揃い 約1/399.9。からくりチャージ 約1/396。両者を含むトータル大当り 約1/199.9。LT中「運命の一劇」発生率 約1/78
initialPayout: 図柄揃いは約1200個（8R）主体、LT突入の一部は約300個（2R）。からくりチャージは約300個
rushEntryRate: 約52%。本機はRUSH突入時のすべてがLT「超悪魔RUSH」となるため、RUSH突入率=LT突入率として公開
rushContinuationRate: 下位RUSHなし。LT「超悪魔RUSH」約80%
ltName: 超悪魔RUSH（超デモンRUSH）
ltEntryRoute: ①図柄揃い1200個大当りの約51%でLT、②300個LT突入大当り約1%、③からくりチャージからのLT突入ルートあり。通常図柄揃い時のトータルLT突入率は約52%
ltEntryRate: 約52%（1200個大当りと300個LT突入大当りに対するトータル値）。からくりチャージは別確率1/396で、その一部からLTへ入るため、図柄揃い分母とトータル大当り分母を混同しない
ltContinuationRate: 約80%（運命の一劇 約1/78、特図2の5回転引き戻し期待度約82%、時短135回・c時短当選を含む定義）
ltPayoutStructure: 右打ち中「運命の一劇」成功orリセット時の振り分けは、約4500～7500個 17%、約3000個 33%、約1500個 40%、STリセット10%。3000個は1500個×2、4500～7500個は1500個×3～5。出玉は払出表記
totalPayoutDistribution: 通常時図柄揃い=約1200個＋LT 51%、約300個＋LT 1%、約1200個＋通常48%。右打ち=約4500～7500個17%、約3000個33%、約1500個40%、STリセット10%
timeShortening: LT「超悪魔RUSH」時短/ST135回。運命の一劇では特図2を5回転消化し、成功期待度約82%。STリセット当選時は135回へ再セット
cTimeOrSpecialSystems: c時短を継続率計算に含む。通常時には図柄揃いとは別に「からくりチャージ」約1/396があり、その一部からLT突入。図柄揃い約1/399.9とトータル大当り約1/199.9を分離して保存
ceilingOrSupport: 遊タイムなし
gameFlow: 通常時 → 図柄揃い約1/399.9（またはからくりチャージ約1/396） → 図柄揃い時は約52%でLT「超悪魔RUSH」、約48%は通常へ → 超悪魔RUSHは時短/ST135回、運命の一劇約1/78 → 特図2 5回転で成功時1500～7500個、STリセット時は135回再セット → トータルLT継続約80% → ST終了で通常へ
notes: SANKYO公式機種コレクションと業界一次記事が、RUSH突入=LTの「LT特化スペック」、図柄揃い約1/399.9、LT約52%、135回、約80%、最大7500個を直接確認。P機「Pフィーバーからくりサーカス2 運命ver.」は同日導入だがLT非搭載の通常RUSH仕様なので混同しない。導入日はSANKYO関連発表・P-WORLD/一撃で2024-11-05を採用。一部解析ページの11/4表記は全国導入カレンダーとの差として採用せず。
sources:
- https://www.sankyo-fever.jp/collection/968/ — SANKYO公式機種コレクション。2024.11、1種2種混合ST、LT/RUSH構造、1/399.9、約52%、1200/300個、最大7500個
- https://news.p-world.co.jp/articles/28810/amusement — Amusement Japan。2024-08-29発表、導入11/5、LT特化、1/199.9/図柄1/399.9、約52%、約80%、135回、運命の一劇約1/78
- https://news.p-world.co.jp/articles/28805/yugitsushin — 遊技通信。型式eフィーバーからくりサーカス2R、LT約52%/約80%、135回、導入11月上旬
- https://news.p-world.co.jp/articles/29335 — グリーンべると/P-WORLD。11/5導入、通常/右打ち主要振り分け、1500～7500個
- https://www.p-world.co.jp/machine/database/10115 — P-WORLD。1/399.9、からくりチャージ1/396、トータル1/199.9、LT約52%/約80%、135回、払出
- https://p.hisshobon.jp/machine/4385/1/104864 — 必勝本。基本スペック、遊タイム非搭載、払出、図柄/チャージ定義
- https://p.hisshobon.jp/machine/4385/1/104865 — 必勝本。通常時51/1/48%、右打ち17/33/40/10%振り分け
- https://pachiseven.jp/articles/detail/22653 — パチ7。図柄揃い/トータル確率、運命の一劇5回転、各振り分けと複数回1500個定義
retrievedAt: 2026-09-21
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: なし（からくりチャージ経由の個別LT割合は公式公開値を確認できないため、経路存在のみ保存し推測しない）
conflicts: 導入日11/5が公式関連・業界・主要DBで一致。一部解析資料に11/4表記あり。canonicalは11/5とし、数値競合には扱わない
