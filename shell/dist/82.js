"use strict";(self.webpackChunkshell=self.webpackChunkshell||[]).push([[82],{82:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var a=t(416),i=t.n(a),c=t(853),o=t(475),r=t(414),l="/".concat(o.F7);const u=function(){var e=(0,a.useRef)(null),n=(0,r.useNavigate)();return(0,a.useEffect)((function(){var t=function(e){var t=e.detail,a="".concat(l).concat(t);a!==o.M7.location.pathname&&n(a)};window.addEventListener("[app1] navigated",t);var a=o.M7.listen((function(e){var n=e.location;n.pathname.startsWith(l)&&window.dispatchEvent(new CustomEvent("[shell] navigated",{detail:n.pathname.replace(l,"")}))}));return(0,c.mount)({mountPoint:e.current,initialPathname:o.M7.location.pathname.replace(l,"")}),function(){window.removeEventListener("[app1] navigated",t),a()}}),[]),i().createElement("div",{ref:e})}}}]);