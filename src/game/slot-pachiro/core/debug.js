import { cellKey, toScreen } from './grid.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

function diamondPoints(x, y) {
  const a = toScreen(x, y), b = toScreen(x + 1, y), c = toScreen(x + 1, y + 1), d = toScreen(x, y + 1);
  return [a, b, c, d].map((p) => `${p.x},${p.y}`).join(' ');
}

function polygon(svg, point, className, title = '') {
  const node = document.createElementNS(SVG_NS, 'polygon');
  node.setAttribute('points', diamondPoints(point.x, point.y));
  node.setAttribute('class', className);
  node.dataset.gridX = point.x;
  node.dataset.gridY = point.y;
  if (title) { const label = document.createElementNS(SVG_NS, 'title'); label.textContent = title; node.appendChild(label); }
  svg.appendChild(node);
}

function renderPath(svg, path) {
  if (!path?.length) return;
  const polyline = document.createElementNS(SVG_NS, 'polyline');
  polyline.setAttribute('class', 'debugRoute');
  polyline.setAttribute('points', path.map((cell) => {
    const p = toScreen(cell.x + 1, cell.y + 1);
    return `${p.x},${p.y}`;
  }).join(' '));
  svg.appendChild(polyline);
  for (const [index, cell] of path.entries()) polygon(svg, cell, index === 0 ? 'debugCell debugRouteStart' : index === path.length - 1 ? 'debugCell debugRouteGoal' : 'debugCell debugRouteCell', `route ${index + 1}/${path.length}`);
}

export function clearFoundationDebug(scene) { scene.querySelector('.foundationDebug')?.remove(); }

export function renderFoundationDebug(scene, report, placementResult = null, route = null) {
  clearFoundationDebug(scene);
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('class', 'foundationDebug');
  svg.setAttribute('width', String(scene.scrollWidth || scene.clientWidth || 650));
  svg.setAttribute('height', String(scene.scrollHeight || scene.clientHeight || 690));
  svg.setAttribute('aria-label', 'foundation grid diagnostics');

  for (const cell of report.map.cells.values()) {
    if (cell.structure === 'wall') polygon(svg, cell, 'debugCell debugWall', 'wall');
    else if (cell.occupiedBy) polygon(svg, cell, 'debugCell debugOccupied', `occupied: ${cell.occupiedBy}`);
    else if (cell.reservations.size) {
      const roles = [...cell.reservations.values()].flatMap((roles) => [...roles]);
      polygon(svg, cell, `debugCell ${roles.includes('chair-zone') ? 'debugChair' : 'debugReserved'}`, roles.join(', '));
    } else if (report.reachable.has(cellKey(cell.x, cell.y))) polygon(svg, cell, 'debugCell debugReachable', 'reachable');
  }

  renderPath(svg, route);

  if (placementResult?.preview) {
    for (const cell of placementResult.preview.reserved) polygon(svg, cell, 'debugCell previewReserved', cell.role ?? 'reserved');
    for (const cell of placementResult.preview.hard) polygon(svg, cell, `debugCell ${placementResult.ok ? 'previewValid' : 'previewInvalid'}`, placementResult.ok ? 'valid footprint' : placementResult.reason ?? 'invalid footprint');
    for (const port of placementResult.preview.ports) polygon(svg, port, 'debugCell previewPort', port.name ?? port.role ?? 'port');
  }
  scene.appendChild(svg);
}
