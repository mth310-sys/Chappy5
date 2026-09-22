# Pドラムだ!金ドン 花火外伝99ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: Pドラムだ!金ドン 花火外伝99ver.
modelName: Pドラムだ！金ドンSB
manufacturer: ミズホ / ユニバーサルエンターテインメント
releaseDate: 2025-07-07
modelType: 甘デジ / LT搭載
gameType: 一種二種混合 / 1回転RUSH / C時短を含むLT

jackpotProbability:
- 通常時大当り: 約1/99.90
- 金ドンRUSH中図柄揃い: 約1/1.25（大当り+小当り合算）
- SPECIAL金ドンRUSH中図柄揃い: 約1/1.07（大当り+小当り+C時短合算）

initialPayout:
- 10R: 約700個（払い出し）
- 4R: 約280個（払い出し）
- 2R: 約140個（払い出し）

rushEntryRate:
- 初当りから金ドンRUSH/LTへのTOTAL突入率: 60%
- 内訳: 10R+LT直行 0.5% / 4R+金ドンRUSH 59.5% / 4R+通常 40.0%
- メーカー公式はRUSH突入確率を約1/166.5と表記。

rushContinuationRate:
- 金ドンRUSH: 約80%
- 時短1回、図柄揃い約1/1.25。

ltName: SPECIAL金ドンRUSH / SPECIAL金ドンRUSH∞

ltEntryRoute:
- 通常初当りの0.5%で10R後にSPECIAL金ドンRUSH∞へ直行。
- 金ドンRUSH中大当りの1.7%（10R）でSPECIAL金ドンRUSH∞へ。
- 金ドンRUSH終了後は必ずLTチャレンジ「ファイナルチャレンジ（資料によりファイナルジャッジ表記）」へ移行し、成功でSPECIAL金ドンRUSH∞へ。
- SPECIAL金ドンRUSH終了時もファイナルチャレンジを経由し、成功でLT継続/∞へ復帰する。

ltEntryRate:
- 通常初当りからのLT直行: 0.5%
- 金ドンRUSH中大当り時LT移行: 1.7%
- 通常時全体を分母とした総LT到達率: UNVERIFIED_AFTER_RESEARCH（直行・RUSH中1.7%・RUSH終了後ファイナルチャレンジの複数経路を含む直接公表値を確認できず、独自合算しない）

ltContinuationRate:
- SPECIAL金ドンRUSH: TOTAL約95%（時短1回と時短100回=SPECIAL金ドンRUSH∞の合算）
- SPECIAL金ドンRUSH∞: 時短100回、図柄揃い期待度約99.9% / ほぼ100%。

ltPayoutStructure:
- SPECIAL金ドンRUSH（∞）特図2: 10R約700個+SPECIAL金ドンRUSH∞ 25.9% / 10R約700個+SPECIAL金ドンRUSH 24.7% / 2R約140個+SPECIAL金ドンRUSH 49.4%。
- LT中10R比率合計50.6%。
- LT発動時期待出玉約10839個は「LT発動までの平均出玉+LT期待値」の払い出し個数合計で、単一大当り出玉とは分離。

totalPayoutDistribution:
- 特図1: 10R約700個+LT∞ 0.5% / 4R約280個+金ドンRUSH 59.5% / 4R約280個+通常 40.0%。
- 金ドンRUSH特図2: 10R約700個+LT∞ 1.7% / 10R約700個+金ドンRUSH 48.9% / 2R約140個+金ドンRUSH 49.4%。
- LT特図2: 10R約700個+LT∞ 25.9% / 10R約700個+LT 24.7% / 2R約140個+LT 49.4%。

timeShortening:
- 通常大当り後: 0回 / 金ドンRUSH時短1回 / LT∞時短100回。
- SPECIAL金ドンRUSH: 時短1回または100回。

cTimeOrSpecialSystems:
- SPECIAL金ドンRUSH中の実質約1/1.07は大当り・小当り・C時短の合算。
- LT∞は時短100回で実質次回大当り濃厚。
- （SPECIAL）金ドンRUSHの1回転で非当選時はファイナルチャレンジへ移行し、成功時はLTへ突入/継続する。

