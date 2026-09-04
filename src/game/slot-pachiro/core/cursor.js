import { ORIENTATIONS } from './facility.js';
import { testPlacement } from './placement.js';

function nextOrientation(current, delta = 1) {
  const index = ORIENTATIONS.indexOf(current ?? 'E');
  if (index < 0) throw new Error(`Unknown orientation: ${current}`);
  return ORIENTATIONS[(index + delta + ORIENTATIONS.length) % ORIENTATIONS.length];
}

function findItem(sourceLayout, id) {
  return [...sourceLayout.islands, ...sourceLayout.fixtures].find((entry) => entry.id === id) ?? null;
}

export function createPlacementCursor(initialLayout, initialItem, onChange) {
  let sourceLayout = initialLayout;
  let baseItem = { ...initialItem };
  let item = { ...initialItem };
  let result = testPlacement(sourceLayout, item);

  function emit(event = 'change') {
    result = testPlacement(sourceLayout, item);
    onChange?.({ event, item: { ...item }, result, sourceLayout });
    return result;
  }

  function move(dx, dy) {
    if (!Number.isInteger(dx) || !Number.isInteger(dy)) throw new Error('cursor movement must use integer grid steps');
    item = { ...item, x: item.x + dx, y: item.y + dy };
    return emit('move');
  }

  function rotate(delta = 1) {
    item = { ...item, orientation: nextOrientation(item.orientation, delta) };
    return emit('rotate');
  }

  function set(next) {
    item = { ...item, ...next };
    if (!Number.isInteger(item.x) || !Number.isInteger(item.y)) throw new Error('placement cursor must remain grid-snapped');
    return emit('set');
  }

  function commit() {
    result = testPlacement(sourceLayout, item);
    if (!result.ok || !result.candidate) throw new Error(`Cannot commit invalid placement: ${result.reason ?? 'unknown reason'}`);
    sourceLayout = result.candidate;
    const committed = findItem(sourceLayout, item.id);
    if (!committed) throw new Error(`Committed facility missing: ${item.id}`);
    baseItem = { ...committed };
    item = { ...committed };
    emit('commit');
    return sourceLayout;
  }

  function cancel() {
    item = { ...baseItem };
    emit('cancel');
    return { ...item };
  }

  function rebase(nextLayout, facilityId = item.id) {
    const nextBase = findItem(nextLayout, facilityId);
    if (!nextBase) throw new Error(`Cannot rebase placement cursor: ${facilityId} missing`);
    sourceLayout = nextLayout;
    baseItem = { ...nextBase };
    item = { ...nextBase };
    return emit('rebase');
  }

  function snapshot() {
    return { item: { ...item }, baseItem: { ...baseItem }, result, sourceLayout };
  }

  emit('init');
  return Object.freeze({ move, rotate, set, commit, cancel, rebase, snapshot });
}

export function bindPlacementCursorControls(cursor, root = document) {
  function handleKey(event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); cursor.move(-1, 0); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); cursor.move(1, 0); }
    else if (event.key === 'ArrowUp') { event.preventDefault(); cursor.move(0, -1); }
    else if (event.key === 'ArrowDown') { event.preventDefault(); cursor.move(0, 1); }
    else if (event.key.toLowerCase() === 'r') { event.preventDefault(); cursor.rotate(1); }
  }
  root.addEventListener('keydown', handleKey);
  return () => root.removeEventListener('keydown', handleKey);
}
