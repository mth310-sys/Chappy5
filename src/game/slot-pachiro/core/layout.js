import { cellKey } from './grid.js';
import { accessPorts, hardCells, reservationCells } from './facility.js';
import { blockBoundary, createLogicalMap, getCell, occupyCells, openBoundaryPortal, reserveCells, setPortal } from './map.js';
import { floodReachable } from './navigation.js';

export const SPEC = Object.freeze({
  island: Object.freeze({ w: 9, d: 1, scale: 0.04225, rotation: 26.565, chairDepth: 1, walkDepth: 2 }),
  minWalkAisle: 2,
  rowPitch: 4,
  chairOffset: Object.freeze({ x: 4, y: 1 }),
  playerOffset: Object.freeze({ x: 4, y: 2 }),
});

export const FLOOR_BOUNDS = Object.freeze({ minX: -12, maxX: 12, minY: -14, maxY: 14 });
export const ENTRANCE_BOUNDARY = Object.freeze({ x: 0, y: FLOOR_BOUNDS.maxY });

const islandReservation = Object.freeze([
  ...Array.from({ length: 9 }, (_, x) => Object.freeze({ x, y: 1, role: 'chair-zone' })),
  ...Array.from({ length: 9 }, (_, x) => Object.freeze({ x, y: 2, role: 'walk-zone' })),
  ...Array.from({ length: 9 }, (_, x) => Object.freeze({ x, y: 3, role: 'walk-zone' })),
]);
const islandPorts = Object.freeze([
  ...Array.from({ length: 9 }, (_, x) => Object.freeze({ name: `machine-${x + 1}`, x, y: 1, role: 'machine-seat', required: true })),
  Object.freeze({ name: 'aisle-center', x: 4, y: 2, role: 'aisle-access', required: true }),
]);

export const FACILITY_DEFS = Object.freeze({
  island: Object.freeze({ w: 9, d: 1, reservationOffsets: islandReservation, accessPorts: islandPorts }),
  counter: Object.freeze({ w: 4, d: 2, reservationOffsets: Object.freeze(Array.from({ length: 4 }, (_, x) => Object.freeze({ x, y: 2, role: 'customer-front' }))), accessPorts: Object.freeze([Object.freeze({ name: 'counter-front-a', x: 1, y: 2, role: 'customer-front', required: true }), Object.freeze({ name: 'counter-front-b', x: 2, y: 2, role: 'customer-front', required: true })]) }),
  plant: Object.freeze({ w: 1, d: 1 }),
  entrance: Object.freeze({ hardOffsets: Object.freeze([]), reservationOffsets: Object.freeze([Object.freeze({ x: 0, y: -1, role: 'entrance-clearance' }), Object.freeze({ x: 0, y: -2, role: 'entrance-clearance' })]), accessPorts: Object.freeze([Object.freeze({ name: 'inside', x: 0, y: -1, role: 'portal', required: true, portal: true })]) }),
  staff: Object.freeze({ hardOffsets: Object.freeze([]) }),
});

export const layout = Object.freeze({
  islands: Object.freeze([-6,-2,2,6].map((y,i)=>Object.freeze({ id:`island-${String.fromCharCode(97+i)}`, type:'island', x:-4, y, orientation:'E', w:9, d:1 }))),
  fixtures: Object.freeze([
    Object.freeze({ id:'counter', type:'counter', x:5, y:-11, orientation:'E', w:4, d:2, rise:86 }),
    Object.freeze({ id:'staff-1', type:'staff', x:6, y:-8, orientation:'E', rise:24 }),
    Object.freeze({ id:'plant-1', type:'plant', x:-9, y:-10, orientation:'E', w:1, d:1, rise:20 }),
    Object.freeze({ id:'plant-2', type:'plant', x:9, y:9, orientation:'E', w:1, d:1, rise:20 }),
    Object.freeze({ id:'entrance', type:'entrance', x:0, y:14, orientation:'E', rise:0 }),
  ]),
});

function definitionFor(item) { const d=FACILITY_DEFS[item.type]; if(!d) throw new Error(`Missing facility definition: ${item.type}`); return d; }

function validateIslandRows(islands) {
  if (!islands.length) return;
  const rows=[...islands].sort((a,b)=>a.y-b.y);
  for(let i=1;i<rows.length;i++){
    if(rows[i].orientation!==rows[0].orientation) throw new Error('Foundation island rows must share orientation');
    if(rows[i].x!==rows[0].x) throw new Error('Foundation island rows must share longitudinal anchor');
    const gap=rows[i].y-(rows[i-1].y+1);
    if(gap < SPEC.minWalkAisle + SPEC.island.chairDepth) throw new Error(`${rows[i-1].id} -> ${rows[i].id}: row gap ${gap} is below chair+walk standard`);
  }
}

export function buildLogicalLayout(candidate = layout) {
  const map=createLogicalMap(FLOOR_BOUNDS); blockBoundary(map); openBoundaryPortal(map,ENTRANCE_BOUNDARY.x,ENTRANCE_BOUNDARY.y);
  const all=[...candidate.islands,...candidate.fixtures], ports=[];
  for(const item of all){
    const def=definitionFor(item), hard=hardCells(item,def), reserved=reservationCells(item,def), itemPorts=accessPorts(item,def);
    occupyCells(map,item.id,hard); reserveCells(map,item.id,reserved);
    for(const port of itemPorts){ports.push(port); if(port.portal)setPortal(map,port)}
  }
  return {map,ports,all};
}

function validateRequiredAccess(map,ports){
  const portal=ports.find(p=>p.portal); if(!portal) throw new Error('No entrance portal defined');
  const reachable=floodReachable(portal,map); if(!reachable.size) throw new Error(`Entrance portal is not walkable: ${portal.x},${portal.y}`);
  for(const port of ports){if(!port.required||port.portal)continue; const key=cellKey(port.x,port.y), cell=getCell(map,port.x,port.y); if(!cell)throw new Error(`${port.facilityId}.${port.name} outside floor`); if(cell.occupiedBy)throw new Error(`${port.facilityId}.${port.name} blocked by ${cell.occupiedBy}`); if(!reachable.has(key))throw new Error(`${port.facilityId}.${port.name} is unreachable from entrance`)}
  return reachable;
}

export function validateLayout(candidate = layout){
  validateIslandRows(candidate.islands);
  const {map,ports,all}=buildLogicalLayout(candidate), reachable=validateRequiredAccess(map,ports), occupied=new Map();
  for(const cell of map.cells.values())if(cell.occupiedBy)occupied.set(cellKey(cell.x,cell.y),cell.occupiedBy);
  return {map,ports,reachable,occupied,itemCount:all.length,reachableCells:reachable.size};
}
