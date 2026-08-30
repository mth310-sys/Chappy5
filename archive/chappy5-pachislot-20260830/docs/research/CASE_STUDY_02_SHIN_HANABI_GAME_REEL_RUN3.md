# Case Study 02 — 新ハナビ — Game & Reel Deep Dive Run 3

> Role: Game & Reel Director
> Target: エレコ / ユニバーサル系「新ハナビ」（2021）
> Stage: `Stage 1 — Reality Baseline Study`
> Status: `DEEP_DIVE_RUN_3_COMPLETE`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original concepts: `PROVISIONAL_FROZEN`

## 0. Run 3 purpose and gate

Latest `main` is the sole source of truth.

Machine Run 3 confirms Case Study 01「スマスロ北斗の拳」is complete through all five fixed Directors and retained only as contrast evidence. Case Study 02「新ハナビ」remains the shared real-machine study object.

This run does **not** design an original machine, implement reels, prototype browser play, reproduce protected reel art, or reconstruct undisclosed manufacturer control tables.

Run 3 narrows the remaining Game & Reel questions after Runs 1–2:

1. how BET count / valid-line geometry changes the rule surface;
2. how visible payout forms differ from internal role / bonus-trigger structure;
3. how a 500G bonus drought can still contain dense physical reel events;
4. how detection, payout protection, setting inference and technical execution compete for the same three STOPs;
5. how mastery changes **which samples the player notices**, not only execution accuracy;
6. how the whole loop returns from bonus/RT to ordinary reel reading without an AT upper-state ladder.

Evidence labels:
- `MANUFACTURER FACT`
- `PUBLISHED ANALYSIS`
- `FIELD / VIDEO OBSERVATION`
- `INTERPRETATION`
- `REUSABLE PRINCIPLE`
- `UNRESOLVED`

---

## 1. Machine identity remains reel-first rather than ladder-first

### MANUFACTURER FACT

Universal's official product page identifies 新ハナビ as a July 2021 `ボーナス＋RT` A PROJECT machine. It explicitly says the 5号機「ハナビ」game flow is inherited, while RB gains level-based technical intervention and the machine adds `たまやチャレンジ`, reel-array changes and revised blackout rules.

Source:
- https://www.universal-777.com/product/slot/shin_hanabi/

Universal later stated that the 2021 introduction of 新ハナビ was the occasion for establishing August 7 as “スロット・ハナビの日”, reinforcing that this title was treated as a continuation point for the series rather than an unrelated one-off.

Source:
- https://www.universal-777.com/topics/20260807005112/

### INTERPRETATION

The repeated value is not built around climbing `CZ → AT → upper state`. The machine repeatedly returns to the same physical-reel grammar, but the player can read more from that grammar over time.

This remains a strong example of **lateral depth**:

`same lever + same three reels + same three STOPs`
`→ more aiming knowledge`
`→ more slip recognition`
`→ more role denial / reach-eye recognition`
`→ faster bonus detection`
`→ better technical execution`
`→ better setting sampling`

No claim is made that this lineage is mandatory for Chappy5.

---

## 2. BET count changes the rule surface, not merely the cost

### PUBLISHED ANALYSIS

Public reel/line documentation reports:
- `3BET`: 5 valid lines;
- `1BET`: 2 valid lines.

The same public material shows 21-position reel arrays and separate valid-line diagrams.

Sources:
- https://p.hisshobon.jp/machine/list.php?c=1&d=82177&mid=3661&p=2
- https://p-kn.com/slot/3604/

P-WORLD's current machine database also records that ordinary play permits 1 or 3 medals, BIG uses 3, and REG uses 1, while visible payout values change by phase / BET count.

Source:
- https://www.p-world.co.jp/machine/database/9401

### INTERPRETATION — `BET CHANGES GEOMETRY`

A wager count is not only an economic input. It can change **which geometric relationships count as a valid result**.

Therefore the complete reel-result model is better written as:

`internal role / bonus state`
`× BET / valid-line set`
`× press location`
`× stop order`
`× reel-control response`
`= observable partial/final form`

This matters because the same physical strip can support different rule surfaces without changing the hardware.

