# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Game & Reel Phase B Run 1

> Director: `Game & Reel`
> Phase: `PHASE B — SMARTPHONE APP STUDY`
> Primary app: `[777Real]SLOT魔法少女まどかマギカ2`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality Baseline: `NOT_COMPLETE`

## 0. Boundary / current shared object

Latest `main` is the sole source of truth.

- Case Study 01 スマスロ北斗の拳: current five-Director cycle complete.
- Case Study 02 新ハナビ: current cycle complete and no longer the active shared object.
- Case Study 03 `SLOT魔法少女まどか☆マギカ2`: active shared object.
- Phase A real-machine first five-Director cycle: complete and integrated.
- Machine Director formally opened `PHASE B — SMARTPHONE APP STUDY`.

This run therefore does **not** return to 新ハナビ despite the scheduled prompt's older branching language. It follows the current `main` handoff.

No original concept refinement, SIGNAL/FORGE/VAULT ranking, prototype, code, reel implementation, copied symbol art, protected animation/audio, or invented undisclosed stop-control table is included.

---

## 1. Evidence labels used in this file

- `APP-SOURCED FACT` — official 777Real / App Store / publisher documentation.
- `DIRECT APP OBSERVATION` — direct observation of the current app build. None is claimed in this run because the app itself was not interactively operated in this environment.
- `REAL-MACHINE BASELINE` — Phase A findings already recorded on main.
- `TRANSLATION INTERPRETATION` — comparison inferred from sourced app behavior + real-machine baseline.
- `UNRESOLVED` — must not be promoted to fact without direct evidence.

User reviews are treated only as QA leads and never as authoritative probability, payout, reel-control or state-transition evidence.

---

## 2. App identity and service boundary

### APP-SOURCED FACT

Sammy Networks announced distribution of the licensed 777Real app for メーシー「SLOT魔法少女まどか☆マギカ2」 beginning 2026-02-19. The current Japanese App Store listing identifies Sammy Networks Co., Ltd. as developer and identifies the underlying machine as the 2016 メーシー title.

Sources:
- Sammy Networks release: https://prtimes.jp/main/html/rd/p/000001904.000002703.html
- App Store: https://apps.apple.com/jp/app/777real-slot%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E3%81%BE%E3%81%A9%E3%81%8B%E3%83%9E%E3%82%AE%E3%82%AB2/id6758942796

### APP-SOURCED FACT

777Real is not only a machine simulator shell. Its service loop includes PG/G, settlement, events, items and other meta-layer functions. Official FAQ states a slot session ends automatically at 10,000 spins or after 24 hours, whichever relevant limit is reached.

Sources:
- https://faq.777real.net/hc/ja/articles/22218146927641-1%E5%9B%9E%E3%81%AE%E9%81%8A%E6%8A%8A%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%83%97%E3%83%AC%E3%82%A4%E4%B8%8A%E9%99%90
- https://faq.777real.net/hc/ja/articles/22218626107417-%E4%BA%A4%E6%8F%9B%E7%8E%87%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6

### TRANSLATION INTERPRETATION

The app therefore has two concurrent loops:

`SIMULATED MACHINE LOOP`

and

`777REAL SERVICE / SESSION LOOP`.

The Game & Reel study must not attribute service-layer incentives, settlement, session caps or item effects to the original 2016 cabinet.

### REUSABLE PRINCIPLE

`A DIGITAL RECREATION CAN PRESERVE A MACHINE LOOP WHILE WRAPPING IT IN A SECOND SERVICE LOOP; THE TWO MUST BE QA'D SEPARATELY.`

---

## 3. Physical body map → touch body map

### REAL-MACHINE BASELINE

Phase A established the real-machine body map as a stable physical contract:

`MAX BET / lever → three physical reels → STOP1 / STOP2 / STOP3`

with state-dependent responsibility:

- normal: small-role coverage / classification;
- ART navigation: stop-order compliance;
- BONUS: reward-symbol aiming / confirmation.

### APP-SOURCED FACT

