# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `Pフィーバーマクロスフロンティア5 LT-Light ver.`

## This relay
### Pフィーバーマクロスフロンティア5 LT-Light ver. — COMPLETE_CORE
- SANKYO / 型式 `Pフィーバーマクロスフロンティア5YS` / 2025-06-02。
- 通常図柄揃い約1/99.9、右打ち約1/56.9（大当り・小当り合算）。1種2種混合。
- RUSH TOTAL突入約55%。これはLT直行、GALAXY RUSH直行、強行突破チャレンジ引き戻し（c時短含む）の合算定義。
- 下位 `GALAXY RUSH`: ST55回+残保留4、TOTAL継続約67%。
- LT `SPECIAL GALAXY RUSH`: ST135回+残保留4、TOTAL継続約92%。
- 通常時約0.1%で10R約800個+LT直行。通常時約50.6%でGALAXY RUSH、約49.3%で強行突破チャレンジ（ST1+残4）。
- 下位RUSH/チャレンジ右打ち図柄揃い時は約10%で10R約800個+LT、約85%で10R約800個+下位RUSH、約5%でSTリセット。解析精密値85.3%/4.7%は丸め差として保持しCONFLICTにしない。
- LT中図柄揃いは10R約800個+LT 100%。ただしLT中残保留当選は下位側振り分け適用との解析注記あり。
- 通常初当り全体を分母とする総LT到達率は直接公表値を十分な横断後も確認できず `UNVERIFIED_AFTER_RESEARCH`。独自合算しない。
- record: `docs/lt_pachinko_db/machines/2025-06-02_p_fever_macross_frontier_5_lt_light_ver.md`
- commit: `3f2bb6b7581557fb51ace95c928d6a3fc741a250`
Sources:
- https://news.p-world.co.jp/articles/30462/yugitsushin
- https://news.p-world.co.jp/articles/30430
- https://www.p-world.co.jp/machine/database/10246
- https://hazuse.com/machine/pachinko/4P1510/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/536/kh01.php
- https://p-johojima.jp/machine_spec/post-3109/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — CLOSED
### 2025-05-19 — CLOSED (LT-positive recordなし)
### 2025-06-02 — OPEN
Independent calendars agree on 11 pachinko introductions. First LT-positive machine now registered. Continue same-day queue without skipping:
1. `Pフィーバーマクロスフロンティア5 LT-Light ver.` — COMPLETE_CORE
2. `P緋弾のアリア～緋緋神降臨～88Ver.` — **NEXT: LT status verify, collect if positive**
3. `PLT激デジ ジューシーハニー極嬢` — LT candidate
4. `e 新・必殺仕置人 超斬撃99` — LT status verify
5. `P DD北斗の拳3 百突99ver.` — LT status verify
6. `eF彼女、お借りします` — LT status verify
7. `e範馬刃牙` — LT status verify
8. `PA海物語3R3` — LT status verify
9. `デカスタ P戦国無双` — LT status verify
10. `デジハネPモンスターハンターライズ` — LT status verify
11. `e冴えない彼女の育てかた` — LT status verify
Calendar cross-check:
- https://p-johojima.jp/machine_spec/post-2074/
- https://hazuse.com/new-machine/202506-2/

## Effective DB state
Previous effective state: 95 records / 94 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **96**
- COMPLETE_CORE: **95**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-06-02 with `P緋弾のアリア～緋緋神降臨～88Ver.`. First verify LT-positive/negative status and duplicate absence; if LT-positive, collect full core/LT record. Then proceed through the exact same-day queue above. Do not close 2025-06-02 until all 11 candidates have LT status checked and the boundary has been re-enumerated against at least two independent calendars. Only LT-positive machines receive records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
