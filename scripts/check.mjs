import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
for(const file of ['src/app.js','scripts/build.mjs','scripts/serve.mjs']){const r=spawnSync(process.execPath,['--check',path.join(root,file)],{stdio:'inherit'});if(r.status!==0)process.exit(r.status||1);}
await import('./build.mjs');
console.log('語法、題庫與參考資料關聯檢查通過');
