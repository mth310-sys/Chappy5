export const SLOT_FIXTURE = Object.freeze({
  cell: 64,
  shelf: Object.freeze({ width: 64, depth: 30, baseHeight: 20, frameThickness: 2 }),
  machineSand: Object.freeze({ width: 64, machineWidth: 60, sandWidth: 4, depth: 30, height: 50 }),
  slumpGraph: Object.freeze({ width: 60, depth: 30, height: 10 }),
  stool: Object.freeze({ diameter: 25, height: 18 })
});

export function createSlotFixture(options = {}) {
  return {
    type: 'slot-fixture',
    shelf: options.shelf !== false,
    machineSand: options.machineSand !== false,
    slumpGraph: options.slumpGraph !== false,
    stool: options.stool !== false
  };
}
