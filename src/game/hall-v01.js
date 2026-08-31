// Chappy5 hall visual prototype v0.1.2
// Portrait hall layout. Pure Canvas, dependency-free, iPhone-friendly. Customer AI is intentionally not connected yet.
(() => {
  'use strict';
  const canvas=document.getElementById('hall'),ctx=canvas.getContext('2d');
  const WORLD={w:820,h:1280};
  const view={x:0,y:0,zoom:1}; const pointers=new Map();
  let dragStart=null,pinchStart=null,lastTap=0,dpr=1;
  const C={bg:'#071018',wall:'#3f4547',wallHi:'#696f70',floor:'#c7ad83',tile:'#b89d73',aisle:'#d5c29e',island:'#5a3b2f',islandTop:'#8b5b42',machine:'#20262a',machineEdge:'#0e1113',bezel:'#c84535',screen:'#2a5f79',reel:'#e8e1c7',chair:'#8f2d29',chairBase:'#3b3f41',empty:'#5e6362',rest:'#907048',toilet:'#6b8390',smoke:'#65705d',office:'#59646e',storage:'#765f48',counter:'#8b623d',prize:'#7b8240',changer:'#707d89',text:'#f4ecd8',label:'#18232d',plant:'#456f3a'};
  const size=()=>{const r=canvas.getBoundingClientRect();return{width:r.width,height:r.height,left:r.left,top:r.top}};
  function resize(){const r=size();dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));fitView();draw()}
  function fitView(){const r=size(),z=Math.min(r.width/WORLD.w,r.height/WORLD.h)*.96;view.zoom=z;view.x=Math.round((r.width-WORLD.w*z)/2);view.y=Math.round((r.height-WORLD.h*z)/2)}
  function rect(x,y,w,h,f,s=null,l=1){ctx.fillStyle=f;ctx.fillRect(x,y,w,h);if(s){ctx.strokeStyle=s;ctx.lineWidth=l;ctx.strokeRect(x+.5,y+.5,w-1,h-1)}}
  function label(t,x,y,w){ctx.font='bold 12px monospace';const p=4,tw=Math.min(w||999,ctx.measureText(t).width+p*2);rect(x,y,tw,20,C.label,'#334453');ctx.fillStyle=C.text;ctx.fillText(t,x+p,y+14)}
  function floor(x,y,w,h){rect(x,y,w,h,C.floor);ctx.strokeStyle=C.tile;ctx.lineWidth=1;for(let xx=x;xx<=x+w;xx+=24){ctx.beginPath();ctx.moveTo(xx,y);ctx.lineTo(xx,y+h);ctx.stroke()}for(let yy=y;yy<=y+h;yy+=24){ctx.beginPath();ctx.moveTo(x,yy);ctx.lineTo(x+w,yy);ctx.stroke()}}
  function plant(x,y){rect(x+5,y+13,10,8,'#6a4a31');rect(x+4,y+5,12,10,C.plant);rect(x,y+8,8,6,'#3c6332');rect(x+11,y,7,9,'#527c44')}
  function machine(x,y,on=true){if(!on){rect(x,y,24,18,C.empty,'#444a4a');rect(x+4,y+4,16,10,'#4b5050');return}rect(x,y,24,21,C.machine,C.machineEdge,2);rect(x+2,y+2,20,4,C.bezel);rect(x+4,y+7,16,5,C.screen);rect(x+4,y+13,16,5,C.reel);rect(x+6,y+14,3,3,'#c7443b');rect(x+11,y+14,3,3,'#d8b94b');rect(x+16,y+14,3,3,'#5c8d4c');rect(x+2,y+19,20,2,'#ad7135')}
  function chair(x,y){rect(x+5,y,14,8,C.chair,'#541817');rect(x+9,y+8,6,5,C.chairBase)}
  function island(x,y,count,index){const cols=9,sw=28,w=cols*sw+12;rect(x,y,w,60,C.island,C.machineEdge,2);rect(x+3,y+27,w-6,6,C.islandTop);const occ=new Set(),order=[0,9,1,10,2,11,3,12,4,13,5,14,6,15,7,16,8,17];for(let i=0;i<count;i++)occ.add(order[i]);for(let c=0;c<cols;c++){const xx=x+8+c*sw;machine(xx,y+4,occ.has(c));chair(xx,y-8);machine(xx,y+35,occ.has(c+9));chair(xx,y+57)}ctx.fillStyle='#d7b16b';ctx.font='bold 10px monospace';ctx.fillText(`島${String(index+1).padStart(2,'0')}`,x+5,y+31)}
  function room(x,y,w,h,t,c){rect(x,y,w,h,c,'#31383b',2);label(t,x+6,y+6,w-12)}
  function changer(x,y,n){rect(x,y,24,32,C.changer,'#30383e',2);rect(x+4,y+4,16,7,'#b7d6de');rect(x+7,y+15,10,3,'#1e2529');ctx.fillStyle=C.text;ctx.font='bold 9px monospace';ctx.fillText(`両${n}`,x+3,y+29)}
  function prizes(x,y,w,h){room(x,y,w,h,'景品コーナー',C.prize);for(let yy=y+32;yy<y+h-8;yy+=18)for(let xx=x+8;xx<x+w-8;xx+=18)rect(xx,yy,12,10,['#d5b35d','#c66a58','#6b9e84'][(xx+yy)%3])}
  function drawHall(){rect(0,0,WORLD.w,WORLD.h,C.bg);rect(45,35,730,1210,C.wallHi,'#242a2d',4);floor(61,51,698,1178);
    // Top facilities stay on the upper wall of the portrait hall.
    room(90,68,180,95,'休憩所',C.rest);room(320,68,180,95,'トイレ',C.toilet);room(550,68,180,95,'喫煙所',C.smoke);
    for(let i=0;i<3;i++)rect(110+i*48,112,34,22,'#a47f53');for(let i=0;i<3;i++)rect(340+i*52,110,35,38,'#8ea2aa');rect(570,108,130,35,'#737d69');
    // Portrait version of the approved four-block skeleton: long vertical hall, central cross circulation.
    rect(370,185,80,875,C.aisle);rect(75,600,670,90,C.aisle);
    const installed=[11,11,11,11,11,11,11,11,11,11,10,10];
    // Islands remain horizontal: three stacked islands in each of four blocks.
    const lx=92,rx=462,top=[235,330,425],bottom=[745,840,935];let k=0;
    for(const y of top)island(lx,y,installed[k],k++);for(const y of top)island(rx,y,installed[k],k++);for(const y of bottom)island(lx,y,installed[k],k++);for(const y of bottom)island(rx,y,installed[k],k++);
    // Left-centre entrance and right-centre customer counter remain as previously decided.
    rect(47,617,35,56,'#354d58','#0e171c',2);label('入口',84,634,55);
    room(615,545,125,100,'カウンター',C.counter);rect(632,590,92,14,'#d6b97f');
    prizes(590,700,150,105);room(585,1080,72,120,'倉庫',C.storage);room(665,1080,75,120,'事務所',C.office);
    changer(338,380,1);changer(458,380,2);changer(338,885,3);changer(458,885,4);
    [[75,195],[730,195],[75,1165],[535,1160],[315,185]].forEach(p=>plant(...p));
    label('上左',92,202,60);label('上右',462,202,60);label('下左',92,712,60);label('下右',462,712,60);rect(61,1215,698,14,'#7c6650')}
  function draw(){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);ctx.setTransform(dpr*view.zoom,0,0,dpr*view.zoom,dpr*view.x,dpr*view.y);ctx.imageSmoothingEnabled=false;drawHall()}
  function clampZoom(z){const fit=Math.min(canvas.clientWidth/WORLD.w,canvas.clientHeight/WORLD.h)*.96;return Math.max(fit*.85,Math.min(2.5,z))}
  function beginPinch(){const r=size(),p=[...pointers.values()];if(p.length!==2)return;const mx=(p[0].x+p[1].x)/2-r.left,my=(p[0].y+p[1].y)/2-r.top;pinchStart={d:Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),zoom:view.zoom,worldX:(mx-view.x)/view.zoom,worldY:(my-view.y)/view.zoom};dragStart=null}
  canvas.addEventListener('wheel',e=>{e.preventDefault();const r=size(),sx=e.clientX-r.left,sy=e.clientY-r.top,wx=(sx-view.x)/view.zoom,wy=(sy-view.y)/view.zoom;view.zoom=clampZoom(view.zoom*(e.deltaY<0?1.12:.89));view.x=sx-wx*view.zoom;view.y=sy-wy*view.zoom;draw()},{passive:false});
  canvas.addEventListener('pointerdown',e=>{e.preventDefault();canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1){dragStart={px:e.clientX,py:e.clientY,vx:view.x,vy:view.y};pinchStart=null}else if(pointers.size===2)beginPinch()});
  canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;e.preventDefault();pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1&&dragStart){view.x=dragStart.vx+e.clientX-dragStart.px;view.y=dragStart.vy+e.clientY-dragStart.py;draw();return}if(pointers.size===2&&pinchStart){const r=size(),p=[...pointers.values()],d=Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),mx=(p[0].x+p[1].x)/2-r.left,my=(p[0].y+p[1].y)/2-r.top;view.zoom=clampZoom(pinchStart.zoom*d/Math.max(1,pinchStart.d));view.x=mx-pinchStart.worldX*view.zoom;view.y=my-pinchStart.worldY*view.zoom;draw()}},{passive:false});
  function end(e){pointers.delete(e.pointerId);if(pointers.size===1){const p=[...pointers.values()][0];dragStart={px:p.x,py:p.y,vx:view.x,vy:view.y};pinchStart=null}else{dragStart=null;pinchStart=null}}
  canvas.addEventListener('pointerup',e=>{end(e);const n=Date.now();if(n-lastTap<300){fitView();draw()}lastTap=n});canvas.addEventListener('pointercancel',end);canvas.addEventListener('dblclick',()=>{fitView();draw()});canvas.addEventListener('contextmenu',e=>e.preventDefault());window.addEventListener('resize',resize,{passive:true});window.addEventListener('orientationchange',()=>setTimeout(resize,80),{passive:true});resize();
})();