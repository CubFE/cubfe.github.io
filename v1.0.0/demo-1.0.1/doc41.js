import{d as p,r as d,b as r,k as t,w as n,aq as c,e as a,l as s,o as h}from"./style_icon.js";const o={class:"markdown-body"},j=c(`<h1>Input 输入框</h1><h3>介绍</h3><p>用户可以在文本框里输入内容。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Input</span>, <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Input</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);
</code></pre><h3>基础用法</h3><p>可以通过 <code class="">v-model</code> 双向绑定输入框的值，通过 <code class="">placeholder</code> 设置占位提示文字。</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入文本"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"自定义类型",-1),m=a("p",null,[s("根据 "),a("code",{class:""},"type"),s(" 属性定义不同类型的输入框，默认值为 "),a("code",{class:""},"text"),s("。")],-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入文本"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.text"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入密码"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.password"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入数字"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.number"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"number"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入整数"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.digit"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"digit"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"password"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"number"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"digit"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"禁用和只读",-1),y=a("p",null,[s("通过 "),a("code",{class:""},"readonly"),s(" 将输入框设置为只读状态，通过 "),a("code",{class:""},"disabled"),s(" 将输入框设置为禁用状态。")],-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"输入框只读"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.readonly"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"输入框已禁用"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.disabled"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"readonly"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"显示清除图标",-1),f=a("p",null,[s("通过设置 "),a("code",{class:""},"clearable"),s(" 在输入过程中展示清除图标。清除按钮，在失去焦点后将隐藏,可通过 "),a("code",{class:""},"showClearIcon"),s(" 设置失去焦点后继续展示清除按钮。")],-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.clear"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"显示清除图标"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"clearSize"),s("="),a("span",{class:"hljs-string"},'"14"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.clear2"'),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"自定义清除图标"'),s(`
    `),a("span",{class:"hljs-attr"},"clearable"),s(`
    `),a("span",{class:"hljs-attr"},"clearSize"),s("="),a("span",{class:"hljs-string"},'"14"'),s(`
    `),a("span",{class:"hljs-attr"},"show-word-limit"),s(`
    `),a("span",{class:"hljs-attr"},"max-length"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
    `),a("span",{class:"hljs-attr"},":showClearIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"clear"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Close"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"12"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"12"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clearValue"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Close"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-input"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Close"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      `),a("span",{class:"hljs-title class_"},"Close"),s(`
    },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"clear"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"clear2"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clearValue"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        state.`),a("span",{class:"hljs-property"},"clear2"),s(" = "),a("span",{class:"hljs-string"},"''"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        clearValue
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"配合表单使用",-1),k=a("p",null,[s("结合 "),a("code",{class:""},"cub-form"),s(" 与 "),a("code",{class:""},"cub-form-item"),s(" 使用")],-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"state"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"文本"'),s(),a("span",{class:"hljs-attr"},"label-align"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.val1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入文本"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"val1"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"格式化输入内容",-1),_=a("p",null,[s("通过 "),a("code",{class:""},"formatter"),s(" 属性可以对输入的内容进行格式化，通过 "),a("code",{class:""},"format-trigger"),s(" 属性可以指定执行格式化的时机。例如只允许输入非数字的字符：")],-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.format1"'),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"在输入时执行格式化"'),s(`
    `),a("span",{class:"hljs-attr"},":formatter"),s("="),a("span",{class:"hljs-string"},'"formatter"'),s(`
    `),a("span",{class:"hljs-attr"},"format-trigger"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.format2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"在失焦时执行格式化"'),s(),a("span",{class:"hljs-attr"},":formatter"),s("="),a("span",{class:"hljs-string"},'"formatter"'),s(),a("span",{class:"hljs-attr"},"format-trigger"),s("="),a("span",{class:"hljs-string"},'"onBlur"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"format1"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"format2"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"formatter"),s(" = ("),a("span",{class:"hljs-params"},"value: string"),s(") => value."),a("span",{class:"hljs-title function_"},"replace"),s("("),a("span",{class:"hljs-regexp"},"/\\d/g"),s(", "),a("span",{class:"hljs-string"},"''"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        formatter
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),X=a("h3",null,"显示字数统计",-1),R=a("p",null,[s("设置 "),a("code",{class:""},"maxlength"),s(" 和 "),a("code",{class:""},"show-word-limit"),s(" 属性后会在底部显示字数统计。")],-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.text"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"show-word-limit"),s(),a("span",{class:"hljs-attr"},"rows"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},"max-length"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入留言"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),B=a("h3",null,"无边框",-1),H=a("p",null,[s("通过 "),a("code",{class:""},"border"),s(" 属性可以设置输入框的边框。")],-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.noBorder1"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"输入框无边框"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.noBorder2"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"输入框无边框"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"noBorder1"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"noBorder2"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),J=a("h3",null,"事件演示",-1),Y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.event"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"事件演示"'),s(" @"),a("span",{class:"hljs-attr"},"clear"),s("="),a("span",{class:"hljs-string"},'"clear"'),s(" @"),a("span",{class:"hljs-attr"},"click-input"),s("="),a("span",{class:"hljs-string"},'"clickInput"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"event"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clear"),s(" = ("),a("span",{class:"hljs-params"},"event: Event"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'clear'"),s(`);
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'clear:'"),s(`, event);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickInput"),s(" = ("),a("span",{class:"hljs-params"},"event: Event"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'clickInput'"),s(`);
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'clickInput:'"),s(`, event);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        clear,
        clickInput
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),V=a("h3",null,"插槽演示",-1),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.slotValue"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"插槽演示"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Ask"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Ask"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s("获取验证码"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-input"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Ask"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      `),a("span",{class:"hljs-title class_"},"Ask"),s(`
    },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"slotValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),S=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>输入值，双向绑定</td><td>string</td><td>-</td></tr><tr><td>type</td><td>输入框类型，支持原生 <code class="">input</code> 标签的所有 <code class="">type</code> 属性，另外还支持 <code class="">number</code> <code class="">digit</code></td><td>string</td><td><code class="">text</code></td></tr><tr><td>placeholder</td><td>输入框为空时占位符</td><td>string</td><td>-</td></tr><tr><td>input-align</td><td>输入框内容对齐方式，可选值 <code class="">left</code>、<code class="">center</code>、<code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>border</td><td>是否显示下边框</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>autofocus</td><td>是否自动获得焦点，<code class="">iOS</code> 系统不支持该属性</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>max-length</td><td>限制最长输入字符</td><td>string ｜ number</td><td>-</td></tr><tr><td>clearable</td><td>展示清除 <code class="">Icon</code></td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>showClearIcon <code class="">4.0.2</code></td><td>是否在失去焦点后，继续展示清除按钮，在设置 <code class="">clearable</code> 时生效</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>clear-size</td><td>清除图标的 <code class="">font-size</code> 大小</td><td>string</td><td><code class="">14</code></td></tr><tr><td>show-word-limit</td><td>是否显示限制最长输入字符，需要设置 <code class="">max-length</code> 属性</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>error</td><td>是否标红</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>formatter</td><td>输入内容格式化函数</td><td><code class="">(val: string) =&gt; string</code></td><td>-</td></tr><tr><td>format-trigger</td><td>格式化函数触发的时机，可选值为 <code class="">onChange</code>、<code class="">onBlur</code></td><td>string</td><td><code class="">onChange</code></td></tr><tr><td>confirm-type</td><td>键盘右下角按钮的文字，仅在<code class="">type=&#39;text&#39;</code>时生效,可选值 <code class="">send</code>：发送、<code class="">search</code>：搜索、<code class="">next</code>：下一个、<code class="">go</code>：前往、<code class="">done</code>：完成</td><td>string</td><td><code class="">done</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:model-value</td><td>输入框内容变化时触发</td><td><code class="">val</code></td></tr><tr><td>focus</td><td>输入框聚焦时触发</td><td><code class="">event</code></td></tr><tr><td>blur</td><td>输入框失焦时触发</td><td><code class="">event</code></td></tr><tr><td>clear</td><td>点击清除按钮时触发</td><td><code class="">event</code></td></tr><tr><td>click</td><td>点击组件时触发</td><td><code class="">event</code></td></tr><tr><td>click-input</td><td>点击输入区域时触发</td><td><code class="">event</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>clear</td><td>自定义输入框尾部清除按钮</td></tr><tr><td>left <code class="">4.0.1</code></td><td>自定义输入框左侧插槽内容</td></tr><tr><td>right <code class="">4.0.1</code></td><td>自定义输入框右侧插槽内容</td></tr></tbody></table><h3>Ref</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>focus <code class="">4.0.6</code></td><td>获取焦点</td></tr><tr><td>blur <code class="">4.0.6</code></td><td>失去焦点</td></tr><tr><td>select <code class="">4.0.6</code></td><td>选择文字</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-input-border-bottom</td><td><em>#eaf0fb</em></td></tr><tr><td>--cub-input-disabled-color</td><td><em>#c8c9cc</em></td></tr><tr><td>--cub-input-required-color</td><td><em>var(--cub-required-color)</em></td></tr><tr><td>--cub-input-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr></tbody></table>',13),z={},N="",M=p({__name:"doc",setup(Q,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(D,F)=>{const l=d("demo-block");return h(),r("div",o,[j,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUudGV4dCIgcGxhY2Vob2xkZXI9Iuivt+i+k+WFpeaWh+acrCIgLz4KPC/KTzxzY3JpcHQgbGFuZz0idHMixGJpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAJsgPclMKMgfICDkALA6ICcnxxF9KcRbxAFyZXR1cm7JSSDGRcgnxiZ9CsULPC/mAMI+Cg=="},{default:n(()=>[i]),_:1}),g,m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgcGxhY2Vob2xkZXI9Iuivt+i+k+WFpeaWh+acrCIgdi1tb2RlbD0ic3RhdGUudGV4dCIgL99DxkPlr4bnoIHRQ3Bhc3N3b3JkIiB0eXBlPSLKEN9Xx1fmlbDlrZfRV251bWJlcshVyA7fU8lTtOaVsNFTZGlnaXTIUscNLz4KPC/qAUo8c2NyaXB0IGxhbmc9InRzIsRwaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5QCLID3JTCjIHyAg5AGNOiAnJyzJEugBTM4W5gENzhTlAM/EE8cSfSnkAJjEAXJldHVybukAhiDmAILIJ8YmfQrFCzwv5gD/Pgo="},{default:n(()=>[u]),_:1}),b,y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgcGxhY2Vob2xkZXI9Iui+k+WFpeahhuWPquivuyIgdi1tb2RlbD0ic3RhdGUucmVhZG9ubHkiIMgKIC/fUMdQt7LnpoHnlKjRU2Rpc2FibGVkIiDICsRTPC/qAK88c2NyaXB0IGxhbmc9InRzIsRyaW1wb3J0IHvkAIljdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAIogPclMKMgfIOkA6DogJycsyRboAKvEFscVfSnEdcYzdHVybsljIMZfyCfGJn0KxQs8L+YA3D4K"},{default:n(()=>[I]),_:1}),v,f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUuY2xlYXIiIHBsYWNlaG9sZGVyPSLmmL7npLrmuIXpmaTlm77moIciIMUoYWJsZcYKU2l6ZT0iMTQiIC/OYAogICDVZDIixRvNaeiHquWumuS5ic1sxSjJcMoOyXTFE3Nob3ctd29yZC1saW1pxnhtYXgtbGVuZ3RoPSI1MMYoOsQpQ8RASWNvbj0idHJ1ZcQa5AC3ICDpASYgI8VkxhYgIDxDbG9zZSB3aWTETDEyIiBoZWlnaHTGDEBjbGljaz0ixTNWYWx1ZSI+PC/FM8dXL+0Bfi/pAR8+CswbPHNjcmlwdCBsYW5nPSJ0cyLELmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzvMIsVyyR9AY3ViZmUvaWNvbnMtyCxleMUsZGVmYXVsdCB75gFPb21wb25lbnRzOscSIMZMxQx9LMUHc2V0dXAoKckhxFd0IOUB0iA96QCdKMgf5wGlOiAnJ8ZAyRMyxBTHE30p5ACVyk/qAUIgPSAoKSA9PslwIMZs5wI+ID0gJ+UA0cVGyAlyZXR1cm7QM+8AgMVfzjp9CsULPC/mAYE+Cg=="},{default:n(()=>[w]),_:1}),C,k,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybSA6bW9kZWwtdmFsdWU9InN0YXRlIsQiyyQtaXRlbSBsYWJlbD0i5paH5pysIsYPLWFsaWduPSJjZW50ZXLHOMc6aW5wdXQgdi3FYMdaLnZhbDEiIHBsYWNlaG9sZGVyPSLor7fovpPlhaXIWjpib3LFGmZhbHNlIiAvxlc8L+0AkMQVyhM+Cjwv6gDgPHNjcmlwdCBsYW5nPSJ0c+UAmWltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB7xXdzZXR1cCgpxw4gIGNvbnN0IOUAziA9yUwoyB8gIOQA4zogJyfHEX0pxFvEAXJldHVybslJIMZFyCfGJn0KxQs8L+YAwj4K"},{default:n(()=>[x]),_:1}),A,_,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQKICAgIHYtbW9kZWw9InN0YXRlLmZvcm1hdDEixRxwbGFjZWhvbGRlcj0i5Zyo6L6T5YWl5pe25omn6KGM5qC85byP5YyWxi46xjx0xC3JC8Ybxg8tdHJpZ2fEH29uQ2hhbmdlxB4v7gCV9gCRMiLxAI3lpLHnhKbzAI33AInzAIVCbHVyIuQAgTwv6gEiPHNjcmlwdCBsYW5nPSJ0cyLkAKBpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UA+HNldHVwKCnHDiAgY29uc3Qg5QDZID3JTCjIH+gBKTE6ICcnLM8VMsQVxxR9KcRzylLGInRlciA9ICh2YWx1ZTogc3RyaW5nKSA9PiDFEi5yZeUBQygvXGQvZywgJyfJRXJldHVybukApiDmAKLwAIF0ZXLIf8Y5fQrFCzwv5gEyPgo="},{default:n(()=>[Z]),_:1}),X,R,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUudGV4dCIgdHlwZT0ixgxzaG93LXdvcmQtbGltaXQgcm93cz0iMiIgbWF4LWxlbmd0aD0iNTAiIHBsYWNlaG9sZGVyPSLor7fovpPlhaXnlZnoqIAiIC8+Cjwv6gCEPHNjcmlwdCBsYW5nPSJ0cyLkAJdpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlANAgPclMKMgfICDkANk6ICcnxxF9KcRbxAFyZXR1cm7JSSDGRcgnxiZ9CsULPC/mAMI+Cg=="},{default:n(()=>[W]),_:1}),B,H,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUubm9Cb3JkZXIxIiA6YsUKPSJmYWxzZSIgcGxhY2Vob2zFFOi+k+WFpeahhuaXoOi+ueahhiIgL99bx1sy31vXWzwv6gDCPHNjcmlwdCBsYW5nPSJ0cyLEemltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOUAsyA9yUwoyB8gIOkBIzogJycs0RcyxBfHFn0pxHfEAXJldHVybsllIMZhyCfGJn0KxQs8L+YA3j4K"},{default:n(()=>[G]),_:1}),J,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUuZXZlbnQiIGNsZWFyYWJsZSBwbGFjZWhvbGRlcj0i5LqL5Lu25ryU56S6IiBAxSY9IsUHxQ9pY2vGV8QVaWNrScQMIiAvPgo8L+oAgDxzY3JpcHQgbGFuZz0idHMi5ACTaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wic2hvd1RvYXN0ySNAY3VidWkvxQbFLGV4xSxkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5QD4ID3JeCjIHyAg5QENOiAnJ8cSfSnEXMo75QD5ID0gKMcpRcQHKSA9PsljIOoArS50ZXh0KCfFNCfJScZLb2xlLmxvZ8ceOicsxnvJJn3QeOgBXN990n3IOfsAgsgj9QCHxwpyZXR1cm7MauQBRizKU+QAyMwPyFXKSsUHCsULPC/mAhI+Cg=="},{default:n(()=>[Y]),_:1}),V,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUuc2xvdFZhbHVlIiBwbGFjZWhvbGRlcj0i5o+S5qe95ryU56S6IiBjbGVhcmFibMVNICDJXCAjbGVmdD4gPEFzaz48L8QGIDwvzHrNLXJpZ2jELuQAjmJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBzaXplPSJzbWFsbCI+6I635Y+W6aqM6K+B56CBPC/KONBnxhzlAOI+CswbPHNjcmlwdCBsYW5nPSJ0cyLELmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzvMIkFza8kdQGN1YmZlL2ljb25zLcYqCiAgZXjFK2RlZmF1bHQge+UA9WNvbXBvbmVudHM6xxIgxEvFCn0sxQdzZXR1cCgpyR/EVnQg5QGWID3pAJooyB8gIOkBqzogJyfHFn0p5ACuxAFyZXR1cm7JTiDGSsgnxiZ9CsULPC/mARU+Cg=="},{default:n(()=>[P]),_:1}),S])}}});export{M as default,N as excerpt,z as frontmatter};
