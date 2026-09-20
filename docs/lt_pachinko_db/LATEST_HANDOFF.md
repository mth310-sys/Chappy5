# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- exact restart point `Pえとたま2 神祭` confirmed

## This relay
Continued from exact restart point `Pえとたま2 神祭` (2024-12-02).

### Added COMPLETE_CORE
`Pえとたま2 神祭` / メーシー・ユニバーサルエンターテインメント
- path: `docs/lt_pachinko_db/machines/2024-12-02_p_etotama2_kamimatsuri.md`
- formal model: `Pえとたま2MY`
- release: 2024-12-02
- normal/right probability: 1/199.80 → 1/59.57
- initial: 4R approx460 payout
- first gate: 77% to `えとたまバトル冥王はーです編`, time-shortening37 + remaining4, total breakthrough approx50%
- lower RUSH: `えとたまRUSH祭`, time-shortening90 + remaining4, total continuation approx80%
- LT: `超えとたまRUSH祭`, time-shortening130 + remaining4, total continuation approx90%
- LT route: lower-RUSH hit allocation 12%; analysis source also states approx15.6% of 10R hits (same denominator relationship, not a conflict)
- lower RUSH allocation: 10R+LT 12% / 10R+lower continuation 65% / 3R+lower continuation 23%
- LT allocation: 10R approx1360 77% / 3R approx310 23%
- ordinary-initial-hit-based total LT arrival probability: no directly published fixed value confirmed; do not infer
- 2026 `干支甘` 1/99.90 sibling explicitly separated

## Cross-check
Industry primary reporting (遊技通信) plus P-WORLD and multiple analysis families (必勝本 / ちょんぼりすた) agree on core probability, first 77%, 37/90/130 time-shortening, approx50/80/90 continuation structure, LT name and allocation. No unresolved numeric conflict found.

## Effective DB state
- machine records: **42**
- COMPLETE_CORE: **41**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- 2024-12-02 boundary remains OPEN because same-day re-enumeration found at least one additional LT machine not yet in DB.
- `INDEX.md` is known stale; do not trust its 30-record count/restart point. Reconcile after the 2024-12-02 same-day boundary is closed.

## Same-day boundary re-enumeration
A fresh 2024-12-02 search identified `P GO!GO!郷 豪遊の5` as an additional LT-equipped same-day machine not present in the DB. Greenbelt reports introduction from 2024-12-02 and explicitly documents LT `LUCKY GO!GO!RUSH`, including the unusual route where the 299-spin support/遊タイム enters LT. This candidate must be processed before closing the date boundary.

Already processed earlier in the relay chain and therefore do not duplicate: `e大工の源さん超韋駄天2 フルスイングLT`, `P ToLOVEるダークネス 199ver.`, `P真・一騎当千～桃園の誓い～199LTver.`, `Pえとたま2 神祭` and other existing 2024-12-02 records.

## Next restart point
Start with **`P GO!GO!郷 豪遊の5` (2024-12-02)**. Confirm formal model and manufacturer, then collect normal/right probability, first RUSH route and 51% entry definition, lower RUSH approx70%, LT `LUCKY GO!GO!RUSH` routes (including 299-spin support/遊タイム direct route and lower-RUSH allocation), LT approx92.3%, 10R ratio approx67%, full payout allocations, residual-four behavior and game flow. Cross-check Greenbelt with manufacturer/industry/analysis families. Do not confuse with earlier `P GO!GO!郷 革命の5` (2024-05-07, existing CONFLICT record). After this record, re-enumerate 2024-12-02 once more before closing the boundary.

## Sources used this relay
- https://news.p-world.co.jp/articles/29130/yugitsushin
- https://www.p-world.co.jp/machine/database/10135
- https://hisshobon.com/machineinfo/94667/
- https://p.hisshobon.jp/machine/4412/1/105455
- https://chonborista.com/pachinko/universal/223630/
- boundary discovery: https://news.p-world.co.jp/articles/29648/greenbelt
