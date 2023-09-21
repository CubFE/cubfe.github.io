import{d as p,r as d,b as r,k as l,w as n,aq as e,e as a,l as s,o}from"./style_icon.js";const h={class:"markdown-body"},i=e(`<h1>InputNumber</h1><h3>Intro</h3><p>Control the number increase or decrease by clicking the button.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">InputNumber</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">InputNumber</span>);
</code></pre><h3>Basic Usage</h3><p>Initialize a default value</p>`,7),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { value };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),j=a("h3",null,"Step size setting",-1),m=a("p",null,[s("Set step "),a("code",{class:""},"step"),s(" 5")],-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"step"),s("="),a("span",{class:"hljs-string"},'"5"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { value };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"Limit input range",-1),y=a("p",null,[a("code",{class:""},"min"),s(" and "),a("code",{class:""},"max"),s(" attributes represent the minimum and maximum values respectively")],-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"min"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},"max"),s("="),a("span",{class:"hljs-string"},'"20"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"10"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { value };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"Disabled state",-1),w=a("p",null,[a("code",{class:""},"disabled"),s(" When disabled, you cannot click the button or modify the input box.")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { value };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"Read only disable input box",-1),_=a("p",null,[a("code",{class:""},"readonly"),s(" Set read-only disable input box input behavior")],-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { value };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=a("h3",null,"Support decimal point",-1),Z=a("p",null,[s("Set step size "),a("code",{class:""},"step"),s(" 0.1 "),a("code",{class:""},"decimal places"),s(" keep 1 decimal place")],-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"step"),s("="),a("span",{class:"hljs-string"},'"0.1"'),s(),a("span",{class:"hljs-attr"},"decimal-places"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { value };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=a("h3",null,"Support asynchronous modification",-1),B=a("p",null,[s("Asynchronous modification through "),a("code",{class:""},"change"),s(" event and "),a("code",{class:""},"model-value")],-1),X=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, getCurrentInstance, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"value: number"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"loading"),s("("),a("span",{class:"hljs-string"},"'Asynchronous presentation changes in 2 seconds'"),s(`);
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          state.`),a("span",{class:"hljs-property"},"value"),s(` = value;
          showToast.`),a("span",{class:"hljs-title function_"},"hide"),s(`();
        }, `),a("span",{class:"hljs-number"},"2000"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), onChange };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),P=a("h3",null,"Custom button size",-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"button-size"),s("="),a("span",{class:"hljs-string"},'"30"'),s(),a("span",{class:"hljs-attr"},"input-width"),s("="),a("span",{class:"hljs-string"},'"50"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { value };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),V=a("h3",null,"Custsom icon name",-1),Y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Left"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Right"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-input-number"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Right"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Right"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { value };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),R=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Initial value</td><td>string | number</td><td>-</td></tr><tr><td>input-width</td><td>Input box width</td><td>string</td><td>``</td></tr><tr><td>button-size</td><td>Operators +, - Dimensions</td><td>string</td><td>``</td></tr><tr><td>min</td><td>Minimum limit</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>max</td><td>Maximum limit</td><td>string | number</td><td><code class="">9999</code></td></tr><tr><td>step</td><td>step</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>decimal-places</td><td>Set reserved decimal places</td><td>string | number</td><td><code class="">0</code></td></tr><tr><td>disabled</td><td>Disable all features</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>Read only status disables input box operation behavior</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>left-icon</td><td>Custom left icon</td></tr><tr><td>right-icon</td><td>Custom right icon</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>add</td><td>Triggered when the Add button is clicked</td><td><code class="">event: Event </code></td></tr><tr><td>reduce</td><td>Triggered when the decrease button is clicked</td><td><code class="">event: Event</code></td></tr><tr><td>overlimit</td><td>Triggered when an unavailable button is clicked</td><td><code class="">event: Event,type:string (reduce or add)</code></td></tr><tr><td>change</td><td>Triggered when the value changes</td><td><code class="">value: number , event : Event </code></td></tr><tr><td>blur</td><td>Triggered when the input box blur</td><td><code class="">event: Event</code></td></tr><tr><td>focus</td><td>Triggered when the input box focus</td><td><code class="">event: Event </code></td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-inputnumber-icon-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-inputnumber-icon-void-color</td><td><em>var(--cub-disable-color)</em></td></tr><tr><td>--cub-inputnumber-icon-size</td><td><em>20px</em></td></tr><tr><td>--cub-inputnumber-input-width</td><td><em>40px</em></td></tr><tr><td>--cub-inputnumber-input-font-size</td><td><em>12px</em></td></tr><tr><td>--cub-inputnumber-input-font-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-inputnumber-input-background-color</td><td><em>var(--cub-help-color)</em></td></tr><tr><td>--cub-inputnumber-input-border-radius</td><td><em>4px</em></td></tr><tr><td>--cub-inputnumber-input-margin</td><td><em>0 6px</em></td></tr><tr><td>--cub-inputnumber-input-border</td><td><em>0</em></td></tr><tr><td>--cub-inputnumber-border</td><td><em>0</em></td></tr><tr><td>--cub-inputnumber-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-inputnumber-height</td><td><em>auto</em></td></tr><tr><td>--cub-inputnumber-line-height</td><td><em>normal</em></td></tr><tr><td>--cub-inputnumber-border-box</td><td><em>content-box</em></td></tr><tr><td>--cub-inputnumber-display</td><td><em>flex</em></td></tr></tbody></table>',11),G={},z="",Q=p({__name:"doc.en-US",setup(J,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(S,D)=>{const t=d("demo-block");return o(),r("div",h,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiAvPgo8L8ozPHNjcmlwdCBsYW5nPSJ0cyLERmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDFcyA9xEcoMSnEPcQBcmV0dXJuIHvHH33GGH0KIMQLPC/mAJE+Cg=="},{default:n(()=>[u]),_:1}),j,m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBzdGVwPSI1IiAvPgo8L8o8PHNjcmlwdCBsYW5nPSJ0cyLET2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDFfCA9xEcoMSnEPcQBcmV0dXJuIHvHH33GGH0KIMQLPC/mAJE+Cg=="},{default:n(()=>[g]),_:1}),b,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBtaW49IjEwIiBtYXg9IjIwIiAvPgo8L8pFPHNjcmlwdCBsYW5nPSJ0cyLEWGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAIUgPcRHKDEwKcQ+xAFyZXR1cm4ge8cgfcYYfQogxAs8L+YAkj4K"},{default:n(()=>[v]),_:1}),I,w,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBkaXNhYmxlZCAvPgo8L8o8PHNjcmlwdCBsYW5nPSJ0cyLET2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDFfCA9xEcoMSnEPcQBcmV0dXJuIHvHH33GGH0KIMQLPC/mAJE+Cg=="},{default:n(()=>[f]),_:1}),C,_,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiByZWFkb25seSAvPgo8L8o8PHNjcmlwdCBsYW5nPSJ0cyLET2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDFfCA9xEcoMSnEPcQBcmV0dXJuIHvHH33GGH0KIMQLPC/mAJE+Cg=="},{default:n(()=>[k]),_:1}),H,Z,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBzdGVwPSIwLjEiIGRlY2ltYWwtcGxhY2VzPSIxIiAvPgo8L8pRPHNjcmlwdCBsYW5nPSJ0cyLEZGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAJEgPcRHKDEpxD3EAXJldHVybiB7xx99xhh9CiDECzwv5gCRPgo="},{default:n(()=>[A]),_:1}),x,B,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIDptb2RlbC12YWx1ZT0ixQciIEBjaGFuZ2U9Im9uQ8UKIiAvPgo8L8pLPHNjcmlwdCBsYW5nPSJ0cyLEXmltcG9ydCB7IHJlYWN0aXZlLCBnZXRDdXJyZW50SW5zdGFuY2UsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7zD5zaG93VG9hc3TJI0BjdWJ1aS/FBswszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA96QDHKMgfICDlASE6IDHHEX0pxFvKOugBMCA9ICjHK+YBaCkgPT7JZiDqAOMubG9hZGluZygnQXN5bmNocm9ub3VzIHByZXNlbnRhdGlvbiDmAY1zIGluIDIgc2Vjb25kcyfJeeUAxVRpbWVvdXQoKM9oIOYAzC7lAIwgPeYAv8o67ACJaGlkZSjLVn0sIDIwMDDJEn3ICXJldHVybiB7IC4uLuYByyjFZSks6gD/xy19CsU4PC/mAi4+Cg=="},{default:n(()=>[X]),_:1}),P,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBidXR0b24tc2l6ZT0iMzAiIMYud2lkdGg9IjUwIiAvPgo8L8pVPHNjcmlwdCBsYW5nPSJ0cyLEaGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAJUgPcRHKDEpxD3EAXJldHVybiB7xx99xhh9CiDECzwv5gCRPgo="},{default:n(()=>[W]),_:1}),V,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIsQlICDJNCAjbGVmdC1pY29uxhogIDxMZWZ0IC/HKS/MXs05cmlnaM86UsQT1js8L/AAmj4KzCI8c2NyaXB0IGxhbmc9InRz5QCpaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHeQAsCwgxnzIJUBjdWJmZS/kAJ5zLcgyZXjFMmRlZmF1bHQge+UAp2NvbXBvbmVudHM60EwsxSFzZXR1cCgpxy/EMW5zdCDlAU4gPeQAmigxKcRexAFyZXR1cm4ge8cffcYYfQogxAs8L+YA5D4K"},{default:n(()=>[Y]),_:1}),R])}}});export{Q as default,z as excerpt,G as frontmatter};
