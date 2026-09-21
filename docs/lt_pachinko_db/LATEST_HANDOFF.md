# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before writes

## This relay

### 2025-04-07 boundary audit — OPEN
Independent calendar evidence currently enumerates these pachinko releases on 2025-04-07:
1. P少女☆歌劇 レヴュースタァライト ラッキートリガー4500 — LT搭載、既登録 COMPLETE_CORE。
2. e牙狼神速神撃3000LT — LT搭載、this relay COMPLETE_CORE。
3. e シン・ウルトラマン — LT搭載、this relay COMPLETE_CORE。
4. eフィーバーうたわれるもの — LT搭載を確認。**次回処理対象**。

Calendar evidence:
- https://www.all7.jp/plans/index/2025/04/10 — 2025-04-07に上記4機種を列挙。
- https://www.pachibee.jp/machines/about/125030000 — e牙狼導入日2025-04-07。
- 各機種の業界/解析資料でも4/7導入を照合。

### Added COMPLETE_CORE — e牙狼神速神撃3000LT
`docs/lt_pachinko_db/machines/2025-04-07_e_garo_shinsoku_shingeki_3000lt.md`
- サンセイアールアンドディ / 型式 `e牙狼神速神撃3000LT-RB`。
- 通常1/199.5。初当り3R約450個。
- 70%でLTチャレンジ、30%通常。LTチャレンジは時短1回、実質1/3.226、成功約31%。
- 成功で約3000個（10R+10R）獲得後、LT `神速神撃3000LT`。
- LTは時短1回、実質1/1.316、継続約76%、右打ち大当りALL約3000個。
- 通常RUSHは存在せず、LT前チャレンジとLTを分離。
- 通常初当り基準の総LT到達率は直接公表値未確認のため、70%×約31%を独自登録しない。

Sources:
- https://news.p-world.co.jp/articles/30318/yugitsushin
- https://news.p-world.co.jp/articles/30371/amusement
- https://news.p-world.co.jp/articles/30297/greenbelt
- https://hisshobon.com/machineinfo/96783/
- https://nana-press.com/kaiseki/machine/924/28390/

### Added COMPLETE_CORE — e シン・ウルトラマン
`docs/lt_pachinko_db/machines/2025-04-07_e_shin_ultraman.md`
- オッケー.（京楽産業.製） / 型式 `eシン・ウルトラマンK3`。
- 通常約1/199.9、初当り2R約300個。50%でウルトラバトルモード、50%通常。
- 下位ウルトラバトルモードは時短1回、1/2、継続50%。
- 下位RUSH中大当りの約85%でLT `ゼットン3000ATTACK`。
- LTは時短1回、約1/1.34、継続約75%。右打ち大当りはALL約3000個（1500個×2、特図2）。
- 2026年 `79ver.` はLT非搭載の別スペックであり混同しない。
- 通常初当り基準の総LT到達率は経路値から独自算出せずUNVERIFIED。

Sources:
- https://news.p-world.co.jp/articles/30261/yugitsushin
- https://hisshobon.com/machineinfo/96856/
- https://hisshobon.com/machineinfo/96858/
- https://www.p-world.co.jp/machine/database/10231
- https://1geki.jp/pachinko/e_shin_ultraman/39/

## Effective DB state
Previous handoff: 79 records / 78 COMPLETE_CORE / 1 CONFLICT.
After this relay:
- machine records: **81**
- COMPLETE_CORE: **80**
- CONFLICT: **1**
- INDEX is stale; current machine files + this handoff are the progress source of truth.

## Next restart point
**2025-04-07 boundary remains OPEN. Next process `eフィーバーうたわれるもの` (LT搭載 confirmed: 図柄揃い1/399.7, うたわれチャージ1/264.7, total RUSH/LT entry 約55%, LT `仮面RUSH`, 約1/13.4, 15+4回, continuation 約77%). Before closing 2025-04-07, re-enumerate the same date from a second independent historical calendar and determine LT-positive/negative for every candidate.**

Known source for next machine:
- https://hisshobon.com/machineinfo/96821/

Before writing: re-read latest main README / LT mission / INDEX / this handoff, check current machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate an unpublished total LT arrival rate from route probabilities.
