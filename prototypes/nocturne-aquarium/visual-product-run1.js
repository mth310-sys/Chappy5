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
    if(!d||d.documentElement.dataset.visualProductRun1==='2') return false;
    const machine=d.querySelector('.machine'),screen=d.querySelector('.screen'),depthRing=d.querySelector('.depthRing'),reelDeck=d.querySelector('.reelDeck'),crown=d.querySelector('.crown'),tankFrame=d.querySelector('.tankFrame'),controls=d.querySelector('.controls');
    if(!machine||!screen||!depthRing||!reelDeck||!crown||!tankFrame||!controls) return false;
    d.documentElement.dataset.visualProductRun1='2';
    const style=d.createElement('style');
    style.id='na-visual-product-run1';
    style.textContent=`
.lab,.sub,.lens,.msg,.hud,.zones,.gr-observe,.vm-worldports,.vm-optics{display:none!important}
.machine{--vm-edge:.34;--vm-core:.26;--vm-angle:0deg;overflow:hidden;border-radius:34px 34px 22px 22px!important;background:linear-gradient(101deg,#02070a,#1a2629 3%,#8fa7aa 5%,#071116 9%,#02070a 17%,#03070a 50%,#02070a 83%,#071116 91%,#8fa7aa 95%,#1a2629 97%,#02070a)!important;box-shadow:0 28px 78px #000,0 0 38px #19bce832,inset 0 0 0 2px #01080c,inset 0 0 0 4px #37535b55!important}
.machine:after{content:"";position:absolute;z-index:0;left:23px;right:23px;bottom:7px;height:88px;border-radius:10px 10px 20px 20px;border:1px solid #7b8d8f40;background:radial-gradient(circle at 50% 52%,#14556d33 0 6%,#071419 7% 16%,#816b2c2a 17% 18%,#061014 19% 34%,#081318 35% 100%),linear-gradient(180deg,#0a1114,#020507);box-shadow:inset 0 0 24px #000,inset 0 1px #c8e7ea18;pointer-events:none}
.crown{z-index:8;margin:0 24px 7px;padding:8px 7px 9px!important;border:1px solid #6d7f814f;clip-path:polygon(7% 0,93% 0,100% 28%,96% 100%,4% 100%,0 28%);background:linear-gradient(180deg,#10171b,#03070a 48%,#071117);box-shadow:inset 0 0 0 1px #c9e7ea12,inset 0 -9px 15px #000,0 2px 8px #000}
.crown:before,.crown:after{bottom:3px!important;width:35%!important;background:linear-gradient(90deg,transparent,#6b96a0,#c59b3c55)!important}
.title{font-size:21px!important;letter-spacing:.09em!important;color:#e9fbff!important;text-shadow:0 0 8px #55e5ff,0 0 20px #1e6dff!important}
.tankFrame{z-index:4;margin:0 13px!important;padding:6px!important;clip-path:polygon(5% 0,95% 0,100% 4%,99% 96%,94% 100%,6% 100%,1% 96%,0 4%)!important;background:linear-gradient(105deg,#10181b,#9fb5b7 4%,#1d3138 8%,#03090d 13%,#061a22 87%,#7b969b 96%,#111a1e)!important;box-shadow:0 8px 17px #000,inset 0 0 0 1px #d6fcff48,0 0 18px #2fdcf12f!important}
.screen{border-radius:12px!important;box-shadow:inset 0 0 58px #000,0 0 20px #46dfff30!important}
.reelDeck{z-index:6;margin:-1px 15px 0!important;padding:11px 10px 12px!important;border-radius:8px 8px 17px 17px!important;border:1px solid #70868a77!important;background:linear-gradient(180deg,#0d1417,#020405 35%,#071015 74%,#020507)!important;box-shadow:0 10px 22px #000,inset 0 0 26px #000,inset 0 1px #d9ffff19!important}
.reels{border-radius:5px!important;padding:7px 6px!important;background:#000!important;box-shadow:inset 0 8px 16px #000,0 0 0 1px #71898d55!important}
.controls{position:relative;z-index:7;margin:0 14px;padding:10px 4px 7px!important;border-top:1px solid #71898d44;background:linear-gradient(180deg,#11191d88,#030608d9 55%,#080d10);box-shadow:inset 0 1px #e3ffff14,0 -4px 14px #0008}
.stop{border-color:#c2b7b7!important;box-shadow:0 5px 11px #000,inset 0 2px 4px #fff7,0 0 0 2px #352326,0 0 9px #b40b1840!important}
.na-vm-reservoir{position:absolute;z-index:5;top:55px;bottom:104px;width:32px;border:1px solid #b9f9ff66;border-radius:15px 15px 18px 18px;pointer-events:none;overflow:hidden;background:linear-gradient(90deg,#dfffff16 0 13%,#79efff48 24%,#0f6683a8 56%,#031620d9 83%,#001018);box-shadow:inset 0 0 12px #dfffff38,inset 0 0 0 3px #092832aa,0 0 10px rgba(77,235,255,var(--vm-edge));opacity:.82;transition:box-shadow .18s,filter .18s,opacity .18s}
.na-vm-reservoir.l{left:1px}.na-vm-reservoir.r{right:1px;transform:scaleX(-1)}
.na-vm-reservoir:before{content:"";position:absolute;left:6px;right:8px;top:4%;bottom:4%;border-radius:12px;background:radial-gradient(circle at 45% 18%,#eaffffb0 0 2px,transparent 3px),radial-gradient(circle at 58% 36%,#a7f8ff99 0 2px,transparent 3px),radial-gradient(circle at 38% 63%,#dfffff88 0 2px,transparent 3px),radial-gradient(circle at 60% 82%,#9df4ff88 0 2px,transparent 3px),linear-gradient(180deg,#76f2ff22,#11698733 55%,#07151c22);box-shadow:inset 2px 0 #fff2}
.na-vm-reservoir:after{content:"";position:absolute;left:4px;top:3%;bottom:3%;width:3px;border-radius:4px;background:linear-gradient(transparent,#fff8 20%,#9ff6ff44 58%,transparent);opacity:.7}
.na-vm-spine{position:absolute;z-index:6;top:61px;bottom:110px;width:7px;border:1px solid #b9f9ff52;border-radius:10px;pointer-events:none;background:linear-gradient(180deg,#dfffff22,#4ceaff45 26%,#0b526b55 62%,#03131a22);box-shadow:inset 0 0 6px #dfffff30,0 0 9px rgba(77,235,255,var(--vm-edge));opacity:.74;transition:opacity .16s,box-shadow .18s,background .18s}
.na-vm-spine.l{left:31px}.na-vm-spine.r{right:31px}
.na-vm-spine:after{content:"";position:absolute;left:1px;right:1px;top:8%;height:18%;border-radius:8px;background:linear-gradient(180deg,#eaffff66,#6ff5ff18);box-shadow:0 38px 0 #6cefff18,0 76px 0 #6cefff12}
.na-vm-glass{position:absolute;z-index:7;inset:2px;border-radius:7px;pointer-events:none;border:1px solid #d8ffff1e;box-shadow:inset 10px 0 16px #eaffff0c,inset -12px 0 18px #0005,inset 0 -12px 20px #00111966}
.na-vm-beam{position:absolute;z-index:8;left:50%;bottom:4%;width:3px;height:54%;margin-left:-1.5px;pointer-events:none;opacity:0;transform-origin:50% 100%;background:linear-gradient(180deg,transparent,#9dffff42 42%,#eaffffad 74%,#8cf5ff2a);box-shadow:0 0 5px #8ff7ff66;transition:opacity .12s,transform .18s}
.na-vm-clock{position:absolute;z-index:12;left:50%;top:50%;width:68px;height:68px;margin:-34px;border-radius:50%;pointer-events:none;border:2px solid #a9f7ff72;background:repeating-conic-gradient(from 0deg,#8caab044 0 2deg,transparent 2deg 15deg),radial-gradient(circle,#061116 0 18%,#0d3a48 19% 36%,#031116 37% 49%,#9a7d2d44 50% 52%,#031116 53% 65%,#65e6f426 66% 69%,#031116 70%);box-shadow:inset 0 0 13px #7cf4ff4d,inset 0 0 0 5px #02080b,0 0 10px rgba(77,235,255,var(--vm-core));opacity:.96;transition:box-shadow .16s,transform .2s,opacity .16s}
.na-vm-clock:before{content:"";position:absolute;left:32px;top:9px;width:2px;height:25px;border-radius:2px;background:#dfffff;box-shadow:0 0 5px #8ef8ff;transform-origin:50% 25px;transform:rotate(var(--vm-angle));transition:transform .22s cubic-bezier(.2,.75,.18,1)}
.na-vm-clock:after{content:"";position:absolute;left:29px;top:29px;width:8px;height:8px;border-radius:50%;background:#eaffff;box-shadow:0 0 8px #8ef8ff}
.na-vm-lower-gear{position:absolute;z-index:1;bottom:18px;width:54px;height:54px;border-radius:50%;pointer-events:none;border:1px solid #9c813e55;background:repeating-conic-gradient(#846b3155 0 5deg,transparent 5deg 18deg),radial-gradient(circle,#071217 0 22%,#5c4b252f 23% 26%,#061014 27% 56%,#000 57%);box-shadow:inset 0 0 12px #000,0 0 8px #1a829022}.na-vm-lower-gear.l{left:45px}.na-vm-lower-gear.r{right:45px}
.machine[data-vm-intensity="1"]{--vm-edge:.48;--vm-core:.34}.machine[data-vm-intensity="2"]{--vm-edge:.68;--vm-core:.52}.machine[data-vm-intensity="3"]{--vm-edge:.9;--vm-core:.76}
.machine[data-vm-intensity="2"] .na-vm-reservoir,.machine[data-vm-intensity="3"] .na-vm-reservoir{filter:brightness(1.14);box-shadow:inset 0 0 16px #eaffff55,inset 0 0 0 3px #0b3542aa,0 0 18px rgba(77,235,255,var(--vm-edge))}
.machine[data-vm-intensity="2"] .na-vm-spine,.machine[data-vm-intensity="3"] .na-vm-spine{opacity:.96;background:linear-gradient(180deg,#eaffff38,#67f4ff66 28%,#12657b77 65%,#03131a26)}
.machine[data-vm-stop="1"] .na-vm-reservoir.l,.machine[data-vm-stop="2"] .na-vm-reservoir.r,.machine[data-vm-stop="3"] .na-vm-reservoir{filter:brightness(1.42);box-shadow:inset 0 0 20px #efffff99,inset 0 0 0 3px #0d4050aa,0 0 22px #78f5ffaa}
.machine[data-vm-stop="1"] .na-vm-spine.l,.machine[data-vm-stop="2"] .na-vm-spine.r,.machine[data-vm-stop="3"] .na-vm-spine{box-shadow:inset 0 0 8px #efffff88,0 0 15px #78f5ff99}
.machine[data-vm-stop="1"] .na-vm-beam{opacity:.38;transform:rotate(-18deg)}.machine[data-vm-stop="2"] .na-vm-beam{opacity:.56;transform:rotate(16deg)}.machine[data-vm-stop="3"] .na-vm-beam{opacity:.82;transform:rotate(0deg)}
.machine[data-vm-evidence="2"] .na-vm-clock,.machine[data-vm-evidence="3"] .na-vm-clock{transform:scale(1.06)}
.machine[data-vm-evidence="3"] .na-vm-clock{box-shadow:inset 0 0 16px #eaffff88,inset 0 0 0 5px #02080b,0 0 19px #9cffffaa}
.machine.vm-develop .na-vm-reservoir,.machine.vm-develop .na-vm-spine{opacity:1;filter:brightness(1.5);box-shadow:inset 0 0 18px #efffffa0,0 0 23px #7ff6ffaa}.machine.vm-develop .na-vm-clock{transform:scale(1.13)}
.machine.vm-resolve .na-vm-glass{box-shadow:inset 10px 0 18px #efffff18,inset -12px 0 18px #0005,inset 0 -12px 20px #00111966,0 0 18px #7cf5ff55}.machine.vm-resolve .na-vm-beam{opacity:.92}
.machine.vm-bonus{--vm-edge:.95;--vm-core:.9}.machine.vm-bonus .na-vm-reservoir,.machine.vm-bonus .na-vm-spine{opacity:1;filter:brightness(1.35);background:linear-gradient(180deg,#f5ffff66,#7cffff88 28%,#1d789488 68%,#06182044)}.machine.vm-bonus .na-vm-clock{transform:scale(1.09);box-shadow:inset 0 0 18px #efffffb0,inset 0 0 0 5px #02080b,0 0 23px #a6ffffbb}
.reelDeck{isolation:isolate}.reelDeck .na-vm-glass{z-index:9}.depthRing{position:relative;z-index:6;overflow:visible;height:18px!important;margin:-2px 56px 4px!important;transform:perspective(120px) rotateX(68deg)!important}
@media(max-width:390px){.crown{margin-left:20px;margin-right:20px}.title{font-size:18px!important}.tankFrame{margin-left:11px!important;margin-right:11px!important}.reelDeck{margin-left:12px!important;margin-right:12px!important}.controls{margin-left:11px;margin-right:11px}.na-vm-reservoir{width:28px}.na-vm-spine.l{left:27px}.na-vm-spine.r{right:27px}.na-vm-clock{width:60px;height:60px;margin:-30px}.na-vm-clock:before{left:28px;top:8px;height:22px;transform-origin:50% 22px}.na-vm-clock:after{left:26px;top:26px}.na-vm-lower-gear{width:46px;height:46px;bottom:21px}.na-vm-lower-gear.l{left:39px}.na-vm-lower-gear.r{right:39px}}
`;
    d.head.appendChild(style);
    const reservoirL=d.createElement('i'),reservoirR=d.createElement('i');
    reservoirL.className='na-vm-reservoir l';reservoirR.className='na-vm-reservoir r';machine.append(reservoirL,reservoirR);
    const left=d.createElement('i'),right=d.createElement('i');
    left.className='na-vm-spine l';right.className='na-vm-spine r';machine.append(left,right);
    const glass=d.createElement('i');glass.className='na-vm-glass';reelDeck.appendChild(glass);
    const beam=d.createElement('i');beam.className='na-vm-beam';screen.appendChild(beam);
    const clock=d.createElement('i');clock.className='na-vm-clock';depthRing.appendChild(clock);
    const gearL=d.createElement('i'),gearR=d.createElement('i');gearL.className='na-vm-lower-gear l';gearR.className='na-vm-lower-gear r';machine.append(gearL,gearR);
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
