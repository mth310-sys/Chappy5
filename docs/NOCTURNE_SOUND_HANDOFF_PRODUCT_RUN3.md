# Nocturne Sound & Experience Director Handoff — Product Run 3

Date: 2026-08-30
Status: `AUDIO_PRODUCT_RUN3_IMPLEMENTED / HUMAN_BROWSER_LISTEN_REQUIRED`

Latest `main`, README, `PACHISLOT_PRODUCTION_WORKFLOW`, `REALITY_PRESENTATION_STANDARD`, `NOCTURNE_PRODUCTIZATION_MASTER`, current Nocturne product code and Visual Run 3 handoff were re-read before work.

## Human shared text rule
Tutorial/debug/system-explanation prose should be removed or minimized. Ordinary pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET枚数`, `残りG`, `+G`, continuation/end, CZ/AT names and result displays is intentional and should receive matching visual/audio punctuation.

## Concrete main change
- `d97ac96` deepens `prototypes/nocturne-aquarium/play-sound.html` for current Run 3 Game Events.
- Preserved actual-button `pointerdown` AudioContext boot/resume for iPhone Safari.
- Preserved separate physical FX and underwater-world buses, single state-BGM source, reusable buffers and one-shot disconnect cleanup.
- Added a reusable mechanical/depth-clock cue. Lever rise/omen, CHANCE, development, STOP3 resolution, hit, AT entry and continuation now give the lower clock/side-tank energy changes matching sonic punctuation without masking STOP physicality.
- Added payout/GET punctuation derived from canonical event payout, with a stronger second count accent for larger payout values.
- Kept normal submerged 43 Hz bed, 76 BPM BONUS loop and distinct 90 BPM OCEAN RECORD loop; mode transitions still stop/fade the previous loop before starting another.
- Strengthened silence/tension/release: omen/development/judgment duck only the world bus while BET/LEVER/STOP remain present; hit uses a deeper dropout before release.

## Boundaries
No SIGNAL / FORGE / VAULT files modified. No payout/spec value was promoted to verified product specification. No high-frequency scheduler or continuous per-frame audio work was added.

## Verification state
`AUDIO_FINAL_UNVERIFIED / REALITY_UNVERIFIED / HUMAN_UNVERIFIED` remain. This run requires downstream real WebKit/iPhone-width listening. Specifically verify first-gesture activation, STOP clarity under ducking, clock cue audibility without clutter, payout punctuation timing, BONUS/AT loop non-stacking, return-to-normal cleanup, and absence of runaway AudioNodes/JS errors.

## Next QA
Treat ordinary pachislot result text as wanted presentation, not explanatory prose. Judge whether sound makes the same reel/LCD/light events feel like one pachislot event and whether quiet normal play still leaves enough contrast for CHANCE/development/hit/BONUS/AT.