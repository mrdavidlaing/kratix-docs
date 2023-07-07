"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[5097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4051:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={toc:[{value:"Pre-requisites",id:"pre-requisites",level:4}]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"You need an installation of Kratix for this section. ",(0,a.kt)("strong",null,"Click here")," for instructions"),(0,a.kt)("p",null,"The simplest way to do so is by running the quick-start script from within the\nKratix directory. The script will create two KinD clusters, install, and\nconfigure Kratix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/quick-start.sh --recreate\n")),(0,a.kt)("p",null,"You can run Kratix either with a multi-cluster or a single-cluster setup. The\ncommands on the remainder of this document assume that two environment variables\nare set:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"PLATFORM")," representing the Platform cluster Kubernetes context"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"WORKER")," representing the Worker cluster Kubernetes context")),(0,a.kt)("p",null,"If you ran the quick-start script above, do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export PLATFORM="kind-platform"\nexport WORKER="kind-worker"\n')),(0,a.kt)("p",null,"For single cluster setups, the two variables should be set to the same value.\nYou can find your cluster context by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl config get-contexts\n")),(0,a.kt)("p",null,"Refer back to ",(0,a.kt)("a",{parentName:"p",href:"../../category/installing-kratix"},"Installing Kratix")," for more\ndetails.")))}o.isMDXComponent=!0},2887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),i=n(4051);const o={description:"Learn how to combine multiple promises into a single Compound Promise, delivering full developer experiences",title:"Compound Promise"},s=void 0,l={unversionedId:"main/guides/compound-promises",id:"main/guides/compound-promises",title:"Compound Promise",description:"Learn how to combine multiple promises into a single Compound Promise, delivering full developer experiences",source:"@site/docs/main/04-guides/08-compound-promises.md",sourceDirName:"main/04-guides",slug:"/main/guides/compound-promises",permalink:"/docs/main/guides/compound-promises",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/04-guides/08-compound-promises.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Learn how to combine multiple promises into a single Compound Promise, delivering full developer experiences",title:"Compound Promise"},sidebar:"mainSidebar",previous:{title:"Adding a new Worker",permalink:"/docs/main/guides/scheduling-clusters"},next:{title:"What's next?",permalink:"/docs/main/guides/whats-next"}},p={},m=[{value:"Register the Platform as a Worker",id:"register-the-platform-as-a-worker",level:2},{value:"Install and configure GitOps",id:"install-and-configure-gitops",level:2},{value:"Install a Compound Promise",id:"install-a-compound-promise",level:2},{value:"Send a request for a Resource",id:"send-a-request-for-a-resource",level:2},{value:"A closer look in the Promise",id:"a-closer-look-in-the-promise",level:2},{value:"A closer look in the Workflow",id:"a-closer-look-in-the-workflow",level:2},{value:"\ud83c\udf89 Congratulations",id:"-congratulations",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Compound Promises are Promises that, in its dependencies, contain other Promises. That ability allows Platform teams deliver entire stacks on demand, instead of simple databases or services."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In this tutorial, you will")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"encapsulate multiple Promises into a Compound Promise"),(0,a.kt)("li",{parentName:"ol"},"request a complete development environment Resource through a Compound Promise")),(0,a.kt)(i.ZP,{mdxType:"PartialPreRequisites"}),(0,a.kt)("h2",{id:"register-the-platform-as-a-worker"},"Register the Platform as a Worker"),(0,a.kt)("p",null,"To install a Compound Promises, the first step is to register the Platform cluster itself as an available Worker Cluster. That's because the dependencies for the Compound Promises are Promises themselves, therefore they need to be scheduled to the Platform cluster."),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("a",{parentName:"p",href:"../reference/clusters/intro"},"Cluster document")," platform-cluster.yaml` with the following contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="platform-cluster.yaml"',title:'"platform-cluster.yaml"'},"apiVersion: platform.kratix.io/v1alpha1\nkind: Cluster\nmetadata:\n  name: platform-cluster\n  namespace: default\n  labels:\n    environment: platform\nspec:\n  stateStoreRef:\n    name: default\n    kind: BucketStateStore\n")),(0,a.kt)("p",null,"Register the Cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM apply --filename platform-cluster.yaml\n")),(0,a.kt)("h2",{id:"install-and-configure-gitops"},"Install and configure GitOps"),(0,a.kt)("p",null,"For the Platform Cluster to behave like a Worker Cluster, you will need to install the GitOps toolkit in it. The quickest way to do that is to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"./scripts/install-gitops")," script from the Kratix root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/kratix\n./scripts/install-gitops --context $PLATFORM --path platform-cluster\n")),(0,a.kt)("h2",{id:"install-a-compound-promise"},"Install a Compound Promise"),(0,a.kt)("p",null,'You can now install a "Paved Path" Promise:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/samples/paved-path-demo/paved-path-demo-promise.yaml\n")),(0,a.kt)("p",null,"This Promise is composed of a Knative and Postgres. Installing the Promise on the Platform will have the following side-effects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Three Promises will be installed in the Platform Cluster: Paved Path, Knative and Postgres."),(0,a.kt)("li",{parentName:"ul"},"The Knative and Postgres's dependencies will be installed on the Worker Cluster.")),(0,a.kt)("p",null,"To verify the installation was successful, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kubectl --context $PLATFORM get promises\nNAME                      AGE\nha-postgres-promise       1h\nknative-serving-promise   1h\npaved-path-demo-promise   1h\n\n$ kubectl --context $WORKER get pods -A\nNAME                                 READY   STATUS    RESTARTS   AGE\npostgres-operator-6c6dbd4459-kv5lw   1/1     Running   0          1h\n\n$ kubectl --context $WORKER get crds | grep knative\ncertificates.networking.internal.knative.dev          2022-11-25T12:24:20Z\nclusterdomainclaims.networking.internal.knative.dev   2022-11-25T12:24:20Z\n...\n")),(0,a.kt)("h2",{id:"send-a-request-for-a-resource"},"Send a request for a Resource"),(0,a.kt)("p",null,'Platform users can now send requests for a new "Paved Path" Resource. That will create a new Knative Serving and a new Postgres database in the Worker Cluster:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/samples/paved-path-demo/paved-path-demo-resource-request.yaml\n")),(0,a.kt)("p",null,"You can see the Workflow for the Paved Path Promise running, which will in turn trigger the Knative and Postgres Workflows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kubectl --context $PLATFORM get pods\nNAME                                                     READY   STATUS      RESTARTS   AGE\nconfigure-pipeline-ha-postgres-promise-default-617a3       0/1     Completed   0          64s\nconfigure-pipeline-knative-serving-promise-default-e0157   0/1     Completed   0          64s\nconfigure-pipeline-paved-path-demo-promise-default-d3a89   0/1     Completed   0          87s\n")),(0,a.kt)("p",null,"Eventually, the resources will be ready to be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kubectl --context $WORKER get pods -A\nNAMESPACE            NAME                          READY   STATUS      RESTARTS   AGE\ndefault              acid-minimal-cluster-0        1/1     Running     0          1h\ndefault              acid-minimal-cluster-1        1/1     Running     0          1h\n...\nknative-serving      activator-7d967fb5f4-4k4m5    1/1     Running     0          1h\nknative-serving      autoscaler-684b55df5f-7gw86   1/1     Running     0          1h\nknative-serving      controller-65866d54fc-zfh8d   1/1     Running     0          1h\nknative-serving      default-domain-dl972          0/1     Completed   0          1h\n...\n")),(0,a.kt)("p",null,"\ud83c\udf89 ",(0,a.kt)("strong",{parentName:"p"},"Congratulations"),": you have installed a Compound Promise and requested a Paved Path Resource!"),(0,a.kt)("h2",{id:"a-closer-look-in-the-promise"},"A closer look in the Promise"),(0,a.kt)("p",null,"Start by noticing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," for the Paved Path Promise:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  name: paved-path-demo-promise\nspec:\n  scheduling:\n    - target:\n        matchLabels:\n          environment: platform\n  dependencies:\n    #highlight-start\n    - apiVersion: platform.kratix.io/v1alpha1\n      kind: Promise\n      #highlight-end\n      metadata:\n        name: knative-serving-promise\n      spec:\n        scheduling:\n          - target:\n              matchLabels:\n                environment: dev\n        dependencies:\n        ... # remainder of the knative Promise\n    #highlight-start\n    - apiVersion: platform.kratix.io/v1alpha1\n      kind: Promise\n      #highlight-end\n      metadata:\n        name: ha-postgres-promise\n      spec:\n        scheduling:\n          - target:\n              matchLabels:\n                environment: dev\n        dependencies:\n        ... # remainder of the postgres Promise\n  ... # remainder of the paved path Promise...\n")),(0,a.kt)("p",null,"Since Paved Path Promise dependencies are Promises, and considering that Kratix and its"," ",(0,a.kt)("abbr",{parentName:"p",title:"Custom Resource Definitions"},"CRDs"),""," are only installed in the Platform Cluster, you need to ensure the dependencies are applied exclusively to the Platform Cluster."),(0,a.kt)("p",null,"That is controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduling")," key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  name: paved-path-demo-promise\nspec:\n  #highlight-start\n  scheduling:\n    - target:\n        matchLabels:\n          environment: platform\n  #highlight-end\n  dependencies:\n    -  # knative Promise\n    -  # postgresPromise\n  ... # remainder of the paved path Promise\n")),(0,a.kt)("p",null,"The Paved Path Promise ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduling")," is set to target clusters with ",(0,a.kt)("inlineCode",{parentName:"p"},"matchLabel"),"\nequal to ",(0,a.kt)("inlineCode",{parentName:"p"},"environment: platform"),". In other words, that is telling Kratix to\ninstall the sub-Promises into Clusters with an ",(0,a.kt)("inlineCode",{parentName:"p"},"environment: platform")," label."),(0,a.kt)("p",null,"You may have noticed that, when registering the Platform Cluster, the Cluster definition\nincluded exactly that label. You can verify the applied labels with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kubectl --context $PLATFORM get clusters.platform.kratix.io --show-labels\nNAME                 AGE    LABELS\n#highlight-start\nplatform-cluster     1hr    environment=platform\n#highlight-end\nworker-cluster-1     1hr    environment=dev\n")),(0,a.kt)("p",null,"However, the sub-Promises' dependencies (i.e. the Knative and Postgres dependencies) should not be installed\nin the Platform Cluster, but in the Worker Cluster. When you executed the quick start\nscript, it registered the Worker Cluster with a label ",(0,a.kt)("inlineCode",{parentName:"p"},"environment: dev")," (as\nper output above). The ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduling")," field in the sub-Promises are set to target\nthose clusters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  name: paved-path-demo-promise\nspec:\n  scheduling:\n    - target:\n        matchLabels:\n          environment: platform\n  dependencies:\n    - apiVersion: platform.kratix.io/v1alpha1\n      kind: Promise\n      metadata:\n        name: knative-serving-promise\n      spec:\n        #highlight-start\n        scheduling:\n          - target:\n              matchLabels:\n                environment: dev\n        #highlight-end\n        dependencies:\n        ... # remainder of the knative Promise\n    - apiVersion: platform.kratix.io/v1alpha1\n      kind: Promise\n      metadata:\n        name: ha-postgres-promise\n      spec:\n        #highlight-start\n        scheduling:\n          - target:\n              matchLabels:\n                environment: dev\n        #highlight-end\n        dependencies:\n        ... # remainder of the postgres Promise ...\n  ... # remainder of the paved path Promise...\n")),(0,a.kt)("p",null,"This configuration ensures the Knative"," ",(0,a.kt)("abbr",{parentName:"p",title:"Custom Resource Definitions"},"CRDs"),""," and the Postgres Operator are installed\nexclusively in the Worker Cluster. This is how, when installing the Paved Path Promise,\nKratix knew it should install the sub-Promises in the Platform Cluster and the\nsub-Promises' dependencies in the Worker Cluster."),(0,a.kt)("h2",{id:"a-closer-look-in-the-workflow"},"A closer look in the Workflow"),(0,a.kt)("p",null,"When a request for a Resource is created, the Paved Path Workflow is triggered. Usually, the\noutput of the Workflow is a set of Kubernetes Resources that need to be created. For\nCompound Promises, that's usually a set of requests for other promised Resources to be applied in the Platform itself."),(0,a.kt)("p",null,"The Paved Path Promise is a very basic example, but you can see that's exactly what the\nWorkflow Pipeline is doing in its\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/syntasso/kratix/blob/main/samples/paved-path-demo/configure-pipeline-image/Dockerfile#L6-L11"},"Dockerfile"),"."),(0,a.kt)("h2",{id:"-congratulations"},"\ud83c\udf89 Congratulations"),(0,a.kt)("p",null,"\u2705 ","\xa0"," You have just installed and used your first Compound Promise. ",(0,a.kt)("br",null),"\n\ud83d\udc49 ","\xa0"," Let's see ",(0,a.kt)("a",{parentName:"p",href:"./whats-next"},"where to go from here"),"."))}d.isMDXComponent=!0}}]);