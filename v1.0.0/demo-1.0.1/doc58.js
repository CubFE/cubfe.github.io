import{d as p,r as h,b as r,k as n,w as t,aq as e,e as a,l as s,o as d}from"./style_icon.js";const j={class:"markdown-body"},o=e(`<h1>PullRefresh 下拉刷新</h1><h3>介绍</h3><p>用于提供下拉刷新的交互操作。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PullRefresh</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PullRefresh</span>);
</code></pre><h3>基础用法</h3><p>下拉时会触发 refresh 事件，在回调事件中可进行异步操作刷新数据，操作完成之后将 v-model 设置为 false，即刷新完成。</p>`,7),i=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refreshFun"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("向下拉试试吧！"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in 24"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"refreshFun"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    refresh.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"3000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),g=a("h3",null,"自定义文案",-1),u=a("p",null,[s("下拉刷新有 4 个状态："),a("code",{class:""},"'loading' | 'loosing' | 'pulling' "),s("，分别对应属性 "),a("code",{class:""},"pullingTxt、loosingTxt、loadingTxt"),s(" ，复杂样式可以通过 slot 插槽实现。")],-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(),a("span",{class:"hljs-attr"},"loosing-txt"),s("="),a("span",{class:"hljs-string"},'"松开吧"'),s(),a("span",{class:"hljs-attr"},"loading-txt"),s("="),a("span",{class:"hljs-string"},'"玩命加载中..."'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refreshFun"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"pulling-txt"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("用力拉"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("向下拉试试吧！"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in 24"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"refreshFun"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    refresh.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"3000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b=a("h3",null,"自定义监听对象",-1),f=a("p",null,[s("PullRefresh 的触发条件是：父级滚动元素的滚动条在顶部位置，父级滚动元素的判定是通过父级是否设置了 "),a("code",{class:""},"overflowY: scroll|auto|overlay "),s("，若父级为 "),a("code",{class:""},"Element"),s(", 触发条件为 "),a("code",{class:""},"Element.scrollTop === 0"),s("。")],-1),I=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"parentpage"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refreshFun"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in 24"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"refreshFun"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    refresh.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"3000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否触发下拉刷新</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>pull-distance</td><td>触发下拉刷新的距离</td><td>number | string</td><td><code class="">50</code></td></tr><tr><td>head-height</td><td>顶部内容高度</td><td>number | string</td><td><code class="">50</code></td></tr><tr><td>loading-icon</td><td>加载中状态时，<code class="">loading</code> 图标。为空表示去掉</td><td>string</td><td><code class="">loading</code></td></tr><tr><td>pulling-txt</td><td>下拉过程提示文案</td><td>string</td><td><code class="">下拉刷新</code></td></tr><tr><td>loosing-txt</td><td>释放过程提示文案</td><td>string</td><td><code class="">释放刷新</code></td></tr><tr><td>loading-txt</td><td>加载过程提示文案</td><td>string</td><td><code class="">加载中...</code></td></tr><tr><td>duration</td><td>下拉动画加载时长</td><td>number</td><td><code class="">0.3 </code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>下拉过程或状态改变时触发</td><td>{status:string,distance:number}</td></tr><tr><td>refresh</td><td>下拉刷新事件回调</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>pulling</td><td>下拉过程的顶部内容</td></tr><tr><td>loosing</td><td>释放过程中顶部内容</td></tr><tr><td>loading</td><td>加载过程中顶部内容</td></tr><tr><td>default</td><td>自定义内容</td></tr></tbody></table>',7),_={},C="",k=p({__name:"doc",setup(x,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(w,y)=>{const l=h("demo-block");return d(),r("div",j,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHVsbC1yZWZyZXNoIHYtbW9kZWw9IscRIiBAxwrJE0Z1biLEPSAgPGRpdj7lkJHkuIvmi4nor5Xor5XlkKfvvIE8L8QbySUgdi1mb3I9IihpdGVtLCBpbmRleCkgaW4gMjQiIGNsYXNzPSJ0ZXN0Ij57e8YeIH19yUQ8L/AApz4KPC/qAMgKPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3TEGMRGID3ECihmYWxzZSnPHEZ1biA9ICgpID0+IHsKIMRbVGltZW91dCjKFSDILi52YWx1ZSA9IMVMOwogIH0sIDMwMDApOwp9Owo8L+YAoeUAq3R5bGU+Ci7kAO/FRXBhZGRpbmc6IDEycHggMMYHMjBweMRHYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7Cn3EWMZO"},{default:t(()=>[i]),_:1}),g,u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHVsbC1yZWZyZXNoIHYtbW9kZWw9IscRIiBsb29zaW5nLXR4dD0i5p2+5byA5ZCnxBhhZMkY546p5ZG95Yqg6L295LitLi4uIiBAx0PJTEZ1biLEdiAg6QCFICPEfsdHxhwgIDxkaXY+55So5Yqb5ouJPC/ED8Y3L8g4xxDEGuWQkeS4i+aLieivleivleWQp++8gcw1ZGl2IHYtZm9yPSIoaXRlbSwgaW5kZXgpIGluIDI0IiBjbGFzcz0idGVzdCI+e3vGHiB9fclEPC/wASc+CuwAiwo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwpjb25zdMQYxEYgPcQKKGZhbHNlKc8cRnVuID0gKCkgPT4gewogxFtUaW1lb3V0KMoVIMguLnZhbHVlID0gxUw7CiAgfSwgMzAwMCk7Cn07Cjwv5gCh5QCrdHlsZT4KLuQA78VFcGFk5AHIOiAxMnB4IDDGBzIwcHjER2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlOwp9xFjGTg=="},{default:t(()=>[m]),_:1}),b,f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9InBhcmVudHBhZ2UixBsgIDxjdWItcHVsbC1yZWZyZXNoIHYtbW9kZWw9IscRIiBAxwrJE0Z1bsc/x152LWZvcj0iKGl0ZW0sIGluZGV4KSBpbiAyNCLIenRlc3QiPnt7xh4gfX08L2RpdsZGPC/wAIbEGMchPC/qAM0KPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3TEGMRPID3ECihmYWxzZSnPHEZ1biA9ICgpID0+IHsKIMRbVGltZW91dCjKFSDILi52YWx1ZSA9IMVMOwogIH0sIDMwMDApOwp9Owo8L+YAoeUAq3R5bGU+Ci7kAPrFRXBhZGRpbmc6IDEycHggMMYHMjBweMRHYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7Cn3EWMZO"},{default:t(()=>[I]),_:1}),v])}}});export{k as default,C as excerpt,_ as frontmatter};
