# H1 Gate B Failure — Post-Legibility Human Evidence

Date: 2026-08-25
Role: Product / Player Research Worker
Status: CONFIRMED HUMAN EVIDENCE + RESEARCH RECOMMENDATION
Authority: README.md remains highest authority.

## Ownership / conflict check

This Research Worker did not claim or modify Director-owned C5-007, Prototype-owned C5-008, implementation code, or README.md. This file is an independent research evidence artifact intended for Director integration.

## New confirmed evidence

### R-HF-004 — Comprehension improved, enjoyment did not
- Evidence class: CONFIRMED HUMAN FEEDBACK
- Human feedback: 「わかるようにはなった でも面白くない」
- Context: This feedback followed the bounded first-play legibility revision and a new human play session.
- Confirmed meaning: For this human tester, the revised experience became understandable enough to remove the prior primary comprehension complaint, while the core experience still failed to produce enjoyment.
- Evidence interpretation: Gate A (comprehension) has positive human evidence for this tester. Gate B (core payoff) fails.
- Limit: This is one human tester and does not establish population-level preference.

### R-HF-005 — Strong negative core-payoff verdict
- Evidence class: CONFIRMED HUMAN FEEDBACK
- Human feedback: 「全くもってつまらない」
- Confirmed meaning: The negative enjoyment verdict is emphatic and persists after comprehension improved.
- Confidence: HIGH that this tester rejects the current H1 experience on enjoyment. UNKNOWN which exact pleasure deficits dominate without further diagnostic questioning.
- Important distinction: This is no longer reasonably explained as a tutorial-only failure because R-HF-004 explicitly separates understanding from enjoyment.

## Gate result

### Gate A — Immediate comprehension
Result: **PASS FOR CURRENT HUMAN TESTER**.

Basis: R-HF-004 explicitly states that the game became understandable.

Caveat: This does not prove universal first-play comprehension, mobile runtime correctness on other devices, or CI success.

### Gate B — Core payoff
Result: **FAIL — STRONG**.

Basis: R-HF-004 states that the understandable build is not fun; R-HF-005 strengthens that verdict to 「全くもってつまらない」.

This is the exact failure mode anticipated by D-010 and the reject policy in the research test framework: comprehension repair did not rescue player value.

## Research conclusion

**RECOMMENDATION: REJECT H1 AS THE CURRENT LEAD PRODUCT HYPOTHESIS.**

Do not spend the next validation cycle on cosmetic polish, additional explanation, progression, economy, monetization, content volume, or audiovisual decoration intended to rescue the same core loop. Those additions would not directly test the demonstrated failure.

Preserve H1 and its evidence as a completed negative experiment. A future return to the broad chain-reaction space would require a materially different core interaction, not incremental polishing of this implementation.

This is a Research recommendation; formal product-status/backlog changes remain Director responsibility.

## What this evidence does NOT prove

- UNKNOWN: Whether H2 will be fun.
- UNKNOWN: Whether timing/risk is the tester's preferred game pleasure.
- UNKNOWN: Whether H3, H4, or another concept would outperform H2.
- UNKNOWN: Which specific H1 deficit (agency, tension, surprise, mastery, spectacle, pacing, fantasy, consequence, novelty, etc.) most caused boredom.
- UNKNOWN: Population-level market response.

Do not convert any of these unknowns into facts.

## Updated alternative-test requirement

The next prototype should not merely be easier to understand. It must expose a **felt decision** quickly enough to test Gate B directly.

For H2, retain the existing one-action timing/risk boundary, but judge it primarily on behavior after comprehension:
1. Does the player voluntarily retry?
2. Does the player intentionally change stopping timing on a retry?
3. Is there a visible/expressed anticipation moment before STOP?
4. Does success/failure feel attributable to the player's timing rather than arbitrary system behavior?
5. Does the player's qualitative verdict rise above merely 「わかる」?

A comprehension PASS with no voluntary replay or deliberate adjustment is still a Gate B FAIL and should not trigger expansion.

## Recommended next action

1. Director integrates R-HF-004/R-HF-005 and formally decides H1 lead status.
2. If no conflicting owner has appeared, Prototype Worker proceeds with the already queued bounded C5-009 H2 build in isolation.
3. Verification Worker independently checks H2 mechanics/fairness before public exposure.
4. Director authorizes switching the content behind the stable public play entry only after verification; do not make the human locate a new URL.
5. Human playtest H2 with minimal explanation and record Gate A and Gate B separately.

## Failures / unresolved items

- No additional causal interview was performed in this non-interactive run, so the exact source of boredom remains UNKNOWN.
- No claim is made that H2 is enjoyable; it remains HYPOTHESIS until played.
- Exact canonical stable public URL remains UNKNOWN in repository evidence.
- This Research Worker intentionally did not modify active Director/Prototype backlog ownership to avoid conflict.

## Handoff

The decisive new information is not another generic negative reaction: it is the sequence **understanding improved -> enjoyment still failed -> emphatic boredom**. Director should treat this as direct evidence that the bounded H1 legibility experiment served its diagnostic purpose and should not be mistaken for a product rescue.