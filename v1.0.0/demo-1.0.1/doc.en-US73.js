import{d as p,r as h,b as r,k as l,w as n,aq as c,e as a,l as s,o as j}from"./style_icon.js";const d={class:"markdown-body"},i=c(`<h1>Tabs</h1><h3>Intro</h3><p>It is often used for the storage and display of large blocks of content in the level area, and supports the form of embedded tags and rendering loop data.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPane</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabs</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TabPane</span>);
</code></pre><h3>Basic Usage</h3>`,6),o=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),g=a("h3",null,"Swipeable",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),m=a("h3",null,"Basic Usage - Smile Curve",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),y=a("h3",null,"Match by pane-key",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),I=a("h3",null,"TabPane height auto",-1),f=a("p",null,[s("Automatic height. When set to "),a("code",{class:""},"true"),s(", "),a("code",{class:""},"cub-tabs"),s(" and "),a("code",{class:""},"cub-tabs__content"),s(" will change with the height of the current "),a("code",{class:""},"cub-tab-pane"),s(".")],-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),A=a("h3",null,"Data is rendered asynchronously for 3s",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),_=a("h3",null,"A large number of scrolling operations",-1),x=a("p",null,[s("The automatic scrolling direction of the title bar can be modified through the "),a("code",{class:""},"direction"),s(" property.")],-1),C=a("p",null,[s("In the "),a("code",{class:""},"taro"),s(" environment, "),a("code",{class:""},"name"),s(" must be set to enable the automatic scrolling function of the title bar.")],-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tab4value"'),s(),a("span",{class:"hljs-attr"},"title-scroll"),s(),a("span",{class:"hljs-attr"},"title-gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
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
`)])],-1),z=a("h3",null,"Left and right layout",-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),H=a("h3",null,"Left and Right Layout - Smile Curve",-1),S=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),T=a("h3",null,"tab bar font size large normal small",-1),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),B=a("h3",null,"custom tab bar",-1),Y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'custom 1'"),s(`,
            `),a("span",{class:"hljs-attr"},"paneKey"),s(": "),a("span",{class:"hljs-string"},"'c1'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'custom 2'"),s(`,
            `),a("span",{class:"hljs-attr"},"paneKey"),s(": "),a("span",{class:"hljs-string"},"'c2'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'custom 3'"),s(`,
            `),a("span",{class:"hljs-attr"},"paneKey"),s(": "),a("span",{class:"hljs-string"},"'c3'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { state };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=c('<h2>API</h2><h3>Tabs Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Index of active tab</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>color</td><td>Label selection color</td><td>string</td><td><code class="">#1a1a1a</code></td></tr><tr><td>background</td><td>Tab bar background color</td><td>string</td><td><code class="">#f5f5f5</code></td></tr><tr><td>direction</td><td>Use landscape orientation optional value <code class="">horizontal</code>、<code class="">vertical</code></td><td>string</td><td><code class="">horizontal</code></td></tr><tr><td>type</td><td>Selected the bottom display style optional value <code class="">line</code>、<code class="">smile</code></td><td>string</td><td><code class="">line</code></td></tr><tr><td>swipeable<code class="">4.0.3</code></td><td>Whether to enable gestures to slide left and right</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>title-scroll</td><td>Is the tab bar scrollable</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>ellipsis</td><td>Whether to omit too long title text</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>animated-time</td><td>Switch animation duration, unit ms 0 means no <code class="">animation</code> and <code class="">pane-key</code> is required</td><td>number | string</td><td><code class="">300</code></td></tr><tr><td>title-gutter</td><td>Label gap</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>size</td><td>Tab bar font size optional value <code class="">large</code> <code class="">normal</code> <code class="">small</code></td><td>string</td><td><code class="">normal</code></td></tr><tr><td>auto-height</td><td>Automatic height. When set to <code class="">true</code>, <code class="">cub-tabs</code> and <code class="">cub-tabs__content</code> will change with the height of the current <code class="">cub-tab-pane</code>.</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>sticky</td><td>Whether to use sticky mode</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>top</td><td>Sticky offset top</td><td>number</td><td><code class="">0</code></td></tr><tr><td>name</td><td>In the <code class="">taro</code> environment, <code class="">name</code> must be set to enable the automatic scrolling function of the title bar.</td><td>string</td><td>&#39;&#39;</td></tr></tbody></table><h3>Tabs Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>titles</td><td>Custom Titles Area</td></tr><tr><td>default</td><td>Custom Default Content</td></tr></tbody></table><h3>TabPane Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>title</td><td>string</td><td></td></tr><tr><td>pane-key</td><td>Tag Key , the matching identifier</td><td>string</td><td>默认索引 0,1,2...</td></tr><tr><td>disabled</td><td>whether to disable tabs</td><td>boolean</td><td>false</td></tr></tbody></table><h3>TabPane Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom Default Content</td></tr></tbody></table><h3>Tabs Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Triggered when the label is clicked</td><td>{title,paneKey,disabled}</td></tr><tr><td>change</td><td>Fired when the currently active tab changes</td><td>{title,paneKey,disabled}</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-tabs-tab-smile-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-tabs-titles-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-tabs-titles-item-large-font-size</td><td><em>var(--cub-font-size-3)</em></td></tr><tr><td>--cub-tabs-titles-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-tabs-titles-item-small-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-tabs-titles-item-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-tabs-titles-item-active-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-tabs-titles-background-color</td><td><em>var(--cub-help-color)</em></td></tr><tr><td>--cub-tabs-horizontal-tab-line-color</td><td><em>linear-gradient(90deg,var(--cub-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)</em></td></tr><tr><td>--cub-tabs-horizontal-titles-height</td><td><em>46px</em></td></tr><tr><td>--cub-tabs-horizontal-titles-item-min-width</td><td><em>50px</em></td></tr><tr><td>--cub-tabs-horizontal-titles-item-active-line-width</td><td><em>40px</em></td></tr><tr><td>--cub-tabs-vertical-tab-line-color</td><td><em>linear-gradient(180deg,var(--cub-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)</em></td></tr><tr><td>--cub-tabs-vertical-titles-item-height</td><td><em>40px</em></td></tr><tr><td>--cub-tabs-vertical-titles-item-active-line-height</td><td><em>14px</em></td></tr><tr><td>--cub-tabs-vertical-titles-width</td><td><em>100px</em></td></tr><tr><td>--cub-tabs-titles-item-line-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-tabs-titles-item-line-opacity</td><td><em>1</em></td></tr></tbody></table>',15),R={},M="",F=p({__name:"doc.en-US",setup(X,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(D,J)=>{const t=h("demo-block");return j(),r("div",d,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIxdmFsdWUixCfKKS1wYW5lIHRpdGxlPSJUYWIgMSI+IMUIIDwvzCTfNzLHNzLfN883M8c3M9M3yRJzPgo8L+oA5jxzY3JpcHQgbGFuZz0idHPlANJpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAmXNldHVwKCnHDiAgY29uc3Qg5QEzID3JTCjIHyAg6QFIOiAnMCfHF30pxGHEAXJldHVybiB7x0N9xhh9CiDECzwv5gC6Pgo="},{default:n(()=>[o]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIxdmFsdWUiIHN3aXBlYWJsxTHKMy1wYW5lIHRpdGxlPSJUYWIgMSI+IMUIIDwvzCTfNzLHNzLfN883M8c3M9M3yRJzPgo8L+oA8DxzY3JpcHQgbGFuZz0idHMixC1pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAmXNldHVwKCnHDiAgY29uc3Qg5QE9ID3JTCjIHyAg6QFSOiAnMCfHF30pxGHEAXJldHVybiB7x0N9xhh9CiDECzwv5gC6Pgo="},{default:n(()=>[b]),_:1}),m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIxMXZhbHVlIiB0eXBlPSJzbWlsZSLENco3LXBhbmUgdGl0bGU9IlRhYiAxIj4gxQggPC/MJN83Msc3Mt83zzczxzcz0zfJEnM+Cjwv6gD0PHNjcmlwdCBsYW5nPSJ0c+UA0mltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCZc2V0dXAoKccOICBjb25zdCDlAUEgPclMKMgfICDqAVY6ICcwJ8cYfSnEYsQBcmV0dXJuIHvHRH3GGH0KIMQLPC/mALs+Cg=="},{default:n(()=>[u]),_:1}),y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIydmFsdWUixCfKKS1wYW5lIHRpdGxlPSJUYWIgMSIgxBMta2V5PSIwIj4gxRUgPC/MMd9EMsxEMSIgOmRpc2FibGVkPSJ0cuQAg8VVMt9Vz1UzzFUyx0Qz00TJEnM+Cjwv6gEePHNjcmlwdCBsYW5nPSJ0c+UBCmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCmc2V0dXAoKccOICBjb25zdCDlAWsgPclMKMgfICDpAYA6ICcwJ8cXfSnEYcQBcmV0dXJuIHvHQ33GGH0KIMQLPC/mALo+Cg=="},{default:n(()=>[v]),_:1}),I,f,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIydmFsdWUiIDphdXRvLWhlaWdodD0idHJ1ZSLEO8o9LXBhbmUgdGl0bGU9IlRhYiAxIiDEEy1rZXk9IjDHLiAgPHA+xR48L3DfE98TIDwvzHv/AI4y7ACOMSI+IMUV30TPRDPMRDLHRDPTRMkScz4KPC/qAWs8c2NyaXB0IGxhbmc9InRz5QEVaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAKZzZXR1cCgpxw4gIGNvbnN0IOUBuCA9yUwoyB8gIOkBzTogJzAnxxd9KcRhxAFyZXR1cm4ge8dDfcYYfQogxAs8L+YAuj4K"},{default:n(()=>[w]),_:1}),A,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIzdmFsdWUixCfKKS1wYW5lIHYtZm9yPSJpdGVtIGluIMYzbGlzdDMiIDp0aXRsZT0iJ1RhYiAnKyDEJSI+IMQOe3vEDX19IDwvzE/EYskScz4KPC/qAKM8c2NyaXB0IGxhbmc9InRz5QCPaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAMRzZXR1cCgpxw4gIGNvbnN05gC9ID3JTCjIHyAg6QEFOiAnMCcsyRjlAOo6IEFycmF5LsR5KG5ld8YPKDIpLmtleXMoKSnHL30p5ACR5wCAVGltZW91dCgoKSA9PukAiSDsAUIucHVzaCg5OTnJOH0sIDMwMDDJEHJldHVybiB7xjYgfcYYfQogxAs8L+YBMj4K"},{default:n(()=>[k]),_:1}),_,x,C,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWI0dmFsdWUiIHRpdGxlLXNjcm9sbMcNZ3V0dGVyPSIxMCLERspILXBhbmUgdi1mb3I9Iml0ZW0gaW4gxlJsaXN0NCIgOsVCPSInVGFiICcrIMQlIj4gxA57e8QNfX0gPC/MT8RiyRJzPgo8L+oAwjxzY3JpcHQgbGFuZz0idHPlAI9pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAxHNldHVwKCnHDiAgY29uc3TmAL0gPclMKMgfICDpASQ6ICcwJyzJGOUA6jogQXJyYXkuxHkobmV3xg8oMTApLmtleXMoKSnHMH0p5ACSxAFyZXR1cm4ge8d0fcYYfQogxAs8L+YA6z4K"},{default:n(()=>[G]),_:1}),z,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyBzdHlsZT0iaGVpZ2h0OjMwMHB4IiB2LW1vZGVsPSJzdGF0ZS50YWI1dmFsdWUiIHRpdGxlLXNjcm9sbCBkaXJlY3Rpb249InZlcnRpY2FsIsReymAtcGFuZSB2LWZvcj0iaXRlbSBpbiDGVWxpc3Q1IiA6xCIta2V5xiAiIDrFYz0iJ1RhYiAnKyDFFj4gxA57e8QNfX0gPC/MYMRzyRJzPgo8L+oA6zxzY3JpcHQgbGFuZz0idHPlAKBpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UA1XNldHVwKCnHDiAgY29uc3TmAM4gPclMKMgfICDpATg6ICcwJyzJGOUA+zogQXJyYXkuxHkobmV3xg8oMikua2V5cygpKccvfSnkAJHEAXJldHVybiB7x3N9xhh9CiDECzwv5gDqPgo="},{default:n(()=>[Z]),_:1}),H,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyBzdHlsZT0iaGVpZ2h0OjMwMHB4IiB2LW1vZGVsPSJzdGF0ZS50YWI2dmFsdWUiIHR5cGU9InNtaWzEDWl0bGUtc2Nyb2xsIGRpcmVjdGlvbj0idmVydGljYWwixGvKbS1wYW5lIHYtZm9yPSJpdGVtIGluIMZibGlzdDUiIDrEIi1rZXnGICIgOsVjPSInVGFiICcrIMUWPiDEDnt7xA19fSA8L8xgxHPJEnM+Cjwv6gD4PHNjcmlwdCBsYW5nPSJ0c+UAoGltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QDVc2V0dXAoKccOICBjb25zdOYAziA9yUwoyB8gIOkBRTogJzAnLMkY5QD7OiBBcnJheS7EeShuZXfGDygyKS5rZXlzKCkpxy99KeQAkcQBcmV0dXJuIHvHc33GGH0KIMQLPC/mAOo+Cg=="},{default:n(()=>[S]),_:1}),T,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWIxdmFsdWUiIHNpemU9ImxhcmdlIsQ0yjYtcGFuZSB0aXRsZT0iVGFiIDEiPiDFCCA8L8wk3zcyxzcy3zfPNzPHNzPTN8kSc/8A5+8A525vcm1hbP8A6P8A6Nk3/wDo2Df/AOj/AOj2AOhzbWFs/wDn/wDn2jf/AOfYN/8A58YScz4KPC/qAsI8c2NyaXB0IGxhbmc9InRz5QDSaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAJlzZXR1cCgpxw4gIGNvbnN0IOUBQCA9yUwoyB8gIOkBVTogJzAnxxd9KcRhxAFyZXR1cm4ge8dDfcYYfQogxAs8L+YAuj4K"},{default:n(()=>[P]),_:1}),B,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFicyB2LW1vZGVsPSJzdGF0ZS50YWI3dmFsdWUixCcgIMk2IHYtc2xvdDp0aXRsZXPGHSAgPGRpdscLICBjbGFzcz0iyFtfX8YsLWl0ZW0iySZAY2xpY2vRcD3EJi5wYW5lS2V5yi46x1V7YWN0aXZlOtA2zTd9yzhrZXk9ItZUdi1mb3LGHSBpbiDGU2xpc3Q2yCToAN8gIDxEb25nZG9uZyAvyxVzcGFu/QDvX190ZXh0Ij57e8QOLsUafX08L8Q530jPSGxpbmUiPs46PC9kaXbGDTwv7AHX6gHZLeQA9vwA6iA6xCIt8gEnPiDuALUgPC/MVMRnyRJzPgrsAIE8c2NyaXB0IGxhbmc9InRz5QJEaW1wb3J0IHsgcmXmAcQgfSBmcm9tICd2dWUnO8wi6QFsyCJAY3ViZmUvaWNvbnMtyC9leMUvZGVmYXVsdCB75QD4Y29tcG9uZW50czrNSSzFHnNldHVwKCnHLMQubnN05gEPID3pAJkoyB8gIOkCYTogJ2MxJ8ZGxAHlAT06IFvJESDJVcc65AE2xDZ1c3RvbSDMPMQB5wFmxlfLGucAqd9SxFIy2lIy31LXUjPaUjPNUskMXccKfSnkAZHEAXJldHVybiB75wFVfcYYxDJ9Owo8L+YCGT4K"},{default:n(()=>[Y]),_:1}),W])}}});export{F as default,M as excerpt,R as frontmatter};
