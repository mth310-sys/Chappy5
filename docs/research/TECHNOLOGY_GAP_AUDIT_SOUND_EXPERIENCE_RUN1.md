# Chappy5 — Technology Gap Audit — Sound & Experience Run 1

> Director: Sound & Experience Director
> Shared object: `TECHNOLOGY_GAP_AUDIT`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Scope: compare accumulated real-machine/app sound learning against auditable Chappy5/遊創舎 capability. No original sound concept, prototype, audio asset or implementation.

## 0. Conclusion

The current problem is **not a lack of broad pachislot sound literacy**.

Across the reality baseline and Case Studies 01–04, Sound & Experience has already learned the high-value reusable laws: repeated BET/START/REEL/STOP feedback must survive long sessions; attention hierarchy matters more than raw loudness; silence and tiny timing deviations become information only against a trusted baseline; sound can change reel-reading rather than merely celebrate results; BGM and state transitions must be event-causal; real→phone translation preserves event grammar more readily than cabinet acoustic mass; wait-cut changes cadence; auto changes action ownership; phone speaker/headphones are different listening frames.

The remaining highest-value work is to turn those laws into **deterministic, measurable, iPhone-verified audio capability**.

Therefore Sound & Experience does **not** recommend another broad real-machine audio survey as the default next step. Narrow research remains justified only when a future design depends on a specific unresolved acoustic behavior.

---

## 1. Capability audit method

Each item is classified as:
- `LEARNED`
- `KNOWLEDGE GAP`
- `TECHNOLOGY GAP`
- `MEASUREMENT GAP`
- `PLATFORM GAP`

For every claimed gap this document records:
1. capability already held;
2. lesson understood but not implemented/verified;
3. missing knowledge;
4. whether acquisition is possible in the current GitHub + browser + iPhone workflow;
5. priority/value;
6. objective evidence required for acquisition.

Evidence boundary: repository search over `Chappy5`, `yusosha-slot`, `yusosha-usage-test`, and `yusosha-design-lab` did not surface an auditable reusable Web Audio runtime through common code identifiers (`AudioContext`, oscillator/gain constructors, `new Audio`, etc.). This does **not** prove no historical audio experiment exists anywhere; it means this audit cannot currently treat a reusable production-grade audio engine as verified capability.

---

## 2. `LEARNED` — repeated-operation audio hierarchy

### Capability already held
The Sound Reality Baseline establishes the repeated loop as the primary acoustic contract:

`BET → LEVER/START → WAIT/REEL → STOP1 → STOP2 → STOP3 → RESULT/PAYOUT → NEXT`

It also separates `ATTENTION HIERARCHY` from a simple dB ladder.

### Understood lesson
A basic action sound is successful when it is causal, legible and repeatable through a dry session—not when it is individually impressive.

### Missing knowledge
No broad product-law gap blocks planning here.

### Acquisition in current workflow
Already acquired as research knowledge.

### Priority
No further broad study required now.

### Objective evidence for production acquisition
Later, implementation must survive a long-session trial without masking reel information or increasing irritation during low-reward play.

---

## 3. `LEARNED` — silence, delay and routine deviation as information

### Capability already held
The baseline and case studies distinguish added sound from omission, delay, repetition-count change, transient timing and mix-space change.

### Understood lesson
A tiny deviation has value only if ordinary timing is deterministic enough for the player to trust it.

### Missing knowledge
No further broad real-machine survey is required to understand this principle.

### Acquisition in current workflow
Research knowledge: yes.

### Priority
Preserve; do not over-study.

### Objective evidence for production acquisition
A future authored deviation must be replayable at the same event boundary and distinguishable from browser scheduling jitter or dropped audio.

---

## 4. `TECHNOLOGY GAP` — deterministic audio-event scheduler tied to canonical game events

### Capability already held
README and Reality Standard require common event causality across Game/Reel/Visual/Mechanism/Audio. Game & Reel's audit independently identifies a canonical complete-spin event trace as a major gap.

### Understood but not verified
Sound knows what needs to happen:

`GAME EVENT → timestamped AUDIO EVENT → scheduled audible response`

with explicit relations for STOP1/2/3, result, payout, state transition, interruption and next-game release.

### Missing capability
There is no currently verified Chappy5 audio scheduler contract showing that audio events can be scheduled from the same deterministic trace as reels/visuals while maintaining stable causal timing.

Required future capability should distinguish at least:
- semantic game timestamp;
- requested audio start timestamp;
- actual audio-context schedule time;
- cancellation/override priority;
- loop/state ownership;
- manual vs auto/wait-cut listening contract.

### Acquisition possible?
Yes. Browser Web Audio APIs and deterministic JS event traces can support this in the current workflow, subject to Safari/device verification.

### Priority/value
`VERY HIGH`.

Without it, the project can have good sounds that still feel detached from the machine.

### Objective acquisition evidence
Later Stage 3/4 evidence should show a logged event trace where repeated identical seeded spins produce the same semantic audio-event ordering, and real-device capture confirms STOP/action feedback remains causally aligned within an agreed tolerance.

---

