import { cellKey } from './grid.js';
import { requireCell } from './map.js';

function boundaryPoints(bounds) {
  const points = [];
  for (let x = bounds.minX; x <= bounds.maxX; x++) {
    points.push({ x, y: bounds.minY });
    if (bounds.maxY !== bounds.minY) points.push({ x, y: bounds.maxY });
  }
  for (let y = bounds.minY + 1; y < bounds.maxY; y++) {
    points.push({ x: bounds.minX, y });
    if (bounds.maxX !== bounds.minX) points.push({ x: bounds.maxX, y });
  }
  return points;
}

export function createBuildingShell(bounds, openings = []) {
  const openingKeys = new Set(openings.map((point) => cellKey(point.x, point.y)));
  const walls = boundaryPoints(bounds).filter((point) => !openingKeys.has(cellKey(point.x, point.y)));
  return Object.freeze({
    bounds,
    walls: Object.freeze(walls.map((point) => Object.freeze({ ...point, role: 'wall' }))),
    openings: Object.freeze(openings.map((point) => Object.freeze({ ...point }))),
  });
}

export function applyBuildingShell(map, shell) {
  for (const point of shell.walls) {
    const cell = requireCell(map, point.x, point.y, 'building wall');
    cell.blocked = true;
    cell.buildable = false;
    cell.structure = 'wall';
  }
  for (const opening of shell.openings) {
    const cell = requireCell(map, opening.x, opening.y, 'building opening');
    cell.blocked = false;
    cell.buildable = false;
    cell.structure = opening.type ?? 'opening';
  }
}
