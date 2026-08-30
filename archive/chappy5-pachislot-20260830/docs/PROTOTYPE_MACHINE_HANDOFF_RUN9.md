# Prototype Machine Director Handoff — Run 9

Date: 2026-08-29 JST
Status: SUBMISSION_FREEZE / AUTOMATED_QA_PASSED
Delivery target: 2026-08-29 12:00 JST

Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype shells, recent commits, and `docs/PROTOTYPE_QA_HANDOFF_RUN8.md` were re-read before this Machine decision. SIGNAL / FORGE / VAULT were not changed.

## Current source-of-truth

Latest main inspected before this record: `63ddbdeac20e3f363c9af57e94c86bcc1e723b89` (`Record Playtest and QA Run 8 submission evidence`).

The last executable/test change is `3ba2795ebf52a7dd2c19c7462d9ff5157c25c25f` (`Harden final prototype submission readiness checks`). The only commit between that tested SHA and `63ddbde` adds `docs/PROTOTYPE_QA_HANDOFF_RUN8.md`; no prototype, test, workflow, or runtime file changed.

Generic Autonomous Playtest run `33227258293` succeeded against `3ba2795e` with:

- generic iPhone interaction test — PASS
- dual prototype repeated-play QA — PASS
- dual prototype submission readiness QA — PASS

Latest Pages build/deployment run `33227448426` for `63ddbde` completed successfully.

## Machine decision — freeze, do not expand

The largest submission risk is now regression caused by unnecessary late feature work, not missing breadth. Both prototypes are therefore placed in submission freeze until the 12:00 final verification run.

Do not change executable prototype code, audio timing, control geometry, reel sizing, or QA thresholds unless a concrete final-run regression is found.

The Reality Standard requires one coherent machine rather than feature count. The current candidates already preserve the intended distinct identities:

### 刻ノ一閃

Locked core chain:

`BET → LEVER → SPIN → STOP1 → STOP2 → STOP3 → slash / sword-action resolution → NEXT BET`

Submission identity to preserve:

- black / violet / gold Japanese sword cabinet
- wide LCD separated from the physical reel deck
- three substantial physical-style reels
- fixed, touch-safe control deck
- STOP and slash driven from the same interaction path
- integrated public `audio-timeline.js` baseline
- short third-STOP pause before resolution

Do not add compositor-heavy effects or retime STOP/audio without evidence. The submission question is whether the three-cut rhythm feels immediate and repeatable, not whether more effects can be added.

### ノクターン・アクアリウム

Locked core chain:

`BET → LEVER → SPIN → first STOP selects observation layer → STOP2/STOP3 collect reel evidence → MEMORY / DEPTH world response → NEXT BET`

Submission identity to preserve:

- aquarium-instrument silhouette, not a recolored Toki cabinet
- layered glass / tank / underwater-city depth
- foreground physical reels remain substantial and usable
- Plaza / Tower / Archive observation relationship remains tied to first STOP
- stable inline audio separation (`mechBus`, `observeBus`, `memoryBus`)
- optional `audio-routing.js` remains outside the published shell for this submission

Do not trade reel readability for more aquarium animation. The submission question is whether the world can attract the eye while reel play still drives discovery.

## Launch paths for final verification

Published integrated entry paths:

- 刻ノ一閃: `/Chappy5/prototypes/toki-no-issen/play.html`
- ノクターン・アクアリウム: `/Chappy5/prototypes/nocturne-aquarium/play.html`

Expected GitHub Pages host for this public repository: `https://mth310-sys.github.io`.

Final URLs to verify immediately before submission:

- `https://mth310-sys.github.io/Chappy5/prototypes/toki-no-issen/play.html`
- `https://mth310-sys.github.io/Chappy5/prototypes/nocturne-aquarium/play.html`

## Known limitations that must remain explicit

Automated QA PASS is not Human Gate 2.

Still unverified by human physical-device judgement:

- actual iPhone handheld attraction / perceived cabinet material quality
- subjective STOP1/2/3 → slash → resolution feel for 刻ノ一閃
- whether 30G of 刻ノ一閃 feels exciting rather than tiring
- whether ノクターン's aquarium presentation steals excessive gaze from physical reels
- subjective MEMORY / DEPTH emotional contrast across real handheld play
- Safari/Bluetooth/device-specific audio latency and loudness balance
- `REALITY_PRESENCE_VERIFIED`
- `HUMAN_MACHINE_VERIFIED`

These must not be upgraded by AI without human evidence.

## 12:00 final Machine run checklist

1. Re-fetch latest main and compare against this freeze commit.
2. If executable/test code changed, inspect and require fresh Generic Autonomous Playtest evidence.
3. Confirm final Pages deployment succeeds.
4. Confirm both published URLs/entry paths.
5. Confirm BET → LEVER → STOP1/2/3 and all three reels remain present in the final integrated shells.
6. Confirm Toki keeps same-event STOP → slash and Nocturne keeps reel-driven observation / memory relationship.
7. Record known HUMAN_UNVERIFIED items without weakening them.
8. If all automated/publication checks remain green, mark both as `SUBMISSION_CANDIDATE_LOCKED`, not completed machines.

Human Gate 2 remains closed.