# Player Experience Analysis

Updated: 2026-08-25 22:14 JST
Target: latest `main` ECHO DRIFT
Director: Player Experience Analysis Director

This document records predicted player experience from code/UI inspection. It does **not** claim human play. Unless explicitly backed by a human report, subjective experience findings remain `SIMULATED`.

## Finding PX-01 — Route consequence is now directly readable

- Status: PASS
- Severity(1-5): 1
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Every route now displays `選択後脅威 N%`, calculated by the same `projectedThreat()` used for the subsequent collapse roll. Anomaly, depth escalation, route risk and calm recovery are therefore already composed into the number the player compares.
- Recommended Action: Preserve the single projected threat value. Do not reintroduce mental arithmetic through extra tutorial prose.

## Finding PX-02 — Route identities now better match their promise, but deep remains the predicted default experience

- Status: WARNING
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Calm now gets an additional -8 threat when current threat is 25+ and can genuinely function as recovery; resonance continuation now adds a visible chain reward. Systems' latest simulation nevertheless reports deep at about 83.0% of adaptive-policy choices, average ending depth about 2.62, resonance about 13.7%, and chain-advancing choices about 3.7%. The identities are more truthful than before, but a typical optimized run is still predicted to expose the player mostly to deep and shallow extraction.
- Recommended Action: Do not solve this with wording. Systems/Executive should make reaching later decision states occasionally rational before Player Experience treats the three-route promise as fulfilled.

## Finding PX-03 — Continue-versus-extract comparison lacked a direct reward number; small clarity fix applied

- Status: PASS
- Severity(1-5): 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Route cards expose immediate cost/gain and post-choice collapse chance, but the extraction action previously only said `回収して帰還` while actual banked value includes the depth multiplier. This made the core stop/continue decision asymmetric: the risky option had numbers while the safe option's payoff required inference. `projectedBank()` now uses the same formula as extraction and the action displays `回収して帰還 +N` while a live haul exists.
- Recommended Action: Preserve this direct safe-option payoff while Systems changes the reward curve. Reassess wording only if the extraction formula itself changes.

## Finding PX-04 — The core interaction is thumb-friendly in shape, but vertical attention travel remains unverified

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: SIMULATED
- Evidence: Portrait layout, full-width route buttons, `viewport-fit=cover`, safe-area padding, `100dvh`, and large action buttons are appropriate for iPhone. But each decision relates HUD values at the top, a large radar in the middle, route math below it, then the extraction action below the routes. The new `+N` extraction label improves comparison semantics but does not prove both options remain visible together on an actual iPhone viewport.
- Recommended Action: Do not redesign from static inspection. When a human-test build is frozen, verify whether route cards and extraction payoff can be compared without repeated scrolling or losing Threat/Haul context.

## Finding PX-05 — Radar creates identity but still does not make actions feel like events

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: SIMULATED
- Evidence: The animated radar is the dominant visual element, but runtime code only updates its threat label/percentage. Route selection, resonance continuation, anomaly contact, discovery, successful extraction and collapse are communicated mainly through numbers and log text.
- Recommended Action: Once Executive settles the current risk/reward structure, prefer a short reaction on the existing radar for important state changes rather than adding another UI system. This is a feedback hypothesis, not evidence that animation itself will make the game fun.

## Finding PX-06 — First-run action is understandable; replay purpose remains mechanically weak

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: `潜航開始`, three route cards, exact projected threat, and the now-explicit extraction payoff make the immediate loop increasingly self-explanatory without a tutorial. Persistent `累計回収`, `潜航回数`, and `発見記録` remain visible, but banked salvage has no gameplay use and discoveries do not alter the next run.
- Recommended Action: Do not manufacture purpose with lore or onboarding copy before purpose exists mechanically. Progression/Executive should eventually make at least one persistent result change a future decision, then reassess whether the reason for another run becomes legible through play.

## Finding PX-07 — Human test should still wait for shallow/deep convergence to be reduced

- Status: PASS
- Severity(1-5): 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Systems' newest evidence still predicts average ending depth around 2.62 and deep around 83.0% of adaptive choices. This remains an AI-detectable structural issue; README asks Directors to remove such issues before spending human judgment on subjective feel.
- Recommended Action: When Executive freezes a candidate build, limit the human check to: (1) did continue-vs-extract create genuine hesitation at more than one point, (2) did choosing a route and successfully extracting feel satisfying rather than merely readable, (3) after a run ended did the player want to start another immediately? Separately record thumb reach/scroll friction as an iPhone usability observation.

## Current Player Experience summary

- clarity: PASS/WARNING — next-route collapse chance and safe extraction payoff are now directly comparable; longer-term purpose remains unclear because it is not yet mechanical.
- control_friction: UNKNOWN/WARNING — geometry is promising, real iPhone/Safari behavior remains unverified.
- information_load: IMPROVED — route consequence and extraction payoff no longer require mental composition, though HUD/routes/actions are spatially separated.
- tempo: WARNING — actions are mechanically short; reward/event feedback remains predominantly numerical.
- feedback_quality: WARNING — strong atmospheric surface, weak action-specific sensory response.
- predicted_reward_feel: WARNING / SIMULATED — banking is clearer but not yet strongly expressed or strategically persistent.
- predicted_replay_motivation: WARNING / SIMULATED — short runs support repetition, but shallow/deep convergence and weak meta-purpose threaten sustained curiosity.
- predicted_dropoff_risk: WARNING / SIMULATED — likely after the player decodes a dominant early-return rhythm or realizes permanent counters do not yet change play.

No `HUMAN_VERIFIED` Player Experience finding exists yet.
