/*! For license information please see 4a8288b4.76c7cead.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(136)),c=(n(142),n(141),n(139),{id:"actuators",title:"Actuators",sidebar_label:"Actuators"}),i={id:"overview/actuators",title:"Actuators",description:"Introduction",source:"@site/docs/overview/actuators.md",permalink:"/shunyaface/docs/overview/actuators",sidebar_label:"Actuators"},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Actuators",id:"actuators",children:[]}],l={rightToc:u};function s(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("h2",{id:"actuators"},"Actuators"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Sensor Name")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Status")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Generic Digital Actuator"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Coming Soon")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Led"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Coming Soon")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Relay"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Coming Soon")))))}s.isMDXComponent=!0},136:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),s=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},b=function(t){var e=s(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},f=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),b=s(n),f=r,d=b["".concat(c,".").concat(f)]||b[f]||p[f]||o;return n?a.a.createElement(d,i(i({ref:e},l),{},{components:n})):a.a.createElement(d,i({ref:e},l))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},137:function(t,e,n){"use strict";var r=n(0),a=n(34);e.a=function(){return Object(r.useContext)(a.a)}},138:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&t.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(137);function a(t){const{siteConfig:e}=Object(r.a)(),{baseUrl:n="/"}=e||{};if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},140:function(t,e,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});e.a=a},141:function(t,e,n){"use strict";var r=n(0),a=n.n(r);e.a=function(t){return a.a.createElement("div",null,t.children)}},142:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(140);var c=function(){return Object(r.useContext)(o.a)},i=n(138),u=n.n(i),l=n(92),s=n.n(l);const b=37,p=39;e.a=function(t){const{block:e,children:n,defaultValue:o,values:i,groupId:l}=t,{tabGroupChoices:f,setTabGroupChoices:d}=c(),[m,O]=Object(r.useState)(o);if(null!=l){const t=f[l];null!=t&&t!==m&&O(t)}const j=t=>{O(t),null!=l&&d(l,t)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:u()("tabs",{"tabs--block":e})},i.map(({value:t,label:e})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===t,className:u()("tabs__item",s.a.tabItem,{"tabs__item--active":m===t}),key:t,ref:t=>v.push(t),onKeyDown:t=>((t,e,n)=>{switch(n.keyCode){case p:((t,e)=>{const n=t.indexOf(e)+1;t[n]?t[n].focus():t[0].focus()})(t,e);break;case b:((t,e)=>{const n=t.indexOf(e)-1;t[n]?t[n].focus():t[t.length-1].focus()})(t,e)}})(v,t.target,t),onFocus:()=>j(t),onClick:()=>j(t)},e))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(t=>t.props.value===m)[0]))}}}]);