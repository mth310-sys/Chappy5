# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 5 / chronological collection + QA

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- exact restart point `P GO!GO!郷 豪遊の5` confirmed from Relay 4

## This relay
Continued the OPEN 2024-12-02 boundary from the exact Relay 4 restart point.

### Added COMPLETE_CORE — P GO!GO!郷 豪遊の5
- path: `docs/lt_pachinko_db/machines/2024-12-02_p_gogo_go_gouyuu_no_5.md`
- formal model: `P GO！GO！郷～豪遊の5～N-VYLT`
- manufacturer: ニューギン
- release: 2024-12-02
- normal/right probability: approx1/99.9 → approx1/32.9
- first RUSH: 51%
- lower `HYPER GO!GO! RUSH`: approx70% TOTAL = approx67% RUSH + residual-4 return
- LT: `LUCKY GO!GO! RUSH`
- LT routes: low-probability 299 spins → Yu-time direct LT; lower-RUSH hit allocation approx0.3% → LT
- LT continuation: approx92.3% TOTAL = approx91.4% LT + residual-4 return
- lower RUSH allocation: 10R+LT approx0.3% / 10R+lower approx66.7% / 2R+return-zone approx33.0%
- LT allocation: 10R approx840 payout + LT approx67.0% / 2R approx100 + LT approx24.4% / 2R approx100 + return-zone approx8.6%
- initial: 5R approx250 payout + RUSH 51% / normal 49%
- payout/acquired separated: P-WORLD explicitly labels payout; 10R approx840 includes other winning pockets
- no ordinary-initial-hit-based total LT arrival fixed value inferred because the Yu-time route changes the denominator
- explicitly separated from 2024-05-07 `P GO!GO!郷 革命の5`

### Same-day re-enumeration found another missing LT machine
`Pフィーバー機動戦士ガンダムSEED LT-Light ver.` was confirmed as a 2024-12-02 LT machine and was not found as an existing machine record under the canonical expected path. Added it before closing the boundary.

### Added COMPLETE_CORE — Pフィーバー機動戦士ガンダムSEED LT-Light ver.
- path: `docs/lt_pachinko_db/machines/2024-12-02_p_fever_gundam_seed_lt_light_ver.md`
- formal model: `Pフィーバー機動戦士ガンダムSEED YZ`
- manufacturer: SANKYO
- release: 2024-12-02
- normal: approx1/129.8
- first gate: approx99% to Aslan Battle Mode; breakthrough approx35%; public total RUSH entry approx36% including approx1% direct LT
- lower `フリーダムHYPER`: ST70, approx70%
- LT `フリーダムHYPER`: ST137, approx91%
- direct LT from normal: approx1% / 1500 payout
- lower RUSH hit allocation: 1500+LT approx10% / 1500+lower approx40% / 300+lower approx50%
- LT allocation: 1500+LT approx50% / 300+LT approx50%
- same mode name is used for lower and LT states; record explicitly separates ST70 vs ST137
- no inferred total LT arrival probability

## Cross-check / QA
- `P GO!GO!郷 豪遊の5`: 遊技通信 industry report, Greenbelt/P-WORLD industry report, P-WORLD/HAZUSE data, 一撃 and additional analysis agree on core structure. The approx70% and approx92.3% figures include residual-four return and are not stored as raw RUSH-only continuation.
- `Pフィーバー機動戦士ガンダムSEED LT-Light ver.`: Greenbelt + Amusement Japan industry reports and パチマガスロマガ/ちょんぼりすた agree on approx1/129.8, approx35% gate, ST70/137, approx70/91% and 1500/300 allocation structure.
- No guessed total LT arrival values were added.
- No payout values were converted into acquired-ball values.
- Existing `P GO!GO!郷 革命の5` CONFLICT remains untouched; 豪遊 is a distinct formal model and release.

## Effective DB state
- machine records: **44**
- COMPLETE_CORE: **43**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- 2024-12-02 boundary remains **OPEN** pending final same-day enumeration.
- `INDEX.md` remains stale; do not trust its 30-record count/restart point. Reconcile only after the 2024-12-02 boundary is closed.

## Same-day boundary status
Already processed in prior relay chain: `e大工の源さん超韋駄天2 フルスイングLT`, `P ToLOVEるダークネス 199ver.`, `P真・一騎当千～桃園の誓い～199LTver.`, `Pえとたま2 神祭` and other existing records.

New this relay: `P GO!GO!郷 豪遊の5`, `Pフィーバー機動戦士ガンダムSEED LT-Light ver.`.

`PシャカRUSH Z` is confirmed LT-equipped, introduced 2024-12-02, and should be processed next unless a current-main record under a differently named path is found during exact re-sync. HAZUSE identifies formal model `PシャカRUSH Z1`, normal 1/197.4, LT equipped, release 2024-12-02. 一撃 cross-check gives RUSH entry 100%, lower approx70%, LT/Z超RUSH approx93.5%, right 1/67.0, support 76/108/3000 and separately reports payout/acquired values.

## Next restart point
1. Re-sync latest main first.
2. Check whether `PシャカRUSH Z` already exists under an alternate filename. If absent, collect/register it as the next 2024-12-02 LT machine.
3. Re-enumerate all 2024-12-02 introductions again. Do not close the date until `PシャカRUSH Z` and any remaining LT candidates are accounted for.
4. QA one existing older record in parallel, prioritizing PARTIAL/UNVERIFIED/CONFLICT without guessing.
5. Once the date boundary is CLOSED, reconcile `INDEX.md` with the effective record count and advance to the next chronological introduction date.

## Sources used this relay
- https://www.yugitsushin.jp/news/%E6%A5%AD%E7%95%8C%E5%88%9D%EF%BC%81%E9%81%8A%E3%82%BF%E3%82%A4%E3%83%A0%E5%88%B0%E9%81%94%E3%81%A7lt%E7%AA%81%E5%85%A5%EF%BC%81%EF%BC%81%E3%80%8Cpgo%EF%BC%81go%EF%BC%81%E9%83%B7-%E8%B1%AA%E9%81%8A/
- https://news.p-world.co.jp/articles/29648/greenbelt
- https://www.p-world.co.jp/machine/database/10172
- https://1geki.jp/pachinko/p_go3_gouyuuno5/
- https://news.p-world.co.jp/articles/28954/greenbelt
- https://news.p-world.co.jp/articles/28971/amusement
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/527/kh01.php
- https://chonborista.com/pachinko/sankyo/225964/
- next-candidate verification: https://hazuse.com/hd/4p0881/ and https://1geki.jp/pachinko/p_shakarushz/
