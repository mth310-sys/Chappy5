# Chappy5 — Technology Gap Audit / Game & Reel Director Run 1

> Shared object: `TECHNOLOGY_GAP_AUDIT`
> Director: `GAME_REEL`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Scope: compare accumulated real-machine/app learning against actual Chappy5/遊創舎 capability. No original concept design.

## 0. Executive answer

Game & Reel does **not** recommend indefinite additional case-study collection before every production step. The accumulated studies have already taught the broad machine-law families needed to understand:

- AT/state-ladder machines;
- normal/reach-eye/technical-intervention machines;
- presentation-led state machines;
- direct-notification / short-resolution-horizon machines;
- real-machine → official-mobile-app translation differences.

However, Chappy5 is **not yet Game & Reel production-ready** merely because these families are understood.

The main remaining deficits are not another famous-machine overview. They are narrower and more technical:

1. a reusable, verified **reel-stop/control model** capable of representing aim position, stop order, allowed slip, internal role and observed stop form without inventing undisclosed control;
2. an objective **real-input → virtual-stop timing model** for iPhone touch;
3. a reusable **math/simulation evidence pipeline** connecting authored probabilities, deterministic replay and long-run statistical acceptance;
4. a formal separation of **logical game count, wall-clock time and action ownership** for manual / accelerated / auto play;
5. evidence that the above can run together on an actual iPhone without input ambiguity or timing drift.

The strongest recommendation is therefore: **learn/build measurement capability next, not simply accumulate more machine trivia.** Any additional real-machine study should be targeted at unresolved control-law or input-feel questions rather than broad product surveys.

---

## 1. Capability already held

### 1.1 Deterministic rule/state architecture — `LEARNED`

遊創舎 already has a proven architecture direction in `yusosha-usage-test/test_lupin_zero/ARCHITECTURE_V2.md`:

- evidence-backed spec separated from runtime;
- pure deterministic JavaScript machine kernel;
- probability boundary isolated from presentation;
- injectable/seedable random source;
- state transitions separate from Phaser/DOM/audio/timers;
- physical reel-stop state owned by the kernel;
- event-driven orchestration;
- forced-role / forced-state debug paths;
- deterministic replay and Playwright integration strategy.

The current Lupin reconstruction also contains numerous resolver/runtime/spec modules for ceilings, chance-eyes, guarantees and state behavior. This proves the team can decompose pachislot law into auditable deterministic modules rather than embedding logic in visual code.

**Classification:** `LEARNED`

**Additional study required now:** no general architecture study.

**Acquired evidence:** repository architecture plus functioning resolver/runtime/spec patterns.

**Do not confuse with:** proof that a high-fidelity normal-type reel-control engine already exists. It does not.

### 1.2 Evidence status discipline — `LEARNED`

Current work already preserves `UNVERIFIED / UNRESOLVED / CONFLICT` and forbids unknown probabilities from silently entering production behavior. This is directly compatible with reel-control research where complete commercial stop-control tables are often unavailable.

**Classification:** `LEARNED`

**Acquisition evidence:** unresolved facts remain explicit and tests/debug routes may expose them without promoting them into automatic production law.

### 1.3 Browser regression / deterministic interaction infrastructure — `LEARNED`

Chappy5 itself contains Playwright configuration and generic interaction testing, while prior遊創舎 projects have browser regression experience. We therefore do not need to learn from zero how to test BET/START/STOP/state transitions in a browser.

**Classification:** `LEARNED`

**Limit:** Browser PASS alone does not prove reel feel, touch latency or physical readability.

### 1.4 State-machine and reward-loop literacy — `LEARNED`

Across the completed reality studies, the team now understands that machines can create repeated value through different laws:

- long state progression and upper-state aspiration;
- physical-reel / reach-eye / technical-intervention mastery;
- state/presentation integration;
- direct notification and compressed post-hit horizons;
- mobile acceleration/automation changing action ownership.

This is enough to avoid assuming that every pachislot needs `CZ → AT → upper state` progression.

**Classification:** `LEARNED`

**Additional broad case study required for this principle:** no.

---

## 2. Reel-control capability audit

### 2.1 Generalized stop-control representation — `TECHNOLOGY GAP`

New Hanabi study makes clear that an important normal-type machine cannot be represented faithfully by only:

`role selected → choose matching final symbol row`.

The runtime needs a richer model capable of expressing, at minimum:

- reel array and indexed physical positions;
- valid lines;
- internal role/result identity;
- requested stop position from the player's aim/timing;
- stop order;
- legal slip/search window;
- selected actual stop position;
- observed stop form;
- role denial / contradiction relationships;
- bonus-pending or state-dependent differences where authored and known;
- technical-intervention success windows;
- evidence status of every control rule.

