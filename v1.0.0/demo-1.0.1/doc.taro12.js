import{d as e,r,b as h,k as t,w as n,aq as c,e as a,o as j,l as s}from"./style_icon.js";const i={class:"markdown-body"},g=c(`<h1>Card 商品卡片</h1><h3>介绍</h3><p>商品卡片，用于展示商品的图片、价格等信息</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Card</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Card</span>);
</code></pre><h3>基础用法</h3>`,6),d=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-card"),s(`
    `),a("span",{class:"hljs-attr"},":img-url"),s("="),a("span",{class:"hljs-string"},'"state.imgUrl"'),s(`
    `),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"state.title"'),s(`
    `),a("span",{class:"hljs-attr"},":price"),s("="),a("span",{class:"hljs-string"},'"state.price"'),s(`
    `),a("span",{class:"hljs-attr"},":vipPrice"),s("="),a("span",{class:"hljs-string"},'"state.vipPrice"'),s(`
    `),a("span",{class:"hljs-attr"},":shopDesc"),s("="),a("span",{class:"hljs-string"},'"state.shopDesc"'),s(`
    `),a("span",{class:"hljs-attr"},":delivery"),s("="),a("span",{class:"hljs-string"},'"state.delivery"'),s(`
    `),a("span",{class:"hljs-attr"},":shopName"),s("="),a("span",{class:"hljs-string"},'"state.shopName"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-card"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"imgUrl"),s(`:
    `),a("span",{class:"hljs-string"},"'//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg'"),s(`,
  `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水'"),s(`,
  `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'388'"),s(`,
  `),a("span",{class:"hljs-attr"},"vipPrice"),s(": "),a("span",{class:"hljs-string"},"'378'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopDesc"),s(": "),a("span",{class:"hljs-string"},"'自营'"),s(`,
  `),a("span",{class:"hljs-attr"},"delivery"),s(": "),a("span",{class:"hljs-string"},"'厂商配送'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopName"),s(": "),a("span",{class:"hljs-string"},"'阳澄湖大闸蟹自营店>'"),s(`
});
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),o=a("h3",null,"自定义商品标签",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"search_prolist_attr"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"word"'),s(">")]),s("活鲜"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"word"'),s(">")]),s("礼盒"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"word"'),s(">")]),s("国产"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-card"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"imgUrl"),s(`:
    `),a("span",{class:"hljs-string"},"'//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg'"),s(`,
  `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水'"),s(`,
  `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'388'"),s(`,
  `),a("span",{class:"hljs-attr"},"vipPrice"),s(": "),a("span",{class:"hljs-string"},"'378'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopDesc"),s(": "),a("span",{class:"hljs-string"},"'自营'"),s(`,
  `),a("span",{class:"hljs-attr"},"delivery"),s(": "),a("span",{class:"hljs-string"},"'厂商配送'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopName"),s(": "),a("span",{class:"hljs-string"},"'阳澄湖大闸蟹自营店>'"),s(`
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
`)])],-1),u=a("h3",null,"自定义店铺介绍",-1),b=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(">")]),s("自定义店铺介绍"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"price"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("询价"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
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
  `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水'"),s(`,
  `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'388'"),s(`,
  `),a("span",{class:"hljs-attr"},"vipPrice"),s(": "),a("span",{class:"hljs-string"},"'378'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopDesc"),s(": "),a("span",{class:"hljs-string"},"'自营'"),s(`,
  `),a("span",{class:"hljs-attr"},"delivery"),s(": "),a("span",{class:"hljs-string"},"'厂商配送'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopName"),s(": "),a("span",{class:"hljs-string"},"'阳澄湖大闸蟹自营店>'"),s(`
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
`)])],-1),y=a("h3",null,"自定义右下角内容",-1),v=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"customize"'),s(">")]),s("自定义右下角内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-card"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"imgUrl"),s(`:
    `),a("span",{class:"hljs-string"},"'//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg'"),s(`,
  `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水'"),s(`,
  `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'388'"),s(`,
  `),a("span",{class:"hljs-attr"},"vipPrice"),s(": "),a("span",{class:"hljs-string"},"'378'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopDesc"),s(": "),a("span",{class:"hljs-string"},"'自营'"),s(`,
  `),a("span",{class:"hljs-attr"},"delivery"),s(": "),a("span",{class:"hljs-string"},"'厂商配送'"),s(`,
  `),a("span",{class:"hljs-attr"},"shopName"),s(": "),a("span",{class:"hljs-string"},"'阳澄湖大闸蟹自营店>'"),s(`
});
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".customize"),s(` {
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"12px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),Z=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>img-url</td><td>左侧图片 <code class="">URL</code></td><td>string</td><td>-</td></tr><tr><td>title</td><td>标题</td><td>string</td><td>-</td></tr><tr><td>price</td><td>商品价格</td><td>string</td><td>-</td></tr><tr><td>vip-price</td><td>会员价格</td><td>string</td><td>-</td></tr><tr><td>shop-desc</td><td>店铺介绍</td><td>string</td><td>-</td></tr><tr><td>delivery</td><td>配送方式</td><td>string</td><td>-</td></tr><tr><td>shop-name</td><td>店铺名称</td><td>string</td><td>-</td></tr><tr><td>is-need-price</td><td>是否需要价格展示</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td><td>event: MouseEvent</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>prolist</td><td>自定义商品介绍</td></tr><tr><td>price</td><td>价格自定义内容</td></tr><tr><td>origin</td><td>价格后方自定义内容</td></tr><tr><td>shop-tag</td><td>店铺介绍自定义</td></tr><tr><td>footer</td><td>右下角内容自定义</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-card-font-size-0</td><td><em>var(--cub-font-size-0)</em></td></tr><tr><td>--cub-card-font-size-1</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-card-font-size-2</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-card-font-size-3</td><td><em>var(--cub-font-size-3)</em></td></tr><tr><td>--cub-card-left-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-card-left-background-color</td><td><em>inherit</em></td></tr></tbody></table>',11),f={},Y="",x=e({__name:"doc.taro",setup(I,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(z,M)=>{const l=r("demo-block");return j(),h("div",i,[g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2FyZAogICAgOmltZy11cmw9InN0YXRlLmltZ1VybCLGHHRpdGxlyBrFDccZcHJpY8kZxQ3HGXZpcFDMHMgQxx9zaG9wRGVzY8gfyBDHH2RlbGl2ZXJ5yB/IEMs+TmFtyV3IEMQfPjwv6ADYPgo8L+oA8TxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3QgxWAgPcklKHsKICDmARs65QCMJy8vaW1nMTAuMzYwYnV5aW1nLmNvbS9uMi9zMjQweDI0MF9qZnMvdDEvMjEwODkwLzIyLzQ3MjgvMTYzODI5LzYxNjNhNTkwRWI3YzZmNGI1LzYzOTA1MjZkNDk3OTFjYjkuanBnIXE3MMQIJywKICDlAYA6ICfmtLvon7njgJHmuZbloZjnhZnpm6gg6Ziz5r6ExBOkp+mXuOifueWFrDQuNeS4pCDmr40zxgo05a+5OOWPqiDpspzmtLvnlJ/pspzonoPon7nnjrDotKfmsLTkuqfnpLznm5LmtbfEJ7C0xX/lAeY6ICczODjFEOgB2sQTN8YT6AHOOiAn6Ieq6JClxRboAcU6ICfljoLllYbphY3pgIHJMuQBwjogJ/IAwcZE5bqXPicKfSk7Cjwv5gHLPgo="},{default:n(()=>[d]),_:1}),o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2FyZAogICAgOmltZy11cmw9InN0YXRlLmltZ1VybCLGHHRpdGxlyBrFDccZcHJpY8kZxQ3HGXZpcFDMHMgQxx9zaG9wRGVzY8gfyBDHH2RlbGl2ZXJ5yB/IEMs+TmFtyV3IEMQf5ADaICDpAOkgI3Byb2xpc3TGGCAgPHZpZXcgY2xhc3M9InNlYXJjaF/HI19hdHRyIsgpICA8c3Bhbsgrd29yZCI+5rS76bKcPC/EGt0p56S855uS3ynEKeWbveS6p84pPC/kAKXGDjwv7QG0L+gBtT4KzBo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CmNvbnN0IOUBPSA9ySUoewogIOYB+DrFfCcvL2ltZzEwLjM2MGJ1eWltZy5jb20vbjIvczI0MHgyNDBfamZzL3QxLzIxMDg5MC8yMi80NzI4LzE2MzgyOS82MTYzYTU5MEViN2M2ZjRiNS82MzkwNTI2ZDQ5NzkxY2I5LmpwZyFxNzDECCcsCiAg5QJdOiAn5rS76J+544CR5rmW5aGY54WZ6ZuoIOmYs+a+hMQTpKfpl7jon7nlhaw0LjXkuKQg5q+NM8YKNOWvuTjlj6og6bKc5rS755Sf6bKc6J6D6J+5546w6LSn5rC05Lqn5gGj5rW3xCewtMV/5QLDOiAnMzg4xRDoArfEEzfGE+gCqzogJ+iHquiQpcUW6AKiOiAn5Y6C5ZWG6YWN6YCByTLkAp86ICfyAMHGROW6lz4nCn0pOwo8L+YBy+QB1HR5bGU+Ci7zAqYg5AGrbWFyZ2luOiAzcHggMCAxcHg7CiAgaGVpZ2h0OiAxNcYQb3ZlcmZsb3c6IGhpZGRlbjsKfdZSPiDlAp3EWWZsb2F0OiBsZWZ0xENwYWRkaW5nOiAwIMdVYm9yZGVyLXJhZGl1czrIe2ZvbnQtc2l6ZTogMTD2AI5saW5lLdAVY29sb3I6ICM5OTnFXWFja2dyb3VuZC3IGmYyZjJmN8Qd5gD0LXLGQsVBfeQBNOYBKw=="},{default:n(()=>[m]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2FyZAogICAgOmltZy11cmw9InN0YXRlLmltZ1VybCLGHHRpdGxlyBrFDccZcHJpY8kZxQ3HGXZpcFDMHMgQxx9zaG9wRGVzY8gfyBDHH2RlbGl2ZXJ5yB/IEMs+TmFtyV3IEMQf5ADaICDpAOkgI8QdLXRhZ8YZICA8dmlldz7oh6rlrprkuYnlupfpk7rku4vnu408L8UcxkIvyEPRUuUA6MlPc3Bhbj7or6Lku7c8L8UN30Ajb3JpZ2nHJyAgPGltZ8cLICBjbGFzcz0idGFn5gDrxAFzcmM9Imh0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS9qZHBob3RvL3M1OHgyOF9qZnMvdDk0NTEvMzU5LzQxNTYyMjY0OS8xNTMxOC9iMDk0M2U1ZC81OWE3ODQ5NU4zYmQyYTlmOC5wbst2YWx0PSLIDy/0ANQ8L+gCQT4KzBo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CmNvbnN0IOUBySA9ySUoewogIOYChDrFfCfmAPww7wD8bjIvczI0MHgyNDDmAPkxLzIxMDg5MC8yMi80NzI4LzE2MzgyOS82MTYzYTU5MEViN2M2ZjRiNS82MzkwNTI2ZDQ5NzkxY2I5LmpwZyFxNzDECCcsCiAg5QLpOiAn5rS76J+544CR5rmW5aGY54WZ6ZuoIOmYs+a+hMQTpKfpl7jon7nlhaw0LjXkuKQg5q+NM8YKNOWvuTjlj6og6bKc5rS755Sf6bKc6J6D6J+5546w6LSn5rC05Lqn56S855uS5rW3xCewtMV/5QJnOiAnMzg4xRDoA0PEEzfGE+gDNzogJ+iHquiQpcUW6AMuOiAn5Y6C5ZWG6YWN6YCByTLkAys6ICfyAMHGROW6lz4nCn0pOwo8L+YBy+QB1HR5bGU+Ci50YWcg5AGbZGlzcGxheTogaW5saW5lLWJsb2NrO+QApmVydGljYWwtYWxpZ246IG1pZGRsZcQabWFyZ2luLXJpZ2h0OiA1cHjLFWxlZnQ6IDLGFGhlxiMxNMQQfeQAh8Z+"},{default:n(()=>[b]),_:1}),y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2FyZAogICAgOmltZy11cmw9InN0YXRlLmltZ1VybCLGHHRpdGxlyBrFDccZcHJpY8kZxQ3HGXZpcFDMHMgQxx9zaG9wRGVzY8gfyBDHH2RlbGl2ZXJ5yB/IEMs+TmFtyV3IEMQf5ADaICDpAOkgI2Zvb3RlcsYXICA8dmlldyBjbGFzcz0iY3VzdG9taXplIj7oh6rlrprkuYnlj7PkuIvop5LlhoXlrrk8L8Qxx1Uv7QE/L+gBQD4KzBo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CmNvbnN0IOUAyCA9ySUoewogIOYBgzrFfCcvL2ltZzEwLjM2MGJ1eWltZy5jb20vbjIvczI0MHgyNDBfamZzL3QxLzIxMDg5MC8yMi80NzI4LzE2MzgyOS82MTYzYTU5MEViN2M2ZjRiNS82MzkwNTI2ZDQ5NzkxY2I5LmpwZyFxNzDECCcsCiAg5QHoOiAn5rS76J+544CR5rmW5aGY54WZ6ZuoIOmYs+a+hMQTpKfpl7jon7nlhaw0LjXkuKQg5q+NM8YKNOWvuTjlj6og6bKc5rS755Sf6bKc6J6D6J+5546w6LSn5rC05Lqn56S855uS5rW3xCewtMV/5QJOOiAnMzg4xRDoAkLEEzfGE+gCNjogJ+iHquiQpcUW6AItOiAn5Y6C5ZWG6YWN6YCByTLkAio6ICfyAMHGROW6lz4nCn0pOwo8L+YBy+QB1HR5bGU+Ci7pAjIg5AGhZm9udC1zaXplOiAxMnB4Owp9xDTGKw=="},{default:n(()=>[v]),_:1}),Z])}}});export{x as default,Y as excerpt,f as frontmatter};
