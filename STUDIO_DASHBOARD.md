# Chappy5 Studio Dashboard

Updated: 2026-08-25 19:31 JST
Target: ECHO DRIFT first playable

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | WARNING | 3 | MEDIUM | SIMULATED | Initial pure-route simulation found severe calm-route dominance. Route values were rebalanced; simulated expected returns/survival are now much closer while preserving distinct route identities. Mixed-policy/dynamic-choice dominance is still untested. |
| Player Experience | UNKNOWN | 4 | LOW | SIMULATED | One-thumb portrait interaction is designed, but clarity, tension, reward feel, and replay desire are not HUMAN_VERIFIED. |
| Progression & Content | WARNING | 4 | HIGH | OBSERVED | Persistent bank/runs/discovery exist, but banked salvage currently has no strategic use. Long-term progression records play rather than changing future play. |
| Technical & Quality | WARNING | 3 | MEDIUM | OBSERVED | localStorage persistence and responsive CSS exist. Collapsed runs now increment the persistent run count. Real iPhone/Safari runtime, reload behavior and deterministic browser regression remain unverified. |

## Executive priority

**Prove and strengthen the core decision loop before content expansion.**

Current playable loop:
1. Start a dive.
2. Choose among three signal routes.
3. Trade Energy, haul, resonance and collapse risk.
4. Decide whether to extract or continue.
5. Bank salvage/discoveries across runs.

## Change this Executive cycle

### Dominant-route risk reduced
The previous numerical setup made always choosing `calm` substantially stronger in a simple Monte Carlo probe. This threatened the entire 3-choice premise.

Initial pure-policy simulation (approx. 20k runs each):
- calm: expected bank ~8.4 / forced-extraction survival ~44.6%
- deep: ~2.6 / ~11.4%
- resonance: ~3.4 / ~15.7%

After tuning route cost/gain/risk (approx. 30k runs each):
- calm: ~6.0 / ~32.5%
- deep: ~8.0 / ~28.7%
- resonance: ~6.8 / ~29.8%

Verification: `SIMULATED`, not a fun score and not proof of final balance. The next Systems pass should test mixed/dynamic policies and the value of voluntary extraction.

### Run-history integrity fixed
On collapse, `meta.runs` previously did not increment, so the displayed persistent run count represented successful/forced extractions rather than actual attempts. Collapse now records the attempt. Verification: `OBSERVED` from code change; browser runtime still pending.

## Known gap blocking flagship quality

The permanent layer currently records progress but does not yet create a meaningful future decision. Do not solve this by merely adding more relic names. A future progression change should alter run strategy, starting conditions or available decisions. It remains secondary to proving the core loop.

## Direction consistency

Parallel startup work produced two closely related names/variants (`ECHO DRIFT` and `AFTERGLOW ROUTE`). Executive resolved this without dual development: **ECHO DRIFT is the current implemented product hypothesis and authoritative playable direction.** Useful mechanics from the unimplemented variant may only be reconsidered after evidence shows a need.

## Human verification status

No HUMAN_VERIFIED findings yet.

When AI-detectable structural/technical issues are reduced, human play should answer only:
- Were the three route options meaningfully different or was one usually obvious?
- Did continue-vs-extract create real tension?
- After the run ended, did you want to immediately start another?
