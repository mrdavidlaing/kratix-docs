"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={description:"Learn more about the Cluster document",title:"Clusters",id:"intro"},i=void 0,s={unversionedId:"main/reference/clusters/intro",id:"main/reference/clusters/intro",title:"Clusters",description:"Learn more about the Cluster document",source:"@site/docs/main/05-reference/03-clusters/01-clusters.md",sourceDirName:"main/05-reference/03-clusters",slug:"/main/reference/clusters/intro",permalink:"/docs/main/reference/clusters/intro",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/03-clusters/01-clusters.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn more about the Cluster document",title:"Clusters",id:"intro"},sidebar:"mainSidebar",previous:{title:"Deployment topology",permalink:"/docs/main/reference/deployment-topology/"},next:{title:"Promises",permalink:"/docs/main/reference/promises/intro"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Kratix Cluster Resource is the representation of a system where workloads can be scheduled to, which are usually Kubernetes clusters. See below for the API documentation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Cluster\nmetadata:\n  # The Cluster name is an arbitrary name that represent the cluster in the platform\n  name: cluster-name\n  # The Cluster labels are arbitrary key/value pairs that can be used for scheduling\n  #   the installation of Promises and the workloads\n  labels:\n    environment: dev\nspec:\n  # Cluster identifier: required\n  id: cluster-id\n  # Path to be used by Kratix to create the buckets\n  bucketPath: bucket-path\n")),(0,o.kt)("p",null,"When a new Cluster is registered in the Platform cluster (i.e., a new Cluster Resource is\ncreated), Kratix will create a pair of buckets in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/reference/deployment-topology/#gitops-repository"},"Repository"),": one for ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),", one for ",(0,o.kt)("inlineCode",{parentName:"p"},"crds"),". The\nfull path of the buckets will be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<spec.bucketPath>-resources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<spec.bucketPath>-crds"))))}p.isMDXComponent=!0}}]);