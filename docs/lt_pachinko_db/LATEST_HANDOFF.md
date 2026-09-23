# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before every positive write

## Closed boundaries retained
- through 2025-11-17: previous closed boundaries retained.
- 2025-12-08 — CLOSED 9/9.
- 2025-12-22 — CLOSED 3/3.
- 2026-01-05 — **CLOSED 11/11**.

## 2026-01-05 boundary — CLOSED
Candidate set audited in order:
1. e ゴジラ対エヴァンゲリオン2 超デカゴールド — COMPLETE_CORE
2. Pリングにかけろ1 129ver. — COMPLETE_CORE
3. P【超甘LT】華牌RR 1/49×99de遊タイム — COMPLETE_CORE
4. e吉宗 極乗3000ver. — COMPLETE_CORE
5. PA清流物語4 ウキウキ79ver. — LT NON-EQUIPPED / EXCLUDED
6. eソードアート・オンライン 閃光の軌跡 99Ver. — COMPLETE_CORE
7. eようこそ実力至上主義の教室へ — COMPLETE_CORE
8. Pフィーバーうたわれるもの LT-Light ver. — CONFLICT (core collected; 遊タイム搭載可否のみ未解決)
9. Pフィーバー彼女、お借りします LT-Light ver. — COMPLETE_CORE
10. e 盾の勇者の成り上がり アルティメット199ver. — COMPLETE_CORE
11. P ゴジラ対エヴァンゲリオン2 超デカシルバー — COMPLETE_CORE

Boundary calendar sources retained:
- https://hazuse.com/new-machine/202601h/
- https://p-kn.com/calendar/202601/
- https://1geki.jp/newmachinecalender/202601/
- https://pachinkopachisro.com/archives/59511928.html

## Added this relay
### Pフィーバー彼女、お借りします LT-Light ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_fever_kanojo_okarishimasu_lt_light_ver.md`
- commit: `d79f4025c6ba7f3908c1b265a460d6ec76864015`
- SANKYO、型式 `Pフィーバー彼女、お借りしますLR`、導入2026-01-05。
- 通常約1/189.7、DREAM RUSH約1/72.5・ST50回・継続約50%、図柄揃い時RUSH約50%。
- DREAM RUSH中に大当りを2回獲得するとLT `DREAM RUSH極 / ヒロインRUSH`。LT約1/36.7、ST70回、継続約86%。
- 特図1詳細: 1000個+RUSH 6.0% / 400個+RUSH 44.1% / 400個通常49.9%。
- 特図2: 800個50% / 1400個38% / 2000〜3200個12%。特図2大当り（800個or200個）4回分合計値を含むため単一大当り出玉としない。
- 遊タイム非搭載を解析資料で確認。通常遊技全体基準の総LT到達率は直接公表値未確認のため独自算出しない。

### e 盾の勇者の成り上がり アルティメット199ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_e_tate_no_yuusha_ultimate_199ver.md`
- commit: `de4b7271be1a22432b57ac3e8953dfde5cbb3423`
- タイヨーエレック製 / Sammy、型式 `e盾の勇者の成り上がりEREF`、導入2026-01-05。
- 通常約1/199、右約1/45.2、RISING RUSH49.9%。RISING RUSHは転落約1/23.7より先に大当りを取る突破型でLT突破約40%。
- 初当り2.1%はLT `裏アルティメットタイム` 直行。RISING RUSH突破時も3000/4500個+αを伴いLTへ。
- LTは80回or10000回+残4、残保留込み継続約85%。LT中1500個or3000個+α、残保留引き戻しは3000個+α。
- 3000/4500/+αは複数大当り・上乗せを含むため単一10R1500個と分離。
- 遊技通信記事の導入予定「2024年12月上旬」は、グリーンべると/K-Navi等の2026-01-05および当該追加スペックの時系列と不整合。canonical releaseDateは2026-01-05、記事誤記として注記。

### P ゴジラ対エヴァンゲリオン2 超デカシルバー — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_godzilla_vs_evangelion2_chou_deka_silver.md`
- commit: `40d671ab4e18168fb2250346e5f85a24559f1dfd`
- ビスティ、型式 `Pゴジラ対エヴァンゲリオン2LV`、導入2026-01-05。
- 通常約1/174.9、右約1/15.1、転落約1/94.7。RUSH=LTの直LTで初当り約25%。
- 特図1: 1000個+LT 0.5% / 300個+LT 24.5% / 300個通常75%。
- LT `シン・バトルモード暴走` は時短10000回（転落で終了）+残4。残保留引き戻し約24.0%込みTOTAL継続約90%。
- LT大当り75%は400個、25%は800個+αでG覚醒モード。800=400×2。G覚醒は400個上乗せ40/50/66/80%ループで終了後LT復帰。

## Existing unresolved record retained
### Pフィーバーうたわれるもの LT-Light ver. — CONFLICT
- record: `docs/lt_pachinko_db/machines/2026-01-05_p_fever_utawarerumono_lt_light_ver.md`
- core LT structure collected.
- `ceilingOrSupport` only unresolved conflict: なな徹 says 遊タイム非搭載; パチ＆スロ必勝本 says 搭載; official spec did not resolve activation condition/benefit. Keep CONFLICT; do not average.

## Effective DB state
Previous: 166 machine records / 164 COMPLETE_CORE / 2 CONFLICT.
This relay added 3 COMPLETE_CORE records.
- machine records: **169**
- COMPLETE_CORE: **167**
- CONFLICT: **2**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next chronological boundary discovery
HAZUSE January calendar shows next boundary **2026-01-19**, with 3 pachinko candidates:
1. `P閃乱カグラ 189大入りver.` — NEXT; positive LT precheck complete. D-light, 型式 `P閃乱カグラLTN-FS`, 通常1/189.4, RUSH50%/約60% (ST90), LT約75% (ST136), RUSH中11%でLT, 4200個=1050×4。情報島＋にLT突入率1/2827の直接値あり。Do full cross-check before write.
2. `e範馬刃牙 199Ver.` — audit LT status/spec next after #1.
3. `e ULTRAMAN 4500超ライトver.` — audit LT status/spec next after #2.
Boundary sources:
- https://hazuse.com/new-machine/202601h/
- https://p-kn.com/calendar/202601/

## Next restart point
**Start OPEN 2026-01-19 boundary with candidate #1 `P閃乱カグラ 189大入りver.`. Duplicate-search first, then full collection/cross-check. Do not skip #2/#3.**

For every positive LT machine: collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. LT-negative candidates receive no machine record; retain exclusion evidence in this handoff when audited. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
