# TECHNICAL_FINDING_TQ018 — High-chain probe RNG stream drift across simulated runs

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `tests/high-chain-probe.mjs` previously created one RNG instance per `(seed, mode, policy)` and reused that stream across all 10,000 simulated runs. Because policies and reward modes can voluntarily extract or terminate at different steps, they consume different numbers of random draws. After the first divergent termination, every later run could therefore begin at a different RNG position across comparison arms. Commit `e95339a758c5a9439bc4c465e86d141b2b426fc5` changed the non-production probe so each simulated Run receives its own deterministic seed derived from `(base seed, run index)`. GitHub Actions `ECHO DRIFT Regression` run `32927965054` completed successfully with state regression, parity guard, strategy benchmark and corrected high-chain probe all passing.
- Recommended Action: Keep per-Run seed isolation as a required benchmark invariant. Do not use pre-fix EX-017 numerical deltas as production or Controlled Playable clearance evidence.

## Fix and verification

Each run now initializes its own deterministic RNG via `runSeed(baseSeed, runIndex)`. Production `game.js`, save data, UI, balance values and `HUMAN_CANDIDATE_01` are unchanged.

This does not make branching trajectories perfectly paired after policies choose different actions inside the same run; that divergence is expected. It removes cross-run contamination, so a different draw count in run N cannot alter the starting random state of run N+1 through run 10,000.

The corrected probe materially changed the balance conclusion: the old EX-017 `+5` cap contextual advantage disappeared, confirming that this quality fix affected real Executive decision evidence rather than test aesthetics.