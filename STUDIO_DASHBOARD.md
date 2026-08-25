# Chappy5 Studio Dashboard

Updated: 2026-08-26 07:25 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; first narrow balance candidate supported but not production-cleared

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | CANDIDATE_SUPPORTED / STRATEGIC_CLEARANCE_BLOCKED | 4 | MEDIUM-HIGH | OBSERVED + CALCULATED + SIMULATED | `GS-012`: reducing resonance continuation growth from `1 + chainLen*2` to `1 + chainLen` independently removes the obvious fixed-resonance advantage in a bounded seeded probe and restores room for mixed future-aware play. |
| Player Experience | CANDIDATE_PX_GATE | 3 | MEDIUM-HIGH | OBSERVED + SIMULATED | `PX-015`: the same lever that improves strategic balance also weakens the most visible resonance acceleration signal; any promoted balance candidate must preserve felt chain reward. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_CLEARANCE | 4 | HIGH | OBSERVED + DESIGN ANALYSIS | Latest progression direction: do not hard-wire permanent progression to route names while route values remain under tuning; prefer future progression around state/approach choices after core clearance. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH | 3 | HIGH | OBSERVED | `TQ-015` restored-route three-tone invariant is fixed and CI-verified PASS; real iPhone/Safari lifecycle and crash-atomic terminal settlement remain unverified. |

## Executive priority

**Make the strategy comparison reproducible in-repository before changing production.**

The studio now has a credible first intervention, not merely a diagnosis. `GS-012` independently supports the same narrow candidate previously identified by Executive: slow resonance continuation growth from `1 + chainLen*2` to `1 + chainLen`, while leaving base gain, Threat, Energy, anomaly and other route values untouched.

Current acceptance criterion is deliberately not 33/33/33 route usage. The candidate should pass only if, under identical production mechanics, deterministic seeds and stopping rules, **no simple fixed route clearly dominates a competent mixed future-aware policy while calm/deep/resonance retain state-dependent jobs**.

Full latest Executive finding: `EXECUTIVE_FINDING_EX013.md`.

## Frozen candidate policy

- Keep `HUMAN_CANDIDATE_01` unchanged for short-session human-feel comparison.
- Do not interpret a positive short session as strategic clearance.
- Do not add progression, route-specialized unlocks, content volume, lore volume, conventional stat shops or unrelated polish.
- Do not merge the reduced-compounding candidate into production until the comparison is reproducible in-repository across multiple deterministic seeds with equalized stopping rules/run counts.
- Safe work: deterministic strategy harnessing, CI/test verification, non-gameplay defect fixes, real-device verification, and progression design analysis that does not alter the candidate.

## Human verification package

`HUMAN_CANDIDATE_01` may still be played for these three questions only. Record answers as `HUMAN_VERIFIED`, including negative results.

1. **Decision tension** — During several runs, did continue versus `回収して帰還 +N` make you genuinely hesitate more than once?
2. **Failure ownership** — After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt, or did it feel like the game erased your time?
3. **Immediate replay desire** — After either a successful return or a collapse, did you want to start the next run immediately?

A positive result verifies only short-session feel. It does not verify long-run calm/deep/resonance diversity.

If the reduced-compounding candidate is later promoted to a controlled playable, add only one targeted comparison question: **共鳴が続いた時、回収が加速している感じは残っていたか？**

Device observations stay separate: actual iPhone scrolling, decision-hint readability, thumb reach, safe-area, reload restoration, background/foreground recovery, rapid taps, persistence, low-Energy surprise, same-letter resonance expectations, reset scope and positional bias.

## Current strategy evidence

### Production remains strategically blocked

- established resonance has about 5 expected haul/choice before anomaly and roughly 2.5 haul/EN;
- deep averages about 4.5 haul/choice and roughly 1.8 haul/EN while carrying +3 route risk;
- leaving an active resonance chain can erase future value through hidden 50% RNG;
- repeated seeded probes have shown fixed resonance around 11.8–12.1 bank/run against older one-step adaptive around 10.9–11.2;
- therefore current production `*2` compounding is not strategically cleared.

### First controlled candidate — simulation only

`GS-012` independently compared the narrow slope change under its seeded harness:

- production slope `*2`: fixed resonance ≈11.89, bounded future-aware ≈12.04, future-aware route mix ≈20.1% calm / 31.2% deep / 48.6% resonance;
- candidate slope `*1`: fixed resonance ≈10.40, one-step adaptive ≈10.69, bounded future-aware ≈11.03, route mix ≈23.7% calm / 37.3% deep / 39.0% resonance.

These numbers are `SIMULATED` and exploratory because nested rollout run counts were lower. The directional result independently agrees with Executive's earlier probe, which is why the candidate is now supported but not cleared.

## Quality closures since EX-012

- `TQ-015`: malformed persisted offers with duplicate route tones are rejected on restore.
- Regression commit `803394fe8b54f2f9d5ecb4d20ff1fc5b335e9e84` is verified by `ECHO DRIFT Regression` run `32903050802`, `completed / success`.
- This is `OBSERVED` CI evidence, not physical iPhone verification.

## Important unresolved issues

1. **Strategic durability:** production resonance compounding still creates long-run dominance pressure. `Severity 4 / OBSERVED + CALCULATED + SIMULATED`.
2. **Strategy reproducibility:** future-aware comparison is not yet encoded as a repository-side equal-rule harness. This is the current highest AI-side blocker to authorizing the narrow balance change.
3. **Hidden exit cost:** calm/deep can destroy an active chain through invisible 50% RNG. `Severity 4 / OBSERVED + SIMULATED`.
4. **Human feel:** current collapse profile may be satisfying push-your-luck or unacceptable loss. Requires `HUMAN_VERIFIED`.
5. **Reward feel under candidate:** slower compounding may improve strategy but flatten resonance excitement. Requires human comparison only after a candidate playable exists.
6. **Long-term play:** persistent values still do not change future decisions. `OBSERVED FAIL`.
7. **Discovery:** six anomaly contacts complete a random, non-pursuable prototype collection with no durable world arc. `OBSERVED FAIL / DESIGN_RISK`.
8. **Depth pressure:** cumulative triangular escalation compresses deep play; whether that pacing feels good is human-dependent. `OBSERVED + CALCULATED`.
9. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`, small aggregate effect in prior simulation.
10. **iPhone/Safari:** real-device lifecycle/layout/readability remains `UNVERIFIED`.
11. **Persistence hardening:** terminal settlement is not crash-atomic; acceptable prototype risk, not production-safe for valuable persistent rewards.
12. **Route ordering:** `sort(() => Math.random()-.5)` is non-uniform/engine-dependent. `OBSERVED`, low severity.
13. **Progression semantics:** `banked` currently means lifetime cumulative recovery; future spending must not silently overload that meaning.

## Deliberately blocked

- No progression implementation while strategic clearance is open.
- No route-affinity progression that could amplify a temporary route balance state.
- No conventional stat shop, larger relic list, lore volume, new route/system/currency or broad refactor.
- No global balance patch solely from average route share.
- No production merge of `1 + chainLen` until deterministic strategy comparison is reproducible.
- No claim that a positive short human session validates durable strategic variety.

## Executive decision

The next cycle should not add content or perform another broad rebalance. The studio has narrowed the balance intervention enough. The next highest-value work is **engineering the deterministic strategy comparison itself**, then using it to accept or reject the reduced-compounding candidate. If that candidate clears mechanically, Executive can promote a new controlled playable and PX can test whether resonance still feels rewarding. If it fails, the next lever remains cross-route signal causality / chain persistence rather than global buffs.

No `HUMAN_VERIFIED` fun claim exists yet.