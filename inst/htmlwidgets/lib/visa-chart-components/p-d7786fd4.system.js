/**
 * Copyright (c) 2024 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
System.register([],(function(n){"use strict";return{execute:function(){n("n",u);var t=new Date,r=new Date;function u(n,e,i,f){function c(t){return n(t=arguments.length===0?new Date:new Date(+t)),t}c.floor=function(t){return n(t=new Date(+t)),t};c.ceil=function(t){return n(t=new Date(t-1)),e(t,1),n(t),t};c.round=function(n){var t=c(n),r=c.ceil(n);return n-t<r-n?t:r};c.offset=function(n,t){return e(n=new Date(+n),t==null?1:Math.floor(t)),n};c.range=function(t,r,u){var i=[],f;t=c.ceil(t);u=u==null?1:Math.floor(u);if(!(t<r)||!(u>0))return i;do{i.push(f=new Date(+t)),e(t,u),n(t)}while(f<t&&t<r);return i};c.filter=function(t){return u((function(r){if(r>=r)while(n(r),!t(r))r.setTime(r-1)}),(function(n,r){if(n>=n){if(r<0)while(++r<=0){while(e(n,-1),!t(n)){}}else while(--r>=0){while(e(n,+1),!t(n)){}}}}))};if(i){c.count=function(u,e){t.setTime(+u),r.setTime(+e);n(t),n(r);return Math.floor(i(t,r))};c.every=function(n){n=Math.floor(n);return!isFinite(n)||!(n>0)?null:!(n>1)?c:c.filter(f?function(t){return f(t)%n===0}:function(t){return c.count(0,t)%n===0})}}return c}var e=n("d",1e3);var i=n("e",6e4);var f=36e5;var c=n("f",864e5);var o=n("g",6048e5);var a=u((function(n){n.setTime(n-n.getMilliseconds()-n.getSeconds()*e-n.getMinutes()*i)}),(function(n,t){n.setTime(+n+t*f)}),(function(n,t){return(t-n)/f}),(function(n){return n.getHours()}));var v=n("t",a);var l=u((function(n){n.setHours(0,0,0,0)}),(function(n,t){n.setDate(n.getDate()+t)}),(function(n,t){return(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*i)/c}),(function(n){return n.getDate()-1}));var w=n("a",l);function h(n){return u((function(t){t.setDate(t.getDate()-(t.getDay()+7-n)%7);t.setHours(0,0,0,0)}),(function(n,t){n.setDate(n.getDate()+t*7)}),(function(n,t){return(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*i)/o}))}var D=n("s",h(0));var s=n("m",h(1));h(2);h(3);var M=n("h",h(4));h(5);h(6);var d=u((function(n){n.setDate(1);n.setHours(0,0,0,0)}),(function(n,t){n.setMonth(n.getMonth()+t)}),(function(n,t){return t.getMonth()-n.getMonth()+(t.getFullYear()-n.getFullYear())*12}),(function(n){return n.getMonth()}));var m=n("b",d);var F=u((function(n){n.setMonth(0,1);n.setHours(0,0,0,0)}),(function(n,t){n.setFullYear(n.getFullYear()+t)}),(function(n,t){return t.getFullYear()-n.getFullYear()}),(function(n){return n.getFullYear()}));F.every=function(n){return!isFinite(n=Math.floor(n))||!(n>0)?null:u((function(t){t.setFullYear(Math.floor(t.getFullYear()/n)*n);t.setMonth(0,1);t.setHours(0,0,0,0)}),(function(t,r){t.setFullYear(t.getFullYear()+r*n)}))};var b=n("c",F)}}}));
//# sourceMappingURL=p-d7786fd4.system.js.map