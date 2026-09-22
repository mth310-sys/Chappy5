# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered

## 2025-09-22 boundary — OPEN
1. `Pルパン三世 ONE COLLECTION 100ver.` — COMPLETE_CORE this relay
2. `～廻るヘソワイド～PホワイトシャカRUSH` — NEXT; LT搭載判定から開始
3. `デカスタPデビルマン THE FINAL 179ver.` — already collected under canonical first-introduction date 2025-09-08; do not duplicate even though some calendars show 9/22 rollout

Boundary discovery:
- 情報島＋の2025-09-22新台記事はパチンコ2機種としてルパン100ver.とホワイトシャカRUSHを列挙。
- ルパン100ver.は1geki/HAZUSE/G-net/グリーンべるとで2025-09-22導入を一致確認。
- 境界CLOSE前にホワイトシャカ処理後、少なくとももう1系統の独立新台カレンダーで9/22全候補を再列挙すること。

### Pルパン三世 ONE COLLECTION 100ver. — COMPLETE_CORE
- アムテックス / 平和、型式 `Pルパン三世14L0YU1`、2025-09-22、甘デジ、1種2種混合、LT3.0プラス。
- 通常約1/100.1、右打ち約1/66.7。TOTAL RUSH突入50%。
- 通常時: 10R約1000個+LT 0.5% / 4R約400個+GOLDEN TIME65 49.5% / 4R約400個+通常50.0%。
- 下位 `GOLDEN TIME 65`: ST65回、継続約63%。大当りは1800個+LT 13.2% / 1000個+下位継続46.3% / 200個+下位継続40.5%。
- LT `GOLDEN TIME 105`: 通常0.5%直行または下位RUSH中1800個大当り13.2%。ST105回、継続約80%。
- LT中: 平均約3100個+LT継続 約60% / 約200個+LT継続 約40%。平均3100個は2R/9R/10R×複数回の一連合計払い出しで、単一大当り出玉ではない。
- 普図STのため残保留なし。105回スルーで通常へ移行。
- 通常遊技全体基準の総LT到達率は直接公表値未確認。0.5%直行と下位13.2%から独自合算しない。
- record: `docs/lt_pachinko_db/machines/2025-09-22_p_lupin_the_third_one_collection_100.md`
- commit: `13041586915cf313f943920b46764c8afac4f2e2`

Sources:
- https://web-greenbelt.jp/post-99713/
- https://news.p-world.co.jp/articles/31179/greenbelt
- https://www.p-world.co.jp/machine/database/10317
- https://hazuse.com/machine/pachinko/5P0282/
- https://1geki.jp/pachinko/p_lupin_oc_100lt/
- https://hisshobon.com/machineinfo/98512/
- https://p.hisshobon.jp/machine/4577/1/110609
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/067/kh02.php
- https://g-net-ps.com/info/p0460/
- https://p-johojima.jp/colum/post-15224/

## Effective DB state
Previous effective state: 131 machine records / 130 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **132**
- COMPLETE_CORE: **131**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue the 2025-09-22 boundary with `～廻るヘソワイド～PホワイトシャカRUSH`. First verify that this exact spec is LT-equipped. If LT-equipped, duplicate-search then collect formal model code, basic probability, RUSH structure, LT name/entry route/rate/continuation, payout splits and support/ST structure. If non-LT, record the exclusion only in the handoff and do not create a machine record. After that, re-enumerate the full 2025-09-22 boundary using at least two independent new-machine calendars and CLOSE only when candidate coverage is demonstrated. Do not duplicate Devilman 179.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.