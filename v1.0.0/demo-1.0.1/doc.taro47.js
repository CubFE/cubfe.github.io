import{d as p,r,b as o,k as l,w as n,aq as c,e as a,o as d,l as s}from"./style_icon.js";const h={class:"markdown-body"},i=c(`<h1>Notify 消息通知</h1><h3>介绍</h3><p>在页面顶部展示消息提示</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);
</code></pre><h3>基础用法</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"baseState.state.desc"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"baseState.methods.cellClick"'),s(">")]),s("基础用法"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-notify"),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"onClick"'),s(`
      @`),a("span",{class:"hljs-attr"},"closed"),s("="),a("span",{class:"hljs-string"},'"onClosed"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"baseState.state.show"'),s(`
      `),a("span",{class:"hljs-attr"},":msg"),s("="),a("span",{class:"hljs-string"},'"baseState.state.desc"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onClosed"),s(" = ("),a("span",{class:"hljs-params"}),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'closed'"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onClick"),s(" = ("),a("span",{class:"hljs-params"}),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'click'"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(` baseState = {
        `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
          `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"'基础用法'"),s(`
        }),
        `),a("span",{class:"hljs-attr"},"methods"),s(`: {
          `),a("span",{class:"hljs-title function_"},"cellClick"),s("("),a("span",{class:"hljs-params"}),s(`) {
            baseState.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"show"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
          }
        }
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        baseState,
        onClosed,
        onClick
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"通知类型",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"通知类型"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-notify"),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"onClick"'),s(`
      @`),a("span",{class:"hljs-attr"},"closed"),s("="),a("span",{class:"hljs-string"},'"onClosed"'),s(`
      `),a("span",{class:"hljs-attr"},":type"),s("="),a("span",{class:"hljs-string"},'"notifyState.state.type"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"notifyState.state.show"'),s(`
      `),a("span",{class:"hljs-attr"},":msg"),s("="),a("span",{class:"hljs-string"},'"notifyState.state.desc"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"notifyState.methods.cellClick('primary','主要通知')"`),s(">")]),s("主要通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"notifyState.methods.cellClick('success','成功通知')"`),s(">")]),s("成功通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"notifyState.methods.cellClick('danger','危险通知')"`),s(">")]),s("危险通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"is-Link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"notifyState.methods.cellClick('warning','警告通知')"`),s(">")]),s("警告通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onClosed"),s(" = ("),a("span",{class:"hljs-params"}),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'closed'"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onClick"),s(" = ("),a("span",{class:"hljs-params"}),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'click'"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(` notifyState = {
        `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
          `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'primary'"),s(`
        }),
        `),a("span",{class:"hljs-attr"},"methods"),s(`: {
          `),a("span",{class:"hljs-title function_"},"cellClick"),s("("),a("span",{class:"hljs-params"},"type: string, desc: string"),s(`) {
            notifyState.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"show"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
            notifyState.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"type"),s(` = type;
            notifyState.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"desc"),s(` = desc;
          }
        }
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(` customState = {
        `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
          `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'primary'"),s(`,
          `),a("span",{class:"hljs-attr"},"duration"),s(": "),a("span",{class:"hljs-number"},"3000"),s(`
        }),
        `),a("span",{class:"hljs-attr"},"methods"),s(`: {
          `),a("span",{class:"hljs-title function_"},"cellClick"),s("("),a("span",{class:"hljs-params"},"type: string, desc: string, duration: number"),s(`) {
            customState.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"show"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
            customState.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"type"),s(` = type;
            customState.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"desc"),s(` = desc;
            customState.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"duration"),s(` = duration;
          }
        }
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        notifyState,
        customState,
        onClosed,
        onClick
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=c('<h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>提示的信息类型，可选值为<code class="">primary</code> <code class="">success</code> <code class="">danger</code> <code class="">warning</code></td><td>string</td><td><code class="">danger</code></td></tr><tr><td>visible</td><td>显示与否</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>msg</td><td>展示文案，支持通过<code class="">\\n</code>换行</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>duration</td><td>展示时长(ms)，值为 0 时，notify 不会消失</td><td>number</td><td><code class="">3000</code></td></tr><tr><td>color</td><td>字体颜色</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>background</td><td>背景颜色</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>class-name</td><td>自定义类名</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>position</td><td>自定义位置，可选值为 <code class="">top</code> <code class="">bottom</code> <code class="">left</code> <code class="">right</code> <code class="">center</code></td><td>string</td><td><code class="">top</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件回调</td><td><code class="">-</code></td></tr><tr><td>closed</td><td>关闭事件回调</td><td><code class="">-</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-notify-text-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-notify-padding</td><td><em>12px 0</em></td></tr><tr><td>--cub-notify-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-notify-height</td><td><em>44px</em></td></tr><tr><td>--cub-notify-line-height</td><td><em>auto</em></td></tr><tr><td>--cub-notify-base-background-color</td><td><em>linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-notify-primary-background-color</td><td><em>linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)</em></td></tr><tr><td>--cub-notify-success-background-color</td><td><em>linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)</em></td></tr><tr><td>--cub-notify-danger-background-color</td><td><em>rgba(250, 50, 25, 1)</em></td></tr><tr><td>--cub-notify-warning-background-color</td><td><em>linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%)</em></td></tr></tbody></table>',8),C={},w="",v=p({__name:"doc.taro",setup(y,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(b,f)=>{const t=r("demo-block");return d(),o("div",h,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCA6dGl0bGU9ImJhc2VTdGF0ZS5zxQZkZXNjIsQxyzMgaXMtTGluayBAY2xpY2vMNW1ldGhvZHMuxCdDxB0iPuWfuuehgOeUqOazlTwvyETLU25vdGlmecUQIMlTb27GP8oXb3NlZMYYxArIGXYtbW9kZWw6dmlzaWL0AMFzaG93yC06bXNn0iLlAOPFIi/lARrpAKTmARs+Cjwv6gE6PHNjcmlwdCBsYW5nPSJ0c+UBHGltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB7xW9zZXR1cCgpxw4gIGNvbnN0IOgA4iA9ICgpID0+xRdvbGUubG9nKCfmAQgnKcRVzjRpY2vYM2lja8QyzTPpAQYgPekAgSAg5QESOukAyCjKGiAg5AFKOiBmYWxzZSzLF+QBPzogJ+wB5yfJH30pyivnAhw6y28gIOkCKesBCMYB9AHJID0gdHJ1ZegA/cViymzHCn3IH3JldHVybstXyVPqAJXoAW7OEmlja85NxFx9Owo8L+YB/z4K"},{default:n(()=>[j]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i6YCa55+l57G75Z6LIsQoxypub3RpZnnFECAgQGNsaWNrPSJvbkPECSLKF29zZWTGGMQKyBk6dHlwZT0ixkRTdGF0ZS5zxQbEGMgldi1tb2RlbDp2aXNpYuQAi9Ivc2hvd8lUbXNn1CRkZXNjxiQv6wC/5ADpIGlzLUxpbmvpAL/MPW1ldGhvZHMuxCnlANUoJ3ByaW1hcnknLCfkuLvopoHmARsnKSI+zBA8L8hg32/fbydzdWNjZXNzJywn5oiQ5Yqfym/MEN9v32/Lb2RhbmdlcicsJ+WNsemZqcpuzBDfbt9uy253YXJuaW5nJywn6K2m5ZGKym/MEM5vyg7mAqM+Cjwv6gLCPHNjcmlwdCBsYW5nPSJ0c+UCrWltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QDXc2V0dXAoKccOICBjb25zdCDoAsYgPSAoKSA9PsUXb2xlLmxvZygn5gLsJynEVc40aWNr2DNpY2vEMs0z6wE6ID3pAIMgIOUCzzrpAMooyhogIOQDCTogZmFsc2UsyxfkAvw6ICcnzBTkA2M6IOkCzckafSnKJucBsTrLfiAg6gG+xkNzdHJpbmcsx2XGDuoBM8YB9gOzID0gdHJ1ZegBKtgrxGfEK3lw3yvmA+UgPeUAi8wrfckMyAp97gGfY3VzdG9t/wFs/wFsxwH/AWzlBDnML3VyYXRpb246IDMwMDD/AYb/AYbwAYYsy15udW1iZXLwAZjrAPj/AZjTK/kBmNIr9wGY1SvnALPEL8cL/wHLyB9yZXR1cm7rAOLrAiDqAU7LcsoV6APTzhJpY2vOZMRzfTsKPC/mBGQ+Cg=="},{default:n(()=>[m]),_:1}),u])}}});export{v as default,w as excerpt,C as frontmatter};
