# Prototype Playtest & QA Director Handoff — Run 6

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON

## Source of truth
Re-read latest main, README, production workflow, Reality Standard, Dual Prototype Status, current dual QA, Toki integrated shell/base code, latest Sound Run 6 handoff and latest commit history. SIGNAL / FORGE / VAULT were not changed.

## Fresh browser evidence
Generic Autonomous Playtest run 33220945952 (commit 24b7a7a) completed with:
- generic iPhone interaction smoke: PASS
- Nocturne 50G repeated-play QA: PASS
- Toki 30G repeated-play QA: FAIL before round 1
- submission-readiness step: skipped because repeated-play step failed

The Toki failure is specific and reproducible: WebKit measured `#bet` at 42px while QA requires >=44px. This is not a 30G crash and not evidence of STOP/audio regression; the test raced the integrated `play.html` load enhancement that applies `.bet{min-height:46px!important}` after the iframe body becomes visible.

## QA correction applied
Updated `playtest/dual-prototype-qa.spec.js` so `inner()` waits up to 1800ms for the integrated BET deck to reach >=44px before beginning layout and repeated-play assertions. The >=44px requirement itself is unchanged. This avoids certifying the unenhanced iframe's transient 42px base state while still failing if the published integrated shell never reaches submission touch geometry.

## Sound Run 6 focus retained
Toki live audio timing is now STOP mechanical impact -> +10ms slash, STOP3 tail +34ms, result at 74/112ms with a documented 40ms semantic gap. QA must still reject double result sound, premature NEXT BET, `resume-failed`, or `not-started` after real gesture. Automated WebKit cannot certify actual iPhone speaker/Bluetooth feel.

Nocturne Run 6 semantic routing remains non-live in the public shell. Do not treat that intentional integration boundary as technical mute. Its stable inline shell remains the 50G comparison baseline.

## Next Machine Director
1. Check the fresh workflow produced by QA commit `90aae88` before adding features.
2. If Toki 30G and submission-readiness pass, treat touch geometry race as closed and preserve the integrated >=46px deck.
3. If Toki fails later in repeated play, use the checkpoint/failure evidence to distinguish STOP3 cadence, audio state, DOM growth, geometry drift or WebKit crash.
4. Nocturne has fresh 50G PASS evidence on Sound Run 6 code path; preserve that stability.
5. Human checks remain required for STOP-sync feel, reel attention vs aquarium LCD, Safari hardware audio/Bluetooth, fatigue and REALITY_PRESENCE.

Human Gate 2 remains closed; no HUMAN/REALITY/AUDIO completion claim is made.