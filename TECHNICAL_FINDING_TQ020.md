# TECHNICAL_FINDING_TQ020 — Active-chain decision probes were outside production parity guard

- Status: FIXED_PENDING_CI
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `tests/strategy-parity.mjs` guarded duplicated production rules in `tests/strategy-benchmark.mjs`, but the newer decision-driving `tests/active-chain-switch-probe.mjs` and `tests/active-chain-branch-probe.mjs` independently duplicate the same route templates, anomaly probability/reward, Threat formula, calm recovery, partial EN payment, extraction multiplier and production resonance reward. `tests/high-chain-probe.mjs` also duplicates the core economy while intentionally varying chain-exit/reward candidate branches. These probes now feed GS-016 / EX-019 strategic conclusions. Before commit `44c4f50842e8b9b4a26f6126cff54c711e1eaffa`, a future production-rule change could therefore leave these probes stale while CI still passed, silently invalidating Executive evidence.
- Recommended Action: Keep all decision-driving duplicated production models inside the narrow parity declaration. If production rules change, CI should force explicit review of `strategy-benchmark`, active-chain probes and the production-mode core of high-chain probe before their SIMULATED outputs are reused.

## Fix

Commit `44c4f50842e8b9b4a26f6126cff54c711e1eaffa` extends `tests/strategy-parity.mjs` to read the active-chain switch probe, active-chain branch probe and high-chain probe. It verifies their shared production-critical templates, anomaly model, Threat/calming model, partial-energy payment, extraction multiplier and resonance reward declaration. The high-chain probe remains allowed to contain intentional non-production candidate branches; only its shared core and explicit `mode==='production'` reward path are guarded.

This is deliberately not a refactor of production `game.js`. It is a narrow test-integrity fix because these duplicated models currently support balance decisions.

## Verification boundary

CI completion for the parity-extension commit is not yet confirmed in this finding. Until the corresponding `ECHO DRIFT Regression` run completes successfully, treat this as `FIXED_PENDING_CI`, not PASS. Production gameplay, save format, UI and `HUMAN_CANDIDATE_01` are unchanged.