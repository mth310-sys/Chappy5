export const STUDENT_SIZE=32;

export const STUDENT_PALETTE={
  O:'#241b18', // outline
  h:'#35251d', // hair shadow
  H:'#53392a', // hair
  M:'#6b4a36', // hair mid
  L:'#896349', // hair light
  s:'#d8926f', // skin shadow
  S:'#f2c69e', // skin
  I:'#ffe2bd', // skin light
  e:'#171514', // eye
  m:'#965a52', // mouth
  b:'#1c436f', // hoodie shadow
  B:'#2e67a8', // hoodie
  C:'#3e79b8', // hoodie mid
  D:'#5d94cf', // hoodie light
  W:'#f4f1ea', // inner shirt
  p:'#26384b', // pants shadow
  P:'#354c64', // pants
  Q:'#4d687f', // pants light
  k:'#24262b', // shoe
  K:'#62656d', // shoe light
  w:'#e8edf3'  // lace
};

const blank=()=>Array.from({length:STUDENT_SIZE},()=>Array(STUDENT_SIZE).fill('.'));
const run=(g,y,x1,x2,c)=>{for(let x=x1;x<=x2;x++)if(x>=0&&x<STUDENT_SIZE&&y>=0&&y<STUDENT_SIZE)g[y][x]=c};
const px=(g,x,y,c)=>{if(x>=0&&x<STUDENT_SIZE&&y>=0&&y<STUDENT_SIZE)g[y][x]=c};

function headSE(g,dx=0,dy=0){
  const r=(y,a,b,c)=>run(g,y+dy,a+dx,b+dx,c),p=(x,y,c)=>px(g,x+dx,y+dy,c);
  r(2,13,19,'O');r(3,11,21,'O');r(4,9,23,'O');r(5,8,24,'O');r(6,7,25,'O');r(7,7,25,'O');r(8,7,25,'O');r(9,7,25,'O');r(10,8,25,'O');r(11,8,24,'O');r(12,9,23,'O');r(13,10,22,'O');r(14,12,21,'O');r(15,14,19,'O');
  r(3,14,18,'L');r(4,11,20,'H');r(5,9,22,'H');r(6,8,24,'H');r(7,8,23,'H');r(8,8,21,'H');r(4,19,22,'M');r(5,21,23,'h');r(6,23,24,'h');r(7,22,24,'h');
  r(8,11,22,'S');r(9,10,23,'S');r(10,10,23,'S');r(11,10,23,'S');r(12,11,22,'S');r(13,12,21,'S');r(14,14,19,'s');
  r(8,11,14,'H');r(7,13,16,'H');r(6,16,18,'H');r(7,18,20,'H');r(8,20,22,'H');p(13,9,'H');p(17,8,'H');p(20,9,'H');
  p(13,10,'e');r(10,18,19,'e');p(20,11,'I');p(22,11,'I');p(13,12,'s');p(20,12,'s');r(13,17,18,'m');
}

function headSW(g,dx=0,dy=0){
  const r=(y,a,b,c)=>run(g,y+dy,a+dx,b+dx,c),p=(x,y,c)=>px(g,x+dx,y+dy,c);
  r(2,13,19,'O');r(3,11,21,'O');r(4,9,23,'O');r(5,8,24,'O');r(6,7,25,'O');r(7,7,25,'O');r(8,7,25,'O');r(9,7,25,'O');r(10,7,24,'O');r(11,8,24,'O');r(12,9,23,'O');r(13,10,22,'O');r(14,11,20,'O');r(15,13,18,'O');
  r(3,14,18,'L');r(4,12,21,'H');r(5,10,23,'H');r(6,8,24,'H');r(7,9,24,'H');r(8,11,24,'H');r(4,10,13,'M');r(5,9,11,'h');r(6,8,10,'h');r(7,8,10,'h');
  r(8,9,20,'S');r(9,9,21,'S');r(10,9,22,'S');r(11,9,22,'S');r(12,10,21,'S');r(13,11,20,'S');r(14,13,18,'s');
  r(8,18,21,'H');r(7,16,19,'H');r(6,14,16,'H');r(7,12,14,'H');r(8,10,12,'H');p(19,9,'H');p(15,8,'H');p(12,9,'H');
  p(19,10,'e');r(10,13,14,'e');p(12,11,'I');p(9,11,'I');p(19,12,'s');p(12,12,'s');r(13,13,14,'m');
}

