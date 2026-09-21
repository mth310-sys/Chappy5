# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `e 新・必殺仕置人 超斬撃99`
- duplicate search for target: no existing machine record found before creation

## This relay
### e 新・必殺仕置人 超斬撃99 — COMPLETE_CORE
- 京楽産業. / 型式 `e新・必殺仕置人～超斬撃99ver．～KA1` / 2025-06-02。
- KYORAKU公式NEWS、P-WORLD、HAZUSE、必勝本、一撃、なな徹等を横断し、LT搭載を直接確認。
- 甘デジ / スマパチ / 1種2種混合。通常約1/99.9。
- 初当りは3R約240個100%。50%で下位 `真仕置CRASH`、50%通常。
- 真仕置CRASHは約1/12.6、ST7回+残保留4個、TOTAL継続約60%（残保留4個引き戻し約28.1%込み）。
- 真仕置CRASH中大当りは10R約800個。約50%で `高坂超決戦` が発生し、勝率約50%。勝利でLT `超斬撃RUSH`、敗北は真仕置CRASH継続。結果ベース資料ではLT25% / 下位75%で整合。
- LT `超斬撃RUSH` は大当り約1/14.4、終了約1/99.9の転落型。TOTAL継続約91%（終了後残保留4個の引き戻し約25.0%込み）。LT中大当りはALL10R約800個払い出し、LT継続100%。
- 払い出し10R約800個/3R約240個と、解析資料の実獲得目安約700個/約210個は定義差でありCONFLICTではない。
- 通常初当り全体を分母とする総LT到達率は十分な横断後も直接値を確認できず `UNVERIFIED_AFTER_RESEARCH`。経路確率から独自合算しない。
- KYORAKU公式2025-05-08予告・2025-06-02全国導入開始告知および複数DBが6/2で一致。単一業界記事の4/7導入予定表記は誤記と判断しcanonical 6/2。
- record: `docs/lt_pachinko_db/machines/2025-06-02_e_shin_hissatsu_shiokinin_cho_zangeki_99.md`
- commit: `440c3ba4aab5c12e1f9ae5b5215969e354078a98`
Sources:
- https://www.kyoraku.co.jp/news/detail/825
- https://www.kyoraku.co.jp/news/detail/828
- https://www.p-world.co.jp/machine/database/10281
- https://hazuse.com/en/machine/pachinko/4P1567/
- https://hisshobon.com/machineinfo/97784/
- https://1geki.jp/pachinko/e_shiokinin_99/
- https://1geki.jp/pachinko/e_shiokinin_99/54/
- https://nana-press.com/kaiseki/machine/983/29758/
- https://chonborista.com/pachinko/kyoraku/237196/

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
4. `e 新・必殺仕置人 超斬撃99` — COMPLETE_CORE
5. `P DD北斗の拳3 百突99ver.` — **NEXT: LT status verify; collect full core/LT record if positive**
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
Previous effective state: 98 records / 97 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **99**
- COMPLETE_CORE: **98**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-06-02 with `P DD北斗の拳3 百突99ver.`. First verify LT-positive/negative status and duplicate absence; if LT-positive, collect full core/LT record. Then proceed through the exact same-day queue above. Do not close 2025-06-02 until all 11 candidates have LT status checked and the boundary has been re-enumerated against at least two independent calendars. Only LT-positive machines receive records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
