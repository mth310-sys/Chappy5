# Technical & Quality Analysis

Updated: 2026-08-25 21:52 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT playable after route-identity balance intervention

## Finding TQ-001 — Active dive reload persistence

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `game.js` uses versioned `RUN_KEY`, validates `loadRun()`, persists after route generation/state transitions, and clears the live-run key on extraction/collapse/reset. The deterministic regression harness restores a live dive with its offered routes intact and is now CI-verified.
- Recommended Action: Keep this path protected by regression CI; real iPhone/Safari reload remains HUMAN verification work.

The later anomaly-offer and route-role changes remain compatible with this persistence model: restored routes normalize their template identity, scalar cost/gain, signal and `anomaly` flag rather than trusting arbitrary saved route data.

## Finding TQ-002 — Persistent meta validation

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `loadMeta()` rebuilds state from validated fields, clamps numeric counters, filters discoveries to known relic IDs and removes duplicates. The malformed-meta regression case now runs successfully in CI.
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

## Finding TQ-006 — Deterministic state regression is now continuously verified

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `tests/regression.mjs` uses Node built-ins only (`node:vm`, in-memory localStorage and a minimal DOM stub) and covers malformed meta normalization; live-dive restore including anomaly offers; successful extraction banking/counting/clearing the run key; collapse counting/haul loss/clearing the run key. Commit `669ad78747eb939262ab46ce3c8b98784a62cb45` adds `.github/workflows/regression.yml`. GitHub Actions run `32849788745` completed successfully; job `regression` and step `Run deterministic state regression` both concluded `success` on Node 22.
- Recommended Action: Keep this CI intentionally small. Extend cases only when a real state/persistence rule changes. Add browser-level coverage later for actual Safari/DOM behavior rather than pretending this VM harness is a browser test.

This closes the previous execution-verification gap: the regression artifact is no longer merely present; it has an externally recorded successful run tied to main. It still does **not** verify layout, Safari lifecycle, touch behavior or real localStorage implementation details.

## Finding TQ-007 — Save schema is versioned by key only, not payload

- Status: WARNING
- Severity: 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: production currently uses `chappy5.echoDrift.v1` and `chappy5.echoDrift.run.v1`, but saved JSON has no explicit `schemaVersion` and there is no migration function. Current validation is sufficient for the small present payload, but future long-term progression will make implicit compatibility increasingly fragile.
- Recommended Action: Do not refactor now. When the next real persistent progression field is approved, add a small explicit schema version/migration at that change boundary and extend regression cases with one legacy payload.

## Finding TQ-008 — Current balance intervention preserves displayed/actual threat calculation path

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: both route rendering and collapse resolution use the same `projectedThreat()` function. Calm recovery is state-dependent (`run.threat >= 25`), anomaly risk and depth pressure are included in that function, and `chooseRoute()` assigns the returned value to `run.threat` immediately before the collapse roll. No separate hidden collapse formula was introduced by the route-role change.
- Recommended Action: If threat rules are changed again, add one deterministic regression case around a high-threat calm route so UI/gameplay formula drift cannot reappear unnoticed.

## Current technical summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| critical bugs | PASS/WARNING | HIGH | OBSERVED | No fatal path found in current static/state inspection; core regression now CI-pass. |
| state integrity | PASS | HIGH | OBSERVED | Live, collapse and extract transitions are exercised successfully in CI. |
| save integrity | PASS | HIGH | OBSERVED | Meta/run loaders sanitize state; storage exceptions are contained. |
| save migration | WARNING | HIGH | OBSERVED | v1 keys exist but payload migration is still implicit. |
| regression risk | PASS | HIGH | OBSERVED | Minimal deterministic harness runs automatically on relevant main/PR changes and has a recorded successful run. |
| threat formula integrity | PASS | HIGH | OBSERVED | Display and collapse resolution share `projectedThreat()`. |
| performance | UNKNOWN | MEDIUM | UNVERIFIED | Production code/assets remain small, but no runtime measurement is recorded. |
| mobile layout | WARNING | MEDIUM | UNVERIFIED | iPhone-oriented CSS exists; no real-device verification record. |
| iPhone runtime | UNKNOWN | HIGH | UNVERIFIED | Real device not verified. |
| Safari lifecycle | UNKNOWN | HIGH | UNVERIFIED | Reload/background/storage behavior not device-verified. |

## Executive handoff

This pass justified one narrow infrastructure change because the game is being edited repeatedly during the 24-hour cycle: the existing zero-dependency regression harness is now executed by a minimal GitHub Actions workflow instead of remaining unverified. The first run passed, so there is now durable evidence that the current main preserves the four most important save/state transitions covered by the harness.

No production gameplay refactor was justified. The next technical priority remains the real target environment: once Executive freezes a meaningful Playable, perform the short iPhone/Safari lifecycle matrix. Before that point, only extend automated coverage when a concrete state rule changes; do not grow a test framework for its own sake.
