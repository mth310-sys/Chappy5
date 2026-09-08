const TILE_W=32,TILE_H=16,MAP_W=48,MAP_H=32;
const iso=(gx,gy)=>({x:(gx-gy)*(TILE_W/2),y:(gx+gy)*(TILE_H/2)});
const facilities=[
 {type:'counter',label:'カウンター',x:7,y:1,w:21,h:5},
 {type:'toiletM',label:'男子トイレ',x:32,y:1,w:4,h:5},
 {type:'toiletF',label:'女子トイレ',x:37,y:1,w:4,h:5},
 {type:'smoking',label:'喫煙所',x:42,y:1,w:5,h:6},
 {type:'vending',label:'自販機',x:44,y:11,w:2,h:3},
 {type:'entrance',label:'入口',x:20,y:29,w:8,h:3}
];
const islands=[{id:'I01',x:3,y:9},{id:'I02',x:13,y:9},{id:'I03',x:23,y:9},{id:'I04',x:33,y:9}];

class MainScene extends Phaser.Scene{
 constructor(){super('main')}
 create(){
  this.world=this.add.container(this.scale.width/2,30);
  this.drawFloor();this.drawWalls();this.drawFacilities();this.machineData=this.drawIslands();
  const start=iso(24,27);
  this.player=this.add.rectangle(start.x,start.y-10,14,22,0x2457d6).setStrokeStyle(2,0xffffff);
  this.world.add(this.player);this.playerGrid={x:24,y:27};
  this.keys=this.input.keyboard.createCursorKeys();this.keyWASD=this.input.keyboard.addKeys('W,A,S,D');
  this.cameras.main.setZoom(1.7);this.cameras.main.startFollow(this.player,true,0.12,0.12);this.cameras.main.setDeadzone(100,70);
  this.setupTouch();
  this.scale.on('resize',()=>{this.world.x=this.scale.width/2});
  this.status=this.add.text(8,this.scale.height-24,'',{fontFamily:'sans-serif',fontSize:'11px',color:'#ffffff',backgroundColor:'rgba(0,0,0,.55)',padding:{x:5,y:3}}).setScrollFactor(0).setDepth(1000);
 }
 drawFloor(){
  const g=this.add.graphics();
  for(let y=0;y<MAP_H;y++)for(let x=0;x<MAP_W;x++){
   const p=iso(x,y),pts=[{x:p.x,y:p.y},{x:p.x+TILE_W/2,y:p.y+TILE_H/2},{x:p.x,y:p.y+TILE_H},{x:p.x-TILE_W/2,y:p.y+TILE_H/2}];
   g.fillStyle(((x+y)&1)?0xd9cfb8:0xe4dac3,1);g.fillPoints(pts,true);g.lineStyle(1,0xc7bda7,.35);g.strokePoints(pts,true);
  }
  this.world.add(g);
 }
 drawWalls(){
  const g=this.add.graphics(),outline=[[0,0],[MAP_W,0],[MAP_W,MAP_H],[0,MAP_H],[0,0]];g.lineStyle(5,0x3f454d,1);
  for(let i=0;i<outline.length-1;i++){const a=iso(...outline[i]),b=iso(...outline[i+1]);g.lineBetween(a.x,a.y+8,b.x,b.y+8)}
  this.world.add(g);
 }
 addIsoBlock(x,y,w,h,color,label){
  const g=this.add.graphics();
  for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++){
   const p=iso(xx,yy);g.fillStyle(color,1);g.fillPoints([{x:p.x,y:p.y-5},{x:p.x+TILE_W/2,y:p.y+TILE_H/2-5},{x:p.x,y:p.y+TILE_H-5},{x:p.x-TILE_W/2,y:p.y+TILE_H/2-5}],true);
  }
  this.world.add(g);const c=iso(x+w/2,y+h/2);const t=this.add.text(c.x,c.y-12,label,{fontFamily:'sans-serif',fontSize:'8px',color:'#fff',backgroundColor:'rgba(0,0,0,.72)',padding:{x:3,y:2}}).setOrigin(.5);this.world.add(t);
 }
 drawFacilities(){
  this.addIsoBlock(7,1,21,5,0x9a633f,'カウンター（景品交換・精算）');this.addIsoBlock(32,1,4,5,0x4174bd,'男子トイレ');this.addIsoBlock(37,1,4,5,0xc95883,'女子トイレ');this.addIsoBlock(42,1,5,6,0x59636e,'喫煙所');this.addIsoBlock(44,11,2,3,0x287ac2,'自販機');this.addIsoBlock(20,29,8,3,0xb7322d,'入口');
 }
 drawIslands(){
  const machines=[];
  islands.forEach((island,idx)=>{
   const sign=iso(island.x+3,island.y-1);const t=this.add.text(sign.x,sign.y-14,`島0${idx+1}`,{fontFamily:'sans-serif',fontSize:'9px',color:'#fff',backgroundColor:'#a32020',padding:{x:4,y:2}}).setOrigin(.5);this.world.add(t);
   for(let side=0;side<2;side++)for(let n=0;n<15;n++){
    const gx=island.x+side*4,gy=island.y+n,p=iso(gx,gy),color=(n%3===0)?0xe84343:(n%3===1?0x3478d4:0xd33bb0);
    const body=this.add.rectangle(p.x,p.y-8,12,17,color).setStrokeStyle(1,0x222222);const chair=this.add.ellipse(p.x+(side===0?-8:8),p.y+2,8,6,0x262626);this.world.add([body,chair]);
    machines.push({machineId:`I0${idx+1}-${side===0?'L':'R'}${String(n+1).padStart(2,'0')}`,islandId:`I0${idx+1}`,side:side===0?'L':'R',number:n+1,gridX:gx,gridY:gy,setting:1,occupied:false,totalGames:0,bonusCount:0,differenceCoins:0});
   }
  });
  return machines;
 }
 setupTouch(){document.querySelectorAll('.mobile-pad button').forEach(btn=>{const dir=btn.dataset.dir;btn.addEventListener('pointerdown',e=>{e.preventDefault();this.touchDir=dir});['pointerup','pointercancel','pointerleave'].forEach(ev=>btn.addEventListener(ev,()=>this.touchDir=null))})}
 isBlocked(gx,gy){
  if(gx<1||gy<1||gx>=MAP_W-1||gy>=MAP_H-1)return true;
  for(const f of facilities)if(gx>=f.x&&gx<f.x+f.w&&gy>=f.y&&gy<f.y+f.h)return true;
  for(const i of islands){const inY=gy>=i.y-1&&gy<=i.y+15,inX=(gx>=i.x-1&&gx<=i.x+1)||(gx>=i.x+3&&gx<=i.x+5);if(inY&&inX)return true}
  return false;
 }
 moveGrid(dx,dy){const nx=this.playerGrid.x+dx,ny=this.playerGrid.y+dy;if(!this.isBlocked(nx,ny)){this.playerGrid={x:nx,y:ny};const p=iso(nx,ny);this.tweens.add({targets:this.player,x:p.x,y:p.y-10,duration:90,ease:'Linear'})}}
 update(time){
  if(time<(this.nextMove||0))return;let dir=this.touchDir;
  if(this.keys.left.isDown||this.keyWASD.A.isDown)dir='left';else if(this.keys.right.isDown||this.keyWASD.D.isDown)dir='right';else if(this.keys.up.isDown||this.keyWASD.W.isDown)dir='up';else if(this.keys.down.isDown||this.keyWASD.S.isDown)dir='down';
  if(dir){const map={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]};this.moveGrid(...map[dir]);this.nextMove=time+115}
  this.status.setText(`座標 ${this.playerGrid.x},${this.playerGrid.y} / 台数 ${this.machineData.length}`);
 }
}

new Phaser.Game({type:Phaser.AUTO,parent:'game',backgroundColor:'#171a20',scale:{mode:Phaser.Scale.RESIZE,width:window.innerWidth,height:window.innerHeight},render:{pixelArt:true,antialias:false},scene:[MainScene]});
