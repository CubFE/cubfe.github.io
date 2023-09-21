import{d as o,r,b as p,k as n,w as l,aq as c,e as a,o as h,l as s}from"./style_icon.js";const i={class:"markdown-body"},g=c(`<h1>Category</h1><h3>Intro</h3><p>Component for displaying product categories.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Category</span>, <span class="hljs-title class_">CategoryPane</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Category</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CategoryPane</span>);
</code></pre><h3>Classic Classification Mod</h3><p>data defination <a href="https://storage.360buyimg.com/cubui/3x/categoryData.js">categoryData.js</a>。</p>`,7),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click on current category data'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        onChange,
        change,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),j=a("h3",null,"Show Text Only",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click on current category data'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        changeText,
        onChange,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Custom taxonomy",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click to categorize data'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        changeCustom,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=c('<h2>API</h2><h3>Category Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Classification mode: <code class="">classify</code>, <code class="">text</code>, <code class="">custom</code></td><td>string</td><td><code class="">classify</code></td></tr><tr><td>category</td><td>Left navigation bar data list</td><td>Array</td><td><code class="">[]</code></td></tr></tbody></table><h3>Category Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Classic classification, click on the left navigation bar to get the data list on the right</td><td>Clicked data</td></tr><tr><td>change-text</td><td>In text classification mode, click on the left navigation bar to get the data list on the right</td><td>Input data</td></tr><tr><td>change-custom</td><td>Customize, click the left navigation bar to get the data list on the right</td><td>Current quantity</td></tr></tbody></table><h3>CategoryPane Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>category-child</td><td>The current classification data is displayed on the right</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>custom-category</td><td>Custom categorical data</td><td>Array</td><td><code class="">[]</code></td></tr></tbody></table><h3>CategoryPane Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>on-change</td><td>Click on the right classified data trigger</td><td>Clicked data</td></tr></tbody></table><h3>CategoryPane Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom content</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-category-bg-color</td><td><em>rgba(255, 255, 255, 1)</em></td></tr><tr><td>--cub-category-list-left-bg-color</td><td><em>rgba(246, 247, 249, 1)</em></td></tr><tr><td>--cub-category-list-item-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-category-list-item-checked-color</td><td><em>rgba(255, 255, 255, 1)</em></td></tr><tr><td>--cub-category-list-item-checked-img-bg-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-category-pane-gray-color</td><td><em>#666</em></td></tr><tr><td>--cub-category-pane-border-color</td><td><em>rgb(153, 153, 153)</em></td></tr><tr><td>--cub-category-pane-title-color</td><td><em>rgba(51, 51, 51, 1)</em></td></tr></tbody></table>',15),v={},I="",k=o({__name:"doc.en-US",setup(f,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(C,A)=>{const t=r("demo-block");return h(),p("div",i,[g,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2F0ZWdvcnkgOsgKPSLICiIgQGNoYW5nZT0ixggixDfPOS1wYW5lyj5DaGlsZMpDxQ8iIEBvbkPHSsgKIj4gPC/RScRhzhc+Cjwv6gC2PHNjcmlwdCBsYW5nPSJ0c+UAkmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CgogIGV4xTZkZWZhdWx0IHvlANtzZXR1cCgpxw4gIGNvbnN0IGRhdGEgPclfKMgeICDoAKZJbmZvOiB7fSzRGjogW3t9XdIY5QEaxh3HHH0p5QCYxAHpALcoKCkgPT7pAI/lAKFUaW1lb3V00RsgIGdldERhdGEoKTvJFX0sIDUwMMkRy2TmANvHMyA9INBPZmV0Y2goJy8vc3RvcmFnZS4zNjBidXlpbWcuY29t5AGkdWkvM3gv6ADRxEcuanMnKclCICAudGhlbigocmVzcG9uc2XFYsgNLmpzb24oKdYv8QDb6ACwe+0BcyzuAU8gfeUBpnPqAP/EAeQBvi7MNiA9zUXbLs8qyRjbM+YAico4xRDMMH3tAPJjYeQBZihlcnLlAPPkAOVvbGUubG9nKCdPaCwgZXJyb3InxQgp6gHG7wHF5gOe5AHEaW5kZXg6IGFuee8BQvUApFtdLmNvbmNhdCjNH+0A61vFUyArIDFdLmPEOHJlbiBhc8Vj6wCQ7ACP6APj8wJV7QDgQ2xpY2sgb24gY3VycmVudOkBNOUArifSX3JldHVybstPyGrrA1/PEC4uLuYEDOUA4+gBe8dSfQrFCzwv5gRWPgo="},{default:l(()=>[d]),_:1}),j,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2F0ZWdvcnkgOsgKPSLICiIgQGNoYW5nZT0ixghUZXh0IsQ7zz0tcGFuZSB0eXBlPSJ0xCTKTkNoaWxkylPFDyIgQG9uQ8dayAoiPiA8L9FVCiAgPs4XPgo8L+oAxjxzY3JpcHQgbGFuZz0idHPlAJ5pbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnOwoKICBleMU2ZGVmYXVsdCB75QDnc2V0dXAoKccOICBjb25zdCBkYXRhID3JXyjIHiAg6ACmSW5mbzoge30s0Ro6IFt7fV3SGOUBGsYdxxx9KeUAmMQB6QC3KCgpID0+6QCP5QChVGltZW91dNEbICBnZXREYXRhKCk7yRV9LCA1MDDJEctk5gDbxzMgPSDQT2ZldGNoKCcvL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbeQBpHVpLzN4L+gA0cRHLmpzJynJQiAgLnRoZW4oKHJlc3BvbnNlxWLIDS5qc29uKCnWL/EA2+YAsG9sZS5sb2coJ3JlcycsxEvrAOvIJeQCCuwBmCzuAXQgfeUBy3POOeQB4y7MNiA9zUXbLs8qyRjbM+YAico4xRDMMH3tARdjYeQBiyhlcnLlARjtAQpPaCwgZXJyb3InxQgp6gHr7wHq6gPT5AHtaW5kZXg6IGFuee8Ba/UAqFtdLmNvbmNhdCjNH+0A71vFUyArIDFdLmPEOHJlbiBhc8Vj+ACU6AQN8wJ/7QDlQ2xpY2sgb24gY3VycmVudOkBOeUAryfMYMYJcmV0dXJuzE/pAP7qA4vIfsoSLi4u5gQ65QDo6AGEx1Z9CsULPC/mBIQ+Cg=="},{default:l(()=>[u]),_:1}),y,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2F0ZWdvcnkgQGNoYW5nZT0ixghDdXN0b20iCiAgICA+zSotcGFuZSB0eXDELMYmIDrGCUPHI8gZyBAiIEBvbkPUYD4gPC/RXQrEc80XPgo8L+oAuzxzY3JpcHQgbGFuZz0idHMi5ADOaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgb25Nb3VudGVkIH0gZnJvbSAndnVlJzsKCiAgZXjFNmRlZmF1bHQge+UA8HNldHVwKCnHDiAgY29uc3QgZGF0YSA9yV8oyB4gIO4A7TogW3t9XccdfSk7xwrpAIUoKCkgPT7JXcVvVGltZW91dNEbICBnZXREYXRhKMlIICB9LCA1MDDJEcpj5gCoxzIgPSDQTmZldGNoKCcvL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbeQBcXVpLzN4L+gBdsRHLmpzJynJQiAgLnRoZW4oKHJlc3BvbnNlxWLIDS5qc29uKCnWL/EA2ugAsHvvAUAgfeUBZnPqAPHEAeQBfi7PKT3POswyfe0AhmNh5AD6KGVycuUAh8R5b2xlLmxvZygnT2gsIGVycm9yJ8UIKeoBWe4BWOwCuPMBXc1UQ2xpY2sgdG8g5wFLaXpl5QDCJ9JdcmV0dXJuzEnLaCzJFi4uLuYCzyjESOgA3cdGfQrFCzwv5gMZPgo="},{default:l(()=>[m]),_:1}),b])}}});export{k as default,I as excerpt,v as frontmatter};
