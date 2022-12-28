import{r as C,a as i,j as e}from"./react-libs.5b212337.js";import{c as x}from"./rc-cli_site-mobile-demo.e1e025a7.js";import{a as F}from"./index.9c5f8655.js";import"./index.2012bf47.js";import{u as h,F as n,a as s}from"./Progress.17e70151.js";import"./index.e9782f87.js";import"./index.b148844d.js";import{P as v,T as A}from"./index.0f55a6cf.js";import"./constant.bd9aa8c7.js";import"./Rate.15819d10.js";import"./index.2bb626ed.js";import"./ConfigProviderContext.b49bb3f3.js";import"./locales.fc745e15.js";import"./mobile.c7d19b29.js";import"./use-touch.ecb2ed24.js";const c=[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[{text:"\u676D\u5DDE\u5E02",value:"330100",children:[{text:"\u4E0A\u57CE\u533A",value:"330102"},{text:"\u4E0B\u57CE\u533A",value:"330103"},{text:"\u6C5F\u5E72\u533A",value:"330104"}]},{text:"\u5B81\u6CE2\u5E02",value:"330200",children:[{text:"\u6D77\u66D9\u533A",value:"330203"},{text:"\u6C5F\u5317\u533A",value:"330205"},{text:"\u5317\u4ED1\u533A",value:"330206"}]},{text:"\u6E29\u5DDE\u5E02",value:"330300",children:[{text:"\u9E7F\u57CE\u533A",value:"330302"},{text:"\u9F99\u6E7E\u533A",value:"330303"},{text:"\u74EF\u6D77\u533A",value:"330304"}]}]},{text:"\u6C5F\u82CF\u7701",value:"320000",children:[{text:"\u5357\u4EAC\u5E02",value:"320100",children:[{text:"\u7384\u6B66\u533A",value:"320102"},{text:"\u79E6\u6DEE\u533A",value:"320104"},{text:"\u5EFA\u90BA\u533A",value:"320105"}]},{text:"\u65E0\u9521\u5E02",value:"320200",children:[{text:"\u9521\u5C71\u533A",value:"320205"},{text:"\u60E0\u5C71\u533A",value:"320206"},{text:"\u6EE8\u6E56\u533A",value:"320211"}]},{text:"\u5F90\u5DDE\u5E02",value:"320300",children:[{text:"\u9F13\u697C\u533A",value:"320302"},{text:"\u4E91\u9F99\u533A",value:"320303"},{text:"\u8D3E\u6C6A\u533A",value:"320305"}]}]}],w=()=>{const{DemoBlock:o,DemoSection:E}=x,[t,u]=h({v1:!1,t1:"",v2:!1,t2:"",v3:!1,t3:"",v4:!1,t4:"",v5:!1,t5:p(["330000","330100","330103"],c),value5:["330000","330100","330103"]}),[r,d]=C.exports.useState([{text:"\u6D59\u6C5F\u7701",value:"330000",children:[]}]),m=({value:a})=>{a===r[0].value&&(A.loading({message:"\u52A0\u8F7D\u4E2D...",duration:0}),setTimeout(()=>{A.clear();const l=JSON.parse(JSON.stringify(r));l[0].children=[{text:"\u676D\u5DDE\u5E02",value:"330100"},{text:"\u5B81\u6CE2\u5E02",value:"330200"}],d(l)},2e3))};return i(E,{className:"demo-cascader",children:[i(o,{card:!0,title:"\u57FA\u7840\u7528\u6CD5",children:[e(n,{isLink:!0,value:t.t1,readonly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>u({v1:!0})}),e(v,{visible:t.v1,round:!0,position:"bottom",onClose:()=>u({v1:!1}),children:e(s,{title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:c,onClose:()=>u({v1:!1}),onFinish:({selectedOptions:a})=>{u({v1:!1,t1:a.map(l=>l.text).join("/")})}})})]}),i(o,{card:!0,title:"\u81EA\u5B9A\u4E49\u989C\u8272",children:[e(n,{isLink:!0,value:t.t2,readonly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>u({v2:!0})}),e(v,{visible:t.v2,round:!0,position:"bottom",onClose:()=>u({v2:!1}),children:e(s,{activeColor:"#f44336",title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:c,onClose:()=>u({v2:!1}),onFinish:({selectedOptions:a})=>{u({v2:!1,t2:a.map(l=>l.text).join("/")})}})})]}),i(o,{card:!0,title:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",children:[e(n,{isLink:!0,value:t.t4,readonly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>u({v4:!0})}),e(v,{visible:t.v4,round:!0,position:"bottom",onClose:()=>u({v4:!1}),children:e(s,{title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:r,onChange:m,onClose:()=>u({v4:!1}),onFinish:({selectedOptions:a})=>{u({v4:!1,t4:a.map(l=>l.text).join("/")})}})})]}),i(o,{card:!0,title:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D",children:[e(n,{isLink:!0,value:t.t3,readonly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>u({v3:!0})}),e(v,{visible:t.v3,round:!0,position:"bottom",onClose:()=>u({v3:!1}),children:e(s,{fieldNames:{text:"name",value:"code",children:"items"},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:[{name:"\u6D59\u6C5F\u7701",code:"330000",items:[{name:"\u676D\u5DDE\u5E02",code:"330100"}]},{name:"\u6C5F\u82CF\u7701",code:"320000",items:[{name:"\u5357\u4EAC\u5E02",code:"320100"}]}],onClose:()=>u({v3:!1}),onFinish:({selectedOptions:a})=>{u({v3:!1,t3:a.map(l=>l.name).join("/")})}})})]}),i(o,{card:!0,title:"\u53D7\u63A7\u7EC4\u4EF6",children:[e(n,{isLink:!0,value:t.t5,readonly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",errorMessage:i("div",{children:["\u5F53\u524D\u503C:",JSON.stringify(t.value5)]}),onClick:()=>u({v5:!0})}),e(F,{type:"primary",size:"small",block:!0,onClick:()=>u({value5:["330000","330100","330104"],t5:p(["330000","330100","330104"],c)}),children:"\u5916\u90E8\u8BBE\u7F6E"}),e(v,{visible:t.v5,round:!0,position:"bottom",onClose:()=>u({v5:!1}),children:e(s,{title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",value:t.value5,options:c,onClose:()=>u({v5:!1}),onFinish:({selectedOptions:a})=>{u({v5:!1,value5:a.map(l=>l.value),t5:a.map(l=>l.text).join("/")})}})})]})]})};function p(o,E){const t=[];return o.reduce((u,r)=>{const d=u.find(m=>m.value===r);return t.push(d.text),d.children},E),t.join("/")}export{w as default};
