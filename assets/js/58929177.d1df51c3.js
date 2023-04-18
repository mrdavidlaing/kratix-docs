"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[9638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),o=r(4996);const i={description:"Kratix and Terraform can work well together. Find out how one complements the other.",title:"Kratix and Terraform",id:"terraform"},s=void 0,l={unversionedId:"main/how-kratix-complements/terraform",id:"main/how-kratix-complements/terraform",title:"Kratix and Terraform",description:"Kratix and Terraform can work well together. Find out how one complements the other.",source:"@site/docs/main/07-how-kratix-complements/02-kratix-and-terraform.md",sourceDirName:"main/07-how-kratix-complements",slug:"/main/how-kratix-complements/terraform",permalink:"/docs/main/how-kratix-complements/terraform",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/07-how-kratix-complements/02-kratix-and-terraform.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Kratix and Terraform can work well together. Find out how one complements the other.",title:"Kratix and Terraform",id:"terraform"},sidebar:"mainSidebar",previous:{title:"How Kratix Complements",permalink:"/docs/main/how-kratix-complements/intro"},next:{title:"Kratix and Crossplane",permalink:"/docs/main/how-kratix-complements/crossplane"}},c={},u=[{value:"What",id:"what",level:2},{value:"Why",id:"why",level:2},{value:"How",id:"how",level:2},{value:"Additional resources",id:"additional-resources",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},(0,n.kt)("a",{parentName:"strong",href:"https://www.terraform.io/"},"Terraform"))," is a tool for writing infrastructure as code. It is used to define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share.")),(0,n.kt)("img",{src:(0,o.Z)("/img/k+terraform_arch.png"),alt:"Sample architecture with Kratix and Terraform",style:{float:"right",width:"400px",margin:"20px 0 40px 40px"}}),(0,n.kt)("h2",{id:"what"},"What"),(0,n.kt)("p",null,"Terraform and Kratix both aim to enable infrastructure as code (IaC) but at different abstraction levels."),(0,n.kt)("p",null,"Terraform has a mature community that supports managing cloud and other SaaS tooling through their custom HCL programming language. Using HCL, platform teams are able to create, modify, and delete infrastructure in a declarative way."),(0,n.kt)("p",null,"Kratix enables platform teams to create ",(0,n.kt)("a",{parentName:"p",href:"/docs/main/reference/promises/intro"},"Promises"),". Promises define an API for thier users (application engineers) to easily request on demand infrastructure. Promises also define any steps required to fulfil that request including running Terraform or other IaC tools, validating business rules, and any additional steps like releasing software that runs on the provisioned Terraform infrastructure."),(0,n.kt)("h2",{id:"why"},"Why"),(0,n.kt)("p",null,"IaC has historically been implemented, and used, almost exclusively by platform and other infrastructure facing teams."),(0,n.kt)("p",null,"Today, there is a larger focus on making this infrastructure self-service by end users like application engineers. Think Databases-as-a-Service or test environments-as-a-Service. While IaC may be the implementation of how to fulfil these requests, it is not always clear to an end user how to leverage a module to create a new instance so it often requires a ticket for the infrastructure team to complete. This creates blocking queues for end users and increased toil for infrastructure and platform teams."),(0,n.kt)("p",null,"To provide on-demand services, a platform team is best suited decoupling their API for requesting a service from the implementation for how to create and manage them."),(0,n.kt)("h2",{id:"how"},"How"),(0,n.kt)("p",null,"Kratix enables platform teams to declare APIs that orchestrates workloads across your infrastructure. The orchestration of infrastructure can happnen in two ways in Kratix:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"via a declared ",(0,n.kt)("a",{parentName:"li",href:"/docs/main/reference/resource-requests/pipelines"},"pipeline")," that is executed as part of every Promise request"),(0,n.kt)("li",{parentName:"ul"},"via Kratix ",(0,n.kt)("a",{parentName:"li",href:"/docs/main/reference/multicluster-management"},"scheduling")," workloads onto Kubernetes Clusters using GitOps")),(0,n.kt)("p",null,"Kratix pipeline stages are a perfect place to execute sequential tasks such as running Terraform plans and applies, billing checks, security scans, audits, resource decoration and more. These tasks all happen automatically each time a user requests an instance of a Promise."),(0,n.kt)("p",null,"If you use tools like the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/kubernetes/kubernetes-operator"},"Terraform Cloud Operator")," by HashiCorp or the Weaveworks ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitops.weave.works/docs/terraform/get-started/"},"Terraform Controller")," then you can use the scheduling portion of Kratix to create your resources."),(0,n.kt)("br",null),(0,n.kt)("p",null,"If this sounds interesting to you, ",(0,n.kt)("a",{parentName:"p",href:"https://www.syntasso.io/contact-us"},"contact us")," and we can help you get started with Kratix and Backstage."),(0,n.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.syntasso.io/post/use-case-providing-self-service-environments-on-demand-using-kratix"},"Blog: How one of our early customers solved their QA environment challenges wiht Kratix and Terraform"))))}p.isMDXComponent=!0}}]);