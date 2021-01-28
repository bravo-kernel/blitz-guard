(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(86)),c={id:"ability-file",title:"Ability file",sidebar_label:"Ability file",slug:"/ability-file"},l={unversionedId:"ability-file",id:"ability-file",isDocsHomePage:!1,title:"Ability file",description:"This file is the main entrypoint for your rules, it will instantiate Guard and assign the specified types.",source:"@site/docs/ability-file.md",slug:"/ability-file",permalink:"/blitz-guard/docs/ability-file",editUrl:"https://github.com/ntgussoni/blitz-guard/edit/main/docs/docs/ability-file.md",version:"current",sidebar_label:"Ability file",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/blitz-guard/docs/installation"},next:{title:"Abilities",permalink:"/blitz-guard/docs/abilities"}},o=[{value:"Rules",id:"rules",children:[{value:"Best practices",id:"best-practices",children:[]}]},{value:"Can &amp; Cannot",id:"can--cannot",children:[]}],b={toc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This file is the main entrypoint for your rules, it will instantiate Guard and assign the specified types."),Object(i.b)("p",null,"See: ",Object(i.b)("inlineCode",{parentName:"p"},"app/guard/ability.ts")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import db from "db"\nimport { GuardBuilder, PrismaModelsType } from "@blitz-guard/core"\n\ntype ExtendedResourceTypes = "comment" | "article" | PrismaModelsType<typeof db>\ntype ExtendedAbilityTypes = "send email"\n\nconst Guard = GuardBuilder<ExtendedResourceTypes, ExtendedAbilityTypes>(\n  async (ctx, { can, cannot }) => {\n    cannot("manage", "comment")\n    cannot("manage", "article")\n\n    can("read", "article")\n    can("read", "comment")\n\n    if (ctx.session.isAuthorized()) {\n      can("create", "article")\n      can("create", "comment")\n      can("send email", "comment")\n\n      can("delete", "comment", async (_args) => {\n        return (await db.comment.count({ where: { userId: ctx.session.userId } })) === 1\n      })\n    }\n  },\n)\n\nexport default Guard\n')),Object(i.b)("h2",{id:"rules"},"Rules"),Object(i.b)("p",null,"The ability file is read top to bottom, the bottom rules take more precedence that the ones at the top."),Object(i.b)("p",null,"Take the following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'...\n\nconst Guard = GuardBuilder(\n    can("create", "article")\n    cannot("create", "article")\n)\n\nGuard.can("create", "article",{},{}) // false\n\n')),Object(i.b)("h3",{id:"best-practices"},"Best practices"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Remove all permissions, give them one by one.")),Object(i.b)("p",null,"Your logic will be more direct and easier to follow, this reduces confusion and potential bugs."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'cannot("manage", "all") // This removes all abilities for all resources\ncan("create", "article")\n\nif (some_condition()) {\n  can("delete", "article")\n}\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Blitz Guard will allow everything unless you state otherwise. No rules means that everything is allowed."))),Object(i.b)("br",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"if guards look similar, take some code out of them")),Object(i.b)("p",null,"Guard will execute the guard condition if the rule matches the ability and resource.\nThis means that you should, whenever possible, take as much logic out of the rule's guard."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// Wrong \u274c\ncan("delete", "article", (ctx) => someHeavyMethod() === true)\ncan("update", "article", (ctx) => someHeavyMethod() === true)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// Right \u2705\nif (someHeavyMethod() === true) {\n  can("delete", "article")\n  can("update", "article")\n}\n')),Object(i.b)("h2",{id:"can--cannot"},"Can & Cannot"),Object(i.b)("p",null,"These two methods will determine what a user can or cannot do in your application."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"can(ability, resource, guard)\ncannot(ability, resource, guard)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"ability"),Object(i.b)("br",null),"\nThe action that the user can perform.",Object(i.b)("br",null),"\nDefault: ",Object(i.b)("inlineCode",{parentName:"p"},"create, read, update, delete, manage")," ",Object(i.b)("br",null),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"abilities"}),"More information"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"resource"),Object(i.b)("br",null),"\nThe subject of the action.",Object(i.b)("br",null),"\nDefault: ",Object(i.b)("inlineCode",{parentName:"p"},"all"),Object(i.b)("br",null),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"resources"}),"More information"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"guard")," (",Object(i.b)("em",{parentName:"p"},"optional"),"):",Object(i.b)("br",null),"\nIt's the condition for the rule to apply, ",Object(i.b)("em",{parentName:"p"},"args")," are passed down from a wrapped mutation or query or manually when calling ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://ntgussoni.github.io/blitz-guard/docs/secure-your-endpoints#check-rules-inside-a-querymutation"}),"Guard.can"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"async (args) => boolean")))))}s.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);