777Real's official play guide states that, with auto OFF, pachislot play is performed by tapping the cabinet area or reels. With auto ON, BET and reel stopping are performed automatically. When an order-navigation instruction occurs during auto, the app automatically selects buttons according to the navigation.

Source:
- https://faq.777real.net/hc/ja/articles/22217934262297-%E9%81%8A%E3%81%B3%E6%96%B9

### TRANSLATION INTERPRETATION

The app does not simply miniaturize the physical control deck. It converts a multi-part hand routine into a **screen-target routine**.

This changes responsibility in two distinct ways:

1. `MANUAL TOUCH MODE` retains player timing/sequence participation but removes physical travel between lever and three STOP buttons.
2. `AUTO MODE` can remove not only repetitive BET/STOP effort but also the player's obligation to execute navigation order.

The same simulated reel event can therefore exist under multiple levels of human motor ownership.

### REUSABLE PRINCIPLE

`DIGITAL TRANSLATION CAN PRESERVE THE GAME EVENT WHILE REDUCING OR REMOVING THE ORIGINAL MOTOR CONTRACT.`

`INPUT FIDELITY AND RULE FIDELITY ARE SEPARATE AXES.`

---

## 4. What happens to STOP responsibility

### REAL-MACHINE BASELINE

Phase A's key lesson was:

`STOP RESPONSIBILITY CAN SHIFT WITHOUT MOVING THE PLAYER'S BODY MAP.`

The real cabinet keeps the same lever/STOP locations while the meaning of stopping changes by normal / ART / BONUS context.

### APP-SOURCED FACT

Official 777Real behavior confirms that auto mode performs BET and reel stops, and follows navigation automatically.

### TRANSLATION INTERPRETATION

On smartphone, the more important distinction becomes:

`STATE-DEPENDENT STOP RESPONSIBILITY`

versus

`MODE-DEPENDENT PLAYER RESPONSIBILITY`.

Example conceptual matrix:

| Simulated machine state | Manual touch | Auto |
|---|---|---|
| Normal | player participates in stopping / role recognition | motor responsibility delegated |
| ART nav | player can follow the displayed order | order execution delegated to app |
| BONUS | player may participate in required/desired aiming | potentially delegated depending on implementation |

The third row remains partly `UNRESOLVED` for this exact app because the official general FAQ does not document every まどマギ2-specific BONUS aiming behavior under each auto mode.

### REUSABLE PRINCIPLE

`IN AN APP, PLAYER RESPONSIBILITY IS A FUNCTION OF BOTH MACHINE STATE AND ASSIST MODE.`

This is a different design dimension from the original cabinet, where the machine state changes the duty while the physical input system remains permanently present.

---

## 5. Reel readability and aiming meaning

### REAL-MACHINE BASELINE

The real machine does not make every spin a high-skill reel-reading exercise, but its reel window remains important for:

- BAR landmark use;
- cherry / watermelon coverage;
- rare-role classification;
- order-nav compliance;
- BONUS alignment/confirmation.

### APP-SOURCED FACT

The App Store currently publishes iPhone screenshots for the app and the app is iPhone-compatible. 777Real's general play guide allows direct reel/cabinet tapping in manual play.

Sources:
- App Store listing above.
- 777Real play guide above.

### UNRESOLVED

This run does not have direct interactive measurement of:

- exact reel-window pixel dimensions on iPhone 12-class screens;
- whether a user can enlarge the reel area in this specific app;
- whether symbol timing is practically readable at normal animation speed;
- whether exact frame/tap latency permits meaningful conventional aiming;
- whether touching the reel itself maps to STOP1/2/3 by reel position or to a broader cabinet hit target in every context;
- whether slider / swipe / simultaneous multi-touch behaviors exist;
- whether manual red-7 aiming during BONUS feels skillful or merely ceremonial on this build.

### TRANSLATION INTERPRETATION

A visual recreation can preserve all symbols and stop forms while still weakening the **functional value of aiming** if the reel image becomes too small or touch latency becomes too opaque.