### REUSABLE PRINCIPLE

`IF BET CHANGES VALID LINES, BET IS PART OF REEL GRAMMAR, NOT ONLY COST.`

Future research must not treat valid lines as a visual overlay added after symbol / role design.

### UNRESOLVED

This run does not reproduce the protected line diagrams or infer undocumented line-priority behavior beyond published descriptions.

---

## 3. Visible payout form is only a partial view of internal role structure

### PUBLISHED ANALYSIS

Published payout summaries show visible forms including:
- cherry: 2 medals;
- ice: 8 medals at 3BET, with different bonus-phase value;
- wind bell: 8 medals at 3BET / 5 medals at 1BET, with different BIG / REG values;
- replay: replay;
- BIG and REG completion conditions.

Source:
- https://www.p-world.co.jp/machine/database/9401

Published internal-role analysis separately distinguishes families such as:
- wind bell A / B;
- ice A / B;
- cherry A1 / A2 / B;
- normal replay;
- special-role families;
- JAC replay / RT replay relationships in bonus combinations.

Sources:
- https://nana-press.com/kaiseki/machine/134/4508/
- https://nana-press.com/kaiseki/machine/134/4509/

The bonus-detail tables show that a bonus may be associated with multiple internal routes including standalone bonus, replay-family events, wind bell B, cherry B and special-role families. This is evidence that “small role” and “bonus trigger” are not always separate visible categories.

### INTERPRETATION — `PAYOUT LABEL != INTERNAL CAUSE`

A player may see a familiar small-role-looking result while the underlying event carries additional bonus information, depending on the documented role/control relationship.

Thus a robust reel model must not collapse:

`visible payout category`
into
`unique internal cause`.

The machine's depth partly comes from the gap between **what was paid**, **what was internally selected**, and **what the player can infer from the stop process**.

### REUSABLE PRINCIPLE

`PAYOUT, INTERNAL CAUSE, AND PLAYER INFERENCE ARE THREE DIFFERENT LAYERS.`

This extends Run 2's `VISIBLE FORM IS A PROJECTION OF INTERNAL TRUTH` without claiming hidden tables are known.

---

## 4. A 500G bonus drought is not a 500G event drought

### PUBLISHED ANALYSIS

Setting-1 published normal frequencies include approximately:
- normal replay: `1/7.3`;
- wind bell combined: `1/7.7`;
- cherry combined: `1/16.4`;
- ice combined: `1/51.2`;
- bonus combined: `1/156.0`.

Sources:
- https://nana-press.com/kaiseki/machine/134/4508/
- https://www.p-world.co.jp/machine/database/9401

Using only those published probabilities as expectation values, not a deterministic play script:

| Block | Replay | Wind bell | Cherry | Ice | Bonus expectation |
|---|---:|---:|---:|---:|---:|
| 100G | ~13.7 | ~13.0 | ~6.1 | ~2.0 | ~0.6 |
| 500G | ~68.5 | ~64.9 | ~30.5 | ~9.8 | ~3.2 |

A specifically observed **500G bonus drought** is conditional and therefore does not contain the expected ~3.2 bonuses; the point is that the other recurring role samples remain numerous even while reward resolution is absent.

### INTERPRETATION — `DROUGHT REMOVES PAYOFF, NOT PHYSICAL EVIDENCE`

In an AT/CZ ladder machine, drought may be segmented by milestone approach, precursor and challenge entry. In 新ハナビ, a long no-bonus span can still contain many repeated reel questions:
- did the safe opening cover cherry / ice correctly?;
- did wind bell arrive with a familiar or informative response?;
- did the first stop slip differently from expectation?;
- did a small-role template survive STOP2?;
- did STOP3 complete it or deny it?;
- did a candidate reach eye go unnoticed until later?;
- are setting-relevant samples accumulating?

This does **not** prove every 500G drought is enjoyable. It explains why “no bonus” and “no reel content” are different hypotheses and must be tested separately.

### REUSABLE PRINCIPLES

