import{bO as tt,bP as nt,bQ as ot,bR as N,u as lt,bS as at,E as R,r as T,bl as Be,T as ye,Z as ie,b1 as xe,a0 as C,o as I,b as W,b4 as it,bx as O,bT as we,J as ut,bU as X,C as z,bV as rt,D as ce,bW as st,bX as ct,c as b,F as de,bg as dt,bh as ft,bY as vt,bZ as mt,b_ as ht,b$ as gt,c0 as qe,c1 as bt,b3 as _t,c2 as pt,bw as Pe,c3 as yt,c4 as xt,e as w,G as M,b5 as wt,$ as qt,I as Re,c5 as fe,a$ as Fe,c6 as Ct,c7 as kt,bv as Qe,bj as K,bk as $,c8 as U,aY as We,c9 as St,ca as Tt,U as Me,cb as $t,cc as Ve,_ as zt,k as F,l as j,a3 as Q,n as ue,m as re,d as Ae,z as Y,s as H,q as P,aj as Ce,ak as Lt,ag as Et,v as le,t as A,cd as Ht,aC as Bt,an as Pt,aR as Rt,a9 as Ft,af as Qt}from"./entry.f8380c19.js";const Wt="@cecalc/tc",Mt="0.0.61",Vt=tt({nome:Wt,titulo:"Cálculo Tempo de Contribuição",descricao:"Ferramenta criada pela CECALC (Justiça Federal de São Paulo) para cálculo de tempo de contribuição no RGPS.",versao:Mt,corFundo:"light-blue-10",corTexto:"white",documentos:{cnis:!1,carta:!1}}),At={},Ot=nt(Vt,ot,At);function Oe(){const e=lt();return e._appConfig||(e._appConfig=N(Ot)),e._appConfig}function Dt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),at.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Nt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function jt({showing:e,avoidEmit:l,configureAnchorEl:o}){const{props:t,proxy:n,emit:r}=R(),a=T(null);let f=null;function c(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const u={};o===void 0&&(Object.assign(u,{hide(i){n.hide(i)},toggle(i){n.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Be(i,13)===!0&&u.toggle(i)},contextClick(i){n.hide(i),ye(i),ie(()=>{n.show(i),i.qAnchorHandled=!0})},prevent:ye,mobileTouch(i){if(u.mobileCleanup(i),c(i)!==!0)return;n.hide(i),a.value.classList.add("non-selectable");const d=i.target;xe(u,"anchor",[[d,"touchmove","mobileCleanup","passive"],[d,"touchend","mobileCleanup","passive"],[d,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,n.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&i!==void 0&&Dt()}}),o=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let d;i===!0?n.$q.platform.is.mobile===!0?d=[[a.value,"touchstart","mobileTouch","passive"]]:d=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:d=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],xe(u,"anchor",d)});function v(){it(u,"anchor")}function p(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function y(){if(t.target===!1||t.target===""||n.$el.parentNode===null)a.value=null;else if(t.target===!0)p(n.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,o()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return C(()=>t.contextMenu,i=>{a.value!==null&&(v(),o(i))}),C(()=>t.target,()=>{a.value!==null&&v(),y()}),C(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?v():o())}),I(()=>{y(),l!==!0&&t.modelValue===!0&&a.value===null&&r("update:modelValue",!1)}),W(()=>{f!==null&&clearTimeout(f),v()}),{anchorEl:a,canShow:c,anchorEvents:u}}function It(e,l){const o=T(null);let t;function n(f,c){const u=`${c!==void 0?"add":"remove"}EventListener`,v=c!==void 0?c:t;f!==window&&f[u]("scroll",v,O.passive),window[u]("scroll",v,O.passive),t=c}function r(){o.value!==null&&(n(o.value),o.value=null)}const a=C(()=>e.noParentEvent,()=>{o.value!==null&&(r(),l())});return W(a),{localScrollTarget:o,unconfigureScrollTarget:r,changeScrollEvent:n}}const{notPassiveCapture:G}=O,V=[];function J(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let o=we.length-1;for(;o>=0;){const t=we[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=V.length-1;t>=0;t--){const n=V[t];if((n.anchorEl.value===null||n.anchorEl.value.contains(l)===!1)&&(l===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(l)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function Kt(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",J,G),document.addEventListener("touchstart",J,G))}function ke(e){const l=V.findIndex(o=>o===e);l>-1&&(V.splice(l,1),V.length===0&&(document.removeEventListener("mousedown",J,G),document.removeEventListener("touchstart",J,G)))}let Se,Te;function $e(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ut(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const se={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{se[`${e}#ltr`]=e,se[`${e}#rtl`]=e});function ze(e,l){const o=e.split(" ");return{vertical:o[0],horizontal:se[`${o[1]}#${l===!0?"rtl":"ltr"}`]}}function Yt(e,l){let{top:o,left:t,right:n,bottom:r,width:a,height:f}=e.getBoundingClientRect();return l!==void 0&&(o-=l[1],t-=l[0],r+=l[1],n+=l[0],a+=l[0],f+=l[1]),{top:o,bottom:r,height:f,left:t,right:n,width:a,middle:t+(n-t)/2,center:o+(r-o)/2}}function Xt(e,l,o){let{top:t,left:n}=e.getBoundingClientRect();return t+=l.top,n+=l.left,o!==void 0&&(t+=o[1],n+=o[0]),{top:t,bottom:t+1,height:1,left:n,right:n+1,width:1,middle:n,center:t}}function Gt(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function Le(e,l,o,t){return{top:e[o.vertical]-l[t.vertical],left:e[o.horizontal]-l[t.horizontal]}}function De(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{De(e,l+1)},10);return}const{targetEl:o,offset:t,anchorEl:n,anchorOrigin:r,selfOrigin:a,absoluteOffset:f,fit:c,cover:u,maxHeight:v,maxWidth:p}=e;if(ut.is.ios===!0&&window.visualViewport!==void 0){const x=document.body.style,{offsetLeft:S,offsetTop:E}=window.visualViewport;S!==Se&&(x.setProperty("--q-pe-left",S+"px"),Se=S),E!==Te&&(x.setProperty("--q-pe-top",E+"px"),Te=E)}const{scrollLeft:y,scrollTop:i}=o,d=f===void 0?Yt(n,u===!0?[0,0]:t):Xt(n,f,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:v||"100vh",visibility:"visible"});const{offsetWidth:q,offsetHeight:k}=o,{elWidth:L,elHeight:m}=c===!0||u===!0?{elWidth:Math.max(d.width,q),elHeight:u===!0?Math.max(d.height,k):k}:{elWidth:q,elHeight:k};let h={maxWidth:p,maxHeight:v};(c===!0||u===!0)&&(h.minWidth=d.width+"px",u===!0&&(h.minHeight=d.height+"px")),Object.assign(o.style,h);const g=Gt(L,m);let s=Le(d,g,r,a);if(f===void 0||t===void 0)ae(s,d,g,r,a);else{const{top:x,left:S}=s;ae(s,d,g,r,a);let E=!1;if(s.top!==x){E=!0;const B=2*t[1];d.center=d.top-=B,d.bottom-=B+2}if(s.left!==S){E=!0;const B=2*t[0];d.middle=d.left-=B,d.right-=B+2}E===!0&&(s=Le(d,g,r,a),ae(s,d,g,r,a))}h={top:s.top+"px",left:s.left+"px"},s.maxHeight!==void 0&&(h.maxHeight=s.maxHeight+"px",d.height>s.maxHeight&&(h.minHeight=h.maxHeight)),s.maxWidth!==void 0&&(h.maxWidth=s.maxWidth+"px",d.width>s.maxWidth&&(h.minWidth=h.maxWidth)),Object.assign(o.style,h),o.scrollTop!==i&&(o.scrollTop=i),o.scrollLeft!==y&&(o.scrollLeft=y)}function ae(e,l,o,t,n){const r=o.bottom,a=o.right,f=X(),c=window.innerHeight-f,u=document.body.clientWidth;if(e.top<0||e.top+r>c)if(n.vertical==="center")e.top=l[t.vertical]>c/2?Math.max(0,c-r):0,e.maxHeight=Math.min(r,c);else if(l[t.vertical]>c/2){const v=Math.min(c,t.vertical==="center"?l.center:t.vertical===n.vertical?l.bottom:l.top);e.maxHeight=Math.min(r,v),e.top=Math.max(0,v-r)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===n.vertical?l.top:l.bottom),e.maxHeight=Math.min(r,c-e.top);if(e.left<0||e.left+a>u)if(e.maxWidth=Math.min(a,u),n.horizontal==="middle")e.left=l[t.horizontal]>u/2?Math.max(0,u-a):0;else if(l[t.horizontal]>u/2){const v=Math.min(u,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.right:l.left);e.maxWidth=Math.min(a,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.left:l.right),e.maxWidth=Math.min(a,u-e.left)}const Jt=z({name:"QMenu",inheritAttrs:!1,props:{...Nt,...rt,...ce,...st,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:$e},self:{type:String,validator:$e},offset:{type:Array,validator:Ut},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ct,"click","escapeKey"],setup(e,{slots:l,emit:o,attrs:t}){let n=null,r,a,f;const c=R(),{proxy:u}=c,{$q:v}=u,p=T(null),y=T(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),d=de(e,v),{registerTick:q,removeTick:k}=dt(),{registerTimeout:L}=ft(),{transitionProps:m,transitionStyle:h}=vt(e),{localScrollTarget:g,changeScrollEvent:s,unconfigureScrollTarget:x}=It(e,_e),{anchorEl:S,canShow:E}=jt({showing:y}),{hide:B}=mt({showing:y,canShow:E,handleShow:Ye,handleHide:Xe,hideOnRouteChange:i,processOnMount:!0}),{showPortal:ve,hidePortal:me,renderPortal:je}=ht(c,p,Je,"menu"),ee={anchorEl:S,innerRef:p,onClickOutside(_){if(e.persistent!==!0&&y.value===!0)return B(_),(_.type==="touchstart"||_.target.classList.contains("q-dialog__backdrop"))&&Re(_),!0}},he=b(()=>ze(e.anchor||(e.cover===!0?"center middle":"bottom start"),v.lang.rtl)),Ie=b(()=>e.cover===!0?he.value:ze(e.self||"top start",v.lang.rtl)),Ke=b(()=>(e.square===!0?" q-menu--square":"")+(d.value===!0?" q-menu--dark q-dark":"")),Ue=b(()=>e.autoClose===!0?{onClick:Ge}:{}),ge=b(()=>y.value===!0&&e.persistent!==!0);C(ge,_=>{_===!0?(gt(ne),Kt(ee)):(qe(ne),ke(ee))});function te(){qt(()=>{let _=p.value;_&&_.contains(document.activeElement)!==!0&&(_=_.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||_.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||_.querySelector("[autofocus], [data-autofocus]")||_,_.focus({preventScroll:!0}))})}function Ye(_){if(n=e.noRefocus===!1?document.activeElement:null,bt(pe),ve(),_e(),r=void 0,_!==void 0&&(e.touchPosition||e.contextMenu)){const oe=_t(_);if(oe.left!==void 0){const{top:Ze,left:et}=S.value.getBoundingClientRect();r={left:oe.left-et,top:oe.top-Ze}}}a===void 0&&(a=C(()=>v.screen.width+"|"+v.screen.height+"|"+e.self+"|"+e.anchor+"|"+v.lang.rtl,D)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{D(),e.noFocus!==!0&&te()}),L(()=>{v.platform.is.ios===!0&&(f=e.autoClose,p.value.click()),D(),ve(!0),o("show",_)},e.transitionDuration)}function Xe(_){k(),me(),be(!0),n!==null&&(_===void 0||_.qClickOutside!==!0)&&(((_&&_.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),L(()=>{me(!0),o("hide",_)},e.transitionDuration)}function be(_){r=void 0,a!==void 0&&(a(),a=void 0),(_===!0||y.value===!0)&&(pt(pe),x(),ke(ee),qe(ne)),_!==!0&&(n=null)}function _e(){(S.value!==null||e.scrollTarget!==void 0)&&(g.value=Pe(S.value,e.scrollTarget),s(g.value,D))}function Ge(_){f!==!0?(yt(u,_),o("click",_)):f=!1}function pe(_){ge.value===!0&&e.noFocus!==!0&&xt(p.value,_.target)!==!0&&te()}function ne(_){o("escapeKey"),B(_)}function D(){De({targetEl:p.value,offset:e.offset,anchorEl:S.value,anchorOrigin:he.value,selfOrigin:Ie.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Je(){return w(wt,m.value,()=>y.value===!0?w("div",{role:"menu",...t,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+Ke.value,t.class],style:[t.style,h.value],...Ue.value},M(l.default)):null)}return W(be),Object.assign(u,{focus:te,updatePosition:D}),je}});function Zt(){const e=T(!fe.value);return e.value===!1&&I(()=>{e.value=!0}),e}const Ne=typeof ResizeObserver<"u",Ee=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Z=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,t,n={width:-1,height:-1};function r(c){c===!0||e.debounce===0||e.debounce==="0"?a():o===null&&(o=setTimeout(a,e.debounce))}function a(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:c,offsetHeight:u}=t;(c!==n.width||u!==n.height)&&(n={width:c,height:u},l("resize",n))}}const{proxy:f}=R();if(Ne===!0){let c;const u=v=>{t=f.$el.parentNode,t?(c=new ResizeObserver(r),c.observe(t),a()):v!==!0&&ie(()=>{u(!0)})};return I(()=>{u()}),W(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():t&&c.unobserve(t))}),Fe}else{let v=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",r,O.passive),u=void 0)},p=function(){v(),t&&t.contentDocument&&(u=t.contentDocument.defaultView,u.addEventListener("resize",r,O.passive),a())};const c=Zt();let u;return I(()=>{ie(()=>{t=f.$el,t&&p()})}),W(v),f.trigger=r,()=>{if(c.value===!0)return w("object",{style:Ee.style,tabindex:-1,type:"text/html",data:Ee.url,"aria-hidden":"true",onLoad:p})}}}}),en=z({name:"QItem",props:{...ce,...Ct,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=de(e,t),{hasLink:r,linkAttrs:a,linkClass:f,linkTag:c,navigateOnClick:u}=kt(),v=T(null),p=T(null),y=b(()=>e.clickable===!0||r.value===!0||e.tag==="label"),i=b(()=>e.disable!==!0&&y.value===!0),d=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=b(()=>e.insetLevel===void 0?null:{["padding"+(t.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function k(h){i.value===!0&&(p.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===v.value?p.value.focus():document.activeElement===p.value&&v.value.focus()),u(h))}function L(h){if(i.value===!0&&Be(h,13)===!0){Re(h),h.qKeyEvent=!0;const g=new MouseEvent("click",h);g.qKeyEvent=!0,v.value.dispatchEvent(g)}o("keyup",h)}function m(){const h=Qe(l.default,[]);return i.value===!0&&h.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:p})),h}return()=>{const h={ref:v,class:d.value,style:q.value,role:"listitem",onClick:k,onKeyup:L};return i.value===!0?(h.tabindex=e.tabindex||"0",Object.assign(h,a.value)):y.value===!0&&(h["aria-disabled"]="true"),w(c.value,h,m())}}}),tn=z({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:o.value},M(l.default))}}),nn=z({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const o=b(()=>parseInt(e.lines,10)),t=b(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),n=b(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>w("div",{style:n.value,class:t.value},M(l.default))}}),hn=z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=K(U,$);if(n===$)return console.error("QFooter needs to be child of QLayout"),$;const r=T(parseInt(e.heightHint,10)),a=T(!0),f=T(fe.value===!0||n.isContainer.value===!0?0:window.innerHeight),c=b(()=>e.reveal===!0||n.view.value.indexOf("F")>-1||t.platform.is.ios&&n.isContainer.value===!0),u=b(()=>n.isContainer.value===!0?n.containerHeight.value:f.value),v=b(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return a.value===!0?r.value:0;const s=n.scroll.value.position+u.value+r.value-n.height.value;return s>0?s:0}),p=b(()=>e.modelValue!==!0||c.value===!0&&a.value!==!0),y=b(()=>e.modelValue===!0&&p.value===!0&&e.reveal===!0),i=b(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(p.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),d=b(()=>{const s=n.rows.value.bottom,x={};return s[0]==="l"&&n.left.space===!0&&(x[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),s[2]==="r"&&n.right.space===!0&&(x[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),x});function q(s,x){n.update("footer",s,x)}function k(s,x){s.value!==x&&(s.value=x)}function L({height:s}){k(r,s),q("size",s)}function m(){if(e.reveal!==!0)return;const{direction:s,position:x,inflectionPoint:S}=n.scroll.value;k(a,s==="up"||x-S<100||n.height.value-u.value-x-r.value<300)}function h(s){y.value===!0&&k(a,!0),o("focusin",s)}C(()=>e.modelValue,s=>{q("space",s),k(a,!0),n.animate()}),C(v,s=>{q("offset",s)}),C(()=>e.reveal,s=>{s===!1&&k(a,e.modelValue)}),C(a,s=>{n.animate(),o("reveal",s)}),C([r,n.scroll,n.height],m),C(()=>t.screen.height,s=>{n.isContainer.value!==!0&&k(f,s)});const g={};return n.instances.footer=g,e.modelValue===!0&&q("size",r.value),q("space",e.modelValue),q("offset",v.value),W(()=>{n.instances.footer===g&&(n.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const s=We(l.default,[w(Z,{debounce:0,onResize:L})]);return e.elevated===!0&&s.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:i.value,style:d.value,onFocusin:h},s)}}}),gn=z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=K(U,$);if(n===$)return console.error("QHeader needs to be child of QLayout"),$;const r=T(parseInt(e.heightHint,10)),a=T(!0),f=b(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||t.platform.is.ios&&n.isContainer.value===!0),c=b(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return a.value===!0?r.value:0;const m=r.value-n.scroll.value.position;return m>0?m:0}),u=b(()=>e.modelValue!==!0||f.value===!0&&a.value!==!0),v=b(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),p=b(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=b(()=>{const m=n.rows.value.top,h={};return m[0]==="l"&&n.left.space===!0&&(h[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),m[2]==="r"&&n.right.space===!0&&(h[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),h});function i(m,h){n.update("header",m,h)}function d(m,h){m.value!==h&&(m.value=h)}function q({height:m}){d(r,m),i("size",m)}function k(m){v.value===!0&&d(a,!0),o("focusin",m)}C(()=>e.modelValue,m=>{i("space",m),d(a,!0),n.animate()}),C(c,m=>{i("offset",m)}),C(()=>e.reveal,m=>{m===!1&&d(a,e.modelValue)}),C(a,m=>{n.animate(),o("reveal",m)}),C(n.scroll,m=>{e.reveal===!0&&d(a,m.direction==="up"||m.position<=e.revealOffset||m.position-m.inflectionPoint<100)});const L={};return n.instances.header=L,e.modelValue===!0&&i("size",r.value),i("space",e.modelValue),i("offset",c.value),W(()=>{n.instances.header===L&&(n.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const m=Qe(l.default,[]);return e.elevated===!0&&m.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m.push(w(Z,{debounce:0,onResize:q})),w("header",{class:p.value,style:y.value,onFocusin:k},m)}}}),on=z({name:"QList",props:{...ce,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const o=R(),t=de(e,o.proxy.$q),n=b(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w(e.tag,{class:n.value},M(l.default))}}),{passive:He}=O,ln=["both","horizontal","vertical"],an=z({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ln.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,r;C(()=>e.scrollTarget,()=>{c(),f()});function a(){t!==null&&t();const p=Math.max(0,St(n)),y=Tt(n),i={top:p-o.position.top,left:y-o.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const d=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";o.position={top:p,left:y},o.directionChanged=o.direction!==d,o.delta=i,o.directionChanged===!0&&(o.direction=d,o.inflectionPoint=o.position),l("scroll",{...o})}function f(){n=Pe(r,e.scrollTarget),n.addEventListener("scroll",u,He),u(!0)}function c(){n!==void 0&&(n.removeEventListener("scroll",u,He),n=void 0)}function u(p){if(p===!0||e.debounce===0||e.debounce==="0")a();else if(t===null){const[y,i]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];t=()=>{i(y),t=null}}}const{proxy:v}=R();return C(()=>v.$q.lang.rtl,a),I(()=>{r=v.$el.parentNode,f()}),W(()=>{t!==null&&t(),c()}),Object.assign(v,{trigger:u,getPosition:()=>o}),Fe}}),bn=z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=T(null),r=T(t.screen.height),a=T(e.container===!0?0:t.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),u=T(fe.value===!0?0:X()),v=b(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=b(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=b(()=>u.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),i=b(()=>u.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function d(g){if(e.container===!0||document.qScrollPrevented!==!0){const s={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};f.value=s,e.onScroll!==void 0&&o("scroll",s)}}function q(g){const{height:s,width:x}=g;let S=!1;r.value!==s&&(S=!0,r.value=s,e.onScrollHeight!==void 0&&o("scrollHeight",s),L()),a.value!==x&&(S=!0,a.value=x),S===!0&&e.onResize!==void 0&&o("resize",g)}function k({height:g}){c.value!==g&&(c.value=g,L())}function L(){if(e.container===!0){const g=r.value>c.value?X():0;u.value!==g&&(u.value=g)}}let m=null;const h={instances:{},view:b(()=>e.view),isContainer:b(()=>e.container),rootRef:n,height:r,containerHeight:c,scrollbarWidth:u,totalWidth:b(()=>a.value+u.value),rows:b(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:N({size:0,offset:0,space:!1}),right:N({size:300,offset:0,space:!1}),footer:N({size:0,offset:0,space:!1}),left:N({size:300,offset:0,space:!1}),scroll:f,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,s,x){h[g][s]=x}};if(Me(U,h),X()>0){let x=function(){g=null,s.classList.remove("hide-scrollbar")},S=function(){if(g===null){if(s.scrollHeight>t.screen.height)return;s.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(x,300)},E=function(B){g!==null&&B==="remove"&&(clearTimeout(g),x()),window[`${B}EventListener`]("resize",S)},g=null;const s=document.body;C(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),$t(()=>{E("remove")})}return()=>{const g=We(l.default,[w(an,{onScroll:d}),w(Z,{onResize:q})]),s=w("div",{class:v.value,style:p.value,ref:e.container===!0?void 0:n,tabindex:-1},g);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:n},[w(Z,{onResize:k}),w("div",{class:"absolute-full",style:y.value},[w("div",{class:"scroll",style:i.value},[s])])]):s}}}),_n=z({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:o}}=R(),t=K(U,$);if(t===$)return console.error("QPage needs to be a deep child of QLayout"),$;if(K(Ve,$)===$)return console.error("QPage needs to be child of QPageContainer"),$;const r=b(()=>{const f=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const c=t.isContainer.value===!0?t.containerHeight.value:o.screen.height;return e.styleFn(f,c)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-f+"px":o.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":o.screen.height-f+"px"}}),a=b(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:a.value,style:r.value},M(l.default))}}),pn=z({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=R(),t=K(U,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;Me(Ve,!0);const n=b(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>w("div",{class:"q-page-container",style:n.value},M(l.default))}}),un=w("div",{class:"q-space"}),yn=z({name:"QSpace",setup(){return()=>un}}),xn=z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:o.value,role:"toolbar"},M(l.default))}}),wn=z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:o.value},M(l.default))}}),rn=""+new URL("logo_trf3.473a7b06.png",import.meta.url).href,sn={},cn=re("img",{src:rn,style:{height:"60px",width:"260px"}},null,-1),dn=[cn];function fn(e,l){return F(),j("div",{class:"row items-center cursor-pointer",onClick:l[0]||(l[0]=o=>("navigateTo"in e?e.navigateTo:Q(ue))("/"))},dn)}const qn=zt(sn,[["render",fn]]),vn=["src","alt"],Cn=Ae({__name:"CecalcBarraSuperiorMenu",setup(e){const l=Oe();async function o(t){t.url&&await ue(t.url,{open:{target:"_blank"}}),t.to&&ue(t.to)}return(t,n)=>{const r=Bt,a=Pt,f=Rt,c=nn,u=tn,v=en,p=on,y=Jt,i=Ft;return F(),Y(i,{flat:"",round:"",dense:"",icon:Q(Ht)},{default:H(()=>[P(y,{"auto-close":"",square:""},{default:H(()=>[P(p,{dense:"",padding:""},{default:H(()=>[(F(!0),j(Ce,null,Lt(Q(l).menu,(d,q)=>(F(),j(Ce,{key:`menu-item-${q}`},[d.separador?(F(),Y(r,{key:0,spaced:""})):(F(),Y(v,{key:1,clickable:"",dense:"","inset-level":0,onClick:k=>o(d)},{default:H(()=>[P(f,{size:"md",class:"q-mr-sm"},{default:H(()=>[d.icone?(F(),Y(a,{key:0,color:"grey-10",name:d.icone,size:"sm"},null,8,["name"])):d.imagem?(F(),j("img",{key:1,src:d.imagem,alt:d.rotulo,style:{width:"32px",height:"auto"}},null,8,vn)):Et("",!0)]),_:2},1024),P(u,null,{default:H(()=>[P(c,{class:"text-no-wrap"},{default:H(()=>[le(A(d.rotulo),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128)),P(r,{spaced:""}),P(v,{dense:""},{default:H(()=>[P(u,null,{default:H(()=>[P(c,{caption:""},{default:H(()=>[le(A(Q(l).nome),1)]),_:1})]),_:1}),P(u,{side:""},{default:H(()=>[P(c,{caption:""},{default:H(()=>[le(" Versão "+A(Q(l).versao),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["icon"])}}}),kn=Ae({__name:"CecalcBarraInferior",setup(e){const l=Oe();function o(){const n=new Date().getFullYear();return n===2023?n:`2023-${n}`}return(t,n)=>(F(),j("div",{class:Qt(["q-pa-sm text-caption text-weight-thin row justify-between items-center",`bg-${Q(l).corFundo} text-${Q(l).corTexto}`])},[re("div",null,"© "+A(o())+" "+A(Q(l).copyright),1),re("div",null,A(Q(l).contato),1)],2))}});export{an as Q,Jt as _,jt as a,wn as b,yn as c,xn as d,Z as e,on as f,Oe as g,Dt as h,tn as i,nn as j,en as k,qn as l,Cn as m,gn as n,_n as o,pn as p,kn as q,hn as r,bn as s,Nt as u};
