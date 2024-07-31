var Et=Object.defineProperty;var xt=(e,t,s)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var tt=(e,t,s)=>xt(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();function m(){}function G(e,t){for(const s in t)e[s]=t[s];return e}function pt(e){return e()}function ut(){return Object.create(null)}function H(e){e.forEach(pt)}function nt(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ot(e){return Object.keys(e).length===0}function jt(e,...t){if(e==null){for(const i of t)i(void 0);return m}const s=e.subscribe(...t);return s.unsubscribe?()=>s.unsubscribe():s}function S(e,t){e.appendChild(t)}function y(e,t,s){e.insertBefore(t,s||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function z(){return W(" ")}function rt(){return W("")}function U(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function St(e){return Array.from(e.childNodes)}function Lt(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ct(e,t,{bubbles:s=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:s,cancelable:i})}function J(e,t){return new e(t)}let Y;function X(e){Y=e}function ot(){if(!Y)throw new Error("Function called outside component initialization");return Y}function Nt(e){ot().$$.after_update.push(e)}function Pt(e){ot().$$.on_destroy.push(e)}function At(){const e=ot();return(t,s,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const l=Ct(t,s,{cancelable:i});return r.slice().forEach(a=>{a.call(e,l)}),!l.defaultPrevented}return!0}}function ft(e,t){const s=e.$$.callbacks[t.type];s&&s.slice().forEach(i=>i.call(this,t))}const T=[],dt=[];let D=[];const _t=[],gt=Promise.resolve();let st=!1;function ht(){st||(st=!0,gt.then(bt))}function It(){return ht(),gt}function it(e){D.push(e)}const et=new Set;let q=0;function bt(){if(q!==0)return;const e=Y;do{try{for(;q<T.length;){const t=T[q];q++,X(t),Rt(t.$$)}}catch(t){throw T.length=0,q=0,t}for(X(null),T.length=0,q=0;dt.length;)dt.pop()();for(let t=0;t<D.length;t+=1){const s=D[t];et.has(s)||(et.add(s),s())}D.length=0}while(T.length);for(;_t.length;)_t.pop()();st=!1,et.clear(),X(e)}function Rt(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(it)}}function qt(e){const t=[],s=[];D.forEach(i=>e.indexOf(i)===-1?t.push(i):s.push(i)),s.forEach(i=>i()),D=t}const V=new Set;let P;function ct(){P={r:0,c:[],p:P}}function lt(){P.r||H(P.c),P=P.p}function C(e,t){e&&e.i&&(V.delete(e),e.i(t))}function A(e,t,s,i){if(e&&e.o){if(V.has(e))return;V.add(e),P.c.push(()=>{V.delete(e),i&&(s&&e.d(1),i())}),e.o(t)}else i&&i()}function Q(e,t){const s={},i={},r={$$scope:1};let l=e.length;for(;l--;){const a=e[l],o=t[l];if(o){for(const n in a)n in o||(i[n]=1);for(const n in o)r[n]||(s[n]=o[n],r[n]=1);e[l]=o}else for(const n in a)r[n]=1}for(const a in i)a in s||(s[a]=void 0);return s}function Z(e){return typeof e=="object"&&e!==null?e:{}}function K(e){e&&e.c()}function B(e,t,s){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,s),it(()=>{const l=e.$$.on_mount.map(pt).filter(nt);e.$$.on_destroy?e.$$.on_destroy.push(...l):H(l),e.$$.on_mount=[]}),r.forEach(it)}function F(e,t){const s=e.$$;s.fragment!==null&&(qt(s.after_update),H(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Mt(e,t){e.$$.dirty[0]===-1&&(T.push(e),ht(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(e,t,s,i,r,l,a=null,o=[-1]){const n=Y;X(e);const c=e.$$={fragment:null,ctx:[],props:l,update:m,not_equal:r,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(n?n.$$.context:[])),callbacks:ut(),dirty:o,skip_bound:!1,root:t.target||n.$$.root};a&&a(c.root);let _=!1;if(c.ctx=s?s(e,t.props||{},(p,g,...k)=>{const v=k.length?k[0]:g;return c.ctx&&r(c.ctx[p],c.ctx[p]=v)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](v),_&&Mt(e,p)),g}):[],c.update(),_=!0,H(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const p=St(t.target);c.fragment&&c.fragment.l(p),p.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&C(e.$$.fragment),B(e,t.target,t.anchor),bt()}X(n)}class R{constructor(){tt(this,"$$");tt(this,"$$set")}$destroy(){F(this,1),this.$destroy=m}$on(t,s){if(!nt(s))return m;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const r=i.indexOf(s);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Ot(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Tt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Tt);function Dt(e){let t;return{c(){t=E("div"),t.textContent="로그인 페이지 입니다"},m(s,i){y(s,t,i)},p:m,i:m,o:m,d(s){s&&b(t)}}}class Bt extends R{constructor(t){super(),I(this,t,null,Dt,N,{})}}function Ft(e){let t,s,i,r,l,a,o,n,c,_,p,g,k,v,j,w;return{c(){t=E("header"),s=E("div"),i=E("div"),r=W(Ht),l=W(":"),a=W(e[0]),o=z(),n=E("div"),n.innerHTML='<img src="assets/chart-bar.svg" alt="chart-bar"/> <img src="assets/wifi.svg" alt="wifi"/> <img src="assets/bettery.svg" alt="battery"/>',c=z(),_=E("div"),_.innerHTML='<div class="menu-bar__location"><span>역삼1동</span> <div class="menu-bar__location-icon"><img src="assets/arrow-down.svg" alt="arrow-down"/></div></div> <div class="menu-bar__icons"><img src="assets/search.svg" alt="search"/> <img src="assets/menu.svg" alt="menu"/> <img src="assets/alert.svg" alt="alert"/></div>',p=z(),g=E("main"),g.innerHTML='<div class="item-list"><div class="item-list__img"><img src="assets/img.svg" alt="img"/></div> <div class="item-list__info"><div class="item-list__info-title">게이밍pc 팝니다.</div> <div class="item-list__info-meta">역삼동 19초전</div> <div class="item-list__info-price">100만원</div></div></div> <div class="item-list"><div class="item-list__img"><img src="assets/img.svg" alt="img"/></div> <div class="item-list__info"><div class="item-list__info-title">게이밍pc 팝니다.</div> <div class="item-list__info-meta">역삼동 19초전</div> <div class="item-list__info-price">100만원</div></div></div> <div class="item-list"><div class="item-list__img"><img src="assets/img.svg" alt="img"/></div> <div class="item-list__info"><div class="item-list__info-title">게이밍pc 팝니다.</div> <div class="item-list__info-meta">역삼동 19초전</div> <div class="item-list__info-price">100만원</div></div></div> <div class="item-list"><div class="item-list__img"><img src="assets/img.svg" alt="img"/></div> <div class="item-list__info"><div class="item-list__info-title">게이밍pc 팝니다.</div> <div class="item-list__info-meta">역삼동 19초전</div> <div class="item-list__info-price">100만원</div></div></div> <div class="item-list"><div class="item-list__img"><img src="assets/img.svg" alt="img"/></div> <div class="item-list__info"><div class="item-list__info-title">게이밍pc 팝니다.</div> <div class="item-list__info-meta">역삼동 19초전</div> <div class="item-list__info-price">100만원</div></div></div> <div class="item-list"><div class="item-list__img"><img src="assets/img.svg" alt="img"/></div> <div class="item-list__info"><div class="item-list__info-title">게이밍pc 팝니다.</div> <div class="item-list__info-meta">역삼동 19초전</div> <div class="item-list__info-price">100만원</div></div></div> <div class="write-btn">+ 글쓰기</div>',k=z(),v=E("footer"),v.innerHTML='<div class="footer-block"><div class="footer-icons"><div class="footer-icons__img"><img src="assets/home.svg" alt="home"/></div> <div class="footer-icons__desc">홈</div></div> <div class="footer-icons"><div class="footer-icons__img"><img src="assets/doc.svg" alt="doc"/></div> <div class="footer-icons__desc">동네생활</div></div> <div class="footer-icons"><div class="footer-icons__img"><img src="assets/location.svg" alt="location"/></div> <div class="footer-icons__desc">내 근처</div></div> <div class="footer-icons"><div class="footer-icons__img"><img src="assets/chat.svg" alt="chat"/></div> <div class="footer-icons__desc">채팅</div></div> <div class="footer-icons"><div class="footer-icons__img"><img src="assets/user.svg" alt="user"/></div> <div class="footer-icons__desc">나의 당근</div></div></div>',j=z(),w=E("div"),w.textContent="화면사이즈를 줄여주세요.",U(i,"class","infor-bar__time"),U(n,"class","infor-bar__icons"),U(s,"class","infor-bar"),U(_,"class","menu-bar"),U(w,"class","media-info-msg")},m($,x){y($,t,x),S(t,s),S(s,i),S(i,r),S(i,l),S(i,a),S(s,o),S(s,n),S(t,c),S(t,_),y($,p,x),y($,g,x),y($,k,x),y($,v,x),y($,j,x),y($,w,x)},p($,[x]){x&1&&Lt(a,$[0])},i:m,o:m,d($){$&&(b(t),b(p),b(g),b(k),b(v),b(j),b(w))}}}let Ht=20;function zt(e,t,s){let i=10;return setInterval(()=>s(0,i=i+1),1e3),[i]}class Ut extends R{constructor(t){super(),I(this,t,zt,Ft,N,{})}}function Wt(e){let t;return{c(){t=E("div"),t.textContent="싸인업 페이지 입니다"},m(s,i){y(s,t,i)},p:m,i:m,o:m,d(s){s&&b(t)}}}class Xt extends R{constructor(t){super(),I(this,t,null,Wt,N,{})}}const M=[];function wt(e,t){return{subscribe:yt(e,t).subscribe}}function yt(e,t=m){let s;const i=new Set;function r(o){if(N(e,o)&&(e=o,s)){const n=!M.length;for(const c of i)c[1](),M.push(c,e);if(n){for(let c=0;c<M.length;c+=2)M[c][0](M[c+1]);M.length=0}}}function l(o){r(o(e))}function a(o,n=m){const c=[o,n];return i.add(c),i.size===1&&(s=t(r,l)||m),o(e),()=>{i.delete(c),i.size===0&&s&&(s(),s=null)}}return{set:r,update:l,subscribe:a}}function $t(e,t,s){const i=!Array.isArray(e),r=i?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=t.length<2;return wt(s,(a,o)=>{let n=!1;const c=[];let _=0,p=m;const g=()=>{if(_)return;p();const v=t(i?c[0]:c,a,o);l?a(v):p=nt(v)?v:m},k=r.map((v,j)=>jt(v,w=>{c[j]=w,_&=~(1<<j),n&&g()},()=>{_|=1<<j}));return n=!0,g(),function(){H(k),p(),n=!1}})}function Yt(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var s,i,r,l,a=[],o="",n=e.split("/");for(n[0]||n.shift();r=n.shift();)s=r[0],s==="*"?(a.push("wild"),o+="/(.*)"):s===":"?(i=r.indexOf("?",1),l=r.indexOf(".",1),a.push(r.substring(1,~i?i:~l?l:r.length)),o+=~i&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(o+=(~i?"?":"")+"\\"+r.substring(l))):o+="/"+r;return{keys:a,pattern:new RegExp("^"+o+"/?$","i")}}function Kt(e){let t,s,i;const r=[e[2]];var l=e[0];function a(o,n){let c={};for(let _=0;_<r.length;_+=1)c=G(c,r[_]);return n!==void 0&&n&4&&(c=G(c,Q(r,[Z(o[2])]))),{props:c}}return l&&(t=J(l,a(e)),t.$on("routeEvent",e[7])),{c(){t&&K(t.$$.fragment),s=rt()},m(o,n){t&&B(t,o,n),y(o,s,n),i=!0},p(o,n){if(n&1&&l!==(l=o[0])){if(t){ct();const c=t;A(c.$$.fragment,1,0,()=>{F(c,1)}),lt()}l?(t=J(l,a(o,n)),t.$on("routeEvent",o[7]),K(t.$$.fragment),C(t.$$.fragment,1),B(t,s.parentNode,s)):t=null}else if(l){const c=n&4?Q(r,[Z(o[2])]):{};t.$set(c)}},i(o){i||(t&&C(t.$$.fragment,o),i=!0)},o(o){t&&A(t.$$.fragment,o),i=!1},d(o){o&&b(s),t&&F(t,o)}}}function Vt(e){let t,s,i;const r=[{params:e[1]},e[2]];var l=e[0];function a(o,n){let c={};for(let _=0;_<r.length;_+=1)c=G(c,r[_]);return n!==void 0&&n&6&&(c=G(c,Q(r,[n&2&&{params:o[1]},n&4&&Z(o[2])]))),{props:c}}return l&&(t=J(l,a(e)),t.$on("routeEvent",e[6])),{c(){t&&K(t.$$.fragment),s=rt()},m(o,n){t&&B(t,o,n),y(o,s,n),i=!0},p(o,n){if(n&1&&l!==(l=o[0])){if(t){ct();const c=t;A(c.$$.fragment,1,0,()=>{F(c,1)}),lt()}l?(t=J(l,a(o,n)),t.$on("routeEvent",o[6]),K(t.$$.fragment),C(t.$$.fragment,1),B(t,s.parentNode,s)):t=null}else if(l){const c=n&6?Q(r,[n&2&&{params:o[1]},n&4&&Z(o[2])]):{};t.$set(c)}},i(o){i||(t&&C(t.$$.fragment,o),i=!0)},o(o){t&&A(t.$$.fragment,o),i=!1},d(o){o&&b(s),t&&F(t,o)}}}function Gt(e){let t,s,i,r;const l=[Vt,Kt],a=[];function o(n,c){return n[1]?0:1}return t=o(e),s=a[t]=l[t](e),{c(){s.c(),i=rt()},m(n,c){a[t].m(n,c),y(n,i,c),r=!0},p(n,[c]){let _=t;t=o(n),t===_?a[t].p(n,c):(ct(),A(a[_],1,1,()=>{a[_]=null}),lt(),s=a[t],s?s.p(n,c):(s=a[t]=l[t](n),s.c()),C(s,1),s.m(i.parentNode,i))},i(n){r||(C(s),r=!0)},o(n){A(s),r=!1},d(n){n&&b(i),a[t].d(n)}}}function mt(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const s=t.indexOf("?");let i="";return s>-1&&(i=t.substr(s+1),t=t.substr(0,s)),{location:t,querystring:i}}const at=wt(null,function(t){t(mt());const s=()=>{t(mt())};return window.addEventListener("hashchange",s,!1),function(){window.removeEventListener("hashchange",s,!1)}});$t(at,e=>e.location);$t(at,e=>e.querystring);const vt=yt(void 0);function Jt(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Qt(e,t,s){let{routes:i={}}=t,{prefix:r=""}=t,{restoreScrollState:l=!1}=t;class a{constructor(u,d){if(!d||typeof d!="function"&&(typeof d!="object"||d._sveltesparouter!==!0))throw Error("Invalid component object");if(!u||typeof u=="string"&&(u.length<1||u.charAt(0)!="/"&&u.charAt(0)!="*")||typeof u=="object"&&!(u instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:O,keys:h}=Yt(u);this.path=u,typeof d=="object"&&d._sveltesparouter===!0?(this.component=d.component,this.conditions=d.conditions||[],this.userData=d.userData,this.props=d.props||{}):(this.component=()=>Promise.resolve(d),this.conditions=[],this.props={}),this._pattern=O,this._keys=h}match(u){if(r){if(typeof r=="string")if(u.startsWith(r))u=u.substr(r.length)||"/";else return null;else if(r instanceof RegExp){const L=u.match(r);if(L&&L[0])u=u.substr(L[0].length)||"/";else return null}}const d=this._pattern.exec(u);if(d===null)return null;if(this._keys===!1)return d;const O={};let h=0;for(;h<this._keys.length;){try{O[this._keys[h]]=decodeURIComponent(d[h+1]||"")||null}catch{O[this._keys[h]]=null}h++}return O}async checkConditions(u){for(let d=0;d<this.conditions.length;d++)if(!await this.conditions[d](u))return!1;return!0}}const o=[];i instanceof Map?i.forEach((f,u)=>{o.push(new a(u,f))}):Object.keys(i).forEach(f=>{o.push(new a(f,i[f]))});let n=null,c=null,_={};const p=At();async function g(f,u){await It(),p(f,u)}let k=null,v=null;l&&(v=f=>{f.state&&(f.state.__svelte_spa_router_scrollY||f.state.__svelte_spa_router_scrollX)?k=f.state:k=null},window.addEventListener("popstate",v),Nt(()=>{Jt(k)}));let j=null,w=null;const $=at.subscribe(async f=>{j=f;let u=0;for(;u<o.length;){const d=o[u].match(f.location);if(!d){u++;continue}const O={route:o[u].path,location:f.location,querystring:f.querystring,userData:o[u].userData,params:d&&typeof d=="object"&&Object.keys(d).length?d:null};if(!await o[u].checkConditions(O)){s(0,n=null),w=null,g("conditionsFailed",O);return}g("routeLoading",Object.assign({},O));const h=o[u].component;if(w!=h){h.loading?(s(0,n=h.loading),w=h,s(1,c=h.loadingParams),s(2,_={}),g("routeLoaded",Object.assign({},O,{component:n,name:n.name,params:c}))):(s(0,n=null),w=null);const L=await h();if(f!=j)return;s(0,n=L&&L.default||L),w=h}d&&typeof d=="object"&&Object.keys(d).length?s(1,c=d):s(1,c=null),s(2,_=o[u].props),g("routeLoaded",Object.assign({},O,{component:n,name:n.name,params:c})).then(()=>{vt.set(c)});return}s(0,n=null),w=null,vt.set(void 0)});Pt(()=>{$(),v&&window.removeEventListener("popstate",v)});function x(f){ft.call(this,e,f)}function kt(f){ft.call(this,e,f)}return e.$$set=f=>{"routes"in f&&s(3,i=f.routes),"prefix"in f&&s(4,r=f.prefix),"restoreScrollState"in f&&s(5,l=f.restoreScrollState)},e.$$.update=()=>{e.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[n,c,_,i,r,l,x,kt]}class Zt extends R{constructor(t){super(),I(this,t,Qt,Gt,N,{routes:3,prefix:4,restoreScrollState:5})}}function te(e){let t;return{c(){t=E("div"),t.textContent="롸이트 페이지 입니다"},m(s,i){y(s,t,i)},p:m,i:m,o:m,d(s){s&&b(t)}}}class ee extends R{constructor(t){super(),I(this,t,null,te,N,{})}}function se(e){let t;return{c(){t=E("div"),t.textContent="잘못된 경로입니다."},m(s,i){y(s,t,i)},p:m,i:m,o:m,d(s){s&&b(t)}}}class ie extends R{constructor(t){super(),I(this,t,null,se,N,{})}}function ne(e){let t,s;return t=new Zt({props:{routes:e[0]}}),{c(){K(t.$$.fragment)},m(i,r){B(t,i,r),s=!0},p:m,i(i){s||(C(t.$$.fragment,i),s=!0)},o(i){A(t.$$.fragment,i),s=!1},d(i){F(t,i)}}}function re(e){return[{"/":Ut,"/login":Bt,"/signup":Xt,"/write":ee,"*":ie}]}class oe extends R{constructor(t){super(),I(this,t,re,ne,N,{})}}new oe({target:document.getElementById("app")});