import{d as p,r as i,b as h,k as l,w as n,aq as c,e as a,o as j,l as s}from"./style_icon.js";const r={class:"markdown-body"},d=c(`<h1>FixedNav 悬浮导航</h1><h3>介绍</h3><p>悬浮收起体验交互，用于快捷导航</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FixedNav</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FixedNav</span>);
</code></pre><h3>基础用法</h3>`,6),g=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},":position"),s("="),a("span",{class:"hljs-string"},`"{ top: '70px' }"`),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":nav-list"),s("="),a("span",{class:"hljs-string"},'"navList"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'首页'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'分类'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'购物车'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'我的'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),o=a("h3",null,"左侧效果",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"left"'),s(),a("span",{class:"hljs-attr"},":position"),s("="),a("span",{class:"hljs-string"},`"{ top: '140px' }"`),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":nav-list"),s("="),a("span",{class:"hljs-string"},'"navList"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'首页'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'分类'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'购物车'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'我的'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"取消背景遮罩",-1),f=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},":overlay"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},":position"),s("="),a("span",{class:"hljs-string"},`"{ top: '210px' }"`),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":nav-list"),s("="),a("span",{class:"hljs-string"},'"navList"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'首页'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'分类'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'购物车'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'我的'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"配合 Drag 支持拖拽",-1),u=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-drag"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"y"'),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ right: '0px', bottom: '240px' }"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},"un-active-text"),s("="),a("span",{class:"hljs-string"},'"支持拖拽"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":nav-list"),s("="),a("span",{class:"hljs-string"},'"navList"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-drag"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'首页'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'分类'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'购物车'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'我的'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=a("h3",null,"自定义使用",-1),y=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},":position"),s("="),a("span",{class:"hljs-string"},`"{ top: '280px' }"`),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"left"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"myActive"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:list"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ul"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-fixed-nav__list"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"li"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-fixed-nav__list-item"'),s(">")]),s("1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"li"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"li"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-fixed-nav__list-item"'),s(">")]),s("2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"li"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"li"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-fixed-nav__list-item"'),s(">")]),s("3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"li"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"li"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-fixed-nav__list-item"'),s(">")]),s("4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"li"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"li"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-fixed-nav__list-item"'),s(">")]),s("5"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"li"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:btn"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Retweet"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"text"'),s(">")]),s("{{ myActive ? '自定义开' : '自定义关' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Retweet"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" myActive = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'首页'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'分类'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'购物车'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'我的'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),M=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">visible</td><td style="text-align:left;">是否打开</td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code class="">false</code></td></tr><tr><td style="text-align:left;">nav-list</td><td style="text-align:left;">悬浮列表内容数据</td><td style="text-align:left;">Array</td><td style="text-align:left;"><code class="">[]</code></td></tr><tr><td style="text-align:left;">active-color</td><td style="text-align:left;">选中按钮文案颜色</td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">#fa2c19 默认集成主题色</code></td></tr><tr><td style="text-align:left;">active-text</td><td style="text-align:left;">收起列表按钮文案</td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">收起导航</code></td></tr><tr><td style="text-align:left;">un-active-text</td><td style="text-align:left;">展开列表按钮文案</td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">快速导航</code></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">导航方向,可选值 <code class="">left</code> <code class="">right</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">right</code></td></tr><tr><td style="text-align:left;">overlay</td><td style="text-align:left;">展开时是否显示遮罩</td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code class="">true</code></td></tr><tr><td style="text-align:left;">position</td><td style="text-align:left;">fixed 垂直位置</td><td style="text-align:left;">object</td><td style="text-align:left;"><code class="">{top: &#39;auto&#39;,bottom: &#39;auto&#39;}</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>selected</td><td>选择之后触发</td><td><code class="">{item:item,$event:Event}</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>btn</td><td>自定义按钮</td></tr><tr><td>list</td><td>自定义展开列表内容</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-fixednav-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-fixednav-font-color</td><td><em>var(--cub-black)</em></td></tr><tr><td>--cub-fixednav-index</td><td><em>201</em></td></tr><tr><td>--cub-fixednav-btn-bg</td><td><em>linear-gradient(135deg, var(--cub-primary-color) 0%, var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-fixednav-item-active-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>',11),Z={},w="",T=p({__name:"doc",setup(z,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(N,A)=>{const t=i("demo-block");return j(),h("div",r,[d,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZml4ZWQtbmF2IDpwb3NpdGlvbj0ieyB0b3A6ICc3MHB4JyB9IiB2LW1vZGVsOnZpc2libGU9IscJIiA6bmF2LWxpc3Q9Im5hdkxpc3QiIC8+Cjwvymo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qgx2YgPcQsKGZhbHNlKcgcx27FHMZDKFsKICB7CiAgICBpZDogMSzFC3RleHQ6ICfpppbpobUnxhRpY29uOiAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2ltYWdldG9vbHMvamZzL3QxLzExNzY0Ni8yLzExMTEyLzEyOTcvNWVmODNlOTVFODFkNzdmMDUvZGFmOGUzYjFjODFlM2M5OC5wbmcnCiAgfcR66gCdMu0AneWIhuexu/oAnTL/AJ3kAJ05NDkwLzgvOTU2OC8xNzk46gCcOTY4YzY5YTYvZGQwMjkzMjZmN2Q1MDQyZfcAnDPtAJzotK3nianovabnAJ9udW3pAL/zAKs0/wCrMS8xMzA3MjUvNC8zMTU3LzE3MDTqAKtiOTc2NjQ0Zi9iMzZjNmNmYzFjYzFhOTlk9wCrNO0Aq+aIkeeahP8BR/4AnDQ3NTczLzI5LzE2MDMvMTcyMegAnTRFMTM5M2E2NzgvNWRkZjE2OTVlYzk4OTM3M+kAnQpdKTsKPC/mAvA+Cg=="},{default:n(()=>[g]),_:1}),o,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZml4ZWQtbmF2IHR5cGU9ImxlZnQiIDpwb3NpdGlvbj0ieyB0b3A6ICcxNDBweCcgfSIgdi1tb2RlbDp2aXNpYmxlPSLHCSIgOm5hdi1saXN0PSJuYXZMaXN0IiAvPgo8L8p3PHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CmNvbnN0IMdmID3ELChmYWxzZSnIHMduxRzGQyhbCiAgewogICAgaWQ6IDEsxQt0ZXh0OiAn6aaW6aG1J8YUaWNvbjogJ2h0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS9pbWFnZXRvb2xzL2pmcy90MS8xMTc2NDYvMi8xMTExMi8xMjk3LzVlZjgzZTk1RTgxZDc3ZjA1L2RhZjhlM2IxYzgxZTNjOTgucG5nJwogIH3EeuoAnTLtAJ3liIbnsbv6AJ0y/wCd5ACdOTQ5MC84Lzk1NjgvMTc5OOoAnDk2OGM2OWE2L2RkMDI5MzI2ZjdkNTA0MmX3AJwz7QCc6LSt54mp6L2m5wCfbnVt6QC/8wCrNP8AqzEvMTMwNzI1LzQvMzE1Ny8xNzA06gCrYjk3NjY0NGYvYjM2YzZjZmMxY2MxYTk5ZPcAqzTtAKvmiJHnmoT/AUf+AJw0NzU3My8yOS8xNjAzLzE3MjHoAJ00RTEzOTNhNjc4LzVkZGYxNjk1ZWM5ODkzNzPpAJ0KXSk7Cjwv5gLwPgo="},{default:n(()=>[m]),_:1}),b,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZml4ZWQtbmF2IDpvdmVybGF5PSJmYWxzZSIgOnBvc2l0aW9uPSJ7IHRvcDogJzIxMHB4JyB9IiB2LW1vZGVsOnZpc2libGU9IscJIiA6bmF2LWxpc3Q9Im5hdkxpc3QiIC8+Cjwvynw8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qgx2YgPcQsKOUAqSnIHMduxRzGQyhbCiAgewogICAgaWQ6IDEsxQt0ZXh0OiAn6aaW6aG1J8YUaWNvbjogJ2h0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS9pbWFnZXRvb2xzL2pmcy90MS8xMTc2NDYvMi8xMTExMi8xMjk3LzVlZjgzZTk1RTgxZDc3ZjA1L2RhZjhlM2IxYzgxZTNjOTgucG5nJwogIH3EeuoAnTLtAJ3liIbnsbv6AJ0y/wCd5ACdOTQ5MC84Lzk1NjgvMTc5OOoAnDk2OGM2OWE2L2RkMDI5MzI2ZjdkNTA0MmX3AJwz7QCc6LSt54mp6L2m5wCfbnVt6QC/8wCrNP8AqzEvMTMwNzI1LzQvMzE1Ny8xNzA06gCrYjk3NjY0NGYvYjM2YzZjZmMxY2MxYTk5ZPcAqzTtAKvmiJHnmoT/AUf+AJw0NzU3My8yOS8xNjAzLzE3MjHoAJ00RTEzOTNhNjc4LzVkZGYxNjk1ZWM5ODkzNzPpAJ0KXSk7Cjwv5gLwPgo="},{default:n(()=>[f]),_:1}),v,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZHJhZyBkaXJlY3Rpb249InkiIDpzdHlsZT0ieyByaWdodDogJzBweCcsIGJvdHRvbTogJzI0xBEgfSLERsdIZml4ZWQtbmF2IHVuLWFjdGl2ZS10ZXh0PSLmlK/mjIHmi5bmi70iIHYtbW9kZWw6dmlzaWLEZscJIiA6bmF2LWxpc3Q9Im5hdkxpc3QiIC/EYjwv6ACpPgo8L+oAwjxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlZiwgcmXmAIUgfSBmcm9tICd2dWUnOwpjb25zdCDHdCA9xCwoZmFsc2UpyBzHfMUcxkMoWwogIHvlAOtpZDogMSzFC+QA3TogJ+mmlumhtSfGFGljb246ICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTE3NjQ2LzIvMTExMTIvMTI5Ny81ZWY4M2U5NUU4MWQ3N2YwNS9kYWY4ZTNiMWM4MWUzYzk4LnBuZycKICB9xHrqAJ0y7QCd5YiG57G7+gCdMv8AneQAnTk0OTAvOC85NTY4LzE3OTjqAJw5NjhjNjlhNi9kZDAyOTMyNmY3ZDUwNDJl9wCcM+0AnOi0reeJqei9pucAn251bekAv/MAqzT/AKsxLzEzMDcyNS80LzMxNTcvMTcwNOoAq2I5NzY2NDRmL2IzNmM2Y2ZjMWNjMWE5OWT3AKs07QCr5oiR55qE/wFH/gCcNDc1NzMvMjkvMTYwMy8xNzIx6ACdNEUxMzkzYTY3OC81ZGRmMTY5NWVjOTg5Mzcz6QCdCl0pOwo8L+YC8D4K"},{default:n(()=>[u]),_:1}),x,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZml4ZWQtbmF2IDpwb3NpdGlvbj0ieyB0b3A6ICcyODBweCcgfSIgdHlwZT0ibGVmdCIgdi1tb2RlbDp2aXNpYmxlPSJteUFjdGl2ZSLEViAgyWUgdi1zbG90Omxpc3TGGyAgPHVsIGNsYXNzPSLNf19fxCbHQsUpbGnbKS1pdGVtIj4xPC9sad800DQy3zTUNDPfNNQ0NN801DQ1zDQ8L3Vsxgw8L+wBuPMBYmJ0bsk2UmV0d2VldCBjb2xvcj0iI2ZmZiIgL8kfc3BhbugAiXRleHQiPnt7IOgBwiA/ICfoh6rlrprkuYnlvIAnIDrMEYWzJyB9fTwvxET0AJo8L+0A2z4KzB88c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYsIHJlYeYAgX0gZnJvbSAndnVlJzvKJegA1cgfQGN1YmZlL2ljb25zLcYsxAt06gDKPcRZKGZhbHNlKcgdbmF2TGlzdMUcxnAoWwogIHvlAMtpZDogMSzFC+QBGDogJ+mmlumhtSfGFMRrOiAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2ltYWdldG9vbHMvamZzL3QxLzExNzY0Ni8yLzExMTEyLzEyOTcvNWVmODNlOTVFODFkNzdmMDUvZGFmOGUzYjFjODFlM2M5OC5wbmcnCiAgfcR66gCdMu0AneWIhuexu/oAnTL/AJ3kAJ05NDkwLzgvOTU2OC8xNzk46gCcOTY4YzY5YTYvZGQwMjkzMjZmN2Q1MDQyZfcAnDPtAJzotK3nianovabnAJ9udW3pAL/zAKs0/wCrMS8xMzA3MjUvNC8zMTU3LzE3MDTqAKtiOTc2NjQ0Zi9iMzZjNmNmYzFjYzFhOTlk9wCrNO0Aq+aIkeeahP8BR/4AnDQ3NTczLzI5LzE2MDMvMTcyMegAnTRFMTM5M2E2NzgvNWRkZjE2OTVlYzk4OTM3M+kAnQpdKTsKPC/mAx0+Cg=="},{default:n(()=>[y]),_:1}),M])}}});export{T as default,w as excerpt,Z as frontmatter};
