import{d as p,r as h,b as r,k as l,w as n,aq as c,e as a,o as i,l as s}from"./style_icon.js";const d={class:"markdown-body"},o=c(`<h1>Navbar</h1><h3>Intro</h3><p>Provide navigation function, often used at the top of the page.</p><h3>Install</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Navbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Navbar</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(" @"),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(" @"),a("span",{class:"hljs-attr"},"on-click-title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Order details"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Back"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ShareN"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-navbar"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-right"),s("="),a("span",{class:"hljs-string"},'"rightClick"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Browsing history"'),s(`
    `),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'"Clear"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-navbar"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(`
    `),a("span",{class:"hljs-attr"},":left-show"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-icon"),s("="),a("span",{class:"hljs-string"},'"icon"'),s(`
    @`),a("span",{class:"hljs-attr"},"on-click-right"),s("="),a("span",{class:"hljs-string"},'"rightClick"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Cart"'),s(`
    `),a("span",{class:"hljs-attr"},":titleIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'"Edit"'),s(`
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
`)])],-1),g=a("h3",null,"Customize the middle content of the navigation bar",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(" @"),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(" @"),a("span",{class:"hljs-attr"},"on-click-title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(" @"),a("span",{class:"hljs-attr"},"on-click-right"),s("="),a("span",{class:"hljs-string"},'"rightClick"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'"Edit"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"tab1value"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"changeTab"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title1"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title2"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
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
`)])],-1),b=a("h3",null,"Multi-tab switching navigation",-1),u=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-navbar"),s(" @"),a("span",{class:"hljs-attr"},"on-click-back"),s("="),a("span",{class:"hljs-string"},'"back"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"tab2value"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"changeTabList"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title1"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title2"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title3"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tab-pane"),s(">")]),s(`
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
`)])],-1),v=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td>string</td><td>-</td></tr><tr><td>left-text</td><td>Left Text</td><td>string</td><td>-</td></tr><tr><td>desc</td><td>Desc</td><td>string</td><td>-</td></tr><tr><td>left-show</td><td>Whether to show the left arrow</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>title-icon</td><td>Whether to show icon in title</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>border</td><td>Whether to show bottom border</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>fixed</td><td>Is it pinned to the top</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>placeholder</td><td>Whether to generate a placeholder element when fixed</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>safe-area-inset-top</td><td>Whether to enable top safety zone adaptation</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>z-index</td><td>Z-index</td><td>number ｜ string</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>on-click-title</td><td>Click page title event</td><td>event:Event</td></tr><tr><td>on-click-icon</td><td>Click the page title icon event</td><td>event:Event</td></tr><tr><td>on-click-right</td><td>Click right button event</td><td>event:Event</td></tr><tr><td>on-click-back</td><td>Click left Icon event</td><td>event:Event</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>left</td><td>Customize left content</td></tr><tr><td>right</td><td>Customize the content on the right</td></tr><tr><td>content</td><td>Customize the middle content of the navigation bar</td></tr><tr><td>left-show</td><td>Custom icon of left arrow</td></tr><tr><td>title-icon</td><td>Custom icon in header</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-navbar-height</td><td><em>44px</em></td></tr><tr><td>--cub-navbar-margin-bottom</td><td><em>20px</em></td></tr><tr><td>--cub-navbar-padding</td><td><em>0 16px</em></td></tr><tr><td>--cub-navbar-background</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-navbar-box-shadow</td><td><em>0px 1px 7px 0px rgba(237, 238, 241, 1)</em></td></tr><tr><td>--cub-navbar-color</td><td><em>var(--cub-title-color2)</em></td></tr><tr><td>--cub-navbar-title-base-font</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-navbar-title-font</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-navbar-title-font-weight</td><td><em>0</em></td></tr><tr><td>--cub-navbar-title-font-color</td><td><em>var(--cub-navbar-color)</em></td></tr><tr><td>--cub-navbar-title-width</td><td><em>100px</em></td></tr><tr><td>--cub-navbar-title-icon-margin</td><td><em>0 0 0 13px</em></td></tr></tbody></table>',11),I={},C="",_=p({__name:"doc.en-US",setup(k,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(f,y)=>{const t=h("demo-block");return i(),r("div",d,[o,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbmF2YmFyIEBvbi1jbGljay1iYWNrPSLEBiLLFnRpdGxlPSLFByIgxw5PcmRlciBkZXRhaWxzIsRTICDJYiAjbGVmdMYVICA8ZGl2PkJhY2s8L8QKxisvyCzRO3JpZ2jKPFNoYXJlTiB3aWR0aD0iMTZweCIgL9REPC/qANM+Cu4A48Uv9QDnzxrtAOvPHOUAmD0ixQdDxBLGIcczQnJvd3NpbmcgaGlzdG9yecYdZGVzYz0iQ2xlYXLEET7/AKUgIDrkATktc2hvdz0iZmFsc/EAhv8AvPcAvGljb249IsQG/wDW7wDWQ2FydMYROsUSScVIdHJ1x2LmAOBFZGnFJvEBy8U0xX3GGyAgPMRSMv8Bz/8CE01vcmVYIGNsYXNz5wC5It9R8gIgzBwKPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsg5gJ8LCDlALQsIMZ4fSBmcm9tICdAY3ViZmUv5ADdcy12dWUnOwrEC3Qg5AGcID0gKCkgPT4gewogIMQXb2xlLmxvZygn5QFkIOQDDicpOwp9yDXlASrfNiBUxCXNN+oBt988IFLEKs085AC63zYg5AHwxzU8L+YBJj4K"},{default:n(()=>[j]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbmF2YmFyIEBvbi1jbGljay1iYWNrPSLEBiLLFnRpdGxlPSLFB8wYcmlnaHQ9IsUHQ8QSIiBkZXNjPSJFZGl0IsRmICDJdSAjY29udGVudMYY5wCCdGFicyB2LW1vZGVsPSJ0YWIxdmFsdcRmxWM9ImNoYW5nZVRhYsdQzDotcGFuZSDnAJ5UxAcxIj4gPC/MH982xTYy2TbJFnPGEjwv6gFE8ADf5QEHyTlNb3JlWCBjbGFzc+cBIiIgd2lkdGg9IjE2cHgiPjwvxSPSWMh25gGdPgrNdDxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yhvFZ8kdQGN1YmZlL2ljb25zLcYqxAt0IOkBfCA9xE4oMCnIGuQCDyA9ICgpID0+IHsKICDEF29sZS5sb2coJ+UB+SBCYWNrJyk7Cn3JT+QBWd82IOUBfs036gJM3zwgUsQqzTzpAivEO3RhYsk+6QDbLugA4XRhYi7kAehLZXnFQTwv5gFYPgo="},{default:n(()=>[m]),_:1}),b,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbmF2YmFyIEBvbi1jbGljay1iYWNrPSLEBiLEJSAgyTQgI2NvbnRlbnTGGMdBdGFicyB2LW1vZGVsPSJ0YWIydmFsdWUiIEDFUD0iY2hhbmdlVGFiTGlzdMdUzD4tcGFuZSB0aXRsZT0iVMQHMSI+IDwvzB/fNsU2Mt821jYz2TbJFnPGEjwv6gE98AEZcmlnaOoBF0hvcml6b250YWxOIGNsYXNzPSLFISIgd2lkdGg9IjE2cHgiPjwvyynSZOgAguYBoj4KzBwKPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvKG8ttySNAY3ViZmUvaWNvbnMtxjDEC3Qg6QHIID3EVCgwKcga5AIaID0gKCkgPT4gewogIMQXb2xlLmxvZygnQ+QB9CBCYWNrJyk7Cn3INe0CBMQ+dGFiyUHJbC7IcnRhYi7kAYtLZXnFRTwv5gDvPgo="},{default:n(()=>[u]),_:1}),v])}}});export{_ as default,C as excerpt,I as frontmatter};
