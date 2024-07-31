(()=>{"use strict";var e={208:(e,t,s)=>{s.d(t,{A:()=>a});var i=s(601),n=s.n(i),r=s(314),o=s.n(r)()(n());o.push([e.id,"body {\n    /* background-color: green; */\n    height: 100vh;\n    margin: 0;\n}\n\nmain {\n    padding: 8px;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    height: calc(100% - 16px);\n    gap: 8px;\n}\n\n#items {\n    grid-row: 2 / 3;\n    overflow-y: auto;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    transition: 1s;\n}\n\n#items.visible {\n    gap: 8px;\n}\n\n#items #contents {\n    grid-column: 1 / 2;\n    overflow-x: auto;\n}\n\n#items #details {\n    padding: 0px;\n    width: 0;\n    border: unset;\n    box-shadow: unset;\n}\n\n#items.visible #details {\n    padding: 8px;\n    width: 480px;\n    border: solid 1px #F3F3F3;\n}\n\n#items.type-text #details .file-details {\n    display: none;\n}\n\n#items.type-file #details .text-details {\n    display: none;\n}\n\n#items.type-file #details .file-details {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    height: 100%;\n}\n\n#items.type-file #details .file-details #remove-file {\n    grid-row: 3 / 4;\n}\n\n/* テキスト */\n#items.type-text #details .text-details {\n    display: grid;\n    grid-template-rows: auto 1fr auto auto;\n    height: 100%;\n    gap: 8px;\n}\n\n#items.type-text #details .text-details #text-title {\n    grid-row: 1 / 2;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    margin: 8px 4px 0 4px;\n    user-select: none;\n}\n\n#items.type-text #details .text-details #text-content {\n    grid-row: 2 / 3;\n    margin: 0 4px;\n}\n\n#items.type-text #details .text-details #remove-text {\n    grid-row: 3 / 4;\n}\n\n#items.type-text #details .text-details #remove-text {\n    grid-row: 4 / 5;\n}\n/* ここまで */\n\n\n#input-content{\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    gap: 8px;\n}\n\n#contents fluent-option {\n    flex-shrink: 0;\n}\n",""]);const a=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,n,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var h=[].concat(e[c]);i&&o[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),s&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=s):h[2]=s),n&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=n):h[4]="".concat(n)),t.push(h))}},t}},601:e=>{e.exports=function(e){return e[1]}},511:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var i=s(72),n=s.n(i),r=s(825),o=s.n(r),a=s(659),l=s.n(a),c=s(56),h=s.n(c),u=s(540),d=s.n(u),p=s(113),f=s.n(p),g=s(208),v={};v.styleTagTransform=f(),v.setAttributes=h(),v.insert=l().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),n()(g.A,v);const m=g.A&&g.A.locals?g.A.locals:void 0},72:e=>{var t=[];function s(e){for(var s=-1,i=0;i<t.length;i++)if(t[i].identifier===e){s=i;break}return s}function i(e,i){for(var r={},o=[],a=0;a<e.length;a++){var l=e[a],c=i.base?l[0]+i.base:l[0],h=r[c]||0,u="".concat(c," ").concat(h);r[c]=h+1;var d=s(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=n(p,i);i.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function n(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,n){var r=i(e=e||[],n=n||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var a=s(r[o]);t[a].references--}for(var l=i(e,n),c=0;c<r.length;c++){var h=s(r[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}r=l}}},659:e=>{var t={};e.exports=function(e,s){var i=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,s)=>{e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var n=void 0!==s.layer;n&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,n&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var r=s.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nc=void 0;const i=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===i.trustedTypes&&(i.trustedTypes={createPolicy:(e,t)=>t});const n={configurable:!1,enumerable:!1,writable:!1};void 0===i.FAST&&Reflect.defineProperty(i,"FAST",Object.assign({value:Object.create(null)},n));const r=i.FAST;if(void 0===r.getById){const e=Object.create(null);Reflect.defineProperty(r,"getById",Object.assign({value(t,s){let i=e[t];return void 0===i&&(i=s?e[t]=s():null),i}},n))}const o=Object.freeze([]);function a(){const e=new WeakMap;return function(t){let s=e.get(t);if(void 0===s){let i=Reflect.getPrototypeOf(t);for(;void 0===s&&null!==i;)s=e.get(i),i=Reflect.getPrototypeOf(i);s=void 0===s?[]:s.slice(0),e.set(t,s)}return s}}const l=i.FAST.getById(1,(()=>{const e=[],t=[];function s(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(s,0)}}function r(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let s=0,i=e.length-t;s<i;s++)e[s]=e[s+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&i.requestAnimationFrame(r),e.push(t)},process:r})})),c=i.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let h=c;const u=`fast-${Math.random().toString(36).substring(2,8)}`,d=`${u}{`,p=`}${u}`,f=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(h!==c)throw new Error("The HTML policy can only be set once.");h=e},createHTML:e=>h.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(u),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${u}:`,"")),createInterpolationPlaceholder:e=>`${d}${e}${p}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${u}:${e}--\x3e`,queueUpdate:l.enqueue,processUpdates:l.process,nextUpdate:()=>new Promise(l.enqueue),setAttribute(e,t,s){null==s?e.removeAttribute(t):e.setAttribute(t,s)},setBooleanAttribute(e,t,s){s?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class g{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=t.indexOf(e);-1!==s&&t.splice(s,1)}}notify(e){const t=this.spillover,s=this.source;if(void 0===t){const t=this.sub1,i=this.sub2;void 0!==t&&t.handleChange(s,e),void 0!==i&&i.handleChange(s,e)}else for(let i=0,n=t.length;i<n;++i)t[i].handleChange(s,e)}}class v{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const s=this.subscribers[e];void 0!==s&&s.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var s;if(t){let s=this.subscribers[t];void 0===s&&(this.subscribers[t]=s=new g(this.source)),s.subscribe(e)}else this.sourceSubscribers=null!==(s=this.sourceSubscribers)&&void 0!==s?s:new g(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var s;if(t){const s=this.subscribers[t];void 0!==s&&s.unsubscribe(e)}else null===(s=this.sourceSubscribers)||void 0===s||s.unsubscribe(e)}}const m=r.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,s=f.queueUpdate;let i,n=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let s=e.$fastController||t.get(e);return void 0===s&&(Array.isArray(e)?s=n(e):t.set(e,s=new v(e))),s}const o=a();class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==i&&i.watch(e,this.name),e[this.field]}setValue(e,t){const s=this.field,i=e[s];if(i!==t){e[s]=t;const n=e[this.callback];"function"==typeof n&&n.call(e,i,t),r(e).notify(this.name)}}}class c extends g{constructor(e,t,s=!1){super(e,t),this.binding=e,this.isVolatileBinding=s,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const s=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const n=this.binding(e,t);return i=s,n}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const s=this.last,n=r(e),o=null===s?this.first:{};if(o.propertySource=e,o.propertyName=t,o.notifier=n,n.subscribe(this,t),null!==s){if(!this.needsRefresh){let t;i=void 0,t=s.propertySource[s.propertyName],i=this,e===t&&(this.needsRefresh=!0)}s.next=o}this.last=o}handleChange(){this.needsQueue&&(this.needsQueue=!1,s(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){n=e},getNotifier:r,track(e,t){void 0!==i&&i.watch(e,t)},trackVolatile(){void 0!==i&&(i.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),o(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:o,binding(e,t,s=this.isVolatileBinding(e)){return new c(e,t,s)},isVolatileBinding:t=>e.test(t.toString())})}));function b(e,t){m.defineProperty(e,t)}const y=r.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class x{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){y.set(e)}}m.defineProperty(x.prototype,"index"),m.defineProperty(x.prototype,"length");const w=Object.seal(new x);class ${constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function k(e){return e.map((e=>e instanceof $?k(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function C(e){return e.map((e=>e instanceof $?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}$.create=(()=>{if(f.supportsAdoptedStyleSheets){const e=new Map;return t=>new D(t,e)}return e=>new L(e)})();const S=Symbol("prependToAdoptedStyleSheets");function O(e){const t=[],s=[];return e.forEach((e=>(e[S]?t:s).push(e))),{prepend:t,append:s}}let F=(e,t)=>{const{prepend:s,append:i}=O(t);e.adoptedStyleSheets=[...s,...e.adoptedStyleSheets,...i]},V=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(f.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),F=(e,t)=>{const{prepend:s,append:i}=O(t);e.adoptedStyleSheets.splice(0,0,...s),e.adoptedStyleSheets.push(...i)},V=(e,t)=>{for(const s of t){const t=e.adoptedStyleSheets.indexOf(s);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class D extends ${constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=C(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=k(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let s=t.get(e);return void 0===s&&(s=new CSSStyleSheet,s.replaceSync(e),t.set(e,s)),s}))}return this._styleSheets}addStylesTo(e){F(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){V(e,this.styleSheets),super.removeStylesFrom(e)}}let T=0;class L extends ${constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=C(e),this.styleSheets=k(e),this.styleClass="fast-style-class-"+ ++T}addStylesTo(e){const t=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){const n=document.createElement("style");n.innerHTML=t[i],n.className=s,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let s=0,i=t.length;s<i;++s)e.removeChild(t[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const I=Object.freeze({locate:a()}),E={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},R={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class N{constructor(e,t,s=t.toLowerCase(),i="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=i,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===i&&void 0===n&&(this.converter=E)}setValue(e,t){const s=e[this.fieldName],i=this.converter;void 0!==i&&(t=i.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return m.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||"fromView"===t||f.queueUpdate((()=>{s.add(e);const i=e[this.fieldName];switch(t){case"reflect":const t=this.converter;f.setAttribute(e,this.attribute,void 0!==t?t.toView(i):i);break;case"boolean":f.setBooleanAttribute(e,this.attribute,i)}s.delete(e)}))}static collect(e,...t){const s=[];t.push(I.locate(e));for(let i=0,n=t.length;i<n;++i){const n=t[i];if(void 0!==n)for(let t=0,i=n.length;t<i;++t){const i=n[t];"string"==typeof i?s.push(new N(e,i)):s.push(new N(e,i.property,i.attribute,i.mode,i.converter))}}return s}}function P(e,t){let s;function i(e,t){arguments.length>1&&(s.property=t),I.locate(e.constructor).push(s)}return arguments.length>1?(s={},void i(e,t)):(s=void 0===e?{}:e,i)}const A={mode:"open"},M={},j=r.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class B{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const s=N.collect(e,t.attributes),i=new Array(s.length),n={},r={};for(let e=0,t=s.length;e<t;++e){const t=s[e];i[e]=t.attribute,n[t.name]=t,r[t.attribute]=t}this.attributes=s,this.observedAttributes=i,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?A:null===t.shadowOptions?void 0:Object.assign(Object.assign({},A),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?M:Object.assign(Object.assign({},M),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?$.create(t.styles):t.styles instanceof $?t.styles:$.create([t.styles])}get isDefined(){return!!j.getByType(this.type)}define(e=customElements){const t=this.type;if(j.register(this)){const e=this.attributes,s=t.prototype;for(let t=0,i=e.length;t<i;++t)m.defineProperty(s,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function H(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}B.forType=j.getByType;const z=new WeakMap,_={bubbles:!0,composed:!0,cancelable:!0};function U(e){return e.shadowRoot||z.get(e)||null}class q extends v{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const s=t.shadowOptions;if(void 0!==s){const t=e.attachShadow(s);"closed"===s.mode&&z.set(e,t)}const i=m.getAccessors(e);if(i.length>0){const t=this.boundObservables=Object.create(null);for(let s=0,n=i.length;s<n;++s){const n=i[s].name,r=e[n];void 0!==r&&(delete e[n],t[n]=r)}}}get isConnected(){return m.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,m.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=U(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const s=e.behaviors;e.addStylesTo(t),null!==s&&this.addBehaviors(s)}}removeStyles(e){const t=U(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const s=e.behaviors;e.removeStylesFrom(t),null!==s&&this.removeBehaviors(s)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),s=e.length,i=[];for(let n=0;n<s;++n){const s=e[n];t.has(s)?t.set(s,t.get(s)+1):(t.set(s,1),i.push(s))}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].bind(e,w)}}removeBehaviors(e,t=!1){const s=this.behaviors;if(null===s)return;const i=e.length,n=[];for(let r=0;r<i;++r){const i=e[r];if(s.has(i)){const e=s.get(i)-1;0===e||t?s.delete(i)&&n.push(i):s.set(i,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,w);const t=this.behaviors;if(null!==t)for(const[s]of t)s.bind(e,w);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[s]of t)s.unbind(e)}}onAttributeChangedCallback(e,t,s){const i=this.definition.attributeLookup[e];void 0!==i&&i.onAttributeChangedCallback(this.element,s)}emit(e,t,s){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},_),s)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const s=Object.keys(t);for(let i=0,n=s.length;i<n;++i){const n=s[i];e[n]=t[n]}this.boundObservables=null}const s=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,s=U(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||f.removeChildNodes(s),e&&(this.view=e.render(t,s,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const s=B.forType(e.constructor);if(void 0===s)throw new Error("Missing FASTElement definition.");return e.$fastController=new q(e,s)}}function K(e){return class extends e{constructor(){super(),q.forCustomElement(this)}$emit(e,t,s){return this.$fastController.emit(e,t,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,s){this.$fastController.onAttributeChangedCallback(e,t,s)}}}const W=Object.assign(K(HTMLElement),{from:e=>K(e),define:(e,t)=>new B(e,t).define().type}),G=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(s){Reflect.defineMetadata(e,t,s)}},Reflect.defineMetadata=function(e,t,s){let i=G.get(s);void 0===i&&G.set(s,i=new Map),i.set(e,t)},Reflect.getOwnMetadata=function(e,t){const s=G.get(t);if(void 0!==s)return s.get(e)});class J{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,xe(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:s,key:i}=this;return this.container=this.key=void 0,s.registerResolver(i,new le(i,e,t))}}function X(e){const t=e.slice(),s=Object.keys(e),i=s.length;let n;for(let r=0;r<i;++r)n=s[r],Ve(n)||(t[n]=e[n]);return t}const Y=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new le(e,1,e),transient:e=>new le(e,2,e)}),Q=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Y.singleton})}),Z=new Map;function ee(e){return t=>Reflect.getOwnMetadata(e,t)}let te=null;const se=Object.freeze({createContainer:e=>new be(null,Object.assign({},Q.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:se.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ve,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||se.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new be(e,Object.assign({},Q.default,t,{parentLocator:se.findParentContainer})):te||(te=new be(null,Object.assign({},Q.default,t,{parentLocator:()=>null}))),getDesignParamtypes:ee("design:paramtypes"),getAnnotationParamtypes:ee("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Z.get(e);if(void 0===t){const s=e.inject;if(void 0===s){const s=se.getDesignParamtypes(e),i=se.getAnnotationParamtypes(e);if(void 0===s)if(void 0===i){const s=Object.getPrototypeOf(e);t="function"==typeof s&&s!==Function.prototype?X(se.getDependencies(s)):[]}else t=X(i);else if(void 0===i)t=X(s);else{t=X(s);let e,n=i.length;for(let s=0;s<n;++s)e=i[s],void 0!==e&&(t[s]=e);const r=Object.keys(i);let o;n=r.length;for(let e=0;e<n;++e)o=r[e],Ve(o)||(t[o]=i[o])}}else t=X(s);Z.set(e,t)}return t},defineProperty(e,t,s,i=!1){const n=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[n];if(void 0===e){const r=this instanceof HTMLElement?se.findResponsibleContainer(this):se.getOrCreateDOMContainer();if(e=r.get(s),this[n]=e,i&&this instanceof W){const i=this.$fastController,r=()=>{se.findResponsibleContainer(this).get(s)!==this[n]&&(this[n]=e,i.notify(t))};i.subscribe({handleChange:r},"isConnected")}}return e}})},createInterface(e,t){const s="function"==typeof e?e:t,i="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ce,n="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),r=function(e,t,s){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${r.friendlyName}'`);t?se.defineProperty(e,t,r,n):se.getOrCreateAnnotationParamTypes(e)[s]=r};return r.$isInterface=!0,r.friendlyName=null==i?"(anonymous)":i,null!=s&&(r.register=function(e,t){return s(new J(e,null!=t?t:r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject:(...e)=>function(t,s,i){if("number"==typeof i){const s=se.getOrCreateAnnotationParamTypes(t),n=e[0];void 0!==n&&(s[i]=n)}else if(s)se.defineProperty(t,s,e[0]);else{const s=i?se.getOrCreateAnnotationParamTypes(i.value):se.getOrCreateAnnotationParamTypes(t);let n;for(let t=0;t<e.length;++t)n=e[t],void 0!==n&&(s[t]=n)}},transient:e=>(e.register=function(t){return we.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=re)=>(e.register=function(t){return we.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),ie=se.createInterface("Container");function ne(e){return function(t){const s=function(e,t,i){se.inject(s)(e,t,i)};return s.$isResolver=!0,s.resolve=function(s,i){return e(t,s,i)},s}}se.inject;const re={scoped:!1};function oe(e,t,s){se.inject(oe)(e,t,s)}function ae(e,t){return t.getFactory(e).construct(t)}ne(((e,t,s)=>()=>s.get(e))),ne(((e,t,s)=>s.has(e,!0)?s.get(e):void 0)),oe.$isResolver=!0,oe.resolve=()=>{},ne(((e,t,s)=>{const i=ae(e,t),n=new le(e,0,i);return s.registerResolver(e,n),i})),ne(((e,t,s)=>ae(e,t)));class le{constructor(e,t,s){this.key=e,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const s=e.getFactory(this.state);if(null===s)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,s,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(i=null===(s=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===s?void 0:s.call(t,e))&&void 0!==i?i:null;default:return null}}}function ce(e){return this.get(e)}function he(e,t){return t(e)}class ue{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let s;return s=void 0===t?new this.Type(...this.dependencies.map(ce,e)):new this.Type(...this.dependencies.map(ce,e),...t),null==this.transformers?s:this.transformers.reduce(he,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const de={$isResolver:!0,resolve:(e,t)=>t};function pe(e){return"function"==typeof e.register}function fe(e){return function(e){return pe(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const ge=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ve="__DI_LOCATE_PARENT__",me=new Map;class be{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ie,de),e instanceof Node&&e.addEventListener(ve,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,s,i,n,r;const o=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Se(t))if(pe(t))t.register(this,o);else if(void 0!==t.prototype)we.singleton(t,t).register(this);else for(s=Object.keys(t),n=0,r=s.length;n<r;++n)i=t[s[n]],Se(i)&&(pe(i)?i.register(this,o):this.register(i));return--this.registerDepth,this}registerResolver(e,t){$e(e);const s=this.resolvers,i=s.get(e);return null==i?s.set(e,t):i instanceof le&&4===i.strategy?i.state.push(t):s.set(e,new le(e,4,[i,t])),t}registerTransformer(e,t){const s=this.getResolver(e);if(null==s)return!1;if(s.getFactory){const e=s.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if($e(e),void 0!==e.resolve)return e;let s,i=this;for(;null!=i;){if(s=i.resolvers.get(e),null!=s)return s;if(null==i.parent){const s=fe(e)?this:i;return t?this.jitRegister(e,s):null}i=i.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if($e(e),e.$isResolver)return e.resolve(this,this);let t,s=this;for(;null!=s;){if(t=s.resolvers.get(e),null!=t)return t.resolve(s,this);if(null==s.parent){const i=fe(e)?this:s;return t=this.jitRegister(e,i),t.resolve(s,this)}s=s.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){$e(e);const s=this;let i,n=s;if(t){let t=o;for(;null!=n;)i=n.resolvers.get(e),null!=i&&(t=t.concat(ke(i,n,s))),n=n.parent;return t}for(;null!=n;){if(i=n.resolvers.get(e),null!=i)return ke(i,n,s);if(n=n.parent,null==n)return o}return o}getFactory(e){let t=me.get(e);if(void 0===t){if(Oe(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);me.set(e,t=new ue(e,se.getDependencies(e)))}return t}registerFactory(e,t){me.set(e,t)}createChild(e){return new be(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(ge.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(pe(e)){const s=e.register(t);if(!(s instanceof Object)||null==s.resolve){const s=t.resolvers.get(e);if(null!=s)return s;throw new Error("A valid resolver was not returned from the static register method")}return s}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,t);return t.resolvers.set(e,s),s}}}const ye=new WeakMap;function xe(e){return function(t,s,i){if(ye.has(i))return ye.get(i);const n=e(t,s,i);return ye.set(i,n),n}}const we=Object.freeze({instance:(e,t)=>new le(e,0,t),singleton:(e,t)=>new le(e,1,t),transient:(e,t)=>new le(e,2,t),callback:(e,t)=>new le(e,3,t),cachedCallback:(e,t)=>new le(e,3,xe(t)),aliasTo:(e,t)=>new le(t,5,e)});function $e(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ke(e,t,s){if(e instanceof le&&4===e.strategy){const i=e.state;let n=i.length;const r=new Array(n);for(;n--;)r[n]=i[n].resolve(t,s);return r}return[e.resolve(t,s)]}const Ce="(anonymous)";function Se(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Oe=function(){const e=new WeakMap;let t=!1,s="",i=0;return function(n){return t=e.get(n),void 0===t&&(s=n.toString(),i=s.length,t=i>=29&&i<=100&&125===s.charCodeAt(i-1)&&s.charCodeAt(i-2)<=32&&93===s.charCodeAt(i-3)&&101===s.charCodeAt(i-4)&&100===s.charCodeAt(i-5)&&111===s.charCodeAt(i-6)&&99===s.charCodeAt(i-7)&&32===s.charCodeAt(i-8)&&101===s.charCodeAt(i-9)&&118===s.charCodeAt(i-10)&&105===s.charCodeAt(i-11)&&116===s.charCodeAt(i-12)&&97===s.charCodeAt(i-13)&&110===s.charCodeAt(i-14)&&88===s.charCodeAt(i-15),e.set(n,t)),t}}(),Fe={};function Ve(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Fe[e];if(void 0!==t)return t;const s=e.length;if(0===s)return Fe[e]=!1;let i=0;for(let t=0;t<s;++t)if(i=e.charCodeAt(t),0===t&&48===i&&s>1||i<48||i>57)return Fe[e]=!1;return Fe[e]=!0}default:return!1}}function De(e){return`${e.toLowerCase()}:presentation`}const Te=new Map,Le=Object.freeze({define(e,t,s){const i=De(e);void 0===Te.get(i)?Te.set(i,t):Te.set(i,!1),s.register(we.instance(i,t))},forTag(e,t){const s=De(e),i=Te.get(s);return!1===i?se.findResponsibleContainer(t).get(s):i||null}});class Ie{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?$.create(t):t instanceof $?t:$.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Ee extends W{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Le.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Ne(this===Ee?class extends Ee{}:this,e,t)}}function Re(e,t,s){return"function"==typeof e?e(t,s):e}H([b],Ee.prototype,"template",void 0),H([b],Ee.prototype,"styles",void 0);class Ne{constructor(e,t,s){this.type=e,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const s=this.definition,i=this.overrideDefinition,n=`${s.prefix||t.elementPrefix}-${s.baseName}`;t.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Ie(Re(s.template,e,s),Re(s.styles,e,s));e.definePresentation(t);let n=Re(s.shadowOptions,e,s);e.shadowRootMode&&(n?i.shadowOptions||(n.mode=e.shadowRootMode):null!==n&&(n={mode:e.shadowRootMode})),e.defineElement({elementOptions:Re(s.elementOptions,e,s),shadowOptions:n,attributes:Re(s.attributes,e,s)})}})}}class Pe{createCSS(){return""}createBehavior(){}}function Ae(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Me=document.createElement("div");class je{setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class Be extends je{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class He extends je{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class ze{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),m.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),f.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),f.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:s}=this.style;if(s){const e=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[e].style}else this.target=null}}H([b],ze.prototype,"target",void 0);class _e{constructor(e){this.target=e.style}setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class Ue{setProperty(e,t){Ue.properties[e]=t;for(const s of Ue.roots.values())We.getOrCreate(Ue.normalizeRoot(s)).setProperty(e,t)}removeProperty(e){delete Ue.properties[e];for(const t of Ue.roots.values())We.getOrCreate(Ue.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ue;if(!t.has(e)){t.add(e);const s=We.getOrCreate(this.normalizeRoot(e));for(const e in Ue.properties)s.setProperty(e,Ue.properties[e])}}static unregisterRoot(e){const{roots:t}=Ue;if(t.has(e)){t.delete(e);const s=We.getOrCreate(Ue.normalizeRoot(e));for(const e in Ue.properties)s.removeProperty(e)}}static normalizeRoot(e){return e===Me?document:e}}Ue.roots=new Set,Ue.properties={};const qe=new WeakMap,Ke=f.supportsAdoptedStyleSheets?class extends je{constructor(e){super();const t=new CSSStyleSheet;t[S]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles($.create([t]))}}:ze,We=Object.freeze({getOrCreate(e){if(qe.has(e))return qe.get(e);let t;return t=e===Me?new Ue:e instanceof Document?f.supportsAdoptedStyleSheets?new Be:new He:e instanceof W?new Ke(e):new _e(e),qe.set(e,t),t}});class Ge extends Pe{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ge.uniqueId(),Ge.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Ge({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return Ge.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=Ze.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Ge&&(t=this.alias(t)),Ze.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Ze.existsFor(e)&&Ze.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Me,e),this}subscribe(e,t){const s=this.getOrCreateSubscriberSet(t);t&&!Ze.existsFor(t)&&Ze.getOrCreate(t),s.has(e)||s.add(e)}unsubscribe(e,t){const s=this.subscribers.get(t||this);s&&s.has(e)&&s.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}Ge.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),Ge.tokensById=new Map;class Je{constructor(e,t,s){this.source=e,this.token=t,this.node=s,this.dependencies=new Set,this.observer=m.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,w))}}class Xe{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),m.getNotifier(this).notify(e.id))}get(e){return m.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Ye=new WeakMap,Qe=new WeakMap;class Ze{constructor(e){this.target=e,this.store=new Xe,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const s=Ge.getTokenById(t);s&&(s.notify(this.target),this.updateCSSTokenReflection(e,s))}},Ye.set(e,this),m.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof W?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ye.get(e)||new Ze(e)}static existsFor(e){return Ye.has(e)}static findParent(e){if(Me!==e.target){let t=Ae(e.target);for(;null!==t;){if(Ye.has(t))return Ye.get(t);t=Ae(t)}return Ze.getOrCreate(Me)}return null}static findClosestAssignedNode(e,t){let s=t;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==Me?Ze.getOrCreate(Me):null}while(null!==s);return null}get parent(){return Qe.get(this)||null}updateCSSTokenReflection(e,t){if(Ge.isCSSDesignToken(t)){const s=this.parent,i=this.isReflecting(t);if(s){const n=s.get(t),r=e.get(t);n===r||i?n===r&&i&&this.stopReflectToCSS(t):this.reflectToCSS(t)}else i||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const s=this.getRaw(e);return void 0!==s?(this.hydrate(e,s),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=Ze.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){Ge.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Ge.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=Ze.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Qe.get(this).removeChild(this)}appendChild(e){e.parent&&Qe.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Qe.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),m.getNotifier(this.store).subscribe(e);for(const[t,s]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):s)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),m.getNotifier(this.store).unsubscribe(e),e.parent===this&&Qe.delete(e)}contains(e){return function(e,t){let s=t;for(;null!==s;){if(s===e)return!0;s=Ae(s)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Ze.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Ze.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const s=Ge.getTokenById(t);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(e,t){if(!this.has(e)){const s=this.bindingObservers.get(e);Ge.isDerivedDesignTokenValue(t)?s?s.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(s&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const s=new Je(t,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}Ze.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:s}=e;this.add(t,s)}add(e,t){We.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Ze.getOrCreate(t).get(e)))}remove(e,t){We.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},H([b],Ze.prototype,"children",void 0);const et=Object.freeze({create:function(e){return Ge.from(e)},notifyConnection:e=>!(!e.isConnected||!Ze.existsFor(e)||(Ze.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!Ze.existsFor(e)||(Ze.getOrCreate(e).unbind(),0)),registerRoot(e=Me){Ue.registerRoot(e)},unregisterRoot(e=Me){Ue.unregisterRoot(e)}}),tt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),st=new Map,it=new Map;let nt=null;const rt=se.createInterface((e=>e.cachedCallback((e=>(null===nt&&(nt=new at(null,e)),nt))))),ot=Object.freeze({tagFor:e=>it.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||se.findResponsibleContainer(e).get(rt)},getOrCreate(e){if(!e)return null===nt&&(nt=se.getOrCreateDOMContainer().get(rt)),nt;const t=e.$$designSystem$$;if(t)return t;const s=se.getOrCreateDOMContainer(e);if(s.has(rt,!1))return s.get(rt);{const t=new at(e,s);return s.register(we.instance(rt,t)),t}}});class at{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>tt.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,s=[],i=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(e,r,o){const a=function(e,t,s){return"string"==typeof e?{name:e,type:t,callback:s}:e}(e,r,o),{name:l,callback:c,baseClass:h}=a;let{type:u}=a,d=l,p=st.get(d),f=!0;for(;p;){const e=i(d,u,p);switch(e){case tt.ignoreDuplicate:return;case tt.definitionCallbackOnly:f=!1,p=void 0;break;default:d=e,p=st.get(d)}}f&&((it.has(u)||u===Ee)&&(u=class extends u{}),st.set(d,u),it.set(u,d),h&&it.set(h,d)),s.push(new lt(t,d,u,n,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&et.registerRoot(this.designTokenRoot)),t.registerWithContext(r,...e);for(const e of s)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class lt{constructor(e,t,s,i,n,r){this.container=e,this.name=t,this.type=s,this.shadowRootMode=i,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(e){Le.define(this.name,e,this.container)}defineElement(e){this.definition=new B(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ot.tagFor(e)}}var ct;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(ct||(ct={}));const ht="ArrowDown",ut="ArrowUp",dt="Enter",pt="Escape",ft="Home";let gt,vt=0;class mt{}H([P({attribute:"aria-atomic"})],mt.prototype,"ariaAtomic",void 0),H([P({attribute:"aria-busy"})],mt.prototype,"ariaBusy",void 0),H([P({attribute:"aria-controls"})],mt.prototype,"ariaControls",void 0),H([P({attribute:"aria-current"})],mt.prototype,"ariaCurrent",void 0),H([P({attribute:"aria-describedby"})],mt.prototype,"ariaDescribedby",void 0),H([P({attribute:"aria-details"})],mt.prototype,"ariaDetails",void 0),H([P({attribute:"aria-disabled"})],mt.prototype,"ariaDisabled",void 0),H([P({attribute:"aria-errormessage"})],mt.prototype,"ariaErrormessage",void 0),H([P({attribute:"aria-flowto"})],mt.prototype,"ariaFlowto",void 0),H([P({attribute:"aria-haspopup"})],mt.prototype,"ariaHaspopup",void 0),H([P({attribute:"aria-hidden"})],mt.prototype,"ariaHidden",void 0),H([P({attribute:"aria-invalid"})],mt.prototype,"ariaInvalid",void 0),H([P({attribute:"aria-keyshortcuts"})],mt.prototype,"ariaKeyshortcuts",void 0),H([P({attribute:"aria-label"})],mt.prototype,"ariaLabel",void 0),H([P({attribute:"aria-labelledby"})],mt.prototype,"ariaLabelledby",void 0),H([P({attribute:"aria-live"})],mt.prototype,"ariaLive",void 0),H([P({attribute:"aria-owns"})],mt.prototype,"ariaOwns",void 0),H([P({attribute:"aria-relevant"})],mt.prototype,"ariaRelevant",void 0),H([P({attribute:"aria-roledescription"})],mt.prototype,"ariaRoledescription",void 0);class bt{constructor(){this.targetIndex=0}}class yt extends bt{constructor(){super(...arguments),this.createPlaceholder=f.createInterpolationPlaceholder}}class xt extends bt{constructor(e,t,s){super(),this.name=e,this.behavior=t,this.options=s}createPlaceholder(e){return f.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function wt(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=m.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function $t(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function kt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Ct(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function St(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Ot(e){f.setAttribute(this.target,this.targetName,e)}function Ft(e){f.setBooleanAttribute(this.target,this.targetName,e)}function Vt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Dt(e){this.target[this.targetName]=e}function Tt(e){const t=this.classVersions||Object.create(null),s=this.target;let i=this.version||0;if(null!=e&&e.length){const n=e.split(/\s+/);for(let e=0,r=n.length;e<r;++e){const r=n[e];""!==r&&(t[r]=i,s.classList.add(r))}}if(this.classVersions=t,this.version=i+1,0!==i){i-=1;for(const e in t)t[e]===i&&s.classList.remove(e)}}class Lt extends yt{constructor(e){super(),this.binding=e,this.bind=wt,this.unbind=kt,this.updateTarget=Ot,this.isBindingVolatile=m.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Dt,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,s)=>f.createHTML(e(t,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Ft;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=$t,this.unbind=St;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Tt)}}targetAtContent(){this.updateTarget=Vt,this.unbind=Ct}createBehavior(e){return new It(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class It{constructor(e,t,s,i,n,r,o){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=s,this.bind=i,this.unbind=n,this.updateTarget=r,this.targetName=o}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){x.setEvent(e);const t=this.binding(this.source,this.context);x.setEvent(null),!0!==t&&e.preventDefault()}}let Et=null;class Rt{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Et=this}static borrow(e){const t=Et||new Rt;return t.directives=e,t.reset(),Et=null,t}}function Nt(e){if(1===e.length)return e[0];let t;const s=e.length,i=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),n=new Lt(((e,t)=>{let n="";for(let r=0;r<s;++r)n+=i[r](e,t);return n}));return n.targetName=t,n}const Pt=p.length;function At(e,t){const s=t.split(d);if(1===s.length)return null;const i=[];for(let t=0,n=s.length;t<n;++t){const n=s[t],r=n.indexOf(p);let o;if(-1===r)o=n;else{const t=parseInt(n.substring(0,r));i.push(e.directives[t]),o=n.substring(r+Pt)}""!==o&&i.push(o)}return i}function Mt(e,t,s=!1){const i=t.attributes;for(let n=0,r=i.length;n<r;++n){const o=i[n],a=o.value,l=At(e,a);let c=null;null===l?s&&(c=new Lt((()=>a)),c.targetName=o.name):c=Nt(l),null!==c&&(t.removeAttributeNode(o),n--,r--,e.addFactory(c))}}function jt(e,t,s){const i=At(e,t.textContent);if(null!==i){let n=t;for(let r=0,o=i.length;r<o;++r){const o=i[r],a=0===r?t:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);"string"==typeof o?a.textContent=o:(a.textContent=" ",e.captureContentBinding(o)),n=a,e.targetIndex++,a!==t&&s.nextNode()}e.targetIndex--}}const Bt=document.createRange();class Ht{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const s=e.parentNode;let i,n=this.firstChild;for(;n!==t;)i=n.nextSibling,s.insertBefore(n,e),n=i;s.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let s,i=this.firstChild;for(;i!==t;)s=i.nextSibling,e.appendChild(i),i=s;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let s,i=this.firstChild;for(;i!==t;)s=i.nextSibling,e.removeChild(i),i=s;e.removeChild(t);const n=this.behaviors,r=this.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(r)}bind(e,t){const s=this.behaviors;if(this.source!==e)if(null!==this.source){const i=this.source;this.source=e,this.context=t;for(let n=0,r=s.length;n<r;++n){const r=s[n];r.unbind(i),r.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,n=s.length;i<n;++i)s[i].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let s=0,i=e.length;s<i;++s)e[s].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Bt.setStartBefore(e[0].firstChild),Bt.setEndAfter(e[e.length-1].lastChild),Bt.deleteContents();for(let t=0,s=e.length;t<s;++t){const s=e[t],i=s.behaviors,n=s.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(n)}}}}class zt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=f.createHTML(t);const s=e.content.firstElementChild;null!==s&&"TEMPLATE"===s.tagName&&(e=s)}else e=t;const s=function(e,t){const s=e.content;document.adoptNode(s);const i=Rt.borrow(t);Mt(i,e,!0);const n=i.behaviorFactories;i.reset();const r=f.createTemplateWalker(s);let o;for(;o=r.nextNode();)switch(i.targetIndex++,o.nodeType){case 1:Mt(i,o);break;case 3:jt(i,o,r);break;case 8:f.isMarker(o)&&i.addFactory(t[f.extractDirectiveIndexFromMarker(o)])}let a=0;(f.isMarker(s.firstChild)||1===s.childNodes.length&&t.length)&&(s.insertBefore(document.createComment(""),s.firstChild),a=-1);const l=i.behaviorFactories;return i.release(),{fragment:s,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}(e,this.directives);this.fragment=s.fragment,this.viewBehaviorFactories=s.viewBehaviorFactories,this.hostBehaviorFactories=s.hostBehaviorFactories,this.targetOffset=s.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,i=new Array(this.behaviorCount),n=f.createTemplateWalker(t);let r=0,o=this.targetOffset,a=n.nextNode();for(let e=s.length;r<e;++r){const e=s[r],t=e.targetIndex;for(;null!==a;){if(o===t){i[r]=e.createBehavior(a);break}a=n.nextNode(),o++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let s=0,n=t.length;s<n;++s,++r)i[r]=t[s].createBehavior(e)}return new Ht(t,i)}render(e,t,s){"string"==typeof t&&(t=document.getElementById(t)),void 0===s&&(s=t);const i=this.create(s);return i.bind(e,w),i.appendTo(t),i}}const _t=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Ut(e,...t){const s=[];let i="";for(let n=0,r=e.length-1;n<r;++n){const r=e[n];let o=t[n];if(i+=r,o instanceof zt){const e=o;o=()=>e}if("function"==typeof o&&(o=new Lt(o)),o instanceof yt){const e=_t.exec(r);null!==e&&(o.targetName=e[2])}o instanceof bt?(i+=o.createPlaceholder(s.length),s.push(o)):i+=o}return i+=e[e.length-1],new zt(i,s)}class qt{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Kt(e){return new xt("fast-ref",qt,e)}class Wt{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Gt=(e,t)=>Ut`
    <span
        part="end"
        ${Kt("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Kt("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Jt=(e,t)=>Ut`
    <span
        part="start"
        ${Kt("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Kt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function Xt(e,...t){const s=I.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((s=>{"constructor"!==s&&Object.defineProperty(e.prototype,s,Object.getOwnPropertyDescriptor(t.prototype,s))})),I.locate(t).forEach((e=>s.push(e)))}))}function Yt(e){return function(...e){return e.every((e=>e instanceof HTMLElement))}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}Ut`
    <span part="end" ${Kt("endContainer")}>
        <slot
            name="end"
            ${Kt("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Ut`
    <span part="start" ${Kt("startContainer")}>
        <slot
            name="start"
            ${Kt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;class Qt extends Ee{constructor(e,t,s,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),s&&(this.defaultSelected=s),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),m.notify(this,"value")}get value(){var e;return m.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}H([b],Qt.prototype,"checked",void 0),H([b],Qt.prototype,"content",void 0),H([b],Qt.prototype,"defaultSelected",void 0),H([P({mode:"boolean"})],Qt.prototype,"disabled",void 0),H([P({attribute:"selected",mode:"boolean"})],Qt.prototype,"selectedAttribute",void 0),H([b],Qt.prototype,"selected",void 0),H([P({attribute:"value",mode:"fromView"})],Qt.prototype,"initialValue",void 0);class Zt{}H([b],Zt.prototype,"ariaChecked",void 0),H([b],Zt.prototype,"ariaPosInSet",void 0),H([b],Zt.prototype,"ariaSelected",void 0),H([b],Zt.prototype,"ariaSetSize",void 0),Xt(Zt,mt),Xt(Qt,Wt,Zt);class es extends Ee{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return m.track(this,"options"),this._options}set options(e){this._options=e,m.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const s=e>t?-1:e<t?1:0,i=e+s;let n=null;switch(s){case-1:n=this.options.reduceRight(((e,t,s)=>!e&&!t.disabled&&s<i?t:e),n);break;case 1:n=this.options.reduce(((e,t,s)=>!e&&!t.disabled&&s>i?t:e),n)}return this.options.indexOf(n)}handleChange(e,t){"selected"===t&&(es.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),es.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case ft:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case ht:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case ut:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case"End":e.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case dt:case pt:return!0;case" ":if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var s;if(this.hasSelectableOptions){if((null===(s=this.options[this.selectedIndex])||void 0===s?void 0:s.disabled)&&"number"==typeof e){const s=this.getSelectableIndex(e,t),i=s>-1?s:e;return this.selectedIndex=i,void(t===i&&this.selectedIndexChanged(t,i))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var s;const i=t.filter(es.slottedOptionFilter);null===(s=this.options)||void 0===s||s.forEach((e=>{const t=m.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=i.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e){let t=e.length;for(;t--;)if(!e[t].disabled)return t;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,s;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(s=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==s?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Yt(t)&&e.push(t),e)),[]);const s=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=function(e=""){return`${e}${vt++}`}("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=s})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}es.slottedOptionFilter=e=>Yt(e)&&!e.hidden,es.TYPE_AHEAD_TIMEOUT_MS=1e3,H([P({mode:"boolean"})],es.prototype,"disabled",void 0),H([b],es.prototype,"selectedIndex",void 0),H([b],es.prototype,"selectedOptions",void 0),H([b],es.prototype,"slottedOptions",void 0),H([b],es.prototype,"typeaheadBuffer",void 0);class ts{}H([b],ts.prototype,"ariaActiveDescendant",void 0),H([b],ts.prototype,"ariaDisabled",void 0),H([b],ts.prototype,"ariaExpanded",void 0),H([b],ts.prototype,"ariaMultiSelectable",void 0),Xt(ts,mt),Xt(es,ts);class ss{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=m.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(o),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class is extends ss{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function ns(e){return"string"==typeof e&&(e={property:e}),new xt("fast-slotted",is,e)}function rs(e,t,s=0){return[t,s]=[t,s].sort(((e,t)=>e-t)),t<=e&&e<s}class os extends es{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var s,i;this.ariaActiveDescendant=null!==(i=null===(s=this.options[t])||void 0===s?void 0:s.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=rs(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=rs(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=rs(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=rs(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const s=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return s&&!s.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:s}=e;switch(this.shouldSkipFocus=!1,t){case ft:return void this.checkFirstOption(s);case ht:return void this.checkNextOption(s);case ut:return void this.checkPreviousOption(s);case"End":return void this.checkLastOption(s);case"Tab":return this.focusAndScrollOptionIntoView(),!0;case pt:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case" ":if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var s;this.ariaMultiSelectable=t?"true":null,null===(s=this.options)||void 0===s||s.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var s;const i=Math.max(0,parseInt(null!==(s=null==t?void 0:t.toFixed())&&void 0!==s?s:"",10));i!==t&&f.queueUpdate((()=>{this.size=i}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}function as(e,t){const s=[];let i="";const n=[];for(let r=0,o=e.length-1;r<o;++r){i+=e[r];let o=t[r];if(o instanceof Pe){const e=o.createBehavior();o=o.createCSS(),e&&n.push(e)}o instanceof $||o instanceof CSSStyleSheet?(""!==i.trim()&&(s.push(i),i=""),s.push(o)):i+=o}return i+=e[e.length-1],""!==i.trim()&&s.push(i),{styles:s,behaviors:n}}function ls(e,...t){const{styles:s,behaviors:i}=as(e,t),n=$.create(s);return i.length&&n.withBehaviors(...i),n}H([b],os.prototype,"activeIndex",void 0),H([P({mode:"boolean"})],os.prototype,"multiple",void 0),H([P({converter:R})],os.prototype,"size",void 0);class cs extends Pe{constructor(e,t){super(),this.behaviors=t,this.css="";const s=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);s.length&&(this.styles=$.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function hs(e,...t){const{styles:s,behaviors:i}=as(e,t);return new cs(s,i)}function us(e){return`:host([hidden]){display:none}:host{display:${e}}`}var ds,ps;function fs(e,t,s){return isNaN(e)||e<=t?t:e>=s?s:e}function gs(e,t,s){return isNaN(e)||e<=t?0:e>=s?1:e/(s-t)}function vs(e,t,s){return isNaN(e)?t:t+e*(s-t)}function ms(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:t+e*(s-t)}function bs(e,t){const s=Math.pow(10,t);return Math.round(e*s)/s}!function(e){e.ltr="ltr",e.rtl="rtl"}(ds||(ds={})),Math.PI;class ys{constructor(e,t,s){this.h=e,this.s=t,this.l=s}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new ys(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new ys(bs(this.h,e),bs(this.s,e),bs(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class xs{constructor(e,t,s){this.l=e,this.a=t,this.b=s}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new xs(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new xs(bs(this.l,e),bs(this.a,e),bs(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}xs.epsilon=216/24389,xs.kappa=24389/27;class ws{constructor(e,t,s,i){this.r=e,this.g=t,this.b=s,this.a="number"!=typeof i||isNaN(i)?1:i}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new ws(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(vs(this.r,0,255))},${Math.round(vs(this.g,0,255))},${Math.round(vs(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(vs(this.r,0,255))},${Math.round(vs(this.g,0,255))},${Math.round(vs(this.b,0,255))},${fs(this.a,0,1)})`}roundToPrecision(e){return new ws(bs(this.r,e),bs(this.g,e),bs(this.b,e),bs(this.a,e))}clamp(){return new ws(fs(this.r,0,1),fs(this.g,0,1),fs(this.b,0,1),fs(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(fs(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(vs(e,0,255))}}class $s{constructor(e,t,s){this.x=e,this.y=t,this.z=s}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new $s(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new $s(bs(this.x,e),bs(this.y,e),bs(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function ks(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return function(e){return.2126*e.r+.7152*e.g+.0722*e.b}(new ws(t(e.r),t(e.g),t(e.b),1))}function Cs(e,t,s){return s-t==0?0:(e-t)/(s-t)}function Ss(e,t,s){return(Cs(e.r,t.r,s.r)+Cs(e.g,t.g,s.g)+Cs(e.b,t.b,s.b))/3}function Os(e){const t=Math.max(e.r,e.g,e.b),s=Math.min(e.r,e.g,e.b),i=t-s;let n=0;0!==i&&(n=t===e.r?(e.g-e.b)/i%6*60:t===e.g?60*((e.b-e.r)/i+2):60*((e.r-e.g)/i+4)),n<0&&(n+=360);const r=(t+s)/2;let o=0;return 0!==i&&(o=i/(1-Math.abs(2*r-1))),new ys(n,o,r)}function Fs(e,t=1){return function(e,t=1){function s(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const i=s(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),n=s(-.969266*e.x+1.8760108*e.y+.041556*e.z),r=s(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new ws(i,n,r,t)}(function(e){const t=(e.l+16)/116,s=t+e.a/500,i=t-e.b/200,n=Math.pow(s,3),r=Math.pow(t,3),o=Math.pow(i,3);let a=0;a=n>xs.epsilon?n:(116*s-16)/xs.kappa;let l=0;l=e.l>xs.epsilon*xs.kappa?r:e.l/xs.kappa;let c=0;return c=o>xs.epsilon?o:(116*i-16)/xs.kappa,a=$s.whitePoint.x*a,l=$s.whitePoint.y*l,c=$s.whitePoint.z*c,new $s(a,l,c)}(e),t)}function Vs(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new ws(ms(e,t.r,s.r),ms(e,t.g,s.g),ms(e,t.b,s.b),ms(e,t.a,s.a))}function Ds(e,t){const s=e.relativeLuminance>t.relativeLuminance?e:t,i=e.relativeLuminance>t.relativeLuminance?t:e;return(s.relativeLuminance+.05)/(i.relativeLuminance+.05)}$s.whitePoint=new $s(.95047,1,1.08883),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(ps||(ps={}));const Ts=Object.freeze({create:(e,t,s)=>new Ls(e,t,s),from:e=>new Ls(e.r,e.g,e.b)});class Ls extends ws{constructor(e,t,s){super(e,t,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Ds.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ks(this)}static fromObject(e){return new Ls(e.r,e.g,e.b)}}function Is(e,t,s=0,i=e.length-1){if(i===s)return e[s];const n=Math.floor((i-s)/2)+s;return t(e[n])?Is(e,t,s,n):Is(e,t,n+1,i)}const Es=(-.1+Math.sqrt(.21))/2;function Rs(e){return e.relativeLuminance<=Es}function Ns(e){return Rs(e)?-1:1}const Ps={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},As=Object.freeze({create:function(e,t,s){return"number"==typeof e?As.from(Ts.create(e,t,s)):As.from(e)},from:function(e,t){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const s in t)if(typeof t[s]!=typeof e[s])return!1;return!0}(e)?Ms.from(e,t):Ms.from(Ts.create(e.r,e.g,e.b),t)}});class Ms{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,s,i){void 0===s&&(s=this.closestIndexOf(e));let n=this.swatches;const r=this.lastIndex;let o=s;return void 0===i&&(i=Ns(e)),-1===i&&(n=this.reversedSwatches,o=r-o),Is(n,(s=>Ds(e,s)>=t),o,r)}get(e){return this.swatches[e]||this.swatches[fs(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const s=this.swatches.reduce(((t,s)=>Math.abs(s.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?s:t));return t=this.swatches.indexOf(s),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const s=Os(e).s,i=Os(t);return i.s<s?function(e,t=1){const s=(1-Math.abs(2*e.l-1))*e.s,i=s*(1-Math.abs(e.h/60%2-1)),n=e.l-s/2;let r=0,o=0,a=0;return e.h<60?(r=s,o=i,a=0):e.h<120?(r=i,o=s,a=0):e.h<180?(r=0,o=s,a=i):e.h<240?(r=0,o=i,a=s):e.h<300?(r=i,o=0,a=s):e.h<360&&(r=s,o=0,a=i),new ws(r+n,o+n,a+n,t)}(new ys(i.h,s,i.l)):t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],s=function(e){function t(e){return e>xs.epsilon?Math.pow(e,1/3):(xs.kappa*e+16)/116}const s=t(e.x/$s.whitePoint.x),i=t(e.y/$s.whitePoint.y),n=t(e.z/$s.whitePoint.z);return new xs(116*i-16,500*(s-i),200*(i-n))}(function(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const s=t(e.r),i=t(e.g),n=t(e.b);return new $s(.4124564*s+.3575761*i+.1804375*n,.2126729*s+.7151522*i+.072175*n,.0193339*s+.119192*i+.9503041*n)}(ws.fromObject(e).roundToPrecision(4))),i=Fs(new xs(0,s.a,s.b)).clamp().roundToPrecision(4),n=Fs(new xs(50,s.a,s.b)).clamp().roundToPrecision(4),r=Fs(new xs(100,s.a,s.b)).clamp().roundToPrecision(4),o=new ws(0,0,0),a=new ws(1,1,1),l=r.equalValue(a)?0:14,c=i.equalValue(o)?0:14;for(let e=100+l;e>=0-c;e-=.5){let s;s=e<0?Vs(e/c+1,o,i):e<=50?Vs(Ms.ramp(e),i,n):e<=100?Vs(Ms.ramp(e),n,r):Vs((e-100)/l,r,a),s=Ms.saturationBump(n,s).roundToPrecision(4),t.push(Ts.from(s))}return new Ms(e,t)}static adjustEnd(e,t,s,i){const n=-1===i?t.swatches:t.reversedSwatches,r=e=>{const s=t.closestIndexOf(e);return 1===i?t.lastIndex-s:s};1===i&&s.reverse();const o=e(s[s.length-2]);if(bs(Ds(s[s.length-1],s[s.length-2]),2)<o){s.pop();const e=r(t.colorContrast(n[t.lastIndex],o,void 0,i))-r(s[s.length-2]);let a=1;for(let i=s.length-e-1;i<s.length;i++){const e=r(s[i]),o=i===s.length-1?t.lastIndex:e+a;s[i]=n[o],a++}}1===i&&s.reverse()}static createColorPaletteByContrast(e,t){const s=Ms.createHighResolutionPalette(e),i=e=>bs(t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp,2),n=[];let r=t.preserveSource?e:s.swatches[0];n.push(r);do{const e=i(r);r=s.colorContrast(r,e,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(t.preserveSource){r=e;do{const e=i(r);r=s.colorContrast(r,e,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(i,s,n,-1),t.preserveSource&&this.adjustEnd(i,s,n,1),n}static from(e,t){const s=void 0===t?Ps:Object.assign(Object.assign({},Ps),t);return new Ms(e,Object.freeze(Ms.createColorPaletteByContrast(e,s)))}}const js=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Bs(e){const t=js.exec(e);if(null===t)return null;let s=t[1];if(3===s.length){const e=s.charAt(0),t=s.charAt(1),i=s.charAt(2);s=e.concat(e,t,t,i,i)}const i=parseInt(s,16);return isNaN(i)?null:new ws(gs((16711680&i)>>>16,0,255),gs((65280&i)>>>8,0,255),gs(255&i,0,255),1)}const Hs=Ts.create(1,1,1),zs=Ts.create(0,0,0),_s=Ts.create(.5,.5,.5),Us=Bs("#0078D4"),qs=Ts.create(Us.r,Us.g,Us.b);function Ks(e,t,s,i,n){const r=e=>e.contrast(Hs)>=n?Hs:zs,o=r(e),a=r(t);return{rest:o,hover:a,active:o.relativeLuminance===a.relativeLuminance?o:r(s),focus:r(i)}}var Ws;!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(Ws||(Ws={}));class Gs{constructor(e,t,s,i){this.toColorString=()=>this.cssGradient,this.contrast=Ds.bind(null,this),this.createCSS=this.toColorString,this.color=new ws(e,t,s),this.cssGradient=i,this.relativeLuminance=ks(this.color),this.r=e,this.g=t,this.b=s}static fromObject(e,t){return new Gs(e.r,e.g,e.b,t)}}const Js=new ws(0,0,0),Xs=new ws(1,1,1);function Ys(e,t,s,i,n,r,o,a,l=10,c=!1){const h=e.closestIndexOf(t);function u(s){if(c){const i=e.closestIndexOf(t),n=e.get(i),r=s.relativeLuminance<t.relativeLuminance?Js:Xs,o=function(e,t,s=null){let i=0,n=s;return null!==n?i=Ss(e,t,n):(n=new ws(0,0,0,1),i=Ss(e,t,n),i<=0&&(n=new ws(1,1,1,1),i=Ss(e,t,n))),i=Math.round(1e3*i)/1e3,new ws(n.r,n.g,n.b,i)}(Bs(s.toColorString()),Bs(n.toColorString()),r).roundToPrecision(2),a=function(e,t){if(t.a>=1)return t;if(t.a<=0)return new ws(e.r,e.g,e.b,1);const s=t.a*t.r+(1-t.a)*e.r,i=t.a*t.g+(1-t.a)*e.g,n=t.a*t.b+(1-t.a)*e.b;return new ws(s,i,n,1)}(Bs(t.toColorString()),o);return Ts.from(a)}return s}void 0===a&&(a=Ns(t));const d=h+a*s,p=d+a*(i-s),f=d+a*(n-s),g=d+a*(r-s),v=-1===a?0:100-l,m=-1===a?l:100;function b(t,s){const i=e.get(t);if(s){const s=e.get(t+a*o),n=-1===a?s:i,r=-1===a?i:s,l=`linear-gradient(${u(n).toColorString()} ${v}%, ${u(r).toColorString()} ${m}%)`;return Gs.fromObject(n,l)}return u(i)}return{rest:b(d,!0),hover:b(p,!0),active:b(f,!1),focus:b(g,!0)}}function Qs(e,t,s,i,n,r,o,a){null==a&&(a=Ns(t));const l=e.closestIndexOf(e.colorContrast(t,s));return{rest:e.get(l+a*i),hover:e.get(l+a*n),active:e.get(l+a*r),focus:e.get(l+a*o)}}function Zs(e,t,s,i,n,r,o){const a=e.closestIndexOf(t);return null==o&&(o=Ns(t)),{rest:e.get(a+o*s),hover:e.get(a+o*i),active:e.get(a+o*n),focus:e.get(a+o*r)}}function ei(e,t,s,i,n,r,o=void 0,a,l,c,h,u=void 0){return Rs(t)?Zs(e,t,a,l,c,h,u):Zs(e,t,s,i,n,r,o)}var ti;function si(e,t){return e.closestIndexOf((s=t,Ts.create(s,s,s)));var s}function ii(e,t,s){return e.get(si(e,t)+-1*s)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(ti||(ti={}));const{create:ni}=et;function ri(e){return et.create({name:e,cssCustomPropertyName:null})}const oi=ni("direction").withDefault(ds.ltr),ai=ni("disabled-opacity").withDefault(.3),li=ni("base-height-multiplier").withDefault(8),ci=(ni("base-horizontal-spacing-multiplier").withDefault(3),ni("density").withDefault(0)),hi=ni("design-unit").withDefault(4),ui=ni("control-corner-radius").withDefault(4),di=ni("layer-corner-radius").withDefault(8),pi=ni("stroke-width").withDefault(1),fi=ni("focus-stroke-width").withDefault(2),gi=ni("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),vi=ni("font-weight").withDefault(400);function mi(e){return t=>{const s=e.getValueFor(t),i=vi.getValueFor(t);if(s.endsWith("px")){const e=Number.parseFloat(s.replace("px",""));if(e<=12)return`"wght" ${i}, "opsz" 8`;if(e>24)return`"wght" ${i}, "opsz" 36`}return`"wght" ${i}, "opsz" 10.5`}}const bi=ni("type-ramp-base-font-size").withDefault("14px"),yi=ni("type-ramp-base-line-height").withDefault("20px"),xi=ni("type-ramp-base-font-variations").withDefault(mi(bi)),wi=ni("type-ramp-minus-1-font-size").withDefault("12px"),$i=ni("type-ramp-minus-1-line-height").withDefault("16px"),ki=ni("type-ramp-minus-1-font-variations").withDefault(mi(wi)),Ci=ni("type-ramp-minus-2-font-size").withDefault("10px"),Si=ni("type-ramp-minus-2-line-height").withDefault("14px"),Oi=ni("type-ramp-minus-2-font-variations").withDefault(mi(Ci)),Fi=ni("type-ramp-plus-1-font-size").withDefault("16px"),Vi=ni("type-ramp-plus-1-line-height").withDefault("22px"),Di=ni("type-ramp-plus-1-font-variations").withDefault(mi(Fi)),Ti=ni("type-ramp-plus-2-font-size").withDefault("20px"),Li=ni("type-ramp-plus-2-line-height").withDefault("26px"),Ii=ni("type-ramp-plus-2-font-variations").withDefault(mi(Ti)),Ei=ni("type-ramp-plus-3-font-size").withDefault("24px"),Ri=ni("type-ramp-plus-3-line-height").withDefault("32px"),Ni=ni("type-ramp-plus-3-font-variations").withDefault(mi(Ei)),Pi=ni("type-ramp-plus-4-font-size").withDefault("28px"),Ai=ni("type-ramp-plus-4-line-height").withDefault("36px"),Mi=ni("type-ramp-plus-4-font-variations").withDefault(mi(Pi)),ji=ni("type-ramp-plus-5-font-size").withDefault("32px"),Bi=ni("type-ramp-plus-5-line-height").withDefault("40px"),Hi=ni("type-ramp-plus-5-font-variations").withDefault(mi(ji)),zi=ni("type-ramp-plus-6-font-size").withDefault("40px"),_i=ni("type-ramp-plus-6-line-height").withDefault("52px"),Ui=ni("type-ramp-plus-6-font-variations").withDefault(mi(zi)),qi=ni("base-layer-luminance").withDefault(ti.LightMode),Ki=ri("accent-fill-rest-delta").withDefault(0),Wi=ri("accent-fill-hover-delta").withDefault(-2),Gi=ri("accent-fill-active-delta").withDefault(-5),Ji=ri("accent-fill-focus-delta").withDefault(0),Xi=ri("accent-foreground-rest-delta").withDefault(0),Yi=ri("accent-foreground-hover-delta").withDefault(3),Qi=ri("accent-foreground-active-delta").withDefault(-8),Zi=ri("accent-foreground-focus-delta").withDefault(0),en=ri("neutral-fill-rest-delta").withDefault(-1),tn=ri("neutral-fill-hover-delta").withDefault(1),sn=ri("neutral-fill-active-delta").withDefault(0),nn=ri("neutral-fill-focus-delta").withDefault(0),rn=ri("neutral-fill-input-rest-delta").withDefault(-1),on=ri("neutral-fill-input-hover-delta").withDefault(1),an=ri("neutral-fill-input-active-delta").withDefault(0),ln=ri("neutral-fill-input-focus-delta").withDefault(-2),cn=ri("neutral-fill-input-alt-rest-delta").withDefault(2),hn=ri("neutral-fill-input-alt-hover-delta").withDefault(4),un=ri("neutral-fill-input-alt-active-delta").withDefault(6),dn=ri("neutral-fill-input-alt-focus-delta").withDefault(2),pn=ri("neutral-fill-layer-rest-delta").withDefault(-2),fn=ri("neutral-fill-layer-hover-delta").withDefault(-3),gn=ri("neutral-fill-layer-active-delta").withDefault(-3),vn=ri("neutral-fill-layer-alt-rest-delta").withDefault(-1),mn=ri("neutral-fill-secondary-rest-delta").withDefault(3),bn=ri("neutral-fill-secondary-hover-delta").withDefault(2),yn=ri("neutral-fill-secondary-active-delta").withDefault(1),xn=ri("neutral-fill-secondary-focus-delta").withDefault(3),wn=ri("neutral-fill-stealth-rest-delta").withDefault(0),$n=ri("neutral-fill-stealth-hover-delta").withDefault(3),kn=ri("neutral-fill-stealth-active-delta").withDefault(2),Cn=ri("neutral-fill-stealth-focus-delta").withDefault(0),Sn=ri("neutral-fill-strong-rest-delta").withDefault(0),On=ri("neutral-fill-strong-hover-delta").withDefault(8),Fn=ri("neutral-fill-strong-active-delta").withDefault(-5),Vn=ri("neutral-fill-strong-focus-delta").withDefault(0),Dn=ri("neutral-stroke-rest-delta").withDefault(8),Tn=ri("neutral-stroke-hover-delta").withDefault(12),Ln=ri("neutral-stroke-active-delta").withDefault(6),In=ri("neutral-stroke-focus-delta").withDefault(8),En=ri("neutral-stroke-control-rest-delta").withDefault(3),Rn=ri("neutral-stroke-control-hover-delta").withDefault(5),Nn=ri("neutral-stroke-control-active-delta").withDefault(5),Pn=ri("neutral-stroke-control-focus-delta").withDefault(5),An=ri("neutral-stroke-divider-rest-delta").withDefault(4),Mn=ri("neutral-stroke-layer-rest-delta").withDefault(3),jn=ri("neutral-stroke-layer-hover-delta").withDefault(3),Bn=ri("neutral-stroke-layer-active-delta").withDefault(3),Hn=ri("neutral-stroke-strong-hover-delta").withDefault(0),zn=ri("neutral-stroke-strong-active-delta").withDefault(0),_n=ri("neutral-stroke-strong-focus-delta").withDefault(0),Un=ni("neutral-base-color").withDefault(_s),qn=ri("neutral-palette").withDefault((e=>As.from(Un.getValueFor(e)))),Kn=ni("accent-base-color").withDefault(qs),Wn=ri("accent-palette").withDefault((e=>As.from(Kn.getValueFor(e)))),Gn=ri("neutral-layer-card-container-recipe").withDefault({evaluate:e=>ii(qn.getValueFor(e),qi.getValueFor(e),pn.getValueFor(e))}),Jn=(ni("neutral-layer-card-container").withDefault((e=>Gn.getValueFor(e).evaluate(e))),ri("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,s){return e.get(si(e,t)+s)}(qn.getValueFor(e),qi.getValueFor(e),pn.getValueFor(e))})),Xn=(ni("neutral-layer-floating").withDefault((e=>Jn.getValueFor(e).evaluate(e))),ri("neutral-layer-1-recipe").withDefault({evaluate:e=>function(e,t){return e.get(si(e,t))}(qn.getValueFor(e),qi.getValueFor(e))})),Yn=ni("neutral-layer-1").withDefault((e=>Xn.getValueFor(e).evaluate(e))),Qn=ri("neutral-layer-2-recipe").withDefault({evaluate:e=>ii(qn.getValueFor(e),qi.getValueFor(e),pn.getValueFor(e))}),Zn=(ni("neutral-layer-2").withDefault((e=>Qn.getValueFor(e).evaluate(e))),ri("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,s){return e.get(si(e,t)+-1*s*2)}(qn.getValueFor(e),qi.getValueFor(e),pn.getValueFor(e))})),er=(ni("neutral-layer-3").withDefault((e=>Zn.getValueFor(e).evaluate(e))),ri("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,s){return e.get(si(e,t)+-1*s*3)}(qn.getValueFor(e),qi.getValueFor(e),pn.getValueFor(e))})),tr=(ni("neutral-layer-4").withDefault((e=>er.getValueFor(e).evaluate(e))),ni("fill-color").withDefault((e=>Yn.getValueFor(e))));var sr;!function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"}(sr||(sr={}));const ir=ri("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,s,i,n,r,o,a,l,c,h,u,d){return Rs(t)?Qs(e,t,8,c,h,u,d,void 0):Qs(e,t,5,i,n,r,o,void 0)}(Wn.getValueFor(e),t||tr.getValueFor(e),0,Ki.getValueFor(e),Wi.getValueFor(e),Gi.getValueFor(e),Ji.getValueFor(e),0,0,Ki.getValueFor(e),Wi.getValueFor(e),Gi.getValueFor(e),Ji.getValueFor(e))}),nr=ni("accent-fill-rest").withDefault((e=>ir.getValueFor(e).evaluate(e).rest)),rr=ni("accent-fill-hover").withDefault((e=>ir.getValueFor(e).evaluate(e).hover)),or=ni("accent-fill-active").withDefault((e=>ir.getValueFor(e).evaluate(e).active)),ar=ni("accent-fill-focus").withDefault((e=>ir.getValueFor(e).evaluate(e).focus)),lr=ri("foreground-on-accent-recipe").withDefault({evaluate:e=>Ks(nr.getValueFor(e),rr.getValueFor(e),or.getValueFor(e),ar.getValueFor(e),sr.normal)}),cr=ni("foreground-on-accent-rest").withDefault((e=>lr.getValueFor(e).evaluate(e).rest)),hr=ni("foreground-on-accent-hover").withDefault((e=>lr.getValueFor(e).evaluate(e).hover)),ur=ni("foreground-on-accent-active").withDefault((e=>lr.getValueFor(e).evaluate(e).active)),dr=(ni("foreground-on-accent-focus").withDefault((e=>lr.getValueFor(e).evaluate(e).focus)),ri("accent-foreground-recipe").withDefault({evaluate:(e,t)=>Qs(Wn.getValueFor(e),t||tr.getValueFor(e),9.5,Xi.getValueFor(e),Yi.getValueFor(e),Qi.getValueFor(e),Zi.getValueFor(e))})),pr=ni("accent-foreground-rest").withDefault((e=>dr.getValueFor(e).evaluate(e).rest)),fr=ni("accent-foreground-hover").withDefault((e=>dr.getValueFor(e).evaluate(e).hover)),gr=ni("accent-foreground-active").withDefault((e=>dr.getValueFor(e).evaluate(e).active)),vr=(ni("accent-foreground-focus").withDefault((e=>dr.getValueFor(e).evaluate(e).focus)),ri("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>Ys(qn.getValueFor(e),t||tr.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)})),mr=ni("accent-stroke-control-rest").withDefault((e=>vr.getValueFor(e).evaluate(e,nr.getValueFor(e)).rest)),br=ni("accent-stroke-control-hover").withDefault((e=>vr.getValueFor(e).evaluate(e,rr.getValueFor(e)).hover)),yr=ni("accent-stroke-control-active").withDefault((e=>vr.getValueFor(e).evaluate(e,or.getValueFor(e)).active)),xr=(ni("accent-stroke-control-focus").withDefault((e=>vr.getValueFor(e).evaluate(e,ar.getValueFor(e)).focus)),ri("neutral-fill-recipe").withDefault({evaluate:(e,t)=>ei(qn.getValueFor(e),t||tr.getValueFor(e),en.getValueFor(e),tn.getValueFor(e),sn.getValueFor(e),nn.getValueFor(e),void 0,2,3,1,2,void 0)})),wr=ni("neutral-fill-rest").withDefault((e=>xr.getValueFor(e).evaluate(e).rest)),$r=ni("neutral-fill-hover").withDefault((e=>xr.getValueFor(e).evaluate(e).hover)),kr=ni("neutral-fill-active").withDefault((e=>xr.getValueFor(e).evaluate(e).active)),Cr=(ni("neutral-fill-focus").withDefault((e=>xr.getValueFor(e).evaluate(e).focus)),ri("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>ei(qn.getValueFor(e),t||tr.getValueFor(e),rn.getValueFor(e),on.getValueFor(e),an.getValueFor(e),ln.getValueFor(e),void 0,2,3,1,0,void 0)})),Sr=ni("neutral-fill-input-rest").withDefault((e=>Cr.getValueFor(e).evaluate(e).rest)),Or=ni("neutral-fill-input-hover").withDefault((e=>Cr.getValueFor(e).evaluate(e).hover)),Fr=(ni("neutral-fill-input-active").withDefault((e=>Cr.getValueFor(e).evaluate(e).active)),ni("neutral-fill-input-focus").withDefault((e=>Cr.getValueFor(e).evaluate(e).focus))),Vr=ri("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>ei(qn.getValueFor(e),t||tr.getValueFor(e),cn.getValueFor(e),hn.getValueFor(e),un.getValueFor(e),dn.getValueFor(e),1,cn.getValueFor(e),cn.getValueFor(e)-hn.getValueFor(e),cn.getValueFor(e)-un.getValueFor(e),dn.getValueFor(e),1)}),Dr=ni("neutral-fill-input-alt-rest").withDefault((e=>Vr.getValueFor(e).evaluate(e).rest)),Tr=ni("neutral-fill-input-alt-hover").withDefault((e=>Vr.getValueFor(e).evaluate(e).hover)),Lr=ni("neutral-fill-input-alt-active").withDefault((e=>Vr.getValueFor(e).evaluate(e).active)),Ir=ni("neutral-fill-input-alt-focus").withDefault((e=>Vr.getValueFor(e).evaluate(e).focus)),Er=ri("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>Zs(qn.getValueFor(e),t||tr.getValueFor(e),pn.getValueFor(e),fn.getValueFor(e),gn.getValueFor(e),pn.getValueFor(e),1)}),Rr=(ni("neutral-fill-layer-rest").withDefault((e=>Er.getValueFor(e).evaluate(e).rest)),ni("neutral-fill-layer-hover").withDefault((e=>Er.getValueFor(e).evaluate(e).hover)),ni("neutral-fill-layer-active").withDefault((e=>Er.getValueFor(e).evaluate(e).active)),ri("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>Zs(qn.getValueFor(e),t||tr.getValueFor(e),vn.getValueFor(e),vn.getValueFor(e),vn.getValueFor(e),vn.getValueFor(e))})),Nr=(ni("neutral-fill-layer-alt-rest").withDefault((e=>Rr.getValueFor(e).evaluate(e).rest)),ri("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>Zs(qn.getValueFor(e),t||tr.getValueFor(e),mn.getValueFor(e),bn.getValueFor(e),yn.getValueFor(e),xn.getValueFor(e))})),Pr=ni("neutral-fill-secondary-rest").withDefault((e=>Nr.getValueFor(e).evaluate(e).rest)),Ar=ni("neutral-fill-secondary-hover").withDefault((e=>Nr.getValueFor(e).evaluate(e).hover)),Mr=ni("neutral-fill-secondary-active").withDefault((e=>Nr.getValueFor(e).evaluate(e).active)),jr=ni("neutral-fill-secondary-focus").withDefault((e=>Nr.getValueFor(e).evaluate(e).focus)),Br=ri("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>Zs(qn.getValueFor(e),t||tr.getValueFor(e),wn.getValueFor(e),$n.getValueFor(e),kn.getValueFor(e),Cn.getValueFor(e))}),Hr=ni("neutral-fill-stealth-rest").withDefault((e=>Br.getValueFor(e).evaluate(e).rest)),zr=ni("neutral-fill-stealth-hover").withDefault((e=>Br.getValueFor(e).evaluate(e).hover)),_r=ni("neutral-fill-stealth-active").withDefault((e=>Br.getValueFor(e).evaluate(e).active)),Ur=ni("neutral-fill-stealth-focus").withDefault((e=>Br.getValueFor(e).evaluate(e).focus)),qr=ri("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>Qs(qn.getValueFor(e),t||tr.getValueFor(e),4.5,Sn.getValueFor(e),On.getValueFor(e),Fn.getValueFor(e),Vn.getValueFor(e))}),Kr=(ni("neutral-fill-strong-rest").withDefault((e=>qr.getValueFor(e).evaluate(e).rest)),ni("neutral-fill-strong-hover").withDefault((e=>qr.getValueFor(e).evaluate(e).hover)),ni("neutral-fill-strong-active").withDefault((e=>qr.getValueFor(e).evaluate(e).active)),ni("neutral-fill-strong-focus").withDefault((e=>qr.getValueFor(e).evaluate(e).focus)),ri("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>Qs(qn.getValueFor(e),t||tr.getValueFor(e),16,0,-19,-30,0)})),Wr=ni("neutral-foreground-rest").withDefault((e=>Kr.getValueFor(e).evaluate(e).rest)),Gr=(ni("neutral-foreground-hover").withDefault((e=>Kr.getValueFor(e).evaluate(e).hover)),ni("neutral-foreground-active").withDefault((e=>Kr.getValueFor(e).evaluate(e).active)),ni("neutral-foreground-focus").withDefault((e=>Kr.getValueFor(e).evaluate(e).focus)),ri("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>function(e,t){return e.colorContrast(t,4.5)}(qn.getValueFor(e),t||tr.getValueFor(e))})),Jr=(ni("neutral-foreground-hint").withDefault((e=>Gr.getValueFor(e).evaluate(e))),ri("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>Zs(qn.getValueFor(e),t||tr.getValueFor(e),Dn.getValueFor(e),Tn.getValueFor(e),Ln.getValueFor(e),In.getValueFor(e))})),Xr=ni("neutral-stroke-rest").withDefault((e=>Jr.getValueFor(e).evaluate(e).rest)),Yr=ni("neutral-stroke-hover").withDefault((e=>Jr.getValueFor(e).evaluate(e).hover)),Qr=ni("neutral-stroke-active").withDefault((e=>Jr.getValueFor(e).evaluate(e).active)),Zr=(ni("neutral-stroke-focus").withDefault((e=>Jr.getValueFor(e).evaluate(e).focus)),ri("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>Ys(qn.getValueFor(e),t||tr.getValueFor(e),En.getValueFor(e),Rn.getValueFor(e),Nn.getValueFor(e),Pn.getValueFor(e),5)})),eo=ni("neutral-stroke-control-rest").withDefault((e=>Zr.getValueFor(e).evaluate(e).rest)),to=ni("neutral-stroke-control-hover").withDefault((e=>Zr.getValueFor(e).evaluate(e).hover)),so=ni("neutral-stroke-control-active").withDefault((e=>Zr.getValueFor(e).evaluate(e).active)),io=(ni("neutral-stroke-control-focus").withDefault((e=>Zr.getValueFor(e).evaluate(e).focus)),ri("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,s){return e.get(e.closestIndexOf(t)+Ns(t)*s)}(qn.getValueFor(e),t||tr.getValueFor(e),An.getValueFor(e))})),no=(ni("neutral-stroke-divider-rest").withDefault((e=>io.getValueFor(e).evaluate(e))),ri("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,s,i,n,r,o,a){const l=e.closestIndexOf(t),c=Ns(t),h=l+c*s,u=h+c*(i-s),d=h+c*(n-s),p=h+c*(r-s),f=`calc(100% - ${a})`;function g(t,s){const i=e.get(t);if(s){const s=e.get(t+20*c),n=`linear-gradient(${i.toColorString()} ${f}, ${s.toColorString()} ${f}, ${s.toColorString()})`;return Gs.fromObject(i,n)}return i}return{rest:g(h,!0),hover:g(u,!0),active:g(d,!1),focus:g(p,!0)}}(qn.getValueFor(e),t||tr.getValueFor(e),En.getValueFor(e),Rn.getValueFor(e),Nn.getValueFor(e),Pn.getValueFor(e),0,pi.getValueFor(e)+"px")})),ro=ni("neutral-stroke-input-rest").withDefault((e=>no.getValueFor(e).evaluate(e).rest)),oo=ni("neutral-stroke-input-hover").withDefault((e=>no.getValueFor(e).evaluate(e).hover)),ao=(ni("neutral-stroke-input-active").withDefault((e=>no.getValueFor(e).evaluate(e).active)),ni("neutral-stroke-input-focus").withDefault((e=>no.getValueFor(e).evaluate(e).focus)),ri("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>Zs(qn.getValueFor(e),t||tr.getValueFor(e),Mn.getValueFor(e),jn.getValueFor(e),Bn.getValueFor(e),Mn.getValueFor(e))})),lo=ni("neutral-stroke-layer-rest").withDefault((e=>ao.getValueFor(e).evaluate(e).rest)),co=(ni("neutral-stroke-layer-hover").withDefault((e=>ao.getValueFor(e).evaluate(e).hover)),ni("neutral-stroke-layer-active").withDefault((e=>ao.getValueFor(e).evaluate(e).active)),ri("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>Qs(qn.getValueFor(e),t||tr.getValueFor(e),5.5,0,Hn.getValueFor(e),zn.getValueFor(e),_n.getValueFor(e))})),ho=ni("neutral-stroke-strong-rest").withDefault((e=>co.getValueFor(e).evaluate(e).rest)),uo=ni("neutral-stroke-strong-hover").withDefault((e=>co.getValueFor(e).evaluate(e).hover)),po=ni("neutral-stroke-strong-active").withDefault((e=>co.getValueFor(e).evaluate(e).active)),fo=(ni("neutral-stroke-strong-focus").withDefault((e=>co.getValueFor(e).evaluate(e).focus)),ri("focus-stroke-outer-recipe").withDefault({evaluate:e=>(qn.getValueFor(e),Rs(tr.getValueFor(e))?Hs:zs)})),go=ni("focus-stroke-outer").withDefault((e=>fo.getValueFor(e).evaluate(e))),vo=ri("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return Wn.getValueFor(e),t=tr.getValueFor(e),go.getValueFor(e),Rs(t)?zs:Hs;var t}}),mo=ni("focus-stroke-inner").withDefault((e=>vo.getValueFor(e).evaluate(e))),bo=ri("foreground-on-accent-large-recipe").withDefault({evaluate:e=>Ks(nr.getValueFor(e),rr.getValueFor(e),or.getValueFor(e),ar.getValueFor(e),sr.large)}),yo=(ni("foreground-on-accent-rest-large").withDefault((e=>bo.getValueFor(e).evaluate(e).rest)),ni("foreground-on-accent-hover-large").withDefault((e=>bo.getValueFor(e).evaluate(e,rr.getValueFor(e)).hover)),ni("foreground-on-accent-active-large").withDefault((e=>bo.getValueFor(e).evaluate(e,or.getValueFor(e)).active)),ni("foreground-on-accent-focus-large").withDefault((e=>bo.getValueFor(e).evaluate(e,ar.getValueFor(e)).focus)),ni("neutral-fill-inverse-rest-delta").withDefault(0)),xo=ni("neutral-fill-inverse-hover-delta").withDefault(-3),wo=ni("neutral-fill-inverse-active-delta").withDefault(7),$o=ni("neutral-fill-inverse-focus-delta").withDefault(0),ko=ri("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,s,i,n,r){const o=Ns(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+o*Math.abs(s-i);let c,h;return(1===o?s<i:o*s>o*i)?(c=a,h=l):(c=l,h=a),{rest:e.get(c),hover:e.get(h),active:e.get(c+o*n),focus:e.get(c+o*r)}}(qn.getValueFor(e),t||tr.getValueFor(e),yo.getValueFor(e),xo.getValueFor(e),wo.getValueFor(e),$o.getValueFor(e))}),Co=(ni("neutral-fill-inverse-rest").withDefault((e=>ko.getValueFor(e).evaluate(e).rest)),ni("neutral-fill-inverse-hover").withDefault((e=>ko.getValueFor(e).evaluate(e).hover)),ni("neutral-fill-inverse-active").withDefault((e=>ko.getValueFor(e).evaluate(e).active)),ni("neutral-fill-inverse-focus").withDefault((e=>ko.getValueFor(e).evaluate(e).focus)),hs`
  outline: calc(${fi} * 1px) solid ${go};
  outline-offset: calc(${fi} * -1px);
`),So=hs`
  outline: calc(${fi} * 1px) solid ${go};
  outline-offset: calc(${pi} * 1px);
`,Oo=class extends es{}.compose({baseName:"listbox",template:(e,t)=>Ut`
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
            ${ns({filter:os.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(e,t)=>ls`
    ${us("inline-flex")} :host {
      border: calc(${pi} * 1px) solid ${Xr};
      border-radius: calc(${ui} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${hi} * 1px) 0;
    }

    ::slotted(${e.tagFor(Qt)}) {
      margin: 0 calc(${hi} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Co}
    }
  `}),Fo=function(){if("boolean"==typeof gt)return gt;if("undefined"==typeof window||!window.document||!window.document.createElement)return gt=!1,gt;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),gt=!0}catch(e){gt=!1}finally{document.head.removeChild(e)}return gt}()?"focus-visible":"focus",Vo="not-allowed";class Do{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,s=this.constructListener(e);s.bind(t)(),t.addListener(s),this.listenerCache.set(e,s)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}class To extends Do{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new To(e,t)}constructListener(e){let t=!1;const s=this.styles;return function(){const{matches:i}=this;i&&!t?(e.$fastController.addStyles(s),t=i):!i&&t&&(e.$fastController.removeStyles(s),t=i)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const Lo=To.with(window.matchMedia("(forced-colors)"));var Io,Eo;To.with(window.matchMedia("(prefers-color-scheme: dark)")),To.with(window.matchMedia("(prefers-color-scheme: light)")),(Eo=Io||(Io={})).Canvas="Canvas",Eo.CanvasText="CanvasText",Eo.LinkText="LinkText",Eo.VisitedText="VisitedText",Eo.ActiveText="ActiveText",Eo.ButtonFace="ButtonFace",Eo.ButtonText="ButtonText",Eo.Field="Field",Eo.FieldText="FieldText",Eo.Highlight="Highlight",Eo.HighlightText="HighlightText",Eo.GrayText="GrayText";const Ro=hs`(${li} + ${ci}) * ${hi}`,No=hs`
  font-family: ${gi};
  font-size: ${bi};
  line-height: ${yi};
  font-weight: initial;
  font-variation-settings: ${xi};
`;hs`
  font-family: ${gi};
  font-size: ${wi};
  line-height: ${$i};
  font-weight: initial;
  font-variation-settings: ${ki};
`,hs`
  font-family: ${gi};
  font-size: ${Ci};
  line-height: ${Si};
  font-weight: initial;
  font-variation-settings: ${Oi};
`,hs`
  font-family: ${gi};
  font-size: ${Fi};
  line-height: ${Vi};
  font-weight: initial;
  font-variation-settings: ${Di};
`,hs`
  font-family: ${gi};
  font-size: ${Ti};
  line-height: ${Li};
  font-weight: initial;
  font-variation-settings: ${Ii};
`,hs`
  font-family: ${gi};
  font-size: ${Ei};
  line-height: ${Ri};
  font-weight: initial;
  font-variation-settings: ${Ni};
`,hs`
  font-family: ${gi};
  font-size: ${Pi};
  line-height: ${Ai};
  font-weight: initial;
  font-variation-settings: ${Mi};
`,hs`
  font-family: ${gi};
  font-size: ${ji};
  line-height: ${Bi};
  font-weight: initial;
  font-variation-settings: ${Hi};
`,hs`
  font-family: ${gi};
  font-size: ${zi};
  line-height: ${_i};
  font-weight: initial;
  font-variation-settings: ${Ui};
`;class Po{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&oi.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new Ao(this.ltr,this.rtl,e),s=oi.getValueFor(e);oi.subscribe(t),t.attach(s),this.cache.set(e,t)}}class Ao{constructor(e,t,s){this.ltr=e,this.rtl=t,this.source=s,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const Mo=Qt.compose({baseName:"option",template:(e,t)=>Ut`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Jt(0,t)}
        <span class="content" part="content">
            <slot ${ns("content")}></slot>
        </span>
        ${Gt(0,t)}
    </template>
`,styles:(e,t)=>ls`
    ${us("inline-flex")} :host {
      position: relative;
      ${No}
      background: ${Hr};
      border-radius: calc(${ui} * 1px);
      border: calc(${pi} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Wr};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${Ro} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${hi} * 3) - ${pi} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${fi} - ${pi}) * 1px);
      top: calc((${Ro} / 4) - ${fi} * 1px);
      width: 3px;
      height: calc((${Ro} / 2) * 1px);
      background: transparent;
      border-radius: calc(${ui} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${zr};
    }

    :host(:not([disabled]):active) {
      background: ${_r};
    }

    :host(:not([disabled]):active)::before {
      background: ${nr};
      height: calc(((${Ro} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${nr};
    }

    :host(:${Fo}) {
      ${Co}
      background: ${Ur};
    }

    :host([aria-selected='true']) {
      background: ${Pr};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Ar};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Mr};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${zr};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${_r};
    }

    :host([disabled]) {
      cursor: ${Vo};
      opacity: ${ai};
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
  `.withBehaviors(new Po(null,ls`
      :host::before {
        right: calc((${fi} - ${pi}) * 1px);
      }
    `),Lo(ls`
        :host {
          background: ${Io.ButtonFace};
          border-color: ${Io.ButtonFace};
          color: ${Io.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${Io.Highlight};
          color: ${Io.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${Io.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${Io.Canvas};
          color: ${Io.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Fo}) {
          outline-color: ${Io.CanvasText};
        }
      `))});function jo(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const Bo="form-associated-proxy",Ho="ElementInternals",zo=Ho in window&&"setFormValue"in window[Ho].prototype,_o=new WeakMap;function Uo(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return zo}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=e?t.concat(Array.from(e)):t;return Object.freeze(s)}return o}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),f.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),f.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!zo)return null;let e=_o.get(this);return e||(e=this.attachInternals(),_o.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,s){this.elementInternals?this.elementInternals.setValidity(e,t,s):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Bo),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Bo)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===dt&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return P({mode:"boolean"})(t.prototype,"disabled"),P({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),P({attribute:"current-value"})(t.prototype,"currentValue"),P(t.prototype,"name"),P({mode:"boolean"})(t.prototype,"required"),b(t.prototype,"value"),t}class qo extends Ee{}class Ko extends(Uo(qo)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Wo extends Ko{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}H([P({mode:"boolean"})],Wo.prototype,"autofocus",void 0),H([P({attribute:"form"})],Wo.prototype,"formId",void 0),H([P],Wo.prototype,"formaction",void 0),H([P],Wo.prototype,"formenctype",void 0),H([P],Wo.prototype,"formmethod",void 0),H([P({mode:"boolean"})],Wo.prototype,"formnovalidate",void 0),H([P],Wo.prototype,"formtarget",void 0),H([P],Wo.prototype,"type",void 0),H([b],Wo.prototype,"defaultSlottedContent",void 0);class Go{}H([P({attribute:"aria-expanded"})],Go.prototype,"ariaExpanded",void 0),H([P({attribute:"aria-pressed"})],Go.prototype,"ariaPressed",void 0),Xt(Go,mt),Xt(Wo,Wt,Go);class Jo{constructor(e,t,s){this.propertyName=e,this.value=t,this.styles=s}bind(e){m.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){m.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function Xo(e,t){return new Jo("appearance",e,t)}const Yo=":not([disabled])",Qo="[disabled]";class Zo extends Wo{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}jo([P],Zo.prototype,"appearance",void 0);const ea=Zo.compose({baseName:"button",baseClass:Wo,template:(e,t)=>Ut`
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
        ${Kt("control")}
    >
        ${Jt(0,t)}
        <span class="content" part="content">
            <slot ${ns("defaultSlottedContent")}></slot>
        </span>
        ${Gt(0,t)}
    </button>
`,styles:(e,t)=>ls`
    :host(${Yo}) .control {
      cursor: pointer;
    }

    :host(${Qo}) .control {
      cursor: ${Vo};
    }

    @media (forced-colors: none) {
      :host(${Qo}) .control {
        opacity: ${ai};
      }
    }

    ${ls`
    ${us("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${No}
      height: calc(${Ro} * 1px);
      min-width: calc(${Ro} * 1px);
      color: ${Wr};
      border-radius: calc(${ui} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${pi} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${hi} * 2 * ${ci})) * 1px);
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

    .control:${Fo} {
      ${Co}
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
  `.withBehaviors(Xo("neutral",((e,t,s,i="[disabled]")=>ls`
    .control {
      background: padding-box linear-gradient(${wr}, ${wr}),
        border-box ${eo};
    }

    :host(${s}:hover) .control {
      background: padding-box linear-gradient(${$r}, ${$r}),
        border-box ${to};
    }

    :host(${s}:active) .control {
      background: padding-box linear-gradient(${kr}, ${kr}),
        border-box ${so};
    }

    :host(${i}) .control {
      background: padding-box linear-gradient(${wr}, ${wr}),
        border-box ${Xr};
    }
  `.withBehaviors(Lo(ls`
        .control {
          background: ${Io.ButtonFace};
          border-color: ${Io.ButtonText};
          color: ${Io.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          forced-color-adjust: none;
          background: ${Io.HighlightText};
          border-color: ${Io.Highlight};
          color: ${Io.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${Io.GrayText};
          color: ${Io.GrayText};
        }

        .control:${Fo} {
          outline-color: ${Io.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${Io.LinkText};
          color: ${Io.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${Io.CanvasText};
          color: ${Io.CanvasText};
        }
    `)))(0,0,Yo,Qo)),Xo("accent",((e,t,s,i="[disabled]")=>ls`
    .control {
      background: padding-box linear-gradient(${nr}, ${nr}),
        border-box ${mr};
      color: ${cr};
    }

    :host(${s}:hover) .control {
      background: padding-box linear-gradient(${rr}, ${rr}),
        border-box ${br};
      color: ${hr};
    }

    :host(${s}:active) .control {
      background: padding-box linear-gradient(${or}, ${or}),
        border-box ${yr};
      color: ${ur};
    }

    :host(${i}) .control {
      background: ${nr};
    }

    .control:${Fo} {
      box-shadow: 0 0 0 calc(${fi} * 1px) ${mo} inset !important;
    }
  `.withBehaviors(Lo(ls`
        .control {
          forced-color-adjust: none;
          background: ${Io.Highlight};
          color: ${Io.HighlightText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: ${Io.HighlightText};
          border-color: ${Io.Highlight};
          color: ${Io.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${Io.GrayText};
          color: ${Io.GrayText};
        }

        .control:${Fo} {
          outline-color: ${Io.CanvasText};
          box-shadow: 0 0 0 calc(${fi} * 1px) ${Io.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${Io.LinkText};
          color: ${Io.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${Io.ButtonFace};
          border-color: ${Io.LinkText};
          color: ${Io.LinkText};
        }
      `)))(0,0,Yo,Qo)),Xo("lightweight",((e,t,s,i="[disabled]")=>ls`
    :host {
      color: ${pr};
    }

    .control {
      background: ${Hr};
    }

    :host(${s}:hover) .control {
      background: ${zr};
      color: ${fr};
    }

    :host(${s}:active) .control {
      background: ${_r};
      color: ${gr};
    }

    :host(${i}) .control {
      background: ${Hr};
    }
  `.withBehaviors(Lo(ls`
        :host {
          color: ${Io.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: transparent;
          border-color: ${Io.ButtonText};
          color: ${Io.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${Io.GrayText};
        }

        .control:${Fo} {
          outline-color: ${Io.CanvasText};
        }

        :host([href]) .control {
          color: ${Io.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${Io.LinkText};
          color: ${Io.LinkText};
        }
      `)))(0,0,Yo,Qo)),Xo("outline",((e,t,s,i="[disabled]")=>ls`
    .control {
      background: transparent !important;
      border-color: ${Xr};
    }

    :host(${s}:hover) .control {
      border-color: ${Yr};
    }

    :host(${s}:active) .control {
      border-color: ${Qr};
    }

    :host(${i}) .control {
      background: transparent !important;
      border-color: ${Xr};
    }
  `.withBehaviors(Lo(ls`
        .control {
          border-color: ${Io.ButtonText};
          color: ${Io.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: ${Io.HighlightText};
          border-color: ${Io.Highlight};
          color: ${Io.Highlight};
        }

        :host(${i}) .control {
          border-color: ${Io.GrayText};
          color: ${Io.GrayText};
        }

        .control:${Fo} {
          outline-color: ${Io.CanvasText};
        }

        :host([href]) .control {
          border-color: ${Io.LinkText};
          color: ${Io.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${Io.CanvasText};
          color: ${Io.CanvasText};
        }
      `)))(0,0,Yo,Qo)),Xo("stealth",((e,t,s,i="[disabled]")=>ls`
    .control {
      background: ${Hr};
    }

    :host(${s}:hover) .control {
      background: ${zr};
    }

    :host(${s}:active) .control {
      background: ${_r};
    }

    :host(${i}) .control {
      background: ${Hr};
    }
  `.withBehaviors(Lo(ls`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${Io.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: transparent;
          border-color: ${Io.ButtonText};
          color: ${Io.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${Io.GrayText};
        }
        
        .control:${Fo} {
          outline-color: ${Io.CanvasText};
        }

        :host([href]) .control {
          color: ${Io.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${Io.LinkText};
          color: ${Io.LinkText};
        }
      `)))(0,0,Yo,Qo))),shadowOptions:{delegatesFocus:!0}});class ta extends Ee{}const sa=et.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,s)=>{let i=.12,n=.14;return t>16&&(i=.2,n=.24),`0 0 2px rgba(0, 0, 0, ${i}), 0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${n})`}}),ia=et.create("elevation-shadow-card-rest-size").withDefault(4),na=et.create("elevation-shadow-card-hover-size").withDefault(8),ra=et.create("elevation-shadow-card-active-size").withDefault(0),oa=et.create("elevation-shadow-card-focus-size").withDefault(8),aa=et.create("elevation-shadow-card-rest").withDefault((e=>sa.getValueFor(e).evaluate(e,ia.getValueFor(e)))),la=(et.create("elevation-shadow-card-hover").withDefault((e=>sa.getValueFor(e).evaluate(e,na.getValueFor(e)))),et.create("elevation-shadow-card-active").withDefault((e=>sa.getValueFor(e).evaluate(e,ra.getValueFor(e)))),et.create("elevation-shadow-card-focus").withDefault((e=>sa.getValueFor(e).evaluate(e,oa.getValueFor(e)))),et.create("elevation-shadow-tooltip-size").withDefault(16)),ca=(et.create("elevation-shadow-tooltip").withDefault((e=>sa.getValueFor(e).evaluate(e,la.getValueFor(e)))),et.create("elevation-shadow-flyout-size").withDefault(32)),ha=(et.create("elevation-shadow-flyout").withDefault((e=>sa.getValueFor(e).evaluate(e,ca.getValueFor(e)))),et.create("elevation-shadow-dialog-size").withDefault(128));et.create("elevation-shadow-dialog").withDefault((e=>sa.getValueFor(e).evaluate(e,ha.getValueFor(e))));class ua extends ta{cardFillColorChanged(e,t){if(t){const e=Bs(t);null!==e&&(this.neutralPaletteSource=t,tr.setValueFor(this,Ts.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=Bs(t),s=Ts.create(e.r,e.g,e.b);qn.setValueFor(this,As.create(s))}}handleChange(e,t){this.cardFillColor||tr.setValueFor(this,(t=>Er.getValueFor(t).evaluate(t,tr.getValueFor(e)).rest))}connectedCallback(){super.connectedCallback();const e=Ae(this);if(e){const t=m.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}jo([P({attribute:"card-fill-color",mode:"fromView"})],ua.prototype,"cardFillColor",void 0),jo([P({attribute:"neutral-palette-source",mode:"fromView"})],ua.prototype,"neutralPaletteSource",void 0);const da=ua.compose({baseName:"card",baseClass:ta,template:(e,t)=>Ut`
    <slot></slot>
`,styles:(e,t)=>ls`
    ${us("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${tr};
      color: ${Wr};
      border: calc(${pi} * 1px) solid ${lo};
      border-radius: calc(${di} * 1px);
      box-shadow: ${aa};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(Lo(ls`
        :host {
          background: ${Io.Canvas};
          color: ${Io.CanvasText};
        }
      `))});class pa extends Ee{}class fa extends(Uo(pa)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ga extends fa{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&f.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}H([P({attribute:"readonly",mode:"boolean"})],ga.prototype,"readOnly",void 0),H([P({mode:"boolean"})],ga.prototype,"autofocus",void 0),H([P],ga.prototype,"placeholder",void 0),H([P],ga.prototype,"type",void 0),H([P],ga.prototype,"list",void 0),H([P({converter:R})],ga.prototype,"maxlength",void 0),H([P({converter:R})],ga.prototype,"minlength",void 0),H([P],ga.prototype,"pattern",void 0),H([P({converter:R})],ga.prototype,"size",void 0),H([P({mode:"boolean"})],ga.prototype,"spellcheck",void 0),H([b],ga.prototype,"defaultSlottedNodes",void 0);class va{}function ma(e,t,s){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}Xt(va,mt),Xt(ga,Wt,va);const ba=et.create("input-placeholder-rest").withDefault((e=>{const t=Cr.getValueFor(e);return Gr.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),ya=et.create("input-placeholder-hover").withDefault((e=>{const t=Cr.getValueFor(e);return Gr.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),xa=et.create("input-filled-placeholder-rest").withDefault((e=>{const t=Nr.getValueFor(e);return Gr.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),wa=et.create("input-filled-placeholder-hover").withDefault((e=>{const t=Nr.getValueFor(e);return Gr.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),$a=".root";class ka extends ga{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}jo([P],ka.prototype,"appearance",void 0);const Ca=ka.compose({baseName:"text-field",baseClass:ga,template:(e,t)=>Ut`
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
                ${ns({property:"defaultSlottedNodes",filter:ma})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Jt(0,t)}
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
                ${Kt("control")}
            />
            ${Gt(0,t)}
        </div>
    </template>
`,styles:(e,t)=>ls`
    ${us("inline-block")}

    ${((e,t,s)=>ls`
  :host {
    ${No}
    color: ${Wr};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${s} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${pi} * 1px) solid transparent;
    border-radius: calc(${ui} * 1px);
    height: calc(${Ro} * 1px);
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
    color: ${Wr};
    cursor: pointer;
    ${No}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${s},
  :host([readonly]) ${s},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${Vo};
  }

  :host([disabled]) {
    opacity: ${ai};
  }
`)(0,0,$a)}

    ${ls`
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
      height: calc(${fi} * 1px);
      bottom: 0;
      border-bottom: calc(${fi} * 1px) solid ${nr};
      border-bottom-left-radius: calc(${ui} * 1px);
      border-bottom-right-radius: calc(${ui} * 1px);
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
      padding: 0 calc(${hi} * 2px + 1px);
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
  `.withBehaviors(Xo("outline",((e,t,s,i=":not([disabled]):not(:focus-within)")=>ls`
  ${s} {
    background: padding-box linear-gradient(${Sr}, ${Sr}),
      border-box ${ro};
  }

  :host(${i}:hover) ${s} {
    background: padding-box linear-gradient(${Or}, ${Or}),
      border-box ${oo};
  }

  :host(:not([disabled]):focus-within) ${s} {
    background: padding-box linear-gradient(${Fr}, ${Fr}),
      border-box ${ro};
  }
  
  :host([disabled]) ${s} {
    background: padding-box linear-gradient(${Sr}, ${Sr}),
      border-box ${Xr};
  }

  .control::placeholder {
    color: ${ba};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${ya};
  }
`)(0,0,$a)),Xo("filled",((e,t,s,i=":not([disabled]):not(:focus-within)")=>ls`
  ${s} {
    background: ${Pr};
  }

  :host(${i}:hover) ${s} {
    background: ${Ar};
  }

  :host(:not([disabled]):focus-within) ${s} {
    background: ${jr};
  }

  :host([disabled]) ${s} {
    background: ${Pr};
  }

  .control::placeholder {
    color: ${xa};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${wa};
  }
`)(0,0,$a)),Lo(((e,t,s,i=":not([disabled]):not(:focus-within)")=>ls`
  :host {
    color: ${Io.ButtonText};
  }

  ${s} {
    background: ${Io.ButtonFace};
    border-color: ${Io.ButtonText};
  }

  :host(${i}:hover) ${s},
  :host(:not([disabled]):focus-within) ${s} {
    border-color: ${Io.Highlight};
  }

  :host([disabled]) ${s} {
    opacity: 1;
    background: ${Io.ButtonFace};
    border-color: ${Io.GrayText};
  }

  .control::placeholder,
  :host(${i}:hover) .control::placeholder {
    color: ${Io.CanvasText};
  }

  :host(:not([disabled]):focus) ${s} {
    ${Co}
    outline-color: ${Io.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${Io.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${Io.GrayText};
  }
`)(0,0,$a))),shadowOptions:{delegatesFocus:!0}});class Sa extends Ee{}class Oa extends(function(e){class t extends(Uo(e)){}class s extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return P({attribute:"checked",mode:"boolean"})(s.prototype,"checkedAttribute"),P({attribute:"current-checked",converter:E})(s.prototype,"currentChecked"),b(s.prototype,"defaultChecked"),b(s.prototype,"checked"),s}(Sa)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Fa extends Oa{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case dt:case" ":this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}H([P({attribute:"readonly",mode:"boolean"})],Fa.prototype,"readOnly",void 0),H([b],Fa.prototype,"defaultSlottedNodes",void 0);const Va=Fa.compose({baseName:"switch",template:(e,t)=>Ut`
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
            <slot ${ns("defaultSlottedNodes")}></slot>
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
`,styles:(e,t)=>ls`
    :host([hidden]) {
      display: none;
    }

    ${us("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${gi};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${ai};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Vo};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${Ro} / 2) + ${hi}) * 2px);
      height: calc(((${Ro} / 2) + ${hi}) * 1px);
      background: ${Dr};
      border-radius: calc(${Ro} * 1px);
      border: calc(${pi} * 1px) solid ${ho};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Tr};
      border-color: ${uo};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Lr};
      border-color: ${po};
    }

    :host(:${Fo}) .switch {
      ${So}
      background: ${Ir};
    }

    :host(.checked) .switch {
      background: ${nr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${rr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${or};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Wr};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Wr};
      cursor: pointer;
      ${No}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Wr};
      ${No}
      margin-inline-end: calc(${hi} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${hi} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${nr};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${cr};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${rr};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${hr};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${or};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${ur};
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
  `.withBehaviors(new Po(ls`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,ls`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),Lo(ls`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Io.FieldText};
        }
        .switch {
          background: ${Io.Field};
          border-color: ${Io.FieldText};
        }
        :host(.checked) .switch {
          background: ${Io.Highlight};
          border-color: ${Io.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${Io.HighlightText};
          border-color: ${Io.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${Io.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${Io.Highlight};
        }
        :host(:${Fo}) .switch {
          forced-color-adjust: none;
          background: ${Io.Field}; 
          border-color: ${Io.Highlight};
          outline-color: ${Io.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Io.GrayText};
        }
        :host(.disabled) .switch {
          background: ${Io.Field};
          border-color: ${Io.GrayText};
        }
        .status-message,
        .label {
          color: ${Io.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '}),Da={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Ta{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Da,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,s,i){return i&&!this.debug?null:("string"==typeof e[0]&&(e[0]=`${s}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Ta(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new Ta(this.logger,e)}}var La=new Ta;class Ia{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach((e=>{this.observers[e]||(this.observers[e]=new Map);const s=this.observers[e].get(t)||0;this.observers[e].set(t,s+1)})),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach((e=>{let[t,i]=e;for(let e=0;e<i;e++)t(...s)})),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach((t=>{let[i,n]=t;for(let t=0;t<n;t++)i.apply(i,[e,...s])}))}}function Ea(){let e,t;const s=new Promise(((s,i)=>{e=s,t=i}));return s.resolve=e,s.reject=t,s}function Ra(e){return null==e?"":""+e}const Na=/###/g;function Pa(e,t,s){function i(e){return e&&e.indexOf("###")>-1?e.replace(Na,"."):e}function n(){return!e||"string"==typeof e}const r="string"!=typeof t?t:t.split(".");let o=0;for(;o<r.length-1;){if(n())return{};const t=i(r[o]);!e[t]&&s&&(e[t]=new s),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++o}return n()?{}:{obj:e,k:i(r[o])}}function Aa(e,t,s){const{obj:i,k:n}=Pa(e,t,Object);if(void 0!==i||1===t.length)return void(i[n]=s);let r=t[t.length-1],o=t.slice(0,t.length-1),a=Pa(e,o,Object);for(;void 0===a.obj&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Pa(e,o,Object),a&&a.obj&&void 0!==a.obj[`${a.k}.${r}`]&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=s}function Ma(e,t){const{obj:s,k:i}=Pa(e,t);if(s)return s[i]}function ja(e,t,s){for(const i in t)"__proto__"!==i&&"constructor"!==i&&(i in e?"string"==typeof e[i]||e[i]instanceof String||"string"==typeof t[i]||t[i]instanceof String?s&&(e[i]=t[i]):ja(e[i],t[i],s):e[i]=t[i]);return e}function Ba(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Ha={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function za(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(e=>Ha[e])):e}const _a=[" ",",","?","!",";"],Ua=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const s=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,s),this.regExpQueue.push(e),s}}(20);function qa(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t])return e[t];const i=t.split(s);let n=e;for(let e=0;e<i.length;){if(!n||"object"!=typeof n)return;let t,r="";for(let o=e;o<i.length;++o)if(o!==e&&(r+=s),r+=i[o],t=n[r],void 0!==t){if(["string","number","boolean"].indexOf(typeof t)>-1&&o<i.length-1)continue;e+=o-e+1;break}n=t}return n}function Ka(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Wa extends Ia{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,r=void 0!==i.ignoreJSONStructure?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],s&&(Array.isArray(s)?o.push(...s):"string"==typeof s&&n?o.push(...s.split(n)):o.push(s)));const a=Ma(this.data,o);return!a&&!t&&!s&&e.indexOf(".")>-1&&(e=o[0],t=o[1],s=o.slice(2).join(".")),a||!r||"string"!=typeof s?a:qa(this.data&&this.data[e]&&this.data[e][t],s,n)}addResource(e,t,s,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator;let o=[e,t];s&&(o=o.concat(r?s.split(r):s)),e.indexOf(".")>-1&&(o=e.split("."),i=t,t=o[1]),this.addNamespaces(t),Aa(this.data,o,i),n.silent||this.emit("added",e,t,s,i)}addResources(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const i in s)("string"==typeof s[i]||Array.isArray(s[i]))&&this.addResource(e,t,i,s[i],{silent:!0});i.silent||this.emit("added",e,t,s)}addResourceBundle(e,t,s,i,n){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),i=s,s=t,t=o[1]),this.addNamespaces(t);let a=Ma(this.data,o)||{};r.skipCopy||(s=JSON.parse(JSON.stringify(s))),i?ja(a,s,n):a={...a,...s},Aa(this.data,o,a),r.silent||this.emit("added",e,t,s)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((e=>t[e]&&Object.keys(t[e]).length>0))}toJSON(){return this.data}}var Ga={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,s,i,n){return e.forEach((e=>{this.processors[e]&&(t=this.processors[e].process(t,s,i,n))})),t}};const Ja={};class Xa extends Ia{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var s,i;super(),s=e,i=this,["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach((e=>{s[e]&&(i[e]=s[e])})),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=La.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;const s=this.resolve(e,t);return s&&void 0!==s.res}extractFromKey(e,t){let s=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===s&&(s=":");const i=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const r=s&&e.indexOf(s)>-1,o=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||function(e,t,s){t=t||"",s=s||"";const i=_a.filter((e=>t.indexOf(e)<0&&s.indexOf(e)<0));if(0===i.length)return!0;const n=Ua.getRegExp(`(${i.map((e=>"?"===e?"\\?":e)).join("|")})`);let r=!n.test(e);if(!r){const t=e.indexOf(s);t>0&&!n.test(e.substring(0,t))&&(r=!0)}return r}(e,s,i));if(r&&!o){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:n};const r=e.split(s);(s!==i||s===i&&this.options.ns.indexOf(r[0])>-1)&&(n=r.shift()),e=r.join(i)}return"string"==typeof n&&(n=[n]),{key:e,namespaces:n}}translate(e,t,s){if("object"!=typeof t&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof t&&(t={...t}),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);const i=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,{key:r,namespaces:o}=this.extractFromKey(e[e.length-1],t),a=o[o.length-1],l=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&"cimode"===l.toLowerCase()){if(c){const e=t.nsSeparator||this.options.nsSeparator;return i?{res:`${a}${e}${r}`,usedKey:r,exactUsedKey:r,usedLng:l,usedNS:a,usedParams:this.getUsedParamsDetails(t)}:`${a}${e}${r}`}return i?{res:r,usedKey:r,exactUsedKey:r,usedLng:l,usedNS:a,usedParams:this.getUsedParamsDetails(t)}:r}const h=this.resolve(e,t);let u=h&&h.res;const d=h&&h.usedKey||r,p=h&&h.exactUsedKey||r,f=Object.prototype.toString.apply(u),g=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject;if(v&&u&&"string"!=typeof u&&"boolean"!=typeof u&&"number"!=typeof u&&["[object Number]","[object Function]","[object RegExp]"].indexOf(f)<0&&("string"!=typeof g||!Array.isArray(u))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,u,{...t,ns:o}):`key '${r} (${this.language})' returned an object instead of string.`;return i?(h.res=e,h.usedParams=this.getUsedParamsDetails(t),h):e}if(n){const e=Array.isArray(u),s=e?[]:{},i=e?p:d;for(const e in u)if(Object.prototype.hasOwnProperty.call(u,e)){const r=`${i}${n}${e}`;s[e]=this.translate(r,{...t,joinArrays:!1,ns:o}),s[e]===r&&(s[e]=u[e])}u=s}}else if(v&&"string"==typeof g&&Array.isArray(u))u=u.join(g),u&&(u=this.extendTranslation(u,e,t,s));else{let i=!1,o=!1;const c=void 0!==t.count&&"string"!=typeof t.count,d=Xa.hasDefaultValue(t),p=c?this.pluralResolver.getSuffix(l,t.count,t):"",f=t.ordinal&&c?this.pluralResolver.getSuffix(l,t.count,{ordinal:!1}):"",g=c&&!t.ordinal&&0===t.count&&this.pluralResolver.shouldUseIntlApi(),v=g&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${p}`]||t[`defaultValue${f}`]||t.defaultValue;!this.isValidLookup(u)&&d&&(i=!0,u=v),this.isValidLookup(u)||(o=!0,u=r);const m=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&o?void 0:u,b=d&&v!==u&&this.options.updateMissing;if(o||i||b){if(this.logger.log(b?"updateKey":"missingKey",l,a,r,b?v:u),n){const e=this.resolve(r,{...t,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const s=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&s&&s[0])for(let t=0;t<s.length;t++)e.push(s[t]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(t.lng||this.language):e.push(t.lng||this.language);const i=(e,s,i)=>{const n=d&&i!==u?i:m;this.options.missingKeyHandler?this.options.missingKeyHandler(e,a,s,n,b,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,a,s,n,b,t),this.emit("missingKey",e,a,s,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&c?e.forEach((e=>{const s=this.pluralResolver.getSuffixes(e,t);g&&t[`defaultValue${this.options.pluralSeparator}zero`]&&s.indexOf(`${this.options.pluralSeparator}zero`)<0&&s.push(`${this.options.pluralSeparator}zero`),s.forEach((s=>{i([e],r+s,t[`defaultValue${s}`]||v)}))})):i(e,r,v))}u=this.extendTranslation(u,e,t,h,s),o&&u===r&&this.options.appendNamespaceToMissingKey&&(u=`${a}:${r}`),(o||i)&&this.options.parseMissingKeyHandler&&(u="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${a}:${r}`:r,i?u:void 0):this.options.parseMissingKeyHandler(u))}return i?(h.res=u,h.usedParams=this.getUsedParamsDetails(t),h):u}extendTranslation(e,t,s,i,n){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const o="string"==typeof e&&(s&&s.interpolation&&void 0!==s.interpolation.skipOnVariables?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let a;if(o){const t=e.match(this.interpolator.nestingRegexp);a=t&&t.length}let l=s.replace&&"string"!=typeof s.replace?s.replace:s;if(this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),e=this.interpolator.interpolate(e,l,s.lng||this.language||i.usedLng,s),o){const t=e.match(this.interpolator.nestingRegexp);a<(t&&t.length)&&(s.nest=!1)}!s.lng&&"v1"!==this.options.compatibilityAPI&&i&&i.res&&(s.lng=this.language||i.usedLng),!1!==s.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return n&&n[0]===i[0]&&!s.context?(r.logger.warn(`It seems you are nesting recursively key: ${i[0]} in key: ${t[0]}`),null):r.translate(...i,t)}),s)),s.interpolation&&this.interpolator.reset()}const o=s.postProcess||this.options.postProcess,a="string"==typeof o?[o]:o;return null!=e&&a&&a.length&&!1!==s.applyPostProcessor&&(e=Ga.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),e}resolve(e){let t,s,i,n,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((e=>{if(this.isValidLookup(t))return;const a=this.extractFromKey(e,o),l=a.key;s=l;let c=a.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const h=void 0!==o.count&&"string"!=typeof o.count,u=h&&!o.ordinal&&0===o.count&&this.pluralResolver.shouldUseIntlApi(),d=void 0!==o.context&&("string"==typeof o.context||"number"==typeof o.context)&&""!==o.context,p=o.lngs?o.lngs:this.languageUtils.toResolveHierarchy(o.lng||this.language,o.fallbackLng);c.forEach((e=>{this.isValidLookup(t)||(r=e,!Ja[`${p[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(r)&&(Ja[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${s}" for languages "${p.join(", ")}" won't get resolved as namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((s=>{if(this.isValidLookup(t))return;n=s;const r=[l];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(r,l,s,e,o);else{let e;h&&(e=this.pluralResolver.getSuffix(s,o.count,o));const t=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(r.push(l+e),o.ordinal&&0===e.indexOf(i)&&r.push(l+e.replace(i,this.options.pluralSeparator)),u&&r.push(l+t)),d){const s=`${l}${this.options.contextSeparator}${o.context}`;r.push(s),h&&(r.push(s+e),o.ordinal&&0===e.indexOf(i)&&r.push(s+e.replace(i,this.options.pluralSeparator)),u&&r.push(s+t))}}let a;for(;a=r.pop();)this.isValidLookup(t)||(i=a,t=this.getResource(s,e,a,o))})))}))})),{res:t,usedKey:s,exactUsedKey:i,usedLng:n,usedNS:r}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,s,i):this.resourceStore.getResource(e,t,s,i)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=e.replace&&"string"!=typeof e.replace;let i=s?e.replace:e;if(s&&void 0!==e.count&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!s){i={...i};for(const e of t)delete i[e]}return i}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&"defaultValue"===t.substring(0,12)&&void 0!==e[t])return!0;return!1}}function Ya(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Qa{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=La.create("languageUtils")}getScriptPartFromCode(e){if(!(e=Ka(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=Ka(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if("string"==typeof e&&e.indexOf("-")>-1){const t=["hans","hant","latn","cyrl","cans","mong","arab"];let s=e.split("-");return this.options.lowerCaseLng?s=s.map((e=>e.toLowerCase())):2===s.length?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),t.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ya(s[1].toLowerCase()))):3===s.length&&(s[0]=s[0].toLowerCase(),2===s[1].length&&(s[1]=s[1].toUpperCase()),"sgn"!==s[0]&&2===s[2].length&&(s[2]=s[2].toUpperCase()),t.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ya(s[1].toLowerCase())),t.indexOf(s[2].toLowerCase())>-1&&(s[2]=Ya(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach((e=>{if(t)return;const s=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(s)||(t=s)})),!t&&this.options.supportedLngs&&e.forEach((e=>{if(t)return;const s=this.getLanguagePartFromCode(e);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find((e=>e===s?e:e.indexOf("-")<0&&s.indexOf("-")<0?void 0:e.indexOf("-")>0&&s.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===s||0===e.indexOf(s)&&s.length>1?e:void 0))})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let s=e[t];return s||(s=e[this.getScriptPartFromCode(t)]),s||(s=e[this.formatLanguageCode(t)]),s||(s=e[this.getLanguagePartFromCode(t)]),s||(s=e.default),s||[]}toResolveHierarchy(e,t){const s=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],n=e=>{e&&(this.isSupportedCode(e)?i.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return"string"==typeof e&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&n(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&n(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&n(this.getLanguagePartFromCode(e))):"string"==typeof e&&n(this.formatLanguageCode(e)),s.forEach((e=>{i.indexOf(e)<0&&n(this.formatLanguageCode(e))})),i}}let Za=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],el={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}};const tl=["v1","v2","v3"],sl=["v4"],il={zero:0,one:1,two:2,few:3,many:4,other:5};class nl{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=La.create("pluralResolver"),this.options.compatibilityJSON&&!sl.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=function(){const e={};return Za.forEach((t=>{t.lngs.forEach((s=>{e[s]={numbers:t.nr,plurals:el[t.fc]}}))})),e}()}addRule(e,t){this.rules[e]=t}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Ka("dev"===e?"en":e),{type:t.ordinal?"ordinal":"cardinal"})}catch(e){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=this.getRule(e,t);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,s).map((e=>`${t}${e}`))}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=this.getRule(e,t);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort(((e,t)=>il[e]-il[t])).map((e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):s.numbers.map((s=>this.getSuffix(e,s,t))):[]}getSuffix(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${i.select(t)}`:this.getSuffixRetroCompatible(i,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const s=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let i=e.numbers[s];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===i?i="plural":1===i&&(i=""));const n=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return"v1"===this.options.compatibilityJSON?1===i?"":"number"==typeof i?`_plural_${i.toString()}`:n():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?n():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!tl.includes(this.options.compatibilityJSON)}}function rl(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=function(e,t,s){const i=Ma(e,s);return void 0!==i?i:Ma(t,s)}(e,t,s);return!r&&n&&"string"==typeof s&&(r=qa(e,s,i),void 0===r&&(r=qa(t,s,i))),r}class ol{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=La.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:s,useRawValueToEscape:i,prefix:n,prefixEscaped:r,suffix:o,suffixEscaped:a,formatSeparator:l,unescapeSuffix:c,unescapePrefix:h,nestingPrefix:u,nestingPrefixEscaped:d,nestingSuffix:p,nestingSuffixEscaped:f,nestingOptionsSeparator:g,maxReplaces:v,alwaysFormat:m}=e.interpolation;this.escape=void 0!==t?t:za,this.escapeValue=void 0===s||s,this.useRawValueToEscape=void 0!==i&&i,this.prefix=n?Ba(n):r||"{{",this.suffix=o?Ba(o):a||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=u?Ba(u):d||Ba("$t("),this.nestingSuffix=p?Ba(p):f||Ba(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=v||1e3,this.alwaysFormat=void 0!==m&&m,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e&&e.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,s,i){let n,r,o;const a=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function l(e){return e.replace(/\$/g,"$$$$")}const c=e=>{if(e.indexOf(this.formatSeparator)<0){const n=rl(t,a,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(n,void 0,s,{...i,...t,interpolationkey:e}):n}const n=e.split(this.formatSeparator),r=n.shift().trim(),o=n.join(this.formatSeparator).trim();return this.format(rl(t,a,r,this.options.keySeparator,this.options.ignoreJSONStructure),o,s,{...i,...t,interpolationkey:r})};this.resetRegExp();const h=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,u=i&&i.interpolation&&void 0!==i.interpolation.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>l(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?l(this.escape(e)):l(e)}].forEach((t=>{for(o=0;n=t.regex.exec(e);){const s=n[1].trim();if(r=c(s),void 0===r)if("function"==typeof h){const t=h(e,n,i);r="string"==typeof t?t:""}else if(i&&Object.prototype.hasOwnProperty.call(i,s))r="";else{if(u){r=n[0];continue}this.logger.warn(`missed to pass in variable ${s} for interpolating ${e}`),r=""}else"string"==typeof r||this.useRawValueToEscape||(r=Ra(r));const a=t.safeValue(r);if(e=e.replace(n[0],a),u?(t.regex.lastIndex+=r.length,t.regex.lastIndex-=n[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}})),e}nest(e,t){let s,i,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function o(e,t){const s=this.nestingOptionsSeparator;if(e.indexOf(s)<0)return e;const i=e.split(new RegExp(`${s}[ ]*{`));let r=`{${i[1]}`;e=i[0],r=this.interpolate(r,n);const o=r.match(/'/g),a=r.match(/"/g);(o&&o.length%2==0&&!a||a.length%2!=0)&&(r=r.replace(/'/g,'"'));try{n=JSON.parse(r),t&&(n={...t,...n})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${s}${r}`}return n.defaultValue&&n.defaultValue.indexOf(this.prefix)>-1&&delete n.defaultValue,e}for(;s=this.nestingRegexp.exec(e);){let a=[];n={...r},n=n.replace&&"string"!=typeof n.replace?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;let l=!1;if(-1!==s[0].indexOf(this.formatSeparator)&&!/{.*}/.test(s[1])){const e=s[1].split(this.formatSeparator).map((e=>e.trim()));s[1]=e.shift(),a=e,l=!0}if(i=t(o.call(this,s[1].trim(),n),n),i&&s[0]===e&&"string"!=typeof i)return i;"string"!=typeof i&&(i=Ra(i)),i||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),i=""),l&&(i=a.reduce(((e,t)=>this.format(e,t,r.lng,{...r,interpolationkey:s[1].trim()})),i.trim())),e=e.replace(s[0],i),this.regexp.lastIndex=0}return e}}function al(e){const t={};return function(s,i,n){const r=i+JSON.stringify(n);let o=t[r];return o||(o=e(Ka(i),n),t[r]=o),o(s)}}class ll{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=La.create("formatter"),this.options=e,this.formats={number:al(((e,t)=>{const s=new Intl.NumberFormat(e,{...t});return e=>s.format(e)})),currency:al(((e,t)=>{const s=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>s.format(e)})),datetime:al(((e,t)=>{const s=new Intl.DateTimeFormat(e,{...t});return e=>s.format(e)})),relativetime:al(((e,t)=>{const s=new Intl.RelativeTimeFormat(e,{...t});return e=>s.format(e,t.range||"day")})),list:al(((e,t)=>{const s=new Intl.ListFormat(e,{...t});return e=>s.format(e)}))},this.init(e)}init(e){const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=al(t)}format(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.split(this.formatSeparator).reduce(((e,t)=>{const{formatName:n,formatOptions:r}=function(e){let t=e.toLowerCase().trim();const s={};if(e.indexOf("(")>-1){const i=e.split("(");t=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);"currency"===t&&n.indexOf(":")<0?s.currency||(s.currency=n.trim()):"relativetime"===t&&n.indexOf(":")<0?s.range||(s.range=n.trim()):n.split(";").forEach((e=>{if(e){const[t,...i]=e.split(":"),n=i.join(":").trim().replace(/^'+|'+$/g,""),r=t.trim();s[r]||(s[r]=n),"false"===n&&(s[r]=!1),"true"===n&&(s[r]=!0),isNaN(n)||(s[r]=parseInt(n,10))}}))}return{formatName:t,formatOptions:s}}(t);if(this.formats[n]){let t=e;try{const o=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},a=o.locale||o.lng||i.locale||i.lng||s;t=this.formats[n](e,a,{...r,...i,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${n}`),e}),e)}}class cl extends Ia{constructor(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=s,this.languageUtils=s.languageUtils,this.options=i,this.logger=La.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,i.backend,i)}queueLoad(e,t,s,i){const n={},r={},o={},a={};return e.forEach((e=>{let i=!0;t.forEach((t=>{const o=`${e}|${t}`;!s.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(1===this.state[o]?void 0===r[o]&&(r[o]=!0):(this.state[o]=1,i=!1,void 0===r[o]&&(r[o]=!0),void 0===n[o]&&(n[o]=!0),void 0===a[t]&&(a[t]=!0)))})),i||(o[e]=!0)})),(Object.keys(n).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(n),pending:Object.keys(r),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(a)}}loaded(e,t,s){const i=e.split("|"),n=i[0],r=i[1];t&&this.emit("failedLoading",n,r,t),s&&this.store.addResourceBundle(n,r,s,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2;const o={};this.queue.forEach((s=>{!function(e,t,s){const{obj:i,k:n}=Pa(e,t,Object);i[n]=i[n]||[],i[n].push(s)}(s.loaded,[n],r),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(s,e),t&&s.errors.push(t),0!==s.pendingCount||s.done||(Object.keys(s.loaded).forEach((e=>{o[e]||(o[e]={});const t=s.loaded[e];t.length&&t.forEach((t=>{void 0===o[e][t]&&(o[e][t]=!0)}))})),s.done=!0,s.errors.length?s.callback(s.errors):s.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((e=>!e.done))}read(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,r=arguments.length>5?arguments[5]:void 0;if(!e.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:s,tried:i,wait:n,callback:r});this.readingCalls++;const o=(o,a)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}o&&a&&i<this.maxRetries?setTimeout((()=>{this.read.call(this,e,t,s,i+1,2*n,r)}),n):r(o,a)},a=this.backend[s].bind(this.backend);if(2!==a.length)return a(e,t,o);try{const s=a(e,t);s&&"function"==typeof s.then?s.then((e=>o(null,e))).catch(o):o(null,s)}catch(e){o(e)}}prepareLoading(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);const n=this.queueLoad(e,t,s,i);if(!n.toLoad.length)return n.pending.length||i(),null;n.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,t,s){this.prepareLoading(e,t,{},s)}reload(e,t,s){this.prepareLoading(e,t,{reload:!0},s)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const s=e.split("|"),i=s[0],n=s[1];this.read(i,n,"read",void 0,void 0,((s,r)=>{s&&this.logger.warn(`${t}loading namespace ${n} for language ${i} failed`,s),!s&&r&&this.logger.log(`${t}loaded namespace ${n} for language ${i}`,r),this.loaded(e,s,r)}))}saveMissing(e,t,s,i,n){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=s&&""!==s){if(this.backend&&this.backend.create){const a={...r,isUpdate:n},l=this.backend.create.bind(this.backend);if(l.length<6)try{let n;n=5===l.length?l(e,t,s,i,a):l(e,t,s,i),n&&"function"==typeof n.then?n.then((e=>o(null,e))).catch(o):o(null,n)}catch(e){o(e)}else l(e,t,s,i,o,a)}e&&e[0]&&this.store.addResource(e[0],t,s,i)}}}function hl(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let t={};if("object"==typeof e[1]&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const s=e[3]||e[2];Object.keys(s).forEach((e=>{t[e]=s[e]}))}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function ul(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function dl(){}class pl extends Ia{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;var s;if(super(),this.options=ul(e),this.services={},this.logger=La,this.modules={external:[]},s=this,Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach((e=>{"function"==typeof s[e]&&(s[e]=s[e].bind(s))})),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout((()=>{this.init(e,t)}),0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof t&&(s=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"==typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const i=hl();function n(e){return e?"function"==typeof e?new e:e:null}if(this.options={...i,...this.options,...ul(t)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){let t;this.modules.logger?La.init(n(this.modules.logger),this.options):La.init(null,this.options),this.modules.formatter?t=this.modules.formatter:"undefined"!=typeof Intl&&(t=ll);const s=new Qa(this.options);this.store=new Wa(this.options.resources,this.options);const r=this.services;r.logger=La,r.resourceStore=this.store,r.languageUtils=s,r.pluralResolver=new nl(s,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!t||this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format||(r.formatter=n(t),r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new ol(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new cl(n(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",(function(t){for(var s=arguments.length,i=new Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];e.emit(t,...i)})),this.modules.languageDetector&&(r.languageDetector=n(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=n(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new Xa(this.services,this.options),this.translator.on("*",(function(t){for(var s=arguments.length,i=new Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];e.emit(t,...i)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,s||(s=dl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((t=>{this[t]=function(){return e.store[t](...arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((t=>{this[t]=function(){return e.store[t](...arguments),e}}));const r=Ea(),o=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),r.resolve(t),s(e,t)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?o():setTimeout(o,0),r}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dl;const s="string"==typeof e?e:this.language;if("function"==typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(s&&"cimode"===s.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],i=t=>{t&&"cimode"!==t&&this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)}))};s?i(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>i(e))),this.options.preload&&this.options.preload.forEach((e=>i(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)}))}else t(null)}reloadResources(e,t,s){const i=Ea();return e||(e=this.languages),t||(t=this.options.ns),s||(s=dl),this.services.backendConnector.reload(e,t,(e=>{i.resolve(),s(e)})),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Ga.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!(["cimode","dev"].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}}changeLanguage(e,t){var s=this;this.isLanguageChangingTo=e;const i=Ea();this.emit("languageChanging",e);const n=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},r=(e,r)=>{r?(n(r),this.translator.changeLanguage(r),this.isLanguageChangingTo=void 0,this.emit("languageChanged",r),this.logger.log("languageChanged",r)):this.isLanguageChangingTo=void 0,i.resolve((function(){return s.t(...arguments)})),t&&t(e,(function(){return s.t(...arguments)}))},o=t=>{e||t||!this.services.languageDetector||(t=[]);const s="string"==typeof t?t:this.services.languageUtils.getBestMatchFromCodes(t);s&&(this.language||n(s),this.translator.language||this.translator.changeLanguage(s),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(s)),this.loadResources(s,(e=>{r(e,s)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),i}getFixedT(e,t,s){var i=this;const n=function(e,t){let r;if("object"!=typeof t){for(var o=arguments.length,a=new Array(o>2?o-2:0),l=2;l<o;l++)a[l-2]=arguments[l];r=i.options.overloadTranslationOptionHandler([e,t].concat(a))}else r={...t};r.lng=r.lng||n.lng,r.lngs=r.lngs||n.lngs,r.ns=r.ns||n.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||s||n.keyPrefix);const c=i.options.keySeparator||".";let h;return h=r.keyPrefix&&Array.isArray(e)?e.map((e=>`${r.keyPrefix}${c}${e}`)):r.keyPrefix?`${r.keyPrefix}${c}${e}`:e,i.t(h,r)};return"string"==typeof e?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=s,n}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=t.lng||this.resolvedLanguage||this.languages[0],i=!!this.options&&this.options.fallbackLng,n=this.languages[this.languages.length-1];if("cimode"===s.toLowerCase())return!0;const r=(e,t)=>{const s=this.services.backendConnector.state[`${e}|${t}`];return-1===s||2===s};if(t.precheck){const e=t.precheck(this,r);if(void 0!==e)return e}return!(!this.hasResourceBundle(s,e)&&this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages)&&(!r(s,e)||i&&!r(n,e)))}loadNamespaces(e,t){const s=Ea();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)})),this.loadResources((e=>{s.resolve(),t&&t(e)})),s):(t&&t(),Promise.resolve())}loadLanguages(e,t){const s=Ea();"string"==typeof e&&(e=[e]);const i=this.options.preload||[],n=e.filter((e=>i.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e)));return n.length?(this.options.preload=i.concat(n),this.loadResources((e=>{s.resolve(),t&&t(e)})),s):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=this.services&&this.services.languageUtils||new Qa(hl());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new pl(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dl;const s=e.forkResourceStore;s&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},n=new pl(i);return void 0===e.debug&&void 0===e.prefix||(n.logger=n.logger.clone(e)),["store","services","language"].forEach((e=>{n[e]=this[e]})),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},s&&(n.store=new Wa(this.store.data,i),n.services.resourceStore=n.store),n.translator=new Xa(n.services,i),n.translator.on("*",(function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];n.emit(e,...s)})),n.init(i,t),n.translator.options=i,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const fl=pl.createInstance();fl.createInstance=pl.createInstance,fl.createInstance,fl.dir,fl.init,fl.loadResources,fl.reloadResources,fl.use,fl.changeLanguage,fl.getFixedT,fl.t,fl.exists,fl.setDefaultNamespace,fl.hasLoadedNamespace,fl.loadNamespaces,fl.loadLanguages,s(511),ot.getOrCreate(undefined).withPrefix("fluent").register(Oo(),Mo(),ea(),da(),Ca(),Va());var gl=function(e){var t=document.getElementById(e);null!=t&&(t.textContent=fl.t(e))};fl.init({lng:"ja",debug:!0,resources:{en:{translation:{"title-sora":"sora","input-text":"Input text...","select-file":"Select a file...","send-data":"Send","remove-file":"Remove a file","remove-text":"Remove a text","copy-text":"Copy a text"}},ja:{translation:{"title-sora":"ソラ","input-text":"テキストを入力...","select-file":"ファイルの選択","send-data":"送信","remove-file":"ファイルの削除","remove-text":"テキストの削除","copy-text":"テキストのコピー"}}}},(function(){gl("title-sora"),function(e){var t=document.getElementById(e);null!=t&&t.setAttribute("placeholder",fl.t(e))}("input-text"),gl("select-file"),gl("send-data"),gl("remove-file"),gl("remove-text"),gl("copy-text")}));var vl=document.getElementById("select-file-button-pre"),ml=document.getElementById("select-file");null!=ml&&null!=vl&&(ml.addEventListener("click",(function(){return vl.click()})),vl.addEventListener("change",(function(){var e=document.getElementById("upload-form"),t=new FormData(e),s=new XMLHttpRequest;s.open("POST","/cgi-bin"),s.upload.addEventListener("loadstart",(function(){console.log("Upload: start")})),s.upload.addEventListener("load",(function(){console.log("Upload: done"),function(){var e=new XMLHttpRequest;e.open("POST","/cgi-bin"),e.send(function(e){var t=[];for(var s in e){var i=e[s],n=encodeURIComponent(s)+"="+encodeURIComponent(i);t.push(n)}return t.join("&").replace(/%20/g,"+")}({files:""})),e.onreadystatechange=function(){var t=JSON.parse(e.responseText||"null");if(null!=t)for(var s=function(e){var t=document.createElement("li");t.textContent=e,t.addEventListener("contextmenu",(function(e){e.preventDefault(),contextmenuFile.style.left=e.pageX+"px",contextmenuFile.style.top=e.pageY+"px",contextmenuFile.style.display="block",fileTarget=e.target})),t.addEventListener("click",(function(){contextmenuFile.style.display="none",location.href="/get?filename=".concat(e)}))},i=0,n=t;i<n.length;i++)s(n[i])}}()})),s.send(t)})));var bl=function(e,t){var s=document.getElementById("contents");!function(e){for(var t=e.children,s=0,i=Array.from(t);s<i.length;s++)i[s].remove()}(s);for(var i=function(e){var t=e.content,i=e.uuid,n=document.createElement("fluent-option");n.textContent=t,n.setAttribute("value",i),n.setAttribute("type","text"),n.addEventListener("click",(function(){var e=document.getElementById("items");e.classList.add("visible"),e.classList.remove("type-file"),e.classList.add("type-text"),document.getElementById("text-title").textContent=n.textContent,document.getElementById("text-content").textContent=n.textContent})),s.appendChild(n)},n=0,r=e;n<r.length;n++)i(r[n]);for(var o=0,a=t;o<a.length;o++){var l=a[o],c=document.createElement("fluent-option");c.textContent=l,c.setAttribute("type","file"),c.addEventListener("click",(function(){var e=document.getElementById("items");e.classList.add("visible"),e.classList.add("type-file"),e.classList.remove("type-text")})),s.appendChild(c)}},yl=function(){fetch("/cgi-bin?data=").then((function(e){return e.json()})).then((function(e){fetch("/cgi-bin?files").then((function(e){return e.json()})).then((function(t){bl(e,t)}))}))};yl(),document.getElementById("send-data").addEventListener("click",(function(){var e=document.getElementById("input-text").value;fetch("/cgi-bin?data="+encodeURI(e)).then((function(e){return e.json()})).then((function(e){fetch("/cgi-bin?files").then((function(e){return e.json()})).then((function(t){bl(e,t)}))}))})),document.getElementById("copy-text").addEventListener("click",(function(){var e=document.getElementById("contents");if(-1!=e.selectedIndex){var t=e.selectedOptions[0];t.textContent;var s=document.createElement("textarea");s.value=t.textContent,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s)}})),document.getElementById("remove-text").addEventListener("click",(function(){var e,t=document.getElementById("contents");-1!=t.selectedIndex&&(e=t.selectedOptions[0].value,fetch("/cgi-bin?delete="+e).then((function(e){return e.json()})).then((function(e){})),yl())}))})();