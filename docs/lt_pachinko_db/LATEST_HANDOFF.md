# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `PLT激デジ ジューシーハニー極嬢`
- duplicate search for target: no existing machine record found before creation

## This relay
### PLT激デジ ジューシーハニー極嬢 — COMPLETE_CORE
- サンセイR&D / 型式 `Pジューシーハニー極嬢77LT-ARB` / 2025-06-02。
- 業界一次系記事・P-WORLD・HAZUSE・必勝本・一撃・なな徹を横断し、LT搭載を直接確認。
- 甘デジ / 1種2種混合 / ST。通常1/77.7、右打ち1/43.4。
- 初当りは3R約210個払い出し。50%で下位 `ジューシーハニーRUSH`、50%通常。下位RUSHはST30回、継続約50%。
- LT `ジューシーハニーRUSH ラッキートリガー` はST70回、継続約80%。
- 下位RUSH中大当りの50%が上乗せループ型 `極嬢HONEY BONUS`。10R約700個上乗せが50%でループし、ループごとにLT抽選。極嬢HONEY BONUS当選時のLT昇格率約30%。
- 詳細振り分け: 下位RUSH中 10R+α+LT 15% / 10R+α+LTチャレンジ 35% / 10R約700個+下位RUSH 50%。
- LT中: 10R+α（極嬢HONEY BONUS）50% / 10R約700個（SUPER HONEY BONUS）50%、いずれもLT継続。
- 極嬢HONEY BONUS平均払い出し約2100個。業界資料のLT突入時平均期待出玉約9125個は別定義として分離。
- 10R払い出し約700個/実獲得約600個、3R払い出し約210個/実獲得約180個は定義差でありCONFLICTではない。
- 通常初当り全体を分母とする総LT到達率は十分な横断後も直接値を確認できず `UNVERIFIED_AFTER_RESEARCH`。経路確率から独自合算しない。
- record: `docs/lt_pachinko_db/machines/2025-06-02_plt_geki_deji_juicy_honey_gokujo.md`
- commit: `b82f50882503d0a8be1253911ea4bde2ac25161e`
Sources:
- https://news.p-world.co.jp/articles/30838/greenbelt
- https://www.p-world.co.jp/machine/database/10278
- https://hazuse.com/machine/pachinko/PX0293/
- https://hisshobon.com/machineinfo/97770/
- https://1geki.jp/pachinko/p_ltjcyhny_gj77/
- https://nana-press.com/kaiseki/machine/994/29765/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — CLOSED
### 2025-05-19 — CLOSED (LT-positive recordなし)
### 2025-06-02 — OPEN
Independent calendars agree on 11 pachinko introductions. Continue same-day queue without skipping:
1. `Pフィーバーマクロスフロンティア5 LT-Light ver.` — COMPLETE_CORE
2. `P緋弾のアリア～緋緋神降臨～88Ver.` — COMPLETE_CORE
3. `PLT激デジ ジューシーハニー極嬢` — COMPLETE_CORE
4. `e 新・必殺仕置人 超斬撃99` — **NEXT: LT status verify; collect full core/LT record if positive**
5. `P DD北斗の拳3 百突99ver.` — LT status verify
6. `eF彼女、お借りします` — LT status verify
7. `e範馬刃牙` — LT status verify
8. `PA海物語3R3` — LT status verify
9. `デカスタ P戦国無双` — LT status verify
10. `デジハネPモンスターハンターライズ` — LT status verify
11. `e冴えない彼女の育てかた` — LT status verify
Calendar cross-check retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://hazuse.com/new-machine/202506-2/

## Effective DB state
Previous effective state: 97 records / 96 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **98**
- COMPLETE_CORE: **97**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-06-02 with `e 新・必殺仕置人 超斬撃99`. First verify LT-positive/negative status and duplicate absence; if LT-positive, collect full core/LT record. Then proceed through the exact same-day queue above. Do not close 2025-06-02 until all 11 candidates have LT status checked and the boundary has been re-enumerated against at least two independent calendars. Only LT-positive machines receive records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
