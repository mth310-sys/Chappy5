# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-08-04 `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.`
- existing same-series records / duplicate search checked before write

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
- `Pクイーンズブレイド奈落5400` — COMPLETE_CORE

## This relay
### Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver. — COMPLETE_CORE
- SANKYO / 型式 `PAフィーバー戦姫絶唱シンフォギア4YS` / 2025-08-04。
- 1種2種混合 / 普図ST。通常約1/99.9、最終決戦約1/2.2、RUSH中約1/38。
- 通常初当り約99.8%は約300個+最終決戦（時短1回）、約0.2%は約1500個+LT `超絶唱RUSH` 直行。
- 最終決戦突破約45% → `絶唱RUSH` ST45回 / 継続約70%。絶唱RUSH中大当り約9%の約1500個からLTへ。
- LT `超絶唱RUSH` はST70回 / 継続約85%。LT中は約3000個20% / 1500個10% / 1000個20% / 500個+実質次回5% / 500個45%。複数回大当り合計表記は単一出玉と分離。
- 通常時LT直行率の事前競合候補を再監査。P-WORLD、HAZUSE、一撃、必勝本詳細振り分け、複数解析が約0.2%で一致。必勝本の別ページ「LT解説」のみ約0.9%だが、同サイト自身の詳細振り分けが0.2%であり孤立誤記と判断。0.2%採用、平均せず、notesに0.9%誤記を保存。
- 通常遊技全体基準の総LT到達率は直接値未確認のためUNVERIFIED。経路値から独自算出しない。
- record: `docs/lt_pachinko_db/machines/2025-08-04_p_fever_symphogear_4_lt_light_ver.md`
- commit: `892c55bb0c9a776782b998a542605c6f0cdc16cf`

Sources:
- https://www.sankyo-fever.jp/collection/974/
- https://news.p-world.co.jp/articles/31046/yugitsushin
- https://www.p-world.co.jp/machine/database/10292
- https://hazuse.com/machine/pachinko/5P0116/genre/103/
- https://1geki.jp/pachinko/p_sympho4_lt99/55/
- https://p.hisshobon.jp/machine/4563/1/110237
- https://p.hisshobon.jp/machine/4563/1/110236
- https://p.hisshobon.jp/machine/4563/1/110943

### Pフィーバー戦姫絶唱シンフォギア4 Light ver. — EXCLUDED / LT非搭載
- SANKYO / 型式 `PAフィーバー戦姫絶唱シンフォギア4AR` / 2025-08-04。
- YS（LT-Light）とは別型式。SANKYO公式コレクションでもAR/YSを別販売名・別型式として掲載。
- パチマガスロマガ詳細スペックに `ラッキートリガー: なし` の直接記載あり。
- ARにも名称 `超絶唱RUSH`（ST70/約85%）は存在するが、これはLTではない上位状態。名称だけでLTと誤認しない。
- よってLT専用DBには機種レコードを作成しない。

Exclusion sources:
- https://www.sankyo-fever.jp/collection/974/
- https://news.p-world.co.jp/articles/31053/yugitsushin
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/541/kh02.php

## 2025-08-04 — CLOSED 9/9
Independent-calendar candidate queue audit completed.
1. `e牙狼12黄金騎士極限` — LT搭載 — COMPLETE_CORE
2. `e黄門ちゃま 寿限無 LLサイズ` — LT搭載 — COMPLETE_CORE
3. `eシャーマンキング` — LT搭載 — COMPLETE_CORE
4. `eシャーマンキング でっけぇえなver.` — LT搭載 — COMPLETE_CORE
5. `e真・一騎当千～軍神覚醒～396ver.` — LT搭載 — COMPLETE_CORE
6. `e真・一騎当千～軍神覚醒～319大入りver.` — LT搭載 — COMPLETE_CORE
7. `Pクイーンズブレイド奈落5400` — LT搭載 — COMPLETE_CORE
8. `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.` — LT搭載 — COMPLETE_CORE
9. `Pフィーバー戦姫絶唱シンフォギア4 Light ver.` — LT非搭載 — EXCLUDED

Calendar evidence retained:
- https://1geki.jp/newmachinecalender/202508/
- https://p-kn.com/calendar/202508/
- https://pachinkopachisro.com/archives/58760696.html

## Effective DB state
Previous effective state: 121 machine records / 120 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record; AR Light ver. excluded without DB record.
- machine records: **122**
- COMPLETE_CORE: **121**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-08-04 boundary is CLOSED. Re-enumerate independent new-machine calendars chronologically after 2025-08-04, identify the next actual pachinko introduction boundary, audit every candidate for LT eligibility, and register LT-equipped machines only. Do not infer LT from an upper-RUSH name alone; verify explicit LT status and separate same-series model numbers.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.