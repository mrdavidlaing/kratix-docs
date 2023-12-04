"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[329],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?t.createElement(m,l(l({ref:r},u),{},{components:n})):t.createElement(m,l({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[f]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3100:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const i={description:"Documentation for writing Promise Workflows using Kratix Pipelines, covering how Kratix internally executes the Pipeline containers",title:"Resource Workflows",sidebar_label:"Workflows",id:"workflows"},l="Workflows",a={unversionedId:"main/reference/resources/workflows",id:"main/reference/resources/workflows",title:"Resource Workflows",description:"Documentation for writing Promise Workflows using Kratix Pipelines, covering how Kratix internally executes the Pipeline containers",source:"@site/docs/main/05-reference/05-resources/02-workflows.md",sourceDirName:"main/05-reference/05-resources",slug:"/main/reference/resources/workflows",permalink:"/docs/main/reference/resources/workflows",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/05-resources/02-workflows.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Documentation for writing Promise Workflows using Kratix Pipelines, covering how Kratix internally executes the Pipeline containers",title:"Resource Workflows",sidebar_label:"Workflows",id:"workflows"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/main/reference/resources/intro"},next:{title:"Deleting",permalink:"/docs/main/reference/resources/delete"}},s={},c=[{value:"Running Workflows",id:"running-workflows",level:2}],u={toc:c};function f(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workflows"},"Workflows"),(0,o.kt)("p",null,"Within a Kratix Promise, you can define two different workflow types:\n",(0,o.kt)("inlineCode",{parentName:"p"},"configure")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"configure")," workflow is executed when a Resource is created, updated, or\nreconciled. The ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," workflow is executed when the Resource is deleted."),(0,o.kt)("p",null,"To specify the Resource workflows, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflows.resource")," key\nin the Promise definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"platform: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  # ...\nspec:\n  # ...\n  workflows:\n    # lifecycle hook for Resources\n    resource:\n      # lifecycle hook for creates/updates/ongoing reconciliation of Resources\n      configure:\n        -  # Pipeline definition\n      # lifecycle hook for deletion of Resources\n      delete:\n        -  # Pipeline definition\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"../workflows"},"Workflows documentation")," for more details."),(0,o.kt)("h2",{id:"running-workflows"},"Running Workflows"),(0,o.kt)("p",null,"The Workflows are regularly executed on each Resource. Kubernetes reconciles on\na number of different actions including, but not limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On the creation of a new Resource"),(0,o.kt)("li",{parentName:"ul"},"Regular interval (default: 10 hours, not currently configurable)"),(0,o.kt)("li",{parentName:"ul"},"Recreating or restarting the Kratix Controller"),(0,o.kt)("li",{parentName:"ul"},"A change to the Resource definition")),(0,o.kt)("p",null,"All commands should be idempotent as there is a guarantee that\nthey will be run multiple times a day, and may be run much more frequently\ndepending on other environmental impacts like pod restarts."))}f.isMDXComponent=!0}}]);