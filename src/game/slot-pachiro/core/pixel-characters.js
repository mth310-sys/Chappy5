const SIZE=32;
const OUT='#241b18', INNER='#49362e', EYE='#171514', SHADOW='#6b574655';
const S={hair:'#51382a',hairHi:'#825d45',hairMid:'#684936',hairSh:'#36261e',skin:'#f2c69e',skinHi:'#ffe1bd',skinSh:'#d99270',cheek:'#df9184',hood:'#2d65a7',hoodHi:'#5a91cf',hoodMid:'#3d79ba',hoodSh:'#1b426f',shirt:'#f3f1eb',pants:'#354c64',pantsHi:'#4a657e',pantsSh:'#27394c',shoe:'#25262a',shoeHi:'#565860',lace:'#e8edf3'};
const cache=new Map();
function r(c,x,y,w,h,k){c.fillStyle=k;c.fillRect(x,y,w,h)}
function p(c,x,y,k){r(c,x,y,1,1,k)}
function q(c,a,k){c.fillStyle=k;c.beginPath();c.moveTo(...a[0]);for(let i=1;i<a.length;i++)c.lineTo(...a[i]);c.closePath();c.fill()}
function floorShadow(c,seated,lean=0){q(c,seated?[[8+lean,27],[13+lean,26],[23+lean,26],[26+lean,28],[22+lean,30],[11+lean,30]]:[[7+lean,28],[12+lean,27],[21+lean,27],[26+lean,29],[21+lean,31],[11+lean,31]],SHADOW)}

function headSE(c,y,lean){const x=lean;
 q(c,[[7+x,7+y],[8+x,4+y],[11+x,2+y],[15+x,1+y],[20+x,2+y],[23+x,4+y],[25+x,7+y],[25+x,11+y],[23+x,13+y],[21+x,15+y],[17+x,16+y],[12+x,15+y],[9+x,13+y],[7+x,11+y],[6+x,8+y]],OUT);
 q(c,[[8+x,7+y],[9+x,4+y],[12+x,3+y],[15+x,2+y],[19+x,3+y],[22+x,4+y],[24+x,7+y],[23+x,9+y],[20+x,8+y],[19+x,6+y],[17+x,7+y],[15+x,5+y],[13+x,7+y],[11+x,6+y],[10+x,9+y],[8+x,9+y]],S.hair);
 q(c,[[10+x,4+y],[13+x,2+y],[17+x,2+y],[20+x,3+y],[18+x,4+y],[15+x,3+y],[13+x,5+y]],S.hairHi);
 r(c,9+x,6+y,2,2,S.hairMid);r(c,21+x,5+y,2,2,S.hairSh);
 q(c,[[11+x,8+y],[13+x,6+y],[18+x,6+y],[21+x,7+y],[23+x,9+y],[23+x,12+y],[21+x,14+y],[18+x,15+y],[14+x,15+y],[10+x,13+y],[9+x,10+y]],S.skin);
 q(c,[[10+x,9+y],[12+x,7+y],[15+x,7+y],[13+x,10+y],[11+x,11+y]],S.skinHi);
 q(c,[[10+x,12+y],[13+x,15+y],[18+x,15+y],[21+x,14+y],[22+x,12+y],[19+x,13+y],[16+x,14+y],[13+x,13+y]],S.skinSh);
 q(c,[[9+x,7+y],[12+x,5+y],[14+x,6+y],[16+x,4+y],[19+x,5+y],[21+x,7+y],[20+x,9+y],[18+x,7+y],[17+x,10+y],[15+x,7+y],[13+x,10+y],[11+x,8+y],[10+x,10+y],[8+x,9+y]],S.hair);
 p(c,12+x,5+y,S.hairHi);r(c,18+x,5+y,2,1,S.hairMid);
 p(c,13+x,10+y,EYE);r(c,18+x,10+y,2,2,EYE);p(c,19+x,9+y,INNER);
 p(c,22+x,10+y,S.skinHi);r(c,23+x,10+y,2,2,S.skinSh);p(c,13+x,12+y,S.cheek);p(c,20+x,12+y,S.cheek);p(c,18+x,13+y,'#9f5e55');
}

