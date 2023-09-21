var _=Object.defineProperty;var v=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var g=(t,e,n)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,O=(t,e)=>{for(var n in e||(e={}))$.call(e,n)&&g(t,n,e[n]);if(v)for(var n of v(e))M.call(e,n)&&g(t,n,e[n]);return t};import{l as f,a as w,p as A,c as R}from"./mobile.js";import{o as u,b as C,n as B,I as z,e as s,d as S,a as T,ar as I,_ as U,r as o,t as d,k as l,w as a}from"./style_icon.js";import{w as L}from"./Cart.js";const N=w("horizontal"),X=s("path",{d:"M921.091 171.09H102.91C81.09 171.09 62 152 62 130.183s19.09-40.91 40.909-40.91H921.09c21.818 0 40.909 19.092 40.909 40.91s-19.09 40.909-40.909 40.909zm0 763.638H102.91C81.09 934.728 62 915.636 62 893.818s19.09-40.909 40.909-40.909H921.09C942.91 852.91 962 872 962 893.818s-19.09 40.91-40.909 40.91zm0-381.82H375.636c-21.818 0-40.909-19.09-40.909-40.908s19.091-40.909 40.909-40.909H921.09C942.91 471.091 962 490.181 962 512s-19.09 40.909-40.909 40.909z",fill:"currentColor","fill-opacity":"0.9"},null,-1),E=[X];function K(t,e,n,i,h,b){return u(),C("svg",{class:B(t.classes),style:z(t.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1090 1024",role:"presentation"},E,6)}const D=f(N,[["render",K]]),j=w("share"),q=s("path",{d:"M555.392 64a8.533 8.533 0 0 1 6.037 14.57l-46.933 46.934a8.533 8.533 0 0 1-6.059 2.496h-273.77a106.667 106.667 0 0 0-106.56 102.037l-.107 4.63v554.666a106.667 106.667 0 0 0 102.037 106.56l4.63.107h554.666a106.667 106.667 0 0 0 106.56-102.037l.107-4.63V515.541a8.533 8.533 0 0 1 2.496-6.037l46.933-46.933A8.533 8.533 0 0 1 960 468.608v320.725A170.667 170.667 0 0 1 789.333 960H234.667A170.667 170.667 0 0 1 64 789.333V234.667A170.667 170.667 0 0 1 234.667 64h320.725zM928 64a32 32 0 0 1 32 32v241.792a8.533 8.533 0 0 1-2.496 6.037l-46.933 46.934A8.533 8.533 0 0 1 896 384.725V162.581l-348.8 348.8a8.533 8.533 0 0 1-12.075 0l-33.173-33.194a8.533 8.533 0 0 1 0-12.075L840.064 128h-200.79a8.533 8.533 0 0 1-6.037-14.57l46.934-46.934A8.533 8.533 0 0 1 686.208 64H928z",fill:"currentColor","fill-opacity":"0.9"},null,-1),F=[q];function G(t,e,n,i,h,b){return u(),C("svg",{class:B(t.classes),style:z(t.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",role:"presentation"},F,6)}const J=f(j,[["render",G]]),{translate:P}=R("navbar"),Q=()=>I({"zh-CN":{title1:"基础用法",back:"返回",navTitle1:"订单详情",navTitle2:"浏览记录",desc1:"清空",navTitle3:"购物车",desc2:"编辑",title2:"自定义导航栏中间内容",tab1:"标题1",tab2:"标题2",tab3:"标题3",title3:"多 tab 切换导航"},"en-US":{title1:"Basic Usage",back:"Back",navTitle1:"Order details",navTitle2:"Browsing history",desc1:"Clear",navTitle3:"Cart",desc2:"Edit",title2:"Customize the middle content of the navigation bar",tab1:"Title1",tab2:"Title2",tab3:"Title3",title3:"Multi-tab switching navigation"}}),W=S({components:{Share:J,Cart:L,MoreX:A,Horizontal:D},setup(){Q();const t=T(0),e=T(0);return O({translate:P,tab1value:t,tab2value:e},{back(){console.log("header头部， 点击返回")},title(){console.log("header头部， 点击title")},icon(){console.log("icon")},rightClick(){console.log("右侧点击事件")},changeTab(i){t.value=i.paneKey},changeTabList(i){e.value=i.paneKey}})}});const Y={class:"demo full"};function Z(t,e,n,i,h,b){const y=o("Share"),c=o("cub-navbar"),H=o("Cart"),p=o("MoreX"),r=o("cub-tab-pane"),m=o("cub-tabs"),V=o("Horizontal");return u(),C("div",Y,[s("h2",null,d(t.translate("title1")),1),l(c,{onOnClickBack:t.back,onOnClickTitle:t.title,title:t.translate("navTitle1")},{left:a(()=>[s("div",null,d(t.translate("back")),1)]),right:a(()=>[l(y,{width:"16px"})]),_:1},8,["onOnClickBack","onOnClickTitle","title"]),l(c,{onOnClickBack:t.back,onOnClickTitle:t.title,onOnClickRight:t.rightClick,title:t.translate("navTitle2"),desc:t.translate("desc1")},null,8,["onOnClickBack","onOnClickTitle","onOnClickRight","title","desc"]),l(c,{"left-show":!1,onOnClickBack:t.back,onOnClickTitle:t.title,onOnClickIcon:t.icon,onOnClickRight:t.rightClick,title:t.translate("navTitle3"),titleIcon:!0,desc:t.translate("desc2")},{"title-icon":a(()=>[l(H,{width:"16px"})]),right:a(()=>[l(p,{class:"right",width:"16px"})]),_:1},8,["onOnClickBack","onOnClickTitle","onOnClickIcon","onOnClickRight","title","desc"]),s("h2",null,d(t.translate("title2")),1),l(c,{onOnClickBack:t.back,onOnClickTitle:t.title,onOnClickRight:t.rightClick,desc:t.translate("desc2")},{content:a(()=>[l(m,{modelValue:t.tab1value,"onUpdate:modelValue":e[0]||(e[0]=k=>t.tab1value=k),onClick:t.changeTab},{default:a(()=>[l(r,{title:t.translate("tab1")},null,8,["title"]),l(r,{title:t.translate("tab2")},null,8,["title"])]),_:1},8,["modelValue","onClick"])]),right:a(()=>[l(p,{class:"right",width:"16px"})]),_:1},8,["onOnClickBack","onOnClickTitle","onOnClickRight","desc"]),s("h2",null,d(t.translate("title3")),1),l(c,{onOnClickBack:t.back},{content:a(()=>[l(m,{modelValue:t.tab2value,"onUpdate:modelValue":e[1]||(e[1]=k=>t.tab2value=k),onClick:t.changeTabList},{default:a(()=>[l(r,{title:t.translate("tab1")},null,8,["title"]),l(r,{title:t.translate("tab2")},null,8,["title"]),l(r,{title:t.translate("tab3")},null,8,["title"])]),_:1},8,["modelValue","onClick"])]),right:a(()=>[l(V,{class:"right",width:"16px"})]),_:1},8,["onOnClickBack"])])}const nt=U(W,[["render",Z],["__scopeId","data-v-3adab75e"]]);export{nt as default};
