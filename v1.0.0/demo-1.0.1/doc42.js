import{d as p,r as d,b as r,k as l,w as n,aq as e,e as a,l as s,o as h}from"./style_icon.js";const o={class:"markdown-body"},j=e(`<h1>InputNumber 数字输入框</h1><h3>介绍</h3><p>通过点击按钮控制数字增减。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">InputNumber</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">InputNumber</span>);
</code></pre><h3>基础用法</h3><p>初始化一个默认值</p>`,7),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),i=a("h3",null,"步长设置",-1),m=a("p",null,[s("设置步长 "),a("code",{class:""},"step"),s(" 5")],-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),b=a("h3",null,"限制输入范围",-1),y=a("p",null,[a("code",{class:""},"min"),s(" 和 "),a("code",{class:""},"max"),s(" 属性分别表示最小值和最大值")],-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),I=a("h3",null,"禁用状态",-1),w=a("p",null,[a("code",{class:""},"disabled"),s(" 禁用状态下无法点击按钮或修改输入框。")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),_=a("h3",null,"只读禁用输入框",-1),C=a("p",null,[a("code",{class:""},"readonly"),s(" 设置只读禁用输入框输入行为")],-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),k=a("h3",null,"支持小数点",-1),H=a("p",null,[s("设置步长 "),a("code",{class:""},"step"),s(" 0.1 "),a("code",{class:""},"decimal-places"),s(" 小数保留 1 位")],-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),B=a("h3",null,"支持异步修改",-1),x=a("p",null,[s("通过 "),a("code",{class:""},"change"),s(" 事件和 "),a("code",{class:""},"model-value"),s(" 进行异步修改")],-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
        showToast.`),a("span",{class:"hljs-title function_"},"loading"),s("("),a("span",{class:"hljs-string"},"'异步演示 2 秒后更改'"),s(`);
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          state.`),a("span",{class:"hljs-property"},"value"),s(` = value;
          showToast.`),a("span",{class:"hljs-title function_"},"hide"),s(`();
        }, `),a("span",{class:"hljs-number"},"2000"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), onChange };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),X=a("h3",null,"自定义按钮大小",-1),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),V=a("h3",null,"自定义按钮图标",-1),Y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),R=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>初始值</td><td>string | number</td><td>-</td></tr><tr><td>input-width</td><td>输入框宽度</td><td>string</td><td>``</td></tr><tr><td>button-size</td><td>操作符+、-尺寸</td><td>string</td><td>``</td></tr><tr><td>min</td><td>最小值限制</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>max</td><td>最大值限制</td><td>string | number</td><td><code class="">9999</code></td></tr><tr><td>step</td><td>步长</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>decimal-places</td><td>设置保留的小数位</td><td>string | number</td><td><code class="">0</code></td></tr><tr><td>disabled</td><td>禁用所有功能</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>只读状态禁用输入框操作行为</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>left-icon</td><td>自定义左侧按钮</td></tr><tr><td>right-icon</td><td>自定义右侧按钮</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>add</td><td>点击增加按钮时触发</td><td><code class="">(event: Event)</code></td></tr><tr><td>reduce</td><td>点击减少按钮时触发</td><td><code class="">(event: Event) </code></td></tr><tr><td>overlimit</td><td>点击不可用的按钮时触发</td><td><code class="">(event: Event,type:string (reduce or add) )</code></td></tr><tr><td>change</td><td>值改变时触发</td><td><code class="">(value: number , event : Event) </code></td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td><code class="">(event: Event) </code></td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><code class="">(event: Event ) </code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-inputnumber-icon-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-inputnumber-icon-void-color</td><td><em>var(--cub-disable-color)</em></td></tr><tr><td>--cub-inputnumber-icon-size</td><td><em>20px</em></td></tr><tr><td>--cub-inputnumber-input-width</td><td><em>40px</em></td></tr><tr><td>--cub-inputnumber-input-font-size</td><td><em>12px</em></td></tr><tr><td>--cub-inputnumber-input-font-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-inputnumber-input-background-color</td><td><em>var(--cub-help-color)</em></td></tr><tr><td>--cub-inputnumber-input-border-radius</td><td><em>4px</em></td></tr><tr><td>--cub-inputnumber-input-margin</td><td><em>0 6px</em></td></tr><tr><td>--cub-inputnumber-input-border</td><td><em>0</em></td></tr><tr><td>--cub-inputnumber-border</td><td><em>0</em></td></tr><tr><td>--cub-inputnumber-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-inputnumber-height</td><td><em>auto</em></td></tr><tr><td>--cub-inputnumber-line-height</td><td><em>normal</em></td></tr><tr><td>--cub-inputnumber-border-box</td><td><em>content-box</em></td></tr><tr><td>--cub-inputnumber-display</td><td><em>flex</em></td></tr></tbody></table>',11),D={},Q="",z=p({__name:"doc",setup(J,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(E,G)=>{const t=d("demo-block");return h(),r("div",o,[j,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiAvPgo8L8ozPHNjcmlwdCBsYW5nPSJ0cyLERmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDFcyA9xEcoMSnEPcQBcmV0dXJuIHvHH33GGH0KIMQLPC/mAJE+Cg=="},{default:n(()=>[u]),_:1}),i,m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBzdGVwPSI1IiAvPgo8L8o8PHNjcmlwdCBsYW5nPSJ0cyLET2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDFfCA9xEcoMSnEPcQBcmV0dXJuIHvHH33GGH0KIMQLPC/mAJE+Cg=="},{default:n(()=>[g]),_:1}),b,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBtaW49IjEwIiBtYXg9IjIwIiAvPgo8L8pFPHNjcmlwdCBsYW5nPSJ0cyLEWGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAIUgPcRHKDEwKcQ+xAFyZXR1cm4ge8cgfcYYfQogxAs8L+YAkj4K"},{default:n(()=>[v]),_:1}),I,w,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBkaXNhYmxlZCAvPgo8L8o8PHNjcmlwdCBsYW5nPSJ0cyLET2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDFfCA9xEcoMSnEPcQBcmV0dXJuIHvHH33GGH0KIMQLPC/mAJE+Cg=="},{default:n(()=>[f]),_:1}),_,C,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiByZWFkb25seSAvPgo8L8o8PHNjcmlwdCBsYW5nPSJ0cyLET2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDFfCA9xEcoMSnEPcQBcmV0dXJuIHvHH33GGH0KIMQLPC/mAJE+Cg=="},{default:n(()=>[Z]),_:1}),k,H,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBzdGVwPSIwLjEiIGRlY2ltYWwtcGxhY2VzPSIxIiAvPgo8L8pRPHNjcmlwdCBsYW5nPSJ0cyLEZGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAJEgPcRHKDEpxD3EAXJldHVybiB7xx99xhh9CiDECzwv5gCRPgo="},{default:n(()=>[A]),_:1}),B,x,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIDptb2RlbC12YWx1ZT0ixQciIEBjaGFuZ2U9Im9uQ8UKIiAvPgo8L8pLPHNjcmlwdCBsYW5nPSJ0cyLEXmltcG9ydCB7IHJlYWN0aXZlLCBnZXRDdXJyZW50SW5zdGFuY2UsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7zD5zaG93VG9hc3TJI0BjdWJ1aS/FBswszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA96QDHKMgfICDlASE6IDHHEX0pxFvKOugBMCA9ICjHK+YBaCkgPT7JZiDqAOMubG9hZGluZygn5byC5q2l5ryU56S6IDIg56eS5ZCO5pu05pS5J8lm5QCyVGltZW91dCgoz1Ug5gC5LsV5ID3mAKzKOsx2aGlkZSjLVn0sIDIwMDDJEn3ICXJldHVybiB7IC4uLuYBuCjFZSks6gDsxy19CsU4PC/mAhs+Cg=="},{default:n(()=>[W]),_:1}),X,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIiBidXR0b24tc2l6ZT0iMzAiIMYud2lkdGg9IjUwIiAvPgo8L8pVPHNjcmlwdCBsYW5nPSJ0cyLEaGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDlAJUgPcRHKDEpxD3EAXJldHVybiB7xx99xhh9CiDECzwv5gCRPgo="},{default:n(()=>[P]),_:1}),V,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5wdXQtbnVtYmVyIHYtbW9kZWw9InZhbHVlIsQlICDJNCAjbGVmdC1pY29uxhogIDxMZWZ0IC/HKS/MXs05cmlnaM86UsQT1js8L/AAmj4KzCI8c2NyaXB0IGxhbmc9InRz5QCpaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHeQAsCwgxnzIJUBjdWJmZS/kAJ5zLcgyZXjFMmRlZmF1bHQge+UAp2NvbXBvbmVudHM60EwsxSFzZXR1cCgpxy/EMW5zdCDlAU4gPeQAmigxKcRexAFyZXR1cm4ge8cffcYYfQogxAs8L+YA5D4K"},{default:n(()=>[Y]),_:1}),R])}}});export{z as default,Q as excerpt,D as frontmatter};
