import { cellKey } from './grid.js';
import { accessPorts, hardCells, projectToBasis, reservationCells } from './facility.js';
import { createLogicalMap, getCell, occupyCells, reserveCells, setPortal } from './map.js';
import { floodReachable } from './navigation.js';
import { applyBuildingShell, createBuildingShell } from './structure.js';

export const SPEC = Object.freeze({
  island: Object.freeze({ w: 9, d: 1, scale: 0.04225, rotation: 26.565, chairDepth: 1, walkDepth: 2 }),
  minWalkAisle: 2,
  rowPitch: 4,
  chairOffset: Object.freeze({ x: 4, y: 1 }),
  playerOffset: Object.freeze({ x: 4, y: 2 }),
});

export const FLOOR_BOUNDS = Object.freeze({ minX: -12, maxX: 12, minY: -14, maxY: 14 });
export const ENTRANCE_BOUNDARY = Object.freeze({ x: 0, y: FLOOR_BOUNDS.maxY, type: 'entrance' });
export const BUILDING_SHELL = createBuildingShell(FLOOR_BOUNDS, [ENTRANCE_BOUNDARY]);

const islandReservation = Object.freeze([
  ...Array.from({ length: 9 }, (_, x) => Object.freeze({ x, y: 1, role: 'chair-zone' })),
  ...Array.from({ length: 9 }, (_, x) => Object.freeze({ x, y: 2, role: 'walk-zone' })),
  ...Array.from({ length: 9 }, (_, x) => Object.freeze({ x, y: 3, role: 'walk-zone' })),
]);
const islandPorts = Object.freeze([
  ...Array.from({ length: 9 }, (_, x) => Object.freeze({ name: `machine-${x + 1}`, x, y: 1, role: 'machine-seat', required: true })),
  Object.freeze({ name: 'aisle-center', x: 4, y: 2, role: 'aisle-access', required: true }),
]);

export const FACILITY_DEFS = Object.freeze({
  island: Object.freeze({ w: 9, d: 1, reservationOffsets: islandReservation, accessPorts: islandPorts }),
  counter: Object.freeze({
    w: 4, d: 2,
    reservationOffsets: Object.freeze(Array.from({ length: 4 }, (_, x) => Object.freeze({ x, y: 2, role: 'customer-front' }))),
    accessPorts: Object.freeze([
      Object.freeze({ name: 'counter-front-a', x: 1, y: 2, role: 'customer-front', required: true }),
      Object.freeze({ name: 'counter-front-b', x: 2, y: 2, role: 'customer-front', required: true }),
    ]),
  }),
  plant: Object.freeze({ w: 1, d: 1 }),
  entrance: Object.freeze({
    hardOffsets: Object.freeze([]),
    reservationOffsets: Object.freeze([
      Object.freeze({ x: 0, y: -1, role: 'entrance-clearance' }),
      Object.freeze({ x: 0, y: -2, role: 'entrance-clearance' }),
    ]),
    accessPorts: Object.freeze([
      Object.freeze({ name: 'inside', x: 0, y: 0, role: 'portal', required: true, portal: true }),
    ]),
  }),
  staff: Object.freeze({ hardOffsets: Object.freeze([]) }),
});

export const layout = Object.freeze({
  islands: Object.freeze([-6, -2, 2, 6].map((y, i) => Object.freeze({ id: `island-${String.fromCharCode(97 + i)}`, type: 'island', x: -4, y, orientation: 'E', w: 9, d: 1 }))),
  fixtures: Object.freeze([
    Object.freeze({ id: 'counter', type: 'counter', x: 5, y: -11, orientation: 'E', w: 4, d: 2, rise: 86 }),
    Object.freeze({ id: 'staff-1', type: 'staff', x: 6, y: -8, orientation: 'E', rise: 24 }),
    Object.freeze({ id: 'plant-1', type: 'plant', x: -9, y: -10, orientation: 'E', w: 1, d: 1, rise: 20 }),
    Object.freeze({ id: 'plant-2', type: 'plant', x: 9, y: 9, orientation: 'E', w: 1, d: 1, rise: 20 }),
    Object.freeze({ id: 'entrance', type: 'entrance', x: ENTRANCE_BOUNDARY.x, y: ENTRANCE_BOUNDARY.y, orientation: 'E', rise: 0 }),
  ]),
});

