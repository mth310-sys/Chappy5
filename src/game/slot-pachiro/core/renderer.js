import { depthKey, orientationScreenAngle, projectedBounds, toScreen } from './grid.js';
import { materializeCells } from './facility.js';
import { BUILDING_SHELL, FLOOR_BOUNDS, SPEC } from './layout.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const machineInner = '<div class="unit9"><div class="shadow"></div><div class="backboard"></div><div class="header9"></div><div class="data9"></div><div class="mount9"></div><div class="rail-left"></div><div class="rail-right"></div><div class="sand9"><span class="screen"></span><span class="slot"></span><span class="button"></span><span class="indicator"></span><span class="medal"></span></div><div class="divider"></div><div class="box-side"><div class="box-stack"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div></div><div class="counter9"></div><div class="fascia9"></div><div class="foot"></div><div class="wear"></div></div>';

function place(scene, element, item, extraRise = 0) {
  const point = toScreen(item.x, item.y, (item.rise ?? 0) + extraRise);
  element.style.left = `${point.x}px`;
  element.style.top = `${point.y}px`;
  element.style.zIndex = String(100 + Math.round(depthKey(item)));
  element.dataset.gridX = item.x;
  element.dataset.gridY = item.y;
  element.dataset.orientation = item.orientation ?? 'E';
  element.dataset.id = item.id;
  scene.appendChild(element);
  return element;
}

function makeNode(className, html = '') {
  const node = document.createElement('div');
  node.className = `gridNode ${className}`;
  node.innerHTML = html;
  return node;
}

function orientedPoint(item, offset) {
  return materializeCells(item, [{ x: offset.x, y: offset.y }])[0];
}

function line(svg, a, b, className) {
  const node = document.createElementNS(SVG_NS, 'line');
  node.setAttribute('x1', String(a.x));
  node.setAttribute('y1', String(a.y));
  node.setAttribute('x2', String(b.x));
  node.setAttribute('y2', String(b.y));
  node.setAttribute('class', className);
  svg.appendChild(node);
}

function renderLogicalGrid(scene) {
  scene.querySelector('.logicalGrid')?.remove();
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('class', 'logicalGrid');
  svg.setAttribute('width', String(scene.clientWidth || 730));
  svg.setAttribute('height', String(scene.clientHeight || 530));
  svg.setAttribute('aria-hidden', 'true');

  for (let x = FLOOR_BOUNDS.minX; x <= FLOOR_BOUNDS.maxX + 1; x++) {
    line(svg, toScreen(x, FLOOR_BOUNDS.minY), toScreen(x, FLOOR_BOUNDS.maxY + 1), 'gridLine');
  }
  for (let y = FLOOR_BOUNDS.minY; y <= FLOOR_BOUNDS.maxY + 1; y++) {
    line(svg, toScreen(FLOOR_BOUNDS.minX, y), toScreen(FLOOR_BOUNDS.maxX + 1, y), 'gridLine');
  }
  scene.appendChild(svg);
}

function renderBuildingShell(scene) {
  scene.querySelectorAll('.structureNode').forEach((node) => node.remove());
  for (const wall of BUILDING_SHELL.walls) {
    const node = makeNode('structureNode wallCell');
    const point = toScreen(wall.x, wall.y, 2);
    node.style.left = `${point.x}px`;
    node.style.top = `${point.y}px`;
    node.style.zIndex = String(70 + wall.x + wall.y);
    node.dataset.gridX = wall.x;
    node.dataset.gridY = wall.y;
    scene.appendChild(node);
  }
}

function renderMapBase(scene) {
  const bounds = projectedBounds(FLOOR_BOUNDS);
  const floor = scene.querySelector('.floor');
  const lot = scene.querySelector('.lot');
  const road = scene.querySelector('.road');
  if (!floor || !lot || !road) throw new Error('Map base elements are missing');

  floor.style.left = `${bounds.left}px`;
  floor.style.top = `${bounds.top}px`;
  floor.style.width = `${bounds.width}px`;
  floor.style.height = `${bounds.height}px`;

  const marginX = 12, marginY = 20;
  lot.style.left = `${bounds.left - marginX}px`;
  lot.style.top = `${bounds.top - marginY}px`;
  lot.style.width = `${bounds.width + marginX * 2}px`;
  lot.style.height = `${bounds.height + marginY * 2}px`;

  const sceneWidth = Math.ceil(Math.max(730, bounds.right + marginX + 2));
  const roadTop = Math.ceil(bounds.bottom + 40);
  const roadHeight = 92;
  const sceneHeight = roadTop + roadHeight;
  scene.style.width = `${sceneWidth}px`;
  scene.style.height = `${sceneHeight}px`;
  scene.dataset.baseWidth = String(sceneWidth);
  scene.dataset.baseHeight = String(sceneHeight);

  road.style.left = '0px';
  road.style.top = `${roadTop}px`;
  road.style.width = `${sceneWidth}px`;
  road.style.height = `${roadHeight}px`;

  renderLogicalGrid(scene);
  renderBuildingShell(scene);
}

function makeIsland(item) {
  const wrapper = makeNode('asset');
  wrapper.style.setProperty('--island-scale', SPEC.island.scale);
  wrapper.style.setProperty('--island-rotation', `${orientationScreenAngle(item.orientation ?? 'E')}deg`);
  const island = document.createElement('div');
  island.className = 'island9';
  wrapper.appendChild(island);
  for (let i = 0; i < 9; i++) {
    const bay = document.createElement('div');
    bay.className = 'bay9';
    bay.style.left = `${i * 344}px`;
    bay.innerHTML = machineInner;
    island.appendChild(bay);
  }
  return wrapper;
}

function renderIsland(scene, item, index) {
  place(scene, makeIsland(item), item);
  const chairCell = orientedPoint(item, SPEC.chairOffset);
  const chairItem = { id: `${item.id}-chair`, x: chairCell.x, y: chairCell.y, w: 1, d: 1, rise: 8, orientation: item.orientation };
  place(scene, makeNode('chair'), chairItem);
  const playerCell = orientedPoint(item, SPEC.playerOffset);
  const playerItem = { id: `${item.id}-player`, x: playerCell.x, y: playerCell.y, w: 1, d: 1, rise: 22, orientation: item.orientation };
  const colors = ['#d86670', '#67a862', '#9272c8', '#d69a49'];
  const player = makeNode('person', '<i class="hair"></i>');
  player.style.background = colors[index % colors.length];
  place(scene, player, playerItem);
}

function renderFixture(scene, item) {
  switch (item.type) {
    case 'counter': place(scene, makeNode('counterdesk', '<div class="ctop"></div><div class="cface">景品交換</div>'), item); break;
    case 'staff': place(scene, makeNode('staff', '<i class="hair"></i>'), item); break;
    case 'plant': place(scene, makeNode('plant'), item); break;
    case 'entrance': place(scene, makeNode('entrance', '<span>入口</span>'), item); break;
    default: throw new Error(`Unknown fixture type: ${item.type}`);
  }
}

export function renderLayout(scene, layout) {
  scene.querySelectorAll('.gridNode').forEach((node) => node.remove());
  renderMapBase(scene);
  layout.islands.forEach((item, index) => renderIsland(scene, item, index));
  layout.fixtures.forEach((item) => renderFixture(scene, item));
}
