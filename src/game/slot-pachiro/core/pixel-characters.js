const SIZE=24;
const PALETTES={regular:{hair:'#493326',skin:'#f3c596',skinShadow:'#d99a72',shirt:'#d75d68',shirtShadow:'#a83d4a',pants:'#415c78',shoe:'#302c2b'},quick:{hair:'#273c4b',skin:'#efbd8d',skinShadow:'#d58f68',shirt:'#4fa9a1',shirtShadow:'#32746f',pants:'#37495e',shoe:'#282d33'},high:{hair:'#503341',skin:'#f0c09a',skinShadow:'#d78e70',shirt:'#6c70b8',shirtShadow:'#484d8f',pants:'#3e4058',shoe:'#292832'}};
const OUT='#352922';
const cache=new Map();
function rect(ctx,x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function px(ctx,x,y,c){rect(ctx,x,y,1,1,c)}
function draw(ctx,type,dir,frame,seated=false){const p=PALETTES[type]||PALETTES.regular;ctx.clearRect(0,0,SIZE,SIZE);const flip=dir==='SW';ctx.save();if(flip){ctx.translate(SIZE,0);ctx.scale(-1,1)}const bob=seated?2:(frame===1||frame===3?-1:0);const y=bob;
// 2-head chibi silhouette, quarter-front SE. Dark outer pixels keep it readable on busy floors.
rect(ctx,7,2+y,9,1,OUT);rect(ctx,5,3+y,13,2,OUT);rect(ctx,4,5+y,15,5,OUT);rect(ctx,5,10+y,13,2,OUT);
rect(ctx,6,4+y,10,2,p.hair);rect(ctx,5,6+y,4,4,p.hair);rect(ctx,9,6+y,8,4,p.skin);rect(ctx,10,10+y,6,1,p.skinShadow);px(ctx,14,7+y,'#29231f');px(ctx,16,8+y,'#29231f');rect(ctx,9,5+y,7,1,p.hair);rect(ctx,6,5+y,4,2,p.hair);
// body and arms
rect(ctx,7,12+y,10,seated?6:7,OUT);rect(ctx,8,12+y,8,5,p.shirt);rect(ctx,8,16+y,8,2,p.shirtShadow);rect(ctx,5,13+y,3,5,OUT);rect(ctx,6,14+y,2,3,p.shirt);px(ctx,6,17+y,p.skin);rect(ctx,17,13+y,2,5,OUT);rect(ctx,16,14+y,2,3,p.shirtShadow);px(ctx,17,17+y,p.skinShadow);
if(seated){rect(ctx,8,18+y,9,2,OUT);rect(ctx,9,18+y,7,1,p.pants);rect(ctx,15,19+y,4,2,OUT);rect(ctx,16,19+y,3,1,p.shoe)}else{const step=frame%4;if(step===1){rect(ctx,7,19+y,4,4,OUT);rect(ctx,8,19+y,2,3,p.pants);rect(ctx,13,18+y,4,5,OUT);rect(ctx,14,19+y,2,3,p.pants);rect(ctx,14,22+y,3,1,p.shoe)}else if(step===3){rect(ctx,8,18+y,4,5,OUT);rect(ctx,9,19+y,2,3,p.pants);rect(ctx,13,19+y,4,4,OUT);rect(ctx,14,19+y,2,3,p.pants);rect(ctx,8,22+y,3,1,p.shoe)}else{rect(ctx,8,19+y,4,4,OUT);rect(ctx,9,19+y,2,3,p.pants);rect(ctx,13,19+y,4,4,OUT);rect(ctx,14,19+y,2,3,p.pants);rect(ctx,9,22+y,2,1,p.shoe);rect(ctx,14,22+y,2,1,p.shoe)}}ctx.restore()}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false){const key=`${type}:${dir}:${frame}:${seated}`;if(cache.has(key))return cache.get(key);const c=document.createElement('canvas');c.width=SIZE;c.height=SIZE;const ctx=c.getContext('2d');ctx.imageSmoothingEnabled=false;draw(ctx,type,dir,frame,seated);const url=c.toDataURL('image/png');cache.set(key,url);return url}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return (dx-dy)>=0?'SE':'SW'}
