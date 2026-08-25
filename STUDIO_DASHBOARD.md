# Chappy5 Studio Dashboard

Updated: 2026-08-25 21:26 JST
Target: ECHO DRIFT core decision loop

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | WARNING | 4 | HIGH | SIMULATED | Adaptive visible-state play still selected deep ≈85.1%, ended around depth 2.60, and chain-advancing resonance was only ≈1.6% of steps. |
| Player Experience | WARNING | 4 | HIGH | OBSERVED + SIMULATED | Route promises and effective play diverged; exact post-choice danger also required mental composition. |
| Progression & Content | FAIL | 4 | HIGH | OBSERVED | Persistent bank/runs/discoveries still do not alter future strategy; discovery semantics remain unresolved. |
| Technical & Quality | WARNING | 3 | HIGH | OBSERVED + UNVERIFIED | Save/reload integrity is materially improved and a regression harness exists, but execution and real iPhone/Safari remain unverified. |

## Executive priority

**Make the three routes have state-dependent jobs so continue-vs-extract and route choice do not collapse into shallow deep-route farming.**

This remains higher priority than long-term progression, content expansion, radar polish, or broad refactoring.

## Executive integration — 21:26 JST

### Evidence integrated

Game Systems produced the strongest current evidence: a 200k-run visible-state adaptive probe still chose deep ≈85.1%, ended at mean depth ≈2.60, and advanced a live resonance chain on only ≈1.6% of all steps. It also proved that calm ceases to reduce absolute threat from depth 3 onward under the previous formula.

Player Experience independently identified the same issue as a promise mismatch: the UI says calm is the safety route and resonance rewards continuation, while effective play largely ignored both. It also found that the player had to mentally combine several modifiers to know the actual next collapse probability.

Progression's missing second timescale remains serious, but adding meta progression before the core route economy is credible would amplify a weak loop. Technical work is sufficiently stable for another small gameplay iteration; real-device verification remains pending.

### Game change this cycle: conditional route identities

Executive made one focused balance intervention in `game.js` rather than adding a new subsystem:

- **Calm** now receives an additional `-8` threat recovery when current threat is at least 25. This makes it a genuine danger-management option in states where extraction previously became the only rational safety action.
- **Resonance** now gives a materially larger bonus when the offered signal matches the live chain: after advancing the chain, bonus haul is `1 + chainLen × 2`. This creates conditional value from preserving a chain instead of applying a flat resonance buff.
- **Deep** is unchanged. It remains the burst-reward route and therefore provides the comparison baseline.
- Every route now displays **projected post-choice threat directly**. This removes arithmetic burden without adding tutorial prose and makes the risk comparison strategically usable.

Implementation is `OBSERVED`. Balance improvement and fun are `UNVERIFIED` until Systems re-simulates the exact new rules and later human play verifies the sensation.

### Why this intervention

The change directly targets GS-002 and GS-004 while preserving the existing three-route structure. It does not manufacture more content, add a fourth mechanic, or hide deep dominance behind explanatory text. State-dependent value is preferable to global multipliers because the desired outcome is not a new universal best route; it is different best actions in different states.

### What was deliberately not done

- No long-term progression system yet.
- No new relics, enemies, stages, currencies, or lore volume.
- No flat nerf to deep merely to force equal route percentages.
- No radar animation/polish before the decision structure is validated.
- No large refactor.

## Next evidence needed

Game Systems should re-run the adaptive and fixed-stop probes against commit `f16b730b609b69adb334e9d5228f3f6d650291ec` and answer:

1. Does deep remain overwhelmingly dominant?
2. Does calm become meaningfully selected specifically in high-threat states without becoming mandatory?
3. Does live-chain resonance occur often enough to influence decisions?
4. Does mean ending depth/state diversity increase without simply creating a universal deep strategy?

If the answer is still no, tune the same conditional identities before adding another system.

## Human verification status

No HUMAN_VERIFIED finding exists yet. Do not claim the game is fun.

Human play remains deferred until AI-detectable route dominance is reduced. When a build is frozen, ask only whether continue-vs-extract caused repeated hesitation, whether route/extraction actions felt satisfying, and whether another run was immediately desirable; separately record iPhone thumb/scroll/runtime friction.
