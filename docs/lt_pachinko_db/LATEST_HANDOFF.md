# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- latest prior machine record `2025-10-06_e_berserk_musou_chapter2.md`: checked
- duplicate search performed before write

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
4. `eベルセルク無双 第2章` — COMPLETE_CORE.
5. `e聖戦士ダンバイン3 ZEROSONIC` — **COMPLETE_CORE this relay**.
6. `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.` — **next target**. LT搭載は既確認。遊技通信発表記事の「2025-08-04予定」とHAZUSE等の「2025-10-06導入開始」に差があるため、canonical first-introduction dateを一次/複数カレンダーで再確認してから登録する。型式 `PAフィーバーダンまち2YG`、通常約1/99.9、ダンジョンチャレンジ42回/突破約35%、RUSH60回/約81%、LT106回/約95%、DC/RUSH中大当り約5%でLTという事前解析値あり。
7. `PAぱちんこ冬のソナタ My Memory Sweet Version` — LT status must be checked.
8. `PA義風堂々!!～兼続と慶次～3 99ver.` — LT status must be checked.
9. `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん` — verify 10/6 vs 10/20 canonical first introduction and LT status before placement.

### e聖戦士ダンバイン3 ZEROSONIC — COMPLETE_CORE
- 銀座（サミーブランド）, model `e聖戦士ダンバイン3GREA`, 検定番号 `5P0673`, 2025-10-06, ライトミドル / スマパチ / LT3.0 PLUS / 一種二種混合ST.
- 通常約1/199.8、右打ち約1/29.1。TOTAL RUSH突入約50.1%。
- 通常時: 約1200個+LT 0.1% / 約360個+聖戦士RUSH 50.0% / 約360個+通常 49.9%。
- 下位 `聖戦士RUSH`: ST30回+残保留4個、継続約70%。ST中大当りは1200個+LT 50% / 600個+下位20% / 300個+下位30%。ST終了後の残保留4個での大当りはLT突入濃厚。
- LT `HYPERダンバインRUSH`: ST66回 or 10000回+残保留4個、TOTAL継続約92%。LT中は1200個50% / 600個20% / 300個30%、全てLT継続。
- 下位RUSHからLTへの公表TOTAL昇格率は約55%（1200個振り分け50%に残保留当選経路を含む）。
- 通常遊技全体を分母とする総LT到達率の直接公表値は、検索語・資料系統を変えた再探索後も確認できず `UNVERIFIED_AFTER_RESEARCH`。50.1%入口と約55%昇格率から独自算出しない。
- 遊タイム非搭載。出玉は払出表記。
- record: `docs/lt_pachinko_db/machines/2025-10-06_e_dunbine3_zerosonic.md`
- record commit: `dde4f859267afe8028db5eabc8c9303cadb06e95`

Sources:
- https://news.p-world.co.jp/articles/31513/yugitsushin
- https://news.p-world.co.jp/articles/31477/greenbelt
- https://www.p-world.co.jp/machine/database/10324
- https://p.hisshobon.jp/machine/4586/1/110792
- https://hisshobon.com/machineinfo/98669/
- https://p-johojima.jp/machine_spec/post-12731/
- https://1geki.jp/pachinko/e_dunbine3_zs/
- https://nana-press.com/kaiseki/machine/1034/31832/

## Effective DB state
Previous effective state: 136 machine records / 135 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **137**
- COMPLETE_CORE: **136**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-10-06 boundary from `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.`. First resolve the 2025-08-04 planned-date vs 2025-10-06 actual-introduction discrepancy and use the canonical first-introduction date; then collect full core/LT structure. After that check `PAぱちんこ冬のソナタ My Memory Sweet Version`, `PA義風堂々!!～兼続と慶次～3 99ver.`, and `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん`. Do not CLOSE 2025-10-06 until the full candidate set is checked against at least two independent calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
