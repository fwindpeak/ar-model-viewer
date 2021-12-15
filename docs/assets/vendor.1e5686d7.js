var ex=Object.defineProperty;var jd=Object.getOwnPropertySymbols;var tx=Object.prototype.hasOwnProperty,nx=Object.prototype.propertyIsEnumerable;var qd=(r,e,t)=>e in r?ex(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Xd=(r,e)=>{for(var t in e||(e={}))tx.call(e,t)&&qd(r,t,e[t]);if(jd)for(var t of jd(e))nx.call(e,t)&&qd(r,t,e[t]);return r};function Ql(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const ix="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rx=Ql(ix);function Yd(r){return!!r||r===""}function ec(r){if(Pe(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=bt(n)?ox(n):ec(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(bt(r))return r;if(St(r))return r}}const sx=/;(?![^(]*\))/g,ax=/:(.+)/;function ox(r){const e={};return r.split(sx).forEach(t=>{if(t){const n=t.split(ax);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function tc(r){let e="";if(bt(r))e=r;else if(Pe(r))for(let t=0;t<r.length;t++){const n=tc(r[t]);n&&(e+=n+" ")}else if(St(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Xe={},gr=[],an=()=>{},lx=()=>!1,cx=/^on[^a-z]/,Ya=r=>cx.test(r),nc=r=>r.startsWith("onUpdate:"),xt=Object.assign,ic=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},hx=Object.prototype.hasOwnProperty,ke=(r,e)=>hx.call(r,e),Pe=Array.isArray,Ls=r=>$a(r)==="[object Map]",ux=r=>$a(r)==="[object Set]",Ie=r=>typeof r=="function",bt=r=>typeof r=="string",rc=r=>typeof r=="symbol",St=r=>r!==null&&typeof r=="object",$d=r=>St(r)&&Ie(r.then)&&Ie(r.catch),dx=Object.prototype.toString,$a=r=>dx.call(r),px=r=>$a(r).slice(8,-1),fx=r=>$a(r)==="[object Object]",sc=r=>bt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Ja=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Za=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},mx=/-(\w)/g,vr=Za(r=>r.replace(mx,(e,t)=>t?t.toUpperCase():"")),gx=/\B([A-Z])/g,yr=Za(r=>r.replace(gx,"-$1").toLowerCase()),Jd=Za(r=>r.charAt(0).toUpperCase()+r.slice(1)),ac=Za(r=>r?`on${Jd(r)}`:""),Ka=(r,e)=>!Object.is(r,e),oc=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Qa=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},vx=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let Zd;const yx=()=>Zd||(Zd=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ki;const eo=[];class xx{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ki&&(this.parent=ki,this.index=(ki.scopes||(ki.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(eo.push(this),ki=this)}off(){this.active&&(eo.pop(),ki=eo[eo.length-1])}stop(e){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!e){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function bx(r,e){e=e||ki,e&&e.active&&e.effects.push(r)}const lc=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Kd=r=>(r.w&si)>0,Qd=r=>(r.n&si)>0,wx=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=si},_x=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Kd(i)&&!Qd(i)?i.delete(r):e[t++]=i,i.w&=~si,i.n&=~si}e.length=t}},cc=new WeakMap;let Rs=0,si=1;const hc=30,Cs=[];let zi;const Bi=Symbol(""),uc=Symbol("");class dc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],bx(this,n)}run(){if(!this.active)return this.fn();if(!Cs.includes(this))try{return Cs.push(zi=this),Mx(),si=1<<++Rs,Rs<=hc?wx(this):ep(this),this.fn()}finally{Rs<=hc&&_x(this),si=1<<--Rs,Hi(),Cs.pop();const e=Cs.length;zi=e>0?Cs[e-1]:void 0}}stop(){this.active&&(ep(this),this.onStop&&this.onStop(),this.active=!1)}}function ep(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let xr=!0;const pc=[];function br(){pc.push(xr),xr=!1}function Mx(){pc.push(xr),xr=!0}function Hi(){const r=pc.pop();xr=r===void 0?!0:r}function Bt(r,e,t){if(!tp())return;let n=cc.get(r);n||cc.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=lc()),np(i)}function tp(){return xr&&zi!==void 0}function np(r,e){let t=!1;Rs<=hc?Qd(r)||(r.n|=si,t=!Kd(r)):t=!r.has(zi),t&&(r.add(zi),zi.deps.push(r))}function Fn(r,e,t,n,i,s){const a=cc.get(r);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Pe(r))a.forEach((l,c)=>{(c==="length"||c>=n)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Pe(r)?sc(t)&&o.push(a.get("length")):(o.push(a.get(Bi)),Ls(r)&&o.push(a.get(uc)));break;case"delete":Pe(r)||(o.push(a.get(Bi)),Ls(r)&&o.push(a.get(uc)));break;case"set":Ls(r)&&o.push(a.get(Bi));break}if(o.length===1)o[0]&&fc(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);fc(lc(l))}}function fc(r,e){for(const t of Pe(r)?r:[...r])(t!==zi||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Sx=Ql("__proto__,__v_isRef,__isVue"),ip=new Set(Object.getOwnPropertyNames(Symbol).map(r=>Symbol[r]).filter(rc)),Tx=mc(),Ex=mc(!1,!0),Ax=mc(!0),rp=Lx();function Lx(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=ze(this);for(let s=0,a=this.length;s<a;s++)Bt(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(ze)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){br();const n=ze(this)[e].apply(this,t);return Hi(),n}}),r}function mc(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_raw"&&s===(r?e?Wx:pp:e?dp:up).get(n))return n;const a=Pe(n);if(!r&&a&&ke(rp,i))return Reflect.get(rp,i,s);const o=Reflect.get(n,i,s);return(rc(i)?ip.has(i):Sx(i))||(r||Bt(n,"get",i),e)?o:Ot(o)?!a||!sc(i)?o.value:o:St(o)?r?fp(o):yc(o):o}}const Rx=sp(),Cx=sp(!0);function sp(r=!1){return function(t,n,i,s){let a=t[n];if(!r&&!bc(i)&&(i=ze(i),a=ze(a),!Pe(t)&&Ot(a)&&!Ot(i)))return a.value=i,!0;const o=Pe(t)&&sc(n)?Number(n)<t.length:ke(t,n),l=Reflect.set(t,n,i,s);return t===ze(s)&&(o?Ka(i,a)&&Fn(t,"set",n,i):Fn(t,"add",n,i)),l}}function Px(r,e){const t=ke(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&Fn(r,"delete",e,void 0),n}function Ix(r,e){const t=Reflect.has(r,e);return(!rc(e)||!ip.has(e))&&Bt(r,"has",e),t}function Dx(r){return Bt(r,"iterate",Pe(r)?"length":Bi),Reflect.ownKeys(r)}const ap={get:Tx,set:Rx,deleteProperty:Px,has:Ix,ownKeys:Dx},Fx={get:Ax,set(r,e){return!0},deleteProperty(r,e){return!0}},Ox=xt({},ap,{get:Ex,set:Cx}),gc=r=>r,to=r=>Reflect.getPrototypeOf(r);function no(r,e,t=!1,n=!1){r=r.__v_raw;const i=ze(r),s=ze(e);e!==s&&!t&&Bt(i,"get",e),!t&&Bt(i,"get",s);const{has:a}=to(i),o=n?gc:t?_c:wc;if(a.call(i,e))return o(r.get(e));if(a.call(i,s))return o(r.get(s));r!==i&&r.get(e)}function io(r,e=!1){const t=this.__v_raw,n=ze(t),i=ze(r);return r!==i&&!e&&Bt(n,"has",r),!e&&Bt(n,"has",i),r===i?t.has(r):t.has(r)||t.has(i)}function ro(r,e=!1){return r=r.__v_raw,!e&&Bt(ze(r),"iterate",Bi),Reflect.get(r,"size",r)}function op(r){r=ze(r);const e=ze(this);return to(e).has.call(e,r)||(e.add(r),Fn(e,"add",r,r)),this}function lp(r,e){e=ze(e);const t=ze(this),{has:n,get:i}=to(t);let s=n.call(t,r);s||(r=ze(r),s=n.call(t,r));const a=i.call(t,r);return t.set(r,e),s?Ka(e,a)&&Fn(t,"set",r,e):Fn(t,"add",r,e),this}function cp(r){const e=ze(this),{has:t,get:n}=to(e);let i=t.call(e,r);i||(r=ze(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&Fn(e,"delete",r,void 0),s}function hp(){const r=ze(this),e=r.size!==0,t=r.clear();return e&&Fn(r,"clear",void 0,void 0),t}function so(r,e){return function(n,i){const s=this,a=s.__v_raw,o=ze(a),l=e?gc:r?_c:wc;return!r&&Bt(o,"iterate",Bi),a.forEach((c,h)=>n.call(i,l(c),l(h),s))}}function ao(r,e,t){return function(...n){const i=this.__v_raw,s=ze(i),a=Ls(s),o=r==="entries"||r===Symbol.iterator&&a,l=r==="keys"&&a,c=i[r](...n),h=t?gc:e?_c:wc;return!e&&Bt(s,"iterate",l?uc:Bi),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:o?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function ai(r){return function(...e){return r==="delete"?!1:this}}function Nx(){const r={get(s){return no(this,s)},get size(){return ro(this)},has:io,add:op,set:lp,delete:cp,clear:hp,forEach:so(!1,!1)},e={get(s){return no(this,s,!1,!0)},get size(){return ro(this)},has:io,add:op,set:lp,delete:cp,clear:hp,forEach:so(!1,!0)},t={get(s){return no(this,s,!0)},get size(){return ro(this,!0)},has(s){return io.call(this,s,!0)},add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear"),forEach:so(!0,!1)},n={get(s){return no(this,s,!0,!0)},get size(){return ro(this,!0)},has(s){return io.call(this,s,!0)},add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=ao(s,!1,!1),t[s]=ao(s,!0,!1),e[s]=ao(s,!1,!0),n[s]=ao(s,!0,!0)}),[r,t,e,n]}const[Ux,kx,zx,Bx]=Nx();function vc(r,e){const t=e?r?Bx:zx:r?kx:Ux;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(ke(t,i)&&i in n?t:n,i,s)}const Hx={get:vc(!1,!1)},Vx={get:vc(!1,!0)},Gx={get:vc(!0,!1)},up=new WeakMap,dp=new WeakMap,pp=new WeakMap,Wx=new WeakMap;function jx(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qx(r){return r.__v_skip||!Object.isExtensible(r)?0:jx(px(r))}function yc(r){return r&&r.__v_isReadonly?r:xc(r,!1,ap,Hx,up)}function Xx(r){return xc(r,!1,Ox,Vx,dp)}function fp(r){return xc(r,!0,Fx,Gx,pp)}function xc(r,e,t,n,i){if(!St(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const a=qx(r);if(a===0)return r;const o=new Proxy(r,a===2?n:t);return i.set(r,o),o}function wr(r){return bc(r)?wr(r.__v_raw):!!(r&&r.__v_isReactive)}function bc(r){return!!(r&&r.__v_isReadonly)}function mp(r){return wr(r)||bc(r)}function ze(r){const e=r&&r.__v_raw;return e?ze(e):r}function gp(r){return Qa(r,"__v_skip",!0),r}const wc=r=>St(r)?yc(r):r,_c=r=>St(r)?fp(r):r;function Yx(r){tp()&&(r=ze(r),r.dep||(r.dep=lc()),np(r.dep))}function $x(r,e){r=ze(r),r.dep&&fc(r.dep)}function Ot(r){return Boolean(r&&r.__v_isRef===!0)}function Jx(r){return Ot(r)?r.value:r}const Zx={get:(r,e,t)=>Jx(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return Ot(i)&&!Ot(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function vp(r){return wr(r)?r:new Proxy(r,Zx)}class Kx{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new dc(e,()=>{this._dirty||(this._dirty=!0,$x(this))}),this.__v_isReadonly=n}get value(){const e=ze(this);return Yx(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qx(r,e){let t,n;const i=Ie(r);return i?(t=r,n=an):(t=r.get,n=r.set),new Kx(t,n,i||!n)}Promise.resolve();function eb(r,e,...t){const n=r.vnode.props||Xe;let i=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const h=`${a==="modelValue"?"model":a}Modifiers`,{number:u,trim:d}=n[h]||Xe;d?i=t.map(p=>p.trim()):u&&(i=t.map(vx))}let o,l=n[o=ac(e)]||n[o=ac(vr(e))];!l&&s&&(l=n[o=ac(yr(e))]),l&&Yt(l,r,6,i);const c=n[o+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[o])return;r.emitted[o]=!0,Yt(c,r,6,i)}}function yp(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let a={},o=!1;if(!Ie(r)){const l=c=>{const h=yp(c,e,!0);h&&(o=!0,xt(a,h))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!o?(n.set(r,null),null):(Pe(s)?s.forEach(l=>a[l]=null):xt(a,s),n.set(r,a),a)}function Mc(r,e){return!r||!Ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(r,e[0].toLowerCase()+e.slice(1))||ke(r,yr(e))||ke(r,e))}let vn=null,xp=null;function oo(r){const e=vn;return vn=r,xp=r&&r.type.__scopeId||null,e}function tb(r,e=vn,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Gp(-1);const s=oo(e),a=r(...i);return oo(s),n._d&&Gp(1),a};return n._n=!0,n._c=!0,n._d=!0,n}function Sc(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:h,renderCache:u,data:d,setupState:p,ctx:f,inheritAttrs:m}=r;let v,g;const b=oo(r);try{if(t.shapeFlag&4){const y=i||n;v=xn(h.call(y,y,u,s,p,d,f)),g=l}else{const y=e;v=xn(y.length>1?y(s,{attrs:l,slots:o,emit:c}):y(s,null)),g=e.props?l:nb(l)}}catch(y){Ps.length=0,vo(y,r,1),v=Xi(oi)}let x=v;if(g&&m!==!1){const y=Object.keys(g),{shapeFlag:w}=x;y.length&&w&(1|6)&&(a&&y.some(nc)&&(g=ib(g,a)),x=_r(x,g))}return t.dirs&&(x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),v=x,oo(b),v}const nb=r=>{let e;for(const t in r)(t==="class"||t==="style"||Ya(t))&&((e||(e={}))[t]=r[t]);return e},ib=(r,e)=>{const t={};for(const n in r)(!nc(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function rb(r,e,t){const{props:n,children:i,component:s}=r,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?bp(n,a,c):!!a;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(a[d]!==n[d]&&!Mc(c,d))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?bp(n,a,c):!0:!!a;return!1}function bp(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!Mc(t,s))return!0}return!1}function sb({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const ab=r=>r.__isSuspense;function ob(r,e){e&&e.pendingBranch?Pe(r)?e.effects.push(...r):e.effects.push(r):o1(r)}function lb(r,e){if(mt){let t=mt.provides;const n=mt.parent&&mt.parent.provides;n===t&&(t=mt.provides=Object.create(n)),t[r]=e}}function Tc(r,e,t=!1){const n=mt||vn;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ie(e)?e.call(n.proxy):e}}function cb(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tp(()=>{r.isMounted=!0}),Ep(()=>{r.isUnmounting=!0}),r}const Xt=[Function,Array],hb={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},setup(r,{slots:e}){const t=Jb(),n=cb();let i;return()=>{const s=e.default&&Mp(e.default(),!0);if(!s||!s.length)return;const a=ze(r),{mode:o}=a,l=s[0];if(n.isLeaving)return Ac(l);const c=_p(l);if(!c)return Ac(l);const h=Ec(c,a,n,t);Lc(c,h);const u=t.subTree,d=u&&_p(u);let p=!1;const{getTransitionKey:f}=c.type;if(f){const m=f();i===void 0?i=m:m!==i&&(i=m,p=!0)}if(d&&d.type!==oi&&(!qi(c,d)||p)){const m=Ec(d,a,n,t);if(Lc(d,m),o==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update()},Ac(l);o==="in-out"&&c.type!==oi&&(m.delayLeave=(v,g,b)=>{const x=wp(n,d);x[String(d.key)]=d,v._leaveCb=()=>{g(),v._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=b})}return l}}},ub=hb;function wp(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Ec(r,e,t,n){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:d,onAfterLeave:p,onLeaveCancelled:f,onBeforeAppear:m,onAppear:v,onAfterAppear:g,onAppearCancelled:b}=e,x=String(r.key),y=wp(t,r),w=(T,P)=>{T&&Yt(T,n,9,P)},M={mode:s,persisted:a,beforeEnter(T){let P=o;if(!t.isMounted)if(i)P=m||o;else return;T._leaveCb&&T._leaveCb(!0);const D=y[x];D&&qi(r,D)&&D.el._leaveCb&&D.el._leaveCb(),w(P,[T])},enter(T){let P=l,D=c,I=h;if(!t.isMounted)if(i)P=v||l,D=g||c,I=b||h;else return;let N=!1;const X=T._enterCb=G=>{N||(N=!0,G?w(I,[T]):w(D,[T]),M.delayedLeave&&M.delayedLeave(),T._enterCb=void 0)};P?(P(T,X),P.length<=1&&X()):X()},leave(T,P){const D=String(r.key);if(T._enterCb&&T._enterCb(!0),t.isUnmounting)return P();w(u,[T]);let I=!1;const N=T._leaveCb=X=>{I||(I=!0,P(),X?w(f,[T]):w(p,[T]),T._leaveCb=void 0,y[D]===r&&delete y[D])};y[D]=r,d?(d(T,N),d.length<=1&&N()):N()},clone(T){return Ec(T,e,t,n)}};return M}function Ac(r){if(lo(r))return r=_r(r),r.children=null,r}function _p(r){return lo(r)?r.children?r.children[0]:void 0:r}function Lc(r,e){r.shapeFlag&6&&r.component?Lc(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function Mp(r,e=!1){let t=[],n=0;for(let i=0;i<r.length;i++){const s=r[i];s.type===yn?(s.patchFlag&128&&n++,t=t.concat(Mp(s.children,e))):(e||s.type!==oi)&&t.push(s)}if(n>1)for(let i=0;i<t.length;i++)t[i].patchFlag=-2;return t}function hE(r){return Ie(r)?{setup:r,name:r.name}:r}const Rc=r=>!!r.type.__asyncLoader,lo=r=>r.type.__isKeepAlive;function db(r,e){Sp(r,"a",e)}function pb(r,e){Sp(r,"da",e)}function Sp(r,e,t=mt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(co(e,n,t),t){let i=t.parent;for(;i&&i.parent;)lo(i.parent.vnode)&&fb(n,e,t,i),i=i.parent}}function fb(r,e,t,n){const i=co(e,r,n,!0);Ap(()=>{ic(n[e],i)},t)}function co(r,e,t=mt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;br(),Mr(t);const o=Yt(e,t,r,a);return Yi(),Hi(),o});return n?i.unshift(s):i.push(s),s}}const On=r=>(e,t=mt)=>(!go||r==="sp")&&co(r,e,t),mb=On("bm"),Tp=On("m"),gb=On("bu"),vb=On("u"),Ep=On("bum"),Ap=On("um"),yb=On("sp"),xb=On("rtg"),bb=On("rtc");function wb(r,e=mt){co("ec",r,e)}let Cc=!0;function _b(r){const e=Cp(r),t=r.proxy,n=r.ctx;Cc=!1,e.beforeCreate&&Lp(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:p,updated:f,activated:m,deactivated:v,beforeDestroy:g,beforeUnmount:b,destroyed:x,unmounted:y,render:w,renderTracked:M,renderTriggered:T,errorCaptured:P,serverPrefetch:D,expose:I,inheritAttrs:N,components:X,directives:G,filters:z}=e;if(c&&Mb(c,n,null,r.appContext.config.unwrapInjectedRef),a)for(const re in a){const se=a[re];Ie(se)&&(n[re]=se.bind(t))}if(i){const re=i.call(t,t);St(re)&&(r.data=yc(re))}if(Cc=!0,s)for(const re in s){const se=s[re],ue=Ie(se)?se.bind(t,t):Ie(se.get)?se.get.bind(t,t):an,fe=!Ie(se)&&Ie(se.set)?se.set.bind(t):an,Q=Qx({get:ue,set:fe});Object.defineProperty(n,re,{enumerable:!0,configurable:!0,get:()=>Q.value,set:A=>Q.value=A})}if(o)for(const re in o)Rp(o[re],n,t,re);if(l){const re=Ie(l)?l.call(t):l;Reflect.ownKeys(re).forEach(se=>{lb(se,re[se])})}h&&Lp(h,r,"c");function le(re,se){Pe(se)?se.forEach(ue=>re(ue.bind(t))):se&&re(se.bind(t))}if(le(mb,u),le(Tp,d),le(gb,p),le(vb,f),le(db,m),le(pb,v),le(wb,P),le(bb,M),le(xb,T),le(Ep,b),le(Ap,y),le(yb,D),Pe(I))if(I.length){const re=r.exposed||(r.exposed={});I.forEach(se=>{Object.defineProperty(re,se,{get:()=>t[se],set:ue=>t[se]=ue})})}else r.exposed||(r.exposed={});w&&r.render===an&&(r.render=w),N!=null&&(r.inheritAttrs=N),X&&(r.components=X),G&&(r.directives=G)}function Mb(r,e,t=an,n=!1){Pe(r)&&(r=Pc(r));for(const i in r){const s=r[i];let a;St(s)?"default"in s?a=Tc(s.from||i,s.default,!0):a=Tc(s.from||i):a=Tc(s),Ot(a)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function Lp(r,e,t){Yt(Pe(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function Rp(r,e,t,n){const i=n.includes(".")?sf(t,n):()=>t[n];if(bt(r)){const s=e[r];Ie(s)&&Wc(i,s)}else if(Ie(r))Wc(i,r.bind(t));else if(St(r))if(Pe(r))r.forEach(s=>Rp(s,e,t,n));else{const s=Ie(r.handler)?r.handler.bind(t):e[r.handler];Ie(s)&&Wc(i,s,r)}}function Cp(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=r.appContext,o=s.get(e);let l;return o?l=o:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>ho(l,c,a,!0)),ho(l,e,a)),s.set(e,l),l}function ho(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&ho(r,s,t,!0),i&&i.forEach(a=>ho(r,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=Sb[a]||t&&t[a];r[a]=o?o(r[a],e[a]):e[a]}return r}const Sb={data:Pp,props:Vi,emits:Vi,methods:Vi,computed:Vi,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Vi,directives:Vi,watch:Eb,provide:Pp,inject:Tb};function Pp(r,e){return e?r?function(){return xt(Ie(r)?r.call(this,this):r,Ie(e)?e.call(this,this):e)}:e:r}function Tb(r,e){return Vi(Pc(r),Pc(e))}function Pc(r){if(Pe(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Tt(r,e){return r?[...new Set([].concat(r,e))]:e}function Vi(r,e){return r?xt(xt(Object.create(null),r),e):e}function Eb(r,e){if(!r)return e;if(!e)return r;const t=xt(Object.create(null),r);for(const n in e)t[n]=Tt(r[n],e[n]);return t}function Ab(r,e,t,n=!1){const i={},s={};Qa(s,po,1),r.propsDefaults=Object.create(null),Ip(r,e,i,s);for(const a in r.propsOptions[0])a in i||(i[a]=void 0);t?r.props=n?i:Xx(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function Lb(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=r,o=ze(i),[l]=r.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const h=r.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];const p=e[d];if(l)if(ke(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const f=vr(d);i[f]=Ic(l,o,f,p,r,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Ip(r,e,i,s)&&(c=!0);let h;for(const u in o)(!e||!ke(e,u)&&((h=yr(u))===u||!ke(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(i[u]=Ic(l,o,u,void 0,r,!0)):delete i[u]);if(s!==o)for(const u in s)(!e||!ke(e,u))&&(delete s[u],c=!0)}c&&Fn(r,"set","$attrs")}function Ip(r,e,t,n){const[i,s]=r.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ja(l))continue;const c=e[l];let h;i&&ke(i,h=vr(l))?!s||!s.includes(h)?t[h]=c:(o||(o={}))[h]=c:Mc(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=ze(t),c=o||Xe;for(let h=0;h<s.length;h++){const u=s[h];t[u]=Ic(i,l,u,c[u],r,!ke(c,u))}}return a}function Ic(r,e,t,n,i,s){const a=r[t];if(a!=null){const o=ke(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&Ie(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(Mr(i),n=c[t]=l.call(null,e),Yi())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===yr(t))&&(n=!0))}return n}function Dp(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,a={},o=[];let l=!1;if(!Ie(r)){const h=u=>{l=!0;const[d,p]=Dp(u,e,!0);xt(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(h),r.extends&&h(r.extends),r.mixins&&r.mixins.forEach(h)}if(!s&&!l)return n.set(r,gr),gr;if(Pe(s))for(let h=0;h<s.length;h++){const u=vr(s[h]);Fp(u)&&(a[u]=Xe)}else if(s)for(const h in s){const u=vr(h);if(Fp(u)){const d=s[h],p=a[u]=Pe(d)||Ie(d)?{type:d}:d;if(p){const f=Up(Boolean,p.type),m=Up(String,p.type);p[0]=f>-1,p[1]=m<0||f<m,(f>-1||ke(p,"default"))&&o.push(u)}}}const c=[a,o];return n.set(r,c),c}function Fp(r){return r[0]!=="$"}function Op(r){const e=r&&r.toString().match(/^\s*function (\w+)/);return e?e[1]:r===null?"null":""}function Np(r,e){return Op(r)===Op(e)}function Up(r,e){return Pe(e)?e.findIndex(t=>Np(t,r)):Ie(e)&&Np(e,r)?0:-1}const kp=r=>r[0]==="_"||r==="$stable",Dc=r=>Pe(r)?r.map(xn):[xn(r)],Rb=(r,e,t)=>{const n=tb((...i)=>Dc(e(...i)),t);return n._c=!1,n},zp=(r,e,t)=>{const n=r._ctx;for(const i in r){if(kp(i))continue;const s=r[i];if(Ie(s))e[i]=Rb(i,s,n);else if(s!=null){const a=Dc(s);e[i]=()=>a}}},Bp=(r,e)=>{const t=Dc(e);r.slots.default=()=>t},Cb=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=ze(e),Qa(e,"_",t)):zp(e,r.slots={})}else r.slots={},e&&Bp(r,e);Qa(r.slots,po,1)},Pb=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,a=Xe;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(xt(i,e),!t&&o===1&&delete i._):(s=!e.$stable,zp(e,i)),a=e}else e&&(Bp(r,e),a={default:1});if(s)for(const o in i)!kp(o)&&!(o in a)&&delete i[o]};function Gi(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(br(),Yt(l,t,8,[r.el,o,r,e]),Hi())}}function Hp(){return{app:null,config:{isNativeTag:lx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ib=0;function Db(r,e){return function(n,i=null){i!=null&&!St(i)&&(i=null);const s=Hp(),a=new Set;let o=!1;const l=s.app={_uid:Ib++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:c1,get config(){return s.config},set config(c){},use(c,...h){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(l,...h)):Ie(c)&&(a.add(c),c(l,...h))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,h){return h?(s.components[c]=h,l):s.components[c]},directive(c,h){return h?(s.directives[c]=h,l):s.directives[c]},mount(c,h,u){if(!o){const d=Xi(n,i);return d.appContext=s,h&&e?e(d,c):r(d,c,u),o=!0,l._container=c,c.__vue_app__=l,zc(d.component)||d.component.proxy}},unmount(){o&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,h){return s.provides[c]=h,l}};return l}}function Fc(r,e,t,n,i=!1){if(Pe(r)){r.forEach((d,p)=>Fc(d,e&&(Pe(e)?e[p]:e),t,n,i));return}if(Rc(n)&&!i)return;const s=n.shapeFlag&4?zc(n.component)||n.component.proxy:n.el,a=i?null:s,{i:o,r:l}=r,c=e&&e.r,h=o.refs===Xe?o.refs={}:o.refs,u=o.setupState;if(c!=null&&c!==l&&(bt(c)?(h[c]=null,ke(u,c)&&(u[c]=null)):Ot(c)&&(c.value=null)),Ie(l))ci(l,o,12,[a,h]);else{const d=bt(l),p=Ot(l);if(d||p){const f=()=>{if(r.f){const m=d?h[l]:l.value;i?Pe(m)&&ic(m,s):Pe(m)?m.includes(s)||m.push(s):d?h[l]=[s]:(l.value=[s],r.k&&(h[r.k]=l.value))}else d?(h[l]=a,ke(u,l)&&(u[l]=a)):Ot(l)&&(l.value=a,r.k&&(h[r.k]=a))};a?(f.id=-1,Nt(f,t)):f()}}}const Nt=ob;function Fb(r){return Ob(r)}function Ob(r,e){const t=yx();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:p=an,cloneNode:f,insertStaticContent:m}=r,v=(_,S,F,B=null,U=null,Z=null,ee=!1,ae=null,ie=!!S.dynamicChildren)=>{if(_===S)return;_&&!qi(_,S)&&(B=ce(_),R(_,U,Z,!0),_=null),S.patchFlag===-2&&(ie=!1,S.dynamicChildren=null);const{type:te,ref:ge,shapeFlag:me}=S;switch(te){case Oc:g(_,S,F,B);break;case oi:b(_,S,F,B);break;case Nc:_==null&&x(S,F,B,ee);break;case yn:G(_,S,F,B,U,Z,ee,ae,ie);break;default:me&1?M(_,S,F,B,U,Z,ee,ae,ie):me&6?z(_,S,F,B,U,Z,ee,ae,ie):(me&64||me&128)&&te.process(_,S,F,B,U,Z,ee,ae,ie,E)}ge!=null&&U&&Fc(ge,_&&_.ref,Z,S||_,!S)},g=(_,S,F,B)=>{if(_==null)n(S.el=o(S.children),F,B);else{const U=S.el=_.el;S.children!==_.children&&c(U,S.children)}},b=(_,S,F,B)=>{_==null?n(S.el=l(S.children||""),F,B):S.el=_.el},x=(_,S,F,B)=>{[_.el,_.anchor]=m(_.children,S,F,B)},y=({el:_,anchor:S},F,B)=>{let U;for(;_&&_!==S;)U=d(_),n(_,F,B),_=U;n(S,F,B)},w=({el:_,anchor:S})=>{let F;for(;_&&_!==S;)F=d(_),i(_),_=F;i(S)},M=(_,S,F,B,U,Z,ee,ae,ie)=>{ee=ee||S.type==="svg",_==null?T(S,F,B,U,Z,ee,ae,ie):I(_,S,U,Z,ee,ae,ie)},T=(_,S,F,B,U,Z,ee,ae)=>{let ie,te;const{type:ge,props:me,shapeFlag:xe,transition:we,patchFlag:Se,dirs:Ae}=_;if(_.el&&f!==void 0&&Se===-1)ie=_.el=f(_.el);else{if(ie=_.el=a(_.type,Z,me&&me.is,me),xe&8?h(ie,_.children):xe&16&&D(_.children,ie,null,B,U,Z&&ge!=="foreignObject",ee,ae),Ae&&Gi(_,null,B,"created"),me){for(const He in me)He!=="value"&&!Ja(He)&&s(ie,He,null,me[He],Z,_.children,B,U,oe);"value"in me&&s(ie,"value",null,me.value),(te=me.onVnodeBeforeMount)&&bn(te,B,_)}P(ie,_,_.scopeId,ee,B)}Ae&&Gi(_,null,B,"beforeMount");const K=(!U||U&&!U.pendingBranch)&&we&&!we.persisted;K&&we.beforeEnter(ie),n(ie,S,F),((te=me&&me.onVnodeMounted)||K||Ae)&&Nt(()=>{te&&bn(te,B,_),K&&we.enter(ie),Ae&&Gi(_,null,B,"mounted")},U)},P=(_,S,F,B,U)=>{if(F&&p(_,F),B)for(let Z=0;Z<B.length;Z++)p(_,B[Z]);if(U){let Z=U.subTree;if(S===Z){const ee=U.vnode;P(_,ee,ee.scopeId,ee.slotScopeIds,U.parent)}}},D=(_,S,F,B,U,Z,ee,ae,ie=0)=>{for(let te=ie;te<_.length;te++){const ge=_[te]=ae?li(_[te]):xn(_[te]);v(null,ge,S,F,B,U,Z,ee,ae)}},I=(_,S,F,B,U,Z,ee)=>{const ae=S.el=_.el;let{patchFlag:ie,dynamicChildren:te,dirs:ge}=S;ie|=_.patchFlag&16;const me=_.props||Xe,xe=S.props||Xe;let we;F&&Wi(F,!1),(we=xe.onVnodeBeforeUpdate)&&bn(we,F,S,_),ge&&Gi(S,_,F,"beforeUpdate"),F&&Wi(F,!0);const Se=U&&S.type!=="foreignObject";if(te?N(_.dynamicChildren,te,ae,F,B,Se,Z):ee||ue(_,S,ae,null,F,B,Se,Z,!1),ie>0){if(ie&16)X(ae,S,me,xe,F,B,U);else if(ie&2&&me.class!==xe.class&&s(ae,"class",null,xe.class,U),ie&4&&s(ae,"style",me.style,xe.style,U),ie&8){const Ae=S.dynamicProps;for(let K=0;K<Ae.length;K++){const He=Ae[K],Ft=me[He],rt=xe[He];(rt!==Ft||He==="value")&&s(ae,He,Ft,rt,U,_.children,F,B,oe)}}ie&1&&_.children!==S.children&&h(ae,S.children)}else!ee&&te==null&&X(ae,S,me,xe,F,B,U);((we=xe.onVnodeUpdated)||ge)&&Nt(()=>{we&&bn(we,F,S,_),ge&&Gi(S,_,F,"updated")},B)},N=(_,S,F,B,U,Z,ee)=>{for(let ae=0;ae<S.length;ae++){const ie=_[ae],te=S[ae],ge=ie.el&&(ie.type===yn||!qi(ie,te)||ie.shapeFlag&(6|64))?u(ie.el):F;v(ie,te,ge,null,B,U,Z,ee,!0)}},X=(_,S,F,B,U,Z,ee)=>{if(F!==B){for(const ae in B){if(Ja(ae))continue;const ie=B[ae],te=F[ae];ie!==te&&ae!=="value"&&s(_,ae,te,ie,ee,S.children,U,Z,oe)}if(F!==Xe)for(const ae in F)!Ja(ae)&&!(ae in B)&&s(_,ae,F[ae],null,ee,S.children,U,Z,oe);"value"in B&&s(_,"value",F.value,B.value)}},G=(_,S,F,B,U,Z,ee,ae,ie)=>{const te=S.el=_?_.el:o(""),ge=S.anchor=_?_.anchor:o("");let{patchFlag:me,dynamicChildren:xe,slotScopeIds:we}=S;we&&(ae=ae?ae.concat(we):we),_==null?(n(te,F,B),n(ge,F,B),D(S.children,F,ge,U,Z,ee,ae,ie)):me>0&&me&64&&xe&&_.dynamicChildren?(N(_.dynamicChildren,xe,F,U,Z,ee,ae),(S.key!=null||U&&S===U.subTree)&&Vp(_,S,!0)):ue(_,S,F,ge,U,Z,ee,ae,ie)},z=(_,S,F,B,U,Z,ee,ae,ie)=>{S.slotScopeIds=ae,_==null?S.shapeFlag&512?U.ctx.activate(S,F,B,ee,ie):$(S,F,B,U,Z,ee,ie):le(_,S,ie)},$=(_,S,F,B,U,Z,ee)=>{const ae=_.component=$b(_,B,U);if(lo(_)&&(ae.ctx.renderer=E),Zb(ae),ae.asyncDep){if(U&&U.registerDep(ae,re),!_.el){const ie=ae.subTree=Xi(oi);b(null,ie,S,F)}return}re(ae,_,S,F,U,Z,ee)},le=(_,S,F)=>{const B=S.component=_.component;if(rb(_,S,F))if(B.asyncDep&&!B.asyncResolved){se(B,S,F);return}else B.next=S,s1(B.update),B.update();else S.component=_.component,S.el=_.el,B.vnode=S},re=(_,S,F,B,U,Z,ee)=>{const ae=()=>{if(_.isMounted){let{next:ge,bu:me,u:xe,parent:we,vnode:Se}=_,Ae=ge,K;Wi(_,!1),ge?(ge.el=Se.el,se(_,ge,ee)):ge=Se,me&&oc(me),(K=ge.props&&ge.props.onVnodeBeforeUpdate)&&bn(K,we,ge,Se),Wi(_,!0);const He=Sc(_),Ft=_.subTree;_.subTree=He,v(Ft,He,u(Ft.el),ce(Ft),_,U,Z),ge.el=He.el,Ae===null&&sb(_,He.el),xe&&Nt(xe,U),(K=ge.props&&ge.props.onVnodeUpdated)&&Nt(()=>bn(K,we,ge,Se),U)}else{let ge;const{el:me,props:xe}=S,{bm:we,m:Se,parent:Ae}=_,K=Rc(S);if(Wi(_,!1),we&&oc(we),!K&&(ge=xe&&xe.onVnodeBeforeMount)&&bn(ge,Ae,S),Wi(_,!0),me&&J){const He=()=>{_.subTree=Sc(_),J(me,_.subTree,_,U,null)};K?S.type.__asyncLoader().then(()=>!_.isUnmounted&&He()):He()}else{const He=_.subTree=Sc(_);v(null,He,F,B,_,U,Z),S.el=He.el}if(Se&&Nt(Se,U),!K&&(ge=xe&&xe.onVnodeMounted)){const He=S;Nt(()=>bn(ge,Ae,He),U)}S.shapeFlag&256&&_.a&&Nt(_.a,U),_.isMounted=!0,S=F=B=null}},ie=_.effect=new dc(ae,()=>Zp(_.update),_.scope),te=_.update=ie.run.bind(ie);te.id=_.uid,Wi(_,!0),te()},se=(_,S,F)=>{S.component=_;const B=_.vnode.props;_.vnode=S,_.next=null,Lb(_,S.props,B,F),Pb(_,S.children,F),br(),Gc(void 0,_.update),Hi()},ue=(_,S,F,B,U,Z,ee,ae,ie=!1)=>{const te=_&&_.children,ge=_?_.shapeFlag:0,me=S.children,{patchFlag:xe,shapeFlag:we}=S;if(xe>0){if(xe&128){Q(te,me,F,B,U,Z,ee,ae,ie);return}else if(xe&256){fe(te,me,F,B,U,Z,ee,ae,ie);return}}we&8?(ge&16&&oe(te,U,Z),me!==te&&h(F,me)):ge&16?we&16?Q(te,me,F,B,U,Z,ee,ae,ie):oe(te,U,Z,!0):(ge&8&&h(F,""),we&16&&D(me,F,B,U,Z,ee,ae,ie))},fe=(_,S,F,B,U,Z,ee,ae,ie)=>{_=_||gr,S=S||gr;const te=_.length,ge=S.length,me=Math.min(te,ge);let xe;for(xe=0;xe<me;xe++){const we=S[xe]=ie?li(S[xe]):xn(S[xe]);v(_[xe],we,F,null,U,Z,ee,ae,ie)}te>ge?oe(_,U,Z,!0,!1,me):D(S,F,B,U,Z,ee,ae,ie,me)},Q=(_,S,F,B,U,Z,ee,ae,ie)=>{let te=0;const ge=S.length;let me=_.length-1,xe=ge-1;for(;te<=me&&te<=xe;){const we=_[te],Se=S[te]=ie?li(S[te]):xn(S[te]);if(qi(we,Se))v(we,Se,F,null,U,Z,ee,ae,ie);else break;te++}for(;te<=me&&te<=xe;){const we=_[me],Se=S[xe]=ie?li(S[xe]):xn(S[xe]);if(qi(we,Se))v(we,Se,F,null,U,Z,ee,ae,ie);else break;me--,xe--}if(te>me){if(te<=xe){const we=xe+1,Se=we<ge?S[we].el:B;for(;te<=xe;)v(null,S[te]=ie?li(S[te]):xn(S[te]),F,Se,U,Z,ee,ae,ie),te++}}else if(te>xe)for(;te<=me;)R(_[te],U,Z,!0),te++;else{const we=te,Se=te,Ae=new Map;for(te=Se;te<=xe;te++){const ft=S[te]=ie?li(S[te]):xn(S[te]);ft.key!=null&&Ae.set(ft.key,te)}let K,He=0;const Ft=xe-Se+1;let rt=!1,Ms=0;const ii=new Array(Ft);for(te=0;te<Ft;te++)ii[te]=0;for(te=we;te<=me;te++){const ft=_[te];if(He>=Ft){R(ft,U,Z,!0);continue}let zt;if(ft.key!=null)zt=Ae.get(ft.key);else for(K=Se;K<=xe;K++)if(ii[K-Se]===0&&qi(ft,S[K])){zt=K;break}zt===void 0?R(ft,U,Z,!0):(ii[zt-Se]=te+1,zt>=Ms?Ms=zt:rt=!0,v(ft,S[zt],F,null,U,Z,ee,ae,ie),He++)}const Ss=rt?Nb(ii):gr;for(K=Ss.length-1,te=Ft-1;te>=0;te--){const ft=Se+te,zt=S[ft],Ts=ft+1<ge?S[ft+1].el:B;ii[te]===0?v(null,zt,F,Ts,U,Z,ee,ae,ie):rt&&(K<0||te!==Ss[K]?A(zt,F,Ts,2):K--)}}},A=(_,S,F,B,U=null)=>{const{el:Z,type:ee,transition:ae,children:ie,shapeFlag:te}=_;if(te&6){A(_.component.subTree,S,F,B);return}if(te&128){_.suspense.move(S,F,B);return}if(te&64){ee.move(_,S,F,E);return}if(ee===yn){n(Z,S,F);for(let me=0;me<ie.length;me++)A(ie[me],S,F,B);n(_.anchor,S,F);return}if(ee===Nc){y(_,S,F);return}if(B!==2&&te&1&&ae)if(B===0)ae.beforeEnter(Z),n(Z,S,F),Nt(()=>ae.enter(Z),U);else{const{leave:me,delayLeave:xe,afterLeave:we}=ae,Se=()=>n(Z,S,F),Ae=()=>{me(Z,()=>{Se(),we&&we()})};xe?xe(Z,Se,Ae):Ae()}else n(Z,S,F)},R=(_,S,F,B=!1,U=!1)=>{const{type:Z,props:ee,ref:ae,children:ie,dynamicChildren:te,shapeFlag:ge,patchFlag:me,dirs:xe}=_;if(ae!=null&&Fc(ae,null,F,_,!0),ge&256){S.ctx.deactivate(_);return}const we=ge&1&&xe,Se=!Rc(_);let Ae;if(Se&&(Ae=ee&&ee.onVnodeBeforeUnmount)&&bn(Ae,S,_),ge&6)O(_.component,F,B);else{if(ge&128){_.suspense.unmount(F,B);return}we&&Gi(_,null,S,"beforeUnmount"),ge&64?_.type.remove(_,S,F,U,E,B):te&&(Z!==yn||me>0&&me&64)?oe(te,S,F,!1,!0):(Z===yn&&me&(128|256)||!U&&ge&16)&&oe(ie,S,F),B&&V(_)}(Se&&(Ae=ee&&ee.onVnodeUnmounted)||we)&&Nt(()=>{Ae&&bn(Ae,S,_),we&&Gi(_,null,S,"unmounted")},F)},V=_=>{const{type:S,el:F,anchor:B,transition:U}=_;if(S===yn){W(F,B);return}if(S===Nc){w(_);return}const Z=()=>{i(F),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(_.shapeFlag&1&&U&&!U.persisted){const{leave:ee,delayLeave:ae}=U,ie=()=>ee(F,Z);ae?ae(_.el,Z,ie):ie()}else Z()},W=(_,S)=>{let F;for(;_!==S;)F=d(_),i(_),_=F;i(S)},O=(_,S,F)=>{const{bum:B,scope:U,update:Z,subTree:ee,um:ae}=_;B&&oc(B),U.stop(),Z&&(Z.active=!1,R(ee,_,S,F)),ae&&Nt(ae,S),Nt(()=>{_.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},oe=(_,S,F,B=!1,U=!1,Z=0)=>{for(let ee=Z;ee<_.length;ee++)R(_[ee],S,F,B,U)},ce=_=>_.shapeFlag&6?ce(_.component.subTree):_.shapeFlag&128?_.suspense.next():d(_.anchor||_.el),H=(_,S,F)=>{_==null?S._vnode&&R(S._vnode,null,null,!0):v(S._vnode||null,_,S,null,null,null,F),ef(),S._vnode=_},E={p:v,um:R,m:A,r:V,mt:$,mc:D,pc:ue,pbc:N,n:ce,o:r};let k,J;return e&&([k,J]=e(E)),{render:H,hydrate:k,createApp:Db(H,k)}}function Wi({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function Vp(r,e,t=!1){const n=r.children,i=e.children;if(Pe(n)&&Pe(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=li(i[s]),o.el=a.el),t||Vp(a,o))}}function Nb(r){const e=r.slice(),t=[0];let n,i,s,a,o;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,r[t[o]]<c?s=o+1:a=o;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Ub=r=>r.__isTeleport,kb=Symbol(),yn=Symbol(void 0),Oc=Symbol(void 0),oi=Symbol(void 0),Nc=Symbol(void 0),Ps=[];let ji=null;function uE(r=!1){Ps.push(ji=r?null:[])}function zb(){Ps.pop(),ji=Ps[Ps.length-1]||null}let uo=1;function Gp(r){uo+=r}function Bb(r){return r.dynamicChildren=uo>0?ji||gr:null,zb(),uo>0&&ji&&ji.push(r),r}function dE(r,e,t,n,i,s){return Bb(jp(r,e,t,n,i,s,!0))}function Hb(r){return r?r.__v_isVNode===!0:!1}function qi(r,e){return r.type===e.type&&r.key===e.key}const po="__vInternal",Wp=({key:r})=>r!=null?r:null,fo=({ref:r,ref_key:e,ref_for:t})=>r!=null?bt(r)||Ot(r)||Ie(r)?{i:vn,r,k:e,f:!!t}:r:null;function jp(r,e=null,t=null,n=0,i=null,s=r===yn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Wp(e),ref:e&&fo(e),scopeId:xp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null};return o?(Uc(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=bt(t)?8:16),uo>0&&!a&&ji&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ji.push(l),l}const Xi=Vb;function Vb(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===kb)&&(r=oi),Hb(r)){const o=_r(r,e,!0);return t&&Uc(o,t),o}if(t1(r)&&(r=r.__vccOpts),e){e=Gb(e);let{class:o,style:l}=e;o&&!bt(o)&&(e.class=tc(o)),St(l)&&(mp(l)&&!Pe(l)&&(l=xt({},l)),e.style=ec(l))}const a=bt(r)?1:ab(r)?128:Ub(r)?64:St(r)?4:Ie(r)?2:0;return jp(r,e,t,n,i,a,s,!0)}function Gb(r){return r?mp(r)||po in r?xt({},r):r:null}function _r(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:a}=r,o=e?jb(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:o,key:o&&Wp(o),ref:e&&e.ref?t&&i?Pe(i)?i.concat(fo(e)):[i,fo(e)]:fo(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:a,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==yn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&_r(r.ssContent),ssFallback:r.ssFallback&&_r(r.ssFallback),el:r.el,anchor:r.anchor}}function Wb(r=" ",e=0){return Xi(Oc,null,r,e)}function xn(r){return r==null||typeof r=="boolean"?Xi(oi):Pe(r)?Xi(yn,null,r.slice()):typeof r=="object"?li(r):Xi(Oc,null,String(r))}function li(r){return r.el===null||r.memo?r:_r(r)}function Uc(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(n&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),Uc(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(po in e)?e._ctx=vn:i===3&&vn&&(vn.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:vn},t=32):(e=String(e),n&64?(t=16,e=[Wb(e)]):t=8);r.children=e,r.shapeFlag|=t}function jb(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=tc([e.class,n.class]));else if(i==="style")e.style=ec([e.style,n.style]);else if(Ya(i)){const s=e[i],a=n[i];s!==a&&!(Pe(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=n[i])}return e}function bn(r,e,t,n=null){Yt(r,e,7,[t,n])}const kc=r=>r?qp(r)?zc(r)||r.proxy:kc(r.parent):null,mo=xt(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>kc(r.parent),$root:r=>kc(r.root),$emit:r=>r.emit,$options:r=>Cp(r),$forceUpdate:r=>()=>Zp(r.update),$nextTick:r=>i1.bind(r.proxy),$watch:r=>l1.bind(r)}),qb={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=r;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(n!==Xe&&ke(n,e))return a[e]=1,n[e];if(i!==Xe&&ke(i,e))return a[e]=2,i[e];if((c=r.propsOptions[0])&&ke(c,e))return a[e]=3,s[e];if(t!==Xe&&ke(t,e))return a[e]=4,t[e];Cc&&(a[e]=0)}}const h=mo[e];let u,d;if(h)return e==="$attrs"&&Bt(r,"get",e),h(r);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Xe&&ke(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ke(d,e))return d[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;if(i!==Xe&&ke(i,e))i[e]=t;else if(n!==Xe&&ke(n,e))n[e]=t;else if(ke(r.props,e))return!1;return e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},a){let o;return!!t[a]||r!==Xe&&ke(r,a)||e!==Xe&&ke(e,a)||(o=s[0])&&ke(o,a)||ke(n,a)||ke(mo,a)||ke(i.config.globalProperties,a)}},Xb=Hp();let Yb=0;function $b(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||Xb,s={uid:Yb++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new xx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dp(n,i),emitsOptions:yp(n,i),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:n.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=eb.bind(null,s),r.ce&&r.ce(s),s}let mt=null;const Jb=()=>mt||vn,Mr=r=>{mt=r,r.scope.on()},Yi=()=>{mt&&mt.scope.off(),mt=null};function qp(r){return r.vnode.shapeFlag&4}let go=!1;function Zb(r,e=!1){go=e;const{props:t,children:n}=r.vnode,i=qp(r);Ab(r,t,i,e),Cb(r,n);const s=i?Kb(r,e):void 0;return go=!1,s}function Kb(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=gp(new Proxy(r.ctx,qb));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?e1(r):null;Mr(r),br();const s=ci(n,r,0,[r.props,i]);if(Hi(),Yi(),$d(s)){if(s.then(Yi,Yi),e)return s.then(a=>{Xp(r,a,e)}).catch(a=>{vo(a,r,0)});r.asyncDep=s}else Xp(r,s,e)}else $p(r,e)}function Xp(r,e,t){Ie(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:St(e)&&(r.setupState=vp(e)),$p(r,t)}let Yp;function $p(r,e,t){const n=r.type;if(!r.render){if(!e&&Yp&&!n.render){const i=n.template;if(i){const{isCustomElement:s,compilerOptions:a}=r.appContext.config,{delimiters:o,compilerOptions:l}=n,c=xt(xt({isCustomElement:s,delimiters:o},a),l);n.render=Yp(i,c)}}r.render=n.render||an}Mr(r),br(),_b(r),Hi(),Yi()}function Qb(r){return new Proxy(r.attrs,{get(e,t){return Bt(r,"get","$attrs"),e[t]}})}function e1(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=Qb(r))},slots:r.slots,emit:r.emit,expose:e}}function zc(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(vp(gp(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in mo)return mo[t](r)}}))}function t1(r){return Ie(r)&&"__vccOpts"in r}function ci(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){vo(s,e,t)}return i}function Yt(r,e,t,n){if(Ie(r)){const s=ci(r,e,t,n);return s&&$d(s)&&s.catch(a=>{vo(a,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(Yt(r[s],e,t,n));return i}function vo(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](r,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ci(l,null,10,[r,a,o]);return}}n1(r,t,i,n)}function n1(r,e,t,n=!0){console.error(r)}let yo=!1,Bc=!1;const Ht=[];let Nn=0;const Is=[];let Ds=null,Sr=0;const Fs=[];let hi=null,Tr=0;const Jp=Promise.resolve();let Hc=null,Vc=null;function i1(r){const e=Hc||Jp;return r?e.then(this?r.bind(this):r):e}function r1(r){let e=Nn+1,t=Ht.length;for(;e<t;){const n=e+t>>>1;Os(Ht[n])<r?e=n+1:t=n}return e}function Zp(r){(!Ht.length||!Ht.includes(r,yo&&r.allowRecurse?Nn+1:Nn))&&r!==Vc&&(r.id==null?Ht.push(r):Ht.splice(r1(r.id),0,r),Kp())}function Kp(){!yo&&!Bc&&(Bc=!0,Hc=Jp.then(tf))}function s1(r){const e=Ht.indexOf(r);e>Nn&&Ht.splice(e,1)}function Qp(r,e,t,n){Pe(r)?t.push(...r):(!e||!e.includes(r,r.allowRecurse?n+1:n))&&t.push(r),Kp()}function a1(r){Qp(r,Ds,Is,Sr)}function o1(r){Qp(r,hi,Fs,Tr)}function Gc(r,e=null){if(Is.length){for(Vc=e,Ds=[...new Set(Is)],Is.length=0,Sr=0;Sr<Ds.length;Sr++)Ds[Sr]();Ds=null,Sr=0,Vc=null,Gc(r,e)}}function ef(r){if(Fs.length){const e=[...new Set(Fs)];if(Fs.length=0,hi){hi.push(...e);return}for(hi=e,hi.sort((t,n)=>Os(t)-Os(n)),Tr=0;Tr<hi.length;Tr++)hi[Tr]();hi=null,Tr=0}}const Os=r=>r.id==null?1/0:r.id;function tf(r){Bc=!1,yo=!0,Gc(r),Ht.sort((t,n)=>Os(t)-Os(n));const e=an;try{for(Nn=0;Nn<Ht.length;Nn++){const t=Ht[Nn];t&&t.active!==!1&&ci(t,null,14)}}finally{Nn=0,Ht.length=0,ef(),yo=!1,Hc=null,(Ht.length||Is.length||Fs.length)&&tf(r)}}const nf={};function Wc(r,e,t){return rf(r,e,t)}function rf(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:a}=Xe){const o=mt;let l,c=!1,h=!1;if(Ot(r)?(l=()=>r.value,c=!!r._shallow):wr(r)?(l=()=>r,n=!0):Pe(r)?(h=!0,c=r.some(wr),l=()=>r.map(g=>{if(Ot(g))return g.value;if(wr(g))return Er(g);if(Ie(g))return ci(g,o,2)})):Ie(r)?e?l=()=>ci(r,o,2):l=()=>{if(!(o&&o.isUnmounted))return u&&u(),Yt(r,o,3,[d])}:l=an,e&&n){const g=l;l=()=>Er(g())}let u,d=g=>{u=v.onStop=()=>{ci(g,o,4)}};if(go)return d=an,e?t&&Yt(e,o,3,[l(),h?[]:void 0,d]):l(),an;let p=h?[]:nf;const f=()=>{if(!!v.active)if(e){const g=v.run();(n||c||(h?g.some((b,x)=>Ka(b,p[x])):Ka(g,p)))&&(u&&u(),Yt(e,o,3,[g,p===nf?void 0:p,d]),p=g)}else v.run()};f.allowRecurse=!!e;let m;i==="sync"?m=f:i==="post"?m=()=>Nt(f,o&&o.suspense):m=()=>{!o||o.isMounted?a1(f):f()};const v=new dc(l,m);return e?t?f():p=v.run():i==="post"?Nt(v.run.bind(v),o&&o.suspense):v.run(),()=>{v.stop(),o&&o.scope&&ic(o.scope.effects,v)}}function l1(r,e,t){const n=this.proxy,i=bt(r)?r.includes(".")?sf(n,r):()=>n[r]:r.bind(n,n);let s;Ie(e)?s=e:(s=e.handler,t=e);const a=mt;Mr(this);const o=rf(i,s.bind(n),t);return a?Mr(a):Yi(),o}function sf(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Er(r,e){if(!St(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),Ot(r))Er(r.value,e);else if(Pe(r))for(let t=0;t<r.length;t++)Er(r[t],e);else if(ux(r)||Ls(r))r.forEach(t=>{Er(t,e)});else if(fx(r))for(const t in r)Er(r[t],e);return r}const c1="3.2.26",h1="http://www.w3.org/2000/svg",Ar=typeof document!="undefined"?document:null,af=new Map,u1={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?Ar.createElementNS(h1,r):Ar.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>Ar.createTextNode(r),createComment:r=>Ar.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Ar.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},cloneNode(r){const e=r.cloneNode(!0);return"_value"in r&&(e._value=r._value),e},insertStaticContent(r,e,t,n){const i=t?t.previousSibling:e.lastChild;let s=af.get(r);if(!s){const a=Ar.createElement("template");if(a.innerHTML=n?`<svg>${r}</svg>`:r,s=a.content,n){const o=s.firstChild;for(;o.firstChild;)s.appendChild(o.firstChild);s.removeChild(o)}af.set(r,s)}return e.insertBefore(s.cloneNode(!0),t),[i?i.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function d1(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function p1(r,e,t){const n=r.style,i=bt(t);if(t&&!i){for(const s in t)jc(n,s,t[s]);if(e&&!bt(e))for(const s in e)t[s]==null&&jc(n,s,"")}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const of=/\s*!important$/;function jc(r,e,t){if(Pe(t))t.forEach(n=>jc(r,e,n));else if(e.startsWith("--"))r.setProperty(e,t);else{const n=f1(r,e);of.test(t)?r.setProperty(yr(n),t.replace(of,""),"important"):r[n]=t}}const lf=["Webkit","Moz","ms"],qc={};function f1(r,e){const t=qc[e];if(t)return t;let n=vr(e);if(n!=="filter"&&n in r)return qc[e]=n;n=Jd(n);for(let i=0;i<lf.length;i++){const s=lf[i]+n;if(s in r)return qc[e]=s}return e}const cf="http://www.w3.org/1999/xlink";function m1(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(cf,e.slice(6,e.length)):r.setAttributeNS(cf,e,t);else{const s=rx(e);t==null||s&&!Yd(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function g1(r,e,t,n,i,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,i,s),r[e]=t==null?"":t;return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const o=t==null?"":t;(r.value!==o||r.tagName==="OPTION")&&(r.value=o),t==null&&r.removeAttribute(e);return}if(t===""||t==null){const o=typeof r[e];if(o==="boolean"){r[e]=Yd(t);return}else if(t==null&&o==="string"){r[e]="",r.removeAttribute(e);return}else if(o==="number"){try{r[e]=0}catch{}r.removeAttribute(e);return}}try{r[e]=t}catch{}}let xo=Date.now,hf=!1;if(typeof window!="undefined"){xo()>document.createEvent("Event").timeStamp&&(xo=()=>performance.now());const r=navigator.userAgent.match(/firefox\/(\d+)/i);hf=!!(r&&Number(r[1])<=53)}let Xc=0;const v1=Promise.resolve(),y1=()=>{Xc=0},x1=()=>Xc||(v1.then(y1),Xc=xo());function b1(r,e,t,n){r.addEventListener(e,t,n)}function w1(r,e,t,n){r.removeEventListener(e,t,n)}function _1(r,e,t,n,i=null){const s=r._vei||(r._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=M1(e);if(n){const c=s[e]=S1(n,i);b1(r,o,c,l)}else a&&(w1(r,o,a,l),s[e]=void 0)}}const uf=/(?:Once|Passive|Capture)$/;function M1(r){let e;if(uf.test(r)){e={};let t;for(;t=r.match(uf);)r=r.slice(0,r.length-t[0].length),e[t[0].toLowerCase()]=!0}return[yr(r.slice(2)),e]}function S1(r,e){const t=n=>{const i=n.timeStamp||xo();(hf||i>=t.attached-1)&&Yt(T1(n,t.value),e,5,[n])};return t.value=r,t.attached=x1(),t}function T1(r,e){if(Pe(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n(i))}else return e}const df=/^on[a-z]/,E1=(r,e,t,n,i=!1,s,a,o,l)=>{e==="class"?d1(r,n,i):e==="style"?p1(r,t,n):Ya(e)?nc(e)||_1(r,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A1(r,e,n,i))?g1(r,e,n,s,a,o,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),m1(r,e,n,i))};function A1(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&df.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||df.test(e)&&bt(t)?!1:e in r}const L1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ub.props;const R1=xt({patchProp:E1},u1);let pf;function C1(){return pf||(pf=Fb(R1))}const pE=(...r)=>{const e=C1().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=P1(n);if(!i)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function P1(r){return bt(r)?document.querySelector(r):r}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ff=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Yc=(r,e,t=null)=>{for(;e!==t;){const n=e.nextSibling;r.removeChild(e),e=n}},Un=`{{lit-${String(Math.random()).slice(2)}}}`,mf=`<!--${Un}-->`,gf=new RegExp(`${Un}|${mf}`);class vf{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let a=0,o=-1,l=0;const{strings:c,values:{length:h}}=e;for(;l<h;){const u=s.nextNode();if(u!==null){if(o++,u.nodeType===1){if(u.hasAttributes()){const d=u.attributes,{length:p}=d;let f=0;for(let m=0;m<p;m++)yf(d[m].name,"$lit$")&&f++;for(;f-- >0;){const m=c[l],v=$c.exec(m)[2],g=v.toLowerCase()+"$lit$",b=u.getAttribute(g);u.removeAttribute(g);const x=b.split(gf);this.parts.push({type:"attribute",index:o,name:v,strings:x}),l+=x.length-1}}u.tagName==="TEMPLATE"&&(i.push(u),s.currentNode=u.content)}else if(u.nodeType===3){const d=u.data;if(d.indexOf(Un)>=0){const p=u.parentNode,f=d.split(gf),m=f.length-1;for(let v=0;v<m;v++){let g,b=f[v];if(b==="")g=ui();else{const x=$c.exec(b);x!==null&&yf(x[2],"$lit$")&&(b=b.slice(0,x.index)+x[1]+x[2].slice(0,-"$lit$".length)+x[3]),g=document.createTextNode(b)}p.insertBefore(g,u),this.parts.push({type:"node",index:++o})}f[m]===""?(p.insertBefore(ui(),u),n.push(u)):u.data=f[m],l+=m}}else if(u.nodeType===8)if(u.data===Un){const d=u.parentNode;u.previousSibling!==null&&o!==a||(o++,d.insertBefore(ui(),u)),a=o,this.parts.push({type:"node",index:o}),u.nextSibling===null?u.data="":(n.push(u),o--),l++}else{let d=-1;for(;(d=u.data.indexOf(Un,d+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}else s.currentNode=i.pop()}for(const u of n)u.parentNode.removeChild(u)}}const yf=(r,e)=>{const t=r.length-e.length;return t>=0&&r.slice(t)===e},xf=r=>r.index!==-1,ui=()=>document.createComment(""),$c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function bf(r,e){const{element:{content:t},parts:n}=r,i=document.createTreeWalker(t,133,null,!1);let s=Ns(n),a=n[s],o=-1,l=0;const c=[];let h=null;for(;i.nextNode();){o++;const u=i.currentNode;for(u.previousSibling===h&&(h=null),e.has(u)&&(c.push(u),h===null&&(h=u)),h!==null&&l++;a!==void 0&&a.index===o;)a.index=h!==null?-1:a.index-l,s=Ns(n,s),a=n[s]}c.forEach(u=>u.parentNode.removeChild(u))}const I1=r=>{let e=r.nodeType===11?0:1;const t=document.createTreeWalker(r,133,null,!1);for(;t.nextNode();)e++;return e},Ns=(r,e=-1)=>{for(let t=e+1;t<r.length;t++){const n=r[t];if(xf(n))return t}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D1=new WeakMap,Us=r=>typeof r=="function"&&D1.has(r),on={},wf={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Jc{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)n!==void 0&&n.setValue(e[t]),t++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const e=ff?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s,a=0,o=0,l=i.nextNode();for(;a<n.length;)if(s=n[a],xf(s)){for(;o<s.index;)o++,l.nodeName==="TEMPLATE"&&(t.push(l),i.currentNode=l.content),(l=i.nextNode())===null&&(i.currentNode=t.pop(),l=i.nextNode());if(s.type==="node"){const c=this.processor.handleTextExpression(this.options);c.insertAfterNode(l.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return ff&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _f=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:r=>r}),F1=` ${Un} `;class Mf{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const s=this.strings[i],a=s.lastIndexOf("<!--");n=(a>-1||n)&&s.indexOf("-->",a+1)===-1;const o=$c.exec(s);t+=o===null?s+(n?F1:mf):s.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+Un}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return _f!==void 0&&(t=_f.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Zc=r=>r===null||!(typeof r=="object"||typeof r=="function"),Kc=r=>Array.isArray(r)||!(!r||!r[Symbol.iterator]);class Sf{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new Tf(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(t===1&&e[0]===""&&e[1]===""){const s=n[0].value;if(typeof s=="symbol")return String(s);if(typeof s=="string"||!Kc(s))return s}let i="";for(let s=0;s<t;s++){i+=e[s];const a=n[s];if(a!==void 0){const o=a.value;if(Zc(o)||!Kc(o))i+=typeof o=="string"?o:String(o);else for(const l of o)i+=typeof l=="string"?l:String(l)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Tf{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===on||Zc(e)&&e===this.value||(this.value=e,Us(e)||(this.committer.dirty=!0))}commit(){for(;Us(this.value);){const e=this.value;this.value=on,e(this)}this.value!==on&&this.committer.commit()}}class bo{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ui()),this.endNode=e.appendChild(ui())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ui()),e.__insert(this.endNode=ui())}insertAfterPart(e){e.__insert(this.startNode=ui()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;Us(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=on,t(this)}const e=this.__pendingValue;e!==on&&(Zc(e)?e!==this.value&&this.__commitText(e):e instanceof Mf?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Kc(e)?this.__commitIterable(e):e===wf?(this.value=wf,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n=typeof(e=e==null?"":e)=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Jc&&this.value.template===t)this.value.update(e.values);else{const n=new Jc(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const s of e)n=t[i],n===void 0&&(n=new bo(this.options),t.push(n),i===0?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(s),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Yc(this.startNode.parentNode,e.nextSibling,this.endNode)}}class O1{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Us(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=on,t(this)}if(this.__pendingValue===on)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=on}}class N1 extends Sf{constructor(e,t,n){super(e,t,n),this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new U1(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class U1 extends Tf{}let Ef=!1;(()=>{try{const r={get capture(){return Ef=!0,!1}};window.addEventListener("test",r,r),window.removeEventListener("test",r,r)}catch{}})();class k1{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;Us(this.__pendingValue);){const s=this.__pendingValue;this.__pendingValue=on,s(this)}if(this.__pendingValue===on)return;const e=this.__pendingValue,t=this.value,n=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=e!=null&&(t==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=z1(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=on}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const z1=r=>r&&(Ef?{capture:r.capture,passive:r.passive,once:r.once}:r.capture);function B1(r){let e=ks.get(r.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},ks.set(r.type,e));let t=e.stringsArray.get(r.strings);if(t!==void 0)return t;const n=r.strings.join(Un);return t=e.keyString.get(n),t===void 0&&(t=new vf(r,r.getTemplateElement()),e.keyString.set(n,t)),e.stringsArray.set(r.strings,t),t}const ks=new Map,Lr=new WeakMap,Af=(r,e,t)=>{let n=Lr.get(e);n===void 0&&(Yc(e,e.firstChild),Lr.set(e,n=new bo(Object.assign({templateFactory:B1},t))),n.appendInto(e)),n.setValue(r),n.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H1=new class{handleAttributeExpressions(r,e,t,n){const i=e[0];return i==="."?new N1(r,e.slice(1),t).parts:i==="@"?[new k1(r,e.slice(1),n.eventContext)]:i==="?"?[new O1(r,e.slice(1),t)]:new Sf(r,e,t).parts}handleTextExpression(r){return new bo(r)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const wo=(r,...e)=>new Mf(r,e,"html",H1),Lf=(r,e)=>`${r}--${e}`;let _o=!0;window.ShadyCSS===void 0?_o=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),_o=!1);const V1=r=>e=>{const t=Lf(e.type,r);let n=ks.get(t);n===void 0&&(n={stringsArray:new WeakMap,keyString:new Map},ks.set(t,n));let i=n.stringsArray.get(e.strings);if(i!==void 0)return i;const s=e.strings.join(Un);if(i=n.keyString.get(s),i===void 0){const a=e.getTemplateElement();_o&&window.ShadyCSS.prepareTemplateDom(a,r),i=new vf(e,a),n.keyString.set(s,i)}return n.stringsArray.set(e.strings,i),i},G1=["html","svg"],Rf=new Set,W1=(r,e,t)=>{Rf.add(r);const n=t?t.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:s}=i;if(s===0)return void window.ShadyCSS.prepareTemplateStyles(n,r);const a=document.createElement("style");for(let c=0;c<s;c++){const h=i[c];h.parentNode.removeChild(h),a.textContent+=h.textContent}(c=>{G1.forEach(h=>{const u=ks.get(Lf(h,c));u!==void 0&&u.keyString.forEach(d=>{const{element:{content:p}}=d,f=new Set;Array.from(p.querySelectorAll("style")).forEach(m=>{f.add(m)}),bf(d,f)})})})(r);const o=n.content;t?function(c,h,u=null){const{element:{content:d},parts:p}=c;if(u==null)return void d.appendChild(h);const f=document.createTreeWalker(d,133,null,!1);let m=Ns(p),v=0,g=-1;for(;f.nextNode();)for(g++,f.currentNode===u&&(v=I1(h),u.parentNode.insertBefore(h,u));m!==-1&&p[m].index===g;){if(v>0){for(;m!==-1;)p[m].index+=v,m=Ns(p,m);return}m=Ns(p,m)}}(t,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(n,r);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(t){o.insertBefore(a,o.firstChild);const c=new Set;c.add(a),bf(t,c)}};window.JSCompiler_renameProperty=(r,e)=>r;const Qc={toAttribute(r,e){switch(e){case Boolean:return r?"":null;case Object:case Array:return r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){switch(e){case Boolean:return r!==null;case Number:return r===null?null:Number(r);case Object:case Array:return JSON.parse(r)}return r}},Cf=(r,e)=>e!==r&&(e==e||r==r),eh={attribute:!0,type:String,converter:Qc,reflect:!1,hasChanged:Cf};class th extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);i!==void 0&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,n)=>this._classProperties.set(n,t))}}static createProperty(e,t=eh){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdateInternal(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||eh}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const i of n)this.createProperty(i,t[i])}}static _attributeNameForProperty(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Cf){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||Qc,s=typeof i=="function"?i:i.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||Qc.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const n=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,n)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=eh){const i=this.constructor,s=i._attributeNameForProperty(e,n);if(s!==void 0){const a=i._propertyValueToAttribute(t,n);if(a===void 0)return;this._updateState=8|this._updateState,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(i!==void 0){const s=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,s),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let i=!0;if(e!==void 0){const s=this.constructor;n=n||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),n.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(n){throw e=!1,this._markUpdated(),n}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,n)=>this._propertyToAttribute(n,this[n],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}th.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j1=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function Te(r){return(e,t)=>t!==void 0?((n,i,s)=>{i.constructor.createProperty(s,n)})(r,e,t):j1(r,e)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const nh=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pf=Symbol();class q1{constructor(e,t){if(t!==Pf)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(nh?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const If={};class ih extends th{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(s,a)=>s.reduceRight((o,l)=>Array.isArray(l)?t(l,o):(o.add(l),o),a),n=t(e,new Set),i=[];n.forEach(s=>i.unshift(s)),this._styles=i}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!nh){const n=Array.prototype.slice.call(t.cssRules).reduce((i,s)=>i+s.cssText,"");return new q1(String(n),Pf)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?nh?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==If&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(n=>{const i=document.createElement("style");i.textContent=n.cssText,this.renderRoot.appendChild(i)}))}render(){return If}}ih.finalized=!0,ih.render=(r,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const n=t.scopeName,i=Lr.has(e),s=_o&&e.nodeType===11&&!!e.host,a=s&&!Rf.has(n),o=a?document.createDocumentFragment():e;if(Af(r,o,Object.assign({templateFactory:V1(n)},t)),a){const l=Lr.get(o);Lr.delete(o);const c=l.value instanceof Jc?l.value.template:void 0;W1(n,o,c),Yc(e,e.firstChild),e.appendChild(o),Lr.set(e,l)}!i&&s&&window.ShadyCSS.styleElement(e.host)},ih.shadowRootOptions={mode:"open"};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,Ff=Df&&self.XRSession.prototype.requestHitTestSource,rh=self.ResizeObserver!=null,sh=self.IntersectionObserver!=null,Of=Ff;(()=>{const r=navigator.userAgent||navigator.vendor||self.opera;/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))})(),/\bCrOS\b/.test(navigator.userAgent);const X1=/android/i.test(navigator.userAgent),Y1=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Nf=(()=>{const r=document.createElement("a");return Boolean(r.relList&&r.relList.supports&&r.relList.supports("ar"))})();/Safari\//.test(navigator.userAgent);const $1=/firefox/i.test(navigator.userAgent),J1=/OculusBrowser/.test(navigator.userAgent);Y1&&/CriOS\//.test(navigator.userAgent);const Z1=X1&&!$1&&!J1;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=wo`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

/* NOTE: This ruleset is our integration surface area with the
 * :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196 */
:host([data-js-focus-visible]:focus:not(.focus-visible)),
:host([data-js-focus-visible]) :focus:not(.focus-visible) {
  outline: none;
}

.container {
  position: relative;
}

.userInput {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  overflow: hidden;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

canvas.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  opacity: 0;
  transition: opacity 0.3s 0.3s;
  background-color: inherit;
}

.slot.poster.show {
  opacity: 1;
  transition: none;
}

.slot.poster.quick {
  transition: none;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--poster-color, #fff);
  background-image: var(--poster-image, none);
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--progress-mask, #fff);
  transition: opacity 0.3s;
  opacity: 0.2;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  align-items: center;
  justify-content: center;

  opacity: 0;
  will-change: opacity;
  overflow: hidden;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.slot.interaction-prompt > .animated-container {
  will-change: transform, opacity;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="A depiction of a 3D model"
      aria-live="polite">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>
  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Activate to view in 3D!"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View this 3D model up close">
        ${wo`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`}
      </a>
    </slot>
  </div>

  <div class="slot interaction-prompt">
    <div class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${wo`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`}
      </slot>
    </div>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="mask" part="default-progress-mask"></div>
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>
    
    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${wo`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`}
        </a>
      </slot>
    </div>
  </div>
</div>`;class Vt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}let Mo=1234567;const zs=Math.PI/180,Bs=180/Math.PI,gt=[];for(let r=0;r<256;r++)gt[r]=(r<16?"0":"")+r.toString(16);const Q1=typeof crypto!="undefined"&&"randomUUID"in crypto;function $t(){if(Q1)return crypto.randomUUID().toUpperCase();const r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(gt[255&r]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[255&e]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[63&t|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[255&n]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toUpperCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function ah(r,e){return(r%e+e)%e}function Hs(r,e,t){return(1-t)*r+t*e}function oh(r){return(r&r-1)==0&&r!==0}function Uf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var So=Object.freeze({__proto__:null,DEG2RAD:zs,RAD2DEG:Bs,generateUUID:$t,clamp:Et,euclideanModulo:ah,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Hs,damp:function(r,e,t,n){return Hs(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(ah(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){return r!==void 0&&(Mo=r%2147483647),Mo=16807*Mo%2147483647,(Mo-1)/2147483646},degToRad:function(r){return r*zs},radToDeg:function(r){return r*Bs},isPowerOfTwo:oh,ceilPowerOfTwo:Uf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:function(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}});class he{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}he.prototype.isVector2=!0;class lt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],m=i[0],v=i[3],g=i[6],b=i[1],x=i[4],y=i[7],w=i[2],M=i[5],T=i[8];return s[0]=a*m+o*b+l*w,s[3]=a*v+o*x+l*M,s[6]=a*g+o*y+l*T,s[1]=c*m+h*b+u*w,s[4]=c*v+h*x+u*M,s[7]=c*g+h*y+u*T,s[2]=d*m+p*b+f*w,s[5]=d*v+p*x+f*M,s[8]=d*g+p*y+f*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(o*n-i*a)*m,e[3]=d*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function zf(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function To(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}let Rr;lt.prototype.isMatrix3=!0;class Cr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=To("canvas")),Rr.width=e.width,Rr.height=e.height;const n=Rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let ew=0;class nt extends Vt{constructor(e=nt.DEFAULT_IMAGE,t=nt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=1,h=3e3){super(),Object.defineProperty(this,"id",{value:ew++}),this.uuid=$t(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=$t()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(lh(i[a].image)):s.push(lh(i[a]))}else s=lh(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}function lh(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Cr.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}nt.DEFAULT_IMAGE=void 0,nt.DEFAULT_MAPPING=300,nt.prototype.isTexture=!0;class We{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=.01,o=.1,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],v=l[6],g=l[10];if(Math.abs(h-d)<a&&Math.abs(u-m)<a&&Math.abs(f-v)<a){if(Math.abs(h+d)<o&&Math.abs(u+m)<o&&Math.abs(f+v)<o&&Math.abs(c+p+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,w=(g+1)/2,M=(h+d)/4,T=(u+m)/4,P=(f+v)/4;return x>y&&x>w?x<a?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=M/n,s=T/n):y>w?y<a?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=M/i,s=P/i):w<a?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=P/s),this.set(n,i,s,t),this}let b=Math.sqrt((v-f)*(v-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(v-f)/b,this.y=(u-m)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}We.prototype.isVector4=!0;class Ut extends Vt{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t),this.texture=new nt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Xd({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ut.prototype.isWebGLRenderTarget=!0;(class extends Ut{constructor(r,e,t){super(r,e);const n=this.texture;this.texture=[];for(let i=0;i<t;i++)this.texture[i]=n.clone()}setSize(r,e,t=1){if(this.width!==r||this.height!==e||this.depth!==t){this.width=r,this.height=e,this.depth=t;for(let n=0,i=this.texture.length;n<i;n++)this.texture[n].image.width=r,this.texture[n].image.height=e,this.texture[n].image.depth=t;this.dispose()}return this.viewport.set(0,0,r,e),this.scissor.set(0,0,r,e),this}copy(r){this.dispose(),this.width=r.width,this.height=r.height,this.depth=r.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.texture.length=0;for(let e=0,t=r.texture.length;e<t;e++)this.texture[e]=r.texture[e].clone();return this}}).prototype.isWebGLMultipleRenderTargets=!0;class Bf extends Ut{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Bf.prototype.isWebGLMultisampleRenderTarget=!0;class At{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=m);if(u!==m||l!==d||c!==p||h!==f){let v=1-o;const g=l*d+c*p+h*f+u*m,b=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),M=Math.atan2(w,g*b);v=Math.sin(v*M)/w,o=Math.sin(o*M)/w}const y=o*b;if(l=l*v+d*y,c=c*v+p*y,h=h*v+f*y,u=u*v+m*y,v===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}At.prototype.isQuaternion=!0;class C{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,u=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ch.copy(this).projectOnVector(e),this.sub(ch)}reflect(e){return this.sub(ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}C.prototype.isVector3=!0;const ch=new C,Hf=new At;class Lt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),hh.copy(t.boundingBox),hh.applyMatrix4(e.matrixWorld),this.union(hh));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vs),Vs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Eo.subVectors(this.max,Gs),Pr.subVectors(e.a,Gs),Ir.subVectors(e.b,Gs),Dr.subVectors(e.c,Gs),di.subVectors(Ir,Pr),pi.subVectors(Dr,Ir),$i.subVectors(Pr,Dr);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-$i.z,$i.y,di.z,0,-di.x,pi.z,0,-pi.x,$i.z,0,-$i.x,-di.y,di.x,0,-pi.y,pi.x,0,-$i.y,$i.x,0];return!!uh(t,Pr,Ir,Dr,Eo)&&(t=[1,0,0,0,1,0,0,0,1],!!uh(t,Pr,Ir,Dr,Eo)&&(Ao.crossVectors(di,pi),t=[Ao.x,Ao.y,Ao.z],uh(t,Pr,Ir,Dr,Eo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(Vs).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Lt.prototype.isBox3=!0;const kn=[new C,new C,new C,new C,new C,new C,new C,new C],Vs=new C,hh=new Lt,Pr=new C,Ir=new C,Dr=new C,di=new C,pi=new C,$i=new C,Gs=new C,Eo=new C,Ao=new C,Ji=new C;function uh(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ji.fromArray(r,s);const o=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tw=new Lt,Vf=new C,dh=new C,ph=new C;class fi{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tw.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ph.subVectors(e,this.center);const t=ph.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.add(ph.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return dh.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Vf.copy(e.center).add(dh)),this.expandByPoint(Vf.copy(e.center).sub(dh)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new C,fh=new C,Lo=new C,mi=new C,mh=new C,Ro=new C,gh=new C;class Zi{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.direction).multiplyScalar(t).add(this.origin),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fh.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(fh);const s=.5*e.distanceTo(t),a=-this.direction.dot(Lo),o=mi.dot(this.direction),l=-mi.dot(Lo),c=mi.lengthSq(),h=Math.abs(1-a*a);let u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){const m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Lo).multiplyScalar(d).add(fh),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||n!=n)&&(n=s),(a<i||i!=i)&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,s){mh.subVectors(t,e),Ro.subVectors(n,e),gh.crossVectors(mh,Ro);let a,o=this.direction.dot(gh);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}mi.subVectors(this.origin,e);const l=a*this.direction.dot(Ro.crossVectors(mi,Ro));if(l<0)return null;const c=a*this.direction.dot(mh.cross(mi));if(c<0||l+c>o)return null;const h=-a*mi.dot(gh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,m,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=m,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),a=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){const d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nw,e,iw)}lookAt(e,t,n){const i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),gi.crossVectors(n,Gt),gi.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),gi.crossVectors(n,Gt)),gi.normalize(),Co.crossVectors(Gt,gi),i[0]=gi.x,i[4]=Co.x,i[8]=Gt.x,i[1]=gi.y,i[5]=Co.y,i[9]=Gt.y,i[2]=gi.z,i[6]=Co.z,i[10]=Gt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],m=n[6],v=n[10],g=n[14],b=n[3],x=n[7],y=n[11],w=n[15],M=i[0],T=i[4],P=i[8],D=i[12],I=i[1],N=i[5],X=i[9],G=i[13],z=i[2],$=i[6],le=i[10],re=i[14],se=i[3],ue=i[7],fe=i[11],Q=i[15];return s[0]=a*M+o*I+l*z+c*se,s[4]=a*T+o*N+l*$+c*ue,s[8]=a*P+o*X+l*le+c*fe,s[12]=a*D+o*G+l*re+c*Q,s[1]=h*M+u*I+d*z+p*se,s[5]=h*T+u*N+d*$+p*ue,s[9]=h*P+u*X+d*le+p*fe,s[13]=h*D+u*G+d*re+p*Q,s[2]=f*M+m*I+v*z+g*se,s[6]=f*T+m*N+v*$+g*ue,s[10]=f*P+m*X+v*le+g*fe,s[14]=f*D+m*G+v*re+g*Q,s[3]=b*M+x*I+y*z+w*se,s[7]=b*T+x*N+y*$+w*ue,s[11]=b*P+x*X+y*le+w*fe,s[15]=b*D+x*G+y*re+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],v=e[14],g=e[15],b=u*v*c-m*d*c+m*l*p-o*v*p-u*l*g+o*d*g,x=f*d*c-h*v*c-f*l*p+a*v*p+h*l*g-a*d*g,y=h*m*c-f*u*c+f*o*p-a*m*p-h*o*g+a*u*g,w=f*u*l-h*m*l-f*o*d+a*m*d+h*o*v-a*u*v,M=t*b+n*x+i*y+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=b*T,e[1]=(m*d*s-u*v*s-m*i*p+n*v*p+u*i*g-n*d*g)*T,e[2]=(o*v*s-m*l*s+m*i*c-n*v*c-o*i*g+n*l*g)*T,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*T,e[4]=x*T,e[5]=(h*v*s-f*d*s+f*i*p-t*v*p-h*i*g+t*d*g)*T,e[6]=(f*l*s-a*v*s-f*i*c+t*v*c+a*i*g-t*l*g)*T,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*T,e[8]=y*T,e[9]=(f*u*s-h*m*s-f*n*p+t*m*p+h*n*g-t*u*g)*T,e[10]=(a*m*s-f*o*s+f*n*c-t*m*c-a*n*g+t*o*g)*T,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*T,e[12]=w*T,e[13]=(h*m*i-f*u*i+f*n*d-t*m*d-h*n*v+t*u*v)*T,e[14]=(f*o*i-a*m*i-f*n*l+t*m*l+a*n*v-t*o*v)*T,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,m=a*h,v=a*u,g=o*u,b=l*c,x=l*h,y=l*u,w=n.x,M=n.y,T=n.z;return i[0]=(1-(m+g))*w,i[1]=(p+y)*w,i[2]=(f-x)*w,i[3]=0,i[4]=(p-y)*M,i[5]=(1-(d+g))*M,i[6]=(v+b)*M,i[7]=0,i[8]=(f+x)*T,i[9]=(v-b)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Fr.set(i[0],i[1],i[2]).length();const a=Fr.set(i[4],i[5],i[6]).length(),o=Fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const l=1/s,c=1/a,h=1/o;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=c,ln.elements[5]*=c,ln.elements[6]*=c,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-s),u=(t+e)*l,d=(n+i)*c,p=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ye.prototype.isMatrix4=!0;const Fr=new C,ln=new ye,nw=new C(0,0,0),iw=new C(1,1,1),gi=new C,Co=new C,Gt=new C,Gf=new ye,Wf=new At;class vi{constructor(e=0,t=0,n=0,i=vi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new C(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}vi.prototype.isEuler=!0,vi.DefaultOrder="XYZ",vi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class jf{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let rw=0;const qf=new C,Or=new At,Bn=new ye,Po=new C,Ws=new C,sw=new C,aw=new At,Xf=new C(1,0,0),Yf=new C(0,1,0),$f=new C(0,0,1),ow={type:"added"},Jf={type:"removed"};class Fe extends Vt{constructor(){super(),Object.defineProperty(this,"id",{value:rw++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DefaultUp.clone();const e=new C,t=new vi,n=new At,i=new C(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new lt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Fe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(Yf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,t){return qf.copy(e).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(Yf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Po.copy(e):Po.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ws,Po,this.up):Bn.lookAt(Po,Ws,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Or.setFromRotationMatrix(Bn),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ow)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,sw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,aw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Fe.DefaultUp=new C(0,1,0),Fe.DefaultMatrixAutoUpdate=!0,Fe.prototype.isObject3D=!0;const cn=new C,Hn=new C,vh=new C,Vn=new C,Nr=new C,Ur=new C,Zf=new C,yh=new C,xh=new C,bh=new C;class at{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),Hn.subVectors(n,t),vh.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Hn),l=cn.dot(vh),c=Hn.dot(Hn),h=Hn.dot(vh),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn),Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Vn),l.set(0,0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Hn.subVectors(e,t),cn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),.5*cn.cross(Hn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return at.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return at.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return at.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return at.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return at.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Nr.subVectors(i,n),Ur.subVectors(s,n),yh.subVectors(e,n);const l=Nr.dot(yh),c=Ur.dot(yh);if(l<=0&&c<=0)return t.copy(n);xh.subVectors(e,i);const h=Nr.dot(xh),u=Ur.dot(xh);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Nr,a);bh.subVectors(e,s);const p=Nr.dot(bh),f=Ur.dot(bh);if(f>=0&&p<=f)return t.copy(s);const m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Ur,o);const v=h*f-p*u;if(v<=0&&u-h>=0&&p-f>=0)return Zf.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(Zf,o);const g=1/(v+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Nr,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let lw=0;class ot extends Vt{constructor(){super(),Object.defineProperty(this,"id",{value:lw++}),this.uuid=$t(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.format=1023,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenTint&&this.sheenTint.isColor&&(n.sheenTint=this.sheenTint.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==1023&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ot.prototype.isMaterial=!0;const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Io={h:0,s:0,l:0};function wh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function _h(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Mh(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}class ve{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=ah(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=wh(s,i,e+1/3),this.g=wh(s,i,e),this.b=wh(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Kf[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=_h(e.r),this.g=_h(e.g),this.b=_h(e.b),this}copyLinearToSRGB(e){return this.r=Mh(e.r),this.g=Mh(e.g),this.b=Mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case t:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-t)/h+2;break;case i:o=(t-n)/h+4}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Io);const n=Hs(hn.h,Io.h,t),i=Hs(hn.s,Io.s,t),s=Hs(hn.l,Io.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ve.NAMES=Kf,ve.prototype.isColor=!0,ve.prototype.r=1,ve.prototype.g=1,ve.prototype.b=1;class un extends ot{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}un.prototype.isMeshBasicMaterial=!0;const Ye=new C,Do=new he;class je{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new ve),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new he),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new C),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new We),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}}je.prototype.isBufferAttribute=!0;class Qf extends je{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class em extends je{constructor(e,t,n){super(new Uint32Array(e),t,n)}}(class extends je{constructor(r,e,t){super(new Uint16Array(r),e,t)}}).prototype.isFloat16BufferAttribute=!0;class ct extends je{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cw=0;const Jt=new ye,Sh=new Fe,kr=new C,Wt=new Lt,js=new Lt,ut=new C;class qe extends Vt{constructor(){super(),Object.defineProperty(this,"id",{value:cw++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)>65535?em:Qf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new C,1/0);if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Wt.min,js.min),Wt.expandByPoint(ut),ut.addVectors(Wt.max,js.max),Wt.expandByPoint(ut)):(Wt.expandByPoint(js.min),Wt.expandByPoint(js.max))}Wt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ut.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),ut.add(kr)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new je(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let I=0;I<o;I++)c[I]=new C,h[I]=new C;const u=new C,d=new C,p=new C,f=new he,m=new he,v=new he,g=new C,b=new C;function x(I,N,X){u.fromArray(i,3*I),d.fromArray(i,3*N),p.fromArray(i,3*X),f.fromArray(a,2*I),m.fromArray(a,2*N),v.fromArray(a,2*X),d.sub(u),p.sub(u),m.sub(f),v.sub(f);const G=1/(m.x*v.y-v.x*m.y);isFinite(G)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(G),b.copy(p).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(G),c[I].add(g),c[N].add(g),c[X].add(g),h[I].add(b),h[N].add(b),h[X].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let I=0,N=y.length;I<N;++I){const X=y[I],G=X.start;for(let z=G,$=G+X.count;z<$;z+=3)x(n[z+0],n[z+1],n[z+2])}const w=new C,M=new C,T=new C,P=new C;function D(I){T.fromArray(s,3*I),P.copy(T);const N=c[I];w.copy(N),w.sub(T.multiplyScalar(T.dot(N))).normalize(),M.crossVectors(P,N);const X=M.dot(h[I])<0?-1:1;l[4*I]=w.x,l[4*I+1]=w.y,l[4*I+2]=w.z,l[4*I+3]=X}for(let I=0,N=y.length;I<N;++I){const X=y[I],G=X.start;for(let z=G,$=G+X.count;z<$;z+=3)D(n[z+0]),D(n[z+1]),D(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const f=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!e||!e.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,a=e.attributes[i],o=a.array,l=a.itemSize*t,c=Math.min(o.length,s.length-l);for(let h=0,u=l;h<c;h++,u++)s[u]=o[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,f=0;for(let m=0,v=l.length;m<v;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qe,n=this.index.array,i=this.attributes;for(const o in i){const l=e(i[o],n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}qe.prototype.isBufferGeometry=!0;const tm=new ye,zr=new Zi,Th=new fi,yi=new C,xi=new C,bi=new C,Eh=new C,Ah=new C,Lh=new C,Fo=new C,Oo=new C,No=new C,Uo=new he,ko=new he,zo=new he,Rh=new C,Bo=new C;class Me extends Fe{constructor(e=new qe,t=new un){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Th.copy(n.boundingSphere),Th.applyMatrix4(s),e.ray.intersectsSphere(Th)===!1)||(tm.copy(s).invert(),zr.copy(e.ray).applyMatrix4(tm),n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,v=p.length;m<v;m++){const g=p[m],b=i[g.materialIndex];for(let x=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));x<y;x+=3){const w=o.getX(x),M=o.getX(x+1),T=o.getX(x+2);a=Ho(this,b,e,zr,l,c,h,u,d,w,M,T),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else for(let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);m<v;m+=3){const g=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);a=Ho(this,i,e,zr,l,c,h,u,d,g,b,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}else if(l!==void 0)if(Array.isArray(i))for(let m=0,v=p.length;m<v;m++){const g=p[m],b=i[g.materialIndex];for(let x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));x<y;x+=3)a=Ho(this,b,e,zr,l,c,h,u,d,x,x+1,x+2),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}else for(let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);m<v;m+=3)a=Ho(this,i,e,zr,l,c,h,u,d,m,m+1,m+2),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}function Ho(r,e,t,n,i,s,a,o,l,c,h,u){yi.fromBufferAttribute(i,c),xi.fromBufferAttribute(i,h),bi.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){Fo.set(0,0,0),Oo.set(0,0,0),No.set(0,0,0);for(let f=0,m=s.length;f<m;f++){const v=d[f],g=s[f];v!==0&&(Eh.fromBufferAttribute(g,c),Ah.fromBufferAttribute(g,h),Lh.fromBufferAttribute(g,u),a?(Fo.addScaledVector(Eh,v),Oo.addScaledVector(Ah,v),No.addScaledVector(Lh,v)):(Fo.addScaledVector(Eh.sub(yi),v),Oo.addScaledVector(Ah.sub(xi),v),No.addScaledVector(Lh.sub(bi),v)))}yi.add(Fo),xi.add(Oo),bi.add(No)}r.isSkinnedMesh&&(r.boneTransform(c,yi),r.boneTransform(h,xi),r.boneTransform(u,bi));const p=function(f,m,v,g,b,x,y,w){let M;if(M=m.side===1?g.intersectTriangle(y,x,b,!0,w):g.intersectTriangle(b,x,y,m.side!==2,w),M===null)return null;Bo.copy(w),Bo.applyMatrix4(f.matrixWorld);const T=v.ray.origin.distanceTo(Bo);return T<v.near||T>v.far?null:{distance:T,point:Bo.clone(),object:f}}(r,e,t,n,yi,xi,bi,Rh);if(p){o&&(Uo.fromBufferAttribute(o,c),ko.fromBufferAttribute(o,h),zo.fromBufferAttribute(o,u),p.uv=at.getUV(Rh,yi,xi,bi,Uo,ko,zo,new he)),l&&(Uo.fromBufferAttribute(l,c),ko.fromBufferAttribute(l,h),zo.fromBufferAttribute(l,u),p.uv2=at.getUV(Rh,yi,xi,bi,Uo,ko,zo,new he));const f={a:c,b:h,c:u,normal:new C,materialIndex:0};at.getNormal(yi,xi,bi,f.normal),p.face=f}return p}Me.prototype.isMesh=!0;class wi extends qe{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;function f(m,v,g,b,x,y,w,M,T,P,D){const I=y/T,N=w/P,X=y/2,G=w/2,z=M/2,$=T+1,le=P+1;let re=0,se=0;const ue=new C;for(let fe=0;fe<le;fe++){const Q=fe*N-G;for(let A=0;A<$;A++){const R=A*I-X;ue[m]=R*b,ue[v]=Q*x,ue[g]=z,c.push(ue.x,ue.y,ue.z),ue[m]=0,ue[v]=0,ue[g]=M>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(A/T),u.push(1-fe/P),re+=1}}for(let fe=0;fe<P;fe++)for(let Q=0;Q<T;Q++){const A=d+Q+$*fe,R=d+Q+$*(fe+1),V=d+(Q+1)+$*(fe+1),W=d+(Q+1)+$*fe;l.push(A,R,W),l.push(R,V,W),se+=6}o.addGroup(p,se,D),p+=se,d+=re}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2))}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(r){const e={};for(let t=0;t<r.length;t++){const n=Br(r[t]);for(const i in n)e[i]=n[i]}return e}const hw={clone:Br,merge:wt};class Gn extends ot{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Gn.prototype.isShaderMaterial=!0;class Ch extends Fe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ch.prototype.isCamera=!0;class dt extends Ch{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*Bs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*zs*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Bs*Math.atan(Math.tan(.5*zs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*zs*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}dt.prototype.isPerspectiveCamera=!0;class qs extends Fe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");this.renderTarget=n;const i=new dt(90,1,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);const s=new dt(90,1,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new C(-1,0,0)),this.add(s);const a=new dt(90,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new C(0,1,0)),this.add(a);const o=new dt(90,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new C(0,-1,0)),this.add(o);const l=new dt(90,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new dt(90,1,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class Vo extends nt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:301,n,i,s,a,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Vo.prototype.isCubeTexture=!0;class Go extends Ut{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Vo(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=1023,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wi(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Me(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new qs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Go.prototype.isWebGLCubeRenderTarget=!0;const Ph=new C,uw=new C,dw=new lt;class Wn{constructor(e=new C(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ph.subVectors(n,t).cross(uw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ph),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dw.getNormalMatrix(e),i=this.coplanarPoint(Ph).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Wn.prototype.isPlane=!0;const Hr=new fi,Wo=new C;class jo{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],f=n[10],m=n[11],v=n[12],g=n[13],b=n[14],x=n[15];return t[0].setComponents(o-i,u-l,m-d,x-v).normalize(),t[1].setComponents(o+i,u+l,m+d,x+v).normalize(),t[2].setComponents(o+s,u+c,m+p,x+g).normalize(),t[3].setComponents(o-s,u-c,m-p,x-g).normalize(),t[4].setComponents(o-a,u-h,m-f,x-b).normalize(),t[5].setComponents(o+a,u+h,m+f,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wo.x=i.normal.x>0?e.max.x:e.min.x,Wo.y=i.normal.y>0?e.max.y:e.min.y,Wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function pw(r,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){const o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const a=n.get(i);a===void 0?n.set(i,function(o,l){const c=o.array,h=o.usage,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let d=5126;return c instanceof Float32Array?d=5126:c instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):c instanceof Uint16Array?o.isFloat16BufferAttribute?t?d=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):d=5123:c instanceof Int16Array?d=5122:c instanceof Uint32Array?d=5125:c instanceof Int32Array?d=5124:c instanceof Int8Array?d=5120:(c instanceof Uint8Array||c instanceof Uint8ClampedArray)&&(d=5121),{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version}}(i,s)):a.version<i.version&&(function(o,l,c){const h=l.array,u=l.updateRange;r.bindBuffer(c,o),u.count===-1?r.bufferSubData(c,0,h):(t?r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1)}(a.buffer,i,s),a.version=i.version)}}}class _i extends qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],m=[],v=[];for(let g=0;g<h;g++){const b=g*d-a;for(let x=0;x<c;x++){const y=x*u-s;f.push(y,-b,0),m.push(0,0,1),v.push(x/o),v.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){const x=b+c*g,y=b+c*(g+1),w=b+1+c*(g+1),M=b+1+c*g;p.push(x,y,M),p.push(y,w,M)}this.setIndex(p),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(v,2))}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}const De={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenTint, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenTint * ( D * V );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenTint, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
	uniform float sheenRoughness;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},pe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new lt},uv2Transform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}}},wn={basic:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:wt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:wt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:wt([pe.points,pe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:wt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:wt([pe.common,pe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:wt([pe.sprite,pe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:wt([pe.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:wt([pe.common,pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:wt([pe.lights,pe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};function fw(r,e,t,n,i){const s=new ve(0);let a,o,l=0,c=null,h=0,u=null;function d(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,i)}return{getClearColor:function(){return s},setClearColor:function(p,f=1){s.set(p),l=f,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(s,l)},render:function(p,f){let m=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=e.get(v));const g=r.xr,b=g.getSession&&g.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?d(s,l):v&&v.isColor&&(d(v,1),m=!0),(r.autoClear||m)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===306)?(o===void 0&&(o=new Me(new wi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Br(wn.cube.uniforms),vertexShader:wn.cube.vertexShader,fragmentShader:wn.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(x,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=v,o.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c===v&&h===v.version&&u===r.toneMapping||(o.material.needsUpdate=!0,c=v,h=v.version,u=r.toneMapping),p.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new Me(new _i(2,2),new Gn({name:"BackgroundMaterial",uniforms:Br(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),c===v&&h===v.version&&u===r.toneMapping||(a.material.needsUpdate=!0,c=v,h=v.version,u=r.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}}}function mw(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l;function h(y){return n.isWebGL2?r.bindVertexArray(y):s.bindVertexArrayOES(y)}function u(y){return n.isWebGL2?r.deleteVertexArray(y):s.deleteVertexArrayOES(y)}function d(y){const w=[],M=[],T=[];for(let P=0;P<i;P++)w[P]=0,M[P]=0,T[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:M,attributeDivisors:T,object:y,attributes:{},index:null}}function p(){const y=c.newAttributes;for(let w=0,M=y.length;w<M;w++)y[w]=0}function f(y){m(y,0)}function m(y,w){const M=c.newAttributes,T=c.enabledAttributes,P=c.attributeDivisors;M[y]=1,T[y]===0&&(r.enableVertexAttribArray(y),T[y]=1),P[y]!==w&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,w),P[y]=w)}function v(){const y=c.newAttributes,w=c.enabledAttributes;for(let M=0,T=w.length;M<T;M++)w[M]!==y[M]&&(r.disableVertexAttribArray(M),w[M]=0)}function g(y,w,M,T,P,D){n.isWebGL2!==!0||M!==5124&&M!==5125?r.vertexAttribPointer(y,w,M,T,P,D):r.vertexAttribIPointer(y,w,M,P,D)}function b(){x(),c!==l&&(c=l,h(c.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(y,w,M,T,P){let D=!1;if(a){const I=function(N,X,G){const z=G.wireframe===!0;let $=o[N.id];$===void 0&&($={},o[N.id]=$);let le=$[X.id];le===void 0&&(le={},$[X.id]=le);let re=le[z];return re===void 0&&(re=d(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),le[z]=re),re}(T,M,w);c!==I&&(c=I,h(c.object)),D=function(N,X){const G=c.attributes,z=N.attributes;let $=0;for(const le in z){const re=G[le],se=z[le];if(re===void 0||re.attribute!==se||re.data!==se.data)return!0;$++}return c.attributesNum!==$||c.index!==X}(T,P),D&&function(N,X){const G={},z=N.attributes;let $=0;for(const le in z){const re=z[le],se={};se.attribute=re,re.data&&(se.data=re.data),G[le]=se,$++}c.attributes=G,c.attributesNum=$,c.index=X}(T,P)}else{const I=w.wireframe===!0;c.geometry===T.id&&c.program===M.id&&c.wireframe===I||(c.geometry=T.id,c.program=M.id,c.wireframe=I,D=!0)}y.isInstancedMesh===!0&&(D=!0),P!==null&&t.update(P,34963),D&&(function(I,N,X,G){if(n.isWebGL2===!1&&(I.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const z=G.attributes,$=X.getAttributes(),le=N.defaultAttributeValues;for(const re in $){const se=$[re];if(se.location>=0){let ue=z[re];if(ue===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ue!==void 0){const fe=ue.normalized,Q=ue.itemSize,A=t.get(ue);if(A===void 0)continue;const R=A.buffer,V=A.type,W=A.bytesPerElement;if(ue.isInterleavedBufferAttribute){const O=ue.data,oe=O.stride,ce=ue.offset;if(O&&O.isInstancedInterleavedBuffer){for(let H=0;H<se.locationSize;H++)m(se.location+H,O.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let H=0;H<se.locationSize;H++)f(se.location+H);r.bindBuffer(34962,R);for(let H=0;H<se.locationSize;H++)g(se.location+H,Q/se.locationSize,V,fe,oe*W,(ce+Q/se.locationSize*H)*W)}else{if(ue.isInstancedBufferAttribute){for(let O=0;O<se.locationSize;O++)m(se.location+O,ue.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let O=0;O<se.locationSize;O++)f(se.location+O);r.bindBuffer(34962,R);for(let O=0;O<se.locationSize;O++)g(se.location+O,Q/se.locationSize,V,fe,Q*W,Q/se.locationSize*O*W)}}else if(le!==void 0){const fe=le[re];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(se.location,fe);break;case 3:r.vertexAttrib3fv(se.location,fe);break;case 4:r.vertexAttrib4fv(se.location,fe);break;default:r.vertexAttrib1fv(se.location,fe)}}}}v()}(y,w,M,T),P!==null&&r.bindBuffer(34963,t.get(P).buffer))},reset:b,resetDefaultState:x,dispose:function(){b();for(const y in o){const w=o[y];for(const M in w){const T=w[M];for(const P in T)u(T[P].object),delete T[P];delete w[M]}delete o[y]}},releaseStatesOfGeometry:function(y){if(o[y.id]===void 0)return;const w=o[y.id];for(const M in w){const T=w[M];for(const P in T)u(T[P].object),delete T[P];delete w[M]}delete o[y.id]},releaseStatesOfProgram:function(y){for(const w in o){const M=o[w];if(M[y.id]===void 0)continue;const T=M[y.id];for(const P in T)u(T[P].object),delete T[P];delete M[y.id]}},initAttributes:p,enableAttribute:f,disableUnusedAttributes:v}}function gw(r,e,t,n){const i=n.isWebGL2;let s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)}}function vw(r,e,t){let n;function i(y){if(y==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),u=r.getParameter(35660),d=r.getParameter(3379),p=r.getParameter(34076),f=r.getParameter(34921),m=r.getParameter(36347),v=r.getParameter(36348),g=r.getParameter(36349),b=u>0,x=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:b,floatFragmentTextures:x,floatVertexTextures:b&&x,maxSamples:s?r.getParameter(36183):0}}function yw(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Wn,o=new lt,l={value:null,needsUpdate:!1};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,f){const m=u!==null?u.length:0;let v=null;if(m!==0){if(v=l.value,f!==!0||v===null){const g=p+4*m,b=d.matrixWorldInverse;o.getNormalMatrix(b),(v===null||v.length<g)&&(v=new Float32Array(g));for(let x=0,y=p;x!==m;++x,y+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const f=u.length!==0||d||n!==0||i;return i=d,t=h(u,p,0),n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,p){const f=u.clippingPlanes,m=u.clipIntersection,v=u.clipShadows,g=r.get(u);if(!i||f===null||f.length===0||s&&!v)s?h(null):c();else{const b=s?0:n,x=4*b;let y=g.clippingState||null;l.value=y,y=h(f,d,x,p);for(let w=0;w!==x;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}}}function xw(r){let e=new WeakMap;function t(i,s){return s===303?i.mapping=301:s===304&&(i.mapping=302),i}function n(i){const s=i.target;s.removeEventListener("dispose",n);const a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const s=i.mapping;if(s===303||s===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{const a=i.image;if(a&&a.height>0){const o=r.getRenderTarget(),l=new Go(a.height/2);return l.fromEquirectangularTexture(r,i),e.set(i,l),r.setRenderTarget(o),i.addEventListener("dispose",n),t(l.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}wn.physical={uniforms:wt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new he(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenTint:{value:new ve(0)},sheenRoughness:{value:0},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new ve(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new ve(1,1,1)},specularTintMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};class Ki extends Ch{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Ki.prototype.isOrthographicCamera=!0;class Xs extends Gn{constructor(e){super(e),this.type="RawShaderMaterial"}}Xs.prototype.isRawShaderMaterial=!0;const _n=Math.pow(2,8),im=[.125,.215,.35,.446,.526,.582],rm=5+im.length,Mi={3e3:0,3001:1,3002:2,3004:3,3005:4,3006:5,3007:6},Ih=new Ki,{_lodPlanes:Ys,_sizeLods:sm,_sigmas:qo}=_w(),am=new ve;let Dh=null;const Qi=(1+Math.sqrt(5))/2,Vr=1/Qi,om=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Qi,Vr),new C(0,Qi,-Vr),new C(Vr,0,Qi),new C(-Vr,0,Qi),new C(Qi,Vr,0),new C(-Qi,Vr,0)];class bw{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=function(t){const n=new Float32Array(t),i=new C(0,1,0);return new Xs({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i},inputEncoding:{value:Mi[3e3]},outputEncoding:{value:Mi[3e3]}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Oh()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(20),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Dh=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=hm(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=cm(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ys.length;e++)Ys[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Dh),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e){Dh=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:1003,minFilter:1003,generateMipmaps:!1,type:1009,format:1023,encoding:ww(e)?e.encoding:3002,depthBuffer:!1},n=lm(t);return n.depthBuffer=!e,this._pingPongRenderTarget=lm(t),n}_compileMaterial(e){const t=new Me(Ys[0],e);this._renderer.compile(t,Ih)}_sceneToCubeUV(e,t,n,i){const s=new dt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.outputEncoding,u=l.toneMapping;l.getClearColor(am),l.toneMapping=0,l.outputEncoding=3e3,l.autoClear=!1;const d=new un({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Me(new wi,d);let f=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,f=!0):(d.color.copy(am),f=!0);for(let v=0;v<6;v++){const g=v%3;g==0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):g==1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v])),Xo(i,g*_n,v>2?_n:0,_n,_n),l.setRenderTarget(i),f&&l.render(p,s),l.render(e,s)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.outputEncoding=h,l.autoClear=c,e.background=m}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===1023&&t.type===1009&&t.encoding===3001?e.value=Mi[3e3]:e.value=Mi[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=hm()):this._equirectShader==null&&(this._equirectShader=cm());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new Me(Ys[0],i),a=i.uniforms;a.envMap.value=e,e.isCubeTexture||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),this._setEncoding(a.outputEncoding,t.texture),Xo(t,0,0,3*_n,2*_n),n.setRenderTarget(t),n.render(s,Ih)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<rm;i++){const s=Math.sqrt(qo[i]*qo[i]-qo[i-1]*qo[i-1]),a=om[(i-1)%om.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=new Me(Ys[i],c),u=c.uniforms,d=sm[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):20;m>20&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const v=[];let g=0;for(let x=0;x<20;++x){const y=x/f,w=Math.exp(-y*y/2);v.push(w),x==0?g+=w:x<m&&(g+=2*w)}for(let x=0;x<v.length;x++)v[x]=v[x]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o),u.dTheta.value=p,u.mipInt.value=8-n,this._setEncoding(u.inputEncoding,e.texture),this._setEncoding(u.outputEncoding,e.texture);const b=sm[i];Xo(t,3*Math.max(0,_n-2*b),(i===0?0:2*_n)+2*b*(i>4?i-8+4:0),3*b,2*b),l.setRenderTarget(t),l.render(h,Ih)}}function ww(r){return r!==void 0&&r.type===1009&&(r.encoding===3e3||r.encoding===3001||r.encoding===3007)}function _w(){const r=[],e=[],t=[];let n=8;for(let i=0;i<rm;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>4?a=im[i-8+4-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,f=2,m=1,v=new Float32Array(p*d*u),g=new Float32Array(f*d*u),b=new Float32Array(m*d*u);for(let y=0;y<u;y++){const w=y%3*2/3-1,M=y>2?0:-1,T=[w,M,0,w+2/3,M,0,w+2/3,M+1,0,w,M,0,w+2/3,M+1,0,w,M+1,0];v.set(T,p*d*y),g.set(h,f*d*y);const P=[y,y,y,y,y,y];b.set(P,m*d*y)}const x=new qe;x.setAttribute("position",new je(v,p)),x.setAttribute("uv",new je(g,f)),x.setAttribute("faceIndex",new je(b,m)),r.push(x),n>4&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function lm(r){const e=new Ut(3*_n,3*_n,r);return e.texture.mapping=306,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Xo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cm(){const r=new he(1,1);return new Xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:Mi[3e3]},outputEncoding:{value:Mi[3e3]}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Oh()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hm(){return new Xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Mi[3e3]},outputEncoding:{value:Mi[3e3]}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Oh()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Oh(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Mw(r){let e=new WeakMap,t=null;function n(i){const s=i.target;s.removeEventListener("dispose",n);const a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const s=i.mapping,a=s===303||s===304,o=s===301||s===302;if(a||o){if(e.has(i))return e.get(i).texture;{const l=i.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0;const u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){const c=r.getRenderTarget();t===null&&(t=new bw(r));const h=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,h),r.setRenderTarget(c),i.addEventListener("dispose",n),h.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Sw(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tw(r,e,t,n){const i={},s=new WeakMap;function a(l){const c=l.target;c.index!==null&&e.remove(c.index);for(const u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];const h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){const c=[],h=l.index,u=l.attributes.position;let d=0;if(h!==null){const m=h.array;d=h.version;for(let v=0,g=m.length;v<g;v+=3){const b=m[v+0],x=m[v+1],y=m[v+2];c.push(b,x,x,y,y,b)}}else{const m=u.array;d=u.version;for(let v=0,g=m.length/3-1;v<g;v+=3){const b=v+0,x=v+1,y=v+2;c.push(b,x,x,y,y,b)}}const p=new(zf(c)>65535?em:Qf)(c,1);p.version=d;const f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){const c=l.attributes;for(const u in c)e.update(c[u],34962);const h=l.morphAttributes;for(const u in h){const d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],34962)}},getWireframeAttribute:function(l){const c=s.get(l);if(c){const h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Ew(r,e,t,n){const i=n.isWebGL2;let s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)}}function Aw(r){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}class Nh extends nt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}function Lw(r,e){return r[0]-e[0]}function Rw(r,e){return Math.abs(e[1])-Math.abs(r[1])}function um(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Cw(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new C,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position.length;let f=s.get(c);if(f===void 0||f.count!==p){f!==void 0&&f.texture.dispose();const g=c.morphAttributes.normal!==void 0,b=c.morphAttributes.position,x=c.morphAttributes.normal||[],y=g===!0?2:1;let w=c.attributes.position.count*y,M=1;w>e.maxTextureSize&&(M=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*M*4*p),P=new Nh(T,w,M,p);P.format=1023,P.type=1015;const D=4*y;for(let I=0;I<p;I++){const N=b[I],X=x[I],G=w*M*4*I;for(let z=0;z<N.count;z++){a.fromBufferAttribute(N,z),N.normalized===!0&&um(a,N);const $=z*D;T[G+$+0]=a.x,T[G+$+1]=a.y,T[G+$+2]=a.z,T[G+$+3]=0,g===!0&&(a.fromBufferAttribute(X,z),X.normalized===!0&&um(a,X),T[G+$+4]=a.x,T[G+$+5]=a.y,T[G+$+6]=a.z,T[G+$+7]=0)}}f={count:p,texture:P,size:new he(w,M)},s.set(c,f)}let m=0;for(let g=0;g<d.length;g++)m+=d[g];const v=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const p=d===void 0?0:d.length;let f=n[c.id];if(f===void 0||f.length!==p){f=[];for(let x=0;x<p;x++)f[x]=[x,0];n[c.id]=f}for(let x=0;x<p;x++){const y=f[x];y[0]=x,y[1]=d[x]}f.sort(Rw);for(let x=0;x<8;x++)x<p&&f[x][1]?(o[x][0]=f[x][0],o[x][1]=f[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Lw);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const y=o[x],w=y[0],M=y[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+x)!==m[w]&&c.setAttribute("morphTarget"+x,m[w]),v&&c.getAttribute("morphNormal"+x)!==v[w]&&c.setAttribute("morphNormal"+x,v[w]),i[x]=M,g+=M):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),v&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const b=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",b),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Pw(r,e,t,n){let i=new WeakMap;function s(a){const o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){const o=n.render.frame,l=a.geometry,c=e.get(a,l);return i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),c},dispose:function(){i=new WeakMap}}}Nh.prototype.isDataTexture2DArray=!0;class dm extends nt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}dm.prototype.isDataTexture3D=!0;const pm=new nt,Iw=new Nh,Dw=new dm,fm=new Vo,mm=[],gm=[],vm=new Float32Array(16),ym=new Float32Array(9),xm=new Float32Array(4);function Gr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=mm[i];if(s===void 0&&(s=new Float32Array(i),mm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function bm(r,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Fw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ow(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function Nw(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function Uw(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function kw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(Rt(t,n))return;xm.set(n),r.uniformMatrix2fv(this.addr,!1,xm),_t(t,n)}}function zw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(Rt(t,n))return;ym.set(n),r.uniformMatrix3fv(this.addr,!1,ym),_t(t,n)}}function Bw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(Rt(t,n))return;vm.set(n),r.uniformMatrix4fv(this.addr,!1,vm),_t(t,n)}}function Hw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vw(r,e){const t=this.cache;Rt(t,e)||(r.uniform2iv(this.addr,e),_t(t,e))}function Gw(r,e){const t=this.cache;Rt(t,e)||(r.uniform3iv(this.addr,e),_t(t,e))}function Ww(r,e){const t=this.cache;Rt(t,e)||(r.uniform4iv(this.addr,e),_t(t,e))}function jw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qw(r,e){const t=this.cache;Rt(t,e)||(r.uniform2uiv(this.addr,e),_t(t,e))}function Xw(r,e){const t=this.cache;Rt(t,e)||(r.uniform3uiv(this.addr,e),_t(t,e))}function Yw(r,e){const t=this.cache;Rt(t,e)||(r.uniform4uiv(this.addr,e),_t(t,e))}function $w(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||pm,i)}function Jw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dw,i)}function Zw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||fm,i)}function Kw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Iw,i)}function Qw(r,e){r.uniform1fv(this.addr,e)}function e_(r,e){const t=Gr(e,this.size,2);r.uniform2fv(this.addr,t)}function t_(r,e){const t=Gr(e,this.size,3);r.uniform3fv(this.addr,t)}function n_(r,e){const t=Gr(e,this.size,4);r.uniform4fv(this.addr,t)}function i_(r,e){const t=Gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function r_(r,e){const t=Gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function s_(r,e){const t=Gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function a_(r,e){r.uniform1iv(this.addr,e)}function o_(r,e){r.uniform2iv(this.addr,e)}function l_(r,e){r.uniform3iv(this.addr,e)}function c_(r,e){r.uniform4iv(this.addr,e)}function h_(r,e){r.uniform1uiv(this.addr,e)}function u_(r,e){r.uniform2uiv(this.addr,e)}function d_(r,e){r.uniform3uiv(this.addr,e)}function p_(r,e){r.uniform4uiv(this.addr,e)}function f_(r,e,t){const n=e.length,i=bm(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||pm,i[s])}function m_(r,e,t){const n=e.length,i=bm(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||fm,i[s])}function g_(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=function(n){switch(n){case 5126:return Fw;case 35664:return Ow;case 35665:return Nw;case 35666:return Uw;case 35674:return kw;case 35675:return zw;case 35676:return Bw;case 5124:case 35670:return Hw;case 35667:case 35671:return Vw;case 35668:case 35672:return Gw;case 35669:case 35673:return Ww;case 5125:return jw;case 36294:return qw;case 36295:return Xw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Kw}}(e.type)}function wm(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=function(n){switch(n){case 5126:return Qw;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return r_;case 35676:return s_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35680:case 36300:case 36308:case 36293:return m_}}(e.type)}function _m(r){this.id=r,this.seq=[],this.map={}}wm.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),_t(e,r)},_m.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Uh=/(\w+)(\])?(\[|\.)?/g;function Mm(r,e){r.seq.push(e),r.map[e.id]=e}function v_(r,e,t){const n=r.name,i=n.length;for(Uh.lastIndex=0;;){const s=Uh.exec(n),a=Uh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Mm(t,c===void 0?new g_(o,r,e):new wm(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new _m(o),Mm(t,h)),t=h}}}function Si(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n);v_(i,r.getUniformLocation(e,i.name),this)}}function Sm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}Si.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)},Si.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)},Si.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}},Si.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};let y_=0;function Tm(r){switch(r){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Em(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+function(s){const a=s.split(`
`);for(let o=0;o<a.length;o++)a[o]=o+1+": "+a[o];return a.join(`
`)}(r.getShaderSource(e))}function Wr(r,e){const t=Tm(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function x_(r,e){const t=Tm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function b_(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $s(r){return r!==""}function Am(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(r){return r.replace(w_,__)}function __(r,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return kh(t)}const M_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,S_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(r){return r.replace(S_,Cm).replace(M_,T_)}function T_(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Cm(r,e,t,n)}function Cm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pm(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=function(P){let D="SHADOWMAP_TYPE_BASIC";return P.shadowMapType===1?D="SHADOWMAP_TYPE_PCF":P.shadowMapType===2?D="SHADOWMAP_TYPE_PCF_SOFT":P.shadowMapType===3&&(D="SHADOWMAP_TYPE_VSM"),D}(t),c=function(P){let D="ENVMAP_TYPE_CUBE";if(P.envMap)switch(P.envMapMode){case 301:case 302:D="ENVMAP_TYPE_CUBE";break;case 306:case 307:D="ENVMAP_TYPE_CUBE_UV"}return D}(t),h=function(P){let D="ENVMAP_MODE_REFLECTION";if(P.envMap)switch(P.envMapMode){case 302:case 307:D="ENVMAP_MODE_REFRACTION"}return D}(t),u=function(P){let D="ENVMAP_BLENDING_NONE";if(P.envMap)switch(P.combine){case 0:D="ENVMAP_BLENDING_MULTIPLY";break;case 1:D="ENVMAP_BLENDING_MIX";break;case 2:D="ENVMAP_BLENDING_ADD"}return D}(t),d=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":function(P){return[P.extensionDerivatives||P.envMapCubeUV||P.bumpMap||P.tangentSpaceNormalMap||P.clearcoatNormalMap||P.flatShading||P.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(P.extensionFragDepth||P.logarithmicDepthBuffer)&&P.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",P.extensionDrawBuffers&&P.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(P.extensionShaderTextureLOD||P.envMap||P.transmission)&&P.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($s).join(`
`)}(t),f=function(P){const D=[];for(const I in P){const N=P[I];N!==!1&&D.push("#define "+I+" "+N)}return D.join(`
`)}(s),m=i.createProgram();let v,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[f].filter($s).join(`
`),v.length>0&&(v+=`
`),g=[p,f].filter($s).join(`
`),g.length>0&&(g+=`
`)):(v=[Pm(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),g=[p,Pm(t),"#define SHADER_NAME "+t.shaderName,f,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?De.tonemapping_pars_fragment:"",t.toneMapping!==0?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===1022?"#define OPAQUE":"",De.encodings_pars_fragment,t.map?Wr("mapTexelToLinear",t.mapEncoding):"",t.matcap?Wr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Wr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Wr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?Wr("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?Wr("lightMapTexelToLinear",t.lightMapEncoding):"",x_("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=kh(a),a=Am(a,t),a=Lm(a,t),o=kh(o),o=Am(o,t),o=Lm(o,t),a=Rm(a),o=Rm(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion==="300 es"?"":"out highp vec4 pc_fragColor;",t.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=b+g+o,y=Sm(i,35633,b+v+a),w=Sm(i,35632,x);if(i.attachShader(m,y),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const P=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(y).trim(),I=i.getShaderInfoLog(w).trim();let N=!0,X=!0;if(i.getProgramParameter(m,35714)===!1){N=!1;const G=Em(i,y,"vertex"),z=Em(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+P+`
`+G+`
`+z)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):D!==""&&I!==""||(X=!1);X&&(this.diagnostics={runnable:N,programLog:P,vertexShader:{log:D,prefix:v},fragmentShader:{log:I,prefix:g}})}let M,T;return i.deleteShader(y),i.deleteShader(w),this.getUniforms=function(){return M===void 0&&(M=new Si(i,m)),M},this.getAttributes=function(){return T===void 0&&(T=function(P,D){const I={},N=P.getProgramParameter(D,35721);for(let X=0;X<N;X++){const G=P.getActiveAttrib(D,X),z=G.name;let $=1;G.type===35674&&($=2),G.type===35675&&($=3),G.type===35676&&($=4),I[z]={type:G.type,location:P.getAttribLocation(D,z),locationSize:$}}return I}(i,m)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}function A_(r,e,t,n,i,s,a){const o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,h=i.floatVertexTextures,u=i.maxVertexUniforms,d=i.vertexTextures;let p=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheen","transmission","transmissionMap","thicknessMap"];function v(g){let b;return g&&g.isTexture?b=g.encoding:g&&g.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),b=g.texture.encoding):b=3e3,l&&g&&g.isTexture&&g.format===1023&&g.type===1009&&g.encoding===3001&&(b=3e3),b}return{getParameters:function(g,b,x,y,w){const M=y.fog,T=g.isMeshStandardMaterial?y.environment:null,P=(g.isMeshStandardMaterial?t:e).get(g.envMap||T),D=f[g.type],I=w.isSkinnedMesh?function(le){const re=le.skeleton.bones;if(h)return 1024;{const se=u,ue=Math.floor((se-20)/4),fe=Math.min(ue,re.length);return fe<re.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+re.length+" bones. This GPU supports "+fe+"."),0):fe}}(w):0;let N,X;if(g.precision!==null&&(p=i.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead.")),D){const le=wn[D];N=le.vertexShader,X=le.fragmentShader}else N=g.vertexShader,X=g.fragmentShader;const G=r.getRenderTarget(),z=g.alphaTest>0,$=g.clearcoat>0;return{isWebGL2:l,shaderID:D,shaderName:g.type,vertexShader:N,fragmentShader:X,defines:g.defines,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,instancing:w.isInstancedMesh===!0,instancingColor:w.isInstancedMesh===!0&&w.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G!==null?v(G.texture):r.outputEncoding,map:!!g.map,mapEncoding:v(g.map),matcap:!!g.matcap,matcapEncoding:v(g.matcap),envMap:!!P,envMapMode:P&&P.mapping,envMapEncoding:v(P),envMapCubeUV:!!P&&(P.mapping===306||P.mapping===307),lightMap:!!g.lightMap,lightMapEncoding:v(g.lightMap),aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,emissiveMapEncoding:v(g.emissiveMap),bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===1,tangentSpaceNormalMap:g.normalMapType===0,clearcoat:$,clearcoatMap:$&&!!g.clearcoatMap,clearcoatRoughnessMap:$&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:$&&!!g.clearcoatNormalMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularTintMap:!!g.specularTintMap,specularTintMapEncoding:v(g.specularTintMap),alphaMap:!!g.alphaMap,alphaTest:z,gradientMap:!!g.gradientMap,sheen:g.sheen>0,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!w.geometry&&!!w.geometry.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!w.geometry&&!!w.geometry.attributes.color&&w.geometry.attributes.color.itemSize===4,vertexUvs:!!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatMap||g.clearcoatRoughnessMap||g.clearcoatNormalMap||g.displacementMap||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularTintMap),uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularTintMap||!g.displacementMap),fog:!!M,useFog:g.fog,fogExp2:M&&M.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:c,skinning:w.isSkinnedMesh===!0&&I>0,maxBones:I,useVertexTexture:h,morphTargets:!!w.geometry&&!!w.geometry.morphAttributes.position,morphNormals:!!w.geometry&&!!w.geometry.morphAttributes.normal,morphTargetsCount:w.geometry&&w.geometry.morphAttributes.position?w.geometry.morphAttributes.position.length:0,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:g.format,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&x.length>0,shadowMapType:r.shadowMap.type,toneMapping:g.toneMapped?r.toneMapping:0,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,depthPacking:g.depthPacking!==void 0&&g.depthPacking,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}},getProgramCacheKey:function(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.fragmentShader),b.push(g.vertexShader)),g.defines!==void 0)for(const x in g.defines)b.push(x),b.push(g.defines[x]);if(g.isRawShaderMaterial===!1){for(let x=0;x<m.length;x++)b.push(g[m[x]]);b.push(r.outputEncoding),b.push(r.gammaFactor)}return b.push(g.customProgramCacheKey),b.join()},getUniforms:function(g){const b=f[g.type];let x;if(b){const y=wn[b];x=hw.clone(y.uniforms)}else x=g.uniforms;return x},acquireProgram:function(g,b){let x;for(let y=0,w=o.length;y<w;y++){const M=o[y];if(M.cacheKey===b){x=M,++x.usedTimes;break}}return x===void 0&&(x=new E_(r,b,g,s),o.push(x)),x},releaseProgram:function(g){if(--g.usedTimes==0){const b=o.indexOf(g);o[b]=o[o.length-1],o.pop(),g.destroy()}},programs:o}}function L_(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function R_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Im(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dm(r){const e=[];let t=0;const n=[],i=[],s=[],a={id:-1};function o(l,c,h,u,d,p){let f=e[t];const m=r.get(h);return f===void 0?(f={id:l.id,object:l,geometry:c,material:h,program:m.program||a,groupOrder:u,renderOrder:l.renderOrder,z:d,group:p},e[t]=f):(f.id=l.id,f.object=l,f.geometry=c,f.material=h,f.program=m.program||a,f.groupOrder=u,f.renderOrder=l.renderOrder,f.z=d,f.group=p),t++,f}return{opaque:n,transmissive:i,transparent:s,init:function(){t=0,n.length=0,i.length=0,s.length=0},push:function(l,c,h,u,d,p){const f=o(l,c,h,u,d,p);h.transmission>0?i.push(f):h.transparent===!0?s.push(f):n.push(f)},unshift:function(l,c,h,u,d,p){const f=o(l,c,h,u,d,p);h.transmission>0?i.unshift(f):h.transparent===!0?s.unshift(f):n.unshift(f)},finish:function(){for(let l=t,c=e.length;l<c;l++){const h=e[l];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.program=null,h.group=null}},sort:function(l,c){n.length>1&&n.sort(l||R_),i.length>1&&i.sort(c||Im),s.length>1&&s.sort(c||Im)}}}function C_(r){let e=new WeakMap;return{get:function(t,n){let i;return e.has(t)===!1?(i=new Dm(r),e.set(t,[i])):n>=e.get(t).length?(i=new Dm(r),e.get(t).push(i)):i=e.get(t)[n],i},dispose:function(){e=new WeakMap}}}function P_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ve};break;case"SpotLight":t={position:new C,direction:new C,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new C,halfWidth:new C,halfHeight:new C}}return r[e.id]=t,t}}}let I_=0;function D_(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function F_(r,e){const t=new P_,n=function(){const l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)i.probe.push(new C);const s=new C,a=new ye,o=new ye;return{setup:function(l,c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,f=0,m=0,v=0,g=0,b=0,x=0,y=0;l.sort(D_);const w=c!==!0?Math.PI:1;for(let T=0,P=l.length;T<P;T++){const D=l[T],I=D.color,N=D.intensity,X=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*N*w,u+=I.g*N*w,d+=I.b*N*w;else if(D.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],N);else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const $=D.shadow,le=n.get(D);le.shadowBias=$.bias,le.shadowNormalBias=$.normalBias,le.shadowRadius=$.radius,le.shadowMapSize=$.mapSize,i.directionalShadow[p]=le,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=D.shadow.matrix,b++}i.directional[p]=z,p++}else if(D.isSpotLight){const z=t.get(D);if(z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(I).multiplyScalar(N*w),z.distance=X,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,D.castShadow){const $=D.shadow,le=n.get(D);le.shadowBias=$.bias,le.shadowNormalBias=$.normalBias,le.shadowRadius=$.radius,le.shadowMapSize=$.mapSize,i.spotShadow[m]=le,i.spotShadowMap[m]=G,i.spotShadowMatrix[m]=D.shadow.matrix,y++}i.spot[m]=z,m++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(I).multiplyScalar(N),z.halfWidth.set(.5*D.width,0,0),z.halfHeight.set(0,.5*D.height,0),i.rectArea[v]=z,v++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*w),z.distance=D.distance,z.decay=D.decay,D.castShadow){const $=D.shadow,le=n.get(D);le.shadowBias=$.bias,le.shadowNormalBias=$.normalBias,le.shadowRadius=$.radius,le.shadowMapSize=$.mapSize,le.shadowCameraNear=$.camera.near,le.shadowCameraFar=$.camera.far,i.pointShadow[f]=le,i.pointShadowMap[f]=G,i.pointShadowMatrix[f]=D.shadow.matrix,x++}i.point[f]=z,f++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(N*w),z.groundColor.copy(D.groundColor).multiplyScalar(N*w),i.hemi[g]=z,g++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const M=i.hash;M.directionalLength===p&&M.pointLength===f&&M.spotLength===m&&M.rectAreaLength===v&&M.hemiLength===g&&M.numDirectionalShadows===b&&M.numPointShadows===x&&M.numSpotShadows===y||(i.directional.length=p,i.spot.length=m,i.rectArea.length=v,i.point.length=f,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=y,M.directionalLength=p,M.pointLength=f,M.spotLength=m,M.rectAreaLength=v,M.hemiLength=g,M.numDirectionalShadows=b,M.numPointShadows=x,M.numSpotShadows=y,i.version=I_++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,f=0;const m=c.matrixWorldInverse;for(let v=0,g=l.length;v<g;v++){const b=l[v];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),a.copy(b.matrixWorld),a.premultiply(m),o.extractRotation(a),x.halfWidth.set(.5*b.width,0,0),x.halfHeight.set(0,.5*b.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const x=i.hemi[f];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),x.direction.normalize(),f++}}},state:i}}function Fm(r,e){const t=new F_(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function O_(r,e){let t=new WeakMap;return{get:function(n,i=0){let s;return t.has(n)===!1?(s=new Fm(r,e),t.set(n,[s])):i>=t.get(n).length?(s=new Fm(r,e),t.get(n).push(s)):s=t.get(n)[i],s},dispose:function(){t=new WeakMap}}}class Om extends ot{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Om.prototype.isMeshDepthMaterial=!0;class Nm extends ot{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Nm.prototype.isMeshDistanceMaterial=!0;function Um(r,e,t){let n=new jo;const i=new he,s=new he,a=new We,o=new Om({depthPacking:3201}),l=new Nm,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new Gn({uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4},samples:{value:8}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new qe;f.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Me(f,d),v=this;function g(y,w){const M=e.update(m);d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,d.uniforms.samples.value=y.blurSamples,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,M,d,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,p.uniforms.samples.value=y.blurSamples,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,M,p,m,null)}function b(y,w,M,T,P,D,I){let N=null;const X=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N=X!==void 0?X:T.isPointLight===!0?l:o,r.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const G=N.uuid,z=M.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let le=$[z];le===void 0&&(le=N.clone(),$[z]=le),N=le}return N.visible=M.visible,N.wireframe=M.wireframe,N.side=I===3?M.shadowSide!==null?M.shadowSide:M.side:M.shadowSide!==null?M.shadowSide:u[M.side],N.alphaMap=M.alphaMap,N.alphaTest=M.alphaTest,N.clipShadows=M.clipShadows,N.clippingPlanes=M.clippingPlanes,N.clipIntersection=M.clipIntersection,N.displacementMap=M.displacementMap,N.displacementScale=M.displacementScale,N.displacementBias=M.displacementBias,N.wireframeLinewidth=M.wireframeLinewidth,N.linewidth=M.linewidth,T.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(T.matrixWorld),N.nearDistance=P,N.farDistance=D),N}function x(y,w,M,T,P){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===3)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const I=e.update(y),N=y.material;if(Array.isArray(N)){const X=I.groups;for(let G=0,z=X.length;G<z;G++){const $=X[G],le=N[$.materialIndex];if(le&&le.visible){const re=b(y,0,le,T,M.near,M.far,P);r.renderBufferDirect(M,null,I,re,y,$)}}}else if(N.visible){const X=b(y,0,N,T,M.near,M.far,P);r.renderBufferDirect(M,null,I,X,y,null)}}const D=y.children;for(let I=0,N=D.length;I<N;I++)x(D[I],w,M,T,P)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(y,w,M){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||y.length===0)return;const T=r.getRenderTarget(),P=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(0),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let N=0,X=y.length;N<X;N++){const G=y[N],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const $=z.getFrameExtents();if(i.multiply($),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null&&!z.isPointLightShadow&&this.type===3){const re={minFilter:1006,magFilter:1006,format:1023};z.map=new Ut(i.x,i.y,re),z.map.texture.name=G.name+".shadowMap",z.mapPass=new Ut(i.x,i.y,re),z.camera.updateProjectionMatrix()}if(z.map===null){const re={minFilter:1003,magFilter:1003,format:1023};z.map=new Ut(i.x,i.y,re),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const le=z.getViewportCount();for(let re=0;re<le;re++){const se=z.getViewport(re);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),I.viewport(a),z.updateMatrices(G,re),n=z.getFrustum(),x(w,M,z.camera,G,this.type)}z.isPointLightShadow||this.type!==3||g(z,M),z.needsUpdate=!1}v.needsUpdate=!1,r.setRenderTarget(T,P,D)}}function N_(r,e,t){const n=t.isWebGL2,i=new function(){let E=!1;const k=new We;let J=null;const _=new We(0,0,0,0);return{setMask:function(S){J===S||E||(r.colorMask(S,S,S,S),J=S)},setLocked:function(S){E=S},setClear:function(S,F,B,U,Z){Z===!0&&(S*=U,F*=U,B*=U),k.set(S,F,B,U),_.equals(k)===!1&&(r.clearColor(S,F,B,U),_.copy(k))},reset:function(){E=!1,J=null,_.set(-1,0,0,0)}}},s=new function(){let E=!1,k=null,J=null,_=null;return{setTest:function(S){S?Q(2929):A(2929)},setMask:function(S){k===S||E||(r.depthMask(S),k=S)},setFunc:function(S){if(J!==S){if(S)switch(S){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;default:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517)}else r.depthFunc(515);J=S}},setLocked:function(S){E=S},setClear:function(S){_!==S&&(r.clearDepth(S),_=S)},reset:function(){E=!1,k=null,J=null,_=null}}},a=new function(){let E=!1,k=null,J=null,_=null,S=null,F=null,B=null,U=null,Z=null;return{setTest:function(ee){E||(ee?Q(2960):A(2960))},setMask:function(ee){k===ee||E||(r.stencilMask(ee),k=ee)},setFunc:function(ee,ae,ie){J===ee&&_===ae&&S===ie||(r.stencilFunc(ee,ae,ie),J=ee,_=ae,S=ie)},setOp:function(ee,ae,ie){F===ee&&B===ae&&U===ie||(r.stencilOp(ee,ae,ie),F=ee,B=ae,U=ie)},setLocked:function(ee){E=ee},setClear:function(ee){Z!==ee&&(r.clearStencil(ee),Z=ee)},reset:function(){E=!1,k=null,J=null,_=null,S=null,F=null,B=null,U=null,Z=null}}};let o={},l=null,c={},h=null,u=!1,d=null,p=null,f=null,m=null,v=null,g=null,b=null,x=!1,y=null,w=null,M=null,T=null,P=null;const D=r.getParameter(35661);let I=!1,N=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(X)[1]),I=N>=1):X.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),I=N>=2);let G=null,z={};const $=r.getParameter(3088),le=r.getParameter(2978),re=new We().fromArray($),se=new We().fromArray(le);function ue(E,k,J){const _=new Uint8Array(4),S=r.createTexture();r.bindTexture(E,S),r.texParameteri(E,10241,9728),r.texParameteri(E,10240,9728);for(let F=0;F<J;F++)r.texImage2D(k+F,0,6408,1,1,0,6408,5121,_);return S}const fe={};function Q(E){o[E]!==!0&&(r.enable(E),o[E]=!0)}function A(E){o[E]!==!1&&(r.disable(E),o[E]=!1)}fe[3553]=ue(3553,3553,1),fe[34067]=ue(34067,34069,6),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Q(2929),s.setFunc(3),O(!1),oe(1),Q(2884),W(0);const R={100:32774,101:32778,102:32779};if(n)R[103]=32775,R[104]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(R[103]=E.MIN_EXT,R[104]=E.MAX_EXT)}const V={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function W(E,k,J,_,S,F,B,U){if(E!==0){if(u===!1&&(Q(3042),u=!0),E===5)S=S||k,F=F||J,B=B||_,k===p&&S===v||(r.blendEquationSeparate(R[k],R[S]),p=k,v=S),J===f&&_===m&&F===g&&B===b||(r.blendFuncSeparate(V[J],V[_],V[F],V[B]),f=J,m=_,g=F,b=B),d=E,x=null;else if(E!==d||U!==x){if(p===100&&v===100||(r.blendEquation(32774),p=100,v=100),U)switch(E){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,0,769,771);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}else switch(E){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFunc(0,769);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}f=null,m=null,g=null,b=null,d=E,x=U}}else u===!0&&(A(3042),u=!1)}function O(E){y!==E&&(E?r.frontFace(2304):r.frontFace(2305),y=E)}function oe(E){E!==0?(Q(2884),E!==w&&(E===1?r.cullFace(1029):E===2?r.cullFace(1028):r.cullFace(1032))):A(2884),w=E}function ce(E,k,J){E?(Q(32823),T===k&&P===J||(r.polygonOffset(k,J),T=k,P=J)):A(32823)}function H(E){E===void 0&&(E=33984+D-1),G!==E&&(r.activeTexture(E),G=E)}return{buffers:{color:i,depth:s,stencil:a},enable:Q,disable:A,bindFramebuffer:function(E,k){return k===null&&l!==null&&(k=l),c[E]!==k&&(r.bindFramebuffer(E,k),c[E]=k,n&&(E===36009&&(c[36160]=k),E===36160&&(c[36009]=k)),!0)},bindXRFramebuffer:function(E){E!==l&&(r.bindFramebuffer(36160,E),l=E)},useProgram:function(E){return h!==E&&(r.useProgram(E),h=E,!0)},setBlending:W,setMaterial:function(E,k){E.side===2?A(2884):Q(2884);let J=E.side===1;k&&(J=!J),O(J),E.blending===1&&E.transparent===!1?W(0):W(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),s.setFunc(E.depthFunc),s.setTest(E.depthTest),s.setMask(E.depthWrite),i.setMask(E.colorWrite);const _=E.stencilWrite;a.setTest(_),_&&(a.setMask(E.stencilWriteMask),a.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),a.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ce(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Q(32926):A(32926)},setFlipSided:O,setCullFace:oe,setLineWidth:function(E){E!==M&&(I&&r.lineWidth(E),M=E)},setPolygonOffset:ce,setScissorTest:function(E){E?Q(3089):A(3089)},activeTexture:H,bindTexture:function(E,k){G===null&&H();let J=z[G];J===void 0&&(J={type:void 0,texture:void 0},z[G]=J),J.type===E&&J.texture===k||(r.bindTexture(E,k||fe[E]),J.type=E,J.texture=k)},unbindTexture:function(){const E=z[G];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},scissor:function(E){re.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),re.copy(E))},viewport:function(E){se.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),se.copy(E))},reset:function(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},G=null,z={},l=null,c={},h=null,u=!1,d=null,p=null,f=null,m=null,v=null,g=null,b=null,x=!1,y=null,w=null,M=null,T=null,P=null,re.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function U_(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let p,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,R){return f?new OffscreenCanvas(A,R):To("canvas")}function v(A,R,V,W){let O=1;if((A.width>W||A.height>W)&&(O=W/Math.max(A.width,A.height)),O<1||R===!0){if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){const oe=R?kf:Math.floor,ce=oe(O*A.width),H=oe(O*A.height);p===void 0&&(p=m(ce,H));const E=V?m(ce,H):p;return E.width=ce,E.height=H,E.getContext("2d").drawImage(A,0,0,ce,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ce+"x"+H+")."),E}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function g(A){return oh(A.width)&&oh(A.height)}function b(A,R){return A.generateMipmaps&&R&&A.minFilter!==1003&&A.minFilter!==1006}function x(A,R,V,W,O=1){r.generateMipmap(A),n.get(R).__maxMipLevel=Math.log2(Math.max(V,W,O))}function y(A,R,V,W){if(o===!1)return R;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let O=R;return R===6403&&(V===5126&&(O=33326),V===5131&&(O=33325),V===5121&&(O=33321)),R===6407&&(V===5126&&(O=34837),V===5131&&(O=34843),V===5121&&(O=32849)),R===6408&&(V===5126&&(O=34836),V===5131&&(O=34842),V===5121&&(O=W===3001?35907:32856)),O!==33325&&O!==33326&&O!==34842&&O!==34836||e.get("EXT_color_buffer_float"),O}function w(A){return A===1003||A===1004||A===1005?9728:9729}function M(A){const R=A.target;R.removeEventListener("dispose",M),function(V){const W=n.get(V);W.__webglInit!==void 0&&(r.deleteTexture(W.__webglTexture),n.remove(V))}(R),R.isVideoTexture&&d.delete(R),a.memory.textures--}function T(A){const R=A.target;R.removeEventListener("dispose",T),function(V){const W=V.texture,O=n.get(V),oe=n.get(W);if(!!V){if(oe.__webglTexture!==void 0&&(r.deleteTexture(oe.__webglTexture),a.memory.textures--),V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)r.deleteFramebuffer(O.__webglFramebuffer[ce]),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[ce]);else r.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer&&r.deleteRenderbuffer(O.__webglColorRenderbuffer),O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer);if(V.isWebGLMultipleRenderTargets)for(let ce=0,H=W.length;ce<H;ce++){const E=n.get(W[ce]);E.__webglTexture&&(r.deleteTexture(E.__webglTexture),a.memory.textures--),n.remove(W[ce])}n.remove(W),n.remove(V)}}(R)}let P=0;function D(A,R){const V=n.get(A);if(A.isVideoTexture&&function(W){const O=a.render.frame;d.get(W)!==O&&(d.set(W,O),W.update())}(A),A.version>0&&V.__version!==A.version){const W=A.image;if(W===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(W.complete!==!1)return void $(V,A,R);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.activeTexture(33984+R),t.bindTexture(3553,V.__webglTexture)}function I(A,R){const V=n.get(A);A.version>0&&V.__version!==A.version?function(W,O,oe){if(O.image.length!==6)return;z(W,O),t.activeTexture(33984+oe),t.bindTexture(34067,W.__webglTexture),r.pixelStorei(37440,O.flipY),r.pixelStorei(37441,O.premultiplyAlpha),r.pixelStorei(3317,O.unpackAlignment),r.pixelStorei(37443,0);const ce=O&&(O.isCompressedTexture||O.image[0].isCompressedTexture),H=O.image[0]&&O.image[0].isDataTexture,E=[];for(let U=0;U<6;U++)E[U]=ce||H?H?O.image[U].image:O.image[U]:v(O.image[U],!1,!0,c);const k=E[0],J=g(k)||o,_=s.convert(O.format),S=s.convert(O.type),F=y(O.internalFormat,_,S,O.encoding);let B;if(G(34067,O,J),ce){for(let U=0;U<6;U++){B=E[U].mipmaps;for(let Z=0;Z<B.length;Z++){const ee=B[Z];O.format!==1023&&O.format!==1022?_!==null?t.compressedTexImage2D(34069+U,Z,F,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+U,Z,F,ee.width,ee.height,0,_,S,ee.data)}}W.__maxMipLevel=B.length-1}else{B=O.mipmaps;for(let U=0;U<6;U++)if(H){t.texImage2D(34069+U,0,F,E[U].width,E[U].height,0,_,S,E[U].data);for(let Z=0;Z<B.length;Z++){const ee=B[Z].image[U].image;t.texImage2D(34069+U,Z+1,F,ee.width,ee.height,0,_,S,ee.data)}}else{t.texImage2D(34069+U,0,F,_,S,E[U]);for(let Z=0;Z<B.length;Z++){const ee=B[Z];t.texImage2D(34069+U,Z+1,F,_,S,ee.image[U])}}W.__maxMipLevel=B.length}b(O,J)&&x(34067,O,k.width,k.height),W.__version=O.version,O.onUpdate&&O.onUpdate(O)}(V,A,R):(t.activeTexture(33984+R),t.bindTexture(34067,V.__webglTexture))}const N={1e3:10497,1001:33071,1002:33648},X={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function G(A,R,V){if(V?(r.texParameteri(A,10242,N[R.wrapS]),r.texParameteri(A,10243,N[R.wrapT]),A!==32879&&A!==35866||r.texParameteri(A,32882,N[R.wrapR]),r.texParameteri(A,10240,X[R.magFilter]),r.texParameteri(A,10241,X[R.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),A!==32879&&A!==35866||r.texParameteri(A,32882,33071),R.wrapS===1001&&R.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,w(R.magFilter)),r.texParameteri(A,10241,w(R.minFilter)),R.minFilter!==1003&&R.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(R.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(r.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function z(A,R){A.__webglInit===void 0&&(A.__webglInit=!0,R.addEventListener("dispose",M),A.__webglTexture=r.createTexture(),a.memory.textures++)}function $(A,R,V){let W=3553;R.isDataTexture2DArray&&(W=35866),R.isDataTexture3D&&(W=32879),z(A,R),t.activeTexture(33984+V),t.bindTexture(W,A.__webglTexture),r.pixelStorei(37440,R.flipY),r.pixelStorei(37441,R.premultiplyAlpha),r.pixelStorei(3317,R.unpackAlignment),r.pixelStorei(37443,0);const O=function(S){return!o&&(S.wrapS!==1001||S.wrapT!==1001||S.minFilter!==1003&&S.minFilter!==1006)}(R)&&g(R.image)===!1,oe=v(R.image,O,!1,h),ce=g(oe)||o,H=s.convert(R.format);let E,k=s.convert(R.type),J=y(R.internalFormat,H,k,R.encoding);G(W,R,ce);const _=R.mipmaps;if(R.isDepthTexture)J=6402,o?J=R.type===1015?36012:R.type===1014?33190:R.type===1020?35056:33189:R.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===1026&&J===6402&&R.type!==1012&&R.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=1012,k=s.convert(R.type)),R.format===1027&&J===6402&&(J=34041,R.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=1020,k=s.convert(R.type))),t.texImage2D(3553,0,J,oe.width,oe.height,0,H,k,null);else if(R.isDataTexture)if(_.length>0&&ce){for(let S=0,F=_.length;S<F;S++)E=_[S],t.texImage2D(3553,S,J,E.width,E.height,0,H,k,E.data);R.generateMipmaps=!1,A.__maxMipLevel=_.length-1}else t.texImage2D(3553,0,J,oe.width,oe.height,0,H,k,oe.data),A.__maxMipLevel=0;else if(R.isCompressedTexture){for(let S=0,F=_.length;S<F;S++)E=_[S],R.format!==1023&&R.format!==1022?H!==null?t.compressedTexImage2D(3553,S,J,E.width,E.height,0,E.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,S,J,E.width,E.height,0,H,k,E.data);A.__maxMipLevel=_.length-1}else if(R.isDataTexture2DArray)t.texImage3D(35866,0,J,oe.width,oe.height,oe.depth,0,H,k,oe.data),A.__maxMipLevel=0;else if(R.isDataTexture3D)t.texImage3D(32879,0,J,oe.width,oe.height,oe.depth,0,H,k,oe.data),A.__maxMipLevel=0;else if(_.length>0&&ce){for(let S=0,F=_.length;S<F;S++)E=_[S],t.texImage2D(3553,S,J,H,k,E);R.generateMipmaps=!1,A.__maxMipLevel=_.length-1}else t.texImage2D(3553,0,J,H,k,oe),A.__maxMipLevel=0;b(R,ce)&&x(W,R,oe.width,oe.height),A.__version=R.version,R.onUpdate&&R.onUpdate(R)}function le(A,R,V,W,O){const oe=s.convert(V.format),ce=s.convert(V.type),H=y(V.internalFormat,oe,ce,V.encoding);O===32879||O===35866?t.texImage3D(O,0,H,R.width,R.height,R.depth,0,oe,ce,null):t.texImage2D(O,0,H,R.width,R.height,0,oe,ce,null),t.bindFramebuffer(36160,A),r.framebufferTexture2D(36160,W,O,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function re(A,R,V){if(r.bindRenderbuffer(36161,A),R.depthBuffer&&!R.stencilBuffer){let W=33189;if(V){const O=R.depthTexture;O&&O.isDepthTexture&&(O.type===1015?W=36012:O.type===1014&&(W=33190));const oe=ue(R);r.renderbufferStorageMultisample(36161,oe,W,R.width,R.height)}else r.renderbufferStorage(36161,W,R.width,R.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(R.depthBuffer&&R.stencilBuffer){if(V){const W=ue(R);r.renderbufferStorageMultisample(36161,W,35056,R.width,R.height)}else r.renderbufferStorage(36161,34041,R.width,R.height);r.framebufferRenderbuffer(36160,33306,36161,A)}else{const W=R.isWebGLMultipleRenderTargets===!0?R.texture[0]:R.texture,O=s.convert(W.format),oe=s.convert(W.type),ce=y(W.internalFormat,O,oe,W.encoding);if(V){const H=ue(R);r.renderbufferStorageMultisample(36161,H,ce,R.width,R.height)}else r.renderbufferStorage(36161,ce,R.width,R.height)}r.bindRenderbuffer(36161,null)}function se(A){const R=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture){if(V)throw new Error("target.depthTexture not supported in Cube render targets");(function(W,O){if(O&&O.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,W),!O.depthTexture||!O.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(O.depthTexture).__webglTexture&&O.depthTexture.image.width===O.width&&O.depthTexture.image.height===O.height||(O.depthTexture.image.width=O.width,O.depthTexture.image.height=O.height,O.depthTexture.needsUpdate=!0),D(O.depthTexture,0);const oe=n.get(O.depthTexture).__webglTexture;if(O.depthTexture.format===1026)r.framebufferTexture2D(36160,36096,3553,oe,0);else{if(O.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");r.framebufferTexture2D(36160,33306,3553,oe,0)}})(R.__webglFramebuffer,A)}else if(V){R.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,R.__webglFramebuffer[W]),R.__webglDepthbuffer[W]=r.createRenderbuffer(),re(R.__webglDepthbuffer[W],A,!1)}else t.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=r.createRenderbuffer(),re(R.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function ue(A){return o&&A.isWebGLMultisampleRenderTarget?Math.min(u,A.samples):0}let fe=!1,Q=!1;this.allocateTextureUnit=function(){const A=P;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),P+=1,A},this.resetTextureUnits=function(){P=0},this.setTexture2D=D,this.setTexture2DArray=function(A,R){const V=n.get(A);A.version>0&&V.__version!==A.version?$(V,A,R):(t.activeTexture(33984+R),t.bindTexture(35866,V.__webglTexture))},this.setTexture3D=function(A,R){const V=n.get(A);A.version>0&&V.__version!==A.version?$(V,A,R):(t.activeTexture(33984+R),t.bindTexture(32879,V.__webglTexture))},this.setTextureCube=I,this.setupRenderTarget=function(A){const R=A.texture,V=n.get(A),W=n.get(R);A.addEventListener("dispose",T),A.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture=r.createTexture(),W.__version=R.version,a.memory.textures++);const O=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,ce=A.isWebGLMultisampleRenderTarget===!0,H=R.isDataTexture3D||R.isDataTexture2DArray,E=g(A)||o;if(!o||R.format!==1022||R.type!==1015&&R.type!==1016||(R.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),O){V.__webglFramebuffer=[];for(let k=0;k<6;k++)V.__webglFramebuffer[k]=r.createFramebuffer()}else if(V.__webglFramebuffer=r.createFramebuffer(),oe)if(i.drawBuffers){const k=A.texture;for(let J=0,_=k.length;J<_;J++){const S=n.get(k[J]);S.__webglTexture===void 0&&(S.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(ce)if(o){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer);const k=s.convert(R.format),J=s.convert(R.type),_=y(R.internalFormat,k,J,R.encoding),S=ue(A);r.renderbufferStorageMultisample(36161,S,_,A.width,A.height),t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,V.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),re(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(O){t.bindTexture(34067,W.__webglTexture),G(34067,R,E);for(let k=0;k<6;k++)le(V.__webglFramebuffer[k],A,R,36064,34069+k);b(R,E)&&x(34067,R,A.width,A.height),t.unbindTexture()}else if(oe){const k=A.texture;for(let J=0,_=k.length;J<_;J++){const S=k[J],F=n.get(S);t.bindTexture(3553,F.__webglTexture),G(3553,S,E),le(V.__webglFramebuffer,A,S,36064+J,3553),b(S,E)&&x(3553,S,A.width,A.height)}t.unbindTexture()}else{let k=3553;H&&(o?k=R.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(k,W.__webglTexture),G(k,R,E),le(V.__webglFramebuffer,A,R,36064,k),b(R,E)&&x(k,R,A.width,A.height,A.depth),t.unbindTexture()}A.depthBuffer&&se(A)},this.updateRenderTargetMipmap=function(A){const R=g(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let W=0,O=V.length;W<O;W++){const oe=V[W];if(b(oe,R)){const ce=A.isWebGLCubeRenderTarget?34067:3553,H=n.get(oe).__webglTexture;t.bindTexture(ce,H),x(ce,oe,A.width,A.height),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.isWebGLMultisampleRenderTarget)if(o){const R=A.width,V=A.height;let W=16384;A.depthBuffer&&(W|=256),A.stencilBuffer&&(W|=1024);const O=n.get(A);t.bindFramebuffer(36008,O.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,O.__webglFramebuffer),r.blitFramebuffer(0,0,R,V,0,0,R,V,W,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,O.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(A,R){A&&A.isWebGLRenderTarget&&(fe===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),fe=!0),A=A.texture),D(A,R)},this.safeSetTextureCube=function(A,R){A&&A.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),A=A.texture),I(A,R)}}function k_(r,e,t){const n=t.isWebGL2;return{convert:function(i){let s;if(i===1009)return 5121;if(i===1017)return 32819;if(i===1018)return 32820;if(i===1019)return 33635;if(i===1010)return 5120;if(i===1011)return 5122;if(i===1012)return 5123;if(i===1013)return 5124;if(i===1014)return 5125;if(i===1015)return 5126;if(i===1016)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===1021)return 6406;if(i===1022)return 6407;if(i===1023)return 6408;if(i===1024)return 6409;if(i===1025)return 6410;if(i===1026)return 6402;if(i===1027)return 34041;if(i===1028)return 6403;if(i===1029)return 36244;if(i===1030)return 33319;if(i===1031)return 33320;if(i===1032)return 36248;if(i===1033)return 36249;if(i===33776||i===33777||i===33778||i===33779){if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===35840||i===35841||i===35842||i===35843){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===36196)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((i===37492||i===37496)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(i===37492)return s.COMPRESSED_RGB8_ETC2;if(i===37496)return s.COMPRESSED_RGBA8_ETC2_EAC}return i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821||i===37840||i===37841||i===37842||i===37843||i===37844||i===37845||i===37846||i===37847||i===37848||i===37849||i===37850||i===37851||i===37852||i===37853?(s=e.get("WEBGL_compressed_texture_astc"),s!==null?i:null):i===36492?(s=e.get("EXT_texture_compression_bptc"),s!==null?i:null):i===1020?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}class km extends dt{constructor(e=[]){super(),this.cameras=e}}km.prototype.isArrayCamera=!0;class jn extends Fe{constructor(){super(),this.type="Group"}}jn.prototype.isGroup=!0;const z_={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z_))),c&&e.hand){a=!0;for(const m of e.hand.values()){const v=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const b=new jn;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[m.jointName]=b,c.add(b)}const g=c.joints[m.jointName];v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=v.radius),g.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class B_ extends Vt{constructor(e,t){super();const n=this,i=e.state;let s=null,a=1,o=null,l="local-floor",c=null,h=null,u=null,d=null,p=null,f=!1,m=null,v=null,g=null,b=null,x=null,y=null;const w=[],M=new Map,T=new dt;T.layers.enable(1),T.viewport=new We;const P=new dt;P.layers.enable(2),P.viewport=new We;const D=[T,P],I=new km;I.layers.enable(1),I.layers.enable(2);let N=null,X=null;function G(Q){const A=M.get(Q.inputSource);A&&A.dispatchEvent({type:Q.type,data:Q.inputSource})}function z(){M.forEach(function(Q,A){Q.disconnect(A)}),M.clear(),N=null,X=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),u&&t.deleteFramebuffer(u),m&&t.deleteFramebuffer(m),v&&t.deleteRenderbuffer(v),g&&t.deleteRenderbuffer(g),u=null,m=null,v=null,g=null,p=null,d=null,h=null,s=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function $(Q){const A=s.inputSources;for(let R=0;R<w.length;R++)M.set(A[R],w[R]);for(let R=0;R<Q.removed.length;R++){const V=Q.removed[R],W=M.get(V);W&&(W.dispatchEvent({type:"disconnected",data:V}),M.delete(V))}for(let R=0;R<Q.added.length;R++){const V=Q.added[R],W=M.get(V);W&&W.dispatchEvent({type:"connected",data:V})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let A=w[Q];return A===void 0&&(A=new zh,w[Q]=A),A.getTargetRaySpace()},this.getControllerGrip=function(Q){let A=w[Q];return A===void 0&&(A=new zh,w[Q]=A),A.getGripSpace()},this.getHand=function(Q){let A=w[Q];return A===void 0&&(A=new zh,w[Q]=A),A.getHandSpace()},this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$);const A=t.getContextAttributes();if(A.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const R={antialias:A.antialias,alpha:A.alpha,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,R),s.updateRenderState({baseLayer:p})}else if(t instanceof WebGLRenderingContext){const R={antialias:!0,alpha:A.alpha,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,R),s.updateRenderState({layers:[p]})}else{f=A.antialias;let R=null;A.depth&&(y=256,A.stencil&&(y|=1024),x=A.stencil?33306:36096,R=A.stencil?35056:33190);const V={colorFormat:A.alpha?32856:32849,depthFormat:R,scaleFactor:a};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(V),u=t.createFramebuffer(),s.updateRenderState({layers:[d]}),f&&(m=t.createFramebuffer(),v=t.createRenderbuffer(),t.bindRenderbuffer(36161,v),t.renderbufferStorageMultisample(36161,4,32856,d.textureWidth,d.textureHeight),i.bindFramebuffer(36160,m),t.framebufferRenderbuffer(36160,36064,36161,v),t.bindRenderbuffer(36161,null),R!==null&&(g=t.createRenderbuffer(),t.bindRenderbuffer(36161,g),t.renderbufferStorageMultisample(36161,4,R,d.textureWidth,d.textureHeight),t.framebufferRenderbuffer(36160,x,36161,g),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await s.requestReferenceSpace(l),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};const le=new C,re=new C;function se(Q,A){A===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(A.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;I.near=P.near=T.near=Q.near,I.far=P.far=T.far=Q.far,N===I.near&&X===I.far||(s.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,X=I.far);const A=Q.parent,R=I.cameras;se(I,A);for(let W=0;W<R.length;W++)se(R[W],A);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),Q.position.copy(I.position),Q.quaternion.copy(I.quaternion),Q.scale.copy(I.scale),Q.matrix.copy(I.matrix),Q.matrixWorld.copy(I.matrixWorld);const V=Q.children;for(let W=0,O=V.length;W<O;W++)V[W].updateMatrixWorld(!0);R.length===2?function(W,O,oe){le.setFromMatrixPosition(O.matrixWorld),re.setFromMatrixPosition(oe.matrixWorld);const ce=le.distanceTo(re),H=O.projectionMatrix.elements,E=oe.projectionMatrix.elements,k=H[14]/(H[10]-1),J=H[14]/(H[10]+1),_=(H[9]+1)/H[5],S=(H[9]-1)/H[5],F=(H[8]-1)/H[0],B=(E[8]+1)/E[0],U=k*F,Z=k*B,ee=ce/(-F+B),ae=ee*-F;O.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ae),W.translateZ(ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const ie=k+ee,te=J+ee,ge=U-ae,me=Z+(ce-ae),xe=_*J/te*ie,we=S*J/te*ie;W.projectionMatrix.makePerspective(ge,me,xe,we,ie,te)}(I,T,P):I.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){return d!==null?d.fixedFoveation:p!==null?p.fixedFoveation:void 0},this.setFoveation=function(Q){d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)};let ue=null;const fe=new nm;fe.setAnimationLoop(function(Q,A){if(c=A.getViewerPose(o),b=A,c!==null){const V=c.views;p!==null&&i.bindXRFramebuffer(p.framebuffer);let W=!1;V.length!==I.cameras.length&&(I.cameras.length=0,W=!0);for(let O=0;O<V.length;O++){const oe=V[O];let ce=null;if(p!==null)ce=p.getViewport(oe);else{const E=h.getViewSubImage(d,oe);i.bindXRFramebuffer(u),E.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,x,3553,E.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,E.colorTexture,0),ce=E.viewport}const H=D[O];H.matrix.fromArray(oe.transform.matrix),H.projectionMatrix.fromArray(oe.projectionMatrix),H.viewport.set(ce.x,ce.y,ce.width,ce.height),O===0&&I.matrix.copy(H.matrix),W===!0&&I.cameras.push(H)}f&&(i.bindXRFramebuffer(m),y!==null&&t.clear(y))}const R=s.inputSources;for(let V=0;V<w.length;V++){const W=w[V],O=R[V];W.update(O,A,o)}if(ue&&ue(Q,A),f){const V=d.textureWidth,W=d.textureHeight;i.bindFramebuffer(36008,m),i.bindFramebuffer(36009,u),t.invalidateFramebuffer(36008,[x]),t.invalidateFramebuffer(36009,[x]),t.blitFramebuffer(0,0,V,W,0,0,V,W,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,m)}b=null}),this.setAnimationLoop=function(Q){ue=Q},this.dispose=function(){}}}function H_(r){function e(n,i){n.opacity.value=i.opacity,i.color&&n.diffuse.value.copy(i.color),i.emissive&&n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(n.map.value=i.map),i.alphaMap&&(n.alphaMap.value=i.alphaMap),i.specularMap&&(n.specularMap.value=i.specularMap),i.alphaTest>0&&(n.alphaTest.value=i.alphaTest);const s=r.get(i).envMap;if(s){n.envMap.value=s,n.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=i.reflectivity,n.ior.value=i.ior,n.refractionRatio.value=i.refractionRatio;const l=r.get(s).__maxMipLevel;l!==void 0&&(n.maxMipLevel.value=l)}let a,o;i.lightMap&&(n.lightMap.value=i.lightMap,n.lightMapIntensity.value=i.lightMapIntensity),i.aoMap&&(n.aoMap.value=i.aoMap,n.aoMapIntensity.value=i.aoMapIntensity),i.map?a=i.map:i.specularMap?a=i.specularMap:i.displacementMap?a=i.displacementMap:i.normalMap?a=i.normalMap:i.bumpMap?a=i.bumpMap:i.roughnessMap?a=i.roughnessMap:i.metalnessMap?a=i.metalnessMap:i.alphaMap?a=i.alphaMap:i.emissiveMap?a=i.emissiveMap:i.clearcoatMap?a=i.clearcoatMap:i.clearcoatNormalMap?a=i.clearcoatNormalMap:i.clearcoatRoughnessMap?a=i.clearcoatRoughnessMap:i.specularIntensityMap?a=i.specularIntensityMap:i.specularTintMap?a=i.specularTintMap:i.transmissionMap?a=i.transmissionMap:i.thicknessMap&&(a=i.thicknessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),n.uvTransform.value.copy(a.matrix)),i.aoMap?o=i.aoMap:i.lightMap&&(o=i.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),n.uv2Transform.value.copy(o.matrix))}function t(n,i){n.roughness.value=i.roughness,n.metalness.value=i.metalness,i.roughnessMap&&(n.roughnessMap.value=i.roughnessMap),i.metalnessMap&&(n.metalnessMap.value=i.metalnessMap),i.emissiveMap&&(n.emissiveMap.value=i.emissiveMap),i.bumpMap&&(n.bumpMap.value=i.bumpMap,n.bumpScale.value=i.bumpScale,i.side===1&&(n.bumpScale.value*=-1)),i.normalMap&&(n.normalMap.value=i.normalMap,n.normalScale.value.copy(i.normalScale),i.side===1&&n.normalScale.value.negate()),i.displacementMap&&(n.displacementMap.value=i.displacementMap,n.displacementScale.value=i.displacementScale,n.displacementBias.value=i.displacementBias),r.get(i).envMap&&(n.envMapIntensity.value=i.envMapIntensity)}return{refreshFogUniforms:function(n,i){n.fogColor.value.copy(i.color),i.isFog?(n.fogNear.value=i.near,n.fogFar.value=i.far):i.isFogExp2&&(n.fogDensity.value=i.density)},refreshMaterialUniforms:function(n,i,s,a,o){i.isMeshBasicMaterial?e(n,i):i.isMeshLambertMaterial?(e(n,i),function(l,c){c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap)}(n,i)):i.isMeshToonMaterial?(e(n,i),function(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshPhongMaterial?(e(n,i),function(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshStandardMaterial?(e(n,i),i.isMeshPhysicalMaterial?function(l,c,h){t(l,c),l.ior.value=c.ior,c.sheen>0&&(l.sheenTint.value.copy(c.sheenTint).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),l.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===1&&l.clearcoatNormalScale.value.negate())),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=h.texture,l.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap),l.attenuationDistance.value=c.attenuationDistance,l.attenuationTint.value.copy(c.attenuationTint)),l.specularIntensity.value=c.specularIntensity,l.specularTint.value.copy(c.specularTint),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap),c.specularTintMap&&(l.specularTintMap.value=c.specularTintMap)}(n,i,o):t(n,i)):i.isMeshMatcapMaterial?(e(n,i),function(l,c){c.matcap&&(l.matcap.value=c.matcap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshDepthMaterial?(e(n,i),function(l,c){c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshDistanceMaterial?(e(n,i),function(l,c){c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias),l.referencePosition.value.copy(c.referencePosition),l.nearDistance.value=c.nearDistance,l.farDistance.value=c.farDistance}(n,i)):i.isMeshNormalMaterial?(e(n,i),function(l,c){c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isLineBasicMaterial?(function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity}(n,i),i.isLineDashedMaterial&&function(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}(n,i)):i.isPointsMaterial?function(l,c,h,u){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*h,l.scale.value=.5*u,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let d;c.map?d=c.map:c.alphaMap&&(d=c.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),l.uvTransform.value.copy(d.matrix))}(n,i,s,a):i.isSpriteMaterial?function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let h;c.map?h=c.map:c.alphaMap&&(h=c.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),l.uvTransform.value.copy(h.matrix))}(n,i):i.isShadowMaterial?(n.color.value.copy(i.color),n.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function Ge(r={}){const e=r.canvas!==void 0?r.canvas:function(){const L=To("canvas");return L.style.display="block",L}(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0&&r.alpha,i=r.depth===void 0||r.depth,s=r.stencil===void 0||r.stencil,a=r.antialias!==void 0&&r.antialias,o=r.premultipliedAlpha===void 0||r.premultipliedAlpha,l=r.preserveDrawingBuffer!==void 0&&r.preserveDrawingBuffer,c=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0&&r.failIfMajorPerformanceCaveat;let u=null,d=null;const p=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const m=this;let v=!1,g=0,b=0,x=null,y=-1,w=null;const M=new We,T=new We;let P=null,D=e.width,I=e.height,N=1,X=null,G=null;const z=new We(0,0,D,I),$=new We(0,0,D,I);let le=!1;const re=[],se=new jo;let ue=!1,fe=!1,Q=null;const A=new ye,R=new C,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return x===null?N:1}let O,oe,ce,H,E,k,J,_,S,F,B,U,Z,ee,ae,ie,te,ge,me,xe,we,Se,Ae,K=t;function He(L,Y){for(let q=0;q<L.length;q++){const j=L[q],ne=e.getContext(j,Y);if(ne!==null)return ne}return null}try{const L={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",Ms,!1),e.addEventListener("webglcontextrestored",ii,!1),K===null){const Y=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&Y.shift(),K=He(Y,L),K===null)throw He(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function Ft(){O=new Sw(K),oe=new vw(K,O,r),O.init(oe),Se=new k_(K,O,oe),ce=new N_(K,O,oe),re[0]=1029,H=new Aw(K),E=new L_,k=new U_(K,O,ce,E,oe,Se,H),J=new xw(m),_=new Mw(m),S=new pw(K,oe),Ae=new mw(K,O,S,oe),F=new Tw(K,S,H,Ae),B=new Pw(K,F,S,H),me=new Cw(K,oe,k),ie=new yw(E),U=new A_(m,J,_,O,oe,Ae,ie),Z=new H_(E),ee=new C_(E),ae=new O_(O,oe),ge=new fw(m,J,ce,B,o),te=new Um(m,B,oe),xe=new gw(K,O,H,oe),we=new Ew(K,O,H,oe),H.programs=U.programs,m.capabilities=oe,m.extensions=O,m.properties=E,m.renderLists=ee,m.shadowMap=te,m.state=ce,m.info=H}Ft();const rt=new B_(m,K);function Ms(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ii(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const L=H.autoReset,Y=te.enabled,q=te.autoUpdate,j=te.needsUpdate,ne=te.type;Ft(),H.autoReset=L,te.enabled=Y,te.autoUpdate=q,te.needsUpdate=j,te.type=ne}function Ss(L){const Y=L.target;Y.removeEventListener("dispose",Ss),function(q){(function(j){const ne=E.get(j).programs;ne!==void 0&&ne.forEach(function(_e){U.releaseProgram(_e)})})(q),E.remove(q)}(Y)}this.xr=rt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const L=O.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=O.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(L){L!==void 0&&(N=L,this.setSize(D,I,!1))},this.getSize=function(L){return L.set(D,I)},this.setSize=function(L,Y,q){rt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(D=L,I=Y,e.width=Math.floor(L*N),e.height=Math.floor(Y*N),q!==!1&&(e.style.width=L+"px",e.style.height=Y+"px"),this.setViewport(0,0,L,Y))},this.getDrawingBufferSize=function(L){return L.set(D*N,I*N).floor()},this.setDrawingBufferSize=function(L,Y,q){D=L,I=Y,N=q,e.width=Math.floor(L*q),e.height=Math.floor(Y*q),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(M)},this.getViewport=function(L){return L.copy(z)},this.setViewport=function(L,Y,q,j){L.isVector4?z.set(L.x,L.y,L.z,L.w):z.set(L,Y,q,j),ce.viewport(M.copy(z).multiplyScalar(N).floor())},this.getScissor=function(L){return L.copy($)},this.setScissor=function(L,Y,q,j){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,Y,q,j),ce.scissor(T.copy($).multiplyScalar(N).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(L){ce.setScissorTest(le=L)},this.setOpaqueSort=function(L){X=L},this.setTransparentSort=function(L){G=L},this.getClearColor=function(L){return L.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(L,Y,q){let j=0;(L===void 0||L)&&(j|=16384),(Y===void 0||Y)&&(j|=256),(q===void 0||q)&&(j|=1024),K.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ms,!1),e.removeEventListener("webglcontextrestored",ii,!1),ee.dispose(),ae.dispose(),E.dispose(),J.dispose(),_.dispose(),B.dispose(),Ae.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",zt),rt.removeEventListener("sessionend",Ts),Q&&(Q.dispose(),Q=null),Di.stop()},this.renderBufferImmediate=function(L,Y){Ae.initAttributes();const q=E.get(L);L.hasPositions&&!q.position&&(q.position=K.createBuffer()),L.hasNormals&&!q.normal&&(q.normal=K.createBuffer()),L.hasUvs&&!q.uv&&(q.uv=K.createBuffer()),L.hasColors&&!q.color&&(q.color=K.createBuffer());const j=Y.getAttributes();L.hasPositions&&(K.bindBuffer(34962,q.position),K.bufferData(34962,L.positionArray,35048),Ae.enableAttribute(j.position.location),K.vertexAttribPointer(j.position.location,3,5126,!1,0,0)),L.hasNormals&&(K.bindBuffer(34962,q.normal),K.bufferData(34962,L.normalArray,35048),Ae.enableAttribute(j.normal.location),K.vertexAttribPointer(j.normal.location,3,5126,!1,0,0)),L.hasUvs&&(K.bindBuffer(34962,q.uv),K.bufferData(34962,L.uvArray,35048),Ae.enableAttribute(j.uv.location),K.vertexAttribPointer(j.uv.location,2,5126,!1,0,0)),L.hasColors&&(K.bindBuffer(34962,q.color),K.bufferData(34962,L.colorArray,35048),Ae.enableAttribute(j.color.location),K.vertexAttribPointer(j.color.location,3,5126,!1,0,0)),Ae.disableUnusedAttributes(),K.drawArrays(4,0,L.count),L.count=0},this.renderBufferDirect=function(L,Y,q,j,ne,_e){Y===null&&(Y=V);const be=ne.isMesh&&ne.matrixWorld.determinant()<0,Ee=Wd(L,Y,q,j,ne);ce.setMaterial(j,be);let Re=q.index;const Ve=q.attributes.position;if(Re===null){if(Ve===void 0||Ve.count===0)return}else if(Re.count===0)return;let Ue,Ce=1;j.wireframe===!0&&(Re=F.getWireframeAttribute(q),Ce=2),Ae.setup(ne,j,Ee,q,Re);let st=xe;Re!==null&&(Ue=S.get(Re),st=we,st.setIndex(Ue));const Fi=Re!==null?Re.count:Ve.count,Le=q.drawRange.start*Ce,Es=q.drawRange.count*Ce,ht=_e!==null?_e.start*Ce:0,Oi=_e!==null?_e.count*Ce:1/0,Ni=Math.max(Le,ht),Ui=Math.min(Fi,Le+Es,ht+Oi)-1,ri=Math.max(0,Ui-Ni+1);if(ri!==0){if(ne.isMesh)j.wireframe===!0?(ce.setLineWidth(j.wireframeLinewidth*W()),st.setMode(1)):st.setMode(4);else if(ne.isLine){let tt=j.linewidth;tt===void 0&&(tt=1),ce.setLineWidth(tt*W()),ne.isLineSegments?st.setMode(1):ne.isLineLoop?st.setMode(2):st.setMode(3)}else ne.isPoints?st.setMode(0):ne.isSprite&&st.setMode(4);if(ne.isInstancedMesh)st.renderInstances(Ni,ri,ne.count);else if(q.isInstancedBufferGeometry){const tt=Math.min(q.instanceCount,q._maxInstanceCount);st.renderInstances(Ni,ri,tt)}else st.render(Ni,ri)}},this.compile=function(L,Y){d=ae.get(L),d.init(),f.push(d),L.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights(m.physicallyCorrectLights),L.traverse(function(q){const j=q.material;if(j)if(Array.isArray(j))for(let ne=0;ne<j.length;ne++)Kl(j[ne],L,q);else Kl(j,L,q)}),f.pop(),d=null};let ft=null;function zt(){Di.stop()}function Ts(){Di.start()}const Di=new nm;function Hd(L,Y,q,j){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||se.intersectsSprite(L)){j&&R.setFromMatrixPosition(L.matrixWorld).applyMatrix4(A);const _e=B.update(L),be=L.material;be.visible&&u.push(L,_e,be,q,R.z,null)}}else if(L.isImmediateRenderObject)j&&R.setFromMatrixPosition(L.matrixWorld).applyMatrix4(A),u.push(L,null,L.material,q,R.z,null);else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==H.render.frame&&(L.skeleton.update(),L.skeleton.frame=H.render.frame),!L.frustumCulled||se.intersectsObject(L))){j&&R.setFromMatrixPosition(L.matrixWorld).applyMatrix4(A);const _e=B.update(L),be=L.material;if(Array.isArray(be)){const Ee=_e.groups;for(let Re=0,Ve=Ee.length;Re<Ve;Re++){const Ue=Ee[Re],Ce=be[Ue.materialIndex];Ce&&Ce.visible&&u.push(L,_e,Ce,q,R.z,Ue)}}else be.visible&&u.push(L,_e,be,q,R.z,null)}}const ne=L.children;for(let _e=0,be=ne.length;_e<be;_e++)Hd(ne[_e],Y,q,j)}function Vd(L,Y,q,j){const ne=L.opaque,_e=L.transmissive,be=L.transparent;d.setupLightsView(q),_e.length>0&&function(Ee,Re,Ve){if(Q===null){const st=a===!0&&oe.isWebGL2===!0;Q=new(st?Bf:Ut)(1024,1024,{generateMipmaps:!0,type:Se.convert(1016)!==null?1016:1009,minFilter:1008,magFilter:1003,wrapS:1001,wrapT:1001})}const Ue=m.getRenderTarget();m.setRenderTarget(Q),m.clear();const Ce=m.toneMapping;m.toneMapping=0,Xa(Ee,Re,Ve),m.toneMapping=Ce,k.updateMultisampleRenderTarget(Q),k.updateRenderTargetMipmap(Q),m.setRenderTarget(Ue)}(ne,Y,q),j&&ce.viewport(M.copy(j)),ne.length>0&&Xa(ne,Y,q),_e.length>0&&Xa(_e,Y,q),be.length>0&&Xa(be,Y,q)}function Xa(L,Y,q){const j=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,_e=L.length;ne<_e;ne++){const be=L[ne],Ee=be.object,Re=be.geometry,Ve=j===null?be.material:j,Ue=be.group;Ee.layers.test(q.layers)&&Qy(Ee,Y,q,Re,Ve,Ue)}}function Qy(L,Y,q,j,ne,_e){if(L.onBeforeRender(m,Y,q,j,ne,_e),L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(m,Y,q,j,L,_e),L.isImmediateRenderObject){const be=Wd(q,Y,j,ne,L);ce.setMaterial(ne),Ae.reset(),function(Ee,Re){Ee.render(function(Ve){m.renderBufferImmediate(Ve,Re)})}(L,be)}else ne.transparent===!0&&ne.side===2?(ne.side=1,ne.needsUpdate=!0,m.renderBufferDirect(q,Y,j,ne,L,_e),ne.side=0,ne.needsUpdate=!0,m.renderBufferDirect(q,Y,j,ne,L,_e),ne.side=2):m.renderBufferDirect(q,Y,j,ne,L,_e);L.onAfterRender(m,Y,q,j,ne,_e)}function Kl(L,Y,q){Y.isScene!==!0&&(Y=V);const j=E.get(L),ne=d.state.lights,_e=d.state.shadowsArray,be=ne.state.version,Ee=U.getParameters(L,ne.state,_e,Y,q),Re=U.getProgramCacheKey(Ee);let Ve=j.programs;j.environment=L.isMeshStandardMaterial?Y.environment:null,j.fog=Y.fog,j.envMap=(L.isMeshStandardMaterial?_:J).get(L.envMap||j.environment),Ve===void 0&&(L.addEventListener("dispose",Ss),Ve=new Map,j.programs=Ve);let Ue=Ve.get(Re);if(Ue!==void 0){if(j.currentProgram===Ue&&j.lightsStateVersion===be)return Gd(L,Ee),Ue}else Ee.uniforms=U.getUniforms(L),L.onBuild(Ee,m),L.onBeforeCompile(Ee,m),Ue=U.acquireProgram(Ee,Re),Ve.set(Re,Ue),j.uniforms=Ee.uniforms;const Ce=j.uniforms;(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(Ce.clippingPlanes=ie.uniform),Gd(L,Ee),j.needsLights=function(Le){return Le.isMeshLambertMaterial||Le.isMeshToonMaterial||Le.isMeshPhongMaterial||Le.isMeshStandardMaterial||Le.isShadowMaterial||Le.isShaderMaterial&&Le.lights===!0}(L),j.lightsStateVersion=be,j.needsLights&&(Ce.ambientLightColor.value=ne.state.ambient,Ce.lightProbe.value=ne.state.probe,Ce.directionalLights.value=ne.state.directional,Ce.directionalLightShadows.value=ne.state.directionalShadow,Ce.spotLights.value=ne.state.spot,Ce.spotLightShadows.value=ne.state.spotShadow,Ce.rectAreaLights.value=ne.state.rectArea,Ce.ltc_1.value=ne.state.rectAreaLTC1,Ce.ltc_2.value=ne.state.rectAreaLTC2,Ce.pointLights.value=ne.state.point,Ce.pointLightShadows.value=ne.state.pointShadow,Ce.hemisphereLights.value=ne.state.hemi,Ce.directionalShadowMap.value=ne.state.directionalShadowMap,Ce.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ce.spotShadowMap.value=ne.state.spotShadowMap,Ce.spotShadowMatrix.value=ne.state.spotShadowMatrix,Ce.pointShadowMap.value=ne.state.pointShadowMap,Ce.pointShadowMatrix.value=ne.state.pointShadowMatrix);const st=Ue.getUniforms(),Fi=Si.seqWithValue(st.seq,Ce);return j.currentProgram=Ue,j.uniformsList=Fi,Ue}function Gd(L,Y){const q=E.get(L);q.outputEncoding=Y.outputEncoding,q.instancing=Y.instancing,q.skinning=Y.skinning,q.morphTargets=Y.morphTargets,q.morphNormals=Y.morphNormals,q.morphTargetsCount=Y.morphTargetsCount,q.numClippingPlanes=Y.numClippingPlanes,q.numIntersection=Y.numClipIntersection,q.vertexAlphas=Y.vertexAlphas,q.vertexTangents=Y.vertexTangents}function Wd(L,Y,q,j,ne){Y.isScene!==!0&&(Y=V),k.resetTextureUnits();const _e=Y.fog,be=j.isMeshStandardMaterial?Y.environment:null,Ee=x===null?m.outputEncoding:x.texture.encoding,Re=(j.isMeshStandardMaterial?_:J).get(j.envMap||be),Ve=j.vertexColors===!0&&!!q&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!j.normalMap&&!!q&&!!q.attributes.tangent,Ce=!!q&&!!q.morphAttributes.position,st=!!q&&!!q.morphAttributes.normal,Fi=q&&q.morphAttributes.position?q.morphAttributes.position.length:0,Le=E.get(j),Es=d.state.lights;if(ue===!0&&(fe===!0||L!==w)){const sn=L===w&&j.id===y;ie.setState(j,L,sn)}let ht=!1;j.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==Es.state.version||Le.outputEncoding!==Ee||ne.isInstancedMesh&&Le.instancing===!1?ht=!0:ne.isInstancedMesh||Le.instancing!==!0?ne.isSkinnedMesh&&Le.skinning===!1?ht=!0:ne.isSkinnedMesh||Le.skinning!==!0?Le.envMap!==Re||j.fog&&Le.fog!==_e?ht=!0:Le.numClippingPlanes===void 0||Le.numClippingPlanes===ie.numPlanes&&Le.numIntersection===ie.numIntersection?(Le.vertexAlphas!==Ve||Le.vertexTangents!==Ue||Le.morphTargets!==Ce||Le.morphNormals!==st||oe.isWebGL2===!0&&Le.morphTargetsCount!==Fi)&&(ht=!0):ht=!0:ht=!0:ht=!0:(ht=!0,Le.__version=j.version);let Oi=Le.currentProgram;ht===!0&&(Oi=Kl(j,Y,ne));let Ni=!1,Ui=!1,ri=!1;const tt=Oi.getUniforms(),As=Le.uniforms;if(ce.useProgram(Oi.program)&&(Ni=!0,Ui=!0,ri=!0),j.id!==y&&(y=j.id,Ui=!0),Ni||w!==L){if(tt.setValue(K,"projectionMatrix",L.projectionMatrix),oe.logarithmicDepthBuffer&&tt.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),w!==L&&(w=L,Ui=!0,ri=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const sn=tt.map.cameraPosition;sn!==void 0&&sn.setValue(K,R.setFromMatrixPosition(L.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&tt.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||ne.isSkinnedMesh)&&tt.setValue(K,"viewMatrix",L.matrixWorldInverse)}if(ne.isSkinnedMesh){tt.setOptional(K,ne,"bindMatrix"),tt.setOptional(K,ne,"bindMatrixInverse");const sn=ne.skeleton;sn&&(oe.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),tt.setValue(K,"boneTexture",sn.boneTexture,k),tt.setValue(K,"boneTextureSize",sn.boneTextureSize)):tt.setOptional(K,sn,"boneMatrices"))}var gn,rn;return!q||q.morphAttributes.position===void 0&&q.morphAttributes.normal===void 0||me.update(ne,q,j,Oi),(Ui||Le.receiveShadow!==ne.receiveShadow)&&(Le.receiveShadow=ne.receiveShadow,tt.setValue(K,"receiveShadow",ne.receiveShadow)),Ui&&(tt.setValue(K,"toneMappingExposure",m.toneMappingExposure),Le.needsLights&&(rn=ri,(gn=As).ambientLightColor.needsUpdate=rn,gn.lightProbe.needsUpdate=rn,gn.directionalLights.needsUpdate=rn,gn.directionalLightShadows.needsUpdate=rn,gn.pointLights.needsUpdate=rn,gn.pointLightShadows.needsUpdate=rn,gn.spotLights.needsUpdate=rn,gn.spotLightShadows.needsUpdate=rn,gn.rectAreaLights.needsUpdate=rn,gn.hemisphereLights.needsUpdate=rn),_e&&j.fog&&Z.refreshFogUniforms(As,_e),Z.refreshMaterialUniforms(As,j,N,I,Q),Si.upload(K,Le.uniformsList,As,k)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Si.upload(K,Le.uniformsList,As,k),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&tt.setValue(K,"center",ne.center),tt.setValue(K,"modelViewMatrix",ne.modelViewMatrix),tt.setValue(K,"normalMatrix",ne.normalMatrix),tt.setValue(K,"modelMatrix",ne.matrixWorld),Oi}Di.setAnimationLoop(function(L){ft&&ft(L)}),typeof window!="undefined"&&Di.setContext(window),this.setAnimationLoop=function(L){ft=L,rt.setAnimationLoop(L),L===null?Di.stop():Di.start()},rt.addEventListener("sessionstart",zt),rt.addEventListener("sessionend",Ts),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(v===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(Y),Y=rt.getCamera()),L.isScene===!0&&L.onBeforeRender(m,L,Y,x),d=ae.get(L,f.length),d.init(),f.push(d),A.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),se.setFromProjectionMatrix(A),fe=this.localClippingEnabled,ue=ie.init(this.clippingPlanes,fe,Y),u=ee.get(L,p.length),u.init(),p.push(u),Hd(L,Y,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(X,G),ue===!0&&ie.beginShadows();const q=d.state.shadowsArray;if(te.render(q,L,Y),ue===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(u,L),d.setupLights(m.physicallyCorrectLights),Y.isArrayCamera){const j=Y.cameras;for(let ne=0,_e=j.length;ne<_e;ne++){const be=j[ne];Vd(u,L,be,be.viewport)}}else Vd(u,L,Y);x!==null&&(k.updateMultisampleRenderTarget(x),k.updateRenderTargetMipmap(x)),L.isScene===!0&&L.onAfterRender(m,L,Y),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1),Ae.resetDefaultState(),y=-1,w=null,f.pop(),d=f.length>0?f[f.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTarget=function(L,Y=0,q=0){x=L,g=Y,b=q,L&&E.get(L).__webglFramebuffer===void 0&&k.setupRenderTarget(L);let j=null,ne=!1,_e=!1;if(L){const be=L.texture;(be.isDataTexture3D||be.isDataTexture2DArray)&&(_e=!0);const Ee=E.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(j=Ee[Y],ne=!0):j=L.isWebGLMultisampleRenderTarget?E.get(L).__webglMultisampledFramebuffer:Ee,M.copy(L.viewport),T.copy(L.scissor),P=L.scissorTest}else M.copy(z).multiplyScalar(N).floor(),T.copy($).multiplyScalar(N).floor(),P=le;if(ce.bindFramebuffer(36160,j)&&oe.drawBuffers){let be=!1;if(L)if(L.isWebGLMultipleRenderTargets){const Ee=L.texture;if(re.length!==Ee.length||re[0]!==36064){for(let Re=0,Ve=Ee.length;Re<Ve;Re++)re[Re]=36064+Re;re.length=Ee.length,be=!0}}else re.length===1&&re[0]===36064||(re[0]=36064,re.length=1,be=!0);else re.length===1&&re[0]===1029||(re[0]=1029,re.length=1,be=!0);be&&(oe.isWebGL2?K.drawBuffers(re):O.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}if(ce.viewport(M),ce.scissor(T),ce.setScissorTest(P),ne){const be=E.get(L.texture);K.framebufferTexture2D(36160,36064,34069+Y,be.__webglTexture,q)}else if(_e){const be=E.get(L.texture),Ee=Y||0;K.framebufferTextureLayer(36160,36064,be.__webglTexture,q||0,Ee)}y=-1},this.readRenderTargetPixels=function(L,Y,q,j,ne,_e,be){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=E.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){ce.bindFramebuffer(36160,Ee);try{const Re=L.texture,Ve=Re.format,Ue=Re.type;if(Ve!==1023&&Se.convert(Ve)!==K.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const Ce=Ue===1016&&(O.has("EXT_color_buffer_half_float")||oe.isWebGL2&&O.has("EXT_color_buffer_float"));if(!(Ue===1009||Se.convert(Ue)===K.getParameter(35738)||Ue===1015&&(oe.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float"))||Ce))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");K.checkFramebufferStatus(36160)===36053?Y>=0&&Y<=L.width-j&&q>=0&&q<=L.height-ne&&K.readPixels(Y,q,j,ne,Se.convert(Ve),Se.convert(Ue),_e):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Re=x!==null?E.get(x).__webglFramebuffer:null;ce.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(L,Y,q=0){const j=Math.pow(2,-q),ne=Math.floor(Y.image.width*j),_e=Math.floor(Y.image.height*j);let be=Se.convert(Y.format);oe.isWebGL2&&(be===6407&&(be=32849),be===6408&&(be=32856)),k.setTexture2D(Y,0),K.copyTexImage2D(3553,q,be,L.x,L.y,ne,_e,0),ce.unbindTexture()},this.copyTextureToTexture=function(L,Y,q,j=0){const ne=Y.image.width,_e=Y.image.height,be=Se.convert(q.format),Ee=Se.convert(q.type);k.setTexture2D(q,0),K.pixelStorei(37440,q.flipY),K.pixelStorei(37441,q.premultiplyAlpha),K.pixelStorei(3317,q.unpackAlignment),Y.isDataTexture?K.texSubImage2D(3553,j,L.x,L.y,ne,_e,be,Ee,Y.image.data):Y.isCompressedTexture?K.compressedTexSubImage2D(3553,j,L.x,L.y,Y.mipmaps[0].width,Y.mipmaps[0].height,be,Y.mipmaps[0].data):K.texSubImage2D(3553,j,L.x,L.y,be,Ee,Y.image),j===0&&q.generateMipmaps&&K.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,q,j,ne=0){if(m.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const _e=L.max.x-L.min.x+1,be=L.max.y-L.min.y+1,Ee=L.max.z-L.min.z+1,Re=Se.convert(j.format),Ve=Se.convert(j.type);let Ue;if(j.isDataTexture3D)k.setTexture3D(j,0),Ue=32879;else{if(!j.isDataTexture2DArray)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");k.setTexture2DArray(j,0),Ue=35866}K.pixelStorei(37440,j.flipY),K.pixelStorei(37441,j.premultiplyAlpha),K.pixelStorei(3317,j.unpackAlignment);const Ce=K.getParameter(3314),st=K.getParameter(32878),Fi=K.getParameter(3316),Le=K.getParameter(3315),Es=K.getParameter(32877),ht=q.isCompressedTexture?q.mipmaps[0]:q.image;K.pixelStorei(3314,ht.width),K.pixelStorei(32878,ht.height),K.pixelStorei(3316,L.min.x),K.pixelStorei(3315,L.min.y),K.pixelStorei(32877,L.min.z),q.isDataTexture||q.isDataTexture3D?K.texSubImage3D(Ue,ne,Y.x,Y.y,Y.z,_e,be,Ee,Re,Ve,ht.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ue,ne,Y.x,Y.y,Y.z,_e,be,Ee,Re,ht.data)):K.texSubImage3D(Ue,ne,Y.x,Y.y,Y.z,_e,be,Ee,Re,Ve,ht),K.pixelStorei(3314,Ce),K.pixelStorei(32878,st),K.pixelStorei(3316,Fi),K.pixelStorei(3315,Le),K.pixelStorei(32877,Es),ne===0&&j.generateMipmaps&&K.generateMipmap(Ue),ce.unbindTexture()},this.initTexture=function(L){k.setTexture2D(L,0),ce.unbindTexture()},this.resetState=function(){g=0,b=0,x=null,ce.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}(class extends Ge{}).prototype.isWebGL1Renderer=!0;class Mn extends Fe{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Mn.prototype.isScene=!0;class jr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}jr.prototype.isInterleavedBuffer=!0;const it=new C;class qr{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new je(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}qr.prototype.isInterleavedBufferAttribute=!0;class zm extends ot{constructor(e){super(),this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}let Xr;zm.prototype.isSpriteMaterial=!0;const Js=new C,Yr=new C,$r=new C,Jr=new he,Zs=new he,Bm=new ye,Yo=new C,Ks=new C,$o=new C,Hm=new he,Bh=new he,Vm=new he;function Jo(r,e,t,n,i,s){Jr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Zs.x=s*Jr.x-i*Jr.y,Zs.y=i*Jr.x+s*Jr.y):Zs.copy(Jr),r.copy(e),r.x+=Zs.x,r.y+=Zs.y,r.applyMatrix4(Bm)}(class extends Fe{constructor(r){if(super(),this.type="Sprite",Xr===void 0){Xr=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new jr(e,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new qr(t,3,0,!1)),Xr.setAttribute("uv",new qr(t,2,3,!1))}this.geometry=Xr,this.material=r!==void 0?r:new zm,this.center=new he(.5,.5)}raycast(r,e){r.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),Bm.copy(r.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(r.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),r.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-$r.z);const t=this.material.rotation;let n,i;t!==0&&(i=Math.cos(t),n=Math.sin(t));const s=this.center;Jo(Yo.set(-.5,-.5,0),$r,s,Yr,n,i),Jo(Ks.set(.5,-.5,0),$r,s,Yr,n,i),Jo($o.set(.5,.5,0),$r,s,Yr,n,i),Hm.set(0,0),Bh.set(1,0),Vm.set(1,1);let a=r.ray.intersectTriangle(Yo,Ks,$o,!1,Js);if(a===null&&(Jo(Ks.set(-.5,.5,0),$r,s,Yr,n,i),Bh.set(0,1),a=r.ray.intersectTriangle(Yo,$o,Ks,!1,Js),a===null))return;const o=r.ray.origin.distanceTo(Js);o<r.near||o>r.far||e.push({distance:o,point:Js.clone(),uv:at.getUV(Js,Yo,Ks,$o,Hm,Bh,Vm,new he),face:null,object:this})}copy(r){return super.copy(r),r.center!==void 0&&this.center.copy(r.center),this.material=r.material,this}}).prototype.isSprite=!0;const Gm=new C,Wm=new We,jm=new We,V_=new C,qm=new ye;class Hh extends Me{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ye,this.bindMatrixInverse=new ye}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Wm.fromBufferAttribute(i.attributes.skinIndex,e),jm.fromBufferAttribute(i.attributes.skinWeight,e),Gm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=jm.getComponent(s);if(a!==0){const o=Wm.getComponent(s);qm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(V_.copy(Gm).applyMatrix4(qm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Hh.prototype.isSkinnedMesh=!0;class Vh extends Fe{constructor(){super(),this.type="Bone"}}Vh.prototype.isBone=!0;class Gh extends nt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Gh.prototype.isDataTexture=!0;const Xm=new ye,G_=new ye;class Wh{constructor(e=[],t=[]){this.uuid=$t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:G_;Xm.multiplyMatrices(o,t[s]),Xm.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new Wh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=Uf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gh(t,e,e,1023,1015);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Vh),this.bones.push(a),this.boneInverses.push(new ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class jh extends je{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}jh.prototype.isInstancedBufferAttribute=!0;const Ym=new ye,$m=new ye,Zo=[],Qs=new Me;(class extends Me{constructor(r,e,t){super(r,e),this.instanceMatrix=new jh(new Float32Array(16*t),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}copy(r){return super.copy(r),this.instanceMatrix.copy(r.instanceMatrix),r.instanceColor!==null&&(this.instanceColor=r.instanceColor.clone()),this.count=r.count,this}getColorAt(r,e){e.fromArray(this.instanceColor.array,3*r)}getMatrixAt(r,e){e.fromArray(this.instanceMatrix.array,16*r)}raycast(r,e){const t=this.matrixWorld,n=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0)for(let i=0;i<n;i++){this.getMatrixAt(i,Ym),$m.multiplyMatrices(t,Ym),Qs.matrixWorld=$m,Qs.raycast(r,Zo);for(let s=0,a=Zo.length;s<a;s++){const o=Zo[s];o.instanceId=i,o.object=this,e.push(o)}Zo.length=0}}setColorAt(r,e){this.instanceColor===null&&(this.instanceColor=new jh(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*r)}setMatrixAt(r,e){e.toArray(this.instanceMatrix.array,16*r)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}).prototype.isInstancedMesh=!0;class Zr extends ot{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Zr.prototype.isLineBasicMaterial=!0;const Jm=new C,Zm=new C,Km=new ye,qh=new Zi,Ko=new fi;class Qo extends Fe{constructor(e=new qe,t=new Zr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Jm.fromBufferAttribute(t,i-1),Zm.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jm.distanceTo(Zm);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;Km.copy(i).invert(),qh.copy(e.ray).applyMatrix4(Km);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,d=new C,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const f=n.index,m=n.attributes.position;if(f!==null)for(let v=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count)-1;v<g;v+=p){const b=f.getX(v),x=f.getX(v+1);if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,x),qh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}else for(let v=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count)-1;v<g;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),qh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Qo.prototype.isLine=!0;const Qm=new C,eg=new C;class el extends Qo{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qm.fromBufferAttribute(t,i),eg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qm.distanceTo(eg);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}el.prototype.isLineSegments=!0;class tg extends Qo{constructor(e,t){super(e,t),this.type="LineLoop"}}tg.prototype.isLineLoop=!0;class Xh extends ot{constructor(e){super(),this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Xh.prototype.isPointsMaterial=!0;const ng=new ye,Yh=new Zi,tl=new fi,nl=new C;class ig extends Fe{constructor(e=new qe,t=new Xh){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(i),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;ng.copy(i).invert(),Yh.copy(e.ray).applyMatrix4(ng);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){const p=c.getX(u);nl.fromBufferAttribute(h,p),rg(nl,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)nl.fromBufferAttribute(h,u),rg(nl,u,l,i,e,t,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}function rg(r,e,t,n,i,s,a){const o=Yh.distanceSqToPoint(r);if(o<t){const l=new C;Yh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}ig.prototype.isPoints=!0;(class extends nt{constructor(r,e,t,n,i,s,a,o,l){super(r,e,t,n,i,s,a,o,l),this.format=a!==void 0?a:1022,this.minFilter=s!==void 0?s:1006,this.magFilter=i!==void 0?i:1006,this.generateMipmaps=!1;const c=this;"requestVideoFrameCallback"in r&&r.requestVideoFrameCallback(function h(){c.needsUpdate=!0,r.requestVideoFrameCallback(h)})}clone(){return new this.constructor(this.image).copy(this)}update(){const r=this.image;!("requestVideoFrameCallback"in r)&&r.readyState>=r.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}).prototype.isVideoTexture=!0;class $h extends nt{constructor(e,t,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}$h.prototype.isCompressedTexture=!0;(class extends nt{constructor(r,e,t,n,i,s,a,o,l){super(r,e,t,n,i,s,a,o,l),this.needsUpdate=!0}}).prototype.isCanvasTexture=!0;(class extends nt{constructor(r,e,t,n,i,s,a,o,l,c){if((c=c!==void 0?c:1026)!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&c===1026&&(t=1012),t===void 0&&c===1027&&(t=1020),super(null,n,i,s,a,o,c,t,l),this.image={width:r,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=o!==void 0?o:1003,this.flipY=!1,this.generateMipmaps=!1}}).prototype.isDepthTexture=!0,new C,new C,new C,new at;class Zt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);const h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){const n=1e-4;let i=e-n,s=e+n;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new he:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],s=[],a=[],o=new C,l=new ye;for(let p=0;p<=e;p++){const f=p/e;i[p]=this.getTangentAt(f,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(Et(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Et(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class il extends Zt{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new he,i=2*Math.PI;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}il.prototype.isEllipseCurve=!0;class sg extends il{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}function Jh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){const a=s*s;return r+e*s+t*a+n*(a*s)}}}sg.prototype.isArcCurve=!0;const rl=new C,Zh=new Jh,Kh=new Jh,Qh=new Jh;class ag extends Zt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(rl.subVectors(i[0],i[1]).add(i[0]),o=rl);const u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(rl.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=rl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),v<1e-4&&(v=m),Zh.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,v),Kh.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,v),Qh.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,v)}else this.curveType==="catmullrom"&&(Zh.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Kh.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Qh.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Zh.calc(h),Kh.calc(h),Qh.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function og(r,e,t,n,i){const s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function ea(r,e,t,n){return function(i,s){const a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function ta(r,e,t,n,i){return function(s,a){const o=1-s;return o*o*o*a}(r,e)+function(s,a){const o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}ag.prototype.isCatmullRomCurve3=!0;class eu extends Zt{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ta(e,i.x,s.x,a.x,o.x),ta(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}eu.prototype.isCubicBezierCurve=!0;class lg extends Zt{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ta(e,i.x,s.x,a.x,o.x),ta(e,i.y,s.y,a.y,o.y),ta(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}lg.prototype.isCubicBezierCurve3=!0;class sl extends Zt{constructor(e=new he,t=new he){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new he;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}sl.prototype.isLineCurve=!0;class tu extends Zt{constructor(e=new he,t=new he,n=new he){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ea(e,i.x,s.x,a.x),ea(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}tu.prototype.isQuadraticBezierCurve=!0;class cg extends Zt{constructor(e=new C,t=new C,n=new C){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ea(e,i.x,s.x,a.x),ea(e,i.y,s.y,a.y),ea(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}cg.prototype.isQuadraticBezierCurve3=!0;class nu extends Zt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(og(o,l.x,c.x,h.x,u.x),og(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}nu.prototype.isSplineCurve=!0;var hg=Object.freeze({__proto__:null,ArcCurve:sg,CatmullRomCurve3:ag,CubicBezierCurve:eu,CubicBezierCurve3:lg,EllipseCurve:il,LineCurve:sl,LineCurve3:class extends Zt{constructor(r=new C,e=new C){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=r,this.v2=e}getPoint(r,e=new C){const t=e;return r===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(r).add(this.v1)),t}getPointAt(r,e){return this.getPoint(r,e)}copy(r){return super.copy(r),this.v1.copy(r.v1),this.v2.copy(r.v2),this}toJSON(){const r=super.toJSON();return r.v1=this.v1.toArray(),r.v2=this.v2.toArray(),r}fromJSON(r){return super.fromJSON(r),this.v1.fromArray(r.v1),this.v2.fromArray(r.v2),this}},QuadraticBezierCurve:tu,QuadraticBezierCurve3:cg,SplineCurve:nu});class W_ extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new sl(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?2*e:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new hg[i.type]().fromJSON(i))}return this}}class iu extends W_{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sl(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new tu(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new eu(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new nu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new il(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class na extends iu{constructor(e){super(e),this.uuid=$t(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new iu().fromJSON(i))}return this}}const j_=function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ug(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=function(f,m,v,g){const b=[];let x,y,w,M,T;for(x=0,y=m.length;x<y;x++)w=m[x]*g,M=x<y-1?m[x+1]*g:f.length,T=ug(f,w,M,g,!1),T===T.next&&(T.steiner=!0),b.push(Q_(T));for(b.sort(J_),x=0;x<b.length;x++)Z_(b[x],v),v=Ti(v,v.next);return v}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return ia(s,a,t,o,l,p),a};function ug(r,e,t,n,i){let s,a;if(i===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=fg(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=fg(s,r[s],r[s+1],a);return a&&al(a,a.next)&&(sa(a),a=a.next),a}function Ti(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!al(n,n.next)&&Qe(n.prev,n,n.next)!==0)n=n.next;else{if(sa(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function ia(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,u,d,p){let f=h;do f.z===null&&(f.z=ru(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(m){let v,g,b,x,y,w,M,T,P=1;do{for(g=m,m=null,y=null,w=0;g;){for(w++,b=g,M=0,v=0;v<P&&(M++,b=b.nextZ,b);v++);for(T=P;M>0||T>0&&b;)M!==0&&(T===0||!b||g.z<=b.z)?(x=g,g=g.nextZ,M--):(x=b,b=b.nextZ,T--),y?y.nextZ=x:m=x,x.prevZ=y,y=x;g=b}y.nextZ=null,P*=2}while(w>1)}(f)}(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?X_(r,n,i,s):q_(r))e.push(o.i/t),e.push(r.i/t),e.push(l.i/t),sa(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?ia(r=Y_(Ti(r),e,t),e,t,n,i,s,2):a===2&&$_(r,e,t,n,i,s):ia(Ti(r),e,t,n,i,s,1);break}}function q_(r){const e=r.prev,t=r,n=r.next;if(Qe(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Kr(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Qe(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function X_(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Qe(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,h=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,u=ru(o,l,e,t,n),d=ru(c,h,e,t,n);let p=r.prevZ,f=r.nextZ;for(;p&&p.z>=u&&f&&f.z<=d;){if(p!==r.prev&&p!==r.next&&Kr(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&Qe(p.prev,p,p.next)>=0||(p=p.prevZ,f!==r.prev&&f!==r.next&&Kr(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;p&&p.z>=u;){if(p!==r.prev&&p!==r.next&&Kr(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&Qe(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;f&&f.z<=d;){if(f!==r.prev&&f!==r.next&&Kr(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function Y_(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!al(i,s)&&dg(i,n,n.next,s)&&ra(i,s)&&ra(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),sa(n),sa(n.next),n=r=s),n=n.next}while(n!==r);return Ti(n)}function $_(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eM(a,o)){let l=pg(a,o);return a=Ti(a,a.next),l=Ti(l,l.next),ia(a,e,t,n,i,s),void ia(l,e,t,n,i,s)}o=o.next}a=a.next}while(a!==r)}function J_(r,e){return r.x-e.x}function Z_(r,e){if(e=function(t,n){let i=n;const s=t.x,a=t.y;let o,l=-1/0;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){const f=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=s&&f>l){if(l=f,f===s){if(a===i.y)return i;if(a===i.next.y)return i.next}o=i.x<i.next.x?i:i.next}}i=i.next}while(i!==n);if(!o)return null;if(s===l)return o;const c=o,h=o.x,u=o.y;let d,p=1/0;i=o;do s>=i.x&&i.x>=h&&s!==i.x&&Kr(a<u?s:l,a,h,u,a<u?l:s,a,i.x,i.y)&&(d=Math.abs(a-i.y)/(s-i.x),ra(i,t)&&(d<p||d===p&&(i.x>o.x||i.x===o.x&&K_(o,i)))&&(o=i,p=d)),i=i.next;while(i!==c);return o}(r,e),e){const t=pg(e,r);Ti(e,e.next),Ti(t,t.next)}}function K_(r,e){return Qe(r.prev,r,e.prev)<0&&Qe(e.next,r,r.next)<0}function ru(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=32767*(r-t)*i)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Q_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Kr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function eM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&dg(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(ra(r,e)&&ra(e,r)&&function(t,n){let i=t,s=!1;const a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(Qe(r.prev,r,e.prev)||Qe(r,e.prev,e))||al(r,e)&&Qe(r.prev,r,r.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function al(r,e){return r.x===e.x&&r.y===e.y}function dg(r,e,t,n){const i=ll(Qe(r,e,t)),s=ll(Qe(r,e,n)),a=ll(Qe(t,n,r)),o=ll(Qe(t,n,e));return i!==s&&a!==o||!(i!==0||!ol(r,t,e))||!(s!==0||!ol(r,n,e))||!(a!==0||!ol(t,r,n))||!(o!==0||!ol(t,e,n))}function ol(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ll(r){return r>0?1:r<0?-1:0}function ra(r,e){return Qe(r.prev,r,r.next)<0?Qe(r,e,r.next)>=0&&Qe(r,r.prev,e)>=0:Qe(r,e,r.prev)<0||Qe(r,r.next,e)<0}function pg(r,e){const t=new su(r.i,r.x,r.y),n=new su(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function fg(r,e,t,n){const i=new su(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function sa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function su(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}class Ei{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return Ei.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];mg(e),gg(n,e);let a=e.length;t.forEach(mg);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,gg(n,t[l]);const o=j_(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function mg(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function gg(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Qr extends qe{constructor(e=new na([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:tM;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let x,y,w,M,T,P=!1;g&&(x=g.getSpacedPoints(h),P=!0,d=!1,y=g.computeFrenetFrames(h,!1),w=new C,M=new C,T=new C),d||(v=0,p=0,f=0,m=0);const D=o.extractPoints(c);let I=D.shape;const N=D.holes;if(!Ei.isClockWise(I)){I=I.reverse();for(let H=0,E=N.length;H<E;H++){const k=N[H];Ei.isClockWise(k)&&(N[H]=k.reverse())}}const X=Ei.triangulateShape(I,N),G=I;for(let H=0,E=N.length;H<E;H++){const k=N[H];I=I.concat(k)}function z(H,E,k){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().multiplyScalar(k).add(H)}const $=I.length,le=X.length;function re(H,E,k){let J,_,S;const F=H.x-E.x,B=H.y-E.y,U=k.x-H.x,Z=k.y-H.y,ee=F*F+B*B,ae=F*Z-B*U;if(Math.abs(ae)>Number.EPSILON){const ie=Math.sqrt(ee),te=Math.sqrt(U*U+Z*Z),ge=E.x-B/ie,me=E.y+F/ie,xe=((k.x-Z/te-ge)*Z-(k.y+U/te-me)*U)/(F*Z-B*U);J=ge+F*xe-H.x,_=me+B*xe-H.y;const we=J*J+_*_;if(we<=2)return new he(J,_);S=Math.sqrt(we/2)}else{let ie=!1;F>Number.EPSILON?U>Number.EPSILON&&(ie=!0):F<-Number.EPSILON?U<-Number.EPSILON&&(ie=!0):Math.sign(B)===Math.sign(Z)&&(ie=!0),ie?(J=-B,_=F,S=Math.sqrt(ee)):(J=F,_=B,S=Math.sqrt(ee/2))}return new he(J/S,_/S)}const se=[];for(let H=0,E=G.length,k=E-1,J=H+1;H<E;H++,k++,J++)k===E&&(k=0),J===E&&(J=0),se[H]=re(G[H],G[k],G[J]);const ue=[];let fe,Q=se.concat();for(let H=0,E=N.length;H<E;H++){const k=N[H];fe=[];for(let J=0,_=k.length,S=_-1,F=J+1;J<_;J++,S++,F++)S===_&&(S=0),F===_&&(F=0),fe[J]=re(k[J],k[S],k[F]);ue.push(fe),Q=Q.concat(fe)}for(let H=0;H<v;H++){const E=H/v,k=p*Math.cos(E*Math.PI/2),J=f*Math.sin(E*Math.PI/2)+m;for(let _=0,S=G.length;_<S;_++){const F=z(G[_],se[_],J);V(F.x,F.y,-k)}for(let _=0,S=N.length;_<S;_++){const F=N[_];fe=ue[_];for(let B=0,U=F.length;B<U;B++){const Z=z(F[B],fe[B],J);V(Z.x,Z.y,-k)}}}const A=f+m;for(let H=0;H<$;H++){const E=d?z(I[H],Q[H],A):I[H];P?(M.copy(y.normals[0]).multiplyScalar(E.x),w.copy(y.binormals[0]).multiplyScalar(E.y),T.copy(x[0]).add(M).add(w),V(T.x,T.y,T.z)):V(E.x,E.y,0)}for(let H=1;H<=h;H++)for(let E=0;E<$;E++){const k=d?z(I[E],Q[E],A):I[E];P?(M.copy(y.normals[H]).multiplyScalar(k.x),w.copy(y.binormals[H]).multiplyScalar(k.y),T.copy(x[H]).add(M).add(w),V(T.x,T.y,T.z)):V(k.x,k.y,u/h*H)}for(let H=v-1;H>=0;H--){const E=H/v,k=p*Math.cos(E*Math.PI/2),J=f*Math.sin(E*Math.PI/2)+m;for(let _=0,S=G.length;_<S;_++){const F=z(G[_],se[_],J);V(F.x,F.y,u+k)}for(let _=0,S=N.length;_<S;_++){const F=N[_];fe=ue[_];for(let B=0,U=F.length;B<U;B++){const Z=z(F[B],fe[B],J);P?V(Z.x,Z.y+x[h-1].y,x[h-1].x+k):V(Z.x,Z.y,u+k)}}}function R(H,E){let k=H.length;for(;--k>=0;){const J=k;let _=k-1;_<0&&(_=H.length-1);for(let S=0,F=h+2*v;S<F;S++){const B=$*S,U=$*(S+1);O(E+J+B,E+_+B,E+_+U,E+J+U)}}}function V(H,E,k){l.push(H),l.push(E),l.push(k)}function W(H,E,k){oe(H),oe(E),oe(k);const J=i.length/3,_=b.generateTopUV(n,i,J-3,J-2,J-1);ce(_[0]),ce(_[1]),ce(_[2])}function O(H,E,k,J){oe(H),oe(E),oe(J),oe(E),oe(k),oe(J);const _=i.length/3,S=b.generateSideWallUV(n,i,_-6,_-3,_-2,_-1);ce(S[0]),ce(S[1]),ce(S[3]),ce(S[1]),ce(S[2]),ce(S[3])}function oe(H){i.push(l[3*H+0]),i.push(l[3*H+1]),i.push(l[3*H+2])}function ce(H){s.push(H.x),s.push(H.y)}(function(){const H=i.length/3;if(d){let E=0,k=$*E;for(let J=0;J<le;J++){const _=X[J];W(_[2]+k,_[1]+k,_[0]+k)}E=h+2*v,k=$*E;for(let J=0;J<le;J++){const _=X[J];W(_[0]+k,_[1]+k,_[2]+k)}}else{for(let E=0;E<le;E++){const k=X[E];W(k[2],k[1],k[0])}for(let E=0;E<le;E++){const k=X[E];W(k[0]+$*h,k[1]+$*h,k[2]+$*h)}}n.addGroup(H,i.length/3-H,0)})(),function(){const H=i.length/3;let E=0;R(G,E),E+=G.length;for(let k=0,J=N.length;k<J;k++){const _=N[k];R(_,E),E+=_.length}n.addGroup(H,i.length/3-H,1)}()}this.setAttribute("position",new ct(i,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals()}toJSON(){const e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){const o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new hg[i.type]().fromJSON(i)),new Qr(n,e.options)}}const tM={generateTopUV:function(r,e,t,n,i){const s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],m=e[3*s],v=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-f),new he(m,1-g)]:[new he(o,1-l),new he(h,1-u),new he(p,1-f),new he(v,1-g)]}};class au extends qe{constructor(e=new na([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){const u=i.length/3,d=h.extractPoints(t);let p=d.shape;const f=d.holes;Ei.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,g=f.length;v<g;v++){const b=f[v];Ei.isClockWise(b)===!0&&(f[v]=b.reverse())}const m=Ei.triangulateShape(p,f);for(let v=0,g=f.length;v<g;v++){const b=f[v];p=p.concat(b)}for(let v=0,g=p.length;v<g;v++){const b=p[v];i.push(b.x,b.y,0),s.push(0,0,1),a.push(b.x,b.y)}for(let v=0,g=m.length;v<g;v++){const b=m[v],x=b[0]+u,y=b[1]+u,w=b[2]+u;n.push(x,y,w),l+=3}}this.setIndex(n),this.setAttribute("position",new ct(i,3)),this.setAttribute("normal",new ct(s,3)),this.setAttribute("uv",new ct(a,2))}toJSON(){const e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){const a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new au(n,e.curveSegments)}}class vg extends ot{constructor(e){super(),this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}vg.prototype.isShadowMaterial=!0;class qn extends ot{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}qn.prototype.isMeshStandardMaterial=!0;class es extends qn{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenTint=new ve(0),this.sheenRoughness=1,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new ve(1,1,1),this.specularTintMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenTint.copy(e.sheenTint),this.sheenRoughness=e.sheenRoughness,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}}es.prototype.isMeshPhysicalMaterial=!0;(class extends ot{constructor(r){super(),this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.specular.copy(r.specular),this.shininess=r.shininess,this.map=r.map,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.emissive.copy(r.emissive),this.emissiveMap=r.emissiveMap,this.emissiveIntensity=r.emissiveIntensity,this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.specularMap=r.specularMap,this.alphaMap=r.alphaMap,this.envMap=r.envMap,this.combine=r.combine,this.reflectivity=r.reflectivity,this.refractionRatio=r.refractionRatio,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this.flatShading=r.flatShading,this}}).prototype.isMeshPhongMaterial=!0;(class extends ot{constructor(r){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.map=r.map,this.gradientMap=r.gradientMap,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.emissive.copy(r.emissive),this.emissiveMap=r.emissiveMap,this.emissiveIntensity=r.emissiveIntensity,this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.alphaMap=r.alphaMap,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this}}).prototype.isMeshToonMaterial=!0;(class extends ot{constructor(r){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(r)}copy(r){return super.copy(r),this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.flatShading=r.flatShading,this}}).prototype.isMeshNormalMaterial=!0;(class extends ot{constructor(r){super(),this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.map=r.map,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.emissive.copy(r.emissive),this.emissiveMap=r.emissiveMap,this.emissiveIntensity=r.emissiveIntensity,this.specularMap=r.specularMap,this.alphaMap=r.alphaMap,this.envMap=r.envMap,this.combine=r.combine,this.reflectivity=r.reflectivity,this.refractionRatio=r.refractionRatio,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this}}).prototype.isMeshLambertMaterial=!0;(class extends ot{constructor(r){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(r)}copy(r){return super.copy(r),this.defines={MATCAP:""},this.color.copy(r.color),this.matcap=r.matcap,this.map=r.map,this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.alphaMap=r.alphaMap,this.flatShading=r.flatShading,this}}).prototype.isMeshMatcapMaterial=!0;(class extends Zr{constructor(r){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(r)}copy(r){return super.copy(r),this.scale=r.scale,this.dashSize=r.dashSize,this.gapSize=r.gapSize,this}}).prototype.isLineDashedMaterial=!0;const Ze={arraySlice:function(r,e,t){return Ze.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){const e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){const f=c.times[p]*i;if(!(f<t||f>=n)){u.push(c.times[p]);for(let m=0;m<h;++m)d.push(c.values[p*h+m])}}u.length!==0&&(c.times=Ze.convertArray(u,c.times.constructor),c.values=Ze.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const f=o.times.length-1;let m;if(s<=o.times[0]){const g=h,b=u-h;m=Ze.arraySlice(o.values,g,b)}else if(s>=o.times[f]){const g=f*u+h,b=g+u-h;m=Ze.arraySlice(o.values,g,b)}else{const g=o.createInterpolant(),b=h,x=u-h;g.evaluate(s),m=Ze.arraySlice(g.resultBuffer,b,x)}l==="quaternion"&&new At().fromArray(m).normalize().conjugate().toArray(m);const v=c.times.length;for(let g=0;g<v;++g){const b=g*p+d;if(l==="quaternion")At.multiplyQuaternionsFlat(c.values,b,m,0,c.values,b);else{const x=p-2*d;for(let y=0;y<x;++y)c.values[b+y]-=m[y]}}}return r.blendMode=2501,r}};class Xn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=s)break e;{const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0}}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Xn.prototype.beforeStart_=Xn.prototype.copySampleValue_,Xn.prototype.afterEnd_=Xn.prototype.copySampleValue_;class nM extends Xn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),m=f*f,v=m*f,g=-d*v+2*d*m-d*f,b=(1+d)*v+(-1.5-2*d)*m+(-.5+d)*f+1,x=(-1-p)*v+(1.5+p)*m+.5*f,y=p*v-p*m;for(let w=0;w!==o;++w)s[w]=g*a[h+w]+b*a[c+w]+x*a[l+w]+y*a[u+w];return s}}class yg extends Xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class iM extends Xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ze.convertArray(t,this.TimeBufferType),this.values=Ze.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ze.convertArray(e.times,Array),values:Ze.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Ze.arraySlice(n,s,a),this.values=Ze.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Ze.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ze.arraySlice(this.times),t=Ze.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){const f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ze.arraySlice(e,0,a),this.values=Ze.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ze.arraySlice(this.times,0),t=Ze.arraySlice(this.values,0),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Sn.prototype.TimeBufferType=Float32Array,Sn.prototype.ValueBufferType=Float32Array,Sn.prototype.DefaultInterpolation=2301;class ts extends Sn{}ts.prototype.ValueTypeName="bool",ts.prototype.ValueBufferType=Array,ts.prototype.DefaultInterpolation=2300,ts.prototype.InterpolantFactoryMethodLinear=void 0,ts.prototype.InterpolantFactoryMethodSmooth=void 0;class xg extends Sn{}xg.prototype.ValueTypeName="color";class aa extends Sn{}aa.prototype.ValueTypeName="number";class rM extends Xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)At.slerpFlat(s,0,a,c-o,a,c,l);return s}}class er extends Sn{InterpolantFactoryMethodLinear(e){return new rM(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion",er.prototype.DefaultInterpolation=2301,er.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends Sn{}ns.prototype.ValueTypeName="string",ns.prototype.ValueBufferType=Array,ns.prototype.DefaultInterpolation=2300,ns.prototype.InterpolantFactoryMethodLinear=void 0,ns.prototype.InterpolantFactoryMethodSmooth=void 0;class oa extends Sn{}oa.prototype.ValueTypeName="vector";class ou{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$t(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(sM(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Ze.getKeyframeOrder(l);l=Ze.sortedArray(l,1,h),c=Ze.sortedArray(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new aa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,d,p,f){if(d.length!==0){const m=[],v=[];Ze.flattenJSON(d,m,v,p),m.length!==0&&f.push(new h(u,m,v))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(const f in d){const m=[],v=[];for(let g=0;g!==u[p].morphTargets.length;++g){const b=u[p];m.push(b.time),v.push(b.morphTarget===f?1:0)}i.push(new aa(".morphTargetInfluence["+f+"]",m,v))}l=d.length*(a||1)}else{const d=".bones["+t[h].name+"]";n(oa,d+".position",u,"pos",i),n(er,d+".quaternion",u,"rot",i),n(oa,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){const i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return aa;case"vector":case"vector2":case"vector3":case"vector4":return oa;case"color":return xg;case"quaternion":return er;case"bool":case"boolean":return ts;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){const t=[],n=[];Ze.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const is={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},aM=new class{constructor(r,e,t){const n=this;let i,s=!1,a=0,o=0;const l=[];this.onStart=void 0,this.onLoad=r,this.onProgress=e,this.onError=t,this.itemStart=function(c){o++,s===!1&&n.onStart!==void 0&&n.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return i?i(c):c},this.setURLModifier=function(c){return i=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){const d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(c))return p}return null}}};class Kt{constructor(e){this.manager=e!==void 0?e:aM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const dn={};class Yn extends Kt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=is.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;if(dn[e]!==void 0)return void dn[e].push({onLoad:t,onProgress:n,onError:i});const o=e.match(/^data:(.*?)(;base64)?,(.*)$/);let l;if(o){const c=o[1],h=!!o[2];let u=o[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let d;const p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":const f=new Uint8Array(u.length);for(let v=0;v<u.length;v++)f[v]=u.charCodeAt(v);d=p==="blob"?new Blob([f.buffer],{type:c}):f.buffer;break;case"document":d=new DOMParser().parseFromString(u,c);break;case"json":d=JSON.parse(u);break;default:d=u}setTimeout(function(){t&&t(d),s.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{dn[e]=[],dn[e].push({onLoad:t,onProgress:n,onError:i}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(c){const h=this.response,u=dn[e];if(delete dn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),is.add(e,h);for(let d=0,p=u.length;d<p;d++){const f=u[d];f.onLoad&&f.onLoad(h)}s.manager.itemEnd(e)}else{for(let d=0,p=u.length;d<p;d++){const f=u[d];f.onError&&f.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(c){const h=dn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onProgress&&p.onProgress(c)}},!1),l.addEventListener("error",function(c){const h=dn[e];delete dn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),l.addEventListener("abort",function(c){const h=dn[e];delete dn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const c in this.requestHeader)l.setRequestHeader(c,this.requestHeader[c]);l.send(null)}return s.manager.itemStart(e),l}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lu extends Kt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=is.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=To("img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),is.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class oM extends Kt{constructor(e){super(e)}load(e,t,n,i){const s=new Vo,a=new lu(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class lM extends Kt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Gh,o=new Yn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:1001,a.wrapT=c.wrapT!==void 0?c.wrapT:1001,a.magFilter=c.magFilter!==void 0?c.magFilter:1006,a.minFilter=c.minFilter!==void 0?c.minFilter:1006,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=1008),c.mipmapCount===1&&(a.minFilter=1006),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class cl extends Kt{constructor(e){super(e)}load(e,t,n,i){const s=new nt,a=new lu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Tn extends Fe{constructor(e,t=1){super(),this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Tn.prototype.isLight=!0;(class extends Tn{constructor(r,e,t){super(r,t),this.type="HemisphereLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.groundColor=new ve(e)}copy(r){return Tn.prototype.copy.call(this,r),this.groundColor.copy(r.groundColor),this}}).prototype.isHemisphereLight=!0;const bg=new ye,wg=new C,_g=new C;class cu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(wg),_g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_g),t.updateMatrixWorld(),bg.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bg),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mg extends cu{constructor(){super(new dt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=2*Bs*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Mg.prototype.isSpotLightShadow=!0;class Sg extends Tn{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new Mg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Sg.prototype.isSpotLight=!0;const Tg=new ye,la=new C,hu=new C;class Eg extends cu{constructor(){super(new dt(90,1,.5,500)),this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),la.setFromMatrixPosition(e.matrixWorld),n.position.copy(la),hu.copy(n.position),hu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hu),n.updateMatrixWorld(),i.makeTranslation(-la.x,-la.y,-la.z),Tg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tg)}}Eg.prototype.isPointLightShadow=!0;class hl extends Tn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Eg}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}hl.prototype.isPointLight=!0;class Ag extends cu{constructor(){super(new Ki(-5,5,5,-5,.5,500))}}Ag.prototype.isDirectionalLightShadow=!0;class ul extends Tn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}ul.prototype.isDirectionalLight=!0;(class extends Tn{constructor(r,e){super(r,e),this.type="AmbientLight"}}).prototype.isAmbientLight=!0;(class extends Tn{constructor(r,e,t=10,n=10){super(r,e),this.type="RectAreaLight",this.width=t,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(r){this.intensity=r/(this.width*this.height*Math.PI)}copy(r){return super.copy(r),this.width=r.width,this.height=r.height,this}toJSON(r){const e=super.toJSON(r);return e.object.width=this.width,e.object.height=this.height,e}}).prototype.isRectAreaLight=!0;class Lg{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*i*1.092548),t.addScaledVector(a[5],i*s*1.092548),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],n*s*1.092548),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*i),t.addScaledVector(a[2],1.023328*s),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*i),t.addScaledVector(a[5],.858086*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],.858086*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+3*i);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+3*i);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Lg.prototype.isSphericalHarmonics3=!0;class dl extends Tn{constructor(e=new Lg,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}dl.prototype.isLightProbe=!0;class rs{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}(class extends qe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(r){return super.copy(r),this.instanceCount=r.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const r=super.toJSON(this);return r.instanceCount=this.instanceCount,r.isInstancedBufferGeometry=!0,r}}).prototype.isInstancedBufferGeometry=!0;class Rg extends Kt{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=is.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){is.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let uu;Rg.prototype.isImageBitmapLoader=!0;const cM=function(){return uu===void 0&&(uu=new(window.AudioContext||window.webkitAudioContext)),uu};class hM extends Kt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Yn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);cM().decodeAudioData(l,function(c){t(c)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}(class extends dl{constructor(r,e,t=1){super(void 0,t);const n=new ve().set(r),i=new ve().set(e),s=new C(n.r,n.g,n.b),a=new C(i.r,i.g,i.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}}).prototype.isHemisphereLightProbe=!0;(class extends dl{constructor(r,e=1){super(void 0,e);const t=new ve().set(r);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}}).prototype.isAmbientLightProbe=!0;class uM{constructor(e,t,n){let i,s,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){At.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;At.multiplyQuaternionsFlat(e,a,e,t,e,n),At.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const dM=new RegExp("[\\[\\]\\.:\\/]","g"),pM="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),mM=/(WCOD+)?/.source.replace("WCOD",pM),gM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),vM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),yM=new RegExp("^"+fM+mM+gM+vM+"$"),xM=["material","materials","bones"];class Oe{constructor(e,t,n){this.path=t,this.parsedPath=n||Oe.parseTrackName(t),this.node=Oe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Oe.Composite(e,t,n):new Oe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dM,"")}static parseTrackName(e){const t=yM.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);xM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Oe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=class{constructor(r,e,t){const n=t||Oe.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray],Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bM{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;if(this.blendMode===2501)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===2202;if(e===0)return s===-1?i:a&&(1&s)==1?t-i:i;if(n===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(1&s)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class Cg extends Vt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let f=h[p];if(f!==void 0)a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}const m=t&&t._propertyBindings[u].binding.parsedPath;f=new uM(Oe.create(n,p,m),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new yg(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?ou.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(n=a!==null?a.blendMode:2500),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new bM(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ou.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const a=n[s].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName[t];if(i!==void 0)for(const s in i){const a=i[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Cg.prototype._controlInterpolantsResultBuffer=new Float32Array(1);(class extends jr{constructor(r,e,t=1){super(r,e),this.meshPerAttribute=t}copy(r){return super.copy(r),this.meshPerAttribute=r.meshPerAttribute,this}clone(r){const e=super.clone(r);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(r){const e=super.toJSON(r);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}).prototype.isInstancedInterleavedBuffer=!0;function Pg(r,e){return r.distance-e.distance}function du(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)du(i[s],e,t,!0)}}class pl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}(class extends Fe{constructor(r){super(),this.material=r,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}).prototype.isImmediateRenderObject=!0;const Ai=new C,fl=new ye,pu=new ye;function Ig(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Ig(r.children[t]));return e}const Dg=new Float32Array(1),wM=new Int32Array(Dg.buffer);class fu{static toHalfFloat(e){e>65504&&(console.warn("THREE.DataUtils.toHalfFloat(): value exceeds 65504."),e=65504),Dg[0]=e;const t=wM[0];let n=t>>16&32768,i=t>>12&2047;const s=t>>23&255;return s<103?n:s>142?(n|=31744,n|=(s==255?0:1)&&8388607&t,n):s<113?(i|=2048,n|=(i>>114-s)+(i>>113-s&1),n):(n|=s-112<<10|i>>1,n+=1&i,n)}}Zt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Zt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r},iu.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)},class extends el{constructor(r=10,e=10,t=4473924,n=8947848){t=new ve(t),n=new ve(n);const i=e/2,s=r/e,a=r/2,o=[],l=[];for(let h=0,u=0,d=-a;h<=e;h++,d+=s){o.push(-a,0,d,a,0,d),o.push(d,0,-a,d,0,a);const p=h===i?t:n;p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3}const c=new qe;c.setAttribute("position",new ct(o,3)),c.setAttribute("color",new ct(l,3)),super(c,new Zr({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},class extends el{constructor(r){const e=Ig(r),t=new qe,n=[],i=[],s=new ve(0,0,1),a=new ve(0,1,0);for(let o=0;o<e.length;o++){const l=e[o];l.parent&&l.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(s.r,s.g,s.b),i.push(a.r,a.g,a.b))}t.setAttribute("position",new ct(n,3)),t.setAttribute("color",new ct(i,3)),super(t,new Zr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=r,this.bones=e,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(r){const e=this.bones,t=this.geometry,n=t.getAttribute("position");pu.copy(this.root.matrixWorld).invert();for(let i=0,s=0;i<e.length;i++){const a=e[i];a.parent&&a.parent.isBone&&(fl.multiplyMatrices(pu,a.matrixWorld),Ai.setFromMatrixPosition(fl),n.setXYZ(s,Ai.x,Ai.y,Ai.z),fl.multiplyMatrices(pu,a.parent.matrixWorld),Ai.setFromMatrixPosition(fl),n.setXYZ(s+1,Ai.x,Ai.y,Ai.z),s+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(r)}}.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Kt.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),rs.extractUrlBase(r)},Kt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Lt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)},Lt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Lt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},Lt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)},Lt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)},fi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},jo.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)},lt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)},lt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)},lt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},lt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)},lt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},lt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()},ye.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)},ye.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)},ye.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new C().setFromMatrixColumn(this,3)},ye.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)},ye.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ye.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ye.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ye.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)},ye.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ye.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ye.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ye.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ye.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ye.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ye.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ye.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)},ye.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()},Wn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)},At.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)},At.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},Zi.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},Zi.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)},Zi.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)},at.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},at.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)},at.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)},at.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)},at.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)},at.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),at.getBarycoord(r,e,t,n,i)},at.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),at.getNormal(r,e,t,n)},na.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)},na.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Qr(this,r)},na.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new au(this,r)},he.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},he.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)},he.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},C.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},C.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},C.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)},C.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)},C.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)},C.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)},C.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},C.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)},C.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},We.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},We.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Fe.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)},Fe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Fe.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)},Fe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Fe.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)},Object.defineProperties(Fe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Me.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(Me.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Hh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},dt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)},Object.defineProperties(Tn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}}),Object.defineProperties(je.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}}),je.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?35048:35044),this},je.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},je.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},qe.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)},qe.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new je(arguments[1],arguments[2])))},qe.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)},qe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},qe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},qe.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)},qe.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)},Object.defineProperties(qe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),jr.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?35048:35044),this},jr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Qr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Qr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Qr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},Mn.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(ot.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ve}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(Gn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}}),Ge.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)},Ge.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)},Ge.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ge.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ge.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ge.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ge.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ge.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ge.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ge.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ge.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ge.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ge.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ge.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ge.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)},Ge.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ge.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ge.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ge.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ge.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ge.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ge.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ge.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ge.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ge.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ge.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Um.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Ut.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}}),class extends Fe{constructor(r){super(),this.type="Audio",this.listener=r,this.context=r.context,this.gain=this.context.createGain(),this.gain.connect(r.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(r){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=r,this.connect(),this}setMediaElementSource(r){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(r),this.connect(),this}setMediaStreamSource(r){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(r),this.connect(),this}setBuffer(r){return this.buffer=r,this.sourceType="buffer",this.autoplay&&this.play(),this}play(r=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+r;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let r=1,e=this.filters.length;r<e;r++)this.filters[r-1].connect(this.filters[r]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let r=1,e=this.filters.length;r<e;r++)this.filters[r-1].disconnect(this.filters[r]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(r){return r||(r=[]),this._connected===!0?(this.disconnect(),this.filters=r.slice(),this.connect()):this.filters=r.slice(),this}setDetune(r){if(this.detune=r,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(r){return this.setFilters(r?[r]:[])}setPlaybackRate(r){if(this.hasPlaybackControl!==!1)return this.playbackRate=r,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(r){if(this.hasPlaybackControl!==!1)return this.loop=r,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(r){return this.loopStart=r,this}setLoopEnd(r){return this.loopEnd=r,this}getVolume(){return this.gain.gain.value}setVolume(r){return this.gain.gain.setTargetAtTime(r,this.context.currentTime,.01),this}}.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new hM().load(r,function(t){e.setBuffer(t)}),this},qs.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)},qs.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)},Cr.crossOrigin=void 0,Cr.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new cl;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s},Cr.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new oM;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s},Cr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Cr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"133"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="133");const mu=new WeakMap;function _M(){let r,e;function t(n,i,s,a,o,l){const c=l.num_components(),h=s.num_points()*c,u=h*o.BYTES_PER_ELEMENT,d=function(m,v){switch(v){case Float32Array:return m.DT_FLOAT32;case Int8Array:return m.DT_INT8;case Int16Array:return m.DT_INT16;case Int32Array:return m.DT_INT32;case Uint8Array:return m.DT_UINT8;case Uint16Array:return m.DT_UINT16;case Uint32Array:return m.DT_UINT32}}(n,o),p=n._malloc(u);i.GetAttributeDataArrayForAllPoints(s,l,d,u,p);const f=new o(n.HEAPF32.buffer,p,h).slice();return n._free(p),{name:a,array:f,itemSize:c}}onmessage=function(n){const i=n.data;switch(i.type){case"init":r=i.decoderConfig,e=new Promise(function(o){r.onModuleLoaded=function(l){o({draco:l})},DracoDecoderModule(r)});break;case"decode":const s=i.buffer,a=i.taskConfig;e.then(o=>{const l=o.draco,c=new l.Decoder,h=new l.DecoderBuffer;h.Init(new Int8Array(s),s.byteLength);try{const u=function(p,f,m,v){const g=v.attributeIDs,b=v.attributeTypes;let x,y;const w=f.GetEncodedGeometryType(m);if(w===p.TRIANGULAR_MESH)x=new p.Mesh,y=f.DecodeBufferToMesh(m,x);else{if(w!==p.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");x=new p.PointCloud,y=f.DecodeBufferToPointCloud(m,x)}if(!y.ok()||x.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+y.error_msg());const M={index:null,attributes:[]};for(const T in g){const P=self[b[T]];let D,I;if(v.useUniqueIDs)I=g[T],D=f.GetAttributeByUniqueId(x,I);else{if(I=f.GetAttributeId(x,p[g[T]]),I===-1)continue;D=f.GetAttribute(x,I)}M.attributes.push(t(p,f,x,T,P,D))}return w===p.TRIANGULAR_MESH&&(M.index=function(T,P,D){const I=3*D.num_faces(),N=4*I,X=T._malloc(N);P.GetTrianglesUInt32Array(D,N,X);const G=new Uint32Array(T.HEAPF32.buffer,X,I).slice();return T._free(X),{array:G,itemSize:1}}(p,f,x)),p.destroy(x),M}(l,c,h,a),d=u.attributes.map(p=>p.array.buffer);u.index&&d.push(u.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:u},d)}catch(u){console.error(u),self.postMessage({type:"error",id:i.id,error:u.message})}finally{l.destroy(h),l.destroy(c)}})}}}class MM extends Kt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new FM(t)})}load(e,t,n,i){const s=this;let a;a=this.resourcePath!==""?this.resourcePath:this.path!==""?this.path:rs.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Yn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={};if(typeof e=="string")s=e;else if(rs.decodeText(new Uint8Array(e,0,4))===Fg){try{a[Ne.KHR_BINARY_GLTF]=new UM(e)}catch(h){return void(i&&i(h))}s=a[Ne.KHR_BINARY_GLTF].content}else s=rs.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2)return void(i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));const c=new nS(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,a[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case Ne.KHR_MATERIALS_UNLIT:a[u]=new EM;break;case Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[u]=new BM;break;case Ne.KHR_DRACO_MESH_COMPRESSION:a[u]=new kM(l,this.dracoLoader);break;case Ne.KHR_TEXTURE_TRANSFORM:a[u]=new zM;break;case Ne.KHR_MESH_QUANTIZATION:a[u]=new HM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}}function SM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class TM{constructor(e){this.parser=e,this.name=Ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let o;const l=new ve(16777215);a.color!==void 0&&l.fromArray(a.color);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new ul(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new hl(l),o.distance=c;break;case"spot":o=new Sg(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(o),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],s=(i.extensions&&i.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(a){return n._getNodeRef(t.cache,s,a)})}}class EM{constructor(){this.name=Ne.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}}class AM{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?es:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(o,o)}return Promise.all(s)}}class LM{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?es:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class RM{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?es:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;const o=a.attenuationColor||[1,1,1];return t.attenuationTint=new ve(o[0],o[1],o[2]),Promise.all(s)}}class CM{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?es:null}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class PM{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?es:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularTint=new ve(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularTintMap",a.specularColorTexture).then(function(l){l.encoding=3001})),Promise.all(s)}}class IM{constructor(e){this.parser=e,this.name=Ne.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=n.images[s.source],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a,o)}}class DM{constructor(e){this.parser=e,this.name=Ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FM{constructor(e){this.name=Ne.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,a.ready]).then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new ArrayBuffer(h*u),p=new Uint8Array(o[0],l,c);return a.decodeGltfBuffer(new Uint8Array(d),h,u,p,i.mode,i.filter),d})}return null}}const Fg="glTF",OM=1313821514,NM=5130562;class UM{constructor(e){this.name=Ne.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,12);if(this.header={magic:rs.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-12,i=new DataView(e,12);let s=0;for(;s<n;){const a=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===OM){const l=new Uint8Array(e,12+s,a);this.content=rs.decodeText(l)}else if(o===NM){const l=12+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ne.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=vu[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=vu[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],p=ca[d.componentType];c[u]=p,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const f=d.attributes[p],m=l[p];m!==void 0&&(f.normalized=m)}u(d)},o,c)})})}}class zM{constructor(){this.name=Ne.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gu extends qn{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new ve().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class BM{constructor(){this.name=Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return gu}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new ve(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const a=i.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new ve(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new ve(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const a=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",a)),s.push(n.assignTexture(e,"specularMap",a))}return Promise.all(s)}createMaterial(e){const t=new gu(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=0,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class HM{constructor(){this.name=Ne.KHR_MESH_QUANTIZATION}}class tr extends Xn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}}tr.prototype.beforeStart_=tr.prototype.copySampleValue_,tr.prototype.afterEnd_=tr.prototype.copySampleValue_,tr.prototype.interpolate_=function(r,e,t,n){const i=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=2*a,l=3*a,c=n-e,h=(t-e)/c,u=h*h,d=u*h,p=r*l,f=p-l,m=-2*d+3*u,v=d-u,g=1-m,b=v-u+h;for(let x=0;x!==a;x++){const y=s[f+x+a],w=s[f+x+o]*c,M=s[p+x+a],T=s[p+x]*c;i[x]=g*y+b*w+m*M+v*T}return i};const VM=new At;class GM extends tr{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return VM.fromArray(s).normalize().toArray(s),s}}const WM=0,jM=1,qM=2,XM=3,YM=4,Og=5,Ng=6,ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ug={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},kg={33071:1001,33648:1002,10497:1e3},zg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$M={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},JM="OPAQUE",ZM="MASK",KM="BLEND";function Bg(r,e){return typeof r!="string"||r===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(r)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(r)||/^data:.*,.*$/i.test(r)||/^blob:.*$/i.test(r)?r:e+r)}function QM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new qn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),r.DefaultMaterial}function ha(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function nr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eS(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tS(r){const e=r.extensions&&r.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];let t;return t=e?"draco:"+e.bufferView+":"+e.indices+":"+Hg(e.attributes):r.indices+":"+Hg(r.attributes)+":"+r.mode,t}function Hg(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function yu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class nS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SM,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Rg(this.options.manager):this.textureLoader=new cl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};ha(s,o,i),nr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Bg(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=zg[i.type],c=ca[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0;let m,v;if(p&&p!==u){const g=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let x=t.cache.get(b);x||(m=new c(o,g*p,i.count*p/h),x=new jr(m,p/h),t.cache.add(b,x)),v=new qr(x,l,d%p/h,f)}else m=o===null?new c(i.count*l):new c(o,d,i.count*l),v=new je(m,l,f);if(i.sparse!==void 0){const g=zg.SCALAR,b=ca[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new b(a[1],x,i.sparse.count*g),M=new c(a[2],y,i.sparse.count*l);o!==null&&(v=new je(v.array.slice(),v.itemSize,v.normalized));for(let T=0,P=w.length;T<P;T++){const D=w[T];if(v.setX(D,M[T*l]),l>=2&&v.setY(D,M[T*l+1]),l>=3&&v.setZ(D,M[T*l+2]),l>=4&&v.setW(D,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],s=t.images[i.source];let a=this.textureLoader;if(s.uri){const o=n.manager.getHandler(s.uri);o!==null&&(a=o)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,a=this.options,o=s.textures[e],l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let h=t.uri||"",u=!1;if(t.bufferView!==void 0)h=i.getDependency("bufferView",t.bufferView).then(function(p){u=!0;const f=new Blob([p],{type:t.mimeType});return h=c.createObjectURL(f),h});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(h).then(function(p){return new Promise(function(f,m){let v=f;n.isImageBitmapLoader===!0&&(v=function(g){const b=new nt(g);b.needsUpdate=!0,f(b)}),n.load(Bg(p,a.path),v,void 0,m)})}).then(function(p){u===!0&&c.revokeObjectURL(h),p.flipY=!1,o.name&&(p.name=o.name);const f=(s.samplers||{})[o.sampler]||{};return p.magFilter=Ug[f.magFilter]||1006,p.minFilter=Ug[f.minFilter]||1008,p.wrapS=kg[f.wrapS]||1e3,p.wrapT=kg[f.wrapT]||1e3,i.associations.set(p,{textures:e}),p}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",h),null});return this.textureCache[l]=d,d}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord===void 0||n.texCoord==0||t==="aoMap"&&n.texCoord==1||console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Ne.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ne.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=i.associations.get(s);s=i.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),i.associations.set(s,o)}}return e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xh,ot.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Zr,ot.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return qn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else if(l[Ne.KHR_MATERIALS_UNLIT]){const u=i[Ne.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new ve(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=2);const h=s.alphaMode||JM;if(h===KM?(o.transparent=!0,o.depthWrite=!1):(o.format=1022,o.transparent=!1,h===ZM&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==un&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&a!==un&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==un&&(o.emissive=new ve().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==un&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let u;return u=a===gu?i[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):new a(o),s.name&&(u.name=s.name),u.map&&(u.map.encoding=3001),u.emissiveMap&&(u.emissiveMap.encoding=3001),nr(u,s),t.associations.set(u,{materials:e}),s.extensions&&ha(i,u,s),u})}createUniqueName(e){const t=Oe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gg(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=tS(c),u=i[h];if(u)a.push(u.promise);else{let d;d=c.extensions&&c.extensions[Ne.KHR_DRACO_MESH_COMPRESSION]?s(c):Gg(new qe,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?QM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,f=h.length;p<f;p++){const m=h[p],v=a[p];let g;const b=c[p];if(v.mode===YM||v.mode===Og||v.mode===Ng||v.mode===void 0)g=s.isSkinnedMesh===!0?new Hh(m,b):new Me(m,b),g.isSkinnedMesh!==!0||g.geometry.attributes.skinWeight.normalized||g.normalizeSkinWeights(),v.mode===Og?g.geometry=Wg(g.geometry,1):v.mode===Ng&&(g.geometry=Wg(g.geometry,2));else if(v.mode===jM)g=new el(m,b);else if(v.mode===XM)g=new Qo(m,b);else if(v.mode===qM)g=new tg(m,b);else{if(v.mode!==WM)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);g=new ig(m,b)}Object.keys(g.geometry.morphAttributes).length>0&&eS(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),nr(g,s),v.extensions&&ha(i,g,v),t.assignFinalMaterial(g),u.push(g)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return u[0];const d=new jn;t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(i)return n.type==="perspective"?t=new dt(So.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ki(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),nr(t,n),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const t=this.json.animations[e],n=[],i=[],s=[],a=[],o=[];for(let l=0,c=t.channels.length;l<c;l++){const h=t.channels[l],u=t.samplers[h.sampler],d=h.target,p=d.node!==void 0?d.node:d.id,f=t.parameters!==void 0?t.parameters[u.input]:u.input,m=t.parameters!==void 0?t.parameters[u.output]:u.output;n.push(this.getDependency("node",p)),i.push(this.getDependency("accessor",f)),s.push(this.getDependency("accessor",m)),a.push(u),o.push(d)}return Promise.all([Promise.all(n),Promise.all(i),Promise.all(s),Promise.all(a),Promise.all(o)]).then(function(l){const c=l[0],h=l[1],u=l[2],d=l[3],p=l[4],f=[];for(let v=0,g=c.length;v<g;v++){const b=c[v],x=h[v],y=u[v],w=d[v],M=p[v];if(b===void 0)continue;let T;switch(b.updateMatrix(),b.matrixAutoUpdate=!0,ss[M.path]){case ss.weights:T=aa;break;case ss.rotation:T=er;break;default:T=oa}const P=b.name?b.name:b.uuid,D=w.interpolation!==void 0?$M[w.interpolation]:2301,I=[];ss[M.path]===ss.weights?b.traverse(function(X){X.isMesh===!0&&X.morphTargetInfluences&&I.push(X.name?X.name:X.uuid)}):I.push(P);let N=y.array;if(y.normalized){const X=yu(N.constructor),G=new Float32Array(N.length);for(let z=0,$=N.length;z<$;z++)G[z]=N[z]*X;N=G}for(let X=0,G=I.length;X<G;X++){const z=new T(I[X]+"."+ss[M.path],x.array,N,D);w.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function($){return new(this instanceof er?GM:tr)(this.times,this.values,this.getValueSize()/3,$)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),f.push(z)}}const m=t.name?t.name:"animation_"+e;return new ou(m,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(l=s.isBone===!0?new Vh:o.length>1?new jn:o.length===1?o[0]:new Fe,l!==o[0])for(let c=0,h=o.length;c<h;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=a),nr(l,s),s.extensions&&ha(n,l,s),s.matrix!==void 0){const c=new ye;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,a=new jn;i.name&&(a.name=s.createUniqueName(i.name)),nr(a,i),i.extensions&&ha(n,a,i);const o=i.nodes||[],l=[];for(let c=0,h=o.length;c<h;c++)l.push(Vg(o[c],a,t,s));return Promise.all(l).then(function(){return s.associations=(c=>{const h=new Map;for(const[u,d]of s.associations)(u instanceof ot||u instanceof nt)&&h.set(u,d);return c.traverse(u=>{const d=s.associations.get(u);d!=null&&h.set(u,d)}),h})(a),a})}}function Vg(r,e,t,n){const i=t.nodes[r];return n.getDependency("node",r).then(function(s){if(i.skin===void 0)return s;let a;return n.getDependency("skin",i.skin).then(function(o){a=o;const l=[];for(let c=0,h=a.joints.length;c<h;c++)l.push(n.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=o.length;u<d;u++){const p=o[u];if(p){c.push(p);const f=new ye;a.inverseBindMatrices!==void 0&&f.fromArray(a.inverseBindMatrices.array,16*u),h.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[u])}l.bind(new Wh(c,h),l.matrixWorld)}),s})}).then(function(s){e.add(s);const a=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const h=o[l];a.push(Vg(h,s,t,n))}}return Promise.all(a)})}function Gg(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=vu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return nr(r,e),function(a,o,l){const c=o.attributes,h=new Lt;if(c.POSITION===void 0)return;{const p=l.json.accessors[c.POSITION],f=p.min,m=p.max;if(f===void 0||m===void 0)return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(h.set(new C(f[0],f[1],f[2]),new C(m[0],m[1],m[2])),p.normalized){const v=yu(ca[p.componentType]);h.min.multiplyScalar(v),h.max.multiplyScalar(v)}}const u=o.targets;if(u!==void 0){const p=new C,f=new C;for(let m=0,v=u.length;m<v;m++){const g=u[m];if(g.POSITION!==void 0){const b=l.json.accessors[g.POSITION],x=b.min,y=b.max;if(x!==void 0&&y!==void 0){if(f.setX(Math.max(Math.abs(x[0]),Math.abs(y[0]))),f.setY(Math.max(Math.abs(x[1]),Math.abs(y[1]))),f.setZ(Math.max(Math.abs(x[2]),Math.abs(y[2]))),b.normalized){const w=yu(ca[b.componentType]);f.multiplyScalar(w)}p.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}h.expandByVector(p)}a.boundingBox=h;const d=new fi;h.getCenter(d.center),d.radius=h.min.distanceTo(h.max)/2,a.boundingSphere=d}(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?function(a,o,l){let c=!1,h=!1;for(let p=0,f=o.length;p<f;p++){const m=o[p];if(m.POSITION!==void 0&&(c=!0),m.NORMAL!==void 0&&(h=!0),c&&h)break}if(!c&&!h)return Promise.resolve(a);const u=[],d=[];for(let p=0,f=o.length;p<f;p++){const m=o[p];if(c){const v=m.POSITION!==void 0?l.getDependency("accessor",m.POSITION):a.attributes.position;u.push(v)}if(h){const v=m.NORMAL!==void 0?l.getDependency("accessor",m.NORMAL):a.attributes.normal;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(d)]).then(function(p){const f=p[0],m=p[1];return c&&(a.morphAttributes.position=f),h&&(a.morphAttributes.normal=m),a.morphTargetsRelative=!0,a})}(r,e.targets,t):r})}function Wg(r,e){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o===void 0)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r;for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}const n=t.count-2,i=[];if(e===2)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2==0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s}class iS{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:s,transfer:a}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(s,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const xu=new WeakMap;class En extends Kt{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new iS,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER!="undefined"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),this}init(){if(!this.transcoderPending){const e=new Yn(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new Yn(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([s,a])=>{const o=En.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(En.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(En.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(En.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})})}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new Yn(this.manager);s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials);const a=new $h;return s.load(e,o=>{if(xu.has(o))return xu.get(o).promise.then(t).catch(i);this._createTexture([o]).then(function(l){a.copy(l),a.needsUpdate=!0,t&&t(a)}).catch(i)},n,i),a}_createTextureFrom(e){const{mipmaps:t,width:n,height:i,format:s,type:a,error:o,dfdTransferFn:l,dfdFlags:c}=e;if(a==="error")return Promise.reject(o);const h=new $h(t,n,i,s,1009);return h.minFilter=t.length===1?1006:1008,h.magFilter=1006,h.generateMipmaps=!1,h.needsUpdate=!0,h.encoding=l===2?3001:3e3,h.premultiplyAlpha=!!(1&c),h}_createTexture(e,t={}){const n=t,i=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffers:e,taskConfig:n},e)).then(s=>this._createTextureFrom(s.data));return xu.set(e[0],{promise:i}),i}dispose(){return URL.revokeObjectURL(this.workerSourceURL),this.workerPool.dispose(),this}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jg,qg;En.BasisFormat={ETC1S:0,UASTC_4x4:1},En.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16},En.EngineFormat={RGBAFormat:1023,RGBA_ASTC_4x4_Format:37808,RGBA_BPTC_Format:36492,RGBA_ETC2_EAC_Format:37496,RGBA_PVRTC_4BPPV1_Format:35842,RGBA_S3TC_DXT5_Format:33779,RGB_ETC1_Format:36196,RGB_ETC2_Format:37492,RGB_PVRTC_4BPPV1_Format:35840,RGB_S3TC_DXT1_Format:33776},En.BasisWorker=function(){let r,e,t;const n=_EngineFormat,i=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",function(h){const u=h.data;switch(u.type){case"init":r=u.config,d=u.transcoderBinary,e=new Promise(p=>{t={wasmBinary:d,onRuntimeInitialized:p},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")});break;case"transcode":e.then(()=>{try{const{width:p,height:f,hasAlpha:m,mipmaps:v,format:g,dfdTransferFn:b,dfdFlags:x}=function(w){const M=new t.KTX2File(new Uint8Array(w));function T(){M.close(),M.delete()}if(!M.isValid())throw T(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const P=M.isUASTC()?s.UASTC_4x4:s.ETC1S,D=M.getWidth(),I=M.getHeight(),N=M.getLevels(),X=M.getHasAlpha(),G=M.getDFDTransferFunc(),z=M.getDFDFlags(),{transcoderFormat:$,engineFormat:le}=function(se,ue,fe,Q){let A,R;const V=se===s.ETC1S?o:l;for(let W=0;W<V.length;W++){const O=V[W];if(r[O.if]&&O.basisFormat.includes(se)&&(!O.needsPowerOfTwo||c(ue)&&c(fe)))return A=O.transcoderFormat[Q?1:0],R=O.engineFormat[Q?1:0],{transcoderFormat:A,engineFormat:R}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),A=i.RGBA32,R=n.RGBAFormat,{transcoderFormat:A,engineFormat:R}}(P,D,I,X);if(!D||!I||!N)throw T(),new Error("THREE.KTX2Loader:	Invalid texture");if(!M.startTranscoding())throw T(),new Error("THREE.KTX2Loader: .startTranscoding failed");const re=[];for(let se=0;se<N;se++){const ue=M.getImageLevelInfo(se,0,0),fe=ue.origWidth,Q=ue.origHeight,A=new Uint8Array(M.getImageTranscodedSizeInBytes(se,0,0,$));if(!M.transcodeImage(A,se,0,0,$,0,-1,-1))throw T(),new Error("THREE.KTX2Loader: .transcodeImage failed.");re.push({data:A,width:fe,height:Q})}return T(),{width:D,height:I,hasAlpha:X,mipmaps:re,format:le,dfdTransferFn:G,dfdFlags:z}}(u.buffers[0]),y=[];for(let w=0;w<v.length;++w)y.push(v[w].data.buffer);self.postMessage({type:"transcode",id:u.id,width:p,height:f,hasAlpha:m,mipmaps:v,format:g,dfdTransferFn:b,dfdFlags:x},y)}catch(p){console.error(p),self.postMessage({type:"error",id:u.id,error:p.message})}})}var d});const a=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGB_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC1],engineFormat:[n.RGB_ETC1_Format,n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],o=a.sort(function(h,u){return h.priorityETC1S-u.priorityETC1S}),l=a.sort(function(h,u){return h.priorityUASTC-u.priorityUASTC});function c(h){return h<=2||(h&h-1)==0&&h!==0}};const pn=Symbol("retainerCount"),$n=Symbol("recentlyUsed"),ml=Symbol("evict"),ua=Symbol("evictionThreshold"),bu=Symbol("cache");class rS{constructor(e,t=5){this[jg]=new Map,this[qg]=[],this[bu]=e,this[ua]=t}set evictionThreshold(e){this[ua]=e,this[ml]()}get evictionThreshold(){return this[ua]}get cache(){return this[bu]}retainerCount(e){return this[pn].get(e)||0}reset(){this[pn].clear(),this[$n]=[]}retain(e){this[pn].has(e)||this[pn].set(e,0),this[pn].set(e,this[pn].get(e)+1);const t=this[$n].indexOf(e);t!==-1&&this[$n].splice(t,1),this[$n].unshift(e),this[ml]()}release(e){this[pn].has(e)&&this[pn].set(e,Math.max(this[pn].get(e)-1,0)),this[ml]()}[(jg=pn,qg=$n,ml)](){if(!(this[$n].length<this[ua]))for(let e=this[$n].length-1;e>=this[ua];--e){const t=this[$n][e];this[pn].get(t)===0&&(this[bu].delete(t),this[$n].splice(e,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=(r,e)=>{const t=new Map;for(const n of r.mappings)for(const i of n.variants)t.set(e[i],{material:null,gltfMaterialIndex:n.material});return t};class aS{constructor(e){this.parser=e,this.name="KHR_materials_variants"}afterRoot(e){const t=this.parser,n=t.json;if(n.extensions===void 0||n.extensions[this.name]===void 0)return null;const i=(s=>{const a=[],o=new Set;for(const l of s){let c=l,h=0;for(;o.has(c);)c=l+"."+ ++h;o.add(c),a.push(c)}return a})((n.extensions[this.name].variants||[]).map(s=>s.name));for(const s of e.scenes)s.traverse(a=>{const o=t.associations.get(a);if(o==null||o.meshes==null)return;const l=o.meshes,c=n.meshes[l].primitives,h="isMesh"in a?[a]:a.children;for(let u=0;u<c.length;u++){const d=c[u].extensions;d&&d[this.name]&&(h[u].userData.variantMaterials=sS(d[this.name],i))}});return e.userData.variants=i,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xg,Yg;const Jn=new Map,wu=new Map;let $g;const Jg=new class extends Kt{constructor(r){super(r),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(r){return this.decoderPath=r,this}setDecoderConfig(r){return this.decoderConfig=r,this}setWorkerLimit(r){return this.workerLimit=r,this}load(r,e,t,n){const i=new Yn(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(r,s=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,a).then(e).catch(n)},t,n)}decodeDracoFile(r,e,t,n){const i={attributeIDs:t||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!t};this.decodeGeometry(r,i).then(e)}decodeGeometry(r,e){for(const o in e.attributeTypes){const l=e.attributeTypes[o];l.BYTES_PER_ELEMENT!==void 0&&(e.attributeTypes[o]=l.name)}const t=JSON.stringify(e);if(mu.has(r)){const o=mu.get(r);if(o.key===t)return o.promise;if(r.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const i=this.workerNextTaskID++,s=r.byteLength,a=this._getWorker(i,s).then(o=>(n=o,new Promise((l,c)=>{n._callbacks[i]={resolve:l,reject:c},n.postMessage({type:"decode",id:i,taskConfig:e,buffer:r},[r])}))).then(o=>this._createGeometry(o.geometry));return a.catch(()=>!0).then(()=>{n&&i&&this._releaseTask(n,i)}),mu.set(r,{key:t,promise:a}),a}_createGeometry(r){const e=new qe;r.index&&e.setIndex(new je(r.index.array,1));for(let t=0;t<r.attributes.length;t++){const n=r.attributes[t],i=n.name,s=n.array,a=n.itemSize;e.setAttribute(i,new je(s,a))}return e}_loadLibrary(r,e){const t=new Yn(this.manager);return t.setPath(this.decoderPath),t.setResponseType(e),t.setWithCredentials(this.withCredentials),new Promise((n,i)=>{t.load(r,n,void 0,i)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const r=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return r?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(t=>{const n=t[0];r||(this.decoderConfig.wasmBinary=t[1]);const i=_M.toString(),s=["/* draco decoder */",n,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(r,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(i){const s=i.data;switch(s.type){case"decode":n._callbacks[s.id].resolve(s);break;case"error":n._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,i){return n._taskLoad>i._taskLoad?-1:1});const t=this.workerPool[this.workerPool.length-1];return t._taskCosts[r]=e,t._taskLoad+=e,t})}_releaseTask(r,e){r._taskLoad-=r._taskCosts[e],delete r._callbacks[e],delete r._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(r=>r._taskLoad))}dispose(){for(let r=0;r<this.workerPool.length;++r)this.workerPool[r].terminate();return this.workerPool.length=0,this}};let Zg;const _u=new En;let Mu,Su;const as=Symbol("loader"),Li=Symbol("evictionPolicy"),Kg=Symbol("GLTFInstance");class Ct extends Vt{constructor(e){super(),this[Yg]=new MM().register(t=>new aS(t)),this[Kg]=e,this[as].setDRACOLoader(Jg),this[as].setKTX2Loader(_u)}static setDRACODecoderLocation(e){$g=e,Jg.setDecoderPath(e)}static getDRACODecoderLocation(){return $g}static setKTX2TranscoderLocation(e){Zg=e,_u.setTranscoderPath(e)}static getKTX2TranscoderLocation(){return Zg}static setMeshoptDecoderLocation(e){var t;Mu!==e&&(Mu=e,Su=(t=e,new Promise((n,i)=>{const s=document.createElement("script");document.body.appendChild(s),s.onload=n,s.onerror=i,s.async=!0,s.src=t})).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Mu}static initializeKTX2Loader(e){_u.detectSupport(e)}static get cache(){return Jn}static clearCache(){Jn.forEach((e,t)=>{this.delete(t)}),this[Li].reset()}static has(e){return Jn.has(e)}static async delete(e){if(!this.has(e))return;const t=Jn.get(e);wu.delete(e),Jn.delete(e),(await t).dispose()}static hasFinishedLoading(e){return!!wu.get(e)}get[(Xg=Li,Yg=as,Li)](){return this.constructor[Li]}async preload(e,t,n=()=>{}){if(this.dispatchEvent({type:"preload",element:t,src:e}),!Jn.has(e)){Su!=null&&this[as].setMeshoptDecoder(await Su);const i=((o,l,c=()=>{})=>{const h=u=>{const d=u.loaded/u.total;c(Math.max(0,Math.min(1,isFinite(d)?d:1)))};return new Promise((u,d)=>{l.load(o,u,h,d)})})(e,this[as],o=>{n(.8*o)}),s=this[Kg],a=i.then(o=>s.prepare(o)).then(o=>(n(.9),new s(o)));Jn.set(e,a)}await Jn.get(e),wu.set(e,!0),n&&n(1)}async load(e,t,n=()=>{}){await this.preload(e,t,n);const i=await Jn.get(e),s=await i.clone();return this[Li].retain(e),s.dispose=(()=>{const a=s.dispose;let o=!1;return()=>{o||(o=!0,a.apply(s),this[Li].release(e))}})(),s}}Ct[Xg]=new rS(Ct);class Qg extends Fe{constructor(e){super(),this.element=e||document.createElement("div"),this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}Qg.prototype.isCSS2DObject=!0;const Ri=new C,e0=new ye,t0=new ye,n0=new C,i0=new C;class oS{constructor(){const e=this;let t,n,i,s;const a={objects:new WeakMap},o=document.createElement("div");function l(h,u,d){if(h.isCSS2DObject){h.onBeforeRender(e,u,d),Ri.setFromMatrixPosition(h.matrixWorld),Ri.applyMatrix4(t0);const p=h.element;/apple/i.test(navigator.vendor)?p.style.transform="translate(-50%,-50%) translate("+Math.round(Ri.x*i+i)+"px,"+Math.round(-Ri.y*s+s)+"px)":p.style.transform="translate(-50%,-50%) translate("+(Ri.x*i+i)+"px,"+(-Ri.y*s+s)+"px)",p.style.display=h.visible&&Ri.z>=-1&&Ri.z<=1?"":"none";const f={distanceToCameraSquared:c(d,h)};a.objects.set(h,f),p.parentNode!==o&&o.appendChild(p),h.onAfterRender(e,u,d)}for(let p=0,f=h.children.length;p<f;p++)l(h.children[p],u,d)}function c(h,u){return n0.setFromMatrixPosition(h.matrixWorld),i0.setFromMatrixPosition(u.matrixWorld),n0.distanceToSquared(i0)}o.style.overflow="hidden",this.domElement=o,this.getSize=function(){return{width:t,height:n}},this.render=function(h,u){h.autoUpdate===!0&&h.updateMatrixWorld(),u.parent===null&&u.updateMatrixWorld(),e0.copy(u.matrixWorldInverse),t0.multiplyMatrices(u.projectionMatrix,e0),l(h,h,u),function(d){const p=function(m){const v=[];return m.traverse(function(g){g.isCSS2DObject&&v.push(g)}),v}(d).sort(function(m,v){return a.objects.get(m).distanceToCameraSquared-a.objects.get(v).distanceToCameraSquared}),f=p.length;for(let m=0,v=p.length;m<v;m++)p[m].element.style.zIndex=f-m}(h)},this.setSize=function(h,u){t=h,n=u,i=t/2,s=n/2,o.style.width=h+"px",o.style.height=u+"px"}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=r=>r&&r!=="null"?lS(r):null,s0=()=>{if(Of)return;const r=[];throw Df||r.push("WebXR Device API"),Ff||r.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${r.join(", ")}`)},lS=r=>new URL(r,window.location.toString()).toString(),Tu=(r,e)=>{let t=null;return(...n)=>{t!=null&&self.clearTimeout(t),t=self.setTimeout(()=>{t=null,r(...n)},e)}},ir=(r,e,t)=>Math.max(e,Math.min(t,r)),Eu=(()=>{const r=(()=>{const e=document.head!=null?Array.from(document.head.querySelectorAll("meta")):[];for(const t of e)if(t.name==="viewport")return!0;return!1})();return r||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>r?window.devicePixelRatio:1})(),a0=(()=>{const r=new RegExp("[?&]model-viewer-debug-mode(&|$)");return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(r)})(),o0=(r=0)=>new Promise(e=>setTimeout(e,r));class jt{constructor(e=50){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(.001,e)}update(e,t,n,i){const s=2e-4*this.naturalFrequency;if(e==null||i===0||e===t&&this.velocity===0)return t;if(n<0)return e;const a=e-t,o=this.velocity+this.naturalFrequency*a,l=a+n*o,c=Math.exp(-this.naturalFrequency*n),h=(o-this.naturalFrequency*l)*c,u=-this.naturalFrequency*(h+o*c);return Math.abs(h)<s*Math.abs(i)&&u*a>=0?(this.velocity=0,t):(this.velocity=h,t+l*c)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=(r,e)=>({type:"number",number:r,unit:e}),rr=(()=>{const r={};return e=>{const t=e;if(t in r)return r[t];const n=[];let i=0;for(;e;){if(++i>1e3){e="";break}const s=l0(e),a=s.nodes[0];if(a==null||a.terms.length===0)break;n.push(a),e=s.remainingInput}return r[t]=n}})(),l0=(()=>{const r=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,t=/^[\),]/;return n=>{const i=[];for(;n.length&&(n=n.trim(),!t.test(n));)if(n[0]==="("){const{nodes:s,remainingInput:a}=c0(n);n=a,i.push({type:"function",name:{type:"ident",value:"calc"},arguments:s})}else if(r.test(n)){const s=cS(n),a=s.nodes[0];if((n=s.remainingInput)[0]==="("){const{nodes:o,remainingInput:l}=c0(n);i.push({type:"function",name:a,arguments:o}),n=l}else i.push(a)}else if(e.test(n))i.push({type:"operator",value:n[0]}),n=n.slice(1);else{const{nodes:s,remainingInput:a}=n[0]==="#"?uS(n):hS(n);if(s.length===0)break;i.push(s[0]),n=a}return{nodes:[{type:"expression",terms:i}],remainingInput:n}}})(),cS=(()=>{const r=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const t=e.match(r);return{nodes:[{type:"ident",value:t==null?e:e.substr(0,t.index)}],remainingInput:t==null?"":e.substr(t.index)}}})(),hS=(()=>{const r=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,t=/^(m|mm|cm|rad|deg|[%])$/;return n=>{const i=n.match(r),s=i==null?"0":i[0],a=(n=s==null?n:n.slice(s.length)).match(e);let o=a!=null&&a[0]!==""?a[0]:null;const l=a==null?n:n.slice(o.length);return o==null||t.test(o)||(o=null),{nodes:[{type:"number",number:parseFloat(s)||0,unit:o}],remainingInput:l}}})(),uS=(()=>{const r=/^[a-f0-9]*/i;return e=>{const t=(e=e.slice(1).trim()).match(r);return{nodes:t==null?[]:[{type:"hex",value:t[0]}],remainingInput:t==null?e:e.slice(t[0].length)}}})(),c0=r=>{const e=[];for(r=r.slice(1).trim();r.length;){const t=l0(r);if(e.push(t.nodes[0]),(r=t.remainingInput.trim())[0]===",")r=r.slice(1).trim();else if(r[0]===")"){r=r.slice(1);break}}return{nodes:e,remainingInput:r}},h0=Symbol("visitedTypes");class dS{constructor(e){this[h0]=e}walk(e,t){const n=e.slice();for(;n.length;){const i=n.shift();switch(this[h0].indexOf(i.type)>-1&&t(i),i.type){case"expression":n.unshift(...i.terms);break;case"function":n.unshift(i.name,...i.arguments)}}}}const Ci=Object.freeze({type:"number",number:0,unit:null}),gl=(r,e=0)=>{let{number:t,unit:n}=r;if(isFinite(t)){if(r.unit==="rad"||r.unit==null)return r}else t=e,n="rad";return{type:"number",number:(n==="deg"&&t!=null?t:0)*Math.PI/180,unit:"rad"}},u0=(r,e=0)=>{let t,{number:n,unit:i}=r;if(isFinite(n)){if(r.unit==="m")return r}else n=e,i="m";switch(i){default:t=1;break;case"cm":t=.01;break;case"mm":t=.001}return{type:"number",number:t*n,unit:"m"}},An=(()=>{const r=t=>t,e={rad:r,deg:gl,m:r,mm:u0,cm:u0};return(t,n=Ci)=>{isFinite(t.number)||(t.number=n.number,t.unit=n.unit);const{unit:i}=t;if(i==null)return t;const s=e[i];return s==null?n:s(t)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0 extends Qg{constructor(e){super(document.createElement("div")),this.normal=new C(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=e.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(e.position),this.updateNormal(e.normal)}get facingCamera(){return!this.element.classList.contains("hide")}show(){this.facingCamera&&this.initialized||this.updateVisibility(!0)}hide(){!this.facingCamera&&this.initialized||this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(e){if(e==null)return;const t=rr(e)[0].terms;for(let n=0;n<3;++n)this.position.setComponent(n,An(t[n]).number);this.updateMatrixWorld()}updateNormal(e){if(e==null)return;const t=rr(e)[0].terms;for(let n=0;n<3;++n)this.normal.setComponent(n,An(t[n]).number)}orient(e){this.pivot.style.transform=`rotate(${e}rad)`}updateVisibility(e){e?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach(t=>{if(t.nodeType!==Node.ELEMENT_NODE)return;const n=t,i=n.dataset.visibilityAttribute;if(i!=null){const s=`data-${i}`;e?n.setAttribute(s,""):n.removeAttribute(s)}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:e}}))}),this.initialized=!0}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=(r,e,t)=>{let n=t;const i=new C;return r.traverse(s=>{let a,o;s.updateWorldMatrix(!1,!1);const l=s.geometry;if(l!==void 0){if(l.isGeometry){const c=l.vertices;for(a=0,o=c.length;a<o;a++)i.copy(c[a]),i.applyMatrix4(s.matrixWorld),n=e(n,i)}else if(l.isBufferGeometry){const{position:c}=l.attributes;if(c!==void 0){const h=(u=>{if(!u.normalized)return 1;const d=u.array;return d instanceof Int8Array?1/127:d instanceof Uint8Array?1/255:d instanceof Int16Array?1/32767:d instanceof Uint16Array?1/65535:1})(c);for(a=0,o=c.count;a<o;a++)i.fromBufferAttribute(c,a),i.multiplyScalar(h),i.applyMatrix4(s.matrixWorld),n=e(n,i)}}}}),n};class pS extends ul{constructor(e,t,n){super(),this.shadowMaterial=new vg,this.boundingBox=new Lt,this.size=new C,this.shadowScale=1,this.isAnimated=!1,this.side="bottom",this.needsUpdate=!1,this.intensity=0,this.castShadow=!0,this.frustumCulled=!1,this.floor=new Me(new _i,this.shadowMaterial),this.floor.rotateX(-Math.PI/2),this.floor.receiveShadow=!0,this.floor.castShadow=!1,this.floor.frustumCulled=!1,this.add(this.floor),e.target.add(this),this.target=e.target,this.setScene(e,t,n)}setScene(e,t,n){if(this.side=n,this.isAnimated=e.animationNames.length>0,this.boundingBox.copy(e.boundingBox),this.size.copy(e.size),this.side==="back"){const{min:o,max:l}=this.boundingBox;[o.y,o.z]=[o.z,o.y],[l.y,l.z]=[l.z,l.y],[this.size.y,this.size.z]=[this.size.z,this.size.y],this.rotation.x=Math.PI/2,this.rotation.y=Math.PI}else this.rotation.x=0,this.rotation.y=0;const{boundingBox:i,size:s}=this;if(this.isAnimated){const o=2*Math.max(s.x,s.y,s.z);s.y=o,i.expandByVector(s.subScalar(o).multiplyScalar(-.5)),i.max.y=i.min.y+o,s.set(o,o,o)}i.getCenter(this.floor.position);const a=i.max.y+.002*s.y;n==="bottom"?(this.position.y=a,this.position.z=0):(this.position.y=0,this.position.z=a),this.setSoftness(t)}setSoftness(e){const t=Math.pow(2,9-3*e);this.setMapSize(t)}setMapSize(e){const{camera:t,mapSize:n,map:i}=this.shadow,{size:s,boundingBox:a}=this;i!=null&&(i.dispose(),this.shadow.map=null),this.isAnimated&&(e*=2);const o=Math.floor(s.x>s.z?e:e*s.x/s.z),l=Math.floor(s.x>s.z?e*s.z/s.x:e);n.set(o,l);const c=2.5*s.x/o,h=2.5*s.z/l;t.left=-a.max.x-c,t.right=-a.min.x+c,t.bottom=a.min.z-h,t.top=a.max.z+h,this.setScaleAndOffset(this.shadowScale,0),this.floor.scale.set(s.x+2*c,s.z+2*h,1),this.needsUpdate=!0,this.shadow.needsUpdate=!0}setIntensity(e){this.shadowMaterial.opacity=e,e>0?(this.visible=!0,this.floor.visible=!0):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.shadowMaterial.opacity}setRotation(e){if(this.side!=="bottom")return this.shadow.camera.up.set(0,1,0),void this.shadow.updateMatrices(this);this.shadow.camera.up.set(Math.sin(e),0,Math.cos(e)),this.shadow.updateMatrices(this)}setScaleAndOffset(e,t){const n=this.size.y,{camera:i}=this.shadow;this.shadowScale=e,i.near=0,i.far=n-t/e,i.updateProjectionMatrix(),i.scale.setScalar(e);const s=.002*n;this.floor.position.y=2*s-i.far}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=22.5*Math.PI/180,Lu=Math.sin(p0),f0=Math.tan(p0),Ru=new C,m0=new C,g0=new C,fS=new class{constructor(r,e,t=0,n=1/0){this.ray=new Zi(r,e),this.near=t,this.far=n,this.camera=null,this.layers=new jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(r,e){this.ray.set(r,e)}setFromCamera(r,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(r.x,r.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(r.x,r.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(r,e=!0,t=[]){return du(r,this,t,e),t.sort(Pg),t}intersectObjects(r,e=!0,t=[]){for(let n=0,i=r.length;n<i;n++)du(r[n],this,t,e);return t.sort(Pg),t}},mS=new C,da=new he;class gS extends Mn{constructor({canvas:e,element:t,width:n,height:i}){super(),this.context=null,this.annotationRenderer=new oS,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.renderCount=0,this.externalRenderer=null,this.camera=new dt(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new Fe,this.modelContainer=new Fe,this.animationNames=[],this.boundingBox=new Lt,this.size=new C,this.idealCameraDistance=0,this.fieldOfViewAspect=0,this.framedFieldOfView=45,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.exposure=1,this.canScale=!0,this.tightBounds=!1,this.isDirty=!1,this.goalTarget=new C,this.targetDamperX=new jt,this.targetDamperY=new jt,this.targetDamperZ=new jt,this._currentGLTF=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.name="ModelScene",this.element=t,this.canvas=e,this.camera=new dt(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(n,i),this.target.name="Target",this.modelContainer.name="ModelContainer",this.target.add(this.modelContainer),this.mixer=new Cg(this.modelContainer);const{domElement:s}=this.annotationRenderer,{style:a}=s;a.display="none",a.pointerEvents="none",a.position="absolute",a.top="0",this.element.shadowRoot.querySelector(".default").appendChild(s),this.schemaElement.setAttribute("type","application/ld+json")}createContext(){this.context=this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}async setObject(e){this.reset(),this.modelContainer.add(e),await this.setupScene()}async setSource(e,t=()=>{}){if(!e||e===this.url)return void t(1);if(this.reset(),this.url=e,this.externalRenderer!=null){const o=await this.externalRenderer.load(t);return this.idealCameraDistance=o.framedRadius/Lu,this.fieldOfViewAspect=o.fieldOfViewAspect,this.frameModel(),void this.dispatchEvent({type:"model-load",url:this.url})}let n;this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);try{n=await new Promise(async(o,l)=>{this.cancelPendingSourceChange=()=>l();try{o(await this.element[Be].loader.load(e,this.element,t))}catch(c){l(c)}})}catch(o){if(o==null)return;throw o}this.reset(),this.url=e,this._currentGLTF=n,n!=null&&this.modelContainer.add(n.scene);const{animations:i}=n,s=new Map,a=[];for(const o of i)s.set(o.name,o),a.push(o.name);this.animations=i,this.animationsByName=s,this.animationNames=a,await this.setupScene()}async setupScene(){this.updateBoundingBox();let e=null;this.tightBounds===!0&&(await this.element.requestUpdate("cameraTarget"),e=this.getTarget()),this.updateFraming(e),this.frameModel(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.dispatchEvent({type:"model-load",url:this.url})}reset(){this.url=null,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0);const e=this._currentGLTF;if(e!=null){for(const t of this.modelContainer.children)this.modelContainer.remove(t);e.dispose(),this._currentGLTF=null}this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}get currentGLTF(){return this._currentGLTF}setSize(e,t){if(this.width!==e||this.height!==t){if(this.width=Math.max(e,1),this.height=Math.max(t,1),this.annotationRenderer.setSize(e,t),this.aspect=this.width/this.height,this.frameModel(),this.externalRenderer!=null){const n=Eu();this.externalRenderer.resize(e*n,t*n)}this.queueRender()}}updateBoundingBox(){if(this.target.remove(this.modelContainer),this.tightBounds===!0){const e=(t,n)=>t.expandByPoint(n);this.boundingBox=Au(this.modelContainer,e,new Lt)}else this.boundingBox.setFromObject(this.modelContainer);this.boundingBox.getSize(this.size),this.target.add(this.modelContainer)}updateFraming(e=null){this.target.remove(this.modelContainer),e==null&&(e=this.boundingBox.getCenter(new C));const t=Math.sqrt(Au(this.modelContainer,(n,i)=>Math.max(n,e.distanceToSquared(i)),0));this.idealCameraDistance=t/Lu,this.fieldOfViewAspect=Au(this.modelContainer,(n,i)=>{i.sub(e);const s=Math.sqrt(i.x*i.x+i.z*i.z);return Math.max(n,s/(this.idealCameraDistance-Math.abs(i.y)))},0)/f0,this.target.add(this.modelContainer)}frameModel(){const e=f0*Math.max(1,this.fieldOfViewAspect/this.aspect);this.framedFieldOfView=2*Math.atan(e)*180/Math.PI}getNDC(e,t){if(this.xrCamera!=null)da.set(e/window.screen.width,t/window.screen.height);else{const n=this.element.getBoundingClientRect();da.set((e-n.x)/this.width,(t-n.y)/this.height)}return da.multiplyScalar(2).subScalar(1),da.y*=-1,da}getSize(){return{width:this.width,height:this.height}}setTarget(e,t,n){this.goalTarget.set(-e,-t,-n)}setTargetDamperDecayTime(e){this.targetDamperX.setDecayTime(e),this.targetDamperY.setDecayTime(e),this.targetDamperZ.setDecayTime(e)}getTarget(){return mS.copy(this.goalTarget).multiplyScalar(-1)}jumpToGoal(){this.updateTarget(1e4)}updateTarget(e){const t=this.goalTarget,n=this.target.position;if(!t.equals(n)){const i=this.idealCameraDistance;let{x:s,y:a,z:o}=n;s=this.targetDamperX.update(s,t.x,e,i),a=this.targetDamperY.update(a,t.y,e,i),o=this.targetDamperZ.update(o,t.z,e,i),this.target.position.set(s,a,o),this.target.updateMatrixWorld(),this.setShadowRotation(this.yaw),this.queueRender()}}pointTowards(e,t){const{x:n,z:i}=this.position;this.yaw=Math.atan2(e-n,t-i)}set yaw(e){this.rotation.y=e,this.updateMatrixWorld(!0),this.setShadowRotation(e),this.queueRender()}get yaw(){return this.rotation.y}set animationTime(e){this.mixer.setTime(e)}get animationTime(){return this.currentAnimationAction!=null?this.currentAnimationAction.time:0}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(e=null,t=0){if(this._currentGLTF==null)return;const{animations:n}=this;if(n==null||n.length===0)return void console.warn("Cannot play animation (model does not have any animations)");let i=null;e!=null&&(i=this.animationsByName.get(e)),i==null&&(i=n[0]);try{const{currentAnimationAction:s}=this,a=this.mixer.clipAction(i,this);this.currentAnimationAction=a,this.element.paused?this.mixer.stopAllAction():s!=null&&a!==s&&a.crossFadeFrom(s,t,!1),a.enabled=!0,a.play()}catch(s){console.error(s)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(e){this.mixer.update(e)}updateShadow(){const e=this.shadow;if(e!=null){const t=this.element.arPlacement==="wall"?"back":"bottom";e.setScene(this,this.shadowSoftness,t),e.setRotation(this.yaw)}}setShadowIntensity(e){if(this.shadowIntensity=e,this._currentGLTF!=null&&!(e<=0&&this.shadow==null)){if(this.shadow==null){const t=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new pS(this,this.shadowSoftness,t),this.shadow.setRotation(this.yaw)}this.shadow.setIntensity(e)}}setShadowSoftness(e){this.shadowSoftness=e;const t=this.shadow;t!=null&&t.setSoftness(e)}setShadowRotation(e){const t=this.shadow;t!=null&&t.setRotation(e)}isShadowDirty(){const e=this.shadow;if(e==null)return!1;{const{needsUpdate:t}=e;return e.needsUpdate=!1,t}}setShadowScaleAndOffset(e,t){const n=this.shadow;n!=null&&n.setScaleAndOffset(e,t)}get raycaster(){return fS}positionAndNormalFromPoint(e,t=this){this.raycaster.setFromCamera(e,this.getCamera());const n=this.raycaster.intersectObject(t,!0);if(n.length===0)return null;const i=n[0];return i.face==null?null:(i.face.normal.applyNormalMatrix(new lt().getNormalMatrix(i.object.matrixWorld)),{position:i.point,normal:i.face.normal})}addHotspot(e){this.target.add(e),this.annotationRenderer.domElement.appendChild(e.element)}removeHotspot(e){this.target.remove(e)}forHotspots(e){const{children:t}=this.target;for(let n=0,i=t.length;n<i;n++){const s=t[n];s instanceof d0&&e(s)}}updateHotspots(e){this.forHotspots(t=>{Ru.copy(e),m0.setFromMatrixPosition(t.matrixWorld),Ru.sub(m0),g0.copy(t.normal).transformDirection(this.target.matrixWorld),Ru.dot(g0)<0?t.hide():t.show()})}orientHotspots(e){this.forHotspots(t=>{t.orient(e)})}setHotspotsVisibility(e){this.forHotspots(t=>{t.visible=e})}updateSchema(e){var t;const{schemaElement:n,element:i}=this,{alt:s,poster:a,iosSrc:o}=i;if(e!=null){const l=[{"@type":"MediaObject",contentUrl:e,encodingFormat:((t=e.split(".").pop())===null||t===void 0?void 0:t.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];o&&l.push({"@type":"MediaObject",contentUrl:o,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:a!=null?a:void 0,name:s!=null?s:void 0,encoding:l};n.textContent=JSON.stringify(c),document.head.appendChild(n)}else n.parentElement!=null&&n.parentElement.removeChild(n)}}const os=function(){const r=new Xs({uniforms:{roughnessMap:{value:null},normalMap:{value:null},texelSize:{value:new he(1,1)}},vertexShader:`
			precision mediump float;
			precision mediump int;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {

				vUv = uv;

				gl_Position = vec4( position, 1.0 );

			}
		`,fragmentShader:`
			precision mediump float;
			precision mediump int;

			varying vec2 vUv;

			uniform sampler2D roughnessMap;
			uniform sampler2D normalMap;
			uniform vec2 texelSize;

			#define ENVMAP_TYPE_CUBE_UV

			vec4 envMapTexelToLinear( vec4 a ) { return a; }

			#include <cube_uv_reflection_fragment>

			float roughnessToVariance( float roughness ) {

				float variance = 0.0;

				if ( roughness >= r1 ) {

					variance = ( r0 - roughness ) * ( v1 - v0 ) / ( r0 - r1 ) + v0;

				} else if ( roughness >= r4 ) {

					variance = ( r1 - roughness ) * ( v4 - v1 ) / ( r1 - r4 ) + v1;

				} else if ( roughness >= r5 ) {

					variance = ( r4 - roughness ) * ( v5 - v4 ) / ( r4 - r5 ) + v4;

				} else {

					float roughness2 = roughness * roughness;

					variance = 1.79 * roughness2 * roughness2;

				}

				return variance;

			}

			float varianceToRoughness( float variance ) {

				float roughness = 0.0;

				if ( variance >= v1 ) {

					roughness = ( v0 - variance ) * ( r1 - r0 ) / ( v0 - v1 ) + r0;

				} else if ( variance >= v4 ) {

					roughness = ( v1 - variance ) * ( r4 - r1 ) / ( v1 - v4 ) + r1;

				} else if ( variance >= v5 ) {

					roughness = ( v4 - variance ) * ( r5 - r4 ) / ( v4 - v5 ) + r4;

				} else {

					roughness = pow( 0.559 * variance, 0.25 ); // 0.559 = 1.0 / 1.79

				}

				return roughness;

			}

			void main() {

				gl_FragColor = texture2D( roughnessMap, vUv, - 1.0 );

				if ( texelSize.x == 0.0 ) return;

				float roughness = gl_FragColor.g;

				float variance = roughnessToVariance( roughness );

				vec3 avgNormal;

				for ( float x = - 1.0; x < 2.0; x += 2.0 ) {

					for ( float y = - 1.0; y < 2.0; y += 2.0 ) {

						vec2 uv = vUv + vec2( x, y ) * 0.25 * texelSize;

						avgNormal += normalize( texture2D( normalMap, uv, - 1.0 ).xyz - 0.5 );

					}

				}

				variance += 1.0 - 0.25 * length( avgNormal );

				gl_FragColor.g = varianceToRoughness( variance );

			}
		`,blending:0,depthTest:!1,depthWrite:!1});return r.type="RoughnessMipmapper",r}(),Cu=new Me(new _i(2,2),os),v0=new Ki(0,1,0,1,0,1);let Qt=null,fn=null;class y0{constructor(e){fn=e,fn.compile(Cu,v0)}generateMipmaps(e){if(!("roughnessMap"in e))return;const{roughnessMap:t,normalMap:n}=e;if(t===null||n===null||!t.generateMipmaps||e.userData.roughnessUpdated)return;e.userData.roughnessUpdated=!0;let i=Math.max(t.image.width,n.image.width),s=Math.max(t.image.height,n.image.height);if(!So.isPowerOfTwo(i)||!So.isPowerOfTwo(s))return;const a=fn.getRenderTarget(),o=fn.autoClear;if(fn.autoClear=!1,Qt!==null&&Qt.width===i&&Qt.height===s||(Qt!==null&&Qt.dispose(),Qt=new Ut(i,s,{depthBuffer:!1}),Qt.scissorTest=!0),i!==t.image.width||s!==t.image.height){const h={wrapS:t.wrapS,wrapT:t.wrapT,magFilter:t.magFilter,minFilter:t.minFilter,depthBuffer:!1},u=new Ut(i,s,h);u.texture.generateMipmaps=!0,fn.setRenderTarget(u),e.roughnessMap=u.texture,e.metalnessMap==t&&(e.metalnessMap=e.roughnessMap),e.aoMap==t&&(e.aoMap=e.roughnessMap),e.roughnessMap.offset.copy(t.offset),e.roughnessMap.repeat.copy(t.repeat),e.roughnessMap.center.copy(t.center),e.roughnessMap.rotation=t.rotation,e.roughnessMap.matrixAutoUpdate=t.matrixAutoUpdate,e.roughnessMap.matrix.copy(t.matrix)}os.uniforms.roughnessMap.value=t,os.uniforms.normalMap.value=n;const l=new he(0,0),c=os.uniforms.texelSize.value;for(let h=0;i>=1&&s>=1;++h,i/=2,s/=2)c.set(1/i,1/s),h==0&&c.set(0,0),Qt.viewport.set(l.x,l.y,i,s),Qt.scissor.set(l.x,l.y,i,s),fn.setRenderTarget(Qt),fn.render(Cu,v0),fn.copyFramebufferToTexture(l,e.roughnessMap,h),os.uniforms.roughnessMap.value=e.roughnessMap;t!==e.roughnessMap&&t.dispose(),fn.setRenderTarget(a),fn.autoClear=o}dispose(){os.dispose(),Cu.geometry.dispose(),Qt!=null&&Qt.dispose()}}var pa=function(r,e,t,n){for(var i,s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};const fa=Symbol("currentEnvironmentMap"),vl=Symbol("applyEnvironmentMap"),yl=Symbol("updateEnvironment"),ma=Symbol("cancelEnvironmentUpdate"),Pu=Symbol("onPreload");class vS{constructor(e,t,n,i,s){this.xrLight=e,this.renderer=t,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=s,this.frameCallback=this.onXRFrame.bind(this);const a=t.xr.getSession();if(i&&"XRWebGLBinding"in window){const o=new Go(16);e.environment=o.texture;const l=t.getContext();switch(a.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float")}this.xrWebGLBinding=new XRWebGLBinding(a,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}a.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);const n=t.getLightEstimate(this.lightProbe);if(n){this.xrLight.lightProbe.sh.fromArray(n.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const i=Math.max(1,Math.max(n.primaryLightIntensity.x,Math.max(n.primaryLightIntensity.y,n.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(n.primaryLightIntensity.x/i,n.primaryLightIntensity.y/i,n.primaryLightIntensity.z/i),this.xrLight.directionalLight.intensity=i,this.xrLight.directionalLight.position.copy(n.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class yS extends jn{constructor(e,t=!0){super(),this.lightProbe=new dl,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new ul,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,i=!1;e.xr.addEventListener("sessionstart",()=>{const s=e.xr.getSession();"requestLightProbe"in s&&s.requestLightProbe({reflectionFormat:s.preferredReflectionFormat}).then(a=>{n=new vS(this,e,a,t,()=>{i=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{n&&(n.dispose(),n=null),i&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{n&&(n.dispose(),n=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=Math.PI/24,x0=new he,xl=(r,e,t)=>{let n=e>0?t>0?0:-Math.PI/2:t>0?Math.PI/2:Math.PI;for(let i=0;i<=12;++i)r.push(e+.17*Math.cos(n),t+.17*Math.sin(n),0,e+.2*Math.cos(n),t+.2*Math.sin(n),0),n+=xS};class b0 extends Me{constructor(e,t){const n=new qe,i=[],s=[],{size:a,boundingBox:o}=e,l=a.x/2,c=(t==="back"?a.y:a.z)/2;xl(s,l,c),xl(s,-l,c),xl(s,-l,-c),xl(s,l,-c);const h=s.length/3;for(let p=0;p<h-2;p+=2)i.push(p,p+1,p+3,p,p+3,p+2);const u=h-2;i.push(u,u+1,1,u,1,0),n.setAttribute("position",new ct(s,3)),n.setIndex(i),super(n),this.side=t;const d=this.material;switch(d.side=2,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new jt,this.hitPlane=new Me(new _i(2*(l+.2),2*(c+.2))),this.hitPlane.visible=!1,this.add(this.hitPlane),o.getCenter(this.position),t){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=o.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=o.min.z,this.position.z=this.shadowHeight}e.target.add(this)}getHit(e,t,n){x0.set(t,-n),this.hitPlane.visible=!0;const i=e.positionAndNormalFromPoint(x0,this.hitPlane);return this.hitPlane.visible=!1,i==null?null:i.position}getExpandedHit(e,t,n){this.hitPlane.scale.set(1e3,1e3,1e3);const i=this.getHit(e,t,n);return this.hitPlane.scale.set(1,1,1),i}set offsetHeight(e){this.side==="back"?this.position.z=this.shadowHeight+e:this.position.y=this.shadowHeight+e}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(e){this.goalOpacity=e?.75:0}updateOpacity(e){const t=this.material;t.opacity=this.opacityDamper.update(t.opacity,this.goalOpacity,e,1),this.visible=t.opacity>0}dispose(){var e;const{geometry:t,material:n}=this.hitPlane;t.dispose(),n.dispose(),this.geometry.dispose(),this.material.dispose(),(e=this.parent)===null||e===void 0||e.remove(this)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="not-presenting",w0="session-started",bS="object-placed",wS="failed",_0="tracking",_S="not-tracking",wl=new C,MS=new ye,SS=new C,TS=new dt(45,1,.1,100);class ES extends Vt{constructor(e){super(),this.renderer=e,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.oldBackground=null,this.oldEnvironment=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new C,this.oldFramedFieldOfView=45,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new C,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new C,this.goalYaw=0,this.goalScale=1,this.xDamper=new jt,this.yDamper=new jt,this.zDamper=new jt,this.yawDamper=new jt,this.scaleDamper=new jt,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new b0(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const n=this.transientHitTestSource;if(n==null)return;const i=this.frame.getHitTestResultsForTransientInput(n),s=this.presentedScene,a=this.placementBox;if(i.length===1){this.inputSource=t.inputSource;const{axes:o}=this.inputSource.gamepad,l=a.getHit(this.presentedScene,o[0],o[1]);a.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=1.5*o[0])}else if(i.length===2){a.show=!0,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(i);this.firstRatio=o/s.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=e.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){s0();const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:{root:this.overlay}});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(e),this.threeRenderer.xr.cameraAutoUpdate=!1,e}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return s0(),await navigator.xr.isSessionSupported("immersive-ar")}catch(e){return console.warn("Request to present in WebXR denied:"),console.warn(e),console.warn("Falling back to next ar-mode"),!1}}async present(e,t=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let n=new Promise((c,h)=>{requestAnimationFrame(()=>c())});e.setHotspotsVisibility(!1),e.queueRender(),await n,this._presentedScene=e,this.overlay=e.element.shadowRoot.querySelector("div.default"),t===!0&&(this.xrLight=new yS(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),this.oldEnvironment=c.environment,c.environment=this.xrLight.environment}));const i=await this.resolveARSession();i.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const s=e.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");s.classList.add("enabled"),s.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=s;const a=await i.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=e.yaw,this.goalYaw=e.yaw,this.goalScale=1,this.oldBackground=e.background,e.background=null,this.oldShadowIntensity=e.shadowIntensity,e.setShadowIntensity(0),this.oldTarget.copy(e.getTarget()),this.oldFramedFieldOfView=e.framedFieldOfView,e.addEventListener("model-load",this.onUpdateScene);const o=20*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(o),z:-Math.cos(o)});i.requestHitTestSource({space:a,offsetRay:l}).then(c=>{this.initialHitSource=c}),this.currentSession=i,this.placementBox=new b0(e,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:w0})}async stopPresenting(){if(!this.isPresenting)return;const e=new Promise(t=>{this.resolveCleanup=t});try{await this.currentSession.end(),await e}catch(t){console.warn("Error while trying to end WebXR AR session"),console.warn(t),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const e=this.presentedScene;if(e!=null){const t=e.getTarget();this.oldTarget.copy(t),this.placeOnWall?t.z=e.boundingBox.min.z:t.y=e.boundingBox.min.y,e.setTarget(t.x,t.y,t.z)}}postSessionCleanup(){const e=this.currentSession;e!=null&&(e.removeEventListener("selectstart",this.onSelectStart),e.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const t=this.presentedScene;if(t!=null){const{element:a}=t;this.xrLight!=null&&(t.remove(this.xrLight),this.oldEnvironment!=null&&(t.environment=this.oldEnvironment,this.oldEnvironment=null),this.xrLight.dispose(),this.xrLight=null),t.position.set(0,0,0),t.scale.set(1,1,1),t.setShadowScaleAndOffset(1,0);const o=this.turntableRotation;o!=null&&(t.yaw=o);const l=this.oldShadowIntensity;l!=null&&t.setShadowIntensity(l);const c=this.oldBackground;c!=null&&(t.background=c);const h=this.oldTarget;t.setTarget(h.x,h.y,h.z),t.framedFieldOfView=this.oldFramedFieldOfView,t.xrCamera=null,t.removeEventListener("model-load",this.onUpdateScene),t.orientHotspots(0),a.requestUpdate("cameraTarget"),a.requestUpdate("maxCameraOrbit"),a[wa](a.getBoundingClientRect())}this.renderer.height=0;const n=this.exitWebXRButtonContainer;n!=null&&(n.classList.remove("enabled"),n.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const i=this.transientHitTestSource;i!=null&&(i.cancel(),this.transientHitTestSource=null);const s=this.initialHitSource;s!=null&&(s.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.oldBackground=null,this._presentedScene=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:bl})}updateView(e){const t=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(TS),t.xrCamera=n.getCamera();const{elements:i}=t.getCamera().matrixWorld;if(t.orientHotspots(Math.atan2(i[1],i[5])),this.initialized||(this.placeInitially(),this.initialized=!0),e.requestViewportScale&&e.recommendedViewportScale){const a=e.recommendedViewportScale;e.requestViewportScale(Math.max(a,.25))}const s=this.currentSession.renderState.baseLayer.getViewport(e);this.threeRenderer.setViewport(s.x,s.y,s.width,s.height)}placeInitially(){const e=this.presentedScene,{position:t,element:n}=e,i=e.getCamera(),{width:s,height:a}=this.overlay.getBoundingClientRect();e.setSize(s,a),i.projectionMatrixInverse.copy(i.projectionMatrix).invert();const{theta:o,radius:l}=n.getCameraOrbit(),c=i.getWorldDirection(wl);e.yaw=Math.atan2(-c.x,-c.z)-o,this.goalYaw=e.yaw,t.copy(i.position).add(c.multiplyScalar(l)),this.updateTarget();const h=e.getTarget();t.add(h).sub(this.oldTarget),this.goalPosition.copy(t),e.setHotspotsVisibility(!0);const{session:u}=this.frame;u.addEventListener("selectstart",this.onSelectStart),u.addEventListener("selectend",this.onSelectEnd),u.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(d=>{this.transientHitTestSource=d})}getTouchLocation(){const{axes:e}=this.inputSource.gamepad;let t=this.placementBox.getExpandedHit(this.presentedScene,e[0],e[1]);return t!=null&&(wl.copy(t).sub(this.presentedScene.getCamera().position),wl.length()>10)?null:t}getHitPoint(e){const t=this.threeRenderer.xr.getReferenceSpace(),n=e.getPose(t);if(n==null)return null;const i=MS.fromArray(n.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(i.elements[4],i.elements[6])),i.elements[5]>.75!==this.placeOnWall?SS.setFromMatrixPosition(i):null}moveToFloor(e){const t=this.initialHitSource;if(t==null)return;const n=e.getHitTestResults(t);if(n.length==0)return;const i=n[0],s=this.getHitPoint(i);s!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(s):this.goalPosition.y=s.y),t.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:bS}))}fingerPolar(e){const t=e[0].inputSource.gamepad.axes,n=e[1].inputSource.gamepad.axes,i=n[0]-t[0],s=n[1]-t[1],a=Math.atan2(s,i);let o=this.lastAngle-a;return o>Math.PI?o-=2*Math.PI:o<-Math.PI&&(o+=2*Math.PI),this.lastAngle=a,{separation:Math.sqrt(i*i+s*s),deltaYaw:o}}processInput(e){const t=this.transientHitTestSource;if(t==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const n=e.getHitTestResultsForTransientInput(t),i=this.presentedScene,s=i.scale.x;if(this.isTwoFingering)if(n.length<2)this.isTwoFingering=!1;else{const{separation:a,deltaYaw:o}=this.fingerPolar(n);if(this.placeOnWall===!1&&(this.goalYaw+=o),i.canScale){const l=a/this.firstRatio;this.goalScale=l<1.3&&l>.7692307692307692?1:l}}else if(n.length!==2)if(this.isRotating){const a=1.5*this.inputSource.gamepad.axes[0];this.goalYaw+=a-this.lastAngle,this.lastAngle=a}else this.isTranslating&&n.forEach(a=>{if(a.inputSource!==this.inputSource)return;let o=null;if(a.results.length>0&&(o=this.getHitPoint(a.results[0])),o==null&&(o=this.getTouchLocation()),o!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=o.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/s,this.presentedScene.setShadowScaleAndOffset(s,l);const c=wl.copy(i.getCamera().position),h=-l/(c.y-o.y);c.multiplyScalar(h),o.multiplyScalar(1-h).add(c)}}this.goalPosition.add(o),this.lastDragPosition.copy(o)}});else{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(n);this.firstRatio=a/s}}moveScene(e){const t=this.presentedScene,{position:n,yaw:i,idealCameraDistance:s}=t,a=this.goalPosition,o=t.scale.x,l=this.placementBox;if(!a.equals(n)||this.goalScale!==o){let{x:c,y:h,z:u}=n;c=this.xDamper.update(c,a.x,e,s),h=this.yDamper.update(h,a.y,e,s),u=this.zDamper.update(u,a.z,e,s),n.set(c,h,u);const d=this.scaleDamper.update(o,this.goalScale,e,1);if(t.scale.set(d,d,d),!this.isTranslating){const p=a.y-h;this.placementComplete&&this.placeOnWall===!1?(l.offsetHeight=p/d,t.setShadowScaleAndOffset(d,p)):p===0&&(this.placementComplete=!0,l.show=!1,t.setShadowIntensity(.3))}}l.updateOpacity(e),t.updateTarget(e),t.yaw=this.yawDamper.update(i,this.goalYaw,e,Math.PI)}onWebXRFrame(e,t){this.frame=t,++this.frames;const n=this.threeRenderer.xr.getReferenceSpace(),i=t.getViewerPose(n);i==null&&this.tracking===!0&&this.frames>30&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:_S}));const s=this.presentedScene;if(i==null||s==null||!s.element[lr]())return void this.threeRenderer.clear();this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:_0}));let a=!0;for(const o of i.views){if(this.updateView(o),a){this.moveToFloor(t),this.processInput(t);const c=e-this.lastTick;this.moveScene(c),this.renderer.preRender(s,e,c),this.lastTick=e}const l=this.threeRenderer.getContext();l.depthMask(!1),l.clear(l.DEPTH_BUFFER_BIT),l.depthMask(!0),this.threeRenderer.render(s,s.getCamera()),a=!1}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){e.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then(()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:e,THREE:{ShaderMaterial:Gn,Texture:nt,Mesh:Me,Scene:Mn,PlaneBufferGeometry:_i,OrthographicCamera:Ki,WebGLRenderTarget:Ut}}}))})}addScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:e}}))}removeScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:e}}))}}function LS(r){const e=new Map,t=new Map,n=r.clone();return M0(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function M0(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)M0(r.children[n],e.children[n],t)}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=Symbol("prepared"),_l=Symbol("prepare"),Ln=Symbol("preparedGLTF"),Ml=Symbol("clone");class RS{constructor(e){this[Ln]=e}static prepare(e){if(e.scene==null)throw new Error("Model does not have a scene");if(e[S0])return e;const t=this[_l](e);return t[S0]=!0,t}static[_l](e){const{scene:t}=e,n=[t];return Object.assign(Object.assign({},e),{scene:t,scenes:n})}get parser(){return this[Ln].parser}get animations(){return this[Ln].animations}get scene(){return this[Ln].scene}get scenes(){return this[Ln].scenes}get cameras(){return this[Ln].cameras}get asset(){return this[Ln].asset}get userData(){return this[Ln].userData}clone(){return new this.constructor(this[Ml]())}dispose(){this.scenes.forEach(e=>{e.traverse(t=>{if(!t.isMesh)return;const n=t;(Array.isArray(n.material)?n.material:[n.material]).forEach(i=>{for(const s in i){const a=i[s];a instanceof nt&&a.dispose()}i.dispose()}),n.geometry.dispose()})})}[Ml](){const e=this[Ln],t=LS(this.scene);CS(t,this.scene);const n=[t],i=e.userData?Object.assign({},e.userData):{};return Object.assign(Object.assign({},e),{scene:t,scenes:n,userData:i})}}const CS=(r,e)=>{T0(r,e,(t,n)=>{n.userData.variantMaterials!==void 0&&(t.userData.variantMaterials=new Map(n.userData.variantMaterials)),n.userData.originalMaterial!==void 0&&(t.userData.originalMaterial=n.userData.originalMaterial)})},T0=(r,e,t)=>{t(r,e);for(let n=0;n<r.children.length;n++)T0(r.children[n],e.children[n],t)},E0=Symbol("threeGLTF"),A0=Symbol("gltf"),L0=Symbol("gltfElementMap"),R0=Symbol("threeObjectMap"),C0=Symbol("parallelTraverseThreeScene"),P0=Symbol("correlateOriginalThreeGLTF"),I0=Symbol("correlateCloneThreeGLTF");class ga{constructor(e,t,n,i){this[E0]=e,this[A0]=t,this[L0]=i,this[R0]=n}static from(e,t){return t!=null?this[I0](e,t):this[P0](e)}static[P0](e){const t=e.parser.json,n=e.parser.associations,i=new Map,s={name:"Default"},a={type:"materials",index:-1};for(const o of n.keys())o instanceof ot&&n.get(o)==null&&(a.index<0&&(t.materials==null&&(t.materials=[]),a.index=t.materials.length,t.materials.push(s)),o.name=s.name,n.set(o,{materials:a.index}));for(const[o,l]of n){if(l){const c=o;c.userData=c.userData||{},c.userData.associations=l}for(const c in l)if(c!=null&&c!=="primitives"){const h=c,u=(t[h]||[])[l[h]];if(u==null)continue;let d=i.get(u);d==null&&(d=new Set,i.set(u,d)),d.add(o)}}return new ga(e,t,n,i)}static[I0](e,t){const n=t.threeGLTF,i=t.gltf,s=JSON.parse(JSON.stringify(i)),a=new Map,o=new Map;for(let l=0;l<n.scenes.length;l++)this[C0](n.scenes[l],e.scenes[l],(c,h)=>{const u=t.threeObjectMap.get(c);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const p=d,f=u[p],m=s[p][f],v=a.get(h)||{};v[p]=f,a.set(h,v);const g=o.get(m)||new Set;g.add(h),o.set(m,g)}}});return new ga(e,s,a,o)}static[C0](e,t,n){const i=(s,a)=>{if(n(s,a),s.isObject3D){if(s.isMesh)if(Array.isArray(s.material))for(let o=0;o<s.material.length;++o)i(s.material[o],a.material[o]);else i(s.material,a.material);for(let o=0;o<s.children.length;++o)i(s.children[o],a.children[o])}};i(e,t)}get threeGLTF(){return this[E0]}get gltf(){return this[A0]}get gltfElementMap(){return this[L0]}get threeObjectMap(){return this[R0]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=Symbol("cloneAndPatchMaterial"),Sl=Symbol("correlatedSceneGraph");class PS extends RS{static[_l](e){const t=super[_l](e);t[Sl]==null&&(t[Sl]=ga.from(t));const{scene:n}=t,i=new fi(void 0,1/0);return n.traverse(s=>{s.renderOrder=1e3,s.frustumCulled=!1,s.name||(s.name=s.uuid);const a=s;a.isMesh&&(a.castShadow=!0,a.isSkinnedMesh&&(a.geometry.boundingSphere=i,a.geometry.boundingBox=null))}),t}get correlatedSceneGraph(){return this[Ln][Sl]}[Ml](){const e=super[Ml](),t=new Map;return e.scene.traverse(n=>{if(n.isMesh){const i=n;Array.isArray(i.material)?i.material=i.material.map(s=>this[Iu](s,t)):i.material!=null&&(i.material=this[Iu](i.material,t))}}),e[Sl]=ga.from(e,this.correlatedSceneGraph),e}[Iu](e,t){if(t.has(e.uuid))return t.get(e.uuid);const n=e.clone();e.map!=null&&(n.map=e.map.clone(),n.map.needsUpdate=!0),e.normalMap!=null&&(n.normalMap=e.normalMap.clone(),n.normalMap.needsUpdate=!0),e.emissiveMap!=null&&(n.emissiveMap=e.emissiveMap.clone(),n.emissiveMap.needsUpdate=!0);let i=null;if(e.roughnessMap!=null&&(i=e.roughnessMap.clone()),i!=null){i.needsUpdate=!0,n.roughnessMap=i;const{threeRenderer:s,roughnessMipmapper:a}=Rn.singleton,{enabled:o}=s.xr;s.xr.enabled=!1;const{image:l}=n.roughnessMap;a.generateMipmaps(n),n.roughnessMap.image=l,s.xr.enabled=o}return e.roughnessMap===e.metalnessMap?n.metalnessMap=i:e.metalnessMap!=null&&(n.metalnessMap=e.metalnessMap.clone(),n.metalnessMap.needsUpdate=!0),e.roughnessMap===e.aoMap?n.aoMap=i:e.aoMap!=null&&(n.aoMap=e.aoMap.clone(),n.aoMap.needsUpdate=!0),n.shadowSide=0,t.set(e.uuid,n),n}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS extends Mn{constructor(){super(),this.position.y=-3.5;const e=new wi;e.deleteAttribute("uv");const t=new qn({metalness:0,side:1}),n=new qn({metalness:0}),i=new hl(16777215,500,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Me(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Me(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Me(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Me(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Me(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Me(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Me(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Me(e,this.createAreaLightMaterial(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new Me(e,this.createAreaLightMaterial(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const f=new Me(e,this.createAreaLightMaterial(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const m=new Me(e,this.createAreaLightMaterial(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const v=new Me(e,this.createAreaLightMaterial(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const g=new Me(e,this.createAreaLightMaterial(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}createAreaLightMaterial(e){const t=new un;return t.color.setScalar(e),t}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS extends Mn{constructor(){super(),this.position.y=-3.5;const e=new wi;e.deleteAttribute("uv");const t=new qn({metalness:0,side:1}),n=new qn({metalness:0}),i=new hl(16777215,400,28,2);i.position.set(.5,14,.5),this.add(i);const s=new Me(e,t);s.position.set(0,13.2,0),s.scale.set(31.5,28.5,31.5),this.add(s);const a=new Me(e,n);a.position.set(-10.906,-1,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Me(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Me(e,n);l.position.set(6.167,-.16,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Me(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Me(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Me(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Me(e,this.createAreaLightMaterial(80));d.position.set(-14,10,8),d.scale.set(.1,2.5,2.5),this.add(d);const p=new Me(e,this.createAreaLightMaterial(80));p.position.set(-14,14,-4),p.scale.set(.1,2.5,2.5),this.add(p);const f=new Me(e,this.createAreaLightMaterial(23));f.position.set(14,12,0),f.scale.set(.1,5,5),this.add(f);const m=new Me(e,this.createAreaLightMaterial(16));m.position.set(0,9,14),m.scale.set(5,5,.1),this.add(m);const v=new Me(e,this.createAreaLightMaterial(80));v.position.set(7,8,-14),v.scale.set(2.5,2.5,.1),this.add(v);const g=new Me(e,this.createAreaLightMaterial(80));g.position.set(-7,16,-14),g.scale.set(2.5,2.5,.1),this.add(g);const b=new Me(e,this.createAreaLightMaterial(1));b.position.set(0,20,0),b.scale.set(.1,.1,.1),this.add(b)}createAreaLightMaterial(e){const t=new un;return t.color.setScalar(e),t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=/\.hdr(\.js)?$/,OS=new cl,D0=new class extends lM{constructor(r){super(r),this.type=1016}parse(r){const e=function(o,l){switch(o){case 1:console.error("THREE.RGBELoader Read Error: "+(l||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(l||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(l||""));break;default:console.error("THREE.RGBELoader: Error: "+(l||""))}return-1},t=function(o,l,c){l=l||1024;let h=o.pos,u=-1,d=0,p="",f=String.fromCharCode.apply(null,new Uint16Array(o.subarray(h,h+128)));for(;0>(u=f.indexOf(`
`))&&d<l&&h<o.byteLength;)p+=f,d+=f.length,h+=128,f+=String.fromCharCode.apply(null,new Uint16Array(o.subarray(h,h+128)));return-1<u&&(c!==!1&&(o.pos+=d+u+1),p+f.slice(0,u))},n=function(o,l,c,h){const u=o[l+3],d=Math.pow(2,u-128)/255;c[h+0]=o[l+0]*d,c[h+1]=o[l+1]*d,c[h+2]=o[l+2]*d},i=function(o,l,c,h){const u=o[l+3],d=Math.pow(2,u-128)/255;c[h+0]=fu.toHalfFloat(Math.min(o[l+0]*d,65504)),c[h+1]=fu.toHalfFloat(Math.min(o[l+1]*d,65504)),c[h+2]=fu.toHalfFloat(Math.min(o[l+2]*d,65504))},s=new Uint8Array(r);s.pos=0;const a=function(o){const l=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,c=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,h=/^\s*FORMAT=(\S+)\s*$/,u=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,d={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let p,f;if(o.pos>=o.byteLength||!(p=t(o)))return e(1,"no header found");if(!(f=p.match(/^#\?(\S+)/)))return e(3,"bad initial token");for(d.valid|=1,d.programtype=f[1],d.string+=p+`
`;p=t(o),p!==!1;)if(d.string+=p+`
`,p.charAt(0)!=="#"){if((f=p.match(l))&&(d.gamma=parseFloat(f[1],10)),(f=p.match(c))&&(d.exposure=parseFloat(f[1],10)),(f=p.match(h))&&(d.valid|=2,d.format=f[1]),(f=p.match(u))&&(d.valid|=4,d.height=parseInt(f[1],10),d.width=parseInt(f[2],10)),2&d.valid&&4&d.valid)break}else d.comments+=p+`
`;return 2&d.valid?4&d.valid?d:e(3,"missing image size specifier"):e(3,"missing format specifier")}(s);if(a!==-1){const o=a.width,l=a.height,c=function(h,u,d){const p=u;if(p<8||p>32767||h[0]!==2||h[1]!==2||128&h[2])return new Uint8Array(h);if(p!==(h[2]<<8|h[3]))return e(3,"wrong scanline width");const f=new Uint8Array(4*u*d);if(!f.length)return e(4,"unable to allocate buffer space");let m=0,v=0;const g=4*p,b=new Uint8Array(4),x=new Uint8Array(g);let y=d;for(;y>0&&v<h.byteLength;){if(v+4>h.byteLength)return e(1);if(b[0]=h[v++],b[1]=h[v++],b[2]=h[v++],b[3]=h[v++],b[0]!=2||b[1]!=2||(b[2]<<8|b[3])!=p)return e(3,"bad rgbe scanline format");let w,M=0;for(;M<g&&v<h.byteLength;){w=h[v++];const P=w>128;if(P&&(w-=128),w===0||M+w>g)return e(3,"bad scanline data");if(P){const D=h[v++];for(let I=0;I<w;I++)x[M++]=D}else x.set(h.subarray(v,v+w),M),M+=w,v+=w}const T=p;for(let P=0;P<T;P++){let D=0;f[m]=x[P+D],D+=p,f[m+1]=x[P+D],D+=p,f[m+2]=x[P+D],D+=p,f[m+3]=x[P+D],m+=4}y--}return f}(s.subarray(s.pos),o,l);if(c!==-1){let h,u,d,p;switch(this.type){case 1009:h=c,u=1023,d=1009;break;case 1015:p=c.length/4;const f=new Float32Array(3*p);for(let v=0;v<p;v++)n(c,4*v,f,3*v);h=f,u=1022,d=1015;break;case 1016:p=c.length/4;const m=new Uint16Array(3*p);for(let v=0;v<p;v++)i(c,4*v,m,3*v);h=m,u=1022,d=1016;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:o,height:l,data:h,header:a.string,gamma:a.gamma,exposure:a.exposure,format:u,type:d}}}return null}setDataType(r){return this.type=r,this}load(r,e,t,n){return super.load(r,function(i,s){switch(i.type){case 1009:i.encoding=3002,i.minFilter=1003,i.magFilter=1003,i.generateMipmaps=!1,i.flipY=!0;break;case 1015:case 1016:i.encoding=3e3,i.minFilter=1006,i.magFilter=1006,i.generateMipmaps=!1,i.flipY=!0}e&&e(i,s)},t,n)}};D0.setDataType(1016);class F0 extends Vt{constructor(e){super(),this.threeRenderer=e,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}async load(e,t=()=>{}){try{const n=FS.test(e),i=n?D0:OS,s=await new Promise((a,o)=>i.load(e,a,l=>{t(l.loaded/l.total*.9)},o));return t(1),s.name=e,s.mapping=303,n||(s.encoding=3007),s}finally{t&&t(1)}}async generateEnvironmentMapAndSkybox(e=null,t=null,n={}){const{progressTracker:i}=n,s=i!=null?i.beginActivity():()=>{},a=t==="neutral";a===!0&&(t=null);const o=r0(t);try{let l,c=Promise.resolve(null);e&&(c=this.loadEquirectFromUrl(e,i)),l=o?this.loadEquirectFromUrl(o,i):e?this.loadEquirectFromUrl(e,i):a===!0?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();let[h,u]=await Promise.all([l,c]);if(h==null)throw new Error("Failed to load environment map.");return{environmentMap:h,skybox:u}}finally{s(1)}}async loadEquirectFromUrl(e,t){if(!this.skyboxCache.has(e)){const n=t?t.beginActivity():()=>{},i=this.load(e,n);this.skyboxCache.set(e,i)}return this.skyboxCache.get(e)}async GenerateEnvironmentMap(e,t){await o0();const n=this.threeRenderer,i=new Go(256,{generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!0}),s=new qs(.1,100,i),a=s.renderTarget.texture;a.name=t,a.isRenderTargetTexture=!1,a.images=[1,1,1,1,1,1],e.scale.setComponent(0,-1);const o=n.outputEncoding,l=n.toneMapping;return n.toneMapping=0,n.outputEncoding=3e3,s.update(n,e),await this.blurCubemap(i,.04),n.toneMapping=l,n.outputEncoding=o,a}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new IS,"default")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new DS,"neutral")),this.generatedEnvironmentMapAlt}async blurCubemap(e,t){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(20);const i=new wi,s=new Me(i,this.blurMaterial);this.blurScene=new Mn,this.blurScene.add(s)}const n=e.clone();this.halfblur(e,n,t,"latitudinal"),this.halfblur(n,e,t,"longitudinal")}async halfblur(e,t,n,i){const s=e.width,a=isFinite(n)?Math.PI/(2*s):2*Math.PI/39,o=n/a,l=isFinite(n)?1+Math.floor(3*o):20;l>20&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${l} samples when the maximum is set to 20`);const c=[];let h=0;for(let d=0;d<20;++d){const p=d/o,f=Math.exp(-p*p/2);c.push(f),d==0?h+=f:d<l&&(h+=2*f)}for(let d=0;d<c.length;d++)c[d]=c[d]/h;const u=this.blurMaterial.uniforms;u.envMap.value=e.texture,u.samples.value=l,u.weights.value=c,u.latitudinal.value=i==="latitudinal",u.dTheta.value=a,new qs(.1,100,t).update(this.threeRenderer,this.blurScene)}getBlurShader(e){const t=new Float32Array(e),n=new C(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,blending:0,depthTest:!1,depthWrite:!1,side:1})}async dispose(){for(const[,e]of this.skyboxCache)(await e).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=[1,.79,.62,.5,.4,.31,.25];class Rn extends Vt{constructor(e){super(),this.loader=new Ct(PS),this.width=0,this.height=0,this.dpr=1,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.scaleStep=0,this.lastStep=3,this.avgFrameDuration=22,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;(t=this.textureUtils)===null||t===void 0||t.dispose(),this.textureUtils=new F0(this.threeRenderer),this.roughnessMipmapper=new y0(this.threeRenderer);for(const n of this.scenes)n.element[yl]();this.threeRenderer.shadowMap.needsUpdate=!0},this.dpr=Eu(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas";try{this.threeRenderer=new Ge({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:e.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=3007,this.threeRenderer.physicallyCorrectLights=!0,this.threeRenderer.setPixelRatio(1),this.threeRenderer.shadowMap.enabled=!0,this.threeRenderer.shadowMap.type=2,this.threeRenderer.shadowMap.autoUpdate=!1,this.debugger=e.debug?new AS(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=4}catch(t){console.warn(t)}this.arRenderer=new ES(this),this.textureUtils=this.canRender?new F0(this.threeRenderer):null,this.roughnessMipmapper=new y0(this.threeRenderer),Ct.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize(),this.lastTick=performance.now(),this.avgFrameDuration=0}static get singleton(){return this._singleton}static resetSingleton(){const e=this._singleton.dispose();for(const t of e)t.disconnectedCallback();this._singleton=new Rn({powerPreference:(self.ModelViewerElement||{}).powerPreference||"high-performance",debug:a0()});for(const t of e)t.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return Du[this.scaleStep]}set minScale(e){let t=1;for(;t<Du.length&&!(Du[t]<e);)++t;this.lastStep=t-1}updateRendererSize(){const e=Eu();if(e!==this.dpr)for(const o of this.scenes){const{element:l}=o;l[ls](l.getBoundingClientRect())}let t=0,n=0;for(const o of this.scenes)t=Math.max(t,o.width),n=Math.max(n,o.height);if(t===this.width&&n===this.height&&e===this.dpr)return;this.width=t,this.height=n,this.dpr=e,this.canRender&&this.threeRenderer.setSize(t*e,n*e,!1);const i=this.scaleFactor,s=t/i,a=n/i;this.canvas3D.style.width=`${s}px`,this.canvas3D.style.height=`${a}px`;for(const o of this.scenes){const{canvas:l}=o;l.width=Math.round(t*e),l.height=Math.round(n*e),l.style.width=`${s}px`,l.style.height=`${a}px`,o.queueRender()}}updateRendererScale(){const e=this.scaleStep;if(this.avgFrameDuration>26?++this.scaleStep:this.avgFrameDuration<18&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),e==this.scaleStep)return;const t=this.scaleFactor;this.avgFrameDuration=22;const n=this.width/t,i=this.height/t;this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${i}px`;for(const s of this.scenes){const{style:a}=s.canvas;a.width=`${n}px`,a.height=`${i}px`,s.queueRender()}}registerScene(e){this.scenes.add(e);const{canvas:t}=e,n=this.scaleFactor;t.width=Math.round(this.width*this.dpr),t.height=Math.round(this.height*this.dpr),t.style.width=this.width/n+"px",t.style.height=this.height/n+"px",this.multipleScenesVisible&&t.classList.add("show"),e.queueRender(),this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((i,s)=>this.render(i,s)),this.debugger!=null&&this.debugger.addScene(e)}unregisterScene(e){this.scenes.delete(e),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null),this.debugger!=null&&this.debugger.removeScene(e)}displayCanvas(e){return this.multipleScenesVisible?e.element[Rl]:this.canvas3D}selectCanvas(){let e=0,t=null;for(const s of this.scenes){const{element:a}=s;a.modelIsVisible&&s.externalRenderer==null&&(++e,t=s.canvas)}if(t==null)return;const n=e>1,{canvas3D:i}=this;if(n!==this.multipleScenesVisible||!n&&i.parentElement!==t.parentElement){this.multipleScenesVisible=n,n&&i.classList.remove("show");for(const s of this.scenes){if(s.externalRenderer!=null)continue;const a=s.element[Rl];n?(a.classList.add("show"),s.queueRender()):s.canvas===t&&(s.canvas.parentElement.appendChild(i),i.classList.add("show"),a.classList.remove("show"),s.queueRender())}}}orderedScenes(){const e=[];for(const t of[!1,!0])for(const n of this.scenes)n.element.modelIsVisible===t&&e.push(n);return e}get isPresenting(){return this.arRenderer.isPresenting}preRender(e,t,n){const{element:i,exposure:s}=e;i[Pn](t,n);const a=typeof s=="number"&&!self.isNaN(s);this.threeRenderer.toneMappingExposure=a?s:1,e.isShadowDirty()&&(this.threeRenderer.shadowMap.needsUpdate=!0)}render(e,t){if(t!=null)return void this.arRenderer.onWebXRFrame(e,t);const n=e-this.lastTick;if(this.lastTick=e,!this.canRender||this.isPresenting)return;this.avgFrameDuration+=ir(.2*(n-this.avgFrameDuration),-2,2),this.selectCanvas(),this.updateRendererSize(),this.updateRendererScale();const{dpr:i,scaleFactor:s}=this;for(const a of this.orderedScenes()){const{element:o}=a;if(!o.modelIsVisible&&a.renderCount>0||(this.preRender(a,e,n),!a.shouldRender()))continue;if(a.externalRenderer!=null){const h=a.getCamera();h.updateMatrix();const{matrix:u,projectionMatrix:d}=h,p=u.elements.slice(),f=a.getTarget();p[12]+=f.x,p[13]+=f.y,p[14]+=f.z,a.externalRenderer.render({viewMatrix:p,projectionMatrix:d.elements});continue}if(!o.modelIsVisible&&!this.multipleScenesVisible)for(const h of this.scenes)h.element.modelIsVisible&&h.queueRender();const l=Math.min(Math.ceil(a.width*s*i),this.canvas3D.width),c=Math.min(Math.ceil(a.height*s*i),this.canvas3D.height);if(this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.floor(this.height*i)-c,l,c),this.threeRenderer.render(a,a.camera),this.multipleScenesVisible){a.context==null&&a.createContext();const h=a.context;h.clearRect(0,0,l,c),h.drawImage(this.canvas3D,0,0,l,c,0,0,l,c)}a.hasRendered(),o.loaded&&++a.renderCount}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.roughnessMipmapper!=null&&this.roughnessMipmapper.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const e=[];for(const t of this.scenes)e.push(t.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),e}}Rn._singleton=new Rn({powerPreference:(self.ModelViewerElement||{}).powerPreference||"high-performance",debug:a0()});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O0,N0;const va=Symbol("ongoingActivities"),Fu=Symbol("announceTotalProgress"),Tl=Symbol("eventDelegate");class NS{constructor(){this[O0]=document.createDocumentFragment(),this.addEventListener=(...e)=>this[Tl].addEventListener(...e),this.removeEventListener=(...e)=>this[Tl].removeEventListener(...e),this.dispatchEvent=(...e)=>this[Tl].dispatchEvent(...e),this[N0]=new Set}get ongoingActivityCount(){return this[va].size}beginActivity(){const e={progress:0};return this[va].add(e),this.ongoingActivityCount===1&&this[Fu](),t=>{let n;return n=Math.max(ir(t,0,1),e.progress),n!==e.progress&&(e.progress=n,this[Fu]()),e.progress}}[(O0=Tl,N0=va,Fu)](){let e=0,t=0,n=0;for(const i of this[va]){const{progress:s}=i;e+=s*(.5/Math.pow(2,t++)),s===1&&n++}n===this.ongoingActivityCount&&(e=1,this[va].clear()),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:e}}))}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U0,k0,z0,B0,H0,V0,G0,W0,j0,q0,X0=function(r,e,t,n){for(var i,s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};const en=document.createElement("canvas"),Ou=Symbol("fallbackResizeHandler"),Nu=Symbol("defaultAriaLabel"),El=Symbol("resizeObserver"),ya=Symbol("clearModelTimeout"),Uu=Symbol("onContextLost"),sr=Symbol("loaded"),ls=Symbol("updateSize"),Al=Symbol("intersectionObserver"),ar=Symbol("isElementInViewport"),Ll=Symbol("announceModelVisibility"),ku=Symbol("ariaLabel"),xa=Symbol("loadedTime"),Cn=Symbol("updateSource"),Y0=Symbol("markLoaded"),ba=Symbol("container"),Zn=Symbol("input"),Rl=Symbol("canvas"),de=Symbol("scene"),Pt=Symbol("needsRender"),Pn=Symbol("tick"),In=Symbol("onModelLoad"),wa=Symbol("onResize"),Be=Symbol("renderer"),cs=Symbol("progressTracker"),$0=Symbol("getLoaded"),Cl=Symbol("getModelIsVisible"),or=Symbol("shouldAttemptPreload"),lr=Symbol("sceneIsReady"),hs=Symbol("hasTransitioned"),Pl=r=>({x:r.x,y:r.y,z:r.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}});class zu extends th{constructor(){super(),this.alt=null,this.src=null,this[U0]=!1,this[k0]=!1,this[z0]=0,this[B0]=null,this[H0]=Tu(()=>{const i=this.getBoundingClientRect();this[ls](i)},50),this[V0]=Tu(i=>{const s=this.modelIsVisible;s!==i&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:s}}))},0),this[G0]=null,this[W0]=null,this[j0]=new NS,this[q0]=i=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:i.sourceEvent}}))},this.attachShadow({mode:"open"});const e=this.shadowRoot;let t,n;if((i=>{Af(K1,i)})(e),this[ba]=e.querySelector(".container"),this[Zn]=e.querySelector(".userInput"),this[Rl]=e.querySelector("canvas"),this[Nu]=this[Zn].getAttribute("aria-label"),this.isConnected){const i=this.getBoundingClientRect();t=i.width,n=i.height}else t=300,n=150;this[de]=new gS({canvas:this[Rl],element:this,width:t,height:n}),this[de].addEventListener("model-load",async i=>{this[Y0](),this[In](),await o0(),this.dispatchEvent(new CustomEvent("load",{detail:{url:i.url}}))}),Promise.resolve().then(()=>{this[ls](this.getBoundingClientRect())}),rh&&(this[El]=new ResizeObserver(i=>{if(!this[Be].isPresenting)for(let s of i)s.target===this&&this[ls](s.contentRect)})),sh?this[Al]=new IntersectionObserver(i=>{for(let s of i)if(s.target===this){const a=this.modelIsVisible;this[ar]=s.isIntersecting,this[Ll](a),this[ar]&&!this[lr]()&&this[Cn]()}},{root:null,rootMargin:"0px",threshold:0}):this[ar]=!0}static get is(){return"model-viewer"}static set modelCacheSize(e){Ct[Li].evictionThreshold=e}static get modelCacheSize(){return Ct[Li].evictionThreshold}static set minimumRenderScale(e){e>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),e<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),Rn.singleton.minScale=e}static get minimumRenderScale(){return Rn.singleton.minScale}get loaded(){return this[$0]()}get[(U0=ar,k0=sr,z0=xa,B0=ya,H0=Ou,V0=Ll,G0=El,W0=Al,j0=cs,Be)](){return Rn.singleton}get modelIsVisible(){return this[Cl]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),rh?this[El].observe(this):self.addEventListener("resize",this[Ou]),sh&&this[Al].observe(this);const e=this[Be];e.addEventListener("contextlost",this[Uu]),e.registerScene(this[de]),this[ya]!=null&&(self.clearTimeout(this[ya]),this[ya]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),rh?this[El].unobserve(this):self.removeEventListener("resize",this[Ou]),sh&&this[Al].unobserve(this);const e=this[Be];e.removeEventListener("contextlost",this[Uu]),e.unregisterScene(this[de]),this[ya]=self.setTimeout(()=>{this[de].reset()},1e3)}updated(e){if(super.updated(e),e.has("src")&&(this.src==null?(this[sr]=!1,this[xa]=0,this[de].reset()):this.src!==this[de].url&&(this[sr]=!1,this[xa]=0,this[Cn]())),e.has("alt")){const t=this.alt==null?this[Nu]:this.alt;this[Zn].setAttribute("aria-label",t)}}toDataURL(e,t){return this[Be].displayCanvas(this[de]).toDataURL(e,t)}async toBlob(e){const t=e?e.mimeType:void 0,n=e?e.qualityArgument:void 0,i=e?e.idealAspect:void 0,{width:s,height:a,fieldOfViewAspect:o,aspect:l}=this[de],{dpr:c,scaleFactor:h}=this[Be];let u=s*h*c,d=a*h*c,p=0,f=0;if(i===!0)if(o>l){const m=d;d=Math.round(u/o),f=(m-d)/2}else{const m=u;u=Math.round(d*o),p=(m-u)/2}en.width=u,en.height=d;try{return new Promise(async(m,v)=>(en.getContext("2d").drawImage(this[Be].displayCanvas(this[de]),p,f,u,d,0,0,u,d),!en.msToBlob||t&&t!=="image/png"?en.toBlob?void en.toBlob(g=>{if(!g)return v(new Error("Unable to retrieve canvas blob"));m(g)},t,n):m(await(async g=>new Promise((b,x)=>{const y=g.match(/data:(.*);/);if(!y)return x(new Error(`${g} is not a valid data Url`));const w=y[1],M=g.replace(/data:image\/\w+;base64,/,""),T=atob(M),P=[];for(let D=0;D<T.length;D+=512){const I=T.slice(D,D+512),N=new Array(I.length);for(let G=0;G<I.length;G++)N[G]=I.charCodeAt(G);const X=new Uint8Array(N);P.push(X)}b(new Blob(P,{type:w}))}))(en.toDataURL(t,n))):m(en.msToBlob())))}finally{this[ls]({width:s,height:a})}}registerRenderer(e){this[de].externalRenderer=e}unregisterRenderer(){this[de].externalRenderer=null}get[ku](){return this.alt==null||this.alt==="null"?this[Nu]:this.alt}[$0](){return this[sr]}[Cl](){return this.loaded&&this[ar]}[hs](){return this.modelIsVisible}[or](){return!!this.src&&this[ar]}[lr](){return this[sr]}[ls]({width:e,height:t}){this[ba].style.width=`${e}px`,this[ba].style.height=`${t}px`,this[wa]({width:parseFloat(e),height:parseFloat(t)})}[Pn](e,t){}[Y0](){this[sr]||(this[sr]=!0,this[xa]=performance.now())}[Pt](){this[de].queueRender()}[In](){}[wa](e){this[de].setSize(e.width,e.height)}async[(q0=Uu,Cn)](){if(this.loaded||!this[or]())return;const e=this[cs].beginActivity(),t=this.src;try{await this[de].setSource(t,i=>e(.8*i));const n={url:t};this.dispatchEvent(new CustomEvent("preload",{detail:n}))}catch(n){this.dispatchEvent(new CustomEvent("error",{detail:n}))}finally{e(.9),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(1)})})}}}X0([Te({type:String})],zu.prototype,"alt",void 0),X0([Te({type:String})],zu.prototype,"src",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bu=function(r,e,t,n){for(var i,s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};const Il=Symbol("changeAnimation"),Kn=Symbol("paused"),us=Symbol("hotspotMap"),Hu=Symbol("mutationCallback"),_a=Symbol("observer"),Vu=Symbol("addHotspot"),J0=Symbol("removeHotspot"),Gu=new ye,Z0=new lt;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var K0=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(K0(""))}catch{K0=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var It=Uint8Array,Dt=Uint16Array,ds=Uint32Array,Wu=new It([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ju=new It([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Q0=new It([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ev=function(r,e){for(var t=new Dt(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];var i=new ds(t[30]);for(n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},tv=ev(Wu,2),US=tv[0],qu=tv[1];US[28]=258,qu[258]=28;for(var nv=ev(ju,0)[1],Xu=new Dt(32768),Je=0;Je<32768;++Je){var cr=(43690&Je)>>>1|(21845&Je)<<1;cr=(61680&(cr=(52428&cr)>>>2|(13107&cr)<<2))>>>4|(3855&cr)<<4,Xu[Je]=((65280&cr)>>>8|(255&cr)<<8)>>>1}var Ma=function(r,e,t){for(var n=r.length,i=0,s=new Dt(e);i<n;++i)++s[r[i]-1];var a,o=new Dt(e);for(i=0;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;if(t){a=new Dt(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=o[r[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[Xu[u]>>>l]=c}else for(a=new Dt(n),i=0;i<n;++i)r[i]&&(a[i]=Xu[o[r[i]-1]++]>>>15-r[i]);return a},hr=new It(288);for(Je=0;Je<144;++Je)hr[Je]=8;for(Je=144;Je<256;++Je)hr[Je]=9;for(Je=256;Je<280;++Je)hr[Je]=7;for(Je=280;Je<288;++Je)hr[Je]=8;var Dl=new It(32);for(Je=0;Je<32;++Je)Dl[Je]=5;var kS=Ma(hr,9,0),zS=Ma(Dl,5,0),iv=function(r){return(r/8|0)+(7&r&&1)},rv=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof Dt?Dt:r instanceof ds?ds:It)(t-e);return n.set(r.subarray(e,t)),n},Qn=function(r,e,t){t<<=7&e;var n=e/8|0;r[n]|=t,r[n+1]|=t>>>8},Sa=function(r,e,t){t<<=7&e;var n=e/8|0;r[n]|=t,r[n+1]|=t>>>8,r[n+2]|=t>>>16},Yu=function(r,e){for(var t=[],n=0;n<r.length;++n)r[n]&&t.push({s:n,f:r[n]});var i=t.length,s=t.slice();if(!i)return[Ju,0];if(i==1){var a=new It(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(w,M){return w.f-M.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=i-1;)o=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:o.f+l.f,l:o,r:l};var d=s[0].s;for(n=1;n<i;++n)s[n].s>d&&(d=s[n].s);var p=new Dt(d+1),f=$u(t[h-1],p,0);if(f>e){n=0;var m=0,v=f-e,g=1<<v;for(s.sort(function(w,M){return p[M.s]-p[w.s]||w.f-M.f});n<i;++n){var b=s[n].s;if(!(p[b]>e))break;m+=g-(1<<f-p[b]),p[b]=e}for(m>>>=v;m>0;){var x=s[n].s;p[x]<e?m-=1<<e-p[x]++-1:++n}for(;n>=0&&m;--n){var y=s[n].s;p[y]==e&&(--p[y],++m)}f=e}return[new It(p),f]},$u=function(r,e,t){return r.s==-1?Math.max($u(r.l,e,t+1),$u(r.r,e,t+1)):e[r.s]=t},sv=function(r){for(var e=r.length;e&&!r[--e];);for(var t=new Dt(++e),n=0,i=r[0],s=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(r[o]==i&&o!=e)++s;else{if(!i&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(i),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(i);s=1,i=r[o]}return[t.subarray(0,n),e]},Ta=function(r,e){for(var t=0,n=0;n<e.length;++n)t+=r[n]*e[n];return t},Fl=function(r,e,t){var n=t.length,i=iv(e+2);r[i]=255&n,r[i+1]=n>>>8,r[i+2]=255^r[i],r[i+3]=255^r[i+1];for(var s=0;s<n;++s)r[i+s+4]=t[s];return 8*(i+4+n)},av=function(r,e,t,n,i,s,a,o,l,c,h){Qn(e,h++,t),++i[256];for(var u=Yu(i,15),d=u[0],p=u[1],f=Yu(s,15),m=f[0],v=f[1],g=sv(d),b=g[0],x=g[1],y=sv(m),w=y[0],M=y[1],T=new Dt(19),P=0;P<b.length;++P)T[31&b[P]]++;for(P=0;P<w.length;++P)T[31&w[P]]++;for(var D=Yu(T,7),I=D[0],N=D[1],X=19;X>4&&!I[Q0[X-1]];--X);var G,z,$,le,re=c+5<<3,se=Ta(i,hr)+Ta(s,Dl)+a,ue=Ta(i,d)+Ta(s,m)+a+14+3*X+Ta(T,I)+(2*T[16]+3*T[17]+7*T[18]);if(re<=se&&re<=ue)return Fl(e,h,r.subarray(l,l+c));if(Qn(e,h,1+(ue<se)),h+=2,ue<se){G=Ma(d,p,0),z=d,$=Ma(m,v,0),le=m;var fe=Ma(I,N,0);for(Qn(e,h,x-257),Qn(e,h+5,M-1),Qn(e,h+10,X-4),h+=14,P=0;P<X;++P)Qn(e,h+3*P,I[Q0[P]]);h+=3*X;for(var Q=[b,w],A=0;A<2;++A){var R=Q[A];for(P=0;P<R.length;++P){var V=31&R[P];Qn(e,h,fe[V]),h+=I[V],V>15&&(Qn(e,h,R[P]>>>5&127),h+=R[P]>>>12)}}}else G=kS,z=hr,$=zS,le=Dl;for(P=0;P<o;++P)if(n[P]>255){V=n[P]>>>18&31,Sa(e,h,G[V+257]),h+=z[V+257],V>7&&(Qn(e,h,n[P]>>>23&31),h+=Wu[V]);var W=31&n[P];Sa(e,h,$[W]),h+=le[W],W>3&&(Sa(e,h,n[P]>>>5&8191),h+=ju[W])}else Sa(e,h,G[n[P]]),h+=z[n[P]];return Sa(e,h,G[256]),h+z[256]},BS=new ds([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ju=new It(0),HS=function(){for(var r=new ds(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(1&t&&3988292384)^t>>>1;r[e]=t}return r}(),VS=function(){var r=-1;return{p:function(e){for(var t=r,n=0;n<e.length;++n)t=HS[255&t^e[n]]^t>>>8;r=t},d:function(){return~r}}},GS=function(r,e,t,n,i){return function(s,a,o,l,c,h){var u=s.length,d=new It(l+u+5*(1+Math.ceil(u/7e3))+c),p=d.subarray(l,d.length-c),f=0;if(!a||u<8)for(var m=0;m<=u;m+=65535){var v=m+65535;v<u?f=Fl(p,f,s.subarray(m,v)):(p[m]=h,f=Fl(p,f,s.subarray(m,u)))}else{for(var g=BS[a-1],b=g>>>13,x=8191&g,y=(1<<o)-1,w=new Dt(32768),M=new Dt(y+1),T=Math.ceil(o/3),P=2*T,D=function(U){return(s[U]^s[U+1]<<T^s[U+2]<<P)&y},I=new ds(25e3),N=new Dt(288),X=new Dt(32),G=0,z=0,$=(m=0,0),le=0,re=0;m<u;++m){var se=D(m),ue=32767&m,fe=M[se];if(w[ue]=fe,M[se]=ue,le<=m){var Q=u-m;if((G>7e3||$>24576)&&Q>423){f=av(s,p,0,I,N,X,z,$,re,m-re,f),$=G=z=0,re=m;for(var A=0;A<286;++A)N[A]=0;for(A=0;A<30;++A)X[A]=0}var R=2,V=0,W=x,O=ue-fe&32767;if(Q>2&&se==D(m-O))for(var oe=Math.min(b,Q)-1,ce=Math.min(32767,m),H=Math.min(258,Q);O<=ce&&--W&&ue!=fe;){if(s[m+R]==s[m+R-O]){for(var E=0;E<H&&s[m+E]==s[m+E-O];++E);if(E>R){if(R=E,V=O,E>oe)break;var k=Math.min(O,E-2),J=0;for(A=0;A<k;++A){var _=m-O+A+32768&32767,S=_-w[_]+32768&32767;S>J&&(J=S,fe=_)}}}O+=(ue=fe)-(fe=w[ue])+32768&32767}if(V){I[$++]=268435456|qu[R]<<18|nv[V];var F=31&qu[R],B=31&nv[V];z+=Wu[F]+ju[B],++N[257+F],++X[B],le=m+R,++G}else I[$++]=s[m],++N[s[m]]}}f=av(s,p,h,I,N,X,z,$,re,m-re,f),!h&&7&f&&(f=Fl(p,f+1,Ju))}return rv(d,0,l+iv(f)+c)}(r,e.level==null?6:e.level,e.mem==null?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(r.length)))):12+e.mem,t,n,!i)},ov=function(r,e){var t={};for(var n in r)t[n]=r[n];for(var n in e)t[n]=e[n];return t},vt=function(r,e,t){for(;t;++e)r[e]=t,t>>>=8};function WS(r,e){return GS(r,e||{},0,0)}var lv=function(r,e,t,n){for(var i in r){var s=r[i],a=e+i;s instanceof It?t[a]=[s,n]:Array.isArray(s)?t[a]=[s[0],ov(n,s[1])]:lv(s,a+"/",t,n)}},cv=typeof TextEncoder!="undefined"&&new TextEncoder,jS=typeof TextDecoder!="undefined"&&new TextDecoder;try{jS.decode(Ju,{stream:!0})}catch{}function Ol(r,e){if(e){for(var t=new It(r.length),n=0;n<r.length;++n)t[n]=r.charCodeAt(n);return t}if(cv)return cv.encode(r);var i=r.length,s=new It(r.length+(r.length>>1)),a=0,o=function(h){s[a++]=h};for(n=0;n<i;++n){if(a+5>s.length){var l=new It(a+8+(i-n<<1));l.set(s),s=l}var c=r.charCodeAt(n);c<128||e?o(c):c<2048?(o(192|c>>6),o(128|63&c)):c>55295&&c<57344?(o(240|(c=65536+(1047552&c)|1023&r.charCodeAt(++n))>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|63&c)):(o(224|c>>12),o(128|c>>6&63),o(128|63&c))}return rv(s,0,a)}var Zu=function(r){var e=0;if(r)for(var t in r){var n=r[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},hv=function(r,e,t,n,i,s,a,o){var l=n.length,c=t.extra,h=o&&o.length,u=Zu(c);vt(r,e,a!=null?33639248:67324752),e+=4,a!=null&&(r[e++]=20,r[e++]=t.os),r[e]=20,e+=2,r[e++]=t.flag<<1|(s==null&&8),r[e++]=i&&8,r[e++]=255&t.compression,r[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),p=d.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(vt(r,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,s!=null&&(vt(r,e,t.crc),vt(r,e+4,s),vt(r,e+8,t.size)),vt(r,e+12,l),vt(r,e+14,u),e+=16,a!=null&&(vt(r,e,h),vt(r,e+6,t.attrs),vt(r,e+10,a),e+=14),r.set(n,e),e+=l,u)for(var f in c){var m=c[f],v=m.length;vt(r,e,+f),vt(r,e+2,v),r.set(m,e+4),e+=4+v}return h&&(r.set(o,e),e+=h),e};function qS(r,e){e||(e={});var t={},n=[];lv(r,"",t,e);var i=0,s=0;for(var a in t){var o=t[a],l=o[0],c=o[1],h=c.level==0?0:8,u=(T=Ol(a)).length,d=c.comment,p=d&&Ol(d),f=p&&p.length,m=Zu(c.extra);if(u>65535)throw"filename too long";var v=h?WS(l,c):l,g=v.length,b=VS();b.p(l),n.push(ov(c,{size:l.length,crc:b.d(),c:v,f:T,m:p,u:u!=a.length||p&&d.length!=f,o:i,compression:h})),i+=30+u+m+g,s+=76+2*(u+m)+(f||0)+g}for(var x=new It(s+22),y=i,w=s-i,M=0;M<n.length;++M){var T=n[M];hv(x,T.o,T,T.f,T.u,T.c.length);var P=30+T.f.length+Zu(T.extra);x.set(T.c,T.o+P),hv(x,i,T,T.f,T.u,T.c.length,T.o,T.m),i+=16+P+(T.m?T.m.length:0)}return function(D,I,N,X,G){vt(D,I,101010256),vt(D,I+8,N),vt(D,I+10,N),vt(D,I+12,X),vt(D,I+16,G)}(x,i,n.length,w,y),x}class XS{async parse(e){const t={};t["model.usda"]=null;let n=uv();const i={},s={};e.traverseVisible(o=>{if(o.isMesh&&o.material.isMeshStandardMaterial){const l=o.geometry,c=o.material,h="geometries/Geometry_"+l.id+".usd";if(!(h in t)){const u=function(d){return`
def "Geometry"
{
  ${function(p){const f="Geometry",m=p.attributes,v=m.position.count;return`
    def Mesh "${f}"
    {
        int[] faceVertexCounts = [${function(g){const b=g.index!==null?g.index.array.length:g.attributes.position.count;return Array(b/3).fill(3).join(", ")}(p)}]
        int[] faceVertexIndices = [${function(g){if(g.index!==null)return g.index.array.join(", ");const b=[],x=g.attributes.position.count;for(let y=0;y<x;y++)b.push(y);return b.join(", ")}(p)}]
        normal3f[] normals = [${dv(m.normal,v)}] (
            interpolation = "vertex"
        )
        point3f[] points = [${dv(m.position,v)}]
        float2[] primvars:st = [${function(g,b){if(g===void 0)return console.warn("USDZExporter: UVs missing."),Array(b).fill("(0, 0)").join(", ");const x=[],y=g.array;for(let w=0;w<y.length;w+=2)x.push(`(${y[w+0].toPrecision(7)}, ${1-y[w+1].toPrecision(7)})`);return x.join(", ")}(m.uv,v)}] (
            interpolation = "vertex"
        )
        uniform token subdivisionScheme = "none"
    }
`}(d)}
}
`}(l);t[h]=function(d){let p=uv();return p+=d,Ol(p)}(u)}c.uuid in i||(i[c.uuid]=c),n+=function(u,d,p){const f="Object_"+u.id,m=function(v){const g=v.elements;return`( ${Nl(g,0)}, ${Nl(g,4)}, ${Nl(g,8)}, ${Nl(g,12)} )`}(u.matrixWorld);return u.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",u),`def Xform "${f}" (
    prepend references = @./geometries/Geometry_${d.id}.usd@</Geometry>
)
{
    matrix4d xformOp:transform = ${m}
    uniform token[] xformOpOrder = ["xformOp:transform"]

    rel material:binding = </Materials/Material_${p.id}>
}

`}(o,l,c)}}),n+=function(o,l){const c=[];for(const h in o){const u=o[h];c.push($S(u,l))}return`def "Materials"
{
${c.join("")}
}

`}(i,s),t["model.usda"]=Ol(n),n=null;for(const o in s){const l=s[o],c=o.split("_")[1],h=l.format===1023,u=YS(l.image,c),d=await new Promise(p=>u.toBlob(p,h?"image/png":"image/jpeg",1));t[`textures/Texture_${o}.${h?"png":"jpg"}`]=new Uint8Array(await d.arrayBuffer())}let a=0;for(const o in t){const l=t[o];a+=34+o.length;const c=63&a;if(c!==4){const h=new Uint8Array(64-c);t[o]=[l,{extra:{12345:h}}]}a=l.length}return qS(t,{level:0})}}function YS(r,e){if(typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof OffscreenCanvas!="undefined"&&r instanceof OffscreenCanvas||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap){const t=1024/Math.max(r.width,r.height),n=document.createElement("canvas");n.width=r.width*Math.min(1,t),n.height=r.height*Math.min(1,t);const i=n.getContext("2d");if(i.drawImage(r,0,0,n.width,n.height),e!==void 0){const s=parseInt(e,16),a=(s>>16&255)/255,o=(s>>8&255)/255,l=(255&s)/255,c=i.getImageData(0,0,n.width,n.height),h=c.data;for(let u=0;u<h.length;u+=4)h[u+0]=h[u+0]*a,h[u+1]=h[u+1]*o,h[u+2]=h[u+2]*l;i.putImageData(c,0,0)}return n}}function uv(){return`#usda 1.0
(
    customLayerData = {
        string creator = "Three.js USDZExporter"
    }
    metersPerUnit = 1
    upAxis = "Y"
)

`}function Nl(r,e){return`(${r[e+0]}, ${r[e+1]}, ${r[e+2]}, ${r[e+3]})`}function dv(r,e){if(r===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[],n=r.array;for(let i=0;i<n.length;i+=3)t.push(`(${n[i+0].toPrecision(7)}, ${n[i+1].toPrecision(7)}, ${n[i+2].toPrecision(7)})`);return t.join(", ")}function $S(r,e){const t="            ",n=[],i=[];function s(a,o,l){const c=a.id+(l?"_"+l.getHexString():""),h=a.format===1023;return e[c]=a,`
        def Shader "Transform2d_${o}" (
            sdrMetadata = {
                string role = "math"
            }
        )
        {
            uniform token info:id = "UsdTransform2d"
            float2 inputs:in.connect = </Materials/Material_${r.id}/uvReader_st.outputs:result>
            float2 inputs:scale = ${fv(a.repeat)}
            float2 inputs:translation = ${fv(a.offset)}
            float2 outputs:result
        }

        def Shader "Texture_${a.id}_${o}"
        {
            uniform token info:id = "UsdUVTexture"
            asset inputs:file = @textures/Texture_${c}.${h?"png":"jpg"}@
            float2 inputs:st.connect = </Materials/Material_${r.id}/Transform2d_${o}.outputs:result>
            token inputs:wrapS = "repeat"
            token inputs:wrapT = "repeat"
            float outputs:r
            float outputs:g
            float outputs:b
            float3 outputs:rgb
        }`}return r.map!==null?(n.push(`${t}color3f inputs:diffuseColor.connect = </Materials/Material_${r.id}/Texture_${r.map.id}_diffuse.outputs:rgb>`),i.push(s(r.map,"diffuse",r.color))):n.push(`${t}color3f inputs:diffuseColor = ${pv(r.color)}`),r.emissiveMap!==null?(n.push(`${t}color3f inputs:emissiveColor.connect = </Materials/Material_${r.id}/Texture_${r.emissiveMap.id}_emissive.outputs:rgb>`),i.push(s(r.emissiveMap,"emissive"))):r.emissive.getHex()>0&&n.push(`${t}color3f inputs:emissiveColor = ${pv(r.emissive)}`),r.normalMap!==null&&(n.push(`${t}normal3f inputs:normal.connect = </Materials/Material_${r.id}/Texture_${r.normalMap.id}_normal.outputs:rgb>`),i.push(s(r.normalMap,"normal"))),r.aoMap!==null&&(n.push(`${t}float inputs:occlusion.connect = </Materials/Material_${r.id}/Texture_${r.aoMap.id}_occlusion.outputs:r>`),i.push(s(r.aoMap,"occlusion"))),r.roughnessMap!==null&&r.roughness===1?(n.push(`${t}float inputs:roughness.connect = </Materials/Material_${r.id}/Texture_${r.roughnessMap.id}_roughness.outputs:g>`),i.push(s(r.roughnessMap,"roughness"))):n.push(`${t}float inputs:roughness = ${r.roughness}`),r.metalnessMap!==null&&r.metalness===1?(n.push(`${t}float inputs:metallic.connect = </Materials/Material_${r.id}/Texture_${r.metalnessMap.id}_metallic.outputs:b>`),i.push(s(r.metalnessMap,"metallic"))):n.push(`${t}float inputs:metallic = ${r.metalness}`),r.alphaMap!==null?(n.push(`${t}float inputs:opacity.connect = </Materials/Material_${r.id}/Texture_${r.alphaMap.id}_opacity.outputs:r>`),n.push(`${t}float inputs:opacityThreshold = 0.0001`),i.push(s(r.alphaMap,"opacity"))):n.push(`${t}float inputs:opacity = ${r.opacity}`),r.isMeshPhysicalMaterial&&(n.push(`${t}float inputs:clearcoat = ${r.clearcoat}`),n.push(`${t}float inputs:clearcoatRoughness = ${r.clearcoatRoughness}`),n.push(`${t}float inputs:ior = ${r.ior}`)),`
    def Material "Material_${r.id}"
    {
        def Shader "PreviewSurface"
        {
            uniform token info:id = "UsdPreviewSurface"
${n.join(`
`)}
            int inputs:useSpecularWorkflow = 0
            token outputs:surface
        }

        token outputs:surface.connect = </Materials/Material_${r.id}/PreviewSurface.outputs:surface>
        token inputs:frame:stPrimvarName = "st"

        def Shader "uvReader_st"
        {
            uniform token info:id = "UsdPrimvarReader_float2"
            token inputs:varname.connect = </Materials/Material_${r.id}.inputs:frame:stPrimvarName>
            float2 inputs:fallback = (0.0, 0.0)
            float2 outputs:result
        }

${i.join(`
`)}

    }
`}function pv(r){return`(${r.r}, ${r.g}, ${r.b})`}function fv(r){return`(${r.x}, ${r.y})`}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ps=function(r,e,t,n){for(var i,s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};let mv=!1,gv=!1;const JS=(vv=["quick-look","scene-viewer","webxr","none"],r=>{try{const e=rr(r),t=(e.length?e[0].terms:[]).filter(i=>i&&i.type==="ident").map(i=>i.value).filter(i=>vv.indexOf(i)>-1),n=new Set;for(const i of t)n.add(i);return n}catch{}return new Set});var vv;const Ku="quick-look",yv="scene-viewer",xv="webxr",Qu="none",ei=Symbol("arButtonContainer"),bv=Symbol("enterARWithWebXR"),wv=Symbol("openSceneViewer"),_v=Symbol("openIOSARQuickLook"),ZS=Symbol("canActivateAR"),Pi=Symbol("arMode"),ed=Symbol("arModes"),fs=Symbol("arAnchor"),Ul=Symbol("preload"),kl=Symbol("onARButtonContainerClick"),td=Symbol("onARStatus"),nd=Symbol("onARTracking"),id=Symbol("onARTap"),Ea=Symbol("selectARMode"),rd=Symbol("triggerLoad");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mv,Sv,Tv;const ms=Symbol("evaluate"),zl=Symbol("lastValue");class Ke{constructor(){this[Mv]=null}static evaluatableFor(e,t=Ci){if(e instanceof Ke)return e;if(e.type==="number")return e.unit==="%"?new KS(e,t):e;switch(e.name.value){case"calc":return new tT(e,t);case"env":return new QS(e)}return Ci}static evaluate(e){return e instanceof Ke?e.evaluate():e}static isConstant(e){return!(e instanceof Ke)||e.isConstant}static applyIntrinsics(e,t){const{basis:n,keywords:i}=t,{auto:s}=i;return n.map((a,o)=>{const l=s[o]==null?a:s[o];let c=e[o]?e[o]:l;if(c.type==="ident"){const h=c.value;h in i&&(c=i[h][o])}return c!=null&&c.type!=="ident"||(c=l),c.unit==="%"?pt(c.number/100*a.number,a.unit):(c=An(c,a),c.unit!==a.unit?a:c)})}get isConstant(){return!1}evaluate(){return this.isConstant&&this[zl]!=null||(this[zl]=this[ms]()),this[zl]}}Mv=zl;const Ev=Symbol("percentage"),sd=Symbol("basis");class KS extends Ke{constructor(e,t){super(),this[Ev]=e,this[sd]=t}get isConstant(){return!0}[ms](){return pt(this[Ev].number/100*this[sd].number,this[sd].unit)}}const Bl=Symbol("identNode");class QS extends Ke{constructor(e){super(),this[Sv]=null;const t=e.arguments.length?e.arguments[0].terms[0]:null;t!=null&&t.type==="ident"&&(this[Bl]=t)}get isConstant(){return!1}[(Sv=Bl,ms)](){return this[Bl]!=null&&this[Bl].value==="window-scroll-y"?{type:"number",number:window.pageYOffset/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight)||0,unit:null}:Ci}}const eT=/[\*\/]/,gs=Symbol("evalutor");class tT extends Ke{constructor(e,t=Ci){if(super(),this[Tv]=null,e.arguments.length!==1)return;const n=e.arguments[0].terms.slice(),i=[];for(;n.length;){const s=n.shift();if(i.length>0){const a=i[i.length-1];if(a.type==="operator"&&eT.test(a.value)){const o=i.pop(),l=i.pop();if(l==null)return;i.push(new Lv(o,Ke.evaluatableFor(l,t),Ke.evaluatableFor(s,t)));continue}}i.push(s.type==="operator"?s:Ke.evaluatableFor(s,t))}for(;i.length>2;){const[s,a,o]=i.splice(0,3);if(a.type!=="operator")return;i.unshift(new Lv(a,Ke.evaluatableFor(s,t),Ke.evaluatableFor(o,t)))}i.length===1&&(this[gs]=i[0])}get isConstant(){return this[gs]==null||Ke.isConstant(this[gs])}[(Tv=gs,ms)](){return this[gs]!=null?Ke.evaluate(this[gs]):Ci}}const Av=Symbol("operator"),ad=Symbol("left"),od=Symbol("right");class Lv extends Ke{constructor(e,t,n){super(),this[Av]=e,this[ad]=t,this[od]=n}get isConstant(){return Ke.isConstant(this[ad])&&Ke.isConstant(this[od])}[ms](){const e=An(Ke.evaluate(this[ad])),t=An(Ke.evaluate(this[od])),{number:n,unit:i}=e,{number:s,unit:a}=t;if(a!=null&&i!=null&&a!=i)return Ci;const o=i||a;let l;switch(this[Av].value){case"+":l=n+s;break;case"-":l=n-s;break;case"/":l=n/s;break;case"*":l=n*s;break;default:return Ci}return{type:"number",number:l,unit:o}}}const ld=Symbol("evaluatables"),Rv=Symbol("intrinsics");class Cv extends Ke{constructor(e,t){super(),this[Rv]=t;const n=e[0],i=n!=null?n.terms:[];this[ld]=t.basis.map((s,a)=>{const o=i[a];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:Ke.evaluatableFor(o,s)})}get isConstant(){for(const e of this[ld])if(!Ke.isConstant(e))return!1;return!0}[ms](){const e=this[ld].map(t=>Ke.evaluate(t));return Ke.applyIntrinsics(e,this[Rv]).map(t=>t.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pv,Iv,Dv,Fv;const vs=Symbol("instances"),Ov=Symbol("activateListener"),Nv=Symbol("deactivateListener"),cd=Symbol("notifyInstances"),Uv=Symbol("notify"),kv=Symbol("callback");class Dn{constructor(e){this[kv]=e}static[cd](){for(const e of Dn[vs])e[Uv]()}static[(Pv=vs,Ov)](){window.addEventListener("scroll",this[cd],{passive:!0})}static[Nv](){window.removeEventListener("scroll",this[cd])}observe(){Dn[vs].size===0&&Dn[Ov](),Dn[vs].add(this)}disconnect(){Dn[vs].delete(this),Dn[vs].size===0&&Dn[Nv]()}[Uv](){this[kv]()}}Dn[Pv]=new Set;const zv=Symbol("computeStyleCallback"),Bv=Symbol("astWalker"),Aa=Symbol("dependencies"),Hv=Symbol("onScroll");class nT{constructor(e){this[Iv]={},this[Dv]=new dS(["function"]),this[Fv]=()=>{this[zv]({relatedState:"window-scroll"})},this[zv]=e}observeEffectsFor(e){const t={},n=this[Aa];this[Bv].walk(e,i=>{const{name:s}=i,a=i.arguments[0].terms[0];if(s.value==="env"&&a!=null&&a.type==="ident"&&a.value==="window-scroll-y"&&t["window-scroll"]==null){const o="window-scroll"in n?n["window-scroll"]:new Dn(this[Hv]);o.observe(),delete n["window-scroll"],t["window-scroll"]=o}});for(const i in n)n[i].disconnect();this[Aa]=t}dispose(){for(const e in this[Aa])this[Aa][e].disconnect()}}Iv=Aa,Dv=Bv,Fv=Hv;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=r=>{const e=r.observeEffects||!1,t=r.intrinsics instanceof Function?r.intrinsics:()=>r.intrinsics;return(n,i)=>{const s=n.updated,a=n.connectedCallback,o=n.disconnectedCallback,l=Symbol(`${i}StyleEffector`),c=Symbol(`${i}StyleEvaluator`),h=Symbol(`${i}UpdateEvaluator`),u=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(n,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const d=rr(this[i]);this[c]=new Cv(d,t(this)),this[l]==null&&e&&(this[l]=new nT(()=>this[u]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[r.updateHandler](d)}},updated:{value:function(d){d.has(i)&&(this[h](),this[u]()),s.call(this,d)}},connectedCallback:{value:function(){a.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){o.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}},Vv=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,interactionPolicy:"always-allow",touchAction:"pan-y"}),Hl=Math.PI/8,iT=33,rT=34,sT=37,aT=38,oT=39,lT=40,hd="user-interaction",cT="none";/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT extends Vt{constructor(e,t){super(),this.camera=e,this.element=t,this.sensitivity=1,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserChange=!1,this.isUserPointing=!1,this.spherical=new pl,this.goalSpherical=new pl,this.thetaDamper=new jt,this.phiDamper=new jt,this.radiusDamper=new jt,this.logFov=Math.log(Vv.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new jt,this.touchMode=null,this.lastPointerPosition={clientX:0,clientY:0},this.touchDecided=!1,this.onMouseMove=n=>{this.handleSinglePointerMove(n),n.cancelable&&n.preventDefault()},this.onTouchMove=n=>{this.touchMode!==null&&(this.touchMode(n),this.touchMode!==null&&n.cancelable&&n.preventDefault())},this.touchModeZoom=n=>{const{targetTouches:i}=n;if(this.lastTouches.length>1&&i.length>1){const s=.04*(this.twoTouchDistance(this.lastTouches[0],this.lastTouches[1])-this.twoTouchDistance(i[0],i[1]))/10;this.userAdjustOrbit(0,0,s),this.lastTouches=i}},this.touchModeRotate=n=>{const{targetTouches:i}=n,{touchAction:s}=this._options;if(!this.touchDecided&&s!=="none"){this.touchDecided=!0;const{clientX:a,clientY:o}=i[0],l=Math.abs(a-this.lastPointerPosition.clientX),c=Math.abs(o-this.lastPointerPosition.clientY);if(s==="pan-y"&&c>l||s==="pan-x"&&l>c)return void(this.touchMode=null)}this.handleSinglePointerMove(i[0]),this.lastTouches=i},this.onMouseDown=n=>{this.onPointerDown(()=>{self.addEventListener("mousemove",this.onMouseMove),self.addEventListener("mouseup",this.onMouseUp,{once:!0}),this.handleSinglePointerDown(n)})},this.onTouchStart=n=>{this.onPointerDown(()=>{const{targetTouches:i,changedTouches:s,touches:a}=n;i.length===s.length&&(this.touchMode=null,this.touchDecided=!1),i.length===a.length&&this.onTouchChange(n)})},this.onMouseUp=n=>{self.removeEventListener("mousemove",this.onMouseMove),this.onPointerUp()},this.onTouchEnd=n=>{n.targetTouches.length>0&&this.touchMode!==null&&this.onTouchChange(n),this.onPointerUp()},this.onWheel=n=>{if(!this.canInteract)return;const i=n.deltaY*(n.deltaMode==1?18:1)*.04/30;this.userAdjustOrbit(0,0,i),n.cancelable&&n.preventDefault()},this.onKeyDown=n=>{let i=!1;switch(n.keyCode){case iT:i=!0,this.userAdjustOrbit(0,0,.04);break;case rT:i=!0,this.userAdjustOrbit(0,0,-.04);break;case aT:i=!0,this.userAdjustOrbit(0,-Hl,0);break;case lT:i=!0,this.userAdjustOrbit(0,Hl,0);break;case sT:i=!0,this.userAdjustOrbit(-Hl,0,0);break;case oT:i=!0,this.userAdjustOrbit(Hl,0,0)}i&&n.cancelable&&n.preventDefault()},this._options=Object.assign({},Vv),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:e}=this;e.addEventListener("mousedown",this.onMouseDown),this._disableZoom||e.addEventListener("wheel",this.onWheel),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("touchstart",this.onTouchStart,{passive:!0}),e.addEventListener("touchmove",this.onTouchMove,{passive:!1}),e.addEventListener("touchend",this.onTouchEnd),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:e}=this;self.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("mousedown",this.onMouseDown),this._disableZoom||e.removeEventListener("wheel",this.onWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("touchstart",this.onTouchStart),e.removeEventListener("touchmove",this.onTouchMove),self.removeEventListener("mouseup",this.onMouseUp),e.removeEventListener("touchend",this.onTouchEnd),e.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(e){this._disableZoom!=e&&(this._disableZoom=e,e===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(e=new pl){return e.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(e){Object.assign(this._options,e),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(e,t){this.camera.near=Math.max(e,t/1e3),this.camera.far=t,this.camera.updateProjectionMatrix()}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setOrbit(e=this.goalSpherical.theta,t=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:s,minimumPolarAngle:a,maximumPolarAngle:o,minimumRadius:l,maximumRadius:c}=this._options,{theta:h,phi:u,radius:d}=this.goalSpherical,p=ir(e,i,s);isFinite(i)||isFinite(s)||(this.spherical.theta=this.wrapAngle(this.spherical.theta-p)+p);const f=ir(t,a,o),m=ir(n,l,c);return(p!==h||f!==u||m!==d)&&(this.goalSpherical.theta=p,this.goalSpherical.phi=f,this.goalSpherical.radius=m,this.goalSpherical.makeSafe(),this.isUserChange=!1,!0)}setRadius(e){this.goalSpherical.radius=e,this.setOrbit()}setFieldOfView(e){const{minimumFieldOfView:t,maximumFieldOfView:n}=this._options;e=ir(e,t,n),this.goalLogFov=Math.log(e)}setDamperDecayTime(e){this.thetaDamper.setDecayTime(e),this.phiDamper.setDecayTime(e),this.radiusDamper.setDecayTime(e),this.fovDamper.setDecayTime(e)}adjustOrbit(e,t,n){const{theta:i,phi:s,radius:a}=this.goalSpherical,{minimumRadius:o,maximumRadius:l,minimumFieldOfView:c,maximumFieldOfView:h}=this._options,u=this.spherical.theta-i,d=Math.PI-.001,p=i-ir(e,-d-u,d-u),f=s-t,m=n===0?0:((n>0?l:o)-a)/(Math.log(n>0?h:c)-this.goalLogFov),v=a+n*Math.min(isFinite(m)?m:1/0,l-o);if(this.setOrbit(p,f,v),n!==0){const g=this.goalLogFov+n;this.setFieldOfView(Math.exp(g))}}jumpToGoal(){this.update(0,1e4)}update(e,t){if(this.isStationary())return;const{maximumPolarAngle:n,maximumRadius:i}=this._options,s=this.spherical.theta-this.goalSpherical.theta;Math.abs(s)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=2*Math.sign(s)*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,t,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,t,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,t,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,t,1),this.moveCamera()}updateTouchActionStyle(){const{style:e}=this.element;if(this._interactionEnabled){const{touchAction:t}=this._options;this._disableZoom&&t!=="none"?e.touchAction="manipulation":e.touchAction=t}else e.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new vi(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix());const e=this.isUserChange?hd:cT;this.dispatchEvent({type:"change",source:e})}get canInteract(){return this._options.interactionPolicy=="allow-when-focused"?this.element.getRootNode().activeElement===this.element:this._options.interactionPolicy==="always-allow"}userAdjustOrbit(e,t,n){this.adjustOrbit(e*this.sensitivity,t*this.sensitivity,n),this.isUserChange=!0,this.dispatchEvent({type:"change",source:hd})}wrapAngle(e){const t=(e+Math.PI)/(2*Math.PI);return 2*(t-Math.floor(t))*Math.PI-Math.PI}pixelLengthToSphericalAngle(e){return 2*Math.PI*e/this.element.clientHeight}twoTouchDistance(e,t){const{clientX:n,clientY:i}=e,{clientX:s,clientY:a}=t,o=s-n,l=a-i;return Math.sqrt(o*o+l*l)}handleSinglePointerMove(e){const{clientX:t,clientY:n}=e,i=this.pixelLengthToSphericalAngle(t-this.lastPointerPosition.clientX),s=this.pixelLengthToSphericalAngle(n-this.lastPointerPosition.clientY);this.lastPointerPosition.clientX=t,this.lastPointerPosition.clientY=n,this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start",pointer:Object.assign({},e)})),this.userAdjustOrbit(i,s,0)}onPointerDown(e){this.canInteract&&(this.isUserPointing=!1,e())}onTouchChange(e){const{targetTouches:t}=e;t.length===2?(this.touchMode=this._disableZoom||this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0):(this.touchMode=this.touchModeRotate,this.handleSinglePointerDown(t[0])),this.lastTouches=t}handleSinglePointerDown(e){this.lastPointerPosition.clientX=e.clientX,this.lastPointerPosition.clientY=e.clientY,this.element.style.cursor="grabbing"}onPointerUp(){this.element.style.cursor="grab",this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end",pointer:Object.assign({},this.lastPointerPosition)})}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=r=>r<.5?2*r*r:(4-2*r)*r-1,uT=(r,e,t=Gv)=>n=>r+(e-r)*t(n),Wv=(r,e)=>{const t=[],n=[];let i=r;for(let s=0;s<e.length;++s){const a=e[s],{value:o,frames:l}=a,c=a.ease||Gv,h=uT(i,o,c);t.push(h),n.push(l),i=o}return((s,a)=>{const o=a.reduce((c,h)=>c+h,0),l=a.map(c=>c/o);return c=>{let h=0,u=1/0,d=()=>0;for(let p=0;p<l.length&&(u=l[p],d=s[p],!(c<=h+u));++p)h+=u;return d((c-h)/u)}})(t,n)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt=function(r,e,t,n){for(var i,s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};const dT=Wv(0,[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]),pT=Wv(0,[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]),fT=1.1*Lu,mT=["front","right","back","left"],gT=["upper-","","lower-"],La="auto",jv="when-focused",ud="wiggle",vT="always-allow",yT="pan-y",xT=r=>({basis:[pt(r[Fa]*Math.PI/180,"rad")],keywords:{auto:[null]}}),bT={basis:[gl(pt(25,"deg"))],keywords:{auto:[null]}},wT=r=>{const e=r[de];return{basis:[gl(pt(45,"deg"))],keywords:{auto:[pt(e.framedFieldOfView,"deg")]}}},qv=(()=>{const r=rr("0deg 75deg 105%")[0].terms,e=An(r[0]),t=An(r[1]);return n=>{const i=n[de].idealCameraDistance;return{basis:[e,t,pt(i,"m")],keywords:{auto:[null,null,pt(105,"%")]}}}})(),_T=r=>{const e=fT*r[de].idealCameraDistance;return{basis:[pt(-1/0,"rad"),pt(Math.PI/8,"rad"),pt(e,"m")],keywords:{auto:[null,null,null]}}},MT=r=>{const e=qv(r),t=new Cv([],e).evaluate()[2];return{basis:[pt(1/0,"rad"),pt(Math.PI-Math.PI/8,"rad"),pt(t,"m")],keywords:{auto:[null,null,null]}}},ST=r=>{const e=r[de].boundingBox.getCenter(new C);return{basis:[pt(e.x,"m"),pt(e.y,"m"),pt(e.z,"m")],keywords:{auto:[null,null,null]}}},dd=Math.PI/2,Xv=Math.PI/3,Yv=dd/2,$v=2*Math.PI,et=Symbol("controls"),Ra=Symbol("promptElement"),pd=Symbol("promptAnimatedContainer"),Vl=Symbol("deferInteractionPrompt"),Jv=Symbol("updateAria"),Zv=Symbol("updateCameraForRadius"),fd=Symbol("onBlur"),md=Symbol("onFocus"),gd=Symbol("onChange"),Ca=Symbol("onPointerChange"),ti=Symbol("waitingToPromptUser"),Pa=Symbol("userHasInteracted"),ur=Symbol("promptElementVisibleTime"),Ia=Symbol("lastPromptOffset"),Da=Symbol("focusedTime"),Fa=Symbol("zoomAdjustedFieldOfView"),Gl=Symbol("lastSpherical"),Oa=Symbol("jumpCamera"),vd=Symbol("initialized"),Na=Symbol("maintainThetaPhi"),Kv=Symbol("syncCameraOrbit"),Qv=Symbol("syncFieldOfView"),ey=Symbol("syncCameraTarget"),ty=Symbol("syncMinCameraOrbit"),ny=Symbol("syncMaxCameraOrbit"),iy=Symbol("syncMinFieldOfView"),ry=Symbol("syncMaxFieldOfView");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sy,ay;const Wl=Symbol("modelViewerStatusInstance"),oy=Symbol("updateStatus");sy=Wl,ay=oy;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ua=function(r,e,t,n){for(var i,s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};const yd="auto",ly="manual",TT="auto",ET="eager",AT="interaction",cy=new class extends Vt{constructor(){super(),this[sy]=null,this.registeredInstanceStatuses=new Map,this.loadingPromises=[],this.statusElement=document.createElement("p"),this.statusUpdateInProgress=!1,this[ay]=Tu(()=>this.updateStatus(),100);const{statusElement:r}=this,{style:e}=r;r.setAttribute("role","status"),r.classList.add("screen-reader-only"),e.top=e.left="0",e.pointerEvents="none"}registerInstance(r){if(this.registeredInstanceStatuses.has(r))return;let e=()=>{};const t=r.loaded===!1&&!!r.src,n=new Promise(i=>{if(!t)return void i();const s=()=>{i(),r.removeEventListener("load",s),r.removeEventListener("error",s)};r.addEventListener("load",s),r.addEventListener("error",s),e=s});this.registeredInstanceStatuses.set(r,{onUnregistered:e}),this.loadingPromises.push(n),this.modelViewerStatusInstance==null&&(this.modelViewerStatusInstance=r)}unregisterInstance(r){if(!this.registeredInstanceStatuses.has(r))return;const e=this.registeredInstanceStatuses,t=e.get(r);e.delete(r),t.onUnregistered(),this.modelViewerStatusInstance===r&&(this.modelViewerStatusInstance=e.size>0?(n=>{if(n.keys!=null)return n.keys().next().value||null;let i=null;try{n.forEach((s,a,o)=>{throw i=a,new Error})}catch{}return i})(e):null)}get modelViewerStatusInstance(){return this[Wl]}set modelViewerStatusInstance(r){if(this[Wl]===r)return;const{statusElement:e}=this;r!=null&&r.shadowRoot!=null?r.shadowRoot.appendChild(e):e.parentNode!=null&&e.parentNode.removeChild(e),this[Wl]=r,this[oy]()}async updateStatus(){if(!this.statusUpdateInProgress&&this.loadingPromises.length!==0){for(this.statusElement.textContent="This page includes one or more 3D models that are loading",this.statusUpdateInProgress=!0,this.dispatchEvent({type:"initial-status-announced"});this.loadingPromises.length;){const{loadingPromises:r}=this;this.loadingPromises=[],await Promise.all(r)}this.statusElement.textContent="All 3D models in the page have loaded",this.statusUpdateInProgress=!1,this.dispatchEvent({type:"finished-loading-announced"})}}},dr=Symbol("defaultProgressBarElement"),hy=Symbol("defaultProgressMaskElement"),ni=Symbol("posterContainerElement"),ys=Symbol("defaultPosterElement"),ka=Symbol("posterDismissalSource"),xd=Symbol("hidePoster"),jl=Symbol("modelIsRevealed"),bd=Symbol("updateProgressBar"),za=Symbol("lastReportedProgress"),Ba=Symbol("transitioned"),wd=Symbol("onTransitionEnd"),uy=Symbol("ariaLabelCallToAction"),_d=Symbol("onClick"),Md=Symbol("onKeydown"),Sd=Symbol("onProgress");class Td{constructor(){this.pluginCallbacks=[],this.register(function(e){return new GT(e)}),this.register(function(e){return new WT(e)}),this.register(function(e){return new jT(e)}),this.register(function(e){return new qT(e)}),this.register(function(e){return new XT(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n){const i=new VT,s=[];for(let a=0,o=this.pluginCallbacks.length;a<o;a++)s.push(this.pluginCallbacks[a](i));i.setPlugins(s),i.write(e,t,n)}}const LT=0,dy=1,RT=2,CT=3,PT=4,Ed=5121,Ad=5123,py=5126,fy=5125,my=34962,IT=34963,DT=9728,FT=9729,OT=9984,NT=9985,UT=9986,kT=9987,zT=33071,BT=33648,HT=10497,qt={};qt[1003]=DT,qt[1004]=OT,qt[1005]=UT,qt[1006]=FT,qt[1007]=NT,qt[1008]=kT,qt[1001]=zT,qt[1e3]=HT,qt[1002]=BT;const gy={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"};function Ha(r,e){return r.length===e.length&&r.every(function(t,n){return t===e[n]})}function vy(r){return 4*Math.ceil(r/4)}function Ld(r,e=0){const t=vy(r.byteLength);if(t!==r.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(r)),e!==0)for(let i=r.byteLength;i<t;i++)n[i]=e;return n.buffer}return r}let yy=null;class VT{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}write(e,t,n){this.options=Object.assign({},{binary:!1,trs:!1,onlyVisible:!0,truncateDrawRange:!0,embedImages:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e);const i=this;Promise.all(this.pending).then(function(){const s=i.buffers,a=i.json,o=i.options,l=i.extensionsUsed,c=new Blob(s,{type:"application/octet-stream"}),h=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),o.binary===!0){const u=new window.FileReader;u.readAsArrayBuffer(c),u.onloadend=function(){const d=Ld(u.result),p=new DataView(new ArrayBuffer(8));p.setUint32(0,d.byteLength,!0),p.setUint32(4,5130562,!0);const f=Ld(function(w){if(window.TextEncoder!==void 0)return new TextEncoder().encode(w).buffer;const M=new Uint8Array(new ArrayBuffer(w.length));for(let T=0,P=w.length;T<P;T++){const D=w.charCodeAt(T);M[T]=D>255?32:D}return M.buffer}(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(8));m.setUint32(0,f.byteLength,!0),m.setUint32(4,1313821514,!0);const v=new ArrayBuffer(12),g=new DataView(v);g.setUint32(0,1179937895,!0),g.setUint32(4,2,!0);const b=12+m.byteLength+f.byteLength+p.byteLength+d.byteLength;g.setUint32(8,b,!0);const x=new Blob([v,m,f,p,d],{type:"application/octet-stream"}),y=new window.FileReader;y.readAsArrayBuffer(x),y.onloadend=function(){t(y.result)}}}else if(a.buffers&&a.buffers.length>0){const u=new window.FileReader;u.readAsDataURL(c),u.onloadend=function(){const d=u.result;a.buffers[0].uri=d,t(a)}}else t(a)})}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&s.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in s.gltfExtensions)t.extensions[a]=s.gltfExtensions[a],i[a]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e){return this.uids.has(e)||this.uids.set(e,this.uid++),this.uids.get(e)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const t=new C;for(let n=0,i=e.count;n<i;n++)if(Math.abs(t.fromBufferAttribute(e,n).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new C;for(let s=0,a=n.count;s<a;s++)i.fromBufferAttribute(n,s),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(s,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};t.offset.x===0&&t.offset.y===0||(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),t.repeat.x===1&&t.repeat.y===1||(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,s){const a=this.json;let o;a.bufferViews||(a.bufferViews=[]),o=t===Ed?1:t===Ad?2:4;const l=vy(i*e.itemSize*o),c=new DataView(new ArrayBuffer(l));let h=0;for(let d=n;d<n+i;d++)for(let p=0;p<e.itemSize;p++){let f;e.itemSize>4?f=e.array[d*e.itemSize+p]:p===0?f=e.getX(d):p===1?f=e.getY(d):p===2?f=e.getZ(d):p===3&&(f=e.getW(d)),t===py?c.setFloat32(h,f,!0):t===fy?c.setUint32(h,f,!0):t===Ad?c.setUint16(h,f,!0):t===Ed&&c.setUint8(h,f),h+=o}const u={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:l};return s!==void 0&&(u.target=s),s===my&&(u.byteStride=e.itemSize*o),this.byteOffset+=l,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const s=new window.FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){const a=Ld(s.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){const s=this.options,a=this.json;let o;if(e.array.constructor===Float32Array)o=py;else if(e.array.constructor===Uint32Array)o=fy;else if(e.array.constructor===Uint16Array)o=Ad;else{if(e.array.constructor!==Uint8Array)throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");o=Ed}if(n===void 0&&(n=0),i===void 0&&(i=e.count),s.truncateDrawRange&&t!==void 0&&t.index===null){const d=n+i,p=t.drawRange.count===1/0?e.count:t.drawRange.start+t.drawRange.count;n=Math.max(n,t.drawRange.start),(i=Math.min(d,p)-n)<0&&(i=0)}if(i===0)return null;const l=function(d,p,f){const m={min:new Array(d.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(d.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let v=p;v<p+f;v++)for(let g=0;g<d.itemSize;g++){let b;d.itemSize>4?b=d.array[v*d.itemSize+g]:g===0?b=d.getX(v):g===1?b=d.getY(v):g===2?b=d.getZ(v):g===3&&(b=d.getW(v)),m.min[g]=Math.min(m.min[g],b),m.max[g]=Math.max(m.max[g],b)}return m}(e,n,i);let c;t!==void 0&&(c=e===t.index?IT:my);const h=this.processBufferView(e,o,n,i,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:{1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",16:"MAT4"}[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),a.accessors||(a.accessors=[]),a.accessors.push(u)-1}processImage(e,t,n){const i=this,s=i.cache,a=i.json,o=i.options,l=i.pending;s.images.has(e)||s.images.set(e,{});const c=s.images.get(e),h=t===1023?"image/png":"image/jpeg",u=h+":flipY/"+n.toString();if(c[u]!==void 0)return c[u];a.images||(a.images=[]);const d={mimeType:h};if(o.embedImages){const f=yy=yy||document.createElement("canvas");f.width=Math.min(e.width,o.maxTextureSize),f.height=Math.min(e.height,o.maxTextureSize);const m=f.getContext("2d");if(n===!0&&(m.translate(0,f.height),m.scale(1,-1)),typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas!="undefined"&&e instanceof OffscreenCanvas||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap)m.drawImage(e,0,0,f.width,f.height);else{t!==1023&&t!==1022&&console.error("GLTFExporter: Only RGB and RGBA formats are supported."),(e.width>o.maxTextureSize||e.height>o.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const v=new Uint8ClampedArray(e.height*e.width*4);if(t===1023)for(let g=0;g<v.length;g+=4)v[g+0]=e.data[g+0],v[g+1]=e.data[g+1],v[g+2]=e.data[g+2],v[g+3]=e.data[g+3];else for(let g=0,b=0;g<v.length;g+=4,b+=3)v[g+0]=e.data[b+0],v[g+1]=e.data[b+1],v[g+2]=e.data[b+2],v[g+3]=255;m.putImageData(new ImageData(v,e.width,e.height),0,0)}o.binary===!0?l.push(new Promise(function(v){f.toBlob(function(g){i.processBufferViewImage(g).then(function(b){d.bufferView=b,v()})},h)})):d.uri=f.toDataURL(h)}else d.uri=e.src;const p=a.images.push(d)-1;return c[u]=p,p}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:qt[e.magFilter],minFilter:qt[e.minFilter],wrapS:qt[e.wrapS],wrapT:qt[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const t=this.cache,n=this.json;if(t.textures.has(e))return t.textures.get(e);n.textures||(n.textures=[]);const i={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY)};e.name&&(i.name=e.name),this._invokeAll(function(a){a.writeTexture&&a.writeTexture(e,i)});const s=n.textures.push(i)-1;return t.textures.set(e,s),s}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(Ha(s,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap)if(e.metalnessMap===e.roughnessMap){const o={index:this.processTexture(e.metalnessMap)};this.applyTextureTransform(o,e.metalnessMap),i.pbrMetallicRoughness.metallicRoughnessTexture=o}else console.warn("THREE.GLTFExporter: Ignoring metalnessMap and roughnessMap because they are not the same Texture.");if(e.map){const o={index:this.processTexture(e.map)};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive.clone().multiplyScalar(e.emissiveIntensity),l=Math.max(o.r,o.g,o.b);if(l>1&&(o.multiplyScalar(1/l),console.warn("THREE.GLTFExporter: Some emissive components exceed 1; emissive has been limited")),l>0&&(i.emissiveFactor=o.toArray()),e.emissiveMap){const c={index:this.processTexture(e.emissiveMap)};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const o={index:this.processTexture(e.normalMap)};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:this.processTexture(e.aoMap),texCoord:1};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===2&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,y=e.material.length;x<y;x++)i.push(e.material[x].uuid);else i.push(e.material.uuid);const s=i.join(":");if(t.meshes.has(s))return t.meshes.get(s);const a=e.geometry;let o;if(o=e.isLineSegments?dy:e.isLineLoop?RT:e.isLine?CT:e.isPoints?LT:e.material.wireframe?dy:PT,a.isBufferGeometry!==!0)throw new Error("THREE.GLTFExporter: Geometry is not of type THREE.BufferGeometry.");const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv2:"TEXCOORD_1",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=a.getAttribute("normal");p===void 0||this.isNormalizedNormalAttribute(p)||(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let f=null;for(let x in a.attributes){if(x.substr(0,5)==="morph")continue;const y=a.attributes[x];if(x=d[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),t.attributes.has(this.getUID(y))){c[x]=t.attributes.get(this.getUID(y));continue}f=null;const w=y.array;x!=="JOINTS_0"||w instanceof Uint16Array||w instanceof Uint8Array||(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),f=new je(new Uint16Array(w),y.itemSize,y.normalized));const M=this.processAccessor(f||y,a);M!==null&&(c[x]=M,t.attributes.set(this.getUID(y),M))}if(p!==void 0&&a.setAttribute("normal",p),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],y=[],w={};if(e.morphTargetDictionary!==void 0)for(const M in e.morphTargetDictionary)w[e.morphTargetDictionary[M]]=M;for(let M=0;M<e.morphTargetInfluences.length;++M){const T={};let P=!1;for(const D in a.morphAttributes){if(D!=="position"&&D!=="normal"){P||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),P=!0);continue}const I=a.morphAttributes[D][M],N=D.toUpperCase(),X=a.attributes[D];if(t.attributes.has(this.getUID(I))){T[N]=t.attributes.get(this.getUID(I));continue}const G=I.clone();if(!a.morphTargetsRelative)for(let z=0,$=I.count;z<$;z++)G.setXYZ(z,I.getX(z)-X.getX(z),I.getY(z)-X.getY(z),I.getZ(z)-X.getZ(z));T[N]=this.processAccessor(G,a),t.attributes.set(this.getUID(X),T[N])}u.push(T),x.push(e.morphTargetInfluences[M]),e.morphTargetDictionary!==void 0&&y.push(w[M])}l.weights=x,y.length>0&&(l.extras={},l.extras.targetNames=y)}const m=Array.isArray(e.material);if(m&&a.groups.length===0)return null;const v=m?e.material:[e.material],g=m?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,y=g.length;x<y;x++){const w={mode:o,attributes:c};if(this.serializeUserData(a,w),u.length>0&&(w.targets=u),a.index!==null){let T=this.getUID(a.index);g[x].start===void 0&&g[x].count===void 0||(T+=":"+g[x].start+":"+g[x].count),t.attributes.has(T)?w.indices=t.attributes.get(T):(w.indices=this.processAccessor(a.index,a,g[x].start,g[x].count),t.attributes.set(T,w.indices)),w.indices===null&&delete w.indices}const M=this.processMaterial(v[g[x].materialIndex]);M!==null&&(w.material=M),h.push(w)}l.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(x){x.writeMesh&&x.writeMesh(e,l)});const b=n.meshes.push(l)-1;return t.meshes.set(s,b),b}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:2*e.right,ymag:2*e.top,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:So.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]);const s=(e=Td.Utils.mergeMorphTargetTracks(e.clone(),t)).tracks,a=[],o=[];for(let l=0;l<s.length;++l){const c=s[l],h=Oe.parseTrackName(c.name);let u=Oe.findNode(t,h.nodeName);const d=gy[h.propertyName];if(h.objectName==="bones"&&(u=u.isSkinnedMesh===!0?u.skeleton.getBoneByName(h.objectIndex):void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name),null;const p=1;let f,m=c.values.length/c.times.length;d===gy.morphTargetInfluences&&(m/=u.morphTargetInfluences.length),c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",m/=3):f=c.getInterpolation()===2300?"STEP":"LINEAR",o.push({input:this.processAccessor(new je(c.times,p)),output:this.processAccessor(new je(c.values,m)),interpolation:f}),a.push({sampler:o.length-1,target:{node:i.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],s=e.skeleton;if(s===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(16*s.bones.length),c=new ye;for(let h=0;h<s.bones.length;++h)o.push(n.get(s.bones[h])),c.copy(s.boneInverses[h]),c.multiply(e.bindMatrix).toArray(l,16*h);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new je(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const s={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Ha(o,[0,0,0,1])||(s.rotation=o),Ha(l,[0,0,0])||(s.translation=l),Ha(c,[1,1,1])||(s.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),Ha(e.matrix.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const o=this.processMesh(e);o!==null&&(s.mesh=o)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=this.processNode(h);u!==null&&o.push(u)}}o.length>0&&(s.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,s)});const a=t.nodes.push(s)-1;return i.set(e,a),a}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const s=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&s.push(c)}}s.length>0&&(i.nodes=s),this.serializeUserData(e,i)}processObjects(e){const t=new Mn;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof Mn?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class GT{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight)return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);const n=this.writer,i=n.json,s=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(e.penumbra-1)*e.angle*-1,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),!e.target||e.target.parent===e&&e.target.position.x===0&&e.target.position.y===0&&e.target.position.z===-1||console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},s[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class WT{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const n=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},n[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class jT{constructor(e){this.writer=e,this.name="KHR_materials_pbrSpecularGlossiness"}writeMaterial(e,t){if(!e.isGLTFSpecularGlossinessMaterial)return;const n=this.writer,i=n.extensionsUsed,s={};t.pbrMetallicRoughness.baseColorFactor&&(s.diffuseFactor=t.pbrMetallicRoughness.baseColorFactor);const a=[1,1,1];if(e.specular.toArray(a,0),s.specularFactor=a,s.glossinessFactor=e.glossiness,t.pbrMetallicRoughness.baseColorTexture&&(s.diffuseTexture=t.pbrMetallicRoughness.baseColorTexture),e.specularMap){const o={index:n.processTexture(e.specularMap)};n.applyTextureTransform(o,e.specularMap),s.specularGlossinessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class qT{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){const a={index:n.processTexture(e.transmissionMap)};n.applyTextureTransform(a,e.transmissionMap),s.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class XT{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.thickness===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){const a={index:n.processTexture(e.thicknessMap)};n.applyTextureTransform(a,e.thicknessMap),s.thicknessTexture=a}s.attenuationDistance=e.attenuationDistance,s.attenuationColor=e.attenuationTint.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}Td.Utils={insertKeyframe:function(r,e){const t=.001,n=r.getValueSize(),i=new r.TimeBufferType(r.times.length+1),s=new r.ValueBufferType(r.values.length+n),a=r.createInterpolant(new r.ValueBufferType(n));let o;if(r.times.length===0){i[0]=e;for(let l=0;l<n;l++)s[l]=0;o=0}else if(e<r.times[0]){if(Math.abs(r.times[0]-e)<t)return 0;i[0]=e,i.set(r.times,1),s.set(a.evaluate(e),0),s.set(r.values,n),o=0}else if(e>r.times[r.times.length-1]){if(Math.abs(r.times[r.times.length-1]-e)<t)return r.times.length-1;i[i.length-1]=e,i.set(r.times,0),s.set(r.values,0),s.set(a.evaluate(e),r.values.length),o=i.length-1}else for(let l=0;l<r.times.length;l++){if(Math.abs(r.times[l]-e)<t)return l;if(r.times[l]<e&&r.times[l+1]>e){i.set(r.times.slice(0,l+1),0),i[l+1]=e,i.set(r.times.slice(l+1),l+2),s.set(r.values.slice(0,(l+1)*n),0),s.set(a.evaluate(e),(l+1)*n),s.set(r.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return r.times=i,r.values=s,o},mergeMorphTargetTracks:function(r,e){const t=[],n={},i=r.tracks;for(let s=0;s<i.length;++s){let a=i[s];const o=Oe.parseTrackName(a.name),l=Oe.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(2301)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const p=new u.ValueBufferType(c*u.times.length);for(let f=0;f<u.times.length;f++)p[f*c+h]=u.values[f];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=p,n[l.uuid]=u,t.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let p=0;p<u.times.length;p++)u.values[p*c+h]=d.evaluate(u.times[p]);for(let p=0;p<a.times.length;p++){const f=this.insertKeyframe(u,a.times[p]);u.values[f*c+h]=a.values[p]}}return r.tracks=t,r}};/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=r=>r.material!==void 0&&r.userData&&r.userData.variantMaterials&&!!Array.from(r.userData.variantMaterials.values()).filter(e=>ql(e.material)),ql=r=>r&&r.isMaterial&&!Array.isArray(r);class YT{constructor(e){this.writer=e,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(e){const t=new Set;for(const n of e)n.traverse(i=>{if(!xy(i))return;const s=i.userData.variantMaterials;for(const a of s.keys()){const o=s.get(a);ql(o.material)&&t.add(a)}});t.forEach(n=>this.variantNames.push(n))}writeMesh(e,t){if(!xy(e))return;const n=e.userData,i=n.variantMaterials,s=new Map;for(const l of i.keys()){const c=i.get(l).material;if(!ql(c))continue;const h=this.variantNames.indexOf(l),u=this.writer.processMaterial(c);s.has(u)||s.set(u,{material:u,variants:[]}),s.get(u).variants.push(h)}const a=Array.from(s.values()).map(l=>l.variants.sort((c,h)=>c-h)&&l).sort((l,c)=>l.material-c.material);if(a.length===0)return;const o=ql(n.originalMaterial)?this.writer.processMaterial(n.originalMaterial):-1;for(const l of t.primitives)o>=0&&(l.material=o),l.extensions=l.extensions||{},l.extensions[this.name]={mappings:a}}afterParse(){if(this.variantNames.length===0)return;const e=this.writer.json;e.extensions=e.extensions||{};const t=this.variantNames.map(n=>({name:n}));e.extensions[this.name]={variants:t},this.writer.extensionsUsed[this.name]=!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=Symbol("correlatedObjects"),$e=Symbol("sourceObject"),mn=Symbol("onUpdate");class Va{constructor(e,t,n=null){this[mn]=e,this[$e]=t,this[Mt]=n}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=new lu,by=new un,JT=new _i(2,2),Xl=Symbol("threeTexture");class ZT extends Va{get[Xl](){var e;return console.assert(this[Mt]!=null&&this[Mt].size>0,"Image correlated object is undefined"),(e=this[Mt])===null||e===void 0?void 0:e.values().next().value}constructor(e,t,n){super(e,n=n!=null?n:{name:"adhoc_image",uri:t&&t.image?t.image.src:"adhoc_image"},new Set(t?[t]:[]))}get name(){return this[$e].name||""}get uri(){return this[$e].uri}get bufferView(){return this[$e].bufferView}get type(){return this.uri!=null?"external":"embedded"}async setURI(e){this[$e].uri=e;const t=await new Promise((i,s)=>{$T.load(e,i,void 0,s)}),n=this[Xl];n.image=t,n.needsUpdate=!0,this[mn]()}async createThumbnail(e,t){const n=new Mn;by.map=this[Xl];const i=new Me(JT,by);n.add(i);const s=new Ki(-1,1,1,-1,0,1),{threeRenderer:a}=Rn.singleton,o=new Ut(e,t);a.setRenderTarget(o),a.render(n,s),a.setRenderTarget(null);const l=new Uint8Array(e*t*4);a.readRenderTargetPixels(o,0,0,e,t,l),en.width=e,en.height=t;const c=en.getContext("2d"),h=c.createImageData(e,t);return h.data.set(l),c.putImageData(h,0,0),new Promise(async(u,d)=>{en.toBlob(p=>{if(!p)return d("Failed to capture thumbnail.");u(URL.createObjectURL(p))},"image/png")})}}var tn,pr;(function(r){r[r.Nearest=9728]="Nearest",r[r.Linear=9729]="Linear",r[r.NearestMipmapNearest=9984]="NearestMipmapNearest",r[r.LinearMipmapNearest=9985]="LinearMipmapNearest",r[r.NearestMipmapLinear=9986]="NearestMipmapLinear",r[r.LinearMipmapLinear=9987]="LinearMipmapLinear"})(tn||(tn={})),function(r){r[r.ClampToEdge=33071]="ClampToEdge",r[r.MirroredRepeat=33648]="MirroredRepeat",r[r.Repeat=10497]="Repeat"}(pr||(pr={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=(()=>{const r=[tn.Nearest,tn.Linear,tn.NearestMipmapNearest,tn.LinearMipmapLinear,tn.NearestMipmapLinear,tn.LinearMipmapLinear];return e=>r.indexOf(e)>-1})(),QT=(()=>{const r=[tn.Nearest,tn.Linear];return e=>r.indexOf(e)>-1})(),eE=(()=>{const r=[pr.ClampToEdge,pr.MirroredRepeat,pr.Repeat];return e=>r.indexOf(e)>-1})(),wy=Symbol("threeTextures"),Ga=Symbol("setProperty"),xs=Symbol("sourceSampler");class tE extends Va{get[wy](){return console.assert(this[Mt]!=null&&this[Mt].size>0,"Sampler correlated object is undefined"),this[Mt]}get[xs](){return console.assert(this[$e]!=null,"Sampler source is undefined"),this[$e]}constructor(e,t,n){(n=n!=null?n:{}).minFilter==null&&(n.minFilter=t?t.minFilter:tn.LinearMipmapLinear),n.magFilter==null&&(n.magFilter=t?t.magFilter:tn.Linear),n.wrapS==null&&(n.wrapS=t?t.wrapS:pr.Repeat),n.wrapT==null&&(n.wrapT=t?t.wrapT:pr.Repeat),super(e,n,new Set(t?[t]:[]))}get name(){return this[$e].name||""}get minFilter(){return this[xs].minFilter}get magFilter(){return this[xs].magFilter}get wrapS(){return this[xs].wrapS}get wrapT(){return this[xs].wrapT}setMinFilter(e){this[Ga]("minFilter",e)}setMagFilter(e){this[Ga]("magFilter",e)}setWrapS(e){this[Ga]("wrapS",e)}setWrapT(e){this[Ga]("wrapT",e)}[Ga](e,t){const n=this[xs];if(n!=null){if(((i,s)=>{switch(i){case"minFilter":return KT(s);case"magFilter":return QT(s);case"wrapS":case"wrapT":return eE(s);default:throw new Error(`Cannot configure property "${i}" on Sampler`)}})(e,t)){n[e]=t;for(const i of this[wy])i[e]=t,i.needsUpdate=!0}this[mn]()}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=Symbol("image"),My=Symbol("sampler");class Sy extends Va{constructor(e,t,n=null,i=null,s=null){super(e,n||{},new Set(t?[t]:[])),this[My]=new tE(e,t,i),this[_y]=new ZT(e,t,s)}get name(){return this[$e].name||""}get sampler(){return this[My]}get source(){return this[_y]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ty;const Yl=Symbol("texture"),Rd=Symbol("materials"),Ey=Symbol("usage");var nn;(function(r){r[r.Base=0]="Base",r[r.MetallicRoughness=1]="MetallicRoughness",r[r.Normal=2]="Normal",r[r.Occlusion=3]="Occlusion",r[r.Emissive=4]="Emissive"})(nn||(nn={}));class Wa{constructor(e,t,n,i,s,a){if(this[Ty]=null,a){const o=s.textures?s.textures[a.index]:null,l=o&&s.samplers?s.samplers[o.sampler]:null,c=o&&s.images?s.images[o.source]:null;this[Yl]=new Sy(e,n,o,l,c)}this.onUpdate=e,this[Rd]=i,this[Ey]=t}get texture(){return this[Yl]}setTexture(e){const t=e!=null?e.source[Xl]:null;let n=3001;if(this[Yl]=e,this[Rd])for(const i of this[Rd]){switch(this[Ey]){case nn.Base:i.map=t;break;case nn.MetallicRoughness:n=3e3,i.metalnessMap=t,i.roughnessMap=t;break;case nn.Normal:n=3e3,i.normalMap=t;break;case nn.Occlusion:n=3e3,i.aoMap=t;break;case nn.Emissive:i.emissiveMap=t}i.needsUpdate=!0}t&&(t.encoding=n),this.onUpdate()}}Ty=Yl;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=Symbol("threeMaterials"),Ay=Symbol("baseColorTexture"),Ly=Symbol("metallicRoughnessTexture");class nE extends Va{constructor(e,t,n,i){super(e,n,i),n.baseColorFactor==null&&(n.baseColorFactor=[1,1,1,1]),n.roughnessFactor==null&&(n.roughnessFactor=1),n.metallicFactor==null&&(n.metallicFactor=1);const{baseColorTexture:s,metallicRoughnessTexture:a}=n,{map:o,metalnessMap:l}=i.values().next().value;this[Ay]=new Wa(e,nn.Base,o,i,t,s||null),this[Ly]=new Wa(e,nn.MetallicRoughness,l,i,t,a||null)}get[$l](){return this[Mt]}get baseColorFactor(){return this[$e].baseColorFactor}get metallicFactor(){return this[$e].metallicFactor}get roughnessFactor(){return this[$e].roughnessFactor}get baseColorTexture(){return this[Ay]}get metallicRoughnessTexture(){return this[Ly]}setBaseColorFactor(e){for(const t of this[$l])t.color.fromArray(e),t.opacity=e[3];this[$e].baseColorFactor=e,this[mn]()}setMetallicFactor(e){for(const t of this[$l])t.metalness=e;this[$e].metallicFactor=e,this[mn]()}setRoughnessFactor(e){for(const t of this[$l])t.roughness=e;this[$e].roughnessFactor=e,this[mn]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=Symbol("pbrMetallicRoughness"),Cy=Symbol("normalTexture"),Py=Symbol("occlusionTexture"),Iy=Symbol("emissiveTexture"),iE=Symbol("backingThreeMaterial"),Cd=Symbol("applyAlphaCutoff"),fr=Symbol("lazyLoadGLTFInfo"),Pd=Symbol("initialize"),Id=Symbol("getLoadedMaterial"),kt=Symbol("ensureMaterialIsLoaded");class Dy extends Va{constructor(e,t,n,i,s){super(e,n,i),s==null?this[Pd](t):this[fr]=s}get[iE](){return this[Mt].values().next().value}[Pd](e){const t=this[mn],n=this[$e],i=this[Mt];n.extensions&&n.extensions.KHR_materials_pbrSpecularGlossiness&&console.warn(`Material ${n.name} uses a deprecated extension
          "KHR_materials_pbrSpecularGlossiness", please use
          "pbrMetallicRoughness" instead. Specular Glossiness materials are
          currently supported for rendering, but not for our scene-graph API,
          nor for auto-generation of USDZ for Quick Look.`),n.pbrMetallicRoughness==null&&(n.pbrMetallicRoughness={}),this[Ry]=new nE(t,e,n.pbrMetallicRoughness,i),n.emissiveFactor==null&&(n.emissiveFactor=[0,0,0]),n.doubleSided==null&&(n.doubleSided=!1),n.alphaMode==null&&(n.alphaMode="OPAQUE"),n.alphaCutoff==null&&(n.alphaCutoff=.5);const{normalTexture:s,occlusionTexture:a,emissiveTexture:o}=n,{normalMap:l,aoMap:c,emissiveMap:h}=i.values().next().value;this[Cy]=new Wa(t,nn.Normal,l,i,e,s||null),this[Py]=new Wa(t,nn.Occlusion,c,i,e,a||null),this[Iy]=new Wa(t,nn.Emissive,h,i,e,o||null)}async[Id](){if(this[fr]!=null){const{set:e,material:t}=await this[fr].doLazyLoad();return this[Mt]=e,this[Pd](this[fr].gltf),this[fr]=void 0,this.ensureLoaded=async()=>{},t}return this[Mt].values().next().value}[kt](){if(this[fr]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[Id]()}get isLoaded(){return this[fr]==null}get name(){return this[$e].name||""}get pbrMetallicRoughness(){return this[kt](),this[Ry]}get normalTexture(){return this[kt](),this[Cy]}get occlusionTexture(){return this[kt](),this[Py]}get emissiveTexture(){return this[kt](),this[Iy]}get emissiveFactor(){return this[kt](),this[$e].emissiveFactor}setEmissiveFactor(e){this[kt]();for(const t of this[Mt])t.emissive.fromArray(e);this[$e].emissiveFactor=e,this[mn]()}[Cd](){this[kt]();const e=this[$e];for(const t of this[Mt])t.alphaTest=e.alphaCutoff,t.needsUpdate=!0}setAlphaCutoff(e){this[kt](),this[$e].alphaCutoff=e,this[Cd](),this[mn]()}getAlphaCutoff(){return this[kt](),this[$e].alphaCutoff}setDoubleSided(e){this[kt]();for(const t of this[Mt])t.side=e?2:0,t.needsUpdate=!0;this[$e].doubleSided=e,this[mn]()}getDoubleSided(){return this[kt](),this[$e].doubleSided}setAlphaMode(e){this[kt]();const t=(n,i)=>{n.transparent=i,n.depthWrite=!i};this[$e].alphaMode=e;for(const n of this[Mt])t(n,e!=="OPAQUE"),this[Cd](),n.needsUpdate=!0;this[mn]()}getAlphaMode(){return this[kt](),this[$e].alphaMode}}var Fy,Oy;const bs=Symbol("materials"),mr=Symbol("variantInfo"),Ny=Symbol("mesh"),Uy=Symbol("children"),ky=Symbol("initialMaterialIdx"),Dd=Symbol("activeMaterialIdx");class zy{constructor(e){this.name="",this[Fy]=new Array,this.name=e}}Fy=Uy;class By extends zy{constructor(e,t,n){super(e.name),this[Oy]=new Map,this[Ny]=e;const{gltf:i,threeGLTF:s,threeObjectMap:a}=n,o=a.get(e.material);o.materials!=null?this[ky]=this[Dd]=o.materials:console.error(`Primitive (${e.name}) missing initial material reference.`);const l=a.get(e).meshes,c=(i.meshes||[])[l].primitives||[];for(const h of c){if(h.material!=null)this[bs].set(h.material,t[h.material]);else{const u=t.findIndex(d=>d.name==="Default");u>=0?this[bs].set(u,t[u]):console.warn("Primitive has no material!")}if(h.extensions&&h.extensions.KHR_materials_variants){const u=h.extensions.KHR_materials_variants,d=s.parser.json.extensions.KHR_materials_variants.variants;this[mr]=new Map;for(const p of u.mappings){this[bs].set(p.material,t[p.material]);for(const f of p.variants){const{name:m}=d[f];this[mr].set(m,{material:t[p.material],index:p.material})}}}}}get mesh(){return this[Ny]}async setActiveMaterial(e){const t=this[bs].get(e);return t!=null&&(this.mesh.material=await t[Id](),this[Dd]=e),this.mesh.material}getActiveMaterial(){return this[bs].get(this[Dd])}async enableVariant(e){if(e==null)return this.setActiveMaterial(this[ky]);if(this[mr]!=null){const t=this[mr].get(e);if(t!=null)return this.setActiveMaterial(t.index)}return null}async instantiateVariants(){if(this[mr]!=null)for(const e of this[mr].keys()){if(this.mesh.userData.variantMaterials.get(e).material!=null)continue;const t=await this.enableVariant(e);t!=null&&(this.mesh.userData.variantMaterials.get(e).material=t)}}get variantInfo(){return this[mr]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hy,Vy,Gy,Wy;Oy=bs;const ja=Symbol("materials"),Fd=Symbol("hierarchy"),jy=Symbol("roots"),Jl=Symbol("primitives"),qy=Symbol("prepareVariantsForExport"),Xy=Symbol("switchVariant"),Yy=Symbol("threeScene"),$y=Symbol("materialsFromPoint"),Jy=Symbol("materialFromPoint");class rE{constructor(e,t,n,i){this.gltf=e,this.gltfElementMap=t,this.mapKey=n,this.doLazyLoad=i}}class sE{constructor(e,t=()=>{}){this[Hy]=new Array,this[Vy]=new Array,this[Gy]=new Array,this[Wy]=new Array;const{gltf:n,threeGLTF:i,gltfElementMap:s}=e;this[Yy]=i.scene;for(const[l,c]of n.materials.entries()){const h=s.get(c);if(h!=null)this[ja].push(new Dy(t,n,c,h));else{const u=(n.materials||[])[l],d=l,p=async()=>{const f=await i.parser.getDependency("material",d),m=new Set;return s.set(u,m),m.add(f),{set:m,material:f}};this[ja].push(new Dy(t,n,u,h,new rE(n,s,u,p)))}}const a=new Map,o=new Array;for(const l of i.scene.children)o.push(l);for(;o.length>0;){const l=o.pop();let c=null;l instanceof Me?(c=new By(l,this.materials,e),this[Jl].push(c)):c=new zy(l.name);const h=a.get(l);h!=null?h[Uy].push(c):this[jy].push(c),this[Fd].push(c);for(const u of l.children)o.push(u),a.set(l,c)}}get materials(){return this[ja]}getMaterialByName(e){const t=this[ja].filter(n=>n.name===e);return t.length>0?t[0]:null}[(Hy=ja,Vy=Fd,Gy=jy,Wy=Jl,$y)](e){return e.intersectObject(this[Yy],!0).map(t=>{const n=this[Fd].find(i=>i instanceof By&&i.mesh===t.object);return n!=null?n.getActiveMaterial():null})}[Jy](e){const t=this[$y](e);return t.length>0?t[0]:null}async[Xy](e){const t=new Array;for(const n of this[Jl])t.push(n.enableVariant(e));await Promise.all(t)}async[qy](){const e=new Array;for(const t of this[Jl])e.push(t.instantiateVariants());await Promise.all(e)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Od=function(r,e,t,n){for(var i,s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};const qa=Symbol("currentGLTF"),ws=Symbol("model"),Zl=Symbol("variants"),Nd=Symbol("getOnUpdateMethod"),Zy=Symbol("textureLoader"),Ud=Symbol("originalGltfJson");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kd=function(r,e,t,n){for(var i,s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};const aE=Math.PI/32,oE={basis:[gl(pt(aE,"rad"))],keywords:{auto:[null]}},_s=Symbol("autoRotateStartTime"),zd=Symbol("radiansPerSecond"),Ky=Symbol("syncRotationRate"),Bd=Symbol("onCameraChange"),lE=(r=>{var e,t,n;class i extends r{constructor(){super(...arguments),this[e]=new Map,this[t]=a=>{a.forEach(o=>{o instanceof MutationRecord&&o.type!=="childList"||(o.addedNodes.forEach(l=>{this[Vu](l)}),o.removedNodes.forEach(l=>{this[J0](l)}),this[Pt]())})},this[n]=new MutationObserver(this[Hu])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[Vu](this.children[o]);const{ShadyDOM:a}=self;a==null?this[_a].observe(this,{childList:!0}):this[_a]=a.observeChildren(this,this[Hu])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:a}=self;a==null?this[_a].disconnect():a.unobserveChildren(this[_a])}[(e=us,t=Hu,n=_a,Pn)](a,o){super[Pn](a,o);const l=this[de],{annotationRenderer:c}=l,h=l.getCamera();l.shouldRender()&&(l.updateHotspots(h.position),c.domElement.style.display="",c.render(l,h))}updateHotspot(a){const o=this[us].get(a.name);o!=null&&(o.updatePosition(a.position),o.updateNormal(a.normal),this[Pt]())}positionAndNormalFromPoint(a,o){const l=this[de],c=l.getNDC(a,o),h=l.positionAndNormalFromPoint(c);if(h==null)return null;Gu.copy(l.target.matrixWorld).invert();const u=Pl(h.position.applyMatrix4(Gu));return Z0.getNormalMatrix(Gu),{position:u,normal:Pl(h.normal.applyNormalMatrix(Z0))}}[Vu](a){if(!(a instanceof HTMLElement&&a.slot.indexOf("hotspot")===0))return;let o=this[us].get(a.slot);o!=null?o.increment():(o=new d0({name:a.slot,position:a.dataset.position,normal:a.dataset.normal}),this[us].set(a.slot,o),this[de].addHotspot(o)),this[de].queueRender()}[J0](a){if(!(a instanceof HTMLElement))return;const o=this[us].get(a.slot);o&&(o.decrement()&&(this[de].removeHotspot(o),this[us].delete(a.slot)),this[de].queueRender())}}return i})((r=>{var e,t,n,i,s;class a extends r{constructor(){super(...arguments),this[e]=void 0,this[t]=null,this[n]=[],this[i]=new cl,this[s]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[ws]}get availableVariants(){return this[Zl]}get originalGltfJson(){return this[Ud]}[(e=ws,t=qa,n=Zl,i=Zy,s=Ud,Nd)](){return()=>{this[Pt]()}}async createTexture(l,c="image/png"){const h=this[qa],u=await new Promise(d=>this[Zy].load(l,d));return h&&u?(u.encoding=3001,u.wrapS=1e3,u.wrapT=1e3,u.flipY=!1,c==="image/jpeg"&&(u.format=1022),new Sy(this[Nd](),u)):null}async updated(l){if(super.updated(l),l.has("variantName")){const c=this[qa],{variantName:h}=this;c!=null&&(await this[ws][Xy](h),this[Pt](),this.dispatchEvent(new CustomEvent("variant-applied")))}if(l.has("orientation")||l.has("scale")){const{modelContainer:c}=this[de],h=rr(this.orientation)[0].terms,u=An(h[0]).number,d=An(h[1]).number,p=An(h[2]).number;c.quaternion.setFromEuler(new vi(d,p,u,"YXZ"));const f=rr(this.scale)[0].terms;c.scale.set(f[0].number,f[1].number,f[2].number),this[de].updateBoundingBox(),this[de].updateShadow(),this[Be].arRenderer.onUpdateScene(),this[Pt]()}}[In](){super[In](),this[Zl]=[];const{currentGLTF:l}=this[de];if(l!=null){const{correlatedSceneGraph:c}=l;c!=null&&l!==this[qa]&&(this[ws]=new sE(c,this[Nd]()),this[Ud]=JSON.parse(JSON.stringify(c.gltf))),"variants"in l.userData&&(this[Zl]=l.userData.variants.slice(),this.requestUpdate("variantName"))}this[qa]=l,this.dispatchEvent(new CustomEvent("scene-graph-ready"))}async exportScene(l){const c=this[de];return new Promise(async h=>{const u={binary:!0,onlyVisible:!0,maxTextureSize:1/0,forcePowerOfTwoTextures:!1,includeCustomExtensions:!1,embedImages:!0};Object.assign(u,l),u.animations=c.animations,u.truncateDrawRange=!0;const d=c.shadow;let p=!1;d!=null&&(p=d.visible,d.visible=!1),await this[ws][qy](),new Td().register(f=>new YT(f)).parse(c.modelContainer.children[0],f=>h(new Blob([u.binary?f:JSON.stringify(f)],{type:u.binary?"application/octet-stream":"application/json"})),u),d!=null&&(d.visible=p)})}materialFromPoint(l,c){const h=this[de],u=h.getNDC(l,c);return h.raycaster.setFromCamera(u,h.getCamera()),this[ws][Jy](h.raycaster)}}return Od([Te({type:String,attribute:"variant-name"})],a.prototype,"variantName",void 0),Od([Te({type:String,attribute:"orientation"})],a.prototype,"orientation",void 0),Od([Te({type:String,attribute:"scale"})],a.prototype,"scale",void 0),a})((r=>{var e,t,n;class i extends r{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=3e3,this.rotationPerSecond="auto",this[e]=performance.now(),this[t]=0,this[n]=a=>{this.autoRotate&&a.detail.source==="user-interaction"&&(this[_s]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Bd]),this[_s]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Bd]),this[_s]=performance.now()}updated(a){super.updated(a),a.has("autoRotate")&&(this[_s]=performance.now())}[(e=_s,t=zd,Ky)](a){this[zd]=a[0]}[Pn](a,o){if(super[Pn](a,o),!this.autoRotate||!this[hs]()||this[Be].isPresenting)return;const l=Math.min(o,a-this[_s]-this.autoRotateDelay);l>0&&(this[de].yaw=this.turntableRotation+this[zd]*l*.001)}get turntableRotation(){return this[de].yaw}resetTurntableRotation(a=0){this[de].yaw=a}}return n=Bd,kd([Te({type:Boolean,attribute:"auto-rotate"})],i.prototype,"autoRotate",void 0),kd([Te({type:Number,attribute:"auto-rotate-delay"})],i.prototype,"autoRotateDelay",void 0),kd([Ii({intrinsics:oE,updateHandler:Ky}),Te({type:String,attribute:"rotation-per-second"})],i.prototype,"rotationPerSecond",void 0),i})((r=>{var e,t,n;class i extends r{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=0,this.shadowSoftness=1,this.exposure=1,this[e]=null,this[t]=null,this[n]=a=>{a.element===this&&this[yl]()}}connectedCallback(){super.connectedCallback(),this[Be].loader.addEventListener("preload",this[Pu])}disconnectedCallback(){super.disconnectedCallback(),this[Be].loader.removeEventListener("preload",this[Pu])}updated(a){super.updated(a),a.has("shadowIntensity")&&(this[de].setShadowIntensity(.1*this.shadowIntensity),this[Pt]()),a.has("shadowSoftness")&&(this[de].setShadowSoftness(this.shadowSoftness),this[Pt]()),a.has("exposure")&&(this[de].exposure=this.exposure,this[Pt]()),(a.has("environmentImage")||a.has("skyboxImage"))&&this[or]()&&this[yl]()}[(e=fa,t=ma,n=Pu,In)](){super[In](),this[fa]!=null&&this[vl](this[fa])}async[yl](){const{skyboxImage:a,environmentImage:o}=this;this[ma]!=null&&(this[ma](),this[ma]=null);const{textureUtils:l}=this[Be];if(l!=null)try{const{environmentMap:c,skybox:h}=await new Promise(async(u,d)=>{const p=l.generateEnvironmentMapAndSkybox(r0(a),o,{progressTracker:this[cs]});this[ma]=()=>d(p),u(await p)});this[de].background=h!=null?h.name===c.name?c:h:null,this[vl](c),this[de].dispatchEvent({type:"envmap-update"})}catch(c){if(c instanceof Error)throw this[vl](null),c}}[vl](a){this[de].environment!==a&&(this[fa]=a,this[de].environment=this[fa],this.dispatchEvent(new CustomEvent("environment-change")),this[Pt]())}}return pa([Te({type:String,attribute:"environment-image"})],i.prototype,"environmentImage",void 0),pa([Te({type:String,attribute:"skybox-image"})],i.prototype,"skyboxImage",void 0),pa([Te({type:Number,attribute:"shadow-intensity"})],i.prototype,"shadowIntensity",void 0),pa([Te({type:Number,attribute:"shadow-softness"})],i.prototype,"shadowSoftness",void 0),pa([Te({type:Number})],i.prototype,"exposure",void 0),i})((r=>{var e,t,n,i,s,a,o,l,c,h,u,d,p,f,m,v,g;class b extends r{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit="0deg 75deg 105%",this.cameraTarget="auto auto auto",this.fieldOfView="auto",this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=3e3,this.interactionPromptStyle=ud,this.interactionPrompt=La,this.interactionPolicy=vT,this.orbitSensitivity=1,this.touchAction=yT,this.disableZoom=!1,this.interpolationDecay=50,this.bounds="legacy",this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[t]=this.shadowRoot.querySelector(".interaction-prompt > .animated-container"),this[n]=1/0,this[i]=0,this[s]=1/0,this[a]=!1,this[o]=!1,this[l]=new hT(this[de].camera,this[Zn]),this[c]=0,this[h]=new pl,this[u]=!1,this[d]=!1,this[p]=!1,this[f]=()=>{const y=this[Zn];isFinite(this[Da])||(this[Da]=performance.now());const w=this[ku];y.getAttribute("aria-label")!==w&&y.setAttribute("aria-label",w),this.interactionPrompt!==jv||this[Pa]||(this[ti]=!0)},this[m]=()=>{this.interactionPrompt===jv&&(this[ti]=!1,this[Ra].classList.remove("visible"),this[ur]=1/0,this[Da]=1/0)},this[v]=({source:y})=>{this[Jv](),this[Pt](),y===hd&&(this[Pa]=!0,this[Vl]()),this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:y}}))},this[g]=y=>{y.type==="pointer-change-start"?this[ba].classList.add("pointer-tumbling"):this[ba].classList.remove("pointer-tumbling")}}getCameraOrbit(){const{theta:y,phi:w,radius:M}=this[Gl];return{theta:y,phi:w,radius:M,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return Pl(this[Be].isPresenting?this[Be].arRenderer.target:this[de].getTarget())}getFieldOfView(){return this[et].getFieldOfView()}getMinimumFieldOfView(){return this[et].options.minimumFieldOfView}getMaximumFieldOfView(){return this[et].options.maximumFieldOfView}jumpCameraToGoal(){this[Oa]=!0,this.requestUpdate(Oa,!1)}resetInteractionPrompt(){this[Ia]=0,this[ur]=1/0,this[Pa]=!1,this[ti]=this.interactionPrompt===La&&this.cameraControls}connectedCallback(){super.connectedCallback(),this[et].addEventListener("change",this[gd]),this[et].addEventListener("pointer-change-start",this[Ca]),this[et].addEventListener("pointer-change-end",this[Ca])}disconnectedCallback(){super.disconnectedCallback(),this[et].removeEventListener("change",this[gd]),this[et].removeEventListener("pointer-change-start",this[Ca]),this[et].removeEventListener("pointer-change-end",this[Ca])}updated(y){super.updated(y);const w=this[et],M=this[Zn];if(y.has("cameraControls")&&(this.cameraControls?(w.enableInteraction(),this.interactionPrompt===La&&(this[ti]=!0),M.addEventListener("focus",this[md]),M.addEventListener("blur",this[fd])):(M.removeEventListener("focus",this[md]),M.removeEventListener("blur",this[fd]),w.disableInteraction(),this[Vl]())),y.has("disableZoom")&&(w.disableZoom=this.disableZoom),y.has("bounds")&&(this[de].tightBounds=this.bounds==="tight"),(y.has("interactionPrompt")||y.has("cameraControls")||y.has("src"))&&(this.interactionPrompt===La&&this.cameraControls&&!this[Pa]?this[ti]=!0:this[Vl]()),y.has("interactionPromptStyle")&&this[Ra].classList.toggle("wiggle",this.interactionPromptStyle===ud),y.has("interactionPolicy")){const T=this.interactionPolicy;w.applyOptions({interactionPolicy:T})}if(y.has("touchAction")){const T=this.touchAction;w.applyOptions({touchAction:T}),w.updateTouchActionStyle()}y.has("orbitSensitivity")&&(w.sensitivity=this.orbitSensitivity),y.has("interpolationDecay")&&(w.setDamperDecayTime(this.interpolationDecay),this[de].setTargetDamperDecayTime(this.interpolationDecay)),this[Oa]===!0&&Promise.resolve().then(()=>{w.jumpToGoal(),this[de].jumpToGoal(),this[Oa]=!1})}async updateFraming(){const y=this[de],w=y.framedFieldOfView;await this.requestUpdate("cameraTarget"),y.updateFraming(this.bounds==="tight"?y.getTarget():void 0),y.frameModel();const M=y.framedFieldOfView,T=this[et].getFieldOfView()/w;this[Fa]=M*T,this[Na]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),await this.requestUpdate("cameraOrbit")}[(e=Ra,t=pd,n=Da,i=Ia,s=ur,a=Pa,o=ti,l=et,c=Fa,h=Gl,u=Oa,d=vd,p=Na,Qv)](y){this[et].setFieldOfView(180*y[0]/Math.PI)}[Kv](y){if(this[Na]){const{theta:w,phi:M}=this.getCameraOrbit();y[0]=w,y[1]=M,this[Na]=!1}this[et].setOrbit(y[0],y[1],y[2])}[ty](y){this[et].applyOptions({minimumAzimuthalAngle:y[0],minimumPolarAngle:y[1],minimumRadius:y[2]}),this.jumpCameraToGoal()}[ny](y){this[et].applyOptions({maximumAzimuthalAngle:y[0],maximumPolarAngle:y[1],maximumRadius:y[2]}),this[Zv](y[2]),this.jumpCameraToGoal()}[iy](y){this[et].applyOptions({minimumFieldOfView:180*y[0]/Math.PI}),this.jumpCameraToGoal()}[ry](y){this[et].applyOptions({maximumFieldOfView:180*y[0]/Math.PI}),this.jumpCameraToGoal()}[ey](y){const[w,M,T]=y;this[de].setTarget(w,M,T),this[Be].arRenderer.updateTarget()}[Pn](y,w){if(super[Pn](y,w),this[Be].isPresenting||!this[hs]())return;const M=performance.now();if(this[ti]){const T=this.interactionPrompt===La?this[xa]:this[Da];this.loaded&&M>T+this.interactionPromptThreshold&&(this[Zn].setAttribute("aria-label","Use mouse, touch or arrow keys to control the camera!"),this[ti]=!1,this[ur]=M,this[Ra].classList.add("visible"))}if(isFinite(this[ur])&&this.interactionPromptStyle===ud){const T=this[de],P=(M-this[ur])/5e3%1,D=dT(P),I=pT(P);if(this[pd].style.opacity=`${I}`,D!==this[Ia]){const N=D*T.width*.05,X=(D-this[Ia])*Math.PI/16;this[pd].style.transform=`translateX(${N}px)`,this[et].adjustOrbit(X,0,0),this[Ia]=D}}this[et].update(y,w),this[de].updateTarget(w)}[Vl](){this[ti]=!1,this[Ra].classList.remove("visible"),this[ur]=1/0}[Zv](y){const{idealCameraDistance:w}=this[de],M=2*Math.max(w,y);this[et].updateNearFar(0,M)}[Jv](){const{theta:y,phi:w}=this[Gl],{theta:M,phi:T}=this[et].getCameraSpherical(this[Gl]),P=this.getRootNode();if(P!=null&&P.activeElement===this){const D=(4+Math.floor((y%$v+Yv)/dd))%4,I=(4+Math.floor((M%$v+Yv)/dd))%4,N=Math.floor(w/Xv),X=Math.floor(T/Xv);if(I!==D||X!==N){const G=`View from stage ${gT[X]}${mT[I]}`;this[Zn].setAttribute("aria-label",G)}}}[wa](y){const w=this[et],M=this[de].framedFieldOfView;super[wa](y);const T=this[de].framedFieldOfView,P=w.getFieldOfView()/M;this[Fa]=T*P,w.updateAspect(this[de].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.jumpCameraToGoal()}[In](){super[In]();const{framedFieldOfView:y}=this[de];this[Fa]=y,this[vd]?this[Na]=!0:this[vd]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}}return f=md,m=fd,v=gd,g=Ca,yt([Te({type:Boolean,attribute:"camera-controls"})],b.prototype,"cameraControls",void 0),yt([Ii({intrinsics:qv,observeEffects:!0,updateHandler:Kv}),Te({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],b.prototype,"cameraOrbit",void 0),yt([Ii({intrinsics:ST,observeEffects:!0,updateHandler:ey}),Te({type:String,attribute:"camera-target",hasChanged:()=>!0})],b.prototype,"cameraTarget",void 0),yt([Ii({intrinsics:xT,observeEffects:!0,updateHandler:Qv}),Te({type:String,attribute:"field-of-view",hasChanged:()=>!0})],b.prototype,"fieldOfView",void 0),yt([Ii({intrinsics:_T,updateHandler:ty}),Te({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],b.prototype,"minCameraOrbit",void 0),yt([Ii({intrinsics:MT,updateHandler:ny}),Te({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],b.prototype,"maxCameraOrbit",void 0),yt([Ii({intrinsics:bT,updateHandler:iy}),Te({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],b.prototype,"minFieldOfView",void 0),yt([Ii({intrinsics:wT,updateHandler:ry}),Te({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],b.prototype,"maxFieldOfView",void 0),yt([Te({type:Number,attribute:"interaction-prompt-threshold"})],b.prototype,"interactionPromptThreshold",void 0),yt([Te({type:String,attribute:"interaction-prompt-style"})],b.prototype,"interactionPromptStyle",void 0),yt([Te({type:String,attribute:"interaction-prompt"})],b.prototype,"interactionPrompt",void 0),yt([Te({type:String,attribute:"interaction-policy"})],b.prototype,"interactionPolicy",void 0),yt([Te({type:Number,attribute:"orbit-sensitivity"})],b.prototype,"orbitSensitivity",void 0),yt([Te({type:String,attribute:"touch-action"})],b.prototype,"touchAction",void 0),yt([Te({type:Boolean,attribute:"disable-zoom"})],b.prototype,"disableZoom",void 0),yt([Te({type:Number,attribute:"interpolation-decay"})],b.prototype,"interpolationDecay",void 0),yt([Te({type:String,attribute:"bounds"})],b.prototype,"bounds",void 0),b})((r=>{var e,t,n,i,s,a,o,l,c,h;class u extends r{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes="webxr scene-viewer",this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[t]=this.shadowRoot.querySelector(".ar-button"),this[n]=document.createElement("a"),this[i]=new Set,this[s]=Qu,this[a]=!1,this[o]=p=>{p.preventDefault(),this.activateAR()},this[l]=({status:p})=>{p!==bl&&this[Be].arRenderer.presentedScene!==this[de]||(this.setAttribute("ar-status",p),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:p}})),p===bl?this.removeAttribute("ar-tracking"):p===w0&&this.setAttribute("ar-tracking",_0))},this[c]=({status:p})=>{this.setAttribute("ar-tracking",p),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:p}}))},this[h]=p=>{p.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[Pi]!==Qu}connectedCallback(){super.connectedCallback(),this[Be].arRenderer.addEventListener("status",this[td]),this.setAttribute("ar-status",bl),this[Be].arRenderer.addEventListener("tracking",this[nd]),this[fs].addEventListener("message",this[id])}disconnectedCallback(){super.disconnectedCallback(),this[Be].arRenderer.removeEventListener("status",this[td]),this[Be].arRenderer.removeEventListener("tracking",this[nd]),this[fs].removeEventListener("message",this[id])}async update(p){super.update(p),p.has("arScale")&&(this[de].canScale=this.arScale!=="fixed"),p.has("arPlacement")&&(this[de].updateShadow(),this[Pt]()),(p.has("ar")||p.has("arModes")||p.has("iosSrc"))&&(p.has("arModes")&&(this[ed]=JS(this.arModes)),this[Ea]())}async activateAR(){switch(this[Pi]){case Ku:this[_v]();break;case xv:await this[bv]();break;case yv:this[wv]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities")}}async[(e=ZS,t=ei,n=fs,i=ed,s=Pi,a=Ul,o=kl,l=td,c=nd,h=id,Ea)](){if(this[Pi]=Qu,this.ar){if(this.src!=null)for(const p of this[ed]){if(p==="webxr"&&Of&&!mv&&await this[Be].arRenderer.supportsPresentation()){this[Pi]=xv;break}if(p==="scene-viewer"&&Z1&&!gv){this[Pi]=yv;break}if(p==="quick-look"&&Nf){this[Pi]=Ku;break}}!this.canActivateAR&&this.iosSrc!=null&&Nf&&(this[Pi]=Ku)}if(this.canActivateAR)this[ei].classList.add("enabled"),this[ei].addEventListener("click",this[kl]);else if(this[ei].classList.contains("enabled")){this[ei].removeEventListener("click",this[kl]),this[ei].classList.remove("enabled");const p=wS;this.setAttribute("ar-status",p),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:p}}))}}async[bv](){console.log("Attempting to present in AR with WebXR..."),await this[rd]();try{this[ei].removeEventListener("click",this[kl]);const{arRenderer:p}=this[Be];p.placeOnWall=this.arPlacement==="wall",await p.present(this[de],this.xrEnvironment)}catch(p){console.warn("Error while trying to present in AR with WebXR"),console.error(p),await this[Be].arRenderer.stopPresenting(),mv=!0,console.warn("Falling back to next ar-mode"),await this[Ea](),this.activateAR()}finally{this[Ea]()}}async[rd](){this.loaded||(this[Ul]=!0,this[Cn](),await((p,f,m=null)=>new Promise(v=>{p.addEventListener(f,function g(b){m&&!m(b)||(v(b),p.removeEventListener(f,g))})}))(this,"load"),this[Ul]=!1)}[or](){return super[or]()||this[Ul]}[wv](){const p=self.location.toString(),f=new URL(p),m=new URL(this.src,p),v=new URLSearchParams(m.search);if(f.hash="#model-viewer-no-ar-fallback",v.set("mode","ar_preferred"),v.has("disable_occlusion")||v.set("disable_occlusion","true"),this.arScale==="fixed"&&v.set("resizable","false"),this.arPlacement==="wall"&&v.set("enable_vertical_placement","true"),v.has("sound")){const b=new URL(v.get("sound"),p);v.set("sound",b.toString())}if(v.has("link")){const b=new URL(v.get("link"),p);v.set("link",b.toString())}const g=`intent://arvr.google.com/scene-viewer/1.0?${v.toString()+"&file="+encodeURIComponent(m.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(f.toString())};end;`;self.addEventListener("hashchange",()=>{self.location.hash==="#model-viewer-no-ar-fallback"&&(gv=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[Ea]())},{once:!0}),this[fs].setAttribute("href",g),console.log("Attempting to present in AR with Scene Viewer..."),this[fs].click()}async[_v](){const p=!this.iosSrc;this[ei].classList.remove("enabled");const f=p?await this.prepareUSDZ():this.iosSrc,m=new URL(f,self.location.toString());this.arScale==="fixed"&&(m.hash&&(m.hash+="&"),m.hash+="allowsContentScaling=0");const v=this[fs];v.setAttribute("rel","ar");const g=document.createElement("img");v.appendChild(g),v.setAttribute("href",m.toString()),p&&v.setAttribute("download","model.usdz"),console.log("Attempting to present in AR with Quick Look..."),v.click(),v.removeChild(g),p&&URL.revokeObjectURL(f),this[ei].classList.add("enabled")}async prepareUSDZ(){const p=this[cs].beginActivity();await this[rd]();const f=this[de],m=f.shadow;let v=!1;m!=null&&(v=m.visible,m.visible=!1),p(.2);const g=new XS,b=await g.parse(f.modelContainer),x=new Blob([b],{type:"model/vnd.usdz+zip"}),y=URL.createObjectURL(x);return p(1),m!=null&&(m.visible=v),y}}return ps([Te({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),ps([Te({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),ps([Te({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),ps([Te({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),ps([Te({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),ps([Te({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u})((r=>{var e,t,n,i,s,a,o,l,c,h,u,d,p,f;class m extends r{constructor(...g){super(...g),this.poster=null,this.reveal=yd,this.loading=TT,this.generateSchema=!1,this.seamlessPoster=!1,this[e]=!1,this[t]=!1,this[n]=0,this[i]=null,this[s]=this.shadowRoot.querySelector(".slot.poster"),this[a]=this.shadowRoot.querySelector("#default-poster"),this[o]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[l]=this.shadowRoot.querySelector("#default-progress-bar > .mask"),this[c]=this[ys].getAttribute("aria-label"),this[h]=((w,M)=>{let T=null;const P=(...D)=>{T==null&&(w(...D),T=self.setTimeout(()=>T=null,M))};return P.flush=()=>{T!=null&&(self.clearTimeout(T),T=null)},P})(w=>{const M=this[dr].parentNode;requestAnimationFrame(()=>{this[hy].style.opacity=""+.2*(1-w),this[dr].style.transform=`scaleX(${w})`,w===0&&(M.removeChild(this[dr]),M.appendChild(this[dr])),w===1?this[dr].classList.add("hide"):this[dr].classList.remove("hide")})},100),this[u]=()=>{this.reveal!==ly&&this.dismissPoster()},this[d]=w=>{if(this.reveal!==ly)switch(w.keyCode){case 32:case 13:this.dismissPoster()}},this[p]=w=>{const M=w.detail.totalProgress;this[za]=Math.max(M,this[za]),M===1&&(this[bd].flush(),!this[lr]()||this[ka]==null&&this.reveal!==yd||this[xd]()),this[bd](M),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:M}}))},this[f]=()=>{this[Ba]=!0;const w=this.getRootNode();w&&w.activeElement===this&&this[Zn].focus();const M=this[ys];M.setAttribute("aria-hidden","true"),M.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))};const b=self.ModelViewerElement||{},x=b.dracoDecoderLocation||"https://www.gstatic.com/draco/versioned/decoders/1.4.1/";Ct.setDRACODecoderLocation(x);const y=b.ktx2TranscoderLocation||"https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";Ct.setKTX2TranscoderLocation(y),b.meshoptDecoderLocation&&Ct.setMeshoptDecoderLocation(b.meshoptDecoderLocation)}static set dracoDecoderLocation(g){Ct.setDRACODecoderLocation(g)}static get dracoDecoderLocation(){return Ct.getDRACODecoderLocation()}static set ktx2TranscoderLocation(g){Ct.setKTX2TranscoderLocation(g)}static get ktx2TranscoderLocation(){return Ct.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(g){Ct.setMeshoptDecoderLocation(g)}static get meshoptDecoderLocation(){return Ct.getMeshoptDecoderLocation()}static mapURLs(g){Rn.singleton.loader[as].manager.setURLModifier(g)}dismissPoster(){this[lr]()?this[xd]():(this[ka]=AT,this[Cn]())}showPoster(){const g=this[ni],b=this[ys];b.removeAttribute("tabindex"),b.removeAttribute("aria-hidden"),g.classList.add("show");const x=this.modelIsVisible;this[jl]=!1,this[Ll](x),this[Ba]=!1}getDimensions(){return Pl(this[de].size)}connectedCallback(){super.connectedCallback(),this[ni].addEventListener("click",this[_d]),this[ni].addEventListener("keydown",this[Md]),this[cs].addEventListener("progress",this[Sd]),cy.registerInstance(this)}disconnectedCallback(){super.disconnectedCallback(),this[ni].removeEventListener("click",this[_d]),this[ni].removeEventListener("keydown",this[Md]),this[cs].removeEventListener("progress",this[Sd]),cy.unregisterInstance(this)}async updated(g){super.updated(g),g.has("poster")&&this.poster!=null&&(this[ys].style.backgroundImage=`url(${this.poster})`),g.has("alt")&&this[ys].setAttribute("aria-label",`${this[ku]}. ${this[uy]}`),(g.has("reveal")||g.has("loading"))&&this[Cn](),g.has("generateSchema")&&(this.generateSchema===!0?this[de].updateSchema(this.src):this[de].updateSchema(null)),g.has("seamlessPoster")&&(this.seamlessPoster===!0?this[ni].classList.add("quick"):this[ni].classList.remove("quick"))}[(e=jl,t=Ba,n=za,i=ka,s=ni,a=ys,o=dr,l=hy,c=uy,h=bd,u=_d,d=Md,p=Sd,or)](){return!!this.src&&(this[ka]!=null||this.loading===ET||this.reveal===yd&&this[ar])}[lr](){const{src:g}=this;return!!g&&super[lr]()&&this[za]===1}[(f=wd,xd)](){this[ka]=null;const g=this[ni];if(g.classList.contains("show")){const b=this.modelIsVisible;this[jl]=!0,this[Ll](b),requestAnimationFrame(()=>{g.classList.remove("show"),this.seamlessPoster===!0?this[wd]():g.addEventListener("transitionend",this[wd],{once:!0})})}else this[Ba]=!0}[Cl](){return super[Cl]()&&this[jl]}[hs](){return super[hs]()&&this[Ba]}async[Cn](){this[za]=0,this.generateSchema===!0&&this[de].updateSchema(this.src),this[de].currentGLTF!=null&&this.src!=null&&this[or]()||this.showPoster(),await super[Cn]()}}return Ua([Te({type:String})],m.prototype,"poster",void 0),Ua([Te({type:String})],m.prototype,"reveal",void 0),Ua([Te({type:String})],m.prototype,"loading",void 0),Ua([Te({type:Boolean,attribute:"generate-schema"})],m.prototype,"generateSchema",void 0),Ua([Te({type:Boolean,attribute:"seamless-poster"})],m.prototype,"seamlessPoster",void 0),m})((r=>{var e;class t extends r{constructor(){super(...arguments),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0}get availableAnimations(){return this.loaded?this[de].animationNames:[]}get duration(){return this[de].duration}get paused(){return this[Kn]}get currentTime(){return this[de].animationTime}set currentTime(i){this[de].animationTime=i,this[Be].threeRenderer.shadowMap.needsUpdate=!0,this[Pt]()}pause(){this[Kn]||(this[Kn]=!0,this[Be].threeRenderer.shadowMap.autoUpdate=!1,this.dispatchEvent(new CustomEvent("pause")))}play(){this[Kn]&&this.availableAnimations.length>0&&(this[Kn]=!1,this[Be].threeRenderer.shadowMap.autoUpdate=!0,this[de].hasActiveAnimation||this[Il](),this.dispatchEvent(new CustomEvent("play")))}[(e=Kn,In)](){super[In](),this[Kn]=!0,this.autoplay&&(this[Il](),this.play())}[Pn](i,s){super[Pn](i,s),this[Kn]||!this[hs]()&&!this[Be].isPresenting||(this[de].updateAnimation(s/1e3),this[Pt]())}updated(i){super.updated(i),i.has("autoplay")&&this.autoplay&&this.play(),i.has("animationName")&&this[Il]()}async[Cn](){return this[de].stopAnimation(),super[Cn]()}[Il](){this[de].playAnimation(this.animationName,this.animationCrossfadeDuration/1e3),this[Kn]&&(this[de].updateAnimation(0),this[Pt]())}}return Bu([Te({type:Boolean})],t.prototype,"autoplay",void 0),Bu([Te({type:String,attribute:"animation-name"})],t.prototype,"animationName",void 0),Bu([Te({type:Number,attribute:"animation-crossfade-duration"})],t.prototype,"animationCrossfadeDuration",void 0),t})((r=>{var e;const t=Symbol("endPolyfillCoordination");return e=t,class extends r{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[t]==null&&(this[t]=(n=>{if(n.shadowRoot==null||n.hasAttribute("data-js-focus-visible"))return()=>{};if(!self.applyFocusVisiblePolyfill){const i=()=>{self.applyFocusVisiblePolyfill(n.shadowRoot)};return self.addEventListener("focus-visible-polyfill-ready",i,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",i)}}return self.applyFocusVisiblePolyfill(n.shadowRoot),()=>{}})(this))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this[t]!=null&&(this[t](),this[t]=null)}}})(zu)))))))));customElements.define("model-viewer",lE);export{pE as a,dE as c,hE as d,uE as o,Jx as u};
