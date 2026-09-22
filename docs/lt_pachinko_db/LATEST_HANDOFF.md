# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before writes

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2

## 2025-10-06 boundary — OPEN
1. `Pスーパー海物語IN沖縄6` — EXCLUDED / LT非搭載.
2. `eとある科学の超電磁砲 PHASE NEXT` — COMPLETE_CORE.
3. `eガールズ＆パンツァー 最終章` — COMPLETE_CORE.
4. `eベルセルク無双 第2章` — **COMPLETE_CORE this relay**.
5. `e聖戦士ダンバイン3 ZEROSONIC` — **LT搭載確認済み; next record target**. 遊技通信資料で型式 `e聖戦士ダンバイン3GREA`（銀座製）、通常約1/199.8、RUSH突入50.1%、聖戦士RUSH約70%、LT `HYPERダンバインRUSH` 約92%まで確認。詳細振り分け・LT経路を複数ソース照合してから登録する。
6. `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.` — LT explicit. 注意: 遊技通信の発表記事は「2025-08-04予定」だがHAZUSEは導入開始2025-10-06。実導入日を一次/複数カレンダーで再確認してcanonical配置すること。型式 `PAフィーバーダンまち2YG`、通常約1/99.9、ダンジョンチャレンジ42回/突破約35%、RUSH60回/約81%、LT106回/約95%、DC/RUSH中大当り約5%でLTという解析値あり。
7. `PAぱちんこ冬のソナタ My Memory Sweet Version` — LT status must be checked.
8. `PA義風堂々!!～兼続と慶次～3 99ver.` — LT status must be checked.
9. `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん` — verify 10/6 vs 10/20 canonical first introduction and LT status before placement.

### eベルセルク無双 第2章 — COMPLETE_CORE
- ニューギン, model `eベルセルク無双2H3`, 2025-10-06, LT3.0 PLUS / 2種時短ST.
- 図柄揃い約1/399.9、チャージ約1/2804.4、合算約1/349.9。放魔RUSH中約1/195.1、LT中約1/97.8。
- 初当り図柄揃い: 約4500個+LT 0.1% / 約3000個+放魔RUSH 74.9% / 約1500個+通常25.0%。公表TOTAL RUSH突入約75%は白7とチャージ昇格込み。
- 下位 `放魔RUSH`: 133回、突破約50%。大当りは約1500個100%でLT `放魔RUSH真紅` へ。
- LT `放魔RUSH真紅`: 133回、継続約75%。LT中は約3000個（1500個×2）100%+LT継続。普図抽選のため残保留なし、133回スルーで通常。
- LT経路: 白7初当り0.1%直行 / 放魔RUSH中大当り / チャージからの昇格。チャージ昇格具体率と通常全体基準の総LT到達率は直接値未確認のため推測しない。
- record: `docs/lt_pachinko_db/machines/2025-10-06_e_berserk_musou_chapter2.md`
- record commit: `f356472fd2464b668c83f878663d6738db432d28`
Sources: HAZUSE / P-WORLD / 必勝本 / パチマガスロマガ / K-Navi.

## Effective DB state
Previous effective state: 135 machine records / 134 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **136**
- COMPLETE_CORE: **135**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-10-06 boundary from `e聖戦士ダンバイン3 ZEROSONIC`. LT is already confirmed, so collect full core/LT structure without redoing prior records. Then resolve `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.` canonical introduction date before placement, then check the remaining 10/6 candidates. Do not CLOSE 10/6 until the complete candidate set is checked against at least two independent calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
