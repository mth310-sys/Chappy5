# Player Experience Analysis

Updated: 2026-08-25 20:14 JST
Target: latest `main` after `65f6ac8`
Director: Player Experience Analysis Director

This document records predicted player experience from code/UI inspection. It does **not** claim human play. Unless explicitly backed by a human report, subjective experience findings remain `SIMULATED`.

## Finding PX-01 — Core choice is readable, but consequence prediction is still partially opaque

- director: Player Experience Analysis Director
- status: WARNING
- severity: 4
- confidence: HIGH
- verification: OBSERVED + SIMULATED
- finding: The screen exposes current Threat, Energy, Haul and Resonance and each route exposes Energy cost, base gain and route identity. However the previous bare `-3% / +3% / 0%` route label looked like an absolute collapse probability even though it is only one modifier inside the next threat calculation. This could make a collapse feel arbitrary or dishonest rather than tense.
- evidence: `game.js` applies anomaly +7, route `risk`, then `depth * 1.4` before rolling collapse against resulting `run.threat`. The route card previously rendered only `${risk}%`. Commit `65f6ac8` changes this to `脅威補正 ±N`, without changing mechanics.
- impact: Continue-vs-extract depends on trusting the risk information. Misreading a modifier as the actual chance would damage perceived fairness at the exact point where the game wants tension.
- recommended_action: Keep the clarified modifier label. Executive/Systems should decide later whether the game should expose a projected next-step threat, intentionally preserve some uncertainty, or redesign threat communication. Do not solve this with a long tutorial paragraph.
- human_verification_needed: YES — later ask whether collapse felt like a consequence of a risk the player knowingly accepted, rather than an unexplained punishment.
- last_updated: 2026-08-25 / `65f6ac8`

## Finding PX-02 — One-thumb interaction geometry is promising, but real iPhone comfort is unverified

- director: Player Experience Analysis Director
- status: WARNING
- severity: 3
- confidence: MEDIUM
- verification: SIMULATED
- finding: The active decisions are three full-width route buttons followed by two large action buttons in a portrait layout, which should be compatible with thumb-driven play. The layout also uses `viewport-fit=cover`, safe-area insets, `100dvh`, and a reduced radar at heights below 700px. Real reachability and Safari viewport behavior are still unknown.
- evidence: `index.html` places route choices and extract/start controls in a single vertical flow. `style.css` caps the app at 430px, uses full-width route cards, 15px action padding, safe-area insets and `touch-action: manipulation`.
- impact: If the primary loop is comfortable one-handed, short repeat sessions fit the product goal. If the large radar and HUD force repeated vertical movement on actual iPhone Safari, the same loop can feel slower and more cumbersome than its mechanics warrant.
- recommended_action: Do not redesign from static inspection alone. Preserve the current compact portrait structure until an actual iPhone pass can verify whether route choices and `回収して帰還` remain comfortably visible/reachable during normal play.
- human_verification_needed: YES — later verify thumb reach, accidental taps, need to scroll, and whether `回収して帰還` is visible at the moment the player wants it.
- last_updated: 2026-08-25 / latest main

## Finding PX-03 — Visual hierarchy sells atmosphere before it sells the decision

- director: Player Experience Analysis Director
- status: WARNING
- severity: 3
- confidence: MEDIUM
- verification: SIMULATED
- finding: A 205px animated radar is the dominant visual object while the actual gameplay is textual route comparison. This gives ECHO DRIFT an immediate identity, but the radar currently communicates only current threat and does not visibly react to route identity, resonance, haul gain, discovery, success, or collapse.
- evidence: `style.css` dedicates a 205x205 circular animated region to `.radar`; `index.html` places it above mission choices. `game.js` updates its center label/percentage but feedback for gain, anomaly, discovery and collapse is primarily text/log state.
- impact: The game may be understood but feel administratively flat: tap a card, numbers change, repeat. That threatens predicted reward feel and the sense that the player is "diving" rather than operating a compact calculator. Conversely, removing the radar would sacrifice one of the few strong pieces of visual identity.
- recommended_action: Executive should treat the radar as a candidate feedback surface, not merely decoration. If the core loop survives structural testing, a small high-value next step would be state-reactive feedback (route pulse, collapse shock, successful extraction response) rather than adding more explanatory text or content.
- human_verification_needed: YES — later ask whether route taps and successful extraction feel satisfying, not merely understandable.
- last_updated: 2026-08-25 / latest main

