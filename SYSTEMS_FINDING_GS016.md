# GS-016 — active resonance chains carry structural renewal option value that hides switch states from one-step EV

- **Director:** Game Systems Analysis Director
- **Status:** BLOCKED_STRATEGY_CLEARANCE / ACTIVE_CHAIN_SWITCH_COST_CONFIRMED
- **Severity (1-5):** 4
- **Confidence:** HIGH for measured facts / MEDIUM-HIGH for design inference
- **Verification Type:** OBSERVED + CALCULATED + SIMULATED
- **Last updated:** 2026-08-26

## Finding

The remaining fixed-resonance advantage is not explained only by mature-chain reward size. An active resonance state has a structural renewal/insurance value: choosing resonance always leaves the run with an active chain after the choice (either the same signal continues or the offered signal starts a new chain), while choosing calm/deep under current production rules has a hidden 50% chance to erase the chain entirely.

A one-step secured-bank evaluator therefore systematically omits a future option that is larger after resonance than after calm/deep. The new diagnostic shows that this omission is large enough to reverse a meaningful fraction of apparently attractive calm/deep switches even when only the *next single resonance continuation bonus* is added. This is still not a full rollout and does not prove that resonance should always be chosen.

## Evidence

A deterministic non-production probe was added at `tests/active-chain-switch-probe.mjs` and run in CI with four fixed seeds × 10,000 Runs, per-Run RNG isolation, Fisher-Yates offer ordering and state-EV extraction. Active-chain states were sampled from fixed-resonance-policy trajectories. All values below are `SIMULATED`, never `HUMAN_VERIFIED`.

GitHub Actions `ECHO DRIFT Regression` run `32932468708` completed successfully. State regression, strategy parity, deterministic strategy benchmark, high-chain probe and the new active-chain switching probe all passed.

Across `105,401` sampled active-chain decision states:

- mean active `chainLen`: `1.2935`
- offered resonance signal matched the current chain: `33.16%`
- exact one-step secured-bank EV preferred calm/deep over resonance: `52.76%`
- adding only a minimal next-resonance chain-option term flipped `21.30%` of those locally non-resonance choices back to resonance
- mean minimal next-resonance option value after calm/deep: `0.9312`
- mean minimal next-resonance option value after resonance: `1.9529`
- among states where one-step EV preferred calm/deep, their mean lead over resonance fell from `2.4075` to `1.6291` after this minimal chain option was counted

Signal-conditioned results sharpen the diagnosis:

- when the offered resonance signal already matched the active chain, one-step EV preferred calm/deep in only `8.46%` of states; of those rare switch candidates, `58.45%` flipped back to resonance after the minimal option value was included
- when the resonance signal mismatched the active chain, one-step EV preferred calm/deep in `74.74%` of states; even there, `19.21%` flipped back to resonance after the minimal option value was included

The mismatch result is important. A mismatching resonance choice loses the old signal but immediately establishes a new active chain. Calm/deep can instead leave the run with no chain at all. Therefore production gives resonance a chain-renewal advantage even when it is not directly continuing the current signal.

Existing corrected benchmarks remain consistent with this structural stickiness. Under production slope `2` with state-conditioned extraction, fixed resonance remains above contextual policies; high-chain taper/cap narrows that gap but does not remove it. Thus mature-chain compounding contributes to dominance, while chain renewal/preservation is a separate source of value.

## Interpretation

This evidence rejects two overly simple conclusions:

1. **“Calm/deep are rarely worth switching to.”** False at the local level: one-step secured-bank EV prefers a non-resonance route in more than half of sampled active-chain offers.
2. **“Those local switch states prove contextual play should beat fixed resonance.”** Also unsupported: a meaningful portion disappears after adding only one small piece of omitted future chain value, and the full future opportunity cost has not yet been measured.

The current production rule therefore creates a hidden strategic tax on leaving resonance. The tax is not merely the expected reward from a long existing chain; it includes the probability of losing access to *any* active chain state on the next decision.

## Caveats

- Sampled states are reachable under a fixed-resonance policy, not a policy-neutral state distribution.
- The added option term prices only the next resonance continuation bonus, not a complete 2–3 step future, extraction timing, Energy exhaustion or downstream threat path.
- The probe is diagnostic. It is not a production policy and is not evidence of human optimal play.
- No human play result is represented here; `HUMAN_VERIFIED` remains absent.

## Recommended Action

Do not resume resonance slope, cap or reward micro-tuning.

Next, run a short common-RNG branch rollout from sampled active-chain states that directly compares:

- take the best available calm/deep route now, versus
- take resonance now,

then follow both branches for a small fixed horizon (preferably 2–3 decisions) using the same downstream policy and state-conditioned extraction. Report results separately by current `chainLen` and whether the offered resonance signal matches the active signal.

Decision rule:

- if robust profitable switch states remain common after full short-horizon chain value is priced, improve the contextual evaluator before changing production;
- if switch states largely disappear, Executive should consider a structural chain-preservation/sacrifice change rather than further reward coefficient tuning.

Do not modify `game.js` or promote a new human candidate from this finding alone.