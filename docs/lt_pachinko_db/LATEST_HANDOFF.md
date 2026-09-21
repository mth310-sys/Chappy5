# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `P ToLOVEるダークネス 100ver.`

## This relay
### P ToLOVEるダークネス 100ver. — EXCLUDED (LT非搭載)
Preliminary handoff had treated `超ハーレムTIME` as an LT candidate, but full cross-check disproved this.
- 平和 / 2025-05-07 / 1種2種混合 / 通常約1/100.0、右約1/56.2。
- 初当り100%で楽園計画(ST40+残保留4、約55%)。
- 楽園計画中2回目の大当りで上位 `超ハーレムTIME` (ST100+残保留4、約85%)。
- パチマガスロマガ詳細スペックが明示的に `ラッキートリガー: なし` としている。したがって上位RUSHではあるがLTではなく、本DBには登録しない。
- 業界発表（Amusement Japan/P-WORLD転載）、P-WORLD、必勝本、一撃でもゲーム構造を照合。LT搭載を示す一次/高信頼資料は確認できない。
Sources:
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/heiwa_pachi/385/kh02.php
- https://amusement-japan.co.jp/article/detail/10004772/
- https://news.p-world.co.jp/articles/30391/amusement
- https://www.p-world.co.jp/machine/database/10243
- https://hisshobon.com/machineinfo/97403/
- https://1geki.jp/pachinko/p_toloveru_darkness100/39/

### P織田信奈の野望 下剋上 — COMPLETE_CORE added
path: `docs/lt_pachinko_db/machines/2025-05-07_p_oda_nobuna_gekokujou.md`
- 高尾 / 型式資料 `P織田信奈の野望全国版V1D` / 2025-05-07 / 1種2種混合・C時短併用。
- 通常1/199.8、RUSH中約1/63.4、決戦前夜約1/24.9。
- 初当り66%で関ヶ原乱舞、34%で決戦前夜。決戦前夜引き戻し込みRUSH TOTAL突入約72.3%。
- 関ヶ原乱舞: ST62回 + 決戦前夜、TOTAL継続約70%。
- LT `関ヶ原乱舞・極`: ST129回 + 決戦前夜、TOTAL継続約90%。
- LT主要経路: 決戦前夜成功（引き戻し約19% / 発表上「約1/5でLT」）、または関ヶ原乱舞中大当り0.2%の10R直行。LT終了後も決戦前夜で再突入機会。
- 特図1: 10R1500個+ST62 0.5% / 2R300個+ST62 65.5% / 2R300個+決戦前夜34%。
- 関ヶ原乱舞: 10R1500個+LT 0.2% / 10R1500個+下位 50.5% / 3R450個+下位49.3%。
- LT/決戦前夜: 10R1500個50.7% / 3R450個49.3%、いずれもST129+決戦前夜。
- 通常初当り全体を分母とする総LT到達率は直接値未確認のため `UNVERIFIED_AFTER_RESEARCH`。経路から独自合算しない。
- confidence `INDUSTRY + ANALYSIS_HIGH`; conflict none。
Sources:
- https://amusement-japan.co.jp/article/detail/10004737/
- https://news.p-world.co.jp/articles/30562/amusement
- https://www.p-world.co.jp/machine/database/10225
- https://hisshobon.com/machineinfo/97432/
- https://1geki.jp/pachinko/p_odanobuna_gj/39/
- https://pachiseven.jp/machines_v2/7128
- https://p-johojima.jp/machine_spec/post-3240/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — OPEN
1. P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
2. デジハネP北斗の拳 慈母 — COMPLETE_CORE
3. PLT世界でいちばん強くなりたい!2 — COMPLETE_CORE
4. e仮面ライダーBLACK — COMPLETE_CORE
5. P攻殻機動隊SAC_2045 大入りLTver — COMPLETE_CORE
6. P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver. — COMPLETE_CORE
7. PF機動戦士ガンダムユニコーン再来 129ver. — COMPLETE_CORE
8. P ToLOVEるダークネス 100ver. — LT非搭載、EXCLUDED
9. P織田信奈の野望 下剋上 — COMPLETE_CORE (this relay)
10. P海物語 極JAPAN / P乗物娘 with CYBER JAPAN DANCERS 2nd season — NEXT: verify LT status, then re-enumerate full 5/7 boundary from at least two independent calendars.

## Effective DB state
Previous effective state: 94 records / 93 COMPLETE_CORE / 1 CONFLICT.
This relay excluded ToLOVEる (no record) and added 1 COMPLETE_CORE.
- machine records: **95**
- COMPLETE_CORE: **94**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until INDEX integration.

## Next restart point
**Continue 2025-05-07 boundary with LT-status verification for `P海物語 極JAPAN` and `P乗物娘 with CYBER JAPAN DANCERS 2nd season`. Then re-enumerate all 2025-05-07 pachinko introductions from at least two independent calendars and compare against existing records/exclusions before marking the boundary CLOSED. Only LT-positive machines receive full records. After closure, advance chronologically to the next introduction date.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
