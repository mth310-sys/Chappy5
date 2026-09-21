# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `e範馬刃牙`
- duplicate search performed before record creation

## This relay
### e範馬刃牙 — COMPLETE_CORE
- アムテックス（平和） / 型式 `eバキ2XAM2` / 2025-06-02。
- スマパチ・1種2種混合・LT搭載。2026-01-19の `e範馬刃牙 199ver.` とは別スペック。
- BONUS 1/499.9（バキチャージ・バトルMODE直通を除く）、バキチャージ1/333.3、実質大当り約1/199.8。LT中1/1.25。
- 独立した通常RUSHなし。BONUS後のジャッジ勝利約50%で約3000個（1500個×2）+LT `バトルMODE`、敗北約50%は約1500個+通常。バキチャージ昇格時などにもLT経路あり。
- LTは1回抽選・継続約80%。LT中当選は約80% 約3000個、約20% 約1500個でいずれもLT継続。
- 通常時全当選を分母とする総LT到達率、バキチャージ→LTの具体割合は十分な横断後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。独自合算しない。
- record: `docs/lt_pachinko_db/machines/2025-06-02_e_hanma_baki.md`
- commit: `0197ea45ff9e91138f421f606725df26d58d772b`
Sources:
- https://www.heiwanet.co.jp/products/pachinko/p-bk2/
- https://news.p-world.co.jp/articles/30676/greenbelt
- https://www.p-world.co.jp/machine/database/10260
- https://1geki.jp/pachinko/e_hanmabaki/
- https://1geki.jp/pachinko/e_hanmabaki/51/
- https://hazuse.com/hd/410948-2/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — CLOSED
### 2025-05-19 — CLOSED (LT-positive recordなし)
### 2025-06-02 — OPEN
Independent calendars previously agreed on 11 pachinko introductions. Same-day queue:
1. `Pフィーバーマクロスフロンティア5 LT-Light ver.` — COMPLETE_CORE
2. `P緋弾のアリア～緋緋神降臨～88Ver.` — COMPLETE_CORE
3. `PLT激デジ ジューシーハニー極嬢` — COMPLETE_CORE
4. `e 新・必殺仕置人 超斬撃99` — COMPLETE_CORE
5. `P DD北斗の拳3 百突99ver.` — EXCLUDED / LT-negative
6. `eF彼女、お借りします` — COMPLETE_CORE
7. `e範馬刃牙` — COMPLETE_CORE
8. `PA海物語3R3` — **NEXT: LT status verify; collect full core/LT record if positive**
9. `デカスタ P戦国無双` — LT status verify
10. `デジハネPモンスターハンターライズ` — LT status verify
11. `e冴えない彼女の育てかた` — LT status verify
Calendar cross-check retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://hazuse.com/new-machine/202506-2/

## Effective DB state
Previous effective state: 100 records / 99 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **101**
- COMPLETE_CORE: **100**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-06-02 with `PA海物語3R3`. First verify LT-positive/negative status and duplicate absence; if LT-positive, collect full core/LT record. Then proceed through `デカスタ P戦国無双` → `デジハネPモンスターハンターライズ` → `e冴えない彼女の育てかた`. Do not close 2025-06-02 until all 11 candidates have LT status checked and the boundary has been re-enumerated against at least two independent calendars. Only LT-positive machines receive records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
