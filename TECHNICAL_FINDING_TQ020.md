# TECHNICAL_FINDING_TQ020 — Decision-driving probes are covered by production parity guards

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: The current Executive/Systems decisions rely on several non-production deterministic probes that duplicate production economy/state rules instead of importing them directly from `game.js`: `tests/strategy-benchmark.mjs`, `tests/high-chain-probe.mjs`, `tests/active-chain-switch-probe.mjs`, `tests/active-chain-branch-probe.mjs`, and `tests/chain-exit-rule-probe.mjs`. That duplication is intentional while `HUMAN_CANDIDATE_01` remains frozen, but without a parity guard a production-rule change could leave a decision-driving probe stale while CI still passed. `tests/strategy-parity.mjs` now guards the production-critical common rules used by these probes: route cost/gain/risk templates, anomaly probability/reward curve, calm recovery, Threat formula/cap, partial EN payment, extraction multiplier, production resonance reward, and production non-resonance chain-break behavior where applicable. The active-chain/high-chain coverage was added in commit `44c4f50842e8b9b4a26f6126cff54c711e1eaffa`; the later chain-exit probe was added to the same guard in `10cb6a4486dc1c195421e091464d599fc2a36d59`. GitHub Actions `regression` for commit `10cb6a4486dc1c195421e091464d599fc2a36d59` completed successfully in run `32938098546`, so the parity declaration and all decision-driving probes executed successfully together.
- Recommended Action: Keep the parity guard narrow and decision-oriented. When a new non-production probe begins influencing Executive/Systems decisions, add only its production-common invariants to `strategy-parity.mjs`. Do not refactor the frozen playable into a shared simulation engine unless a concrete maintenance failure justifies it. Keep TQ-019 separate until the next Controlled Playable boundary because production route permutation still uses engine-dependent `Array.sort(()=>Math.random()-.5)` while deterministic probes use Fisher-Yates semantics.

## Verification boundary

This PASS does not prove that the probes reproduce every browser/runtime property of production, and it does not turn `SIMULATED` output into `HUMAN_VERIFIED` evidence. It establishes the narrower Technical guarantee that the declared duplicated numerical/state rules currently used for Executive balance decisions cannot drift silently without CI surfacing the mismatch.

Real iPhone/Safari lifecycle, touch, safe-area, reload/background restoration, and actual localStorage behavior remain `UNKNOWN / UNVERIFIED` until device-tested. Production gameplay, save format, UI, and `HUMAN_CANDIDATE_01` are unchanged by this finding.
