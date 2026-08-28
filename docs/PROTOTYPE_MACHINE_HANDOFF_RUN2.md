# Prototype Machine Director Handoff — Run 2

Status: `MACHINE_RUN2_QA_EVIDENCE_AND_ENTRY_EXPERIENCE_APPLIED`

Source of truth re-read before work: latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both canonical prototype wrappers, current dual-prototype Playwright QA, and the latest completed Actions run.

## Machine decision

The largest current blocker is no longer basic boot/touch-size compliance. Generic iPhone interaction smoke passes, while the dedicated repeated-play WebKit test still fails. The previous run did not upload enough evidence to distinguish a true moving control from a transient enabled/state problem.

Do not add systems until the exact repeated-play failure is observable. Preserve the fixed operation-deck geometry already applied.

## Changes this run

### QA evidence

`playtest/dual-prototype-qa.spec.js` now records round-by-round control state and geometry for BET / LEVER / STOP controls, scroll position, current message/log, viewport, a failure screenshot, and stack/error data when a repeated-play round fails.

This is diagnostic hardening, not test weakening: all existing touch-size, clipping, repeated-play, stress-tap and reload assertions remain.

### Prototype entry experience

`prototypes/index.html` was rebuilt as a two-machine comparison entrance rather than a generic list.

- 刻ノ一閃 communicates `LEVER → STOP1 → STOP2 → STOP3 → 一閃` before entry, using a sword-line visual language.
- ノクターン・アクアリウム communicates `LEVER → OBSERVE → REELS → MEMORY → DEPTH`, using an aquarium/lens visual language.
- Both links still target the canonical `play.html` builds.
- No prototype specs or payout claims were added.

## Next Game & Reel priority

1. Re-read the fresh dual-prototype Actions result produced after this run.
2. If repeated-play still fails, use the new JSON/screenshot evidence and fix the exact product-side control/state defect before adding game systems.
3. If repeated-play passes, keep control geometry frozen and improve only repeat-play cadence / information gain: 刻ノ一閃 should make each STOP feel like a distinct cut; ノクターン should keep reel outcome central to memory interpretation.
4. Temporary numbers remain prototype-only.

## Verification state

- Generic iPhone smoke: previously PASS on latest completed run.
- Dual repeated-play: still `UNVERIFIED` until the newly triggered run completes.
- Human feel / real iPhone audio / 30–50G fatigue / REALITY_PRESENCE: remain HUMAN_UNVERIFIED / REALITY_UNVERIFIED.
- Human Gate 2 remains closed.
- SIGNAL / FORGE / VAULT were not changed.