function headSW(c,y,lean){const x=lean;
 q(c,[[25+x,7+y],[24+x,4+y],[21+x,2+y],[17+x,1+y],[12+x,2+y],[9+x,4+y],[7+x,7+y],[7+x,11+y],[9+x,13+y],[11+x,15+y],[15+x,16+y],[20+x,15+y],[23+x,13+y],[25+x,11+y],[26+x,8+y]],OUT);
 q(c,[[24+x,7+y],[23+x,4+y],[20+x,3+y],[17+x,2+y],[13+x,3+y],[10+x,4+y],[8+x,7+y],[9+x,9+y],[12+x,8+y],[13+x,6+y],[15+x,7+y],[17+x,5+y],[19+x,7+y],[21+x,6+y],[22+x,9+y],[24+x,9+y]],S.hair);
 q(c,[[22+x,4+y],[19+x,2+y],[15+x,2+y],[12+x,3+y],[14+x,4+y],[17+x,3+y],[19+x,5+y]],S.hairHi);
 r(c,21+x,6+y,2,2,S.hairMid);r(c,9+x,5+y,2,2,S.hairSh);
 q(c,[[21+x,8+y],[19+x,6+y],[14+x,6+y],[11+x,7+y],[9+x,9+y],[9+x,12+y],[11+x,14+y],[14+x,15+y],[18+x,15+y],[22+x,13+y],[23+x,10+y]],S.skin);
 q(c,[[22+x,9+y],[20+x,7+y],[17+x,7+y],[19+x,10+y],[21+x,11+y]],S.skinHi);
 q(c,[[22+x,12+y],[19+x,15+y],[14+x,15+y],[11+x,14+y],[10+x,12+y],[13+x,13+y],[16+x,14+y],[19+x,13+y]],S.skinSh);
 q(c,[[23+x,7+y],[20+x,5+y],[18+x,6+y],[16+x,4+y],[13+x,5+y],[11+x,7+y],[12+x,9+y],[14+x,7+y],[15+x,10+y],[17+x,7+y],[19+x,10+y],[21+x,8+y],[22+x,10+y],[24+x,9+y]],S.hair);
 p(c,20+x,5+y,S.hairHi);r(c,12+x,5+y,2,1,S.hairMid);
 p(c,19+x,10+y,EYE);r(c,13+x,10+y,2,2,EYE);p(c,13+x,9+y,INNER);
 p(c,9+x,10+y,S.skinHi);r(c,7+x,10+y,2,2,S.skinSh);p(c,19+x,12+y,S.cheek);p(c,12+x,12+y,S.cheek);p(c,14+x,13+y,'#9f5e55');
}
function head(c,y,lean,dir){if(dir==='SW')headSW(c,y,lean);else headSE(c,y,lean)}

function torso(c,y,frame,seated,lean,dir){const x=lean,sw=dir==='SW';
 q(c,[[8+x,16+y],[11+x,14+y],[19+x,14+y],[23+x,16+y],[24+x,20+y],[22+x,23+y],[18+x,24+y],[12+x,23+y],[7+x,21+y],[7+x,17+y]],OUT);
 q(c,[[9+x,16+y],[12+x,15+y],[18+x,15+y],[21+x,16+y],[22+x,20+y],[19+x,22+y],[12+x,21+y],[9+x,20+y]],S.hood);
 q(c,sw?[[18+x,15+y],[21+x,16+y],[22+x,20+y],[19+x,22+y],[17+x,21+y]]:[[9+x,16+y],[12+x,15+y],[15+x,15+y],[14+x,20+y],[12+x,21+y],[9+x,20+y]],S.hoodHi);
 q(c,sw?[[9+x,17+y],[12+x,16+y],[12+x,21+y],[9+x,20+y]]:[[17+x,16+y],[21+x,16+y],[22+x,20+y],[19+x,22+y],[17+x,21+y]],S.hoodSh);
 r(c,12+x,17+y,6,1,S.hoodMid);
 q(c,[[13+x,15+y],[15+x,16+y],[17+x,15+y],[19+x,16+y],[18+x,18+y],[14+x,18+y]],S.shirt);p(c,14+x,19+y,S.lace);p(c,18+x,19+y,S.lace);r(c,13+x,20+y,5,1,S.hoodMid);
 const swing=seated?0:(frame===1?1:frame===3?-1:0),armBias=sw?-1:1;
 q(c,[[7+x,16+y],[9+x,17+y],[9+x+swing*armBias,21+y],[7+x+swing*armBias,24+y],[5+x,23+y],[5+x,19+y]],OUT);
 q(c,[[7+x,17+y],[8+x,18+y],[8+x+swing*armBias,21+y],[7+x+swing*armBias,22+y],[6+x,22+y],[6+x,19+y]],sw?S.hoodSh:S.hoodMid);p(c,7+x+swing*armBias,23+y,S.skinHi);
 q(c,[[21+x,16+y],[24+x,17+y],[25+x-swing*armBias,21+y],[24+x-swing*armBias,24+y],[22+x,24+y],[21+x,21+y]],OUT);
 q(c,[[22+x,17+y],[23+x,18+y],[24+x-swing*armBias,21+y],[23+x-swing*armBias,22+y],[22+x,21+y]],sw?S.hoodMid:S.hoodSh);p(c,23+x-swing*armBias,23+y,S.skinSh);
 if(seated){q(c,[[10+x,22+y],[20+x,22+y],[23+x,24+y],[23+x,27+y],[19+x,28+y],[13+x,27+y],[10+x,25+y]],OUT);q(c,[[11+x,23+y],[19+x,23+y],[21+x,24+y],[21+x,26+y],[18+x,26+y],[13+x,25+y]],S.pants);r(c,sw?17+x:12+x,23+y,3,1,S.pantsHi);r(c,20+x,26+y,5,2,OUT);r(c,21+x,26+y,3,1,S.shoe);p(c,22+x,26+y,S.shoeHi)}
}

