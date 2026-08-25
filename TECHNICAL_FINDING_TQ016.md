# TQ-016 — Strategy benchmark can silently drift from production rules

- Status: WARNING
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Director: Technical & Quality Analysis Director
- Target: latest `main` strategy-evaluation quality boundary

## Evidence

`tests/strategy-benchmark.mjs` states that it mirrors `game.js`, but it currently re-implements production rules and values independently rather than consuming a shared executable model or checking parity against production.

Duplicated items include:

- route cost/gain/risk templates for `calm`, `deep`, and `res`;
- anomaly probability (`0.18`);
- anomaly reward curve;
- calm recovery threshold/effect;
- threat cap and depth-pressure formula;
- partial-energy payment behavior;
- extraction multiplier;
- resonance-chain reward slope for the production case;
- hidden 50% non-resonance chain break.

The current benchmark matches the inspected production values at this commit, so this finding does **not** invalidate the already reproduced EX-014 result by itself. The quality risk is forward-looking but concrete: a later gameplay edit can change `game.js` while the benchmark remains unchanged, and CI can still complete successfully because it currently verifies that the benchmark executes, not that its production model remains equivalent to `game.js`.

This matters because Executive is using the deterministic benchmark as evidence for balance decisions. A green workflow would therefore be insufficient evidence of production parity after future rule changes unless parity is explicitly re-established.

Current relevant files:

- `game.js` — production route generation, threat, chain, reward, energy and extraction rules.
- `tests/strategy-benchmark.mjs` — separately encoded deterministic model used for simulated strategy comparison.
- `.github/workflows/regression.yml` — executes both state regression and strategy benchmark but does not currently enforce cross-model parity.

## Recommended Action

Do not refactor the frozen playable merely to improve architecture. At the next already-planned benchmark change (the Executive-requested route-choice + extraction-decision integration), add a narrow parity boundary before relying on new simulated conclusions.

Preferred implementation order:

1. Extract only the small pure gameplay-model constants/functions needed by both production and simulation **if this can be done without destabilizing browser loading**, or
2. if shared extraction would disturb the frozen candidate, add explicit parity assertions that fail CI when benchmark-critical production constants/formulas change without a corresponding benchmark update.

At minimum, the parity guard should cover route templates, anomaly curve/probability, threat calculation, energy payment, extraction multiplier, chain break, and production resonance reward. It should not become a broad snapshot test or trigger a cosmetic refactor.

Until such a guard exists, any future benchmark result after a production rule edit should be classified `SIMULATED + PARITY_RECHECK_REQUIRED`, not treated as automatically production-equivalent merely because CI is green.