"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[3348],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={title:"Promise Custom Resource",sidebar_label:"Introduction",description:"Documentation for the Kratix Promise Custom Resource",id:"intro"},o="Promises",s={unversionedId:"main/reference/promises/intro",id:"main/reference/promises/intro",title:"Promise Custom Resource",description:"Documentation for the Kratix Promise Custom Resource",source:"@site/docs/main/05-reference/03-promises/01-promises.md",sourceDirName:"main/05-reference/03-promises",slug:"/main/reference/promises/intro",permalink:"/docs/main/reference/promises/intro",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/03-promises/01-promises.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Promise Custom Resource",sidebar_label:"Introduction",description:"Documentation for the Kratix Promise Custom Resource",id:"intro"},sidebar:"mainSidebar",previous:{title:"Destinations",permalink:"/docs/main/reference/destinations/intro"},next:{title:"Deleting",permalink:"/docs/main/reference/promises/delete"}},l={},c=[{value:"Use Case",id:"use-case",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Promise API",id:"promise-api",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"promises"},"Promises"),(0,i.kt)("p",null,"Conceptually, Kratix Promises are the building blocks that enable teams to design\nplatforms that specifically meet their customer needs."),(0,i.kt)("p",null,"Technically, a Promise is a YAML document that defines a contract between the Platform and its users."),(0,i.kt)("h2",{id:"use-case"},"Use Case"),(0,i.kt)("p",null,"Consider the task of setting up development environments for application teams.\nThis task is usually repetitive and requires many cookie-cutter steps. It may\ninvolve wiring up Git repos, spinning up a CI/CD server, creating a PaaS to run\nthe applications, instructing CI/CD to listen to the Git repos and push\nsuccessful builds into the PaaS, and finally wiring applications to their\nrequired data services."),(0,i.kt)("p",null,"A Promise can encapsulate all the required steps and handle the toil of running\nthose low-level tasks. It can be designed as a single Promise that does it all,\nor it can be a collection of Promises that, combined, deliver the desired\nfunctionality."),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("p",null,"Promises:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enable you to build your platform incrementally and in response to the needs\nof your users."),(0,i.kt)("li",{parentName:"ul"},"codify the contract between platform teams and application teams for the\ndelivery of a specific service, e.g. a database, an identity service, a\nsupply chain, or a complete development pipeline of patterns and tools."),(0,i.kt)("li",{parentName:"ul"},"are easy to build, deploy, and update."),(0,i.kt)("li",{parentName:"ul"},"are shareable and reusable between platforms, teams, business units, and other\norganisations."),(0,i.kt)("li",{parentName:"ul"},"add up to a frictionless experience when platform users want to create\nservices that they need to deliver value.")),(0,i.kt)("p",null,"To see Promises in-action, check out the guides: ",(0,i.kt)("a",{parentName:"p",href:"../../guides/installing-a-promise"},"Installing a Promise")," and ",(0,i.kt)("a",{parentName:"p",href:"../../guides/writing-a-promise"},"Writing a Promise"),"."),(0,i.kt)("h2",{id:"promise-api"},"Promise API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  # Name of the Promise; what the platform team will manage in the platform cluster\n  name: promise-name\nspec:\n  # Check the scheduling docs for details\n  destinationSelectors:\n    - matchLabels:\n        # Arbitrary key/value pairs that will be used for scheduling\n        key: value\n\n  # Array of Kubernetes resources to be scheduled to matching Workers\n  dependencies:\n    - apiVersion: apps/v1\n      kind: Deployment\n      metadata:\n        name: service-operator\n    -  #...\n    -  #...\n\n  # API that a Platform User will use to request an Resource from this Promise\n  api:\n    apiVersion: apiextensions.k8s.io/v1\n    kind: CustomResourceDefinition\n    # ...\n\n  # Ordered set of tasks to run during a Promise and Resource lifecycle\n  workflows:\n    # Tasks to be run only during the Resource lifecycle\n    resource:\n      # Tasks to be run only on creation, maintenance, or update of a Resource\n      configure:\n        # A Kratix provided Pipeline that runs an ordered set of OCI compliant images\n        - apiVersion: platform.kratix.io/v1alpha1\n          kind: Pipeline\n          metadata:\n            name: configure-resource\n          spec:\n            containers:\n              - name: pipeline-stage-0\n                image: myorg/pipeline-image-1 # Kubernetes defaults to docker.io\n              - name: pipeline-stage-1\n                image: ghcr.io/myorg/pipeline-image-2\n              -  #...\n    # Tasks to be run only during the Promise lifecycle\n    promise:\n      # Tasks to be run only on creation, maintenance, or update of the Promise\n      configure:\n        # A Kratix provided Pipeline that runs an ordered set of OCI compliant images\n        - apiVersion: platform.kratix.io/v1alpha1\n          kind: Pipeline\n          metadata:\n            name: configure-promise\n          spec:\n            containers:\n              - name: pipeline-stage-0\n                image: myorg/pipeline-image-1 # Kubernetes defaults to docker.io\n              - name: pipeline-stage-1\n                image: ghcr.io/myorg/pipeline-image-2\n              -  #...\n")))}m.isMDXComponent=!0}}]);