# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1

## Read before work
- latest main README: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked
- `docs/lt_pachinko_db/LATEST_HANDOFF.md`: checked
- existing machine records / prior Relay 5 handoff: checked

## This relay
Closed the remaining 2024-09-02 discovery boundary and advanced to the next September introduction date. One LT machine was confirmed and registered:

1. `2024-09-17_p_ghost_in_the_shell_sac_2045_199lt.md` — COMPLETE_CORE

### Important definition controls
- P攻殻機動隊SAC_2045 199LTver.: normal 1/199.8; right-side 1/99.9; exact first-hit RUSH allocation 65.5% (=65.0% lower RUSH +0.5% LT direct), while some sources round this to about66%.
- Lower `GHOST RUSH`: ST70 / about51%. LT `GHOST RUSH BURST`: ST192 / about86%.
- LT routes are separated: normal first-hit 0.5% 3000 direct; 0.5% 3000 during lower RUSH; or reaching three jackpots including the initial hit (two right-side hits during lower RUSH).
- Direct-analysis total LT incidence exists: LT first-hit 1/1162.27 / about one per 5.8 initial jackpots. This is not the same as the 0.5% direct route.
- Payouts are stored as payout values: normal 900; right 1500; 3000 is 1500×2.
- Keep separate from 2025 `大入りLTver.` and later `LT99ver.` variants.

## Discovery boundary
- 2024-09-02 calendar was rechecked. Pとある科学の超電磁砲2 and P DD北斗の拳3 did not yield evidence that those 2024 specs were LT-equipped, so they were not registered.
- The next confirmed chronological LT introduction found is 2024-09-17 `P攻殻機動隊SAC_2045 199LTver.`.

## DB state after this relay
- registered: 30
- COMPLETE_CORE: 29
- CONFLICT: 1 (`P GO!GO!郷 革命の5`)
- known UNVERIFIED field remains PAハイスクール・フリート normal-first-hit total LT reach rate; do not infer.

## Next restart point
First perform a final same-day **2024-09-17** pachinko introduction-list omission check. Then advance chronologically to the first October 2024 introduction date and collect only confirmed LT-equipped specs. Do not re-collect P攻殻機動隊199LT unless QA identifies a concrete issue.

QA priority on backward pass remains:
1. `P GO!GO!郷 革命の5` 3% vs 4% primary-source resolution
2. `PAハイスクール・フリート オールスター すい～とでハッピー!2400` direct total LT reach-rate source search
3. continue integrity checks for variant mixing, RUSH-vs-LT rate definitions and payout-vs-net definitions.
