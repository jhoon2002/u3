import{aC as x,aD as b,D as y,aE as S,X as L,G as M,U as T,E as C,aF as U}from"./vendor.4cb171fe.js";const W=[null,document,document.body,document.scrollingElement,document.documentElement];function P(e,t){let l=x(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return W.includes(l)?window:l}function A(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function R(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let a;function D(){if(a!==void 0)return a;const e=document.createElement("p"),t=document.createElement("div");b(e,{width:"100%",height:"200px"}),b(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let u=e.offsetWidth;return l===u&&(u=t.clientWidth),t.remove(),a=l-u,a}function N(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const O={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},X=["before-show","show","before-hide","hide"];function z({showing:e,canShow:t,hideOnRouteChange:l,handleShow:u,handleHide:c,processOnMount:V}){const f=M(),{props:i,emit:n,proxy:m}=f;let s;function E(o){e.value===!0?d(o):p(o)}function p(o){if(i.disable===!0||o!==void 0&&o.qAnchorHandled===!0||t!==void 0&&t(o)!==!0)return;const r=i["onUpdate:modelValue"]!==void 0;r===!0&&(n("update:modelValue",!0),s=o,T(()=>{s===o&&(s=void 0)})),(i.modelValue===null||r===!1)&&w(o)}function w(o){e.value!==!0&&(e.value=!0,n("before-show",o),u!==void 0?u(o):n("show",o))}function d(o){if(i.disable===!0)return;const r=i["onUpdate:modelValue"]!==void 0;r===!0&&(n("update:modelValue",!1),s=o,T(()=>{s===o&&(s=void 0)})),(i.modelValue===null||r===!1)&&g(o)}function g(o){e.value!==!1&&(e.value=!1,n("before-hide",o),c!==void 0?c(o):n("hide",o))}function v(o){i.disable===!0&&o===!0?i["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!1):o===!0!==e.value&&(o===!0?w:g)(s)}y(()=>i.modelValue,v),l!==void 0&&S(f)===!0&&y(()=>m.$route.fullPath,()=>{l.value===!0&&e.value===!0&&d()}),V===!0&&L(()=>{v(i.modelValue)});const h={show:p,hide:d,toggle:E};return Object.assign(m,h),h}function B(){let e;return C(()=>{clearTimeout(e)}),{registerTimeout(t,l){clearTimeout(e),e=setTimeout(t,l)},removeTimeout(){clearTimeout(e)}}}function F(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),U.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{X as a,B as b,F as c,z as d,A as e,R as f,P as g,D as h,N as i,O as u};