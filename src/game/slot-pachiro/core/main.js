import { layout, validateLayout } from './layout.js';
import { renderLayout } from './renderer.js';

function boot() {
  const scene = document.getElementById('scene');
  const viewport = document.getElementById('vp');
  const status = document.getElementById('foundation-status');
  if (!scene || !viewport) throw new Error('Slot Pachiro root elements are missing');

  const report = validateLayout();
  renderLayout(scene, layout);

  if (status) {
    status.textContent = `GRID OK / ${report.itemCount} objects`;
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
    status.textContent = `GRID ERROR`;
    status.dataset.state = 'error';
  }
}
