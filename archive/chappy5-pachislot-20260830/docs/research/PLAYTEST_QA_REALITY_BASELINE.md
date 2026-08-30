# Playtest & QA Reality Baseline — Real Pachislot Study

> Status: `RESEARCH_ACTIVE_V1`
> Scope: Chappy5 #1 / Stage 1 Product Planning only
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Rule: This file records real-machine research before original concept evaluation. It does **not** approve SIGNAL//3, FORGE//HEART, VAULT://3 or any production work.

## 1. Research objective

Playtest & QA must stop treating a persuasive proposal as proof of an enjoyable pachislot. Before desk-testing Chappy5 concepts, establish what repeated real pachislot play feels like across different machine families.

This baseline asks:
- What does the player actually do/notice in the first 5 minutes?
- What keeps 100G of normal play from becoming empty repetition?
- What changes psychologically during a deep dry spell?
- What does a failed precursor/CZ cost emotionally?
- What makes a first hit feel earned or merely relieving?
- What is different during BONUS/AT/ST beyond louder presentation?
- What happens if upper entry does not occur for hours?
- What does the machine leave behind immediately after end?
- Why is the next BET pressed?

Evidence classes used below:
- `SOURCED FACT`: directly documented machine rule, developer statement, or actual play record.
- `FIELD REPORT`: individual player's documented experience; useful but not universal fact.
- `INTERPRETATION`: QA inference from multiple observations.
- `REUSABLE PRINCIPLE`: design/QA rule that may later be applied without copying IP.
- `UNRESOLVED`: needs more evidence.

---

## 2. Machine-family reality: repeated play is not one thing

### 2.1 Reach-eye / normal / technical play

`SOURCED FACT` — Hanabi's developers explicitly retained setting-reading elements so that long play could lead toward an answer, and RT was used to extend the post-BIG play experience rather than only increase visual spectacle.
Source: Pachiseven, Hanabi developer interview / AWARD2015 MIP. https://pachiseven.jp/articles/detail/759

`FIELD REPORT` — A 2026 player log reports deliberately accumulating extremely large lifetime game counts on New Hanabi, Disc Up 2 and Disc Up Ultra Remix, with explicit long-term goals such as 1–2 million games and reach-eye mission completion.
Source: Pachiseven user column, 2026-04-16. https://pachiseven.jp/columns/column_detail/22824

`FIELD REPORT` — Another Disc Up report describes the appeal of unobtrusive reach-eye discovery and technical input, specifically valuing an unexpected no-effect bonus pattern rather than only strong presentation.
Source: Pachiseven user column. https://pachiseven.jp/columns/column_detail/14147

`INTERPRETATION` — These machines can support long repetition because each game can carry player-owned tasks: aim accurately, observe slip, recognize a pattern, infer setting, discover a new reach eye, improve execution. The player's attention is not fully outsourced to the LCD.

`REUSABLE PRINCIPLE` — A normal 100G block needs an active reading/doing loop, not necessarily constant events. Silence and ordinary games are acceptable when the player still has something meaningful to inspect or execute.

### 2.2 CZ / point / mode / game-number waiting

`SOURCED FACT` — Multiple real machines structure normal play around a future threshold or intermediate trial. For example, Re:Zero season2 accumulates points with recurring expectation zones and a precursor episode before AT judgment. Older and contemporary machines likewise use game-number modes, cycles, or CZs with state-dependent success rules.
Sources:
- DMM, Re:Zero season2 overview: https://p-town.dmm.com/specials/3804
- DMM, Kujirakki mode/game-number/CZ structure: https://p-town.dmm.com/machines/2248
- DMM, Ninja Gaiden CZ/AT structure: https://p-town.dmm.com/machines/2404

`SOURCED FACT` — In Cats Eye, the expected value of continuing changes with elapsed games after a Cats-eye event; the machine therefore creates a real state-dependent reason that later normal games do not have the same value as earlier ones.
Source: DMM machine analysis: https://p-town.dmm.com/machines/4140

`INTERPRETATION` — In these families, long normal play is psychologically segmented by milestones: zone approach, precursor start, CZ entry, CZ failure, retained state, reset, next zone. The danger is that the reel game itself becomes only transport between milestones.

