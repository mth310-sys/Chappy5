# Chappy5 Business Validation Plan

Authority: `README.md` is highest. This plan does not authorize commercialization before product evidence supports it.

## Current gate

Status: **PRE-COMMERCIAL / PRODUCT VALIDATION FIRST**.

Confirmed evidence:
- Prototype 01 exists and has been played by the human owner.
- V-001 confirmed that the prior build's rules were not understood.
- V-002 is a bounded legibility revision; V-003 found no blocking source defect by static/logic inspection.
- Human comprehension and fun on V-002 remain UNKNOWN.
- Prior human feedback also judged the content itself disappointing; therefore a comprehension pass alone is insufficient to validate H1.

## Validation sequence

### Gate A — Comprehension
Proceed only after a new human playtest can, without a long external explanation:
1. state the objective in their own words;
2. identify the SOURCE → COLLECTOR flow;
3. explain at least one placed part's cause/effect;
4. understand why a run succeeded or failed;
5. retry intentionally.

Decision:
- PASS: continue to Gate B.
- FAIL: revise or reject the interaction before business expansion.

### Gate B — Core payoff
After comprehension is demonstrated, collect direct human evidence on whether the interaction is actually enjoyable enough to repeat.

Minimum evidence questions:
- Did the player voluntarily want another run after understanding the rules?
- Did changing a layout create a result that felt meaningfully different?
- Was there a moment of tension, surprise, satisfaction, or mastery worth preserving?
- Compared with the prior disappointing build, is the experience materially better, merely clearer, or still disappointing?

Decision:
- PASS: Director may authorize a small retention/shareability experiment.
- MIXED: compare H1 against an alternative concept before adding scope.
- FAIL: stop sunk-cost expansion and preserve H1 as failed evidence.

### Gate C — Repeatability / sharing
Only after Gates A and B pass. Test a minimal repeat session or shareable challenge without monetization complexity.

Candidate signals (HYPOTHESIS until tested):
- player returns for another session without being prompted to learn rules again;
- player wants to improve a score/layout;
- player can explain or show the game to another person;
- stable public entry point reduces test friction.

### Gate D — Commercial experiment
Only after the product survives the earlier gates. Monetization model, pricing, acquisition channel, and launch scope remain **UNKNOWN / UNSELECTED**. No revenue forecast should be treated as confirmed evidence before real market testing.

## Stop / continue discipline

Continue H1 only when new evidence reduces a major product risk. Do not use implementation volume, worker activity, or technical correctness as substitutes for player value.

Stop or pivot H1 when repeated human evidence shows that the core payoff remains disappointing after the player understands it, or when a bounded alternative produces clearly stronger evidence with lower scope cost.

## Stable public entry-point requirement

Human direction requires avoiding repeated URL discovery. Operations requirement:
- preserve one stable public play entry point across prototype revisions whenever technically possible;
- update the content behind that entry point rather than asking the tester to add a new home-screen shortcut for each revision;
- record the canonical public play URL in-repository once it is technically confirmed;
- do not invent or infer a URL and mark it confirmed without checking deployment evidence.

Current canonical public play URL: **UNKNOWN IN REPOSITORY**. The human has used a public URL successfully, but this file does not have repository evidence proving its exact canonical address or deployment configuration.

## Current operations action

Do not launch monetization or broad distribution. The highest-value operations support is to make the next human playtest low-friction and evidence-producing, preserve a stable entry point, and keep the business gate explicit so hourly execution does not accelerate an unvalidated concept.
