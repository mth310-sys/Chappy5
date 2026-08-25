# Chappy5 Studio Dashboard

Updated: 2026-08-26 01:24 JST
Target: ECHO DRIFT — first focused human-play candidate

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | READY_FOR_HUMAN_CANDIDATE / TERMINAL_RULE_WATCH | 3 | HIGH | OBSERVED + SIMULATED | State-conditioned 200k probe confirms situational route jobs. New GS-006 confirms nominal EN cost is partially waived when remaining Energy is lower; focused Executive simulation indicates this affects only a small minority of runs and does not currently justify moving the frozen candidate. |
| Player Experience | READY_FOR_HUMAN_CANDIDATE | 4 | MEDIUM-HIGH | OBSERVED + SIMULATED | Exact next-step danger and exact extraction payoff are readable. Main unknown is whether >50% collapse feels self-authored/replayable rather than like erased time. Low-EN partial payment is a localized rule-trust watch. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_TEST | 4 | HIGH | OBSERVED + SIMULATED | Persistent bank/runs/discoveries still do not change future strategy. Six discoveries are a short completion timer with no pursuit agency. Do not expand progression until core feel is human-checked. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH | 3 | HIGH | OBSERVED + UNVERIFIED | Core save/state/threat/anomaly regression protection exists. Real iPhone/Safari touch, safe-area, reload/background lifecycle and storage remain unverified. |

## Executive priority

**Keep Human Candidate 01 frozen and obtain focused HUMAN_VERIFIED evidence before changing global balance or adding progression.**

The previous Executive gate remains satisfied. Game Systems' state-conditioned probe found no near-universal route inside the major visible states: deep is strongest early, calm becomes rational at higher threat/depth, and active resonance materially changes resonance value. Player Experience independently concludes that another AI-only feel prediction is lower value than actual human play.

The newly observed low-Energy partial-payment rule is real, but a focused Executive simulation does not show enough aggregate impact to justify invalidating the frozen human candidate before the core feel test.

This is not a declaration that ECHO DRIFT is fun. It is a declaration that the next highest-value evidence for the core loop is human evidence.

## Frozen candidate

- Candidate: `HUMAN_CANDIDATE_01`
- Gameplay baseline: production `game.js` remains unchanged from the frozen candidate; subsequent work is analysis/tests only.
- Gameplay freeze: do not change global threat growth, route base gains, anomaly frequency/reward, calm recovery, resonance-chain reward, extraction multiplier, route generation, or the low-Energy payment rule until the first human test is completed unless a concrete severe exploit/regression is demonstrated.
- Safe work while waiting: tests, CI verification, non-gameplay technical inspection, focused simulations, progression design analysis that does not alter the candidate, and preparation for later implementation.
- Do not add radar polish before this test; emotional flatness is itself useful evidence.

## Human verification package

Record answers as `HUMAN_VERIFIED`, including negative results.

1. **Decision tension** — During several runs, did `continue` versus `回収して帰還 +N` make you genuinely hesitate more than once?
2. **Failure ownership** — After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt, or did it feel like the game erased your time?
3. **Immediate replay desire** — After either a successful return or a collapse, did you want to start the next run immediately?

Device observation, not a fourth fun question: on the actual iPhone, note whether scrolling, cramped route text, thumb reach, safe-area behavior, reload restoration, or background/foreground recovery interferes with play. If remaining Energy is lower than a displayed route cost, note whether the route remaining selectable is understood or surprising; do not turn this into an additional questionnaire item.

## Why the candidate is frozen now

Systems evidence on current exact rules:

- aggregate route share ≈ 58.7% deep / 29.0% resonance / 12.3% calm;
- mean ending depth ≈ 2.85;
- collapse ≈53.2–53.3%, voluntary extraction ≈40.9%, forced extraction ≈5.8%;
- Threat 0–24: deep ≈59.7%; Threat 25–49: calm ≈51.1%;
- no active chain: resonance ≈23.7%; active chain: resonance ≈49.3%;
- by depth, deep falls while calm rises, with resonance becoming competitive in middle states.

These results do not prove enjoyment, but they remove the strongest prior structural reason to keep tuning before human play.

### Executive terminal-energy comparison — SIMULATED

A focused 100,000-run comparison was run against the current production rules using a one-step adaptive policy whose current-rule aggregate closely reproduced the existing Systems profile.

Current partial-payment rule:

- collapse ≈53.49%;
- voluntary extraction ≈40.73%;
- forced extraction ≈5.78%;
- mean permanent bank ≈10.92/run;
- a route whose displayed cost exceeded remaining Energy was actually selected in ≈3.03% of runs;
- among those partial-payment selections: deep ≈46.6%, resonance ≈40.4%, calm ≈13.0%.

Comparison rule where routes costing more than remaining Energy are unavailable:

- collapse ≈52.41%;
- voluntary extraction ≈40.92%;
- forced extraction ≈6.67%;
- mean permanent bank ≈10.88/run.

Interpretation: GS-006 is a genuine rule/UI inconsistency and should be resolved after the first human candidate, but under this focused policy it changes aggregate bank by only about +0.04/run and appears in roughly 3% of runs. This is insufficient evidence to disturb `HUMAN_CANDIDATE_01` now. The comparison is `SIMULATED`, not HUMAN_VERIFIED and not a final rule choice.

## Deliberately blocked until HUMAN_VERIFIED core evidence

- No global balance patch without a demonstrated exploit/regression.
- No meta shop or linear permanent stat upgrades.
- No larger relic list.
- No new route/system/currency.
- No archive/lore volume merely to simulate depth.
- No radar-feedback polish before the first feel test.
- No broad refactor.
- No low-Energy rule change solely because the mismatch exists; resolve it after the candidate with the human observation plus Systems evidence.

## Important unresolved issues

1. **Human feel:** ≈53% collapse may be satisfying push-your-luck or unacceptable loss. `SIMULATED`, not known.
2. **Long-term play:** persistent values do not yet change future decisions. `OBSERVED FAIL`.
3. **Discovery:** six anomaly contacts complete the prototype collection; discovery identity cannot be deliberately pursued. `OBSERVED FAIL`.
4. **iPhone/Safari:** real-device lifecycle/layout remains `UNVERIFIED`.
5. **Low-Energy rule clarity:** displayed route cost can exceed the Energy actually charged. `OBSERVED`; focused simulation suggests low aggregate impact but the intended rule remains unresolved.
6. **Persistence hardening:** terminal settlement uses separate localStorage writes and is not crash-atomic; acceptable prototype risk, not production-safe for valuable long-term rewards.

## Executive decision

No gameplay implementation is justified in this cycle because changing the candidate would destroy the value of the now-ready human test. The productive Executive action was to quantify the newly reported terminal-energy issue rather than patch it reflexively. The result supports preserving the candidate.

After HUMAN_VERIFIED feedback arrives:

- if decision tension/failure ownership/replay desire fail, diagnose the core before progression;
- if the core passes, resolve the low-Energy rule explicitly, then the next major product problem is meaningful run-to-run progression, preferably one compact mutually exclusive persistent choice that changes how a future dive is played rather than simply making the player stronger;
- if choices are clear but emotionally flat, test small reactions on the existing radar rather than adding another UI system;
- if low-Energy partial payment is noticed as confusing, prefer a direct rule decision (unavailable if unaffordable vs explicit last-push partial payment) rather than hiding the mismatch with copy.

No `HUMAN_VERIFIED` fun claim exists yet.