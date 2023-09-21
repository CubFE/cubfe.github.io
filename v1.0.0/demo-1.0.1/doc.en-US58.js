import{d as p,r as h,b as r,k as n,w as t,aq as c,e as a,o as j,l as s}from"./style_icon.js";const d={class:"markdown-body"},o=c(`<h1>Range</h1><h3>Intro</h3><p>Slide the input bar to select a value within a given range.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Range</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Range</span>);
</code></pre><h3>Basic Usage</h3>`,6),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"40"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),i=a("h3",null,"Dual thumb",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-number"},"80"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"Range",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":max"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},":min"),s("="),a("span",{class:"hljs-string"},'"-10"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"Step Size",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":step"),s("="),a("span",{class:"hljs-string"},'"5"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"20"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"Hidden Range",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"hidden-range"),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"30"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"Hidden Tag",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":hidden-tag"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"40"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"Disabled",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"50"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"Custom Style",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
      `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"rgba(163,184,255,1)"'),s(`
      `),a("span",{class:"hljs-attr"},"button-color"),s("="),a("span",{class:"hljs-string"},'"rgba(52,96,250,1)"'),s(`
      `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%"'),s(`
      @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
    >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"40"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"Custom Button",-1),Y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".custom-button"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"26px"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"18px"),s(`;
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-number"},"#ee0a24"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"custom-button"'),s(">")]),s("{{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"60"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"Vertical",-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".vertical_div"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"180px"),s(`;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".div"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cell"),s(` {
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"40px"),s(),a("span",{class:"hljs-number"},"18px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"vertical_div"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"div"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value10"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"div"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value11"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value10 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"20"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" value11 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-number"},"80"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'value：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value10,
        value11,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),B=a("h3",null,"Marks",-1),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".vertical_div"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"180px"),s(`;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".div"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cell"),s(` {
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"40px"),s(),a("span",{class:"hljs-number"},"18px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cell"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value12"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":marks"),s("="),a("span",{class:"hljs-string"},'"marks"'),s(),a("span",{class:"hljs-attr"},":hiddenRange"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cell"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value13"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":marks"),s("="),a("span",{class:"hljs-string"},'"marks"'),s(),a("span",{class:"hljs-attr"},":hiddenRange"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"vertical_div"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"div"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value14"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":marks"),s("="),a("span",{class:"hljs-string"},'"marks"'),s(),a("span",{class:"hljs-attr"},":hiddenRange"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"div"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(`
          `),a("span",{class:"hljs-attr"},"range"),s(`
          `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value15"'),s(`
          @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
          `),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
          `),a("span",{class:"hljs-attr"},":marks"),s("="),a("span",{class:"hljs-string"},'"marks"'),s(`
          `),a("span",{class:"hljs-attr"},":hiddenRange"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
        >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"value12"),s(": "),a("span",{class:"hljs-number"},"60"),s(`,
        `),a("span",{class:"hljs-attr"},"value13"),s(": ["),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-number"},"80"),s(`],
        `),a("span",{class:"hljs-attr"},"value14"),s(": "),a("span",{class:"hljs-number"},"60"),s(`,
        `),a("span",{class:"hljs-attr"},"value15"),s(": ["),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-number"},"80"),s(`]
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(" marks = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
        `),a("span",{class:"hljs-number"},"0"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-number"},"20"),s(": "),a("span",{class:"hljs-number"},"20"),s(`,
        `),a("span",{class:"hljs-number"},"40"),s(": "),a("span",{class:"hljs-number"},"40"),s(`,
        `),a("span",{class:"hljs-number"},"60"),s(": "),a("span",{class:"hljs-number"},"60"),s(`,
        `),a("span",{class:"hljs-number"},"80"),s(": "),a("span",{class:"hljs-number"},"80"),s(`,
        `),a("span",{class:"hljs-number"},"100"),s(": "),a("span",{class:"hljs-number"},"100"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => showToast."),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        marks,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),R=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>current progress percentage</td><td>number | number[]</td><td><code class="">0</code></td></tr><tr><td>range</td><td>Whether to enable dual slider mode</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>max</td><td>maximum</td><td>number | string</td><td><code class="">100</code></td></tr><tr><td>min</td><td>minimum</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>step</td><td>step size</td><td>number | string</td><td><code class="">1</code></td></tr><tr><td>disabled</td><td>Whether to disable the slider</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>vertical</td><td>Whether to display vertically</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>hidden-range</td><td>whether to hide range values</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>hidden-tag</td><td>whether to hide the label</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>active-color</td><td>progress bar active color</td><td>string</td><td><code class="">rgba(250, 44, 25, 1)</code></td></tr><tr><td>inactive-color</td><td>Progress bar inactive color</td><td>string</td><td><code class="">rgba(255, 163, 154, 1)</code></td></tr><tr><td>button-color</td><td>button color</td><td>string</td><td><code class="">rgba(250, 44, 25, 1)</code></td></tr><tr><td>marks</td><td>scale mark</td><td>object{key:number}</td><td><code class="">{}</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Triggered when the progress changes and the drag is over</td><td><code class="">value: number | number[]</code></td></tr><tr><td>drag-start</td><td>Triggered when dragging starts</td><td>-</td></tr><tr><td>drag-end</td><td>Triggered when the drag is over</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>button</td><td>custom slide button</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-range-tip-font-color</td><td><em>#333333</em></td></tr><tr><td>--cub-range-bg-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-range-bg-color-tick</td><td><em>#fa958c</em></td></tr><tr><td>--cub-range-bar-bg-color</td><td><em>linear-gradient(135deg, var(--cub-primary-color) 0%, var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-range-bar-btn-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-range-bar-btn-width</td><td><em>24px</em></td></tr><tr><td>--cub-range-bar-btn-height</td><td><em>24px</em></td></tr><tr><td>--cub-range-bar-btn-border</td><td><em>1px solid var(--cub-primary-color)</em></td></tr></tbody></table>',11),X={},Q="",z=p({__name:"doc.en-US",setup(J,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(W,V)=>{const l=h("demo-block");return j(),r("div",d,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiBAY2jEGD0ib25DxQoiPjwvyS/FbMUPxG0+Cjwv6gCGCjxzY3JpcHQgbGFuZz0idHPFbWltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRrdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL+UBAcUzZXjFM2RlZmF1bHQge+UA/HNldHVwKCnHDiAgY29uc3Qg5QD+ID3kAKYoNDApxD7KHegBCyA9ICjFKSkgPT7qALQudGV4dCgnxRrvvJonICvGT8lGcmV0dXJuyXIgxh8syQ/IYMcRfcY4fQrFCzwv5gFXPgo="},{default:t(()=>[g]),_:1}),i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIMYGdi1tb2RlbD0idmFsdWUiIEBjaMQYPSJvbkPFCiI+PC/JNcVyxQ/Ecz4KPC/qAIwKPHNjcmlwdCBsYW5nPSJ0c8VzaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxGt1acwszRkvZGlzdC9wYWNrYWdlcy90xEIv5QEHxTNleMUzZGVmYXVsdCB75QECc2V0dXAoKccOICBjb25zdCDlAP4gPeQApihbMjAsIDgwXSnERMoj6AERID0gKMUvKSA9PuoAui50ZXh0KCfFGu+8micgK8ZVyUZyZXR1cm7JeCDGHyzJD8hgxxF9xjh9CsULPC/mAV0+Cg=="},{default:t(()=>[u]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiA6bWF4PSIxMMQKaW49Ii3EC0BjaMQtPSJvbkPFCiIgL8V3L8h4Pgo8L+oAkQo8c2NyaXB0IGxhbmc9InRzxXhpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEa3VpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi/lAQzFM2V4xTNkZWZhdWx0IHvlAQdzZXR1cCgpxw4gIGNvbnN0IOUBCSA95ACmKDApxD3KHOgBACA9ICjFKCkgPT7qALMudGV4dCgnxRrvvJonICvGTslGcmV0dXJuyXEgxh8syQ/IYMcRfcY4fQrFCzwv5gFWPgo="},{default:t(()=>[b]),_:1}),v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIsRAZXA9IjUiIEBjaMQiPSJvbkPFCiI+PC/JOcV2xQ/Edz4KPC/qAJAKPHNjcmlwdCBsYW5nPSJ0c8V3aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxGt1acwszRkvZGlzdC9wYWNrYWdlcy90xEIv5QELxTNleMUzZGVmYXVsdCB75QEGc2V0dXAoKccOICBjb25zdCDlAQggPeQApigyMCnEPsod6AELID0gKMUpKSA9PuoAtC50ZXh0KCfFGu+8micgK8ZPyUZyZXR1cm7JciDGHyzJD8hgxxF9xjh9CsULPC/mAVc+Cg=="},{default:t(()=>[y]),_:1}),w,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiBoaWRkZW7HHUBjaMQIPSJvbkPFCiI+PC/JPMV5xQ/Eej4KPC/qAJMKPHNjcmlwdCBsYW5nPSJ0c8V6aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxGt1acwszRkvZGlzdC9wYWNrYWdlcy90xEIv5QEOxTNleMUzZGVmYXVsdCB75QEJc2V0dXAoKccOICBjb25zdCDlAQsgPeQApigzMCnEPsod6AELID0gKMUpKSA9PuoAtC50ZXh0KCfFGu+8micgK8ZPyUZyZXR1cm7JciDGHyzJD8hgxxF9xjh9CsULPC/mAVc+Cg=="},{default:t(()=>[C]),_:1}),k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiA6aGlkZGVuLXRhZz0idHLEE0BjaMQrPSJvbkPFCiI+PC/JQsV/xQ/kAIA+Cjwv6gCZCjxzY3JpcHQgbGFuxE9z5QCAaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxGt1acwszRkvZGlzdC9wYWNrYWdlcy90xEIv5QEUxTNleMUzZGVmYXVsdCB75QEPc2V0dXAoKccOICBjb25zdCDlAREgPeQApig0MCnEPsod6AELID0gKMUpKSA9PuoAtC50ZXh0KCfFGu+8micgK8ZPyUZyZXR1cm7JciDGHyzJD8hgxxF9xjh9CsULPC/mAVc+Cg=="},{default:t(()=>[x]),_:1}),I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiBkaXNhYmxlZCBAY2jEIT0ib25DxQoiPjwvyTjFdcUPxHY+Cjwv6gCPCjxzY3JpcHQgbGFuZz0idHPFdmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRrdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL+UBCsUzZXjFM2RlZmF1bHQge+UBBXNldHVwKCnHDiAgY29uc3Qg5QEHID3kAKYoNTApxD7KHegBCyA9ICjFKSkgPT7qALQudGV4dCgnxRrvvJonICvGT8lGcmV0dXJuyXIgxh8syQ/IYMcRfcY4fQrFCzwv5gFXPgo="},{default:t(()=>[A]),_:1}),f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlxQ8gIHYtbW9kZWw9InZhbHVlIscWaW5hY3RpdmUtY29sb3I9InJnYmEoMTYzLDE4NCwyNTUsMSnIK2J1dHRvbs0pNTIsOTYsMjUwyyfOUGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIMU/NzMsMTQzLDI0MiwxKSAwJSzJFjAxyBYxMDAlyFtAY2jkANE9Im9uQ8UKxhnnAPEv6QDyxBHGD+QBMD4KPC/qAUkKPHNjcmlwdCBsYW5nPSJ0c+UBMGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93VG9hc3TJI0BjdWJ1acRrdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL+UBxMUzZXjFM2RlZmF1bHQge+UAznNldHVwKCnHDiAgY29uc3Qg5QG7ID3kAKYoNDApxD7KHegBFSA9ICjFKSkgPT7qALQudGV4dCgnxRrvvJonICvGT8lGcmV0dXJuyXIgxh8syQ/IYMcRfcY4fQrFCzwv5gFXPgo="},{default:t(()=>[H]),_:1}),Z,n(l,{"data-type":"vue","data-value":"PHN0eWxlPgogIC5jdXN0b20tYnV0dG9uIHsKICAgIHdpZHRoOiAyNnB4O8URY29sb3I6ICNmZmbGEWZvbnQtc2l6ZTogMTDIJmxpbmUtaGVpZ2h0OiAxOMgXdGV4dC1hbGlnbjogY2VudGVyxhhiYWNrZ3JvdW5kLchgZWUwYTI0xx9vcmRlci1yYWRpdXPEZ8dofQo8L+cAvzx0ZW1wbGF05QDKPGN1Yi1jZWxsIDrFHz0ie3BhZGRpbmc6ICc0MHB45QCTJ30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiBAY2jEGD0ib25DxQrHMyAgyXEgI+YBMcgZICA8ZGl2IGNsYXNzPSLtAVQiPnt7IMVaIH19PC9kaXbJTi/IT8YSPC/pAJTEEcYP5ADSPgrMKwo8c2NyaXB0IGxhbmc9InRz5QCfaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJ+QBNMkdc2hvd1RvYXN0ySNAY3VidWnEa3VpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQuYBhcUzZXjFM2RlZmF1bHTnAkVzZXR1cCgpxw7kAkRuc3TnAQk95ACmKDYwKcQ+yh3oAXAgPSAoxSkpID0+6gC0LuQCSignxRrvvJonICvGT8lGcmV0dXLoAsXEAcUfLMkPyGDHEX3GOH3kAlU75AJW5QFXPgo="},{default:t(()=>[Y]),_:1}),_,n(l,{"data-type":"vue","data-value":"PHN0eWxlPgogIC52ZXJ0aWNhbF9kaXYgewogICAgaGVpZ2h0OiAxODBweDvFE3BhZGRpbmc6IDHHE33EPMozd2lkdGg6IDE1zB9jZWxsxyDJQDQwcHggMTjIJjwv5wCKPHRlbXBsYXTlAJU8Y3ViLcU+Y2xhc3M9IuwApSLEIiAgPMR9xx/KFsc8cmFuZ2Ugdi1tb2RlbD0idmFsdWUxMCIgQGNoxBo9Im9uQ8UKIiA6yFw9InRydWUiPjwvyULHai9kaXbfdcp11Xsx33vfe8QJ6AETPgo8L+oBLAo8c2NyaXB0IGxhbmc9InRz5QCTaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJ+QBdckdc2hvd1RvYXN0ySNAY3VidWnEa3VpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQuYBxsUzZXjFM2RlZmF1bHTnAf9zZXR1cCgpxw4gIGNvbnN0IOcBlyA95ACoKDIwKcRA0B8xxx9bMjAsIDgwXc8l6AFOID0gKMUxKSA9PuoA2y50ZXh0KCfFGu+8micgK8ZXyUZyZXR1cm7pAJkgx3YwLM8RMcoRyHPHEX3GS+QC8n075ALR5QGRPgo="},{default:t(()=>[G]),_:1}),B,n(l,{"data-type":"vue","data-value":"PHN0eWxlPgogIC52ZXJ0aWNhbF9kaXYgewogICAgaGVpZ2h0OiAxODBweDvFE3BhZGRpbmc6IDHHE33EPMozd2lkdGg6IDE1zB9jZWxsxyDJQDQwcHggMTjIJjwv5wCKPHRlbXBsYXTlAJU8ZGl2xAggIDxjdWItxUhjbGFzcz0ixAwixhzHHnJhbmdlIHYtbW9kZWw9InZhbHVlMTIiIEBjaMQaPSJvbkPFCiIgOm1hcmtzPSLFByIgOmhpZGRlblLGJ3RydWUiPjwvyVTGZsYRxHf/AJLwAJL1AJgz/wCY/wCY/wCY7QCY7AHZ6gCg5AGzxyHMGPwBTDT2ALTIYOcAov8AxfYAxeQAx+kB7P8Ansc5yRMg5gFiyxDvALg1Issc8gDCyx3wAMzMG+0A1swZ8gDgyR7/AOnuAbvHGTwv6gMCCjxzY3JpcHQgbGFuZz0idHPlAQppbXBvcnQgeyByZWYsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUn5ANdyS9zaG93VG9hc3TJI0BjdWJ1aeQAhnVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQuYDrsUzZXjFM2RlZmF1bHTnA+dzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3pALMoyB8gIOcDrjogNjAszxUzOiBbMjAsIDgwXdAbNNQwNcowxxp9KeYEvegAiOUBxOUAiGbrAIMwOiDLTDIwOiAyyxA0MOQEtMoQNjDOfDgwOiA4yxAxMDDkBSUw9wCD6AJ+ID0gKOUAtykgPT7qAaIudGV4dCgn5b2T5YmN5YC877yaJyAr5gDhyUpyZXR1cm7pAWQgIC4uLuYCBCjlAWop6gCO5QDyyg/IfscRfcZS5AWsfTvkBYvlAnU+Cg=="},{default:t(()=>[P]),_:1}),R])}}});export{z as default,Q as excerpt,X as frontmatter};