function torso(g,dir,dx=0,dy=0,arm=0,seated=false){
  const sw=dir==='SW',r=(y,a,b,c)=>run(g,y+dy,a+dx,b+dx,c),p=(x,y,c)=>px(g,x+dx,y+dy,c);
  r(15,12,20,'O');r(16,10,22,'O');r(17,9,23,'O');r(18,9,23,'O');r(19,9,23,'O');r(20,10,22,'O');r(21,11,21,'O');r(22,12,20,'O');r(23,13,19,'O');
  r(16,12,20,'B');r(17,11,21,'B');r(18,10,22,'B');r(19,10,22,'B');r(20,11,21,'B');r(21,12,20,'B');r(22,13,19,'C');
  if(sw){r(16,18,20,'D');r(17,19,21,'D');r(18,20,21,'C');r(17,11,13,'b');r(18,10,12,'b');}
  else {r(16,12,14,'D');r(17,11,13,'D');r(18,11,12,'C');r(17,19,21,'b');r(18,20,22,'b');}
  r(16,15,17,'W');r(17,14,18,'W');p(14,19,'w');p(18,19,'w');

  const la=arm,ra=-arm;
  // left arm: shoulder -> elbow -> hand, all integer pixels
  r(17,7+la,10+la,'O');r(18,6+la,10+la,'O');r(19,6+la,9+la,'O');r(20,6+la,8+la,'O');r(21,5+la,8+la,'O');r(22,5+la,7+la,'O');
  r(18,7+la,9+la,sw?'b':'C');r(19,7+la,8+la,sw?'b':'C');r(20,7+la,7+la,sw?'b':'C');r(21,6+la,7+la,sw?'b':'C');p(6+la,22,'I');
  // right arm
  r(17,22+ra,24+ra,'O');r(18,22+ra,25+ra,'O');r(19,23+ra,26+ra,'O');r(20,24+ra,26+ra,'O');r(21,24+ra,27+ra,'O');r(22,25+ra,27+ra,'O');
  r(18,23+ra,24+ra,sw?'C':'b');r(19,24+ra,25+ra,sw?'C':'b');r(20,25+ra,25+ra,sw?'C':'b');r(21,25+ra,26+ra,sw?'C':'b');p(26+ra,22,'s');

  if(seated){r(23,11,21,'O');r(24,10,23,'O');r(25,10,24,'O');r(26,11,24,'O');r(27,13,24,'O');r(24,12,20,'P');r(25,12,22,'P');r(26,14,21,'P');r(27,19,23,'k');p(20,27,'K');}
}

function legs(g,dir,phase,dx=0,dy=0){
  const sw=dir==='SW',r=(y,a,b,c)=>run(g,y+dy,a+dx,b+dx,c),p=(x,y,c)=>px(g,x+dx,y+dy,c);
  r(23,11,20,'O');r(24,11,20,'P');r(24,12,18,'Q');
  if(phase===1){
    r(25,10,14,'O');r(26,9,13,'O');r(27,8,12,'O');r(28,7,11,'O');r(29,7,11,'k');r(25,11,13,sw?'p':'P');r(26,10,12,sw?'p':'P');r(27,9,11,sw?'p':'P');p(8,28,'K');
    r(25,17,21,'O');r(26,18,22,'O');r(27,19,23,'O');r(28,20,24,'O');r(29,20,24,'k');r(25,18,20,sw?'P':'p');r(26,19,21,sw?'P':'p');r(27,20,22,sw?'P':'p');p(21,28,'K');
  }else if(phase===3){
    r(25,10,14,'O');r(26,11,15,'O');r(27,12,16,'O');r(28,13,17,'O');r(29,13,17,'k');r(25,11,13,sw?'p':'P');r(26,12,14,sw?'p':'P');r(27,13,15,sw?'p':'P');p(14,28,'K');
    r(25,17,21,'O');r(26,16,20,'O');r(27,15,19,'O');r(28,14,18,'O');r(29,14,18,'k');r(25,18,20,sw?'P':'p');r(26,17,19,sw?'P':'p');r(27,16,18,sw?'P':'p');p(15,28,'K');
  }else{
    r(25,11,15,'O');r(26,11,15,'O');r(27,11,15,'O');r(28,10,14,'O');r(29,9,14,'k');r(25,12,14,sw?'p':'P');r(26,12,14,sw?'p':'P');r(27,12,14,sw?'p':'P');p(10,28,'K');
    r(25,17,21,'O');r(26,17,21,'O');r(27,17,21,'O');r(28,18,22,'O');r(29,18,23,'k');r(25,18,20,sw?'P':'p');r(26,18,20,sw?'P':'p');r(27,18,20,sw?'P':'p');p(19,28,'K');
  }
}

function build(dir,frame,seated){
  const g=blank();
  const phase=frame%4;
  const dx=seated?0:(phase===1?1:phase===3?-1:0);
  const dy=seated?0:((phase===1||phase===3)?-1:0);
  if(seated){torso(g,dir,0,0,0,true);(dir==='SW'?headSW:headSE)(g);}
  else{
    legs(g,dir,phase,dx,dy);
    torso(g,dir,dx,dy,phase===1?1:phase===3?-1:0,false);
    (dir==='SW'?headSW:headSE)(g,dx,dy);
  }
  return g.map(row=>row.join(''));
}

export const STUDENT_FRAMES={
  SE:{idle:build('SE',0,false),walk:[0,1,2,3].map(f=>build('SE',f,false)),seated:build('SE',0,true)},
  SW:{idle:build('SW',0,false),walk:[0,1,2,3].map(f=>build('SW',f,false)),seated:build('SW',0,true)}
};
