# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 5 / QA

## Read before work
- latest main README: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked
- existing machine records / prior Relay 4 handoff in INDEX: checked

## This relay
2024-09-02 boundary was researched from the Relay 4 continuation point. Three LT machines were confirmed and registered:

1. `2024-09-02_e_god_eater_triple_burst.md` — COMPLETE_CORE
2. `2024-09-02_p_lupin_zenigata_77_sweet.md` — COMPLETE_CORE
3. `2024-09-02_e_kamen_rider_den_o.md` — COMPLETE_CORE

### Important definition controls
- eゴッドイーター: 1/199.5 condition-device jackpot, 1/539.2 LCD-symbol expectation, 1/314.2 Aragami Charge are not interchangeable. RUSH itself is documented as the LT state; 1/2/3 stock totals are about 80.1/90.1/93.4%.
- Pルパン77Sweet: GOLDEN TIME 51% / about60%; LT trigger is 15% of GOLDEN TIME jackpots, LT about91%. Payout values stored as payout, not net acquisition.
- e仮面ライダー電王: 2024 319.9 version kept separate from 2025 deka-heso 239.9. Figure-symbol 1/319.9 and all-jackpot approx1/199 are definition-separated. CLIMAX RUSH about77%.

## QA performed
- Re-audited existing CONFLICT `P GO!GO!郷 革命の5` using P-WORLD/HAZUSE, 1geki and the existing 4% secondary table.
- P-WORLD explicitly gives HYPER RUSH LT transition as approx3% and its detailed split as approx3% LT / approx80% HYPER / approx17% termination; the 4% secondary source remains inconsistent.
- Do not average or silently resolve. Existing CONFLICT remains correct pending a manufacturer/primary spec that establishes exact rounding/base definition.
- Existing payout definition split (about1060 including other prize entries vs 1000 table value) remains appropriate.
- No newly discovered LT/non-LT contamination or duplicate record in the audited slice.

## DB state after this relay
- registered: 29
- COMPLETE_CORE: 28
- CONFLICT: 1 (`P GO!GO!郷 革命の5`)
- known UNVERIFIED field remains PAハイスクール・フリート normal-first-hit total LT reach rate; do not infer.

## Next restart point
Continue chronologically **after 2024-09-02**. First close any same-day Sep 2 discovery omissions by checking the complete pachinko introduction list, then advance to the next September 2024 introduction date. Do not re-collect the three records above unless QA finds a concrete issue.

QA priority on backward pass:
1. `P GO!GO!郷 革命の5` 3% vs 4% primary-source resolution
2. `PAハイスクール・フリート オールスター すい～とでハッピー!2400` direct total LT reach-rate source search
3. then continue backward/forward record integrity checks for LT contamination, duplicate/variant mixing, RUSH-vs-LT rate definitions and payout-vs-net definitions.
