import{d as p,r as h,b as j,k as t,w as n,aq as c,e as a,o as r,l as s}from"./style_icon.js";const d={class:"markdown-body"},g=c(`<h1>Avatar 头像</h1><h3>介绍</h3><p>用来代表用户或事物，支持图片、图标或字符展示。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Avatar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Avatar</span>);
</code></pre><h3>基础用法</h3><p>支持三种尺寸：small、normal、large</p>`,7),o=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
      `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"normal"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
      `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
      `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),m=a("h3",null,"头像形状",-1),i=a("p",null,"支持两种形状：square、round",-1),u=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"round"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"头像类型",-1),v=a("p",null,"支持三种类型：图片、Icon 以及字符",-1),y=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
      `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s("王"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"自定义颜色及背景色",-1),M=a("p",null,"Icon 和字符型可以自定义颜色及背景色",-1),f=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo-avatar"'),s(),a("span",{class:"hljs-attr"},"bg-color"),s("="),a("span",{class:"hljs-string"},'"#FA2C19"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"rgb(245, 106, 0)"'),s(),a("span",{class:"hljs-attr"},"bg-color"),s("="),a("span",{class:"hljs-string"},'"rgb(253, 227, 207)"'),s(">")]),s("小明"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=a("h3",null,"带徽标的头像",-1),w=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-badge"),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-badge"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-badge"),s(),a("span",{class:"hljs-attr"},"dot"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-badge"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"头像组合展现",-1),x=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar-group"),s(),a("span",{class:"hljs-attr"},"span"),s("="),a("span",{class:"hljs-string"},'"-4"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"rgb(245, 106, 0)"'),s(),a("span",{class:"hljs-attr"},"bg-color"),s("="),a("span",{class:"hljs-string"},'"rgb(253, 227, 207)"'),s(">")]),s("小明"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar-group"),s(),a("span",{class:"hljs-attr"},"max-count"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"max-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(),a("span",{class:"hljs-attr"},"max-bgColor"),s("="),a("span",{class:"hljs-string"},'"#498ff2"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"rgb(245, 106, 0)"'),s(),a("span",{class:"hljs-attr"},"bg-color"),s("="),a("span",{class:"hljs-string"},'"rgb(253, 227, 207)"'),s(">")]),s("小明"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"组合头像可控制层级方向",-1),Z=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar-group"),s(),a("span",{class:"hljs-attr"},"max-count"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"zIndex"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},"max-content"),s("="),a("span",{class:"hljs-string"},'"..."'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"rgb(245, 106, 0)"'),s(),a("span",{class:"hljs-attr"},"bg-color"),s("="),a("span",{class:"hljs-string"},'"rgb(253, 227, 207)"'),s(">")]),s("小明"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),N=a("h3",null,"点击头像触发事件",-1),C=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'触发点击头像'"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),z=c('<h2>API</h2><h3>Avatar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>头像的大小，可选值为：<code class="">large</code>、<code class="">normal</code>、<code class="">small</code>，支持输入数字</td><td>string | number</td><td><code class="">normal</code></td></tr><tr><td>shape</td><td>头像的形状，可选值为：<code class="">square</code>、<code class="">round </code></td><td>string</td><td><code class="">round</code></td></tr><tr><td>color</td><td>字体颜色</td><td>string</td><td><code class="">#666</code></td></tr><tr><td>bg-color</td><td>背景色</td><td>string</td><td><code class="">#eee</code></td></tr></tbody></table><h3>AvatarGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>max-count</td><td>显示的最大头像个数</td><td>string | number</td><td>-</td></tr><tr><td>max-content</td><td>头像数量超出时，会出现一个头像折叠元素，该元素内容可为<code class="">...</code>、<code class="">more</code>、<code class="">+N</code></td><td>string</td><td><code class="">+N</code></td></tr><tr><td>size</td><td>头像的大小，可选值为：<code class="">large</code>、<code class="">normal</code>、<code class="">small</code>，支持直接输入数字</td><td>string | number</td><td><code class="">normal</code></td></tr><tr><td>shape</td><td>头像的形状，可选值为：<code class="">square</code>、<code class="">round</code></td><td>string</td><td><code class="">round</code></td></tr><tr><td>max-color</td><td>头像折叠元素的字体颜色</td><td>string</td><td><code class="">#666</code></td></tr><tr><td>max-bg-color</td><td>头像折叠元素的背景色</td><td>string</td><td><code class="">#eee</code></td></tr><tr><td>span</td><td>头像之间的间距</td><td>string</td><td><code class="">-8</code></td></tr><tr><td>zIndex</td><td>组合头像之间的层级方向，可选值为：<code class="">left</code>、<code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr></tbody></table><h3>Avatar Slots</h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>default</td><td>默认插槽，可放置图片、图标、文本等元素</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-actionsheet-light-color</td><td><em>#f6f6f6</em></td></tr><tr><td>--cub-avatar-square</td><td><em>5px</em></td></tr><tr><td>--cub-avatar-large-width</td><td><em>60px</em></td></tr><tr><td>--cub-avatar-large-height</td><td><em>60px</em></td></tr><tr><td>--cub-avatar-small-width</td><td><em>32px</em></td></tr><tr><td>--cub-avatar-small-height</td><td><em>32px</em></td></tr><tr><td>--cub-avatar-normal-width</td><td><em>40px</em></td></tr><tr><td>--cub-avatar-normal-height</td><td><em>40px</em></td></tr></tbody></table>',11),B={},X="",S=p({__name:"doc",setup(L,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(P,k)=>{const l=h("demo-block");return r(),j("div",d,[g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXZhdGFyIHNpemU9ImxhcmdlIsQcICA8aW1nxQkgIHNyYz0iaHR0cHM6Ly9pbWcxMi4zNjBidXlpbWcuY29tL2ltYWdldG9vbHMvamZzL3QxLzE5NjQzMC8zOC84MTA1LzE0MzI5LzYwYzgwNmE0RWQ1MDYyOThhL2U2ZGU5ZmI3Yjg0OTBmMzgucG5nIsV2L+UAoi/qAKP2ALJub3JtYWz/ALP/ALP/ALP/ALP/ALPyALNzbWFs/wCy/wCy/wCy/wCy/gCyPC/qAiM="},{default:n(()=>[o]),_:1}),m,i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXZhdGFyIHNoYXBlPSJzcXVhcmUiPjxNZSAvPjwvyiLXMXJvdW5k1jA8L8ptPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgTWUgfSBmcm9tICdAY3ViZmUvaWNvbnMtdnVlJzsKPC/GNz4K"},{default:n(()=>[u]),_:1}),b,v,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXZhdGFyxA8gIDxpbWfFCSAgc3JjPSJodHRwczovL2ltZzEyLjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTk2NDMwLzM4LzgxMDUvMTQzMjkvNjBjODA2YTRFZDUwNjI5OGEvZTZkZTlmYjdiODQ5MGYzOC5wbmcixXYv5QCVL+4AluwApTxNZSAvPtwi546Lzh88L+oA8jxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IE1lIH0gZnJvbSAnQGN1YmZlL2ljb25zLXZ1ZSc7Cjwvxjc+Cg=="},{default:n(()=>[y]),_:1}),I,M,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXZhdGFyIGNsYXNzPSJkZW1vxxMiIGJnLWNvbG9yPSIjRkEyQzE5Ij48TWUgyBRmZmYiIC8+PC/KR9FWxityZ2IoMjQ1LCAxMDYsIDApzFvFHDUzLCAyMjcsIDIwNykiPuWwj+aYjs5ZPC/qALs8c2NyaXB0IHNldHVwPgppbXBvcnQgeyBNZSB9IGZyb20gJ0BjdWJmZS9pY29ucy12dWUnOwo8L8Y3Pgo="},{default:n(()=>[f]),_:1}),Y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYmFkZ2UgdmFsdWU9IjgixBjHGmF2YXRhciBzaGFwZT0ic3F1YXJlIj48TWUgLz48L8oixUvFEMVMz1pkb3TfVN9UxlQ8L+oAujxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IE1lIH0gZnJvbSAnQGN1YmZlL2ljb25zLXZ1ZSc7Cjwvxjc+Cg=="},{default:n(()=>[w]),_:1}),_,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXZhdGFyLWdyb3VwIHNwYW49Ii00IsQfzSHGESAgPGltZ8cLICBzcmM9Imh0dHBzOi8vaW1nMTIuMzYwYnV5aW1nLmNvbS9pbWFnZXRvb2xzL2pmcy90MS8xOTY0MzAvMzgvODEwNS8xNDMyOS82MGM4MDZhNEVkNTA2Mjk4YS9lNmRlOWZiN2I4NDkwZjM4LnBuZyLHeC/nAJ0v8ACe7ACvPE1lIC8+3SQgY29sb3I9InJnYigyNDUsIDEwNiwgMCkiIGJnLcwcNTMsIDIyNywgMjA3KSI+5bCP5piO0FvMEOYBTvYBY21heC1jb3VudD0iMyLHDsVrI2ZmZsYRYmdDxxM0OThmZjL/AY7/AY7/AY7/AY7/AY7/AY7/AY7/AY7/AY78AY7ff/kBsjwv6gMhPHNjcmlwdCBzZXTEG2ltcG9ydCB7IE1lIH0gZnJvbSAnQGN1YmZlL2ljb25zLXZ1ZSc7Cjwvxjc+Cg=="},{default:n(()=>[x]),_:1}),A,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXZhdGFyLWdyb3VwIG1heC1jb3VudD0iMyIgekluZGV4PSJyaWdodCLHHW50ZcQfLi4uIsREzUbGESAgPGltZ8cLICBzcmM9Imh0dHBzOi8vaW1nMTIuMzYwYnV5aW1nLmNvbS9pbWFnZXRvb2xzL2pmcy90MS8xOTY0MzAvMzgvODEwNS8xNDMyOS82MGM4MDZhNEVkNTA2Mjk4YS9lNmRlOWZiN2I4NDkwZjM4LnBuZyLHeC/nAJ0v8ACe7ACvPE1lIC8+3SQgY29sb3I9InJnYigyNDUsIDEwNiwgMCkiIGJnLcwcNTMsIDIyNywgMjA3KSI+5bCP5piO33/Vf8wQ5gGXPgo8L+oBuDxzY3JpcHQgc2V0xBtpbXBvcnQgeyBNZSB9IGZyb20gJ0BjdWJmZS9pY29ucy12dWUnOwo8L8Y3Pgo="},{default:n(()=>[Z]),_:1}),N,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw9hdmF0YXIgQGNsaWNrPSJoYW5kbGVDxA0iPjxNZSAvPjwvyijFRsUQxkc8L8pgPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgTWUgfSBmcm9tICdAY3ViZmUvaWNvbnMtdnVlJzsKxAt0IMt3ID0gKCkgPT4gewogIMQeb2xlLmxvZygn6Kem5Y+R54K55Ye75aS05YOPJyk7Cn07Cjwvxns+Cg=="},{default:n(()=>[C]),_:1}),z])}}});export{S as default,X as excerpt,B as frontmatter};
