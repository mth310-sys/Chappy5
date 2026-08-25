# Technical & Quality Analysis

Updated: 2026-08-25 19:50 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT first playable

## Finding TQ-001 — Active dive was not reload-safe

- director: Technical & Quality Analysis Director
- status: PASS
- severity: 4
- confidence: HIGH
- verification: OBSERVED
- finding: Before this pass, only meta progression was persisted. Reloading the page during an active dive discarded Energy, depth, haul, threat, resonance chain, route offers and the run log. This contradicted the product requirement to save and continue play. A dedicated versioned active-run key is now persisted after route generation and restored on load; it is cleared on extraction, collapse and explicit reset.
- evidence: `game.js` now defines `RUN_KEY`, `loadRun()`, `persistRun()`, saves the current live run after state transitions and restores a validated active run during initialization.
- impact: Accidental Safari reloads or page recreation no longer intentionally erase an in-progress run at the code level.
- recommended_action: Add deterministic browser regression coverage for start → choose route → reload → verify the same run state, and verify extract/collapse clear the active-run key.
- human_verification_needed: YES — real iPhone/Safari reload and background/page restoration still require device verification.
- last_updated: commit `60bbb45e4e9da3f357a52e26202d24a38679a3e3`

## Finding TQ-002 — Persistent meta data accepted invalid shapes

- director: Technical & Quality Analysis Director
- status: PASS
- severity: 4
- confidence: HIGH
- verification: OBSERVED
- finding: The previous loader shallow-merged arbitrary parsed JSON into defaults. Corrupted or legacy values could therefore make `found` non-array, make `banked/runs` non-numeric, produce invalid counters, or fail later when collection code calls array methods. The loader now validates the object shape, normalizes counters, restricts discoveries to known IDs and removes duplicates.
- evidence: `loadMeta()` now reconstructs the save from validated fields rather than trusting parsed properties; `finiteInt()` bounds numeric values and `found` is rebuilt from known relic IDs.
- impact: Malformed/legacy local save data is much less likely to break game startup or silently corrupt progression calculations.
- recommended_action: Before adding real progression versions, introduce an explicit save schema version and migration tests rather than adding more ad-hoc fields to the v1 payload.
- human_verification_needed: NO for the structural fix; browser regression with injected malformed saves is recommended.
- last_updated: commit `60bbb45e4e9da3f357a52e26202d24a38679a3e3`

## Finding TQ-003 — localStorage failures previously escaped into gameplay

- director: Technical & Quality Analysis Director
- status: PASS
- severity: 3
- confidence: HIGH
- verification: OBSERVED
- finding: Reads were partly guarded, but writes/removes were not. A storage exception could interrupt extraction, discovery persistence or reset. All storage operations are now wrapped; failed access degrades to session-only play and surfaces a visible warning in `statusText` instead of throwing through gameplay logic.
- evidence: `storageGet/storageSet/storageRemove` wrap all storage calls and set `storageHealthy=false`; `render()` appends a persistence warning when storage is unavailable.
- impact: Restricted/private/failed storage should degrade more safely instead of turning a persistence failure into a broken interaction.
- recommended_action: Confirm actual behavior on Safari private browsing and storage-restricted contexts. If failure is common, consider a dedicated non-intrusive persistence indicator rather than reusing mission text.
- human_verification_needed: YES — real Safari storage behavior is not verified by static inspection.
- last_updated: commit `60bbb45e4e9da3f357a52e26202d24a38679a3e3`

## Finding TQ-004 — Persistent run counter label contradicted its data semantics

