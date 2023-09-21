import{d as p,r,b as d,k as l,w as n,aq as e,e as a,l as s,o as h}from"./style_icon.js";const o={class:"markdown-body"},i=e(`<h1>Input</h1><h3>Intro</h3><p>The user can enter content in the text box.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Input</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Input</span>);
</code></pre><h3>Basic Usage</h3><p>The value of field is bound with <code class="">v-model</code>.</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Text"'),s(" />")]),s(`
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
`)])],-1),g=a("h3",null,"Custom Type",-1),u=a("p",null,[s("Use "),a("code",{class:""},"type"),s(" prop to custom different type fields.")],-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Text"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.text"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Password"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.password"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Number"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.number"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"number"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Digit"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.digit"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"digit"'),s(" />")]),s(`
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
`)])],-1),b=a("h3",null,"Readonly And Disabled",-1),y=a("p",null,[s("Use "),a("code",{class:""},"readonly"),s(" to set the input box to read-only status, and use "),a("code",{class:""},"disabled"),s(" to set the input box to disabled status.")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Readonly"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.readonly"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Disabled"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.disabled"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
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
`)])],-1),w=a("h3",null,"Show Clear Icon",-1),I=a("p",null,"Display the clear icon during input by setting 'clearable'. The clear button will be hidden after losing focus. You can set the clear button to continue to display after losing focus through 'showClearIcon'.",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.clear"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Show Clear Icon"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"clearSize"),s("="),a("span",{class:"hljs-string"},'"14"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.clear2"'),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Custom Clear Icon"'),s(`
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
`)])],-1),x=a("h3",null,"Use With Form",-1),k=a("p",null,[s("Use in combination with "),a("code",{class:""},"cub-form"),s(" and "),a("code",{class:""},"cub-form-item")],-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"state"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Text"'),s(),a("span",{class:"hljs-attr"},"label-align"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.val1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Text"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
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
`)])],-1),_=a("h3",null,"Format Value",-1),A=a("p",null,[s("Use "),a("code",{class:""},"formatter"),s(" prop to format the input value.")],-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.format1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Format On Change"'),s(),a("span",{class:"hljs-attr"},":formatter"),s("="),a("span",{class:"hljs-string"},'"formatter"'),s(),a("span",{class:"hljs-attr"},"format-trigger"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.format2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Format On Blur"'),s(),a("span",{class:"hljs-attr"},":formatter"),s("="),a("span",{class:"hljs-string"},'"formatter"'),s(),a("span",{class:"hljs-attr"},"format-trigger"),s("="),a("span",{class:"hljs-string"},'"onBlur"'),s(" />")]),s(`
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
`)])],-1),Z=a("h3",null,"Show Word Limit",-1),X=a("p",null,[s("After setting the "),a("code",{class:""},"maxlength"),s(" and "),a("code",{class:""},"show-word-limit"),s(" attributes, word count will be displayed at the bottom.")],-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.text"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"show-word-limit"),s(),a("span",{class:"hljs-attr"},"rows"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},"max-length"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Message"'),s(" />")]),s(`
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
`)])],-1),R=a("h3",null,"No Border",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.noBorder1"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"No Border"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.noBorder2"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"No Border"'),s(" />")]),s(`
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
`)])],-1),D=a("h3",null,"Event Demo",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.event"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Event"'),s(" @"),a("span",{class:"hljs-attr"},"clear"),s("="),a("span",{class:"hljs-string"},'"clear"'),s(" @"),a("span",{class:"hljs-attr"},"click-input"),s("="),a("span",{class:"hljs-string"},'"clickInput"'),s(" />")]),s(`
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
`)])],-1),Y=a("h3",null,"Slots Demo",-1),S=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.slotValue"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Slots Demo"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Ask"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Ask"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s("Verification Code"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),P=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Input value, two-way binding</td><td>string</td><td>-</td></tr><tr><td>type</td><td>Input type, support all native types and <code class="">number</code> <code class="">digit</code> type</td><td>string</td><td><code class="">text</code></td></tr><tr><td>placeholder</td><td>Placeholder when the input box is empty</td><td>string</td><td>-</td></tr><tr><td>input-align</td><td>Input align, eg <code class="">left</code>、<code class="">center</code>、<code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>required</td><td>Whether to show required mark</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>border</td><td>Whether to show inner borde</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>disabled</td><td>Whether to disable field</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>autofocus</td><td>Whether to auto focus, unsupported in iOS</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>max-length</td><td>Max length of value</td><td>string ｜ number</td><td>-</td></tr><tr><td>clearable</td><td>Whether to be clearable</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>showClearIcon <code class="">4.0.2</code></td><td>Whether to continue to display the clear button after losing focus, which will take effect when &#39;clearable&#39; is set</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>clear-size</td><td>Clear Icon <code class="">font-size</code></td><td>string</td><td><code class="">14</code></td></tr><tr><td>show-word-limit</td><td>Whether to show word limit, need to set the <code class="">max-length</code> prop</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>error</td><td>Whether to mark the input content in red</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>formatter</td><td>Input value formatter</td><td><code class="">(val: string) =&gt; string</code></td><td>-</td></tr><tr><td>format-trigger</td><td>When to format value, eg <code class="">onChange</code>、<code class="">onBlur</code></td><td>string</td><td><code class="">onChange</code></td></tr><tr><td>confirm-type</td><td>The text of the button in the lower right corner of the keyboard, only valid when <code class="">type=&#39;text&#39;</code>, eg <code class="">send</code>, <code class="">search</code>, <code class="">next</code>, <code class=""> go</code>, <code class="">done</code></td><td>string</td><td><code class="">done</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>update:model-value</td><td>Emitted when input value changed</td><td><code class="">val</code></td></tr><tr><td>focus</td><td>Emitted when input is focused</td><td><code class="">event</code></td></tr><tr><td>blur</td><td>Emitted when input is blurred</td><td><code class="">event</code></td></tr><tr><td>clear</td><td>Emitted when the clear icon is clicked</td><td><code class="">event</code></td></tr><tr><td>click</td><td>Emitted when component is clicked</td><td><code class="">event</code></td></tr><tr><td>click-input</td><td>Emitted when the input is clicked</td><td><code class="">event</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>clear</td><td>Customize the end of the input box to clear the button</td></tr><tr><td>left <code class="">4.0.1</code></td><td>Customize the slot content on the left side of the input box</td></tr><tr><td>right <code class="">4.0.1</code></td><td>Customize the slot content on the right side of the input box</td></tr></tbody></table><h3>Ref</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>focus <code class="">4.0.6</code></td><td>Focus</td></tr><tr><td>blur <code class="">4.0.6</code></td><td>Blur</td></tr><tr><td>select <code class="">4.0.6</code></td><td>Selct</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-input-border-bottom</td><td><em>#eaf0fb</em></td></tr><tr><td>--cub-input-disabled-color</td><td><em>#c8c9cc</em></td></tr><tr><td>--cub-input-required-color</td><td><em>var(--cub-required-color)</em></td></tr><tr><td>--cub-input-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr></tbody></table>',13),z={},N="",U=p({__name:"doc.en-US",setup(Q,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(F,J)=>{const t=r("demo-block");return h(),d("div",o,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUudGV4dCIgcGxhY2Vob2xkZXI9IlTFEy8+CjwvykQ8c2NyaXB0IGxhbmc9InRzIsRXaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5QCQID3JTCjIHyAg5AClOiAnJ8cRfSnEW8QBcmV0dXJuyUkgxkXIJ8YmfQrFCzwv5gDCPgo="},{default:n(()=>[j]),_:1}),g,u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgcGxhY2Vob2xkZXI9IlRleHQiIHYtbW9kZWw9InN0YXRlLnTFFS/cOFBhc3N3b3Jk0TxwyRl0eXBlPSLKEN1QTnVtYmVy0U5uxxfGTMgO3UpEaWdp8gDTZMYWxkjHDS8+Cjwv6gElPHNjcmlwdCBsYW5nPSJ0cyLEZmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOUAiyA9yUwoyB8gIOQBczogJycsyRLoATnOFuYBA84U5QDPxBPHEn0p5ACYxAFyZXR1cm7pAIYg5gCCyCfGJn0KxQs8L+YA/z4K"},{default:n(()=>[m]),_:1}),b,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgcGxhY2Vob2xkZXI9IlJlYWRvbmx5IiB2LW1vZGVsPSJzdGF0ZS5yyRnICiAv3ElEaXNhYmxlZNFJZMkZyArESTwv6gCePHNjcmlwdCBsYW5nPSJ0cyLEaGltcG9ydCB7xH9jdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAIogPclMKMgfIOkA3jogJycsyRboAKvEFscVfSnEdcYzdHVybsljIMZfyCfGJn0KxQs8L+YA3D4K"},{default:n(()=>[f]),_:1}),w,I,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUuY2xlYXIiIHBsYWNlaG9sZGVyPSJTaG93IEPEGSBJY29uIiDFJWFibGXGClNpemU9IjE0IiAvzl0KICAg1WEyIsUbzWZDdXN0b23MaMUkyWzKDslwxRNzaG93LXdvcmQtbGltacZ0bWF4LWxlbmd0aD0iNTDGKDrEKcVexF09InRydWXEGuQAsyAg6QEfICPFZMYWICA8Q2xvc2Ugd2lkxEwxMiIgaGVpZ2h0xgxAY2xpY2s9IsUzVmFsdWUiPjwvxTPHVy/tAXcv6QEbPgrMGzxzY3JpcHQgbGFuZz0idHMixC5pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7zCLFcskfQGN1YmZlL2ljb25zLcgsZXjFLGRlZmF1bHQge+YBT29tcG9uZW50czrHEiDGTMUMfSzFB3NldHVwKCnJIcRXdCDlAc4gPekAnSjIH+cBpTogJyfGQMkTMsQUxxN9KeQAlcpP6gFCID0gKCkgPT7JcCDGbOcCOiA9ICflANHFRsgJcmV0dXJu0DPvAIDFX846fQrFCzwv5gGBPgo="},{default:n(()=>[v]),_:1}),x,k,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybSA6bW9kZWwtdmFsdWU9InN0YXRlIsQiyyQtaXRlbSBsYWJlbD0iVGV4dCLGDS1hbGlnbj0iY2VudGVyxzbHOGlucHV0IHYtxV7HWC52YWwxIiBwbGFjZWhvbGRlcshPOmJvcsUPZmFsc2UiIC/GTDwv7QCDxBXKEz4KPC/qANM8c2NyaXB0IGxhbmc9InRz5QCOaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvFd3NldHVwKCnHDiAgY29uc3Qg5QDDID3JTCjIHyAg5ADYOiAnJ8cRfSnEW8QBcmV0dXJuyUkgxkXIJ8YmfQrFCzwv5gDCPgo="},{default:n(()=>[C]),_:1}),_,A,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUuZm9ybWF0MSIgcGxhY2Vob2xkZXI9IkbFFiBPbiBDaGFuZ2UiIDrGKXTEHskLIiDGCy10cmlnZ8Qbb27IMS/feMU5Mtl4Qmx1ct92zHbGLy8+Cjwv6gD4PHNjcmlwdCBsYW5nPSJ0cyLkAJNpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAMwgPclMKMgfIOcApDE6ICcnLM8VMsQVxxR9KcRzylLGInRlciA9ICh2YWx1ZTogc3RyaW5nKSA9PiDFEi5yZeUBNigvXGQvZywgJyfJRXJldHVybukApiDmAKLwAIF0ZXLIf8Y5fQrFCzwv5gEyPgo="},{default:n(()=>[W]),_:1}),Z,X,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUudGV4dCIgdHlwZT0ixgxzaG93LXdvcmQtbGltaXQgcm93cz0iMiIgbWF4LWxlbmd0aD0iNTAiIHBsYWNlaG9sZGVyPSJNZXNzYWdlIiAvPgo8L8p8PHNjcmlwdCBsYW5nPSJ0cyLkAI9pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAMggPclMKMgfICDkANE6ICcnxxF9KcRbxAFyZXR1cm7JSSDGRcgnxiZ9CsULPC/mAMI+Cg=="},{default:n(()=>[G]),_:1}),R,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUubm9Cb3JkZXIxIiA6YsUKPSJmYWxzZSIgcGxhY2Vob2zFFE5vIMYpIiAv31LHUjLfUs5SPC/qALA8c2NyaXB0IGxhbmc9InRzIsRxaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5QCqID3JTCjIHyAg6QEROiAnJyzRFzLEF8cWfSnEd8QBcmV0dXJuyWUgxmHIJ8YmfQrFCzwv5gDePgo="},{default:n(()=>[B]),_:1}),D,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUuZXZlbnQiIGNsZWFyYWJsZSBwbGFjZWhvbGRlcj0iRcYeQMUfPSLFB8UPaWNrxlDEFWlja0nEDCIgLz4KPC/KeTxzY3JpcHQgbGFuZz0idHMi5ACMaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wic2hvd1RvYXN0ySNAY3VidWkvxQbFLGV4xSxkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5QDxID3JeCjIHyAg5QEGOiAnJ8cSfSnEXMo75QD5ID0gKMcp5QEYKSA9PsljIOoArS50ZXh0KCfFNCfJScZLb2xlLmxvZ8ceOicsxnvJJn3QeOgBXN990n3IOfsAgsgj9QCHxwpyZXR1cm7MauQBRizKU+QAyMwPyFXKSsUHCsULPC/mAhI+Cg=="},{default:n(()=>[H]),_:1}),Y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQgdi1tb2RlbD0ic3RhdGUuc2xvdFZhbHVlIiBwbGFjZWhvbGRlcj0iU2xvdHMgRGVtbyIgY2xlYXJhYmzFSyAgyVogI2xlZnQ+IDxBc2s+PC/EBiA8L8x4zS1yaWdoxC7kAIxidXR0b24gdHlwZT0icHJpbWFyeSIgc2l6ZT0ic21hbGwiPlZlcmlmaWNhdGlvbiBDb2RlPC/KOtBpxhzlAOI+CswbPHNjcmlwdCBsYW5nPSJ0cyLELmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzvMIkFza8kdQGN1YmZlL2ljb25zLcYqCiAgZXjFK2RlZmF1bHQge+UA92NvbXBvbmVudHM6xxIgxEvFCn0sxQdzZXR1cCgpyR/EVnQg5QGWID3pAJooyB8gIOkBqzogJyfHFn0p5ACuxAFyZXR1cm7JTiDGSsgnxiZ9CsULPC/mARU+Cg=="},{default:n(()=>[S]),_:1}),P])}}});export{U as default,N as excerpt,z as frontmatter};
