# Dual Prototype Playtest & QA Handoff — Run 1

Status: `AUTOMATED_WEBKIT_QA_IN_PROGRESS`

Latest `main` remains authoritative. Human Gate 2 remains closed. This document records automated/browser-equivalent QA only; it does **not** claim human sensory verification or 30–50G subjective playtest completion.

## Added QA coverage

`playtest/dual-prototype-qa.spec.js` now exercises both integrated entries:

- `prototypes/toki-no-issen/play.html`
- `prototypes/nocturne-aquarium/play.html`

Under the iPhone 12 WebKit project it checks:

- iframe game boot
- BET / LEVER / three STOP touch-target geometry and horizontal clipping
- repeated rounds across multiple first-stop / stop-order routes
- return to a playable state after third-stop resolution
- rapid irrelevant/disabled STOP taps without page errors or permanent lock
- reload/re-entry followed by another playable round

The generic Playwright workflow now runs this dual-prototype QA and is triggered by `prototypes/**` changes.

## First concrete defect found

CI run on commit `5db9a956712a622cb703db405b22bf25e94ec3b8` failed both machines for the same reason:

- 刻ノ一閃 MAX BET computed touch height: **42px**
- ノクターン・アクアリウム MAX BET computed touch height: **42px**
- QA target: **>= 44px**

This was treated as a real iPhone touchability defect, not weakened in the test. The integrated `play.html` builds now enforce a 46px minimum BET target while preserving the visual layout.

Fix commits:

- 刻ノ一閃: `c735b2f34adb69847c816f2594cbb250f840c690`
- ノクターン・アクアリウム: `848304080eb207c46e5953b1eb832d05cbeed5bf`

A fresh WebKit CI run is pending after these fixes. Do not mark repeated-play QA PASS until that run completes.

## Safari audio robustness correction

The previous wrappers could request `AudioContext.resume()` on foreground visibility change, which is not a reliable user-gesture path on iPhone Safari. Both integrated builds were changed so:

- AudioContext creation/resume is awaited from an actual in-game pointer gesture.
- Sound generation is skipped unless the context is actually `running`.
- Backgrounding suspends audio.
- Foregrounding does not pretend resume succeeded; the next real touch performs resume.

Fix commits:

- 刻ノ一閃: `08caae13c920febb046c3e58c5b659733087590e`
- ノクターン・アクアリウム: `4d38be22e1ddf76e65fe266149567ab929f99c70`

This reduces the chance that technical mute is mistaken for the intentional sparse/quiet sound design. Actual device-speaker / Bluetooth latency and perceived loudness remain `HUMAN_HARDWARE_UNVERIFIED`.

## Machine-specific QA focus still open

### 刻ノ一閃

Automated tests can detect locks, clipping and event-order breakage, but cannot establish that STOP1 → STOP2 → STOP3 → resolution **feels** good. Human verification still needs to judge whether STOP3 transient and final result read as two satisfying moments rather than one delayed/noisy hit, and whether the opening-cue reading remains understandable over repeated games.

### ノクターン・アクアリウム

Automated tests can exercise different first-stop routes and state return, but cannot establish whether the aquarium LCD steals too much attention from the physical-style reels. Human verification still needs to judge whether choosing 広場 / 塔 / 記録庫 through the first STOP feels like reel play rather than a hidden menu, and whether the quiet baseline becomes dull over extended play.

## Next Machine Director handoff

1. Read the newest dual-prototype CI result after `8483040` or later.
2. If it fails, treat the next concrete interaction/layout/state defect as the immediate blocker and fix it before adding presentation features.
3. If automated WebKit passes, retain `HUMAN_UNVERIFIED` for tactile feel, audio quality, fatigue and visual attraction; CI PASS is not a fun/quality approval.
4. Preserve the distinct prototype identities and do not merge their mechanics merely because QA infrastructure is shared.

SIGNAL / FORGE / VAULT were not changed.
