# Player Experience Finding PX-014 — resonance exit cost is strategically important but visually hidden

Updated: 2026-08-26 14:10 JST
Target: latest `main` ECHO DRIFT / HUMAN_CANDIDATE_01
Director: Player Experience Analysis Director

- Status: WATCH_STRATEGIC_TRANSPARENCY / ACTIVE_CHAIN_SACRIFICE_NOT_LEGIBLE
- Severity(1-5): 4
- Confidence: HIGH for observed UI/rule mismatch; HIGH for measured structural relevance; MEDIUM-HIGH for predicted experience impact
- Verification Type: OBSERVED + SIMULATED
- Evidence: Current UI exposes immediate consequences unusually clearly: every route shows exact `選択後脅威`, rolled EN cost and base gain, anomaly bonus, calm recovery, and an immediate resonance continuation bonus when a resonance route matches the active signal. Yet when an active resonance chain exists and the player chooses calm or deep, `chooseRoute()` ignores the displayed A/B/C signal and performs an undisclosed 50% random check that can erase the entire chain. GS-016 now confirms that this hidden transition is not merely cosmetic. Across 105,401 SIMULATED active-chain states, one-step secured-bank EV preferred calm/deep over resonance in 52.76% of states, but adding only one minimal next-resonance option term flipped 21.30% of those apparent switches back to resonance. Mean minimal next-resonance option value was 1.9529 after resonance versus 0.9312 after calm/deep. Even when the offered resonance signal mismatched the active chain, 19.21% of locally attractive calm/deep switches flipped back after that minimal future chain value was counted. The reason is structural: resonance always leaves some active chain after the choice, while calm/deep can silently erase chain access entirely. These measurements are SIMULATED, never HUMAN_VERIFIED.
- Player Experience Impact: The current interface makes calm/deep look like decisions whose meaningful costs are visible on the card, while a strategically material future-state sacrifice remains hidden behind a coin flip. That creates two predicted failure modes. A learning player may interpret an erased chain as arbitrary punishment because the visible A/B/C signal did not cause it; an expert player may instead learn an undocumented insurance rule — “resonance always keeps me in a chain, calm/deep may throw it away” — and make decisions from hidden system knowledge rather than readable game state. GS-016 also makes the desired experience clearer: leaving resonance should be able to feel like a deliberate sacrifice for a locally attractive calm/deep opportunity, not an opaque tax discovered after tapping.
- Recommended Action: Keep `HUMAN_CANDIDATE_01` frozen and do not alter production from Player Experience alone. Systems should complete its planned 2–3 decision common-RNG branch comparison before Executive selects a structural rule. If robust profitable calm/deep switches survive after full short-horizon chain value is priced, improve the contextual decision model before changing production. If those switches largely disappear, prioritize a chain-preservation/sacrifice rule whose consequence is predictable before the tap. The existing A/B/C signal remains the strongest PX candidate for that causality because it is already shown on every route and in the active resonance HUD. Avoid solving the problem only with extra prose such as `50%で共鳴消失`; explanation would disclose the tax but would not turn it into a readable decision.

## Human verification boundary

No new general fun question is added. `HUMAN_CANDIDATE_01` remains unchanged. During existing human play, if a chain disappears after calm/deep, only note whether the player understood what caused the loss and whether it felt like a deliberate sacrifice or an unexplained punishment.

If a later controlled candidate replaces the hidden coin flip with visible causality, human verification should stay narrow:

1. Before tapping calm/deep with an active chain, can the player predict whether the chain will survive without tutorial prompting?
2. When calm/deep is attractive, does leaving resonance feel like a meaningful sacrifice rather than an obviously wrong move?

PX-014 does not claim that deterministic signal continuity, or any other preservation rule, is more fun. It records that GS-016 has now measured the hidden chain-renewal value as strategically material while production still does not expose that sacrifice in its otherwise explicit decision language.