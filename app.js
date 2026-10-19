/* Pane workspace — app logic, animation engine and synthesized UI sounds. */
'use strict';

/* ================= icons ================= */
const P={
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 tasks:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
 cal:'<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
 folder:'<path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h3.6l2 2h7.4A2.5 2.5 0 0 1 21 9.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z"/>',
 chart:'<path d="M5 19v-5M10 19V9M15 19v-7M20 19V6M3 21h18"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.5a6 6 0 0 1 3.5 5.5"/>',
 cog:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8.5" stroke-dasharray="3.2 2.4"/>',
 logo:'<rect x="4" y="4" width="16" height="16" rx="5"/><path d="M4 11h16M8.5 15h7"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 video:'<rect x="2.5" y="6" width="13" height="12" rx="3"/><path d="m15.5 10.5 6-3.5v10l-6-3.5"/>',
 flag:'<path d="M5 21V4h11l-2 4 2 4H5"/>',
 pause:'<rect x="6" y="5" width="4" height="14" rx="1.2" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1.2" fill="currentColor" stroke="none"/>',
 play:'<path d="M7 5v14l11-7z" fill="currentColor" stroke="none"/>',
 stop:'<rect x="6" y="6" width="12" height="12" rx="2.5" fill="currentColor" stroke="none"/>',
 arrow:'<path d="M7 17 17 7M8 7h9v9"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 right:'<path d="m9 6 6 6-6 6"/>',
 board:'<rect x="3.5" y="4" width="17" height="16" rx="3"/><path d="M9.5 4v16M15 4v16"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
 msg:'<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"/>',
 check:'<path d="m5 12 5 5 9-10"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 dl:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 bell:'<path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
 brush:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5S14 15 15.5 15H18a3 3 0 0 0 3-3 9 9 0 0 0-9-9z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/>',
 timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/>',
 db:'<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
 layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
 shield:'<path d="M12 3 4.5 6v6c0 4.5 3.2 8 7.5 9 4.3-1 7.5-4.5 7.5-9V6z"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 auto:'<circle cx="12" cy="12" r="8"/><path d="M12 4v16a8 8 0 0 0 0-16z" fill="currentColor"/>',
 trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
 badge:'<rect x="4" y="3" width="16" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M8 17h8"/>',
 at:'<circle cx="12" cy="12" r="4"/><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"/>',
 due:'<path d="M5 21V4h11l-2 4 2 4H5"/>',
 meet:'<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17"/>',
 inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5 5h14l2 8v6H3v-6z"/>',
 table:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
 dots:'<circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/>'
};
const I=(n,s='')=>`<svg class="i" viewBox="0 0 24 24" ${s}>${P[n]}</svg>`;
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

/* ================= animation engine ================= */
const Clock={now:()=>performance.now()/1000};
const E={
 linear:t=>t,
 outCubic:t=>1-(1-t)**3,
 outQuart:t=>1-(1-t)**4,
 inOutCubic:t=>t<.5?4*t*t*t:1-(-2*t+2)**3/2,
 outBack:t=>{const s=1.6;return 1+(s+1)*(t-1)**3+s*(t-1)**2},
 spring:t=>1-Math.exp(-7*t)*Math.cos(6.2*t)
};
const Tw=new Set(),Timers=new Set();
function tw(o){o.s=Clock.now()+(o.delay||0);o.ease=o.ease||E.outCubic;if(o.from==null)o.from=0;if(o.to==null)o.to=1;
 if(o.tag)kill(o.tag);Tw.add(o);o.update(o.from,0);return o}
function kill(tag){for(const t of Tw)if(t.tag===tag)Tw.delete(t)}
function after(dt,fn,tag){const t={at:Clock.now()+dt,fn,tag};Timers.add(t);return t}
function cancel(tag){for(const t of Timers)if(t.tag===tag)Timers.delete(t)}
function step(){const n=Clock.now();
 for(const t of [...Tw]){let p=(n-t.s)/t.dur;if(p<0)continue;if(p>1)p=1;t.update(t.from+(t.to-t.from)*t.ease(p),p);if(p>=1){Tw.delete(t);t.done&&t.done()}}
 for(const t of [...Timers])if(n>=t.at){Timers.delete(t);t.fn()}
 Focus.tick();Drag.frame();
}
let lastStep=0;
function safeStep(){lastStep=performance.now();try{step()}catch(e){console.error(e)}}
function loop(){safeStep();requestAnimationFrame(loop)}
// background tabs pause rAF: keep timers/toasts advancing anyway
setInterval(()=>{if(performance.now()-lastStep>90)safeStep()},100);
const lerp=(a,b,p)=>a+(b-a)*p;

/* ================= sounds (synthesized with Web Audio) ================= */
const Sfx=(()=>{
 let ctx=null,master,noise;
 function init(){
  if(ctx)return true;
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;
  ctx=new AC();
  const comp=ctx.createDynamicsCompressor();comp.threshold.value=-6;comp.ratio.value=8;comp.attack.value=.001;comp.release.value=.08;
  master=ctx.createGain();master.gain.value=.55;master.connect(comp);comp.connect(ctx.destination);
  noise=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);const d=noise.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  return true;
 }
 // one mechanical transient: band-limited noise snap + short resonant ping
 function snap(t,gain,hp,ring,ringQ,dec){
  const src=ctx.createBufferSource();src.buffer=noise;
  const f=ctx.createBiquadFilter();f.type='highpass';f.frequency.value=hp;
  const g=ctx.createGain();g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0005,t+dec);
  src.connect(f);f.connect(g);g.connect(master);src.start(t,Math.random()*.5);src.stop(t+dec+.02);
  if(ring){const s2=ctx.createBufferSource();s2.buffer=noise;const b=ctx.createBiquadFilter();b.type='bandpass';b.frequency.value=ring;b.Q.value=ringQ;
   const g2=ctx.createGain();g2.gain.setValueAtTime(gain*2.4,t);g2.gain.exponentialRampToValueAtTime(.0005,t+dec*3);
   s2.connect(b);b.connect(g2);g2.connect(master);s2.start(t,Math.random()*.5);s2.stop(t+dec*3+.02)}
 }
 function tone(t,freq,gain,att,dec,type='sine',f2){
  const o=ctx.createOscillator();o.type=type;o.frequency.setValueAtTime(freq,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+att+dec*.6);
  const g=ctx.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gain,t+att);g.gain.exponentialRampToValueAtTime(.0004,t+att+dec);
  o.connect(g);g.connect(master);o.start(t);o.stop(t+att+dec+.05);
 }
 const kinds={
  // press + release with low body (nav / checkbox)
  click(t){snap(t,.55,900,1400,2,.006);snap(t+.033,.8,700,1100,2,.007);tone(t+.033,262,.35,.002,.05);tone(t+.033,790,.18,.002,.035)},
  // thin double click (pick up, swatches)
  pop(t){snap(t,.6,2200,1050,6,.005);snap(t+.044,.7,1800,1080,6,.006)},
  // crisp tick (segmented controls, primary buttons)
  tick(t){snap(t,.7,2600,2120,9,.004);snap(t+.034,.75,2600,2080,9,.005)},
  // drop: short pitched "whoop" falling ~1.5kHz → 380Hz
  drop(t){tone(t,1500,.55,.014,.11,'sine',380);tone(t,3000,.12,.014,.07,'sine',760);snap(t,.25,3000,0,0,.004)},
  // island expand: quick ticks + soft C-major swell + air
  expand(t){snap(t,.5,2500,0,0,.004);snap(t+.012,.4,2500,0,0,.004);snap(t+.026,.45,2000,0,0,.004);
   [261.6,329.6,392,523.3].forEach((f,i)=>tone(t+.02,f,.16-i*.02,.07,.55));
   const s=ctx.createBufferSource();s.buffer=noise;const b=ctx.createBiquadFilter();b.type='bandpass';b.Q.value=.8;
   b.frequency.setValueAtTime(4000,t);b.frequency.exponentialRampToValueAtTime(700,t+.7);
   const g=ctx.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.06,t+.08);g.gain.exponentialRampToValueAtTime(.0005,t+.8);
   s.connect(b);b.connect(g);g.connect(master);s.start(t);s.stop(t+.85)}
 };
 function play(k){try{if(!init())return;if(ctx.state==='suspended')ctx.resume();kinds[k](ctx.currentTime+.005)}catch(e){}}
 return {play};
})();

