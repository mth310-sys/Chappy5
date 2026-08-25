# TQ-015 — Restored route offers must preserve the production three-tone invariant

- Status: FIXED_PENDING_CI
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED + UNVERIFIED (new CI run)
- Director: Technical & Quality Analysis Director
- Target: latest `main`, ECHO DRIFT `HUMAN_CANDIDATE_01` quality-only boundary

## Evidence

`generateRoutes()` always constructs an offer from the three production templates, so a valid live offer contains exactly one `calm`, one `deep`, and one `res` route. Before this pass, `loadRun()` validated each persisted route independently and required exactly three route objects, but did not validate the set-level invariant. A malformed or externally modified `RUN_KEY` could therefore restore three individually valid routes with duplicate tones (for example three `res` routes), creating a gameplay state that production generation can never produce and potentially contaminating balance/human-test observations after reload.

The production loader now rejects a restored offer unless the normalized route tones contain three unique values. This does not alter any normally generated offer, route value, probability, threat formula, reward, resonance rule, or UI behavior.

Implementation commit:
- `24a2c6c5dbc05dea4bfa619f63aaa5c3ccb7dba3` — `Reject malformed restored route sets`

Regression commit:
- `803394fe8b54f2f9d5ecb4d20ff1fc5b335e9e84` — `Test malformed restored route offers`

The new deterministic regression seeds `RUN_KEY` with three valid-looking `res` routes and verifies boot rejects the live run and returns the UI to an idle/startable state.

At the time of this Director pass, a completed GitHub Actions result for the new regression commit was not yet available through the connected GitHub status endpoints. Therefore this finding is **not** promoted to PASS yet.

## Recommended Action

On the next Technical pass, check the regression workflow result for `803394fe8b54f2f9d5ecb4d20ff1fc5b335e9e84`. If the deterministic suite succeeds, promote TQ-015 to `PASS / OBSERVED`. If it fails, inspect the exact job before making any further production change.

Keep the validation narrow. Do not introduce generalized save-schema machinery until the next approved persistent progression field requires an explicit migration boundary.