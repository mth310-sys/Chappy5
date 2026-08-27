# Case Study 02 — 新ハナビ (2021)
## Playtest & QA Director — Deep Dive Run 2

> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Scope: repeated-play endurance, novice/expert divergence, dry-spell quality and skill-pressure behavior. No original-concept testing.

## 0. Run 2 purpose

Run 1 established that the same three STOPs can become a different practical game as literacy rises. Run 2 asks a narrower QA question:

**Does that depth survive realistic repetition without turning knowledge, aiming and technical intervention into attention debt?**

Evidence labels:
- `SOURCED FACT` — official/manual/major strategy documentation;
- `VIDEO / FIELD OBSERVATION` — explicitly documented real-machine session behavior;
- `INTERPRETATION` — QA reconstruction, not manufacturer disclosure;
- `UNRESOLVED` — requires controlled human testing or stronger evidence.

No undisclosed reel-control table or physical/audio specification is inferred.

---

## 1. Reality check: this machine is actually exposed to thousands of repeated games

### VIDEO / FIELD OBSERVATION
A 2025 field video is explicitly built around a 新ハナビ session reaching about 7,800G. The published video is edited to about 36 minutes, so it cannot establish uninterrupted fatigue, but it establishes that several-thousand-game same-machine sessions are a realistic exposure class rather than a theoretical edge case.

Source:
- https://yutura.net/channel/98894/video/-uhM0NgM1pY/

A separate player field diary is explicitly organized around 5,000G-class play. In one 新ハナビ session the player reports five REG execution misses, estimates the lost value would exceed roughly ¥1,000, and says they need to slow consumption slightly and prioritize avoiding misses.

Source:
- https://ameblo.jp/teamato4545/entry-12961562484.html

### QA consequence
A rare premium cue may be heard a handful of times. Aiming, lever, three STOPs and small-role follow occur thousands of times. Any requirement that is harmless at 50G can become product-defining at 5,000G.

`LONG SESSION = ORDINARY LOOP UNDER MAGNIFICATION`

---

## 2. First five minutes: the problem is not rule count alone, but simultaneous obligations

### VIDEO / FIELD OBSERVATION
A beginner-facing 2025 real-machine program explicitly frames 新ハナビ as an improvement/practice session for delayed reverse-stop play and JAC-IN avoidance, with the real-machine section beginning near the start and the result summarized after roughly 35 minutes. This is useful evidence that these skills are learned through repeated attempts rather than instantly acquired from procedure text.

Source:
- https://www.niconana.net/movie/%E3%80%90%E6%96%B0%E3%83%8F%E3%83%8A%E3%83%93%E3%80%91%E6%94%BB%E7%95%A5%E3%81%B8%E3%81%AE%E9%81%93-%E9%81%85%E3%82%8C%E9%80%86%E6%8A%BC%E3%81%97%E3%81%A8%E3%83%8F%E3%82%BA%E3%82%B7%E3%81%AE%E4%B8%8A/

### INTERPRETATION
The novice burden is best modeled as a **stack**, not a list:

`aim landmark + detect role-follow need + preserve stop order + watch presentation + interpret result`

A tutorial may explain all five correctly while still overloading the first several minutes because they compete for the same visual/temporal attention.

### Reusable QA test
`NOVICE OBLIGATION STACK TEST`

During the first 30 ordinary games, record how many obligations must be remembered **simultaneously** before the player can safely finish one game. Count forgotten obligations separately from misunderstood rules.

### Principle
`TEACHING FIVE THINGS SEQUENTIALLY DOES NOT MEAN THE PLAYER CAN EXECUTE FIVE THINGS CONCURRENTLY.`

---

## 3. Normal 100G: distinguish intrinsic attention from economic attention

### SOURCED FACT
Published setting-1 reference values put BIG around 1/277.7, REG around 1/356.2 and combined bonus around 1/156.0. Normal play also contains technical small-role/reach-eye observation rather than a pure wait-for-notification loop.

Source:
- https://up-slot.com/shinhanabi-info/

### INTERPRETATION
An expert can remain attentive for two different reasons:

1. `INTRINSIC ATTENTION` — “what will these reels resolve into?”
2. `INSTRUMENTAL ATTENTION` — “I need every role/sample because payout and setting judgment depend on it.”

Those are not interchangeable forms of fun. A player may concentrate intensely because mistakes cost money while not enjoying that concentration.

