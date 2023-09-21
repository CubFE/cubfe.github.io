import{d as o,r as p,b as r,k as n,w as t,aq as c,e as a,o as i,l as s}from"./style_icon.js";const h={class:"markdown-body"},d=c(`<h1>Notify</h1><h3>Intro</h3><p>Show message tips at the top of the page</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"baseNotify('Basic Usage')"`),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showNotify } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/notify/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"baseNotify"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        showNotify.`),a("span",{class:"hljs-title function_"},"text"),s(`(msg, {
          `),a("span",{class:"hljs-attr"},"onClose"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'close'"),s(`);
          },
          `),a("span",{class:"hljs-attr"},"onClick"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'click'"),s(`);
          }
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        baseNotify
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Notify Type",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Notify Type"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"primaryNotify('Primary Notify')"`),s(">")]),s("Primary Notify"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"successNotify('Success Notify')"`),s(">")]),s("Success Notify"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"errorNotify('Error Notify')"`),s(">")]),s("Error Notify"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"warningNotify('Warning Notify')"`),s(">")]),s("Warning Notify"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showNotify } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/notify/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"primaryNotify"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        showNotify.`),a("span",{class:"hljs-title function_"},"primary"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"successNotify"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        showNotify.`),a("span",{class:"hljs-title function_"},"success"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"errorNotify"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        showNotify.`),a("span",{class:"hljs-title function_"},"danger"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"warningNotify"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        showNotify.`),a("span",{class:"hljs-title function_"},"warn"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        primaryNotify,
        successNotify,
        errorNotify,
        warningNotify
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"Custom",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom Style"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"cusBgNotify('Customize background and font colors')"`),s(`
      >`)]),s(`Customize background and font colors</cub-cell
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom Duration"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"timeNotify('Custom Duration')"`),s(">")]),s("Custom Duration"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom Postion"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"positionNotify('Custom Postion')"`),s(">")]),s("Custom Postion"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showNotify } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/notify/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"cusBgNotify"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        showNotify.`),a("span",{class:"hljs-title function_"},"text"),s("(msg, { "),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#ad0000'"),s(", "),a("span",{class:"hljs-attr"},"background"),s(": "),a("span",{class:"hljs-string"},"'#ffe1e1'"),s(` });
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"timeNotify"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        showNotify.`),a("span",{class:"hljs-title function_"},"text"),s("(msg, { "),a("span",{class:"hljs-attr"},"duration"),s(": "),a("span",{class:"hljs-number"},"10000"),s(` });
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"positionNotify"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        showNotify.`),a("span",{class:"hljs-title function_"},"text"),s("(msg, { "),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'bottom'"),s(` });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        cusBgNotify,
        timeNotify,
        positionNotify
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"Template use",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Template use"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"onClick"'),s(">")]),s("Template use"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-notify"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":duration"),s("="),a("span",{class:"hljs-string"},'"2000"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("Content"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-notify"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showNotify } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/notify/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" show = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        show.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        show,
        onClick
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=c('<h3>API</h3><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>The information type of the prompt, the optional values are <code class="">primary</code> <code class="">success</code> <code class="">danger</code> <code class="">warning</code></td><td>string</td><td><code class="">danger</code></td></tr><tr><td>visible</td><td>Display or not</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>msg</td><td>Display content, support line feed through <code class="">\\n</code></td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>duration</td><td>Display duration (ms),value is 0 ,notify not disappear</td><td>number</td><td><code class="">3000</code></td></tr><tr><td>color</td><td>Font Color</td><td>string</td><td><code class="">-</code></td></tr><tr><td>background</td><td>Background color</td><td>string</td><td><code class="">-</code></td></tr><tr><td>class-name</td><td>Custom class name</td><td>string | number</td><td><code class="">1 </code></td></tr><tr><td>position</td><td>custom position, optional values are <code class="">top</code> <code class="">bottom</code> <code class="">left</code> <code class="">right</code> <code class="">center</code></td><td>string</td><td><code class="">top</code></td></tr></tbody></table><blockquote><p>Component call is supported after version &#39;v3.1.20&#39;.</p></blockquote><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when notify is clicked</td><td><code class="">-</code></td></tr><tr><td>closed</td><td>Emitted when notify is closed</td><td><code class="">-</code></td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-notify-text-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-notify-padding</td><td><em>12px 0</em></td></tr><tr><td>--cub-notify-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-notify-height</td><td><em>44px</em></td></tr><tr><td>--cub-notify-line-height</td><td><em>auto</em></td></tr><tr><td>--cub-notify-base-background-color</td><td><em>linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-notify-primary-background-color</td><td><em>linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)</em></td></tr><tr><td>--cub-notify-success-background-color</td><td><em>linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)</em></td></tr><tr><td>--cub-notify-danger-background-color</td><td><em>rgba(250, 50, 25, 1)</em></td></tr><tr><td>--cub-notify-warning-background-color</td><td><em>linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%)</em></td></tr></tbody></table>',10),A={},x="",I=o({__name:"doc.en-US",setup(w,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(N,C)=>{const l=p("demo-block");return i(),r("div",h,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBpcy1MaW5rIEBjbGljaz0iYmFzZU5vdGlmeSgnQmFzaWMgVXNhZ2UnKSI+yw88L8hBPgo8L8paPHNjcmlwdCBsYW5nPSJ0cyLEbWltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG93xnnJJEBjdWJ1acRrdWnMLc0ZL2Rpc3QvcGFja2FnZXMvbsVDL3N0eWzGYWV4xTRkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg6gD8ID0gKG1zZzogc3RyaW5nKSA9PsksIOsAqy50ZXh0xCosyx8gIG9uQ2xvc2U6ICjPOshsb2xlLmxvZygnY8QoJynkAKnIAX0sz0ppY2vfSsZKaWNrz0rJDH3JGH3ICXJldHVybstS6gD+zivERn07Cjwv5gHcPgo="},{default:t(()=>[j]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iTm90aWZ5IFR5cGUixCfLKSBpcy1MaW5rIEBjbGljaz0icHJpbWFyecYzKCdQxg8gxhAnKSI+zhI8L8hK31kic3VjY2Vzc8hZU8YPy1nOEt9Zy1llcnJvcshXRcQNy1XMEN9Ty1N3YXJuaW5nyFVXxg/LV84SzlnKDuYBhj4KPC/qAaU8c2NyaXB0IGxhbmc9InRz5QGRaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3fGcckkQGN1YnVpxHF1acwtzRkvZGlzdC9wYWNrYWdlcy9uxUMvc3R5bMZhZXjFNGRlZmF1bHQge+UBHXNldHVwKCnHDiAgY29uc3Qg7QIeID0gKG1zZzogc3RyaW5nKSA9PskvIOsAri7HNsQtKcRxxAF9yAnGWe0CHt9ZylnHNtxZ6wIe31fKV2RhbmdlctxW7QIh31jKWMQ21lZyZXR1cm7LNu0BaSzKTewBJ8oX6wDlyhXtAKTOcX0KxQs8L+YCjT4K"},{default:t(()=>[u]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iQ3VzdG9tIFN0eWxlIsQoyyogaXMtTGluayBAY2xpY2s9ImN1c0JnTm90aWZ5KCfGOml6ZSBiYWNrxFVuZCBhbmQgZm9udCBjb2xvcnMnKSLFUyAgPt8vxS88L8h7xTblALfJE+YAuP8Ay29tIER1cmF0aW9u/wDOPSJ0aW1l7gDNyTwnKSLnALHJE+oAif8Al/cAl1Bvc/8AluYAlnBvc2nEKe8Amsc/6wCZxxL/AJgKPC/qAgY8c2NyaXB0IGxhbmc9InRz5QCNaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3fmAJPJJEBjdWJ1acRxdWnMLc0ZL2Rpc3QvcGFja2FnZXMvbsVDL3PkAm/FNGV4xTRkZWZhdWx0IHvlAR5zZXR1cCgpxw4gIGNvbnN0IOsCfiA9IChtc2c6IHN0cmluZykgPT7JLSDrAKwudGV4dMQqLCB75gJkOiAnI2FkMDAwMCcs6wKKxBdmZmUxZTEnIH0p5ACZxAF9yAnmAIHqAjH/AID2AIBk5wJKOiAx5ACA2mjuAgPfbNZsyEM6ICdib3R0b231ANdyZXR1cm7LTusBYyzJFeoA98oU7gCjzlh9CsULPC/mAm4+Cg=="},{default:t(()=>[y]),_:1}),b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iVMcjIHVzZSLEKMsqIGlzLUxpbmsgQGNsaWNrPSJvbkPECSI+zDY8L8gwyz9ub3RpZnkgdi1tb2RlbDp2aXNpYsRvc2hvdyIgOmR1cmF0aW9uPSIyMDAwx3ggIDxzcGFuPkNvbnRlbnQ8L8UOxlTFZMZVxBLKdOYAzj4KPC/qAO08c2NyaXB0IGxhbmc9InRzxWBpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wd5ACgTsVnySRAY3VidWnEcXVpzC3NGS9kaXN0L3BhY2thZ2VzL+YAqi9zdHlsxmFleMU0ZGVmYXVsdCB75QDWc2V0dXAoKccOICBjb25zdOUAgyA95ACnKGZhbHNlKcRAyh/nAYQgPSAoKSA9Psk9IMU5LnZhbHVlID0gdHJ1Zcg5fcgJcmV0dXJuzzMsyQ7HW842fQrFCzwv5gFVPgo="},{default:t(()=>[f]),_:1}),k])}}});export{I as default,x as excerpt,A as frontmatter};
