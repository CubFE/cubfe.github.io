import{d as r,r as p,b as i,k as n,w as l,aq as e,e as a,o as h,l as s}from"./style_icon.js";const d={class:"markdown-body"},j=e(`<h1>Elevator</h1><h3>Intro</h3><p>It is used to quickly locate the list and display the index</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Elevator</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Elevator</span>);
</code></pre><h3>Basic Usage</h3>`,6),o=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'AnHui'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'G'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GuangXi'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GuangDong'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'H'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HuNan'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HuBei'"),s(`,
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
`)])],-1),m=a("h3",null,"Custom index",-1),g=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-string"},"'One'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ShangHai'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ShenZhen'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GuangZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HangZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-string"},"'Two'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ChengDu'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'XiAn'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'TianJin'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'WuHan'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ChangSha'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"10"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ChongQin'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"11"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'SuZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"12"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'NanJing'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"13"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-string"},"'Three'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'XiNing'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"14"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'LanZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"15"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ShiJiaZhuang'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"16"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'QinHuangDao'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"17"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'DaLian'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"18"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HaErBin'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"19"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ChangChun'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"20"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'TaiYuan'"),s(`,
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
`)])],-1),u=a("h3",null,"Index ceiling",-1),b=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'AnHui'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'ChongQin'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'F'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'FuJian'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'G'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GuangXi'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GuangDong'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GanSu'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GuiZhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'H'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HuNan'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HuBei'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"10"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HaiNan'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"11"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HeBei'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"12"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HeNan'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"13"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HeiLongJiang'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"14"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'J'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'JiLin'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"15"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'JiangSu'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"16"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'JiangXi'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"17"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'L'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'LiaoNing'"),s(`,
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
`)])],-1),v=a("h3",null,"Custom Content",-1),k=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-elevator"),s(),a("span",{class:"hljs-attr"},":index-list"),s("="),a("span",{class:"hljs-string"},'"dataList"'),s(),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"260"'),s(" @"),a("span",{class:"hljs-attr"},"click-item"),s("="),a("span",{class:"hljs-string"},'"clickItem"'),s(" @"),a("span",{class:"hljs-attr"},"click-index"),s("="),a("span",{class:"hljs-string"},'"clickIndex"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:default"),s("="),a("span",{class:"hljs-string"},'"slotProps"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Jd"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"12px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Jd"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ marginLeft: '15px' }"`),s(">")]),s("{{ slotProps.item.name }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-elevator"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Jd"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
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
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'AnHui'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'BeiJing'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'G'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GuangXi'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'GuangDong'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'H'"),s(`,
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HuNan'"),s(`,
              `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'HuBei'"),s(`,
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
`)])],-1),f=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>height</td><td>Height of elevator area</td><td>number | string</td><td><code class="">200px</code></td></tr><tr><td>accept-key</td><td>Index key value</td><td>string</td><td><code class="">title</code></td></tr><tr><td>index-list</td><td>Index list</td><td>Array（<code class="">item</code> needs to contain <code class="">id</code> and <code class="">name</code> attributes, and <code class="">name</code> supports passing in <code class="">html</code> structure）</td><td><code class="">[{id: 0, name: &#39;&#39;}]</code></td></tr><tr><td>is-sticky</td><td>Whether the index is ceiling</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>space-height</td><td>Up and down spacing of right anchor point</td><td>number</td><td><code class="">23</code></td></tr><tr><td>title-height</td><td>Height of left index</td><td>number</td><td><code class="">35</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Customize the contents of each data under the left index</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click-item</td><td>Click content</td><td><code class="">key: string, item: { id: 0, name: &#39;&#39; }</code></td></tr><tr><td>click-index</td><td>Click index</td><td><code class="">key: string</code></td></tr><tr><td>change</td><td>Change index</td><td><code class="">index: number</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>scrollTo</td><td>Scroll to the location of the corresponding index</td><td><code class="">index:number</code></td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-elevator-list-item-highcolor</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-elevator-list-item-font-size</td><td><em>12px</em></td></tr><tr><td>--cub-elevator-list-item-font-color</td><td><em>#333333</em></td></tr><tr><td>--cub-elevator-list-item-name-padding</td><td><em>0 20px</em></td></tr><tr><td>--cub-elevator-list-item-name-height</td><td><em>30px</em></td></tr><tr><td>--cub-elevator-list-item-name-line-height</td><td><em>30px</em></td></tr><tr><td>--cub-elevator-list-item-code-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-elevator-list-item-code-font-color</td><td><em>#1a1a1a</em></td></tr><tr><td>--cub-elevator-list-item-code-font-weight</td><td><em>500</em></td></tr><tr><td>--cub-elevator-list-item-code-padding</td><td><em>0 20px</em></td></tr><tr><td>--cub-elevator-list-item-code-height</td><td><em>35px</em></td></tr><tr><td>--cub-elevator-list-item-code-line-height</td><td><em>35px</em></td></tr><tr><td>--cub-elevator-list-item-code-after-width</td><td><em>100%</em></td></tr><tr><td>--cub-elevator-list-item-code-after-height</td><td><em>1px</em></td></tr><tr><td>--cub-elevator-list-item-code-after-bg-color</td><td><em>#f5f5f5</em></td></tr><tr><td>--cub-elevator-list-item-code-current-box-shadow</td><td><em>0 3px 3px 1px rgba(240, 240, 240, 1)</em></td></tr><tr><td>--cub-elevator-list-item-code-current-bg-color</td><td><em>#fff</em></td></tr><tr><td>--cub-elevator-list-item-code-current-border-radius</td><td><em>50%</em></td></tr><tr><td>--cub-elevator-list-item-code-current-width</td><td><em>45px</em></td></tr><tr><td>--cub-elevator-list-item-code-current-height</td><td><em>45px</em></td></tr><tr><td>--cub-elevator-list-item-code-current-line-height</td><td><em>45px</em></td></tr><tr><td>--cub-elevator-list-item-code-current-position</td><td><em>absolute</em></td></tr><tr><td>--cub-elevator-list-item-code-current-right</td><td><em>60px</em></td></tr><tr><td>--cub-elevator-list-item-code-current-top</td><td><em>50%</em></td></tr><tr><td>--cub-elevator-list-item-code-current-transform</td><td><em>translateY(-50%)</em></td></tr><tr><td>--cub-elevator-list-item-code-current-text-align</td><td><em>center</em></td></tr><tr><td>--cub-elevator-list-item-bars-position</td><td><em>absolute</em></td></tr><tr><td>--cub-elevator-list-item-bars-right</td><td><em>8px</em></td></tr><tr><td>--cub-elevator-list-item-bars-top</td><td><em>50%</em></td></tr><tr><td>--cub-elevator-list-item-bars-transform</td><td><em>translateY(-50%)</em></td></tr><tr><td>--cub-elevator-list-item-bars-padding</td><td><em>15px 0</em></td></tr><tr><td>--cub-elevator-list-item-bars-background-color</td><td><em>#eeeff2</em></td></tr><tr><td>--cub-elevator-list-item-bars-border-radius</td><td><em>6px</em></td></tr><tr><td>--cub-elevator-list-item-bars-text-align</td><td><em>center</em></td></tr><tr><td>--cub-elevator-list-item-bars-z-index</td><td><em>1</em></td></tr><tr><td>--cub-elevator-list-item-bars-inner-item-padding</td><td><em>3px</em></td></tr><tr><td>--cub-elevator-list-item-bars-inner-item-font-size</td><td><em>10px</em></td></tr><tr><td>--cub-elevator-list-fixed-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-elevator-list-fixed-bg-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-elevator-list-fixed-box-shadow</td><td><em>0 0 10px #eee</em></td></tr><tr><td>--cub-elevator-list-item-bars-inner-item-active-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>',13),C={},w="",H=r({__name:"doc.en-US",setup(x,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(y,A)=>{const t=p("demo-block");return h(),i("div",d,[j,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWxldmF0b3IgOmluZGV4LWxpc3Q9ImRhdGFMaXN0IiA6aGVpZ2h0PSIyNjAiIEBjbGljay1pdGVtPSLFDEl0ZW3KGMRDyBnEDCI+PC/MZj4KPC/qAIM8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CmV4xShkZWZhdWx0IHsKICBzZXR1cCgpxQwgIGNvbnN0IHN0YXRlID3JTijGHSAg6ADhOiBbxxIgxznGAXRpdGxlOiAnQScsyxbkAR3MMtA2xAFuYW3FOW5IdWnNPcQBaWQ6IDHNFH3LDl3JDH3KOfQAlkL/AJb5AJZCZWlKaW5n9QCYMv8AmMUW/gCYR/8AmPkAmEd1YW5nWPYBMDPNFOsAgt9QZ0Rv9wDqNP8A6sUW/gDqSP8A6vkAmkh1TmFu9QCWNf8A6NZOQmX2ATY2/wDkzBbGEn0pOwrrAzvpA94gPSAoa2V5OiBzdHJpbmcsIOQD/jogYW55KSA9PukAmsQ2b2xlLmxvZ8QvLCBKU09OLsY0aWZ5KMQ2KSk7xmvTauQEL89r3GDPSnJldHVybiB7IC4uLuYEMSjlA/wpLMdfdGVtyAvFan3EQH0KfTsKPC/mBIc+Cg=="},{default:l(()=>[o]),_:1}),m,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWxldmF0b3IKICAgIDppbmRleC1saXN0PSJkYXRhTGlzdDIixhxoZWlnaHQ9IjIyMMcSYWNjZXB0S2V5PSLJC8YbQGNsaWNrLWl0ZW09IsUMSXRlbc4cxGvIHcQMxB4+PC/sAJU+Cjwv6gCyPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwpleMUoZGVmYXVsdCB7CiAgc2V0dXAoKcUMICBjb25zdCBzdGF0ZSA9yU4oxh0gIOkA3zogJ251bScsxxjpASQ6IFvHEyDHUsYBbnVtOiAnT25lyTPEAeQBYcwy0DbFOmFtZTogJ0JlaUppbmfNP8QBaWQ6IDHNFH3OI9dQU2hhbmdIYWnVUTLfUdZRZW5aaGVu1VEz31HNAcdRR3VhbmdaaG911VI031LUUkjcUTXOUcsOXckMy2fMY+YB3VR3b/8B3fkAmUNoZW5nRPYAmDb/AOnNAcdQWGlB9gGIN99N1E1UaWFuSmnWUDjfUNRQV3VIYdZOOd9O1E5D5ALIU2hh1VExMN9SzQHJUm9uZ1H3APEx/wNs1VJTdfkCdjH/A2vVUE7lAZH3BAzvA2v/Asj0AshocmX/BKf8AnpO+QCa/wOz1VBMYW76ATzvA7PfUcZRU2hpSmlhWmjkBF3WVv8DcdVWUWluSMRSRGHuBATJVf8Dec4yx1VEYUxp9wMqMf8DedVQSGFFckL4Atj/A3zVUeUDfENoddZTMv8Dfc4yx1NUYWlZdfcA9TLvA3z2AtvHCsYSfSk7CsUJ5gfY6QiCID0gKGvkB8ZzdHJpbmcsIOQIojogYW55KSA9PukAncQ2b2xlLmxvZ8QvLCBKU09OLsY0aWZ5KMQ2KSk7xmvTauQIz89r3GDPSnJldHVybiB7IC4uLuYIzijlCJkpLMdfdGVtyAvFan3EQH0KfTsKPC/mCSQ+Cg=="},{default:l(()=>[g]),_:1}),u,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWxldmF0b3IKICAgIDppbmRleC1saXN0PSJkYXRhTGlzdDMixxxzLXN0aWNreT0idHJ1ZccWaGVpZ2h0PSIyMjDGEkBjbGljay1pdGVtPSLFDEl0ZW3OHMRmyB3EDMQePjwv7ACQPgo8L+oArTxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKZXjFKGRlZmF1bHQgewogIHNldHVwKCnFDCAgY29uc3Qgc3RhdGUgPclOKMYdICDpAQc6IFvHEyDHOsYBdGl0bGU6ICdBJyzLFuQBRMwy0DbEAW5hbcU5bkh1ac09xAFpZDogMc0UfcsOXckMfco59ACWQv8AlvkAlkJlaUppbmf1AJgy/wCYxRb+AJhD/wCY+QCYQ2hvbmdRaW71AJkz/wCZxRb+AJlG/wCZ+QCZRnVKaWH2AJc0/wCXxRb+AJdH/wCX+QCXR3VhbmdY9gJgNc0U6wCC31BnRG/3Aho231LVUmFuU3XVTjffTs0ByE51aVpob9ZQOP8BiMUW/gGISP8BiPkAmEh1TvcCHjn/AObWTkJl9wQ0MN9PzQHIT2Fp+ACeMe8Ehd9Qx1Bl+QCf7wQ830/IT/kAnu8D8t9PyE9pTG9uZ+QDr/YCxjH/A7HGFv4CKUr/Ain5AJ5KaUz3BN4x/wOw109hbmf3A2Ax/wOv2lH3BFEx7wOy/wE59QE5TP8BOfkAmUxpYW9O+AazMf8D/M0WxhJ9KTsKxQnmCCLpCMwgPSAoa2V5OiBzdHJpbmcsIOQI7DogYW55KSA9PukAnsQ2b2xlLmxvZ8QvLCBKU09OLsY0aWZ5KMQ2KSk7xmvTauQJGc9r3GDPSnJldHVybiB7IC4uLuYJGCjlCOMpLMdfdGVtyAvFan3EQH0KfTsKPC/mCW4+Cg=="},{default:l(()=>[b]),_:1}),v,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWxldmF0b3IgOmluZGV4LWxpc3Q9ImRhdGFMaXN0IiA6aGVpZ2h0PSIyNjAiIEBjbGljay1pdGVtPSLFDEl0ZW3KGMRDyBnEDCLEaCAgyXcgdi1zbG90OmRlZmF1bHQ9IsQOUHJvcHPHKiAgPEpkIHdpZHRoPSIxMnB4Ij48L0pkyR1zcGFuIDpzdHlsZT0ieyBtYXJnaW5MZWZ0OiAnMTVweCcgfSI+e3sgyVgu5ACsLm5hbWUgfX08L8RAxk08L+0BDC/sAQ0+CswePHNjcmlwdCBsYW5nPSJ05ACraW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7yihKZMkaQGN1YmZlL2ljb25zLcYnZXjFJ+cBFiB7CiAgY29tcG9uZW50czrFECAgSmQKICB9LAogIHNldHVwKCnHGMRIdCBzdOQBXz3pAJEoxh0gIOgByzogW8cSIMc5xgF0aXRsZTogJ0EnxFvIAeQCB8wy0DbEAeQBVcQ5bkh1ac09xAFpZDogMc0UfcsOXckM5QDR0mDoAJZC/wCW+QCWQmVpSmluZ/UAmDL/AJjFFv4AmEf/AJj5AJhHdWFuZ1j2ATAzzRTrAILEAdxQRG/3AOo0/wDqxRb+AOpI/wDq+QCaSHVOYW71AJY1/wDo1k5CZfYBNjb/AOTMFsYSfSk7CusDO+kEyCA9IChrZXk6IHN0cmluZywg5AQ8OiBhbnkpID0+6QCaxDZvbGUubG9nxC8sIEpTT04uxjRpZnkoxDYpKTvGa9Nq5AUZz2vcYM9KcmV0dXJuIHsgLi4u5gR0KOUD/Cksx190ZW3IC8VqfcRAfQp9Owo8L+YEyj4K"},{default:l(()=>[k]),_:1}),f])}}});export{H as default,w as excerpt,C as frontmatter};
