// Chappy5 hall visual prototype v0.1
// Pure Canvas, dependency-free, iPhone-friendly. Customer AI is intentionally not connected yet.
(() => {
  'use strict';

  const canvas = document.getElementById('hall');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const WORLD = { w: 1280, h: 820 };
  const view = { x: 0, y: 0, zoom: 1 };
  const pointers = new Map();
  let dragStart = null;
  let pinchStart = null;
  let lastTap = 0;

  const C = {
    bg: '#071018', wall: '#3f4547', wallHi: '#696f70', floor: '#c7ad83',
    tile: '#b89d73', aisle: '#d5c29e', island: '#5a3b2f', islandTop: '#8b5b42',
    machine: '#20262a', machineEdge: '#0e1113', bezel: '#c84535', screen: '#2a5f79',
    reel: '#e8e1c7', chair: '#8f2d29', chairBase: '#3b3f41', empty: '#5e6362',
    room: '#6b5c4c', rest: '#907048', toilet: '#6b8390', smoke: '#65705d',
    office: '#59646e', storage: '#765f48', counter: '#8b623d', prize: '#7b8240',
    changer: '#707d89', text: '#f4ecd8', label: '#18232d', plant: '#456f3a'
  };

  function resize() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(r.width * dpr));
    canvas.height = Math.max(1, Math.floor(r.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fitView();
    draw();
  }

  function fitView() {
    const r = canvas.getBoundingClientRect();
    const z = Math.min(r.width / WORLD.w, r.height / WORLD.h) * 0.98;
    view.zoom = z;
    view.x = (r.width - WORLD.w * z) / 2;
    view.y = (r.height - WORLD.h * z) / 2;
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

    // distribute installed slots across both sides while preserving 18-slot capacity.
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

    // Main shell and floor
    rect(70,45,1140,720,C.wallHi,'#242a2d',4);
    tiledFloor(86,61,1108,688);

    // Upper facilities: rest / toilet / smoking
    room(250,76,180,100,'休憩所',C.rest);
    room(452,76,205,100,'トイレ',C.toilet);
    room(680,76,180,100,'喫煙所',C.smoke);
    for(let i=0;i<3;i++) { rect(275+i*48,120,34,22,'#a47f53'); }
    for(let i=0;i<3;i++) { rect(477+i*52,118,35,40,'#8ea2aa'); }
    rect(705,115,120,36,'#737d69');

    // Central cross-shaped circulation
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

    // Entrance, counter and operational areas
    rect(72,407,35,56,'#354d58','#0e171c',2); label('入口',108,421,60);
    room(1030,340,145,115,'カウンター',C.counter);
    rect(1050,390,105,16,'#d6b97f');
    prizeShelves(1008,470,166,108);
    room(1010,610,76,112,'倉庫',C.storage);
    room(1094,610,82,112,'事務所',C.office);

    // Four changers at block ends near the central cross aisle.
    changer(500,300,1); changer(632,300,2); changer(500,565,3); changer(632,565,4);

    // Sparse old hall decoration
    [[112,210],[112,690],[1150,205],[985,188],[965,695],[550,185]].forEach(([x,y])=>plant(x,y));

    // Section labels
    label('上左ブロック',165,190,120); label('上右ブロック',650,190,120);
    label('下左ブロック',165,465,120); label('下右ブロック',650,465,120);

    // Bottom info plaque
    rect(86,735,1108,14,'#7c6650');
  }

  function draw() {
    const r = canvas.getBoundingClientRect();
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,r.width,r.height);
    ctx.save();
    ctx.translate(view.x,view.y); ctx.scale(view.zoom,view.zoom);
    drawHall();
    ctx.restore();
  }

  function clampZoom(z) { return Math.max(0.35, Math.min(2.5, z)); }
  function zoomAt(clientX,clientY,factor) {
    const r=canvas.getBoundingClientRect();
    const sx=clientX-r.left, sy=clientY-r.top;
    const wx=(sx-view.x)/view.zoom, wy=(sy-view.y)/view.zoom;
    view.zoom=clampZoom(view.zoom*factor);
    view.x=sx-wx*view.zoom; view.y=sy-wy*view.zoom; draw();
  }

  canvas.addEventListener('wheel',e=>{ e.preventDefault(); zoomAt(e.clientX,e.clientY,e.deltaY<0?1.12:.89); },{passive:false});
  canvas.addEventListener('pointerdown',e=>{
    canvas.setPointerCapture(e.pointerId); pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===1) dragStart={px:e.clientX,py:e.clientY,vx:view.x,vy:view.y};
    if(pointers.size===2){ const p=[...pointers.values()]; pinchStart={d:Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),z:view.zoom}; }
  });
  canvas.addEventListener('pointermove',e=>{
    if(!pointers.has(e.pointerId))return; pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===1 && dragStart){ view.x=dragStart.vx+(e.clientX-dragStart.px); view.y=dragStart.vy+(e.clientY-dragStart.py); draw(); }
    if(pointers.size===2 && pinchStart){ const p=[...pointers.values()]; const d=Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y); view.zoom=clampZoom(pinchStart.z*d/pinchStart.d); draw(); }
  });
  function pointerEnd(e){ pointers.delete(e.pointerId); dragStart=null; pinchStart=null; }
  canvas.addEventListener('pointerup',pointerEnd); canvas.addEventListener('pointercancel',pointerEnd);
  canvas.addEventListener('dblclick',()=>{fitView();draw();});
  canvas.addEventListener('pointerup',e=>{ const now=Date.now(); if(now-lastTap<300){fitView();draw();} lastTap=now; });

  window.addEventListener('resize',resize,{passive:true});
  resize();
})();