`REUSABLE PRINCIPLE` — QA must distinguish **meaningful waiting** from **dead waiting**. A displayed counter is not enough. The player's expectation or available decisions must genuinely change as the milestone approaches.

### 2.3 AT / ST state conversion

`SOURCED FACT` — Kabaneri is an ST-type machine whose normal play, bonus routes and ST use different reward structures; its public materials also document rare-role targeting and navigation. The same three reels therefore serve different cognitive duties in normal and reward states.
Source: Pachiseven machine guide: https://pachiseven.jp/machines/6548/cutout/5

`SOURCED FACT` — Smart-slot upper states can materially change reward speed and starting conditions. Example: Azur Lane's upper AT raises pure increase to about 5.1 coins/G and starts with advantageous battle rights; this is not merely a cosmetic mode switch.
Source: Pachiseven machine analysis: https://pachiseven.jp/machines/7223

`INTERPRETATION` — The felt value of one lever-on can change dramatically by state even if physical input remains the same. A reward state is credible when it changes what the player hopes to draw, what the reels mean, how quickly result/reward feeds back, or what can be lost/extended.

`REUSABLE PRINCIPLE` — BONUS/AT/upper cannot pass QA only because BGM, LED or animation is stronger. It must alter the value structure of the next game.

---

## 3. Timeline desk model from real-machine evidence

### 3.1 First 5 minutes

Observed real-machine onboarding patterns:
- Reach-eye/technical machines often expose a stable base routine quickly: where to aim, what is normal, what deviations matter.
- CZ/mode machines expose a visible future target: points, cycle, zone, precursor, state icon, etc.
- Strong contemporary machines frequently provide both a basic free-play path and optional deeper reading.

`INTERPRETATION` — The first 5 minutes do not need to reveal the entire machine. They must teach **what kind of attention the machine rewards**. If a player cannot tell whether to watch reels, screen, counter, lamp, stop order, or state after several games, complexity has become noise.

### 3.2 Normal 100G

`SOURCED FACT/FIELD REPORT` — Long-running technical/reach-eye play shows that 100G can remain viable with relatively restrained presentation when execution, pattern recognition and setting inference remain alive. Conversely, point/mode machines explicitly create temporal landmarks so that 100G is not perceived as one homogeneous block.
Sources: Hanabi developer interview; 2026 technical-machine long-play log; Re:Zero season2 system pages.

`REUSABLE PRINCIPLE` — QA question: **What is the smallest repeating reason to press BET for the next 10 games?** Acceptable answers include reading, aiming, state inference, route building, meaningful accumulation, or a genuinely changing draw value. “A strong effect might happen” alone is weak.

### 3.3 Deep dry spell

`SOURCED FACT` — Real machines can sustain several hundred games before a major hit through ceilings, modes, accumulated value, setting inference, technical participation, or changing state. Examples include explicit maximum ceilings and zone tables.
Sources: Kabaneri guide; Kujirakki; Re:Zero season2.

`INTERPRETATION` — A dry spell amplifies every repetitive defect: nuisance SE, empty precursor loops, fake close calls, long forced animations, opaque counters, meaningless rare roles. Features tolerated at 50G can become hostility at 500G.

`REUSABLE PRINCIPLE` — Future Chappy5 QA must explicitly run a **500G dislike test**: which base sounds, effects, prompts and waiting structures become irritating when rewards do not arrive?

### 3.4 Rare-role anticipation and precursor

`SOURCED FACT` — Real machines frequently change the value of a rare role by state. A role can be ordinary in normal play but decisive inside a CZ/high-probability state. Smart-slot Bofuri even uses deliberately quiet presentation for a decisive reach-eye-like result in high probability, showing that stronger value need not mean louder effect.
Source: Pachiseven developer interview, Bofuri, 2024-11-22: https://pachiseven.jp/articles/detail/22757

`INTERPRETATION` — Anticipation is strongest when the player knows **why this draw matters now**. Repeating red effects without changing draw meaning manufactures visual urgency without game urgency.

### 3.5 CZ failure

`SOURCED FACT` — Real CZs vary: some consume points earned during the CZ; some are role-by-role self-determination zones; failure may fully reset, choose a new cycle, preserve a state, or lead to revival/continue chances.
Sources: Ninja Gaiden and Kujirakki DMM analyses.

