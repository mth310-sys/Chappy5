import { cellKey } from './grid.js';
import { getCell, isWalkable } from './map.js';

const DIRS = Object.freeze([
  Object.freeze({ x: 1, y: 0 }),
  Object.freeze({ x: -1, y: 0 }),
  Object.freeze({ x: 0, y: 1 }),
  Object.freeze({ x: 0, y: -1 }),
]);

function neighbors(map, point) {
  const result = [];
  for (const dir of DIRS) {
    const next = { x: point.x + dir.x, y: point.y + dir.y };
    if (isWalkable(getCell(map, next.x, next.y))) result.push(next);
  }
  return result;
}

export function floodReachable(start, map) {
  if (!isWalkable(getCell(map, start.x, start.y))) return new Set();
  const visited = new Set([cellKey(start.x, start.y)]);
  const queue = [start];
  for (let head = 0; head < queue.length; head++) {
    const current = queue[head];
    for (const next of neighbors(map, current)) {
      const key = cellKey(next.x, next.y);
      if (visited.has(key)) continue;
      visited.add(key);
      queue.push(next);
    }
  }
  return visited;
}

export function canReach(start, goal, map) {
  return floodReachable(start, map).has(cellKey(goal.x, goal.y));
}

export function findPath(start, goal, map) {
  if (!isWalkable(getCell(map, start.x, start.y)) || !isWalkable(getCell(map, goal.x, goal.y))) return null;
  const startKey = cellKey(start.x, start.y);
  const goalKey = cellKey(goal.x, goal.y);
  const queue = [start];
  const previous = new Map([[startKey, null]]);

  for (let head = 0; head < queue.length; head++) {
    const current = queue[head];
    const currentKey = cellKey(current.x, current.y);
    if (currentKey === goalKey) break;
    for (const next of neighbors(map, current)) {
      const key = cellKey(next.x, next.y);
      if (previous.has(key)) continue;
      previous.set(key, currentKey);
      queue.push(next);
    }
  }

  if (!previous.has(goalKey)) return null;
  const path = [];
  let cursor = goalKey;
  while (cursor) {
    const [x, y] = cursor.split(',').map(Number);
    path.push({ x, y });
    cursor = previous.get(cursor);
  }
  return path.reverse();
}
