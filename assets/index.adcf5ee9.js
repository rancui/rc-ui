import{c}from"./rc-cli_site-mobile-demo.e1e025a7.js";import{d as i,T as t}from"./index.0f55a6cf.js";import{a as n,j as u}from"./react-libs.5b212337.js";import"./locales.fc745e15.js";import"./mobile.c7d19b29.js";import"./constant.bd9aa8c7.js";import"./ConfigProviderContext.b49bb3f3.js";import"./index.2012bf47.js";import"./use-touch.ecb2ed24.js";const g=()=>{const{DemoBlock:e,DemoSection:r}=c;return n(r,{children:[n(e,{card:!0,title:"\u57FA\u7840\u7528\u6CD5",children:[u(i,{title:"\u6587\u5B57\u63D0\u793A",isLink:!0,onClick:()=>t.info("\u63D0\u793A\u5185\u5BB9")}),u(i,{title:"\u52A0\u8F7D\u63D0\u793A",isLink:!0,onClick:()=>{t.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!1,duration:2e3})}}),u(i,{title:"\u6210\u529F\u63D0\u793A",isLink:!0,onClick:()=>t.success("\u6210\u529F\u6587\u6848")}),u(i,{title:"\u5931\u8D25\u63D0\u793A",isLink:!0,onClick:()=>t.fail("\u5931\u8D25\u6587\u6848")})]}),u(e,{card:!0,title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",children:u(i,{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",isLink:!0,onClick:()=>{let o=4,s;const l=t({message:`\u8FD8\u5269 ${o+1} \u79D2`,duration:5e3,onClose:()=>clearInterval(s)});s=setInterval(()=>{l.config({message:`\u8FD8\u5269 ${o--} \u79D2`})},1e3)}})}),n(e,{card:!0,title:"\u81EA\u5B9A\u4E49\u56FE\u6807",children:[u(i,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",isLink:!0,onClick:()=>t({message:"\u81EA\u5B9A\u4E49\u56FE\u6807",icon:"fire-o"})}),u(i,{title:"\u81EA\u5B9A\u4E49\u56FE\u7247",isLink:!0,onClick:()=>t({message:"\u81EA\u5B9A\u4E49\u56FE\u7247",icon:"https://img01.yzcdn.cn/vant/logo.png"})}),u(i,{title:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",isLink:!0,onClick:()=>t.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0,loadingType:"spinner"})})]}),n(e,{card:!0,title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",children:[u(i,{title:"\u9876\u90E8\u5C55\u793A",isLink:!0,onClick:()=>t({message:"\u9876\u90E8\u5C55\u793A",position:"top"})}),u(i,{title:"\u5E95\u90E8\u5C55\u793A",isLink:!0,onClick:()=>t({message:"\u5E95\u90E8\u5C55\u793A",position:"bottom"})})]})]})};export{g as default};
