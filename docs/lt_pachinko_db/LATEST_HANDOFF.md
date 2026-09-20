# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- exact restart point `PシャカRUSH Z` confirmed

## This relay
Continued the OPEN 2024-12-02 boundary.

### Added COMPLETE_CORE — PシャカRUSH Z
- path: `docs/lt_pachinko_db/machines/2024-12-02_p_shaka_rush_z.md`
- formal model: `PシャカRUSH Z1`
- manufacturer: マルホン工業
- release: 2024-12-02
- normal/right: 1/197.4 → 1/67.0
- RUSH entry: 100%
- lower `シャカRUSH`: ST76, approx70%
- LT `Z超RUSH`: ST108 or 3000, approx93.5%
- LT routes: initial 3% direct; lower-RUSH hit 6%
- LT hit allocation: 9R+3000 6% / 6R+3000 46% / 2R+3000 13% / 6R+108 28% / 2R+108 7%; 65% is effectively-next-hit ST3000
- payout values retained as payout: approx1018/682/234
- total LT arrival from ordinary initial hit not inferred

### Same-day re-enumeration found missing LT machine — P盾の勇者の成り上がり
The 2024-12-02 introduction calendar contains `P盾の勇者の成り上がり`; current-main search found no existing record. Multiple analysis/industry references directly identify it as LT-equipped, so it was collected before closing the boundary.

### Added COMPLETE_CORE — P盾の勇者の成り上がり
- path: `docs/lt_pachinko_db/machines/2024-12-02_p_tate_no_yuusha_no_nariagari.md`
- formal model: `P盾の勇者の成り上がりGFPC`
- manufacturer: サミー
- release: 2024-12-02
- normal/right: approx1/319.7 → approx1/45.5
- overall first RUSH entry: 80%
- `RISING RUSH`: falling/transfer structure, approx75% battle win
- `盾の勇者のアルティメットタイム`: ST80+residual4, approx85%
- LT `裏アルティメットタイム`: approx91%
- LT routes: initial approx3.3%; right-hit approx10% (about20% of 10R hits); Break Time approx1/504 has a 0.1% LT allocation in the direct analysis source
- LT increases effective continuation by changing approx40% of hit allocations to next-hit-guaranteed state
- payout/acquired kept separate; major payout values 1500/600/300
- no total LT arrival probability inferred

## Boundary audit
2024-12-02 new-machine calendar re-enumerated. LT records already accounted for in the relay chain include:
- e大工の源さん超韋駄天2 フルスイングLT
- Pフィーバー機動戦士ガンダムSEED LT-Light ver.
- P ToLOVEるダークネス 199ver.
- P盾の勇者の成り上がり
- Pえとたま2 神祭
- P真・一騎当千～桃園の誓い～199LTver.
- P GO!GO!郷 豪遊の5
- PシャカRUSH Z

`P ゴジラ対エヴァンゲリオン セカンドインパクト G` (P version, 2024-12-02) was checked and is NOT treated as LT: industry material describes the ordinary RUSH/transfer structure without LT. Do not confuse it with the separate smart-pachinko `e ゴジラ対エヴァンゲリオン セカンドインパクト G 破壊神覚醒`, introduced 2024-12-16 and explicitly LT-equipped.

## Effective DB state
Previous handoff counted 44 records / 43 COMPLETE_CORE / 1 CONFLICT. This relay added 2 records.
- machine records: **46**
- COMPLETE_CORE: **45**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- 2024-12-02 boundary: **CLOSED** based on the current introduction-calendar enumeration and LT cross-check.
- `INDEX.md` remains stale and must be reconciled in a later integration pass; do not trust its 30-record count/restart point.

## Next restart point
1. Re-sync latest main first.
2. Advance chronologically to **2024-12-16**.
3. First candidate: **e ゴジラ対エヴァンゲリオン セカンドインパクト G 破壊神覚醒** — explicitly LT-equipped, introduced 2024-12-16; verify no existing record under alternate filename before creating.
4. Re-enumerate all 2024-12-16 pachinko introductions and collect every LT-equipped machine; exclude non-LT variants.
5. Continue to avoid inferred total LT-arrival values where no direct published denominator/value exists.
6. QA older PARTIAL/UNVERIFIED/CONFLICT opportunistically, without redoing COMPLETE_CORE records.

## Sources used this relay
- https://www.p-world.co.jp/machine/database/10131
- https://nana-press.com/kaiseki/machine/859/25206/
- https://pachiseven.jp/machines/7037/cutout/2
- https://www.pachibee.jp/machines/mode/124100007
- https://www.p-world.co.jp/machine/database/10134
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/319/kh01.php
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/319/kh04.php
- https://hisshobon.com/machineinfo/94270/
- https://1geki.jp/pachinko/p_tateyuu/39/
- https://1geki.jp/pachinko/p_tateyuu/53/
- 2024-12-02 calendar: https://pachinkopachisro.com/archives/57949784.html
- P-version Godzilla/Eva non-LT boundary evidence: https://news.p-world.co.jp/articles/29524/yugitsushin
- next candidate: https://www.pachibee.jp/machines/index/124110000
