# Technical & Quality Analysis

Updated: 2026-08-25 23:48 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT playable after route rebalance and progression-analysis updates

## Finding TQ-001 — Active dive reload persistence

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `game.js` uses versioned `RUN_KEY`, validates `loadRun()`, persists after route generation/state transitions, and clears the live-run key on extraction/collapse/reset. The deterministic regression harness restores a live dive with its offered routes intact and prior CI has verified this path.
- Recommended Action: Keep this path protected by regression CI; real iPhone/Safari reload remains HUMAN verification work.

The later anomaly-offer and route-role changes remain compatible with this persistence model: restored routes normalize their template identity, scalar cost/gain, signal and `anomaly` flag rather than trusting arbitrary saved route data.

## Finding TQ-002 — Persistent meta validation

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `loadMeta()` rebuilds state from validated fields, clamps numeric counters, filters discoveries to known relic IDs and removes duplicates. The malformed-meta regression case has previously passed in CI.
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
- Evidence: collapsed and extracted attempts both increment `meta.runs`, while UI/reset copy consistently labels the value `潜航回数`. Both terminal paths are covered by deterministic regression cases.
- Recommended Action: Preserve this semantic if future achievements/analytics depend on the field; migrate explicitly if the meaning changes.

## Finding TQ-005 — Real iPhone/Safari runtime remains unverified

- Status: UNKNOWN
- Severity: 3
- Confidence: HIGH
- Verification Type: UNKNOWN / UNVERIFIED
- Evidence: current HTML/CSS are intentionally mobile-first (`viewport-fit=cover`, safe-area insets, touch handling, portrait-width cap, dynamic viewport height), but current main contains no HUMAN_VERIFIED real-device record for touch, safe areas, reload restoration, background/foreground restoration or persistence.
- Recommended Action: When Executive freezes a human-testable playable, run a short real-device matrix: fresh launch, all route taps, voluntary extraction, live-run reload, background/foreground, reset, portrait viewport/safe-area check.

## Finding TQ-006 — Deterministic state regression is continuously verified

- Status: PASS / CURRENT EXTENSION UNVERIFIED
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED + UNKNOWN / UNVERIFIED
- Evidence: `tests/regression.mjs` uses Node built-ins only (`node:vm`, in-memory localStorage and a minimal DOM stub) and covers malformed meta normalization; live-dive restore including anomaly offers; successful extraction banking/counting/clearing the run key; collapse counting/haul loss/clearing the run key; displayed/applied calm threat equivalence; and the production anomaly reward curve. Prior GitHub Actions runs have passed these cases. Commit `b8ece2714a912c018c799e2aa66eaaee8372eadd` adds terminal-idempotency cases for repeated extraction and interaction after collapse. The new commit exists on main, but an execution result for that exact extension was not observable during this Director pass, so it is not claimed as PASS yet.
- Recommended Action: On the next Technical pass, verify the workflow result for `b8ece2714a912c018c799e2aa66eaaee8372eadd` or a later main containing it. Keep this CI intentionally small.

## Finding TQ-007 — Save schema is versioned by key only, not payload

- Status: WARNING
- Severity: 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: production currently uses `chappy5.echoDrift.v1` and `chappy5.echoDrift.run.v1`, but saved JSON has no explicit `schemaVersion` and there is no migration function. Current validation is sufficient for the small present payload, but future long-term progression will make implicit compatibility increasingly fragile.
- Recommended Action: Do not refactor now. When the next real persistent progression field is approved, add a small explicit schema version/migration at that change boundary and extend regression cases with one legacy payload.

## Finding TQ-008 — Displayed and applied threat share one formula and are regression-protected

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: route rendering and collapse resolution both use `projectedThreat()`. The deterministic regression starts at threat 30 / depth 2, verifies calm projects to 23.2% at depth 3, resolves that route, and asserts the resulting runtime `run.threat` equals the pre-choice projection. This case has previously passed CI.
- Recommended Action: Keep this single invariant test when future balance changes alter calm, anomaly risk or depth pressure; do not duplicate the formula elsewhere.

