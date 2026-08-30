(()=>{
  const rootFrame=document.getElementById('shell');
  const AC=window.AudioContext||window.webkitAudioContext;
  let ac=null,bus=null,bank={},armed=false,duckUntil=0;
  const getGameDoc=()=>{try{const a=rootFrame?.contentDocument,b=a?.getElementById('shell'),c=b?.contentDocument,g=c?.getElementById('game');return g?.contentDocument||null}catch(_){return null}};
  function mk(name,d,fn){const n=Math.max(1,Math.floor(ac.sampleRate*d)),b=ac.createBuffer(1,n,ac.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.max(-1,Math.min(1,fn(i/ac.sampleRate,d,i,n)));bank[name]=b}
  function build(){const rnd=()=>Math.random()*2-1;
    mk('nudge',.22,t=>.18*Math.sin(2*Math.PI*1180*t)*Math.exp(-18*t)+.06*rnd()*Math.exp(-22*t));
    mk('carry',.44,(t,d)=>.17*Math.sin(2*Math.PI*(126+72*t/d)*t)*Math.sin(Math.PI*t/d)+.07*Math.sin(2*Math.PI*504*t)*Math.exp(-8*t));
    mk('deepOmen',.62,(t,d)=>.28*Math.sin(2*Math.PI*(64+92*t/d)*t)*Math.sin(Math.PI*t/d)+.13*Math.sin(2*Math.PI*(252+120*t/d)*t)*Math.exp(-3.5*t));
    mk('judge',.38,(t,d)=>.24*Math.sin(2*Math.PI*(82+42*t/d)*t)*Math.exp(-7*t)+.11*Math.sin(2*Math.PI*656*t)*Math.exp(-14*t));
    mk('winSeal',.72,(t,d)=>.25*Math.sin(2*Math.PI*(294+210*t/d)*t)*Math.sin(Math.PI*t/d)+.17*Math.sin(2*Math.PI*(588+180*t/d)*t)*Math.sin(Math.PI*t/d));
  }
  function boot(){if(!AC)return false;if(!ac){try{ac=new AC()}catch(_){return false}bus=ac.createGain();bus.gain.value=.48;bus.connect(ac.destination);build()}if(ac.state!=='running')try{ac.resume()}catch(_){}return true}
  function play(name,g=.3,delay=0,rate=1){if(!ac||ac.state!=='running'||!bank[name])return;const s=ac.createBufferSource(),v=ac.createGain();s.buffer=bank[name];s.playbackRate.value=rate;v.gain.value=g;s.connect(v).connect(bus);s.onended=()=>{try{s.disconnect();v.disconnect()}catch(_){}};s.start(ac.currentTime+delay)}
  function dip(ms=170){if(!ac)return;const now=ac.currentTime;duckUntil=Math.max(duckUntil,performance.now()+ms);bus.gain.cancelScheduledValues(now);bus.gain.setTargetAtTime(.12,now,.012);setTimeout(()=>{if(ac&&performance.now()>=duckUntil-4)bus.gain.setTargetAtTime(.48,ac.currentTime,.065)},ms)}
  function onEvent(ev){if(!ac||ac.state!=='running')return;const x=ev.detail||{};
    if(x.type==='reel-nudge')play('nudge',.22,.015,1+Math.min(2,Number(x.level||1))*.035);
    else if(x.type==='anticipation-carry'&&Number(x.carry||0)>0)play('carry',Math.min(.25,.1+Number(x.carry)*.045),.05,.92+Number(x.carry)*.035);
    else if(x.type==='strong-omen'){dip(210);play('deepOmen',.42,.085,1.02)}
    else if(x.type==='judgment'){dip(145);play('judge',Math.min(.36,.18+Number(x.strength||1)*.045),.025,.94+Number(x.strength||1)*.025)}
    else if(x.type==='win'){dip(260);play('winSeal',.48,.18,1.04)}
  }
  function install(){const d=getGameDoc();if(!d||d.documentElement.dataset.soundProductRun4==='1')return false;d.documentElement.dataset.soundProductRun4='1';d.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('button'))boot()},{capture:true});d.addEventListener('nocturne:game-event',onEvent);armed=true;return true}
  function probe(){if(!install())setTimeout(probe,120)}rootFrame?.addEventListener('load',()=>setTimeout(probe,100));probe();
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&ac&&ac.state==='running')ac.suspend().catch(()=>{})});
})();
