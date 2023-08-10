"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[3337],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,k=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=k({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=a(2389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(x,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const s={description:"Run Kratix",slug:"/main/guides/installing-kratix",title:"Multi cluster"},i=void 0,u={unversionedId:"main/guides/installing-kratix/multi-cluster",id:"main/guides/installing-kratix/multi-cluster",title:"Multi cluster",description:"Run Kratix",source:"@site/docs/main/04-guides/01-installing-kratix/01-multi-cluster.md",sourceDirName:"main/04-guides/01-installing-kratix",slug:"/main/guides/installing-kratix",permalink:"/docs/main/guides/installing-kratix",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/04-guides/01-installing-kratix/01-multi-cluster.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Run Kratix",slug:"/main/guides/installing-kratix",title:"Multi cluster"},sidebar:"mainSidebar",previous:{title:"Installing Kratix",permalink:"/docs/category/installing-kratix"},next:{title:"Single cluster",permalink:"/docs/main/guides/installing-kratix/single-cluster"}},c={},p=[{value:"System setup",id:"system-setup",level:2},{value:"Set up platform cluster",id:"platform-setup",level:2},{value:"Set up State Store",id:"set-up-state-store",level:2},{value:"Set up a worker cluster",id:"worker-setup",level:2},{value:"Create worker cluster",id:"create-worker-cluster",level:3},{value:"Install Flux",id:"install-flux",level:3},{value:"Configure Flux",id:"configure-flux",level:3},{value:"Register cluster as a Destination with Kratix",id:"register-cluster-as-a-destination-with-kratix",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"system-setup"},"System setup"),(0,r.kt)("p",null,"This guide will show how to use Kratix on two Kubernetes clusters. Install the prerequisites\nlisted below if they aren't already on your system. If you are using pre-existing clusters\nor want to use a different tool to provision your clusters, skip requirements 1 and 2."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kind")," CLI / ",(0,r.kt)("strong",{parentName:"li"},"Kubernetes-in-Docker (KinD)"),":\nUsed to create and manage local Kubernetes clusters in Docker. See ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"the quick start guide")," to install."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker")," CLI / ",(0,r.kt)("strong",{parentName:"li"},"Docker"),":\nUsed to orchestrate containers. ",(0,r.kt)("inlineCode",{parentName:"li"},"kind")," (above) requires that you have Docker installed and configured. See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Get Docker")," to install."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," / ",(0,r.kt)("strong",{parentName:"li"},"Kubernetes command-line tool"),":\nThe CLI for Kubernetes \u2014 allows you to run commands against Kubernetes clusters. See ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"the install guide"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To get setup locally quickly with KinD clusters you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/quick-start.sh"),"\nfrom the root of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/syntasso/kratix"},"Kratix repository"),". This provisions\nan in-cluster ",(0,r.kt)("inlineCode",{parentName:"p"},"MinIO")," to use as the backing ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"State Store"),".\nAlternatively you can provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--git")," flag to create it with an in-cluster Gitea\ninstance instead.")),(0,r.kt)("h2",{id:"platform-setup"},"Set up platform cluster"),(0,r.kt)("p",null,"If you are not using a pre-existing cluster, create your platform cluster locally using KinD:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kind create cluster --image kindest/node:v1.24.0 --name platform\n# set PLATFORM to point to the platform cluster context\nexport PLATFORM="kind-platform"\n')),(0,r.kt)("p",null,"If your are using your own pre-existing cluster, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLATFORM")," environment\nvariable to the name of the kubectl context used to communicate to it. Install Kratix\non the platform cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Kratix\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/kratix.yaml\n")),(0,r.kt)("h2",{id:"set-up-state-store"},"Set up State Store"),(0,r.kt)("p",null,"Kratix uses GitOps to provision resources on the worker clusters. You can configure Kratix\nwith multiple different GitOps repositories by creating ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"State Stores"),".\nKratix supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/bucketstatestore"},"Bucket State Store"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/gitstatestore"},"Git State Store"),"."),(0,r.kt)("p",null,"If your are using local KinD clusters you can install MinIO or Gitea as an in-cluster State Store"),(0,r.kt)(l.Z,{className:"boxedTabs",groupId:"stateStore",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minio",label:"Bucket (on KinD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install MinIO and register it as a BucketStateStore\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/minio-install.yaml\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_bucketstatestore.yaml\n"))),(0,r.kt)(o.Z,{value:"gitea",label:"Git (on KinD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Gitea and register it as a Git State Store\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/platform/gitea-install.yaml\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_gitstatestore.yaml\n"))),(0,r.kt)(o.Z,{value:"custom",label:"Custom",mdxType:"TabItem"},(0,r.kt)("p",null,"  If your aren't using KinD clusters you will need to create your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"State Store"),"\nthat is accessible by the platform and worker cluster. Follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"docs for creating State Stores"),"."))),(0,r.kt)("h2",{id:"worker-setup"},"Set up a worker cluster"),(0,r.kt)("h3",{id:"create-worker-cluster"},"Create worker cluster"),(0,r.kt)("p",null,"If you are not using a pre-existing cluster, create your platform cluster locally using KinD:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kind create cluster --image kindest/node:v1.24.0 --name worker\n\n# set WORKER to point to the worker cluster context\nexport WORKER="kind-worker"\n')),(0,r.kt)("p",null,"If you are using your own pre-existing cluster, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"WORKER")," environment\nvariable to the name of the kubectl context used to communicate to it."),(0,r.kt)("h3",{id:"install-flux"},"Install Flux"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"Flux"),". Flux will be used to pull down resources to the\ncluster from the State Store"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install flux on the worker\nkubectl apply --context $WORKER --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/destination/gitops-tk-install.yaml\n")),(0,r.kt)("h3",{id:"configure-flux"},"Configure Flux"),(0,r.kt)("p",null,"Now that Flux is installed, we need to configure it to pull down from the Kratix State Store.\nFollow the steps below that match the State Store you created previously:"),(0,r.kt)(l.Z,{className:"boxedTabs",groupId:"stateStore",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minio",label:"Bucket (on KinD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Configure Flux to pull down from MinIO\nkubectl apply --context $WORKER --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/destination/gitops-tk-resources.yaml\n"))),(0,r.kt)(o.Z,{value:"gitea",label:"Git (on KinD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Configure Flux to pull down from Gitea\nkubectl apply --context $WORKER --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/destination/gitops-tk-resources-git.yaml\n"))),(0,r.kt)(o.Z,{value:"custom",label:"Custom",mdxType:"TabItem"},(0,r.kt)("p",null,"  You will need to manual configure the Flux resources to use the Git/Bucket created."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bucket: Download and modify this ",(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/syntasso/kratix/main/hack/destination/gitops-tk-resources.yaml"},"example configuration"),"\nto use the endpoint, bucket and credentials for your Bucket."),(0,r.kt)("li",{parentName:"ul"},"Git: Download and modify this ",(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/syntasso/kratix/main/hack/destination/gitops-tk-resources-git.yaml"},"example configuration"),"\nto use the url, branch, and credentials for your Git Repository.")))),(0,r.kt)("h3",{id:"register-cluster-as-a-destination-with-kratix"},"Register cluster as a Destination with Kratix"),(0,r.kt)("p",null,"The final step is to tell Kratix that the cluster is ready to receive workloads.\nFollow the steps below that match the State Store you created previously:"),(0,r.kt)(l.Z,{className:"boxedTabs",groupId:"stateStore",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minio",label:"Bucket (on KinD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Configure Flux to pull down from MinIO\nkubectl apply --context $PLATFORM --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_worker.yaml\n"))),(0,r.kt)(o.Z,{value:"gitea",label:"Git (on KinD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Install flux on the worker and configure it to pull down from MinIO\ncurl https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_worker.yaml | \\\n  sed "s_BucketStateStore_GitStateStore_g" | \\\n  kubectl apply --context $PLATFORM --filename -\n'))),(0,r.kt)(o.Z,{value:"custom",label:"Custom",mdxType:"TabItem"},(0,r.kt)("p",null,"You will need to manual configure the Destination resources to use created State Store.\nDownload and modify this ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_worker.yaml"},"example configuration"),",\nreplacing the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.StateStoreRef.name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.StateStoreRef.namespace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.StateStoreRef.kind"),"\nto match the previously created State Store"))),(0,r.kt)("p",null,"Flux will eventually reconcile the clusters state, making the ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," cluster ready\nto receive workloads. You can verify its readiness by observing the ",(0,r.kt)("inlineCode",{parentName:"p"},"kratix-worker-system"),"\nnamespace appearing in the ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kubectl --context $WORKER get namespaces\nNAME                   STATUS   AGE\n...\nkratix-worker-system   Active   1m\n...\n")),(0,r.kt)("p",null,"\ud83c\udf89   ",(0,r.kt)("strong",{parentName:"p"},"Congratulations!")," Kratix is now installed! Jump to ",(0,r.kt)("a",{parentName:"p",href:"installing-a-promise"},"Installing and using a Promise")," to spin up your first as-a-service offering."))}d.isMDXComponent=!0}}]);