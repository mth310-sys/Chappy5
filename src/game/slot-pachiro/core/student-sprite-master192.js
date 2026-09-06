export const STUDENT_MASTER_SIZE=192;
export const STUDENT_MASTER_VERSION='student-master192-v1';
const cache=new Map();

const C={
  outline:'#181512',hairShadow:'#35251d',hair:'#573a2a',hairMid:'#73503a',hairLight:'#a77c5a',hairGlint:'#c39a76',
  skinDeep:'#bd7559',skinShadow:'#d99370',skin:'#f1bd94',skinLight:'#ffe0b6',eye:'#181513',mouth:'#9c5c54',
  jacketDeep:'#5f1f29',jacketShadow:'#7d2835',jacket:'#a23a48',jacketMid:'#bd4c59',jacketLight:'#d67580',
  shirt:'#f2efe8',shirtShadow:'#d7d3cb',pantsDeep:'#202c3a',pants:'#31455b',pantsLight:'#506b83',
  shoe:'#202124',shoeMid:'#4d5057',shoeLight:'#787c84',lace:'#eef1f4',shadow:'rgba(25,20,18,.18)'
};

function poly(ctx,pts,color){ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i][0],pts[i][1]);ctx.closePath();ctx.fill()}
function rect(ctx,x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))}
function ellipse(ctx,x,y,rx,ry,color){ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(Math.round(x),Math.round(y),Math.round(rx),Math.round(ry),0,0,Math.PI*2);ctx.fill()}

function drawLeg(ctx,x,y,front,phase){
  const stride=phase===1?18:phase===3?-16:0,dx=front?stride:-stride;
  const shade=front?C.pants:C.pantsDeep;
  poly(ctx,[[x-11,y],[x+10,y],[x+8+dx*.2,y+29],[x+dx,y+57],[x-10+dx,y+57],[x-7+dx*.2,y+28]],C.outline);
  poly(ctx,[[x-7,y+4],[x+6,y+4],[x+4+dx*.18,y+28],[x-3+dx,y+50],[x-7+dx,y+50]],shade);
  if(front)poly(ctx,[[x-6,y+5],[x-1,y+5],[x-3+dx*.12,y+25],[x-6+dx,y+43]],C.pantsLight);
  rect(ctx,x-11+dx,y+53,24,12,C.shoe);rect(ctx,x-6+dx,y+54,14,4,C.shoeMid);rect(ctx,x-3+dx,y+57,9,3,C.shoeLight);
  if(front){rect(ctx,x-4+dx,y+58,10,2,C.lace);rect(ctx,x-2+dx,y+61,7,2,C.lace)}
}

function drawArm(ctx,sx,sy,side,phase,dir,seated){
  const swing=seated?0:(phase===1?10:phase===3?-10:0)*(side==='L'?1:-1),sign=side==='L'?-1:1;
  const ex=sx+sign*21+swing*.35,ey=sy+28,hx=ex+sign*9+swing*.25,hy=ey+28;
  const dark=(dir==='SE'&&side==='R')||(dir==='SW'&&side==='L');
  poly(ctx,[[sx-8,sy],[sx+8,sy],[ex+7,ey],[hx+7,hy],[hx-7,hy+3],[ex-7,ey]],C.outline);
  poly(ctx,[[sx-5,sy+4],[sx+5,sy+4],[ex+4,ey],[hx+4,hy-4],[hx-4,hy-2],[ex-4,ey]],dark?C.jacketDeep:C.jacketMid);
  poly(ctx,[[sx-sign*3,sy+7],[ex-sign*1,ey-4],[ex+sign*3,ey+2],[sx+sign*4,sy+8]],dark?C.jacketShadow:C.jacketLight);
  ellipse(ctx,hx,hy+3,8,8,dark?C.skinShadow:C.skinLight);rect(ctx,hx-3,hy,6,4,C.skin)
}

