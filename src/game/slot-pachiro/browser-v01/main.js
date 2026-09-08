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
  g.fillStyle(0xe1d7c1,1);
  g.fillRect(0,0,MAP_W*TILE,MAP_H*TILE);
  g.lineStyle(1,0xc9bea8,.5);
  for(let x=0;x<=MAP_W;x++)g.lineBetween(x*TILE,0,x*TILE,MAP_H*TILE);
  for(let y=0;y<=MAP_H;y++)g.lineBetween(0,y*TILE,MAP_W*TILE,y*TILE);
  this.world.add(g);
 }

 drawWalls(){
  const g=this.add.graphics();
  const w=MAP_W*TILE,h=MAP_H*TILE;
  g.fillStyle(0x454a52,1);
  g.fillRect(0,0,w,6);
  g.fillRect(0,0,6,h);
  g.fillRect(w-6,0,6,h);
  g.fillRect(0,h-6,w,6);
  g.fillStyle(0x6c737c,.9);
  g.fillRect(6,6,w-12,4);
  this.world.add(g);
 }

 addRaisedBlock(f){
  const x=px(f.x),y=py(f.y),w=f.w*TILE,h=f.h*TILE;
  const g=this.add.graphics();
  g.fillStyle(0x000000,.16);g.fillRect(x+5,y+7,w,h);
  g.fillStyle(f.color,1);g.fillRect(x,y,w,h);
  g.fillStyle(0xffffff,.12);g.fillRect(x,y,w,7);
  g.fillStyle(0x000000,.18);g.fillRect(x,y+h-7,w,7);
  g.lineStyle(2,0x25282d,.8);g.strokeRect(x,y,w,h);
  this.world.add(g);
  const t=this.add.text(x+w/2,y+h/2-4,f.label,{
   fontFamily:'sans-serif',fontSize:'10px',color:'#fff',align:'center',
   backgroundColor:'rgba(0,0,0,.55)',padding:{x:4,y:2}
  }).setOrigin(.5).setDepth(y+h+20);
  this.world.add(t);
 }

 drawFacilities(){facilities.forEach(f=>this.addRaisedBlock(f))}

 drawMachine(gx,gy,side,color){
  const x=px(gx),y=py(gy),cx=x+TILE/2;
  const machine=this.add.container(cx,y+TILE/2);
  const shadow=this.add.ellipse(0,8,18,7,0x000000,.22);
  const chairX=side==='L'?-11:11;
  const chair=this.add.ellipse(chairX,6,9,7,0x292929,1).setStrokeStyle(1,0x111111);
  const body=this.add.rectangle(0,-3,15,19,color).setStrokeStyle(1,0x202020);
  const top=this.add.polygon(0,-13,[-8,4,0,0,8,4,0,8],Phaser.Display.Color.IntegerToColor(color).brighten(22).color,1)
   .setStrokeStyle(1,0x202020);
  const screen=this.add.rectangle(0,-5,9,5,0x8fd7ff).setStrokeStyle(1,0x163040);
  const reel=this.add.rectangle(0,1,10,5,0xf2f2e8).setStrokeStyle(1,0x555555);
  machine.add([shadow,chair,body,top,screen,reel]);
  machine.setDepth(y+TILE);
  this.world.add(machine);
  return machine;
 }

 drawIslands(){
  const machines=[];
  islands.forEach((island,idx)=>{
   const label=this.add.text(px(island.x+2),py(island.y)-17,`島0${idx+1}`,{
    fontFamily:'sans-serif',fontSize:'10px',color:'#fff',backgroundColor:'#a32020',padding:{x:4,y:2}
   }).setDepth(py(island.y)+5000);
   this.world.add(label);

   for(let side=0;side<2;side++){
    for(let n=0;n<15;n++){
     const gx=island.x+side*4,gy=island.y+n;
     const color=n%3===0?0xe84343:n%3===1?0x3478d4:0xd33bb0;
     this.drawMachine(gx,gy,side===0?'L':'R',color);
     machines.push({
      machineId:`I0${idx+1}-${side===0?'L':'R'}${String(n+1).padStart(2,'0')}`,
      islandId:`I0${idx+1}`,side:side===0?'L':'R',number:n+1,
      gridX:gx,gridY:gy,setting:1,occupied:false,
      totalGames:0,bonusCount:0,differenceCoins:0
     });
    }
   }
  });
  return machines;
 }

 createPlayer(gx,gy){
  this.playerGrid={x:gx,y:gy};
  const c=this.add.container(px(gx)+TILE/2,py(gy)+TILE/2);
  const shadow=this.add.ellipse(0,9,14,6,0x000000,.25);
  const body=this.add.rectangle(0,0,12,18,0x2457d6).setStrokeStyle(1,0x15306f);
  const head=this.add.circle(0,-11,5,0xf0c9a4).setStrokeStyle(1,0x7d5a43);
  const highlight=this.add.rectangle(-3,-1,3,12,0xffffff,.2);
  c.add([shadow,body,highlight,head]);
  c.setDepth(py(gy)+TILE+100);
  this.world.add(c);
  this.playerAnchor=c;
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
  this.tweens.add({
   targets:this.playerAnchor,
   x:px(nx)+TILE/2,y:py(ny)+TILE/2,
   duration:90,ease:'Linear'
  });
 }

 update(time){
  if(time<(this.nextMove||0))return;
  let dir=this.touchDir;
  if(this.keys.left.isDown||this.keyWASD.A.isDown)dir='left';
  else if(this.keys.right.isDown||this.keyWASD.D.isDown)dir='right';
  else if(this.keys.up.isDown||this.keyWASD.W.isDown)dir='up';
  else if(this.keys.down.isDown||this.keyWASD.S.isDown)dir='down';
  if(dir){
   const map={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]};
   this.moveGrid(...map[dir]);
   this.nextMove=time+115;
  }
  this.status.setText(`□グリッド ${this.playerGrid.x},${this.playerGrid.y} / 台数 ${this.machineData.length}`);
 }
}

new Phaser.Game({
 type:Phaser.AUTO,parent:'game',backgroundColor:'#171a20',
 scale:{mode:Phaser.Scale.RESIZE,width:window.innerWidth,height:window.innerHeight},
 render:{pixelArt:true,antialias:false},scene:[MainScene]
});
