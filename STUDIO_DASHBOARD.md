# Chappy5 Studio Dashboard

Updated: 2026-08-26 02:24 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` frozen for focused human play

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | READY_FOR_HUMAN_CANDIDATE / RULE_WATCH | 3 | HIGH | OBSERVED + SIMULATED | State-conditioned analysis still supports situational route jobs. Two post-candidate rule issues are now bounded: low-EN partial payment has small aggregate impact; more importantly, A/B/C is displayed on every route although calm/deep ignore signal identity and preserve/break resonance through hidden 50% RNG. |
| Player Experience | READY_FOR_HUMAN_CANDIDATE | 4 | MEDIUM-HIGH | OBSERVED + SIMULATED | Exact next-step danger and extraction payoff are readable. Main unknown remains whether >50% collapse feels self-authored/replayable. Signal letters may teach a causal rule the game does not honor on calm/deep. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_TEST | 4 | HIGH | OBSERVED + SIMULATED | Persistent bank/runs/discoveries still do not change future strategy. Six discoveries are a short completion timer with no pursuit agency. Do not expand progression until core feel is human-checked. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH | 3 | HIGH | OBSERVED + UNVERIFIED | Core save/state/threat/anomaly regression protection exists. Real iPhone/Safari remains unverified. Persisted log strings also cross an HTML trust boundary, but this is non-blocking for the frozen candidate. |

## Executive priority

**Keep `HUMAN_CANDIDATE_01` frozen and obtain focused HUMAN_VERIFIED evidence before changing global balance or adding progression.**

This remains the highest-value action. Systems has removed the strongest structural reason for further AI-only global tuning: deep is strongest early, calm becomes rational at higher threat/depth, and active resonance materially changes resonance value. Player Experience independently concludes that the unresolved core questions are subjective.

The new resonance-signal finding does not invalidate the candidate, but it is now the most important post-candidate rule-coherence issue: visible A/B/C labels imply cross-route meaning, while calm/deep currently ignore the label and preserve/erase an active chain through hidden 50% RNG. Changing this before human play would move the evaluation target; instead observe whether a player infers same-letter continuity or notices unexplained chain loss.

This is not a declaration that ECHO DRIFT is fun. No HUMAN_VERIFIED fun evidence exists yet.

## Frozen candidate

- Candidate: `HUMAN_CANDIDATE_01`
- Gameplay baseline: production `game.js` remains unchanged from the frozen candidate; subsequent work is analysis/tests only.
- Gameplay freeze: do not change global threat growth, route base gains, anomaly frequency/reward, calm recovery, resonance-chain reward, extraction multiplier, route generation, signal-chain rules, or the low-Energy payment rule until the first human test is completed unless a concrete severe exploit/regression is demonstrated.
- Safe work while waiting: tests, CI verification, non-gameplay technical inspection, focused simulations, progression design analysis that does not alter the candidate, and preparation for later implementation.
- Do not add radar polish before this test; emotional flatness is itself useful evidence.

## Human verification package

Record answers as `HUMAN_VERIFIED`, including negative results.

1. **Decision tension** — During several runs, did `continue` versus `回収して帰還 +N` make you genuinely hesitate more than once?
2. **Failure ownership** — After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt, or did it feel like the game erased your time?
3. **Immediate replay desire** — After either a successful return or a collapse, did you want to start the next run immediately?

Device/usability observations, not extra fun questions: on the actual iPhone, note whether scrolling, cramped route text, thumb reach, safe-area behavior, reload restoration, or background/foreground recovery interferes with play. If remaining Energy is lower than a displayed route cost, note whether continued selectability is understood or surprising. If resonance is active, note whether the player expects a same-letter calm/deep route to preserve the chain or notices unexplained chain disappearance.

## Why the candidate remains frozen

Current Systems evidence on exact production rules:

- aggregate route share ≈58.7% deep / 29.0% resonance / 12.3% calm;
- mean ending depth ≈2.85;
- collapse ≈53.2–53.3%, voluntary extraction ≈40.9%, forced extraction ≈5.8%;
- Threat 0–24: deep ≈59.7%; Threat 25–49: calm ≈51.1%;
- no active chain: resonance ≈23.7%; active chain: resonance ≈49.3%;
- by depth, deep falls while calm rises, with resonance competitive in middle states.

These results do not prove enjoyment, but they remove the strongest prior structural reason to keep tuning before human play.

### Terminal-energy comparison — SIMULATED

A focused 100,000-run comparison found the current partial-payment rule appears in ≈3.03% of runs. Current partial payment produced mean bank ≈10.92/run and collapse ≈53.49%; disallowing unaffordable routes produced ≈10.88/run and ≈52.41% collapse. The mismatch is real but too small in aggregate to justify moving the candidate before the first human test.

### Resonance-signal coherence — OBSERVED

Every route displays A/B/C. Only a resonance route actually compares its signal with the active chain. A calm/deep choice instead has a hidden 50% chance to clear the chain, independent of whether its displayed signal matches. Therefore an active `A×2` can disappear after calm A and survive after calm B. This is a causal/UI mismatch and a post-candidate rule decision, not a reason to silently change the frozen test build.

## Deliberately blocked until HUMAN_VERIFIED core evidence

- No global balance patch without a demonstrated exploit/regression.
- No meta shop or linear permanent stat upgrades.
- No larger relic list.
- No new route/system/currency.
- No archive/lore volume merely to simulate depth.
- No radar-feedback polish before the first feel test.
- No broad refactor.
- No low-Energy rule change solely because the mismatch exists.
- No resonance-signal rule change before the candidate merely to make the model cleaner.

## Important unresolved issues

1. **Human feel:** ≈53% collapse may be satisfying push-your-luck or unacceptable loss. `SIMULATED`, not known.
2. **Long-term play:** persistent values do not yet change future decisions. `OBSERVED FAIL`.
3. **Discovery:** six anomaly contacts complete the prototype collection; discovery identity cannot be deliberately pursued. `OBSERVED FAIL`.
4. **iPhone/Safari:** real-device lifecycle/layout remains `UNVERIFIED`.
5. **Signal causality:** A/B/C is visible across all routes but mechanically meaningful only to resonance; calm/deep chain survival is hidden RNG. `OBSERVED`.
6. **Low-Energy rule clarity:** displayed route cost can exceed the Energy actually charged. `OBSERVED`; small aggregate effect in focused simulation.
7. **Persistence hardening:** terminal settlement uses separate localStorage writes and is not crash-atomic; acceptable prototype risk, not production-safe for valuable long-term rewards.
8. **Persisted-log rendering:** restored log strings are inserted as HTML; defense-in-depth fix should use text rendering after the frozen candidate.

## Executive decision

No gameplay implementation is justified in this cycle. The newest specialist evidence strengthens a post-candidate rule-coherence concern but does not outweigh the value of keeping the now-ready human test stable.

After HUMAN_VERIFIED feedback arrives:

- if decision tension/failure ownership/replay desire fail, diagnose the core before progression;
- if the core passes, first resolve visible rule coherence: compare making A/B/C genuinely meaningful across calm/deep/resonance against removing inert labels and using a deterministic chain-break rule; resolve the low-Energy rule explicitly as well;
- then the next major product problem is meaningful run-to-run progression, preferably one compact mutually exclusive persistent choice that changes how a future dive is played rather than simply making the player stronger;
- if choices are clear but emotionally flat, test small reactions on the existing radar rather than adding another UI system;
- before valuable persistent rewards are introduced, add explicit save migration and minimal crash-idempotent settlement hardening.

No `HUMAN_VERIFIED` fun claim exists yet.