import{d as e,r as h,b as j,k as n,w as c,aq as t,e as a,o as r,l as s}from"./style_icon.js";const o={class:"markdown-body"},g=t(`<h1>Layout</h1><h3>Intro</h3><p>For quick layout</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Row</span>, <span class="hljs-title class_">Col</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Row</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Col</span>);
</code></pre><h3>Basic Usage</h3><p>The Layout component provides a 24-column grid, by adding the span attribute on Col to set the percentage of the width of the column. The offset attribute can set the offset width of the column, and the calculation method is the same as span.</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"24"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:24"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:12"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:12"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
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
`)])],-1),d=a("h3",null,"Column spacing",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
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
`)])],-1),u=a("h3",null,"Flex layout",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"wrap"),s("="),a("span",{class:"hljs-string"},'"nowrap"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"end"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-around"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-evenly"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content flex-content-light"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex-content"'),s(">")]),s("span:6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
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
`)])],-1),f=t('<h2>API</h2><h3>Row Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>layout method, optional value is <code class="">flex</code></td><td>string</td><td><code class="">-</code></td></tr><tr><td>gutter</td><td>spacing between column elements (<code class="">px</code>)</td><td>string | number</td><td><code class="">-</code></td></tr><tr><td>justify</td><td>Flex main axis alignment, optional values are <code class="">start</code> <code class="">end</code> <code class="">center</code> <code class="">space-around</code> <code class="">space-between</code> <code class="">space-evenly</code></td><td>string</td><td><code class="">start</code></td></tr><tr><td>align</td><td>Flex cross axis alignment, optional values are <code class="">flex-start</code> <code class="">center</code> <code class="">flex-end</code></td><td>string</td><td><code class="">flex-start</code></td></tr><tr><td>flex-wrap</td><td>Whether flex wraps, optional values are <code class="">nowrap</code> <code class="">wrap</code> <code class="">reverse</code></td><td>string</td><td><code class="">nowrap</code></td></tr></tbody></table><h3>Col Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>span</td><td>column element width (divided into 24 parts in total, for example, if there are 3 in a row, then the span value is 8)</td><td>string | number</td><td><code class="">24</code></td></tr><tr><td>offset</td><td>column element offset distance</td><td>string | number</td><td><code class="">0</code></td></tr></tbody></table><h3>Row Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>callback parameter</th></tr></thead><tbody><tr><td>click</td><td>Triggered when clicked</td><td><code class="">event: MouseEvent</code></td></tr></tbody></table><h3>Col Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>callback parameter</th></tr></thead><tbody><tr><td>click</td><td>Triggered when clicked</td><td><code class="">event: MouseEvent</code></td></tr></tbody></table>',9),A={},G="",I=e({__name:"doc.en-US",setup(x,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(v,w)=>{const l=h("demo-block");return r(),j("div",o,[g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93xAzHDmNvbCA6c3Bhbj0iMjQixhkgIDxkaXYgY2xhc3M9ImZsZXgtY29udGVudCI+xCs6MjQ8L2RpdsdHL8dIxWLFDcdj3m8xMt9vyW8xMthv31bWViDMDS1saWdo32n/ANjvAII4/wCB6QDXONht31TVVPoA1d9n32f/ALv/ASj8ASg2323JbTbYbd9U1VT6ASjfZ99n/wC731TfVN9U8gF8PC/qA/c8c3R5bOUD/y7HICB7xT1vdmVyZmxvdzogaGlkZGVuO8UWbWFyZ2luLWJvdHRvbTogMTVweMQZfctAOm5vdCg6bGFzdC1jaGlsZCnGGuQAzcZa3ETtAY3GL2xpbmUtaGXkAYw6IDQwxi0gIGNvbG9yOiAjZmZmxhF0ZXh0LWFsaWduOiBjZW50ZXLGGGJvcmRlci1yYWRpdXM6IDbIQWJhY2tncm91bmTFRjg4ODH1AIfmAgfnAI3PNWM3YzTWNeYAscc2xg06IDXnAL59Cjwv5wF4"},{default:c(()=>[i]),_:1}),d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93IDpndXR0ZXI9IjEwIsQZxxtjb2wgOnNwYW49IjjHGCAgPGRpdiBjbGFzcz0iZmxleC1jb250ZW50Ij7EKjo4PC9kaXbHRS/HRt9U2VQgzA0tbGlnaN9n32fXZ99Uxw1yb3c+Cjwv6gFBPHN0eWzlAUkuxyAge8U9b3ZlcmZsb3c6IGhpZGRlbjvFFm1hcmdpbi1ib3R0b206IDE1cHjEGX3LQDpub3QoOmxhc3QtY2hpbGQpxhrkAM3GWtxE7QE5xi9saW5lLWhl5AE4OiA0MMYtICBjb2xvcjogI2ZmZsYRdGV4dC1hbGlnbjogY2VudGVyxhhib3JkZXItcmFkaXVzOiA2yEFiYWNrZ3JvdW5kxUY4ODgx9QCH5gGz5wCNzzVjN2M01jXmALHHNsYNOiA15wC+fQo8L+cBeA=="},{default:c(()=>[m]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93IHR5cGU9ImZsZXgiIHdyYXA9Im5vxAgixCbHKGNvbCA6c3Bhbj0iNscYICA8ZGl2IGNsYXNzxj8tY29udGVudCI+xCo6NjwvZGl2x0Uvx0bfVNlUIMwNLWxpZ2jfZ99n12ffVMcNcm93+QFCanVzdGlmeT0iY2VudGVy/wFF/wCK/wDe31T/AUX/AUXfZ9tn31T/AUXtAUVlbmT/AUL/AIf/ANvfVP8BQv8BQt9n22ffVP8BQu0BQnNwYWNlLWJldHdlZW7/AUz/AJH/AOXfVP8BTP8BTN9n22ffVP8BTPMBTGFyb3X/Apf/AJD/AOTfVP8BS/8BS99n3WffVP8BS/MBS2V2ZW5sef8BS/8AkP8A5N9U/wFL/wFL32fbZ99U7AFLPC/qB7c8c3R5bOUHvy7HICB7xT1vdmVyZmxvdzogaGlkZGVuO8UWbWFyZ2luLWJvdHRvbTogMTVweMQZfctAOm5vdCg6bGFzdC1jaGlsZCnGGuQAzcZa3ETtATnGL2xpbmUtaGXkATg6IDQwxi0gIGNvbG9yOiAjZmZmxhF0ZXh0LWFsaWduOiDmByvGGGJvcmRlci1yYWRpdXM6IDbIQWJhY2tn5QN6xUY4ODgx9QCH5gGz5wCNzzVjN2M01jXmALHHNsYNOiA15wC+fQo8L+cBeA=="},{default:c(()=>[b]),_:1}),f])}}});export{I as default,G as excerpt,A as frontmatter};
