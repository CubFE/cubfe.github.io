import{c as g}from"./mobile.js";import{d as r,a as f,g as p,ar as h,_ as C,r as c,b,e as s,t,k as a,w as n,o as E,l as k}from"./style_icon.js";const{translate:v}=g("comment"),_=()=>h({"zh-CN":{basic:"基础用法",single:"评论图片单行展示",multiRow:"评论图片多行展示",additionalReviewd:"追评展示"},"en-US":{basic:"Basic Usage",single:"Single Line Image",multiRow:"Multi Line Image ",review:"Additional Review"}}),F=r({props:{},setup(){_();let e=f({});const m=o=>{console.log("进行跳转",o)};p(()=>{u()});const u=()=>{fetch("//storage.360buyimg.com/cubui/3x/comment_data.json").then(o=>o.json()).then(o=>{o.Comment.info.avatar="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",e.value=o.Comment}).catch(o=>console.log("Oh, error",o))};return{cmt:e,handleclick:m,clickImages:o=>{console.log("进行图片展示",o)},translate:v}}}),w={class:"demo"},I=s("img",{class:"cub-comment-header__labels--item",src:"https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"},null,-1),D=s("img",{class:"cub-comment-header__labels--item",src:"https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png",style:{height:"12px"}},null,-1),B=s("div",{class:"cub-comment-shop"},[s("span",null,"京东美妆国际："),k("尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。 ")],-1);function y(e,m,u,d,o,A){const i=c("cub-comment"),l=c("cub-cell");return E(),b("div",w,[s("h2",null,t(e.translate("single")),1),a(l,null,{default:n(()=>[a(i,{images:e.cmt.images,videos:e.cmt.videos,info:e.cmt.info,onClick:e.handleclick,onClickImages:e.clickImages,operation:["replay"]},{"comment-labels":n(()=>[I]),_:1},8,["images","videos","info","onClick","onClickImages"])]),_:1}),s("h2",null,t(e.translate("multiRow")),1),a(l,null,{default:n(()=>[a(i,{headerType:"complex",imagesRows:"multi",images:e.cmt.images,videos:e.cmt.videos,info:e.cmt.info,ellipsis:"6",onClickImages:e.clickImages},{"comment-labels":n(()=>[D]),"comment-shop-reply":n(()=>[B]),_:1},8,["images","videos","info","onClickImages"])]),_:1}),s("h2",null,t(e.translate("additionalReviewd")),1),a(l,null,{default:n(()=>[a(i,{imagesRows:"multi",images:e.cmt.images,videos:e.cmt.videos,info:e.cmt.info,follow:e.cmt.follow,onClickImages:e.clickImages},null,8,["images","videos","info","follow","onClickImages"])]),_:1})])}const N=C(F,[["render",y]]);export{N as default};
