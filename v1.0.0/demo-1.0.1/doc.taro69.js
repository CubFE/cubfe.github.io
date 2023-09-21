import{d as e,r as h,b as j,k as n,w as t,aq as c,e as a,l as s,o as i}from"./style_icon.js";const r={class:"markdown-body"},g=c(`<h1>Swiper 轮播</h1><h3>介绍</h3><p>常用于一组图片或卡片轮播。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Swiper</span>, <span class="hljs-title class_">SwiperItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Swiper</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwiperItem</span>);
</code></pre><h3>基础用法</h3><p><code class="">auto-play</code> 自动轮播的时长 <code class="">init-page</code> 初始索引值 <code class="">pagination-visible</code> 是否显示分页指示器 <code class="">pagination-color</code> 指示器颜色自定义</p>`,7),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper"),s(),a("span",{class:"hljs-attr"},":init-page"),s("="),a("span",{class:"hljs-string"},'"page"'),s(),a("span",{class:"hljs-attr"},":pagination-visible"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"pagination-color"),s("="),a("span",{class:"hljs-string"},'"#426543"'),s(),a("span",{class:"hljs-attr"},"auto-play"),s("="),a("span",{class:"hljs-string"},'"3000"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro34.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro2.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/welcomecubui.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/fristfabu.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"page"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),o=a("h3",null,"异步加载",-1),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper"),s(),a("span",{class:"hljs-attr"},":init-page"),s("="),a("span",{class:"hljs-string"},'"page"'),s(),a("span",{class:"hljs-attr"},":pagination-visible"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"pagination-color"),s("="),a("span",{class:"hljs-string"},'"#426543"'),s(),a("span",{class:"hljs-attr"},"auto-play"),s("="),a("span",{class:"hljs-string"},'"3000"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"page"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
        `),a("span",{class:"hljs-attr"},"list"),s(": [] "),a("span",{class:"hljs-keyword"},"as"),s(` string[]
      });
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          state.`),a("span",{class:"hljs-property"},"list"),s(` = [
            `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/cubuitaro34.jpg'"),s(`,
            `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/cubuitaro2.jpg'"),s(`,
            `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/welcomecubui.jpg'"),s(`,
            `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'"),s(`
          ];
        }, `),a("span",{class:"hljs-number"},"3000"),s(`);
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),u=a("h3",null,"动态加载",-1),b=a("p",null,"支持动态增加/删除图片",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper"),s(),a("span",{class:"hljs-attr"},":init-page"),s("="),a("span",{class:"hljs-string"},'"page"'),s(),a("span",{class:"hljs-attr"},":pagination-visible"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"pagination-color"),s("="),a("span",{class:"hljs-string"},'"#426543"'),s(),a("span",{class:"hljs-attr"},"auto-play"),s("="),a("span",{class:"hljs-string"},'"3000"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"page"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
        `),a("span",{class:"hljs-attr"},"list"),s(`: [
          `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/cubuitaro34.jpg'"),s(`,
          `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/cubuitaro2.jpg'"),s(`,
          `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/welcomecubui.jpg'"),s(`,
          `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'"),s(`
        ]
      });
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          state.`),a("span",{class:"hljs-property"},"list"),s("."),a("span",{class:"hljs-title function_"},"splice"),s("("),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
        }, `),a("span",{class:"hljs-number"},"3000"),s(`);
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y=a("h3",null,"自定义大小",-1),I=a("p",null,[a("code",{class:""},"width"),s(" 自定义轮播大小")],-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper"),s(),a("span",{class:"hljs-attr"},":init-page"),s("="),a("span",{class:"hljs-string"},'"page2"'),s(),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"300"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro34.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro2.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/welcomecubui.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/fristfabu.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"page2"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x=a("h3",null,"自定义分页指示器",-1),v=a("p",null,[a("code",{class:""},"v-slot:page"),s(" 表示自定义指示器")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper"),s(),a("span",{class:"hljs-attr"},":init-page"),s("="),a("span",{class:"hljs-string"},'"page3"'),s(),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro34.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro2.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/welcomecubui.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/fristfabu.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:page"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"page"'),s(">")]),s(" {{ current }}/4 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"page3"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"current"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"index: number"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"current"),s(" = index + "),a("span",{class:"hljs-number"},"1"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), change };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".page"),s(` {
    `),a("span",{class:"hljs-attribute"},"position"),s(`: absolute;
    `),a("span",{class:"hljs-attribute"},"bottom"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"right"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"46px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"22px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0.33"),s(`);
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"22px"),s(`;
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"14px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),G=a("h3",null,"自定义指示器(异步 3s)",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper"),s(),a("span",{class:"hljs-attr"},":init-page"),s("="),a("span",{class:"hljs-string"},'"page"'),s(),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(),a("span",{class:"hljs-attr"},"auto-play"),s("="),a("span",{class:"hljs-string"},'"2000"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro34.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro2.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/welcomecubui.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/fristfabu.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:page"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"page"'),s(">")]),s(" {{ current1 }}/4 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"page"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"current1"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"index: number"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"current1"),s(" = index + "),a("span",{class:"hljs-number"},"1"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), change };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".page"),s(` {
    `),a("span",{class:"hljs-attribute"},"position"),s(`: absolute;
    `),a("span",{class:"hljs-attribute"},"bottom"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"right"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"46px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"22px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0.33"),s(`);
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"22px"),s(`;
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"14px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"手动切换",-1),B=a("p",null,[s("可通过 "),a("code",{class:""},"API"),s("("),a("code",{class:""},"prev"),s(","),a("code",{class:""},"next"),s(")进行手动切换")],-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo-box"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper"),s(),a("span",{class:"hljs-attr"},":init-page"),s("="),a("span",{class:"hljs-string"},'"page"'),s(),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"swiper"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-swiper-btns"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-swiper-btns__left"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handlePrev"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Left"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Left"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-swiper-btns__left"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleNext"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Right"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, ref, "),a("span",{class:"hljs-title class_"},"Ref"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Right"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      `),a("span",{class:"hljs-title class_"},"Left"),s(`,
      `),a("span",{class:"hljs-title class_"},"Right"),s(`
    },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" swiper = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(") "),a("span",{class:"hljs-keyword"},"as"),s(),a("span",{class:"hljs-title class_"},"Ref"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"page"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
        `),a("span",{class:"hljs-attr"},"list"),s(`: [
          `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/cubuitaro34.jpg'"),s(`,
          `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/cubuitaro2.jpg'"),s(`,
          `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/welcomecubui.jpg'"),s(`,
          `),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'"),s(`
        ]
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handlePrev"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        swiper.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"prev"),s(`();
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleNext"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        swiper.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"next"),s(`();
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), swiper, handlePrev, handleNext };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".demo-box"),s(` {
    `),a("span",{class:"hljs-attribute"},"position"),s(`: relative;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-btns"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"position"),s(`: absolute;
    `),a("span",{class:"hljs-attribute"},"top"),s(": "),a("span",{class:"hljs-number"},"50%"),s(`;
    `),a("span",{class:"hljs-attribute"},"transform"),s(": "),a("span",{class:"hljs-built_in"},"translateY"),s("(-"),a("span",{class:"hljs-number"},"50%"),s(`);
    `),a("span",{class:"hljs-attribute"},"z-index"),s(": "),a("span",{class:"hljs-number"},"1"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: space-between;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-btns"),s(),a("span",{class:"hljs-selector-tag"},"span"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"30px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0.2"),s(`);
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),Y=a("h3",null,"垂直方向",-1),H=a("p",null,[a("code",{class:""},"direction"),s(" 自定义轮播方向")],-1),X=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper"),s(`
    `),a("span",{class:"hljs-attr"},":init-page"),s("="),a("span",{class:"hljs-string"},'"page4"'),s(`
    `),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"auto-play"),s("="),a("span",{class:"hljs-string"},'"3000"'),s(`
    `),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"150"'),s(`
    `),a("span",{class:"hljs-attr"},":pagination-visible"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 150px"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro34.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/cubuitaro2.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/welcomecubui.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/jdc-article/fristfabu.jpg"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-swiper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"page4"),s(": "),a("span",{class:"hljs-number"},"0"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-swiper-item"),s(),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),R=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>轮播卡片的宽度</td><td>number | string</td><td>window.innerWidth</td></tr><tr><td>height</td><td>轮播卡片的高度</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>direction</td><td>轮播方向,可选值<code class="">horizontal</code>,<code class="">vertical</code></td><td>string</td><td><code class="">&#39;horizontal&#39;</code></td></tr><tr><td>pagination-visible</td><td>分页指示器是否展示</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>pagination-color</td><td>分页指示器选中的颜色</td><td>string</td><td><code class="">&#39;#fff&#39;</code></td></tr><tr><td>loop</td><td>是否循环轮播</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>duration</td><td>动画时长（单位是 ms）</td><td>number | string</td><td><code class="">500</code></td></tr><tr><td>auto-play</td><td>自动轮播时长，0 表示不会自动轮播</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>init-page</td><td>初始化索引值</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>touchable</td><td>是否可触摸滑动</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>is-prevent-default</td><td>滑动过程中是否禁用默认事件</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>is-stop-propagation</td><td>滑动过程中是否禁止冒泡</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>滑动之后的回调</td><td><code class="">当前索引值 index</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>page</td><td>自定义指示器</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>prev</td><td>切换到上一页</td><td>-</td></tr><tr><td>next</td><td>切换到下一页</td><td>-</td></tr><tr><td>to</td><td>切换到指定轮播</td><td>index:number</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-swiper-pagination-item-width</td><td><em>8px</em></td></tr><tr><td>--cub-swiper-pagination-item-height</td><td><em>3px</em></td></tr><tr><td>--cub-swiper-pagination-item-margin-right</td><td><em>7px</em></td></tr><tr><td>--cub-swiper-pagination-item-border-radius</td><td><em>2px</em></td></tr></tbody></table>',13),N={},L="",J=e({__name:"doc.taro",setup(D,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(k,M)=>{const l=h("demo-block");return i(),j("div",r,[g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpcGVyIDppbml0LXBhZ2U9IsQGIiA6cGFnaW5hdGlvbi12aXNpYmxlPSJ0cnVlIiDLGmNvbG9yPSIjNDI2NTQzIiBhdXRvLXBsYXk9IjMwMDAixGjNai1pdGVtxhYgIDxpbWcgc3JjPSJodHRwczovL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbS9qZGMtYXJ0aWNsZS9jdWJ1aXRhcm8zNC5qcGciIGFsdD0iIiAvx2vEIdJs/wCC/wCC9wCCMv8Agf8Agf8AgfoAgXdlbGNvbWXlAIj/AIP/AIP/AIP6AINmcmlzdGZhYnX/AIDKaswVPgo8L+oCijxzY3JpcHQgbGFuZz0idHPlAjVpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QCDc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8g5ALUZTogMscQfSnEWsQBcmV0dXJuIHsgLi4u5gCBKMVGKSB9xiN9CiDECzwv5gDG5ADPdHls5QNhLu8BB+cAjmxpbmUtaGVpZ2h0OiAxNTBweMRKxEjRMeQBmsY1d2lkdGg6IDEwMCXGeMlBxxJ95ACDxno="},{default:t(()=>[m]),_:1}),o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpcGVyIDppbml0LXBhZ2U9IsQGIiA6cGFnaW5hdGlvbi12aXNpYmxlPSJ0cnVlIiDLGmNvbG9yPSIjNDI2NTQzIiBhdXRvLXBsYXk9IjMwMDAixGjNai1pdGVtIHYtZsQ3xQxpbiBsaXN0IiA6a2V5xhTHNyAgPGltZyA6c3JjxxggYWx0PSIiIC/HWC/PWcQXzBU+Cjwv6gDzPHNjcmlwdCBsYW5nPSJ0c8VnaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgb25Nb3VudGVkIH0gZnJvbSAndnVlJzsKICBleMU1ZGVmYXVsdCB75QCOc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yV8oyB8g5AFIZTogMizJEeQBCDogW10gYXMgc3RyaW5nW13HHX0pxHjEAekAligoKSA9Pslv5QCBVGltZW91dNEbIOYAiC7EYiA9IFvLGSAgJ2h0dHBzOi8vc3RvcmFnZS4zNjBidXlpbWcuY29tL2pkYy1hcnRpY2xl5AFbdWl0YXJvMzQuanBnJ+oAvN9J2Uky30jfSHdlbGNvbWXFT99K30pmcmlzdGZhYnXFR8tGXegBeiAgfSwg5ALX6QGM6gGWcmV0dXJuIHsgLi4u5gJAKOUBcikgfcYjfQogxAs8L+YCheQCjnR5bOUDiS7wAx/mAbhsaW5lLWhlaWdodDogMTUwcHjESsRI0THkAyfGNXdpZHRoOiAxMDAlxnjJQccSfeQAg8Z6"},{default:t(()=>[d]),_:1}),u,b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpcGVyIDppbml0LXBhZ2U9IsQGIiA6cGFnaW5hdGlvbi12aXNpYmxlPSJ0cnVlIiDLGmNvbG9yPSIjNDI2NTQzIiBhdXRvLXBsYXk9IjMwMDAixGjNai1pdGVtIHYtZsQ3xQxpbiBsaXN0IiA6a2V5xhTHNyAgPGltZyA6c3JjxxggYWx0PSIiIC/HWC/PWcQXzBU+Cjwv6gDzPHNjcmlwdCBsYW5nPSJ0c8VnaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgb25Nb3VudGVkIH0gZnJvbSAndnVlJzsKICBleMU1ZGVmYXVsdCB75QCOc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yV8oyB8g5AFIZTogMizJEeQBCDogW8kQICAnaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb20vamRjLWFydGljbGXkAPZ1aXRhcm8zNC5qcGcnylffR9dHMt9G3UZ3ZWxjb21lxU3fSN1IZnJpc3RmYWJ1xUXJRF3HCn0p5AGOxAHpAawoKCkgPT7pAYXlAZdUaW1lb3V00Rsg5gGeLuQBeC5zcGxpY2UoMSwgMclWICB9LCDkAsnJEspycmV0dXJuIHsgLi4u5gIyKMVOKSB9xiN9CiDECzwv5gJ35AKAdHls5QN7LvADEeYAlGxpbmUtaGVpZ2h0OiAxNTBweMRKxEjRMeQDGcY1d2lkdGg6IDEwMCXGeMlBxxJ95ACDxno="},{default:t(()=>[w]),_:1}),y,I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpcGVyIDppbml0LXBhZ2U9IsQGMiIgOmxvb3A9ImZhbHNlIiB3aWR0aD0iMzAwIsQ8zT4taXRlbcYWICA8aW1nIHNyYz0iaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb20vamRjLWFydGljbGUvY3VidWl0YXJvMzQuanBnIiBhbHQ9IiIgL8drxCHSbP8Agv8AgvcAgjL/AIH/AIH/AIH6AIF3ZWxjb21l5QCI/wCD/wCD/wCD+gCDZnJpc3RmYWJ1/wCAymrMFT4KPC/qAl48c2NyaXB0IGxhbmc9InRz5QI1aW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+UAg3NldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclUKMgfICDlAsk6IDLHEX0pxFvEAXJldHVybiB7IC4uLuYAgijFRykgfcYjfQogxAs8L+YAx+QA0HR5bOUDNi7vAQjnAI9saW5lLWhlaWdodDogMTUwcHjESsRI0THkAZvGNeUDVTogMTAwJcZ4yUHHEn3kAIPGeg=="},{default:t(()=>[A]),_:1}),x,v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpcGVyIDppbml0LXBhZ2U9IsQGMyIgOmxvb3A9InRydWUiIEBjaGFuxB3GCCLEQM1CLWl0ZW3GFiAgPGltZyBzcmM9Imh0dHBzOi8vc3RvcmFnZS4zNjBidXlpbWcuY29tL2pkYy1hcnRpY2xlL2N1YnVpdGFybzM0LmpwZyIgYWx0PSIiIC/Ha8Qh0mz/AIL/AIL3AIIy/wCB/wCB/wCB+gCBd2VsY29tZeUAiP8Ag/8Ag/8Ag/oAg2ZyaXN0ZmFidf8AgMxq6QJVIHYtc2xvdDrkAkHGGyAgPHZpZXcgY2xhc3PmAloiPiB7eyBjdXJyZW50IH19LzQgPC/EJchk7QKjy3I+CswcPHNjcmlwdCBsYW5nPSJ0c+UCkmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHvFfHNldHVwKCnHDiAgY29uc3Qgc3TkANs9yVQoyB8gIOUDKjogMCzJEucA2DogMccTfSnEb8pO5gNAID0gKGluZGV4OiBudW1iZXIpID0+yXggxnQux00gPSDFLCArIDHITX3ICXJldHVybiB7IC4uLuYA7CjFPSksyGvHK30KxTY8L+YBOeQBQnR5bOUBZi7vAdfnAIlsaW5lLWhlaWdo5ADQNTBweMRKxEjRMeQCasY1d2lkdGg6IDEwMCXGeMlBxxLFQOQBOccxcG9zaXRpb246IGFic29sdXRlxjhib3R0b206IDDGD3LGRscOx2Y0NuYAlMpmMjLIEmJhY2tncm91bmQ6IHJnYmEoMCwgxwMuMzPnAZZib3JkZXItcmFkaXVzzD50ZXh0LWFsaWduOiBjZW50ZXLGGGNvbG9yOiAjZmZmxhFmb250LXNpemU6IDE0xj595AFl5gFc"},{default:t(()=>[f]),_:1}),G,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpcGVyIDppbml0LXBhZ2U9IsQGIiA6bG9vcD0idHJ1ZSIgQGNoYW7EHMYIIiBhdXRvLXBsYXk9IjIwMDAixFDNUi1pdGVtxhYgIDxpbWcgc3JjPSJodHRwczovL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbS9qZGMtYXJ0aWNsZS9jdWJ1aXRhcm8zNC5qcGciIGFsdD0iIiAvx2vEIdJs/wCC/wCC9wCCMv8Agf8Agf8AgfoAgXdlbGNvbWXlAIj/AIP/AIP/AIP6AINmcmlzdGZhYnX/AIDMaukCZSB2LXNsb3Q65AJRxhsgIDx2aWV3IGNsYXNz5wJqPiB7eyBjdXJyZW50MSB9fS80IDwvxCbIZe0CtMtzPgrMHDxzY3JpcHQgbGFuZz0idHPlApNpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7xXxzZXR1cCgpxw4gIGNvbnN0IHN05ADcPclUKMgfICDkANE6IDAsyRHoANg6IDHHFH0pxG/KTuYDUiA9IChpbmRleDogbnVtYmVyKSA9Psl4IMZ0LshOID0gxS0gKyAxyE59yAlyZXR1cm4geyAuLi7mAO0oxT4pLMhsxyt9CsU2PC/mATrkAUN0eWzlAWcu7wHZ5wCKbGluZS1oZWlnaHQ6IDE1MHB4xErESNEx5AJsxjV3aWR0aDogMTAwJcZ4yUHHEsVA5AE6xzFwb3NpdGlvbjogYWJzb2x1dGXGOGJvdHRvbTogMMYPcsZGxw7HZjQ25gCUymYyMsgSYmFja2dyb3VuZDogcmdiYSgwLCDHAy4zM+cBl2JvcmRlci1yYWRpdXPMPnRleHQtYWxpZ246IGNlbnRlcsYYY29sb3I6ICNmZmbGEWZvbnQtc2l6ZTogMTTGPn3kAWXmAVw="},{default:t(()=>[C]),_:1}),Z,B,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDx2aWV3IGNsYXNzPSJkZW1vLWJveCLEGiAgPGN1Yi1zd2lwZXIgOmluaXQtcGFnZT0ixAYiIDpsb29wPSJ0cnVlIiByZWY9IsYrxz3NPy1pdGVtIHYtZm9yPSLFDGluIGxpc3QiIDprZXnGFMk5ICA8aW1nIDpzcmPHGiBhbHQ9IiIgL8lcL89dxhnMF8cS7ADgyzRidG5zyXE8c3BhbtclX19sZWZ0IiBAY2xpY2s9ImhhbmRsZVByZXbJPyAgPExlZnQ+PC/FB8hVL8RW32PbY05leHTMY1JpZ2jEZMYI02U8L+QA7MQMyAo8L+oB6zxzY3JpcHQgbGFuZz0idOYA/WltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMs5AHSLCBSZWYgfSBmcm9tICd2dWUnO8w05ADtLCDlAI/JJUBjdWJmZS9pY29ucy12dWUtdGFyb8U3ZXjFN2RlZmF1bHQge+UAs2NvbXBvbmVudHM6xxIgxlfHDMVdxQx9xhNzZXR1cCgpyS3EaHQg5wKkPeQAtShudWxsKSBhc+QAvcR5yyd0YXRlxSbmAO0oyEYgIOQC0zogMsh4IOUCnTogW8kQICAnaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb20vamRjLWFydGljbGXkAoV1aeQA+jM0LmpwZyfKV99H10cy30bdRndlbGNvbWXFTd9I3UhmcmlzdGZhYnXFRclEXccKfSnuAW3qAyggPSAoKSA9PukBtSDnAbEudmFsdWUucHJldijJPn3UR+QDDN9HLm5leHTNR8cKcmV0dXJuIHsgLi4u5gLdKOUCCSksx0As6wCsyAzFcecAi30KxU88L+YDQuQDS3R5bOUFPi7oBTLnAJVwb3NpdGlvbjogcmVsYeQCZMRDxEEu8AUNxjFsaW5lLWhl5ALnOiAxNTBweNkx5AUTxjV3aWR0aDogMTAwJcQuICDJQccS0EDkBGXYPOoAs2Fic29sdXTlALMgIHRvcDogNcgmdHJhbnNmb3JtOsYL5ARUWSgtNTAl5wFyei1pbmRleDogMcYQZGlzcGxheTogZmxl5QDUICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW75ALjlBTnmAL3TVWFsaWdu5QEhczogY2VudGVy127MHecBBjLnAXDqAUIzyRJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIMcDLjLlAPt95AIZ5gIQ"},{default:t(()=>[W]),_:1}),Y,H,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpcGVyCiAgICA6aW5pdC1wYWdlPSLEBjQixhdsb29wPSJ0cnVlxhFhdXRvLXBsYXk9IjMwMDDGFWRpcmVjdGlvbj0idmVydGljYWzGGWhlaWdodD0iMTXHKjpwYWdpbmHELC12aXNpYmxlzF5zdHnEEcY3OiAxNTBweMQa5ACy7QC0LWl0ZW3GFiAgPGltZyBzcmM9Imh0dHBzOi8vc3RvcmFnZS4zNjBidXlpbWcuY29tL2pkYy1h5ACfbGUvY3VidWl0YXJvMzQuanBnIiBhbHQ9IiIgL8drxCHSbP8Agv8AgvcAgjL/AIH/AIH/AIH6AIF3ZWxjb21l5QCI/wCD/wCD/wCD+gCDZnJpc3RmYWJ1/wCAymrMFT4KPC/qAtQ8c2NyaXB0IGxhbmc9InRzIsQvaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+YCkGV0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOUDOzogMMcRfSnEW8QBcmV0dXJuIHsgLi4u5gCCKMVHKSB9xiN9CiDECzwv5gDH5ADQ5AMN5ADFLu8BCOcAj2xpbmUt7QMrxErESNEx5AGbxjV3aWR0aDogMTAwJcZ4yUHHEn3kAIPGeg=="},{default:t(()=>[X]),_:1}),R])}}});export{J as default,L as excerpt,N as frontmatter};
