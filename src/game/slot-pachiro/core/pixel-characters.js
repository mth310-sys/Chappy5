const SIZE=32;
const OUT='#241b18', INNER='#49362e', EYE='#171514', SHADOW='#6b574655';
const S={hair:'#51382a',hairHi:'#825d45',hairMid:'#684936',hairSh:'#36261e',skin:'#f2c69e',skinHi:'#ffe1bd',skinSh:'#d99270',cheek:'#df9184',hood:'#2d65a7',hoodHi:'#5a91cf',hoodMid:'#3d79ba',hoodSh:'#1b426f',shirt:'#f3f1eb',pants:'#354c64',pantsHi:'#4a657e',pantsSh:'#27394c',shoe:'#25262a',shoeHi:'#565860',lace:'#e8edf3'};
const cache=new Map();
function r(c,x,y,w,h,k){c.fillStyle=k;c.fillRect(x,y,w,h)}function p(c,x,y,k){r(c,x,y,1,1,k)}function q(c,a,k){c.fillStyle=k;c.beginPath();c.moveTo(...a[0]);for(let i=1;i<a.length;i++)c.lineTo(...a[i]);c.closePath();c.fill()}
function floorShadow(c,seated,lean=0){q(c,seated?[[8+lean,27],[13+lean,26],[23+lean,26],[26+lean,28],[22+lean,30],[11+lean,30]]:[[7+lean,28],[12+lean,27],[21+lean,27],[26+lean,29],[21+lean,31],[11+lean,31]],SHADOW)}
function head(c,y,lean){
 const x=lean;
 // clean outer silhouette: broad hair mass, narrower jaw, clear quarter-view nose side
 q(c,[[6+x,6+y],[7+x,4+y],[10+x,2+y],[14+x,1+y],[19+x,2+y],[23+x,4+y],[25+x,7+y],[25+x,11+y],[23+x,14+y],[20+x,16+y],[13+x,16+y],[9+x,14+y],[7+x,12+y],[5+x,9+y]],OUT);
 q(c,[[7+x,6+y],[9+x,4+y],[13+x,2+y],[18+x,2+y],[22+x,4+y],[24+x,7+y],[23+x,10+y],[21+x,9+y],[20+x,6+y],[18+x,7+y],[16+x,5+y],[14+x,7+y],[12+x,5+y],[10+x,8+y],[7+x,8+y]],S.hair);
 q(c,[[10+x,4+y],[13+x,2+y],[18+x,2+y],[21+x,4+y],[17+x,4+y],[15+x,3+y],[13+x,5+y]],S.hairHi);r(c,8+x,6+y,2,3,S.hairMid);p(c,22+x,6+y,S.hairSh);
 // face is deliberately simpler than v2: larger clean skin plane, asymmetric eyes
 q(c,[[10+x,8+y],[13+x,6+y],[19+x,6+y],[22+x,8+y],[23+x,11+y],[21+x,14+y],[18+x,15+y],[13+x,15+y],[9+x,13+y],[8+x,10+y]],S.skin);
 r(c,10+x,8+y,3,1,S.skinHi);p(c,11+x,9+y,S.skinHi);q(c,[[9+x,12+y],[13+x,15+y],[18+x,15+y],[21+x,13+y],[21+x,11+y]],S.skinSh);
 // fringe reads as one flowing mass rather than many disconnected blocks
 q(c,[[8+x,6+y],[11+x,4+y],[14+x,5+y],[16+x,4+y],[19+x,5+y],[21+x,7+y],[20+x,9+y],[18+x,7+y],[17+x,10+y],[15+x,7+y],[13+x,10+y],[11+x,7+y],[10+x,10+y],[8+x,9+y]],S.hair);
 p(c,11+x,5+y,S.hairHi);r(c,17+x,5+y,2,1,S.hairMid);r(c,23+x,9+y,2,3,S.skinSh);p(c,24+x,10+y,S.skinHi);
 // one-pixel far eye + stronger near eye creates the quarter-view face
 p(c,14+x,10+y,EYE);r(c,19+x,10+y,2,2,EYE);p(c,20+x,9+y,INNER);p(c,13+x,12+y,S.cheek);p(c,21+x,12+y,S.cheek);p(c,17+x,13+y,'#9f5e55');
}
function torso(c,y,frame,seated,lean){const x=lean;
 q(c,[[8+x,16+y],[11+x,14+y],[19+x,14+y],[23+x,16+y],[23+x,21+y],[21+x,23+y],[18+x,24+y],[11+x,23+y],[7+x,21+y],[7+x,17+y]],OUT);
 q(c,[[9+x,16+y],[12+x,15+y],[18+x,15+y],[21+x,16+y],[21+x,20+y],[19+x,22+y],[12+x,21+y],[9+x,20+y]],S.hood);
 r(c,10+x,16+y,5,1,S.hoodHi);q(c,[[17+x,16+y],[21+x,16+y],[21+x,20+y],[19+x,22+y],[17+x,21+y]],S.hoodSh);r(c,12+x,17+y,6,1,S.hoodMid);
 q(c,[[13+x,15+y],[15+x,16+y],[17+x,15+y],[19+x,16+y],[18+x,18+y],[14+x,18+y]],S.shirt);p(c,14+x,19+y,S.lace);p(c,18+x,19+y,S.lace);r(c,13+x,20+y,5,1,S.hoodMid);
 const swing=seated?0:(frame===1?1:frame===3?-1:0);
 q(c,[[7+x,16+y],[9+x,17+y],[9+x+swing,21+y],[7+x+swing,24+y],[5+x,23+y],[5+x,19+y]],OUT);q(c,[[7+x,17+y],[8+x,18+y],[8+x+swing,21+y],[7+x+swing,22+y],[6+x,22+y],[6+x,19+y]],S.hoodMid);p(c,7+x+swing,23+y,S.skinHi);
 q(c,[[21+x,16+y],[24+x,17+y],[25+x-swing,21+y],[24+x-swing,24+y],[22+x,24+y],[21+x,21+y]],OUT);q(c,[[22+x,17+y],[23+x,18+y],[24+x-swing,21+y],[23+x-swing,22+y],[22+x,21+y]],S.hoodSh);p(c,23+x-swing,23+y,S.skinSh);
 if(seated){q(c,[[10+x,22+y],[20+x,22+y],[23+x,24+y],[23+x,27+y],[19+x,28+y],[13+x,27+y],[10+x,25+y]],OUT);q(c,[[11+x,23+y],[19+x,23+y],[21+x,24+y],[21+x,26+y],[18+x,26+y],[13+x,25+y]],S.pants);r(c,12+x,23+y,3,1,S.pantsHi);r(c,20+x,26+y,5,2,OUT);r(c,21+x,26+y,3,1,S.shoe);p(c,22+x,26+y,S.shoeHi)}
}
function legs(c,y,f,seated,lean){if(seated)return;const x=lean;
 if(f===1){q(c,[[10+x,22+y],[14+x,22+y],[14+x,26+y],[11+x,29+y],[8+x,29+y],[7+x,27+y]],OUT);q(c,[[11+x,23+y],[13+x,23+y],[13+x,26+y],[10+x,28+y],[9+x,27+y]],S.pants);p(c,11+x,23+y,S.pantsHi);r(c,8+x,28+y,4,2,S.shoe);p(c,9+x,28+y,S.shoeHi);q(c,[[16+x,22+y],[20+x,22+y],[21+x,25+y],[23+x,27+y],[22+x,30+y],[18+x,30+y],[17+x,28+y]],OUT);q(c,[[17+x,23+y],[19+x,23+y],[20+x,25+y],[21+x,27+y],[20+x,28+y],[18+x,27+y]],S.pantsSh);r(c,19+x,29+y,4,1,S.shoe)}
 else if(f===3){q(c,[[10+x,22+y],[14+x,22+y],[15+x,25+y],[17+x,27+y],[16+x,30+y],[12+x,30+y],[11+x,28+y]],OUT);q(c,[[11+x,23+y],[13+x,23+y],[14+x,25+y],[15+x,27+y],[14+x,28+y],[12+x,27+y]],S.pants);r(c,12+x,29+y,4,1,S.shoe);q(c,[[16+x,22+y],[20+x,22+y],[20+x,26+y],[17+x,29+y],[14+x,29+y],[13+x,27+y]],OUT);q(c,[[17+x,23+y],[19+x,23+y],[19+x,26+y],[16+x,28+y],[15+x,27+y]],S.pantsSh);r(c,14+x,28+y,4,2,S.shoe);p(c,15+x,28+y,S.shoeHi)}
 else{q(c,[[10+x,22+y],[14+x,22+y],[14+x,27+y],[12+x,30+y],[8+x,30+y]],OUT);r(c,11+x,23+y,2,5,S.pants);p(c,11+x,23+y,S.pantsHi);r(c,8+x,29+y,4,1,S.shoe);q(c,[[16+x,22+y],[20+x,22+y],[20+x,27+y],[18+x,30+y],[14+x,30+y]],OUT);r(c,17+x,23+y,2,5,S.pantsSh);r(c,15+x,29+y,4,1,S.shoe)}
}
function draw(c,dir,frame,seated){const flip=dir==='SW',f=frame%4;c.clearRect(0,0,SIZE,SIZE);c.save();if(flip){c.translate(SIZE,0);c.scale(-1,1)}// walking weight shifts one pixel toward the planted leg; vertical bounce only on passing frames
 const lean=seated?0:(f===1?1:f===3?-1:0),bob=seated?0:(f===1||f===3?-1:0);floorShadow(c,seated,lean);head(c,bob,lean);torso(c,bob,f,seated,lean);legs(c,bob,f,seated,lean);c.restore()}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false,variant=0){const key=`student-master-v3:${dir}:${frame}:${seated}`;if(cache.has(key))return cache.get(key);const cv=document.createElement('canvas');cv.width=SIZE;cv.height=SIZE;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;draw(c,dir,frame,seated);const u=cv.toDataURL('image/png');cache.set(key,u);return u}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return dx-dy>=0?'SE':'SW'}