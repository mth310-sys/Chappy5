import { cellKey } from './grid.js';

const SHAREABLE_RESERVATION_ROLES = new Set(['walk-zone']);
export const CELL_DIRECTIONS = Object.freeze(['N', 'E', 'S', 'W']);
export const CELL_WALL_KINDS = Object.freeze(['wall', 'door', 'window', 'divider']);
export const CELL_FURNITURE_SLOTS = Object.freeze(['floor', 'overlay', 'N', 'E', 'S', 'W']);

const DIRECTION_VECTOR = Object.freeze({
  N: Object.freeze({ x: 0, y: -1 }),
  E: Object.freeze({ x: 1, y: 0 }),
  S: Object.freeze({ x: 0, y: 1 }),
  W: Object.freeze({ x: -1, y: 0 }),
});
const OPPOSITE_DIRECTION = Object.freeze({ N: 'S', E: 'W', S: 'N', W: 'E' });

function createWalls() {
  return { N: null, E: null, S: null, W: null };
}

function createFurnitureSlots() {
  return { floor: null, overlay: null, N: null, E: null, S: null, W: null };
}

function normalizeWall(wall) {
  if (wall == null) return null;
  if (typeof wall === 'string') return Object.freeze({ kind: wall, material: 'default', blocking: wall !== 'window' });
  const kind = wall.kind ?? 'wall';
  if (!CELL_WALL_KINDS.includes(kind)) throw new Error(`invalid wall kind: ${kind}`);
  return Object.freeze({
    kind,
    material: wall.material ?? 'default',
    blocking: typeof wall.blocking === 'boolean' ? wall.blocking : kind !== 'window',
    id: wall.id ?? null,
    metadata: Object.freeze({ ...(wall.metadata ?? {}) }),
  });
}

export function createBaseCell(x, y) {
  return {
    x, y,
    floor: true,
    floorType: 'default',
    floorVariant: null,
    elevation: 0,
    buildable: true,
    blocked: false,
    occupiedBy: null,
    furniture: createFurnitureSlots(),
    walls: createWalls(),
    reservations: new Map(),
    portal: null,
    structure: null,
    tags: new Set(),
    metadata: Object.create(null),
  };
}

export function cloneBaseCell(cell, x = cell.x, y = cell.y) {
  const clone = createBaseCell(x, y);
  clone.floor = cell.floor;
  clone.floorType = cell.floorType;
  clone.floorVariant = cell.floorVariant;
  clone.elevation = cell.elevation;
  clone.buildable = cell.buildable;
  clone.blocked = cell.blocked;
  clone.occupiedBy = cell.occupiedBy;
  clone.furniture = { ...cell.furniture };
  clone.walls = { ...cell.walls };
  clone.reservations = new Map([...cell.reservations].map(([id, roles]) => [id, new Set(roles)]));
  clone.portal = cell.portal ? { ...cell.portal } : null;
  clone.structure = cell.structure;
  clone.tags = new Set(cell.tags);
  clone.metadata = Object.assign(Object.create(null), cell.metadata);
  return clone;
}

export function createLogicalMap(bounds) {
  const cells = new Map();
  for (let y = bounds.minY; y <= bounds.maxY; y++) {
    for (let x = bounds.minX; x <= bounds.maxX; x++) {
      cells.set(cellKey(x, y), createBaseCell(x, y));
    }
  }
  return { bounds, cells };
}

export function getCell(map, x, y) { return map.cells.get(cellKey(x, y)) ?? null; }

export function requireCell(map, x, y, label = 'cell') {
  const cell = getCell(map, x, y);
  if (!cell) throw new Error(`${label} outside floor: ${x},${y}`);
  return cell;
}

export function setFloorType(map, x, y, floorType, options = {}) {
  const cell = requireCell(map, x, y, 'floor');
  cell.floor = options.floor ?? true;
  cell.floorType = floorType;
  if ('variant' in options) cell.floorVariant = options.variant;
  if (Number.isFinite(options.elevation)) cell.elevation = options.elevation;
  if (typeof options.buildable === 'boolean') cell.buildable = options.buildable;
  if (typeof options.blocked === 'boolean') cell.blocked = options.blocked;
  return cell;
}

export function setCellWall(map, x, y, direction, wall = 'wall', options = {}) {
  if (!CELL_DIRECTIONS.includes(direction)) throw new Error(`invalid wall direction: ${direction}`);
  const cell = requireCell(map, x, y, 'wall');
  const normalized = normalizeWall(wall);
  cell.walls[direction] = normalized;
  if (options.mirror !== false) {
    const vector = DIRECTION_VECTOR[direction];
    const neighbor = getCell(map, x + vector.x, y + vector.y);
    if (neighbor) neighbor.walls[OPPOSITE_DIRECTION[direction]] = normalized;
  }
  return cell;
}

