# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point was `P攻殻機動隊SAC_2045 大入りLTver`; duplicate search completed before write.

## This relay
### P攻殻機動隊SAC_2045 大入りLTver — COMPLETE_CORE added
path: `docs/lt_pachinko_db/machines/2025-05-07_p_ghost_in_the_shell_sac_2045_ooiri_ltver.md`
- D-light（ディ・ライト / 大一商会系） / 型式 `P攻殻機動隊SAC_2045AH-RS` / 2025-05-07 / ライトミドル・大入りスタート・1種2種混合LT。
- 通常約1/189.9、右約1/69.2。通常初当りは2R約300個、50%で下位 `GHOST RUSH`、50%通常。
- GHOST RUSHは72回、継続約65%。
- LT正式名称 `GHOST RUSH BURST`。GHOST RUSH中大当りの10%（10R当選を分母にすると20%）でLT発動。
- LTは170回、継続約92%。右打ちは普通図柄抽選で残保留なしとする解析資料あり。
- 下位RUSH中振り分け: 10R約1500個+LT 10% / 10R約1500個+下位継続 40% / 3R約200個+下位継続 50%。
- LT中: 10R約1500個 50% / 3R約200個 50%、双方LT継続。
- 通常初当り基準の総LT到達率は高信頼資料で直接値を確認できず `UNVERIFIED_AFTER_RESEARCH`。独自合算しない。
- 2024-09-17 `P攻殻機動隊SAC_2045 199LTver.` と明確に別レコード。
- 遊技通信、P-WORLD、一撃、必勝本、HAZUSEを横断。confidence `INDUSTRY + ANALYSIS_HIGH`。

Sources:
- https://news.p-world.co.jp/articles/30556/yugitsushin
- https://www.p-world.co.jp/machine/database/10252
- https://1geki.jp/pachinko/p_kksac2045_ooirilt/
- https://1geki.jp/pachinko/p_kksac2045_ooirilt/51/
- https://1geki.jp/pachinko/p_kksac2045_ooirilt/52/
- https://p.hisshobon.jp/machine/4513/1/108878
- https://p.hisshobon.jp/machine/4513/1/108879
- https://hazuse.com/machine/pachinko/PX0285/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — OPEN
1. P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
2. デジハネP北斗の拳 慈母 — COMPLETE_CORE
3. PLT世界でいちばん強くなりたい!2 — COMPLETE_CORE
4. e仮面ライダーBLACK — COMPLETE_CORE
5. P攻殻機動隊SAC_2045 大入りLTver — COMPLETE_CORE (this relay)
6. P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver. — LT-positive by title; NEXT, verify full core
7. PF機動戦士ガンダムユニコーン再来 129ver. — verify LT/non-LT before registration
8. P ToLOVEるダークネス 100ver. — verify LT/non-LT before registration
9. P海物語 極JAPAN / P織田信奈の野望 下剋上 / P乗物娘 with CYBER JAPAN DANCERS 2nd season — verify LT status during boundary re-enumeration; do not assume.

Independent calendar retained:
- https://p-johojima.jp/machine_spec/post-2074/

## Effective DB state
Previous effective state: 91 records / 90 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **92**
- COMPLETE_CORE: **91**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until INDEX integration.

## Next restart point
**Continue 2025-05-07 with `P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver.`. Verify exact formal model/manufacturer, normal/right probabilities, initial/RUSH distributions, lower RUSH structure, LT formal name, LT route/rate, continuation definition, payout distribution, support counts and special systems across industry/multiple analysis sources. Then verify PF機動戦士ガンダムユニコーン再来 129ver. and P ToLOVEるダークネス 100ver. for LT/non-LT status, followed by the remaining 5/7 candidates. Re-enumerate the full 2025-05-07 boundary from independent calendars before closing it.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
