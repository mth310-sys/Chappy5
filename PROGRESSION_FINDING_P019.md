# P-019 — Persistent build diversity must be validated across decision trajectories, not local reward cues

- **Director:** Progression & Content Analysis Director
- **Status:** BLOCKED_DESIGN_GATE / TRAJECTORY_VIABILITY_REQUIRED
- **Severity (1-5):** 4
- **Confidence:** HIGH for the measured local-vs-short-horizon divergence / MEDIUM-HIGH for the progression-design consequence
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Last updated:** 2026-08-26 14:35 JST

## Evidence

Executive EX-019 directly branched 104,736 active-chain states under common exogenous RNG. The locally best calm/deep option is ahead of resonance by one-step secured-bank EV in **52.52%** of sampled states. However, after forcing that switch versus resonance and then following the same contextual policy, the short-horizon result reverses materially:

- **2 decisions:** switch wins **28.84%**, resonance wins **37.06%**, ties **34.10%**, mean `switch - resonance` secured bank **-0.9701**.
- **3 decisions:** switch wins **26.17%**, resonance wins **35.56%**, ties **38.28%**, mean `switch - resonance` secured bank **-1.2477**.

These are `SIMULATED` results, not `HUMAN_VERIFIED` evidence of player behavior or fun.

The narrow supported conclusion is that the current core can present a locally attractive alternative while the accumulated chain-renewal structure makes that alternative worse over the next few decisions. This is strategically important for progression because a persistent choice can look meaningfully different in one screen or one action yet still be a dominated long-run path.

## Progression interpretation

For long-term replayability, **build diversity must mean trajectory diversity, not presentation diversity**.

A future protocol, commitment, unlock or build cannot be accepted merely because it changes the immediate best route, increases a visible number, or produces a different first action. It must remain a viable way to play across several decisions, including extraction/sacrifice timing, after the opportunity cost of accumulated state is included.

Otherwise the game risks a particularly damaging form of content exhaustion: the player initially discovers multiple apparent approaches, then learns that only one of them survives multi-step optimization. At that point the nominal build count remains high while the practical game lifespan collapses toward one solved routine.

This finding strengthens P-018. While active-chain switching cost is unresolved, progression must not subsidize preservation; additionally, progression must not manufacture apparent switch builds that are only locally competitive.

## Recommended Action

1. Keep persistent progression implementation blocked while Executive compares production hidden-50 chain exit against visible-signal causality under the same 2–3 decision common-RNG branch probe.
2. After core strategic clearance, require every first progression prototype to pass a **trajectory viability gate**: at minimum compare the resulting intentions over multiple decisions and extraction behavior, not only one-step EV or first-route choice.
3. Require at least two persistent commitments to remain strategically viable without one being a disguised chain-insurance route or a short-horizon trap.
4. Prefer progression effects that create an alternative objective **after sacrificing accumulated state**—for example different pursuit or extraction intent—rather than simply refunding the sacrifice or reducing its cost.
5. Reject flat power, named-route affinity, signal lock-in, chain-loss insurance and high-chain reward growth as shortcuts to build differentiation while the core renewal pressure is active.
6. Do not add enemies, items, stages, discovery names or lore volume to inflate the apparent number of builds.

## Content / lifespan consequence

The current six discoveries and lifetime bank still provide little long-term decision value. The new evidence explains why adding a few visible build labels would not solve that: if those builds converge to the same multi-step optimum, the player consumes the strategic novelty almost immediately.

A durable small-content structure should instead produce repeated situations where preserving accumulated state, abandoning it, and cashing out at different horizons are each genuinely defensible under different persistent commitments. That would create replay depth from interaction among existing state variables rather than content quantity.

## Executive handoff

`HUMAN_CANDIDATE_01` and production gameplay are unchanged. No progression system was implemented. P-019 adds a clearance criterion only: **future build diversity must survive multi-step trajectory comparison, not merely differ in local choice or UI identity.**