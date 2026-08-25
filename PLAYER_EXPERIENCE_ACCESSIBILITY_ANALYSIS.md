# Player Experience Accessibility Analysis

Updated: 2026-08-26 04:14 JST
Target: latest `main` ECHO DRIFT / HUMAN_CANDIDATE_01
Director: Player Experience Analysis Director

This is a focused delta discovered while `HUMAN_CANDIDATE_01` is frozen. It does **not** claim human play. It should be folded into `PLAYER_EXPERIENCE_ANALYSIS.md` by the next safe consolidation pass rather than expanded into a parallel analysis stream.

## Finding PX-12 — Small decision text plus disabled pinch zoom can make iPhone readability unnecessarily brittle

- Status: WATCH
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: `index.html` sets the viewport to `user-scalable=no`, preventing normal pinch zoom. At the same time, decision-relevant route hint text is `11px`, HUD/archive labels are `9px`, the eyebrow is `10px`, and the reset control is `11px`. Route hints can contain role text, EN cost, base gain, anomaly bonus, resonance bonus or calm recovery, while exact post-choice threat is shown beside them. On an iPhone, a player who needs larger text cannot compensate by zooming, and the densest/most strategic information is among the smallest text on screen. Static inspection cannot establish whether the current sizes are comfortable on the target device, but disabling user zoom removes a standard recovery mechanism if they are not.
- Recommended Action: Preserve `HUMAN_CANDIDATE_01`; do not move the frozen feel-test target for this alone. During actual iPhone verification, observe whether route hints or archive/HUD labels require squinting or repeated rereading. After the candidate, unless a concrete gameplay reason requires otherwise, prefer restoring user zoom and then test modestly larger decision text before redesigning layout. Treat this as readability/accessibility and rule-comprehension quality, not as a request for more UI.

## Current PX conclusion

The core human-test package remains unchanged: decision tension, failure ownership, and immediate replay desire. PX-12 is a usability observation only and must not become a fourth fun question. The candidate remains suitable for focused human testing; `HUMAN_VERIFIED` Player Experience evidence is still absent.
