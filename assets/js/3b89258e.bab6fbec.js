"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[1705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(n),k=r,c=p["".concat(s,".").concat(k)]||p[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"Multi-cluster management",sidebar_label:"Multi-cluster management",description:"Learn more about how Kratix schedules Promises and Workloads, and how you can control the scheduling process."},i=void 0,o={unversionedId:"main/reference/multicluster-management",id:"main/reference/multicluster-management",title:"Multi-cluster management",description:"Learn more about how Kratix schedules Promises and Workloads, and how you can control the scheduling process.",source:"@site/docs/main/05-reference/04-multicluster-management.md",sourceDirName:"main/05-reference",slug:"/main/reference/multicluster-management",permalink:"/docs/main/reference/multicluster-management",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/04-multicluster-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Multi-cluster management",sidebar_label:"Multi-cluster management",description:"Learn more about how Kratix schedules Promises and Workloads, and how you can control the scheduling process."},sidebar:"mainSidebar",previous:{title:"Status",permalink:"/docs/main/reference/resource-requests/status"},next:{title:"Frequently Asked Questions",permalink:"/docs/main/faq"}},s={},d=[{value:"Scheduling Promises",id:"promises",level:2},{value:"Scheduling Workloads",id:"workloads",level:2},{value:"Dynamic Scheduling",id:"pipeline",level:3},{value:"Compound Promises",id:"compound-promises",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the most powerful Kratix features is the ability Platform teams have to\nfully control the scheduling of work across Kubernetes Cluster, i.e., to\ndetermine in which cluster a certain workload should be deployed to."),(0,r.kt)("p",null,"In Kratix, scheduling happens in two stages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Determining which Promises are installed in which Clusters (",(0,r.kt)("a",{parentName:"li",href:"#promises"},"Scheduling\nPromises"),")"),(0,r.kt)("li",{parentName:"ol"},"Determining where the workloads will run following a Resource Requests (",(0,r.kt)("a",{parentName:"li",href:"#workloads"},"Scheduling Workloads"),")")),(0,r.kt)("p",null,"The following sections in this page document those stages. For hands-on scheduling guides,\ncheck the ",(0,r.kt)("a",{parentName:"p",href:"../guides/scheduling-clusters"},"Adding a new Worker Cluster")," and ",(0,r.kt)("a",{parentName:"p",href:"../guides/compound-promises"},"Compound\nPromise")," pages."),(0,r.kt)("h2",{id:"promises"},"Scheduling Promises"),(0,r.kt)("p",null,"By default, Worker Cluster Resources ","(",(0,r.kt)("abbr",{parentName:"p",title:"Worker Cluster Resources"},"WCRs"),"",") for every Promise on the platform will be installed on all Clusters registered with the platform. In other words, all registered Clusters will be ready to run workloads for all Promises. When a new Cluster is registered, Kratix will automatically install the"," ",(0,r.kt)("abbr",{parentName:"p",title:"Worker Cluster Resources"},"WCRs"),""," for the Promises that are already installed in the Platform."),(0,r.kt)("p",null,"Platform teams can, however, control which Clusters receive which Promises by using a combination of Cluster labels and Promise Cluster selectors."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"labels")," in the Cluster document are the standard Kubernetes\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels"),":\nsimple, arbitrary, key/value pairs. In the example below, the Cluster object is being\ncreated with a label ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," with value ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="worker-cluster-2.yaml"',title:'"worker-cluster-2.yaml"'},"apiVersion: platform.kratix.io/v1alpha1\nkind: Cluster\nmetadata:\n  # highlight-start\n  labels:\n    environment: dev\n  # highlight-end\n  # ...\n")),(0,r.kt)("p",null,"In the Promise document, the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterSelector")," ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors"},"label\nselector"),"\ndefines in which Clusters the Promise resources should be installed. The ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterSelector"),"\nis a ",(0,r.kt)("em",{parentName:"p"},"equality-based")," selector, i.e., it will only match Clusters that have keys/values\nthat match. You can add multiple key/value pairs to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterSelector"),", but note that\nit will only match when the Cluster has a matching label for ",(0,r.kt)("em",{parentName:"p"},"all")," the selectors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=jenkins-promise.yaml",title:"jenkins-promise.yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  name: jenkins-promise\nspec:\n  #highlight-start\n  clusterSelector:\n    environment: dev\n  #highlight-end\n  workerClusterResources:\n  # ...\n")),(0,r.kt)("p",null,"If a Promise has no ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterSelector"),", it will be applied to all Clusters. If a Cluster\nhas no ",(0,r.kt)("inlineCode",{parentName:"p"},"labels"),", only Promises with no ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterSelector")," will be applied."),(0,r.kt)("p",null,"The table below contains a few examples:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Cluster Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Promise Selector"),(0,r.kt)("th",{parentName:"tr",align:null},"Match?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no selector")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no selector")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"zone:eu")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"zone:eu")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"zone:eu")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: prod")),(0,r.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"zone:eu")),(0,r.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")))),(0,r.kt)("h2",{id:"workloads"},"Scheduling Workloads"),(0,r.kt)("p",null,"When a new Resource Request comes in, Kratix reacts by triggering the Request Pipeline, as\ndefined in the Promise's ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.xaasRequestPipeline"),". The output of the pipeline will be\nthen written to the Repository, which will in turn be applied to one of the registered\nWorker Clusters."),(0,r.kt)("p",null,"By default, Kratix will randomly select a registered Cluster to instantiate the workload.\nIf the Promise has ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.clusterSelector")," set, the workload will be scheduled to a Cluster\nthat has matching labels."),(0,r.kt)("p",null,"It is possible to dynamically determine where workloads will go at the Pipeline stage. The\nsection below documents the process."),(0,r.kt)("h3",{id:"pipeline"},"Dynamic Scheduling"),(0,r.kt)("p",null,"Kratix mounts a ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," directory at the root of the pipeline's container when\ninstantiating the Request Pipeline. At scheduling time, Kratix will look for a\n",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-selectors.yaml")," file in that directory with arbitrary key/value pairs and will\n",(0,r.kt)("strong",{parentName:"p"},"add")," those to what is already present in the Promise's ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.clusterSelector")," when\nfiltering Clusters."),(0,r.kt)("p",null,"That means there's no overwrite of keys. For example, if the Promise defines a\n",(0,r.kt)("inlineCode",{parentName:"p"},"clusterSelector: { env: dev }")," and the Pipeline defines ",(0,r.kt)("inlineCode",{parentName:"p"},"env: prod"),", Kratix will look for\nClusters with labels: ",(0,r.kt)("inlineCode",{parentName:"p"},"env=dev && env=prod")," ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,"The table below contains a few examples:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Cluster Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Promise Selector"),(0,r.kt)("th",{parentName:"tr",align:null},"cluster-selectors.yaml"),(0,r.kt)("th",{parentName:"tr",align:null},"Match?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no selector")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no_selector")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no selector")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no_selector")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no_selector")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"zone: eu")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zone: eu")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"zone: eu")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no selector")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zone: eu")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: prod")),(0,r.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: prod")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"zone: eu")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no_selector")),(0,r.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"no_selector")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,r.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")))),(0,r.kt)("p",null,"In the event that more than one cluster matches the resulting labels, Kratix will randomly select within the available matching registered Clusters. If you prefer to be certain of a single cluster match, it is suggested that you add a unique identifier to all clusters (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterName"),") so that there can only ever be a single match."),(0,r.kt)("h2",{id:"compound-promises"},"Compound Promises"),(0,r.kt)("p",null,"Compound Promises are Promises that, in its"," ",(0,r.kt)("abbr",{parentName:"p",title:"Worker Cluster Resources"},"WCRs"),"",", contain other Promises. That ability\nallows Platform teams deliver entire stacks on demand, instead of simple databases or\nservices."),(0,r.kt)("p",null,"To enable this functionality, the following needs to be true:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Platform cluster must register itself as a Worker cluster"),(0,r.kt)("li",{parentName:"ul"},"The GitOps toolkit must be installed in the Platform cluster"),(0,r.kt)("li",{parentName:"ul"},"The Compound Promise must instruct Kratix to install its"," ",(0,r.kt)("abbr",{parentName:"li",title:"Worker Cluster Resource"},"WCR"),""," (i.e. the other Promises)\nin the Platform cluster"),(0,r.kt)("li",{parentName:"ul"},"Optionally, the sub-Promises may instruct Kratix to install their"," ",(0,r.kt)("abbr",{parentName:"li",title:"Worker Cluster Resource"},"WCR"),""," outside the\nPlatform cluster")),(0,r.kt)("p",null,"For detailed instruction on the above, please check the ",(0,r.kt)("a",{parentName:"p",href:"../guides/compound-promises"},"Compound\nPromises")," guide."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"This will always return empty, since a label ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," can only hold a single value.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);