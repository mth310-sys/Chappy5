(()=>{
  const frame=document.getElementById('machine-frame');
  const host=document.getElementById('mega10-host');
  if(!frame||!host)return;

  const machines=new Map();
  let activeId=null;
  let sessionBaseGames=0,sessionBaseBig=0,sessionBaseReg=0,sessionBaseDiff=0,sessionStartCredit=null;

  const makeState=()=>({games:0,big:0,reg:0,current:0,diff:0,history:[0],lastBonusGames:0});
  const getState=id=>{
    if(!machines.has(id))machines.set(id,makeState());
    return machines.get(id);
  };

  const style=document.createElement('style');
  style.id='mega10-parent-style';
  style.textContent=`
    #mega10-host{display:none;background:#050505;padding:5px 5px 7px;box-sizing:border-box}
    body.machine-open #mega10-host{display:block}
    #zv-mega10{box-sizing:border-box;width:min(390px,calc(100vw - 10px));height:88px;margin:0 auto;padding:7px 12px 8px;position:relative;border:3px solid #777d84;border-radius:13px;background:linear-gradient(180deg,#272b31 0,#050608 14%,#020304 84%,#30353b 100%);box-shadow:inset 0 0 0 2px #111,0 3px 7px #000;display:grid;grid-template-columns:1fr 1.2fr;gap:8px;color:#eee;font-family:Arial,sans-serif}
    #zv-mega10:before{content:'';position:absolute;left:9px;right:9px;top:-7px;height:7px;border-radius:5px 5px 0 0;background:repeating-linear-gradient(90deg,#ff3838 0 10%,#ffdc2f 10% 20%,#58e865 20% 30%,#42bfff 30% 40%,#c268ff 40% 50%);box-shadow:0 0 7px #fff8;opacity:.85}
    .m10nums{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;align-content:center}.m10cell{text-align:center;border-right:1px solid #333}.m10cell:nth-child(3n){border-right:0}.m10label{display:block;font-size:7px;color:#aaa;line-height:9px}.m10value{display:block;font:bold 18px/19px 'Courier New',monospace;text-shadow:0 0 5px currentColor}.m10g{color:#80ff48}.m10b{color:#ff4545}.m10r{color:#6ec8ff}.m10c{color:#ffd84a}.m10d{color:#ff6a63}.m10graph{position:relative;border-left:1px solid #333;padding-left:6px}.m10graph small{position:absolute;left:8px;top:1px;font-size:7px;color:#aaa}.m10graph canvas{width:100%;height:64px;display:block;margin-top:7px}.m10side{position:absolute;top:12px;width:6px;height:61px;background:linear-gradient(#55e7ff,#ff68da,#ffe24c,#66ff9a);box-shadow:0 0 6px #77ddff}.m10side.l{left:2px}.m10side.r{right:2px}`;
  document.head.appendChild(style);

  host.innerHTML='<section id="zv-mega10"><i class="m10side l"></i><div class="m10nums"><div class="m10cell"><span class="m10label">TOTAL G</span><b id="m10games" class="m10value m10g">0</b></div><div class="m10cell"><span class="m10label">BIG</span><b id="m10big" class="m10value m10b">0</b></div><div class="m10cell"><span class="m10label">REG</span><b id="m10reg" class="m10value m10r">0</b></div><div class="m10cell"><span class="m10label">CURRENT</span><b id="m10current" class="m10value m10c">0</b></div><div class="m10cell"><span class="m10label">DIFF</span><b id="m10diff" class="m10value m10d">+0</b></div><div class="m10cell"><span class="m10label">DATA</span><b class="m10value m10c">10</b></div></div><div class="m10graph"><small>SLUMP</small><canvas id="m10canvas"></canvas></div><i class="m10side r"></i></section>';

  function draw(state){
    const c=document.getElementById('m10canvas');
    if(!c)return;
    const r=c.getBoundingClientRect(),scale=devicePixelRatio||1;
    c.width=Math.max(1,Math.round(r.width*scale));c.height=Math.max(1,Math.round(r.height*scale));
    const x=c.getContext('2d');x.setTransform(scale,0,0,scale,0,0);
    const w=r.width,h=r.height;
    x.strokeStyle='#34383d';x.lineWidth=1;
    for(let i=1;i<4;i++){x.beginPath();x.moveTo(0,h*i/4);x.lineTo(w,h*i/4);x.stroke()}
    x.strokeStyle='#777';x.beginPath();x.moveTo(0,h/2);x.lineTo(w,h/2);x.stroke();
    if(state.history.length<2)return;
    const max=Math.max(600,...state.history.map(v=>Math.abs(v)));
    x.strokeStyle='#ff3a43';x.lineWidth=2;x.beginPath();
    state.history.forEach((v,i)=>{const px=i/(state.history.length-1)*w,py=h/2-(v/max)*(h*.44);i?x.lineTo(px,py):x.moveTo(px,py)});x.stroke();
  }

  function render(){
    const state=activeId?getState(activeId):makeState();
    const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v};
    set('m10games',state.games);set('m10big',state.big);set('m10reg',state.reg);set('m10current',state.current);set('m10diff',(state.diff>=0?'+':'')+state.diff);
    requestAnimationFrame(()=>draw(state));
  }

  function readHallMachine(id){
    const scene=window.__pachiroScene||window.Phaser?.GAMES?.[0]?.scene?.scenes?.find?.(s=>s?.scene?.key==='main');
    return scene?.machineData?.find?.(m=>m.machineId===id)||scene?.seatedMachine||null;
  }

  window.addEventListener('pachiro:machine-seated',e=>{
    const id=e.detail?.machineId;
    if(!id)return;
    activeId=id;
    const state=getState(id),m=readHallMachine(id);
    if(m){
      state.games=Math.max(state.games,Number(m.totalGames)||0);
      state.diff=Number(m.differenceCoins)||state.diff;
    }
    sessionBaseGames=state.games;sessionBaseBig=state.big;sessionBaseReg=state.reg;sessionBaseDiff=state.diff;sessionStartCredit=null;
    render();
  });

  window.addEventListener('message',e=>{
    if(e.origin!==location.origin||e.source!==frame.contentWindow||!e.data||typeof e.data!=='object')return;
    const data=e.data;
    const id=data.machineId||activeId;
    if(!id)return;
    activeId=id;
    const state=getState(id);
    const localGames=Number(data.totalGames);
    if(Number.isFinite(localGames))state.games=sessionBaseGames+Math.max(0,localGames);
    const big=Number(data.bigCount),reg=Number(data.regCount);
    if(Number.isFinite(big))state.big=sessionBaseBig+Math.max(0,big);
    if(Number.isFinite(reg))state.reg=sessionBaseReg+Math.max(0,reg);
    const localBonus=(Number.isFinite(big)?big:0)+(Number.isFinite(reg)?reg:0);
    state.current=Math.max(0,state.games-(localBonus>0?sessionBaseGames+state.lastBonusGames:sessionBaseGames));
    if(localBonus>state.lastBonusGames){state.lastBonusGames=localGames||0;state.current=0}
    const credit=Number(data.credit);
    if(Number.isFinite(credit)){
      if(sessionStartCredit===null)sessionStartCredit=credit;
      state.diff=sessionBaseDiff+(credit-sessionStartCredit);
      const last=state.history[state.history.length-1];
      if(last!==state.diff){state.history.push(state.diff);if(state.history.length>120)state.history.shift()}
    }
    render();
  });

  window.addEventListener('resize',render);
  render();
})();