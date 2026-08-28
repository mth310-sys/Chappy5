# Case Study 03 — Sound & Experience Phase B Run 1 Handoff

> Target: メーシー「SLOT魔法少女まどか☆マギカ2」（2016） / `[777Real]SLOT魔法少女まどか☆マギカ2`
> Director: Sound & Experience
> Phase: `PHASE B — SMARTPHONE APP STUDY`
> Status: `RUN1_COMPLETE`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Reality Baseline: `NOT_COMPLETE`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## Research completed

Primary research:
- `docs/research/CASE_STUDY_03_MADOKA_MAGICA_2_SOUND_EXPERIENCE_PHASE_B_RUN1.md`

Phase A real-machine sound model remains the baseline; app behavior was not used retroactively to resolve cabinet unknowns.

## Strongest Phase B findings

1. `AUDIO ASSET FIDELITY ≠ ACOUSTIC EXPERIENCE FIDELITY.`
   Phone speaker/earphones, device volume and listening distance replace cabinet/hall acoustics even when source assets are preserved.

2. 777Real officially states that some titles require a paid `Custom Pack` to unlock songs/BGM/effects/voice-related sound. Exact Madoka Magica 2 gating remains `UNRESOLVED`.

3. Missing sound must be classified among machine silence, user sound setting, device mute/volume state and service entitlement before interpreting it as machine design.

4. Manual vs auto changes sound causality. In manual play a STOP cue can confirm the player's action; in auto it can become notification of an app-generated action.

5. Supported-title `ウェイトカット` shows that app options can preserve event order while changing audio timing grammar. Exact title availability remains unresolved.

6. `PUSHボタンバイブ` exists at platform level, but title-specific mapping is unresolved. It is not equivalent to cabinet low-frequency/body transmission.

7. Automation can reduce apparent fatigue by deleting human exposure. `SIMULATED AUDIO DURATION ≠ HUMAN-HEARD AUDIO DURATION.`

8. Service-wrapper feedback and machine feedback must retain separate semantic ownership.

9. The Phase A transition `ART HOME → BIG FOREGROUND → BIG RESOLUTION → ART RE-ANCHOR` remains a priority app test. Successful audible re-anchor means recovering both state identity and action duty.

10. Current 777Real official service requirements differ from older App Store compatibility notes: official service support currently states iOS 15.0+ and iPhone X+, while App Store compatibility can indicate a broader download condition. Later QA must preserve that distinction.

## Evidence discipline

Do not claim the following without installed-app observation/measurement:
- title-specific Custom Pack contents;
- exact tap-to-sound latency;
- title-specific sound slider/routing behavior;
- title-specific haptic mapping;
- exact phone speaker/earphone mix;
- low-frequency equivalence to real cabinet;
- exact BIG/ART transition audio fidelity;
- 100G/500G/3-hour manual-vs-auto fatigue.

App Store user reviews remain QA leads only and do not establish audio defects or rule differences.

## Handoff to Playtest & QA

Use the same installed-app/official-service distinction and test the app as an experience rather than as a list of preserved assets.

Priority QA questions:
- first 5 minutes: does touch→sound causality teach itself quickly?
- manual 100G: do routine touch/STOP sounds become tiring or remain low-cost?
- auto 100G/500G: how much human exposure and duty disappear?
- if wait-cut exists for this title, how does it change rhythm and perceived causality?
- can action-critical navigation still dominate BGM on phone playback?
- does BIG feel like a short foreground reward without cabinet scale?
- after BIG during ART, how quickly does the player acoustically know they are back in ART and what input responsibility has resumed?
- compare phone speaker and earphone listening where possible;
- distinguish service sound/UI interruptions from machine sound;
- verify whether Custom Pack changes audio completeness for this exact title before judging fidelity;
- do not infer cabinet SPL/frequency response from the app.

## Gate

`CURRENT_SHARED_OBJECT = CASE_STUDY_03`
`CURRENT_PHASE = PHASE_B_SMARTPHONE_APP_STUDY`
`CASE_STUDY_03_SOUND_EXPERIENCE_PHASE_B_RUN1_COMPLETE = TRUE`
`NEXT_FIXED_DIRECTOR = PLAYTEST_&_QA`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