function drawHead(ctx,dir,bob){
  const sw=dir==='SW',cx=96+(sw?-2:2),cy=63+bob;
  rect(ctx,86,88+bob,20,17,C.outline);rect(ctx,90,88+bob,14,17,C.skinShadow);
  ellipse(ctx,cx,cy,37,38,C.outline);ellipse(ctx,cx,cy+2,31,32,C.skin);
  ellipse(ctx,cx+(sw?-29:29),cy+7,8,12,C.skinShadow);ellipse(ctx,cx+(sw?-28:28),cy+5,4,7,C.skinLight);
  poly(ctx,sw?[[67,58+bob],[91,42+bob],[121,49+bob],[118,78+bob],[90,87+bob],[71,76+bob]]:[[125,58+bob],[101,42+bob],[71,49+bob],[74,78+bob],[102,87+bob],[121,76+bob]],C.skinLight);
  poly(ctx,sw?[[61,58+bob],[61,36+bob],[72,22+bob],[94,13+bob],[119,23+bob],[131,39+bob],[128,60+bob],[119,52+bob],[113,36+bob],[103,43+bob],[93,29+bob],[82,43+bob],[71,36+bob],[71,58+bob]]:[[131,58+bob],[131,36+bob],[120,22+bob],[98,13+bob],[73,23+bob],[61,39+bob],[64,60+bob],[73,52+bob],[79,36+bob],[89,43+bob],[99,29+bob],[110,43+bob],[121,36+bob],[121,58+bob]],C.outline);
  poly(ctx,sw?[[67,55+bob],[67,38+bob],[77,27+bob],[95,19+bob],[115,28+bob],[124,40+bob],[121,54+bob],[113,48+bob],[109,33+bob],[100,41+bob],[92,27+bob],[83,41+bob],[74,35+bob],[74,55+bob]]:[[125,55+bob],[125,38+bob],[115,27+bob],[97,19+bob],[77,28+bob],[68,40+bob],[71,54+bob],[79,48+bob],[83,33+bob],[92,41+bob],[100,27+bob],[109,41+bob],[118,35+bob],[118,55+bob]],C.hair);
  poly(ctx,sw?[[70,38+bob],[84,24+bob],[97,19+bob],[94,31+bob],[83,42+bob]]:[[122,38+bob],[108,24+bob],[95,19+bob],[98,31+bob],[109,42+bob]],C.hairLight);
  poly(ctx,sw?[[79,28+bob],[91,20+bob],[99,19+bob],[94,26+bob],[86,31+bob]]:[[113,28+bob],[101,20+bob],[93,19+bob],[98,26+bob],[106,31+bob]],C.hairGlint);
  rect(ctx,sw?70:112,45+bob,10,8,C.hairShadow);
  const near=sw?84:108,far=sw?108:84;rect(ctx,near,65+bob,6,6,C.eye);rect(ctx,far,63+bob,4,4,C.eye);
  rect(ctx,sw?77:109,73+bob,6,4,C.skinDeep);rect(ctx,sw?88:98,80+bob,10,3,C.mouth);
  rect(ctx,sw?80:106,57+bob,7,2,C.skinShadow);rect(ctx,sw?104:82,56+bob,5,2,C.skinShadow)
}

function drawTorso(ctx,dir,phase,seated,bob){
  const y=98+bob;
  poly(ctx,[[72,y],[120,y],[133,y+15],[126,y+55],[115,y+70],[77,y+70],[66,y+55],[59,y+15]],C.outline);
  poly(ctx,[[77,y+5],[115,y+5],[124,y+17],[118,y+53],[110,y+62],[82,y+62],[73,y+53],[68,y+17]],C.jacket);
  if(dir==='SE')poly(ctx,[[77,y+7],[92,y+7],[84,y+58],[74,y+50],[70,y+18]],C.jacketLight);else poly(ctx,[[115,y+7],[100,y+7],[108,y+58],[118,y+50],[122,y+18]],C.jacketLight);
  rect(ctx,86,y+6,20,30,C.shirt);rect(ctx,91,y+7,5,28,'#fff');rect(ctx,98,y+8,5,26,C.shirtShadow);
  rect(ctx,78,y+10,9,4,C.jacketShadow);rect(ctx,105,y+10,9,4,C.jacketShadow);
  rect(ctx,89,y+31,4,15,C.lace);rect(ctx,102,y+31,4,15,C.lace);ellipse(ctx,91,y+47,3,3,C.shoeLight);ellipse(ctx,104,y+47,3,3,C.shoeLight);
  rect(ctx,80,y+48,31,3,C.jacketShadow);rect(ctx,84,y+53,24,2,C.jacketMid);
  drawArm(ctx,68,y+14,'L',phase,dir,seated);drawArm(ctx,124,y+14,'R',phase,dir,seated)
}

function drawSeatedLower(ctx,bob){const y=148+bob;poly(ctx,[[70,y],[122,y],[130,y+17],[118,y+31],[86,y+31],[70,y+18]],C.outline);poly(ctx,[[77,y+5],[115,y+5],[121,y+14],[112,y+23],[87,y+23],[77,y+14]],C.pants);poly(ctx,[[80,y+7],[96,y+7],[91,y+21],[84,y+21]],C.pantsLight);rect(ctx,106,y+21,27,12,C.shoe);rect(ctx,113,y+22,13,4,C.shoeLight)}

function render(dir='SE',frame=0,seated=false){
  const safeDir=dir==='SW'?'SW':'SE',phase=((Number(frame)||0)%4+4)%4,bob=seated?2:(phase===1||phase===3?-4:0);
  const canvas=document.createElement('canvas');canvas.width=STUDENT_MASTER_SIZE;canvas.height=STUDENT_MASTER_SIZE;const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;
  ellipse(ctx,96,182,34,8,C.shadow);
  if(!seated){drawLeg(ctx,82,144+bob,true,phase);drawLeg(ctx,110,144+bob,false,phase)}else drawSeatedLower(ctx,bob);
  drawTorso(ctx,safeDir,phase,seated,bob);drawHead(ctx,safeDir,bob);
  return canvas.toDataURL('image/png')
}

export function studentSpriteMaster192DataURL(dir='SE',frame=0,seated=false){
  const safeDir=dir==='SW'?'SW':'SE',f=seated?0:((Number(frame)||0)%4+4)%4,key=`${STUDENT_MASTER_VERSION}:${safeDir}:${f}:${!!seated}`;
  if(cache.has(key))return cache.get(key);const url=render(safeDir,f,seated);cache.set(key,url);return url
}
