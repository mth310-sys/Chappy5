# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- latest record `2025-11-04_e_lupin_vs_cats_eye.md`: checked
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
4. e源外伝 EPISODE OF -大龍- — **COMPLETE_CORE this relay**
5. e ノーゲーム・ノーライフ 319Ver. — **NEXT / LT audit**
6. e ノーゲーム・ノーライフ 199Ver. — pending LT audit
7. e 仮面ライダー電王 デカヘソ239 — pending LT audit
8. P いくさの子 戦極最強ドデカ199ver. — pending LT audit
9. P Re:ゼロから始める異世界生活 鬼がかり 199ver. — pending LT audit
10. P Re:ゼロから始める異世界生活 鬼がかり 99ver. — pending LT audit
11. P転生したらスライムだった件129ver. — pending LT audit
12. PA GoGo富士山 — pending LT audit
Do not assume all candidates are LT-equipped; create records only after positive LT confirmation.

## e源外伝 EPISODE OF -大龍- — COMPLETE_CORE
- 三洋物産。型式 `e源外伝EHLG`。canonical導入2025-11-04。LT3.0プラス / 超WIDE / 一種二種混合 / 二段階転落型。
- 通常約1/199.8。右打ち約1/53.2は大当り約1/199.8＋小当り約1/72.6の合算。
- 特図1は2R約300個100%。25%で下位 `BREAKING BATTLE`、75%通常。
- BREAKING BATTLEは時短10000回相当、転落小当り約1/21.1。通常時7図柄揃いは直行、その他はBONUS後 `10 COUNT JUDGE` 成功経由。
- 参戦人数/保障バトル回数別のLT突破期待度（残保留4個込み）は1回33.6% / 2回52.5% / 3回66.0%。解析資料で参戦人数振り分け1人20% / 2人40% / 3人40%。
- BREAKING BATTLE中に大当りすれば10R約1500個＋LT `EXTRA BATTLE` 100%。
- EXTRA BATTLEは時短10000回相当、転落小当り約1/239.5、継続期待約86.5%。業界の約87%は丸めとして整理。
- 86.5%は転落までの継続期待＋終了後残保留4個引き戻し約7.3%＋EXTRA BONUS∞を含む公表定義。
- LT中大当りは10R約1500個100%。20%が `EXTRA BONUS∞`（次回大当り濃厚）、80%通常LT継続。
- 通常遊技全体基準の総LT到達率/確率は、公式・業界・複数解析を再探索しても直接値未確認。25%と条件別突破率から独自合算せず `UNVERIFIED_AFTER_RESEARCH`。
- conflicts: []。
- record: `docs/lt_pachinko_db/machines/2025-11-04_e_gen_gaiden_episode_of_dairyu.md`
- record final commit: `e56a708c1f58dd06b42e34df33458b88aa15d0e0`

Sources:
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20250828.pdf
- https://yugi-nippon.com/pachinko-new-machine/post-73005/
- https://news.p-world.co.jp/articles/31774/greenbelt
- https://hisshobon.com/machineinfo/99086/
- https://1geki.jp/pachinko/e_gen_ep_dairyu/51/
- https://1geki.jp/pachinko/e_gen_ep_dairyu/53/
- https://p-johojima.jp/machine_spec/post-13972/
- https://nana-press.com/kaiseki/machine/1039/32121/

## Effective DB state
Previous effective state: 144 machine records / 143 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **145**
- COMPLETE_CORE: **144**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-11-04 boundary remains OPEN. Resume with `e ノーゲーム・ノーライフ 319Ver.`. First positively confirm whether this exact 319Ver. is LT-equipped and separate it from the 199Ver.; if LT-equipped, collect/save full core+LT structure. If not LT-equipped, record exclusion in handoff only and continue to `e ノーゲーム・ノーライフ 199Ver.`.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate sibling specs, and never infer unpublished total LT arrival rates from route probabilities.