- `DROUGHT QUALITY MUST BE TESTED AFTER REMOVING PAYOFF, NOT AFTER REMOVING ALL REEL EVENTS.`
- `FREQUENT LOW-PRESTIGE EVENTS CAN KEEP THE RULE MODEL ACTIVE DURING REWARD ABSENCE.`
- `EVENT COUNT != QUESTION QUALITY`; many small roles do not automatically make a drought good.

---

## 5. Ordinary safe play is conditional attention, not maximum attention

### PUBLISHED ANALYSIS

P-WORLD's basic procedure describes a common normal-play route:
1. aim a cherry-covering landmark on the left reel;
2. stop the right reel freely;
3. if ice does not remain a concern, the middle reel can be stopped freely;
4. if ice templates remain, aim ice on the middle reel.

It also documents an alternate red-7 aiming route that can protect cherry.

Source:
- https://www.p-world.co.jp/machine/database/9401

### INTERPRETATION — `DUTY OPENS ON DEMAND`

The player is not required to execute maximum precision on every reel every game.

A typical responsibility shape is:

`safe first aim`
`→ inspect partial form`
`→ if ice responsibility remains, raise precision`
`→ otherwise release precision`
`→ inspect final relation`

This is a concrete reel-side example of Machine Run 3's attention-state model.

### REUSABLE PRINCIPLE

`GOOD TECHNICAL DEPTH CAN BE CONDITIONAL: ROUTINE SAFE PLAY SHOULD OPEN EXTRA DUTY ONLY WHEN THE REEL STATE REQUIRES IT.`

This is different from making every STOP a permanent skill check.

---

## 6. Stop order changes both information order and responsibility order

### PUBLISHED ANALYSIS

Run 2 established that 一撃 publishes separate first-stop control material for LEFT, MIDDLE and RIGHT first stops, each separated by at least bonus-not-established, Don BIG, red-7 BIG and REG established states.

Sources:
- https://1geki.jp/slot/s_shinhanabi/47/
- https://1geki.jp/slot/s_shinhanabi/48/
- https://1geki.jp/slot/s_shinhanabi/49/

### INTERPRETATION — `QUERY ORDER ALSO REORDERS RISK / DUTY`

Run 2 defined `STOP ORDER = QUERY ORDER`.

Run 3 adds that an alternate order can also change:
- what must be aimed first;
- what role coverage is still required after STOP1;
- when the player can safely release attention;
- which bonus-sensitive contradiction can appear early;
- how much specialist knowledge is required to interpret the response.

So a useful abstraction is:

`STOP ORDER = INFORMATION ORDER + RESPONSIBILITY ORDER`

### REUSABLE PRINCIPLE

`ALTERNATE STOP ORDERS ARE MEANINGFUL WHEN THEY CHANGE BOTH WHAT IS LEARNED AND WHAT THE PLAYER MUST DO NEXT.`

A mere left/right animation permutation is not equivalent.

### EVIDENCE BOUNDARY

No missing second-/third-stop control cells are reconstructed. No proprietary priority algorithm is inferred.

---

## 7. Bonus detection is a second reel problem, not the end of reel play

### PUBLISHED ANALYSIS

New Hanabi has red-7 BIG, Don BIG and REG, with published separate control-state material and multiple documented bonus-trigger families.

Sources:
- https://1geki.jp/slot/s_shinhanabi/47/
- https://1geki.jp/slot/s_shinhanabi/48/
- https://1geki.jp/slot/s_shinhanabi/49/
- https://nana-press.com/kaiseki/machine/134/4509/

### INTERPRETATION — `DETECTION HAS TWO RESOLUTIONS`

The discovery sequence can contain two distinct questions:

1. `Has a bonus become sufficiently proven?`
2. `Which bonus is it, and how can it be entered efficiently?`

A reach eye or contradiction can resolve question 1 before the reels have resolved question 2.

Therefore:

`ordinary role reading`
`→ suspicious slip / denial / reach eye`
`→ bonus confidence`
`→ bonus-type discrimination`
`→ alignment / entry`

is still one continuous physical-reel loop.

### REUSABLE PRINCIPLE

`REWARD DISCOVERY CAN CREATE A NEW REEL QUESTION BEFORE REWARD ENTRY.`

