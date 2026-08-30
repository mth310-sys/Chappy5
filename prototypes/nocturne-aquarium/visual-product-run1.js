(()=>{
  const rootFrame=document.getElementById('shell');
  let installed=false;
  const getGameDoc=()=>{
    try{
      const a=rootFrame?.contentDocument;
      const b=a?.getElementById('shell');
      const c=b?.contentDocument;
      const d=c?.getElementById('game');
      return d?.contentDocument||null;
    }catch(_){return null}
  };
  function install(){
    const d=getGameDoc();
    if(!d||d.documentElement.dataset.visualProductRun1==='1') return false;
    const machine=d.querySelector('.machine'),screen=d.querySelector('.screen'),depthRing=d.querySelector('.depthRing'),reelDeck=d.querySelector('.reelDeck');
    if(!machine||!screen||!depthRing||!reelDeck) return false;
    d.documentElement.dataset.visualProductRun1='1';
    const style=d.createElement('style');
    style.id='na-visual-product-run1';
    style.textContent=`
.machine{--vm-edge:.34;--vm-core:.26;--vm-angle:0deg}
.na-vm-spine{position:absolute;z-index:6;top:58px;bottom:105px;width:9px;border:1px solid #b9f9ff52;border-radius:10px;pointer-events:none;background:linear-gradient(180deg,#dfffff22,#4ceaff45 26%,#0b526b55 62%,#03131a22);box-shadow:inset 0 0 6px #dfffff30,0 0 9px rgba(77,235,255,var(--vm-edge));opacity:.74;transition:opacity .16s,box-shadow .18s,background .18s}
.na-vm-spine.l{left:11px}.na-vm-spine.r{right:11px}
.na-vm-spine:after{content:"";position:absolute;left:2px;right:2px;top:8%;height:18%;border-radius:8px;background:linear-gradient(180deg,#eaffff66,#6ff5ff18);box-shadow:0 38px 0 #6cefff18,0 76px 0 #6cefff12}
.na-vm-glass{position:absolute;z-index:7;inset:2px;border-radius:11px;pointer-events:none;border:1px solid #d8ffff1e;box-shadow:inset 10px 0 16px #eaffff0c,inset -12px 0 18px #0005,inset 0 -12px 20px #00111966}
.na-vm-glass:before{content:"";position:absolute;left:33.33%;top:4px;bottom:4px;width:1px;background:#d9ffff15;box-shadow:calc(33.33vw - 2px) 0 0 transparent}
.na-vm-beam{position:absolute;z-index:8;left:50%;bottom:4%;width:3px;height:54%;margin-left:-1.5px;pointer-events:none;opacity:0;transform-origin:50% 100%;background:linear-gradient(180deg,transparent,#9dffff42 42%,#eaffffad 74%,#8cf5ff2a);box-shadow:0 0 5px #8ff7ff66;transition:opacity .12s,transform .18s}
.na-vm-clock{position:absolute;z-index:12;left:50%;top:50%;width:48px;height:48px;margin:-24px;border-radius:50%;pointer-events:none;border:1px solid #a9f7ff72;background:radial-gradient(circle,#07151b 0 24%,#0c3440 25% 43%,#031116 44% 57%,#65e6f426 58% 61%,#031116 62%);box-shadow:inset 0 0 10px #7cf4ff38,0 0 8px rgba(77,235,255,var(--vm-core));opacity:.9;transition:box-shadow .16s,transform .2s,opacity .16s}
.na-vm-clock:before{content:"";position:absolute;left:23px;top:7px;width:2px;height:17px;border-radius:2px;background:#dfffff;box-shadow:0 0 5px #8ef8ff;transform-origin:50% 17px;transform:rotate(var(--vm-angle));transition:transform .22s cubic-bezier(.2,.75,.18,1)}
.na-vm-clock:after{content:"";position:absolute;left:21px;top:21px;width:6px;height:6px;border-radius:50%;background:#eaffff;box-shadow:0 0 7px #8ef8ff}
.machine[data-vm-intensity="1"]{--vm-edge:.48;--vm-core:.34}.machine[data-vm-intensity="2"]{--vm-edge:.68;--vm-core:.52}.machine[data-vm-intensity="3"]{--vm-edge:.9;--vm-core:.76}
.machine[data-vm-intensity="2"] .na-vm-spine,.machine[data-vm-intensity="3"] .na-vm-spine{opacity:.96;background:linear-gradient(180deg,#eaffff38,#67f4ff66 28%,#12657b77 65%,#03131a26)}
.machine[data-vm-stop="1"] .na-vm-spine.l,.machine[data-vm-stop="2"] .na-vm-spine.r,.machine[data-vm-stop="3"] .na-vm-spine{box-shadow:inset 0 0 8px #efffff88,0 0 15px #78f5ff99}
.machine[data-vm-stop="1"] .na-vm-beam{opacity:.38;transform:rotate(-18deg)}.machine[data-vm-stop="2"] .na-vm-beam{opacity:.56;transform:rotate(16deg)}.machine[data-vm-stop="3"] .na-vm-beam{opacity:.82;transform:rotate(0deg)}
.machine[data-vm-evidence="2"] .na-vm-clock,.machine[data-vm-evidence="3"] .na-vm-clock{transform:scale(1.06)}
.machine[data-vm-evidence="3"] .na-vm-clock{box-shadow:inset 0 0 13px #eaffff88,0 0 15px #9cffffaa}
.machine.vm-develop .na-vm-spine{opacity:1;box-shadow:inset 0 0 10px #efffffa0,0 0 18px #7ff6ffaa}.machine.vm-develop .na-vm-clock{transform:scale(1.12)}
.machine.vm-resolve .na-vm-glass{box-shadow:inset 10px 0 18px #efffff18,inset -12px 0 18px #0005,inset 0 -12px 20px #00111966,0 0 18px #7cf5ff55}.machine.vm-resolve .na-vm-beam{opacity:.92}
.machine.vm-bonus{--vm-edge:.95;--vm-core:.9}.machine.vm-bonus .na-vm-spine{opacity:1;background:linear-gradient(180deg,#f5ffff66,#7cffff88 28%,#1d789488 68%,#06182044)}.machine.vm-bonus .na-vm-clock{transform:scale(1.08);box-shadow:inset 0 0 14px #efffffb0,0 0 18px #a6ffffbb}
.reelDeck{isolation:isolate}.reelDeck .na-vm-glass{z-index:9}
.depthRing{position:relative;overflow:visible}
@media(max-width:390px){.na-vm-spine{width:7px;left:auto}.na-vm-spine.l{left:9px}.na-vm-spine.r{right:9px}.na-vm-clock{width:42px;height:42px;margin:-21px}.na-vm-clock:before{left:20px;top:6px;height:15px;transform-origin:50% 15px}.na-vm-clock:after{left:18px;top:18px}}
`;
    d.head.appendChild(style);
    const left=d.createElement('i'),right=d.createElement('i');
    left.className='na-vm-spine l';right.className='na-vm-spine r';machine.append(left,right);
    const glass=d.createElement('i');glass.className='na-vm-glass';reelDeck.appendChild(glass);
    const beam=d.createElement('i');beam.className='na-vm-beam';screen.appendChild(beam);
    const clock=d.createElement('i');clock.className='na-vm-clock';depthRing.appendChild(clock);
    const clearClass=(name,ms)=>{machine.classList.add(name);setTimeout(()=>machine.classList.remove(name),ms)};
    d.addEventListener('nocturne:game-event',e=>{
      const x=e.detail||{},type=x.type||'';
      if(type==='lever'){
        const t=x.tier==='omen'?3:x.tier==='rise'||x.tier==='bonus'?2:x.tier==='whisper'?1:0;
        machine.dataset.vmIntensity=String(t);
        machine.removeAttribute('data-vm-stop');
      }else if(type==='stop'){
        machine.dataset.vmStop=String(x.ordinal||0);
        machine.style.setProperty('--vm-angle',`${((x.ordinal||0)*58)-29}deg`);
        setTimeout(()=>{if(machine.dataset.vmStop===String(x.ordinal||0))machine.removeAttribute('data-vm-stop')},300);
      }else if(type==='reel-evidence'){
        machine.dataset.vmEvidence=String(x.evidence?.score||0);
      }else if(type==='develop'){
        clearClass('vm-develop',820);
      }else if(type==='resolve'){
        clearClass('vm-resolve',520);
      }else if(type==='bonus-hit'||type==='bonus-open'){
        machine.classList.add('vm-bonus');
        machine.dataset.vmIntensity='3';
      }else if(type==='bonus-end'){
        machine.classList.remove('vm-bonus');
        machine.dataset.vmIntensity='0';
        machine.dataset.vmEvidence='0';
      }else if(type==='stage-shift'){
        clearClass('vm-resolve',650);
      }
    });
    machine.dataset.vmIntensity='0';
    machine.dataset.vmEvidence='0';
    installed=true;
    return true;
  }
  function probe(){if(!install())setTimeout(probe,120)}
  rootFrame?.addEventListener('load',()=>setTimeout(probe,80));
  probe();
})();
