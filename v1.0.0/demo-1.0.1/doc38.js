import{d as p,r as h,b as r,k as l,w as n,aq as c,e as a,o,l as s}from"./style_icon.js";const d={class:"markdown-body"},i=c(`<h1>ImagePreview 图片预览</h1><h3>介绍</h3><p>支持全屏预览视频和图片，可函数式调用</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ImagePreview</span>);
</code></pre><h3>基础用法</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image-preview"),s(),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"showPreview"'),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"imgData"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"hideFn"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"展示图片预览"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showFn"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" resData = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"showPreview"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"imgData"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showFn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        resData.`),a("span",{class:"hljs-property"},"showPreview"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"hideFn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        resData.`),a("span",{class:"hljs-property"},"showPreview"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(resData),
        showFn,
        hideFn
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"设置初始页码",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image-preview"),s(),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"showPreview"'),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"imgData"'),s(),a("span",{class:"hljs-attr"},":init-no"),s("="),a("span",{class:"hljs-string"},'"3"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"hideFn"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"设置初始页码"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showFn"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" resData = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"showPreview"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"imgData"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'"),s(`
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showFn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        resData.`),a("span",{class:"hljs-property"},"showPreview"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"hideFn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        resData.`),a("span",{class:"hljs-property"},"showPreview"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(resData),
        showFn,
        hideFn
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"设置轮播指示器及颜色",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"showPreview"'),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"imgData"'),s(`
    `),a("span",{class:"hljs-attr"},":pagination-visible"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"pagination-color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"hideFn"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"设置轮播指示器及颜色"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showFn"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" resData = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"showPreview"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"imgData"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'"),s(`
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showFn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        resData.`),a("span",{class:"hljs-property"},"showPreview"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"hideFn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        resData.`),a("span",{class:"hljs-property"},"showPreview"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(resData),
        showFn,
        hideFn
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"视频、图片预览",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image-preview"),s(),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"showPreview"'),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"imgData"'),s(),a("span",{class:"hljs-attr"},":videos"),s("="),a("span",{class:"hljs-string"},'"videoData"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"hideFn"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"视频、图片预览"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showFn"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" resData = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"showPreview"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"imgData"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"videoData"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"source"),s(`: {
              `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.kakusoft.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D'"),s(`,
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
            },
            `),a("span",{class:"hljs-attr"},"options"),s(`: {
              `),a("span",{class:"hljs-attr"},"muted"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
              `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"source"),s(`: {
              `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://storage.kakusoft.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D'"),s(`,
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'video/mp4'"),s(`
            },
            `),a("span",{class:"hljs-attr"},"options"),s(`: {
              `),a("span",{class:"hljs-attr"},"muted"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
              `),a("span",{class:"hljs-attr"},"controls"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
            }
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showFn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        resData.`),a("span",{class:"hljs-property"},"showPreview"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"hideFn"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        resData.`),a("span",{class:"hljs-property"},"showPreview"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(resData),
        showFn,
        hideFn
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"函数式调用",-1),M=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"函数式调用的图片预览"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"fnShow"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showImagePreview } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/imagepreview/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" resData = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"imgData"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"src"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'"),s(`
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onClose"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'imagepreview closed'"),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"fnShow"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-title function_"},"showImagePreview"),s(`({
          `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"images"),s(": resData."),a("span",{class:"hljs-property"},"imgData"),s(`,
          onClose
        });
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(resData),
        fnShow
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>show</td><td>是否展示预览图片</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>videos</td><td>预览的视频数组（视频自动放到图片之前）</td><td>VideoArray[]</td><td><code class="">[]</code></td></tr><tr><td>images</td><td>预览图片数组</td><td>ImageArray[]</td><td><code class="">[]</code></td></tr><tr><td>autoplay</td><td>自动轮播时长，0 表示不会自动轮播</td><td>number | string</td><td><code class="">3000</code></td></tr><tr><td>init-no</td><td>初始页码</td><td>number</td><td><code class="">0</code></td></tr><tr><td>pagination-visible</td><td>分页指示器是否展示</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>pagination-color</td><td>分页指示器选中的颜色</td><td>string</td><td><code class="">#fff</code></td></tr><tr><td>content-close</td><td>点击图片可以退出预览</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-index</td><td>是否显示页码</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>closeable</td><td>是否显示关闭图标</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>close-icon-position</td><td>关闭图标位置，可选值：<code class="">top-left</code></td><td>string</td><td><code class="">top-right</code></td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code class="">false</code> 可阻止关闭，支持返回 <code class="">Promise</code></td><td>(active: number) =&gt; boolean | Promise&lt;<code class="">boolean</code>&gt;</td><td>-</td></tr><tr><td>max-zoom</td><td>手势缩放时，最大缩放比例</td><td>number</td><td><code class="">3</code></td></tr><tr><td>min-zoom</td><td>手势缩放时，最小缩放比例</td><td>number</td><td><code class="">1/3</code></td></tr><tr><td>is-loop</td><td>是否循环播放</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>ImageArray 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>src</td><td>预览图片链接</td><td>string</td></tr></tbody></table><h3>VideoArray 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>source</td><td>视频地址和类型设置，等同于 Video 组件的 <a href="#/zh-CN/video">source 属性</a></td><td>object</td></tr><tr><td>options</td><td>控制视频播放属性，等同于 Video 组件的 <a href="#/zh-CN/video">options 属性</a></td><td>object</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>点击遮罩关闭图片预览时触发</td><td>无</td></tr><tr><td>change</td><td>切换图片时触发</td><td>index:当前图片索引</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>closeIcon</td><td>自定义关闭图片</td></tr></tbody></table>',11),D={},Y="",k=p({__name:"doc",setup(f,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(z,A)=>{const t=h("demo-block");return o(),r("div",d,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UtcHJldmlldyA6c2hvdz0ixAZQxhMiIDrFI3M9ImltZ0RhdGEiIEBjbG9zZT0iaGlkZUZuIiAvyU5jZWxsIGlzTGluayB0aXRsZT0i5bGV56S65Zu+54mH6aKE6KeIIsZnSWNvbj0idHJ1ZcVSaWNrxnlGbiI+PC/ITj4KPC/qALUKPHNjcmlwdCBsYW5nPSJ0cyLEe2ltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3QgcmVz5ADuID3JVijIISAg6wEhOiBmYWxzZSzJHOcBJzogW8kTIMlcxz9yYzogJ2h0dHBzOi8vb3NzLm5ldGNvbmNlcHRzLmNuL3dlYnNpdGUvYXNzZXRzL21lZGlhL3dhcC9ibG9nLXdhcC1iZy0xLmpwZyfLWX3qAIXfct9y33Lfct9y33Lfct9y33LfctZyyQxdxwp9KTsK7QIs5gK3ID0gKCkgPT7rAJfnAkUu6wIwID0g5AL05AKOxUzPS+YDVN9LykvlAnzSTHJldHVybss+Li4u5gMTKMdIKeoBSMRSRm7KEOYAg8pUxQcKxQs8L+YDgD4K"},{default:n(()=>[j]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UtcHJldmlldyA6c2hvdz0ixAZQxhMiIDrFI3M9ImltZ0RhdGHEEm5pdC1ubz0iMyIgQGNsb3NlPSJoaWRlRm4iIC/JW2NlbGwgaXNMaW5rIHRpdGxlPSLorr7nva7liJ3lp4vpobXnoIEixnRJY29uPSJ0cnVlxVJpY2vmAIZGbiI+PC/ITj4KPC/qAMI8c2NyaXB0IGxhbmc9InRzIsR6aW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCByZXPkAPogPclWKMghICDrAS06IGZhbHNlLMkc5wEzOiBbyRMgyVzHP3JjOiAnaHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnJ8tZfeoAhd9y33Ldci9tb2JpbGVjbXMvczc1MHgzNjZfamZzL3QxLzI2NTk3LzMwLzQ4NzAvMTc0NTgzLzVjMzVjNWQyRWQ1NWVlZGM2LzUwZTI3ODcwYzI1ZTdhODIucG7/AMj/AMj/AMj/AMjyAMg5NTQyLzE3LzEyODczLzIwMTY4N+QAyGM0MzYyRWE5ZWI3NTdkLzYwMDI2YjQwYTlkNjBkODX/AZD/AMj/AMj/AMj1AMgzMDA0Mi8zNi80MjcvODI5NTHkAMZiZmRhYkUzZmFmMmY2Ni85YWRjYTc4MjY2MWM5ODhj8QDGyQxdxwp9KTsK7QMs5gO2ID0gKCkgPT7rAOvnA0Uu6wMwID0g5APz5AOOxUzPS+YEU99LykvlA3zSTHJldHVybss+Li4u5gQTKMdIKeoBnMRSRm7KEOYAg8pUxQcKxQs8L+YEgD4K"},{default:n(()=>[m]),_:1}),w,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UtcHJldmlldwogICAgOnNob3c9IsQGUMYXIsYYxStzPSJpbWdEYXRhxxZwYWdpbmF0aW9uLXZpc2libGU9InRydWXGH8seY29sb3I9InJlZMYbQGNsb3NlPSJoaWRlRm7EFC/pAJZjZWxsIGlzTGluayB0aXTEVOiuvue9rui9ruaSreaMh+ekuuWZqOWPiuminOiJsiLmALdJY29ux3/EYGlja+YAyUZuIj48L8haPgo8L+oBCTxzY3JpcHQgbGFuZz0idHMi5ACGaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+UA3HNldHVwKCnHDiAgY29uc3QgcmVz5AE5ID3JVijIISAg6wFwOiBmYWxzZSzJHOcBcjogW8kTIMlcxz9yYzogJ2h0dHBzOi8vb3NzLm5ldGNvbmNlcHRzLmNuL3dlYnNpdGUvYXNzZXRzL21lZGlhL3dhcC9ibG9nLXdhcC1iZy0xLmpwZyfLWX3qAIXfct9y3XIvbW9iaWxlY21zL3M3NTB4MzY2X2pmcy90MS8yNjU5Ny8zMC80ODcwLzE3NDU4My81YzM1YzVkMkVkNTVlZWRjNi81MGUyNzg3MGMyNWU3YTgyLnBu/wDI/wDI/wDI/wDI8gDIOTU0Mi8xNy8xMjg3My8yMDE2ODfkAMhjNDM2MkVhOWViNzU3ZC82MDAyNmI0MGE5ZDYwZDg1/wGQ/wDI/wDI/wDI9QDIMzAwNDIvMzYvNDI3LzgyOTUx5ADGYmZkYWJFM2ZhZjJmNjYvOWFkY2E3ODI2NjFjOTg4Y/EAxskMXccKfSk7Cu0DLOYDtiA9ICgpID0+6wDr5wNFLusDMCA9IOQD8+QDjsVMz0vmBGHfS8pL5QN80kxyZXR1cm7LPi4uLuYEEyjHSCnqAZzEUkZuyhDmAIPKVMUHCsULPC/mBIA+Cg=="},{default:n(()=>[b]),_:1}),u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UtcHJldmlldyA6c2hvdz0ixAZQxhMiIDrFI3M9ImltZ0RhdGEiIDp2aWRlb3M9IsUIxhRAY2xvc2U9ImhpZGVGbiIgL8liY2VsbCBpc0xpbmsgdGl0bGU9IuinhumikeOAgeWbvueJh+mihOiniCLGfkljb249InRydWXFVWlja+YAkEZuIj48L8hRPgo8L+oAzDxzY3JpcHQgbGFuZz0idHMixH1pbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHJlc+QA8CA9yVYoyCEgIOsBNzogZmFsc2UsyRznAT06IFvJEyDJXMc/cmM6ICdodHRwczovL29zcy5uZXRjb25jZXB0cy5jbi93ZWJzaXRlL2Fzc2V0cy9tZWRpYS93YXAvYmxvZy13YXAtYmctMS5qcGcny1l96gCF33Lfct1yL21vYmlsZWNtcy9zNzUweDM2Nl9qZnMvdDEvMjY1OTcvMzAvNDg3MC8xNzQ1ODMvNWMzNWM1ZDJFZDU1ZWVkYzYvNTBlMjc4NzBjMjVlN2E4Mi5wbv8AyP8AyP8AyP8AyPIAyDk1NDIvMTcvMTI4NzMvMjAxNjg35ADIYzQzNjJFYTllYjc1N2QvNjAwMjZiNDBhOWQ2MGQ4Nf8BkP8AyP8AyP8AyPUAyDMwMDQyLzM2LzQyNy84Mjk1MeQAxmJmZGFiRTNmYWYyZjY2LzlhZGNhNzgyNjYxYzk4OGPxAMbJDF3qANDpBBD9AudvdXJjZTrPFvAA/XN0b3JhZ2Uua2FrdXNvZnQuY29tL2Fib3V0L2JpZy1maW5hbC5tcDQ/RXhwaXJlcz0zNzMwMTkzMDc1JkFjY2Vzc0tleT0zTG9ZWDFkUVdhNlpYelFsJlNpZ25hdHVyZT1WaU1GanolMkJPa0J4UyUyRlkxcmp0VVZxYm9wYkpJJTNEJ+wBqcQBdHlwZTogJ+UA5i9tcDTsARDvAdggIG9wdGlvbnPyAOhtdXRlZDog5ATi0GFjb250cm9sc8Yezl7/AkLHAf8BXf8BXf8BXf8BXf8BXf8BXf8BXf8BXcgB/wFd/wFdzgxdxwp9KTsK7QYF5gaPID0gKCkgPT7rAITnBh4u6wYJID3Fb+QGZ8VMz0vmBy/fS8pL5QZV0kxyZXR1cm7LPi4uLuYG7CjHSCnqAQ7EUkZuyhDmAIPKVMUHCsULPC/mB1k+Cg=="},{default:n(()=>[y]),_:1}),I,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBpc0xpbmsgdGl0bGU9IuWHveaVsOW8j+iwg+eUqOeahOWbvueJh+mihOiniCIgOnNob3dJY29uPSJ0cnVlIiBAY2xpY2s9ImZuU2hvdyI+PC/IWj4KPC/Kcwo8c2NyaXB0IGxhbmc9InRzIuQAh2ltcG9ydCB7IMVXbWFnZVByZXZpZXcgfSBmcm9tICdAY3VidWnEVXVpJzvKM80ZL2Rpc3QvcGFja2FnZXMvacRJcMZJL3N0eWxlzDp7IHJlYWN0aXZlLCB0b1JlZnPJbXZ1xipleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHJlc0RhdGEgPclWKMghxHJnxB06IFvJEyDJQMYBc3JjOiAnaHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnJ8tZfSzfct9y33LHci9tb2JpbGVjbXMvczc1MHgzNjZfamZzL3QxLzI2NTk3LzMwLzQ4NzAvMTc0NTgzLzVjMzVjNWQyRWQ1NWVlZGM2LzUwZTI3ODcwYzI1ZTdhODIucG7/AMj/AMj/AMj/AMjyAMg5NTQyLzE3LzEyODczLzIwMTY4N+QAyGM0MzYyRWE5ZWI3NTdkLzYwMDI2YjQwYTlkNjBkODX/AZD/AMj/AMj/AMj1AMgzMDA0Mi8zNi80MjcvODI5NTHkAMZiZmRhYkUzZmFmMmY2Ni85YWRjYTc4MjY2MWM5ODhj8QDGyQxdxwp9KTsK7QMQb25DbG9zZSA9ICgpID0+6wDsxCBvbGUubG9nKCfsA6MgY8QyZCcp5AN7xVXPVOYEXNNT8AQ26wN7xh06IOQEpuwBfMV5czroA7gu5wOjzCPnAMPJEuQA5PAAmXJldHVybusAiy4uLuYETSjHWinKU+YAwMpExQcKxQs8L+YFFz4K"},{default:n(()=>[M]),_:1}),v])}}});export{k as default,Y as excerpt,D as frontmatter};
