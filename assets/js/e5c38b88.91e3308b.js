"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[2327],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(a),m=n,d=k["".concat(s,".").concat(m)]||k[m]||c[m]||l;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[k]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4996);const i={description:"Learn how to install kratix",title:"Installing Kratix",id:"installing-kratix"},o=void 0,s={unversionedId:"workshop/installing-kratix",id:"workshop/installing-kratix",title:"Installing Kratix",description:"Learn how to install kratix",source:"@site/docs/workshop/02-installing-kratix.md",sourceDirName:"workshop",slug:"/workshop/installing-kratix",permalink:"/docs/workshop/installing-kratix",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/workshop/02-installing-kratix.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn how to install kratix",title:"Installing Kratix",id:"installing-kratix"},sidebar:"workshopSidebar",previous:{title:"Overview",permalink:"/docs/workshop/intro"},next:{title:"Installing a Promise",permalink:"/docs/workshop/installing-a-promise"}},u={},p=[{value:"What is Kratix?",id:"what-is-kratix",level:2},{value:"Using Kratix to build your platform you can:",id:"using-kratix-to-build-your-platform-you-can",level:3},{value:"Providing a Kratix-built platform allows your users to:",id:"providing-a-kratix-built-platform-allows-your-users-to",level:3},{value:"Hands on: Installing Kratix",id:"hands-on-installing-kratix",level:2},{value:"System setup",id:"pre-requisites",level:3},{value:"Update your Docker resource allocations",id:"docker-config",level:4},{value:"Delete existing Kratix KinD clusters",id:"delete-clusters",level:4},{value:"Clone Kratix",id:"clone-kratix",level:4},{value:"Installation",id:"install-kratix",level:3},{value:"Set up your Kratix <code>platform</code> cluster",id:"platform-setup",level:4},{value:"Adjust multi-cluster networking for KinD",id:"kind-networking",level:4},{value:"Set up your Kratix <code>worker</code> cluster",id:"worker-setup",level:4},{value:"Summary",id:"summary",level:2},{value:"\ud83c\udf89 \xa0 Congratulations!",id:"--congratulations",level:2}],k={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is Part 1 of ",(0,n.kt)("a",{parentName:"p",href:"intro"},"a series")," illustrating how Kratix works. ",(0,n.kt)("br",null),"\n\ud83d\udc49\ud83c\udffe Next: ",(0,n.kt)("a",{parentName:"p",href:"installing-a-promise"},"Install a Kratix Promise")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"In this tutorial, you will")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-is-kratix"},"learn more about Kratix as a framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#install-kratix"},"install a multi-cluster Kratix using KinD"))),(0,n.kt)("img",{align:"right",src:(0,l.Z)("/img/logo_300_with-padding.png")}),(0,n.kt)("h2",{id:"what-is-kratix"},"What is Kratix?"),(0,n.kt)("p",null,"Kratix is a framework used by platform teams to build the custom platforms tailored to their organisation."),(0,n.kt)("h3",{id:"using-kratix-to-build-your-platform-you-can"},"Using Kratix to build your platform you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"use GitOps workflow with Flux and familiar Kubernetes-native constructs."),(0,n.kt)("li",{parentName:"ul"},"co-create capabilities by providing a clear contract between application and platform teams through the definition and creation of \u201cPromises\u201d. We'll talk more about Kratix Promises in ",(0,n.kt)("a",{parentName:"li",href:"installing-a-promise"},"the next step"),"."),(0,n.kt)("li",{parentName:"ul"},"create a flexible platform with your paved paths as Promises."),(0,n.kt)("li",{parentName:"ul"},"evolve your platform easily as your business needs change."),(0,n.kt)("li",{parentName:"ul"},"start small on a laptop and expand to multi-team, multi-cluster, multi-region, and multi-cloud with a consistent API everywhere.")),(0,n.kt)("h3",{id:"providing-a-kratix-built-platform-allows-your-users-to"},"Providing a Kratix-built platform allows your users to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"discover available services that are already fit-for-purpose."),(0,n.kt)("li",{parentName:"ul"},"consume services on demand using standard Kubernetes APIs."),(0,n.kt)("li",{parentName:"ul"},"move focus away from infrastructure toward adding product value.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"hands-on-installing-kratix"},"Hands on: Installing Kratix"),(0,n.kt)("p",null,"Before you begin installing Kratix:"),(0,n.kt)("h3",{id:"pre-requisites"},"System setup"),(0,n.kt)("p",null,"For this workshop, we'll use Kratix on two local Kubernetes clusters. Install the prerequisites listed below if they aren't already on your system."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"kind")," CLI / ",(0,n.kt)("strong",{parentName:"p"},"Kubernetes-in-Docker(KinD)"),": ",(0,n.kt)("br",null),"\nUsed to create and manage local Kubernetes clusters in Docker. ",(0,n.kt)("br",null),"\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"the quick start guide")," to install.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"docker")," CLI / ",(0,n.kt)("strong",{parentName:"p"},"Docker"),": ",(0,n.kt)("br",null),"\nUsed to orchestrate containers. ",(0,n.kt)("inlineCode",{parentName:"p"},"kind")," (above) requires that you have Docker installed and configured. ",(0,n.kt)("br",null),"\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Get Docker")," to install."),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Docker Desktop (For Mac) v4.13.0 has a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/docker/for-mac/issues/6530"},"known issue")," that crashes Docker Daemon on specific situations. Please ensure you are using an earlier or later version of Docker."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," / ",(0,n.kt)("strong",{parentName:"p"},"Kubernetes command-line tool"),": ",(0,n.kt)("br",null),"\nThe CLI for Kubernetes","\u2014","allows you to run commands against Kubernetes clusters.",(0,n.kt)("br",null),"\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"the install guide"),"."))),(0,n.kt)("h4",{id:"docker-config"},"Update your Docker resource allocations"),(0,n.kt)("p",null,"In order to complete all tutorials in this series, you must allocate enough resources to Docker. Docker requires:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"5 CPU"),(0,n.kt)("li",{parentName:"ul"},"12GB Memory"),(0,n.kt)("li",{parentName:"ul"},"4GB swap")),(0,n.kt)("p",null,"This can be managed through your tool of choice (e.g. Docker Desktop, Rancher, etc)."),(0,n.kt)("h4",{id:"delete-clusters"},"Delete existing Kratix KinD clusters"),(0,n.kt)("p",null,"Ensure no clusters are currently running."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kind get clusters\n")),(0,n.kt)("p",null,"The above command will give an output similar to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"No kind clusters found.\n")),(0,n.kt)("p",null,"If you have clusters named ",(0,n.kt)("inlineCode",{parentName:"p"},"platform")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"worker")," please delete them with"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete clusters platform worker\n")),(0,n.kt)("h4",{id:"clone-kratix"},"Clone Kratix"),(0,n.kt)("p",null,"You will need the Kratix source code to complete this workhshop. Clone the repository to your local machine."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/syntasso/kratix.git\ncd kratix\n")),(0,n.kt)("h3",{id:"install-kratix"},"Installation"),(0,n.kt)("p",null,"Now that your system is set up for the workshop, you can install Kratix! You should be in the ",(0,n.kt)("inlineCode",{parentName:"p"},"kratix")," folder."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#platform-setup"},"Set up your ",(0,n.kt)("inlineCode",{parentName:"a"},"platform")," cluster")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#kind-networking"},"Adjust networking for KinD"),", if required"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#worker-setup"},"Set up your ",(0,n.kt)("inlineCode",{parentName:"a"},"worker")," cluster"),(0,n.kt)("br",null),(0,n.kt)("br",null))),(0,n.kt)("p",null,"A complete installation of Kratix looks like the diagram below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Overview",src:a(2215).Z,width:"4749",height:"3368"})),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Reference"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Component"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1\ufe0f\u20e3"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"platform"),"\xa0","\xa0","cluster"),(0,n.kt)("td",{parentName:"tr",align:null},"The first of two local Kubernetes clusters that Kratix will use. This allows your platform to have orchestration logic separated from application workloads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2\ufe0f\u20e3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kratix CRDs"),(0,n.kt)("td",{parentName:"tr",align:null},"A set of CRDs that Kratix requires.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3\ufe0f\u20e3"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"kratix"),"\u2011",(0,n.kt)("inlineCode",{parentName:"td"},"platform"),"\u2011",(0,n.kt)("inlineCode",{parentName:"td"},"controller"),"\xa0","\xa0","Pod"),(0,n.kt)("td",{parentName:"tr",align:null},"At a ",(0,n.kt)("em",{parentName:"td"},"very")," high level, this manages the lifecycle of Kratix resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4\ufe0f\u20e3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"An installation of ",(0,n.kt)("a",{parentName:"td",href:"https://min.io/"},"MinIO")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://min.io/"},"MinIO")," is a local document store, which is what the Kratix ",(0,n.kt)("inlineCode",{parentName:"td"},"platform")," cluster needs for storing generated resource definitions. MinIO works well with KinD, but Kratix can use any storage mechanism that speaks either S3 or Git.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"5\ufe0f\u20e3"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"worker")," cluster"),(0,n.kt)("td",{parentName:"tr",align:null},"The second of two local Kubernetes clusters that Kratix will use. In this workshop, you run one single separate cluster to manage application workloads, but Kratix allows you to design the cluster architecture that makes sense in your context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"6\ufe0f\u20e3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"An installation of ",(0,n.kt)("a",{parentName:"td",href:"https://fluxcd.io/"},"Flux")),(0,n.kt)("td",{parentName:"tr",align:null},"Kratix uses GitOps workflow, and ",(0,n.kt)("a",{parentName:"td",href:"https://fluxcd.io/"},"Flux")," is the mechanism to continuously synchronise the resources defined in the document store (MinIO) to the ",(0,n.kt)("inlineCode",{parentName:"td"},"worker")," clusters. Similar to document storage, this workshop uses Flux, but Kratix can use any tool that follows the GitOps pattern of using repositories as the source of truth for defining desired Kubernetes state.")))),(0,n.kt)("br",null),"Now that you know what the installation looks like, bring Kratix to life.",(0,n.kt)("br",null),(0,n.kt)("h4",{id:"platform-setup"},"Set up your Kratix ",(0,n.kt)("inlineCode",{parentName:"h4"},"platform")," cluster"),(0,n.kt)("p",null,"Create your ",(0,n.kt)("inlineCode",{parentName:"p"},"platform")," cluster and install Kratix and MinIO."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --name platform --image kindest/node:v1.24.0\nkubectl apply --filename distribution/kratix.yaml\nkubectl apply --filename hack/platform/minio-install.yaml\n")),(0,n.kt)("br",null),(0,n.kt)("p",null,"Verify that the Kratix API is now available."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get crds\n")),(0,n.kt)("p",null,"You should see something similar to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"NAME                                   CREATED AT\nclusters.platform.kratix.io            2022-05-10T12:00:00Z\npromises.platform.kratix.io            2022-05-10T12:00:00Z\nworkplacements.platform.kratix.io      2022-05-10T12:00:00Z\nworks.platform.kratix.io               2022-05-10T12:00:00Z\n")),(0,n.kt)("br",null),(0,n.kt)("p",null,"Verify Kratix and MinIO are installed and healthy.",(0,n.kt)("br",null),(0,n.kt)("sub",null,"(This may take a few minutes so ",(0,n.kt)("code",null,"--watch")," will watch the command. Press ",(0,n.kt)("kbd",null,"Ctrl"),"+",(0,n.kt)("kbd",null,"C")," to stop watching)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context kind-platform get pods --namespace kratix-platform-system --watch\n")),(0,n.kt)("p",null,"You should see something similar to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"NAME                                                  READY   STATUS       RESTARTS   AGE\nkratix-platform-controller-manager-769855f9bb-8srtj   2/2     Running      0          1h\nminio-6f75d9fbcf-5cn7w                                1/1     Running      0          1h\n")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"kind-networking"},"Adjust multi-cluster networking for KinD"),(0,n.kt)("p",null,"Some KinD installations use non-standard networking. To ensure cross-cluster communication you need to run this script:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"PLATFORM_CLUSTER_IP=`docker inspect platform-control-plane | grep '\"IPAddress\": \"172' | awk '{print $2}' | awk -F '\"' '{print $2}'`\nsed -i'' -e \"s/172.18.0.2/$PLATFORM_CLUSTER_IP/g\" hack/worker/gitops-tk-resources.yaml\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Running the above command will not change your local configuration, but rather update Kratix-provided configuration to use the appropriate KinD network.")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"worker-setup"},"Set up your Kratix ",(0,n.kt)("inlineCode",{parentName:"h4"},"worker")," cluster"),(0,n.kt)("p",null,"Create your Kratix ",(0,n.kt)("inlineCode",{parentName:"p"},"worker")," cluster and install ",(0,n.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"Flux"),". This will create a cluster for running the X as-a-Service workloads:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --name worker --image kindest/node:v1.24.0\n\n# Register the Worker Cluster with the Platform Cluster\nkubectl apply \\\n    --filename config/samples/platform_v1alpha1_worker_cluster.yaml\\\n    --context kind-platform\n\n# Install Flux on the Worker Cluster\nkubectl apply \\\n    --filename hack/worker/gitops-tk-install.yaml \\\n    --context kind-worker\nkubectl apply \\\n    --filename hack/worker/gitops-tk-resources.yaml \\\n    --context kind-worker\n")),(0,n.kt)("br",null),(0,n.kt)("p",null,"Verify Flux is installed and configured (i.e., Flux knows where in MinIO to look for resources to install).",(0,n.kt)("br",null),(0,n.kt)("sub",null,"(This may take a few minutes so ",(0,n.kt)("code",null,"--watch")," will watch the command. Press ",(0,n.kt)("kbd",null,"Ctrl"),"+",(0,n.kt)("kbd",null,"C")," to stop watching)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get buckets.source.toolkit.fluxcd.io \\\n    --context kind-worker \\\n    --namespace flux-system \\\n    --watch\n")),(0,n.kt)("p",null,"You should see something similar to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"NAME                        URL   READY   STATUS                                                       AGE\nkratix-workload-crds              True    Fetched revision: 9343bf26ec16db995d7b53ff63c64b7dfb9789c4   1m\nkratix-workload-resources         True    Fetched revision: f2d918e21d4c5cc65791d121f4a3375ad80a3eac   1m\n")),(0,n.kt)("br",null),(0,n.kt)("p",null,"Once Flux is running, the Kratix running on the ",(0,n.kt)("inlineCode",{parentName:"p"},"platform")," cluster will have the ability to manage resources on the ",(0,n.kt)("inlineCode",{parentName:"p"},"worker")," cluster."),(0,n.kt)("p",null,"Verify that you can deploy resources to the ",(0,n.kt)("code",null,"worker")," cluster\u2014Kratix will always create a `kratix-worker-cluster` namespace, so you can check the namespace to ensure the installation has been successful.",(0,n.kt)("br",null),(0,n.kt)("sub",null,"(This may take a few minutes so ",(0,n.kt)("code",null,"--watch")," will watch the command. Press ",(0,n.kt)("kbd",null,"Ctrl"),"+",(0,n.kt)("kbd",null,"C")," to stop watching)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context kind-worker get namespaces --watch\n")),(0,n.kt)("p",null,"You should see something similar to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"NAME                   STATUS   AGE\n#highlight-next-line\nkratix-worker-system   Active   1m\ndefault                Active   3m32s\n#highlight-next-line\nflux-system            Active   3m23s\nkube-node-lease        Active   3m33s\nkube-public            Active   3m33s\nkube-system            Active   3m33s\n...\n")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"You created a platform using Kratix. Well done!"),(0,n.kt)("p",null,"To recap the steps we took:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Setup your machine to run multiple Kubernetes clusters via KinD"),(0,n.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Installed Kratix on the ",(0,n.kt)("inlineCode",{parentName:"li"},"platform")," cluster"),(0,n.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Installed MinIO on the ",(0,n.kt)("inlineCode",{parentName:"li"},"platform")," cluster as the document store for our GitOps solution"),(0,n.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Confirmed that local networking allows those clusters to communicate"),(0,n.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Registered the ",(0,n.kt)("inlineCode",{parentName:"li"},"worker")," cluster with Kratix"),(0,n.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Installed Flux on the ",(0,n.kt)("inlineCode",{parentName:"li"},"worker")," cluster to continuously synchronise documents in MinIO to the ",(0,n.kt)("inlineCode",{parentName:"li"},"worker")," cluster")),(0,n.kt)("p",null,"Next you will install your first Kratix Promise."),(0,n.kt)("h2",{id:"--congratulations"},"\ud83c\udf89 ","\xa0"," Congratulations!"),(0,n.kt)("p",null,"\u2705","\xa0","\xa0","Kratix is now installed. ",(0,n.kt)("br",null),"\n\ud83d\udc49\ud83c\udffe","\xa0","\xa0"," Next you will ",(0,n.kt)("a",{parentName:"p",href:"installing-a-promise"},"install an sample Kratix Promise"),"."))}c.isMDXComponent=!0},2215:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Treasure_Trove-Install_Kratix-4bf00e99e14e587fd365bb5da6f26ec8.jpeg"}}]);