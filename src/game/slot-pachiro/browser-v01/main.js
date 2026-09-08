const TILE=24,MAP_W=48,MAP_H=32;
const px=(gx)=>gx*TILE, py=(gy)=>gy*TILE;

const facilities=[
 {type:'counter',label:'カウンター',x:7,y:1,w:8,h:3,color:0x9a633f},
 {type:'toiletM',label:'男子トイレ',x:32,y:1,w:4,h:5,color:0x4174bd},
 {type:'toiletF',label:'女子トイレ',x:37,y:1,w:4,h:5,color:0xc95883},
 {type:'smoking',label:'喫煙所',x:42,y:1,w:5,h:6,color:0x59636e},
 {type:'vending',label:'自販機',x:44,y:11,w:2,h:3,color:0x287ac2},
 {type:'entrance',label:'入口',x:20,y:29,w:8,h:3,color:0xb7322d}
];

const islands=[
 {id:'I01',x:3,y:9},{id:'I02',x:13,y:9},{id:'I03',x:23,y:9},{id:'I04',x:33,y:9}
];

class MainScene extends Phaser.Scene{
 constructor(){super('main')}

 create(){
  this.world=this.add.container(0,0);
  this.drawFloor();
  this.drawWalls();
  this.drawFacilities();
  this.machineData=this.drawIslands();
  this.createPlayer(24,27);

  this.keys=this.input.keyboard.createCursorKeys();
  this.keyWASD=this.input.keyboard.addKeys('W,A,S,D');
  this.setupTouch();

  this.cameras.main.setBounds(0,0,MAP_W*TILE,MAP_H*TILE);
  this.cameras.main.setZoom(1.15);
  this.cameras.main.startFollow(this.playerAnchor,true,0.12,0.12);
  this.cameras.main.setDeadzone(110,80);

  this.status=this.add.text(8,this.scale.height-26,'',{
   fontFamily:'sans-serif',fontSize:'11px',color:'#fff',
   backgroundColor:'rgba(0,0,0,.58)',padding:{x:5,y:3}
  }).setScrollFactor(0).setDepth(99999);

  this.scale.on('resize',size=>this.status.setY(size.height-26));
 }

 drawFloor(){
  const g=this.add.graphics();
  g.fillStyle(0xe7dfcf,1);g.fillRect(0,0,MAP_W*TILE,MAP_H*TILE);
  for(let y=0;y<MAP_H;y++)for(let x=0;x<MAP_W;x++){
   if((x+y)%2===0){g.fillStyle(0xf0e9dc,.22);g.fillRect(px(x),py(y),TILE,TILE)}
  }
  g.lineStyle(1,0xcfc5b2,.42);
  for(let x=0;x<=MAP_W;x++)g.lineBetween(x*TILE,0,x*TILE,MAP_H*TILE);
  for(let y=0;y<=MAP_H;y++)g.lineBetween(0,y*TILE,MAP_W*TILE,y*TILE);
  this.world.add(g);
 }

 drawWalls(){
  const g=this.add.graphics(),w=MAP_W*TILE,h=MAP_H*TILE;
  g.fillStyle(0x30353b,1);g.fillRect(0,0,w,8);g.fillRect(0,0,8,h);g.fillRect(w-8,0,8,h);g.fillRect(0,h-8,w,8);
  g.fillStyle(0x626a73,1);g.fillRect(8,8,w-16,5);g.fillRect(8,8,5,h-16);g.fillRect(w-13,8,5,h-16);
  g.fillStyle(0x15191d,.45);g.fillRect(13,13,w-26,4);
  this.world.add(g);
 }

 drawSign(x,y,text){
  const width=Math.max(48,text.length*9+18);
  const shadow=this.add.rectangle(x+2,y+3,width,20,0x000000,.22).setDepth(9000);
  const bg=this.add.rectangle(x,y,width,20,0x17191c,.96).setStrokeStyle(1,0x4c4f54).setDepth(9001);
  const t=this.add.text(x,y,text,{fontFamily:'sans-serif',fontSize:'10px',fontStyle:'bold',color:'#fff'}).setOrigin(.5).setDepth(9002);
  this.world.add([shadow,bg,t]);
 }

 drawPlant(gx,gy){
  const x=px(gx)+TILE/2,y=py(gy)+TILE/2;
  const c=this.add.container(x,y).setDepth(y+30);
  const shadow=this.add.ellipse(0,8,16,6,0x000000,.18);
  const pot=this.add.rectangle(0,5,10,8,0x80613f).setStrokeStyle(1,0x4b3724);
  const leaf1=this.add.circle(-3,-2,5,0x4c8448).setStrokeStyle(1,0x284b29);
  const leaf2=this.add.circle(3,-3,5,0x5d9654).setStrokeStyle(1,0x284b29);
  const leaf3=this.add.circle(0,-7,5,0x3e753c).setStrokeStyle(1,0x284b29);
  c.add([shadow,pot,leaf1,leaf2,leaf3]);this.world.add(c);
 }

