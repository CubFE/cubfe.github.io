var g=Object.defineProperty,h=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var P=(e,o,s)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,m=(e,o)=>{for(var s in o||(o={}))B.call(o,s)&&P(e,s,o[s]);if(y)for(var s of y(o))C.call(o,s)&&P(e,s,o[s]);return e},b=(e,o)=>h(e,v(o));import{c as V}from"./mobile.js";import{d as k,x as E,Q as w,ar as N,_ as $,r,b as j,e as i,t as l,k as n,w as a,o as z,l as S}from"./style_icon.js";const{translate:T}=V("video"),A=()=>N({"zh-CN":{basic:"基础用法",title1:"自动播放",title2:"初始化静音",title3:"视频封面海报设置",title4:"行内播放",title5:"设置视频为背景图",title6:"视频切换"},"en-US":{basic:"Basic Usage",title1:"Auto play",title2:"Initialize mute",title3:"Video cover poster settings",title4:"play inline",title5:"Set video as background",title6:"Video switching"}}),D=k({props:{},setup(){A();const e=E({source:{src:"https://storage.360buyimg.com/cubui/video/video_cubui.mp4",type:"video/mp4"},source1:{src:"https://storage.360buyimg.com/cubui/video/legao-%E6%9D%A8%E8%BF%9B%E5%86%9B.mp4",type:"video/mp4"},options:{controls:!0},options1:{autoplay:!0,muted:!0,controls:!0},options2:{muted:!0,controls:!0},options3:{controls:!0,poster:"https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp"},options4:{controls:!0,playsinline:!0},options5:{controls:!1,autoplay:!0,disabled:!0,muted:!0,playsinline:!0,loop:!0}}),o=p=>console.log("play",p),s=p=>console.log("pause",p),d=p=>console.log("playend",p),c=()=>{e.source1.src="https://vjs.zencdn.net/v/oceans.mp4"};return b(m({play:o,pause:s,playend:d},w(e)),{changeVideo:c,translate:T})}});const I={class:"demo"};function U(e,o,s,d,c,p){const t=r("cub-video"),u=r("cub-cell"),f=r("cub-button");return z(),j("div",I,[i("h4",null,l(e.translate("basic")),1),n(u,{class:"cell"},{default:a(()=>[n(t,{source:e.source,options:e.options,onPlay:e.play,onPause:e.pause,onPlayend:e.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),i("h4",null,l(e.translate("title1")),1),n(u,{class:"cell"},{default:a(()=>[n(t,{source:e.source,options:e.options1,onPlay:e.play,onPause:e.pause,onPlayend:e.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),i("h4",null,l(e.translate("title2")),1),n(u,{class:"cell"},{default:a(()=>[n(t,{source:e.source,options:e.options2,onPlay:e.play,onPause:e.pause,onPlayend:e.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),i("h4",null,l(e.translate("title3")),1),n(u,{class:"cell"},{default:a(()=>[n(t,{source:e.source,options:e.options3,onPlay:e.play,onPause:e.pause,onPlayend:e.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),i("h4",null,l(e.translate("title4")),1),n(u,{class:"cell"},{default:a(()=>[n(t,{source:e.source,options:e.options4,onPlay:e.play,onPause:e.pause,onPlayend:e.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),i("h4",null,l(e.translate("title5")),1),n(u,{class:"cell"},{default:a(()=>[n(t,{source:e.source,options:e.options5,onPlay:e.play,onPause:e.pause,onPlayend:e.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),i("h4",null,l(e.translate("title6")),1),n(u,{class:"cell"},{default:a(()=>[n(t,{source:e.source1,options:e.options,onPlay:e.play,onPause:e.pause,onPlayend:e.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),n(f,{type:"primary",onClick:e.changeVideo,class:"m-b"},{default:a(()=>[S(l(e.translate("title6")),1)]),_:1},8,["onClick"])])}const q=$(D,[["render",U],["__scopeId","data-v-349411b5"]]);export{q as default};
