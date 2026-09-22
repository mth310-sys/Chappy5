# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2

## 2025-10-06 boundary — CLOSED / candidate set covered
1. `Pスーパー海物語IN沖縄6` — EXCLUDED / LT非搭載.
2. `eとある科学の超電磁砲 PHASE NEXT` — COMPLETE_CORE.
3. `eガールズ＆パンツァー 最終章` — COMPLETE_CORE.
4. `eベルセルク無双 第2章` — COMPLETE_CORE.
5. `e聖戦士ダンバイン3 ZEROSONIC` — COMPLETE_CORE.
6. `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.` — COMPLETE_CORE.
7. `PAぱちんこ冬のソナタ My Memory Sweet Version` — EXCLUDED / LT非搭載.
8. `PA義風堂々!!～兼続と慶次～3 99ver.` — COMPLETE_CORE.
9. `デカスタPシュタインズ・ゲート ゼロ まゆしぃば～じょん` — **COMPLETE_CORE this relay**.

Boundary audit: 情報島＋の過去新台一覧は上記9パチンコを2025-10-06として列挙。複数の年次カレンダーでも同候補群を確認。シュタインズゲートだけ一部カレンダーに10/20表記があるが、情報島＋機種DB、一撃、HAZUSE、パチビー等は10/6を明記するため、最初の導入開始を10/6 canonicalとして同一機の二重登録をしない。

### デカスタPシュタインズ・ゲート ゼロ まゆしぃば～じょん — COMPLETE_CORE
- ニューギン。型式 `PSTEINS；GATE0N3`（記号/空白違い表記あり）。甘デジ / デカスタ / 1種2種混合 / LT。
- canonical introduction 2025-10-06。10/20表記資料もあるため日付差を注記したが、複数機種DBの導入開始日は10/6で一致。
- 通常約1/99.9、右打ち約1/59.4（大当り+小当り合算）。初当り4R約400個、RUSH 0突入50%。
- `RUSH 0`: 50回+残4、TOTAL継続約60%（ST部分約57.2% + 残保留）。
- RUSH 0中特図2: タイムリープ+LT 2% / タイムリープ+下位STリセット2% / 10R約1000個+下位48% / 3R約300個+下位48%。
- LT `RUSH 0 HYPER`: 150回+残4、TOTAL継続約93%（ST部分約92.2% + 残保留）。
- LT中: タイムリープ+鳳凰院凶真ZONE10000回（実質次回）4% / 10R約1000個+LT48% / 3R約300個+LT48%。
- 残保留当選はRUSH 0側振り分け。LT本体STスルー後でもタイムリープ経由のLT復帰余地あり。
- 払出約1000/400/300個と実獲得目安約900/360/270個を分離。
- 通常遊技全体基準の総LT到達率は直接公表値未確認。経路値から独自算出せず `UNVERIFIED_AFTER_RESEARCH`。
- record: `docs/lt_pachinko_db/machines/2025-10-06_decast_steinsgate0_mayushii_ver.md`
- record commit: `6b0a1c1ef79e2df5c998c29633529b7829237c08`

Sources:
- https://p-johojima.jp/machine_spec/post-14260/
- https://1geki.jp/pachinko/p_steinsgate0_99_ds/39/
- https://1geki.jp/pachinko/p_steinsgate0_99_ds/54/
- https://hisshobon.com/machineinfo/98942/
- https://p.hisshobon.jp/machine/4603/1/111312
- https://hazuse.com/machine/pachinko/PX0312/
- https://www.pachibee.jp/machines/index/125090008
- https://pachinko-curation.com/56710/

## Next boundary — 2025-10-20
Preliminary re-enumeration:
1. `Pゴッドイーター199ゴッドトリガーVER.` — **next target / LT confirmed**. Industry announcement gives model `P LTゴッドイーター199VER-ARB`, introduction 2025-10-20, normal 1/199.5, Judgment 108回/突破約42%, lower `神バトルRUSH RAGE BURST` 約77%, LT `PREMIUM神RUSH` 約85%. Lower RUSH reaches LT after `結合崩壊BONUS BURST` twice / Lv.MAX. Information Island+ gives total lower→LT upgrade expectation about 48%. Need exact treatment of `ぷちBONUS` LT continuation allocation before record write because published 85% explicitly excludes that bonus from the stated ratio.
2. `Pはねものファインプレー` — LT搭載根拠なし / 羽根物。Next relay must directly verify and exclude before boundary closure.
3. `デカスタPシュタインズ・ゲート ゼロ まゆしぃば～じょん` — some calendars list 10/20, but already COMPLETE_CORE at canonical first introduction 10/6; **do not duplicate**.

Preliminary GOD EATER sources:
- https://news.p-world.co.jp/articles/31946/yugitsushin
- https://news.p-world.co.jp/articles/31999/greenbelt
- https://www.p-world.co.jp/machine/database/10356
- https://p-johojima.jp/machine_spec/post-15926/
- https://hisshobon.com/machineinfo/99512/
- https://hisshobon.com/machineinfo/99513/
- https://1geki.jp/pachinko/p_godeater_gt199/52/
- https://1geki.jp/pachinko/p_godeater_gt199/53/

## Effective DB state
Previous effective state: 139 machine records / 138 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **140**
- COMPLETE_CORE: **139**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Start 2025-10-20 from `Pゴッドイーター199ゴッドトリガーVER.`. Verify exact 特図1/ジャッジメント/下位RUSH/LT distributions, `ぷちBONUS` allocation and how it affects the published 約85% definition, lower-RUSH→LT total upgrade expectation, payout definitions, and full game flow across industry + multiple analysis sources. Then directly verify `Pはねものファインプレー` is LT-non-equipped, retain STEINS;GATE as a date-discrepancy duplicate rather than a new record, and re-enumerate 10/20 with at least two independent calendars before closing the boundary.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
