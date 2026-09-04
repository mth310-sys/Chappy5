import {
  clearCellFurniture,
  clearCellWall,
  cloneBaseCell,
  createBaseCell,
  setCellFurniture,
  setCellWall,
  setFloorType,
} from './map.js';

let cell = createBaseCell(0, 0);
let wallKind = 'wall';
let wallTarget = 'N';

const scene = document.getElementById('cell-scene');
const status = document.getElementById('cell-status');
const state = document.getElementById('cell-state');
if (!scene || !status || !state) throw new Error('Cell lab root elements are missing');

function mapForCell() {
  return { cells: new Map([['0,0', cell]]) };
}

function wallLabel(value) {
  return value?.kind ?? null;
}

function snapshot(cellValue) {
  return {
    x: cellValue.x,
    y: cellValue.y,
    floor: cellValue.floor,
    floorType: cellValue.floorType,
    floorVariant: cellValue.floorVariant,
    elevation: cellValue.elevation,
    buildable: cellValue.buildable,
    blocked: cellValue.blocked,
    walls: Object.fromEntries(Object.entries(cellValue.walls).map(([direction, wall]) => [direction, wallLabel(wall)])),
    furniture: Object.fromEntries(Object.entries(cellValue.furniture).map(([slot, value]) => [slot, value?.kind ?? null])),
    tags: [...cellValue.tags].sort(),
  };
}

function updateButtons() {
  document.querySelectorAll('[data-floor-type]').forEach((button) => button.dataset.active = button.dataset.floorType === cell.floorType ? '1' : '0');
  document.querySelectorAll('[data-wall-kind]').forEach((button) => button.dataset.active = button.dataset.wallKind === wallKind ? '1' : '0');
  document.querySelectorAll('[data-wall-target]').forEach((button) => button.dataset.active = button.dataset.wallTarget === wallTarget ? '1' : '0');
  document.querySelectorAll('[data-wall-toggle]').forEach((button) => button.dataset.active = cell.walls[button.dataset.wallToggle] ? '1' : '0');
}

function render() {
  scene.querySelector('[data-floor]').dataset.type = cell.floorType;
  for (const direction of ['N', 'E', 'S', 'W']) {
    const el = scene.querySelector(`[data-wall="${direction}"]`);
    const wall = cell.walls[direction];
    el.dataset.on = wall ? '1' : '0';
    el.dataset.kind = wallLabel(wall) ?? '';
  }

  const floorFurniture = scene.querySelector('[data-furniture-floor]');
  const floorValue = cell.furniture.floor;
  if (floorValue) floorFurniture.dataset.kind = floorValue.kind;
  else floorFurniture.removeAttribute('data-kind');

  for (const direction of ['N', 'E', 'S', 'W']) {
    const el = scene.querySelector(`[data-furniture-wall="${direction}"]`);
    const value = cell.furniture[direction];
    if (value) el.dataset.kind = value.kind;
    else el.removeAttribute('data-kind');
  }

  state.textContent = JSON.stringify(snapshot(cell), null, 2);
  updateButtons();
}

function makeWall(kind) {
  return Object.freeze({
    kind,
    material: kind === 'window' ? 'glass' : kind === 'door' ? 'wood' : 'plaster',
    blocking: kind !== 'door' && kind !== 'window',
  });
}

function applyAlignmentPreset() {
  setFloorType(mapForCell(), 0, 0, 'tile');
  setCellWall(mapForCell(), 0, 0, 'N', makeWall('wall'), { mirror: false });
  setCellWall(mapForCell(), 0, 0, 'E', makeWall('window'), { mirror: false });
  setCellFurniture(mapForCell(), 0, 0, Object.freeze({ kind: 'counter', orientation: 'N' }), { slot: 'floor' });
  setCellFurniture(mapForCell(), 0, 0, Object.freeze({ kind: 'poster', orientation: 'N' }), { slot: 'N' });
  setCellFurniture(mapForCell(), 0, 0, Object.freeze({ kind: 'display', orientation: 'E' }), { slot: 'E' });
  wallTarget = 'N';
  status.textContent = 'ALIGNMENT PRESET';
}

function applyWallMatrixPreset() {
  setFloorType(mapForCell(), 0, 0, 'tile');
  setCellWall(mapForCell(), 0, 0, 'N', makeWall('wall'), { mirror: false });
  setCellWall(mapForCell(), 0, 0, 'E', makeWall('window'), { mirror: false });
  setCellWall(mapForCell(), 0, 0, 'S', makeWall('divider'), { mirror: false });
  setCellWall(mapForCell(), 0, 0, 'W', makeWall('door'), { mirror: false });
  wallTarget = 'N';
  status.textContent = 'WALL MATRIX';
}

