# Nocturne Aquarium — Playtest & QA Product Run 4 Handoff

Date: 2026-08-30
Role: Playtest & QA Director
Target: `prototypes/nocturne-aquarium/play-stage-v2.html`

## Authoritative baseline

Work began from latest `main` at `3d640b0ca270c452f0f6a660ed337befc7a5691d` after re-reading README, production workflow, Reality Presentation Standard, productization master, current Nocturne code and Product Run 5 Game/Reel handoff.

## QA finding and concrete fix

Game/Reel Product Run 5 introduced `pachi-stop-read` so Visual / Sound / QA can react to STOP information as quiet/weak/medium/strong. Static integration review found a semantic defect: `lastStopBand` was assigned to the current STOP before `previousBand` was emitted. Therefore `previousBand` always equaled the current band and could not represent STOP1→STOP2→STOP3 escalation.

Fixed on `main` in commit `200064762d715da529cb9f0dfd0e0f436ab6b187`: capture `previousBand` first, then update `lastStopBand`, then relay the event.

## Regression coverage added

Added `playtest/nocturne-stop-semantics.spec.js` in `9cb4682f79196d1346aadd428db126dd8c28ecdb` and wired it into the WebKit iPhone CI in `46f90a12acc51a16f538b32edd2f9f8f7d8a75cb`.

The regression sends deterministic QA-only canonical `reel-role` evidence and requires this exact semantic chain:

- STOP1: quiet, previous quiet
- STOP2: strong, previous quiet
- STOP3: weak, previous strong

It also requires the final machine datasets to report STOP3/weak and checks JS errors and WebKit crash signals. This supplements the existing integrated Nocturne product QA, which already covers 390px, six stop orders, 36G continuous play, rapid/mistaken taps, BET during spin, idle STOP, reload, 44px touch geometry, overflow, DOM/animation growth, event path through BONUS/AT/normal return, explanatory-prose suppression and observed pachislot presentation text.

## Shared player-facing text rule — MUST CONTINUE

Do not confuse explanatory prose with pachislot presentation text.

Remove/flag tutorial, debug and system-explanation prose such as player-facing descriptions of internal state or instructions like choosing a stage with a STOP button.

Keep and use normal pachislot presentation/information where appropriate: `CHANCE`, `BONUS`, `WIN`, `GET/TOTAL ○○枚`, `残り○G`, `+○G`, CZ/AT names, continuation/end and result displays. These are part of the performance language, not forbidden text.

Play should primarily communicate through reel evidence + LCD motion + sound + cabinet light/mechanism, with the above pachislot text punctuating outcomes and states. No exploration/menu gameplay.

## Current verification state

- Pages for the pre-QA handoff baseline `3d640b0` completed successfully.
- Fresh Generic Autonomous Playtest for `46f90a12...` is running as Actions run `33311300487` at handoff time. It includes the new STOP semantic regression step.
- Therefore Product QA PASS is **not yet declared** for this run.
- Reality PASS: **NOT DECLARED** — requires real browser/human perceptual evidence beyond CI.
- Audio PASS: **NOT DECLARED** — CI event/gesture coverage is not final human audibility/quality evidence.
- Human PASS: **NOT DECLARED**.

## Machine Director next action

Treat the STOP semantic bridge as a contract for presentation escalation: Visual and Sound should be able to distinguish what the player knew before a STOP from what the current STOP newly revealed. Do not let a strong current STOP retroactively appear to have been strong before it occurred.

Continue judging Nocturne as pachislot, not merely as a stable or beautiful browser machine: normal rhythm → omen → reel/role response → anticipation carry → chance-up → development/confrontation → judgment → hit/miss → BONUS/AT → continuation/return. Preserve payoff contrast and reel causality.

SIGNAL / FORGE / VAULT were not modified. Toki no Issen was not modified.
