import { bindPlacementCursorControls, createPlacementCursor } from './cursor.js';
import { renderFoundationDebug } from './debug.js';
import { ORIENTATIONS } from './facility.js';
import { layout, validateLayout } from './layout.js';
import { findPath } from './navigation.js';
import { describePlacement, testPlacement } from './placement.js';
import { renderLayout } from './renderer.js';

function assertRejected(result, label) {
  if (result.ok) throw new Error(`Foundation self-check failed: ${label} should be rejected`);
}
function assert(condition, label) {
  if (!condition) throw new Error(`Foundation self-check failed: ${label}`);
}

function routeToFirstMachine(report) {
  const portal = report.ports.find((port) => port.portal);
  const goal = report.ports.find((port) => port.role === 'machine-seat');
  if (!portal || !goal) throw new Error('Foundation route endpoints missing');
  const route = findPath(portal, goal, report.map);
  if (!route) throw new Error(`Foundation route missing: ${portal.facilityId} -> ${goal.facilityId}.${goal.name}`);
  return route;
}

function runRotationSelfChecks() {
  const base = { id: 'rotation-probe', type: 'island', x: 0, y: 0 };
  const signatures = new Set();
  for (const orientation of ORIENTATIONS) {
    const preview = describePlacement({ ...base, orientation });
    assert(preview.hard.length === 9, `${orientation} island footprint must be 9 cells`);
    assert(preview.reserved.length === 27, `${orientation} reservation must be 27 cells`);
    assert(preview.ports.length === 10, `${orientation} access ports must be 10 cells`);
    const xs = preview.hard.map((cell) => cell.x), ys = preview.hard.map((cell) => cell.y);
    const spanX = Math.max(...xs) - Math.min(...xs), spanY = Math.max(...ys) - Math.min(...ys);
    assert((spanX === 8 && spanY === 0) || (spanX === 0 && spanY === 8), `${orientation} footprint axis invalid`);
    signatures.add(preview.hard.map((cell) => `${cell.x},${cell.y}`).sort().join('|'));
  }
  assert(signatures.size === 4, 'four orientations must produce distinct anchored footprints');
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
  runRotationSelfChecks();
  const baseReport = validateLayout(layout);
  assert(routeToFirstMachine(baseReport).length > 1, 'entrance-to-machine route must exist');
}

function debugEnabled() {
  return new URLSearchParams(location.search).get('foundationDebug') === '1';
}

function makeCursorPanel(cursor, onCommit, onCancel) {
  const panel = document.createElement('div');
  panel.className = 'placementPanel';
  panel.innerHTML = '<b>配置カーソル</b><span data-cursor-status></span><div><button data-move="0,-1">↑</button></div><div><button data-move="-1,0">←</button><button data-rotate>回転</button><button data-move="1,0">→</button></div><div><button data-move="0,1">↓</button></div><div><button data-commit>確定</button><button data-cancel>取消</button></div>';
  panel.querySelectorAll('[data-move]').forEach((button) => button.addEventListener('click', () => {
    const [dx, dy] = button.dataset.move.split(',').map(Number);
    cursor.move(dx, dy);
  }));
  panel.querySelector('[data-rotate]').addEventListener('click', () => cursor.rotate(1));
  panel.querySelector('[data-commit]').addEventListener('click', onCommit);
  panel.querySelector('[data-cancel]').addEventListener('click', onCancel);
  document.body.appendChild(panel);
  return panel;
}

function boot() {
  const scene = document.getElementById('scene');
  const viewport = document.getElementById('vp');
  const status = document.getElementById('foundation-status');
  if (!scene || !viewport) throw new Error('Slot Pachiro root elements are missing');

  runFoundationSelfChecks();
  let activeLayout = layout;
  let activeReport = validateLayout(activeLayout);
  renderLayout(scene, activeLayout);

  if (debugEnabled()) {
    const islandB = activeLayout.islands.find((item) => item.id === 'island-b');
    let panel = null;
    const redrawDebug = (result) => {
      const report = result?.ok && result.report ? result.report : activeReport;
      const route = routeToFirstMachine(report);
      renderFoundationDebug(scene, report, result, route);
    };
    const cursor = createPlacementCursor(activeLayout, islandB, ({ item, result, event }) => {
      redrawDebug(result);
      if (panel) {
        const label = panel.querySelector('[data-cursor-status]');
        label.textContent = `${item.x},${item.y} ${item.orientation} / ${result.ok ? 'OK' : 'NG'}${event === 'commit' ? ' / 確定済' : event === 'cancel' ? ' / 取消' : ''}`;
        panel.dataset.state = result.ok ? 'ok' : 'error';
      }
    });
    panel = makeCursorPanel(cursor, () => {
      try {
        activeLayout = cursor.commit();
        activeReport = validateLayout(activeLayout);
        renderLayout(scene, activeLayout);
        redrawDebug(cursor.snapshot().result);
      } catch (error) {
        panel.dataset.state = 'error';
        panel.querySelector('[data-cursor-status]').textContent = `NG / ${error instanceof Error ? error.message : String(error)}`;
      }
    }, () => {
      cursor.cancel();
      renderLayout(scene, activeLayout);
      redrawDebug(cursor.snapshot().result);
    });
    bindPlacementCursorControls(cursor);
    const initial = cursor.snapshot();
    redrawDebug(initial.result);
    panel.querySelector('[data-cursor-status]').textContent = `${initial.item.x},${initial.item.y} ${initial.item.orientation} / ${initial.result.ok ? 'OK' : 'NG'}`;
    scene.dataset.foundationDebug = 'on';
  }

  if (status) {
    status.textContent = `GRID OK / ${activeReport.itemCount} objects / ${activeReport.reachableCells} walk / ROT 4 / PATH OK`;
    status.dataset.state = 'ok';
  }
  viewport.scrollLeft = Math.max(0, (scene.clientWidth - viewport.clientWidth) / 2);
  viewport.scrollTop = 4;
}

try { boot(); }
catch (error) {
  console.error('[Slot Pachiro foundation]', error);
  const status = document.getElementById('foundation-status');
  if (status) { status.textContent = 'GRID ERROR'; status.dataset.state = 'error'; }
}
