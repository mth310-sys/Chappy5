# Chappy5 Studio Dashboard

Updated: 2026-08-26 08:21 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; reduced-compounding candidate not cleared by reproducible benchmark

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGIC_CLEARANCE_BLOCKED / BENCHMARK_CONTRADICTION | 4 | HIGH for benchmark / MEDIUM for gameplay conclusion | OBSERVED + SIMULATED | Repository-side CI benchmark contradicts earlier exploratory support: under slope `*1`, fixed calm beats the encoded mixed policy across all four seeds. Route balance is now entangled with extraction timing. |
| Player Experience | WAITING_FOR_MECHANICAL_CLEARANCE | 3 | MEDIUM-HIGH | OBSERVED + SIMULATED | `PX-015` remains a later gate only: if reduced compounding ever clears mechanically, verify that resonance still feels accelerating rather than flat. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_CLEARANCE | 4 | HIGH | OBSERVED + DESIGN ANALYSIS | Do not hard-wire permanent progression to route names while route values and extraction strategy remain unresolved. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH | 3 | HIGH | OBSERVED | `TQ-015` is CI-verified PASS; strategy benchmark also runs successfully in CI. Real iPhone/Safari lifecycle and crash-atomic settlement remain unverified. |

## Executive priority

**Make extraction timing a first-class part of the deterministic strategy benchmark before making any production balance change.**

The previous priority—making route comparison reproducible—has now been achieved technically. `tests/strategy-benchmark.mjs` runs in CI and `ECHO DRIFT Regression` run `32909018863` completed successfully. The result is not the hoped-for candidate clearance; it is a useful contradiction.

Under the reproducible shared stopping rule, candidate slope `*1` removes much of resonance's advantage but leaves fixed calm clearly ahead of the encoded future-aware policy. This fails EX-013's acceptance criterion. However, the benchmark hard-codes extraction at `Threat >= 55` and compares only route-selection logic. Since ECHO DRIFT's actual core loop includes `continue` versus `return`, calm's survival value is structurally favored by that fixed extraction rule. Therefore the result rejects candidate clearance, but does not yet establish that slope `*1` is intrinsically wrong for the game.

Full latest Executive finding: `EXECUTIVE_FINDING_EX014.md`.

## Frozen candidate policy

- Keep `HUMAN_CANDIDATE_01` unchanged.
- Do not merge `1 + chainLen` into production.
- Do not treat prior exploratory `GS-012` numbers as authorization; they remain hypothesis-generating evidence.
- Do not add progression, route-specialized unlocks, content/lore volume, conventional stat shops, or unrelated polish.
- Safe work: joint route+extraction strategy harnessing, CI/test verification, non-gameplay defect fixes, real-device verification, and progression design analysis that does not alter the playable.

## Human verification package

`HUMAN_CANDIDATE_01` may still be played for these three questions only. Record answers as `HUMAN_VERIFIED`, including negative results.

1. **Decision tension** — During several runs, did continue versus `回収して帰還 +N` make you genuinely hesitate more than once?
2. **Failure ownership** — After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt, or did it feel like the game erased your time?
3. **Immediate replay desire** — After either a successful return or a collapse, did you want to start the next run immediately?

A positive result verifies only short-session feel. It does not verify long-run calm/deep/resonance diversity.

Do not add the reduced-compounding reward-feel question until a mechanically cleared controlled playable exists.

Device observations remain separate: actual iPhone scrolling, decision-hint readability, thumb reach, safe-area, reload restoration, background/foreground recovery, rapid taps, persistence, low-Energy surprise, same-letter resonance expectations, reset scope and positional bias.

## Current strategy evidence

### Production remains strategically blocked

- Established resonance still has strong chain value and hidden future cost when leaving the chain.
- Prior seeded probes repeatedly showed resonance pressure, so production `*2` remains uncleared.
- This remains `OBSERVED + CALCULATED + SIMULATED`, not human verification.

### Reproducible benchmark — higher-quality contradictory evidence

CI run `32909018863` executed the deterministic benchmark successfully with 10,000 runs per seed for seeds 101/202/303/404.

Production slope `*2`:
- fixed calm: 9.0483 / 9.2974 / 9.0737 / 8.8596 bank/run;
- fixed resonance: 9.6304 / 9.2581 / 9.1413 / 9.5020;
- future-aware: 8.6220 / 8.6226 / 8.6079 / 8.7133.

Candidate slope `*1`:
- fixed calm: 9.0483 / 9.2974 / 9.0737 / 8.8596;
- fixed resonance: 8.4825 / 8.1810 / 8.0989 / 8.3997;
- future-aware: 7.5294 / 7.3549 / 7.7251 / 7.3747.

Therefore slope `*1` is **not cleared** by the current reproducible benchmark. But the encoded mixed policy also has collapse rates around 80% and cannot choose its own extraction timing, while fixed calm benefits from the same hard `Threat >= 55` stopping rule. This makes extraction policy the next methodological blocker.

## Quality closures

- `TQ-015`: malformed persisted offers with duplicate route tones are rejected on restore and CI-verified.
- Strategy benchmark execution is now also CI-verified in run `32909018863`.
- These are `OBSERVED` CI facts, not physical iPhone verification.

## Important unresolved issues

1. **Joint strategy validity:** route selection and extraction timing are currently separated in the benchmark even though both are core decisions. `Severity 4`.
2. **Strategic durability:** production resonance compounding still creates dominance pressure in prior analyses. `Severity 4`.
3. **Candidate contradiction:** reduced compounding passes earlier exploratory probes but fails the repository-side benchmark; no production change is authorized.
4. **Hidden exit cost:** calm/deep can destroy an active chain through invisible 50% RNG. `Severity 4 / OBSERVED + SIMULATED`.
5. **Human feel:** collapse may be satisfying push-your-luck or unacceptable loss. Requires `HUMAN_VERIFIED`.
6. **Long-term play:** persistent values still do not change future decisions. `OBSERVED FAIL`.
7. **Discovery:** current anomaly collection has no durable world arc. `OBSERVED FAIL / DESIGN_RISK`.
8. **Depth pressure:** cumulative escalation compresses deep play; human pacing quality is unverified.
9. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
10. **iPhone/Safari:** real-device lifecycle/layout/readability remains `UNVERIFIED`.
11. **Persistence hardening:** terminal settlement is not crash-atomic.
12. **Route ordering:** `sort(() => Math.random()-.5)` remains non-uniform/engine-dependent, low severity.
13. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Deliberately blocked

- No progression implementation while strategic clearance is open.
- No route-affinity progression.
- No conventional stat shop, larger relic list, lore volume, new route/system/currency or broad refactor.
- No global balance patch from route-share averages alone.
- No production merge of `1 + chainLen`.
- No claim that a positive short human session validates durable strategic variety.

## Executive decision

The deterministic harness has already produced value by disproving premature confidence in the first candidate. The next cycle should **not** rebalance the game. It should make `continue` versus `return` part of the same strategy evaluation as route selection, then rerun fixed calm/deep/resonance and competent mixed policies under identical seeds and run counts. Track bank/run, collapse rate, mean depth and extraction depth. Only then should Executive accept or reject the reduced-compounding lever or move to the next narrow lever such as cross-route signal causality / chain persistence.

No `HUMAN_VERIFIED` fun claim exists yet.
