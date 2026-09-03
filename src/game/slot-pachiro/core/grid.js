export const GRID = Object.freeze({
  originX: 325,
  originY: 78,
  halfW: 13,
  halfH: 6.5,
  tileW: 26,
  tileH: 13,
});

export function assertGridNumber(value, label) {
  if (!Number.isInteger(value)) throw new Error(`${label} must be an integer grid coordinate: ${value}`);
}

export function toScreen(x, y, rise = 0) {
  assertGridNumber(x, 'x');
  assertGridNumber(y, 'y');
  if (!Number.isFinite(rise)) throw new Error(`rise must be finite: ${rise}`);
  return {
    x: GRID.originX + (x - y) * GRID.halfW,
    y: GRID.originY + (x + y) * GRID.halfH - rise,
  };
}

export function cellKey(x, y) {
  return `${x},${y}`;
}

export function footprintCells(item) {
  const cells = [];
  const w = item.w ?? 1;
  const d = item.d ?? 1;
  assertGridNumber(item.x, `${item.id}.x`);
  assertGridNumber(item.y, `${item.id}.y`);
  assertGridNumber(w, `${item.id}.w`);
  assertGridNumber(d, `${item.id}.d`);
  if (w < 1 || d < 1) throw new Error(`${item.id} footprint must be positive`);
  for (let dx = 0; dx < w; dx++) {
    for (let dy = 0; dy < d; dy++) cells.push({ x: item.x + dx, y: item.y + dy });
  }
  return cells;
}

export function depthKey(item) {
  const w = item.w ?? 1;
  const d = item.d ?? 1;
  return item.x + w - 1 + item.y + d - 1;
}

export function projectedBounds(bounds) {
  const corners = [
    toScreen(bounds.minX, bounds.minY),
    toScreen(bounds.maxX + 1, bounds.minY),
    toScreen(bounds.maxX + 1, bounds.maxY + 1),
    toScreen(bounds.minX, bounds.maxY + 1),
  ];
  const xs = corners.map((p) => p.x);
  const ys = corners.map((p) => p.y);
  const left = Math.min(...xs);
  const top = Math.min(...ys);
  const right = Math.max(...xs);
  const bottom = Math.max(...ys);
  return { corners, left, top, right, bottom, width: right - left, height: bottom - top };
}
