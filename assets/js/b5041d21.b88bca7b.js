"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[2995],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return o?a.createElement(h,n(n({ref:t},u),{},{components:o})):a.createElement(h,n({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,n=new Array(i);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,n[1]=s;for(var d=2;d<i;d++)n[d]=o[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2086:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=o(7462),r=(o(7294),o(3905));const i={title:"Frequently Asked Questions",description:"Common questions about Kratix and how it fits in the Kubernetes ecosystem"},n="Frequently Asked Questions",s={unversionedId:"main/faq",id:"main/faq",title:"Frequently Asked Questions",description:"Common questions about Kratix and how it fits in the Kubernetes ecosystem",source:"@site/docs/main/06-faq.md",sourceDirName:"main",slug:"/main/faq",permalink:"/docs/main/faq",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/06-faq.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Frequently Asked Questions",description:"Common questions about Kratix and how it fits in the Kubernetes ecosystem"},sidebar:"mainSidebar",previous:{title:"Uninstalling Kratix",permalink:"/docs/main/reference/deleting-kratix"},next:{title:"How Kratix Complements",permalink:"/docs/main/how-kratix-complements/intro"}},l={},d=[{value:"What is the &quot;day two&quot; experience of a Kratix-based platform?",id:"what-is-the-day-two-experience-of-a-kratix-based-platform",level:3},{value:"Should the platform team or the application team be responsible for updating the version of a deployed instance? Who should be responsible for storage/network/other configuration?",id:"should-the-platform-team-or-the-application-team-be-responsible-for-updating-the-version-of-a-deployed-instance-who-should-be-responsible-for-storagenetworkother-configuration",level:3},{value:"How do I scan/validate/sign-off/log a request from a user before deploying the resources associated with their requested instance from a Promise?",id:"how-do-i-scanvalidatesign-offlog-a-request-from-a-user-before-deploying-the-resources-associated-with-their-requested-instance-from-a-promise",level:3},{value:"Is Kratix only useful for deploying simple services?",id:"is-kratix-only-useful-for-deploying-simple-services",level:3},{value:"My organisation would like to add all of our tooling as Promises to our platform, and some of our tools are challenging to deploy and manage. I worry a single platform team would get overwhelmed. How do I scale up?",id:"my-organisation-would-like-to-add-all-of-our-tooling-as-promises-to-our-platform-and-some-of-our-tools-are-challenging-to-deploy-and-manage-i-worry-a-single-platform-team-would-get-overwhelmed-how-do-i-scale-up",level:3},{value:"How do I manage roles/teams/credentials/identity/networking/other?",id:"how-do-i-manage-rolesteamscredentialsidentitynetworkingother",level:3},{value:"How do I schedule workloads to different clusters?",id:"how-do-i-schedule-workloads-to-different-clusters",level:3},{value:"How does Kratix compare to other tools?",id:"how-does-kratix-compare-to-other-tools",level:3},{value:"I use AWS, Google Cloud or Microsoft Azure. Why should I use Kratix?",id:"i-use-aws-google-cloud-or-microsoft-azure-why-should-i-use-kratix",level:3},{value:"I&#39;d like to invest/partner/buy. Who do I talk to?",id:"id-like-to-investpartnerbuy-who-do-i-talk-to",level:3}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"what-is-the-day-two-experience-of-a-kratix-based-platform"},'What is the "day two" experience of a Kratix-based platform?'),(0,r.kt)("p",null,'Kratix is intended to help platform teams deliver platforms in a sustainable way. Products are never "done", so a Platform-as-a-Product is never done. Instead, a platform is an opportunity to continuously learn about the best way to accelerate delivery in your organisation. Day two, three, four, etc. are equally as important as day one.'),(0,r.kt)("p",null,"In the future, Kratix will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add testing to Promises, so that:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The capability of the platform to deploy promised instances on-demand is continuously asserted, with Service-Level Objective(s) assigned against relevant Service-Level Indicator(s)"),(0,r.kt)("li",{parentName:"ul"},"The capability of each promised instance to deliver its Service-Level Objective(s) against relevant Service-Level indicator(s) is continuously asserted"))),(0,r.kt)("li",{parentName:"ul"},"Converge all deployed resources (cluster or instance) when a Promise is updated"),(0,r.kt)("li",{parentName:"ul"},"Converge individual instance resources when a user's request is updated")),(0,r.kt)("h3",{id:"should-the-platform-team-or-the-application-team-be-responsible-for-updating-the-version-of-a-deployed-instance-who-should-be-responsible-for-storagenetworkother-configuration"},"Should the platform team or the application team be responsible for updating the version of a deployed instance? Who should be responsible for storage/network/other configuration?"),(0,r.kt)("p",null,"The platform team should collaborate with the application teams when building\nPromises. The Promises should encapsulate the contract between the teams&em;the\nelements that application teams care about should be exposed via the API, and\nthe other elements should be configured by the platform team. The responsibility\nfor configuration, like storage settings, and lifecycle management, like whether\na particular upgrade is required, is often organisation specific, particularly\nfor bespoke Promises. A general guiding practice for responsibilities in\napplication versus platform teams is that cognitive load for operational concerns\nshould be as low as possible for application teams. Application teams should\nonly 'own' operations for aspects core to essential day-to-day delivery."),(0,r.kt)("h3",{id:"how-do-i-scanvalidatesign-offlog-a-request-from-a-user-before-deploying-the-resources-associated-with-their-requested-instance-from-a-promise"},"How do I scan/validate/sign-off/log a request from a user before deploying the resources associated with their requested instance from a Promise?"),(0,r.kt)("p",null,"Add images to the ",(0,r.kt)("inlineCode",{parentName:"p"},"xaasRequestPipeline")," array inside the Promise definition to ensure all relevant steps are fulfilled prior to scheduling an instance. See ",(0,r.kt)("a",{parentName:"p",href:"./guides/writing-a-promise"},"Writing a Promise")),(0,r.kt)("h3",{id:"is-kratix-only-useful-for-deploying-simple-services"},"Is Kratix only useful for deploying simple services?"),(0,r.kt)("p",null,"Quite the opposite. Kratix is at its most powerful when deploying complex\nservices. The more complexity that is moved from the application teams to the platform, the lower their cognitive load, and the more\nproductive they are. See the ",(0,r.kt)("a",{parentName:"p",href:"./guides/compound-promises"},"Compound Promises\npage")," for details on how you would create larger,\nmore complex Promises by combining Promises."),(0,r.kt)("h3",{id:"my-organisation-would-like-to-add-all-of-our-tooling-as-promises-to-our-platform-and-some-of-our-tools-are-challenging-to-deploy-and-manage-i-worry-a-single-platform-team-would-get-overwhelmed-how-do-i-scale-up"},"My organisation would like to add all of our tooling as Promises to our platform, and some of our tools are challenging to deploy and manage. I worry a single platform team would get overwhelmed. How do I scale up?"),(0,r.kt)("p",null,"Platform teams do not need to author all, or any, of the Promises in their platform. Kratix has a ",(0,r.kt)("a",{parentName:"p",href:"https://kratix.io/marketplace"},"marketplace")," of Promises for platform teams. When a platform requires something bespoke, the platform team can work with specialists and application teams to collaboratively author a Promise that encapsulates the technical requirements and business concerns specific to the context. Additionally, many larger organisations will ultimately support multiple, focused platforms. One value Kratix brings in scaling efforts is the ability to encapsulate concerns and easily share functionality across contexts."),(0,r.kt)("h3",{id:"how-do-i-manage-rolesteamscredentialsidentitynetworkingother"},"How do I manage roles/teams/credentials/identity/networking/other?"),(0,r.kt)("p",null,"Core Kratix functionality is evolving to utilise the best of the Kubernetes ecosystem for all of these concerns. Additionally the Kratix ",(0,r.kt)("a",{parentName:"p",href:"https://kratix.io/marketplace"},"marketplace")," has a number of Promises for tools in this space."),(0,r.kt)("h3",{id:"how-do-i-schedule-workloads-to-different-clusters"},"How do I schedule workloads to different clusters?"),(0,r.kt)("p",null,"Good news! We've created a page in our docs around how Kratix ",(0,r.kt)("a",{parentName:"p",href:"./reference/multicluster-management"},"schedules its\nworkloads"),"."),(0,r.kt)("h3",{id:"how-does-kratix-compare-to-other-tools"},"How does Kratix compare to other tools?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./value-of-kratix#comparison-with-other-tools"},"See here")),(0,r.kt)("h3",{id:"i-use-aws-google-cloud-or-microsoft-azure-why-should-i-use-kratix"},"I use AWS, Google Cloud or Microsoft Azure. Why should I use Kratix?"),(0,r.kt)("p",null,'The big public cloud providers offer tremendous power and functionality. Unfortunately, they also require expert knowledge, experience, time, and effort to deliver results in your organisation. Running a multi-cloud multi-cluster Kubernetes-based topology, powered by Kratix and a sustainable platform team, is the best way for your application teams to leverage the power of public clouds without being "locked in" to a vendor.'),(0,r.kt)("h3",{id:"id-like-to-investpartnerbuy-who-do-i-talk-to"},"I'd like to invest/partner/buy. Who do I talk to?"),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"https://www.syntasso.io/contact-us"},"contact Syntasso"),"."))}p.isMDXComponent=!0}}]);