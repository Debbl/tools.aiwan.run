(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{912:function(e,t,a){Promise.resolve().then(a.bind(a,1811))},4283:function(e){"use strict";e.exports={reactStrictMode:!0,output:"export",basePath:"/code-diff"}},1811:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var s=a(4357),l=a(920),n=a(3624),i=a(6439),r=a(4283),d=a(9959),c=a(7040);let u=(0,d.Ue)()((0,c.tJ)(e=>({originalValue:"",modifiedValue:"",language:"plaintext",languages:[],theme:"light",renderSideBySide:!0,setOriginalValue:t=>e({originalValue:t}),setModifiedValue:t=>e({modifiedValue:t}),setLanguage:t=>e({language:t}),setLanguages:t=>e({languages:t}),setTheme:t=>e({theme:t}),setRenderSideBySide:t=>e({renderSideBySide:t})}),{name:"code-diff-main-store",version:1}));var o=a(144),g=a(5427),h=a(7694),x=function(){return(0,s.jsx)("div",{className:"ml-8 flex h-[18px] w-[18px] justify-center",children:(0,s.jsx)("a",{href:"https://github.com/Debbl/code-diff",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.JO,{icon:h.Z,className:"h-[18px] w-[18px]"})})})},m=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{t(!0)},[]),e},f=e=>{let{monaco:t}=e,[{language:a,languages:l,theme:n,renderSideBySide:i},{setLanguage:r,setTheme:d,setRenderSideBySide:c}]=u(e=>[{language:e.language,languages:e.languages,theme:e.theme,renderSideBySide:e.renderSideBySide},{setLanguage:e.setLanguage,setLanguages:e.setLanguages,setTheme:e.setTheme,setRenderSideBySide:e.setRenderSideBySide}]),h=m();return(0,s.jsxs)("header",{className:"flex items-center gap-x-3 p-3",children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)("label",{children:["选择语言：",(0,s.jsx)("select",{value:a,onChange:e=>{r(e.target.value)},className:"select select-bordered select-xs ml-3 w-60 border",children:h&&l.map(e=>(0,s.jsx)("option",{value:e.id,children:e.id},e.id))})]})}),(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)("label",{children:["选择主题：",(0,s.jsxs)("select",{value:n,onChange:e=>{d(e.target.value)},className:"select select-bordered select-xs ml-3 w-60 border",children:[(0,s.jsx)("option",{value:"light",children:"light"}),(0,s.jsx)("option",{value:"vs-dark",children:"vs-dark"})]})]})}),(0,s.jsx)("div",{className:"form-control",children:(0,s.jsxs)("label",{className:"label cursor-pointer",children:[(0,s.jsx)("span",{className:"label-text",children:"并排显示："}),(0,s.jsx)("input",{className:"checkbox checkbox-xs ml-3",type:"checkbox",checked:i,onChange:e=>{c(e.target.checked)}})]})}),(0,s.jsx)("div",{className:"btn btn-circle btn-xs",onClick:()=>{null==t||t.editor.getModels().forEach(e=>{e.setValue("")})},children:(0,s.jsx)(o.JO,{className:"h-[18px] w-[18px] cursor-pointer",icon:g.Z})}),(0,s.jsx)(x,{})]})},j=()=>{let e=u(e=>"vs-dark"===e.theme?"dark":"light");(0,i.useEffect)(()=>{let t=document.querySelector("html");t.dataset.theme=e},[e])},p=e=>{let t=(0,i.useRef)(e);return t.current=e,t},b=a(665),v=a(8759),S=()=>{let[e,t]=(0,i.useState)(!1),[a,l]=(0,i.useState)("");return{Toast:()=>(0,s.jsx)(s.Fragment,{children:e&&(0,v.createPortal)((0,s.jsxs)("div",{className:" alert  alert-success fixed right-0 top-4 w-80 ",children:[(0,s.jsx)(o.JO,{icon:b.Z}),(0,s.jsx)("span",{children:a})]}),document.body)}),showToast:e=>{t(!0),l(e);let a=setTimeout(()=>{t(!1),clearTimeout(a)},2e3)}}};function N(){let[{originalValue:e,modifiedValue:t,language:a,languages:d,theme:c,renderSideBySide:o},{setOriginalValue:g,setModifiedValue:h,setLanguage:x,setLanguages:m}]=u(e=>[{originalValue:e.originalValue,modifiedValue:e.modifiedValue,language:e.language,languages:e.languages,theme:e.theme,renderSideBySide:e.renderSideBySide},{setLanguage:e.setLanguage,setLanguages:e.setLanguages,setOriginalValue:e.setOriginalValue,setModifiedValue:e.setModifiedValue}]);j();let{Toast:b,showToast:v}=S(),N=(0,i.useRef)(),V=p(a);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex h-screen flex-col items-center",children:[(0,s.jsx)("h1",{className:"my-2 cursor-pointer text-center text-xl font-medium",children:(0,s.jsx)("a",{href:r.basePath,children:"Code Diff"})}),(0,s.jsx)(b,{}),(0,s.jsx)(f,{monaco:N.current}),(0,s.jsx)("main",{className:"h-full w-full",children:(0,s.jsx)(l.SV,{options:{originalEditable:!0,renderSideBySide:o},onMount:(a,s)=>{N.current=s,m(s.languages.getLanguages()),a.getOriginalEditor().setValue(e),a.getModifiedEditor().setValue(t),a.onDidUpdateDiff(()=>{var e,t;let s=(null===(e=a.getModel())||void 0===e?void 0:e.original.getValue())||"",l=(null===(t=a.getModel())||void 0===t?void 0:t.modified.getValue())||"",i=n.Z.highlightAuto(s).language,r=d.map(e=>e.id);i&&i!==V.current&&r.includes(i)&&(v("已自动检测到语言 ".concat(i)),x(i)),g(s),h(l)})},height:"100%",theme:c,language:a})})]})})}}},function(e){e.O(0,[221,702,431,744],function(){return e(e.s=912)}),_N_E=e.O()}]);