`INTERPRETATION` — Failure feels fairer when the player can reconstruct why it failed and what remains afterward. Failure becomes exhausting when the machine repeatedly asks for emotional commitment but gives no new information, retained value or altered next-game state.

`REUSABLE PRINCIPLE` — QA must log **failure residue**: after failure, what real information/value/state survives? False hope is not residue.

### 3.6 First hit

`INTERPRETATION` — A first hit after a dry spell contains two possible emotions: reward and mere relief. The difference depends on whether the route accumulated meaning before the hit. A sudden large notification cannot retroactively make empty preceding games enjoyable.

`REUSABLE PRINCIPLE` — During later playtests ask separately: “Was the hit good?” and “Was the path to the hit worth playing?”

### 3.7 BONUS / AT sustained play

`SOURCED FACT` — Real reward states change play density, navigation, draw value, payout rate and/or continuation goals. A long AT also has a different experiential duty from its entry fanfare.
Sources: Kabaneri machine guide; Azur Lane upper AT analysis; Sound Reality Baseline references.

`INTERPRETATION` — Entry can be a peak; sustain must become playable routine. If every AT game tries to reproduce the entry peak, fatigue rises and the peak stops feeling special.

`REUSABLE PRINCIPLE` — Evaluate `ENTRY IMPACT` and `SUSTAIN QUALITY` separately.

### 3.8 Long time without upper entry

`SOURCED FACT` — Modern smart-slot structures can place very large expected value behind upper states or advantageous section boundaries; analyses of smart-slot volatility show that high settings can still experience severe negative stretches and that upper-route accessibility can dominate perceived outcome.
Source: Pachiseven smart-slot absorption/advantageous-section analysis: https://pachiseven.jp/articles/detail/19575

`INTERPRETATION` — If all remembered reward is concentrated in an upper state, ordinary AT can feel like a failed attempt rather than a reward. This is a major three-hour risk.

`REUSABLE PRINCIPLE` — Base hit and ordinary reward state must possess standalone satisfaction. “Not upper” must not automatically mean “wasted.”

### 3.9 Upper entry

`INTERPRETATION` — Upper entry deserves a distinct value jump because it is rare, but the machine should communicate exactly what changed: speed, survival, reward ceiling, draw value, stock, navigation, or route. Pure spectacle without a rule change is shallow.

### 3.10 End / immediate post-end / next BET

`SOURCED FACT` — Real machines use many post-end structures: explicit return lottery, retained mode/cycle, immediate high-probability state, setting hints, or clean reset. DMC5 documents direct end-of-AT return lottery; other machines route to dedicated return states or cycle selection.
Sources:
- Pachiseven DMC5: https://pachiseven.jp/machines/6481/cutout/12
- DMM Akame ga Kill: https://p-town.dmm.com/machines/3767

`INTERPRETATION` — The next BET works when the player understands whether the ending is final, suspicious, advantageous, informative, or reset. Ambiguous “maybe something remains” should not be manufactured unless the system genuinely supports it.

`REUSABLE PRINCIPLE` — Post-end motivation must come from **real retained value, information, or a deliberate clean fresh start**. Endless hidden-hint ambiguity is not automatically engagement.

---

## 4. Concrete boredom / fatigue risks

1. **Repeated fake closeness** — every failure presented as “almost hit” makes precursor language untrustworthy.
2. **Strong-effect inflation** — if every rare role gets strong audiovisual treatment, strong cues cease to classify information.
3. **Forced long viewing** — a repeated result animation that cannot change outcome is especially hostile during dry spells.
4. **Counter without agency** — visible accumulation that does not meaningfully alter expectation is paperwork.
5. **Reels as transport** — if all useful information lives on LCD/counter, STOP becomes a mandatory click between scenes.
6. **Upper-state dependency** — ordinary hit/AT feels defective whenever upper entry is absent.
7. **Opaque failure** — CZ loss without understandable cause or residue creates helplessness rather than suspense.
8. **Sound accumulation** — harmless base SE at 20G can become aversive at 500G; Sound baseline already requires this check.
9. **Unbounded cognitive load** — asking the player to simultaneously read reel slip, five icons, voice law, lamp color and mode counter can erase all of them.
10. **No contrast** — continuous movement/light/music removes the quiet baseline needed for deviation to matter.

