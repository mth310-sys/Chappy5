# Dual Prototype Playtest & QA Director Handoff — Run 4

Date: 2026-08-29 JST
Status: `QA_RUN4_DIAGNOSTICS_ADDED_TOKI_CRASH_UNRESOLVED`

## Source of truth

Re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both prototype directories, latest integrated `play.html` paths, recent commits, and `docs/PROTOTYPE_SOUND_HANDOFF_RUN4.md` before this QA pass.

Latest `main` remains sole source of truth. SIGNAL / FORGE / VAULT were not changed.

## Latest completed browser evidence

Latest completed Generic Autonomous Playtest inspected in this pass: run `33213376148`, head `77fe06e` (Nocturne Sound Run 4 code commit).

- Generic iPhone interaction smoke: PASS.
- Dual repeated-play QA: FAIL.
- Failure artifact: `generic-playtest-evidence`, artifact id `9702486583`.
- Actual failure evidence: `dual-toki-round-4-failure.json`.
- Failure is not a normal button-stability timeout. WebKit reports `Target page, context or browser has been closed` while resolving a STOP bounding box.
- The saved geometry before failure remains stable: BET 64x46, LEVER 64x47, STOPs about 53.3x54 at the expected 390px viewport.
- No current snapshot was obtainable after failure because the page/browser target itself had already closed.

This means the active blocker remains a Toki long-run/WebKit stability failure, not demonstrated control-deck drift. Nocturne previously completed the 50G repeated-play route and is retained as the stability comparison baseline.

## QA code change

Commit `a2a8cee` — `Strengthen dual prototype crash and audio diagnostics`.

`playtest/dual-prototype-qa.spec.js` now adds:

- persistent checkpoint JSON written before and after BET / LEVER / each STOP, so the last good phase survives even when WebKit closes before screenshot collection;
- explicit `page.on('crash')` and `page.on('close')` evidence;
- top-document `body.dataset.audioTech` capture so technical mute/resume failure is separated from deliberate game silence;
- first-real-gesture assertion that audio state is not `resume-failed` or still `not-started`;
- inner DOM-node count, active-animation count and machine-class capture during repeated play;
- repeated-play DOM growth guard (`baseline + 12`) to detect accidental per-game node accumulation;
- five-game checkpoints while preserving the full continuous 30G Toki / 50G Nocturne requirement;
- existing 44px touch-size, clipping, coordinate-drift, stray-touch, six stop-order and reload smoke checks remain active.

The long-run test was not weakened by adding reloads or reducing game count.

## Next Machine Director decision

Treat Toki stability as the maximum bottleneck until a fresh 30G WebKit run passes.

If the new evidence again reports a page/browser crash, inspect the final checkpoint first. In particular compare `activeAnimations`, `machineClass`, `audioTech` and exact phase. If DOM count is flat and the crash clusters around STOP presentation, the next product-side candidate is Toki-only compositor pressure from full-machine filters / blend-mode transient layers rather than game-state logic. Prefer reducing expensive whole-cabinet compositing while preserving the visible sword timing before removing game meaning or STOP feedback.

If Toki reaches 30G and Nocturne reaches 50G, return immediately to Human-unverified feel checks: Toki STOP-to-slash attachment, Nocturne reel salience under LCD attention, actual iPhone Safari sound onset/resume, Bluetooth uncertainty, clipping and 30-50G fatigue.

## Verification state

- `PLAYTEST_UNVERIFIED` remains for the current Sound Run 4 integrated state until the fresh workflow completes.
- Toki 30G automated PASS is not claimed.
- Nocturne remains the current automated long-play baseline from prior completed runs, but Human feel remains unverified.
- `AUDIO_UNVERIFIED`, `REALITY_UNVERIFIED` and Human Gate 2 remain in force.

SIGNAL / FORGE / VAULT remain untouched.
