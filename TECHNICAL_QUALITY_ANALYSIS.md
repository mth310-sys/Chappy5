# Technical & Quality Analysis

Updated: 2026-08-25 20:53 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT playable after first Executive/Director cycle

## Finding TQ-001 — Active dive reload persistence

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `game.js` uses versioned `RUN_KEY`, validates `loadRun()`, persists after route generation/state transitions, and clears the live-run key on extraction/collapse/reset. Commit `60bbb45e4e9da3f357a52e26202d24a38679a3e3`.
- Recommended Action: Keep this path protected by the new regression harness; real iPhone/Safari reload remains HUMAN verification work.

The later anomaly-offer change remains compatible with this persistence model: restored routes normalize their template identity, scalar cost/gain, signal and `anomaly` flag rather than trusting arbitrary saved route data.

## Finding TQ-002 — Persistent meta validation

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `loadMeta()` rebuilds state from validated fields, clamps numeric counters, filters discoveries to known relic IDs and removes duplicates. Commit `60bbb45e4e9da3f357a52e26202d24a38679a3e3`.
- Recommended Action: Before persistent progression expands materially, add an explicit payload schema version/migration path instead of extending the implicit v1 shape indefinitely.

## Finding TQ-003 — Storage exception containment

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: all localStorage reads/writes/removes are wrapped by `storageGet/storageSet/storageRemove`; failures set `storageHealthy=false` and gameplay displays a persistence warning rather than throwing through the interaction path.
- Recommended Action: Verify actual Safari private/restricted-storage behavior on device; static code inspection cannot certify it.

## Finding TQ-004 — Run counter semantics

- Status: PASS
- Severity: 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: collapsed and extracted attempts both increment `meta.runs`, while UI/reset copy now consistently labels the value `潜航回数`. Commit `c5afa4d3123f0bee4528f192428232c9d7d38a76`.
- Recommended Action: Preserve this semantic if future achievements/analytics depend on the field; migrate explicitly if the meaning changes.

## Finding TQ-005 — Real iPhone/Safari runtime remains unverified

- Status: UNKNOWN
- Severity: 3
- Confidence: HIGH
- Verification Type: UNKNOWN / UNVERIFIED
- Evidence: current HTML/CSS are intentionally mobile-first (`viewport-fit=cover`, safe-area insets, touch handling, portrait-width cap, dynamic viewport height), but current main contains no HUMAN_VERIFIED real-device record for touch, safe areas, reload restoration, background/foreground restoration or persistence.
- Recommended Action: When Executive freezes a human-testable playable, run a short real-device matrix: fresh launch, all route taps, voluntary extraction, live-run reload, background/foreground, reset, portrait viewport/safe-area check.

## Finding TQ-006 — Minimal deterministic state regression layer now exists

- Status: WARNING
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED for test presence; UNVERIFIED for execution result
- Evidence: `tests/regression.mjs` was added in commit `67a99b5555b2c60df2d599a0e2a8e808509fc6a1`. It uses Node built-ins only (`node:vm`, in-memory localStorage and a minimal DOM stub), so it does not add a framework or production dependency. The current cases cover: malformed meta normalization; live-dive restore including anomaly offers; successful extraction banking/counting/clearing the run key; collapse counting/haul loss/clearing the run key.
- Recommended Action: Execute `node tests/regression.mjs` in an environment with Node and record PASS/FAIL. After that, wire it into CI only if repeated Director edits justify the small maintenance cost. Add browser-level coverage later for actual Safari/DOM behavior rather than pretending this VM harness is a browser test.

This closes the previous gap of having *no regression artifact*, but it does **not** yet justify `PASS`: this Director run has repository write/read access but no repository execution runner, so the newly added file has not been executed here. Its value is deterministic protection of pure state/persistence transitions once run by Node; it cannot certify layout, Safari lifecycle, touch behavior or real localStorage implementation details.

## Finding TQ-007 — Save schema is versioned by key only, not payload

- Status: WARNING
- Severity: 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: production currently uses `chappy5.echoDrift.v1` and `chappy5.echoDrift.run.v1`, but saved JSON has no explicit `schemaVersion` and there is no migration function. Current validation is sufficient for the small present payload, but future long-term progression will make implicit compatibility increasingly fragile.
- Recommended Action: Do not refactor now. When the next real persistent progression field is approved, add a small explicit schema version/migration at that change boundary and extend regression cases with one legacy payload.

## Current technical summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| critical bugs | PASS/WARNING | HIGH | OBSERVED | No fatal path found in current static/state inspection; test execution still pending. |
| state integrity | PASS | HIGH | OBSERVED | Live, collapse and extract transitions persist/clear coherent state in code. |
| save integrity | PASS | HIGH | OBSERVED | Meta/run loaders sanitize state and storage exceptions are contained. |
| save migration | WARNING | HIGH | OBSERVED | v1 keys exist but payload migration is still implicit. |
| regression risk | WARNING | HIGH | OBSERVED + UNVERIFIED execution | Deterministic Node harness now exists; no recorded run/CI result yet. |
| performance | UNKNOWN | MEDIUM | UNVERIFIED | Production code/assets remain small, but no runtime measurement is recorded. |
| mobile layout | WARNING | MEDIUM | UNVERIFIED | iPhone-oriented CSS exists; no real-device verification record. |
| iPhone runtime | UNKNOWN | HIGH | UNVERIFIED | Real device not verified. |
| Safari lifecycle | UNKNOWN | HIGH | UNVERIFIED | Reload/background/storage behavior not device-verified. |

## Executive handoff

No production gameplay refactor was justified in this pass. The most valuable technical change was to add a **small deterministic regression harness around already-important save/state behavior** without introducing dependencies or changing the game loop.

The next technical priority is two-stage and deliberately narrow:
1. get a recorded PASS/FAIL from `node tests/regression.mjs` and fix only genuine failures;
2. once Executive freezes a meaningful playable, perform the real iPhone/Safari lifecycle matrix.

Do not treat the Node VM test as evidence that the primary target browser is verified, and do not expand a test framework merely to increase test count.
