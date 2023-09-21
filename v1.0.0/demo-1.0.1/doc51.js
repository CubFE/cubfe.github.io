import{d as p,r as h,b as r,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const o={class:"markdown-body"},d=c(`<h1>Overlay 遮罩层</h1><h3>介绍</h3><p>创建一个遮罩层，通常用于阻止用户进行其他操作</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Overlay</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Overlay</span>);
</code></pre><h3>基础用法</h3><p>使用 <code class="">visible</code> 控制遮罩层的显示/隐藏</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("显示遮罩层"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"遮罩样式",-1),u=a("p",null,[s("通过 "),a("code",{class:""},"overlay-style"),s(" 进行设置遮罩样式")],-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("遮罩样式"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":overlay-style"),s("="),a("span",{class:"hljs-string"},'"overlayStyle"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"overlayStyle"),s(`: {
          `),a("span",{class:"hljs-attr"},"backgroundColor"),s(": "),a("span",{class:"hljs-string"},"'rgba(0, 0, 0, .2)'"),s(`
        }
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"设置动画时间",-1),y=a("p",null,[s("通过 "),a("code",{class:""},"duration"),s(" 设置遮罩显示/隐藏的时间，时间 "),a("code",{class:""},"s")],-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("设置动画时间"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":duration"),s("="),a("span",{class:"hljs-string"},'"2.5"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"锁定背景滚动",-1),w=a("p",null,[s("通过 "),a("code",{class:""},"lock-scroll"),s(" 设置遮罩在显示时是否锁定背景，禁止滚动")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("锁定背景滚动"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":lock-scroll"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"嵌套内容",-1),x=a("p",null,[s("支持默认 "),a("code",{class:""},"slot"),s("，可嵌套任意内容")],-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("嵌套内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrapper"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"content"'),s(">")]),s("这里是正文"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".wrapper"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".content"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"8px"),s(`;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"color"),s(`: red;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"点击遮罩不关闭",-1),G=a("p",null,[s("设置 "),a("code",{class:""},"close-on-click-overlay"),s(" 可控制点击遮罩是否关闭，如果设置为 "),a("code",{class:""},"true"),s("，那么 "),a("code",{class:""},"click"),s(" 事件也将同时失效")],-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("点击遮罩不关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":close-on-click-overlay"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrapper"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"content"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"show = false;"'),s(">")]),s("close"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".wrapper"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".content"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"8px"),s(`;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"color"),s(`: red;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),X=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>控制遮罩的显示/隐藏</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>z-index</td><td>自定义遮罩层级</td><td>string | number</td><td><code class="">2000</code></td></tr><tr><td>duration</td><td>显示/隐藏的动画时长，单位秒</td><td>string | number</td><td><code class="">0.3</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩类名</td><td>string</td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>lock-scroll</td><td>遮罩显示时的背景是否锁定</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>close-on-click-overlay</td><td>点击遮罩时是否关闭</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td>event: MouseEvent</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>内嵌遮罩内容自定义</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-overlay-bg-color</td><td><em>rgba(0, 0, 0, 0.7)</em></td></tr></tbody></table>',11),H={},W="",z=p({__name:"doc",setup(R,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(B,Y)=>{const l=h("demo-block");return j(),r("div",o,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPuaYvuekuumBrue9qeWxgjwvykDJT292ZXJsYXkgdi1tb2RlbDp2aXNpYmxlxkoiPsY0xyU+Cjwv6gCQPHNjcmlwdCBsYW5nPSJ0cyLEVGltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclUKMgfICDkAKY6IGZhbHNlxxR9KcRexAFyZXR1cm7JTCAgLi4u5gCNKMVSKcgyxjF9CsULPC/mANg+Cg=="},{default:t(()=>[i]),_:1}),g,u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPumBrue9qeagt+W8jzwvyj3JTG92ZXJsYXkgdi1tb2RlbDp2aXNpYmxlxkciIDrHIC1zdHnEFscPU8QOIj7GUscUPgo8L+oAqzxzY3JpcHQgbGFuZz0idHMixHJpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg5ADEOiBmYWxzZSzJFewAwzrJTMQBYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCDGAy4yKSfJL33HCn0p5ACwxAFyZXR1cm7LUi4uLuYA3yjlAKQpyDLGMcRBfTsKPC/mASo+Cg=="},{default:t(()=>[m]),_:1}),b,y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPuiuvue9ruWKqOeUu+aXtumXtDwvykPJUm92ZXJsYXkgdi1tb2RlbDp2aXNpYmxlxk0iIDpkdXJhdGlvbj0iMi41Ij7GRMc1Pgo8L+oAozxzY3JpcHQgbGFuZz0idHMixGRpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg5AC2OiBmYWxzZccUfSnEXsQBcmV0dXJuyUwgIC4uLuYAjSjFUinIMsYxfQrFCzwv5gDYPgo="},{default:t(()=>[v]),_:1}),I,w,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPumUgeWumuiDjOaZr+a7muWKqDwvykPJUm92ZXJsYXkgdi1tb2RlbDp2aXNpYmxlxk0iIDpsb2NrLXNjcm9sbD0ixlrGSMc5Pgo8L+oApzxzY3JpcHQgbGFuZz0idHMixGhpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg5AC6OiBmYWxzZccUfSnEXsQBcmV0dXJuyUwgIC4uLuYAjSjFUinIMsYxfQrFCzwv5gDYPgo="},{default:t(()=>[f]),_:1}),k,x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InN1Y2Nlc3MiIEBjbGljaz0ic2hvdyA9IHRydWUiPuW1jOWll+WGheWuuTwvyj3JTG92ZXJsYXkgdi1tb2RlbDp2aXNpYmzEWGhvdyLEJyAgPGRpdiBjbGFzcz0id3JhcHBlcscazhxjb250ZW50Ij7ov5nph4zmmK/mraPmloc8L2RpdsdLyAvmAI3Hfj4KPC/qAOY8c2NyaXB0IGxhbmc9InRzxWxpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7xXhzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg5AD/OiBmYWxzZccUfSnEXsQBcmV0dXJuyUwgIC4uLuYAjSjFUinIMsYxfQrFCzwv5gDY5ADhdHls5QHPLucBT8dMZGlzcGxheTogZmxleMY9aGVpZ2h0OiAxMDAlxhJhbGlnbi1pdGVtczogY2VudGVyxhlqdXN0aWZ5LecBh8wd5ACDLscY2mx3aWR0aDogMTUwcNB+yhNiYWNrZ3JvdW5kOiAjZmZmxxZvcmRlci1yYWRpdXM6IDjILv8ArfUAreQBnmxvcjogcmVkxBB95AE75gEy"},{default:t(()=>[A]),_:1}),Z,G,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPueCueWHu+mBrue9qeS4jeWFs+mXrTwvykbJVW92ZXJsYXkgdi1tb2RlbDp2aXNpYmxlxlAiIDpjbG9zZS1vbi3FZ8gvPSJmYWxzZSLERyAgPGRpdiBjbGFzcz0id3JhcHBlcscazhxjb250ZW506AC0LnN0b3DGaSA9IMVROyI+xXE8L2RpdsddyAvmAL/nAIE+Cjwv6gEhPHNjcmlwdCBsYW5nPSJ0c8V+aW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge8V4c2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOQAyDrmAMfHFH0pxF7EAXJldHVybslMICAuLi7mAI0oxVIpyDLGMX0KxQs8L+YA2OQA4XR5bOUCCi7nAWHHTGRpc3BsYXk6IGZsZXjGPWhlaWdodDogMTAwJcYSYWxpZ24taXRlbXM6IGNlbnRlcsYZanVzdGlmeS3nAZnMHeQAgy7HGNpsd2lkdGg6IDE1MHDQfsoTYmFja2dyb3VuZDogI2ZmZscWb3JkZXItcmFkaXVzOiA4yC7/AK31AK3kAZ5sb3I6IHJlZMQQfeQBO+YBMg=="},{default:t(()=>[_]),_:1}),X])}}});export{z as default,W as excerpt,H as frontmatter};
