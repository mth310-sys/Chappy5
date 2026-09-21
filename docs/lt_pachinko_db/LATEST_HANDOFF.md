# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point was `PF機動戦士ガンダムユニコーン再来 129ver.`; duplicate search completed before write.

## This relay
### PF機動戦士ガンダムユニコーン再来 129ver. — COMPLETE_CORE added
path: `docs/lt_pachinko_db/machines/2025-05-07_pf_gundam_unicorn_sairai_129ver.md`
- SANKYO / 型式 `Pフィーバー機動戦士ガンダムユニコーン2Y` / 2025-05-07 / 1種2種混合ST型。
- 通常図柄揃い約1/129.8、右約1/40.6（特図2の大当り+小当り合算）。
- 初当り3R約300個。約51%で下位 `覚醒HYPER`、約49%通常。
- 覚醒HYPERは時短60回+残保留4、TOTAL継続約80%（60回約78% + 残保留4約9%を加味）。
- 覚醒HYPER中大当り約4%が7R×2 約1400個+LT `超覚醒HYPER`、約96%が7R約700個+下位継続。
- 超覚醒HYPERは時短100回+残保留4、TOTAL継続約93%（100回約92% + 残保留4約9%を加味）。LT中大当りALL 7R約700個。
- ST最終変動+残保留当選は覚醒HYPER側振り分けとなる例外を保持。
- 通常初当り基準の総LT到達率は直接公表値を確認できず、経路から独自算出せず `UNVERIFIED_AFTER_RESEARCH`。
- 遊技通信/P-WORLD、必勝本、ちょんぼりすた、一撃を横断。confidence `INDUSTRY + ANALYSIS_HIGH`、conflict none。

Sources:
- https://news.p-world.co.jp/articles/30264/yugitsushin
- https://www.p-world.co.jp/machine/database/10229
- https://hisshobon.com/machineinfo/97446/
- https://chonborista.com/pachinko/sankyo/235204/
- https://1geki.jp/pachinko/p_gundam_uc2_129/52/

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
7. PF機動戦士ガンダムユニコーン再来 129ver. — COMPLETE_CORE (this relay)
8. P ToLOVEるダークネス 100ver. — NEXT; preliminary cross-check confirms upper ST `超ハーレムTIME` (ST100+残保留4, 約85%) after the second RUSH hit; determine/record formal LT designation and full route before registration.
9. P織田信奈の野望 下剋上 — LT-positive candidate confirmed in preliminary industry/search material (`関ケ原乱舞・極`, ST129回+決戦前夜, 約90%); full record required after ToLOVEる.
10. P海物語 極JAPAN / P乗物娘 with CYBER JAPAN DANCERS 2nd season — verify LT status during boundary re-enumeration; do not assume.

Independent calendar retained:
- https://p-johojima.jp/machine_spec/post-2074/

## Effective DB state
Previous effective state: 93 records / 92 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **94**
- COMPLETE_CORE: **93**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until INDEX integration.

## Next restart point
**Continue 2025-05-07 with `P ToLOVEるダークネス 100ver.`. Preliminary sources show normal 1/100.0, RUSH entry 100%, lower `楽園計画` ST40+残保留4 about 55%, and upper `超ハーレムTIME` ST100+残保留4 about 85%, reached on the second RUSH hit; verify that the upper state is formally the LT and collect the exact LT route/definitions without inferring unpublished total arrival probability. Then process confirmed LT candidate `P織田信奈の野望 下剋上`, verify the remaining 5/7 candidates, and re-enumerate the full 2025-05-07 boundary from at least two independent calendars before closing it. Only LT-positive machines receive full records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
