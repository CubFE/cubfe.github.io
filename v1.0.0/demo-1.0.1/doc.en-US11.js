import{d as p,r as h,b as r,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const o={class:"markdown-body"},d=c(`<h1>Calendar</h1><h3>Intro</h3><p>Calendar, tileable/pop-up display</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Calendar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Calendar</span>);
</code></pre><h3>Basic Usage</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Select Single Date"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date ? `${date} ${dateWeek}` : 'Please Select Date'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
    `),a("span",{class:"hljs-attr"},":start-date"),s("="),a("span",{class:"hljs-string"},'"`2022-01-11`"'),s(`
    `),a("span",{class:"hljs-attr"},":end-date"),s("="),a("span",{class:"hljs-string"},'"`2022-11-30`"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"dateWeek"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"date"),s(" = param["),a("span",{class:"hljs-number"},"3"),s(`];
        state.`),a("span",{class:"hljs-property"},"dateWeek"),s(" = param["),a("span",{class:"hljs-number"},"4"),s(`];
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        openSwitch,
        closeSwitch,
        setChooseValue
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Select Date Range",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Select Date Range"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"range"'),s(`
    `),a("span",{class:"hljs-attr"},":start-date"),s("="),a("span",{class:"hljs-string"},'"`2019-12-22`"'),s(`
    `),a("span",{class:"hljs-attr"},":end-date"),s("="),a("span",{class:"hljs-string"},'"`2021-01-08`"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"select"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date"),s(": ["),a("span",{class:"hljs-string"},"'2019-12-23'"),s(", "),a("span",{class:"hljs-string"},"'2019-12-26'"),s(`],
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"date"),s(" = [...[param["),a("span",{class:"hljs-number"},"0"),s("]["),a("span",{class:"hljs-number"},"3"),s("], param["),a("span",{class:"hljs-number"},"1"),s("]["),a("span",{class:"hljs-number"},"3"),s(`]]];
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"select"),s(" = ("),a("span",{class:"hljs-params"},"param: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(param);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        openSwitch,
        closeSwitch,
        setChooseValue,
        select
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-cell__value"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex"),s(`: initial;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),m=a("h3",null,"Select Multiple Date",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Select Multiple Date"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date7 && date7.length ? `${date7.length} dates selected` : 'Please Select Date'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible7')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible7"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date7"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"multiple"'),s(`
    `),a("span",{class:"hljs-attr"},":start-date"),s("="),a("span",{class:"hljs-string"},'"`2022-01-01`"'),s(`
    `),a("span",{class:"hljs-attr"},":end-date"),s("="),a("span",{class:"hljs-string"},'"`2022-09-10`"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible7')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue7"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date7"),s(`: [],
        `),a("span",{class:"hljs-attr"},"isVisible7"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue7"),s(" = ("),a("span",{class:"hljs-params"},"chooseData: any"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" dateArr = chooseData."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: any"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-keyword"},"return"),s(" item["),a("span",{class:"hljs-number"},"3"),s(`];
        });
        state.`),a("span",{class:"hljs-property"},"date7"),s(` = [...dateArr];
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"select"),s(" = ("),a("span",{class:"hljs-params"},"param: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(param);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        openSwitch,
        closeSwitch,
        setChooseValue7,
        select
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Select Week",-1),A=a("p",null,[s("When set to week selection, the start and end dates of the week will be determined according to "),a("code",{class:""},"first-day-of-week"),s(". For example, when "),a("code",{class:""},"first-day-of-week"),s(" is 0, the start date of a week is Sunday. In other cases, the start date of the week is Monday.")],-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Select Week"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"week"'),s(`
    `),a("span",{class:"hljs-attr"},":start-date"),s("="),a("span",{class:"hljs-string"},'"`2019-12-22`"'),s(`
    `),a("span",{class:"hljs-attr"},":end-date"),s("="),a("span",{class:"hljs-string"},'"`2021-01-08`"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"select"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date"),s(": ["),a("span",{class:"hljs-string"},"'2019-12-23'"),s(", "),a("span",{class:"hljs-string"},"'2019-12-26'"),s(`],
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(` { weekDate } = param;
        state.`),a("span",{class:"hljs-property"},"date"),s(" = [weekDate["),a("span",{class:"hljs-number"},"0"),s("]."),a("span",{class:"hljs-property"},"date"),s("["),a("span",{class:"hljs-number"},"3"),s("], weekDate["),a("span",{class:"hljs-number"},"1"),s("]."),a("span",{class:"hljs-property"},"date"),s("["),a("span",{class:"hljs-number"},"3"),s(`]];
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"select"),s(" = ("),a("span",{class:"hljs-params"},"param: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(param);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        openSwitch,
        closeSwitch,
        setChooseValue,
        select
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-cell__value"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex"),s(`: initial;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f=a("h3",null,"Quick Select Single Date",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Select Single Date"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"date ? date : 'Please Select Date'"`),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    `),a("span",{class:"hljs-attr"},":start-date"),s("="),a("span",{class:"hljs-string"},'"null"'),s(`
    `),a("span",{class:"hljs-attr"},":end-date"),s("="),a("span",{class:"hljs-string"},'"null"'),s(`
    `),a("span",{class:"hljs-attr"},":is-auto-back-fill"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"date"),s(" = param["),a("span",{class:"hljs-number"},"3"),s(`];
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        setChooseValue,
        openSwitch,
        closeSwitch
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"Quick Select Date Range",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Select Date Range"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"range"'),s(`
    `),a("span",{class:"hljs-attr"},":start-date"),s("="),a("span",{class:"hljs-string"},'"`2022-01-01`"'),s(`
    `),a("span",{class:"hljs-attr"},":end-date"),s("="),a("span",{class:"hljs-string"},'"`2022-12-31`"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
    `),a("span",{class:"hljs-attr"},":is-auto-back-fill"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date"),s(": ["),a("span",{class:"hljs-string"},"'2021-12-23'"),s(", "),a("span",{class:"hljs-string"},"'2021-12-26'"),s(`],
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"date"),s(" = [...[param["),a("span",{class:"hljs-number"},"0"),s("]["),a("span",{class:"hljs-number"},"3"),s("], param["),a("span",{class:"hljs-number"},"1"),s("]["),a("span",{class:"hljs-number"},"3"),s(`]]];
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        setChooseValue,
        openSwitch,
        closeSwitch
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-cell__value"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex"),s(`: initial;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x=a("h3",null,"Custom Button",-1),S=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom Button"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"range"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"btn"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrapper"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_div"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_btn"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"goDate"'),s(">")]),s("Go Date"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_div"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_btn"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clickBtn"'),s(">")]),s("Last Seven Days"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_div"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_btn"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clickBtn1"'),s(">")]),s("This Month"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"day"),s("="),a("span",{class:"hljs-string"},'"date"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("{{ date.date.day }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" calendarRef = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date"),s(": ["),a("span",{class:"hljs-string"},"'2021-12-23'"),s(", "),a("span",{class:"hljs-string"},"'2021-12-26'"),s(`],
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(" getNumTwoBit = "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"n: number"),s(`): string {
        n = `),a("span",{class:"hljs-title class_"},"Number"),s(`(n);
        `),a("span",{class:"hljs-keyword"},"return"),s(" (n > "),a("span",{class:"hljs-number"},"9"),s(" ? "),a("span",{class:"hljs-string"},"''"),s(" : "),a("span",{class:"hljs-string"},"'0'"),s(`) + n;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(" date2Str = "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},[s("date: "),a("span",{class:"hljs-built_in"},"Date"),s(", split?: string")]),s(`): string {
        split = split || `),a("span",{class:"hljs-string"},"'-'"),s(`;
        `),a("span",{class:"hljs-keyword"},"const"),s(" y = date."),a("span",{class:"hljs-title function_"},"getFullYear"),s(`();
        `),a("span",{class:"hljs-keyword"},"const"),s(" m = "),a("span",{class:"hljs-title function_"},"getNumTwoBit"),s("(date."),a("span",{class:"hljs-title function_"},"getMonth"),s("() + "),a("span",{class:"hljs-number"},"1"),s(`);
        `),a("span",{class:"hljs-keyword"},"const"),s(" d = "),a("span",{class:"hljs-title function_"},"getNumTwoBit"),s("(date."),a("span",{class:"hljs-title function_"},"getDate"),s(`());
        `),a("span",{class:"hljs-keyword"},"return"),s(" [y, m, d]."),a("span",{class:"hljs-title function_"},"join"),s(`(split);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(" getDay = "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"i: number"),s(`): string {
        i = i || `),a("span",{class:"hljs-number"},"0"),s(`;
        `),a("span",{class:"hljs-keyword"},"let"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`();
        `),a("span",{class:"hljs-keyword"},"const"),s(" diff = i * ("),a("span",{class:"hljs-number"},"1000"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"24"),s(`);
        date = `),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("(date."),a("span",{class:"hljs-title function_"},"getTime"),s(`() + diff);
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"date2Str"),s(`(date);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(" isLeapYear = "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"y: number"),s(`): boolean {
        `),a("span",{class:"hljs-keyword"},"return"),s(" (y % "),a("span",{class:"hljs-number"},"4"),s(" == "),a("span",{class:"hljs-number"},"0"),s(" && y % "),a("span",{class:"hljs-number"},"100"),s(" != "),a("span",{class:"hljs-number"},"0"),s(") || y % "),a("span",{class:"hljs-number"},"400"),s(" == "),a("span",{class:"hljs-number"},"0"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(" getMonthDays = "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"year: string, month: string"),s(`): number {
        `),a("span",{class:"hljs-keyword"},"if"),s(" ("),a("span",{class:"hljs-regexp"},"/^0/"),s("."),a("span",{class:"hljs-title function_"},"test"),s(`(month)) {
          month = month.`),a("span",{class:"hljs-title function_"},"split"),s("("),a("span",{class:"hljs-string"},"''"),s(")["),a("span",{class:"hljs-number"},"1"),s(`];
        }
        `),a("span",{class:"hljs-keyword"},"return"),s(" (["),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"31"),s(", "),a("span",{class:"hljs-title function_"},"isLeapYear"),s("("),a("span",{class:"hljs-title class_"},"Number"),s("(year)) ? "),a("span",{class:"hljs-number"},"29"),s(" : "),a("span",{class:"hljs-number"},"28"),s(", "),a("span",{class:"hljs-number"},"31"),s(", "),a("span",{class:"hljs-number"},"30"),s(", "),a("span",{class:"hljs-number"},"31"),s(", "),a("span",{class:"hljs-number"},"30"),s(", "),a("span",{class:"hljs-number"},"31"),s(", "),a("span",{class:"hljs-number"},"31"),s(", "),a("span",{class:"hljs-number"},"30"),s(", "),a("span",{class:"hljs-number"},"31"),s(", "),a("span",{class:"hljs-number"},"30"),s(", "),a("span",{class:"hljs-number"},"31"),s("] "),a("span",{class:"hljs-keyword"},"as"),s(` number[])[
          month `),a("span",{class:"hljs-keyword"},"as"),s(` any
        ];
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"date"),s(" = param["),a("span",{class:"hljs-number"},"3"),s(`];
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickBtn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" date = ["),a("span",{class:"hljs-title function_"},"date2Str"),s("("),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("()), "),a("span",{class:"hljs-title function_"},"getDay"),s("("),a("span",{class:"hljs-number"},"6"),s(`)];
        state.`),a("span",{class:"hljs-property"},"date5"),s(` = date;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickBtn1"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`();
        `),a("span",{class:"hljs-keyword"},"let"),s(" year = date."),a("span",{class:"hljs-title function_"},"getFullYear"),s(`();
        `),a("span",{class:"hljs-keyword"},"let"),s(),a("span",{class:"hljs-attr"},"month"),s(": any = date."),a("span",{class:"hljs-title function_"},"getMonth"),s("() + "),a("span",{class:"hljs-number"},"1"),s(`;
        month = month < `),a("span",{class:"hljs-number"},"10"),s(" ? "),a("span",{class:"hljs-string"},"'0'"),s(" + month : month + "),a("span",{class:"hljs-string"},"''"),s(`;
        `),a("span",{class:"hljs-keyword"},"let"),s(" yearMonth = "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${year}"),s("-"),a("span",{class:"hljs-subst"},"${month}"),s("`")]),s(`;
        `),a("span",{class:"hljs-keyword"},"let"),s(" currMonthDays = "),a("span",{class:"hljs-title function_"},"getMonthDays"),s("(year + "),a("span",{class:"hljs-string"},"''"),s(", month + "),a("span",{class:"hljs-string"},"''"),s(`);
        state.`),a("span",{class:"hljs-property"},"date5"),s(" = ["),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${yearMonth}"),s("-01`")]),s(", "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${yearMonth}"),s("-"),a("span",{class:"hljs-subst"},"${currMonthDays}"),s("`")]),s(`];
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"goDate"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (calendarRef."),a("span",{class:"hljs-property"},"value"),s(`) {
          `),a("span",{class:"hljs-keyword"},"var"),s(" date1 = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`();
          date1.`),a("span",{class:"hljs-title function_"},"setDate"),s("(date1."),a("span",{class:"hljs-title function_"},"getDate"),s("() + "),a("span",{class:"hljs-number"},"30"),s(`);
          calendarRef.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"scrollToDate"),s("("),a("span",{class:"hljs-title function_"},"date2Str"),s(`(date1));
        }
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        setChooseValue,
        openSwitch,
        closeSwitch,
        clickBtn,
        clickBtn1,
        goDate
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-cell__value"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex"),s(`: initial;
  }
  `),a("span",{class:"hljs-selector-class"},".wrapper"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"40px"),s(`;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".d_div"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0px"),s(),a("span",{class:"hljs-number"},"5px"),s(`;
    `),a("span",{class:"hljs-selector-class"},".d_btn"),s(` {
      `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fa3f19"),s(`;
      `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
      `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"12px"),s(`;
      `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"2px"),s(),a("span",{class:"hljs-number"},"8px"),s(`;
      `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"4px"),s(`;
      `),a("span",{class:"hljs-attribute"},"display"),s(`: inline-block;
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),V=a("h3",null,"Custom Date Text",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom Date Text"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"range"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
    `),a("span",{class:"hljs-attr"},":start-date"),s("="),a("span",{class:"hljs-string"},'"`2022-01-01`"'),s(`
    `),a("span",{class:"hljs-attr"},":end-date"),s("="),a("span",{class:"hljs-string"},'"`2022-12-31`"'),s(`
    `),a("span",{class:"hljs-attr"},"confirm-text"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(`
    `),a("span",{class:"hljs-attr"},"start-text"),s("="),a("span",{class:"hljs-string"},'"Enter"'),s(`
    `),a("span",{class:"hljs-attr"},"end-text"),s("="),a("span",{class:"hljs-string"},'"Leave"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Select Date"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"day"),s("="),a("span",{class:"hljs-string"},'"date"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("{{ date.date.day <= 9 ? '0' + date.date.day : date.date.day }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"bottom-info"),s("="),a("span",{class:"hljs-string"},'"date"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s("{{ date.date ? (date.date.day == 10 ? '十' : '') : '' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date"),s(`: [],
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"date"),s(" = param["),a("span",{class:"hljs-number"},"3"),s(`];
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        setChooseValue,
        openSwitch,
        closeSwitch
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-cell__value"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex"),s(`: initial;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),G=a("h3",null,"Custom First Day Of Week",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom First Day Of Week"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date ? `${date}` : 'Please Select Date'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
    `),a("span",{class:"hljs-attr"},":first-day-of-week"),s("="),a("span",{class:"hljs-string"},'"2"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeSwitch"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state[`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${param}"),s("`")]),s("] = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"date"),s(" = param["),a("span",{class:"hljs-number"},"3"),s(`];
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        openSwitch,
        closeSwitch,
        setChooseValue
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),D=a("h3",null,"Tiled Display",-1),X=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test-calendar-wrapper"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
      `),a("span",{class:"hljs-attr"},":poppable"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
      `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
      `),a("span",{class:"hljs-attr"},":is-auto-back-fill"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
      @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
      `),a("span",{class:"hljs-attr"},":start-date"),s("="),a("span",{class:"hljs-string"},'"`2020-02-01`"'),s(`
      `),a("span",{class:"hljs-attr"},":end-date"),s("="),a("span",{class:"hljs-string"},'"`2020-12-30`"'),s(`
    >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"'2020-07-08'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setChooseValue"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"date"),s(" = param["),a("span",{class:"hljs-number"},"3"),s(`];
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        setChooseValue
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".test-calendar-wrapper"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"560px"),s(`;
    `),a("span",{class:"hljs-attribute"},"overflow"),s(`: hidden;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),Z=c('<h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:visible</td><td>whether to show</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>type</td><td>Calendar type ：<code class="">one</code> <code class="">range</code> <code class="">multiple</code> <code class="">week(V4.0.1)</code></td><td>string</td><td><code class="">one</code></td></tr><tr><td>poppable</td><td>Whether to display the pop-up window</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>is-auto-back-fill</td><td>Automatic backfill</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>title</td><td>whether to show title</td><td>string</td><td><code class="">Calendar</code></td></tr><tr><td>default-value</td><td>Default value, select single date : <code class="">string</code>，other: <code class="">string[]</code></td><td>string | string[]</td><td><code class="">null</code></td></tr><tr><td>start-date</td><td>The start date</td><td>string</td><td><code class="">Today</code></td></tr><tr><td>end-date</td><td>The end date</td><td>string</td><td><code class="">365 days from today</code></td></tr><tr><td>show-today</td><td>Whether to show today&#39;s mark</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>start-text</td><td>Range selection, start part of the text</td><td>string</td><td><code class="">Start</code></td></tr><tr><td>end-text</td><td>Range selection, end part of the text</td><td>string</td><td><code class="">End</code></td></tr><tr><td>confirm-text</td><td>Bottom confirm button text</td><td>string</td><td><code class="">Confirm</code></td></tr><tr><td>show-title</td><td>Whether to show the calendar title</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-sub-title</td><td>Whether to display the date title</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>to-date-animation</td><td>Whether to use scroll animation</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>first-day-of-week</td><td>Set the start day of week</td><td>0-6</td><td><code class="">0</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>choose</td><td>Triggered after selection or by clicking the confirm button,Array of dates (including year, month, day and week)</td><td><code class="">(string | string[])[]</code></td></tr><tr><td>close</td><td>Triggered when closed</td><td>-</td></tr><tr><td>select</td><td>Triggered after click/select</td><td><code class="">(string | string[])[]</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>btn</td><td>Below the custom calendar header, you can add custom actions</td></tr><tr><td>day</td><td>Date information</td></tr><tr><td>top-info</td><td>Date top information</td></tr><tr><td>bottom-info</td><td>Date bottom information</td></tr></tbody></table><h3>Methods</h3><p>Through <a href="https://vuejs.org/guide/essentials/template-refs.html">ref</a>, you can get the Calendar instance and call the instance method.</p><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>scrollToDate</td><td>Scroll to the month of the specified date:&#39;2021-12-30&#39;</td><td><code class="">string</code></td></tr><tr><td>initPosition <code class="">v4.0.1</code></td><td>Initialize scroll position</td><td></td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-calendar-primary-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-calendar-choose-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-calendar-choose-font-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-calendar-base-color</td><td><em>#333333</em></td></tr><tr><td>--cub-calendar-disable-color</td><td><em>#d1d0d0</em></td></tr><tr><td>--cub-calendar-base-font</td><td><em>var(--cub-font-size-3)</em></td></tr><tr><td>--cub-calendar-title-font</td><td><em>var(--cub-font-size-4)</em></td></tr><tr><td>--cub-calendar-title-font-weight</td><td><em>500</em></td></tr><tr><td>--cub-calendar-sub-title-font</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-calendar-text-font</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-calendar-day-font</td><td><em>16px</em></td></tr><tr><td>--cub-calendar-day-active-border-radius</td><td><em>0px</em></td></tr><tr><td>--cub-calendar-day-font-weight</td><td><em>500</em></td></tr><tr><td>--cub-calendar-day67-font-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-calendar-month-title-font-size</td><td><em>inherit</em></td></tr></tbody></table>',13),F={},U="",W=p({__name:"doc.en-US",setup(Y,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(R,_)=>{const l=h("demo-block");return j(),r("div",o,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IlNlbGVjdCBTaW5nbGUgRGF0xx86ZGVzYz0iZGF0ZSA/IGAke8QKfSDGCFdlZWt9YCA6ICdQbGVhc2Ugx0bEPyfGQEBjbGljaz0ib3BlblN3aXRjaCgnaXNWaXNpYmxlJynEJeUAqS/oAKrqALdhbGVuZGFyxUd2LW1vZGVsOnbGOT0iyUTGZzpkZWZhdWx0LXZhbHVl5gCwxhpAY2xvc2U9IsUH9wCCxCZob8Unc2V0Q8ULVsRJx11zdGFydC3EVD0iYDIwMjItMDEtMTFgxx9lbmTNHTExLTMwxR3rANvnAM4+Cjwv6gGiPHNjcmlwdCBsYW5nPSJ0cyLEMWltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSrnAPwge+UAj3NldHVwKCnHDiAgY29uc3Qgc3TkAcI9yVQoyB8gIOkBDTogZmFsc2UsyRrkANU6ICcnzhLkAfbEFscVfSnkAIvKauoB6iA9IChwYXJhbSkgPT7pAJAg5gCMW2Ake8UdfWBdID0g5AKRyEh9zlHrAbrfUs1S5QDM11PuAebdVi7lAvs9IMUhWzNdyEnMH+QBEskjNMkjyXVyZXR1cm7LWi4uLuYB0yjFRSnqAWHqAT7KFOsBAcoV7gDDznJ9CsULPC/mAl8+Cg=="},{default:t(()=>[i]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IlNlbGVjdCBEYXRlIFJhbmfHHjpkZXNjPSJkxBcmJiDECFswXSA/IGAke8cNfS3HCzFdfWAgOiAnUGxlYXNlIMtSJ8ZNQGNsaWNrPSJvcGVuU3dpdGNoKCdpc1Zpc2libGUnKcQl5QC1L+gAtuoAw2FsZW5kYXLFR3YtbW9kZWw6dsY5PSLJRMZnOmRlZmF1bHQtdmFsdWXmAL3GGnR5cGU9InLrAN9zdGFydC3EIj0iYDIwMTktMTItMjJgxx9lbmTKHTIxLTAxLTA4xx1AY2xvc2U9IsUH9wDPxCZob8Unc2V0Q8ULVuQAlscdc+UBJMQdxAjvAQHnAPQ+Cjwv6gHUPHNjcmlwdCBsYW5nPSJ0cyLEMWltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSrnASIge+UAh3NldHVwKCnHDiAgY29uc3Qgc3TkAfU9yVQoyB8g5QIHOiBbJ+kBMTMnLCDKDjYnXSzJLOkBEjogZmFsc2XHGX0p5ACPym7qAhQgPSAocGFyYW0pID0+6QCUIOYAkFtgJHvFHX1gXSA9IOQCx8hIfc5R6wGX31LNUuUApNdT7gHD3VYu5QMyPSBbLi4uW8UmWzBdWzNdLCDGDTHEDV1d2WnlAzvIYTogc3RyaW5nz2nELG9sZS5sb2fGKOkBU8lPcmV0dXJuyzQuLi7mAhoo5QCnKeoBqOoBgcoU6wFEyhXuAQbMGOQAte4Agn0KxQs8L+YCtuQCv3R5bOUEmy7oA+VfX+UDqOcApWZsZXg6IGluaXRpYWzERX3EPsY1"},{default:t(()=>[u]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3ctaWNvbj0idHJ1ZSLFFnRpdGxlPSJTZWxlY3QgTXVsdGlwbGUgRGF0xyE6ZGVzYz0iZGF0ZTcgJiYgxQkubGVuZ3RoID8gYCR7zBJ9xSBzIHPFUGVkYCA6ICdQbGVhc2Ugx2TEWyfGXEBjbGljaz0ib3BlblN3aXRjaCgnaXNWaXNpYmxlNycpxCblAMkv6ADK6gDXYWxlbmRhcsVIdi1tb2RlbDp2xjo9IspFxmk6ZGVmYXVsdC12YWx1ZecAzsYbdHlwZT0ibecA+ccvc3RhcnQtxCY9ImAyMDIyLTAxLTAxYMcfZW5kzh05LTEwxx1AY2xvc2U9IsUH+ADVxCdob8Uoc2V0Q8ULVuQAm+UAlesA8+cA5j4KPC/qAdo8c2NyaXB0IGxhbmc9InRzIsQxaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKucBEyB75QCQc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8g5gIIOiBbXSzJE+oA5jogZmFsc2XHGn0pxHfKVuoB7yA9IChwYXJhbSkgPT7JfCDGeFtgJHvFHX1gXSA9IOQCtMhIfc5R6wFs31LNUuUApNdT7wGXxFfmAbJEYXRhOiBhbnnPYWxldOUBFEFyciA9IMosLm1hcCgoaXRlbdQ2ICByZXR1cm4gxCFbM13oAIXsATXnAL0uxF7kAIlbLi7FDEFycskw8QC+5QNr6AEMOiBzdHJpbmfPfcQsb2xlLmxvZ8YoyXPJT+cAnso0Li4u5gJXKOUAlSnqAf7qAdbKFOsBmcoV7wFbzBnkALbuAIN9CsULPC/mAvQ+Cg=="},{default:t(()=>[b]),_:1}),y,A,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IlNlbGVjdCBXZWVrxhg6ZGVzYz0iZGF0ZSAmJiDECFswXSA/IGAke8cNfS3HCzFdfWAgOiAnUGxlYXNlIMdMRGF0ZSfGTUBjbGljaz0ib3BlblN3aXRjaCgnaXNWaXNpYmxlJynEJeUAry/oALDqAL1hbGVuZGFyxUd2LW1vZGVsOnbGOT0iyUTGZzpkZWZhdWx0LXZhbHVl5gC9xhp0eXBlPSJ36gDec3RhcnQtxCE9ImAyMDE5LTEyLTIyYMcfZW5kyh0yMS0wMS0wOMcdQGNsb3NlPSLFB/cAzsQmaG/FJ3NldEPFC1bkAJXHHXPlASPEHcQI7wEA5wDzPgo8L+oBzTxzY3JpcHQgbGFuZz0idHMixDFpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUq5wEhIHvlAIdzZXR1cCgpxw4gIGNvbnN0IHN05AH0PclUKMgfIOUCBjogWyfpATEzJywgyg42J10sySzpARI6IGZhbHNlxxl9KeQAj8pu6gITID0gKHBhcmFtKSA9PukAlCDmAJBbYCR7xR19YF0gPSDkAsDISH3OUesBl99SzVLlAKTXU+4Bw9hWbGXkAYrkAmTkAvogfSA9IMUnyEzHeC7lA1M9IFvIKlswXcUUWzNdLMk/WzHJFV35AJblA2foAI46IHN0cmluZ+8AlsQsb2xlLmxvZ8Yo6QGAyU9yZXR1cm7LNC4uLuYCRyjlALIp6gHV6gGuyhTrAXHKFe4BM8wY5AC17gCCfQrFCzwv5gLj5ALsdHls5QTBLugEEV9f5QPU5wClZmxleDogaW5pdGlhbMRFfcQ+xjU="},{default:t(()=>[w]),_:1}),f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IlNlbGVjdCBTaW5nbGUgRGF0xx86ZGVzYz0iZGF0ZSA/IMUHOiAnUGxlYXNlIMc1xC4nxi9AY2xpY2s9Im9wZW5Td2l0Y2goJ2lzVmlzaWJsZScpxCXlAJgv6ACZ6gCmYWxlbmRhcsVHdi1tb2RlbDp2xjk9IslEyWdvc2U9IsUH12jEJmhvxSdzZXRDxQtWYWzoAPg6ZGVmYXVsdC12xBTmAOLHGnN0YXJ0LcQRPSJudWxsxxdlbmTSFWlzLWF1dG8tYmFjay1maWxs6gFc6wDp5wDcPgo8L+oBnzxzY3JpcHQgbGFuZz0idHMixDFpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUq5wDHIHvlAJBzZXR1cCgpxw4gIGNvbnN0IHN05AG4PclUKMgfIOUB0jogJycsyRLpAUc6IGZhbHNlxxl9KcR1ylTqAeIgPSAocGFyYW0pID0+yXogxnZbYCR7xR19YF0gPSDkARzISH3OUesBzN9SzVLlAKTXU+4B+N1WLuUC2z0gxSFbM13RUnJldHVybss3Li4u5gGaKMVBKeoBQs53yhjqATPKFOsA9s5yfQrFCzwv5gImPgo="},{default:t(()=>[k]),_:1}),C,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IlNlbGVjdCBEYXRlIFJhbmfHHjpkZXNjPSJkxBcmJiDECFswXSA/IGAke8cNfS3HCzFdfWAgOiAnUGxlYXNlIMtSJ8ZNQGNsaWNrPSJvcGVuU3dpdGNoKCdpc1Zpc2libGUnKcQl5QC1L+gAtuoAw2FsZW5kYXLFR3YtbW9kZWw6dsY5PSLJRMZnOmRlZmF1bHQtdmFsdWXmAL3GGnR5cGU9InLrAN9zdGFydC3EIj0iYDIwMjItMDEtMDFgxx9lbmTNHTEyLTPIHUBjbG9zZT0ixQf3AM/EJmhvxSdzZXRDxQtW5ACWx2Bpcy1hdXRvLWJhY2stZmlsbOoBmusBCucA/T4KPC/qAd08c2NyaXB0IGxhbmc9InRzIsQxaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKucBKyB75QCQc2V0dXAoKccOICBjb25zdCBzdOQB/j3JVCjIHyDlAhA6IFsnMjAyMeQBHTIzJywgyg42J10sySzpARs6IGZhbHNlxxl9KeQAj8pu6gIdID0gKHBhcmFtKSA9PukAlCDmAJBbYCR7xR19YF0gPSDkATbISH3OUesBoN9SzVLlAKTXU+4BzN1WLuUDOz0gWy4uLlvFJlswXVszXSwgxg0xxA1dXdFpcmV0dXJuy04uLi7mAcsoxVgp6gFZ7gCOyhjqAUrKFOsBDc5yfQrFCzwv5gJX5AJgdHls5QRFLugDj19f5QNS5wCVZmxleDogaW5pdGlhbMRFfcQ+xjU="},{default:t(()=>[I]),_:1}),x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IkN1c3RvbSBCdXR0b27GGjpkZXNjPSJkYXRlICYmIMQIWzBdID8gYCR7xw19LccLMV19YCA6ICdQbGVhc2UgU2VsZWN0IERhdGUnxk1AY2xpY2s9Im9wZW5Td2l0Y2goJ2lzVmlzaWJsZScpxCXlALEv6ACy6gC/YWxlbmRhcsVHdi1tb2RlbDp2xjk9IslExmc6ZGVmYXVsdC12YWx1ZeYAvcYadHlwZT0icmFuZ8cRQGNsb3NlPSLFB/cAk8QmaG/FJ3NldEPFC1bEWugAsCAg6QFwICNidG7GFCAgPGRpdiBjbGFzcz0id3JhcHBlciLIHM4eZF9kaXYiPiA8c3BhbsoVYnRuIukBNWdv5AFKIj5Hb+UBUzwvxCw+PC9kaXbfVdtVxQdCdG4iPkxhc3QgU2V2ZW4gRGF5c99f31/QXzEiPlRoaXMgTW9udGjUW8sNPC/sAr3tAVxkYXnnAc7JOMVLe3vlApkuxwV5IH19x2XTUucCXucCUT4KzB4KPHNjcmlwdCBsYW5nPSJ0c8VpaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKucCgCB7xX9zZXR1cCgpxw4gIGNvbnN0IOgAgVJlZiA9IHJlZihudWxsKcRGyiVzdOQA+MQfxnkoyEQg5QDxOiBbJzIwMjEtMTItMjMnLCDKDjYnXSzJLOkC0TogZmFsc2XHGX3PbmdldE51bVR3b0JpdCA9IGZ1bmN0aW9uIChuOiBudW1iZXIpOiBzdHJpbmfpAM0gIG4gPSBOxR4obslRICByZXR1csQ8ID4gOSA/ICcn5AQbMCcpICsgbsgnfe4AgeQA1DJTdHLNfcQVOuUC8ywgc3BsaXQ/6ACF9ACOxSIgPccIfHwgJy3lAZrMZ3kgPcVrLmdldEZ1bGxZZWFyKOsAu8YmbSA97QES5QCJxDPlAsUo5ADIMdE1ZNg15ADAKCnyASBbeSwgbSwgZF0uam9pbijlALfJJu8BH8VH5AC96gEdafwBmmkgPSBp5AEEMMp3bGXmAWcgPSBuZXflAVfyAPtkaWbkApVpICogKDEwMDAgKiA2yQUyNMsw0EvoAO9UaW1l5QEjxEvyAPboAenFMPgA72lzTGVhcOQBne0A83nrAPNib29sZWFu6wD0x2EoeSAlIDQgPT0gMOQGt8QOMTAwICE9IDAp5AESxR8wMMUh13/oAerkBQ7uAIFlYXLoAW4sIG3EJMgPKegAnOwBhmYgKC9eMC8udGVzdCjFLynqBA3EAcUUID3GCC7lAgMoJycpWzFd6gE5ffEA4lswLCAzMSzrASco5wOH5AChKSkgPyAyOSA6IDI4xigzxzDJCNEUXSBhc+cAwFtdKVvxAKJhcyBhbnnJF+kAnu8BOeoH3iA9IChwYXJhbSkgPT7sA6XkBNdbYCR7xR19YF0gPSDkCI3XUesHnd9SzVLlBOvXU+4Hyd1W5QZWID0gxSFbM/gA9ugG68RMz0frA3Rb6QL66gN+KSznA9ooNinJXsx9NecEsN96Md579APvxB/kAi7/BRHEJ+cC6GFu7AU+6wULyi7tAs8gPCAxMOQF/zAnICvHEzrHCCsgJ+sFnOgAjMVUID3kCmHED+QKXsUvfWDOLGN1csYs5wOh7AOw5QMDxWDnA6HFDOsA0u4BXeQCOcl7fS0wMWAsyH/HEyR7zW99YPgCB+YJpvMBiuQEB+sH9C7lCpzuBAh2YXLlAVrkAcn0Aa7mBW8xLnPnBk/GDukGXSArIDMwzS/RcC5zY3JvbGxU5QClxUDpBYYx7Aad6ARu6QDd5wR16gCuLi4u5gkEKOUBSynqCG3uA1vKGOoEF8oU6wPazBXmAtDSEjHKE+YBaO4Ap+QAtn07Cjwv5gnFPgo8c3R5bOUJ9S7oDFJfX+UBCecAymZsZXg6IGluaXRpYWzERcRDLucLrMckZGlzcGxheTrFLcZpcGFkZGluZzogMCA0MHDHFWp1c3RpZnktY29udGVudDogY2VudGVyyVblCzDHVG1hcmdpbjogMHB4IDXIQS7lCz3HIiAgYmFja2dyb3VuZDogI2ZhM2YxOeoCa2xvcsQWZmbIE2ZvbnQtc2l6ZTogMTLIUusAqjJweCA4yhhib3JkZXItcmFkaXVzOiA0yhrpAO9pbmxpbmUtYmxvY2vrAWDkAV/mAVY="},{default:t(()=>[S]),_:1}),V,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IkN1c3RvbSBEYXRlIFRleHTGHTpkZXNjPSJkxBYmJiDECFswXSA/IGAke8cNfS3HCzFdfWAgOiAnUGxlYXNlIFNlbGVjdMVRJ8ZNQGNsaWNrPSJvcGVuU3dpdGNoKCdpc1Zpc2libGUnKcQl5QC0L+gAteoAwmFsZW5kYXLFR3YtbW9kZWw6dsY5PSLJRMZnOmRlZmF1bHQtdmFsdWXmAL3GGnR5cGU9InJhbmfHEUBjbG9zZT0ixQf3AJPEJmhvxSdzZXRDxQtWxFrHbnN0YXJ0LcRlPSJgMjAyMi0wMS0wMWDHH2VuZM0dMTItM8gdY29uZmlybS10ZXh0PSJzdWJtaecBeMZVxhhFbnRlcsYXxE3GFUxlYXbuAcHrAXDoAUogIOkCDSAjZGF55wEMxhsgIDxzcGFuPnt75QHXLscFeSA8PSA5ID8gJzAnICvPGzrPEH19PC/FRcZtL8hu0X1ib3R0b20taW5mb/QAhSBjbGFzcz0ixCAi7QCSID8gKM50PT0gMTDkAKDljYEn5AJwJynFBv0AjecCVOcCRz4KzB48c2NyaXB0IGxhbmc9InRz5QCbaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKucCdSB7xX5zZXR1cCgpxw7lAepzdOQB1nRlID3JVCjIHyDlAPE6IFtdLMkS6QKHOiBmYWxzZccZfSnEdcpU6gNNID0gKHBhcmFtKSA9Psl65QJMdGVbYCR7xR19YF0gPSDkA//ISH3OUesDDN9SzVLlAKTXU+4DON1W5gH1PSDFIVszXdFScmV0dXJuyzcuLi7mAZooxUEp6gFCznfKGOoBM8oU6wD2znJ9CsULPC/mAibkAi90eWzlAlUu6ASoX1/lBGvnAJVmbGV4OiBpbml0aWFsxEV9xD7GNQ=="},{default:t(()=>[v]),_:1}),G,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IkN1c3RvbSBGaXJzdCBEYXkgT2YgV2Vla8YlOmRlc2M9ImRhdGUgPyBgJHvECn1gIDogJ1BsZWFzZSBTZWxlY8Q6dGUnxjRAY2xpY2s9Im9wZW5Td2l0Y2goJ2lzVmlzaWJsZScpxCXlAKMv6ACk6gCxYWxlbmRhcsVHdi1tb2RlbDp2xjk9IslExmc6ZGVmYXVsdC12YWx1ZeYApMYaQGNsb3NlPSLFB/cAgsQmaG/FJ3NldEPFC1bEScddZuQBEC1kYXktb2Ytd2Vlaz0iMu8AuucArT4KPC/qAXs8c2NyaXB0IGxhbmc9InRzIsQxaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKucA2yB75QCNc2V0dXAoKccOICBjb25zdCBzdOQBlT3JVCjIHyAg6QDsOiBmYWxzZSzJGuQBJTogJyfHEX0pxHXKVOoBsyA9IChwYXJhbSkgPT7JeiDGdltgJHvFHX1gXSA9IOQCVMhIfc5R6wGD31LNUuUAttdT7gGv3VYu5QK4PSDFIVszXdFScmV0dXJuyzcuLi7mAZooxUEp6gE66gEbyhTrAN7KFe4AoM5yfQrFCzwv5gImPgo="},{default:t(()=>[B]),_:1}),D,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9InRlc3QtY2FsZW5kYXItd3JhcHBlciLEJiAgPGN1YskcxRIgIDpwb3BwYWJsZT0iZmFsc2UiyBhkZWZhdWx0LXZhbHVlPSJkYXTKHGlzLWF1dG8tYmFjay1maWxsPSJ0cnXJIEBjaG9vc2U9InNldEPFC1bERck/c3RhcnQtxFI9ImAyMDIwLTAyLTAxYMkhZW5kzR8xMi0zMMcf5wDLL+wAzMQUPC9kaXY+Cjwv6gEaPHNjcmlwdCBsYW5nPSJ0c+UBB2ltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSrnAQkge8V5c2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOQAyDogJ+YA5zctMDgnxxt9KcRly0TtAS0gPSAocGFyYW0pID0+yW4gxmouxFUgPSDFIVszXchJfcgJcmV0dXJuyzcuLi7mAOYoxUEpLMpRzXfOSX0KxQs8L+YBSeQBUnR5bOUCdC71AmnHcmRpc3BsYXk6IGZsZXjGS3dpZHRoOiAxMDAlxhFoZWlnaHQ6IDU2MHDHJG92ZXJmbG93OiBoaWRkZW7EFn3EfsZ1"},{default:t(()=>[X]),_:1}),Z])}}});export{W as default,U as excerpt,F as frontmatter};
