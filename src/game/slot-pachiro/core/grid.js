export const GRID = Object.freeze({
  originX: 365,
  originY: 190,
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

export function orientationScreenAngle(orientation) {
  switch (orientation) {
    case 'E': return Math.atan2(GRID.halfH, GRID.halfW) * 180 / Math.PI;
    case 'S': return Math.atan2(GRID.halfH, -GRID.halfW) * 180 / Math.PI;
    case 'W': return Math.atan2(-GRID.halfH, -GRID.halfW) * 180 / Math.PI;
    case 'N': return Math.atan2(-GRID.halfH, GRID.halfW) * 180 / Math.PI;
    default: throw new Error(`Unknown grid orientation: ${orientation}`);
  }
}

export function cellKey(x, y) { return `${x},${y}`; }

export function footprintCells(item) {
  const cells = [];
  const w = item.w ?? 1;
  const d = item.d ?? 1;
  assertGridNumber(item.x, `${item.id}.x`);
  assertGridNumber(item.y, `${item.id}.y`);
  assertGridNumber(w, `${item.id}.w`);
  assertGridNumber(d, `${item.id}.d`);
  if (w < 1 || d < 1) throw new Error(`${item.id} footprint must be positive`);
  for (let dx = 0; dx < w; dx++) for (let dy = 0; dy < d; dy++) cells.push({ x: item.x + dx, y: item.y + dy });
  return cells;
}

export function depthKey(item) {
  const w = item.w ?? 1, d = item.d ?? 1;
  return item.x + w - 1 + item.y + d - 1;
}

export function projectedBounds(bounds) {
  const corners = [
    toScreen(bounds.minX, bounds.minY),
    toScreen(bounds.maxX + 1, bounds.minY),
    toScreen(bounds.maxX + 1, bounds.maxY + 1),
    toScreen(bounds.minX, bounds.maxY + 1),
  ];
  const xs = corners.map((p) => p.x), ys = corners.map((p) => p.y);
  const left = Math.min(...xs), top = Math.min(...ys), right = Math.max(...xs), bottom = Math.max(...ys);
  return { corners, left, top, right, bottom, width: right - left, height: bottom - top };
}
