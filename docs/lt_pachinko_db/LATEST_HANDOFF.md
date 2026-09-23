# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before each positive write

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
6. eソードアート・オンライン 閃光の軌跡 99Ver. — NEXT
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
### P【超甘LT】華牌RR 1/49×99de遊タイム — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_chouama_lt_hanahai_rr_49_yutime.md`
- commit: `ad8187df014cdf6aaac2d8e1ac1f86bbff1f8e5a`
- 豊丸産業、型式 `P超甘LT華牌RRAX5`、導入2026-01-05。
- 一種二種混合 / LT3.0+ / 遊タイム。通常1/49.9、特図2 1/16.5（小当り経由込み）。
- 初当りRUSH約40%（詳細39.9%）。特図1: LT直行5R役満0.8%、下位南国翔TIME 39.1%、通常60.1%。
- 下位 `南国翔TIME` はST13回から開始し、ST中大当りごとに1回ずつ増加、最大19回。継続約65〜76%（残保留込み）。
- LT `PREMIUM南国翔TIME`: 特図1/2の5R役満、または8本場/ST19回中の大当りで突入。ST53回、継続約97.2%。
- 特図2振り分け: 5R450個1.2% / 4R360個33.2% / 3R270個32.8% / 2R180個32.8%。
- LT終了後残保留2〜4R当選は下位南国翔TIME 2本場/ST13へ戻る。LT継続として単純化しない。
- 低確率99回消化で遊タイム時短10000回。通常遊技全体基準の総LT到達率は直接値未確認のため推測しない。
Sources checked 2026-09-23:
- https://news.p-world.co.jp/articles/32416
- https://web-greenbelt.jp/post-106901/
- https://p.hisshobon.jp/news/2234
- https://www.p-world.co.jp/machine/database/10397
- https://pachimaga.com/free/mach/maker-p/toyomaru/064482.php
- https://nana-press.com/kaiseki/machine/1078/34225/

### e吉宗 極乗3000ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_e_yoshimune_kiwaminose_3000ver.md`
- commit: `2a324b26dd28854f744467a956996f0ddcd9e11d`
- 大都技研、型式 `e/吉宗極乗3000ver/L06`、導入2026-01-05。
- 一種二種混合 / LT3.0+。通常1/199.9、右1/99.5。
- RUSH=LT直行型。初当り5R750個100%、30%でLT `振舞RUSH`、70%通常。非LT下位RUSHなし。
- 振舞RUSHはST157回、継続約80%。普図STで終了時残保留なし。
- LT中50%は300個、50%は3000個+α。3000個=750個×4。
- 詳細は3000個+1G連12.5% / 3000個+LT37.5% / 300個+LT50%。3000個時の1G連チャレンジ成功約25%、成功時3000個上乗せ後に約25%で再ループ。
- 遊タイム非搭載。
Sources checked 2026-09-23:
- https://web-greenbelt.jp/post-106751/
- https://hisshobon.com/machineinfo/100347/
- https://hisshobon.com/machineinfo/100348/
- https://hisshobon.com/machineinfo/100349/
- https://1geki.jp/pachinko/e_yoshimune/
- https://pachinko.omotenashi-world.com/machine-4932/

## Excluded this relay
### PA清流物語4 ウキウキ79ver. — LT NON-EQUIPPED
- No machine record created per mission rule.
- 遊技通信: 型式 `PA清流物語4HBB`、サンスリー製、2026-01-05、1/79.9→右実質約1/27.3、RUSH60%/約70%。
- 必勝本 explicitly states `ラッキートリガー: 非搭載` and `遊タイム: 非搭載`.
- P-WORLD/パチビー/なな徹も通常の一種二種 + c時短構造のみでLT状態なし。
- 右1400個は700個×2でありLT根拠ではない。
Sources checked 2026-09-23:
- https://news.p-world.co.jp/articles/32170/yugitsushin
- https://hisshobon.com/machineinfo/99985/
- https://www.p-world.co.jp/machine/database/10382
- https://www.pachibee.jp/machines/index/125110021
- https://nana-press.com/kaiseki/machine/1081/33668/

## Previous records retained
### e ゴジラ対エヴァンゲリオン2 超デカゴールド — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_e_godzilla_vs_evangelion2_chodeka_gold.md`
- commit: `dbf1b1da06fe01f8b431fc1fc55aaf618c7010ce`

### Pリングにかけろ1 129ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_ring_ni_kakero1_129ver.md`
- commit: `b4b88341f49bdc8ccab1f9d5700a0821c5d24c22`

## Positive LT prechecks for remaining boundary
Do not treat these prechecks as completed records.
- `eソードアート・オンライン 閃光の軌跡 99Ver.`: HAZUSE explicitly LT, 型式 `eソードアート・オンライン～閃光の軌跡～99Ver．K1`, 検定4P1693, 約1/99.90, RUSH55%, LT `LIGHTNING RUSH` 約94%.
- `eようこそ実力至上主義の教室へ`: HAZUSE explicitly LT, 型式 `eようこそ実力至上主義の教室へMA`, 検定510728, 約1/349.9, Sansei R&D.
- `Pフィーバーうたわれるもの LT-Light ver.`: 一撃/解析でLT明示、型式 `PAフィーバーうたわれるものY`, 1/99.9, 仮面RUSH50%/約75%, LT仮面RUSH超。
- `Pフィーバー彼女、お借りします LT-Light ver.`: HAZUSE explicitly LT, 型式 `Pフィーバー彼女、お借りしますLR`, 検定5P0526, 約1/189.7, DREAM RUSH約50%, LT `DREAM RUSH極/ヒロインRUSH` 約86%.
- `e 盾の勇者の成り上がり アルティメット199ver.`: HAZUSE explicitly LT, 型式 `e盾の勇者の成り上がりEREF`, 検定5P0814, 約1/199, RISING RUSH49.9%/突破約40%, LT `裏アルティメットタイム` 約85%.
- `P ゴジラ対エヴァンゲリオン2 超デカシルバー`: LT搭載可否と詳細を改めて監査する。兄弟機ゴールドから推測しない。

## Effective DB state
Previous: 161 machine records / 160 COMPLETE_CORE / 1 CONFLICT.
This relay added 2 COMPLETE_CORE records and excluded 1 LT-negative candidate.
- machine records: **163**
- COMPLETE_CORE: **162**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue the OPEN 2026-01-05 boundary. Next collect candidate #6 `eソードアート・オンライン 閃光の軌跡 99Ver.`, then #7 onward without skipping.**

For every positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. LT-negative candidates receive no machine record; retain exclusion evidence in this handoff when audited.
