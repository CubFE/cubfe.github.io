var m=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var w=(l,o,s)=>o in l?m(l,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[o]=s,d=(l,o)=>{for(var s in o||(o={}))g.call(o,s)&&w(l,s,o[s]);if(v)for(var s of v(o))$.call(o,s)&&w(l,s,o[s]);return l},f=(l,o)=>k(l,C(o));import{c as y}from"./mobile.js";import{d as U,x as B,Q as I,ar as P,_ as T,r as u,b as R,e as a,t as p,k as i,w as r,o as L,l as b}from"./style_icon.js";import{v as N}from"./Heart.js";const{translate:S}=y("popup"),H=()=>P({"zh-CN":{basic:"基础用法",cell1:"展示弹出层",text:"正文",position:"弹出位置",cell2:"顶部弹出",cell3:"底部弹出",cell4:"左侧弹出",cell5:"右侧弹出",close:"关闭图标",iposition:"图标位置",cicon:"自定义图标",circle:"圆角弹框",teleport:"指定挂载节点",muti:"多层堆叠",click:"点击它"},"en-US":{basic:"Basic Usage",cell1:"Show pop-up layer",text:"text",position:"Eject position",cell2:"Top pop-up",cell3:"Bottom pop-up",cell4:"Left pop-up",cell5:"Right pop-up",close:"Close icon",iposition:"Icon location",cicon:"Custom icon",circle:"Rounded bullet frame",teleport:"Specify mount node",muti:"Multi stack",click:"Click it"}}),V=U({components:{Heart:N},props:{},setup(){H();const l=B({showBasic:!1,showTop:!1,showBottom:!1,showLeft:!1,showRight:!1,showIcon:!1,showIconPosition:!1,showCloseIcon:!1,showRound:!1,showCombination:!1,showPop1:!1,showPop2:!1,showTeleport:!1});return f(d({},I(l)),{translate:S})}}),z={class:"demo"},E=a("div",{id:"test"},null,-1);function j(l,o,s,D,M,Q){const n=u("cub-cell"),t=u("cub-popup"),h=u("Heart");return L(),R("div",z,[E,a("h2",null,p(l.translate("basic")),1),i(n,{title:l.translate("cell1"),"is-link":"",onClick:o[0]||(o[0]=e=>l.showBasic=!0)},null,8,["title"]),i(t,{"pop-class":"popclass",style:{padding:"30px 50px"},visible:l.showBasic,"onUpdate:visible":o[1]||(o[1]=e=>l.showBasic=e),"z-index":100},{default:r(()=>[b(p(l.translate("text")),1)]),_:1},8,["visible"]),a("h2",null,p(l.translate("position")),1),i(n,{title:l.translate("cell2"),"is-link":"",onClick:o[2]||(o[2]=e=>l.showTop=!0)},null,8,["title"]),i(t,{position:"top",style:{height:"20%"},visible:l.showTop,"onUpdate:visible":o[3]||(o[3]=e=>l.showTop=e)},null,8,["visible"]),i(n,{title:l.translate("cell3"),"is-link":"",onClick:o[4]||(o[4]=e=>l.showBottom=!0)},null,8,["title"]),i(t,{position:"bottom",style:{height:"20%"},visible:l.showBottom,"onUpdate:visible":o[5]||(o[5]=e=>l.showBottom=e)},null,8,["visible"]),i(n,{title:l.translate("cell4"),"is-link":"",onClick:o[6]||(o[6]=e=>l.showLeft=!0)},null,8,["title"]),i(t,{position:"left",style:{width:"20%",height:"100%"},visible:l.showLeft,"onUpdate:visible":o[7]||(o[7]=e=>l.showLeft=e)},null,8,["visible"]),i(n,{title:l.translate("cell5"),"is-link":"",onClick:o[8]||(o[8]=e=>l.showRight=!0)},null,8,["title"]),i(t,{position:"right",style:{width:"20%",height:"100%"},visible:l.showRight,"onUpdate:visible":o[9]||(o[9]=e=>l.showRight=e)},null,8,["visible"]),a("h2",null,p(l.translate("close")),1),i(n,{title:l.translate("close"),"is-link":"",onClick:o[10]||(o[10]=e=>l.showIcon=!0)},null,8,["title"]),i(t,{position:"bottom",closeable:"",style:{height:"20%"},visible:l.showIcon,"onUpdate:visible":o[11]||(o[11]=e=>l.showIcon=e)},null,8,["visible"]),i(n,{title:l.translate("iposition"),"is-link":"",onClick:o[12]||(o[12]=e=>l.showIconPosition=!0)},null,8,["title"]),i(t,{position:"bottom",closeable:"","close-icon-position":"top-left",style:{height:"20%"},visible:l.showIconPosition,"onUpdate:visible":o[13]||(o[13]=e=>l.showIconPosition=e)},null,8,["visible"]),i(n,{title:l.translate("cicon"),"is-link":"",onClick:o[14]||(o[14]=e=>l.showCloseIcon=!0)},null,8,["title"]),i(t,{position:"bottom",closeable:"","close-icon-position":"top-left",style:{height:"20%"},visible:l.showCloseIcon,"onUpdate:visible":o[15]||(o[15]=e=>l.showCloseIcon=e)},{"close-icon":r(()=>[i(h)]),_:1},8,["visible"]),a("h2",null,p(l.translate("circle")),1),i(n,{title:l.translate("circle"),"is-link":"",onClick:o[16]||(o[16]=e=>l.showRound=!0)},null,8,["title"]),i(t,{position:"bottom",closeable:"",round:"",style:{height:"30%"},visible:l.showRound,"onUpdate:visible":o[17]||(o[17]=e=>l.showRound=e)},null,8,["visible"]),a("h2",null,p(l.translate("teleport")),1),i(n,{title:l.translate("teleport"),"is-link":"",onClick:o[18]||(o[18]=e=>l.showTeleport=!0)},null,8,["title"]),i(t,{style:{padding:"30px 50px"},teleport:"#app","teleport-disable":"",visible:l.showTeleport,"onUpdate:visible":o[19]||(o[19]=e=>l.showTeleport=e)},{default:r(()=>[b("app")]),_:1},8,["visible"]),a("h2",null,p(l.translate("muti")),1),i(n,{title:l.translate("muti"),"is-link":"",onClick:o[20]||(o[20]=e=>l.showPop1=!0)},null,8,["title"]),i(t,{style:{padding:"30px 50px"},visible:l.showPop1,"onUpdate:visible":o[22]||(o[22]=e=>l.showPop1=e)},{default:r(()=>[a("div",{onClick:o[21]||(o[21]=e=>l.showPop2=!0)},p(l.translate("click")),1)]),_:1},8,["visible"]),i(t,{style:{padding:"30px 50px"},visible:l.showPop2,"onUpdate:visible":o[23]||(o[23]=e=>l.showPop2=e)},{default:r(()=>[b(p(l.translate("text")),1)]),_:1},8,["visible"])])}const J=T(V,[["render",j]]);export{J as default};
