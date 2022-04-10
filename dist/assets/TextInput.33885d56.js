var $e=Object.defineProperty,Ae=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var fe=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))Ee.call(t,n)&&fe(e,n,t[n]);if(ce)for(var n of ce(t))Oe.call(t,n)&&fe(e,n,t[n]);return e},U=(e,t)=>Ae(e,Be(t));import{D as P,E as ae,n as Ie,G as W,H as Te,I as Pe,J as Se,K as Ne,L as p,M as y,O as je,t as T,P as ze,R as De,S as Le,T as Ue,U as H,V as Ze,W as Ke,X as de,Y as He,Z as X,_ as Y,A as re,$ as Qe,a0 as We,a1 as Je,a2 as ve,o as oe,c as we,a3 as Xe,a4 as Ye,r as me,u as Ge,w as ge,x as ne,a5 as et,a6 as tt,a7 as at,a8 as lt}from"./vendor.4cb171fe.js";import{u as nt,a as rt}from"./use-dark.623bc183.js";import{b as ot,u as ut}from"./uid.e5299cc4.js";import{_ as Me}from"./index.db228bf9.js";function it({validate:e,resetValidation:t,requiresQForm:n}){const u=Ie(Te,!1);if(u!==!1){const{props:f,proxy:g}=W();Object.assign(g,{validate:e,resetValidation:t}),P(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(g)):u.bindComponent(g)}),f.disable!==!0&&u.bindComponent(g),ae(()=>{f.disable!==!0&&u.unbindComponent(g)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const he=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,pe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,be=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,G=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ye={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),hexColor:e=>he.test(e),hexaColor:e=>pe.test(e),hexOrHexaColor:e=>be.test(e),rgbColor:e=>G.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>G.test(e)||ee.test(e),hexOrRgbColor:e=>he.test(e)||G.test(e),hexaOrRgbaColor:e=>pe.test(e)||ee.test(e),anyColor:e=>be.test(e)||G.test(e)||ee.test(e)},st=U(V({},Pe),{min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean}),ue=50,qe=2*ue,Re=qe*Math.PI,dt=Math.round(Re*1e3)/1e3;Se({name:"QCircularProgress",props:U(V({},st),{value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean}),setup(e,{slots:t}){const{proxy:{$q:n}}=W(),u=Ne(e),f=p(()=>{const M=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),g=p(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),v=p(()=>qe/(1-e.thickness/2)),C=p(()=>`${v.value/2} ${v.value/2} ${v.value} ${v.value}`),k=p(()=>ot(e.value,e.min,e.max)),b=p(()=>Re*(1-(k.value-e.min)/(e.max-e.min))),R=p(()=>e.thickness/2*v.value);function _({thickness:M,offset:A,color:B,cls:D}){return y("circle",{class:"q-circular-progress__"+D+(B!==void 0?` text-${B}`:""),style:g.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":dt,"stroke-dashoffset":A,cx:v.value,cy:v.value,r:ue})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(y("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ue-R.value/2,cx:v.value,cy:v.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(_({cls:"track",thickness:R.value,offset:0,color:e.trackColor})),M.push(_({cls:"circle",thickness:R.value,offset:b.value,color:e.color}));const A=[y("svg",{class:"q-circular-progress__svg",style:f.value,viewBox:C.value,"aria-hidden":"true"},M)];return e.showValue===!0&&A.push(y("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[y("div",k.value)])),y("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:u.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:k.value},je(t.internal,A))}}});const ct=["rejected"],ft=[...ct,"start","finish","added","removed"],vt=()=>!0;function mt(e){const t={};return e.forEach(n=>{t[n]=vt}),t}mt(ft);const gt=[!0,!1,"ondemand"],ht={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>gt.includes(e)}};function pt(e,t){const{props:n,proxy:u}=W(),f=T(!1),g=T(null),v=T(null);it({validate:B,resetValidation:A});let C=0,k;const b=p(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),R=p(()=>n.disable!==!0&&b.value===!0),_=p(()=>n.error===!0||f.value===!0),M=p(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:g.value);P(()=>n.modelValue,()=>{D()}),P(()=>n.reactiveRules,I=>{I===!0?k===void 0&&(k=P(()=>n.rules,()=>{D(!0)})):k!==void 0&&(k(),k=void 0)},{immediate:!0}),P(e,I=>{I===!0?v.value===null&&(v.value=!1):v.value===!1&&(v.value=!0,R.value===!0&&n.lazyRules!=="ondemand"&&t.value===!1&&F())});function A(){C++,t.value=!1,v.value=null,f.value=!1,g.value=null,F.cancel()}function B(I=n.modelValue){if(R.value!==!0)return!0;const N=++C;t.value!==!0&&n.lazyRules!==!0&&(v.value=!0);const O=(q,l)=>{f.value!==q&&(f.value=q);const r=l||void 0;g.value!==r&&(g.value=r),t.value=!1},E=[];for(let q=0;q<n.rules.length;q++){const l=n.rules[q];let r;if(typeof l=="function"?r=l(I):typeof l=="string"&&ye[l]!==void 0&&(r=ye[l](I)),r===!1||typeof r=="string")return O(!0,r),!1;r!==!0&&r!==void 0&&E.push(r)}return E.length===0?(O(!1),!0):(t.value=!0,Promise.all(E).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return N===C&&O(!1),!0;const l=q.find(r=>r===!1||typeof r=="string");return N===C&&O(l!==void 0,l),l===void 0},q=>(N===C&&(console.error(q),O(!0)),!1)))}function D(I){R.value===!0&&n.lazyRules!=="ondemand"&&(v.value===!0||n.lazyRules!==!0&&I!==!0)&&F()}const F=ze(B,0);return ae(()=>{k!==void 0&&k(),F.cancel()}),Object.assign(u,{resetValidation:A,validate:B}),De(u,"hasError",()=>_.value),{isDirtyModel:v,hasRules:b,hasError:_,errorMessage:M,validate:B,resetValidation:A}}const ke=/^on[A-Z]/;function bt(e,t){const n={listeners:T({}),attributes:T({})};function u(){const f={},g={};for(const v in e)v!=="class"&&v!=="style"&&ke.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)ke.test(v)===!0&&(g[v]=t.props[v]);n.attributes.value=f,n.listeners.value=g}return Le(u),u(),n}let Q=[],J=[];function _e(e){J=J.filter(t=>t!==e)}function Kt(e){_e(e),J.push(e)}function Ht(e){_e(e),J.length===0&&Q.length>0&&(Q[Q.length-1](),Q=[])}function Fe(e){J.length===0?e():Q.push(e)}function yt(e){Q=Q.filter(t=>t!==e)}function ie(e){return e===void 0?`f_${ut()}`:e}function se(e){return e!=null&&(""+e).length>0}const kt=U(V(V({},nt),ht),{label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]}),xt=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function Ct(){const{props:e,attrs:t,proxy:n,vnode:u}=W();return{isDark:rt(e,n.$q),editable:p(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:T(!1),focused:T(!1),hasPopupOpen:!1,splitAttrs:bt(t,u),targetUid:T(ie(e.for)),rootRef:T(null),targetRef:T(null),controlRef:T(null)}}function St(e){const{props:t,emit:n,slots:u,attrs:f,proxy:g}=W(),{$q:v}=g;let C;e.hasValue===void 0&&(e.hasValue=p(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=a=>{n("update:modelValue",a)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:d}),Object.assign(e,{clearValue:i,onControlFocusin:s,onControlFocusout:d,focus:r}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const a=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return a+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:k,hasRules:b,hasError:R,errorMessage:_,resetValidation:M}=pt(e.focused,e.innerLoading),A=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=p(()=>t.bottomSlots===!0||t.hint!==void 0||b.value===!0||t.counter===!0||t.error!==null),D=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),F=p(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(A.value===!0?" q-field--float":"")+(N.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(R.value===!0?" q-field--error":"")+(R.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),I=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(R.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),N=p(()=>t.labelSlot===!0||t.label!==void 0),O=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&R.value!==!0?` text-${t.labelColor}`:"")),E=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:A.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=p(()=>{const a={for:e.targetUid.value};return t.disable===!0?a["aria-disabled"]="true":t.readonly===!0&&(a["aria-readonly"]="true"),a});P(()=>t.for,a=>{e.targetUid.value=ie(a)});function l(){const a=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(a===null||a.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==a&&m.focus({preventScroll:!0}))}function r(){Fe(l)}function c(){yt(l);const a=document.activeElement;a!==null&&e.rootRef.value.contains(a)&&a.blur()}function s(a){clearTimeout(C),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",a))}function d(a,m){clearTimeout(C),C=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,n("blur",a)),m!==void 0&&m())})}function i(a){Ue(a),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),H(()=>{M(),v.platform.is.mobile!==!0&&(k.value=!1)})}function x(){const a=[];return u.prepend!==void 0&&a.push(y("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},u.prepend())),a.push(y("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),R.value===!0&&t.noErrorIcon===!1&&a.push(j("error",[y(re,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?a.push(j("inner-loading-append",u.loading!==void 0?u.loading():[y(Qe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&a.push(j("inner-clearable-append",[y(re,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),u.append!==void 0&&a.push(y("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},u.append())),e.getInnerAppend!==void 0&&a.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&a.push(e.getControlChild()),a}function h(){const a=[];return t.prefix!==void 0&&t.prefix!==null&&a.push(y("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&a.push(e.getShadowControl()),e.getControl!==void 0?a.push(e.getControl()):u.rawControl!==void 0?a.push(u.rawControl()):u.control!==void 0&&a.push(y("div",U(V({ref:e.targetRef,class:"q-field__native row"},e.splitAttrs.attributes.value),{"data-autofocus":t.autofocus===!0||void 0}),u.control(E.value))),N.value===!0&&a.push(y("div",{class:O.value},Y(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&a.push(y("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),a.concat(Y(u.default))}function S(){let a,m;R.value===!0?_.value!==null?(a=[y("div",{role:"alert"},_.value)],m=`q--slot-error-${_.value}`):(a=Y(u.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(a=[y("div",t.hint)],m=`q--slot-hint-${t.hint}`):(a=Y(u.hint),m="q--slot-hint"));const o=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&o===!1&&a===void 0)return;const w=y("div",{key:m,class:"q-field__messages col"},a);return y("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?w:y(We,{name:"q-transition--field-message"},()=>w),o===!0?y("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function j(a,m){return m===null?null:y("div",{key:a,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}Object.assign(g,{focus:r,blur:c});let L=!1;return Ze(()=>{L=!0}),Ke(()=>{L===!0&&t.autofocus===!0&&g.focus()}),de(()=>{He.value===!0&&t.for===void 0&&(e.targetUid.value=ie()),t.autofocus===!0&&g.focus()}),ae(()=>{clearTimeout(C)}),function(){const m=e.getControl===void 0&&u.control===void 0?V(U(V({},e.splitAttrs.attributes.value),{"data-autofocus":t.autofocus}),q.value):q.value;return y("label",V({ref:e.rootRef,class:[F.value,f.class],style:f.style},m),[u.before!==void 0?y("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},u.before()):null,y("div",{class:"q-field__inner relative-position col self-stretch"},[y("div",V({ref:e.controlRef,class:I.value,tabindex:-1},e.controlEvents),x()),B.value===!0?S():null]),u.after!==void 0?y("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},u.after()):null])}}const xe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ve=Object.keys(te);Ve.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const wt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ve.join("")+"])|(.)","g"),Ce=/[.*+?^${}()|[\]\\]/g,$=String.fromCharCode(1),Mt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function qt(e,t,n,u){let f,g,v,C;const k=T(null),b=T(_());function R(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,A),P(()=>e.mask,l=>{if(l!==void 0)B(b.value,!0);else{const r=E(b.value);A(),e.modelValue!==r&&t("update:modelValue",r)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{k.value===!0&&B(b.value,!0)}),P(()=>e.unmaskedValue,()=>{k.value===!0&&B(b.value)});function _(){if(A(),k.value===!0){const l=N(E(e.modelValue));return e.fillMask!==!1?q(l):l}return e.modelValue}function M(l){if(l<f.length)return f.slice(-l);let r="",c=f;const s=c.indexOf($);if(s>-1){for(let d=l-c.length;d>0;d--)r+=$;c=c.slice(0,s)+r+c.slice(s)}return c}function A(){if(k.value=e.mask!==void 0&&e.mask.length>0&&R(),k.value===!1){C=void 0,f="",g="";return}const l=xe[e.mask]===void 0?e.mask:xe[e.mask],r=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",c=r.replace(Ce,"\\$&"),s=[],d=[],i=[];let x=e.reverseFillMask===!0,h="",S="";l.replace(wt,(m,o,w,K,Z)=>{if(K!==void 0){const z=te[K];i.push(z),S=z.negate,x===!0&&(d.push("(?:"+S+"+)?("+z.pattern+"+)?(?:"+S+"+)?("+z.pattern+"+)?"),x=!1),d.push("(?:"+S+"+)?("+z.pattern+")?")}else if(w!==void 0)h="\\"+(w==="\\"?"":w),i.push(w),s.push("([^"+h+"]+)?"+h+"?");else{const z=o!==void 0?o:Z;h=z==="\\"?"\\\\\\\\":z.replace(Ce,"\\\\$&"),i.push(z),s.push("([^"+h+"]+)?"+h+"?")}});const j=new RegExp("^"+s.join("")+"("+(h===""?".":"[^"+h+"]")+"+)?$"),L=d.length-1,a=d.map((m,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+m):o===L?new RegExp("^"+m+"("+(S===""?".":S)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+m));v=i,C=m=>{const o=j.exec(m);o!==null&&(m=o.slice(1).join(""));const w=[],K=a.length;for(let Z=0,z=m;Z<K;Z++){const le=a[Z].exec(z);if(le===null)break;z=z.slice(le.shift().length),w.push(...le)}return w.length>0?w.join(""):m},f=i.map(m=>typeof m=="string"?m:$).join(""),g=f.split($).join(r)}function B(l,r,c){const s=u.value,d=s.selectionEnd,i=s.value.length-d,x=E(l);r===!0&&A();const h=N(x),S=e.fillMask!==!1?q(h):h,j=b.value!==S;s.value!==S&&(s.value=S),j===!0&&(b.value=S),document.activeElement===s&&H(()=>{if(S===g){const a=e.reverseFillMask===!0?g.length:0;s.setSelectionRange(a,a,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const a=d-1;F.right(s,a,a);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const a=e.reverseFillMask===!0?d===0?S.length>h.length?1:0:Math.max(0,S.length-(S===g?0:Math.min(h.length,i)+1))+1:d;s.setSelectionRange(a,a,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const a=Math.max(0,S.length-(S===g?0:Math.min(h.length,i+1)));a===1&&d===1?s.setSelectionRange(a,a,"forward"):F.rightReverse(s,a,a)}else{const a=S.length-i;s.setSelectionRange(a,a,"backward")}else if(j===!0){const a=Math.max(0,f.indexOf($),Math.min(h.length,d)-1);F.right(s,a,a)}else{const a=d-1;F.right(s,a,a)}});const L=e.unmaskedValue===!0?E(S):S;String(e.modelValue)!==L&&n(L,!0)}function D(l,r,c){const s=N(E(l.value));r=Math.max(0,f.indexOf($),Math.min(s.length,r)),l.setSelectionRange(r,c,"forward")}const F={left(l,r,c,s){const d=f.slice(r-1).indexOf($)===-1;let i=Math.max(0,r-1);for(;i>=0;i--)if(f[i]===$){r=i,d===!0&&r++;break}if(i<0&&f[r]!==void 0&&f[r]!==$)return F.right(l,0,0);r>=0&&l.setSelectionRange(r,s===!0?c:r,"backward")},right(l,r,c,s){const d=l.value.length;let i=Math.min(d,c+1);for(;i<=d;i++)if(f[i]===$){c=i;break}else f[i-1]===$&&(c=i);if(i>d&&f[c-1]!==void 0&&f[c-1]!==$)return F.left(l,d,d);l.setSelectionRange(s?r:c,c,"forward")},leftReverse(l,r,c,s){const d=M(l.value.length);let i=Math.max(0,r-1);for(;i>=0;i--)if(d[i-1]===$){r=i;break}else if(d[i]===$&&(r=i,i===0))break;if(i<0&&d[r]!==void 0&&d[r]!==$)return F.rightReverse(l,0,0);r>=0&&l.setSelectionRange(r,s===!0?c:r,"backward")},rightReverse(l,r,c,s){const d=l.value.length,i=M(d),x=i.slice(0,c+1).indexOf($)===-1;let h=Math.min(d,c+1);for(;h<=d;h++)if(i[h-1]===$){c=h,c>0&&x===!0&&c--;break}if(h>d&&i[c-1]!==void 0&&i[c-1]!==$)return F.leftReverse(l,d,d);l.setSelectionRange(s===!0?r:c,c,"forward")}};function I(l){if(Je(l)===!0)return;const r=u.value,c=r.selectionStart,s=r.selectionEnd;if(l.keyCode===37||l.keyCode===39){const d=F[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];l.preventDefault(),d(r,c,s,l.shiftKey)}else l.keyCode===8&&e.reverseFillMask!==!0&&c===s?F.left(r,c,s,!0):l.keyCode===46&&e.reverseFillMask===!0&&c===s&&F.rightReverse(r,c,s,!0)}function N(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return O(l);const r=v;let c=0,s="";for(let d=0;d<r.length;d++){const i=l[c],x=r[d];if(typeof x=="string")s+=x,i===x&&c++;else if(i!==void 0&&x.regex.test(i))s+=x.transform!==void 0?x.transform(i):i,c++;else return s}return s}function O(l){const r=v,c=f.indexOf($);let s=l.length-1,d="";for(let i=r.length-1;i>=0&&s>-1;i--){const x=r[i];let h=l[s];if(typeof x=="string")d=x+d,h===x&&s--;else if(h!==void 0&&x.regex.test(h))do d=(x.transform!==void 0?x.transform(h):h)+d,s--,h=l[s];while(c===i&&h!==void 0&&x.regex.test(h));else return d}return d}function E(l){return typeof l!="string"||C===void 0?typeof l=="number"?C(""+l):l:C(l)}function q(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:b,hasMask:k,moveCursorForPaste:D,updateMaskValue:B,onMaskedKeydown:I}}const Rt={name:String};function Qt(e){return p(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Wt(e={}){return(t,n,u)=>{t[n](y("input",V({class:"hidden"+(u||"")},e.value)))}}function _t(e){return p(()=>e.name||e.for)}function Ft(e,t){function n(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(g=>{f.items.add(g)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?p(()=>{if(e.type==="file")return n()}):p(n)}const Vt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,$t=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,At=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;function Bt(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.composing!==!0)return;n.target.composing=!1,e(n)}else n.type==="compositionupdate"?typeof n.data=="string"&&Vt.test(n.data)===!1&&$t.test(n.data)===!1&&At.test(n.data)===!1&&(n.target.composing=!1):n.target.composing=!0}}var Et=Se({name:"QInput",inheritAttrs:!1,props:U(V(V(V({},kt),Mt),Rt),{modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...xt,"paste","change"],setup(e,{emit:t,attrs:n}){const u={};let f=NaN,g,v,C,k;const b=T(null),R=_t(e),{innerValue:_,hasMask:M,moveCursorForPaste:A,updateMaskValue:B,onMaskedKeydown:D}=qt(e,t,x,b),F=Ft(e,!0),I=p(()=>se(_.value)),N=Bt(i),O=Ct(),E=p(()=>e.type==="textarea"||e.autogrow===!0),q=p(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),l=p(()=>{const o=U(V({},O.splitAttrs.listeners.value),{onInput:i,onPaste:d,onChange:S,onBlur:j,onFocus:ve});return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=N,M.value===!0&&(o.onKeydown=D),e.autogrow===!0&&(o.onAnimationend=h),o}),r=p(()=>{const o=U(V({tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:R.value},O.splitAttrs.attributes.value),{id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0});return E.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});P(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),P(()=>e.modelValue,o=>{if(M.value===!0){if(v===!0&&(v=!1,String(o)===f))return;B(o)}else _.value!==o&&(_.value=o,e.type==="number"&&u.hasOwnProperty("value")===!0&&(g===!0?g=!1:delete u.value));e.autogrow===!0&&H(h)}),P(()=>e.autogrow,o=>{o===!0?H(h):b.value!==null&&n.rows>0&&(b.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&H(h)});function c(){Fe(()=>{const o=document.activeElement;b.value!==null&&b.value!==o&&(o===null||o.id!==O.targetUid.value)&&b.value.focus({preventScroll:!0})})}function s(){b.value!==null&&b.value.select()}function d(o){if(M.value===!0&&e.reverseFillMask!==!0){const w=o.target;A(w,w.selectionStart,w.selectionEnd)}t("paste",o)}function i(o){if(!o||!o.target||o.target.composing===!0)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const w=o.target.value;if(M.value===!0)B(w,!1,o.inputType);else if(x(w),q.value===!0&&o.target===document.activeElement){const{selectionStart:K,selectionEnd:Z}=o.target;K!==void 0&&Z!==void 0&&H(()=>{o.target===document.activeElement&&w.indexOf(o.target.value)===0&&o.target.setSelectionRange(K,Z)})}e.autogrow===!0&&h()}function x(o,w){k=()=>{e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==o&&f!==o&&(w===!0&&(v=!0),t("update:modelValue",o),H(()=>{f===o&&(f=NaN)})),k=void 0},e.type==="number"&&(g=!0,u.value=o),e.debounce!==void 0?(clearTimeout(C),u.value=o,C=setTimeout(k,e.debounce)):k()}function h(){const o=b.value;if(o!==null){const w=o.parentNode.style;w.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",w.marginBottom=""}}function S(o){N(o),clearTimeout(C),k!==void 0&&k(),t("change",o.target.value)}function j(o){o!==void 0&&ve(o),clearTimeout(C),k!==void 0&&k(),g=!1,v=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=_.value!==void 0?_.value:"")})}function L(){return u.hasOwnProperty("value")===!0?u.value:_.value!==void 0?_.value:""}ae(()=>{j()}),de(()=>{e.autogrow===!0&&h()}),Object.assign(O,{innerValue:_,fieldClass:p(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:p(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:b,emitValue:x,hasValue:I,floatingLabel:p(()=>I.value===!0||se(e.displayValue)),getControl:()=>y(E.value===!0?"textarea":"input",V(V(V({ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle},r.value),l.value),e.type!=="file"?{value:L()}:F.value)),getShadowControl:()=>y("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[y("span",{class:"invisible"},L()),y("span",e.shadowText)])});const a=St(O),m=W();return Object.assign(m.proxy,{focus:c,select:s,getNativeElement:()=>b.value}),a}});const Ot={name:"RequiredSign",props:{name:{type:String,default:"asterisk"}}};function It(e,t,n,u,f,g){return oe(),we(re,{name:e.$props.name,color:"pink-6",style:{"font-size":"0.8rem"},class:"q-mb-xs"},null,8,["name"])}var Tt=Me(Ot,[["render",It]]);const Pt={name:"TextInput",components:{VeeField:Xe,RequiredSign:Tt},props:{name:{type:String,required:!0},outlined:{type:Boolean,default:!1},standout:{type:Boolean},dense:{type:Boolean},maxlength:{type:String},stackLabel:{type:Boolean},type:{type:String},inputStyle:{type:String},inputClass:{type:String},rules:{type:Object,required:!0},requiredIcon:{type:String,default:"las la-asterisk"},isRequiredIcon:{type:Boolean,default:!0}},setup(e){const{handleChange:t}=Ye(e.name,e.rules),n=T(null);return de(()=>{n.value.getNativeElement().addEventListener("input",f=>{t(f,!0)})}),{inputRef:n}}},Nt={style:{"min-height":"76px"}};function jt(e,t,n,u,f,g){const v=me("required-sign"),C=me("vee-field");return oe(),Ge("div",Nt,[ge(C,{name:e.$props.name,rules:e.$props.rules},{default:ne(({field:k,errorMessage:b,errors:R})=>[ge(Et,{ref:"inputRef",standout:e.$props.standout,outlined:e.$props.outlined,dense:e.$props.dense,label:e.$props.name,"stack-label":e.$props.stackLabel,"hide-bottom-space":"",maxlength:e.$props.maxlength,type:e.$props.type,error:R.length>0,"error-message":b,"no-error-icon":"","model-value":k.value,"input-style":e.$props.inputStyle,"input-class":e.$props.inputClass},{label:ne(()=>[et(tt(n.name)+" ",1),n.rules.required&&e.$props.isRequiredIcon?(oe(),we(v,{key:0,name:e.$props.requiredIcon},null,8,["name"])):at("",!0)]),append:ne(()=>[lt(e.$slots,"append")]),_:2},1032,["standout","outlined","dense","label","stack-label","maxlength","type","error","error-message","model-value","input-style","input-class"])]),_:3},8,["name","rules"])])}var Jt=Me(Pt,[["render",jt]]);export{Et as Q,Tt as R,Jt as T,Qt as a,Wt as b,Fe as c,Kt as d,Ht as r,Rt as u};