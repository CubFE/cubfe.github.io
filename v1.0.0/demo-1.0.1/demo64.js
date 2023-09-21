import{c as h}from"./mobile.js";import{d as p,a as m,ar as u,_,r as n,b as w,e,t as i,k as s,w as l,o as b}from"./style_icon.js";const{translate:g}=h("skeleton"),f=()=>u({"zh-CN":{basic:"基础用法",title:"传入多行",title1:"显示头像",title2:"标题段落圆角风格",title3:"图片组合",title4:"显示子组件",desc:"一套轻量级移动端Vue组库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。"},"en-US":{basic:"Basic Usage",title:"Incoming multiline",title1:"Show Faces",title2:"Title paragraph fillet style",title3:"Picture combination",title4:"Display subcomponents",desc:"A set of CubFE style lightweight mobile terminal Vue group library provides rich basic components and business components to help developers quickly build mobile applications."}}),v=p({setup(){return f(),{checked:m(!1),translate:g}}});const k={class:"demo"},x={class:"pic-compose"},y={class:"content"},V={class:"container"},C=e("img",{src:"https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"},null,-1),B={class:"right-content"},S=e("view",{class:"title"},"cubui",-1),$={class:"desc"};function z(t,o,E,N,T,U){const a=n("cub-skeleton"),c=n("cub-switch"),d=n("cub-avatar");return b(),w("view",k,[e("h2",null,i(t.translate("basic")),1),s(a,{width:"250px",height:"15px",animated:""}),e("h2",null,i(t.translate("title")),1),s(a,{width:"250px",height:"15px",title:"",animated:"",row:"3"}),e("h2",null,i(t.translate("title1")),1),s(a,{width:"250px",height:"15px",title:"",animated:"",avatar:"",avatarSize:"60px",row:"3"}),e("h2",null,i(t.translate("title2")),1),s(a,{width:"250px",height:"15px",animated:"",round:""}),e("h2",null,i(t.translate("title3")),1),e("div",x,[s(a,{width:"250px",height:"15px",title:"",animated:"",row:"3",class:"item"}),s(a,{width:"250px",height:"15px",title:"",animated:"",row:"3",class:"item"})]),e("h2",null,i(t.translate("title4")),1),e("view",y,[s(c,{modelValue:t.checked,"onUpdate:modelValue":o[0]||(o[0]=r=>t.checked=r)},null,8,["modelValue"]),s(a,{width:"250px",height:"15px",title:"",animated:"",avatar:"",row:"3",loading:!t.checked},{default:l(()=>[e("view",V,[s(d,{size:"50"},{default:l(()=>[C]),_:1}),e("view",B,[S,e("view",$,i(t.translate("desc")),1)])])]),_:1},8,["loading"])])])}const j=_(v,[["render",z]]);export{j as default};