### Reusable QA test
`MOTIVE SPLIT TEST`

For a 100G segment, classify voluntary attention events as:
- curiosity/discovery motivated;
- loss-avoidance motivated;
- setting/economic sampling motivated;
- presentation prompted.

Do not use raw “eyes on reels” time as proof of intrinsic engagement.

### Principle
`ATTENTION != ENJOYMENT.`

---

## 4. 500G drought: absence of a milestone makes ordinary-loop quality more exposed

### INTERPRETATION
At a combined bonus probability near 1/156 on setting 1, a 500G bonus drought is not a structurally impossible anomaly. Unlike a game-count/CZ ladder, the machine does not need to introduce a separate milestone merely because the drought becomes long.

The QA burden therefore gets harsher with time:

`100G: can the reel language hold attention?`

`500G: can it hold attention after novelty and optimism have both decayed?`

### Three distinct reasons a player may continue
- `REEL CURIOSITY` — current-stop discovery is still satisfying;
- `ECONOMIC CONFIDENCE` — strategy/return makes continuation rational;
- `SUNK / RELIEF SEEKING` — player mainly wants the drought to end.

Only the first is direct evidence that the base game itself remains intrinsically healthy.

### New QA test
`DROUGHT MOTIVE AUDIT`

Inside a 500G no-bonus stretch, sample games 1–50, 201–250 and 451–500. Compare:
- voluntary aiming variation;
- spontaneous reach-eye/slip discussion;
- mechanical speeding-up;
- missed small-role follow;
- irritation after near-misses;
- statements/actions showing “just waiting for the bonus.”

### Principle
`A PLAYER CAN CONTINUE A GOOD STRATEGY THROUGH A BAD EXPERIENCE.`

Payout rationality must not be mistaken for moment-to-moment quality.

---

## 5. Technical intervention changes play speed, not only payout

### FIELD OBSERVATION
The 5,000G-class field diary reports five REG mistakes and explicitly concludes that play should be slowed somewhat to reduce misses. This is not controlled laboratory evidence, but it exposes an important real behavior: execution pressure can cause the player to trade throughput for accuracy.

Source:
- https://ameblo.jp/teamato4545/entry-12961562484.html

### INTERPRETATION
Technical intervention therefore creates a hidden control variable:

`PLAY SPEED ↔ EXECUTION ACCURACY ↔ FATIGUE ↔ ECONOMIC RESULT`

A machine can have responsive controls and still induce a bad pace if the optimal human strategy is to fight natural rhythm continuously.

### Reusable QA test
`SELF-SELECTED PACE TEST`

Measure separate 15-minute windows where a player is instructed only to:
- play comfortably;
- maximize safe accuracy;
- play at their natural fast pace.

Compare miss rate, hesitation time, perceived fatigue and enjoyment. Do not define maximum games/hour as the universally best tempo.

### Principle
`OPTIMAL PLAYER PACE IS NOT MAXIMUM MACHINE PACE.`

---

## 6. Skill reward versus regret: loss attribution matters

### SOURCED / FIELD CONTEXT
Published guides make REG execution level and RT JAC-IN avoidance meaningful to reward quality. A real field player explicitly monetizes their own execution misses after the session.

Sources:
- https://1geki.jp/slot/s_shinhanabi/64/
- https://up-slot.com/shinhanabi-info/
- https://ameblo.jp/teamato4545/entry-12961562484.html

### INTERPRETATION
There are at least three psychologically different losses:

- `RNG LOSS` — the machine did not give the bonus;
- `KNOWLEDGE LOSS` — the player failed to notice/use a known opportunity;
- `EXECUTION LOSS` — the player knew what to do but physically missed it.

They should not be collapsed into one “frustration” bucket. Execution loss is especially likely to be self-attributed.

### QA metric
`REGRET ATTRIBUTION MAP`

After a miss, record whether the player blames:
- luck;
- unclear instruction;
- unreadable timing/visibility;
- their own execution;
- fatigue;
- input/mechanical response.

### Principle
`AGENCY INCREASES PRIDE AND ALSO INCREASES OWNERSHIP OF FAILURE.`

---

## 7. Reward states contain recovery windows as well as responsibility windows

### SOURCED FACT
During 花火チャレンジ, a reverse-stop instruction requires the JAC-IN avoidance procedure until the late phase. Published play guidance also states that outside instruction/flash situations some RT games can be stopped freely; 花火GAME similarly allows ordinary/free handling when no flash/notice requires role follow.

