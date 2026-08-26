# Player Experience — Pair-Cashout Structural Candidate

Updated: 2026-08-26 18:12 JST
Target: latest `main` ECHO DRIFT / HUMAN_CANDIDATE_01 remains frozen
Director: Player Experience Analysis Director

This is a focused delta caused by GS-019. It does **not** claim human play and should be consolidated into `PLAYER_EXPERIENCE_ANALYSIS.md` at the next safe consolidation pass rather than expanded into a parallel analysis stream.

## Finding PX-13 — Pair-cashout may fix strategic lock-in by changing the resonance fantasy

- **Status:** PX_CANDIDATE_SUPPORTED_FOR_ROBUSTNESS_GATE / NOT_READY_FOR_HUMAN
- **Severity(1-5):** 4
- **Confidence:** HIGH for the structural difference; MEDIUM for predicted experience
- **Verification Type:** OBSERVED + SIMULATED
- **HUMAN_VERIFIED:** No

### Evidence

GS-019 keeps the current first matching resonance reward beat (`+5`) but closes the matched chain immediately instead of carrying `chainLen=2` into future decisions. In the deterministic full-run benchmark, production still favors fixed resonance (`12.038100` bank/Run) over future-aware (`11.659650`). Under pair-cashout, future-aware reaches `11.246950` versus fixed resonance `11.139925`, with a mixed route distribution of calm `9.75%`, deep `42.53%`, resonance `47.72%`. The contextual policy wins 3/4 measured seeds, not all four, so Systems correctly keeps the candidate out of production pending held-out robustness.

From Player Experience, this is not a small balance tweak. Current resonance communicates a **growing chain**: matching again both pays now and creates a stronger continuing state. Pair-cashout changes that mental model to a **pair completion / cashout beat**: match once, receive the satisfying +5, then the accumulated chain closes instead of visibly growing. That may be cleaner and may restore meaningful route switching, but it can also remove the anticipation of building a rare long streak. Simulation cannot determine which feeling is stronger.

The candidate therefore creates a specific semantic risk: if the existing UI still presents resonance as an accumulating `A×N / B×N / C×N` chain or describes it as continuing acceleration, a player may read successful matching as progress toward a longer chain and experience the automatic closure as arbitrary state loss. The structural candidate only becomes PX-coherent if the interface and feedback make **completion** rather than **broken continuation** the obvious interpretation.

The candidate also preserves an important positive property: the first successful match still has the current +5 reward beat. PX should not recommend weakening that reward merely to make the new semantics easier to explain; GS-018/EX-022 already showed that this first-match beat is strategically powerful, while removing it entirely risks flattening the most legible resonance success moment.

### Recommended Action

Do **not** modify production or `HUMAN_CANDIDATE_01` yet. Let Systems/Executive complete the held-out robustness gate first. If pair-cashout survives and is promoted to a Controlled Playable, Player Experience should require the smallest possible semantic/feedback alignment rather than adding another explanatory UI system.

For that future Controlled Playable, human verification should be limited to two candidate-specific observations:

1. After the first successful signal match, does the event feel like a satisfying **pair completed / reward claimed** moment, or like the game unexpectedly destroyed a chain the player wanted to keep building?
2. After that completion, is choosing calm/deep/resonance again perceived as a fresh meaningful decision, or does the player immediately wish the old chain had remained active?

Do not ask these questions on `HUMAN_CANDIDATE_01`, because pair-cashout is not present there. Keep the existing three core feel questions for the frozen production candidate.

## Current PX conclusion

GS-019 is the first recent structural candidate that is both strategically promising and easy to express as a distinct player-facing rhythm without coefficient tuning, but its benefit comes by changing resonance from **long-chain growth** toward **match-and-complete**. That is a design identity change, not merely a balance correction. PX therefore supports continuing the robustness test, but does **not** support production or human-candidate promotion until Systems robustness passes and Executive explicitly accepts that semantic shift.

There remains no `HUMAN_VERIFIED` evidence that pair-cashout is satisfying, clearer, or more replayable than current resonance.