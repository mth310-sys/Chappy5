// Chappy5 hall visual prototype v0.1.4
// Portrait hall, vertical islands. Wall facilities are subdued; gaming floor is the visual focus.
(() => {
'use strict';
const canvas=document.getElementById('hall'),ctx=canvas.getContext('2d');
const WORLD={w:820,h:1280},view={x:0,y:0,zoom:1},pointers=new Map();let dragStart=null,pinchStart=null,lastTap=0,dpr=1;
const C={bg:'#071018',wall:'#353a3b',wallHi:'#5c6261',floor:'#b9a27c',tile:'#aa916b',aisle:'#c7b48f',island:'#49362f',islandTop:'#73503d',machine:'#181d20',edge:'#090c0d',red:'#9d322b',screen:'#315d6d',reel:'#ddd4b9',chair:'#702621',chairBase:'#343638',empty:'#4c504e',counter:'#725438',prize:'#6c713e',changer:'#65727a',text:'#efe5cc',label:'#1b2429',plant:'#3f6737',door:'#41494c'};
const size=()=>{const r=canvas.getBoundingClientRect();return{width:r.width,height:r.height,left:r.left,top:r.top}};
function resize(){const r=size();dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));fitView();draw()}
function fitView(){const r=size(),z=Math.min(r.width/WORLD.w,r.height/WORLD.h)*.96;view.zoom=z;view.x=Math.round((r.width-WORLD.w*z)/2);view.y=Math.round((r.height-WORLD.h*z)/2)}
function rect(x,y,w,h,f,s=null,l=1){ctx.fillStyle=f;ctx.fillRect(x,y,w,h);if(s){ctx.strokeStyle=s;ctx.lineWidth=l;ctx.strokeRect(x+.5,y+.5,w-1,h-1)}}
function text(t,x,y,sz=10,c=C.text){ctx.fillStyle=c;ctx.font=`bold ${sz}px monospace`;ctx.fillText(t,x,y)}
function floor(x,y,w,h){rect(x,y,w,h,C.floor);ctx.strokeStyle=C.tile;ctx.lineWidth=.8;for(let xx=x;xx<=x+w;xx+=24){ctx.beginPath();ctx.moveTo(xx,y);ctx.lineTo(xx,y+h);ctx.stroke()}for(let yy=y;yy<=y+h;yy+=24){ctx.beginPath();ctx.moveTo(x,yy);ctx.lineTo(x+w,yy);ctx.stroke()} // worn patches
 ctx.globalAlpha=.12;for(const p of [[250,355,85,18],[535,470,110,16],[270,875,90,18],[545,970,105,16]])rect(p[0],p[1],p[2],p[3],'#6e604d');ctx.globalAlpha=1}
function plant(x,y){rect(x+5,y+13,9,7,'#60462f');rect(x+4,y+5,11,9,C.plant);rect(x,y+8,7,5,'#365a31')}
function machineV(x,y,on=true,side='right'){if(!on){rect(x,y,19,24,C.empty,'#383d3c');rect(x+4,y+4,11,16,'#414644');return}rect(x,y,21,24,C.machine,C.edge,2);const sx=side==='right'?x+3:x+7;rect(sx,y+1,11,22,'#262b2c');rect(sx,y+2,11,4,C.red);rect(sx+2,y+7,7,6,C.screen);rect(sx+1,y+14,9,6,'#c9c0a8');rect(sx+2,y+15,2,3,'#b4453d');rect(sx+5,y+15,2,3,'#d1ad45');rect(sx+8,y+15,1,3,'#58834b');rect(sx+2,y+21,7,2,'#9b6b37')}
function chairV(x,y,side){const cx=side==='left'?x-10:x+1;rect(cx,y+5,8,14,C.chair,'#4d1715');rect(side==='left'?cx+8:cx-5,y+9,5,6,C.chairBase)}
function islandV(x,y,count,index){const rows=9,sh=28,h=264;rect(x,y,60,h,C.island,C.edge,2);rect(x+27,y+3,6,h-6,C.islandTop);const occ=new Set(),order=[0,9,1,10,2,11,3,12,4,13,5,14,6,15,7,16,8,17];for(let i=0;i<count;i++)occ.add(order[i]);for(let r=0;r<rows;r++){const yy=y+8+r*sh;machineV(x+4,yy,occ.has(r),'left');chairV(x+4,yy,'left');machineV(x+35,yy,occ.has(r+9),'right');chairV(x+56,yy,'right')} // subtle island-end number/data lamp
 rect(x+20,y-10,20,10,'#272d2f','#111');text(String(index+1),x+26,y-2,7,'#d7b16b')}
