// ZELVOLT native 3-reel engine v1.0
// Lives inside the cloned machine source. Hall/parent code does not render or control reels.
(()=>{
  const STRIPS=[
    ['7R','BELL','GRAPE','CHERRY','BELL','BAR','GRAPE','BELL','STAR','GRAPE','CHERRY','BELL','7W','GRAPE','BELL','CHERRY','BAR','GRAPE','BELL','STAR','GRAPE'],
    ['GRAPE','BELL','BAR','CHERRY','GRAPE','BELL','STAR','GRAPE','BELL','7R','CHERRY','GRAPE','BELL','BAR','GRAPE','7W','BELL','CHERRY','GRAPE','BELL','STAR'],
    ['BELL','GRAPE','CHERRY','BAR','BELL','GRAPE','STAR','CHERRY','BELL','GRAPE','7R','BELL','GRAPE','BAR','CHERRY','BELL','7W','GRAPE','STAR','BELL','GRAPE']
  ];
  const ROW=40;
  const VISIBLE_ROWS=3;
  const SPEED=[1.32,1.38,1.35]; // px/ms
  const ACCEL=0.0105;
  const MIN_STOP_TRAVEL=ROW*4;
  const reelsView=[];

  const mod=(n,m)=>((n%m)+m)%m;
  const now=()=>performance.now();

  function addStyle(){
    if(document.getElementById('zelvolt-native-reels-style'))return;
    const s=document.createElement('style');
    s.id='zelvolt-native-reels-style';
    s.textContent=`
      .reel{height:${ROW*VISIBLE_ROWS}px!important;overflow:hidden!important;display:block!important;position:relative!important;background:linear-gradient(90deg,#d9d9d9,#fff 16%,#fff 84%,#d9d9d9)!important}
      .reel>.symbol{display:none!important}
      .zv-native-track{position:absolute;left:0;right:0;top:0;will-change:transform;backface-visibility:hidden;transform:translate3d(0,0,0)}
      .zv-native-cell{height:${ROW}px;display:flex;align-items:center;justify-content:center}
      .zv-native-cell img{display:block;width:${ROW}px;height:${ROW}px;object-fit:contain;pointer-events:none;user-select:none;-webkit-user-drag:none}
      .zv-native-payline{position:absolute;z-index:4;left:2px;right:2px;top:${ROW}px;height:${ROW}px;border-top:1px solid rgba(255,215,55,.35);border-bottom:1px solid rgba(255,215,55,.35);pointer-events:none}
      .zv-native-shadow{position:absolute;z-index:5;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.16),transparent 20%,transparent 80%,rgba(0,0,0,.16))}
      .reel.zv-native-spinning .zv-native-track{filter:blur(.45px)}
    `;
    document.head.appendChild(s);
  }

  function makeCell(code){
    const cell=document.createElement('div');
    cell.className='zv-native-cell';
    const img=document.createElement('img');
    img.alt=code;
    img.draggable=false;
    img.src=symbolFiles[code];
    cell.appendChild(img);
    return cell;
  }

  function buildReel(i){
    const host=document.getElementById('r'+(i+1));
    if(!host)return null;
    host.textContent='';
    const track=document.createElement('div');
    track.className='zv-native-track';
    for(let copy=0;copy<3;copy++)for(const code of STRIPS[i])track.appendChild(makeCell(code));
    const payline=document.createElement('div');
    payline.className='zv-native-payline';
    const shadow=document.createElement('div');
    shadow.className='zv-native-shadow';
    host.append(track,payline,shadow);
    const cycle=STRIPS[i].length*ROW;
    const view={host,track,strip:STRIPS[i],cycle,phase:0,velocity:0,spinning:false,stopping:false,raf:0,last:0};
    reelsView[i]=view;
    return view;
  }

  function render(v){
    const p=mod(v.phase,v.cycle);
    v.track.style.transform=`translate3d(0,${-(v.cycle+p)}px,0)`;
  }

  function phaseForIndex(index,cycle){
    return mod(index*ROW-ROW,cycle);
  }

  function nearestIndexForCode(v,code,minTravel=0){
    const current=v.phase;
    let best=null;
    for(let i=0;i<v.strip.length;i++){
      if(v.strip[i]!==code)continue;
      const targetBase=phaseForIndex(i,v.cycle);
      let delta=mod(targetBase-mod(current,v.cycle),v.cycle);
      while(delta<minTravel)delta+=v.cycle;
      if(!best||delta<best.delta)best={index:i,delta,target:current+delta};
    }
    return best;
  }

  function setStatic(i,code){
    const v=reelsView[i]||buildReel(i);
    if(!v)return;
    if(v.raf)cancelAnimationFrame(v.raf);
    v.raf=0;v.spinning=false;v.stopping=false;v.velocity=0;
    v.host.classList.remove('zv-native-spinning');
    const hit=nearestIndexForCode(v,code,0);
    if(hit)v.phase=hit.target;
    render(v);
  }

  function startPhysical(i){
    const v=reelsView[i]||buildReel(i);
    if(!v||v.spinning||v.stopping)return;
    v.spinning=true;
    v.velocity=Math.max(v.velocity,.18);
    v.last=now();
    v.host.classList.add('zv-native-spinning');
    const step=t=>{
      if(!v.spinning)return;
      const dt=Math.min(34,t-v.last||16.7);
      v.last=t;
      v.velocity=Math.min(SPEED[i],v.velocity+dt*ACCEL);
      v.phase+=v.velocity*dt;
      render(v);
      v.raf=requestAnimationFrame(step);
    };
    v.raf=requestAnimationFrame(step);
  }

  function stopPhysical(i,code){
    const v=reelsView[i]||buildReel(i);
    if(!v)return;
    if(!v.spinning&&!v.stopping){setStatic(i,code);return}
    if(v.raf)cancelAnimationFrame(v.raf);
    v.raf=0;v.spinning=false;v.stopping=true;
    const hit=nearestIndexForCode(v,code,MIN_STOP_TRAVEL);
    if(!hit){v.stopping=false;setStatic(i,code);return}
    const start=v.phase;
    const distance=hit.target-start;
    const startVelocity=Math.max(v.velocity,SPEED[i]*.78);
    const duration=Math.max(210,Math.min(390,(distance/Math.max(.6,startVelocity))*1.35));
    const t0=now();
    const ease=t=>1-Math.pow(1-t,3);
    const settle=t=>{
      const q=Math.min(1,(t-t0)/duration);
      v.phase=start+distance*ease(q);
      render(v);
      if(q<1){v.raf=requestAnimationFrame(settle);return}
      v.phase=hit.target;v.velocity=0;v.stopping=false;v.raf=0;
      v.host.classList.remove('zv-native-spinning');
      render(v);
    };
    v.raf=requestAnimationFrame(settle);
  }

  function init(){
    addStyle();
    for(let i=0;i<3;i++){
      buildReel(i);
      setStatic(i,reels[i]);
    }

    // Replace the cloned Pekachu single-symbol renderer with ZELVOLT's native 3-row reel renderer.
    window.drawReel=function(i){
      if(i<0||i>2)return;
      if(spinning[i])return; // old logic timers may change `reels[]`; they no longer alter the physical display.
      stopPhysical(i,reels[i]);
    };
    window.drawAllReels=function(){for(let i=0;i<3;i++)setStatic(i,reels[i])};

    // START remains owned by the machine logic. This hook only starts the three physical reel motors.
    const machineStart=window.start;
    window.start=function(){
      const before=[...spinning];
      machineStart();
      for(let i=0;i<3;i++)if(spinning[i]&&!before[i])startPhysical(i);
    };

    // Reset is machine-local too; stop motors and return all three physical strips to actual symbol positions.
    const machineReset=window.resetGame;
    window.resetGame=function(){
      for(const v of reelsView){if(v?.raf)cancelAnimationFrame(v.raf)}
      machineReset();
      for(let i=0;i<3;i++)setStatic(i,reels[i]);
    };

    window.ZELVOLT_REELS={
      strips:STRIPS.map(s=>[...s]),
      getState:()=>reelsView.map((v,i)=>({reel:i,phase:v?.phase??0,velocity:v?.velocity??0,spinning:!!v?.spinning,stopping:!!v?.stopping,center:reels[i]}))
    };
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
