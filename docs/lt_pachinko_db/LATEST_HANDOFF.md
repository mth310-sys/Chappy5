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
3. P【超甘LT】華牌RR 1/49×99de遊タイム
4. e吉宗 極乗3000ver.
5. PA清流物語4 ウキウキ79ver.
6. eソードアート・オンライン 閃光の軌跡 99Ver.
7. eようこそ実力至上主義の教室へ
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
### e ゴジラ対エヴァンゲリオン2 超デカゴールド — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_e_godzilla_vs_evangelion2_chodeka_gold.md`
- commit: `dbf1b1da06fe01f8b431fc1fc55aaf618c7010ce`
- ビスティ、型式 `eゴジラ対エヴァンゲリオン2TR`、検定510468、導入2026-01-05。
- 通常図柄揃い約1/299.9、右図柄揃い約1/32.3、転落小当り約1/107。
- 初当り約30%でLT `シン・バトルモード暴走` へ直接突入。非LT下位RUSHなし。特図1は1500個+LT約0.5% / 300個+LT約29.5% / 300個通常約70%。
- LTは時短10000回を転落まで継続し、転落後残保留4個の引き戻し約11.8%込みTOTAL継続約80%。
- 特図2は3000個+α+G覚醒モード約5% / 3000個+G覚醒モード約25% / 1500個+LT約70%。3000個=1500個×2回。
- G覚醒モードは一部3000個から入る出玉上乗せ状態。1500個上乗せ約50%ループ、終了後LTへ復帰。LT本体とは分離して記録。
- 遊技通信、HAZUSE、情報島＋、P-WORLD、一撃、なな徹で横断照合。conflictsなし。

Sources checked 2026-09-23:
- https://news.p-world.co.jp/articles/32624/yugitsushin
- https://hazuse.com/hd/510468h/
- https://p-johojima.jp/machine_spec/post-22273/
- https://www.p-world.co.jp/machine/database/10411
- https://1geki.jp/pachinko/e_godzilleva2tr/
- https://nana-press.com/kaiseki/machine/1086/33990/

## Previous record retained
### Pリングにかけろ1 129ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_ring_ni_kakero1_129ver.md`
- commit: `b4b88341f49bdc8ccab1f9d5700a0821c5d24c22`

## Positive LT prechecks for remaining boundary
Do not treat these prechecks as completed records.
- `P【超甘LT】華牌RR 1/49×99de遊タイム`: next audit target; verify LT status, formal model and complete structure before write.
- `e吉宗 極乗3000ver.`: HAZUSE LT page; 1/199.9, `振舞RUSH`突入30%, ST157, 約80%, 3000個=750×4.
- `eソードアート・オンライン 閃光の軌跡 99Ver.`: HAZUSE explicitly LT, 型式 `eソードアート・オンライン～閃光の軌跡～99Ver．K1`, 検定4P1693, 約1/99.90, RUSH55%, LT `LIGHTNING RUSH` 約94%.
- `eようこそ実力至上主義の教室へ`: HAZUSE explicitly LT, 型式 `eようこそ実力至上主義の教室へMA`, 検定510728, 約1/349.9, Sansei R&D.
- `Pフィーバーうたわれるもの LT-Light ver.`: 一撃/解析でLT明示、型式 `PAフィーバーうたわれるものY`, 1/99.9, 仮面RUSH50%/約75%, LT仮面RUSH超。
- `Pフィーバー彼女、お借りします LT-Light ver.`: HAZUSE explicitly LT, 型式 `Pフィーバー彼女、お借りしますLR`, 検定5P0526, 約1/189.7, DREAM RUSH約50%, LT `DREAM RUSH極/ヒロインRUSH` 約86%.
- `e 盾の勇者の成り上がり アルティメット199ver.`: HAZUSE explicitly LT, 型式 `e盾の勇者の成り上がりEREF`, 検定5P0814, 約1/199, RISING RUSH49.9%/突破約40%, LT `裏アルティメットタイム` 約85%.
- ゴジエヴァ銀 / PA清流はLT搭載可否と詳細を改めて監査する。機種名だけで推測しない。

## Effective DB state
Previous: 160 machine records / 159 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **161**
- COMPLETE_CORE: **160**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue the OPEN 2026-01-05 boundary. Next collect/audit candidate #3 `P【超甘LT】華牌RR 1/49×99de遊タイム`, then continue through the 11-machine candidate set without skipping.**

For every positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. LT-negative candidates receive no machine record; retain exclusion evidence in this handoff when audited.