function wallDoor(x,y,h,t){rect(x,y,10,h,C.door,'#272c2e');rect(x+2,y+3,6,h-6,'#596164');text(t,x+14,y+h/2+4,9,'#3e4648')}
function wallBench(x,y){rect(x,y,15,70,'#765c40','#40382f');for(let yy=y+8;yy<y+65;yy+=18)rect(x+3,yy,9,12,'#987650')}
function changer(x,y,n){rect(x,y,24,30,C.changer,'#30383e',2);rect(x+4,y+4,16,7,'#a8c2c8');rect(x+7,y+15,10,3,'#1e2529');text(String(n),x+9,y+27,7)}
function counter(x,y){rect(x,y,145,42,C.counter,'#3e3227',2);rect(x+8,y+7,129,8,'#a48256');rect(x+10,y+20,125,14,'#5d432e');text('COUNTER',x+48,y+34,8,'#d9c59a')}
function prizeShelf(x,y){rect(x,y,145,28,C.prize,'#44482d');for(let xx=x+8;xx<x+138;xx+=16)rect(xx,y+7,9,8,'#c5a95d');for(let xx=x+8;xx<x+138;xx+=16)rect(xx,y+17,9,7,'#789272')}
function drawHall(){rect(0,0,WORLD.w,WORLD.h,C.bg);rect(45,35,730,1210,C.wallHi,'#232829',4);floor(61,51,698,1178);
 // Wall-side facilities are intentionally shallow visual fixtures, not large rooms.
 wallBench(67,120);text('休憩',84,150,9,'#4a4439');wallDoor(67,315,66,'WC');wallDoor(67,445,66,'喫煙');wallDoor(67,940,62,'倉庫');wallDoor(67,1050,78,'事務所');
 // Small wall details improve the sense of an older operating hall.
 rect(69,235,7,34,'#68604e');text('消火器',82,254,7,'#6b5c49');rect(69,555,8,44,'#535b5c');text('掲示',82,578,7,'#655b49');
 // Main cross aisle. Gaming islands remain dominant.
 rect(205,600,535,78,C.aisle);rect(428,185,82,900,C.aisle);
 const installed=[11,11,11,11,11,11,11,11,11,11,10,10],leftXs=[225,295,365],rightXs=[535,605,675],topY=270,bottomY=735;let k=0;
 for(const x of leftXs)islandV(x,topY,installed[k],k++);for(const x of rightXs)islandV(x,topY,installed[k],k++);for(const x of leftXs)islandV(x,bottomY,installed[k],k++);for(const x of rightXs)islandV(x,bottomY,installed[k],k++);
 // Customer-service fixtures hug the upper/right wall rather than reading as separate rooms.
 counter(590,70);prizeShelf(590,116);text('景品',555,133,8,'#5a5a3d');
 // Four island-end changers.
 changer(394,545,1);changer(516,545,2);changer(394,805,3);changer(516,805,4);
 // Entrance and subtle threshold/mat.
 rect(434,1210,64,35,'#34484f','#152126',2);rect(407,1197,118,13,'#6b5b47');text('入口',502,1225,9,'#424849');
 [[205,205],[730,205],[205,1165],[725,1165]].forEach(p=>plant(...p));
 // aged wall/floor accents
 rect(61,51,698,8,'#6e6655');rect(61,1221,365,8,'#756451');rect(508,1221,251,8,'#756451');
}
function draw(){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);ctx.setTransform(dpr*view.zoom,0,0,dpr*view.zoom,dpr*view.x,dpr*view.y);ctx.imageSmoothingEnabled=false;drawHall()}
function clampZoom(z){const fit=Math.min(canvas.clientWidth/WORLD.w,canvas.clientHeight/WORLD.h)*.96;return Math.max(fit*.85,Math.min(2.5,z))}
function beginPinch(){const r=size(),p=[...pointers.values()];if(p.length!==2)return;const mx=(p[0].x+p[1].x)/2-r.left,my=(p[0].y+p[1].y)/2-r.top;pinchStart={d:Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),zoom:view.zoom,worldX:(mx-view.x)/view.zoom,worldY:(my-view.y)/view.zoom};dragStart=null}
canvas.addEventListener('wheel',e=>{e.preventDefault();const r=size(),sx=e.clientX-r.left,sy=e.clientY-r.top,wx=(sx-view.x)/view.zoom,wy=(sy-view.y)/view.zoom;view.zoom=clampZoom(view.zoom*(e.deltaY<0?1.12:.89));view.x=sx-wx*view.zoom;view.y=sy-wy*view.zoom;draw()},{passive:false});
canvas.addEventListener('pointerdown',e=>{e.preventDefault();canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1){dragStart={px:e.clientX,py:e.clientY,vx:view.x,vy:view.y};pinchStart=null}else if(pointers.size===2)beginPinch()});
canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;e.preventDefault();pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1&&dragStart){view.x=dragStart.vx+e.clientX-dragStart.px;view.y=dragStart.vy+e.clientY-dragStart.py;draw();return}if(pointers.size===2&&pinchStart){const r=size(),p=[...pointers.values()],d=Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),mx=(p[0].x+p[1].x)/2-r.left,my=(p[0].y+p[1].y)/2-r.top;view.zoom=clampZoom(pinchStart.zoom*d/Math.max(1,pinchStart.d));view.x=mx-pinchStart.worldX*view.zoom;view.y=my-pinchStart.worldY*view.zoom;draw()}},{passive:false});
function end(e){pointers.delete(e.pointerId);if(pointers.size===1){const p=[...pointers.values()][0];dragStart={px:p.x,py:p.y,vx:view.x,vy:view.y};pinchStart=null}else{dragStart=null;pinchStart=null}}
canvas.addEventListener('pointerup',e=>{end(e);const n=Date.now();if(n-lastTap<300){fitView();draw()}lastTap=n});canvas.addEventListener('pointercancel',end);canvas.addEventListener('dblclick',()=>{fitView();draw()});canvas.addEventListener('contextmenu',e=>e.preventDefault());window.addEventListener('resize',resize,{passive:true});window.addEventListener('orientationchange',()=>setTimeout(resize,80),{passive:true});resize();
})();