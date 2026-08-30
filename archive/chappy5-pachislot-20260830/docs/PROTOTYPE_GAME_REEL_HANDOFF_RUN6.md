# Prototype Game & Reel Director Handoff — Run 6

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON

## Source of truth re-read

This run re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both current prototype shells/code, recent commits, Machine Run 6 handoff and its GitHub Actions result before changing code.

Machine Run 6 Generic Autonomous Playtest `33218914688` completed `success` at `8d821a1`. The Toki Sound Run 5 module integration is therefore no longer an active browser blocker.

SIGNAL / FORGE / VAULT were not changed.

## Game & Reel decision

Do not add payout complexity before submission. The remaining Game/Reel quality target is repeated-play information gain:

- 刻ノ一閃: every STOP should feel like the next beat of one sword exchange, and repeated first-stop habits should become readable without changing outcome math.
- ノクターン・アクアリウム: a stopped symbol should be interpretable as evidence inside the selected observation layer, so the reels remain relevant even when the aquarium world attracts the eye.

All new values/semantics in this run are `PROTOTYPE_ONLY` and do not claim final payout, probability or reel-control specifications.

## 刻ノ一閃 — integrated cadence layer

Created `prototypes/toki-no-issen/game-reel-run6.js` and wired it through the already-published `audio-timeline.js` module import.

The live shell now derives a presentation-only chain from the already-stopped center symbols:

- STOP1 = `起点` and the first symbol meaning.
- STOP2 = `重ね`, `刃筋上昇` or `二太刀転調` depending on the two stopped symbols.
- STOP3 = `参ノ太刀・決め七`, `三相連閃`, `三重`, or `重ね連閃`.
- The last three first-stop choices are also classified as `同起点×3`, `三起点巡回`, or `間合い変化`.

This layer does **not** alter reel selection, stop result, reward, payout, win flag or probability. It only makes the existing STOP results accumulate readable meaning across the three-button rhythm and across repeated games.

The module exposes machine datasets (`gameCadence`, `cutChain`, `firstPattern`) so Visual & Mechanism can express these states through the existing blade/frame/reel surfaces rather than adding a large HUD.

## ノクターン・アクアリウム — reel-evidence profile

Created `prototypes/nocturne-aquarium/game-reel-run6.js`.

The profile formalizes the intended reel/world relationship without changing the stable 50G shell logic:

- First-stop layer remains `左=広場 / 中=塔 / 右=記録庫`.
- A stopped symbol now has a layer-dependent clue name. Example: `鍵` can read as `漂着鍵 / 封印鍵 / 記録鍵`; `月` can read as `月影反射 / 塔頂月相 / 時相記録`.
- Three stopped symbols can be summarized as evidence chains such as `三重共鳴`, `七核共鳴`, `鍵月連結`, `群灯連結`, or generic `三証拠`.
- `nextNocturneObservation()` provides a deterministic least-visited-layer suggestion for long normal-play observation; it is guidance only and does not affect memory probability or reward.

`audio-routing.js` re-exports this profile so the pending Nocturne Sound Run 5 module integration has one coherent module boundary.

Important: unlike Toki, the published Nocturne `play.html` does **not yet import `audio-routing.js`**, per Machine Run 6. Therefore this run does not falsely claim that the new clue labels are already visible in the public Nocturne shell. The stable 50G shell remains untouched until the next safe integration point.

## Next Visual & Mechanism Director

### 刻ノ一閃
Use `machine.dataset.gameCadence`, `cutChain`, and `firstPattern` as visual causes, not as text-heavy UI. Suggested mapping:

- `opening`: compact first-blade emphasis on the stopped reel/blade boundary.
- `linking`: second-cut residual path should visibly relate to the first cut.
- `resolve-ready`: third cut should close the composition before the existing result release.
- `三相連閃 / 決め七 / 三重` may have subtly different residual geometry/brightness, but do not restore heavy WebKit compositing removed by Machine Run 4.
- `同起点×3` should read as habitual stance; `三起点巡回` as varied swordwork. Keep it subtle.

### ノクターン・アクアリウム
Use the new layer-dependent clue semantics to strengthen the existing optical path between physical reel and `広場 / 塔 / 記録庫`.

Do not add a detached evidence panel. The preferred visual language is: stopped physical symbol → selected circular observation window → corresponding world reaction. The new profile is ready for shell integration, but preserve the current 50G stability baseline when wiring it.

## Verification

Pushes in this run trigger the existing Generic Autonomous Playtest. Do not claim a new Run 6 Browser PASS until the latest workflow on the new head completes successfully.

Human Gate 2 remains closed. Human feel / real-device attraction / long-play fatigue remain human-verification items.