import{r as o,a as d,j as e}from"./react-libs.5b212337.js";import{c as s}from"./rc-cli_site-mobile-demo.e1e025a7.js";import"./index.9c5f8655.js";import"./index.2012bf47.js";import{D as a,F as E}from"./Progress.17e70151.js";import"./index.e9782f87.js";import"./index.b148844d.js";import{T as p,P as w}from"./index.0f55a6cf.js";import"./constant.bd9aa8c7.js";import"./Rate.15819d10.js";import"./index.2bb626ed.js";import"./ConfigProviderContext.b49bb3f3.js";import"./locales.fc745e15.js";import"./mobile.c7d19b29.js";import"./use-touch.ecb2ed24.js";const H=()=>{const{DemoBlock:r,DemoSection:l}=s,[m,D]=o.exports.useState(""),[c,n]=o.exports.useState(!1);return d(l,{children:[e(r,{card:!0,title:"\u9009\u62E9\u5E74\u6708\u65E5",children:e(a,{title:"\u9009\u62E9\u5E74\u6708\u65E5",type:"date",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date,onChange:t=>console.log(t)})}),e(r,{card:!0,title:"\u9009\u62E9\u5E74\u6708",children:e(a,{type:"year-month",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date,formatter:(t,u)=>t==="year"?`${u}\u5E74`:t==="month"?`${u}\u6708`:u,onChange:t=>console.log(t)})}),e(r,{card:!0,title:"\u9009\u62E9\u6708\u65E5",children:e(a,{type:"month-day",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date,formatter:(t,u)=>t==="month"?`${u}\u6708`:t==="day"?`${u}\u65E5`:u})}),e(r,{card:!0,title:"\u9009\u62E9\u65F6\u95F4",children:e(a,{type:"time",minHour:"10",maxHour:"20",value:"12:00",onChange:t=>console.log(t),onConfirm:t=>console.log(t)})}),e(r,{card:!0,title:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4",children:e(a,{type:"datetime",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date})}),e(r,{card:!0,title:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6",children:e(a,{type:"datehour",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date})}),e(r,{card:!0,title:"\u9009\u62E9\u8FC7\u6EE4\u5668",children:e(a,{type:"time",minHour:"10",maxHour:"20",value:"12:00",filter:(t,u)=>t==="minute"?u.filter(i=>+i%5===0):u})}),e(r,{card:!0,title:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F",children:e(a,{type:"date",columnsOrder:["month","day","year"],minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date})}),e(r,{card:!0,title:"\u786E\u8BA4\u6309\u94AE",children:e(a,{onConfirm:t=>p(`\u786E\u8BA4\u7684\u65E5\u671F\uFF1A${t}`),type:"date",minDate:new Date(2021,0,1),maxDate:new Date(2021,2,1),value:new Date})}),e(r,{card:!0,title:"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",children:e(E,{readonly:!0,clickable:!0,label:"\u65E5\u671F",value:m,placeholder:"\u9009\u62E9\u9009\u62E9\u65E5\u671F",onClick:()=>n(!0)})}),e(w,{title:"\u8BF7\u9009\u62E9\u65E5\u671F",closeable:!0,visible:c,round:!0,position:"bottom",onClose:()=>n(!1),children:e("div",{style:{padding:"0 8px"},children:e(a,{onConfirm:t=>{D(t.toISOString()),n(!1)},type:"date",filter:(t,u)=>t==="minute"?u.filter(i=>+i%5===0):u,minDate:new Date(2021,0,1),maxDate:new Date(2021,2,1),value:new Date})})})]})};export{H as default};
