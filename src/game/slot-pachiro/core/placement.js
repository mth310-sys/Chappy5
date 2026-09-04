import { accessPorts, hardCells, reservationCells } from './facility.js';
import { FACILITY_DEFS, validateLayout } from './layout.js';

function cloneItem(item) { return { ...item }; }
function cloneLayout(source) {
  return {
    islands: source.islands.map(cloneItem),
    fixtures: source.fixtures.map(cloneItem),
  };
}

function collectionForType(type) { return type === 'island' ? 'islands' : 'fixtures'; }

export function replaceFacility(source, nextItem) {
  if (!nextItem?.id || !nextItem?.type) throw new Error('placement item requires id and type');
  const candidate = cloneLayout(source);
  let found = false;
  for (const key of ['islands', 'fixtures']) {
    candidate[key] = candidate[key].map((item) => {
      if (item.id !== nextItem.id) return item;
      found = true;
      return cloneItem(nextItem);
    });
  }
  if (!found) candidate[collectionForType(nextItem.type)].push(cloneItem(nextItem));
  return candidate;
}

export function removeFacility(source, facilityId) {
  const candidate = cloneLayout(source);
  candidate.islands = candidate.islands.filter((item) => item.id !== facilityId);
  candidate.fixtures = candidate.fixtures.filter((item) => item.id !== facilityId);
  return candidate;
}

export function describePlacement(nextItem) {
  const definition = FACILITY_DEFS[nextItem.type];
  if (!definition) throw new Error(`Missing facility definition: ${nextItem.type}`);
  return {
    hard: hardCells(nextItem, definition),
    reserved: reservationCells(nextItem, definition),
    ports: accessPorts(nextItem, definition),
  };
}

export function testPlacement(source, nextItem) {
  let preview = null;
  try {
    preview = describePlacement(nextItem);
    const candidate = replaceFacility(source, nextItem);
    const report = validateLayout(candidate);
    return { ok: true, candidate, report, preview, reason: null };
  } catch (error) {
    return { ok: false, candidate: null, report: null, preview, reason: error instanceof Error ? error.message : String(error) };
  }
}

export function testRemoval(source, facilityId) {
  try {
    const candidate = removeFacility(source, facilityId);
    const report = validateLayout(candidate);
    return { ok: true, candidate, report, reason: null };
  } catch (error) {
    return { ok: false, candidate: null, report: null, reason: error instanceof Error ? error.message : String(error) };
  }
}
