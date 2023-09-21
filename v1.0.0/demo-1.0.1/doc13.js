import{d as p,r as h,b as r,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const d={class:"markdown-body"},i=c(`<h1>Calendar 日历</h1><h3>介绍</h3><p>日历，可平铺/弹窗展示</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Calendar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Calendar</span>);
</code></pre><h3>基础用法</h3>`,6),o=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择单个日期"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date ? `${date} ${dateWeek}` : '请选择'\""),s(`
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
`)])],-1),g=a("h3",null,"选择日期区间",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择日期区间"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}至${date[1]}` : '请选择'\""),s(`
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
`)])],-1),m=a("h3",null,"选择多个日期",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择多个日期"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date7 && date7.length ? `已选择${date7.length}个日期` : '请选择'\""),s(`
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
`)])],-1),y=a("h3",null,"选择周",-1),w=a("p",null,[s("当设置为周选择时，会根据"),a("code",{class:""},"first-day-of-week"),s(" 判断周的起始与结束日期。如"),a("code",{class:""},"first-day-of-week"),s("为 0 时，一周的起始日期为星期日。其他情况时，一周的起始日期为星期一。")],-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择周"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}至${date[1]}` : '请选择'\""),s(`
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
`)])],-1),f=a("h3",null,"快捷选择-单选",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择单个日期"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"date ? date : '请选择'"`),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(">")]),s(`
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
`)])],-1),I=a("h3",null,"快捷选择-范围选择",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择日期范围"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}至${date[1]}` : '请选择'\""),s(`
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
`)])],-1),C=a("h3",null,"自定义日历按钮",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自定义按钮"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}至${date[1]}` : '请选择'\""),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"openSwitch('isVisible')"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-calendar"),s(`
    `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"calendarRef"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":default-value"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"range"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"closeSwitch('isVisible')"`),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"setChooseValue"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"btn"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrapper"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_div"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_btn"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"goDate"'),s(">")]),s("去某个时间"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_div"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_btn"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clickBtn"'),s(">")]),s("最近七天"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_div"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"d_btn"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clickBtn1"'),s(">")]),s("当月"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"day"),s("="),a("span",{class:"hljs-string"},'"date"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("{{ date.date.day }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-calendar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"date"),s(`: [],
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(" calendarRef = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(`);
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
        state.`),a("span",{class:"hljs-property"},"date"),s(` = date;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickBtn1"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`();
        `),a("span",{class:"hljs-keyword"},"let"),s(" year = date."),a("span",{class:"hljs-title function_"},"getFullYear"),s(`();
        `),a("span",{class:"hljs-keyword"},"let"),s(),a("span",{class:"hljs-attr"},"month"),s(": any = date."),a("span",{class:"hljs-title function_"},"getMonth"),s("() + "),a("span",{class:"hljs-number"},"1"),s(`;
        month = month < `),a("span",{class:"hljs-number"},"10"),s(" ? "),a("span",{class:"hljs-string"},"'0'"),s(" + month : month + "),a("span",{class:"hljs-string"},"''"),s(`;
        `),a("span",{class:"hljs-keyword"},"let"),s(" yearMonth = "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${year}"),s("-"),a("span",{class:"hljs-subst"},"${month}"),s("`")]),s(`;
        `),a("span",{class:"hljs-keyword"},"let"),s(" currMonthDays = "),a("span",{class:"hljs-title function_"},"getMonthDays"),s("(year + "),a("span",{class:"hljs-string"},"''"),s(", month + "),a("span",{class:"hljs-string"},"''"),s(`);
        state.`),a("span",{class:"hljs-property"},"date"),s(" = ["),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${yearMonth}"),s("-01`")]),s(", "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${yearMonth}"),s("-"),a("span",{class:"hljs-subst"},"${currMonthDays}"),s("`")]),s(`];
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
        calendarRef,
        goDate,
        clickBtn1
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
  }
  `),a("span",{class:"hljs-selector-class"},".d_btn"),s(` {
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fa3f19"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"12px"),s(`;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"2px"),s(),a("span",{class:"hljs-number"},"8px"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"4px"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: inline-block;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),V=a("h3",null,"自定义时间文案",-1),S=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自定义时间文案"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date && date[0] ? `${date[0]}至${date[1]}` : '请选择'\""),s(`
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
    `),a("span",{class:"hljs-attr"},"confirm-text"),s("="),a("span",{class:"hljs-string"},'"提交"'),s(`
    `),a("span",{class:"hljs-attr"},"start-text"),s("="),a("span",{class:"hljs-string"},'"入店"'),s(`
    `),a("span",{class:"hljs-attr"},"end-text"),s("="),a("span",{class:"hljs-string"},'"离店"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"日期选择"'),s(`
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
`)])],-1),Y=a("h3",null,"自定义周起始日",-1),X=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自定义周起始日"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},"\"date ? `${date}` : '请选择'\""),s(`
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
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-cell__value"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex"),s(`: initial;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),W=a("h3",null,"平铺展示",-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
        `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"'2022-07-08'"),s(`
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
`)])],-1),B=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否可见</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>type</td><td>类型，日期单择<code class="">one</code>，区间选择<code class="">range</code>,日期多选<code class="">multiple</code>,周选择<code class="">week</code>(<code class="">v4.0.1</code>)</td><td>string</td><td>&#39;<code class="">one</code>&#39;</td></tr><tr><td>poppable</td><td>是否弹窗状态展示</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>is-auto-back-fill</td><td>自动回填</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>title</td><td>显示标题</td><td>string</td><td><code class="">日期选择</code></td></tr><tr><td>default-value</td><td>默认值，单个日期选择 <code class="">string</code>，其他为 <code class="">string[]</code></td><td>string | string[]</td><td><code class="">null</code></td></tr><tr><td>start-date</td><td>开始日期</td><td>string</td><td><code class="">今天</code></td></tr><tr><td>end-date</td><td>结束日期</td><td>string</td><td><code class="">距离今天 365 天</code></td></tr><tr><td>show-today</td><td>是否展示今天标记</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>start-text</td><td>范围选择，开始信息文案</td><td>string</td><td><code class="">开始</code></td></tr><tr><td>end-text</td><td>范围选择，结束信息文案</td><td>string</td><td><code class="">结束</code></td></tr><tr><td>confirm-text</td><td>底部确认按钮文案</td><td>string</td><td><code class="">确认</code></td></tr><tr><td>show-title</td><td>是否在展示日历标题</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-sub-title</td><td>是否展示日期标题</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>to-date-animation</td><td>是否启动滚动动画</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>first-day-of-week</td><td>设置周起始日</td><td>0-6</td><td><code class="">0</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>choose</td><td>选择之后或是点击确认按钮触发,日期数组（包含年月日和星期）</td><td><code class="">(string | string[])[]</code></td></tr><tr><td>close</td><td>关闭时触发</td><td>-</td></tr><tr><td>select</td><td>点击/选择后触发</td><td><code class="">(string | string[])[]</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>btn</td><td>自定义日历标题下部，可用以添加自定义操作</td></tr><tr><td>day</td><td>日期信息</td></tr><tr><td>top-info</td><td>日期顶部信息</td></tr><tr><td>bottom-info</td><td>日期底部信息</td></tr></tbody></table><h3>Methods</h3><p>通过 <a href="https://vuejs.org/guide/essentials/template-refs.html">ref</a> 可以获取到 <code class="">Calendar</code> 实例并调用实例方法。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>scrollToDate</td><td>滚动到指定日期所在月,如：&#39;2021-12-30&#39;</td><td><code class="">string</code></td></tr><tr><td>initPosition <code class="">v4.0.1</code></td><td>初始化滚动位置</td><td>无</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-calendar-primary-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-calendar-choose-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-calendar-choose-font-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-calendar-base-color</td><td><em>#333333</em></td></tr><tr><td>--cub-calendar-disable-color</td><td><em>#d1d0d0</em></td></tr><tr><td>--cub-calendar-base-font</td><td><em>var(--cub-font-size-3)</em></td></tr><tr><td>--cub-calendar-title-font</td><td><em>var(--cub-font-size-4)</em></td></tr><tr><td>--cub-calendar-title-font-weight</td><td><em>500</em></td></tr><tr><td>--cub-calendar-sub-title-font</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-calendar-text-font</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-calendar-day-font</td><td><em>16px</em></td></tr><tr><td>--cub-calendar-day-active-border-radius</td><td><em>0px</em></td></tr><tr><td>--cub-calendar-day-font-weight</td><td><em>500</em></td></tr><tr><td>--cub-calendar-day67-font-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-calendar-month-title-font-size</td><td><em>inherit</em></td></tr></tbody></table>',14),J={},R="",M=p({__name:"doc",setup(D,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(_,H)=>{const l=h("demo-block");return j(),r("div",d,[i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IumAieaLqeWNleS4quaXpeacn8YfOmRlc2M9ImRhdGUgPyBgJHvECn0gxghXZWVrfWAgOiAn6K+3xkInxjdAY2xpY2s9Im9wZW5Td2l0Y2goJ2lzVmlzaWJsZScpxCXlAKAv6ACh6gCuYWxlbmRhcsVHdi1tb2RlbDp2xjk9IslExmc6ZGVmYXVsdC12YWx1ZeYAp8YaQGNsb3NlPSLFB/cAgsQmaG/FJ3NldEPFC1bEScddc3RhcnQtxFQ9ImAyMDIyLTAxLTExYMcfZW5kzR0xMS0zMMUd6wDb5wDOPgo8L+oBmTxzY3JpcHQgbGFuZz0idHMixDFpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUq5wD8IHvlAI9zZXR1cCgpxw4gIGNvbnN0IHN05AG5PclUKMgfICDpAQ06IGZhbHNlLMka5ADVOiAnJ84S5AHtxBbHFX0p5ACLymrqAeogPSAocGFyYW0pID0+6QCQIOYAjFtgJHvFHX1gXSA9IOQCiMhIfc5R6wG631LNUuUAzNdT7gHm3VYu5QLyPSDFIVszXchJzB/kARLJIzTJI8l1cmV0dXJuy1ouLi7mAdMoxUUp6gFh6gE+yhTrAQHKFe4Aw85yfQrFCzwv5gJfPgo="},{default:t(()=>[o]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IumAieaLqeaXpeacn+WMuumXtMYfOmRlc2M9ImRhdGUgJiYgxAhbMF0gPyBgJHvHDX3oh7PHDTFdfWAgOiAn6K+3xlEnxkZAY2xpY2s9Im9wZW5Td2l0Y2goJ2lzVmlzaWJsZScpxCXlAK8v6ACw6gC9YWxlbmRhcsVHdi1tb2RlbDp2xjk9IslExmc6ZGVmYXVsdC12YWx1ZeYAtsYadHlwZT0icmFuZ8grc3RhcnQtxCI9ImAyMDE5LTEyLTIyYMcfZW5kyh0yMS0wMS0wOMcdQGNsb3NlPSLFB/cAz8QmaG/FJ3NldEPFC1bkAJbHHXNlbGVjdMQdxAjvAQHnAPQ+Cjwv6gHOPHNjcmlwdCBsYW5nPSJ0cyLEMWltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSrnASIge+UAh3NldHVwKCnHDiAgY29uc3Qgc3TkAe49yVQoyB8g5QIAOiBbJ+kBMTMnLCDKDjYnXSzJLOkBEjogZmFsc2XHGX0p5ACPym7qAhQgPSAocGFyYW0pID0+6QCUIOYAkFtgJHvFHX1gXSA9IOQCwchIfc5R6wGX31LNUuUApNdT7gHD3VYu5QMrPSBbLi4uW8UmWzBdWzNdLCDGDTHEDV1d2WnkAg/JYTogc3RyaW5nz2nELG9sZS5sb2fGKOkBU8lPcmV0dXJuyzQuLi7mAhoo5QCnKeoBqOoBgcoU6wFEyhXuAQbMGOQAte4Agn0KxQs8L+YCtuQCv3R5bOUElS7oA+VfX+UDqOcApWZsZXg6IGluaXRpYWzERX3EPsY1"},{default:t(()=>[u]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3ctaWNvbj0idHJ1ZSLFFnRpdGxlPSLpgInmi6nlpJrkuKrml6XmnJ/GHzpkZXNjPSJkYXRlNyAmJiDFCS5sZW5ndGggPyBg5beyxjske8wbfclHYCA6ICfor7fGJifGVkBjbGljaz0ib3BlblN3aXRjaCgnaXNWaXNpYmxlNycpxCblAMEv6ADC6gDPYWxlbmRhcsVIdi1tb2RlbDp2xjo9IspFxmk6ZGVmYXVsdC12YWx1ZecAyMYbdHlwZT0ibXVsdGlwbOcBDTpzdGFydC3EJj0iYDIwMjItMDEtMDFgxx9lbmTOHTktMTDHHUBjbG9zZT0ixQf4ANXEJ2hvxShzZXRDxQtW5ACb5QCV6wDz5wDmPgo8L+oB0jxzY3JpcHQgbGFuZz0idHMixDFpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUq5wETIHvlAJBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyDmAgI6IFtdLMkT6gDmOiBmYWxzZccafSnEd8pW6gHvID0gKHBhcmFtKSA9Psl8IMZ4W2Ake8UdfWBdID0g5AKsyEh9zlHrAWzfUs1S5QCk11PvAZfEV+YBskRhdGE6IGFuec9hbGV05QEUQXJyID0gyiwubWFwKChpdGVt1DYgIHJldHVybiDEIVszXegAhewBNecAvS7EXuQAiVsuLsUMQXJyyTDxAL5sZWN06QEMOiBzdHJpbmfPfcQsb2xlLmxvZ8YoyXPJT+cAnso0Li4u5gJXKOUAlSnqAf7qAdbKFOsBmcoV7wFbzBnkALbuAIN9CsULPC/mAvQ+Cg=="},{default:t(()=>[b]),_:1}),y,w,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IumAieaLqeWRqMYWOmRlc2M9ImRhdGUgJiYgxAhbMF0gPyBgJHvHDX3oh7PHDTFdfWAgOiAn6K+3xkgnxkZAY2xpY2s9Im9wZW5Td2l0Y2goJ2lzVmlzaWJsZScpxCXlAKYv6ACn6gC0YWxlbmRhcsVHdi1tb2RlbDp2xjk9IslExmc6ZGVmYXVsdC12YWx1ZeYAtsYadHlwZT0id2Vla8cqc3RhcnQtxCE9ImAyMDE5LTEyLTIyYMcfZW5kyh0yMS0wMS0wOMcdQGNsb3NlPSLFB/cAzsQmaG/FJ3NldEPFC1bkAJXHHXNlbGVjdMQdxAjvAQDnAPM+Cjwv6gHEPHNjcmlwdCBsYW5nPSJ0cyLEMWltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSrnASEge+UAh3NldHVwKCnHDiAgY29uc3Qgc3TkAe09yVQoyB8g5QH/OiBbJ+kBMTMnLCDKDjYnXSzJLOkBEjogZmFsc2XHGX0p5ACPym7qAhMgPSAocGFyYW0pID0+6QCUIOYAkFtgJHvFHX1gXSA9IOQCt8hIfc5R6wGX31LNUuUApNdT7gHD2FZsZeQBiuQCZETkAUF9ID0gxSfITMd4LuUDTD0gW8gqWzBdxRRbM10syT9bMckVXfkAluQCPOkAjjogc3RyaW5n7wCWxCxvbGUubG9nxijpAYDJT3JldHVybss0Li4u5gJHKOUAsinqAdXqAa7KFOsBccoV7gEzzBjkALXuAIJ9CsULPC/mAuPkAux0eWzlBLgu6AQRX1/lA9TnAKVmbGV4OiBpbml0aWFsxEV9xD7GNQ=="},{default:t(()=>[A]),_:1}),f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvd0ljb249InRydWUiIHRpdGxlPSLpgInmi6nljZXkuKrml6XmnJ8iIDpkZXNjPSJkYXRlID8gxQc6ICfor7fGLSciIEBjbGljaz0ib3BlblN3aXRjaCgnaXNWaXNpYmxlJykixXwvyH3qAIphbGVuZGFyCiAgICB2LW1vZGVsOnbGNj0iyUEixSBAY2xvc2U9IsUH1GXHJmhvxSdzZXRDxQtWYWx1x0M6ZGVmYXVsdC12xBTmANLHGnN0YXJ0LcQRPSJudWxsxxdlbmTSFWlzLWF1dG8tYmFjay1maWxs5wFECiAg6wDp5wDcPgo8L+oBgzxzY3JpcHQgbGFuZz0idHPlARppbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUq5wDHIHvlAJBzZXR1cCgpxw4gIGNvbnN0IHN05AGoPclUKMgfIOUBwjogJycsyRLpAUc6IGZhbHNlxxl9KcR1ylTqAd8gPSAocGFyYW0pID0+yXogxnZbYCR7xR19YF0gPSDkARzISH3OUesBzN9SzVLlAKTXU+4B+N1WLuUCyz0gxSFbM13RUnJldHVybss3Li4u5gGaKMVBKeoBQs53yhjqATPKFOsA9s5yfQrFCzwv5gImPgo="},{default:t(()=>[k]),_:1}),I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IumAieaLqeaXpeacn+iMg+WbtMYfOmRlc2M9ImRhdGUgJiYgxAhbMF0gPyBgJHvHDX3oh7PHDTFdfWAgOiAn6K+3xlEnxkZAY2xpY2s9Im9wZW5Td2l0Y2goJ2lzVmlzaWJsZScpxCXlAK8v6ACw6gC9YWxlbmRhcsVHdi1tb2RlbDp2xjk9IslExmc6ZGVmYXVsdC12YWx1ZeYAtsYadHlwZT0icmFuZ8grc3RhcnQtxCI9ImAyMDIyLTAxLTAxYMcfZW5kzR0xMi0zyB1AY2xvc2U9IsUH9wDPxCZob8Unc2V0Q8ULVuQAlsdgaXMtYXV0by1iYWNrLWZpbGzqAZTrAQrnAP0+Cjwv6gHXPHNjcmlwdCBsYW5nPSJ0cyLEMWltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSrnASsge+UAkHNldHVwKCnHDiAgY29uc3Qgc3TkAfc9yVQoyB8g5QIJOiBbJzIwMjHkAR0yMycsIMoONiddLMks6QEbOiBmYWxzZccZfSnkAI/KbuoCHSA9IChwYXJhbSkgPT7pAJQg5gCQW2Ake8UdfWBdID0g5AE2yEh9zlHrAaDfUs1S5QCk11PuAczdVi7lAzQ9IFsuLi5bxSZbMF1bM10sIMYNMcQNXV3RaXJldHVybstOLi4u5gHLKMVYKeoBWe4AjsoY6gFKyhTrAQ3Ocn0KxQs8L+YCV+QCYHR5bOUEPy7oA49fX+UDUucAlWZsZXg6IGluaXRpYWzERX3EPsY1"},{default:t(()=>[x]),_:1}),C,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IuiHquWumuS5ieaMiemSrsYcOmRlc2M9ImRhdGUgJiYgxAhbMF0gPyBgJHvHDX3oh7PHDTFdfWAgOiAn6K+36YCJ5oupJ8ZGQGNsaWNrPSJvcGVuU3dpdGNoKCdpc1Zpc2libGUnKcQl5QCsL+gAreoAumFsZW5kYXLFR3JlZj0iyBJSZWbGXXYtbW9kZWw6dsZPPSLJWsYgOmRlZmF1bHQtdmFsdWXmAMzGGnR5cGU9InJhbmfHEUBjbG9zZT0ixQf3AKnEJmhvxSdzZXRDxQtWxFroAMYgIOkBgSAjYnRuxhQgIDxkaXYgY2xhc3M9IndyYXBwZXIiyBzOHmRfZGl2yxwgIDxzcGFuyh9idG4i6QFVZ29E5ADSPuWOu+afkOS4quaXtumXtDwvxDTLYS9kaXbfcN9wxnDFB0J0biI+5pyA6L+R5LiD5aSp32/fb99vxG8xIj7lvZPmnIjdassNPC/sAwjtAZZkYXnnAgjJOMVUe3vlAuIuxwV5IH19zG7OUucCrucCjz4KzB4KPHNjcmlwdCBsYW5nPSJ0c8VpaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyzkAtsgfSBmcm9tICd2dWUnOwogIGV4xS/nAr8ge+UAhHNldHVwKCnHDiAgY29uc3Qgc3TkANg9yVkoyB8g5QDROiBbXSzJEukC0TogZmFsc2XHGX0pxHXKVOsDacVaZihudWxszyVnZXROdW1Ud29CaXQgPSBmdW5jdGlvbiAobjogbnVtYmVyKTogc3RyaW5n6QCzICBuID0gTsUeKG7JUeQD4HR1csQ8ID4gOSA/ICcn5ARNMCcpICsgbsgnfe4AgeQA3zJTdHLNfcQVOiDkAxcsIHNwbGl0P+gAhfQAjsUiID3HCHx8ICct5QGAzGd5ID3Fay5nZXRGdWxsWWVhcijrALvGJm0gPe0BEuUAicQzTW9udGgo5ADIMdE1ZNg15ADAKCnyASBbeSwgbSwgZF0uam9pbijlALfJJu8BH8VH5AC96gEdafwBmmkgPSBp5AEEMMp3bGXmAWcgPSBuZXflAVfyAPtkaWbkAidpICogKDEwMDAgKiA2yQUyNMsw0EvoAO9UaW1l5QEjxEvyAPboAenFMPgA72lzTGVhcOQBne0A83nrAPNib29sZWFu6wD0x2EoeSAlIDQgPT0gMOQG68QOMTAwICE9IDAp5AESxR8wMMUh13/oAepEYXlz7gCBZWFy6AFuLCBtxCTIDynoAJzsAYZmICgvXjAvLnRlc3QoxS8p6gPzxAHFFCA9xggu5QIDKCcnKVsxXeoBOX3xAOJbMCwgMzEs6wEnKOcDh+QAoSkpID8gMjkgOiAyOMYoM8cwyQjRFF0gYXPnAMBbXSlb8QCiYXMgYW55yRfpAJ7vATnqCBkgPSAocGFyYW0pID0+7AOl5ATiW2Ake8UdfWBdID0g5AjD11HrB8LfUs1S5QUQ11PuB+7dVuUGQSA9IMUhWzP4APboBtvETM9H6wN0W+kC+uoDfiks5wPaKDYpyV7PfcQH33kx3nr0A+7EH+QCLf8FEMQn5wLnYW7sBT3rBQrKLu0CziA8IDEw5AX+MCcgK8cTOscIKyAn6wWb6ACMxVQgPeQKlMQPfS0ke8UvfWDOLGN1csYs5wOg7AOv5QMCxWDnA6DFDOsA0u0BXOQCN8l6fS0wMWAsyH7HEyR7zW59YPgCBeYJv/MBieQEBesHhC7lCr/uBAZ2YXLlAVnkAcj0Aa3mBW0xLnPnBk3GDukGWyArIDMwzS/RcC5zY3JvbGxU5QClxUDpBYQx7Aab6ARs6QDd5wRz6gCuLi4u5gjtKOUBSinqCJDuA1nKGOoEFcoU6wPYzBXmAs/LEuoAyMoV5gFq0jcx7gC85ADLfTsKPC/mCcM+CjxzdHls5QnzLugMoF9f5QEe5wDfZmxleDogaW5pdGlhbMRFxEMu5wvkxyRkaXNwbGF5OsUtxmlwYWRkaW5nOiAwIDQwcMcVanVzdGlmeS1jb250ZW50OiBjZW50ZXLJVuULPcdUbWFyZ2luOiAwcHggNcZBxyRidOgBe2JhY2tncm91bmQ6ICNmYTNmMTnGaWNvbG9yxBRmZsYRZm9udC1zaXplOiAxMsZO6wCkMnB4IDjIFmJvcmRlci1yYWRpdXM6IDTIGOkA5WlubGluZS1ibG9ja8QbfeQBT+YBRg=="},{default:t(()=>[v]),_:1}),V,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IuiHquWumuS5ieaXtumXtOaWh+ahiMYiOmRlc2M9ImRhdGUgJiYgxAhbMF0gPyBgJHvHDX3oh7PHDTFdfWAgOiAn6K+36YCJ5oupJ8ZGQGNsaWNrPSJvcGVuU3dpdGNoKCdpc1Zpc2libGUnKcQl5QCyL+gAs+oAwGFsZW5kYXLFR3YtbW9kZWw6dsY5PSLJRMZnOmRlZmF1bHQtdmFsdWXmALbGGnR5cGU9InJhbmfHEUBjbG9zZT0ixQf3AJPEJmhvxSdzZXRDxQtWxFrHbnN0YXJ0LcRlPSJgMjAyMi0wMS0wMWDHH2VuZM0dMTItM8gdY29uZmlybS10ZXh0PSLmj5DkuqTGGsZVxhjlhaXlupfGGMROxhbnprvJFucBweaXpeacn+YBc+gBTSAg6QIOICNkYXnnAQ/GGyAgPHNwYW4+e3vlAdMuxwV5IDw9IDkgPyAnMCcgK88bOs8QfX08L8VFxm0vyG7RfWJvdHRvbS1pbmZv9ACFIGNsYXNzPSLEICLtAJIgPyAoznQ9PSAxMOQAoOWNgSfkAmonKcUG/QCN5wJX5wJKPgrMHjxzY3JpcHQgbGFuZz0idHPlAJtpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUq5wJ4IHvFfnNldHVwKCnHDuUB7XN05AHZdGUgPclUKMgfIOUA8TogW10syRLpAoo6IGZhbHNlxxl9KcR1ylTqA1AgPSAocGFyYW0pID0+yXrlAk90ZVtgJHvFHX1gXSA9IOQEAMhIfc5R6wMP31LNUuUApNdT7gM73VbmAfU9IMUhWzNd0VJyZXR1cm7LNy4uLuYBmijFQSnqAULOd8oY6gEzyhTrAPbOcn0KxQs8L+YCJuQCL3R5bOUCVS7oBKtfX+UEbucAlWZsZXg6IGluaXRpYWzERX3EPsY1"},{default:t(()=>[S]),_:1}),Y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgOnNob3dJY29uPSJ0cnVlIsUVdGl0bGU9IuiHquWumuS5ieWRqOi1t+Wni+aXpcYiOmRlc2M9ImRhdGUgPyBgJHvECn1gIDogJ+ivt+mAieaLqSfGK0BjbGljaz0ib3BlblN3aXRjaCgnaXNWaXNpYmxlJynEJeUAly/oAJjqAKVhbGVuZGFyxUd2LW1vZGVsOnbGOT0iyUTGZzpkZWZhdWx0LXZhbHVl5gCbxhpAY2xvc2U9IsUH9wCCxCZob8Unc2V0Q8ULVsRJx11maXJzdC1kYXktb2Ytd2Vlaz0iMu8AuucArT4KPC/qAW88c2NyaXB0IGxhbmc9InRzIsQxaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKucA2yB75QCNc2V0dXAoKccOICBjb25zdCBzdOQBjD3JVCjIHyAg6QDsOiBmYWxzZSzJGuQBJTogJyfHEX0pxHXKVOoBsyA9IChwYXJhbSkgPT7JeiDGdltgJHvFHX1gXSA9IOQCSMhIfc5R6wGD31LNUuUAttdT7gGv3VYu5QKvPSDFIVszXdFScmV0dXJuyzcuLi7mAZooxUEp6gE66gEbyhTrAN7KFe4AoM5yfQrFCzwv5gIm5AIvdHls5QOmLugDDl9f5QLR5wCVZmxleDogaW5pdGlhbMRFfcQ+xjU="},{default:t(()=>[X]),_:1}),W,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9InRlc3QtY2FsZW5kYXItd3JhcHBlciLEJiAgPGN1YskcxRIgIDpwb3BwYWJsZT0iZmFsc2UiyBhkZWZhdWx0LXZhbHVlPSJkYXTKHGlzLWF1dG8tYmFjay1maWxsPSJ0cnXJIEBjaG9vc2U9InNldEPFC1bERck/c3RhcnQtxFI9ImAyMDIwLTAyLTAxYMkhZW5kzR8xMi0zMMcf5wDLL+wAzMQUPC9kaXY+Cjwv6gEaPHNjcmlwdCBsYW5nPSJ0c+UBB2ltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSrnAQkge8V5c2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOQAyDogJzIwMjItMDctMDgnxxt9KcRly0TtAS0gPSAocGFyYW0pID0+yW4gxmouxFUgPSDFIVszXchJfcgJcmV0dXJuyzcuLi7mAOYoxUEpLMpRzXfOSX0KxQs8L+YBSeQBUnR5bOUCdC71AmnHcmRpc3BsYXk6IGZsZXjGS3dpZHRoOiAxMDAlxhFoZWlnaHQ6IDU2MHDHJG92ZXJmbG93OiBoaWRkZW7EFn3EfsZ1"},{default:t(()=>[G]),_:1}),B])}}});export{M as default,R as excerpt,J as frontmatter};
