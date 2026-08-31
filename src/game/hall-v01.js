// Chappy5 hall visual prototype v0.1.3
// Portrait world with the INTERIOR layout rotated 90 degrees: islands now run vertically.
(() => {
'use strict';
const canvas=document.getElementById('hall'),ctx=canvas.getContext('2d');
const WORLD={w:820,h:1280},view={x:0,y:0,zoom:1},pointers=new Map();let dragStart=null,pinchStart=null,lastTap=0,dpr=1;
const C={bg:'#071018',wall:'#3f4547',wallHi:'#696f70',floor:'#c7ad83',tile:'#b89d73',aisle:'#d5c29e',island:'#5a3b2f',islandTop:'#8b5b42',machine:'#20262a',machineEdge:'#0e1113',bezel:'#c84535',screen:'#2a5f79',reel:'#e8e1c7',chair:'#8f2d29',chairBase:'#3b3f41',empty:'#5e6362',rest:'#907048',toilet:'#6b8390',smoke:'#65705d',office:'#59646e',storage:'#765f48',counter:'#8b623d',prize:'#7b8240',changer:'#707d89',text:'#f4ecd8',label:'#18232d',plant:'#456f3a'};
const size=()=>{const r=canvas.getBoundingClientRect();return{width:r.width,height:r.height,left:r.left,top:r.top}};
function resize(){const r=size();dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));fitView();draw()}
function fitView(){const r=size(),z=Math.min(r.width/WORLD.w,r.height/WORLD.h)*.96;view.zoom=z;view.x=Math.round((r.width-WORLD.w*z)/2);view.y=Math.round((r.height-WORLD.h*z)/2)}
function rect(x,y,w,h,f,s=null,l=1){ctx.fillStyle=f;ctx.fillRect(x,y,w,h);if(s){ctx.strokeStyle=s;ctx.lineWidth=l;ctx.strokeRect(x+.5,y+.5,w-1,h-1)}}
function label(t,x,y,w){ctx.font='bold 12px monospace';const p=4,tw=Math.min(w||999,ctx.measureText(t).width+p*2);rect(x,y,tw,20,C.label,'#334453');ctx.fillStyle=C.text;ctx.fillText(t,x+p,y+14)}
function floor(x,y,w,h){rect(x,y,w,h,C.floor);ctx.strokeStyle=C.tile;for(let xx=x;xx<=x+w;xx+=24){ctx.beginPath();ctx.moveTo(xx,y);ctx.lineTo(xx,y+h);ctx.stroke()}for(let yy=y;yy<=y+h;yy+=24){ctx.beginPath();ctx.moveTo(x,yy);ctx.lineTo(x+w,yy);ctx.stroke()}}
function plant(x,y){rect(x+5,y+13,10,8,'#6a4a31');rect(x+4,y+5,12,10,C.plant);rect(x,y+8,8,6,'#3c6332');rect(x+11,y,7,9,'#527c44')}
function machineV(x,y,on=true,side='right'){if(!on){rect(x,y,18,24,C.empty,'#444a4a');rect(x+4,y+4,10,16,'#4b5050');return}rect(x,y,21,24,C.machine,C.machineEdge,2);const sx=side==='right'?x+3:x+7;rect(sx,y+2,11,20,C.bezel);rect(sx+2,y+4,7,7,C.screen);rect(sx+2,y+12,7,7,C.reel);rect(sx+3,y+13,2,2,'#d8b94b');rect(sx+6,y+13,2,2,'#5c8d4c')}
function chairV(x,y,side){const cx=side==='left'?x-11:x+1;rect(cx,y+5,8,14,C.chair,'#541817');rect(side==='left'?cx+8:cx-5,y+9,5,6,C.chairBase)}
function islandV(x,y,count,index){const rows=9,sh=28,h=rows*sh+12;rect(x,y,60,h,C.island,C.machineEdge,2);rect(x+27,y+3,6,h-6,C.islandTop);const occ=new Set(),order=[0,9,1,10,2,11,3,12,4,13,5,14,6,15,7,16,8,17];for(let i=0;i<count;i++)occ.add(order[i]);for(let r=0;r<rows;r++){const yy=y+8+r*sh;machineV(x+4,yy,occ.has(r),'left');chairV(x+4,yy,'left');machineV(x+35,yy,occ.has(r+9),'right');chairV(x+56,yy,'right')}ctx.save();ctx.translate(x+31,y+6);ctx.rotate(Math.PI/2);ctx.fillStyle='#d7b16b';ctx.font='bold 10px monospace';ctx.fillText(`島${String(index+1).padStart(2,'0')}`,0,0);ctx.restore()}
function room(x,y,w,h,t,c){rect(x,y,w,h,c,'#31383b',2);label(t,x+6,y+6,w-12)}
function changer(x,y,n){rect(x,y,32,24,C.changer,'#30383e',2);rect(x+4,y+4,7,16,'#b7d6de');rect(x+15,y+7,3,10,'#1e2529');ctx.fillStyle=C.text;ctx.font='bold 9px monospace';ctx.fillText(`両${n}`,20,y+15)}
function prizes(x,y,w,h){room(x,y,w,h,'景品',C.prize);for(let yy=y+32;yy<y+h-8;yy+=18)for(let xx=x+8;xx<x+w-8;xx+=18)rect(xx,yy,12,10,['#d5b35d','#c66a58','#6b9e84'][(xx+yy)%3])}
function drawHall(){rect(0,0,WORLD.w,WORLD.h,C.bg);rect(45,35,730,1210,C.wallHi,'#242a2d',4);floor(61,51,698,1178);
 // Layout is now rotated 90° relative to the previous version: facilities run down the left wall and the 12 islands run vertically.
 room(78,105,120,175,'休憩所',C.rest);room(78,310,120,180,'トイレ',C.toilet);room(78,520,120,170,'喫煙所',C.smoke);
 for(let i=0;i<3;i++)rect(105,150+i*38,62,22,'#a47f53');for(let i=0;i<3;i++)rect(105,355+i*42,62,28,'#8ea2aa');rect(105,565,62,88,'#737d69');
 // Central cross circulation retained, but relative to the rotated interior.
 rect(210,600,520,80,C.aisle);rect(430,190,80,870,C.aisle);
 const installed=[11,11,11,11,11,11,11,11,11,11,10,10];
 // Three vertical islands in each quadrant/block.
 const leftXs=[230,300,370],rightXs=[535,605,675],topY=255,bottomY=730;let k=0;
 for(const x of leftXs)islandV(x,topY,installed[k],k++);for(const x of rightXs)islandV(x,topY,installed[k],k++);for(const x of leftXs)islandV(x,bottomY,installed[k],k++);for(const x of rightXs)islandV(x,bottomY,installed[k],k++);
 // Rotated counterpart of entrance/counter relationship: entrance lower-centre, counter upper-centre/right.
 rect(438,1210,56,35,'#354d58','#0e171c',2);label('入口',500,1215,55);
 room(555,70,175,105,'カウンター',C.counter);rect(585,120,115,14,'#d6b97f');prizes(555,185,175,100);
 room(78,910,120,105,'倉庫',C.storage);room(78,1030,120,150,'事務所',C.office);
 changer(390,500,1);changer(520,500,2);changer(390,790,3);changer(520,790,4);
 [[215,205],[715,205],[215,1165],[710,1165],[205,700]].forEach(p=>plant(...p));
 label('左上',230,220,55);label('右上',535,220,55);label('左下',230,1080,55);label('右下',535,1080,55);rect(61,1215,365,14,'#7c6650');rect(510,1215,249,14,'#7c6650')}
