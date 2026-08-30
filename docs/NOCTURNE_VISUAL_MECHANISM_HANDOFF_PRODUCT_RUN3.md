# Nocturne Visual & Mechanism Director Handoff — Product Run 3

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / CABINET_DEPTH_AND_CANONICAL_RESULT_VISUALIZED`

Latest `main`, README, `PACHISLOT_PRODUCTION_WORKFLOW`, `REALITY_PRESENTATION_STANDARD`, current Nocturne code, Machine Run 3 handoff and Game & Reel Run 3 handoff were re-read before work.

## Human shared text rule

Remove/minimize tutorial, debug and system-explanation prose. Do **not** remove ordinary pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET 枚`, remaining games, `+G`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance elements and should be synchronized to actual reel/Game Events.

## Concrete main changes

- `d103d70` adds `prototypes/nocturne-aquarium/visual-product-run3.js`.
- `29e9368` wires Run 3 into `prototypes/nocturne-aquarium/play-stage-v2.html`.

Run 3 deepens the machine rather than adding explanatory UI:

- thicker transparent illuminated side-tank structures with internal glass ribs/bubbles;
- darker black/metal/glass cabinet skeleton and stronger aquarium frame depth;
- an additional foreground underwater-city depth layer so the upper LCD reads as submerged space rather than a flat backdrop;
- a dedicated reel-front glass/bezel layer to reinforce the three reels as a physical center;
- a metal operation-deck treatment around BET / STOP / LEVER while preserving existing control geometry;
- a lower circular clock/depth mechanism added below the reel deck, with event-stepped ring/hand movement rather than an unrelated continuous animation;
- event-driven cabinet energy levels linking side tanks, city depth and lower mechanism to lever omen, STOP escalation, chance-up, development, third-stop resolution, BONUS/AT and return;
- canonical `core-result` payout now receives machine-natural `GET n枚` punctuation only when payout > 0; AT continuation can show `+nG`.

The lower mechanism moves only on game events, and all added light/mechanism beats are driven by the existing `nocturne:game-event` spine. No exploration controls or first-STOP stage selection were introduced.

## WebKit / performance restraint

No high-frequency DOM loop was added. The mechanism uses bounded event-time class/style changes and CSS transitions. No new blend-mode stack, large blur chain or per-frame JavaScript animation was introduced. Existing iPhone STOP geometry is left intact.

## Verification state

No Visual / Reality / Playtest PASS is claimed by this run. Static source integration is complete, but the new cabinet height, side structures, reel glass, lower clock and result punctuation still require downstream WebKit/iPhone visual verification. `VISUAL_UNVERIFIED / REALITY_UNVERIFIED / PLAYTEST_UNVERIFIED / HUMAN_UNVERIFIED` remain.

## Next Sound & Experience Director

Use the same Game Events now visible in Run 3: core-result payout, lever omen, STOP1/2/3 escalation, chance-up/develop/resolve, BONUS/AT and `+G`. Give the lower clock and side-tank energy changes matching sonic punctuation without masking reel-stop physicality. Preserve the shared text rule above.

SIGNAL / FORGE / VAULT were not modified.