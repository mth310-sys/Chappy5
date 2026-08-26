# EXECUTIVE FINDING EX-016 — Visible-signal chain exit is promising but not sufficient alone

- Status: `PROMISING_STRUCTURAL_CANDIDATE_NOT_CLEARED`
- Severity: `4`
- Confidence: `HIGH` for reproduced benchmark measurements / `MEDIUM-HIGH` for design inference
- Verification Type: `OBSERVED + SIMULATED`
- Human Verification: `NOT PERFORMED`

## Evidence

1. `GS-014` rejected resonance-slope-only tuning after the corrected neutral route-order benchmark showed that reducing the global slope mostly shifts the fixed optimum from resonance toward calm; the isolated mixed-strategy lead around slope 1.75 is too small and unstable to justify production micro-tuning.
2. `PX-014` independently identified the hidden non-resonance 50% chain-loss rule as a player-experience problem because A/B/C is already visible on every route but does not currently determine whether calm/deep preserves the active chain.
3. Executive added a non-production structural probe at the production resonance slope (`2`) comparing:
   - production: non-resonance chain exit uses the hidden `50%` break roll;
   - candidate: same visible signal preserves the chain, different visible signal breaks it.
4. The first probe output was discarded after inspection showed that the candidate path consumed fewer RNG draws than the production path. Because the deterministic harness uses one RNG stream for offers, anomalies, chain exit and collapse, that changed later random states and made paired comparison unreliable.
5. The benchmark was corrected to consume the same chain-exit RNG draw in both modes. `tests/strategy-parity.mjs` now guards this common-RNG requirement as well as the production chain-break rule.
6. Corrected CI run `32922902584` completed successfully with deterministic state regression, strategy parity and strategy benchmark all passing.
7. Corrected state-conditioned results at production slope `2`:

### Production hidden 50% exit
- fixed calm: `10.753175 bank/Run`
- fixed deep: `8.954900`
- fixed resonance: `12.106575`
- one-step: `10.936775`
- future-aware: `11.918575`
- chain-aware probe policy: `11.847900`

### Visible-signal causal exit candidate
- fixed calm: `10.753175`
- fixed deep: `8.954900`
- fixed resonance: `12.106575`
- one-step: `11.005725`
- future-aware: `12.003300`
- chain-aware: `12.029350`

The fixed policies remain unchanged, as expected. The visible-signal candidate improves the contextual policies while keeping the production resonance payoff curve intact. The best tested contextual policy rises to `12.029350`, leaving only `0.077225 bank/Run` (about `0.64%`) below fixed resonance.

The candidate also slightly reduces collapse for the contextual policies in this simulation. This remains `SIMULATED`, not human play evidence.

## Executive Interpretation

The structural direction is materially stronger than global slope tuning because it attacks two problems at once:

- Systems: leaving resonance becomes a state-readable choice instead of an invisible coin flip.
- Player Experience: the already-visible A/B/C signal gains actual causal meaning, so chain preservation can be predicted before choosing.

However, it does **not** by itself clear the strategic gate. Fixed resonance still produces the highest bank/Run in the corrected deterministic comparison. Promoting this candidate to production now would therefore be premature.

The remaining gap is small enough that further global slope micro-tuning would be the wrong response. It would risk fitting the simulator and repeating the fixed-resonance-to-fixed-calm migration already demonstrated by `GS-014`.

## Decision

- Keep production `game.js` unchanged.
- Keep `HUMAN_CANDIDATE_01` frozen.
- Do not yet replace the hidden 50% rule in the playable.
- Retain visible-signal causal chain exit as the leading structural candidate because it improves strategy transparency and nearly closes the fixed-resonance gap without weakening early resonance feedback.
- Long-term progression remains blocked pending strategic clearance.

## Current Highest Priority

Test **one narrow high-chain-only diminishing-return rule** on top of the visible-signal causal exit candidate while preserving the current early resonance continuation reward.

The next probe must avoid another global slope sweep. It should change only later chain growth (for example a small cap or taper after the first continuation), use the same seeded/common-RNG harness, and compare fixed calm / deep / resonance against contextual policies with state-conditioned extraction.

A candidate can advance only if it produces a robust contextual advantage rather than a tiny isolated numerical crossing, preserves the early resonance identity, passes regression/parity checks, and is then suitable for a controlled human-play comparison.

## Human Gate

No new human claim is made. If a later candidate is promoted to a controlled playable, keep human checks small:

1. Can the player predict whether A/B/C will preserve or break the active chain without needing hidden-rule memorization?
2. Does preserving the chain create a real tradeoff against a better immediate calm/deep offer?
3. Does resonance continuation still feel like acceleration after any high-chain-only taper?
