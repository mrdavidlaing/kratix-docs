"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[8304],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?t.createElement(d,s(s({ref:r},p),{},{components:n})):t.createElement(d,s({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[m]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6216:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const i={description:"Documentation for the lifecycle of Resources",title:"Promise Resources",sidebar_label:"Introduction",id:"intro"},s="Requesting a Resource",a={unversionedId:"main/reference/resources/intro",id:"main/reference/resources/intro",title:"Promise Resources",description:"Documentation for the lifecycle of Resources",source:"@site/docs/main/05-reference/05-resources/01-intro.md",sourceDirName:"main/05-reference/05-resources",slug:"/main/reference/resources/intro",permalink:"/docs/main/reference/resources/intro",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/05-resources/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Documentation for the lifecycle of Resources",title:"Promise Resources",sidebar_label:"Introduction",id:"intro"},sidebar:"mainSidebar",previous:{title:"Deleting",permalink:"/docs/main/reference/promises/delete"},next:{title:"Workflows",permalink:"/docs/main/reference/resources/workflows"}},c={},l=[],p={toc:l};function m(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"requesting-a-resource"},"Requesting a Resource"),(0,o.kt)("p",null,"One of the components of a ",(0,o.kt)("a",{parentName:"p",href:"../promises/intro"},"Kratix Promise")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"api"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," sets the contract between the Platform and its users, and it defines what properties the user can configure in the Promised service."),(0,o.kt)("p",null,"The request is a document Platform Users write, following the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," contract, to request Resources from the Promised service. Each Promise has its own contract, so each Promise will have its own format."),(0,o.kt)("p",null,"Consider a Promise with the following ",(0,o.kt)("inlineCode",{parentName:"p"},"api"),", paying special attention to the highlighted fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: someservice.example.promise.syntasso.io\nspec:\n  # highlight-next-line\n  group: example.promise.syntasso.io\n  names:\n    # highlight-next-line\n    kind: someservice\n    plural: someservices\n    singular: someservice\n  scope: Namespaced\n  versions:\n    # highlight-next-line\n    - name: v1\n      served: true\n      storage: true\n      schema:\n        openAPIV3Schema:\n          type: object\n          properties:\n            # highlight-start\n            spec:\n              type: object\n              properties:\n                region: { type: string }\n                storageGB: { type: integer }\n            # highlight-end\n")),(0,o.kt)("p",null,"The Schema in this Promise defines, as the contract, two properties under ",(0,o.kt)("inlineCode",{parentName:"p"},"spec"),": a\nstring ",(0,o.kt)("inlineCode",{parentName:"p"},"region")," and a integer ",(0,o.kt)("inlineCode",{parentName:"p"},"storageGB"),"."),(0,o.kt)("p",null,"An example request to get a Resource from this Promise would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Promise spec.group and versions\napiVersion: example.promise.syntasso.io/v1\n\n# Promise spec.names.kind\nkind: someservice\n\n# Name of this Resource\nmetadata:\n  name: some-name\n\n# From the spec.versions.v1 Schema\nspec:\n  region: some-region\n  storageGB: 10\n")),(0,o.kt)("p",null,"When applied to the Platform Cluster, Kratix will trigger the associated Workflows. For more details on the Workflows, see the ",(0,o.kt)("a",{parentName:"p",href:"./workflows"},"Workflow reference"),"."),(0,o.kt)("p",null,"For a in-depth exploration of requesting a Resource and Kratix Workflows, check the ",(0,o.kt)("a",{parentName:"p",href:"../../guides/writing-a-promise"},"Writing a Promise")," and ",(0,o.kt)("a",{parentName:"p",href:"../../guides/enhancing-a-promise"},"Enhancing a Promise")," guides."))}m.isMDXComponent=!0}}]);