- director: Technical & Quality Analysis Director
- status: PASS
- severity: 2
- confidence: HIGH
- verification: OBSERVED
- finding: The previous Executive fix correctly made collapsed runs increment `meta.runs`, but the UI still labeled the value `帰還回数` (returns). The counter now measures all attempts, so the label was factually wrong. It has been changed to `潜航回数` and reset confirmation text was aligned.
- evidence: `index.html` archive label now reads `潜航回数`; reset copy in `game.js` uses the same meaning.
- impact: Players no longer see a statistic whose displayed meaning disagrees with the underlying data.
- recommended_action: Keep persistence field semantics stable when future analytics/achievements depend on them; rename the storage field in a migration only if ambiguity becomes costly.
- human_verification_needed: NO.
- last_updated: commit `c5afa4d3123f0bee4528f192428232c9d7d38a76`

## Finding TQ-005 — Real iPhone/Safari runtime remains unverified

- director: Technical & Quality Analysis Director
- status: UNKNOWN
- severity: 3
- confidence: HIGH
- verification: UNVERIFIED
- finding: The code is iPhone-oriented (`viewport-fit=cover`, safe-area insets, touch-action, portrait-width cap, `100dvh`), but there is no evidence in current main of a real-device Safari run covering touch interaction, viewport/safe-area behavior, reload restoration, background/foreground restoration or storage persistence.
- evidence: `index.html` and `style.css` contain mobile-focused settings; repository currently has no recorded real-device verification artifact or browser regression suite.
- impact: Static compatibility intent is not enough to claim public-quality iPhone behavior. A flagship browser game could still fail on the primary target device despite desktop/static correctness.
- recommended_action: Once the next technically stable playable is ready, run a short iPhone/Safari verification matrix: fresh launch, route taps, extraction, reload during live run, background/foreground, reset, portrait viewport including safe areas.
- human_verification_needed: YES.
- last_updated: 2026-08-25 19:50 JST

## Finding TQ-006 — No deterministic browser regression exists yet

- director: Technical & Quality Analysis Director
- status: WARNING
- severity: 3
- confidence: HIGH
- verification: OBSERVED
- finding: Current gameplay behavior depends on random route generation/collapse and localStorage, but the repository has no test harness or deterministic random injection. This makes regressions in state transitions and persistence expensive to detect as Director cycles accelerate.
- evidence: current root contains the game files and analysis documents but no browser test configuration, test directory, seeded RNG seam or CI test workflow.
- impact: Rapid repeated edits can reintroduce already-fixed bugs (attempt counting, save integrity, run restoration) without immediate detection.
- recommended_action: Add the smallest useful regression layer rather than a framework-heavy refactor. Highest-value cases: fresh start, route action mutates bounded state, successful extraction persists meta and clears live run, collapse records attempt and clears live run, reload restores active state, malformed saves fall back safely. Introduce deterministic randomness only as much as tests require.
- human_verification_needed: NO.
- last_updated: 2026-08-25 19:50 JST

## Technical summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| critical_bugs | WARNING | HIGH | OBSERVED | No known fatal path after save hardening, but runtime regression coverage is absent. |
| state_integrity | PASS | HIGH | OBSERVED | Collapse/extract/live-run transitions now persist/clear coherent state in code. |
| save_integrity | PASS | HIGH | OBSERVED | Meta fields are sanitized and storage exceptions are contained. |
| save_migration | WARNING | HIGH | OBSERVED | v1 key exists, but no explicit schema/migration layer yet. |
| regression_risk | WARNING | HIGH | OBSERVED | No deterministic automated browser tests. |
| performance | UNKNOWN | MEDIUM | UNVERIFIED | Current code/assets are small, but no runtime measurement has been recorded. |
| mobile_layout | WARNING | MEDIUM | UNVERIFIED | CSS is intentionally portrait/iPhone-first but not device-verified. |
| iphone_runtime | UNKNOWN | HIGH | UNVERIFIED | No recorded real-device run. |
| safari_runtime | UNKNOWN | HIGH | UNVERIFIED | No recorded Safari verification of storage/reload/background behavior. |

## Executive handoff

This pass made only small technical corrections that preserve the current game direction. The highest-value technical next step is **not** a codebase cleanup. It is a minimal deterministic regression harness around the already-important state/save transitions, followed by a real iPhone/Safari verification when a playable is intentionally held stable for human testing.
