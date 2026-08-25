# Technical & Quality Analysis

Updated: 2026-08-26 02:48 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` freeze plus non-gameplay quality fixes/regression additions

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
- Evidence: all localStorage reads/writes/removes are wrapped by `storageGet/storageSet/storageRemove`; failures set `storageHealthy=false` and gameplay displays a persistence warning rather than throwing through the interaction path. Commit `372282fc1499b420726aab5023c6df840bd82d40` adds a deterministic test using a storage implementation that throws on every get/set/remove. It asserts boot remains alive, the warning is visible and `startRun()` remains playable without persistence. GitHub Actions run `32867972721` completed with conclusion `success`.
- Recommended Action: Keep the regression. Real Safari private/restricted-storage behavior still requires device verification.

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
- Evidence: current HTML/CSS are intentionally mobile-first (`viewport-fit=cover`, safe-area insets, touch handling, portrait-width cap, dynamic viewport height), and Executive froze `HUMAN_CANDIDATE_01`, but current main still contains no HUMAN_VERIFIED real-device record for touch, safe areas, reload restoration, background/foreground restoration or persistence.
- Recommended Action: The freeze removes the main reason to postpone this. Run the short real-device matrix on the frozen candidate: fresh launch, all route taps, voluntary extraction, live-run reload, background/foreground, reset, portrait viewport/safe-area check.

## Finding TQ-006 — Deterministic state regression is continuously verified

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `tests/regression.mjs` uses Node built-ins only (`node:vm`, in-memory localStorage and a minimal DOM stub) and covers malformed meta normalization; live-dive restore including anomaly offers; successful extraction banking/counting/clearing the run key; collapse counting/haul loss/clearing the run key; displayed/applied calm threat equivalence; the production anomaly reward curve; repeated extraction idempotency; post-collapse interaction idempotency; blocked-storage fallback; and restored-log inert text rendering. GitHub Actions runs `32861991890`, `32867972721`, and `32879993287` confirmed these later extensions.
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
- Evidence: `extract()` and collapse both set `run.alive=false`, and the terminal-idempotency regression is CI-confirmed. However, terminal settlement updates `meta` and the live-run key in separate localStorage operations. A page/process interruption between those writes could theoretically leave `meta` settled while an older live `RUN_KEY` remains, allowing stale-state recovery on reload; reversing write order would instead risk losing a legitimate settlement. There is currently no transaction journal/run settlement ID that can make this atomic across interruption boundaries.
- Recommended Action: Do not add a transaction framework during the frozen core-loop human test. Before valuable long-term progression or monetizable/rare rewards depend on settlement correctness, introduce a minimal idempotent settlement record (for example a run ID + last-settled ID or a pending terminal journal) and regression-test interruption recovery.

This is distinct from ordinary double-tap protection: same-session repeated calls are already CI-protected. The risk is interruption between separate persistence writes.

## Finding TQ-011 — Human-candidate freeze is technically stable enough for device lifecycle verification

- Status: READY_FOR_HUMAN_DEVICE_CHECK
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED + UNKNOWN / UNVERIFIED
- Evidence: Executive froze `HUMAN_CANDIDATE_01` without further gameplay rebalance. The quality change in this pass changes only how persisted log strings are rendered, not game rules, balance, route choices, save semantics or ordinary log copy. The main remaining target-platform unknowns therefore remain actual Safari/device behavior rather than unstable gameplay code.
- Recommended Action: Perform the real-device lifecycle matrix and record results as HUMAN_VERIFIED. If a device failure is found, fix only the concrete defect and then re-freeze the candidate.

## Finding TQ-012 — Restored log strings are now rendered as inert text

- Status: PASS
- Severity: 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: previous main accepted persisted `log` strings and inserted them through `innerHTML`, allowing modified localStorage content to be interpreted as markup. Commit `a07a633afe0cfaaffe5d9c4f23f026324cbc0daa` replaces only log rendering with `document.createElement('li')` + `textContent` and `replaceChildren()`. Normal gameplay log text and ordering are unchanged. Commit `d569c95d89e285c9bdd3624b31a4af5490988808` extends the deterministic harness with a crafted restored value `<img src=x onerror=alert(1)>` and verifies it remains the literal text content of one list item while no HTML is inserted. GitHub Actions run `32879993287`, job `regression`, completed `success`, including `Run deterministic state regression`.
- Recommended Action: Keep the crafted-save regression. Do not add a generic sanitizer or broader DOM abstraction unless another concrete HTML-producing boundary appears.

The fix is deliberately narrow: it closes the known persisted-log trust boundary without changing route HTML generation, gameplay values or the frozen human-feel target.

## Current technical summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| critical bugs | PASS/WARNING | HIGH | OBSERVED | No fatal ordinary interaction path found; abrupt-interruption settlement remains the principal documented prototype integrity risk. |
| state integrity | PASS | HIGH | OBSERVED | Live, collapse and extract transitions plus same-session terminal idempotency are CI-protected. |
| save integrity | PASS/WARNING | HIGH | OBSERVED | Loaders sanitize core state, blocked-storage fallback is CI-protected, storage exceptions are contained, and restored logs no longer cross an HTML trust boundary; terminal settlement is still not crash-atomic. |
| save migration | WARNING | HIGH | OBSERVED | v1 keys exist but payload migration is still implicit. |
| regression risk | PASS | HIGH | OBSERVED | Current deterministic suite, terminal idempotency, blocked-storage fallback and crafted restored-log rendering are CI-confirmed. |
| threat formula integrity | PASS | HIGH | OBSERVED | Display/applied threat equivalence is regression-protected. |
| balance-source integrity | PASS | HIGH | OBSERVED | Production anomaly curve is executable/tested and Director prose has been corrected. |
| performance | UNKNOWN | MEDIUM | UNVERIFIED | Production code/assets remain small, but no runtime measurement is recorded. |
| mobile layout | WARNING | MEDIUM | UNVERIFIED | iPhone-oriented CSS exists; no real-device verification record. |
| iPhone runtime | READY FOR CHECK | HIGH | OBSERVED + UNVERIFIED | Candidate remains gameplay-frozen; device verification should proceed. |
| Safari lifecycle | READY FOR CHECK | HIGH | OBSERVED + UNVERIFIED | Reload/background/storage behavior is the next high-value quality gate. |

## Executive handoff

This pass preserved the gameplay/balance/UI decision target of `HUMAN_CANDIDATE_01` and fixed one narrow defense-in-depth defect that does not alter ordinary gameplay: persisted log strings are no longer interpreted as HTML after reload.

Quality evidence now includes:

1. GitHub Actions run `32861991890` confirms repeated extraction cannot double-bank/count and post-collapse interaction cannot mutate/count the finished run again.
2. GitHub Actions run `32867972721` confirms blocked-localStorage fallback keeps the session playable while surfacing a persistence warning.
3. GitHub Actions run `32879993287` confirms the crafted restored-log value is rendered as inert text and the full deterministic regression suite still passes after the change.

No new gameplay or balance repair is justified from Technical in this pass. The highest-value next Technical action remains the real iPhone/Safari matrix on the frozen candidate: fresh launch, route taps, voluntary extraction, reload mid-dive, background/foreground, reset, safe-area/portrait layout, and persistence behavior.

The known crash-consistency issue should remain a documented prototype risk until persistent rewards become valuable enough to justify a minimal settlement journal. Save schema migration should likewise wait until the next approved persistent progression field rather than being refactored pre-emptively.