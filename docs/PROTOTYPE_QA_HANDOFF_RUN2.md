# Prototype Playtest & QA Handoff — Run 2

Status: `QA_RUN2_FIX_APPLIED_RETEST_IN_PROGRESS`

Source of truth re-read before work: latest `main`, `README.md`, production workflow, reality standard, dual prototype status, both canonical prototype wrappers, current repeated-play test, and Sound & Experience Run 2 handoff.

## Evidence from latest completed WebKit run

The generic iPhone interaction smoke passed, but the dedicated dual-prototype repeated-play test failed both machines while Playwright waited for `#bet` to become stable before the next round.

This narrowed the blocker from general touch failure to post-resolution layout movement. The current Game & Reel / Visual integration inserts a progress instrument between the reel deck and the physical controls. That instrument changed between one-line and two-line states during result/NEXT BET transitions, which could move the operation deck vertically while WebKit was preparing the next tap.

## Fix applied

### 刻ノ一閃
- Canonical `prototypes/toki-no-issen/play.html` updated.
- `gr-tempo` is now a fixed-height 46px instrument with overflow contained.
- Existing fixed button geometry, 46px minimum BET target, STOP choreography, result cadence, and audio behavior remain intact.
- Commit: `f7d176c`.

### ノクターン・アクアリウム
- Canonical `prototypes/nocturne-aquarium/play.html` updated.
- `gr-observe` is now a fixed-height 46px instrument with overflow contained.
- Existing aquarium sonar/observation responses, reel foreground, 46px minimum BET target, and quiet baseline remain intact.
- Commit: `e423546`.

## Verification state

A fresh Generic Autonomous Playtest / WebKit iPhone repeated-play run was triggered from the corrected main and is still in progress at this handoff. Do not claim automated PASS until that run completes.

Still HUMAN_UNVERIFIED regardless of CI:
- 刻ノ一閃: whether STOP1 → STOP2 → STOP3 → result feels physically satisfying rather than merely readable.
- ノクターン: whether the aquarium LCD/scene attracts attention without making the physical reels feel secondary.
- Real iPhone speaker balance, intentional quiet vs technical mute, Safari background/resume behavior on hardware, and Bluetooth latency perception.
- 30–50G fatigue/interest on an actual device.

## Next Machine Director priority

1. Re-read the newest completed WebKit run before adding content.
2. If repeated-play passes, keep control geometry frozen and prioritize human-visible attraction/feel rather than more systems.
3. If it still fails, inspect the exact next unstable target and eliminate product-side layout motion before weakening the test.
4. Keep Sound Run 2 candidate wrappers unverified until canonical integration choice is made after QA.

SIGNAL / FORGE / VAULT were not changed. Human Gate 2 remains closed.
