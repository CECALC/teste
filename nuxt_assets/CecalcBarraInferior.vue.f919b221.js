import{b9 as tt,ba as nt,bb as ot,bc as N,u as lt,bd as at,I as R,r as T,ab as Ee,a0 as ye,K as ie,D as xe,J as C,o as K,b as M,H as it,aw as O,be as we,A as st,bf as X,R as z,bg as ut,S as ce,bh as rt,bi as ct,c as b,V as de,a2 as dt,a3 as ft,bj as vt,bk as ht,bl as mt,bm as gt,bn as qe,bo as bt,F as _t,bp as pt,av as Pe,bq as yt,br as xt,e as w,M as W,T as wt,bs as qt,G as Re,bt as fe,B as Fe,bu as Ct,bv as kt,au as Qe,a8 as j,a9 as $,bw as U,ad as Me,bx as St,by as Tt,a4 as We,bz as $t,bA as Ve,_ as zt,k as F,l as I,aI as Q,n as se,m as ue,d as Ae,aH as Y,s as B,q as P,aK as Ce,aL as Ht,aM as Lt,v as le,t as A,bB as Bt,aE as Et,Z as Pt,bC as Rt,aD as Ft,aP as Qt}from"./entry.06486981.js";const Mt="@cecalc/testes",Wt="0.0.1",Vt=tt({nome:Mt,titulo:"Fábrica de Cálculos - Versões de Teste",descricao:"Sites de testes públicos da Fábrica de Cálculos.",versao:Wt,corFundo:"grey-9",corTexto:"white",documentos:{cnis:!1,carta:!1}}),At={},Ot=nt(Vt,ot,At);function Oe(){const e=lt();return e._appConfig||(e._appConfig=N(Ot)),e._appConfig}function Dt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),at.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Nt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function It({showing:e,avoidEmit:l,configureAnchorEl:o}){const{props:t,proxy:n,emit:u}=R(),a=T(null);let f=null;function c(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(i){n.hide(i)},toggle(i){n.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Ee(i,13)===!0&&s.toggle(i)},contextClick(i){n.hide(i),ye(i),ie(()=>{n.show(i),i.qAnchorHandled=!0})},prevent:ye,mobileTouch(i){if(s.mobileCleanup(i),c(i)!==!0)return;n.hide(i),a.value.classList.add("non-selectable");const d=i.target;xe(s,"anchor",[[d,"touchmove","mobileCleanup","passive"],[d,"touchend","mobileCleanup","passive"],[d,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,n.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&i!==void 0&&Dt()}}),o=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let d;i===!0?n.$q.platform.is.mobile===!0?d=[[a.value,"touchstart","mobileTouch","passive"]]:d=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:d=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],xe(s,"anchor",d)});function v(){it(s,"anchor")}function p(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function y(){if(t.target===!1||t.target===""||n.$el.parentNode===null)a.value=null;else if(t.target===!0)p(n.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,o()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return C(()=>t.contextMenu,i=>{a.value!==null&&(v(),o(i))}),C(()=>t.target,()=>{a.value!==null&&v(),y()}),C(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?v():o())}),K(()=>{y(),l!==!0&&t.modelValue===!0&&a.value===null&&u("update:modelValue",!1)}),M(()=>{f!==null&&clearTimeout(f),v()}),{anchorEl:a,canShow:c,anchorEvents:s}}function Kt(e,l){const o=T(null);let t;function n(f,c){const s=`${c!==void 0?"add":"remove"}EventListener`,v=c!==void 0?c:t;f!==window&&f[s]("scroll",v,O.passive),window[s]("scroll",v,O.passive),t=c}function u(){o.value!==null&&(n(o.value),o.value=null)}const a=C(()=>e.noParentEvent,()=>{o.value!==null&&(u(),l())});return M(a),{localScrollTarget:o,unconfigureScrollTarget:u,changeScrollEvent:n}}const{notPassiveCapture:G}=O,V=[];function J(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let o=we.length-1;for(;o>=0;){const t=we[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=V.length-1;t>=0;t--){const n=V[t];if((n.anchorEl.value===null||n.anchorEl.value.contains(l)===!1)&&(l===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(l)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function jt(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",J,G),document.addEventListener("touchstart",J,G))}function ke(e){const l=V.findIndex(o=>o===e);l>-1&&(V.splice(l,1),V.length===0&&(document.removeEventListener("mousedown",J,G),document.removeEventListener("touchstart",J,G)))}let Se,Te;function $e(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ut(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const re={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{re[`${e}#ltr`]=e,re[`${e}#rtl`]=e});function ze(e,l){const o=e.split(" ");return{vertical:o[0],horizontal:re[`${o[1]}#${l===!0?"rtl":"ltr"}`]}}function Yt(e,l){let{top:o,left:t,right:n,bottom:u,width:a,height:f}=e.getBoundingClientRect();return l!==void 0&&(o-=l[1],t-=l[0],u+=l[1],n+=l[0],a+=l[0],f+=l[1]),{top:o,bottom:u,height:f,left:t,right:n,width:a,middle:t+(n-t)/2,center:o+(u-o)/2}}function Xt(e,l,o){let{top:t,left:n}=e.getBoundingClientRect();return t+=l.top,n+=l.left,o!==void 0&&(t+=o[1],n+=o[0]),{top:t,bottom:t+1,height:1,left:n,right:n+1,width:1,middle:n,center:t}}function Gt(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function He(e,l,o,t){return{top:e[o.vertical]-l[t.vertical],left:e[o.horizontal]-l[t.horizontal]}}function De(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{De(e,l+1)},10);return}const{targetEl:o,offset:t,anchorEl:n,anchorOrigin:u,selfOrigin:a,absoluteOffset:f,fit:c,cover:s,maxHeight:v,maxWidth:p}=e;if(st.is.ios===!0&&window.visualViewport!==void 0){const x=document.body.style,{offsetLeft:S,offsetTop:L}=window.visualViewport;S!==Se&&(x.setProperty("--q-pe-left",S+"px"),Se=S),L!==Te&&(x.setProperty("--q-pe-top",L+"px"),Te=L)}const{scrollLeft:y,scrollTop:i}=o,d=f===void 0?Yt(n,s===!0?[0,0]:t):Xt(n,f,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:v||"100vh",visibility:"visible"});const{offsetWidth:q,offsetHeight:k}=o,{elWidth:H,elHeight:h}=c===!0||s===!0?{elWidth:Math.max(d.width,q),elHeight:s===!0?Math.max(d.height,k):k}:{elWidth:q,elHeight:k};let m={maxWidth:p,maxHeight:v};(c===!0||s===!0)&&(m.minWidth=d.width+"px",s===!0&&(m.minHeight=d.height+"px")),Object.assign(o.style,m);const g=Gt(H,h);let r=He(d,g,u,a);if(f===void 0||t===void 0)ae(r,d,g,u,a);else{const{top:x,left:S}=r;ae(r,d,g,u,a);let L=!1;if(r.top!==x){L=!0;const E=2*t[1];d.center=d.top-=E,d.bottom-=E+2}if(r.left!==S){L=!0;const E=2*t[0];d.middle=d.left-=E,d.right-=E+2}L===!0&&(r=He(d,g,u,a),ae(r,d,g,u,a))}m={top:r.top+"px",left:r.left+"px"},r.maxHeight!==void 0&&(m.maxHeight=r.maxHeight+"px",d.height>r.maxHeight&&(m.minHeight=m.maxHeight)),r.maxWidth!==void 0&&(m.maxWidth=r.maxWidth+"px",d.width>r.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(o.style,m),o.scrollTop!==i&&(o.scrollTop=i),o.scrollLeft!==y&&(o.scrollLeft=y)}function ae(e,l,o,t,n){const u=o.bottom,a=o.right,f=X(),c=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+u>c)if(n.vertical==="center")e.top=l[t.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(l[t.vertical]>c/2){const v=Math.min(c,t.vertical==="center"?l.center:t.vertical===n.vertical?l.bottom:l.top);e.maxHeight=Math.min(u,v),e.top=Math.max(0,v-u)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===n.vertical?l.top:l.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+a>s)if(e.maxWidth=Math.min(a,s),n.horizontal==="middle")e.left=l[t.horizontal]>s/2?Math.max(0,s-a):0;else if(l[t.horizontal]>s/2){const v=Math.min(s,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.right:l.left);e.maxWidth=Math.min(a,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.left:l.right),e.maxWidth=Math.min(a,s-e.left)}const Jt=z({name:"QMenu",inheritAttrs:!1,props:{...Nt,...ut,...ce,...rt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:$e},self:{type:String,validator:$e},offset:{type:Array,validator:Ut},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ct,"click","escapeKey"],setup(e,{slots:l,emit:o,attrs:t}){let n=null,u,a,f;const c=R(),{proxy:s}=c,{$q:v}=s,p=T(null),y=T(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),d=de(e,v),{registerTick:q,removeTick:k}=dt(),{registerTimeout:H}=ft(),{transitionProps:h,transitionStyle:m}=vt(e),{localScrollTarget:g,changeScrollEvent:r,unconfigureScrollTarget:x}=Kt(e,_e),{anchorEl:S,canShow:L}=It({showing:y}),{hide:E}=ht({showing:y,canShow:L,handleShow:Ye,handleHide:Xe,hideOnRouteChange:i,processOnMount:!0}),{showPortal:ve,hidePortal:he,renderPortal:Ie}=mt(c,p,Je,"menu"),ee={anchorEl:S,innerRef:p,onClickOutside(_){if(e.persistent!==!0&&y.value===!0)return E(_),(_.type==="touchstart"||_.target.classList.contains("q-dialog__backdrop"))&&Re(_),!0}},me=b(()=>ze(e.anchor||(e.cover===!0?"center middle":"bottom start"),v.lang.rtl)),Ke=b(()=>e.cover===!0?me.value:ze(e.self||"top start",v.lang.rtl)),je=b(()=>(e.square===!0?" q-menu--square":"")+(d.value===!0?" q-menu--dark q-dark":"")),Ue=b(()=>e.autoClose===!0?{onClick:Ge}:{}),ge=b(()=>y.value===!0&&e.persistent!==!0);C(ge,_=>{_===!0?(gt(ne),jt(ee)):(qe(ne),ke(ee))});function te(){qt(()=>{let _=p.value;_&&_.contains(document.activeElement)!==!0&&(_=_.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||_.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||_.querySelector("[autofocus], [data-autofocus]")||_,_.focus({preventScroll:!0}))})}function Ye(_){if(n=e.noRefocus===!1?document.activeElement:null,bt(pe),ve(),_e(),u=void 0,_!==void 0&&(e.touchPosition||e.contextMenu)){const oe=_t(_);if(oe.left!==void 0){const{top:Ze,left:et}=S.value.getBoundingClientRect();u={left:oe.left-et,top:oe.top-Ze}}}a===void 0&&(a=C(()=>v.screen.width+"|"+v.screen.height+"|"+e.self+"|"+e.anchor+"|"+v.lang.rtl,D)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{D(),e.noFocus!==!0&&te()}),H(()=>{v.platform.is.ios===!0&&(f=e.autoClose,p.value.click()),D(),ve(!0),o("show",_)},e.transitionDuration)}function Xe(_){k(),he(),be(!0),n!==null&&(_===void 0||_.qClickOutside!==!0)&&(((_&&_.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),H(()=>{he(!0),o("hide",_)},e.transitionDuration)}function be(_){u=void 0,a!==void 0&&(a(),a=void 0),(_===!0||y.value===!0)&&(pt(pe),x(),ke(ee),qe(ne)),_!==!0&&(n=null)}function _e(){(S.value!==null||e.scrollTarget!==void 0)&&(g.value=Pe(S.value,e.scrollTarget),r(g.value,D))}function Ge(_){f!==!0?(yt(s,_),o("click",_)):f=!1}function pe(_){ge.value===!0&&e.noFocus!==!0&&xt(p.value,_.target)!==!0&&te()}function ne(_){o("escapeKey"),E(_)}function D(){De({targetEl:p.value,offset:e.offset,anchorEl:S.value,anchorOrigin:me.value,selfOrigin:Ke.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Je(){return w(wt,h.value,()=>y.value===!0?w("div",{role:"menu",...t,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+je.value,t.class],style:[t.style,m.value],...Ue.value},W(l.default)):null)}return M(be),Object.assign(s,{focus:te,updatePosition:D}),Ie}});function Zt(){const e=T(!fe.value);return e.value===!1&&K(()=>{e.value=!0}),e}const Ne=typeof ResizeObserver<"u",Le=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Z=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,t,n={width:-1,height:-1};function u(c){c===!0||e.debounce===0||e.debounce==="0"?a():o===null&&(o=setTimeout(a,e.debounce))}function a(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:c,offsetHeight:s}=t;(c!==n.width||s!==n.height)&&(n={width:c,height:s},l("resize",n))}}const{proxy:f}=R();if(Ne===!0){let c;const s=v=>{t=f.$el.parentNode,t?(c=new ResizeObserver(u),c.observe(t),a()):v!==!0&&ie(()=>{s(!0)})};return K(()=>{s()}),M(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():t&&c.unobserve(t))}),Fe}else{let v=function(){o!==null&&(clearTimeout(o),o=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",u,O.passive),s=void 0)},p=function(){v(),t&&t.contentDocument&&(s=t.contentDocument.defaultView,s.addEventListener("resize",u,O.passive),a())};const c=Zt();let s;return K(()=>{ie(()=>{t=f.$el,t&&p()})}),M(v),f.trigger=u,()=>{if(c.value===!0)return w("object",{style:Le.style,tabindex:-1,type:"text/html",data:Le.url,"aria-hidden":"true",onLoad:p})}}}}),en=z({name:"QItem",props:{...ce,...Ct,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=de(e,t),{hasLink:u,linkAttrs:a,linkClass:f,linkTag:c,navigateOnClick:s}=kt(),v=T(null),p=T(null),y=b(()=>e.clickable===!0||u.value===!0||e.tag==="label"),i=b(()=>e.disable!==!0&&y.value===!0),d=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=b(()=>e.insetLevel===void 0?null:{["padding"+(t.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function k(m){i.value===!0&&(p.value!==null&&(m.qKeyEvent!==!0&&document.activeElement===v.value?p.value.focus():document.activeElement===p.value&&v.value.focus()),s(m))}function H(m){if(i.value===!0&&Ee(m,13)===!0){Re(m),m.qKeyEvent=!0;const g=new MouseEvent("click",m);g.qKeyEvent=!0,v.value.dispatchEvent(g)}o("keyup",m)}function h(){const m=Qe(l.default,[]);return i.value===!0&&m.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:p})),m}return()=>{const m={ref:v,class:d.value,style:q.value,role:"listitem",onClick:k,onKeyup:H};return i.value===!0?(m.tabindex=e.tabindex||"0",Object.assign(m,a.value)):y.value===!0&&(m["aria-disabled"]="true"),w(c.value,m,h())}}}),tn=z({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:o.value},W(l.default))}}),nn=z({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const o=b(()=>parseInt(e.lines,10)),t=b(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),n=b(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>w("div",{style:n.value,class:t.value},W(l.default))}}),mn=z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=j(U,$);if(n===$)return console.error("QFooter needs to be child of QLayout"),$;const u=T(parseInt(e.heightHint,10)),a=T(!0),f=T(fe.value===!0||n.isContainer.value===!0?0:window.innerHeight),c=b(()=>e.reveal===!0||n.view.value.indexOf("F")>-1||t.platform.is.ios&&n.isContainer.value===!0),s=b(()=>n.isContainer.value===!0?n.containerHeight.value:f.value),v=b(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return a.value===!0?u.value:0;const r=n.scroll.value.position+s.value+u.value-n.height.value;return r>0?r:0}),p=b(()=>e.modelValue!==!0||c.value===!0&&a.value!==!0),y=b(()=>e.modelValue===!0&&p.value===!0&&e.reveal===!0),i=b(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(p.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),d=b(()=>{const r=n.rows.value.bottom,x={};return r[0]==="l"&&n.left.space===!0&&(x[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),r[2]==="r"&&n.right.space===!0&&(x[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),x});function q(r,x){n.update("footer",r,x)}function k(r,x){r.value!==x&&(r.value=x)}function H({height:r}){k(u,r),q("size",r)}function h(){if(e.reveal!==!0)return;const{direction:r,position:x,inflectionPoint:S}=n.scroll.value;k(a,r==="up"||x-S<100||n.height.value-s.value-x-u.value<300)}function m(r){y.value===!0&&k(a,!0),o("focusin",r)}C(()=>e.modelValue,r=>{q("space",r),k(a,!0),n.animate()}),C(v,r=>{q("offset",r)}),C(()=>e.reveal,r=>{r===!1&&k(a,e.modelValue)}),C(a,r=>{n.animate(),o("reveal",r)}),C([u,n.scroll,n.height],h),C(()=>t.screen.height,r=>{n.isContainer.value!==!0&&k(f,r)});const g={};return n.instances.footer=g,e.modelValue===!0&&q("size",u.value),q("space",e.modelValue),q("offset",v.value),M(()=>{n.instances.footer===g&&(n.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const r=Me(l.default,[w(Z,{debounce:0,onResize:H})]);return e.elevated===!0&&r.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:i.value,style:d.value,onFocusin:m},r)}}}),gn=z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=j(U,$);if(n===$)return console.error("QHeader needs to be child of QLayout"),$;const u=T(parseInt(e.heightHint,10)),a=T(!0),f=b(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||t.platform.is.ios&&n.isContainer.value===!0),c=b(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return a.value===!0?u.value:0;const h=u.value-n.scroll.value.position;return h>0?h:0}),s=b(()=>e.modelValue!==!0||f.value===!0&&a.value!==!0),v=b(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),p=b(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=b(()=>{const h=n.rows.value.top,m={};return h[0]==="l"&&n.left.space===!0&&(m[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),h[2]==="r"&&n.right.space===!0&&(m[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),m});function i(h,m){n.update("header",h,m)}function d(h,m){h.value!==m&&(h.value=m)}function q({height:h}){d(u,h),i("size",h)}function k(h){v.value===!0&&d(a,!0),o("focusin",h)}C(()=>e.modelValue,h=>{i("space",h),d(a,!0),n.animate()}),C(c,h=>{i("offset",h)}),C(()=>e.reveal,h=>{h===!1&&d(a,e.modelValue)}),C(a,h=>{n.animate(),o("reveal",h)}),C(n.scroll,h=>{e.reveal===!0&&d(a,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const H={};return n.instances.header=H,e.modelValue===!0&&i("size",u.value),i("space",e.modelValue),i("offset",c.value),M(()=>{n.instances.header===H&&(n.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const h=Qe(l.default,[]);return e.elevated===!0&&h.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(w(Z,{debounce:0,onResize:q})),w("header",{class:p.value,style:y.value,onFocusin:k},h)}}}),on=z({name:"QList",props:{...ce,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const o=R(),t=de(e,o.proxy.$q),n=b(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w(e.tag,{class:n.value},W(l.default))}}),{passive:Be}=O,ln=["both","horizontal","vertical"],an=z({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ln.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,u;C(()=>e.scrollTarget,()=>{c(),f()});function a(){t!==null&&t();const p=Math.max(0,St(n)),y=Tt(n),i={top:p-o.position.top,left:y-o.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const d=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";o.position={top:p,left:y},o.directionChanged=o.direction!==d,o.delta=i,o.directionChanged===!0&&(o.direction=d,o.inflectionPoint=o.position),l("scroll",{...o})}function f(){n=Pe(u,e.scrollTarget),n.addEventListener("scroll",s,Be),s(!0)}function c(){n!==void 0&&(n.removeEventListener("scroll",s,Be),n=void 0)}function s(p){if(p===!0||e.debounce===0||e.debounce==="0")a();else if(t===null){const[y,i]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];t=()=>{i(y),t=null}}}const{proxy:v}=R();return C(()=>v.$q.lang.rtl,a),K(()=>{u=v.$el.parentNode,f()}),M(()=>{t!==null&&t(),c()}),Object.assign(v,{trigger:s,getPosition:()=>o}),Fe}}),bn=z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=T(null),u=T(t.screen.height),a=T(e.container===!0?0:t.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),s=T(fe.value===!0?0:X()),v=b(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=b(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=b(()=>s.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),i=b(()=>s.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function d(g){if(e.container===!0||document.qScrollPrevented!==!0){const r={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};f.value=r,e.onScroll!==void 0&&o("scroll",r)}}function q(g){const{height:r,width:x}=g;let S=!1;u.value!==r&&(S=!0,u.value=r,e.onScrollHeight!==void 0&&o("scrollHeight",r),H()),a.value!==x&&(S=!0,a.value=x),S===!0&&e.onResize!==void 0&&o("resize",g)}function k({height:g}){c.value!==g&&(c.value=g,H())}function H(){if(e.container===!0){const g=u.value>c.value?X():0;s.value!==g&&(s.value=g)}}let h=null;const m={instances:{},view:b(()=>e.view),isContainer:b(()=>e.container),rootRef:n,height:u,containerHeight:c,scrollbarWidth:s,totalWidth:b(()=>a.value+s.value),rows:b(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:N({size:0,offset:0,space:!1}),right:N({size:300,offset:0,space:!1}),footer:N({size:0,offset:0,space:!1}),left:N({size:300,offset:0,space:!1}),scroll:f,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,r,x){m[g][r]=x}};if(We(U,m),X()>0){let x=function(){g=null,r.classList.remove("hide-scrollbar")},S=function(){if(g===null){if(r.scrollHeight>t.screen.height)return;r.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(x,300)},L=function(E){g!==null&&E==="remove"&&(clearTimeout(g),x()),window[`${E}EventListener`]("resize",S)},g=null;const r=document.body;C(()=>e.container!==!0?"add":"remove",L),e.container!==!0&&L("add"),$t(()=>{L("remove")})}return()=>{const g=Me(l.default,[w(an,{onScroll:d}),w(Z,{onResize:q})]),r=w("div",{class:v.value,style:p.value,ref:e.container===!0?void 0:n,tabindex:-1},g);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:n},[w(Z,{onResize:k}),w("div",{class:"absolute-full",style:y.value},[w("div",{class:"scroll",style:i.value},[r])])]):r}}}),_n=z({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:o}}=R(),t=j(U,$);if(t===$)return console.error("QPage needs to be a deep child of QLayout"),$;if(j(Ve,$)===$)return console.error("QPage needs to be child of QPageContainer"),$;const u=b(()=>{const f=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const c=t.isContainer.value===!0?t.containerHeight.value:o.screen.height;return e.styleFn(f,c)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-f+"px":o.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":o.screen.height-f+"px"}}),a=b(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:a.value,style:u.value},W(l.default))}}),pn=z({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=R(),t=j(U,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;We(Ve,!0);const n=b(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>w("div",{class:"q-page-container",style:n.value},W(l.default))}}),sn=w("div",{class:"q-space"}),yn=z({name:"QSpace",setup(){return()=>sn}}),xn=z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:o.value,role:"toolbar"},W(l.default))}}),wn=z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:o.value},W(l.default))}}),un=""+new URL("logo_trf3.473a7b06.png",import.meta.url).href,rn={},cn=ue("img",{src:un,style:{height:"60px",width:"260px"}},null,-1),dn=[cn];function fn(e,l){return F(),I("div",{class:"row items-center cursor-pointer",onClick:l[0]||(l[0]=o=>("navigateTo"in e?e.navigateTo:Q(se))("/"))},dn)}const qn=zt(rn,[["render",fn]]),vn=["src","alt"],Cn=Ae({__name:"CecalcBarraSuperiorMenu",setup(e){const l=Oe();async function o(t){t.url&&await se(t.url,{open:{target:"_blank"}}),t.to&&se(t.to)}return(t,n)=>{const u=Et,a=Pt,f=Rt,c=nn,s=tn,v=en,p=on,y=Jt,i=Ft;return F(),Y(i,{flat:"",round:"",dense:"",icon:Q(Bt)},{default:B(()=>[P(y,{"auto-close":"",square:""},{default:B(()=>[P(p,{dense:"",padding:""},{default:B(()=>[(F(!0),I(Ce,null,Ht(Q(l).menu,(d,q)=>(F(),I(Ce,{key:`menu-item-${q}`},[d.separador?(F(),Y(u,{key:0,spaced:""})):(F(),Y(v,{key:1,clickable:"",dense:"","inset-level":0,onClick:k=>o(d)},{default:B(()=>[P(f,{size:"md",class:"q-mr-sm"},{default:B(()=>[d.icone?(F(),Y(a,{key:0,color:"grey-10",name:d.icone,size:"sm"},null,8,["name"])):d.imagem?(F(),I("img",{key:1,src:d.imagem,alt:d.rotulo,style:{width:"32px",height:"auto"}},null,8,vn)):Lt("",!0)]),_:2},1024),P(s,null,{default:B(()=>[P(c,{class:"text-no-wrap"},{default:B(()=>[le(A(d.rotulo),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128)),P(u,{spaced:""}),P(v,{dense:""},{default:B(()=>[P(s,null,{default:B(()=>[P(c,{caption:""},{default:B(()=>[le(A(Q(l).nome),1)]),_:1})]),_:1}),P(s,{side:""},{default:B(()=>[P(c,{caption:""},{default:B(()=>[le(" Versão "+A(Q(l).versao),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["icon"])}}}),kn=Ae({__name:"CecalcBarraInferior",setup(e){const l=Oe();function o(){const n=new Date().getFullYear();return n===2023?n:`2023-${n}`}return(t,n)=>(F(),I("div",{class:Qt(["q-pa-sm text-caption text-weight-thin row justify-between items-center",`bg-${Q(l).corFundo} text-${Q(l).corTexto}`])},[ue("div",null,"© "+A(o())+" "+A(Q(l).copyright),1),ue("div",null,A(Q(l).contato),1)],2))}});export{Z as Q,Jt as _,an as a,tn as b,Dt as c,nn as d,en as e,on as f,wn as g,xn as h,yn as i,gn as j,_n as k,pn as l,kn as m,mn as n,bn as o,qn as p,Cn as q,Oe as u};
