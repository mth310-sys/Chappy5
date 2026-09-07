const CELL=48,COLS=5,ROWS=4;
const EXP=['normal','smile','surprise','angry','troubled','wink'];
const IDX={SE_IDLE:0,SE_WALK1:1,SE_WALK2:2,SE_WALK3:3,SE_WALK4:4,SE_SEATED:5,SW_IDLE:6,SW_WALK1:7,SW_WALK2:8,SW_WALK3:9,SW_WALK4:10,SW_SEATED:11,NE_IDLE:12,NW_IDLE:13,EXP_normal:14,EXP_smile:15,EXP_surprise:16,EXP_angry:17,EXP_troubled:18,EXP_wink:19};
let ready=false;const sheet=new Image();
fetch('../assets/student-pac-v6-full.png?v=fullbody-v7').then(r=>r.text()).then(b64=>{sheet.onload=()=>{ready=true;paintAll()};sheet.src='data:image/png;base64,'+b64.trim()}).catch(console.error);
function indexFor(c){const dir=c.dataset.spriteDir||c.dataset.dir||'SE',frame=Number(c.dataset.spriteFrame||c.dataset.walkFrame||0),seated=(c.dataset.spriteSeated==='true'||c.dataset.customerState==='seated'),e=c.dataset.expression||null;if(e&&EXP.includes(e))return IDX['EXP_'+e];if(seated)return dir==='SW'?IDX.SW_SEATED:IDX.SE_SEATED;if(dir==='NE')return IDX.NE_IDLE;if(dir==='NW')return IDX.NW_IDLE;const f=((frame%5)+5)%5;return IDX[(dir==='SW'?'SW_':'SE_')+(f===0?'IDLE':'WALK'+f)]}
function paint(c){if(!ready||!(c instanceof HTMLCanvasElement)||!c.classList.contains('pixelCustomer'))return;const i=indexFor(c),sw=sheet.naturalWidth/COLS,sh=sheet.naturalHeight/ROWS,sx=(i%COLS)*sw,sy=Math.floor(i/COLS)*sh,ctx=c.getContext('2d');c.width=CELL;c.height=CELL;ctx.imageSmoothingEnabled=false;ctx.clearRect(0,0,CELL,CELL);ctx.drawImage(sheet,sx,sy,sw,sh,0,0,CELL,CELL);c.dataset.fullbodyOverlay='v7'}
function paintAll(){document.querySelectorAll('canvas.pixelCustomer').forEach(paint)}
new MutationObserver(ms=>{for(const m of ms){if(m.type==='childList')paintAll();else paint(m.target)}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['data-sprite-dir','data-sprite-frame','data-sprite-seated','data-expression','data-customer-state']});
setInterval(paintAll,50);
