"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[4331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),k=a,d=p["".concat(s,".").concat(k)]||p[k]||m[k]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={description:"Run Kratix locally using KinD",slug:"/main/guides/installing-kratix"},l="Multi-cluster with KinD",o={unversionedId:"main/guides/installing-kratix/multi-cluster-with-kind",id:"main/guides/installing-kratix/multi-cluster-with-kind",title:"Multi-cluster with KinD",description:"Run Kratix locally using KinD",source:"@site/docs/main/04-guides/01-installing-kratix/01-multi-cluster-with-kind.md",sourceDirName:"main/04-guides/01-installing-kratix",slug:"/main/guides/installing-kratix",permalink:"/docs/main/guides/installing-kratix",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/04-guides/01-installing-kratix/01-multi-cluster-with-kind.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Run Kratix locally using KinD",slug:"/main/guides/installing-kratix"},sidebar:"mainSidebar",previous:{title:"Installing Kratix",permalink:"/docs/category/installing-kratix"},next:{title:"Single Cluster",permalink:"/docs/main/guides/installing-kratix/single-cluster"}},s={},u=[{value:"System setup",id:"system-setup",level:2},{value:"Installing Kratix",id:"installing-kratix",level:2},{value:'Set up a Platform Cluster <a href="#platform-setup" id="platform-setup"></a>',id:"set-up-a-platform-cluster-",level:3},{value:'Set up your Worker Cluster <a href="#worker-setup" id="worker-setup"></a>',id:"set-up-your-worker-cluster-",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multi-cluster-with-kind"},"Multi-cluster with KinD"),(0,a.kt)("h2",{id:"system-setup"},"System setup"),(0,a.kt)("p",null,"For this workshop, we'll use Kratix on two local Kubernetes clusters. Install the prerequisites listed below if they aren't already on your system."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"kind")," CLI / ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes-in-Docker (KinD)"),":\nUsed to create and manage local Kubernetes clusters in Docker. See ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"the quick start guide")," to install."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"docker")," CLI / ",(0,a.kt)("strong",{parentName:"li"},"Docker"),":\nUsed to orchestrate containers. ",(0,a.kt)("inlineCode",{parentName:"li"},"kind")," (above) requires that you have Docker installed and configured. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Get Docker")," to install."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," / ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes command-line tool"),":\nThe CLI for Kubernetes \u2014 allows you to run commands against Kubernetes clusters. See ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"the install guide"),".")),(0,a.kt)("h2",{id:"installing-kratix"},"Installing Kratix"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also run ",(0,a.kt)("inlineCode",{parentName:"p"},"./scripts/quick-start.sh")," from the root of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/syntasso/kratix"},"Kratix repository"),".")),(0,a.kt)("h3",{id:"set-up-a-platform-cluster-"},"Set up a Platform Cluster ",(0,a.kt)("a",{href:"#platform-setup",id:"platform-setup"})),(0,a.kt)("p",null,"Create your ",(0,a.kt)("inlineCode",{parentName:"p"},"platform")," cluster and install Kratix and MinIO. MinIO will be the\nrepository for the GitOps toolkit. You can try Kratix with Git by following\n",(0,a.kt)("a",{parentName:"p",href:"/docs/main/guides/installing-kratix/running-with-git"},"this guide"),". For production\ninstallations, MinIO can be replaced by Git or any other S3-compatible storage,\ndepending on your preference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kind create cluster --name platform\n\n# set PLATFORM to point to the Platform cluster context\nexport PLATFORM="kind-platform"\n\n# Install Kratix\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/kratix.yaml\n\n# Install MinIO\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/platform/minio-install.yaml\n')),(0,a.kt)("h3",{id:"set-up-your-worker-cluster-"},"Set up your Worker Cluster ",(0,a.kt)("a",{href:"#worker-setup",id:"worker-setup"})),(0,a.kt)("p",null,"Create your Kratix ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," cluster and install ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"Flux"),". This will create a cluster for running the X as-a-Service workloads:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kind create cluster --name worker\n\n# set WORKER to point to the Worker cluster context\nexport WORKER="kind-worker"\n\n# Register the Worker Cluster with the Platform Cluster\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_worker_cluster.yaml\n\n# Install flux on the worker\nkubectl apply --context $WORKER --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/worker/gitops-tk-install.yaml\nkubectl apply --context $WORKER --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/worker/gitops-tk-resources.yaml\n')),(0,a.kt)("p",null,"Flux will eventually reconcile the clusters state, making the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," cluster ready to receive workloads. You can verify its readiness by observing the ",(0,a.kt)("inlineCode",{parentName:"p"},"kratix-worker-system")," namespace appearing in the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl --context $WORKER get namespaces\nNAME                   STATUS   AGE\n...\nkratix-worker-system   Active   1m\n...\n")),(0,a.kt)("p",null,"\ud83c\udf89   ",(0,a.kt)("strong",{parentName:"p"},"Congratulations!")," Kratix is now ready to receive workloads. Jump to ",(0,a.kt)("a",{parentName:"p",href:"installing-a-promise"},"Installing and using a Promise")," to spin up your first as-a-service workload."))}p.isMDXComponent=!0}}]);