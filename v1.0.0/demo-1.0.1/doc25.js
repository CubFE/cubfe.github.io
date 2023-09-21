import{d as p,r,b as h,k as n,w as t,aq as c,e as a,l as s,o}from"./style_icon.js";const j={class:"markdown-body"},d=c(`<h1>DatePicker 日期选择器</h1><h3>介绍</h3><p>时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DatePicker</span>);
</code></pre><h3>选择年月日</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},":min-date"),s("="),a("span",{class:"hljs-string"},'"minDate"'),s(`
    `),a("span",{class:"hljs-attr"},":max-date"),s("="),a("span",{class:"hljs-string"},'"maxDate"'),s(`
    `),a("span",{class:"hljs-attr"},":is-show-chinese"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},":three-dimensional"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-date-picker"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" minDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2020"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" maxDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2025"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"''"),s(`));
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
      `),a("span",{class:"hljs-attr"},":threeDimensional"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: any"),s(") =>")]),s(" val."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"'-'"),s(`));
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        date = selectedValue.`),a("span",{class:"hljs-title function_"},"slice"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"3"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"'-'"),s(`);
        time = selectedValue.`),a("span",{class:"hljs-title function_"},"slice"),s("("),a("span",{class:"hljs-number"},"3"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`);
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(date + "),a("span",{class:"hljs-string"},"' '"),s(` + time);
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedValue."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`));
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
`)])],-1),x=a("h3",null,"选择时分 v4.0.5",-1),D=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedValue."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`));
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
`)])],-1),W=a("h3",null,"格式化选项",-1),Z=a("p",null,[s("通过传入 "),a("code",{class:""},"formatter"),s(" 函数，可以对选项文字进行格式化处理。 "),a("code",{class:""},"isShowChinese"),s(" 属性同样是也为选项后面添加文案，但 "),a("code",{class:""},"formatter"),s(" 函数的优先级高于 "),a("code",{class:""},"isShowChinese"),s(" 属性。")],-1),X=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions["),a("span",{class:"hljs-number"},"0"),s("]."),a("span",{class:"hljs-property"},"text"),s(" + "),a("span",{class:"hljs-string"},"'年'"),s(" + date + "),a("span",{class:"hljs-string"},"' '"),s(` + time);
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
`)])],-1),_=a("h3",null,"分钟数递增步长设置",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" currentDate = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("("),a("span",{class:"hljs-number"},"2022"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue, selectedOptions }"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedValue."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"':'"),s(`));
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
`)])],-1),C=a("h3",null,"过滤选项",-1),B=a("p",null,[s("通过 "),a("code",{class:""},"filter"),s(" 函数可以对选项数组进行过滤，实现自定义时间间隔。")],-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"option"),s(") =>")]),s(" option."),a("span",{class:"hljs-property"},"text"),s(")."),a("span",{class:"hljs-title function_"},"join"),s("("),a("span",{class:"hljs-string"},"''"),s(`));
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
`)])],-1),M=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>初始值</td><td>date</td><td><code class="">null</code></td></tr><tr><td>type</td><td>时间类型，可选值 <code class="">date</code>(年月日) <code class="">time</code>(时分秒) <code class="">year-month</code>(年月) <code class="">month-day</code>(月日) <code class="">datehour</code>(年月日时) <code class="">hour-minute</code>(时分<code class="">v4.0.5</code>)</td><td>string</td><td><code class="">date</code></td></tr><tr><td>minute-step</td><td>分钟步进值</td><td>number</td><td><code class="">1</code></td></tr><tr><td>is-show-chinese</td><td>每列是否展示中文</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>min-date</td><td>开始日期</td><td>date</td><td><code class="">十年前</code></td></tr><tr><td>max-date</td><td>结束日期</td><td>date</td><td><code class="">十年后</code></td></tr><tr><td>formatter</td><td>选项格式化函数</td><td>(type: string, option: PickerOption) =&gt; PickerOption</td><td></td></tr><tr><td>filter</td><td>选项过滤函数</td><td>(type: string, option: PickerOption) =&gt; PickerOption[]</td><td></td></tr><tr><td>title</td><td>设置标题</td><td>string</td><td><code class="">null</code></td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>string</td><td><code class="">确定</code></td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>string</td><td><code class="">取消</code></td></tr><tr><td>three-dimensional</td><td>是否开启 3D 效果</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>swipe-duration</td><td>惯性滚动时长</td><td>number | string</td><td><code class="">1000</code></td></tr><tr><td>visible-option-num</td><td>可见的选项个数</td><td>number | string</td><td><code class="">7</code></td></tr><tr><td>option-height</td><td>选项高度</td><td>number | string</td><td><code class="">36</code></td></tr><tr><td>show-toolbar</td><td>是否显示顶部导航</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确定按钮时触发</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>change</td><td>选项改变时触发</td><td><code class="">{ columnIndex, selectedValue, selectedOptions }</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义滑动数据底部区域</td></tr><tr><td>top</td><td>自定义滑动数据顶部区域</td></tr></tbody></table><h3>PickerOption 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>选项的文字内容</td><td>string | number</td><td>-</td></tr><tr><td>value</td><td>选项对应的值，且唯一</td><td>string | number</td><td>-</td></tr><tr><td>children</td><td>用于级联选项</td><td>Array</td><td>-</td></tr><tr><td>className</td><td>添加额外的类名</td><td>string</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-picker-cancel-color</td><td><em>#808080</em></td></tr><tr><td>--cub-picker-ok-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-picker-bar-cancel-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-ok-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-button-padding</td><td><em>0 15px</em></td></tr><tr><td>--cub-picker-bar-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-picker-bar-title-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-bar-title-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-picker-item-height</td><td><em>36px</em></td></tr><tr><td>--cub-picker-item-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-item-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-item-active-line-border</td><td><em>1px solid #d8d8d8</em></td></tr></tbody></table>',13),H={},N="",V=p({__name:"doc",setup(R,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(L,Y)=>{const l=r("demo-block");return o(),h("div",j,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUaOm1pbsUvPSJtaW7MGGF4yBhheMsYaXMtc2hvdy1jaGluZXNlPSJ0cnXIHHRocmVlLWRpbWVuc2lvbmFsPSJmYWxzxx9AY29uZmlybT0ixwnEFz48L+8AsT4KPC/qANEKPHNjcmlwdCBsYW5nPSJ0cyLkAOVpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wd5ACoVG9hc3TJI0BjdWJ1acRydWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANxzZXR1cChwcm9wcynHEyAgY29uc3Qg5wFXID0gbmV3IMQLKDIwMjAsIDAsIDEpxFLLLOYBa88sNSwgMdMt6wHMzzEyLCA0xzTFBNA55gF/ID0gKHsgc2VsZWN0ZWRWYWx1ZSzJD09wdGlvbnMgfSkgPT7pANIg6gFULnRleHQozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJycp6QCOfcgJcmV0dXJuy2brANssyRXnAUnLEeYBLsoR5wDZzl99CsULPC/mAkk+Cg=="},{default:t(()=>[i]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5pel5pyfIiA6ZGVzYz0icG9wdXBEZXNjIiBAY2xpY2s9InNob3cgPSB0cnVlIj48L8hHyVTFMyBwb3NpdGlvbj0iYm90dG9tIiB2LW1vZGVsOnZpc2lixHHESSLEN8c5ZGF0ZS1waWNrZXLFFSDIMz0iY3VycmVudERhdGUixxw6bWluxTM9Im1pbs4aYXjIGmF4zBpAY29uZmlybecA2EPGDsk4aXMt5ACULWNoaW5lc2U9IuUA5MgedGhyZWVEaW1lbnNpb25hbD0iZmFsc8cg5gDH5wDJYnV0dG9uIGJsb2NrIHR5cGU9InByaW1hcnnqAUZhbHdheXNGdW4iPuawuOi/nOacieaViOYBUMZBxlTGEusBHMQXxhXlAMU+Cjwv6gHYCjxzY3JpcHQgbGFuZz0idHPlAWFpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvFdnNldHVwKHByb3BzKccTICBjb25zdCDnAgByZWYo5QEBKcRFyh/pAjLHJM8f5wGsID0gbmV3IMQLKDIwMjAsIDAsIDHQLOYBvs8sNSwgMdMt6wIjzzEyLCA0xzTFBM857AILID0gKHsgc2VsZWN0ZWRWYWx1ZSzJD09w5ALRcyB9KSA9PukBFSDqAPIudsQxID3QMi5tYXAoKHZhbDogYW55xT52YWwudGV4dCkuam9pbignJ+kAlSDlAWHJS+UBY8gcfe4AuukCROQAt/8AlT0gJ+wCaOUB+t9vym9yZXR1cm7LXsQ0LNJsyhPrAY7KFecB/MsR5gHhyhHpANLPXecBn+4AmH0KxQs8L+YC8z4K"},{default:t(()=>[u]),_:1}),g,y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadHlwZT0ibW9udGgtZGF5xxVpdGxlPSLml6XmnJ/pgInmi6nGGTptaW7FXT0ibmV3IMRHKDIwMjIsIDAsIDEpyCVheNYlN8olQGNvbmZpcm09IscJxBc+PC/vAL4+Cjwv6gDeCjxzY3JpcHQgbGFuZz0idHMi5ADyaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxHJ1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+UA3HNldHVwKHByb3BzKccTICBjb25zdCDrAYAgPSDvAR80LCAx5AFIxQQpxF/LOeYBJiA9ICh7IHNlbGVjdGVkVmFsdWUsyQ9PcHRpb25zIH0pID0+yXkg6gD7LnRleHQozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJy0nKekAj33ICXJldHVybstn6wDcLMoV5gC4zj19CsULPC/mAc8+Cg=="},{default:t(()=>[b]),_:1}),w,k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXpeacn+aXtumXtOmAieaLqccfeXBlPSLET3RpbcczOm1pbsViPSJtaW7KSzptYXjIGGF4yhhAY29uZmlybT0ixwnEFz48L+8AqT4KPC/qAMk8c2NyaXB0IGxhbmc9InRzIuQA3GltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gJ0BjdWJ1acRUdWknO8oszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bGXFM2V4xTNkZWZhdWx0IHvlAL5zZXR1cCgpxw4gIGNvbnN0IOsBSCA9IG5ldyDECygyMDIyLCA0LCAxMMgEKcRayznmAQMgPSAoeyBzZWxlY3RlZFZhbHVlLMkPT3B0aW9ucyB9KSA9Psl5ICDkAS0gPc42LnNsaWNlKDAsIDMpLmpvaW4oJy0nyXTkAeBt2DTJMTrMMekBWy50ZXh0KMV0KyAnICcgK8VNySt9yAlyZXR1cm7rAKjrAR0syRXnAis67QEtMCwg5AElKcsn5gI6zic15wFNyyjnAUjuAIx9CsULPC/mAj0+Cg=="},{default:t(()=>[f]),_:1}),I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXtumXtOmAieaLqccZeXBlPSJ0aW3HKTptaW7FWD0ibWluykE6bWF4yBhheMoYQGNvbmZpcm09IscJxBc+PC/vAJ8+Cjwv6gC/PHNjcmlwdCBsYW5nPSJ0cyLkANJpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEcXVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB75QDbc2V0dXAocHJvcHMpxxMgIGNvbnN0IOsBYCA9IG5ldyDECygyMDIyLCA0LCAxMMgEKcRfyznmASUgPSAoeyBzZWxlY3RlZFZhbHVlLMkPT3B0aW9ucyB9KSA9Psl5IOoA+y50ZXh0KM0+LmpvaW4oJzonKclxfcgJcmV0dXJuy0nrAL4syRXnAe467QDOMCwg5ADGKcsn5gH9zic15wDuyyjnAOnuAIx9CsULPC/mAgA+Cg=="},{default:t(()=>[A]),_:1}),x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXtumXtOmAieaLqccZeXBlPSJob3VyLW1pbnXIMDptaW7FXz0ibWluykg6bWF4yBhheMoYQGNvbmZpcm09IscJxBc+PC/vAKY+Cjwv6gDGPHNjcmlwdCBsYW5nPSJ0cyLkANlpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEcXVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB75QDbc2V0dXAocHJvcHMpxxMgIGNvbnN0IOsBZyA9IG5ldyDECygyMDIyLCA0LCAxMMgEKcRfyznmASUgPSAoeyBzZWxlY3RlZFZhbHVlLMkPT3B0aW9ucyB9KSA9Psl5IOoA+y50ZXh0KM0+LmpvaW4oJzonKclxfcgJcmV0dXJuy0nrAL4syRXnAe467QDOMCwg5ADGKcsn5gH9zic15wDuyyjnAOnuAIx9CsULPC/mAgA+Cg=="},{default:t(()=>[D]),_:1}),W,Z,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXtumXtOmAieaLqccZeXBlPSLESXRpbcctOm1pbsVcPSJuZXcgxEYoMjAyMiwgMCwgMSnIJWF41iUxzCZmb3JtYXR0ZXI9IskLxhtAY29uZmlybT0ixwnEFz48L+8A2T4KPC/qAPk8c2NyaXB0IGxhbmc9InRzIuQBDGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRxdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANtzZXR1cChwcm9wcynHEyAgY29uc3Qg6wGaID0g7wE6NOcBPcUEKcRfyznmASUgPSAoeyBzZWxlY3RlZFZhbHVlLMkPT3B0aW9ucyB9KSA9Psl5yELkAVUgPdAtySUgIC5zbGljZSgxLCAzKcwXbWFwKChvcMVVb3AudGV4dM0gam9pbignJ+kAschx5AJS33HFcd1uduQA49NvOsxw6QHc5QCdKM9yWzBdxRggKyAn5bm0JyAr5gEMKyAnIMQN5ACoyU197gF36QK15AF55AMtOiBzdHJpbmcsIG/FXu8Ba3N3aXRjaMYr6gH8xVBhc2UgJ3llYXInOssXIMdI5wCiPSAn5QJYygFicmVha8wTxkltb250aN9K5pyI303HTWRhed9L5pel30vHS2hvdf8A4Sfml7bfTMdMbWludXRl307liIbfTugDnt5Iy0V9yQpyZXR1cm7HLPECI8ce6wNp6gPeLMoV5gO6yhHpAlTOUMR2fTsKPC/mBOQ+Cg=="},{default:t(()=>[X]),_:1}),_,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadHlwZT0idGltxxA6bWludXRlLXN0ZXA9IjXKFcVUPSJtaW7KPTptYXjIGGF4yhhAY29uZmlybT0ixwnEFz48L+8Amz4KPC/qALs8c2NyaXB0IGxhbmc9InRzIuQAzmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRxdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANtzZXR1cChwcm9wcynHEyAgY29uc3Qg6wFcID0gbmV3IMQLKDIwMjIsIDQsIDEwyAQpxF/LOeYBJSA9ICh7IHNlbGVjdGVkVmFsdWUsyQ9PcHRpb25zIH0pID0+yXkg6gD7LnRleHQozT4uam9pbignOicpyXF9yAlyZXR1cm7LSesAvizJFecB7jrtAM4wLCDkAMYpyyfmAf3OJzXnAO7LKOcA6e4AjH0KxQs8L+YCAD4K"},{default:t(()=>[v]),_:1}),C,B,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IuaXtumXtOmAieaLqccZeXBlPSLESWhvdXLGFDptaW7FXD0ibWluykU6bWF4yBhheMsYZmlsdGVyPSLGCMgVb3JtYXTGGMgLxhtAY29uZmlybT0ixwnEFz48L+8A0z4KPC/qAPM8c2NyaXB0IGxhbmc9InRzIuQBBmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRxdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANtzZXR1cChwcm9wcynHEyAgY29uc3Qg6wGUID0gbmV3IMQLKDIwMjIsIDQsIDEwLCDEAynEXco36QE8ID0gKOQBrjogc3RyaW5nLCBvcHRpb24pID0+yWsgIHN3aXRjaMYr6gCDxVBhc2UgJ3llYXInOssXIMdILnRleHQgKz0gJ+W5tOUA4soBYnJlYWvME8ZMbW9udGjfTeaciN9Nx01kYXnfS99LykvkAsvfTOaXtt9M6AHa3kjLRX3JCnJldHVybscsyCF9OwruAdnlAy34AdZz7wHXaWbGKCA9PecA4O4B3c1zcy7GXSgo6wIjTnVtYmVyxxIudmFsdWUpICUgNiA9PT3rAnb5AMhzyCJ97gKh5wPE5ADJeyBzZWxlY3RlZFbEXyzJD0/GQiB98AKt6AOa5QFRKM8vLm1hcO0Aw+sBfSkuam9pbignJynpALrpAJjnALfKZ+sDeyzJFecE2zrtA4vmA4QxKcsn5gTqzic15gOvzCjnAQfKEekDucsT5QGW7gCv5AFufTsKPC/mBOA+Cg=="},{default:t(()=>[G]),_:1}),M])}}});export{V as default,N as excerpt,H as frontmatter};
