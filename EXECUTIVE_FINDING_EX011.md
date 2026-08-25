# Executive Finding EX-011 — Strategic clearance re-opened by resonance future-value evidence

Updated: 2026-08-26 05:26 JST
Director: Executive Game Director
Target: latest `main` ECHO DRIFT / `HUMAN_CANDIDATE_01`

- Status: INVESTIGATE_BEFORE_STRATEGIC_CLEARANCE
- Severity(1-5): 4
- Confidence: MEDIUM-HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Latest main contains `SYSTEMS_FINDING_GS010.md`, which demonstrates that the previously used one-step adaptive benchmark underprices the future option value of an active resonance chain. Under the current production rules, GS-010 measured mean permanent bank about 10.95/run with about 53.48% collapse for the existing-style one-step adaptive policy versus about 12.13/run with about 46.52% collapse for a simple `always choose resonance when continuing` policy, with the direction reproduced across additional seeds. During this Executive pass, an independent same-rule Monte Carlo comparison also reproduced fixed-policy ordering at 100,000 runs: calm about 10.79 bank/run, deep about 8.94, resonance about 12.13, one-step adaptive about 10.95. A short-horizon rollout probe that explicitly sampled future states improved beyond the one-step adaptive benchmark and approached the resonance-fixed result, supporting the interpretation that the evaluation method—not only immediate route numbers—is central to the discrepancy. These additional Executive simulations are `SIMULATED`; they do not prove a globally optimal policy.
- Impact: The previous statement that the three-route economy is strategically clear enough for durable repeated play is no longer justified. State-conditioned route roles remain real—deep can be useful early, calm at higher threat, resonance with a chain—but a simple resonance-heavy policy may still dominate the long-run objective because it compounds future chain value while failing less. A positive short human session could therefore verify tension/replay feel without proving durable strategic diversity.
- Executive Decision: Keep `HUMAN_CANDIDATE_01` gameplay unchanged so the focused human-feel target remains comparable, but remove strategic-clearance language from the studio priority. The highest-value AI-resolvable task is now a stronger equal-footing policy comparison that explicitly prices future chain state: fixed calm, fixed deep, fixed resonance, current one-step adaptive, and a reproducible short-horizon rollout / approximate dynamic policy. Do not add progression or content on top of the core until this question is resolved or consciously accepted as an intentional resonance-centric design.
- Recommended Action: Systems should implement or retain a reproducible strategy probe against production rules, report bank/run, collapse, extraction mode, ending depth, route share, and chain-state behavior across several deterministic seeds, and determine whether a future-aware adaptive policy materially beats or meaningfully diversifies fixed resonance. If fixed resonance remains materially superior, revisit resonance chain reward/persistence or cross-route signal causality before progression. If future-aware adaptation overtakes fixed resonance while using multiple state-dependent routes, restore strategic clearance and proceed to focused human feel testing.
- Human Verification Needed: YES for feel only. NO for whether the current benchmark undervalues future chain value.

## Interpretation boundary for HUMAN_CANDIDATE_01

The candidate remains useful for three subjective questions only:
1. Does continue versus extraction create genuine hesitation?
2. Does collapse feel self-authored enough to invite another attempt rather than erase time?
3. Does a run ending create immediate replay desire?

Positive answers must not be treated as proof that route strategy remains diverse over repeated play. `HUMAN_VERIFIED: short-session feel` and `SIMULATED/OBSERVED: durable strategic economy` are separate claims.

## What is deliberately not changed in this pass

- No route gains, threat curve, anomaly reward, calm recovery, resonance reward, chain persistence, extraction multiplier, or route generation were changed.
- No progression system was added.
- No radar polish or content volume was added.

The goal is to preserve the evaluation target while resolving a Severity-4 AI-answerable strategic question before building long-term systems on top of it.
