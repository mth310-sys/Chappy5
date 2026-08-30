# Dual Prototype Playtest & QA Director Handoff — Run 5

Date: 2026-08-29 JST
Status: `QA_RUN5_SUBMISSION_READINESS_CHECKS_ADDED`

## Source of truth
This run re-read latest main, README, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated `play.html` shells, existing repeated-play QA, recent commits, and `docs/PROTOTYPE_SOUND_HANDOFF_RUN5.md` before writing.

SIGNAL / FORGE / VAULT were not changed.

## Current evidence
The last completed Generic Autonomous Playtest re-read in this run is run `33216166876` at commit `ec9436c`, conclusion `success`. That proves the then-current integrated prototypes cleared the existing WebKit iPhone smoke plus repeated-play QA. It does not by itself verify Sound Run 5 modules because those were committed later.

Sound Run 5 explicitly states that `audio-timeline.js` and `audio-routing.js` are executable profiles but are not yet imported by the deployed integrated `play.html` shells. Inspection of current main confirms the published shells still contain their existing inline Web Audio graphs and do not reference the new profile filenames. Therefore do not claim the new Toki spin-bed timeline or Nocturne five-route profile is audible in the submitted build yet.

## QA added in this run
Added `playtest/submission-readiness.spec.js` and wired it into `.github/workflows/generic-playtest.yml`.

For both prototypes it now verifies on the iPhone WebKit project:
- integrated shell and inner prototype do not horizontally overflow the viewport;
- BET / LEVER / STOP1 / STOP2 / STOP3 each retain at least 44px touch height;
- all major controls remain inside the initial visible viewport without vertical page scrolling;
- a real BET/LEVER user gesture moves top-shell audio state away from `not-started` and does not enter `resume-failed`;
- Sound Run 5 profile files exist;
- evidence JSON records whether each Sound Run 5 profile is actually referenced by the deployed shell.

The profile-integration item is recorded as evidence rather than made a hard failure because Sound Run 5 intentionally left integration pending. Machine/Sound must close that before claiming those new audio behaviors are part of the release candidate.

Existing `dual-prototype-qa.spec.js` remains unchanged and still covers 30G Toki / 50G Nocturne repeated play, all six STOP orders, stray BET during spin, idle STOP spam, geometry drift, 44px controls, DOM growth, page errors/crashes, technical audio startup state, reload and post-reload replay.

## Current run state
A fresh Generic Autonomous Playtest was triggered by the new QA commit (`33218416513`) and was still `in_progress` when recorded. Do not claim Run 5 browser PASS until a completed result is observed. The workflow update commit also triggers a subsequent run; downstream Machine should prefer the newest completed run on latest main.

## Human-only checks still open
Automation cannot verify:
- whether Toki STOP -> slash -> resolution is actually satisfying by ear/hand/eye;
- whether Nocturne keeps the player's eyes returning to the physical reels while the aquarium attracts attention;
- real iPhone Safari hardware audio, lock/background return and Bluetooth latency;
- subjective boredom/fatigue/confusion over 30–50G.

These remain `HUMAN_UNVERIFIED` / `AUDIO_UNVERIFIED` / `REALITY_UNVERIFIED` until a physical-device human pass.

## Next Machine handoff
1. Read the newest completed Generic Autonomous Playtest on latest main before changing either prototype.
2. If submission-readiness fails, treat clipping/control/audio-start failure as the immediate blocker.
3. If it passes, the clearest remaining integration debt is Sound Run 5 profile wiring. Integrate only if it does not duplicate the existing inline graph or destabilize Toki WebKit long-play.
4. Preserve the currently stable Toki lightweight rendering path and Nocturne 50G baseline.
5. Do not infer Human Gate 2 completion from CI.

SIGNAL / FORGE / VAULT remain untouched.