This is why automatic announcement and automatic entry would erase a meaningful portion of this machine lineage's real interaction.

---

## 8. BIG, REG and RT redistribute the same three STOPs into different duties

### PUBLISHED ANALYSIS — BIG

P-WORLD reports BIG maximum 202 medals and one successful adjustment procedure as the path to that maximum.

Source:
- https://www.p-world.co.jp/machine/database/9401

### PUBLISHED ANALYSIS — REG

REG ends after 12 games or 8 wins and offers three skill routes:
- beginner: left-to-right / free-stop route;
- intermediate: reverse-order route with a left-reel target;
- advanced: middle-first with ice aimed on all reels within a published 2-frame tolerance.

Published machine-return values differ materially by route. At setting 1, the cited figures are 98.1% base, 100.1% with complete intermediate procedure, and 102.0% with complete advanced procedure.

Sources:
- https://1geki.jp/slot/s_shinhanabi/63/
- https://nana-press.com/kaiseki/machine/134/3989/

### PUBLISHED ANALYSIS — RT

In 花火チャレンジ, a reverse-order navigation can require right/middle free stops followed by a left BAR-area aim to avoid JAC IN. A JAC IN condition instead uses forward-order free play. Flash conditions restore ordinary small-role targeting duties. Other games can be free-stopped.

In 花火GAME, flash / warning conditions return the player to ordinary small-role targeting; otherwise free stopping is generally allowed.

Source:
- https://nana-press.com/kaiseki/machine/134/3869/

花火GAME is published as a fixed 20G RT with bonus ending the phase; setting-dependent miss rates are also published.

Source:
- https://nana-press.com/kaiseki/machine/134/3873/

### INTERPRETATION — `THE SAME CONTROLS CHANGE CONTRACT`

The machine does not need new physical controls to change phase meaning.

The same three STOPs successively become:
- normal value protection / inference;
- bonus discrimination / entry;
- BIG adjustment;
- REG chosen-difficulty execution;
- RT transition avoidance / acceptance;
- lower-duty RT observation;
- normal value protection / inference again.

### REUSABLE PRINCIPLE

`PHASE CHANGE CAN BE REAL WHEN THE CONTROL CONTRACT CHANGES, EVEN IF THE HARDWARE DOES NOT.`

This is a Game & Reel counterpart to the current cross-specialty attention-routing principle.

---

## 9. Setting knowledge and execution skill are parallel economies

### PUBLISHED ANALYSIS

Setting differences are published across:
- BIG / REG probabilities;
- wind bell / cherry / ice families;
- RT miss rates;
- some bonus-phase samples.

Examples:
- setting-1 bonus combined ~1/156.0 vs setting-6 ~1/131.6;
- setting-1 wind bell combined ~1/7.7 vs setting-6 ~1/7.3;
- 花火GAME miss: setting 1 ~1/13.4 vs setting 6 ~1/9.5.

Sources:
- https://www.p-world.co.jp/machine/database/9401
- https://nana-press.com/kaiseki/machine/134/4508/
- https://nana-press.com/kaiseki/machine/134/3873/

REG route choice / execution separately changes realized return even at the same machine setting.

Source:
- https://1geki.jp/slot/s_shinhanabi/63/

### INTERPRETATION — `TWO UNCERTAINTIES, TWO LEARNING CURVES`

The player faces at least two separable unknowns:

`SETTING UNCERTAINTY`
- What machine condition am I sampling?
- Requires accumulation and statistical humility.

`EXECUTION UNCERTAINTY`
- Can I perform the chosen operation accurately now?
- Responds directly to practice, fatigue and pace.

Mastery does not collapse these into one skill score.

A player can execute perfectly while still having weak setting evidence; a player can infer a favorable setting while losing value through poor execution.

### REUSABLE PRINCIPLES

- `SETTING EVIDENCE AND EXECUTION QUALITY MUST BE LOGGED SEPARATELY.`
- `PLAYER SKILL SHOULD NOT BE MISTAKEN FOR CONTROL OVER RANDOM OUTCOME.`
- `LONG SESSION MASTERY CAN IMPROVE BOTH SAMPLE INTERPRETATION AND EXECUTION, BUT BY DIFFERENT MECHANISMS.`

