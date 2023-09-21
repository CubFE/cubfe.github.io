import{d as h,r as p,b as j,k as n,w as t,aq as c,e as a,l as s,o}from"./style_icon.js";const r={class:"markdown-body"},d=c(`<h1>Checkbox 复选按钮</h1><h3>介绍</h3><p>多选按钮用于选择。</p><h3>安装</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Checkbox</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CheckboxGroup</span>);
</code></pre><h3>基础用法</h3>`,6),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox1"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"复选框"'),s(">")]),s("复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox2"'),s(),a("span",{class:"hljs-attr"},"text-position"),s("="),a("span",{class:"hljs-string"},'"left"'),s(">")]),s("复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkbox1"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"checkbox2"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-checkbox"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-checkbox__label"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),i=a("h3",null,"半选状态",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox9"'),s(),a("span",{class:"hljs-attr"},":indeterminate"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"复选框"'),s(">")]),s("复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkbox9"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"禁用状态",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox3"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("未选时禁用状态"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox4"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("选中时禁用状态"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkbox3"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"checkbox4"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"自定义尺寸",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox5"'),s(),a("span",{class:"hljs-attr"},"icon-size"),s("="),a("span",{class:"hljs-string"},'"25"'),s(">")]),s("自定义尺寸25"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox6"'),s(),a("span",{class:"hljs-attr"},"icon-size"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s("自定义尺寸10"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkbox5"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
        `),a("span",{class:"hljs-attr"},"checkbox6"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"自定义图标",-1),I=a("p",null,[s("通过 slot 自定义图标，建议同时设置"),a("code",{class:""},"icon"),s("和"),a("code",{class:""},"checkedIcon"),s("两个插槽")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox7"'),s(">")]),s(`
    自定义图标
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Check"),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"checkedIcon"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Check"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Check"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Check"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkbox7"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"change 事件",-1),A=a("p",null,[s("值发生变化时，将触发 "),a("code",{class:""},"change"),s(" 事件")],-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeBox3"'),s(">")]),s("change复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkbox"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeBox3"),s(" = ("),a("span",{class:"hljs-params"},"checked: boolean, label: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'change事件触发'"),s(` + checked, label);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), changeBox3 };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"checkboxGroup 使用",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup1"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo-check"'),s(">")]),s("当前选中值"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(">")]),s("{{ checkboxgroup1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkboxgroup1"),s(": ["),a("span",{class:"hljs-string"},"'2'"),s(", "),a("span",{class:"hljs-string"},"'3'"),s(`]
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"checkboxGroup 全选/取消",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup3"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"group"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeBox4"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in checkboxsource"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item.label"'),s(),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"item.label"'),s(">")]),s("{{item.value}}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"btn"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleAll(true)"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 0 20px 0 0"'),s(">")]),s("全选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleAll(false)"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 0 20px 0 0"'),s(">")]),s("取消"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleReverse()"'),s(">")]),s("反选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkboxgroup3"),s(": ["),a("span",{class:"hljs-string"},"'2'"),s(`],
        `),a("span",{class:"hljs-attr"},"checkboxsource"),s(`: [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'组合复选框'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'组合复选框'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'组合复选框'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'组合复选框'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'组合复选框'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'组合复选框'"),s(` }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" group = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeBox4"),s(" = ("),a("span",{class:"hljs-params"},"label: any[]"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},[s("${label.length === state.checkboxsource.length ? "),a("span",{class:"hljs-string"},"'全选'"),s(" : "),a("span",{class:"hljs-string"},"'取消全选'"),s("}")]),s("`")]),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"toggleAll"),s(" = ("),a("span",{class:"hljs-params"},"f: boolean"),s(`) => {
        (group.`),a("span",{class:"hljs-property"},"value"),s(),a("span",{class:"hljs-keyword"},"as"),s(" any)."),a("span",{class:"hljs-title function_"},"toggleAll"),s(`(f);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"toggleReverse"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"`反选`"),s(`);
        group.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"toggleReverse"),s(`();
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), group, changeBox4, toggleAll };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=a("h3",null,"checkboxGroup 使用，限制最大可选数（2 个）",-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"checkboxGroup使用，限制最大可选数（2个）"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup4"'),s(),a("span",{class:"hljs-attr"},":max"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 2px 20px 0 0"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 2px 20px 0 0"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo-check"'),s(">")]),s("选中"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(">")]),s("{{ checkboxgroup4 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkboxgroup4"),s(": ["),a("span",{class:"hljs-string"},"'2'"),s(`]
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),R=a("h3",null,"全选/半选/取消",-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"全选/半选/取消"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},":indeterminate"),s("="),a("span",{class:"hljs-string"},'"indeterminate"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox10"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeBox5"'),s(">")]),s("全选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup5"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"group2"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeBox6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 2px 20px 0 0"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("组合复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, ref, "),a("span",{class:"hljs-title class_"},"Ref"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" group2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(") "),a("span",{class:"hljs-keyword"},"as"),s(),a("span",{class:"hljs-title class_"},"Ref"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"indeterminate"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"checkbox10"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"checkboxgroup5"),s(`: []
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeBox5"),s(" = ("),a("span",{class:"hljs-params"},"value: boolean"),s(`) => {
        group2.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"toggleAll"),s(`(value);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeBox6"),s(" = ("),a("span",{class:"hljs-params"},"label: string[]"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (label."),a("span",{class:"hljs-property"},"length"),s(" === "),a("span",{class:"hljs-number"},"4"),s(`) {
          state.`),a("span",{class:"hljs-property"},"indeterminate"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
          state.`),a("span",{class:"hljs-property"},"checkbox10"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
        } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (label."),a("span",{class:"hljs-property"},"length"),s(" && label."),a("span",{class:"hljs-property"},"length"),s(" < "),a("span",{class:"hljs-number"},"4"),s(`) {
          state.`),a("span",{class:"hljs-property"},"indeterminate"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          data.`),a("span",{class:"hljs-property"},"indeterminate"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
          state.`),a("span",{class:"hljs-property"},"checkbox10"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
        }
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), group2, changeBox5, changeBox6 };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),z=c('<h2>API</h2><h3>Checkbox Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否处于选中状态</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>是否禁用选择</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>text-position</td><td>文本所在的位置，可选值：<code class="">left</code>,<code class="">right</code></td><td>string</td><td><code class="">right</code></td></tr><tr><td>icon-size</td><td><a href="#/zh-CN/component/icon">图标尺寸</a></td><td>string | number</td><td><code class="">18</code></td></tr><tr><td>label</td><td>复选框的文本内容</td><td>string</td><td>-</td></tr><tr><td>indeterminate</td><td>当前是否支持半选状态，一般用在全选操作中</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>shape</td><td>形状，可选值：<code class="">button</code>、<code class="">round</code></td><td>String</td><td><code class="">round</code></td></tr></tbody></table><h3>Checkbox Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>未选中时的图标</td></tr><tr><td>checkedIcon</td><td>选中时的图标</td></tr><tr><td>indeterminate</td><td>半选时的图标</td></tr></tbody></table><h3>CheckboxGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项的标识符，和 <code class="">label</code> 相对应</td><td>Array</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用选择,将用于其下的全部复选框</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>max</td><td>限制选择的数量，不能和<code class="">全选/取消/反选</code>一起使用, <code class="">0</code>表示没有限制</td><td>number</td><td><code class="">0</code></td></tr></tbody></table><h3>Checkbox Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>(state, label), <code class="">state</code> 代表当前状态，<code class="">label</code> 表示当前选中的值</td></tr></tbody></table><h3>CheckboxGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td><code class="">label</code>,<code class="">label</code> 返回一个数组，表示当前选中项的集合</td></tr></tbody></table><h3>CheckboxGroup Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>toggleAll</td><td>全选/取消</td><td>传 <code class="">true</code>,表示全选，传 <code class="">false</code>,表示取消全选</td></tr><tr><td>toggleReverse</td><td>反选</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--cub-checkbox-label-color</td><td><em>#1d1e1e</em></td><td>-</td></tr><tr><td>--cub-checkbox-label-disable-color</td><td><em>#999</em></td><td>-</td></tr><tr><td>--cub-checkbox-icon-disable-color</td><td><em>#d6d6d6</em></td><td>-</td></tr><tr><td>--cub-checkbox-label-margin-left</td><td><em>15px</em></td><td>-</td></tr><tr><td>--cub-checkbox-label-font-size</td><td><em>14px</em></td><td>-</td></tr><tr><td>--cub-checkbox-icon-font-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--cub-checkbox-icon-disable-color2</td><td><em>var(--cub-help-color)</em></td><td>-</td></tr><tr><td>--cub-checkbox-button-padding</td><td><em>5px 18px</em></td><td></td></tr><tr><td>--cub-checkbox-button-font-size</td><td><em>12px</em></td><td></td></tr><tr><td>--cub-checkbox-button-border-radius</td><td><em>15px</em></td><td></td></tr><tr><td>--cub-checkbox-button-border-color</td><td><em>#f6f7f9</em></td><td></td></tr><tr><td>--cub-checkbox-button-background</td><td><em>#f6f7f9</em></td><td></td></tr><tr><td>--cub-checkbox-button-font-color-active</td><td><em>var(--cub-primary-color)</em></td><td></td></tr><tr><td>--cub-checkbox-button-border-color-active</td><td><em>var(--cub-primary-color)</em></td><td></td></tr><tr><td>--cub-checkbox-button-background-active</td><td><em>var(--cub-primary-color)</em></td><td></td></tr></tbody></table>',17),P={},N="",S=h({__name:"doc.taro",setup(X,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(J,W)=>{const l=p("demo-block");return o(),j("div",r,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBIxIiBsYWLEEuWkjemAieahhiI+yQs8L8w+30/EEjIiIHRleHQtcG9zaXRpb249ImxlZnTbUjwv6gCtPHNjcmlwdCBsYW5nPSJ0cyLEcWltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3RhdGUgPcljKMgfICDpASg6IGZhbHNlxkfMGjLHGscZfSnkAIzEAXJldHVybiB7IC4uLuYAsyjFaSkgfcYjfQogxAs8L+YA+OQBAXR5bOUBti7tAWfmAI9kaXNwbGF5OiBmbGV4xkJtYXJnaW4tcmlnaHQ6IDIwcMUYxFjNQV9f5QHkx0jHNeQBmTogMck0PC/Hfg=="},{default:t(()=>[g]),_:1}),i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9oZWNrYm94IHYtbW9kZWw9IsgSOSIgOmluZGV0ZXJtaW5hdGU9InRydWUiIGxhYsQo5aSN6YCJ5qGGIj7JCzwvzFTFdMYSxXU8L+oAjjxzY3JpcHQgbGFuZz0idHMixC1pbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QDRcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8gIOkA+jog5ADqxxh9KcRxxAFyZXR1cm4geyAuLi7mAJgoxU4pIH3GI30KIMQLPC/mAN0+Cg=="},{default:t(()=>[b]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBIzIiBkaXNhYmxlZD7mnKrpgInml7bnpoHnlKjnirbmgIE8L8xB31LEEjTLUumAieS4rd9SPC/qALA8c2NyaXB0IGxhbmc9InRzIsRxaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8gIOkBKzogZmFsc2XGR8waNDogdHJ1ZccYfSnkAIvEAXJldHVybiB7IC4uLuYAsijFaCkgfcYjfQogxAs8L+YA9z4K"},{default:t(()=>[m]),_:1}),k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBI1IiBpY29uLXNpemU9IjI1Ij7oh6rlrprkuYnlsLrlr7gyNTwvzEPfVMQSNs1UMTDRVDEw0FQ8L+oAtDxzY3JpcHQgbGFuZz0idHMixHNpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN0YXRlID3JYyjIHyAg6QEvOiB0cnVlxkbMGTbGGccYfSnkAIrEAXJldHVybiB7IC4uLuYAsSjFZykgfcYjfQogxAs8L+YA9j4K"},{default:t(()=>[x]),_:1}),y,I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBI3IsQlICDoh6rlrprkuYnlm77moIfFFMlIICNpY29uPiA8Q8Q2IC8+IDwvzGTNK8VaZWRJzDJjb2xvcj0icmVkItI+PC/sAKM+CswePHNjcmlwdCBsYW5nPSJ0c+UArmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnO8wq5gCHyB9AY3ViZmUv5ADVcy12dWUtdGFyb8UxZXjFMWRlZmF1bHQge+UA3WNvbXBvbmVudHM6ykssxRtzZXR1cCgpxynEK25zdCBzdOQBCj3pAKAoyB8gIOkBeDogdHJ1ZccYfSnEfcQBcmV0dXJuIHsgLi4u5gDVKMVOKSB9xiN9CiDECzwv5gEaPgo="},{default:t(()=>[f]),_:1}),v,A,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBIiIEBjaGFuZ2XEE8QIQm94MyI+xgzlpI3pgInmoYY8L8xGPgo8L8pjPHNjcmlwdCBsYW5nPSJ0cyLEdmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3RhdGUgPcljKMgfICDoAKo6IGZhbHNlxxh9KcRxykHqAPEgPSAoxTRlZDogYm9vbGVhbiwgbGFiZWw6IHN0cmluZykgPT7pAIHGQm9sZS5sb2coJ8ZJ5LqL5Lu26Kem5Y+RJyAr5gCFZWTHSMl8fcgJcmV0dXJuIHsgLi4u5gEdKOUA0yks7ACaxy99CsU6PC/mAW4+Cg=="},{default:t(()=>[w]),_:1}),C,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3gtZ3JvdXAgdi1tb2RlbD0iyBjFFzEixDDPMiBsYWLEKjEiPue7hOWQiOWkjemAieahhjwvzCjbOzLfO9s7M9872zs03zvEO84S5gEd6gE0ZWxsx2B2aWV3IGNsYXNzPSJkZW1vxjMiPuW9k+WJxF7kuK3lgLw8L8QpyzQ+e3sg7gFjIH19yibHf8VoPC/qAbU8c2NyaXB0IGxhbmc9InRz5QGYaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+UAkHByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3RhdGUgPcljKMgfIO8AxzogWycyJywgJzMnXccjfSk7CscLcmV0dXJuIHsgLi4u5gCkKMVaKSB95ACgICB9CiDECzwv5gDpPgo="},{default:t(()=>[B]),_:1}),_,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3gtZ3JvdXAgdi1tb2RlbD0iyBjFFzMiIHJlZj0ixQ0iIEBjaGFuZ2XEJcQIQm94NCLEUc9TIHYtZm9yPSJpdGVtIGluIMgYc291cmNlIiA6a2V5xh4ubGFiZWwiIDrFCM0UPnt7xQ52YWx1ZX19PC/MYsR1zhLmAMfFGHNwYW4gY2xhc3M9ImJ0buwAomJ1dHRvbiB0eXBlPSJwcmltYXJ55ADXbGljaz0idG9nZ2xlQWxsKHRydWUpIiBzdHlsZT0ibWFyZ2luOiAwIDIwcHggMCAwIj7lhajpgInmAITGVt9n1GdmYWxz32jlj5bmtojfaMVod2FybmluZ9BoUmV2ZXJzZSgpxEyN8wC0PC/kATE+Cjwv6gIkPHNjcmlwdCBsYW5nPSJ0c+UBRGltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMs5AIlIH0gZnJvbSAndnVlJzsKICBleMUvZGVmYXVsdCB75QC3cHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWgoyB8g6QJL5gKeOiBbJzInXcZMzB/mAmo6IFvJGiAgeyDlAlk6ICcxJywg5QJXOiAn57uE5ZCI5aTkARrmoYYnIOcAmtA0Mt801DQz3zTUNDTfNNQ0Nd801DQ23TTJM13HCn0pOwrtAaTmBDbkAaRmKG51bGwp5AHzyh/qBCEgPSAox3VhbnlbXSkgPT7pAfDGL29sZS5sb2coYCR7xSoubGVuZ3RoID09PeYCDC7uAdjIID8gJ+YDhycgOiAn5gMqxxF9YOkAkX3vALrpA3/kAJpmOiBib29sZWFu7wCYKOUA4eYEfiBhc+QAvCkuyTsoZt9f5wN2xGP8APHmA5LqAKwg5gFYxnfHb8dLKNNycmV0dXJuIHsgLi4u5gOLKOUBMCksxkgs6wGI5AOt6AD5fcZL5AHnfTsKPC/mA+4+Cg=="},{default:t(()=>[H]),_:1}),Y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iY2hlY2tib3hHxBXkvb/nlKjvvIzpmZDliLbmnIDlpKflj6/pgInmlbDvvIgy5Liq77yJIsRRy1PGD8gRx1LHaHYtbW9kZWzKasUXNCIgOm1heD0iMsdM0T8gbGFixDcxIiBzdHnkAKttYXJnaW46IDJweCAyMHB4IDAgMCI+57uE5ZCI5aSN5ACloYY8L8xF31wy3z/fPzP/AJvfXN1cNN8/yD/OFuYBdMYcxxrpAZ/yAa52aWV3IGNsYXNzPSJkZW1vxkciPumAieS4rTwvxCDNLT57eyDuAccgfX3MKM50yg7oAJg8L+oCkzxzY3JpcHQgbGFuZz0idHPlAglpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QCAcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8g7wDdOiBbJzInXccefSk7CscLcmV0dXJuIHsgLi4u5gCfKMVVKSB95ACbICB9CiDECzwv5gDkPgo="},{default:t(()=>[Z]),_:1}),R,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i5YWo6YCJL+WNisUHj5bmtogixDDLMsYPyBFoZWNrYm94IDppbmRldGVybWluYXRlPSLNDyIgdi1tb2RlbD0iyDExMCIgQGNoYW5nZcQVxAhCb3g1Ij7mAIM8L8xexnPHFOkAg+0AgecAyNFoxRc1IiByZWY9IsUNMtR5NucA5shWxGXNYCBsYWLEWDEiIHN0eeQBLG1hcmdpbjogMnB4IDIwcHggMCAwIj7nu4TlkIjlpI3pgInmoYbvAMjwAMPfbz0iMt9S31LTUjPfUt9S01I031LRUs4f5gG6xBrKKMgUPC/qArU8c2NyaXB0IGxhbmc9InRz5QGyaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyzkAfIsIFJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFNGRlZmF1bHQge+UAlHByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qg5gJAID3EXChudWxsKSBhc8RkxFfKJ3N0YXRlxSbmAJQoyEYgIO0DFzogZmFsc2XGcsU/6QMd2RvmAtA6IFtdxxt9KTsKzX7qA00gPSAodmFsdWU6IGJvb2xlYW4pID0+6QDUIOcA0C7FJC50b2dnbGVBbGzGNCnoANR92GA2xGDlAgQ6IHN0cmluZ1tdz2FpZsciLmxlbmd0aCA9PT0gNOoBV8QB5QEuLu0BGSA95gD/6ACDyifqASIgPSB0cnXLI30gZWxzZdJzJibmAqnIEDz/AIHnAIHVXcw3ZGF0Yf8At/YAt88kffEBaHJldHVybiB7IC4uLuYCzijFRyks5wGyLOsB5csMNsREyFN9Owo8L+YDMz4K"},{default:t(()=>[G]),_:1}),z])}}});export{S as default,N as excerpt,P as frontmatter};
