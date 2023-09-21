import{d as h,r as p,b as o,k as n,w as c,aq as t,e as a,l as s,o as r}from"./style_icon.js";const j={class:"markdown-body"},d=t(`<h1>Checkbox</h1><h3>Intro</h3><p>The multiple selection button is used to select.</p><h3>Install</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Checkbox</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CheckboxGroup</span>);
</code></pre><h3>Basic Usage</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox1"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"check box"'),s(">")]),s("check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox2"'),s(),a("span",{class:"hljs-attr"},"text-position"),s("="),a("span",{class:"hljs-string"},'"left"'),s(">")]),s("check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
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
    `),a("span",{class:"hljs-selector-class"},".cub-checkbox__label"),s(` {
      `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Semi selective",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox9"'),s(),a("span",{class:"hljs-attr"},":indeterminate"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"check box"'),s(">")]),s("check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
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
`)])],-1),u=a("h3",null,"Disabled state",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox3"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("Disabled when not selected"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox4"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("Disabled when selected"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
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
`)])],-1),k=a("h3",null,"Custom size",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox5"'),s(),a("span",{class:"hljs-attr"},"icon-size"),s("="),a("span",{class:"hljs-string"},'"25"'),s(">")]),s("Custom size 25"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox6"'),s(),a("span",{class:"hljs-attr"},"icon-size"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s("Custom size 10"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
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
`)])],-1),y=a("h3",null,"Custom icon",-1),I=a("p",null,[s("Customize the icon through the slot, it is recommended to set the "),a("code",{class:""},"icon"),s(" and "),a("code",{class:""},"checkedIcon"),s(" two slots at the same time")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox7"'),s(">")]),s(`
    Custom icon
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Check"),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"checkedIcon"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Check"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Check"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
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
`)])],-1),v=a("h3",null,"change Event",-1),C=a("p",null,[s("When the value changes, the "),a("code",{class:""},"change"),s(" event will be triggered")],-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeBox3"'),s(">")]),s("change check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkbox"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeBox3"),s(" = ("),a("span",{class:"hljs-params"},"state: boolean, label: string"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},[s("${state ? "),a("span",{class:"hljs-string"},"'selected'"),s(" : "),a("span",{class:"hljs-string"},"'cancel'"),s("}")]),s(),a("span",{class:"hljs-subst"},"${label}"),s("`")]),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), changeBox3 };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"use checkboxGroup",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup1"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo-check"'),s(">")]),s("Currently selected value"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("{{ checkboxgroup1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
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
`)])],-1),Z=a("h3",null,"checkboxGroup disabled",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup1"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo-check"'),s(">")]),s("Currently selected value"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("{{ checkboxgroup1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
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
`)])],-1),Y=a("h3",null,"Checkboxgroup select all / cancel",-1),R=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup3"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"group"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeBox4"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in checkboxsource"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item.label"'),s(),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"item.label"'),s(">")]),s("{{item.value}}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"btn"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleAll(true)"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 0 20px 0 0"'),s(">")]),s("Select all"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleAll(false)"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 0 20px 0 0"'),s(">")]),s("cancel"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleReverse()"'),s(">")]),s("reverse selection"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"checkboxgroup3"),s(": ["),a("span",{class:"hljs-string"},"'2'"),s(`],
        `),a("span",{class:"hljs-attr"},"checkboxsource"),s(`: [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Combined check box'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Combined check box'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Combined check box'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Combined check box'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Combined check box'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Combined check box'"),s(` }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" group = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeBox4"),s(" = ("),a("span",{class:"hljs-params"},"label: any[]"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},[s("${label.length === state.checkboxsource.length ? "),a("span",{class:"hljs-string"},"'Select all'"),s(" : "),a("span",{class:"hljs-string"},"'Cancel select all'"),s("}")]),s("`")]),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"toggleAll"),s(" = ("),a("span",{class:"hljs-params"},"f: boolean"),s(`) => {
        (group.`),a("span",{class:"hljs-property"},"value"),s(),a("span",{class:"hljs-keyword"},"as"),s(" any)."),a("span",{class:"hljs-title function_"},"toggleAll"),s(`(f);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"toggleReverse"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"`reverse selection`"),s(`);
        group.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"toggleReverse"),s(`();
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), group, changeBox4, toggleAll };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"use checkboxGroup, Limit the maximum number of options (2)",-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"use checkboxGroup, Limit the maximum number of options (2)"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup4"'),s(),a("span",{class:"hljs-attr"},":max"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 2px 20px 0 0"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 2px 20px 0 0"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo-check"'),s(">")]),s("selected"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("{{ checkboxgroup4 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
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
`)])],-1),W=a("h3",null,"Select all / half / cancel",-1),z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Select all / half / cancel"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},":indeterminate"),s("="),a("span",{class:"hljs-string"},'"indeterminate"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox10"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeBox5"'),s(">")]),s("selectAll"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkboxgroup5"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"group2"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeBox6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 2px 20px 0 0"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("Combined check box"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, ref, "),a("span",{class:"hljs-title class_"},"Ref"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
`)])],-1),X=t('<h2>API</h2><h3>Checkbox Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>If selected</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>Disable selection</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>text-position</td><td>The position of the text, optional value：<code class="">left</code>,<code class="">right</code></td><td>string</td><td><code class="">right</code></td></tr><tr><td>icon-size</td><td><a href="#/en-US/icon">Icon Size</a></td><td>string | number</td><td><code class="">18</code></td></tr><tr><td>label</td><td>Text content of the check box</td><td>string</td><td>-</td></tr><tr><td>indeterminate</td><td>Whether half selection status is currently supported. It is generally used in select all operation</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>shape</td><td>Shape, optional values：<code class="">button</code>、<code class="">round</code></td><td>String</td><td><code class="">round</code></td></tr></tbody></table><h3>Checkbox Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>Icon when not selected</td></tr><tr><td>checkedIcon</td><td>Icon when selected</td></tr><tr><td>indeterminate</td><td>Icon when half selected</td></tr></tbody></table><h3>CheckboxGroup Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Identifier of the currently selected item, corresponding to <code class="">label</code></td><td>Array</td><td>-</td></tr><tr><td>disabled</td><td>Whether to disable the selection, which will be used for all check boxes under it</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>max</td><td>Limit the number of choices. It cannot be used with select all / cancel / invert selection. `0 &#39;means there is no limit</td><td>number</td><td><code class="">0</code></td></tr></tbody></table><h3>Checkbox Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Triggered when the value changes</td><td>(state, label),<code class="">state</code> represents the current state，<code class="">label</code> indicates the currently selected value</td></tr></tbody></table><h3>CheckboxGroup Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Triggered when the value changes</td><td>label,<code class="">label</code> returns an array representing the collection of currently selected items</td></tr></tbody></table><h3>CheckboxGroup Methods</h3><table><thead><tr><th>methodName</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>toggleAll</td><td>Select all / cancel</td><td><code class="">true</code>,to select all，<code class="">false</code>,cancel the selection</td></tr><tr><td>toggleReverse</td><td>Reverse selection</td><td>-</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-checkbox-label-color</td><td><em>#1d1e1e</em></td></tr><tr><td>--cub-checkbox-label-disable-color</td><td><em>#999</em></td></tr><tr><td>--cub-checkbox-icon-disable-color</td><td><em>#d6d6d6</em></td></tr><tr><td>--cub-checkbox-label-margin-left</td><td><em>15px</em></td></tr><tr><td>--cub-checkbox-label-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-checkbox-icon-font-size</td><td><em>18px</em></td></tr><tr><td>--cub-checkbox-icon-disable-color2</td><td><em>var(--cub-help-color)</em></td></tr><tr><td>--cub-checkbox-button-padding</td><td><em>5px 18px</em></td></tr><tr><td>--cub-checkbox-button-font-size</td><td><em>12px</em></td></tr><tr><td>--cub-checkbox-button-border-radius</td><td><em>15px</em></td></tr><tr><td>--cub-checkbox-button-border-color</td><td><em>#f6f7f9</em></td></tr><tr><td>--cub-checkbox-button-background</td><td><em>#f6f7f9</em></td></tr><tr><td>--cub-checkbox-button-font-color-active</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-checkbox-button-border-color-active</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-checkbox-button-background-active</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>',17),Q={},F="",J=h({__name:"doc.en-US",setup(D,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(P,M)=>{const l=p("demo-block");return r(),o("div",j,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBIxIiBsYWLJEiBib3giPskLPC/MPt9PxBIyIiB0ZXh0LXBvc2l0aW9uPSJsZWZ021I8L+oArTxzY3JpcHQgbGFuZz0idHMixHFpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN0YXRlID3JYyjIHyAg6QEoOiBmYWxzZcZHzBoyxxrHGX0p5ACMxAFyZXR1cm4geyAuLi7mALMoxWkpIH3GI30KIMQLPC/mAPjkAQF0eWzlAbYu7QFn5gCPZGlzcGxheTogZmxleMZCbWFyZ2luLXJpZ2h0OiAyMHDHGM0/X1/lAeLHRsk15AGZOiAxyTTlAI7kAI3mAIQ="},{default:c(()=>[i]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNyA9oZWNrYm94IHYtbW9kZWw9IsgSOSIgOmluZGV0ZXJtaW5hdGU9InRydWUiIGxhYskoIGJveCI+yQs8L8xUxXTGEsV1PC/qAI48c2NyaXB0IGxhbmc9InRzIsQtaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+UA0XByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3RhdGUgPcljKMgfICDpAPo6IOQA6scYfSnEccQBcmV0dXJuIHsgLi4u5gCYKMVOKSB9xiN9CiDECzwv5gDdPgo="},{default:c(()=>[b]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBIzIiBkaXNhYmxlZD5Exwkgd2hlbiBub3Qgc2VsZWN0ZWQ8L8xG31fEEjTZV9hTPC/qALY8c2NyaXB0IGxhbmc9InRzIsRyaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8gIOkBMTogZmFsc2XGR8waNDogdHJ1ZccYfSnkAIvEAXJldHVybiB7IC4uLuYAsijFaCkgfcYjfQogxAs8L+YA9z4K"},{default:c(()=>[m]),_:1}),k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBI1IiBpY29uLXNpemU9IjI1Ij5DdXN0b20gxBEgMjU8L8xA31HEEjbNUTEwzlExMNBRPC/qAK48c2NyaXB0IGxhbmc9InRzIsRwaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8gIOkBKTogdHJ1ZcZGzBk2xhnHGH0p5ACKxAFyZXR1cm4geyAuLi7mALEoxWcpIH3GI30KIMQLPC/mAPY+Cg=="},{default:c(()=>[x]),_:1}),y,I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBI3IsQlICBDdXN0b20gaWNvbsUQyUQgI8QUPiA8Q8QyIC8+IDwvzGDNK8VWZWRJzDJjb2xvcj0icmVkItI+PC/sAJ8+CswePHNjcmlwdCBsYW5nPSJ0c+UAqmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnO8wq5gCHyB9AY3ViZmUv5ADVcy3ILGV4xSxkZWZhdWx0IHvlANhjb21wb25lbnRzOspGLMUbc2V0dXAoKccpxCtuc3Qgc3TkAQU96QCbKMgfICDpAW86IHRydWXHGH0pxH3EAXJldHVybiB7IC4uLuYA0CjFTikgfcYjfQogxAs8L+YBFT4K"},{default:c(()=>[f]),_:1}),v,C,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3ggdi1tb2RlbD0iyBIiIEBjaGFuZ2XEE8QIQm94MyI+xgwgxSYgYm94PC/MRz4KPC/KZDxzY3JpcHQgbGFuZz0idHMixHdpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzvMKnNob3dUb2FzdMkjQGN1YnVpxHt1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA96QDCKMgfIOYBGGJveDogZmFsc2XHGH0pxHHKQeoBUSA9ICjFTzogYm9vbGVhbiwgbGFiZWw6IHN0cmluZykgPT7JfyDqAQsudGV4dChgJHvFPiA/ICdzZWxlY3RlZCcgOiAnY2FuY2VsJ30gJHvFT31g6QCDfcgJcmV0dXJuIHsgLi4u5gGD5gCLKSzsAKHHL30KxTo8L+YB1D4K"},{default:c(()=>[A]),_:1}),w,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3gtZ3JvdXAgdi1tb2RlbD0iyBjFFzEixDDPMiBsYWLEKjEiPkNvbWJpbmVkIMUcIGJveDwvzCvbPjLfPt4+M98+3j403z7HPs4S5gEp6gFAZWxsx2NkaXYgY2xhc3M9ImRlbW/GMiI+Q3VycmVudGx5IHNlbGVjdGVkIHZhbHVlPC9kaXbKOz57e+YAhekBdSB9fckk5wCExW08L+oBxjxzY3JpcHQgbGFuZz0idHPlAalpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QCOcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8g7wDGOiBbJzInLCAnMyddxyN9KTsKxwtyZXR1cm4geyAuLi7mAKQoxVopIH3kAKAgIH0KIMQLPC/mAOk+Cg=="},{default:c(()=>[B]),_:1}),Z,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3gtZ3JvdXAgdi1tb2RlbD0iyBjFFzEiIGRpc2FibGVkxDnPOyBsYWLEMzEiPkNvbWJpbmVkIMUcIGJveDwvzCvbPjLfPt4+M98+3j403z7HPs4S5gEy6gFJZWxsx2NkaXYgY2xhc3M9ImRlbW/GMiI+Q3VycmVudGx5IHNlbGVjdGVkIHZhbHVlPC9kaXbKOz57e+YAhekBfiB9fckk5wCExW08L+oBzzxzY3JpcHQgbGFuZz0idHMixC1pbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QCOcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8g7wDGOiBbJzInLCAnMyddxyN9KTsKxwtyZXR1cm4geyAuLi7mAKQoxVopIH3kAKAgIH0KIMQLPC/mAOk+Cg=="},{default:c(()=>[H]),_:1}),Y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2hlY2tib3gtZ3JvdXAgdi1tb2RlbD0iyBjFFzMiIHJlZj0ixQ0iIEBjaGFuZ2XEJcQIQm94NCLEUc9TIHYtZm9yPSJpdGVtIGluIMgYc291cmNlIiA6a2V5xh4ubGFiZWwiIDrFCM0UPnt7xQ52YWx1ZX19PC/MYsR1zhLmAMfFGHNwYW4gY2xhc3M9ImJ0buwAomJ1dHRvbiB0eXBlPSJwcmltYXJ55ADXbGljaz0idG9nZ2xlQWxsKHRydWUpIiBzdHlsZT0ibWFyZ2luOiAwIDIwcHggMCAwIj5TZWxlY3QgYWxs5gCIxlrfa9RrZmFsc99sY2FuY2XfaMZod2FybmluZ9BoUmV2ZXJzZSgpIj5yxgsgc+UAwGlvbtBXPC/kAUA+Cjwv6gIzPHNjcmlwdCBsYW5nPSJ0c+UBU2ltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMs5AI0IH0gZnJvbSAndnVlJzvML3Nob3dUb2FzdMkjQGN1YnVp5ACIdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL+UBNcUzZXjFM2RlZmF1bHQge+UBIXByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3RhdGUgPekAxyjIHyDpArnmAww6IFsnMiddxkzMH+YC2DogW8kaICB7IOUCxzogJzEnLCDlAsU6ICdDb21iaW5lZMY7IGJveCcg5wCd0Dcy3zfXNzPfN9c3NN831zc13zfXNzbfN33JNl3HCn0pOwrtAbbmBLbkAbZmKG51bGwp5AIFyh/qBKEgPSAox3hhbnlbXSkgPT7pAgIg6gKOLnRleHQoYCR7xS0ubGVuZ3RoID09PeYCIS7uAe3IID8gJ+oECicg5ADQ5QOt5wNgxRZ9YOkAnX3vAMbpBAfkAKZmOiBib29sZWFu7wCkKOUA7eYFCiBhc+QAyCkuyTsoZt9f5wP+xGP/AP3xBB3qALog5gFy5gCFx33HWSjzAIByZXR1cm4geyAuLi7mBBYo5QFHKSzGSCzrAaLkBDjoAQd9xkvkAgF9Owo8L+YEeT4K"},{default:c(()=>[R]),_:1}),_,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0idXNlIGNoZWNrYm94R8QZLCBMaW1pdCB0aGUgbWF4aW11bSBudW1iZXIgb2Ygb3B0aW9ucyAoMikixFbLWMYPyBHHU8dtdi1tb2RlbD0iyBjFFzQiIDptYXg9IjLHTNE/IGxhYsQ3MSIgc3R55ACwbWFyZ2luOiAycHggMjBweCAwIDAiPkNvbWJpbmVk5gDLIGJveDwvzEjfXzLfQt9CbD0iM/8Aod9f318iNN9Cy0LOFuYBgMYcxxrpAavyAbpkaXYgY2xhc3M9ImRlbW/GRiI+c2VsZWN0ZWQ8L2RpdswtPnt76QI9xWk0IH19yybOcsoO6ACWPC/qAqI8c2NyaXB0IGxhbmc9InRz5QITaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+UAgHByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3RhdGUgPcljKMgfIO8A3DogWycyJ13HHn0pOwrHC3JldHVybiB7IC4uLuYAnyjFVSkgfeQAmyAgfQogxAs8L+YA5D4K"},{default:c(()=>[G]),_:1}),W,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iU2VsZWN0IGFsbCAvIGhhbGYgLyBjYW5jZWwixDbLOMYPyBFoZWNrYm94IDppbmRldGVybWluYXRlPSLNDyIgdi1tb2RlbD0iyDExMCIgQGNoYW5nZcQVxAhCb3g1Ij5z5QCJQWxsPC/MYcZ2xxTpAIbtAITnANHRa8UXNSIgcmVmPSLFDTLUfDbnAOnIVsRlzWAgbGFixFgxIiBzdHnkATVtYXJnaW46IDJweCAyMHB4IDAgMCI+Q29tYmluZWQgxTkgYm947wDL8ADG33I9IjLfVd9V1lUz31XfVdZVNN9V1FXOH+YBxsQayijIFDwv6gLKPHNjcmlwdCBsYW5nPSJ0c+UBvmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMs5AH+LCBSZWYgfSBmcm9tICd2dWUnO8w0c2hvd1RvYXN0ySNAY3VidWnkAId1acwszRkvZGlzdC9wYWNrYWdlcy90xEIv5QIhxTNleMUzZGVmYXVsdCB75QDzcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCDmAqsgPeQAuyhudWxsKSBhc+QAw8RXyidzdGF0ZcUm5gDzKMhGICDtA4U6IGZhbHNlxnLFP+kDi9kb5gM7OiBbXccbfSk7Cs1+6gO7ID0gKHZhbHVlOiBib29sZWFuKSA9PukA1CDnANAuxSQudG9nZ2xlQWxsxjQp6ADUfdhgNsRg5QJmOiBzdHJpbmdbXc9haWbHIi5sZW5ndGggPT09IDTqAVfEAeUBLi7tARkgPeYA/+gAg8on6gEiID0gdHJ1yyN9IGVsc2XScyYm5gMLyBA8/wCB5wCB1V3MN2RhdGH/ALf2ALfPJH3xAWhyZXR1cm4geyAuLi7mAy0oxUcpLOcBsizrAeXLDDbERMhTfTsKPC/mA5I+Cg=="},{default:c(()=>[z]),_:1}),X])}}});export{J as default,F as excerpt,Q as frontmatter};
