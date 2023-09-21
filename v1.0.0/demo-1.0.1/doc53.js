import{d as e,r as h,b as r,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const i={class:"markdown-body"},o=c(`<h1>Picker</h1><h3>介绍</h3><p>提供多个选项集合供用户选择其中一项，通常与弹出层组件配合使用。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>);
</code></pre><h3>基础用法</h3>`,6),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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

      `),a("span",{class:"hljs-keyword"},"return"),s(` { popupValue, show, popupDesc, columns, confirm, popupConfirm };
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
`)])],-1),k=a("h3",null,"默认选中项",-1),v=a("p",null,[s("通过设置 "),a("code",{class:""},"modelValue"),s(" 实现默认选中项，"),a("code",{class:""},"modelValue"),s(" 是一个包含每项配置 value 值的数组。")],-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, selectedValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"平铺展示",-1),x=a("p",null,[s("属性 "),a("code",{class:""},"threeDimensional"),s(" 可关闭 3D 滚动效果。")],-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(),a("span",{class:"hljs-attr"},":threeDimensional"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, selectedValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"多列展示",-1),W=a("p",null,[a("code",{class:""},"columns"),s(" 属性可以通过二维数组的形式配置多列选择。")],-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedTime"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"multipleColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(selectedValue);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { multipleColumns, change, confirm, selectedTime };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=a("h3",null,"多级联动",-1),V=a("p",null,[s("使用 "),a("code",{class:""},"columns"),s(" 属性的 "),a("code",{class:""},"children"),s(" 字段可以实现选项级联的效果。")],-1),J=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedCascader"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"cascaderColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { selectedCascader, cascaderColumns, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"异步获取",-1),G=a("p",null,[s("在实际开发中，大部分情况 "),a("code",{class:""},"Columns"),s(" 属性的数据是通过异步方式获取的。")],-1),z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"asyncValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"asyncColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { asyncColumns, asyncValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:value</td><td>默认选中项</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>columns</td><td>对象数组，配置每一列显示的数据</td><td>PickerOption[] | PickerOption[][]</td><td>-</td></tr><tr><td>field-names</td><td>自定义 columns 中的字段</td><td>object</td><td><code class="">{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>title</td><td>设置标题</td><td>string</td><td>-</td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>string</td><td><code class="">取消</code></td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>string</td><td><code class="">确定</code></td></tr><tr><td>three-dimensional</td><td>是否开启 3D 效果</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>swipe-duration</td><td>惯性滚动时长</td><td>number | string</td><td><code class="">1000</code></td></tr><tr><td>visible-option-num</td><td>可见的选项个数</td><td>number | string</td><td><code class="">7</code></td></tr><tr><td>option-height</td><td>选项高度</td><td>number | string</td><td><code class="">36</code></td></tr><tr><td>show-toolbar</td><td>是否显示顶部导航</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确定按钮时触发</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>change</td><td>选项发生改变时触发</td><td><code class="">{ columnIndex, selectedValue, selectedOptions }</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义滑动数据底部区域</td></tr><tr><td>top</td><td>自定义滑动数据顶部区域</td></tr></tbody></table><h3>PickerOption 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>选项的文字内容</td><td>string | number</td><td>-</td></tr><tr><td>value</td><td>选项对应的值，且唯一</td><td>string | number</td><td>-</td></tr><tr><td>children</td><td>用于级联选项</td><td>Array</td><td>-</td></tr><tr><td>className</td><td>添加额外的类名</td><td>string</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-picker-cancel-color</td><td><em>#808080</em></td></tr><tr><td>--cub-picker-ok-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-picker-bar-cancel-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-ok-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-button-padding</td><td><em>0 15px</em></td></tr><tr><td>--cub-picker-bar-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-picker-bar-title-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-bar-title-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-picker-item-height</td><td><em>36px</em></td></tr><tr><td>--cub-picker-item-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-item-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-item-active-line-border</td><td><em>1px solid #d8d8d8</em></td></tr></tbody></table>',13),O={},P="",M=e({__name:"doc",setup(B,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(L,S)=>{const l=h("demo-block");return j(),r("div",i,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIDpjb2x1bW5zPSLHCSIgdGl0bGU9IuWfjuW4gumAieaLqSIgQGNvbmZpcm3EKMUJIj48L8pIPgo8L8pjPHNjcmlwdCBsYW5nPSJ0cyLEdmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRsdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDnAQwgPeQArShbxxwgIHsgdGV4dDogJ+WNl+S6rOW4gicsIHZhbHVlOiAnTmFuSmluZycgfSzSMeaXoOmUoc4xV3VYadcutbfljJfol4/ml4/oh6rmsrvljLrLOlphbmdaddY85YzyAJtCZWn6AJvov57kupHmuK/ONExpYW5ZdW5HYdg45rWZ5rGfzjVaaGVKadoysZ/oi4/OMsUvU+QAzMcwXSk7Cu8BjeUCcSA9ICh7IHNlbGVjdGVkVsQ/LMkPT3B0aW9ucyB9KSA9PukBzSDqAk8u5ACDKM8vLm1hcCgodmFsOiBhbnnFO3ZhbMUrKS5qb2luKCcsJykp5AJCxAF96QCZcmV0dXJuIHvoAiks6QClfcYt5ADNfTsKPC/mAwo+Cg=="},{default:t(()=>[d]),_:1}),u,g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6K+36YCJ5oup5Z+O5biCIiA6ZGVzYz0icG9wdXBEZXNjIiBAY2xpY2s9InNob3cgPSB0cnVlIj48L8hKyVfFMyBwb3NpdGlvbj0iYm90dG9tIiB2LW1vZGVsOnZpc2lixHTESSLEN8g5aWNrZXLIKMd8VmFsdWUiIDpjb2x1bW5zPSLHCSL5ALpAY29uZmlybcdBQ8YOxBhhbmPEWMR4PWZhbHNlx37nAIBidXR0b24gYmxvY2sgdHlwZT0icHJpbWFyeSI+5rC46L+c5pyJ5pWI5gD0xi7GQcYS5gDAxBLHEMR/Pgo8L+oBejxzY3JpcHQgbGFuZz0idHPlAIFpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wd5AC2VG9hc3TJI0BjdWJ1acRrdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlAM9zZXR1cChwcm9wcynHEyAgY29uc3TlAIYgPeQAqijlAUIpxEXKH+kCL8ck1B/lAdLWIOcB3McdW8ccICB7IHRleHQ6ICfljZfkuqzluIInLCB2xEg6ICdOYW5KaW5nJyB9LNIx5peg6ZShzjFXdVhp1y61t+WMl+iXj+aXj+iHquayu+WMuss6WmFuZ1p11jzljPIAm0JlafoAm+i/nuS6kea4r840TGlhbll1bkdh2DjmtZnmsZ/ONVpoZUpp2jKxn+iLj84yxS9T5ADMxzBdKTsK8gGt5wM+ID0gKHsgc2VsZWN0ZWTlAcIsyQ9PcOQD6XMgfSkgPT7pAjAg6gINLsV1ID3QMi5tYXAoKHZhbDogYW55xT52YWwu5AC2KS5qb2luKCcsJ+kCIyDlAn3JTOUCf8gcfekAvHJldHVybiB76wJsLMU5LOoAkCzoAmnECeUA4Mcd6ADufcZY5AEbfTsKPC/mA7Y+Cg=="},{default:t(()=>[m]),_:1}),b,y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVmFsdWUiIDpjb2x1bW5zPSLHCSIgOmZpZWxkLW5hbWVzPSLFDU7EDCIgdGl0bGU9IuWfjuW4gumAieaLqSIgQGNvbmZpcm3EQsUJIsV8L8p9Pgo8L+oAmDxzY3JpcHQgbGFuZz0idHPFL2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRsdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDtAUIgPeQAsyhbXSnES8ol6gE3xyLIRCAgdGV4dDogJ+QBYCcsyRZ2xE46ICdjb2TMF2NoaWxkcmVuOiAnbGlzdCfHGX3Pb2N1c3RvbUPmAcPHclvJRcp8ICDEdzogJ+a1meaxn8tpxEpkxBpaaGVKaWFuZ80cxHw6IMpS0FbMWp2t5beezT7LXkhhbmdaaG910SDUYsVmyFjopb/muZYnLMhKWGlIdScgfdBIyzLkvZnkAI2Muso1WXXkAIEnIH3PNl3NEM9V+ADpuKn7AOlXZW7/AOjOAekAtum5v+QDYewAtkx1Q2hl5QC3+wDu55Ov5rW3zThPdUhhaf8A7c0eyhrIFuQC2O4CauYD5SA9ICh77gMLLMkPT3B0aW9ucyB9KSA9PusBP+kDwC7kAwQozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJywnKekC+X3pAJlyZXR1cm4geyDnBMPqAInnAJjoALR9xjzkANx9Owo8L+YEij4K"},{default:t(()=>[f,k,v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVmFsdWUiIDpjb2x1bW5zPSLHCSIgdGl0bGU9IuWfjuW4gumAieaLqSIgQGNvbmZpcm3EKMUJIj4gPC/KYT4KPC/KfDxzY3JpcHQgbGFuZz0idHMi5ACPaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxGx1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgc2V0dXAocHJvcHMpxxMgIGNvbnN0IO0BJiA95ACzKFsnWmhlSmlhbmcnXSnEVcov5wE8yCnHHCAgeyB0ZXh0OiAn5Y2X5Lqs5biCJywgdsRUOiAnTmFuSmluZycgfSzSMeaXoOmUoc4xV3VYadcutbfljJfol4/ml4/oh6rmsrvljLrLOlphbmdaddY85YzyAJtCZWn6AJvov57kupHmuK/ONExpYW5ZdW5H5AEg1TjmtZnmsZ/ONekBUtYysZ/oi4/OMsUvU+QAzMcw5AGM7wGN5QKhID0gKHvuAcksyQ9PcHRpb25zIH0pID0+6QH8IOoCfi7kAIMozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJywnKekCHH3pAJlyZXR1cm4ge+gCKeoAiecAmOgAtH3GPOQA3H07Cjwv5gNIPgo="},{default:t(()=>[I]),_:1})]),_:1}),w,x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVmFsdWUiIDpjb2x1bW5zPSLHCSIgdGl0bGU9IuWfjuW4gumAieaLqSIgOnRocmVlRGltZW5zaW9uYWw9ImZhbHNlIiBAY29uZmlybcRCxQkixXwvyn0+Cjwv6gCYPHNjcmlwdCBsYW5nPSJ0c8UvaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxGx1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgc2V0dXAocHJvcHMpxxMgIGNvbnN0IO0BQiA95ACzKFsnWmhlSmlhbmcnXSnEVcov5wFYyCnHHCAgeyB0ZXh0OiAn5Y2X5Lqs5biCJywgdsRUOiAnTmFuSmluZycgfSzSMeaXoOmUoc4xV3VYadcutbfljJfol4/ml4/oh6rmsrvljLrLOlphbmdaddY85YzyAJtCZWn6AJvov57kupHmuK/ONExpYW5ZdW5H5AEg1TjmtZnmsZ/ONekBUtYysZ/oi4/OMsUvU+QAzMcw5AGM7wGN5QKjID0gKHvuAcksyQ9PcHRpb25zIH0pID0+6QH8IOoCfi7kAIMozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJywnKekCHH3pAJlyZXR1cm4ge+gCKeoAiecAmOgAtH3GPOQA3H07Cjwv5gNIPgo="},{default:t(()=>[A]),_:1}),C,W,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVGltZSIgOmNvbHVtbnM9Im11bHRpcGxlQ8YRIiB0aXRsZT0i5Z+O5biC6YCJ5oupIiBAY29uZmlybT0ixwnEE2hhbmdlPSLGCCLFei/Kez4KPC/qAJY8c2NyaXB0IGxhbmc9InRzxS9pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEbHVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB7CiAgICBzZXR1cChwcm9wcynHEyAgY29uc3Qg7AFAID3kALIoWydXZWRuZXNkYXknLCAnQWZ0ZXJub29uJ10pxGLKPO8BZMg/xyQgIC8vIOesrOS4gOWIl8kVyh8gIHsgdGV4dDogJ+WRqOS4gCcsIHZhbHVlOiAnTW9uxH8gfSzYL7qMyy9UdeYAr9swuInLMOoA4doy5ZubzGJodXLfMeS6lMsxRnJpxi/JLl3KOecBGrqM/wEaICfkuIrljYjLWE1vcm5pbmf4AIjkuIvOMOoBv9cy5pma5LiKyzJFdmXHYskvXccK5AIC7QID5wM3ID0gKHvpAkxWxEksyQ9PcHRpb25zIH0pID0+6QJ/IOoDAS7kAIoozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJywnKekCkn3uApvmA73/AJf2AJfEQW9sZS5sb2fpAJTFO8xsxwpyZXR1cm4ge/ADCyznAIEs6AEhynflA2nnAK7kAWF9Owo8L+YERj4K"},{default:t(()=>[Z]),_:1}),H,V,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkQ2FzY2FkZXIiIDpjb2x1bW5zPSJjxxRDxhEiIHRpdGxlPSLln47luILpgInmi6kiIEBjb25maXJtPSLHCSI+PC/Kaz4KPC/qAIY8c2NyaXB0IGxhbmc9InRzIuQAmWltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRsdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDwATAgPeQAtihbJ0Z1SmlhbicsICdGdVpob3XEClRhacQVZyddKcRsykbvAVrIRcckIMl0xAF0ZXh0OiAn5rWZ5rGfJyzLGnZhbHVlOiAnWmhlxmfMHWNoaWxkcmVuOiDKV9BbzF+dreW3ns1CzGNIYW5n5gDWzyHYZ8VryF3opb/muZbljLonLMlSWGlIdScgfdBQyzbkvZnkAJbNNll15ACKJyB9zzddzRDPVvgA87ip/ADzV2Vu/wDy+wDy6bm/5AMm7QC8THVDaGXlAL37APXnk6/mtbfOOU91SGFp/wD0zR7KGstr8wJU56aP5bu69QJU6ALP/wJS0FnPXfsBX+gDJv8BXswB6gFevJPmpbzuASVHdUxv/wJR5Y+w5rGfzjfpA6P/AV//AlPIYo6m6Zeo+QD0WGlhTWXuAVXEAf8A9MZb5oCd5pjvAlJTaU1p/wJRJ+a1t+ayp844SGFpQ/8A9MQB9wJTxwrkBNTuBNXmBf8gPSAoe+kFKFbEcyzJD09wdGlvbnMgfSkgPT7rAUbpBd0u5AC3KM8vLm1hcCgodmFsOiBhbnnFO3ZhbMUrKS5qb2luKCcsJynpBWR96QCZcmV0dXJu5AY97wW3LPAFgyzpAL99xkfkAOd9Owo8L+YGsj4K"},{default:t(()=>[J]),_:1}),_,G,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9ImFzeW5jVmFsdWUiIDpjb2x1bW5zxxZDxg4iIHRpdGxlPSLln47luILpgInmi6kiIEBjb25maXJtPSLHCSI+PC/KYj4KPC/KfTxzY3JpcHQgbGFuZz0idHMi5ACQaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnO8woc2hvd1RvYXN0ySNAY3VidWnEd3VpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB7CiAgICBzZXR1cChwcm9wcynHEyAgY29uc3Qg7AEcID3kAL0oW10pxErPJOUBVsYiPHN0cmluZ1tdPsws6QDzKCgpID0+yWggIC8vIOeUqOS6juaooeaLn+aOpeWPo+ivt+axgskkc2V0VGltZW91dNE/IO0ApS525wCJW8shICB7IHRleHQ6ICfljZfkuqzluIInLCDFKzogJ05hbkppbmcnIH0s1jXml6DplKHONVd1WGnbMrW35YyX6JeP5peP6Ieq5rK75Yy6yz5aYW5nWnXaQOWM8gCnQmVp/gCn6L+e5LqR5rivzjhMaWFuWXVuR2HcPOa1meaxn845WmhlSmneNrGf6IuPzjbFM1PkANzLNF07CssO6gIy6gGv6AETXegCMSAgfSwgNTAw6QJCfSnJReYCeecDjCA9ICh7IHNlbGVjdGVkxVcsyQ9PcHRpb25zIH3vAjbpA18u5ADLKM8vLm1hcCgodmFsOiBhbnnFO3ZhbMUrKS5qb2luKCcsJynqAJrpAJlyZXR1cm4ge+0ClCzrAPEs6QC2fcY+5AEmfTsKPC/mBDY+Cg=="},{default:t(()=>[z]),_:1}),Y])}}});export{M as default,P as excerpt,O as frontmatter};
