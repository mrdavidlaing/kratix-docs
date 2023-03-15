"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),k=i,g=p["".concat(s,".").concat(k)]||p[k]||m[k]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={description:"Instructions on how to setup Kratix with Git",title:"Running with Git"},o=void 0,l={unversionedId:"main/guides/installing-kratix/running-with-git",id:"main/guides/installing-kratix/running-with-git",title:"Running with Git",description:"Instructions on how to setup Kratix with Git",source:"@site/docs/main/04-guides/01-installing-kratix/03-running-with-git.md",sourceDirName:"main/04-guides/01-installing-kratix",slug:"/main/guides/installing-kratix/running-with-git",permalink:"/docs/main/guides/installing-kratix/running-with-git",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/04-guides/01-installing-kratix/03-running-with-git.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Instructions on how to setup Kratix with Git",title:"Running with Git"},sidebar:"mainSidebar",previous:{title:"Single Cluster",permalink:"/docs/main/guides/installing-kratix/single-cluster"},next:{title:"Installing and using a Promise",permalink:"/docs/main/guides/installing-a-promise"}},s={},u=[{value:"Installing Kratix",id:"installing-kratix",level:2},{value:"Create the Kubernetes Clusters",id:"create-the-kubernetes-clusters",level:3},{value:"Set up a Platform Cluster",id:"platform-setup",level:3},{value:"Set up your Worker Cluster",id:"worker-setup",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kratix talks to the Worker clusters through a Repository. This Repository can be\neither be a Git server (like Github or Gitea) or a S3-compatible object store\n(like GCS and MinIO). Check ",(0,i.kt)("a",{parentName:"p",href:"/docs/main/reference/deployment-topology"},"the reference deployment topology for more\ndetails"),"."),(0,i.kt)("p",null,"This page documents how to setup Kratix with Git. It will also install Gitea as\nthe Git server. To deploy Kratix with an S3-compatible repository, check out\n",(0,i.kt)("a",{parentName:"p",href:"/docs/main/guides/installing-kratix"},"this guide"),"."),(0,i.kt)("h2",{id:"installing-kratix"},"Installing Kratix"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can also run ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/quick-start.sh --git")," from the root of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/syntasso/kratix"},"Kratix\nrepository")," to test it locally with KinD.")),(0,i.kt)("h3",{id:"create-the-kubernetes-clusters"},"Create the Kubernetes Clusters"),(0,i.kt)("p",null,"You can run Kratix either with a multi-cluster or a single-cluster setup. The\ncommands on this document assume that two environment variables are set:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PLATFORM")," representing the Platform cluster Kubernetes context"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"WORKER")," representing the Worker cluster Kubernetes context")),(0,i.kt)("p",null,"For example, with KinD, you can create two clusters and set the variables with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Create the clusters\nkind create cluster --name platform\nkind create cluster --name worker\n\n# Set the environment variables\nexport PLATFORM="kind-platform"\nexport WORKER="kind-worker"\n')),(0,i.kt)("p",null,"For single cluster setups, the two variables should be set to the same value.\nYou can find your cluster context by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl config get-contexts\n")),(0,i.kt)("h3",{id:"platform-setup"},"Set up a Platform Cluster"),(0,i.kt)("p",null,"In your Platform cluster, install Gitea and Kratix. Gitea will be the\nrepository for the GitOps toolkit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Install Gitea\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/platform/gitea-install.yaml\n\n# Install Kratix\ncurl -s https://raw.githubusercontent.com/syntasso/kratix/main/distribution/kratix.yaml | sed "s/repository-type=s3/repository-type=git/g" |\n   kubectl apply --filename -\n')),(0,i.kt)("h3",{id:"worker-setup"},"Set up your Worker Cluster"),(0,i.kt)("p",null,"In your Worker cluster, install ",(0,i.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"Flux"),". This\nwill create a cluster for running the X as-a-Service workloads:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Register the Worker Cluster with the Platform Cluster\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_worker_cluster.yaml\n\n# Ensure Gitea is running on the Platform\nkubectl wait pod --context $PLATFORM -n gitea --selector app=gitea --for=condition=ready\n\n# Install flux on the worker\nkubectl apply --context $WORKER --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/worker/gitops-tk-install.yaml\nkubectl apply --context $WORKER --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/worker/gitops-tk-resources-git.yaml\n")),(0,i.kt)("p",null,"Flux will eventually reconcile the clusters state, making the ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," cluster\nready to receive workloads. You can verify its readiness by observing the\n",(0,i.kt)("inlineCode",{parentName:"p"},"kratix-worker-system")," namespace appearing in the ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl --context $WORKER get namespaces\nNAME                   STATUS   AGE\n...\nkratix-worker-system   Active   1m\n...\n")),(0,i.kt)("p",null,"\ud83c\udf89   ",(0,i.kt)("strong",{parentName:"p"},"Congratulations!")," Kratix is now ready to receive workloads, backed by\nGit. Jump to ",(0,i.kt)("a",{parentName:"p",href:"../installing-a-promise"},"Installing and using a Promise")," to spin up\nyour first as-a-service workload."))}p.isMDXComponent=!0}}]);