遊創舎's deterministic architecture can host this, but the repository evidence inspected in this audit does **not** prove a reusable, verified engine of this depth already exists.

**Capability already held:** deterministic JS kernel, modular reel/state ownership, test injection.

**Understood but not implemented/verified:** the distinction `internal role ≠ requested stop ≠ actual stop ≠ visible reach eye`.

**Missing knowledge:** not a need to obtain proprietary commercial stop tables. What is missing is our own generic representation and authored-control methodology.

**Acquirable in current workflow:** yes. Pure JS + deterministic tests are sufficient.

**Priority:** `CRITICAL`.

**Evidence required to mark acquired:**

1. original/non-third-party test reel arrays;
2. deterministic stop-request vectors covering all three reels, multiple stop orders and boundary aims;
3. expected actual stop indices and resulting visible forms;
4. tests proving no impossible slip/control output;
5. explicit unresolved behavior support rather than guessed fallback;
6. replay from the same seed + input trace producing identical stops.

### 2.2 Proprietary real-machine stop tables — `KNOWLEDGE GAP`, but **not a required acquisition target**

Commercial machines often do not publicly disclose complete stop-control tables. Completed case studies can establish many visible reach-eye families and player routines without proving every hidden control branch.

**Classification:** `KNOWLEDGE GAP`.

**Priority:** `LOW AS A COLLECTION TARGET`.

**Reason:** Chappy5 must create original machines, not reproduce protected commercial control tables. The useful lesson is the design grammar and QA method, not extraction of proprietary tables.

**Acquisition rule:** never mark commercial hidden control as known without authoritative evidence.

**What should be learned instead:** how to author and verify our own control table with equivalent rigor.

### 2.3 Slip / stop-result readability model — `TECHNOLOGY GAP`

The studies show that slip is not only motion polish. In reel-centered play it is information. A one-frame-ish visual shortcut that lands on the correct row may still fail if the player cannot perceive why the stop differs from the aim.

Game & Reel therefore needs a data contract that tells presentation:

`stop request → selected stop index → slip distance → control reason/evidence class`.

The Visual Director owns how that is made physical; Game & Reel owns the logical truth.

**Classification:** `TECHNOLOGY GAP`.

**Priority:** `HIGH`.

**Evidence required:** event trace records requested index/timestamp, selected stop index and slip count for every STOP; a test can reconstruct the final three-reel window from the trace alone.

---

## 3. Input and real→phone translation audit

### 3.1 Touch timestamp → intended reel position — `PLATFORM GAP`

A physical STOP button has travel, force, click and a spatially fixed relationship to rotating reels. iPhone touch does not. A high-skill reel game therefore cannot simply interpret a touch at whatever JavaScript frame receives the event and call that equivalent.

The current architecture is iPhone-first, but inspected evidence does not establish an objective model for:

- touch event timestamp;
- runtime clock timestamp;
- reel angular/index position at the logical stop request;
- render-frame latency;
- allowed input buffering;
- repeated rapid STOP1/2/3 behavior;
- background/resume effects.

**Classification:** `PLATFORM GAP`.

**Capability already held:** browser touch controls and deterministic clocks are technically feasible.

**Missing knowledge:** real device latency/jitter distribution and acceptable translation rule.

**Acquirable in current workflow:** yes, but requires real iPhone measurements, not desktop inference.

**Priority:** `CRITICAL` for any machine where aiming/stop timing matters; `MEDIUM` for simple notification-first machines.

**Evidence required:** real-device trace collecting touch timestamps and logical stop acceptance over at least hundreds of STOP operations, reporting median/tail latency and double-input/drop rate under normal and rapid play.

### 3.2 Manual / wait-cut / auto as separate action contracts — `LEARNED`, implementation evidence pending

Official-app study established:

- time compression is not the same as action delegation;
- preserving game count does not preserve action cost;
- AUTO can retain outcome uncertainty while removing action uncertainty;
- the same 32G can be played, accelerated-played or observed.

The concept is sufficiently learned.

**Classification:** `LEARNED` as product knowledge.

If Chappy5 later implements these modes, the implementation itself will need separate specification and QA, but no extra broad study is required now.

### 3.3 Stop-order / aiming ownership under automation — `PLATFORM GAP`

For reel-centered play, AUTO cannot silently stand in for skilled human aim and still be counted as the same game experience. Any future AUTO must declare who selects stop order and target policy.

**Classification:** `PLATFORM GAP`.

**Priority:** `MEDIUM`; only relevant when such a feature is proposed.

