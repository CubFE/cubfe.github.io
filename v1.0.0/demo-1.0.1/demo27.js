import{c as i}from"./mobile.js";import{d as u,x as m,a as _,ar as g,_ as h,r as s,b as f,e as C,t as v,k as c,w as b,o as S}from"./style_icon.js";const{translate:y}=i("ecard"),V=()=>g({"zh-CN":{basic:"基础用法"},"en-US":{basic:"Basic Usage"}}),B=u({setup(){V();const e=m([{price:10},{price:20},{price:30},{price:40}]),a=_(10);return{dataList:e,inputChange:n=>{a.value=n},change:n=>{a.value=n.price},money:a,changeStep:(n,t)=>{const o=t*n;a.value=o},translate:y}}});const $={class:"demo"};function k(e,a,r,l,p,n){const t=s("cub-ecard"),o=s("cub-cell");return S(),f("div",$,[C("h2",null,v(e.translate("basic")),1),c(o,null,{default:b(()=>[c(t,{modelValue:e.money,"onUpdate:modelValue":a[0]||(a[0]=d=>e.money=d),onInputChange:e.inputChange,onChange:e.change,onChangeStep:e.changeStep,"data-list":e.dataList},null,8,["modelValue","onInputChange","onChange","onChangeStep","data-list"])]),_:1})])}const U=h(B,[["render",k],["__scopeId","data-v-fdce0d6f"]]);export{U as default};