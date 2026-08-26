# TECHNICAL_FINDING_TQ019 — Production route shuffle is non-uniform and engine-dependent

- Status: WARNING
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Current production `game.js` builds the three offered route positions with `[...routeTemplates].sort(()=>Math.random()-.5)`. A random comparator is not a valid transitive ordering relation, so `Array.prototype.sort()` is not a uniform shuffle and the resulting permutation distribution may depend on the JavaScript engine's sorting implementation. The deterministic analysis harnesses already use an explicit seeded Fisher-Yates shuffle to remove fixed-order/tie bias. Therefore production route-position randomness and benchmark route-position randomness are not defined by the same algorithm even though both always contain exactly one calm/deep/resonance route.
- Recommended Action: Do not change the frozen `HUMAN_CANDIDATE_01` solely for code style. Before the next Controlled Playable or any balance decision that depends on route-position/tie behavior, replace production random-sort shuffling with a small explicit Fisher-Yates helper and extend parity/regression coverage so production and benchmark use the same permutation semantics. Re-run Safari/device checks after that change.

## Why this matters

This does **not** change the set of available choices: production always offers one route of each tone, so core route availability remains intact. The risk is positional distribution and reproducibility.

1. Human players can develop top/middle/bottom or first/second/third tap habits, so biased ordering can become a real UX/balance input even when route values are unchanged.
2. Mixed strategy probes resolve exact score ties by offered order. Technical previously fixed a deterministic fixed-order bias in TQ-017; leaving production on an engine-dependent random-sort algorithm means the real browser's tie/order distribution is still not described by the benchmark's Fisher-Yates model.
3. Node/V8 and Safari/JavaScriptCore are not required to realize the same permutation frequencies for an inconsistent comparator, so target-platform behavior can diverge without any source change.

No production file was changed in this finding because Executive is still holding `HUMAN_CANDIDATE_01` and the current active-chain strategy investigation does not require altering the human-feel target. This is a bounded technical debt item, not a justification for refactoring unrelated randomness.