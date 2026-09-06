export const STUDENT_MASTER_SIZE=192;
export const STUDENT_MASTER_VERSION='student-master192-v2';
const cache=new Map();

const C={
  outline:'#171311',outlineSoft:'#2a211d',
  hairDeep:'#2e211c',hairShadow:'#402b22',hair:'#5b3d2c',hairMid:'#79543d',hairLight:'#a97b59',hairGlint:'#c99b73',
  skinDeep:'#b86f54',skinShadow:'#d48b6b',skin:'#efbc94',skinLight:'#ffe1b8',skinGlint:'#fff0d2',eye:'#171413',mouth:'#92534e',
  jacketDeep:'#551c25',jacketShadow:'#722733',jacket:'#9c3946',jacketMid:'#bd505d',jacketLight:'#dc7882',jacketGlint:'#ef9aa1',
  shirt:'#f3f0ea',shirtShadow:'#d2cec6',pantsDeep:'#1f2b38',pants:'#31465b',pantsMid:'#425b72',pantsLight:'#607c95',
  shoe:'#1d1f23',shoeMid:'#484c53',shoeLight:'#7d828b',lace:'#edf1f4',shadow:'rgba(24,19,17,.18)'
};

function poly(ctx,pts,color){ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i][0],pts[i][1]);ctx.closePath();ctx.fill()}
function rect(ctx,x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))}
function ellipse(ctx,x,y,rx,ry,color){ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(Math.round(x),Math.round(y),Math.round(rx),Math.round(ry),0,0,Math.PI*2);ctx.fill()}
function line(ctx,x1,y1,x2,y2,width,color){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()}

function drawShoe(ctx,x,y,flip=false,front=false){
  const s=flip?-1:1;
  poly(ctx,[[x-10*s,y],[x+9*s,y-1],[x+14*s,y+5],[x+11*s,y+10],[x-10*s,y+10],[x-14*s,y+6]],C.shoe);
  poly(ctx,[[x-7*s,y+1],[x+7*s,y],[x+10*s,y+4],[x+5*s,y+5],[x-8*s,y+5]],C.shoeMid);
  if(front){line(ctx,x-5*s,y+3,x+5*s,y+2,2,C.lace);line(ctx,x-3*s,y+6,x+5*s,y+5,2,C.shoeLight)}
}

function drawLeg(ctx,x,y,front,phase,dir){
  const stride=phase===1?15:phase===3?-14:0;
  const dirBias=dir==='SW'?-1:1;
  const dx=(front?stride:-stride)+dirBias*(front?2:-2);
  const kneeX=x+dx*.34,footX=x+dx;
  const base=front?C.pants:C.pantsDeep;
  poly(ctx,[[x-10,y],[x+9,y],[kneeX+8,y+28],[footX+7,y+52],[footX-9,y+54],[kneeX-8,y+27]],C.outline);
  poly(ctx,[[x-6,y+4],[x+5,y+4],[kneeX+4,y+27],[footX+3,y+47],[footX-5,y+49],[kneeX-4,y+26]],base);
  if(front){
    poly(ctx,[[x-5,y+5],[x,y+5],[kneeX-1,y+23],[footX-3,y+41],[footX-6,y+43],[kneeX-5,y+24]],C.pantsLight);
    line(ctx,x+2,y+9,kneeX+2,y+24,2,C.pantsMid);
  }
  drawShoe(ctx,footX,y+49,dir==='SW',front);
}

function drawArm(ctx,sx,sy,side,phase,dir,seated){
  const sign=side==='L'?-1:1;
  const near=(dir==='SE'&&side==='L')||(dir==='SW'&&side==='R');
  const swing=seated?0:(phase===1?9:phase===3?-9:0)*(side==='L'?1:-1);
  const ex=sx+sign*18+swing*.35,ey=sy+25;
  const hx=ex+sign*8+swing*.18,hy=ey+26;
  poly(ctx,[[sx-8,sy],[sx+7,sy],[ex+7,ey-1],[hx+7,hy],[hx-6,hy+4],[ex-7,ey+3]],C.outline);
  poly(ctx,[[sx-4,sy+4],[sx+4,sy+4],[ex+4,ey],[hx+4,hy-4],[hx-3,hy],[ex-3,ey]],near?C.jacketMid:C.jacketDeep);
  if(near)poly(ctx,[[sx-3,sy+7],[sx+2,sy+6],[ex+2,ey-4],[hx+1,hy-8],[ex-2,ey-2]],C.jacketLight);
  else line(ctx,sx,sy+7,ex-1,ey-1,2,C.jacketShadow);
  ellipse(ctx,hx,hy+3,7,7,near?C.skinLight:C.skinShadow);
  rect(ctx,hx-3,hy+1,6,3,C.skin);
}

