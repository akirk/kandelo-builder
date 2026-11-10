// Game IDs and titles from Kandelo’s scummvm-freeware-games.json.
export const scummvmGames = [
 {
  "id": "steel-sky",
  "title": "Beneath a Steel Sky"
 },
 {
  "id": "drascula",
  "title": "Dráscula: The Vampire Strikes Back"
 },
 {
  "id": "dreamweb",
  "title": "DreamWeb"
 },
 {
  "id": "fotaq",
  "title": "Flight of the Amazon Queen"
 },
 {
  "id": "god-of-thunder",
  "title": "God of Thunder"
 },
 {
  "id": "griffon",
  "title": "The Griffon Legend"
 },
 {
  "id": "lure",
  "title": "Lure of the Temptress"
 },
 {
  "id": "mystery-house",
  "title": "Hi-Res Adventure #1: Mystery House"
 },
 {
  "id": "nippon-safes",
  "title": "Nippon Safes, Inc."
 },
 {
  "id": "sfinx",
  "title": "Sfinx"
 },
 {
  "id": "soltys",
  "title": "Sołtys"
 },
 {
  "id": "above-the-waves",
  "title": "Above the Waves"
 },
 {
  "id": "cubert-badbone",
  "title": "Cubert Badbone, P.I."
 },
 {
  "id": "frasse",
  "title": "Frasse and the Peas of Kejick"
 },
 {
  "id": "full-moon",
  "title": "Full Moon"
 },
 {
  "id": "the-interview",
  "title": "The Interview"
 },
 {
  "id": "leptons-quest",
  "title": "Lepton's Quest"
 },
 {
  "id": "life-flashes-by",
  "title": "Life Flashes By"
 },
 {
  "id": "mandy-christmas",
  "title": "Mandy Christmas Adventure"
 },
 {
  "id": "nathans-second-chance",
  "title": "Nathan's Second Chance"
 },
 {
  "id": "out-of-order",
  "title": "Out of Order"
 },
 {
  "id": "robins-rescue",
  "title": "Robin's Rescue"
 },
 {
  "id": "sam-and-max-flintlocked",
  "title": "Sam and Max Flintlocked"
 },
 {
  "id": "cruise-ship",
  "title": "The Game That Takes Place on a Cruise Ship"
 },
 {
  "id": "tremendous-corporation",
  "title": "The Secret of Tremendous Corporation"
 },
 {
  "id": "wage-collection",
  "title": "World Builder (WAGE) game collection"
 }
];
export const prompts = [
 {id:'image',name:'Image default',value:''},
 {id:'classic',name:'Classic · maker@kandelo:~$',value:String.raw`\u@\h:\w\$ `},
 {id:'green',name:'Green · maker@kandelo:~$',value:String.raw`\[\033[32m\]\u@\h\[\033[0m\]:\[\033[34m\]\w\[\033[0m\]\$ `},
 {id:'minimal',name:'Minimal · ~$ ',value:String.raw`\W\$ `},
 {id:'two-line',name:'Two lines · directory, then →',value:String.raw`\[\033[36m\]\w\[\033[0m\]\n→ `},
 {id:'time',name:'Time · HH:MM:SS ~ $',value:String.raw`\t \w \$ `},
];
export const images = [
 {id:'shell',name:'Everyday shell',icon:'>_',file:'shell.vfs.zst',description:'Bash, core utilities, Python & Git',tools:['bash','python','git','scummvm-play']},
 {id:'python',name:'Python workspace',icon:'Py',file:'python.vfs.zst',description:'A focused Python environment',tools:['bash','python']},
 {id:'perl',name:'Perl workspace',icon:'pl',file:'perl.vfs.zst',description:'Perl and its standard library',tools:['bash','perl']},
 {id:'nginx',name:'Nginx',icon:'>_',file:'nginx.vfs.zst',description:'HTTP server',tools:['bash']},
 {id:'nginx-php',name:'Nginx + PHP',icon:'>_',file:'nginx-php.vfs.zst',description:'PHP web environment',tools:['bash']},
 {id:'nginx-python',name:'Nginx + Python',icon:'>_',file:'nginx-python.vfs.zst',description:'Python web environment',tools:['bash']},
 {id:'redis',name:'Redis',icon:'>_',file:'redis.vfs.zst',description:'In-memory data server',tools:['bash']},
 {id:'ruby-todo',name:'Ruby Todo',icon:'>_',file:'ruby-todo.vfs.zst',description:'Ruby web application',tools:['bash']},
 {id:'lamp',name:'LAMP',icon:'>_',file:'lamp.vfs.zst',description:'Apache, PHP and MariaDB',tools:['bash']},
 {id:'web-stack',name:'Web stack',icon:'>_',file:'web-stack.vfs.zst',description:'Multiple web runtime profiles',tools:['bash']},
 {id:'wordpress',name:'WordPress',icon:'>_',file:'wordpress.vfs.zst',description:'WordPress environment',tools:['bash']},
 {id:'wordpress-family',name:'WordPress family',icon:'>_',file:'wordpress-family.vfs.zst',description:'SQLite and MariaDB profiles',tools:['bash']},
 {id:'rootfs',name:'Platform rootfs',icon:'>_',file:'rootfs.vfs.zst',description:'Base platform filesystem',tools:['bash']},
 {id:'custom',name:'Bring your own VFS',icon:'＋',description:'Start from a remote filesystem image',tools:[]},
];
export const library = [
 {kind:'welcome',name:'Say hello',description:'A welcome message for your terminal',icon:'✳',requires:'bash',code:'clear\nprintf "Welcome to my Kandelo!\\n"'},
 {kind:'command',name:'Run a command',description:'Anything you would type in a shell',icon:'>_',requires:'bash',code:'pwd\nls -la'},
 {kind:'file',name:'Create a file',description:'Put your own content in the filesystem',icon:'▤',requires:'bash',path:'/home/maker/hello.txt',content:'Hello from Kandelo!\n'},
 {kind:'python',name:'Run Python',description:'A little code, a lot of possibilities',icon:'Py',requires:'python',code:'import sys\nprint("Hello from Python!")\nprint(sys.version)'},
 {kind:'git',name:'Clone a repository',description:'Bring a project into your computer',icon:'⑂',requires:'git',url:'https://github.com/akirk/kandelo-demos.git',directory:'',enterDirectory:true,printReadme:false,showOutput:false},
 {kind:'dotfiles',name:'Bring my dotfiles',description:'Your aliases, shortcuts and shell settings',icon:'~/',requires:'git',url:'https://github.com/your-name/dotfiles.git',revision:'',mappings:'.bashrc -> ~/.bashrc\n.inputrc -> ~/.inputrc'},
 {kind:'perl',name:'Run Perl',description:'Execute a Perl script on startup',icon:'pl',requires:'perl',code:'print "Hello from Perl!\\n";'},
 {kind:'scummvm',name:'Play a ScummVM game',description:'Launch a freeware adventure · Beneath a Steel Sky & more',icon:'🎮',requires:'scummvm-play',game:'steel-sky'},
];
// Compare effective settings, ignoring display metadata and object key order.
export function sameStep(a,b){
 if(a.kind!==b.kind)return false;
 if(a.kind==='scummvm')return a.game===b.game;
 if(a.kind==='dotfiles')return a.url===b.url&&(a.revision||'')===(b.revision||'')&&a.mappings===b.mappings;
 if(a.kind==='file')return a.path===b.path&&a.content===b.content;
 if(a.kind==='git')return a.url===b.url&&(a.directory||'')===(b.directory||'')&&!!a.enterDirectory===!!b.enterDirectory&&!!a.printReadme===!!b.printReadme&&!!a.showOutput===!!b.showOutput;
 return a.code===b.code;
}
export const defaults = () => ({version:1,title:'My little computer',image:'shell',prompt:'image',customPs1:'',customVfs:'',host:'https://kandelo.dev/',imageBase:'https://kandelo.dev/vfs-groups/release-1/images/',cwd:'/home/maker',steps:[{...library[0]},{...library[2]}]});
export const quote = s => "'"+s.replaceAll("'", "'\\''")+"'";
function absolute(s){return typeof s==='string' && s.startsWith('/') && !s.includes('\0') && !s.includes('\\') && (s==='/' || !s.slice(1).split('/').some(p=>!p||p==='.'||p==='..'));}
function webUrl(s){const u=new URL(s);if(!['http:','https:'].includes(u.protocol)||u.username||u.password)throw Error('Use an HTTP(S) URL without credentials.');return u;}
export function dotfileMappings(text){
 if(typeof text!=='string'||text.length>16000||text.includes('\0'))throw Error('Provide dotfile mappings (up to 16 KB).');
 const lines=text.split('\n').map(line=>line.trim()).filter(Boolean);
 if(!lines.length||lines.length>50)throw Error('Provide between 1 and 50 dotfile mappings.');
 const seen=new Set();
 return lines.map(line=>{const parts=line.split('->').map(p=>p.trim());
 if(parts.length!==2)throw Error('Use source -> ~/destination for each dotfile mapping.');
 const [source,target]=parts,destination=target.startsWith('~/')?target.slice(2):'';
 const valid=path=>path&&!path.startsWith('/')&&!/[\\\0\r\n]/.test(path)&&!path.split('/').some(p=>!p||p==='.'||p==='..');
 if(!valid(source)||!valid(destination))throw Error('Dotfile sources must be repository-relative and destinations must start with ~/ without dot segments.');
 if(destination==='.dotfiles'||destination.startsWith('.dotfiles/')||destination==='.config'||destination==='.config/kandelo-builder'||destination.startsWith('.config/kandelo-builder/'))throw Error('This destination is reserved for builder files.');
 if([...seen].some(p=>p===destination||p.startsWith(destination+'/')||destination.startsWith(p+'/')))throw Error('Dotfile destinations must not overlap.');
 seen.add(destination);return {source,destination};
 });
}
export function validate(s){
 if(!s||s.version!==1||!images.some(i=>i.id===s.image))throw Error('Unsupported recipe version or filesystem.');
 for(const k of ['title','host','imageBase','cwd','customVfs'])if(typeof s[k]!=='string'||s[k].length>8192)throw Error('Invalid '+k);
 if(!s.title.trim()||s.title.length>120)throw Error('Give your computer a name (up to 120 characters).');
 if(!absolute(s.cwd))throw Error('Working directory must be an absolute path without dot segments.');
 webUrl(s.host);webUrl(s.imageBase);if(s.image==='custom')webUrl(s.customVfs);
 if(s.prompt!==undefined&&s.prompt!=='custom'&&!prompts.some(p=>p.id===s.prompt))throw Error('Unknown prompt style.');
 if(s.customPs1!==undefined&&(typeof s.customPs1!=='string'||s.customPs1.length>4096||s.customPs1.includes('\0')))throw Error('Custom PS1 must be up to 4096 characters without NUL.');
 if(!Array.isArray(s.steps)||s.steps.length>40)throw Error('A recipe may have up to 40 steps.');
 for(const step of s.steps){if(!library.some(l=>l.kind===step.kind))throw Error('Unknown recipe step.');for(const k of ['code','content','path','url'])if(step[k]!==undefined&&(typeof step[k]!=='string'||step[k].includes('\0')||step[k].length>100000))throw Error('Invalid step '+k);
 if(step.kind==='file'&&(!absolute(step.path)||step.path==='/'))throw Error('Files need an absolute file path without dot segments.');
 if(step.kind==='dotfiles'){
 webUrl(step.url);
 if(typeof step.revision!=='string'||step.revision.length>255||step.revision.includes('\0')||step.revision.startsWith('-')||/[\r\n]/.test(step.revision))throw Error('Use a branch, tag or commit as the dotfiles revision.');
 dotfileMappings(step.mappings);
 }
 if(step.kind==='git'){
 webUrl(step.url);
 if(step.directory!==undefined&&(typeof step.directory!=='string'||step.directory.length>255||step.directory.includes('\0')||step.directory.includes('/')||step.directory.includes('\\')||['.','..'].includes(step.directory)))throw Error('Clone directory must be a single folder name.');
 for(const option of ['enterDirectory','printReadme','showOutput'])if(step[option]!==undefined&&typeof step[option]!=='boolean')throw Error('Invalid Git option.');
 }
 if(step.kind==='scummvm'&&!scummvmGames.some(g=>g.id===step.game))throw Error('Choose a supported ScummVM game.');
 if(step.kind==='file'&&typeof step.content!=='string'||!['file','git','dotfiles','scummvm'].includes(step.kind)&&typeof step.code!=='string')throw Error('Missing step content.');}
 return s;
}
function heredoc(content,index){let delimiter=`KANDELO_STEP_${index}`;while(content.split('\n').includes(delimiter))delimiter+='_';return {delimiter,body:content.endsWith('\n')?content:content+'\n'};}
export function compile(state){validate(state);return '#!/bin/bash\nset -e\nclear\ncd '+quote(state.cwd)+'\n\n'+state.steps.map((s,i)=>{
 const name=library.find(l=>l.kind===s.kind).name;
 if(s.kind==='scummvm')return `# ${i+1}. ${name}\nscummvm-play ${s.game}\n`;
 if(s.kind==='file'){const h=heredoc(s.content,i);const parent=s.path.slice(0,s.path.lastIndexOf('/'))||'/';return `# ${i+1}. ${name}\nmkdir -p ${quote(parent)}\ncat > ${quote(s.path)} <<'${h.delimiter}'\n${h.body}${h.delimiter}\n`;}
 if(s.kind==='dotfiles'){
 const mappings=dotfileMappings(s.mappings);
 let code=`# ${i+1}. ${name}\n(\nset -e\nrepo="$HOME/.dotfiles/step-${i+1}"\nmkdir -p "$HOME/.dotfiles"\ngit clone --quiet -- ${quote(s.url)} "$repo" > /dev/null\n`;
 if(s.revision.trim())code+=`git -C "$repo" fetch --quiet --depth=1 origin ${quote(s.revision.trim())}\ngit -C "$repo" checkout --quiet --detach FETCH_HEAD\n`;
 for(const {source} of mappings)code+=`if [ ! -e "$repo"/${quote(source)} ]; then printf '%s\\n' ${quote('Missing dotfile: '+source)} >&2; exit 1; fi\n`;
 for(const {source,destination} of mappings){code+=`target="$HOME"/${quote(destination)}\nmkdir -p "$(dirname "$target")"\nif [ -e "$target" ] || [ -L "$target" ]; then\n  backup="$target.kandelo-backup"\n  n=1\n  while [ -e "$backup" ] || [ -L "$backup" ]; do backup="$target.kandelo-backup.$n"; n=$((n + 1)); done\n  mv -- "$target" "$backup"\nfi\nln -s -- "$repo"/${quote(source)} "$target"\n`;}
 return code+')\n';
 }
 if(s.kind==='git'){
 const directory=s.directory?.trim()||decodeURIComponent(new URL(s.url).pathname.split('/').filter(Boolean).at(-1)||'repository').replace(/\.git$/,'');
 if(!directory||directory==='.'||directory==='..'||/[\/\\\0]/.test(directory))throw Error('Specify a valid clone folder name.');
 let code=`# ${i+1}. ${name}\ngit clone${s.showOutput?'':' --quiet'} -- ${quote(s.url)} ${quote(directory)}${s.showOutput?'':' > /dev/null'}\n`;
 if(s.enterDirectory)code+=`cd ${quote(directory)}\n`;
 if(s.printReadme){const folder=s.enterDirectory?'.':directory;code+=`if [ -f ${quote(folder+'/README.md')} ]; then\n  cat ${quote(folder+'/README.md')}\nelif [ -f ${quote(folder+'/readme.md')} ]; then\n  cat ${quote(folder+'/readme.md')}\nelse\n  printf '%s\\n' 'No README.md or readme.md found.'\nfi\n`;}
 return code;
 }
 if(s.kind==='python'||s.kind==='perl'){const h=heredoc(s.code,i);return `# ${i+1}. ${name}\n${s.kind==='python'?'python3':'perl'} - <<'${h.delimiter}'\n${h.body}${h.delimiter}\n`;}
 return `# ${i+1}. ${name}\n${s.code}\n`;
 }).join('\n')+compilePrompt(state);}
