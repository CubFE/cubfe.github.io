import{d as p,r as o,b as r,k as n,w as t,aq as c,e as a,o as h,l as s}from"./style_icon.js";const i={class:"markdown-body"},d=c(`<h1>Notify 消息通知</h1><h3>介绍</h3><p>在页面顶部展示消息提示</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);
</code></pre><h3>基础用法</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"baseNotify('基础用法')"`),s(">")]),s("基础用法"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),g=a("h3",null,"通知类型",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"通知类型"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"primaryNotify('主要通知')"`),s(">")]),s("主要通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"successNotify('成功通知')"`),s(">")]),s("成功通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"errorNotify('危险通知')"`),s(">")]),s("危险通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"warningNotify('警告通知')"`),s(">")]),s("警告通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),m=a("h3",null,"自定义",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自定义背景色和字体颜色"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"cusBgNotify('自定义背景色和字体颜色')"`),s(">")]),s("自定义背景色和字体颜色"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自定义时长"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"timeNotify('自定义时长')"`),s(">")]),s("自定义时长"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自定义位置"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"positionNotify('自定义位置')"`),s(">")]),s("自定义位置"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),b=a("h3",null,"组件调用",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"组件调用"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"onClick"'),s(">")]),s("组件调用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),k=c('<h3>API</h3><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>提示的信息类型，可选值为<code class="">primary</code>、<code class="">success</code>、<code class="">danger</code>、<code class="">warning</code></td><td>string</td><td><code class="">danger</code></td></tr><tr><td>visible</td><td>显示与否</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>msg</td><td>展示文案，支持通过<code class="">\\n</code>换行</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>duration</td><td>展示时长(ms)，值为 0 时，<code class="">notify</code> 不会消失</td><td>number</td><td><code class="">3000</code></td></tr><tr><td>color</td><td>字体颜色</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>background</td><td>背景样式</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>class-name</td><td>自定义类名</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>position</td><td>自定义位置，可选值为 <code class="">top</code> <code class="">bottom</code> <code class="">left</code> <code class="">right</code> <code class="">center</code></td><td>string</td><td><code class="">top</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件回调</td><td><code class="">-</code></td></tr><tr><td>closed</td><td>关闭事件回调</td><td><code class="">-</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-notify-text-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-notify-padding</td><td><em>12px 0</em></td></tr><tr><td>--cub-notify-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-notify-height</td><td><em>44px</em></td></tr><tr><td>--cub-notify-line-height</td><td><em>auto</em></td></tr><tr><td>--cub-notify-base-background-color</td><td><em>linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-notify-primary-background-color</td><td><em>linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)</em></td></tr><tr><td>--cub-notify-success-background-color</td><td><em>linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)</em></td></tr><tr><td>--cub-notify-danger-background-color</td><td><em>rgba(250, 50, 25, 1)</em></td></tr><tr><td>--cub-notify-warning-background-color</td><td><em>linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%)</em></td></tr></tbody></table>',9),Z={},_="",A=p({__name:"doc",setup(w,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(N,C)=>{const l=o("demo-block");return h(),r("div",i,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBpcy1MaW5rIEBjbGljaz0iYmFzZU5vdGlmeSgn5Z+656GA55So5rOVJykiPswQPC/IQz4KPC/KXDxzY3JpcHQgbGFuZz0idHMixG9pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd8Z7ySRAY3VidWnEa3VpzC3NGS9kaXN0L3BhY2thZ2VzL27FQy9zdHlsxmFleMU0ZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOoA/iA9IChtc2c6IHN0cmluZykgPT7JLCDrAKsudGV4dMQqLMsfICBvbkNsb3NlOiAozzrIbG9sZS5sb2coJ2PEKCcp5ACpyAF9LM9KaWNr30rGSmlja89KyQx9yRh9yAlyZXR1cm7LUuoA/s4rxEZ9Owo8L+YB3D4K"},{default:t(()=>[j]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i6YCa55+l57G75Z6LIsQoyyogaXMtTGluayBAY2xpY2s9InByaW1hcnlOb3RpZnkoJ+S4u+imgcZCJykiPswQPC/IRt9VInN1Y2Nlc3PIVeaIkOWKn8pVzBDfVctVZXJyb3LIU+WNsemZqcpTzBDfU8tTd2FybmluZ8hV6K2m5ZGKylXMEM5Vyg7mAXs+Cjwv6gGaPHNjcmlwdCBsYW5nPSJ0c+UBhWltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB1zaG935gCPySRAY3VidWnEcXVpzC3NGS9kaXN0L3BhY2thZ2VzL27FQy9zdHlsxmFleMU0ZGVmYXVsdCB75QEZc2V0dXAoKccOICBjb25zdCDtAhIgPSAobXNnOiBzdHJpbmcpID0+yS8g6wCuLsc2xC0pxHHEAX3ICcZZ7QIW31nKWcc23FnrAhrfV8pXZGFuZ2Vy3FbtAh3fWMpYxDbWVnJldHVybss27QFpLMpN7AEnyhfrAOXKFe0ApM5xfQrFCzwv5gKNPgo="},{default:t(()=>[u]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i6Ieq5a6a5LmJ6IOM5pmv6Imy5ZKM5a2X5L2T6aKc6ImyIsQ9yz8gaXMtTGluayBAY2xpY2s9ImN1c0JnTm90aWZ5KCffT4myJykiPt8libI8L8huxH3KDuYAu/8AzsVa5pe26ZW//wC8PSJ0aW1l8QC7xjztAKnGE/8Al/8Al8RI5L2N572u/wCXPSJwb3NpdGlvbvEAm8ZA7QCbxhP/AJsKPC/qAgw8c2NyaXB0IGxhbmc9InRz5QCPaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3fmAJXJJEBjdWJ1acRxdWnMLc0ZL2Rpc3QvcGFja2FnZXMvbsVDL3N0eWzGYWV4xTRkZWZhdWx0IHvlASBzZXR1cCgpxw4gIGNvbnN0IOsCbyA9IChtc2c6IHN0cmluZykgPT7JLSDrAKwudGV4dMQqLCB7IGNvbG9yOiAnI2FkMDAwMCcsIGJhY2vkASduZMQXZmZlMWUxJyB9KeQAmcQBfcgJ5gCB6gI0/wCA9gCAZHVyYeQB3DogMeQAgNpo7gIF32zWbMhDOiAnYm90dG9t9QDXcmV0dXJuy07rAWMsyRXqAPfKFO4Ao85YfQrFCzwv5gJuPgo="},{default:t(()=>[y]),_:1}),b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i57uE5Lu26LCD55SoIsQoyyogaXMtTGluayBAY2xpY2s9Im9uQ8QJIj7MNjwvyDDLP25vdGlmeSB2LW1vZGVsOnZpc2lixG9zaG93IiA6ZHVyYXRpb249IjIwMDDHeCAgPHNwYW4+Q29udGVudDwvxQ7GVMVkxlXEEsp05gDOPgo8L+oA7TxzY3JpcHQgbGFuZz0idHPFYGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7zB3kAKBOxWfJJEBjdWJ1acRxdWnMLc0ZL2Rpc3QvcGFja2FnZXMv5gCqL3N0eWzGYWV4xTRkZWZhdWx0IHvlANZzZXR1cCgpxw4gIGNvbnN05QCDID3kAKcoZmFsc2UpxEDKH+cBhCA9ICgpID0+yT0gxTkudmFsdWUgPSB0cnVlyDl9yAlyZXR1cm7PMyzJDsdbzjZ9CsULPC/mAVU+Cg=="},{default:t(()=>[f]),_:1}),k])}}});export{A as default,_ as excerpt,Z as frontmatter};