Therefore Phase B must distinguish:

`REEL IMAGE FIDELITY`

from

`REEL TASK FIDELITY`.

### REUSABLE PRINCIPLE

`A REEL IS NOT FUNCTIONALLY PRESERVED JUST BECAUSE ITS ART IS VISIBLE.`

`REEL TRANSLATION QUALITY = READABILITY × TIMING TRUST × TARGET CLARITY × CONSEQUENCE OF AIMING.`

---

## 6. Auto as a different game/reel mode, not merely convenience

### APP-SOURCED FACT

777Real supports ordinary auto play for pachislot. Official documentation states auto performs BET and reel stops. Separate official documentation also describes `おまかせオート`, which can progress play while the app is not actively displaying the normal play surface, and can operate at selected speed. Another documented paid/temporary feature is `ワンタイム高速オート` for supported machines.

Sources:
- https://faq.777real.net/hc/ja/articles/22217934262297-%E9%81%8A%E3%81%B3%E6%96%B9
- https://faq.777real.net/hc/ja/articles/22218268293401-%E3%81%8A%E3%81%BE%E3%81%8B%E3%81%9B%E3%82%AA%E3%83%BC%E3%83%88
- https://faq.777real.net/hc/ja/articles/22218320965913-%E3%83%AF%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0%E9%AB%98%E9%80%9F%E3%82%AA%E3%83%BC%E3%83%88

### UNRESOLVED

The public FAQ says some higher-speed functions vary by machine/app. This run did not directly verify which optional speed tiers are currently enabled for まどマギ2's exact 777Real build.

### TRANSLATION INTERPRETATION

For Game & Reel analysis, auto is not neutral. It changes what the player actually experiences:

Real/manual loop:

`BET → START → watch → STOP1 → STOP2 → STOP3 → classify → update state`

Delegated loop can become:

`observe outcome stream → interrupt when desired / when a state interests the player`.

`おまかせオート` goes further: some spins become **statistical progression** rather than viewed reel events.

This is a major translation of a machine whose real-world repeated value depends partly on the continuity of lever/STOP/state-context behavior.

### REUSABLE PRINCIPLE

`AUTOMATION DOES NOT ONLY SAVE TIME; IT CHANGES WHICH LAYER OF THE GAME THE PLAYER PERSONALLY OWNS.`

`A SIMULATOR MAY OFFER BOTH PLAYING THE MACHINE AND SUPERVISING THE MACHINE.`

---

## 7. Consequence of auto for rare-role learning

### REAL-MACHINE BASELINE

In Phase A, long-session mastery was expected to move from mechanical effort toward contextual interpretation:

`role detection → hidden-state / CZ / BONUS / ART value interpretation`.

### TRANSLATION INTERPRETATION

Auto can accelerate this migration dramatically.

If BET and all stops are delegated, the player can skip much of:

- BAR-landmark practice;
- cherry/watermelon branch recognition through their own stop actions;
- physical memory of stop order;
- ordinary-spin rhythm.

Yet the app can still expose:

- rare-role results;
- state transitions;
- BONUS/CZ/ART outcomes;
- setting/outcome statistics through the surrounding service.

This creates a potential split between:

`KNOWING WHAT THE MACHINE DID`

and

`KNOWING HOW TO OPERATE THE MACHINE`.

### REUSABLE PRINCIPLE

`DIGITAL ASSISTANCE CAN PRESERVE SYSTEM KNOWLEDGE WHILE SHORT-CIRCUITING MOTOR LEARNING.`

For future Chappy5 study this is a QA question, not a recommendation: when a phone adaptation removes routine motor work, does it also remove the player's path to understanding why a stopped result mattered?

---

## 8. Parallel reward economies survive the platform change — but the service adds a third economy

### REAL-MACHINE BASELINE

Phase A identified two parallel machine reward economies:

1. real BIG = immediate short reward;
2. ART = persistent future-game resource.

The same role can feed hidden state, CZ, BONUS, ART, extension, or recovery depending on context.

