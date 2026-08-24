# Post-Playtest Research Synthesis — Prototype 01

Date: 2026-08-25
Role: Product / Player Research Worker
Authority: README.md remains highest authority.

## Purpose
Convert the latest direct human playtest feedback into durable product evidence and decision-ready research without treating hypotheses as facts.

## Confirmed human evidence

### R-HF-001 — Rules were not understood
- Evidence class: CONFIRMED HUMAN FEEDBACK
- Human feedback: 「ゲームプレイしたけどルールがよくわからん」
- Meaning: Prototype 01 failed immediate comprehension.
- Confidence: HIGH for the failure; exact causal UI/mechanic defects remain partly UNKNOWN.
- Existing canonical record: V-001 in `prototype/VALIDATION.md`.

### R-HF-002 — Content itself disappointed the player
- Evidence class: CONFIRMED HUMAN FEEDBACK
- Human feedback: 「正直言ってガッカリな内容」 after launching the public build from the phone home screen and playing it.
- Meaning: This is stronger than a legibility complaint. The first prototype did not merely fail to explain itself; the experienced content/hook was judged disappointing by the human owner.
- Confidence: HIGH that the negative evaluation exists. UNKNOWN which specific dimensions—fantasy, agency, audiovisual payoff, strategic depth, surprise, pacing, or novelty—were primarily responsible because no narrower diagnostic feedback has yet been collected.
- Product implication: Treating C5-008 (legibility repair) as sufficient to rescue H1 would be unsupported. A legibility revision may still be useful as a bounded diagnostic, but H1 must not be promoted or expanded merely because comprehension improves.

### R-HF-003 — Public play URL should remain fixed
- Evidence class: CONFIRMED HUMAN REQUIREMENT
- Human instruction: Repeatedly finding the public URL is burdensome; keep one stable play URL and update its contents rather than changing the address.
- Meaning: Mobile playtesting has a distribution-friction requirement. The existing home-screen shortcut should continue to resolve to the current test build whenever technically feasible.
- Confidence: HIGH.
- Product/operations implication: Stable URL continuity is part of the test infrastructure, not an optional convenience.

## Updated research interpretation

### CONFIRMED
1. Prototype 01 has failed first-play comprehension.
2. Prototype 01 has also failed the human owner's current qualitative content/hook expectation.
3. The owner is willing to access and play public builds on iPhone when the URL is convenient.
4. Stable URL continuity reduces test friction.

### INFERRED
1. The highest product risk is no longer only "can the player understand the chain-routing rules?" but "is the core interaction intrinsically worth another run once understood?"
2. Improving explanatory UI alone risks optimizing a concept that already produced a negative emotional response.
3. Future prototypes should be judged in two gates: comprehension first, then desire-to-replay / perceived payoff. Passing only one gate is insufficient.
4. A short, vivid interaction with obvious stakes and feedback is preferable for the next validation cycle because it exposes both gates quickly.

### UNKNOWN
1. Whether H1 would become enjoyable after a bounded redesign.
2. Which aspect of Prototype 01 most caused disappointment.
3. Whether the user prefers action, chance, collection, tactical choice, spectacle, competition, simulation, or another dominant pleasure.
4. Whether a second concept will outperform a repaired H1 without direct playtest evidence.

## Recommended validation policy

### Gate A — Immediate comprehension
A fresh build should let a player answer after one short run:
- What am I trying to do?
- What action did I take?
- Why did the result change?

Failure at Gate A => revise or reject before adding content.

### Gate B — Core payoff
After the goal is understood, ask only behaviorally meaningful questions:
- Did the player voluntarily retry without being prompted?
- Was there an obvious moment of anticipation, surprise, mastery, or payoff?
- Did the player want to change strategy/action for the next run?
- Did the player describe the experience as interesting/fun rather than merely understandable?

Failure at Gate B => do not polish or expand the same core loop by default. Compare against a new concept.

## Next-concept design constraints
These are research constraints, not final design decisions.

1. **One sentence goal.** The objective should fit in one short sentence visible in play.
2. **One primary action initially.** First interaction should not present three unexplained tools simultaneously.
3. **Result within seconds.** The first meaningful payoff should arrive quickly enough to connect action to consequence.
4. **Strong before/after contrast.** A player's choice should visibly alter the outcome.
5. **Readable failure.** Losing/failing should explain itself visually without requiring a help wall.
6. **Replay motive.** The player should have an immediate reason to try again: beat a visible threshold, choose a different risk, improve a route, time an action, or chase a surprising result.
7. **Mobile-first testability.** Interaction must remain comfortable from the existing iPhone home-screen shortcut.
8. **Stable public URL.** New builds should replace/update the content behind the established play URL instead of forcing the tester to find a new address.

## Three bounded directions for comparison
These are HYPOTHESES only. They are intentionally small enough to prototype quickly and should not be treated as approved products.

### H2 — Timing / risk microgame
- Core: One tap determines when to commit an escalating meter or moving target; waiting increases potential reward and failure risk.
- Why test it: Goal, action, anticipation, and outcome can be visible in seconds.
- Key risk: Could feel trivial if there is no meaningful second-order choice.
- Smallest test: One button, one moving/escalating state, one visible target/reward threshold, instant retry.

### H3 — Choose-one-of-three consequence game
- Core: Each short round presents three clearly different actions; the result immediately changes a persistent visible state for the next round.
- Why test it: Preserves choice while avoiding unexplained construction tools.
- Key risk: Choice may feel arbitrary if consequences are not learnable.
- Smallest test: 5 rounds, 3 choices each, one visible survival/score state, immediate consequence animation.

### H4 — Single-screen precision chain reaction
- Core: Player places or triggers exactly one object, then watches a large cascading physical/visual result and tries to improve it.
- Why test it: Retains part of the original chain-reaction fantasy but removes multi-part setup complexity.
- Key risk: Spectacle without agency may have low replay value.
- Smallest test: One placement/tap, one cascade, one score, instant retry.

## Research recommendation to Director
Do not interpret the current human feedback as merely a tutorial defect. Preserve Prototype 01 as failed evidence. Allow C5-008 only as a **bounded diagnostic legibility revision**, not as an assumption that H1 remains the preferred concept. In parallel, prepare one alternative smallest-test concept (H2/H3/H4) so the next human session can compare "repaired H1" against a genuinely different core interaction.

Suggested first alternative: **H2 timing / risk microgame**, because it minimizes rule burden and tests anticipation/payoff with the fewest moving parts. This is a recommendation, not a confirmed preference.

## Handoff
- Prototype Worker should not expand H1 scope beyond a bounded comprehension revision unless Director explicitly retains it after new evidence.
- Verification Worker should preserve V-001 and the new content/hook failure as unresolved until direct human retest.
- Operations Worker should treat stable public URL continuity as a test-infrastructure requirement.
- Director should decide whether to add a formal alternative-prototype backlog item and whether C5-008 remains P0 or becomes a diagnostic side-by-side test.
