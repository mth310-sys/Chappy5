import { layout, validateLayout } from './layout.js';
import { testPlacement } from './placement.js';
import { renderLayout } from './renderer.js';

function assertRejected(result, label) {
  if (result.ok) throw new Error(`Foundation self-check failed: ${label} should be rejected`);
}

function runFoundationSelfChecks() {
  const islandB = layout.islands.find((item) => item.id === 'island-b');
  const plant = layout.fixtures.find((item) => item.id === 'plant-1');
  if (!islandB || !plant) throw new Error('Foundation self-check fixtures missing');

  assertRejected(testPlacement(layout, { ...islandB, y: -5 }), 'insufficient island aisle');
  assertRejected(testPlacement(layout, { ...plant, x: -4, y: -6 }), 'facility collision');
}

function boot() {
  const scene = document.getElementById('scene');
  const viewport = document.getElementById('vp');
  const status = document.getElementById('foundation-status');
  if (!scene || !viewport) throw new Error('Slot Pachiro root elements are missing');

  runFoundationSelfChecks();
  const report = validateLayout();
  renderLayout(scene, layout);

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
