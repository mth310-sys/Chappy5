/* Sound & Experience Run 8 — original Nocturne routing profile.
 * Prototype-only. No third-party samples/assets.
 * Submission-stabilization pass: preserve the proven public shell while making
 * the pending module route explicit about semantic silence, voice budget and
 * Safari/Bluetooth policy. Visual Run 8 worldport/glass states do not earn a
 * sound by themselves; reel/observation/memory events remain the cause.
 */
export {
  NOCTURNE_REEL_EVIDENCE,
  nocturneEvidenceFor,
  nocturneChainLabel,
  nextNocturneObservation,
  installNocturneVisualBridge,
  applyNocturneVisualEvidence
} from './game-reel-run6.js';
export {
  createNocturneObservationMemory,
  installNocturneRun7VisualBridge,
  applyNocturneRun7VisualState
} from './game-reel-run7.js';

export const NOCTURNE_AUDIO_ROUTING = Object.freeze({
  master: 0.34,
  buses: Object.freeze({
    environment: 0.032,
    mechanism: 0.56,
    operation: 0.80,
    observation: 0.67,
    memory: 0.74
  }),
  environment: Object.freeze({ fundamentalHz: 43, lowpassHz: 92 }),
  hierarchy: Object.freeze(['environment', 'mechanism', 'operation', 'observation', 'memory', 'depth']),
  technicalMuteDataset: 'audioTech',
  semanticSilenceDataset: 'audioSemantic',
  experience: Object.freeze({
    // Keep STOP mechanically readable even when the aquarium owns the eye.
    stopOwnsMechanismBus: true,
    // Visual Run 8 stance/worldport afterglow is a consequence, not a new cue.
    visualStateSound: false,
    // Strong discoveries make room in the ambience instead of adding a wall of sound.
    maxEventVoices: 2,
    memoryDucking: true
  }),
  transport: Object.freeze({
    compensateOutputLatency: false,
    resumeOnNextGesture: true,
    // Bluetooth/device output latency is diagnostic only; never move reel timing.
    preserveGameClock: true
  })
});

/* One event = one meaning. Frequencies are synthetic prototype values, not
 * borrowed sound assets. Stronger memory events gain duration/spacing rather
 * than simply stacking many louder voices over the reel STOP sound. */
export const NOCTURNE_AUDIO_EVENTS = Object.freeze({
  bet: Object.freeze({ bus: 'operation', hz: 118, durationMs: 32, gain: 0.009 }),
  lever: Object.freeze({ bus: 'mechanism', hz: 76, durationMs: 58, gain: 0.012 }),
  stop: Object.freeze({ bus: 'mechanism', hz: 132, durationMs: 28, gain: 0.011 }),
  observation: Object.freeze({
    bus: 'observation',
    channelsHz: Object.freeze([286, 337, 401]),
    durationMs: 62,
    gain: 0.013,
    overtoneDelayMs: 34
  }),
  survey: Object.freeze({ bus: 'observation', hz: 228, durationMs: 110, gain: 0.0055 }),
  memory: Object.freeze({ bus: 'memory', hz: 310, durationMs: 215, gain: 0.012, secondDelayMs: 86 }),
  depth: Object.freeze({ bus: 'memory', hz: 164, durationMs: 430, gain: 0.016, stepMs: 88 })
});

/* Submission-safe event plan. This does not schedule audio itself; it gives a
 * future/public-shell integration a bounded two-voice plan so MEMORY/DEPTH can
 * be clearly different from normal play without masking reel STOP transients. */
