import{d as p,r as o,b as r,k as l,w as n,aq as c,e as a,o as h,l as s}from"./style_icon.js";const i={class:"markdown-body"},d=c(`<h1>ImagePreview</h1><h3>Intro</h3><p>Support full screen preview videos and images, support functional call.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ImagePreview</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image-preview"),s(),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"showPreview"'),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"imgData"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"hideFn"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Show preview"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showFn"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),g=a("h3",null,"With Init No",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image-preview"),s(),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"showPreview"'),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"imgData"'),s(),a("span",{class:"hljs-attr"},":init-no"),s("="),a("span",{class:"hljs-string"},'"3"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"hideFn"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"With init no"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showFn"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),w=a("h3",null,"With Pagination",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"showPreview"'),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"imgData"'),s(`
    `),a("span",{class:"hljs-attr"},":pagination-visible"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"pagination-color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"hideFn"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"With pagination"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showFn"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),u=a("h3",null,"With Videos",-1),y=a("h4",null,"Preview videos not support in taro.",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image-preview"),s(),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"showPreview"'),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"imgData"'),s(),a("span",{class:"hljs-attr"},":videos"),s("="),a("span",{class:"hljs-string"},'"videoData"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"hideFn"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"With videos"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showFn"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),A=a("h3",null,"Functional Call",-1),I=a("h4",null,"Functional call not support in taro.",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"isLink"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Functional call"'),s(),a("span",{class:"hljs-attr"},":showIcon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"fnShow"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),M=c('<h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>show</td><td>Whether to show preview</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>videos</td><td>Videos Array(Videos are before images, not support in taro)</td><td>VideoArray[]</td><td><code class="">[]</code></td></tr><tr><td>images</td><td>Images array</td><td>ImageArray[]</td><td><code class="">[]</code></td></tr><tr><td>autoplay</td><td>Autoplay time, zero means not autoplay</td><td>number | string</td><td><code class="">3000</code></td></tr><tr><td>init-no</td><td>Init no</td><td>number</td><td><code class="">0</code></td></tr><tr><td>pagination-visible</td><td>Whether to show pagination</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>pagination-color</td><td>Pagination color</td><td>string</td><td><code class="">#fff</code></td></tr><tr><td>content-close</td><td>Click image to exit preview</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-index</td><td>Whether to show index</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>closeable</td><td>Whether to show close icon</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>close-icon-position</td><td>Close icon position,can be set to <code class="">top-left</code></td><td>string</td><td><code class="">top-right</code></td></tr><tr><td>before-close</td><td>Callback function before close</td><td>(active: number) =&gt; boolean | Promise&lt;<code class="">boolean</code>&gt;</td><td>-</td></tr><tr><td>max-zoom</td><td>Max zoom<code class="">Taro isn&#39;t supported</code></td><td>number</td><td><code class="">3</code></td></tr><tr><td>min-zoom</td><td>Min zoom<code class="">Taro isn&#39;t supported</code></td><td>number</td><td><code class="">1/3</code></td></tr><tr><td>is-Loop</td><td>Whether to loop</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Data Structure of ImageArray</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>src</td><td>img url</td><td>string</td></tr></tbody></table><h3>Data Structure of VideoArray</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>source</td><td>Video url and type settings</td><td>object</td></tr><tr><td>options</td><td>Control video playback properties</td><td>object</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>close</td><td>Emitted when closing ImagePreview</td><td>-</td></tr><tr><td>change</td><td>Emitted when current image changed</td><td>index</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>closeIcon</td><td>Custom close icon</td></tr></tbody></table>',10),D={},x="",W=p({__name:"doc.en-US",setup(z,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(k,Z)=>{const t=o("demo-block");return h(),r("div",i,[d,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UtcHJldmlldyA6c2hvdz0ixAZQxhMiIDrFI3M9ImltZ0RhdGEiIEBjbG9zZT0iaGlkZUZuIiAvyU5jZWxsIGlzTGluayB0aXRsZT0iU2hvdyDHYCLGYUljb249InRydWXFTGlja8ZzRm4iPjwvyEg+Cjwv6gCvCjxzY3JpcHQgbGFuZz0idHMixHVpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHJlc+QA6CA9yVYoyCEgIOsBGzogZmFsc2UsyRznASE6IFvJEyDJXMc/cmM6ICdodHRwczovL29zcy5uZXRjb25jZXB0cy5jbi93ZWJzaXRlL2Fzc2V0cy9tZWRpYS93YXAvYmxvZy13YXAtYmctMS5qcGcny1l96gCF33Lfct9y33Lfct9y33Lfct9y33LWcskMXccKfSk7Cu0CLOYCtyA9ICgpID0+6wCX5wJFLusCMCA9IOQC9OQCjsVMz0vmA07fS8pL5QJ80kxyZXR1cm7LPi4uLuYDEyjHSCnqAUjEUkZuyhDmAIPKVMUHCsULPC/mA4A+Cg=="},{default:n(()=>[j]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UtcHJldmlldyA6c2hvdz0ixAZQxhMiIDrFI3M9ImltZ0RhdGHEEm5pdC1ubz0iMyIgQGNsb3NlPSJoaWRlRm4iIC/JW2NlbGwgaXNMaW5rIHRpdGxlPSJXaXRoIMQ+IG5vIsZuSWNvbj0idHJ1ZcVMaWNr5gCARm4iPjwvyEg+Cjwv6gC8PHNjcmlwdCBsYW5nPSJ0cyLEdGltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3QgcmVz5AD0ID3JVijIISAg6wEnOiBmYWxzZSzJHOcBLTogW8kTIMlcxz9yYzogJ2h0dHBzOi8vb3NzLm5ldGNvbmNlcHRzLmNuL3dlYnNpdGUvYXNzZXRzL21lZGlhL3dhcC9ibG9nLXdhcC1iZy0xLmpwZyfLWX3qAIXfct9y33Lfct9y33Lfct9y33LfctZyyQxdxwp9KTsK7QIs5gK2ID0gKCkgPT7rAJfnAkUu6wIwID0g5ALz5AKOxUzPS+YDTd9LykvlAnzSTHJldHVybss+Li4u5gMTKMdIKeoBSMRSRm7KEOYAg8pUxQcKxQs8L+YDgD4K"},{default:n(()=>[m]),_:1}),w,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UtcHJldmlldwogICAgOnNob3c9IsQGUMYXIsYYxStzPSJpbWdEYXRhxxZwYWdpbmF0aW9uLXZpc2libGU9InRydWXGH8seY29sb3I9InJlZMYbQGNsb3NlPSJoaWRlRm7EFC/pAJZjZWxsIGlzTGluayB0aXTEVFdpdGjLTyLmAKhJY29ux3DEUWlja+YAukZuIj48L8hLPgo8L+oA+jxzY3JpcHQgbGFuZz0idHMixHdpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QDNc2V0dXAoKccOICBjb25zdCByZXPkASogPclWKMghICDrAWE6IGZhbHNlLMkc5wFjOiBbyRMgyVzHP3JjOiAnaHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnJ8tZfeoAhd9y33Lfct9y33LfctNyL21vYmlsZWNtcy9zNzUweDM2Nl9qZnMvdDEvOTU0Mi8xNy8xMjg3My8yMDE2ODcvNWMzYzQzNjJFYTllYjc1N2QvNjAwMjZiNDBhOWQ2MGQ4Nf8AyP8AyP8AyP8AyPUAyDMwMDQyLzM2LzQyNy84Mjk1MeQAxmJmZGFiRTNmYWYyZjY2LzlhZGNhNzgyNjYxYzk4OGPxAMbJDF3HCn0pOwrtAtbmA2AgPSAoKSA9PusA6+cC7y7rAtogPSDkA53kAzjFTM9L5gP830vKS+UDJtJMcmV0dXJuyz4uLi7mA70ox0gp6gGcxFJGbsoQ5gCDylTFBwrFCzwv5gQqPgo="},{default:n(()=>[b]),_:1}),u,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UtcHJldmlldyA6c2hvdz0ixAZQxhMiIDrFI3M9ImltZ0RhdGEiIDp2aWRlb3M9IsUIxhRAY2xvc2U9ImhpZGVGbiIgL8liY2VsbCBpc0xpbmsgdGl0bGU9IldpdGggxkUixnRJY29uPSJ0cnVlxUtpY2vmAIZGbiI+PC/IRz4KPC/qAMI8c2NyaXB0IGxhbmc9InRzIsRzaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCByZXPkAOYgPclWKMghICDrAS06IGZhbHNlLMkc5wEzOiBbyRMgyVzHP3JjOiAnaHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnJ8tZfeoAhd9y33Ldci9tb2JpbGVjbXMvczc1MHgzNjZfamZzL3QxLzI2NTk3LzMwLzQ4NzAvMTc0NTgzLzVjMzVjNWQyRWQ1NWVlZGM2LzUwZTI3ODcwYzI1ZTdhODIucG7/AMj/AMj/AMj/AMjyAMg5NTQyLzE3LzEyODczLzIwMTY4N+QAyGM0MzYyRWE5ZWI3NTdkLzYwMDI2YjQwYTlkNjBkODX/AZD/AMj/AMj/AMj1AMgzMDA0Mi8zNi80MjcvODI5NTHkAMZiZmRhYkUzZmFmMmY2Ni85YWRjYTc4MjY2MWM5ODhj8QDGyQxd6gDQ6QQG/QLnb3VyY2U6zxbwAP1zdG9yYWdlLmtha3Vzb2Z0LmNvbS9hYm91dC9iaWctZmluYWwubXA0P0V4cGlyZXM9MzczMDE5MzA3NSZBY2Nlc3NLZXk9M0xvWVgxZFFXYTZaWHpRbCZTaWduYXR1cmU9VmlNRmp6JTJCT2tCeFMlMkZZMXJqdFVWcWJvcGJKSSUzRCfsAanEAXR5cGU6ICflAOYvbXA07AEQ7wHYICBvcHRpb25z8gDobXV0ZWQ6IOQE4tBhY29udHJvbHPGHs5e/wJCxwH/AV3/AV3/AV3/AV3/AV3/AV3/AV3/AV3IAf8BXf8BXc4MXccKfSk7Cu0GBeYGjyA9ICgpID0+6wCE5wYeLusGCSA9xW/kBmfFTM9L5gcl30vKS+UGVdJMcmV0dXJuyz4uLi7mBuwox0gp6gEOxFJGbsoQ5gCDylTFBwrFCzwv5gdZPgo="},{default:n(()=>[v]),_:1}),A,I,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBpc0xpbmsgdGl0bGU9IkZ1bmN0aW9uYWwgY2FsbCIgOnNob3dJY29uPSJ0cnVlIiBAY2xpY2s9ImZuU2hvdyI+PC/ISz4KPC/KZAo8c2NyaXB0IGxhbmc9InRzIsR4aW1wb3J0IHsgxVdtYWdlUHJldmlldyB9IGZyb20gJ0BjdWJ1acRVdWknO8ozzRkvZGlzdC9wYWNrYWdlcy9pxElwxkkvc3R5bGXMOnsgcmVhY3RpdmUsIHRvUmVmc8ltdnXGKmV4xSpkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3QgcmVzRGF0YSA9yVYoyCHEcmfEHTogW8kTIMlAxgFzcmM6ICdodHRwczovL29zcy5uZXRjb25jZXB0cy5jbi93ZWJzaXRlL2Fzc2V0cy9tZWRpYS93YXAvYmxvZy13YXAtYmctMS5qcGcny1l9LN9y33LfcsdyL21vYmlsZWNtcy9zNzUweDM2Nl9qZnMvdDEvMjY1OTcvMzAvNDg3MC8xNzQ1ODMvNWMzNWM1ZDJFZDU1ZWVkYzYvNTBlMjc4NzBjMjVlN2E4Mi5wbv8AyP8AyP8AyP8AyPIAyDk1NDIvMTcvMTI4NzMvMjAxNjg35ADIYzQzNjJFYTllYjc1N2QvNjAwMjZiNDBhOWQ2MGQ4Nf8BkP8AyP8AyP8AyPUAyDMwMDQyLzM2LzQyNy84Mjk1MeQAxmJmZGFiRTNmYWYyZjY2LzlhZGNhNzgyNjYxYzk4OGPxAMbJDF3HCn0pOwrtAxBvbkNsb3NlID0gKCkgPT7rAOzEIG9sZS5sb2coJ+wDoyBjxDJkJynkA3vFVc9U5gRc01PwBDbrA3vGHTog5ASm7AF8xXlzOugDuC7nA6PMI+cAw8kS5ADk8ACZcmV0dXJu6wCLLi4u5gRNKMdaKcpT5gDAykTFBwrFCzwv5gUXPgo="},{default:n(()=>[f]),_:1}),M])}}});export{W as default,x as excerpt,D as frontmatter};
