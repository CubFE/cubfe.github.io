import{d as e,r as c,b as h,k as p,w as r,aq as t,o,e as a,l as s}from"./style_icon.js";const d={class:"markdown-body"},i=t(`<h1>List</h1><h3>Intro</h3><p>It is recommended to use the <a href="#/zh-CN/component/infiniteloading">Scrolling Loading</a> component provided by <code class="">cubui</code> first.</p><p>This component is a <strong>virtual list</strong> component, which can only render the current visible area, and other parts will be rendered after the user scrolls into the visible area.</p><p>In most scenarios, you don&#39;t need to use this component. It may have problems such as sliding white screen, inaccurate calculation position, etc.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">List</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>();
</code></pre><h3>Basic Usage</h3>`,8),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"h2"),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"h2"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-list"),s(),a("span",{class:"hljs-attr"},":listData"),s("="),a("span",{class:"hljs-string"},'"count"'),s(" @"),a("span",{class:"hljs-attr"},"scroll-bottom"),s("="),a("span",{class:"hljs-string"},'"handleScroll"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot"),s("="),a("span",{class:"hljs-string"},'"{ item. index }"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"list-item"'),s(">")]),s(" {{ index }} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-list"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { onMounted, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"count"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s("("),a("span",{class:"hljs-number"},"100"),s(")."),a("span",{class:"hljs-title function_"},"fill"),s("("),a("span",{class:"hljs-number"},"0"),s(`)
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleScroll"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" arr = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s("("),a("span",{class:"hljs-number"},"100"),s(")."),a("span",{class:"hljs-title function_"},"fill"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
        `),a("span",{class:"hljs-keyword"},"const"),s(" len = state."),a("span",{class:"hljs-property"},"count"),s("."),a("span",{class:"hljs-property"},"length"),s(`;
        state.`),a("span",{class:"hljs-property"},"count"),s(" = state."),a("span",{class:"hljs-property"},"count"),s("."),a("span",{class:"hljs-title function_"},"concat"),s("(arr."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: number, index: number"),s(") =>")]),s(" len + index + "),a("span",{class:"hljs-number"},"1"),s(`));
      };

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        state.`),a("span",{class:"hljs-property"},"count"),s(" = state."),a("span",{class:"hljs-property"},"count"),s("."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: number, index: number"),s(") =>")]),s(" index + "),a("span",{class:"hljs-number"},"1"),s(`);
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), handleScroll };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-tag"},"body"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100vh"),s(`;
  }
  `),a("span",{class:"hljs-selector-id"},"#app"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-cell"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-list-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-number"},"#f4a8b6"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),m=t('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>height</td><td>The height/estimated height of the list item, supports unfixed height</td><td>Number</td><td><code class="">80</code></td></tr><tr><td>list-data</td><td>List data</td><td>any[]</td><td><code class="">[]</code></td></tr><tr><td>container-height</td><td>Container height(The maximum value cannot exceed the viewable area)</td><td>Number</td><td><code class="">Visual area height</code></td></tr><tr><td>buffer-size</td><td>data buffer length</td><td>Number</td><td><code class="">5</code></td></tr><tr><td>margin</td><td>The gap between the lists is consistent with the custom style</td><td>Number</td><td><code class="">10</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>item</td><td>List item data</td><td>Object</td></tr><tr><td>index</td><td>Indexes</td><td>Number</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>scroll-bottom</td><td>Triggered when scrolling to the bottom</td><td>-</td></tr><tr><td>scroll-up</td><td>scroll up</td><td>-</td></tr><tr><td>scroll-down</td><td>scroll down</td><td>-</td></tr></tbody></table>',7),x={},w="",f=e({__name:"doc.en-US",setup(u,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(b,g)=>{const l=c("demo-block");return o(),h("div",d,[i,p(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8ixBUgIDxoMj5CYXNpYyBVc2FnZTwvaDLHGWN1Yi1jZWxsxg/HEWxpc3QgOsQGRGF0YT0iY291bnQiIEBzY3JvbGwtYm90dG9tPSJoYW5kbGVTxRXHacVD6ACRIHYtc2xvdD0ieyBpdGVtLiBpbmRleCB9yyzuALLEci3EKyI+IHt7yC99IDwvZGl2y2EvyGLIFDwv6AC3xhLGEOgA2Mc/zDc8c2NyaXB0IGxhbmc9InRz5QCTaW1wb3J0IHsgb25N5ADyZWQsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xTVkZWZhdWx0IHvlAIBwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN05AEkPcljKMgfxCF1bnQ6IG5ldyBBcnJheSgxMDApLmZpbGwoMCnHJn0pOwrNUOwBjyA9ICgpID0+yXMgIGxldCBhcnIgPddX5ADNzE9sZW4gPeYApS7lAJAubGVuZ3RoyijLHM8qY29uY2F0KGFyci5tYXAoKOQB1DogbnVtYmVyLOYB2MgP5QCmxGwrxhggKyAxKekAjX3pAOTpAZQo8ADZ+gCH33zGfMp2yXXqAVpyZXR1cm4geyAuLi7mAgEoxWEpLO4Bb33GPH0K5QCzPC/mAl/kAmh0eWzlAqdib2R55wC1d2lkdGg6IDEwMCXGN2hlaWdodMUSduUBYMRII2FwcN8xyRLEMC7oAvPHNdkk6QNmxylkaXNwbGF5OiBmbGV4xmBhbGlnbsUkczogY2VudGVyxhlqdXN0aWZ5LWNvbnRl5AKjzB3xAKdtYXJnaW7nBDDEGXDHYOgAnDXJEmJhY2tncm91bmQtY29sb3I6ICNmNGE4YjbHH29yZGVyLXJhZGl1c8pKfeQBa+YBYg=="},{default:r(()=>[j]),_:1}),m])}}});export{f as default,w as excerpt,x as frontmatter};