Sources:
- https://nana-press.com/kaiseki/machine/134/3869/
- https://1geki.jp/slot/s_shinhanabi/64/

### INTERPRETATION
This matters for fatigue. Technical intervention is not maximally demanded on every reward-state game. The loop alternates:

`RESPONSIBILITY WINDOW → LOWER-LOAD WINDOW → RESPONSIBILITY WINDOW`

The reward phase can stay participatory without demanding peak precision continuously.

### Reusable QA principle
`ATTENTION NEEDS RECOVERY WINDOWS.`

A skill-centered game should be tested not only for whether its hard action is fair, but for whether the session gives the player enough lower-load games between high-attention actions.

---

## 8. Missed versus recognized information: beginner safety is not the same as beginner richness

Run 1 established `PLAYER-KNOWN STATE` as a QA variable. Run 2 sharpens it.

A beginner-safe routine can avoid catastrophic mistakes while still allowing the beginner to miss much of the machine's richness: delay, slip relation, two-reel contradiction, advanced alternate-stop questions and early bonus self-discovery.

Therefore two onboarding targets must be separated:

- `SAFE PLAY ACCESS` — player can proceed without major avoidable loss/confusion;
- `MEANING ACCESS` — player can actually perceive why an ordinary game was interesting.

### Principle
`BEGINNER-FRIENDLY IS NOT ONLY “HARD TO FAIL.” IT IS ALSO “POSSIBLE TO NOTICE SOMETHING WORTH CARING ABOUT.”`

---

## 9. Bonus detection: relief, recognition and execution can peak at different moments

### INTERPRETATION
For an expert, the emotional sequence may be:

`odd stop → suspicion → second/third-stop resolution → self-confirmation → bonus procedure → payout`

For a novice it may be closer to:

`presentation cue → explicit confirmation → bonus procedure → payout`

During a long drought the same bonus can also create a large `RELIEF` spike independent of either sequence.

### QA requirement
When evaluating a bonus after 300G+ without one, explicitly score:
- `RELIEF`;
- `DISCOVERY`;
- `EXECUTION PRIDE`;
- `PAYOUT SATISFACTION`.

Do not allow relief to dominate the verdict on entry quality.

---

## 10. Three-hour fatigue: what can and cannot be concluded remotely

### Evidence-supported exposure
Thousands-of-games sessions are realistic, and real players report execution errors plus deliberate pace reduction. That is stronger than merely imagining fatigue.

### Still UNRESOLVED
Online material cannot establish controlled three-hour thresholds for:
- eye strain from repeated reel targeting;
- hand/finger fatigue;
- exact effect of hall sound/lighting;
- error-rate growth by hour;
- novice versus expert recovery rate;
- whether mastery reduces cognitive fatigue faster than repetition increases sensory fatigue.

### Proposed future human protocol — documentation only, not executed before Human Gate
If a later approved original machine needs equivalent testing, use hour-bucket QA:

`0–15 min / 45–60 min / 105–120 min / 165–180 min`

For each bucket record:
- self-selected games/minute;
- correction/hesitation events;
- execution miss rate;
- missed information cues;
- voluntary strategy variation;
- posture/hand reset behaviors;
- reported eye/hand/audio fatigue;
- whether attention is curiosity-driven or loss-avoidance-driven.

This is a reusable test protocol, not a claim about 新ハナビ's measured fatigue.

### Principle
`LONG-SESSION QA SHOULD MEASURE DRIFT, NOT ONLY FINAL FATIGUE.`

---

## 11. Beginner vs skilled player — Run 2 delta

| QA dimension | Beginner | Skilled player | Risk |
|---|---|---|---|
| First minutes | remembers a safe aim/follow routine | already chooses information lens | beginner obligation stack |
| Delay | may not hear a deviation from an unlearned baseline | uses delay to alter stop strategy | fair cue can remain perceptually inaccessible |
| Ordinary 100G | aims to avoid missing roles | also hunts slip/contradiction/reach-eye questions | attention may be loss avoidance rather than enjoyment |
| Long drought | may simplify into waiting for obvious confirmation | can continue current-stop investigation and setting sampling | rational continuation can mask weak subjective experience |
| REG | selects feasible route / may feel judged by misses | optimizes repeated intervention | execution loss becomes self-blame |
| RT | follows explicit navigation | manages phase/setting information with lower conscious burden | too-frequent precision demands could exhaust novice |
| Pace | likely slows while learning | may accelerate until accuracy begins to fall | fastest pace is not necessarily best experience |
| 3 hours | high conscious load on basic tasks | known forms automate but precision duty remains | mastery and fatigue share the same repetition source |

