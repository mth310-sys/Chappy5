# Dual Prototype — Game & Reel Director Run 2 Handoff

Date: 2026-08-29 JST
Status: `GAME_REEL_RUN2_APPLIED_UNVERIFIED`

Latest main was re-read before work. This pass deliberately avoided adding new payout systems or final probability claims. All temporary reel semantics remain prototype-only. SIGNAL / FORGE / VAULT were not changed. Human Gate 2 remains closed.

## Primary decision

The largest Game/Reel issue after Machine Run 1 was not missing content; it was repeated-play readability. Both machines already had meaningful first-stop logic, but the player could still lose track of what information each successive STOP had added and when the round had cleanly returned to the next BET.

This pass therefore adds a compact cadence/evidence layer to the integrated `play.html` builds while preserving the Machine Director rule that the physical operation deck itself never translates under the finger.

## 刻ノ一閃

Changed `prototypes/toki-no-issen/play.html`.

- Adds a compact cadence rail: `構え → 壱 → 弐 → 参 → 決`.
- BET clears the previous evidence; LEVER explicitly returns the player to reading the enemy opening.
- Each STOP records and surfaces the stopped reel's center symbol in STOP order, so the player can see how the three cuts accumulate rather than only reading the final message.
- First STOP reports whether the enemy opening was read correctly by checking the reel's existing `read` state.
- STOP2 explicitly hands attention to the next cut rather than collapsing into generic feedback.
- STOP3 exposes that the three-cut evidence is complete before the existing result message resolves.
- The final result is held briefly, then the rail changes to `NEXT BET`, creating a clear end-of-round cadence without auto-starting another game.
- Existing STOP audio timing, fixed control geometry and original resolution logic remain intact.

Intent for Visual: treat the rail as a restrained physical/instrument readout, not a large HUD. The physical reels and opening cue must remain visually dominant.

## ノクターン・アクアリウム

Changed `prototypes/nocturne-aquarium/play.html`.

- Adds a compact observation rail: `観測待機 → 選択 → 採取 → 照合 → 記憶`.
- First STOP now immediately records the selected observation layer (`広場 / 塔 / 記録庫`) in the repeated-play readout.
- Every STOP captures the stopped center symbol in actual stop order and displays the accumulating observation evidence.
- STOP3 explicitly exposes `selected observation layer × stopped symbols` before the existing memory resolver reports the event.
- Memory / DEPTH messages remain sourced from the existing game logic; this pass does not create a parallel memory lottery.
- After the result is readable, the rail returns to `NEXT BET`, preserving quiet cadence and making a roughly 50G observation session easier to follow.
- Existing aquarium-world selection highlighting, reel semantics, fixed control geometry and Web Audio structure remain intact.

Intent for Visual: integrate the observation rail into the lower observation-instrument language. Do not let it become a detached mobile-game quest HUD.

## Verification

The Generic Autonomous Playtest triggered for the latest Nocturne commit was still `in_progress` when this handoff was written. Therefore no automated PASS is claimed here. The next Director must re-read current Actions evidence from latest main.

Human feel remains unverified, especially:
- whether 刻ノ一閃's evidence rail makes 10–30G more satisfying rather than overly explanatory;
- whether Nocturne's rail helps reel attention without stealing attention from the aquarium world;
- whether the short final-result hold before `NEXT BET` feels crisp on a real iPhone.

## Next Visual & Mechanism focus

1. Re-read latest main and CI before changing presentation.
2. Keep both control decks geometrically stationary.
3. Style the new cadence/evidence readouts as machine-integrated instrumentation.
4. If either readout visually competes with the physical reels, reduce it rather than enlarging other UI.
5. Preserve the machines' distinct identities: sword cadence vs observation instrumentation.
