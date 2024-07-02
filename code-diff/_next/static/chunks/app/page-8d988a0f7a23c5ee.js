(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8084:function(e,a,t){Promise.resolve().then(t.bind(t,6975))},6975:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return S}});var s=t(2367),l=t(1833),i=t(2490),n=t(2135),r=t(9941),d=t(8167),c=t(217);let o=(0,d.Ue)()((0,c.tJ)(e=>({originalValue:"",modifiedValue:"",language:"plaintext",languages:[],theme:"light",renderSideBySide:!0,setOriginalValue:a=>e({originalValue:a}),setModifiedValue:a=>e({modifiedValue:a}),setLanguage:a=>e({language:a}),setLanguages:a=>e({languages:a}),setTheme:a=>e({theme:a}),setRenderSideBySide:a=>e({renderSideBySide:a})}),{name:"code-diff-main-store",version:1}));var u=t(6904),g=t(8276);let h=e=>[{language:e.language,languages:e.languages,theme:e.theme,renderSideBySide:e.renderSideBySide},{setLanguage:e.setLanguage,setLanguages:e.setLanguages,setTheme:e.setTheme,setRenderSideBySide:e.setRenderSideBySide}];var m=e=>{let{monaco:a}=e,[{language:t,languages:l,theme:i,renderSideBySide:n},{setLanguage:d,setTheme:c,setRenderSideBySide:m}]=o(h),{isHydrated:x}=(0,r.U$)(),{GitHubInfo:f}=(0,r.xr)("https://github.com/Debbl/code-diff");return(0,s.jsxs)("header",{className:"flex items-center gap-x-3 p-3",children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)("label",{children:["选择语言：",(0,s.jsx)("select",{value:t,onChange:e=>{d(e.target.value)},className:"select select-bordered select-xs ml-3 w-60 border",children:x&&l.map(e=>(0,s.jsx)("option",{value:e.id,children:e.id},e.id))})]})}),(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)("label",{children:["选择主题：",(0,s.jsxs)("select",{value:i,onChange:e=>{c(e.target.value)},className:"select select-bordered select-xs ml-3 w-60 border",children:[(0,s.jsx)("option",{value:"light",children:"light"}),(0,s.jsx)("option",{value:"vs-dark",children:"vs-dark"})]})]})}),(0,s.jsx)("div",{className:"form-control",children:(0,s.jsxs)("label",{className:"label cursor-pointer",children:[(0,s.jsx)("span",{className:"label-text",children:"并排显示："}),(0,s.jsx)("input",{className:"checkbox checkbox-xs ml-3",type:"checkbox",checked:n,onChange:e=>{m(e.target.checked)}})]})}),(0,s.jsx)("div",{className:"btn btn-circle btn-xs",onClick:()=>{null==a||a.editor.getModels().forEach(e=>{e.setValue("")})},children:(0,s.jsx)(u.JO,{className:"size-[18px] cursor-pointer",icon:g.Z})}),(0,s.jsx)(f,{className:"ml-8 flex size-[18px] justify-center"})]})},x=()=>{let e=o(e=>"vs-dark"===e.theme?"dark":"light");(0,n.useEffect)(()=>{document.querySelector("html").dataset.theme=e},[e])},f=t(3229),j=t(3605),p=()=>{let[e,a]=(0,n.useState)(!1),[t,l]=(0,n.useState)("");return{Toast:()=>(0,s.jsx)(s.Fragment,{children:e&&(0,j.createPortal)((0,s.jsxs)("div",{className:" alert  fixed right-0 top-4 w-80 ",children:[(0,s.jsx)(u.JO,{icon:f.Z}),(0,s.jsx)("span",{children:t})]}),document.body)}),showToast:e=>{a(!0),l(e);let t=setTimeout(()=>{a(!1),clearTimeout(t)},2e3)}}};let{basePath:v}={reactStrictMode:!0,output:"export",basePath:"/code-diff"},b=e=>[{originalValue:e.originalValue,modifiedValue:e.modifiedValue,language:e.language,languages:e.languages,theme:e.theme,renderSideBySide:e.renderSideBySide},{setLanguage:e.setLanguage,setLanguages:e.setLanguages,setOriginalValue:e.setOriginalValue,setModifiedValue:e.setModifiedValue}];function S(){let[{originalValue:e,modifiedValue:a,language:t,languages:d,theme:c,renderSideBySide:u},{setOriginalValue:g,setModifiedValue:h,setLanguage:f,setLanguages:j}]=o(b);x();let{Toast:S,showToast:N}=p(),V=(0,n.useRef)(),k=(0,r.dU)(t);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex h-screen flex-col items-center",children:[(0,s.jsx)("h1",{className:"my-2 cursor-pointer text-center text-xl font-medium",children:(0,s.jsx)("a",{href:v,children:"Code Diff"})}),(0,s.jsx)(S,{}),(0,s.jsx)(m,{monaco:V.current}),(0,s.jsx)("main",{className:"size-full",children:(0,s.jsx)(l.SV,{options:{originalEditable:!0,renderSideBySide:u},onMount:(t,s)=>{V.current=s,j(s.languages.getLanguages()),t.getOriginalEditor().setValue(e),t.getModifiedEditor().setValue(a),t.onDidUpdateDiff(()=>{var e,a;let s=(null===(e=t.getModel())||void 0===e?void 0:e.original.getValue())||"",l=(null===(a=t.getModel())||void 0===a?void 0:a.modified.getValue())||"",n=i.Z.highlightAuto(s).language,r=d.map(e=>e.id);n&&n!==k.current&&r.includes(n)&&(N("已自动检测到语言 ".concat(n)),f(n)),g(s),h(l)})},height:"100%",theme:c,language:t})})]})})}}},function(e){e.O(0,[702,375,323,744],function(){return e(e.s=8084)}),_N_E=e.O()}]);