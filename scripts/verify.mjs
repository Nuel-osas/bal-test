import fs from 'node:fs/promises';
import {performance} from 'node:perf_hooks';
import {chromium} from 'playwright-core';
import {PNG} from 'pngjs';
import pixelmatch from 'pixelmatch';

const source='https://www.suiball.com/';
const local=process.env.PREVIEW_URL||'http://127.0.0.1:3001';
const started=performance.now();
const directory='evidence/verification';
await fs.mkdir(directory,{recursive:true});
const report={source,local,conditions:'Same Chrome, viewport and pixel ratio; fonts and entrance animations settled; videos paused at one second and CSS loops paused during screenshot comparisons; local browser blocks external HTTP requests. Pixelmatch threshold 0.15, antialiasing excluded.',screens:[],viewports:[]};
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
async function settle(page,isLocal){
 if(isLocal)await page.waitForFunction(()=>window.suiballReady||window.suiballError,{}, {timeout:30000});
 await page.waitForFunction(()=>document.documentElement.classList.contains('w-mod-ix3'),{}, {timeout:30000});
 await page.evaluate(()=>document.fonts.ready);
 await page.waitForTimeout(3000);
 await page.mouse.move(-100,-100);
}
async function screenshot(name,original,copy){
 for(const page of [original,copy])await page.evaluate(()=>{
   document.querySelectorAll('video').forEach(v=>{v.pause();if(v.readyState>=2)v.currentTime=Math.min(1,v.duration||1)});
   document.getAnimations().filter(a=>a.effect?.getTiming().iterations===Infinity).forEach(a=>{a.pause();a.currentTime=1000});
 });
 await Promise.all([original.waitForTimeout(300),copy.waitForTimeout(300)]);
 const a=PNG.sync.read(await original.screenshot({path:`${directory}/${name}-original.png`}));
 const b=PNG.sync.read(await copy.screenshot({path:`${directory}/${name}-next.png`}));
 const diff=new PNG({width:a.width,height:a.height});
 const count=pixelmatch(a.data,b.data,diff.data,a.width,a.height,{threshold:0.15,includeAA:false});
 await fs.writeFile(`${directory}/${name}-diff.png`,PNG.sync.write(diff));
 const state=async page=>page.evaluate(()=>({scrollY,height:document.body.scrollHeight,width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
 const entry={name,differencePercent:Number((count*100/(a.width*a.height)).toFixed(3)),original:await state(original),next:await state(copy)};
 report.screens.push(entry);console.log(JSON.stringify(entry));
}
try{
 for(const [name,viewport,isMobile] of [['desktop',{width:1440,height:1000},false],['mobile',{width:390,height:844},true]]){
  const originalContext=await browser.newContext({viewport,isMobile,hasTouch:isMobile,deviceScaleFactor:1});
  const localContext=await browser.newContext({viewport,isMobile,hasTouch:isMobile,deviceScaleFactor:1,serviceWorkers:'block'});
  const issues={name,externalRequests:[],missing:[],errors:[],originalErrors:[],navigation:[]};
  await localContext.route('**/*',route=>{const url=new URL(route.request().url());if(['http:','https:'].includes(url.protocol)&&url.origin!==local){issues.externalRequests.push(url.href);return route.abort()}return route.continue()});
  const original=await originalContext.newPage(),copy=await localContext.newPage();
  copy.on('pageerror',error=>issues.errors.push(error.message));
  original.on('pageerror',error=>issues.originalErrors.push(error.message));
  copy.on('response',response=>{if(response.status()>=400)issues.missing.push({url:response.url(),status:response.status()})});
  await Promise.all([original.goto(source,{waitUntil:'networkidle',timeout:45000}),copy.goto(local,{waitUntil:'networkidle',timeout:30000})]);
  await Promise.all([settle(original,false),settle(copy,true)]);
  await screenshot(name+'-hero',original,copy);
  for(const section of ['sui','features','bitcoin']){
    for(const page of [original,copy])await page.evaluate(id=>{document.getElementById(id).scrollIntoView({block:'start',behavior:'instant'})},section);
    await Promise.all([original.waitForTimeout(2300),copy.waitForTimeout(2300)]);
    await screenshot(name+'-'+section,original,copy);
  }
  if(!isMobile){
   await copy.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await copy.waitForTimeout(500);
   for(const id of ['sui','design','security','features','bitcoin','suiball-nft']){
    await copy.locator(`.nav_menu a[href="#${id}"]`).click();
    await copy.waitForFunction(id=>Math.abs(document.getElementById(id).getBoundingClientRect().top)<2,id,{timeout:10000});
    const result=await copy.evaluate(id=>({id,hash:location.hash,top:document.getElementById(id).getBoundingClientRect().top}),id);
    issues.navigation.push(result);
    if(result.hash!=='#'+id||Math.abs(result.top)>150)throw new Error(`Navigation to ${id} failed: ${JSON.stringify(result)}`);
   }
  }
  issues.videos=await copy.locator('video').evaluateAll(videos=>videos.map(video=>({source:video.currentSrc,readyState:video.readyState,duration:video.duration,error:video.error?.message})));
  issues.links=await copy.locator('a[href^="https://"]').evaluateAll(links=>[...new Set(links.map(link=>link.href))]);
  report.viewports.push(issues);
  await originalContext.close();await localContext.close();
 }
 report.passedNetworkAndRuntime=report.viewports.every(v=>!v.externalRequests.length&&!v.missing.length&&!v.errors.length&&v.videos.every(video=>video.readyState>=2&&video.duration>0));
 if(!report.passedNetworkAndRuntime)process.exitCode=1;
}catch(error){report.error=error.stack;process.exitCode=1;console.error(error.message)}
finally{
 report.validationSeconds=Number(((performance.now()-started)/1000).toFixed(3));
 await fs.writeFile(`${directory}/report.json`,JSON.stringify(report,null,2));
 await browser.close();
 console.log(JSON.stringify({screens:report.screens.length,passedNetworkAndRuntime:report.passedNetworkAndRuntime,seconds:report.validationSeconds,error:report.error},null,2));
}
