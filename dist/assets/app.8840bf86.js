var B=Object.defineProperty,Y=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var I=(a,e,t)=>e in a?B(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,$=(a,e)=>{for(var t in e||(e={}))Q.call(e,t)&&I(a,t,e[t]);if(z)for(var t of z(e))q.call(e,t)&&I(a,t,e[t]);return a},F=(a,e)=>Y(a,J(e));import{d as y,u as C,o as i,c as f,r as ee,n as te,a as m,b as V,e as _,f as b,g as ae,h as S,i as ne,j as oe,k as se,l as re,m as ie,t as le,p as ce,w as v,q as x,F as P,s as ue,v as k,T as fe,x as de,y as pe,z as me,A as he,B as _e,C as be,D as ge,E as ye,G as ve,H as ke,I as we,J as Le,K as Ce,L as Se,M as xe,N as Pe,O as Te,P as Ge,Q as Ee,R as De,S as ze,U as Ie,V as $e,W as Fe,X as Ve,Y as Oe,Z as Re,_ as We,$ as Ze,a0 as je,a1 as He,a2 as Ke,a3 as Ne,a4 as Ue}from"./vendor.22043c59.js";const Me=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};Me();const Xe="modulepreload",O={},Ae="/",T=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${Ae}${o}`,o in O)return;O[o]=!0;const n=o.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":Xe,n||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),n)return new Promise((d,l)=>{r.addEventListener("load",d),r.addEventListener("error",l)})})).then(()=>e())};const Be=y({props:{rgb:null},setup(a){const t={"--rgb":`rgb(${a.rgb.join(",")})`},[o,n]=C(!1),[s,r]=C(!1),d=()=>{n(),r()};return(l,h)=>(i(),f("div",{class:te(["mandelbrotTile",{animUp:m(o),animDown:m(s)}]),style:V(m(t)),onMouseover:d,onMouseout:d},[ee(l.$slots,"default")],38))}}),Ye=["href","title"],Je=y({props:{link:null},setup(a){const e=a;return(t,o)=>{const n=_("fa");return i(),f("a",{class:"tileLink",href:e.link.link,title:e.link.alt,ref:(s,r)=>{r.noopener=s},target:"_blank"},[b(n,{icon:["fab",e.link.icon]},null,8,["icon"])],8,Ye)}}}),R="KCgpPT57KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO29ubWVzc2FnZT0oe2RhdGE6c30pPT57cG9zdE1lc3NhZ2UocihzKSl9O2NvbnN0IHI9KHt3aWR0aDpzLGhlaWdodDpuLG1heEl0ZXJhdGlvbjp0LHJlYWxTZXQ6byxpbWFnaW5hcnlTZXQ6ZX0pPT57Y29uc3QgbD1bXTtsZXQgcDtmb3IobGV0IHg9MDt4PG47eCsrKWZvcihsZXQgYT0wO2E8czthKyspcD17eDpvLnN0YXJ0K2Evcyooby5lbmQtby5zdGFydCkseTplLnN0YXJ0K3gvbiooZS5lbmQtZS5zdGFydCl9LGwucHVzaChjKHAsdCkpO3JldHVybiBsfSxjPShzLG4pPT57bGV0IHQ9e3g6MCx5OjB9LG89MCxlLGw7ZG8gZT17eDpNYXRoLnBvdyh0LngsMiktTWF0aC5wb3codC55LDIpLHk6Mip0LngqdC55fSx0PXt4OmUueCtzLngseTplLnkrcy55fSxsPU1hdGguc3FydChNYXRoLnBvdyh0LngsMikrTWF0aC5wb3codC55LDIpKSxvKz0xO3doaWxlKGw8PTImJm88bik7cmV0dXJuIGw8PTI/bnVsbDpvfX0pKCk7fSkoKTsK",W=typeof window!="undefined"&&window.Blob&&new Blob([atob(R)],{type:"text/javascript;charset=utf-8"});function Qe(){const a=W&&(window.URL||window.webkitURL).createObjectURL(W);try{return a?new Worker(a):new Worker("data:application/javascript;base64,"+R,{type:"module"})}finally{a&&(window.URL||window.webkitURL).revokeObjectURL(a)}}const qe=[{icon:"codepen",alt:"CodePen",link:"https://codepen.io/SubZtep"},{icon:"github",alt:"GitHub",link:"https://github.com/SubZtep"},{icon:"instagram",alt:"Instagram",link:"https://www.instagram.com/subztep/"},{icon:"lastfm",alt:"Last.fm",link:"https://last.fm/user/hybridoma"},{icon:"linkedin",alt:"LinkedIn",link:"https://www.linkedin.com/in/andrasserfozo/"},{icon:"pinterest",alt:"Pinterest",link:"https://pinterest.co.uk/subztep/"},{icon:"steam",alt:"Steam",link:"https://steamcommunity.com/id/subztep"},{icon:"twitter",alt:"Twitter",link:"https://twitter.com/SubZtep"},{icon:"youtube",alt:"YouTube",link:"https://www.youtube.com/c/AndrasSerfozo"}];function*et(){for(;;)yield*qe}var tt=()=>({socialLink:et()}),at=()=>({generatePalette:a=>{const e=[];for(let t=0;t<a;t++)e.push(ae("green").darken(t/5).rgb());return e}});const nt={key:1,class:"empty"},ot=y({props:{edge:{type:Number,default:100},maxIteration:{type:Number,default:20},paletteSize:{type:Number,default:15}},setup(a){const e=a,t=S(null),[o,n]=C(!1),{socialLink:s}=tt(),{width:r,height:d}=ne({initialWidth:640,initialHeight:480}),l=Math.floor(e.edge/oe().pixelRatio.value),h=Math.floor(r.value/l),g=Math.floor(d.value/l),K={perspective:"300px","--edge":`${l}px`,"--cols":String(h),"--rows":String(g),"--cols-size":`${h*l}px`,"--rows-size":`${g*l}px`},G=at().generatePalette(e.paletteSize),N=u=>G[u%(G.length-1)],E=S(new Array(h*g).fill(0)),w=new Qe;w.postMessage({width:h,height:g,maxIteration:e.maxIteration,realSet:{start:-2,end:1},imaginarySet:{start:-1,end:1}}),w.onmessage=({data:u})=>{E.value=u,w.terminate()};const c=se(re(t));let D=S({});const U=ie("--bg-pos");return le(c,()=>{const u=c.source==="deviceOrientation"?-30:10;D.value={transform:`rotateX(${c.roll*u}deg) rotateY(${c.tilt*u}deg) scale(${Math.abs(c.roll)+Math.abs(c.tilt)+.5})`},U.value=`translate(${c.tilt*100}px, ${c.roll*-100}px)`},{throttle:64}),ce(n,6669),(u,bt)=>{const M=Je,X=Be,A=_("client-only");return i(),f("div",{style:K},[b(A,null,{default:v(()=>[x("div",{class:"mandelbrotGrid",ref:(p,L)=>{L.el=p,t.value=p},style:V(m(D))},[(i(!0),f(P,null,ue(E.value,(p,L)=>(i(),f(P,{key:`${L}-${p}`},[p?(i(),k(X,{key:0,rgb:N(p)},{default:v(()=>[b(fe,{name:"bounce"},{default:v(()=>[m(o)?(i(),k(M,{key:0,link:m(s).next().value,transition:"fadeIn"},null,8,["link"])):de("v-if",!0)]),_:1})]),_:2},1032,["rgb"])):(i(),f("div",nt))],64))),128))],4)]),_:1})])}}});var Z={};const st={class:"absolute w-screen h-screen flex justify-center items-center z-1"},rt=x("div",{class:"videobg absolute top-0 right-0 bottom-0 left-0"},null,-1),j=y({setup(a){return pe({title:"d\u0305\u0322e\u030D\u0311\u0310\u033E\u0340\u0330\u0331\u031F\u0354\u0326m\u031A\u033D\u030D\u031D\u0362\u035Fo\u034C\u033E\u0310\u031E\u0356\u0354.\u0350\u030F\u0301\u033E\u035F\u032D\u031E\u0317la\u0314\u0305\u0309\u0359\u0339\u0324n\u0357\u030B\u030E\u034D\u032F\u0349d\u035E\u0354",meta:[{name:"description",content:"SEOgec he? \u51F8(\uFFE3\u30D8\uFFE3)"}]}),(e,t)=>{const o=ot,n=_("client-only");return i(),f(P,null,[x("div",st,[b(n,null,{default:v(()=>[b(o)]),_:1})]),rt],64)}}});typeof Z=="function"&&Z(j);const it=[{name:"i",path:"/i",component:()=>T(()=>import("./i.acacc349.js"),["assets/i.acacc349.js","assets/i.1f2c080b.css","assets/vendor.22043c59.js"]),props:!0,meta:{layout:"timeline"}},{name:"index",path:"/",component:j,props:!0,meta:{layout:"home"}}];function lt(a,e){const t=_("router-view");return i(),k(t)}var H=(a,e)=>{for(const[t,o]of e)a[t]=o;return a};const ct={};var ut=H(ct,[["render",lt]]);const ft={default:ut,home:()=>T(()=>import("./home.7094f526.js"),["assets/home.7094f526.js","assets/home.b72331bb.css","assets/vendor.22043c59.js"]),timeline:()=>T(()=>import("./timeline.ba4e1559.js"),["assets/timeline.ba4e1559.js","assets/timeline.c713eebb.css","assets/vendor.22043c59.js"])};function dt(a){return a.map(e=>{var t;return{path:e.path,component:ft[((t=e.meta)==null?void 0:t.layout)||"default"],children:[F($({},e),{path:""})]}})}function pt(a,e){const t=_("router-view");return i(),k(t)}const mt={};var ht=H(mt,[["render",pt]]);me.add(he.faCodepen,_e.faGithub,be.faInstagram,ge.faLastfm,ye.faLinkedin,ve.faPinterest,ke.faSteam,we.faTwitter,Le.faYoutube,Ce.faPhp,Se.faVuejs,xe.faUnity,Pe.faJs,Te.faReact,Ge.faCss3Alt,Ee.faCode,De.faVrCardboard,ze.faGamepad,Ie.faPlug,$e.faGlobe,Fe.faGlobeStand,Ve.faHandHoldingUsd,Oe.faQuestion,Re.faLink,We.faCalendar,Ze.faTrianglePersonDigging,je.faCheckSquare,He.faSquare,Ke.faFilterList);const _t=dt(it);Ne(ht,{routes:_t,scrollBehavior(a,e,t){return t||(a.hash?{el:a.hash,behavior:"smooth"}:{top:0,left:0})}},({app:a,router:e})=>{a.component("fa",Ue),e.beforeEach(t=>{var n;const{appClass:o}=t.meta;o&&((n=document.querySelector("#app"))==null||n.classList.add(o))}),e.afterEach((t,o)=>{var s;const{appClass:n}=o.meta;n&&((s=document.querySelector("#app"))==null||s.classList.remove(n))})});export{H as _};
