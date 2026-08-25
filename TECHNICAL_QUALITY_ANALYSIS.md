# Technical & Quality Analysis

Updated: 2026-08-25 22:52 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT playable after depth-opportunity tuning

## Finding TQ-001 — Active dive reload persistence

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `game.js` uses versioned `RUN_KEY`, validates `loadRun()`, persists after route generation/state transitions, and clears the live-run key on extraction/collapse/reset. The deterministic regression harness restores a live dive with its offered routes intact and is CI-verified.
- Recommended Action: Keep this path protected by regression CI; real iPhone/Safari reload remains HUMAN verification work.

The later anomaly-offer and route-role changes remain compatible with this persistence model: restored routes normalize their template identity, scalar cost/gain, signal and `anomaly` flag rather than trusting arbitrary saved route data.

## Finding TQ-002 — Persistent meta validation

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `loadMeta()` rebuilds state from validated fields, clamps numeric counters, filters discoveries to known relic IDs and removes duplicates. The malformed-meta regression case runs successfully in CI.
- Recommended Action: Before persistent progression expands materially, add an explicit payload schema version/migration path instead of extending the implicit v1 shape indefinitely.

## Finding TQ-003 — Storage exception containment

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: all localStorage reads/writes/removes are wrapped by `storageGet/storageSet/storageRemove`; failures set `storageHealthy=false` and gameplay displays a persistence warning rather than throwing through the interaction path.
- Recommended Action: Verify actual Safari private/restricted-storage behavior on device; static code inspection and VM tests cannot certify it.

## Finding TQ-004 — Run counter semantics

- Status: PASS
- Severity: 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: collapsed and extracted attempts both increment `meta.runs`, while UI/reset copy consistently labels the value `潜航回数`. Both terminal paths are exercised by the deterministic regression harness.
- Recommended Action: Preserve this semantic if future achievements/analytics depend on the field; migrate explicitly if the meaning changes.

## Finding TQ-005 — Real iPhone/Safari runtime remains unverified

- Status: UNKNOWN
- Severity: 3
- Confidence: HIGH
- Verification Type: UNKNOWN / UNVERIFIED
- Evidence: current HTML/CSS are intentionally mobile-first (`viewport-fit=cover`, safe-area insets, touch handling, portrait-width cap, dynamic viewport height), but current main contains no HUMAN_VERIFIED real-device record for touch, safe areas, reload restoration, background/foreground restoration or persistence.
- Recommended Action: When Executive freezes a human-testable playable, run a short real-device matrix: fresh launch, all route taps, voluntary extraction, live-run reload, background/foreground, reset, portrait viewport/safe-area check.

## Finding TQ-006 — Deterministic state regression is continuously verified

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `tests/regression.mjs` uses Node built-ins only (`node:vm`, in-memory localStorage and a minimal DOM stub) and covers malformed meta normalization; live-dive restore including anomaly offers; successful extraction banking/counting/clearing the run key; collapse counting/haul loss/clearing the run key. `.github/workflows/regression.yml` executes it automatically on relevant changes.
- Recommended Action: Keep this CI intentionally small. Extend cases only when a real state/persistence/game-rule invariant changes. Add browser-level coverage later for actual Safari/DOM behavior rather than treating this VM harness as a browser test.

The latest targeted regression extension is commit `a49d8510315d66a20fda2b40b775691f21a88afb`. GitHub Actions run `32855815035` (`ECHO DRIFT Regression`) completed with conclusion `success`.

## Finding TQ-007 — Save schema is versioned by key only, not payload

- Status: WARNING
- Severity: 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: production currently uses `chappy5.echoDrift.v1` and `chappy5.echoDrift.run.v1`, but saved JSON has no explicit `schemaVersion` and there is no migration function. Current validation is sufficient for the small present payload, but future long-term progression will make implicit compatibility increasingly fragile.
- Recommended Action: Do not refactor now. When the next real persistent progression field is approved, add a small explicit schema version/migration at that change boundary and extend regression cases with one legacy payload.

## Finding TQ-008 — Displayed and applied threat share one formula and are now regression-protected

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: route rendering and collapse resolution both use `projectedThreat()`. A new deterministic regression case starts at threat 30 / depth 2, verifies calm projects to 23.2% at depth 3, resolves that route, and asserts the resulting runtime `run.threat` equals the pre-choice projection. CI run `32855815035` passed this case.
- Recommended Action: Keep this single invariant test when future balance changes alter calm, anomaly risk or depth pressure; do not duplicate the formula elsewhere.

This closes the previous gap where formula sharing was visible in code but not directly protected by CI.

## Finding TQ-009 — Depth-sensitive anomaly curve needed an executable source of truth

- Status: WARNING → PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: current production function is `2 + floor(depth/2) + max(0, depth-2) * 2`, which yields exact bonuses `[2, 3, 5, 8, 10, 13]` for depths 1–6. A recent Progression analysis described this curve as `2, 3, 6, 9, 11, 14`, so Director prose had drifted from implementation by +1 from depth 3 onward. The new regression case asserts the production sequence directly, and CI run `32855815035` passed.
- Recommended Action: Executive/Systems should use `game.js` or executable probes as the numeric source of truth for subsequent balance simulation. Analysis documents should be corrected when next touched; do not change gameplay merely to match stale prose.

This is not a gameplay bug: the implementation is internally consistent. It is a decision-quality risk because balance conclusions can be wrong if a Director simulates a documented curve that is not the curve players actually receive.

## Current technical summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| critical bugs | PASS/WARNING | HIGH | OBSERVED | No fatal path found in current static/state inspection; core regression remains CI-pass. |
| state integrity | PASS | HIGH | OBSERVED | Live, collapse and extract transitions are exercised successfully in CI. |
| save integrity | PASS | HIGH | OBSERVED | Meta/run loaders sanitize state; storage exceptions are contained. |
| save migration | WARNING | HIGH | OBSERVED | v1 keys exist but payload migration is still implicit. |
| regression risk | PASS | HIGH | OBSERVED | State transitions plus threat/anomaly rule invariants now run automatically and pass. |
| threat formula integrity | PASS | HIGH | OBSERVED | Display/applied threat equivalence is now explicitly regression-tested. |
| balance-source integrity | PASS/WARNING | HIGH | OBSERVED | Production anomaly curve is executable/tested; one stale analysis description was identified for correction. |
| performance | UNKNOWN | MEDIUM | UNVERIFIED | Production code/assets remain small, but no runtime measurement is recorded. |
| mobile layout | WARNING | MEDIUM | UNVERIFIED | iPhone-oriented CSS exists; no real-device verification record. |
| iPhone runtime | UNKNOWN | HIGH | UNVERIFIED | Real device not verified. |
| Safari lifecycle | UNKNOWN | HIGH | UNVERIFIED | Reload/background/storage behavior not device-verified. |

## Executive handoff

No production gameplay refactor was justified this pass. The useful technical work was narrower: protect two balance-sensitive invariants that changed during the Director cycle and detect one concrete mismatch between analysis prose and actual code.

The current production anomaly bonus is **2 / 3 / 5 / 8 / 10 / 13 at depths 1–6**. Future Systems/Executive simulations should derive this from `game.js` or an executable probe rather than copy the stale 2 / 3 / 6 / 9 / 11 / 14 description.

The target-platform priority is unchanged: once Executive freezes a meaningful Playable, perform the short real iPhone/Safari lifecycle matrix. Until then, extend automated coverage only for concrete state or rule invariants that are actually being changed; do not grow a testing framework for its own sake.
