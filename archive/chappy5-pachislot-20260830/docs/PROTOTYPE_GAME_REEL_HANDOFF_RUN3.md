# Prototype Game & Reel Director Handoff — Run 3

Status: `GAME_REEL_RUN3_REPEAT_PLAY_FEEDBACK_APPLIED`

Source of truth re-read before work: latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both canonical prototype wrappers, the current dual-prototype QA, latest commits, and `docs/PROTOTYPE_MACHINE_HANDOFF_RUN2.md`.

## Run decision

Machine Run 2 explicitly froze operation-deck geometry and asked Game & Reel to improve repeat-play information gain rather than add systems. This run therefore changes no payout model and introduces no complex bonus/AT specification.

All new numbers/state below are prototype-only presentation/testing state. They are not final pachislot specifications.

## 刻ノ一閃

Canonical build changed: `prototypes/toki-no-issen/play.html`.

### Applied

- Each game now records the actual STOP order as `左 / 中 / 右` and carries that evidence through STOP1 → STOP2 → STOP3 → resolution.
- The first STOP read now drives a persistent `連閃` counter across games: correct opening-read first STOP increments it; a miss resets it.
- The counter is feedback only. It does not modify payout, reel control, or win probability.
- The 3-cut rail continues to show the center symbol captured by each STOP, but final and NEXT BET states now retain stop-order evidence instead of erasing the decision immediately.
- Game number is shown as a small repeat-play anchor so 10–30G play does not feel like identical isolated rounds.
- Fixed 46px rail height and fixed control geometry are preserved.

### Intended experience

The player should feel a lightweight loop: read the enemy opening → choose first reel → see whether the read was correct → complete the three cuts → see the exact order/result → decide whether to protect or rebuild the chain next game.

This is intentionally not a new reward system. Visual Director should treat `連閃` as restrained sword-discipline feedback, not a meter that competes with reels.

## ノクターン・アクアリウム

Canonical build changed: `prototypes/nocturne-aquarium/play.html`.

### Applied

- First STOP now marks persistent observation coverage across `広場 / 塔 / 記録庫`.
- Coverage is driven only by the physical first-reel choice. Visiting all three completes one observation circuit and the next BET begins a fresh circuit.
- The rail tells the player which observation layer remains unvisited, providing a reason to vary first STOP over 30–50G without forcing a payout mechanic.
- At third STOP, the captured center symbols are interpreted for a lightweight `共鳴` read: a duplicated symbol is shown as a pair echo; otherwise the three-symbol sample is shown as a mixed sample.
- Memory/DEPTH events still come from the existing reel-linked prototype logic. The new survey/echo layer only makes the reel evidence persist long enough to be understood.
- Fixed 46px rail height and fixed control geometry are preserved.

### Intended experience

The player should be able to look at the aquarium LCD, return attention to the reels, deliberately choose a first observation layer, collect three stopped symbols, and understand why the current dive differs from the previous one.

Visual Director should make completed three-layer survey feedback feel like an instrument reading or subtle world response. Do not turn it into a generic progress bar or make the reels visually subordinate.

## Verification / caution

- Changes were written directly to latest `main` after re-reading the Machine Run 2 constraint.
- No final payout/spec claim was added.
- No SIGNAL / FORGE / VAULT files were changed.
- Human Gate 2 remains closed.
- Fresh WebKit repeated-play PASS is not claimed in this handoff; downstream Visual/QA must re-read current Actions and preserve the fixed control geometry.
- Human feel at 10–30G for 刻ノ一閃 and 30–50G for ノクターン remains `HUMAN_UNVERIFIED`.

## Next Visual & Mechanism priority

1. Preserve all control positions and the 46px information-rail envelope.
2. 刻ノ一閃: express `連閃` and stop-order memory as restrained blade/cabinet residue; do not add a detached HUD or overpower STOP-linked cuts.
3. ノクターン: express observation circuit completion through the aquarium/instrument world, ideally subtle changes in observation optics/depth, while keeping physical reels brighter/clearer than decorative background detail at decision moments.
4. Do not change payout/game probabilities to support these visuals.
