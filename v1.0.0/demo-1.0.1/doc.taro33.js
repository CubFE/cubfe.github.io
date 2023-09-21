import{d as p,r as h,b as j,k as n,w as t,aq as c,e as a,o as g,l as s}from"./style_icon.js";const d={class:"markdown-body"},r=c(`<h1>Grid 宫格</h1><h3>介绍</h3><p>用于分隔成等宽区块进行页面导航。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Grid</span>, <span class="hljs-title class_">GridItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Grid</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">GridItem</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),o=a("h3",null,"自定义列数",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(),a("span",{class:"hljs-attr"},":column-num"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"正方形格子",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(),a("span",{class:"hljs-attr"},":column-num"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"square"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"格子间距",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"内容翻转",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(),a("span",{class:"hljs-attr"},"reverse"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"内容横向",-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"图标颜色/大小",-1),D=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(),a("span",{class:"hljs-attr"},":column-num"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"40px"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#478EF2"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Dongdong"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),P=a("h3",null,"自定义内容",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid"),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-grid-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"i in 4"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"i"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
          `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"'),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-grid"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z=c('<h2>API</h2><h3>Grid Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>column-num</td><td>列数</td><td>number | string</td><td><code class="">4</code></td></tr><tr><td>border</td><td>是否显示边框</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>gutter</td><td>格子之间的间距，默认单位为 <code class="">px</code></td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>center</td><td>是否将格子内容居中显示</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>square</td><td>是否将格子固定为正方形</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>reverse</td><td>内容翻转</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>direction</td><td>格子内容排列的方向，可选值为 <code class="">horizontal</code></td><td>string</td><td><code class="">vertical</code></td></tr><tr><td>clickable</td><td>是否开启格子点击反馈</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>GridItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>文字</td><td>string</td><td>-</td></tr></tbody></table><h3>GridItem Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义所有内容</td></tr><tr><td>text</td><td>自定义文字</td></tr></tbody></table><h3>GridItem Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击格子时触发</td><td>event: Event</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-grid-border-color</td><td><em>#f5f6f7</em></td></tr><tr><td>--cub-grid-item-content-padding</td><td><em>16px 8px</em></td></tr><tr><td>--cub-grid-item-content-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-grid-item-text-margin</td><td><em>8px</em></td></tr><tr><td>--cub-grid-item-text-color</td><td><em>var(--cub-title-color2)</em></td></tr><tr><td>--cub-grid-item-text-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr></tbody></table>',13),L={},R="",X=p({__name:"doc.taro",setup(C,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(W,G)=>{const l=h("demo-block");return g(),j("div",d,[r,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZ3JpZMQNyw8taXRlbSB0ZXh0PSLmloflrZciPjxEb25nZG9uZyAvPjwvzSrfPt8+3z7fPt8+3z7fPt8+3z7fPt8+3z7fPt8+xD7KEz4KPC/qAhc8c2NyaXB0IGxhbmc9InRzIsQtaW1wb3J0IHsgyVR9IGZyb20gJ0BjdWJmZS9pY29ucy12dWUtdGFybyc7CiAgZXjFNGRlZmF1bHQge+UAsmNvbXBvbmVudHM6zU4KICB9Owo8L8Z9Pgo="},{default:t(()=>[i]),_:1}),o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZ3JpZCA6Y29sdW1uLW51bT0iMyLEHcsfLWl0ZW0gdGV4dD0i5paH5a2XIj48RG9uZ2RvbmcgLz48L80q3z7fPt8+3z7EPsoTPgo8L+oA8TxzY3JpcHQgbGFuZz0idHPlAOdpbXBvcnQgeyDJVH0gZnJvbSAnQGN1YmZlL2ljb25zLXZ1ZS10YXJvJzsKICBleMU0ZGVmYXVsdCB75QCyY29tcG9uZW50czrNTgogIH07Cjwvxn0+Cg=="},{default:t(()=>[m]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZ3JpZCA6Y29sdW1uLW51bT0iMyIgc3F1YXLFJMsmLWl0ZW0gdGV4dD0i5paH5a2XIj48RG9uZ2RvbmcgLz48L80q3z7fPt8+3z7EPsoTPgo8L+oA+DxzY3JpcHQgbGFuZz0idHMixC1pbXBvcnQgeyDJVH0gZnJvbSAnQGN1YmZlL2ljb25zLXZ1ZS10YXJvJzsKICBleMU0ZGVmYXVsdCB75QCyY29tcG9uZW50czrNTgogIH07Cjwvxn0+Cg=="},{default:t(()=>[b]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZ3JpZCA6Z3V0dGVyPSIxMCLEGsscLWl0ZW0gdGV4dD0i5paH5a2XIj48RG9uZ2RvbmcgLz48L80q3z7fPt8+3z7fPt8+3z7fPt8+3z7fPt8+3z7fPsQ+yhM+Cjwv6gIkPHNjcmlwdCBsYW5nPSJ0c+UCHWltcG9ydCB7IMlUfSBmcm9tICdAY3ViZmUvaWNvbnMtdnVlLXRhcm8nOwogIGV4xTRkZWZhdWx0IHvlALJjb21wb25lbnRzOs1OCiAgfTsKPC/GfT4K"},{default:t(()=>[v]),_:1}),f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZ3JpZCByZXZlcnPFFcsXLWl0ZW0gdGV4dD0i5paH5a2XIj48RG9uZ2RvbmcgLz48L80q3z7fPt8+3z7fPt8+xD7KEz4KPC/qASc8c2NyaXB0IGxhbmc9InRzIsQtaW1wb3J0IHsgyVR9IGZyb20gJ0BjdWJmZS9pY29ucy12dWUtdGFybyc7CiAgZXjFNGRlZmF1bHQge+UAsmNvbXBvbmVudHM6zU4KICB9Owo8L8Z9Pgo="},{default:t(()=>[x]),_:1}),Z,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZ3JpZCBkaXJlY3Rpb249Imhvcml6b250YWwixCTLJi1pdGVtIHRleHQ9IuaWh+WtlyI+PERvbmdkb25nIC8+PC/NKt8+3z7fPt8+3z7fPsQ+yhM+Cjwv6gE2PHNjcmlwdCBsYW5nPSJ0c+UBJWltcG9ydCB7IMlUfSBmcm9tICdAY3ViZmUvaWNvbnMtdnVlLXRhcm8nOwogIGV4xTRkZWZhdWx0IHvlALJjb21wb25lbnRzOs1OCiAgfTsKPC/GfT4K"},{default:t(()=>[_]),_:1}),I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZ3JpZCA6Y29sdW1uLW51bT0iMyLEHcsfLWl0ZW0gdGV4dD0i5paH5a2XIj48RG9uZ2RvbmcgLz48L80q3z7EPsUiICDKRXNpemU9IjQwcHgiIGNvbG9yPSIjNDc4RUYyIiAvx1HfZv8ApNI+yhM+Cjwv6gEZPHNjcmlwdCBsYW5nPSJ0c+UAr2ltcG9ydCB7IMlUfSBmcm9tICdAY3ViZmUvaWNvbnMtdnVlLXRhcm8nOwogIGV4xTRkZWZhdWx0IHvlALJjb21wb25lbnRzOs1OCiAgfTsKPC/GfT4K"},{default:t(()=>[D]),_:1}),P,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZ3JpZCA6Ym9yZGVyPSJmYWxzZSLEHcsfLWl0ZW0gdi1mb3I9ImkgaW4gNCIgOmtleT0iaccsxy5hdmF0YXIgc2l6ZT0ibGFyZ8hMxSJpbWfJDSAgc3JjPSJodHRwczovL2ltZzEyLjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTQzNzAyLzMxLzE2NjU0LzExNjc5NC81ZmM2ZjU0MUVkZWJmOGE1Ny80MTM4MDk3NzQ4ODg5OTg3LnBuZyLJfC/pALQv6gC1xhTGEukA9cQVyhM+Cjwv6gFA"},{default:t(()=>[w]),_:1}),z])}}});export{X as default,R as excerpt,L as frontmatter};
