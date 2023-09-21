import{c as _}from"./mobile.js";import{d as c,ar as h,_ as g,r as o,b as d,e as r,t as u,k as t,w as a,o as x,F as v,i as C}from"./style_icon.js";import{h as b}from"./Category.js";import{w as y}from"./Home.js";import{v as S}from"./Search.js";const{translate:z}=_("grid"),N=()=>h({"zh-CN":{basic:"基础用法",text:"文字",columnNum:"自定义列数",square:"正方形格子",gutter:"格子间距",reverse:"内容翻转",Horizontal:"内容横向",iconStyle:"图标颜色/大小",route:"页面导航",customContent:"自定义内容",vueRouter:"路由跳转",url:"链接跳转"},"en-US":{basic:"Basic Usage",text:"text",columnNum:"Column Num",square:"Square",gutter:"Gutter",reverse:"Reverse",horizontal:"Horizontal",iconStyle:"Icon Style",route:"Route",customContent:"Custom Content",vueRouter:"Vue Router",url:"URL"}}),R=c({components:{Category:b,Home:y,Search:S},props:{},setup(){N();let e=new Map([["Michael",95],["Bob",75],["Tracy",85]]);return e.set("Adam",67),console.log(e),{translate:z}}}),k={class:"demo full"},w=r("img",{src:"https://oss.netconcepts.cn/website/assets/media/modules/service/img-6-800x600.jpg"},null,-1);function H(e,q,B,$,F,T){const n=o("Category"),l=o("cub-grid-item"),s=o("cub-grid"),f=o("Home"),m=o("Search"),i=o("cub-avatar");return x(),d("div",k,[r("h2",null,u(e.translate("basic")),1),t(s,null,{default:a(()=>[t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"])]),_:1}),r("h2",null,u(e.translate("columnNum")),1),t(s,{"column-num":3},{default:a(()=>[t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"])]),_:1}),r("h2",null,u(e.translate("square")),1),t(s,{"column-num":3,square:""},{default:a(()=>[t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"])]),_:1}),r("h2",null,u(e.translate("gutter")),1),t(s,{gutter:10},{default:a(()=>[t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"])]),_:1}),r("h2",null,u(e.translate("reverse")),1),t(s,{reverse:""},{default:a(()=>[t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"])]),_:1}),r("h2",null,u(e.translate("Horizontal")),1),t(s,{direction:"horizontal"},{default:a(()=>[t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"])]),_:1}),r("h2",null,u(e.translate("iconStyle")),1),t(s,{"column-num":3},{default:a(()=>[t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n,{height:"40px",width:"40px",color:"#478EF2"})]),_:1},8,["text"]),t(l,{text:e.translate("text")},{default:a(()=>[t(n)]),_:1},8,["text"])]),_:1}),r("h2",null,u(e.translate("route")),1),t(s,{"column-num":2},{default:a(()=>[t(l,{text:e.translate("vueRouter"),to:"/"},{default:a(()=>[t(f)]),_:1},8,["text"]),t(l,{text:e.translate("url"),url:"https://kakusoft.com"},{default:a(()=>[t(m)]),_:1},8,["text"])]),_:1}),r("h2",null,u(e.translate("customContent")),1),t(s,{border:!1},{default:a(()=>[(x(),d(v,null,C(4,p=>t(l,{key:p},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[w]),_:1})]),_:2},1024)),64))]),_:1})])}const j=g(R,[["render",H]]);export{j as default};
