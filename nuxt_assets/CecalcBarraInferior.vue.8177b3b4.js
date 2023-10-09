import{bT as et,bU as tt,bV as nt,bW as I,u as ot,bX as lt,D as F,r as S,bo as Ee,a3 as pe,a9 as ie,b5 as ye,M as C,o as N,b as Q,b8 as at,bz as O,bY as xe,U as it,bZ as Y,B as E,I as ut,C as re,b_ as st,J as rt,c as b,E as ce,bj as ct,bk as dt,b$ as ft,L as vt,c0 as mt,c1 as ht,c2 as we,c3 as gt,b7 as bt,c4 as _t,by as He,c5 as pt,c6 as yt,e as w,F as W,T as xt,aa as wt,R as Be,c7 as de,b3 as Pe,H as qt,c8 as Ct,bx as Re,bm as j,bn as L,c9 as K,b0 as Fe,ca as kt,cb as Tt,a4 as Qe,cc as St,cd as We,_ as $t,j as M,k as X,ad as R,n as Me,l as ue,d as Ve,y as le,q as z,m as $,al as zt,am as Lt,ah as Et,s as U,t as A,ce as Ht,cf as Bt,Q as Pt,aV as Rt,N as Ft,av as Qt,ag as Wt}from"./entry.d53fcd3d.js";const Mt="@cecalc/tc",Vt="0.0.15",At=et({nome:Mt,titulo:"Cálculo Tempo de Contribuição",descricao:"Ferramenta criada pela CECALC (Justiça Federal de São Paulo) para cálculo de tempo de contribuição no RGPS.",versao:Vt,corFundo:"light-blue-10",corTexto:"white",documentos:{cnis:!1,carta:!1}}),Ot={},Dt=tt(At,nt,Ot);function Ae(){const e=ot();return e._appConfig||(e._appConfig=I(Dt)),e._appConfig}function It(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),lt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Nt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function jt({showing:e,avoidEmit:l,configureAnchorEl:o}){const{props:t,proxy:n,emit:s}=F(),a=S(null);let d=null;function c(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const u={};o===void 0&&(Object.assign(u,{hide(i){n.hide(i)},toggle(i){n.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Ee(i,13)===!0&&u.toggle(i)},contextClick(i){n.hide(i),pe(i),ie(()=>{n.show(i),i.qAnchorHandled=!0})},prevent:pe,mobileTouch(i){if(u.mobileCleanup(i),c(i)!==!0)return;n.hide(i),a.value.classList.add("non-selectable");const f=i.target;ye(u,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,n.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&i!==void 0&&It()}}),o=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let f;i===!0?n.$q.platform.is.mobile===!0?f=[[a.value,"touchstart","mobileTouch","passive"]]:f=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:f=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],ye(u,"anchor",f)});function v(){at(u,"anchor")}function p(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function y(){if(t.target===!1||t.target===""||n.$el.parentNode===null)a.value=null;else if(t.target===!0)p(n.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,o()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return C(()=>t.contextMenu,i=>{a.value!==null&&(v(),o(i))}),C(()=>t.target,()=>{a.value!==null&&v(),y()}),C(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?v():o())}),N(()=>{y(),l!==!0&&t.modelValue===!0&&a.value===null&&s("update:modelValue",!1)}),Q(()=>{d!==null&&clearTimeout(d),v()}),{anchorEl:a,canShow:c,anchorEvents:u}}function Kt(e,l){const o=S(null);let t;function n(d,c){const u=`${c!==void 0?"add":"remove"}EventListener`,v=c!==void 0?c:t;d!==window&&d[u]("scroll",v,O.passive),window[u]("scroll",v,O.passive),t=c}function s(){o.value!==null&&(n(o.value),o.value=null)}const a=C(()=>e.noParentEvent,()=>{o.value!==null&&(s(),l())});return Q(a),{localScrollTarget:o,unconfigureScrollTarget:s,changeScrollEvent:n}}const{notPassiveCapture:J}=O,V=[];function G(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let o=xe.length-1;for(;o>=0;){const t=xe[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=V.length-1;t>=0;t--){const n=V[t];if((n.anchorEl.value===null||n.anchorEl.value.contains(l)===!1)&&(l===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(l)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function Ut(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",G,J),document.addEventListener("touchstart",G,J))}function qe(e){const l=V.findIndex(o=>o===e);l>-1&&(V.splice(l,1),V.length===0&&(document.removeEventListener("mousedown",G,J),document.removeEventListener("touchstart",G,J)))}let Ce,ke;function Te(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Yt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const se={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{se[`${e}#ltr`]=e,se[`${e}#rtl`]=e});function Se(e,l){const o=e.split(" ");return{vertical:o[0],horizontal:se[`${o[1]}#${l===!0?"rtl":"ltr"}`]}}function Xt(e,l){let{top:o,left:t,right:n,bottom:s,width:a,height:d}=e.getBoundingClientRect();return l!==void 0&&(o-=l[1],t-=l[0],s+=l[1],n+=l[0],a+=l[0],d+=l[1]),{top:o,bottom:s,height:d,left:t,right:n,width:a,middle:t+(n-t)/2,center:o+(s-o)/2}}function Jt(e,l,o){let{top:t,left:n}=e.getBoundingClientRect();return t+=l.top,n+=l.left,o!==void 0&&(t+=o[1],n+=o[0]),{top:t,bottom:t+1,height:1,left:n,right:n+1,width:1,middle:n,center:t}}function Gt(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function $e(e,l,o,t){return{top:e[o.vertical]-l[t.vertical],left:e[o.horizontal]-l[t.horizontal]}}function Oe(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Oe(e,l+1)},10);return}const{targetEl:o,offset:t,anchorEl:n,anchorOrigin:s,selfOrigin:a,absoluteOffset:d,fit:c,cover:u,maxHeight:v,maxWidth:p}=e;if(it.is.ios===!0&&window.visualViewport!==void 0){const x=document.body.style,{offsetLeft:T,offsetTop:B}=window.visualViewport;T!==Ce&&(x.setProperty("--q-pe-left",T+"px"),Ce=T),B!==ke&&(x.setProperty("--q-pe-top",B+"px"),ke=B)}const{scrollLeft:y,scrollTop:i}=o,f=d===void 0?Xt(n,u===!0?[0,0]:t):Jt(n,d,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:v||"100vh",visibility:"visible"});const{offsetWidth:q,offsetHeight:k}=o,{elWidth:H,elHeight:m}=c===!0||u===!0?{elWidth:Math.max(f.width,q),elHeight:u===!0?Math.max(f.height,k):k}:{elWidth:q,elHeight:k};let h={maxWidth:p,maxHeight:v};(c===!0||u===!0)&&(h.minWidth=f.width+"px",u===!0&&(h.minHeight=f.height+"px")),Object.assign(o.style,h);const g=Gt(H,m);let r=$e(f,g,s,a);if(d===void 0||t===void 0)ae(r,f,g,s,a);else{const{top:x,left:T}=r;ae(r,f,g,s,a);let B=!1;if(r.top!==x){B=!0;const P=2*t[1];f.center=f.top-=P,f.bottom-=P+2}if(r.left!==T){B=!0;const P=2*t[0];f.middle=f.left-=P,f.right-=P+2}B===!0&&(r=$e(f,g,s,a),ae(r,f,g,s,a))}h={top:r.top+"px",left:r.left+"px"},r.maxHeight!==void 0&&(h.maxHeight=r.maxHeight+"px",f.height>r.maxHeight&&(h.minHeight=h.maxHeight)),r.maxWidth!==void 0&&(h.maxWidth=r.maxWidth+"px",f.width>r.maxWidth&&(h.minWidth=h.maxWidth)),Object.assign(o.style,h),o.scrollTop!==i&&(o.scrollTop=i),o.scrollLeft!==y&&(o.scrollLeft=y)}function ae(e,l,o,t,n){const s=o.bottom,a=o.right,d=Y(),c=window.innerHeight-d,u=document.body.clientWidth;if(e.top<0||e.top+s>c)if(n.vertical==="center")e.top=l[t.vertical]>c/2?Math.max(0,c-s):0,e.maxHeight=Math.min(s,c);else if(l[t.vertical]>c/2){const v=Math.min(c,t.vertical==="center"?l.center:t.vertical===n.vertical?l.bottom:l.top);e.maxHeight=Math.min(s,v),e.top=Math.max(0,v-s)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===n.vertical?l.top:l.bottom),e.maxHeight=Math.min(s,c-e.top);if(e.left<0||e.left+a>u)if(e.maxWidth=Math.min(a,u),n.horizontal==="middle")e.left=l[t.horizontal]>u/2?Math.max(0,u-a):0;else if(l[t.horizontal]>u/2){const v=Math.min(u,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.right:l.left);e.maxWidth=Math.min(a,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.left:l.right),e.maxWidth=Math.min(a,u-e.left)}const Zt=E({name:"QMenu",inheritAttrs:!1,props:{...Nt,...ut,...re,...st,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Te},self:{type:String,validator:Te},offset:{type:Array,validator:Yt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...rt,"click","escapeKey"],setup(e,{slots:l,emit:o,attrs:t}){let n=null,s,a,d;const c=F(),{proxy:u}=c,{$q:v}=u,p=S(null),y=S(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=ce(e,v),{registerTick:q,removeTick:k}=ct(),{registerTimeout:H}=dt(),{transitionProps:m,transitionStyle:h}=ft(e),{localScrollTarget:g,changeScrollEvent:r,unconfigureScrollTarget:x}=Kt(e,be),{anchorEl:T,canShow:B}=jt({showing:y}),{hide:P}=vt({showing:y,canShow:B,handleShow:Ue,handleHide:Ye,hideOnRouteChange:i,processOnMount:!0}),{showPortal:fe,hidePortal:ve,renderPortal:Ie}=mt(c,p,Je,"menu"),ee={anchorEl:T,innerRef:p,onClickOutside(_){if(e.persistent!==!0&&y.value===!0)return P(_),(_.type==="touchstart"||_.target.classList.contains("q-dialog__backdrop"))&&Be(_),!0}},me=b(()=>Se(e.anchor||(e.cover===!0?"center middle":"bottom start"),v.lang.rtl)),Ne=b(()=>e.cover===!0?me.value:Se(e.self||"top start",v.lang.rtl)),je=b(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),Ke=b(()=>e.autoClose===!0?{onClick:Xe}:{}),he=b(()=>y.value===!0&&e.persistent!==!0);C(he,_=>{_===!0?(ht(ne),Ut(ee)):(we(ne),qe(ee))});function te(){wt(()=>{let _=p.value;_&&_.contains(document.activeElement)!==!0&&(_=_.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||_.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||_.querySelector("[autofocus], [data-autofocus]")||_,_.focus({preventScroll:!0}))})}function Ue(_){if(n=e.noRefocus===!1?document.activeElement:null,gt(_e),fe(),be(),s=void 0,_!==void 0&&(e.touchPosition||e.contextMenu)){const oe=bt(_);if(oe.left!==void 0){const{top:Ge,left:Ze}=T.value.getBoundingClientRect();s={left:oe.left-Ze,top:oe.top-Ge}}}a===void 0&&(a=C(()=>v.screen.width+"|"+v.screen.height+"|"+e.self+"|"+e.anchor+"|"+v.lang.rtl,D)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{D(),e.noFocus!==!0&&te()}),H(()=>{v.platform.is.ios===!0&&(d=e.autoClose,p.value.click()),D(),fe(!0),o("show",_)},e.transitionDuration)}function Ye(_){k(),ve(),ge(!0),n!==null&&(_===void 0||_.qClickOutside!==!0)&&(((_&&_.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),H(()=>{ve(!0),o("hide",_)},e.transitionDuration)}function ge(_){s=void 0,a!==void 0&&(a(),a=void 0),(_===!0||y.value===!0)&&(_t(_e),x(),qe(ee),we(ne)),_!==!0&&(n=null)}function be(){(T.value!==null||e.scrollTarget!==void 0)&&(g.value=He(T.value,e.scrollTarget),r(g.value,D))}function Xe(_){d!==!0?(pt(u,_),o("click",_)):d=!1}function _e(_){he.value===!0&&e.noFocus!==!0&&yt(p.value,_.target)!==!0&&te()}function ne(_){o("escapeKey"),P(_)}function D(){Oe({targetEl:p.value,offset:e.offset,anchorEl:T.value,anchorOrigin:me.value,selfOrigin:Ne.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Je(){return w(xt,m.value,()=>y.value===!0?w("div",{role:"menu",...t,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+je.value,t.class],style:[t.style,h.value],...Ke.value},W(l.default)):null)}return Q(ge),Object.assign(u,{focus:te,updatePosition:D}),Ie}});function en(){const e=S(!de.value);return e.value===!1&&N(()=>{e.value=!0}),e}const De=typeof ResizeObserver<"u",ze=De===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Z=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,t,n={width:-1,height:-1};function s(c){c===!0||e.debounce===0||e.debounce==="0"?a():o===null&&(o=setTimeout(a,e.debounce))}function a(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:c,offsetHeight:u}=t;(c!==n.width||u!==n.height)&&(n={width:c,height:u},l("resize",n))}}const{proxy:d}=F();if(De===!0){let c;const u=v=>{t=d.$el.parentNode,t?(c=new ResizeObserver(s),c.observe(t),a()):v!==!0&&ie(()=>{u(!0)})};return N(()=>{u()}),Q(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():t&&c.unobserve(t))}),Pe}else{let v=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",s,O.passive),u=void 0)},p=function(){v(),t&&t.contentDocument&&(u=t.contentDocument.defaultView,u.addEventListener("resize",s,O.passive),a())};const c=en();let u;return N(()=>{ie(()=>{t=d.$el,t&&p()})}),Q(v),d.trigger=s,()=>{if(c.value===!0)return w("object",{style:ze.style,tabindex:-1,type:"text/html",data:ze.url,"aria-hidden":"true",onLoad:p})}}}}),tn=E({name:"QItem",props:{...re,...qt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=F(),n=ce(e,t),{hasLink:s,linkAttrs:a,linkClass:d,linkTag:c,navigateOnClick:u}=Ct(),v=S(null),p=S(null),y=b(()=>e.clickable===!0||s.value===!0||e.tag==="label"),i=b(()=>e.disable!==!0&&y.value===!0),f=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=b(()=>e.insetLevel===void 0?null:{["padding"+(t.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function k(h){i.value===!0&&(p.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===v.value?p.value.focus():document.activeElement===p.value&&v.value.focus()),u(h))}function H(h){if(i.value===!0&&Ee(h,13)===!0){Be(h),h.qKeyEvent=!0;const g=new MouseEvent("click",h);g.qKeyEvent=!0,v.value.dispatchEvent(g)}o("keyup",h)}function m(){const h=Re(l.default,[]);return i.value===!0&&h.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:p})),h}return()=>{const h={ref:v,class:f.value,style:q.value,role:"listitem",onClick:k,onKeyup:H};return i.value===!0?(h.tabindex=e.tabindex||"0",Object.assign(h,a.value)):y.value===!0&&(h["aria-disabled"]="true"),w(c.value,h,m())}}}),nn=E({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:o.value},W(l.default))}}),on=E({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const o=b(()=>parseInt(e.lines,10)),t=b(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),n=b(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>w("div",{style:n.value,class:t.value},W(l.default))}}),gn=E({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=F(),n=j(K,L);if(n===L)return console.error("QFooter needs to be child of QLayout"),L;const s=S(parseInt(e.heightHint,10)),a=S(!0),d=S(de.value===!0||n.isContainer.value===!0?0:window.innerHeight),c=b(()=>e.reveal===!0||n.view.value.indexOf("F")>-1||t.platform.is.ios&&n.isContainer.value===!0),u=b(()=>n.isContainer.value===!0?n.containerHeight.value:d.value),v=b(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return a.value===!0?s.value:0;const r=n.scroll.value.position+u.value+s.value-n.height.value;return r>0?r:0}),p=b(()=>e.modelValue!==!0||c.value===!0&&a.value!==!0),y=b(()=>e.modelValue===!0&&p.value===!0&&e.reveal===!0),i=b(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(p.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),f=b(()=>{const r=n.rows.value.bottom,x={};return r[0]==="l"&&n.left.space===!0&&(x[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),r[2]==="r"&&n.right.space===!0&&(x[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),x});function q(r,x){n.update("footer",r,x)}function k(r,x){r.value!==x&&(r.value=x)}function H({height:r}){k(s,r),q("size",r)}function m(){if(e.reveal!==!0)return;const{direction:r,position:x,inflectionPoint:T}=n.scroll.value;k(a,r==="up"||x-T<100||n.height.value-u.value-x-s.value<300)}function h(r){y.value===!0&&k(a,!0),o("focusin",r)}C(()=>e.modelValue,r=>{q("space",r),k(a,!0),n.animate()}),C(v,r=>{q("offset",r)}),C(()=>e.reveal,r=>{r===!1&&k(a,e.modelValue)}),C(a,r=>{n.animate(),o("reveal",r)}),C([s,n.scroll,n.height],m),C(()=>t.screen.height,r=>{n.isContainer.value!==!0&&k(d,r)});const g={};return n.instances.footer=g,e.modelValue===!0&&q("size",s.value),q("space",e.modelValue),q("offset",v.value),Q(()=>{n.instances.footer===g&&(n.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const r=Fe(l.default,[w(Z,{debounce:0,onResize:H})]);return e.elevated===!0&&r.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:i.value,style:f.value,onFocusin:h},r)}}}),bn=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=F(),n=j(K,L);if(n===L)return console.error("QHeader needs to be child of QLayout"),L;const s=S(parseInt(e.heightHint,10)),a=S(!0),d=b(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||t.platform.is.ios&&n.isContainer.value===!0),c=b(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return a.value===!0?s.value:0;const m=s.value-n.scroll.value.position;return m>0?m:0}),u=b(()=>e.modelValue!==!0||d.value===!0&&a.value!==!0),v=b(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),p=b(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=b(()=>{const m=n.rows.value.top,h={};return m[0]==="l"&&n.left.space===!0&&(h[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),m[2]==="r"&&n.right.space===!0&&(h[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),h});function i(m,h){n.update("header",m,h)}function f(m,h){m.value!==h&&(m.value=h)}function q({height:m}){f(s,m),i("size",m)}function k(m){v.value===!0&&f(a,!0),o("focusin",m)}C(()=>e.modelValue,m=>{i("space",m),f(a,!0),n.animate()}),C(c,m=>{i("offset",m)}),C(()=>e.reveal,m=>{m===!1&&f(a,e.modelValue)}),C(a,m=>{n.animate(),o("reveal",m)}),C(n.scroll,m=>{e.reveal===!0&&f(a,m.direction==="up"||m.position<=e.revealOffset||m.position-m.inflectionPoint<100)});const H={};return n.instances.header=H,e.modelValue===!0&&i("size",s.value),i("space",e.modelValue),i("offset",c.value),Q(()=>{n.instances.header===H&&(n.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const m=Re(l.default,[]);return e.elevated===!0&&m.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m.push(w(Z,{debounce:0,onResize:q})),w("header",{class:p.value,style:y.value,onFocusin:k},m)}}}),ln=E({name:"QList",props:{...re,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const o=F(),t=ce(e,o.proxy.$q),n=b(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w(e.tag,{class:n.value},W(l.default))}}),{passive:Le}=O,an=["both","horizontal","vertical"],un=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>an.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,s;C(()=>e.scrollTarget,()=>{c(),d()});function a(){t!==null&&t();const p=Math.max(0,kt(n)),y=Tt(n),i={top:p-o.position.top,left:y-o.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const f=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";o.position={top:p,left:y},o.directionChanged=o.direction!==f,o.delta=i,o.directionChanged===!0&&(o.direction=f,o.inflectionPoint=o.position),l("scroll",{...o})}function d(){n=He(s,e.scrollTarget),n.addEventListener("scroll",u,Le),u(!0)}function c(){n!==void 0&&(n.removeEventListener("scroll",u,Le),n=void 0)}function u(p){if(p===!0||e.debounce===0||e.debounce==="0")a();else if(t===null){const[y,i]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];t=()=>{i(y),t=null}}}const{proxy:v}=F();return C(()=>v.$q.lang.rtl,a),N(()=>{s=v.$el.parentNode,d()}),Q(()=>{t!==null&&t(),c()}),Object.assign(v,{trigger:u,getPosition:()=>o}),Pe}}),_n=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=F(),n=S(null),s=S(t.screen.height),a=S(e.container===!0?0:t.screen.width),d=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),u=S(de.value===!0?0:Y()),v=b(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=b(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=b(()=>u.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),i=b(()=>u.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function f(g){if(e.container===!0||document.qScrollPrevented!==!0){const r={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};d.value=r,e.onScroll!==void 0&&o("scroll",r)}}function q(g){const{height:r,width:x}=g;let T=!1;s.value!==r&&(T=!0,s.value=r,e.onScrollHeight!==void 0&&o("scrollHeight",r),H()),a.value!==x&&(T=!0,a.value=x),T===!0&&e.onResize!==void 0&&o("resize",g)}function k({height:g}){c.value!==g&&(c.value=g,H())}function H(){if(e.container===!0){const g=s.value>c.value?Y():0;u.value!==g&&(u.value=g)}}let m=null;const h={instances:{},view:b(()=>e.view),isContainer:b(()=>e.container),rootRef:n,height:s,containerHeight:c,scrollbarWidth:u,totalWidth:b(()=>a.value+u.value),rows:b(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:I({size:0,offset:0,space:!1}),right:I({size:300,offset:0,space:!1}),footer:I({size:0,offset:0,space:!1}),left:I({size:300,offset:0,space:!1}),scroll:d,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,r,x){h[g][r]=x}};if(Qe(K,h),Y()>0){let x=function(){g=null,r.classList.remove("hide-scrollbar")},T=function(){if(g===null){if(r.scrollHeight>t.screen.height)return;r.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(x,300)},B=function(P){g!==null&&P==="remove"&&(clearTimeout(g),x()),window[`${P}EventListener`]("resize",T)},g=null;const r=document.body;C(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),St(()=>{B("remove")})}return()=>{const g=Fe(l.default,[w(un,{onScroll:f}),w(Z,{onResize:q})]),r=w("div",{class:v.value,style:p.value,ref:e.container===!0?void 0:n,tabindex:-1},g);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:n},[w(Z,{onResize:k}),w("div",{class:"absolute-full",style:y.value},[w("div",{class:"scroll",style:i.value},[r])])]):r}}}),pn=E({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:o}}=F(),t=j(K,L);if(t===L)return console.error("QPage needs to be a deep child of QLayout"),L;if(j(We,L)===L)return console.error("QPage needs to be child of QPageContainer"),L;const s=b(()=>{const d=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const c=t.isContainer.value===!0?t.containerHeight.value:o.screen.height;return e.styleFn(d,c)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-d+"px":o.screen.height===0?d!==0?`calc(100vh - ${d}px)`:"100vh":o.screen.height-d+"px"}}),a=b(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:a.value,style:s.value},W(l.default))}}),yn=E({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=F(),t=j(K,L);if(t===L)return console.error("QPageContainer needs to be child of QLayout"),L;Qe(We,!0);const n=b(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>w("div",{class:"q-page-container",style:n.value},W(l.default))}}),sn=w("div",{class:"q-space"}),xn=E({name:"QSpace",setup(){return()=>sn}}),wn=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:o.value,role:"toolbar"},W(l.default))}}),qn=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:o.value},W(l.default))}}),rn=""+new URL("logo_trf3.473a7b06.png",import.meta.url).href,cn={},dn=ue("img",{src:rn,style:{height:"60px",width:"260px"}},null,-1),fn=[dn];function vn(e,l){return M(),X("div",{class:"row items-center cursor-pointer",onClick:l[0]||(l[0]=o=>("navigateTo"in e?e.navigateTo:R(Me))("/"))},fn)}const Cn=$t(cn,[["render",vn]]),mn=["src","alt"],kn=Ve({__name:"CecalcBarraSuperiorMenu",setup(e){const l=Ae();function o(t){t.url&&window.open(t.url,"_blank")}return(t,n)=>{const s=Pt,a=Rt,d=on,c=nn,u=tn,v=Ft,p=ln,y=Zt,i=Qt;return M(),le(i,{flat:"",round:"",dense:"",icon:R(Bt)},{default:z(()=>[$(y,{"auto-close":"",square:""},{default:z(()=>[$(p,{dense:"",padding:""},{default:z(()=>[(M(!0),X(zt,null,Lt(R(l).menu,(f,q)=>(M(),le(u,{key:`menu-item-${q}`,clickable:"",dense:"","inset-level":0,onClick:k=>o(f)},{default:z(()=>[$(a,{size:"md",class:"q-mr-sm"},{default:z(()=>[f.icone?(M(),le(s,{key:0,color:"grey-10",name:f.icone,size:"sm"},null,8,["name"])):f.imagem?(M(),X("img",{key:1,src:f.imagem,alt:f.rotulo,style:{width:"32px",height:"auto"}},null,8,mn)):Et("",!0)]),_:2},1024),$(c,null,{default:z(()=>[$(d,{class:"text-no-wrap"},{default:z(()=>[U(A(f.rotulo),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),$(v,{spaced:""}),$(u,{clickable:"",dense:"","inset-level":0,onClick:n[0]||(n[0]=f=>("navigateTo"in t?t.navigateTo:R(Me))("/sobre"))},{default:z(()=>[$(a,{size:"md",class:"q-mr-sm"},{default:z(()=>[$(s,{color:"grey-10",name:"mdiRobotIndustrial"in t?t.mdiRobotIndustrial:R(Ht),size:"sm"},null,8,["name"])]),_:1}),$(c,null,{default:z(()=>[$(d,{class:"text-no-wrap"},{default:z(()=>[U(" Sobre a Fábrica de Cálculos ")]),_:1})]),_:1})]),_:1}),$(v,{spaced:""}),$(u,{dense:""},{default:z(()=>[$(c,null,{default:z(()=>[$(d,{caption:""},{default:z(()=>[U(A(R(l).nome),1)]),_:1})]),_:1}),$(c,{side:""},{default:z(()=>[$(d,{caption:""},{default:z(()=>[U(" Versão "+A(R(l).versao),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["icon"])}}}),Tn=Ve({__name:"CecalcBarraInferior",setup(e){const l=Ae();function o(){const n=new Date().getFullYear();return n===2023?n:`2023-${n}`}return(t,n)=>(M(),X("div",{class:Wt(["q-pa-sm text-caption text-weight-thin row justify-between items-center",`bg-${R(l).corFundo} text-${R(l).corTexto}`])},[ue("div",null,"© "+A(o())+" "+A(R(l).copyright),1),ue("div",null,A(R(l).contato),1)],2))}});export{un as Q,tn as _,on as a,nn as b,jt as c,Zt as d,Z as e,ln as f,qn as g,xn as h,wn as i,Ae as j,It as k,Cn as l,kn as m,bn as n,pn as o,yn as p,Tn as q,gn as r,_n as s,Nt as u};
