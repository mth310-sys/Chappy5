const SIZE=32;
const OUT='#241b18', EYE='#171514', SHADOW='#6b574655';
const S={hair:'#53392a',hairHi:'#896349',hairMid:'#6b4a36',hairSh:'#35251d',skin:'#f2c69e',skinHi:'#ffe2bd',skinSh:'#d8926f',cheek:'#df9184',hood:'#2e67a8',hoodHi:'#5d94cf',hoodMid:'#3e79b8',hoodSh:'#1c436f',shirt:'#f4f1ea',pants:'#354c64',pantsHi:'#4d687f',pantsSh:'#26384b',shoe:'#24262b',shoeHi:'#62656d',lace:'#e8edf3',mouth:'#965a52'};
const cache=new Map();
function r(c,x,y,w,h,k){c.fillStyle=k;c.fillRect(x,y,w,h)}
function p(c,x,y,k){r(c,x,y,1,1,k)}
function q(c,a,k){c.fillStyle=k;c.beginPath();c.moveTo(a[0][0],a[0][1]);for(let i=1;i<a.length;i++)c.lineTo(a[i][0],a[i][1]);c.closePath();c.fill()}
function shadow(c,seated,x=0){q(c,seated?[[9+x,27],[13+x,26],[22+x,26],[25+x,28],[21+x,30],[11+x,30]]:[[8+x,29],[12+x,28],[21+x,28],[25+x,30],[21+x,31],[11+x,31]],SHADOW)}

function headSE(c,dy=0,dx=0){
  const X=n=>n+dx,Y=n=>n+dy;
  q(c,[[X(8),Y(8)],[X(9),Y(5)],[X(11),Y(3)],[X(14),Y(1)],[X(18),Y(1)],[X(22),Y(3)],[X(24),Y(5)],[X(25),Y(8)],[X(24),Y(10)],[X(25),Y(11)],[X(23),Y(12)],[X(22),Y(14)],[X(19),Y(16)],[X(15),Y(16)],[X(12),Y(15)],[X(10),Y(13)],[X(8),Y(11)],[X(7),Y(9)]],OUT);
  q(c,[[X(9),Y(8)],[X(10),Y(5)],[X(12),Y(3)],[X(15),Y(2)],[X(18),Y(2)],[X(21),Y(3)],[X(23),Y(5)],[X(24),Y(8)],[X(22),Y(8)],[X(21),Y(6)],[X(19),Y(7)],[X(18),Y(5)],[X(16),Y(7)],[X(14),Y(5)],[X(12),Y(8)],[X(10),Y(9)]],S.hair);
  q(c,[[X(11),Y(5)],[X(13),Y(3)],[X(16),Y(2)],[X(19),Y(3)],[X(17),Y(4)],[X(14),Y(4)],[X(13),Y(6)]],S.hairHi);
  q(c,[[X(21),Y(4)],[X(23),Y(6)],[X(23),Y(8)],[X(21),Y(7)]],S.hairSh);
  q(c,[[X(11),Y(8)],[X(13),Y(7)],[X(17),Y(6)],[X(21),Y(7)],[X(23),Y(9)],[X(23),Y(11)],[X(24),Y(11)],[X(23),Y(13)],[X(21),Y(14)],[X(19),Y(15)],[X(15),Y(15)],[X(12),Y(14)],[X(10),Y(12)],[X(9),Y(10)]],S.skin);
  q(c,[[X(10),Y(9)],[X(12),Y(8)],[X(15),Y(7)],[X(14),Y(10)],[X(11),Y(11)]],S.skinHi);
  q(c,[[X(11),Y(12)],[X(13),Y(14)],[X(16),Y(15)],[X(19),Y(15)],[X(22),Y(13)],[X(22),Y(12)],[X(19),Y(13)],[X(16),Y(14)],[X(13),Y(13)]],S.skinSh);
  q(c,[[X(10),Y(7)],[X(12),Y(5)],[X(14),Y(6)],[X(16),Y(4)],[X(18),Y(5)],[X(21),Y(7)],[X(20),Y(9)],[X(18),Y(7)],[X(17),Y(10)],[X(15),Y(7)],[X(13),Y(10)],[X(11),Y(8)],[X(10),Y(9)]],S.hair);
  p(c,X(13),Y(5),S.hairHi);r(c,X(18),Y(5),2,1,S.hairMid);
  p(c,X(13),Y(10),EYE);r(c,X(18),Y(10),2,1,EYE);p(c,X(20),Y(11),S.skinHi);p(c,X(23),Y(11),S.skinHi);
  p(c,X(13),Y(12),S.cheek);p(c,X(20),Y(12),S.cheek);r(c,X(17),Y(13),2,1,S.mouth);
}

