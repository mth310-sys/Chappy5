# TECHNICAL_FINDING_TQ018 — High-chain probe RNG stream drift across simulated runs

- Status: FIXED_PENDING_CI
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `tests/high-chain-probe.mjs` previously created one RNG instance per `(seed, mode, policy)` and reused that stream across all 10,000 simulated runs. Because policies and reward modes can voluntarily extract or terminate at different steps, they consume different numbers of random draws. After the first divergent termination, every later run could therefore begin at a different RNG position across comparison arms. The probe comment claimed common RNG preservation, but this was only locally true for the chain-exit draw and not for later run boundaries. This matters because EX-017 is using small strategy deltas as a robustness gate.
- Recommended Action: Keep each simulated run independently seeded from the same `(base seed, run index)` mapping for every policy/reward mode. This preserves deterministic reproducibility and prevents one early branch-length difference from shifting the RNG starting point of every subsequent run. Treat prior EX-017 high-chain numerical deltas as requiring re-evaluation under this corrected probe before production or Controlled Playable promotion.

## Fix

Commit `e95339a758c5a9439bc4c465e86d141b2b426fc5` changes only the non-production probe. Each run now initializes its own deterministic RNG via `runSeed(baseSeed, runIndex)`. Production `game.js`, save data, UI, balance values and `HUMAN_CANDIDATE_01` are unchanged.

This does not make branching trajectories perfectly paired after policies choose different actions inside the same run; that is expected. It specifically removes cross-run contamination, so a different draw count in run N cannot alter the starting random state of run N+1 through run 10,000.

CI status is intentionally not promoted to PASS until the workflow for the corrected probe completes successfully.
