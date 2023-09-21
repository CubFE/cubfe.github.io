import{d as p,r as o,b as h,k as l,w as n,aq as e,e as a,l as s,o as i}from"./style_icon.js";const r={class:"markdown-body"},d=e(`<h1>Collapse</h1><h3>Intro</h3><p>Place the content in multiple folded panels, and click the panel title to expand or shrink the content.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Collapse</span>, <span class="hljs-title class_">CollapseItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Collapse</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CollapseItem</span>);
</code></pre><h3>Basic Usage</h3><p>Control the expanded panel list through &#39;V-model&#39;, and &#39;activenames&#39; is in array format</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeNames"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:title"),s(">")]),s(" {{title1}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      cubui is a lightweight Vue component library with CubFE style
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title2"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title3"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" activeNames = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"2"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" title = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"title1"),s(": "),a("span",{class:"hljs-string"},"'title1'"),s(`,
        `),a("span",{class:"hljs-attr"},"title2"),s(": "),a("span",{class:"hljs-string"},"'title2'"),s(`,
        `),a("span",{class:"hljs-attr"},"title3"),s(": "),a("span",{class:"hljs-string"},"'title3'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"modelValue, currName, status"),s(`) => {
        `),a("span",{class:"hljs-comment"},"// currName: collapse-item name"),s(`
        `),a("span",{class:"hljs-comment"},"// status: true open, false close"),s(`
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(modelValue, currName, status);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        onChange,
        activeNames,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(title)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"accordion",-1),g=a("p",null,[s("You can set accordion mode through 'accordion', and expand up to one panel. At this time, 'activename' is in string format"),a("code",{class:""},"value"),s(" you can set the content of a subtitle")],-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeName"'),s(),a("span",{class:"hljs-attr"},":accordion"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title1"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"subTitle"'),s(">")]),s(`
      Build scenes based on CubFE design language system
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title2"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
      Improve the modularity and generality of the boundary
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title3"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(`
      It adopts combinatorial API composition syntax to reconstruct, with clear structure and modular function
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-keyword"},"const"),s(" activeName = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
    `),a("span",{class:"hljs-keyword"},"const"),s(" subTitle = "),a("span",{class:"hljs-string"},"'subtitle'"),s(`;
    `),a("span",{class:"hljs-keyword"},"const"),s(" title = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
      `),a("span",{class:"hljs-attr"},"title1"),s(": "),a("span",{class:"hljs-string"},"'title1'"),s(`,
      `),a("span",{class:"hljs-attr"},"title2"),s(": "),a("span",{class:"hljs-string"},"'title2'"),s(`,
      `),a("span",{class:"hljs-attr"},"title3"),s(": "),a("span",{class:"hljs-string"},"'title3'"),s(`,
    })
    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      activeName,
      subTitle,
      ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(title)
    };
  }
}
</>
`)])])],-1),b=a("h3",null,"Custom collapse Icon",-1),y=a("p",null,"Set custom icons through icon and rotate to set the rotation angle of icons",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeName"'),s(),a("span",{class:"hljs-attr"},":accordion"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title1"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Notice"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:value"),s(">")]),s(" text test "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      cubui3. 0 rethink its internal consistency and composability
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title2"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Follow"'),s(">")]),s(`
      Improve the efficiency of production research output docking and reduce the output workload
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Notice"),s(", "),a("span",{class:"hljs-title class_"},"Follow"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" activeName = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" title = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"title1"),s(": "),a("span",{class:"hljs-string"},"'title1'"),s(`,
        `),a("span",{class:"hljs-attr"},"title2"),s(": "),a("span",{class:"hljs-string"},"'title2'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        activeName,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(title),
        `),a("span",{class:"hljs-title class_"},"Notice"),s(`,
        `),a("span",{class:"hljs-title class_"},"Follow"),s(`
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"Set fixed content (do not collapse)",-1),v=a("p",null,"Set content through slot: extra",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeName"'),s(),a("span",{class:"hljs-attr"},":accordion"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title1"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:extra"),s(">")]),s("fixed content"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      cubui is a lightweight Vue component library with CubFE style
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title2"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" activeName = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" title = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"title1"),s(": "),a("span",{class:"hljs-string"},"'title1'"),s(`,
        `),a("span",{class:"hljs-attr"},"title2"),s(": "),a("span",{class:"hljs-string"},"'title2'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        activeName,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(title)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=e('<h2>API</h2><h3>Collapse Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td><code class="">name</code> of the currently expanded panel</td><td>accordion-mode: string | number<br>non-accordion-mode: (string | number)[]</td><td><code class="">-</code></td></tr><tr><td>accordion</td><td>Whether to enable accordion mode</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>CollapseItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>unique identifier, required</td><td>string | number</td><td><code class="">-1</code></td></tr><tr><td>title</td><td>The content on the left side of the title bar, supports slot input (<code class="">props</code> input has a higher priority)</td><td>string</td><td><code class="">-</code></td></tr><tr><td>value</td><td>The content on the right side of the title bar, support slot input (<code class="">props</code> input has a higher priority)</td><td>string</td><td><code class="">-</code></td></tr><tr><td>icon</td><td>The icon component on the left side of the title bar, equivalent to the <code class="">cubui-icon</code> component</td><td>-</td><td><code class="">-</code></td></tr><tr><td>label</td><td>title bar description</td><td>number | string</td><td><code class="">-</code></td></tr><tr><td>rotate</td><td>Click the rotation angle of folding and unfolding, effective in the custom icon mode</td><td>string | number</td><td><code class="">180</code></td></tr><tr><td>disabled</td><td>whether the title bar is disabled</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>border</td><td>Whether to display borders</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>CollapseItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>Content slot on the left side of the title bar</td></tr><tr><td>alue</td><td>Right content slot of the title bar</td></tr><tr><td>extra</td><td>Set fixed content under the title (no folding)</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Callback parameter</th></tr></thead><tbody><tr><td>change</td><td>Triggered when switching panels</td><td><code class="">(modelValue, currName, status)</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-collapse-item-padding</td><td><em>13px 36px 13px 26px</em></td></tr><tr><td>--cub-collapse-item-color</td><td><em>#666666</em></td></tr><tr><td>--cub-collapse-item-disabled-color</td><td><em>#c8c9cc</em></td></tr><tr><td>--cub-collapse-item-icon-color</td><td><em>#666666</em></td></tr><tr><td>--cub-collapse-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-collapse-item-line-height</td><td><em>24px</em></td></tr><tr><td>--cub-collapse-item-sub-title-color</td><td><em>#666666</em></td></tr><tr><td>--cub-collapse-wrapper-content-padding</td><td><em>12px 26px</em></td></tr><tr><td>--cub-collapse-wrapper-empty-content-padding</td><td><em>0 26px</em></td></tr><tr><td>--cub-collapse-wrapper-content-color</td><td><em>#666666</em></td></tr><tr><td>--cub-collapse-wrapper-content-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-collapse-wrapper-content-line-height</td><td><em>1.5</em></td></tr><tr><td>--cub-collapse-wrapper-content-background-color</td><td><em>var(--cub-white)</em></td></tr></tbody></table>',13),Z={},B="",Y=p({__name:"doc.en-US",setup(x,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(k,G)=>{const t=o("demo-block");return i(),h("div",r,[d,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29sbGFwc2Ugdi1tb2RlbD0iYWN0aXZlTmFtZXMiIEBjaGFuZ2U9Im9uQ8UKIsQ6zzwtaXRlbSA6bmFtZT0iMcciICDJbSB2LXNsb3Q6dGl0bGU+IHt7xQkxfX0gPC/IJMg1Y3VidWkgaXMgYSBsaWdodHdlxAYgVnVlIGNvbXBvbmVudCBsaWJyYXJ5IHdpdGggQ3ViRkUgc3R5bGXFRDwv8QCc+gC05QCKPSLFBzIi6ADEMukAxFRoZSBwcm9kdWN0IGhhcyBiZWVu5QCJcmVoZW5zaXZlbHkgdXBncmFkZWQgaW4gdGVybXMgb2YgZnVuY3Rpb24sIGV4cGVyaWVuY2UsIGVhc2XEHnVzZSBhbmQgZmxleGliaWxpdHkh/wC+/wC+M+kAvjMiIGRpc2FibGVkPthQzhc+CuwBiTxzY3JpcHTEJ2ltcG9ydCB7IHJl5gIXLCByZWYsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiDkAOrEL2RlZmF1bHQge+UAuXNldHVwKCnHDiAgY29uc3Qg6wJmID3EVShbMSwgMl0pxEjKJ+UA28UhxjEoyEYgxhsxOiAnxgknLM4aMsgaMtAaM8gaMyfHGX3PdugC7SA9ICjlAxZWYWx1ZSwgY3VycuQAsywgc3RhdHVzKSA9PukA2CAgLy/JIjog7gGr5AGazCjGQDogdHJ1ZSBvcGVuLCBmYWxzZSBjbG9zyirkAI9vbGUubG9n/gCJ6ADAfcgJcmV0dXJu6wCd6ADU6gEN6wGDyhUuLi7mAd0o5QEjKc5YfQrFCzwv6AIj"},{default:n(()=>[j]),_:1}),m,g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29sbGFwc2Ugdi1tb2RlbD0iYWN0aXZlTmFtZSIgOmFjY29yZGlvbj0idHJ1ZSLEOM86LWl0ZW0gOnRpdGxlPSLFBzEiIDpuYW1lPSLECnZhbHVlPSJzdWJUxB3HRCAgQnVpbGQgc2NlbmVzIGJhc2VkIG9uIEN1YkZFIGRlc2lnbiBsYW5ndWFnZSBzeXN0ZW3GfS/Rfv8AlucAljLpAJYy6QCESW1wcm92ZSB0aGUgbW9kdWxhcml0eSBhbmQgZ2VuZXJhbMQPb2bFIWJvdW5kYXJ5/wCH/wCHM+kAhzPqAId0IGFkb3B0cyBjb21iaW5hdG9yaWFsIEFQScQScG9zaXRpb24gc3ludGF4IHRvIHJlY29uc3RydWN0LCB3aXRoIGNsZWFyIMYTdXJl5QDE5wDTIGZ1bmPEQfwAus4XPgo8L+oCLTxzY3JpcHQ+CmltcG9ydCB7IHJl5gIoLCByZWYsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CmV4xS1kZWZhdWx0IHsKICBzZXR1cCgpxQwgIOUAwyDqAnEgPcROKDEpO8sf6AI4ID0gJ3N1YuUBRCfMIcUSxTvGSijGXSDGGTE6ICfGCScszBgyyBgyzhgzyBgzxxh9KcUHcmV0dXJu5wC5IOsAtcg+6ACoyBAuLi7mARYoxU/GRn3kALl9Cn0KPC8+Cg=="},{default:n(()=>[u]),_:1}),b,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29sbGFwc2Ugdi1tb2RlbD0iYWN0aXZlTmFtZSIgOmFjY29yZGlvbj0idHJ1ZSLEOM86LWl0ZW0gOnRpdGxlPSLFBzEiIDpuYW1lPSLECmljxD9Ob3RpY8hBICDpAIogdi1zbG90OnZhbHVlPiB0ZXh0IHRlc3QgPC/II8g0Y3VidWkzLiAwIHJldGhpbmsgaXRzIGludGVybmFsIGNvbnNpc3RlbmN5IGFuZCBjb21wb3NhYmlsaXR5xUM8L/EAuf8A0ecA0TLpANHECuYA0UZvbGxvd+kA0UltcHJvdmUgdGhlIGVmZmljaeUAiW9mIHByb2R1Y3Rpb24gcmVzZWFyY2ggb3V0cHV0IGRvY2tpbmflAK9yZWR1Y8ZAxx53b3JrbG9hZPwAvM4XPgrsATY8c2NyaXB0xCdpbXBvcnQgeyByZeYB4CwgcmVmLCB0b1JlZnMgfSBmcm9tICd2dWUnO8wv5gG2LCDmAO3JKEBjdWJmZS/kAQlzLcg1ZXjFNWRlZmF1bHQge+UAt3NldHVwKCnHDiDlAaV0IOoCZCA95ACJKDEpxELKIeUBdsUcxisoyEAgxhsxOiAnxgknLM4aMsgaMifHGX3JXHJldHVybukAjCDrAIjKRi4uLuYBFijFRynKGucBDckQ5gEVyGbGZX0KxQs8L+gBfA=="},{default:n(()=>[f]),_:1}),I,v,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29sbGFwc2Ugdi1tb2RlbD0iYWN0aXZlTmFtZSIgOmFjY29yZGlvbj0idHJ1ZSLEOM86LWl0ZW0gOnRpdGxlPSLFBzEiIDpuYW1lPSIxxzIgIMl7IHYtc2xvdDpleHRyYT5maXhlZCBjb250ZW50PC/IJcg2Y3VidWkgaXMgYSBsaWdodHdlxAYgVnVlIGNvbXBvbmVudCBsaWJyYXJ5IHdpdGggQ3ViRkUgc3R5bGXFRDwv8QCt/wDF5wDFMukAxTLpAMVUaGUgcHJvZHVjdCBoYXMgYmVlbuUAiXJlaGVuc2l2ZWx5IHVwZ3JhZGVkIGluIHRlcm1zIG9mIGZ1bmN0aW9uLCBleHBlcmllbmNlLCBlYXNlxB51c2UgYW5kIGZsZXhpYmlsaXR5IfwAvs4XPgrsATk8c2NyaXB0xCdpbXBvcnQgeyByZeYB1iwgcmVmLCB0b1JlZnMgfSBmcm9tICd2dWUnOwog5ACaxC9kZWZhdWx0IHvlAIJzZXR1cCgpxw4g5AGrc3Qg6gIlID3EVCgxKcRCyiHlAUPFHMYrKMhAIMYbMTogJ8YJJyzOGjLIGjInxxl9yVxyZXR1cm7pAIwg6wCIykYuLi7mAOEoxUcpyEbGRX0KxQs8L+gBJw=="},{default:n(()=>[w]),_:1}),C])}}});export{Y as default,B as excerpt,Z as frontmatter};
