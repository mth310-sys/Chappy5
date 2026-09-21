# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- existing machine records searched before write; no duplicate `デジハネP北斗の拳 慈母` record existed.

## This relay
### デジハネP北斗の拳 慈母 — COMPLETE_CORE added
path: `docs/lt_pachinko_db/machines/2025-05-07_digihane_p_hokuto_no_ken_jibo.md`
- サミー / 型式 `Pデジハネ北斗の拳慈母SSPC` / 甘デジST / LT搭載。
- canonical release date: 2025-05-07. 2025-03-06 industry announcement said mid-March planned introduction, but actual introduction date is 5/7 across later machine sources; planned date is preserved only as a chronology note.
- Normal about 1/79.9; ST about 1/7.99; ST entry 100%, ST 5 spins.
- 特図1: 10R about 1000 balls + 55 support 1.2%; 5R about 500 + 30 support 78.8%; 2R about 140 + 5 support 20.0%.
- CHANCE TIME / remaining-hold 特図2: 10R + LT/171 support 1.0%; 10R +55 0.2%; 5R +30 78.8%; 2R +30 20.0%.
- LT `HYPER BATTLE MODE`: right-side 10R HYPER BATTLE BONUS → `無想転生チャンス` success. LT entry is 1.0% of all electric-chucker hits, equivalently about 83.3% conditional on 10R; denominators are explicitly separated and not treated as conflict.
- LT is ST5 + time-shortening166 = 171 support, continuation about 94.0% including remaining holds. 必勝本 detailed explanation gives about 93.7%, consistent as precision vs rounded display.
- LT payouts: 10R 1.2% / 5R 78.8% / 2R 20.0%, all return to 171-support LT.
- Direct total LT arrival rate per normal initial hit was not found after industry + multiple analysis searches; kept `UNVERIFIED_AFTER_RESEARCH`, no independent route calculation.
- Sources: 遊技通信/P-WORLD industry news, 必勝本 basic/distribution/LT pages, 一撃, なな徹. Confidence `INDUSTRY + ANALYSIS_HIGH`. No conflict.

Sources:
- https://news.p-world.co.jp/articles/30366/yugitsushin
- https://hisshobon.com/machineinfo/97420/
- https://hisshobon.com/machineinfo/97421/
- https://hisshobon.com/machineinfo/97422/
- https://1geki.jp/pachinko/p_hokutonoken_jibo/
- https://nana-press.com/kaiseki/machine/942/28218/

## Previous chronology decisions retained
### PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver. — LT-negative, excluded
- 1種2種混合甘デジ / `魔王PLAYモード`; detailed sources show V-STOCK loop but no LT structure.
- Independent calendar places it 2025-04-07. Do not register absent distinct LT-positive evidence.

### P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
path: `docs/lt_pachinko_db/machines/2025-05-07_p_egashira_250_chouama_lt.md`
- canonical nationwide 2025-05-07; limited Shinjuku advance introduction 2025-04-21 preserved in notes, no duplicate under 4/21.

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
1. e東京喰種 — COMPLETE_CORE
2. Pゾンビランドサガ — COMPLETE_CORE
3. P痛いのは嫌なので防御力に極振りしたいと思います。 — COMPLETE_CORE
- 江頭超甘LT 4/21 is advance-only; canonical 5/7.

### 2025-05-07 — OPEN
1. P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
2. デジハネP北斗の拳 慈母 — COMPLETE_CORE (this relay)
3. PLT世界でいちばん強くなりたい!2 — LT-positive candidate; NEXT
4. e仮面ライダーBLACK — LT-positive candidate
5. P攻殻機動隊SAC_2045 大入りLTver — LT-positive candidate
6. P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver. — LT-positive by title; verify full core
7. PF機動戦士ガンダムユニコーン再来 129ver. — verify LT/non-LT before registration
8. P ToLOVEるダークネス 100ver. — verify LT/non-LT before registration
9. P海物語 極JAPAN / P織田信奈の野望 下剋上 / P乗物娘 with CYBER JAPAN DANCERS 2nd season — verify LT status during boundary re-enumeration; do not assume.

Independent calendar source retained:
- https://p-johojima.jp/machine_spec/post-2074/

## Effective DB state
Previous effective state: 88 records / 87 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **89**
- COMPLETE_CORE: **88**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until INDEX integration.

## Next restart point
**Continue 2025-05-07 with `PLT世界でいちばん強くなりたい!2`. Verify exact model/formal model, normal/right probabilities, initial/RUSH distributions, lower RUSH structure, LT formal name, entry route/rate, continuation definition, payout distribution and support counts across manufacturer/industry/analysis sources. Then continue the remaining 5/7 candidates in order, re-enumerate the full boundary from independent calendars, and close 5/7 only when every LT-positive machine is recorded and LT-negative candidate explicitly excluded.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
