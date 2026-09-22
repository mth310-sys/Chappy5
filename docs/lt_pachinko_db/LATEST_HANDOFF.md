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
Candidate queue / current audit:
1. `eフィーバーブルーロック` — COMPLETE_CORE previous relay
2. `eパリピ孔明` — EXCLUDED: LT搭載根拠なし。Cタイムを使う新基準「マルチトリガースペック」だが、業界発表は図柄当り/Cタイムから通常RUSHを目指す構造として説明。LTとは扱わない。
3. `P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.` — COMPLETE_CORE this relay
4. `ぱちんこ シン・エヴァンゲリオン PREMIUM MODEL` — EXCLUDED: 正統派甘デジV-ST。業界発表は1/99.9、RUSH約46%、継続約79%でLT搭載を示さない。シリーズ内の別LT版と混同しない。
5. `Pアズールレーン THE ANIMATION 異次元トリガー 79ver.` — EXCLUDED: 名称に「異次元トリガー」を含むがLTではない。京楽公式は覚醒BONUS/異次元トリガーと表記する一方、詳細解析資料はラッキートリガー「なし」を明記。LT搭載とする二次資料もあるため名称に引っ張られず対象外とする。
6. `デジハネP 頭文字D せかんど` — NEXT: LT搭載有無を監査
7. `P FAIRY TAIL 超一夜Ver.` — LT構造 indicated; collect if eligible and duplicate search clear
8. `P真・座頭市物語 LT99Ver.` — LT confirmed; collect if duplicate search clear
9. `Pデビルマン-THE FINAL- 179Ver.` — verify actual introduction date and LT eligibility

Calendar sources retained:
- https://pachinko-curation.com/shindai_calendar/2/
- https://p-kn.com/calendar/202509/
- https://pachinkopachisro.com/archives/58760696.html

### P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver. — COMPLETE_CORE
- アムテックス（平和系） / 型式 `P戦国乙女7H0YZ3` / 2025-09-08 / P機 / LLサイズSTART / 一種二種混合 / c時短搭載。
- 通常図柄揃い約1/299.2（大当り約1/300.6＋小当り約1/65536）。
- 特図1: 1500個＋LT 0.5% / 300個＋乙女RUSH 52.5% / 300個＋通常47.0%。（極）乙女RUSH突入約53%。
- 下位「乙女RUSH」: ST51回＋残保留4、図柄揃い＋天剣チャンス約1/38.2、TOTAL継続約77%。RUSH中出玉1500個50% / 450個50%。
- 乙女RUSH中c時短「天剣チャンス」約1/255.0。時短10000回で実質次回大当りまで。次回大当りの52.5%（公表丸め約53%）でLT、47.5%で乙女RUSH復帰。
- LT正式名称 `極乙女RUSH`: ST100回＋残保留4、図柄揃い約1/44.9、TOTAL継続約91%。LT中1500個50% / 450個50%、いずれもLT継続。
- 初当り0.5%のLT直行経路あり。通常遊技全体基準の総LT到達率は直接公表値未確認のため独自算出しない。
- 2025年1月の1/399.6版とは別スペック。型式と製造元は検定/業界資料で照合。
- record: `docs/lt_pachinko_db/machines/2025-09-08_p_sengoku_otome7_ll_299.md`
- commit: `cea7755479657a3c53f283b9bd989b06a87fe6cd`

Sources:
- https://www.heiwanet.co.jp/products/pachinko/p-sg8ll/
- https://yugi-nippon.com/pachinko-new-machine/post-72158/
- https://amusement-japan.co.jp/article/detail/10004914/
- https://www.pachibee.jp/machines/index/125080003
- https://hisshobon.com/machineinfo/98516/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/066/kh01.php
- https://nana-press.com/kaiseki/machine/1011/31390/

### Exclusion audit sources
`eパリピ孔明`:
- https://news.p-world.co.jp/articles/31519/greenbelt
- https://1geki.jp/pachinko/e_paripikoumei/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sansei_pachi/315/kh01.php

`ぱちんこ シン・エヴァンゲリオン PREMIUM MODEL`:
- https://news.p-world.co.jp/articles/31685/yugitsushin
- https://news.p-world.co.jp/articles/31695/greenbelt
- https://p.hisshobon.jp/news/2184

`Pアズールレーン THE ANIMATION 異次元トリガー 79ver.`:
- https://www.kyoraku.co.jp/news/detail/839
- https://www.kyoraku.co.jp/news/detail/846
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/kyoraku_pachi/228/kh02.php
- https://yugi-nippon.com/pachinko-new-machine/post-72524/

## Effective DB state
Previous effective state: 126 machine records / 125 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **127**
- COMPLETE_CORE: **126**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-09-08 `デジハネP 頭文字D せかんど` is the next unprocessed chronological candidate. Audit LT eligibility first. If non-LT, document exclusion and continue immediately to `P FAIRY TAIL 超一夜Ver.`; if LT eligible, collect full core/LT structure. Then process `P真・座頭市物語 LT99Ver.` and verify `Pデビルマン-THE FINAL- 179Ver.` date/eligibility before closing the 2025-09-08 boundary.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.