function applyGamecenterPreset() {
  setFloorType(mapForCell(), 0, 0, 'tile');
  setCellWall(mapForCell(), 0, 0, 'N', makeWall('wall'), { mirror: false });
  setCellWall(mapForCell(), 0, 0, 'E', makeWall('wall'), { mirror: false });
  setCellFurniture(mapForCell(), 0, 0, Object.freeze({ kind: 'counter', orientation: 'N' }), { slot: 'floor' });
  setCellFurniture(mapForCell(), 0, 0, Object.freeze({ kind: 'poster', orientation: 'N' }), { slot: 'N' });
  wallTarget = 'N';
  status.textContent = 'GAMECENTER SCALE';
}

document.querySelectorAll('[data-floor-type]').forEach((button) => button.addEventListener('click', () => {
  setFloorType(mapForCell(), 0, 0, button.dataset.floorType);
  status.textContent = `FLOOR ${button.dataset.floorType.toUpperCase()}`;
  render();
}));

document.querySelectorAll('[data-wall-kind]').forEach((button) => button.addEventListener('click', () => {
  wallKind = button.dataset.wallKind;
  status.textContent = `WALL TYPE ${wallKind.toUpperCase()}`;
  render();
}));

document.querySelectorAll('[data-wall-target]').forEach((button) => button.addEventListener('click', () => {
  wallTarget = button.dataset.wallTarget;
  status.textContent = `WALL TARGET ${wallTarget}`;
  render();
}));

document.querySelectorAll('[data-wall-toggle]').forEach((button) => button.addEventListener('click', () => {
  const direction = button.dataset.wallToggle;
  if (cell.walls[direction]) clearCellWall(mapForCell(), 0, 0, direction, { mirror: false });
  else setCellWall(mapForCell(), 0, 0, direction, makeWall(wallKind), { mirror: false });
  wallTarget = direction;
  status.textContent = `${direction} ${cell.walls[direction] ? cell.walls[direction].kind.toUpperCase() : 'OPEN'}`;
  render();
}));

document.querySelectorAll('[data-floor-furniture]').forEach((button) => button.addEventListener('click', () => {
  const kind = button.dataset.floorFurniture;
  clearCellFurniture(mapForCell(), 0, 0, { slot: 'floor' });
  if (kind !== 'none') setCellFurniture(mapForCell(), 0, 0, Object.freeze({ kind, orientation: 'N' }), { slot: 'floor' });
  status.textContent = `FLOOR ITEM ${kind.toUpperCase()}`;
  render();
}));

document.querySelectorAll('[data-wall-furniture]').forEach((button) => button.addEventListener('click', () => {
  const kind = button.dataset.wallFurniture;
  clearCellFurniture(mapForCell(), 0, 0, { slot: wallTarget });
  if (kind !== 'none') {
    if (!cell.walls[wallTarget]) setCellWall(mapForCell(), 0, 0, wallTarget, makeWall('wall'), { mirror: false });
    setCellFurniture(mapForCell(), 0, 0, Object.freeze({ kind, orientation: wallTarget }), { slot: wallTarget });
  }
  status.textContent = `${wallTarget} ITEM ${kind.toUpperCase()}`;
  render();
}));

document.querySelector('[data-reset]').addEventListener('click', () => {
  cell = createBaseCell(0, 0);
  wallKind = 'wall';
  wallTarget = 'N';
  status.textContent = 'CELL RESET';
  render();
});

document.querySelector('[data-clone]').addEventListener('click', () => {
  const clone = cloneBaseCell(cell, 1, 1);
  const sourceSnapshot = snapshot(cell);
  const cloneSnapshot = { ...snapshot(clone), x: sourceSnapshot.x, y: sourceSnapshot.y };
  const same = JSON.stringify(sourceSnapshot) === JSON.stringify(cloneSnapshot);
  status.textContent = same ? 'CLONE OK' : 'CLONE ERROR';
  if (!same) throw new Error('Base cell clone mismatch');
  render();
});

const demo = new URLSearchParams(location.search).get('cellDemo');
if (demo === 'alignment') applyAlignmentPreset();
if (demo === 'wallmatrix') applyWallMatrixPreset();
if (demo === 'gamecenter') applyGamecenterPreset();
render();
