"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[6279],{8524:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(5893),r=i(1151);const s={description:"Documentation for deleting a Kratix Promise",title:"Deleting a Promise",sidebar_label:"Deleting"},o=void 0,a={id:"main/reference/promises/delete",title:"Deleting a Promise",description:"Documentation for deleting a Kratix Promise",source:"@site/docs/main/05-reference/04-promises/02-delete.md",sourceDirName:"main/05-reference/04-promises",slug:"/main/reference/promises/delete",permalink:"/main/reference/promises/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/04-promises/02-delete.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Documentation for deleting a Kratix Promise",title:"Deleting a Promise",sidebar_label:"Deleting"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/main/reference/promises/intro"},next:{title:"Updates",permalink:"/main/reference/promises/updates"}},l={},d=[];function c(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Deleting a Promise will cascade delete all the associated requested Resources and Dependencies."})}),"\n",(0,n.jsxs)(t.p,{children:["To delete a Promise, run the command below, making sure to replace the\n",(0,n.jsx)(t.code,{children:"<promise name>"})," with the Promise you want to remove:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell-session",children:"$ kubectl delete promises.platform.kratix.io <promise-name>\n"})}),"\n",(0,n.jsx)(t.p,{children:"Alternatively you can delete a Promise by providing the Promise definition file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell-session",children:"$ kubectl delete --filename promise.yaml\n"})}),"\n",(0,n.jsx)(t.p,{children:"Deleting a Promise will take a few minutes to complete while Kratix deletes all the workloads associated with Promise. This includes any requested Resources and all the Promise's Dependencies."}),"\n",(0,n.jsx)(t.p,{children:"All workloads created by the Promise are applied to the workers using GitOps. This mean that when Kratix deletes the workloads it is removing their definitions from the Destination's State Store and is delegating the responsibility to delete them from the worker infrastructure to the GitOps or other deployment solution on the workers. This results in a small delay between the resources being declared as deleted and them being actually deleted."})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var n=i(7294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);