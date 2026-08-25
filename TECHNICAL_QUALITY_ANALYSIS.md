# Technical & Quality Analysis

Updated: 2026-08-26 00:48 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` freeze plus non-gameplay regression additions

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

- Status: PASS / CURRENT TEST EXTENSION UNVERIFIED
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED + UNKNOWN / UNVERIFIED
- Evidence: all localStorage reads/writes/removes are wrapped by `storageGet/storageSet/storageRemove`; failures set `storageHealthy=false` and gameplay displays a persistence warning rather than throwing through the interaction path. Commit `372282fc1499b420726aab5023c6df840bd82d40` adds a deterministic test using a storage implementation that throws on every get/set/remove. It asserts boot remains alive, the warning is visible and `startRun()` remains playable without persistence. The commit is on main, but an Actions result was not yet observable during this pass.
- Recommended Action: Verify CI for the new blocked-storage regression on the next Technical pass. Real Safari private/restricted-storage behavior still requires device verification.

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
- Evidence: current HTML/CSS are intentionally mobile-first (`viewport-fit=cover`, safe-area insets, touch handling, portrait-width cap, dynamic viewport height), and Executive has now frozen `HUMAN_CANDIDATE_01`, but current main still contains no HUMAN_VERIFIED real-device record for touch, safe areas, reload restoration, background/foreground restoration or persistence.
- Recommended Action: The freeze removes the main reason to postpone this. Run the short real-device matrix on the frozen candidate: fresh launch, all route taps, voluntary extraction, live-run reload, background/foreground, reset, portrait viewport/safe-area check.

## Finding TQ-006 — Deterministic state regression is continuously verified

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `tests/regression.mjs` uses Node built-ins only (`node:vm`, in-memory localStorage and a minimal DOM stub) and covers malformed meta normalization; live-dive restore including anomaly offers; successful extraction banking/counting/clearing the run key; collapse counting/haul loss/clearing the run key; displayed/applied calm threat equivalence; the production anomaly reward curve; repeated extraction idempotency; and post-collapse interaction idempotency. GitHub Actions run `32861991890` for commit `b8ece2714a912c018c799e2aa66eaaee8372eadd` completed with conclusion `success`, so the previously unverified terminal-idempotency extension is now promoted to PASS.
- Recommended Action: Keep this CI intentionally small and invariant-focused. Do not broaden it into UI snapshot maintenance unless a concrete regression risk appears.

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
- Evidence: `extract()` and collapse both set `run.alive=false`, and the terminal-idempotency regression is now CI-confirmed. However, terminal settlement updates `meta` and the live-run key in separate localStorage operations. A page/process interruption between those writes could theoretically leave `meta` settled while an older live `RUN_KEY` remains, allowing stale-state recovery on reload; reversing write order would instead risk losing a legitimate settlement. There is currently no transaction journal/run settlement ID that can make this atomic across interruption boundaries.
- Recommended Action: Do not add a transaction framework during the frozen core-loop human test. Before valuable long-term progression or monetizable/rare rewards depend on settlement correctness, introduce a minimal idempotent settlement record (for example a run ID + last-settled ID or a pending terminal journal) and regression-test interruption recovery.

This is distinct from ordinary double-tap protection: same-session repeated calls are already CI-protected. The risk is interruption between separate persistence writes.

## Finding TQ-011 — Human-candidate freeze is technically stable enough for device lifecycle verification

- Status: READY_FOR_HUMAN_DEVICE_CHECK
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED + UNKNOWN / UNVERIFIED
- Evidence: Executive froze `HUMAN_CANDIDATE_01` without further gameplay rebalance. Production JS has not changed since the previously successful regression-protected balance version; subsequent changes are analysis documentation and non-gameplay tests. The main remaining target-platform unknowns are therefore now isolated to actual Safari/device behavior rather than known unstable gameplay code.
- Recommended Action: Do not change the frozen candidate merely to increase test coverage. Perform the real-device lifecycle matrix and record results as HUMAN_VERIFIED. If a device failure is found, fix only the concrete defect and then re-freeze the candidate.

## Current technical summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| critical bugs | PASS/WARNING | HIGH | OBSERVED | No fatal ordinary interaction path found; one abrupt-interruption settlement risk is documented. |
| state integrity | PASS | HIGH | OBSERVED | Live, collapse and extract transitions plus same-session terminal idempotency are CI-protected. |
| save integrity | PASS/WARNING | HIGH | OBSERVED | Loaders sanitize state and storage exceptions are contained; terminal settlement is not crash-atomic. |
| save migration | WARNING | HIGH | OBSERVED | v1 keys exist but payload migration is still implicit. |
| regression risk | PASS + one new extension pending | HIGH | OBSERVED + UNVERIFIED | Terminal-idempotency CI is confirmed successful; blocked-storage fallback test is newly committed and awaiting observable CI. |
| threat formula integrity | PASS | HIGH | OBSERVED | Display/applied threat equivalence is regression-protected. |
| balance-source integrity | PASS | HIGH | OBSERVED | Production anomaly curve is executable/tested and Director prose has been corrected. |
| performance | UNKNOWN | MEDIUM | UNVERIFIED | Production code/assets remain small, but no runtime measurement is recorded. |
| mobile layout | WARNING | MEDIUM | UNVERIFIED | iPhone-oriented CSS exists; no real-device verification record. |
| iPhone runtime | READY FOR CHECK | HIGH | OBSERVED + UNVERIFIED | Candidate is frozen; device verification should now proceed. |
| Safari lifecycle | READY FOR CHECK | HIGH | OBSERVED + UNVERIFIED | Reload/background/storage behavior is the next high-value quality gate. |

## Executive handoff

No gameplay balance or UI change was justified because `HUMAN_CANDIDATE_01` is explicitly frozen for human evaluation. This pass therefore preserved the candidate and focused only on quality evidence around it.

Two concrete updates were made:

1. The previously unverified terminal-idempotency extension is now confirmed PASS. GitHub Actions run `32861991890` for `b8ece2714a912c018c799e2aa66eaaee8372eadd` completed successfully, so repeated extraction and post-collapse interaction are no longer merely test code present on main; they are executed CI evidence.
2. Commit `372282fc1499b420726aab5023c6df840bd82d40` adds a blocked-localStorage regression. This directly exercises the fallback path that current production code claims to support: storage calls throw, the game stays playable, and the player receives a clear non-persistence warning. Its exact Actions result was not yet observable during this pass, so the new extension remains UNVERIFIED rather than being prematurely declared PASS.

The highest-value next Technical action is no longer another static audit. Because the candidate is frozen, the real iPhone/Safari matrix should now be performed and recorded as HUMAN_VERIFIED: fresh launch, route taps, voluntary extraction, reload mid-dive, background/foreground, reset, safe-area/portrait layout, and persistence behavior. The known crash-consistency issue should remain a documented prototype risk until persistent rewards become valuable enough to justify a minimal settlement journal.