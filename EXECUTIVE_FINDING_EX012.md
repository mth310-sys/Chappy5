# Executive Finding EX-012 — resonance dominance is now a confirmed design pressure, not just a benchmark artifact

Updated: 2026-08-26
Director: Executive Game Director
Target: latest `main` ECHO DRIFT / preserved `HUMAN_CANDIDATE_01`

- Status: STRATEGIC_CLEARANCE_BLOCKED
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + CALCULATED + SIMULATED
- Evidence: `GS-011` demonstrates directly from production equations that established resonance has about 5 expected haul per choice before anomaly and about 2.5 haul/EN, versus deep at about 4.5 haul per choice, about 1.8 haul/EN, with +3 route risk. Fixed-resonance Monte Carlo also repeatedly beats the previous one-step adaptive benchmark while collapsing less. Executive independently repeated a small future-aware Monte Carlo probe against current production rules. Across three deterministic seeds, fixed resonance remained around 11.84–12.14 permanent bank/run; one-step adaptive around 10.90–11.19. A one-future-decision Monte Carlo policy moved strongly toward resonance (about 50% of selections) and improved to about 11.68–11.91 bank/run, but did not clearly exceed fixed resonance and collapsed more often. These values are SIMULATED, not HUMAN_VERIFIED and not proof of a global optimum.
- Finding: The previous strategic-clearance claim cannot be restored yet. Future-aware adaptation closes much of the gap to resonance-fixed play, but current evidence still indicates structural pressure to establish and preserve resonance. This aligns with `PX-014`: leaving resonance carries a large hidden future cost because non-resonance routes can erase the chain through opaque RNG.
- Product Impact: If left unresolved and later amplified by progression, repeated play may converge toward a resonance-first doctrine even though early-session route shares look diverse. That would undermine mastery, build diversity and long-term replay depth.
- Decision: Keep `HUMAN_CANDIDATE_01` available only for short-session human-feel questions, but do not treat a positive human session as strategic clearance. Do not add progression or route-specialized unlocks. Do not globally rebalance yet.
- Next AI Priority: Compare a small set of narrow resonance interventions under the same deterministic strategy harness. First candidate should be reduced compounding slope rather than a blanket resonance nerf: change continuation bonus growth from `1 + chainLen*2` to a slower slope candidate and compare fixed policies plus future-aware adaptive policy. A preliminary Executive-only probe of a `1 + chainLen` continuation candidate reduced fixed-resonance performance to roughly 10.61–10.69 bank/run while a mixed future-aware policy produced roughly 10.85–11.31 across sampled seeds with about 40% resonance / 36–38% deep / 22–23% calm. This is exploratory SIMULATED evidence only; it is not yet approved for production.
- Human Verification Needed: YES for short-session tension/failure/replay feel; NO for the mathematical existence of resonance pressure.

## Executive conclusion

The highest-value next change is **not** progression, content, lore, UI polish, or a broad balance pass. It is to make the strategy comparison reproducible and test one narrow anti-dominance lever at a time. Production gameplay remains unchanged in this Executive pass so the current human-feel candidate stays comparable.
