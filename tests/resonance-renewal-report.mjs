// Reporting wrapper only: expand nested deterministic renewal-probe metrics in CI logs.
// SIMULATED instrumentation; does not change production or probe semantics.
import util from 'node:util';
util.inspect.defaultOptions.depth = null;
await import('./resonance-renewal-probe.mjs');
