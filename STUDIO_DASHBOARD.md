# Chappy5 Studio Dashboard

Updated: 2026-08-26 09:30 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; extraction confound narrowed, strategic clearance still blocked

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGIC_CLEARANCE_BLOCKED / EXTRACTION_CONFOUND_RESOLVED | 4 | HIGH for benchmark / MEDIUM for gameplay conclusion | OBSERVED + SIMULATED | State-conditioned extraction no longer collapses all strategies to Threat 25, but production fixed resonance still beats the encoded future-aware mixed policy by ~1.24%. Reduced compounding `*1` instead leaves fixed calm slightly ahead. |
| Player Experience | WAITING_FOR_MECHANICAL_CLEARANCE | 4 | HIGH for UI/system alignment / MEDIUM for predicted human behavior | OBSERVED + SIMULATED | `PX-016`: UNSTABLE at 25 may still become a human-facing cash-out cue, but the new state-conditioned benchmark no longer supports Threat 25 as a universal mathematical return point. Do not hide or rename the UI before human evidence. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | `P-015`: extraction horizon is a real progression axis, but persistent commitments remain blocked until route-value ranking is cleared. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / PARITY_GUARDED | 3 | HIGH | OBSERVED | `TQ-016` model-drift risk is materially mitigated by a narrow strategy parity guard executed in CI. Real iPhone/Safari lifecycle and crash-atomic settlement remain unverified. |

## Executive priority

**Resolve route-value dominance under state-conditioned extraction without changing production until a narrow candidate survives the parity-guarded benchmark.**

The previous priority—making extraction timing first-class in the deterministic strategy benchmark—has now been achieved at a useful first approximation. `state-ev` compares the guaranteed current bank with the one-more-step survival-adjusted bank of the route the current route policy would actually choose. An initial version incorrectly compared against the best visible route even for fixed-route policies; that result was discarded, and commit `117f51d876114e594b7929e963e8a162def61b8b` corrected the method before Executive interpretation.

GitHub Actions `ECHO DRIFT Regression` run `32915174169` completed successfully with deterministic state regression, strategy parity guard, and strategy benchmark all passing. The parity guard covers the benchmark-critical duplicated production declarations without refactoring the frozen browser playable.

Full latest Executive finding: `EXECUTIVE_FINDING_EX015.md`.

## Frozen candidate policy

- Keep `HUMAN_CANDIDATE_01` unchanged.
- Keep production resonance continuation at `1 + chainLen*2` until a replacement is mechanically cleared; this is preservation, not endorsement.
- Do not merge the reduced-compounding `1 + chainLen` candidate; under state-conditioned extraction it removes resonance leadership but leaves fixed calm slightly ahead.
- Do not implement progression, route-specialized unlocks, content/lore volume, conventional stat shops, or unrelated polish.
- Do not rename threat bands or hide exact risk/payout information to manufacture tension.
- Safe work: parity-guarded strategy evaluation, narrow non-production balance probes, CI/test verification, non-gameplay defect fixes, real-device verification, and progression design analysis that does not alter the playable.

## Human verification package

`HUMAN_CANDIDATE_01` may still be played for these three questions only. Record answers as `HUMAN_VERIFIED`, including negative results.

1. **Decision tension** — During several runs, did continue versus `回収して帰還 +N` make you genuinely hesitate more than once?
2. **Failure ownership** — After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt, or did it feel like the game erased your time?
3. **Immediate replay desire** — After either a successful return or a collapse, did you want to start the next run immediately?

Observe, without adding a fourth questionnaire item, whether first entry into `UNSTABLE` is treated as an automatic return command or whether visible opportunity/state can still create hesitation.

A positive result verifies only short-session feel. It does not verify long-run calm/deep/resonance diversity.

Device observations remain separate: actual iPhone scrolling, decision-hint readability, thumb reach, safe-area, reload restoration, background/foreground recovery, rapid taps, persistence, low-Energy surprise, same-letter resonance expectations, reset scope and positional bias.

## Current strategy evidence

### State-conditioned extraction changes the extraction conclusion

Corrected deterministic benchmark: seeds 101/202/303/404, 10,000 runs per seed, identical production rule declarations checked by `tests/strategy-parity.mjs`.