/* ================= data ================= */
const PROJ={
 orbit:{n:'Orbit 2.0 launch',hex:'#a78bfa'},
 tide:{n:'Tide mobile app',hex:'#5b9cf6'},
 north:{n:'Northstar analytics',hex:'#2dd4bf'},
 sprout:{n:'Sprout onboarding',hex:'#4ade80'},
 facet:{n:'Facet design system',hex:'#f472b6'},
 q4:{n:'Q4 brand campaign',hex:'#fb923c'}
};
/* original illustrated avatars */
const PEOPLE=[
 {n:'Lin Zhao',skin:'#f0c8a8',hair:'#17110e',bg:['#3a2d3d','#1d1a24'],style:'long',shirt:'#c0392b'},
 {n:'Kwame Mensah',skin:'#7a4a2e',hair:'#120c08',bg:['#3b3324','#1e1b14'],style:'short',shirt:'#e5e7eb'},
 {n:'Haruto Sato',skin:'#e6b991',hair:'#1c1712',bg:['#253244','#141a24'],style:'side',shirt:'#334155'},
 {n:'Nia Brooks',skin:'#9a6243',hair:'#1a100a',bg:['#3a2a36','#1d151b'],style:'curly',shirt:'#14532d'},
 {n:'Mateo Ruiz',skin:'#c99068',hair:'#2a1a10',bg:['#2f3a2c','#171c16'],style:'beard',shirt:'#7f1d1d'},
 {n:'Ava Stone',skin:'#f3d2b8',hair:'#8a5a2b',bg:['#33313c','#1a1920'],style:'bob',shirt:'#1e3a8a'}
];
function face(i,size=20){
 const p=PEOPLE[i%PEOPLE.length],id='g'+i+'_'+size;
 const hair={
  long:`<path d="M9 22c-1-9 2-14 11-14s12 5 11 14l1 12H8z" fill="${p.hair}"/>`,
  short:`<path d="M12 16c0-6 4-8.5 8-8.5s8 2.5 8 8.5c-2-3-5-3.5-8-3.5s-6 .5-8 3.5z" fill="${p.hair}"/>`,
  side:`<path d="M11.5 18c-.5-7 3.5-10.5 9-10.5 5 0 8.5 3 8 9-2-4-6-5.5-12-4-2 .7-3.5 2.5-5 5.5z" fill="${p.hair}"/>`,
  curly:`<circle cx="20" cy="13" r="8.5" fill="${p.hair}"/><circle cx="13" cy="17" r="4" fill="${p.hair}"/><circle cx="27" cy="17" r="4" fill="${p.hair}"/>`,
  beard:`<path d="M12 16c0-6 4-8.5 8-8.5s8 2.5 8 8.5c-2-3-5-3.5-8-3.5s-6 .5-8 3.5z" fill="${p.hair}"/><path d="M13.5 20c0 6 3 8.5 6.5 8.5s6.5-2.5 6.5-8.5c-1 3-3.5 4.5-6.5 4.5s-5.5-1.5-6.5-4.5z" fill="${p.hair}"/>`,
  bob:`<path d="M10.5 24c-1.5-10 2.5-15.5 9.5-15.5s11 5.5 9.5 15.5h-3c.5-6-1.5-9.5-6.5-9.5s-7 3.5-6.5 9.5z" fill="${p.hair}"/>`
 }[p.style];
 return `<svg class="av" width="${size}" height="${size}" viewBox="0 0 40 40" aria-label="${p.n}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.bg[0]}"/><stop offset="1" stop-color="${p.bg[1]}"/></linearGradient></defs>
 <rect width="40" height="40" fill="url(#${id})"/>${p.style==='long'||p.style==='bob'?hair:''}
 <path d="M6 40c1-7 7-10 14-10s13 3 14 10z" fill="${p.shirt}"/><rect x="17" y="24" width="6" height="7" rx="2.5" fill="${p.skin}"/>
 <ellipse cx="20" cy="18.5" rx="7" ry="8.3" fill="${p.skin}"/>${p.style==='long'||p.style==='bob'?'':hair}</svg>`;
}
const av=(i,size=20)=>face(i,size);

let uid=1;
const T=(title,project,status,o={})=>({id:uid++,title,project,status,priority:o.p||'',due:o.d||'Today',sub:o.s||null,comments:o.c||0,who:o.w??0,
 home:!!o.home,ord:o.ord??(10+uid),doneAt:status==='done'?(o.at||-uid):null,more:!!o.more});
function seed(){uid=1;return[
 // home "My tasks" in the order shown
 T('Review Tide release checklist','tide','todo',{p:'High',home:true,w:0,ord:50}),
 T('Approve Orbit press kit','orbit','todo',{p:'Urgent',home:true,w:0,ord:51}),
 T('Write Sprout read-out summary','sprout','progress',{p:'High',home:true,w:0,ord:99}),
 T('Reply to Facet token questions','facet','todo',{home:true,w:0,ord:52}),
 T('Plan next sprint goals','tide','todo',{home:true,w:0,ord:53}),
 T('Invite flow friction log','sprout','review',{p:'Urgent',home:true,w:0,ord:0}),
 T('Answer Kwame on the sync edge case','tide','done',{d:'Oct 16',home:true,w:0,at:-2}),
 // to do
 T('Moodboard round one','q4','todo',{d:'Dec 7',c:1,w:5}),
 T('Media plan budget','q4','todo',{d:'Nov 13',w:5}),
 T('Agency shortlist','q4','todo',{d:'Dec 2',s:[1,3],w:4}),
 T('Campaign line options','q4','todo',{d:'Nov 18',p:'High',w:2}),
 T('Photography call sheet','q4','todo',{d:'Mon',p:'Urgent',c:1,w:4}),
 T('Launch-day run of show','orbit','todo',{d:'Wed',p:'High',w:1}),
 T('Founder blog post','orbit','todo',{d:'Nov 4',w:3}),
 T('Menu + content audit','facet','todo',{d:'Nov 20',w:5}),
 T('Avatar stack','facet','todo',{d:'Sep 1',w:2}),
 // in progress
 T('Creative brief draft','q4','progress',{d:'Nov 7',s:[2,3],w:4,more:true}),
 T('Day-3 nudge email','sprout','progress',{d:'Sun',p:'Urgent',c:1,w:5}),
 T('Partner quotes sign-off','orbit','progress',{d:'Tomorrow',p:'High',w:2}),
 T('Motion guidelines page','facet','progress',{d:'Thu',w:5}),
 T('Crash on cold launch in iOS 18','tide','progress',{d:'Oct 30',s:[2,3],c:1,w:4}),
 T('Component usage analytics','facet','progress',{d:'Nov 2',s:[2,3],c:1,w:5}),
 T('Settings search','tide','progress',{d:'Tue',w:2}),
 T('Onboarding copy review','tide','progress',{d:'Nov 9',p:'High',w:1}),
 // in review
 T('Pricing page FAQ','orbit','review',{d:'Oct 23',c:1,w:2}),
 T('Product Hunt assets','orbit','review',{d:'Sun',p:'High',s:[2,3],w:5}),
 T('Read-out deck','sprout','review',{d:'Today',p:'High',s:[2,3],w:1}),
 T('Date picker','facet','review',{d:'Oct 26',s:[2,3],w:3}),
 T('Push notification permissions flow','tide','review',{d:'Nov 9',p:'Urgent',w:5}),
 T('Token export to iOS','facet','review',{d:'Nov 7',p:'Urgent',w:3}),
 T('Accessibility audit: Dynamic Type','tide','review',{d:'Nov 9',w:1}),
 // done
 T('Share sprint notes','facet','done',{d:'Oct 16',w:0,at:-1}),
 T('Build offline queue for edits','tide','done',{d:'Oct 7',s:[3,3],w:1,at:-3}),
 T('Profile screen empty states','tide','done',{d:'Oct 6',s:[3,3],w:2,at:-4}),
 T('Haptics pass on the tab bar','tide','done',{d:'Oct 6',w:1,at:-5}),
 T('Write release notes for 3.0','tide','done',{d:'Oct 2',c:1,w:1,at:-6}),
 T('Activation funnel dashboard','sprout','done',{d:'Oct 2',w:4,at:-7})
]}
const COLS=[['todo','To do','transparent'],['progress','In progress','#3b82f6'],['review','In review','#a855f7'],['done','Done','#22c55e']];
const ACCENTS=[['Blue','#2f7cf6'],['Purple','#8b5cf6'],['Pink','#e8336f'],['Orange','#ea6a0c'],['Green','#16a34a'],['Graphite','#6b7280']];
const WALLS={
 Ash:'linear-gradient(180deg,#202426,#1d2123 60%,#1c1f22)',
 Sand:'radial-gradient(120% 80% at 70% 0%,#4a3520 0%,#22190f 55%,#16120d 100%)',
 Sage:'radial-gradient(120% 80% at 70% 0%,#2a3a27 0%,#18211a 55%,#121612 100%)',
 Aurora:'radial-gradient(60% 50% at 80% 10%,#4f46e5aa,transparent),radial-gradient(70% 60% at 10% 90%,#1e3a8acc,transparent),linear-gradient(160deg,#0f1544,#151a3a 60%,#0b0d22)',
 Smoke:'radial-gradient(60% 40% at 70% 30%,#5555,transparent),radial-gradient(50% 50% at 20% 80%,#4446,transparent),#111214',
 Tide:'radial-gradient(70% 50% at 90% 0%,#22d3ee,transparent 70%),radial-gradient(70% 60% at 0% 100%,#7c3aed,transparent 70%),linear-gradient(170deg,#0e7490,#1e40af 55%,#4c1d95)',
 Bloom:'radial-gradient(60% 50% at 90% 10%,#f59e0b,transparent 70%),radial-gradient(80% 60% at 0% 100%,#7c3aed,transparent 70%),linear-gradient(170deg,#1e1b4b,#be185d 60%,#ea580c)',
 Ember:'radial-gradient(60% 50% at 90% 10%,#fbbf24,transparent 70%),linear-gradient(170deg,#1c1917,#b91c1c 55%,#f97316)',
 Grove:'radial-gradient(60% 50% at 90% 10%,#facc15,transparent 70%),radial-gradient(80% 60% at 0% 100%,#14532d,transparent 70%),linear-gradient(170deg,#064e3b,#16a34a 55%,#a3e635)',
 Dusk:'radial-gradient(60% 50% at 90% 10%,#a78bfa55,transparent 70%),linear-gradient(170deg,#1f1b2e,#3b2f55 60%,#5b3a5e)'
};
const RANGES={
 '7D':{n:7,c:38,o:97,f:92,cy:3.2,late:1,pts:[4,6,5,7,6,5,5],by:[9,8,7,6,7,1],bars:[.55,.62,.48,.7,.58,.2,.66],lbl:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],ax:['Oct 10','Oct 12','Oct 14','Oct 16']},
 '30D':{n:30,c:160,o:96,f:348,cy:4.1,late:6,pts:[3,6,4,8,5,7,6,9,5,6,8,7,4,6,9,7],by:[38,33,30,29,29,1],bars:[.58,.66,.52,.72],lbl:['Sep 19','Sep 26','Oct 3','Oct 10'],ax:['Sep 16','Sep 23','Sep 30','Oct 7','Oct 14']},
 '90D':{n:90,c:333,o:98,f:818,cy:4.0,late:7,pts:[19,19.5,21,22,25,27,24,26,22,18,23,26,31,36,33,29,28],by:[78,67,67,61,59,1],bars:[.64,.63,.59,.59,.53,.65,.56,.7,.58,.59,.69,.67,.52],lbl:['Jul 18','Jul 25','Aug 1','Aug 8','Aug 15','Aug 22','Aug 29','Sep 5','Sep 12','Sep 19','Sep 26','Oct 3','Oct 10'],ax:['Jul 18','Aug 1','Aug 15','Aug 29','Sep 12','Sep 26','Oct 10']}
};

