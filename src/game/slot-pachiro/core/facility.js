import { assertGridNumber } from './grid.js';

export const ORIENTATIONS = Object.freeze(['E', 'S', 'W', 'N']);

export function assertOrientation(value, label = 'orientation') {
  if (!ORIENTATIONS.includes(value)) throw new Error(`${label} must be one of ${ORIENTATIONS.join(', ')}: ${value}`);
}

export function orientationBasis(orientation) {
  assertOrientation(orientation);
  switch (orientation) {
    case 'E': return Object.freeze({ forward: Object.freeze({ x: 1, y: 0 }), normal: Object.freeze({ x: 0, y: 1 }) });
    case 'S': return Object.freeze({ forward: Object.freeze({ x: 0, y: 1 }), normal: Object.freeze({ x: -1, y: 0 }) });
    case 'W': return Object.freeze({ forward: Object.freeze({ x: -1, y: 0 }), normal: Object.freeze({ x: 0, y: -1 }) });
    case 'N': return Object.freeze({ forward: Object.freeze({ x: 0, y: -1 }), normal: Object.freeze({ x: 1, y: 0 }) });
    default: throw new Error(`Unknown orientation: ${orientation}`);
  }
}

export function projectToBasis(point, orientation) {
  const { forward, normal } = orientationBasis(orientation);
  return {
    longitudinal: point.x * forward.x + point.y * forward.y,
    lateral: point.x * normal.x + point.y * normal.y,
  };
}

function rotateOffset(x, y, orientation) {
  const { forward, normal } = orientationBasis(orientation);
  return { x: x * forward.x + y * normal.x, y: x * forward.y + y * normal.y };
}

export function transformOffsets(offsets, orientation) {
  assertOrientation(orientation);
  return offsets.map(({ x, y, ...rest }) => ({ ...rotateOffset(x, y, orientation), ...rest }));
}

export function rectOffsets(w, d) {
  assertGridNumber(w, 'facility width');
  assertGridNumber(d, 'facility depth');
  if (w < 1 || d < 1) throw new Error(`facility footprint must be positive: ${w}x${d}`);
  const cells = [];
  for (let y = 0; y < d; y++) for (let x = 0; x < w; x++) cells.push({ x, y });
  return cells;
}

export function materializeCells(item, offsets) {
  assertGridNumber(item.x, `${item.id}.x`);
  assertGridNumber(item.y, `${item.id}.y`);
  const orientation = item.orientation ?? 'E';
  return transformOffsets(offsets, orientation).map((cell) => ({
    ...cell,
    x: item.x + cell.x,
    y: item.y + cell.y,
  }));
}

export function hardCells(item, definition) {
  const offsets = definition.hardOffsets ?? rectOffsets(definition.w ?? 1, definition.d ?? 1);
  return materializeCells(item, offsets);
}

export function reservationCells(item, definition) {
  return materializeCells(item, definition.reservationOffsets ?? []);
}

export function accessPorts(item, definition) {
  return materializeCells(item, definition.accessPorts ?? []).map((cell) => ({
    ...cell,
    facilityId: item.id,
  }));
}
