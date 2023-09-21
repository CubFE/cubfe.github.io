import{d as p,r as h,b as r,k as t,w as n,aq as c,e as a,o as j,l as s}from"./style_icon.js";const d={class:"markdown-body"},i=c(`<h1>Navbar 头部导航</h1><h3>介绍</h3><p>提供导航功能，常用于页面顶部。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Navbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Navbar</span>);
</code></pre><h3>基础用法</h3>`,6),o=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(" @"),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(" @"),a("span",{class:"hljs-attr"},"on-click-title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"订单详情"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("返回"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ShareN"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-navbar"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-right"),s("="),a("span",{class:"hljs-string"},'"rightClick"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"浏览记录"'),s(`
    `),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'"清空"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-navbar"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(`
    `),a("span",{class:"hljs-attr"},":left-show"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-icon"),s("="),a("span",{class:"hljs-string"},'"icon"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-right"),s("="),a("span",{class:"hljs-string"},'"rightClick"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"购物车"'),s(`
    `),a("span",{class:"hljs-attr"},":titleIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'"编辑"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"title-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Cart2"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"MoreX"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-navbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"ShareN"),s(", "),a("span",{class:"hljs-title class_"},"Cart2"),s(", "),a("span",{class:"hljs-title class_"},"MoreX"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"back"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click Back'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"title"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click Title'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"rightClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click Right'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"icon"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click Icon'"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"自定义导航栏中间内容",-1),b=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(" @"),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(" @"),a("span",{class:"hljs-attr"},"on-click-title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(" @"),a("span",{class:"hljs-attr"},"on-click-right"),s("="),a("span",{class:"hljs-string"},'"rightClick"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'"编辑"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"tab1value"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"changeTab"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题1"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题2"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"MoreX"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"MoreX"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-navbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"MoreX"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" tab1value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"back"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click Back'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"title"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click Title'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"rightClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click Right'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeTab"),s(" = ("),a("span",{class:"hljs-params"},"tab"),s(`) => {
  tab1value.`),a("span",{class:"hljs-property"},"value"),s(" = tab."),a("span",{class:"hljs-property"},"paneKey"),s(`;
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"多 tab 切换导航",-1),u=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(" @"),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"tab2value"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"changeTabList"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题1"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题2"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题3"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"HorizontalN"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"HorizontalN"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-navbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"HorizontalN"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" tab2value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"back"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click Back'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeTabList"),s(" = ("),a("span",{class:"hljs-params"},"tab"),s(`) => {
  tab2value.`),a("span",{class:"hljs-property"},"value"),s(" = tab."),a("span",{class:"hljs-property"},"paneKey"),s(`;
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题名称</td><td>string</td><td>-</td></tr><tr><td>left-text</td><td>左侧文案</td><td>string</td><td>-</td></tr><tr><td>desc</td><td>右侧描述</td><td>string</td><td>-</td></tr><tr><td>left-show</td><td>是否展示左侧箭头</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>title-icon</td><td>标题中是否展示 <code class="">icon</code></td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>border</td><td>是否显示下边框</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>fixed</td><td>是否固定到顶部</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>placeholder</td><td>固定在顶部时，是否在标签位置生成一个等高的占位元素</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>safe-area-inset-top</td><td>是否开启顶部安全区适配</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>z-index</td><td>导航栏 <code class="">z-index</code></td><td>number ｜ string</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-click-title</td><td>点击页面标题事件</td><td>event:Event</td></tr><tr><td>on-click-icon</td><td>点击页面标题 <code class="">icon</code> 事件</td><td>event:Event</td></tr><tr><td>on-click-right</td><td>点击右侧按钮事件</td><td>event:Event</td></tr><tr><td>on-click-back</td><td>点击左侧图标事件</td><td>event:Event</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>自定义左侧内容</td></tr><tr><td>right</td><td>自定义右侧内容</td></tr><tr><td>content</td><td>自定义导航栏中间内容</td></tr><tr><td>left-show</td><td>左侧箭头自定义图标</td></tr><tr><td>title-icon</td><td>标题中自定义图标</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-navbar-height</td><td><em>44px</em></td></tr><tr><td>--cub-navbar-margin-bottom</td><td><em>20px</em></td></tr><tr><td>--cub-navbar-padding</td><td><em>0 16px</em></td></tr><tr><td>--cub-navbar-background</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-navbar-box-shadow</td><td><em>0px 1px 7px 0px rgba(237, 238, 241, 1)</em></td></tr><tr><td>--cub-navbar-color</td><td><em>var(--cub-title-color2)</em></td></tr><tr><td>--cub-navbar-title-base-font</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-navbar-title-font</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-navbar-title-font-weight</td><td><em>0</em></td></tr><tr><td>--cub-navbar-title-font-color</td><td><em>var(--cub-navbar-color)</em></td></tr><tr><td>--cub-navbar-title-width</td><td><em>100px</em></td></tr><tr><td>--cub-navbar-title-icon-margin</td><td><em>0 0 0 13px</em></td></tr></tbody></table>',11),I={},_="",C=p({__name:"doc",setup(k,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(f,w)=>{const l=h("demo-block");return j(),r("div",d,[i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbmF2YmFyIEBvbi1jbGljay1iYWNrPSLEBiLLFnRpdGxlPSLFByIgxw7orqLljZXor6bmg4UixFIgIMlhICNsZWZ0xhUgIDxkaXY+6L+U5ZuePC/EDMYtL8gu0T1yaWdoyj5TaGFyZU4gd2lkdGg9IjE2cHgiIC/URDwv6gDUPgruAOTFL/UA6M8a7QDszxzlAJg9IsUHQ8QSxiHHM+a1j+iniOiusOW9lcYZZGVzYz0i5riF56m6xBI+/wCiICA65AE4LXNob3c9ImZhbHPxAIP/ALn3ALlpY29uPSLEBv8A0+8A0+i0reeJqei9psYWOsUXScVNdHJ1x2fmAObnvJbovpHEEvEBz8U25QCExhsgIDxDYXJ0Mv8B0/8CF01vcmVYIGNsYXNz5wDAIt9R8gIkzBwKPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsg5gKALCDlALQsIMZ4fSBmcm9tICdAY3ViZmUv5ADdcy12dWUnOwrEC3Qg5AGjID0gKCkgPT4gewogIMQXb2xlLmxvZygn5QFrIEJhY2snKTsKfcg15QEq3zYgVMQlzTfqAb7fPCBSxCrNPOQAut82IOQB8sc1PC/mASY+Cg=="},{default:n(()=>[o]),_:1}),g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbmF2YmFyIEBvbi1jbGljay1iYWNrPSLEBiLLFnRpdGxlPSLFB8wYcmlnaHQ9IsUHQ8QSIiBkZXNjPSLnvJbovpEixGggIMl3ICNjb250ZW50xhjnAIR0YWJzIHYtbW9kZWw9InRhYjF2YWx1xGjFZT0iY2hhbmdlVGFix1DMOi1wYW5lIOcAoOagh+mimDEiPiA8L8wg3zfGNzLZN8kWc8YSPC/qAUjwAOHlAQvJOU1vcmVYIGNsYXNz5wEmIiB3aWR0aD0iMTZweCI+PC/FI9JYyHbmAaE+Cs10PHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvKG8VnyR1AY3ViZmUvaWNvbnMtxirEC3Qg6QF+ID3ETigwKcga5AITID0gKCkgPT4gewogIMQXb2xlLmxvZygn5QH9IEJhY2snKTsKfclP5AFh3zYgVMQlzTfqAlDfPCBSxCrNPOkCLcQ7dGFiyT7pANsu6ADhdGFiLuQB6EtlecVBPC/mAVg+Cg=="},{default:n(()=>[b]),_:1}),m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbmF2YmFyIEBvbi1jbGljay1iYWNrPSLEBiLEJSAgyTQgI2NvbnRlbnTGGMdBdGFicyB2LW1vZGVsPSJ0YWIydmFsdWUiIEDFUD0iY2hhbmdlVGFiTGlzdMdUzD4tcGFuZSB0aXRsZT0i5qCH6aKYMSI+IDwvzCDfN8Y3Mt831zcz2TfJFnPGEjwv6gFA8AEccmlnaOoBGkhvcml6b250YWxOIGNsYXNzPSLFISIgd2lkdGg9IjE2cHgiPjwvyynSZOgAguYBpT4KzBwKPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvKG8ttySNAY3ViZmUvaWNvbnMtxjDEC3Qg6QHLID3EVCgwKcga5AIdID0gKCkgPT4gewogIMQXb2xlLmxvZygnQ+QB9yBCYWNrJyk7Cn3INe0CB8Q+dGFiyUHJbC7IcnRhYi7kAYtLZXnFRTwv5gDvPgo="},{default:n(()=>[u]),_:1}),v])}}});export{C as default,_ as excerpt,I as frontmatter};
