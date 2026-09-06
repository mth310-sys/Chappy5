const SIZE=32;
const OUT='#211916', EYE='#171514', SHADOW='#6f594655';
const S={hair:'#50372a',hairHi:'#805b43',hairMid:'#654633',hairSh:'#35251d',skin:'#f2c59d',skinHi:'#ffe0bb',skinSh:'#d8916d',cheek:'#df8f82',hood:'#2c64a5',hoodHi:'#568dcc',hoodMid:'#3976b8',hoodSh:'#193f6c',shirt:'#f3f1eb',pants:'#354b63',pantsHi:'#48647e',pantsSh:'#26384b',shoe:'#25262a',shoeHi:'#53555d',lace:'#e8edf3'};
const cache=new Map();
function r(c,x,y,w,h,k){c.fillStyle=k;c.fillRect(x,y,w,h)}function p(c,x,y,k){r(c,x,y,1,1,k)}function q(c,a,k){c.fillStyle=k;c.beginPath();c.moveTo(...a[0]);for(let i=1;i<a.length;i++)c.lineTo(...a[i]);c.closePath();c.fill()}
function floorShadow(c,seated){q(c,seated?[[8,27],[13,26],[23,26],[26,28],[22,30],[11,30]]:[[7,28],[12,27],[21,27],[26,29],[21,31],[11,31]],SHADOW)}
function head(c,y){
 q(c,[[6,5+y],[8,3+y],[12,1+y],[18,1+y],[22,3+y],[25,6+y],[25,11+y],[23,14+y],[20,16+y],[12,16+y],[8,14+y],[6,11+y],[5,8+y]],OUT);
 q(c,[[7,6+y],[9,4+y],[13,2+y],[18,2+y],[22,4+y],[24,6+y],[23,10+y],[21,9+y],[20,6+y],[18,8+y],[16,5+y],[14,8+y],[12,6+y],[10,9+y],[7,8+y]],S.hair);
 r(c,11,3+y,6,1,S.hairHi);r(c,13,2+y,4,1,S.hairHi);r(c,8,6+y,2,3,S.hairMid);p(c,21,5+y,S.hairSh);
 q(c,[[10,8+y],[13,6+y],[19,6+y],[22,8+y],[23,11+y],[21,14+y],[18,15+y],[13,15+y],[9,13+y],[8,10+y]],S.skin);
 r(c,10,8+y,3,1,S.skinHi);p(c,11,9+y,S.skinHi);q(c,[[9,12+y],[13,15+y],[18,15+y],[21,13+y],[21,11+y]],S.skinSh);
 // irregular layered fringe: the defining university-student silhouette
 q(c,[[8,6+y],[11,4+y],[13,5+y],[14,4+y],[16,6+y],[15,9+y],[13,7+y],[12,10+y],[10,8+y],[9,11+y],[7,9+y]],S.hair);
 q(c,[[17,4+y],[20,4+y],[23,6+y],[22,9+y],[20,7+y],[19,10+y],[17,8+y]],S.hairMid);
 r(c,23,9+y,2,3,S.skinSh);p(c,24,10+y,S.skinHi);
 p(c,14,10+y,EYE);r(c,19,10+y,2,2,EYE);p(c,20,9+y,'#6b4c3d');p(c,13,12+y,S.cheek);p(c,21,12+y,S.cheek);r(c,16,13+y,2,1,'#9f5d55');p(c,17,14+y,'#f4b3aa');
}
function torso(c,y,frame,seated){
 q(c,[[8,15+y],[11,14+y],[19,14+y],[23,16+y],[23,21+y],[21,23+y],[18,24+y],[11,23+y],[7,21+y],[7,17+y]],OUT);
 q(c,[[9,16+y],[12,15+y],[18,15+y],[21,16+y],[21,20+y],[19,22+y],[12,21+y],[9,20+y]],S.hood);
 r(c,10,16+y,5,1,S.hoodHi);p(c,10,17+y,S.hoodHi);q(c,[[17,16+y],[21,16+y],[21,20+y],[19,22+y],[17,21+y]],S.hoodSh);r(c,12,17+y,6,1,S.hoodMid);
 // white neck opening + hood rim + strings
 q(c,[[13,15+y],[15,16+y],[17,15+y],[19,16+y],[18,18+y],[14,18+y]],S.shirt);p(c,13,15+y,S.lace);p(c,19,15+y,S.lace);p(c,14,19+y,S.lace);p(c,18,19+y,S.lace);
 // small front pocket breaks up the blue block
 r(c,13,20+y,5,1,S.hoodMid);p(c,12,20+y,S.hoodSh);p(c,18,20+y,S.hoodSh);
 const swing=seated?0:(frame===1?1:frame===3?-1:0);
 q(c,[[7,16+y],[9,17+y],[9+swing,21+y],[7+swing,24+y],[5,23+y],[5,19+y]],OUT);q(c,[[7,17+y],[8,18+y],[8+swing,21+y],[7+swing,22+y],[6,22+y],[6,19+y]],S.hoodMid);p(c,7+swing,23+y,S.skinHi);
 q(c,[[21,16+y],[24,17+y],[25-swing,21+y],[24-swing,24+y],[22,24+y],[21,21+y]],OUT);q(c,[[22,17+y],[23,18+y],[24-swing,21+y],[23-swing,22+y],[22,21+y]],S.hoodSh);p(c,23-swing,23+y,S.skinSh);
 if(seated){q(c,[[10,22+y],[20,22+y],[23,24+y],[23,27+y],[19,28+y],[13,27+y],[10,25+y]],OUT);q(c,[[11,23+y],[19,23+y],[21,24+y],[21,26+y],[18,26+y],[13,25+y]],S.pants);r(c,12,23+y,3,1,S.pantsHi);r(c,20,26+y,5,2,OUT);r(c,21,26+y,3,1,S.shoe);p(c,22,26+y,S.shoeHi)}
}
function legs(c,y,f,seated){if(seated)return;
 if(f===1){q(c,[[10,22+y],[14,22+y],[14,26+y],[11,29+y],[8,29+y],[7,27+y]],OUT);q(c,[[11,23+y],[13,23+y],[13,26+y],[10,28+y],[9,27+y]],S.pants);p(c,11,23+y,S.pantsHi);r(c,8,28+y,4,2,S.shoe);p(c,9,28+y,S.shoeHi);q(c,[[16,22+y],[20,22+y],[21,25+y],[23,27+y],[22,30+y],[18,30+y],[17,28+y]],OUT);q(c,[[17,23+y],[19,23+y],[20,25+y],[21,27+y],[20,28+y],[18,27+y]],S.pantsSh);r(c,19,29+y,4,1,S.shoe);p(c,20,29+y,S.shoeHi)}
 else if(f===3){q(c,[[10,22+y],[14,22+y],[15,25+y],[17,27+y],[16,30+y],[12,30+y],[11,28+y]],OUT);q(c,[[11,23+y],[13,23+y],[14,25+y],[15,27+y],[14,28+y],[12,27+y]],S.pants);p(c,11,23+y,S.pantsHi);r(c,12,29+y,4,1,S.shoe);p(c,13,29+y,S.shoeHi);q(c,[[16,22+y],[20,22+y],[20,26+y],[17,29+y],[14,29+y],[13,27+y]],OUT);q(c,[[17,23+y],[19,23+y],[19,26+y],[16,28+y],[15,27+y]],S.pantsSh);r(c,14,28+y,4,2,S.shoe);p(c,15,28+y,S.shoeHi)}
 else{q(c,[[10,22+y],[14,22+y],[14,27+y],[12,30+y],[8,30+y]],OUT);r(c,11,23+y,2,5,S.pants);p(c,11,23+y,S.pantsHi);r(c,8,29+y,4,1,S.shoe);p(c,9,29+y,S.shoeHi);q(c,[[16,22+y],[20,22+y],[20,27+y],[18,30+y],[14,30+y]],OUT);r(c,17,23+y,2,5,S.pantsSh);r(c,15,29+y,4,1,S.shoe);p(c,16,29+y,S.shoeHi)}
}
function draw(c,dir,frame,seated){const flip=dir==='SW';c.clearRect(0,0,SIZE,SIZE);c.save();if(flip){c.translate(SIZE,0);c.scale(-1,1)}floorShadow(c,seated);const bob=seated?0:(frame===1||frame===3?-1:0);head(c,bob);torso(c,bob,frame%4,seated);legs(c,bob,frame%4,seated);c.restore()}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false,variant=0){const key=`student-master-v2:${dir}:${frame}:${seated}`;if(cache.has(key))return cache.get(key);const cv=document.createElement('canvas');cv.width=SIZE;cv.height=SIZE;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;draw(c,dir,frame,seated);const u=cv.toDataURL('image/png');cache.set(key,u);return u}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return dx-dy>=0?'SE':'SW'}