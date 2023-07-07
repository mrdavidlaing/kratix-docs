"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[6485],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return a?o.createElement(h,i(i({ref:t},d),{},{components:a})):o.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9725:(e,t,a)=>{a.d(t,{ZP:()=>l,d$:()=>i});var o=a(7462),r=(a(7294),a(3905)),n=a(4996);const i=[{value:"Designing the right Promise for a single service",id:"designing-the-right-promise-for-a-single-service",level:2},{value:"A standardised development tool...",id:"a-standardised-development-tool",level:3},{value:"...optimised for scale...",id:"optimised-for-scale",level:3},{value:"...pre-configured to meet your business requirements...",id:"pre-configured-to-meet-your-business-requirements",level:3},{value:"...and automatically secured according to your policies.",id:"and-automatically-secured-according-to-your-policies",level:3},{value:"Designing the right Golden Paths with multiple Promises",id:"designing-the-right-golden-paths-with-multiple-promises",level:2},{value:"Learn more",id:"learn-more",level:2},{value:"Get in touch",id:"get-in-touch",level:2}],s={toc:i};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"What about further enhancements? What about more Promises?"),(0,r.kt)("h2",{id:"designing-the-right-promise-for-a-single-service"},"Designing the right Promise for a single service"),(0,r.kt)("img",{align:"right",width:"500px",src:(0,n.Z)("/img/docs/Treasure_Trove-Final_Thoughts-Single_Promise.jpeg"),alt:"Single Kratix Promise"}),(0,r.kt)("p",null,"Platform teams in any form add tremendous value to an organisation. They reduce cognitive load for application teams, which enables those teams to have faster 'flow'."),(0,r.kt)("p",null,"However, reducing cognitive load for application teams generally, in our experience, increases toil for platform team members. The closer a platform team gets to effective enablement of application teams, the higher the likelihood is that behind the scenes, platform team members are stretched beyond capacity."),(0,r.kt)("p",null,"Here is an experience you might have on a platform team as you work to support your application teams who need data storage for their applications."),(0,r.kt)("p",null,"What you aim to deliver is:"),(0,r.kt)("h3",{id:"a-standardised-development-tool"},"A standardised development tool..."),(0,r.kt)("p",null,"But through a Slack message, you happen to learn that four application teams are all using four different flavours of Postgres. Each team's database is in a different cloud, each has a different backup strategy, and each uses different levels of monitoring."),(0,r.kt)("h3",{id:"optimised-for-scale"},"...optimised for scale..."),(0,r.kt)("p",null,"However after learning about the four 'shadow IT' Postgres databases, you poll application teams and realise the problem is bigger than you thought. Now you need to manually intervene in each team's backlog to audit the situation and ensure each database is healthy and compliant."),(0,r.kt)("h3",{id:"pre-configured-to-meet-your-business-requirements"},"...pre-configured to meet your business requirements..."),(0,r.kt)("p",null,"Requirements are fixed, but you have to deal with the nuance in each type of Postgres. So you have to manually enforce quotas via your audits at the end of each month; manually reconcile resources, teams, and billed cost centres; and manually inform interested stakeholders when costs change."),(0,r.kt)("h3",{id:"and-automatically-secured-according-to-your-policies"},"...and automatically secured according to your policies."),(0,r.kt)("p",null,"Security is complex, and each Postgres defines their security details in different places. So you need to manually verify that each Postgres configuration is acceptable according to the broader security protocols; manually make sure proper sign-off has happened before deployments move forward; and manually run third-party software against code that is being shipped to make sure dependencies don't have vulnerabilities."),(0,r.kt)("br",null),(0,r.kt)("p",null,"This example has ",(0,r.kt)("em",{parentName:"p"},"a lot")," of platform concerns, and we've only listed a few."),(0,r.kt)("p",null,"With Kratix you can develop a platform that will easily ",(0,r.kt)("em",{parentName:"p"},"offer standardised development tools"),", ",(0,r.kt)("em",{parentName:"p"},"optimised for scale"),", that is ",(0,r.kt)("em",{parentName:"p"},"pre-configured to meet your business requirements")," and ",(0,r.kt)("em",{parentName:"p"},"secured according to your policies"),"."),(0,r.kt)("p",null,"Stepping back, the beauty of Kratix is in its flexibility. It allows you to encapsulate a service in a Promise with a robust Workflow. Our example above highlights some of the most common challenges where Kratix has helped platform teams we've worked with move past toil toward higher-value enablement. But we know your organisational challenges are unique, and Kratix is built so that you can adapt it to your context."),(0,r.kt)("h2",{id:"designing-the-right-golden-paths-with-multiple-promises"},"Designing the right Golden Paths with multiple Promises"),(0,r.kt)("img",{align:"right",width:"500px",src:(0,n.Z)("/img/docs/Treasure_Trove-Final_Thoughts-Higher_Level_Promise.jpeg"),alt:"Higher level Promise"}),(0,r.kt)("p",null,"The value of your platform increases dramatically when you offer application teams tailored Golden Paths. A ",(0,r.kt)("a",{parentName:"p",href:"https://www.syntasso.io/post/paving-golden-paths-on-multi-cluster-kubernetes-part-1-the-theory"},"\u201cGolden Path\u201d")," is the opinionated and supported path to \u201cbuild something\u201d. Imagine a complete development environment setup","\u2014","networking, integration, security, governance, compliance, and deployment","\u2014","all available on demand. By paving a Golden Path the platform team makes doing the right thing easy for application teams."),(0,r.kt)("p",null,"Creating a Golden Path on Kratix is easy: decide on, define, and install the individual Promises that are required, then define a higher-level Promise that brings those individual Promises together."),(0,r.kt)("p",null,"An application developer goes from making separate requests to get access to each individual Resource to being able to make one single request to get a higher level Resource that is pre-configured, ready-to-go instances of everything they need."),(0,r.kt)("p",null,"We believe composable Promises are at the core of the value that Kratix provides to platform teams."),(0,r.kt)("p",null,"Take a moment to imagine the most valuable bundle of services that your platform could offer to your application teams. Now that you've had experience building a platform with Kratix, translate that bundle of services into a composed Promise using Kratix."),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"If the idea of treating your platform as-a-Product is new concept to you, watch ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("a",{parentName:"em",href:"https://youtu.be/pAk5GReIs90"},"Crossing the Platform Gap"))," short talk below by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/PaulaLKennedy"},"Paula Kennedy")," or read our two-part series about ",(0,r.kt)("a",{parentName:"p",href:"https://www.syntasso.io/post/paving-golden-paths-on-multi-cluster-kubernetes-part-1-the-theory"},"Paving Golden Paths")," on the Syntasso blog."),(0,r.kt)("div",{style:{"text-align":"center"}},(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pAk5GReIs90",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"get-in-touch"},"Get in touch"),(0,r.kt)("p",null,"\ud83d\udcad","\xa0","\xa0"," If learning about Kratix and platforms as products sounds intriguing and you'd like to chat with us, we'd love to hear from you. Please reach out on ",(0,r.kt)("a",{parentName:"p",href:"https://www.syntasso.io/contact-us"},"https://www.syntasso.io/contact-us"),"."))}l.isMDXComponent=!0},8924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=a(7462),r=(a(7294),a(3905)),n=a(9725);const i={description:"Ideas on how to treat your Platform as a Product and how to go about writing your Promises",title:"What's next?"},s=void 0,l={unversionedId:"main/guides/whats-next",id:"main/guides/whats-next",title:"What's next?",description:"Ideas on how to treat your Platform as a Product and how to go about writing your Promises",source:"@site/docs/main/04-guides/09-whats-next.md",sourceDirName:"main/04-guides",slug:"/main/guides/whats-next",permalink:"/docs/main/guides/whats-next",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/04-guides/09-whats-next.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Ideas on how to treat your Platform as a Product and how to go about writing your Promises",title:"What's next?"},sidebar:"mainSidebar",previous:{title:"Compound Promise",permalink:"/docs/main/guides/compound-promises"},next:{title:"Reference",permalink:"/docs/category/reference"}},u={},d=[...n.d$],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.ZP,{mdxType:"WhatsNext"}))}c.isMDXComponent=!0}}]);