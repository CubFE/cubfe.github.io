import{c as u}from"./mobile.js";import{d as b,a as f,r,b as g,e as n,t as i,u as e,k as o,w as a,ar as y,o as h,l as C,_ as v}from"./style_icon.js";const k={class:"demo"},w={class:"show"},N={class:"show"},T={class:"show"},x={class:"show"},V={style:{"margin-top":"10px"}},I=b({__name:"demo",setup(B){const{translate:t}=u("empty");(()=>y({"zh-CN":{basic:"基础用法",noData:"无数据",noContent:"无内容",noNetWork:"无网络",error:"加载失败/错误",imageType:"图片类型",description:"描述文字",customImg:"自定义图片",bottomContent:"底部内容",fail:"加载失败",retry:"重试"},"en-US":{basic:"Basic Usage",noData:"no data",noContent:"no content",noNetWork:"no network",error:"error",imageType:"Image Type",description:"description",customImg:"Custom Image",bottomContent:"Bottom Content",fail:"Failed to load",retry:"Retry"}}))();const l=f(0);return(W,d)=>{const s=r("cub-empty"),c=r("cub-tab-pane"),p=r("cub-tabs"),_=r("cub-button");return h(),g("div",k,[n("h2",null,i(e(t)("basic")),1),n("div",w,[o(s,{description:e(t)("noData")},null,8,["description"])]),n("h2",null,i(e(t)("imageType")),1),n("div",N,[o(p,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=m=>l.value=m)},{default:a(()=>[o(c,{title:e(t)("noContent")},{default:a(()=>[o(s,{image:"empty",description:e(t)("noContent")},null,8,["description"])]),_:1},8,["title"]),o(c,{title:e(t)("error")},{default:a(()=>[o(s,{image:"error",description:e(t)("error")},null,8,["description"])]),_:1},8,["title"]),o(c,{title:e(t)("noNetWork")},{default:a(()=>[o(s,{image:"network",description:e(t)("noNetWork")},null,8,["description"])]),_:1},8,["title"])]),_:1},8,["modelValue"])]),n("h2",null,i(e(t)("customImg")),1),n("div",T,[o(s,{image:"https://static-ftcms.kakusoft.com/p/files/61a9e3313985005b3958672e.png",description:e(t)("description")},null,8,["description"])]),n("h2",null,i(e(t)("bottomContent")),1),n("div",x,[o(s,{image:"error",description:e(t)("fail")},{default:a(()=>[n("div",V,[o(_,{icon:"refresh",type:"primary"},{default:a(()=>[C(i(e(t)("retry")),1)]),_:1})])]),_:1},8,["description"])])])}}});const z=v(I,[["__scopeId","data-v-91e78a3b"]]);export{z as default};