---

## 10. 100G / 500G / three-hour watch model

### 10.1 First 100G

A beginner is likely to spend attention on:
- locating a safe first-reel landmark;
- remembering when ice still needs coverage;
- understanding that ordinary stop forms can be meaningful even without a large announcement;
- distinguishing “I stopped correctly” from “I understood what stopped.”

A skilled player can compress those duties and use spare attention for:
- exact slip response;
- early role denial;
- bonus-sensitive contradiction;
- alternate stopping routes;
- setting sample counting.

### 10.2 500G without bonus

The correct question is not “were there 500 empty games?”

It is:
- did small-role handling remain physically trustworthy?;
- were repeated samples still interpretable?;
- did the player continue voluntarily reading stops or merely await relief?;
- did technical obligation become vigilance fatigue?;
- did setting-counting become a genuine secondary task or only a rationalization for continuing?

### 10.3 Three hours

No fixed game count is assigned to three hours because player pace changes with:
- skill;
- deliberate slowing after misses;
- bonus / RT frequency;
- setting-counting behavior;
- breaks and observation;
- aiming route.

Long-form public examples include a 7,800G New Hanabi report and specialist / beginner-focused actual-play programs, showing that both high-volume and learning-oriented sessions exist, but edited video is not evidence of uninterrupted three-hour comfort.

Sources:
- https://yutura.net/channel/98894/video/-uhM0NgM1pY/
- https://www.niconana.net/movie/%E3%80%90%E6%96%B0%E3%83%8F%E3%83%8A%E3%83%93%E3%80%91%E6%94%BB%E7%95%A5%E3%81%B8%E3%81%AE%E9%81%93-%E9%81%85%E3%82%8C%E9%80%86%E6%8A%BC%E3%81%97%E3%81%A8%E3%83%8F%E3%82%BA%E3%82%B7%E3%81%AE%E4%B8%8A/
- https://yutura.net/channel/3934/video/UHi1cInu2tM/

### INTERPRETATION — `MASTERY REALLOCATES OBSERVATION`

The strongest Run 3 long-session finding is not merely that experts “see more.”

Experts can often **stop spending attention on solved routine** and spend it on optional evidence:

`routine protection ↓ cognitive cost`
`optional slip / contradiction / setting questions ↑ available bandwidth`

### REUSABLE PRINCIPLE

`MASTERY SHOULD CHANGE THE DISTRIBUTION OF ATTENTION ACROSS THE SAME THREE STOPS.`

This matches Machine Run 3's `ATTENTION IS A STATE VARIABLE` without converting it into an original Chappy5 specification.

---

## 11. Complete real-machine loop reconstructed

The current Game & Reel evidence supports this non-AT-ladder loop:

`BET / valid-line selection`
`→ LEVER / internal role + possible bonus condition`
`→ REEL SPIN`
`→ first-stop aim chooses information + duty order`
`→ STOP1 mechanical response / slip evidence`
`→ STOP2 role template, denial, or early certainty`
`→ conditional STOP3 role protection / resolution`
`→ payout / replay / ordinary miss / reach-eye discovery`
`→ if bonus suspected: discriminate bonus type`
`→ bonus alignment / entry`
`→ BIG one-time adjustment OR REG chosen-difficulty repeated execution`
`→ if BIG: 花火チャレンジ`
`→ conditionally avoid or accept JAC IN using the same reels`
`→ 花火GAME lower-duty observation / setting samples / possible bonus rediscovery`
`→ return to normal`
`→ same physical reel grammar, player now carrying more learned meaning`

### INTERPRETATION

The important return is not a reset to zero knowledge.

The machine returns mechanically to ordinary play while the player can return with:
- stronger landmark memory;
- better slip expectations;
- more known reach-eye families;
- faster bonus detection;
- improved technical accuracy;
- a larger setting sample.

### REUSABLE PRINCIPLE

`POST-REWARD RETURN CAN RESET MACHINE STATE WITHOUT RESETTING PLAYER KNOWLEDGE.`

