!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.2"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.2"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:routing:5.1.2"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:strategies:5.1.2"]&&_()}catch(e){}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var s=n.p+"images/b74c93d42ac53d70a5c28aa5486de140.jpg";n(1);const r=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class o extends Error{constructor(e,t){super(r(e,t)),this.name=e,this.details=t}}n(2);const c=e=>e&&"object"==typeof e?e:{handle:e};class i{constructor(e,t,n="GET"){this.handler=c(t),this.match=e,this.method=n}}class a extends i{constructor(e,t,n){super(({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)},t,n)}}const l=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");class u{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const{params:s,route:r}=this.findMatchingRoute({url:n,request:e,event:t});let o=r&&r.handler;if(!o&&this._defaultHandler&&(o=this._defaultHandler),!o)return void 0;let c;try{c=o.handle({url:n,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this._catchHandler&&(c=c.catch(s=>this._catchHandler.handle({url:n,request:e,event:t}))),c}findMatchingRoute({url:e,request:t,event:n}){const s=this._routes.get(t.method)||[];for(const r of s){let s;const o=r.match({url:e,request:t,event:n});if(o)return s=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(s=void 0),{route:r,params:s}}return{}}setDefaultHandler(e){this._defaultHandler=c(e)}setCatchHandler(e){this._catchHandler=c(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new o("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new o("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let h;const f=()=>(h||(h=new u,h.addFetchListener(),h.addCacheListener()),h);const d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},p=e=>[d.prefix,e,d.suffix].filter(e=>e&&e.length>0).join("-"),y=e=>e||p(d.precache),w=e=>e||p(d.runtime),g=new Set;const m=(e,t)=>e.filter(e=>t in e),v=async({request:e,mode:t,plugins:n=[]})=>{const s=m(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},_=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const o=await self.caches.open(e),c=await v({plugins:r,request:t,mode:"read"});let i=await o.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;i=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:i,request:c})}return i},R=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:c})=>{const i=await v({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:l(i.url)});const a=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,o=!1;for(const t of s)if("cacheWillUpdate"in t){o=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return o||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:i});if(!a)return void 0;const u=await self.caches.open(e),h=m(r,"cacheDidUpdate"),f=h.length>0?await _({cacheName:e,matchOptions:c,request:i}):null;try{await u.put(i,a)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const t of h)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:f,newResponse:a,request:i})},q=_,L=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=m(s,"fetchDidFail"),c=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const i=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:i,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:i.clone()});throw e}};n(3);const U={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};n(0);const b=[],T={get:()=>b,add(e){b.push(...e)}};let x;async function C(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,o=function(){if(void 0===x){const e=new Response("");if("body"in e)try{new Response(e.body),x=!0}catch(e){x=!1}x=!1}return x}()?n.body:await n.blob();return new Response(o,r)}function E(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class K{constructor(e){this._cacheName=y(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=E(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e="Workbox is precaching URLs without revision "+`info: ${t.join(", ")}\nThis is generally NOT safe. `+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),o=await r.keys(),c=new Set(o.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const i=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),o=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:o,event:e,integrity:r,plugins:t,url:s})});return await Promise.all(i),{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:c}){const i=new Request(t,{integrity:c,cache:n,credentials:"same-origin"});let a,l=await L({event:s,plugins:r,request:i});for(const e of r||[])"cacheWillUpdate"in e&&(a=e);if(!(a?await a.cacheWillUpdate({event:s,request:i,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await C(l)),await R({event:s,plugins:r,response:l,request:e===t?i:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let O;const N=()=>(O||(O=new K),O);const S=(e,t)=>{const n=N().getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:r}={}){const o=new URL(e,location.href);o.hash="",yield o.href;const c=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(o,t);if(yield c.href,n&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=n,yield e.href}if(s){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:o});for(const t of e)yield t.href}}(e,t)){const e=n.get(s);if(e)return e}};let W=!1;function M(e){W||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={})=>{const r=y();self.addEventListener("fetch",o=>{const c=S(o.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!c)return void 0;let i=self.caches.open(r).then(e=>e.match(c)).then(e=>e||fetch(c));o.respondWith(i)})})(e),W=!0)}const k=e=>{const t=N(),n=T.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},P=e=>{const t=N();e.waitUntil(t.activate())};var j;"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))})),function(e,t,n){let s;if("string"==typeof e){const r=new URL(e,location.href);0,s=new i(({url:e})=>e.href===r.href,t,n)}else if(e instanceof RegExp)s=new a(e,t,n);else if("function"==typeof e)s=new i(e,t,n);else{if(!(e instanceof i))throw new o("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});s=e}f().registerRoute(s)}(new RegExp("\\.(?:js|css)$"),new class{constructor(e={}){if(this._cacheName=w(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[U,...e.plugins]}else this._plugins=[U];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const n=this._getFromNetwork({request:t,event:e});let s,r=await q({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r){if(e)try{e.waitUntil(n)}catch(s){0}}else{0;try{r=await n}catch(e){s=e}}if(!r)throw new o("no-response",{url:t.url,error:s});return r}async _getFromNetwork({request:e,event:t}){const n=await L({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),s=R({cacheName:this._cacheName,request:e,response:n.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(s)}catch(e){0}return n}}),function(e){N().addToCacheList(e),e.length>0&&(self.addEventListener("install",k),self.addEventListener("activate",P))}([{url:"/index.html",revision:"1234"},{url:"/work.html",revision:"1234"},{url:"/contact.html",revision:"1234"},{url:"/bundle.css",revision:"1234"},{url:"/bundle.js",revision:"1234"}]),M(j);var H=document.querySelector(".overlay"),F=document.querySelectorAll(".overlay a"),I=document.querySelector(".closeBtn"),A=document.querySelector(".mobile_nav"),B=document.querySelector(".onLoad"),D=document.querySelector(".onLoad h1"),$=document.querySelectorAll(".contact"),G=document.querySelectorAll(".work"),J=document.querySelectorAll(".home"),Q=document.querySelector(".sasuke");Q.src=s,Q.style.width="100%",Q.style.opacity=".9",Q.style.height="55%",Q.style.overflow="hidden",A.addEventListener("click",(function(){H.style.width="100%",setTimeout((function(){F.forEach((function(e){e.style.opacity=".9"}))}),400)})),I.addEventListener("click",(function(){F.forEach((function(e){e.style.opacity="0"})),H.style.width="0"})),1===window.performance.navigation.type||document.title.startsWith("I")?window.addEventListener("DOMContentLoaded",(function(){B.style.opacity="1",setTimeout((function(){D.style.opacity=".9"}),300),setTimeout((function(){D.style.opacity="0"}),1700),setTimeout((function(){B.style.width="0",setTimeout((function(){B.style.opacity="0"}),300)}),2e3)})):window.addEventListener("DOMContentLoaded",(function(){B.style.opacity="1",setTimeout((function(){B.style.width="0",setTimeout((function(){B.style.opacity="0"}),300)}),400)})),window.addEventListener("load",(function(){document.title.startsWith("C")?$.forEach((function(e){e.style.color="#5edfff",e.style.borderBottom="3px solid #fb3569"})):document.title.startsWith("P")?G.forEach((function(e){e.style.color="#5edfff",e.style.borderBottom="3px solid #fb3569"})):(J.forEach((function(e){e.style.color="#5edfff"})),G.forEach((function(e){e.style.color="#ffffff"})),$.forEach((function(e){e.style.color="#ffffff"})))}))}]);
//# sourceMappingURL=bundle.js.map