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

## Current boundary — 2025-09-08 OPEN
1. `eフィーバーブルーロック` — COMPLETE_CORE
2. `eパリピ孔明` — EXCLUDED: LT搭載根拠なし
3. `P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.` — COMPLETE_CORE
4. `ぱちんこ シン・エヴァンゲリオン PREMIUM MODEL` — EXCLUDED: LT搭載根拠なし
5. `Pアズールレーン THE ANIMATION 異次元トリガー 79ver.` — EXCLUDED: LTなし確認
6. `デジハネP 頭文字D せかんど` — COMPLETE_CORE
7. `P FAIRY TAIL 超一夜Ver.` — COMPLETE_CORE
8. `P真・座頭市物語 LT99Ver.` — COMPLETE_CORE this relay
9. `デカスタPデビルマン THE FINAL 179ver.` — NEXT; LT搭載は業界資料で確認済み。型式・詳細振り分け・LT経路を収集し、全国導入日2025-09-08を確定して登録判断

### P真・座頭市物語 LT99Ver. — COMPLETE_CORE
- ニューギン / 型式 `P真・座頭市物語N2-K` / 2025-09-08 / 甘デジ / 1種2種混合 / LT搭載。
- 通常約1/99.90、右打ち1/46.64。初当り後電サポ100%。
- 通常時: 10R約1000個+竜騰虎闘0.5% / 4R約400個+激闘の鼓動20% / 2R約200個+激闘の鼓動79.5%。
- `激闘の鼓動`: ST20+残4、突破約41%。
- `竜騰虎闘モード`: ST51+残4、継続約70%。
- 右打ち大当り: 10R約1000個+LT 10.0% / 10R約1000個+竜騰虎闘19.5% / 3R約300個+竜騰虎闘70.5%。10R当り時の約34%がLT発動契機。
- LT `神速一閃モード`: ST130+残4、TOTAL約95%。LT中 10R約1000個29.5% / 3R約300個70.5%。
- LT ST130回スルー後の残保留引き戻しはLT継続ではなく基本RUSH振り分けへ戻る。
- 通常遊技全体基準の総LT到達率は直接公表値未確認のため独自算出しない。
- P-WORLD本文に竜騰虎闘中LT約7%の孤立記載があるが、同ページ表・情報島＋・必勝本・パチマガ詳細の10.0%を採用。平均処理なし。
- record: `docs/lt_pachinko_db/machines/2025-09-08_p_shin_zatoichi_monogatari_lt99.md`
- commit: `7391614b703acf5bbe3f86f97f5608eb0ac5008e`

Sources:
- https://p-johojima.jp/machine_spec/post-12724/
- https://news.p-world.co.jp/articles/31637/greenbelt
- https://amusement-japan.co.jp/article/detail/10004970/
- https://hisshobon.com/machineinfo/98814/
- https://hisshobon.com/machineinfo/98815/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/506/kh01.php
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/506/kh02.php

## Effective DB state
Previous effective state: 129 machine records / 128 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **130**
- COMPLETE_CORE: **129**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-09-08 `デカスタPデビルマン THE FINAL 179ver.` is the next unprocessed chronological LT candidate. LT搭載は確認済み。duplicate-search first, then collect 型式、1/179.55、下位RUSH/真悪魔RUSH、LTデデデRUSHの正式経路・継続率・全振り分け・全国導入日。処理後、複数カレンダーで2025-09-08境界を再監査してCLOSE判定する。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.