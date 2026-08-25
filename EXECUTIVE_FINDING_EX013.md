# Executive Finding EX-013 — first narrow anti-dominance candidate is supported; production remains frozen pending reproducible clearance

Updated: 2026-08-26 07:24 JST
Director: Executive Game Director
Target: latest `main` ECHO DRIFT / preserved `HUMAN_CANDIDATE_01`

- Status: CANDIDATE_SUPPORTED / STRATEGIC_CLEARANCE_BLOCKED
- Severity(1-5): 4
- Confidence: MEDIUM-HIGH
- Verification Type: OBSERVED + CALCULATED + SIMULATED
- Evidence: Since EX-012, Systems independently reproduced the same directional result for the narrow resonance intervention. `GS-012` compared production compounding `1 + chainLen*2` against candidate `1 + chainLen` under the same seeded harness. Under production slope, its sampled fixed-resonance result was ≈11.89 bank/run and bounded future-aware play ≈12.04 with resonance ≈48.6% of selections. Under slope 1, fixed resonance fell to ≈10.40 while bounded future-aware play reached ≈11.03 with calm/deep/resonance ≈23.7/37.3/39.0%. Exact decimal gaps remain exploratory because nested rollout run counts were smaller, but the direction independently agrees with EX-012. `PX-015` adds the required player-experience gate: if the reduced slope is adopted, strategic health must improve without making resonance chains feel emotionally flat. Progression analysis also recommends avoiding permanent progression tied directly to route names while route values remain under active tuning. Technical `TQ-015` is now CI-verified PASS: malformed restored route sets are rejected and regression run `32903050802` completed successfully.
- Finding: The studio now has a credible first balance candidate, not merely a diagnosis. The smallest supported intervention is to reduce resonance continuation compounding rather than globally nerf resonance or buff the other routes. However, the evidence is still simulation-only and the comparison is not yet encoded as a repository-side reproducible strategy harness with equalized stopping rules/run counts. Therefore changing production now would move the human comparison target before the balance evidence is sufficiently reproducible.
- Product Impact: Holding production for one more analysis step protects two things at once: the current short-session human-feel candidate remains comparable, and the next gameplay change can be justified as a narrow correction to a demonstrated long-run dominance pressure rather than another broad rebalance. If the candidate clears, the next playable should specifically test whether resonance still feels like an accelerating chain while no simple fixed route dominates competent mixed play.
- Decision: Keep `HUMAN_CANDIDATE_01` unchanged. Do not add progression, route-specialized unlocks, content volume, lore volume, conventional stat shops, or unrelated polish. Promote the `1 + chainLen` resonance continuation slope to the **first controlled balance candidate** to be tested, but do not merge it into production until the strategy comparison is made reproducible in-repository across multiple deterministic seeds with a shared stopping rule.
- Current Highest Priority: Build/lock a repository-side deterministic strategy comparison that evaluates fixed calm, fixed deep, fixed resonance, one-step adaptive and bounded future-aware policies under identical production mechanics, seed sets and stopping rules. The acceptance criterion is not equal route usage; it is that no simple fixed route clearly dominates a competent mixed policy, while state-dependent route identities survive.
- Human Verification Needed: YES after a balance candidate is promoted to playable. The existing three short-session questions remain valid for `HUMAN_CANDIDATE_01`. For the reduced-compounding playable, add only one targeted comparison question: whether a successful resonance chain still feels like its recovery is accelerating.

## Director integration

### Game Systems
`GS-012` materially strengthens the reduced-compounding candidate and narrows the likely intervention surface. Production strategic clearance remains blocked until reproducible future-aware comparison is available.

### Player Experience
`PX-015` prevents a systems-only success criterion. A healthier economy that makes resonance feel flat is not a complete win; reward presentation should be adjusted before re-inflating the economy if this occurs.

### Progression & Content
Long-term progression remains blocked. The safer future direction is to anchor progression to player approaches/states (risk handling, chain handling, anomaly pursuit, extraction behavior) rather than hard-code permanent value into route names whose balance is still moving.

### Technical & Quality
`TQ-015` is now CI-verified PASS. The save-restore three-tone invariant is protected. Real iPhone/Safari lifecycle behavior and crash-atomic persistent settlement remain separate unresolved production-quality gates.

## Explicit non-decisions

- No claim that `1 + chainLen` is production-cleared.
- No claim that the game is HUMAN_VERIFIED fun.
- No progression implementation before core strategic clearance.
- No broad rebalance while one narrow candidate already addresses the measured pressure.
- No change to the frozen human candidate in this Executive pass.