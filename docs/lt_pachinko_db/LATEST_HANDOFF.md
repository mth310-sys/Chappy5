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
- 2026-01-05 — CLOSED 11/11.
- 2026-01-19 — **CLOSED 3/3**.

## 2026-01-05 boundary — CLOSED
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

## 2026-01-19 boundary — CLOSED 3/3
Boundary sources:
- https://hazuse.com/new-machine/202601h/
- https://p-kn.com/calendar/202601/
- https://1geki.jp/newmachinecalender/202601/

### 1. P閃乱カグラ 189大入りver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-19_p_senran_kagura_189_ooiri_ver.md`
- commit: `9a7414e040acec683c2d2b831ae251b2fec5d010`
- ディ・ライト、型式 `P閃乱カグラLTN-FS`、通常1/189.4、右1/99.9。
- 初当り300個、50%で下位 `絶・秘伝RUSH` ST90回/約60%。
- 下位大当り約11%の4200個（1050×4）でLT `絶・秘伝RUSH（LT）`。LT ST136回/約75%。
- LT中は4200個約50% / 1050個約50%、双方LT継続。
- 通常遊技基準LT突入率 `1/2827` は情報島＋/遊技日本の直接掲載値。独自算出ではない。
- 遊タイム非搭載。パチマガ本文の「198.4」は他の業界/解析資料の1/189.4と不整合の孤立誤記としてcanonical不採用。

### 2. e範馬刃牙 199ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-19_e_hanma_baki_199ver.md`
- commit: `b46d5aa53632c11de184ae6c94416585c4d8d5bf`
- アムテックス、型式 `eバキ2LBM4`、通常1/199.8、右1/1.34。
- 初当り約50%で下位 `バトルMODE`。時短1回/継続約75%、右大当りALL1500個。
- バトル3連勝または1〜2回目大当りの約5%でLTジャッジ `地上最強の親子喧嘩`。成功約75%でLT `史上最強バトルMODE86`。
- LTは時短1回or10000回、継続約86%。LT大当りALL1500個、約43%で時短10000回、約57%で時短1回。
- 左打ち1500BONUSからVストック/LT直行の例外経路あり。具体振分率と通常遊技基準総LT到達率は直接値未確認のため推測しない。
- 遊タイム非搭載。

### 3. e ULTRAMAN 4500超ライト — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-01-19_e_ultraman_4500_chou_light.md`
- commit: `c507e5c1cdb38dba6d8d0853064ac7665e3b875f`
- オッケー．（製造: 京楽産業.）、型式 `eULTRAMAN-111verK4`。
- 通常約1/111.9、右約1/15.1。初当り300個の33%でLT直行、67%通常。非LT下位RUSHなし。
- LT `リミッター解除RUSH` はST10回/継続約50%。
- LT中99%で4500個（1500×3）、1%で9000個（1500×6）、双方LT継続。
- 京楽公式で直LT、LT名、33%、ST10/約50%、4500/9000定義を確認。遊タイム非搭載。

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。

## Effective DB state
Previous: 169 machine records / 167 COMPLETE_CORE / 2 CONFLICT.
This relay added 3 COMPLETE_CORE records.
- machine records: **172**
- COMPLETE_CORE: **170**
- CONFLICT: **2**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next chronological boundary
January calendar has no later boundary after 2026-01-19. Advance to **2026-02-02**.

### Next restart point
**Start OPEN 2026-02-02 boundary by fully enumerating all pachinko candidates from multiple calendars before collecting.** Do not assume only LT-tagged search hits form the complete boundary. Cross-check HAZUSE/K-Navi/一撃 and other calendar sources, then audit candidates in listed order. LT-negative candidates receive no machine record but exclusion evidence should be retained in this handoff.

For every positive LT machine: duplicate-search first; collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
