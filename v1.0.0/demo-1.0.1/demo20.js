import{c as S}from"./mobile.js";import{d as P,a as D,x as c,ar as B,_ as L,r as l,b as N,e as f,t as i,k as a,w as o,o as R,l as p,X as $,ao as F}from"./style_icon.js";const{translate:g}=S("configprovider"),j=()=>B({"zh-CN":{basic:"基础用法",custom:"定制主题",title1:"切换暗黑",title2:"我是标题",title3:"副标题描述",desc:"描述文字",address:"地址",addressTip:"请输入地址",addressTip1:"请选择地址",addressTip2:"请选择所在地区",remarks:"备注",remarksTip:"请输入备注",switch:"开关",checkbox:"复选框",radiogroup:"单选按钮",option:e=>"选项"+e,rate:"评分",inputnumber:"步进器",range:"滑块",uploader:"文件上传",success:"上传成功",uploading:"上传中...",asyncValidator:"模拟异步验证中"},"en-US":{basic:"Basic Usage",custom:"Custom Theme",title1:"Switch Dark Mode",title2:"Title",title3:"Subtitle Description",desc:"Description",nameTip:"Please enter your name",address:"Address",addressTip:"Please enter address",addressTip1:"Please select an address",addressTip2:"Please select your region",remarks:"Remarks",remarksTip:"Please enter remarks",switch:"Switch",checkbox:"Checkbox",radiogroup:"Radiogroup",option:e=>"Option"+e,rate:"Rate",inputnumber:"Inputnumber",range:"Range",uploader:"Upload file",success:"Upload successful",uploading:"Uploading",asyncValidator:"Simulating asynchronous verification"}}),z=P({props:{},setup(){j();const e=D(!1),t=D(""),h=r=>{t.value=r?"dark":""},u=c({switch:!1,checkbox:!1,radio:0,number:0,rate:3,range:30,address:"",defaultFileList:[{name:"file 1.png",url:"https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg",status:"success",message:g("success"),type:"image"},{name:"file 2.png",url:"https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg",status:"uploading",message:g("uploading"),type:"image"}]}),d=c({state:{show:!1,province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]},methods:{show(){d.state.show=!d.state.show,d.state.show&&(u.address="")},onClose({data:r}){u.address=r.addressStr,d.state.show=!1}}}),m=c({primaryColor:"#008000",primaryColorEnd:"#008000"});return{formData2:u,addressModule:d,switchChecked:e,switchChange:h,theme:t,themeVars:m,translate:g}}});const E={class:"demo"},I=["placeholder"];function A(e,t,h,u,d,v){const m=l("cub-switch"),r=l("cub-cell"),n=l("cub-form-item"),y=l("cub-checkbox"),b=l("cub-radio"),C=l("cub-radio-group"),T=l("cub-rate"),U=l("cub-input-number"),w=l("cub-range"),M=l("cub-uploader"),_=l("cub-address"),V=l("cub-form"),k=l("cub-config-provider");return R(),N("div",E,[f("h2",null,i(e.translate("basic")),1),a(k,{theme:e.theme},{default:o(()=>[a(r,{title:e.translate("title1")},{link:o(()=>[a(m,{modelValue:e.switchChecked,"onUpdate:modelValue":t[0]||(t[0]=s=>e.switchChecked=s),onChange:e.switchChange},null,8,["modelValue","onChange"])]),_:1},8,["title"]),a(r,{title:e.translate("title2"),"sub-title":e.translate("title3"),desc:e.translate("desc")},null,8,["title","sub-title","desc"]),a(V,null,{default:o(()=>[a(n,{label:e.translate("switch")},{default:o(()=>[a(m,{modelValue:e.formData2.switch,"onUpdate:modelValue":t[1]||(t[1]=s=>e.formData2.switch=s)},null,8,["modelValue"])]),_:1},8,["label"]),a(n,{label:e.translate("checkbox")},{default:o(()=>[a(y,{modelValue:e.formData2.checkbox,"onUpdate:modelValue":t[2]||(t[2]=s=>e.formData2.checkbox=s)},{default:o(()=>[p(i(e.translate("checkbox")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(n,{label:e.translate("radiogroup")},{default:o(()=>[a(C,{direction:"horizontal",modelValue:e.formData2.radio,"onUpdate:modelValue":t[3]||(t[3]=s=>e.formData2.radio=s)},{default:o(()=>[a(b,{label:"1"},{default:o(()=>[p(i(e.translate("option",1)),1)]),_:1}),a(b,{disabled:"",label:"2"},{default:o(()=>[p(i(e.translate("option",2)),1)]),_:1}),a(b,{label:"3"},{default:o(()=>[p(i(e.translate("option",3)),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(n,{label:e.translate("rate")},{default:o(()=>[a(T,{modelValue:e.formData2.rate,"onUpdate:modelValue":t[4]||(t[4]=s=>e.formData2.rate=s)},null,8,["modelValue"])]),_:1},8,["label"]),a(n,{label:e.translate("inputnumber")},{default:o(()=>[a(U,{modelValue:e.formData2.number,"onUpdate:modelValue":t[5]||(t[5]=s=>e.formData2.number=s)},null,8,["modelValue"])]),_:1},8,["label"]),a(n,{label:e.translate("range")},{default:o(()=>[a(w,{"hidden-tag":"",modelValue:e.formData2.range,"onUpdate:modelValue":t[6]||(t[6]=s=>e.formData2.range=s)},null,8,["modelValue"])]),_:1},8,["label"]),a(n,{label:e.translate("uploader")},{default:o(()=>[a(M,{url:"http://apiurl","file-list":e.formData2.defaultFileList,"onUpdate:fileList":t[7]||(t[7]=s=>e.formData2.defaultFileList=s),maximum:"3",multiple:""},null,8,["file-list"])]),_:1},8,["label"]),a(n,{label:e.translate("address")},{default:o(()=>[$(f("input",{class:"cub-input-text","onUpdate:modelValue":t[8]||(t[8]=s=>e.formData2.address=s),onClick:t[9]||(t[9]=(...s)=>e.addressModule.methods.show&&e.addressModule.methods.show(...s)),readonly:"",placeholder:e.translate("addressTip1"),type:"text"},null,8,I),[[F,e.formData2.address]]),a(_,{visible:e.addressModule.state.show,"onUpdate:visible":t[10]||(t[10]=s=>e.addressModule.state.show=s),province:e.addressModule.state.province,city:e.addressModule.state.city,country:e.addressModule.state.country,town:e.addressModule.state.town,onClose:e.addressModule.methods.onClose,"custom-address-title":e.translate("addressTip2")},null,8,["visible","province","city","country","town","onClose","custom-address-title"])]),_:1},8,["label"])]),_:1})]),_:1},8,["theme"]),f("h2",null,i(e.translate("custom")),1),a(k,{"theme-vars":e.themeVars},{default:o(()=>[a(V,null,{default:o(()=>[a(n,{label:e.translate("range")},{default:o(()=>[a(w,{"hidden-tag":"",modelValue:e.formData2.range,"onUpdate:modelValue":t[11]||(t[11]=s=>e.formData2.range=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["theme-vars"])])}const q=L(z,[["render",A],["__scopeId","data-v-e387a4aa"]]);export{q as default};
