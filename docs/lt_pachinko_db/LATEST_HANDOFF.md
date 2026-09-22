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
Candidate queue:
1. `eフィーバーブルーロック` — COMPLETE_CORE this relay
2. `eパリピ孔明` — next; audit LT status first
3. `P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.` — calendar explicitly marks LT; collect if duplicate search clear
4. `ぱちんこ シン・エヴァンゲリオン PREMIUM MODEL` — audit LT eligibility
5. `Pアズールレーン THE ANIMATION 異次元トリガー 79ver.` — audit LT eligibility
6. `デジハネP 頭文字D せかんど` — audit LT eligibility
7. `P FAIRY TAIL 超一夜Ver.` — LT structure indicated; collect if eligible
8. `P真・座頭市物語 LT99Ver.` — LT confirmed; collect if duplicate search clear
9. `Pデビルマン-THE FINAL- 179Ver.` — verify actual introduction date and LT eligibility

Calendar sources retained:
- https://pachinko-curation.com/shindai_calendar/2/
- https://p-kn.com/calendar/202509/
- https://pachinkopachisro.com/archives/58760696.html

### eフィーバーブルーロック — COMPLETE_CORE
- SANKYO（製造元ジェイビー） / 型式 `eフィーバーブルーロックMZ` / 2025-09-08 / スマパチ / 一種二種混合・普図転落型。
- 通常図柄揃い約1/399.9（大当り確率1/349.9）、記者会見約1/2110、右打ち図柄揃い約1/33.2。
- 下位RUSHなし。RUSHそのものがLT `エゴイストBATTLE` の直LT型。TOTAL突入約55%、継続約77%、転落約1/108。
- 特図1: 1500個+LT 0.1% / 1050個+LT 50.0% / 300個+LT 4.6% / 1050個+通常 45.3%。
- 特図2: 9000個以上 0.5% / 6000個 5.2% / 4500個 19.8% / 3000個 38.0% / 1500個 36.5%、すべてLT継続。
- 3000個以上は1500個大当り複数回の合計払い出し。単一大当り出玉として扱わない。
- エゴイストATTACKは普電ロング開放約1/29→特図2 5回転、成功期待約88%。5回すべて大当り時はエゴストラタイムへ入り、次回1500個以上まで転落しない追加出玉区間。
- 公式・業界・P-WORLD・解析で主要値が整合。missingFieldsなし、conflictsなし。
- record: `docs/lt_pachinko_db/machines/2025-09-08_e_fever_blue_lock.md`
- commit: `53e102f1fa4a1b33a18ff915395bbd588d5de058`

Sources:
- https://www.sankyo-fever.jp/collection/986/
- https://news.p-world.co.jp/articles/31122/greenbelt
- https://news.p-world.co.jp/articles/31732/greenbelt
- https://yugi-nippon.com/pachinko-new-machine/post-71654/
- https://www.p-world.co.jp/machine/database/10302
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/542/kh04.php

## Effective DB state
Previous effective state: 125 machine records / 124 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **126**
- COMPLETE_CORE: **125**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-09-08 `eパリピ孔明` is the next unprocessed chronological candidate. Audit whether its C-time/new-standard structure is formally LT eligible before any record creation. If LT eligible, collect full core/LT structure; if non-LT, document exclusion in handoff and continue to `P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.`.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.