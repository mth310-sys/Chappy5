/* Sound & Experience Run 7 — original Web Audio timing profile.
 * Prototype-only. No third-party samples/assets.
 * Keep the whole sword exchange on one causal timeline and avoid adding layers
 * merely because Visual Run 7 exposes more cadence tokens.
 */
import './game-reel-run6.js';
import './game-reel-run7.js';

/* Machine Run 8 submission bootstrap guard.
 * play.html is an ES-module shell around index.html. Fast/local Safari/WebKit can
 * finish the iframe before the module body installs its `load` listener. The old
 * one-shot 60ms recovery covered the observed race, but a busy iPhone can also
 * land between module evaluation and iframe completion. Probe a few bounded
 * points instead of polling forever; only re-dispatch when the iframe is complete
 * and the integrated cadence rail is still absent. A normal integration remains
 * single-pass because `.toki-tempo` becomes the idempotence marker.
 */
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const recoverIntegratedShell = () => {
    const frame = document.getElementById('game');
    const inner = frame && frame.contentDocument;
    if (!frame || !inner) return false;
    if (inner.querySelector('.toki-tempo')) {
      document.body.dataset.tokiShell = 'integrated';
      return true;
    }
    if (inner.readyState === 'complete') {
      document.body.dataset.tokiShell = 'recovering';
      frame.dispatchEvent(new Event('load'));
      window.setTimeout(() => {
        const current = frame.contentDocument;
        document.body.dataset.tokiShell = current && current.querySelector('.toki-tempo') ? 'integrated' : 'integration-missed';
      }, 0);
      return true;
    }
    document.body.dataset.tokiShell = 'waiting';
    return false;
  };

  [0, 80, 240].forEach(delay => window.setTimeout(recoverIntegratedShell, delay));
}

export const TOKI_AUDIO_TIMELINE = Object.freeze({
  bet: { mechHz: 145, confirmHz: 290, confirmDelayMs: 18 },
  lever: {
    mechHz: 72,
    spinBedHz: 54,
    // Keep the spin bed below the hand-driven events; headphones/Bluetooth may
    // add device latency, so do not try to compensate by moving game timing.
    spinBedGain: 0.0036,
    attackMs: 30,
    releaseMs: 42
  },
  stop: {
    mechDelayMs: 0,
    slashDelayMs: 9,
    thirdBladeTailDelayMs: 31,
    // STOP3 remains the cause. The short gap is dramatic silence, not mute.
    resultDelayMs: 70,
    resultReleaseMs: 108
  },
  // Timbral identity is expressed by pitch/decay, not extra simultaneous voices.
  cuts: Object.freeze([
    { bladeHz: 330, bladeMs: 40, gain: 0.017 },
    { bladeHz: 410, bladeMs: 43, gain: 0.018 },
    { bladeHz: 520, bladeMs: 46, gain: 0.019 }
  ]),
  silence: {
    // Semantic silence after STOP3. Technical mute is tracked separately.
    thirdStopToResolveMs: 39,
    technicalMuteDataset: 'audioTech'
  },
  transport: Object.freeze({
    // Diagnostic policy only: Bluetooth/device latency must never alter reel logic.
    compensateOutputLatency: false,
    resumeOnNextGesture: true
  })
});

export function tokiCutProfile(stopNo, reelIndex = 0) {
  const base = TOKI_AUDIO_TIMELINE.cuts[Math.max(0, Math.min(2, stopNo - 1))];
  return Object.freeze({
    ...base,
    bladeHz: base.bladeHz + Math.max(0, Math.min(2, reelIndex)) * 12
  });
}

export function createTokiSpinBed(ctx, destination) {
  if (!ctx || !destination) return null;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.value = TOKI_AUDIO_TIMELINE.lever.spinBedHz;
  gain.gain.value = 0.0001;
  osc.connect(gain).connect(destination);
  osc.start();
  return {
    start(at = ctx.currentTime) {
      gain.gain.cancelScheduledValues(at);
      gain.gain.setValueAtTime(Math.max(0.0001, gain.gain.value), at);
      gain.gain.linearRampToValueAtTime(TOKI_AUDIO_TIMELINE.lever.spinBedGain, at + TOKI_AUDIO_TIMELINE.lever.attackMs / 1000);
    },
    stop(at = ctx.currentTime) {
      gain.gain.cancelScheduledValues(at);
      gain.gain.setValueAtTime(Math.max(0.0001, gain.gain.value), at);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + TOKI_AUDIO_TIMELINE.lever.releaseMs / 1000);
    },
    dispose() {
      try { osc.stop(); } catch (_) {}
      try { osc.disconnect(); gain.disconnect(); } catch (_) {}
    }
  };
}
