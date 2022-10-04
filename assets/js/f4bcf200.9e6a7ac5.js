"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[7761],{4137:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7501:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const i={sidebar_position:1,description:"Kratix is a framework for building Platforms",title:"Overview"},o="Overview",l={unversionedId:"main/intro",id:"main/intro",title:"Overview",description:"Kratix is a framework for building Platforms",source:"@site/docs/main/01-intro.md",sourceDirName:"main",slug:"/main/intro",permalink:"/kratix-docs/docs/main/intro",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Kratix is a framework for building Platforms",title:"Overview"},sidebar:"mainSidebar",next:{title:"Introduction",permalink:"/kratix-docs/docs/main/whats-kratix"}},s={},c=[{value:"How to learn Kratix",id:"how-to-learn-kratix",level:3},{value:"How the documentation is organised",id:"how-the-documentation-is-organised",level:3}],u={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"https://github.com/syntasso/kratix/raw/main/docs/images/white_logo_color_background.jpg",alt:""}),(0,a.kt)("figcaption",{style:{"text-align":"center"}},(0,a.kt)("small",null,"\u03ba\u03c1\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03c5\u03c0\u03cc\u03c3\u03c7\u03b5\u03c3\u03b7 | krat\xedste mia yp\xf3schesi | Keep a promise"))),(0,a.kt)("p",null,"Welcome to the official Kratix documentation! Here you will find a growing collection of guides and articles to get you up and running with Kratix on your Kubernetes clusters."),(0,a.kt)("p",null,"If you can't find what you need, or need help with building your platform as a product, reach out to us on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/syntasso/kratix/"},"Github")," or through ",(0,a.kt)("a",{parentName:"p",href:"https://www.syntasso.io/contact-us"},"Syntasso.io")," and we'll be happy to help."),(0,a.kt)("h3",{id:"how-to-learn-kratix"},"How to learn Kratix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Want to see Kratix in action? ",(0,a.kt)("a",{parentName:"li",href:"whats-kratix#-want-to-see-kratix-in-action"},"Watch it here \u2192")),(0,a.kt)("li",{parentName:"ul"},"Want to jump straight to the terminal? Check out the ",(0,a.kt)("a",{parentName:"li",href:"guides/installing-kratix"},"Quick Start Guide \u2192"))),(0,a.kt)("h3",{id:"how-the-documentation-is-organised"},"How the documentation is organised"),(0,a.kt)("p",null,"You will find the following sections in the documentation:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Section"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"../category/guides"},"Guides"))),(0,a.kt)("td",{parentName:"tr",align:null},"All you need to get started with Kratix, from installing it to combining multiple promises.")))))}p.isMDXComponent=!0}}]);