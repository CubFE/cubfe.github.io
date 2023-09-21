import{d as o,r as p,b as d,k as l,w as n,aq as c,e as a,o as h,l as s}from"./style_icon.js";const r={class:"markdown-body"},i=c(`<h1>Toast</h1><h3>Intro</h3><p>for light tips.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
</code></pre><h3>Text</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('text message~')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Title",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast Title"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('title message~')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s(`(msg, {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'title'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"Success",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast Success"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('Success')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"success"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Fail",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast Fail"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('Fail')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"fail"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"Warn",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast Warn"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('Warn')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"warn"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"Loading",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast Loading"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('Loading')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"loading"),s(`(msg);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),T=a("h3",null,"Not Disappear",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast Not Disappear"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('Toast Not Disappear')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s(`(msg, {
          `),a("span",{class:"hljs-attr"},"duration"),s(": "),a("span",{class:"hljs-number"},"0"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"Custom Bottom Height",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom Bottom Height"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('Custom Bottom Height')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s(`(msg, {
          `),a("span",{class:"hljs-attr"},"center"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"bottom"),s(": "),a("span",{class:"hljs-string"},"'10%'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),X=a("h3",null,"Loading with transparent cover",-1),z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Loading with transparent cover"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('Loading')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"loading"),s(`(msg, {
          `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=c(`<h3>Support import and use in JS modules</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@cubui/cubui/dist/packages/toast/style&#39;</span>;
showToast.<span class="hljs-title function_">text</span>(<span class="hljs-string">&#39;use in js module&#39;</span>);
<span class="hljs-comment">// Return the instance, you can manually call the hide method in the instance to close the prompt</span>
<span class="hljs-keyword">const</span> toast = showToast.<span class="hljs-title function_">loading</span>(<span class="hljs-string">&#39;use in js module&#39;</span>);
toast.<span class="hljs-title function_">hide</span>();
</code></pre><h2>API</h2><h3>Methods</h3><table><thead><tr><th>Methods</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>showToast.text</td><td>Show text toast</td><td>message ｜ options</td><td>toast instance(message support incoming HTML)</td></tr><tr><td>showToast.success</td><td>Show success toast</td><td>message ｜ options</td><td>toast instance</td></tr><tr><td>showToast.fail</td><td>Show fail toast</td><td>message ｜ options</td><td>toast instance</td></tr><tr><td>showToast.warn</td><td>Show warn toast</td><td>message ｜ options</td><td>toast instance</td></tr><tr><td>showToast.hide</td><td>Close toast</td><td>clearAll: boolean</td><td>void</td></tr><tr><td>showToast.loading</td><td>Show loading toast</td><td>message ｜ options</td><td>toast instance</td></tr></tbody></table><h3>ToastOptions</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>id</td><td>Identifier, share one instance at the same time, default to multiple instances</td><td>string | number</td><td>-</td></tr><tr><td>duration</td><td>Toast duration(ms), won&#39;t disappear if value is 0</td><td>number</td><td><code class="">2000</code></td></tr><tr><td>title</td><td>title</td><td>string</td><td>-</td></tr><tr><td>center</td><td>Whether to display in the middle of the page (display at the bottom when false)</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bottom</td><td>The distance from the bottom of the page (px or %), which takes effect when option.center is false</td><td>string</td><td><code class="">30px</code></td></tr><tr><td>text-align-center</td><td>Whether the multi-line copy is centered</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bgColor</td><td>background color (transparency)</td><td>string</td><td><code class="">rgba(0, 0, 0, 0.8)</code></td></tr><tr><td>custom-class</td><td>Custom Class</td><td>string</td><td>-</td></tr><tr><td>icon</td><td>Custom Icon</td><td>Component</td><td>-</td></tr><tr><td>size</td><td>Text Size <strong>small</strong>/<strong>base</strong>/<strong>large</strong></td><td>string</td><td><code class="">base</code></td></tr><tr><td>cover</td><td>Whether to show the mask layer</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cover-color</td><td>Cover Color</td><td>string</td><td><code class="">rgba(0,0,0,0)</code></td></tr><tr><td>loading-rotate</td><td>Whether the loading icon is rotated, only valid for the loading type</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>close</td><td>Callback function after close</td><td>function</td><td><code class="">null</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>custom-class</td><td>Custom Class</td><td>string</td><td>-</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-toast-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-toast-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-toast-font-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-toast-inner-padding</td><td><em>24px 30px</em></td></tr><tr><td>--cub-toast-inner-bg-color</td><td><em>rgba(0, 0, 0, 0.8)</em></td></tr><tr><td>--cub-toast-inner-border-radius</td><td><em>12px</em></td></tr><tr><td>--cub-toast-cover-bg-color</td><td><em>rgba(0, 0, 0, 0)</em></td></tr></tbody></table>`,11),B={},H="",N=o({__name:"doc.en-US",setup(V,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(S,Z)=>{const t=p("demo-block");return h(),d("div",r,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVGV4dCIgaXMtbGluayBAY2xpY2s9InRleHRUb2FzdCgnxAsgbWVzc2FnZX4nKSI+PC/IRD4KPC/KXTxzY3JpcHTEZmltcG9ydCB7IHNob3fFSCB9IGZyb20gJ0BjdWJ1acRDdWknO8oszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bGXFM2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg6QDJID0gKG1zZykgPT7JIyDqAKAuxCnFIcRhxAF9yAlyZXR1cm7LNclUzip9CsULPC/oAQg="},{default:n(()=>[j]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3QgVMQNIiBpcy1saW5rIEBjbGljaz0idGV4dMUhKCfFLyBtZXNzYWdlficpIj48L8hMPgo8L8plPHNjcmlwdMRuaW1wb3J0IHsgc2hvd8ZqfSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkAyiA9IChtc2cpID0+ySMg6gCgLsQpxCEsyx4g5gEtOiDmAQYnyRl9KeQAh8UKyAlyZXR1cm7LPcl6zip9CsULPC/oAS4="},{default:n(()=>[u]),_:1}),m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3QgU3VjY2VzcyIgaXMtbGluayBAY2xpY2s9InRleHTFIygnxyQnKSI+PC/IRz4KPC/KYDxzY3JpcHTEaWltcG9ydCB7IHNob3fGZX0gZnJvbSAnQGN1YnVpxEN1aSc7yizNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsZcUzZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDpAMMgPSAobXNnKSA9PskjIOoAoC5z5gDhxSTEZMQBfcgJcmV0dXJuyzjJV84qfQrFCzwv6AEL"},{default:n(()=>[b]),_:1}),y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3QgRmFpbCIgaXMtbGluayBAY2xpY2s9InRleHTFICgnxCEnKSI+PC/IQT4KPC/KWjxzY3JpcHTEY2ltcG9ydCB7IHNob3fGX30gZnJvbSAnQGN1YnVpxEN1aSc7yizNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsZcUzZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDpAMAgPSAobXNnKSA9PskjIOoAoC5mYWlsxSHEYcQBfcgJcmV0dXJuyzXJVM4qfQrFCzwv6AEI"},{default:n(()=>[w]),_:1}),k,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3QgV2FybiIgaXMtbGluayBAY2xpY2s9InRleHTFICgnxCEnKSI+PC/IQT4KPC/KWjxzY3JpcHTEY2ltcG9ydCB7IHNob3fGX30gZnJvbSAnQGN1YnVpxEN1aSc7yizNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsZcUzZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDpAMAgPSAobXNnKSA9PskjIOoAoC53YXJuxSHEYcQBfcgJcmV0dXJuyzXJVM4qfQrFCzwv6AEI"},{default:n(()=>[f]),_:1}),C,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3QgTG9hZGluZyIgaXMtbGluayBAY2xpY2s9InRleHTFIygnxyQnKSI+PC/IRz4KPC/KYDxzY3JpcHTEaWltcG9ydCB7IHNob3fGZX0gZnJvbSAnQGN1YnVpxEN1aSc7yizNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsZcUzZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDpAMMgPSAobXNnKSA9PskjIOoAoC5s5gDhxSTEZMQBfcgJcmV0dXJuyzjJV84qfQrFCzwv6AEL"},{default:n(()=>[I]),_:1}),T,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3QgTm90IERpc2FwcGVhciIgaXMtbGluayBAY2xpY2s9InRleHTFKSgn0zAnKSI+PC/IWT4KPC/KcjxzY3JpcHTEe2ltcG9ydCB7IHNob3fGR30gZnJvbSAnQGN1YnVpxEN1aSc7yizNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsZcUzZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDpAM8gPSAobXNnKSA9PskjIOoAoC7EKcQhLMseICBkdXJhdGlvbjogMMkWfSnkAITFCsgJcmV0dXJuyzrJd84qfQrFCzwv6AEr"},{default:n(()=>[x]),_:1}),_,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iQ3VzdG9tIEJvdMQHSGVpZ2h0IiBpcy1saW5rIEBjbGljaz0idGV4dFRvYXN0KCfUMScpIj48L8hbPgo8L8p0PHNjcmlwdMR9aW1wb3J0IHsgc2hvd8VPIH0gZnJvbSAnQGN1YnVpxEN1aSc7yizNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsZcUzZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDpANAgPSAobXNnKSA9PskjIOoAoC7EKcQhLMseICBjZW50ZXI6IGZhbHNlLMsZYuUBFjogJzEwJSfJGH0p5ACfxQrICXJldHVybstV6QCSzip9CsULPC/oAUY="},{default:n(()=>[A]),_:1}),X,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iTG9hZGluZyB3aXRoIHRyYW5zcGFyZW50IGNvdmVyIiBpcy1saW5rIEBjbGljaz0idGV4dFRvYXN0KCfHOycpIj48L8hYPgo8L8pxPHNjcmlwdMR6aW1wb3J0IHsgc2hvd8VCIH0gZnJvbSAnQGN1YnVpxEN1aSc7yizNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsZcUzZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDpAMMgPSAobXNnKSA9PskjIOoAoC5s5gDhxCQsyyHESHZlcjogdHJ1ZckWfSnkAIfFCsgJcmV0dXJuyzrJes4qfQrFCzwv6AEu"},{default:n(()=>[z]),_:1}),v])}}});export{N as default,H as excerpt,B as frontmatter};