**Evidence required:** mode-specific input contract and telemetry showing whether decisions were human or automated.

---

## 4. Math / probability / simulation audit

### 4.1 Seeded deterministic simulation — `LEARNED`

The architecture already specifies a single random-source boundary and seeded replay. This is the correct base.

**Classification:** `LEARNED`.

### 4.2 Statistical acceptance pipeline — `MEASUREMENT GAP`

The workflow requires 100G / 1,000G / 10,000G and longer mathematical verification, but inspected evidence does not yet prove a reusable Chappy5 acceptance harness that automatically compares simulation output to authored theoretical targets with confidence/tolerance rules.

This is different from merely running many spins.

Required output should include, depending on machine:

- role rates by setting/state;
- bonus/AT/CZ entry rates;
- state occupancy;
- payout and coin difference distribution;
- cycle length;
- technical-intervention success assumptions;
- post-bonus/RT occupancy;
- impossible transition detection;
- seed/revision reproducibility.

**Classification:** `MEASUREMENT GAP`.

**Capability already held:** deterministic JS and long-run simulation are feasible; prior projects have many logic tests.

**Acquirable in current workflow:** yes. This can run in JS/Node/GitHub; Python may assist offline but must not be required browser runtime.

**Priority:** `CRITICAL` before balancing any original machine.

**Evidence required:** an original synthetic spec with known theoretical values, automated million-spin-class or suitably large simulation, and PASS/FAIL tolerances that correctly reject an intentionally biased implementation.

### 4.3 Skill-adjusted payout model — `TECHNOLOGY GAP`

New Hanabi demonstrates that player technique can change realized payout without changing the same underlying machine identity. Chappy5 must be able to model expected outcome under multiple skill policies when a future original machine contains technical intervention.

At minimum distinguish:

- perfect success;
- measured/assumed success rate;
- beginner policy;
- deliberate failure/miss;
- assist/automation policy if present.

**Classification:** `TECHNOLOGY GAP`.

**Priority:** `HIGH` only for a skill-dependent machine; otherwise dormant.

**Evidence required:** simulator parameterizing skill policy and showing monotonic, explainable payout/RT/game-flow differences with deterministic replay of individual success/failure events.

### 4.4 Relief/reward cannot be inferred from expected value — `LEARNED`

Completed studies already taught that outcome relief after a long dry spell must not be credited to intrinsic repeated-play quality. This is a QA/product principle, not a missing mathematical feature.

**Classification:** `LEARNED`.

---

## 5. Complete-loop modeling audit

### 5.1 Unified game-cycle trace — `TECHNOLOGY GAP`

For production readiness, Game & Reel should be able to emit one canonical trace covering:

`BET → START accepted → role resolved → reel spin → STOP1/2/3 requests → actual stop positions → pay/bonus judgement → payout → state transition → next game ready`.

Current architecture names many of these events, but Chappy5 itself is intentionally pre-production and therefore does not yet prove the complete reusable contract.

**Classification:** `TECHNOLOGY GAP`.

**Priority:** `CRITICAL` at Stage 2/3, not before Human Gate.

**Evidence required:** after a machine is approved, one original synthetic fixture can be replayed exactly from seed + inputs and yields identical state, stops, payout and event trace.

### 5.2 100G / 500G / 3-hour model as separate exposures — `LEARNED` concept, `MEASUREMENT GAP` in instrumentation

Research has established that these are not simply bigger sample counts. Long sessions change:

- action count;
- attention demand;
- state exposure;
- learned aiming behavior;
- dry-spell interpretation;
- fatigue.

Game & Reel can define the logical exposure, but objective long-session experience measurement belongs partly to Playtest & QA.

**Classification:**
- conceptual separation: `LEARNED`;
- reusable telemetry/measurement: `MEASUREMENT GAP`.

**Game & Reel handoff requirement:** telemetry must expose enough state/input/reel data for QA to correlate fatigue or engagement with actual machine law.

---

## 6. Knowledge that does **not** need more broad study now

The following are sufficiently understood at a reusable-principle level and should not trigger another broad case study by themselves:

- not every machine needs an AT upper-state ladder;
- reels can be the primary information/display surface;
- reach eyes derive meaning from role/control/denial context, not from attractive symbol geometry alone;
- the same three STOPs can reveal more to skilled players than beginners;
- technical intervention should reward mastery without making basic operation unsafe;
- quiet baseline presentation can increase the informational value of small deviations;
- direct notification can sustain a machine with low continuous presentation density;
- post-hit short horizons can raise vigilance without constant escalation;
- mobile acceleration and automation change experience even when logical outcomes remain unchanged;
- unknown proprietary control data must stay unknown.