## 5. `TECHNOLOGY GAP` — priority/ducking/mix-state system instead of independent sound playback

### Capability already held
Research already understands that a truth signal should win by contrast, timing and mix priority before raw level; BGM and baseline layers must sometimes yield to action/result information.

### Understood but not verified
The machine needs a state-aware mix model rather than independent `play()` calls.

Minimum future responsibilities:
- buses/layers for operation, reel/mechanical body, information cue, reward/notification, BGM/ambience;
- explicit priority and interruption policy;
- short duck/release envelopes;
- transition ownership when state/BGM changes;
- prevention of duplicate/layer pile-up during rapid input;
- manual / wait-cut / auto density rules.

### Missing capability
No reusable, verified mix-state engine is currently established as Chappy5 capability.

### Acquisition possible?
Yes with Web Audio gain routing and event/state control.

### Priority/value
`VERY HIGH`.

### Objective acquisition evidence
Later test build must intentionally create competing events (e.g. STOP + result + transition + BGM) and demonstrate deterministic priority, no clipping/pile-up, and preserved information hierarchy on target iPhone.

---

## 6. `MEASUREMENT GAP` — touch/event-to-audible latency and jitter

### Capability already held
The studies correctly identify causal timing as more portable and more important than exact third-party timbre.

### Understood but not measured
A phone action can be logically accepted instantly while audible confirmation is delayed or jittered by the browser/audio pipeline.

### Missing measurement
Chappy5 currently has no accepted measurement procedure or threshold for:
- touch/STOP event timestamp → audio scheduling timestamp;
- audio scheduling timestamp → perceived/audible onset;
- repeated-event jitter;
- manual three-STOP spacing stability;
- resumed/interrupted AudioContext first-event penalty.

### Acquisition possible?
Partly. JS can log input and scheduling times automatically; true acoustic onset needs device-side observation/capture or Human-assisted measurement.

### Priority/value
`VERY HIGH` because Reality Standard explicitly requires operation/audio causality.

### Objective acquisition evidence
A documented iPhone test method with repeated samples, median/tail latency and jitter, plus an agreed PASS band. Automated internal timestamps alone do not count as full acoustic proof.

---

## 7. `PLATFORM GAP` — iPhone Safari audio lifecycle / unlock / interruption / resume

### Capability already held
Research recognizes that designed silence is ambiguous if device-level audio is unreliable and that app/browser context changes listening behavior.

### Understood but not verified
Mobile Safari imposes a user-gesture audio-start lifecycle and real devices can face route changes, screen lock/backgrounding, phone interruptions, media coexistence and resumed contexts.

### Missing capability/evidence
No Chappy5 production contract is yet verified for:
- initial audio unlock tied to valid user action;
- no missing first critical event after unlock;
- background/foreground resume;
- AudioContext suspended/interrupted recovery;
- route changes (speaker ↔ headphones/Bluetooth where relevant);
- accidental stacked BGM/loops after resume;
- device-level mute/volume ambiguity handling.

### Acquisition possible?
Yes, but requires actual iPhone Safari testing; desktop/browser-only testing is insufficient.

### Priority/value
`VERY HIGH`.

### Objective acquisition evidence
A real-device interruption/resume matrix with PASS/FAIL logs and no orphaned/stuck loops or silent critical action feedback after recovery.

---

## 8. `PLATFORM GAP` — speaker/headphone translation without destroying hierarchy

### Capability already held
The official-app study establishes two distinct frames: phone speaker and headphones. The team understands that identical timbre is not the goal; preserved hierarchy and acceptable fatigue are.

### Understood but not verified
Small phone speakers can collapse low-frequency/body cues, while headphones can expose transients and repetition more aggressively.

### Missing capability/evidence
No device-output reference/mix QA method exists yet for Chappy5.

### Acquisition possible?
Yes through target iPhone listening plus at least one headphone path. Exact electroacoustic lab calibration is not required for a browser game, but comparative QA is.

### Priority/value
`HIGH`.

### Objective acquisition evidence
The same test sequence must preserve event ranking and action readability on device speaker and headphones, with no layer becoming painfully dominant or disappearing functionally.

---

## 9. `TECHNOLOGY GAP` — machine-body acoustic substitution

### Capability already held
Research clearly separates `EVENT LEGIBILITY`, `ACTION CAUSALITY`, and `BODY PRESENCE`. It does not confuse a licensed simulator or clean sample playback with cabinet acoustic equivalence.

### Understood but not verified
A phone cannot reproduce cabinet volume, speaker mounting, panel resonance and mechanical action literally. Chappy5 therefore needs an original browser-appropriate way to make reel/action/result sounds feel emitted by one machine rather than by generic UI widgets.

Possible capability dimensions to study later—not original concept design in this audit—include:
- coherent shared room/body coloration;
- restrained stereo/source geography;
- transient layering that separates electronic cue from mechanical consequence;
- low-frequency substitution that survives a phone speaker without excessive level;
- synchronized visual/mechanism impact supporting perceived body.

### Missing capability
No verified reusable `machine body` acoustic layer or rendering method is established.

### Acquisition possible?
Yes in part with original synthesis/filtering/layering and cross-modal synchronization. Physical equivalence is neither possible nor required.

