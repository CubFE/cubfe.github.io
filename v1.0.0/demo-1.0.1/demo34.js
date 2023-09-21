import{o as t,b as s,n as v,I,e as l,d as $,au as S,ar as L,_ as T,r as p,t as m,k as e,w as c,F as h,i as f,c as b}from"./style_icon.js";import{l as F,a as E,_ as x,c as B}from"./mobile.js";import{s as A}from"./index.js";import"./Success.js";const N="cubui-icon",V=[{name:"图标列表",nameEn:"Icon List",icons:["accountbook","add","addfollow","address","addressbook","anger","apps","ask","bankcard","barchart","bill","bus","buscode","calculator","calendar","card","cart","category","chat_add","chat_right","chat_wrong","chat","check-checked","check-disabled","check-normal","Check","checked","checklist","classification","clock","close_circle","close_volume","close","coin","collect","collection","comment","compass","content","coupon","details","dou-arrow-up","down_s","download","download1","edit","express","eye","facerecognition","failure","fillin","folder","footprint","friend_delete_2","friend_delete","friend_settings","friends_add","gift","good","google","heart-fill","heart","home","horizontal","huititle","image-error","image","information_add","issue","joy-smile","key","left","link","live","loading","loading1","location","location1","lock","loop","lower","mail","mark","mask-close","me","message","minus_circle","minus","more-s","more-x","more","movie","network","no_eye","no","notice","openmail","order","pay_collect","pay","payment","pepole","personal","photograph","piechart_1","piechart_2","play-circle-fill","play-double-back","play-double-forward","play-start","play-stop","play","plus","poweroff-circle-fill","query","redpacket","refresh","refresh2","retweet","right","scan","scan2","screen-little","search","selected_circle","selected","service","setting","share","shop","slice","smail","star-fill","star","success","system-phonebook","target","text","textdeletion","tips","top","trash","travel","type","under","up_s","up","uploader","voice_close","voice","volume","wallet","warn","zoom","zoomout"]},{name:"Logo",nameEn:"Application Logo",icons:["zhifubao","tmall","tmall1","taobao","jingdong","weixin","douyin","douyin1","weibo","toutiao","kuaishou","kuaishou1","github","gitee"]}],j=[{name:"通用动态样式",nameEn:"Universal Dynamic Style",icons:[{name:"location","animation-name":"am-jump","animation-time":"am-infinite"},{name:"collection","animation-name":"am-blink","animation-time":"am-infinite"},{name:"loop","animation-name":"am-rotate","animation-time":"am-infinite"},{name:"facerecognition","animation-name":"am-breathe","animation-time":"am-infinite"},{name:"voice","animation-name":"am-flash","animation-time":"am-infinite"},{name:"download1","animation-name":"am-bounce","animation-time":"am-infinite"},{name:"chat","animation-name":"am-shake","animation-time":"am-infinite"}]}],U={name:N,data:V,style:j},D=E("add"),G=l("path",{d:"M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm0 64c-223.85 0-405.333 181.482-405.333 405.333S288.149 917.333 512 917.333 917.333 735.851 917.333 512 735.851 106.667 512 106.667zM546.133 320c4.694 0 8.534 3.84 8.534 8.533v140.8h140.8c4.693 0 8.533 3.84 8.533 8.534V524.8a8.533 8.533 0 0 1-8.533 8.533h-140.8v140.8a8.533 8.533 0 0 1-8.534 8.534H499.2a8.533 8.533 0 0 1-8.533-8.534v-140.8h-140.8a8.533 8.533 0 0 1-8.534-8.533v-46.933c0-4.694 3.84-8.534 8.534-8.534h140.8v-140.8c0-4.693 3.84-8.533 8.533-8.533h46.933z",fill:"currentColor","fill-opacity":"0.9"},null,-1),M=[G];function q(n,d,g,_,u,w){return t(),s("svg",{class:v(n.classes),style:I(n.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",role:"presentation"},M,6)}const H=F(D,[["render",q]]),J=()=>L({"zh-CN":{basic:"IconFont 基础用法",svg:"SVG 按需使用",imageLink:"图片链接",iconColor:"图标颜色",iconSize:"图标大小",copyToast:"复制成功"},"en-US":{basic:"IconFont Basic Usage",svg:"SVG import on demand",imageLink:"Image Link",iconColor:"Icon Color",iconSize:"Icon Size",copyToast:"Copied successfully"}}),{translate:k}=B("icon"),K=$({components:{IconFont:x,Add:H},props:{},setup(){return J(),{icons:U,translate:k,currentLang:S,copyTag:d=>{const g=`<IconFont name="${d}"></IconFont>`,_=`&lt;Icon name="${d}"&gt;&lt;/Icon&gt;`,u=document.createElement("input");document.body.appendChild(u),u.setAttribute("value",g),u.select(),document.execCommand("copy")&&(document.execCommand("copy"),A.text(`${k("copyToast")}: <br/>${_}`)),document.body.removeChild(u)}}}});const O={class:"demo"};function P(n,d,g,_,u,w){const C=p("Add"),r=p("cub-cell"),a=p("IconFont"),y=p("cub-cell-group");return t(),s("div",O,[l("h2",null,m(n.translate("svg")),1),e(r,null,{default:c(()=>[e(C,{color:"red"})]),_:1}),l("h2",null,m(n.translate("basic")),1),e(r,null,{default:c(()=>[e(a,{name:"shop"}),e(a,{name:"start"})]),_:1}),l("h2",null,m(n.translate("imageLink")),1),e(r,null,{default:c(()=>[e(a,{size:"40",name:"https://oss.netconcepts.cn/website/wap/job-wap-icon-1.png"})]),_:1}),l("h2",null,m(n.translate("iconColor")),1),e(r,null,{default:c(()=>[e(a,{name:"shop",color:"#fa2c19"}),e(a,{name:"shop",color:"#64b578"}),e(a,{name:"start",color:"#fa2c19"})]),_:1}),l("h2",null,m(n.translate("iconSize")),1),e(r,null,{default:c(()=>[e(a,{name:"shop"}),e(a,{name:"shop",size:"24"}),e(a,{name:"shop",size:"26"})]),_:1}),(t(!0),s(h,null,f(n.icons.data,i=>(t(),b(y,{title:n.currentLang=="zh-CN"?i.name:i.nameEn,key:i},{default:c(()=>[e(r,null,{default:c(()=>[l("ul",null,[(t(!0),s(h,null,f(i.icons,o=>(t(),s("li",{key:o},[e(a,{name:o,onClick:z=>n.copyTag(o)},null,8,["name","onClick"]),l("span",null,m(o),1)]))),128))])]),_:2},1024)]),_:2},1032,["title"]))),128)),(t(!0),s(h,null,f(n.icons.style,i=>(t(),b(y,{title:n.currentLang=="zh-CN"?i.name:i.nameEn,key:i},{default:c(()=>[e(r,null,{default:c(()=>[l("ul",null,[(t(!0),s(h,null,f(i.icons,o=>(t(),s("li",{key:o},[e(a,{name:o.name,class:v(`cub-icon-${o["animation-name"]} cub-icon-${o["animation-time"]}`),onClick:z=>n.copyTag(o["animation-name"])},null,8,["name","class","onClick"]),l("span",null,m(o["animation-name"]),1)]))),128))])]),_:2},1024)]),_:2},1032,["title"]))),128))])}const Y=T(K,[["render",P],["__scopeId","data-v-96b5050b"]]);export{Y as default};
