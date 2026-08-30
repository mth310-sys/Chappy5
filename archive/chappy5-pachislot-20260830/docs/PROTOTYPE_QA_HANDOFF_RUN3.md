# Dual Prototype Playtest & QA Handoff — Run 3

Date: 2026-08-29 JST
Status: `QA_RUN3_AUTOMATION_UPDATED_PENDING_CI`

## Source of truth re-read

Re-read latest main, README, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype `play.html` files, current QA spec, recent commits, Sound Run 3 handoff lineage, and latest completed Generic Autonomous Playtest evidence.

SIGNAL / FORGE / VAULT were not changed.

## Evidence from latest completed WebKit run

Workflow run 33208937667 at Nocturne Sound Run 3 failed only the dual repeated-play QA; generic iPhone interaction smoke passed.

Both failures occurred on a later-round middle STOP while Playwright `locator.tap()` was waiting for the element to be `visible, enabled and stable`:

- 刻ノ一閃: round 4, middle STOP.
- ノクターン・アクアリウム: round 5, middle STOP.

The uploaded QA history is important: between completed rounds the physical control geometry was stationary to the recorded tenth-pixel values.

- Toki: BET x37/y466/64x46, STOPs y462/54px high, LEVER x289/y465.5/64x47 across recorded rounds.
- Nocturne: BET x39/y475/64x46, STOPs y471/54px high, LEVER x287/y474.5/64x47 across recorded rounds.

This makes the old failure insufficient evidence of a real moving control deck. The prototypes deliberately animate surrounding reel/cabinet presentation, while Playwright locator actionability applies its own visual-stability gate before generating a touch.

## QA correction committed

`playtest/dual-prototype-qa.spec.js` now separates two responsibilities:

1. Explicitly sample button bounding boxes twice before every touch and fail if control geometry drifts more than 0.75px.
2. Once geometry and enabled state are verified, issue a real Playwright touchscreen coordinate tap at the button center instead of relying on `locator.tap()`'s unrelated presentation-stability heuristic.

The test is also expanded from 8 rounds to:

- 刻ノ一閃: 30G continuous play.
- ノクターン・アクアリウム: 50G continuous play.

It cycles all six STOP orders, injects a stray/early BET-area touch during spin, performs rapid idle STOP misuse touches, checks page errors, verifies 44px minimum touch height and horizontal clipping, reloads, then completes another full round after recovery.

Commit: `f297fca` — Make dual prototype QA use real touch coordinates and long-play cycles.

## Interpretation rule for next Machine Director

Do not call the previous `locator.tap()` timeout a product defect unless the new explicit geometry sampling or coordinate-touch run reproduces an actual failure.

If Run 3 CI passes, automated evidence supports: stationary controls, 30G Toki repetition, 50G Nocturne repetition, STOP-order variation, basic misuse resilience, reload recovery and iPhone-width touch geometry. It still does NOT verify subjective STOP pleasure, visual attraction, real iPhone Safari audio output/resume, Bluetooth latency, fatigue, or whether Nocturne's LCD steals too much attention from reels.

If Run 3 CI fails, use the new failure JSON as the blocker evidence and fix the exact state/geometry defect before adding content.

Human Gate 2 remains closed. `REALITY_UNVERIFIED`, real-device `AUDIO_UNVERIFIED`, and subjective long-play feel remain until human/device verification.