### Priority/value
`MEDIUM-HIGH` after causal scheduler/mix correctness.

### Objective acquisition evidence
Blind/structured trial should show users perceive action/result sounds as belonging to one machine and not as disconnected mobile UI cues; speaker path must remain functional without relying on sub-bass unavailable to the device.

---

## 10. `MEASUREMENT GAP` — repetition/fatigue under real cadence, wait-cut and auto

### Capability already held
Case Study 04 establishes:
- `CADENCE IS PART OF AN AUDIO ASSET'S EFFECTIVE INTENSITY`;
- wait-cut preserves more action ownership but compresses breathing room;
- auto can preserve event order while destroying action-linked meaning;
- logical exposure and listening exposure are different.

### Understood but not measured
A sound set that feels fine for 20 spins can fail at 500G or under accelerated cadence.

### Missing measurement
No acceptance harness combines:
- event-count exposure;
- wall-clock exposure;
- manual vs accelerated cadence;
- speaker vs headphones;
- peak/repetition density;
- subjective irritation/fatigue and information loss.

### Acquisition possible?
Yes, but requires Playtest & QA/Human evidence in addition to automated event counts.

### Priority/value
`HIGH`.

### Objective acquisition evidence
A prescribed long-session sequence (including dry normal play and reward cycles) with event-density logs plus Human fatigue/attention observations. A short showcase clip is not sufficient.

---

## 11. `TECHNOLOGY GAP` — accelerated-mode audio policy

### Capability already held
Research differentiates `MANUAL`, `WAIT CUT`, and `AUTO` as different experience/listening contracts.

### Understood but not verified
If future Chappy5 tooling or play mode accelerates simulation, blindly playing every ordinary sound faster can create noise. The system needs explicit policy deciding which audio events remain mandatory, compressible, suppressible or summarized.

### Missing capability
No formal accelerated-mode audio event policy exists.

### Acquisition possible?
Yes once the canonical event trace and mix-state system exist.

### Priority/value
`MEDIUM`. It is not a prerequisite for the first normal-speed playable if acceleration is not product-facing, but it is important for simulator/debug/fast-forward tools.

### Objective acquisition evidence
Fast mode must preserve truth/state-transition cues while avoiding burst pile-up, and returning to manual speed must restore the exact normal listening contract.

---

## 12. `KNOWLEDGE GAP` — exact commercial speaker/cabinet acoustic construction

### Missing knowledge
Exact speaker models, cabinet transfer functions, limiter/compressor implementations, proprietary mastering chains and internal acoustic construction for commercial machines are generally not fully public.

### Production relevance
Low as a prerequisite.

Chappy5 does **not** need to reverse engineer commercial manufacturers' private acoustic recipes. The target is original audio that satisfies the Reality Standard on an iPhone/browser machine.

### Classification decision
`KNOWLEDGE GAP`, but **NOT RECOMMENDED AS DEFAULT NEXT RESEARCH**.

---

## 13. Cross-director dependency map

Sound gaps cannot be solved in isolation.

### Game & Reel dependency
Canonical spin/event trace must define when action, result and state changes actually occur. Audio should consume this law rather than create private timers.

### Visual & Mechanism dependency
Perceived impact/body depends on synchronized LED, reel settling and mechanism motion. Sound alone should not fake mass that the picture contradicts.

### Playtest & QA dependency
Actual acoustic latency, iPhone interruptions, speaker/headphone translation and fatigue require real-device/Human evidence.

### Machine Director dependency
Machine must eventually decide which gaps are prerequisites for production readiness versus capabilities that can be developed later inside an approved machine project.

---

## 14. Sound & Experience recommendation to Machine Director

### Do not default to
- another broad survey of many famous machines;
- cataloguing more proprietary sound cues;
- copying recognizable commercial samples/melodies;
- treating a large asset library as sound maturity;
- treating Browser Test event firing as proof of audible causality.

### Highest-value next learning/capability work
1. `TECHNOLOGY GAP` — deterministic event-driven audio scheduler.
2. `TECHNOLOGY GAP` — priority/ducking/mix-state system.
3. `MEASUREMENT GAP` — real iPhone touch/event→audible latency and jitter method.
4. `PLATFORM GAP` — Safari audio lifecycle/interruption/resume proof.
5. `PLATFORM GAP` — speaker/headphone hierarchy translation.
6. `MEASUREMENT GAP` — long-session/cadence fatigue protocol.
7. `TECHNOLOGY GAP` — original machine-body acoustic substitution, after causality is stable.

### Overall judgment
**SOUND PRODUCT KNOWLEDGE IS SUFFICIENT FOR THE CURRENT DECISION; AUDIO REALITY ENGINEERING AND MEASUREMENT ARE NOT YET PROVEN.**

Additional real-machine study should now be narrow and hypothesis-driven, not tourism.

---

## 15. Gate preservation

This audit does not open original concept refinement or production.

`CURRENT_SHARED_OBJECT = TECHNOLOGY_GAP_AUDIT`
`SOUND_EXPERIENCE_AUDIT = COMPLETE_RUN1`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
