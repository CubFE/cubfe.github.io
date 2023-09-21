import{d as p,r,b as h,k as n,w as t,aq as c,e as a,o,l as s}from"./style_icon.js";const j={class:"markdown-body"},d=c(`<h1>DatePicker</h1><h3>Intro</h3><p>Used to select time, support date and time dimensions, usually used with the Popup component.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DatePicker</span>);
</code></pre><h3>Choose Date</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),m=a("h3",null,"With popup",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alwaysFun"'),s(">")]),s("Always"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
        popupDesc.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},"'Always'"),s(`;
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
`)])],-1),g=a("h3",null,"Choose Month-Day",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"month-day"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Time"'),s(`
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
`)])],-1),b=a("h3",null,"Choose DateTime",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Time"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"datetime"'),s(`
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
`)])],-1),k=a("h3",null,"Choose Time",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Time"'),s(`
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
`)])],-1),I=a("h3",null,"Choose Hour-Minute v4.0.5",-1),D=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Hour-Minute"'),s(`
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
`)])],-1),x=a("h3",null,"Option Formatter",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Time"'),s(`
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("(selectedOptions["),a("span",{class:"hljs-number"},"0"),s("]."),a("span",{class:"hljs-property"},"text"),s(" + "),a("span",{class:"hljs-string"},"'Year'"),s(" + date + "),a("span",{class:"hljs-string"},"' '"),s(` + time);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"formatter"),s(" = ("),a("span",{class:"hljs-params"},"type: string, option"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"switch"),s(` (type) {
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'year'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"''"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'month'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'Month'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'day'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'Day'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'hour'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'Hour'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'minute'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'Minute'"),s(`;
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
`)])],-1),Z=a("h3",null,"Option Steps",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),W=a("h3",null,"Option Filter",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentDate"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Time"'),s(`
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
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'Year'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'month'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'Month'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'day'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'Day'"),s(`;
            `),a("span",{class:"hljs-keyword"},"break"),s(`;
          `),a("span",{class:"hljs-keyword"},"case"),s(),a("span",{class:"hljs-string"},"'hour'"),s(`:
            option.`),a("span",{class:"hljs-property"},"text"),s(" += "),a("span",{class:"hljs-string"},"'Hour'"),s(`;
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
`)])],-1),_=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Default Date</td><td>date</td><td><code class="">null</code></td></tr><tr><td>type</td><td>Can be set to <code class="">date</code> <code class="">time</code> <code class="">year-month</code> <code class="">month-day</code> <code class="">datehour</code> <code class="">hour-minute</code>(<code class="">v4.0.5</code>)</td><td>string</td><td><code class="">date</code></td></tr><tr><td>minute-step</td><td>Option minute step</td><td>number</td><td><code class="">1</code></td></tr><tr><td>is-show-chinese</td><td>Show Chinese</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>min-date</td><td>Start date</td><td>date</td><td><code class="">Ten years ago on January 1</code></td></tr><tr><td>max-date</td><td>End date</td><td>date</td><td><code class="">Ten years later on December 31</code></td></tr><tr><td>formatter</td><td>Option text formatter</td><td>(type: string, option: PickerOption) =&gt; PickerOption</td><td></td></tr><tr><td>filter</td><td>Option filter</td><td>(type: string, option: PickerOption) =&gt; PickerOption[]</td><td></td></tr><tr><td>title</td><td>Title</td><td>string</td><td><code class="">null</code></td></tr><tr><td>ok-text</td><td>Text of confirm button</td><td>string</td><td><code class="">confirm</code></td></tr><tr><td>cancel-text</td><td>Text of cancel button</td><td>string</td><td><code class="">cancel</code></td></tr><tr><td>three-dimensional</td><td>Turn on 3D effects</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>swipe-duration</td><td>Duration of the momentum animation</td><td>number | string</td><td><code class="">1000</code></td></tr><tr><td>visible-option-num</td><td>Count of visible columns</td><td>number | string</td><td><code class="">7</code></td></tr><tr><td>option-height</td><td>Option height</td><td>number | string</td><td><code class="">36</code></td></tr><tr><td>show-toolbar</td><td>Whether to show toolbar</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>confirm</td><td>Emitted when click confirm button.</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>cancel</td><td>Emitted when click cancel button.</td><td><code class="">{ selectedValue, selectedOptions }</code></td></tr><tr><td>change</td><td>Emitted when current option changed.</td><td><code class="">{ columnIndex, selectedValue, selectedOptions }</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom content bottom columns</td></tr><tr><td>top</td><td>Custom content top columns</td></tr></tbody></table><h3>Data Structure of PickerOption</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Text of column</td><td>string | number</td><td>-</td></tr><tr><td>value</td><td>Value of column</td><td>string | number</td><td>-</td></tr><tr><td>children</td><td>Cascader Option</td><td>Array</td><td>-</td></tr><tr><td>className</td><td>Extra CalssName</td><td>string</td><td>-</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-picker-cancel-color</td><td><em>#808080</em></td></tr><tr><td>--cub-picker-ok-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-picker-bar-cancel-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-ok-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-bar-button-padding</td><td><em>0 15px</em></td></tr><tr><td>--cub-picker-bar-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-picker-bar-title-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-bar-title-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-picker-item-height</td><td><em>36px</em></td></tr><tr><td>--cub-picker-item-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-picker-item-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-picker-item-active-line-border</td><td><em>1px solid #d8d8d8</em></td></tr></tbody></table>',13),B={},V="",F=p({__name:"doc.en-US",setup(v,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(X,G)=>{const l=r("demo-block");return o(),h("div",j,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUaOm1pbsUvPSJtaW7MGGF4yBhheMsYaXMtc2hvdy1jaGluZXNlPSJ0cnXIHHRocmVlLWRpbWVuc2lvbmFsPSJmYWxzxx9AY29uZmlybT0ixwnEFz48L+8AsT4KPC/qANEKPHNjcmlwdCBsYW5nPSJ0cyLkAOVpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wd5ACoVG9hc3TJI0BjdWJ1acRydWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANxzZXR1cChwcm9wcynHEyAgY29uc3Qg5wFXID0gbmV3IMQLKDIwMjAsIDAsIDEpxFLLLOYBa88sNSwgMdMt6wHMzzEyLCA0xzTFBNA55gF/ID0gKHsgc2VsZWN0ZWRWYWx1ZSzJD09wdGlvbnMgfSkgPT7pANIg6gFULnRleHQozy8ubWFwKCh2YWw6IGFuecU7dmFsxSspLmpvaW4oJycp6QCOfcgJcmV0dXJuy2brANssyRXnAUnLEeYBLsoR5wDZzl99CsULPC/mAkk+Cg=="},{default:t(()=>[i]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5pel5pyfIiA6ZGVzYz0icG9wdXBEZXNjIiBAY2xpY2s9InNob3cgPSB0cnVlIj48L8hHyVTFMyBwb3NpdGlvbj0iYm90dG9tIiB2LW1vZGVsOnZpc2lixHHESSLEN8c5ZGF0ZS1waWNrZXLFFSDIMz0iY3VycmVudERhdGUixxw6bWluxTM9Im1pbs4aYXjIGmF4zBpAY29uZmlybecA2EPGDsk4aXMt5ACULWNoaW5lc2U9IuUA5MgedGhyZWVEaW1lbnNpb25hbD0iZmFsc8cg5gDH5wDJYnV0dG9uIGJsb2NrIHR5cGU9InByaW1hcnnqAUZhbHdheXNGdW4iPkHFC+YBSsY7xk7GEusBFsQXxhXlAL8+Cjwv6gHSCjxzY3JpcHQgbGFuZz0idHPlAVtpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvFdnNldHVwKHByb3BzKccTICBjb25zdCDnAfpyZWYo5QD7KcRFyh/pAizHJM8f5wGmID0gbmV3IMQLKDIwMjAsIDAsIDHQLOYBuM8sNSwgMdMt6wIdzzEyLCA0xzTFBM857AIFID0gKHsgc2VsZWN0ZWRWYWx1ZSzJD09w5ALLcyB9KSA9PukBFSDqAPIudsQxID3QMi5tYXAoKHZhbDogYW55xT52YWwudGV4dCkuam9pbignJ+kAlSDlAWHJS+UBY8gcfe4AuukCPuQAt/8AlT0gJ+YCYuUB9N9pymlyZXR1cm7LWMQ0LNJmyhPrAYjKFecB9ssR5gHbyhHpAMzPXecBme4AmH0KxQs8L+YC7T4K"},{default:t(()=>[u]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadHlwZT0ibW9udGgtZGF5xxVpdGxlPSJDaG9vc2UgVGltxy06bWluxVw9Im5ldyDERigyMDIyLCAwLCAxKcglYXjWJTfKJUBjb25maXJtPSLHCcQXPjwv7wC9Pgo8L+oA3Qo8c2NyaXB0IGxhbmc9InRzIuQA8WltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRydWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANxzZXR1cChwcm9wcynHEyAgY29uc3Qg6wF/ID0g7wEfNCwgMeQBSMUEKcRfyznmASYgPSAoeyBzZWxlY3RlZFZhbHVlLMkPT3B0aW9ucyB9KSA9Psl5IOoA+y50ZXh0KM8vLm1hcCgodmFsOiBhbnnFO3ZhbMUrKS5qb2luKCctJynpAI99yAlyZXR1cm7LZ+sA3CzKFeYAuM49fQrFCzwv5gHPPgo="},{default:t(()=>[y]),_:1}),b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IkNob29zZSBUaW3IGHlwZT0ixEh0yRQ6bWluxVs9Im1pbspEOm1heMgYYXjKGEBjb25maXJtPSLHCcQXPjwv7wCiPgo8L+oAwjxzY3JpcHQgbGFuZz0idHMi5ADVaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxHF1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+UA23NldHVwKCnHDiAgY29uc3Qg6wFeID0gbmV3IMQLKDIwMjIsIDQsIDEwyAQpxFrLOeYBICA9ICh7IHNlbGVjdGVkVmFsdWUsyQ9PcHRpb25zIH0pID0+yXkgIOQBSiA9zjYuc2xpY2UoMCwgMykuam9pbignLSfJdOQB9m3YNMkxOswx6QFbLnRleHQoxXQrICcgJyArxU3JK33ICXJldHVybusAqOsBHSzJFecCSDrtAS0wLCDkASUpyyfmAlfOJzXnAU3LKOcBSO4AjH0KxQs8L+YCWj4K"},{default:t(()=>[w]),_:1}),k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IkNob29zZSBUaW3IGHlwZT0idMkQOm1pbsVXPSJtaW7KQDptYXjIGGF4yhhAY29uZmlybT0ixwnEFz48L+8Anj4KPC/qAL48c2NyaXB0IGxhbmc9InRzIuQA0WltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRxdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANtzZXR1cChwcm9wcynHEyAgY29uc3Qg6wFfID0gbmV3IMQLKDIwMjIsIDQsIDEwyAQpxF/LOeYBJSA9ICh7IHNlbGVjdGVkVmFsdWUsyQ9PcHRpb25zIH0pID0+yXkg6gD7LnRleHQozT4uam9pbignOicpyXF9yAlyZXR1cm7LSesAvizJFecB7jrtAM4wLCDkAMYpyyfmAf3OJzXnAO7LKOcA6e4AjH0KxQs8L+YCAD4K"},{default:t(()=>[f]),_:1}),I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IkNob29zZSBIb3VyLU1pbnXJH3lwZT0iaMQXbcsXOm1pbsVlPSJtaW7KTjptYXjIGGF4yhhAY29uZmlybT0ixwnEFz48L+8ArD4KPC/qAMw8c2NyaXB0IGxhbmc9InRzIuQA32ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRxdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANtzZXR1cChwcm9wcynHEyAgY29uc3Qg6wFtID0gbmV3IMQLKDIwMjIsIDQsIDEwyAQpxF/LOeYBJSA9ICh7IHNlbGVjdGVkVmFsdWUsyQ9PcHRpb25zIH0pID0+yXkg6gD7LnRleHQozT4uam9pbignOicpyXF9yAlyZXR1cm7LSesAvizJFecB7jrtAM4wLCDkAMYpyyfmAf3OJzXnAO7LKOcA6e4AjH0KxQs8L+YCAD4K"},{default:t(()=>[D]),_:1}),x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IkNob29zZSBUaW3IGHlwZT0ixEh0yRQ6bWluxVs9Im5ldyDERSgyMDIyLCAwLCAxKcglYXjWJTHMJmZvcm1hdHRlcj0iyQvGG0Bjb25maXJtPSLHCcQXPjwv7wDYPgo8L+oA+DxzY3JpcHQgbGFuZz0idHMi5AELaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxHF1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+UA23NldHVwKHByb3BzKccTICBjb25zdCDrAZkgPSDvATo05wE9xQQpxF/LOeYBJSA9ICh7IHNlbGVjdGVkVmFsdWUsyQ9PcHRpb25zIH0pID0+yXnIQuQBVSA90C3JJSAgLnNsaWNlKDEsIDMpzBdtYXAoKG9wxVVvcC50ZXh0zSBqb2luKCcn6QCxyHHkAlLfccVx3W525ADj0286zHDpAdzlAJ0oz3JbMF3FGCArICdZZWFyJyAr5gENKyAnIMQN5ACpyU597gF46QK25AF65AMuOiBzdHJpbmcsIG/FX+8BbHN3aXRjaMYr6gH9xVBhc2UgJ3nkAIE6yxcgx0jnAKM9ICflAlnKAWJyZWFrzBPGSW1vbnRo30pNxSTfT8ZPZGF5301EYXnfS8dLaG91/wDjJ0jEI99Nxk1taW51dGXfT03GJd9R5wOl3kvLRX3JCnJldHVybscsyCF9OwrHCscf6wNx6gPmLMoV5gPCyhHpAlvKUch3fTsKPC/mBOw+Cg=="},{default:t(()=>[A]),_:1}),Z,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadHlwZT0idGltxxA6bWludXRlLXN0ZXA9IjXKFcVUPSJtaW7KPTptYXjIGGF4yhhAY29uZmlybT0ixwnEFz48L+8Amz4KPC/qALs8c2NyaXB0IGxhbmc9InRzIuQAzmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRxdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlANtzZXR1cChwcm9wcynHEyAgY29uc3Qg6wFcID0gbmV3IMQLKDIwMjIsIDQsIDEwyAQpxF/LOeYBJSA9ICh7IHNlbGVjdGVkVmFsdWUsyQ9PcHRpb25zIH0pID0+yXkg6gD7LnRleHQozT4uam9pbignOicpyXF9yAlyZXR1cm7LSesAvizJFecB7jrtAM4wLCDkAMYpyyfmAf3OJzXnAO7LKOcA6e4AjH0KxQs8L+YCAD4K"},{default:t(()=>[C]),_:1}),W,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZGF0ZS1waWNrZXIKICAgIHYtbW9kZWw9ImN1cnJlbnREYXRlIsUadGl0bGU9IkNob29zZSBUaW3IGHlwZT0ixEhob3VyxhQ6bWluxVs9Im1pbspEOm1heMgYYXjLGGZpbHRlcj0ixgjIFW9ybWF0xhjIC8YbQGNvbmZpcm09IscJxBc+PC/vANI+Cjwv6gDyPHNjcmlwdCBsYW5nPSJ0cyLkAQVpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEcXVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB75QDbc2V0dXAocHJvcHMpxxMgIGNvbnN0IOsBkyA9IG5ldyDECygyMDIyLCA0LCAxMCwgxAMpxF3KN+kBPCA9ICjkAa46IHN0cmluZywgb3B0aW9uKSA9PslrICBzd2l0Y2jGK+oAg8VQYXNlICd5ZWFyJzrLFyDHSC50ZXh0ICs9ICdZxCPoAIbGAWJyZWFrzBPGTW1vbnRo305NxSTfT8ZPZGF5301EYXnfS8dL5ALO30xIxCPfTecB3t5Jy0V9yQpyZXR1cm7HLMghfTsK7gHd5QMx+AHac+8B22lmxiggPT3nAOHuAeHNc3Muxl0oKOsCJ051bWJlcscSLnZhbHVlKSAlIDYgPT096wJ6+QDIc8gife4CpecDyOQAyXsgc2VsZWN0ZWRWxF8syQ9PxkIgffACsegDnuUBUSjPLy5tYXDtAMPrAX0pLmpvaW4oJycp6QC66QCY5wC3ymfrA38syRXnBN867QOP5gOIMSnLJ+YE7s4nNeYDs8wo5wEHyhHpA73LE+UBlu4Ar+QBbn07Cjwv5gTkPgo="},{default:t(()=>[H]),_:1}),_])}}});export{F as default,V as excerpt,B as frontmatter};
