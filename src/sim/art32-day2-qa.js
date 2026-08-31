// Multi-seed QA harness for art32-day2-prototype.js
const { compare } = require('./art32-day2-prototype');

function quantile(sorted, q) {
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}
function stats(values) {
  const s = [...values].sort((a,b)=>a-b);
  const mean = s.reduce((a,b)=>a+b,0)/s.length;
  return { mean, median: quantile(s,.5), p10: quantile(s,.1), p90: quantile(s,.9), min:s[0], max:s[s.length-1] };
}
function runQa(startSeed=51001, count=1000) {
  const rows=[];
  for(let seed=startSeed; seed<startSeed+count; seed++) rows.push(compare(seed));
  const pick=(side,key)=>rows.map(r=>r[side][key]);
  const delta=key=>rows.map(r=>r.delta[key]);
  return {
    startSeed,count,
    A:{out:stats(pick('A','out')), payout:stats(pick('A','payout')), gross:stats(pick('A','expectedGross')), occupancy:stats(pick('A','occupancy')), sessions:stats(pick('A','sessions'))},
    B:{out:stats(pick('B','out')), payout:stats(pick('B','payout')), gross:stats(pick('B','expectedGross')), occupancy:stats(pick('B','occupancy')), sessions:stats(pick('B','sessions'))},
    delta:{out:stats(delta('out')), gross:stats(delta('expectedGross')), occupiedHours:stats(delta('occupiedHours')), sessions:stats(delta('sessions'))},
    rates:{bOutHigher:delta('out').filter(x=>x>0).length/count, bGrossLower:delta('expectedGross').filter(x=>x<0).length/count}
  };
}
if (require.main===module) console.log(JSON.stringify(runQa(),null,2));
module.exports={runQa};
