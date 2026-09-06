const SIZE=32;
const OUT='#241a18', EYE='#201817', SHADOW='#7a634e55';
const S={hair:'#4b3427',hairHi:'#74523d',hairSh:'#35241c',skin:'#f4c8a2',skinHi:'#ffe1c0',skinSh:'#d99772',hood:'#2f67a7',hoodHi:'#5a91cf',hoodSh:'#1c4776',shirt:'#eef1f4',pants:'#3c536b',pantsSh:'#293a4c',shoe:'#24262b',lace:'#e9edf1'};
const cache=new Map();
function r(c,x,y,w,h,k){c.fillStyle=k;c.fillRect(x,y,w,h)}
function p(c,x,y,k){r(c,x,y,1,1,k)}
function q(c,a,k){c.fillStyle=k;c.beginPath();c.moveTo(...a[0]);for(let i=1;i<a.length;i++)c.lineTo(...a[i]);c.closePath();c.fill()}
function floorShadow(c){q(c,[[8,28],[13,27],[21,27],[25,29],[21,31],[12,31]],SHADOW)}
function head(c,y){
  // compact 2-head silhouette based on the adopted university-student reference
  q(c,[[6,5+y],[9,2+y],[13,1+y],[20,2+y],[24,5+y],[25,10+y],[23,14+y],[20,16+y],[11,16+y],[7,14+y],[5,10+y]],OUT);
  q(c,[[7,6+y],[10,3+y],[14,2+y],[20,3+y],[23,6+y],[23,10+y],[21,9+y],[20,6+y],[17,8+y],[15,5+y],[12,8+y],[8,7+y]],S.hair);
  r(c,10,3+y,7,2,S.hairHi);r(c,7,9+y,3,3,S.hairSh);
  q(c,[[9,8+y],[12,6+y],[19,6+y],[22,9+y],[21,13+y],[18,15+y],[12,14+y],[8,12+y]],S.skin);
  r(c,10,8+y,3,1,S.skinHi);q(c,[[9,12+y],[13,14+y],[18,15+y],[20,13+y]],S.skinSh);
  // uneven fringe sells the quarter-view direction
  q(c,[[8,6+y],[11,4+y],[14,5+y],[13,8+y],[12,7+y],[11,10+y],[9,9+y]],S.hair);
  r(c,22,9+y,2,3,S.skinSh);p(c,23,10+y,S.skinHi);
  p(c,14,10+y,EYE);r(c,18,10+y,2,2,EYE);p(c,19,9+y,'#5b443c');
  r(c,16,13+y,2,1,'#ad665d');p(c,17,14+y,'#f1b0aa');
}
function torso(c,y,frame,seated){
  q(c,[[8,15+y],[11,14+y],[19,14+y],[23,16+y],[22,22+y],[19,24+y],[11,23+y],[7,21+y]],OUT);
  q(c,[[9,16+y],[12,15+y],[18,15+y],[21,16+y],[20,21+y],[18,22+y],[12,21+y],[9,20+y]],S.hood);
  r(c,10,16+y,6,2,S.hoodHi);q(c,[[17,16+y],[21,16+y],[20,21+y],[17,22+y]],S.hoodSh);
  r(c,13,15+y,4,2,S.shirt);p(c,14,18+y,S.lace);p(c,17,18+y,S.lace);
  const swing=seated?0:(frame===1?1:frame===3?-1:0);
  q(c,[[7,16+y],[9,17+y],[8+swing,22+y],[5,22+y],[5,19+y]],OUT);q(c,[[7,17+y],[8,18+y],[7+swing,21+y],[6,21+y],[6,19+y]],S.hood);p(c,6+swing,23+y,S.skin);
  q(c,[[21,16+y],[24,17+y],[25-swing,21+y],[23,23+y],[21,21+y]],OUT);q(c,[[22,17+y],[23,18+y],[24-swing,21+y],[23,22+y],[22,20+y]],S.hoodSh);p(c,23-swing,23+y,S.skinSh);
  if(seated){q(c,[[11,22+y],[20,22+y],[22,24+y],[21,27+y],[14,27+y],[11,25+y]],OUT);q(c,[[12,23+y],[19,23+y],[20,24+y],[19,25+y],[14,25+y]],S.pants);r(c,19,26+y,4,2,OUT);r(c,20,26+y,3,1,S.shoe)}
}
function legs(c,y,f,seated){if(seated)return;
  if(f===1){q(c,[[10,22+y],[14,22+y],[13,27+y],[9,29+y],[7,27+y]],OUT);r(c,11,23+y,2,4,S.pants);r(c,8,27+y,4,2,S.shoe);q(c,[[16,22+y],[20,22+y],[22,26+y],[21,30+y],[17,30+y]],OUT);q(c,[[17,23+y],[19,23+y],[20,26+y],[19,28+y],[18,28+y]],S.pantsSh);r(c,18,29+y,4,1,S.shoe)}
  else if(f===3){q(c,[[10,22+y],[14,22+y],[16,26+y],[14,30+y],[10,30+y]],OUT);q(c,[[11,23+y],[13,23+y],[14,26+y],[13,28+y],[11,28+y]],S.pants);r(c,10,29+y,4,1,S.shoe);q(c,[[16,22+y],[20,22+y],[19,27+y],[15,29+y],[14,27+y]],OUT);r(c,17,23+y,2,4,S.pantsSh);r(c,15,27+y,4,2,S.shoe)}
  else{q(c,[[10,22+y],[14,22+y],[14,27+y],[12,30+y],[8,30+y]],OUT);r(c,11,23+y,2,5,S.pants);r(c,8,29+y,4,1,S.shoe);q(c,[[16,22+y],[20,22+y],[20,27+y],[18,30+y],[14,30+y]],OUT);r(c,17,23+y,2,5,S.pantsSh);r(c,15,29+y,4,1,S.shoe)}
}
function draw(c,dir,frame,seated){const flip=dir==='SW';c.clearRect(0,0,SIZE,SIZE);c.save();if(flip){c.translate(SIZE,0);c.scale(-1,1)}floorShadow(c);const bob=seated?0:(frame===1||frame===3?-1:0);head(c,bob);torso(c,bob,frame%4,seated);legs(c,bob,frame%4,seated);c.restore()}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false,variant=0){const key=`student-master-v1:${dir}:${frame}:${seated}`;if(cache.has(key))return cache.get(key);const cv=document.createElement('canvas');cv.width=SIZE;cv.height=SIZE;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;draw(c,dir,frame,seated);const u=cv.toDataURL('image/png');cache.set(key,u);return u}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return dx-dy>=0?'SE':'SW'}