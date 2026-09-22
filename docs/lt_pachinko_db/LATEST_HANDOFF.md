# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before every positive write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2
- 2025-10-06 — CLOSED / candidate set covered
- 2025-10-20 — CLOSED 2/2
- 2025-11-04 — CLOSED 12/12 candidate audit
- 2025-11-17 — CLOSED 1/1 pachinko candidate

## 2025-12-08 boundary — OPEN
Candidate set (calendar order; do not assume every candidate is LT):
1. e北斗の拳11 暴凶星 — COMPLETE_CORE
2. PA海物語 極JAPAN Withナギナミ — LT非搭載 confirmed; excluded
3. eアズールレーン2 THE ANIMATION 超次元 — COMPLETE_CORE
4. Pフィーバーからくりサーカス2 Light ver. — LT非搭載 confirmed; excluded
5. e地獄少女7500Ver. — **COMPLETE_CORE this relay**
6. eうしおととら～神のせSPEC～150ver. — **COMPLETE_CORE this relay**
7. eうしおととら～神のせSPEC～399ver. — **COMPLETE_CORE this relay**
8. PA野生の王国6 — **LT status unresolved; do not register/exclude yet**
9. P【超甘LT】この素晴らしい世界に祝福を！最終クエスト1/49 — **COMPLETE_CORE this relay**

### e地獄少女7500Ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-12-08_e_jigoku_shoujo_7500_ver.md`
- record commit: `95a9e0b9783b15d57480e31a30c093716818c682`
- 製造オレンジ / 藤商事販売、型式 `e地獄少女7500Ver. RHZ`。
- 大当り1/349。きくりチャレンジ約1/49→成功約1/2→地獄ジャッジ約1/18は演出/役物経路確率で、条件装置作動確率とは別定義。
- 図柄揃いは7500個（特図1＋特図2計5回分）100%。運命の分岐成功約52%でLT `極地獄BONUS`。
- LTは1500個上乗せ約77%。23%側も即通常ではなく1500個＋地獄チャレンジ4回へ。
- 地獄チャレンジ約1/6、成功約50%。当選時50%で3000個＋LT復帰、50%で1500個＋チャレンジ継続。
- 地獄チャージ約1/429から超大当り昇格→LT経路あり。ただし昇格割合は未確認で推測しない。
Sources: 藤商事公式 / Amusement Japan / 必勝本 / パチマガスロマガ / 一撃 / パチビー。

### eうしおととら～神のせSPEC～150ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-12-08_e_ushio_to_tora_kaminose_spec_150ver.md`
- record commit: `2a39fbf505ab041ad2a501e36264f9787ef15cf8`
- D-light、型式 `eうしおととら～月と太陽～FH-FH`。
- 通常1/150.3、初当り240個、30%でLT `真うしとらRUSH` 205回。RUSH=LT直行型、継続約75%。
- LT中30%が二体で最強BONUS 3000個以上、70%が1500個。BONUS内訳7500+α 19% / 6000 14% / 4500 24% / 3000 43%。全て1500個×複数回合計を分離。

### eうしおととら～神のせSPEC～399ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-12-08_e_ushio_to_tora_kaminose_spec_399ver.md`
- record commit: `663b8fbb1d24e423cce4d8291bb3c00391828ef7`
- D-light、型式 `eうしおととら～月と太陽～FM-JF`。
- 図柄揃い1/399.9（うしとらチャージ除く）、1500個。61%でLT `真うしとらRUSH` 205回、継続約75%。
- 右出玉構造は150ver.と同系統。うしとらチャージ約1/2800からLT昇格経路あり、具体昇格割合は未確認。
- 150ver.と混同しない。

### PA野生の王国6 — LT STATUS UNRESOLVED
- 型式 `PA野生の王国6N2`、ニューギン、2025-12-08。
- 信頼度の高い機種資料（一撃、P-WORLD、パチマガスロマガ、業界記事）は `ST / 遊タイム` として説明し、LT名称を示さない。
- 通常1/99.9、高確1/63.6、初当り後100% ST50。楽園モードTOTAL約69%。右10R 10%で時短5000回の `百獣の王TIME（∞）`。低確率299回消化の遊タイムからも同状態へ。
- 一方、中古実機販売サイト1件が「タイプ: デジパチ、ラッキートリガー」と記載しており、LT非搭載と断定するには競合が残る。
- `百獣の王TIME（∞）` は遊タイム/10R後の実質次回状態として説明され、現時点では正式LT名称・LT搭載根拠を一次/高信頼資料で確認できていない。
- mission ruleによりDBレコードは作らず、**次回まずメーカー公式/型式資料/HAZUSE/必勝本等で「LT搭載/非搭載」の明示を再探索する。競合を解消するまで除外確定しない。**
Sources checked:
- https://1geki.jp/pachinko/pa_yaseinooukoku6/
- https://1geki.jp/pachinko/pa_yaseinooukoku6/51/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/511/kh04.php
- https://news.p-world.co.jp/articles/32409/greenbelt
- https://pachimaga.com/free/mach/maker-p/newgin/064461.php
- conflicting low-tier: https://initialp.cart.fc2.com/ca33/3988/p-r-s/

### P【超甘LT】この素晴らしい世界に祝福を！ 最終クエスト1/49 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-12-08_p_konosuba_final_quest_1_49.md`
- record commit: `9d087e6a366858b62bc12638197ca9dbbc3ea88b`
- 豊丸産業、型式 `Pこの素晴らしい世界に祝福を！AX2`。超甘LT第3弾。
- 通常1/49.9、右1/25.1。初当り200個→このすばチャレンジ100%（6回＋残4）、突破約33%。
- チャレンジ大当り10%でLT `祝福RUSH`、90%で通常 `このすばRUSH`（33回＋残4、約78%）。
- このすばRUSH中基本1%でLT。最終変動/残保留当選時は10%。
- LTは実質次回、継続約97%。10% 490個＋LT / 87% 4R＋LT / 3% 4R＋このすばRUSH。LT終了3%でも通常へ落ちず下位RUSHへ戻る。
- 一撃に初当りからLT約4.7%（約1/1057）の直接値あり。

## Effective DB state
Previous effective state: 152 machine records / 151 COMPLETE_CORE / 1 CONFLICT.
This relay added 4 COMPLETE_CORE records.
- machine records: **156**
- COMPLETE_CORE: **155**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Resume at 2025-12-08 candidate #8 `PA野生の王国6` only to resolve LT status. Do not redo the four records completed this relay. Search manufacturer official/product page, HAZUSE, 必勝本, formal model `PA野生の王国6N2`, and industry/spec documents for an explicit LT equipped/non-equipped statement. If explicit non-LT is confirmed, exclude without a machine record and close the 2025-12-08 boundary (9/9 audited). If LT is explicitly confirmed, collect formal LT name/route/rate before registering. Then enumerate the next chronological pachinko introduction boundary after 2025-12-08 and continue.**

For every positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities.
