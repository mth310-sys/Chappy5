import { cellKey } from './grid.js';
import {
  createLogicalMap,
  getCell,
  setFloorType,
  setPortal,
} from './map.js';
import {
  materializeStartSlot,
  placeStartSlotAtomic,
  reachableCells,
} from './start-hall-placement.js';

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
    Object.freeze({ id: 'slot-01', type: 'slot-fixture', x: 2, y: 2, orientation: 'E' }),
    Object.freeze({ id: 'slot-02', type: 'slot-fixture', x: 3, y: 2, orientation: 'E' }),
    Object.freeze({ id: 'slot-03', type: 'slot-fixture', x: 4, y: 2, orientation: 'E' }),
    Object.freeze({ id: 'slot-04', type: 'slot-fixture', x: 5, y: 2, orientation: 'E' }),
    Object.freeze({ id: 'slot-05', type: 'slot-fixture', x: 2, y: 5, orientation: 'E' }),
    Object.freeze({ id: 'slot-06', type: 'slot-fixture', x: 3, y: 5, orientation: 'E' }),
    Object.freeze({ id: 'slot-07', type: 'slot-fixture', x: 4, y: 5, orientation: 'E' }),
    Object.freeze({ id: 'slot-08', type: 'slot-fixture', x: 5, y: 5, orientation: 'E' }),
  ]),
});

export function fixtureAccessCell(fixture) {
  const port = materializeStartSlot(fixture).accessPorts[0];
  return { x: port.x, y: port.y, role: port.role };
}

function buildBareStartHallMap() {
  const map = createLogicalMap({ minX: 0, minY: 0, maxX: START_HALL.width - 1, maxY: START_HALL.height - 1 });
  for (let y = 0; y < START_HALL.height; y++) {
    for (let x = 0; x < START_HALL.width; x++) setFloorType(map, x, y, 'hall-floor');
  }
  for (let x = 1; x <= 7; x++) {
    setFloorType(map, x, 3, 'main-aisle', { buildable: false });
    setFloorType(map, x, 4, 'main-aisle', { buildable: false });
  }
  for (const point of START_HALL.entranceRoute) setFloorType(map, point.x, point.y, 'entrance-route', { buildable: false });
  setPortal(map, { facilityId: 'hall-entrance', x: START_HALL.entrance.x, y: START_HALL.entrance.y, kind: 'entrance' });
  return map;
}

export function buildStartHallMap(fixtures = START_HALL.fixtures) {
  let map = buildBareStartHallMap();
  const transactions = [];
  for (const fixture of fixtures) {
    const transaction = placeStartSlotAtomic(map, fixture, { connectivityRoot: START_HALL.entrance });
    transactions.push(Object.freeze({ id: fixture.id, ok: transaction.ok, reason: transaction.reason }));
    if (!transaction.ok) throw new Error(`startup placement rejected: ${fixture.id}: ${transaction.reason}`);
    map = transaction.map;
  }
  map.placementTransactions = Object.freeze(transactions);
  return map;
}

export function validateStartHall(map = buildStartHallMap(), fixtures = START_HALL.fixtures) {
  const reachable = reachableCells(map, START_HALL.entrance);
  const access = fixtures.map((fixture) => ({ fixture, cell: fixtureAccessCell(fixture) }));
  const unreachable = access.filter(({ cell }) => !reachable.has(cellKey(cell.x, cell.y)));
  const collisions = fixtures.filter((fixture) => getCell(map, fixture.x, fixture.y)?.occupiedBy !== fixture.id);
  const transactions = map.placementTransactions ?? [];
  const rejected = transactions.filter((transaction) => !transaction.ok);
  return Object.freeze({
    ok: unreachable.length === 0 && collisions.length === 0 && rejected.length === 0 && transactions.length === fixtures.length,
    fixtureCount: fixtures.length,
    reachableCellCount: reachable.size,
    accessPortCount: access.length,
    transactionCount: transactions.length,
    rejectedTransactionIds: Object.freeze(rejected.map((transaction) => transaction.id)),
    unreachableAccessIds: Object.freeze(unreachable.map(({ fixture }) => fixture.id)),
    collisionIds: Object.freeze(collisions.map((fixture) => fixture.id)),
  });
}

export function testStartHallMove(fixtures, fixtureId, x, y) {
  const candidate = fixtures.map((fixture) => fixture.id === fixtureId ? { ...fixture, x, y } : { ...fixture });
  if (!candidate.some((fixture) => fixture.id === fixtureId)) return Object.freeze({ ok: false, reason: `unknown fixture: ${fixtureId}` });
  try {
    const map = buildStartHallMap(candidate);
    const validation = validateStartHall(map, candidate);
    if (!validation.ok) return Object.freeze({ ok: false, reason: 'layout validation rejected move' });
    return Object.freeze({ ok: true, fixtures: Object.freeze(candidate.map(Object.freeze)), map, validation, reason: null });
  } catch (error) {
    return Object.freeze({ ok: false, reason: error instanceof Error ? error.message : String(error) });
  }
}

export const START_HALL_VALIDATION = validateStartHall();
