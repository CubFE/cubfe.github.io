import{d as r,r as e,b as h,k as l,w as t,aq as c,e as a,o as j,l as s}from"./style_icon.js";const i={class:"markdown-body"},d=c(`<h1>Table 表格</h1><h3>介绍</h3><p>用于展示基础表格</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Table</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Table</span>);
</code></pre><h3>基础用法</h3>`,6),o=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"stylehead"),s(": "),a("span",{class:"hljs-string"},"'font-size:20px;color:red;font-weight:bolder;'"),s(`,
            `),a("span",{class:"hljs-attr"},"stylecolumn"),s(": "),a("span",{class:"hljs-string"},"'font-size:10px;color:blue;'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"render"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"record"),s(") =>")]),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"h"),s(`(
                `),a("span",{class:"hljs-string"},"'span'"),s(`,
                {
                  `),a("span",{class:"hljs-attr"},"style"),s(`: {
                    `),a("span",{class:"hljs-attr"},"color"),s(": record."),a("span",{class:"hljs-property"},"sex"),s(" === "),a("span",{class:"hljs-string"},"'女'"),s(" ? "),a("span",{class:"hljs-string"},"'blue'"),s(" : "),a("span",{class:"hljs-string"},"'green'"),s(`
                  }
                },
                record.`),a("span",{class:"hljs-property"},"sex"),s(`
              );
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'小学'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'本科'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'高中'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"是否显示边框，文字对齐",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":bordered"),s("="),a("span",{class:"hljs-string"},'"bordered"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"bordered"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"align"),s(": "),a("span",{class:"hljs-string"},"'center'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'小学'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'本科'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'高中'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"显示总结栏",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":summary"),s("="),a("span",{class:"hljs-string"},'"summary"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'小学'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"13"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'本科'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"34"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'上海'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'高中'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"summary"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
          `),a("span",{class:"hljs-keyword"},"return"),s(` {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'这是总结栏'"),s(`,
            `),a("span",{class:"hljs-attr"},"colspan"),s(": "),a("span",{class:"hljs-number"},"5"),s(`
          };
        }
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"条纹、明暗交替",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns3"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data2"'),s(),a("span",{class:"hljs-attr"},":striped"),s("="),a("span",{class:"hljs-string"},'"striped"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"striped"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
        `),a("span",{class:"hljs-attr"},"columns3"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data2"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'小学'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"13"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'本科'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"34"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'上海'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'高中'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"无数据默认展示，支持自定义",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns3"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data3"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"nodata"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"no-data"'),s(">")]),s(" 这里是自定义展示 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [],
        `),a("span",{class:"hljs-attr"},"columns3"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data3"),s(`: []
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"自定义单元格",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Button"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"align"),s(": "),a("span",{class:"hljs-string"},"'center'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'render'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'小学'"),s(`,
            `),a("span",{class:"hljs-attr"},"render"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"h"),s(`(
                `),a("span",{class:"hljs-title class_"},"Button"),s(`,
                {
                  `),a("span",{class:"hljs-attr"},"onClick"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
                    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'hello'"),s(`);
                  },
                  `),a("span",{class:"hljs-attr"},"size"),s(": "),a("span",{class:"hljs-string"},"'small'"),s(`,
                  `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'primary'"),s(`
                },
                `),a("span",{class:"hljs-function"},"() =>"),s(),a("span",{class:"hljs-string"},"'Hello'"),s(`
              );
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'本科'"),s(`,
            `),a("span",{class:"hljs-attr"},"render"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Dongdong"),s(", { "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'14px'"),s(", "),a("span",{class:"hljs-attr"},"height"),s(": "),a("span",{class:"hljs-string"},"'14px '"),s(` });
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'高中'"),s(`,
            `),a("span",{class:"hljs-attr"},"render"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"h"),s(`(
                `),a("span",{class:"hljs-title class_"},"Button"),s(`,
                {
                  `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
                  `),a("span",{class:"hljs-attr"},"size"),s(": "),a("span",{class:"hljs-string"},"'small'"),s(`,
                  `),a("span",{class:"hljs-attr"},"onClick"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
                    `),a("span",{class:"hljs-variable language_"},"window"),s("."),a("span",{class:"hljs-title function_"},"open"),s("("),a("span",{class:"hljs-string"},"'https://www.kakusoft.com'"),s(`);
                  }
                },
                `),a("span",{class:"hljs-function"},"() =>"),s(),a("span",{class:"hljs-string"},"'跳转到京东'"),s(`
              );
            }
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=a("h3",null,"支持异步渲染",-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"h2"),s(">")]),s("支持异步渲染(5s之后看效果)"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"h2"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [],
        `),a("span",{class:"hljs-attr"},"data1"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'小学'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"13"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'本科'"),s(`,
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"34"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'上海'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'高中'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          state.`),a("span",{class:"hljs-property"},"data"),s(" = state."),a("span",{class:"hljs-property"},"data1"),s("."),a("span",{class:"hljs-title function_"},"slice"),s(`();
        }, `),a("span",{class:"hljs-number"},"5000"),s(`);
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),G=a("h3",null,"支持排序",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" @"),a("span",{class:"hljs-attr"},"sorter"),s("="),a("span",{class:"hljs-string"},'"handleSorter"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"align"),s(": "),a("span",{class:"hljs-string"},"'center'"),s(`,
            `),a("span",{class:"hljs-attr"},"sorter"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'学历'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"sorter"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"row1: any, row2: any"),s(") =>")]),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(" row1."),a("span",{class:"hljs-property"},"age"),s(" - row2."),a("span",{class:"hljs-property"},"age"),s(`;
            }
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'小学'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"10"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'本科'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"30"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'高中'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleSorter"),s(" = ("),a("span",{class:"hljs-params"},"item: TableColumnProps"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},[s("${"),a("span",{class:"hljs-built_in"},"JSON"),s(".stringify(item)}")]),s("`")]),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        handleSorter
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>bordered</td><td>是否显示边框</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>columns</td><td>表头数据</td><td>TableColumnProps[]</td><td><code class="">[]</code></td></tr><tr><td>data</td><td>表格数据</td><td>object[]</td><td><code class="">[]</code></td></tr><tr><td>summary</td><td>是否显示简介</td><td>Function</td><td>-</td></tr><tr><td>striped</td><td>条纹是否明暗交替</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>TableColumnProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列的唯一标识</td><td>string</td><td>``</td></tr><tr><td>title</td><td>表头标题</td><td>string</td><td>``</td></tr><tr><td>stylehead</td><td>表头样式</td><td>string</td><td>``</td></tr><tr><td>stylecolumn</td><td>列样式</td><td>string</td><td>``</td></tr><tr><td>align</td><td>列的对齐方式，可选值<code class="">left</code>,<code class="">center</code>,<code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>sorter</td><td>排序，可选值有 <code class="">true</code>,<code class="">function</code>, <code class="">default</code>, 其中 <code class="">default</code>表示点击之后可能会依赖接口, <code class="">function</code>可以返回具体的排序函数, <code class="">default</code>表示采用默认的排序算法</td><td>boolean | Function | string</td><td>-</td></tr><tr><td>render</td><td>自定义渲染列数据，优先级高</td><td>Function(record)</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>sorter</td><td>点击排序按钮触发</td><td>item: 当前点击的表头的数据</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-table-border-color</td><td><em>#ececec</em></td></tr><tr><td>--cub-table-cols-padding</td><td><em>10px</em></td></tr><tr><td>--cub-table-tr-even-bg-color</td><td><em>#f3f3f3</em></td></tr><tr><td>--cub-table-tr-odd-bg-color</td><td><em>var(--cub-white)</em></td></tr></tbody></table>',11),B={},Y="",N=r({__name:"doc.taro",setup(H,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(J,z)=>{const n=e("demo-block");return j(),h("div",i,[d,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiPjwvySw+CjwvykY8c2NyaXB0IGxhbmc9InRzIsRZaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgaCB9IGZyb20gJ3Z1ZSc7CiAgZXjFLWRlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWYoyB/EIeUAxjogW8kTIMk+xgF0aXRsZTogJ+Wnk+WQjSfGacgBa2V5OiAnbmFtZc8Zc3R5bGVoZWFkOiAnZm9udC1zaXplOjIwcHg7Y29sb3I6cmVkO8UZd2VpZ2h0OmJvbGRlcjvUR+YApc1JMcpJYmx1ZTsnyzbnAQzGAfYAzOaAp+WIq89s5gDMc2V4zxhyZW5kZXI6IChyZWNvcmQpID0+z1fEJHR1cm4gaCjPGCAgJ3NwYW7PUsQB0ELEAeUA7jrVG+UBq29yOiDmAIUuc2V4ID09PSAn5aWzJyA/ICfkAQcnIDogJ2dyZWVu7AEQyAF90RTtASrGAcpfzxsp5AKE1k3/AXHlAj2tpuWOhvUBccZy7QHByQxdyjHkA2D8AqfkAoQ6ICdUb23PZnNleDogJ+eUt88YxnjkAJywj+Wtpv8CQs9nTHVjedVo5AGP12jmnKznp5HfaM9oSmFja9Vo+wDQ6auY5Lit9wFRxwp96QHP5wK6yn4uLi7mBIUo5QQ4KcgyxjHES307Cjwv5gTQPgo="},{default:t(()=>[o]),_:1}),g,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiIDpib3JkZXJlZD0iyAoiPjwvyUE+Cjwvyls8c2NyaXB0IGxhbmc9InRzIsRuaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8gIOgAtzogZmFsc2XGRsY65QDxOiBbyRMgyVfGAXRpdGxlOiAn5aeT5ZCNJ8o8xAFrZXk6ICduYW1lzxlhbGlnbjogJ2NlbnRlcifLHOcAxNxr5oCn5Yir1WtzZXjfTdBN5a2m5Y6G1U1yZWNvcmTNUMkMXcox5AIG/AEi5AD/OiAnVG9tz2ZzZXg6ICfnlLfPGMZ45ACcsI/lrab/ANHPZ0x1Y3nVaOWls9ho5pys56eR32jIAcdoSmFja9Vo+wDQ6auY5Lit9wFRxwp9KeQC58Y3dHVybst+Li4u5gMWKOUCzCnIMsYxxEt9Owo8L+YDYT4K"},{default:t(()=>[m]),_:1}),u,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiIDpzdW1tYXJ5PSLHCSI+PC/JPz4KPC/KWTxzY3JpcHQgbGFuZz0idHMixGxpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN0YXRlID3JYyjIH8Qh5QDWOiBbyRMgyT7GAXRpdGxlOiAn5aeT5ZCNJ8ZpyAFrZXk6ICduYW1lJ8sY5wCO3E7mgKfliKvVTnNleN9N0E3lrabljobVTXJlY29yZN9Q0VC5tOm+hNVQYWf/AOrSTZyw5Z2A1k1kZHJlc3PNUckMXcoy5AJs/AGj5AGAOiAnVG9tz2dzZXg6ICfnlLfPGOYBFuQAnbCP5a2mzx5hZ2U6IDEzzxXmAKzENIyX5Lqs/wEGyAHnAJtMdWN5z2bmAJzlpbP4AJzmnKznp5HPHuUAnDM0+ACc5LiK5rW3/wCc7wCcSmFja/8BOMgB6QCc6auY5Litzx7lAJz5AJvmna3lt57/AewgIOcESDogKCkgPT7tALJyZXR1cm7NEyAgdmFsdeQAxui/meaYr+aAu+e7k+agj+8Am2NvbHNwYW46IDXLF33kBFfuAIt9KcgU0W0uLi7mBJoo5QRQKcgyxjHEQX07Cjwv5gTlPgo="},{default:t(()=>[y]),_:1}),b,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJMyIgOmRhdGE9IsQGMiIgOnN0cmlwZWQ9IscJIj48L8lBPgo8L8pbPHNjcmlwdCBsYW5nPSJ0cyLEbmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3RhdGUgPcljKMgfICDnALY6IHRydWXGRMY45gDvOiBbyRQgyVbGAXRpdGxlOiAn5aeT5ZCNJ8o9xAFrZXk6ICduYW1lJ8sY5wCm3E7mgKfliKvVTnNleN9N0E3lrabljobVTXJlY29yZN9Q0VC5tOm+hNVQYWf/AOrSTZyw5Z2A1k1kZHJlc3PNUckMXcoy5QKF/AGk5AGBOiAnVG9tz2hzZXg6ICfnlLfPGOYBF+QAnrCP5a2mzx5hZ2U6IDEzzxXmAK3ENIyX5Lqs/wEHyAHnAJtMdWN5z2bmAJzlpbP4AJzmnKznp5HPHuUAnDM0+ACc5LiK5rW3/wCcyAHnAJxKYWNr/wE4yAHpAJzpq5jkuK3PHuUAnPkAm+adreW3nvcB7ccKfSnkBAPGanR1cm7rALEuLi7mBDIo5QPoKcgyxjHES307Cjwv5gR9Pgo="},{default:t(()=>[A]),_:1}),k,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiPjwvySzfOnMzzTszIsQwICDJeSAjbm/EGcYXICA8dmlldyBjbGFzcz0ibm8txnAg6L+Z6YeM5piv6Ieq5a6a5LmJ5bGV56S6IDwvxDHHVS/tAM/sAKTMGzxzY3JpcHQgbGFuZz0idHPlAJNpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7xXtzZXR1cCgpxw4gIGNvbnN0IHN05ADiPclUKMgfxCHlAR46IFvJEyDJPsYBdGl0bGU6ICflp5PlkI0nLM0da2V5OiAnbmFtZSfLGH3MJdZO5oCn5Yir1U5zZXjfTdBN5a2m5Y6G1U1yZWNvcmTfUNFQubTpvoTVUGFn/wDq0k2csOWdgNZNZGRyZXNzzVHJDF3KMuQCfjogW8sS6ALW/wG5/wG5/wG51U7/AbnfTc9N/wG5/wG501D/AbnfTc9N/wG5/wG5xAHlBGzkAbrHEn0p5AO7xAFyZXR1cm7Lei4uLuYD6ijlA68pyDLGMcRefTsKPC/mBDU+Cg=="},{default:t(()=>[I]),_:1}),f,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiPjwvySw+CjwvykY8c2NyaXB0IGxhbmc9InRzIsRZaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgaCB9IGZyb20gJ3Z1ZSc7zC1CdXR0b27JIEBjdWJ1acR4dWktdGFyb84uRG9uZ2RvbmfNMGZlL2ljb25zLXZ1Zco0ZXjFNGRlZmF1bHQgewogICAgc2V0dXAoKccOICDEN3Qgc3RhdGUgPekAuSjIH8Qh5QEZOiBbyRMgyT7GAXRpdGxlOiAn5aeT5ZCNJyzNHWtleTogJ25hbWXPGWFsaWduOiAnY2VudGVyJ8scfcwp1mvmgKfliKvVa3NleN9N0E3lrabljobVTXJlY29yZN9Q0FDmk43kvZzXUG5k7wDtyQxdyjHkAn78AXLkAU86ICdUb23PZnNleDogJ+eUt88Y5gDI5ADssI/lrabRHuQAljogKCkgPT7Pa8QedHVybiBoKM8YIOcCu85MxAHQQsQBb25DbGlja9hlxgHkAo5vbGUubG9nKCdoZWxsbycp5ALL0AHtAYXIAXNpeuQBFXNtYWxs7wDhxgF0eXDEIXByaW1hcnnsAYXZVuYArSdI5QCLzx7vAJrqAcn9AiXnAbtMdWN59QG85aWz+AG85pys56eR/wG8zBzrAbzoBDgsIHsgd2lkdGg6ICcxNHB4JywgaGVpZ2h0xxAgJyB9/wDZyQHObecA2UphY2v/ApXIAekA2emrmOS4rf8A2cwc/wKV/wKVygHnAhJzdWNjZXNz9QI1/wJW/wLZyAF3aW5kb3cub3BlbignaHR0cHM6Ly93d3cua2FrdXNvZnQuY29t9wLs/wKoxQHGfCfot7PovazliLDkuqzkuJz/ArLMWsoMXccK6gIH5wFs6gDaLi4u5gbZKOUGOSnIMsYxxEt9Owo8L+YHJD4K"},{default:t(()=>[w]),_:1}),x,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxoMj7mlK/mjIHlvILmraXmuLLmn5MoNXPkuYvlkI7nnIvmlYjmnpwpPC9oMsUxY3ViLXRhYmxlIDpjb2x1bW5zPSLHCSIgOmRhdGE9IsQGIj48L8ksPgo8L8p3PHNjcmlwdCBsYW5nPSJ0cyLEWWltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CiAgZXjFNWRlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yW4oyB/EIeUAzjogW8kTIMk+xgF0aXRsZTogJ+Wnk+WQjSfGacgBa2V5OiAnbmFtZSfLGOcAjtxO5oCn5Yir1U5zZXjfTdBN5a2m5Y6G1U1yZWNvcmTfUNFQubTpvoTVUGFn/wDq0k2csOWdgNZNZGRyZXNzzVHJDF3KMuQCZDogW88SMfwBtsdb5ACAjJfkuqzvAIDkAbI6ICdUb23PGXNleDogJ+eUt88Y5gFIxE+wj+Wtps8eYWdlOiAxM/8BGdBL5pys56eRz0vnAJpMdWN5zxrmAJvlpbPUfTM0zxXpAQDkuIrmtbf/AbXIAcd+SmFja9V++wEZ6auY5Litzx7lAJz5AJvmna3lt573Af/HCn0p5AP9xAHpBBsoKCkgPT7rALpzZXRUaW1lb3V00Rsg5gP+LuQCMSA9yw0xLnNsaWNlKMlf5AEYIDUwMDDJEsp7cmV0dXJuy1cuLi7mBLIoxVIpyDLGMeQAxn07Cjwv5gT9Pgo="},{default:t(()=>[Z]),_:1}),G,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiIEBzb3J0ZXI9ImhhbmRsZVPFDiI+PC/JQz4KPC/KXTxzY3JpcHQgbGFuZz0idHMixHBpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIH8Qh5QDLOiBbyRMgyT7GAXRpdGxlOiAn5aeT5ZCNJyzNHWtleTogJ25hbWXPGWFsaWduOiAnY2VudGVyzx3mASo6IHRydWXLGX3MJvYAheaAp+WIq89P5gCFc2V4J99Nz03lrabljobVTXJlY29yZN9Q0VC5tOm+hNVQYWfwASHoAQQocm93MTogYW55LCByb3cyxQspID0+z2UgIHJldHVybsQlMS5hZ2UgLcUwxAvkAhDKAX3LDsoMXcp/5AKw/AHy5AHPOiAnVG9t8AC0ZXg6ICfnlLfPGOYBLuQBArCP5a2mzx5hZ2U6IDEw/wFMxwHHfEx1Y3nVfeWls9h95pys56eR1H0z333PfUphY2vVffsA+umrmOS4rdR9NPYBj8cKfSk7Cu0DrewEPiA9IChpdGVtOiBU5ARAQ+UDrVByb3Bz7wIhxDtvbGUubG9nKGAke0pTT04uc3RyaW5naWZ5xUMpfWAp6AInfclz5wJTykkuLi7mBHAo5QQ1KeoA0OwAmMpI6ADVfTsKPC/mBNE+Cg=="},{default:t(()=>[v]),_:1}),C])}}});export{N as default,Y as excerpt,B as frontmatter};
