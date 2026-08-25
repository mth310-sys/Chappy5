# Game Systems Finding GS-012 — reduced resonance compounding restores room for mixed future-aware play

Updated: 2026-08-26
Director: Game Systems Analysis Director
Target: latest `main` ECHO DRIFT / preserved `HUMAN_CANDIDATE_01`

- Status: CANDIDATE_SUPPORTED_NOT_CLEARED
- Severity(1-5): 4
- Confidence: MEDIUM-HIGH
- Verification Type: OBSERVED + CALCULATED + SIMULATED
- Evidence: Latest production `game.js` still uses resonance continuation bonus `1 + chainLen*2`. GS-011 established that this creates about 5 expected haul per post-chain resonance choice before anomaly, roughly 2.5 haul/EN, while deep averages about 4.5 haul/choice and about 1.8 haul/EN with +3 route risk. EX-012 proposed the narrow candidate `1 + chainLen` without changing any other route values. This Systems pass independently recreated current production route generation, Energy, anomaly, Threat, extraction multiplier, chain-loss behavior and stopping comparison, then compared the production slope (`2`) against candidate slope (`1`) under the same seeded harness. With seed 101, production slope results were approximately: fixed resonance 11.89 bank/run, one-step adaptive 11.02, and a bounded one-future-choice rollout 12.04 with route mix calm/deep/resonance ≈20.1/31.2/48.6%. Under slope 1, the same harness produced fixed resonance ≈10.40, one-step adaptive ≈10.69, and bounded rollout ≈11.03 with route mix ≈23.7/37.3/39.0%. The bounded rollout used fewer runs than fixed/adaptive because it performs nested simulation, so exact decimal gaps are exploratory rather than production-grade confidence. Directionally, it independently reproduces EX-012: halving only the compounding slope removes the obvious fixed-resonance advantage and allows a future-aware mixed policy to outperform fixed resonance.
- Finding: Resonance dominance is sensitive to the compounding coefficient rather than requiring a broad route rebalance. The narrow `1 + chainLen` candidate appears to preserve resonance as an important stateful route while reducing the incentive to stay on resonance regardless of alternatives. In the independent probe, future-aware play still selected resonance most often, but no longer near-exclusive: calm and deep recovered meaningful shares and the mixed policy beat fixed resonance.
- Impact: This is a materially better intervention shape than globally nerfing resonance base gain or buffing calm/deep. It targets the future-value runaway identified by GS-011 while preserving the existing local route identities: deep can remain early cash acceleration, calm can remain high-Threat recovery, and resonance can remain chain-oriented. It also reduces the risk that future progression simply amplifies a resonance-first doctrine.
- Recommended Action: Do not change `HUMAN_CANDIDATE_01` in this Systems pass. Promote reduced compounding slope to the first controlled balance candidate after Executive review. Before production adoption, move this comparison into a reproducible repository-side strategy harness and run multiple deterministic seeds with equal run counts/stopping rules for fixed calm, fixed deep, fixed resonance, one-step adaptive and bounded future-aware adaptive. Acceptance criterion should not be 33/33/33 usage; it should be that no simple fixed route clearly dominates a competent mixed future-aware policy while each route retains state-dependent value.
- Human Verification Needed: NO for the direction of the simulated balance lever. YES after adoption for whether weaker compounding still makes successful resonance chains feel rewarding and legible.

## Systems interpretation

GS-011 remains valid for production: the current `*2` compounding slope creates structural resonance pressure and strategic clearance remains blocked.

GS-012 adds the first independently supported narrow remedy. The evidence does **not** authorize production change by this specialist Director because the candidate changes the core reward curve and Executive has kept `HUMAN_CANDIDATE_01` frozen for comparison. It does establish that the next high-value engineering/analysis task is a reproducible deterministic strategy harness, not another broad balance pass or new content.
