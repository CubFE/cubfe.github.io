import{d as p,r,b as h,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const o={class:"markdown-body"},d=c(`<h1>DatePicker 日期选择器</h1><h3>介绍</h3><p>时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DatePicker</span>);
</code></pre><h3>选择年月日</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"minDate"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"maxDate"'),s(`
    `),a("span",{class:"hljs-attr"},":is-show-chinese"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" minDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2020"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" maxDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2025"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"''"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        currentDate,
        minDate,
        maxDate,
        confirm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"搭配 Popup 使用",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择日期"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"popupDesc"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
      `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"minDate"'),s(`
      `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"maxDate"'),s(`
      @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"popupConfirm"'),s(`
      `),a("span",{class:"hljs-attr"},":is-show-chinese"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alwaysFun"'),s(">")]),s("永远有效"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popup"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" show = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" popupDesc = "),a("span",{class:"hljs-title function_"},"ref"),s(`();
      `),a("span",{class:"hljs-keyword"},"const"),s(" minDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2020"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" maxDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2025"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"popupConfirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        popupDesc.`),a("span",{class:"hljs-property"},"value"),s(" = selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
        show.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"alwaysFun"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        popupDesc.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},"'永远有效'"),s(`;
        show.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        show,
        popupDesc,
        currentDate,
        minDate,
        maxDate,
        alwaysFun,
        popupConfirm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"选择月日",-1),y=a("p",null,[s("DatetimePicker 通过 "),a("code",{class:""},"type"),s(" 属性来定义需要选择的时间类型。将 "),a("code",{class:""},"type"),s(" 设置为 year-month 即可选择年份和月份，设置为 month-day 即可选择月份和日期。")],-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"month-day"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"日期选择"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"new Date(2022, 0, 1)"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"new Date(2022, 7, 1)"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"'-'"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        currentDate,
        confirm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"选择年月日时分",-1),k=a("p",null,[s("将 "),a("code",{class:""},"type"),s(" 设置为 datetime 即可选择完整的时间。")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"日期时间选择"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"datetime"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"minDate"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"maxDate"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        date = selectedValue.`),a("span",{class:"hljs-title function_"},"slice"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"3"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"'-'"),s(`);
        time = selectedValue.`),a("span",{class:"hljs-title function_"},"slice"),s("("),a("span",{class:"hljs-number"},"3"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`);
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": date + "),a("span",{class:"hljs-string"},"' '"),s(` + time,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        currentDate,
        `),a("span",{class:"hljs-attr"},"minDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2020"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        `),a("span",{class:"hljs-attr"},"maxDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2025"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        confirm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"选择时分秒",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"时间选择"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"time"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"minDate"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"maxDate"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedValue."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        currentDate,
        `),a("span",{class:"hljs-attr"},"minDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2020"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        `),a("span",{class:"hljs-attr"},"maxDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2025"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        confirm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),D=a("h3",null,"选择时分 v4.0.5",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"时间选择"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"hour-minute"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"minDate"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"maxDate"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedValue."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        currentDate,
        `),a("span",{class:"hljs-attr"},"minDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2020"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        `),a("span",{class:"hljs-attr"},"maxDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2025"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        confirm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"格式化选项",-1),C=a("p",null,[s("通过传入 "),a("code",{class:""},"formatter"),s(" 函数，可以对选项文字进行格式化处理。 "),a("code",{class:""},"isShowChinese"),s(" 属性同样是也为选项后面添加文案，但 "),a("code",{class:""},"formatter"),s(" 函数的优先级高于 "),a("code",{class:""},"isShowChinese"),s(" 属性。")],-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"时间选择"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"datetime"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"new Date(2022, 0, 1)"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"new Date(2022, 10, 1)"'),s(`
    `),a("span",{class:"hljs-attr"},":formatter"),s("="),a("span",{class:"hljs-string"},'"formatter"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(` date = selectedOptions
          .`),a("span",{class:"hljs-title function_"},"slice"),s("("),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"3"),s(`)
          .`),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"op"),s(") =>")]),s(" op."),a("span",{class:"hljs-property"},"text"),s(`)
          .`),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
        `),a("span",{class:"hljs-keyword"},"const"),s(` time = selectedOptions
          .`),a("span",{class:"hljs-title function_"},"slice"),s("("),a("span",{class:"hljs-number"},"3"),s(`)
          .`),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"op"),s(") =>")]),s(" op."),a("span",{class:"hljs-property"},"value"),s(`)
          .`),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`);
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions["),a("span",{class:"hljs-number"},"0"),s("]."),a("span",{class:"hljs-property"},"text"),s(" + "),a("span",{class:"hljs-string"},"'年'"),s(" + date + "),a("span",{class:"hljs-string"},"' '"),s(` + time,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"formatter"),s(" = ("),a("span",{class:"hljs-params"},"type: string, option"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"switch"),s(` (type) {
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'year'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"''"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'month'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'月'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'day'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'日'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'hour'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'时'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'minute'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'分'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-attr"},"default"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"''"),s(`;
        }
        `),a("span",{class:"hljs-keyword"},"return"),s(` option;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        currentDate,
        confirm,
        formatter
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),X=a("h3",null,"分钟数递增步长设置",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"time"'),s(`
    `),a("span",{class:"hljs-attr"},":minute-step"),s("="),a("span",{class:"hljs-string"},'"5"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"minDate"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"maxDate"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedValue."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        currentDate,
        `),a("span",{class:"hljs-attr"},"minDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2020"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        `),a("span",{class:"hljs-attr"},"maxDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2025"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        confirm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),G=a("h3",null,"过滤选项",-1),B=a("p",null,[s("通过 "),a("code",{class:""},"filter"),s(" 函数可以对选项数组进行过滤，实现自定义时间间隔。")],-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"时间选择"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"datehour"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"minDate"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"maxDate"'),s(`
    `),a("span",{class:"hljs-attr"},":filter"),s("="),a("span",{class:"hljs-string"},'"filter"'),s(`
    `),a("span",{class:"hljs-attr"},":formatter"),s("="),a("span",{class:"hljs-string"},'"formatter"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"formatter"),s(" = ("),a("span",{class:"hljs-params"},"type: string, option"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"switch"),s(` (type) {
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'year'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'年'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'month'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'月'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'day'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'月'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'hour'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'时'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-attr"},"default"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"''"),s(`;
        }
        `),a("span",{class:"hljs-keyword"},"return"),s(` option;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"filter"),s(" = ("),a("span",{class:"hljs-params"},"type: string, options"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (type == "),a("span",{class:"hljs-string"},"'hour'"),s(`) {
          `),a("span",{class:"hljs-keyword"},"return"),s(" options."),a("span",{class:"hljs-title function_"},"filter"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"option"),s(") =>")]),s(),a("span",{class:"hljs-title class_"},"Number"),s("(option."),a("span",{class:"hljs-property"},"value"),s(") % "),a("span",{class:"hljs-number"},"6"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`);
        }
        `),a("span",{class:"hljs-keyword"},"return"),s(` options;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"showToast"),s(`({
          `),a("span",{class:"hljs-attr"},"title"),s(": selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"option"),s(") =>")]),s(" option."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"''"),s(`),
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'none'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        currentDate,
        `),a("span",{class:"hljs-attr"},"minDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2020"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        `),a("span",{class:"hljs-attr"},"maxDate"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2025"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"1"),s(`),
        confirm,
        formatter,
        filter
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>初始值</td><td>date</td><td><code class="">null</code></td></tr><tr><td>type</td><td>时间类型，可选值 <code class="">date</code>(年月日) <code class="">time</code>(时分秒) <code class="">year-month</code>(年月) <code class="">month-day</code>(月日) <code class="">datehour</code>(年月日时) <code class="">hour-minute</code>(时分<code class="">v4.0.5</code>)</td><td>string</td><td><code class="">date</code></td></tr><tr><td>minute-step</td><td>分钟步进值</td><td>number</td><td><code class="">1</code></td></tr><tr><td>is-show-chinese</td><td>每列是否展示中文</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>min-date</td><td>开始日期</td><td>date</td><td><code class="">十年前</code></td></tr><tr><td>max-date</td><td>结束日期</td><td>date</td><td><code class="">十年后</code></td></tr><tr><td>formatter</td><td>选项格式化函数</td><td>(type: string, option: PickerOption) =&gt; PickerOption</td><td></td></tr><tr><td>filter</td><td>选项过滤函数</td><td>(type: string, option: PickerOption) =&gt; PickerOption[]</td><td></td></tr><tr><td>title</td><td>设置标题</td><td>string</td><td><code class="">null</code></td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>string</td><td><code class="">确定</code></td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>string</td><td><code class="">取消</code></td></tr><tr><td>swipe-duration</td><td>惯性滚动时长</td><td>number | string</td><td><code class="">1000</code></td></tr><tr><td>visible-option-num</td><td>可见的选项个数</td><td>number | string</td><td><code class="">7</code></td></tr><tr><td>option-height</td><td>选项高度</td><td>number | string</td><td><code class="">36</code></td></tr><tr><td>show-toolbar</td><td>是否显示顶部导航</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确定按钮时触发</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>change</td><td>选项改变时触发</td><td><code class="">{ columnIndex, selectedValue, selectedOptions }</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义滑动数据底部区域</td></tr><tr><td>top</td><td>自定义滑动数据顶部区域</td></tr></tbody></table><h3>PickerOption 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>选项的文字内容</td><td>string | number</td><td>-</td></tr><tr><td>value</td><td>选项对应的值，且唯一</td><td>string | number</td><td>-</td></tr><tr><td>children</td><td>用于级联选项</td><td>Array</td><td>-</td></tr><tr><td>className</td><td>添加额外的类名</td><td>string</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-picker-cancel-color</td><td><em>#808080</em></td></tr><tr><td>--cub-picker-ok-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-picker-bar-cancel-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-ok-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-button-padding</td><td><em>0 15px</em></td></tr><tr><td>--cub-picker-bar-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-picker-bar-title-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-bar-title-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-picker-item-height</td><td><em>36px</em></td></tr><tr><td>--cub-picker-item-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-item-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-item-active-line-border</td><td><em>1px solid #d8d8d8</em></td></tr></tbody></table>',13),z={},V="",M=p({__name:"doc.taro",setup(S,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(Y,J)=>{const l=r("demo-block");return j(),h("div",o,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUaOm1pbsUvPSJtaW7MGGF4yBhheMsYaXMtc2hvdy1jaGluZXNlPSJ0cnXHHEBjb25maXJtPSLHCcQXPjwv7wCSPgo8L+oAsgo8c2NyaXB0IGxhbmc9InRzIuQAxmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yh1UYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB75QCgc2V0dXAocHJvcHMpxxMgIGNvbnN0IOcA/CA9IG5ldyDECygyMDIwLCAwLCAxKcRSyyzmARDPLDUsIDHTLesBcc8xMiwgNMc0xQTQOeYBQyA9ICh7IHNlbGVjdGVkVmFsdWUsyQ9PcHRpb25zIH0pID0+6QDSIOUBGi7kAaZUb2FzdCjKGSAgdGl0bGU60EIubWFwKCh2YWw6IGFuecVOdmFsLnRleHQpLmpvaW4oJycpLMtHaWNvbjogJ25vbmUnyRd96QDDfcgJcmV0dXJu6wCb6wEQylDnAX7LEeYBY8oR5wEOzl99CsULPC/mAkI+Cg=="},{default:t(()=>[i]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5pel5pyfIiA6ZGVzYz0icG9wdXBEZXNjIiBAY2xpY2s9InNob3cgPSB0cnVlIj48L8hHyVTFMyBwb3NpdGlvbj0iYm90dG9tIiB2LW1vZGVsOnZpc2lixHHESSLEN8c5ZGF0ZS1waWNrZXLFFSDIMz0iY3VycmVudERhdGUixxw6bWluxTM9Im1pbs4aYXjIGmF4zBpAY29uZmlybecA2EPGDsk4aXMt5ACULWNoaW5lc2U9IuUA5MUe5gCn5wCpYnV0dG9uIGJsb2NrIHR5cGU9InByaW1hcnnqASZhbHdheXNGdW4iPuawuOi/nOacieaViOYBMMZBxlTGEusA/MQXxhXlAKU+Cjwv6gG4CjxzY3JpcHQgbGFuZz0idHPlAUFpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvFdnNldHVwKHByb3BzKccTICBjb25zdCDnAeByZWYoZmFsc2UpxEXKH+kCEsckzx/nAYwgPSBuZXcgxAsoMjAyMCwgMCwgMdAs5gGezyw1LCAx0y3rAgPPMTIsIDTHNMUEzznsAesgPSAoeyBzZWxlY3RlZFZhbHVlLMkPT3DkArFzIH0pID0+6QEVIOoA8i52xDEgPdAyLm1hcCgodmFsOiBhbnnFPnZhbC50ZXh0KS5qb2luKCcn6QCVIOUBYclL5QFjyBx97gC66QJE5AC3/wCVPSAn7AJo5QH632/Kb3JldHVybstexDQs0mzKE+sBjsoV5wH8yxHmAeHKEekA0s9d5wGf7gCYfQrFCzwv5gLzPgo="},{default:t(()=>[u]),_:1}),g,y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadHlwZT0ibW9udGgtZGF5xxVpdGxlPSLml6XmnJ/pgInmi6nGGTptaW7FXT0ibmV3IMRHKDIwMjIsIDAsIDEpyCVheNYlN8olQGNvbmZpcm09IscJxBc+PC/vAL4+Cjwv6gDeCjxzY3JpcHQgbGFuZz0idHMi5ADyaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvKHVRhcm/HGkB0YXJvanMvxAfFI2V4xSNkZWZhdWx0IHvlAKBzZXR1cChwcm9wcynHEyAgY29uc3Qg6wFEID0g7wDjNCwgMeQBDMUEKcRfyznmAOogPSAoeyBzZWxlY3RlZFZhbHVlLMkPT3B0aW9ucyB9KSA9Psl5IOUAwS5zaG93VG9hc3QoyhnnAa460EIubWFwKCh2YWw6IGFuecVOdmFsLnRleHQpLmpvaW4oJy0nKSzLSGljb246ICdub25lJ8kXfekAxH3ICXJldHVybusAnOsBEcpQ5wDtzj19CsULPC/mAcg+Cg=="},{default:t(()=>[b]),_:1}),w,k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXpeacn+aXtumXtOmAieaLqccfeXBlPSLET3RpbcczOm1pbsViPSJtaW7KSzptYXjIGGF4yhhAY29uZmlybT0ixwnEFz48L+8AqT4KPC/qAMk8c2NyaXB0IGxhbmc9InRzIuQA3GltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yh1UYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB75QCfc2V0dXAoKccOICBjb25zdCDrASkgPSBuZXcgxAsoMjAyMiwgNCwgMTDIBCnEWss55gDkID0gKHsgc2VsZWN0ZWRWYWx1ZSzJD09wdGlvbnMgfSkgPT7JeSAg5AEOID3ONi5zbGljZSgwLCAzKS5qb2luKCctJ8l05AHBbdg0yTE6zDHkASEuc2hvd1RvYXN0KMp+5wINOuYAhysgJyAnICvFYCzLJGljb246ICdub25lJ8kXfclgfcgJcmV0dXJu6wDd6wFSylDnAkE67QFiMCwg5AFaKcsn5gJQzic15wGCyyjnAX3uAIx9CsULPC/mAlM+Cg=="},{default:t(()=>[f]),_:1}),I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXtumXtOmAieaLqccZeXBlPSJ0aW3HKTptaW7FWD0ibWluykE6bWF4yBhheMoYQGNvbmZpcm09IscJxBc+PC/vAJ8+Cjwv6gC/PHNjcmlwdCBsYW5nPSJ0cyLkANJpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8odVGFyb8caQHRhcm9qcy/EB8UjZXjFI2RlZmF1bHQge+UAn3NldHVwKHByb3BzKccTICBjb25zdCDrASQgPSBuZXcgxAsoMjAyMiwgNCwgMTDIBCnEX8s55gDpID0gKHsgc2VsZWN0ZWRWYWx1ZSzJD09wdGlvbnMgfSkgPT7JeSDlAMEuc2hvd1RvYXN0KMoZ5wGjOs5RLmpvaW4oJzonKSzLKmljb246ICdub25lJ8kXfekApn3ICXJldHVybst+6wDzylDnAec67QEDMCwg5AD7y3fnAfbOJzXnASPLKOcBHu4AjH0KxQs8L+YB+T4K"},{default:t(()=>[A]),_:1}),D,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXtumXtOmAieaLqccZeXBlPSJob3VyLW1pbnXIMDptaW7FXz0ibWluykg6bWF4yBhheMoYQGNvbmZpcm09IscJxBc+PC/vAKY+Cjwv6gDGPHNjcmlwdCBsYW5nPSJ0cyLkANlpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8odVGFyb8caQHRhcm9qcy/EB8UjZXjFI2RlZmF1bHQge+UAn3NldHVwKHByb3BzKccTICBjb25zdCDrASsgPSBuZXcgxAsoMjAyMiwgNCwgMTDIBCnEX8s55gDpID0gKHsgc2VsZWN0ZWRWYWx1ZSzJD09wdGlvbnMgfSkgPT7JeSDlAMEuc2hvd1RvYXN0KMoZ5wGqOs5RLmpvaW4oJzonKSzLKmljb246ICdub25lJ8kXfekApn3ICXJldHVybst+6wDzylDnAec67QEDMCwg5AD7y3fnAfbOJzXnASPLKOcBHu4AjH0KxQs8L+YB+T4K"},{default:t(()=>[x]),_:1}),_,C,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXtumXtOmAieaLqccZeXBlPSLESXRpbcctOm1pbsVcPSJuZXcgxEYoMjAyMiwgMCwgMSnIJWF41iUxzCZmb3JtYXR0ZXI9IskLxhtAY29uZmlybT0ixwnEFz48L+8A2T4KPC/qAPk8c2NyaXB0IGxhbmc9InRzIuQBDGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yh1UYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB75QCfc2V0dXAocHJvcHMpxxMgIGNvbnN0IOsBXiA9IO8A/jTnAQHFBCnEX8s55gDpID0gKHsgc2VsZWN0ZWRWYWx1ZSzJD09wdGlvbnMgfSkgPT7JechC5AEZID3QLcklICAuc2xpY2UoMSwgMynMF21hcCgob3DFVW9wLnRleHTNIGpvaW4oJyfpALHIceQCFt9xxXHdbnbkAOPTbzrMcOQBoi5zaG93VG9hc3Qo6gD65wK+OvAAhVswXeUAyCArICflubQnICvmAR8rICcgxA3kALssy0ZpY29uOiAnbm9uZSfJF33pAIJ97gGs6QKu5AGu5AMmOiBzdHJpbmcsIG/lAIDvAaBzd2l0Y2jGK+oCMcVQYXNlICd5ZWFyJzrLFyDHSOcAxD0gJ+UCjcoBYnJlYWvME8ZJbW9udGjfSuaciN9Nx01kYXnfS+aXpd9Lx0tob3X/AOEn5pe230zHTG1pbnV0Zd9O5YiG307oA9PeSMtFfckKcmV0dXJuxyzxAiPHHusDnuoEE+oCc+cD78oR6QJUzlDEdn07Cjwv5gTdPgo="},{default:t(()=>[Z]),_:1}),X,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadHlwZT0idGltxxA6bWludXRlLXN0ZXA9IjXKFcVUPSJtaW7KPTptYXjIGGF4yhhAY29uZmlybT0ixwnEFz48L+8Amz4KPC/qALs8c2NyaXB0IGxhbmc9InRzIuQAzmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yh1UYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB75QCfc2V0dXAocHJvcHMpxxMgIGNvbnN0IOsBICA9IG5ldyDECygyMDIyLCA0LCAxMMgEKcRfyznmAOkgPSAoeyBzZWxlY3RlZFZhbHVlLMkPT3B0aW9ucyB9KSA9Psl5IOUAwS5zaG93VG9hc3QoyhkgIHRpdGxlOs5RLmpvaW4oJzonKSzLKmljb246ICdub25lJ8kXfekApn3ICXJldHVybst+6wDzylDnAec67QEDMCwg5AD7y3fnAfbOJzXnASPLKOcBHu4AjH0KxQs8L+YB+T4K"},{default:t(()=>[v]),_:1}),G,B,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXtumXtOmAieaLqccZeXBlPSLESWhvdXLGFDptaW7FXD0ibWluykU6bWF4yBhheMsYZmlsdGVyPSLGCMgVb3JtYXTGGMgLxhtAY29uZmlybT0ixwnEFz48L+8A0z4KPC/qAPM8c2NyaXB0IGxhbmc9InRzIuQBBmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yh1UYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB75QCfc2V0dXAocHJvcHMpxxMgIGNvbnN0IOsBWCA9IG5ldyDECygyMDIyLCA0LCAxMCwgxAMpxF3KN+kBACA9ICjkAXI6IHN0cmluZywgb3B0aW9uKSA9PslrICBzd2l0Y2jGK+oAg8VQYXNlICd5ZWFyJzrLFyDHSC50ZXh0ICs9ICflubTlAOLKAWJyZWFrzBPGTG1vbnRo303mnIjfTcdNZGF530vfS8pL5AKP30zml7bfTOgB2t5Iy0V9yQpyZXR1cm7HLMghfTsK7gHZ5QLx+AHWc+8B12lmxiggPT3nAODuAd3Nc3Muxl0oKOsCI051bWJlcscSLnZhbHVlKSAlIDYgPT096wJ2+QDIc8gife4CoecDiOQAyXsgc2VsZWN0ZWRWxF8syQ9PxkIgfe8A1uQDYC5zaG93VG9hc3QoyhnnBHY60EIubWFw7QDW6wGQKS5qb2luKCcnKSzLSGljb246ICdub25lJ8kXfekA7+kAzecA7OoAg+sDsMpQ5wTUOu0DwOYDuTHLd+cE484nNeYD5Mwo5wE8yhHpA+7LE+UBy+4Ar+QBo307Cjwv5gTZPgo="},{default:t(()=>[H]),_:1}),W])}}});export{M as default,V as excerpt,z as frontmatter};
