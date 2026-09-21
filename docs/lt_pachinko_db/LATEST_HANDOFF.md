# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point was `e仮面ライダーBLACK`; existing machine records checked before write.

## This relay
### e 仮面ライダーBLACK — COMPLETE_CORE added
path: `docs/lt_pachinko_db/machines/2025-05-07_e_kamen_rider_black.md`
- 京楽産業. / 型式 `e仮面ライダーBLACK-KRJ2` / canonical 2025-05-07 / スマパチ・デカヘソ・一種二種混合LT。
- 図柄揃い約1/349.9（ブラックギフト除外）、ブラックギフト約1/697〜1/701、合算大当り約1/233、右実質約1/50.1。
- 図柄揃いは3R約450個。50%で下位 `JUSTICE RUSH`、50%通常。
- JUSTICE RUSHは41回+残保留4個、約60%継続（残保留引き戻し約7.7%込み）。
- LT正式表記 `EXTREAM JUSTICE RUSH`。下位RUSH中大当りの50%（10R約1500個）でLT。ブラックギフトにもLT昇格経路あり、具体割合は十分な直接値を確認できずUNVERIFIED_AFTER_RESEARCH。
- LTは75回+残保留4個、約80%継続。LT中は約3000個（1500×2）50% / 約1500個50%、双方LT継続。
- RUSH終了時残保留4個での引き戻しは約7.7%、引き戻し時は1500個+LT突入/継続。
- 通常当選全体を分母にした総LT到達率はブラックギフト経路を含む直接公表値を確認できずUNVERIFIED_AFTER_RESEARCH。独自合算しない。
- メーカー公式、業界2系統、一撃、なな徹、K-Navi、ちょんぼりすたを横断。confidence `OFFICIAL + INDUSTRY + ANALYSIS_HIGH`。
- 導入日は遊技通信転載に2025-04-07表記があるが、メーカー公式が2025-05-07を明記し、グリーンべると・一撃等も5/7一致。canonical 5/7、競合注記をレコードに保存。

Sources:
- https://www.kyoraku.co.jp/news/detail/817
- https://news.p-world.co.jp/articles/30577
- https://news.p-world.co.jp/articles/30558/yugitsushin
- https://1geki.jp/pachinko/e_kmnr_black/
- https://1geki.jp/pachinko/e_kmnr_black/53/
- https://nana-press.com/kaiseki/machine/950/29098/
- https://p-kn.com/pachinko/4322/
- https://chonborista.com/pachinko/kyoraku/234588/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — OPEN
1. P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
2. デジハネP北斗の拳 慈母 — COMPLETE_CORE
3. PLT世界でいちばん強くなりたい!2 — COMPLETE_CORE
4. e仮面ライダーBLACK — COMPLETE_CORE (this relay)
5. P攻殻機動隊SAC_2045 大入りLTver — LT-positive candidate; NEXT
6. P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver. — LT-positive by title; verify full core
7. PF機動戦士ガンダムユニコーン再来 129ver. — verify LT/non-LT before registration
8. P ToLOVEるダークネス 100ver. — verify LT/non-LT before registration
9. P海物語 極JAPAN / P織田信奈の野望 下剋上 / P乗物娘 with CYBER JAPAN DANCERS 2nd season — verify LT status during boundary re-enumeration; do not assume.

Independent calendar retained:
- https://p-johojima.jp/machine_spec/post-2074/

## Effective DB state
Previous effective state: 90 records / 89 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **91**
- COMPLETE_CORE: **90**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until INDEX integration.

## Next restart point
**Continue 2025-05-07 with `P攻殻機動隊SAC_2045 大入りLTver`. Verify exact formal model/manufacturer, normal/right probabilities, initial/RUSH distributions, lower RUSH structure, LT formal name, LT route/rate, continuation definition, payout distribution, support counts and special systems across industry/multiple analysis sources. Then continue `P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver.` and verify the remaining 5/7 candidates. Re-enumerate the full 2025-05-07 boundary from independent calendars before closing it.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
