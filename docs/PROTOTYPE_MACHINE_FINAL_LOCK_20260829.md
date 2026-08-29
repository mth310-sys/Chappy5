# Dual Prototype Machine Final Lock — 2026-08-29

Status: `SUBMISSION_CANDIDATE_LOCKED / MACHINE_FINAL_CHECK_PASSED / HUMAN_GATE_2_OPEN`

Machine Director final submission check for the bounded dual-prototype comparison of **刻ノ一閃** and **ノクターン・アクアリウム**.

SIGNAL / FORGE / VAULT were not changed.

## Source of truth re-fetched

Before this lock, Machine Director re-fetched latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype `play.html` shells, recent commits, and the final QA record.

Latest main before this lock:

- `9e82e8af2ce957eaa6db815d62f0d7461824b2e3` — `Lock final dual prototype QA submission record`

Latest main Pages deployment:

- GitHub Pages run `33229758560`
- head SHA `9e82e8af2ce957eaa6db815d62f0d7461824b2e3`
- conclusion: `success`

The last executable/test QA baseline remains:

- `3ba2795ebf52a7dd2c19c7462d9ff5157c25c25f` — `Harden final prototype submission readiness checks`
- Generic Autonomous Playtest run `33227258293`: `success`

Commits after that executable baseline through the final QA record are submission/freeze documentation and do not alter the frozen prototype runtime.

## Submission launch paths

- 刻ノ一閃: `https://mth310-sys.github.io/Chappy5/prototypes/toki-no-issen/play.html`
- ノクターン・アクアリウム: `https://mth310-sys.github.io/Chappy5/prototypes/nocturne-aquarium/play.html`

The integrated `play.html` shells are the submission candidates.

## 刻ノ一閃 final integrated state

Frozen core:

`BET → LEVER → SPIN → STOP1 → STOP2 → STOP3 → slash / sword-action resolution → NEXT BET`

Machine-level checks preserved:

- three physical reels remain the central mechanical object
- fixed, touch-safe operation deck remains in place
- STOP input and slash response remain on the same interaction path
- `audio-timeline.js` remains integrated in the published shell
- physical STOP precedes the sword transient, followed by a short semantic pause before resolution
- lightweight WebKit-safe visual treatment remains frozen rather than restoring expensive compositing paths

No late runtime change is justified.

## ノクターン・アクアリウム final integrated state

Frozen core:

`BET → LEVER → SPIN → first STOP selects observation layer → STOP2/STOP3 collect reel evidence → MEMORY / DEPTH world response → NEXT BET`

Machine-level checks preserved:

- aquarium/tank silhouette remains materially distinct from 刻ノ一閃
- physical reels remain foreground-playable beneath the world presentation
- first STOP links reel choice to observation layer
- MEMORY / DEPTH response remains driven from reel play rather than detached display animation
- stable published shell retains separated mechanism / observation / memory audio buses
- optional `audio-routing.js` remains outside the published shell for this submission to avoid a late regression

No late runtime change is justified.

## iPhone / Safari submission boundary

Automated submission-readiness coverage remains green for iPhone-class width and checks:

- no horizontal overflow
- BET / LEVER / STOP targets >= 44px high
- all three reels visible and unclipped
- no-scroll play surface
- Web Audio startup attempt from a real cabinet gesture
- Safari-style audio resume does not enter `resume-failed`
- later gesture after visibility/recovery preserves attempted audio state
- repeated BET → LEVER → STOP×3 operation
- invalid/repeated input handling
- geometry stability
- reload/recovery
- 30G 刻ノ一閃 / 50G ノクターン repeated-play endurance targets

## Known limitations / Human Gate

This lock is a Prototype submission lock, not a machine-completion declaration.

Still human/unverified:

- `REALITY_PRESENCE_VERIFIED`
- actual physical-iPhone / Bluetooth `AUDIO_VERIFIED`
- handheld STOP-to-slash satisfaction for 刻ノ一閃
- whether ノクターン aquarium presentation steals too much gaze from the reels
- subjective 30–50G fatigue and repeat desire
- material/cabinet attraction on a real handset
- `HUMAN_MACHINE_VERIFIED`

Human Gate 2 remains open.

## Machine Director final decision

`SUBMISSION_CANDIDATE_LOCKED`

Both integrated browser Prototype shells are suitable for submission as the current comparison candidates. Automated QA is green, latest-main Pages deployment is green, and no late executable modification is justified by current evidence.

Freeze runtime, control geometry, reel sizing, audio timing, and submission paths. Any later executable change must receive fresh browser QA and must not inherit this lock automatically.
