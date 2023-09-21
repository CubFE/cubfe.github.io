import{n as g,o as b,c as U}from"./mobile.js";import{d as S,x as h,f as m,a as w,ar as y,_ as k,r as p,b as I,e as d,t as r,k as u,w as a,o as M,l as D}from"./style_icon.js";const{translate:t}=U("menu"),A=()=>y({"zh-CN":{basic:"基础用法",customMenuContent:"自定义菜单内容",customContent:"自定义内容",screen:"筛选",confirm:"确认",twoColsInOneLine:"一行两列",customActiveColor:"自定义选中态颜色",customIcons:"自定义图标",expandDirection:"向上展开",disableMenu:"禁用菜单",allProducts:"全部商品",newProducts:"新款商品",activityProducts:"活动商品",defaultSort:"默认排序",praiseSort:"好评排序",salesVolumeSort:"销量排序",product1:"家庭清洁/纸品",product2:"个人护理",product3:"美妆护肤",product4:"食品饮料",product5:"家用电器",product6:"母婴",product7:"数码",product8:"电脑、办公",product9:"运动户外",product10:"厨具",product11:"医疗保健",product12:"酒类",product13:"生鲜",product14:"家具",product15:"传统滋补",product16:"汽车用品",product17:"家居日用"},"en-US":{basic:"Basic Usage",customMenuContent:"Custom Menu Content",customContent:"Custom content",screen:"Screen",confirm:"Confirm",twoColsInOneLine:"Two Cols In One Line",customActiveColor:"Custom Active Color",customIcons:"Custom Icons",expandDirection:"Expand Direction",disableMenu:"Disable Menu",allProducts:"All Products",newProducts:"New Products",activityProducts:"Activity Products",defaultSort:"Default Sort",praiseSort:"Praise Sort",salesVolumeSort:"Sales Volume Sort",product1:"Product1",product2:"Product2",product3:"Product3",product4:"Product4",product5:"Product5",product6:"Product6",product7:"Product7",product8:"Product8",product9:"Product9",product10:"Product10",product11:"Product11",product12:"Product12",product13:"Product13",product14:"Product14",product15:"Product15",product16:"Product16",product17:"Product17"}}),N=S({components:{Under:g,Checked:b},props:{},setup(){A();const o=h({value1:0,value2:"a",value3:0}),e=m(()=>[{text:t("allProducts"),value:0},{text:t("newProducts"),value:1},{text:t("activityProducts"),value:2}]),c=m(()=>[{text:t("defaultSort"),value:"a"},{text:t("praiseSort"),value:"b"},{text:t("salesVolumeSort"),value:"c"}]),v=m(()=>[{text:t("allProducts"),value:0},{text:t("product1"),value:1},{text:t("product2"),value:2},{text:t("product3"),value:3},{text:t("product4"),value:4},{text:t("product5"),value:5},{text:t("product6"),value:6},{text:t("product7"),value:7},{text:t("product8"),value:8},{text:t("product9"),value:9},{text:t("product10"),value:10},{text:t("product11"),value:11},{text:t("product12"),value:12},{text:t("product13"),value:13},{text:t("product14"),value:14},{text:t("product15"),value:15},{text:t("product16"),value:16},{text:t("product17"),value:17}]),i=w("");return{state:o,item:i,options1:e,options2:c,options3:v,onConfirm:()=>{i.value.toggle()},handleChange:s=>{console.log("val",s)},translate:t}}}),$={class:"demo full"},B={style:{display:"flex",flex:1,"justify-content":"space-between","align-items":"center"}},L={style:{marginRight:"10px"}};function O(o,e,c,v,i,C){const n=p("cub-menu-item"),s=p("cub-menu"),V=p("cub-button"),f=p("Under"),P=p("Checked");return M(),I("div",$,[d("h2",null,r(o.translate("basic")),1),u(s,null,{default:a(()=>[u(n,{modelValue:o.state.value1,"onUpdate:modelValue":e[0]||(e[0]=l=>o.state.value1=l),options:o.options1},null,8,["modelValue","options"]),u(n,{modelValue:o.state.value2,"onUpdate:modelValue":e[1]||(e[1]=l=>o.state.value2=l),onChange:o.handleChange,options:o.options2},null,8,["modelValue","onChange","options"])]),_:1}),d("h2",null,r(o.translate("customMenuContent")),1),u(s,null,{default:a(()=>[u(n,{modelValue:o.state.value1,"onUpdate:modelValue":e[2]||(e[2]=l=>o.state.value1=l),options:o.options1},null,8,["modelValue","options"]),u(n,{title:o.translate("screen"),ref:"item"},{default:a(()=>[d("div",B,[d("div",L,r(o.translate("customContent")),1),u(V,{onClick:o.onConfirm},{default:a(()=>[D(r(o.translate("confirm")),1)]),_:1},8,["onClick"])])]),_:1},8,["title"])]),_:1}),d("h2",null,r(o.translate("twoColsInOneLine")),1),u(s,null,{default:a(()=>[u(n,{modelValue:o.state.value3,"onUpdate:modelValue":e[3]||(e[3]=l=>o.state.value3=l),cols:2,options:o.options3},null,8,["modelValue","options"])]),_:1}),d("h2",null,r(o.translate("customActiveColor")),1),u(s,{"active-color":"green"},{default:a(()=>[u(n,{modelValue:o.state.value1,"onUpdate:modelValue":e[4]||(e[4]=l=>o.state.value1=l),options:o.options1},null,8,["modelValue","options"]),u(n,{modelValue:o.state.value2,"onUpdate:modelValue":e[5]||(e[5]=l=>o.state.value2=l),onChange:o.handleChange,options:o.options2},null,8,["modelValue","onChange","options"])]),_:1}),d("h2",null,r(o.translate("customIcons")),1),u(s,null,{icon:a(()=>[u(f)]),default:a(()=>[u(n,{modelValue:o.state.value1,"onUpdate:modelValue":e[6]||(e[6]=l=>o.state.value1=l),options:o.options1},null,8,["modelValue","options"]),u(n,{modelValue:o.state.value2,"onUpdate:modelValue":e[7]||(e[7]=l=>o.state.value2=l),onChange:o.handleChange,options:o.options2},{icon:a(()=>[u(P)]),_:1},8,["modelValue","onChange","options"])]),_:1}),d("h2",null,r(o.translate("expandDirection")),1),u(s,{direction:"up"},{default:a(()=>[u(n,{modelValue:o.state.value1,"onUpdate:modelValue":e[8]||(e[8]=l=>o.state.value1=l),options:o.options1},null,8,["modelValue","options"]),u(n,{modelValue:o.state.value2,"onUpdate:modelValue":e[9]||(e[9]=l=>o.state.value2=l),onChange:o.handleChange,options:o.options2},null,8,["modelValue","onChange","options"])]),_:1}),d("h2",null,r(o.translate("disableMenu")),1),u(s,null,{default:a(()=>[u(n,{disabled:"",modelValue:o.state.value1,"onUpdate:modelValue":e[10]||(e[10]=l=>o.state.value1=l),options:o.options1},null,8,["modelValue","options"]),u(n,{disabled:"",modelValue:o.state.value2,"onUpdate:modelValue":e[11]||(e[11]=l=>o.state.value2=l),options:o.options2},null,8,["modelValue","options"])]),_:1})])}const j=k(N,[["render",O]]);export{j as default};
