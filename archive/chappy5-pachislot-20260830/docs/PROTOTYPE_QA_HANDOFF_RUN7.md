# Prototype Playtest & QA Director Handoff — Run 7

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON
Delivery target: 2026-08-29 12:00 JST

## Source of truth re-read
Latest main, README, production workflow, Reality Standard, Dual Prototype Status, both integrated prototype shells, Sound & Experience Run 7 handoff, current QA, and recent commits were re-read before changes. SIGNAL / FORGE / VAULT were not changed.

## QA decision
The submission-readiness test now protects the physical three-reel play surface in addition to touch geometry and horizontal overflow. This specifically guards Nocturne against the aquarium world visually/layout-wise consuming reel play, and guards Toki against presentation changes collapsing the reel deck.

Added assertions on the integrated iPhone/WebKit surface:
- exactly three physical `.reel` elements remain present;
- every reel remains at least 44px wide and 60px high;
- every reel remains inside the no-scroll viewport with no left/right/top/bottom clipping;
- the integrated BET geometry is allowed to finish its shell handoff before measurement, preserving the existing >=44px requirement rather than racing the base page;
- Toki public shell must reference `audio-timeline.js` and STOP input must retain the same-event `slash(stopNo,i)` path;
- Toki must retain technical `audioTech` state tracking, distinct from intentional semantic silence;
- Nocturne stable public shell must retain separate `mechBus`, `observeBus`, and `memoryBus` responsibilities;
- evidence wording was updated so the intentionally non-integrated Nocturne `audio-routing.js` is not falsely claimed audible.

## Sound Run 7 interpretation
Toki Run 7 timing is active in the public shell because `play.html` imports `audio-timeline.js`. Nocturne Run 7 routing helper remains intentionally not imported; its stable inline audio remains the submission baseline. Do not convert Nocturne to the new module solely to make the profile appear integrated before submission.

## Verification state
GitHub Pages deployment for Sound Run 7 head `af738f8` completed successfully. The new QA commits require their own Generic Autonomous Playtest before claiming Run 7 browser PASS. Human hardware checks remain required for actual iPhone speaker balance, Bluetooth latency, STOP feel, aquarium-vs-reel attention, and 30–50G fatigue.

## Next Machine Director
First inspect the Generic Autonomous Playtest produced by the latest QA main. If it passes, treat reel visibility/touch/audio contracts as submission locks and avoid feature expansion. If it fails, fix the exact measured geometry/audio contract regression before any new presentation work. Human Gate 2 remains closed.
