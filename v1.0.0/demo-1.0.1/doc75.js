import{d as p,r as h,b as j,k as t,w as n,aq as c,e as a,l as s,o as r}from"./style_icon.js";const d={class:"markdown-body"},i=c(`<h1>Tabs 选项卡切换</h1><h3>介绍</h3><p>常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPane</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabs</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TabPane</span>);
</code></pre><h3>基础用法</h3>`,6),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab1value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 1"'),s(">")]),s(" Tab 1 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 2"'),s(">")]),s(" Tab 2 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 3"'),s(">")]),s(" Tab 3 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab1value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),o=a("h3",null,"手势滑动切换",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab1value"'),s(),a("span",{class:"hljs-attr"},"swipeable"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 1"'),s(">")]),s(" Tab 1 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 2"'),s(">")]),s(" Tab 2 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 3"'),s(">")]),s(" Tab 3 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab1value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"基础用法-微笑曲线",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab11value"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"smile"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 1"'),s(">")]),s(" Tab 1 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 2"'),s(">")]),s(" Tab 2 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 3"'),s(">")]),s(" Tab 3 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab11value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"通过 pane-key 匹配",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab2value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 1"'),s(),a("span",{class:"hljs-attr"},"pane-key"),s("="),a("span",{class:"hljs-string"},'"0"'),s(">")]),s(" Tab 1 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 2"'),s(),a("span",{class:"hljs-attr"},"pane-key"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(" Tab 2 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 3"'),s(),a("span",{class:"hljs-attr"},"pane-key"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(" Tab 3 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab2value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"TabPane 自动高度",-1),f=a("p",null,"自动高度。设置为 true 时，cub-tabs 和 cub-tabs__content 会随着当前 cub-tab-pane 的高度而发生变化。",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab2value"'),s(),a("span",{class:"hljs-attr"},":auto-height"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 1"'),s(),a("span",{class:"hljs-attr"},"pane-key"),s("="),a("span",{class:"hljs-string"},'"0"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("Tab 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("Tab 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("Tab 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("Tab 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 2"'),s(),a("span",{class:"hljs-attr"},"pane-key"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s(" Tab 2 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 3"'),s(),a("span",{class:"hljs-attr"},"pane-key"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(" Tab 3 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab2value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"数据异步渲染 3s",-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab3value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in state.list3"'),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},`"'Tab '+ item"`),s(">")]),s(" Tab {{item}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab3value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`,
        `),a("span",{class:"hljs-attr"},"list3"),s(": "),a("span",{class:"hljs-title class_"},"Array"),s("."),a("span",{class:"hljs-title function_"},"from"),s("("),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s("("),a("span",{class:"hljs-number"},"2"),s(")."),a("span",{class:"hljs-title function_"},"keys"),s(`())
      });
      `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        state.`),a("span",{class:"hljs-property"},"list3"),s("."),a("span",{class:"hljs-title function_"},"push"),s("("),a("span",{class:"hljs-number"},"999"),s(`);
      }, `),a("span",{class:"hljs-number"},"3000"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"数量多，滚动操作",-1),x=a("p",null,[s("可通过"),a("code",{class:""},"direction"),s("属性修改标题栏自动滚动方向。")],-1),G=a("p",null,[s("在"),a("code",{class:""},"taro"),s("环境下，必须设置"),a("code",{class:""},"name"),s("以开启标题栏自动滚动功能。")],-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab4value"'),s(),a("span",{class:"hljs-attr"},"title-scroll"),s(),a("span",{class:"hljs-attr"},"title-gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"tab4value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in state.list4"'),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},`"'Tab '+ item"`),s(">")]),s(" Tab {{item}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab4value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`,
        `),a("span",{class:"hljs-attr"},"list4"),s(": "),a("span",{class:"hljs-title class_"},"Array"),s("."),a("span",{class:"hljs-title function_"},"from"),s("("),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s("("),a("span",{class:"hljs-number"},"10"),s(")."),a("span",{class:"hljs-title function_"},"keys"),s(`())
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"左右布局",-1),z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height:300px"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab5value"'),s(),a("span",{class:"hljs-attr"},"title-scroll"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in state.list5"'),s(),a("span",{class:"hljs-attr"},":pane-key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},`"'Tab '+ item"`),s(">")]),s(" Tab {{item}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab5value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`,
        `),a("span",{class:"hljs-attr"},"list5"),s(": "),a("span",{class:"hljs-title class_"},"Array"),s("."),a("span",{class:"hljs-title function_"},"from"),s("("),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s("("),a("span",{class:"hljs-number"},"2"),s(")."),a("span",{class:"hljs-title function_"},"keys"),s(`())
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=a("h3",null,"左右布局-微笑曲线",-1),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height:300px"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab6value"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"smile"'),s(),a("span",{class:"hljs-attr"},"title-scroll"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in state.list5"'),s(),a("span",{class:"hljs-attr"},":pane-key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},`"'Tab '+ item"`),s(">")]),s(" Tab {{item}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab6value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`,
        `),a("span",{class:"hljs-attr"},"list5"),s(": "),a("span",{class:"hljs-title class_"},"Array"),s("."),a("span",{class:"hljs-title function_"},"from"),s("("),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s("("),a("span",{class:"hljs-number"},"2"),s(")."),a("span",{class:"hljs-title function_"},"keys"),s(`())
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),T=a("h3",null,"标签栏字体尺寸 large normal small",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab1value"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 1"'),s(">")]),s(" Tab 1 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 2"'),s(">")]),s(" Tab 2 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 3"'),s(">")]),s(" Tab 3 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab1value"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"normal"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 1"'),s(">")]),s(" Tab 1 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 2"'),s(">")]),s(" Tab 2 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 3"'),s(">")]),s(" Tab 3 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab1value"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 1"'),s(">")]),s(" Tab 1 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 2"'),s(">")]),s(" Tab 2 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Tab 3"'),s(">")]),s(" Tab 3 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab1value"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),S=a("h3",null,"自定义标签栏",-1),X=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab7value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:titles"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-tabs__titles-item"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"state.tab7value=item.paneKey"'),s(`
        `),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},'"{active:state.tab7value==item.paneKey}"'),s(`
        `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item.paneKey"'),s(`
        `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in state.list6"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-tabs__titles-item__text"'),s(">")]),s("{{item.title}}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-tabs__titles-item__line"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in state.list6"'),s(),a("span",{class:"hljs-attr"},":pane-key"),s("="),a("span",{class:"hljs-string"},'"item.paneKey"'),s(">")]),s(" {{item.title}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"tab7value"),s(": "),a("span",{class:"hljs-string"},"'c1'"),s(`,
        `),a("span",{class:"hljs-attr"},"list6"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'自定义 1'"),s(`,
            `),a("span",{class:"hljs-attr"},"paneKey"),s(": "),a("span",{class:"hljs-string"},"'c1'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'自定义 2'"),s(`,
            `),a("span",{class:"hljs-attr"},"paneKey"),s(": "),a("span",{class:"hljs-string"},"'c2'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'自定义 3'"),s(`,
            `),a("span",{class:"hljs-attr"},"paneKey"),s(": "),a("span",{class:"hljs-string"},"'c3'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=c('<h2>API</h2><h3>Tabs Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定当前选中标签的标识符</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>color</td><td>标签选中色</td><td>string</td><td><code class="">#1a1a1a</code></td></tr><tr><td>background</td><td>标签栏背景颜色</td><td>string</td><td><code class="">#f5f5f5</code></td></tr><tr><td>direction</td><td>使用横纵方向 可选值 horizontal、vertical</td><td>string</td><td><code class="">horizontal</code></td></tr><tr><td>type</td><td>选中底部展示样式 可选值 line、smile</td><td>string</td><td><code class="">line</code></td></tr><tr><td>swipeable<code class="">4.0.3</code></td><td>是否开启手势左右滑动切换</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>title-scroll</td><td>标签栏是否可以滚动</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>ellipsis</td><td>是否省略过长的标题文字</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>animated-time</td><td>切换动画时长，单位 ms。0 代表无动画，此时必须设置 <code class="">pane-key</code></td><td>number | string</td><td><code class="">300</code></td></tr><tr><td>title-gutter</td><td>标签间隙</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>size</td><td>标签栏字体尺寸大小 可选值 large normal small</td><td>string</td><td><code class="">normal</code></td></tr><tr><td>auto-height</td><td>自动高度。设置为 true 时，cub-tabs 和 cub-tabs__content 会随着当前 cub-tab-pane 的高度而发生变化。</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>sticky</td><td>是否使用粘性布局</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>top</td><td>粘性布局下的吸顶距离</td><td>number</td><td><code class="">0</code></td></tr><tr><td>name</td><td>在<code class="">taro</code>环境下，必须设置<code class="">name</code>以开启标题栏自动滚动功能。</td><td>string</td><td>&#39;&#39;</td></tr></tbody></table><h3>Tabs Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>titles</td><td>自定义导航区域</td></tr><tr><td>default</td><td>自定义内容</td></tr></tbody></table><h3>TabPane Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td></td></tr><tr><td>pane-key</td><td>标签 Key , 匹配的标识符</td><td>string</td><td>默认索引 0,1,2...</td></tr><tr><td>disabled</td><td>是否禁用标签</td><td>boolean</td><td>false</td></tr></tbody></table><h3>TabPane Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容</td></tr></tbody></table><h3>Tabs Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击标签时触发</td><td>{title,paneKey,disabled}</td></tr><tr><td>change</td><td>当前激活的标签改变时触发</td><td>{title,paneKey,disabled}</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-tabs-tab-smile-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-tabs-titles-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-tabs-titles-item-large-font-size</td><td><em>var(--cub-font-size-3)</em></td></tr><tr><td>--cub-tabs-titles-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-tabs-titles-item-small-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-tabs-titles-item-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-tabs-titles-item-active-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-tabs-titles-background-color</td><td><em>var(--cub-help-color)</em></td></tr><tr><td>--cub-tabs-horizontal-tab-line-color</td><td><em>linear-gradient(90deg,var(--cub-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)</em></td></tr><tr><td>--cub-tabs-horizontal-titles-height</td><td><em>46px</em></td></tr><tr><td>--cub-tabs-horizontal-titles-item-min-width</td><td><em>50px</em></td></tr><tr><td>--cub-tabs-horizontal-titles-item-active-line-width</td><td><em>40px</em></td></tr><tr><td>--cub-tabs-vertical-tab-line-color</td><td><em>linear-gradient(180deg,var(--cub-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)</em></td></tr><tr><td>--cub-tabs-vertical-titles-item-height</td><td><em>40px</em></td></tr><tr><td>--cub-tabs-vertical-titles-item-active-line-height</td><td><em>14px</em></td></tr><tr><td>--cub-tabs-vertical-titles-width</td><td><em>100px</em></td></tr><tr><td>--cub-tabs-titles-item-line-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-tabs-titles-item-line-opacity</td><td><em>1</em></td></tr></tbody></table>',15),M={},R="",F=p({__name:"doc",setup(W,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(J,V)=>{const l=h("demo-block");return r(),j("div",d,[i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIxdmFsdWUixCfKKS1wYW5lIHRpdGxlPSJUYWIgMSI+IMUIIDwvzCTfNzLHNzLfN883M8c3M9M3yRJzPgo8L+oA5jxzY3JpcHQgbGFuZz0idHPlANJpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAmXNldHVwKCnHDiAgY29uc3Qg5QEzID3JTCjIHyAg6QFIOiAnMCfHF30pxGHEAXJldHVybiB7x0N9xhh9CiDECzwv5gC6Pgo="},{default:n(()=>[g]),_:1}),o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIxdmFsdWUiIHN3aXBlYWJsxTHKMy1wYW5lIHRpdGxlPSJUYWIgMSI+IMUIIDwvzCTfNzLHNzLfN883M8c3M9M3yRJzPgo8L+oA8DxzY3JpcHQgbGFuZz0idHMixC1pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAmXNldHVwKCnHDiAgY29uc3Qg5QE9ID3JTCjIHyAg6QFSOiAnMCfHF30pxGHEAXJldHVybiB7x0N9xhh9CiDECzwv5gC6Pgo="},{default:n(()=>[b]),_:1}),m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIxMXZhbHVlIiB0eXBlPSJzbWlsZSLENco3LXBhbmUgdGl0bGU9IlRhYiAxIj4gxQggPC/MJN83Msc3Mt83zzczxzcz0zfJEnM+Cjwv6gD0PHNjcmlwdCBsYW5nPSJ0c+UA0mltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCZc2V0dXAoKccOICBjb25zdCDlAUEgPclMKMgfICDqAVY6ICcwJ8cYfSnEYsQBcmV0dXJuIHvHRH3GGH0KIMQLPC/mALs+Cg=="},{default:n(()=>[u]),_:1}),y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIydmFsdWUixCfKKS1wYW5lIHRpdGxlPSJUYWIgMSIgxBMta2V5PSIwIj4gxRUgPC/MMd9EMsxEMSIgOmRpc2FibGVkPSJ0cuQAg8VVMt9Vz1UzzFUyx0Qz00TJEnM+Cjwv6gEePHNjcmlwdCBsYW5nPSJ0c+UBCmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCmc2V0dXAoKccOICBjb25zdCDlAWsgPclMKMgfICDpAYA6ICcwJ8cXfSnEYcQBcmV0dXJuIHvHQ33GGH0KIMQLPC/mALo+Cg=="},{default:n(()=>[v]),_:1}),I,f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIydmFsdWUiIDphdXRvLWhlaWdodD0idHJ1ZSLEO8o9LXBhbmUgdGl0bGU9IlRhYiAxIiDEEy1rZXk9IjDHLiAgPHA+xR48L3DfE98TIDwvzHv/AI4y7ACOMSI+IMUV30TPRDPMRDLHRDPTRMkScz4KPC/qAWs8c2NyaXB0IGxhbmc9InRz5QEVaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAKZzZXR1cCgpxw4gIGNvbnN0IOUBuCA9yUwoyB8gIOkBzTogJzAnxxd9KcRhxAFyZXR1cm4ge8dDfcYYfQogxAs8L+YAuj4K"},{default:n(()=>[w]),_:1}),A,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIzdmFsdWUixCfKKS1wYW5lIHYtZm9yPSJpdGVtIGluIMYzbGlzdDMiIDp0aXRsZT0iJ1RhYiAnKyDEJSI+IMQOe3vEDX19IDwvzE/EYskScz4KPC/qAKM8c2NyaXB0IGxhbmc9InRz5QCPaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAMRzZXR1cCgpxw4gIGNvbnN05gC9ID3JTCjIHyAg6QEFOiAnMCcsyRjlAOo6IEFycmF5LsR5KG5ld8YPKDIpLmtleXMoKSnHL30p5ACR5wCAVGltZW91dCgoKSA9PukAiSDsAUIucHVzaCg5OTnJOH0sIDMwMDDJEHJldHVybiB7xjYgfcYYfQogxAs8L+YBMj4K"},{default:n(()=>[_]),_:1}),k,x,G,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWI0dmFsdWUiIHRpdGxlLXNjcm9sbMcNZ3V0dGVyPSIxMCIgbmFtZT0iyjDEV8pZLXBhbmUgdi1mb3I9Iml0ZW0gaW4gxmNsaXN0NCIgOsVTPSInVGFiICcrIMQlIj4gxA57e8QNfX0gPC/MT8RiyRJzPgo8L+oA0zxzY3JpcHQgbGFuZz0idHPlAI9pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAxHNldHVwKCnHDiAgY29uc3TmAL0gPclMKMgfICDpAQU6ICcwJyzJGOUA6jogQXJyYXkuxHkobmV3xg8oMTApLmtleXMoKSnHMH0p5ACSxAFyZXR1cm4ge8d0fcYYfQogxAs8L+YA6z4K"},{default:n(()=>[C]),_:1}),Z,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyBzdHlsZT0iaGVpZ2h0OjMwMHB4IiB2LW1vZGVsPSJzdGF0ZS50YWI1dmFsdWUiIHRpdGxlLXNjcm9sbCBkaXJlY3Rpb249InZlcnRpY2FsIsReymAtcGFuZSB2LWZvcj0iaXRlbSBpbiDGVWxpc3Q1IiA6xCIta2V5xiAiIDrFYz0iJ1RhYiAnKyDFFj4gxA57e8QNfX0gPC/MYMRzyRJzPgo8L+oA6zxzY3JpcHQgbGFuZz0idHPlAKBpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UA1XNldHVwKCnHDiAgY29uc3TmAM4gPclMKMgfICDpATg6ICcwJyzJGOUA+zogQXJyYXkuxHkobmV3xg8oMikua2V5cygpKccvfSnkAJHEAXJldHVybiB7x3N9xhh9CiDECzwv5gDqPgo="},{default:n(()=>[z]),_:1}),H,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyBzdHlsZT0iaGVpZ2h0OjMwMHB4IiB2LW1vZGVsPSJzdGF0ZS50YWI2dmFsdWUiIHR5cGU9InNtaWzEDWl0bGUtc2Nyb2xsIGRpcmVjdGlvbj0idmVydGljYWwixGvKbS1wYW5lIHYtZm9yPSJpdGVtIGluIMZibGlzdDUiIDrEIi1rZXnGICIgOsVjPSInVGFiICcrIMUWPiDEDnt7xA19fSA8L8xgxHPJEnM+Cjwv6gD4PHNjcmlwdCBsYW5nPSJ0c+UAoGltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QDVc2V0dXAoKccOICBjb25zdOYAziA9yUwoyB8gIOkBRTogJzAnLMkY5QD7OiBBcnJheS7EeShuZXfGDygyKS5rZXlzKCkpxy99KeQAkcQBcmV0dXJuIHvHc33GGH0KIMQLPC/mAOo+Cg=="},{default:n(()=>[P]),_:1}),T,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIxdmFsdWUiIHNpemU9ImxhcmdlIsQ0yjYtcGFuZSB0aXRsZT0iVGFiIDEiPiDFCCA8L8wk3zcyxzcy3zfPNzPHNzPTN8kSc/8A5+8A525vcm1hbP8A6P8A6Nk3/wDo2Df/AOj/AOj2AOhzbWFs/wDn/wDn2jf/AOfYN/8A58YScz4KPC/qAsI8c2NyaXB0IGxhbmc9InRz5QDSaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAJlzZXR1cCgpxw4gIGNvbnN0IOUBQCA9yUwoyB8gIOkBVTogJzAnxxd9KcRhxAFyZXR1cm4ge8dDfcYYfQogxAs8L+YAuj4K"},{default:n(()=>[B]),_:1}),S,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWI3dmFsdWUixCcgIMk2IHYtc2xvdDp0aXRsZXPGHSAgPGRpdscLICBjbGFzcz0iyFtfX8YsLWl0ZW0iySZAY2xpY2vRcD3EJi5wYW5lS2V5yi46x1V7YWN0aXZlOtA2zTd9yzhrZXk9ItZUdi1mb3LGHSBpbiDGU2xpc3Q2yCToAN8gIDxEb25nZG9uZyAvyxVzcGFu/QDvX190ZXh0Ij57e8QOLsUafX08L8Q530jPSGxpbmUiPs46PC9kaXbGDTwv7AHX6gHZLeQA9vwA6iA6xCIt8gEnPiDuALUgPC/MVMRnyRJzPgrsAIE8c2NyaXB0IGxhbmc9InRz5QJEaW1wb3J0IHsgcmXmAcQgfSBmcm9tICd2dWUnO8wi6QFsyCJAY3ViZmUvaWNvbnMtyC9leMUvZGVmYXVsdCB75QD4Y29tcG9uZW50czrNSSzFHnNldHVwKCnHLMQubnN05gEPID3pAJkoyB8gIOkCYTogJ2MxJ8ZGxAHlAT06IFvJESDJVcc65AE2OiAn6Ieq5a6a5LmJIMw/xAHnAWnGWssa5wCs31XHVTLaVTLfVdpVM9pVM81VyQxdxwp9KeQBmsQBcmV0dXJuIHvnAV59xhjEMn07Cjwv5gIiPgo="},{default:n(()=>[X]),_:1}),Y])}}});export{F as default,R as excerpt,M as frontmatter};
