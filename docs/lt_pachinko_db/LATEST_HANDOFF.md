# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
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
- 2025-10-06 — CLOSED / candidate set covered
- 2025-10-20 — CLOSED 2/2
- 2025-11-04 — CLOSED 12/12 candidate audit
- 2025-11-17 — CLOSED 1/1 pachinko candidate

## Prior retained
### e 北斗の拳11 暴凶星 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-12-08_e_hokuto_no_ken_11_boukyousei.md`
- record commit: `df4cb00c9c1ac6a414cea665c48440ae55c13060`
- 通常約1/399.8、右約1/10.7（C時短込み）、初当り約61%で直LT/RUSH。ST10+残4、約75%。右6000個約10% / 4500個約40% / 1500個約30% / STリセット約20%。

## 2025-12-08 boundary — OPEN
Candidate set (calendar order; do not assume every candidate is LT):
1. e北斗の拳11 暴凶星 — COMPLETE_CORE
2. PA海物語 極JAPAN Withナギナミ — **LT非搭載 confirmed this relay; excluded**
3. eアズールレーン2 THE ANIMATION 超次元 — **COMPLETE_CORE this relay**
4. Pフィーバーからくりサーカス2 Light ver. — **LT非搭載 confirmed this relay; excluded**
5. e地獄少女7500Ver. — NEXT
6. eうしおととら～神のせSPEC～150ver. — LT candidate; independent machine DB labels LT
7. eうしおととら～神のせSPEC～399ver. — LT candidate; independent machine DB labels LT
8. PA野生の王国6 — pending LT audit
9. Pこの素晴らしい世界に祝福を！最終クエスト1/49 — pending LT audit

### PA海物語 極JAPAN Withナギナミ — LT NON-EQUIPPED / EXCLUDED
- 型式 `PA海物語極ジャパンHBD`、三洋物産、2025-12-08。
- HAZUSEが機種詳細で `ラッキートリガー: 非搭載` を明示。
- 必勝本も基本スペックで `ラッキートリガー: 非搭載` を明示。
- パチマガスロマガ詳細スペックも `ラッキートリガー: なし` を明示。
- 通常約1/99.9、右約1/56.2、ST16/70回＋残4、極ノ刻TOTAL突入約65%・継続約74%だが、LTではないためmission ruleに従いDBレコードを作らない。
Sources:
- https://hazuse.com/hd/5p0531/
- https://p.hisshobon.jp/machine/4625/1/111826
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sanyo_pachi/359/kh02.php
- https://news.p-world.co.jp/articles/31910/yugitsushin

### e アズールレーン2 THE ANIMATION 超次元 — COMPLETE_CORE
- 京楽産業.。型式 `eアズールレーンTHE ANIMATION2K6`。2025-12-08。
- LT搭載はメーカー発表＋HAZUSE/一撃/P-WORLD等で確認。
- 通常ATTACK約1/169.9。ATTACK成功約30%で決戦BIG BONUSへ。
- 決戦BIG BONUSは約1500個。成功約50%（残保留4個の引き戻し約17.0%込み）でLT `共同戦線RUSH`。
- 非LT下位継続RUSHは存在しない。決戦BIG BONUSはLT入口状態。
- LT中 図柄揃い約1/21.9 / 終了約1/71.7、転落タイプ。継続約81%（残保留4個引き戻し込み）。
- LT中図柄揃いはAve約3000個OVER 100%。これは図柄揃い時10R×2回分（特図2）＋全入賞口払い出しを含む試射値で、単一10R3000個ではない。
- ATTACK出玉解析内訳: 約790個4.1% / 620個11.1% / 470個22.1% / 360個36.7% / 320個26.0%。
- 通常遊技全体を分母にした総LT到達率/確率の直接公表値は確認できず、30%×50%等から独自算出しない。
- conflicts: []
- record: `docs/lt_pachinko_db/machines/2025-12-08_e_azur_lane_2_the_animation_choujigen.md`
- record commit: `4832283a5c1ae2fa92845b4b07c1f849423dd67f`
Sources:
- https://www.kyoraku.co.jp/news/detail/851
- https://yugi-nippon.com/pachinko-new-machine/post-74081/
- https://hazuse.com/machine/pachinko/5P0983/
- https://1geki.jp/pachinko/e_azuren2/
- https://www.p-world.co.jp/machine/database/10386
- https://p.hisshobon.jp/machine/4652/1/112496

### Pフィーバーからくりサーカス2 Light ver. — LT NON-EQUIPPED / EXCLUDED
- SANKYO、型式 `PAフィーバーからくりサーカス2YF`、2025-12-08。
- SANKYO公式スペック: 通常約1/99.9、突破チャレンジ25回/約28%、超悪魔RUSH125回/約81%、C時短あり。
- 必勝本が `ラッキートリガー: 非搭載` を明示。HAZUSEもLTカテゴリ表示なし。
- 右打ちに3000/2400/1800/1200/600個の多段出玉があるがLTではない。mission ruleに従いDBレコードを作らない。
Sources:
- https://www.sankyo-fever.jp/products/machine_list/prw/spec/
- https://hisshobon.com/machineinfo/98928/
- https://hazuse.com/machine/pachinko/PX0320/
- https://news.p-world.co.jp/articles/31751/yugitsushin

## Effective DB state
Previous effective state: 151 machine records / 150 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record and excluded 2 confirmed non-LT machines.
- machine records: **152**
- COMPLETE_CORE: **151**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Resume at 2025-12-08 candidate #5 `e地獄少女7500Ver.`. First verify exact LT status, formal model/manufacturer, and sibling-spec distinction. If LT-equipped, duplicate-search then collect full core/LT structure and save; if explicitly non-LT, exclude without creating a machine record and continue immediately to candidate #6 `eうしおととら～神のせSPEC～150ver.`.**

For each positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities.