export function clearCellWall(map, x, y, direction, options = {}) {
  return setCellWall(map, x, y, direction, null, options);
}

export function setCellFurniture(map, x, y, furniture, options = {}) {
  const cell = requireCell(map, x, y, 'furniture');
  const slot = options.slot ?? 'floor';
  if (!CELL_FURNITURE_SLOTS.includes(slot)) throw new Error(`invalid furniture slot: ${slot}`);
  if (slot === 'floor' && !cell.buildable) throw new Error(`furniture on non-buildable cell ${x},${y}`);
  if (cell.furniture[slot]) throw new Error(`furniture collision at ${x},${y} slot ${slot}`);
  if (['N', 'E', 'S', 'W'].includes(slot) && options.requireWall !== false && !cell.walls[slot]) {
    throw new Error(`wall furniture requires ${slot} wall at ${x},${y}`);
  }
  cell.furniture[slot] = furniture;
  return cell;
}

export function clearCellFurniture(map, x, y, options = {}) {
  const cell = requireCell(map, x, y, 'furniture');
  const slot = options.slot ?? 'floor';
  if (!CELL_FURNITURE_SLOTS.includes(slot)) throw new Error(`invalid furniture slot: ${slot}`);
  cell.furniture[slot] = null;
  return cell;
}

export function addCellTag(map, x, y, tag) {
  const cell = requireCell(map, x, y, 'tag');
  cell.tags.add(tag);
  return cell;
}

export function removeCellTag(map, x, y, tag) {
  const cell = requireCell(map, x, y, 'tag');
  cell.tags.delete(tag);
  return cell;
}

export function setCellMetadata(map, x, y, key, value) {
  const cell = requireCell(map, x, y, 'metadata');
  cell.metadata[key] = value;
  return cell;
}

export function cellHasBlockingEdge(cell, direction) {
  if (!CELL_DIRECTIONS.includes(direction)) throw new Error(`invalid wall direction: ${direction}`);
  return Boolean(cell?.walls?.[direction]?.blocking);
}

export function occupyCells(map, facilityId, cells) {
  for (const point of cells) {
    const cell = requireCell(map, point.x, point.y, facilityId);
    if (!cell.buildable) throw new Error(`${facilityId} on non-buildable cell ${point.x},${point.y}`);
    if (cell.furniture.floor) throw new Error(`${facilityId} collides with floor furniture at ${point.x},${point.y}`);
    if (cell.occupiedBy) throw new Error(`grid collision at ${point.x},${point.y}: ${cell.occupiedBy} / ${facilityId}`);
    if ([...cell.reservations.keys()].some((id) => id !== facilityId)) throw new Error(`facility ${facilityId} intrudes reserved access at ${point.x},${point.y}`);
    cell.occupiedBy = facilityId;
  }
}

function assertReservationCompatibility(cell, facilityId, role) {
  for (const [ownerId, roles] of cell.reservations) {
    if (ownerId === facilityId) continue;
    for (const existingRole of roles) {
      const shareable = SHAREABLE_RESERVATION_ROLES.has(role) && SHAREABLE_RESERVATION_ROLES.has(existingRole);
      if (!shareable) {
        throw new Error(`reservation conflict at ${cell.x},${cell.y}: ${ownerId}.${existingRole} / ${facilityId}.${role}`);
      }
    }
  }
}

export function reserveCells(map, facilityId, cells) {
  for (const point of cells) {
    const cell = requireCell(map, point.x, point.y, `${facilityId} reservation`);
    if (cell.blocked) throw new Error(`${facilityId} reservation on blocked cell ${point.x},${point.y}`);
    if (cell.occupiedBy && cell.occupiedBy !== facilityId) throw new Error(`reservation collision at ${point.x},${point.y}: ${cell.occupiedBy} / ${facilityId}`);
    const role = point.role ?? 'clearance';
    assertReservationCompatibility(cell, facilityId, role);
    const existing = cell.reservations.get(facilityId) ?? new Set();
    existing.add(role);
    cell.reservations.set(facilityId, existing);
  }
}

export function setPortal(map, portal) {
  const cell = requireCell(map, portal.x, portal.y, `${portal.facilityId} portal`);
  if (cell.occupiedBy) throw new Error(`portal blocked at ${portal.x},${portal.y} by ${cell.occupiedBy}`);
  if (cell.structure && cell.structure !== 'entrance' && cell.structure !== 'opening') throw new Error(`portal conflicts with structure at ${portal.x},${portal.y}`);
  cell.portal = portal;
}

export function isWalkable(cell) { return Boolean(cell && cell.floor && !cell.blocked && !cell.occupiedBy && !cell.furniture.floor); }
export function walkableCells(map) { return [...map.cells.values()].filter(isWalkable); }