export function nocturneEventPlan(kind = 'operation', reelIndex = 0) {
  if (kind === 'observation') {
    const p = nocturneObservationProfile(reelIndex);
    return Object.freeze([
      Object.freeze({ hz: p.hz, delayMs: 0, durationMs: p.durationMs, gain: p.gain }),
      Object.freeze({ hz: p.hz * 2.01, delayMs: p.overtoneDelayMs, durationMs: 118, gain: p.gain * 0.46 })
    ]);
  }
  if (kind === 'memory') {
    const p = NOCTURNE_AUDIO_EVENTS.memory;
    return Object.freeze([
      Object.freeze({ hz: p.hz, delayMs: 0, durationMs: p.durationMs, gain: p.gain }),
      Object.freeze({ hz: p.hz * 1.5, delayMs: p.secondDelayMs, durationMs: 240, gain: p.gain * 0.68 })
    ]);
  }
  if (kind === 'depth') {
    const p = NOCTURNE_AUDIO_EVENTS.depth;
    return Object.freeze([
      Object.freeze({ hz: p.hz, delayMs: 0, durationMs: p.durationMs, gain: p.gain }),
      Object.freeze({ hz: p.hz * 1.5, delayMs: p.stepMs, durationMs: 470, gain: p.gain * 0.72 })
    ]);
  }
  const p = NOCTURNE_AUDIO_EVENTS[kind] || NOCTURNE_AUDIO_EVENTS.stop;
  return Object.freeze([Object.freeze({ hz: p.hz, delayMs: 0, durationMs: p.durationMs, gain: p.gain })]);
}

/* Preserve the quiet aquarium baseline by briefly making room for meaningful
 * events instead of stacking more sound. This is an integration helper; it does
 * not alter game timing and must only be called after AudioContext is running. */
export function shapeNocturneEnvironment(ctx, environmentBus, kind = 'operation', at = ctx?.currentTime || 0) {
  if (!ctx || !environmentBus?.gain) return;
  const base = NOCTURNE_AUDIO_ROUTING.buses.environment;
  const depth = kind === 'depth' ? 0.38 : kind === 'memory' ? 0.52 : kind === 'observation' ? 0.70 : 0.82;
  const hold = kind === 'depth' ? 0.46 : kind === 'memory' ? 0.28 : 0.12;
  const g = environmentBus.gain;
  g.cancelScheduledValues(at);
  g.setValueAtTime(Math.max(0.0001, g.value), at);
  g.linearRampToValueAtTime(base * depth, at + 0.018);
  g.setValueAtTime(base * depth, at + hold);
  g.linearRampToValueAtTime(base, at + hold + 0.18);
}

export function nocturneObservationProfile(reelIndex = 0) {
  const event = NOCTURNE_AUDIO_EVENTS.observation;
  const index = Math.max(0, Math.min(2, Number(reelIndex) || 0));
  return Object.freeze({ ...event, hz: event.channelsHz[index] });
}

export function nocturneMemoryProfile(kind = 'memory') {
  return kind === 'depth' ? NOCTURNE_AUDIO_EVENTS.depth : NOCTURNE_AUDIO_EVENTS.memory;
}

export function createNocturneBuses(ctx, master) {
  if (!ctx || !master) return null;
  const buses = {};
  for (const [name, level] of Object.entries(NOCTURNE_AUDIO_ROUTING.buses)) {
    const gain = ctx.createGain();
    gain.gain.value = level;
    gain.connect(master);
    buses[name] = gain;
  }
  return buses;
}

export function createNocturneEnvironment(ctx, environmentBus) {
  if (!ctx || !environmentBus) return null;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  osc.type = 'sine';
  osc.frequency.value = NOCTURNE_AUDIO_ROUTING.environment.fundamentalHz;
  filter.type = 'lowpass';
  filter.frequency.value = NOCTURNE_AUDIO_ROUTING.environment.lowpassHz;
  osc.connect(filter).connect(environmentBus);
  osc.start();
  return {
    dispose() {
      try { osc.stop(); } catch (_) {}
      try { osc.disconnect(); filter.disconnect(); } catch (_) {}
    }
  };
}

export function isTechnicalMute(body) {
  const state = body?.dataset?.audioTech || 'not-started';
  return state !== 'running';
}
