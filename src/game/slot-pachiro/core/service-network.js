import { cellKey } from './grid.js';
import { findPath } from './navigation.js';

function reservationRoles(cell) {
  const roles = new Set();
  for (const ownerRoles of cell?.reservations?.values?.() ?? []) {
    for (const role of ownerRoles) roles.add(role);
  }
  return roles;
}

function classifyCell(cell, usage, portalKey) {
  const key = cellKey(cell.x, cell.y);
  const roles = reservationRoles(cell);
  if (key === portalKey || cell.portal) return 'entrance';
  if (roles.has('customer-front')) return 'service-front';
  if (roles.has('machine-seat')) return 'machine-front';
  if (roles.has('walk-zone')) return 'island-aisle';
  if (roles.has('entrance-clearance')) return 'entrance-approach';
  if (usage >= 2) return 'main-trunk';
  return 'connector';
}

export function buildServiceNetwork(map, ports, facilities) {
  const portal = ports.find((port) => port.portal);
  if (!portal) throw new Error('Service network requires an entrance portal');
  const portalKey = cellKey(portal.x, portal.y);
  const routes = [];
  const usage = new Map();
  const facilityIdsByCell = new Map();

  for (const facility of facilities) {
    if (!facility.servicePorts) continue;
    const targets = ports.filter((port) => port.facilityId === facility.id && !port.portal && port.required);
    for (const target of targets) {
      const route = findPath(portal, target, map);
      if (!route) throw new Error(`Service route missing: ${facility.id}.${target.name}`);
      routes.push(Object.freeze({ facilityId: facility.id, portName: target.name, role: target.role, cells: Object.freeze(route.map((point) => Object.freeze({ ...point }))) }));
      for (const point of route) {
        const key = cellKey(point.x, point.y);
        usage.set(key, (usage.get(key) ?? 0) + 1);
        const ids = facilityIdsByCell.get(key) ?? new Set();
        ids.add(facility.id);
        facilityIdsByCell.set(key, ids);
      }
    }
  }

  const cells = new Map();
  for (const [key, count] of usage) {
    const [x, y] = key.split(',').map(Number);
    const cell = map.cells.get(key);
    if (!cell) continue;
    cells.set(key, Object.freeze({
      x, y,
      role: classifyCell(cell, count, portalKey),
      usage: count,
      facilityIds: Object.freeze([...(facilityIdsByCell.get(key) ?? [])].sort()),
    }));
  }

  const roleCounts = {};
  for (const cell of cells.values()) roleCounts[cell.role] = (roleCounts[cell.role] ?? 0) + 1;

  return Object.freeze({
    portal: Object.freeze({ x: portal.x, y: portal.y }),
    routes: Object.freeze(routes),
    cells,
    roleCounts: Object.freeze({ ...roleCounts }),
    connectedFacilities: new Set(routes.map((route) => route.facilityId)).size,
    routeCount: routes.length,
  });
}
