import{c as p}from"./mobile.js";import{d as _,a as d,r as u,b as f,e as i,t as e,u as n,k as o,w as a,ar as m,o as h,l as c}from"./style_icon.js";const y={class:"demo"},b=i("div",{style:{height:"100vh"}},null,-1),g=i("div",{style:{height:"100vh"}},null,-1),S=_({__name:"demo",setup(x){const{translate:t}=p("sticky");(()=>m({"zh-CN":{basic:"基础用法",title1:"吸顶距离",title2:"指定容器",title3:"吸底距离",content:"吸顶按钮"},"en-US":{basic:"Basic Usage",title1:"Ceiling distance",title2:"Specify container",title3:"Suction distance",content:"Ceiling button"}}))();const r=d(null);return(v,C)=>{const l=u("cub-button"),s=u("cub-sticky");return h(),f("div",y,[i("h2",null,e(n(t)("basic")),1),o(s,{top:"57"},{default:a(()=>[o(l,{type:"primary"},{default:a(()=>[c(e(n(t)("content")),1)]),_:1})]),_:1}),i("h2",null,e(n(t)("title1")),1),o(s,{top:"120"},{default:a(()=>[o(l,{type:"primary",style:{"margin-left":"50px"}},{default:a(()=>[c(e(n(t)("title1"))+" 120px",1)]),_:1})]),_:1}),i("h2",null,e(n(t)("title2")),1),i("div",{style:{width:"100%",height:"150px","background-color":"#fff"},ref_key:"container",ref:r},[o(s,{top:"57",container:r.value},{default:a(()=>[o(l,{type:"info",style:{"margin-left":"100px"}},{default:a(()=>[c(e(n(t)("title2")),1)]),_:1})]),_:1},8,["container"])],512),i("h2",null,e(n(t)("title3")),1),b,o(s,{bottom:"50",position:"bottom"},{default:a(()=>[o(l,{type:"primary"},{default:a(()=>[c(e(n(t)("title3"))+" 50px",1)]),_:1})]),_:1}),g])}}});export{S as default};
