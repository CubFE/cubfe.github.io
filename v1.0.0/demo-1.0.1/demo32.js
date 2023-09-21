import{d as A,x as c,a as $,ar as E,_ as N,r as u,b as B,e as k,t as i,k as a,w as s,o as w,F as S,i as j,c as I,l as m}from"./style_icon.js";import{c as O}from"./mobile.js";import{s as U}from"./index.js";import"./Success.js";const{translate:C}=O("form"),Y=()=>E({"zh-CN":{basic:"基础用法",title1:"动态表单",title2:"表单校验",title3:"表单类型",name:"姓名",nameTip:"请输入姓名",nameTip1:"请输入姓名，blur 事件校验",age:"年龄",ageTip:"请输入年龄",ageTip1:"请输入年龄，必须数字且0-200区间",ageTip2:"必须输入数字",ageTip3:"必须输入0-200区间",tel:"联系电话",telTip:"请输入联系电话",telTip1:"异步校验电话格式",telTip2:"电话格式不正确",address:"地址",addressTip:"请输入地址",addressTip1:"请选择地址",addressTip2:"请选择所在地区",remarks:"备注",remarksTip:"请输入备注",add:"添加",remove:"删除",submit:"提交",reset:"重置提示状态",switch:"开关",checkbox:"复选框",radiogroup:"单选按钮",option:e=>"选项"+e,rate:"评分",inputnumber:"步进器",range:"滑块",uploader:"文件上传",success:"上传成功",uploading:"上传中...",asyncValidator:"模拟异步验证中"},"en-US":{basic:"Basic Usage",title1:"Dynamic Form",title2:"Validate Form",title3:"Form Type",name:"Name",nameTip:"Please enter your name",nameTip1:"Please enter , blur event validate",age:"Age",ageTip:"Please enter age",ageTip1:"Please enter the age, which must be numeric and in the range of 0-200",ageTip2:"You must enter a number",ageTip3:"The range 0-200 must be entered",tel:"Tel",telTip:"Please enter tel",telTip1:"Async check tel format",telTip2:"Tel format is incorrect",address:"Address",addressTip:"Please enter address",addressTip1:"Please select an address",addressTip2:"Please select your region",remarks:"Remarks",remarksTip:"Please enter remarks",add:"Add",remove:"Remove",submit:"Submit",reset:"Reset prompt status",switch:"Switch",checkbox:"Checkbox",radiogroup:"Radiogroup",option:e=>"Option"+e,rate:"Rate",inputnumber:"Inputnumber",range:"Range",uploader:"Upload file",success:"Upload successful",uploading:"Uploading",asyncValidator:"Simulating asynchronous verification"}}),G=A({props:{},setup(){Y();const e=c({name:"",age:"",tel:"",address:""}),l=c({name:"",age:"",tel:"",address:""}),V=$(null),b={state:c({name:"",tels:new Array({key:1,value:""})}),methods:{submit(){V.value.validate().then(({valid:r,errors:d})=>{r?console.log("success",b):(U.warn(d[0].message),console.log("error submit!!",d))})},reset(){V.value.reset()},remove(){b.state.tels.splice(b.state.tels.length-1,1)},add(){b.state.tels.push({key:Date.now(),value:""})}}},F=r=>{console.log(r)},h=c({switch:!1,checkbox:!1,radio:0,number:0,rate:3,range:30,address:"",defaultFileList:[{name:"file 1.png",url:"https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg",status:"success",message:C("success"),type:"image"},{name:"file 2.png",url:"https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg",status:"uploading",message:C("uploading"),type:"image"}]}),n=c({state:{show:!1,province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]},methods:{show(){n.state.show=!n.state.show,n.state.show&&(h.address="")},onChange({next:r,value:d}){h.address+=d.name,n.state[r].length<1&&(n.state.show=!1)}}}),o=$(null);return{ruleForm:o,formData:e,validate:F,customValidator:r=>/^\d+$/.test(r)?Promise.resolve():Promise.reject("必须输入数字"),customRulePropValidator:(r,d)=>(d==null?void 0:d.reg).test(r)?Promise.resolve():Promise.reject("必须输入数字"),nameLengthValidator:r=>r.length>2?Promise.resolve():Promise.reject("名称两个字以上"),asyncValidator:r=>{const d=/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/;return new Promise((f,T)=>{U.loading("模拟异步验证中..."),setTimeout(()=>{U.hide(),r?d.test(r)?f(""):T("联系电话格式不正确"):T("请输入联系电话")},1e3)})},customBlurValidate:r=>{o.value.validate(r).then(({valid:d,errors:f})=>{d?console.log("success",e):console.log("error submit!!",f)})},submit:()=>{o.value.validate().then(({valid:r,errors:d})=>{r?console.log("success",e):console.log("error submit!!",d)})},reset:()=>{o.value.reset()},formData2:h,addressModule:n,dynamicForm:b,dynamicRefForm:V,basicData:l,translate:C}}}),H={class:"demo full"};function J(e,l,V,b,F,h){const n=u("cub-input"),o=u("cub-form-item"),P=u("cub-textarea"),g=u("cub-form"),p=u("cub-button"),D=u("cub-cell"),q=u("cub-switch"),R=u("cub-checkbox"),y=u("cub-radio"),r=u("cub-radio-group"),d=u("cub-rate"),f=u("cub-input-number"),T=u("cub-range"),M=u("cub-uploader"),z=u("cub-address");return w(),B("div",H,[k("h2",null,i(e.translate("basic")),1),a(g,null,{default:s(()=>[a(o,{label:e.translate("name")},{default:s(()=>[a(n,{modelValue:e.basicData.name,"onUpdate:modelValue":l[0]||(l[0]=t=>e.basicData.name=t),class:"cub-input-text",placeholder:e.translate("nameTip"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(o,{label:e.translate("age")},{default:s(()=>[a(n,{modelValue:e.basicData.age,"onUpdate:modelValue":l[1]||(l[1]=t=>e.basicData.age=t),class:"cub-input-text",placeholder:e.translate("ageTip"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(o,{label:e.translate("tel")},{default:s(()=>[a(n,{modelValue:e.basicData.tel,"onUpdate:modelValue":l[2]||(l[2]=t=>e.basicData.tel=t),class:"cub-input-text",placeholder:e.translate("telTip"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(o,{label:e.translate("address")},{default:s(()=>[a(n,{modelValue:e.basicData.address,"onUpdate:modelValue":l[3]||(l[3]=t=>e.basicData.address=t),class:"cub-input-text",placeholder:e.translate("addressTip"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(o,{label:e.translate("remarks")},{default:s(()=>[a(P,{placeholder:e.translate("remarksTip"),type:"text"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1}),k("h2",null,i(e.translate("title1")),1),a(g,{"model-value":e.dynamicForm.state,ref:"dynamicRefForm"},{default:s(()=>[a(o,{label:e.translate("name"),prop:"name",required:"",rules:[{required:!0,message:e.translate("nameTip")}]},{default:s(()=>[a(n,{class:"cub-input-text",modelValue:e.dynamicForm.state.name,"onUpdate:modelValue":l[4]||(l[4]=t=>e.dynamicForm.state.name=t),placeholder:e.translate("nameTip"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),(w(!0),B(S,null,j(e.dynamicForm.state.tels,(t,v)=>(w(),I(o,{label:e.translate("tel")+v,prop:"tels."+v+".value",required:"",rules:[{required:!0,message:e.translate("telTip")+v}],key:t.key},{default:s(()=>[a(n,{class:"cub-input-text",modelValue:t.value,"onUpdate:modelValue":L=>t.value=L,placeholder:e.translate("telTip")+v,type:"text"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","prop","rules"]))),128)),a(D,null,{default:s(()=>[a(p,{size:"small",style:{"margin-right":"10px"},onClick:e.dynamicForm.methods.add},{default:s(()=>[m(i(e.translate("add")),1)]),_:1},8,["onClick"]),a(p,{size:"small",style:{"margin-right":"10px"},onClick:e.dynamicForm.methods.remove},{default:s(()=>[m(i(e.translate("remove")),1)]),_:1},8,["onClick"]),a(p,{type:"primary",style:{"margin-right":"10px"},size:"small",onClick:e.dynamicForm.methods.submit},{default:s(()=>[m(i(e.translate("submit")),1)]),_:1},8,["onClick"]),a(p,{size:"small",onClick:e.dynamicForm.methods.reset},{default:s(()=>[m(i(e.translate("reset")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model-value"]),k("h2",null,i(e.translate("title2")),1),a(g,{"model-value":e.formData,rules:{name:[{message:"名称两个字以上",validator:e.nameLengthValidator}]},ref:"ruleForm"},{default:s(()=>[a(o,{label:e.translate("name"),prop:"name",required:"",rules:[{required:!0,message:e.translate("nameTip")}]},{default:s(()=>[a(n,{class:"cub-input-text",onBlur:l[5]||(l[5]=t=>e.customBlurValidate("name")),modelValue:e.formData.name,"onUpdate:modelValue":l[6]||(l[6]=t=>e.formData.name=t),placeholder:e.translate("nameTip1"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(o,{label:e.translate("age"),prop:"age",required:"",rules:[{required:!0,message:e.translate("ageTip")},{validator:e.customValidator,message:e.translate("ageTip2")},{validator:e.customRulePropValidator,message:e.translate("ageTip2"),reg:/^\d+$/},{regex:/^(\d{1,2}|1\d{2}|200)$/,message:e.translate("ageTip3")}]},{default:s(()=>[a(n,{class:"cub-input-text",modelValue:e.formData.age,"onUpdate:modelValue":l[7]||(l[7]=t=>e.formData.age=t),placeholder:e.translate("ageTip1"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(o,{label:e.translate("tel"),prop:"tel",required:"",rules:[{required:!0,message:e.translate("telTip")},{validator:e.asyncValidator,message:e.translate("telTip2")}]},{default:s(()=>[a(n,{class:"cub-input-text",modelValue:e.formData.tel,"onUpdate:modelValue":l[8]||(l[8]=t=>e.formData.tel=t),placeholder:e.translate("telTip1"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(o,{label:e.translate("address"),prop:"address",required:"",rules:[{required:!0,message:e.translate("addressTip")}]},{default:s(()=>[a(n,{class:"cub-input-text",modelValue:e.formData.address,"onUpdate:modelValue":l[9]||(l[9]=t=>e.formData.address=t),placeholder:e.translate("addressTip"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(D,null,{default:s(()=>[a(p,{type:"primary",size:"small",style:{"margin-right":"10px"},onClick:e.submit},{default:s(()=>[m(i(e.translate("submit")),1)]),_:1},8,["onClick"]),a(p,{size:"small",onClick:e.reset},{default:s(()=>[m(i(e.translate("reset")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model-value","rules"]),k("h2",null,i(e.translate("title3")),1),a(g,null,{default:s(()=>[a(o,{label:e.translate("switch")},{default:s(()=>[a(q,{modelValue:e.formData2.switch,"onUpdate:modelValue":l[10]||(l[10]=t=>e.formData2.switch=t)},null,8,["modelValue"])]),_:1},8,["label"]),a(o,{label:e.translate("checkbox")},{default:s(()=>[a(R,{modelValue:e.formData2.checkbox,"onUpdate:modelValue":l[11]||(l[11]=t=>e.formData2.checkbox=t)},{default:s(()=>[m(i(e.translate("checkbox")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(o,{label:e.translate("radiogroup")},{default:s(()=>[a(r,{direction:"horizontal",modelValue:e.formData2.radio,"onUpdate:modelValue":l[12]||(l[12]=t=>e.formData2.radio=t)},{default:s(()=>[a(y,{label:"1"},{default:s(()=>[m(i(e.translate("option",1)),1)]),_:1}),a(y,{disabled:"",label:"2"},{default:s(()=>[m(i(e.translate("option",2)),1)]),_:1}),a(y,{label:"3"},{default:s(()=>[m(i(e.translate("option",3)),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(o,{label:e.translate("rate")},{default:s(()=>[a(d,{modelValue:e.formData2.rate,"onUpdate:modelValue":l[13]||(l[13]=t=>e.formData2.rate=t)},null,8,["modelValue"])]),_:1},8,["label"]),a(o,{label:e.translate("inputnumber")},{default:s(()=>[a(f,{modelValue:e.formData2.number,"onUpdate:modelValue":l[14]||(l[14]=t=>e.formData2.number=t)},null,8,["modelValue"])]),_:1},8,["label"]),a(o,{label:e.translate("range")},{default:s(()=>[a(T,{"hidden-tag":"",modelValue:e.formData2.range,"onUpdate:modelValue":l[15]||(l[15]=t=>e.formData2.range=t)},null,8,["modelValue"])]),_:1},8,["label"]),a(o,{label:e.translate("uploader")},{default:s(()=>[a(M,{url:"http://apiurl",accept:"image/*","file-list":e.formData2.defaultFileList,"onUpdate:fileList":l[16]||(l[16]=t=>e.formData2.defaultFileList=t),maximum:"3",multiple:""},null,8,["file-list"])]),_:1},8,["label"]),a(o,{label:e.translate("address")},{default:s(()=>[a(n,{class:"cub-input-text",modelValue:e.formData2.address,"onUpdate:modelValue":l[17]||(l[17]=t=>e.formData2.address=t),onClick:e.addressModule.methods.show,readonly:"",placeholder:e.translate("addressTip1"),type:"text"},null,8,["modelValue","onClick","placeholder"]),a(z,{visible:e.addressModule.state.show,"onUpdate:visible":l[18]||(l[18]=t=>e.addressModule.state.show=t),province:e.addressModule.state.province,city:e.addressModule.state.city,country:e.addressModule.state.country,town:e.addressModule.state.town,onChange:e.addressModule.methods.onChange,"custom-address-title":e.translate("addressTip2")},null,8,["visible","province","city","country","town","onChange","custom-address-title"])]),_:1},8,["label"])]),_:1})])}const Z=N(G,[["render",J]]);export{Z as default};
