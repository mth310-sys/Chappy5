# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- latest prior machine record `2025-10-06_e_dunbine3_zerosonic.md`: checked
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
6. `Pフィーバーダンジョンに出会いを求めるのは間違っているだろうか2 LT-Light ver.` — **COMPLETE_CORE this relay**.
7. `PAぱちんこ冬のソナタ My Memory Sweet Version` — **EXCLUDED / LT非搭載 confirmed this relay**. Spec sources identify conventional probability-variable/MAX8 type and explicitly list Lucky Trigger as non-equipped.
8. `PA義風堂々!!～兼続と慶次～3 99ver.` — **next target / LT搭載 confirmed**. Preliminary cross-check: normal 1/99.9, right 1/7.73, TOTAL RUSH entry 50.5%, `天衣無縫RUSH` 6+4 / about 75%, LT `天下無双モード` 500+4 / 94%, normal direct LT 1% and right-hit LT allocation about 1%. Full record not yet written; verify detailed distributions and definitions before write.
9. `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん` — do not place at 10/6 without resolving calendar discrepancy. One major calendar places it 2025-10-20; another summary source groups it with 10/6. Verify canonical first introduction and LT status after 義風堂々.

### Pフィーバーダンまち2 LT-Light ver. — COMPLETE_CORE
- SANKYO, model `PAフィーバーダンまち2YG`, canonical first introduction 2025-10-06, 甘デジ / 一種二種混合 / 普図抽選 / LT.
- 発表時の遊技通信記事（2025-07-19）はホール導入を2025-08-04予定としていたが、後続の実導入資料・複数カレンダー/解析は2025-10-06で一致。型式 `PAフィーバーダンまち2YG` は2025-08-22検定通過との業界追跡記録もあるため、8/4はplanned date、10/6をcanonical first-introduction dateとした。
- 通常約1/99.9。初当り3R約240個後、100%ダンジョンチャレンジ42回へ。DC中図柄揃い約1/98.6、突破約35%。
- DC/RUSH中大当りの約5%でLT106回。残り95%は通常RUSH60回へ（10R約800個47% / 3R約240個48%）。通常RUSH中図柄揃い約1/37.0、継続約81%。
- LT中も図柄揃い約1/37.0、106回、継続約95%。LT中は10R約800個52% / 3R約240個48%、双方LT継続。
- 通常遊技全体基準の総LT到達率は直接公表値を確認できず、35%突破率と5%振り分けから独自算出しない `UNVERIFIED_AFTER_RESEARCH`。
- 公開解析では上位状態を「LT」と記載。別の正式固有RUSH名は確認できないため創作しない。
- 遊タイムなし。出玉は払出表記。
- record: `docs/lt_pachinko_db/machines/2025-10-06_p_danmachi2_lt_light.md`
- record commit: `340b8b2efb07b62c2437e9a699ee44ff3aee2027`

Sources:
- https://news.p-world.co.jp/articles/31460/yugitsushin
- https://yugi-nippon.com/pachinko-new-machine/post-72361/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/543/kh02.php
- https://1geki.jp/pachinko/p_danmachi2_light/
- https://slothack.net/matome/170998/
- https://pachinko-curation.com/56800/
- https://pachinko-spec.info/spec/161112/
- https://pachinkopachisro.com/archives/58760696.html

## Effective DB state
Previous effective state: 137 machine records / 136 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **138**
- COMPLETE_CORE: **137**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-10-06 boundary from `PA義風堂々!!～兼続と慶次～3 99ver.`. LT搭載は確認済み。P-WORLD preliminary values: 通常1/99.9、右1/7.73、TOTAL RUSH突入50.5%、天衣無縫RUSH 6回+残4 / 約75%、LT `天下無双モード` 500回+残4 / 94%、通常直行1%、右打ち大当り約1%でLT。次回はメーカー/業界資料と複数解析で大当り振り分け・LT終了/残保留構造・出玉定義を照合してCOMPLETE_CORE化する。その後 `デカスタPシュタインズゲート ゼロ まゆしぃば～じょん` の10/6 vs 10/20導入日とLT statusを解決し、少なくとも二つの独立カレンダーで候補集合を再監査してから2025-10-06をCLOSEする。`PAぱちんこ冬のソナタ My Memory Sweet Version` はLT非搭載確認済みのため再処理しない。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