function definitionFor(item) {
  const definition = FACILITY_DEFS[item.type];
  if (!definition) throw new Error(`Missing facility definition: ${item.type}`);
  return definition;
}

export function validateIslandRows(islands) {
  if (!islands.length) return;
  const orientation = islands[0].orientation ?? 'E';
  const rows = islands.map((item) => ({ item, basis: projectToBasis(item, item.orientation ?? 'E') }));
  for (const row of rows) {
    if ((row.item.orientation ?? 'E') !== orientation) throw new Error('Foundation island rows must share orientation');
  }
  const anchor = rows[0].basis.longitudinal;
  for (const row of rows) {
    if (row.basis.longitudinal !== anchor) throw new Error('Foundation island rows must share longitudinal anchor');
  }
  rows.sort((a, b) => a.basis.lateral - b.basis.lateral);
  const minimumPitch = SPEC.island.d + SPEC.island.chairDepth + SPEC.minWalkAisle;
  for (let i = 1; i < rows.length; i++) {
    const pitch = rows[i].basis.lateral - rows[i - 1].basis.lateral;
    if (pitch < minimumPitch) throw new Error(`${rows[i - 1].item.id} -> ${rows[i].item.id}: row pitch ${pitch} is below ${minimumPitch}`);
  }
}

function validateEntrance(candidate) {
  const entrances = candidate.fixtures.filter((item) => item.type === 'entrance');
  if (entrances.length !== 1) throw new Error(`Foundation requires exactly one entrance: ${entrances.length}`);
  const entrance = entrances[0];
  if (entrance.x !== ENTRANCE_BOUNDARY.x || entrance.y !== ENTRANCE_BOUNDARY.y) throw new Error('Entrance must occupy the designated building opening');
}

export function buildLogicalLayout(candidate = layout) {
  validateEntrance(candidate);
  const map = createLogicalMap(FLOOR_BOUNDS);
  applyBuildingShell(map, BUILDING_SHELL);
  const all = [...candidate.islands, ...candidate.fixtures];
  const ports = [];
  for (const item of all) {
    const definition = definitionFor(item);
    const hard = hardCells(item, definition);
    const reserved = reservationCells(item, definition);
    const itemPorts = accessPorts(item, definition);
    occupyCells(map, item.id, hard);
    reserveCells(map, item.id, reserved);
    for (const port of itemPorts) {
      ports.push(port);
      if (port.portal) setPortal(map, port);
    }
  }
  return { map, ports, all };
}

function validateRequiredAccess(map, ports) {
  const portal = ports.find((port) => port.portal);
  if (!portal) throw new Error('No entrance portal defined');
  const reachable = floodReachable(portal, map);
  if (!reachable.size) throw new Error(`Entrance portal is not walkable: ${portal.x},${portal.y}`);
  for (const port of ports) {
    if (!port.required || port.portal) continue;
    const key = cellKey(port.x, port.y);
    const cell = getCell(map, port.x, port.y);
    if (!cell) throw new Error(`${port.facilityId}.${port.name} outside floor`);
    if (cell.occupiedBy) throw new Error(`${port.facilityId}.${port.name} blocked by ${cell.occupiedBy}`);
    if (!reachable.has(key)) throw new Error(`${port.facilityId}.${port.name} is unreachable from entrance`);
  }
  return reachable;
}

export function validateLayout(candidate = layout) {
  validateIslandRows(candidate.islands);
  const { map, ports, all } = buildLogicalLayout(candidate);
  const reachable = validateRequiredAccess(map, ports);
  const occupied = new Map();
  for (const cell of map.cells.values()) if (cell.occupiedBy) occupied.set(cellKey(cell.x, cell.y), cell.occupiedBy);
  return { map, ports, reachable, occupied, itemCount: all.length, reachableCells: reachable.size };
}
