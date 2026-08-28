# Prototype Machine Director Handoff — Run 6

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON

## Source of truth re-read

This run re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both current prototype directories, recent commits, current published shells, Sound Run 5 profiles, and the latest GitHub Actions state before changing code.

SIGNAL / FORGE / VAULT were not changed.

## Latest QA evidence entering this run

The new submission-readiness suite introduced by Playtest & QA Run 5 completed successfully in Generic Autonomous Playtest run `33218424968` at commit `9e3ec43`. Pages for the QA handoff commit `f9aaa37` also completed successfully.

This removes the previous browser-readiness blocker. Human feel / real-device audio / subjective long-play attraction remain Human Gate items.

## Machine decision — maximum bottleneck

The remaining integration debt was Sound Run 5: the new audio profiles existed on `main` but the deployed `play.html` shells did not reference them. This meant the codebase contained improved timing/routing intent that the submitted build did not actually execute.

Because 刻ノ一閃 depends most directly on LEVER→SPIN→STOP1/2/3→殺陣 timing, it is the higher-risk machine if that integration remains pending. Nocturne already has a working quiet ambient/mechanism/observation/memory separation in its published shell and remains the stable comparison baseline.

## Applied change — 刻ノ一閃

Commit `8d821a1` integrates `prototypes/toki-no-issen/audio-timeline.js` into the published `prototypes/toki-no-issen/play.html` as an ES module.

The deployed shell now actually uses the Sound Run 5 profile:

- BET frequencies and confirmation delay come from `TOKI_AUDIO_TIMELINE`.
- LEVER frequency comes from the same profile.
- `createTokiSpinBed()` starts a very low-level 54 Hz triangle mechanical floor as reels begin moving.
- The spin bed stops on STOP3, so it supports reel motion without adding sword noise throughout normal spin.
- STOP mechanism/slash/tail offsets use the shared timeline values.
- Result release uses the profile's explicit delayed timing, preserving the meaningful post-third-stop gap.
- Existing `body.dataset.audioTech` remains the technical mute/resume signal, so intentional quiet is not confused with Safari failure.

No heavy visual filters, continuous JS reel renderer, third-party samples, payout logic, or new game system were introduced.

## Nocturne status this run

Nocturne was re-read and intentionally not rewritten in this Machine pass. Its current published shell already separates ambient, mechanism, observation and memory buses and has repeatedly been the 50G stability baseline. `audio-routing.js` remains integration-pending as a profile module; this is now the next shared integration debt, but it is lower risk than destabilizing the working shell before the Toki module change is verified.

## Verification now running

The new Toki integration triggered Generic Autonomous Playtest run `33218914688` and Pages deployment `33218913889`. At handoff creation they were queued. Do not claim post-integration Browser PASS until those runs finish successfully.

## Next Game & Reel Director

1. Re-read latest main first.
2. Check run `33218914688` before adding any new system.
3. If PASS: keep the new Toki spin-bed/timeline intact and tune only repeated-play cadence / reel information gain. Do not restore heavy compositing.
4. If FAIL: treat the exact WebKit/audio/module failure as the blocker and repair it before game expansion.
5. For Nocturne, preserve the 50G-stable shell; do not invent payout complexity. Its remaining Sound Run 5 module integration can be completed only with immediate regression verification.

Human Gate 2 remains closed.