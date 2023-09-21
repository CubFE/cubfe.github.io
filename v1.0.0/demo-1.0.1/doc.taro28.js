import{d as r,r as p,b as h,k as n,w as l,aq as c,e as a,o as i,l as s}from"./style_icon.js";const d={class:"markdown-body"},j=c(`<h1>Elevator 电梯楼层</h1><h3>介绍</h3><p>用于列表快速定位以及索引的显示</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Elevator</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Elevator</span>);
</code></pre><h3>基础用法</h3>`,6),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-elevator"),s(),a("span",{class:"hljs-attr"},":index-list"),s("="),a("span",{class:"hljs-string"},'"dataList"'),s(),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"260"'),s(" @"),a("span",{class:"hljs-attr"},"click-item"),s("="),a("span",{class:"hljs-string"},'"clickItem"'),s(" @"),a("span",{class:"hljs-attr"},"click-index"),s("="),a("span",{class:"hljs-string"},'"clickIndex"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-elevator"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"dataList"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'安徽'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'G'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'H'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'湖南'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'湖北'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(`
              }
            ]
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickItem"),s(" = ("),a("span",{class:"hljs-params"},"key: string, item: any"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(key, "),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(item));
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickIndex"),s(" = ("),a("span",{class:"hljs-params"},"key: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(key);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), clickItem, clickIndex };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),o=a("h3",null,"自定义索引",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-elevator"),s(`
    `),a("span",{class:"hljs-attr"},":index-list"),s("="),a("span",{class:"hljs-string"},'"dataList2"'),s(`
    `),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"220"'),s(`
    `),a("span",{class:"hljs-attr"},":acceptKey"),s("="),a("span",{class:"hljs-string"},'"acceptKey"'),s(`
    @`),a("span",{class:"hljs-attr"},"click-item"),s("="),a("span",{class:"hljs-string"},'"clickItem"'),s(`
    @`),a("span",{class:"hljs-attr"},"click-index"),s("="),a("span",{class:"hljs-string"},'"clickIndex"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-elevator"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"acceptKey"),s(": "),a("span",{class:"hljs-string"},"'num'"),s(`,
        `),a("span",{class:"hljs-attr"},"dataList2"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-string"},"'一'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'上海'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-string"},"'二'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'成都'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'西安'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'天津'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'武汉'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'长沙'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"10"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'重庆'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"11"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'苏州'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"12"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'南京'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"13"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-string"},"'三'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'西宁'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"14"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'兰州'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"15"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'石家庄'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"16"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'秦皇岛'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"17"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'大连'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"18"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'哈尔滨'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"19"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'长春'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"20"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'太原'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"21"),s(`
              }
            ]
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickItem"),s(" = ("),a("span",{class:"hljs-params"},"key: string, item: any"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(key, "),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(item));
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickIndex"),s(" = ("),a("span",{class:"hljs-params"},"key: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(key);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), clickItem, clickIndex };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"索引吸顶",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-elevator"),s(`
    `),a("span",{class:"hljs-attr"},":index-list"),s("="),a("span",{class:"hljs-string"},'"dataList3"'),s(`
    `),a("span",{class:"hljs-attr"},":is-sticky"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"220"'),s(`
    @`),a("span",{class:"hljs-attr"},"click-item"),s("="),a("span",{class:"hljs-string"},'"clickItem"'),s(`
    @`),a("span",{class:"hljs-attr"},"click-index"),s("="),a("span",{class:"hljs-string"},'"clickIndex"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-elevator"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"dataList3"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'安徽'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'重庆'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'F'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'福建'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'G'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'甘肃'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'贵州'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'H'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'湖南'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'湖北'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"10"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'海南'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"11"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'河北'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"12"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'河南'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"13"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'黑龙江'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"14"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'J'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'吉林'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"15"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'江苏'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"16"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'江西'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"17"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'L'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'辽宁'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"18"),s(`
              }
            ]
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickItem"),s(" = ("),a("span",{class:"hljs-params"},"key: string, item: any"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(key, "),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(item));
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickIndex"),s(" = ("),a("span",{class:"hljs-params"},"key: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(key);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), clickItem, clickIndex };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"自定义内容",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-elevator"),s(),a("span",{class:"hljs-attr"},":index-list"),s("="),a("span",{class:"hljs-string"},'"dataList"'),s(),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"260"'),s(" @"),a("span",{class:"hljs-attr"},"click-item"),s("="),a("span",{class:"hljs-string"},'"clickItem"'),s(" @"),a("span",{class:"hljs-attr"},"click-index"),s("="),a("span",{class:"hljs-string"},'"clickIndex"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:default"),s("="),a("span",{class:"hljs-string"},'"slotProps"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Jd"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"12px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Jd"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{marginLeft: '15px'}"`),s(">")]),s("{{ slotProps.item.name }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-elevator"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Jd"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      `),a("span",{class:"hljs-title class_"},"Jd"),s(`
    },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"dataList"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'安徽'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'G'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'H'"),s(`,
            `),a("span",{class:"hljs-attr"},"list"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'湖南'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
              },
              {
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'湖北'"),s(`,
                `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(`
              }
            ]
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickItem"),s(" = ("),a("span",{class:"hljs-params"},"key: string, item: any"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(key, "),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(item));
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickIndex"),s(" = ("),a("span",{class:"hljs-params"},"key: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(key);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), clickItem, clickIndex };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>电梯区域的高度</td><td>number | string</td><td><code class="">200px</code></td></tr><tr><td>accept-key</td><td>索引 <code class="">key</code> 值</td><td>string</td><td><code class="">title</code></td></tr><tr><td>index-list</td><td>索引列表</td><td>Array（ <code class="">item</code> 需包含 <code class="">id</code>、<code class="">name</code> 属性, <code class="">name</code> 支持传入 <code class="">html</code> 结构）</td><td><code class="">[{id: 0, name: &#39;&#39;}]</code></td></tr><tr><td>is-sticky</td><td>索引是否吸顶</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>space-height</td><td>右侧锚点的上下间距</td><td>number</td><td><code class="">23</code></td></tr><tr><td>title-height</td><td>左侧索引的高度</td><td>number</td><td><code class="">35</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义左侧索引下每条数据的内容</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click-item</td><td>点击内容</td><td><code class="">key: string, item: { id: 0, name: &#39;&#39; }</code></td></tr><tr><td>click-index</td><td>点击索引</td><td><code class="">key: string</code></td></tr><tr><td>change</td><td>索引改变</td><td><code class="">index: number</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>scrollTo</td><td>滚动到对应索引的位置</td><td><code class="">index:number</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-elevator-list-item-highcolor</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-elevator-list-item-font-size</td><td><em>12px</em></td></tr><tr><td>--cub-elevator-list-item-font-color</td><td><em>#333333</em></td></tr><tr><td>--cub-elevator-list-item-name-padding</td><td><em>0 20px</em></td></tr><tr><td>--cub-elevator-list-item-name-height</td><td><em>30px</em></td></tr><tr><td>--cub-elevator-list-item-name-line-height</td><td><em>30px</em></td></tr><tr><td>--cub-elevator-list-item-code-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-elevator-list-item-code-font-color</td><td><em>#1a1a1a</em></td></tr><tr><td>--cub-elevator-list-item-code-font-weight</td><td><em>500</em></td></tr><tr><td>--cub-elevator-list-item-code-padding</td><td><em>0 20px</em></td></tr><tr><td>--cub-elevator-list-item-code-height</td><td><em>35px</em></td></tr><tr><td>--cub-elevator-list-item-code-line-height</td><td><em>35px</em></td></tr><tr><td>--cub-elevator-list-item-code-after-width</td><td><em>100%</em></td></tr><tr><td>--cub-elevator-list-item-code-after-height</td><td><em>1px</em></td></tr><tr><td>--cub-elevator-list-item-code-after-bg-color</td><td><em>#f5f5f5</em></td></tr><tr><td>--cub-elevator-list-item-code-current-box-shadow</td><td><em>0 3px 3px 1px rgba(240, 240, 240, 1)</em></td></tr><tr><td>--cub-elevator-list-item-code-current-bg-color</td><td><em>#fff</em></td></tr><tr><td>--cub-elevator-list-item-code-current-border-radius</td><td><em>50%</em></td></tr><tr><td>--cub-elevator-list-item-code-current-width</td><td><em>45px</em></td></tr><tr><td>--cub-elevator-list-item-code-current-height</td><td><em>45px</em></td></tr><tr><td>--cub-elevator-list-item-code-current-line-height</td><td><em>45px</em></td></tr><tr><td>--cub-elevator-list-item-code-current-position</td><td><em>absolute</em></td></tr><tr><td>--cub-elevator-list-item-code-current-right</td><td><em>60px</em></td></tr><tr><td>--cub-elevator-list-item-code-current-top</td><td><em>50%</em></td></tr><tr><td>--cub-elevator-list-item-code-current-transform</td><td><em>translateY(-50%)</em></td></tr><tr><td>--cub-elevator-list-item-code-current-text-align</td><td><em>center</em></td></tr><tr><td>--cub-elevator-list-item-bars-position</td><td><em>absolute</em></td></tr><tr><td>--cub-elevator-list-item-bars-right</td><td><em>8px</em></td></tr><tr><td>--cub-elevator-list-item-bars-top</td><td><em>50%</em></td></tr><tr><td>--cub-elevator-list-item-bars-transform</td><td><em>translateY(-50%)</em></td></tr><tr><td>--cub-elevator-list-item-bars-padding</td><td><em>15px 0</em></td></tr><tr><td>--cub-elevator-list-item-bars-background-color</td><td><em>#eeeff2</em></td></tr><tr><td>--cub-elevator-list-item-bars-border-radius</td><td><em>6px</em></td></tr><tr><td>--cub-elevator-list-item-bars-text-align</td><td><em>center</em></td></tr><tr><td>--cub-elevator-list-item-bars-z-index</td><td><em>1</em></td></tr><tr><td>--cub-elevator-list-item-bars-inner-item-padding</td><td><em>3px</em></td></tr><tr><td>--cub-elevator-list-item-bars-inner-item-font-size</td><td><em>10px</em></td></tr><tr><td>--cub-elevator-list-fixed-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-elevator-list-fixed-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-elevator-list-fixed-box-shadow</td><td><em>0 0 10px #eee</em></td></tr><tr><td>--cub-elevator-list-item-bars-inner-item-active-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>',13),w={},C="",B=r({__name:"doc.taro",setup(y,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(v,f)=>{const t=p("demo-block");return i(),h("div",d,[j,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWxldmF0b3IgOmluZGV4LWxpc3Q9ImRhdGFMaXN0IiA6aGVpZ2h0PSIyNjAiIEBjbGljay1pdGVtPSLFDEl0ZW3KGMRDyBnEDCI+PC/MZj4KPC/qAIM8c2NyaXB0IGxhbmc9InRzIuQAlmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclUKMgfICDoAOs6IFvJFCDJP8YBdGl0bGU6ICdBJyzNGOQBLc440jzEAW5hbcQ/5a6J5b69z0TEAWlkOiAxzxZ9zRBdyw59zEH2AKlC/wCp1DzEAegAqYyX5Lqs9wCpMv8Aqcsa/wCpOiAnR/8AqdQ8xAHoAKm5v+ilv/cAqTPPFu0Aj99Xv+S4nNdXNP8BAMsa/wEAOiAnSP8BANQ8xAHnAKnmuZbljZf3AKk1/wEA3leM2Fc2/wEA1BrIFn0pOwrtA5npBEQgPSAoa2V5OiBzdHJpbmcsIOQEZDogYW55KSA9PusAq8Q4b2xlLmxvZ8QxLCBKU09OLsY2aWZ5KMQ4KSnkBCDFcdVw5ASbz3HeZtNQcmV0dXJuIHsgLi4u5gShKOUEZiksx2V0ZW3IC8VwfcZE5AEVfTsKPC/mBP0+Cg=="},{default:l(()=>[m]),_:1}),o,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWxldmF0b3IKICAgIDppbmRleC1saXN0PSJkYXRhTGlzdDIixhxoZWlnaHQ9IjIyMMcSYWNjZXB0S2V5PSLJC8YbQGNsaWNrLWl0ZW09IsUMSXRlbc4cxGvIHcQMxB4+PC/sAJU+Cjwv6gCyPHNjcmlwdCBsYW5nPSJ0cyLkAMVpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QCNc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOkA6TogJ251bScsyRrpATA6IFvJFSDJWsYBbnVtOiAn5LiAyznEAeQBc8440jzFQGFtZTogJ+WMl+S6rM9ExAFpZDogMc8WfdAn2VfkuIrmtbfXVzLfV9pX5rex5Zyz11cz31faV+W5v+W3ntdXNN9X2lfmna3aVzXQV80QXcsOzXHObecCBbqM/wIF1DzFQOcAqYiQ6YO99wCpNv8BANpX6KW/5a6J11c331faV+Wkqea0pddXON9X2lfmrabmsfgArjnfV9pX6ZW/5rKZ11cxMN9Y21iHjeW6hthY/wO621joi4/6ArUx/wO721jljfwEafEDvP8DDscB9gUT8AHF/wMOykDrAreB+ACq/wQP21jlhbD7AVrxBBDfWMpY55+z5a625bqE2Fv/A8LcW6em55qH5bKb2Fv/A8bbW+Wkp+i/+QEO/wPH3FiTiOWwlOa7qNhb/wPL21vkA8uY+AR5Mv8Dy9tY5aSq5Y6f2FjxA8v6AxvJDMgWfSk7CscL5giQ6QlCID0gKGvkCHxzdHJpbmcsIOQJYjogYW55KSA9PusArMQ4b2xlLmxvZ8QxLCBKU09OLsY2aWZ5KMQ4KSnkCRfFcdVw5AmVz3HeZtNQcmV0dXJuIHsgLi4u5gmYKOUJXSksx2V0ZW3IC8VwfcZE5AEVfTsKPC/mCfQ+Cg=="},{default:l(()=>[g]),_:1}),u,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWxldmF0b3IKICAgIDppbmRleC1saXN0PSJkYXRhTGlzdDMixxxzLXN0aWNreT0idHJ1ZccWaGVpZ2h0PSIyMjDGEkBjbGljay1pdGVtPSLFDEl0ZW3OHMRmyB3EDMQePjwv7ACQPgo8L+oArTxzY3JpcHQgbGFuZz0idHMi5ADAaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+UAjXNldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclUKMgfICDpARE6IFvJFSDJQMYBdGl0bGU6ICdBJyzNGOQBVM440jzEAW5hbcQ/5a6J5b69z0TEAWlkOiAxzxZ9zRBdyw59zEH2AKlC/wCp1DzEAegAqYyX5Lqs9wCpMv8Aqcsa/wCpOiAnQ/8AqdQ8xAHnAKnph43luob3AKkz/wCpyxr/AKk6ICdG/wCp1DzEAecAqeemj+W7uvcAqTT/AKnLGv8AqTogJ0f/AKnUPMQB6AH7ub/opb/3AKk1zxbtAI/fV7/kuJzXVzbfV9pX55SY6IKD11c331faV+i0teW3ntdXOP8Brssa/wGuOiAnSP8BrtQ8xAHnAKnmuZbljZf3AKk5/wEA3leM2FcxMN9Y21i1t/oArzHxBQLfWMtYsrP7ALDxBLHfWM5Y+gCw8QRg31jKWOm7kem+meaxn9hb/wQS/wJkxwHoAmRK/wJk1DzEAegDu5CJ5p75AQX/BBPbWOaxn+iLj9hY/wQU31j5BMIx8QQV/wFaxwH2AVpM/wFa1DzEAegEZ7695a6B+ACq/wRoyw7KGsgWfSk7CscL5gkC6Qm0ID0gKGtleTogc3RyaW5nLCDkCdQ6IGFueSkgPT7rAKzEOG9sZS5sb2fEMSwgSlNPTi7GNmlmeSjEOCkp5AmJxXHVcOQKB89x3mbTUHJldHVybiB7IC4uLuYKCijlCc8pLMdldGVtyAvFcH3GROQBFX07Cjwv5gpmPgo="},{default:l(()=>[b]),_:1}),A,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWxldmF0b3IgOmluZGV4LWxpc3Q9ImRhdGFMaXN0IiA6aGVpZ2h0PSIyNjAiIEBjbGljay1pdGVtPSLFDEl0ZW3KGMRDyBnEDCLEaCAgyXcgdi1zbG90OmRlZmF1bHQ9IsQOUHJvcHPHKiAgPEpkIHdpZHRoPSIxMnB4Ij48L0pkyR1zcGFuIDpzdHlsZT0ie21hcmdpbkxlZnQ6ICcxNXB4J30iPnt7IMlWLuQAqi5uYW1lIH19PC/EPsZLPC/tAQov7AELPgrMHjxzY3JpcHQgbGFuZz0idOYAqWltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnO8wqSmTJHEBjdWJmZS9pY29ucy12dWUtdGFyb8UuZXjFLucBHyB75QCsY29tcG9uZW50czrHEiAgSmTFCX0sxQdzZXR1cCgpyR7EWXQgc3TkAXI96QCkKMgfICDoAeA6IFvJFCDJP8YBdGl0bGU6ICdBJ8ZlyAHkAiLOONI8xAHkAXY6ICflronlvr3PRMQBaWQ6IDHPFn3NEF3LDucA6sYB9gCpQv8AqdQ8xAHoAKmMl+S6rPcAqTL/AKnLGv8AqTogJ0f/AKnUPMQB6ACpub/opb/3AKkzzxbtAI/EAdxX5Lic11c0/wEAyxr/AQA6ICdI/wEA1DzEAecAqea5luWNl/cAqTX/AQDeV4zYVzb/AQDUGsgWfSk7Cu0DmekFOSA9IChrZXk6IHN0cmluZywg5ASvOiBhbnkpID0+6wCrxDhvbGUubG9nxDEsIEpTT04uxjZpZnkoxDgpKeQEQsVx1XDkBZDPcd5m01ByZXR1cm4geyAuLi7mBPEo5QRmKSzHZXRlbcgLxXB9xkTkARV9Owo8L+YFTT4K"},{default:l(()=>[k]),_:1}),x])}}});export{B as default,C as excerpt,w as frontmatter};
