import{r as p,a as i,j as t}from"./react-libs.5b212337.js";import{c as d}from"./rc-cli_site-mobile-demo.e1e025a7.js";import{a}from"./index.9c5f8655.js";import"./index.2012bf47.js";import{c as e}from"./Progress.17e70151.js";import{F as f}from"./index.e9782f87.js";import"./index.b148844d.js";import"./index.0f55a6cf.js";import"./constant.bd9aa8c7.js";import"./Rate.15819d10.js";import"./index.2bb626ed.js";import"./ConfigProviderContext.b49bb3f3.js";import"./locales.fc745e15.js";import"./mobile.c7d19b29.js";import"./use-touch.ecb2ed24.js";const c=r=>Math.min(Math.max(r,0),100),b=()=>{const{DemoBlock:r,DemoSection:l}=d,[o,s]=p.exports.useState(70),n=()=>{s(u=>c(u+20))},m=()=>{s(u=>c(u-20))};return i(l,{className:"demo-circle",children:[t(r,{title:"\u57FA\u7840\u7528\u6CD5",children:t(e,{rate:o,text:`${o}%`})}),i(r,{title:"\u6837\u5F0F\u5B9A\u5236",children:[t(e,{strokeWidth:60,rate:o,text:"\u5BBD\u5EA6\u5B9A\u5236"}),t(e,{color:"#ee0a24",layerColor:"#ebedf0",rate:o,text:"\u989C\u8272\u5B9A\u5236"}),t(e,{color:{"0%":"#3fecff","100%":"#6149f6"},rate:o,text:"\u6E10\u53D8\u8272"}),t(e,{color:"#07c160",clockwise:!1,rate:o,text:"\u9006\u65F6\u9488",style:{marginTop:15}}),t(e,{color:"#7232dd",clockwise:!1,size:120,rate:o,text:"\u5927\u5C0F\u5B9A\u5236",style:{marginTop:15}}),t(f,{style:{marginTop:15},align:"center",justify:"center",children:i(a.Group,{children:[t(a,{onClick:n,type:"primary",children:"\u589E\u52A0"}),t(a,{onClick:m,type:"danger",children:"\u51CF\u5C11"})]})})]}),i(r,{title:"\u8D77\u59CB\u4F4D\u7F6E",children:[t(e,{startPosition:"left",defaultRate:70,text:"\u5DE6\u4FA7"}),t(e,{startPosition:"right",defaultRate:70,text:"\u53F3\u4FA7"}),t(e,{startPosition:"bottom",defaultRate:70,text:"\u5E95\u90E8"})]})]})};export{b as default};