function headSW(c,dy=0,dx=0){
  const X=n=>n+dx,Y=n=>n+dy;
  q(c,[[X(24),Y(8)],[X(23),Y(5)],[X(21),Y(3)],[X(18),Y(1)],[X(14),Y(1)],[X(10),Y(3)],[X(8),Y(5)],[X(7),Y(8)],[X(8),Y(10)],[X(7),Y(11)],[X(9),Y(12)],[X(10),Y(14)],[X(13),Y(16)],[X(17),Y(16)],[X(20),Y(15)],[X(22),Y(13)],[X(24),Y(11)],[X(25),Y(9)]],OUT);
  q(c,[[X(23),Y(8)],[X(22),Y(5)],[X(20),Y(3)],[X(17),Y(2)],[X(14),Y(2)],[X(11),Y(3)],[X(9),Y(5)],[X(8),Y(8)],[X(10),Y(8)],[X(11),Y(6)],[X(13),Y(7)],[X(14),Y(5)],[X(16),Y(7)],[X(18),Y(5)],[X(20),Y(8)],[X(22),Y(9)]],S.hair);
  q(c,[[X(21),Y(5)],[X(19),Y(3)],[X(16),Y(2)],[X(13),Y(3)],[X(15),Y(4)],[X(18),Y(4)],[X(19),Y(6)]],S.hairHi);
  q(c,[[X(11),Y(4)],[X(9),Y(6)],[X(9),Y(8)],[X(11),Y(7)]],S.hairSh);
  q(c,[[X(21),Y(8)],[X(19),Y(7)],[X(15),Y(6)],[X(11),Y(7)],[X(9),Y(9)],[X(9),Y(11)],[X(8),Y(11)],[X(9),Y(13)],[X(11),Y(14)],[X(13),Y(15)],[X(17),Y(15)],[X(20),Y(14)],[X(22),Y(12)],[X(23),Y(10)]],S.skin);
  q(c,[[X(22),Y(9)],[X(20),Y(8)],[X(17),Y(7)],[X(18),Y(10)],[X(21),Y(11)]],S.skinHi);
  q(c,[[X(21),Y(12)],[X(19),Y(14)],[X(16),Y(15)],[X(13),Y(15)],[X(10),Y(13)],[X(10),Y(12)],[X(13),Y(13)],[X(16),Y(14)],[X(19),Y(13)]],S.skinSh);
  q(c,[[X(22),Y(7)],[X(20),Y(5)],[X(18),Y(6)],[X(16),Y(4)],[X(14),Y(5)],[X(11),Y(7)],[X(12),Y(9)],[X(14),Y(7)],[X(15),Y(10)],[X(17),Y(7)],[X(19),Y(10)],[X(21),Y(8)],[X(22),Y(9)]],S.hair);
  p(c,X(19),Y(5),S.hairHi);r(c,X(12),Y(5),2,1,S.hairMid);
  p(c,X(19),Y(10),EYE);r(c,X(13),Y(10),2,1,EYE);p(c,X(12),Y(11),S.skinHi);p(c,X(8),Y(11),S.skinHi);
  p(c,X(19),Y(12),S.cheek);p(c,X(12),Y(12),S.cheek);r(c,X(13),Y(13),2,1,S.mouth);
}
function head(c,dy,dx,dir){(dir==='SW'?headSW:headSE)(c,dy,dx)}

