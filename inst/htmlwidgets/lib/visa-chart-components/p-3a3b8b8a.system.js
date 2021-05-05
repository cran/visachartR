/**
 * Copyright (c) 2021 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function l(e){try{f(n.next(e))}catch(r){i(r)}}function s(e){try{f(n["throw"](e))}catch(r){i(r)}}function f(e){e.done?t(e.value):a(e.value).then(l,s)}f((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(r){return f([e,r])}}function f(l){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:t.label++;return{value:l[1],done:false};case 5:t.label++;a=l[1];l=[0];continue;case 7:l=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1];i=l;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(l);break}if(i[2])t.ops.pop();t.trys.pop();continue}l=r.call(e,t)}catch(s){l=[6,s];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],l=0,s=i.length;l<s;l++,a++)n[a]=i[l];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="charts";var a=false;var i=0;var l=false;var s=typeof window!=="undefined"?window:{};var f=s.CSS;var o=s.document||{head:{}};var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var $=function(e){return Promise.resolve(e)};var c=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v="{visibility:hidden}.hydrated{visibility:inherit}";var h="http://www.w3.org/1999/xlink";var m=function(e,r){if(r===void 0){r=""}{return function(){return}}};var p=function(e,r){{return function(){return}}};var d=new WeakMap;var g=function(e,r,t){var n=we.get(e);if(c&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}we.set(e,n)};var y=function(e,r,t,n){var a=b(r.$tagName$);var i=we.get(a);e=e.nodeType===11?e:o;if(i){if(typeof i==="string"){e=e.head||e;var l=d.get(e);var s=void 0;if(!l){d.set(e,l=new Set)}if(!l.has(a)){{if(u.$cssShim$){s=u.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var f=s["s-sc"];if(f){a=f;l=null}}else{s=o.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var w=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=m("attachStyles",r.$tagName$);var a=y(t.getRootNode(),r,e.$modeName$,t);n()};var b=function(e,r){return"sc-"+e};var S={};var _="http://www.w3.org/2000/svg";var k="http://www.w3.org/1999/xhtml";var x=function(e){e=typeof e;return e==="object"||e==="function"};var R=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var j=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var l=false;var s=false;var f=[];var o=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!x(a)){a=String(a)}if(l&&s){f[f.length-1].$text$+=a}else{f.push(l?N(null,a):a)}s=l}}};o(t);if(r){if(r.key){i=r.key}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r,f,M)}var $=N(e,null);$.$attrs$=r;if(f.length>0){$.$children$=f}{$.$key$=i}return $}));var N=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}return t};var E={};var C=function(e){return e&&e.$tag$===E};var M={forEach:function(e,r){return e.map(A).forEach(r)},map:function(e,r){return e.map(A).map(r).map(O)}};var A=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var O=function(e){var r=N(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var U=function(e,r,t,n,a,i){if(t!==n){var l=pe(e,r);var f=r.toLowerCase();if(r==="class"){var o=e.classList;var $=P(t);var c=P(n);o.remove.apply(o,$.filter((function(e){return e&&!c.includes(e)})));o.add.apply(o,c.filter((function(e){return e&&!$.includes(e)})))}else if(r==="style"){{for(var v in t){if(!n||n[v]==null){if(v.includes("-")){e.style.removeProperty(v)}else{e.style[v]=""}}}}for(var v in n){if(!t||n[v]!==t[v]){if(v.includes("-")){e.style.setProperty(v,n[v])}else{e.style[v]=n[v]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(pe(s,f)){r=f.slice(2)}else{r=f[2]+r.slice(3)}if(t){u.rel(e,r,t,false)}if(n){u.ael(e,r,n,false)}}else{var m=x(n);if((l||m&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var p=n==null?"":n;if(r==="list"){l=false}else if(t==null||e[r]!=p){e[r]=p}}else{e[r]=n}}catch(g){}}var d=false;{if(f!==(f=f.replace(/^xlink\:?/,""))){r=f;d=true}}if(n==null||n===false){if(d){e.removeAttributeNS(h,r)}else{e.removeAttribute(r)}}else if((!l||i&4||a)&&!m){n=n===true?"":n;if(d){e.setAttributeNS(h,r,n)}else{e.setAttribute(r,n)}}}}};var L=/\s/;var P=function(e){return!e?[]:e.split(L)};var B=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||S;var l=r.$attrs$||S;{for(n in i){if(!(n in l)){U(a,n,i[n],undefined,t,r.$flags$)}}}for(n in l){U(a,n,i[n],l[n],t,r.$flags$)}};var I=function(e,r,t,n){var i=r.$children$[t];var l=0;var s;var f;if(i.$text$!==null){s=i.$elm$=o.createTextNode(i.$text$)}else{if(!a){a=i.$tag$==="svg"}s=i.$elm$=o.createElementNS(a?_:k,i.$tag$);if(a&&i.$tag$==="foreignObject"){a=false}{B(null,i,a)}if(i.$children$){for(l=0;l<i.$children$.length;++l){f=I(e,i,l);if(f){s.appendChild(f)}}}{if(i.$tag$==="svg"){a=false}else if(s.tagName==="foreignObject"){a=true}}}return s};var T=function(e,r,t,n,a,i){var l=e;var s;for(;a<=i;++a){if(n[a]){s=I(null,t,a);if(s){n[a].$elm$=s;l.insertBefore(s,r)}}}};var z=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;W(n);a.remove()}}};var H=function(e,r,t,n){var a=0;var i=0;var l=0;var s=0;var f=r.length-1;var o=r[0];var u=r[f];var $=n.length-1;var c=n[0];var v=n[$];var h;var m;while(a<=f&&i<=$){if(o==null){o=r[++a]}else if(u==null){u=r[--f]}else if(c==null){c=n[++i]}else if(v==null){v=n[--$]}else if(q(o,c)){V(o,c);o=r[++a];c=n[++i]}else if(q(u,v)){V(u,v);u=r[--f];v=n[--$]}else if(q(o,v)){V(o,v);e.insertBefore(o.$elm$,u.$elm$.nextSibling);o=r[++a];v=n[--$]}else if(q(u,c)){V(u,c);e.insertBefore(u.$elm$,o.$elm$);u=r[--f];c=n[++i]}else{l=-1;{for(s=a;s<=f;++s){if(r[s]&&r[s].$key$!==null&&r[s].$key$===c.$key$){l=s;break}}}if(l>=0){m=r[l];if(m.$tag$!==c.$tag$){h=I(r&&r[i],t,l)}else{V(m,c);r[l]=undefined;h=m.$elm$}c=n[++i]}else{h=I(r&&r[i],t,i);c=n[++i]}if(h){{o.$elm$.parentNode.insertBefore(h,o.$elm$)}}}}if(a>f){T(e,n[$+1]==null?null:n[$+1].$elm$,t,n,i,$)}else if(i>$){z(r,a,f)}};var q=function(e,r){if(e.$tag$===r.$tag$){{return e.$key$===r.$key$}}return false};var V=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var i=r.$children$;var l=r.$tag$;var s=r.$text$;if(s===null){{a=l==="svg"?true:l==="foreignObject"?false:a}{{B(e,r,a)}}if(n!==null&&i!==null){H(t,n,r,i)}else if(i!==null){if(e.$text$!==null){t.textContent=""}T(t,null,r,i,0,i.length-1)}else if(n!==null){z(n,0,n.length-1)}if(a&&l==="svg"){a=false}}else if(e.$text$!==s){t.data=s}};var W=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(W)}};var F=function(e,r){var t=e.$hostElement$;var n=e.$vnode$||N(null,null);var a=C(r)?r:j(null,null,r);a.$tag$=null;a.$flags$|=4;e.$vnode$=a;a.$elm$=n.$elm$=t;V(n,a)};var D=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var G=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=m("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return Q(e,a,r)};D(e,n);var l;if(r){{l=Z(a,"componentWillLoad")}}else{{l=Z(a,"componentWillUpdate")}}t();return ee(l,(function(){return Ee(i)}))};var Q=function(e,r,t){var n=e.$hostElement$;var a=m("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){w(e)}var l=m("render",e.$cmpMeta$.$tagName$);{{F(e,J(r))}}if(u.$cssShim$){u.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}l();a();{var s=n["s-p"];var f=function(){return K(e)};if(s.length===0){f()}else{Promise.all(s).then(f);e.$flags$|=4;s.length=0}}};var J=function(e){try{e=e.render()}catch(r){de(r)}return e};var K=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=m("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{re(t)}{Z(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){Y()}}}else{{Z(a,"componentDidUpdate")}n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ne((function(){return G(e,false)}))}e.$flags$&=~(4|512)}};var X=function(e){{var r=ve(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){G(r,false)}return t}};var Y=function(e){{re(o.documentElement)}{u.$flags$|=2}};var Z=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){de(n)}}return undefined};var ee=function(e,r){return e&&e.then?e.then(r):r()};var re=function(e){return e.classList.add("hydrated")};var te=function(e,r){if(e!=null&&!x(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var ne=function(e,r){return ve(e).$instanceValues$.get(r)};var ae=function(e,r,t,n){var a=ve(e);var i=a.$instanceValues$.get(r);var l=a.$flags$;var s=a.$lazyInstance$;t=te(t,n.$members$[r][0]);if((!(l&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(s){if(n.$watchers$&&l&128){var f=n.$watchers$[r];if(f){f.map((function(e){try{s[e](t,i,r)}catch(n){de(n)}}))}}if((l&(2|16))===2){G(a,false)}}}};var ie=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ne(this,n)},set:function(e){ae(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;u.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var le=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,l,s,f,o;return __generator(this,(function(u){switch(u.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=ye(n);if(!i.then)return[3,2];e=p();return[4,i];case 1:i=u.sent();e();u.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}ie(i,n,2);i.isProxied=true}t=m("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch($){de($)}{r.$flags$&=~8}{r.$flags$|=128}t();a=b(n.$tagName$);if(!we.has(a)&&i.style){l=m("registerStyles",n.$tagName$);s=i.style;g(a,s,!!(n.$flags$&1));l()}u.label=3;case 3:f=r.$ancestorComponent$;o=function(){return G(r,true)};if(f&&f["s-rc"]){f["s-rc"].push(o)}else{o()}return[2]}}))}))};var se=function(e){if((u.$flags$&1)===0){var r=ve(e);var t=r.$cmpMeta$;var n=m("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){D(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ne((function(){return le(e,r,t)}))}}n()}};var fe=function(e){if((u.$flags$&1)===0){var r=ve(e);if(u.$cssShim$){u.$cssShim$.removeHost(e)}}};var oe=e("b",(function(e,r){if(r===void 0){r={}}var t=m();var n=[];var a=r.exclude||[];var i=s.customElements;var l=o.head;var f=l.querySelector("meta[charset]");var $=o.createElement("style");var c=[];var h;var p=true;Object.assign(u,r);u.$resourcesUrl$=new URL(r.resourcesUrl||"./",o.baseURI).href;if(r.syncQueue){u.$flags$|=4}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$watchers$={}}var l=t.$tagName$;var s=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;me(r,t);return n}r.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(p){c.push(this)}else{u.jmp((function(){return se(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return fe(e)}))};r.prototype.forceUpdate=function(){X(this)};r.prototype.componentOnReady=function(){return ve(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,ie(s,t,1))}}))}));{$.innerHTML=n+v;$.setAttribute("data-styles","");l.insertBefore($,f?f.nextSibling:l.firstChild)}p=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{u.jmp((function(){return h=setTimeout(Y,30)}))}}t()}));var ue=e("g",(function(e){return ve(e).$hostElement$}));var $e=e("c",(function(e,r,t){var n=ue(e);return{emit:function(e){var a=new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e});n.dispatchEvent(a);return a}}}));var ce=new WeakMap;var ve=function(e){return ce.get(e)};var he=e("r",(function(e,r){return ce.set(r.$lazyInstance$=e,r)}));var me=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return ce.set(e,t)};var pe=function(e,r){return r in e};var de=function(e){return console.error(e)};var ge=new Map;var ye=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var l=ge.get(i);if(l){return l[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{ge.set(i,e)}return e[a]}),de)};var we=new Map;var be=[];var Se=[];var _e=[];var ke=function(e,r){return function(t){e.push(t);if(!l){l=true;if(r&&u.$flags$&4){Ne(je)}else{u.raf(je)}}}};var xe=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){de(t)}}e.length=0};var Re=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){de(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var je=function(){i++;xe(be);var e=(u.$flags$&6)===2?performance.now()+10*Math.ceil(i*(1/22)):Infinity;Re(Se,e);Re(_e,e);if(Se.length>0){_e.push.apply(_e,Se);Se.length=0}if(l=be.length+Se.length+_e.length>0){u.raf(je)}else{i=0}};var Ne=function(e){return $().then(e)};var Ee=ke(Se,true);var Ce=e("a",(function(){if(!(f&&f.supports&&f.supports("color","var(--c)"))){return r.import("./p-0a94b632.system.js").then((function(){if(u.$cssShim$=s.__cssshim){return u.$cssShim$.i()}else{return 0}}))}return $()}));var Me=e("p",(function(){{u.$cssShim$=s.__cssshim}var e=Array.from(o.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t={};if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,s.location.href)).href;{Ae(t.resourcesUrl,e)}if(!s.customElements){return r.import("./p-bd797a7a.system.js").then((function(){return t}))}}return $(t)}));var Ae=function(e,r){var t=R(n);try{s[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;s[t]=function(n){var i=new URL(n,e).href;var l=a.get(i);if(!l){var f=o.createElement("script");f.type="module";f.crossOrigin=r.crossOrigin;f.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));l=new Promise((function(e){f.onload=function(){e(s[t].m);f.remove()}}));a.set(i,l);o.head.appendChild(f)}return l}}}}}}));