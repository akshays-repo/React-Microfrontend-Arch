"use strict";(self.webpackChunkapp2=self.webpackChunkapp2||[]).push([[648],{122:(t,n,e)=>{function r(){return r=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r.apply(this,arguments)}e.d(n,{Z:()=>r})},648:(t,n,e)=>{e.r(n),e.d(n,{Action:()=>r,createBrowserHistory:()=>u,createHashHistory:()=>c,createMemoryHistory:()=>l,createPath:()=>v,parsePath:()=>d});var r,a=e(122);!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(r||(r={}));var i="beforeunload",o="popstate";function u(t){void 0===t&&(t={});var n=t.window,e=void 0===n?document.defaultView:n,u=e.history;function c(){var t=e.location,n=t.pathname,r=t.search,a=t.hash,i=u.state||{};return[i.idx,{pathname:n,search:r,hash:a,state:i.usr||null,key:i.key||"default"}]}var l=null;e.addEventListener(o,(function(){if(l)b.call(l),l=null;else{var t=r.Pop,n=c(),e=n[0],a=n[1];if(b.length){if(null!=e){var i=y-e;i&&(l={action:t,location:a,retry:function(){H(-1*i)}},H(i))}}else S(t)}}));var s=r.Pop,g=c(),y=g[0],m=g[1],k=h(),b=h();function P(t){return"string"==typeof t?t:v(t)}function w(t,n){return void 0===n&&(n=null),(0,a.Z)({pathname:m.pathname,hash:"",search:""},"string"==typeof t?d(t):t,{state:n,key:p()})}function x(t,n){return[{usr:t.state,key:t.key,idx:n},P(t)]}function E(t,n,e){return!b.length||(b.call({action:t,location:n,retry:e}),!1)}function S(t){s=t;var n=c();y=n[0],m=n[1],k.call({action:s,location:m})}function H(t){u.go(t)}return null==y&&(y=0,u.replaceState((0,a.Z)({},u.state,{idx:y}),"")),{get action(){return s},get location(){return m},createHref:P,push:function t(n,a){var i=r.Push,o=w(n,a);if(E(i,o,(function(){t(n,a)}))){var c=x(o,y+1),l=c[0],s=c[1];try{u.pushState(l,"",s)}catch(t){e.location.assign(s)}S(i)}},replace:function t(n,e){var a=r.Replace,i=w(n,e);if(E(a,i,(function(){t(n,e)}))){var o=x(i,y),c=o[0],l=o[1];u.replaceState(c,"",l),S(a)}},go:H,back:function(){H(-1)},forward:function(){H(1)},listen:function(t){return k.push(t)},block:function(t){var n=b.push(t);return 1===b.length&&e.addEventListener(i,f),function(){n(),b.length||e.removeEventListener(i,f)}}}}function c(t){void 0===t&&(t={});var n=t.window,e=void 0===n?document.defaultView:n,u=e.history;function c(){var t=d(e.location.hash.substr(1)),n=t.pathname,r=void 0===n?"/":n,a=t.search,i=void 0===a?"":a,o=t.hash,c=void 0===o?"":o,l=u.state||{};return[l.idx,{pathname:r,search:i,hash:c,state:l.usr||null,key:l.key||"default"}]}var l=null;function s(){if(l)P.call(l),l=null;else{var t=r.Pop,n=c(),e=n[0],a=n[1];if(P.length){if(null!=e){var i=m-e;i&&(l={action:t,location:a,retry:function(){L(-1*i)}},L(i))}}else H(t)}}e.addEventListener(o,s),e.addEventListener("hashchange",(function(){v(c()[1])!==v(k)&&s()}));var g=r.Pop,y=c(),m=y[0],k=y[1],b=h(),P=h();function w(t){return function(){var t=document.querySelector("base"),n="";if(t&&t.getAttribute("href")){var r=e.location.href,a=r.indexOf("#");n=-1===a?r:r.slice(0,a)}return n}()+"#"+("string"==typeof t?t:v(t))}function x(t,n){return void 0===n&&(n=null),(0,a.Z)({pathname:k.pathname,hash:"",search:""},"string"==typeof t?d(t):t,{state:n,key:p()})}function E(t,n){return[{usr:t.state,key:t.key,idx:n},w(t)]}function S(t,n,e){return!P.length||(P.call({action:t,location:n,retry:e}),!1)}function H(t){g=t;var n=c();m=n[0],k=n[1],b.call({action:g,location:k})}function L(t){u.go(t)}return null==m&&(m=0,u.replaceState((0,a.Z)({},u.state,{idx:m}),"")),{get action(){return g},get location(){return k},createHref:w,push:function t(n,a){var i=r.Push,o=x(n,a);if(S(i,o,(function(){t(n,a)}))){var c=E(o,m+1),l=c[0],s=c[1];try{u.pushState(l,"",s)}catch(t){e.location.assign(s)}H(i)}},replace:function t(n,e){var a=r.Replace,i=x(n,e);if(S(a,i,(function(){t(n,e)}))){var o=E(i,m),c=o[0],l=o[1];u.replaceState(c,"",l),H(a)}},go:L,back:function(){L(-1)},forward:function(){L(1)},listen:function(t){return b.push(t)},block:function(t){var n=P.push(t);return 1===P.length&&e.addEventListener(i,f),function(){n(),P.length||e.removeEventListener(i,f)}}}}function l(t){void 0===t&&(t={});var n=t,e=n.initialEntries,i=void 0===e?["/"]:e,o=n.initialIndex,u=i.map((function(t){return(0,a.Z)({pathname:"/",search:"",hash:"",state:null,key:p()},"string"==typeof t?d(t):t)})),c=s(null==o?u.length-1:o,0,u.length-1),l=r.Pop,f=u[c],g=h(),y=h();function m(t,n){return void 0===n&&(n=null),(0,a.Z)({pathname:f.pathname,search:"",hash:""},"string"==typeof t?d(t):t,{state:n,key:p()})}function k(t,n,e){return!y.length||(y.call({action:t,location:n,retry:e}),!1)}function b(t,n){l=t,f=n,g.call({action:l,location:f})}function P(t){var n=s(c+t,0,u.length-1),e=r.Pop,a=u[n];k(e,a,(function(){P(t)}))&&(c=n,b(e,a))}return{get index(){return c},get action(){return l},get location(){return f},createHref:function(t){return"string"==typeof t?t:v(t)},push:function t(n,e){var a=r.Push,i=m(n,e);k(a,i,(function(){t(n,e)}))&&(c+=1,u.splice(c,u.length,i),b(a,i))},replace:function t(n,e){var a=r.Replace,i=m(n,e);k(a,i,(function(){t(n,e)}))&&(u[c]=i,b(a,i))},go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(t){return g.push(t)},block:function(t){return y.push(t)}}}function s(t,n,e){return Math.min(Math.max(t,n),e)}function f(t){t.preventDefault(),t.returnValue=""}function h(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter((function(t){return t!==n}))}},call:function(n){t.forEach((function(t){return t&&t(n)}))}}}function p(){return Math.random().toString(36).substr(2,8)}function v(t){var n=t.pathname,e=void 0===n?"/":n,r=t.search,a=void 0===r?"":r,i=t.hash,o=void 0===i?"":i;return a&&"?"!==a&&(e+="?"===a.charAt(0)?a:"?"+a),o&&"#"!==o&&(e+="#"===o.charAt(0)?o:"#"+o),e}function d(t){var n={};if(t){var e=t.indexOf("#");e>=0&&(n.hash=t.substr(e),t=t.substr(0,e));var r=t.indexOf("?");r>=0&&(n.search=t.substr(r),t=t.substr(0,r)),t&&(n.pathname=t)}return n}}}]);