ceilingOrSupport:
- 遊タイム非搭載
- コンプリート機能搭載

gameFlow: |
  通常時 約1/99.9
   ├─ 0.5% → 10R約700個 → LT「SPECIAL金ドンRUSH∞」
   ├─ 59.5% → 4R約280個 → 金ドンRUSH（時短1回・約80%）
   └─ 40.0% → 4R約280個 → 通常時
  金ドンRUSH
   ├─ 図柄揃い → 1.7%は10R+LT∞ / その他はRUSH継続
   └─ 非当選 → ファイナルチャレンジ
        ├─ 成功 → LT「SPECIAL金ドンRUSH∞」
        └─ 失敗 → 通常時
  LT「SPECIAL金ドンRUSH∞」（時短100回・ほぼ100%）
   ↓ 大当り後
  SPECIAL金ドンRUSH（時短1回）
   ├─ 大当り → LT継続（25.9%で∞へ）
   └─ 非当選 → ファイナルチャレンジ → 成功でLT継続 / 失敗で通常時
  TOTAL継続約95%

notes:
- 2024-08-19導入のライトミドル「Pドラムだ！金ドン 花火外伝」（約1/199.8）とは別スペック。
- 60%は初当りからのRUSH突入率で、LT総到達率ではない。
- 約1/1.25は大当り+小当り、約1/1.07は大当り+小当り+C時短の合算で定義が異なる。
- 「約95%」は時短1回と時短100回を合算したTOTAL継続率。∞単独の継続率と混同しない。
- ファイナルチャレンジの総成功率を直接示す公表値は十分な再探索でも確定できなかったため、総LT到達率を独自計算しない。

sources:
- https://www.universal-777.co.jp/news/20250414001637/ — ユニバーサルエンターテインメント公式（2025-04-14）。ミズホ製、2025年7月予定、RUSH突入確率約1/166.5、金ドンRUSH約80%、RUSH終了後LTチャレンジ、LT SPECIAL金ドンRUSH約95%を確認。
- https://news.p-world.co.jp/articles/30764/yugitsushin — 遊技通信（2025-04-22）。型式Pドラムだ！金ドンSB、通常約1/99.90、RUSH約1/1.25/LT約1/1.07、RUSH60%/約80%、LT約95%、RUSH終了後LTチャレンジを照合。
- https://www.p-world.co.jp/machine/database/10268 — P-WORLD。特図1 0.5/59.5/40.0%、RUSH中LT1.7%、RUSH終了後ファイナルジャッジ、LT期待出玉約10839個、10R比率等を照合。
- https://hisshobon.com/machineinfo/98070/ — 必勝本。2025-07-07導入、通常1/99.9、金ドンRUSH時短1回/約80%、LT時短1or100回/TOTAL約95%、2R/4R/10R払い出し、遊タイム非搭載を照合。
- https://nana-press.com/kaiseki/machine/980/30060/ — なな徹。特図1・金ドンRUSH特図2・LT特図2の詳細振り分け、確率定義、払い出し、遊タイム非搭載を照合。
- https://p-town.dmm.com/machines/4802 — DMMぱちタウン。SPECIAL金ドンRUSH/∞、∞約99.9%、LT中25.9%で∞、ファイナルチャレンジ構造を照合。

confidence:
- overall: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- manufacturer/release month/LT name/core flow: OFFICIAL
- canonical releaseDate/modelName: INDUSTRY + ANALYSIS_HIGH（複数一致）
- probabilities/continuation/payout distributions: INDUSTRY + ANALYSIS_HIGH（複数一致）
- total LT arrival rate: UNVERIFIED_AFTER_RESEARCH

missingFields:
- 通常時全体を分母とした総LT到達率: UNVERIFIED_AFTER_RESEARCH
- ファイナルチャレンジの総成功率: UNVERIFIED_AFTER_RESEARCH

conflicts: []
