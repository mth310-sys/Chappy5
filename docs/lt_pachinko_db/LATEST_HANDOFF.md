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
7. eようこそ実力至上主義の教室へ — COMPLETE_CORE
8. Pフィーバーうたわれるもの LT-Light ver. — CONFLICT (core collected; 遊タイム搭載可否のみ未解決)
9. Pフィーバー彼女、お借りします LT-Light ver. — NEXT
10. e 盾の勇者の成り上がり アルティメット199ver.
11. P ゴジラ対エヴァンゲリオン2 超デカシルバー

Boundary calendar sources retained:
- https://hazuse.com/new-machine/202601h/
- https://p-kn.com/calendar/202601/
- https://1geki.jp/newmachinecalender/202601/
- https://pachinkopachisro.com/archives/59511928.html

## Added this relay
### Pフィーバーうたわれるもの LT-Light ver. — CONFLICT
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_fever_utawarerumono_lt_light_ver.md`
- commit: `4d7e3f3ef000916ed05790fd27d6be237deb94dc`
- SANKYO、型式 `PAフィーバーうたわれるものY`、導入2026-01-05。
- 一種二種混合 / 甘デジ / 2段階LT。通常約1/99.9、右約1/14.1（特図2、大当り+小当り合算）。
- 初当り5R約350個。約50%で下位 `仮面RUSH`、約50%通常。
- 仮面RUSHは時短15回+残保留4個、TOTAL継続約75%。右大当りはALL約700個、約5%でLT `仮面RUSH超`、約95%で下位継続。
- LTも時短15回+残4、継続約75%。LT中は約60%で約1400個（700×2）+時短10000回＝実質次回まで、約40%で700個+LT。次回大当りでも同じ約60%振り分けを再抽選するため1400個上乗せループ構造。
- 通常初当り全体基準の総LT到達率は直接公表値未確認。経路値から独自算出しない。
- `ceilingOrSupport`のみ未解決競合: なな徹は遊タイム「非搭載」、パチ＆スロ必勝本基本スペックは「搭載」。SANKYO公式スペックでは発動条件/恩恵の明示を確認できず、平均・推測せずCONFLICT。後続QAで一次資料または追加高信頼資料を再探索する。
Sources checked 2026-09-23:
- https://www.sankyo-fever.jp/products/machine_list/pce/
- https://www.sankyo-fever.jp/products/machine_list/pce/spec/
- https://news.p-world.co.jp/articles/32131/yugitsushin
- https://yugi-nippon.com/pachinko-new-machine/post-73867/
- https://pachimaga.com/free/mach/maker-p/sankyo/064528.php
- https://nana-press.com/kaiseki/machine/1082/33664/
- https://hisshobon.com/machineinfo/99982/
- https://p.hisshobon.jp/machine/4643/1/112233
- https://www.p-world.co.jp/machine/database/10381

## Previous records/exclusion retained for this boundary
- `eようこそ実力至上主義の教室へ` — COMPLETE_CORE; record `2026-01-05_e_youkoso_jitsuryoku_shijou_shugi_no_kyoushitsu.md`; commit `6519cef5bca1bd01a3dabe3ae8081799cbd04d9c`.
- `eソードアート・オンライン 閃光の軌跡 99Ver.` — COMPLETE_CORE; record `2026-01-05_e_sword_art_online_senkou_no_kiseki_99ver.md`; commit `9e94fd90a45be375dbc29d732e3c6dc71a2da3cb`.
- `e ゴジラ対エヴァンゲリオン2 超デカゴールド` — COMPLETE_CORE; commit `dbf1b1da06fe01f8b431fc1fc55aaf618c7010ce`.
- `Pリングにかけろ1 129ver.` — COMPLETE_CORE; commit `b4b88341f49bdc8ccab1f9d5700a0821c5d24c22`.
- `P【超甘LT】華牌RR 1/49×99de遊タイム` — COMPLETE_CORE; commit `ad8187df014cdf6aaac2d8e1ac1f86bbff1f8e5a`.
- `e吉宗 極乗3000ver.` — COMPLETE_CORE; commit `2a324b26dd28854f744467a956996f0ddcd9e11d`.
- `PA清流物語4 ウキウキ79ver.` — LT NON-EQUIPPED / EXCLUDED; no record per mission rule.

## Positive LT prechecks for remaining boundary
Do not treat these prechecks as completed records.
- `Pフィーバー彼女、お借りします LT-Light ver.`: HAZUSE explicitly LT, 型式 `Pフィーバー彼女、お借りしますLR`, 検定5P0526, 約1/189.7, DREAM RUSH約50%, LT `DREAM RUSH極/ヒロインRUSH` 約86%.
- `e 盾の勇者の成り上がり アルティメット199ver.`: HAZUSE explicitly LT, 型式 `e盾の勇者の成り上がりEREF`, 検定5P0814, 約1/199, RISING RUSH49.9%/突破約40%, LT `裏アルティメットタイム` 約85%.
- `P ゴジラ対エヴァンゲリオン2 超デカシルバー`: LT搭載可否と詳細を改めて監査する。兄弟機ゴールドから推測しない。

## Effective DB state
Previous: 165 machine records / 164 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 machine record with core data collected but unresolved playtime conflict.
- machine records: **166**
- COMPLETE_CORE: **164**
- CONFLICT: **2**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue the OPEN 2026-01-05 boundary. Next collect candidate #9 `Pフィーバー彼女、お借りします LT-Light ver.`, then #10 and #11 without skipping.**

For every positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. LT-negative candidates receive no machine record; retain exclusion evidence in this handoff when audited. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
