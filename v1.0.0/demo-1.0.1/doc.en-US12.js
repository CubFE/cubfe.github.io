import{d as p,r,b as h,k as l,w as n,aq as c,e as a,o as i,l as s}from"./style_icon.js";const j={class:"markdown-body"},d=c(`<h1>Card</h1><h3>Intro</h3><p>Used to display product pictures, prices and other information.</p><h3>Install</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Card</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Card</span>);
</code></pre><h3>Usage</h3><h3>Basic Usage</h3>`,7),g=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-card"),s(`
    `),a("span",{class:"hljs-attr"},":img-url"),s("="),a("span",{class:"hljs-string"},'"state.imgUrl"'),s(`
    `),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"state.title"'),s(`
    `),a("span",{class:"hljs-attr"},":price"),s("="),a("span",{class:"hljs-string"},'"state.price"'),s(`
    `),a("span",{class:"hljs-attr"},":vipPrice"),s("="),a("span",{class:"hljs-string"},'"state.vipPrice"'),s(`
    `),a("span",{class:"hljs-attr"},":shopDesc"),s("="),a("span",{class:"hljs-string"},'"state.shopDesc"'),s(`
    `),a("span",{class:"hljs-attr"},":delivery"),s("="),a("span",{class:"hljs-string"},'"state.delivery"'),s(`
    `),a("span",{class:"hljs-attr"},":shopName"),s("="),a("span",{class:"hljs-string"},'"state.shopName"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-card"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"imgUrl"),s(`:
    `),a("span",{class:"hljs-string"},"'//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg'"),s(`,
  `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'title'"),s(`,
  `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'388'"),s(`,
  `),a("span",{class:"hljs-attr"},"vipPrice"),s(": "),a("span",{class:"hljs-string"},"'378'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopDesc"),s(": "),a("span",{class:"hljs-string"},"'desc'"),s(`,
  `),a("span",{class:"hljs-attr"},"delivery"),s(": "),a("span",{class:"hljs-string"},"'delivery'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopName"),s(": "),a("span",{class:"hljs-string"},"'shopName>'"),s(`
});
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),o=a("h3",null,"Custom prolist",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-card"),s(`
    `),a("span",{class:"hljs-attr"},":img-url"),s("="),a("span",{class:"hljs-string"},'"state.imgUrl"'),s(`
    `),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"state.title"'),s(`
    `),a("span",{class:"hljs-attr"},":price"),s("="),a("span",{class:"hljs-string"},'"state.price"'),s(`
    `),a("span",{class:"hljs-attr"},":vipPrice"),s("="),a("span",{class:"hljs-string"},'"state.vipPrice"'),s(`
    `),a("span",{class:"hljs-attr"},":shopDesc"),s("="),a("span",{class:"hljs-string"},'"state.shopDesc"'),s(`
    `),a("span",{class:"hljs-attr"},":delivery"),s("="),a("span",{class:"hljs-string"},'"state.delivery"'),s(`
    `),a("span",{class:"hljs-attr"},":shopName"),s("="),a("span",{class:"hljs-string"},'"state.shopName"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prolist"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"search_prolist_attr"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"word"'),s(">")]),s("tag"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"word"'),s(">")]),s("tag"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"word"'),s(">")]),s("tag"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-card"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"imgUrl"),s(`:
    `),a("span",{class:"hljs-string"},"'//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg'"),s(`,
  `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'title'"),s(`,
  `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'388'"),s(`,
  `),a("span",{class:"hljs-attr"},"vipPrice"),s(": "),a("span",{class:"hljs-string"},"'378'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopDesc"),s(": "),a("span",{class:"hljs-string"},"'desc'"),s(`,
  `),a("span",{class:"hljs-attr"},"delivery"),s(": "),a("span",{class:"hljs-string"},"'delivery'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopName"),s(": "),a("span",{class:"hljs-string"},"'shopName>'"),s(`
});
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".search_prolist_attr"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"3px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"1px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  `),a("span",{class:"hljs-attribute"},"overflow"),s(`: hidden;
}
`),a("span",{class:"hljs-selector-class"},".search_prolist_attr"),s(" > "),a("span",{class:"hljs-selector-tag"},"span"),s(` {
  `),a("span",{class:"hljs-attribute"},"float"),s(`: left;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"5px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"1px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#999"),s(`;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-number"},"#f2f2f7"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"5px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),u=a("h3",null,"Custom Content",-1),b=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-card"),s(`
    `),a("span",{class:"hljs-attr"},":img-url"),s("="),a("span",{class:"hljs-string"},'"state.imgUrl"'),s(`
    `),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"state.title"'),s(`
    `),a("span",{class:"hljs-attr"},":price"),s("="),a("span",{class:"hljs-string"},'"state.price"'),s(`
    `),a("span",{class:"hljs-attr"},":vipPrice"),s("="),a("span",{class:"hljs-string"},'"state.vipPrice"'),s(`
    `),a("span",{class:"hljs-attr"},":shopDesc"),s("="),a("span",{class:"hljs-string"},'"state.shopDesc"'),s(`
    `),a("span",{class:"hljs-attr"},":delivery"),s("="),a("span",{class:"hljs-string"},'"state.delivery"'),s(`
    `),a("span",{class:"hljs-attr"},":shopName"),s("="),a("span",{class:"hljs-string"},'"state.shopName"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"shop-tag"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Custom Content"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"price"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("inquiry"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"origin"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tag"'),s(`
        `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"'),s(`
        `),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-card"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"imgUrl"),s(`:
    `),a("span",{class:"hljs-string"},"'//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg'"),s(`,
  `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'title'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopName"),s(": "),a("span",{class:"hljs-string"},"'shopName>'"),s(`
});
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".tag"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: inline-block;
  `),a("span",{class:"hljs-attribute"},"vertical-align"),s(`: middle;
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"5px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"2px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"14px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Customize bottom right content",-1),v=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-card"),s(`
    `),a("span",{class:"hljs-attr"},":img-url"),s("="),a("span",{class:"hljs-string"},'"state.imgUrl"'),s(`
    `),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"state.title"'),s(`
    `),a("span",{class:"hljs-attr"},":price"),s("="),a("span",{class:"hljs-string"},'"state.price"'),s(`
    `),a("span",{class:"hljs-attr"},":vipPrice"),s("="),a("span",{class:"hljs-string"},'"state.vipPrice"'),s(`
    `),a("span",{class:"hljs-attr"},":shopDesc"),s("="),a("span",{class:"hljs-string"},'"state.shopDesc"'),s(`
    `),a("span",{class:"hljs-attr"},":delivery"),s("="),a("span",{class:"hljs-string"},'"state.delivery"'),s(`
    `),a("span",{class:"hljs-attr"},":shopName"),s("="),a("span",{class:"hljs-string"},'"state.shopName"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"customize"'),s(">")]),s("custom"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-card"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"imgUrl"),s(`:
    `),a("span",{class:"hljs-string"},"'//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg'"),s(`,
  `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'title'"),s(`,
  `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'388'"),s(`,
  `),a("span",{class:"hljs-attr"},"vipPrice"),s(": "),a("span",{class:"hljs-string"},"'378'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopDesc"),s(": "),a("span",{class:"hljs-string"},"'desc'"),s(`,
  `),a("span",{class:"hljs-attr"},"delivery"),s(": "),a("span",{class:"hljs-string"},"'delivery'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopName"),s(": "),a("span",{class:"hljs-string"},"'shopName>'"),s(`
});
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".customize"),s(` {
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"12px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),I=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>img-url</td><td>Left thumb image <code class="">URL</code></td><td>string</td><td>-</td></tr><tr><td>title</td><td>Title</td><td>string</td><td>-</td></tr><tr><td>price</td><td>Price</td><td>string</td><td>-</td></tr><tr><td>vip-price</td><td>vip-price</td><td>string</td><td>-</td></tr><tr><td>shop-desc</td><td>shop-desc</td><td>string</td><td>-</td></tr><tr><td>delivery</td><td>delivery</td><td>string</td><td>-</td></tr><tr><td>shop-name</td><td>shop-name</td><td>string</td><td>-</td></tr><tr><td>is-need-price</td><td>Whether price display is required</td><td>Boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>click event</td><td>event: MouseEvent</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>prolist</td><td>Custom product introduction</td></tr><tr><td>price</td><td>Custom price</td></tr><tr><td>origin</td><td>Custom content behind the price</td></tr><tr><td>shop-tag</td><td>Custom shop introduction</td></tr><tr><td>footer</td><td>Customize bottom right content</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-card-font-size-0</td><td><em>var(--cub-font-size-0)</em></td></tr><tr><td>--cub-card-font-size-1</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-card-font-size-2</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-card-font-size-3</td><td><em>var(--cub-font-size-3)</em></td></tr><tr><td>--cub-card-left-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-card-left-background-color</td><td><em>inherit</em></td></tr></tbody></table>',11),C={},f="",x=p({__name:"doc.en-US",setup(z,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(N,Z)=>{const t=r("demo-block");return i(),h("div",j,[d,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2FyZAogICAgOmltZy11cmw9InN0YXRlLmltZ1VybCLGHHRpdGxlyBrFDccZcHJpY8kZxQ3HGXZpcFDMHMgQxx9zaG9wRGVzY8gfyBDHH2RlbGl2ZXJ5yB/IEMs+TmFtyV3IEMQf5QDaL+gA2z4KPC/qAPQ8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CmNvbnN0IMVjID3JJSh7CiAg5gEeOuUAjycvL2ltZzEwLjM2MGJ1eWltZy5jb20vbjIvczI0MHgyNDBfamZzL3QxLzIxMDg5MC8yMi80NzI4LzE2MzgyOS82MTYzYTU5MEViN2M2ZjRiNS82MzkwNTI2ZDQ5NzkxY2I5LmpwZyFxNzDECCcsCiAg5QGDOiAnxQjFEuUBfDogJzM4OMUQ6AFwxBM3xhPoAWQ6ICdkZXNjxRToAVnFFMYLySzkAVI6ICfICz4nCn0pOwo8L+YBRT4K"},{default:n(()=>[g]),_:1}),o,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2FyZAogICAgOmltZy11cmw9InN0YXRlLmltZ1VybCLGHHRpdGxlyBrFDccZcHJpY8kZxQ3HGXZpcFDMHMgQxx9zaG9wRGVzY8gfyBDHH2RlbGl2ZXJ5yB/IEMs+TmFtyV3IEMQf5ADaICDpAOkgI3Byb2xpc3TGGCAgPGRpdiBjbGFzcz0ic2VhcmNoX8ciX2F0dHIiyCggIDxzcGFuyCt3b3JkIj50YWc8L8QX3ybfJtYmPC9kaXbGDTwv7QGpL+gBqj4KzBo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CmNvbnN0IOUBMiA9ySUoewogIOYB7TrFfCcvL2ltZzEwLjM2MGJ1eWltZy5jb20vbjIvczI0MHgyNDBfamZzL3QxLzIxMDg5MC8yMi80NzI4LzE2MzgyOS82MTYzYTU5MEViN2M2ZjRiNS82MzkwNTI2ZDQ5NzkxY2I5LmpwZyFxNzDECCcsCiAg5QJSOiAnxQjFEuUCSzogJzM4OMUQ6AI/xBM3xhPoAjM6ICdkZXNjxRToAijFFMYLySzkAiE6ICfICz4nCn0pOwo8L+YBReQBTnR5bGU+Ci7zAhYg5AElbWFyZ2luOiAzcHggMCAxcHg7CiAgaGVpZ2h0OiAxNcYQb3ZlcmZsb3c6IGhpZGRlbjsKfdZSPiDlAhPEWWZsb2F0OiBsZWZ0xENwYWRkaW5nOiAwIMdVYm9yZGVyLXJhZGl1czrIe2ZvbnQtc2l6ZTogMTD2AI5saW5lLdAVY29sb3I6ICM5OTnFXWFja2dyb3VuZC3IGmYyZjJmN8Qd5gD0LXLGQsVBfeQBNOYBKw=="},{default:n(()=>[m]),_:1}),u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2FyZAogICAgOmltZy11cmw9InN0YXRlLmltZ1VybCLGHHRpdGxlyBrFDccZcHJpY8kZxQ3HGXZpcFDMHMgQxx9zaG9wRGVzY8gfyBDHH2RlbGl2ZXJ5yB/IEMs+TmFtyV3IEMQf5ADaICDpAOkgI8QdLXRhZ8YZICA8ZGl2PkN1c3RvbSBDb250ZW50PC/EFMY5L8g60UnlAN/JRnNwYW4+aW5xdWlyeTwvxQ7fQSNvcmlnaccnICA8aW1nxwsgIGNsYXNzPSJ0YWfmAOPEAXNyYz0iaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2pkcGhvdG8vczU4eDI4X2pmcy90OTQ1MS8zNTkvNDE1NjIyNjQ5LzE1MzE4L2IwOTQzZTVkLzU5YTc4NDk1TjNiZDJhOWY4LnBuy3ZhbHQ9IsgPL/QA1Dwv6AI5PgrMGjxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qg5QHBID3JJSh7CiAg5gJ8OsV8J+YA/DDvAPxuMi9zMjQweDI0MOYA+TEvMjEwODkwLzIyLzQ3MjgvMTYzODI5LzYxNjNhNTkwRWI3YzZmNGI1LzYzOTA1MjZkNDk3OTFjYjkuanBnIXE3MMQIJywKICDlAuE6ICfFCMUS6AJhOiAnyAs+Jwp9KTsKPC/mAPbkAP90eWxlPgoudGFnIOQAxmRpc3BsYXk6IGlubGluZS1ibG9jazsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlxBptYXJnaW4tcmlnaHQ6IDVweMsVbGVmdDogMsYUaGXGIzE0xBB95ACHxn4="},{default:n(()=>[b]),_:1}),y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2FyZAogICAgOmltZy11cmw9InN0YXRlLmltZ1VybCLGHHRpdGxlyBrFDccZcHJpY8kZxQ3HGXZpcFDMHMgQxx9zaG9wRGVzY8gfyBDHH2RlbGl2ZXJ5yB/IEMs+TmFtyV3IEMQf5ADaICDpAOkgI2Zvb3RlcsYXICA8ZGl2IGNsYXNzPSJjdXN0b21pemUiPsYLPC9kaXbHQS/tASsv6AEsPgrMGjxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qg5QC0ID3JJSh7CiAg5gFvOsV8Jy8vaW1nMTAuMzYwYnV5aW1nLmNvbS9uMi9zMjQweDI0MF9qZnMvdDEvMjEwODkwLzIyLzQ3MjgvMTYzODI5LzYxNjNhNTkwRWI3YzZmNGI1LzYzOTA1MjZkNDk3OTFjYjkuanBnIXE3MMQIJywKICDlAdQ6ICfFCMUS5QHNOiAnMzg4xRDoAcHEEzfGE+gBtTogJ2Rlc2PFFOgBqsUUxgvJLOQBozogJ8gLPicKfSk7Cjwv5gFF5AFOdHlsZT4KLukBmSDkARtmb250LXNpemU6IDEycHg7Cn3ENMYr"},{default:n(()=>[v]),_:1}),I])}}});export{x as default,f as excerpt,C as frontmatter};
