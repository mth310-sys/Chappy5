import { depthKey, projectedBounds, toScreen } from './grid.js';
import { FLOOR_BOUNDS, SPEC } from './layout.js';

const machineInner = '<div class="unit9"><div class="shadow"></div><div class="backboard"></div><div class="header9"></div><div class="data9"></div><div class="mount9"></div><div class="rail-left"></div><div class="rail-right"></div><div class="sand9"></div><div class="divider"></div><div class="box-side"><div class="box-stack"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div></div><div class="counter9"></div><div class="fascia9"></div><div class="foot"></div></div>';

function place(scene, element, item, extraRise = 0) {
  const point = toScreen(item.x, item.y, (item.rise ?? 0) + extraRise);
  element.style.left = `${point.x}px`;
  element.style.top = `${point.y}px`;
  element.style.zIndex = String(20 + Math.round(depthKey(item)));
  element.dataset.gridX = item.x;
  element.dataset.gridY = item.y;
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

function renderMapBase(scene) {
  const bounds = projectedBounds(FLOOR_BOUNDS);
  const floor = scene.querySelector('.floor');
  const lot = scene.querySelector('.lot');
  const road = scene.querySelector('.road');
  if (!floor || !lot || !road) throw new Error('Map base elements are missing');

  const diamond = 'polygon(50% 0,100% 50%,50% 100%,0 50%)';
  floor.style.left = `${bounds.left}px`;
  floor.style.top = `${bounds.top}px`;
  floor.style.width = `${bounds.width}px`;
  floor.style.height = `${bounds.height}px`;
  floor.style.clipPath = diamond;

  const marginX = 45;
  const marginY = 30;
  lot.style.left = `${bounds.left - marginX}px`;
  lot.style.top = `${bounds.top - marginY}px`;
  lot.style.width = `${bounds.width + marginX * 2}px`;
  lot.style.height = `${bounds.height + marginY * 2}px`;
  lot.style.clipPath = diamond;

  road.style.top = `${bounds.bottom + 70}px`;
  scene.style.height = `${bounds.bottom + 190}px`;
}

function makeIsland(item) {
  const wrapper = makeNode('asset');
  wrapper.style.setProperty('--island-scale', SPEC.island.scale);
  wrapper.style.setProperty('--island-rotation', `${SPEC.island.rotation}deg`);
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

  const chairItem = {
    id: `${item.id}-chair`,
    x: item.x + SPEC.chairOffset.x,
    y: item.y + SPEC.chairOffset.y,
    w: 1,
    d: 1,
    rise: 8,
  };
  place(scene, makeNode('chair'), chairItem);

  const playerItem = {
    id: `${item.id}-player`,
    x: item.x + SPEC.playerOffset.x,
    y: item.y + SPEC.playerOffset.y,
    w: 1,
    d: 1,
    rise: 22,
  };
  const colors = ['#d86670', '#67a862', '#9272c8', '#d69a49'];
  const player = makeNode('person', '<i class="hair"></i>');
  player.style.background = colors[index % colors.length];
  place(scene, player, playerItem);
}

function renderFixture(scene, item) {
  switch (item.type) {
    case 'counter':
      place(scene, makeNode('counterdesk', '<div class="ctop"></div><div class="cface">景品交換</div>'), item);
      break;
    case 'staff':
      place(scene, makeNode('staff', '<i class="hair"></i>'), item);
      break;
    case 'plant':
      place(scene, makeNode('plant'), item);
      break;
    case 'entrance':
      place(scene, makeNode('entrance', '<span>入口</span>'), item);
      break;
    default:
      throw new Error(`Unknown fixture type: ${item.type}`);
  }
}

export function renderLayout(scene, layout) {
  scene.querySelectorAll('.gridNode').forEach((node) => node.remove());
  renderMapBase(scene);
  layout.islands.forEach((item, index) => renderIsland(scene, item, index));
  layout.fixtures.forEach((item) => renderFixture(scene, item));
}
