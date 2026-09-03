import { cellKey } from './grid.js';

export function createLogicalMap(bounds) {
  const cells = new Map();
  for (let y = bounds.minY; y <= bounds.maxY; y++) {
    for (let x = bounds.minX; x <= bounds.maxX; x++) {
      cells.set(cellKey(x, y), {
        x,
        y,
        floor: true,
        buildable: true,
        occupiedBy: null,
        reservations: new Set(),
        portal: null,
        blocked: false,
      });
    }
  }
  return { bounds, cells };
}

export function getCell(map, x, y) {
  return map.cells.get(cellKey(x, y)) ?? null;
}

export function requireCell(map, x, y, label = 'cell') {
  const cell = getCell(map, x, y);
  if (!cell) throw new Error(`${label} outside floor: ${x},${y}`);
  return cell;
}

export function occupyCells(map, facilityId, cells) {
  for (const point of cells) {
    const cell = requireCell(map, point.x, point.y, facilityId);
    if (cell.occupiedBy) throw new Error(`grid collision at ${point.x},${point.y}: ${cell.occupiedBy} / ${facilityId}`);
    cell.occupiedBy = facilityId;
  }
}

export function reserveCells(map, facilityId, cells) {
  for (const point of cells) {
    const cell = requireCell(map, point.x, point.y, `${facilityId} reservation`);
    if (cell.occupiedBy && cell.occupiedBy !== facilityId) {
      throw new Error(`reservation collision at ${point.x},${point.y}: ${cell.occupiedBy} / ${facilityId}`);
    }
    cell.reservations.add(facilityId);
  }
}

export function setPortal(map, portal) {
  const cell = requireCell(map, portal.x, portal.y, `${portal.facilityId} portal`);
  if (cell.occupiedBy) throw new Error(`portal blocked at ${portal.x},${portal.y} by ${cell.occupiedBy}`);
  cell.portal = portal;
}

export function isWalkable(cell) {
  return Boolean(cell && cell.floor && !cell.blocked && !cell.occupiedBy);
}

export function walkableCells(map) {
  return [...map.cells.values()].filter(isWalkable);
}
