import{b as _,c as d}from"./mobile.js";import{d as u,ar as p,_ as h,r as n,b as w,e as a,t as r,k as t,w as o,o as f}from"./style_icon.js";import{g as m}from"./Success.js";const{translate:g}=d("trend-arrow"),b=()=>p({"zh-CN":{basic:"基础用法",title1:"改变文字颜色",title2:"指定小数位",title3:"箭头在前面",title4:"显示正负号",title5:"是否展示0",title6:"自定义颜色",title7:"自定义图标"},"en-US":{basic:"Basic Usage",title1:"Change text color",title2:"Specify decimal places",title3:"Arrow ahead",title4:"show sign",title5:"Whether to show 0",title6:"Custom color",title7:"Custom icon"}}),v=u({components:{Success:m,Failure:_},props:{},setup(){return b(),{translate:g}}});const S={class:"demo"},C={class:"title"},y={class:"title"},$={class:"title"},B={class:"title"},k={class:"title"},F={class:"title"},N={class:"title"};function x(s,L,T,U,V,z){const e=n("cub-trend-arrow"),l=n("cub-cell"),i=n("Success"),c=n("Failure");return f(),w("div",S,[a("h2",null,r(s.translate("basic")),1),t(l,null,{default:o(()=>[t(e,{"sync-text-color":!1,rate:1}),t(e,{"sync-text-color":!1,rate:-.2535})]),_:1}),a("view",C,r(s.translate("title1")),1),t(l,null,{default:o(()=>[t(e,{rate:10.2365}),t(e,{rate:-.2535})]),_:1}),a("view",y,r(s.translate("title2")),1),t(l,null,{default:o(()=>[t(e,{digits:1,rate:10.2365}),t(e,{digits:3,rate:-.2535})]),_:1}),a("view",$,r(s.translate("title3")),1),t(l,null,{default:o(()=>[t(e,{arrowLeft:"",rate:.2535}),t(e,{arrowLeft:"",rate:-.2535})]),_:1}),a("view",B,r(s.translate("title4")),1),t(l,null,{default:o(()=>[t(e,{showSign:"",rate:1}),t(e,{showSign:"",rate:-.2535})]),_:1}),a("view",k,r(s.translate("title5")),1),t(l,null,{default:o(()=>[t(e,{showSign:"",rate:0}),t(e,{showSign:"",showZero:"",rate:0})]),_:1}),a("view",F,r(s.translate("title6")),1),t(l,null,{default:o(()=>[t(e,{rate:10.2365,"rise-color":"rgb(73,143,242)"}),t(e,{rate:-.2535,showSign:"","drop-color":"rgb(255, 190, 13)"}),t(e,{"sync-text-color":!1,showSign:"",rate:-.2535,"text-color":"rgb(39,197,48)","drop-color":"rgb(255, 190, 13)"})]),_:1}),a("view",N,r(s.translate("title7")),1),t(l,null,{default:o(()=>[t(e,{rate:10.2365},{"up-icon":o(()=>[t(i,{color:"blue",width:"18",height:"18"})]),_:1}),t(e,{rate:-10.2365},{"down-icon":o(()=>[t(c,{color:"red"})]),_:1})]),_:1})])}const I=h(v,[["render",x],["__scopeId","data-v-761710eb"]]);export{I as default};