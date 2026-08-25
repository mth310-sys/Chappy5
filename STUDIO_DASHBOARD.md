# Chappy5 Studio Dashboard

Updated: 2026-08-25 22:30 JST
Target: ECHO DRIFT core decision loop

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | WARNING | 4 | HIGH | SIMULATED | Latest 100k adaptive probe still selected deep ≈83.0% and ended around depth 2.62; calm/resonance identities improved but shallow extraction remains the bottleneck. |
| Player Experience | WARNING | 4 | HIGH | OBSERVED + SIMULATED | Immediate route danger and extraction payoff are now readable, but the predicted lived experience is still mostly shallow deep-route play. |
| Progression & Content | FAIL | 4 | HIGH | OBSERVED + SIMULATED | Persistent bank/runs/discoveries still do not alter future strategy; six discoveries can complete after exactly six anomaly choices and discovery semantics remain unresolved. |
| Technical & Quality | UNKNOWN/WARNING | 3 | HIGH | OBSERVED + UNVERIFIED | Deterministic save/state regression now passes in GitHub Actions; real iPhone/Safari lifecycle and layout remain unverified. |

## Executive priority

**Break the shallow deep-route economy by making later visible opportunities sometimes worth reaching, without creating a universal “always dive deeper” rule.**

This remains higher priority than meta progression, content expansion, radar polish, or broad refactoring.

## Executive integration — 22:30 JST

### Evidence integrated

Game Systems re-tested the previous conditional route tuning and found it directionally useful but insufficient: mean ending depth remained ≈2.62, deep still represented ≈83.0% of adaptive selections, resonance ≈13.7%, calm ≈3.3%, and chain-matching resonance ≈3.7% of all steps. The strongest conclusion is that the game rarely reaches the states where calm recovery and multi-step resonance can matter.

Player Experience independently reached the same product-level conclusion: information clarity has improved substantially, including direct projected threat and direct extraction payoff, but a typical optimized run is still predicted to feel like shallow deep-route farming. It also recommends delaying human subjective testing until this AI-detectable convergence is reduced.

Progression remains Severity 4 because permanent results do not change later play. However, adding meta progression now would risk formalizing the same dominant shallow strategy. Technical quality is sufficiently stable for a narrow balance iteration: deterministic save/state regression is CI-verified, with real iPhone/Safari still reserved for a frozen human-test build.

### Candidate analysis this cycle

Executive tested several small reward-shape candidates against a local Monte Carlo reproduction of current `game.js`. The current-rule reproduction matched the Director evidence closely (deep ≈83%, mean ending depth ≈2.6), so it was used only as a comparative SIMULATED probe, not as HUMAN evidence.

Pure extraction-multiplier increases raised risk-taking/collapse without sufficiently changing route diversity and risked replacing shallow farming with a universal depth target. A more useful candidate changed two existing values rather than adding a subsystem:

1. reduce Deep's base gain range from `4–7` to `3–6`, preserving it as the strongest immediate burst route but lowering its unconditional lead;
2. make the already-existing visible anomaly reward grow more meaningfully with depth: `2 + floor(depth/2) + max(0, depth-2) × 2`.

In the comparative adaptive probe, this candidate produced approximately deep 59%, resonance 29%, calm 12%, mean ending depth ≈2.85, versus the reproduced current baseline of deep ≈83%, resonance ≈14%, calm ≈3%, depth ≈2.62. Average permanent bank remained in roughly the same range rather than exploding upward. Collapse increased, so this is not considered proven balance; it is a deliberate candidate to create more state diversity for the next Systems pass.

Verification for those balance effects is `SIMULATED`; the code change itself is `OBSERVED`.

### Game change this cycle: depth-sensitive opportunity, not a new mechanic

Commit `4e8afc11b1a4cb0afa42d7c031532473493acd9e` updates `game.js`:

- **Deep** base gain: `4–7` → `3–6`.
- **Anomaly reward** now scales more strongly after depth 2 while retaining the same visible ⚠ opportunity and +7 threat cost.
- Calm recovery, resonance-chain reward, exact projected threat, extraction multiplier, energy model, anomaly frequency, and persistence are otherwise unchanged.

The intent is not equal route percentages. It is that early safe/burst choices, live resonance chains, high-threat calm recovery, and occasional deeper anomalies can each become rational under different visible states.

### What was deliberately not done

- No fourth route or new currency/system.
- No global depth bonus or hard milestone that says “always reach depth N.”
- No progression/loadout yet.
- No extra relic/content quantity.
- No radar polish yet.
- No broad refactor.

## Next evidence needed

Game Systems should re-run current exact rules and answer:

1. Does deep dominance materially fall without resonance becoming a new universal default?
2. Does mean ending depth/state diversity improve enough that high-threat calm and live-chain resonance are actually encountered?
3. Do anomalies create occasional reasons to continue at later depths, or do they simply become mandatory whenever visible?
4. Has collapse rate become too punitive relative to the gain in decision variety?
5. Do fixed-stop policies still reveal a simple best extraction depth?

If the new economy is materially healthier, Executive can then consider freezing a first human-test candidate. If not, continue tuning the same existing decision variables rather than adding meta progression.

## Human verification status

No HUMAN_VERIFIED finding exists yet. Do not claim the game is fun.

Human play remains deferred while route/stop convergence is still being AI-tested. When a candidate is frozen, ask only whether continue-vs-extract caused repeated hesitation, whether route/extraction actions felt satisfying rather than merely readable, and whether another run was immediately desirable; separately record iPhone thumb/scroll/runtime friction.