### APP-SOURCED FACT

777Real adds service currencies, settlement and event/item structures around the simulated machine. Official material describes PG/G conversion and settlement. The app is free-to-start and includes service-layer monetization/items.

Sources:
- 777Real App Store listing.
- https://faq.777real.net/hc/ja/articles/22218626107417-%E4%BA%A4%E6%8F%9B%E7%8E%87%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6

### TRANSLATION INTERPRETATION

The app effectively creates a third value layer:

`BIG immediate value`

`+ ART persistent machine value`

`+ service/session/meta value`.

The third layer can change why a player chooses auto, speed, settlement timing or high-setting/item usage even if the simulated underlying machine loop is unchanged.

### REUSABLE PRINCIPLE

`A SERVICE WRAPPER CAN REPRICE MACHINE STATES WITHOUT ALTERING THE MACHINE'S INTERNAL STATE GRAPH.`

This must remain separate from real-machine design lessons.

---

## 9. Setting / probability claims — evidence discipline

### APP-SOURCED FACT

The App Store review page contains user reports alleging differences in ceiling activation, bonus frequency, CZ behavior and other outcomes, and also reports from users who describe the app as very close/realistic. These reviews conflict with one another and are not controlled evidence.

Source:
- App Store review page for the 777Real app.

### INTERPRETATION

The existence of contradictory reviews is itself a QA lead: simulation trust matters heavily when the user knows the original cabinet.

### HARD RULE

Do **not** infer from user reviews that:

- the app uses different role probabilities;
- stop control differs;
- ceiling logic is incorrect;
- setting tables are inaccurate;
- a specific rare role is misimplemented.

Those require reproducible direct tests or authoritative documentation.

### REUSABLE PRINCIPLE

`SIMULATION TRUST REQUIRES REPRODUCIBLE EVIDENCE; PLAYER SUSPICION IS A TEST TARGET, NOT A SPECIFICATION.`

---

## 10. Manual 100G / auto 500G / long-session meaning

### TRANSLATION INTERPRETATION — 100G manual

A manual 100G session can still approximate the original cognitive cycle if the player intentionally taps through every spin:

`spin participation → rare-role branch → role recognition → state consequence observation`.

The critical unknown is whether small-screen scale and touch timing preserve the aiming component strongly enough.

### TRANSLATION INTERPRETATION — 500G auto

A 500G dry spell changes character under auto. In the cabinet, 500G means hundreds of repeated lever/STOP actions with intermittent rare-role precision. In the app, the same simulated dry spell can be delegated.

Therefore:

`SIMULATED WAIT LENGTH` ≠ `HUMAN EXPERIENCED WAIT COST`.

A long dry spell in the app may preserve mathematical rarity while greatly reducing motor fatigue and active attention cost.

### TRANSLATION INTERPRETATION — long session

The 10,000-spin / 24-hour service boundary and background-style `おまかせオート` make a long app session capable of alternating between:

- direct manual play;
- passive watching;
- delegated progression;
- periodic state re-entry.

That means the long-session mastery question becomes not only “what did the player learn to ignore?” but also **“what did the app make unnecessary to perform at all?”**

### REUSABLE PRINCIPLE

`DIGITAL FATIGUE CANNOT BE INFERRED FROM REAL-MACHINE SPIN COUNT ALONE.`

`COMPARE EXPERIENCED DUTY PER SPIN, NOT ONLY NUMBER OF SPINS.`

---

## 11. Phase B Game & Reel comparison matrix

