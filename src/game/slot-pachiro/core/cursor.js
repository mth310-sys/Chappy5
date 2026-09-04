import { ORIENTATIONS } from './facility.js';
import { testPlacement } from './placement.js';

function nextOrientation(current, delta = 1) {
  const index = ORIENTATIONS.indexOf(current ?? 'E');
  if (index < 0) throw new Error(`Unknown orientation: ${current}`);
  return ORIENTATIONS[(index + delta + ORIENTATIONS.length) % ORIENTATIONS.length];
}

export function createPlacementCursor(sourceLayout, initialItem, onChange) {
  let item = { ...initialItem };
  let result = testPlacement(sourceLayout, item);

  function emit() {
    result = testPlacement(sourceLayout, item);
    onChange?.({ item: { ...item }, result });
    return result;
  }

  function move(dx, dy) {
    if (!Number.isInteger(dx) || !Number.isInteger(dy)) throw new Error('cursor movement must use integer grid steps');
    item = { ...item, x: item.x + dx, y: item.y + dy };
    return emit();
  }

  function rotate(delta = 1) {
    item = { ...item, orientation: nextOrientation(item.orientation, delta) };
    return emit();
  }

  function set(next) {
    item = { ...item, ...next };
    if (!Number.isInteger(item.x) || !Number.isInteger(item.y)) throw new Error('placement cursor must remain grid-snapped');
    return emit();
  }

  function snapshot() {
    return { item: { ...item }, result };
  }

  emit();
  return Object.freeze({ move, rotate, set, snapshot });
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
