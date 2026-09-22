# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

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

## 2025-10-06 boundary — OPEN
1. `Pスーパー海物語IN沖縄6` — EXCLUDED / LT非搭載.
2. `eとある科学の超電磁砲 PHASE NEXT` — COMPLETE_CORE.
3. `eガールズ＆パンツァー 最終章` — COMPLETE_CORE.
4. `eベルセルク無双 第2章` — COMPLETE_CORE.
5. `e聖戦士ダンバイン3 ZEROSONIC` — COMPLETE_CORE.
6. `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.` — COMPLETE_CORE.
7. `PAぱちんこ冬のソナタ My Memory Sweet Version` — EXCLUDED / LT非搭載.
8. `PA義風堂々!!～兼続と慶次～3 99ver.` — **COMPLETE_CORE this relay**.
9. `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん` — **next target / LT搭載 and canonical 2025-10-06 strongly supported**. Information Island machine spec, Pachibee, 1geki and P-Summa all identify 2025-10-06; Pachinko Curation lists both 10/6 and 10/20. Treat 10/20 as secondary rollout/date discrepancy, not canonical, unless a stronger primary source overturns this. Full record not yet written.

### PA義風堂々!!～兼続と慶次～3 99ver. — COMPLETE_CORE
- ニューギン, canonical introduction 2025-10-06, 甘デジ / 1種2種混合 / LT.
- 通常実質1/99.90、右打ち実質1/7.73。
- 特図1: 10R約920個+次回大当り濃厚/天衣無縫RUSH 1%、4R約340個+チャンスタイム 99%。出玉はその他入賞口込み払出。
- TOTAL RUSH突入50.5%。チャンスタイム1回+残4。天衣無縫RUSHは6回+残4、約75%。
- チャンスタイム/天衣無縫RUSH中: 10R+LT 1%、10R+下位継続49%、4R+下位継続50%。
- LT `天下無双モード`: 500回+残4、継続94%。LT中は10R+LT 50%、4R+LT 44%、4R+時短終了6%。
- 6%終了後も残保留4個があり、引き戻し約42.52%。残保留当選は天衣無縫RUSH側の特図2振り分けへ戻り、1%ならLT復帰可能。残保留をLT本体94%へ重複加算しない。
- 通常遊技全体基準の総LT到達率は直接公表値を十分な再探索後も確認できず `UNVERIFIED_AFTER_RESEARCH`。経路確率から独自算出しない。
- P-WORLD、情報島＋、HAZUSE、必勝本、一撃で主要値・振り分け一致。conflictsなし。
- record: `docs/lt_pachinko_db/machines/2025-10-06_pa_gifudodo3_99ver.md`
- record commit: `247f793fc19094b644df8c8f47655afd60389ddb`

Sources:
- https://www.p-world.co.jp/machine/database/10346
- https://p-johojima.jp/machine_spec/post-13969/
- https://news.p-world.co.jp/articles/31857/greenbelt
- https://hazuse.com/machine/pachinko/PX0311/
- https://hisshobon.com/machineinfo/98849/
- https://1geki.jp/pachinko/p_gifudd3_99/55/

## Preliminary next-target audit — デカスタPシュタインズゲート ゼロ まゆしぃば～じょん
- 型式 `P STEINS;GATE0 N3` confirmed by industry announcement.
- LT搭載 confirmed: `RUSH 0 HYPER`.
- 通常約1/99.9、右打ち約1/59.4、RUSH突入50%、RUSH 0 50回+残4 / 約60%、LT 150回+残4 / 約93%。LT中タイムリープ当選は10000回（実質次回）へ。
- canonical date evidence now favors **2025-10-06**: 情報島＋機種DB、Pachibee、1geki online guide、P-Summa all explicitly 10/6. Pachinko Curation alone displays both 10/6 and 10/20. Next relay should verify detailed 特図1/特図2 distributions and LT entry allocation before record write, then close/re-audit 10/6 candidate set.

## Effective DB state
Previous effective state: 138 machine records / 137 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **139**
- COMPLETE_CORE: **138**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-10-06 boundary from `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん`. Treat 2025-10-06 as provisional canonical date supported by multiple explicit machine databases/calendars; retain the 10/20 secondary-date note. Verify 特図1/特図2 full payout distributions, exact LT entry route/allocation, RUSH 0 HYPER continuation definition and 10000回 route across industry + multiple analysis sources. After COMPLETE_CORE write, re-enumerate 2025-10-06 with at least two independent calendars and CLOSE only if no unprocessed LT candidate remains.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
