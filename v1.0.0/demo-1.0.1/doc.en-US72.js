import{d as p,r,b as h,k as l,w as t,aq as c,e as a,o as j,l as s}from"./style_icon.js";const i={class:"markdown-body"},o=c(`<h1>Table</h1><h3>Intro</h3><p>Used to display the basic table</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Table</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Table</span>);
</code></pre><h3>Basic Usage</h3>`,6),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"stylehead"),s(": "),a("span",{class:"hljs-string"},"'font-size:20px;color:red;font-weight:bolder;'"),s(`,
            `),a("span",{class:"hljs-attr"},"stylecolumn"),s(": "),a("span",{class:"hljs-string"},"'font-size:10px;color:blue;'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"render"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"record"),s(") =>")]),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"h"),s(`(
                `),a("span",{class:"hljs-string"},"'span'"),s(`,
                {
                  `),a("span",{class:"hljs-attr"},"style"),s(`: {
                    `),a("span",{class:"hljs-attr"},"color"),s(": record."),a("span",{class:"hljs-property"},"sex"),s(" === "),a("span",{class:"hljs-string"},"'woman'"),s(" ? "),a("span",{class:"hljs-string"},"'blue'"),s(" : "),a("span",{class:"hljs-string"},"'green'"),s(`
                  }
                },
                record.`),a("span",{class:"hljs-property"},"sex"),s(`
              );
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'primary school'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'woman'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'undergraduate'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'high school'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Whether to display border and align text",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"align"),s(": "),a("span",{class:"hljs-string"},"'center'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'primary school'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'woman'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'undergraduate'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'high school'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"Show summary bar",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'primary school'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"13"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'beijing'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'woman'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'undergraduate'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"34"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'shanghai'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'high school'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'hangzhou'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"summary"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
          `),a("span",{class:"hljs-keyword"},"return"),s(` {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'This is the summary column'"),s(`,
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
`)])],-1),b=a("h3",null,"Stripes, alternating light and shade",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data2"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'primary school'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"13"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'beijing'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'woman'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'undergraduate'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"34"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'shanghai'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'high school'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'hangzhou'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"No data is displayed by default, and customization is supported",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns3"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data3"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"nodata"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"no-data"'),s(">")]),s(" Here is the custom display "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
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
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [],
        `),a("span",{class:"hljs-attr"},"columns3"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
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
`)])],-1),w=a("h3",null,"Custom cell",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs, h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Button"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Dongdong"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"align"),s(": "),a("span",{class:"hljs-string"},"'center'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'operation'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'render'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'primary school'"),s(`,
            `),a("span",{class:"hljs-attr"},"render"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"h"),s(`(
                `),a("span",{class:"hljs-title class_"},"Button"),s(`,
                {
                  `),a("span",{class:"hljs-attr"},"onClick"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
                    showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'hello'"),s(`);
                  },
                  `),a("span",{class:"hljs-attr"},"size"),s(": "),a("span",{class:"hljs-string"},"'small'"),s(`,
                  `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'primary'"),s(`
                },
                `),a("span",{class:"hljs-string"},"'Hello'"),s(`
              );
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'woman'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'undergraduate'"),s(`,
            `),a("span",{class:"hljs-attr"},"render"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Dongdong"),s(", { "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'14px'"),s(", "),a("span",{class:"hljs-attr"},"height"),s(": "),a("span",{class:"hljs-string"},"'14px'"),s(` });
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'high school'"),s(`,
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
                `),a("span",{class:"hljs-string"},"'Jump to Jingdong'"),s(`
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
`)])],-1),Z=a("h3",null,"Support asynchronous rendering",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"h2"),s(">")]),s("Support asynchronous rendering(See the effect after 5S)"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"h2"),s(">")]),s(`
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
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [],
        `),a("span",{class:"hljs-attr"},"data1"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'beijing'"),s(`,
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'primary school'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"13"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'undergraduate'"),s(`,
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'woman'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"34"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'shanghai'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'high school'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'hangzhou'"),s(`
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
`)])],-1),B=a("h3",null,"Support sorting",-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-table"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" @"),a("span",{class:"hljs-attr"},"sorter"),s("="),a("span",{class:"hljs-string"},'"handleSorter"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"columns"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"align"),s(": "),a("span",{class:"hljs-string"},"'center'"),s(`,
            `),a("span",{class:"hljs-attr"},"sorter"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'education'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'record'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"sorter"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"row1: any, row2: any"),s(") =>")]),s(` {
              `),a("span",{class:"hljs-keyword"},"return"),s(" row1."),a("span",{class:"hljs-property"},"age"),s(" - row2."),a("span",{class:"hljs-property"},"age"),s(`;
            }
          }
        ],
        `),a("span",{class:"hljs-attr"},"data"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Tom'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'primary school'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"10"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Lucy'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'woman'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'undergraduate'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"30"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jack'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'man'"),s(`,
            `),a("span",{class:"hljs-attr"},"record"),s(": "),a("span",{class:"hljs-string"},"'high school'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleSorter"),s(" = ("),a("span",{class:"hljs-params"},"item: TableColumnProps"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},[s("${"),a("span",{class:"hljs-built_in"},"JSON"),s(".stringify(item)}")]),s("`")]),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        handleSorter
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>bordered</td><td>Show border</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>columns</td><td>Header data</td><td>TableColumnProps[]</td><td><code class="">[]</code></td></tr><tr><td>data</td><td>Table data</td><td>object[]</td><td><code class="">[]</code></td></tr><tr><td>summary</td><td>Show profile</td><td>Function</td><td>-</td></tr><tr><td>striped</td><td>Whether the stripes alternate light and dark</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>TableColumnProps</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>key</td><td>Unique identification of the column</td><td>string</td><td>``</td></tr><tr><td>title</td><td>Header title</td><td>string</td><td>``</td></tr><tr><td>stylehead</td><td>Header style</td><td>string</td><td>``</td></tr><tr><td>stylecolumn</td><td>Column style</td><td>string</td><td>``</td></tr><tr><td>align</td><td>Alignment of columns, optional values<code class="">left</code>,<code class="">center</code>,<code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>sorter</td><td>sort，optional values <code class="">true</code>,<code class="">function</code>, <code class="">default</code>, Where <code class="">default</code> means that you may depend on the interface after clicking, <code class="">function</code> you can return a specific sorting function, <code class="">default</code> indicates that the default sorting algorithm is adopted</td><td>boolean | Function | string</td><td>-</td></tr><tr><td>render</td><td>Custom render column data, high priority</td><td>Function(record)</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>sorter</td><td>Click the sort button to trigger</td><td>item: Data of the currently clicked header</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--cub-table-border-color</td><td><em>#ececec</em></td><td>-</td></tr><tr><td>--cub-table-cols-padding</td><td><em>10px</em></td><td>-</td></tr><tr><td>--cub-table-tr-even-bg-color</td><td><em>#f3f3f3</em></td><td>-</td></tr><tr><td>--cub-table-tr-odd-bg-color</td><td><em>var(--cub-white)</em></td><td>-</td></tr></tbody></table>',11),J={},R="",V=p({__name:"doc.en-US",setup(C,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(Y,v)=>{const n=r("demo-block");return j(),h("div",i,[o,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiPjwvySw+CjwvykY8c2NyaXB0IGxhbmc9InRzIsRZaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgaCB9IGZyb20gJ3Z1ZSc7CiAgZXjFLWRlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWYoyB/EIeUAxjogW8kTIMk+xgF0aXRsZTogJ25hbWUnxmfIAWtledYZc3R5bGVoZWFkOiAnZm9udC1zaXplOjIwcHg7Y29sb3I6cmVkO8UZd2VpZ2h0OmJvbGRlcjvUR+YAo81JMcpJYmx1ZTsnyzbnAQrGAfYAynNleM9p5gDJ0hhyZW5kZXI6IChyZWNvcmQpID0+z1TEJHR1cm4gaCjPGCAgJ3NwYW7PUsQB0ELEAeUA6zrVG+UBpm9yOiDmAIUuc2V4ID09PSAnd29tYW4nID8gJ+QBBicgOiAnZ3JlZW7sAQ/IAX3RFO0BKcYBymHPGynkAoHWTf8BcOQBcGVkdWNhdGlv8AEM5gF2xnXtAcPJDF3KMeQDYPwCp+QChjogJ1Rvbc9mc2V4OiAn5AEqzhjGeDogJ3ByaW1hcnkgc2Nob29s/wJMz29MdWN51XDmAZzXcnXkAlZncmFkdWF0Zd9xz3FKYWNr1XHbb2hpZ2j0AN7JDF3HCn3pAejnAtXqAIMuLi7mBJso5QROKcgyxjHES307Cjwv5gTmPgo="},{default:t(()=>[d]),_:1}),g,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiIDpib3JkZXJlZD0iyAoiPjwvyUE+Cjwvyls8c2NyaXB0IGxhbmc9InRzIsRuaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBzdGF0ZSA9yWMoyB8gIOgAtzogZmFsc2XGRsY65QDxOiBbyRMgyVfGAXRpdGxlOiAnbmFtZSfKOsQBa2V51hlhbGlnbjogJ2NlbnRlcifLHOcAwtxpc2V41WjEGN9Kz0plZHVjYXRpb27VUHJlY29yZM1TyQxdyjHkAgT8ASDkAP86ICdUb23PZnNleDogJ21h0H7GeDogJ3ByaW1hcnkgc2Nob29s/wDcz29MdWN51XB3b9tydW5kZXJncmFkdWF0Zd9xyAHHcUphY2vVcdtvaGlnaPQA3skMXccKfSnkAvvGPHR1cm7rAIMuLi7mAyoo5QLgKcgyxjHES307Cjwv5gN1Pgo="},{default:t(()=>[m]),_:1}),u,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiIDpzdW1tYXJ5PSLHCSI+PC/JPz4KPC/KWTxzY3JpcHQgbGFuZz0idHMixGxpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN0YXRlID3JYyjIH8Qh5QDWOiBbyRMgyT7GAXRpdGxlOiAnbmFtZSfGZ8gBa2V5yBnLGOcAjNxMc2V41UvEGN9Kz0plZHVjYXRpb27VUHJlY29yZN9T0FNhZ/YA6MQY30rQSmRkcmVzc9ZOxxzMUskMXcoy5AJo/AGf5AF+OiAnVG9tz2dzZXg6ICdtYfABGuYBFDogJ3ByaeQCsiBzY2hvb2zPJmFnZTogMTPPFeYAtDogJ2JlaWppbmf/ARDIAecApEx1Y3nPZ+YApXdv+wCndW5kZXJncmFkdWF08AGZ5QCmMzT4AKZzaGFuZ2hhaf8Ap+8Ap0phY2v/AUzIAekApWhpZ2j7AUn5AKLkAKF6aG91/wIHICDnBF86ICgpID0+7QC5cmV0dXJuzRMgIHZhbHXlAhhoaXMgaXMgdGhlyETnA/XvAKhjb2xzcGFuOiA1yxd95AR57gCWfSnIFNF4Li4u5gS8KOUEcinIMsYxxEF9Owo8L+YFBz4K"},{default:t(()=>[y]),_:1}),b,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJMyIgOmRhdGE9IsQGMiIgOnN0cmlwZWQ9IscJIj48L8lBPgo8L8pbPHNjcmlwdCBsYW5nPSJ0cyLEbmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHsKICAgIHByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3RhdGUgPcljKMgfICDnALY6IHRydWXGRMY45gDvOiBbyRQgyVbGAXRpdGxlOiAnbmFtZSfKO8QBa2V5yBnLGOcApNxMc2V41UvEGN9Kz0plZHVjYXRpb27VUHJlY29yZN9T0FNhZ/YA6MQY30rQSmRkcmVzc9ZOxxzMUskMXcoy5QKB/AGg5AF/OiAnVG9tz2hzZXg6ICdtYfABG+YBFTogJ3ByaW1hcnkgc2Nob29szyZhZ2U6IDEzzxXmALU6ICdiZWlqaW5n/wERyAHnAKRMdWN5z2fmAKV3b/sAp3VuZGVyZ3JhZHVhdPABmuUApjM0+ACmc2hhbmdoYWn/AKfIAecAp0phY2v/AUzIAekApWhpZ2j7AUn5AKLkAKF6aG919wIIxwp9KeQEGsZxdHVybusAuC4uLuYESSjlA/8pyDLGMcRLfTsKPC/mBJQ+Cg=="},{default:t(()=>[A]),_:1}),k,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiPjwvySzfOnMzzTszIsQwICDJeSAjbm/EGcYXICA8ZGl2IGNsYXNzPSJuby3GbyBIZXJlIGlzIHRoZSBjdXN0b20gZGlzcGxheSA8L2RpdsdVL+0Az+wApMwbPHNjcmlwdCBsYW5nPSJ0c+UAk2ltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHvFe3NldHVwKCnHDiAgY29uc3Qgc3TkAOI9yVQoyB/EIeUBHjogW8kTIMk+xgF0aXRsZTogJ25hbWUnLM0ba2V5yBnLGH3MJdZMc2V41UvEGN9Kz0plZHVjYXRpb27VUHJlY29yZN9T0FNhZ/YA6MQY30rQSmRkcmVzc9ZOxxzMUskMXcoy5AJ7OiBbyxLoAtL/AbX/AbX/AbXTTP8Btd9KzEr/AbX/AbXVU/8Btd9KzUr/AbX/AbXFAeUEZOQBtscSfSnkA7PEAXJldHVybst7Li4u5gPiKOUDpynIMsYxxF59Owo8L+YELT4K"},{default:t(()=>[I]),_:1}),w,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiPjwvySw+CjwvykY8c2NyaXB0IGxhbmc9InRzIsRZaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcywgaCB9IGZyb20gJ3Z1ZSc7zC1CdXR0b27JIEBjdWJ1acR4dWnOKURvbmdkb25nzStmZS9pY29ucy3IWGV4xS9kZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgxDJ0IHN0YXRlID3pAK8oyB/EIeUBDzogW8kTIMk+xgF0aXRsZTogJ25hbWUnLM0ba2V51hlhbGlnbjogJ2NlbnRlcifLHH3MKdZpc2V41WjEGN9Kz0plZHVjYXRpb27VUHJlY29yZN9T0FNvcGVy3FNuZO8A8MkMXcox5AJ1/AFz5AFSOiAnVG9tz2ZzZXg6ICdtYdB+5gDLOiAncHJpbWFyeSBzY2hvb2zRJuQAnjogKCkgPT7Pc8QedHVybiBoKM8YIOcCus5MxAHQQsQBb25DbGlja9hlxgFzaG93VG9hc3QudGV4dCgnaGVsbG8nKeQC19AB7QGTyUBpeuUCKW1hbPAA5MYBdHlwxCHnAQ7sAZDZVidI5QCFzxjvAJTqAc79Ai3nAcBMdWN59QHBd2/7AcN15AGlZ3JhZHVhdPADWP8BwugBwugEQiwgeyB3aWR0aDogJzE0cHgnLCBoZWlnaHTIECB9/wDhyQHObOcA4UphY2v/AqLIAekA32hpZ2j/Ap//Ap/OGP8Cn88B5wIZc3VjY2Vzc/UCPP8CXf8C48gBd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3Lmtha3Vzb2Z0LmNvbfcC8/8Cr8UBJ0p1bXAgdG8gSmnmAez/ArrMVcoMXccK6gIH5wFn6gDVLi4u5gbdKOUGRynIMsYxxEt9Owo8L+YHKD4K"},{default:t(()=>[f]),_:1}),Z,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxoMj5TdXBwb3J0IGFzeW5jaHJvbm91cyByZW5kZXJpbmcoU2VlIHRoZSBlZmZlY3QgYWZ0ZXIgNVMpPC9oMsVDY3ViLXRhYmxlIDpjb2x1bW5zPSLHCSIgOmRhdGE9IsQGIj48L8ksPgo8L+oAiTxzY3JpcHQgbGFuZz0idHMixFlpbeUAl3sgcmVhY3RpdmUsIHRvUmVmcywgb25Nb3VudGVkIH0gZnJvbSAndnVlJzsKICBleMU1ZGVmYXVsdCB7CiAgICBwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IHN0YXRlID3JbijIH8Qh5QDOOiBbyRMgyT7GAXRpdGxlOiAnbmFtZSfGZ8gBa2V5yBnLGOcAjNxMc2V41UvEGN9Kz0plZHVjYXRpb27VUHJlY29yZN9T0FNhZ/YA6MQY30rQSmRkcmVzc9ZOxxzMUskMXcoy5AJgOiBbzxIx/AGyx1s6ICdiZWlqaW5n7wCB5AGxOiAnVG9tzxlzZXg6ICdtYfABTeYBRzogJ3ByaW1hcnkgc2Nob29szyZhZ2U6IDEz/wEj0FN15AOOZ3JhZHVhdPABeOcAqUx1Y3nPGuYAqndv8gCs5QCGMzTPFekBEnNoYW5naGFp/wHKyAHnAIJKYWNr/wEsyAHpANloaWdo+wEp+QCi5AChemhvdfcCGscKfSnkBBTEAekEMigoKSA9PusAwXNldFRpbWVvdXTRGyDmBBUu5AJMID3LDTEuc2xpY2UoyV/kAR8gNTAwMMkSyntyZXR1cm7LVy4uLuYEySjFUinIMsYx5ADGfTsKPC/mBRQ+Cg=="},{default:t(()=>[x]),_:1}),B,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFibGUgOmNvbHVtbnM9IscJIiA6ZGF0YT0ixAYiIEBzb3J0ZXI9ImhhbmRsZVPFDiI+PC/JQz4KPC/KXTxzY3JpcHQgbGFuZz0idHMixHBpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzvMKnNob3dUb2FzdMkjQGN1YnVpxHh1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA96QCzKMgfxCHlASo6IFvJEyDJPsYBdGl0bGU6ICduYW1lJyzNG2tledYZYWxpZ246ICdjZW50ZXLPHeYBhzogdHJ1ZcsZfcwm9gCDc2V4z0zmAILEGN9Kz0plZHVjYXRpb27VUHJlY29yZN9T0FNhZ/YBH9IY6AEBKHJvdzE6IGFueSwgcm93MsULKSA9Ps9iICByZXR1cm7EJTEuYWdlIC3FMMQL5AILygF9yw7KDF3Kf+QDCvwB7eQBzDogJ1RvbfAAtGV4OiAnbWHwATHmASs6ICdwcmltYXJ5IHNjaG9vbM8mYWdlOiAxMP8BUccB5wCETHVjec9H5gCFd2/7AId1bmRlcmdyYWR1YXTxApbkAIYz/wCG7wCGSmFja/8BC8gB6QCEaGlnaPsBCDT2AaXHCn0pOwrtA77sBK4gPSAoaXRlbTogVOQEsEPlA75Qcm9wc+8CN+kEdC50ZXh0KGAke0pTT04uc3RyaW5naWZ5xUYpfWAp6AJAfcl25wJsykwuLi7mBOMo5QRJKeoA0+wAm8pI6ADYfTsKPC/mBUQ+Cg=="},{default:t(()=>[G]),_:1}),H])}}});export{V as default,R as excerpt,J as frontmatter};
