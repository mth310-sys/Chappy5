# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- latest record `2025-11-04_e_gen_gaiden_episode_of_dairyu.md`: inherited from previous relay
- duplicate search performed before write

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
5. e ノーゲーム・ノーライフ 319Ver. — **COMPLETE_CORE this relay**
6. e ノーゲーム・ノーライフ 199Ver. — **NEXT / LT confirmed, collect full record**
7. e 仮面ライダー電王 デカヘソ239 — pending LT audit
8. P いくさの子 戦極最強ドデカ199ver. — pending LT audit
9. P Re:ゼロから始める異世界生活 鬼がかり 199ver. — pending LT audit
10. P Re:ゼロから始める異世界生活 鬼がかり 99ver. — pending LT audit
11. P転生したらスライムだった件129ver. — pending LT audit
12. PA GoGo富士山 — pending LT audit
Do not assume all candidates are LT-equipped; create records only after positive LT confirmation.

## e ノーゲーム・ノーライフ 319Ver. — COMPLETE_CORE
- 高尾 / TAKAO。型式 `eノーゲーム・ノーライフV1B`。導入2025-11-04。LT3.0+ / 一種二種混合 / 下位ST→LT。
- 通常1/319.6。右約1/17.7は大当り1/319.6＋小当り1/18.8の合算。
- 初当りは10R約1500個100%。60%で下位 `ノゲノラッシュ`、40%通常。
- ノゲノラッシュは10回＋残保留4個、TOTAL約56%（電サポ10回約43.9%＋残保留4個約20.6%）。
- 電サポ10回内で大当りするとLT `ノゲノラッシュHYPER`。32回＋残保留4個、TOTAL約88%（電サポ32回約84.2%＋残保留4個約20.6%）。
- 右大当りは10R約1500個100%。ただしメーカー公式に「残保留での大当り後はノゲノラッシュへ突入」と注記があるため、残保留当選を無条件HYPER継続として扱わない。
- 通常遊技全体基準の総LT到達率/確率は直接公表値未確認。60%×約56%等から独自算出せず `UNVERIFIED_AFTER_RESEARCH`。
- 199Ver.（型式V3C、通常1/199.8、RUSH50%、初当り2R約300個）と明確に分離。
- conflicts: []。
- record: `docs/lt_pachinko_db/machines/2025-11-04_e_no_game_no_life_319.md`
- record commit: `5294e2cca5b84c0ef27efcf435d94040c30e38cc`

Sources:
- https://www.takao.gr.jp/sp/product/2025/no-game-no-life.html
- https://news.p-world.co.jp/articles/31530/yugitsushin
- https://hisshobon.com/machineinfo/98752/
- https://1geki.jp/pachinko/e_ngnl_319/
- https://nana-press.com/kaiseki/machine/1035/31924/
- https://www.pachibee.jp/machines/index/125090016
- https://chonborista.com/pachinko/takao/245640/

## Effective DB state
Previous effective state: 145 machine records / 144 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **146**
- COMPLETE_CORE: **145**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-11-04 boundary remains OPEN. Resume with `e ノーゲーム・ノーライフ 199Ver.`. LT is already positively confirmed: type LT3.0+, model `eノーゲーム・ノーライフV3C`, normal 1/199.8, RUSH entry 50%, lower RUSH about 56%, LT `ノゲノラッシュHYPER` about 88%. Collect the exact initial payout/distribution, right-side structure, residual-hold treatment and direct LT-arrival publication status, then save as a separate sibling record.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate sibling specs, and never infer unpublished total LT arrival rates from route probabilities.
