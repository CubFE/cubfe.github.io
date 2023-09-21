import{d,r as p,b as h,k as l,w as n,aq as c,e as a,o as r,l as s}from"./style_icon.js";const o={class:"markdown-body"},j=c(`<h1>Searchbar 搜索栏</h1><h3>介绍</h3><p>搜索栏</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Searchbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Searchbar</span>);
</code></pre><h3>基础用法</h3>`,6),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),i=a("h3",null,"设置搜索框形状",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u=a("h3",null,"搜索事件监听",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(" @"),a("span",{class:"hljs-attr"},"search"),s("="),a("span",{class:"hljs-string"},'"search"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" search = "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"}),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'搜索触发'"),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        search
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"显示搜索 icon",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:leftin"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Search2"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Search2"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Search2"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"右侧添加搜索文字",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:rightout"),s(">")]),s(" 搜索 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"更改输入框内部及外部的背景样式",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(),a("span",{class:"hljs-attr"},"background"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(to right, #9866F0, #EB4D50)"'),s(),a("span",{class:"hljs-attr"},"input-background"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"自定义清除按钮 icon",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:clear-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"icon"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width: 10px; height: 10px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(` icon =
        `),a("span",{class:"hljs-string"},"'https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        icon
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"显示全部 icon",-1),V=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:leftout"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Left"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:leftin"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Search2"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:rightin"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Photograph"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:rightout"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Message"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Search2"),s(", "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Photograph"),s(", "),a("span",{class:"hljs-title class_"},"Message"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Search2"),s(", "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Photograph"),s(", "),a("span",{class:"hljs-title class_"},"Message"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前输入的值</td><td>number | string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>label</td><td>搜索框左侧文本</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>shape</td><td>搜索框形状，可选值为 <code class="">square</code> <code class="">round</code></td><td>string</td><td><code class="">round</code></td></tr><tr><td>max-length</td><td>最大输入长度</td><td>number | string</td><td><code class="">9999</code></td></tr><tr><td>input-type</td><td>输入框类型</td><td>string</td><td><code class="">text</code></td></tr><tr><td>placeholder</td><td>输入框默认暗纹</td><td>string</td><td><code class="">请输入</code></td></tr><tr><td>clearable</td><td>是否展示清除按钮</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>clear-icon</td><td>自定义清除按钮图标（默认使用 <code class="">@cubui/cubui-icons</code>）</td><td>Object</td><td><code class="">CloseCircle</code></td></tr><tr><td>background</td><td>输入框外部背景</td><td>string</td><td><code class="">#fff</code></td></tr><tr><td>input-background</td><td>输入框内部背景</td><td>string</td><td><code class="">#f7f7f7</code></td></tr><tr><td>confirm-type</td><td>键盘右下角按钮的文字，仅在<code class="">type=&#39;text&#39;</code>时生效，可选值 <code class="">send</code>：发送、<code class="">search</code>：搜索、<code class="">next</code>：下一个、<code class="">go</code>：前往、<code class="">done</code>：完成</td><td>string</td><td><code class="">done</code></td></tr><tr><td>autofocus</td><td>是否自动聚焦</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>focus-style</td><td>聚焦时搜索框样式</td><td>Object</td><td><code class="">-</code></td></tr><tr><td>disabled</td><td>是否禁用输入框</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>输入框只读</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>input-align</td><td>对齐方式，可选 <code class="">left</code> <code class="">center</code> <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>输入内容时触发</td><td><code class="">val, event</code></td></tr><tr><td>focus</td><td>聚焦时触发</td><td><code class="">val, event</code></td></tr><tr><td>blur</td><td>失焦时触发</td><td><code class="">val, event</code></td></tr><tr><td>clear</td><td>点击清空时触发</td><td><code class="">val</code></td></tr><tr><td>search</td><td>按下 ENTER 键时触发</td><td><code class="">val, event</code></td></tr><tr><td>click-input</td><td>点击输入区域时触发</td><td><code class="">event</code></td></tr><tr><td>click-left-icon</td><td>点击左侧图标时触发</td><td><code class="">val, event</code></td></tr><tr><td>click-right-icon</td><td>点击右侧图标时触发</td><td><code class="">val, event</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>leftin</td><td>输入框内 左 icon</td></tr><tr><td>leftout</td><td>输入框外 左 icon</td></tr><tr><td>rightin</td><td>输入框内 右 icon</td></tr><tr><td>rightout</td><td>输入框外 右 icon</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-searchbar-background</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-searchbar-right-out-color</td><td><em>var(--cub-black)</em></td></tr><tr><td>--cub-searchbar-padding</td><td><em>9px 16px</em></td></tr><tr><td>--cub-searchbar-width</td><td><em>100%</em></td></tr><tr><td>--cub-searchbar-input-background</td><td><em>#f7f7f7</em></td></tr><tr><td>--cub-searchbar-input-padding</td><td><em>0 0 0 13px</em></td></tr><tr><td>--cub-searchbar-input-height</td><td><em>32px</em></td></tr><tr><td>--cub-searchbar-input-width</td><td><em>100%</em></td></tr><tr><td>--cub-searchbar-input-border-radius</td><td><em>16px</em></td></tr><tr><td>--cub-searchbar-input-box-shadow</td><td><em>0 0 8px 0 rgba(0, 0, 0, 0.04)</em></td></tr><tr><td>--cub-searchbar-input-bar-color</td><td><em>inherit</em></td></tr><tr><td>--cub-searchbar-input-bar-placeholder-color</td><td><em>inherit</em></td></tr></tbody></table>',11),R={},B="",z=d({__name:"doc.taro",setup(Z,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(Y,A)=>{const t=p("demo-block");return r(),h("div",o,[j,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUiPjwvzSY+CjwvykQ8c2NyaXB0IGxhbmc9InRzIsRXaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB/EMekArzogJyfHGH0pOwrHC3JldHVybslRICAuLi7mAJIoxVcpyDPkAJQgIH0KxQs8L+YA3T4K"},{default:n(()=>[g]),_:1}),i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHNoYXBlPSJzcXVhcmUiPjwvzR8+Cjwvyj0="},{default:n(()=>[m]),_:1}),u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUiIEDGDsgWIj48L803Pgo8L8pVPHNjcmlwdCBsYW5nPSJ0cyLEaGltcG9ydCB7IHRvUmVmcywgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclMKMgfxDHpAMA6ICcnxxh9KTsKzkLFJyA9IGZ1bmN0aW9uIMtlxiVvbGUubG9nKCfmkJzntKLop6blj5EnKeQAq8VTyVJyZXR1cm7LPi4uLuYA7ijlAKkpLO8AnspCxQcKxQs8L+YBPz4K"},{default:n(()=>[b]),_:1}),y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUixCggIMk3IHYtc2xvdDpsZWZ0aW7GHSAgPFPFMjIgL8cvL81nL81oPgrMHzxzY3JpcHQgbGFuZz0idHPFcWltcG9ydCB7IHRvUmVmcywgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wq6ACCyCFAY3ViZmUvaWNvbnMtdnVlLXRhcm/FM2V4xTNkZWZhdWx0IHvlALJjb21wb25lbnRzOsxNLMUdc2V0dXAoKccrxC1uc3Qgc3TkARA96QCcKMgfxDHpAUE6ICcnxxh9KTsKxwtyZXR1cm7JUSAgLi4u5gDsKMVXKcgz5ACxICB9CsULPC/mAS0+Cg=="},{default:n(()=>[f]),_:1}),v,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUixCggIMk3IHYtc2xvdDpyaWdodG91dD4g5pCc57SiIDwvzVovzVs+CswfPHNjcmlwdCBsYW5nPSJ0c8VkaW1wb3J0IHsgdG9SZWZzLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+UAoXNldHVwKCnHDiAgY29uc3Qgc3TkALM9yUwoyB/EMekA5DogJyfHGH0pOwrHC3JldHVybslRICAuLi7mAJwoxVcpyDPkAJQgIH0KxQs8L+YA3T4K"},{default:n(()=>[I]),_:1}),w,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUiIGJhY2tncm91bmQ9ImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzk4NjZGMCwgI0VCNEQ1MCkiIGlucHV0Lcw/I2ZmZiLFeS/Nej4KPC/qAJg8c2NyaXB0IGxhbmc9InRzxTJpbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIH8Qx6QEDOiAnJ8cYfSk7CscLcmV0dXJuyVEgIC4uLuYAnCjFVynIM+QAlCAgfQrFCzwv5gDdPgo="},{default:n(()=>[k]),_:1}),_,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUixCggIMk3IHYtc2xvdDpjbGVhci1pY29uxiEgIDxpbWcgOnNyYz0ixBciIHN0eWxlPSJ3aWR0aDogMTBweDsgaGVpZ2h0xg4iIC/HXS/tAJUv7QCWPgrMHzxzY3JpcHQgbGFuZz0idHPlAJ9pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7xX9zZXR1cCgpxw4gIGNvbnN0IOQAxCA9xxMgICdodHRwczovL2ltZzEwLjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTcwMTMzLzMwLzIyOTAyLzEwNTQ2LzYxODMzNjI2RTMyZDdjY2RlL2E3YzM3M2JhMzBkZTlhODkucG5n5QCq6gCJc3TkAXc96QDVKOgAqOQAuukBqDogJyfHGH0pyEFyZXR1cm7pANkgIC4uLuYBJCjFViksyRrkAO/IQMY/fQrFCzwv5gFzPgo="},{default:n(()=>[x]),_:1}),C,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUixCggIMk3IHYtc2xvdDpsZWZ0b3V0xh4gIDxMZWZ0IC/HLS/MZdc9aW7JPFPFbzLfP8o/cmlnaMxAUGhvdG9ncmFwaN9Dz0PsAMBNZXNzYWdl1kE8L+0BKT4KzB88c2NyaXB0IGxhbmc9InRz5QEyaW1wb3J0IHsgdG9SZWZzLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7zCrnAQYsIOQBSywg6gDVLCDoAJ3IPEBjdWJmZS9pY29ucy12dWUtdGFyb8VOZXjFTmRlZmF1bHQge+UAzWNvbXBvbmVudHM632jIaCzFOHNldHVwKCnHRsRIbnN0IHN05AFIPekA0ijIH8Qx6QI4OiAnJ8cYfSk7CscLcmV0dXJuyVEgIC4uLuYBIijFVynIM+QAzCAgfQrFCzwv5gFjPgo="},{default:n(()=>[V]),_:1}),H])}}});export{z as default,B as excerpt,R as frontmatter};