function drawHairBack(ctx,dir,bob){
  const sw=dir==='SW';
  const pts=sw
    ?[[62,57+bob],[59,39+bob],[67,25+bob],[80,17+bob],[96,13+bob],[112,18+bob],[124,29+bob],[130,43+bob],[128,59+bob],[121,69+bob],[115,54+bob],[105,45+bob],[96,50+bob],[87,43+bob],[78,52+bob],[70,69+bob]]
    :[[130,57+bob],[133,39+bob],[125,25+bob],[112,17+bob],[96,13+bob],[80,18+bob],[68,29+bob],[62,43+bob],[64,59+bob],[71,69+bob],[77,54+bob],[87,45+bob],[96,50+bob],[105,43+bob],[114,52+bob],[122,69+bob]];
  poly(ctx,pts,C.outline);
  const inner=sw
    ?[[67,55+bob],[65,40+bob],[72,29+bob],[83,21+bob],[96,17+bob],[109,21+bob],[120,31+bob],[125,43+bob],[123,56+bob],[117,61+bob],[111,49+bob],[104,41+bob],[96,46+bob],[88,39+bob],[80,48+bob],[73,61+bob]]
    :[[125,55+bob],[127,40+bob],[120,29+bob],[109,21+bob],[96,17+bob],[83,21+bob],[72,31+bob],[67,43+bob],[69,56+bob],[75,61+bob],[81,49+bob],[88,41+bob],[96,46+bob],[104,39+bob],[112,48+bob],[119,61+bob]];
  poly(ctx,inner,C.hair);
}

function drawHairClusters(ctx,dir,bob){
  const sw=dir==='SW',m=sw?-1:1;
  const cx=96;
  poly(ctx,[[cx-2*m,18+bob],[cx+13*m,21+bob],[cx+6*m,35+bob],[cx-2*m,45+bob],[cx-9*m,35+bob]],C.hairMid);
  poly(ctx,[[cx+8*m,22+bob],[cx+25*m,28+bob],[cx+18*m,42+bob],[cx+6*m,39+bob]],C.hairLight);
  poly(ctx,[[cx-10*m,22+bob],[cx-26*m,30+bob],[cx-18*m,44+bob],[cx-5*m,38+bob]],C.hairShadow);
  poly(ctx,[[cx+3*m,19+bob],[cx+13*m,22+bob],[cx+8*m,29+bob],[cx,bob+28]],C.hairGlint);
  poly(ctx,[[cx+18*m,31+bob],[cx+29*m,37+bob],[cx+23*m,49+bob],[cx+14*m,43+bob]],C.hairMid);
  poly(ctx,[[cx-19*m,31+bob],[cx-30*m,39+bob],[cx-22*m,51+bob],[cx-13*m,42+bob]],C.hairDeep);
}

function drawFace(ctx,dir,bob){
  const sw=dir==='SW';
  const cx=96+(sw?-2:2),cy=63+bob;
  ellipse(ctx,cx,cy,34,35,C.outline);
  ellipse(ctx,cx,cy+1,29,30,C.skin);
  const earX=cx+(sw?-28:28);
  ellipse(ctx,earX,cy+5,7,10,C.skinShadow);ellipse(ctx,earX+(sw?1:-1),cy+3,3,5,C.skinLight);
  const lightPts=sw?[[70,50+bob],[89,36+bob],[105,38+bob],[100,71+bob],[84,84+bob],[72,71+bob]]:[[122,50+bob],[103,36+bob],[87,38+bob],[92,71+bob],[108,84+bob],[120,71+bob]];
  poly(ctx,lightPts,C.skinLight);
  const nearX=sw?84:108,farX=sw?106:86;
  rect(ctx,nearX,62+bob,6,6,C.eye);rect(ctx,farX,61+bob,4,4,C.eye);
  rect(ctx,nearX+(sw?-1:1),60+bob,7,2,C.outlineSoft);rect(ctx,farX+(sw?-1:1),59+bob,5,2,C.outlineSoft);
  rect(ctx,sw?78:108,70+bob,5,4,C.skinDeep);
  rect(ctx,sw?88:98,78+bob,10,3,C.mouth);
  rect(ctx,sw?89:97,77+bob,8,1,C.skinGlint);
}

function drawHead(ctx,dir,bob){
  rect(ctx,87,88+bob,18,17,C.outline);rect(ctx,91,88+bob,12,16,C.skinShadow);
  drawFace(ctx,dir,bob);
  drawHairBack(ctx,dir,bob);
  drawHairClusters(ctx,dir,bob);
}

