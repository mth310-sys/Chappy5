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

## Current boundary — 2025-09-08 OPEN
1. `eフィーバーブルーロック` — COMPLETE_CORE
2. `eパリピ孔明` — EXCLUDED: LT搭載根拠なし
3. `P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.` — COMPLETE_CORE
4. `ぱちんこ シン・エヴァンゲリオン PREMIUM MODEL` — EXCLUDED: LT搭載根拠なし
5. `Pアズールレーン THE ANIMATION 異次元トリガー 79ver.` — EXCLUDED: LTなし確認
6. `デジハネP 頭文字D せかんど` — COMPLETE_CORE
7. `P FAIRY TAIL 超一夜Ver.` — COMPLETE_CORE this relay
8. `P真・座頭市物語 LT99Ver.` — NEXT; LT confirmed, duplicate-search then full collection
9. `デカスタPデビルマン THE FINAL 179ver.` — verify LT eligibility and canonical introduction date before boundary close

### P FAIRY TAIL 超一夜Ver. — COMPLETE_CORE
- 藤商事 / 型式 `P FAIRY TAIL 超一夜Ver.FQY` / 2025-09-08 / LT3.0 PLUS / BIGスタート / 二種ST型。
- 通常約1/319（特図1小当り→V）、右約1/40（特図2小当り→V）。
- 初当り約960個。約55%でFAIRY RUSH、約45%通常。
- FAIRY RUSH: 32回+残保留、TOTAL約60%（ST部分約55.4% + 残保留引き戻し約9.6%）。
- FAIRY RUSH中1回目の大当りは下位継続。2回目の大当りでLT発動。2回目は約50%が約1500個+α+一夜モード、約50%が約240個+七炎竜RUSH。
- LT `七炎竜RUSH`: 61回+残保留、TOTAL約81%（ST部分約78.5% + 残保留約9.6%）。
- 七炎竜RUSH中: 約1500個+α+一夜 約25% / 約1500個+七炎竜 約25% / 約240個+七炎竜 約50%。
- 一夜モード中: 約1500個+α+超一夜 約25% / 約1500個+α+一夜 約25% / 約240個+七炎竜 約50%。
- 超一夜中: 約1500個+α+超一夜 約50% / 約240個+一夜 約50%。超一夜の転落側も一夜へ戻るため単純な50%終了ではない。
- `約1500個+α` は特図2大当り2回分以上の合計値。単一大当り払出と混同しない。
- 通常遊技全体基準の総LT到達率は直接公表値未確認。下位突入/継続から独自合算しない。
- record: `docs/lt_pachinko_db/machines/2025-09-08_p_fairy_tail_chou_ichiya_ver.md`
- commit: `171c1875186b08023dd6e3adfb90ee0f4f26138d`

Sources:
- https://news.p-world.co.jp/articles/31548/yugitsushin
- https://www.p-world.co.jp/machine/database/10323
- https://p-johojima.jp/machine_spec/post-11585/
- https://p.hisshobon.jp/machine/4585/1/110788
- https://1geki.jp/pachinko/p_fairytail_bs/39/

## Effective DB state
Previous effective state: 128 machine records / 127 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **129**
- COMPLETE_CORE: **128**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-09-08 `P真・座頭市物語 LT99Ver.` is the next unprocessed chronological LT candidate. Duplicate-search first, then collect full core/LT structure. After that verify `デカスタPデビルマン THE FINAL 179ver.` LT eligibility and canonical introduction date, then cross-check the full 2025-09-08 calendar boundary before closing it.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.