| Axis | Real machine baseline | 777Real sourced behavior | Current interpretation |
|---|---|---|---|
| Start/stop body map | physical lever + 3 STOPs | cabinet/reel tapping in manual | same event chain, reduced physical travel |
| Repetitive BET/STOP | always player-operated physically | auto can perform BET + stops | player ownership can be delegated |
| ART order nav | player must obey nav | auto follows nav | rule compliance can be automated |
| Rare-role coverage | BAR landmark / branch aiming | exact app aiming fidelity unresolved | visual result may survive even if motor skill weakens |
| BONUS aiming | physical aiming meaningful | exact app-specific behavior unresolved | must verify directly |
| Reel scale | dedicated physical reel window | phone-rendered reel image | image fidelity ≠ task fidelity |
| Long dry spell | full physical repetition cost | can be auto-delegated | same simulated length, different experienced cost |
| State loop | BONUS/CZ/ART/extension | presumed simulation target, app-specific fidelity unresolved | do not treat app as proof of unresolved cabinet specs |
| Session boundary | hall/user-defined stop | 10,000 spins / 24h service cap | external service boundary |
| Economy | coins / machine result | machine result + PG/G/service layer | third value system overlays machine loop |

---

## 12. Highest-value direct-observation targets for later Phase B runs

These remain `UNRESOLVED` and should be prioritized if an environment can directly operate or capture the current iPhone app:

1. manual first 20 spins: exact touch targets for BET/start/STOP;
2. whether tapping individual reel regions maps one-to-one to STOP buttons;
3. visual size of all three reels on a 390px-class iPhone width;
4. practical BAR landmark readability at normal speed;
5. measured touch-to-stop latency consistency;
6. manual cherry / watermelon coverage behavior;
7. red-7 alignment handling in BIG;
8. ART navigation in manual versus normal auto;
9. whether normal auto, high-speed auto and `おまかせオート` differ in event visibility;
10. transition out of auto when entering BONUS/CZ/ART and whether player re-anchor is immediate;
11. whether service overlays obscure reels or STOP targets during consequential moments;
12. whether app-side counters expose information not naturally available on the cabinet;
13. repeatability tests for any claimed probability/control discrepancy before treating reviews as evidence.

---

## 13. Reusable Game & Reel lessons retained from Phase B Run 1

1. `INPUT FIDELITY AND RULE FIDELITY ARE SEPARATE AXES.`
2. `DIGITAL TRANSLATION CAN PRESERVE A GAME EVENT WHILE REMOVING ITS ORIGINAL MOTOR CONTRACT.`
3. `IN AN APP, PLAYER RESPONSIBILITY IS A FUNCTION OF BOTH MACHINE STATE AND ASSIST MODE.`
4. `A REEL IS NOT FUNCTIONALLY PRESERVED JUST BECAUSE ITS ART IS VISIBLE.`
5. `REEL TRANSLATION QUALITY = READABILITY × TIMING TRUST × TARGET CLARITY × CONSEQUENCE OF AIMING.`
6. `AUTOMATION CHANGES WHICH LAYER OF THE GAME THE PLAYER PERSONALLY OWNS.`
7. `DIGITAL ASSISTANCE CAN PRESERVE SYSTEM KNOWLEDGE WHILE SHORT-CIRCUITING MOTOR LEARNING.`
8. `A SERVICE WRAPPER CAN REPRICE MACHINE STATES WITHOUT ALTERING THE MACHINE'S INTERNAL STATE GRAPH.`
9. `SIMULATED WAIT LENGTH ≠ HUMAN EXPERIENCED WAIT COST.`
10. `DIGITAL FATIGUE MUST BE COMPARED BY EXPERIENCED DUTY PER SPIN, NOT SPIN COUNT ALONE.`

These are research principles only. They are not original Chappy5 concept decisions.

---

## 14. Gate / handoff

`CASE_STUDY_03_GAME_REEL_PHASE_B_RUN1_COMPLETE = TRUE`

`CURRENT_SHARED_OBJECT = CASE_STUDY_03`

`CURRENT_PHASE = PHASE_B_SMARTPHONE_APP_STUDY`

`NEXT_FIXED_DIRECTOR = VISUAL_&_MECHANISM`

`HUMAN_GATE_1_NOT_READY`

`REALITY_BASELINE_COMPLETE = FALSE`

`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`

`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

The next Director should study the same 777Real app as a smartphone visual/mechanism translation, using this run's distinction between `reel image fidelity` and `reel task fidelity`, without assuming any unresolved app behavior is factual.