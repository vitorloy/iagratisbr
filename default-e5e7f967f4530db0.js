!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="967b928a-c5e7-491f-968c-fad1a4061249",e._sentryDebugIdIdentifier="sentry-dbid-967b928a-c5e7-491f-968c-fad1a4061249")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{44843:function(e,t,a){Promise.resolve().then(a.bind(a,43776)),Promise.resolve().then(a.bind(a,61153))},59264:function(e,t,a){"use strict";a.d(t,{A:function(){return r}});let r=(0,a(85922).k)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",17)},43776:function(e,t,a){"use strict";a.d(t,{SidebarView:function(){return ej}});var r=a(37821),l=a(17344),n=a(73164),s=a(58078),i=a(77391),o=a(64722),d=a(56164),c=a(34714),u=a(59406),x=a(39565),m=a(23224),h=a(84578),f=a.n(h),b=a(78781),g=a(75005),p=a(82813),v=a(22577),y=a(9799),j=a(7268),k=a(77362),N=a(56942);let w=e=>{let{id:t,className:a="",...l}=e,n=(0,s.useId)();return(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{type:"checkbox",className:"sr-only",id:null!=t?t:n,...l}),(0,r.jsx)("label",{htmlFor:null!=t?t:n,className:"\n          flex-none w-10 h-6 bg-gray-400 [:checked+&]:bg-blue-500\n          rounded-full relative appearance-none\n          cursor-pointer transition-colors duration-200\n          before:block before:w-[18px] before:h-[18px] before:bg-white before:rounded-full\n          before:m-[3px] before:relative before:transition-transform before:duration-200\n          [:checked+&]:before:translate-x-4\n          [:disabled+&]:opacity-50 [:disabled+&]:pointer-events-none\n          ".concat(a,"\n        ")})]})};function C(){let[e,t]=(0,s.useState)(!1),[a,l]=(0,s.useState)("/default_avatar.png"),[n,i]=(0,s.useState)("/default_avatar.png"),[o,d]=(0,s.useState)(""),[c,u]=(0,s.useState)("");return(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/profile",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await e.json();if(t.error){console.error("Error fetching profile:",t.error.message);return}l((null==t?void 0:t.avatar_url)||"/default_avatar.png"),i((null==t?void 0:t.avatar_url)||"/default_avatar.png"),d(t.username),u(t.username)}catch(e){console.error("Error fetching profile:",e)}})()},[]),(0,r.jsxs)(b.Vq.Root,{open:e,onOpenChange:t,children:[(0,r.jsx)(b.Vq.Trigger,{children:(0,r.jsx)("button",{className:"relative p-2",children:(0,r.jsx)("img",{src:n,alt:"User Avatar",className:"w-6 h-6 rounded-full border border-1 border-white dark:border-neutral-600",onError:e=>{"/default_avatar.png"!==e.target.src&&(e.target.src="/default_avatar.png")}})})}),(0,r.jsx)(b.Vq.Content,{maxWidth:"450px",children:(0,r.jsx)(D,{savedAvatarUrl:a,avatarUrl:n,setAvatarUrl:i,savedUsername:o,username:c,setUsername:u,setOpen:t})})]})}function D(e){var t;let{savedAvatarUrl:a,avatarUrl:l,setAvatarUrl:n,savedUsername:i,username:o,setUsername:d,setOpen:c}=e,u=(0,N.Pi)(),x=(0,N.rV)(),m=(0,N.eP)(),[h,f]=(0,s.useState)(null!==(t=null==x?void 0:x.model)&&void 0!==t?t:"sonnet"),[g,C]=(0,s.useState)(u),D=async()=>{m({model:h}),(0,N.Lb)(g);try{let e=l;if(l.startsWith("data:")){let t=await fetch("/api/avatar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({dataUrl:l})});e=(await t.json()).data.url}let t={avatar_url:e,username:o};await fetch("/api/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),c(!1)}catch(e){console.error("Error updating profile:",e),alert("Error updating profile. Please try again.")}},S=(0,k.useQuery)({queryKey:["username",o],queryFn:async()=>o.length<3||i===o?null:(await fetch("/api/profile/".concat(o),{method:"GET",headers:{"Content-Type":"application/json"}})).json()}),T=S.isLoading||!!S.data||!/^[a-zA-Z0-9_]{3,32}$/.test(o);return(0,r.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:e=>{e.preventDefault(),T||D()},children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,r.jsxs)("h2",{className:"flex items-center text-2xl font-bold gap-4",children:[(0,r.jsx)(v.Z,{className:"w-6 h-6"}),"Profile"]}),(0,r.jsx)("button",{type:"button",onClick:E,className:"text-gray-500 text-sm py-2 hover:opacity-70 dark:text-neutral-400",children:"Logout"})]}),(0,r.jsxs)("div",{className:"mb-4 flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"avatar-upload",className:"block mb-2",children:"Avatar:"}),(0,r.jsx)("img",{src:l,alt:"Avatar",className:"w-20 h-20 rounded-full mb-2"}),(0,r.jsx)("input",{type:"file",id:"avatar-upload",accept:"image/*",onChange:e=>{var t;let a=null===(t=e.target.files)||void 0===t?void 0:t[0];if(a){let e=new FileReader;e.onload=()=>{n(e.result)},e.readAsDataURL(a)}},className:"inset-0 text-xs"})]}),(0,r.jsxs)("div",{className:"mb-4 flex flex-row justify-between items-start",children:[(0,r.jsx)("label",{htmlFor:"username",className:"block leading-10",children:"Username:"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",id:"username",value:o,onChange:e=>d(e.target.value),minLength:3,maxLength:32,pattern:"^[a-zA-Z0-9_]{3,32}$",className:" border border-gray-300 rounded-md px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800 user-invalid:border-red-500 "}),S.data?(0,r.jsxs)("div",{className:"text-xs text-red-500",children:['Username "',o,'" is already taken']}):null,(0,r.jsx)("div",{className:["text-xs",o.length<3||o.length>32?"text-red-500":"text-green-600"].join(" "),children:"Between 3 and 32 characters"}),(0,r.jsx)("div",{className:["text-xs",/^[a-zA-Z0-9_]*$/.test(o)?"text-green-600":"text-red-500"].join(" "),children:"Only letters, numbers, and underscores"})]})]}),(0,r.jsxs)("div",{className:"mb-4 flex flex-row justify-between items-center",children:[(0,r.jsx)("label",{htmlFor:"dark",className:"block",children:"Dark Mode:"}),(0,r.jsx)(w,{defaultChecked:(0,s.useMemo)(()=>document.documentElement.classList.contains("dark"),[]),onChange:e=>{let t=e.target.checked;t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),document.cookie="nosleep=".concat(t,"; path=/; max-age=").concat(2147483648-1)}})]})]}),(0,r.jsx)("div",{className:"flex flex-col gap-2",children:(0,r.jsxs)(p.pJ,{children:[(0,r.jsxs)(p.lG,{className:"group flex items-center justify-between mb-4",children:[(0,r.jsxs)("h2",{className:"flex items-center text-2xl font-bold gap-4 group-data-[open]:mb-4 mb-8",children:[(0,r.jsx)(y.Z,{className:"w-6 h-6"}),"Settings"]}),(0,r.jsx)(j.Z,{className:"w-6 h-6 group-data-[open]:rotate-180 group-data-[open]:mb-4 mb-8"})]}),(0,r.jsx)(p.V2,{className:"data-[open]:mb-8 mb-0",children:(0,r.jsx)(_,{model:h,setModel:f,apiKey:g,setApiKey:C})})]})}),(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsxs)("div",{className:"flex-1 flex justify-end",children:[(0,r.jsx)(b.Vq.Close,{children:(0,r.jsx)("button",{type:"button",className:"bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2",onClick:()=>{d(i),n(a)},children:"Cancel"})}),(0,r.jsx)("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50",disabled:T,children:"Save Changes!"})]})})]})}function _(e){let{model:t,setModel:a,apiKey:l,setApiKey:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,r.jsx)("label",{htmlFor:"model",children:"Default Model"}),(0,r.jsxs)("select",{value:t||"",id:"model",className:"border border-gray-300 rounded-md px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800",onChange:e=>{a(e.target.value)},children:[(0,r.jsx)("option",{value:"haiku",children:"Haiku"}),(0,r.jsx)("option",{value:"sonnet",children:"Sonnet (3.5)"}),(0,r.jsx)("option",{value:"opus",children:"Opus"}),(0,r.jsx)("option",{value:"gpt-4o",children:"GPT-4o"}),(0,r.jsx)("option",{value:"claude-3-sonnet",children:"Sonnet (3)"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-between mb-4"}),(0,r.jsxs)("div",{className:"flex justify-between mb-4 flex-col",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-4 flex-1",children:[(0,r.jsx)("label",{htmlFor:"apiKey",children:"Custom API Key"}),(0,r.jsx)("input",{type:"text",className:"border border-gray-300 rounded-md px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800",placeholder:"Optional",defaultValue:l,onChange:e=>{e.target.value?n(e.target.value):n(void 0)}})]}),(0,r.jsxs)("div",{className:"text-xs",children:["Use either an"," ",(0,r.jsx)("a",{href:"https://openrouter.ai",className:"text-blue-500 hover:text-blue-700",target:"_blank",children:"OpenRouter"})," ","or"," ",(0,r.jsx)("a",{href:"https://anthropic.com",className:"text-blue-500 hover:text-blue-700",target:"_blank",children:"Anthropic"})," ","API Key. We recommend OpenRouter as it has less rate limiting."]})]})]})}async function E(){let e=(0,g.e)();await e.auth.signOut(),window.location.href="/"}let S=e=>{let{pinned:t,onPin:a,renderBookmarks:l,renderHistory:n,onClose:h,fullScreen:b}=e,g=(0,i.Tk)(),p=(0,s.useContext)(o.fP);return(0,r.jsxs)("div",{className:"\n      shadow-xl bg-clip-padding\n      @container flex-1 flex flex-col\n      bg-gray-100\n      dark:bg-neutral-700\n      ring-1 ring-gray-200/50 dark:ring-neutral-50/20\n      z-10\n      ".concat(b?"":"rounded-lg","\n      overflow-y-auto\n    "),onClick:()=>{f()()||p("open")},children:[(0,r.jsxs)("div",{className:"flex space-between items-end",children:[(0,r.jsxs)("div",{className:"flex flex-1 items-center flex-row gap-0 h-12",children:[(0,r.jsx)(d.T,{className:"text-xl p-4 justify-center"}),(0,r.jsx)("div",{className:"flex-0 flex h-full items-center justify-center",children:!f()()&&(0,r.jsx)("button",{onClick:()=>{t?h():a()},className:" flex-0 hover:opacity-80 rounded-lg items-center justify-center px-4 py-2 text-gray-500 bg-gray-200 mt-[3px] dark:bg-neutral-500 dark:text-neutral-100 ",children:t?(0,r.jsx)(c.Z,{className:"w-4 h-4"}):(0,r.jsx)(u.Z,{className:"w-4 h-4"})})})]}),(0,r.jsxs)("div",{className:"flex-0 flex flex-row gap-2 pr-2",children:[(0,r.jsx)("button",{className:"".concat("bookmarks"===g?"bg-white dark:bg-neutral-900":"bg-gray-200 dark:bg-neutral-800"," flex-0 rounded-lg rounded-b-none px-4 pt-3 pb-1 hover:opacity-80"),onClick:()=>(0,i.$5)("bookmarks"),children:(0,r.jsx)(x.Z,{className:"w-6 h-6 mb-1"})}),(0,r.jsx)("button",{className:"".concat("history"===g?"bg-white dark:bg-neutral-900":"bg-gray-200 dark:bg-neutral-800"," flex-0 rounded-lg rounded-b-none px-4 pt-3 pb-1 hover:opacity-80"),onClick:()=>(0,i.$5)("history"),children:(0,r.jsx)(m.Z,{className:"w-6 h-6 mb-1"})}),(0,r.jsx)("div",{className:"flex-0 flex items-center justify-center pt-1",children:(0,r.jsx)(C,{})})]})]}),"bookmarks"===g?l():n()]})};var T=a(25260),q=a(26262),P=a(14233),F=a(74703),O=a(77452),Z=a(75380),A=a(17363),L=a(59264),I=a(11696);function M(e,t){return(0,I.l)(a=>{"public"===e.visibility?a.pathname=Q(e,t):a.pathname="/c/".concat(e.site_id),a.searchParams.set("b",e.id)})}function Q(e,t){let a="/@".concat(t,"/").concat(e.slug);return"profile"===e.slug&&(a="/@".concat(t)),a}var R=a(61153);let z=new Intl.DateTimeFormat("en",{year:"numeric",month:"long",day:"numeric"});function B(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function K(e,t){let a=new Date(t);return a.setDate(a.getDate()-1),e.getDate()===a.getDate()&&e.getMonth()===a.getMonth()&&e.getFullYear()===a.getFullYear()}var U=a(35764),V=a(12306),$=a(60665),Y=a(57893),W=a(82125),G=a(32159),J=a(51146),H=a(53644);function X(e,t){return t=t.replace(/-$/g,""),(e.slice(0,50-t.length)+t).replace(/--+/g,"-")}let ee=H.z.object({id:H.z.string(),title:H.z.string().min(1)}).and(H.z.object({visibility:H.z.literal("private").optional().default("private")}).or(H.z.object({visibility:H.z.literal("public"),slug:H.z.string().min(3).max(50).regex(/^[a-zA-Z0-9-]+$/,"Invalid slug")})));function et(e){null==e||e.dispatchEvent(new SubmitEvent("submit",{cancelable:!0,bubbles:!0}))}let ea=e=>{let{className:t="",...a}=e;return(0,r.jsx)("label",{className:"text-sm font-semibold block mb-1 dark:text-neutral-100 ".concat(t),...a})},er=e=>{let{className:t="",...a}=e;return(0,r.jsx)("div",{className:"flex flex-col gap-1 ".concat(t),...a})},el=e=>{let{className:t,...a}=e;return(0,r.jsx)("input",{className:"\n        border border-gray-200 dark:border-neutral-700 rounded-md\n        dark:bg-neutral-800 dark:text-white\n        px-2 w-full text-sm\n        h-8\n        aria-invalid:border-red-500\n        ".concat(t,"\n      "),...a})},en=function(e){var t;let{className:a,bookmark:l,username:n,formRef:o,formElementRef:d}=e,{data:c}=(0,A.S7)(),u=(0,s.useMemo)(()=>c||[],[c]),m=(0,O.Wo)(),h=(0,O.Iq)(),f=l.site_id===h,g=(0,A.CQ)(),[p,v]=(0,V.cI)({onValidate(e){let{formData:t}=e;return(0,Y.P)(t,{schema:ee})},defaultValue:l,shouldValidate:"onInput",onSubmit(e,t){let{formData:a}=t;e.preventDefault();let r=ee.parse(Object.fromEntries(a.entries()));g.mutateAsync({...r,id:l.id})}});p&&(o.current=p);let y=(0,s.useMemo)(()=>(function(e,t){let a=e.title.toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/--+/g,"-").replace(/^-|-$/g,"").slice(0,50),r=a.replace(/-\d+$/,"");if(!t.some(t=>t.id!==e.id&&a===t.slug))return a;let l=1;for(;t.find(e=>e.slug===X(r,"-".concat(l)));)l++;return X(r,"-".concat(l))})(l,u),[u,l]),j=(null==m?void 0:m.title.trim())!==(null===(t=v.title.value)||void 0===t?void 0:t.trim()),k=y!==l.slug,[N,C]=(0,s.useState)(j),[D,_]=(0,s.useState)(k);N!==j&&C(j),D!==k&&_(k);let E=(0,A.LP)();return(0,r.jsxs)("form",{autoComplete:"off",className:a,ref:d,onKeyDown:e=>{if(e.defaultPrevented)return},...(0,$.si)(p),children:[(0,r.jsxs)("div",{className:"flex flex-1 p-2 items-center justify-between",children:[(0,r.jsx)("div",{className:"text-sm font-semibold px-2 dark:text-neutral-100",children:"Edit Bookmark"}),(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(b.u,{content:"Delete Bookmark",children:(0,r.jsx)("button",{role:"checkbox",tabIndex:-1,"aria-label":"delete bookmark","aria-checked":f,className:"\n                pointer-events-auto\n                w-5 h-5\n                flex items-center justify-center rounded-sm\n                disabled:opacity-50\n                hover:bg-gray-200\n                dark:hover:bg-neutral-700\n              ",onClick:async()=>{await E.mutateAsync(l.id)},children:(0,r.jsx)(W.Z,{className:"w-4 h-4\n                stroke-red-500\n                dark:stroke-teal-200\n            "})})}),(0,r.jsx)(b.u,{content:f?"Updated!":"Update bookmark to current page",children:(0,r.jsx)("button",{disabled:!h||(0,Z.kM)(h)||f,role:"checkbox","aria-label":"update bookmark","aria-checked":f,className:"\n                pointer-events-auto\n                w-5 h-5\n                flex items-center justify-center rounded-sm\n                [&:not(:aria-checked)]:bg-gray-100\n                [&:not(:aria-checked)&:hover]:bg-gray-200\n                [&:not(:aria-checked)&:disabled]:opacity-50\n                group\n              ",onClick:async()=>{h&&(await g.mutateAsync({id:l.id,site_id:h}),(0,i.Me)(l.id))},children:(0,r.jsx)(x.Z,{className:" w-4 h-4 dark:text-neutral-200 group-aria-checked:stroke-yellow-400 group-aria-checked:fill-yellow-400 dark:group-aria-checked:stroke-sky-400 dark:group-aria-checked:fill-sky-400 "})})})]})]}),(0,r.jsx)("hr",{className:"botder border-t border-gray-200 dark:border-neutral-700"}),(0,r.jsx)("input",{type:"hidden",name:"id",value:l.id}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 p-4",children:[(0,r.jsxs)(er,{children:[(0,r.jsx)(ea,{htmlFor:v.title.id,children:"Title"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(el,{className:N?"pr-6":"",onChange:e=>{C(e.currentTarget.value.trim()!==(null==m?void 0:m.title.trim()))},onBlur:e=>{var t;e.currentTarget.value=e.currentTarget.value.trim(),e.currentTarget.value!==(null===(t=l.title)||void 0===t?void 0:t.trim())&&p.valid&&et(d.current)},...(0,$.TC)(v.title,{type:"text"})}),N&&(null==m?void 0:m.title)&&h===l.site_id?(0,r.jsxs)("button",{type:"button",className:"absolute right-2 top-1/2 transform -translate-y-1/2",onClick:()=>{d.current.elements.namedItem("title").value=m.title.trim(),C(!1),p.valid&&et(d.current)},children:[(0,r.jsx)(G.Z,{className:"w-4 h-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Reset title to site title"})]}):null]}),v.title.errors?(0,r.jsx)("div",{className:"text-sm text-red-600",children:v.title.errors.join(", ")}):null]}),(0,r.jsxs)(er,{children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)(ea,{className:"mb-1",htmlFor:v.visibility.id,children:"Publish"}),(0,r.jsx)(w,{onChange:e=>{if(e.target.checked){let e=d.current.elements.namedItem("slug");e.value||(e.value=y,_(!1))}p.validate(),p.valid&&et(d.current)},...(0,$.TC)(v.visibility,{type:"checkbox",value:"public"})})]}),(0,r.jsx)("div",{className:"text-sm text-gray-600 dark:text-neutral-400",children:"Makes this bookmark visible to everyone with the link configured below."}),v.visibility.errors]}),(0,r.jsxs)(er,{className:"public"===v.visibility.value||"public"===l.visibility?"":"opacity-50 pointer-events-none",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,r.jsx)(ea,{htmlFor:v.slug.id,children:"Link"}),(0,r.jsx)("div",{className:"flex gap-4 items-center",children:"public"===l.visibility&&(0,r.jsxs)("a",{href:"".concat(window.location.origin).concat(Q(l,n)),className:"text-sm flex gap-1 items-center text-blue-500",onClick:e=>{e.altKey||e.ctrlKey||e.metaKey||0!==e.button||(e.preventDefault(),navigator.clipboard.writeText("".concat(window.location.origin).concat(Q(l,n))))},children:[(0,r.jsx)(J.Z,{className:"w-4 h-4"}),"Copy Link"]})})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(el,{readOnly:"public"!==v.visibility.value&&"public"!==l.visibility,placeholder:y,className:D?"pr-6":"",onChange:e=>{(function(e,t){let a=e.selectionStart,r="";for(let l=0;l<e.value.length&&r.length<t.maxLength;l++)t.mask.test(e.value[l])?r+=e.value[l]:a&&l<a&&a--;e.value=r,a&&e.setSelectionRange(a,a)})(e.currentTarget,{mask:/[a-zA-Z0-9-]/,maxLength:50}),_(e.currentTarget.value!==y)},onBlur:e=>{e.currentTarget.value!==l.slug&&p.valid&&et(d.current)},...(0,$.TC)(v.slug,{type:"text"})}),D&&("public"===v.visibility.value||"public"===l.visibility)?(0,r.jsxs)("button",{type:"button",className:"absolute right-2 top-1/2 transform -translate-y-1/2",onClick:e=>{d.current.elements.namedItem("slug").value=y,_(!1),p.validate(),p.valid&&et(d.current)},children:[(0,r.jsx)(G.Z,{className:"w-4 h-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Reset link"})]}):null]}),(0,r.jsx)("div",{className:"flex justify-start",children:(0,r.jsx)(P.default,{href:M(l,n),className:"text-gray-500 [a&]:text-blue-500 text-xs flex items-center gap-0.5 truncate",children:(0,r.jsxs)("div",{className:"truncate",children:["websim.ai",Q(l,n)||"public"!==l.visibility&&y]})})}),v.slug.errors?(0,r.jsx)("div",{className:"text-sm text-red-600",children:v.slug.errors.join(", ")}):null]}),(0,r.jsx)("button",{className:"sr-only",children:"Save"})]})]})};var es=a(90168),ei=a(4387),eo=a(87202);let ed=e=>{let{bookmark:t,profile:a}=e,n=(0,O.Iq)()===t.site_id,{ref:o,width:d}=(0,F.Z)(),c=(0,s.useMemo)(()=>M(t,a.username),[t,a]),u=(0,s.useContext)(l.Ec),x=(0,i.ye)()===t.id,m=(0,es.useRouter)(),{attributes:h,listeners:b,setNodeRef:g,isDragging:p,transform:v}=(0,eo.O1)({id:"bookmarkList".concat(t.site_id),data:{id:t.site_id,source:"bookmarkList"}});return ei.ux.Transform.toString(v),(0,s.createElement)("li",{ref:g,...h,...b,key:t.id,className:"flex group",children:[(0,r.jsxs)(P.default,{href:c,className:"\n          min-w-0\n          flex-1 flex flex-col gap-1 p-2\n          bg-gray-100 rounded-lg\n          dark:bg-neutral-800\n          aria-selected:ring-2 aria-selected:ring-blue-300\n        ","aria-current":n?"page":void 0,"aria-selected":x?"true":"false",onClick:e=>{e.preventDefault(),m.push(c),f()()&&(0,i.nP)(!1)},children:[(0,r.jsx)("div",{className:"truncate text-sm",style:{paddingRight:d},children:t.title}),"public"===t.visibility?(0,r.jsx)("div",{className:"text-gray-500 dark:text-neutral-500 text-xs flex items-center gap-0.5 truncate",children:(0,r.jsxs)("div",{className:"truncate",children:["websim.ai",Q(t,a.username)]})}):null]}),(0,r.jsx)("div",{className:"w-0 flex justify-end",children:(0,r.jsx)("div",{ref:o,className:"flex gap-2 p-2 pointer-events-none ".concat(a.id===(null==u?void 0:u.id)?"":"hidden"),children:(0,r.jsx)(ec,{bookmark:t,profile:a})})})]})},ec=e=>{let{bookmark:t,profile:a}=e,l=(0,s.useContext)(o.fP),n=(0,i.fW)()===t.id,d=(0,s.useRef)(null),c=(0,s.useRef)(null);return f()()?(0,r.jsxs)(b.Vq.Root,{open:n,onOpenChange:e=>{e?(0,i.YD)(t.id):(0,i.YD)("")},children:[(0,r.jsx)(b.Vq.Trigger,{"aria-label":"edit bookmark",className:"\n              pointer-events-auto\n              w-5 h-5\n              flex items-center justify-center rounded-md\n              bg-blue-100 text-blue-600 hover:bg-blue-200\n            ",onClick:()=>{l("open_persist")},children:(0,r.jsx)("button",{children:(0,r.jsx)(T.Z,{className:"w-4 h-4"})})}),(0,r.jsx)(b.Vq.Content,{className:"p-0 dark:bg-neutral-900",children:(0,r.jsx)(en,{className:"flex flex-col inset-0",bookmark:t,username:a.username,formElementRef:c,formRef:d},t.id)})]}):(0,r.jsxs)(U.fC,{modal:!0,open:n,onOpenChange:e=>{e?(0,i.YD)(t.id):(0,i.YD)("")},children:[(0,r.jsx)(U.xz,{asChild:!0,"aria-label":"edit bookmark",className:"\n            opacity-0\n            group-hover:opacity-100\n            pointer-events-auto\n            w-5 h-5\n            flex items-center justify-center rounded-md\n            bg-blue-100 text-blue-600 hover:bg-blue-200\n          ",onClick:()=>{l("open_persist")},children:(0,r.jsx)("button",{children:(0,r.jsx)(T.Z,{className:"w-4 h-4"})})}),(0,r.jsx)(U.h_,{children:(0,r.jsxs)(U.VY,{className:"w-96",side:"right",sideOffset:30,onPointerDownOutside:e=>{let t=d.current;t&&t.dirty&&(t.validate(),t.valid&&et(c.current))},children:[(0,r.jsx)(U.Eh,{className:"fill-gray-300 dark:fill-neutral-900"}),(0,r.jsx)(en,{className:" flex flex-col rounded-lg bg-gray-100 dark:bg-neutral-900 ring-1 ring-gray-200/50 dark:ring-neutral-50/20 shadow-lg bg-clip-padding ",bookmark:t,username:a.username,formElementRef:c,formRef:d},t.id)]})})]})},eu=e=>{var t;let{bookmarks:a,profile:n,currentBookmarkId:i}=e,o=(0,s.useContext)(l.Ec),d=(0,O.Wo)(),[c]=(0,s.useState)(()=>new Date),u=a.reduce((e,t)=>{let a;let r=new Date(t.updated_at);return e[a=B(r,c)?"Today":K(r,c)?"Yesterday":r.getDate()===c.getDate()-2?"2 days ago":r.getDate()===c.getDate()-3?"3 days ago":z.format(r)]||(e[a]=[]),e[a].push(t),e},{}),{mutateAsync:m}=(0,A.qM)(),h=(0,s.useContext)(R.Oq);return(0,r.jsxs)("div",{className:"relative flex-1",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2 px-4 pb-2 absolute inset-0 overflow-y-auto ",children:[0===a.length&&(null==o?void 0:o.id)!==n.id&&(0,r.jsxs)("div",{className:"pt-12 text-center text-gray-500 text-sm",children:["@",n.username," has no public bookmarks."]}),0===a.length&&(null==o?void 0:o.id)===n.id&&(null===(t=h.userFilter)||void 0===t?void 0:t.username)===n.username&&(0,r.jsxs)("div",{className:" pt-12 text-center text-gray-500 text-sm dark:text-neutral-400 ",children:["No bookmarks yet! Click the"," ",(0,r.jsx)(x.Z,{className:"w-4 h-4 inline","aria-label":"add bookmark"})," ","button to save a bookmark"]}),Object.entries(u).map(e=>{let[t,a]=e;return(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-sm text-gray-500 dark:text-neutral-400 sticky top-0 px-2 -mx-2 bg-white dark:bg-neutral-900",children:t}),(0,r.jsx)("ul",{className:"flex flex-col gap-2",children:a.map(e=>(0,r.jsx)(ed,{bookmark:e,profile:n},e.id))})]},t)})]}),(null==o?void 0:o.id)===n.id&&(0,r.jsx)("div",{className:"absolute top-0 right-2",children:(0,r.jsx)(b.u,{content:"Add Bookmark",children:(0,r.jsx)("button",{disabled:!(null==d?void 0:d.id)||!(null==d?void 0:d.title)||(0,Z.kM)(null==d?void 0:d.id),className:"w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 text-white","aria-label":"add bookmark",onClick:async()=>{if((null==d?void 0:d.id)&&(null==d?void 0:d.title)){let e=(0,L.A)();await m({site_id:null==d?void 0:d.id,title:null==d?void 0:d.title,id:e})}},children:(0,r.jsx)(q.Z,{className:"w-4 h-4"})})})})]})};var ex=a(17713),em=a(64816),eh=a(82366);let ef=e=>{var t;let{currentBookmarkId:a,onSetCurrentBookmarkId:n}=e,i=(0,s.useContext)(R.Ev);(0,s.useContext)(l.Ec);let{data:o}=(0,A.S7)();(null!=o?o:[]).find(e=>e.id===a);let d=(0,s.useContext)(R.Q),c=(0,s.useContext)(R.sY),u=c.trim(),x=(0,s.useContext)(R.Oq),m=(null!==(t=x.textFilter)&&void 0!==t?t:"").trim(),h=(0,s.useMemo)(()=>(null!=o?o:[]).filter(e=>(0,eh.R)(x,i,e)),[o,x,i]);return(0,r.jsx)("div",{className:"flex-1 flex flex-col gap-4 bg-white dark:bg-neutral-900 pt-4",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex flex-col px-4",children:(0,r.jsxs)("div",{className:"relative flex",children:[(0,r.jsx)(ex.Z,{className:"absolute top-3 left-3 w-5 h-5 text-gray-500 dark:text-neutral-500"}),(0,r.jsx)("input",{type:"text",placeholder:"Search bookmarks","aria-label":"search bookmarks",className:" flex-1 h-11 pr-10 pl-10 text-sm rounded-lg border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-white ",value:c,onChange:e=>d(e.target.value),onBlur:()=>{d(u)},onKeyDown:e=>{e.defaultPrevented||"Escape"!==e.key||(e.preventDefault(),d(""))}}),""===m?null:(0,r.jsxs)("button",{"aria-label":"clear search",onClick:()=>d(""),className:"absolute top-2.5 right-2.5 w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full",children:[(0,r.jsx)(em.Z,{className:"w-5 h-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Clear search"})]})]})}),i&&(0,r.jsx)(eu,{bookmarks:h,profile:i,currentBookmarkId:a})]})})};var eb=a(98448);function eg(){let[e,t]=(0,s.useState)(""),{data:a,error:l}=(0,eb.k)();return l?(0,r.jsx)("div",{children:"Error retrieving history"}):(0,r.jsxs)("div",{className:"flex-1 flex flex-col gap-4 bg-white dark:bg-neutral-900",children:[(0,r.jsx)(ep,{filterText:e,setFilterText:t}),(0,r.jsx)(ev,{data:null!=a?a:[],filterText:e})]})}function ep(e){let{filterText:t,setFilterText:a}=e;return(0,r.jsx)("div",{className:"flex flex-col px-4 pt-4",children:(0,r.jsxs)("div",{className:"relative flex",children:[(0,r.jsx)(ex.Z,{className:"absolute top-3 left-3 w-5 h-5 text-gray-500 dark:text-neutral-500"}),(0,r.jsx)("input",{type:"text",placeholder:"Search history","aria-label":"search history",className:" flex-1 h-11 pr-10 pl-10 text-sm rounded-lg border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-white ",value:t,onChange:e=>a(e.target.value),onKeyDown:e=>{e.defaultPrevented||"Escape"!==e.key||(e.preventDefault(),a(""))}}),""===t?null:(0,r.jsxs)("button",{"aria-label":"clear search",onClick:()=>a(""),className:"absolute top-2.5 right-2.5 w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full",children:[(0,r.jsx)(em.Z,{className:"w-5 h-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Clear search"})]})]})})}function ev(e){let{data:t,filterText:a}=e,l=(null!=t?t:[]).filter(e=>{var t,r;return(null===(t=e.url)||void 0===t?void 0:t.toLowerCase().includes(a.toLowerCase()))||(null===(r=e.title)||void 0===r?void 0:r.toLowerCase().includes(a.toLowerCase()))}),n=new Date,s=l.reduce((e,t)=>{let a;let r=new Date(t.created_at);return e[a=B(r,n)?"Today":K(r,n)?"Yesterday":r.getDate()===n.getDate()-2?"2 days ago":r.getDate()===n.getDate()-3?"3 days ago":z.format(r)]||(e[a]=[]),e[a].push(t),e},{});return(0,r.jsx)("div",{className:"relative flex-1",children:(0,r.jsx)("div",{className:"absolute inset-0 overflow-y-auto flex flex-col gap-2 px-4 pb-2",children:Object.entries(s).map(e=>{let[t,a]=e;return(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-sm text-gray-500 dark:text-neutral-400 sticky top-0 px-2 -mx-2 pb-1 bg-white dark:bg-neutral-900",children:t}),a.map(e=>(0,r.jsx)(ey,{site:e},e.id))]},t)})})})}function ey(e){let{site:t}=e,a=(0,I.l)(e=>{e.pathname="/c/".concat(t.id)}),l="eval"!==t.method?t.command:t.url,n=(0,es.useRouter)();return(0,r.jsx)("li",{className:"flex group",children:(0,r.jsxs)(P.default,{href:a,className:"\n          min-w-0\n          flex-1 flex flex-col gap-1 p-2\n          bg-gray-100 rounded-lg\n          dark:bg-neutral-800\n          group-hover:opacity-70\n          aria-selected:ring-2 aria-selected:ring-blue-300\n          [span&]:opacity-50 [span&]:pointer-events-none\n        ",onClick:e=>{e.preventDefault(),n.push(a),f()()&&(0,i.nP)(!1)},children:[(0,r.jsx)("div",{className:"flex flex-row gap-4 text-xs truncate",children:t.title}),l!==t.url&&(0,r.jsx)("div",{className:"flex flex-row gap-4 text-xs truncate",children:l}),(0,r.jsx)("div",{className:"flex flex-row gap-4 text-xs text-gray-500 dark:text-neutral-500 whitespace-pre-line break-all",children:t.url})]})},t.id)}function ej(){let e=(0,n.O9)(),t=(0,s.useContext)(l.Ec),a=(0,i.ye)(),d=(0,i.Tl)(),c=(0,s.useContext)(o.fP);return t?(0,r.jsx)(S,{fullScreen:e,pinned:d,onPin:()=>{(0,i.nP)(!0)},onClose:()=>{c("exited"),(0,i.nP)(!1)},renderBookmarks:()=>(0,r.jsx)(ef,{currentBookmarkId:a,onSetCurrentBookmarkId:e=>{}},"sidebar"),renderHistory:()=>(0,r.jsx)(eg,{})}):null}},17363:function(e,t,a){"use strict";a.d(t,{CQ:function(){return x},E7:function(){return u},LP:function(){return h},S7:function(){return c},qM:function(){return m}});var r=a(75005),l=a(77362),n=a(87601),s=a(18151),i=a(58078),o=a(17344),d=a(61153);function c(){var e;let t=(0,r.$)(),a=(0,d.BO)();return(0,l.useQuery)({queryKey:[null!==(e=null==a?void 0:a.id)&&void 0!==e?e:"","bookmarks"],queryFn:async()=>{var e;let{data:r}=await t.from("bookmark").select("*").order("updated_at",{ascending:!1}).eq("owner_id",null!==(e=null==a?void 0:a.id)&&void 0!==e?e:"");return r},enabled:!!a})}function u(e){let t=(0,r.$)(),a=(0,i.useContext)(o.Ec);return(0,l.useQuery)({queryKey:["pageBookmarks",e],queryFn:async()=>{let{data:r}=await t.from("bookmark").select("*").order("updated_at",{ascending:!1}).eq("site_id",e).eq("owner_id",a.id);return r},enabled:!!e&&!!a})}function x(){let e=(0,r.$)(),t=(0,n.useQueryClient)(),a=(0,i.useContext)(o.Ec);return(0,s.useMutation)({mutationFn:async t=>{let{id:a,...r}=t,{error:l,data:n}=await e.from("bookmark").update(r).eq("id",a).select("*").single();if(l)throw l;return n},onSuccess:async e=>{if(!a)throw Error("User must be logged in to update bookmark");return t.setQueryData(["bookmark",e.id],e),t.setQueryData([a.id,"bookmarks"],t=>t?[e,...t.filter(t=>t.id!==e.id)]:[e]),t.setQueryData(["pageBookmarks",e.site_id],t=>t?[e,...t.filter(t=>t.id!==e.id)]:[e]),e}})}function m(){let e=(0,r.$)(),t=(0,n.useQueryClient)(),a=(0,i.useContext)(o.Ec);return(0,s.useMutation)({mutationFn:async t=>{let{error:a,data:r}=await e.from("bookmark").insert(t).select("*").single();if(a)throw a;return r},onSuccess:async e=>{var r;return t.setQueryData(["bookmark",e.id],e),t.setQueryData([null!==(r=null==a?void 0:a.id)&&void 0!==r?r:"","bookmarks"],t=>t?[e,...t]:[e]),t.setQueryData(["pageBookmarks",e.site_id],t=>t?[e,...t]:[e]),e}})}function h(){let e=(0,r.$)(),t=(0,n.useQueryClient)(),a=(0,i.useContext)(o.Ec);return(0,s.useMutation)({mutationFn:async t=>{let{error:a}=await e.from("bookmark").delete().eq("id",t);if(a)throw a;return t},onSuccess:async e=>{var r;t.setQueryData(["bookmark",e],void 0),t.setQueryData([null!==(r=null==a?void 0:a.id)&&void 0!==r?r:"","bookmarks"],t=>t?t.filter(t=>t.id!==e):[]),t.setQueriesData({predicate:e=>"pageBookmarks"===e.queryKey[0]},t=>{if(t)return t.filter(t=>t.id!==e)})}})}},98448:function(e,t,a){"use strict";a.d(t,{k:function(){return d},t:function(){return o}});var r=a(75005),l=a(17344),n=a(58078),s=a(87601),i=a(77362);function o(){let e=(0,s.useQueryClient)();return(0,n.useCallback)(t=>{e.setQueryData(["history"],e=>e?[t,...e]:[t])},[e])}function d(){let e=(0,r.$)(),t=(0,n.useContext)(l.Ec);return(0,i.useQuery)({queryKey:[t.id,"history"],queryFn:async()=>{let{data:a,error:r}=await e.from("sites").select("id, title, url, method, command, created_at").eq("user_id",null==t?void 0:t.id).order("created_at",{ascending:!1});if(r)throw r;return a},enabled:!!t})}}},function(e){e.O(0,[951,71,78,596,541,896,705,115,362,744],function(){return e(e.s=44843)}),_N_E=e.O()}]);