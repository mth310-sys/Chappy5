# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

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
Candidate queue from previous handoff retained. This relay processed the first three candidates in chronological queue order.

1. `Pスーパー海物語IN沖縄6` — **EXCLUDED / LT非搭載**. HAZUSE directly states ラッキートリガー非搭載, model `Pスーパー海物語IN沖縄6LTP`, 2025-10-06. Amusement Japan describes conventional 60% probability-change loop / Jinbei Time architecture. Do not create LT DB record.
2. `eとある科学の超電磁砲 PHASE NEXT` — **COMPLETE_CORE** this relay.
3. `eガールズ＆パンツァー 最終章` — **COMPLETE_CORE** this relay.
4. `eベルセルク無双 第2章` — next candidate; LT status/spec collection required.
5. `e聖戦士ダンバイン3 ZEROSONIC` — LT status must be checked.
6. `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.` — LT explicit; collect after preceding checks.
7. `PAぱちんこ冬のソナタ My Memory Sweet Version` — LT status must be checked.
8. `PA義風堂々!!～兼続と慶次～3 99ver.` — LT status must be checked.
9. `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん` — verify 10/6 vs 10/20 canonical first introduction and LT status before placement.

### Pスーパー海物語IN沖縄6 — excluded
- HAZUSE: `Pスーパー海物語IN沖縄6LTP`, 約1/319.6, 2025-10-06, **ラッキートリガー非搭載**.
- Amusement Japan: 2025-10-06 introduction, conventional probability-change loop and Jinbei Time; no LT structure.
Sources:
- https://hazuse.com/hd/5p0746/
- https://www.amusement-japan.co.jp/article/detail/10004926/
- https://www.sanyobussan.co.jp/products/pk_supersea_okinawa6/

### eとある科学の超電磁砲 PHASE NEXT — COMPLETE_CORE
- オレンジ（藤商事グループ）, model `eとある科学の超電磁砲 LTRSY`, 2025-10-06.
- 通常1/169.7（特図1小当り）, 右打ち1/86.8（電チューロング開放）.
- 下位RUSHなし。初当り300個後の突破チャレンジTOTAL約25%成功でLT `超超電磁砲RUSH`; LT突入率直接公表 1/679.
- LTは普図ST125回、約77%継続。
- ヘソ: 300個+LT約25% / 300個+通常約75%.
- LT: 6000個or7500個+α 9.3% / 4500個20.6% / 3000個23.1% / 1500個47.0%. 3000個以上は特図2複数大当りの合計払出。7500個獲得時1G連濃厚。
- record: `docs/lt_pachinko_db/machines/2025-10-06_e_railgun_phase_next.md`
- record commit: `4680a8a975c6d723de1b6e5831eb7c7013e9a378`
Sources: 藤商事公式 / GreenBelt-P-WORLD / 必勝本 / DMMぱちタウン.

### eガールズ＆パンツァー 最終章 — COMPLETE_CORE
- 平和（製造アムテックス）, 2025-10-06, LT3.0 PLUS.
- 通常1/199.8. ST中1/15.3（大当り+小当り合算）, 残保留1/6.7（大当り+小当り+C時短合算）.
- 初当り: 1500個+LT直行0.1% / 300個+`運命の戦車道`59.9% / 300個+通常40.0%.
- `運命の戦車道`: ST1回+残保留4個、突破約51% → LT `戦車道RUSH`.
- LT: ST14回+残保留4個、約80%継続。
- ST中: `無限軌道`3000個+α（平均4570個）51.0% / 1500個36.9% / 300個12.1%. 無限軌道は1500個×2を基礎に上乗せ約50%ループ。
- 残保留中はC時短抽選を含み、C時短当選で`当て勝つ革命`へ移行してSTリセット。残保留振分: 革命55.8% / 1500個38.1% / 300個6.1%.
- 通常遊技全体基準の総LT到達率は直接値未確認のため経路値から独自算出しない。
- 型式文字列のみ資料差あり: HAZUSE `eガールズ＆パンツァー3LAH1` vs K-Navi `eガールズ＆パンツァー3 LBH7`; 一次資料確定まで併記。LT主要性能は一致。
- record: `docs/lt_pachinko_db/machines/2025-10-06_e_girls_und_panzer_finale.md`
- record commit: `a0ec4ddc3c68cbf98904ade6b4a6082d6ae6a560`
Sources: Amusement Japan / GreenBelt / HAZUSE / 情報島＋ / ちょんぼりすた / K-Navi.

## Effective DB state
Previous effective state: 133 machine records / 132 COMPLETE_CORE / 1 CONFLICT.
This relay added 2 COMPLETE_CORE records; one non-LT candidate excluded without record.
- machine records: **135**
- COMPLETE_CORE: **134**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-10-06 boundary from `eベルセルク無双 第2章`. Check LT status first; collect only if LT-equipped. Then process `e聖戦士ダンバイン3 ZEROSONIC`, `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.`, `PAぱちんこ冬のソナタ My Memory Sweet Version`, `PA義風堂々!!～兼続と慶次～3 99ver.`, and resolve `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん` date/LT placement. Do not CLOSE 10/6 until the complete candidate set is checked against at least two independent calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.