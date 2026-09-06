import { cellKey } from './grid.js';
import { materializeCells } from './facility.js';
import {
  cloneLogicalMap,
  getCell,
  occupyCells,
  reserveCells,
  isWalkable,
  cellHasBlockingEdge,
} from './map.js';

const MOVES = Object.freeze([
  Object.freeze({ direction: 'N', opposite: 'S', dx: 0, dy: -1 }),
  Object.freeze({ direction: 'E', opposite: 'W', dx: 1, dy: 0 }),
  Object.freeze({ direction: 'S', opposite: 'N', dx: 0, dy: 1 }),
  Object.freeze({ direction: 'W', opposite: 'E', dx: -1, dy: 0 }),
]);

export const START_SLOT_DEF = Object.freeze({
  hardOffsets: Object.freeze([Object.freeze({ x: 0, y: 0 })]),
  reservationOffsets: Object.freeze([Object.freeze({ x: 0, y: 1, role: 'service-port' })]),
  accessPorts: Object.freeze([Object.freeze({ name: 'seat', x: 0, y: 1, role: 'service-port', required: true })]),
});

export function reachableCells(map, start) {
  const root = getCell(map, start.x, start.y);
  if (!isWalkable(root)) return new Set();
  const visited = new Set([cellKey(start.x, start.y)]);
  const queue = [{ x: start.x, y: start.y }];
  for (let index = 0; index < queue.length; index++) {
    const point = queue[index];
    const cell = getCell(map, point.x, point.y);
    for (const move of MOVES) {
      const next = { x: point.x + move.dx, y: point.y + move.dy };
      const neighbor = getCell(map, next.x, next.y);
      if (!isWalkable(neighbor)) continue;
      if (cellHasBlockingEdge(cell, move.direction) || cellHasBlockingEdge(neighbor, move.opposite)) continue;
      const key = cellKey(next.x, next.y);
      if (visited.has(key)) continue;
      visited.add(key);
      queue.push(next);
    }
  }
  return visited;
}

export function materializeStartSlot(fixture) {
  const hardCells = materializeCells(fixture, START_SLOT_DEF.hardOffsets);
  const reservationCells = materializeCells(fixture, START_SLOT_DEF.reservationOffsets);
  const accessPorts = materializeCells(fixture, START_SLOT_DEF.accessPorts).map((port) => ({ ...port, facilityId: fixture.id }));
  return Object.freeze({ hardCells, reservationCells, accessPorts });
}

export function placeStartSlotAtomic(map, fixture, options = {}) {
  try {
    const draft = cloneLogicalMap(map);
    const transformed = materializeStartSlot(fixture);
    occupyCells(draft, fixture.id, transformed.hardCells);
    reserveCells(draft, fixture.id, transformed.reservationCells);

    for (const port of transformed.accessPorts.filter((port) => port.required)) {
      const cell = getCell(draft, port.x, port.y);
      if (!isWalkable(cell)) throw new Error(`${fixture.id}.${port.name} blocked at ${port.x},${port.y}`);
    }

    if (options.connectivityRoot) {
      const reachable = reachableCells(draft, options.connectivityRoot);
      const disconnected = transformed.accessPorts.filter((port) => port.required && !reachable.has(cellKey(port.x, port.y)));
      if (disconnected.length) throw new Error(`${fixture.id} disconnects required access`);
    }

    return Object.freeze({ ok: true, map: draft, transformed, reason: null });
  } catch (error) {
    return Object.freeze({ ok: false, map, transformed: null, reason: error instanceof Error ? error.message : String(error) });
  }
}
