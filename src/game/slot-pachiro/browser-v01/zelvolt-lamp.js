(()=>{
  const frame=document.getElementById('machine-frame');
  if(!frame)return;
  frame.addEventListener('load',()=>{
    try{
      const doc=frame.contentDocument;
      if(!doc||doc.location.href==='about:blank')return;
      const lamp=doc.getElementById('lamp');
      if(!lamp)return;
      lamp.textContent='';
      lamp.setAttribute('aria-label','ZELVOLT bonus lamp');
      lamp.innerHTML='<span class="zv-ring"><span class="zv-infinity">∞</span></span>';
      const style=doc.createElement('style');
      style.id='zelvolt-lamp-skin';
      style.textContent=`
        .lamp{width:58px!important;height:58px!important;flex:0 0 58px!important;border-radius:50%!important;padding:5px!important;background:radial-gradient(circle at 42% 35%,#262626 0 8%,#0a0a0a 38%,#020202 72%)!important;border:2px solid #5d5d52!important;color:#6e6841!important;box-shadow:inset 0 0 0 2px #111,inset 0 0 13px #000,0 1px 2px #000!important;transition:background .16s,box-shadow .16s,border-color .16s,color .16s!important}
        .lamp .zv-ring{width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid #494735;background:radial-gradient(circle,#15150c 0%,#060606 72%);box-shadow:inset 0 0 8px #000}
        .lamp .zv-infinity{font-family:Arial,sans-serif;font-size:29px;font-weight:700;line-height:1;transform:translateY(-1px);color:#716b3e;text-shadow:0 1px 1px #000}
        .lamp.on,.lamp.super{background:radial-gradient(circle at 42% 35%,#fffbd0 0 6%,#ffe940 22%,#dca900 58%,#4c3500 100%)!important;border-color:#fff4a3!important;color:#fff!important;box-shadow:0 0 8px #fff,0 0 18px #ffe600,0 0 34px rgba(255,196,0,.85),inset 0 0 8px #fff6a0!important}
        .lamp.on .zv-ring,.lamp.super .zv-ring{border-color:#fff6a0;background:radial-gradient(circle,#fff45b 0%,#f4c900 48%,#8a5e00 100%);box-shadow:inset 0 0 8px #fff8b8,0 0 10px #ffe600}
        .lamp.on .zv-infinity,.lamp.super .zv-infinity{color:#fffde4;text-shadow:0 0 3px #fff,0 0 8px #fff,0 0 14px #ffb700}
      `;
      doc.head.appendChild(style);
    }catch(_){ }
  });
})();
