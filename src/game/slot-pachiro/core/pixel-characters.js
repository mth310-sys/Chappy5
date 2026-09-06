const SIZE=32;
const OUT='#2b211e';
const EYE='#2a2220';
const PALETTES={
  regular:{hair:'#4a3328',hairHi:'#6a4936',skin:'#f2c39a',skinShadow:'#d99670',shirt:'#d95d68',shirtHi:'#ef7d83',shirtShadow:'#a83e49',pants:'#405b75',pantsShadow:'#2d435a',shoe:'#2b2b31'},
  quick:{hair:'#263847',hairHi:'#3e5b6e',skin:'#efbd8f',skinShadow:'#d68d69',shirt:'#45a39c',shirtHi:'#6dc1ba',shirtShadow:'#2f746e',pants:'#374a60',pantsShadow:'#273647',shoe:'#272c33'},
  high:{hair:'#543746',hairHi:'#765064',skin:'#f0c09a',skinShadow:'#d98f72',shirt:'#676eb8',shirtHi:'#8b91d5',shirtShadow:'#484f91',pants:'#41445e',pantsShadow:'#2f3147',shoe:'#27272e'}
};
const cache=new Map();
function rect(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(x,y,w,h)}
function px(c,x,y,color){rect(c,x,y,1,1,color)}
function poly(c,points,color){c.fillStyle=color;c.beginPath();c.moveTo(points[0][0],points[0][1]);for(let i=1;i<points.length;i++)c.lineTo(points[i][0],points[i][1]);c.closePath();c.fill()}
function head(c,p,y){
  // asymmetrical quarter-view head: larger hair mass toward the rear, cheek projected to SE.
  poly(c,[[8,4+y],[12,1+y],[22,1+y],[27,5+y],[28,12+y],[25,17+y],[13,18+y],[7,14+y]],OUT);
  poly(c,[[10,4+y],[13,2+y],[22,2+y],[26,5+y],[26,10+y],[22,8+y],[20,5+y],[16,7+y],[12,6+y],[10,10+y]],p.hair);
  rect(c,12,3+y,8,2,p.hairHi);rect(c,9,8+y,4,6,p.hair);rect(c,13,7+y,11,9,p.skin);rect(c,14,14+y,9,2,p.skinShadow);
  // fringe, ear and offset quarter-view eyes
  poly(c,[[12,6+y],[15,4+y],[18,5+y],[18,8+y],[16,7+y],[15,10+y],[13,9+y]],p.hair);
  rect(c,23,10+y,3,4,p.skinShadow);px(c,20,9+y,EYE);px(c,23,10+y,EYE);px(c,22,13+y,'#b87562');
}
function torso(c,p,y,seated){
  // short trapezoid torso instead of a box, with visible far-side shoulder.
  poly(c,[[10,18+y],[14,16+y],[22,16+y],[26,19+y],[24,25+y],[12,25+y],[8,22+y]],OUT);
  poly(c,[[11,18+y],[15,17+y],[21,17+y],[24,19+y],[23,23+y],[12,23+y],[10,21+y]],p.shirt);
  rect(c,12,18+y,6,2,p.shirtHi);poly(c,[[18,18+y],[24,19+y],[23,23+y],[18,23+y]],p.shirtShadow);
  // arms angled with quarter-view perspective
  poly(c,[[9,18+y],[11,19+y],[9,24+y],[7,24+y],[7,21+y]],OUT);poly(c,[[9,19+y],[10,20+y],[8,23+y],[8,21+y]],p.shirt);px(c,7,24+y,p.skin);
  poly(c,[[24,18+y],[26,19+y],[27,23+y],[25,25+y],[23,23+y]],OUT);poly(c,[[24,19+y],[25,20+y],[26,23+y],[25,24+y],[24,22+y]],p.shirtShadow);px(c,25,24+y,p.skinShadow);
  if(seated){rect(c,12,24+y,12,3,OUT);rect(c,13,24+y,9,2,p.pants);poly(c,[[19,25+y],[25,25+y],[27,27+y],[26,29+y],[22,29+y]],OUT);rect(c,23,27+y,3,1,p.shoe);return}
}
function legs(c,p,y,frame){const f=frame%4;if(f===1){poly(c,[[11,24+y],[16,24+y],[15,29+y],[11,30+y],[9,29+y]],OUT);rect(c,12,25+y,3,4,p.pants);rect(c,10,29+y,4,2,p.shoe);poly(c,[[18,24+y],[23,24+y],[25,28+y],[24,31+y],[20,31+y]],OUT);rect(c,20,25+y,3,5,p.pantsShadow);rect(c,21,30+y,4,1,p.shoe)}else if(f===3){poly(c,[[11,24+y],[16,24+y],[17,28+y],[15,31+y],[11,31+y]],OUT);rect(c,13,25+y,3,5,p.pants);rect(c,11,30+y,4,1,p.shoe);poly(c,[[18,24+y],[23,24+y],[22,29+y],[18,30+y],[16,29+y]],OUT);rect(c,19,25+y,3,4,p.pantsShadow);rect(c,17,29+y,4,2,p.shoe)}else{poly(c,[[11,24+y],[16,24+y],[16,29+y],[14,31+y],[10,31+y]],OUT);rect(c,12,25+y,3,5,p.pants);rect(c,10,30+y,4,1,p.shoe);poly(c,[[18,24+y],[23,24+y],[23,29+y],[21,31+y],[17,31+y]],OUT);rect(c,19,25+y,3,5,p.pantsShadow);rect(c,18,30+y,4,1,p.shoe)}}
function draw(ctx,type,dir,frame,seated=false){const p=PALETTES[type]||PALETTES.regular;ctx.clearRect(0,0,SIZE,SIZE);const flip=dir==='SW';ctx.save();if(flip){ctx.translate(SIZE,0);ctx.scale(-1,1)}const bob=seated?0:(frame===1||frame===3?-1:0);head(ctx,p,bob);torso(ctx,p,bob,seated);if(!seated)legs(ctx,p,bob,frame);ctx.restore()}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false){const key=`v2:${type}:${dir}:${frame}:${seated}`;if(cache.has(key))return cache.get(key);const canvas=document.createElement('canvas');canvas.width=SIZE;canvas.height=SIZE;const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;draw(ctx,type,dir,frame,seated);const url=canvas.toDataURL('image/png');cache.set(key,url);return url}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return(dx-dy)>=0?'SE':'SW'}
