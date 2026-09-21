# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- existing 2025-04-21 machine records checked before write; no duplicate record created.

## This relay — Boundary verification
### PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver. — LT-negative, excluded
- Multiple machine/analysis sources identify the machine as a 1種2種混合甘デジ with normal 1/99.9, RUSH `魔王PLAYモード` entry 50%, TOTAL continuation about 87%, V-STOCK based loop.
- No LT/Lucky Trigger structure is present in the detailed machine data checked; P-WORLD and 一撃 describe the V-STOCK system without an LT state.
- Independent release calendar places this machine on 2025-04-07, not 2025-04-21. It therefore was a stale/misplaced candidate in the previous handoff, but remains excluded because LT-positive evidence is absent.
- Do not create a machine record unless future primary evidence proves an LT-equipped distinct specification.

Sources:
- https://www.p-world.co.jp/machine/database/10240
- https://1geki.jp/pachinko/pa_isekaimaou99/39/
- https://amusement-japan.co.jp/article/detail/10004802/
- https://www.goraku-sangyo.com/ニューギン　パチンコ新機種「pa異世界魔王と召喚/
- https://p-johojima.jp/machine_spec/post-2074/

### P【超甘LT】江頭2:50inナナシー 奇跡の99% — chronology resolved and COMPLETE_CORE added
path: `docs/lt_pachinko_db/machines/2025-05-07_p_egashira_250_chouama_lt.md`
- 豊丸産業 / 型式 `P江頭2：50 inナナシーAX2` / 二種 / 超甘LT。
- Canonical nationwide release date: 2025-05-07. Industry announcement confirms limited advance introduction from 2025-04-21 at three Shinjuku stores, five units each. DB convention keeps the machine record at nationwide introduction date while preserving the advance date in notes.
- Normal 1/33.3, right 1/1.0 (V入賞条件). Initial payout about 250 balls.
- 特図1: 0.4% direct LT `EGASYRUSH`; 33.1% to `おしえてエガちゃんぼーなす` with about 33% success to BAN解禁タイム; 66.5% normal.
- BAN解禁タイム: initial five-bonus set; LT promotion about 26.1%. P-WORLD lists BAN解禁タイム entry about 10.9%.
- LT `EGASYRUSH`: public continuation about 98.6% / about 99%; about 138 balls per hit. Published definition incorporates the high LT loop and re-promotion chance after the post-LT BAN解禁タイム; do not treat all published percentages as the same denominator.
- On LT non-continuation, move to four-bonus BAN解禁タイム; re-promotion to EGASYRUSH about 21.5%.
- Total LT arrival rate from all normal-time hits was not found as a direct published value; kept UNVERIFIED rather than independently calculating from route probabilities.
- 2024 `P江頭2:50 inナナシーLT` (about 1/129.7 / EGASYRUSH about 90.2%) is a different specification and remains separated.

Sources:
- https://amusement-japan.co.jp/article/detail/10004819/
- https://www.p-world.co.jp/machine/database/10237
- https://1geki.jp/pachinko/p_ega_nanasy_calt/
- https://1geki.jp/pachinko/p_ega_nanasy_calt/51/
- https://1geki.jp/pachinko/p_ega_nanasy_calt/52/
- https://hisshobon.com/machineinfo/97389/
- https://hazuse.com/hd/410828-2/

confidence: INDUSTRY + ANALYSIS_HIGH（複数一致）

## Boundary state
### 2025-04-07 — CLOSED
- `PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver.` was rechecked because it appeared as a stale candidate in prior handoff. It is LT-negative and excluded; this does not reopen the boundary.

### 2025-04-21 — CLOSED
Regular nationwide schedule is fully accounted for:
1. e東京喰種 — COMPLETE_CORE
2. Pゾンビランドサガ — COMPLETE_CORE
3. P痛いのは嫌なので防御力に極振りしたいと思います。 — COMPLETE_CORE

Special chronology case resolved:
- `P【超甘LT】江頭2:50inナナシー 奇跡の99%` had limited 2025-04-21 Shinjuku advance introduction, but nationwide/canonical introduction is 2025-05-07. Record added under 5/7 with advance date explicitly preserved. Do not duplicate under 4/21.

### 2025-05-07 — OPEN
Independent release calendar shows the following LT-positive or LT-candidate machines. `P【超甘LT】江頭2:50inナナシー 奇跡の99%` is COMPLETE_CORE this relay. Continue with the remaining candidates in this boundary and verify every one before closing:
1. P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
2. デジハネP北斗の拳 慈母 — LT-positive candidate; next
3. PLT世界でいちばん強くなりたい!2 — LT-positive candidate
4. e仮面ライダーBLACK — LT-positive candidate
5. P攻殻機動隊SAC_2045 大入りLTver — LT-positive candidate
6. P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver. — LT-positive by title; verify full core
7. PF機動戦士ガンダムユニコーン再来 129ver. — verify LT/non-LT before registration
8. P ToLOVEるダークネス 100ver. — verify LT/non-LT before registration
9. P海物語 極JAPAN / P織田信奈の野望 下剋上 / P乗物娘 with CYBER JAPAN DANCERS 2nd season — verify LT status during boundary re-enumeration; do not assume.

Independent calendar source:
- https://p-johojima.jp/machine_spec/post-2074/

## Effective DB state
Previous effective state: 87 records / 86 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **88**
- COMPLETE_CORE: **87**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth.

## Next restart point
**Continue 2025-05-07 with `デジハネP北斗の拳 慈母`. Confirm exact model name, normal/high-state probabilities, initial distribution, ST/time-shortening structure, LT formal state/name, LT route/rate, continuation definition and payouts across manufacturer/industry/analysis sources. Then proceed through the remaining 5/7 candidates above, re-enumerate the full boundary from independent calendars, and close 5/7 only when all LT-positive machines are accounted for and LT-negative candidates are explicitly excluded.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search current machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
