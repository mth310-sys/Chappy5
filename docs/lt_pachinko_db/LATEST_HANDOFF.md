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
Candidate queue / current audit:
1. `eフィーバーブルーロック` — COMPLETE_CORE
2. `eパリピ孔明` — EXCLUDED: LT搭載根拠なし。Cタイムを使う新基準「マルチトリガースペック」だがLTとは扱わない。
3. `P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.` — COMPLETE_CORE
4. `ぱちんこ シン・エヴァンゲリオン PREMIUM MODEL` — EXCLUDED: 正統派甘デジV-ST、LT搭載根拠なし。
5. `Pアズールレーン THE ANIMATION 異次元トリガー 79ver.` — EXCLUDED: 名称に「異次元トリガー」を含むが解析資料でラッキートリガーなしを確認。
6. `デジハネP 頭文字D せかんど` — COMPLETE_CORE this relay
7. `P FAIRY TAIL 超一夜Ver.` — NEXT; LT confirmed. 2025-09-08、通常約1/319、FAIRY RUSH約55%/約60%、FAIRY RUSH中2回大当りでLT「七炎竜RUSH」、61回＋残保留、約81%。詳細振り分けと一夜/超一夜モードを収集する。
8. `P真・座頭市物語 LT99Ver.` — LT confirmed; collect after FAIRY TAIL if duplicate search clear
9. `デカスタPデビルマン THE FINAL 179ver.` — verify LT eligibility and canonical introduction date before boundary close

Calendar sources retained:
- https://pachinko-curation.com/shindai_calendar/2/
- https://p-kn.com/calendar/202509/
- https://pachinkopachisro.com/archives/58760696.html
- https://p-johojima.jp/machine_spec/post-2074/

### デジハネP 頭文字D せかんど — COMPLETE_CORE
- サミー（製造: 銀座） / 型式 `P頭文字D 2 GCPC` / 2025-09-08 / 甘デジ / 一種二種混合 / LT搭載。
- 通常約1/99（図柄揃い約1/100＋小当り約1/65536）、右打ち約1/1.14。
- TOTAL RUSH突入約51%（詳細解析51.1%）。通常図柄揃い: 10R約800個＋LT 0.1% / 2R約160個＋下位51.0% / 2R通常48.9%。小当り約1/65536はCHARGEタイム約180個＋下位RUSH。
- 下位 `最速ダウンヒルRUSH`: 1回転、約88%。大当り振り分けは10R約820個＋LT 4% / 5R約420個＋下位17% / 2R約180個＋下位79%。
- LT `最速ダウンヒルRUSH LEGEND`（業界発表にLEGEND97表記あり）: 100回転、終了確率約1/32.8、継続約97%。LT中出玉 820個4% / 420個17% / 180個79%。
- 通常遊技全体基準の総LT到達率は直接公表値未確認。0.1%直行＋下位4%経路から独自合算しない。
- record: `docs/lt_pachinko_db/machines/2025-09-08_dejihane_p_initial_d_second.md`
- commit: `10318d0ab4ef2ed0867b688a5764b23eb90cba94`

Sources:
- https://news.p-world.co.jp/articles/31382/yugitsushin
- https://news.p-world.co.jp/articles/31414/greenbelt
- https://1geki.jp/pachinko/p_initial_d_2nd_99/
- https://1geki.jp/pachinko/p_initial_d_2nd_99/39/
- https://p.hisshobon.jp/machine/4581/1/110613
- https://hazuse.com/machine/pachinko/4P1286/

### Next candidate pre-audit — P FAIRY TAIL 超一夜Ver.
LT eligibility confirmed across industry/analysis sources.
- 型式 `P FAIRY TAIL 超一夜Ver.FQY` / 藤商事 / 2025-09-08。
- 通常特図1小当りからのV当り約1/319、右約1/40。
- FAIRY RUSH突入約55%、32回＋残保留、TOTAL継続約60%（ST部分約55.4%＋残保留引き戻し約9.6%の合算）。
- FAIRY RUSH中に2回当てるとLT発動。
- LT `七炎竜RUSH`: 61回＋残保留、TOTAL約81%（ST部分約78.5%＋残保留約9.6%）。
- 七炎竜RUSH中の大当り約25%から上乗せ特化の一夜モード。詳細振り分け、一夜→超一夜の25%/50%ループ定義を次回本収集で確定する。
Pre-audit sources:
- https://news.p-world.co.jp/articles/31548/yugitsushin
- https://www.p-world.co.jp/machine/database/10323
- https://p.hisshobon.jp/machine/4585/1/110788
- https://1geki.jp/pachinko/p_fairytail_bs/39/

## Effective DB state
Previous effective state: 127 machine records / 126 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **128**
- COMPLETE_CORE: **127**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-09-08 `P FAIRY TAIL 超一夜Ver.` is the next unprocessed chronological LT candidate. Duplicate-search first, then collect full core/LT structure including FAIRY RUSH first/second-hit distinction, 七炎竜RUSH, 一夜モード/超一夜モード and payout definitions. Then process `P真・座頭市物語 LT99Ver.` and verify `デカスタPデビルマン THE FINAL 179ver.` LT eligibility/date before closing the 2025-09-08 boundary.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.