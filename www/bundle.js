(()=>{"use strict";var e={208:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(601),s=i.n(n),r=i(314),o=i.n(r)()(s());o.push([e.id,"body {\n    /* background-color: green; */\n    height: 100vh;\n    margin: 0;\n}\n\nmain {\n    padding: 8px;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    height: calc(100% - 19px);\n    gap: 8px;\n}\n\n#items {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    transition: 1s;\n}\n\n#items.visible {\n    gap: 8px;\n}\n\n#items #contents {\n    grid-column: 1 / 2;\n    overflow-x: auto;\n    height: calc(100vh - 66px);\n}\n\n#items #details {\n    padding: 0;\n    width: 0;\n    border: unset;\n    box-shadow: unset;\n}\n\n#items.visible #details {\n    padding: 8px;\n    width: 480px;\n    border: solid 1px #F3F3F3;\n}\n\n#items.type-text #details .file-details {\n    display: none;\n}\n\n#items.type-file #details .text-details {\n    display: none;\n}\n\n#items.type-file #details .file-details {\n    display: grid;\n    grid-template-rows: auto 1fr auto auto;\n    gap: 8px;\n    height: 100%;\n}\n\n#items.type-file #details .file-details #file-title {\n    grid-row: 1 / 2;\n    margin: 8px 4px 0 4px;\n}\n\n#items.type-file #details .file-details #operation-file {\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n}\n\n#items.type-file #details .file-details #remove-file {\n    grid-row: 4 / 5;\n}\n\n/* テキスト */\n#items.type-text #details .text-details {\n    display: grid;\n    grid-template-rows: auto auto auto auto;\n    gap: 8px;\n}\n\n#items.type-text #details .text-details #text-title {\n    grid-row: 1 / 2;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    margin: 8px 4px 0 4px;\n    user-select: none;\n    height: 36px;\n}\n\n#items.type-text #details .text-details #text-content {\n    grid-row: 2 / 3;\n    margin: 0 4px;\n    height: calc(100vh - 217px);\n    overflow-y: auto;\n}\n\n#items.type-text #details .text-details #remove-text {\n    grid-row: 4 / 5;\n}\n/* ここまで */\n\n\n#input-content{\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    gap: 8px;\n}\n\n#contents fluent-option {\n    flex-shrink: 0;\n    margin: 2px 4px;\n}\n\n/* 進捗バー */\n#progress.hidden-progress {\n    visibility: hidden;\n}\n\n@media only screen and (max-width: 768px) {\n    main {\n        display: block;\n    }\n\n    #items {\n        grid-template-columns: unset;\n        /* grid-template-rows: auto auto; */\n        display: block;\n    }\n\n    #items #contents {\n        height: unset;\n        margin-top: 8px;\n        width: calc(100vw - 16px);\n    }\n\n    #items #details {\n        height: 0;\n    }\n\n    #items.visible #details {\n        width: unset;\n        height: auto;\n        margin-top: 8px;\n    }\n\n    #items.type-text #details .text-details #text-content {\n        height: unset;\n    }\n\n    #input-content {\n        margin-top: 8px;\n    }\n}",""]);const a=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var h=[].concat(e[c]);n&&o[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),i&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=i):h[2]=i),s&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=s):h[4]="".concat(s)),t.push(h))}},t}},601:e=>{e.exports=function(e){return e[1]}},511:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(72),s=i.n(n),r=i(825),o=i.n(r),a=i(659),l=i.n(a),c=i(56),h=i.n(c),u=i(540),d=i.n(u),p=i(113),f=i.n(p),g=i(208),v={};v.styleTagTransform=f(),v.setAttributes=h(),v.insert=l().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),s()(g.A,v);const m=g.A&&g.A.locals?g.A.locals:void 0},72:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var r={},o=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],h=r[c]||0,u="".concat(c," ").concat(h);r[c]=h+1;var d=i(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=s(p,n);n.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,s){var r=n(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var a=i(r[o]);t[a].references--}for(var l=n(e,s),c=0;c<r.length;c++){var h=i(r[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}r=l}}},659:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var s=void 0!==i.layer;s&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,s&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0;const n=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===n.trustedTypes&&(n.trustedTypes={createPolicy:(e,t)=>t});const s={configurable:!1,enumerable:!1,writable:!1};void 0===n.FAST&&Reflect.defineProperty(n,"FAST",Object.assign({value:Object.create(null)},s));const r=n.FAST;if(void 0===r.getById){const e=Object.create(null);Reflect.defineProperty(r,"getById",Object.assign({value(t,i){let n=e[t];return void 0===n&&(n=i?e[t]=i():null),n}},s))}const o=Object.freeze([]);function a(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let n=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==n;)i=e.get(n),n=Reflect.getPrototypeOf(n);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}const l=n.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function s(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function r(){let t=0;for(;t<e.length;)if(s(e[t]),t++,t>1024){for(let i=0,n=e.length-t;i<n;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&n.requestAnimationFrame(r),e.push(t)},process:r})})),c=n.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let h=c;const u=`fast-${Math.random().toString(36).substring(2,8)}`,d=`${u}{`,p=`}${u}`,f=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(h!==c)throw new Error("The HTML policy can only be set once.");h=e},createHTML:e=>h.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(u),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${u}:`,"")),createInterpolationPlaceholder:e=>`${d}${e}${p}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${u}:${e}--\x3e`,queueUpdate:l.enqueue,processUpdates:l.process,nextUpdate:()=>new Promise(l.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class g{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==n&&n.handleChange(i,e)}else for(let n=0,s=t.length;n<s;++n)t[n].handleChange(i,e)}}class v{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new g(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new g(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}const m=r.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=f.queueUpdate;let n,s=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=s(e):t.set(e,i=new v(e))),i}const o=a();class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,n=e[i];if(n!==t){e[i]=t;const s=e[this.callback];"function"==typeof s&&s.call(e,n,t),r(e).notify(this.name)}}}class c extends g{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const s=this.binding(e,t);return n=i,s}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,s=r(e),o=null===i?this.first:{};if(o.propertySource=e,o.propertyName=t,o.notifier=s,s.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;n=void 0,t=i.propertySource[i.propertyName],n=this,e===t&&(this.needsRefresh=!0)}i.next=o}this.last=o}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){s=e},getNotifier:r,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),o(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:o,binding(e,t,i=this.isVolatileBinding(e)){return new c(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function b(e,t){m.defineProperty(e,t)}const y=r.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class x{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){y.set(e)}}m.defineProperty(x.prototype,"index"),m.defineProperty(x.prototype,"length");const w=Object.seal(new x);class ${constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function k(e){return e.map((e=>e instanceof $?k(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function C(e){return e.map((e=>e instanceof $?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}$.create=(()=>{if(f.supportsAdoptedStyleSheets){const e=new Map;return t=>new D(t,e)}return e=>new L(e)})();const S=Symbol("prependToAdoptedStyleSheets");function O(e){const t=[],i=[];return e.forEach((e=>(e[S]?t:i).push(e))),{prepend:t,append:i}}let F=(e,t)=>{const{prepend:i,append:n}=O(t);e.adoptedStyleSheets=[...i,...e.adoptedStyleSheets,...n]},V=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(f.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),F=(e,t)=>{const{prepend:i,append:n}=O(t);e.adoptedStyleSheets.splice(0,0,...i),e.adoptedStyleSheets.push(...n)},V=(e,t)=>{for(const i of t){const t=e.adoptedStyleSheets.indexOf(i);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class D extends ${constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=C(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=k(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){F(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){V(e,this.styleSheets),super.removeStylesFrom(e)}}let T=0;class L extends ${constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=C(e),this.styleSheets=k(e),this.styleClass="fast-style-class-"+ ++T}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const s=document.createElement("style");s.innerHTML=t[n],s.className=i,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,n=t.length;i<n;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const I=Object.freeze({locate:a()}),E={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},R={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class N{constructor(e,t,i=t.toLowerCase(),n="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=n,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===s&&(this.converter=E)}setValue(e,t){const i=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return m.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||f.queueUpdate((()=>{i.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;f.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":f.setBooleanAttribute(e,this.attribute,n)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(I.locate(e));for(let n=0,s=t.length;n<s;++n){const s=t[n];if(void 0!==s)for(let t=0,n=s.length;t<n;++t){const n=s[t];"string"==typeof n?i.push(new N(e,n)):i.push(new N(e,n.property,n.attribute,n.mode,n.converter))}}return i}}function P(e,t){let i;function n(e,t){arguments.length>1&&(i.property=t),I.locate(e.constructor).push(i)}return arguments.length>1?(i={},void n(e,t)):(i=void 0===e?{}:e,n)}const A={mode:"open"},M={},B=r.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class j{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=N.collect(e,t.attributes),n=new Array(i.length),s={},r={};for(let e=0,t=i.length;e<t;++e){const t=i[e];n[e]=t.attribute,s[t.name]=t,r[t.attribute]=t}this.attributes=i,this.observedAttributes=n,this.propertyLookup=s,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?A:null===t.shadowOptions?void 0:Object.assign(Object.assign({},A),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?M:Object.assign(Object.assign({},M),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?$.create(t.styles):t.styles instanceof $?t.styles:$.create([t.styles])}get isDefined(){return!!B.getByType(this.type)}define(e=customElements){const t=this.type;if(B.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,n=e.length;t<n;++t)m.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function H(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}j.forType=B.getByType;const z=new WeakMap,_={bubbles:!0,composed:!0,cancelable:!0};function U(e){return e.shadowRoot||z.get(e)||null}class q extends v{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&z.set(e,t)}const n=m.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,s=n.length;i<s;++i){const s=n[i].name,r=e[s];void 0!==r&&(delete e[s],t[s]=r)}}}get isConnected(){return m.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,m.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=U(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=U(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,n=[];for(let s=0;s<i;++s){const i=e[s];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),n.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,w)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const n=e.length,s=[];for(let r=0;r<n;++r){const n=e[r];if(i.has(n)){const e=i.get(n)-1;0===e||t?i.delete(n)&&s.push(n):i.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,w);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,w);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},_),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let n=0,s=i.length;n<s;++n){const s=i[n];e[s]=t[s]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=U(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||f.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=j.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new q(e,i)}}function K(e){return class extends e{constructor(){super(),q.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const G=Object.assign(K(HTMLElement),{from:e=>K(e),define:(e,t)=>new j(e,t).define().type}),W=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let n=W.get(i);void 0===n&&W.set(i,n=new Map),n.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=W.get(t);if(void 0!==i)return i.get(e)});class J{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,xe(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:n}=this;return this.container=this.key=void 0,i.registerResolver(n,new le(n,e,t))}}function X(e){const t=e.slice(),i=Object.keys(e),n=i.length;let s;for(let r=0;r<n;++r)s=i[r],Ve(s)||(t[s]=e[s]);return t}const Y=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new le(e,1,e),transient:e=>new le(e,2,e)}),Q=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Y.singleton})}),Z=new Map;function ee(e){return t=>Reflect.getOwnMetadata(e,t)}let te=null;const ie=Object.freeze({createContainer:e=>new be(null,Object.assign({},Q.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ie.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ve,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ie.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new be(e,Object.assign({},Q.default,t,{parentLocator:ie.findParentContainer})):te||(te=new be(null,Object.assign({},Q.default,t,{parentLocator:()=>null}))),getDesignParamtypes:ee("design:paramtypes"),getAnnotationParamtypes:ee("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Z.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=ie.getDesignParamtypes(e),n=ie.getAnnotationParamtypes(e);if(void 0===i)if(void 0===n){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?X(ie.getDependencies(i)):[]}else t=X(n);else if(void 0===n)t=X(i);else{t=X(i);let e,s=n.length;for(let i=0;i<s;++i)e=n[i],void 0!==e&&(t[i]=e);const r=Object.keys(n);let o;s=r.length;for(let e=0;e<s;++e)o=r[e],Ve(o)||(t[o]=n[o])}}else t=X(i);Z.set(e,t)}return t},defineProperty(e,t,i,n=!1){const s=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[s];if(void 0===e){const r=this instanceof HTMLElement?ie.findResponsibleContainer(this):ie.getOrCreateDOMContainer();if(e=r.get(i),this[s]=e,n&&this instanceof G){const n=this.$fastController,r=()=>{ie.findResponsibleContainer(this).get(i)!==this[s]&&(this[s]=e,n.notify(t))};n.subscribe({handleChange:r},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,n="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ce,s="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),r=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${r.friendlyName}'`);t?ie.defineProperty(e,t,r,s):ie.getOrCreateAnnotationParamTypes(e)[i]=r};return r.$isInterface=!0,r.friendlyName=null==n?"(anonymous)":n,null!=i&&(r.register=function(e,t){return i(new J(e,null!=t?t:r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject:(...e)=>function(t,i,n){if("number"==typeof n){const i=ie.getOrCreateAnnotationParamTypes(t),s=e[0];void 0!==s&&(i[n]=s)}else if(i)ie.defineProperty(t,i,e[0]);else{const i=n?ie.getOrCreateAnnotationParamTypes(n.value):ie.getOrCreateAnnotationParamTypes(t);let s;for(let t=0;t<e.length;++t)s=e[t],void 0!==s&&(i[t]=s)}},transient:e=>(e.register=function(t){return we.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=re)=>(e.register=function(t){return we.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),ne=ie.createInterface("Container");function se(e){return function(t){const i=function(e,t,n){ie.inject(i)(e,t,n)};return i.$isResolver=!0,i.resolve=function(i,n){return e(t,i,n)},i}}ie.inject;const re={scoped:!1};function oe(e,t,i){ie.inject(oe)(e,t,i)}function ae(e,t){return t.getFactory(e).construct(t)}se(((e,t,i)=>()=>i.get(e))),se(((e,t,i)=>i.has(e,!0)?i.get(e):void 0)),oe.$isResolver=!0,oe.resolve=()=>{},se(((e,t,i)=>{const n=ae(e,t),s=new le(e,0,n);return i.registerResolver(e,s),n})),se(((e,t,i)=>ae(e,t)));class le{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(n=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==n?n:null;default:return null}}}function ce(e){return this.get(e)}function he(e,t){return t(e)}class ue{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(ce,e)):new this.Type(...this.dependencies.map(ce,e),...t),null==this.transformers?i:this.transformers.reduce(he,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const de={$isResolver:!0,resolve:(e,t)=>t};function pe(e){return"function"==typeof e.register}function fe(e){return function(e){return pe(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const ge=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ve="__DI_LOCATE_PARENT__",me=new Map;class be{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ne,de),e instanceof Node&&e.addEventListener(ve,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,n,s,r;const o=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Se(t))if(pe(t))t.register(this,o);else if(void 0!==t.prototype)we.singleton(t,t).register(this);else for(i=Object.keys(t),s=0,r=i.length;s<r;++s)n=t[i[s]],Se(n)&&(pe(n)?n.register(this,o):this.register(n));return--this.registerDepth,this}registerResolver(e,t){$e(e);const i=this.resolvers,n=i.get(e);return null==n?i.set(e,t):n instanceof le&&4===n.strategy?n.state.push(t):i.set(e,new le(e,4,[n,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if($e(e),void 0!==e.resolve)return e;let i,n=this;for(;null!=n;){if(i=n.resolvers.get(e),null!=i)return i;if(null==n.parent){const i=fe(e)?this:n;return t?this.jitRegister(e,i):null}n=n.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if($e(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const n=fe(e)?this:i;return t=this.jitRegister(e,n),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){$e(e);const i=this;let n,s=i;if(t){let t=o;for(;null!=s;)n=s.resolvers.get(e),null!=n&&(t=t.concat(ke(n,s,i))),s=s.parent;return t}for(;null!=s;){if(n=s.resolvers.get(e),null!=n)return ke(n,s,i);if(s=s.parent,null==s)return o}return o}getFactory(e){let t=me.get(e);if(void 0===t){if(Oe(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);me.set(e,t=new ue(e,ie.getDependencies(e)))}return t}registerFactory(e,t){me.set(e,t)}createChild(e){return new be(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(ge.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(pe(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const ye=new WeakMap;function xe(e){return function(t,i,n){if(ye.has(n))return ye.get(n);const s=e(t,i,n);return ye.set(n,s),s}}const we=Object.freeze({instance:(e,t)=>new le(e,0,t),singleton:(e,t)=>new le(e,1,t),transient:(e,t)=>new le(e,2,t),callback:(e,t)=>new le(e,3,t),cachedCallback:(e,t)=>new le(e,3,xe(t)),aliasTo:(e,t)=>new le(t,5,e)});function $e(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ke(e,t,i){if(e instanceof le&&4===e.strategy){const n=e.state;let s=n.length;const r=new Array(s);for(;s--;)r[s]=n[s].resolve(t,i);return r}return[e.resolve(t,i)]}const Ce="(anonymous)";function Se(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Oe=function(){const e=new WeakMap;let t=!1,i="",n=0;return function(s){return t=e.get(s),void 0===t&&(i=s.toString(),n=i.length,t=n>=29&&n<=100&&125===i.charCodeAt(n-1)&&i.charCodeAt(n-2)<=32&&93===i.charCodeAt(n-3)&&101===i.charCodeAt(n-4)&&100===i.charCodeAt(n-5)&&111===i.charCodeAt(n-6)&&99===i.charCodeAt(n-7)&&32===i.charCodeAt(n-8)&&101===i.charCodeAt(n-9)&&118===i.charCodeAt(n-10)&&105===i.charCodeAt(n-11)&&116===i.charCodeAt(n-12)&&97===i.charCodeAt(n-13)&&110===i.charCodeAt(n-14)&&88===i.charCodeAt(n-15),e.set(s,t)),t}}(),Fe={};function Ve(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Fe[e];if(void 0!==t)return t;const i=e.length;if(0===i)return Fe[e]=!1;let n=0;for(let t=0;t<i;++t)if(n=e.charCodeAt(t),0===t&&48===n&&i>1||n<48||n>57)return Fe[e]=!1;return Fe[e]=!0}default:return!1}}function De(e){return`${e.toLowerCase()}:presentation`}const Te=new Map,Le=Object.freeze({define(e,t,i){const n=De(e);void 0===Te.get(n)?Te.set(n,t):Te.set(n,!1),i.register(we.instance(n,t))},forTag(e,t){const i=De(e),n=Te.get(i);return!1===n?ie.findResponsibleContainer(t).get(i):n||null}});class Ie{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?$.create(t):t instanceof $?t:$.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Ee extends G{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Le.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Ne(this===Ee?class extends Ee{}:this,e,t)}}function Re(e,t,i){return"function"==typeof e?e(t,i):e}H([b],Ee.prototype,"template",void 0),H([b],Ee.prototype,"styles",void 0);class Ne{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,n=this.overrideDefinition,s=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Ie(Re(i.template,e,i),Re(i.styles,e,i));e.definePresentation(t);let s=Re(i.shadowOptions,e,i);e.shadowRootMode&&(s?n.shadowOptions||(s.mode=e.shadowRootMode):null!==s&&(s={mode:e.shadowRootMode})),e.defineElement({elementOptions:Re(i.elementOptions,e,i),shadowOptions:s,attributes:Re(i.attributes,e,i)})}})}}class Pe{createCSS(){return""}createBehavior(){}}function Ae(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Me=document.createElement("div");class Be{setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class je extends Be{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class He extends Be{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class ze{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),m.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),f.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),f.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}H([b],ze.prototype,"target",void 0);class _e{constructor(e){this.target=e.style}setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class Ue{setProperty(e,t){Ue.properties[e]=t;for(const i of Ue.roots.values())Ge.getOrCreate(Ue.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete Ue.properties[e];for(const t of Ue.roots.values())Ge.getOrCreate(Ue.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ue;if(!t.has(e)){t.add(e);const i=Ge.getOrCreate(this.normalizeRoot(e));for(const e in Ue.properties)i.setProperty(e,Ue.properties[e])}}static unregisterRoot(e){const{roots:t}=Ue;if(t.has(e)){t.delete(e);const i=Ge.getOrCreate(Ue.normalizeRoot(e));for(const e in Ue.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===Me?document:e}}Ue.roots=new Set,Ue.properties={};const qe=new WeakMap,Ke=f.supportsAdoptedStyleSheets?class extends Be{constructor(e){super();const t=new CSSStyleSheet;t[S]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles($.create([t]))}}:ze,Ge=Object.freeze({getOrCreate(e){if(qe.has(e))return qe.get(e);let t;return t=e===Me?new Ue:e instanceof Document?f.supportsAdoptedStyleSheets?new je:new He:e instanceof G?new Ke(e):new _e(e),qe.set(e,t),t}});class We extends Pe{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=We.uniqueId(),We.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new We({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return We.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=Ze.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof We&&(t=this.alias(t)),Ze.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Ze.existsFor(e)&&Ze.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Me,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!Ze.existsFor(t)&&Ze.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}We.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),We.tokensById=new Map;class Je{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=m.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,w))}}class Xe{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),m.getNotifier(this).notify(e.id))}get(e){return m.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Ye=new WeakMap,Qe=new WeakMap;class Ze{constructor(e){this.target=e,this.store=new Xe,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=We.getTokenById(t);i&&(i.notify(this.target),this.updateCSSTokenReflection(e,i))}},Ye.set(e,this),m.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof G?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ye.get(e)||new Ze(e)}static existsFor(e){return Ye.has(e)}static findParent(e){if(Me!==e.target){let t=Ae(e.target);for(;null!==t;){if(Ye.has(t))return Ye.get(t);t=Ae(t)}return Ze.getOrCreate(Me)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Me?Ze.getOrCreate(Me):null}while(null!==i);return null}get parent(){return Qe.get(this)||null}updateCSSTokenReflection(e,t){if(We.isCSSDesignToken(t)){const i=this.parent,n=this.isReflecting(t);if(i){const s=i.get(t),r=e.get(t);s===r||n?s===r&&n&&this.stopReflectToCSS(t):this.reflectToCSS(t)}else n||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=Ze.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){We.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),We.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=Ze.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Qe.get(this).removeChild(this)}appendChild(e){e.parent&&Qe.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Qe.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),m.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),m.getNotifier(this.store).unsubscribe(e),e.parent===this&&Qe.delete(e)}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=Ae(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Ze.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Ze.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=We.getTokenById(t);i&&(this.hydrate(i,this.getRaw(i)),this.updateCSSTokenReflection(this.store,i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);We.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new Je(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}Ze.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){Ge.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Ze.getOrCreate(t).get(e)))}remove(e,t){Ge.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},H([b],Ze.prototype,"children",void 0);const et=Object.freeze({create:function(e){return We.from(e)},notifyConnection:e=>!(!e.isConnected||!Ze.existsFor(e)||(Ze.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!Ze.existsFor(e)||(Ze.getOrCreate(e).unbind(),0)),registerRoot(e=Me){Ue.registerRoot(e)},unregisterRoot(e=Me){Ue.unregisterRoot(e)}}),tt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),it=new Map,nt=new Map;let st=null;const rt=ie.createInterface((e=>e.cachedCallback((e=>(null===st&&(st=new at(null,e)),st))))),ot=Object.freeze({tagFor:e=>nt.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||ie.findResponsibleContainer(e).get(rt)},getOrCreate(e){if(!e)return null===st&&(st=ie.getOrCreateDOMContainer().get(rt)),st;const t=e.$$designSystem$$;if(t)return t;const i=ie.getOrCreateDOMContainer(e);if(i.has(rt,!1))return i.get(rt);{const t=new at(e,i);return i.register(we.instance(rt,t)),t}}});class at{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>tt.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],n=this.disambiguate,s=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(e,r,o){const a=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,r,o),{name:l,callback:c,baseClass:h}=a;let{type:u}=a,d=l,p=it.get(d),f=!0;for(;p;){const e=n(d,u,p);switch(e){case tt.ignoreDuplicate:return;case tt.definitionCallbackOnly:f=!1,p=void 0;break;default:d=e,p=it.get(d)}}f&&((nt.has(u)||u===Ee)&&(u=class extends u{}),it.set(d,u),nt.set(u,d),h&&nt.set(h,d)),i.push(new lt(t,d,u,s,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&et.registerRoot(this.designTokenRoot)),t.registerWithContext(r,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class lt{constructor(e,t,i,n,s,r){this.container=e,this.name=t,this.type=i,this.shadowRootMode=n,this.callback=s,this.willDefine=r,this.definition=null}definePresentation(e){Le.define(this.name,e,this.container)}defineElement(e){this.definition=new j(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ot.tagFor(e)}}class ct extends Ee{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,n=t-e;this.percentComplete=0===n?0:Math.fround((i-e)/n*100)}}H([P({converter:R})],ct.prototype,"value",void 0),H([P({converter:R})],ct.prototype,"min",void 0),H([P({converter:R})],ct.prototype,"max",void 0),H([P({mode:"boolean"})],ct.prototype,"paused",void 0),H([b],ct.prototype,"percentComplete",void 0);class ht{constructor(){this.targetIndex=0}}class ut extends ht{constructor(){super(...arguments),this.createPlaceholder=f.createInterpolationPlaceholder}}class dt extends ht{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return f.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function pt(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=m.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function ft(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function gt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function vt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function mt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function bt(e){f.setAttribute(this.target,this.targetName,e)}function yt(e){f.setBooleanAttribute(this.target,this.targetName,e)}function xt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function wt(e){this.target[this.targetName]=e}function $t(e){const t=this.classVersions||Object.create(null),i=this.target;let n=this.version||0;if(null!=e&&e.length){const s=e.split(/\s+/);for(let e=0,r=s.length;e<r;++e){const r=s[e];""!==r&&(t[r]=n,i.classList.add(r))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&i.classList.remove(e)}}class kt extends ut{constructor(e){super(),this.binding=e,this.bind=pt,this.unbind=gt,this.updateTarget=bt,this.isBindingVolatile=m.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=wt,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>f.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=yt;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=ft,this.unbind=mt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=$t)}}targetAtContent(){this.updateTarget=xt,this.unbind=vt}createBehavior(e){return new Ct(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ct{constructor(e,t,i,n,s,r,o){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=n,this.unbind=s,this.updateTarget=r,this.targetName=o}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){x.setEvent(e);const t=this.binding(this.source,this.context);x.setEvent(null),!0!==t&&e.preventDefault()}}let St=null;class Ot{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){St=this}static borrow(e){const t=St||new Ot;return t.directives=e,t.reset(),St=null,t}}function Ft(e){if(1===e.length)return e[0];let t;const i=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),s=new kt(((e,t)=>{let s="";for(let r=0;r<i;++r)s+=n[r](e,t);return s}));return s.targetName=t,s}const Vt=p.length;function Dt(e,t){const i=t.split(d);if(1===i.length)return null;const n=[];for(let t=0,s=i.length;t<s;++t){const s=i[t],r=s.indexOf(p);let o;if(-1===r)o=s;else{const t=parseInt(s.substring(0,r));n.push(e.directives[t]),o=s.substring(r+Vt)}""!==o&&n.push(o)}return n}function Tt(e,t,i=!1){const n=t.attributes;for(let s=0,r=n.length;s<r;++s){const o=n[s],a=o.value,l=Dt(e,a);let c=null;null===l?i&&(c=new kt((()=>a)),c.targetName=o.name):c=Ft(l),null!==c&&(t.removeAttributeNode(o),s--,r--,e.addFactory(c))}}function Lt(e,t,i){const n=Dt(e,t.textContent);if(null!==n){let s=t;for(let r=0,o=n.length;r<o;++r){const o=n[r],a=0===r?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);"string"==typeof o?a.textContent=o:(a.textContent=" ",e.captureContentBinding(o)),s=a,e.targetIndex++,a!==t&&i.nextNode()}e.targetIndex--}}const It=document.createRange();class Et{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let n,s=this.firstChild;for(;s!==t;)n=s.nextSibling,i.insertBefore(s,e),s=n;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,n=this.firstChild;for(;n!==t;)i=n.nextSibling,e.appendChild(n),n=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,n=this.firstChild;for(;n!==t;)i=n.nextSibling,e.removeChild(n),n=i;e.removeChild(t);const s=this.behaviors,r=this.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(r)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let s=0,r=i.length;s<r;++s){const r=i[s];r.unbind(n),r.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,s=i.length;n<s;++n)i[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,n=e.length;i<n;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){It.setStartBefore(e[0].firstChild),It.setEndAfter(e[e.length-1].lastChild),It.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],n=i.behaviors,s=i.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(s)}}}}class Rt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=f.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const n=Ot.borrow(t);Tt(n,e,!0);const s=n.behaviorFactories;n.reset();const r=f.createTemplateWalker(i);let o;for(;o=r.nextNode();)switch(n.targetIndex++,o.nodeType){case 1:Tt(n,o);break;case 3:Lt(n,o,r);break;case 8:f.isMarker(o)&&n.addFactory(t[f.extractDirectiveIndexFromMarker(o)])}let a=0;(f.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=n.behaviorFactories;return n.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:s,targetOffset:a}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,n=new Array(this.behaviorCount),s=f.createTemplateWalker(t);let r=0,o=this.targetOffset,a=s.nextNode();for(let e=i.length;r<e;++r){const e=i[r],t=e.targetIndex;for(;null!==a;){if(o===t){n[r]=e.createBehavior(a);break}a=s.nextNode(),o++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,s=t.length;i<s;++i,++r)n[r]=t[i].createBehavior(e)}return new Et(t,n)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const n=this.create(i);return n.bind(e,w),n.appendTo(t),n}}const Nt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Pt(e,...t){const i=[];let n="";for(let s=0,r=e.length-1;s<r;++s){const r=e[s];let o=t[s];if(n+=r,o instanceof Rt){const e=o;o=()=>e}if("function"==typeof o&&(o=new kt(o)),o instanceof ut){const e=Nt.exec(r);null!==e&&(o.targetName=e[2])}o instanceof ht?(n+=o.createPlaceholder(i.length),i.push(o)):n+=o}return n+=e[e.length-1],new Rt(n,i)}const At=e=>"function"==typeof e,Mt=()=>null;function Bt(e){return void 0===e?Mt:At(e)?e:()=>e}function jt(e,t){const i=[];let n="";const s=[];for(let r=0,o=e.length-1;r<o;++r){n+=e[r];let o=t[r];if(o instanceof Pe){const e=o.createBehavior();o=o.createCSS(),e&&s.push(e)}o instanceof $||o instanceof CSSStyleSheet?(""!==n.trim()&&(i.push(n),n=""),i.push(o)):n+=o}return n+=e[e.length-1],""!==n.trim()&&i.push(n),{styles:i,behaviors:s}}function Ht(e,...t){const{styles:i,behaviors:n}=jt(e,t),s=$.create(i);return n.length&&s.withBehaviors(...n),s}class zt extends Pe{constructor(e,t){super(),this.behaviors=t,this.css="";const i=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);i.length&&(this.styles=$.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function _t(e,...t){const{styles:i,behaviors:n}=jt(e,t);return new zt(i,n)}var Ut,qt;function Kt(e){return`:host([hidden]){display:none}:host{display:${e}}`}(qt=Ut||(Ut={})).Canvas="Canvas",qt.CanvasText="CanvasText",qt.LinkText="LinkText",qt.VisitedText="VisitedText",qt.ActiveText="ActiveText",qt.ButtonFace="ButtonFace",qt.ButtonText="ButtonText",qt.Field="Field",qt.FieldText="FieldText",qt.Highlight="Highlight",qt.HighlightText="HighlightText",qt.GrayText="GrayText";class Gt{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,i=this.constructListener(e);i.bind(t)(),t.addListener(i),this.listenerCache.set(e,i)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}class Wt extends Gt{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new Wt(e,t)}constructListener(e){let t=!1;const i=this.styles;return function(){const{matches:n}=this;n&&!t?(e.$fastController.addStyles(i),t=n):!n&&t&&(e.$fastController.removeStyles(i),t=n)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const Jt=Wt.with(window.matchMedia("(forced-colors)"));var Xt,Yt;function Qt(e,t,i){return isNaN(e)||e<=t?t:e>=i?i:e}function Zt(e,t,i){return isNaN(e)||e<=t?0:e>=i?1:e/(i-t)}function ei(e,t,i){return isNaN(e)?t:t+e*(i-t)}function ti(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:t+e*(i-t)}function ii(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}Wt.with(window.matchMedia("(prefers-color-scheme: dark)")),Wt.with(window.matchMedia("(prefers-color-scheme: light)")),function(e){e.ltr="ltr",e.rtl="rtl"}(Xt||(Xt={})),Math.PI;class ni{constructor(e,t,i){this.h=e,this.s=t,this.l=i}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new ni(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new ni(ii(this.h,e),ii(this.s,e),ii(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class si{constructor(e,t,i){this.l=e,this.a=t,this.b=i}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new si(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new si(ii(this.l,e),ii(this.a,e),ii(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}si.epsilon=216/24389,si.kappa=24389/27;class ri{constructor(e,t,i,n){this.r=e,this.g=t,this.b=i,this.a="number"!=typeof n||isNaN(n)?1:n}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new ri(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(ei(this.r,0,255))},${Math.round(ei(this.g,0,255))},${Math.round(ei(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(ei(this.r,0,255))},${Math.round(ei(this.g,0,255))},${Math.round(ei(this.b,0,255))},${Qt(this.a,0,1)})`}roundToPrecision(e){return new ri(ii(this.r,e),ii(this.g,e),ii(this.b,e),ii(this.a,e))}clamp(){return new ri(Qt(this.r,0,1),Qt(this.g,0,1),Qt(this.b,0,1),Qt(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(Qt(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(ei(e,0,255))}}class oi{constructor(e,t,i){this.x=e,this.y=t,this.z=i}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new oi(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new oi(ii(this.x,e),ii(this.y,e),ii(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function ai(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return function(e){return.2126*e.r+.7152*e.g+.0722*e.b}(new ri(t(e.r),t(e.g),t(e.b),1))}function li(e,t,i){return i-t==0?0:(e-t)/(i-t)}function ci(e,t,i){return(li(e.r,t.r,i.r)+li(e.g,t.g,i.g)+li(e.b,t.b,i.b))/3}function hi(e){const t=Math.max(e.r,e.g,e.b),i=Math.min(e.r,e.g,e.b),n=t-i;let s=0;0!==n&&(s=t===e.r?(e.g-e.b)/n%6*60:t===e.g?60*((e.b-e.r)/n+2):60*((e.r-e.g)/n+4)),s<0&&(s+=360);const r=(t+i)/2;let o=0;return 0!==n&&(o=n/(1-Math.abs(2*r-1))),new ni(s,o,r)}function ui(e,t=1){return function(e,t=1){function i(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const n=i(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),s=i(-.969266*e.x+1.8760108*e.y+.041556*e.z),r=i(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new ri(n,s,r,t)}(function(e){const t=(e.l+16)/116,i=t+e.a/500,n=t-e.b/200,s=Math.pow(i,3),r=Math.pow(t,3),o=Math.pow(n,3);let a=0;a=s>si.epsilon?s:(116*i-16)/si.kappa;let l=0;l=e.l>si.epsilon*si.kappa?r:e.l/si.kappa;let c=0;return c=o>si.epsilon?o:(116*n-16)/si.kappa,a=oi.whitePoint.x*a,l=oi.whitePoint.y*l,c=oi.whitePoint.z*c,new oi(a,l,c)}(e),t)}function di(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:new ri(ti(e,t.r,i.r),ti(e,t.g,i.g),ti(e,t.b,i.b),ti(e,t.a,i.a))}function pi(e,t){const i=e.relativeLuminance>t.relativeLuminance?e:t,n=e.relativeLuminance>t.relativeLuminance?t:e;return(i.relativeLuminance+.05)/(n.relativeLuminance+.05)}oi.whitePoint=new oi(.95047,1,1.08883),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(Yt||(Yt={}));const fi=Object.freeze({create:(e,t,i)=>new gi(e,t,i),from:e=>new gi(e.r,e.g,e.b)});class gi extends ri{constructor(e,t,i){super(e,t,i,1),this.toColorString=this.toStringHexRGB,this.contrast=pi.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ai(this)}static fromObject(e){return new gi(e.r,e.g,e.b)}}function vi(e,t,i=0,n=e.length-1){if(n===i)return e[i];const s=Math.floor((n-i)/2)+i;return t(e[s])?vi(e,t,i,s):vi(e,t,s+1,n)}const mi=(-.1+Math.sqrt(.21))/2;function bi(e){return e.relativeLuminance<=mi}function yi(e){return bi(e)?-1:1}const xi={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},wi=Object.freeze({create:function(e,t,i){return"number"==typeof e?wi.from(fi.create(e,t,i)):wi.from(e)},from:function(e,t){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const i in t)if(typeof t[i]!=typeof e[i])return!1;return!0}(e)?$i.from(e,t):$i.from(fi.create(e.r,e.g,e.b),t)}});class $i{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,i,n){void 0===i&&(i=this.closestIndexOf(e));let s=this.swatches;const r=this.lastIndex;let o=i;return void 0===n&&(n=yi(e)),-1===n&&(s=this.reversedSwatches,o=r-o),vi(s,(i=>pi(e,i)>=t),o,r)}get(e){return this.swatches[e]||this.swatches[Qt(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const i=this.swatches.reduce(((t,i)=>Math.abs(i.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?i:t));return t=this.swatches.indexOf(i),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const i=hi(e).s,n=hi(t);return n.s<i?function(e,t=1){const i=(1-Math.abs(2*e.l-1))*e.s,n=i*(1-Math.abs(e.h/60%2-1)),s=e.l-i/2;let r=0,o=0,a=0;return e.h<60?(r=i,o=n,a=0):e.h<120?(r=n,o=i,a=0):e.h<180?(r=0,o=i,a=n):e.h<240?(r=0,o=n,a=i):e.h<300?(r=n,o=0,a=i):e.h<360&&(r=i,o=0,a=n),new ri(r+s,o+s,a+s,t)}(new ni(n.h,i,n.l)):t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],i=function(e){function t(e){return e>si.epsilon?Math.pow(e,1/3):(si.kappa*e+16)/116}const i=t(e.x/oi.whitePoint.x),n=t(e.y/oi.whitePoint.y),s=t(e.z/oi.whitePoint.z);return new si(116*n-16,500*(i-n),200*(n-s))}(function(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const i=t(e.r),n=t(e.g),s=t(e.b);return new oi(.4124564*i+.3575761*n+.1804375*s,.2126729*i+.7151522*n+.072175*s,.0193339*i+.119192*n+.9503041*s)}(ri.fromObject(e).roundToPrecision(4))),n=ui(new si(0,i.a,i.b)).clamp().roundToPrecision(4),s=ui(new si(50,i.a,i.b)).clamp().roundToPrecision(4),r=ui(new si(100,i.a,i.b)).clamp().roundToPrecision(4),o=new ri(0,0,0),a=new ri(1,1,1),l=r.equalValue(a)?0:14,c=n.equalValue(o)?0:14;for(let e=100+l;e>=0-c;e-=.5){let i;i=e<0?di(e/c+1,o,n):e<=50?di($i.ramp(e),n,s):e<=100?di($i.ramp(e),s,r):di((e-100)/l,r,a),i=$i.saturationBump(s,i).roundToPrecision(4),t.push(fi.from(i))}return new $i(e,t)}static adjustEnd(e,t,i,n){const s=-1===n?t.swatches:t.reversedSwatches,r=e=>{const i=t.closestIndexOf(e);return 1===n?t.lastIndex-i:i};1===n&&i.reverse();const o=e(i[i.length-2]);if(ii(pi(i[i.length-1],i[i.length-2]),2)<o){i.pop();const e=r(t.colorContrast(s[t.lastIndex],o,void 0,n))-r(i[i.length-2]);let a=1;for(let n=i.length-e-1;n<i.length;n++){const e=r(i[n]),o=n===i.length-1?t.lastIndex:e+a;i[n]=s[o],a++}}1===n&&i.reverse()}static createColorPaletteByContrast(e,t){const i=$i.createHighResolutionPalette(e),n=e=>ii(t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp,2),s=[];let r=t.preserveSource?e:i.swatches[0];s.push(r);do{const e=n(r);r=i.colorContrast(r,e,void 0,1),s.push(r)}while(r.relativeLuminance>0);if(t.preserveSource){r=e;do{const e=n(r);r=i.colorContrast(r,e,void 0,-1),s.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(n,i,s,-1),t.preserveSource&&this.adjustEnd(n,i,s,1),s}static from(e,t){const i=void 0===t?xi:Object.assign(Object.assign({},xi),t);return new $i(e,Object.freeze($i.createColorPaletteByContrast(e,i)))}}const ki=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Ci(e){const t=ki.exec(e);if(null===t)return null;let i=t[1];if(3===i.length){const e=i.charAt(0),t=i.charAt(1),n=i.charAt(2);i=e.concat(e,t,t,n,n)}const n=parseInt(i,16);return isNaN(n)?null:new ri(Zt((16711680&n)>>>16,0,255),Zt((65280&n)>>>8,0,255),Zt(255&n,0,255),1)}const Si=fi.create(1,1,1),Oi=fi.create(0,0,0),Fi=fi.create(.5,.5,.5),Vi=Ci("#0078D4"),Di=fi.create(Vi.r,Vi.g,Vi.b);function Ti(e,t,i,n,s){const r=e=>e.contrast(Si)>=s?Si:Oi,o=r(e),a=r(t);return{rest:o,hover:a,active:o.relativeLuminance===a.relativeLuminance?o:r(i),focus:r(n)}}var Li;!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(Li||(Li={}));class Ii{constructor(e,t,i,n){this.toColorString=()=>this.cssGradient,this.contrast=pi.bind(null,this),this.createCSS=this.toColorString,this.color=new ri(e,t,i),this.cssGradient=n,this.relativeLuminance=ai(this.color),this.r=e,this.g=t,this.b=i}static fromObject(e,t){return new Ii(e.r,e.g,e.b,t)}}const Ei=new ri(0,0,0),Ri=new ri(1,1,1);function Ni(e,t,i,n,s,r,o,a,l=10,c=!1){const h=e.closestIndexOf(t);function u(i){if(c){const n=e.closestIndexOf(t),s=e.get(n),r=i.relativeLuminance<t.relativeLuminance?Ei:Ri,o=function(e,t,i=null){let n=0,s=i;return null!==s?n=ci(e,t,s):(s=new ri(0,0,0,1),n=ci(e,t,s),n<=0&&(s=new ri(1,1,1,1),n=ci(e,t,s))),n=Math.round(1e3*n)/1e3,new ri(s.r,s.g,s.b,n)}(Ci(i.toColorString()),Ci(s.toColorString()),r).roundToPrecision(2),a=function(e,t){if(t.a>=1)return t;if(t.a<=0)return new ri(e.r,e.g,e.b,1);const i=t.a*t.r+(1-t.a)*e.r,n=t.a*t.g+(1-t.a)*e.g,s=t.a*t.b+(1-t.a)*e.b;return new ri(i,n,s,1)}(Ci(t.toColorString()),o);return fi.from(a)}return i}void 0===a&&(a=yi(t));const d=h+a*i,p=d+a*(n-i),f=d+a*(s-i),g=d+a*(r-i),v=-1===a?0:100-l,m=-1===a?l:100;function b(t,i){const n=e.get(t);if(i){const i=e.get(t+a*o),s=-1===a?i:n,r=-1===a?n:i,l=`linear-gradient(${u(s).toColorString()} ${v}%, ${u(r).toColorString()} ${m}%)`;return Ii.fromObject(s,l)}return u(n)}return{rest:b(d,!0),hover:b(p,!0),active:b(f,!1),focus:b(g,!0)}}function Pi(e,t,i,n,s,r,o,a){null==a&&(a=yi(t));const l=e.closestIndexOf(e.colorContrast(t,i));return{rest:e.get(l+a*n),hover:e.get(l+a*s),active:e.get(l+a*r),focus:e.get(l+a*o)}}function Ai(e,t,i,n,s,r,o){const a=e.closestIndexOf(t);return null==o&&(o=yi(t)),{rest:e.get(a+o*i),hover:e.get(a+o*n),active:e.get(a+o*s),focus:e.get(a+o*r)}}function Mi(e,t,i,n,s,r,o=void 0,a,l,c,h,u=void 0){return bi(t)?Ai(e,t,a,l,c,h,u):Ai(e,t,i,n,s,r,o)}var Bi;function ji(e,t){return e.closestIndexOf((i=t,fi.create(i,i,i)));var i}function Hi(e,t,i){return e.get(ji(e,t)+-1*i)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(Bi||(Bi={}));const{create:zi}=et;function _i(e){return et.create({name:e,cssCustomPropertyName:null})}const Ui=zi("direction").withDefault(Xt.ltr),qi=zi("disabled-opacity").withDefault(.3),Ki=zi("base-height-multiplier").withDefault(8),Gi=(zi("base-horizontal-spacing-multiplier").withDefault(3),zi("density").withDefault(0)),Wi=zi("design-unit").withDefault(4),Ji=zi("control-corner-radius").withDefault(4),Xi=zi("layer-corner-radius").withDefault(8),Yi=zi("stroke-width").withDefault(1),Qi=zi("focus-stroke-width").withDefault(2),Zi=zi("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),en=zi("font-weight").withDefault(400);function tn(e){return t=>{const i=e.getValueFor(t),n=en.getValueFor(t);if(i.endsWith("px")){const e=Number.parseFloat(i.replace("px",""));if(e<=12)return`"wght" ${n}, "opsz" 8`;if(e>24)return`"wght" ${n}, "opsz" 36`}return`"wght" ${n}, "opsz" 10.5`}}const nn=zi("type-ramp-base-font-size").withDefault("14px"),sn=zi("type-ramp-base-line-height").withDefault("20px"),rn=zi("type-ramp-base-font-variations").withDefault(tn(nn)),on=zi("type-ramp-minus-1-font-size").withDefault("12px"),an=zi("type-ramp-minus-1-line-height").withDefault("16px"),ln=zi("type-ramp-minus-1-font-variations").withDefault(tn(on)),cn=zi("type-ramp-minus-2-font-size").withDefault("10px"),hn=zi("type-ramp-minus-2-line-height").withDefault("14px"),un=zi("type-ramp-minus-2-font-variations").withDefault(tn(cn)),dn=zi("type-ramp-plus-1-font-size").withDefault("16px"),pn=zi("type-ramp-plus-1-line-height").withDefault("22px"),fn=zi("type-ramp-plus-1-font-variations").withDefault(tn(dn)),gn=zi("type-ramp-plus-2-font-size").withDefault("20px"),vn=zi("type-ramp-plus-2-line-height").withDefault("26px"),mn=zi("type-ramp-plus-2-font-variations").withDefault(tn(gn)),bn=zi("type-ramp-plus-3-font-size").withDefault("24px"),yn=zi("type-ramp-plus-3-line-height").withDefault("32px"),xn=zi("type-ramp-plus-3-font-variations").withDefault(tn(bn)),wn=zi("type-ramp-plus-4-font-size").withDefault("28px"),$n=zi("type-ramp-plus-4-line-height").withDefault("36px"),kn=zi("type-ramp-plus-4-font-variations").withDefault(tn(wn)),Cn=zi("type-ramp-plus-5-font-size").withDefault("32px"),Sn=zi("type-ramp-plus-5-line-height").withDefault("40px"),On=zi("type-ramp-plus-5-font-variations").withDefault(tn(Cn)),Fn=zi("type-ramp-plus-6-font-size").withDefault("40px"),Vn=zi("type-ramp-plus-6-line-height").withDefault("52px"),Dn=zi("type-ramp-plus-6-font-variations").withDefault(tn(Fn)),Tn=zi("base-layer-luminance").withDefault(Bi.LightMode),Ln=_i("accent-fill-rest-delta").withDefault(0),In=_i("accent-fill-hover-delta").withDefault(-2),En=_i("accent-fill-active-delta").withDefault(-5),Rn=_i("accent-fill-focus-delta").withDefault(0),Nn=_i("accent-foreground-rest-delta").withDefault(0),Pn=_i("accent-foreground-hover-delta").withDefault(3),An=_i("accent-foreground-active-delta").withDefault(-8),Mn=_i("accent-foreground-focus-delta").withDefault(0),Bn=_i("neutral-fill-rest-delta").withDefault(-1),jn=_i("neutral-fill-hover-delta").withDefault(1),Hn=_i("neutral-fill-active-delta").withDefault(0),zn=_i("neutral-fill-focus-delta").withDefault(0),_n=_i("neutral-fill-input-rest-delta").withDefault(-1),Un=_i("neutral-fill-input-hover-delta").withDefault(1),qn=_i("neutral-fill-input-active-delta").withDefault(0),Kn=_i("neutral-fill-input-focus-delta").withDefault(-2),Gn=_i("neutral-fill-input-alt-rest-delta").withDefault(2),Wn=_i("neutral-fill-input-alt-hover-delta").withDefault(4),Jn=_i("neutral-fill-input-alt-active-delta").withDefault(6),Xn=_i("neutral-fill-input-alt-focus-delta").withDefault(2),Yn=_i("neutral-fill-layer-rest-delta").withDefault(-2),Qn=_i("neutral-fill-layer-hover-delta").withDefault(-3),Zn=_i("neutral-fill-layer-active-delta").withDefault(-3),es=_i("neutral-fill-layer-alt-rest-delta").withDefault(-1),ts=_i("neutral-fill-secondary-rest-delta").withDefault(3),is=_i("neutral-fill-secondary-hover-delta").withDefault(2),ns=_i("neutral-fill-secondary-active-delta").withDefault(1),ss=_i("neutral-fill-secondary-focus-delta").withDefault(3),rs=_i("neutral-fill-stealth-rest-delta").withDefault(0),os=_i("neutral-fill-stealth-hover-delta").withDefault(3),as=_i("neutral-fill-stealth-active-delta").withDefault(2),ls=_i("neutral-fill-stealth-focus-delta").withDefault(0),cs=_i("neutral-fill-strong-rest-delta").withDefault(0),hs=_i("neutral-fill-strong-hover-delta").withDefault(8),us=_i("neutral-fill-strong-active-delta").withDefault(-5),ds=_i("neutral-fill-strong-focus-delta").withDefault(0),ps=_i("neutral-stroke-rest-delta").withDefault(8),fs=_i("neutral-stroke-hover-delta").withDefault(12),gs=_i("neutral-stroke-active-delta").withDefault(6),vs=_i("neutral-stroke-focus-delta").withDefault(8),ms=_i("neutral-stroke-control-rest-delta").withDefault(3),bs=_i("neutral-stroke-control-hover-delta").withDefault(5),ys=_i("neutral-stroke-control-active-delta").withDefault(5),xs=_i("neutral-stroke-control-focus-delta").withDefault(5),ws=_i("neutral-stroke-divider-rest-delta").withDefault(4),$s=_i("neutral-stroke-layer-rest-delta").withDefault(3),ks=_i("neutral-stroke-layer-hover-delta").withDefault(3),Cs=_i("neutral-stroke-layer-active-delta").withDefault(3),Ss=_i("neutral-stroke-strong-hover-delta").withDefault(0),Os=_i("neutral-stroke-strong-active-delta").withDefault(0),Fs=_i("neutral-stroke-strong-focus-delta").withDefault(0),Vs=zi("neutral-base-color").withDefault(Fi),Ds=_i("neutral-palette").withDefault((e=>wi.from(Vs.getValueFor(e)))),Ts=zi("accent-base-color").withDefault(Di),Ls=_i("accent-palette").withDefault((e=>wi.from(Ts.getValueFor(e)))),Is=_i("neutral-layer-card-container-recipe").withDefault({evaluate:e=>Hi(Ds.getValueFor(e),Tn.getValueFor(e),Yn.getValueFor(e))}),Es=(zi("neutral-layer-card-container").withDefault((e=>Is.getValueFor(e).evaluate(e))),_i("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,i){return e.get(ji(e,t)+i)}(Ds.getValueFor(e),Tn.getValueFor(e),Yn.getValueFor(e))})),Rs=(zi("neutral-layer-floating").withDefault((e=>Es.getValueFor(e).evaluate(e))),_i("neutral-layer-1-recipe").withDefault({evaluate:e=>function(e,t){return e.get(ji(e,t))}(Ds.getValueFor(e),Tn.getValueFor(e))})),Ns=zi("neutral-layer-1").withDefault((e=>Rs.getValueFor(e).evaluate(e))),Ps=_i("neutral-layer-2-recipe").withDefault({evaluate:e=>Hi(Ds.getValueFor(e),Tn.getValueFor(e),Yn.getValueFor(e))}),As=(zi("neutral-layer-2").withDefault((e=>Ps.getValueFor(e).evaluate(e))),_i("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,i){return e.get(ji(e,t)+-1*i*2)}(Ds.getValueFor(e),Tn.getValueFor(e),Yn.getValueFor(e))})),Ms=(zi("neutral-layer-3").withDefault((e=>As.getValueFor(e).evaluate(e))),_i("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,i){return e.get(ji(e,t)+-1*i*3)}(Ds.getValueFor(e),Tn.getValueFor(e),Yn.getValueFor(e))})),Bs=(zi("neutral-layer-4").withDefault((e=>Ms.getValueFor(e).evaluate(e))),zi("fill-color").withDefault((e=>Ns.getValueFor(e))));var js;!function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"}(js||(js={}));const Hs=_i("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,i,n,s,r,o,a,l,c,h,u,d){return bi(t)?Pi(e,t,8,c,h,u,d,void 0):Pi(e,t,5,n,s,r,o,void 0)}(Ls.getValueFor(e),t||Bs.getValueFor(e),0,Ln.getValueFor(e),In.getValueFor(e),En.getValueFor(e),Rn.getValueFor(e),0,0,Ln.getValueFor(e),In.getValueFor(e),En.getValueFor(e),Rn.getValueFor(e))}),zs=zi("accent-fill-rest").withDefault((e=>Hs.getValueFor(e).evaluate(e).rest)),_s=zi("accent-fill-hover").withDefault((e=>Hs.getValueFor(e).evaluate(e).hover)),Us=zi("accent-fill-active").withDefault((e=>Hs.getValueFor(e).evaluate(e).active)),qs=zi("accent-fill-focus").withDefault((e=>Hs.getValueFor(e).evaluate(e).focus)),Ks=_i("foreground-on-accent-recipe").withDefault({evaluate:e=>Ti(zs.getValueFor(e),_s.getValueFor(e),Us.getValueFor(e),qs.getValueFor(e),js.normal)}),Gs=zi("foreground-on-accent-rest").withDefault((e=>Ks.getValueFor(e).evaluate(e).rest)),Ws=zi("foreground-on-accent-hover").withDefault((e=>Ks.getValueFor(e).evaluate(e).hover)),Js=zi("foreground-on-accent-active").withDefault((e=>Ks.getValueFor(e).evaluate(e).active)),Xs=(zi("foreground-on-accent-focus").withDefault((e=>Ks.getValueFor(e).evaluate(e).focus)),_i("accent-foreground-recipe").withDefault({evaluate:(e,t)=>Pi(Ls.getValueFor(e),t||Bs.getValueFor(e),9.5,Nn.getValueFor(e),Pn.getValueFor(e),An.getValueFor(e),Mn.getValueFor(e))})),Ys=zi("accent-foreground-rest").withDefault((e=>Xs.getValueFor(e).evaluate(e).rest)),Qs=zi("accent-foreground-hover").withDefault((e=>Xs.getValueFor(e).evaluate(e).hover)),Zs=zi("accent-foreground-active").withDefault((e=>Xs.getValueFor(e).evaluate(e).active)),er=(zi("accent-foreground-focus").withDefault((e=>Xs.getValueFor(e).evaluate(e).focus)),_i("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>Ni(Ds.getValueFor(e),t||Bs.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)})),tr=zi("accent-stroke-control-rest").withDefault((e=>er.getValueFor(e).evaluate(e,zs.getValueFor(e)).rest)),ir=zi("accent-stroke-control-hover").withDefault((e=>er.getValueFor(e).evaluate(e,_s.getValueFor(e)).hover)),nr=zi("accent-stroke-control-active").withDefault((e=>er.getValueFor(e).evaluate(e,Us.getValueFor(e)).active)),sr=(zi("accent-stroke-control-focus").withDefault((e=>er.getValueFor(e).evaluate(e,qs.getValueFor(e)).focus)),_i("neutral-fill-recipe").withDefault({evaluate:(e,t)=>Mi(Ds.getValueFor(e),t||Bs.getValueFor(e),Bn.getValueFor(e),jn.getValueFor(e),Hn.getValueFor(e),zn.getValueFor(e),void 0,2,3,1,2,void 0)})),rr=zi("neutral-fill-rest").withDefault((e=>sr.getValueFor(e).evaluate(e).rest)),or=zi("neutral-fill-hover").withDefault((e=>sr.getValueFor(e).evaluate(e).hover)),ar=zi("neutral-fill-active").withDefault((e=>sr.getValueFor(e).evaluate(e).active)),lr=(zi("neutral-fill-focus").withDefault((e=>sr.getValueFor(e).evaluate(e).focus)),_i("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>Mi(Ds.getValueFor(e),t||Bs.getValueFor(e),_n.getValueFor(e),Un.getValueFor(e),qn.getValueFor(e),Kn.getValueFor(e),void 0,2,3,1,0,void 0)})),cr=zi("neutral-fill-input-rest").withDefault((e=>lr.getValueFor(e).evaluate(e).rest)),hr=zi("neutral-fill-input-hover").withDefault((e=>lr.getValueFor(e).evaluate(e).hover)),ur=(zi("neutral-fill-input-active").withDefault((e=>lr.getValueFor(e).evaluate(e).active)),zi("neutral-fill-input-focus").withDefault((e=>lr.getValueFor(e).evaluate(e).focus))),dr=_i("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>Mi(Ds.getValueFor(e),t||Bs.getValueFor(e),Gn.getValueFor(e),Wn.getValueFor(e),Jn.getValueFor(e),Xn.getValueFor(e),1,Gn.getValueFor(e),Gn.getValueFor(e)-Wn.getValueFor(e),Gn.getValueFor(e)-Jn.getValueFor(e),Xn.getValueFor(e),1)}),pr=zi("neutral-fill-input-alt-rest").withDefault((e=>dr.getValueFor(e).evaluate(e).rest)),fr=zi("neutral-fill-input-alt-hover").withDefault((e=>dr.getValueFor(e).evaluate(e).hover)),gr=zi("neutral-fill-input-alt-active").withDefault((e=>dr.getValueFor(e).evaluate(e).active)),vr=zi("neutral-fill-input-alt-focus").withDefault((e=>dr.getValueFor(e).evaluate(e).focus)),mr=_i("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>Ai(Ds.getValueFor(e),t||Bs.getValueFor(e),Yn.getValueFor(e),Qn.getValueFor(e),Zn.getValueFor(e),Yn.getValueFor(e),1)}),br=(zi("neutral-fill-layer-rest").withDefault((e=>mr.getValueFor(e).evaluate(e).rest)),zi("neutral-fill-layer-hover").withDefault((e=>mr.getValueFor(e).evaluate(e).hover)),zi("neutral-fill-layer-active").withDefault((e=>mr.getValueFor(e).evaluate(e).active)),_i("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>Ai(Ds.getValueFor(e),t||Bs.getValueFor(e),es.getValueFor(e),es.getValueFor(e),es.getValueFor(e),es.getValueFor(e))})),yr=(zi("neutral-fill-layer-alt-rest").withDefault((e=>br.getValueFor(e).evaluate(e).rest)),_i("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>Ai(Ds.getValueFor(e),t||Bs.getValueFor(e),ts.getValueFor(e),is.getValueFor(e),ns.getValueFor(e),ss.getValueFor(e))})),xr=zi("neutral-fill-secondary-rest").withDefault((e=>yr.getValueFor(e).evaluate(e).rest)),wr=zi("neutral-fill-secondary-hover").withDefault((e=>yr.getValueFor(e).evaluate(e).hover)),$r=zi("neutral-fill-secondary-active").withDefault((e=>yr.getValueFor(e).evaluate(e).active)),kr=zi("neutral-fill-secondary-focus").withDefault((e=>yr.getValueFor(e).evaluate(e).focus)),Cr=_i("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>Ai(Ds.getValueFor(e),t||Bs.getValueFor(e),rs.getValueFor(e),os.getValueFor(e),as.getValueFor(e),ls.getValueFor(e))}),Sr=zi("neutral-fill-stealth-rest").withDefault((e=>Cr.getValueFor(e).evaluate(e).rest)),Or=zi("neutral-fill-stealth-hover").withDefault((e=>Cr.getValueFor(e).evaluate(e).hover)),Fr=zi("neutral-fill-stealth-active").withDefault((e=>Cr.getValueFor(e).evaluate(e).active)),Vr=zi("neutral-fill-stealth-focus").withDefault((e=>Cr.getValueFor(e).evaluate(e).focus)),Dr=_i("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>Pi(Ds.getValueFor(e),t||Bs.getValueFor(e),4.5,cs.getValueFor(e),hs.getValueFor(e),us.getValueFor(e),ds.getValueFor(e))}),Tr=(zi("neutral-fill-strong-rest").withDefault((e=>Dr.getValueFor(e).evaluate(e).rest)),zi("neutral-fill-strong-hover").withDefault((e=>Dr.getValueFor(e).evaluate(e).hover)),zi("neutral-fill-strong-active").withDefault((e=>Dr.getValueFor(e).evaluate(e).active)),zi("neutral-fill-strong-focus").withDefault((e=>Dr.getValueFor(e).evaluate(e).focus)),_i("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>Pi(Ds.getValueFor(e),t||Bs.getValueFor(e),16,0,-19,-30,0)})),Lr=zi("neutral-foreground-rest").withDefault((e=>Tr.getValueFor(e).evaluate(e).rest)),Ir=(zi("neutral-foreground-hover").withDefault((e=>Tr.getValueFor(e).evaluate(e).hover)),zi("neutral-foreground-active").withDefault((e=>Tr.getValueFor(e).evaluate(e).active)),zi("neutral-foreground-focus").withDefault((e=>Tr.getValueFor(e).evaluate(e).focus)),_i("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>function(e,t){return e.colorContrast(t,4.5)}(Ds.getValueFor(e),t||Bs.getValueFor(e))})),Er=zi("neutral-foreground-hint").withDefault((e=>Ir.getValueFor(e).evaluate(e))),Rr=_i("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>Ai(Ds.getValueFor(e),t||Bs.getValueFor(e),ps.getValueFor(e),fs.getValueFor(e),gs.getValueFor(e),vs.getValueFor(e))}),Nr=zi("neutral-stroke-rest").withDefault((e=>Rr.getValueFor(e).evaluate(e).rest)),Pr=zi("neutral-stroke-hover").withDefault((e=>Rr.getValueFor(e).evaluate(e).hover)),Ar=zi("neutral-stroke-active").withDefault((e=>Rr.getValueFor(e).evaluate(e).active)),Mr=(zi("neutral-stroke-focus").withDefault((e=>Rr.getValueFor(e).evaluate(e).focus)),_i("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>Ni(Ds.getValueFor(e),t||Bs.getValueFor(e),ms.getValueFor(e),bs.getValueFor(e),ys.getValueFor(e),xs.getValueFor(e),5)})),Br=zi("neutral-stroke-control-rest").withDefault((e=>Mr.getValueFor(e).evaluate(e).rest)),jr=zi("neutral-stroke-control-hover").withDefault((e=>Mr.getValueFor(e).evaluate(e).hover)),Hr=zi("neutral-stroke-control-active").withDefault((e=>Mr.getValueFor(e).evaluate(e).active)),zr=(zi("neutral-stroke-control-focus").withDefault((e=>Mr.getValueFor(e).evaluate(e).focus)),_i("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,i){return e.get(e.closestIndexOf(t)+yi(t)*i)}(Ds.getValueFor(e),t||Bs.getValueFor(e),ws.getValueFor(e))})),_r=(zi("neutral-stroke-divider-rest").withDefault((e=>zr.getValueFor(e).evaluate(e))),_i("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,i,n,s,r,o,a){const l=e.closestIndexOf(t),c=yi(t),h=l+c*i,u=h+c*(n-i),d=h+c*(s-i),p=h+c*(r-i),f=`calc(100% - ${a})`;function g(t,i){const n=e.get(t);if(i){const i=e.get(t+20*c),s=`linear-gradient(${n.toColorString()} ${f}, ${i.toColorString()} ${f}, ${i.toColorString()})`;return Ii.fromObject(n,s)}return n}return{rest:g(h,!0),hover:g(u,!0),active:g(d,!1),focus:g(p,!0)}}(Ds.getValueFor(e),t||Bs.getValueFor(e),ms.getValueFor(e),bs.getValueFor(e),ys.getValueFor(e),xs.getValueFor(e),0,Yi.getValueFor(e)+"px")})),Ur=zi("neutral-stroke-input-rest").withDefault((e=>_r.getValueFor(e).evaluate(e).rest)),qr=zi("neutral-stroke-input-hover").withDefault((e=>_r.getValueFor(e).evaluate(e).hover)),Kr=(zi("neutral-stroke-input-active").withDefault((e=>_r.getValueFor(e).evaluate(e).active)),zi("neutral-stroke-input-focus").withDefault((e=>_r.getValueFor(e).evaluate(e).focus)),_i("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>Ai(Ds.getValueFor(e),t||Bs.getValueFor(e),$s.getValueFor(e),ks.getValueFor(e),Cs.getValueFor(e),$s.getValueFor(e))})),Gr=zi("neutral-stroke-layer-rest").withDefault((e=>Kr.getValueFor(e).evaluate(e).rest)),Wr=(zi("neutral-stroke-layer-hover").withDefault((e=>Kr.getValueFor(e).evaluate(e).hover)),zi("neutral-stroke-layer-active").withDefault((e=>Kr.getValueFor(e).evaluate(e).active)),_i("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>Pi(Ds.getValueFor(e),t||Bs.getValueFor(e),5.5,0,Ss.getValueFor(e),Os.getValueFor(e),Fs.getValueFor(e))})),Jr=zi("neutral-stroke-strong-rest").withDefault((e=>Wr.getValueFor(e).evaluate(e).rest)),Xr=zi("neutral-stroke-strong-hover").withDefault((e=>Wr.getValueFor(e).evaluate(e).hover)),Yr=zi("neutral-stroke-strong-active").withDefault((e=>Wr.getValueFor(e).evaluate(e).active)),Qr=(zi("neutral-stroke-strong-focus").withDefault((e=>Wr.getValueFor(e).evaluate(e).focus)),_i("focus-stroke-outer-recipe").withDefault({evaluate:e=>(Ds.getValueFor(e),bi(Bs.getValueFor(e))?Si:Oi)})),Zr=zi("focus-stroke-outer").withDefault((e=>Qr.getValueFor(e).evaluate(e))),eo=_i("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return Ls.getValueFor(e),t=Bs.getValueFor(e),Zr.getValueFor(e),bi(t)?Oi:Si;var t}}),to=zi("focus-stroke-inner").withDefault((e=>eo.getValueFor(e).evaluate(e))),io=_i("foreground-on-accent-large-recipe").withDefault({evaluate:e=>Ti(zs.getValueFor(e),_s.getValueFor(e),Us.getValueFor(e),qs.getValueFor(e),js.large)}),no=(zi("foreground-on-accent-rest-large").withDefault((e=>io.getValueFor(e).evaluate(e).rest)),zi("foreground-on-accent-hover-large").withDefault((e=>io.getValueFor(e).evaluate(e,_s.getValueFor(e)).hover)),zi("foreground-on-accent-active-large").withDefault((e=>io.getValueFor(e).evaluate(e,Us.getValueFor(e)).active)),zi("foreground-on-accent-focus-large").withDefault((e=>io.getValueFor(e).evaluate(e,qs.getValueFor(e)).focus)),zi("neutral-fill-inverse-rest-delta").withDefault(0)),so=zi("neutral-fill-inverse-hover-delta").withDefault(-3),ro=zi("neutral-fill-inverse-active-delta").withDefault(7),oo=zi("neutral-fill-inverse-focus-delta").withDefault(0),ao=_i("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,i,n,s,r){const o=yi(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+o*Math.abs(i-n);let c,h;return(1===o?i<n:o*i>o*n)?(c=a,h=l):(c=l,h=a),{rest:e.get(c),hover:e.get(h),active:e.get(c+o*s),focus:e.get(c+o*r)}}(Ds.getValueFor(e),t||Bs.getValueFor(e),no.getValueFor(e),so.getValueFor(e),ro.getValueFor(e),oo.getValueFor(e))});zi("neutral-fill-inverse-rest").withDefault((e=>ao.getValueFor(e).evaluate(e).rest)),zi("neutral-fill-inverse-hover").withDefault((e=>ao.getValueFor(e).evaluate(e).hover)),zi("neutral-fill-inverse-active").withDefault((e=>ao.getValueFor(e).evaluate(e).active)),zi("neutral-fill-inverse-focus").withDefault((e=>ao.getValueFor(e).evaluate(e).focus));const lo=class extends ct{}.compose({baseName:"progress",template:(e,t)=>Pt`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${function(e,t,i){const n=At(e)?e:()=>e,s=Bt(t),r=Bt(i);return(e,t)=>n(e,t)?s(e,t):r(e,t)}((e=>"number"==typeof e.value),Pt`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `,Pt`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(e,t)=>Ht`
    ${Kt("flex")} :host {
      align-items: center;
      height: calc((${Yi} * 3) * 1px);
    }

    .progress {
      background-color: ${Jr};
      border-radius: calc(${Wi} * 1px);
      width: 100%;
      height: calc(${Yi} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${zs};
      border-radius: calc(${Wi} * 1px);
      height: calc((${Yi} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${Yi} * 3) * 1px);
      border-radius: calc(${Wi} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${zs};
      border-radius: calc(${Wi} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${zs};
      border-radius: calc(${Wi} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Er};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Er};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(Jt(Ht`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${Ut.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${Ut.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '});var co;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(co||(co={}));const ho="ArrowDown",uo="ArrowUp",po="Enter",fo="Escape",go="Home";let vo,mo=0;class bo{}H([P({attribute:"aria-atomic"})],bo.prototype,"ariaAtomic",void 0),H([P({attribute:"aria-busy"})],bo.prototype,"ariaBusy",void 0),H([P({attribute:"aria-controls"})],bo.prototype,"ariaControls",void 0),H([P({attribute:"aria-current"})],bo.prototype,"ariaCurrent",void 0),H([P({attribute:"aria-describedby"})],bo.prototype,"ariaDescribedby",void 0),H([P({attribute:"aria-details"})],bo.prototype,"ariaDetails",void 0),H([P({attribute:"aria-disabled"})],bo.prototype,"ariaDisabled",void 0),H([P({attribute:"aria-errormessage"})],bo.prototype,"ariaErrormessage",void 0),H([P({attribute:"aria-flowto"})],bo.prototype,"ariaFlowto",void 0),H([P({attribute:"aria-haspopup"})],bo.prototype,"ariaHaspopup",void 0),H([P({attribute:"aria-hidden"})],bo.prototype,"ariaHidden",void 0),H([P({attribute:"aria-invalid"})],bo.prototype,"ariaInvalid",void 0),H([P({attribute:"aria-keyshortcuts"})],bo.prototype,"ariaKeyshortcuts",void 0),H([P({attribute:"aria-label"})],bo.prototype,"ariaLabel",void 0),H([P({attribute:"aria-labelledby"})],bo.prototype,"ariaLabelledby",void 0),H([P({attribute:"aria-live"})],bo.prototype,"ariaLive",void 0),H([P({attribute:"aria-owns"})],bo.prototype,"ariaOwns",void 0),H([P({attribute:"aria-relevant"})],bo.prototype,"ariaRelevant",void 0),H([P({attribute:"aria-roledescription"})],bo.prototype,"ariaRoledescription",void 0);class yo{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function xo(e){return new dt("fast-ref",yo,e)}class wo{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const $o=(e,t)=>Pt`
    <span
        part="end"
        ${xo("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${xo("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,ko=(e,t)=>Pt`
    <span
        part="start"
        ${xo("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${xo("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function Co(e,...t){const i=I.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))})),I.locate(t).forEach((e=>i.push(e)))}))}function So(e){return function(...e){return e.every((e=>e instanceof HTMLElement))}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}Pt`
    <span part="end" ${xo("endContainer")}>
        <slot
            name="end"
            ${xo("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Pt`
    <span part="start" ${xo("startContainer")}>
        <slot
            name="start"
            ${xo("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;class Oo extends Ee{constructor(e,t,i,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),m.notify(this,"value")}get value(){var e;return m.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}H([b],Oo.prototype,"checked",void 0),H([b],Oo.prototype,"content",void 0),H([b],Oo.prototype,"defaultSelected",void 0),H([P({mode:"boolean"})],Oo.prototype,"disabled",void 0),H([P({attribute:"selected",mode:"boolean"})],Oo.prototype,"selectedAttribute",void 0),H([b],Oo.prototype,"selected",void 0),H([P({attribute:"value",mode:"fromView"})],Oo.prototype,"initialValue",void 0);class Fo{}H([b],Fo.prototype,"ariaChecked",void 0),H([b],Fo.prototype,"ariaPosInSet",void 0),H([b],Fo.prototype,"ariaSelected",void 0),H([b],Fo.prototype,"ariaSetSize",void 0),Co(Fo,bo),Co(Oo,wo,Fo);class Vo extends Ee{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return m.track(this,"options"),this._options}set options(e){this._options=e,m.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,n=e+i;let s=null;switch(i){case-1:s=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<n?t:e),s);break;case 1:s=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>n?t:e),s)}return this.options.indexOf(s)}handleChange(e,t){"selected"===t&&(Vo.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Vo.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case go:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case ho:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case uo:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case"End":e.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case po:case fo:return!0;case" ":if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),n=i>-1?i:e;return this.selectedIndex=n,void(t===n&&this.selectedIndexChanged(t,n))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const n=t.filter(Vo.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=m.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=n.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e){let t=e.length;for(;t--;)if(!e[t].disabled)return t;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(So(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=function(e=""){return`${e}${mo++}`}("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Vo.slottedOptionFilter=e=>So(e)&&!e.hidden,Vo.TYPE_AHEAD_TIMEOUT_MS=1e3,H([P({mode:"boolean"})],Vo.prototype,"disabled",void 0),H([b],Vo.prototype,"selectedIndex",void 0),H([b],Vo.prototype,"selectedOptions",void 0),H([b],Vo.prototype,"slottedOptions",void 0),H([b],Vo.prototype,"typeaheadBuffer",void 0);class Do{}H([b],Do.prototype,"ariaActiveDescendant",void 0),H([b],Do.prototype,"ariaDisabled",void 0),H([b],Do.prototype,"ariaExpanded",void 0),H([b],Do.prototype,"ariaMultiSelectable",void 0),Co(Do,bo),Co(Vo,Do);class To{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=m.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(o),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Lo extends To{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Io(e){return"string"==typeof e&&(e={property:e}),new dt("fast-slotted",Lo,e)}function Eo(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}class Ro extends Vo{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,n;this.ariaActiveDescendant=null!==(n=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Eo(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Eo(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Eo(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Eo(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case go:return void this.checkFirstOption(i);case ho:return void this.checkNextOption(i);case uo:return void this.checkPreviousOption(i);case"End":return void this.checkLastOption(i);case"Tab":return this.focusAndScrollOptionIntoView(),!0;case fo:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case" ":if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const n=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));n!==t&&f.queueUpdate((()=>{this.size=n}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}H([b],Ro.prototype,"activeIndex",void 0),H([P({mode:"boolean"})],Ro.prototype,"multiple",void 0),H([P({converter:R})],Ro.prototype,"size",void 0);const No=_t`
  outline: calc(${Qi} * 1px) solid ${Zr};
  outline-offset: calc(${Qi} * -1px);
`,Po=_t`
  outline: calc(${Qi} * 1px) solid ${Zr};
  outline-offset: calc(${Yi} * 1px);
`,Ao=class extends Vo{}.compose({baseName:"listbox",template:(e,t)=>Pt`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        <slot
            ${Io({filter:Ro.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(e,t)=>Ht`
    ${Kt("inline-flex")} :host {
      border: calc(${Yi} * 1px) solid ${Nr};
      border-radius: calc(${Ji} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${Wi} * 1px) 0;
    }

    ::slotted(${e.tagFor(Oo)}) {
      margin: 0 calc(${Wi} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${No}
    }
  `}),Mo=function(){if("boolean"==typeof vo)return vo;if("undefined"==typeof window||!window.document||!window.document.createElement)return vo=!1,vo;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),vo=!0}catch(e){vo=!1}finally{document.head.removeChild(e)}return vo}()?"focus-visible":"focus",Bo="not-allowed",jo=_t`(${Ki} + ${Gi}) * ${Wi}`,Ho=_t`
  font-family: ${Zi};
  font-size: ${nn};
  line-height: ${sn};
  font-weight: initial;
  font-variation-settings: ${rn};
`;_t`
  font-family: ${Zi};
  font-size: ${on};
  line-height: ${an};
  font-weight: initial;
  font-variation-settings: ${ln};
`,_t`
  font-family: ${Zi};
  font-size: ${cn};
  line-height: ${hn};
  font-weight: initial;
  font-variation-settings: ${un};
`,_t`
  font-family: ${Zi};
  font-size: ${dn};
  line-height: ${pn};
  font-weight: initial;
  font-variation-settings: ${fn};
`,_t`
  font-family: ${Zi};
  font-size: ${gn};
  line-height: ${vn};
  font-weight: initial;
  font-variation-settings: ${mn};
`,_t`
  font-family: ${Zi};
  font-size: ${bn};
  line-height: ${yn};
  font-weight: initial;
  font-variation-settings: ${xn};
`,_t`
  font-family: ${Zi};
  font-size: ${wn};
  line-height: ${$n};
  font-weight: initial;
  font-variation-settings: ${kn};
`,_t`
  font-family: ${Zi};
  font-size: ${Cn};
  line-height: ${Sn};
  font-weight: initial;
  font-variation-settings: ${On};
`,_t`
  font-family: ${Zi};
  font-size: ${Fn};
  line-height: ${Vn};
  font-weight: initial;
  font-variation-settings: ${Dn};
`;class zo{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&Ui.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new _o(this.ltr,this.rtl,e),i=Ui.getValueFor(e);Ui.subscribe(t),t.attach(i),this.cache.set(e,t)}}class _o{constructor(e,t,i){this.ltr=e,this.rtl=t,this.source=i,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const Uo=Oo.compose({baseName:"option",template:(e,t)=>Pt`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ko(0,t)}
        <span class="content" part="content">
            <slot ${Io("content")}></slot>
        </span>
        ${$o(0,t)}
    </template>
`,styles:(e,t)=>Ht`
    ${Kt("inline-flex")} :host {
      position: relative;
      ${Ho}
      background: ${Sr};
      border-radius: calc(${Ji} * 1px);
      border: calc(${Yi} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Lr};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${jo} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${Wi} * 3) - ${Yi} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Qi} - ${Yi}) * 1px);
      top: calc((${jo} / 4) - ${Qi} * 1px);
      width: 3px;
      height: calc((${jo} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Ji} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Or};
    }

    :host(:not([disabled]):active) {
      background: ${Fr};
    }

    :host(:not([disabled]):active)::before {
      background: ${zs};
      height: calc(((${jo} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${zs};
    }

    :host(:${Mo}) {
      ${No}
      background: ${Vr};
    }

    :host([aria-selected='true']) {
      background: ${xr};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${wr};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${$r};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Or};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Fr};
    }

    :host([disabled]) {
      cursor: ${Bo};
      opacity: ${qi};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new zo(null,Ht`
      :host::before {
        right: calc((${Qi} - ${Yi}) * 1px);
      }
    `),Jt(Ht`
        :host {
          background: ${Ut.ButtonFace};
          border-color: ${Ut.ButtonFace};
          color: ${Ut.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${Ut.Highlight};
          color: ${Ut.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${Ut.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${Ut.Canvas};
          color: ${Ut.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Mo}) {
          outline-color: ${Ut.CanvasText};
        }
      `))});function qo(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const Ko="form-associated-proxy",Go="ElementInternals",Wo=Go in window&&"setFormValue"in window[Go].prototype,Jo=new WeakMap;function Xo(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Wo}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return o}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),f.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),f.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Wo)return null;let e=Jo.get(this);return e||(e=this.attachInternals(),Jo.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Ko),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Ko)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===po&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return P({mode:"boolean"})(t.prototype,"disabled"),P({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),P({attribute:"current-value"})(t.prototype,"currentValue"),P(t.prototype,"name"),P({mode:"boolean"})(t.prototype,"required"),b(t.prototype,"value"),t}class Yo extends Ee{}class Qo extends(Xo(Yo)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Zo extends Qo{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}H([P({mode:"boolean"})],Zo.prototype,"autofocus",void 0),H([P({attribute:"form"})],Zo.prototype,"formId",void 0),H([P],Zo.prototype,"formaction",void 0),H([P],Zo.prototype,"formenctype",void 0),H([P],Zo.prototype,"formmethod",void 0),H([P({mode:"boolean"})],Zo.prototype,"formnovalidate",void 0),H([P],Zo.prototype,"formtarget",void 0),H([P],Zo.prototype,"type",void 0),H([b],Zo.prototype,"defaultSlottedContent",void 0);class ea{}H([P({attribute:"aria-expanded"})],ea.prototype,"ariaExpanded",void 0),H([P({attribute:"aria-pressed"})],ea.prototype,"ariaPressed",void 0),Co(ea,bo),Co(Zo,wo,ea);class ta{constructor(e,t,i){this.propertyName=e,this.value=t,this.styles=i}bind(e){m.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){m.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function ia(e,t){return new ta("appearance",e,t)}const na=":not([disabled])",sa="[disabled]";class ra extends Zo{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}qo([P],ra.prototype,"appearance",void 0);const oa=ra.compose({baseName:"button",baseClass:Zo,template:(e,t)=>Pt`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${xo("control")}
    >
        ${ko(0,t)}
        <span class="content" part="content">
            <slot ${Io("defaultSlottedContent")}></slot>
        </span>
        ${$o(0,t)}
    </button>
`,styles:(e,t)=>Ht`
    :host(${na}) .control {
      cursor: pointer;
    }

    :host(${sa}) .control {
      cursor: ${Bo};
    }

    @media (forced-colors: none) {
      :host(${sa}) .control {
        opacity: ${qi};
      }
    }

    ${Ht`
    ${Kt("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Ho}
      height: calc(${jo} * 1px);
      min-width: calc(${jo} * 1px);
      color: ${Lr};
      border-radius: calc(${Ji} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${Yi} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Wi} * 2 * ${Gi})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${Mo} {
      ${No}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `}
  `.withBehaviors(ia("neutral",((e,t,i,n="[disabled]")=>Ht`
    .control {
      background: padding-box linear-gradient(${rr}, ${rr}),
        border-box ${Br};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${or}, ${or}),
        border-box ${jr};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${ar}, ${ar}),
        border-box ${Hr};
    }

    :host(${n}) .control {
      background: padding-box linear-gradient(${rr}, ${rr}),
        border-box ${Nr};
    }
  `.withBehaviors(Jt(Ht`
        .control {
          background: ${Ut.ButtonFace};
          border-color: ${Ut.ButtonText};
          color: ${Ut.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          forced-color-adjust: none;
          background: ${Ut.HighlightText};
          border-color: ${Ut.Highlight};
          color: ${Ut.Highlight};
        }

        :host(${n}) .control {
          background: transparent;
          border-color: ${Ut.GrayText};
          color: ${Ut.GrayText};
        }

        .control:${Mo} {
          outline-color: ${Ut.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${Ut.LinkText};
          color: ${Ut.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${Ut.CanvasText};
          color: ${Ut.CanvasText};
        }
    `)))(0,0,na,sa)),ia("accent",((e,t,i,n="[disabled]")=>Ht`
    .control {
      background: padding-box linear-gradient(${zs}, ${zs}),
        border-box ${tr};
      color: ${Gs};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${_s}, ${_s}),
        border-box ${ir};
      color: ${Ws};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${Us}, ${Us}),
        border-box ${nr};
      color: ${Js};
    }

    :host(${n}) .control {
      background: ${zs};
    }

    .control:${Mo} {
      box-shadow: 0 0 0 calc(${Qi} * 1px) ${to} inset !important;
    }
  `.withBehaviors(Jt(Ht`
        .control {
          forced-color-adjust: none;
          background: ${Ut.Highlight};
          color: ${Ut.HighlightText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${Ut.HighlightText};
          border-color: ${Ut.Highlight};
          color: ${Ut.Highlight};
        }

        :host(${n}) .control {
          background: transparent;
          border-color: ${Ut.GrayText};
          color: ${Ut.GrayText};
        }

        .control:${Mo} {
          outline-color: ${Ut.CanvasText};
          box-shadow: 0 0 0 calc(${Qi} * 1px) ${Ut.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${Ut.LinkText};
          color: ${Ut.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${Ut.ButtonFace};
          border-color: ${Ut.LinkText};
          color: ${Ut.LinkText};
        }
      `)))(0,0,na,sa)),ia("lightweight",((e,t,i,n="[disabled]")=>Ht`
    :host {
      color: ${Ys};
    }

    .control {
      background: ${Sr};
    }

    :host(${i}:hover) .control {
      background: ${Or};
      color: ${Qs};
    }

    :host(${i}:active) .control {
      background: ${Fr};
      color: ${Zs};
    }

    :host(${n}) .control {
      background: ${Sr};
    }
  `.withBehaviors(Jt(Ht`
        :host {
          color: ${Ut.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${Ut.ButtonText};
          color: ${Ut.ButtonText};
        }

        :host(${n}) .control {
          background: transparent;
          color: ${Ut.GrayText};
        }

        .control:${Mo} {
          outline-color: ${Ut.CanvasText};
        }

        :host([href]) .control {
          color: ${Ut.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${Ut.LinkText};
          color: ${Ut.LinkText};
        }
      `)))(0,0,na,sa)),ia("outline",((e,t,i,n="[disabled]")=>Ht`
    .control {
      background: transparent !important;
      border-color: ${Nr};
    }

    :host(${i}:hover) .control {
      border-color: ${Pr};
    }

    :host(${i}:active) .control {
      border-color: ${Ar};
    }

    :host(${n}) .control {
      background: transparent !important;
      border-color: ${Nr};
    }
  `.withBehaviors(Jt(Ht`
        .control {
          border-color: ${Ut.ButtonText};
          color: ${Ut.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${Ut.HighlightText};
          border-color: ${Ut.Highlight};
          color: ${Ut.Highlight};
        }

        :host(${n}) .control {
          border-color: ${Ut.GrayText};
          color: ${Ut.GrayText};
        }

        .control:${Mo} {
          outline-color: ${Ut.CanvasText};
        }

        :host([href]) .control {
          border-color: ${Ut.LinkText};
          color: ${Ut.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${Ut.CanvasText};
          color: ${Ut.CanvasText};
        }
      `)))(0,0,na,sa)),ia("stealth",((e,t,i,n="[disabled]")=>Ht`
    .control {
      background: ${Sr};
    }

    :host(${i}:hover) .control {
      background: ${Or};
    }

    :host(${i}:active) .control {
      background: ${Fr};
    }

    :host(${n}) .control {
      background: ${Sr};
    }
  `.withBehaviors(Jt(Ht`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${Ut.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${Ut.ButtonText};
          color: ${Ut.ButtonText};
        }

        :host(${n}) .control {
          background: transparent;
          color: ${Ut.GrayText};
        }
        
        .control:${Mo} {
          outline-color: ${Ut.CanvasText};
        }

        :host([href]) .control {
          color: ${Ut.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${Ut.LinkText};
          color: ${Ut.LinkText};
        }
      `)))(0,0,na,sa))),shadowOptions:{delegatesFocus:!0}});class aa extends Ee{}const la=et.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,i)=>{let n=.12,s=.14;return t>16&&(n=.2,s=.24),`0 0 2px rgba(0, 0, 0, ${n}), 0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${s})`}}),ca=et.create("elevation-shadow-card-rest-size").withDefault(4),ha=et.create("elevation-shadow-card-hover-size").withDefault(8),ua=et.create("elevation-shadow-card-active-size").withDefault(0),da=et.create("elevation-shadow-card-focus-size").withDefault(8),pa=et.create("elevation-shadow-card-rest").withDefault((e=>la.getValueFor(e).evaluate(e,ca.getValueFor(e)))),fa=(et.create("elevation-shadow-card-hover").withDefault((e=>la.getValueFor(e).evaluate(e,ha.getValueFor(e)))),et.create("elevation-shadow-card-active").withDefault((e=>la.getValueFor(e).evaluate(e,ua.getValueFor(e)))),et.create("elevation-shadow-card-focus").withDefault((e=>la.getValueFor(e).evaluate(e,da.getValueFor(e)))),et.create("elevation-shadow-tooltip-size").withDefault(16)),ga=(et.create("elevation-shadow-tooltip").withDefault((e=>la.getValueFor(e).evaluate(e,fa.getValueFor(e)))),et.create("elevation-shadow-flyout-size").withDefault(32)),va=(et.create("elevation-shadow-flyout").withDefault((e=>la.getValueFor(e).evaluate(e,ga.getValueFor(e)))),et.create("elevation-shadow-dialog-size").withDefault(128));et.create("elevation-shadow-dialog").withDefault((e=>la.getValueFor(e).evaluate(e,va.getValueFor(e))));class ma extends aa{cardFillColorChanged(e,t){if(t){const e=Ci(t);null!==e&&(this.neutralPaletteSource=t,Bs.setValueFor(this,fi.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=Ci(t),i=fi.create(e.r,e.g,e.b);Ds.setValueFor(this,wi.create(i))}}handleChange(e,t){this.cardFillColor||Bs.setValueFor(this,(t=>mr.getValueFor(t).evaluate(t,Bs.getValueFor(e)).rest))}connectedCallback(){super.connectedCallback();const e=Ae(this);if(e){const t=m.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}qo([P({attribute:"card-fill-color",mode:"fromView"})],ma.prototype,"cardFillColor",void 0),qo([P({attribute:"neutral-palette-source",mode:"fromView"})],ma.prototype,"neutralPaletteSource",void 0);const ba=ma.compose({baseName:"card",baseClass:aa,template:(e,t)=>Pt`
    <slot></slot>
`,styles:(e,t)=>Ht`
    ${Kt("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${Bs};
      color: ${Lr};
      border: calc(${Yi} * 1px) solid ${Gr};
      border-radius: calc(${Xi} * 1px);
      box-shadow: ${pa};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(Jt(Ht`
        :host {
          background: ${Ut.Canvas};
          color: ${Ut.CanvasText};
        }
      `))});class ya extends Ee{}class xa extends(Xo(ya)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class wa extends xa{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&f.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}H([P({attribute:"readonly",mode:"boolean"})],wa.prototype,"readOnly",void 0),H([P({mode:"boolean"})],wa.prototype,"autofocus",void 0),H([P],wa.prototype,"placeholder",void 0),H([P],wa.prototype,"type",void 0),H([P],wa.prototype,"list",void 0),H([P({converter:R})],wa.prototype,"maxlength",void 0),H([P({converter:R})],wa.prototype,"minlength",void 0),H([P],wa.prototype,"pattern",void 0),H([P({converter:R})],wa.prototype,"size",void 0),H([P({mode:"boolean"})],wa.prototype,"spellcheck",void 0),H([b],wa.prototype,"defaultSlottedNodes",void 0);class $a{}function ka(e,t,i){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}Co($a,bo),Co(wa,wo,$a);const Ca=et.create("input-placeholder-rest").withDefault((e=>{const t=lr.getValueFor(e);return Ir.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),Sa=et.create("input-placeholder-hover").withDefault((e=>{const t=lr.getValueFor(e);return Ir.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),Oa=et.create("input-filled-placeholder-rest").withDefault((e=>{const t=yr.getValueFor(e);return Ir.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),Fa=et.create("input-filled-placeholder-hover").withDefault((e=>{const t=yr.getValueFor(e);return Ir.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),Va=".root";class Da extends wa{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}qo([P],Da.prototype,"appearance",void 0);const Ta=Da.compose({baseName:"text-field",baseClass:wa,template:(e,t)=>Pt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Io({property:"defaultSlottedNodes",filter:ka})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ko(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${xo("control")}
            />
            ${$o(0,t)}
        </div>
    </template>
`,styles:(e,t)=>Ht`
    ${Kt("inline-block")}

    ${((e,t,i)=>Ht`
  :host {
    ${Ho}
    color: ${Lr};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${i} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${Yi} * 1px) solid transparent;
    border-radius: calc(${Ji} * 1px);
    height: calc(${jo} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${Lr};
    cursor: pointer;
    ${Ho}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${i},
  :host([readonly]) ${i},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${Bo};
  }

  :host([disabled]) {
    opacity: ${qi};
  }
`)(0,0,Va)}

    ${Ht`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${Qi} * 1px);
      bottom: 0;
      border-bottom: calc(${Qi} * 1px) solid ${zs};
      border-bottom-left-radius: calc(${Ji} * 1px);
      border-bottom-right-radius: calc(${Ji} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Wi} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(ia("outline",((e,t,i,n=":not([disabled]):not(:focus-within)")=>Ht`
  ${i} {
    background: padding-box linear-gradient(${cr}, ${cr}),
      border-box ${Ur};
  }

  :host(${n}:hover) ${i} {
    background: padding-box linear-gradient(${hr}, ${hr}),
      border-box ${qr};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: padding-box linear-gradient(${ur}, ${ur}),
      border-box ${Ur};
  }
  
  :host([disabled]) ${i} {
    background: padding-box linear-gradient(${cr}, ${cr}),
      border-box ${Nr};
  }

  .control::placeholder {
    color: ${Ca};
  }

  :host(${n}:hover) .control::placeholder {
    color: ${Sa};
  }
`)(0,0,Va)),ia("filled",((e,t,i,n=":not([disabled]):not(:focus-within)")=>Ht`
  ${i} {
    background: ${xr};
  }

  :host(${n}:hover) ${i} {
    background: ${wr};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: ${kr};
  }

  :host([disabled]) ${i} {
    background: ${xr};
  }

  .control::placeholder {
    color: ${Oa};
  }

  :host(${n}:hover) .control::placeholder {
    color: ${Fa};
  }
`)(0,0,Va)),Jt(((e,t,i,n=":not([disabled]):not(:focus-within)")=>Ht`
  :host {
    color: ${Ut.ButtonText};
  }

  ${i} {
    background: ${Ut.ButtonFace};
    border-color: ${Ut.ButtonText};
  }

  :host(${n}:hover) ${i},
  :host(:not([disabled]):focus-within) ${i} {
    border-color: ${Ut.Highlight};
  }

  :host([disabled]) ${i} {
    opacity: 1;
    background: ${Ut.ButtonFace};
    border-color: ${Ut.GrayText};
  }

  .control::placeholder,
  :host(${n}:hover) .control::placeholder {
    color: ${Ut.CanvasText};
  }

  :host(:not([disabled]):focus) ${i} {
    ${No}
    outline-color: ${Ut.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${Ut.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${Ut.GrayText};
  }
`)(0,0,Va))),shadowOptions:{delegatesFocus:!0}});class La extends Ee{}class Ia extends(function(e){class t extends(Xo(e)){}class i extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return P({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),P({attribute:"current-checked",converter:E})(i.prototype,"currentChecked"),b(i.prototype,"defaultChecked"),b(i.prototype,"checked"),i}(La)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ea extends Ia{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case po:case" ":this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}H([P({attribute:"readonly",mode:"boolean"})],Ea.prototype,"readOnly",void 0),H([b],Ea.prototype,"defaultSlottedNodes",void 0);const Ra=Ea.compose({baseName:"switch",template:(e,t)=>Pt`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Io("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(e,t)=>Ht`
    :host([hidden]) {
      display: none;
    }

    ${Kt("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Zi};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${qi};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Bo};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${jo} / 2) + ${Wi}) * 2px);
      height: calc(((${jo} / 2) + ${Wi}) * 1px);
      background: ${pr};
      border-radius: calc(${jo} * 1px);
      border: calc(${Yi} * 1px) solid ${Jr};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${fr};
      border-color: ${Xr};
    }

    :host(:not(.disabled):active) .switch {
      background: ${gr};
      border-color: ${Yr};
    }

    :host(:${Mo}) .switch {
      ${Po}
      background: ${vr};
    }

    :host(.checked) .switch {
      background: ${zs};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${_s};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Us};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Lr};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Lr};
      cursor: pointer;
      ${Ho}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Lr};
      ${Ho}
      margin-inline-end: calc(${Wi} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Wi} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${zs};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Gs};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${_s};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Ws};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Us};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Js};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new zo(Ht`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,Ht`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),Jt(Ht`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Ut.FieldText};
        }
        .switch {
          background: ${Ut.Field};
          border-color: ${Ut.FieldText};
        }
        :host(.checked) .switch {
          background: ${Ut.Highlight};
          border-color: ${Ut.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${Ut.HighlightText};
          border-color: ${Ut.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${Ut.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${Ut.Highlight};
        }
        :host(:${Mo}) .switch {
          forced-color-adjust: none;
          background: ${Ut.Field}; 
          border-color: ${Ut.Highlight};
          outline-color: ${Ut.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Ut.GrayText};
        }
        :host(.disabled) .switch {
          background: ${Ut.Field};
          border-color: ${Ut.GrayText};
        }
        .status-message,
        .label {
          color: ${Ut.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '}),Na={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Pa{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Na,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,n){return n&&!this.debug?null:("string"==typeof e[0]&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Pa(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new Pa(this.logger,e)}}var Aa=new Pa;class Ma{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach((e=>{this.observers[e]||(this.observers[e]=new Map);const i=this.observers[e].get(t)||0;this.observers[e].set(t,i+1)})),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach((e=>{let[t,n]=e;for(let e=0;e<n;e++)t(...i)})),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach((t=>{let[n,s]=t;for(let t=0;t<s;t++)n.apply(n,[e,...i])}))}}function Ba(){let e,t;const i=new Promise(((i,n)=>{e=i,t=n}));return i.resolve=e,i.reject=t,i}function ja(e){return null==e?"":""+e}const Ha=/###/g;function za(e,t,i){function n(e){return e&&e.indexOf("###")>-1?e.replace(Ha,"."):e}function s(){return!e||"string"==typeof e}const r="string"!=typeof t?t:t.split(".");let o=0;for(;o<r.length-1;){if(s())return{};const t=n(r[o]);!e[t]&&i&&(e[t]=new i),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++o}return s()?{}:{obj:e,k:n(r[o])}}function _a(e,t,i){const{obj:n,k:s}=za(e,t,Object);if(void 0!==n||1===t.length)return void(n[s]=i);let r=t[t.length-1],o=t.slice(0,t.length-1),a=za(e,o,Object);for(;void 0===a.obj&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=za(e,o,Object),a&&a.obj&&void 0!==a.obj[`${a.k}.${r}`]&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i}function Ua(e,t){const{obj:i,k:n}=za(e,t);if(i)return i[n]}function qa(e,t,i){for(const n in t)"__proto__"!==n&&"constructor"!==n&&(n in e?"string"==typeof e[n]||e[n]instanceof String||"string"==typeof t[n]||t[n]instanceof String?i&&(e[n]=t[n]):qa(e[n],t[n],i):e[n]=t[n]);return e}function Ka(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Ga={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Wa(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(e=>Ga[e])):e}const Ja=[" ",",","?","!",";"],Xa=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}(20);function Ya(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t])return e[t];const n=t.split(i);let s=e;for(let e=0;e<n.length;){if(!s||"object"!=typeof s)return;let t,r="";for(let o=e;o<n.length;++o)if(o!==e&&(r+=i),r+=n[o],t=s[r],void 0!==t){if(["string","number","boolean"].indexOf(typeof t)>-1&&o<n.length-1)continue;e+=o-e+1;break}s=t}return s}function Qa(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Za extends Ma{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const s=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,r=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):"string"==typeof i&&s?o.push(...i.split(s)):o.push(i)));const a=Ua(this.data,o);return!a&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),a||!r||"string"!=typeof i?a:Ya(this.data&&this.data[e]&&this.data[e][t],i,s)}addResource(e,t,i,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const r=void 0!==s.keySeparator?s.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(r?i.split(r):i)),e.indexOf(".")>-1&&(o=e.split("."),n=t,t=o[1]),this.addNamespaces(t),_a(this.data,o,n),s.silent||this.emit("added",e,t,i,n)}addResources(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const n in i)("string"==typeof i[n]||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});n.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,n,s){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),n=i,i=t,t=o[1]),this.addNamespaces(t);let a=Ua(this.data,o)||{};r.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?qa(a,i,s):a={...a,...i},_a(this.data,o,a),r.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((e=>t[e]&&Object.keys(t[e]).length>0))}toJSON(){return this.data}}var el={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,n,s){return e.forEach((e=>{this.processors[e]&&(t=this.processors[e].process(t,i,n,s))})),t}};const tl={};class il extends Ma{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var i,n;super(),i=e,n=this,["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach((e=>{i[e]&&(n[e]=i[e])})),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=Aa.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;const i=this.resolve(e,t);return i&&void 0!==i.res}extractFromKey(e,t){let i=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const r=i&&e.indexOf(i)>-1,o=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||function(e,t,i){t=t||"",i=i||"";const n=Ja.filter((e=>t.indexOf(e)<0&&i.indexOf(e)<0));if(0===n.length)return!0;const s=Xa.getRegExp(`(${n.map((e=>"?"===e?"\\?":e)).join("|")})`);let r=!s.test(e);if(!r){const t=e.indexOf(i);t>0&&!s.test(e.substring(0,t))&&(r=!0)}return r}(e,i,n));if(r&&!o){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:s};const r=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(r[0])>-1)&&(s=r.shift()),e=r.join(n)}return"string"==typeof s&&(s=[s]),{key:e,namespaces:s}}translate(e,t,i){if("object"!=typeof t&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof t&&(t={...t}),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);const n=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,s=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,{key:r,namespaces:o}=this.extractFromKey(e[e.length-1],t),a=o[o.length-1],l=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&"cimode"===l.toLowerCase()){if(c){const e=t.nsSeparator||this.options.nsSeparator;return n?{res:`${a}${e}${r}`,usedKey:r,exactUsedKey:r,usedLng:l,usedNS:a,usedParams:this.getUsedParamsDetails(t)}:`${a}${e}${r}`}return n?{res:r,usedKey:r,exactUsedKey:r,usedLng:l,usedNS:a,usedParams:this.getUsedParamsDetails(t)}:r}const h=this.resolve(e,t);let u=h&&h.res;const d=h&&h.usedKey||r,p=h&&h.exactUsedKey||r,f=Object.prototype.toString.apply(u),g=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject;if(v&&u&&"string"!=typeof u&&"boolean"!=typeof u&&"number"!=typeof u&&["[object Number]","[object Function]","[object RegExp]"].indexOf(f)<0&&("string"!=typeof g||!Array.isArray(u))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,u,{...t,ns:o}):`key '${r} (${this.language})' returned an object instead of string.`;return n?(h.res=e,h.usedParams=this.getUsedParamsDetails(t),h):e}if(s){const e=Array.isArray(u),i=e?[]:{},n=e?p:d;for(const e in u)if(Object.prototype.hasOwnProperty.call(u,e)){const r=`${n}${s}${e}`;i[e]=this.translate(r,{...t,joinArrays:!1,ns:o}),i[e]===r&&(i[e]=u[e])}u=i}}else if(v&&"string"==typeof g&&Array.isArray(u))u=u.join(g),u&&(u=this.extendTranslation(u,e,t,i));else{let n=!1,o=!1;const c=void 0!==t.count&&"string"!=typeof t.count,d=il.hasDefaultValue(t),p=c?this.pluralResolver.getSuffix(l,t.count,t):"",f=t.ordinal&&c?this.pluralResolver.getSuffix(l,t.count,{ordinal:!1}):"",g=c&&!t.ordinal&&0===t.count&&this.pluralResolver.shouldUseIntlApi(),v=g&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${p}`]||t[`defaultValue${f}`]||t.defaultValue;!this.isValidLookup(u)&&d&&(n=!0,u=v),this.isValidLookup(u)||(o=!0,u=r);const m=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&o?void 0:u,b=d&&v!==u&&this.options.updateMissing;if(o||n||b){if(this.logger.log(b?"updateKey":"missingKey",l,a,r,b?v:u),s){const e=this.resolve(r,{...t,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const i=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&i&&i[0])for(let t=0;t<i.length;t++)e.push(i[t]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(t.lng||this.language):e.push(t.lng||this.language);const n=(e,i,n)=>{const s=d&&n!==u?n:m;this.options.missingKeyHandler?this.options.missingKeyHandler(e,a,i,s,b,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,a,i,s,b,t),this.emit("missingKey",e,a,i,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&c?e.forEach((e=>{const i=this.pluralResolver.getSuffixes(e,t);g&&t[`defaultValue${this.options.pluralSeparator}zero`]&&i.indexOf(`${this.options.pluralSeparator}zero`)<0&&i.push(`${this.options.pluralSeparator}zero`),i.forEach((i=>{n([e],r+i,t[`defaultValue${i}`]||v)}))})):n(e,r,v))}u=this.extendTranslation(u,e,t,h,i),o&&u===r&&this.options.appendNamespaceToMissingKey&&(u=`${a}:${r}`),(o||n)&&this.options.parseMissingKeyHandler&&(u="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${a}:${r}`:r,n?u:void 0):this.options.parseMissingKeyHandler(u))}return n?(h.res=u,h.usedParams=this.getUsedParamsDetails(t),h):u}extendTranslation(e,t,i,n,s){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const o="string"==typeof e&&(i&&i.interpolation&&void 0!==i.interpolation.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let a;if(o){const t=e.match(this.interpolator.nestingRegexp);a=t&&t.length}let l=i.replace&&"string"!=typeof i.replace?i.replace:i;if(this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),e=this.interpolator.interpolate(e,l,i.lng||this.language||n.usedLng,i),o){const t=e.match(this.interpolator.nestingRegexp);a<(t&&t.length)&&(i.nest=!1)}!i.lng&&"v1"!==this.options.compatibilityAPI&&n&&n.res&&(i.lng=this.language||n.usedLng),!1!==i.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return s&&s[0]===n[0]&&!i.context?(r.logger.warn(`It seems you are nesting recursively key: ${n[0]} in key: ${t[0]}`),null):r.translate(...n,t)}),i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,a="string"==typeof o?[o]:o;return null!=e&&a&&a.length&&!1!==i.applyPostProcessor&&(e=el.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t,i,n,s,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((e=>{if(this.isValidLookup(t))return;const a=this.extractFromKey(e,o),l=a.key;i=l;let c=a.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const h=void 0!==o.count&&"string"!=typeof o.count,u=h&&!o.ordinal&&0===o.count&&this.pluralResolver.shouldUseIntlApi(),d=void 0!==o.context&&("string"==typeof o.context||"number"==typeof o.context)&&""!==o.context,p=o.lngs?o.lngs:this.languageUtils.toResolveHierarchy(o.lng||this.language,o.fallbackLng);c.forEach((e=>{this.isValidLookup(t)||(r=e,!tl[`${p[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(r)&&(tl[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${i}" for languages "${p.join(", ")}" won't get resolved as namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((i=>{if(this.isValidLookup(t))return;s=i;const r=[l];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(r,l,i,e,o);else{let e;h&&(e=this.pluralResolver.getSuffix(i,o.count,o));const t=`${this.options.pluralSeparator}zero`,n=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(r.push(l+e),o.ordinal&&0===e.indexOf(n)&&r.push(l+e.replace(n,this.options.pluralSeparator)),u&&r.push(l+t)),d){const i=`${l}${this.options.contextSeparator}${o.context}`;r.push(i),h&&(r.push(i+e),o.ordinal&&0===e.indexOf(n)&&r.push(i+e.replace(n,this.options.pluralSeparator)),u&&r.push(i+t))}}let a;for(;a=r.pop();)this.isValidLookup(t)||(n=a,t=this.getResource(i,e,a,o))})))}))})),{res:t,usedKey:i,exactUsedKey:n,usedLng:s,usedNS:r}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,i,n):this.resourceStore.getResource(e,t,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&"string"!=typeof e.replace;let n=i?e.replace:e;if(i&&void 0!==e.count&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const e of t)delete n[e]}return n}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&"defaultValue"===t.substring(0,12)&&void 0!==e[t])return!0;return!1}}function nl(e){return e.charAt(0).toUpperCase()+e.slice(1)}class sl{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Aa.create("languageUtils")}getScriptPartFromCode(e){if(!(e=Qa(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=Qa(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if("string"==typeof e&&e.indexOf("-")>-1){const t=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map((e=>e.toLowerCase())):2===i.length?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=nl(i[1].toLowerCase()))):3===i.length&&(i[0]=i[0].toLowerCase(),2===i[1].length&&(i[1]=i[1].toUpperCase()),"sgn"!==i[0]&&2===i[2].length&&(i[2]=i[2].toUpperCase()),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=nl(i[1].toLowerCase())),t.indexOf(i[2].toLowerCase())>-1&&(i[2]=nl(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach((e=>{if(t)return;const i=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(i)||(t=i)})),!t&&this.options.supportedLngs&&e.forEach((e=>{if(t)return;const i=this.getLanguagePartFromCode(e);if(this.isSupportedCode(i))return t=i;t=this.options.supportedLngs.find((e=>e===i?e:e.indexOf("-")<0&&i.indexOf("-")<0?void 0:e.indexOf("-")>0&&i.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===i||0===e.indexOf(i)&&i.length>1?e:void 0))})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),n=[],s=e=>{e&&(this.isSupportedCode(e)?n.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return"string"==typeof e&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&s(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&s(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&s(this.getLanguagePartFromCode(e))):"string"==typeof e&&s(this.formatLanguageCode(e)),i.forEach((e=>{n.indexOf(e)<0&&s(this.formatLanguageCode(e))})),n}}let rl=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ol={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}};const al=["v1","v2","v3"],ll=["v4"],cl={zero:0,one:1,two:2,few:3,many:4,other:5};class hl{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Aa.create("pluralResolver"),this.options.compatibilityJSON&&!ll.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=function(){const e={};return rl.forEach((t=>{t.lngs.forEach((i=>{e[i]={numbers:t.nr,plurals:ol[t.fc]}}))})),e}()}addRule(e,t){this.rules[e]=t}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Qa("dev"===e?"en":e),{type:t.ordinal?"ordinal":"cardinal"})}catch(e){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getRule(e,t);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,i).map((e=>`${t}${e}`))}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort(((e,t)=>cl[e]-cl[t])).map((e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):i.numbers.map((i=>this.getSuffix(e,i,t))):[]}getSuffix(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:this.getSuffixRetroCompatible(n,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let n=e.numbers[i];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===n?n="plural":1===n&&(n=""));const s=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return"v1"===this.options.compatibilityJSON?1===n?"":"number"==typeof n?`_plural_${n.toString()}`:s():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?s():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!al.includes(this.options.compatibilityJSON)}}function ul(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=function(e,t,i){const n=Ua(e,i);return void 0!==n?n:Ua(t,i)}(e,t,i);return!r&&s&&"string"==typeof i&&(r=Ya(e,i,n),void 0===r&&(r=Ya(t,i,n))),r}class dl{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Aa.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:n,prefix:s,prefixEscaped:r,suffix:o,suffixEscaped:a,formatSeparator:l,unescapeSuffix:c,unescapePrefix:h,nestingPrefix:u,nestingPrefixEscaped:d,nestingSuffix:p,nestingSuffixEscaped:f,nestingOptionsSeparator:g,maxReplaces:v,alwaysFormat:m}=e.interpolation;this.escape=void 0!==t?t:Wa,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==n&&n,this.prefix=s?Ka(s):r||"{{",this.suffix=o?Ka(o):a||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=u?Ka(u):d||Ka("$t("),this.nestingSuffix=p?Ka(p):f||Ka(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=v||1e3,this.alwaysFormat=void 0!==m&&m,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e&&e.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,n){let s,r,o;const a=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function l(e){return e.replace(/\$/g,"$$$$")}const c=e=>{if(e.indexOf(this.formatSeparator)<0){const s=ul(t,a,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(s,void 0,i,{...n,...t,interpolationkey:e}):s}const s=e.split(this.formatSeparator),r=s.shift().trim(),o=s.join(this.formatSeparator).trim();return this.format(ul(t,a,r,this.options.keySeparator,this.options.ignoreJSONStructure),o,i,{...n,...t,interpolationkey:r})};this.resetRegExp();const h=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,u=n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>l(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?l(this.escape(e)):l(e)}].forEach((t=>{for(o=0;s=t.regex.exec(e);){const i=s[1].trim();if(r=c(i),void 0===r)if("function"==typeof h){const t=h(e,s,n);r="string"==typeof t?t:""}else if(n&&Object.prototype.hasOwnProperty.call(n,i))r="";else{if(u){r=s[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`),r=""}else"string"==typeof r||this.useRawValueToEscape||(r=ja(r));const a=t.safeValue(r);if(e=e.replace(s[0],a),u?(t.regex.lastIndex+=r.length,t.regex.lastIndex-=s[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}})),e}nest(e,t){let i,n,s,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function o(e,t){const i=this.nestingOptionsSeparator;if(e.indexOf(i)<0)return e;const n=e.split(new RegExp(`${i}[ ]*{`));let r=`{${n[1]}`;e=n[0],r=this.interpolate(r,s);const o=r.match(/'/g),a=r.match(/"/g);(o&&o.length%2==0&&!a||a.length%2!=0)&&(r=r.replace(/'/g,'"'));try{s=JSON.parse(r),t&&(s={...t,...s})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${i}${r}`}return s.defaultValue&&s.defaultValue.indexOf(this.prefix)>-1&&delete s.defaultValue,e}for(;i=this.nestingRegexp.exec(e);){let a=[];s={...r},s=s.replace&&"string"!=typeof s.replace?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;let l=!1;if(-1!==i[0].indexOf(this.formatSeparator)&&!/{.*}/.test(i[1])){const e=i[1].split(this.formatSeparator).map((e=>e.trim()));i[1]=e.shift(),a=e,l=!0}if(n=t(o.call(this,i[1].trim(),s),s),n&&i[0]===e&&"string"!=typeof n)return n;"string"!=typeof n&&(n=ja(n)),n||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),n=""),l&&(n=a.reduce(((e,t)=>this.format(e,t,r.lng,{...r,interpolationkey:i[1].trim()})),n.trim())),e=e.replace(i[0],n),this.regexp.lastIndex=0}return e}}function pl(e){const t={};return function(i,n,s){const r=n+JSON.stringify(s);let o=t[r];return o||(o=e(Qa(n),s),t[r]=o),o(i)}}class fl{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Aa.create("formatter"),this.options=e,this.formats={number:pl(((e,t)=>{const i=new Intl.NumberFormat(e,{...t});return e=>i.format(e)})),currency:pl(((e,t)=>{const i=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>i.format(e)})),datetime:pl(((e,t)=>{const i=new Intl.DateTimeFormat(e,{...t});return e=>i.format(e)})),relativetime:pl(((e,t)=>{const i=new Intl.RelativeTimeFormat(e,{...t});return e=>i.format(e,t.range||"day")})),list:pl(((e,t)=>{const i=new Intl.ListFormat(e,{...t});return e=>i.format(e)}))},this.init(e)}init(e){const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=pl(t)}format(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.split(this.formatSeparator).reduce(((e,t)=>{const{formatName:s,formatOptions:r}=function(e){let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const n=e.split("(");t=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);"currency"===t&&s.indexOf(":")<0?i.currency||(i.currency=s.trim()):"relativetime"===t&&s.indexOf(":")<0?i.range||(i.range=s.trim()):s.split(";").forEach((e=>{if(e){const[t,...n]=e.split(":"),s=n.join(":").trim().replace(/^'+|'+$/g,""),r=t.trim();i[r]||(i[r]=s),"false"===s&&(i[r]=!1),"true"===s&&(i[r]=!0),isNaN(s)||(i[r]=parseInt(s,10))}}))}return{formatName:t,formatOptions:i}}(t);if(this.formats[s]){let t=e;try{const o=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},a=o.locale||o.lng||n.locale||n.lng||i;t=this.formats[s](e,a,{...r,...n,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${s}`),e}),e)}}class gl extends Ma{constructor(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=Aa.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,n.backend,n)}queueLoad(e,t,i,n){const s={},r={},o={},a={};return e.forEach((e=>{let n=!0;t.forEach((t=>{const o=`${e}|${t}`;!i.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(1===this.state[o]?void 0===r[o]&&(r[o]=!0):(this.state[o]=1,n=!1,void 0===r[o]&&(r[o]=!0),void 0===s[o]&&(s[o]=!0),void 0===a[t]&&(a[t]=!0)))})),n||(o[e]=!0)})),(Object.keys(s).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(s),pending:Object.keys(r),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(a)}}loaded(e,t,i){const n=e.split("|"),s=n[0],r=n[1];t&&this.emit("failedLoading",s,r,t),i&&this.store.addResourceBundle(s,r,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2;const o={};this.queue.forEach((i=>{!function(e,t,i){const{obj:n,k:s}=za(e,t,Object);n[s]=n[s]||[],n[s].push(i)}(i.loaded,[s],r),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(i,e),t&&i.errors.push(t),0!==i.pendingCount||i.done||(Object.keys(i.loaded).forEach((e=>{o[e]||(o[e]={});const t=i.loaded[e];t.length&&t.forEach((t=>{void 0===o[e][t]&&(o[e][t]=!0)}))})),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((e=>!e.done))}read(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,r=arguments.length>5?arguments[5]:void 0;if(!e.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:i,tried:n,wait:s,callback:r});this.readingCalls++;const o=(o,a)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}o&&a&&n<this.maxRetries?setTimeout((()=>{this.read.call(this,e,t,i,n+1,2*s,r)}),s):r(o,a)},a=this.backend[i].bind(this.backend);if(2!==a.length)return a(e,t,o);try{const i=a(e,t);i&&"function"==typeof i.then?i.then((e=>o(null,e))).catch(o):o(null,i)}catch(e){o(e)}}prepareLoading(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);const s=this.queueLoad(e,t,i,n);if(!s.toLoad.length)return s.pending.length||n(),null;s.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i=e.split("|"),n=i[0],s=i[1];this.read(n,s,"read",void 0,void 0,((i,r)=>{i&&this.logger.warn(`${t}loading namespace ${s} for language ${n} failed`,i),!i&&r&&this.logger.log(`${t}loaded namespace ${s} for language ${n}`,r),this.loaded(e,i,r)}))}saveMissing(e,t,i,n,s){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=i&&""!==i){if(this.backend&&this.backend.create){const a={...r,isUpdate:s},l=this.backend.create.bind(this.backend);if(l.length<6)try{let s;s=5===l.length?l(e,t,i,n,a):l(e,t,i,n),s&&"function"==typeof s.then?s.then((e=>o(null,e))).catch(o):o(null,s)}catch(e){o(e)}else l(e,t,i,n,o,a)}e&&e[0]&&this.store.addResource(e[0],t,i,n)}}}function vl(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let t={};if("object"==typeof e[1]&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const i=e[3]||e[2];Object.keys(i).forEach((e=>{t[e]=i[e]}))}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function ml(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function bl(){}class yl extends Ma{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;var i;if(super(),this.options=ml(e),this.services={},this.logger=Aa,this.modules={external:[]},i=this,Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((e=>{"function"==typeof i[e]&&(i[e]=i[e].bind(i))})),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout((()=>{this.init(e,t)}),0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof t&&(i=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"==typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const n=vl();function s(e){return e?"function"==typeof e?new e:e:null}if(this.options={...n,...this.options,...ml(t)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){let t;this.modules.logger?Aa.init(s(this.modules.logger),this.options):Aa.init(null,this.options),this.modules.formatter?t=this.modules.formatter:"undefined"!=typeof Intl&&(t=fl);const i=new sl(this.options);this.store=new Za(this.options.resources,this.options);const r=this.services;r.logger=Aa,r.resourceStore=this.store,r.languageUtils=i,r.pluralResolver=new hl(i,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!t||this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format||(r.formatter=s(t),r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new dl(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new gl(s(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",(function(t){for(var i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];e.emit(t,...n)})),this.modules.languageDetector&&(r.languageDetector=s(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=s(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new il(this.services,this.options),this.translator.on("*",(function(t){for(var i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];e.emit(t,...n)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,i||(i=bl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((t=>{this[t]=function(){return e.store[t](...arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((t=>{this[t]=function(){return e.store[t](...arguments),e}}));const r=Ba(),o=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),r.resolve(t),i(e,t)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?o():setTimeout(o,0),r}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:bl;const i="string"==typeof e?e:this.language;if("function"==typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],n=t=>{t&&"cimode"!==t&&this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)}))};i?n(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>n(e))),this.options.preload&&this.options.preload.forEach((e=>n(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)}))}else t(null)}reloadResources(e,t,i){const n=Ba();return e||(e=this.languages),t||(t=this.options.ns),i||(i=bl),this.services.backendConnector.reload(e,t,(e=>{n.resolve(),i(e)})),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&el.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!(["cimode","dev"].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const n=Ba();this.emit("languageChanging",e);const s=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},r=(e,r)=>{r?(s(r),this.translator.changeLanguage(r),this.isLanguageChangingTo=void 0,this.emit("languageChanged",r),this.logger.log("languageChanged",r)):this.isLanguageChangingTo=void 0,n.resolve((function(){return i.t(...arguments)})),t&&t(e,(function(){return i.t(...arguments)}))},o=t=>{e||t||!this.services.languageDetector||(t=[]);const i="string"==typeof t?t:this.services.languageUtils.getBestMatchFromCodes(t);i&&(this.language||s(i),this.translator.language||this.translator.changeLanguage(i),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(i)),this.loadResources(i,(e=>{r(e,i)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),n}getFixedT(e,t,i){var n=this;const s=function(e,t){let r;if("object"!=typeof t){for(var o=arguments.length,a=new Array(o>2?o-2:0),l=2;l<o;l++)a[l-2]=arguments[l];r=n.options.overloadTranslationOptionHandler([e,t].concat(a))}else r={...t};r.lng=r.lng||s.lng,r.lngs=r.lngs||s.lngs,r.ns=r.ns||s.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||i||s.keyPrefix);const c=n.options.keySeparator||".";let h;return h=r.keyPrefix&&Array.isArray(e)?e.map((e=>`${r.keyPrefix}${c}${e}`)):r.keyPrefix?`${r.keyPrefix}${c}${e}`:e,n.t(h,r)};return"string"==typeof e?s.lng=e:s.lngs=e,s.ns=t,s.keyPrefix=i,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],n=!!this.options&&this.options.fallbackLng,s=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const r=(e,t)=>{const i=this.services.backendConnector.state[`${e}|${t}`];return-1===i||2===i};if(t.precheck){const e=t.precheck(this,r);if(void 0!==e)return e}return!(!this.hasResourceBundle(i,e)&&this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages)&&(!r(i,e)||n&&!r(s,e)))}loadNamespaces(e,t){const i=Ba();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)})),this.loadResources((e=>{i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Ba();"string"==typeof e&&(e=[e]);const n=this.options.preload||[],s=e.filter((e=>n.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e)));return s.length?(this.options.preload=n.concat(s),this.loadResources((e=>{i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=this.services&&this.services.languageUtils||new sl(vl());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new yl(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:bl;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},s=new yl(n);return void 0===e.debug&&void 0===e.prefix||(s.logger=s.logger.clone(e)),["store","services","language"].forEach((e=>{s[e]=this[e]})),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i&&(s.store=new Za(this.store.data,n),s.services.resourceStore=s.store),s.translator=new il(s.services,n),s.translator.on("*",(function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];s.emit(e,...i)})),s.init(n,t),s.translator.options=n,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const xl=yl.createInstance();xl.createInstance=yl.createInstance,xl.createInstance,xl.dir,xl.init,xl.loadResources,xl.reloadResources,xl.use,xl.changeLanguage,xl.getFixedT,xl.t,xl.exists,xl.setDefaultNamespace,xl.hasLoadedNamespace,xl.loadNamespaces,xl.loadLanguages,i(511),ot.getOrCreate(undefined).withPrefix("fluent").register(lo(),Ao(),Uo(),oa(),ba(),Ta(),Ra());var wl=function(e){var t=document.getElementById(e);null!=t&&(t.textContent=xl.t(e))};xl.init({lng:"ja",debug:!0,resources:{en:{translation:{"title-sora":"sora","input-text":"Input text...","select-file":"Select a file...","send-data":"Send","remove-file":"Remove a file","remove-text":"Remove a text","copy-text":"Copy a text","open-file":"Open a file","download-file":"Download a file"}},ja:{translation:{"title-sora":"ソラ","input-text":"テキストを入力...","select-file":"ファイルの選択","send-data":"送信","remove-file":"ファイルの削除","remove-text":"テキストの削除","copy-text":"テキストのコピー","open-file":"ファイルを開く","download-file":"ファイルのダウンロード"}}}},(function(){wl("title-sora"),function(e){var t=document.getElementById(e);null!=t&&t.setAttribute("placeholder",xl.t(e))}("input-text"),wl("select-file"),wl("send-data"),wl("remove-file"),wl("remove-text"),wl("copy-text"),wl("open-file"),wl("download-file")}));var $l=function(e){var t=document.getElementById("progress");e?t.classList.remove("hidden-progress"):t.classList.add("hidden-progress")},kl=document.getElementById("select-file-button-pre"),Cl=document.getElementById("select-file");null!=Cl&&null!=kl&&(Cl.addEventListener("click",(function(){return kl.click()})),kl.addEventListener("change",(function(){var e=document.getElementById("upload-form"),t=new FormData(e),i=new XMLHttpRequest;i.open("POST","/cgi-bin"),i.upload.addEventListener("loadstart",(function(){console.log("Upload: start")})),i.upload.addEventListener("load",(function(){console.log("Upload: done"),function(){var e=new XMLHttpRequest;e.open("POST","/cgi-bin"),e.send(function(e){var t=[];for(var i in e){var n=e[i],s=encodeURIComponent(i)+"="+encodeURIComponent(n);t.push(s)}return t.join("&").replace(/%20/g,"+")}({files:""})),e.onreadystatechange=function(){var t=JSON.parse(e.responseText||"null");if(null!=t)for(var i=function(e){var t=document.createElement("li");t.textContent=e,t.addEventListener("contextmenu",(function(e){e.preventDefault(),contextmenuFile.style.left=e.pageX+"px",contextmenuFile.style.top=e.pageY+"px",contextmenuFile.style.display="block",fileTarget=e.target})),t.addEventListener("click",(function(){contextmenuFile.style.display="none",location.href="/get?filename=".concat(e)}))},n=0,s=t;n<s.length;n++)i(s[n])}}(),Ol()})),$l(!0),i.send(t)})));var Sl=function(e,t){var i=document.getElementById("contents");!function(e){for(var t=e.children,i=0,n=Array.from(t);i<n.length;i++)n[i].remove()}(i);for(var n=function(e){var t,n=(t=e.content,decodeURIComponent(atob(t))),s=e.uuid,r=document.createElement("fluent-option");r.textContent=n,r.setAttribute("value",s),r.setAttribute("type","text"),r.addEventListener("click",(function(){var e=document.getElementById("items");e.classList.add("visible"),e.classList.remove("type-file"),e.classList.add("type-text"),document.getElementById("text-title").textContent=r.textContent,document.getElementById("text-content").textContent=r.textContent})),i.appendChild(r)},s=0,r=e;s<r.length;s++)n(r[s]);for(var o=function(e){var t=document.createElement("fluent-option");t.textContent=e,t.setAttribute("type","file"),t.addEventListener("click",(function(){var e=document.getElementById("items");e.classList.add("visible"),e.classList.add("type-file"),e.classList.remove("type-text"),document.getElementById("file-title").textContent=t.textContent})),i.appendChild(t)},a=0,l=t;a<l.length;a++)o(l[a])},Ol=function(e){void 0===e&&(e=!1),fetch("/cgi-bin?data=").then((function(e){return e.json()})).then((function(t){fetch("/cgi-bin?files").then((function(e){return e.json()})).then((function(i){Sl(t,i),$l(!1),e&&document.getElementById("items").classList.remove("visible")}))}))};Ol(),document.getElementById("send-data").addEventListener("click",(function(){$l(!0);var e=document.getElementById("input-text").value,t=btoa(encodeURIComponent(e));fetch("/cgi-bin?data="+t).then((function(e){return e.json()})).then((function(e){fetch("/cgi-bin?files").then((function(e){return e.json()})).then((function(t){Sl(e,t),$l(!1)}))}))})),document.getElementById("copy-text").addEventListener("click",(function(){var e=document.getElementById("contents");if(-1!=e.selectedIndex){var t=e.selectedOptions[0];t.textContent;var i=document.createElement("textarea");i.value=t.textContent,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)}})),document.getElementById("remove-text").addEventListener("click",(function(){$l(!0);var e,t=document.getElementById("contents");-1!=t.selectedIndex&&(e=t.selectedOptions[0].value,fetch("/cgi-bin?delete="+e).then((function(e){return e.json()})).then((function(e){Ol(!0)})))})),document.getElementById("remove-file").addEventListener("click",(function(){$l(!0);var e,t=document.getElementById("contents");-1!=t.selectedIndex&&(e=t.selectedOptions[0].textContent,fetch("/cgi-bin?removefile="+e).then((function(e){return e.json()})).then((function(e){Ol(!0)})),Ol())})),document.getElementById("open-file").addEventListener("click",(function(){var e,t=document.getElementById("contents");-1!=t.selectedIndex&&(e=t.selectedOptions[0].textContent,window.open("/get?filename=".concat(e),"_blank"))})),document.getElementById("download-file").addEventListener("click",(function(){var e,t,i,n,s=document.getElementById("contents");-1!=s.selectedIndex&&(e=s.selectedOptions[0].textContent,t="/get?filename=".concat(e),i=e,(n=new XMLHttpRequest).open("GET",t,!0),n.responseType="blob",n.onload=function(){var e=n.response,t=window.URL.createObjectURL(e),s=document.createElement("a");document.body.appendChild(s),s.href=t,s.download=i,s.click(),document.body.removeChild(s)},n.send())}))})();