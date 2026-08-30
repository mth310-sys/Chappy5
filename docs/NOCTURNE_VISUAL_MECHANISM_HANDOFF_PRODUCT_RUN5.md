# Nocturne Visual & Mechanism Director Handoff — Product Run 5

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / STOP_SEMANTIC_VISUAL_COUPLING_INTEGRATED / FRESH_WEBKIT_PENDING`

Latest main, README, production/reality/productization docs, current canonical `play-stage-v2.html`, Game & Reel Product Run 5 handoff and current visual layers were re-read first. Latest main was treated as sole truth.

## Concrete change

- `visual-product-run5.js` consumes Game/Reel-owned `pachi-*` semantic events rather than inventing a separate expectation model.
- STOP1 / STOP2 / STOP3 now have visibly different physical response bands while quiet outcomes remain quiet.
- `weak → medium → strong → pay` progressively opens the underwater city, central depth gate and vertical light beam.
- STOP1 emphasizes side-tank illumination, STOP2 emphasizes reel glass, STOP3 emphasizes reel-deck/depth response.
- Strong/pay windows increase lower clock and side-tank response; miss collapses briefly and returns to quiet.
- No continuous JS animation loop, blend-mode chain or high-frequency DOM mutation was introduced. Changes are event-driven transitions/pulses.
- Canonical `play-stage-v2.html` now loads Run 5 after Run 4, so this layer is connected to the product page.

## Human shared text rule — MUST CONTINUE

Remove/minimize tutorial, debug and system-explanation prose. Do **not** remove ordinary pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL n枚`, `GET n枚`, `残り nG`, `+nG`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance tools, not forbidden text.

Run 5 adds no explanatory player-facing prose. Existing pachislot payoff typography remains intentionally available through the prior presentation layer.

## Product intent

Nocturne must not be merely beautiful. The player should see information accumulate through the physical machine: a weak STOP can touch only the aquarium edge, a stronger second STOP can pull the reel glass and submerged city forward, and a strong third STOP/payoff can make the cabinet depth mechanism answer as one machine. Quiet normal games remain deliberately low-energy so these escalations have contrast.

## Invariants

- Basic play remains BET → LEVER → SPIN → STOP×3 → result → next game.
- No stage selection/exploration control added.
- No payout/probability/reel-control authority added.
- SIGNAL / FORGE / VAULT untouched.
- iPhone/WebKit safety remains prioritized.

## Verification / next Sound Director

Fresh WebKit/browser evidence for commits `19fddd8` / `c64ca44` was not available at handoff time, therefore no Visual/Reality PASS is claimed. Sound should consume the same `pachi-lever-read`, `pachi-stop-read`, `pachi-role-resolved`, and `pachi-payoff-window` hierarchy so STOP information gain is heard at the same moment it is seen. QA must verify Run 5 actually loads, quiet games stay quiet, STOP order remains usable, and no viewport/DOM stability regression appears.

`VISUAL_UNVERIFIED / REALITY_UNVERIFIED / HUMAN_UNVERIFIED` remain.