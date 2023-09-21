import{d as p,r as h,b as r,k as n,w as t,aq as e,e as a,l as s,o}from"./style_icon.js";const d={class:"markdown-body"},j=e(`<h1>Cascader</h1><h3>Intro</h3><p>The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.</p><h3>Install</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cascader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cascader</span>);
</code></pre><h3>Basic Usage</h3><p>Pass in the <code class="">options</code> list.</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo1.value.toString() || 'please select address'"`),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo1.visible = true"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"demo1.visible"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"demo1.value"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"events.change"'),s(`
    @`),a("span",{class:"hljs-attr"},"pathChange"),s("="),a("span",{class:"hljs-string"},'"events.pathChange"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"demo1.options"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cascader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-comment"},"// 基础用法"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(" demo1 = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"visible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"value"),s(": ["),a("span",{class:"hljs-string"},"'湖南'"),s(`],
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'浙江'"),s(`,
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'浙江'"),s(`,
            `),a("span",{class:"hljs-attr"},"children"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`,
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`,
                `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
                `),a("span",{class:"hljs-attr"},"children"),s(`: [
                  { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'西湖区'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'西湖区'"),s(` },
                  { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'余杭区'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'余杭区'"),s(` }
                ]
              },
              {
                `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'温州'"),s(`,
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'温州'"),s(`,
                `),a("span",{class:"hljs-attr"},"children"),s(`: [
                  { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'鹿城区'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'鹿城区'"),s(` },
                  { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'瓯海区'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'瓯海区'"),s(` }
                ]
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'湖南'"),s(`,
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'湖南'"),s(`,
            `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'福建'"),s(`,
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'福建'"),s(`,
            `),a("span",{class:"hljs-attr"},"children"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'福州'"),s(`,
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'福州'"),s(`,
                `),a("span",{class:"hljs-attr"},"children"),s(`: [
                  { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'鼓楼区'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'鼓楼区'"),s(` },
                  { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'台江区'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'台江区'"),s(` }
                ]
              }
            ]
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` events = {
        `),a("span",{class:"hljs-title function_"},"change"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'change'"),s(`, ...args);
        },
        `),a("span",{class:"hljs-title function_"},"pathChange"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'pathChange'"),s(`, ...args);
        }
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        demo1,
        events
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Custom attribute name",-1),u=a("p",null,[s("use "),a("code",{class:""},"textKey"),s("、"),a("code",{class:""},"valueKey"),s("、"),a("code",{class:""},"childrenKey"),s("Specify the property name.")],-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo2.value.toString() || 'please select address'"`),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo2.visible = true"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"demo2.visible"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"demo2.value"'),s(`
    `),a("span",{class:"hljs-attr"},"labelKey"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"events.change"'),s(`
    @`),a("span",{class:"hljs-attr"},"pathChange"),s("="),a("span",{class:"hljs-string"},'"events.pathChange"'),s(`
    `),a("span",{class:"hljs-attr"},"valueKey"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
    `),a("span",{class:"hljs-attr"},"childrenKey"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"demo2.options"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cascader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-comment"},"// 自定义属性名称"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(" demo2 = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"visible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"value"),s(": ["),a("span",{class:"hljs-string"},"'福建'"),s(", "),a("span",{class:"hljs-string"},"'福州'"),s(", "),a("span",{class:"hljs-string"},"'台江区'"),s(`],
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'浙江'"),s(`,
            `),a("span",{class:"hljs-attr"},"items"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'杭州'"),s(`,
                `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
                `),a("span",{class:"hljs-attr"},"items"),s(": [{ "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'西湖区'"),s(" }, { "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'余杭区'"),s(` }]
              },
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'温州'"),s(`,
                `),a("span",{class:"hljs-attr"},"items"),s(": [{ "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'鹿城区'"),s(" }, { "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'瓯海区'"),s(` }]
              }
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'福建'"),s(`,
            `),a("span",{class:"hljs-attr"},"items"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'福州'"),s(`,
                `),a("span",{class:"hljs-attr"},"items"),s(": [{ "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'鼓楼区'"),s(" }, { "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'台江区'"),s(` }]
              }
            ]
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` events = {
        `),a("span",{class:"hljs-title function_"},"change"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'change'"),s(`, ...args);
        },
        `),a("span",{class:"hljs-title function_"},"pathChange"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'pathChange'"),s(`, ...args);
        }
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { demo2, events };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=e('<h3>Async loading</h3><p>Use <code class="">lazy</code> to identify whether data needs to be obtained dynamically. At this time, not transmitting <code class="">options</code> means that all data needs to be loaded through <code class="">lazyload</code> . The first loading is distinguished by the <code class="">root</code> attribute. When a non leaf node is encountered, the <code class="">lazyload</code> method will be called. The parameters are the current node and the <code class="">resolve</code> method. Note that the <code class="">resolve</code> method must be called. If it is not transmitted to a child node, it will be treated as a leaf node.</p>',2),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo3.value.toString() || 'please select address'"`),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo3.visible = true"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"demo3.visible"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"demo3.value"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"events.change"'),s(`
    @`),a("span",{class:"hljs-attr"},"pathChange"),s("="),a("span",{class:"hljs-string"},'"events.pathChange"'),s(`
    `),a("span",{class:"hljs-attr"},"lazy"),s(`
    `),a("span",{class:"hljs-attr"},":lazyLoad"),s("="),a("span",{class:"hljs-string"},'"demo3.lazyLoad"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cascader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" demo3 = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"visible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"value"),s(": ["),a("span",{class:"hljs-string"},"'A0'"),s(", "),a("span",{class:"hljs-string"},"'A12'"),s(", "),a("span",{class:"hljs-string"},"'A23'"),s(", "),a("span",{class:"hljs-string"},"'A32'"),s(`],
        `),a("span",{class:"hljs-title function_"},"lazyLoad"),s("("),a("span",{class:"hljs-params"},[s("node: any, resolve: (children: any) => "),a("span",{class:"hljs-keyword"},"void")]),s(`) {
          `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
            `),a("span",{class:"hljs-comment"},"// root表示第一层数据"),s(`
            `),a("span",{class:"hljs-keyword"},"if"),s(" (node."),a("span",{class:"hljs-property"},"root"),s(`) {
              `),a("span",{class:"hljs-title function_"},"resolve"),s(`([
                { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'A0'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A0'"),s(` },
                { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'B0'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B0'"),s(` },
                { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'C0'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C0'"),s(` }
              ]);
            } `),a("span",{class:"hljs-keyword"},"else"),s(` {
              `),a("span",{class:"hljs-keyword"},"const"),s(` { value, level } = node;
              `),a("span",{class:"hljs-keyword"},"const"),s(" text = value."),a("span",{class:"hljs-title function_"},"substring"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
              `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),a("span",{class:"hljs-subst"},[s("${level + "),a("span",{class:"hljs-number"},"1"),s("}")]),s("1`")]),s(`;
              `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),a("span",{class:"hljs-subst"},[s("${level + "),a("span",{class:"hljs-number"},"1"),s("}")]),s("2`")]),s(`;
              `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),a("span",{class:"hljs-subst"},[s("${level + "),a("span",{class:"hljs-number"},"1"),s("}")]),s("3`")]),s(`;
              `),a("span",{class:"hljs-title function_"},"resolve"),s(`([
                { `),a("span",{class:"hljs-attr"},"value"),s(": value1, "),a("span",{class:"hljs-attr"},"text"),s(": value1, "),a("span",{class:"hljs-attr"},"leaf"),s(": level >= "),a("span",{class:"hljs-number"},"6"),s(` },
                { `),a("span",{class:"hljs-attr"},"value"),s(": value2, "),a("span",{class:"hljs-attr"},"text"),s(": value2, "),a("span",{class:"hljs-attr"},"leaf"),s(": level >= "),a("span",{class:"hljs-number"},"6"),s(` },
                { `),a("span",{class:"hljs-attr"},"value"),s(": value3, "),a("span",{class:"hljs-attr"},"text"),s(": value3, "),a("span",{class:"hljs-attr"},"leaf"),s(": level >= "),a("span",{class:"hljs-number"},"6"),s(` }
              ]);
            }
          }, `),a("span",{class:"hljs-number"},"2000"),s(`);
        }
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` events = {
        `),a("span",{class:"hljs-title function_"},"change"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'change'"),s(`, ...args);
        },
        `),a("span",{class:"hljs-title function_"},"pathChange"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'pathChange'"),s(`, ...args);
        }
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { demo3, events };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Async loading of partial data",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo4.value.toString() || 'please select address'"`),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo4.visible = true"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"demo4.visible"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"demo4.value"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"events.change"'),s(`
    @`),a("span",{class:"hljs-attr"},"pathChange"),s("="),a("span",{class:"hljs-string"},'"events.pathChange"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"demo4.options"'),s(`
    `),a("span",{class:"hljs-attr"},"lazy"),s(`
    `),a("span",{class:"hljs-attr"},":lazyLoad"),s("="),a("span",{class:"hljs-string"},'"demo4.lazyLoad"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cascader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" demo4 = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"visible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"value"),s(`: [],
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'A0'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A0'"),s(` },
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'B0'"),s(`,
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B0'"),s(`,
            `),a("span",{class:"hljs-attr"},"children"),s(`: [
              { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'B11'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B11'"),s(", "),a("span",{class:"hljs-attr"},"leaf"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
              { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'B12'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B12'"),s(` }
            ]
          },
          { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'C0'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C0'"),s(` }
        ],
        `),a("span",{class:"hljs-title function_"},"lazyLoad"),s("("),a("span",{class:"hljs-params"},[s("node: any, resolve: (children: any) => "),a("span",{class:"hljs-keyword"},"void")]),s(`) {
          `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
            `),a("span",{class:"hljs-keyword"},"const"),s(` { value, level } = node;
            `),a("span",{class:"hljs-keyword"},"const"),s(" text = value."),a("span",{class:"hljs-title function_"},"substring"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
            `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),a("span",{class:"hljs-subst"},[s("${level + "),a("span",{class:"hljs-number"},"1"),s("}")]),s("1`")]),s(`;
            `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),a("span",{class:"hljs-subst"},[s("${level + "),a("span",{class:"hljs-number"},"1"),s("}")]),s("2`")]),s(`;
            `),a("span",{class:"hljs-title function_"},"resolve"),s(`([
              { `),a("span",{class:"hljs-attr"},"value"),s(": value1, "),a("span",{class:"hljs-attr"},"text"),s(": value1, "),a("span",{class:"hljs-attr"},"leaf"),s(": level >= "),a("span",{class:"hljs-number"},"2"),s(` },
              { `),a("span",{class:"hljs-attr"},"value"),s(": value2, "),a("span",{class:"hljs-attr"},"text"),s(": value2, "),a("span",{class:"hljs-attr"},"leaf"),s(": level >= "),a("span",{class:"hljs-number"},"1"),s(` }
            ]);
          }, `),a("span",{class:"hljs-number"},"500"),s(`);
        }
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` events = {
        `),a("span",{class:"hljs-title function_"},"change"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'change'"),s(`, ...args);
        },
        `),a("span",{class:"hljs-title function_"},"pathChange"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'pathChange'"),s(`, ...args);
        }
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { demo4, events };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=e('<h3>Automatic data conversion</h3><p>If your data is a flat structure that can be converted into a tree structure, you can tell the component that automatic conversion is required through <code class="">convertConfig</code>, <code class=""> convertConfig</code> accepts four parameters, <code class="">topid</code> is the parent ID of the top-level node, <code class="">idkey</code> is the unique ID of the node, <code class="">pidkey</code> is the attribute name pointing to the parent node ID, and if there is a <code class="">sortkey</code>, <code class="">Array.prototype.sort()</code> to sort at the same level.</p>',2),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo5.value.toString() || 'please select address'"`),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo5.visible = true"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"select address"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"demo5.visible"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"demo5.value"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"events.change"'),s(`
    @`),a("span",{class:"hljs-attr"},"pathChange"),s("="),a("span",{class:"hljs-string"},'"events.pathChange"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"demo5.options"'),s(`
    `),a("span",{class:"hljs-attr"},":convertConfig"),s("="),a("span",{class:"hljs-string"},'"demo5.convertConfig"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cascader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" demo5 = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"visible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"value"),s(": ["),a("span",{class:"hljs-string"},"'广东省'"),s(", "),a("span",{class:"hljs-string"},"'广州市'"),s(`],
        `),a("span",{class:"hljs-attr"},"convertConfig"),s(`: {
          `),a("span",{class:"hljs-attr"},"topId"),s(": "),a("span",{class:"hljs-literal"},"null"),s(`,
          `),a("span",{class:"hljs-attr"},"idKey"),s(": "),a("span",{class:"hljs-string"},"'id'"),s(`,
          `),a("span",{class:"hljs-attr"},"pidKey"),s(": "),a("span",{class:"hljs-string"},"'pid'"),s(`,
          `),a("span",{class:"hljs-attr"},"sortKey"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
        },
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-attr"},"pid"),s(": "),a("span",{class:"hljs-literal"},"null"),s(` },
          { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'朝阳区'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'朝阳区'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"11"),s(", "),a("span",{class:"hljs-attr"},"pid"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'亦庄'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'亦庄'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"111"),s(", "),a("span",{class:"hljs-attr"},"pid"),s(": "),a("span",{class:"hljs-number"},"11"),s(` },
          { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'广东省'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'广东省'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-attr"},"pid"),s(": "),a("span",{class:"hljs-literal"},"null"),s(` },
          { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'广州市'"),s(", "),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'广州市'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"21"),s(", "),a("span",{class:"hljs-attr"},"pid"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` events = {
        `),a("span",{class:"hljs-title function_"},"change"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'change'"),s(`, ...args);
        },
        `),a("span",{class:"hljs-title function_"},"pathChange"),s("("),a("span",{class:"hljs-params"},"...args: any"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'pathChange'"),s(`, ...args);
        }
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { demo5, events };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Selected value, bidirectional binding</td><td>Array</td><td>-</td></tr><tr><td>v-model:visible</td><td>selected layer</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>options</td><td>Cascade data</td><td>Array</td><td>-</td></tr><tr><td>lazy</td><td>Whether to enable dynamic loading</td><td>boolean</td><td>-</td></tr><tr><td>lazy-load</td><td>Dynamic loading callback, which takes effect when dynamic loading is enabled</td><td>Function</td><td>-</td></tr><tr><td>value-key</td><td>Customize the field of <code class="">value</code> in the <code class="">options</code> structure</td><td>string</td><td>-</td></tr><tr><td>text-key</td><td>Customize the fields of <code class="">text</code> in the <code class="">options</code> structure</td><td>string</td><td>-</td></tr><tr><td>children-key</td><td>Customize the fields of <code class="">children</code> in the <code class="">options</code> structure</td><td>string</td><td>-</td></tr><tr><td>convert-config</td><td>When options is a flat structure that can be converted into a tree structure, configure the conversion rules</td><td>object</td><td>-</td></tr><tr><td>title</td><td>Title</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>close-icon-position</td><td>Cancel the button position and inherit the popup component</td><td>string</td><td><code class="">&quot;top-right&quot;</code></td></tr><tr><td>closeable</td><td>Whether to display the close button and inherit the popup component</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>poppable</td><td>Whether to display the popup（After setting to false, the title is invalid）</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Triggered when the selected value changes</td><td><code class="">(value, pathNodes)</code></td></tr><tr><td>path-change</td><td>Triggered when the selected item changes</td><td><code class="">(pathNodes) </code></td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-cascader-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-cascader-line-height</td><td><em>22px</em></td></tr><tr><td>--cub-cascader-tabs-item-padding</td><td><em>0 10px</em></td></tr><tr><td>--cub-cascader-bar-padding</td><td><em>24px 20px 17px</em></td></tr><tr><td>--cub-cascader-bar-font-size</td><td><em>var(--cub-font-size-4)</em></td></tr><tr><td>--cub-cascader-bar-line-height</td><td><em>20px</em></td></tr><tr><td>--cub-cascader-bar-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-cascader-item-padding</td><td><em>10px 20px</em></td></tr><tr><td>--cub-cascader-item-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-cascader-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-cascader-item-active-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>',9),H={},Z="",B=p({__name:"doc.en-US",setup(I,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(w,k)=>{const l=h("demo-block");return o(),r("div",d,[j,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgdGl0bGU9InNlbGVjdCBhZGRyZXNzIsUbOmRlc2M9ImRlbW8xLnZhbHVlLnRvU3RyaW5nKCkgfHwgJ3BsZWFzZSDOPSfGPkBjbGlja8k/aXNpYmxlID0gdHJ1ZcQi5QCLL+gAjOoAmWFzY2FkZXL/AJ0gdi1tb2RlbDrHWc9ozSTJHOQAw8YaQGNoYW5nZT0iZXZlbnRzLsYPxxxwYXRoQ84gyhPGJDpvcHRpb25zyFvHD8QdPucA1ecAyD4KPC/qAX48c2NyaXB0IGxhbmc9InRzIuQA+GltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCEc2V0dXAoKccOICAvLyDln7rnoYDnlKjms5XHFmNvbnPEOm1vMSA9yWIoyDUgIOcBMjogZmFsc2UsyhjkAS46IFsn5rmW5Y2XJ13KG+cA7jogW8kTIOkAh80+J+a1meaxnyfKPMQBdGV4dNgcY2hpbGRyZW7OXdJhzWWdreW3ns9JxAHIadggZGlzYWJsZWQ65QKW0iD6AI3EAXvpAIHopb/kASaMuicsyHTKEyB90lnMPeS9meQAocw9yhMgfdE8Xc8S0V/7ASm4qf4BKdgg/wEJyWHpub/ln47tAMzKE/8BCSfnk6/mtbfNPcoT/wEJxAHOIswezXn3AqnmAub2AqnUHO4CPN9tz23npo/lu7rWbdUc/wMWzQHMZfwB7dkg2m3EAesB7byT5qW87gHtyRP/Ae0n5Y+w5rGfzT3KE/8B7cQB+wHtyQzIFn0p5AVFxAHmBQ7mBdUgPesBPeYGASguLi5hcmdzOiBhbnnqBVrIOm9sZS5sb2coJ8YuJywgxzDJYO0B/uoGNd9YyVjKMtZcxwp9OwrHCnJldHVybstR5QXp6gCD5gDqyjfIRn07Cjwv5gaMPgo="},{default:t(()=>[i]),_:1}),g,u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgdGl0bGU9InNlbGVjdCBhZGRyZXNzIsUbOmRlc2M9ImRlbW8yLnZhbHVlLnRvU3RyaW5nKCkgfHwgJ3BsZWFzZSDOPSfGPkBjbGlja8k/aXNpYmxlID0gdHJ1ZcQi5QCLL+gAjOoAmWFzY2FkZXL/AJ0gdi1tb2RlbDrHWc9ozSTJHOQAw8YabGFiZWxLZXk9InRleHTGFEBjaGFuZ2U9ImV2ZW50cy7GD8cccGF0aEPOIMoTx27EX89UY2hpbGRyZW7FF2l0ZW3oAVtvcHRpb25z6ACbxw/EHT7nARXnAQg+Cjwv6gG+PHNjcmlwdCBsYW5nPSJ0cyLkAThpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAhHNldHVwKCnHDiAgLy8g6Ieq5a6a5LmJ5bGe5oCn5ZCN56ewxx9jb25zxENtbzIgPclrKMg+ICDnAXs6IGZhbHNlLMoY5AEYOiBbJ+emj+W7uicsIMUKt57ECuWPsOaxn+WMuiddyjLnAQ46IFvJEyDpAKfGAeQBYzogJ+a1meaxnyfKO8QB5QFozj3SQcxFna3lAI7RIGRpc2FibGVkOuUCtdIgyGl7yEropb/muZbkAM4gfSwgyRfkvZnEZMUXXc9GfdBX+gCnuKn2AKfxAIfpub/ln47xAIfnk6/mtbf3AIfNEMwe7QCh9QGF6AHY/wGF00HPRf8A3scq6byT5qW88QDe6gJK/wDe7gDeyQzIFn0p5AMyxAHmAvLmA+4gPesAu+YEGiguLi5hcmdzOiBhbnnqA0fIOm9sZS5sb2coJ8YuJywgxzDJYO0BXOoETt9YyVjKMtZcxwp9OwrHCnJldHVybiB75gPFLOgA2n3GNMQwfTsKPC/mBGM+Cg=="},{default:t(()=>[m]),_:1}),b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgdGl0bGU9InNlbGVjdCBhZGRyZXNzIsUbOmRlc2M9ImRlbW8zLnZhbHVlLnRvU3RyaW5nKCkgfHwgJ3BsZWFzZSDOPSfGPkBjbGlja8k/aXNpYmxlID0gdHJ1ZcQi5QCLL+gAjOoAmWFzY2FkZXL/AJ0gdi1tb2RlbDrHWc9ozSTJHOQAw8YaQGNoYW5nZT0iZXZlbnRzLsYPxxxwYXRoQ84gyhPGJGxhennFCTrECkxvYWTIZcgQxCg+5wDg5wDTPgo8L+oBiTxzY3JpcHQgbGFuZz0idHMi5AEDaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAIZzZXR1cCgpxw4gIGNvbnPEJG1vMyA9yUwoyB8gIOcBJzogZmFsc2UsyhjkASM6IFsnQTAnLCAnQTEyxQcyM8UHMzInXcos6ADqKG5vZGU6IGFueSwgcmVzb2x2ZTogKGNoaWxkcmVuxRkpID0+IHZvaWTqAKPnALdUaW1lb3V0KCjFI8wdICAvLyByb2906KGo56S656ys5LiA5bGC5pWw5o2uzSlpZiDlAIUuxC/OY8QB5wCVKFvPGCAge+gA8eYA8HRleHTGDCB96gDo0i1Cyy1C3y0nQ8stQ8QtzyxdKeQB18oBfSBlbHNl8QDF5gHTx1csIGxldmVsIH0gPSDkAPnOQsgtxHUgPcYyLnN1YnPmA7swLCAxz3TIMsUrMSA9IGAke8Q+fSR7xmkrIDF9MWDbNTLXNTLcNeQCndQ1M9E1/wHD5AFpxQcx6AFryA5sZWFmOucBLj49IDb9AazFBzLNQzLfQ9VDM81DM9RD/wIFzCB9LCAyMDAwyyLIHn3JFOYBVeYErSA96wI95gTZKC4uLmFyZ3PnA43KH8Y6b2xlLmxvZygnxi4nLCDHMMx06gD16gUN31jJWMoy1lzHCn07CscKcmV0dXJuIHvmBMQs6ADafcY0xDB9Owo8L+YFQz4K"},{default:t(()=>[v]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgdGl0bGU9InNlbGVjdCBhZGRyZXNzIsUbOmRlc2M9ImRlbW80LnZhbHVlLnRvU3RyaW5nKCkgfHwgJ3BsZWFzZSDOPSfGPkBjbGlja8k/aXNpYmxlID0gdHJ1ZcQi5QCLL+gAjOoAmWFzY2FkZXL/AJ0gdi1tb2RlbDrHWc9ozSTJHOQAw8YaQGNoYW5nZT0iZXZlbnRzLsYPxxxwYXRoQ84gyhPGJDpvcHRpb25zyFvHD8YdbGF6ecYmxApMb2FkyCfIEMQoPucA/ecA8D4KPC/qAaY8c2NyaXB0IGxhbmc9InRzIuQBIGltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCGc2V0dXAoKccOICBjb25zxCRtbzQgPclMKMgfICDnAUQ6IGZhbHNlLMoY5AFAOiBbXcoT5wD4OiBbyRMgIHvIKidBMCcsIHRleHTGDCB9yjog6QCQzV0nQjAnzCUgyD/RGGNoaWxkcmVuznzuAIBCMTHqAIHGDWxlYWY65QKF7gCO0DkyzDkyJyB9zSxdyw7NR8pDQ+sA/EPkAPzJJusBQOgCEShub2RlOiBhbnksIHJlc29sdmU6ICjqAONhbnkpID0+IHZvaWTqAcrEAXNldFRpbWVvdXQoKMUjzB3oAe3nAJbkAP52ZWwgfSA9IMRx5AIz0CvkALIgPcYwLnN1YnPmA/AwLCAxKdQwxSkxID0gYCR7xDx9JHvGZSsgMX0xYNkzMtczMs8z5wEOKPkB5cUHMegBa8gO5gHnxlc+PSAy+wHtxQcyzUEy0UEx8AIB7QENfSwgNTAwyxPILX3JFOYA++YETyA96wGm5gR7KC4uLmFyZ3PnAevKH8Y6b2xlLmxvZygnxi4nLCDHMMx06gDi6gSv31jJWMoy1lzHCn07CscKcmV0dXJuIHvmBEks6ADafcY0xDB9Owo8L+YEyD4K"},{default:t(()=>[A]),_:1}),x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbAogICAgdGl0bGU9InNlbGVjdCBhZGRyZXNzIsUbOmRlc2M9ImRlbW81LnZhbHVlLnRvU3RyaW5nKCkgfHwgJ3BsZWFzZSDOPSfGPkBjbGlja8k/aXNpYmxlID0gdHJ1ZcQi5QCLL+gAjOoAmWFzY2FkZXL/AJ0gdi1tb2RlbDrHWc9ozSTJHOQAw8YaQGNoYW5nZT0iZXZlbnRzLsYPxxxwYXRoQ84gyhPGJDpvcHRpb25zyFvHD8cdY29udmVydENvbmZpZ8gjzRXEKT7nAP7nAPE+Cjwv6gGnPHNjcmlwdCBsYW5nPSJ0cyLkASFpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAkHNldHVwKCnHDiAgY29uc8QkbW81ID3JTCjIHyAg5wFFOiBmYWxzZSzKGOQBQTogWyflub/kuJznnIEnLCDEDeW3nuW4giddyivtAO46yXvEAXRvcElkOiBudWxsyjAgIGlkS2V5OiAnaWQnzBdwyBhwzxlzb3J0xhonyRZ9yiHnAZI6IFvLNHvoAMMn5YyX5LqsJywgdGV4dMwQaWQ6IDEsxHfmAKPMVMxB5pyd6Ziz5Yy6ykTME8VHyEgx2EXkuqbluoTKQskQxj/JQNlB7AGJx0TME8Q9Mv8AzcdH5wHDzEfJE8VH6ACNMiB9yURdxwp9KeQCfcQB5gJc5gM2ID3rAfjmA2IoLi4uYXJnczogYW556gKSyDpvbGUubG9nKCfGLicsIMcwyWDtAeTqA5bfWMlYyjLWXMcKfTsKxwpyZXR1cm4ge+YDLyzoANp9xjTEMH07Cjwv5gOuPgo="},{default:t(()=>[f]),_:1}),C])}}});export{B as default,Z as excerpt,H as frontmatter};
