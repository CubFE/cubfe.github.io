import{d as p,r as o,b as r,k as t,w as n,aq as e,e as a,l as s,o as h}from"./style_icon.js";const d={class:"markdown-body"},i=e(`<h1>Video</h1><h3>Intro</h3><p>Video player implemented by native video</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Video</span>, <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Video</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),g=a("h3",null,"Auto play",-1),u=a("p",null,[a("code",{class:""},"autoplay"),s(" Property to set video autoplay")],-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),b=a("h3",null,"Initialize mute",-1),y=a("p",null,[s("The "),a("code",{class:""},"muted"),s(" property sets the initial mute of the video")],-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),k=a("h3",null,"Video cover poster settings",-1),f=a("p",null,[s("The "),a("code",{class:""},"poster"),s(" property sets the video poster")],-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),V=a("h3",null,"play inline",-1),X=a("p",null,[s("The "),a("code",{class:""},"playsinline"),s(" property sets the mobile terminal video to play in line and prevents the newly opened page from playing (compatible with IOS and some Android machines)")],-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),J=e('<h3>Set video as background</h3><p>When setting the video as the background image, it is necessary to set <code class="">muted</code>, <code class="">disabled</code>, <code class="">operation prohibited</code>, <code class="">loop</code>, <code class="">loop</code> and <code class="">autoplay</code> to <code class="">true</code>, and the mobile terminal needs to set <code class="">playinline</code> for in-line display</p>',2),R=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),Z=a("h3",null,"Video switching",-1),Y=a("p",null,"Reset the video when the video address changes",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-video"),s(),a("span",{class:"hljs-attr"},":source"),s("="),a("span",{class:"hljs-string"},'"source1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-video"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"changeVideo"'),s(">")]),s("Video switching"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
`)])],-1),B=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>source</td><td>Video url and type settings</td><td>VideoSource</td><td>{}</td></tr><tr><td>options</td><td>Control video playback properties</td><td>VideoOptions</td><td>{}</td></tr></tbody></table><h3>VideoSource 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>src</td><td>Video Src</td><td>boolean</td></tr><tr><td>type</td><td>Video Type</td><td>string</td></tr></tbody></table><h3>VideoOptions 数据结构</h3><table><thead><tr><th>key</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>autoplay</td><td>Auto play</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>poster</td><td>Poster settings</td><td>string</td><td>-</td></tr><tr><td>loop</td><td>Poster loop</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>controls</td><td>Show operation control</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>muted</td><td>Mute</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>volume</td><td>Volume control</td><td>number</td><td><code class="">0.5</code></td></tr><tr><td>disabled</td><td>Disable operation (e.g. background image of circular playback, prohibit operation)</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>playsinline</td><td>Whether to set as inline playback element (solve Android compatibility problem)</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>play</td><td>play event</td><td>-</td></tr><tr><td>pause</td><td>pause event</td><td>-</td></tr><tr><td>playend</td><td>Playback completion callback</td><td>-</td></tr><tr><td>time</td><td>Triggered when playing(current is the current playback time，total is the total time)</td><td>(current:string,total:string)</td></tr></tbody></table>',9),A={},_="",M=p({__name:"doc.en-US",setup(C,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(H,W)=>{const l=o("demo-block");return h(),r("div",d,[i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSIgQHBsYXk9IsQGxA1hdXNlPSLFB8ccZW5kxh9lbmQiPiA8L8lgPgo8L8p6PHNjcmlwdCBsYW5nPSJ0cyLkAI1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gDpOskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wGu7gDYY29udHJvbHM6IHRydWXKN8cKfSnkAVfHKXN0IOQBwyA9IChlbG06IGFueSkgPT7FG29sZS5sb2coJ8QiJywgZWxt0DvkAg/fPMQj1j3mAjvfP8YlyUHHQnJldHVybiB7IC4uLuYCQijlAf0pLMVXLOYAmsYNxGR9xnvkAQN9Owo8L+YCkz4K"},{default:n(()=>[j]),_:1}),g,u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYYXV0b3BsYXk6IHRydWXMVG11dGVk0hdjb250cm9sc8YaymjHCn0pOwrHC3JldHVybiB7IC4uLuYBuijlAXUpIH3kAazGNH07Cjwv5gH1Pgo="},{default:n(()=>[m]),_:1}),b,y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYbXV0ZWQ6IHRydWXMUWNvbnRyb2xzxhrKTscKfSk7CscLcmV0dXJuIHsgLi4u5gGgKOUBWykgfeQBksY0fTsKPC/mAds+Cg=="},{default:n(()=>[v]),_:1}),k,f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYY29udHJvbHM6IHRydWXMVHBvc3RlcjrLEiDqAQFpbWcxMi4zNjBidXlpbWflAQBsaW5nL3MzNDV4MjA4X2pmcy90MS8xNjgxMDUvMzMvODQxNy81NDgyNS82MDNkZjA2ZEVmY2RkYzRjYi8yMWY5ZjVkMGExYjNkYWQ0LmpwZy53ZWJw6wDKxwp9KTsKxwtyZXR1cm4geyAuLi7mAhwo5QHXKSB95AIOxjR9Owo8L+YCVz4K"},{default:n(()=>[I]),_:1}),V,X,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYcGxheXNpbmxpbmU6IHRydWXMV2NvbnRyb2xzxhrKVMcKfSk7CscLcmV0dXJuIHsgLi4u5gGmKOUBYSkgfeQBmMY0fTsKPC/mAeE+Cg=="},{default:n(()=>[w]),_:1}),J,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggiIDpvcHRpb25zPSLHCSI+PC/JMD4KPC/KSjxzY3JpcHQgbGFuZz0idHMixF1pbXBvcnQgeyB0b1JlZnMsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JTCjIHyAg5gC5OskxxRRyYzogJ2h0dHBzOi8vc3RvcmFnZS5rYWt1c29mdC5jb20vYWJvdXQvYmlnLWZpbmFsLm1wND9FeHBpcmVzPTM3MzAxOTMwNzUmQWNjZXNzS2V5PTNMb1lYMWRRV2E2Wlh6UWwmU2lnbmF0dXJlPVZpTUZqeiUyQk9rQnhTJTJGWTFyanRVVnFib3BiSkklM0QnLOsAnnR5cGU6ICflAVEvbXA0J8kcfcon5wF+7gDYY29udHJvbHM6IGZhbHNlzFVhdXRvcGxheTogdHJ1zRptdXRlZNIXZGlzYWJs1BrER3NpbmxpbmXSHWxvb3DGFskVfccKfSk7CscLcmV0dXJuIHsgLi4u5gIIKOUBwykgfeQB+sY0fTsKPC/mAkM+Cg=="},{default:n(()=>[R]),_:1}),Z,Y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlkZW8gOnNvdXJjZT0ixggxIiA6b3B0aW9ucz0ixwkiPjwvyTHJP2J1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9ImNoYW5nZVbEMiI+xQcgc3dpdGNoaW5nxk7GQD4KPC/qAJo8c2NyaXB0IGxhbmc9InRzIsRuaW1wb3J0IHsgdG9SZWZzLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yUwoyB8gIOcBCTrJMsUVcmM6ICdodHRwczovL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbeQA1nVpL+UBJsYGX8USLm1wNCcsy0zkATM6ICfGKcQdyRx9yifnAXzuAIZjb250cm9sczogdHJ1Zco3xwp9KeQBBscpc3Qg6wGFID0gKCkgPT7LT+UBAy7nAO4uc3JjID3qAOJ2anMuemVuY2RuLm5ldC92L29jZWFuc+UAzMhlfTsKxwpyZXR1cm4geyAuLi7mAaYoxV4pLO0AhH3GOuQAr307Cjwv5gHuPgo="},{default:n(()=>[x]),_:1}),B])}}});export{M as default,_ as excerpt,A as frontmatter};