function compilePrompt(state){
 const preset=prompts.find(p=>p.id===(state.prompt||'image'));
 if(state.prompt===undefined||state.prompt==='image')return state.steps.some(s=>s.kind==='dotfiles'||s.kind==='git'&&s.enterDirectory)?'\n# Keep the cloned working directory in your interactive session\nexec bash -i\n':'';
 const ps1=state.prompt==='custom'?(state.customPs1||''):preset.value;
 // A child startup script cannot change its parent shell's prompt. Hand off
 // after all recipe steps, using a dedicated rc file as in the welcome demo.
 const rc=(state.steps.some(s=>s.kind==='dotfiles')?'if [ -f "$HOME/.bashrc" ]; then . "$HOME/.bashrc"; fi\n':'')+'export PS1='+quote(ps1);
 return '\n# Start an interactive Bash session with your selected prompt\nmkdir -p "$HOME/.config/kandelo-builder"\nprintf \'%s\\n\' '+quote(rc)+' > "$HOME/.config/kandelo-builder/bashrc"\nexec bash --noprofile --rcfile "$HOME/.config/kandelo-builder/bashrc" -i\n';
}

const enc=new TextEncoder();
export function b64(bytes){let str='';for(const b of bytes)str+=String.fromCharCode(b);return btoa(str).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');}
export async function gzip(bytes){return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream('gzip'))).arrayBuffer());}
export async function build(state){
 const script=compile(state),bytes=enc.encode(script);if(bytes.length>2*1024*1024)throw Error('Startup script is too large.');
 const zipped=await gzip(bytes);if(zipped.length>32768)throw Error('Compressed startup script exceeds the 32 KiB inline limit. Export a smaller recipe.');
 const sha256=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),b=>b.toString(16).padStart(2,'0')).join('');
 const image=images.find(i=>i.id===state.image),vfs=state.image==='custom'?state.customVfs:new URL(image.file,state.imageBase.replace(/\/?$/,'/')).href;
 const descriptor={version:1,id:state.image,title:state.title,base:`kandelo:${state.image}@abi8`,runtime:{arch:'wasm32',kernel:'kernel@local',memoryPages:2048,features:[],time:'real'},packages:[],mounts:[{path:'/',source:'image',ref:vfs}],boot:{argv:['/usr/bin/login'],cwd:state.cwd,env:{},inputs:[{id:'script',filename:'kandelo-link.sh',byteLength:bytes.length,sha256,source:{kind:'inline',data:b64(zipped),compression:'gzip'}}],parameters:{runScript:'script',runScriptShell:'bash'}}};
 const packed=await gzip(enc.encode(JSON.stringify(descriptor)));if(packed.length>65536)throw Error('Launch descriptor exceeds 64 KiB.');
 const url=webUrl(state.host);url.hash='k1='+b64(packed);return {script,descriptor,url:url.href};
}

