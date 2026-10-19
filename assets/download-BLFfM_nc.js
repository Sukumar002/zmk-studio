import{g as kn,R as Kt,r as pt,j as x,L as Pn,B as Sn,D as Dn,a as En}from"./Button-CS3mSVec.js";function In(t,e,n){return(e=Nn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?re(Object(n),!0).forEach(function(a){In(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Tn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Nn(t){var e=Tn(t,"string");return typeof e=="symbol"?e:e+""}const se=()=>{};let Zt={},je={},Be=null,We={mark:se,measure:se};try{typeof window<"u"&&(Zt=window),typeof document<"u"&&(je=document),typeof MutationObserver<"u"&&(Be=MutationObserver),typeof performance<"u"&&(We=performance)}catch{}const{userAgent:ie=""}=Zt.navigator||{},z=Zt,g=je,oe=Be,et=We;z.document;const M=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Ue=~ie.indexOf("MSIE")||~ie.indexOf("Trident/");var Cn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Mn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ye={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Fn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},He=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],w="classic",lt="duotone",zn="sharp",Ln="sharp-duotone",Ke=[w,lt,zn,Ln],Rn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},jn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Bn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Wn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Un=["fak","fa-kit","fakd","fa-kit-duotone"],le={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Yn=["kit"],Hn={kit:{"fa-kit":"fak"}},Kn=["fak","fakd"],Zn={kit:{fak:"fa-kit"}},ce={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Vn=["fak","fa-kit","fakd","fa-kit-duotone"],Xn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$n={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},qn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Qn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],St=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Gn,...Qn],Jn=["solid","regular","light","thin","duotone","brands"],Ze=[1,2,3,4,5,6,7,8,9,10],ta=Ze.concat([11,12,13,14,15,16,17,18,19,20]),ea=[...Object.keys(qn),...Jn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY].concat(Ze.map(t=>"".concat(t,"x"))).concat(ta.map(t=>"w-".concat(t))),na={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const N="___FONT_AWESOME___",Dt=16,Ge="fa",Ve="svg-inline--fa",W="data-fa-i2svg",Et="data-fa-pseudo-element",aa="data-fa-pseudo-element-pending",Gt="data-prefix",Vt="data-icon",ue="fontawesome-i2svg",ra="async",sa=["HTML","HEAD","STYLE","SCRIPT"],Xe=(()=>{try{return!0}catch{return!1}})();function J(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[w]}})}const $e=l({},Ye);$e[w]=l(l(l(l({},{"fa-duotone":"duotone"}),Ye[w]),le.kit),le["kit-duotone"]);const ia=J($e),It=l({},Wn);It[w]=l(l(l(l({},{duotone:"fad"}),It[w]),ce.kit),ce["kit-duotone"]);const fe=J(It),Tt=l({},Pt);Tt[w]=l(l({},Tt[w]),Zn.kit);const Xt=J(Tt),Nt=l({},$n);Nt[w]=l(l({},Nt[w]),Hn.kit);J(Nt);const oa=Cn,qe="fa-layers-text",la=Mn,ca=l({},Rn);J(ca);const ua=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht=Fn,fa=[...Yn,...ea],X=z.FontAwesomeConfig||{};function da(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ma(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ma(da(n));r!=null&&(X[a]=r)});const Qe={styleDefault:"solid",familyDefault:w,cssPrefix:Ge,replacementClass:Ve,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);const Z=l(l({},Qe),X);Z.autoReplaceSvg||(Z.observeMutations=!1);const u={};Object.keys(Qe).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){Z[t]=e,$.forEach(n=>n(u))},get:function(){return Z[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,$.forEach(e=>e(u))},get:function(){return Z.cssPrefix}});z.FontAwesomeConfig=u;const $=[];function pa(t){return $.push(t),()=>{$.splice($.indexOf(t),1)}}const F=Dt,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ha(t){if(!t||!M)return;const e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=g.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return g.head.insertBefore(e,a),t}const ga="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q(){let t=12,e="";for(;t-- >0;)e+=ga[Math.random()*62|0];return e}function G(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $t(t){return t.classList?G(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Je(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ba(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Je(t[n]),'" '),"").trim()}function ct(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function qt(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function ya(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(s," ").concat(i," ").concat(o)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function va(t){let{transform:e,width:n=Dt,height:a=Dt,startCentered:r=!1}=t,s="";return r&&Ue?s+="translate(".concat(e.x/F-n/2,"em, ").concat(e.y/F-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):s+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),s+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var _a=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function tn(){const t=Ge,e=Ve,n=u.cssPrefix,a=u.replacementClass;let r=_a;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let de=!1;function gt(){u.autoAddCss&&!de&&(ha(tn()),de=!0)}var xa={mixout(){return{dom:{css:tn,insertCss:gt}}},hooks(){return{beforeDOMElementCreation(){gt()},beforeI2svg(){gt()}}}};const C=z||{};C[N]||(C[N]={});C[N].styles||(C[N].styles={});C[N].hooks||(C[N].hooks={});C[N].shims||(C[N].shims=[]);var I=C[N];const en=[],nn=function(){g.removeEventListener("DOMContentLoaded",nn),st=1,en.map(t=>t())};let st=!1;M&&(st=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),st||g.addEventListener("DOMContentLoaded",nn));function wa(t){M&&(st?setTimeout(t,0):en.push(t))}function tt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Je(t):"<".concat(e," ").concat(ba(n),">").concat(a.map(tt).join(""),"</").concat(e,">")}function me(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var bt=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,f,c,d;for(a===void 0?(f=1,d=e[s[0]]):(f=0,d=a);f<i;f++)c=s[f],d=o(d,e[c],c,e);return d};function Aa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ct(t){const e=Aa(t);return e.length===1?e[0].toString(16):null}function Oa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function pe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Mt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=pe(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,pe(e)):I.styles[t]=l(l({},I.styles[t]||{}),r),t==="fas"&&Mt("fa",e)}const{styles:Q,shims:ka}=I,an=Object.keys(Xt),Pa=an.reduce((t,e)=>(t[e]=Object.keys(Xt[e]),t),{});let Qt=null,rn={},sn={},on={},ln={},cn={};function Sa(t){return~fa.indexOf(t)}function Da(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Sa(r)?r:null}const un=()=>{const t=a=>bt(Q,(r,s,i)=>(r[i]=bt(s,a,{}),r),{});rn=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),sn=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),cn=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in Q||u.autoFetchSvg,n=bt(ka,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});on=n.names,ln=n.unicodes,Qt=ut(u.styleDefault,{family:u.familyDefault})};pa(t=>{Qt=ut(t.styleDefault,{family:u.familyDefault})});un();function Jt(t,e){return(rn[t]||{})[e]}function Ea(t,e){return(sn[t]||{})[e]}function B(t,e){return(cn[t]||{})[e]}function fn(t){return on[t]||{prefix:null,iconName:null}}function Ia(t){const e=ln[t],n=Jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function L(){return Qt}const dn=()=>({prefix:null,iconName:null,rest:[]});function Ta(t){let e=w;const n=an.reduce((a,r)=>(a[r]="".concat(u.cssPrefix,"-").concat(r),a),{});return Ke.forEach(a=>{(t.includes(n[a])||t.some(r=>Pa[a].includes(r)))&&(e=a)}),e}function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=w}=e,a=ia[n][t];if(n===lt&&!t)return"fad";const r=fe[n][t]||fe[n][a],s=t in I.styles?t:null;return r||s||null}function Na(t){let e=[],n=null;return t.forEach(a=>{const r=Da(u.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function he(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=St.concat(Vn),s=he(t.filter(h=>r.includes(h))),i=he(t.filter(h=>!St.includes(h))),o=s.filter(h=>(a=h,!He.includes(h))),[f=null]=o,c=Ta(s),d=l(l({},Na(i)),{},{prefix:ut(f,{family:c})});return l(l(l({},d),za({values:t,family:c,styles:Q,config:u,canonical:d,givenPrefix:a})),Ca(n,a,d))}function Ca(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?fn(r):{},i=B(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!Q.far&&Q.fas&&!u.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ma=Ke.filter(t=>t!==w||t!==lt),Fa=Object.keys(Pt).filter(t=>t!==w).map(t=>Object.keys(Pt[t])).flat();function za(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=t,o=n===lt,f=e.includes("fa-duotone")||e.includes("fad"),c=i.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(f||c||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ma.includes(n)&&(Object.keys(s).find(m=>Fa.includes(m))||i.autoFetchSvg)){const m=Bn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=B(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=L()||"fas"),a}class La{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=l(l({},this.definitions[s]||{}),r[s]),Mt(s,r[s]);const i=Xt[w][s];i&&Mt(i,r[s]),un()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],f=o[2];e[s]||(e[s]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][i]=o}),e}}let ge=[],Y={};const K={},Ra=Object.keys(K);function ja(t,e){let{mixoutsTo:n}=e;return ge=t,Y={},Object.keys(K).forEach(a=>{Ra.indexOf(a)===-1&&delete K[a]}),ge.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{Y[i]||(Y[i]=[]),Y[i].push(s[i])})}a.provides&&a.provides(K)}),n}function Ft(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Y[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Y[t]||[]).forEach(s=>{s.apply(null,n)})}function R(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return K[t]?K[t].apply(null,e):void 0}function zt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||L();if(e)return e=B(n,e)||e,me(mn.definitions,n,e)||me(I.styles,n,e)}const mn=new La,Ba=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,U("noAuto")},Wa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(U("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,wa(()=>{Ya({autoReplaceSvgRoot:e}),U("watch",t)})}},Ua={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:B(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ut(t[0]);return{prefix:n,iconName:B(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(oa))){const e=ft(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||L(),iconName:B(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=L();return{prefix:e,iconName:B(e,t)||t}}}},k={noAuto:Ba,config:u,dom:Wa,parse:Ua,library:mn,findIconDefinition:zt,toHtml:tt},Ya=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=g}=t;(Object.keys(I.styles).length>0||u.autoFetchSvg)&&M&&u.autoReplaceSvg&&k.dom.i2svg({node:e})};function dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>tt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=g.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ha(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(qt(i)&&n.found&&!a.found){const{width:o,height:f}=n,c={x:o/f/2,y:.5};r.style=ct(l(l({},s),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ka(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function te(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:f,titleId:c,extra:d,watchable:h=!1}=t,{width:m,height:y}=n.found?n:e,O=Kn.includes(a),P=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(S=>d.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(d.classes).join(" ");let b={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:P,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})};const _=O&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};h&&(b.attributes[W]=""),o&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||q())},children:[o]}),delete b.attributes.title);const v=l(l({},b),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:s,symbol:i,styles:l(l({},_),d.styles)}),{children:A,attributes:T}=n.found&&e.found?R("generateAbstractMask",v)||{children:[],attributes:{}}:R("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=T,i?Ka(v):Ha(v)}function be(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,f=l(l(l({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(f[W]="");const c=l({},i.styles);qt(r)&&(c.transform=va({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const d=ct(c);d.length>0&&(f.style=d);const h=[];return h.push({tag:"span",attributes:f,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Za(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=ct(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:yt}=I;function Lt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ga={found:!1,width:512,height:512};function Va(t,e){!Xe&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rt(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=L()),new Promise((a,r)=>{if(n==="fa"){const s=fn(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&yt[e]&&yt[e][t]){const s=yt[e][t];return a(Lt(s))}Va(t,e),a(l(l({},Ga),{},{icon:u.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}const ye=()=>{},jt=u.measurePerformance&&et&&et.mark&&et.measure?et:{mark:ye,measure:ye},V='FA "6.7.1"',Xa=t=>(jt.mark("".concat(V," ").concat(t," begins")),()=>pn(t)),pn=t=>{jt.mark("".concat(V," ").concat(t," ends")),jt.measure("".concat(V," ").concat(t),"".concat(V," ").concat(t," begins"),"".concat(V," ").concat(t," ends"))};var ee={begin:Xa,end:pn};const at=()=>{};function ve(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function $a(t){const e=t.getAttribute?t.getAttribute(Gt):null,n=t.getAttribute?t.getAttribute(Vt):null;return e&&n}function qa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function Qa(){return u.autoReplaceSvg===!0?rt.replace:rt[u.autoReplaceSvg]||rt.replace}function Ja(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function tr(t){return g.createElement(t)}function hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ja:tr}=e;if(typeof t=="string")return g.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(hn(s,{ceFn:n}))}),a}function er(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const rt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(hn(n),e)}),e.getAttribute(W)===null&&u.keepOriginalSource){let n=g.createComment(er(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~$t(e).indexOf(u.replacementClass))return rt.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===u.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>tt(s)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function _e(t){t()}function gn(t,e){const n=typeof e=="function"?e:at;if(t.length===0)n();else{let a=_e;u.mutateApproach===ra&&(a=z.requestAnimationFrame||_e),a(()=>{const r=Qa(),s=ee.begin("mutate");t.map(r),s(),n()})}}let ne=!1;function bn(){ne=!0}function Bt(){ne=!1}let it=null;function xe(t){if(!oe||!u.observeMutations)return;const{treeCallback:e=at,nodeCallback:n=at,pseudoElementsCallback:a=at,observeMutationsRoot:r=g}=t;it=new oe(s=>{if(ne)return;const i=L();G(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!ve(o.addedNodes[0])&&(u.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&u.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&ve(o.target)&&~ua.indexOf(o.attributeName))if(o.attributeName==="class"&&$a(o.target)){const{prefix:f,iconName:c}=ft($t(o.target));o.target.setAttribute(Gt,f||i),c&&o.target.setAttribute(Vt,c)}else qa(o.target)&&n(o.target)})}),M&&it.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function nr(){it&&it.disconnect()}function ar(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function rr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ft($t(t));return r.prefix||(r.prefix=L()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ea(r.prefix,t.innerText)||Jt(r.prefix,Ct(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function sr(t){const e=G(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||q()):(e["aria-hidden"]="true",e.focusable="false")),e}function ir(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function we(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=rr(t),s=sr(t),i=Ft("parseNodeAttributes",{},t);let o=e.styleParser?ar(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:or}=I;function yn(t){const e=u.autoReplaceSvg==="nest"?we(t,{styleParser:!1}):we(t);return~e.extra.classes.indexOf(qe)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}function lr(){return[...Un,...St]}function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=g.documentElement.classList,a=d=>n.add("".concat(ue,"-").concat(d)),r=d=>n.remove("".concat(ue,"-").concat(d)),s=u.autoFetchSvg?lr():He.concat(Object.keys(or));s.includes("fa")||s.push("fa");const i=[".".concat(qe,":not([").concat(W,"])")].concat(s.map(d=>".".concat(d,":not([").concat(W,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=G(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const f=ee.begin("onTree"),c=o.reduce((d,h)=>{try{const m=yn(h);m&&d.push(m)}catch(m){Xe||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,h)=>{Promise.all(c).then(m=>{gn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),d()})}).catch(m=>{f(),h(m)})})}function cr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yn(t).then(n=>{n&&gn([n],e)})}function ur(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:zt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:zt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const fr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:f=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:h,iconName:m,icon:y}=t;return dt(l({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(i?c["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(o||q()):(c["aria-hidden"]="true",c.focusable="false")),te({icons:{main:Lt(y),mask:r?Lt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:l(l({},E),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:c,styles:d,classes:f}})))};var dr={mixout(){return{icon:ur(fr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ae,t.nodeCallback=cr,t}}},provides(t){t.i2svg=function(e){const{node:n=g,callback:a=()=>{}}=e;return Ae(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:f,mask:c,maskId:d,extra:h}=n;return new Promise((m,y)=>{Promise.all([Rt(a,i),c.iconName?Rt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[P,b]=O;m([e,te({icons:{main:P,mask:b},prefix:i,iconName:a,transform:o,symbol:f,maskId:d,title:r,titleId:s,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=ct(i);o.length>0&&(a.style=o);let f;return qt(s)&&(f=R("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},mr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return dt({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},pr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return dt({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Za({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},hr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return dt({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),be({content:t,transform:l(l({},E),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Ue){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();i=c.width/f,o=c.height/f}return u.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,be({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const gr=new RegExp('"',"ug"),Oe=[1105920,1112319],ke=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),jn),na),Xn),Wt=Object.keys(ke).reduce((t,e)=>(t[e.toLowerCase()]=ke[e],t),{}),br=Object.keys(Wt).reduce((t,e)=>{const n=Wt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function yr(t){const e=t.replace(gr,""),n=Oa(e,0),a=n>=Oe[0]&&n<=Oe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ct(r?e[0]:e),isSecondary:a||r}}function vr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Wt[n]||{})[r]||br[n]}function Pe(t,e){const n="".concat(aa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=G(t.children).filter(m=>m.getAttribute(Et)===e)[0],o=z.getComputedStyle(t,e),f=o.getPropertyValue("font-family"),c=f.match(la),d=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!c)return t.removeChild(i),a();if(c&&h!=="none"&&h!==""){const m=o.getPropertyValue("content");let y=vr(f,d);const{value:O,isSecondary:P}=yr(m),b=c[0].startsWith("FontAwesome");let _=Jt(y,O),v=_;if(b){const A=Ia(O);A.iconName&&A.prefix&&(_=A.iconName,y=A.prefix)}if(_&&!P&&(!i||i.getAttribute(Gt)!==y||i.getAttribute(Vt)!==v)){t.setAttribute(n,v),i&&t.removeChild(i);const A=ir(),{extra:T}=A;T.attributes[Et]=e,Rt(_,y).then(S=>{const An=te(l(l({},A),{},{icons:{main:S,mask:dn()},prefix:y,iconName:v,extra:T,watchable:!0})),mt=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=An.map(On=>tt(On)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function _r(t){return Promise.all([Pe(t,"::before"),Pe(t,"::after")])}function xr(t){return t.parentNode!==document.head&&!~sa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Et)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Se(t){if(M)return new Promise((e,n)=>{const a=G(t.querySelectorAll("*")).filter(xr).map(_r),r=ee.begin("searchPseudoElements");bn(),Promise.all(a).then(()=>{r(),Bt(),e()}).catch(()=>{r(),Bt(),n()})})}var wr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Se,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=g}=e;u.searchPseudoElements&&Se(n)}}};let De=!1;var Ar={mixout(){return{dom:{unwatch(){bn(),De=!0}}}},hooks(){return{bootstrap(){xe(Ft("mutationObserverCallbacks",{}))},noAuto(){nr()},watch(t){const{observeMutationsRoot:e}=t;De?Bt():xe(Ft("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ee=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Or={mixout(){return{parse:{transform:t=>Ee(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ee(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(o," ").concat(f," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},m={outer:i,inner:d,path:h};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}};const vt={x:0,y:0,width:"100%",height:"100%"};function Ie(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function kr(t){return t.tag==="g"?t.children:[t]}var Pr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ft(n.split(" ").map(r=>r.trim())):dn();return a.prefix||(a.prefix=L()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:f,icon:c}=r,{width:d,icon:h}=s,m=ya({transform:o,containerWidth:d,iconWidth:f}),y={tag:"rect",attributes:l(l({},vt),{},{fill:"white"})},O=c.children?{children:c.children.map(Ie)}:{},P={tag:"g",attributes:l({},m.inner),children:[Ie(l({tag:c.tag,attributes:l(l({},c.attributes),m.path)},O))]},b={tag:"g",attributes:l({},m.outer),children:[P]},_="mask-".concat(i||q()),v="clip-".concat(i||q()),A={tag:"mask",attributes:l(l({},vt),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,b]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:kr(h)},A]};return n.push(T,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(_,")")},vt)}),{children:n,attributes:a}}}},Sr={provides(t){let e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=l(l({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Dr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Er=[xa,dr,mr,pr,hr,wr,Ar,Or,Pr,Sr,Dr];ja(Er,{mixoutsTo:k});k.noAuto;k.config;k.library;k.dom;const Ut=k.parse;k.findIconDefinition;k.toHtml;const Ir=k.icon;k.layer;k.text;k.counter;var _t={exports:{}},xt,Te;function Tr(){if(Te)return xt;Te=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xt=t,xt}var wt,Ne;function Nr(){if(Ne)return wt;Ne=1;var t=Tr();function e(){}function n(){}return n.resetWarningCache=e,wt=function(){function a(i,o,f,c,d,h){if(h!==t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}a.isRequired=a;function r(){return a}var s={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return s.PropTypes=s,s},wt}var Ce;function Cr(){return Ce||(Ce=1,_t.exports=Nr()()),_t.exports}var Mr=Cr();const p=kn(Mr);function Me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Me(Object(n),!0).forEach(function(a){H(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(t)}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,s;for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function zr(t,e){if(t==null)return{};var n=Fr(t,e),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Yt(t){return Lr(t)||Rr(t)||jr(t)||Br()}function Lr(t){if(Array.isArray(t))return Ht(t)}function Rr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jr(t,e){if(t){if(typeof t=="string")return Ht(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ht(t,e)}}function Ht(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Br(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,s=t.bounce,i=t.shake,o=t.flash,f=t.spin,c=t.spinPulse,d=t.spinReverse,h=t.pulse,m=t.fixedWidth,y=t.inverse,O=t.border,P=t.listItem,b=t.flip,_=t.size,v=t.rotation,A=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":i,"fa-flash":o,"fa-spin":f,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":m,"fa-inverse":y,"fa-border":O,"fa-li":P,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},H(e,"fa-".concat(_),typeof _<"u"&&_!==null),H(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),H(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),H(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(S){return T[S]?S:null}).filter(function(S){return S})}function Ur(t){return t=t-0,t===t}function vn(t){return Ur(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Yr=["style"];function Hr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Kr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=vn(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?e[Hr(r)]=s:e[r]=s,e},{})}function _n(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return _n(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var d=e.attributes[c];switch(c){case"class":f.attrs.className=d,delete e.attributes.class;break;case"style":f.attrs.style=Kr(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=d:f.attrs[vn(c)]=d}return f},{attrs:{}}),s=n.style,i=s===void 0?{}:s,o=zr(n,Yr);return r.attrs.style=D(D({},r.attrs.style),i),t.apply(void 0,[e.tag,D(D({},r.attrs),o)].concat(Yt(a)))}var xn=!1;try{xn=!0}catch{}function Zr(){if(!xn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Fe(t){if(t&&ot(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ut.icon)return Ut.icon(t);if(t===null)return null;if(t&&ot(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function At(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?H({},t,e):{}}var ze={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ae=Kt.forwardRef(function(t,e){var n=D(D({},ze),t),a=n.icon,r=n.mask,s=n.symbol,i=n.className,o=n.title,f=n.titleId,c=n.maskId,d=Fe(a),h=At("classes",[].concat(Yt(Wr(n)),Yt((i||"").split(" ")))),m=At("transform",typeof n.transform=="string"?Ut.transform(n.transform):n.transform),y=At("mask",Fe(r)),O=Ir(d,D(D(D(D({},h),m),y),{},{symbol:s,title:o,titleId:f,maskId:c}));if(!O)return Zr("Could not find icon",d),null;var P=O.abstract,b={ref:e};return Object.keys(n).forEach(function(_){ze.hasOwnProperty(_)||(b[_]=n[_])}),Gr(P[0],b)});ae.displayName="FontAwesomeIcon";ae.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var Gr=_n.bind(null,Kt.createElement);const Vr={prefix:"fab",iconName:"windows",icon:[448,512,[],"f17a","M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"]},Le={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]},Xr={prefix:"fab",iconName:"linux",icon:[448,512,[],"f17c","M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"]},Re={prefix:"fab",iconName:"android",icon:[576,512,[],"f17b","M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"]},$r="0.6.0 (aa05ca3)",qr=JSON.parse('[{"url":"https://api.github.com/repos/danielsvane/zmk-studio/releases/assets/522761262","id":522761262,"node_id":"RA_kwDOO9IyP84fKLQu","name":"ZMK.Studio_0.6.0_aarch64.AppImage","label":"","uploader":{"login":"github-actions[bot]","id":41898282,"node_id":"MDM6Qm90NDE4OTgyODI=","avatar_url":"https://avatars.githubusercontent.com/in/15368?v=4","gravatar_id":"","url":"https://api.github.com/users/github-actions%5Bbot%5D","html_url":"https://github.com/apps/github-actions","followers_url":"https://api.github.com/users/github-actions%5Bbot%5D/followers","following_url":"https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}","gists_url":"https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}","starred_url":"https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/github-actions%5Bbot%5D/subscriptions","organizations_url":"https://api.github.com/users/github-actions%5Bbot%5D/orgs","repos_url":"https://api.github.com/users/github-actions%5Bbot%5D/repos","events_url":"https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}","received_events_url":"https://api.github.com/users/github-actions%5Bbot%5D/received_events","type":"Bot","user_view_type":"public","site_admin":false},"content_type":"application/vnd.appimage","state":"uploaded","size":86040960,"digest":"sha256:9d337d05c29d890b15bd69307ff0e72e96a9ee724783bfb33938da1f886eadeb","download_count":1,"created_at":"2026-08-20T20:34:40Z","updated_at":"2026-08-20T20:34:42Z","browser_download_url":"https://github.com/danielsvane/zmk-studio/releases/download/latest/ZMK.Studio_0.6.0_aarch64.AppImage"},{"url":"https://api.github.com/repos/danielsvane/zmk-studio/releases/assets/522761265","id":522761265,"node_id":"RA_kwDOO9IyP84fKLQx","name":"ZMK.Studio_0.6.0_amd64.AppImage","label":"","uploader":{"login":"github-actions[bot]","id":41898282,"node_id":"MDM6Qm90NDE4OTgyODI=","avatar_url":"https://avatars.githubusercontent.com/in/15368?v=4","gravatar_id":"","url":"https://api.github.com/users/github-actions%5Bbot%5D","html_url":"https://github.com/apps/github-actions","followers_url":"https://api.github.com/users/github-actions%5Bbot%5D/followers","following_url":"https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}","gists_url":"https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}","starred_url":"https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/github-actions%5Bbot%5D/subscriptions","organizations_url":"https://api.github.com/users/github-actions%5Bbot%5D/orgs","repos_url":"https://api.github.com/users/github-actions%5Bbot%5D/repos","events_url":"https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}","received_events_url":"https://api.github.com/users/github-actions%5Bbot%5D/received_events","type":"Bot","user_view_type":"public","site_admin":false},"content_type":"application/vnd.appimage","state":"uploaded","size":85976256,"digest":"sha256:642828cff46ac4cd3b8fbfaefec97e4fb3ae470bfe8e0d26badfcd743bc43c8e","download_count":1,"created_at":"2026-08-20T20:34:40Z","updated_at":"2026-08-20T20:34:43Z","browser_download_url":"https://github.com/danielsvane/zmk-studio/releases/download/latest/ZMK.Studio_0.6.0_amd64.AppImage"},{"url":"https://api.github.com/repos/danielsvane/zmk-studio/releases/assets/522761260","id":522761260,"node_id":"RA_kwDOO9IyP84fKLQs","name":"ZMK.Studio_0.6.0_amd64.deb","label":"","uploader":{"login":"github-actions[bot]","id":41898282,"node_id":"MDM6Qm90NDE4OTgyODI=","avatar_url":"https://avatars.githubusercontent.com/in/15368?v=4","gravatar_id":"","url":"https://api.github.com/users/github-actions%5Bbot%5D","html_url":"https://github.com/apps/github-actions","followers_url":"https://api.github.com/users/github-actions%5Bbot%5D/followers","following_url":"https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}","gists_url":"https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}","starred_url":"https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/github-actions%5Bbot%5D/subscriptions","organizations_url":"https://api.github.com/users/github-actions%5Bbot%5D/orgs","repos_url":"https://api.github.com/users/github-actions%5Bbot%5D/repos","events_url":"https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}","received_events_url":"https://api.github.com/users/github-actions%5Bbot%5D/received_events","type":"Bot","user_view_type":"public","site_admin":false},"content_type":"application/x-debian-package","state":"uploaded","size":8082316,"digest":"sha256:8ece0ee9ec7a67fb59d57a33ef74adec90cfb6b142ba34a4fb9863aa88fa3178","download_count":1,"created_at":"2026-08-20T20:34:40Z","updated_at":"2026-08-20T20:34:40Z","browser_download_url":"https://github.com/danielsvane/zmk-studio/releases/download/latest/ZMK.Studio_0.6.0_amd64.deb"},{"url":"https://api.github.com/repos/danielsvane/zmk-studio/releases/assets/522761261","id":522761261,"node_id":"RA_kwDOO9IyP84fKLQt","name":"ZMK.Studio_0.6.0_arm64.deb","label":"","uploader":{"login":"github-actions[bot]","id":41898282,"node_id":"MDM6Qm90NDE4OTgyODI=","avatar_url":"https://avatars.githubusercontent.com/in/15368?v=4","gravatar_id":"","url":"https://api.github.com/users/github-actions%5Bbot%5D","html_url":"https://github.com/apps/github-actions","followers_url":"https://api.github.com/users/github-actions%5Bbot%5D/followers","following_url":"https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}","gists_url":"https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}","starred_url":"https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/github-actions%5Bbot%5D/subscriptions","organizations_url":"https://api.github.com/users/github-actions%5Bbot%5D/orgs","repos_url":"https://api.github.com/users/github-actions%5Bbot%5D/repos","events_url":"https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}","received_events_url":"https://api.github.com/users/github-actions%5Bbot%5D/received_events","type":"Bot","user_view_type":"public","site_admin":false},"content_type":"application/x-debian-package","state":"uploaded","size":8179490,"digest":"sha256:7727125b7dce78fc71d5bb27d0ef009e374ee022d66630f734590f821904a5aa","download_count":0,"created_at":"2026-08-20T20:34:40Z","updated_at":"2026-08-20T20:34:40Z","browser_download_url":"https://github.com/danielsvane/zmk-studio/releases/download/latest/ZMK.Studio_0.6.0_arm64.deb"},{"url":"https://api.github.com/repos/danielsvane/zmk-studio/releases/assets/522761264","id":522761264,"node_id":"RA_kwDOO9IyP84fKLQw","name":"ZMK.Studio_0.6.0_universal.dmg","label":"","uploader":{"login":"github-actions[bot]","id":41898282,"node_id":"MDM6Qm90NDE4OTgyODI=","avatar_url":"https://avatars.githubusercontent.com/in/15368?v=4","gravatar_id":"","url":"https://api.github.com/users/github-actions%5Bbot%5D","html_url":"https://github.com/apps/github-actions","followers_url":"https://api.github.com/users/github-actions%5Bbot%5D/followers","following_url":"https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}","gists_url":"https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}","starred_url":"https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/github-actions%5Bbot%5D/subscriptions","organizations_url":"https://api.github.com/users/github-actions%5Bbot%5D/orgs","repos_url":"https://api.github.com/users/github-actions%5Bbot%5D/repos","events_url":"https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}","received_events_url":"https://api.github.com/users/github-actions%5Bbot%5D/received_events","type":"Bot","user_view_type":"public","site_admin":false},"content_type":"application/x-apple-diskimage","state":"uploaded","size":15386422,"digest":"sha256:ec3be3affc8748c7e8666263d02637f82869a44eea7b73f320b1d258d22e16bb","download_count":0,"created_at":"2026-08-20T20:34:40Z","updated_at":"2026-08-20T20:34:41Z","browser_download_url":"https://github.com/danielsvane/zmk-studio/releases/download/latest/ZMK.Studio_0.6.0_universal.dmg"},{"url":"https://api.github.com/repos/danielsvane/zmk-studio/releases/assets/522761284","id":522761284,"node_id":"RA_kwDOO9IyP84fKLRE","name":"ZMK.Studio_0.6.0_x64-setup.exe","label":"","uploader":{"login":"github-actions[bot]","id":41898282,"node_id":"MDM6Qm90NDE4OTgyODI=","avatar_url":"https://avatars.githubusercontent.com/in/15368?v=4","gravatar_id":"","url":"https://api.github.com/users/github-actions%5Bbot%5D","html_url":"https://github.com/apps/github-actions","followers_url":"https://api.github.com/users/github-actions%5Bbot%5D/followers","following_url":"https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}","gists_url":"https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}","starred_url":"https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/github-actions%5Bbot%5D/subscriptions","organizations_url":"https://api.github.com/users/github-actions%5Bbot%5D/orgs","repos_url":"https://api.github.com/users/github-actions%5Bbot%5D/repos","events_url":"https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}","received_events_url":"https://api.github.com/users/github-actions%5Bbot%5D/received_events","type":"Bot","user_view_type":"public","site_admin":false},"content_type":"application/octet-stream","state":"uploaded","size":5552093,"digest":"sha256:5641e08bb40515c96b6e7ce206888e153fbdc237977bb826780c409938b6ce8e","download_count":1,"created_at":"2026-08-20T20:34:41Z","updated_at":"2026-08-20T20:34:41Z","browser_download_url":"https://github.com/danielsvane/zmk-studio/releases/download/latest/ZMK.Studio_0.6.0_x64-setup.exe"},{"url":"https://api.github.com/repos/danielsvane/zmk-studio/releases/assets/522761296","id":522761296,"node_id":"RA_kwDOO9IyP84fKLRQ","name":"ZMK.Studio_0.6.0_x64_en-US.msi","label":"","uploader":{"login":"github-actions[bot]","id":41898282,"node_id":"MDM6Qm90NDE4OTgyODI=","avatar_url":"https://avatars.githubusercontent.com/in/15368?v=4","gravatar_id":"","url":"https://api.github.com/users/github-actions%5Bbot%5D","html_url":"https://github.com/apps/github-actions","followers_url":"https://api.github.com/users/github-actions%5Bbot%5D/followers","following_url":"https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}","gists_url":"https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}","starred_url":"https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/github-actions%5Bbot%5D/subscriptions","organizations_url":"https://api.github.com/users/github-actions%5Bbot%5D/orgs","repos_url":"https://api.github.com/users/github-actions%5Bbot%5D/repos","events_url":"https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}","received_events_url":"https://api.github.com/users/github-actions%5Bbot%5D/received_events","type":"Bot","user_view_type":"public","site_admin":false},"content_type":"application/x-msi","state":"uploaded","size":7094272,"digest":"sha256:4f39ae83ad3f530a95480dd4bc63940aa1802e5aa77f961d35e116dcf15dc5e1","download_count":1,"created_at":"2026-08-20T20:34:41Z","updated_at":"2026-08-20T20:34:41Z","browser_download_url":"https://github.com/danielsvane/zmk-studio/releases/download/latest/ZMK.Studio_0.6.0_x64_en-US.msi"}]'),Qr={name:$r,assets:qr},Jr={windows:{name:"Windows",icon:Vr},mac:{name:"macOS",icon:Le},linux:{name:"Linux",icon:Xr},ios:{name:"iOS",icon:Le},android:{name:"Android",icon:Re},unknown:{name:"Unknown",icon:Re}},j={windows_exe:{name:"Windows (exe)",urlPattern:/.*\.exe/},windows_msi:{name:"Windows (msi)",urlPattern:/.*\.msi/},macos:{name:"macOS",urlPattern:/.*\.dmg/},linux_appimage:{name:"Linux (AppImage)",urlPattern:/.*amd64\.AppImage/},linux_deb:{name:"Linux (deb)",urlPattern:/.*amd64\.deb/},linux_appimage_arm64:{name:"Linux arm64 (AppImage)",urlPattern:/.*aarch64\.AppImage/},linux_deb_arm64:{name:"Linux arm64 (deb)",urlPattern:/.*arm64\.deb/}},Ot={windows:[j.windows_exe,j.windows_msi],mac:[j.macos],linux:[j.linux_appimage,j.linux_deb,j.linux_appimage_arm64,j.linux_deb_arm64],ios:[],android:[],unknown:[]},wn=Qr,ts=wn.assets.map(t=>t.browser_download_url),es=wn.name;function ns(){if(typeof window>"u")return"unknown";const t=window.navigator.userAgent.toLowerCase();return t.includes("win")?"windows":t.includes("mac")?"mac":t.includes("linux")?"linux":/iphone|ipad|ipod/.test(t)?"ios":t.includes("android")?"android":"unknown"}function as(t,e){return t.find(a=>e.test(a))}function kt(t){return t.flatMap(e=>{const n=as(ts,e.urlPattern);return n?[{...e,url:n}]:[]})}const rs=()=>{const[t,e]=pt.useState("unknown"),[n,a]=pt.useState(!1),r=kt(Ot[t]);return pt.useEffect(()=>{const s=ns();e(s),kt(Ot[s]).length===0&&a(!0)},[]),x.jsxs("div",{className:"bg-base-200 dark:bg-base-300 text-base-content min-h-full w-full flex flex-col justify-center items-center p-10 pb-48",children:[x.jsx("img",{src:"/zmk-mac-app-icon.webp",alt:"ZMK Studio",className:"w-64"}),x.jsx("div",{className:"text-3xl mb-1",children:"ZMK Studio"}),x.jsx("div",{className:"text-md mb-1 opacity-70",children:es}),x.jsxs("div",{className:"bg-base-100 p-8 max-w-md w-full m-2 rounded-lg shadow-lg dark:shadow-xl",children:[r.length>0&&x.jsx("div",{className:"flex flex-col gap-3 mb-3",children:r.map(s=>x.jsxs(Pn,{variant:"primary",href:s.url,icon:x.jsx(ae,{icon:Jr[t].icon}),children:["Download for ",s.name]},s.name))}),x.jsxs("div",{className:"flex flex-col gap-3",children:[r.length>0&&x.jsxs(Sn,{variant:"link",className:"self-start",onPress:()=>a(!n),children:[n?"Hide":"Show"," all downloads"]}),n&&x.jsx("div",{children:Object.entries(Ot).map(([s,i])=>x.jsx("div",{children:kt(i).map(o=>x.jsxs("a",{href:o.url,className:"flex gap-1 mb-3 text-base-content hover:underline",children:[x.jsx(Dn,{className:"w-5"}),o.name]},o.name))},s))})]})]}),x.jsx("a",{className:"text-md hover:underline",href:"https://github.com/danielsvane/zmk-studio/releases",children:"See GitHub Releases →"})]})};En.createRoot(document.getElementById("root")).render(x.jsx(Kt.StrictMode,{children:x.jsx(rs,{})}));
