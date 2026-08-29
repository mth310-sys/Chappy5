# Prototype Visual & Mechanism Director Handoff — Run 9

Date: 2026-08-29 JST
Status: SUBMISSION_FREEZE_ACCEPTED / VISUAL_PRESENTATION_LOCKED
Delivery target: 2026-08-29 12:00 JST

Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated `play.html` shells, recent commits, Machine Director Run 9, and Game & Reel Director Run 9 were re-read before this pass. SIGNAL / FORGE / VAULT were not changed.

## Decision

Machine Run 9 placed both prototypes in submission freeze after successful automated iPhone interaction, repeated-play QA, submission-readiness QA, and Pages deployment evidence. Game & Reel Run 9 explicitly constrains this Visual pass to presentation verification unless a concrete rendering regression is found.

No concrete executable rendering defect was found in the current source review that justifies risking a late runtime/layout/compositor change. Therefore this run intentionally makes **no executable prototype change**. This is a submission-protection decision, not a claim that either machine is visually complete.

The current public shells remain the release candidates to preserve.

---

## 刻ノ一閃 — final Visual lock

Current integrated presentation preserves the intended separate identity:

- black / violet / gold Japanese sword cabinet direction
- wide LCD separated from the physical three-reel deck
- existing blade bridge / screen frame / side spine reflections
- physical STOP1 / STOP2 / STOP3 mapped to three successive visual cut beats
- stopped reel and stopped symbol reflected back onto existing cabinet surfaces
- no return of the WebKit-hot blur / perspective / mix-blend compositor stack removed during stabilization
- 390px-specific rules preserve control geometry rather than scaling or translating the operation deck

Submission Visual requirement remains:

`physical STOP → stopped reel evidence → blade/cabinet reaction → short resolve beat`

The reels must remain the cause of the sword presentation, not scenery beneath an autonomous LCD effect.

Do not add a new meter, large HUD, continuous blade animation, large blur stack, perspective stack, or layout height before final verification.

---

## ノクターン・アクアリウム — final Visual lock

Current integrated presentation preserves a distinct aquarium-instrument identity rather than a recolored Toki shell:

- vertical aquarium / observation-instrument silhouette
- layered tank glass presentation
- circular observation ports inside the aquarium world
- Plaza / Tower / Archive selection tied to first physical STOP
- physical reel evidence retained through STOP2 / STOP3 before memory resolution
- tank frame / optical links / observation windows respond to the same observation event
- foreground reel deck remains substantial against the aquarium world
- 390px rules reduce observation-window and optical sizes without moving the operation deck

Submission Visual requirement remains:

`physical reel choice → observation port → collected evidence → MEMORY / DEPTH world response`

The aquarium may attract the eye, but it must not demote the physical reels into decoration.

Do not force the optional Run 8/Run 9 helper modules into the stable public shell immediately before submission without a concrete defect and a fresh QA pass.

---

## Reality / verification status

The current latest `main` before this Visual record was `1104e14c2acafa8dcd01fe702e39ef95acf1ebd3` (`Record Game and Reel Run 9 submission freeze handoff`).

The latest Pages build/deployment observed for that SHA completed successfully.

Automated/publication evidence does **not** upgrade the following human-only checks:

- actual iPhone handheld cabinet attraction and material feel
- subjective STOP1/2/3 → slash → resolution feel for 刻ノ一閃
- whether the black/violet/gold cabinet has sufficient physical weight in real Safari rendering
- whether ノクターン's aquarium presentation steals excessive gaze from the reels
- perceived glass depth / transparent-cylinder quality on a physical iPhone
- subjective 30–50G visual fatigue
- `REALITY_PRESENCE_VERIFIED`
- `HUMAN_MACHINE_VERIFIED`

These remain Human Gate 2 items.

## Next Sound & Experience handoff

Submission freeze remains active.

Do not add new audio layers merely to create a new Run number. Preserve the current integrated audio behavior unless a concrete regression is found during final verification.

For 刻ノ一閃, keep the third STOP and short resolve pause aligned with the existing visual three-cut phrase.

For ノクターン, keep the quiet aquarium baseline and make sure observation/memory audio does not overpower physical reel-stop feedback.

If the final QA/publication checks remain green, the next Machine Director should lock both as `SUBMISSION_CANDIDATE_LOCKED`, not completed machines.

SIGNAL / FORGE / VAULT remain untouched.
