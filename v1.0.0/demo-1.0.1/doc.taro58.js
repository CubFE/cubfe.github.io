import{d as p,r as h,b as r,k as n,w as t,aq as c,e as a,o as j,l as s}from"./style_icon.js";const g={class:"markdown-body"},d=c(`<h1>Range 区间选择器</h1><h3>介绍</h3><p>滑动输入条，用于在给定的范围内选择一个值。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Range</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Range</span>);
</code></pre><h3>基础用法</h3>`,6),o=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"40"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),i=a("h3",null,"双滑块",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-number"},"80"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"指定范围",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":max"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},":min"),s("="),a("span",{class:"hljs-string"},'"-10"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"设置步长",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":step"),s("="),a("span",{class:"hljs-string"},'"5"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"20"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"隐藏范围",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"hidden-range"),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"30"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=a("h3",null,"隐藏标签",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":hidden-tag"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"40"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"禁用",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{padding: '40px 18px'}"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"50"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"自定义样式",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"40"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"自定义按钮",-1),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
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
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"custom-button"'),s(">")]),s("{{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"60"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=a("h3",null,"垂直方向",-1),J=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".vertical_view"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"180px"),s(`;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".view"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cell"),s(` {
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"40px"),s(),a("span",{class:"hljs-number"},"18px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"vertical_view"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"view"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value10"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"view"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value11"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value10 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"20"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" value11 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-number"},"80"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        value10,
        value11,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),R=a("h3",null,"刻度标记",-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".vertical_view"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"180px"),s(`;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".view"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cell"),s(` {
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"40px"),s(),a("span",{class:"hljs-number"},"18px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cell"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value12"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":marks"),s("="),a("span",{class:"hljs-string"},'"marks"'),s(),a("span",{class:"hljs-attr"},":hiddenRange"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cell"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value13"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":marks"),s("="),a("span",{class:"hljs-string"},'"marks"'),s(),a("span",{class:"hljs-attr"},":hiddenRange"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"vertical_view"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"view"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value14"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":marks"),s("="),a("span",{class:"hljs-string"},'"marks"'),s(),a("span",{class:"hljs-attr"},":hiddenRange"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"view"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(`
          `),a("span",{class:"hljs-attr"},"range"),s(`
          `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value15"'),s(`
          @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
          `),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
          `),a("span",{class:"hljs-attr"},":marks"),s("="),a("span",{class:"hljs-string"},'"marks"'),s(`
          `),a("span",{class:"hljs-attr"},":hiddenRange"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
        >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
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
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前值：'"),s(` + value);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        marks,
        onChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前进度百分比</td><td>number | number[]</td><td><code class="">0</code></td></tr><tr><td>range</td><td>是否开启双滑块模式</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>max</td><td>最大值</td><td>number | string</td><td><code class="">100</code></td></tr><tr><td>min</td><td>最小值</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>step</td><td>步长</td><td>number | string</td><td><code class="">1</code></td></tr><tr><td>disabled</td><td>是否禁用滑块</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>vertical</td><td>是否竖向展示</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>hidden-range</td><td>是否隐藏范围值</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>hidden-tag</td><td>是否隐藏标签</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>active-color</td><td>进度条激活态颜色</td><td>string</td><td><code class="">rgba(250, 44, 25, 1)</code></td></tr><tr><td>inactive-color</td><td>进度条非激活态颜色</td><td>string</td><td><code class="">rgba(255, 163, 154, 1)</code></td></tr><tr><td>button-color</td><td>按钮颜色</td><td>string</td><td><code class="">rgba(250, 44, 25, 1)</code></td></tr><tr><td>marks</td><td>刻度标示</td><td>object{key:number}</td><td><code class="">{}</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>进度变化且结束拖动后触发</td><td><code class="">value: number | number[]</code></td></tr><tr><td>drag-start</td><td>开始拖动时触发</td><td>-</td></tr><tr><td>drag-end</td><td>结束拖动时触发</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>button</td><td>自定义滑动按钮</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-range-tip-font-color</td><td><em>#333333</em></td></tr><tr><td>--cub-range-bg-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-range-bg-color-tick</td><td><em>#fa958c</em></td></tr><tr><td>--cub-range-bar-bg-color</td><td><em>linear-gradient(135deg, var(--cub-primary-color) 0%, var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-range-bar-btn-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-range-bar-btn-width</td><td><em>24px</em></td></tr><tr><td>--cub-range-bar-btn-height</td><td><em>24px</em></td></tr><tr><td>--cub-range-bar-btn-border</td><td><em>1px solid var(--cub-primary-color)</em></td></tr></tbody></table>',11),M={},K="",Q=p({__name:"doc.taro",setup(D,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(B,V)=>{const l=h("demo-block");return j(),r("div",g,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiBAY2jEGD0ib25DxQoiPjwvyS/FbMUPxG0+Cjwv6gCGCjxzY3JpcHQgbGFuZz0idHPFbWltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQge+UAnXNldHVwKCnHDiAgY29uc3Qg5QCfID3ERyg0MCnEPsod6ACsID0gKMUpKSA9PsUcb2xlLmxvZygn5b2T5YmN5YC877yaJyArxlDJR3JldHVybslzIMYfLMkPyGHHEX3GOH0KxQs8L+YA+T4K"},{default:t(()=>[o]),_:1}),i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIMYGdi1tb2RlbD0idmFsdWUiIEBjaMQYPSJvbkPFCiI+PC/JNcVyxQ/Ecz4KPC/qAIwKPHNjcmlwdCBsYW5nPSJ0c8VzaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QCjc2V0dXAoKccOICBjb25zdCDlAJ8gPcRHKFsyMCwgODBdKcREyiPoALIgPSAoxS8pID0+xRxvbGUubG9nKCflvZPliY3lgLzvvJonICvGVslHcmV0dXJuyXkgxh8syQ/IYccRfcY4fQrFCzwv5gD/Pgo="},{default:t(()=>[u]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiA6bWF4PSIxMMQKaW49Ii3EC0BjaMQtPSJvbkPFCiIgL8V3L8h4Pgo8L+oAkQo8c2NyaXB0IGxhbmc9InRzxXhpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvlAKhzZXR1cCgpxw4gIGNvbnN0IOUAqiA9xEcoMCnEPcoc6AChID0gKMUoKSA9PsUcb2xlLmxvZygn5b2T5YmN5YC877yaJyArxk/JR3JldHVybslyIMYfLMkPyGHHEX3GOH0KxQs8L+YA+D4K"},{default:t(()=>[b]),_:1}),v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIsRAZXA9IjUiIEBjaMQiPSJvbkPFCiI+PC/JOcV2xQ/Edz4KPC/qAJAKPHNjcmlwdCBsYW5nPSJ0c8V3aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QCnc2V0dXAoKccOICBjb25zdCDlAKkgPcRHKDIwKcQ+yh3oAKwgPSAoxSkpID0+xRxvbGUubG9nKCflvZPliY3lgLzvvJonICvGUMlHcmV0dXJuyXMgxh8syQ/IYccRfcY4fQrFCzwv5gD5Pgo="},{default:t(()=>[w]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiBoaWRkZW7HHUBjaMQIPSJvbkPFCiI+PC/JPMV5xQ/Eej4KPC/qAJMKPHNjcmlwdCBsYW5nPSJ0c8V6aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QCqc2V0dXAoKccOICBjb25zdCDlAKwgPcRHKDMwKcQ+yh3oAKwgPSAoxSkpID0+xRxvbGUubG9nKCflvZPliY3lgLzvvJonICvGUMlHcmV0dXJuyXMgxh8syQ/IYccRfcY4fQrFCzwv5gD5Pgo="},{default:t(()=>[C]),_:1}),x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiA6aGlkZGVuLXRhZz0idHLEE0BjaMQrPSJvbkPFCiI+PC/JQsV/xQ/kAIA+Cjwv6gCZCjxzY3JpcHQgbGFuxE9z5QCAaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QCwc2V0dXAoKccOICBjb25zdCDlALIgPcRHKDQwKcQ+yh3oAKwgPSAoxSkpID0+xRxvbGUubG9nKCflvZPliY3lgLzvvJonICvGUMlHcmV0dXJuyXMgxh8syQ/IYccRfcY4fQrFCzwv5gD5Pgo="},{default:t(()=>[I]),_:1}),f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiBkaXNhYmxlZCBAY2jEIT0ib25DxQoiPjwvyTjFdcUPxHY+Cjwv6gCPCjxzY3JpcHQgbGFuZz0idHPFdmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQge+UApnNldHVwKCnHDiAgY29uc3Qg5QCoID3ERyg1MCnEPsod6ACsID0gKMUpKSA9PsUcb2xlLmxvZygn5b2T5YmN5YC877yaJyArxlDJR3JldHVybslzIMYfLMkPyGHHEX3GOH0KxQs8L+YA+T4K"},{default:t(()=>[A]),_:1}),k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c3R5bGU9IntwYWRkaW5nOiAnNDBweCAxOHB4J30ixC3HL3JhbmdlxQ8gIHYtbW9kZWw9InZhbHVlIscWaW5hY3RpdmUtY29sb3I9InJnYmEoMTYzLDE4NCwyNTUsMSnIK2J1dHRvbs0pNTIsOTYsMjUwyyfOUGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIMU/NzMsMTQzLDI0MiwxKSAwJSzJFjAxyBYxMDAlyFtAY2jkANE9Im9uQ8UKxhnnAPEv6QDyxBHGD+QBMD4KPC/qAUkKPHNjcmlwdCBsYW5nPSJ0c+UBMGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQge8Vvc2V0dXAoKccOICBjb25zdCDlAVwgPcRHKDQwKcQ+yh3oALYgPSAoxSkpID0+xRxvbGUubG9nKCflvZPliY3lgLzvvJonICvGUMlHcmV0dXJuyXMgxh8syQ/IYccRfcY4fQrFCzwv5gD5Pgo="},{default:t(()=>[H]),_:1}),_,n(l,{"data-type":"vue","data-value":"PHN0eWxlPgogIC5jdXN0b20tYnV0dG9uIHsKICAgIHdpZHRoOiAyNnB4O8URY29sb3I6ICNmZmbGEWZvbnQtc2l6ZTogMTDIJmxpbmUtaGVpZ2h0OiAxOMgXdGV4dC1hbGlnbjogY2VudGVyxhhiYWNrZ3JvdW5kLchgZWUwYTI0xx9vcmRlci1yYWRpdXPEZ8dofQo8L+cAvzx0ZW1wbGF05QDKPGN1Yi1jZWxsIDrFHz0ie3BhZGRpbmc6ICc0MHB45QCTJ30ixC3HL3JhbmdlIHYtbW9kZWw9InZhbHVlIiBAY2jEGD0ib25DxQrHMyAgyXEgI+YBMcgZICA8dmlldyBjbGFzcz0i7QFVIj57eyDFWyB9fTwvxCjJUC/IUcYSPC/pAJbEEcYP5ADUPgrMKwo8c2NyaXB0IGxhbmc9InRz5QChaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJ+QBNmV4xR1kZWZhdWx05wHoc2V0dXAoKccO5AHnbnN05wCrPcRHKDYwKcQ+yh3oARMgPSAoxSkpID0+xRxvbGUubG9nKCflvZPliY3lgLzvvJonICvGUMlHcmV0dXLoAmnEAcUfLMkPyGHHEX3GOH3kAfk75AH65QD5Pgo="},{default:t(()=>[P]),_:1}),Y,n(l,{"data-type":"vue","data-value":"PHN0eWxlPgogIC52ZXJ0aWNhbF92aWV3IHsKICAgIGhlaWdodDogMTgwcHg7xRNwYWRkaW5nOiAxxxN9xT3KNHdpZHRoOiAxNcwgY2VsbMcgyUE0MHB4IDE4yCY8L+cAjDx0ZW1wbGF05QCXPGN1Yi3FPmNsYXNzPSLtAKcixCMgIDzFf8ghyhjHP3JhbmdlIHYtbW9kZWw9InZhbHVlMTAiIEBjaMQaPSJvbkPFCiIgOshfPSJ0cnVlIj48L8lCx2wvxGHfeMx41X4x337ffuQBGcUb5AEaPgo8L+oBMwo8c2NyaXB0IGxhbmc9InRz5QCUaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJ+QBfGV4xR1kZWZhdWx05wGnc2V0dXAoKccOICBjb25zdCDnATwgPcRJKDIwKcRA0B8xxx9bMjAsIDgwXc8l6ADwID0gKMUxKSA9PsUcb2xlLmxvZygn5b2T5YmN5YC877yaJyArxljJR3JldHVybukAmiDHdzAszxExyhHIdMcRfcZL5AKbfTvkAnrlATM+Cg=="},{default:t(()=>[J]),_:1}),R,n(l,{"data-type":"vue","data-value":"PHN0eWxlPgogIC52ZXJ0aWNhbF92aWV3IHsKICAgIGhlaWdodDogMTgwcHg7xRNwYWRkaW5nOiAxxxN9xT3KNHdpZHRoOiAxNcwgY2VsbMcgyUE0MHB4IDE4yCY8L+cAjDx0ZW1wbGF05QCXPMRaxAkgIDxjdWItxUljbGFzcz0ixAwixhzHHnJhbmdlIHYtbW9kZWw9InZhbHVlMTIiIEBjaMQaPSJvbkPFCiIgOm1hcmtzPSLFByIgOmhpZGRlblLGJ3RydWUiPjwvyVTGZsYRxHf/AJLwAJL1AJgz/wCY/wCY/wCY7QCY7QHc6gChxA7JI8wa/AFPNPYAt8hj5wCl/wDI9gDI5ADK6gHw/wChyTzJEyDmAWjLEO8AuzUiyxzyAMXLHfAAz8wb7QDZzBnyAOPJHv8A7O8BwsgaPC/qAwsKPHNjcmlwdCBsYW5nPSJ0c+UBDGltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSfkA2ZleMUvZGVmYXVsdOcDkXNldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclUKMgfICDnA1c6IDYwLM8VMzogWzIwLCA4MF3QGzTUMDXKMMcafSnmBGjoAIjlAWflAIhm6wCDMDogy0wyMDogMssQNDDkBF7KEDYwznw4MDogOMsQMTAw5ATQMPcAg+gCISA9ICjlALcpID0+xRxvbGUubG9nKCflvZPliY3lgLzvvJonICvmAN7JR3JldHVybukBYSAgLi4u5gGiKOUBZynqAIvlAO/KD8h7xxF9xlLkBVN9O+QFMuUCEz4K"},{default:t(()=>[Z]),_:1}),W])}}});export{Q as default,K as excerpt,M as frontmatter};
