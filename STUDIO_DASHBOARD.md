# Chappy5 Studio Dashboard

Updated: 2026-08-25 23:28 JST
Target: ECHO DRIFT core decision loop

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | WATCH | 3 | HIGH | OBSERVED + SIMULATED | Current exact rules materially reduced deep dominance: ≈58.7% deep / 29.0% resonance / 12.3% calm, mean ending depth ≈2.85. Main remaining systems risk is ≈53.3% simulated collapse and whether route diversity survives state-conditioned analysis. |
| Player Experience | WARNING | 4 | MEDIUM-HIGH | OBSERVED + SIMULATED | Immediate risk and extraction payoff are readable and route identities are more likely to be felt; the major subjective unknown is whether >50% collapse feels earned/replayable rather than punishing. |
| Progression & Content | FAIL | 4 | HIGH | OBSERVED + SIMULATED | Persistent bank/runs/discoveries still do not alter future strategy. Six discoveries complete after six chosen anomalies; collector behavior can raise anomaly choice ≈37.4%→50.1% and collapse ≈53.3%→59.7%, then that motive disappears. |
| Technical & Quality | UNKNOWN/WARNING | 3 | HIGH | OBSERVED + UNVERIFIED | Core save/state regression and threat/anomaly invariants pass CI. Production anomaly bonuses are 2/3/5/8/10/13 at depths 1–6. Real iPhone/Safari lifecycle/layout remains unverified. |

## Executive priority

**Preserve the materially improved current economy and verify that its route diversity is robust across visible game states before freezing the first human-test candidate.**

This is now higher value than another immediate balance patch. Meta progression, content expansion, radar polish and broad refactoring remain blocked until either the state-conditioned check exposes a concrete core exploit or the current build is frozen for human feel verification.

## Executive integration — 23:28 JST

### What changed since the previous Executive integration

The previous Executive pass deliberately reduced Deep base gain to `3–6` and made the existing visible anomaly opportunity scale more strongly with depth. Game Systems has now re-tested the **actual current `game.js`** rather than the previous candidate approximation.

The result is a material improvement rather than a marginal one:

- deep route share ≈ **58.7%**, down from ≈83.0%;
- resonance ≈ **29.0%**;
- calm ≈ **12.3%**;
- chain-matching resonance ≈ **7.2%** of all selections, up from ≈3.7%;
- mean ending depth ≈ **2.85**, up from ≈2.62.

This does not prove the game is fun. It does show that the three route identities are beginning to function as real strategic jobs instead of one dominant payout route plus two decorative alternatives.

### The main risk has changed

The largest AI-detectable problem is no longer deep dominance. The new systems risk is that the healthier choice distribution is accompanied by **≈53.3% collapse** in the tested adaptive policy. A separate 200k repeat reproduced ≈53.2% collapse, ≈40.9% voluntary extraction and ≈5.8% forced extraction.

Exact danger is visible before selection, so this is not a hidden-probability fairness bug. Whether this loss profile feels like satisfying push-your-luck tension or like repeated time erasure is increasingly a **human feel question**, not something Executive should settle by blindly lowering the probability.

### Discovery layer integration

Systems also resolved the queued Progression concern. `meta.found` does not mechanically affect route value, so optimal mechanical play is identical before and after discovery completion. But a collector-motivated policy materially changes behavior: anomaly choice rises to ≈50.1%, bank falls to ≈9.93/run and collapse rises to ≈59.7%. After six discoveries that extra motive disappears because discovery has no further mechanical/world consequence.

This confirms that the existing collection layer is not yet long-term progression. It can temporarily bend early play, then abruptly stop mattering. Do **not** solve this by adding more relic names.

### Numeric source-of-truth correction

Technical & Quality caught one Director-record drift: production `anomalyBonusAt(depth)` is

`2 + floor(depth/2) + max(0, depth-2) * 2`

and therefore yields **2 / 3 / 5 / 8 / 10 / 13** at depths 1–6. A Progression document had previously recorded values one point too high from depth 3 onward. That document has now been corrected in commit `8275daf1075ed792a350f0e43b59f295197fa79b`.

Future balance decisions must use `game.js` or executable probes as numeric source of truth rather than copied prose.

## Executive decision this cycle

### No new gameplay balance patch

Do **not** immediately tune Deep, Calm, Resonance, anomaly frequency, threat growth or extraction multiplier again. The last patch achieved the intended structural effect strongly enough that another balance change now would destroy the chance to understand whether the improvement is robust.

### Human-test gate is near, but not frozen yet

One remaining AI-side check has high value before freezing the candidate:

**Does each route become rational in identifiable visible states — especially threat band, depth and active resonance-chain state — rather than the global percentages merely averaging over another hidden fixed rule?**

The next Systems pass should answer this using current exact main without changing the game unless it discovers a concrete exploit or dominant state rule.

If that state-conditioned check is healthy, Executive should freeze the current gameplay candidate and move to HUMAN_VERIFIED testing instead of continuing balance simulation indefinitely.

## Human-test candidate criteria

The first frozen candidate is ready when:

1. no route is a near-universal choice inside the major visible state bands;
2. calm demonstrably has a high-threat recovery role;
3. live-chain resonance demonstrably changes choice value;
4. later anomaly offers sometimes justify continued risk without being universally mandatory;
5. save/state CI remains green.

At that point, subjective evaluation should be limited to:

- Did **continue vs extract** create genuine hesitation more than once?
- After collapse, did failure feel **earned enough to want another attempt**, or like the game erased your time?
- After a successful or failed run, did you **immediately want another run**?
- Separately observe whether iPhone scrolling/thumb reach/runtime friction interfered with the decision.

Record those results only as `HUMAN_VERIFIED`; negative results are primary evidence, not something to explain away with simulation.

## What remains deliberately blocked

- No meta shop or linear permanent stat upgrades.
- No larger relic list.
- No new route/system/currency.
- No archive/lore volume until discovery semantics are approved.
- No radar-feedback polish until the gameplay candidate is frozen.
- No broad refactor.

## Human verification status

No `HUMAN_VERIFIED` finding exists yet. Do not claim ECHO DRIFT is fun, satisfying, replayable or flagship-ready.

The current evidence supports a narrower statement: **the game is structurally healthier than the previous cycle, and it is approaching the point where human play will be more valuable than further broad AI prediction.**