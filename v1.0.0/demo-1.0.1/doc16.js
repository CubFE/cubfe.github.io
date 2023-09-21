import{d as o,r as p,b as h,k as n,w as l,aq as c,e as a,o as r,l as s}from"./style_icon.js";const g={class:"markdown-body"},d=c(`<h1>Category 商品分类</h1><h3>介绍</h3><p>用于展示商品分类的组件。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Category</span>, <span class="hljs-title class_">CategoryPane</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Category</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CategoryPane</span>);
</code></pre><h3>经典分类模式</h3><p>data 数据格式可参考 <a href="https://storage.360buyimg.com/cubui/3x/categoryData.js">categoryData.js</a>。</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-category"),s(),a("span",{class:"hljs-attr"},":category"),s("="),a("span",{class:"hljs-string"},'"category"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-category-pane"),s(),a("span",{class:"hljs-attr"},":categoryChild"),s("="),a("span",{class:"hljs-string"},'"categoryChild"'),s(" @"),a("span",{class:"hljs-attr"},"onChange"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-category-pane"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-category"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"categoryInfo"),s(`: {},
        `),a("span",{class:"hljs-attr"},"category"),s(`: [{}],
        `),a("span",{class:"hljs-attr"},"categoryChild"),s(`: [{}]
      });

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          `),a("span",{class:"hljs-title function_"},"getData"),s(`();
        }, `),a("span",{class:"hljs-number"},"500"),s(`);
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"getData"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'//storage.360buyimg.com/cubui/3x/categoryData.js'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            `),a("span",{class:"hljs-keyword"},"const"),s(` { categoryInfo, categoryChild } = res;
            data.`),a("span",{class:"hljs-property"},"categoryInfo"),s(` = categoryInfo;
            data.`),a("span",{class:"hljs-property"},"category"),s(" = categoryInfo."),a("span",{class:"hljs-property"},"category"),s(`;
            data.`),a("span",{class:"hljs-property"},"categoryChild"),s(` = categoryChild;
          })
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(`, err));
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"index: any"),s(`) => {
        data.`),a("span",{class:"hljs-property"},"categoryChild"),s(" = []."),a("span",{class:"hljs-title function_"},"concat"),s("(data."),a("span",{class:"hljs-property"},"categoryInfo"),s("."),a("span",{class:"hljs-property"},"category"),s("[index + "),a("span",{class:"hljs-number"},"1"),s("]."),a("span",{class:"hljs-property"},"children"),s(),a("span",{class:"hljs-keyword"},"as"),s(` any);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前分类数据'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        onChange,
        change,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),i=a("h3",null,"只显示文字",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-category"),s(),a("span",{class:"hljs-attr"},":category"),s("="),a("span",{class:"hljs-string"},'"category"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeText"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-category-pane"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},":categoryChild"),s("="),a("span",{class:"hljs-string"},'"categoryChild"'),s(" @"),a("span",{class:"hljs-attr"},"onChange"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),s(` </cub-category-pane
  >`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-category"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"categoryInfo"),s(`: {},
        `),a("span",{class:"hljs-attr"},"category"),s(`: [{}],
        `),a("span",{class:"hljs-attr"},"categoryChild"),s(`: [{}]
      });

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          `),a("span",{class:"hljs-title function_"},"getData"),s(`();
        }, `),a("span",{class:"hljs-number"},"500"),s(`);
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"getData"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'//storage.360buyimg.com/cubui/3x/categoryData.js'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'res'"),s(`, res);
            `),a("span",{class:"hljs-keyword"},"const"),s(` { categoryInfo, categoryChild } = res;
            data.`),a("span",{class:"hljs-property"},"categoryInfo"),s(` = categoryInfo;
            data.`),a("span",{class:"hljs-property"},"category"),s(" = categoryInfo."),a("span",{class:"hljs-property"},"category"),s(`;
            data.`),a("span",{class:"hljs-property"},"categoryChild"),s(` = categoryChild;
          })
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(`, err));
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeText"),s(" = ("),a("span",{class:"hljs-params"},"index: any"),s(`) => {
        data.`),a("span",{class:"hljs-property"},"categoryChild"),s(" = []."),a("span",{class:"hljs-title function_"},"concat"),s("(data."),a("span",{class:"hljs-property"},"categoryInfo"),s("."),a("span",{class:"hljs-property"},"category"),s("[index + "),a("span",{class:"hljs-number"},"1"),s("]."),a("span",{class:"hljs-property"},"children"),s(),a("span",{class:"hljs-keyword"},"as"),s(` any);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前分类数据'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        changeText,
        onChange,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"自定义分类",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-category"),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeCustom"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-category-pane"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"custom"'),s(),a("span",{class:"hljs-attr"},":customCategory"),s("="),a("span",{class:"hljs-string"},'"customCategory"'),s(" @"),a("span",{class:"hljs-attr"},"onChange"),s("="),a("span",{class:"hljs-string"},'"changeCustom"'),s(">")]),s(` </cub-category-pane
  >`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-category"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"customCategory"),s(`: [{}]
      });
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          `),a("span",{class:"hljs-title function_"},"getData"),s(`();
        }, `),a("span",{class:"hljs-number"},"500"),s(`);
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"getData"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'//storage.360buyimg.com/cubui/3x/categoryData.js'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            `),a("span",{class:"hljs-keyword"},"const"),s(` { customCategory } = res;
            data.`),a("span",{class:"hljs-property"},"customCategory"),s(` = customCategory;
          })
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(`, err));
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeCustom"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'点击分类数据'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        changeCustom,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=c('<h2>API</h2><h3>Category Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>分类模式：<code class="">classify</code>，<code class="">text</code>，<code class="">custom</code></td><td>string</td><td><code class="">classify</code></td></tr><tr><td>category</td><td>左侧导航栏数据列表</td><td>Array</td><td><code class="">[]</code></td></tr></tbody></table><h3>Category Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>经典分类，点击左侧导航栏，获取右侧数据列表</td><td>点击的数据</td></tr><tr><td>change-text</td><td>文本分类模式，更点击左侧导航栏，获取右侧数据列表</td><td>输入的数据</td></tr><tr><td>change-custom</td><td>自定义，点击左侧导航栏，获取右侧数据列表</td><td>当前数量</td></tr></tbody></table><h3>CategoryPane Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>category-child</td><td>右侧展示当前分类数据</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>custom-category</td><td>自定义分类数据</td><td>Array</td><td><code class="">[]</code></td></tr></tbody></table><h3>CategoryPane Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-change</td><td>点击右侧分类数据触发</td><td>点击的数据</td></tr></tbody></table><h3>CategoryPane Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-category-bg-color</td><td><em>rgba(255, 255, 255, 1)</em></td></tr><tr><td>--cub-category-list-left-bg-color</td><td><em>rgba(246, 247, 249, 1)</em></td></tr><tr><td>--cub-category-list-item-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-category-list-item-checked-color</td><td><em>rgba(255, 255, 255, 1)</em></td></tr><tr><td>--cub-category-list-item-checked-img-bg-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-category-pane-gray-color</td><td><em>#666</em></td></tr><tr><td>--cub-category-pane-border-color</td><td><em>rgb(153, 153, 153)</em></td></tr><tr><td>--cub-category-pane-title-color</td><td><em>rgba(51, 51, 51, 1)</em></td></tr></tbody></table>',15),v={},I="",k=o({__name:"doc",setup(f,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(C,_)=>{const t=p("demo-block");return r(),h("div",g,[d,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2F0ZWdvcnkgOsgKPSLICiIgQGNoYW5nZT0ixggixDfPOS1wYW5lyj5DaGlsZMpDxQ8iIEBvbkPHSsgKIj4gPC/RScRhzhc+Cjwv6gC2PHNjcmlwdCBsYW5nPSJ0c+UAkmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CgogIGV4xTZkZWZhdWx0IHvlANtzZXR1cCgpxw4gIGNvbnN0IGRhdGEgPclfKMgeICDoAKZJbmZvOiB7fSzRGjogW3t9XdIY5QEaxh3HHH0p5QCYxAHpALcoKCkgPT7pAI/lAKFUaW1lb3V00RsgIGdldERhdGEoKTvJFX0sIDUwMMkRy2TmANvHMyA9INBPZmV0Y2goJy8vc3RvcmFnZS4zNjBidXlpbWcuY29t5AGkdWkvM3gv6ADRxEcuanMnKclCICAudGhlbigocmVzcG9uc2XFYsgNLmpzb24oKdYv8QDb6ACwe+0BcyzuAU8gfeUBpnPqAP/EAeQBvi7MNiA9zUXbLs8qyRjbM+YAico4xRDMMH3tAPJjYeQBZihlcnLlAPPkAOVvbGUubG9nKCdPaCwgZXJyb3InxQgp6gHG7wHF5gOe5AHEaW5kZXg6IGFuee8BQvUApFtdLmNvbmNhdCjNH+0A61vFUyArIDFdLmPEOHJlbiBhc8Vj6wCQ7ACP6APj8wJV7QDg5b2T5YmN5YiG57G75pWw5o2uJ9JTcmV0dXJuy0PIXusDU88QLi4u5gQA5QDX6AFvx1J9CsULPC/mBEo+Cg=="},{default:l(()=>[j]),_:1}),i,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2F0ZWdvcnkgOsgKPSLICiIgQGNoYW5nZT0ixghUZXh0IsQ7zz0tcGFuZSB0eXBlPSJ0xCTKTkNoaWxkylPFDyIgQG9uQ8dayAoiPiA8L9FVCiAgPs4XPgo8L+oAxjxzY3JpcHQgbGFuZz0idHPlAJ5pbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnOwoKICBleMU2ZGVmYXVsdCB75QDnc2V0dXAoKccOICBjb25zdCBkYXRhID3JXyjIHiAg6ACmSW5mbzoge30s0Ro6IFt7fV3SGOUBGsYdxxx9KeUAmMQB6QC3KCgpID0+6QCP5QChVGltZW91dNEbICBnZXREYXRhKCk7yRV9LCA1MDDJEctk5gDbxzMgPSDQT2ZldGNoKCcvL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbeQBpHVpLzN4L+gA0cRHLmpzJynJQiAgLnRoZW4oKHJlc3BvbnNlxWLIDS5qc29uKCnWL/EA2+YAsG9sZS5sb2coJ3JlcycsxEvrAOvIJeQCCuwBmCzuAXQgfeUBy3POOeQB4y7MNiA9zUXbLs8qyRjbM+YAico4xRDMMH3tARdjYeQBiyhlcnLlARjtAQpPaCwgZXJyb3InxQgp6gHr7wHq6gPT5AHtaW5kZXg6IGFuee8Ba/UAqFtdLmNvbmNhdCjNH+0A71vFUyArIDFdLmPEOHJlbiBhc8Vj+ACU6AQN8wJ/7QDl5b2T5YmN5YiG57G75pWw5o2uJ8xUxglyZXR1cm7MQ+kA8uoDf8hyyhIuLi7mBC7lANzoAXjHVn0KxQs8L+YEeD4K"},{default:l(()=>[u]),_:1}),y,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2F0ZWdvcnkgQGNoYW5nZT0ixghDdXN0b20iCiAgICA+zSotcGFuZSB0eXDELMYmIDrGCUPHI8gZyBAiIEBvbkPUYD4gPC/RXQrEc80XPgo8L+oAuzxzY3JpcHQgbGFuZz0idHMi5ADOaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgb25Nb3VudGVkIH0gZnJvbSAndnVlJzsKCiAgZXjFNmRlZmF1bHQge+UA8HNldHVwKCnHDiAgY29uc3QgZGF0YSA9yV8oyB4gIO4A7TogW3t9XccdfSk7xwrpAIUoKCkgPT7JXcVvVGltZW91dNEbICBnZXREYXRhKMlIICB9LCA1MDDJEcpj5gCoxzIgPSDQTmZldGNoKCcvL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbeQBcXVpLzN4L+gBdsRHLmpzJynJQiAgLnRoZW4oKHJlc3BvbnNlxWLIDS5qc29uKCnWL/EA2ugAsHvvAUAgfeUBZnPqAPHEAeQBfi7PKT3POswyfe0AhmNh5AD6KGVycuUAh8R5b2xlLmxvZygnT2gsIGVycm9yJ8UIKeoBWe4BWOwCuPMBXc1U54K55Ye75YiG57G75pWw5o2uJ9JXcmV0dXJuzEPLYizJFi4uLuYCySjkAQToANfHRn0KxQs8L+YDEz4K"},{default:l(()=>[m]),_:1}),b])}}});export{k as default,I as excerpt,v as frontmatter};
