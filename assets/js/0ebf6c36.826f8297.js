"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[5795],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},201:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={title:"Updates",sidebar_label:"Updates",description:"Documentation on how updates behave for resources"},i="Updates",s={unversionedId:"main/reference/resources/updates",id:"main/reference/resources/updates",title:"Updates",description:"Documentation on how updates behave for resources",source:"@site/docs/main/05-reference/05-resources/05-updates.md",sourceDirName:"main/05-reference/05-resources",slug:"/main/reference/resources/updates",permalink:"/docs/main/reference/resources/updates",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/05-resources/05-updates.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Updates",sidebar_label:"Updates",description:"Documentation on how updates behave for resources"},sidebar:"mainSidebar",previous:{title:"Status",permalink:"/docs/main/reference/resources/status"},next:{title:"Workflows",permalink:"/docs/main/reference/workflows"}},l={},c=[{value:"Manually trigger configure Workflow",id:"manually-trigger-configure-workflow",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updates"},"Updates"),(0,o.kt)("p",null,"Kratix supports updating resources with new specifications. An update to a resource\nwill trigger the configure pipeline to run again, and resources outputted will replace\nall of the previously outputted resources in the StateStore."),(0,o.kt)("p",null,"If an update to a resource changes the Destination (e.g. the Workflow outputs a\ndifferent ",(0,o.kt)("inlineCode",{parentName:"p"},"/kratix/metadata/destination-selectors.yaml"),") the change will be\n",(0,o.kt)("strong",{parentName:"p"},"ignored"),". The Destination selected at the first the Workflow run is always\nused. To move a resource from one Destination to another you can delete and\ncreate it again."),(0,o.kt)("h2",{id:"manually-trigger-configure-workflow"},"Manually trigger configure Workflow"),(0,o.kt)("p",null,"Sometimes you may want to manually trigger a Configure Workflow for a\nspecific resource."),(0,o.kt)("p",null,"While Workflows only trigger when the contents of the resource ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec"),"\nchange, the Kratix will also look for the appearance of a specific label and\ntrigger a Configure Workflow if it newly appears."),(0,o.kt)("p",null,"Therefore, if you add ",(0,o.kt)("inlineCode",{parentName:"p"},"kratix.io/manual-reconciliation: true")," to any resource,\nit will immediately schedule a manual run for the Configure Workflow."),(0,o.kt)("p",null,"Once Kratix schedules the manual workflow the label will be removed allowing\nyou to add it again for any additional manual runs."))}p.isMDXComponent=!0}}]);