import{d as p,r as h,b as r,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const o={class:"markdown-body"},d=c(`<h1>Cascader 级联选择</h1><h3>介绍</h3><p>级联选择器，用于多层级数据的选择，典型场景为省市区选择。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cascader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cascader</span>);
</code></pre><h3>基础用法</h3><p>传入<code class="">options</code>列表。</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo1.value.toString() || '请选择地址'"`),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo1.visible = true"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"地址选择"'),s(`
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
`)])],-1),g=a("h3",null,"自定义属性名称",-1),u=a("p",null,[s("可通过"),a("code",{class:""},"textKey"),s("、"),a("code",{class:""},"valueKey"),s("、"),a("code",{class:""},"childrenKey"),s("指定属性名。")],-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo2.value.toString() || '请选择地址'"`),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo2.visible = true"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"地址选择"'),s(`
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
`)])],-1),v=c('<h3>动态加载</h3><p>使用<code class="">lazy</code>标识是否需要动态获取数据，此时不传<code class="">options</code>代表所有数据都需要通过<code class="">lazyLoad</code>加载，首次加载通过<code class="">root</code>属性区分，当遇到非叶子节点时会调用<code class="">lazyLoad</code>方法，参数为当前节点和<code class="">resolve</code>方法，注意<code class="">resolve</code>方法必须调用，不传子节点时会被当做叶子节点处理。</p>',2),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo3.value.toString() || '请选择地址'"`),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo3.visible = true"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"地址选择"'),s(`
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
`)])],-1),y=a("h3",null,"部分数据动态加载",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo4.value.toString() || '请选择地址'"`),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo4.visible = true"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"地址选择"'),s(`
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
`)])],-1),x=c('<h3>自动转换</h3><p>如果你的数据为可转换为树形结构的扁平结构时，可以通过<code class="">convertConfig</code>告诉组件需要进行自动转换，<code class="">convertConfig</code>接受 4 个参数，<code class="">topId</code>为顶层节点的父级 id，<code class="">idKey</code>为节点唯一 id，<code class="">pidKey</code>为指向父节点 id 的属性名，存在<code class="">sortKey</code>将根据指定字段调用 Array.prototype.sort()进行同层排序。</p>',2),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},`"demo5.value.toString() || '请选择地址'"`),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"demo5.visible = true"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cascader"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"地址选择"'),s(`
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
`)])],-1),I=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>选中值，双向绑定</td><td>Array</td><td>-</td></tr><tr><td>v-model:visible</td><td>显示选择层</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>options</td><td>级联数据</td><td>Array</td><td>-</td></tr><tr><td>lazy</td><td>是否开启动态加载</td><td>boolean</td><td>-</td></tr><tr><td>lazy-load</td><td>动态加载回调，开启动态加载时生效</td><td>Function</td><td>-</td></tr><tr><td>value-key</td><td>自定义 <code class="">options</code> 结构中 <code class="">value</code> 的字段</td><td>string</td><td>-</td></tr><tr><td>text-key</td><td>自定义 <code class="">options</code> 结构中 <code class="">text</code> 的字段</td><td>string</td><td>-</td></tr><tr><td>children-key</td><td>自定义 <code class="">options</code> 结构中 <code class="">children</code> 的字段</td><td>string</td><td>-</td></tr><tr><td>convert-config</td><td>当 <code class="">options</code> 为可转换为树形结构的扁平结构时，配置转换规则</td><td>object</td><td>-</td></tr><tr><td>title</td><td>标题</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>close-icon-position</td><td>取消按钮位置，继承 <code class="">Popup</code> 组件</td><td>string</td><td><code class="">&quot;top-right&quot;</code></td></tr><tr><td>closeable</td><td>是否显示关闭按钮，继承 <code class="">Popup</code> 组件</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>poppable</td><td>是否需要弹层展示（设置为 <code class="">false</code> 后，<code class="">title</code> 失效）</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中值改变时触发</td><td><code class="">(value, pathNodes)</code></td></tr><tr><td>path-change</td><td>选中项改变时触发</td><td><code class="">(pathNodes)</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-cascader-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-cascader-line-height</td><td><em>22px</em></td></tr><tr><td>--cub-cascader-tabs-item-padding</td><td><em>0 10px</em></td></tr><tr><td>--cub-cascader-bar-padding</td><td><em>24px 20px 17px</em></td></tr><tr><td>--cub-cascader-bar-font-size</td><td><em>var(--cub-font-size-4)</em></td></tr><tr><td>--cub-cascader-bar-line-height</td><td><em>20px</em></td></tr><tr><td>--cub-cascader-bar-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-cascader-item-padding</td><td><em>10px 20px</em></td></tr><tr><td>--cub-cascader-item-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-cascader-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-cascader-item-active-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>',9),B={},Y="",H=p({__name:"doc",setup(f,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(z,w)=>{const l=h("demo-block");return j(),r("div",o,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0iZGVtbzEudmFsdWUudG9TdHJpbmcoKSB8fCAn6K+3zDMnIiBAY2xpY2vJNWlzaWJsZSA9IHRydWUiPiA8L8hz6gCAYXNjYWRlcgogICDoAIjGT8ZbIsUZdi1tb2RlbDrHUs9hzSTJHOQAssYaQGNoYW5nZT0iZXZlbnRzLsYPxxxwYXRoQ84gyhPGJDpvcHRpb25zyFvHD8QdPucA0+cAxj4KPC/qAWM8c2NyaXB0IGxhbmc9InRzIuQA9mltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCEc2V0dXAoKccOICAvLyDln7rnoYDnlKjms5XHFmNvbnPEOm1vMSA9yWIoyDUgIOcBMjogZmFsc2UsyhjkAS46IFsn5rmW5Y2XJ13KG+cA7jogW8kTIOkAh80+J+a1meaxnyfKPMQBdGV4dNgcY2hpbGRyZW7OXdJhzWWdreW3ns9JxAHIadggZGlzYWJsZWQ65QKP0iD6AI3EAXvpAIHopb/kASaMuicsyHTKEyB90lnMPeS9meQAocw9yhMgfdE8Xc8S0V/7ASm4qf4BKdgg/wEJyWHpub/ln47tAMzKE/8BCSfnk6/mtbfNPcoT/wEJxAHOIswezXn3AqnmAub2AqnUHO4CPN9tz23npo/lu7rWbdUc/wMWzQHMZfwB7dkg2m3EAesB7byT5qW87gHtyRP/Ae0n5Y+w5rGfzT3KE/8B7cQB+wHtyQzIFn0p5AVFxAHmBQ7mBdUgPesBPeYGASguLi5hcmdzOiBhbnnqBVrIOm9sZS5sb2coJ8YuJywgxzDJYO0B/uoGNd9YyVjKMtZcxwp9OwrHCnJldHVybstR5QXp6gCD5gDqyjfIRn07Cjwv5gaMPgo="},{default:t(()=>[i]),_:1}),g,u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0iZGVtbzIudmFsdWUudG9TdHJpbmcoKSB8fCAn6K+3zDMnIiBAY2xpY2vJNWlzaWJsZSA9IHRydWUiPiA8L8hz6gCAYXNjYWRlcgogICDoAIjGT8ZbIsUZdi1tb2RlbDrHUs9hzSTJHOQAssYabGFiZWxLZXk9InRleHTGFEBjaGFuZ2U9ImV2ZW50cy7GD8cccGF0aEPOIMoTx27EX89UY2hpbGRyZW7FF2l0ZW1zxhg6b3B0aW9uc+gAm8cPxB0+5wET5wEGPgo8L+oBozxzY3JpcHQgbGFuZz0idHMi5AE2aW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAIRzZXR1cCgpxw4gIC8vIOiHquWumuS5ieWxnuaAp+WQjeensMcfY29uc8RDbW8yID3JayjIPiAg5wF7OiBmYWxzZSzKGOQBGDogWyfnpo/lu7onLCDFCreexArlj7DmsZ/ljLonXcoy5wEOOiBbyRMg6QCnxgHkAWM6ICfmtZnmsZ8nyjvEAeUBaM490kHMRZ2t5QCO0SBkaXNhYmxlZDrlAq7SIMhpe8hK6KW/5rmW5ADOIH0sIMkX5L2ZxGTFF13PRn3QV/oAp7ip9gCn8QCH6bm/5Z+O8QCH55Ov5rW39wCHzRDMHu0AofUBhegB2P8BhdNBz0X/AN7HKum8k+alvPEA3uoCSv8A3u4A3skMyBZ9KeQDMsQB5gLy5gPuID3rALvmBBooLi4uYXJnczogYW556gNHyDpvbGUubG9nKCfGLicsIMcwyWDtAVzqBE7fWMlYyjLWXMcKfTsKxwpyZXR1cm4ge+YDxSzoANp9xjTEMH07Cjwv5gRjPgo="},{default:t(()=>[m]),_:1}),v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0iZGVtbzMudmFsdWUudG9TdHJpbmcoKSB8fCAn6K+3zDMnIiBAY2xpY2vJNWlzaWJsZSA9IHRydWUiPiA8L8hz6gCAYXNjYWRlcgogICDoAIjGT8ZbIsUZdi1tb2RlbDrHUs9hzSTJHOQAssYaQGNoYW5nZT0iZXZlbnRzLsYPxxxwYXRoQ84gyhPGJGxhennFCTrECkxvYWTIZcgQxCg+5wDe5wDRPgo8L+oBbjxzY3JpcHQgbGFuZz0idHMi5AEBaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAIZzZXR1cCgpxw4gIGNvbnPEJG1vMyA9yUwoyB8gIOcBJzogZmFsc2UsyhjkASM6IFsnQTAnLCAnQTEyxQcyM8UHMzInXcos6ADqKG5vZGU6IGFueSwgcmVzb2x2ZTogKGNoaWxkcmVuxRkpID0+IHZvaWTqAKPnALdUaW1lb3V0KCjFI8wdICAvLyByb2906KGo56S656ys5LiA5bGC5pWw5o2uzSlpZiDlAIUuxC/OY8QB5wCVKFvPGCAge+gA8eYA8HRleHTGDCB96gDo0i1Cyy1C3y0nQ8stQ8QtzyxdKeQB18oBfSBlbHNl8QDF5gHTx1csIGxldmVsIH0gPSDkAPnOQsgtxHUgPcYyLnN1YnPmA6owLCAxz3TIMsUrMSA9IGAke8Q+fSR7xmkrIDF9MWDbNTLXNTLcNeQCndQ1M9E1/wHD5AFpxQcx6AFryA5sZWFmOucBLj49IDb9AazFBzLNQzLfQ9VDM81DM9RD/wIFzCB9LCAyMDAwyyLIHn3JFOYBVeYErSA96wI95gTZKC4uLmFyZ3PnA43KH8Y6b2xlLmxvZygnxi4nLCDHMMx06gD16gUN31jJWMoy1lzHCn07CscKcmV0dXJuIHvmBMQs6ADafcY0xDB9Owo8L+YFQz4K"},{default:t(()=>[b]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0iZGVtbzQudmFsdWUudG9TdHJpbmcoKSB8fCAn6K+3zDMnIiBAY2xpY2vJNWlzaWJsZSA9IHRydWUiPiA8L8hz6gCAYXNjYWRlcgogICDoAIjGT8ZbIsUZdi1tb2RlbDrHUs9hzSTJHOQAssYaQGNoYW5nZT0iZXZlbnRzLsYPxxxwYXRoQ84gyhPGJDpvcHRpb25zyFvHD8YdbGF6ecYmxApMb2FkyCfIEMQoPucA++cA7j4KPC/qAYs8c2NyaXB0IGxhbmc9InRzIuQBHmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCGc2V0dXAoKccOICBjb25zxCRtbzQgPclMKMgfICDnAUQ6IGZhbHNlLMoY5AFAOiBbXcoT5wD4OiBbyRMgIHvIKidBMCcsIHRleHTGDCB9yjog6QCQzV0nQjAnzCUgyD/RGGNoaWxkcmVuznzuAIBCMTHqAIHGDWxlYWY65QJ+7gCO0DkyzDkyJyB9zSxdyw7NR8pDQ+sA/EPkAPzJJusBQOgCEShub2RlOiBhbnksIHJlc29sdmU6ICjqAONhbnkpID0+IHZvaWTqAcrEAXNldFRpbWVvdXQoKMUjzB3oAe3nAJbkAP52ZWwgfSA9IMRx5AIz0CvkALIgPcYwLnN1YnPmA98wLCAxKdQwxSkxID0gYCR7xDx9JHvGZSsgMX0xYNkzMtczMs8z5wEOKPkB5cUHMegBa8gO5gHnxlc+PSAy+wHtxQcyzUEy0UEx8AIB7QENfSwgNTAwyxPILX3JFOYA++YETyA96wGm5gR7KC4uLmFyZ3PnAevKH8Y6b2xlLmxvZygnxi4nLCDHMMx06gDi6gSv31jJWMoy1lzHCn07CscKcmV0dXJuIHvmBEks6ADafcY0xDB9Owo8L+YEyD4K"},{default:t(()=>[A]),_:1}),x,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0iZGVtbzUudmFsdWUudG9TdHJpbmcoKSB8fCAn6K+3zDMnIiBAY2xpY2vJNWlzaWJsZSA9IHRydWUiPiA8L8hz6gCAYXNjYWRlcgogICDoAIjGT8ZbIsUZdi1tb2RlbDrHUs9hzSTJHOQAssYaQGNoYW5nZT0iZXZlbnRzLsYPxxxwYXRoQ84gyhPGJDpvcHRpb25zyFvHD8cdY29udmVydENvbmZpZ8gjzRXEKT7nAPznAO8+Cjwv6gGMPHNjcmlwdCBsYW5nPSJ0cyLkAR9pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UAkHNldHVwKCnHDiAgY29uc8QkbW81ID3JTCjIHyAg5wFFOiBmYWxzZSzKGOQBQTogWyflub/kuJznnIEnLCDEDeW3nuW4giddyivtAO46yXvEAXRvcElkOiBudWxsyjAgIGlkS2V5OiAnaWQnzBdwyBhwzxlzb3J0xhonyRZ9yiHnAZI6IFvLNHvoAMMn5YyX5LqsJywgdGV4dMwQaWQ6IDEsxHfmAKPMVMxB5pyd6Ziz5Yy6ykTME8VHyEgx2EXkuqbluoTKQskQxj/JQNlB7AGJx0TME8Q9Mv8AzcdH5wHDzEfJE8VH6ACNMiB9yURdxwp9KeQCfcQB5gJc5gM2ID3rAfjmA2IoLi4uYXJnczogYW556gKSyDpvbGUubG9nKCfGLicsIMcwyWDtAeTqA5bfWMlYyjLWXMcKfTsKxwpyZXR1cm4ge+YDLyzoANp9xjTEMH07Cjwv5gOuPgo="},{default:t(()=>[C]),_:1}),I])}}});export{H as default,Y as excerpt,B as frontmatter};
