# Prototype Playtest & QA Director Handoff — Run 8

Date: 2026-08-29 JST
Status: SUBMISSION_CANDIDATE_AUTOMATED_QA_PASS
Delivery target: 2026-08-29 12:00 JST

Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both prototype directories/current integrated shells, recent commits, and `docs/PROTOTYPE_SOUND_HANDOFF_RUN8.md` were re-read before this QA decision. SIGNAL / FORGE / VAULT were not changed.

## Evidence reviewed

Latest tested main before this record: `3ba2795ebf52a7dd2c19c7462d9ff5157c25c25f` (`Harden final prototype submission readiness checks`).

Generic Autonomous Playtest run `33227258293` completed successfully against that exact SHA. All three relevant automated stages passed:

- generic iPhone interaction test — PASS
- dual prototype repeated-play QA — PASS
- dual prototype submission readiness QA — PASS

The repeated-play suite retains the bounded long-play target: 刻ノ一閃 30G and ノクターン・アクアリウム 50G, including stop-order variation, invalid/repeated input pressure, geometry stability, DOM/animation health and recovery checks.

The submission-readiness suite now also protects:

- ~390px iPhone-class no-horizontal-overflow presentation
- BET / LEVER / STOP1/2/3 >=44px touch height after integrated-shell geometry settles
- all three physical reels remain visible/substantial and inside the no-scroll play surface
- first valid cabinet gesture attempts Web Audio startup
- a simulated background/recovery boundary followed by a valid cabinet gesture does not leave `audioTech` as `not-started` or `resume-failed`
- 刻ノ一閃 published shell still integrates `audio-timeline.js` and STOP input drives `slash(stopNo,i)` from the same event path
- ノクターン published shell retains separate `mechBus`, `observeBus`, `memoryBus`
- ノクターン optional `audio-routing.js` remains deliberately outside the published shell until a future explicit integration + re-QA

## 刻ノ一閃 QA judgement

Automated submission candidate: PASS.

The current evidence supports the mechanical chain remaining operable through repeated play and preserves the same-event STOP → slash contract. The public Sound timeline remains the submission baseline. No further presentation/audio retiming should be made before delivery without a concrete regression or human-device finding.

Still HUMAN_UNVERIFIED: whether STOP1/2/3 → slash → STOP3 silence → resolution is subjectively satisfying on a physical iPhone speaker/Bluetooth path, and whether 30G feels exciting rather than tiring.

## ノクターン・アクアリウム QA judgement

Automated submission candidate: PASS.

The current evidence supports 50G repeated operation while retaining three substantial physical reels and fixed controls in the same no-scroll iPhone surface. The stable inline audio architecture remains locked for submission; aquarium ambience/world presentation must not replace or mask the physical STOP layer.

Still HUMAN_UNVERIFIED: whether the aquarium world steals too much gaze from the reels during real handheld play, whether MEMORY/DEPTH contrast is emotionally sufficient, and Bluetooth/device-specific audio feel.

## Submission freeze recommendation to next Machine Director

Treat both prototypes as automated-QA-passed submission candidates. From this point to 12:00 JST, prefer freeze/verification over feature addition.

Before final submission record:

1. Re-fetch latest main and ensure no later Director commit regressed the tested contracts.
2. Confirm Pages deployment for the final SHA succeeds.
3. Re-run/inspect Generic Autonomous Playtest for the final SHA if any executable/test code changed after this record.
4. Record the two launch paths and known HUMAN_UNVERIFIED items explicitly.
5. Do not claim `HUMAN_MACHINE_VERIFIED`, `REALITY_PRESENCE_VERIFIED`, real-device Bluetooth verification, or subjective long-play approval without human evidence.

Human Gate 2 remains closed. Automated QA PASS means submission candidate, not completed machine.