# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- latest record `2025-11-04_e_no_game_no_life_319.md`: checked
- sibling-spec separation and duplicate path check performed before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2
- 2025-10-06 — CLOSED / candidate set covered
- 2025-10-20 — CLOSED 2/2

## Current boundary: 2025-11-04 — OPEN
Candidate set in chronological/discovery order:
1. e花の慶次～黄金の一撃 — COMPLETE_CORE
2. eフィーバーもののがたり — COMPLETE_CORE
3. eルパン三世VSキャッツ・アイ — COMPLETE_CORE
4. e源外伝 EPISODE OF -大龍- — COMPLETE_CORE
5. e ノーゲーム・ノーライフ 319Ver. — COMPLETE_CORE
6. e ノーゲーム・ノーライフ 199Ver. — **COMPLETE_CORE this relay**
7. e 仮面ライダー電王 デカヘソ239 — **NEXT / pending LT audit**
8. P いくさの子 戦極最強ドデカ199ver. — pending LT audit
9. P Re:ゼロから始める異世界生活 鬼がかり 199ver. — pending LT audit
10. P Re:ゼロから始める異世界生活 鬼がかり 99ver. — pending LT audit
11. P転生したらスライムだった件129ver. — pending LT audit
12. PA GoGo富士山 — pending LT audit
Do not assume all candidates are LT-equipped; create records only after positive LT confirmation.

## e ノーゲーム・ノーライフ 199Ver. — COMPLETE_CORE
- 高尾 / TAKAO。型式 `eノーゲーム・ノーライフV3C`、検定番号 `5P0829`。導入2025-11-04。LT3.0+ / 一種二種混合 / 下位ST→LT。
- 通常1/199.8。右約1/17.7は大当り1/199.8＋小当り1/19.5の合算。
- 初当りは2R約300個100%。50%で下位 `ノゲノラッシュ`、50%通常。
- ノゲノラッシュは10回＋残保留4個、TOTAL約56%（電サポ10回約43.9%＋残保留4個約20.6%）。
- 電サポ10回内で大当りすると10R約1500個を経てLT `ノゲノラッシュHYPER`。32回＋残保留4個、TOTAL約88%（電サポ32回約84.2%＋残保留4個約20.6%）。
- 右大当りは10R約1500個100%。ただし残保留での大当り後は `ノゲノラッシュ` へ移行するため、残保留当選を無条件HYPER突入/継続として扱わない。
- 通常遊技全体基準の総LT到達率/確率は、公式・業界・複数解析を検索語/資料系統を変えて再探索したが直接公表値未確認。50%×約56%等から独自算出せず `UNVERIFIED_AFTER_RESEARCH`。
- 319Ver.（型式V1B、通常1/319.6、RUSH60%、初当り10R約1500個）と明確に分離。
- conflicts: []。
- record: `docs/lt_pachinko_db/machines/2025-11-04_e_no_game_no_life_199.md`
- record commit: `3ff650ccf7b453d84426d6141c3f7b1b16f0a289`

Sources:
- https://www.takao.gr.jp/sp/product/2025/no-game-no-life.html
- https://news.p-world.co.jp/articles/31527/yugitsushin
- https://g-net-ps.com/info/p0477/
- https://hazuse.com/hd/5p0829/
- https://p.hisshobon.jp/machine/4590/1/110965
- https://1geki.jp/pachinko/e_ngnl_199/
- https://nana-press.com/kaiseki/machine/1035/
- https://pachimaga.com/free/mach/maker-p/takao/064450.php
- https://www.p-world.co.jp/machine/database/10329

## Effective DB state
Previous effective state: 146 machine records / 145 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **147**
- COMPLETE_CORE: **146**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-11-04 boundary remains OPEN. Resume with `e 仮面ライダー電王 デカヘソ239`. First positively confirm that this exact 2025 deka-heso 239 specification is LT-equipped, then collect model number, normal/right probabilities, initial payout/distribution, lower RUSH structure, LT name/route/arrival rate/continuation, right-side payout distribution, residual-hold/C-time handling and game flow. Keep it separate from the 2024 `e仮面ライダー電王` 319.9 specification already in the DB. If LT cannot be positively confirmed after adequate cross-source audit, do not create a machine record; preserve exclusion evidence in the handoff and continue to `P いくさの子 戦極最強ドデカ199ver.`.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate sibling specs, and never infer unpublished total LT arrival rates from route probabilities.
