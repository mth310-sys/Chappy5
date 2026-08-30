# Nocturne Sound & Experience Director Handoff — Product Run 4

Date: 2026-08-30
Status: `AUDIO_PRODUCT_RUN4_AUTHORED / CANONICAL_LOAD_PENDING / HUMAN_BROWSER_LISTEN_REQUIRED`

Latest `main`, README, `PACHISLOT_PRODUCTION_WORKFLOW`, `REALITY_PRESENTATION_STANDARD`, current Nocturne product code, Game & Reel Product Run 4 and Visual & Mechanism Product Run 4 were re-read before work.

## Human shared text rule — MUST CONTINUE
Tutorial/debug/system-explanation prose should be removed or minimized. Ordinary pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET枚数`, `残りG`, `+G`, continuation/end, CZ/AT names and result displays is intentional and should receive matching visual/audio punctuation.

## Concrete main changes
- `d2ef76b` integrates `visual-product-run4.js` into canonical `play-stage-v2.html`, so the Run 4 LCD/cabinet cadence is no longer authoring-only.
- `c53625a` adds `prototypes/nocturne-aquarium/sound-product-run4.js` for the new Run 4 Game Events rather than flattening them into the older generic intensity path.
- New bounded reusable cues cover `reel-nudge`, `anticipation-carry`, `strong-omen`, `judgment`, and `win`.
- The intended cadence is: tiny reel/glass nudge → low carried resonance → deep omen/drop → short judgment pressure → delayed win seal/release. This sits above the existing BET/LEVER/STOP, CHANCE/develop/resolve, payout, BONUS 76 BPM, OCEAN RECORD 90 BPM and normal-return sound path.
- The Run 4 companion uses one persistent AudioContext, five reusable AudioBuffers, one gain bus, one-shot disconnect cleanup, no requestAnimationFrame and no continuous audio scheduler. It boots/resumes only from actual machine-button `pointerdown` and suspends when hidden.

## Important integration boundary
`visual-product-run4.js` is now loaded by `play-stage-v2.html`, but `sound-product-run4.js` is authored on main and is **not yet included by the canonical page** in this run. Do not claim the Run 4 cues are audible in canonical play until the next integration/QA step adds the script include and fresh WebKit evidence confirms activation. The existing `play-sound.html` Run 3 path remains active and unchanged, so current canonical audio is not broken by this pending companion.

## Verification state
No Audio / Reality / Human PASS is claimed. `AUDIO_FINAL_UNVERIFIED / REALITY_UNVERIFIED / HUMAN_UNVERIFIED` remain. After canonical load, verify actual first-gesture activation, no duplicate/stacked punctuation with Run 3 audio, STOP physicality during deep omen/judgment, silence-to-WIN release, BONUS/AT loop cleanup, and repeated-play AudioNode stability.

SIGNAL / FORGE / VAULT were not modified.
