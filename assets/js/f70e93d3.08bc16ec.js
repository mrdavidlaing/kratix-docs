"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[9094],{4360:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(5893),r=s(1151);const o={id:"setup",title:"Prerequisites",description:"Find out what you need in installed before starting the workshop"},i=void 0,l={id:"workshop/setup",title:"Prerequisites",description:"Find out what you need in installed before starting the workshop",source:"@site/docs/workshop/01-pre-requisites.md",sourceDirName:"workshop",slug:"/workshop/setup",permalink:"/workshop/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/workshop/01-pre-requisites.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"setup",title:"Prerequisites",description:"Find out what you need in installed before starting the workshop"},sidebar:"workshopSidebar",previous:{title:"Overview",permalink:"/workshop/intro"},next:{title:"Part I",permalink:"/workshop/part-i/intro"}},c={},d=[{value:"Docker Resources",id:"docker-config",level:2},{value:"Delete pre-existing kind clusters",id:"delete-clusters",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this workshop, you will deploy Kratix on a local Kubernetes cluster, and deploy\nKratix workloads on another Kubernetes cluster. You will need the following\ntools:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kind"})," CLI / ",(0,t.jsx)(n.strong,{children:"Kubernetes-in-Docker (KinD)"}),": ",(0,t.jsx)("br",{}),"\nUsed to create and manage local Kubernetes clusters in Docker. ",(0,t.jsx)("br",{}),"\nSee ",(0,t.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/",children:"the quick start guide"})," to install."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"docker"})," CLI / ",(0,t.jsx)(n.strong,{children:"Docker"}),": ",(0,t.jsx)("br",{})," Used to orchestrate containers. ",(0,t.jsx)(n.code,{children:"kind"}),"\nrequires that you have Docker installed and configured. ",(0,t.jsx)("br",{})," See ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Get\nDocker"})," to install."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kubectl"})," / ",(0,t.jsx)(n.strong,{children:"Kubernetes command-line tool"}),": ",(0,t.jsx)("br",{})," The CLI for\nKubernetes\u2014allows you to run commands against Kubernetes clusters. ",(0,t.jsx)("br",{})," See ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"the install guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"yq"})," / ",(0,t.jsx)(n.strong,{children:"YAML parsing command-line tool"}),": ",(0,t.jsx)("br",{})," The CLI for\nKubernetes\u2014allows you to run parse and transform YAML files. This is only used in Part II. ",(0,t.jsx)("br",{})," See ",(0,t.jsx)(n.a,{href:"https://github.com/mikefarah/yq#install",children:"the install guide"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"You can run the workshop without KinD. Ideally, you will have access to two\nKubernetes clusters."}),(0,t.jsxs)(n.p,{children:["One cluster will be the Platform cluster, where Kratix will be installed.\nWhenever you see ",(0,t.jsx)(n.code,{children:"--context kind-platform"}),", replace it with the context of your\nplatform cluster."]}),(0,t.jsxs)(n.p,{children:["The other worker will be the Worker cluster. Whenever you see ",(0,t.jsx)(n.code,{children:"--context kind-worker"}),", replace it with the context of your worker cluster."]}),(0,t.jsxs)(n.p,{children:["If you want to try it on a single cluster, you can omit the ",(0,t.jsx)(n.code,{children:"--context"})," flag and\nargument entirely."]})]}),"\n",(0,t.jsx)(n.h2,{id:"docker-config",children:"Docker Resources"}),"\n",(0,t.jsx)(n.p,{children:"In order to complete all tutorials in this series, you must allocate enough\nresources to Docker. Ensure you allocate at least:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"5 CPU"}),"\n",(0,t.jsx)(n.li,{children:"12GB Memory"}),"\n",(0,t.jsx)(n.li,{children:"4GB swap"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This can be managed through your tool of choice (e.g. Docker Desktop, Rancher, etc)."}),"\n",(0,t.jsx)(n.h2,{id:"delete-clusters",children:"Delete pre-existing kind clusters"}),"\n",(0,t.jsx)(n.p,{children:"Ensure no clusters are currently running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ kind get clusters\nNo kind clusters found.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you have clusters named ",(0,t.jsx)(n.code,{children:"platform"})," or ",(0,t.jsx)(n.code,{children:"worker"})," please delete them with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kind delete clusters platform worker\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You are now ready to start. Navigate to the ",(0,t.jsx)(n.a,{href:"installing-kratix",children:"next\nsection"})," and get started!"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(7294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);