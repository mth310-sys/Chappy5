# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 3 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to relay records
- previous `LATEST_HANDOFF.md` / Relay 2: checked
- existing LT machine records / queue state checked

## This relay
Continued the chronological queue at 2024-12-02 and completed the first queued LT machine.

### Added COMPLETE_CORE
`P GO!GO!郷～豪遊の5～` / ニューギン
- path: `docs/lt_pachinko_db/machines/2024-12-02_p_gogo_go_gouyu_no_5.md`
- formal model: `P GO！GO！郷～豪遊の5～N-VYLT`
- release: 2024-12-02
- type: 甘デジ / 1種2種混合 / 転落抽選 / LT / 遊タイム
- normal: 1/99.9
- right-side effective probability: 1/32.9
- initial payout: 5R 250 payout
- HYPER GO!GO! RUSH entry: 51%
- lower RUSH continuation: about70% (about67% + residual-hold return)
- LT: `LUCKY GO!GO! RUSH`
- LT continuation: about92.3% (about91.4% + residual-hold return)
- lower-RUSH special-2 allocation: 10R 840 + LT 0.3%; 10R 840 + lower RUSH 66.7%; 2R 100 + normal 33.0%
- LT special-2 allocation: 10R 840 67.0%; 2R 100 continuation 24.4%; 2R 100 to normal 8.6%; residual-hold return remains possible
- special LT route: low-probability 299 spins -> 遊タイム / time-shortening 10000 -> LT direct
- no inferred combined LT arrival probability. A direct normal-initial-hit denominator including the Yu-time route was not confirmed, so it remains UNVERIFIED.
- no conflict found.

## Cross-check notes
- 遊技通信 confirms formal model, 1/99.9 -> 1/32.9, RUSH51%/about70%, LT about92.3%, 299-spin Yu-time route, 12/2 introduction.
- Amusement Japan independently confirms sweet-spec LT/Yu-time, RUSH51%/about70%, LT about92%, LT 10R share about67%, 12/2 national introduction.
- Greenbelt confirms game flow, residual four holds, 299-spin Yu-time direct LT, lower/LT continuation.
- P-WORLD confirms lower-RUSH LT allocation about0.3% and definition of about91.4% + residual hold = about92.3%.
- detailed payout allocations are cross-checked against Chonborista and Ichigeki.
- do not mix this record with 2024-05-07 `P GO!GO!郷 革命の5`.

## Effective DB state
- machine records: **37**
- COMPLETE_CORE: **36**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- 2024-12-02 boundary remains OPEN; do not update INDEX as closed yet.

## 2024-12-02 remaining chronological queue
1. `e大工の源さん超韋駄天2 フルスイングLT` / 三洋物産
2. `P ToLOVEるダークネス 199ver.` / 平和
3. `PシャカラッシュZ` / マルホン工業
4. `P真・一騎当千～桃園の誓い～199LTver.` / D-light / 大一商会系
5. `Pえとたま2 神祭` / ユニバーサル系

Re-enumerate the 2024-12-02 same-day calendar before declaring the boundary exhaustive/closed.

## Next restart point
Start with **`e大工の源さん超韋駄天2 フルスイングLT` (2024-12-02)**. Collect full basic spec, RUSH/LT structure, exact entry route/rates, continuation, payout allocations, time-shortening/special systems and game flow; cross-check multiple source families. Then continue the remaining 12/02 queue in order. No inference; unresolved source disagreements remain CONFLICT.

## Sources used this relay
- https://news.p-world.co.jp/articles/29481/yugitsushin
- https://amusement-japan.co.jp/article/detail/10004622/
- https://news.p-world.co.jp/articles/29648/greenbelt
- https://www.p-world.co.jp/machine/database/10172
- https://chonborista.com/pachinko/newgin/225993/
- https://1geki.jp/pachinko/p_go3_gouyuuno5/51/
- https://1geki.jp/pachinko/p_go3_gouyuuno5/53/
- https://1geki.jp/pachinko/p_go3_gouyuuno5/25/
