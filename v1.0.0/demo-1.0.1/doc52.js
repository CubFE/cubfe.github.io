import{d as p,r as h,b as r,k as l,w as n,aq as e,e as a,o as d,l as s}from"./style_icon.js";const o={class:"markdown-body"},i=e(`<h1>Pagination 分页</h1><h3>介绍</h3><p>当数据量较多时，采用分页的形式分隔长列表。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Pagination</span>);
</code></pre><h3>基础用法</h3><p>通过 v-model 来绑定当前页码。</p>`,7),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pagination"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentPage"'),s(),a("span",{class:"hljs-attr"},":total-items"),s("="),a("span",{class:"hljs-string"},'"25"'),s(),a("span",{class:"hljs-attr"},":items-per-page"),s("="),a("span",{class:"hljs-string"},'"5"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"pageChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"currentPage"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"pageChange"),s(" = ("),a("span",{class:"hljs-params"},"value: number"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(value);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        pageChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-pagination"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),j=a("h3",null,"简单模式",-1),m=a("p",null,"\b 将 mode 设置为 simple 来切换到简单模式，此时分页器不会展示具体的页码按钮。",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pagination"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentPage1"'),s(),a("span",{class:"hljs-attr"},":page-count"),s("="),a("span",{class:"hljs-string"},'"12"'),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"simple"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"pageChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"currentPage1"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"pageChange"),s(" = ("),a("span",{class:"hljs-params"},"value: number"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(value);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        pageChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-pagination"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b=a("h3",null,"显示省略号",-1),y=a("p",null,"设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pagination"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentPage2"'),s(),a("span",{class:"hljs-attr"},":total-items"),s("="),a("span",{class:"hljs-string"},'"125"'),s(),a("span",{class:"hljs-attr"},":show-page-size"),s("="),a("span",{class:"hljs-string"},'"3"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"pageChange"'),s(),a("span",{class:"hljs-attr"},"force-ellipses"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"currentPage2"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"pageChange"),s(" = ("),a("span",{class:"hljs-params"},"value: number"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(value);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        pageChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-pagination"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v=a("h3",null,"自定义按钮",-1),f=a("p",null,"设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pagination"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"currentPage3"'),s(),a("span",{class:"hljs-attr"},":total-items"),s("="),a("span",{class:"hljs-string"},'"500"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"pageChange"'),s(),a("span",{class:"hljs-attr"},":show-page-size"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prev-text"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Left"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"10px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"10px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"next-text"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Right"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"10px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"10px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"page"),s("="),a("span",{class:"hljs-string"},'"{ item }"'),s(">")]),s(" {{ item.number == 3 ? 'hot' : item.text }} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-pagination"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Right"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Right"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"currentPage3"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"pageChange"),s(" = ("),a("span",{class:"hljs-params"},"value: number"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(value);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        pageChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-pagination"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前页码</td><td>number</td><td><code class="">1</code></td></tr><tr><td>mode</td><td>显示模式,可选值为 <code class="">simple</code></td><td>string</td><td><code class="">multi</code></td></tr><tr><td>prev-text</td><td>上一页按钮文字</td><td>string</td><td><code class="">上一页</code></td></tr><tr><td>next-text</td><td>下一页按钮文字</td><td>string</td><td><code class="">下一页</code></td></tr><tr><td>page-count</td><td>总页数</td><td>string | number</td><td><code class="">传入/根据页数计算</code></td></tr><tr><td>total-items</td><td>总记录数</td><td>string | number</td><td><code class="">0</code></td></tr><tr><td>items-per-page</td><td>每页记录数</td><td>string | number</td><td><code class="">10</code></td></tr><tr><td>show-page-size</td><td>显示的页码个数</td><td>string | number</td><td><code class="">5</code></td></tr><tr><td>force-ellipses</td><td>是否显示省略号</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>页码改变时触发</td><td>value</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>描述</th><th>参数</th></tr></thead><tbody><tr><td>prev-text</td><td>自定义上一页按钮内容</td><td>-</td></tr><tr><td>next-text</td><td>自定义下一页按钮内容</td><td>-</td></tr><tr><td>page</td><td>自定义页码</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-pagination-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-pagination-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-pagination-item-border-color</td><td><em>#e4e7eb</em></td></tr><tr><td>--cub-pagination-active-background-color</td><td><em>linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-pagination-disable-color</td><td><em>rgba(116, 116, 116, 0.31)</em></td></tr><tr><td>--cub-pagination-disable-background-color</td><td><em>#f7f8fa</em></td></tr><tr><td>--cub-pagination-item-border-width</td><td><em>1px</em></td></tr><tr><td>--cub-pagination-item-border-radius</td><td><em>2px</em></td></tr><tr><td>--cub-pagination-prev-next-padding</td><td><em>0 11px</em></td></tr></tbody></table>',11),A={},H="",B=p({__name:"doc",setup(_,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(C,Z)=>{const t=h("demo-block");return d(),r("div",o,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGFnaW5hdGlvbiB2LW1vZGVsPSJjdXJyZW50UGFnZSIgOnRvdGFsLWl0ZW1zPSIyNSIgOsUMLXBlcsQ+ZT0iNSIgQGNoYW7EDMQSQ8UMIiAvPgo8L8pyPHNjcmlwdCBsYW5nPSJ0cyLkAIVpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xS9kZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclUKMgfICDrAOE6IDHHF30pxGHKQOoAyiA9ICh2YWx1ZTogbnVtYmVyKSA9PsluxjBvbGUubG9nxijJSn07CscKcmV0dXJuyzUuLi7mAOQo5QCpKSzJGsp5ykbFBwrFCzwv5gFI5AFRdHls5QHLLu8By8ZnbWFyZ2luLWxlZnQ6IDIwcHjESH3EQcY4"},{default:n(()=>[g]),_:1}),j,m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGFnaW5hdGlvbiB2LW1vZGVsPSJjdXJyZW50UGFnZTEiIDpwYWdlLWNvdW50PSIxMiIgxCY9InNpbXBsZSIgQGNoYW5nZT0ixCdDxQwiIC8+Cjwvymw8c2NyaXB0IGxhbmc9InRzIsR/aW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUvZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg7ADbOiAxxxh9KcRiykHqAMsgPSAodmFsdWU6IG51bWJlcikgPT7Jb8Ywb2xlLmxvZ8YoyUp9OwrHCnJldHVybss1Li4u5gDlKOUAqiksyRrKecpGxQcKxQs8L+YBSeQBUnR5bOUBxi7vAcbGZ21hcmdpbi1sZWZ0OiAyMHB4xEh9xEHGOA=="},{default:n(()=>[u]),_:1}),b,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGFnaW5hdGlvbiB2LW1vZGVsPSJjdXJyZW50UGFnZTIiIDp0b3RhbC1pdGVtcz0iMTI1IiA6c2hvd8Q7ZS1zaXplPSIzIiBAY2hhbmdlPSLEF0PFDCIgZm9yY2UtZWxsaXBzZXMgLz4KPC/qAIM8c2NyaXB0IGxhbmc9InRzIuQAlmltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFL2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOwA8jogMccYfSnEYspB6gDaID0gKHZhbHVlOiBudW1iZXIpID0+yW/GMG9sZS5sb2fGKMlKfTsKxwpyZXR1cm7LNS4uLuYA5SjlAKopLMkaynnKRsUHCsULPC/mAUnkAVJ0eWzlAd0u7wHdxmdtYXJnaW4tbGVmdDogMjBweMRIfcRBxjg="},{default:n(()=>[I]),_:1}),v,f,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcGFnaW5hdGlvbiB2LW1vZGVsPSJjdXJyZW50UGFnZTMiIDp0b3RhbC1pdGVtcz0iNTAwIiBAY2hhbmdlPSJwYWdlQ8UMIiA6c2hvd8RQZS1zaXplPSI1IsRmICDJdSAjcHJldi10ZXh0xhogIDxMZWZ0IHdpZHRoPSIxMHB4IiBoZWlnaHTIDi/HRC/IRdFUbmV4dM5UUsRB31XfVeQAxz0ieyDkAPYgfSI+IHvGDC5udW1iZXIgPT0gMyA/ICdob3QnIDrGG+QAhCB9fc9XPC/uAWc+CswgPHNjcmlwdCBsYW5nPSJ0c+UBM2ltcG9ydCB7IOQBHSwg5gDPfSBmcm9tICdAY3ViZmUvaWNvbnMtdnVlJzvMMnJlZiwgcmVhY3RpdmUsIHRvUmVmc8k8yC9leMUvZGVmYXVsdCB75QD+Y29tcG9uZW50czrQeyzFIXNldHVwKCnHL8QxbnN0IHN05AExPcl1KMgfICDsAkg6IDHHGH0p5ACDykHqAkQgPSAodmFsdWU6IOYBZykgPT7Jb8Ywb2xlLmxvZ8YoyUp9OwrHCnJldHVybss1Li4u5gEGKOUAqinmAMzEAcp5ykbFBwrFCzwv5gGc5AGldHls5QHNLu8DM8ZnbWFyZ2luLWxlZnQ6IDIwcHjESH3EQcY4"},{default:n(()=>[w]),_:1}),x])}}});export{B as default,H as excerpt,A as frontmatter};
