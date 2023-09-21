import{d,r as p,b as o,k as l,w as n,aq as c,e as a,l as s,o as r}from"./style_icon.js";const h={class:"markdown-body"},u=c(`<h1>Button 按钮</h1><h3>介绍</h3><p>按钮用于触发一个操作，如提交表单。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);
</code></pre><h3>按钮类型</h3><p>按钮支持 <code class="">default</code>、<code class="">primary</code>、<code class="">info</code>、<code class="">warning</code>、<code class="">danger</code>、<code class="">success</code> 六种类型，默认为 <code class="">default</code>。</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("主要按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s("信息按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"default"'),s(">")]),s("默认按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(">")]),s("危险按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s("警告按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s("成功按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b=a("h3",null,"朴素按钮",-1),m=a("p",null,[s("通过 "),a("code",{class:""},"plain"),s(" 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。")],-1),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"plain"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("朴素按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"plain"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s("朴素按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g=a("h3",null,"禁用状态",-1),y=a("p",null,[s("通过 "),a("code",{class:""},"disabled"),s(" 属性来禁用按钮，禁用状态下按钮不可点击。")],-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("禁用状态"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"plain"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s("禁用状态"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"plain"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("禁用状态"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f=a("h3",null,"按钮形状",-1),_=a("p",null,[s("通过 "),a("code",{class:""},"shape"),s(" 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。")],-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("方形按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s("圆形按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k=a("h3",null,"加载状态",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"loading"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"loading"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s("加载中..."),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},":loading"),s("="),a("span",{class:"hljs-string"},'"isLoading"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"changeLoading"'),s(">")]),s("Click me!"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"let"),s(" isLoading = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeLoading"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        isLoading.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          isLoading.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
        }, `),a("span",{class:"hljs-number"},"3000"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        isLoading,
        changeLoading
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=a("h3",null,"图标按钮",-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"plain"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"StarFill"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Star"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    收藏
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"StarFill"),s(", "),a("span",{class:"hljs-title class_"},"Star"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"StarFill"),s(", "),a("span",{class:"hljs-title class_"},"Star"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=c('<h3>按钮尺寸</h3><p>支持 <code class="">large</code>、<code class="">normal</code>、<code class="">small</code>、<code class="">mini</code> 四种尺寸，默认为 <code class="">normal</code>。</p>',2),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("大号按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("普通按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("小型按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"mini"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("迷你按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B=a("h3",null,"块级元素",-1),R=a("p",null,[s("按钮在默认情况下为行内块级元素，通过 "),a("code",{class:""},"block"),s(" 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。")],-1),X=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("块级元素"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C=a("h3",null,"自定义颜色",-1),H=a("p",null,"通过 color 属性可以自定义按钮的颜色。",-1),L=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#7232dd"'),s(">")]),s("单色按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#7232dd"'),s(),a("span",{class:"hljs-attr"},"plain"),s(">")]),s("单色按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(to right, #ff6034, #ee0a24)"'),s(">")]),s(" 渐变色按钮 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型，可选值为 <code class="">primary</code> <code class="">info</code> <code class="">warning</code> <code class="">danger</code> <code class="">success</code> <code class="">default</code></td><td>string</td><td><code class="">default</code></td></tr><tr><td>size</td><td>尺寸，可选值为 <code class="">large</code> <code class="">small</code> <code class="">mini</code> <code class="">normal</code></td><td>string</td><td><code class="">normal</code></td></tr><tr><td>shape</td><td>形状，可选值为 <code class="">square</code> <code class="">round</code></td><td>string</td><td><code class="">round</code></td></tr><tr><td>color</td><td>按钮颜色，支持传入 <code class="">linear-gradient</code> 渐变色</td><td>string</td><td>-</td></tr><tr><td>plain</td><td>是否为朴素按钮</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>block</td><td>是否为块级元素</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>loading</td><td>按钮 <code class="">loading</code> 状态</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>按钮内容</td></tr><tr><td>icon</td><td>按钮图标</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时触发</td><td><code class="">event: MouseEvent</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-button-border-radius</td><td><em>25px</em></td></tr><tr><td>--cub-button-border-width</td><td><em>1px</em></td></tr><tr><td>--cub-button-icon-width</td><td><em>16px</em></td></tr><tr><td>--cub-button-default-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-button-default-border-color</td><td><em>rgba(204, 204, 204, 1)</em></td></tr><tr><td>--cub-button-default-color</td><td><em>rgba(102, 102, 102, 1)</em></td></tr><tr><td>--cub-button-default-padding</td><td><em>0 18px</em></td></tr><tr><td>--cub-button-mini-padding</td><td><em>0 12px</em></td></tr><tr><td>--cub-button-small-padding</td><td><em>0 12px</em></td></tr><tr><td>--cub-button-small-height</td><td><em>28px</em></td></tr><tr><td>--cub-button-mini-height</td><td><em>24px</em></td></tr><tr><td>--cub-button-default-height</td><td><em>38px</em></td></tr><tr><td>--cub-button-large-height</td><td><em>48px</em></td></tr><tr><td>--cub-button-large-line-height</td><td><em>46px</em></td></tr><tr><td>--cub-button-small-line-height</td><td><em>26px</em></td></tr><tr><td>--cub-button-block-height</td><td><em>48px</em></td></tr><tr><td>--cub-button-default-line-height</td><td><em>36px</em></td></tr><tr><td>--cub-button-block-line-height</td><td><em>46px</em></td></tr><tr><td>--cub-button-default-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-button-large-font-size</td><td><em>var(--cub-button-default-font-size)</em></td></tr><tr><td>--cub-button-small-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-button-mini-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-button-mini-line-height</td><td><em>1.2</em></td></tr><tr><td>--cub-button-disabled-opacity</td><td><em>0.68</em></td></tr><tr><td>--cub-button-primary-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-button-primary-border-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-button-primary-background-color</td><td><em>linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-button-info-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-button-info-border-color</td><td><em>rgba(73, 106, 242, 1)</em></td></tr><tr><td>--cub-button-info-background-color</td><td><em>linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)</em></td></tr><tr><td>--cub-button-success-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-button-success-border-color</td><td><em>rgba(38, 191, 38, 1)</em></td></tr><tr><td>--cub-button-success-background-color</td><td><em>linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)</em></td></tr><tr><td>--cub-button-danger-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-button-danger-border-color</td><td><em>rgba(250, 44, 25, 1)</em></td></tr><tr><td>--cub-button-danger-background-color</td><td><em>rgba(250, 44, 25, 1)</em></td></tr><tr><td>--cub-button-warning-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-button-warning-border-color</td><td><em>rgba(255, 158, 13, 1)</em></td></tr><tr><td>--cub-button-warning-background-color</td><td><em>linear-gradient(135deg,rgba(255, 158, 13, 1) 0%,rgba(255, 167, 13, 1) 45%,rgba(255, 182, 13, 1) 83%,rgba(255, 190, 13, 1) 100%)</em></td></tr><tr><td>--cub-button-plain-background-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-button-small-round-border-radius</td><td><em>var(--cub-button-border-radius)</em></td></tr></tbody></table>',11),N={},D="",S=d({__name:"doc",setup(Z,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(V,G)=>{const t=p("demo-block");return r(),o("div",h,[u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiPuS4u+imgeaMiemSrjwvyijWN2luZm8iPuS/oeaBr980yTRkZWZhdWx0Ij7pu5jorqTfN8o3YW5nZXIiPuWNsemZqd82yTZ3YXJuaW5nIj7orablkYrfN8k3c3VjY2VzcyI+5oiQ5Yqf1Dc8L+oBUg=="},{default:n(()=>[j]),_:1}),b,m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHBsYWluIHR5cGU9InByaW1hcnkiPuactOe0oOaMiemSrjwvyi7cPWluZm/cOjwv6gCD"},{default:n(()=>[i]),_:1}),g,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIGRpc2FibGVkIHR5cGU9InByaW1hcnkiPuemgeeUqOeKtuaAgTwvyjHQQHBsYWnRRmluZm/fQ99D/wCJxUY8L+oA1Q=="},{default:n(()=>[I]),_:1}),f,_,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHNoYXBlPSJzcXVhcmUiIHR5xA5wcmltYXJ5Ij7mlrnlvaLmjInpkq48L8o30EbGN2luZm8iPuWchtc0PC/qAIY="},{default:n(()=>[v]),_:1}),k,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIGxvYWRpbmcgdHlwZT0iaW5mbyI+PC/KId4wd2FybmluZyI+5Yqg6L295LitLi4u3D86x0A9ImlzTMYLIsdMc3VjY2VzcyIgQGNsaWNrPSJjaGFuZ2XIJj5DxBYgbWUhzmA8L+oA2wo8c2NyaXB0xHZpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBsZXQg6QCrID3ETihmYWxzZSnESMQBY29uc3Qg7QCtID0gKCkgPT7JRiDKRC52YWx1ZSA9IHRydWXIRMV9VGltZW91dCjQO9Q95QCDyj59LCAzMDAw6QCUfcgJcmV0dXJu9ACILMkT7QC7zkF9CsULPC/oAVg="},{default:n(()=>[w]),_:1}),x,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHNoYXBlPSJzcXVhcmUiIHBsYWluIHR5xBRwcmltYXJ5IsQzICDJQiAjaWNvbsYVICA8U3RhckZpbGwgL8coL81rL8ps33vfddF11nEgIOaUtuiXj9F8zCc8c2NyaXB0IGxhbmc9InRzxW5pbXBvcnQgeyDoANIsxQogfSBmcm9tICdAY3ViZmUv5ACIcy12dWUnOwogIGV4xTVkZWZhdWx0IHvlAIJjb21wb25lbnRzOtNPCiAgfTsKPC/mAIQ+Cg=="},{default:n(()=>[W]),_:1}),Y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHNpemU9ImxhcmdlIiB0eXBlPSJwcmltYXJ5Ij7lpKflj7fmjInpkq48L8o10ETPN+aZrumAmt83yXtzbWFsbNJ7sI/lnovfRMlEbWluadFD6L+35L2g1EM8L+oBDg=="},{default:n(()=>[P]),_:1}),B,R,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIGJsb2NrIHR5cGU9InByaW1hcnkiPuWdl+e6p+WFg+e0oDwvyi4+Cjwvykk="},{default:n(()=>[X]),_:1}),C,H,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIGNvbG9yPSIjNzIzMmRkIj7ljZXoibLmjInpkq48L8op3zggcGxhaW7fPtE+bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY2MDM0LCAjZWUwYTI0KSI+IOa4kOWPmMlgIM5hPC/qAOM="},{default:n(()=>[L]),_:1}),z])}}});export{S as default,D as excerpt,N as frontmatter};