These are `LEARNED` until contradicted by future evidence.

---

## 7. What Game & Reel recommends learning next

### Priority A — before claiming Game & Reel capability readiness

1. **Generic original reel-control laboratory** — not a production machine and not a copied commercial reel table; a deterministic technical fixture proving aim → slip → stop form → judgement.
2. **Real iPhone stop-input measurement method** — timestamp/jitter/drop/double-input evidence.
3. **Statistical acceptance harness** — authored theory vs long-run simulation with automated rejection of biased behavior.
4. **Canonical full-spin event trace/replay contract**.

These are technology/measurement studies, not new original-machine design. They must remain blocked from becoming product implementation before Human Gate if the governing workflow treats them as production assets; pure research specifications and non-product technical fixtures may be considered by Machine Director under Stage 1 rules.

### Priority B — only if a future approved machine needs the feature

5. skill-policy payout simulation;
6. AUTO/assist stop-policy ownership model;
7. high-density state-ladder stress harness;
8. bonus-pending / RT / technical-intervention specialized reel-control extensions.

### Not recommended as next default step

- another broad survey of famous reach eyes;
- attempting to reverse-engineer proprietary complete commercial stop tables;
- adding more states merely to exercise the engine;
- implementing a Chappy5 production reel set before `HUMAN_MACHINE_APPROVED`.

---

## 8. Acquisition matrix

| Item | Class | Current capability | Can acquire with GitHub/browser/iPhone? | Priority | Objective acquisition evidence |
|---|---|---|---|---|---|
| Deterministic state architecture | LEARNED | Proven architecture/modules | Yes / already | — | existing deterministic spec/runtime pattern |
| Evidence-status boundary | LEARNED | Proven | Yes / already | — | unresolved facts never auto-promoted |
| Browser interaction regression | LEARNED | Playwright present | Yes / already | — | existing generic + project test capability |
| Generalized stop-control engine | TECHNOLOGY GAP | architecture can host it; not proven reusable | Yes | CRITICAL | deterministic aim/slip/stop-order vectors all pass |
| Commercial proprietary stop tables | KNOWLEDGE GAP | incomplete by nature | Sometimes, but not required | LOW | only authoritative evidence may promote facts |
| Stop/slip event trace | TECHNOLOGY GAP | partial architecture concept | Yes | HIGH | requested vs actual index/slip reconstructable |
| iPhone touch→stop timing | PLATFORM GAP | browser input exists, equivalence unproven | Yes, real device required | CRITICAL | latency/jitter/drop telemetry |
| Manual/wait-cut/auto distinction | LEARNED | concept learned from app study | Yes | — | separate contracts when implemented |
| Seeded replay | LEARNED | architecture defined | Yes | — | same seed+inputs reproduces same trace |
| Statistical acceptance harness | MEASUREMENT GAP | simulations possible, acceptance framework unproven | Yes | CRITICAL | theoretical fixture + automatic PASS/FAIL |
| Skill-adjusted payout simulation | TECHNOLOGY GAP | not proven generic | Yes | HIGH if needed | multiple skill policies yield explainable results |
| Unified spin trace | TECHNOLOGY GAP | event model exists, Chappy5 reusable contract unproven | Yes | CRITICAL after approval | exact replay across full spin cycle |
| Long-session logical telemetry | MEASUREMENT GAP | can be instrumented | Yes | HIGH | 100G/500G/3h state+input trace consumable by QA |

---

## 9. Answer to the Human directive

**Yes, there are still things Game & Reel should learn — but the next value is concentrated in control, measurement and platform translation, not in collecting more broad machine examples.**

The accumulated case studies are already diverse enough to establish multiple real pachislot lineages. The remaining uncertainty is whether Chappy5 can **execute and prove** those lessons:

- can we author our own reel law rigorously?
- can a player's iPhone STOP be translated into that law reproducibly?
- can we prove the math rather than merely run it?
- can we replay a complete game exactly?
- can QA observe logical exposure separately from wall-clock/action exposure?

Until those questions have evidence, Game & Reel remains **knowledge-rich but capability-incomplete**.

---

## 10. Gate / handoff

`GAME_REEL_AUDIT = COMPLETE_RUN1`
`GAME_REEL_ADDITIONAL_BROAD_CASE_STUDY_DEFAULT = NOT_RECOMMENDED`
`GAME_REEL_NEXT_LEARNING_FOCUS = CONTROL_MEASUREMENT_PLATFORM_TRANSLATION`
`NEXT_FIXED_DIRECTOR = VISUAL_MECHANISM`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
