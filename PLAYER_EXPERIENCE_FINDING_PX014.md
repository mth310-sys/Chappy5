# Player Experience Finding PX-014 — first matching resonance continuation risks becoming a visible non-choice

Updated: 2026-08-26 17:12 JST
Target: latest `main` ECHO DRIFT / HUMAN_CANDIDATE_01
Director: Player Experience Analysis Director

- Status: WATCH_STRATEGIC_TRANSPARENCY / FIRST_MATCH_REWARD_AND_STATE_VALUE_IS_PX_BOUNDARY
- Severity(1-5): 4
- Confidence: HIGH for observed presentation/rule relationship; HIGH for measured causal direction; MEDIUM-HIGH for predicted experience impact
- Verification Type: OBSERVED + SIMULATED
- Evidence: Current production exposes the immediate resonance continuation bonus directly in the route presentation. The latest GS-018 common-RNG probe isolates 26,470 production-equivalent states where an active chain is only `chainLen=1` and the offered resonance signal matches it. Production is already strongly resonance-favored there: 2 decisions `switch - resonance = -3.67102` with switch wins 8.90% versus resonance wins 59.36%; 3 decisions `-3.89082`, switch 11.93% versus resonance 51.34%. Suppressing only the first immediate `+5` while still advancing to chainLen=2 changes the 2-decision mean to about `+0.12388` and the 3-decision mean to `-0.48028`; therefore the first visible reward is a major causal driver, not merely a mature-chain symptom. A single coarse `+3` candidate still leaves large resonance pressure (`-2.13691` / `-2.50748` over 2/3 decisions), so PX should not recommend coefficient micro-tuning. All measurements are SIMULATED, never HUMAN_VERIFIED.
- Player Experience Impact: This changes the likely UX failure mode. The main concern is no longer only that calm/deep can secretly lose a chain. At the first matching continuation, the interface can present three tappable routes while the visible `+5` plus resulting chain state makes resonance so dominant that a player who learns the system may stop experiencing the choice as a decision. That can damage perceived agency and make calm/deep look like novice traps exactly when the game visually celebrates a successful match. Conversely, deleting the first reward entirely could remove the clearest early resonance payoff and reduce the feeling that matching the signal mattered. The correct PX target is therefore not `make resonance weaker`; it is `retain a legible, satisfying first match without turning the first match into an obvious mandatory tap`.
- Recommended Action: Keep `HUMAN_CANDIDATE_01` frozen. Do not promote `+0`, `+3`, or any untested intermediate value from PX, and do not request a human A/B yet. Follow GS-018's next narrow diagnostic: with the immediate first-match reward suppressed equally, compare carrying `chainLen=2` versus preserving the signal but normalizing the carried state to `chainLen=1`. This separates reward feel from future-state lock-in. If most residual 3-decision pressure disappears when maturity is normalized, Executive should treat the first match as a combined reward/state transition and design a Controlled Playable that preserves a noticeable first-match feedback event while reducing its strategic lock-in. If the residual remains, stop reward-side PX speculation and wait for the next Systems decomposition. Do not solve the problem by hiding numbers or adding prose around an effectively mandatory choice.

## Human verification boundary

No new human test is requested on `HUMAN_CANDIDATE_01`; changing questions while the candidate is frozen would not resolve the causal uncertainty.

Only after Executive promotes a controlled first-match candidate should human verification add at most two focused checks:

1. On the first matching continuation, does resonance feel rewarding and understandable without feeling like the only sensible tap?
2. After seeing the same situation more than once, does the player still inspect calm/deep, or immediately choose resonance without comparing the alternatives?

Existing observations about unexplained calm/deep chain loss remain relevant but secondary to this newly confirmed first-match boundary. PX-014 does not claim that any replacement reward/state rule is more fun; it records a SIMULATED decision-dominance risk that must be resolved before asking humans to judge a candidate.