 drawCounter(){
  const f=facilities.find(v=>v.type==='counter');
  const x=px(f.x),y=py(f.y),w=f.w*TILE,h=f.h*TILE;
  const g=this.add.graphics();
  g.fillStyle(0x000000,.18);g.fillRect(x+6,y+8,w,h);
  g.fillStyle(0xb77a48,1);g.fillRect(x,y+8,w,h-8);
  g.fillStyle(0xd49a62,1);g.fillRect(x,y,w,12);
  g.fillStyle(0x6d3f25,1);g.fillRect(x,y+h-8,w,8);
  g.lineStyle(2,0x4b2f20,1);g.strokeRect(x,y,w,h);this.world.add(g);
  for(let i=0;i<3;i++){
   const sx=x+28+i*46;
   const mon=this.add.rectangle(sx,y+15,12,9,0x1f2e35).setStrokeStyle(1,0x101416).setDepth(y+h+5);
   const base=this.add.rectangle(sx,y+22,8,2,0x202020).setDepth(y+h+5);this.world.add([mon,base]);
  }
  const clerk=this.add.container(x+w/2,y+17).setDepth(y+h+10);
  clerk.add([this.add.circle(0,-7,5,0xe8bf99).setStrokeStyle(1,0x71523d),this.add.rectangle(0,3,11,15,0x2b78ad).setStrokeStyle(1,0x163d59),this.add.rectangle(0,0,7,4,0xffffff,.8)]);
  this.world.add(clerk);this.drawSign(x+w/2,y-6,'カウンター');
  this.drawPlant(f.x-1,f.y+1);this.drawPlant(f.x+f.w,f.y+1);
 }

 drawRoom(f){
  const x=px(f.x),y=py(f.y),w=f.w*TILE,h=f.h*TILE;
  const g=this.add.graphics();
  g.fillStyle(0x000000,.16);g.fillRect(x+5,y+7,w,h);
  g.fillStyle(0xf3eee4,1);g.fillRect(x,y,w,h);
  g.fillStyle(0xc9c2b5,1);g.fillRect(x,y,w,7);g.fillRect(x,y,7,h);g.fillRect(x+w-7,y,7,h);
  g.lineStyle(2,0x777269,.9);g.strokeRect(x,y,w,h);this.world.add(g);
  const doorColor=f.type==='toiletM'?0x2e7ac4:f.type==='toiletF'?0xd65668:0x31463c;
  const door=this.add.rectangle(x+w/2,y+h-19,18,30,doorColor).setStrokeStyle(2,0x303030).setDepth(y+h+10);
  const knob=this.add.circle(x+w/2+5,y+h-19,1.5,0xf5e7b1).setDepth(y+h+11);this.world.add([door,knob]);
  this.drawSign(x+w/2,y+13,f.label);
 }

 drawVending(){
  const f=facilities.find(v=>v.type==='vending');
  for(let i=0;i<2;i++){
   const x=px(f.x+i)+TILE/2,y=py(f.y)+TILE/2+8;
   const c=this.add.container(x,y).setDepth(y+30);
   c.add([this.add.rectangle(0,0,18,34,i===0?0x317ec3:0xc7473f).setStrokeStyle(1,0x202020),this.add.rectangle(0,-6,12,11,0xe7f3ff).setStrokeStyle(1,0x33505f),this.add.rectangle(0,9,10,4,0x1f2a30),this.add.rectangle(5,-15,3,3,0xffffff,.8)]);
   this.world.add(c);
  }
  this.drawSign(px(f.x+1),py(f.y)-5,'自販機');
 }

 drawEntrance(){
  const f=facilities.find(v=>v.type==='entrance');
  const x=px(f.x),y=py(f.y),w=f.w*TILE,h=f.h*TILE;
  const g=this.add.graphics();
  g.fillStyle(0xb72f2b,.92);g.fillRect(x+20,y+h-18,w-40,18);
  g.fillStyle(0x5f6d76,1);g.fillRect(x+26,y+5,8,h-8);g.fillRect(x+w-34,y+5,8,h-8);g.fillRect(x+26,y+5,w-52,7);
  g.fillStyle(0xbfe4f4,.55);g.fillRect(x+34,y+12,w-68,h-20);
  g.lineStyle(1,0x738d9c,1);g.lineBetween(x+w/2,y+12,x+w/2,y+h-8);
  this.world.add(g);this.drawSign(x+w/2,y+4,'入口');
 }

