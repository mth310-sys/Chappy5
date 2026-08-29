# Dual Prototype Final QA — 2026-08-29

Status: `SUBMISSION_CANDIDATE_LOCKED / AUTOMATED_QA_PASSED / HUMAN_GATE_2_OPEN`
Delivery target: 2026-08-29 12:00 JST

Playtest & QA Director re-fetched latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype shells, `playtest/submission-readiness.spec.js`, recent commits, and Sound & Experience Run 9 before this final record.

SIGNAL / FORGE / VAULT were not changed.

## Final source-of-truth and freeze

Latest main before this QA record: `d420dbdba5cd240feaa6f5d127595e1568402635` (`Record Sound Run 9 submission audio freeze`).

The release-candidate executable/test baseline remains `3ba2795ebf52a7dd2c19c7462d9ff5157c25c25f` (`Harden final prototype submission readiness checks`). Commits after that baseline through Sound Run 9 are submission/freeze handoff documentation; no concrete executable regression was identified that justifies changing the frozen runtime immediately before delivery.

Generic Autonomous Playtest run `33227258293` completed successfully against `3ba2795e`. This is the last required executable/test QA baseline and includes the generic iPhone interaction check, dual-prototype repeated-play QA, and submission-readiness QA.

The latest Pages build/deployment for pre-final-record main `d420dbd` is run `33229311166` and completed successfully.

## Submission paths

- 刻ノ一閃: `https://mth310-sys.github.io/Chappy5/prototypes/toki-no-issen/play.html`
- ノクターン・アクアリウム: `https://mth310-sys.github.io/Chappy5/prototypes/nocturne-aquarium/play.html`

These integrated `play.html` shells are the submission candidates. Do not substitute the standalone `index.html` files for the final comparison.

## Automated QA contract now green

The frozen submission-readiness test verifies at iPhone-class width:

- no horizontal overflow
- BET / LEVER / STOP1 / STOP2 / STOP3 are at least 44px high and inside the no-scroll play surface
- all three physical reels remain present, substantial, and unclipped
- a real cabinet gesture attempts Web Audio startup
- Safari-style resume does not enter `resume-failed`
- a later cabinet gesture after background/recovery preserves an attempted audio state

Repeated-play QA remains the evidence for continuous BET → LEVER → STOP×3 operation, stop-order variation, invalid/repeated input handling, geometry stability, reload/recovery, and the 30G/50G endurance targets.

## 刻ノ一閃 final QA judgement

Submission core is locked as:

`BET → LEVER → SPIN → STOP1 → STOP2 → STOP3 → slash / sword-action resolution → NEXT BET`

The integrated shell still imports `audio-timeline.js`; STOP input and `slash(stopNo,i)` remain on the same pointer-event path. Three physical reels and fixed touch-safe controls remain in the shell. The Sound Run 9 timing lock remains: physical STOP first, sword transient immediately after, then a short semantic pause before resolution.

Automated submission status: `PASS / SUBMISSION_CANDIDATE_LOCKED`.

Human-only judgement still required: actual handheld STOP-to-slash satisfaction, 30G fatigue/excitement, material presence, physical Safari/device audio feel.

## ノクターン・アクアリウム final QA judgement

Submission core is locked as:

`BET → LEVER → SPIN → first STOP selects observation layer → STOP2/STOP3 collect reel evidence → MEMORY / DEPTH world response → NEXT BET`

The aquarium presentation remains distinct from 刻ノ一閃 while three physical reels stay foreground-playable. The stable published shell retains separate `mechBus`, `observeBus`, and `memoryBus`; optional `audio-routing.js` remains outside the published shell for this submission. Reel play therefore remains the trigger for observation/memory rather than becoming decoration beneath the aquarium scene.

Automated submission status: `PASS / SUBMISSION_CANDIDATE_LOCKED`.

Human-only judgement still required: whether the aquarium steals too much gaze from reels, MEMORY/DEPTH emotional contrast, 50G subjective fatigue, real listening balance.

## Known limitations / completion boundary

This final QA record does **not** claim machine completion. The following remain human/unverified:

- `REALITY_PRESENCE_VERIFIED`
- `AUDIO_VERIFIED` on a physical iPhone / Bluetooth path
- subjective 30–50G fatigue and repeat desire
- actual handheld cabinet attraction/material impression
- `HUMAN_MACHINE_VERIFIED`

Human Gate 2 therefore remains open. Both machines are locked only as browser Prototype submission candidates.

## Final QA decision

No late executable change is justified by current evidence. Preserve the frozen runtime and QA thresholds. If a later commit changes prototype runtime, audio timing, control geometry, reel sizing, or tests, it must not inherit this PASS without fresh browser QA.

Final status for 12:00 JST submission: **both Prototype integrated shells are submission candidates; automated QA is green; Human Gate 2 remains open.**
