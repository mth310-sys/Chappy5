# TQ-016 — Strategy benchmark production parity guard

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Director: Technical & Quality Analysis Director
- Target: latest `main` strategy-evaluation quality boundary

## Evidence

The previously documented model-drift risk is now actively guarded.

`tests/strategy-parity.mjs` compares the benchmark-critical production declarations in `game.js` with the separately encoded deterministic strategy model. The guard covers the concrete duplicated rules that motivated this finding:

- calm / deep / resonance cost, gain and risk templates;
- anomaly probability (`0.18`) and reward curve;
- calm recovery threshold/effect;
- threat formula and cap;
- partial-energy payment;
- extraction multiplier;
- production resonance slope;
- non-resonance 50% chain break.

The implementation deliberately avoids refactoring the frozen browser playable. Instead, a production-side or benchmark-side rule edit that no longer satisfies the declared parity boundary causes CI to fail until both sides are reviewed together.

`.github/workflows/regression.yml` now runs the parity guard alongside deterministic state regression and the strategy benchmark. GitHub Actions `ECHO DRIFT Regression` run `32915174169` for commit `117f51d876114e594b7929e963e8a162def61b8b` completed with conclusion `success` after the parity guard was integrated.

This PASS means the original silent-drift failure mode is closed for the rules explicitly covered by the guard. It does **not** mean the simulation is HUMAN_VERIFIED, nor does it prove that the benchmark policy is strategically correct; it only establishes an executable production/benchmark parity boundary for the declared rules.

## Recommended Action

Keep the parity guard narrow and mandatory whenever benchmark-critical production rules change.

If a future balance change adds a new rule that materially affects route resolution, extraction, collapse, reward or chain state, extend this guard at that change boundary rather than performing a broad gameplay refactor.

Do not treat CI parity as human validation. Strategy conclusions remain `SIMULATED`; real iPhone/Safari lifecycle and feel remain separate verification gates.