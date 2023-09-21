import{d as e,r as h,b as r,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const i={class:"markdown-body"},o=c(`<h1>Picker</h1><h3>介绍</h3><p>提供多个选项集合供用户选择其中一项，通常与弹出层组件配合使用。</p><blockquote><p>Picker 组件暂时只支持微信小程序、H5，暂不支持支付宝小程序、钉钉小程序、百度小程序等</p></blockquote><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>);
</code></pre><h3>基础用法</h3>`,7),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'南京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'无锡市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'海北藏族自治区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'连云港市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'浙江市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'江苏市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"搭配 Popup 使用",-1),g=a("p",null,"Picker 通常作为用于辅助表单填写，可以搭配 Popup 实现效果。",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"请选择城市"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"popupDesc"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"popupValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"请选择城市"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"popupConfirm"'),s(" @"),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"show=false"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("永远有效"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popup"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" show = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" popupDesc = "),a("span",{class:"hljs-title function_"},"ref"),s(`();
      `),a("span",{class:"hljs-keyword"},"const"),s(" popupValue = "),a("span",{class:"hljs-title function_"},"ref"),s(`();
      `),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'南京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'无锡市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'海北藏族自治区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'连云港市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'浙江市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'江苏市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"popupConfirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        popupDesc.`),a("span",{class:"hljs-property"},"value"),s(" = selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`);
        show.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { show, popupDesc, columns, confirm, popupConfirm, popupValue };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"自定义字段名",-1),y=a("p",null,[s("可以使用 "),a("code",{class:""},"fieldNames"),s(" 属性自定义"),a("code",{class:""},"columns"),s("中数据的格式。")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":field-names"),s("="),a("span",{class:"hljs-string"},'"fieldNames"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" selectedValue = "),a("span",{class:"hljs-title function_"},"ref"),s(`([]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" fieldNames = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
        `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'code'"),s(`,
        `),a("span",{class:"hljs-attr"},"children"),s(": "),a("span",{class:"hljs-string"},"'list'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(" customColumns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'浙江'"),s(`,
          `),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`,
              `),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'HangZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"list"),s(`: [
                { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'西湖'"),s(", "),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'XiHu'"),s(` },
                { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'余杭区'"),s(", "),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'YuHang'"),s(` }
              ]
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'温州'"),s(`,
              `),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'WenZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"list"),s(`: [
                { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'鹿城区'"),s(", "),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'LuCheng'"),s(` },
                { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'瓯海区'"),s(", "),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'OuHai'"),s(` }
              ]
            }
          ]
        }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, selectedValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"默认选中项",-1),v=a("p",null,[s("通过设置 "),a("code",{class:""},"modelValue"),s(" 实现默认选中项，"),a("code",{class:""},"modelValue"),s(" 是一个包含每项配置 value 值的数组。")],-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" selectedValue = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'南京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'无锡市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'海北藏族自治区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'连云港市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'浙江市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'江苏市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, selectedValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=a("h3",null,"平铺展示",-1),I=a("p",null,[s("属性 "),a("code",{class:""},"threeDimensional"),s(" 可关闭 3D 滚动效果。")],-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(),a("span",{class:"hljs-attr"},":threeDimensional"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" selectedValue = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'南京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'无锡市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'海北藏族自治区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'连云港市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'浙江市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'江苏市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, selectedValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"多列展示",-1),Z=a("p",null,[a("code",{class:""},"columns"),s(" 属性可以通过二维数组的形式配置多列选择。")],-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedTime"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"multipleColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" selectedTime = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'Wednesday'"),s(", "),a("span",{class:"hljs-string"},"'Afternoon'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" multipleColumns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        `),a("span",{class:"hljs-comment"},"// 第一列"),s(`
        [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'周一'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Monday'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'周二'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Tuesday'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'周三'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Wednesday'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'周四'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Thursday'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'周五'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Friday'"),s(` }
        ],
        `),a("span",{class:"hljs-comment"},"// 第二列"),s(`
        [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'上午'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Morning'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'下午'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Afternoon'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'晚上'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Evening'"),s(` }
        ]
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(selectedValue);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { multipleColumns, change, confirm, selectedTime };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=a("h3",null,"多级联动",-1),V=a("p",null,[s("使用 "),a("code",{class:""},"columns"),s(" 属性的 "),a("code",{class:""},"children"),s(" 字段可以实现选项级联的效果。")],-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedCascader"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"cascaderColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" selectedCascader = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'FuJian'"),s(", "),a("span",{class:"hljs-string"},"'FuZhou'"),s(", "),a("span",{class:"hljs-string"},"'TaiJiang'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" cascaderColumns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'浙江'"),s(`,
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'HangZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'西湖区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'XiHu'"),s(` },
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'余杭区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'YuHang'"),s(` }
              ]
            },
            {
              `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'温州'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WenZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'鹿城区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LuCheng'"),s(` },
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'瓯海区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'OuHai'"),s(` }
              ]
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'福建'"),s(`,
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'FuJian'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'福州'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'FuZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'鼓楼区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'GuLou'"),s(` },
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'台江区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'TaiJiang'"),s(` }
              ]
            },
            {
              `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'厦门'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'XiaMen'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'思明区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'SiMing'"),s(` },
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'海沧区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'HaiCang'"),s(` }
              ]
            }
          ]
        }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { selectedCascader, cascaderColumns, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),J=a("h3",null,"异步获取",-1),B=a("p",null,[s("在实际开发中，大部分情况 "),a("code",{class:""},"Columns"),s(" 属性的数据是通过异步方式获取的。")],-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"asyncValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"asyncColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" asyncColumns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([]);
      `),a("span",{class:"hljs-keyword"},"const"),s(` asyncValue = ref<string[]>([]);
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-comment"},"// 用于模拟接口请求"),s(`
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          asyncColumns.`),a("span",{class:"hljs-property"},"value"),s(` = [
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'南京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'无锡市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'海北藏族自治区'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'连云港市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'浙江市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'江苏市'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
          ];

          asyncValue.`),a("span",{class:"hljs-property"},"value"),s(" = ["),a("span",{class:"hljs-string"},"'ZangZu'"),s(`];
        }, `),a("span",{class:"hljs-number"},"500"),s(`);
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { asyncColumns, asyncValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:value</td><td>默认选中项</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>columns</td><td>对象数组，配置每一列显示的数据</td><td>PickerOption[] | PickerOption[][]</td><td>-</td></tr><tr><td>field-names</td><td>自定义 columns 中的字段</td><td>object</td><td><code class="">{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>title</td><td>设置标题</td><td>string</td><td>-</td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>string</td><td><code class="">取消</code></td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>string</td><td><code class="">确定</code></td></tr><tr><td>three-dimensional</td><td>是否开启 3D 效果</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>swipe-duration</td><td>惯性滚动时长</td><td>number | string</td><td><code class="">1000</code></td></tr><tr><td>visible-option-num</td><td>可见的选项个数</td><td>number | string</td><td><code class="">7</code></td></tr><tr><td>option-height</td><td>选项高度</td><td>number | string</td><td><code class="">36</code></td></tr><tr><td>show-toolbar</td><td>是否显示顶部导航</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确定按钮时触发</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>change</td><td>选项发生改变时触发</td><td><code class="">{ columnIndex, selectedValue, selectedOptions }</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义滑动数据底部区域</td></tr><tr><td>top</td><td>自定义滑动数据顶部区域</td></tr></tbody></table><h3>PickerOption 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>选项的文字内容</td><td>string | number</td><td>-</td></tr><tr><td>value</td><td>选项对应的值，且唯一</td><td>string | number</td><td>-</td></tr><tr><td>children</td><td>用于级联选项</td><td>Array</td><td>-</td></tr><tr><td>className</td><td>添加额外的类名</td><td>string</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-picker-cancel-color</td><td><em>#808080</em></td></tr><tr><td>--cub-picker-ok-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-picker-bar-cancel-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-ok-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-button-padding</td><td><em>0 15px</em></td></tr><tr><td>--cub-picker-bar-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-picker-bar-title-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-bar-title-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-picker-item-height</td><td><em>36px</em></td></tr><tr><td>--cub-picker-item-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-item-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-item-active-line-border</td><td><em>1px solid #d8d8d8</em></td></tr></tbody></table>',13),X={},P="",D=e({__name:"doc.taro",setup(O,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(L,z)=>{const l=h("demo-block");return j(),r("div",i,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIDpjb2x1bW5zPSLHCSIgdGl0bGU9IuWfjuW4gumAieaLqSIgQGNvbmZpcm3EKMUJIj48L8pIPgo8L8pjPHNjcmlwdCBsYW5nPSJ0cyLEdmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yh1UYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB7CiAgICBzZXR1cChwcm9wcynHEyAgY29uc3Qg5wDQID3EcShbxxwgIHsgdGV4dDogJ+WNl+S6rOW4gicsIHZhbHVlOiAnTmFuSmluZycgfSzSMeaXoOmUoc4xV3VYadcutbfljJfol4/ml4/oh6rmsrvljLrLOlphbmdaddY85YzyAJtCZWn6AJvov57kupHmuK/ONExpYW5ZdW5HYdg45rWZ5rGfzjVaaGVKadoysZ/oi4/OMsUvU+QAzMcwXSk7Cu8BjeUCNSA9ICh7IHNlbGVjdGVkVsQ/LMkPT3B0aW9ucyB9KSA9PukBzSDlAhUuc2hvd1RvYXN0KMoZIOYCqzrQQi5tYXAoKHZhbDogYW55xU52YWwu5ADBKS5qb2luKCcsJynqANwgIGljb246ICdub25lJ8kXfSnkAnfFCukAznJldHVybiB76AJeLOkA2n3GLeQBAn07Cjwv5gMDPgo="},{default:t(()=>[d]),_:1}),u,g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6K+36YCJ5oup5Z+O5biCIiA6ZGVzYz0icG9wdXBEZXNjIiBAY2xpY2s9InNob3cgPSB0cnVlIj48L8hKyVfFMyBwb3NpdGlvbj0iYm90dG9tIiB2LW1vZGVsOnZpc2lixHTESSLEN8g5aWNrZXLIKMd8VmFsdWUiIDpjb2x1bW5zPSLHCSL5ALpAY29uZmlybcdBQ8YOxBhhbmPEWMR4PWZhbHNlx37nAIBidXR0b24gYmxvY2sgdHlwZT0icHJpbWFyeSI+5rC46L+c5pyJ5pWI5gD0xi7GQcYS5gDAxBLHEMR/Pgo8L+oBejxzY3JpcHQgbGFuZz0idHPlAIFpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvFcHNldHVwKHByb3BzKccTICBjb25zdCDnAZ5yZWYo5QDjKcRFyh/pAdDHJNQf5QFz1iDnAX3HHVvHHCAgeyB0ZXh0OiAn5Y2X5Lqs5biCJywgdsRIOiAnTmFuSmluZycgfSzSMeaXoOmUoc4xV3VYadcutbfljJfol4/ml4/oh6rmsrvljLrLOlphbmdaddY85YzyAJtCZWn6AJvov57kupHmuK/ONExpYW5ZdW5HYdg45rWZ5rGfzjVaaGVKadoysZ/oi4/OMsUvU+QAzMcwXSk7CvIBrecC3yA9ICh7IHNlbGVjdGVk5QHCLMkPT3DkA4pzIH0pID0+6QIwIOoCDS7FdSA90DIubWFwKCh2YWw6IGFuecU+dmFsLuQAtikuam9pbignLCfpAiMg5QJ9yUzlAn/IHH3pALxyZXR1cm4ge8UtLOoAhCzoAl3ECeUA1Mcd5wDixw7mAp19xljkARt9Owo8L+YDVz4K"},{default:t(()=>[m]),_:1}),b,y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVmFsdWUiIDpjb2x1bW5zPSLHCSIgOmZpZWxkLW5hbWVzPSLFDU7EDCIgdGl0bGU9IuWfjuW4gumAieaLqSIgQGNvbmZpcm3EQsUJIsV8L8p9Pgo8L+oAmDxzY3JpcHQgbGFuZz0idHPFL2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRsdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDtAUIgPeQAsyhbXSnES8ol6gE3xyLIRCAgdGV4dDogJ+QBYCcsyRZ2xE46ICdjb2TMF2NoaWxkcmVuOiAnbGlzdCfHGX3Pb2N1c3RvbUPmAcPHclvJRcp8ICDEdzogJ+a1meaxn8tpxEpkxBpaaGVKaWFuZ80cxHw6IMpS0FbMWp2t5beezT7LXkhhbmdaaG910SDUYsVmyFjopb/muZYnLMhKWGlIdScgfdBIyzLkvZnkAI2Muso1WXXkAIEnIH3PNl3NEM9V+ADpuKn7AOlXZW7/AOjOAekAtum5v+QDYewAtkx1Q2hl5QC3+wDu55Ov5rW3zThPdUhhaf8A7c0eyhrIFuQC2O4CauYD5SA9ICh77gMLLMkPT3B0aW9ucyB9KSA9PusBP+kDwC7kAwQozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJywnKekC+X3pAJlyZXR1cm4geyDnBMPqAInnAJjoALR9xjzkANx9Owo8L+YEij4K"},{default:t(()=>[f]),_:1}),k,v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVmFsdWUiIDpjb2x1bW5zPSLHCSIgdGl0bGU9IuWfjuW4gumAieaLqSIgQGNvbmZpcm3EKMUJIj4gPC/KYT4KPC/KfDxzY3JpcHQgbGFuZz0idHMi5ACPaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvKHVRhcm/HGkB0YXJvanMvxAfFI2V4xSNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDtAOogPcR3KFsnWmhlSmlhbmcnXSnEVcov5wEAyCnHHCAgeyB0ZXh0OiAn5Y2X5Lqs5biCJywgdsRUOiAnTmFuSmluZycgfSzSMeaXoOmUoc4xV3VYadcutbfljJfol4/ml4/oh6rmsrvljLrLOlphbmdaddY85YzyAJtCZWn6AJvov57kupHmuK/ONExpYW5ZdW5H5AEg1TjmtZnmsZ/ONekBUtYysZ/oi4/OMsUvU+QAzMcw5AGM7wGN5QJlID0gKHvuAcksyQ9PcHRpb25zIH0pID0+6QH8IOUCRC5zaG93VG9hc3Qoyhkg5gLbOtBCLm1hcCgodmFsOiBhbnnFTnZhbC7kAMEpLmpvaW4oJywnKeoA3CAgaWNvbjogJ25vbmUnyRd96QJRfekAznJldHVybiB76AJe6gC+5wDN6ADpfcY85AERfTsKPC/mA0E+Cg=="},{default:t(()=>[A]),_:1}),x,I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVmFsdWUiIDpjb2x1bW5zPSLHCSIgdGl0bGU9IuWfjuW4gumAieaLqSIgOnRocmVlRGltZW5zaW9uYWw9ImZhbHNlIiBAY29uZmlybcRCxQkixXwvyn0+Cjwv6gCYPHNjcmlwdCBsYW5nPSJ0c8UvaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvKHVRhcm/HGkB0YXJvanMvxAfFI2V4xSNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDtAQYgPcR3KFsnWmhlSmlhbmcnXSnEVcov5wEcyCnHHCAgeyB0ZXh0OiAn5Y2X5Lqs5biCJywgdsRUOiAnTmFuSmluZycgfSzSMeaXoOmUoc4xV3VYadcutbfljJfol4/ml4/oh6rmsrvljLrLOlphbmdaddY85YzyAJtCZWn6AJvov57kupHmuK/ONExpYW5ZdW5H5AEg1TjmtZnmsZ/ONekBUtYysZ/oi4/OMsUvU+QAzMcw5AGM7wGN5QJnID0gKHvuAcksyQ9PcHRpb25zIH0pID0+6QH8IOUCRC5zaG93VG9hc3Qoyhkg5gL3OtBCLm1hcCgodmFsOiBhbnnFTnZhbC7kAMEpLmpvaW4oJywnKeoA3CAgaWNvbjogJ25vbmUnyRd96QJRfekAznJldHVybiB76AJe6gC+5wDN6ADpfcY85AERfTsKPC/mA0E+Cg=="},{default:t(()=>[w]),_:1}),C,Z,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVGltZSIgOmNvbHVtbnM9Im11bHRpcGxlQ8YRIiB0aXRsZT0i5Z+O5biC6YCJ5oupIiBAY29uZmlybT0ixwnEE2hhbmdlPSLGCCLFei/Kez4KPC/qAJY8c2NyaXB0IGxhbmc9InRzxS9pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8odVGFyb8caQHRhcm9qcy/EB8UjZXjFI2RlZmF1bHQgewogICAgc2V0dXAocHJvcHMpxxMgIGNvbnN0IOwBBCA9xHYoWydXZWRuZXNkYXknLCAnQWZ0ZXJub29uJ10pxGLKPO8BKMg/xyQgIC8vIOesrOS4gOWIl8kVyh8gIHsgdGV4dDogJ+WRqOS4gCcsIHZhbHVlOiAnTW9uxH8gfSzYL7qMyy9UdeYAr9swuInLMOoA4doy5ZubzGJodXLfMeS6lMsxRnJpxi/JLl3KOecBGrqM/wEaICfkuIrljYjLWE1vcm5pbmf4AIjkuIvOMOoBv9cy5pma5LiKyzJFdmXHYskvXccK5AIC7QID5wL7ID0gKHvpAkxWxEksyQ9PcHRpb25zIH0pID0+6QJ/IOUCxy5zaG93VG9hc3Qoyhkg5gNxOtBCLm1hcCgodmFsOiBhbnnFTnZhbC7kAMgpLmpvaW4oJywnKewA5Wljb246ICdub25lJ8kXfekCx33uAtDmA7b/AMz2AMzEQW9sZS5sb2cozTvMbMcKcmV0dXJuIHvwA0As5wCBLOgBVsp35QOe5wCu5AGWfTsKPC/mBD8+Cg=="},{default:t(()=>[W]),_:1}),H,V,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkQ2FzY2FkZXIiIDpjb2x1bW5zPSJjxxRDxhEiIHRpdGxlPSLln47luILpgInmi6kiIEBjb25maXJtPSLHCSI+PC/Kaz4KPC/qAIY8c2NyaXB0IGxhbmc9InRzIuQAmWltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yh1UYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB7CiAgICBzZXR1cChwcm9wcynHEyAgY29uc3Qg8AD0ID3EeihbJ0Z1SmlhbicsICdGdVpob3XEClRhacQVZyddKcRsykbvAR7IRcckIMl0xAF0ZXh0OiAn5rWZ5rGfJyzLGnZhbHVlOiAnWmhlxmfMHWNoaWxkcmVuOiDKV9BbzF+dreW3ns1CzGNIYW5n5gDWzyHYZ8VryF3opb/muZbljLonLMlSWGlIdScgfdBQyzbkvZnkAJbNNll15ACKJyB9zzddzRDPVvgA87ip/ADzV2Vu/wDy+wDy6bm/5ALq7QC8THVDaGXlAL37APXnk6/mtbfOOU91SGFp/wD0zR7KGstr8wJU56aP5bu69QJU6ALP/wJS0FnPXfsBX+gDJv8BXswB6gFevJPmpbzuASVHdUxv/wJR5Y+w5rGfzjfpA6P/AV//AlPIYo6m6Zeo+QD0WGlhTWXuAVXEAf8A9MZb5oCd5pjvAlJTaU1p/wJRJ+a1t+ayp844SGFpQ/8A9MQB9wJTxwrkBNTuBNXmBcMgPSAoe+kFKFbEcyzJD09wdGlvbnMgfSkgPT7rAUbkBaMuc2hvd1RvYXN0KMoZIOYGOTrQQi5tYXAoKHZhbDogYW55xU52YWwu5AD1KS5qb2luKCcsJynsARhpY29uOiAnbm9uZSfJF33pBZl96QDOcmV0dXJuIOoAxOgF7CzwBbgs6QD0fcZH5AEcfTsKPC/mBqs+Cg=="},{default:t(()=>[_]),_:1}),J,B,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9ImFzeW5jVmFsdWUiIDpjb2x1bW5zxxZDxg4iIHRpdGxlPSLln47luILpgInmi6kiIEBjb25maXJtPSLHCSI+PC/KYj4KPC/KfTxzY3JpcHQgbGFuZz0idHMi5ACQaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnO8ooVGFyb8caQHRhcm9qcy/EB8UjZXjFI2RlZmF1bHQgewogICAgc2V0dXAocHJvcHMpxxMgIGNvbnN0IOwA4CA95ACBKFtdKcRKzyTlARrGIjxzdHJpbmdbXT7MLOkAtygoKSA9PsloICAvLyDnlKjkuo7mqKHmi5/mjqXlj6Por7fmsYLJJHNldFRpbWVvdXTRPyDtAKUuducAiVvLISAgeyB0ZXh0OiAn5Y2X5Lqs5biCJywgxSs6ICdOYW5KaW5nJyB9LNY15peg6ZShzjVXdVhp2zK1t+WMl+iXj+aXj+iHquayu+WMuss+WmFuZ1p12kDljPIAp0Jlaf4Ap+i/nuS6kea4r844TGlhbll1bkdh3DzmtZnmsZ/OOVpoZUpp3jaxn+iLj842xTNT5ADcyzRdOwrLDuoCMuoBr+gBE13oAjEgIH0sIDUwMOkCQn0pyUXmAnnnA1AgPSAoeyBzZWxlY3RlZMVXLMkPT3B0aW9ucyB97wI25AMlLnNob3dUb2FzdCjKGSDmA8Y60EIubWFwKCh2YWw6IGFuecVOdmFsLuQBCSkuam9pbignLCcp7AEoaWNvbjogJ25vbmUnyRfkAMXHCukAznJldHVybiB77QLJLOsBJizpAOt9xj7kAVt9Owo8L+YELz4K"},{default:t(()=>[G]),_:1}),Y])}}});export{D as default,P as excerpt,X as frontmatter};
