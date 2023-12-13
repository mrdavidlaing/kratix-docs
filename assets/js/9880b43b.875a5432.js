"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[9659],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9654:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kratix requires ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager")," to be installed in the\nPlatform cluster. If you already have it installed, skip to the\nnext section."),(0,r.kt)("p",null,"To install it, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM apply --filename https://github.com/cert-manager/cert-manager/releases/download/v1.12.0/cert-manager.yaml\n")),(0,r.kt)("p",null,"Make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," is ready before installing Kratix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kubectl --context $PLATFORM get pods --namespace cert-manager\nNAME                                      READY   STATUS    RESTARTS   AGE\ncert-manager-7476c8fcf4-r8cnd             1/1     Running   0          19s\ncert-manager-cainjector-bdd866bd4-7d8zp   1/1     Running   0          19s\ncert-manager-webhook-5655dcfb4b-54r49     1/1     Running   0          19s\n")))}i.isMDXComponent=!0},8113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(4996),i=a(9654);const o={description:"Create a platform cluster, install and configure Kratix",title:"Installing Kratix",id:"installing-kratix",slug:"../installing-kratix"},s=void 0,p={unversionedId:"workshop/part-i/installing-kratix",id:"workshop/part-i/installing-kratix",title:"Installing Kratix",description:"Create a platform cluster, install and configure Kratix",source:"@site/docs/workshop/part-i/01-installing-kratix.md",sourceDirName:"workshop/part-i",slug:"/workshop/installing-kratix",permalink:"/docs/workshop/installing-kratix",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/workshop/part-i/01-installing-kratix.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Create a platform cluster, install and configure Kratix",title:"Installing Kratix",id:"installing-kratix",slug:"../installing-kratix"},sidebar:"workshopSidebar",previous:{title:"Part I",permalink:"/docs/workshop/part-i/intro"},next:{title:"Installing a Promise",permalink:"/docs/workshop/installing-a-promise"}},u={},c=[{value:"What is Kratix?",id:"what-is-kratix",level:2},{value:"Using Kratix to build your platform you can",id:"using-kratix-to-build-your-platform-you-can",level:3},{value:"Providing a Kratix-built platform allows your users to",id:"providing-a-kratix-built-platform-allows-your-users-to",level:3},{value:"Hands on: Installing Kratix",id:"install-kratix",level:2},{value:"Clone Kratix",id:"clone-kratix",level:3},{value:"Create a Kubernetes cluster where you will install Kratix",id:"platform-setup",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Install Kratix",id:"kratix-setup",level:3},{value:"Set up the GitOps State Store",id:"gitops-setup",level:3},{value:"Create the Kratix State Store",id:"statestore-setup",level:3},{value:"Summary",id:"summary",level:2},{value:"\ud83c\udf89 \xa0 Congratulations",id:"--congratulations",level:2}],m={toc:c};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is Part 1 of ",(0,r.kt)("a",{parentName:"p",href:"intro"},"a series")," illustrating how Kratix works. ",(0,r.kt)("br",null),"\n\ud83d\udc49\ud83c\udffe Next: ",(0,r.kt)("a",{parentName:"p",href:"installing-a-promise"},"Install a Kratix Promise")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this tutorial, you will")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-kratix"},"learn more about Kratix as a framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-kratix"},"install and configure Kratix on a Kubernetes cluster"))),(0,r.kt)("img",{align:"right",src:(0,l.Z)("/img/logo_300_with-padding.png")}),(0,r.kt)("h2",{id:"what-is-kratix"},"What is Kratix?"),(0,r.kt)("p",null,"Kratix is a framework used by platform teams to build the custom platforms tailored to their organisation."),(0,r.kt)("h3",{id:"using-kratix-to-build-your-platform-you-can"},"Using Kratix to build your platform you can"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use GitOps workflow and familiar Kubernetes-native constructs."),(0,r.kt)("li",{parentName:"ul"},"co-create capabilities by providing a clear contract between application and platform teams through the definition and creation of \u201cPromises\u201d.This tutorial will talk more about Kratix Promises in ",(0,r.kt)("a",{parentName:"li",href:"installing-a-promise"},"the next step"),"."),(0,r.kt)("li",{parentName:"ul"},"create a flexible platform with your paved paths as Promises."),(0,r.kt)("li",{parentName:"ul"},"evolve your platform easily as your business needs change."),(0,r.kt)("li",{parentName:"ul"},"start small on a laptop and expand to multi-team, multi-cluster, multi-region, and multi-cloud with a consistent API everywhere.")),(0,r.kt)("h3",{id:"providing-a-kratix-built-platform-allows-your-users-to"},"Providing a Kratix-built platform allows your users to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"discover available services that are already fit-for-purpose."),(0,r.kt)("li",{parentName:"ul"},"consume services on demand using standard Kubernetes APIs."),(0,r.kt)("li",{parentName:"ul"},"move focus away from infrastructure toward adding product value.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"install-kratix"},"Hands on: Installing Kratix"),(0,r.kt)("p",null,"Before continuing, make sure to go back to ",(0,r.kt)("a",{parentName:"p",href:"setup"},"prerequisites"),"\nand follow the guide if you haven't done that already."),(0,r.kt)("p",null,"This guide will go through the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#clone-kratix"},"Clone Kratix")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#platform-setup"},"Create the platform cluster")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#kratix-setup"},"Install Kratix")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#gitops-setup"},"Set up the GitOps State Store")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#statestore-setup"},"Create the Kratix State Store"))),(0,r.kt)("h3",{id:"clone-kratix"},"Clone Kratix"),(0,r.kt)("p",null,"You will need the Kratix source code to complete this workshop. Clone the\nproject to your local machine and change into the directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/syntasso/kratix.git\ncd kratix\n")),(0,r.kt)("h3",{id:"platform-setup"},"Create a Kubernetes cluster where you will install Kratix"),(0,r.kt)("p",null,"One of the most powerful Kratix features is the ability platform teams have to\nfully control the scheduling of work across extensive and diverse infrastructure, i.e., to\ndetermine in which Kubernetes cluster (or other infrastructure) a certain workload should be deployed to.\nKratix leverages the GitOps toolkit to deliver this capability."),(0,r.kt)("p",null,"Kratix itself runs in Kubernetes. The first step in getting Kratix up and running is to create a Kubernetes cluster where you can install it. In this workshop, you will use ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," to run Kubernetes clusters locally. Run the\nfollowing command to create a Kubernetes cluster and give it the name ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --name platform \\\n    --image kindest/node:v1.27.3 \\\n    --config config/samples/kind-platform-config.yaml\n")),(0,r.kt)("p",null,"This command will create a cluster on the specified Kubernetes version and\nupdate your local ",(0,r.kt)("inlineCode",{parentName:"p"},".kube/config")," with the credentials to access the cluster. You\nare also providing ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," with a config file to simplify accessing the services\nrunning in the cluster."),(0,r.kt)("p",null,"Once the creation completes, you can reach the local platform cluster with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"kind-platform")," context."),(0,r.kt)("p",null,"Verify the cluster is ready:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export PLATFORM="kind-platform"\nkubectl --context $PLATFORM cluster-info\n')),(0,r.kt)("p",null,"The above command will give an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"Kubernetes control plane is running at https://127.0.0.1:XXXX\nCoreDNS is running at https://127.0.0.1:55960/api/v1/...\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note that You have now saved a local environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PLATFORM")," to make it easier for the ongoing commands in this workshop")),(0,r.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,r.kt)(i.ZP,{mdxType:"PartialInstallCertManager"}),(0,r.kt)("h3",{id:"kratix-setup"},"Install Kratix"),(0,r.kt)("p",null,"To install Kratix, all you need is the Kratix distribution file."),(0,r.kt)("p",null,"Run the command below to deploy Kratix on the platform cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM apply --filename distribution/kratix.yaml\n")),(0,r.kt)("p",null,"This command will create a Kratix deployment (in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"kratix-platform-system")," namespace). It will also install all the APIs (as Kubernetes CRDs) that\nKratix needs."),(0,r.kt)("p",null,"Verify that the Kratix CRDs are available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM get crds\n")),(0,r.kt)("p",null,"The above command will give an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"NAME                                         CREATED AT\nbucketstatestores.platform.kratix.io         2023-05-22T12:02:41Z\ndestinations.platform.kratix.io              2023-05-22T12:02:41Z\ngitstatestores.platform.kratix.io            2023-05-22T12:02:41Z\npromises.platform.kratix.io                  2023-05-22T12:02:41Z\nworkplacements.platform.kratix.io            2023-05-22T12:02:42Z\nworks.platform.kratix.io                     2023-05-22T12:02:42Z\n")),(0,r.kt)("admonition",{title:"What are CRDs?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A Custom Resource (CR) is an extension of the Kubernetes API that is not\nnecessarily available in a default Kubernetes installation. It represents a\ncustomisation of a particular Kubernetes installation."),(0,r.kt)("p",{parentName:"admonition"},"A Custom Resource Definition (CRD) is the object you create to teach your\nKubernetes cluster about this new API."),(0,r.kt)("p",{parentName:"admonition"},"Kratix comes with multiple API extensions (CRDs), as you see above."),(0,r.kt)("p",{parentName:"admonition"},"Check the Kubernetes documentation for further details on ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom\nResources"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"},"Custom Resources\nDefinition"),".")),(0,r.kt)("p",null,"Verify the Kratix deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM get deployments --namespace kratix-platform-system\n")),(0,r.kt)("p",null,"The above command will give an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"NAME                                 READY   UP-TO-DATE   AVAILABLE   AGE\nkratix-platform-controller-manager   1/1     1            1           1h\n")),(0,r.kt)("p",null,"You can now tell Kratix which repositories it will use to deploy and manage the\nworkloads."),(0,r.kt)("h3",{id:"gitops-setup"},"Set up the GitOps State Store"),(0,r.kt)("p",null,"As mentioned above, Kratix leverages GitOps for deploying and reconciling\nscheduled workloads. From a GitOps perspective, a Destination is the Kratix\nmodel that captures how workload definitions should be stored and organised to\nenable the appropriate infrastructure to be able to identify and reconcile the\nworkloads. Each Kratix Destination has a backing State Store which is either an\nS3-compatible bucket or a Git repository. For this workshop we will use an\nS3-compatible MinIO bucket created locally on a MinIO instance running in the\nplatform cluster. Please check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"docs"),"\nfor further details."),(0,r.kt)("p",null,"To install the MinIO instance, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM apply --filename config/samples/minio-install.yaml\n")),(0,r.kt)("p",null,"The above command will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy an instance of MinIO on the ",(0,r.kt)("inlineCode",{parentName:"li"},"kratix-platform-system")," namespace"),(0,r.kt)("li",{parentName:"ul"},"Create a Secret with the MinIO credentials"),(0,r.kt)("li",{parentName:"ul"},"Run a Job to create a bucket called ",(0,r.kt)("inlineCode",{parentName:"li"},"kratix")," on the MinIO instance. ",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Verify the installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM get deployments --namespace kratix-platform-system\n")),(0,r.kt)("p",null,"The above command will give an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"NAME                                 READY   UP-TO-DATE   AVAILABLE   AGE\nkratix-platform-controller-manager   1/1     1            1           1h\nminio                                1/1     1            1           1h\n")),(0,r.kt)("p",null,"Verify the Create Bucket job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl --context $PLATFORM get jobs\n")),(0,r.kt)("p",null,"The above command will give an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"NAME                  COMPLETIONS   DURATION   AGE\nminio-create-bucket   1/1           3m5s       1h\n")),(0,r.kt)("p",null,"Once the Job completes, you are able register the MinIO bucket with Kratix."),(0,r.kt)("h3",{id:"statestore-setup"},"Create the Kratix State Store"),(0,r.kt)("p",null,"The State Store represents the various backing storage options to which Kratix\ncan write. When registering a worker cluster with Kratix, you will need to\nspecify the state store you intend to use. Kratix will then write to the\nspecified state store when scheduling workloads for deployment on that cluster."),(0,r.kt)("p",null,"Create a new State Store that points to the MinIO bucket we created on the previous\nstep:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cat << EOF | kubectl --context $PLATFORM apply -f -\napiVersion: platform.kratix.io/v1alpha1\nkind: BucketStateStore\nmetadata:\n  name: default\nspec:\n  endpoint: minio.kratix-platform-system.svc.cluster.local\n  insecure: true\n  bucketName: kratix\n  secretRef:\n    name: minio-credentials\n    namespace: default\nEOF\n")),(0,r.kt)("p",null,"The above command will give an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"bucketstatestore.platform.kratix.io/default created\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"More on the Kratix State Store"),(0,r.kt)("p",null,"The State Store document contains the configuration needed to access the actual\nbacking storage."),(0,r.kt)("p",null,"In the example above, you created a new ",(0,r.kt)("inlineCode",{parentName:"p"},"BucketStateStore"),", since a MinIO bucket\nhas been provisioned for storage, but you could use any other S3-compatible\nstorage like Amazon S3 and Google Cloud Storage."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," includes the details needed to access that specific kind of State\nStore. On the example above, you configured the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," to the cluster address\nof the MinIO server you deployed on the platform cluster. Since MinIO is running\nin-cluster and without TLS enabled, it is necessary to set ",(0,r.kt)("inlineCode",{parentName:"p"},"insecure")," to true."),(0,r.kt)("p",null,"You can see the MinIO service on the ",(0,r.kt)("inlineCode",{parentName:"p"},"kratix-platform-system"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM --namespace kratix-platform-system get service minio\n")),(0,r.kt)("p",null,"The above command will give an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"NAME    TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE\nminio   NodePort   10.96.96.166   <none>        80:31337/TCP   17h\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bucketName")," refers to the actual bucket on the MinIO server. The bucket needs\nto exist prior to Kratix trying to use it. As a part of setting up MinIO you\nran a Job to create the base ",(0,r.kt)("inlineCode",{parentName:"p"},"kratix")," bucket."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"secretRef")," points to a secret, in the same namespace as the State\nStore, containing the credentials to access the store. For ",(0,r.kt)("inlineCode",{parentName:"p"},"BucketStateStore"),",\nKratix expects to find an ",(0,r.kt)("inlineCode",{parentName:"p"},"accessKeyID")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"secretAccessKey")," when resolving\nthe secret. As part of the MinIO deployment, you also created the necessary secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context $PLATFORM describe secret minio-credentials\n")),(0,r.kt)("p",null,"The above command will give an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"Name:         minio-credentials\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\n\nType:  Opaque\n\nData\n====\naccessKeyID:      10 bytes\nsecretAccessKey:  10 bytes\n")),(0,r.kt)("p",null,"For further details on State Stores, check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"State Store documentation\npage"))),(0,r.kt)("p",null,"And with that, Kratix is fully installed and configured. Continue to the next\nsection to install your first Promise!"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Your platform is ready to receive Promises! Well done!"),(0,r.kt)("p",null,"To recap the steps you took:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Created a platform cluster"),(0,r.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Installed Kratix on the platform cluster"),(0,r.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Installed MinIO on the platform cluster as the GitOps document store"),(0,r.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Told Kratix about the MinIO bucket")),(0,r.kt)("h2",{id:"--congratulations"},"\ud83c\udf89 ","\xa0"," Congratulations"),(0,r.kt)("p",null,"\u2705","\xa0","\xa0","Kratix is now installed. ",(0,r.kt)("br",null),"\n\ud83d\udc49\ud83c\udffe","\xa0","\xa0","Next you will ",(0,r.kt)("a",{parentName:"p",href:"installing-a-promise"},"install an sample Kratix Promise"),"."))}k.isMDXComponent=!0}}]);