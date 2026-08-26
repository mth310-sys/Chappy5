# Chappy5 Studio Dashboard

Updated: 2026-08-26 11:31 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; strategic clearance still blocked

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGIC_CLEARANCE_BLOCKED / SLOPE_ONLY_REJECTED | 4 | HIGH for benchmark / MEDIUM-HIGH for design inference | OBSERVED + SIMULATED | `GS-014`: global resonance-slope tuning is not robust; corrected neutral-order benchmark moves the fixed optimum from resonance toward calm rather than creating a stable mixed-strategy region. |
| Player Experience | NEXT_STRUCTURAL_PX_CANDIDATE | 4 | HIGH for rule/UI mismatch / MEDIUM for predicted feel | OBSERVED + SIMULATED | `PX-014`: calm/deep currently uses a hidden 50% chain-loss roll despite visible A/B/C. Making visible signal causally preserve/break the chain is the leading transparency candidate. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | `P-015`: extraction horizon remains a supported progression axis, but persistent commitments stay blocked until strategic clearance. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / PARITY_GUARDED | 3 | HIGH | OBSERVED | State regression and strategy parity pass in CI. Real iPhone/Safari lifecycle, crash-atomic terminal settlement and other device behavior remain unverified. |

## Executive priority

**Test a high-chain-only diminishing-return rule on top of the visible-signal causal chain-exit candidate, without changing production and without reducing the first resonance continuation reward.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX016.md`.

## Why this is now the priority

Slope-only tuning is no longer supported as the next production move. After Technical removed route-order tie bias, slope 2/1.5/1.25 still favored fixed resonance, slope 1 favored fixed calm, and the tiny mixed lead at 1.75 was not robust enough to justify simulator-fitting.

Executive therefore tested one structural alternative already supported independently by PX: replace the hidden non-resonance 50% chain-loss outcome with a visible rule — same A/B/C signal preserves the active chain, different signal breaks it.

The first structural-probe output was deliberately discarded because the candidate consumed fewer RNG draws and shifted the later deterministic random sequence. The benchmark was corrected so both branches consume the same chain-exit RNG draw. This restores the known production baseline and gives a paired comparison rather than a different random timeline.

GitHub Actions `ECHO DRIFT Regression` run `32922902584` completed successfully on head `b23ea9937b7d10eef0bb9eff5bb1e05cfd7fe88d`: deterministic state regression PASS, strategy parity PASS, strategy benchmark PASS.

## Corrected structural evidence

Production resonance slope `2`, state-conditioned extraction, seeds 101/202/303/404, 10,000 runs per seed.

### Production hidden 50% chain exit
- fixed calm: **10.753175 bank/Run**
- fixed deep: **8.954900**
- fixed resonance: **12.106575**
- one-step: **10.936775**
- future-aware: **11.918575**
- chain-aware probe: **11.847900**

### Visible-signal causal chain exit candidate
- fixed calm: **10.753175**
- fixed deep: **8.954900**
- fixed resonance: **12.106575**
- one-step: **11.005725**
- future-aware: **12.003300**
- chain-aware: **12.029350**

The structural candidate improves the contextual policies while leaving the fixed policies unchanged. The best tested contextual policy is now only **0.077225 bank/Run (~0.64%)** behind fixed resonance. This is promising, but it is not strategic clearance.

All benchmark numbers are `SIMULATED`. No human-play conclusion follows from them.

## Frozen candidate policy

- Keep production `game.js` unchanged.
- Keep production resonance continuation `1 + chainLen*2` unchanged for now; preservation is not endorsement.
- Keep `HUMAN_CANDIDATE_01` unchanged.
- Do not yet merge visible-signal chain exit into the playable; it is the leading structural branch, not an approved balance change.
- Do not resume global slope micro-tuning.
- Do not implement progression, route-affinity unlocks, content/lore volume, conventional stat shops, unrelated polish or broad refactors.
- Do not hide risk/payout information or rename threat bands to manufacture tension.

## Next mechanical gate

The next non-production probe should preserve the current early resonance identity and alter **only later chain growth**. Prefer a small discrete cap/taper after the first continuation rather than another continuous slope sweep.

Advance a candidate only if:
1. a contextual policy robustly beats fixed calm/deep/resonance rather than crossing by a tiny isolated margin;
2. the first resonance continuation reward remains at current strength;
3. the common-RNG deterministic comparison, parity guard and regression suite all pass;
4. the rule remains readable enough to become a controlled human-play candidate.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain the current human package:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

If the visible-signal structural candidate later becomes a controlled playable, observe additionally without expanding the questionnaire: can the player predict chain preservation from A/B/C, and does a same-signal calm/deep offer create a real tradeoff against immediate value?

No `HUMAN_VERIFIED` fun claim exists yet.

## Important unresolved issues

1. **Route-value dominance:** fixed resonance still leads the best tested contextual policy by ~0.64% even under the visible-signal candidate. `Severity 4`.
2. **Hidden exit cost in production:** calm/deep can erase an active chain through invisible 50% RNG. `Severity 4 / OBSERVED + SIMULATED`.
3. **Long-term play:** persistent values still do not meaningfully change future decisions. `OBSERVED FAIL`.
4. **Human feel:** short-session tension, collapse ownership and replay desire still require `HUMAN_VERIFIED`.
5. **iPhone/Safari:** real-device lifecycle/layout/readability/touch behavior remains `UNVERIFIED`.
6. **Persistence hardening:** terminal settlement is not crash-atomic.
7. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
8. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Executive decision

`EX-016`: visible-signal causal chain exit is the first structural candidate in this sequence that improves both strategic readability and contextual-policy performance without weakening early resonance reward. It nearly closes, but does not eliminate, the fixed-resonance lead. Production remains frozen. The next cycle should test only a high-chain-only diminishing return layered on this structural branch; if that cannot create robust contextual superiority, move away from resonance reward tuning rather than searching finer numerical thresholds.
