import { cellKey } from './grid.js';
import {
  createLogicalMap,
  getCell,
  occupyCells,
  reserveCells,
  setFloorType,
  setPortal,
  isWalkable,
  cellHasBlockingEdge,
} from './map.js';

export const START_HALL = Object.freeze({
  width: 9,
  height: 9,
  entrance: Object.freeze({ x: 4, y: 8 }),
  entranceRoute: Object.freeze([
    Object.freeze({ x: 4, y: 8 }),
    Object.freeze({ x: 4, y: 7 }),
    Object.freeze({ x: 4, y: 6 }),
    Object.freeze({ x: 5, y: 6 }),
    Object.freeze({ x: 6, y: 6 }),
    Object.freeze({ x: 6, y: 5 }),
    Object.freeze({ x: 6, y: 4 }),
  ]),
  fixtures: Object.freeze([
    Object.freeze({ id: 'slot-01', x: 2, y: 2, orientation: 'S' }),
    Object.freeze({ id: 'slot-02', x: 3, y: 2, orientation: 'S' }),
    Object.freeze({ id: 'slot-03', x: 4, y: 2, orientation: 'S' }),
    Object.freeze({ id: 'slot-04', x: 5, y: 2, orientation: 'S' }),
    Object.freeze({ id: 'slot-05', x: 2, y: 5, orientation: 'S' }),
    Object.freeze({ id: 'slot-06', x: 3, y: 5, orientation: 'S' }),
    Object.freeze({ id: 'slot-07', x: 4, y: 5, orientation: 'S' }),
    Object.freeze({ id: 'slot-08', x: 5, y: 5, orientation: 'S' }),
  ]),
});

const MOVES = Object.freeze([
  Object.freeze({ direction: 'N', opposite: 'S', dx: 0, dy: -1 }),
  Object.freeze({ direction: 'E', opposite: 'W', dx: 1, dy: 0 }),
  Object.freeze({ direction: 'S', opposite: 'N', dx: 0, dy: 1 }),
  Object.freeze({ direction: 'W', opposite: 'E', dx: -1, dy: 0 }),
]);

export function fixtureAccessCell(fixture) {
  if (fixture.orientation === 'S') return { x: fixture.x, y: fixture.y + 1, role: 'service-port' };
  if (fixture.orientation === 'N') return { x: fixture.x, y: fixture.y - 1, role: 'service-port' };
  if (fixture.orientation === 'E') return { x: fixture.x + 1, y: fixture.y, role: 'service-port' };
  if (fixture.orientation === 'W') return { x: fixture.x - 1, y: fixture.y, role: 'service-port' };
  throw new Error(`invalid fixture orientation: ${fixture.orientation}`);
}

export function buildStartHallMap() {
  const map = createLogicalMap({ minX: 0, minY: 0, maxX: START_HALL.width - 1, maxY: START_HALL.height - 1 });

  for (let y = 0; y < START_HALL.height; y++) {
    for (let x = 0; x < START_HALL.width; x++) setFloorType(map, x, y, 'hall-floor');
  }
  for (let x = 1; x <= 7; x++) {
    setFloorType(map, x, 3, 'main-aisle', { buildable: false });
    setFloorType(map, x, 4, 'main-aisle', { buildable: false });
  }
  for (const point of START_HALL.entranceRoute) {
    setFloorType(map, point.x, point.y, 'entrance-route', { buildable: false });
  }

  for (const fixture of START_HALL.fixtures) {
    occupyCells(map, fixture.id, [{ x: fixture.x, y: fixture.y }]);
    reserveCells(map, fixture.id, [fixtureAccessCell(fixture)]);
  }

  setPortal(map, { facilityId: 'hall-entrance', x: START_HALL.entrance.x, y: START_HALL.entrance.y, kind: 'entrance' });
  return map;
}

function reachableFrom(map, start) {
  const root = getCell(map, start.x, start.y);
  if (!isWalkable(root)) return new Set();
  const visited = new Set([cellKey(start.x, start.y)]);
  const queue = [{ x: start.x, y: start.y }];
  while (queue.length) {
    const point = queue.shift();
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

export function validateStartHall(map = buildStartHallMap()) {
  const reachable = reachableFrom(map, START_HALL.entrance);
  const access = START_HALL.fixtures.map((fixture) => ({ fixture, cell: fixtureAccessCell(fixture) }));
  const unreachable = access.filter(({ cell }) => !reachable.has(cellKey(cell.x, cell.y)));
  const collisions = START_HALL.fixtures.filter((fixture) => getCell(map, fixture.x, fixture.y)?.occupiedBy !== fixture.id);
  return Object.freeze({
    ok: unreachable.length === 0 && collisions.length === 0,
    fixtureCount: START_HALL.fixtures.length,
    reachableCellCount: reachable.size,
    accessPortCount: access.length,
    unreachableAccessIds: Object.freeze(unreachable.map(({ fixture }) => fixture.id)),
    collisionIds: Object.freeze(collisions.map((fixture) => fixture.id)),
  });
}

export const START_HALL_VALIDATION = validateStartHall();