 drawFacilities(){
  this.drawCounter();
  facilities.filter(f=>['toiletM','toiletF','smoking'].includes(f.type)).forEach(f=>this.drawRoom(f));
  this.drawVending();this.drawEntrance();
 }

 drawMachine(gx,gy,side,color){
  const x=px(gx),y=py(gy),cx=x+TILE/2;
  const machine=this.add.container(cx,y+TILE/2);
  const accent=Phaser.Display.Color.IntegerToColor(color).brighten(24).color;
  const dark=Phaser.Display.Color.IntegerToColor(color).darken(32).color;
  const chairX=side==='L'?-13:13;

  const floorShadow=this.add.ellipse(side==='L'?-2:2,10,24,8,0x000000,.22);
  const pedestal=this.add.rectangle(0,8,17,5,0x23262a).setStrokeStyle(1,0x111315);
  const cabinet=this.add.rectangle(0,-2,18,22,dark).setStrokeStyle(1,0x141619);
  const sideRail=this.add.rectangle(side==='L'?7:-7,-2,3,20,accent,.9);
  const upper=this.add.rectangle(0,-9,15,7,color).setStrokeStyle(1,0x1e2124);
  const topCap=this.add.polygon(0,-16,[-9,5,0,0,9,5,0,9],accent,1).setStrokeStyle(1,0x1d1f22);
  const topLamp=this.add.rectangle(0,-12,11,2,0xffe98d,.95);
  const screenFrame=this.add.rectangle(0,-5,12,7,0x15191d).setStrokeStyle(1,0x080a0b);
  const screen=this.add.rectangle(0,-5,9,4,0x76d9ff).setStrokeStyle(1,0x285164);
  const reelFrame=this.add.rectangle(0,1,13,7,0x2a2d31).setStrokeStyle(1,0x111315);
  const reel=this.add.rectangle(0,1,10,5,0xf5f1df);
  const reelLine1=this.add.rectangle(-3,1,1,5,0xb9b7ae,.8);
  const reelLine2=this.add.rectangle(3,1,1,5,0xb9b7ae,.8);
  const controls=this.add.rectangle(0,5,12,2,0x25292d);
  const button1=this.add.circle(-3,5,1.2,0xff4f4f);
  const button2=this.add.circle(0,5,1.2,0x58d16b);
  const button3=this.add.circle(3,5,1.2,0x4d8dff);
  const tray=this.add.rectangle(0,7,13,3,0x4a4e53).setStrokeStyle(1,0x1a1c1f);

  const chair=this.add.container(chairX,6);
  const chairShadow=this.add.ellipse(0,8,12,5,0x000000,.18);
  const seat=this.add.ellipse(0,1,11,8,0x9c2f2f).setStrokeStyle(1,0x2b1717);
  const back=this.add.rectangle(side==='L'?-2:2,-3,8,7,0xb13b3b).setStrokeStyle(1,0x321919);
  const stem=this.add.rectangle(0,6,2,8,0x696c70);
  const foot=this.add.rectangle(0,10,9,2,0x34373a);
  chair.add([chairShadow,stem,foot,back,seat]);

  machine.add([floorShadow,pedestal,cabinet,sideRail,upper,topCap,topLamp,screenFrame,screen,reelFrame,reel,reelLine1,reelLine2,controls,button1,button2,button3,tray,chair]);
  machine.setDepth(y+TILE);this.world.add(machine);return machine;
 }

 drawIslandSpine(island){
  const x=px(island.x+2)-8,y=py(island.y)-4,h=15*TILE+8;
  const g=this.add.graphics();
  g.fillStyle(0x000000,.18);g.fillRect(x+5,y+5,22,h);
  g.fillStyle(0x24282d,1);g.fillRect(x,y,22,h);
  g.fillStyle(0x40464d,1);g.fillRect(x+3,y,15,h);
  g.fillStyle(0x555c64,.75);g.fillRect(x+4,y+2,11,h-4);
  g.fillStyle(0x15181b,.75);g.fillRect(x+17,y,3,h);
  g.lineStyle(1,0x181b1e,1);g.strokeRect(x,y,22,h);
  this.world.add(g);
 }

 drawIslandEndCap(island,atBottom=false){
  const gy=atBottom?island.y+14:island.y;
  const x=px(island.x+2)+TILE/2,y=py(gy)+(atBottom?TILE+5:-5);
  const c=this.add.container(x,y).setDepth(y+50);
  const shadow=this.add.ellipse(0,5,30,8,0x000000,.15);
  const base=this.add.rectangle(0,0,28,9,0x34393f).setStrokeStyle(1,0x1c1f22);
  const face=this.add.rectangle(0,-4,22,8,0x515861).setStrokeStyle(1,0x24272a);
  c.add([shadow,base,face]);this.world.add(c);
 }

