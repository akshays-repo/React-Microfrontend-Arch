(()=>{"use strict";var e,r,t,n,a={809:(e,r,t)=>{Promise.all([t.e(822),t.e(468),t.e(873)]).then(t.bind(t,873))},283:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof app1)return e();t.l("https://whimsical-cucurucho-66e6ae.netlify.app/remoteEntry.js",(t=>{if("undefined"!=typeof app1)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"app1")})).then((()=>app1))},100:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof app2)return e();t.l("http://localhost:8082/remoteEntry.js",(t=>{if("undefined"!=typeof app2)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"app2")})).then((()=>app2))}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return a[e](t,t.exports,i),t.exports}i.m=a,i.c=o,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="shell:",i.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var u,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var f=s[p];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){u=f;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",r+a),u.src=t),e[t]=[n];var d=(r,n)=>{u.onerror=u.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),l&&document.head.appendChild(u)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={82:[853],552:[481]},n={481:["default","./App2Index",100],853:["default","./App1Index",283]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var a=n[e];if(!(t.indexOf(a)>=0)){if(t.push(a),a.p)return r.push(a.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),i.m[e]=()=>{throw r},a.p=0},u=(e,t,n,i,u,l)=>{try{var s=e(t,n);if(!s||!s.then)return u(s,i,l);var p=s.then((e=>u(e,i)),o);if(!l)return p;r.push(a.p=p)}catch(e){o(e)}},l=(e,r,n)=>u(r.get,a[1],t,0,s,n),s=r=>{a.p=1,i.m[e]=e=>{e.exports=r()}};u(i,a[2],0,0,((e,r,t)=>e?u(i.I,a[0],0,e,l,t):o()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],u="shell",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(a[r]={get:t,from:u,eager:!!n})},s=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(e);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return p.push(a.then(o,r));var u=o(a);if(u&&u.then)return p.push(u.catch(r))}catch(e){r(e)}},p=[];return"default"===t&&(l("@reduxjs/toolkit","1.8.6",(()=>i.e(413).then((()=>()=>i(413))))),l("history","5.3.0",(()=>i.e(648).then((()=>()=>i(648))))),l("react-dom","18.2.0",(()=>Promise.all([i.e(935),i.e(822)]).then((()=>()=>i(935))))),l("react-redux","8.0.4",(()=>Promise.all([i.e(547),i.e(822),i.e(468)]).then((()=>()=>i(547))))),l("react-router-dom","6.4.2",(()=>Promise.all([i.e(818),i.e(822)]).then((()=>()=>i(818))))),l("react","18.2.0",(()=>i.e(294).then((()=>()=>i(294))))),s(283),s(100)),p.length?e[t]=Promise.all(p).then((()=>e[t]=1)):e[t]=1}}})(),i.p="http://localhost:8080/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,u=1,l=!0;;u++,i++){var s,p,f=u<t.length?(typeof t[u])[0]:"";if(i>=n.length||"o"==(p=(typeof(s=n[i]))[0]))return!l||("u"==f?u>a&&!o:""==f!=o);if("u"==p){if(!l||"u"!=f)return!1}else if(l)if(f==p)if(u<=a){if(s!=t[u])return!1}else{if(o?s>t[u]:s<t[u])return!1;s!=t[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(o||u<=a)return!1;l=!1,u--}else{if(u<=a||p<f!=o)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var d=[],h=d.pop.bind(d);for(i=1;i<t.length;i++){var c=t[i];d.push(1==c?h()|h():2==c?h()&h():c?r(c,n):!h())}return!!h()},t=(t,n,a)=>{var o=t[n];return(n=Object.keys(o).reduce(((t,n)=>!r(a,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,n)?t:n),0))&&o[n]},n=(e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)})(((e,r,n,a,o)=>{var u=r&&i.o(r,n)&&t(r,n,a);return u?(e=>(e.loaded=1,e.get()))(u):o()})),a={},o={822:()=>n("default","react",[1,18,2,0],(()=>i.e(294).then((()=>()=>i(294))))),468:()=>n("default","react-dom",[1,18,2,0],(()=>i.e(935).then((()=>()=>i(935))))),414:()=>n("default","react-router-dom",[1,6,3,0],(()=>i.e(818).then((()=>()=>i(818))))),631:()=>n("default","@reduxjs/toolkit",[1,1,8,6],(()=>i.e(413).then((()=>()=>i(413))))),741:()=>n("default","react-redux",[1,8,0,4],(()=>i.e(547).then((()=>()=>i(547))))),766:()=>n("default","history",[1,5,3,0],(()=>i.e(648).then((()=>()=>i(648)))))},u={468:[468],822:[822],873:[414,631,741,766]};i.f.consumes=(e,r)=>{i.o(u,e)&&u[e].forEach((e=>{if(i.o(a,e))return r.push(a[e]);var t=r=>{a[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},n=r=>{delete a[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var u=o[e]();u.then?r.push(a[e]=u.then(t).catch(n)):t(u)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(468|822)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),u=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,u,l]=t,s=0;if(o.some((r=>0!==e[r]))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);l&&l(i)}for(r&&r(t);s<o.length;s++)a=o[s],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkshell=self.webpackChunkshell||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i(809)})();