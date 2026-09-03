import { cellKey, footprintCells } from './grid.js';

export const SPEC = Object.freeze({
  island: Object.freeze({ w: 9, d: 1, scale: 0.043, rotation: 26.565 }),
  minAisle: 3,
  chairOffset: Object.freeze({ x: 4, y: 1 }),
  playerOffset: Object.freeze({ x: 4, y: 2 }),
});

export const FLOOR_BOUNDS = Object.freeze({ minX: -20, maxX: 28, minY: -18, maxY: 30 });

export const layout = Object.freeze({
  islands: Object.freeze([
    Object.freeze({ id: 'island-a', type: 'island', x: -16, y: 0, w: SPEC.island.w, d: SPEC.island.d }),
    Object.freeze({ id: 'island-b', type: 'island', x: -4, y: 0, w: SPEC.island.w, d: SPEC.island.d }),
    Object.freeze({ id: 'island-c', type: 'island', x: 8, y: 0, w: SPEC.island.w, d: SPEC.island.d }),
    Object.freeze({ id: 'island-d', type: 'island', x: 20, y: 0, w: SPEC.island.w, d: SPEC.island.d }),
  ]),
  fixtures: Object.freeze([
    Object.freeze({ id: 'counter', type: 'counter', x: 10, y: -12, w: 4, d: 2, rise: 86 }),
    Object.freeze({ id: 'staff-1', type: 'staff', x: 11, y: -10, w: 1, d: 1, rise: 24 }),
    Object.freeze({ id: 'plant-1', type: 'plant', x: -11, y: -8, w: 1, d: 1, rise: 20 }),
    Object.freeze({ id: 'plant-2', type: 'plant', x: 17, y: 8, w: 1, d: 1, rise: 20 }),
    Object.freeze({ id: 'entrance', type: 'entrance', x: -2, y: 26, w: 4, d: 2, rise: 0 }),
  ]),
});

function assertWithinBounds(item) {
  const maxX = item.x + (item.w ?? 1) - 1;
  const maxY = item.y + (item.d ?? 1) - 1;
  if (item.x < FLOOR_BOUNDS.minX || maxX > FLOOR_BOUNDS.maxX || item.y < FLOOR_BOUNDS.minY || maxY > FLOOR_BOUNDS.maxY) {
    throw new Error(`${item.id} is outside floor bounds`);
  }
}

function validateAisles(islands) {
  const sorted = [...islands].sort((a, b) => a.x - b.x);
  for (let i = 1; i < sorted.length; i++) {
    const previousEnd = sorted[i - 1].x + sorted[i - 1].w - 1;
    const gap = sorted[i].x - previousEnd - 1;
    if (gap < SPEC.minAisle) throw new Error(`${sorted[i - 1].id} -> ${sorted[i].id}: aisle ${gap} < ${SPEC.minAisle}`);
  }
}

export function validateLayout() {
  const occupied = new Map();
  const all = [...layout.islands, ...layout.fixtures];
  for (const item of all) {
    assertWithinBounds(item);
    for (const cell of footprintCells(item)) {
      const key = cellKey(cell.x, cell.y);
      const existing = occupied.get(key);
      if (existing) throw new Error(`grid collision at ${key}: ${existing} / ${item.id}`);
      occupied.set(key, item.id);
    }
  }
  validateAisles(layout.islands);
  return { occupied, itemCount: all.length };
}