 drawIslands(){
  const machines=[];
  islands.forEach((island,idx)=>{
   this.drawIslandSpine(island);
   this.drawIslandEndCap(island,false);this.drawIslandEndCap(island,true);
   this.drawSign(px(island.x+2)+TILE/2,py(island.y)-18,`島0${idx+1}`);
   this.drawPlant(island.x+2,island.y-1);this.drawPlant(island.x+2,island.y+15);
   for(let side=0;side<2;side++)for(let n=0;n<15;n++){
    const gx=island.x+side*4,gy=island.y+n;
    const color=n%3===0?0xe84343:n%3===1?0x3478d4:0xd33bb0;
    this.drawMachine(gx,gy,side===0?'L':'R',color);
    machines.push({machineId:`I0${idx+1}-${side===0?'L':'R'}${String(n+1).padStart(2,'0')}`,islandId:`I0${idx+1}`,side:side===0?'L':'R',number:n+1,gridX:gx,gridY:gy,setting:1,occupied:false,totalGames:0,bonusCount:0,differenceCoins:0});
   }
  });
  return machines;
 }

 createPlayer(gx,gy){
  this.playerGrid={x:gx,y:gy};
  const c=this.add.container(px(gx)+TILE/2,py(gy)+TILE/2);
  const shadow=this.add.ellipse(0,10,15,6,0x000000,.25);
  const legs=this.add.rectangle(0,8,8,7,0x27303b).setStrokeStyle(1,0x171b20);
  const body=this.add.rectangle(0,0,12,17,0x2e6fbd).setStrokeStyle(1,0x16385e);
  const shirt=this.add.rectangle(0,-2,8,5,0x4e8bd0);
  const head=this.add.circle(0,-11,5,0xe6bb92).setStrokeStyle(1,0x6e503c);
  const hair=this.add.arc(0,-13,5,180,360,false,0x54392a).setStrokeStyle(1,0x3e2a20);
  c.add([shadow,legs,body,shirt,head,hair]);
  c.setDepth(py(gy)+TILE+100);this.world.add(c);this.playerAnchor=c;
 }

 setupTouch(){
  document.querySelectorAll('.mobile-pad button').forEach(btn=>{
   const dir=btn.dataset.dir;
   btn.addEventListener('pointerdown',e=>{e.preventDefault();this.touchDir=dir});
   ['pointerup','pointercancel','pointerleave'].forEach(ev=>btn.addEventListener(ev,()=>this.touchDir=null));
  });
 }

 isBlocked(gx,gy){
  if(gx<1||gy<1||gx>=MAP_W-1||gy>=MAP_H-1)return true;
  for(const f of facilities){
   if(f.type==='entrance')continue;
   if(gx>=f.x&&gx<f.x+f.w&&gy>=f.y&&gy<f.y+f.h)return true;
  }
  for(const i of islands){
   const inY=gy>=i.y&&gy<i.y+15;
   const onLeft=gx===i.x;
   const onRight=gx===i.x+4;
   if(inY&&(onLeft||onRight))return true;
  }
  return false;
 }

 moveGrid(dx,dy){
  const nx=this.playerGrid.x+dx,ny=this.playerGrid.y+dy;
  if(this.isBlocked(nx,ny))return;
  this.playerGrid={x:nx,y:ny};
  this.playerAnchor.setDepth(py(ny)+TILE+100);
  this.tweens.add({targets:this.playerAnchor,x:px(nx)+TILE/2,y:py(ny)+TILE/2,duration:90,ease:'Linear'});
 }

 update(time){
  if(time<(this.nextMove||0))return;
  let dir=this.touchDir;
  if(this.keys.left.isDown||this.keyWASD.A.isDown)dir='left';
  else if(this.keys.right.isDown||this.keyWASD.D.isDown)dir='right';
  else if(this.keys.up.isDown||this.keyWASD.W.isDown)dir='up';
  else if(this.keys.down.isDown||this.keyWASD.S.isDown)dir='down';
  if(dir){const map={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]};this.moveGrid(...map[dir]);this.nextMove=time+115}
  this.status.setText(`□グリッド ${this.playerGrid.x},${this.playerGrid.y} / 台数 ${this.machineData.length}`);
 }
}

new Phaser.Game({type:Phaser.AUTO,parent:'game',backgroundColor:'#171a20',scale:{mode:Phaser.Scale.RESIZE,width:window.innerWidth,height:window.innerHeight},render:{pixelArt:true,antialias:false},scene:[MainScene]});
