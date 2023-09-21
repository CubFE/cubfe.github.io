import{d as p,r as h,b as r,k as n,w as t,aq as c,e as a,l as s,o as i}from"./style_icon.js";const j={class:"markdown-body"},o=c(`<h1>Picker</h1><h3>Intro</h3><p>The picker component is usually used with Popup Component.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>);
</code></pre><h3>Basic Usage</h3>`,6),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"城市选择"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"With Popup",-1),g=a("p",null,"The Picker is usually filled in as an auxiliary form, which can be paired with a Popup.",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose city"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"popupDesc"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"popupValue"'),s(`
      `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
      `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose city"'),s(`
      @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"popupConfirm"'),s(`
      @`),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"show=false"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Always"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"popupConfirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        popupDesc.`),a("span",{class:"hljs-property"},"value"),s(" = selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`);
        show.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { popupValue, show, popupDesc, columns, confirm, popupConfirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Custom Columns Field",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedValue"'),s(`
    `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
    `),a("span",{class:"hljs-attr"},":field-names"),s("="),a("span",{class:"hljs-string"},'"fieldNames"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose city"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),s(`
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
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`,
          `),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HangZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'HangZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"list"),s(`: [
                { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'XiHu'"),s(", "),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'XiHu'"),s(` },
                { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'YuHang'"),s(", "),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'YuHang'"),s(` }
              ]
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'WenZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'WenZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"list"),s(`: [
                { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'LuCheng'"),s(", "),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'LuCheng'"),s(` },
                { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'OuHai'"),s(", "),a("span",{class:"hljs-attr"},"code"),s(": "),a("span",{class:"hljs-string"},"'OuHai'"),s(` }
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
`)])],-1),f=a("h3",null,"Default Index",-1),x=a("p",null,[s("The default selection is implemented by setting "),a("code",{class:""},"modelValue"),s(", which is an array of values for each configuration。")],-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose City"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" selectedValue = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, selectedValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"Tile",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedValue"'),s(`
    `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose City"'),s(`
    `),a("span",{class:"hljs-attr"},":threeDimensional"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),s(`
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
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"','"),s(`));
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { columns, selectedValue, confirm };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"Multiple Columns",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedTime"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"multipleColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose City"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(">")]),s(`
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
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Monday'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Monday'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Tuesday'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Tuesday'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Wednesday'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Wednesday'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Thursday'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Thursday'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Friday'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Friday'"),s(` }
        ],
        `),a("span",{class:"hljs-comment"},"// 第二列"),s(`
        [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Morning'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Morning'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Afternoon'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Afternoon'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Evening'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Evening'"),s(` }
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
`)])],-1),I=a("h3",null,"Cascade",-1),Z=a("p",null,"Use the children field of the Columns attribute to cascade options",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"selectedCascader"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"cascaderColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose City"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
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
          `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`,
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'HangZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'HangZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'XiHu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'XiHu'"),s(` },
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'YuHang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'YuHang'"),s(` }
              ]
            },
            {
              `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'WenZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WenZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'LuCheng'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LuCheng'"),s(` },
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'OuHai'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'OuHai'"),s(` }
              ]
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'FuJian'"),s(`,
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'FuJian'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'FuZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'FuZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'GuLou'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'GuLou'"),s(` },
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'TaiJiang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'TaiJiang'"),s(` }
              ]
            },
            {
              `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'XiaMen'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'XiaMen'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'SiMing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'SiMing'"),s(` },
                { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'HaiCang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'HaiCang'"),s(` }
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
`)])],-1),J=a("h3",null,"Async",-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"asyncValue"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"asyncColumns"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose City"'),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
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
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'WuXi'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZangZu'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'LianYunGang'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'ZheJiang'"),s(` },
            { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(` }
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
`)])],-1),B=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:value</td><td>Default Index</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>columns</td><td>Columns data</td><td>PickerOption[] | PickerOption[][]</td><td>-</td></tr><tr><td>field-names</td><td>custom columns field</td><td>object</td><td><code class="">{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>title</td><td>Toolbar title</td><td>string</td><td>-</td></tr><tr><td>cancel-text</td><td>Text of cancel button</td><td>string</td><td><code class="">cancel</code></td></tr><tr><td>ok-text</td><td>Text of confirm button</td><td>string</td><td><code class="">confirm</code></td></tr><tr><td>three-dimensional</td><td>Turn on 3D effects</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>swipe-duration</td><td>Duration of the momentum animation</td><td>number | string</td><td><code class="">1000</code></td></tr><tr><td>visible-option-num</td><td>Count of visible columns</td><td>number | string</td><td><code class="">7</code></td></tr><tr><td>option-height</td><td>Option height</td><td>number | string</td><td><code class="">36</code></td></tr><tr><td>show-toolbar</td><td>Whether to show toolbar</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>confirm</td><td>Emitted when click confirm button.</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>cancel</td><td>Emitted when click close button.</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>change</td><td>Emitted when current option changed.</td><td><code class="">{ columnIndex, selectedValue, selectedOptions }</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom content bottom columns</td></tr><tr><td>top</td><td>Custom content top columns</td></tr></tbody></table><h3>Data Structure of PickerOption</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Text of column</td><td>string | number</td><td>-</td></tr><tr><td>value</td><td>Value of column</td><td>string | number</td><td>-</td></tr><tr><td>children</td><td>Cascader Option</td><td>Array</td><td>-</td></tr><tr><td>className</td><td>Extra CalssName</td><td>string</td><td>-</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-picker-cancel-color</td><td><em>#808080</em></td></tr><tr><td>--cub-picker-ok-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-picker-bar-cancel-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-ok-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-button-padding</td><td><em>0 15px</em></td></tr><tr><td>--cub-picker-bar-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-picker-bar-title-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-bar-title-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-picker-item-height</td><td><em>36px</em></td></tr><tr><td>--cub-picker-item-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-item-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-item-active-line-border</td><td><em>1px solid #d8d8d8</em></td></tr></tbody></table>',13),S={},X="",Y=p({__name:"doc.en-US",setup(V,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(G,L)=>{const l=h("demo-block");return i(),r("div",j,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIDpjb2x1bW5zPSLHCSIgdGl0bGU9IuWfjuW4gumAieaLqSIgQGNvbmZpcm3EKMUJIj48L8pIPgo8L8pjPHNjcmlwdCBsYW5nPSJ0cyLEdmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRsdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDnAQwgPeQArShbxxwgIHsgdGV4dDogJ05hbkppbmcnLCB2YWx1ZcsSIH0s0i9XdVhpyyzFD9UpWmFuZ1p1yyvHEdUtQmVp7wCFyBLVL0xpYW5ZdW5HYc0zzBbVN1poZUppzjTJE9UxxRtT7ADFyBIgfccuXSk7Cu8BceUCVSA9ICh7IHNlbGVjdGVkVsQ/LMkPT3B0aW9ucyB9KSA9PukBsSDqAjMu5ACBKM8vLm1hcCgodmFsOiBhbnnFO3ZhbMUrKS5qb2luKCcsJykp5AImxAF96QCZcmV0dXJuIHvoAg0s6QClfcYt5ADNfTsKPC/mAu4+Cg=="},{default:t(()=>[d]),_:1}),u,g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iQ2hvb3NlIGNpdHkiIDpkZXNjPSJwb3B1cERlc2MiIEBjbGljaz0ic2hvdyA9IHRydWUiPjwvyEbJU8UzIHBvc2l0aW9uPSJib3R0b20iIHYtbW9kZWw6dmlzaWLEcMRJIsQ3yDlpY2tlcsUQIMgu5wCCVmFsdWUixxs6Y29sdW1ucz0ixwnIGfMAyMcaQGNvbmZpcm3HT0PGDsoeYW5jxGzkAJI9ZmFsc8ds5gCd5wCfYnV0dG9uIGJsb2NrIHR5cGU9InByaW1hcnkiPkFsd2F5c+YBDcYoxjvGEuYA2cQSxxDkAIQ+Cjwv6gGPPHNjcmlwdCBsYW5nPSJ0c+UBGGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB3kALVUb2FzdMkjQGN1YnVpxGt1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+UAz3NldHVwKHByb3BzKccTICBjb25zdOUAhiA95ACqKOUBQSnERcof6QJIxyTUH+UB5dYg5wHpxx1bxxwgIHsgdGV4dDogJ05hbkppbmcnLCB2xEbLEiB9LNIvV3VYacssxQ/VKVphbmdadcsrxxHVLUJlae8AhcgS1S9MaWFuWXVuR2HNM8wW1TdaaGVKac40yRPVMcUbU+wAxcgSIH3HLl0pOwryAZHnAycgPSAoeyBzZWxlY3RlZOUBpizJD09w5APmcyB9KSA9PukCFCDqAfEuxXUgPdAyLm1hcCgodmFsOiBhbnnFPnZhbC7kALQpLmpvaW4oJywn6QIHIOUCYclM5QJjyBx96QC8cmV0dXJuIHvrAlAsxTks6gCQLOgCTcQJ5QDgxx3oAO59xljkARt9Owo8L+YDmj4K"},{default:t(()=>[m,y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyCiAgICB2LW1vZGVsPSJzZWxlY3RlZFZhbHVlIsUcOmNvbHVtbnM9IscJxxdmaWVsZC1uYW1lcz0ixQ1OxAzGHnRpdGxlPSJDaG9vc2UgY2l0ecYYQGNvbmZpcm3ETcUJxBflAJIv6gCTPgo8L+oArjxzY3JpcHQgbGFuZz0idHMixC9pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEbHVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB75QDZc2V0dXAocHJvcHMpxxMgIGNvbnN0IO0BVCA95ACzKFtdKcRLyiXqAUHHIshEICB0ZXh0OiAn5AFqJyzJFnbETjogJ2NvZMwXY2hpbGRyZW46ICdsaXN0J8cZfc9vY3VzdG9tQ+YB0cdyW8lFynwgIMR3OiAnWmhlSmlhbmfLa8RMZNkcxH46IMpU0FjLXEhhbmdaaG91zUDLYNkg1GTFaMhaWGlIdScsyEjFDiB90EbLMFl1xGzKMscQIH3PM13NEM9S9wDmV2Vu/ADl2B//AOQgJ0x1Q2hl7AC1yBH9AOpPdUhhaco0xg//AOjMHsoayBbkAtLuAmTmA+IgPSAoe+4DBSzJD09wdGlvbnMgfSkgPT7rATrpA7ou5AL+KM8vLm1hcCgodmFsOiBhbnnFO3ZhbMUrKS5qb2luKCcsJynpAvN96QCZcmV0dXJuIHsg5wTL6gCJ5wCY6AC0fcY85ADcfTsKPC/mBIQ+Cg=="},{default:t(()=>[b]),_:1})]),_:1}),f,x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVmFsdWUiIDpjb2x1bW5zPSLHCSIgdGl0bGU9IkNob29zZSBDaXR5IiBAY29uZmlybcQnxQkiPiA8L8pgPgo8L8p7PHNjcmlwdCBsYW5nPSJ0cyLkAI5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEbHVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB7CiAgICBzZXR1cChwcm9wcynHEyAgY29uc3Qg7QElID3kALMoWydaaGVKaWFuZyddKcRVyi/nATvIKcccICB7IHRleHQ6ICdOYW5KaW5nJywgdsRSyxIgfSzSL1d1WGnLLMUP1SlaYW5nWnXLK8cR1S1CZWnvAIXIEtUvTGlhbll1bkfkAPHKM8wW1TfpASXKNMkT1THFG1PsAMXIEiB9xy7kAXDvAXHlAoUgPSAoe+4BrSzJD09wdGlvbnMgfSkgPT7pAeAg6gJiLuQAgSjPLy5tYXAoKHZhbDogYW55xTt2YWzFKykuam9pbignLCcp6QIAfekAmXJldHVybiB76AIN6gCJ5wCY6AC0fcY85ADcfTsKPC/mAyw+Cg=="},{default:t(()=>[k]),_:1}),v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyCiAgICB2LW1vZGVsPSJzZWxlY3RlZFZhbHVlIsUcOmNvbHVtbnM9IscJxhd0aXRsZT0iQ2hvb3NlIENpdHnHL3RocmVlRGltZW5zaW9uYWw9ImZhbHPHTUBjb25maXJtxE3FCcQX5QCSL+oAkz4KPC/qAK48c2NyaXB0IGxhbmc9InRzIsQvaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxGx1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+UA2XNldHVwKHByb3BzKccTICBjb25zdCDtAVQgPeQAsyhbJ1poZUppYW5nJ10pxFXKL+cBZsgpxxwgIHsgdGV4dDogJ05hbkppbmcnLCB2xFLLEiB9LNIvV3VYacssxQ/VKVphbmdadcsrxxHVLUJlae8AhcgS1S9MaWFuWXVuR+QA8cozzBbVN+kBJco0yRPVMcUbU+wAxcgSIH3HLuQBcO8BceUCiiA9ICh77gGtLMkPT3B0aW9ucyB9KSA9PukB4CDqAmIu5ACBKM8vLm1hcCgodmFsOiBhbnnFO3ZhbMUrKS5qb2luKCcsJynpAgB96QCZcmV0dXJuIHvoAg3qAInnAJjoALR9xjzkANx9Owo8L+YDLD4K"},{default:t(()=>[w]),_:1}),A,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkVGltZSIgOmNvbHVtbnM9Im11bHRpcGxlQ8YRIiB0aXRsZT0iQ2hvb3NlIENpdHkiIEBjb25maXJtPSLHCcQTaGFuZ2U9IsYIIsV5L8p6Pgo8L+oAlTxzY3JpcHQgbGFuZz0idHPFL2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRsdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDsAT8gPeQAsihbJ1dlZG5lc2RheScsICdBZnRlcm5vb24nXSnEYso87wFjyD/HJCAgLy8g56ys5LiA5YiXyRXKHyAgeyB0ZXh0OiAnTW9uxm52YWx1ZcoRIH0s1C9UdegAnsgwyBLXMewA0cgzyhTYZmh1ctBnyBPXM0Zyac4xxxEgfckuXco55wEguoz/ASDkAQ9ybmluZ8tZyBL3AInqAbXKM8oU1zVFdmXPZsgS7ADAxwrkAg3tAg7nA0IgPSAoe+kCV1bESSzJD09wdGlvbnMgfSkgPT7pAoog6gMMLuQAiyjPLy5tYXAoKHZhbDogYW55xTt2YWzFKykuam9pbignLCcp6QKdfe4CpuYDyP8Al/YAl8RBb2xlLmxvZ+kAlMU7zGzHCnJldHVybiB78AMWLOcAgSzoASHKd+UDdOcAruQBYX07Cjwv5gRRPgo="},{default:t(()=>[C]),_:1}),I,Z,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9InNlbGVjdGVkQ2FzY2FkZXIiIDpjb2x1bW5zPSJjxxRDxhEiIHRpdGxlPSJDaG9vc2UgQ2l0eSIgQGNvbmZpcm09IscJIj48L8pqPgo8L+oAhTxzY3JpcHQgbGFuZz0idHMi5ACYaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxGx1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgc2V0dXAocHJvcHMpxxMgIGNvbnN0IPABLyA95AC2KFsnRnVKaWFuJywgJ0Z1WmhvdcQKVGFpxBVnJ10pxGzKRu8BWchFxyQgyXTEAXRleHQ6ICdaaGXGTCzLHHZhbHVl2B1jaGlsZHJlbjogylnQXcthSGFuZ+YAuc8gyGXZIdhpxW3IX1hpSOQBFMhNxQ8gfdBLyzFZdcRxyzPHESB9zzRdzRDPU/cA7Vdlbv0A7Ngg/wDrxl1MdUNoZe0Au8gS/QDxT3VIYWnLNcYQ/wDvzB7KGstn8wJL6AKr8wJJ0xv/AkfSXf0BWdcf2GXFachbR3VMxDvJTMYQ/QFU6QOCyjbJE/8BWv8CScdhWGlhTWXuATHEAcht1x//AO/GW1NpTWntALrHEf0A8UhhaUPuAPDIEv8A7/cCSccK5ATB7gTC5gXsID0gKHvpBRVWxHMsyQ9PcHRpb25zIH0pID0+6wFB6QXKLuQAtSjPLy5tYXAoKHZhbDogYW55xTt2YWzFKykuam9pbignLCcp6QVRfekAmXJldHVybuQGKu8FpCzwBXAs6QC/fcZH5ADnfTsKPC/mBp8+Cg=="},{default:t(()=>[H]),_:1}),J,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGlja2VyIHYtbW9kZWw9ImFzeW5jVmFsdWUiIDpjb2x1bW5zxxZDxg4iIHRpdGxlPSJDaG9vc2UgQ2l0eSIgQGNvbmZpcm09IscJIj48L8phPgo8L8p8PHNjcmlwdCBsYW5nPSJ0cyLkAI9pbXBvcnQgeyByZWYsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7zChzaG93VG9hc3TJI0BjdWJ1acR3dWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDsARsgPeQAvShbXSnESs8k5QFVxiI8c3RyaW5nW10+xizHLekA9CgoKSA9PslpICAvLyDnlKjkuo7mqKHmi5/mjqXlj6Por7fmsYLJJHNldFRpbWVvdXTRPyDtAKYuducAilvLISAgeyB0ZXh0OiAnTmFuSmluZycsIMUpyxIgfSzWM1d1WGnLMMUP2S1aYW5nWnXLL8cR2TFCZWnvAJHIEtkzTGlhbll1bkdhzTfMFtk7WmhlSmnOOMkT2TXFH1PsANXIEiB9yzJd6QHsxAHqAhfqAZPoAQ1d6AJCICB9LCA1MDDpAlN96gIx5gJe5wNxID0gKHsgc2VsZWN0ZWTFVyzJD09wdGlvbnMgfe8CGukDRC7kAMkozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJywnKeoAmukAmXJldHVybiB77QJ4LOsA8SzpALZ9xj7kASZ9Owo8L+YEGz4K"},{default:t(()=>[W]),_:1}),B])}}});export{Y as default,X as excerpt,S as frontmatter};
