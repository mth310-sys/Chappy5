/* Sound & Experience Run 6 — original Web Audio timing profile.
 * Prototype-only. No third-party samples/assets.
 * Keep the whole sword exchange on one causal timeline and avoid adding layers
 * merely because Visual Run 6 exposes more cadence tokens.
 */
import './game-reel-run6.js';

/* Machine Run 7 integration guard.
 * play.html is an ES-module shell around index.html. On a fast/local WebKit load,
 * the iframe can finish before the module body registers its `load` listener.
 * In that case none of the integrated touch/audio/visual enhancements run and the
 * base 42px BET remains live. Re-dispatch `load` only when the iframe is complete
 * AND the integrated cadence rail is still absent, so a normal load never gets a
 * duplicate integration pass.
 */
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.setTimeout(() => {
    const frame = document.getElementById('game');
    const inner = frame && frame.contentDocument;
    if (frame && inner && inner.readyState === 'complete' && !inner.querySelector('.toki-tempo')) {
      frame.dispatchEvent(new Event('load'));
    }
  }, 60);
}

export const TOKI_AUDIO_TIMELINE = Object.freeze({
  bet: { mechHz: 145, confirmHz: 290, confirmDelayMs: 20 },
  lever: {
    mechHz: 72,
    spinBedHz: 54,
    spinBedGain: 0.0042,
    attackMs: 38,
    releaseMs: 48
  },
  stop: {
    mechDelayMs: 0,
    slashDelayMs: 10,
    thirdBladeTailDelayMs: 34,
    // Keep resolve close enough to feel caused by STOP3 on touch hardware.
    resultDelayMs: 74,
    resultReleaseMs: 112
  },
  // Timbral identity is expressed by pitch/decay, not extra simultaneous voices.
  cuts: Object.freeze([
    { bladeHz: 330, bladeMs: 42, gain: 0.018 },
    { bladeHz: 410, bladeMs: 45, gain: 0.019 },
    { bladeHz: 520, bladeMs: 48, gain: 0.020 }
  ]),
  silence: {
    // Semantic silence after STOP3. Technical mute is tracked separately.
    thirdStopToResolveMs: 40,
    technicalMuteDataset: 'audioTech'
  }
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