function draw(){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);ctx.setTransform(dpr*view.zoom,0,0,dpr*view.zoom,dpr*view.x,dpr*view.y);ctx.imageSmoothingEnabled=false;drawHall()}
function clampZoom(z){const fit=Math.min(canvas.clientWidth/WORLD.w,canvas.clientHeight/WORLD.h)*.96;return Math.max(fit*.85,Math.min(2.5,z))}
function beginPinch(){const r=size(),p=[...pointers.values()];if(p.length!==2)return;const mx=(p[0].x+p[1].x)/2-r.left,my=(p[0].y+p[1].y)/2-r.top;pinchStart={d:Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),zoom:view.zoom,worldX:(mx-view.x)/view.zoom,worldY:(my-view.y)/view.zoom};dragStart=null}
canvas.addEventListener('wheel',e=>{e.preventDefault();const r=size(),sx=e.clientX-r.left,sy=e.clientY-r.top,wx=(sx-view.x)/view.zoom,wy=(sy-view.y)/view.zoom;view.zoom=clampZoom(view.zoom*(e.deltaY<0?1.12:.89));view.x=sx-wx*view.zoom;view.y=sy-wy*view.zoom;draw()},{passive:false});
canvas.addEventListener('pointerdown',e=>{e.preventDefault();canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1){dragStart={px:e.clientX,py:e.clientY,vx:view.x,vy:view.y};pinchStart=null}else if(pointers.size===2)beginPinch()});
canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;e.preventDefault();pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1&&dragStart){view.x=dragStart.vx+e.clientX-dragStart.px;view.y=dragStart.vy+e.clientY-dragStart.py;draw();return}if(pointers.size===2&&pinchStart){const r=size(),p=[...pointers.values()],d=Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),mx=(p[0].x+p[1].x)/2-r.left,my=(p[0].y+p[1].y)/2-r.top;view.zoom=clampZoom(pinchStart.zoom*d/Math.max(1,pinchStart.d));view.x=mx-pinchStart.worldX*view.zoom;view.y=my-pinchStart.worldY*view.zoom;draw()}},{passive:false});
function end(e){pointers.delete(e.pointerId);if(pointers.size===1){const p=[...pointers.values()][0];dragStart={px:p.x,py:p.y,vx:view.x,vy:view.y};pinchStart=null}else{dragStart=null;pinchStart=null}}
canvas.addEventListener('pointerup',e=>{end(e);const n=Date.now();if(n-lastTap<300){fitView();draw()}lastTap=n});canvas.addEventListener('pointercancel',end);canvas.addEventListener('dblclick',()=>{fitView();draw()});canvas.addEventListener('contextmenu',e=>e.preventDefault());window.addEventListener('resize',resize,{passive:true});window.addEventListener('orientationchange',()=>setTimeout(resize,80),{passive:true});resize();
})();