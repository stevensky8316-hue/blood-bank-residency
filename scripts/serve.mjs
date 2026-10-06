import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dist=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const port=Number(process.env.PORT||5173);
if(!Number.isInteger(port)||port<1||port>65535)throw Error('PORT 無效');
const files=new Set(['index.html','app.js','content.js','styles.css']);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
try{await fs.access(path.join(dist,'index.html'));}catch{throw Error('請先執行 npm run build 或 npm run dev');}
http.createServer(async(req,res)=>{const pathname=new URL(req.url,'http://localhost').pathname;const name=pathname==='/'?'index.html':pathname.slice(1);if(!files.has(name)){res.writeHead(404).end('Not found');return;}try{const data=await fs.readFile(path.join(dist,name));res.writeHead(200,{'Content-Type':mime[path.extname(name)],'Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(500).end('Read error');}}).listen(port,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+port));