function legs(c,y,f,seated,lean,dir){if(seated)return;const x=lean,sw=dir==='SW';
 if(f===1){q(c,[[10+x,22+y],[14+x,22+y],[14+x,26+y],[11+x,29+y],[8+x,29+y],[7+x,27+y]],OUT);q(c,[[11+x,23+y],[13+x,23+y],[13+x,26+y],[10+x,28+y],[9+x,27+y]],sw?S.pantsSh:S.pants);p(c,11+x,23+y,S.pantsHi);r(c,8+x,28+y,4,2,S.shoe);p(c,9+x,28+y,S.shoeHi);q(c,[[16+x,22+y],[20+x,22+y],[21+x,25+y],[23+x,27+y],[22+x,30+y],[18+x,30+y],[17+x,28+y]],OUT);q(c,[[17+x,23+y],[19+x,23+y],[20+x,25+y],[21+x,27+y],[20+x,28+y],[18+x,27+y]],sw?S.pants:S.pantsSh);r(c,19+x,29+y,4,1,S.shoe)}
 else if(f===3){q(c,[[10+x,22+y],[14+x,22+y],[15+x,25+y],[17+x,27+y],[16+x,30+y],[12+x,30+y],[11+x,28+y]],OUT);q(c,[[11+x,23+y],[13+x,23+y],[14+x,25+y],[15+x,27+y],[14+x,28+y],[12+x,27+y]],sw?S.pantsSh:S.pants);r(c,12+x,29+y,4,1,S.shoe);q(c,[[16+x,22+y],[20+x,22+y],[20+x,26+y],[17+x,29+y],[14+x,29+y],[13+x,27+y]],OUT);q(c,[[17+x,23+y],[19+x,23+y],[19+x,26+y],[16+x,28+y],[15+x,27+y]],sw?S.pants:S.pantsSh);r(c,14+x,28+y,4,2,S.shoe);p(c,15+x,28+y,S.shoeHi)}
 else{q(c,[[10+x,22+y],[14+x,22+y],[14+x,27+y],[12+x,30+y],[8+x,30+y]],OUT);r(c,11+x,23+y,2,5,sw?S.pantsSh:S.pants);p(c,11+x,23+y,S.pantsHi);r(c,8+x,29+y,4,1,S.shoe);q(c,[[16+x,22+y],[20+x,22+y],[20+x,27+y],[18+x,30+y],[14+x,30+y]],OUT);r(c,17+x,23+y,2,5,sw?S.pants:S.pantsSh);r(c,15+x,29+y,4,1,S.shoe)}
}

function draw(c,dir,frame,seated){const f=frame%4;c.clearRect(0,0,SIZE,SIZE);const lean=seated?0:(f===1?1:f===3?-1:0),bob=seated?0:(f===1||f===3?-1:0);floorShadow(c,seated,lean);head(c,bob,lean,dir);torso(c,bob,f,seated,lean,dir);legs(c,bob,f,seated,lean,dir)}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false,variant=0){const safeDir=dir==='SW'?'SW':'SE',key=`student-master-v4:${safeDir}:${frame%4}:${!!seated}`;if(cache.has(key))return cache.get(key);const cv=document.createElement('canvas');cv.width=SIZE;cv.height=SIZE;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;draw(c,safeDir,frame,seated);const u=cv.toDataURL('image/png');cache.set(key,u);return u}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return dx-dy>=0?'SE':'SW'}
