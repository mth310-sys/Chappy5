/* Sound & Experience Run 7 — original Nocturne routing profile.
 * Prototype-only. No third-party samples/assets.
 * Keeps semantic quiet separate from Safari/technical mute state and gives the
 * pending public-shell integration one explicit event vocabulary.
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
  transport: Object.freeze({
    compensateOutputLatency: false,
    resumeOnNextGesture: true
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
