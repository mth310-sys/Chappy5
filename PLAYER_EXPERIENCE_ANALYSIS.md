# Player Experience Analysis

Updated: 2026-08-25 21:15 JST
Target: latest `main` ECHO DRIFT
Director: Player Experience Analysis Director

This document records predicted player experience from code/UI inspection. It does **not** claim human play. Unless explicitly backed by a human report, subjective experience findings remain `SIMULATED`.

## Finding PX-01 — Visible anomalies improve agency, but the consequence of a tap is still hard to predict

- Status: WARNING
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Route cards now reveal anomaly state before selection, including its salvage bonus and `脅威+7`, and the route-specific number is correctly labeled `脅威補正`. However `chooseRoute()` then also adds the new depth × 1.4 to threat before rolling collapse. The player sees current Threat plus several modifiers but not the actual post-choice collapse chance.
- Recommended Action: Executive should explicitly decide whether exact next-step danger is intended knowledge. If risk comparison is supposed to be strategic, prefer showing one projected post-choice threat value rather than asking the player to mentally combine current threat, route modifier, anomaly modifier and depth escalation. If uncertainty is intentional, keep it and later HUMAN_VERIFY whether collapse feels suspenseful rather than arbitrary. Do not add tutorial prose.

## Finding PX-02 — The three route identities are described clearly, but experienced behavior may contradict their promise

- Status: WARNING
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: The cards promise `静かな反響 = 低消費・低回収 / 崩壊を抑える`, `深層パルス = 高消費・高回収`, and `共鳴追跡 = 同系統を繋ぐと回収倍率が伸びる`. Systems analysis shows calm ceases to reduce absolute threat from depth 3 onward and an adaptive economic policy selects deep about 85.1% of steps while chain-advancing resonance is about 1.6% of all steps.
- Recommended Action: Treat this as a player-expectation problem as well as balance. Do not rewrite the labels to excuse weak identities. Executive/Systems should make the actual play fulfill the existing readable promises: calm should become meaningfully attractive in danger if it is the safety route, and resonance should create a noticeable reason to preserve a chain.

## Finding PX-03 — The core interaction is thumb-friendly in shape, but vertical attention travel may slow repeated decisions

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: SIMULATED
- Evidence: Portrait layout, full-width route buttons, `viewport-fit=cover`, safe-area padding, `100dvh`, and large action buttons are appropriate for iPhone. But each decision asks the eye to relate HUD values at the top, a 205px radar in the middle, route math below it, then the extraction action below the routes. The radar shrinks to 150px only below 700px viewport height.
- Recommended Action: Do not redesign from static inspection. Preserve the current layout until real iPhone verification, but when a human-test build is frozen explicitly verify whether the player can compare a route and the extraction option without repeated scrolling or losing the current Threat/Haul context.

## Finding PX-04 — Radar creates identity but still does not deliver the reward event

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: SIMULATED
- Evidence: The animated radar is the dominant visual element and now gives the visible anomaly mechanic a strong thematic place conceptually, yet code only changes its center threat label/percentage. Route selection, resonance continuation, anomaly contact, discovery, successful extraction and collapse are communicated mainly through changing numbers and log text.
- Recommended Action: Once Executive settles the current risk/reward structure, use the existing radar as the first feedback surface rather than adding another UI system: a short state reaction for a chosen signal, anomaly, extraction success or collapse could make the same decisions feel like events. This remains a candidate, not a claim that animation will make the game fun.

## Finding PX-05 — First-run action is understandable; replay purpose remains mechanically weak

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: `潜航開始`, the three route cards and `回収して帰還` provide a learnable immediate loop without a tutorial. Persistent `累計回収`, `潜航回数`, and `発見記録` are visible, but banked salvage currently has no gameplay use and discoveries do not alter the next run.
- Recommended Action: Do not explain purpose with lore or onboarding copy before purpose exists mechanically. Progression/Executive should eventually make at least one persistent result change a future decision, then Player Experience should reassess whether the reason for another run becomes legible through play.

## Finding PX-06 — Human test should still wait for the current structural contradiction to be reduced

- Status: PASS
- Severity(1-5): 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Systems has fresh evidence that visible-state optimization still converges on shallow extraction and deep dominance. These are AI-detectable structural issues, while README requires focused human judgment after such issues are reduced.
- Recommended Action: Do not spend the first human playtest on known balance contradictions. When Executive freezes a candidate build, limit the human check to: (1) did continue-vs-extract create genuine hesitation at more than one point, (2) did choosing a route and successfully extracting feel satisfying rather than merely readable, (3) after a run ended did the player want to start another immediately? Also record thumb reach/scroll friction as an iPhone usability observation rather than adding a broad fourth subjective question.

## Current Player Experience summary

- clarity: WARNING — anomaly visibility is a meaningful improvement; exact consequence prediction remains cognitively expensive.
- control_friction: UNKNOWN/WARNING — geometry is promising, real iPhone/Safari behavior remains unverified.
- information_load: WARNING — only a few state values exist, but they are spatially separated and route consequence requires mental composition.
- tempo: WARNING — actions are mechanically short; reward/event feedback remains predominantly numerical.
- feedback_quality: WARNING — strong atmospheric surface, weak action-specific sensory response.
- predicted_reward_feel: WARNING / SIMULATED — banking is legible but not yet strongly expressed or strategically persistent.
- predicted_replay_motivation: WARNING / SIMULATED — short runs support repetition, but current shallow/deep dominance and weak meta-purpose threaten sustained curiosity.
- predicted_dropoff_risk: WARNING / SIMULATED — likely after the player decodes a dominant early-return rhythm or realizes permanent counters do not yet change play.

No `HUMAN_VERIFIED` Player Experience finding exists yet.
