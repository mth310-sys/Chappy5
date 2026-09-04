import { renderFoundationDebug } from './debug.js';
import { layout, validateLayout } from './layout.js';
import { testPlacement } from './placement.js';
import { renderLayout } from './renderer.js';

function assertRejected(result, label) {
  if (result.ok) throw new Error(`Foundation self-check failed: ${label} should be rejected`);
}

function runFoundationSelfChecks() {
  const islandB = layout.islands.find((item) => item.id === 'island-b');
  const plant = layout.fixtures.find((item) => item.id === 'plant-1');
  const entrance = layout.fixtures.find((item) => item.id === 'entrance');
  if (!islandB || !plant || !entrance) throw new Error('Foundation self-check fixtures missing');

  assertRejected(testPlacement(layout, { ...islandB, y: -5 }), 'insufficient island aisle');
  assertRejected(testPlacement(layout, { ...plant, x: -4, y: -6 }), 'facility collision');
  assertRejected(testPlacement(layout, { ...plant, x: -12, y: 0 }), 'building wall occupation');
  assertRejected(testPlacement(layout, { ...entrance, x: 1 }), 'entrance moved away from opening');
}

function debugEnabled() {
  return new URLSearchParams(location.search).get('foundationDebug') === '1';
}

function boot() {
  const scene = document.getElementById('scene');
  const viewport = document.getElementById('vp');
  const status = document.getElementById('foundation-status');
  if (!scene || !viewport) throw new Error('Slot Pachiro root elements are missing');

  runFoundationSelfChecks();
  const report = validateLayout();
  renderLayout(scene, layout);

  if (debugEnabled()) {
    const islandB = layout.islands.find((item) => item.id === 'island-b');
    const preview = testPlacement(layout, { ...islandB, y: -5 });
    renderFoundationDebug(scene, report, preview);
    scene.dataset.foundationDebug = 'on';
  }

  if (status) {
    status.textContent = `GRID OK / ${report.itemCount} objects / ${report.reachableCells} walk`;
    status.dataset.state = 'ok';
  }

  viewport.scrollLeft = Math.max(0, (scene.clientWidth - viewport.clientWidth) / 2);
  viewport.scrollTop = 4;
}

try {
  boot();
} catch (error) {
  console.error('[Slot Pachiro foundation]', error);
  const status = document.getElementById('foundation-status');
  if (status) {
    status.textContent = 'GRID ERROR';
    status.dataset.state = 'error';
  }
}
