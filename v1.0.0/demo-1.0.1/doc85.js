import{d as p,r as o,b as r,k as t,w as n,aq as c,e as a,o as h,l as s}from"./style_icon.js";const d={class:"markdown-body"},j=c(`<h1>Video 视频播放器</h1><h3>介绍</h3><p>原生 video 实现的视频播放器</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Video</span>, <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Video</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-video"),s(),a("span",{class:"hljs-attr"},":source"),s("="),a("span",{class:"hljs-string"},'"source"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(" @"),a("span",{class:"hljs-attr"},"play"),s("="),a("span",{class:"hljs-string"},'"play"'),s(" @"),a("span",{class:"hljs-attr"},"pause"),s("="),a("span",{class:"hljs-string"},'"pause"'),s(" @"),a("span",{class:"hljs-attr"},"playend"),s("="),a("span",{class:"hljs-string"},'"playend"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-video"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"source"),s(`: {
          `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.kakusoft.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
        },
        `),a("span",{class:"hljs-attr"},"options"),s(`: {
          `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        }
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"play"),s(" = ("),a("span",{class:"hljs-params"},"elm: any"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'play'"),s(`, elm);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"pause"),s(" = ("),a("span",{class:"hljs-params"},"elm: any"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'pause'"),s(`, elm);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"playend"),s(" = ("),a("span",{class:"hljs-params"},"elm: any"),s(") => "),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'playend'"),s(`, elm);

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), play, pause, playend };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"自动播放",-1),u=a("p",null,"autoplay 属性设置视频自动播放",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-video"),s(),a("span",{class:"hljs-attr"},":source"),s("="),a("span",{class:"hljs-string"},'"source"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-video"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"source"),s(`: {
          `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.kakusoft.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
        },
        `),a("span",{class:"hljs-attr"},"options"),s(`: {
          `),a("span",{class:"hljs-attr"},"autoplay"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"muted"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        }
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"初始化静音",-1),y=a("p",null,"muted 属性设置视频初始化静音",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-video"),s(),a("span",{class:"hljs-attr"},":source"),s("="),a("span",{class:"hljs-string"},'"source"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-video"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"source"),s(`: {
          `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.kakusoft.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
        },
        `),a("span",{class:"hljs-attr"},"options"),s(`: {
          `),a("span",{class:"hljs-attr"},"muted"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        }
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"视频封面海报设置",-1),f=a("p",null,"poster 属性设置视频海报",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-video"),s(),a("span",{class:"hljs-attr"},":source"),s("="),a("span",{class:"hljs-string"},'"source"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-video"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"source"),s(`: {
          `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.kakusoft.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
        },
        `),a("span",{class:"hljs-attr"},"options"),s(`: {
          `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"poster"),s(`:
            `),a("span",{class:"hljs-string"},"'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp'"),s(`
        }
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),X=a("h3",null,"行内播放",-1),J=a("p",null,"playsinline 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）",-1),R=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-video"),s(),a("span",{class:"hljs-attr"},":source"),s("="),a("span",{class:"hljs-string"},'"source"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-video"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"source"),s(`: {
          `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.kakusoft.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
        },
        `),a("span",{class:"hljs-attr"},"options"),s(`: {
          `),a("span",{class:"hljs-attr"},"playsinline"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        }
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=a("h3",null,"视频背景图",-1),Z=a("p",null,"当设置视频为背景图时需要将 muted 静音、 disabled 禁止操作、loop 循环播放、autoplay 自动播放设置为 true，移动端需要设置 playsinline 行内展示",-1),V=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-video"),s(),a("span",{class:"hljs-attr"},":source"),s("="),a("span",{class:"hljs-string"},'"source"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-video"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"source"),s(`: {
          `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.kakusoft.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
        },
        `),a("span",{class:"hljs-attr"},"options"),s(`: {
          `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"autoplay"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"muted"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"playsinline"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"loop"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        }
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"视频切换",-1),x=a("p",null,"当视频地址发生变化时，重置视频",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-video"),s(),a("span",{class:"hljs-attr"},":source"),s("="),a("span",{class:"hljs-string"},'"source1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-video"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"changeVideo"'),s(">")]),s("切换视频"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"source1"),s(`: {
          `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/video/video_cubui.mp4'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
        },
        `),a("span",{class:"hljs-attr"},"options"),s(`: {
          `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        }
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeVideo"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        state.`),a("span",{class:"hljs-property"},"source1"),s("."),a("span",{class:"hljs-property"},"src"),s(" = "),a("span",{class:"hljs-string"},"'https://vjs.zencdn.net/v/oceans.mp4'"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), changeVideo };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>source</td><td>视频地址和类型设置</td><td>VideoSource</td><td>{}</td></tr><tr><td>options</td><td>控制视频播放属性</td><td>VideoOptions</td><td>{}</td></tr></tbody></table><h3>VideoSource 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>src</td><td>视频链接</td><td>boolean</td></tr><tr><td>type</td><td>视频类型</td><td>string</td></tr></tbody></table><h3>VideoOptions 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoplay</td><td>是否自动播放</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>poster</td><td>海报设置</td><td>string</td><td>-</td></tr><tr><td>loop</td><td>是否循环播放</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>controls</td><td>是否展示操作栏</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>muted</td><td>是否静音</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>volume</td><td>音量控制</td><td>number</td><td><code class="">0.5</code></td></tr><tr><td>disabled</td><td>禁用操作（如循环播放的背景图，禁止操作）</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>playsinline</td><td>是否设置为行内播放元素（解决安卓兼容问题）</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>play</td><td>播放</td><td>videoElm</td></tr><tr><td>pause</td><td>暂停</td><td>videoElm</td></tr><tr><td>playend</td><td>播放完成回调</td><td>videoElm</td></tr><tr><td>time</td><td>播放时触发(current 为当前播放时间，total 为总时间)</td><td>(current:string,total:string)</td></tr></tbody></table>',9),A={},M="",N=p({__name:"doc",setup(C,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(W,_)=>{const l=o("demo-block");return h(),r("div",d,[j,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSIgQHBsYXk9IsQGxA1hdXNlPSLFB8ccZW5kxh9lbmQiPiA8L8lgPgo8L8p6PHNjcmlwdCBsYW5nPSJ0cyLkAI1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gDpOskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wGu7gDYY29udHJvbHM6IHRydWXKN8cKfSnkAVfHKXN0IOQBwyA9IChlbG06IGFueSkgPT7FG29sZS5sb2coJ8QiJywgZWxt0DvkAg/fPMQj1j3mAjvfP8YlyUHHQnJldHVybiB7IC4uLuYCQijlAf0pLMVXLOYAmsYNxGR9xnvkAQN9Owo8L+YCkz4K"},{default:n(()=>[i]),_:1}),g,u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYYXV0b3BsYXk6IHRydWXMVG11dGVk0hdjb250cm9sc8YaymjHCn0pOwrHC3JldHVybiB7IC4uLuYBuijlAXUpIH3kAazGNH07Cjwv5gH1Pgo="},{default:n(()=>[m]),_:1}),b,y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYbXV0ZWQ6IHRydWXMUWNvbnRyb2xzxhrKTscKfSk7CscLcmV0dXJuIHsgLi4u5gGgKOUBWykgfeQBksY0fTsKPC/mAds+Cg=="},{default:n(()=>[v]),_:1}),k,f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYY29udHJvbHM6IHRydWXMVHBvc3RlcjrLEiDqAQFpbWcxMi4zNjBidXlpbWflAQBsaW5nL3MzNDV4MjA4X2pmcy90MS8xNjgxMDUvMzMvODQxNy81NDgyNS82MDNkZjA2ZEVmY2RkYzRjYi8yMWY5ZjVkMGExYjNkYWQ0LmpwZy53ZWJw6wDKxwp9KTsKxwtyZXR1cm4geyAuLi7mAhwo5QHXKSB95AIOxjR9Owo8L+YCVz4K"},{default:n(()=>[I]),_:1}),X,J,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYcGxheXNpbmxpbmU6IHRydWXMV2NvbnRyb2xzxhrKVMcKfSk7CscLcmV0dXJuIHsgLi4u5gGmKOUBYSkgfeQBmMY0fTsKPC/mAeE+Cg=="},{default:n(()=>[R]),_:1}),Y,Z,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYY29udHJvbHM6IGZhbHNlzFVhdXRvcGxheTogdHJ1zRptdXRlZNIXZGlzYWJs1BrER3NpbmxpbmXSHWxvb3DGFskVfccKfSk7CscLcmV0dXJuIHsgLi4u5gIIKOUBwykgfeQB+sY0fTsKPC/mAkM+Cg=="},{default:n(()=>[V]),_:1}),w,x,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggxIiA6b3B0aW9ucz0ixwkiPjwvyTHJP2J1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9ImNoYW5nZVbEMiI+5YiH5o2i6KeG6aKRxkvGPT4KPC/qAJc8c2NyaXB0IGxhbmc9InRzIsRraW1wb3J0IHsgdG9SZWZzLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yUwoyB8gIOcBBjrJMsUVcmM6ICdodHRwczovL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbeQA1nVpL+UBI8YGX8USLm1wNCcsy0zkATA6ICfGKcQdyRx9yifnAXnuAIZjb250cm9sczogdHJ1Zco3xwp9KeQBBscpc3Qg6wGCID0gKCkgPT7LT+UBAy7nAO4uc3JjID3qAOJ2anMuemVuY2RuLm5ldC92L29jZWFuc+UAzMhlfTsKxwpyZXR1cm4geyAuLi7mAaYoxV4pLO0AhH3GOuQAr307Cjwv5gHuPgo="},{default:n(()=>[B]),_:1}),H])}}});export{N as default,M as excerpt,A as frontmatter};
