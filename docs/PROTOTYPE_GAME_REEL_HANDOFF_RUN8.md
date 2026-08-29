# Prototype Game & Reel Director Handoff — Run 8

Date: 2026-08-29 JST
Status: SUBMISSION_STABILIZATION
Delivery target: 2026-08-29 12:00 JST

## Source of truth re-read

Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype shells, current Game/Reel helpers, and Machine Director Run 8 handoff were re-read before changes.

SIGNAL / FORGE / VAULT were not changed.

## Machine Run 8 constraint carried forward

Both prototypes are submission candidates. Fixed control geometry, visible three-reel prominence, Toki STOP→slash→resolve causality, Nocturne reel→observation→memory causality, and the existing stable audio/integration architecture remain locked. This pass does not add HUD height, payout systems, heavy effects, or architecture rewrites.

## 刻ノ一閃 — Run 8 change

`prototypes/toki-no-issen/game-reel-run7.js` remains prototype-only and continues to be imported by the published Toki audio timeline.

Repeated-play stance selection was refined without changing reel outcomes or timing:

- least-used first-stop selection now avoids immediately recommending the same first reel when multiple candidates are tied;
- repeated three-chain patterns still request a deliberate stance break;
- repeated first-stop patterns still request a different first stop;
- three distinct first-stop origins still return to free reel-reading;
- four recent chains containing at least three different chain types now produce `flowing`, meaning the machine stops over-directing the player and returns initiative to the stopped symbols.

New `flowing` cabinet state uses only the existing blade bridge/spines. No new HUD or compositor-heavy effect was added.

Intent: over 10–30G, guidance should react to repetition but disappear when the player's reel outcomes are already varying, so NEXT BET feels like another sword exchange rather than a tutorial loop.

## ノクターン・アクアリウム — Run 8 change

`prototypes/nocturne-aquarium/game-reel-run7.js` now tracks not only observation visits but unique resolved reel-evidence signatures per observation layer.

- each layer keeps a bounded semantic evidence set derived from its resolved chain + three stopped center symbols;
- the recommended next layer prioritizes the layer with the least evidence coverage, using visit count only as a tie-breaker;
- same evidence three times still requests a layer shift;
- same layer three times still requests another depth;
- when both visits and evidence coverage are balanced, the recommendation becomes `出目優先で選ぶ` instead of forcing rotation;
- snapshot now exposes `evidenceCounts`, and the optional visual bridge exposes it as `data-evidence-coverage` for downstream visual integration.

No MEMORY probability, payout, reel control or DEPTH threshold changed. All values/behavior remain prototype-only.

Important submission note: Machine Run 8 explicitly locked Nocturne's stable published shell against late architecture integration. This helper is therefore improved and ready for the next safe visual/integration pass, but this Run does not force a new module import into `play.html` before final QA.

## Next Visual & Mechanism Director

Treat both machines as submission candidates.

- Toki: if touching visuals, use the existing blade bridge/spines only to distinguish `flowing` from forced stance-change states; do not add height or heavy compositing.
- Nocturne: if the final browser evidence remains green and integration is judged safe, surface `evidenceCounts/nextObservation` only through the existing three circular worldports/glass path. Do not add an explanatory panel or push reels/controls downward.
- If any fresh WebKit/390px regression appears, revert to the last green submission behavior rather than preserving this pass at all costs.

Human Gate 2 remains closed. Automated success does not equal `HUMAN_MACHINE_VERIFIED`.
