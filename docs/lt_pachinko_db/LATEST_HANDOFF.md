# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `P緋弾のアリア～緋緋神降臨～88Ver.`
- duplicate search for the target: no existing machine record found before creation

## This relay
### P緋弾のアリア～緋緋神降臨～88Ver. — COMPLETE_CORE
- 藤商事 / 型式 `P緋弾のアリア～緋緋神降臨～88Ver.FVA` / 2025-06-02。
- LT搭載を業界一次系・複数解析で直接確認。甘デジ / 1種2種混合 / 普図抽選 / c時短搭載。
- 通常時約1/88.2は、特図1大当り1/129.7と特図1 c時短1/275.3の合算値。図柄揃い単独確率と混同しない。
- 強襲任務以上への突入率100%（LBR直行を含む）。通常時約0.7%はLBR直行、約67.3%は3R約300個+強襲任務、約32.0%は出玉なしc時短+強襲任務。
- 強襲任務: 50回 / 当選確率1/129.9 / 当選期待度約32%。
- 下位 `LBR（LIGHTNING BULLET RUSH）`: 80回 / 当選確率1/67.8 / 継続約70%。
- LT `超LBR（超LIGHTNING BULLET RUSH）`: 175回 / 当選確率1/67.8 / 継続約93%。
- 強襲任務・LBR中の当選約12.7%で10R約1000個+超LBR。残りは10R約1000個+LBR約20.9%、3R約300個+LBR約66.4%。
- LT中は10R約1000個約33.6% / 3R約300個約66.4%、いずれもLT継続。
- LT発動時の初回は実質次回大当り濃厚との解析記載あり。
- 通常初当り全体を分母とする総LT到達率は直接公表値を十分な横断後も確認できず `UNVERIFIED_AFTER_RESEARCH`。経路確率から独自合算しない。
- record: `docs/lt_pachinko_db/machines/2025-06-02_p_hidan_no_aria_hihi_shin_korin_88ver.md`
- commit: `0a1115cd875a279428432b8de680e03f5fc3456a`
Sources:
- https://news.p-world.co.jp/articles/30808/yugitsushin
- https://yugi-nippon.com/pachinko-new-machine/post-70530/
- https://hazuse.com/machine/pachinko/4P1104/
- https://hazuse.com/machine/pachinko/4P1104/genre/103/
- https://hisshobon.com/machineinfo/97698/
- https://p.hisshobon.jp/machine/4536/1/109621
- https://1geki.jp/pachinko/p_hidannoaria_lt88/
- https://www.pachibee.jp/machines/index/125050009

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — CLOSED
### 2025-05-19 — CLOSED (LT-positive recordなし)
### 2025-06-02 — OPEN
Independent calendars agree on 11 pachinko introductions. Continue same-day queue without skipping:
1. `Pフィーバーマクロスフロンティア5 LT-Light ver.` — COMPLETE_CORE
2. `P緋弾のアリア～緋緋神降臨～88Ver.` — COMPLETE_CORE
3. `PLT激デジ ジューシーハニー極嬢` — **NEXT: LT candidate; verify and collect if positive**
4. `e 新・必殺仕置人 超斬撃99` — LT status verify
5. `P DD北斗の拳3 百突99ver.` — LT status verify
6. `eF彼女、お借りします` — LT status verify
7. `e範馬刃牙` — LT status verify
8. `PA海物語3R3` — LT status verify
9. `デカスタ P戦国無双` — LT status verify
10. `デジハネPモンスターハンターライズ` — LT status verify
11. `e冴えない彼女の育てかた` — LT status verify
Calendar cross-check retained from prior relay:
- https://p-johojima.jp/machine_spec/post-2074/
- https://hazuse.com/new-machine/202506-2/

## Effective DB state
Previous effective state: 96 records / 95 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **97**
- COMPLETE_CORE: **96**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-06-02 with `PLT激デジ ジューシーハニー極嬢`. First verify LT-positive/negative status and duplicate absence; if LT-positive, collect full core/LT record. Then proceed through the exact same-day queue above. Do not close 2025-06-02 until all 11 candidates have LT status checked and the boundary has been re-enumerated against at least two independent calendars. Only LT-positive machines receive records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
