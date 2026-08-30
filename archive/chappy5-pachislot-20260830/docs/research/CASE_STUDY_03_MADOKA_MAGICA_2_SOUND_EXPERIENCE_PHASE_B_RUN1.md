# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Sound & Experience Phase B Run 1

> Director: Sound & Experience Director
> Phase: `PHASE B — SMARTPHONE APP STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Reality Baseline: `NOT_COMPLETE`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Shared app: `[777Real]SLOT魔法少女まどか☆マギカ2`

## 0. Scope and evidence discipline

Latest `main` is the sole source of project truth. Case Study 01 and Case Study 02 current cycles are closed. Case Study 03 is the current shared object and Machine Director has formally opened Phase B.

This pass studies **audio/experience translation from the Phase A real-machine baseline to the smartphone service/app context**. It does not use app behavior as proof of unresolved real-machine behavior and does not refine `SIGNAL / FORGE / VAULT`.

Evidence labels used here:
- `APP-SOURCED FACT` — official 777Real / App Store documentation.
- `PLATFORM FACT` — official 777Real behavior that may vary by title.
- `PUBLIC REVIEW LEAD` — uncontrolled user report; QA lead only.
- `REAL-MACHINE BASELINE` — established Phase A research retained from main.
- `TRANSLATION INTERPRETATION` — design reading, not claimed implementation detail.
- `REUSABLE PRINCIPLE` — abstract principle usable without copying protected IP.
- `UNRESOLVED` — not verified for this exact app/build/device.

No melody, voice line, signature effect or protected sound asset is reproduced.

---

## 1. Phase A acoustic baseline retained

### REAL-MACHINE BASELINE

Phase A established the following model for the 2016 machine:

- BIG is a short foreground reward while ART is a persistent state/background contract.
- player-selectable BIG notification style changes **certainty timing**, not merely cosmetic presentation.
- ART navigation is an intermittent action-duty cue layered over a persistent state soundtrack.
- special zones should spend acoustic intensity locally, then return to ordinary ART.
- `ART HOME → BIG FOREGROUND → BIG RESOLUTION → ART RE-ANCHOR` is a key repeated transition.
- exact speaker layout, frequency response, SPL, cabinet vibration and complete routine SE map remain unresolved.

Retained principles:

`PERSISTENT BGM MAY OWN MOOD; INTERMITTENT CUES MUST OWN ACTION TIMING.`

`A PARALLEL REWARD SHOULD HAVE AN AUDIBLE RETURN ADDRESS.`

`ATTENTION HIERARCHY > LOUDNESS HIERARCHY.`

Phase B asks which of these relationships survive after the cabinet is replaced by a phone, touch input and 777Real service layer.

---

## 2. Phone playback removes cabinet acoustics even when source audio is preserved

### APP-SOURCED / PLATFORM FACT

777Real officially instructs iOS users to check the device silent/mute state and physical volume controls when game sound is not reproduced. On supported titles the in-play menu also exposes sound-related settings; exact menu availability can differ by title.

Sources:
- 777Real FAQ — 楽曲・サウンドのボーカルがでない: https://faq.777real.net/hc/ja/articles/22219684771865
- 777Real FAQ — 楽曲・サウンドが再生されない: https://faq.777real.net/hc/ja/articles/22217832933145

### TRANSLATION INTERPRETATION

Even if the original digital assets are preserved, the acoustic event arrives through a radically different system:

`CABINET DRIVERS + CABINET BODY + HALL AIR + SEATED DISTANCE`

becomes

`PHONE SPEAKER / EARPHONES + DEVICE VOLUME + HANDHELD DISTANCE + USER ENVIRONMENT`.

This means source-asset fidelity and experienced acoustic fidelity must be scored separately.

### REUSABLE PRINCIPLE

`AUDIO ASSET FIDELITY ≠ ACOUSTIC EXPERIENCE FIDELITY.`

A faithful sound file does not preserve cabinet radiation, low-frequency body coupling, hall masking or physical source location.

---

## 3. The app can add an audio-access gate that did not exist in the cabinet

### PLATFORM FACT

777Real states that **some pachinko/pachislot apps require purchase/unlock of a Custom Pack for songs, BGM and sound effects/voice-related playback**. The pack requires paid Valus; tutorial play does not allow unlock until after settlement.

Sources:
- https://faq.777real.net/hc/ja/articles/22219684771865
- https://faq.777real.net/hc/ja/articles/22217832933145

### UNRESOLVED

This pass did not find authoritative title-specific documentation proving exactly which audio layers of `[777Real]SLOT魔法少女まどか☆マギカ2` are gated, or whether all cited categories apply to this exact title/build.

### TRANSLATION INTERPRETATION

This is a major translation variable. In the real cabinet, sound availability is part of the machine state. In a service app, some audio may additionally depend on a **service entitlement state**.

The experience graph can therefore become:

`MACHINE STATE × USER AUDIO SETTINGS × DEVICE MUTE/VOLUME × SERVICE ENTITLEMENT`.

That fourth axis is not part of the original A+ART design.

### REUSABLE PRINCIPLE

`WHEN AUDIO AVAILABILITY DEPENDS ON A SERVICE ENTITLEMENT, AUDIO FIDELITY BECOMES A PRODUCT-STATE VARIABLE, NOT ONLY A MACHINE-STATE VARIABLE.`

and

`MISSING AUDIO MUST BE CLASSIFIED AS MACHINE SILENCE, USER SETTING, DEVICE STATE, OR SERVICE GATING BEFORE IT IS INTERPRETED AS DESIGN.`

---

## 4. Touch removes the mechanical cause chain behind STOP sound

### PLATFORM FACT

777Real's pachislot operation documentation, already retained by Phase B Game & Reel, establishes manual touch play and auto play. Auto can perform BET and reel stopping and follow order navigation. The service option documentation also lists `ウェイトカット`, which can remove the interval from lever action to reel rotation on titles where the option is exposed.

Source:
- 777Real FAQ — オプション: https://faq.777real.net/hc/ja/articles/22217884852633
- Phase B Game & Reel Run 1 on main.

### REAL-MACHINE BASELINE

The real machine has a stable physical lever / MAX BET / three-STOP body map. Audio is experienced after a physical action against a dedicated control surface.

### TRANSLATION INTERPRETATION

On phone, a STOP event may retain visual and audio confirmation while losing:
- mechanical button travel;
- finger impact against a discrete button;
- cabinet-localized response;
- the same pre-stop motor/hand preparation.

The sound therefore carries more of the causal burden.

If auto mode performs the stop, the same STOP sound no longer confirms **my action**; it confirms **the simulation's action**.

### REUSABLE PRINCIPLE

`THE SAME STOP SOUND CAN CHANGE MEANING FROM ACTION CONFIRMATION TO EVENT NOTIFICATION WHEN INPUT IS DELEGATED.`

and

`CAUSAL AUDIO FIDELITY DEPENDS ON WHO CAUSED THE EVENT, NOT ONLY ON WHETHER THE EVENT SOUNDS CORRECT.`

---

## 5. Wait-cut changes the timing grammar, not just session speed

### PLATFORM FACT

777Real documents a `ウェイトカット` option on supported machine apps: when ON, it cuts the time between lever operation and reel rotation. Availability varies by machine app.

Source:
- https://faq.777real.net/hc/ja/articles/22217884852633

### UNRESOLVED

Exact availability and timing reduction for this exact Madoka Magica 2 build were not verified in this pass.

### TRANSLATION INTERPRETATION

The Phase A sound model treated timing as semantic. Removing wait can compress:

`INPUT → EXPECTATION GAP → REEL START`

into a near-immediate transition.

Even if every SE remains present, the rhythm that gives those sounds meaning can change. In particular, a repeated 100G/500G loop may feel less physically laborious and less temporally spacious.

### REUSABLE PRINCIPLE

`TIMING FIDELITY IS PART OF AUDIO FIDELITY.`

and

`A SPEED OPTION CAN PRESERVE EVENT ORDER WHILE CHANGING EVENT MEANING.`

---

## 6. Auto mode can preserve soundtrack continuity while deleting motor-attention duty

### PLATFORM FACT

777Real supports auto play, and its `おまかせオート` can advance play without keeping the normal play screen active; users can return to normal play when needed. Speed modes can advance the simulated session faster than equal-speed play.

Source:
- 777Real FAQ — おまかせオート: https://faq.777real.net/hc/ja/articles/22218268293401

### TRANSLATION INTERPRETATION

This produces two fundamentally different listening modes:

1. **Manual attended play** — routine sound is tied to repeated human touch and short-horizon prediction.
2. **Delegated play** — portions of the machine loop can occur without continuous human motor ownership, or even without the normal play screen being the active perceptual surface.

Therefore a 500G dry spell no longer implies 500G of identical auditory exposure.

### REUSABLE PRINCIPLE

`SIMULATED AUDIO DURATION ≠ HUMAN-HEARD AUDIO DURATION.`

and

`AUTOMATION CAN REMOVE FATIGUE BY REMOVING EXPOSURE, NOT BY IMPROVING THE UNDERLYING SOUND DESIGN.`

This must be preserved for later QA so app convenience is not misread as proof that the real-machine long-session soundscape is fatigue-free.

---

## 7. Haptics can substitute only selected physical emphasis, not cabinet body transmission

### PLATFORM FACT

777Real documents `PUSHボタンバイブ`: when enabled, the terminal vibrates at certain presentation moments. Availability differs by title.

Source:
- https://faq.777real.net/hc/ja/articles/22217884852633

### UNRESOLVED

For this exact app/build, this pass did not verify:
- whether PUSH vibration is exposed;
- which Madoka 2 events trigger it;
- vibration amplitude/pattern;
- whether ordinary BET/START/STOP have haptic response.

### TRANSLATION INTERPRETATION

A phone vibration can create a local tactile accent, but it should not be treated as equivalent to cabinet low-frequency energy or a physical PUSH/button mechanism.

### REUSABLE PRINCIPLE

`HAPTIC EVENT FIDELITY ≠ CABINET LOW-FREQUENCY FIDELITY.`

A vibration may preserve **event emphasis** while not preserving **source, body, scale or acoustic transmission**.

---

## 8. Audio authority now has two potential owners: machine and service

### APP-SOURCED FACT

777Real is a service wrapper with its own menus, play limits, PG economy, auto systems and shop/custom-pack flows. Official FAQ describes pachislot sessions ending at 10,000 spins or 24 hours and an economy based on settlement/PG.

Sources:
- 777Realとは: https://faq.777real.net/hc/ja/articles/20078988960921
- 1回の遊技におけるプレイ上限: https://faq.777real.net/hc/ja/articles/22218146927641

### TRANSLATION INTERPRETATION

The original machine's audio hierarchy can now coexist with service-level notifications or UI interactions. These layers must not be casually merged in analysis.

For example, a machine reward cue and a service settlement/menu cue may both be salient but answer different questions.

### REUSABLE PRINCIPLE

`A WRAPPER AUDIO LAYER SHOULD NOT BE MISTAKEN FOR MACHINE AUDIO AUTHORITY.`

and

`SERVICE FEEDBACK AND MACHINE FEEDBACK REQUIRE SEPARATE SEMANTIC OWNERSHIP.`

---

## 9. BONUS foreground and ART return must survive small-speaker playback and assist-mode changes

### REAL-MACHINE BASELINE

Phase A identified the repeated grammar:

`ART HOME → BIG FOREGROUND → BIG RESOLUTION → ART RE-ANCHOR`.

### TRANSLATION INTERPRETATION

On phone, the return address must survive several possible degradations:
- reduced low-frequency/dynamic contrast;
- device volume limits;
- earphone vs speaker playback;
- service/menu interruption;
- manual↔auto mode change;
- possible audio entitlement differences.

A faithful app transition is therefore not proven merely by playing the correct BGM before and after BIG. The user should be able to recover **state identity and action duty**.

### REUSABLE PRINCIPLE

`AUDIBLE RE-ANCHOR = STATE RECOGNITION + RESTORED ACTION DUTY + RESTORED ATTENTION HIERARCHY.`

and

`A RETURN CUE IS SUCCESSFUL ONLY IF THE PLAYER KNOWS BOTH WHERE THE GAME IS AND WHAT THEY MUST DO NEXT.`

---

## 10. The phone can improve clarity while reducing physical scale

### TRANSLATION INTERPRETATION

The smartphone environment is not only loss. Compared with a noisy hall, close personal playback or earphones may make mid/high-frequency details easier to hear. At the same time it can remove spatial scale, cabinet source location and low-frequency presence.

Therefore app translation should not be scored on a single richer/poorer axis.

Suggested comparison dimensions for later Phase C:

- `SEMANTIC CUE CLARITY`
- `PHYSICAL SCALE`
- `ACTION CAUSALITY`
- `DYNAMIC RANGE / STARTLE COST`
- `STATE CONTINUITY`
- `LONG-SESSION EXPOSURE`
- `SERVICE-LAYER INTERFERENCE`

### REUSABLE PRINCIPLE

`DIGITAL TRANSLATION MAY INCREASE INFORMATION CLARITY WHILE DECREASING PHYSICAL PRESENCE.`

---

## 11. Public reviews are QA leads, not audio evidence

### PUBLIC REVIEW LEAD

The current App Store review page contains user reports about image quality, installation problems, auto-play crashes and perceived simulation differences. The page shows a 4.3/5 aggregate at the time observed, but the complaints are uncontrolled and device/context dependent.

Source:
- https://apps.apple.com/jp/app/777real-slot%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E3%81%BE%E3%81%A9%E3%81%8B%E3%83%9E%E3%82%AE%E3%82%AB2/id6758942796?platform=iphone&see-all=reviews

### INTERPRETATION

No reviewed public evidence was sufficient to assert title-specific audio latency, missing cues, mix imbalance or exact fidelity defects.

### REUSABLE PRINCIPLE

`USER COMPLAINTS CAN PRIORITIZE TESTS; THEY CANNOT REPLACE CONTROLLED AUDIO OBSERVATION.`

---

## 12. Phase B Sound translation matrix

| Real-machine acoustic role | Smartphone translation question | Status |
|---|---|---|
| BET/START routine confirmation | Does touch preserve immediate causal confirmation? | exact title-specific observation unresolved |
| reel start / motor timing | Is wait preserved or cut; does audio still establish motion onset? | platform wait-cut exists; exact title setting unresolved |
| STOP1/2/3 | Is sound tied to my tap, or generated by auto? | platform/manual-auto distinction sourced |
| payout/replay settlement | Is routine closure clear without cabinet/mechanical contribution? | unresolved |
| rare-role / consequence cue | Does semantic hierarchy survive phone playback? | structural baseline retained; direct app audit unresolved |
| BIG entry | Does short reward take foreground without relying on cabinet scale? | unresolved direct observation |
| BIG notification mode | Are certainty schedules/audio selections faithfully exposed? | exact app UI/audio behavior unresolved |
| ART baseline | Can persistent BGM remain sustainable through phone playback? | unresolved direct long-form audit |
| ART navigation | Does action-critical cue outrank BGM in manual mode? | exact mix unresolved |
| auto ART | Does cue become event notification rather than motor instruction? | translation supported by auto behavior |
| BIG during ART | Is audible return address preserved? | unresolved direct transition audit |
| special zone | Does local intensity return cleanly to ART baseline? | unresolved direct app audit |
| PUSH emphasis | Is device vibration available and correctly scoped? | platform feature sourced; title-specific unresolved |
| full music/SE availability | Is any layer Custom-Pack gated for this title? | platform gating sourced; title-specific unresolved |

---

## 13. Reusable principles added by Phase B Run 1

1. `AUDIO ASSET FIDELITY ≠ ACOUSTIC EXPERIENCE FIDELITY.`
2. `WHEN AUDIO AVAILABILITY DEPENDS ON A SERVICE ENTITLEMENT, AUDIO FIDELITY BECOMES A PRODUCT-STATE VARIABLE, NOT ONLY A MACHINE-STATE VARIABLE.`
3. `MISSING AUDIO MUST BE CLASSIFIED AS MACHINE SILENCE, USER SETTING, DEVICE STATE, OR SERVICE GATING BEFORE IT IS INTERPRETED AS DESIGN.`
4. `THE SAME STOP SOUND CAN CHANGE MEANING FROM ACTION CONFIRMATION TO EVENT NOTIFICATION WHEN INPUT IS DELEGATED.`
5. `CAUSAL AUDIO FIDELITY DEPENDS ON WHO CAUSED THE EVENT, NOT ONLY ON WHETHER THE EVENT SOUNDS CORRECT.`
6. `TIMING FIDELITY IS PART OF AUDIO FIDELITY.`
7. `A SPEED OPTION CAN PRESERVE EVENT ORDER WHILE CHANGING EVENT MEANING.`
8. `SIMULATED AUDIO DURATION ≠ HUMAN-HEARD AUDIO DURATION.`
9. `AUTOMATION CAN REMOVE FATIGUE BY REMOVING EXPOSURE, NOT BY IMPROVING THE UNDERLYING SOUND DESIGN.`
10. `HAPTIC EVENT FIDELITY ≠ CABINET LOW-FREQUENCY FIDELITY.`
11. `A WRAPPER AUDIO LAYER SHOULD NOT BE MISTAKEN FOR MACHINE AUDIO AUTHORITY.`
12. `SERVICE FEEDBACK AND MACHINE FEEDBACK REQUIRE SEPARATE SEMANTIC OWNERSHIP.`
13. `AUDIBLE RE-ANCHOR = STATE RECOGNITION + RESTORED ACTION DUTY + RESTORED ATTENTION HIERARCHY.`
14. `DIGITAL TRANSLATION MAY INCREASE INFORMATION CLARITY WHILE DECREASING PHYSICAL PRESENCE.`
15. `USER COMPLAINTS CAN PRIORITIZE TESTS; THEY CANNOT REPLACE CONTROLLED AUDIO OBSERVATION.`

---

## 14. Fresh platform compatibility correction

### APP/PLATFORM FACT

The current 777Real official service page now states iOS service requirements of **iOS 15.0 or later and iPhone X or later**, while noting that App Store compatibility text represents downloadability and is not identical to 777Real's supported environment.

Source:
- https://www.777real.net/index.html

### INTERPRETATION

Earlier Case Study 03 notes retained the App Store listing's `iOS 12.0+` compatibility as a listing fact. That should not be read as the current **service-supported environment**. Both facts can coexist only when labeled correctly:

- App Store compatibility/download listing: prior observed `iOS 12.0+`.
- Current 777Real supported environment: `iOS 15.0+`, `iPhone X+`.

This distinction should be carried into later device QA.

---

## 15. Unresolved items for Playtest & QA / Phase C

Do not infer these without direct installed-app observation or measurement:

- exact title-specific game-sound menu and level controls;
- whether this title requires Custom Pack for BGM, effects and/or voices, and which layers;
- exact manual tap → STOP sound latency;
- exact auto STOP → sound timing;
- ordinary BET/START/STOP haptic behavior;
- title-specific PUSH vibration mapping;
- speaker vs earphone mix differences;
- clipping/limiting behavior at device maximum volume;
- exact low-frequency loss versus the real cabinet;
- BIG notification-mode sound behavior in the app;
- ART navigation intelligibility under BGM;
- ART→BIG→ART audible re-anchor latency;
- long-session 100G/500G/3-hour acoustic fatigue in manual vs auto;
- service UI audio overlap during machine-critical moments.

Phase B remains research-only. No audio prototype, asset generation, event table implementation or original-machine design is authorized.

## Gate

`CASE_STUDY_03_SOUND_EXPERIENCE_PHASE_B_RUN1_COMPLETE = TRUE`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
