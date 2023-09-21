import{d as p,r as i,b as h,k as l,w as n,aq as e,e as a,o as j,l as s}from"./style_icon.js";const r={class:"markdown-body"},d=e(`<h1>FixedNav</h1><h3>Intro</h3><p>Hover stow experience Interaction for quick navigation</p><h3>Install</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FixedNav</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FixedNav</span>);
</code></pre><h3>Basic Usage</h3>`,6),g=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},":position"),s("="),a("span",{class:"hljs-string"},`"{ top: '70px' }"`),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":nav-list"),s("="),a("span",{class:"hljs-string"},'"navList"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Index'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Category'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Cart'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Me'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),o=a("h3",null,"Left effect",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"left"'),s(),a("span",{class:"hljs-attr"},":position"),s("="),a("span",{class:"hljs-string"},`"{ top: '140px' }"`),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":nav-list"),s("="),a("span",{class:"hljs-string"},'"navList"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Index'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Category'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Cart'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Me'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"Unmask background",-1),f=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},":overlay"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},":position"),s("="),a("span",{class:"hljs-string"},`"{ top: '210px' }"`),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":nav-list"),s("="),a("span",{class:"hljs-string"},'"navList"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Index'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Category'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Cart'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Me'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"Support drag and drop with drag",-1),u=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-drag"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"y"'),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ right: '0px', bottom: '240px' }"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(),a("span",{class:"hljs-attr"},"un-active-text"),s("="),a("span",{class:"hljs-string"},'"drag"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":nav-list"),s("="),a("span",{class:"hljs-string"},'"navList"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-drag"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Index'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Category'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Cart'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Me'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Custom use",-1),x=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"text"'),s(">")]),s("{{ myActive ? 'Open' : 'Close' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-fixed-nav"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" myActive = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" navList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Index'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Category'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Cart'"),s(`,
    `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Me'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'"),s(`
  }
]);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),M=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">visible</td><td style="text-align:left;">visible is</td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code class="">false</code></td></tr><tr><td style="text-align:left;">nav-list</td><td style="text-align:left;">Suspended list content data</td><td style="text-align:left;">Array</td><td style="text-align:left;"><code class="">[]</code></td></tr><tr><td style="text-align:left;">active-color</td><td style="text-align:left;">list active button color</td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">#fa2c19 Inherit theme color</code></td></tr><tr><td style="text-align:left;">active-text</td><td style="text-align:left;">Stow list button copy</td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">Close Nav</code></td></tr><tr><td style="text-align:left;">un-active-text</td><td style="text-align:left;">Expand list button copy</td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">Open Nav </code></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">Navigation direction, optional value <code class="">left</code> <code class="">right</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">right</code></td></tr><tr><td style="text-align:left;">overlay</td><td style="text-align:left;">Whether to display the mask when expanding</td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code class="">true</code></td></tr><tr><td style="text-align:left;">position</td><td style="text-align:left;"><code class="">fixed</code> Vertical position</td><td style="text-align:left;">object</td><td style="text-align:left;"><code class="">{top: &#39;auto&#39;,bottom: &#39;auto&#39;}</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>selected</td><td>Triggered after selection</td><td><code class="">{item:item,$event:Event}</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>btn</td><td>slot custom button</td></tr><tr><td>list</td><td>slot custom expanded list content</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-fixednav-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-fixednav-font-color</td><td><em>var(--cub-black)</em></td></tr><tr><td>--cub-fixednav-index</td><td><em>201</em></td></tr><tr><td>--cub-fixednav-btn-bg</td><td><em>linear-gradient(135deg, var(--cub-primary-color) 0%, var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-fixednav-item-active-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>',11),Z={},I="",w=p({__name:"doc.en-US",setup(N,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(C,z)=>{const t=i("demo-block");return j(),h("div",r,[d,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZml4ZWQtbmF2IDpwb3NpdGlvbj0ieyB0b3A6ICc3MHB4JyB9IiB2LW1vZGVsOnZpc2libGU9IscJIiA6bmF2LWxpc3Q9Im5hdkxpc3QiIC8+Cjwvymo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qgx2YgPcQsKGZhbHNlKcgcx27FHMZDKFsKICB7CiAgICBpZDogMSzFC3RleHQ6ICdJbmRleCfGE2ljb246ICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTE3NjQ2LzIvMTExMTIvMTI5Ny81ZWY4M2U5NUU4MWQ3N2YwNS9kYWY4ZTNiMWM4MWUzYzk4LnBuZycKICB9xHrqAJwy7QCcQ2F0ZWdvcnn6AJ8y/wCf5ACfOTQ5MC84Lzk1NjgvMTc5OOoAnjk2OGM2OWE2L2RkMDI5MzI2ZjdkNTA0MmX3AJ4z7wCecnTnAJpudW3pALzzAKY0/wCmMS8xMzA3MjUvNC8zMTU3LzE3MDTqAKZiOTc2NjQ0Zi9iMzZjNmNmYzFjYzFhOTlk9wCmNO0Apk1l/wE+/gCYNDc1NzMvMjkvMTYwMy8xNzIx6ACZNEUxMzkzYTY3OC81ZGRmMTY5NWVjOTg5Mzcz6QCZCl0pOwo8L+YC6D4K"},{default:n(()=>[g]),_:1}),o,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZml4ZWQtbmF2IHR5cGU9ImxlZnQiIDpwb3NpdGlvbj0ieyB0b3A6ICcxNDBweCcgfSIgdi1tb2RlbDp2aXNpYmxlPSLHCSIgOm5hdi1saXN0PSJuYXZMaXN0IiAvPgo8L8p3PHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CmNvbnN0IMdmID3ELChmYWxzZSnIHMduxRzGQyhbCiAgewogICAgaWQ6IDEsxQt0ZXh0OiAnSW5kZXgnxhNpY29uOiAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2ltYWdldG9vbHMvamZzL3QxLzExNzY0Ni8yLzExMTEyLzEyOTcvNWVmODNlOTVFODFkNzdmMDUvZGFmOGUzYjFjODFlM2M5OC5wbmcnCiAgfcR66gCcMu0AnENhdGVnb3J5+gCfMv8An+QAnzk0OTAvOC85NTY4LzE3OTjqAJ45NjhjNjlhNi9kZDAyOTMyNmY3ZDUwNDJl9wCeM+8AnnJ05wCabnVt6QC88wCmNP8ApjEvMTMwNzI1LzQvMzE1Ny8xNzA06gCmYjk3NjY0NGYvYjM2YzZjZmMxY2MxYTk5ZPcApjTtAKZNZf8BPv4AmDQ3NTczLzI5LzE2MDMvMTcyMegAmTRFMTM5M2E2NzgvNWRkZjE2OTVlYzk4OTM3M+kAmQpdKTsKPC/mAug+Cg=="},{default:n(()=>[m]),_:1}),b,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZml4ZWQtbmF2IDpvdmVybGF5PSJmYWxzZSIgOnBvc2l0aW9uPSJ7IHRvcDogJzIxMHB4JyB9IiB2LW1vZGVsOnZpc2libGU9IscJIiA6bmF2LWxpc3Q9Im5hdkxpc3QiIC8+Cjwvynw8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qgx2YgPcQsKOUAqSnIHMduxRzGQyhbCiAgewogICAgaWQ6IDEsxQt0ZXh0OiAnSW5kZXgnxhNpY29uOiAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2ltYWdldG9vbHMvamZzL3QxLzExNzY0Ni8yLzExMTEyLzEyOTcvNWVmODNlOTVFODFkNzdmMDUvZGFmOGUzYjFjODFlM2M5OC5wbmcnCiAgfcR66gCcMu0AnENhdGVnb3J5+gCfMv8An+QAnzk0OTAvOC85NTY4LzE3OTjqAJ45NjhjNjlhNi9kZDAyOTMyNmY3ZDUwNDJl9wCeM+8AnnJ05wCabnVt6QC88wCmNP8ApjEvMTMwNzI1LzQvMzE1Ny8xNzA06gCmYjk3NjY0NGYvYjM2YzZjZmMxY2MxYTk5ZPcApjTtAKZNZf8BPv4AmDQ3NTczLzI5LzE2MDMvMTcyMegAmTRFMTM5M2E2NzgvNWRkZjE2OTVlYzk4OTM3M+kAmQpdKTsKPC/mAug+Cg=="},{default:n(()=>[f]),_:1}),v,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZHJhZyBkaXJlY3Rpb249InkiIDpzdHlsZT0ieyByaWdodDogJzBweCcsIGJvdHRvbTogJzI0xBEgfSLERsdIZml4ZWQtbmF2IHVuLWFjdGl2ZS10ZXh0PSLEYiIgdi1tb2RlbDp2aXNpYsRexwkiIDpuYXYtbGlzdD0ibmF2TGlzdCIgL8RaPC/oAKE+Cjwv6gC6PHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmLCByZcZ9IH0gZnJvbSAndnVlJzsKY29uc3Qgx3QgPcQsKGZhbHNlKcgcx3zFHMZDKFsKICB75QDjaWQ6IDEsxQvkANU6ICdJbmRleCfGE2ljb246ICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTE3NjQ2LzIvMTExMTIvMTI5Ny81ZWY4M2U5NUU4MWQ3N2YwNS9kYWY4ZTNiMWM4MWUzYzk4LnBuZycKICB9xHrqAJwy7QCcQ2F0ZWdvcnn6AJ8y/wCf5ACfOTQ5MC84Lzk1NjgvMTc5OOoAnjk2OGM2OWE2L2RkMDI5MzI2ZjdkNTA0MmX3AJ4z7wCecnTnAJpudW3pALzzAKY0/wCmMS8xMzA3MjUvNC8zMTU3LzE3MDTqAKZiOTc2NjQ0Zi9iMzZjNmNmYzFjYzFhOTlk9wCmNO0Apk1l/wE+/gCYNDc1NzMvMjkvMTYwMy8xNzIx6ACZNEUxMzkzYTY3OC81ZGRmMTY5NWVjOTg5Mzcz6QCZCl0pOwo8L+YC6D4K"},{default:n(()=>[u]),_:1}),y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZml4ZWQtbmF2IDpwb3NpdGlvbj0ieyB0b3A6ICcyODBweCcgfSIgdHlwZT0ibGVmdCIgdi1tb2RlbDp2aXNpYmxlPSJteUFjdGl2ZSLEViAgyWUgdi1zbG90Omxpc3TGGyAgPHVsIGNsYXNzPSLNf19fxCbHQsUpbGnbKS1pdGVtIj4xPC9sad800DQy3zTUNDPfNNQ0NN801DQ1zDQ8L3Vsxgw8L+wBuPMBYmJ0bsk2UmV0d2VldCBjb2xvcj0iI2ZmZiIgL8kfc3BhbugAiXRleHQiPnt7IOgBwiA/ICdPcGVuJyA6ICdDbG9zZScgfX08L8Q19ACLPC/tAMw+CswfPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmLCByZWHGcn0gZnJvbSAndnVlJzsKY29uc3TqAI89xC0oZmFsc2UpyB1uYXZMaXN0xRzGRChbCiAge+UAn2lkOiAxLMUL5ADdOiAnSW5kZXgnxhNpY29uOiAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2ltYWdldG9vbHMvamZzL3QxLzExNzY0Ni8yLzExMTEyLzEyOTcvNWVmODNlOTVFODFkNzdmMDUvZGFmOGUzYjFjODFlM2M5OC5wbmcnCiAgfcR66gCcMu0AnENhdGVnb3J5+gCfMv8An+QAnzk0OTAvOC85NTY4LzE3OTjqAJ45NjhjNjlhNi9kZDAyOTMyNmY3ZDUwNDJl9wCeM+8AnnJ05wCabnVt6QC88wCmNP8ApjEvMTMwNzI1LzQvMzE1Ny8xNzA06gCmYjk3NjY0NGYvYjM2YzZjZmMxY2MxYTk5ZPcApjTtAKZNZf8BPv4AmDQ3NTczLzI5LzE2MDMvMTcyMegAmTRFMTM5M2E2NzgvNWRkZjE2OTVlYzk4OTM3M+kAmQpdKTsKPC/mAuk+Cg=="},{default:n(()=>[x]),_:1}),M])}}});export{w as default,I as excerpt,Z as frontmatter};
