(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3774:function(e,a,t){Promise.resolve().then(t.bind(t,3095))},3095:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return S}});var l=t(1458),s=t(8206),i=t(2229),n=t(5949),r=t(9564),d=t(6930),c=t(4725);let u=(0,d.Ue)()((0,c.tJ)(e=>({originalValue:"",modifiedValue:"",language:"plaintext",languages:[],theme:"light",renderSideBySide:!0,setOriginalValue:a=>e({originalValue:a}),setModifiedValue:a=>e({modifiedValue:a}),setLanguage:a=>e({language:a}),setLanguages:a=>e({languages:a}),setTheme:a=>e({theme:a}),setRenderSideBySide:a=>e({renderSideBySide:a})}),{name:"code-diff-main-store",version:1}));var o=t(1878),g=t(7814);let h=e=>[{language:e.language,languages:e.languages,theme:e.theme,renderSideBySide:e.renderSideBySide},{setLanguage:e.setLanguage,setLanguages:e.setLanguages,setTheme:e.setTheme,setRenderSideBySide:e.setRenderSideBySide}];var m=e=>{let{monaco:a}=e,[{language:t,languages:s,theme:i,renderSideBySide:n},{setLanguage:d,setTheme:c,setRenderSideBySide:m}]=u(h),{isHydrated:x}=(0,r.U$)(),{GitHubInfo:f}=(0,r.xr)("https://github.com/Debbl/code-diff");return(0,l.jsxs)("header",{className:"flex items-center gap-x-3 p-3",children:[(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsxs)("label",{children:["选择语言：",(0,l.jsx)("select",{value:t,onChange:e=>{d(e.target.value)},className:"select select-bordered select-xs ml-3 w-60 border",children:x&&s.map(e=>(0,l.jsx)("option",{value:e.id,children:e.id},e.id))})]})}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsxs)("label",{children:["选择主题：",(0,l.jsxs)("select",{value:i,onChange:e=>{c(e.target.value)},className:"select select-bordered select-xs ml-3 w-60 border",children:[(0,l.jsx)("option",{value:"light",children:"light"}),(0,l.jsx)("option",{value:"vs-dark",children:"vs-dark"})]})]})}),(0,l.jsx)("div",{className:"form-control",children:(0,l.jsxs)("label",{className:"label cursor-pointer",children:[(0,l.jsx)("span",{className:"label-text",children:"并排显示："}),(0,l.jsx)("input",{className:"checkbox checkbox-xs ml-3",type:"checkbox",checked:n,onChange:e=>{m(e.target.checked)}})]})}),(0,l.jsx)("div",{className:"btn btn-circle btn-xs",onClick:()=>{null==a||a.editor.getModels().forEach(e=>{e.setValue("")})},children:(0,l.jsx)(o.JO,{className:"h-[18px] w-[18px] cursor-pointer",icon:g.Z})}),(0,l.jsx)(f,{className:"ml-8 flex h-[18px] w-[18px] justify-center"})]})},x=()=>{let e=u(e=>"vs-dark"===e.theme?"dark":"light");(0,n.useEffect)(()=>{document.querySelector("html").dataset.theme=e},[e])},f=t(2901),j=t(4662),p=()=>{let[e,a]=(0,n.useState)(!1),[t,s]=(0,n.useState)("");return{Toast:()=>(0,l.jsx)(l.Fragment,{children:e&&(0,j.createPortal)((0,l.jsxs)("div",{className:" alert  fixed right-0 top-4 w-80 ",children:[(0,l.jsx)(o.JO,{icon:f.Z}),(0,l.jsx)("span",{children:t})]}),document.body)}),showToast:e=>{a(!0),s(e);let t=setTimeout(()=>{a(!1),clearTimeout(t)},2e3)}}};let{basePath:v}={reactStrictMode:!0,output:"export",basePath:"/code-diff"},b=e=>[{originalValue:e.originalValue,modifiedValue:e.modifiedValue,language:e.language,languages:e.languages,theme:e.theme,renderSideBySide:e.renderSideBySide},{setLanguage:e.setLanguage,setLanguages:e.setLanguages,setOriginalValue:e.setOriginalValue,setModifiedValue:e.setModifiedValue}];function S(){let[{originalValue:e,modifiedValue:a,language:t,languages:d,theme:c,renderSideBySide:o},{setOriginalValue:g,setModifiedValue:h,setLanguage:f,setLanguages:j}]=u(b);x();let{Toast:S,showToast:N}=p(),V=(0,n.useRef)(),k=(0,r.dU)(t);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex h-screen flex-col items-center",children:[(0,l.jsx)("h1",{className:"my-2 cursor-pointer text-center text-xl font-medium",children:(0,l.jsx)("a",{href:v,children:"Code Diff"})}),(0,l.jsx)(S,{}),(0,l.jsx)(m,{monaco:V.current}),(0,l.jsx)("main",{className:"h-full w-full",children:(0,l.jsx)(s.SV,{options:{originalEditable:!0,renderSideBySide:o},onMount:(t,l)=>{V.current=l,j(l.languages.getLanguages()),t.getOriginalEditor().setValue(e),t.getModifiedEditor().setValue(a),t.onDidUpdateDiff(()=>{var e,a;let l=(null===(e=t.getModel())||void 0===e?void 0:e.original.getValue())||"",s=(null===(a=t.getModel())||void 0===a?void 0:a.modified.getValue())||"",n=i.Z.highlightAuto(l).language,r=d.map(e=>e.id);n&&n!==k.current&&r.includes(n)&&(N("已自动检测到语言 ".concat(n)),f(n)),g(l),h(s)})},height:"100%",theme:c,language:t})})]})})}}},function(e){e.O(0,[837,646,21,744],function(){return e(e.s=3774)}),_N_E=e.O()}]);