function torso(c,dy,frame,seated,dx,dir){
  const sw=dir==='SW', X=n=>n+dx,Y=n=>n+dy;
  q(c,[[X(10),Y(15)],[X(13),Y(14)],[X(19),Y(14)],[X(22),Y(16)],[X(23),Y(20)],[X(21),Y(23)],[X(18),Y(24)],[X(13),Y(23)],[X(9),Y(21)],[X(8),Y(17)]],OUT);
  q(c,[[X(11),Y(16)],[X(13),Y(15)],[X(18),Y(15)],[X(21),Y(16)],[X(22),Y(20)],[X(20),Y(22)],[X(14),Y(22)],[X(10),Y(20)],[X(9),Y(17)]],S.hood);
  q(c,sw?[[X(18),Y(15)],[X(21),Y(16)],[X(22),Y(20)],[X(20),Y(22)],[X(18),Y(21)]]:[[X(10),Y(17)],[X(13),Y(15)],[X(15),Y(15)],[X(14),Y(21)],[X(11),Y(20)]],S.hoodHi);
  q(c,sw?[[X(10),Y(17)],[X(13),Y(16)],[X(13),Y(21)],[X(11),Y(20)]]:[[X(18),Y(16)],[X(21),Y(16)],[X(22),Y(20)],[X(20),Y(22)],[X(18),Y(21)]],S.hoodSh);
  q(c,[[X(13),Y(15)],[X(15),Y(16)],[X(17),Y(15)],[X(19),Y(16)],[X(18),Y(18)],[X(14),Y(18)]],S.shirt);
  p(c,X(14),Y(19),S.lace);p(c,X(18),Y(19),S.lace);r(c,X(14),Y(20),4,1,S.hoodMid);
  const swing=seated?0:(frame===1?1:frame===3?-1:0);
  const l=swing*(sw?-1:1), rr=-l;
  q(c,[[X(9),Y(16)],[X(11),Y(17)],[X(10+l),Y(20)],[X(8+l),Y(23)],[X(6+l),Y(23)],[X(6),Y(20)],[X(7),Y(18)]],OUT);
  q(c,[[X(9),Y(17)],[X(10),Y(18)],[X(9+l),Y(20)],[X(8+l),Y(22)],[X(7+l),Y(22)],[X(7),Y(20)]],sw?S.hoodSh:S.hoodMid);p(c,X(7+l),Y(23),S.skinHi);
  q(c,[[X(21),Y(16)],[X(23),Y(17)],[X(25),Y(20)],[X(24+rr),Y(23)],[X(22+rr),Y(24)],[X(21+rr),Y(22)],[X(22),Y(19)]],OUT);
  q(c,[[X(22),Y(17)],[X(23),Y(18)],[X(24),Y(20)],[X(23+rr),Y(22)],[X(22+rr),Y(22)],[X(22),Y(20)]],sw?S.hoodMid:S.hoodSh);p(c,X(23+rr),Y(23),S.skinSh);
  if(seated){
    q(c,[[X(11),Y(22)],[X(20),Y(22)],[X(23),Y(24)],[X(23),Y(27)],[X(19),Y(28)],[X(13),Y(27)],[X(10),Y(25)]],OUT);
    q(c,[[X(12),Y(23)],[X(19),Y(23)],[X(21),Y(24)],[X(21),Y(26)],[X(18),Y(26)],[X(13),Y(25)]],S.pants);
    r(c,sw?17:12,Y(23),3,1,S.pantsHi);r(c,X(20),Y(26),4,2,S.shoe);p(c,X(21),Y(26),S.shoeHi);
  }
}

