import{j as b,k as f,c as y}from"./mobile.js";import{d as g,x as _,r as v,b as U,e as d,t as m,u as t,k as l,w as u,ar as C,o as x}from"./style_icon.js";import{s as r}from"./index.js";import"./Success.js";const z={class:"demo"},N=g({__name:"demo",setup(T){const{translate:o}=y("input-number");(()=>C({"zh-CN":{basic:"基础用法",step:"步长设置",limit:"限制输入范围",disable:"禁用操作",readonly:"只读禁用输入框",decimal:"支持小数",async:"支持异步修改",size:"自定义按钮大小",icon:"自定义图标",content1:"异步演示 2 秒后更改",content2:"超出限制事件触发"},"en-US":{basic:"Basic Usage",step:"Step size setting",limit:"Limit input range",disable:"Disable operation",readonly:"Read only disable input box",decimal:"Support decimal",async:"Support asynchronous modification",size:"Custom button size",icon:"Custom icon name",content1:"Asynchronous presentation changes in 2 seconds",content2:"Trigger of limit exceeding event"}}))();const e=_({val1:1,val2:0,val3:10,val4:0,val5:1,val6:5.5,val7:1,val8:1,val9:1,step:1.1}),c=p=>{r.loading(o("content1")),setTimeout(()=>{e.val8=p,r.hide()},2e3)},V=()=>{r.warn(o("content2"))};return(p,a)=>{const s=v("cub-input-number"),i=v("cub-cell");return x(),U("div",z,[d("h2",null,m(t(o)("basic")),1),l(i,null,{default:u(()=>[l(s,{modelValue:e.val1,"onUpdate:modelValue":a[0]||(a[0]=n=>e.val1=n)},null,8,["modelValue"])]),_:1}),d("h2",null,m(t(o)("step")),1),l(i,null,{default:u(()=>[l(s,{modelValue:e.val2,"onUpdate:modelValue":a[1]||(a[1]=n=>e.val2=n),step:"5"},null,8,["modelValue"])]),_:1}),d("h2",null,m(t(o)("limit")),1),l(i,null,{default:u(()=>[l(s,{modelValue:e.val3,"onUpdate:modelValue":a[2]||(a[2]=n=>e.val3=n),onOverlimit:V,min:"10",max:"20"},null,8,["modelValue"])]),_:1}),d("h2",null,m(t(o)("disable")),1),l(i,null,{default:u(()=>[l(s,{modelValue:e.val4,"onUpdate:modelValue":a[3]||(a[3]=n=>e.val4=n),disabled:""},null,8,["modelValue"])]),_:1}),d("h2",null,m(t(o)("readonly")),1),l(i,null,{default:u(()=>[l(s,{modelValue:e.val5,"onUpdate:modelValue":a[4]||(a[4]=n=>e.val5=n),readonly:""},null,8,["modelValue"])]),_:1}),d("h2",null,m(t(o)("decimal")),1),l(i,null,{default:u(()=>[l(s,{modelValue:e.val6,"onUpdate:modelValue":a[5]||(a[5]=n=>e.val6=n),step:"0.1","decimal-places":"1",readonly:""},null,8,["modelValue"])]),_:1}),d("h2",null,m(t(o)("async")),1),l(i,null,{default:u(()=>[l(s,{"model-value":e.val8,onChange:c},null,8,["model-value"])]),_:1}),d("h2",null,m(t(o)("size")),1),l(i,null,{default:u(()=>[l(s,{modelValue:e.val7,"onUpdate:modelValue":a[6]||(a[6]=n=>e.val7=n),"button-size":"30","input-width":"50"},null,8,["modelValue"])]),_:1}),d("h2",null,m(t(o)("icon")),1),l(i,null,{default:u(()=>[l(s,{modelValue:e.val9,"onUpdate:modelValue":a[7]||(a[7]=n=>e.val9=n)},{"left-icon":u(()=>[l(t(b))]),"right-icon":u(()=>[l(t(f))]),_:1},8,["modelValue"])]),_:1})])}}});export{N as default};