function drawTorso(ctx,dir,phase,seated,bob){
  const y=98+bob,nearLeft=dir==='SE';
  poly(ctx,[[72,y],[120,y],[132,y+14],[128,y+36],[123,y+58],[113,y+71],[79,y+71],[69,y+58],[64,y+36],[60,y+14]],C.outline);
  poly(ctx,[[77,y+5],[115,y+5],[123,y+16],[120,y+35],[115,y+56],[108,y+63],[84,y+63],[77,y+56],[72,y+35],[69,y+16]],C.jacket);
  if(nearLeft){
    poly(ctx,[[77,y+7],[91,y+7],[88,y+23],[84,y+42],[79,y+55],[74,y+50],[72,y+18]],C.jacketLight);
    poly(ctx,[[80,y+8],[88,y+8],[86,y+20],[82,y+27]],C.jacketGlint);
    poly(ctx,[[108,y+7],[116,y+9],[119,y+19],[115,y+51],[109,y+58]],C.jacketShadow);
  }else{
    poly(ctx,[[115,y+7],[101,y+7],[104,y+23],[108,y+42],[113,y+55],[118,y+50],[120,y+18]],C.jacketLight);
    poly(ctx,[[112,y+8],[104,y+8],[106,y+20],[110,y+27]],C.jacketGlint);
    poly(ctx,[[84,y+7],[76,y+9],[73,y+19],[77,y+51],[83,y+58]],C.jacketShadow);
  }
  poly(ctx,[[87,y+6],[105,y+6],[103,y+33],[96,y+38],[89,y+33]],C.shirt);
  poly(ctx,[[99,y+7],[105,y+7],[103,y+29],[99,y+32]],C.shirtShadow);
  line(ctx,96,y+8,96,y+59,2,C.outlineSoft);
  line(ctx,88,y+14,91,y+31,2,C.lace);line(ctx,104,y+14,101,y+31,2,C.lace);
  ellipse(ctx,91,y+33,2,2,C.shoeLight);ellipse(ctx,101,y+33,2,2,C.shoeLight);
  poly(ctx,[[80,y+44],[91,y+47],[88,y+57],[78,y+53]],C.jacketShadow);
  poly(ctx,[[112,y+44],[101,y+47],[104,y+57],[114,y+53]],C.jacketMid);
  rect(ctx,85,y+58,22,3,C.jacketDeep);
  drawArm(ctx,68,y+13,'L',phase,dir,seated);drawArm(ctx,124,y+13,'R',phase,dir,seated);
}

function drawSeatedLower(ctx,bob,dir){
  const y=148+bob,flip=dir==='SW';
  poly(ctx,[[70,y],[122,y],[130,y+16],[120,y+29],[110,y+34],[84,y+31],[70,y+18]],C.outline);
  poly(ctx,[[77,y+5],[115,y+5],[122,y+14],[114,y+23],[104,y+27],[86,y+24],[77,y+14]],C.pants);
  poly(ctx,[[79,y+7],[95,y+7],[91,y+21],[84,y+20]],C.pantsLight);
  drawShoe(ctx,114,y+22,flip,true);
}

function render(dir='SE',frame=0,seated=false){
  const safeDir=dir==='SW'?'SW':'SE',phase=((Number(frame)||0)%4+4)%4,bob=seated?2:(phase===1||phase===3?-3:0);
  const canvas=document.createElement('canvas');canvas.width=STUDENT_MASTER_SIZE;canvas.height=STUDENT_MASTER_SIZE;
  const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;
  ellipse(ctx,96,181,33,7,C.shadow);
  if(!seated){
    const frontFirst=safeDir==='SE';
    if(frontFirst){drawLeg(ctx,109,143+bob,false,phase,safeDir);drawLeg(ctx,83,143+bob,true,phase,safeDir)}
    else{drawLeg(ctx,83,143+bob,false,phase,safeDir);drawLeg(ctx,109,143+bob,true,phase,safeDir)}
  }else drawSeatedLower(ctx,bob,safeDir);
  drawTorso(ctx,safeDir,phase,seated,bob);
  drawHead(ctx,safeDir,bob);
  return canvas.toDataURL('image/png');
}

export function studentSpriteMaster192DataURL(dir='SE',frame=0,seated=false){
  const safeDir=dir==='SW'?'SW':'SE',f=seated?0:((Number(frame)||0)%4+4)%4,key=`${STUDENT_MASTER_VERSION}:${safeDir}:${f}:${!!seated}`;
  if(cache.has(key))return cache.get(key);
  const url=render(safeDir,f,seated);cache.set(key,url);return url;
}
