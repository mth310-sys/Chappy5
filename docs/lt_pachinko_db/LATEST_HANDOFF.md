# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff and still displays the older 30-record / 2024-09-17 frontier
- previous `LATEST_HANDOFF.md` / Relay 5: checked
- existing 2024-12-02 records and exact restart point: checked

## This relay
Continued from the exact restart point `PシャカラッシュZ` (2024-12-02).

### Added COMPLETE_CORE
`PシャカラッシュZ` / マルホン工業
- path: `docs/lt_pachinko_db/machines/2024-12-02_p_shakarush_z.md`
- formal model: `PシャカRUSH Z1` / 検定番号4P0881
- release: 2024-12-02
- type: ライトミドル / 一種二種混合 / LT
- normal jackpot: 1/197.4
- right-side effective hit: 1/67.0
- RUSH entry: 100%; initial hit 3% directly enters LT
- lower RUSH: `シャカRUSH`, ST76, continuation about70%
- LT: `Z超RUSH`, ST108 or 3000, continuation about93.5%
- LT routes: initial 9R 3% direct; lower-RUSH hit 9R 6%
- initial distribution: 9R1018 payout+LT 3% / 6R682+lower 27% / 2R234+lower 70%
- lower RUSH hit: 9R1018+LT 6% / 6R682+lower 74% / 2R234+lower 20%
- LT hit: 65% total goes to ST3000 `∞インフィニティBONUS` (9R6% + 6R46% + 2R13%); remaining 35% goes ST108 (6R28% + 2R7%)
- ordinary-initial-hit-based total LT arrival probability: no direct published value confirmed; do not infer into a fixed DB field
- 2026 `PシャカRUSH Z Jr. / PシャカRUSH ZA` is a separate 1/98.7 sibling and was explicitly excluded from this record

## Cross-check
P-WORLD/HAZUSE, 1geki and pachinko-spec.info were cross-checked. Core probability, ST counts, payout basis, direct-LT 3%, lower-RUSH LT 6%, and LT ST3000 65% agree at the relevant definition level. No unresolved conflict found.

## Effective DB state
- machine records: **40**
- COMPLETE_CORE: **39**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- 2024-12-02 boundary remains OPEN.
- `INDEX.md` remains known stale; reconcile it only after the current same-day boundary is re-enumerated/closed so newer records are not lost.

## 2024-12-02 remaining chronological queue
1. `P真・一騎当千～桃園の誓い～199LTver.` / D-light / 大一商会系
2. `Pえとたま2 神祭` / ユニバーサル系

Before closing 2024-12-02, re-enumerate the same-day new-machine calendar for any additional LT-equipped candidates.

## Next restart point
Start with **`P真・一騎当千～桃園の誓い～199LTver.` (2024-12-02)**. Confirm formal model and direct LT-equipped status first, then collect core probability, lower RUSH, LT formal name/routes/rates, continuation, payout allocations, time-shortening/special systems and game flow from multiple source families. Continue to `Pえとたま2 神祭`, then re-enumerate the 12/02 boundary. No inference; source disagreements remain CONFLICT.

## Sources used this relay
- https://www.p-world.co.jp/machine/database/10131
- https://1geki.jp/pachinko/p_shakarushz/
- https://1geki.jp/pachinko/p_shakarushz/51/
- https://1geki.jp/pachinko/p_shakarushz/52/
- https://pachinko-spec.info/spec-detail/147664/
