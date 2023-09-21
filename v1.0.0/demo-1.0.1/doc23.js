import{d as p,r as h,b as j,k as n,w as t,aq as c,e as a,l as s,o as r}from"./style_icon.js";const d={class:"markdown-body"},o=c(`<h1>Countdown 倒计时</h1><h3>介绍</h3><p>用于实时展示倒计时数值，支持毫秒精度。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Countdown</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Countdown</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countdown"),s(),a("span",{class:"hljs-attr"},":end-time"),s("="),a("span",{class:"hljs-string"},'"end"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countdown"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"end"),s(": "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s("() + "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"自定义格式",-1),u=a("p",null,[s("通过设置 "),a("code",{class:""},"format"),s(" 属性可实现不同的倒计时展示文本")],-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countdown"),s(),a("span",{class:"hljs-attr"},":endTime"),s("="),a("span",{class:"hljs-string"},'"end"'),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"DD 天 HH 时 mm 分 ss 秒"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"end"),s(": "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s("() + "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"毫秒级渲染",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countdown"),s(),a("span",{class:"hljs-attr"},":endTime"),s("="),a("span",{class:"hljs-string"},'"end"'),s(),a("span",{class:"hljs-attr"},"millisecond"),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"end"),s(": "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s("() + "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"以服务端的时间为准",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countdown"),s(),a("span",{class:"hljs-attr"},":startTime"),s("="),a("span",{class:"hljs-string"},'"serverTime"'),s(),a("span",{class:"hljs-attr"},":endTime"),s("="),a("span",{class:"hljs-string"},'"end"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countdown"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"serverTime"),s(": "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s("() - "),a("span",{class:"hljs-number"},"20"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`,
        `),a("span",{class:"hljs-attr"},"end"),s(": "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s("() + "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"异步更新结束时间",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countdown"),s(),a("span",{class:"hljs-attr"},":end-time"),s("="),a("span",{class:"hljs-string"},'"asyncEnd"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countdown"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"asyncEnd"),s(": "),a("span",{class:"hljs-number"},"0"),s(`
      });
      `),a("span",{class:"hljs-comment"},"// 模拟异步时间"),s(`
      `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        state.`),a("span",{class:"hljs-property"},"asyncEnd"),s(" = "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s("() + "),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`;
      }, `),a("span",{class:"hljs-number"},"3000"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"控制开始和暂停倒计时",-1),_=a("p",null,[s("通过 "),a("code",{class:""},"paused"),s(" 属性实现倒计时的暂停和重启")],-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countdown"),s(),a("span",{class:"hljs-attr"},":endTime"),s("="),a("span",{class:"hljs-string"},'"end"'),s(),a("span",{class:"hljs-attr"},":paused"),s("="),a("span",{class:"hljs-string"},'"paused"'),s(" @"),a("span",{class:"hljs-attr"},"on-paused"),s("="),a("span",{class:"hljs-string"},'"onpaused"'),s(" @"),a("span",{class:"hljs-attr"},"on-restart"),s("="),a("span",{class:"hljs-string"},'"onrestart"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"position:absolute;right:10px;top:9px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggle"'),s(">")]),s("{{ paused ? 'start' : 'stop' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"paused"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"end"),s(": "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s("() + "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"toggle"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        state.`),a("span",{class:"hljs-property"},"paused"),s(" = !state."),a("span",{class:"hljs-property"},"paused"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onpaused"),s(" = ("),a("span",{class:"hljs-params"},"v"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'paused: '"),s(`, v);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onrestart"),s(" = ("),a("span",{class:"hljs-params"},"v"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'restart: '"),s(`, v);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        toggle,
        onpaused,
        onrestart,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"自定义展示样式",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countdown"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"resetTime"'),s(),a("span",{class:"hljs-attr"},":endTime"),s("="),a("span",{class:"hljs-string"},'"end"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-part-box"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"part-item-symbol"'),s(">")]),s("{{ resetTime.d }}天"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"part-item h"'),s(">")]),s("{{ resetTime.h }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"part-item-symbol"'),s(">")]),s(":"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"part-item m"'),s(">")]),s("{{ resetTime.m }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"part-item-symbol"'),s(">")]),s(":"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"part-item s"'),s(">")]),s("{{ resetTime.s }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countdown"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"end"),s(": "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s("() + "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`,
        `),a("span",{class:"hljs-attr"},"resetTime"),s(`: {
          `),a("span",{class:"hljs-attr"},"d"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(`,
          `),a("span",{class:"hljs-attr"},"h"),s(": "),a("span",{class:"hljs-string"},"'00'"),s(`,
          `),a("span",{class:"hljs-attr"},"m"),s(": "),a("span",{class:"hljs-string"},"'00'"),s(`,
          `),a("span",{class:"hljs-attr"},"s"),s(": "),a("span",{class:"hljs-string"},"'00'"),s(`
        }
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".countdown-part-box"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".part-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex-shrink"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"25px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#e8220e"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"14px"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
  }

  `),a("span",{class:"hljs-selector-class"},".part-item-symbol"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"5px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x=c('<h3>手动控制</h3><p>通过 <code class="">ref</code> 获取到组件实例后，可以调用 <code class="">start</code>、<code class="">pause</code>、<code class="">reset</code> 方法。在使用手动控制时，通过 <code class="">time</code> 属性实现倒计时总时长，单位为毫秒。<code class="">startTime</code>、<code class="">endTime</code> 属性失效</p>',2),R=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countdown"),s(),a("span",{class:"hljs-attr"},"time"),s("="),a("span",{class:"hljs-string"},'"20000"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"Countdown"'),s(),a("span",{class:"hljs-attr"},":autoStart"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"ss:SS"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(),a("span",{class:"hljs-attr"},":column-num"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"start"'),s(">")]),s("开始"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"pause"'),s(">")]),s("暂停"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"reset"'),s(">")]),s("重置"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title class_"},"Countdown"),s(" = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"start"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Countdown"),s("."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"start"),s(`();
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"pause"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Countdown"),s("."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"pause"),s(`();
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"reset"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-title class_"},"Countdown"),s("."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"reset"),s(`();
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { "),a("span",{class:"hljs-title class_"},"Countdown"),s(`, start, pause, reset };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前时间，自定义展示内容时生效</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>start-time</td><td>开始时间</td><td>string | number</td><td><code class="">Date.now()</code></td></tr><tr><td>end-time</td><td>结束时间</td><td>string | number</td><td><code class="">Date.now()</code></td></tr><tr><td>format</td><td>时间格式</td><td>string</td><td><code class="">HH:mm:ss</code></td></tr><tr><td>millisecond</td><td>是否开启毫秒级渲染</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>auto-start</td><td>是否自动开始倒计时</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>time</td><td>倒计时显示时间，单位是毫秒。<code class="">autoStart</code> 为 <code class="">false</code> 时生效</td><td>string | number</td><td><code class="">0</code></td></tr><tr><td>paused</td><td>是否暂停</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>format 格式</h3><table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td>DD</td><td>天数</td></tr><tr><td>HH</td><td>小时</td></tr><tr><td>mm</td><td>分钟</td></tr><tr><td>ss</td><td>秒数</td></tr><tr><td>S</td><td>毫秒（1 位）</td></tr><tr><td>SS</td><td>毫秒（2 位）</td></tr><tr><td>SSS</td><td>毫秒（3 位）</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-end</td><td>倒计时结束时</td><td>剩余时间戳</td></tr><tr><td>on-paused</td><td>暂停时</td><td>剩余时间戳</td></tr><tr><td>on-restart</td><td>暂停时</td><td>剩余时间戳</td></tr></tbody></table><h3>Methods</h3><p>通过 <code class="">ref</code> 可以获取到 <code class="">Countdown</code> 实例并调用实例方法。</p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>start</td><td>开始倒计时</td></tr><tr><td>pause</td><td>暂停倒计时</td></tr><tr><td>reset</td><td>重设倒计时，若 <code class="">auto-start</code>为 <code class="">true</code>，重设后会自动开始倒计时</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-countdown-display</td><td><em>flex</em></td></tr><tr><td>--cub-countdown-color</td><td><em>inherit</em></td></tr><tr><td>--cub-countdown-font-size</td><td><em>initial</em></td></tr></tbody></table>',14),V={},D="",B=p({__name:"doc",setup(W,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(X,M)=>{const l=h("demo-block");return r(),j("div",d,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9vdW50ZG93biA6ZW5kLXRpbWU9ImVuZCI+PC/NIMVBxhPFQjwvylsKPHNjcmlwdMQkaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUvZGVmYXVsdCB75QCac2V0dXAocHJvcHMpxxMgIGNvbnN0IHN0YXRlID3JWSjIHyAgZW5kOiBEYXRlLm5vdygpICsgNjAgKiAxMDAwxyR9KcRzxAFyZXR1cm7JXCAgLi4u5gCiKMViKcgyxjF9CsULPC/oAOg="},{default:t(()=>[i]),_:1}),m,u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9vdW50ZG93biA6ZW5kVGltZT0iZW5kIiBmb3JtYXQ9IkREIOWkqSBISCDml7YgbW0g5YiGIHNzIOenkiIgL8VXL8pYPC/KcTxzY3JpcHTEI2ltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFL2RlZmF1bHQge+UAr3NldHVwKHByb3BzKccTICBjb25zdCBzdGF0ZSA9yVkoyB8gIGVuZDogRGF0ZS5ub3coKSArIDYwICogMTAwMMckfSnEc8QBcmV0dXJuyVwgIC4uLuYAoijFYinIMsYxfQrFCzwv6ADo"},{default:t(()=>[g]),_:1}),b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9vdW50ZG93biA6ZW5kVGltZT0iZW5kIiBtaWxsaXNlY29uZCBmb3JtYXQ9IkhIOm1tOnNzOlNTIiAvxVMvylQ8L8ptPHNjcmlwdMQjaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUvZGVmYXVsdCB75QCrc2V0dXAocHJvcHMpxxMgIGNvbnN0IHN0YXRlID3JWSjIHyAgZW5kOiBEYXRlLm5vdygpICsgNjAgKiAxMDAwxyR9KcRzxAFyZXR1cm7JXCAgLi4u5gCiKMViKcgyxjF9CsULPC/oAOg="},{default:t(()=>[y]),_:1}),w,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9vdW50ZG93biA6c3RhcnRUaW1lPSJzZXJ2ZXLEDCIgOmVuZMYWZW5kIj48L803xVjGE8VZPC/Kcgo8c2NyaXB0xCRpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xS9kZWZhdWx0IHvlALFzZXR1cChwcm9wcynHEyAgY29uc3Qgc3RhdGUgPclZKMgfxDboAMw6IERhdGUubm93KCkgLSAyMCAqIDEwMDAsySxlbmTNJSsgNsglxyR9KeQAn8QBcmV0dXJu6QCIICAuLi7mAM4o5QCOKcgyxjF9CsULPC/oARQ="},{default:t(()=>[I]),_:1}),f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9vdW50ZG93biA6ZW5kLXRpbWU9ImFzeW5jRW5kIj48L80lxUbGE8VHPC/KYAo8c2NyaXB0xCRpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xS9kZWZhdWx0IHvlAJ9zZXR1cChwcm9wcynHEyAgY29uc3Qgc3RhdGUgPclZKMgfICDoALs6IDDHFH0pxGPEAS8vIOaooeaLn+W8guatpeaXtumXtMccc2V0VGltZW91dCgoKSA9PslyIMZuLshZID0gRMQQbm93KCkgKyAzMCAqIDEwMDDIZn0sIDMwMDDJdnJldHVybstQLi4u5gEIKMVaKcg4xjF9CsULPC/oAU4="},{default:t(()=>[v]),_:1}),A,_,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9vdW50ZG93biA6ZW5kVGltZT0iZW5kIiA6cGF1c2VkPSLGCCIgQG9uLcgUb27MFnJlc3RhcnTEF8cLIiAvx2RkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjEwcHg7dG9wOjlweCLGN+cAnWJ1dHRvbiB0eXDEP3JpbWFyeSIgc2l6ZT0ic21hbGwiIEBjbGljaz0idG9nZ2xlIj57eyDmAJsgPyAn5QCMJyA6xApvcCcgfX08L8pYxms8L2RpdsQLxhvmAR88L+oBODxzY3JpcHTEI2ltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFL2RlZmF1bHQge8Vwc2V0dXAocHJvcHMpxxMgIGNvbnN0IHN0YXRlID3JWSjIHyDnANQ6IGZhbHNlLMkXZW5kOiBEYXRlLm5vdygpICsgNjAgKiAxMDAwxyR9KTsKzWXmASkgPSAoKSA9PukAgiDGfi7GaSA9ICHMEOQAzsVOyAnGTOgCB8ROds9PxCJvbGUubG9nKCfGJzogJywgdinZTecCPd9OKCfHKNhPcmV0dXJuyz3mAPPqATboALfMEsdUyhMuLi7mAdco5QEJKc5mfQrFCzwv6AId"},{default:t(()=>[k]),_:1}),Z,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9vdW50ZG93biB2LW1vZGVsPSJyZXNldFRpbWUiIDplbmTECj0iZW5kIsY3ICA8ZGl2IGNsYXNzPSLJQC1wYXJ0LWJveMknzinFH2l0ZW0tc3ltYm9sIj57eyDJay5kIH195aSpPC9kaXbfQSBozzxoIH190DlzcGFu2ns6PC/EId9pIG3PaW3fad9p2mlzz2lz0GnLDTwv7QG4xBXHE+UB2jwv6gHzPHNjcmlwdMQjaW1wb3J0IMRlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFL2RlZmF1bHQge8V6c2V0dXAocHJvcHMpxxMgIGNvbnN0IHN0YXRlID3JWSjIHyAgZW5kOiBEYXRlLm5vdygpICsgNjAgKiAxMDAwLMkl6QD7OslZxAFkOiAnMSfKJyAgaDogJzAwzRNt0hNzxhPJEn3HCn0p5ADdxnF0dXJuy20uLi7mAQwo5QDMKcgyxjHEQX07Cjwv6AFSPHN0eWzlA1Yu8gMDx1dkaXNwbGF5OiBmbGV4xkhhbGlnbuUB9HM6IGNlbnRlcsQZxF8u6gIPxj/ENi1zaHJpbms6IDDGQN9Ty1MgIGp1c3RpZnktY29udGVudM4dd2lkdGg6IDIwcMdHaGVpZ2h0OiAyNcgSYmFja2dyb3XkAcAjZTgyMjBlxhljb2xvcjogI2ZmZsYRZm9udC1zaXplOiAxNMk/b3JkZXItcmFkaXVzOiA2xhh9Cu0A6+cDKecA8m1hcmdpbjogMCDnAIV95AFy5gFp"},{default:t(()=>[C]),_:1}),x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9vdW50ZG93biB0aW1lPSIyMDAwMCIgcmVmPSJDyBwiIDphdXRvU3RhcnQ9ImZhbHNlIiBmb3JtYXQ9InNzOlNTIiAvxWIvzGPFYWdyaWQgOmNvbHVtbi1udW09IjMi6wCAxB8taXRlbT7FD2J1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9InPkAIEiPuW8gOWni8ZsxjE+xg3KTd9h2GFwYXVzZSI+5pqC5YGc32HfYdZhcmVzZXQiPumHjee9rt9h5wFOxBM+Cjwv6gHKPHNjcmlwdMQjaW1wb3J0IHvkAbEsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xS9kZWZhdWx0IHvlAMZzZXR1cChwcm9wcynHEyAgY29uc3Qg6QICID3EYihudWxsKcRJyiPlAZQgPSAoKSA9Psk/IMo7LnZhbHVlLsUoKMk9fc5G5QF530bERsUo2UblAV7fRsRGxSjTRnJldHVybiB7yjEs5gDgLOYAoeQBYsRixzF9CsU8PC/oAZA="},{default:t(()=>[R]),_:1}),H])}}});export{B as default,D as excerpt,V as frontmatter};
