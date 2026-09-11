// ZELVOLT native 3-reel engine v1.3
// Machine-local physical reel engine. The inherited symbol-swap timers are disabled after START.
(()=>{
  const STRIPS=[
    ['7R','BELL','GRAPE','CHERRY','BELL','BAR','GRAPE','BELL','STAR','GRAPE','CHERRY','BELL','7W','GRAPE','BELL','CHERRY','BAR','GRAPE','BELL','STAR','GRAPE'],
    ['GRAPE','BELL','BAR','CHERRY','GRAPE','BELL','STAR','GRAPE','BELL','7R','CHERRY','GRAPE','BELL','BAR','GRAPE','7W','BELL','CHERRY','GRAPE','BELL','STAR'],
    ['BELL','GRAPE','CHERRY','BAR','BELL','GRAPE','STAR','CHERRY','BELL','GRAPE','7R','BELL','GRAPE','BAR','CHERRY','BELL','7W','GRAPE','STAR','BELL','GRAPE']
  ];
  const WINDOW=102;
  const VISIBLE_ROWS=3;
  const ROW=WINDOW/VISIBLE_ROWS;

  // Slower, heavier reel feel than v1.2.
  const SPEED=[0.76,0.80,0.78]; // px/ms
  const ACCEL=0.0052;
  const START_VELOCITY=0.10;

  // STOP tuning: small input reaction, short forward slip, then firm settle.
  const STOP_REACTION_MS=42;
  const MIN_STOP_TRAVEL=ROW*1.25;
  const MIN_STOP_MS=150;
  const MAX_STOP_MS=245;

  const reelsView=[];
  const mod=(n,m)=>((n%m)+m)%m;
  const now=()=>performance.now();

  function clearLegacyTimer(i){
    if(timers[i]!=null){clearInterval(timers[i]);timers[i]=null;}
  }
  function clearLegacyTimers(){for(let i=0;i<3;i++)clearLegacyTimer(i)}

  function addStyle(){
    if(document.getElementById('zelvolt-native-reels-style'))return;
    const s=document.createElement('style');
    s.id='zelvolt-native-reels-style';
    s.textContent=`
      .reel{height:${WINDOW}px!important;overflow:hidden!important;display:block!important;position:relative!important;background:linear-gradient(90deg,#d9d9d9,#fff 16%,#fff 84%,#d9d9d9)!important}
      .reel>.symbol{display:none!important}
      .zv-native-track{position:absolute;left:0;right:0;top:0;will-change:transform;backface-visibility:hidden;transform:translate3d(0,0,0)}
      .zv-native-cell{height:${ROW}px;display:flex;align-items:center;justify-content:center}
      .zv-native-cell img{display:block;width:32px;height:32px;object-fit:contain;pointer-events:none;user-select:none;-webkit-user-drag:none}
      .zv-native-payline{position:absolute;z-index:4;left:2px;right:2px;top:${ROW}px;height:${ROW}px;border-top:1px solid rgba(255,215,55,.35);border-bottom:1px solid rgba(255,215,55,.35);pointer-events:none}
      .zv-native-shadow{position:absolute;z-index:5;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.16),transparent 18%,transparent 82%,rgba(0,0,0,.16))}
      .reel.zv-native-spinning .zv-native-track{filter:blur(.24px)}
      .reel.zv-native-stopping .zv-native-track{filter:blur(.08px)}
      .reel.zv-native-settle{animation:zvReelSettle .085s ease-out}
      @keyframes zvReelSettle{0%{transform:translateY(-1.6px)}100%{transform:translateY(0)}}
    `;
    document.head.appendChild(s);
  }

  function makeCell(code){
    const cell=document.createElement('div');cell.className='zv-native-cell';
    const img=document.createElement('img');img.alt=code;img.draggable=false;img.src=symbolFiles[code];
    cell.appendChild(img);return cell;
  }

  function buildReel(i){
    const host=document.getElementById('r'+(i+1));if(!host)return null;
    host.textContent='';
    const track=document.createElement('div');track.className='zv-native-track';
    for(let copy=0;copy<3;copy++)for(const code of STRIPS[i])track.appendChild(makeCell(code));
    const payline=document.createElement('div');payline.className='zv-native-payline';
    const shadow=document.createElement('div');shadow.className='zv-native-shadow';
    host.append(track,payline,shadow);
    const cycle=STRIPS[i].length*ROW;
    const view={host,track,strip:STRIPS[i],cycle,phase:0,velocity:0,spinning:false,stopping:false,stopIndex:null,raf:0,last:0};
    reelsView[i]=view;return view;
  }

  function render(v){
    const p=mod(v.phase,v.cycle);
    v.track.style.transform=`translate3d(0,${-(v.cycle+p)}px,0)`;
  }
  function phaseForIndex(index,cycle){return mod(index*ROW-ROW,cycle)}

  function nearestIndexForCode(v,code,minTravel=0){
    const current=v.phase;let best=null;
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
    const v=reelsView[i]||buildReel(i);if(!v)return;
    if(v.raf)cancelAnimationFrame(v.raf);
    v.raf=0;v.spinning=false;v.stopping=false;v.velocity=0;
    v.host.classList.remove('zv-native-spinning','zv-native-stopping','zv-native-settle');
    const hit=nearestIndexForCode(v,code,0);
    if(hit){v.phase=hit.target;v.stopIndex=hit.index;}
    render(v);
  }

  function startPhysical(i){
    const v=reelsView[i]||buildReel(i);if(!v||v.spinning||v.stopping)return;
    v.spinning=true;v.stopIndex=null;v.velocity=Math.max(v.velocity,START_VELOCITY);v.last=now();
    v.host.classList.remove('zv-native-stopping','zv-native-settle');
    v.host.classList.add('zv-native-spinning');
    const step=t=>{
      if(!v.spinning)return;
      const dt=Math.min(34,t-v.last||16.7);v.last=t;
      v.velocity=Math.min(SPEED[i],v.velocity+dt*ACCEL);
      v.phase+=v.velocity*dt;render(v);
      v.raf=requestAnimationFrame(step);
    };
    v.raf=requestAnimationFrame(step);
  }

  function stopPhysical(i,code){
    const v=reelsView[i]||buildReel(i);if(!v)return;
    if(!v.spinning&&!v.stopping){setStatic(i,code);return}
    if(v.raf)cancelAnimationFrame(v.raf);
    v.raf=0;v.spinning=false;v.stopping=true;
    v.host.classList.remove('zv-native-spinning','zv-native-settle');
    v.host.classList.add('zv-native-stopping');

    // Keep the reel coasting briefly after the button press so STOP does not feel digital.
    const reactionStart=v.phase;
    const reactionVelocity=Math.max(v.velocity,SPEED[i]*0.88);
    const reactionT0=now();
    const coast=t=>{
      const elapsed=t-reactionT0;
      const dt=Math.min(34,t-(v.last||reactionT0)||16.7);
      v.last=t;
      v.phase+=reactionVelocity*dt;
      render(v);
      if(elapsed<STOP_REACTION_MS){v.raf=requestAnimationFrame(coast);return}
      beginSettle();
    };

    const beginSettle=()=>{
      const hit=nearestIndexForCode(v,code,MIN_STOP_TRAVEL);
      if(!hit){v.stopping=false;v.host.classList.remove('zv-native-stopping');setStatic(i,code);return}
      const start=v.phase;
      const distance=hit.target-start;
      const duration=Math.max(MIN_STOP_MS,Math.min(MAX_STOP_MS,125+distance/0.95));
      const t0=now();
      const ease=t=>1-Math.pow(1-t,4);
      const settle=t=>{
        const q=Math.min(1,(t-t0)/duration);
        v.phase=start+distance*ease(q);render(v);
        if(q<1){v.raf=requestAnimationFrame(settle);return}
        v.phase=hit.target;v.stopIndex=hit.index;v.velocity=0;v.stopping=false;v.raf=0;
        v.host.classList.remove('zv-native-stopping');
        v.host.classList.add('zv-native-settle');
        render(v);
        setTimeout(()=>v.host.classList.remove('zv-native-settle'),100);
      };
      v.raf=requestAnimationFrame(settle);
    };

    v.last=reactionT0;
    v.raf=requestAnimationFrame(coast);
  }

  function init(){
    addStyle();
    for(let i=0;i<3;i++){buildReel(i);setStatic(i,reels[i])}

    window.drawReel=function(i){
      if(i<0||i>2)return;
      if(spinning[i])return;
      stopPhysical(i,reels[i]);
    };
    window.drawAllReels=function(){for(let i=0;i<3;i++)setStatic(i,reels[i])};

    const machineStart=window.start;
    window.start=function(){
      const before=[...spinning];
      machineStart();
      clearLegacyTimers();
      for(let i=0;i<3;i++)if(spinning[i]&&!before[i])startPhysical(i);
    };

    const machineStop=window.stop;
    window.stop=function(i){
      if(i<0||i>2||!spinning[i])return;
      clearLegacyTimer(i);
      machineStop(i);
    };

    const machineReset=window.resetGame;
    window.resetGame=function(){
      clearLegacyTimers();
      for(const v of reelsView){if(v?.raf)cancelAnimationFrame(v.raf)}
      machineReset();
      clearLegacyTimers();
      for(let i=0;i<3;i++)setStatic(i,reels[i]);
    };

    window.ZELVOLT_REELS={
      strips:STRIPS.map(s=>[...s]),
      tuning:{speed:[...SPEED],accel:ACCEL,reactionMs:STOP_REACTION_MS,minStopTravel:MIN_STOP_TRAVEL,minStopMs:MIN_STOP_MS,maxStopMs:MAX_STOP_MS},
      getState:()=>reelsView.map((v,i)=>({
        reel:i,phase:v?.phase??0,velocity:v?.velocity??0,
        spinning:!!v?.spinning,stopping:!!v?.stopping,stopIndex:v?.stopIndex??null,
        center:v?.stopIndex==null?null:v.strip[v.stopIndex]
      }))
    };
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
