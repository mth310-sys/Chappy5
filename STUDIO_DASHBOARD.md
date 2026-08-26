# Chappy5 Studio Dashboard

Updated: 2026-08-26 12:24 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; high-chain cap is the leading structural simulation candidate

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | CANDIDATE_NARROWED / HIGH_CHAIN_CAP_LEADS | 4 | HIGH for measured benchmark / MEDIUM-HIGH for design inference | OBSERVED + SIMULATED | `GS-015` correctly isolated the rare high-chain tail. Executive probe now shows `+5,+5,+5...` cap is materially stronger than the `+5,+6,+7...` taper while preserving the first resonance continuation. |
| Player Experience | REWARD_FEEL_GATE_PENDING | 3 | HIGH for current rule/copy facts / MEDIUM for predicted feel | OBSERVED + SIMULATED | Latest PX gate supports preserving the first `+5`; a cap would require explanatory copy alignment and later human confirmation that the first continuation still feels rewarding and later repeats do not feel misleading. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Persistent progression remains blocked. Visible A/B/C causality and extraction horizon remain supported future progression vocabulary only after strategic clearance. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / PARITY_GUARDED | 3 | HIGH | OBSERVED | State regression, strategy parity, benchmark and the new high-chain probe pass in CI. Real iPhone/Safari lifecycle, crash-atomic terminal settlement and other device behavior remain unverified. |

## Executive priority

**Validate the visible-signal causal exit + high-chain `+5` cap on held-out deterministic seeds / per-seed stability before modifying production.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX017.md`.

## What changed this cycle

The previous priority was to test two high-chain-only diminishing-return branches on top of the visible-signal chain-exit candidate while preserving the first resonance continuation reward.

Executive added `tests/high-chain-probe.mjs` and wired it into CI. Production `game.js` and `HUMAN_CANDIDATE_01` were not changed.

GitHub Actions `ECHO DRIFT Regression` run `32926203552` completed successfully on head `5c159b48f0b101c0669a61ef8767dcdf78accbd9`: deterministic state regression PASS, strategy parity PASS, deterministic strategy benchmark PASS, high-chain structural probe PASS.

All values below are `SIMULATED`, never `HUMAN_VERIFIED`.

## High-chain structural evidence

Visible-signal causal chain exit, state-conditioned extraction, seeds 101/202/303/404, 10,000 Runs per seed.

### Current high-chain growth: `+5,+7,+9...`
- fixed calm: **10.753175 bank/Run**
- fixed deep: **8.954900**
- fixed resonance: **12.106575**
- one-step: **11.005725**
- future-aware: **12.003300**
- chain-aware: **12.029350**
- best contextual vs best fixed: **-0.077225**

### Gentle taper: `+5,+6,+7...`
- fixed calm: **10.753175**
- fixed deep: **8.954900**
- fixed resonance: **11.885825**
- one-step: **10.964800**
- future-aware: **11.889375**
- chain-aware: **11.829450**
- best contextual vs best fixed: **+0.003550**

The taper is a simulator-level near-tie and is **not** supported for production.

### High-chain cap: `+5,+5,+5...`
- fixed calm: **10.753175**
- fixed deep: **8.954900**
- fixed resonance: **11.727750**
- one-step: **10.934250**
- future-aware: **11.809450**
- chain-aware: **11.716750**
- best contextual vs best fixed: **+0.081700 (~+0.70%)**

Future-aware route mix under the cap remains contextual rather than fixed: calm **9.35%**, deep **34.04%**, resonance **56.61%**.

The cap is the first high-chain branch in this sequence to produce a materially larger contextual lead while leaving the first `+5` intact. It is the leading candidate, not yet production clearance.

## Why production remains frozen

1. The measured `+0.0817 bank/Run` advantage is aggregate across the current four benchmark seeds; held-out/per-seed stability is not yet recorded.
2. Future-aware is an approximate policy, not proof of human or mathematically optimal play.
3. The cap changes the meaning of current “the longer it connects, the faster recovery accelerates” messaging after the first continuation; PX requires copy alignment if promoted.
4. Future-aware accepts a higher collapse rate under the cap (~**51.50%**) than fixed resonance (~**46.18%**). That can be a valid risk/reward trade, but it needs human evaluation rather than automatic approval.
5. No `HUMAN_VERIFIED` fun evidence exists yet.

## Frozen candidate policy

- Keep production `game.js` unchanged.
- Keep `HUMAN_CANDIDATE_01` unchanged.
- Keep production hidden 50% exit and current high-chain growth only because the playable is frozen, not because they are endorsed.
- Do not promote the gentle taper.
- Do not resume global slope micro-tuning or fine numerical searches around tiny rank crossings.
- Do not implement progression, route-affinity unlocks, content/lore volume, conventional stat shops, unrelated polish or broad refactors.
- Do not hide risk/payout information to manufacture tension.

## Next mechanical gate

Run the **same cap candidate** on a held-out deterministic seed set and record per-seed contextual-vs-fixed deltas.

Advance toward a controlled playable only if:
1. contextual strategy superiority is not caused by one favorable seed and does not collapse on held-out seeds;
2. fixed calm/deep/resonance do not simply exchange places as the dominant optimum;
3. first resonance continuation remains `+5`;
4. visible A/B/C remains causal and readable;
5. state regression, parity guard and all benchmark/probe CI remain PASS.

If this fails, stop resonance-reward tuning and move to another structural lever rather than searching more cap values.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

Only after the cap branch clears robustness and becomes a controlled playable, additionally observe without expanding the questionnaire: can the player predict chain preservation from A/B/C; does a same-signal calm/deep offer create a real tradeoff; does the first `+5` still feel like a meaningful acceleration; do rare later repeats feel unexpectedly flat?

No human-fun claim is authorized yet.

## Important unresolved issues

1. **Strategic robustness:** high-chain cap leads the current aggregate benchmark, but held-out/per-seed stability is pending. `Severity 4`.
2. **Hidden exit cost in production:** calm/deep can erase an active chain through invisible 50% RNG. `Severity 4 / OBSERVED + SIMULATED`.
3. **Long-term play:** persistent values still do not meaningfully change future decisions. `OBSERVED FAIL`.
4. **Human feel:** short-session tension, collapse ownership and replay desire still require `HUMAN_VERIFIED`.
5. **iPhone/Safari:** real-device lifecycle/layout/readability/touch behavior remains `UNVERIFIED`.
6. **Persistence hardening:** terminal settlement is not crash-atomic.
7. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
8. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Executive decision

`EX-017`: the gentle high-chain taper is rejected as too close to simulation noise. The visible-signal + `+5` high-chain cap is now the leading structural candidate because it preserves early resonance identity and produces the strongest tested contextual lead without moving the optimum to calm. Production remains frozen until held-out/per-seed robustness is demonstrated. If that gate passes, the next legitimate step is a new controlled playable with only the visible-signal chain-exit rule and high-chain cap, plus truthful copy alignment, followed by small human verification.
