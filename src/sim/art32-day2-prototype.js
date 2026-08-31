// Chappy5 - A+RT 32-machine Day 2 simulation prototype v0.1
// Research/gameplay prototype. No browser dependencies.
// OUT is generated from customer arrivals, seating and continuation; it is not a preset target.

const HOURS = Array.from({ length: 13 }, (_, i) => 10 + i);

const PAYOUT = {
  spider: { 1: .967, 2: .998, 3: 1.028, 4: 1.073, 5: 1.119, 6: 1.173 },
  ring:   { 1: .980, 2: 1.005, 3: 1.030, 4: 1.081, 5: 1.131, 6: 1.195 },
  eva:    { 1: .961, 2: .980, 3: 1.006, 4: 1.034, 5: 1.062, 6: 1.092 },
  twin:   { 1: .960, 2: .992, 3: 1.021, 4: 1.041, 5: 1.058, 6: 1.083 },
  taiho:  { 1: .987, 2: 1.001, 3: 1.013, 4: 1.027, 5: 1.039, 6: 1.052 },
  franken:{ 1: .977, 4: 1.000, 6: 1.039 }
};

const baseSettings = [
  4,1,2,1,3,1,2,1,4,1,
  2,1,3,1,2,1,2,1,3,1,
  2,1,3,1,2,1,
  2,1,1,1,1,1
];

const bChanges = new Map([
  [60,3],[62,2],[64,2],[70,3],[72,2],[74,2],[80,2],[86,2]
]);

function machineKind(index) {
  const id = 59 + index;
  if (id <= 68) return 'spider';
  if (id <= 78) return 'ring';
  if (id <= 84) return 'eva';
  if (id <= 86) return 'twin';
  if (id <= 88) return 'taiho';
  return 'franken';
}

function makeMachines(strategy) {
  return baseSettings.map((setting, index) => {
    const idNum = 59 + index;
    const kind = machineKind(index);
    const finalSetting = strategy === 'B' && bChanges.has(idNum) ? bChanges.get(idNum) : setting;
    return {
      id: `S${String(idNum).padStart(3,'0')}`,
      kind,
      setting: finalSetting,
      payout: PAYOUT[kind][finalSetting],
      out: 0,
      expectedSafe: 0,
      visibleSignal: 0,
      occupied: false,
      customer: null,
      sessions: 0,
      occupiedHours: 0
    };
  });
}

// Mulberry32: deterministic PRNG for reproducible A/B tests.
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

const TYPES = {
  regular: { history: .34, preference: .22, patience: .72, hourlyOut: 480 },
  fan:     { history: .16, preference: .45, patience: .66, hourlyOut: 455 },
  worker:  { history: .28, preference: .20, patience: .52, hourlyOut: 430 },
  light:   { history: .10, preference: .12, patience: .38, hourlyOut: 390 }
};

const arrivalCurve = [9,8,7,7,8,9,12,15,18,19,17,12,7];

function chooseType(hour, r) {
  const x = r();
  if (hour >= 17 && x < .48) return 'worker';
  if (hour <= 12 && x < .45) return 'regular';
  if (x < .25) return 'fan';
  if (x < .60) return 'regular';
  return 'light';
}

function scoreMachine(m, type, r) {
  const t = TYPES[type];
  // Day 1 A+RT positive category memory. Same for A/B at opening.
  const categoryMemory = .18;
  const kindPreference = (type === 'fan' && (m.kind === 'spider' || m.kind === 'ring')) ? .18 : 0;
  return categoryMemory + kindPreference + t.preference + t.history * m.visibleSignal + (r() - .5) * .22;
}

function updateVisibleSignal(m, r) {
  // Prototype observation proxy: long-term payout influences signal only through noisy observed results.
  // It intentionally does not expose setting directly.
  const theoreticalEdge = (m.payout - 1) * 3.5;
  const noise = (r() - .5) * .34;
  m.visibleSignal = Math.max(-1, Math.min(1, m.visibleSignal * .70 + theoreticalEdge + noise));
}

function run(strategy, seed = 51001) {
  const machines = makeMachines(strategy);
  const trafficRng = rng(seed);
  const seatRng = rng(seed + 101);
  const playRng = rng(seed + 202);
  const leaveRng = rng(seed + 303);
  let customerSeq = 0;

  for (let h = 0; h < HOURS.length; h++) {
    const hour = HOURS[h];

    // Existing players generate play first.
    for (const m of machines) {
      if (!m.occupied) continue;
      const t = TYPES[m.customer.type];
      const out = Math.round(t.hourlyOut * (.88 + playRng() * .24));
      m.out += out;
      m.occupiedHours++;
      updateVisibleSignal(m, playRng);

      const lateRisk = hour >= 21 ? .18 * (hour - 20) : 0;
      const continueScore = t.patience + m.visibleSignal * .20 - lateRisk;
      if (leaveRng() > continueScore) {
        m.occupied = false;
        m.customer = null;
      }
    }

    // Common traffic stream: strategy cannot alter how many people reach the hall in this v0.1.
    const arrivals = Math.max(0, Math.round(arrivalCurve[h] * (.82 + trafficRng() * .36)));
    for (let a = 0; a < arrivals; a++) {
      const type = chooseType(hour, trafficRng);
      const candidates = machines.filter(m => !m.occupied);
      if (!candidates.length) break;
      let best = null;
      let bestScore = -Infinity;
      for (const m of candidates) {
        const s = scoreMachine(m, type, seatRng);
        if (s > bestScore) { bestScore = s; best = m; }
      }
      // Weak hall: not every visitor who considers A+RT sits.
      const sitThreshold = type === 'regular' ? .24 : type === 'fan' ? .20 : .30;
      if (best && bestScore >= sitThreshold) {
        best.occupied = true;
        best.customer = { id: ++customerSeq, type };
        best.sessions++;
      }
    }
  }

  let out = 0, safe = 0, gross = 0, sessions = 0, occupiedHours = 0;
  for (const m of machines) {
    m.expectedSafe = m.out * m.payout;
    out += m.out;
    safe += m.expectedSafe;
    gross += (m.out - m.expectedSafe) * 20;
    sessions += m.sessions;
    occupiedHours += m.occupiedHours;
  }

  return {
    strategy,
    seed,
    out,
    expectedSafe: safe,
    payout: out ? safe / out : 0,
    expectedGross: gross,
    sessions,
    occupiedHours,
    occupancy: occupiedHours / (32 * 13),
    machines
  };
}

function compare(seed = 51001) {
  // Same seeds and initial memory. Only setting allocation differs.
  const A = run('A', seed);
  const B = run('B', seed);
  return {
    seed,
    A,
    B,
    delta: {
      out: B.out - A.out,
      expectedGross: B.expectedGross - A.expectedGross,
      sessions: B.sessions - A.sessions,
      occupiedHours: B.occupiedHours - A.occupiedHours
    }
  };
}

if (typeof module !== 'undefined') module.exports = { run, compare };

// Node usage:
// const { compare } = require('./art32-day2-prototype');
// console.log(JSON.stringify(compare(51001), null, 2));
