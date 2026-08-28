# Prototype Visual & Mechanism Director Handoff — Run 6

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON

## Source of truth re-read

Re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both current integrated prototype shells, current Game/Reel Run 6 modules and the latest commit history before changing code.

SIGNAL / FORGE / VAULT were not changed.

## Visual bottleneck selected

Do not spend the submission window on more decorative layers. The strongest remaining visual/mechanism gain is to make Game & Reel Run 6 meaning travel through the existing physical surfaces:

- 刻ノ一閃: STOP1/2/3 should progressively close one sword exchange and the three-stop chain should change the blade/frame residue without reintroducing the WebKit-heavy compositing removed earlier.
- ノクターン・アクアリウム: stopped reel evidence should be capable of travelling into the selected circular observation window and perceived tank depth instead of becoming another text panel.

## 刻ノ一閃 — live cadence-driven cabinet response

Updated `prototypes/toki-no-issen/game-reel-run6.js`, which is already imported by the published Sound timeline.

New presentation-only visual tokens:

- `gameCadence=opening` gives the first STOP a compact blade-boundary response.
- `gameCadence=linking` increases the relation between the second cut and the existing blade bridge.
- `gameCadence=resolve-ready` closes the frame/bridge composition before the existing result release.
- `cutChain` is mapped to a low-cost `vmChain` token: `finisher / triple / locked / rising / layered / flow`.
- three-game first-stop memory is mapped to `vmStance=habit / circuit / change`.

The CSS uses opacity and box-shadow on existing `screenFrame`, `bladeBridge` and `spine` surfaces. No new continuous animation, blur-heavy layer, perspective stack or `mix-blend-mode` path was added.

This is presentation only; reel result, payout, probability and reward logic remain unchanged.

## ノクターン・アクアリウム — reel-to-world visual bridge profile

Updated `prototypes/nocturne-aquarium/game-reel-run6.js` with an explicit Visual bridge API:

- `nocturneVisualState(layerName, symbols)` converts the existing layer-dependent reel evidence into `trace / sample / compare / resolved / linked / core` visual intensity.
- `installNocturneVisualBridge(frame)` installs low-cost styling on existing tank frame, depth ring and circular world ports.
- `applyNocturneVisualEvidence(frame, layerName, symbols)` applies `vmLayer`, `vmEvidence` and the evidence-chain cause to the machine.

The bridge deliberately reuses the aquarium's current glass/world geometry. It does not add a detached evidence panel and does not alter MEMORY / DEPTH probability or reel logic.

Important integration distinction: current published Nocturne `play.html` still does not import the Run 6 module boundary. Therefore the bridge is now concrete main code but is **not yet claimed live in the public shell**. Preserve the current 50G stability baseline when Sound/Machine chooses the safe integration point.

## Next Sound & Experience Director

### 刻ノ一閃
The new cadence visuals are reactions to the same STOP chain already driving the Sound timeline. Do not add a sound for every `vmChain` token. Keep the existing mechanical STOP -> slash -> third-stop silence -> result hierarchy. Only consider tiny timbral emphasis if a chain already has game meaning and timing remains immediate on iPhone.

### ノクターン・アクアリウム
When integrating the pending audio-routing/module boundary, use that same safe point to call the new visual bridge from the already-known first-stop layer and captured symbols. Keep ambient audio quiet and do not let MEMORY sound cover physical reel STOPs.

## Verification state

- Changes were made in small imported/module files rather than rewriting the stable integrated shells.
- 刻ノ一閃 change is on the live module path because `audio-timeline.js` imports `game-reel-run6.js`.
- ノクターン bridge is main-ready but not yet live in `play.html`; do not claim otherwise.
- No new REALITY PASS is declared from code inspection alone. Browser/QA must verify 390px rendering and long-play stability.
- Human Gate 2 remains closed.
