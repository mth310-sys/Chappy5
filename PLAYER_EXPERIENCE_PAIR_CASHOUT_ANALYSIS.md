# Player Experience — Pair-Cashout Structural Candidate

Updated: 2026-08-26 19:15 JST
Target: latest `main` ECHO DRIFT / HUMAN_CANDIDATE_01 remains frozen
Director: Player Experience Analysis Director

This is a focused delta caused by GS-019. It does **not** claim human play. The 24-hour cutoff is imminent, so this update advances the existing finding rather than opening another PX branch.

## Finding PX-13 — Pair-cashout is ready for a Controlled Playable decision, not production clearance

- **Status:** CONTROLLED_PLAYABLE_WORTHY / EXECUTIVE_PROMOTION_REQUIRED / NOT_PRODUCTION_CLEARED
- **Severity(1-5):** 4
- **Confidence:** HIGH for the structural/held-out evidence; MEDIUM for predicted human experience
- **Verification Type:** OBSERVED + SIMULATED
- **HUMAN_VERIFIED:** No

### Evidence

GS-019 keeps the current first matching resonance reward beat (`+5`) but closes the matched chain immediately instead of carrying `chainLen=2` into future decisions. This changes resonance from long-chain growth toward a match-and-complete rhythm.

The base cohort (101/202/303/404) already showed pair-cashout future-aware **11.246950** > fixed resonance **11.139925** bank/Run, with calm/deep/resonance usage **9.75% / 42.53% / 47.72%**.

The independent held-out cohort (505/606/707/808) now replicates the aggregate direction: future-aware **11.202675** > fixed resonance **11.145000**, a **+0.057675 bank/Run (~+0.52%)** advantage. Its route mix remains almost identical at **9.70% / 42.47% / 47.83%**. This matters to PX because the candidate is not producing its gain by silently replacing resonance with another fixed route identity.

Robustness is not universal. Held-out future-aware wins only **2/4 seeds** and all measured seeds **5/8**. Held-out future-aware also collapses **52.5125%** versus fixed resonance **45.24%**. The candidate therefore remains a higher-risk contextual strategy, not a proven universally dominant policy or production-ready balance.

The major PX uncertainty is semantic, not numerical. Current resonance communicates a **growing chain**. Pair-cashout makes the first successful match a **pair completion / reward claimed** beat and then closes the state. If the existing `A×N / B×N / C×N` growth language or continuation framing is carried over unchanged, a successful match can plausibly feel like the game destroyed progress rather than completed it. No simulation can settle that.

The positive PX property is that the current first-match `+5` reward beat remains intact. The candidate therefore has a plausible path to preserve an immediate success moment while restoring a fresh three-route decision afterward, without coefficient micro-tuning.

### Recommended Action

Player Experience now supports **Executive promotion of exactly this one structure to a frozen Controlled Playable**, if Executive accepts the semantic shift from long-chain growth to pair completion. Do not promote it directly to production and do not add further balance variants before human evaluation.

If promoted, make only the minimum semantic/feedback alignment needed so the player is told by the interaction itself that a successful match **completes and cashes out a pair**. Do not preserve UI wording that promises continuing chain acceleration, and do not add a large explanatory subsystem.

Human verification should remain limited to two candidate-specific observations:

1. After the first successful signal match, does closure feel like a satisfying **pair completed / reward claimed** moment, or like unwanted destruction of a chain the player expected to keep building?
2. After completion, does the next calm/deep/resonance choice feel like a fresh meaningful decision, or does the player mainly wish the old chain had remained active?

Keep the existing production-candidate questions separate. Do not ask these pair-cashout questions on `HUMAN_CANDIDATE_01`, because the structure is not present there.

### Cutoff recommendation

Because the experiment cutoff is imminent, PX recommends **no additional PX-only candidate generation or coefficient tuning in this trial**. The highest-value next step is an Executive go/no-go on one frozen pair-cashout Controlled Playable, followed by actual human play outside the expired trial if continuation is approved.

## Current PX conclusion

Held-out aggregate replication removes the previous PX reason to wait for more Systems robustness before considering human evaluation. Pair-cashout is now the strongest candidate for a Controlled Playable because it preserves a clear first-match reward beat, restores aggregate mixed strategy on an independent cohort, and yields a distinct player-facing rhythm that can be tested with only two focused human observations.

It is **not** production-cleared. Seed-level results remain mixed, the contextual policy carries materially higher collapse risk, and there is still no `HUMAN_VERIFIED` evidence that pair completion is satisfying, clearer, or more replayable than the current long-chain fantasy.