export async function encodeRecipe(state){validate(state);const base=defaults();if(Object.keys(base).every(key=>key==='steps'?state.steps.length===base.steps.length&&state.steps.every((step,i)=>sameStep(step,base.steps[i])):(state[key]??(key==='prompt'?'image':key==='customPs1'?'':undefined))===base[key]))return '';const raw=enc.encode(JSON.stringify(state));if(raw.length>300000)throw Error('Recipe exceeds the 300 KB builder link limit.');const packed=await gzip(raw);if(packed.length>65536)throw Error('Recipe is too large for a builder link. Export it instead.');return 'recipe1='+b64(packed);}
export async function decodeRecipe(fragment){
 if(!fragment)return defaults();
 if(!fragment.startsWith('recipe1='))throw Error('Unsupported builder link version.');
 const encoded=fragment.slice(8);if(encoded.length>87384||!/^[A-Za-z0-9_-]+$/.test(encoded))throw Error('Invalid or oversized builder link.');
 const bytes=Uint8Array.from(atob(encoded.replaceAll('-','+').replaceAll('_','/')),c=>c.charCodeAt(0));
 const reader=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')).getReader();let total=0;const chunks=[];
 try{while(true){const {done,value}=await reader.read();if(done)break;total+=value.length;if(total>300000)throw Error('Builder recipe exceeds 300 KB.');chunks.push(value);}}catch(e){await reader.cancel().catch(()=>{});throw e;}
 const result=new Uint8Array(total);let offset=0;for(const chunk of chunks){result.set(chunk,offset);offset+=chunk.length;}
 return validate(JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(result)));
}
