import{d as e,r as h,b as j,k as n,w as c,aq as t,e as a,o as r,l as s}from"./style_icon.js";const o={class:"markdown-body"},g=t(`<h1>Layout 布局</h1><h3>介绍</h3><p>用于快速进行布局</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Row</span>, <span class="hljs-title class_">Col</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Row</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Col</span>);
</code></pre><h3>基础用法</h3><p>Layout 组件提供 24 列栅格，通过在 Col 上添加 span 属性设置列所占的宽度百分比。 offset 属性可以设置列的偏移宽度，计算方式与 span 相同。</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"24"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:24"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:12"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:12"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-row"),s(` {
    `),a("span",{class:"hljs-attribute"},"overflow"),s(`: hidden;
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-row"),a("span",{class:"hljs-selector-pseudo"},":not"),s("("),a("span",{class:"hljs-selector-pseudo"},":last-child"),s(") "),a("span",{class:"hljs-selector-class"},".cub-col"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"40px"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ff8881"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content-light"),s(` {
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ffc7c4"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content-height"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),m=a("h3",null,"分栏间隔",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-row"),s(` {
    `),a("span",{class:"hljs-attribute"},"overflow"),s(`: hidden;
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-row"),a("span",{class:"hljs-selector-pseudo"},":not"),s("("),a("span",{class:"hljs-selector-pseudo"},":last-child"),s(") "),a("span",{class:"hljs-selector-class"},".cub-col"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"40px"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ff8881"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content-light"),s(` {
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ffc7c4"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content-height"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),d=a("h3",null,"Flex 布局",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"wrap"),s("="),a("span",{class:"hljs-string"},'"nowrap"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"end"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-around"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-evenly"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-row"),s(` {
    `),a("span",{class:"hljs-attribute"},"overflow"),s(`: hidden;
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-row"),a("span",{class:"hljs-selector-pseudo"},":not"),s("("),a("span",{class:"hljs-selector-pseudo"},":last-child"),s(") "),a("span",{class:"hljs-selector-class"},".cub-col"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"40px"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ff8881"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content-light"),s(` {
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ffc7c4"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".flex-content-height"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),w=t('<h2>API</h2><h3>Row Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>布局方式，可选值为 <code class="">flex</code></td><td>string</td><td><code class="">-</code></td></tr><tr><td>gutter</td><td>列元素之间的间距（单位为 <code class="">px</code>）</td><td>string | number</td><td><code class="">-</code></td></tr><tr><td>justify</td><td><code class="">Flex</code> 主轴对齐方式，可选值为 <code class="">start</code> <code class="">end</code> <code class="">center</code> <code class="">space-around</code> <code class="">space-between</code> <code class="">space-evenly</code></td><td>string</td><td><code class="">start</code></td></tr><tr><td>align</td><td><code class="">Flex</code> 交叉轴对齐方式，可选值为 <code class="">flex-start</code> <code class="">center</code> <code class="">flex-end</code></td><td>string</td><td><code class="">flex-start</code></td></tr><tr><td>flex-wrap</td><td><code class="">Flex</code> 是否换行，可选值为 <code class="">nowrap</code> <code class="">wrap</code> <code class="">reverse</code></td><td>string</td><td><code class="">nowrap</code></td></tr></tbody></table><h3>Col Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>span</td><td>列元素宽度（共分为 24 份，例如设置一行 3 个，那么 <code class="">span</code> 值为 8）</td><td>string | number</td><td><code class="">24</code></td></tr><tr><td>offset</td><td>列元素偏移距离</td><td>string | number</td><td><code class="">0</code></td></tr></tbody></table><h3>Row Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><code class="">event: MouseEvent</code></td></tr></tbody></table><h3>Col Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><code class="">event: MouseEvent</code></td></tr></tbody></table>',9),y={},W="",Z=e({__name:"doc.taro",setup(x,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(f,v)=>{const l=h("demo-block");return r(),j("div",o,[g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93xAzHDmNvbCA6c3Bhbj0iMjQixhkgIDx2aWV3IGNsYXNzPSJmbGV4LWNvbnRlbnQiPsQsOjI0PC/EI8dJL8dKxWTFDcdl3nExMt9xynExMtlx31jXWCDMDS1saWdo32v/ANzwAIQ4/wCD6gDbONlv31bWVvoA2d9p32n/AL//AS7/AS4232/KbzbZb99W1lb6AS7fad9p/wC/31bfVt9W9wGEPC/qBAs8c3R5bOUEEy7HICB7xT1vdmVyZmxvdzogaGlkZGVuO8UWbWFyZ2luLWJvdHRvbTogMTVweMQZfctAOm5vdCg6bGFzdC1jaGlsZCnGGuQAz8Za3ETtAZLGL2xpbmUtaGXkAZE6IDQwxi0gIGNvbG9yOiAjZmZmxhF0ZXh0LWFsaWduOiBjZW50ZXLGGGJvcmRlci1yYWRpdXM6IDbIQWJhY2tncm91bmTFRjg4ODH1AIfmAgznAI3PNWM3YzTWNeYAscc2xg06IDXnAL59Cjwv5wF4"},{default:c(()=>[i]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93IDpndXR0ZXI9IjEwIsQZxxtjb2wgOnNwYW49IjjHGCAgPHZpZXcgY2xhc3M9ImZsZXgtY29udGVudCI+xCs6ODwvxCLHRy/HSN9W2lYgzA0tbGlnaN9p32nZad9WyA1yb3c+Cjwv6gFHPHN0eWzlAU8uxyAge8U9b3ZlcmZsb3c6IGhpZGRlbjvFFm1hcmdpbi1ib3R0b206IDE1cHjEGX3LQDpub3QoOmxhc3QtY2hpbGQpxhrkAM/GWtxE7QE8xi9saW5lLWhl5AE7OiA0MMYtICBjb2xvcjogI2ZmZsYRdGV4dC1hbGlnbjogY2VudGVyxhhib3JkZXItcmFkaXVzOiA2yEFiYWNrZ3JvdW5kxUY4ODgx9QCH5gG25wCNzzVjN2M01jXmALHHNsYNOiA15wC+fQo8L+cBeA=="},{default:c(()=>[b]),_:1}),d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93IHR5cGU9ImZsZXgiIHdyYXA9Im5vxAgixCbHKGNvbCA6c3Bhbj0iNscYICA8dmlldyBjbGFzc8ZALWNvbnRlbnQiPsQrOjY8L8Qix0cvx0jfVtpWIMwNLWxpZ2jfad9p2WnfVsgNcm/FHPUBSGp1c3RpZnk9ImNlbnRlcv8BS/8AjP8A4t9W/wFL/wFL32nfad9W/wFL7wFLZW5k/wFI/wCJ/wDf31b/AUj/AUjfad9p31b/AUjvAUhzcGFjZS1iZXR3ZWVu/wFS/wCT/wDp31b/AVL/AVLfad9p31b/AVL1AVJhcm91/wKj/wCS/wCS31bWVv8BUd9p32n/AL//AVH/AVEtZXZlbmx5/wFR/wCS/wDo31b/AVH/AVHfad9p31buAVE8L+oH2zxzdHls5QfjLscgIHvFPW92ZXJmbG93OiBoaWRkZW47xRZtYXJnaW4tYm90dG9tOiAxNXB4xBl9y0A6bm90KDpsYXN0LWNoaWxkKcYa5ADPxlrcRO0BPMYvbGluZS1oZeQBOzogNDDGLSAgY29sb3I6ICNmZmbGEXRleHQtYWxpZ246IOYHScYYYm9yZGVyLXJhZGl1czogNshBYmFja2flA4bFRjg4ODH1AIfmAbbnAI3PNWM3YzTWNeYAscc2xg06IDXnAL59Cjwv5wF4"},{default:c(()=>[u]),_:1}),w])}}});export{Z as default,W as excerpt,y as frontmatter};
