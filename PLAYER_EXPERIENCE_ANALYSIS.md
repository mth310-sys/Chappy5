# Player Experience Analysis

Updated: 2026-08-26 04:22 JST
Target: latest `main` ECHO DRIFT / HUMAN_CANDIDATE_01
Director: Player Experience Analysis Director

This document records predicted player experience from code/UI inspection and current Director evidence. It does **not** claim human play. Unless explicitly backed by a human report, subjective experience findings remain `SIMULATED`.

## Current consolidated findings

The existing PX-01 through PX-11 findings remain in force from the previous main revision. Their current Executive-relevant conclusions are:

- Immediate post-choice threat and extraction payoff are directly readable; the low-Energy partial-payment edge case remains a bounded rule/UI mismatch.
- State-conditioned Systems evidence supports distinct route jobs rather than a universal route: deep early, calm at higher threat/depth, resonance when a chain is active.
- The largest subjective unknown remains whether the simulated ≈53% collapse rate feels like self-authored greed or wasted time.
- The interaction may still feel clinical because most feedback is numerical/textual; do not add radar polish before the first human feel test.
- iPhone layout, thumb reach, scrolling, lifecycle and actual readability remain unverified on-device.
- Discovery can create a short early motivation spike but is not meaningful long-term progression.
- Persistent bank/runs/discoveries still do not alter future strategy.
- The candidate is ready for focused human evidence; further PX-only prediction has lower value.
- Final-energy partial payment can weaken rule trust if noticed.
- A/B/C signals teach cross-route meaning that calm/deep do not mechanically honor; hidden 50% chain survival remains the most important ordinary-play rule-coherence issue after the candidate.
- `記録初期化` understates that it also abandons a live dive; Technical has since fixed the broken idle UI state after such a reset, but the confirmation wording/scope mismatch remains.

## Finding PX-12 — Small decision text plus disabled pinch zoom can make iPhone readability unnecessarily brittle

- Status: WATCH
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: `index.html` sets the viewport to `user-scalable=no`, preventing normal pinch zoom. Decision-relevant route hint text is `11px`, HUD/archive labels are `9px`, the eyebrow is `10px`, and the reset control is `11px`. Route hints can contain role text, EN cost, base gain, anomaly bonus, resonance bonus or calm recovery, while exact post-choice threat is shown beside them. Static inspection cannot establish whether those sizes are comfortable on the target iPhone, but disabling user zoom removes a standard recovery mechanism if they are not.
- Recommended Action: Preserve `HUMAN_CANDIDATE_01`; do not move the frozen feel-test target for this alone. During actual iPhone verification, observe whether route hints or archive/HUD labels require squinting or repeated rereading. After the candidate, unless a concrete gameplay reason requires otherwise, prefer restoring user zoom and then test modestly larger decision text before redesigning layout.

## Current Player Experience conclusion

`HUMAN_CANDIDATE_01` remains suitable for focused human testing. No new PX evidence justifies reopening global balance or changing the frozen gameplay target.

This is **not** a claim that ECHO DRIFT is fun. There is still no `HUMAN_VERIFIED` Player Experience evidence.

### Focused human verification package

1. **Decision tension:** During several runs, did `continue` versus `回収して帰還 +N` make you genuinely hesitate more than once?
2. **Failure ownership:** After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt, or did it feel like the game erased your time?
3. **Immediate replay desire:** After either a successful return or a collapse, did you want to start the next run immediately?

Device/usability observations are not extra fun questions. On the actual iPhone, note whether scrolling, cramped route text, small decision text, thumb reach, safe-area behavior, reload restoration, background/foreground recovery, or disabled pinch zoom interferes with play. If remaining Energy is lower than a displayed route cost, note whether continued selectability is understood or surprising. If resonance is active, note whether the player expects a same-letter calm/deep route to preserve the chain or notices unexplained chain disappearance. If `記録初期化` is used during a live dive, note whether abandoning the active dive was expected from the confirmation wording.

If the core feel questions fail, preserve the negative `HUMAN_VERIFIED` result and diagnose before expanding progression. If they pass, the next major PX concerns are weak long-term replay purpose, emotionally clinical feedback, signal/chain causality, the low-Energy rule, destructive reset clarity, and actual iPhone readability/accessibility.