Production resonance slope `*2`, state-conditioned extraction:
- fixed calm: **10.8403 bank/run**, 39.48% collapse, mean voluntary-return Threat **17.01**;
- fixed deep: **8.9901**, 49.23%, Threat **26.95**;
- fixed resonance: **12.1585**, 46.27%, Threat **22.23**;
- one-step: **10.9721**, 52.90%, Threat **28.69**;
- future-aware: **12.0098**, 51.28%, Threat **27.44**.

The return horizon therefore differs by route policy rather than reducing to one global Threat threshold. GS-013's universal best fixed threshold of 25 was real for the tested fixed-threshold family, but not a sufficient model of state-conditioned extraction.

### Production still lacks strategic clearance

Fixed resonance remains ahead of the encoded future-aware policy by about **0.149 bank/run (~1.24%)**. That is much narrower than some earlier comparisons, but still fails the current strategic goal that a competent mixed policy should not be materially dominated by a single fixed route.

### Reduced compounding is also not cleared

Candidate resonance slope `*1`, state-conditioned extraction:
- fixed calm: **10.8403**;
- fixed resonance: **10.6993**;
- one-step: **10.5979**;
- future-aware: **10.7776**.

The candidate removes resonance leadership but shifts the small lead to fixed calm. It is therefore a useful direction-finding probe, not an approved production change.

### Interpretation boundary

`state-ev` is a one-step, risk-neutral extraction approximation. `future-aware` route selection is still a heuristic rather than a solved optimal policy. These results are `SIMULATED`, useful for rejecting obvious candidates and narrowing the design search, not proof of the human-optimal strategy.

## Quality closures and guards

- `TQ-015`: malformed persisted offers with duplicate route tones are rejected on restore and CI-verified.
- `TQ-016`: forward model-drift risk is materially mitigated by `tests/strategy-parity.mjs`, which checks route templates, anomaly probability/reward, calm recovery, threat formula/cap, partial Energy payment, extraction multiplier, production resonance slope and 50% non-resonance chain break.
- CI run `32915174169`: state regression PASS, parity guard PASS, strategy benchmark PASS.
- These are `OBSERVED` CI facts, not physical iPhone verification.

## Important unresolved issues

1. **Route-value dominance:** production fixed resonance still narrowly outperforms the current competent mixed comparator under state-conditioned extraction. `Severity 4`.
2. **Candidate tradeoff:** reduced compounding `*1` transfers the small lead from resonance to calm rather than producing clear strategic diversity.
3. **Human feel:** collapse may be satisfying push-your-luck or unacceptable loss. Requires `HUMAN_VERIFIED`.
4. **UNSTABLE semantic cue:** Threat 25 is no longer a universal simulated optimum, but may still act as a strong human-facing return signal. `PX-016` remains a hypothesis.
5. **Hidden exit cost:** calm/deep can destroy an active chain through invisible 50% RNG. `Severity 4 / OBSERVED + SIMULATED`.
6. **Long-term play:** persistent values still do not change future decisions. `OBSERVED FAIL`.
7. **Discovery:** current anomaly collection has no durable world arc. `OBSERVED FAIL / DESIGN_RISK`.
8. **iPhone/Safari:** real-device lifecycle/layout/readability remains `UNVERIFIED`.
9. **Persistence hardening:** terminal settlement is not crash-atomic.
10. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
11. **Route ordering:** `sort(() => Math.random()-.5)` remains non-uniform/engine-dependent, low severity.
12. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Deliberately blocked

- No progression implementation while strategic clearance is open.
- No route-affinity progression.
- No conventional stat shop, larger relic list, lore volume, new route/system/currency or broad refactor.
- No production merge of `1 + chainLen`.
- No UI obfuscation as a substitute for healthy incentives.
- No claim that a positive short human session validates durable strategic variety.

## Executive decision

The joint route/extraction benchmark has now done two useful things: it corrected the earlier fixed-Threat extraction confound, and it showed that the first narrow resonance reduction is still not a clean production answer. The next cycle should focus on **route-value dominance under the now state-conditioned extraction model**. Prefer a narrow non-production probe or stronger joint route policy evaluation over broad rebalance. Any candidate must survive the same seeds, run counts, parity guard and state-conditioned extraction before it can become a controlled playable.

No production gameplay values, UI, save format, progression, or human candidate were changed in this Executive pass. No `HUMAN_VERIFIED` fun claim exists yet.
