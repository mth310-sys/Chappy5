import { cellKey } from './grid.js';
import { getCell, isWalkable } from './map.js';

const DIRS = Object.freeze([
  Object.freeze({ x: 1, y: 0 }),
  Object.freeze({ x: -1, y: 0 }),
  Object.freeze({ x: 0, y: 1 }),
  Object.freeze({ x: 0, y: -1 }),
]);

function walkableSpan(map, point, axis) {
  const delta = axis === 'x' ? { x: 1, y: 0 } : { x: 0, y: 1 };
  let span = 1;
  for (const sign of [-1, 1]) {
    for (let step = 1; step <= 4; step++) {
      const cell = getCell(map, point.x + delta.x * step * sign, point.y + delta.y * step * sign);
      if (!isWalkable(cell)) break;
      span += 1;
    }
  }
  return span;
}

function clearanceWidth(map, point) {
  return Math.min(walkableSpan(map, point, 'x'), walkableSpan(map, point, 'y'));
}

function networkNeighbors(network, point) {
  const result = [];
  for (const dir of DIRS) {
    const key = cellKey(point.x + dir.x, point.y + dir.y);
    if (network.cells.has(key)) result.push(key);
  }
  return result;
}

function articulationPoints(network) {
  const discovery = new Map();
  const low = new Map();
  const parent = new Map();
  const points = new Set();
  let time = 0;

  const visit = (key) => {
    time += 1;
    discovery.set(key, time);
    low.set(key, time);
    let children = 0;
    const cell = network.cells.get(key);
    if (!cell) return;

    for (const next of networkNeighbors(network, cell)) {
      if (!discovery.has(next)) {
        parent.set(next, key);
        children += 1;
        visit(next);
        low.set(key, Math.min(low.get(key), low.get(next)));
        if (!parent.has(key) && children > 1) points.add(key);
        if (parent.has(key) && low.get(next) >= discovery.get(key)) points.add(key);
      } else if (next !== parent.get(key)) {
        low.set(key, Math.min(low.get(key), discovery.get(next)));
      }
    }
  };

  for (const key of network.cells.keys()) if (!discovery.has(key)) visit(key);
  return points;
}

function serviceTargetKeys(ports) {
  return new Set(ports.filter((port) => port.required && !port.portal).map((port) => cellKey(port.x, port.y)));
}

export function analyzeCirculation(map, network, ports) {
  const targetKeys = serviceTargetKeys(ports);
  const articulation = articulationPoints(network);
  const cells = new Map();
  let minWidth = Infinity;
  const deadEnds = [];
  const criticalChokes = [];
  const narrowMainCells = [];
  const narrowIslandAisleCells = [];

  for (const [key, cell] of network.cells) {
    const width = clearanceWidth(map, cell);
    const degree = networkNeighbors(network, cell).length;
    const isTarget = targetKeys.has(key);
    const isPortal = cell.role === 'entrance';
    const deadEnd = degree <= 1 && !isTarget && !isPortal;
    const articulationPoint = articulation.has(key);
    const criticalChoke = articulationPoint && width < 2 && !isPortal;
    const narrowMain = (cell.role === 'main-trunk' || cell.role === 'entrance-approach') && width < 2;
    const narrowIslandAisle = cell.role === 'island-aisle' && width < 2;

    minWidth = Math.min(minWidth, width);
    if (deadEnd) deadEnds.push(key);
    if (criticalChoke) criticalChokes.push(key);
    if (narrowMain) narrowMainCells.push(key);
    if (narrowIslandAisle) narrowIslandAisleCells.push(key);

    cells.set(key, Object.freeze({
      ...cell,
      clearanceWidth: width,
      networkDegree: degree,
      deadEnd,
      articulation: articulationPoint,
      criticalChoke,
    }));
  }

  return Object.freeze({
    cells,
    minWidth: Number.isFinite(minWidth) ? minWidth : 0,
    deadEnds: Object.freeze(deadEnds),
    articulationPoints: Object.freeze([...articulation]),
    criticalChokes: Object.freeze(criticalChokes),
    narrowMainCells: Object.freeze(narrowMainCells),
    narrowIslandAisleCells: Object.freeze(narrowIslandAisleCells),
    valid: deadEnds.length === 0 && criticalChokes.length === 0 && narrowMainCells.length === 0 && narrowIslandAisleCells.length === 0,
  });
}
