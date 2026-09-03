import { cellKey } from './grid.js';
import { accessPorts, hardCells, reservationCells } from './facility.js';
import { createLogicalMap, getCell, occupyCells, reserveCells, setPortal } from './map.js';
import { floodReachable } from './navigation.js';

export const SPEC = Object.freeze({
  island: Object.freeze({
    w: 9,
    d: 1,
    scale: 0.04225,
    rotation: 26.565,
    bodyClearance: 3,
    chairDepth: 1,
    walkDepth: 2,
  }),
  minAisle: 2,
  chairOffset: Object.freeze({ x: 4, y: 1 }),
  playerOffset: Object.freeze({ x: 4, y: 2 }),
});

export const FLOOR_BOUNDS = Object.freeze({ minX: -20, maxX: 28, minY: -18, maxY: 30 });

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
  island: Object.freeze({
    w: 9,
    d: 1,
    reservationOffsets: islandReservation,
    accessPorts: islandPorts,
  }),
  counter: Object.freeze({
    w: 4,
    d: 2,
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
      Object.freeze({ name: 'inside', x: 0, y: -1, role: 'portal', required: true, portal: true }),
    ]),
  }),
  staff: Object.freeze({ hardOffsets: Object.freeze([]) }),
});

export const layout = Object.freeze({
  islands: Object.freeze([
    Object.freeze({ id: 'island-a', type: 'island', x: -4, y: -6, orientation: 'E', w: 9, d: 1 }),
    Object.freeze({ id: 'island-b', type: 'island', x: -4, y: -2, orientation: 'E', w: 9, d: 1 }),
    Object.freeze({ id: 'island-c', type: 'island', x: -4, y: 2, orientation: 'E', w: 9, d: 1 }),
    Object.freeze({ id: 'island-d', type: 'island', x: -4, y: 6, orientation: 'E', w: 9, d: 1 }),
  ]),
  fixtures: Object.freeze([
    Object.freeze({ id: 'counter', type: 'counter', x: 10, y: -12, orientation: 'E', w: 4, d: 2, rise: 86 }),
    Object.freeze({ id: 'staff-1', type: 'staff', x: 11, y: -9, orientation: 'E', rise: 24 }),
    Object.freeze({ id: 'plant-1', type: 'plant', x: -11, y: -8, orientation: 'E', w: 1, d: 1, rise: 20 }),
    Object.freeze({ id: 'plant-2', type: 'plant', x: 17, y: 8, orientation: 'E', w: 1, d: 1, rise: 20 }),
    Object.freeze({ id: 'entrance', type: 'entrance', x: -2, y: 26, orientation: 'E', rise: 0 }),
  ]),
});

function definitionFor(item) {
  const definition = FACILITY_DEFS[item.type];
  if (!definition) throw new Error(`Missing facility definition: ${item.type}`);
  return definition;
}

function buildMap() {
  const map = createLogicalMap(FLOOR_BOUNDS);
  const all = [...layout.islands, ...layout.fixtures];
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

export function validateLayout() {
  const { map, ports, all } = buildMap();
  const reachable = validateRequiredAccess(map, ports);
  const occupied = new Map();
  for (const cell of map.cells.values()) if (cell.occupiedBy) occupied.set(cellKey(cell.x, cell.y), cell.occupiedBy);
  return {
    map,
    ports,
    reachable,
    occupied,
    itemCount: all.length,
    reachableCells: reachable.size,
  };
}
