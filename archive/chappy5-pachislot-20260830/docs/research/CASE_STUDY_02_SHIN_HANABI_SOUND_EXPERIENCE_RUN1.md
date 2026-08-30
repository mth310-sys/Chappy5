# Case Study 02 — 新ハナビ Sound & Experience Deep Dive Run 1

> Director: Sound & Experience Director
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original concepts: `PROVISIONAL_FROZEN`

## 0. Scope / evidence discipline

This run studies 新ハナビ (2021) only as a real-machine audio/experience reference. It does not create or refine Chappy5 original sound concepts, and it does not reproduce melodies, samples, signature sounds, protected art, or proprietary audio assets.

Evidence labels used below:
- `SOURCED FACT`: manufacturer/manual/major strategy reference.
- `DIRECT OBSERVATION`: audible/structural observation from public play/video/reference material, without claiming undocumented implementation.
- `INTERPRETATION`: Sound & Experience Director analysis.
- `REUSABLE PRINCIPLE`: abstract design lesson only.
- `UNRESOLVED`: not sufficiently established.

Read together with:
- `README.md`
- `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
- `docs/REALITY_PRESENTATION_STANDARD.md`
- `docs/research/SOUND_EXPERIENCE_REALITY_BASELINE.md`
- `docs/research/CASE_STUDY_02_SHIN_HANABI.md`
- `docs/research/CASE_STUDY_02_SHIN_HANABI_GAME_REEL_RUN1.md`
- `docs/research/CASE_STUDY_02_SHIN_HANABI_VISUAL_MECHANISM_RUN1.md`

---

## 1. Product audio does not require constant escalation

### SOURCED FACT
Universal's official product page describes 新ハナビ as a Bonus + RT machine that completely inherits the 5号機ハナビ game flow, while adding RB skill levels, mini-LCD `たまやチャレンジ`, reel-array changes and blackout-rule changes. It does not present the product as an AT/CZ/upper-state escalation machine.

Official source:
- https://www.universal-777.com/product/slot/shin_hanabi/

Major strategy references organize normal presentation primarily around four recurring deviation families:
1. reel-start-sound delay (`遅れ`),
2. blackout,
3. flash,
4. `たまやチャレンジ`.

The reel-start-sound delay corresponds to cherry or bonus possibility. Blackout count changes role relationships. Flash occurs with payout timing and can be cancelled. `たまやチャレンジ` can arise from selected 3-blackout replay/cherry situations and carries bonus expectation.

Reference:
- https://1geki.jp/slot/s_shinhanabi/
- https://1geki.jp/slot/s_shinhanabi/42/

### INTERPRETATION
The important Sound contrast with 北斗 is not simply “fewer sounds.” 新ハナビ allocates less of the normal-game experience to continuous dramatic narration. The audio system can leave perceptual bandwidth for aimed position, slip, stopped forms, blackout and flash.

The core normal audio grammar is therefore better represented as:

`KNOWN ROUTINE → SMALL TIMING DEVIATION / OMITTED OR ADDED CUE → REEL ATTENTION → STOP RESOLUTION → VISUAL/AUDIO CONFIRMATION`

rather than:

`BASE → PRE-FORESHADOWING → FORESHADOWING → STRONG FORESHADOWING → HIT → UPPER ESCALATION`.

### REUSABLE PRINCIPLE
`AUDIO DENSITY MUST MATCH THE PRIMARY WORK SURFACE`.

If the physical reels are the main information surface, audio should create attention windows around them rather than continuously competing with them.

---

## 2. REST AUDIO is a timing contract

### SOURCED FACT
The game's named `遅れ` presentation is specifically a reel-start-sound delay. Its information value depends on a normal expected start timing existing first.

Reference:
- https://1geki.jp/slot/s_shinhanabi/42/

### DIRECT OBSERVATION
Across practical play footage and strategy demonstrations, ordinary games repeatedly return to the same hand-ear loop: BET/input → lever → reel start → STOP1 → STOP2 → STOP3 → settle/payout/replay → next game. Strong audio presentation is not layered over every game.

This observation is qualitative only. Exact original BET/lever/STOP waveform, SPL, speaker frequency response and mechanical reel-noise level were not measured in this run.

### INTERPRETATION
The baseline is valuable because the player learns the *when* of sounds as much as the sound identity. `遅れ` works because a familiar start event is displaced in time. If ordinary start timing were noisy or inconsistent, delay would lose meaning.

### REUSABLE PRINCIPLE
`REST AUDIO = SOUND IDENTITY + EXPECTED TIMING`.

For every repeated input, future Chappy5 Audio specs should eventually distinguish:
- expected event,
- expected timing,
- expected duration,
- expected relation to reel motion,
- allowed deviation classes.

A timing change can be a stronger information event than a louder replacement sound.

---

## 3. Silence / removal can carry truthful game information

### SOURCED FACT
Both RT states use a particularly strong subtraction rule: strategy references state that BGM stopping during `花火チャレンジ` or `花火GAME` indicates bonus.

References:
- https://1geki.jp/slot/s_shinhanabi/64/
- https://1geki.jp/slot/s_shinhanabi/65/

### INTERPRETATION
This is a high-value example of `SUBTRACT TO SIGNAL`.

During RT, BGM is a sustained state layer. A bonus can therefore be communicated not by stacking a larger alert over the music, but by removing the state layer the player has learned to expect. The player immediately notices a violation of continuity.

This also avoids masking STOP/reel information with an additional long alarm.

### REUSABLE PRINCIPLE
`STATE AUDIO CAN BECOME A SENSOR`.

A sustained loop has at least two responsibilities:
1. make the state feel different while it lasts;
2. create an expectation whose interruption can carry information.

Thus `BGM ENTRY`, `BGM SUSTAIN`, and `BGM EXIT/STOP AS EVENT` must be separate Audio responsibilities.

---

## 4. Audio and reel/flash law form one language

### SOURCED FACT
Normal presentation law connects sound/timing to reel-result candidates:
- start-sound delay: cherry or bonus possibility;
- blackout count: different small-role denial/possibility relations;
- flash: linked to payout/result timing;
- `たまやチャレンジ`: selected replay/cherry + 3-blackout situations.

References:
- https://1geki.jp/slot/s_shinhanabi/
- https://1geki.jp/slot/s_shinhanabi/42/

The game also allows flash cancellation, meaning the player need not always consume the full post-stop presentation.

### INTERPRETATION
Audio does not independently “tell a story” while reels separately determine truth. It modifies the player's candidate set before or during STOP, and visual/reel resolution can then satisfy or contradict that expectation.

The key experience is:

`HEAR / NOTICE → AIM / WATCH DIFFERENTLY → STOP → CHECK ROLE RELATION → RESOLVE`.

This is audio as play guidance rather than decoration.

Flash cancellation also matters for fatigue: experienced players can reduce presentation tail after they have already read the answer from the reels.

### REUSABLE PRINCIPLES
- `AUDIO AS QUESTION, REEL AS ANSWER`.
- `POST-RESULT PRESENTATION SHOULD NOT HOLD THE PLAYER HOSTAGE`.
- If the player already knows the result from the primary information surface, allow short/cancellable tails where product design permits.

---

## 5. Bonus entry and bonus sustain are separate responsibilities

### SOURCED FACT
新ハナビ has BIG and REG. BIG max payout is 202 medals and REG max payout is 112 under the advanced route. BIG is followed by RT. REG includes selectable skill difficulty. The official soundtrack identifies distinct music pieces for red-7 BB, Don BB, 花火チャレンジ, 花火GAME, RB, and an RB all-high-skill jingle.

Official soundtrack source:
- https://www.universal-777.com/fun/music/shin_hanabi/

The same official soundtrack lists dedicated tracks for `花火チャレンジ` and `花火GAME`, confirming that the two RT phases have distinct sustained music identities rather than being one undifferentiated bonus tail.

### INTERPRETATION
Reward architecture is reflected in audio architecture:

`BONUS DISCOVERY → BONUS CONFIRMATION/ENTRY → BONUS SUSTAIN → RT PHASE A → RT PHASE B → RETURN`.

Unlike an upper-state ladder, escalation is compact. The audio changes job at each phase without requiring an endless stack of “stronger than before” layers.

### REUSABLE PRINCIPLE
`REWARD AUDIO NEEDS PHASE GRAMMAR, NOT ONLY PEAK GRAMMAR`.

A memorable entry cue cannot substitute for a sustainable 20–40G reward-state soundscape.

---

## 6. Technical intervention changes the meaning of feedback

### SOURCED FACT
REG offers beginner/intermediate/advanced procedures. Higher execution quality can produce higher per-game payoff and maximum 112 medals. A strategy/manual reference describes advanced aiming and notes differentiated outcomes. Official product material explicitly presents level-based RB technical intervention as a core new element.

Sources:
- https://www.universal-777.com/product/slot/shin_hanabi/
- https://news.p-world.co.jp/articles/16848/greenbelt
- https://1geki.jp/slot/s_shinhanabi/

The official soundtrack includes an `RB ALL神技ジングル` track, demonstrating that full high-skill completion has a dedicated success acknowledgement.

Source:
- https://www.universal-777.com/fun/music/shin_hanabi/

### INTERPRETATION
Skill feedback has a different emotional burden from lottery feedback.

A lottery miss can be disappointment. A technical miss can feel like *personal failure*. Therefore repeated failure feedback must not become humiliating, shrill, or disproportionately punishing. Conversely, successful execution should feel authored by the player, not identical to a random win cue.

### REUSABLE PRINCIPLE
`SKILL FEEDBACK MUST REINFORCE AGENCY WITHOUT AMPLIFYING SHAME`.

Future QA should distinguish:
- input accepted,
- timing/aim success,
- economic result,
- streak/mastery achievement.

These are not the same audio event.

---

## 7. RT audio changes attention without changing body grammar

### SOURCED FACT
After BIG, `花火チャレンジ` runs up to 20G and can be extended through JAC-IN avoidance; JAC-IN transitions to 20G `花火GAME`. Both phases retain lever/reel/STOP interaction. `花火GAME` has its own RT composition and BGM-stop bonus rule.

Sources:
- https://news.p-world.co.jp/articles/17236/greenbelt
- https://1geki.jp/slot/s_shinhanabi/64/
- https://1geki.jp/slot/s_shinhanabi/65/

### INTERPRETATION
Sound marks a state change while the player's body continues using the same lever and three STOPs. This is exactly the Visual finding `STATE CHANGE CAN REFRAME THE SAME HARDWARE`, translated to audio.

Audio can say “the rules around these same buttons have changed” without demanding a new interaction grammar.

### REUSABLE PRINCIPLE
`AUDIO SHOULD REFRAME AN INPUT BEFORE INVENTING A NEW INPUT`.

State differentiation can be achieved by changing sustained context, event timing and confirmation behavior while preserving learned hand rhythm.

---

## 8. Sparse normal presentation and long-session fatigue

### DIRECT OBSERVATION / FIELD EVIDENCE
Public long-session/large-game-count 新ハナビ play material exists, including expert-oriented footage and reports covering thousands of games. Edited videos cannot prove exact no-cut event density, so this run does not convert them into quantitative frequency claims.

What can be safely observed across practical play material is that most individual games are not occupied by long voice scenes or prolonged cinematic overlays. Repeated reel operation remains audible and visible for the majority of normal play.

### INTERPRETATION
This creates two opposite risks:

**Strength** — sparse presentation protects sensitivity. A delay, blackout, unusual flash, BGM stop or small confirmation can remain perceptually large even after hours.

**Risk** — if basic BET/lever/reel/STOP sounds are irritating, sparse presentation exposes them more, not less. There is no cinematic layer to hide a bad routine sound.

Thus low-density design raises the quality requirement of baseline mechanical/operation audio.

### REUSABLE PRINCIPLE
`SPARSE PRESENTATION MAGNIFIES BASELINE QUALITY`.

Three-hour Sound QA must test routine sounds at their real repetition count, not only highlight cues in isolation.

---

## 9. Memorable cue vs fatiguing cue

### SOURCED FACT
The official soundtrack is structured around state/reward music and a set of named machine pieces, but the normal game itself is not described as a continuous BGM-driven experience. Normal gameplay's major published presentation families are limited and rule-linked.

Sources:
- https://www.universal-777.com/fun/music/shin_hanabi/
- https://1geki.jp/slot/s_shinhanabi/42/

### INTERPRETATION
Memorability here comes less from constant novelty and more from:

`SCARCITY × RULE MEANING × TIMING DEVIATION × REEL SYNCHRONY × PLAYER DISCOVERY`.

A cue becomes memorable because the player was already listening for the normal pattern and because the deviation changes how they inspect the reels.

### REUSABLE PRINCIPLE
`MEMORABLE AUDIO DOES NOT REQUIRE HIGH EVENT COUNT`.

For reel-centered games, preserve unused acoustic space deliberately.

---

## 10. Integration with Game & Reel / Visual & Mechanism

Game & Reel Run 1 model:
`AIM → CLASSIFY → RESOLVE → DISCOVER → EXECUTE → EXTEND / TRANSITION → RETURN WITH MORE KNOWLEDGE`

Sound layer mapping:
- `AIM`: normal operation audio remains low-interference.
- `CLASSIFY`: delay / timing deviation can alter candidate expectations.
- `RESOLVE`: STOP timing + blackout/flash/result relationship confirms or contradicts.
- `DISCOVER`: reward can occur at recognition before explicit bonus confirmation.
- `EXECUTE`: REG/RT technical intervention needs agency-oriented success feedback.
- `EXTEND / TRANSITION`: RT music and navigation context reframe the same controls.
- `RETURN`: normal REST AUDIO returns, restoring sensitivity for the next small deviation.

Visual Run 1 principles reinforced by Sound:
- `REEL WINDOW IS A WORKBENCH, NOT WINDOW DRESSING` → audio should not mask the workbench.
- `SUBTRACTION IS A LIGHT EVENT` → `SUBTRACTION IS ALSO AN AUDIO EVENT`.
- `STATE CHANGE CAN REFRAME THE SAME HARDWARE` → state music/context can reframe the same lever/STOP grammar.
- `QUIET WORKSPACE + STRONG STATIC IDENTITY` → acoustically, use quiet/regular working space + meaningful deviation rather than constant spectacle.

---

## 11. Reusable Sound & Experience principles from Case Study 02 Run 1

1. `AUDIO DENSITY MUST MATCH THE PRIMARY WORK SURFACE`.
2. `REST AUDIO = SOUND IDENTITY + EXPECTED TIMING`.
3. `SUBTRACT TO SIGNAL`.
4. `STATE AUDIO CAN BECOME A SENSOR`.
5. `AUDIO AS QUESTION, REEL AS ANSWER`.
6. `POST-RESULT PRESENTATION SHOULD NOT HOLD THE PLAYER HOSTAGE`.
7. `REWARD AUDIO NEEDS PHASE GRAMMAR, NOT ONLY PEAK GRAMMAR`.
8. `SKILL FEEDBACK MUST REINFORCE AGENCY WITHOUT AMPLIFYING SHAME`.
9. `AUDIO SHOULD REFRAME AN INPUT BEFORE INVENTING A NEW INPUT`.
10. `SPARSE PRESENTATION MAGNIFIES BASELINE QUALITY`.
11. `MEMORABLE AUDIO DOES NOT REQUIRE HIGH EVENT COUNT`.

---

## 12. Contradictions / cautions

- “Sparse” must not be confused with “silent.” Repeated mechanical/operation audio remains a constant product layer.
- BGM-stop rules are strong precisely because the relevant RT BGM is normally sustained; arbitrary silence without a stable baseline would not produce the same meaning.
- Technical-intervention success feedback can reward mastery while the underlying economic gap can still intimidate beginners. Sound alone cannot solve that design tension.
- Edited YouTube footage overrepresents noteworthy events. It is useful for event relationship and player behavior, but not for exact fatigue/event-frequency claims unless no-cut duration is confirmed.
- Manufacturer soundtrack track names establish state-specific music existence, not exact in-machine mix, dB, EQ, looping behavior or speaker routing.
- Do not infer undocumented speaker/subwoofer/vibration hardware from perceived bass in online video; recording chain and playback device distort physical evidence.

---

## 13. UNRESOLVED

- Exact BET, lever, reel-start, reel-spin, STOP1/2/3, settling, replay and payout sound identities from clean direct capture.
- Exact relative levels, EQ, dynamics, stereo placement and speaker hardware.
- Exact mechanical reel-noise vs amplified SE contribution in a real hall.
- Whether/how cabinet vibration is used on 新ハナビ; not established in this run.
- Exact delay duration in milliseconds and whether multiple timing classes exist.
- Long no-cut 3-hour cue counts and fatigue ratings under a 500G-class bonus drought.
- Beginner perception of REG skill failure audio versus expert perception.
- Exact BGM transition/crossfade behavior at BIG → 花火チャレンジ → 花火GAME → normal.
- Exact sound/flash priority when multiple result laws could coincide.

These remain `AUDIO_UNVERIFIED` / `UNRESOLVED` and must not be invented later.

---

## 14. Handoff to Playtest & QA

The next QA run should specifically test from long-form real-play evidence:

1. In the first 5 minutes, can a beginner hear the difference between ordinary start timing and `遅れ`, or is visual/reel knowledge required first?
2. Across normal 100G, how often is attention voluntarily on sound versus reels/mini-LCD?
3. Across a 500G bonus drought, does sparse audio remain calm or expose repetition fatigue?
4. Does flash cancellation materially reduce experienced-player friction?
5. Does REG skill feedback feel like earned agency, mandatory tax, or both depending on skill?
6. In 花火チャレンジ/GAME, how quickly does the player learn BGM stop as a truthful bonus sensor?
7. After RT ends, does return to normal REST AUDIO feel like loss of reward or return to the core game?

## Gate

`CASE_STUDY_02_SOUND_EXPERIENCE_RUN_1_COMPLETE`

This does **not** mean `REALITY_BASELINE_COMPLETE`.
This does **not** authorize concept refinement or production.
`SIGNAL//3 / FORGE//HEART / VAULT://3 = PROVISIONAL_FROZEN`.
`HUMAN_GATE_1_NOT_READY`.
