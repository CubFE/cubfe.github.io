import{c as m}from"./mobile.js";import{d as f,a as l,ar as h,_ as g,r as c,b as v,e,t as d,k as a,w as s,o as C,l as S,as as T,at as k}from"./style_icon.js";const{translate:y}=m("barrage"),B=()=>h({"zh-CN":{basic:"基础用法",slotTitle:"slot 用法",btn1:"随机添加"},"en-US":{basic:"Basic Usage",slotTitle:"slot usage",btn1:"Random addition"}}),I=f({props:{},setup(){B();const t=l(""),o=l();let u=l(["画美不看","不明觉厉","喜大普奔","男默女泪","累觉不爱","爷青结"]);function r(){let _=Math.random();o.value.add("随机——"+String(_).substr(2,10))}return{inputVal:t,danmu:o,list:u,addDanmu:r,translate:y}}});const n=t=>(T("data-v-7ef0efed"),t=t(),k(),t),N={class:"demo"},V={class:"test"},$=n(()=>e("span",null,"aaa",-1)),w=n(()=>e("span",null,"bbb",-1)),x=n(()=>e("span",null,"ccc",-1)),D=n(()=>e("span",null,"ddd",-1));function U(t,o,u,r,_,z){const i=c("cub-barrage"),p=c("cub-cell"),b=c("cub-button");return C(),v("div",N,[e("h2",null,d(t.translate("basic")),1),a(p,{class:"danmu-box"},{default:s(()=>[a(i,{ref:"danmu",danmu:t.list},null,8,["danmu"])]),_:1}),e("div",V,[a(b,{onClick:t.addDanmu,class:"add cub-button--primary"},{default:s(()=>[S(d(t.translate("btn1")),1)]),_:1},8,["onClick"])]),e("h2",null,d(t.translate("slotTitle")),1),a(p,{class:"danmu-box"},{default:s(()=>[a(i,null,{default:s(()=>[$,w,x,D]),_:1})]),_:1})])}const R=g(I,[["render",U],["__scopeId","data-v-7ef0efed"]]);export{R as default};