/* ================= state ================= */
const store={get(k,d){try{const v=localStorage.getItem('pane:'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('pane:'+k,JSON.stringify(v))}catch(e){}}};
const S={
 page:location.hash.slice(1)||'home',
 tasks:store.get('tasks',null)||seed(),
 view:'board',filter:{project:'all',mine:false,priority:'any',q:''},
 range:'30D',setTab:'Profile',dur:25,
 prefs:Object.assign({theme:'dark',wall:'Ash',accent:'Blue',glass:'tinted',solid:false,mentions:true,dueDates:true,meetings:true,digest:false,focusDone:true,session:25,brk:5},store.get('prefs',{}))
};
uid=Math.max(...S.tasks.map(t=>t.id))+1;
const save=()=>{store.set('tasks',S.tasks);store.set('prefs',S.prefs)};
const doneCount=()=>S.tasks.filter(t=>t.status==='done'&&t.doneAt>0).length;
const counts=()=>{const open=S.tasks.filter(t=>t.status!=='done').length;return{open:open+2,due:11,over:0,doneWeek:25+doneCount(),doneToday:2+doneCount(),left:S.tasks.filter(t=>t.home&&t.status!=='done').length}};
const COLOFF={todo:2,progress:0,review:0,done:23};

/* ================= theme / accent ================= */
const hex2=h=>{const n=parseInt(h.slice(1),16);return[(n>>16)&255,(n>>8)&255,n&255]};
let curAccent=null;
function setAccentVars(rgb){const r=document.documentElement;const h='#'+rgb.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('');
 r.style.setProperty('--accent',h);r.style.setProperty('--accent-rgb',rgb.map(Math.round).join(','));curAccent=rgb}
function applyPrefs(animate){
 const r=document.documentElement,p=S.prefs;
 const target=hex2((ACCENTS.find(x=>x[0]===p.accent)||ACCENTS[0])[1]);
 if(animate&&curAccent){const from=curAccent.slice();tw({tag:'accent',dur:.32,ease:E.outCubic,update:(v)=>setAccentVars(from.map((c,i)=>lerp(c,target[i],v)))})}
 else setAccentVars(target);
 const dark=p.theme==='auto'?matchMedia('(prefers-color-scheme: dark)').matches:p.theme==='dark';
 r.dataset.theme=dark?'dark':'light';r.dataset.glass=p.glass;r.dataset.solid=p.solid?'1':'0';
 $('#wall').style.background=p.wall==='Ash'?(dark?WALLS.Ash:'#e8e9ed'):WALLS[p.wall];
}

/* ================= shared fragments ================= */
const tag=pid=>`<span class="tag"><i style="background:${PROJ[pid].hex}"></i>${PROJ[pid].n}</span>`;
const prio=p=>p?`<span class="pr ${p}">${p==='Urgent'?I('flag'):''}${p}</span>`:'';
const fmt=s=>{s=Math.max(0,Math.ceil(s-1e-6));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const stat=(k,v,s='',attrs='')=>`<div class="stat glass" data-e="1"><div class="k">${k}</div><div class="v"><span ${attrs}>${v}</span>${s?`<small>${s}</small>`:''}</div></div>`;
function smoothPath(pts){let d=`M${pts[0][0]},${pts[0][1]}`;for(let i=0;i<pts.length-1;i++){const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
 d+=` C${p1[0]+(p2[0]-p0[0])/6},${p1[1]+(p2[1]-p0[1])/6} ${p2[0]-(p3[0]-p1[0])/6},${p2[1]-(p3[1]-p1[1])/6} ${p2[0]},${p2[1]}`}return d}

/* count-up helper: el[data-count]; keeps current value for retargeting */
function countTo(el,to,{dur=.9,delay=0,dec=0,fmt:f}={}){
 if(!el)return;const from=el._v??+(el.dataset.from||0);
 tw({tag:el,from,to,dur,delay,ease:E.outCubic,update:v=>{el._v=v;el.textContent=f?f(v):v.toFixed(dec)}});
}
/* page enter: stagger elements tagged data-e (value = group order) */
function enter(root){
 const els=$$('[data-e]',root);
 els.forEach((el,i)=>{const g=+el.dataset.e||0;const d=g*.055+Math.min(i,14)*.012;
  tw({from:0,to:1,dur:.5,delay:d,ease:E.outCubic,update:v=>{el.style.opacity=v;el.style.transform=`translateY(${(1-v)*14}px)`},done:()=>{el.style.transform=''}})});
}

/* ================= sidebar ================= */
const NAV=[['home','home'],['tasks','tasks'],['calendar','cal'],['projects','folder'],['insights','chart'],['team','users'],['settings','cog']];
function renderSide(){
 $('#side').innerHTML=`<div class="logo">${I('logo')}</div>`+
  NAV.map(([k,ic])=>`<button class="nav ${S.page===k?'on':''}" data-go="${k}" title="${k[0].toUpperCase()+k.slice(1)}"><span class="on-bg" style="${S.page===k?'opacity:1;transform:none':''}"></span>${I(ic)}</button>`).join('')+
  `<div class="me">${av(0,28)}</div>`;
}
function moveNav(to){
 $$('#side .nav').forEach(n=>{const on=n.dataset.go===to,bg=$('.on-bg',n);n.classList.toggle('on',on);
  const from=+getComputedStyle(bg).opacity;
  tw({tag:bg,from,to:on?1:0,dur:on?.32:.2,ease:on?E.outBack:E.outCubic,update:v=>{bg.style.opacity=Math.min(1,Math.max(0,v));bg.style.transform=`scale(${.6+.4*Math.min(v,1.05)})`}})});
}

/* ================= island ================= */
const Isl={el:null,body:null,w:156,h:30,state:'hidden',vis:0};
const ISL={pill:[156,30,15],toast:[300,47,23.5],big:[344,132,30]};
function islandHTML(kind,data){
 if(kind==='pill')return `<div class="isl-row isl-pill"><span class="l">${miniRing(15,2.2)}Focus</span><span class="t" data-timer>${fmt(Focus.left())}</span></div>`;
 if(kind==='done')return `<div class="isl-row isl-toast"><span class="ic" style="background:#2fbf5b">${I('check')}</span><span class="msg">Done: ${data.title}</span><button class="undo" data-undo>Undo</button></div>`;
 if(kind==='info')return `<div class="isl-row isl-toast"><span class="ic" style="background:#6f61e8">${I('moon','style="stroke-width:2.2"')}</span><span class="msg">${data.text}</span></div>`;
 if(kind==='big')return `<div class="isl-big"><div class="top"><div class="l">${miniRing(28,3)}<div><div class="lbl">Focus session</div><div class="nm">${Focus.label()}</div></div></div><div class="bt" data-timer>${fmt(Focus.left())}</div></div>
  <div class="ctl"><button class="plus" data-act="plus5">+5 min</button><button class="pz" data-act="toggle">${Focus.state==='run'?I('pause'):I('play')}</button><button class="st" data-act="end">${I('stop')}</button></div></div>`;
}
function miniRing(sz,w){const r=sz/2-w/2-.5,c=2*Math.PI*r;return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" style="transform:rotate(-90deg)"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="rgba(245,165,36,.25)" stroke-width="${w}"/><circle data-arc="${c}" cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="#f5a524" stroke-width="${w}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-Focus.frac())}"/></svg>`}
function islSize(w,h,r){Isl.w=w;Isl.h=h;Object.assign(Isl.el.style,{width:w+'px',height:h+'px',borderRadius:r+'px'})}
/* morph the island to a new kind; old content fades, shell resizes, new content fades in */
function island(kind,data={},opt={}){
 const el=Isl.el,body=Isl.body,[W,H,R]=ISL[kind==='done'||kind==='info'?'toast':kind];
 cancel('isl');kill('islSize');kill('islBody');kill('islVis');
 const prevKind=Isl.state;Isl.state=kind;el.classList.add('show');
 if(Isl.vis<1){ // appear from nothing
  islSize(W*.55,H*.75,R);body.innerHTML=islandHTML(kind,data);body.style.opacity=0;
  tw({tag:'islVis',from:Isl.vis,to:1,dur:.18,update:v=>{Isl.vis=v;el.style.opacity=v}});
  const w0=Isl.w,h0=Isl.h;tw({tag:'islSize',dur:.34,ease:E.spring,update:v=>islSize(lerp(w0,W,v),lerp(h0,H,v),R)});
  tw({tag:'islBody',delay:.12,dur:.18,update:v=>body.style.opacity=v});
 }else{
  const w0=Isl.w,h0=Isl.h,r0=parseFloat(el.style.borderRadius)||15,o0=+body.style.opacity||1;
  const outDur=opt.outDur??.07,hold=opt.hold??0,sizeDur=opt.sizeDur??.2;
  tw({tag:'islBody',from:o0,to:0,dur:outDur,update:v=>body.style.opacity=v});
  tw({tag:'islSize',delay:opt.sizeDelay??0,dur:sizeDur,ease:opt.sizeEase||E.outCubic,update:v=>islSize(lerp(w0,W,v),lerp(h0,H,v),lerp(r0,R,v))});
  after(Math.max(outDur,opt.swapAt??0)+hold,()=>{body.innerHTML=islandHTML(kind,data);
   tw({tag:'islBody',from:0,to:1,dur:opt.inDur??.14,update:v=>body.style.opacity=v})},'isl');
 }
 if(opt.ttl)after(opt.ttl,()=>{if(Isl.state===kind)islandRest()},'isl');
}
/* where the island returns after a toast */
function islandRest(){
 if(Focus.state!=='ready')island('pill',{}, {outDur:.08,sizeDelay:.04,sizeDur:.22,swapAt:.12,inDur:.12});
 else{Isl.state='hidden';kill('islBody');tw({tag:'islVis',from:Isl.vis,to:0,dur:.2,update:v=>{Isl.vis=v;Isl.el.style.opacity=v;Isl.el.style.transform=`translateX(-50%) scale(${.85+.15*v})`},done:()=>{Isl.el.classList.remove('show');Isl.el.style.transform='translateX(-50%)'}})}
}
let undoFn=null;
function toastDone(title,undo){undoFn=undo;island('done',{title},{ttl:2.6,outDur:.08,sizeDur:.16,swapAt:.12,inDur:.12})}
function toastInfo(text){undoFn=null;island('info',{text},{ttl:1.7,outDur:.05,hold:.1,sizeDur:.16,inDur:.14})}

/* ================= focus timer ================= */
const Focus={
 state:'ready',total:25*60,endAt:0,pausedLeft:0,mins:25,
 left(){return this.state==='run'?Math.max(0,this.endAt-Clock.now()):this.state==='pause'?this.pausedLeft:this.mins*60},
 frac(){return this.state==='ready'?0:1-this.left()/this.total},
 label(){return this.mins+'-minute block'},
 start(){this.total=this.mins*60;this.endAt=Clock.now()+this.total;this.state='run';Sfx.play('tick');
  undoFn=null;island('info',{text:'Focus started — notifications are held'},{outDur:.05,hold:.12,sizeDur:.16,inDur:.14});
  after(1.75,()=>{if(Isl.state==='info')island('pill',{},{outDur:.1,sizeDur:.2,swapAt:.1,inDur:.1})},'isl');
  refreshFocus(true)},
 toggle(){if(this.state==='run'){this.pausedLeft=this.left();this.state='pause'}else if(this.state==='pause'){this.endAt=Clock.now()+this.pausedLeft;this.state='run'}refreshFocus()},
 end(){this.state='ready';if(Isl.state==='big'||Isl.state==='pill')islandRest();refreshFocus(true)},
 plus5(){if(this.state==='ready')return;this.total+=300;if(this.state==='run')this.endAt+=300;else this.pausedLeft+=300},
 _last:-1,
 tick(){const l=Math.ceil(this.left()-1e-6);if(this.state==='run'&&this.left()<=0){this.end();toastInfo('Focus session complete');return}
  if(l!==this._last){this._last=l;$$('[data-timer]').forEach(e=>e.textContent=fmt(this.left()));
   $$('[data-fsub]').forEach(e=>e.textContent=this.state!=='ready'?'In focus · '+fmt(this.left())+' left':'Not running')}
  const fr=this.frac();$$('[data-arc]').forEach(e=>e.style.strokeDashoffset=e.dataset.arc*(1-fr));
  const fa=$('[data-farc]');if(fa){fa.style.strokeDashoffset=fa.dataset.c*(1-fr);const dot=$('[data-fdot]');if(dot){const a=fr*2*Math.PI;dot.setAttribute('cx',45+40*Math.cos(a));dot.setAttribute('cy',45+40*Math.sin(a))}}}
};
function focusInner(){
 const f=Focus,run=f.state!=='ready',c=2*Math.PI*40;
 return `<div class="fring ${run?'run':''}"><svg viewBox="0 0 90 90"><circle cx="45" cy="45" r="40" stroke="rgba(255,255,255,.08)" stroke-width="5" fill="none"/>
  ${run?`<circle data-farc data-c="${c}" cx="45" cy="45" r="40" stroke="#f5a524" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-f.frac())}"/><circle data-fdot cx="85" cy="45" r="3.4" fill="#f5a524"/>`:''}</svg>
  <div class="c"><b data-timer>${fmt(f.left())}</b><span>${run?(f.state==='pause'?'Paused':'Focusing'):'Ready'}</span></div></div>
  <div class="fside">${run?`<div class="blk">${f.label()}</div><div class="fctl"><button class="btn" data-act="toggle">${f.state==='pause'?I('play')+'Resume':I('pause')+'Pause'}</button><button class="btn" data-act="end">${I('stop')}End</button></div>`
  :`<div class="dur">${[15,25,50].map(m=>`<button class="${f.mins===m?'on':''}" data-dur="${m}">${m}m</button>`).join('')}</div><div class="fsel">No task — just focus</div><button class="btn pri start" data-act="start">${I('play')}Start focus</button>`}</div>`;
}
function refreshFocus(cross){
 const box=$('[data-fbox]');
 if(box){if(cross){tw({tag:box,from:1,to:0,dur:.08,update:v=>box.style.opacity=v,done:()=>{box.innerHTML=focusInner();tw({tag:box,from:0,to:1,dur:.2,update:v=>box.style.opacity=v})}})}else box.innerHTML=focusInner()}
 if(Isl.state==='big')Isl.body.innerHTML=islandHTML('big');
 if(S.page==='settings'){const r=$('[data-focusrow]');if(r)r.outerHTML=focusRow()}
 Focus._last=-1;
}

/* ================= pages ================= */
function homeTasks(){const h=S.tasks.filter(t=>t.home);return h.filter(t=>t.status!=='done').concat(h.filter(t=>t.status==='done').sort((a,b)=>b.doneAt-a.doneAt))}
const rowTask=t=>`<div class="tr ${t.status==='done'?'done':''}" data-row="${t.id}"><button class="cb" data-toggle="${t.id}"><span class="fill"></span>${I('check')}</button>
 <div class="grow"><div class="tt">${t.title}<span class="strike"></span></div><div class="meta">${tag(t.project)}<span>${t.status==='done'?t.due:'Today'}</span></div></div>${prio(t.priority)}</div>`;
function pageHome(){
 const c=counts();const week=[.47,.29,.33,.52,.36,.02,.02];
 const ring=(r,col,w)=>{const C=2*Math.PI*r;return `<circle cx="50" cy="50" r="${r}" stroke="${col}" stroke-opacity=".2" stroke-width="${w}" fill="none"/><circle data-ring cx="50" cy="50" r="${r}" stroke="${col}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C}" transform="rotate(-90 50 50)"/>`};
 return `<div class="page">
 <div class="head" data-e="0"><div><h1>Good morning, Lin</h1><div class="sub">Friday, October 16 · 4 meetings and <span data-left>${c.left}</span> tasks left today</div></div>
  <div class="btns"><button class="btn" data-new>${I('plus')}New task</button><button class="btn pri" data-go="calendar">${I('video')}Next: 11:00 AM</button></div></div>
 <div class="stats">${stat('Done today',c.doneToday,'/ 8','data-donetoday')}${stat('Focus today','47m','','data-focustoday')}${stat('Overdue',0)}</div>
 <div class="grid home-grid">
  <section class="card glass today-card" data-e="2"><h3>Today</h3><div class="cs">Close your rings</div>
   <div class="rings"><svg viewBox="0 0 100 100" width="94" height="94" data-rings>${ring(43,'#f43f6b',8)}${ring(32.5,'#34c46d',8)}${ring(22,'#22c3e6',8)}</svg>
   <div class="rl"><div class="it" style="border-color:#f43f6b"><div class="k">Tasks</div><div class="v"><span data-ringtasks>${c.doneToday}</span><small>/ 8</small></div></div>
   <div class="it" style="border-color:#34c46d"><div class="k">Focus</div><div class="v">1.1h<small>/ 2h</small></div></div>
   <div class="it" style="border-color:#22c3e6"><div class="k">Meetings</div><div class="v">1<small>/ 4</small></div></div></div></div>
  </section>
  <section class="card glass upnext-card" data-e="3" style="height:282px"><h3>Up next</h3><a class="link" href="#calendar">Calendar</a>
   <div class="event"><div class="in">in <b>20 min</b></div><div class="ti">Tide sync review</div><div class="tm">11:00 AM – 11:45 AM · Video call</div>
    <div class="stack">${av(0,22)}${av(1,22)}${av(4,22)}${av(2,22)}</div><button class="join">${I('video')}Join</button></div>
   <div class="agenda"><div class="a red">Lunch &amp; learn: glass materials<span>12:30 PM</span></div><div class="a">Deep work<span>2:00 PM</span></div><div class="a">Orbit launch film cut<span>4:00 PM</span></div></div>
  </section>
  <section class="card glass focus-card" data-e="4"><h3>Focus</h3><div class="cs">The island keeps the time</div><div class="fbox" data-fbox>${focusInner()}</div></section>
  <section class="card glass tasks-card" data-e="5"><h3>My tasks</h3><div class="cs">Due today and late</div><a class="link" href="#tasks">All tasks</a>
   <div class="tl" data-tl>${homeTasks().map(t=>rowTask(t).replace('class="tr','data-e="6" class="tr')).join('')}</div></section>
  <section class="card glass span2 week-card" data-e="7"><h3>This week</h3><div class="cs">Tasks the team finished</div><a class="link" href="#insights" style="color:var(--muted)">${I('arrow')}</a>
   <div class="week-n"><b data-week>0</b><span>finished so far</span><span class="d" data-wd style="color:#f87171">-4% vs last week</span></div>
   <div class="bars">${week.map(h=>`<div class="bar"><i data-h="${h}"></i></div>`).join('')}</div>
   <div class="bl">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<span>${d}</span>`).join('')}</div></section>
 </div></div>`;
}
function afterHome(root){
 const c=counts();
 const ft=$('[data-focustoday]',root);countTo(ft,66,{from:47,dur:.75,fmt:v=>v<59.5?Math.round(v)+'m':(v/60).toFixed(1)+'h'});ft._v=47;countTo(ft,66,{dur:.75,fmt:v=>v<59.5?Math.round(v)+'m':(v/60).toFixed(1)+'h'});
 const r=$$('[data-ring]',root),vals=[c.doneToday/8,.55,.25];
 r.forEach((el,i)=>{const C=+el.getAttribute('stroke-dasharray');tw({tag:el,from:C,to:C*(1-vals[i]),dur:1,delay:.12+i*.07,ease:E.outCubic,update:v=>el.style.strokeDashoffset=v})});
 const wk=$('[data-week]',root),wd=$('[data-wd]',root);wk._v=0;
 tw({tag:wk,from:0,to:25,dur:1.9,delay:.1,ease:E.outCubic,update:v=>{wk._v=v;wk.textContent=Math.round(v);const up=v>=24.5;wd.textContent=(up?'+4%':'-4%')+' vs last week';wd.style.color=up?'#4ade80':'#f87171'}});
 $$('[data-h]',root).forEach((b,i)=>tw({tag:b,from:0,to:+b.dataset.h,dur:.85,delay:.18+i*.06,ease:E.outCubic,update:v=>b.style.height=v*100+'%'}));
}

function filtered(){const f=S.filter,q=f.q.toLowerCase();
 return S.tasks.filter(t=>(f.project==='all'||t.project===f.project)&&(!f.mine||t.who===0)&&(f.priority==='any'||t.priority===f.priority)&&(!q||t.title.toLowerCase().includes(q)||PROJ[t.project].n.toLowerCase().includes(q)||PEOPLE[t.who].n.toLowerCase().includes(q)))}
const colItems=(list,k)=>{const it=list.filter(t=>t.status===k);return k==='done'?it.sort((a,b)=>b.doneAt-a.doneAt):it.sort((a,b)=>(a.ord??0)-(b.ord??0))};
function card(t){
 const s=t.sub,done=t.status==='done';
 return `<div class="tc ${done?'isdone':''}" data-id="${t.id}">${t.more?`<span class="more">···</span>`:''}
  <div class="tags">${tag(t.project)}${prio(t.priority)}</div>
  <div class="tt">${done?`<span class="cb">${I('check')}</span>`:''}<span>${t.title}</span></div>
  ${s?`<div class="prog"><div class="pb"><i style="width:${s[0]/s[1]*100}%;background:${PROJ[t.project].hex}"></i></div>${s[0]}/${s[1]}</div>`:''}
  <div class="ft"><span class="${t.due==='Today'&&!done?'today':''}">${done?I('check'):I('cal')}${t.due}</span>${t.comments?`<span>${I('msg')}${t.comments}</span>`:''}${av(t.who,20)}</div></div>`;
}
function boardHTML(){const list=filtered();
 return COLS.map(([k,n,c])=>{const items=colItems(list,k);
  return `<div class="col" data-col="${k}" data-e="4"><div class="col-h"><span class="sd" style="background:${c};${k==='todo'?'border:1.5px solid #9a9ca3':''}"></span>${n}<span class="cnt" data-cnt="${k}">${items.length+(S.filter.project==='all'&&!S.filter.mine&&S.filter.priority==='any'&&!S.filter.q?COLOFF[k]:0)}</span><button data-new="${k}">${I('plus')}</button></div>${items.map(card).join('')}</div>`}).join('')}
function pageTasks(){
 const c=counts(),f=S.filter;
 return `<div class="page">
 <div class="head" data-e="0"><div><h1>Tasks</h1><div class="sub"><span data-openn>${c.open}</span> open across 5 projects</div></div>
  <div class="btns">${seg('view',[['board','Board','board'],['list','List','list']],S.view)}<button class="btn pri" data-new>${I('plus')}New task</button></div></div>
 <div class="stats">${stat('Open',0,'','data-c-open')}${stat('Due this week',0,'','data-c-due')}${stat('Overdue',0)}${stat('Done this week',0,'','data-c-dw')}</div>
 <div class="filters glass" data-e="2">
  <label class="fb">${I('folder')}${f.project==='all'?'All projects':PROJ[f.project].n}${I('down')}<select data-f="project"><option value="all">All projects</option>${Object.entries(PROJ).map(([k,p])=>`<option value="${k}" ${f.project===k?'selected':''}>${p.n}</option>`).join('')}</select></label>
  <button class="fb ${f.mine?'on':''}" data-mine>${av(0,18)}Mine only</button>
  <label class="fb">${I('flag')}${f.priority==='any'?'Any priority':f.priority}${I('down')}<select data-f="priority"><option value="any">Any priority</option><option ${f.priority==='High'?'selected':''}>High</option><option ${f.priority==='Urgent'?'selected':''}>Urgent</option></select></label>
  <div class="search">${I('search')}<input data-q placeholder="Filter by title, project or person" value="${f.q.replace(/"/g,'&quot;')}"></div>
 </div>
 ${S.view==='board'?`<div class="board-wrap" data-bw><div class="board" data-board>${boardHTML()}</div></div>`
  :`<div class="card glass lv" data-e="4">${COLS.map(([k,n])=>{const items=colItems(filtered(),k);if(!items.length)return'';return `<div style="padding:10px 14px 2px;font-size:10.5px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px">${n} · ${items.length}</div>${items.map(rowTask).join('')}`}).join('')}</div>`}
 </div>`;
}
function afterTasks(root){const c=counts();
 countTo($('[data-c-open]',root),c.open,{dur:.55});countTo($('[data-c-due]',root),c.due,{dur:.55});countTo($('[data-c-dw]',root),c.doneWeek,{dur:.55})}
function updateTaskCounts(){const c=counts();
 countTo($('[data-c-open]'),c.open,{dur:.4});countTo($('[data-c-dw]'),c.doneWeek,{dur:.4});const o=$('[data-openn]');if(o)o.textContent=c.open}

function seg(name,opts,cur){return `<div class="seg" data-seg="${name}"><span class="pill"></span>${opts.map(([k,n,ic])=>`<button class="${cur===k?'on':''}" data-${name}="${k}">${ic?I(ic):''}${n}</button>`).join('')}</div>`}
function placePill(segEl,animate){if(!segEl)return;const on=$('button.on',segEl),pill=$('.pill',segEl);if(!on)return;
 const x=on.offsetLeft,w=on.offsetWidth;if(!animate||pill._x==null){pill.style.left=x+'px';pill.style.width=w+'px';pill._x=x;pill._w=w;return}
 const x0=pill._x,w0=pill._w;tw({tag:pill,dur:.28,ease:E.outBack,update:v=>{pill._x=lerp(x0,x,v);pill._w=lerp(w0,w,v);pill.style.left=pill._x+'px';pill.style.width=pill._w+'px'}})}

function pageInsights(){
 const R=RANGES[S.range];
 return `<div class="page">
 <div class="head" data-e="0"><div><h1>Insights</h1><div class="sub">How the team worked over the last <span data-rn>${R.n}</span> days</div></div>
  <div class="btns">${seg('range',[['7D','7D'],['30D','30D'],['90D','90D']],S.range)}<button class="btn" data-export>${I('dl')}Export CSV</button></div></div>
 <div class="stats">${stat('Completed',0,'','data-k="c"')}${stat('On-time rate','0%','','data-k="o"')}${stat('Focus hours',0,'h','data-k="f"')}${stat('Avg cycle time','0.0d','','data-k="cy"')}</div>
 <div class="grid ins-grid">
  <section class="card glass span2 thr" data-e="2"><h3>Throughput</h3><div class="cs">Tasks finished each week</div>
   <div style="position:absolute;top:13px;right:14px;display:flex;gap:10px;align-items:center"><button class="btn sm">${I('table')}Table</button><span style="color:var(--muted)">${I('arrow')}</span></div>
   <div class="week-n"><b data-k="c2">0</b><span>finished</span><span style="color:#c7c8ce;font-weight:600;font-size:10.5px">No earlier history to compare</span></div>
   <div class="legend"><i></i>Last <span data-rn2>${R.n}</span> days</div>
   <div class="chart"><svg viewBox="0 0 600 150" preserveAspectRatio="none"><defs><linearGradient id="ga" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity=".32"/><stop offset="1" stop-color="var(--accent)" stop-opacity=".02"/></linearGradient></defs>
    <text x="0" y="12" fill="#8f9198" font-size="9.5">50</text><text x="0" y="74" fill="#8f9198" font-size="9.5">25</text><text x="6" y="136" fill="#8f9198" font-size="9.5">0</text>
    <line x1="30" x2="600" y1="133" y2="133" stroke="rgba(255,255,255,.08)" stroke-dasharray="2 3"/>
    <path data-area fill="url(#ga)"/><path data-line fill="none" stroke="var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke"/></svg></div>
   <div class="axis" data-axis>${R.ax.map(a=>`<span>${a}</span>`).join('')}</div>
  </section>
  <section class="card glass" data-e="3" style="height:359px"><h3>By project</h3><div class="cs">Where the finished work went</div>
   <div class="donut-wrap"><div class="donut"><svg viewBox="0 0 96 96" data-donut></svg><div class="c"><b data-k="c3">0</b><span>finished</span></div></div></div>
   <div class="plist" data-plist></div></section>
  <section class="card glass" data-e="3" style="height:359px"><h3>On time</h3><div class="cs">Tasks finished in the last <span data-rn3>${R.n}</span> days</div>
   <div class="big-n"><b><span data-k="o2">0</span><small>%</small></b><span>finished on or before the due day</span></div>
   <div class="ontime"><i data-otbar style="width:0%"></i><u></u></div>
   <div class="otk"><span><em style="background:var(--green)"></em><b data-k="ot">0</b> on time</span><span><em style="background:#ef4444"></em><b data-k="late">0</b> late</span></div>
   <div style="font-size:10.5px;font-weight:600;margin:16px 0 2px;color:#c9cad0">Slowest open tasks</div>
   <div class="slow">${[['Avatar stack','facet',2,'Haruto',49],['Token export to iOS','facet',3,'Nia',44],['Invite flow friction log','sprout',0,'Lin',37]].map(([n,p,w,who,d])=>`<div class="s">${av(w,26)}<div><div style="font-size:12px;font-weight:600;margin-bottom:4px">${n}</div>${tag(p)}<span class="who">${who}</span></div><div class="d">${d}d<span>open</span></div></div>`).join('')}</div></section>
  <section class="card glass span2 ins-focus" data-e="4" style="height:250px"><h3>Focus</h3><div class="cs">Team focus hours each week</div>
   <div class="big-n" style="margin:10px 0 4px"><b data-k="f2" style="font-size:22px">0</b><span>hours · about <span data-k="fw">0</span>h a week</span></div>
   <div class="vbars" data-vbars><div class="vaxis"><span>100h</span><span>50h</span><span>0</span></div></div><div class="vlab" data-vlab></div></section>
  <section class="card glass span2 ins-load" data-e="5"><h3>Workload</h3><div class="cs">Open task hours against weekly capacity</div><span style="position:absolute;top:16px;right:15px;font-size:10px;color:var(--muted)">All within capacity</span>
   <div class="load" style="margin-top:10px">${PEOPLE.map((p,i)=>{const v=[.82,.64,.48,.71,.88,.36][i];return `<div class="w">${av(i,20)}<span class="name">${p.n}</span><span class="t"><i data-wl="${v}" style="width:0"></i></span><span style="width:34px;text-align:right;color:var(--muted)">${Math.round(v*100)}%</span></div>`}).join('')}</div></section>
 </div></div>`;
}
const Ins={pts:null};
function resample(arr,n){const out=[];for(let i=0;i<n;i++){const x=i/(n-1)*(arr.length-1),a=Math.floor(x),b=Math.min(arr.length-1,a+1);out.push(lerp(arr[a],arr[b],x-a))}return out}
function insightsTo(range,first){
 const R=RANGES[range],root=$('#main');
 const K=k=>$(`[data-k="${k}"]`,root),dur=first?.9:.85;
 countTo(K('c'),R.c,{dur});countTo(K('c2'),R.c,{dur});countTo(K('c3'),RANGES[range].by.reduce((a,b)=>a+b,0),{dur});
 countTo(K('o'),R.o,{dur,fmt:v=>Math.round(v)+'%'});countTo(K('o2'),R.o,{dur});
 countTo(K('f'),R.f,{dur});countTo(K('f2'),R.f,{dur});countTo(K('fw'),R.f/Math.max(1,R.n/7),{dur,fmt:v=>Math.floor(v)});
 countTo(K('cy'),R.cy,{dur,fmt:v=>v.toFixed(1)+'d'});countTo(K('ot'),R.c-R.late,{dur});countTo(K('late'),R.late,{dur});
 ['rn','rn2','rn3'].forEach(k=>{const e=$(`[data-${k}]`,root);if(e)e.textContent=R.n});
 const bar=$('[data-otbar]',root),b0=parseFloat(bar.style.width)||0;tw({tag:bar,from:b0,to:R.o,dur,update:v=>bar.style.width=v+'%'});
 // line morph
 const target=resample(R.pts,40),from=Ins.pts||target.map(()=>0);
 const line=$('[data-line]',root),area=$('[data-area]',root);
 tw({tag:'line',dur:first?1:.8,ease:E.outCubic,update:v=>{Ins.pts=from.map((a,i)=>lerp(a,target[i],v));
  const pts=Ins.pts.map((y,i)=>[30+i/39*570,133-y/50*123]);const d=smoothPath(pts);line.setAttribute('d',d);area.setAttribute('d',d+' L600,133 L30,133Z')}});
 $('[data-axis]',root).innerHTML=R.ax.map(a=>`<span>${a}</span>`).join('');
 // donut
 const dn=$('[data-donut]',root),tot=R.by.reduce((a,b)=>a+b,0),C=2*Math.PI*36;let acc=0;
 dn.innerHTML=`<circle cx="48" cy="48" r="36" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="12"/>`+R.by.map((v,i)=>{const k=Object.keys(PROJ)[i],len=v/tot*C;const s=`<circle data-seg cx="48" cy="48" r="36" fill="none" stroke="${PROJ[k].hex}" stroke-width="12" stroke-linecap="round" stroke-dasharray="0 ${C}" stroke-dashoffset="${-acc}" data-len="${Math.max(len-4,.1)}" transform="rotate(-90 48 48)"/>`;acc+=len;return s}).join('');
 $$('[data-seg]',dn).forEach((c,i)=>tw({tag:c,dur:.9,delay:i*.06,update:v=>c.setAttribute('stroke-dasharray',`${c.dataset.len*v} ${C}`)}));
 $('[data-plist]',root).innerHTML=R.by.map((v,i)=>{const k=Object.keys(PROJ)[i];return `<div class="p"><i style="background:${PROJ[k].hex}"></i>${PROJ[k].n}<span class="n">${v}</span><span class="pc">${Math.round(v/tot*100)}%</span></div>`}).join('');
 // focus bars
 const vb=$('[data-vbars]',root);$$('i',vb).forEach(e=>e.remove());
 vb.insertAdjacentHTML('beforeend',R.bars.map(h=>`<i data-vh="${h}"></i>`).join(''));
 $$('i',vb).forEach((e,i)=>tw({tag:e,dur:.8,delay:.05+i*.035,update:v=>e.style.height=v*e.dataset.vh*100+'%'}));
 $('[data-vlab]',root).innerHTML=R.lbl.map(l=>`<span>${l}</span>`).join('');
 if(first)$$('[data-wl]',root).forEach((e,i)=>tw({tag:e,dur:.8,delay:.2+i*.05,update:v=>e.style.width=v*e.dataset.wl*100+'%'}));
}

function focusRow(){const run=Focus.state!=='ready';return `<div class="srow" data-focusrow><span class="ico" style="background:#f97316">${I('play')}</span><div class="grow"><b>Start a session now</b><span data-fsub>${run?'In focus · '+fmt(Focus.left())+' left':'Not running'}</span></div><button class="btn sm" data-act="${run?'end':'start'}">${run?I('stop')+'End session':I('play')+'Start'}</button></div>`}
function pageSettings(){
 const p=S.prefs;
 const menu=[['Profile','user','#3b82f6'],['Notifications','bell','#ec4899'],['Appearance','brush','#8b5cf6'],['Focus','timer','#f97316'],['Data','db','#14b8a6']];
 const tog=(k,ic,col,n,s)=>`<div class="srow"><span class="ico" style="background:${col}">${I(ic)}</span><div class="grow"><b>${n}</b><span>${s}</span></div><button class="sw ${p[k]?'on':''}" data-pref="${k}" style="--k:${p[k]?16:0}px"></button></div>`;
 return `<div class="page">
 <div class="head" data-e="0"><div><h1>Settings</h1><div class="sub">Your profile, the look of Pane, and when it nudges you</div></div></div>
 <div class="set">
  <nav class="smenu glass" data-e="1"><div class="prof">${av(0,30)}<div><b>Lin Zhao</b><span>lin@pane.app</span></div></div>
   ${menu.map(([n,ic,c])=>`<button class="mi ${S.setTab===n?'on':''}" data-stab="${n}"><span class="ico" style="background:${c}">${I(ic)}</span>${n}<span class="chev">${I('right')}</span></button>`).join('')}</nav>
  <div class="set-cards" style="display:grid;gap:12px">
   <section class="card glass" id="s-Profile" data-e="2"><h3>Profile</h3><div class="cs">How the team sees you</div>
    <div class="pbig"><div class="avw">${av(0,64)}<span class="online"></span></div><div><b>Lin Zhao</b><div class="rl2">Product Lead</div><div class="em">lin@pane.app</div></div></div>
    <div class="srow"><span class="ico" style="background:#3b82f6">${I('user')}</span><div class="grow"><b>Name</b></div><span class="val">Lin Zhao</span></div>
    <div class="srow"><span class="ico" style="background:#8b5cf6">${I('mail')}</span><div class="grow"><b>Email</b></div><span class="val">lin@pane.app</span></div>
    <div class="srow"><span class="ico" style="background:#14b8a6">${I('badge')}</span><div class="grow"><b>Role</b></div><span class="val">Product Lead</span></div></section>
   <section class="card glass" id="s-Notifications" data-e="3"><h3>Notifications</h3><div class="cs">What Pane taps you on the shoulder for</div>
    ${tog('mentions','at','#3b82f6','Mentions','When someone @mentions you')}${tog('dueDates','due','#f97316','Due dates','The morning a task of yours is due')}
    ${tog('meetings','meet','#ec4899','Meetings','Five minutes before they start')}${tog('digest','inbox','#14b8a6','Daily digest','One summary at 9:00 AM')}${tog('focusDone','timer','#8b5cf6','Focus finished','When a session ends')}</section>
   <section class="card glass" id="s-Appearance" data-e="4"><h3>Appearance</h3><div class="cs">The whole app re-tints through its glass</div>
    <div class="srow"><span class="ico" style="background:#6366f1">${I('moon')}</span><div class="grow"><b>Theme</b><span>${p.theme==='auto'?'Auto follows your system':p.theme==='dark'?'Dark':'Light'}</span></div>${seg('theme',[['light','Light','sun'],['dark','Dark','moon'],['auto','Auto','auto']],p.theme)}</div>
    <div class="srow" style="border:0;min-height:40px"><span class="ico" style="background:#ec4899">${I('layers')}</span><div class="grow"><b>Wallpaper</b><span>${p.wall}</span></div></div>
    <div class="walls">${Object.keys(WALLS).map(w=>`<button class="wt ${p.wall===w?'on':''}" data-wall="${w}" data-e="5"><div class="th" style="background:${w==='Ash'?'#23262a':WALLS[w]}"><div class="ui"><i style="left:0;top:0;width:18%;height:100%"></i><i style="left:25%;top:0;right:0;height:42%"></i><i style="left:25%;top:54%;width:34%;height:15%"></i></div><span class="chk">${I('check')}</span></div>${w}</button>`).join('')}</div>
    <div class="srow" style="border-top:1px solid var(--line);border-bottom:0;min-height:42px"><span class="ico" style="background:#f97316">${I('brush')}</span><div class="grow"><b>Accent</b><span data-accname>${p.accent}</span></div></div>
    <div class="accents">${ACCENTS.map(([n,c])=>`<button class="acc ${p.accent===n?'on':''}" data-accent="${n}" title="${n}" style="background:${c};--a:${c};--sh:${c}">${I('check')}</button>`).join('')}</div>
    <div class="srow" style="border-top:1px solid var(--line)"><span class="ico" style="background:#3b82f6">${I('layers')}</span><div class="grow"><b>Glass</b><span>Clear shows more of the wallpaper</span></div>${seg('glass',[['clear','Clear'],['tinted','Tinted']],p.glass)}</div>
    <div class="srow"><span class="ico" style="background:#22c55e">${I('shield')}</span><div class="grow"><b>Reduce transparency</b><span>Solid surfaces, no frost</span></div><button class="sw ${p.solid?'on':''}" data-pref="solid" style="--k:${p.solid?16:0}px"></button></div></section>
   <section class="card glass" id="s-Focus" data-e="5"><h3>Focus</h3><div class="cs">The timer the island keeps</div>
    <div class="stepper"><div class="step"><div class="k">Session</div><div class="row"><button data-step="session:-5" ${p.session<=5?'disabled':''}>−</button><b>${p.session}<small>min</small></b><button data-step="session:5">+</button></div></div>
    <div class="step"><div class="k">Break</div><div class="row"><button data-step="brk:-1" ${p.brk<=1?'disabled':''}>−</button><b>${p.brk}<small>min</small></b><button data-step="brk:1">+</button></div></div></div>
    ${focusRow()}</section>
   <section class="card glass" id="s-Data" data-e="6"><h3>Data</h3><div class="cs">Everything stays in this browser</div>
    <button class="srow" style="width:100%;text-align:left" data-export><span class="ico" style="background:#22c55e">${I('dl')}</span><div class="grow"><b>Export tasks as CSV</b><span>${S.tasks.length+25} tasks, one row each</span></div>${I('right','style="color:var(--muted)"')}</button>
    <button class="srow" style="width:100%;text-align:left" data-reset><span class="ico" style="background:#ef4444">${I('trash')}</span><div class="grow"><b class="danger">Reset demo data</b><span>Back to the sample workspace</span></div>${I('right','style="color:var(--muted)"')}</button></section>
  </div></div></div>`;
}
function pageCalendar(){const days=[];for(let i=0;i<35;i++){const d=i-3;days.push(d<1||d>31?'':d)}
 const evs={16:'var(--accent)',12:PROJ.orbit.hex,20:PROJ.sprout.hex,23:PROJ.q4.hex,27:PROJ.tide.hex,9:PROJ.facet.hex};
 return `<div class="page"><div class="head" data-e="0"><div><h1>Calendar</h1><div class="sub">October · 4 meetings today</div></div><div class="btns"><button class="btn pri">${I('plus')}New event</button></div></div>
 <div class="card glass" style="margin-top:16px" data-e="2"><div class="cal">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div class="h">${d}</div>`).join('')}
 ${days.map(d=>`<div class="d ${d===16?'now':''}" style="${d===''?'opacity:.3':''}">${d}${evs[d]?`<span class="ev" style="background:${evs[d]}"></span>`:''}</div>`).join('')}</div></div></div>`}
function pageProjects(){return `<div class="page"><div class="head" data-e="0"><div><h1>Projects</h1><div class="sub">${Object.keys(PROJ).length} active projects</div></div><div class="btns"><button class="btn pri">${I('plus')}New project</button></div></div>
 <div class="grid" style="margin-top:16px">${Object.entries(PROJ).map(([k,p])=>{const ts=S.tasks.filter(t=>t.project===k),d=ts.filter(t=>t.status==='done').length;
 return `<section class="card glass" style="cursor:pointer" data-proj="${k}" data-e="2"><div style="display:flex;align-items:center;gap:10px"><span class="ico" style="background:${p.hex}">${I('folder')}</span><h3>${p.n}</h3></div>
 <div class="cs" style="margin-top:10px">${ts.length} tasks · ${d} done</div><div class="prog"><div class="pb"><i style="width:${ts.length?d/ts.length*100:0}%;background:${p.hex}"></i></div>${ts.length?Math.round(d/ts.length*100):0}%</div></section>`}).join('')}</div></div>`}
function pageTeam(){return `<div class="page"><div class="head" data-e="0"><div><h1>Team</h1><div class="sub">${PEOPLE.length} people</div></div></div>
 <div class="card glass" style="margin-top:16px" data-e="2">${PEOPLE.map((p,i)=>`<div class="tr">${av(i,32)}<div class="grow"><div class="tt">${p.n}</div><div class="meta">${S.tasks.filter(t=>t.who===i&&t.status!=='done').length} open tasks</div></div><span class="tag">${i===0?'You':'Member'}</span></div>`).join('')}</div></div>`}

/* ================= render & routing ================= */
const PAGES={home:[pageHome,afterHome],tasks:[pageTasks,afterTasks],insights:[pageInsights,()=>insightsTo(S.range,true)],settings:[pageSettings],calendar:[pageCalendar],projects:[pageProjects],team:[pageTeam]};
function render(opts={}){
 if(!PAGES[S.page])S.page='home';
 const m=$('#main'),sc=$('#scroller'),y=sc.scrollTop,bw=$('[data-bw]'),bx=bw?bw.scrollLeft:0;
 m.innerHTML=PAGES[S.page][0]();
 $$('[data-seg]',m).forEach(s=>placePill(s,false));
 if(opts.keep){sc.scrollTop=y;const nb=$('[data-bw]');if(nb)nb.scrollLeft=bx;$$('[data-e]',m).forEach(e=>e.removeAttribute('data-e'))}
 else{sc.scrollTop=0;Ins.pts=null;enter(m)}
 if(!opts.keep||opts.after){const a=PAGES[S.page][1];a&&a(m)}
 else settleStatic(m);
}
/* static values when re-rendering in place (no entrance animation) */
function settleStatic(m){
 const c=counts();
 $$('[data-ring]',m).forEach((el,i)=>{const C=+el.getAttribute('stroke-dasharray');el.style.strokeDashoffset=C*(1-[c.doneToday/8,.55,.25][i])});
 const wk=$('[data-week]',m);if(wk){wk.textContent=25;const wd=$('[data-wd]',m);wd.textContent='+4% vs last week';wd.style.color='#4ade80'}
 $$('[data-h]',m).forEach(b=>b.style.height=b.dataset.h*100+'%');
 const ft=$('[data-focustoday]',m);if(ft)ft.textContent='1.1h';
 const set=(s,v)=>{const e=$(s,m);if(e){e.textContent=v;e._v=v}};set('[data-c-open]',c.open);set('[data-c-due]',c.due);set('[data-c-dw]',c.doneWeek);
 if(S.page==='insights')insightsTo(S.range,true);
}
function go(p){if(p===S.page&&p!=='home'){return}S.page=p;if(location.hash.slice(1)!==p)history.replaceState(null,'','#'+p);moveNav(p);render()}
addEventListener('hashchange',()=>{const p=location.hash.slice(1);if(p&&p!==S.page){S.page=p;moveNav(p);render()}});

/* ================= home: check task with FLIP reorder ================= */
function toggleHome(id){
 const t=S.tasks.find(x=>x.id==id);if(!t)return;const wasDone=t.status==='done',prev={status:t.status,doneAt:t.doneAt};
 const tl=$('[data-tl]'),row=$(`[data-row="${id}"]`,tl);
 Sfx.play('click');
 if(!wasDone){t.status='done';t.doneAt=Date.now();t.due='Oct 16'}else{t.status=t.home&&t.title.startsWith('Write')?'progress':'todo';t.doneAt=null;t.due='Today'}
 save();
 if(row){const fill=$('.fill',row),st=$('.strike',row);row.classList.toggle('done',!wasDone);
  tw({tag:fill,from:wasDone?1:0,to:wasDone?0:1,dur:.22,ease:E.outBack,update:v=>fill.style.transform=`scale(${Math.max(0,v)})`});
  tw({tag:st,from:wasDone?100:0,to:wasDone?0:100,dur:.24,update:v=>st.style.width=v+'%'});
  after(.06,()=>flipReorder(tl))}
 updateHomeCounts();
 if(!wasDone)toastDone(t.title,()=>{t.status=prev.status;t.doneAt=prev.doneAt;t.due='Today';save();if(S.page==='home'){flipReorder($('[data-tl]'),true)}updateHomeCounts();updateTaskCounts()});
}
function flipReorder(tl,rebuildAll){
 if(!tl)return;const before={};$$('.tr',tl).forEach(r=>before[r.dataset.row]=r.getBoundingClientRect().top);
 tl.innerHTML=homeTasks().map(rowTask).join('');
 $$('.tr',tl).forEach(r=>{const b=before[r.dataset.row];if(b==null)return;const dy=b-r.getBoundingClientRect().top;if(Math.abs(dy)<1)return;
  r.style.zIndex=dy<0?2:1;tw({tag:r,from:dy,to:0,dur:.3,ease:E.outCubic,update:v=>r.style.transform=`translateY(${v}px)`,done:()=>{r.style.transform='';r.style.zIndex=''}})});
}
function updateHomeCounts(){const c=counts();
 const d=$('[data-donetoday]');if(d)countTo(d,c.doneToday,{dur:.35});const l=$('[data-left]');if(l)l.textContent=c.left;
 const rt=$('[data-ringtasks]');if(rt)rt.textContent=c.doneToday;
 const r=$('[data-ring]');if(r){const C=+r.getAttribute('stroke-dasharray'),cur=parseFloat(r.style.strokeDashoffset)||C;tw({tag:r,from:cur,to:C*(1-c.doneToday/8),dur:.6,update:v=>r.style.strokeDashoffset=v})}
}

/* ================= tasks: drag & drop with tilt + live placeholder ================= */
const Drag={
 on:false,
 down(e,card){if(e.button!==0)return;this.cand={card,x:e.clientX,y:e.clientY}},
 move(e){if(this.cand&&!this.on){if(Math.hypot(e.clientX-this.cand.x,e.clientY-this.cand.y)>4)this.begin(this.cand.card,this.cand.x,this.cand.y)}
  if(this.on){this.px=e.clientX;this.py=e.clientY;this.track()}},
 begin(card,x,y){
  this.on=true;const r=card.getBoundingClientRect(),st=$('#stage').getBoundingClientRect();
  this.id=card.dataset.id;this.ox=x-r.left;this.oy=y-r.top;this.px=x;this.py=y;this.cx=r.left-st.left;this.cy=r.top-st.top;this.st=st;
  const g=card.cloneNode(true);g.classList.add('dragging');Object.assign(g.style,{width:r.width+'px',left:0,top:0});$('#dragLayer').appendChild(g);this.ghost=g;
  this.ph=document.createElement('div');this.ph.className='ph';this.ph.style.height=r.height+'px';
  this.lift=0;tw({tag:'lift',dur:.22,ease:E.outBack,update:v=>this.lift=v});
  const col=card.parentElement;const snap=flipSnap(col);card.replaceWith(this.ph);this.ph.style.height='0px';this.ph.style.margin='0';this.ph.style.border='0';
  this.phCol=col;this.phIdx=-1;flipPlay(col,snap);
  Sfx.play('pop');this.track();this.render();
 },
 track(){
  const el=document.elementFromPoint(this.px,this.py);const col=el&&el.closest('.col');if(!col)return;
  const cards=$$('.tc',col);let idx=cards.length;for(let i=0;i<cards.length;i++){const r=cards[i].getBoundingClientRect();if(this.py-this.oy+40<r.top+r.height/2){idx=i;break}}
  if(col===this.phCol&&idx===this.phIdx)return;
  const cols=[...new Set([this.phCol,col])],snaps=cols.map(flipSnap);
  Object.assign(this.ph.style,{height:this.ghost.offsetHeight+'px',margin:'',border:''});
  if(idx>=cards.length)col.appendChild(this.ph);else col.insertBefore(this.ph,cards[idx]);
  $$('.col').forEach(c=>c.classList.toggle('over',c===col));
  this.phCol=col;this.phIdx=idx;cols.forEach((c,i)=>flipPlay(c,snaps[i]));
 },
 frame(){if(!this.on&&!this.settling)return;if(this.on){const tx=this.px-this.st.left-this.ox,ty=this.py-this.st.top-this.oy;this.cx=lerp(this.cx,tx,.42);this.cy=lerp(this.cy,ty,.42)}this.render()},
 render(){if(!this.ghost)return;const l=this.lift;this.ghost.style.transform=`translate(${this.cx}px,${this.cy}px) rotate(${3.2*l}deg) scale(${1+.035*l})`},
 up(){
  this.cand=null;if(!this.on)return;this.on=false;$$('.col').forEach(c=>c.classList.remove('over'));
  const r=this.ph.getBoundingClientRect(),tx=r.left-this.st.left,ty=r.top-this.st.top,x0=this.cx,y0=this.cy,l0=this.lift;this.settling=true;
  const status=this.phCol.dataset.col,id=this.id;
  tw({tag:'drop',dur:.24,ease:E.outCubic,update:v=>{this.cx=lerp(x0,tx,v);this.cy=lerp(y0,ty,v);this.lift=l0*(1-v);this.render()},done:()=>{
   this.settling=false;this.ghost.remove();this.ghost=null;commitDrop(id,status,this.phCol,this.ph)}});
  Sfx.play('drop');
 }
};
function flipSnap(col){const m=new Map();$$('.tc',col).forEach(c=>m.set(c,c.getBoundingClientRect().top));return m}
function flipPlay(col,snap){$$('.tc',col).forEach(c=>{const b=snap.get(c);if(b==null)return;const dy=b-c.getBoundingClientRect().top;if(Math.abs(dy)<1)return;
 tw({tag:c,from:dy,to:0,dur:.28,ease:E.outCubic,update:v=>c.style.transform=v?`translateY(${v}px)`:'',done:()=>c.style.transform=''})})}
function commitDrop(id,status,col,ph){
 const t=S.tasks.find(x=>x.id==id);const prev={status:t.status,doneAt:t.doneAt,sub:t.sub&&t.sub.slice()};
 // order inside column follows placeholder position
 const ids=$$('.tc,.ph',col).map(e=>e.classList.contains('ph')?+id:+e.dataset.id);
 if(status==='done'&&t.status!=='done'){t.doneAt=Date.now();if(t.sub)t.sub=[t.sub[1],t.sub[1]]}
 if(status!=='done')t.doneAt=null;
 const changed=t.status!==status;t.status=status;
 ids.forEach((i,k)=>{const x=S.tasks.find(y=>y.id===i);if(x)x.ord=k});
 if(status==='done'){const n=Date.now();ids.forEach((i,k)=>{const x=S.tasks.find(y=>y.id===i);if(x&&x.doneAt>0)x.doneAt=n-k})}
 save();
 const snaps=$$('.col').map(flipSnap);render({keep:true});
 if(changed&&status==='done')toastDone(t.title,()=>{t.status=prev.status;t.doneAt=prev.doneAt;t.sub=prev.sub;save();if(S.page==='tasks')render({keep:true});updateTaskCounts()});
 updateTaskCounts();
}

/* ================= events ================= */
const stage=$('#stage');
stage.addEventListener('pointerdown',e=>{const c=e.target.closest('.tc');if(c&&S.page==='tasks'&&S.view==='board'){Drag.down(e,c)}});
addEventListener('pointermove',e=>Drag.move(e));
addEventListener('pointerup',()=>Drag.up());
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-go],[data-new],[data-toggle],[data-view],[data-mine],[data-range],[data-export],[data-stab],[data-pref],[data-theme],[data-wall],[data-accent],[data-glass],[data-step],[data-act],[data-reset],[data-proj],[data-undo],[data-dur],#themeBtn,#island');
 if(!t)return;const d=t.dataset,p=S.prefs;
 if(t.id==='island'){if(Isl.state==='pill'){Sfx.play('expand');island('big',{}, {outDur:.08,sizeDur:.2,sizeEase:E.outCubic,swapAt:.1,inDur:.16})}else if(Isl.state==='big'&&!e.target.closest('button')){Sfx.play('tick');island('pill',{},{outDur:.06,sizeDur:.22,swapAt:.12,inDur:.12})}return}
 if(d.undo!==undefined){e.stopPropagation();Sfx.play('tick');if(undoFn){undoFn();undoFn=null}islandRest();return}
 if(t.id==='themeBtn'){Sfx.play('tick');p.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';save();applyPrefs();if(S.page==='settings')render({keep:true});return}
 if(d.go){Sfx.play('click');go(d.go);return}
 if(d.new!==undefined){Sfx.play('tick');openNew(d.new||'todo');return}
 if(d.toggle){toggleHome(d.toggle);return}
 if(d.view){Sfx.play('tick');S.view=d.view;render({keep:true});return}
 if(d.mine!==undefined){Sfx.play('tick');S.filter.mine=!S.filter.mine;render({keep:true});return}
 if(d.range){if(S.range===d.range)return;Sfx.play('tick');S.range=d.range;$$('[data-seg="range"] button').forEach(b=>b.classList.toggle('on',b.dataset.range===d.range));placePill($('[data-seg="range"]'),true);insightsTo(d.range,false);return}
 if(d.export!==undefined){Sfx.play('tick');exportCsv();return}
 if(d.stab){Sfx.play('click');S.setTab=d.stab;$$('.mi').forEach(m=>m.classList.toggle('on',m.dataset.stab===d.stab));scrollToEl($('#s-'+d.stab));return}
 if(d.pref){Sfx.play('tick');p[d.pref]=!p[d.pref];save();t.classList.toggle('on',p[d.pref]);const k0=p[d.pref]?0:16;tw({tag:t,from:k0,to:16-k0,dur:.28,ease:E.outBack,update:v=>t.style.setProperty('--k',v+'px')});if(d.pref==='solid')applyPrefs(true);return}
 if(d.theme){Sfx.play('tick');p.theme=d.theme;save();applyPrefs();$$('[data-seg="theme"] button').forEach(b=>b.classList.toggle('on',b.dataset.theme===d.theme));placePill($('[data-seg="theme"]'),true);return}
 if(d.wall){Sfx.play('pop');p.wall=d.wall;save();applyPrefs();$$('.wt').forEach(w=>w.classList.toggle('on',w.dataset.wall===d.wall));const s=t.closest('.card').querySelector('.srow:nth-of-type(2) .grow span');if(s)s.textContent=d.wall;return}
 if(d.accent){Sfx.play('pop');p.accent=d.accent;save();applyPrefs(true);$$('.acc').forEach(a=>a.classList.toggle('on',a.dataset.accent===d.accent));$('[data-accname]').textContent=d.accent;return}
 if(d.glass){Sfx.play('tick');p.glass=d.glass;save();applyPrefs();$$('[data-seg="glass"] button').forEach(b=>b.classList.toggle('on',b.dataset.glass===d.glass));placePill($('[data-seg="glass"]'),true);return}
 if(d.step){Sfx.play('tick');const [k,v]=d.step.split(':');p[k]=Math.max(1,Math.min(90,p[k]+ +v));if(k==='session'&&Focus.state==='ready')Focus.mins=p.session;save();render({keep:true});return}
 if(d.dur){Sfx.play('tick');Focus.mins=+d.dur;refreshFocus();return}
 if(d.act){
  if(d.act==='start')Focus.start();
  else if(d.act==='toggle'){Sfx.play('tick');Focus.toggle()}
  else if(d.act==='end'){Sfx.play('tick');Focus.end()}
  else if(d.act==='plus5'){Sfx.play('tick');Focus.plus5()}
  return}
 if(d.reset!==undefined){if(confirm('Reset all tasks to the sample workspace?')){S.tasks=seed();save();render({keep:true});toastInfo('Demo data restored')}return}
 if(d.proj){S.filter.project=d.proj;go('tasks')}
});
document.addEventListener('change',e=>{const f=e.target.dataset.f;if(f){S.filter[f]=e.target.value;render({keep:true})}});
document.addEventListener('input',e=>{if(e.target.matches('[data-q]')){S.filter.q=e.target.value;const pos=e.target.selectionStart;render({keep:true});const i=$('[data-q]');i.focus();i.setSelectionRange(pos,pos)}});
function scrollToEl(el){if(!el)return;const sc=$('#scroller'),y0=sc.scrollTop,y1=Math.min(sc.scrollHeight-sc.clientHeight,y0+el.getBoundingClientRect().top-sc.getBoundingClientRect().top-62);
 tw({tag:'scroll',dur:.45,ease:E.inOutCubic,update:v=>sc.scrollTop=lerp(y0,y1,v)})}
function exportCsv(){
 const rows=[['Title','Project','Status','Priority','Due']].concat(S.tasks.map(t=>[t.title,PROJ[t.project].n,t.status,t.priority,t.due]));
 const csv=rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='tasks.csv';a.click();toastInfo('Exported '+S.tasks.length+' tasks');
}
const scrim=$('#scrim'),form=$('#newForm');
$('#projSel').innerHTML=Object.entries(PROJ).map(([k,p])=>`<option value="${k}">${p.n}</option>`).join('');
function openNew(status){form.reset();form.status.value=status==='done'?'todo':status;scrim.classList.add('show');setTimeout(()=>form.title.focus(),50)}
$('#cancelNew').onclick=()=>scrim.classList.remove('show');
scrim.addEventListener('click',e=>{if(e.target===scrim)scrim.classList.remove('show')});
addEventListener('keydown',e=>{if(e.key==='Escape')scrim.classList.remove('show')});
form.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);
 S.tasks.unshift(T(fd.get('title'),fd.get('project'),fd.get('status'),{p:fd.get('priority'),d:fd.get('due')||'Today',w:0,ord:-Date.now()}));
 save();scrim.classList.remove('show');Sfx.play('pop');if(S.page!=='tasks')go('tasks');else render({keep:true});toastInfo('Created: '+fd.get('title'))});

/* ================= boot ================= */
Isl.el=$('#island');Isl.body=$('#islBody');
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(S.prefs.theme==='auto')applyPrefs()});
applyPrefs();renderSide();render();loop();
document.fonts&&document.fonts.ready.then(()=>$$('[data-seg]').forEach(s=>placePill(s,false)));
