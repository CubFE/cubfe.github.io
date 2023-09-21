var K=Object.defineProperty;var F=(_,e,r)=>e in _?K(_,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):_[e]=r;var T=(_,e,r)=>(F(_,typeof e!="symbol"?e+"":e,r),r);import{_ as N,r as A,o as a,c as M,a as P,d as R,b as p,e as c,f as q,g as $,h as W,F as L,i as V,t as v,u as f,j as G,k as l,w as J,l as Q,n as I,m as X,p as B,q as Y,s as Z,v as oo,x as b,y as eo,z as _o,A as to,B as o,C as ro,D as so}from"./style_icon.js";const co={};function ao(_,e){const r=A("router-view");return a(),M(r)}const no=N(co,[["render",ao]]),U=class{constructor(){T(this,"currentRoute",P("/"));T(this,"_themeColor",P("black"))}static getInstance(){if(this.instance==null){this.instance=new U;let e=localStorage.getItem("cubui-theme-color");e&&(this.instance.themeColor.value=e)}return this.instance}get themeColor(){return this._themeColor}set themeColor(e){this._themeColor=e}};let E=U;T(E,"instance");const po={class:"doc-header"},mo=R({__name:"DocHeader",setup(_){const e=()=>{E.getInstance().currentRoute.value="/"};return(r,s)=>(a(),p("div",po,[c("div",{class:"header-logo"},[c("a",{class:"logo-link",href:"#",onClick:e})])]))}});const io={key:0},uo=R({__name:"Nav",setup(_){const e=P(!1),r=q(()=>function(n){const i=E.getInstance().currentRoute.value;return(i.indexOf("-taro")>-1?i.split("-taro")[0]:i)==n.toLowerCase()}),s=()=>{document.documentElement.scrollTop>64?e.value=!0:e.value=!1};return $(()=>{document.addEventListener("scroll",s)}),W(()=>{document.removeEventListener("scroll",s)}),(n,i)=>{const g=A("router-link");return a(),p("div",{class:I(["doc-nav",{fixed:e.value}])},[(a(!0),p(L,null,V(f(B),k=>(a(),p("ol",{key:k},[c("li",null,v(k.name),1),c("ul",null,[(a(!0),p(L,null,V(f(G)(k.packages),u=>(a(),p(L,{key:u},[u.show?(a(),p("li",io,[l(g,{to:u.name.toLowerCase(),class:I({active:r.value(u.name)})},{default:J(()=>[Q(v(u.name)+"  ",1),c("b",null,v(u.cName),1)]),_:2},1032,["to","class"])])):X("",!0)],64))),128))])]))),128))],2)}}});const vo={class:"doc-demo-preview"},Eo=["src"],go=c("div",{class:"volume-plus"},null,-1),ko=c("div",{class:"volume-minus"},null,-1),Co=c("div",{class:"off-btn"},null,-1),lo=c("div",{class:"home-btn"},null,-1),To=R({__name:"DemoPreview",props:{url:{type:String,default:""}},setup(_){return(e,r)=>(a(),p("div",vo,[c("iframe",{src:_.url,frameborder:"0"},null,8,Eo),go,ko,Co,lo]))}});const Lo={class:"doc-content",style:{height:"calc(100vh - 64px)","overflow-y":"scroll","padding-bottom":"50px"}},Io={class:"doc-title"},Ro={class:"title"},Do={class:"doc-content-document isComponent"},Po={class:"doc-content-tabs"},Vo=["onClick"],Ao=R({__name:"Index",setup(_){const e=Y(),r=Z();oo();const s=b({fixed:!1,hidden:!1,componentName:{name:"",cName:""}}),n=b({demoUrl:"demo.html",curKey:"vue",tabs:[{key:"vue",text:"vue"},{key:"taro",text:"taro"}]}),i=t=>t.path.indexOf("taro")>-1,g=t=>{const{origin:d,pathname:C}=window.location;E.getInstance().currentRoute.value=t.path;let m=`${d}${C.replace("index.html","")}demo.html#${t.path}`;n.demoUrl=m.replace("/component","")},k=t=>{const d=e.path;t.includes("taro")?r.replace(i(e)?d:`${d}-taro`):r.replace(i(e)?d.substr(0,d.length-5):d)},u=t=>{n.curKey=t,k(t)};$(()=>{S(),g(e),n.curKey=i(e)?"taro":"vue",document.addEventListener("scroll",j)});const j=()=>{let t=document.documentElement.scrollTop;t>127?(s.fixed=!0,t<142?s.hidden=!0:s.hidden=!1):(s.fixed=!1,s.hidden=!1)},S=t=>{var d;s.componentName.name=(d=(t==null?void 0:t.path)||(e==null?void 0:e.path))==null?void 0:d.split("/").slice(-1)[0],B.forEach(C=>{C.packages.forEach(m=>{if(m.name.toLowerCase()==s.componentName.name){s.componentName.name=m.name,s.componentName.cName=m.cName;return}})})};return eo(t=>{g(t),n.curKey=i(t)?"taro":"vue",S(t)}),(t,d)=>{const C=A("router-view");return a(),p("div",null,[l(mo),l(uo),c("div",Lo,[c("div",Io,[c("div",{class:I(["doc-title-position",{fixed:s.fixed,hidden:s.hidden}])},[c("div",Ro,v(s.componentName.name)+" "+v(s.componentName.cName),1)],2)]),c("div",Do,[c("div",Po,[(a(!0),p(L,null,V(n.tabs,m=>(a(),p("div",{class:I(["tab-item",{cur:n.curKey===m.key}]),key:m.key,onClick:ho=>u(m.key)},v(m.text),11,Vo))),128))]),l(C)]),l(To,{url:n.demoUrl},null,8,["url"])])])}}});const y=N(Ao,[["__scopeId","data-v-0c4f823c"]]),O=[],w=Object.assign({"/src/packages/vueComponents/actionsheet/doc.md":()=>o(()=>import("./doc2.js"),["demo-1.0.1/doc2.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/address/doc.md":()=>o(()=>import("./doc3.js"),["demo-1.0.1/doc3.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/addresslist/doc.md":()=>o(()=>import("./doc4.js"),["demo-1.0.1/doc4.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/animate/doc.md":()=>o(()=>import("./doc5.js"),["demo-1.0.1/doc5.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/audio/doc.md":()=>o(()=>import("./doc6.js"),["demo-1.0.1/doc6.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/audiooperate/doc.md":()=>o(()=>import("./doc7.js"),["demo-1.0.1/doc7.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/avatar/doc.md":()=>o(()=>import("./doc8.js"),["demo-1.0.1/doc8.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/backtop/doc.md":()=>o(()=>import("./doc9.js"),["demo-1.0.1/doc9.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/badge/doc.md":()=>o(()=>import("./doc10.js"),["demo-1.0.1/doc10.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/barrage/doc.md":()=>o(()=>import("./doc11.js"),["demo-1.0.1/doc11.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/button/doc.md":()=>o(()=>import("./doc12.js"),["demo-1.0.1/doc12.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/calendar/doc.md":()=>o(()=>import("./doc13.js"),["demo-1.0.1/doc13.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/card/doc.md":()=>o(()=>import("./doc14.js"),["demo-1.0.1/doc14.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/cascader/doc.md":()=>o(()=>import("./doc15.js"),["demo-1.0.1/doc15.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/category/doc.md":()=>o(()=>import("./doc16.js"),["demo-1.0.1/doc16.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/cell/doc.md":()=>o(()=>import("./doc17.js"),["demo-1.0.1/doc17.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/checkbox/doc.md":()=>o(()=>import("./doc18.js"),["demo-1.0.1/doc18.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/circleprogress/doc.md":()=>o(()=>import("./doc19.js"),["demo-1.0.1/doc19.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/collapse/doc.md":()=>o(()=>import("./doc20.js"),["demo-1.0.1/doc20.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/comment/doc.md":()=>o(()=>import("./doc21.js"),["demo-1.0.1/doc21.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/configprovider/doc.md":()=>o(()=>import("./doc22.js"),["demo-1.0.1/doc22.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/countdown/doc.md":()=>o(()=>import("./doc23.js"),["demo-1.0.1/doc23.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/countup/doc.md":()=>o(()=>import("./doc24.js"),["demo-1.0.1/doc24.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/datepicker/doc.md":()=>o(()=>import("./doc25.js"),["demo-1.0.1/doc25.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/dialog/doc.md":()=>o(()=>import("./doc26.js"),["demo-1.0.1/doc26.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/divider/doc.md":()=>o(()=>import("./doc27.js"),["demo-1.0.1/doc27.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/drag/doc.md":()=>o(()=>import("./doc28.js"),["demo-1.0.1/doc28.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/ecard/doc.md":()=>o(()=>import("./doc29.js"),["demo-1.0.1/doc29.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/elevator/doc.md":()=>o(()=>import("./doc30.js"),["demo-1.0.1/doc30.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/ellipsis/doc.md":()=>o(()=>import("./doc31.js"),["demo-1.0.1/doc31.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/empty/doc.md":()=>o(()=>import("./doc32.js"),["demo-1.0.1/doc32.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/fixednav/doc.md":()=>o(()=>import("./doc33.js"),["demo-1.0.1/doc33.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/form/doc.md":()=>o(()=>import("./doc34.js"),["demo-1.0.1/doc34.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/grid/doc.md":()=>o(()=>import("./doc35.js"),["demo-1.0.1/doc35.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/icon/doc.md":()=>o(()=>import("./doc36.js"),["demo-1.0.1/doc36.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/image/doc.md":()=>o(()=>import("./doc37.js"),["demo-1.0.1/doc37.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/imagepreview/doc.md":()=>o(()=>import("./doc38.js"),["demo-1.0.1/doc38.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/indicator/doc.md":()=>o(()=>import("./doc39.js"),["demo-1.0.1/doc39.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/infiniteloading/doc.md":()=>o(()=>import("./doc40.js"),["demo-1.0.1/doc40.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/input/doc.md":()=>o(()=>import("./doc41.js"),["demo-1.0.1/doc41.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/inputnumber/doc.md":()=>o(()=>import("./doc42.js"),["demo-1.0.1/doc42.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/invoice/doc.md":()=>o(()=>import("./doc43.js"),["demo-1.0.1/doc43.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/layout/doc.md":()=>o(()=>import("./doc44.js"),["demo-1.0.1/doc44.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/list/doc.md":()=>o(()=>import("./doc45.js"),["demo-1.0.1/doc45.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/menu/doc.md":()=>o(()=>import("./doc46.js"),["demo-1.0.1/doc46.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/navbar/doc.md":()=>o(()=>import("./doc47.js"),["demo-1.0.1/doc47.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/noticebar/doc.md":()=>o(()=>import("./doc48.js"),["demo-1.0.1/doc48.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/notify/doc.md":()=>o(()=>import("./doc49.js"),["demo-1.0.1/doc49.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/numberkeyboard/doc.md":()=>o(()=>import("./doc50.js"),["demo-1.0.1/doc50.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/overlay/doc.md":()=>o(()=>import("./doc51.js"),["demo-1.0.1/doc51.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/pagination/doc.md":()=>o(()=>import("./doc52.js"),["demo-1.0.1/doc52.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/picker/doc.md":()=>o(()=>import("./doc53.js"),["demo-1.0.1/doc53.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/popover/doc.md":()=>o(()=>import("./doc54.js"),["demo-1.0.1/doc54.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/popup/doc.md":()=>o(()=>import("./doc55.js"),["demo-1.0.1/doc55.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/price/doc.md":()=>o(()=>import("./doc56.js"),["demo-1.0.1/doc56.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/progress/doc.md":()=>o(()=>import("./doc57.js"),["demo-1.0.1/doc57.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/pullrefresh/doc.md":()=>o(()=>import("./doc58.js"),["demo-1.0.1/doc58.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/radio/doc.md":()=>o(()=>import("./doc59.js"),["demo-1.0.1/doc59.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/range/doc.md":()=>o(()=>import("./doc60.js"),["demo-1.0.1/doc60.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/rate/doc.md":()=>o(()=>import("./doc61.js"),["demo-1.0.1/doc61.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/searchbar/doc.md":()=>o(()=>import("./doc62.js"),["demo-1.0.1/doc62.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/shortpassword/doc.md":()=>o(()=>import("./doc63.js"),["demo-1.0.1/doc63.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sidenavbar/doc.md":()=>o(()=>import("./doc64.js"),["demo-1.0.1/doc64.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/signature/doc.md":()=>o(()=>import("./doc65.js"),["demo-1.0.1/doc65.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/skeleton/doc.md":()=>o(()=>import("./doc66.js"),["demo-1.0.1/doc66.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sku/doc.md":()=>o(()=>import("./doc67.js"),["demo-1.0.1/doc67.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/steps/doc.md":()=>o(()=>import("./doc68.js"),["demo-1.0.1/doc68.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sticky/doc.md":()=>o(()=>import("./doc69.js"),["demo-1.0.1/doc69.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/swipe/doc.md":()=>o(()=>import("./doc70.js"),["demo-1.0.1/doc70.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/swiper/doc.md":()=>o(()=>import("./doc71.js"),["demo-1.0.1/doc71.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/switch/doc.md":()=>o(()=>import("./doc72.js"),["demo-1.0.1/doc72.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tabbar/doc.md":()=>o(()=>import("./doc73.js"),["demo-1.0.1/doc73.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/table/doc.md":()=>o(()=>import("./doc74.js"),["demo-1.0.1/doc74.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tabs/doc.md":()=>o(()=>import("./doc75.js"),["demo-1.0.1/doc75.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tag/doc.md":()=>o(()=>import("./doc76.js"),["demo-1.0.1/doc76.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/textarea/doc.md":()=>o(()=>import("./doc77.js"),["demo-1.0.1/doc77.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/timedetail/doc.md":()=>o(()=>import("./doc78.js"),["demo-1.0.1/doc78.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/timepannel/doc.md":()=>o(()=>import("./doc79.js"),["demo-1.0.1/doc79.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/timeselect/doc.md":()=>o(()=>import("./doc80.js"),["demo-1.0.1/doc80.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/toast/doc.md":()=>o(()=>import("./doc81.js"),["demo-1.0.1/doc81.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tour/doc.md":()=>o(()=>import("./doc82.js"),["demo-1.0.1/doc82.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/trendarrow/doc.md":()=>o(()=>import("./doc83.js"),["demo-1.0.1/doc83.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/uploader/doc.md":()=>o(()=>import("./doc84.js"),["demo-1.0.1/doc84.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/video/doc.md":()=>o(()=>import("./doc85.js"),["demo-1.0.1/doc85.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/watermark/doc.md":()=>o(()=>import("./doc86.js"),["demo-1.0.1/doc86.js","demo-1.0.1/style_icon.js"])});for(const _ in w){const e=/packages\/vueComponents\/(.*)\/doc.md/.exec(_)[1];O.push({path:"/zh-CN/component/"+e,component:w[_]})}const h=[],x=Object.assign({"/src/packages/vueComponents/actionsheet/doc.en-US.md":()=>o(()=>import("./doc.en-US.js"),["demo-1.0.1/doc.en-US.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/address/doc.en-US.md":()=>o(()=>import("./doc.en-US2.js"),["demo-1.0.1/doc.en-US2.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/addresslist/doc.en-US.md":()=>o(()=>import("./doc.en-US3.js"),["demo-1.0.1/doc.en-US3.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/animate/doc.en-US.md":()=>o(()=>import("./doc.en-US4.js"),["demo-1.0.1/doc.en-US4.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/audio/doc.en-US.md":()=>o(()=>import("./doc.en-US5.js"),["demo-1.0.1/doc.en-US5.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/avatar/doc.en-US.md":()=>o(()=>import("./doc.en-US6.js"),["demo-1.0.1/doc.en-US6.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/backtop/doc.en-US.md":()=>o(()=>import("./doc.en-US7.js"),["demo-1.0.1/doc.en-US7.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/badge/doc.en-US.md":()=>o(()=>import("./doc.en-US8.js"),["demo-1.0.1/doc.en-US8.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/barrage/doc.en-US.md":()=>o(()=>import("./doc.en-US9.js"),["demo-1.0.1/doc.en-US9.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/button/doc.en-US.md":()=>o(()=>import("./doc.en-US10.js"),["demo-1.0.1/doc.en-US10.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/calendar/doc.en-US.md":()=>o(()=>import("./doc.en-US11.js"),["demo-1.0.1/doc.en-US11.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/card/doc.en-US.md":()=>o(()=>import("./doc.en-US12.js"),["demo-1.0.1/doc.en-US12.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/cascader/doc.en-US.md":()=>o(()=>import("./doc.en-US13.js"),["demo-1.0.1/doc.en-US13.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/category/doc.en-US.md":()=>o(()=>import("./doc.en-US14.js"),["demo-1.0.1/doc.en-US14.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/cell/doc.en-US.md":()=>o(()=>import("./doc.en-US15.js"),["demo-1.0.1/doc.en-US15.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/checkbox/doc.en-US.md":()=>o(()=>import("./doc.en-US16.js"),["demo-1.0.1/doc.en-US16.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/circleprogress/doc.en-US.md":()=>o(()=>import("./doc.en-US17.js"),["demo-1.0.1/doc.en-US17.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/collapse/doc.en-US.md":()=>o(()=>import("./doc.en-US18.js"),["demo-1.0.1/doc.en-US18.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/comment/doc.en-US.md":()=>o(()=>import("./doc.en-US19.js"),["demo-1.0.1/doc.en-US19.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/configprovider/doc.en-US.md":()=>o(()=>import("./doc.en-US20.js"),["demo-1.0.1/doc.en-US20.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/countdown/doc.en-US.md":()=>o(()=>import("./doc.en-US21.js"),["demo-1.0.1/doc.en-US21.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/countup/doc.en-US.md":()=>o(()=>import("./doc.en-US22.js"),["demo-1.0.1/doc.en-US22.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/datepicker/doc.en-US.md":()=>o(()=>import("./doc.en-US23.js"),["demo-1.0.1/doc.en-US23.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/dialog/doc.en-US.md":()=>o(()=>import("./doc.en-US24.js"),["demo-1.0.1/doc.en-US24.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/divider/doc.en-US.md":()=>o(()=>import("./doc.en-US25.js"),["demo-1.0.1/doc.en-US25.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/drag/doc.en-US.md":()=>o(()=>import("./doc.en-US26.js"),["demo-1.0.1/doc.en-US26.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/ecard/doc.en-US.md":()=>o(()=>import("./doc.en-US27.js"),["demo-1.0.1/doc.en-US27.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/elevator/doc.en-US.md":()=>o(()=>import("./doc.en-US28.js"),["demo-1.0.1/doc.en-US28.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/ellipsis/doc.en-US.md":()=>o(()=>import("./doc.en-US29.js"),["demo-1.0.1/doc.en-US29.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/empty/doc.en-US.md":()=>o(()=>import("./doc.en-US30.js"),["demo-1.0.1/doc.en-US30.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/fixednav/doc.en-US.md":()=>o(()=>import("./doc.en-US31.js"),["demo-1.0.1/doc.en-US31.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/form/doc.en-US.md":()=>o(()=>import("./doc.en-US32.js"),["demo-1.0.1/doc.en-US32.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/grid/doc.en-US.md":()=>o(()=>import("./doc.en-US33.js"),["demo-1.0.1/doc.en-US33.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/icon/doc.en-US.md":()=>o(()=>import("./doc.en-US34.js"),["demo-1.0.1/doc.en-US34.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/image/doc.en-US.md":()=>o(()=>import("./doc.en-US35.js"),["demo-1.0.1/doc.en-US35.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/imagepreview/doc.en-US.md":()=>o(()=>import("./doc.en-US36.js"),["demo-1.0.1/doc.en-US36.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/indicator/doc.en-US.md":()=>o(()=>import("./doc.en-US37.js"),["demo-1.0.1/doc.en-US37.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/infiniteloading/doc.en-US.md":()=>o(()=>import("./doc.en-US38.js"),["demo-1.0.1/doc.en-US38.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/input/doc.en-US.md":()=>o(()=>import("./doc.en-US39.js"),["demo-1.0.1/doc.en-US39.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/inputnumber/doc.en-US.md":()=>o(()=>import("./doc.en-US40.js"),["demo-1.0.1/doc.en-US40.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/invoice/doc.en-US.md":()=>o(()=>import("./doc.en-US41.js"),["demo-1.0.1/doc.en-US41.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/layout/doc.en-US.md":()=>o(()=>import("./doc.en-US42.js"),["demo-1.0.1/doc.en-US42.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/list/doc.en-US.md":()=>o(()=>import("./doc.en-US43.js"),["demo-1.0.1/doc.en-US43.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/menu/doc.en-US.md":()=>o(()=>import("./doc.en-US44.js"),["demo-1.0.1/doc.en-US44.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/navbar/doc.en-US.md":()=>o(()=>import("./doc.en-US45.js"),["demo-1.0.1/doc.en-US45.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/noticebar/doc.en-US.md":()=>o(()=>import("./doc.en-US46.js"),["demo-1.0.1/doc.en-US46.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/notify/doc.en-US.md":()=>o(()=>import("./doc.en-US47.js"),["demo-1.0.1/doc.en-US47.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/numberkeyboard/doc.en-US.md":()=>o(()=>import("./doc.en-US48.js"),["demo-1.0.1/doc.en-US48.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/overlay/doc.en-US.md":()=>o(()=>import("./doc.en-US49.js"),["demo-1.0.1/doc.en-US49.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/pagination/doc.en-US.md":()=>o(()=>import("./doc.en-US50.js"),["demo-1.0.1/doc.en-US50.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/picker/doc.en-US.md":()=>o(()=>import("./doc.en-US51.js"),["demo-1.0.1/doc.en-US51.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/popover/doc.en-US.md":()=>o(()=>import("./doc.en-US52.js"),["demo-1.0.1/doc.en-US52.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/popup/doc.en-US.md":()=>o(()=>import("./doc.en-US53.js"),["demo-1.0.1/doc.en-US53.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/price/doc.en-US.md":()=>o(()=>import("./doc.en-US54.js"),["demo-1.0.1/doc.en-US54.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/progress/doc.en-US.md":()=>o(()=>import("./doc.en-US55.js"),["demo-1.0.1/doc.en-US55.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/pullrefresh/doc.en-US.md":()=>o(()=>import("./doc.en-US56.js"),["demo-1.0.1/doc.en-US56.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/radio/doc.en-US.md":()=>o(()=>import("./doc.en-US57.js"),["demo-1.0.1/doc.en-US57.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/range/doc.en-US.md":()=>o(()=>import("./doc.en-US58.js"),["demo-1.0.1/doc.en-US58.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/rate/doc.en-US.md":()=>o(()=>import("./doc.en-US59.js"),["demo-1.0.1/doc.en-US59.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/searchbar/doc.en-US.md":()=>o(()=>import("./doc.en-US60.js"),["demo-1.0.1/doc.en-US60.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/shortpassword/doc.en-US.md":()=>o(()=>import("./doc.en-US61.js"),["demo-1.0.1/doc.en-US61.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sidenavbar/doc.en-US.md":()=>o(()=>import("./doc.en-US62.js"),["demo-1.0.1/doc.en-US62.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/signature/doc.en-US.md":()=>o(()=>import("./doc.en-US63.js"),["demo-1.0.1/doc.en-US63.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/skeleton/doc.en-US.md":()=>o(()=>import("./doc.en-US64.js"),["demo-1.0.1/doc.en-US64.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sku/doc.en-US.md":()=>o(()=>import("./doc.en-US65.js"),["demo-1.0.1/doc.en-US65.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/steps/doc.en-US.md":()=>o(()=>import("./doc.en-US66.js"),["demo-1.0.1/doc.en-US66.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sticky/doc.en-US.md":()=>o(()=>import("./doc.en-US67.js"),["demo-1.0.1/doc.en-US67.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/swipe/doc.en-US.md":()=>o(()=>import("./doc.en-US68.js"),["demo-1.0.1/doc.en-US68.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/swiper/doc.en-US.md":()=>o(()=>import("./doc.en-US69.js"),["demo-1.0.1/doc.en-US69.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/switch/doc.en-US.md":()=>o(()=>import("./doc.en-US70.js"),["demo-1.0.1/doc.en-US70.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tabbar/doc.en-US.md":()=>o(()=>import("./doc.en-US71.js"),["demo-1.0.1/doc.en-US71.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/table/doc.en-US.md":()=>o(()=>import("./doc.en-US72.js"),["demo-1.0.1/doc.en-US72.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tabs/doc.en-US.md":()=>o(()=>import("./doc.en-US73.js"),["demo-1.0.1/doc.en-US73.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tag/doc.en-US.md":()=>o(()=>import("./doc.en-US74.js"),["demo-1.0.1/doc.en-US74.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/textarea/doc.en-US.md":()=>o(()=>import("./doc.en-US75.js"),["demo-1.0.1/doc.en-US75.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/timeselect/doc.en-US.md":()=>o(()=>import("./doc.en-US76.js"),["demo-1.0.1/doc.en-US76.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/toast/doc.en-US.md":()=>o(()=>import("./doc.en-US77.js"),["demo-1.0.1/doc.en-US77.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tour/doc.en-US.md":()=>o(()=>import("./doc.en-US78.js"),["demo-1.0.1/doc.en-US78.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/trendarrow/doc.en-US.md":()=>o(()=>import("./doc.en-US79.js"),["demo-1.0.1/doc.en-US79.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/uploader/doc.en-US.md":()=>o(()=>import("./doc.en-US80.js"),["demo-1.0.1/doc.en-US80.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/video/doc.en-US.md":()=>o(()=>import("./doc.en-US81.js"),["demo-1.0.1/doc.en-US81.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/watermark/doc.en-US.md":()=>o(()=>import("./doc.en-US82.js"),["demo-1.0.1/doc.en-US82.js","demo-1.0.1/style_icon.js"])});for(const _ in x){const e=/packages\/vueComponents\/(.*)\/doc.en-US.md/.exec(_)[1];h.push({path:"/en-US/component/"+e,component:x[_]})}const D=Object.assign({"/src/packages/vueComponents/actionsheet/doc.taro.md":()=>o(()=>import("./doc.taro.js"),["demo-1.0.1/doc.taro.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/address/doc.taro.md":()=>o(()=>import("./doc.taro2.js"),["demo-1.0.1/doc.taro2.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/addresslist/doc.taro.md":()=>o(()=>import("./doc.taro3.js"),["demo-1.0.1/doc.taro3.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/animate/doc.taro.md":()=>o(()=>import("./doc.taro4.js"),["demo-1.0.1/doc.taro4.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/audio/doc.taro.md":()=>o(()=>import("./doc.taro5.js"),["demo-1.0.1/doc.taro5.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/avatar/doc.taro.md":()=>o(()=>import("./doc.taro6.js"),["demo-1.0.1/doc.taro6.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/backtop/doc.taro.md":()=>o(()=>import("./doc.taro7.js"),["demo-1.0.1/doc.taro7.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/badge/doc.taro.md":()=>o(()=>import("./doc.taro8.js"),["demo-1.0.1/doc.taro8.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/barrage/doc.taro.md":()=>o(()=>import("./doc.taro9.js"),["demo-1.0.1/doc.taro9.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/button/doc.taro.md":()=>o(()=>import("./doc.taro10.js"),["demo-1.0.1/doc.taro10.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/calendar/doc.taro.md":()=>o(()=>import("./doc.taro11.js"),["demo-1.0.1/doc.taro11.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/card/doc.taro.md":()=>o(()=>import("./doc.taro12.js"),["demo-1.0.1/doc.taro12.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/cascader/doc.taro.md":()=>o(()=>import("./doc.taro13.js"),["demo-1.0.1/doc.taro13.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/category/doc.taro.md":()=>o(()=>import("./doc.taro14.js"),["demo-1.0.1/doc.taro14.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/cell/doc.taro.md":()=>o(()=>import("./doc.taro15.js"),["demo-1.0.1/doc.taro15.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/checkbox/doc.taro.md":()=>o(()=>import("./doc.taro16.js"),["demo-1.0.1/doc.taro16.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/circleprogress/doc.taro.md":()=>o(()=>import("./doc.taro17.js"),["demo-1.0.1/doc.taro17.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/collapse/doc.taro.md":()=>o(()=>import("./doc.taro18.js"),["demo-1.0.1/doc.taro18.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/comment/doc.taro.md":()=>o(()=>import("./doc.taro19.js"),["demo-1.0.1/doc.taro19.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/configprovider/doc.taro.md":()=>o(()=>import("./doc.taro20.js"),["demo-1.0.1/doc.taro20.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/countdown/doc.taro.md":()=>o(()=>import("./doc.taro21.js"),["demo-1.0.1/doc.taro21.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/countup/doc.taro.md":()=>o(()=>import("./doc.taro22.js"),["demo-1.0.1/doc.taro22.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/datepicker/doc.taro.md":()=>o(()=>import("./doc.taro23.js"),["demo-1.0.1/doc.taro23.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/dialog/doc.taro.md":()=>o(()=>import("./doc.taro24.js"),["demo-1.0.1/doc.taro24.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/divider/doc.taro.md":()=>o(()=>import("./doc.taro25.js"),["demo-1.0.1/doc.taro25.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/drag/doc.taro.md":()=>o(()=>import("./doc.taro26.js"),["demo-1.0.1/doc.taro26.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/ecard/doc.taro.md":()=>o(()=>import("./doc.taro27.js"),["demo-1.0.1/doc.taro27.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/elevator/doc.taro.md":()=>o(()=>import("./doc.taro28.js"),["demo-1.0.1/doc.taro28.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/ellipsis/doc.taro.md":()=>o(()=>import("./doc.taro29.js"),["demo-1.0.1/doc.taro29.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/empty/doc.taro.md":()=>o(()=>import("./doc.taro30.js"),["demo-1.0.1/doc.taro30.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/fixednav/doc.taro.md":()=>o(()=>import("./doc.taro31.js"),["demo-1.0.1/doc.taro31.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/form/doc.taro.md":()=>o(()=>import("./doc.taro32.js"),["demo-1.0.1/doc.taro32.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/grid/doc.taro.md":()=>o(()=>import("./doc.taro33.js"),["demo-1.0.1/doc.taro33.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/icon/doc.taro.md":()=>o(()=>import("./doc.taro34.js"),["demo-1.0.1/doc.taro34.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/image/doc.taro.md":()=>o(()=>import("./doc.taro35.js"),["demo-1.0.1/doc.taro35.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/imagepreview/doc.taro.md":()=>o(()=>import("./doc.taro36.js"),["demo-1.0.1/doc.taro36.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/indicator/doc.taro.md":()=>o(()=>import("./doc.taro37.js"),["demo-1.0.1/doc.taro37.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/infiniteloading/doc.taro.md":()=>o(()=>import("./doc.taro38.js"),["demo-1.0.1/doc.taro38.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/input/doc.taro.md":()=>o(()=>import("./doc.taro39.js"),["demo-1.0.1/doc.taro39.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/inputnumber/doc.taro.md":()=>o(()=>import("./doc.taro40.js"),["demo-1.0.1/doc.taro40.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/invoice/doc.taro.md":()=>o(()=>import("./doc.taro41.js"),["demo-1.0.1/doc.taro41.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/layout/doc.taro.md":()=>o(()=>import("./doc.taro42.js"),["demo-1.0.1/doc.taro42.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/list/doc.taro.md":()=>o(()=>import("./doc.taro43.js"),["demo-1.0.1/doc.taro43.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/menu/doc.taro.md":()=>o(()=>import("./doc.taro44.js"),["demo-1.0.1/doc.taro44.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/navbar/doc.taro.md":()=>o(()=>import("./doc.taro45.js"),["demo-1.0.1/doc.taro45.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/noticebar/doc.taro.md":()=>o(()=>import("./doc.taro46.js"),["demo-1.0.1/doc.taro46.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/notify/doc.taro.md":()=>o(()=>import("./doc.taro47.js"),["demo-1.0.1/doc.taro47.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/numberkeyboard/doc.taro.md":()=>o(()=>import("./doc.taro48.js"),["demo-1.0.1/doc.taro48.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/overlay/doc.taro.md":()=>o(()=>import("./doc.taro49.js"),["demo-1.0.1/doc.taro49.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/pagination/doc.taro.md":()=>o(()=>import("./doc.taro50.js"),["demo-1.0.1/doc.taro50.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/picker/doc.taro.md":()=>o(()=>import("./doc.taro51.js"),["demo-1.0.1/doc.taro51.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/popover/doc.taro.md":()=>o(()=>import("./doc.taro52.js"),["demo-1.0.1/doc.taro52.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/popup/doc.taro.md":()=>o(()=>import("./doc.taro53.js"),["demo-1.0.1/doc.taro53.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/price/doc.taro.md":()=>o(()=>import("./doc.taro54.js"),["demo-1.0.1/doc.taro54.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/progress/doc.taro.md":()=>o(()=>import("./doc.taro55.js"),["demo-1.0.1/doc.taro55.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/pullrefresh/doc.taro.md":()=>o(()=>import("./doc.taro56.js"),["demo-1.0.1/doc.taro56.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/radio/doc.taro.md":()=>o(()=>import("./doc.taro57.js"),["demo-1.0.1/doc.taro57.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/range/doc.taro.md":()=>o(()=>import("./doc.taro58.js"),["demo-1.0.1/doc.taro58.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/rate/doc.taro.md":()=>o(()=>import("./doc.taro59.js"),["demo-1.0.1/doc.taro59.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/searchbar/doc.taro.md":()=>o(()=>import("./doc.taro60.js"),["demo-1.0.1/doc.taro60.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/shortpassword/doc.taro.md":()=>o(()=>import("./doc.taro61.js"),["demo-1.0.1/doc.taro61.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sidenavbar/doc.taro.md":()=>o(()=>import("./doc.taro62.js"),["demo-1.0.1/doc.taro62.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/signature/doc.taro.md":()=>o(()=>import("./doc.taro63.js"),["demo-1.0.1/doc.taro63.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/skeleton/doc.taro.md":()=>o(()=>import("./doc.taro64.js"),["demo-1.0.1/doc.taro64.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sku/doc.taro.md":()=>o(()=>import("./doc.taro65.js"),["demo-1.0.1/doc.taro65.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/steps/doc.taro.md":()=>o(()=>import("./doc.taro66.js"),["demo-1.0.1/doc.taro66.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/sticky/doc.taro.md":()=>o(()=>import("./doc.taro67.js"),["demo-1.0.1/doc.taro67.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/swipe/doc.taro.md":()=>o(()=>import("./doc.taro68.js"),["demo-1.0.1/doc.taro68.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/swiper/doc.taro.md":()=>o(()=>import("./doc.taro69.js"),["demo-1.0.1/doc.taro69.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/switch/doc.taro.md":()=>o(()=>import("./doc.taro70.js"),["demo-1.0.1/doc.taro70.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tabbar/doc.taro.md":()=>o(()=>import("./doc.taro71.js"),["demo-1.0.1/doc.taro71.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/table/doc.taro.md":()=>o(()=>import("./doc.taro72.js"),["demo-1.0.1/doc.taro72.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tabs/doc.taro.md":()=>o(()=>import("./doc.taro73.js"),["demo-1.0.1/doc.taro73.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tag/doc.taro.md":()=>o(()=>import("./doc.taro74.js"),["demo-1.0.1/doc.taro74.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/textarea/doc.taro.md":()=>o(()=>import("./doc.taro75.js"),["demo-1.0.1/doc.taro75.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/timeselect/doc.taro.md":()=>o(()=>import("./doc.taro76.js"),["demo-1.0.1/doc.taro76.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/toast/doc.taro.md":()=>o(()=>import("./doc.taro77.js"),["demo-1.0.1/doc.taro77.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/tour/doc.taro.md":()=>o(()=>import("./doc.taro78.js"),["demo-1.0.1/doc.taro78.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/trendarrow/doc.taro.md":()=>o(()=>import("./doc.taro79.js"),["demo-1.0.1/doc.taro79.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/uploader/doc.taro.md":()=>o(()=>import("./doc.taro80.js"),["demo-1.0.1/doc.taro80.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/video/doc.taro.md":()=>o(()=>import("./doc.taro81.js"),["demo-1.0.1/doc.taro81.js","demo-1.0.1/style_icon.js"]),"/src/packages/vueComponents/watermark/doc.taro.md":()=>o(()=>import("./doc.taro82.js"),["demo-1.0.1/doc.taro82.js","demo-1.0.1/style_icon.js"])});for(const _ in D){const e=/packages\/vueComponents\/(.*)\/doc.taro.md/.exec(_)[1];O.push({path:`/zh-CN/component/${e}-taro`,component:D[_]}),h.push({path:`/en-US/component/${e}-taro`,component:D[_]})}const z=[{path:"/zh-CN",name:"/zh-CN",component:y,children:O},{path:"/en-US",name:"/en-US",component:y,children:h}];z.push({name:"notFound",path:"/:path(.*)+",redirect:{path:"/zh-CN/component/button"}});const H=_o({history:to(),routes:z,scrollBehavior(_){if(_.hash){const e=_.hash.split("#")[1],r=document.getElementById(e);setTimeout(()=>{r&&r.scrollIntoView(!0)})}}});H.afterEach((_,e)=>{window.scrollTo(0,0)});const Oo={mounted(_){_.addEventListener("mouseover",()=>{_.style.color="#fa2c19"}),_.addEventListener("mouseleave",()=>{_.style.color=""})}};if(ro){const _=location.hash.replace("/component","");location.replace("demo.html"+_)}so(no).directive("hover",Oo).use(H).mount("#doc");
