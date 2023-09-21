import{d as p,r as h,b as r,k as t,w as n,aq as e,e as a,o as i,l as s}from"./style_icon.js";const j={class:"markdown-body"},d=e(`<h1>TimeSelect 配送时间</h1><h3>介绍</h3><p>用于配送时间选择</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TimeSelect</span>, <span class="hljs-title class_">TimePannel</span>, <span class="hljs-title class_">TimeDetail</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TimeSelect</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TimePannel</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TimeDetail</span>);
</code></pre><h3>基础用法</h3>`,6),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick1"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("请选择配送时间"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-select"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible1"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"50%"'),s(`
    `),a("span",{class:"hljs-attr"},":current-key"),s("="),a("span",{class:"hljs-string"},'"currentKey1"'),s(`
    `),a("span",{class:"hljs-attr"},":current-time"),s("="),a("span",{class:"hljs-string"},'"currentTime1"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelected1"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"pannel"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2月23日(今天)"'),s(),a("span",{class:"hljs-attr"},"pannel-key"),s("="),a("span",{class:"hljs-string"},'"0"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange1"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2月24日(星期三)"'),s(),a("span",{class:"hljs-attr"},"pannel-key"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange1"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"detail"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-detail"),s(),a("span",{class:"hljs-attr"},":times"),s("="),a("span",{class:"hljs-string"},'"times1"'),s(" @"),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"selectTime1"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-detail"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"visible1"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"currentKey1"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"currentTime1"),s(": [] "),a("span",{class:"hljs-keyword"},"as"),s(` any[],
        `),a("span",{class:"hljs-attr"},"times1"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(": ["),a("span",{class:"hljs-string"},"'9:00-10:00'"),s(", "),a("span",{class:"hljs-string"},"'10:00-11:00'"),s(", "),a("span",{class:"hljs-string"},"'11:00-12:00'"),s(`]
          },
          {
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(": ["),a("span",{class:"hljs-string"},"'9:00-10:00'"),s(", "),a("span",{class:"hljs-string"},"'10:00-11:00'"),s(`]
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleChange1"),s(" = ("),a("span",{class:"hljs-params"},"pannelKey: number"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"currentKey1"),s(` = pannelKey;
        state.`),a("span",{class:"hljs-property"},"currentTime1"),s(` = [];
        state.`),a("span",{class:"hljs-property"},"currentTime1"),s("."),a("span",{class:"hljs-title function_"},"push"),s(`({
          `),a("span",{class:"hljs-attr"},"key"),s(": state."),a("span",{class:"hljs-property"},"currentKey1"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: []
        });
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleClick1"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        state.`),a("span",{class:"hljs-property"},"visible1"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selectTime1"),s(" = ("),a("span",{class:"hljs-params"},"item: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" curTimeIndex = state."),a("span",{class:"hljs-property"},"currentTime1"),s("["),a("span",{class:"hljs-number"},"0"),s("]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"findIndex"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"time: string"),s(") =>")]),s(` time === item);
        `),a("span",{class:"hljs-keyword"},"if"),s(" (curTimeIndex === -"),a("span",{class:"hljs-number"},"1"),s(`) {
          state.`),a("span",{class:"hljs-property"},"currentTime1"),s("["),a("span",{class:"hljs-number"},"0"),s("]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"push"),s(`(item);
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          state.`),a("span",{class:"hljs-property"},"currentTime1"),s("["),a("span",{class:"hljs-number"},"0"),s("]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"splice"),s("(curTimeIndex, "),a("span",{class:"hljs-number"},"1"),s(`);
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleSelected1"),s(" = ("),a("span",{class:"hljs-params"},"obj: any"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`您选择了："),a("span",{class:"hljs-subst"},[s("${"),a("span",{class:"hljs-built_in"},"JSON"),s(".stringify(obj)}")]),s("`")]),s(`);
      };

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        state.`),a("span",{class:"hljs-property"},"currentTime1"),s("."),a("span",{class:"hljs-title function_"},"push"),s(`({
          `),a("span",{class:"hljs-attr"},"key"),s(": state."),a("span",{class:"hljs-property"},"currentKey1"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: []
        });
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        handleChange1,
        handleSelected1,
        selectTime1,
        handleClick1
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),o=a("h3",null,"可选择多个日期时间",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick2"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("请选择配送时间"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-select"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible2"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"50%"'),s(`
    `),a("span",{class:"hljs-attr"},":current-key"),s("="),a("span",{class:"hljs-string"},'"currentKey2"'),s(`
    `),a("span",{class:"hljs-attr"},":current-time"),s("="),a("span",{class:"hljs-string"},'"currentTime2"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelected2"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"pannel"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2月23日(今天)"'),s(),a("span",{class:"hljs-attr"},"pannel-key"),s("="),a("span",{class:"hljs-string"},'"0"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2月24日(星期三)"'),s(),a("span",{class:"hljs-attr"},"pannel-key"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"detail"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-detail"),s(),a("span",{class:"hljs-attr"},":times"),s("="),a("span",{class:"hljs-string"},'"times2"'),s(" @"),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"selectTime2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-detail"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"visible2"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"currentKey2"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"currentTime2"),s(": [] "),a("span",{class:"hljs-keyword"},"as"),s(` any[],
        `),a("span",{class:"hljs-attr"},"times2"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(": ["),a("span",{class:"hljs-string"},"'9:00-10:00'"),s(", "),a("span",{class:"hljs-string"},"'10:00-11:00'"),s(", "),a("span",{class:"hljs-string"},"'11:00-12:00'"),s(`]
          },
          {
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(": ["),a("span",{class:"hljs-string"},"'9:00-10:00'"),s(", "),a("span",{class:"hljs-string"},"'10:00-11:00'"),s(`]
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleChange2"),s(" = ("),a("span",{class:"hljs-params"},"pannelKey: number"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"currentKey2"),s(` = pannelKey;
        `),a("span",{class:"hljs-keyword"},"let"),s(" curTime = state."),a("span",{class:"hljs-property"},"currentTime2"),s("."),a("span",{class:"hljs-title function_"},"find"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: any"),s(") =>")]),s(" item."),a("span",{class:"hljs-property"},"key"),s(` == pannelKey);
        `),a("span",{class:"hljs-keyword"},"if"),s(` (!curTime) {
          state.`),a("span",{class:"hljs-property"},"currentTime2"),s("."),a("span",{class:"hljs-title function_"},"push"),s(`({
            `),a("span",{class:"hljs-attr"},"key"),s(`: pannelKey,
            `),a("span",{class:"hljs-attr"},"list"),s(`: []
          });
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleClick2"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        state.`),a("span",{class:"hljs-property"},"visible2"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selectTime2"),s(" = ("),a("span",{class:"hljs-params"},"item: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" findIndex = state."),a("span",{class:"hljs-property"},"currentTime2"),s("."),a("span",{class:"hljs-title function_"},"findIndex"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: any"),s(") =>")]),s(" item."),a("span",{class:"hljs-property"},"key"),s(" == state."),a("span",{class:"hljs-property"},"currentKey2"),s(`);
        `),a("span",{class:"hljs-keyword"},"let"),s(" curTimeIndex = state."),a("span",{class:"hljs-property"},"currentTime2"),s("[findIndex]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"findIndex"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"time: string"),s(") =>")]),s(` time === item);
        `),a("span",{class:"hljs-keyword"},"if"),s(" (curTimeIndex === -"),a("span",{class:"hljs-number"},"1"),s(`) {
          state.`),a("span",{class:"hljs-property"},"currentTime2"),s("[findIndex]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"push"),s(`(item);
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          state.`),a("span",{class:"hljs-property"},"currentTime2"),s("[findIndex]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"splice"),s("(curTimeIndex, "),a("span",{class:"hljs-number"},"1"),s(`);
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleSelected2"),s(" = ("),a("span",{class:"hljs-params"},"obj: any"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`您选择了："),a("span",{class:"hljs-subst"},[s("${"),a("span",{class:"hljs-built_in"},"JSON"),s(".stringify(obj)}")]),s("`")]),s(`);
      };

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        state.`),a("span",{class:"hljs-property"},"currentTime2"),s("."),a("span",{class:"hljs-title function_"},"push"),s(`({
          `),a("span",{class:"hljs-attr"},"key"),s(": state."),a("span",{class:"hljs-property"},"currentKey2"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: []
        });
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"更改标题",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick2"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("请选择配送时间"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-select"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible2"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"50%"'),s(`
    `),a("span",{class:"hljs-attr"},":current-key"),s("="),a("span",{class:"hljs-string"},'"currentKey2"'),s(`
    `),a("span",{class:"hljs-attr"},":current-time"),s("="),a("span",{class:"hljs-string"},'"currentTime2"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelected2"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"title"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"timeselect-title"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s("我是标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"subtitle"'),s(">")]),s("我是副标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"pannel"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2月23日(今天)"'),s(),a("span",{class:"hljs-attr"},"pannel-key"),s("="),a("span",{class:"hljs-string"},'"0"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2月24日(星期三)"'),s(),a("span",{class:"hljs-attr"},"pannel-key"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-pannel"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"detail"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-time-detail"),s(),a("span",{class:"hljs-attr"},":times"),s("="),a("span",{class:"hljs-string"},'"times2"'),s(" @"),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"selectTime2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-detail"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-time-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"visible2"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"currentKey2"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"currentTime2"),s(": [] "),a("span",{class:"hljs-keyword"},"as"),s(` any[],
        `),a("span",{class:"hljs-attr"},"times2"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(": ["),a("span",{class:"hljs-string"},"'9:00-10:00'"),s(", "),a("span",{class:"hljs-string"},"'10:00-11:00'"),s(", "),a("span",{class:"hljs-string"},"'11:00-12:00'"),s(`]
          },
          {
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(": ["),a("span",{class:"hljs-string"},"'9:00-10:00'"),s(", "),a("span",{class:"hljs-string"},"'10:00-11:00'"),s(`]
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleChange2"),s(" = ("),a("span",{class:"hljs-params"},"pannelKey: number"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"currentKey2"),s(` = pannelKey;
        `),a("span",{class:"hljs-keyword"},"let"),s(" curTime = state."),a("span",{class:"hljs-property"},"currentTime2"),s("."),a("span",{class:"hljs-title function_"},"find"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: any"),s(") =>")]),s(" item."),a("span",{class:"hljs-property"},"key"),s(` == pannelKey);
        `),a("span",{class:"hljs-keyword"},"if"),s(` (!curTime) {
          state.`),a("span",{class:"hljs-property"},"currentTime2"),s("."),a("span",{class:"hljs-title function_"},"push"),s(`({
            `),a("span",{class:"hljs-attr"},"key"),s(`: pannelKey,
            `),a("span",{class:"hljs-attr"},"list"),s(`: []
          });
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleClick2"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        state.`),a("span",{class:"hljs-property"},"visible2"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selectTime2"),s(" = ("),a("span",{class:"hljs-params"},"item: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" findIndex = state."),a("span",{class:"hljs-property"},"currentTime2"),s("."),a("span",{class:"hljs-title function_"},"findIndex"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: any"),s(") =>")]),s(" item."),a("span",{class:"hljs-property"},"key"),s(" == state."),a("span",{class:"hljs-property"},"currentKey2"),s(`);
        `),a("span",{class:"hljs-keyword"},"let"),s(" curTimeIndex = state."),a("span",{class:"hljs-property"},"currentTime2"),s("[findIndex]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"findIndex"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"time: string"),s(") =>")]),s(` time === item);
        `),a("span",{class:"hljs-keyword"},"if"),s(" (curTimeIndex === -"),a("span",{class:"hljs-number"},"1"),s(`) {
          state.`),a("span",{class:"hljs-property"},"currentTime2"),s("[findIndex]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"push"),s(`(item);
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          state.`),a("span",{class:"hljs-property"},"currentTime2"),s("[findIndex]["),a("span",{class:"hljs-string"},"'list'"),s("]."),a("span",{class:"hljs-title function_"},"splice"),s("(curTimeIndex, "),a("span",{class:"hljs-number"},"1"),s(`);
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleSelected2"),s(" = ("),a("span",{class:"hljs-params"},"obj: any"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`您选择了："),a("span",{class:"hljs-subst"},[s("${"),a("span",{class:"hljs-built_in"},"JSON"),s(".stringify(obj)}")]),s("`")]),s(`);
      };

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        state.`),a("span",{class:"hljs-property"},"currentTime2"),s("."),a("span",{class:"hljs-title function_"},"push"),s(`({
          `),a("span",{class:"hljs-attr"},"key"),s(": state."),a("span",{class:"hljs-property"},"currentKey2"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: []
        });
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".timeselect-title"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".title"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"1"),s(`;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"10px"),s(),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"16px"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-weight"),s(`: bold;
  }
  `),a("span",{class:"hljs-selector-class"},".subtitle"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"1"),s(`;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#999"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y=e('<h2>API</h2><h3>TimeSelect Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>是否显示弹层</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>height</td><td>弹层的高度</td><td>string</td><td><code class="">20%</code></td></tr><tr><td>title</td><td>弹层标题</td><td>string</td><td><code class="">取件时间</code></td></tr><tr><td>current-key</td><td>唯一标识</td><td>string | number</td><td><code class="">0</code></td></tr><tr><td>current-time</td><td>当前选择的时间，数组元素包含:key: string; list: string[]</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>teleport-disable</td><td>是否允许挂载节点</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>更改标题</td></tr><tr><td>pannel</td><td>左侧列表</td></tr><tr><td>detail</td><td>右侧详细内容</td></tr></tbody></table><h3>TimePannel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>显示的名称</td><td>string</td><td>``</td></tr><tr><td>pannel-key</td><td>唯一标识，和 current-key 一起标识当前选择的天</td><td>string | number</td><td><code class="">0</code></td></tr></tbody></table><h3>TimeDetail Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>times</td><td>可选择的时间，数组元素同 <code class="">current-time</code></td><td>Array</td><td><code class="">[]</code></td></tr></tbody></table><h3>TimeSelect Event</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>关闭遮罩之后的回调</td><td><code class="">key: string | number, list: []</code></td></tr></tbody></table><h3>TimePannel Event</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击内容的回调</td><td><code class="">pannelKey: string | number</code></td></tr></tbody></table><h3>TimeDetail Event</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>点击时间的回调</td><td><code class="">time: string</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-timeselect-title-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-timeselect-title-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-timeselect-title-width</td><td><em>100%</em></td></tr><tr><td>--cub-timeselect-title-height</td><td><em>50px</em></td></tr><tr><td>--cub-timeselect-title-line-height</td><td><em>50px</em></td></tr><tr><td>--cub-timeselect-pannel-bg-color</td><td><em>#f6f7f9</em></td></tr><tr><td>--cub-timeselect-timepannel-text-color</td><td><em>var(--cub-title-color2)</em></td></tr><tr><td>--cub-timeselect-timepannel-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-timeselect-timepannel-cur-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-timeselect-timepannel-cur-text-color</td><td><em>#333333</em></td></tr><tr><td>--cub-timeselect-timepannel-width</td><td><em>140px</em></td></tr><tr><td>--cub-timeselect-timepannel-height</td><td><em>40px</em></td></tr><tr><td>--cub-timeselect-timepannel-padding</td><td><em>15px</em></td></tr><tr><td>--cub-timeselect-timedetail-padding</td><td><em>0 5px 50px 13px</em></td></tr><tr><td>--cub-timeselect-timedetail-item-width</td><td><em>100px</em></td></tr><tr><td>--cub-timeselect-timedetail-item-height</td><td><em>50px</em></td></tr><tr><td>--cub-timeselect-timedetail-item-line-height</td><td><em>50px</em></td></tr><tr><td>--cub-timeselect-timedetail-item-bg-color</td><td><em>#f6f7f9</em></td></tr><tr><td>--cub-timeselect-timedetail-item-border-radius</td><td><em>5px</em></td></tr><tr><td>--cub-timeselect-timedetail-item-text-color</td><td><em>#333333</em></td></tr><tr><td>--cub-timeselect-timedetail-item-text-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-timeselect-timedetail-item-cur-bg-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-timeselect-timedetail-item-cur-border</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-timeselect-timedetail-item-cur-text-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>',19),I={},w="",T=p({__name:"doc",setup(k,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(x,f)=>{const l=h("demo-block");return i(),r("div",j,[d,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBAY2xpY2s9ImhhbmRsZUPEDTEixCMgIDxzcGFuPjxsYWJlbD7or7fpgInmi6nphY3pgIHml7bpl7Q8L8YdPC/FK8RZL8hayWd0aW1lLXNlbGVjdMVXdi1tb2RlbDp2aXNpYmxlPSLHCTEixR9oZWlnaHQ9IjUwJcYROmN1cnJlbnQta2V5PSLHDUtleccwyR/EaMkgVGltyFFAxnzoAONTxQ5lZMUe5wDp6AEbICNwYW5uZeUAvMUZ6QDAxhggbmHEZDLmnIgyM+aXpSjku4rlpKkpIiDGIOYAozAiIEBjaGFuZ2XIdEPFDjEiPuYBH8tS32rFajTEauaYn+acn+S4ic9tMd9t0m08L+wCCu0A/mRldGFp8wCUxhggOsQNcz0ixQfEeegBWsYI5gF0zHfMUM53yyXGPT4KzCE8c2NyaXB0IGxhbmc9InRz5QKSaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgb25Nb3VudGVkIH0gZnJvbSAndnVlJzvMNXNob3dUb2FzdMkjQGN1YnVp5ACJdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlAOtwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN05AFzPekAzSjIHyAg6AMROiBmYWxzZcZGxTrqAv06IDDRGOUBgTogW10gYXMgYW55W13KI+YBtDogW8kSIOkAkcYBa2V5zVXEAWxpc3Q6IFsnOTowMC0xMDowMCcsICfFCS0xMcgPxAktMTLED13LP+cA/9lsMd9s0WzNXckMyBZ9KTsK7QFi7QMPID0gKOYDBkvEfG51bWJlcikgPT7rAJrlAZMu6wFlID3nA2xLZXnkAe7TJ+UBdCA9IFtd3CEucHVzaOsB4ucBAtFx7AES5wEQ6gD15ADhxwr2AOrlBb3kAOn1ANjoAlYgPSB0cnVl2EzrA8zES2l0ZW3kAKlyaW5nz1dsZXTkAnrEK0luZGV4ID3zAPpbMF1bJ+QAyyddLmZpbmTFKigo5AKPzVfEESA9PT0gxHHpAOkgIGlmICjOZT09IC0x6gNO9gFxzHflAXzPV30gZWxzZd9FzEVzcGxpY2XtAIssIDHMUv0BnOkGduQBVG9iajrkA6DwAafoBKIudGV4dChg5oKo5gdz5LqG77yaJHtKU09OLuYBNGlmecRHKX1g8wIV6QUOKPYCCv8Cmv8Cmv4CmuoDhXJldHVybst9Li4u5gWwKMVeKcpT7QOq0BfpATvKGesCpNFF5QMFxxV95gCX5AGbfTsKPC/mBlY+Cg=="},{default:n(()=>[m]),_:1}),o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBAY2xpY2s9ImhhbmRsZUPEDTIixCMgIDxzcGFuPjxsYWJlbD7or7fpgInmi6nphY3pgIHml7bpl7Q8L8YdPC/FK8RZL8hayWd0aW1lLXNlbGVjdMVXdi1tb2RlbDp2aXNpYmxlPSLHCTIixR9oZWlnaHQ9IjUwJcYROmN1cnJlbnQta2V5PSLHDUtleccwyR/EaMkgVGltyFFAxnzoAONTxQ5lZMUe5wDp6AEbICNwYW5uZeUAvMUZ6QDAxhggbmHEZDLmnIgyM+aXpSjku4rlpKkpIiDGIOYAozAiIEBjaGFuZ2XIdEPFDjIiPuYBH8tS32rFajTEauaYn+acn+S4ic9tMd9t0m08L+wCCu0A/mRldGFp8wCUxhggOsQNcz0ixQcyIuoBWsYI5gF0zHfMUM53yyXGPT4KzCE8c2NyaXB0IGxhbmc9InRz5QKSaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgb25Nb3VudGVkIH0gZnJvbSAndnVlJzvMNXNob3dUb2FzdMkjQGN1YnVp5ACJdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlAOtwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN05AFzPekAzSjIHyAg6AMROiBmYWxzZcZGxTrqAv06IDDRGOUBgTogW10gYXMgYW55W13KI+YBtDogW8kSIOkAkcYBa2V5zVXEAWxpc3Q6IFsnOTowMC0xMDowMCcsICfFCS0xMcgPxAktMTLED13LP+cA/9lsMd9s0WzNXckMyBZ9KTsK7QFi7QMPID0gKOYDBkvEfG51bWJlcikgPT7rAJrlAZMu6wFlID3nA2xLZXnkAe7GAWxldOQBcuQBbiA9zjXEFDIuZmluZCgoaXRlbTrkAYfFZsQOLmtleSA9y1QpylVpZiAoIcdW6gIr8QCWxmFwdXNo6wIwxAHlAVLJWfUBWu0BP8t76AFLffYBQOUGE+QBP/UBLugCrCA9IHRydWXIVtBM6wQixEvmARxzdHJpbmfPV+QBXuQBQUluZGV4+gFgxR/8AWXNOOQBzesA8usBwtpnW8lnXVsn5AFDJ13MeuQDUe0Aw8QRID09PeUAhstt5AHazm09PSAtMf8B5dV/5QH4z199IGVsc2XfTdRNc3BsaWNl7QCbLCAx/wIY6gIY6QdI5AHQb2Jq6gGG6wIj6AV0LnRleHQoYOaCqOYIReS6hu+8miR7SlNPTi7mAURpZnnERyl9YOkAg8p56QXgKPYChv4DHuUDHM0p5AIQ7AMk8QMi6gMg6wRXcmV0dXJuy30uLi7mBoIoxV4pylPtBHzQF+kBO8oZ6wMg0UXlA4HHFX3mAJfkAZt9Owo8L+YHKD4K"},{default:n(()=>[u]),_:1}),g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBAY2xpY2s9ImhhbmRsZUPEDTIixCMgIDxzcGFuPjxsYWJlbD7or7fpgInmi6nphY3pgIHml7bpl7Q8L8YdPC/FK8RZL8hayWd0aW1lLXNlbGVjdMVXdi1tb2RlbDp2aXNpYmxlPSLHCTIixR9oZWlnaHQ9IjUwJcYROmN1cnJlbnQta2V5PSLHDUtleccwyR/EaMkgVGltyFFAxnzoAONTxQ5lZMUe5wDp6AEbICN0aXRs5QEixRhkaXYgY2xhc3M9IsRexkktxSTnASTFJ3DKJcUa5oiR5piv5qCH6aKYPC9w1CpzdWLNLeWJ0jA8L2RpdsYNPC/sAb7tALJwYW5uZeUBbsUZ6QFyxhggbmHkARYy5pyIMjPml6Uo5LuK5aSpKSIgxiDmAVUwIiBAY2hhbmdl6QIJxQ4yIj7mAdHLUt9qxWo0xGrmmJ/mnJ/kuInPbTHfbdJt+wD+ZGV0YWnzAJTGGCA6xA3oAb4yIuoCDMYI5gImzHfMUM53yyXGPT4KzCE8c2NyaXB0IGxhbmc9InRz5QIgaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgb25Nb3VudGVkIH0gZnJvbSAndnVlJzvMNXNob3dUb2FzdMkjQGN1YnVp5ACJdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlAOtwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN05AFzPekAzSjIHyAg6APDOiBmYWxzZcZGxTrqA686IDDRGOUBgTogW10gYXMgYW55W13KI+YBtDogW8kSIOkAkcYBa2V5zVXEAWxpc3Q6IFsnOTowMC0xMDowMCcsICfFCS0xMcgPxAktMTLED13LP+cA/9lsMd9s0WzNXckMyBZ9KTsK7QFi7QMPID0gKOYDBkvEfG51bWJlcikgPT7rAJrlAZMu6wFlID3nA2xLZXnkAe7GAWxldOQBcuQBbiA9zjXEFDIuZmluZCgoaXRlbTrkAYfFZsQOLmtleSA9y1QpylVpZiAoIcdW6gIr8QCWxmFwdXNo6wIwxAHlAVLJWfUBWu0BP8t76AFLffYBQOUGxeQBP/UBLugCrCA9IHRydWXIVtBM6wQixEvmARxzdHJpbmfPV+QBXuQBQUluZGV4+gFgxR/8AWXNOOQBzesA8usBwtpnW8lnXVsn5AFDJ13MeuQDUe0Aw8QRID09PeUAhstt5AHazm09PSAtMf8B5dV/5QH4z199IGVsc2XfTdRNc3BsaWNl7QCbLCAx/wIY6gIY6Qf65AHQb2Jq6gGG6wIj6AV0LnRleHQoYOaCqOYI9+S6hu+8miR7SlNPTi7mAURpZnnERyl9YOkAg8p56QXgKPYChv4DHuUDHM0p5AIQ7AMk8QMi6gMg6wRXcmV0dXJuy30uLi7mBoIoxV4pylPtBHzQF+kBO8oZ6wMg0UXlA4HHFX3mAJfkAZt9Owo8L+YHKOQHMeQGk+QHJi7wCVznALDmCgo6IDUwcHjERcRDLswhbGluZS3IJjHGaHBhZGRpbmc6IDDGEG1hcmdpbtEPMTBweMgUZm9udC1zaXplOiAxNsZrxxV3x1xib2xk6QCC6Am7/wCF+wCFY29sb3I6ICM5OTnGVjzmB6A+Cg=="},{default:n(()=>[b]),_:1}),y])}}});export{T as default,w as excerpt,I as frontmatter};