function legs(c,dy,f,seated,dx,dir){
  if(seated)return; const sw=dir==='SW',X=n=>n+dx,Y=n=>n+dy;
  q(c,[[X(11),Y(22)],[X(20),Y(22)],[X(20),Y(24)],[X(18),Y(25)],[X(13),Y(25)],[X(11),Y(24)]],OUT);
  r(c,X(12),Y(23),7,2,S.pants);
  if(f===1){
    q(c,[[X(11),Y(24)],[X(15),Y(24)],[X(14),Y(27)],[X(11),Y(29)],[X(8),Y(29)],[X(8),Y(27)]],OUT);
    q(c,[[X(12),Y(25)],[X(14),Y(25)],[X(13),Y(27)],[X(10),Y(28)],[X(9),Y(27)]],sw?S.pantsSh:S.pants);r(c,X(8),Y(28),4,2,S.shoe);p(c,X(9),Y(28),S.shoeHi);
    q(c,[[X(17),Y(24)],[X(20),Y(24)],[X(21),Y(26)],[X(23),Y(28)],[X(22),Y(30)],[X(18),Y(30)],[X(17),Y(28)]],OUT);
    q(c,[[X(18),Y(25)],[X(19),Y(25)],[X(20),Y(27)],[X(21),Y(28)],[X(20),Y(29)],[X(18),Y(28)]],sw?S.pants:S.pantsSh);r(c,X(19),Y(29),4,1,S.shoe);
  }else if(f===3){
    q(c,[[X(11),Y(24)],[X(14),Y(24)],[X(15),Y(26)],[X(17),Y(28)],[X(16),Y(30)],[X(12),Y(30)],[X(11),Y(28)]],OUT);
    q(c,[[X(12),Y(25)],[X(13),Y(25)],[X(14),Y(27)],[X(15),Y(28)],[X(14),Y(29)],[X(12),Y(28)]],sw?S.pantsSh:S.pants);r(c,X(12),Y(29),4,1,S.shoe);
    q(c,[[X(17),Y(24)],[X(20),Y(24)],[X(20),Y(27)],[X(17),Y(29)],[X(14),Y(29)],[X(13),Y(27)]],OUT);
    q(c,[[X(18),Y(25)],[X(19),Y(25)],[X(19),Y(27)],[X(16),Y(28)],[X(15),Y(27)]],sw?S.pants:S.pantsSh);r(c,X(14),Y(28),4,2,S.shoe);p(c,X(15),Y(28),S.shoeHi);
  }else{
    q(c,[[X(11),Y(24)],[X(15),Y(24)],[X(14),Y(28)],[X(12),Y(30)],[X(8),Y(30)],[X(9),Y(27)]],OUT);
    r(c,X(11),Y(25),3,4,sw?S.pantsSh:S.pants);r(c,X(8),Y(29),4,1,S.shoe);p(c,X(11),Y(25),S.pantsHi);
    q(c,[[X(17),Y(24)],[X(20),Y(24)],[X(20),Y(28)],[X(18),Y(30)],[X(14),Y(30)],[X(16),Y(27)]],OUT);
    r(c,X(17),Y(25),2,4,sw?S.pants:S.pantsSh);r(c,X(15),Y(29),4,1,S.shoe);
  }
}

function draw(c,dir,frame,seated){
  const f=((frame%4)+4)%4;
  c.clearRect(0,0,SIZE,SIZE);
  const dx=seated?0:(f===1?1:f===3?-1:0);
  const dy=seated?0:(f===1||f===3?-1:0);
  shadow(c,seated,dx);head(c,dy,dx,dir);torso(c,dy,f,seated,dx,dir);legs(c,dy,f,seated,dx,dir);
}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false,variant=0){
  const safeDir=dir==='SW'?'SW':'SE',f=((frame%4)+4)%4,key=`student-master-v6:${safeDir}:${f}:${!!seated}`;
  if(cache.has(key))return cache.get(key);
  const cv=document.createElement('canvas');cv.width=SIZE;cv.height=SIZE;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;draw(c,safeDir,f,seated);
  const u=cv.toDataURL('image/png');cache.set(key,u);return u;
}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return dx-dy>=0?'SE':'SW'}
