# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-08-04 `Pクイーンズブレイド奈落5400`
- duplicate search performed before write

## Boundary status
### 2025-07-07 — CLOSED 9/9
Previous closure retained.

### 2025-07-22 — CLOSED 3/3
Previous closure retained.

## Previous relay retained
- `e牙狼12黄金騎士極限` — COMPLETE_CORE
- `e黄門ちゃま 寿限無 LLサイズ` — COMPLETE_CORE
- `eシャーマンキング` — COMPLETE_CORE
- `eシャーマンキング でっけぇえなver.` — COMPLETE_CORE
- `e真・一騎当千～軍神覚醒～396ver.` — COMPLETE_CORE
- `e真・一騎当千～軍神覚醒～319大入りver.` — COMPLETE_CORE

## This relay
### Pクイーンズブレイド奈落5400 — COMPLETE_CORE
- 高尾 / 型式 `Pクイーンズブレイド奈落V1C` / 2025-08-04。
- 一種二種混合 / 下位RUSHなしの直LT型。
- 通常図柄揃い約1/319.2（聖乳チャージ除外）、聖乳チャージ約1/533.96、大当り合算約1/199.8。定義を分離保存。
- 図柄揃い時は約1350個。50.5%でLT `QUEEN'S BLADE`、49.5%で通常へ。
- LTは電サポ1回、右打ち大当り約1/1、継続約50.5%。
- LT中は50.5%で約5400個（1350個×4）+LT継続、49.5%で約1350個+通常。
- 通常遊技全体基準の総LT到達率は直接値未確認のためUNVERIFIED。図柄揃い/チャージ確率から独自合算しない。
- 2024-06-03 `Pクイーンズブレイド4 UNLIMITED` はLT非搭載であり別機種として分離。
- record: `docs/lt_pachinko_db/machines/2025-08-04_p_queens_blade_naraku_5400.md`
- commit: `9f700c750a51de1f0da971edbca9cdc1119d49d5`

Sources:
- https://news.p-world.co.jp/articles/30918/yugitsushin
- https://nagasaki-yukyo.or.jp/information/%E7%89%B9%E5%88%A5%E8%A1%A3%E8%A3%85%E3%81%AB%E8%BA%AB%E3%82%92%E5%8C%85%E3%82%93%E3%81%A7%E7%99%BB%E5%A0%B4%EF%BC%81%EF%BC%81%E3%80%8Cp%E3%82%AF%E3%82%A4%E3%83%BC%E3%83%B3%E3%82%BA%E3%83%96%E3%83%AC/
- https://www.p-world.co.jp/machine/database/10282
- https://www.pachibee.jp/machines/index/125070006
- https://nana-press.com/kaiseki/machine/991/29770/
- https://pachiseven.jp/machines/7191/cutout/2

## 2025-08-04 — OPEN
Independent-calendar candidate queue. Do not assume all candidates are LT; audit each before registration.
1. `e牙狼12黄金騎士極限` — LT搭載 — COMPLETE_CORE
2. `e黄門ちゃま 寿限無 LLサイズ` — LT搭載 — COMPLETE_CORE
3. `eシャーマンキング` — LT搭載 — COMPLETE_CORE
4. `eシャーマンキング でっけぇえなver.` — LT搭載 — COMPLETE_CORE
5. `e真・一騎当千～軍神覚醒～396ver.` — LT搭載 — COMPLETE_CORE
6. `e真・一騎当千～軍神覚醒～319大入りver.` — LT搭載 — COMPLETE_CORE
7. `Pクイーンズブレイド奈落5400` — LT搭載 — COMPLETE_CORE
8. `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.` — NEXT; LT搭載確認済み。型式 `PAフィーバー戦姫絶唱シンフォギア4YS`。通常約1/99.9、最終決戦約45%、絶唱RUSH ST45/約70%、LT超絶唱RUSH ST70/約85%、下位大当り約9%でLT。通常直行率について多数資料は0.2%だが必勝本LT解説に0.9%表記があり、次 relay で一次/詳細振り分けを再確認して競合処理すること。
9. `Pフィーバー戦姫絶唱シンフォギア4 Light ver.` — LT eligibility must be checked separately; do not merge with LT-Light

Calendar evidence retained:
- https://1geki.jp/newmachinecalender/202508/
- https://p-kn.com/calendar/202508/
- https://pachinkopachisro.com/archives/58760696.html

## Effective DB state
Previous effective state: 120 machine records / 119 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **121**
- COMPLETE_CORE: **120**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-08-04 OPEN boundary with `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.`. LT搭載は確認済み。通常時LT直行率0.2% vs 必勝本LT解説0.9%の競合候補を一次/詳細資料で再探索し、平均せず処理する。その後 `Pフィーバー戦姫絶唱シンフォギア4 Light ver.` を別スペックとしてLT eligibility監査。LT非搭載ならEXCLUDEDとしてDBレコードを作らない。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.