# SYSTEMS FINDING GS-013 — Joint route/extraction benchmark exposes an early-return attractor

- Director: Game Systems Analysis Director
- Status: BLOCKED_STRATEGY_CLEARANCE / NEW_EXTRACTION_ATTRACTOR
- Severity: 4
- Confidence: HIGH for measured benchmark result; MEDIUM for design conclusion
- Verification Type: OBSERVED + SIMULATED

## Finding

The previous deterministic benchmark compared route policies while forcing every policy to use the same voluntary-extraction rule (`Threat >= 55`). That confounded route quality with a shared return policy. The benchmark now sweeps voluntary-extraction thresholds independently for each route policy.

This removes the specific `55`-threshold confound, but exposes a more important structural result: among the tested thresholds `25 / 35 / 45 / 55 / 65 / 75 / never`, **Threat 25 is the best bank-per-run extraction threshold for every tested route policy under both production resonance slope 2 and candidate slope 1**.

Therefore the current strategic problem is not only “which route wins?” The continue/return side of the core loop itself currently shows a strong fixed early-return attractor in this benchmark.

## Evidence

Deterministic CI benchmark: 4 fixed seeds (`101/202/303/404`) × 10,000 runs per seed, same route-generation and stopping model for every compared threshold. GitHub Actions regression run `32913230233` completed successfully, including the deterministic state regression and strategy benchmark.

### Production resonance slope = 2 — best threshold for every tested policy: 25

- fixed calm: `10.0977 bank/run`, collapse `59.04%`, mean end depth `5.05`
- fixed deep: `8.8313 bank/run`, collapse `56.42%`, mean end depth `2.91`
- fixed resonance: `11.5897 bank/run`, collapse `55.15%`, mean end depth `3.52`
- one-step: `10.4949 bank/run`, collapse `55.02%`, mean end depth `2.91`
- future-aware: `11.4975 bank/run`, collapse `55.07%`, mean end depth `3.08`

With extraction policy no longer fixed at 55, production fixed-resonance still leads the tested policies, but its lead over future-aware is narrow (`~0.0922 bank/run`, under 1%). This is not enough to declare the route system strategically cleared, because the tested future-aware policy is only an approximation and the benchmark model is not HUMAN_VERIFIED play.

### Candidate resonance slope = 1 — best threshold for every tested policy: 25

- fixed calm: `10.0977 bank/run`
- fixed deep: `8.8313 bank/run`
- fixed resonance: `10.2951 bank/run`
- one-step: `10.2779 bank/run`
- future-aware: `10.3362 bank/run`

The slope-1 candidate now gives future-aware the highest measured bank/run, but only by `~0.0411` over fixed resonance and `~0.0583` over one-step. That margin is too small to justify production adoption by itself.

### Extraction-policy sensitivity

For production future-aware:
- threshold 25: `11.4975 bank/run`, collapse `55.07%`
- threshold 35: `10.4053`, collapse `70.54%`
- threshold 45: `9.1623`, collapse `76.50%`
- threshold 55: `8.6414`, collapse `77.99%`
- never: `8.5380`, collapse `78.18%`

For production fixed resonance:
- threshold 25: `11.5897 bank/run`, collapse `55.15%`
- threshold 35: `10.0684`, collapse `67.79%`
- threshold 55: `9.3830`, collapse `70.20%`
- never: `9.3418`, collapse `70.28%`

The return-policy choice materially changes both yield and collapse rate. The former shared threshold 55 was therefore a major evaluation confound.

## Interpretation

The current system contains two linked strategic pressures:

1. Production resonance compounding still makes resonance extremely competitive once extraction timing is allowed to adapt.
2. More importantly, the tested extraction policy converges to the earliest threshold in the sweep (`25`) across every route policy. That suggests the current continue/return decision may itself collapse toward “secure the haul as soon as the run becomes UNSTABLE,” rather than remaining a meaningful state-dependent push-your-luck choice.

This benchmark does **not** prove that a human player should always return at exactly 25. The tested policy class is a simple global threshold and does not condition return decisions on haul size, Energy, chain state, anomaly opportunity, offered routes, or projected next-step values. The result is SIMULATED, not HUMAN_VERIFIED.

However, because every tested route strategy independently selects the same lowest threshold, Systems should treat extraction-policy degeneracy as a first-class balance risk rather than only a benchmark artifact.

## Recommended Action

Do not modify production resonance yet and do not clear the slope-1 candidate yet.

Next Systems priority should be one narrow extension of the same deterministic harness: compare a **state-conditioned extraction policy** against the fixed threshold family. At minimum, extraction value should be allowed to depend on current secured bank, haul, Energy, Threat, active chain value, and the visible next three routes. The objective is to determine whether rational play produces multiple meaningful continue/return states or still collapses toward early extraction.

If state-conditioned return play still overwhelmingly extracts near Threat 25, Executive should treat the return-reward/risk curve as the structural tuning target before adding progression or more route content. If state-conditioned play produces materially different return timings depending on state, then the current push-your-luck loop may still be strategically sound and the remaining question returns to resonance balance.

No production gameplay values were changed in this Systems run.
