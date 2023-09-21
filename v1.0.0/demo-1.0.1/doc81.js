import{d as p,r as o,b as d,k as l,w as n,aq as c,e as a,o as h,l as s}from"./style_icon.js";const r={class:"markdown-body"},i=c(`<h1>Toast 吐司</h1><h3>介绍</h3><p>用于轻提示。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
</code></pre><h3>文字提示</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Text 文字提示"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('网络失败，请稍后再试~')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),g=a("h3",null,"标题提示",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast 标题展示"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('网络失败，请稍后再试~')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"textToast"),s(" = ("),a("span",{class:"hljs-params"},"msg"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s(`(msg, {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标题文字'"),s(`
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        textToast
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"成功提示",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast 成功提示"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('成功提示')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),y=a("h3",null,"失败提示",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast 失败提示"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('失败提示')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),k=a("h3",null,"警告提示",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast 警告提示"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('警告提示')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),x=a("h3",null,"加载提示",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast 加载提示"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('加载中')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),f=a("h3",null,"Toast 不消失",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast不消失"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('Toast不消失')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),T=a("h3",null,"Toast 自定义底部高度",-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Toast 自定义底部高度"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('自定义距离')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),R=a("h3",null,"Loading 带透明罩",-1),X=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Loading带透明罩"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"textToast('加载中')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),V=c(`<h3>支持在 JS 模块中导入使用</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@cubui/cubui/dist/packages/toast/style&#39;</span>;
showToast.<span class="hljs-title function_">text</span>(<span class="hljs-string">&#39;在js模块中使用&#39;</span>);
<span class="hljs-comment">// 返回实例，可以手动调用实例中的hide方法关闭提示</span>
<span class="hljs-keyword">const</span> toast = showToast.<span class="hljs-title function_">loading</span>(<span class="hljs-string">&#39;在js模块中使用&#39;</span>);
toast.<span class="hljs-title function_">hide</span>();
</code></pre><h2>API</h2><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>showToast.text</td><td>展示文字提示</td><td>message ｜ options</td><td>toast 实例(message 支持传入 HTML)</td></tr><tr><td>showToast.success</td><td>展示成功提示</td><td>message ｜ options</td><td>toast 实例</td></tr><tr><td>showToast.fail</td><td>展示失败提示</td><td>message ｜ options</td><td>toast 实例</td></tr><tr><td>showToast.warn</td><td>展示警告提示</td><td>message ｜ options</td><td>toast 实例</td></tr><tr><td>showToast.hide</td><td>关闭提示</td><td>默认关闭所有实例，可传 id 关闭指定实例</td><td>void</td></tr><tr><td>showToast.loading</td><td>展示加载提示</td><td>message ｜ options</td><td>toast 实例</td></tr></tbody></table><h3>ToastOptions 数据结构</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>id</td><td>标识符，相同时共用一个实例，默认为多个实例</td><td>string | number</td><td>-</td></tr><tr><td>duration</td><td>展示时长（毫秒）<br>值为 0 时，toast 不会自动消失</td><td>number</td><td><code class="">2000</code></td></tr><tr><td>title</td><td>标题</td><td>string</td><td>-</td></tr><tr><td>center</td><td>是否展示在页面中部（为 false 时展示在底部）</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bottom</td><td>距页面底部的距离（像素或者百分比），option.center 为 false 时生效</td><td>string</td><td><code class="">30px</code></td></tr><tr><td>text-align-center</td><td>多行文案是否居中</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bg-color</td><td>背景颜色（透明度）</td><td>string</td><td><code class="">rgba(0, 0, 0, 0.8)</code></td></tr><tr><td>custom-class</td><td>自定义类名</td><td>string</td><td>-</td></tr><tr><td>icon</td><td>自定义图标，<strong>直接传入 Component 或者 h 函数</strong></td><td>Component</td><td>-</td></tr><tr><td>size</td><td>文案尺寸，<strong>small</strong>/<strong>base</strong>/<strong>large</strong>三选一</td><td>string</td><td><code class="">base</code></td></tr><tr><td>cover</td><td>是否显示遮罩层</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cover-color</td><td>遮罩层颜色，默认透明</td><td>string</td><td><code class="">rgba(0,0,0,0)</code></td></tr><tr><td>loading-rotate</td><td>loading 图标是否旋转，仅对 loading 类型生效</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>close</td><td>关闭时触发的事件</td><td>function</td><td><code class="">null</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭提示</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>custom-class</td><td>提示框 class</td><td>string</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-toast-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-toast-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-toast-font-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-toast-inner-padding</td><td><em>24px 30px</em></td></tr><tr><td>--cub-toast-inner-bg-color</td><td><em>rgba(0, 0, 0, 0.8)</em></td></tr><tr><td>--cub-toast-inner-border-radius</td><td><em>12px</em></td></tr><tr><td>--cub-toast-cover-bg-color</td><td><em>rgba(0, 0, 0, 0)</em></td></tr></tbody></table>`,11),G={},M="",z=p({__name:"doc",setup(B,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(A,L)=>{const t=o("demo-block");return h(),d("div",r,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVGV4dCDmloflrZfmj5DnpLoiIGlzLWxpbmsgQGNsaWNrPSJ0ZXh0VG9hc3QoJ+e9kee7nOWksei0pe+8jOivt+eojeWQjuWGjeivlX4nKSI+PC/IYz4KPC/KfDxzY3JpcHTkAIVpbXBvcnQgeyBzaG93xVogfSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkA2yA9IChtc2cpID0+ySMg6gCgLsQpxSHEYcQBfcgJcmV0dXJuyzXJVM4qfQrFCzwv6AEI"},{default:n(()=>[j]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3Qg5qCH6aKY5bGV56S6IiBpcy1saW5rIEBjbGljaz0idGV4dMUoKCfnvZHnu5zlpLHotKXvvIzor7fnqI3lkI7lho3or5V+JykiPjwvyGQ+Cjwvyn08c2NyaXB05ACGaW1wb3J0IHsgc2hvd8VaIH0gZnJvbSAnQGN1YnVpxEN1aSc7yizNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsZcUzZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDpANsgPSAobXNnKSA9PskjIOoAoC7EKcQhLMseIOYBRTogJ+YBQOaWh+WtlyfJIH0p5ACOxQrICXJldHVybstE6QCBzip9CsULPC/oATU="},{default:n(()=>[u]),_:1}),m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3Qg5oiQ5Yqf5o+Q56S6IiBpcy1saW5rIEBjbGljaz0idGV4dMUoKCfMKScpIj48L8hRPgo8L8pqPHNjcmlwdMRzaW1wb3J0IHsgc2hvd8ZvfSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkAyCA9IChtc2cpID0+ySMg6gCgLnN1Y2Nlc3PFJMRkxAF9yAlyZXR1cm7LOMlXzip9CsULPC/oAQs="},{default:n(()=>[b]),_:1}),y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3Qg5aSx6LSl5o+Q56S6IiBpcy1saW5rIEBjbGljaz0idGV4dMUoKCfMKScpIj48L8hRPgo8L8pqPHNjcmlwdMRzaW1wb3J0IHsgc2hvd8ZvfSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkAyCA9IChtc2cpID0+ySMg6gCgLmZhaWzFIcRhxAF9yAlyZXR1cm7LNclUzip9CsULPC/oAQg="},{default:n(()=>[w]),_:1}),k,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3Qg6K2m5ZGK5o+Q56S6IiBpcy1saW5rIEBjbGljaz0idGV4dMUoKCfMKScpIj48L8hRPgo8L8pqPHNjcmlwdMRzaW1wb3J0IHsgc2hvd8ZvfSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkAyCA9IChtc2cpID0+ySMg6gCgLndhcm7FIcRhxAF9yAlyZXR1cm7LNclUzip9CsULPC/oAQg="},{default:n(()=>[C]),_:1}),x,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3Qg5Yqg6L295o+Q56S6IiBpcy1saW5rIEBjbGljaz0idGV4dMUoKCfGKeS4rScpIj48L8hOPgo8L8pnPHNjcmlwdMRwaW1wb3J0IHsgc2hvd8ZsfSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkAxSA9IChtc2cpID0+ySMg6gCgLmxvYWRpbmfFJMRkxAF9yAlyZXR1cm7LOMlXzip9CsULPC/oAQs="},{default:n(()=>[I]),_:1}),f,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3TkuI3mtojlpLEiIGlzLWxpbmsgQGNsaWNrPSJ0ZXh0xSQoJ84rJykiPjwvyE8+Cjwvymg8c2NyaXB0xHFpbXBvcnQgeyBzaG93xUIgfSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkAyiA9IChtc2cpID0+ySMg6gCgLsQpxCEsyx4gIGR1cmF0aW9uOiAwyRZ9KeQAhMUKyAlyZXR1cm7LOsl3zip9CsULPC/oASs="},{default:n(()=>[v]),_:1}),T,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iVG9hc3Qg6Ieq5a6a5LmJ5bqV6YOo6auY5bqmIiBpcy1saW5rIEBjbGljaz0idGV4dMUxKCfJMui3neemuycpIj48L8hdPgo8L8p2PHNjcmlwdMR/aW1wb3J0IHsgc2hvd8Z7fSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkAyyA9IChtc2cpID0+ySMg6gCgLsQpxCEsyx4gIGNlbnRlcjogZmFsc2Usyxlib3R0b206ICcxMCUnyRh9KeQAn8UKyAlyZXR1cm7LVekAks4qfQrFCzwv6AFG"},{default:n(()=>[_]),_:1}),R,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iTG9hZGluZ+W4pumAj+aYjue9qSIgaXMtbGluayBAY2xpY2s9InRleHRUb2FzdCgn5Yqg6L295LitJykiPjwvyE8+Cjwvymg8c2NyaXB0xHFpbXBvcnQgeyBzaG93xUQgfSBmcm9tICdAY3VidWnEQ3VpJzvKLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWxlxTNleMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkAxSA9IChtc2cpID0+ySMg6gCgLmzmARPEJCzLIcRIdmVyOiB0cnVlyRZ9KeQAh8UKyAlyZXR1cm7LOsl6zip9CsULPC/oAS4="},{default:n(()=>[X]),_:1}),V])}}});export{z as default,M as excerpt,G as frontmatter};
