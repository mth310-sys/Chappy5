// Chappy5 hall visual prototype v0.1.1
// Pure Canvas, dependency-free, iPhone-friendly. Customer AI is intentionally not connected yet.
(() => {
  'use strict';

  const canvas = document.getElementById('hall');
  const ctx = canvas.getContext('2d');

  const WORLD = { w: 1280, h: 820 };
  const view = { x: 0, y: 0, zoom: 1 };
  const pointers = new Map();
  let dragStart = null;
  let pinchStart = null;
  let lastTap = 0;
  let dpr = 1;

  const C = {
    bg: '#071018', wall: '#3f4547', wallHi: '#696f70', floor: '#c7ad83',
    tile: '#b89d73', aisle: '#d5c29e', island: '#5a3b2f', islandTop: '#8b5b42',
    machine: '#20262a', machineEdge: '#0e1113', bezel: '#c84535', screen: '#2a5f79',
    reel: '#e8e1c7', chair: '#8f2d29', chairBase: '#3b3f41', empty: '#5e6362',
    room: '#6b5c4c', rest: '#907048', toilet: '#6b8390', smoke: '#65705d',
    office: '#59646e', storage: '#765f48', counter: '#8b623d', prize: '#7b8240',
    changer: '#707d89', text: '#f4ecd8', label: '#18232d', plant: '#456f3a'
  };

  function canvasSize() {
    const r = canvas.getBoundingClientRect();
    return { width: r.width, height: r.height, left: r.left, top: r.top };
  }

  function resize() {
    const r = canvasSize();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(r.width * dpr));
    canvas.height = Math.max(1, Math.round(r.height * dpr));
    fitView();
    draw();
  }

  function fitView() {
    const r = canvasSize();
    const z = Math.min(r.width / WORLD.w, r.height / WORLD.h) * 0.94;
    view.zoom = z;
    view.x = Math.round((r.width - WORLD.w * z) / 2);
    view.y = Math.round((r.height - WORLD.h * z) / 2);
  }

  function rect(x,y,w,h,fill,stroke=null,lw=1) {
    ctx.fillStyle = fill; ctx.fillRect(x,y,w,h);
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.strokeRect(x+.5,y+.5,w-1,h-1); }
  }

  function label(text,x,y,w) {
    ctx.font = 'bold 13px monospace';
    const pad = 5;
    const tw = Math.min(w || 999, ctx.measureText(text).width + pad*2);
    rect(x,y,tw,22,C.label,'#334453');
    ctx.fillStyle = C.text; ctx.fillText(text,x+pad,y+15);
  }

  function tiledFloor(x,y,w,h) {
    rect(x,y,w,h,C.floor);
    ctx.strokeStyle = C.tile; ctx.lineWidth = 1;
    for (let xx=x; xx<=x+w; xx+=24) { ctx.beginPath(); ctx.moveTo(xx,y); ctx.lineTo(xx,y+h); ctx.stroke(); }
    for (let yy=y; yy<=y+h; yy+=24) { ctx.beginPath(); ctx.moveTo(x,yy); ctx.lineTo(x+w,yy); ctx.stroke(); }
  }

  function plant(x,y) {
    rect(x+5,y+13,10,8,'#6a4a31');
    rect(x+4,y+5,12,10,C.plant); rect(x,y+8,8,6,'#3c6332'); rect(x+11,y,7,9,'#527c44');
  }

  // One master generic 5号機-era cabinet. All installed machines currently reuse this sprite logic.
  function machine(x,y,installed=true,facing='down') {
    if (!installed) {
      rect(x,y,24,18,C.empty,'#444a4a');
      rect(x+4,y+4,16,10,'#4b5050');
      return;
    }
    const top = facing === 'down' ? y : y+1;
    rect(x,top,24,21,C.machine,C.machineEdge,2);
    rect(x+2,top+2,20,4,C.bezel);
    rect(x+4,top+7,16,5,C.screen);
    rect(x+4,top+13,16,5,C.reel);
    rect(x+6,top+14,3,3,'#c7443b'); rect(x+11,top+14,3,3,'#d8b94b'); rect(x+16,top+14,3,3,'#5c8d4c');
    rect(x+2,top+19,20,2,'#ad7135');
  }

  function chair(x,y) {
    rect(x+5,y,14,8,C.chair,'#541817');
    rect(x+9,y+8,6,5,C.chairBase);
  }

  function island(x,y,installedCount,index) {
    const cols = 9, slotW = 28;
    const w = cols*slotW + 12;
    rect(x,y,w,60,C.island,C.machineEdge,2);
    rect(x+3,y+27,w-6,6,C.islandTop);

    const occupied = new Set();
    const order = [0,9,1,10,2,11,3,12,4,13,5,14,6,15,7,16,8,17];
    for (let i=0;i<installedCount;i++) occupied.add(order[i]);

    for (let c=0;c<cols;c++) {
      const xx = x+8+c*slotW;
      machine(xx,y+4,occupied.has(c),'down');
      chair(xx,y-8);
      machine(xx,y+35,occupied.has(c+9),'up');
      chair(xx,y+57);
    }
    ctx.fillStyle = '#d7b16b'; ctx.font = 'bold 10px monospace';
    ctx.fillText(`島${String(index+1).padStart(2,'0')}`,x+5,y+31);
  }

  function room(x,y,w,h,title,color) {
    rect(x,y,w,h,color,'#31383b',2); label(title,x+6,y+6,w-12);
  }

  function changer(x,y,n) {
    rect(x,y,24,32,C.changer,'#30383e',2);
    rect(x+4,y+4,16,7,'#b7d6de'); rect(x+7,y+15,10,3,'#1e2529');
    ctx.fillStyle=C.text; ctx.font='bold 9px monospace'; ctx.fillText(`両${n}`,x+3,y+29);
  }

  function prizeShelves(x,y,w,h) {
    room(x,y,w,h,'景品コーナー',C.prize);
    for(let yy=y+34;yy<y+h-8;yy+=18) for(let xx=x+8;xx<x+w-8;xx+=18) rect(xx,yy,12,10,['#d5b35d','#c66a58','#6b9e84'][(xx+yy)%3]);
  }

  function drawHall() {
    rect(0,0,WORLD.w,WORLD.h,C.bg);
    rect(70,45,1140,720,C.wallHi,'#242a2d',4);
    tiledFloor(86,61,1108,688);

    room(250,76,180,100,'休憩所',C.rest);
    room(452,76,205,100,'トイレ',C.toilet);
    room(680,76,180,100,'喫煙所',C.smoke);
    for(let i=0;i<3;i++) rect(275+i*48,120,34,22,'#a47f53');
    for(let i=0;i<3;i++) rect(477+i*52,118,35,40,'#8ea2aa');
    rect(705,115,120,36,'#737d69');

    // Provisional approved skeleton: 4 blocks around a central cross aisle.
    rect(535,190,90,520,C.aisle);
    rect(100,390,1030,90,C.aisle);

    // 12 horizontal islands: 3 per block. 130 installed / 216 capacity.
    const installed = [11,11,11,11,11,11,11,11,11,11,10,10];
    const leftX = 165, rightX = 650;
    const topYs = [220,285,350];
    const bottomYs = [495,560,625];
    let k=0;
    for (const y of topYs) island(leftX,y,installed[k],k++);
    for (const y of topYs) island(rightX,y,installed[k],k++);
    for (const y of bottomYs) island(leftX,y,installed[k],k++);
    for (const y of bottomYs) island(rightX,y,installed[k],k++);

    rect(72,407,35,56,'#354d58','#0e171c',2); label('入口',108,421,60);
    room(1030,340,145,115,'カウンター',C.counter);
    rect(1050,390,105,16,'#d6b97f');
    prizeShelves(1008,470,166,108);
    room(1010,610,76,112,'倉庫',C.storage);
    room(1094,610,82,112,'事務所',C.office);

    changer(500,300,1); changer(632,300,2); changer(500,565,3); changer(632,565,4);
    [[112,210],[112,690],[1150,205],[985,188],[965,695],[550,185]].forEach(([x,y])=>plant(x,y));

    label('上左ブロック',165,190,120); label('上右ブロック',650,190,120);
    label('下左ブロック',165,465,120); label('下右ブロック',650,465,120);
    rect(86,735,1108,14,'#7c6650');
  }

  function draw() {
    // Clear the complete physical backing store first. This is important on Retina iPhones:
    // clearing only CSS-pixel dimensions left old fragments on screen after pinch zoom.
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // All game/world coordinates remain CSS pixels. DPR is applied exactly once here,
    // then the camera transform is applied on top of it.
    ctx.setTransform(dpr * view.zoom, 0, 0, dpr * view.zoom, dpr * view.x, dpr * view.y);
    ctx.imageSmoothingEnabled = false;
    drawHall();
  }

  function clampZoom(z) {
    const fit = Math.min(canvas.clientWidth / WORLD.w, canvas.clientHeight / WORLD.h) * 0.94;
    return Math.max(fit * 0.85, Math.min(2.5, z));
  }

  function zoomAt(clientX,clientY,factor) {
    const r = canvasSize();
    const sx = clientX-r.left, sy = clientY-r.top;
    const wx = (sx-view.x)/view.zoom, wy = (sy-view.y)/view.zoom;
    view.zoom = clampZoom(view.zoom*factor);
    view.x = sx-wx*view.zoom;
    view.y = sy-wy*view.zoom;
    draw();
  }

  function beginPinch() {
    const r = canvasSize();
    const p = [...pointers.values()];
    if (p.length !== 2) return;
    const mx = (p[0].x + p[1].x) / 2 - r.left;
    const my = (p[0].y + p[1].y) / 2 - r.top;
    const d = Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y);
    pinchStart = {
      d,
      zoom: view.zoom,
      worldX: (mx-view.x)/view.zoom,
      worldY: (my-view.y)/view.zoom
    };
    dragStart = null;
  }

  canvas.addEventListener('wheel',e=>{
    e.preventDefault();
    zoomAt(e.clientX,e.clientY,e.deltaY<0?1.12:.89);
  },{passive:false});

  canvas.addEventListener('pointerdown',e=>{
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===1) {
      dragStart={px:e.clientX,py:e.clientY,vx:view.x,vy:view.y};
      pinchStart=null;
    } else if(pointers.size===2) {
      beginPinch();
    }
  });

  canvas.addEventListener('pointermove',e=>{
    if(!pointers.has(e.pointerId)) return;
    e.preventDefault();
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});

    if(pointers.size===1 && dragStart) {
      view.x=dragStart.vx+(e.clientX-dragStart.px);
      view.y=dragStart.vy+(e.clientY-dragStart.py);
      draw();
      return;
    }

    if(pointers.size===2 && pinchStart) {
      const r = canvasSize();
      const p=[...pointers.values()];
      const d=Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y);
      const mx=(p[0].x+p[1].x)/2-r.left;
      const my=(p[0].y+p[1].y)/2-r.top;
      view.zoom=clampZoom(pinchStart.zoom*d/Math.max(1,pinchStart.d));
      view.x=mx-pinchStart.worldX*view.zoom;
      view.y=my-pinchStart.worldY*view.zoom;
      draw();
    }
  }, {passive:false});

  function pointerEnd(e) {
    pointers.delete(e.pointerId);
    if (pointers.size===1) {
      const p=[...pointers.values()][0];
      dragStart={px:p.x,py:p.y,vx:view.x,vy:view.y};
      pinchStart=null;
    } else {
      dragStart=null;
      pinchStart=null;
    }
  }

  canvas.addEventListener('pointerup',e=>{
    pointerEnd(e);
    const now=Date.now();
    if(now-lastTap<300) { fitView(); draw(); }
    lastTap=now;
  });
  canvas.addEventListener('pointercancel',pointerEnd);
  canvas.addEventListener('dblclick',()=>{ fitView(); draw(); });
  canvas.addEventListener('contextmenu',e=>e.preventDefault());

  window.addEventListener('resize',resize,{passive:true});
  window.addEventListener('orientationchange',()=>setTimeout(resize,80),{passive:true});
  resize();
})();