---

## 12. Reusable QA principles added in Run 2

- `LONG SESSION = ORDINARY LOOP UNDER MAGNIFICATION`
- `NOVICE OBLIGATION STACK TEST`
- `ATTENTION != ENJOYMENT`
- `MOTIVE SPLIT TEST`
- `DROUGHT MOTIVE AUDIT`
- `A PLAYER CAN CONTINUE A GOOD STRATEGY THROUGH A BAD EXPERIENCE`
- `OPTIMAL PLAYER PACE IS NOT MAXIMUM MACHINE PACE`
- `REGRET ATTRIBUTION MAP`
- `AGENCY INCREASES PRIDE AND ALSO INCREASES OWNERSHIP OF FAILURE`
- `ATTENTION NEEDS RECOVERY WINDOWS`
- `SAFE PLAY ACCESS != MEANING ACCESS`
- `LONG-SESSION QA SHOULD MEASURE DRIFT, NOT ONLY FINAL FATIGUE`

---

## 13. Cross-Director connections

### With Sound Run 2
Sound concluded `EXPOSURE WEIGHT > EVENT PRESTIGE` and `ATTENTION CLAIM MUST EARN ITS REPETITION RATE`. QA reaches the same conclusion behaviorally: ordinary input/cue exposure dominates a long session, and high-attention technical requirements need recovery windows.

### With Visual Run 2
Visual separated `HAND PLANE` from `GAZE PLANE` and emphasized central precision. QA adds that the gaze plane must remain usable not only at game 10 but after thousands of repetitions; physical readability and cognitive workload must be tested together.

### With Game & Reel Run 1
The reel system can add questions with mastery. QA adds a constraint: added questions are valuable only when they remain optional depth rather than simultaneous mandatory obligations for novices.

### With Machine integration
`QUESTION DENSITY PER ORDINARY GAME` is retained, but QA now requires question **quality and motive**. A game can generate many questions because the player fears a costly miss. That is not equivalent to curiosity.

---

## 14. Contradictions / cautions

1. A 7,800G edited video establishes high exposure, not controlled 7,800G comfort.
2. A personal field diary is useful behavioral evidence but not population-level miss-rate data.
3. Strong strategy value can cause long play even if subjective moment-to-moment quality is mediocre.
4. Skill intervention can be simultaneously empowering and pace-disrupting.
5. A beginner route can prevent major mistakes while still hiding much of the machine's meaning.
6. Published procedures do not establish actual novice success rates.
7. Current 2026 スマスロ ハナビ information must not be substituted for 2021 新ハナビ mechanics.

---

## 15. Unresolved retained after Run 2

- controlled first-five-minute success/forgetting rates;
- controlled delay-recognition rates by expertise;
- actual REG/RT miss distribution by skill tier and hour of session;
- uninterrupted 500G drought observation with motive coding;
- controlled three-hour eye/hand/audio fatigue and performance drift;
- precise contribution of nostalgia/brand familiarity to persistence;
- whether expert optional stop-order variety materially reduces fatigue;
- real-machine input-force / reel-visibility contribution to late-session errors.

---

## 16. Director verdict

`PLAYTEST_QA_RUN_2 = COMPLETE`

新ハナビ remains valuable evidence precisely because it does **not** need a CZ→AT→upper-state ladder to create continuing player work. Run 2 adds an important qualification: repeated player work is not automatically good merely because it is skillful.

The QA target is not maximum obligation, maximum concentration or maximum games/hour. It is a session where ordinary actions remain readable, curiosity survives drought, mastery increases meaning, technical skill creates more pride than regret, and attention has enough recovery space to survive long repetition.

`REALITY_BASELINE_COMPLETE = FALSE`
`HUMAN_GATE_1_NOT_READY`
`SIGNAL//3 / FORGE//HEART / VAULT://3 = PROVISIONAL_FROZEN`

No original-concept ranking/refinement, browser prototype, assets, code, cabinet/mechanism work or reel implementation was performed.