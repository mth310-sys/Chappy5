# Technical & Quality Analysis

Updated: 2026-08-26 03:53 JST
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
- Evidence: `tests/regression.mjs` uses Node built-ins only (`node:vm`, in-memory localStorage and a minimal DOM stub) and covers malformed meta normalization; live-dive restore including anomaly offers; successful extraction banking/counting/clearing the run key; collapse counting/haul loss/clearing the run key; displayed/applied calm threat equivalence; the production anomaly reward curve; repeated extraction idempotency; post-collapse interaction idempotency; blocked-storage fallback; restored-log inert text rendering; and idle-UI recovery after an active run is cleared. GitHub Actions runs `32861991890`, `32867972721`, `32879993287`, and `32886288373` confirmed these later extensions.
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
- Evidence: Executive froze `HUMAN_CANDIDATE_01` without further gameplay rebalance. The quality changes in these passes do not alter game rules, balance, route values or save semantics. The main remaining target-platform unknowns therefore remain actual Safari/device behavior rather than unstable gameplay code.
- Recommended Action: Perform the real-device lifecycle matrix and record results as HUMAN_VERIFIED. If a device failure is found, fix only the concrete defect and then re-freeze the candidate.

## Finding TQ-012 — Restored log strings are now rendered as inert text

- Status: PASS
- Severity: 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: previous main accepted persisted `log` strings and inserted them through `innerHTML`, allowing modified localStorage content to be interpreted as markup. Commit `a07a633afe0cfaaffe5d9c4f23f026324cbc0daa` replaces only log rendering with `document.createElement('li')` + `textContent` and `replaceChildren()`. Normal gameplay log text and ordering are unchanged. Commit `d569c95d89e285c9bdd3624b31a4af5490988808` extends the deterministic harness with a crafted restored value `<img src=x onerror=alert(1)>` and verifies it remains the literal text content of one list item while no HTML is inserted. GitHub Actions run `32879993287`, job `regression`, completed `success`, including `Run deterministic state regression`.
- Recommended Action: Keep the crafted-save regression. Do not add a generic sanitizer or broader DOM abstraction unless another concrete HTML-producing boundary appears.

The fix is deliberately narrow: it closes the known persisted-log trust boundary without changing route HTML generation, gameplay values or the frozen human-feel target.

## Finding TQ-013 — Clearing an active run previously left the UI in a stale, partly disabled state

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: before commit `06422c9f8002d1cff99859142573dd6f29703d87`, `render()` returned early when `run===null` after updating only archive/status/route text. If `run` became null while a live dive had previously been rendered (the reset path does exactly this), `#startRun` retained `disabled=true` and text `潜航中`; `#extract` could retain its prior enabled state; ENERGY/DEPTH/HAUL/RESONANCE/THREAT and the visible log retained stale values from the deleted run. The result was a cleared save with no live run but a UI that could prevent starting a new dive until reload and continued to display deleted-run state. The fix explicitly restores every idle control/HUD/log field in the `!run` branch without altering any route rule or balance value. Commit `4ed725529de2c516edbd6eec4816cac6e80f9dee` adds a deterministic regression that renders a live run, clears `run`, renders again, and asserts start is enabled, extract is disabled, HUD/threat return to idle defaults and stale logs are cleared. GitHub Actions run `32886288373` completed `success`.
- Recommended Action: Keep the idle-state regression. Player Experience's separate wording issue remains: the reset confirmation still does not explicitly say that the current dive is discarded. That is a rule-communication decision, not this technical state bug.

This repair is appropriate during the human-candidate freeze because it fixes a broken post-reset interaction path without changing normal core-loop behavior, balance or the three human-feel questions.

## Current technical summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| critical bugs | PASS/WARNING | HIGH | OBSERVED | No fatal ordinary interaction path remains in the audited paths; active-run reset no longer strands the UI, while abrupt-interruption settlement remains the principal documented prototype integrity risk. |
| state integrity | PASS | HIGH | OBSERVED | Live, collapse, extract, same-session terminal idempotency and reset-to-idle rendering are CI-protected. |
| save integrity | PASS/WARNING | HIGH | OBSERVED | Loaders sanitize core state, blocked-storage fallback is CI-protected, storage exceptions are contained, restored logs are inert text, and reset now clears stale rendered state; terminal settlement is still not crash-atomic. |
| save migration | WARNING | HIGH | OBSERVED | v1 keys exist but payload migration is still implicit. |
| regression risk | PASS | HIGH | OBSERVED | Current deterministic suite includes terminal idempotency, blocked-storage fallback, crafted restored-log rendering and active-run reset recovery, all CI-confirmed. |
| threat formula integrity | PASS | HIGH | OBSERVED | Display/applied threat equivalence is regression-protected. |
| balance-source integrity | PASS | HIGH | OBSERVED | Production anomaly curve is executable/tested and Director prose has been corrected. |
| performance | UNKNOWN | MEDIUM | UNVERIFIED | Production code/assets remain small, but no runtime measurement is recorded. |
| mobile layout | WARNING | MEDIUM | UNVERIFIED | iPhone-oriented CSS exists; no real-device verification record. |
| iPhone runtime | READY FOR CHECK | HIGH | OBSERVED + UNVERIFIED | Candidate remains gameplay-frozen; device verification should proceed. |
| Safari lifecycle | READY FOR CHECK | HIGH | OBSERVED + UNVERIFIED | Reload/background/storage behavior is the next high-value quality gate. |

## Executive handoff

This pass preserved the gameplay/balance decision target of `HUMAN_CANDIDATE_01` and found a concrete non-balance defect in the reset transition. Resetting during a live dive deleted the run data but left controls and HUD in their previous live-run state; most importantly, the start button could remain disabled until page reload. That defect is now repaired and regression-protected.

Quality evidence now includes:

1. GitHub Actions run `32861991890` confirms repeated extraction cannot double-bank/count and post-collapse interaction cannot mutate/count the finished run again.
2. GitHub Actions run `32867972721` confirms blocked-localStorage fallback keeps the session playable while surfacing a persistence warning.
3. GitHub Actions run `32879993287` confirms crafted restored-log values remain inert text.
4. GitHub Actions run `32886288373` confirms clearing a live run restores a usable idle UI: start enabled, extract disabled, HUD/threat reset and stale log removed.

No gameplay/balance repair is justified from Technical in this pass. The highest-value next Technical action remains the real iPhone/Safari matrix on the frozen candidate: fresh launch, route taps, voluntary extraction, reload mid-dive, background/foreground, reset, safe-area/portrait layout, and persistence behavior.

The known crash-consistency issue should remain a documented prototype risk until persistent rewards become valuable enough to justify a minimal settlement journal. Save schema migration should likewise wait until the next approved persistent progression field rather than being refactored pre-emptively.