---

## 5. What players can realistically read

`INTERPRETATION` from cross-specialty research:

A real player can deeply learn many laws over time, but not all in the same instant. Information should be layered:
- **Primary now-information:** what to do on this game (free play / aim / follow navigation / special stop order).
- **Secondary expectation:** why this game may matter (state, precursor, rare role, zone).
- **Tertiary long-horizon inference:** setting, mode, hidden tendency, collection/discovery.

`REUSABLE PRINCIPLE` — A good machine may be deep without being constantly dense. Complexity can live across time rather than on one screen.

---

## 6. Proposal-document trap vs actual-play test

A proposal sounds exciting when it describes only:
`rare event → dramatic cue → success → upper state`.

An enjoyable machine must survive the missing 90%:
`BET → lever → ordinary spin → ordinary STOPs → ordinary result → repeat`, including hundreds of unsuccessful repetitions.

Future concept QA shall therefore reject or return any proposal that cannot answer all of these without relying on “presentation will make it exciting”:
1. What is worth noticing on an ordinary game?
2. What changes after 30 ordinary games?
3. What remains meaningful at 300–500G without a hit?
4. What can the player learn or improve?
5. What makes a failed CZ different from simply losing time?
6. Is ordinary BONUS/AT satisfying if upper never arrives?
7. What exactly does the player understand at end?
8. Why press the next BET?

---

## 7. 30-minute vs 3-hour QA model

### 30 minutes
Must establish:
- base operation comfort
- what the player watches
- at least one understandable expectation cycle
- distinction between ordinary and meaningful deviation
- first reward route comprehension

### 3 hours
Must retain:
- base SE tolerance
- non-annoying normal presentation
- repeated failure credibility
- meaningful variation in normal decisions/reading/state
- ordinary-hit value independent of upper state
- clear end/return logic
- a reason for continued play beyond novelty

`REUSABLE PRINCIPLE` — “I want to see the big effect once” is a 10-minute strength, not proof of three-hour product quality.

---

## 8. Playtest & QA Reality Baseline — corrected assumptions

Previous planning assumptions to retire:
1. Every STOP does **not** need a dramatic semantic role every game.
2. More foreshadowing does **not** automatically cure normal-play boredom.
3. A strong Signature Sound does **not** prove reward satisfaction.
4. Upper-state excitement does **not** prove ordinary AT is enjoyable.
5. First-5-minute clarity does **not** predict three-hour durability.
6. Quiet games are **not** necessarily boring if reels, technique, inference or state-reading remain alive.
7. Complex hidden systems are **not** necessarily deep if players cannot form useful expectations from them.
8. A failed challenge needs understandable consequence/residue; visual “almost” alone is not value.

---

## 9. Current QA gate for Chappy5 concepts

Existing candidates remain `PROVISIONAL_FROZEN` and are **not ranked** in this research phase.

Before any concept returns to desk-playtest, it must provide a reality-grounded answer for:
- first 5-minute attention contract
- ordinary 100G repeat unit
- 500G dry-spell survivability
- rare-role/state value conversion
- failure residue
- ordinary hit satisfaction
- ordinary BONUS/AT sustain loop
- upper-state independence test
- post-end truth
- next-BET reason

No answer may rely only on visual/audio spectacle.

---

## 10. Unresolved / next research

- More manufacturer interviews specifically addressing long-session fatigue and failed-CZ tuning.
- Quantitative data on precursor frequency and repeated challenge tolerance across successful/unsuccessful machines.
- More documented player reports from game-number/mode-heavy and current smart-slot long sessions, including negative experiences.
- Accessibility/cognitive-load evidence for simultaneous reel/LCD/lamp/audio reading.
- Physical fatigue from repeated lever/STOP/button interaction over several hours.
- Smart-slot medal-less play: how removal of physical coin payout alters reward feedback and next-BET rhythm.

Reality Baseline remains `RESEARCH_ACTIVE`; this first run is sufficient to hand off but **not sufficient to resume concept ranking**.
