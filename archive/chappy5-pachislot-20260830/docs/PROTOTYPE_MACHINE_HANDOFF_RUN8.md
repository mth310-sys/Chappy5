# Prototype Machine Director Handoff — Run 8

Date: 2026-08-29 JST
Status: SUBMISSION_STABILIZATION
Delivery target: 2026-08-29 12:00 JST

## Source of truth re-read

Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype shells, current Toki audio timeline, Playtest & QA Run 7 handoff, recent commits, latest GitHub Actions result, and the latest Generic Autonomous Playtest evidence artifact were re-read before this change.

SIGNAL / FORGE / VAULT were not changed.

## Latest browser evidence

Generic Autonomous Playtest run `33224528664` completed successfully on the Run 7 QA contract.

At the 390×664 submission viewport:

### 刻ノ一閃
- outer viewport: 390×664, no outer horizontal/vertical scroll;
- BET: 64×46;
- LEVER: 64×47;
- STOPs: about 53.3×54 each;
- three reels: 100×106 each;
- all three reels and all primary controls are inside the visible viewport;
- first user gesture moved `audioTech` to `running`;
- `audio-timeline.js` is integrated into the published shell.

### ノクターン・アクアリウム
- outer viewport: 390×664, no outer scroll;
- BET: 64×46;
- LEVER: 64×47;
- STOPs: 52×54 each;
- three reels: 98×106 each;
- all three reels and all primary controls are inside the visible viewport;
- first user gesture moved `audioTech` to `running`;
- stable inline mechanism / observation / memory audio remains the submission baseline;
- the inner document is taller than the viewport, but the measured physical reels and entire primary operation deck remain visible. Do not expand vertical presentation before submission.

## Machine decision

The largest remaining machine-level risk is no longer feature shortage. It is **submission regression caused by late integration changes**.

Both prototypes now satisfy the automated 390px operation/reel/audio contracts. From this point, protect the following as submission locks:

- fixed control geometry;
- three physical reels remain visually prominent;
- Toki STOP → slash → resolve causal timeline;
- Nocturne reel → observation channel → memory/world response causal link;
- no heavy compositor effects reintroduced into Toki;
- no audio-routing rewrite forced into Nocturne solely for architectural neatness;
- no new tall HUD or explanatory block that pushes reels/controls down on iPhone.

## Run 8 code change

Toki's integrated-shell recovery was hardened in `prototypes/toki-no-issen/audio-timeline.js`.

The earlier Safari/WebKit race guard used one recovery point at 60ms. Run 8 now uses bounded probes at 0/80/240ms and only re-dispatches the iframe `load` event when the iframe is complete and `.toki-tempo` is still absent. `.toki-tempo` remains the idempotence marker, so a normal load does not receive a second integration pass.

A diagnostic `body.dataset.tokiShell` now exposes `waiting / recovering / integrated / integration-missed` without changing game timing. This is specifically for final submission QA and makes a shell-integration miss distinguishable from an audio or game-state issue.

No game math, reel outcome, visual identity, STOP timing, or audio timing values were changed.

## Next Game & Reel Director

Treat both machines as submission candidates rather than expansion targets.

If the fresh post-Run-8 WebKit test passes, preserve all submission locks and only make changes that clearly improve repeated-play cadence without altering geometry or integration architecture. If it fails, fix only the exact measured regression before further content work.

Human Gate 2 remains closed. Automated PASS does not equal `HUMAN_MACHINE_VERIFIED`; actual iPhone feel, speaker/Bluetooth latency, visual attraction, and long-play fatigue still require Human verification.