## Finding TQ-009 — Depth-sensitive anomaly curve has an executable source of truth

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: current production function is `2 + floor(depth/2) + max(0, depth-2) * 2`, which yields exact bonuses `[2, 3, 5, 8, 10, 13]` for depths 1–6. A regression case asserts that sequence directly. A prior Director prose mismatch was corrected rather than changing gameplay to stale documentation.
- Recommended Action: Executive/Systems should continue using `game.js` or executable probes as the numeric source of truth for balance simulation.

## Finding TQ-010 — Terminal actions are idempotent in memory, but crash consistency is not transactional

- Status: WARNING
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `extract()` and collapse both set `run.alive=false`, so repeated calls in the same JS session are guarded and cannot normally double-count. The new regression extension explicitly protects repeated extraction and post-collapse interaction. However, terminal settlement updates `meta` and the live-run key in separate localStorage operations. A page/process interruption between those writes could theoretically leave `meta` settled while an older live `RUN_KEY` remains, allowing stale-state recovery on reload; reversing write order would instead risk losing a legitimate settlement. There is currently no transaction journal/run settlement ID that can make this atomic across interruption boundaries.
- Recommended Action: Do not add a transaction framework during the core-loop experiment. Before valuable long-term progression or monetizable/rare rewards depend on settlement correctness, introduce a minimal idempotent settlement record (for example a run ID + last-settled ID or a pending terminal journal) and regression-test interruption recovery. Until then, treat abrupt-interruption settlement as a known prototype risk, not a confirmed production-safe path.

This is distinct from ordinary double-tap protection: same-session repeated calls are already guarded. The risk is interruption between separate persistence writes.

## Current technical summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| critical bugs | PASS/WARNING | HIGH | OBSERVED | No fatal ordinary interaction path found; one crash-consistency prototype risk is documented. |
| state integrity | PASS | HIGH | OBSERVED | Live, collapse and extract transitions are covered by deterministic tests; terminal idempotency tests are now present. |
| save integrity | PASS/WARNING | HIGH | OBSERVED | Loaders sanitize state and storage exceptions are contained; terminal settlement is not transactional across abrupt interruption. |
| save migration | WARNING | HIGH | OBSERVED | v1 keys exist but payload migration is still implicit. |
| regression risk | PASS / CURRENT EXTENSION UNVERIFIED | HIGH | OBSERVED + UNVERIFIED | Existing CI has passed; new terminal-idempotency cases are committed but exact run result was not observable this pass. |
| threat formula integrity | PASS | HIGH | OBSERVED | Display/applied threat equivalence is regression-protected. |
| balance-source integrity | PASS | HIGH | OBSERVED | Production anomaly curve is executable/tested and Director prose has been corrected. |
| performance | UNKNOWN | MEDIUM | UNVERIFIED | Production code/assets remain small, but no runtime measurement is recorded. |
| mobile layout | WARNING | MEDIUM | UNVERIFIED | iPhone-oriented CSS exists; no real-device verification record. |
| iPhone runtime | UNKNOWN | HIGH | UNVERIFIED | Real device not verified. |
| Safari lifecycle | UNKNOWN | HIGH | UNVERIFIED | Reload/background/storage behavior not device-verified. |

## Executive handoff

No gameplay rebalance or large refactor was justified this pass because current main after the previous Technical audit changed only analysis/state documentation, not production game rules.

The concrete quality improvement is commit `b8ece2714a912c018c799e2aa66eaaee8372eadd`, which adds regression protection against same-session double settlement: repeated extraction must not bank/count twice, and interaction after collapse must not mutate/count the finished run again. The exact CI result for that new extension was not observable during this pass, so it remains explicitly UNVERIFIED until a later check.

A new medium-severity prototype risk is now recorded: extraction/collapse settlement and live-run deletion are separate localStorage writes and therefore are not crash-atomic. This does not justify a transaction system during the current core-loop experiment, but it becomes important before long-term progression gains substantial value. When persistence expands, prefer a small idempotent settlement protocol rather than trying to solve the problem by merely reordering the two writes.

The target-platform priority remains unchanged: once Executive freezes a meaningful Playable, perform the short real iPhone/Safari lifecycle matrix. Until then, extend automated coverage only for concrete state or rule invariants that are actually changing.
