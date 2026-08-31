// Chappy5 hall shell v0.2
// Blank portrait hall foundation: floor, perimeter walls, and bottom entrance only.
(() => {
'use strict';
const canvas=document.getElementById('hall');
const ctx=canvas.getContext('2d');
const WORLD={w:820,h:1280};
const view={x:0,y:0,zoom:1};
const pointers=new Map();
let dragStart=null,pinchStart=null,lastTap=0,dpr=1;

const C={
  void:'#071018',
  outerWall:'#303638',
  wallTop:'#565d5e',
  wallInner:'#727778',
  baseboard:'#4d4a43',
  floorBase:'#9c8b72',
  floorTileA:'#a99678',
  floorTileB:'#a28f71',
  grout:'#8b7a63',
  wear:'#706553',
  entranceFrame:'#31393d',
  glass:'#526d76',
  mat:'#5e5548',
  threshold:'#84745d'
};

const size=()=>{const r=canvas.getBoundingClientRect();return{width:r.width,height:r.height,left:r.left,top:r.top}};

function resize(){
  const r=size();
  dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=Math.max(1,Math.round(r.width*dpr));
  canvas.height=Math.max(1,Math.round(r.height*dpr));
  fitView();
  draw();
}

function fitView(){
  const r=size();
  const z=Math.min(r.width/WORLD.w,r.height/WORLD.h)*0.96;
  view.zoom=z;
  view.x=Math.round((r.width-WORLD.w*z)/2);
  view.y=Math.round((r.height-WORLD.h*z)/2);
}

function rect(x,y,w,h,fill,stroke=null,lw=1){
  ctx.fillStyle=fill;ctx.fillRect(x,y,w,h);
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.strokeRect(x+.5,y+.5,w-1,h-1);}
}

function drawFloor(x,y,w,h){
  rect(x,y,w,h,C.floorBase);
  const tile=32;
  for(let row=0,yy=y;yy<y+h;row++,yy+=tile){
    for(let col=0,xx=x;xx<x+w;col++,xx+=tile){
      const tw=Math.min(tile,x+w-xx),th=Math.min(tile,y+h-yy);
      rect(xx,yy,tw,th,(row+col)%2?C.floorTileA:C.floorTileB);
    }
  }
  ctx.strokeStyle=C.grout;ctx.lineWidth=1;
  for(let xx=x;xx<=x+w;xx+=tile){ctx.beginPath();ctx.moveTo(xx,y);ctx.lineTo(xx,y+h);ctx.stroke();}
  for(let yy=y;yy<=y+h;yy+=tile){ctx.beginPath();ctx.moveTo(x,yy);ctx.lineTo(x+w,yy);ctx.stroke();}

  // Subtle accumulated wear: this is an operating older hall, not a ruin.
  ctx.globalAlpha=.10;
  [[200,335,190,20],[440,510,170,18],[260,725,210,18],[405,930,190,22],[300,1100,230,15]].forEach(p=>rect(...p,C.wear));
  ctx.globalAlpha=1;
}

function drawWallShell(){
  // Thick exterior shell with a slight inner lip to give the room physical depth.
  rect(45,35,730,1210,C.outerWall,'#1c2224',4);
  rect(55,45,710,1190,C.wallTop);
  rect(65,55,690,1170,C.wallInner);

  // Floor sits inside the wall shell. Bottom centre is intentionally open for the entrance.
  drawFloor(76,66,668,1144);

  // Inner baseboard around three closed sides and split at the entrance on the bottom.
  rect(76,66,668,8,C.baseboard);
  rect(76,66,8,1144,C.baseboard);
  rect(736,66,8,1144,C.baseboard);
  rect(76,1202,268,8,C.baseboard);
  rect(476,1202,268,8,C.baseboard);
}

function drawEntrance(){
  const x=344,y=1200,w=132,h=45;
  // Cut/opening in the lower wall and a simple older aluminium/glass automatic-door look.
  rect(x,y,w,h,C.void);
  rect(x-5,y-3,w+10,8,C.threshold);
  rect(x,y,10,h,C.entranceFrame);
  rect(x+w-10,y,10,h,C.entranceFrame);
  rect(x+10,y,52,h-5,C.glass,'#26363c');
  rect(x+70,y,52,h-5,C.glass,'#26363c');
  rect(x+64,y,4,h-5,'#222b2e');
  rect(x+18,y+8,36,2,'#81969b');
  rect(x+78,y+8,36,2,'#81969b');
  // Interior entrance mat, intentionally understated.
  rect(x+12,y-28,w-24,22,C.mat,'#494238');
}

function drawHall(){
  rect(0,0,WORLD.w,WORLD.h,C.void);
  drawWallShell();
  drawEntrance();
}

function draw(){
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.setTransform(dpr*view.zoom,0,0,dpr*view.zoom,dpr*view.x,dpr*view.y);
  ctx.imageSmoothingEnabled=false;
  drawHall();
}

function clampZoom(z){
  const fit=Math.min(canvas.clientWidth/WORLD.w,canvas.clientHeight/WORLD.h)*.96;
  return Math.max(fit*.85,Math.min(2.5,z));
}

function beginPinch(){
  const r=size(),p=[...pointers.values()];if(p.length!==2)return;
  const mx=(p[0].x+p[1].x)/2-r.left,my=(p[0].y+p[1].y)/2-r.top;
  pinchStart={d:Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),zoom:view.zoom,worldX:(mx-view.x)/view.zoom,worldY:(my-view.y)/view.zoom};
  dragStart=null;
}

canvas.addEventListener('wheel',e=>{
  e.preventDefault();const r=size(),sx=e.clientX-r.left,sy=e.clientY-r.top;
  const wx=(sx-view.x)/view.zoom,wy=(sy-view.y)/view.zoom;
  view.zoom=clampZoom(view.zoom*(e.deltaY<0?1.12:.89));
  view.x=sx-wx*view.zoom;view.y=sy-wy*view.zoom;draw();
},{passive:false});

canvas.addEventListener('pointerdown',e=>{
  e.preventDefault();canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1){dragStart={px:e.clientX,py:e.clientY,vx:view.x,vy:view.y};pinchStart=null;}
  else if(pointers.size===2)beginPinch();
});

canvas.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId))return;e.preventDefault();pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1&&dragStart){view.x=dragStart.vx+e.clientX-dragStart.px;view.y=dragStart.vy+e.clientY-dragStart.py;draw();return;}
  if(pointers.size===2&&pinchStart){
    const r=size(),p=[...pointers.values()],d=Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y);
    const mx=(p[0].x+p[1].x)/2-r.left,my=(p[0].y+p[1].y)/2-r.top;
    view.zoom=clampZoom(pinchStart.zoom*d/Math.max(1,pinchStart.d));
    view.x=mx-pinchStart.worldX*view.zoom;view.y=my-pinchStart.worldY*view.zoom;draw();
  }
},{passive:false});

function end(e){
  pointers.delete(e.pointerId);
  if(pointers.size===1){const p=[...pointers.values()][0];dragStart={px:p.x,py:p.y,vx:view.x,vy:view.y};pinchStart=null;}
  else{dragStart=null;pinchStart=null;}
}

canvas.addEventListener('pointerup',e=>{end(e);const now=Date.now();if(now-lastTap<300){fitView();draw();}lastTap=now;});
canvas.addEventListener('pointercancel',end);
canvas.addEventListener('dblclick',()=>{fitView();draw();});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
window.addEventListener('resize',resize,{passive:true});
window.addEventListener('orientationchange',()=>setTimeout(resize,80),{passive:true});
resize();
})();