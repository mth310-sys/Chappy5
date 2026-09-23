# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before positive write

## Closed boundaries retained
- through 2025-11-17: previous closed boundaries retained.
- 2025-12-08 — CLOSED 9/9.
- 2025-12-22 — CLOSED 3/3.

## 2026-01-05 boundary — OPEN
Working candidate set remains 11 machines:
1. e ゴジラ対エヴァンゲリオン2 超デカゴールド — COMPLETE_CORE
2. Pリングにかけろ1 129ver. — COMPLETE_CORE
3. P【超甘LT】華牌RR 1/49×99de遊タイム — COMPLETE_CORE
4. e吉宗 極乗3000ver. — COMPLETE_CORE
5. PA清流物語4 ウキウキ79ver. — LT NON-EQUIPPED / EXCLUDED
6. eソードアート・オンライン 閃光の軌跡 99Ver. — COMPLETE_CORE
7. eようこそ実力至上主義の教室へ — NEXT
8. Pフィーバーうたわれるもの LT-Light ver.
9. Pフィーバー彼女、お借りします LT-Light ver.
10. e 盾の勇者の成り上がり アルティメット199ver.
11. P ゴジラ対エヴァンゲリオン2 超デカシルバー

Boundary calendar sources retained:
- https://hazuse.com/new-machine/202601h/
- https://p-kn.com/calendar/202601/
- https://1geki.jp/newmachinecalender/202601/
- https://pachinkopachisro.com/archives/59511928.html

## Added this relay
### e ソードアート・オンライン 閃光の軌跡 99Ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_e_sword_art_online_senkou_no_kiseki_99ver.md`
- commit: `9e94fd90a45be375dbc29d732e3c6dc71a2da3cb`
- 京楽産業.、型式 `eソードアート・オンライン～閃光の軌跡～99Ver．K1`、導入2026-01-05。
- 一種二種混合 / 甘デジ / LT。通常約1/99.9、右約1/35.2。
- TOTAL RUSH突入55%。内訳はLT `LIGHTNING RUSH`直行1%、下位`SWORD RUSH`54%、通常45%。必勝本のSWORD RUSH54%とTOTAL55%は1% LT直行の包含差であり競合ではない。
- SWORD RUSHはST32回+残保留4個、継続約65%。右大当り全体の16.5%がLT側（1.0%実質次回 + 15.5% ST77+残4）。
- LIGHTNING RUSHはST77回+残4または実質次回まで、TOTAL継続約94%。ST77+残4単体は約90.3%、LT中33%が時短10000回（実質次回）となる合算値。
- LT中振り分け: 10R800個+実質次回33% / 10R800個+LT77+4 32% / 3R240個+LT77+4 35%。
- SWORD RUSH中: 10R800個+LT実質次回1.0% / 10R800個+LT77+4 15.5% / 10R800個+下位48.5% / 3R240個+下位35%。
- LT終了後の残保留大当りはLIGHTNING RUSH中振り分けではなくSWORD RUSH中振り分けで再判定するため、無条件LT継続として扱わない。
- 遊タイム非搭載。通常遊技全体基準の総LT到達率/確率は直接値未確認のため推測しない。
Sources checked 2026-09-23:
- https://www.kyoraku.co.jp/news/detail/853
- https://hisshobon.com/machineinfo/100701/
- https://hisshobon.com/machineinfo/100703/
- https://www.p-world.co.jp/machine/database/10398
- https://1geki.jp/pachinko/e_sao_lt99/51/
- https://1geki.jp/pachinko/e_sao_lt99/52/
- https://nana-press.com/kaiseki/machine/1085/

## Previous records/exclusion retained for this boundary
### e ゴジラ対エヴァンゲリオン2 超デカゴールド — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_e_godzilla_vs_evangelion2_chodeka_gold.md`
- commit: `dbf1b1da06fe01f8b431fc1fc55aaf618c7010ce`

### Pリングにかけろ1 129ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_ring_ni_kakero1_129ver.md`
- commit: `b4b88341f49bdc8ccab1f9d5700a0821c5d24c22`

### P【超甘LT】華牌RR 1/49×99de遊タイム — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_chouama_lt_hanahai_rr_49_yutime.md`
- commit: `ad8187df014cdf6aaac2d8e1ac1f86bbff1f8e5a`

### e吉宗 極乗3000ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_e_yoshimune_kiwaminose_3000ver.md`
- commit: `2a324b26dd28854f744467a956996f0ddcd9e11d`

### PA清流物語4 ウキウキ79ver. — LT NON-EQUIPPED / EXCLUDED
- no machine record per mission rule. 必勝本がラッキートリガー非搭載を明示。

## Positive LT prechecks for remaining boundary
Do not treat these prechecks as completed records.
- `eようこそ実力至上主義の教室へ`: HAZUSE explicitly LT, 型式 `eようこそ実力至上主義の教室へMA`, 検定510728, 約1/349.9, Sansei R&D.
- `Pフィーバーうたわれるもの LT-Light ver.`: 一撃/解析でLT明示、型式 `PAフィーバーうたわれるものY`, 1/99.9, 仮面RUSH50%/約75%, LT仮面RUSH超。
- `Pフィーバー彼女、お借りします LT-Light ver.`: HAZUSE explicitly LT, 型式 `Pフィーバー彼女、お借りしますLR`, 検定5P0526, 約1/189.7, DREAM RUSH約50%, LT `DREAM RUSH極/ヒロインRUSH` 約86%.
- `e 盾の勇者の成り上がり アルティメット199ver.`: HAZUSE explicitly LT, 型式 `e盾の勇者の成り上がりEREF`, 検定5P0814, 約1/199, RISING RUSH49.9%/突破約40%, LT `裏アルティメットタイム` 約85%.
- `P ゴジラ対エヴァンゲリオン2 超デカシルバー`: LT搭載可否と詳細を改めて監査する。兄弟機ゴールドから推測しない。

## Effective DB state
Previous: 163 machine records / 162 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **164**
- COMPLETE_CORE: **163**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue the OPEN 2026-01-05 boundary. Next collect candidate #7 `eようこそ実力至上主義の教室へ`, then #8 onward without skipping.**

For every positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. LT-negative candidates receive no machine record; retain exclusion evidence in this handoff when audited.
