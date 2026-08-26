# EX-019 — Direct short-horizon branch comparison confirms active-chain renewal pressure

- **Director:** Executive Game Director
- **Status:** STRATEGY_CLEARANCE_BLOCKED / STRUCTURAL_CHAIN_EXIT_GATE
- **Severity (1-5):** 4
- **Confidence:** HIGH for measured short-horizon branch result / MEDIUM-HIGH for structural interpretation
- **Verification Type:** OBSERVED + SIMULATED
- **Last updated:** 2026-08-26

## Executive Integration

EX-018 made active-chain switching cost the single highest-priority gate. Since then, Systems GS-016 measured 105,401 active-chain states and found that calm/deep is locally better by one-step secured-bank EV in 52.76% of states, but a minimal next-resonance option term flips 21.30% of those states back toward resonance. Player Experience PX-014 independently flags the same sacrifice as poorly legible because the production 50% non-resonance chain break is hidden. Progression P-018 therefore keeps chain-insurance-style persistent upgrades blocked. Technical TQ-019 separately warns that production route shuffle semantics remain engine-dependent; this is important at the next Controlled Playable boundary but is not the current balance gate.

No new `HUMAN_VERIFIED` fun evidence has been added. `HUMAN_CANDIDATE_01` remains frozen.

## New direct branch diagnostic

Executive added `tests/active-chain-branch-probe.mjs` and runs it in CI. The probe is non-production and `SIMULATED` only.

At active-chain states it compares two forced first actions:

1. choose the currently offered resonance route;
2. choose the locally best calm/deep route by one-step secured-bank EV.

After that forced first action, both branches use the same contextual follow-up policy and state-conditioned extraction rule for a short horizon. Future route offers, anomaly flags, chain-break rolls and collapse rolls come from step-indexed exogenous tapes shared by both branches, so the comparison uses common random numbers rather than allowing one branch's earlier RNG consumption to shift the other's future environment.

Commits:

- `5048b9eeece8bfcd11dbfef47212fa67179893f5` — Add common-RNG active-chain branch probe
- `769819cf15b9cf12a0ee7f3970185593406a8b6c` — Run active-chain branch probe in CI
- `b602e8f3ff286a8df26f24d43317e5a5ee9f3bec` — Fix branch-probe chain-length display sample accounting; aggregate horizon results are unchanged

The first complete CI run (`32933903792`) passed state regression, parity guard, deterministic strategy benchmark, high-chain probe, active-chain switching probe and the new branch probe.

## Evidence

Across **104,736 active-chain sampled states**:

- calm/deep was locally better by one-step secured-bank EV in **52.52%** of states.

With a **2-decision horizon**:

- switch branch wins: **28.84%**
- resonance branch wins: **37.06%**
- ties: **34.10%**
- mean `switch - resonance` secured bank: **-0.9701**

With a **3-decision horizon**:

- switch branch wins: **26.17%**
- resonance branch wins: **35.56%**
- ties: **38.28%**
- mean `switch - resonance` secured bank: **-1.2477**

These values are `SIMULATED`, not `HUMAN_VERIFIED`.

## Interpretation

GS-016's renewal/insurance effect is not only an artifact of adding a hand-written one-step future-chain bonus. When the current action is branched directly and both branches face shared future exogenous randomness, resonance retains a meaningful short-horizon advantage even though calm/deep looks locally superior in roughly half the active-chain states.

The narrow supported interpretation is:

**the current chain-preservation / renewal structure itself materially discourages leaving resonance once a chain exists.**

This still does **not** prove that fixed resonance is globally optimal, nor that a human will play that way, nor that removing the cost will make the game more fun. The branch probe is a short-horizon diagnostic, not production execution identity or human play evidence.

The existing visible-signal chain-exit candidate remains relevant because the full deterministic strategy benchmark already showed that replacing hidden random 50% exit with visible signal causality materially narrows the fixed-resonance gap without weakening the initial resonance reward. However it did not clear fixed resonance on its own, so it remains a candidate rather than a production decision.

## Cross-Director Decision

### Game Systems
GS-016 is strengthened: active-chain renewal value is now supported both by decomposition and by a direct common-RNG short-horizon branch comparison. Do not resume reward-slope or mature-chain micro-tuning.

### Player Experience
PX-014 remains Severity 4. If the next structural candidate reaches a Controlled Playable, the human question is not "is resonance strong?" but whether the player can predict what chain state is being sacrificed and whether a switch feels like a deliberate trade rather than a hidden punishment.

### Progression & Content
P-018 remains blocked. Do not add persistent chain insurance, break-rate reduction, auto-match, resonance multiplier, or similar upgrades while chain renewal itself is the active structural problem.

### Technical & Quality
The new branch probe uses deterministic common-RNG tapes and is CI-integrated. TQ-019 remains a separate Controlled-Playable-boundary issue: production route permutation should eventually move from `sort(()=>Math.random()-.5)` to an explicit Fisher-Yates implementation with parity/regression coverage.

### Human feedback
No new `HUMAN_VERIFIED` evidence exists. Do not infer fun, clarity, replay desire, or iPhone/Safari feel from simulation.

## Current Priority — ONE GOAL

**Directly measure whether replacing the hidden 50% calm/deep chain-break rule with visible signal causality reduces the confirmed 2–3 decision switching penalty under the same common-RNG branch probe.**

This is the smallest next causal test because it targets the diagnosed renewal/insurance mechanism using information already present on screen, without changing rewards, adding content, or touching production.

## Decision rule

1. If visible-signal exit materially reduces the negative `switch - resonance` branch delta and increases meaningful switch-win states without merely moving dominance to calm, Executive may promote that structure to the next candidate-combination gate.
2. If the short-horizon penalty barely changes, stop treating hidden 50% exit as the main cause and isolate another structural component.
3. Do not fine-sweep reward coefficients.
4. Do not change `game.js`, progression, or the frozen human candidate before this causal branch comparison is completed.

## Production Decision

- `game.js`: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- current production hidden 50% chain exit: retained for the frozen baseline only.
- visible-signal chain exit: simulation candidate, not promoted.
- persistent progression: blocked.
- human-fun claim: `UNVERIFIED`.

## Recommended Action

Extend the deterministic active-chain branch probe with a visible-signal chain-exit mode while preserving the same sampled states, future tapes and random-number consumption. Compare production hidden-50 and visible-signal modes side-by-side at 2 and 3 decisions. Only then decide whether this structural branch deserves a new Controlled Playable candidate.