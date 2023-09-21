import{d as p,r as h,b as r,k as n,w as t,aq as e,e as a,o,l as s}from"./style_icon.js";const d={class:"markdown-body"},j=e(`<h1>InfiniteLoading 滚动加载</h1><h3>介绍</h3><p>列表滚动到底部自动加载更多数据。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">InfiniteLoading</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">InfiniteLoading</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-infinite-loading"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"infinityValue"'),s(),a("span",{class:"hljs-attr"},":has-more"),s("="),a("span",{class:"hljs-string"},'"hasMore"'),s(" @"),a("span",{class:"hljs-attr"},"load-more"),s("="),a("span",{class:"hljs-string"},'"loadMore"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in sum"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-infinite-loading"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" cycle = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" tabsValue = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" sum = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"24"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" infinityValue = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" hasMore = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"loadMore"),s(" = ("),a("span",{class:"hljs-params"},"done"),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    sum.`),a("span",{class:"hljs-property"},"value"),s(" = sum."),a("span",{class:"hljs-property"},"value"),s(" + "),a("span",{class:"hljs-number"},"24"),s(`;
    cycle.`),a("span",{class:"hljs-property"},"value"),s(`++;
    `),a("span",{class:"hljs-keyword"},"if"),s(" (cycle."),a("span",{class:"hljs-property"},"value"),s(" > "),a("span",{class:"hljs-number"},"2"),s(") hasMore."),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
    infinityValue.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"1000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),u=a("h3",null,"自定义加载文案",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-infinite-loading"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"infinityValue"'),s(`
    `),a("span",{class:"hljs-attr"},"load-txt"),s("="),a("span",{class:"hljs-string"},'"Loading..."'),s(`
    `),a("span",{class:"hljs-attr"},"load-more-txt"),s("="),a("span",{class:"hljs-string"},'"End~"'),s(`
    `),a("span",{class:"hljs-attr"},":has-more"),s("="),a("span",{class:"hljs-string"},'"hasMore"'),s(`
    @`),a("span",{class:"hljs-attr"},"load-more"),s("="),a("span",{class:"hljs-string"},'"loadMore"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in sum"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-infinite-loading"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" cycle = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" tabsValue = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" sum = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"24"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" infinityValue = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" hasMore = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"loadMore"),s(" = ("),a("span",{class:"hljs-params"},"done"),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    sum.`),a("span",{class:"hljs-property"},"value"),s(" = sum."),a("span",{class:"hljs-property"},"value"),s(" + "),a("span",{class:"hljs-number"},"24"),s(`;
    cycle.`),a("span",{class:"hljs-property"},"value"),s(`++;
    `),a("span",{class:"hljs-keyword"},"if"),s(" (cycle."),a("span",{class:"hljs-property"},"value"),s(" > "),a("span",{class:"hljs-number"},"2"),s(") hasMore."),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
    infinityValue.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"1000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),g=a("h3",null,"搭配 PullRefresh",-1),b=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-infinite-loading"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"infinityValue"'),s(),a("span",{class:"hljs-attr"},":has-more"),s("="),a("span",{class:"hljs-string"},'"hasMore"'),s(" @"),a("span",{class:"hljs-attr"},"load-more"),s("="),a("span",{class:"hljs-string"},'"loadMore"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refreshFun"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in sum"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-infinite-loading"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" cycle = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" tabsValue = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" sum = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"24"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" infinityValue = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" hasMore = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"loadMore"),s(" = ("),a("span",{class:"hljs-params"},"done"),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    sum.`),a("span",{class:"hljs-property"},"value"),s(" = sum."),a("span",{class:"hljs-property"},"value"),s(" + "),a("span",{class:"hljs-number"},"24"),s(`;
    cycle.`),a("span",{class:"hljs-property"},"value"),s(`++;
    `),a("span",{class:"hljs-keyword"},"if"),s(" (cycle."),a("span",{class:"hljs-property"},"value"),s(" > "),a("span",{class:"hljs-number"},"2"),s(") hasMore."),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
    infinityValue.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"1000"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"refreshFun"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    refresh.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
    sum.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-number"},"24"),s(`;
  }, `),a("span",{class:"hljs-number"},"3000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否触发滚动加载</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>has-more</td><td>是否还有更多数据</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>threshold</td><td>滚动条与底部距离小于 <code class="">threshold</code> 时触发 <code class="">loadMore</code> 事件</td><td>number</td><td><code class="">200</code></td></tr><tr><td>use-capture</td><td>是否使用捕获模式 <code class="">true</code> 捕获 <code class="">false</code> 冒泡</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>load-more-txt</td><td>“没有更多数据” 展示文案</td><td>string</td><td><code class="">&#39;哎呀，这里是底部了啦&#39;</code></td></tr><tr><td>load-txt</td><td>上拉加载提示文案</td><td>string</td><td><code class="">加载中...</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>load-more</td><td>继续加载的回调函数</td><td>-</td></tr><tr><td>scroll-change</td><td>实时监听滚动高度</td><td>滚动高度</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义加载内容</td></tr><tr><td>loading</td><td>自定义底部加载中提示</td></tr><tr><td>loading-icon</td><td>自定义底部加载中图标</td></tr><tr><td>finished</td><td>自定义加载完成后的提示文案</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-infiniteloading-bottom-color</td><td><em>#c8c8c8</em></td></tr></tbody></table>',11),I={},k="",w=p({__name:"doc",setup(f,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(A,v)=>{const l=h("demo-block");return o(),r("div",d,[j,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5maW5pdGUtbG9hZGluZyB2LW1vZGVsPSLHGnlWYWx1ZSIgOmhhcy1tb3JlPSJoYXNNb3JlIiBAxDXHFcQLxRbEWyAgPGRpdiBjbGFzcz0idGVzdCIgdi1mb3I9IihpdGVtLCBpbmRleCkgaW4gc3VtIiA6a2V5xHNkZXgiPnt7xh8gfX08L2RpdsRSPC/0AK4+Cjwv6gDTCjxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IGN5Y2xlID3EICgwKcgWdGFic+UA9dEac3VtxxQyNMkV7QEoxx9mYWxzZcki5wEwxxx0cnXKG+gBNiA9IChkb25lKSA9PiB7CiDkAMNUaW1lb3V0KCjJFSDkAIIudsdpygwrIDI0O8Ug5QDSxhYrK8YTaWYgKMsXID4gMinoAJPJTOUAsccw7ADQ0iF9LCAxMDDkARR9Owo8L+YBcuUBfHR5bGU+Ci7kAe7lAK5wYWTkAaQ6IDEycHggMMYHMjBweMRHYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7Cn3EWMZO"},{default:t(()=>[i]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5maW5pdGUtbG9hZGluZwogICAgdi1tb2RlbD0ixx55VmFsdWUixRzEKC10eHQ9IkzGMi4uLssabW9yZcYfRW5kfsYZOmhhc8UZPSJoYXNNb3LHS0DJMj0ixAvIGuQAnSAgPGRpdiBjbGFzcz0idGVzdCIgdi1mb3I9IihpdGVtLCBpbmRleCkgaW4gc3VtIiA6a2V55ACxZGV4Ij57e8YfIH19PC9kaXbEUjwv9ADwPgo8L+oBFQo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBjeWNsZSA9xCAoMCnIFnRhYnPlATPRGnN1bccUMjTJFe0BZscfZmFsc2XJIucBN8ccdHJ1yhvoATkgPSAoZG9uZSkgPT4gewog5ADDVGltZW91dCgoyRUg5ACCLnbHacoMKyAyNDvFIOUA0sYWKyvGE2lmICjLFyA+IDIp6ACTyUzlALHHMOwA0NIhfSwgMTAw5AEUfTsKPC/mAXLlAXx0eWxlPgou5AHu5QCucGFk5AGkOiAxMnB4IDDGBzIwcHjER2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlOwp9xFjGTg=="},{default:t(()=>[m]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW5maW5pdGUtbG9hZGluZyB2LW1vZGVsPSLHGnlWYWx1ZSIgOmhhcy1tb3JlPSJoYXNNb3JlIiBAxDXHFcQLxRbEW8ddcHVsbC1yZWZyZXNoylnHESIgQMcKyRNGdW7HPyAgPGRpdiBjbGFzcz0idGVzdCIgdi1mb3I9IihpdGVtLCBpbmRleCkgaW4gc3VtIiA6a2V55AC0ZGV4Ij57e8YfIH19PC9kaXbGVDwv8ACUxBjGFvABBz4KPC/qASwKPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgY3ljbGUgPcQgKDApyBZ0YWJz5QFO0RpzdW3HFDI0yRXtAYHHH2ZhbHNlySLnAYnHHHRydcob6AGPID0gKGRvbmUpID0+IHsKIOQAw1RpbWVvdXQoKMkVIOQAgi52x2nKDCsgMjQ7xSDlANLGFisrxhNpZiAoyxcgPiAyKegAk8lM5QCxxzDsANDSIX0sIDEwMOQBFH3oAMXoAjv0APzHHEZ1buQA4/8A38gu0nbuAPrmAO59LCAz6QCKPC/mAfzlAgZ0eWxlPgou5AKQxVlwYWTkAi46IDEycHggMMYHMjBweMRHYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7Cn3EWMZO"},{default:t(()=>[b]),_:1}),y])}}});export{w as default,k as excerpt,I as frontmatter};