## Finding PX-04 — First-run comprehension is adequate for action, weak for purpose

- director: Player Experience Analysis Director
- status: WARNING
- severity: 3
- confidence: MEDIUM
- verification: SIMULATED
- finding: The initial screen clearly offers `潜航開始`, and once started explicitly tells the player to choose one of three echoes. The immediate controls are learnable without a tutorial. But the first screen does not communicate what `累計回収`, `発見記録`, or the larger purpose of diving will eventually mean, and currently banked salvage has no gameplay use.
- evidence: Initial status is `信号海へ潜る準備ができた。`; persistent archive counters are visible from the start. Progression analysis independently observes that persistent salvage records play but does not yet alter future play.
- impact: A player can probably start quickly, but after understanding the loop may ask "what am I building toward?". This is a replay-motivation risk rather than an onboarding-text problem.
- recommended_action: Do not add lore/tutorial copy as a substitute. The Progression/Executive layer should eventually make at least one persistent result alter a future decision; Player Experience should then reassess whether the purpose becomes legible through play.
- human_verification_needed: YES — only after the progression layer gains actual meaning, verify whether the player understands why another run matters.
- last_updated: 2026-08-25 / latest main

## Finding PX-05 — Current human test should remain deferred until AI-detectable decision issues settle

- director: Player Experience Analysis Director
- status: PASS
- severity: 2
- confidence: HIGH
- verification: OBSERVED
- finding: There is already a playable core, but Systems has identified a possible fixed-depth extraction optimum and Progression has identified a non-functional persistent layer. Asking for broad fun feedback now risks spending scarce human judgment on issues the AI can still investigate structurally.
- evidence: `GAME_SYSTEMS_ANALYSIS.md` reports fixed-depth policy risk; `PROGRESSION_ANALYSIS.md` reports persistent values do not change future strategy; README requires AI-detectable issues to be reduced before focused human testing.
- impact: Deferring the human test briefly should produce a cleaner question: whether the improved decision loop actually creates tension, satisfaction and immediate replay desire.
- recommended_action: Continue AI-side analysis/targeted improvement. When Executive freezes a candidate human-test build, keep the test to three questions: (1) did continue-vs-extract create genuine hesitation, (2) did route taps/extraction feel satisfying, (3) after a run ended did you want to start another immediately?
- human_verification_needed: NO — this finding concerns test timing; the later hypotheses themselves require human verification.
- last_updated: 2026-08-25 / latest main

## Current Player Experience summary

- clarity: WARNING — immediate action is understandable; risk consequence communication was partially misleading and has received a small wording fix.
- control_friction: UNKNOWN/WARNING — static layout is thumb-oriented, real iPhone behavior unverified.
- information_load: PASS/WARNING — only a few core values are shown, but English/Japanese labels and route math still require actual first-time observation.
- tempo: WARNING — mechanically short actions; dominant decorative radar and text-first feedback may make perceived tempo flatter than intended.
- feedback_quality: WARNING — current state is readable, but action/reward feedback is mostly numerical/textual.
- predicted_reward_feel: WARNING / SIMULATED — banking salvage is clear but has limited sensory payoff and no strategic persistent use yet.
- predicted_replay_motivation: WARNING / SIMULATED — short runs support replay, but long-term purpose is not yet mechanically established.
- predicted_dropoff_risk: WARNING / SIMULATED — likely after the player understands the loop but before a meaningful persistent reason to continue appears.

No `HUMAN_VERIFIED` Player Experience finding exists yet.