That is a major source of repeated value in a lateral-depth machine.

---

## 12. Contradictions and evidence boundaries

### CONTRADICTION / VERSION RISK

Current web search prominently surfaces 2026 `スマスロ ハナビ` pages alongside 2021 新ハナビ. They are separate machines. This run rejects 2026 values unless a source is explicitly used only as lineage context. All core numerical claims above are tied to 2021 新ハナビ sources.

### SOURCE DIFFERENCE

Some third-party pages can differ slightly in RT pure-increase or detailed independent-study values. Where this run does not need the exact value for a principle, it avoids over-resolving the disagreement.

### UNRESOLVED

- manufacturer-undisclosed full second-/third-stop control tables;
- complete priority / tie-breaking algorithm;
- exact internal mapping from every special role to every visible reach-eye family;
- exact player press-position distribution in the field;
- novice miss rates by aiming route;
- expert recognition rate for known vs unknown reach eyes;
- uninterrupted three-hour eye/hand fatigue and accuracy drift;
- physical reel visibility under different hall lighting / seat positions;
- how often real players choose alternate first-stop routes over a full day;
- complete causal attribution of setting inference decisions in field play.

These remain `UNRESOLVED`; no interpolation is permitted.

---

## 13. Run 3 reusable principles

1. `IF BET CHANGES VALID LINES, BET IS PART OF REEL GRAMMAR, NOT ONLY COST.`
2. `PAYOUT, INTERNAL CAUSE, AND PLAYER INFERENCE ARE THREE DIFFERENT LAYERS.`
3. `DROUGHT QUALITY MUST BE TESTED AFTER REMOVING PAYOFF, NOT AFTER REMOVING ALL REEL EVENTS.`
4. `FREQUENT LOW-PRESTIGE EVENTS CAN KEEP THE RULE MODEL ACTIVE DURING REWARD ABSENCE.`
5. `EVENT COUNT != QUESTION QUALITY.`
6. `GOOD TECHNICAL DEPTH CAN BE CONDITIONAL: ROUTINE SAFE PLAY SHOULD OPEN EXTRA DUTY ONLY WHEN THE REEL STATE REQUIRES IT.`
7. `STOP ORDER = INFORMATION ORDER + RESPONSIBILITY ORDER.`
8. `ALTERNATE STOP ORDERS ARE MEANINGFUL WHEN THEY CHANGE BOTH WHAT IS LEARNED AND WHAT THE PLAYER MUST DO NEXT.`
9. `REWARD DISCOVERY CAN CREATE A NEW REEL QUESTION BEFORE REWARD ENTRY.`
10. `PHASE CHANGE CAN BE REAL WHEN THE CONTROL CONTRACT CHANGES, EVEN IF THE HARDWARE DOES NOT.`
11. `SETTING EVIDENCE AND EXECUTION QUALITY MUST BE LOGGED SEPARATELY.`
12. `PLAYER SKILL SHOULD NOT BE MISTAKEN FOR CONTROL OVER RANDOM OUTCOME.`
13. `MASTERY SHOULD CHANGE THE DISTRIBUTION OF ATTENTION ACROSS THE SAME THREE STOPS.`
14. `POST-REWARD RETURN CAN RESET MACHINE STATE WITHOUT RESETTING PLAYER KNOWLEDGE.`

---

## 14. Handoff

Game & Reel Director Run 3 is complete for the current Case Study 02 cycle.

Machine / next specialist should retain:
- Game/Reel is now aligned to Machine Run 3's attention-state model through concrete reel duties;
- no undisclosed stop table has been invented;
- the 500G drought model now separates reward absence from continuing role/reel evidence;
- BET/valid-line geometry is explicitly part of the rule surface;
- setting inference and technical execution remain separate learning/economic axes;
- production remains blocked.

`REALITY_BASELINE_COMPLETE = FALSE`

`HUMAN_GATE_1_NOT_READY`

`SIGNAL//3 / FORGE//HEART / VAULT://3 = PROVISIONAL_FROZEN`

No implementation, reel code, prototype, browser play, original concept refinement, or asset production was performed.
