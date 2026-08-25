# TQ-015 — Restored route offers must preserve the production three-tone invariant

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Director: Technical & Quality Analysis Director
- Target: latest `main`, ECHO DRIFT `HUMAN_CANDIDATE_01` quality-only boundary

## Evidence

`generateRoutes()` always constructs an offer from the three production templates, so a valid live offer contains exactly one `calm`, one `deep`, and one `res` route. Before this fix, `loadRun()` validated each persisted route independently and required exactly three route objects, but did not validate the set-level invariant. A malformed or externally modified `RUN_KEY` could therefore restore three individually valid routes with duplicate tones, creating a gameplay state that production generation can never produce.

The production loader now rejects a restored offer unless the normalized route tones contain three unique values. This does not alter any normally generated offer, route value, probability, threat formula, reward, resonance rule, or UI behavior.

Implementation commit:
- `24a2c6c5dbc05dea4bfa619f63aaa5c3ccb7dba3` — `Reject malformed restored route sets`

Regression commit:
- `803394fe8b54f2f9d5ecb4d20ff1fc5b335e9e84` — `Test malformed restored route offers`

The deterministic regression seeds `RUN_KEY` with three valid-looking `res` routes and verifies boot rejects the live run and returns the UI to an idle/startable state.

GitHub Actions verification:
- Workflow: `ECHO DRIFT Regression`
- Run: `32903050802`
- Head SHA: `803394fe8b54f2f9d5ecb4d20ff1fc5b335e9e84`
- Result: `completed / success`

This closes the save-restore set-invariant defect at the tested boundary. Physical iPhone/Safari lifecycle behavior remains separately unverified.

## Recommended Action

Preserve the narrow validation and regression. Do not introduce generalized save-schema machinery until an approved persistent progression field creates a real migration need. Continue real-device verification for reload, background/foreground recovery, safe-area behavior, rapid taps and persistence.