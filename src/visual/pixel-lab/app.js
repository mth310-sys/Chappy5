const SIZE=32;
const FRAME_KEYS=['SE-idle','SE-walk1','SE-walk2','SE-walk3','SE-walk4','SE-seated','SW-idle','SW-walk1','SW-walk2','SW-walk3','SW-walk4','SW-seated'];
const DEFAULT_PALETTE=['#241b18','#171514','#53392a','#896349','#6b4a36','#35251d','#f2c69e','#ffe2bd','#d8926f','#2e67a8','#5d94cf','#3e79b8','#1c436f','#f4f1ea','#354c64','#4d687f','#26384b','#24262b','#62656d','#e8edf3','#ffffff','#000000','#d8928a','#965a52'];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const pc=$('#pixelCanvas'), oc=$('#overlayCanvas'), pctx=pc.getContext('2d',{alpha:true}), octx=oc.getContext('2d');
const stage=$('#canvasStage'), preview1=$('#preview1'), preview4=$('#preview4'), animPreview=$('#animPreview');
[pctx,octx,preview1.getContext('2d'),preview4.getContext('2d'),animPreview.getContext('2d')].forEach(c=>c.imageSmoothingEnabled=false);
let zoom=18,tool='pen',color=DEFAULT_PALETTE[9],palette=[...DEFAULT_PALETTE],activeLayer=0,drawing=false,lastCell=null,selection=null,moveStart=null,frameClipboard=null;
let undoStack=[],redoStack=[];
const makePixels=()=>Array.from({length:SIZE},()=>Array(SIZE).fill(null));
const makeFrame=()=>({layers:[{name:'Base',visible:true,pixels:makePixels()},{name:'Details',visible:true,pixels:makePixels()},{name:'Shade',visible:true,pixels:makePixels()}]});
let project={version:1,name:'student-32',size:SIZE,palette:[...palette],frames:Object.fromEntries(FRAME_KEYS.map(k=>[k,makeFrame()]))};
function frameKey(){return `${$('#direction').value}-${$('#state').value}`}
function frame(){return project.frames[frameKey()]}
function clone(v){return structuredClone(v)}
function checkpoint(){undoStack.push(clone(project));if(undoStack.length>80)undoStack.shift();redoStack.length=0;syncUndo()}
function restore(next){project=clone(next);palette=[...project.palette];activeLayer=Math.min(activeLayer,frame().layers.length-1);renderAll()}
function syncUndo(){$('#undoBtn').disabled=!undoStack.length;$('#redoBtn').disabled=!redoStack.length}
function currentPixels(){return frame().layers[activeLayer].pixels}
function composite(f=frame(),silhouette=false){const out=makePixels();for(const layer of f.layers){if(!layer.visible)continue;for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++){const v=layer.pixels[y][x];if(v)out[y][x]=silhouette?'#000000':v}}return out}
function drawPixels(ctx,pixels,scale=1,clear=true){if(clear)ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++)if(pixels[y][x]){ctx.fillStyle=pixels[y][x];ctx.fillRect(x*scale,y*scale,scale,scale)}}
function renderCanvas(){drawPixels(pctx,composite(frame(),$('#silhouetteToggle').checked),1);octx.clearRect(0,0,SIZE,SIZE);if($('#onionToggle').checked){const i=FRAME_KEYS.indexOf(frameKey()),prev=project.frames[FRAME_KEYS[(i-1+FRAME_KEYS.length)%FRAME_KEYS.length]];octx.globalAlpha=.24;drawPixels(octx,composite(prev),1,false);octx.globalAlpha=1}if(selection){octx.strokeStyle='#ffffff';octx.lineWidth=.12;octx.setLineDash([.6,.45]);octx.strokeRect(selection.x+.08,selection.y+.08,selection.w-.16,selection.h-.16);octx.setLineDash([])}}
function renderPreviews(){const pix=composite(frame(),$('#silhouetteToggle').checked);drawPixels(preview1.getContext('2d'),pix,1);drawPixels(preview4.getContext('2d'),pix,4)}
function renderPalette(){const box=$('#palette');box.innerHTML='';palette.forEach((c,i)=>{const b=document.createElement('button');b.className='swatch'+(c.toLowerCase()===color.toLowerCase()?' active':'');b.style.background=c;b.title=c;b.onclick=()=>{color=c;$('#colorPicker').value=c;$('#hexInput').value=c;renderPalette()};b.ondblclick=()=>{palette.splice(i,1);project.palette=[...palette];renderPalette()};box.appendChild(b)})}
function renderLayers(){const box=$('#layers');box.innerHTML='';frame().layers.forEach((l,i)=>{const row=document.createElement('div');row.className='layer'+(i===activeLayer?' active':'');const vis=document.createElement('input');vis.type='checkbox';vis.checked=l.visible;vis.onchange=()=>{checkpoint();l.visible=vis.checked;renderAll()};const name=document.createElement('input');name.type='text';name.value=l.name;name.onchange=()=>{checkpoint();l.name=name.value||`Layer ${i+1}`};const pick=document.createElement('button');pick.textContent='選択';pick.onclick=()=>{activeLayer=i;renderLayers()};row.append(vis,name,pick);box.appendChild(row)})}
function miniCanvas(f){const c=document.createElement('canvas');c.width=c.height=32;drawPixels(c.getContext('2d'),composite(f),1);return c}
function renderTimeline(){const box=$('#timeline');box.innerHTML='';FRAME_KEYS.forEach(k=>{const card=document.createElement('button');card.className='frameCard'+(k===frameKey()?' active':'');const c=miniCanvas(project.frames[k]);const s=document.createElement('small');s.textContent=k;card.append(c,s);card.onclick=()=>{const [d,...rest]=k.split('-');$('#direction').value=d;$('#state').value=rest.join('-');activeLayer=Math.min(activeLayer,frame().layers.length-1);selection=null;renderAll()};box.appendChild(card)})}
function renderAll(){stage.style.width=stage.style.height=`${SIZE*zoom}px`;renderCanvas();renderPreviews();renderPalette();renderLayers();renderTimeline();syncUndo()}
function cellFromEvent(e){const r=stage.getBoundingClientRect();return{x:Math.max(0,Math.min(31,Math.floor((e.clientX-r.left)/r.width*SIZE))),y:Math.max(0,Math.min(31,Math.floor((e.clientY-r.top)/r.height*SIZE)))}}
function setPixel(x,y,v){currentPixels()[y][x]=v}
function line(a,b,v){let x0=a.x,y0=a.y,x1=b.x,y1=b.y,dx=Math.abs(x1-x0),sx=x0<x1?1:-1,dy=-Math.abs(y1-y0),sy=y0<y1?1:-1,err=dx+dy;while(true){setPixel(x0,y0,v);if(x0===x1&&y0===y1)break;const e2=2*err;if(e2>=dy){err+=dy;x0+=sx}if(e2<=dx){err+=dx;y0+=sy}}}
function flood(x,y,newColor){const px=currentPixels(),old=px[y][x];if(old===newColor)return;const q=[[x,y]],seen=new Set;while(q.length){const [cx,cy]=q.pop(),k=`${cx},${cy}`;if(seen.has(k)||cx<0||cy<0||cx>=SIZE||cy>=SIZE||px[cy][cx]!==old)continue;seen.add(k);px[cy][cx]=newColor;q.push([cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1])}}
function normalizeRect(a,b){return{x:Math.min(a.x,b.x),y:Math.min(a.y,b.y),w:Math.abs(a.x-b.x)+1,h:Math.abs(a.y-b.y)+1}}
function pointerDown(e){e.preventDefault();stage.setPointerCapture(e.pointerId);const c=cellFromEvent(e);drawing=true;lastCell=c;if(tool==='picker'){const pix=composite()[c.y][c.x];if(pix){color=pix;$('#colorPicker').value=pix;$('#hexInput').value=pix;renderPalette()}drawing=false;return}checkpoint();if(tool==='fill'){flood(c.x,c.y,color);drawing=false;renderAll();return}if(tool==='select'){selection={x:c.x,y:c.y,w:1,h:1,_start:c};renderCanvas();return}if(tool==='move'){moveStart=c;return}line(c,c,tool==='eraser'?null:color);renderCanvas();renderPreviews()}
function pointerMove(e){const c=cellFromEvent(e);$('#cursorInfo').textContent=`x:${c.x} y:${c.y}`;if(!drawing)return;if(tool==='select'){selection={...normalizeRect(selection._start,c),_start:selection._start};renderCanvas();return}if(tool==='move'){return}if(c.x===lastCell.x&&c.y===lastCell.y)return;line(lastCell,c,tool==='eraser'?null:color);lastCell=c;renderCanvas();renderPreviews()}
function pointerUp(e){if(!drawing)return;drawing=false;const c=cellFromEvent(e);if(tool==='select'&&selection){selection=normalizeRect(selection._start,c);renderCanvas()}else if(tool==='move'&&moveStart){const dx=c.x-moveStart.x,dy=c.y-moveStart.y;if(dx||dy)moveSelection(dx,dy);moveStart=null;renderAll()}else renderAll()}
function moveSelection(dx,dy){const px=currentPixels(),rect=selection||{x:0,y:0,w:SIZE,h:SIZE},copy=[];for(let y=0;y<rect.h;y++)for(let x=0;x<rect.w;x++){const sx=rect.x+x,sy=rect.y+y;if(px[sy]?.[sx])copy.push([sx,sy,px[sy][sx]]);if(px[sy])px[sy][sx]=null}for(const [sx,sy,v] of copy){const nx=sx+dx,ny=sy+dy;if(nx>=0&&nx<SIZE&&ny>=0&&ny<SIZE)px[ny][nx]=v}selection={x:Math.max(0,Math.min(31,rect.x+dx)),y:Math.max(0,Math.min(31,rect.y+dy)),w:rect.w,h:rect.h}}
function mirror(){checkpoint();const px=currentPixels(),rect=selection||{x:0,y:0,w:SIZE,h:SIZE};for(let y=rect.y;y<rect.y+rect.h;y++)for(let i=0;i<Math.floor(rect.w/2);i++){const a=rect.x+i,b=rect.x+rect.w-1-i;[px[y][a],px[y][b]]=[px[y][b],px[y][a]]}renderAll()}
function download(name,blob){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function projectJson(){project.palette=[...palette];return JSON.stringify(project,null,2)}
function exportPng(sheet=false){const keys=sheet?FRAME_KEYS:[frameKey()],c=document.createElement('canvas');c.width=SIZE*keys.length;c.height=SIZE;const ctx=c.getContext('2d');keys.forEach((k,i)=>drawPixelsAt(ctx,composite(project.frames[k]),i*SIZE,0));c.toBlob(b=>download(sheet?`${project.name}-sheet.png`:`${frameKey()}.png`,b),'image/png')}
function drawPixelsAt(ctx,pix,ox,oy){for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++)if(pix[y][x]){ctx.fillStyle=pix[y][x];ctx.fillRect(ox+x,oy+y,1,1)}}
function copyFrame(){frameClipboard=clone(frame())}
function pasteFrame(){if(!frameClipboard)return;checkpoint();project.frames[frameKey()]=clone(frameClipboard);activeLayer=0;renderAll()}
$$('[data-tool]').forEach(b=>b.onclick=()=>{$$('[data-tool]').forEach(x=>x.classList.remove('active'));b.classList.add('active');tool=b.dataset.tool});
stage.addEventListener('pointerdown',pointerDown);stage.addEventListener('pointermove',pointerMove);stage.addEventListener('pointerup',pointerUp);stage.addEventListener('pointercancel',pointerUp);
$('#zoom').oninput=e=>{zoom=Number(e.target.value);$('#zoomOut').value=`${zoom}×`;renderAll()};
$('#gridToggle').onchange=e=>stage.style.backgroundSize=e.target.checked?'16px 16px':'0 0';
$('#onionToggle').onchange=renderCanvas;$('#silhouetteToggle').onchange=renderAll;
$('#mirrorBtn').onclick=mirror;$('#clearBtn').onclick=()=>{checkpoint();frame().layers[activeLayer].pixels=makePixels();renderAll()};
$('#undoBtn').onclick=()=>{if(!undoStack.length)return;redoStack.push(clone(project));restore(undoStack.pop())};
$('#redoBtn').onclick=()=>{if(!redoStack.length)return;undoStack.push(clone(project));restore(redoStack.pop())};
$('#addLayerBtn').onclick=()=>{checkpoint();frame().layers.push({name:`Layer ${frame().layers.length+1}`,visible:true,pixels:makePixels()});activeLayer=frame().layers.length-1;renderAll()};
$('#dupLayerBtn').onclick=()=>{checkpoint();const cp=clone(frame().layers[activeLayer]);cp.name+=' copy';frame().layers.splice(activeLayer+1,0,cp);activeLayer++;renderAll()};
$('#delLayerBtn').onclick=()=>{if(frame().layers.length===1)return;checkpoint();frame().layers.splice(activeLayer,1);activeLayer=Math.max(0,activeLayer-1);renderAll()};
$('#direction').onchange=()=>{selection=null;renderAll()};$('#state').onchange=()=>{selection=null;renderAll()};
$('#copyFrameBtn').onclick=copyFrame;$('#pasteFrameBtn').onclick=pasteFrame;
$('#colorPicker').oninput=e=>{color=e.target.value;$('#hexInput').value=color;if(!palette.includes(color)){palette.push(color);project.palette=[...palette]}renderPalette()};
$('#hexInput').onchange=e=>{if(/^#[0-9a-f]{6}$/i.test(e.target.value)){color=e.target.value;$('#colorPicker').value=color;if(!palette.includes(color))palette.push(color);project.palette=[...palette];renderPalette()}};
$('#exportBtn').onclick=()=>download(`${project.name}.json`,new Blob([projectJson()],{type:'application/json'}));
$('#importBtn').onclick=()=>$('#fileInput').click();$('#fileInput').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const data=JSON.parse(await f.text());if(data.size!==SIZE||!data.frames)throw new Error('invalid');checkpoint();project=data;palette=[...(data.palette||DEFAULT_PALETTE)];activeLayer=0;renderAll()}catch{alert('Pixel Lab JSONとして読み込めませんでした')}};
$('#pngBtn').onclick=()=>exportPng(false);$('#sheetBtn').onclick=()=>exportPng(true);
window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?$('#redoBtn').click():$('#undoBtn').click()}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){e.preventDefault();$('#redoBtn').click()}if(e.key==='p')$$('[data-tool="pen"]')[0].click();if(e.key==='e')$$('[data-tool="eraser"]')[0].click();if(e.key==='f')$$('[data-tool="fill"]')[0].click();if(e.key==='i')$$('[data-tool="picker"]')[0].click()});
let animIndex=0;setInterval(()=>{const d=$('#direction').value,states=['idle','walk1','walk2','walk3','walk4'];const k=`${d}-${states[animIndex++%states.length]}`;const ctx=animPreview.getContext('2d');ctx.clearRect(0,0,128,128);drawPixels(ctx,composite(project.frames[k]),4,false)},180);
renderAll();