import{d as p,r as h,b as r,k as t,w as n,aq as c,e as a,o as j,l as s}from"./style_icon.js";const d={class:"markdown-body"},o=c(`<h1>Menu 菜单</h1><h3>介绍</h3><p>向下弹出的菜单列表</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Menu</span>, <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Menu</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">MenuItem</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value2"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options2"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"options1"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'全部商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'新款商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'活动商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'默认排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'好评排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'销量排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"value1"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"value2"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleChange"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'val'"),s(`, val);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        handleChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"自定义菜单内容",-1),g=a("p",null,"使用实例上的 toggle 方法可以手动关闭弹框。",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"筛选"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{display: 'flex', flex: 1, 'justify-content': 'space-between', 'align-items': 'center'}"`),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ marginRight: '10px'}"`),s(">")]),s("自定义内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"onConfirm"'),s(">")]),s("确认"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"options1"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'全部商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'新款商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'活动商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"value1"),s(": "),a("span",{class:"hljs-number"},"0"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" item = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onConfirm"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        item.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"toggle"),s(`();
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        item,
        onConfirm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"一行两列",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value3"'),s(),a("span",{class:"hljs-attr"},":cols"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options3"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"options3"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'全部商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'家庭清洁/纸品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'个人护理'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'美妆护肤'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'食品饮料'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'家用电器'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"5"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'母婴'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"6"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'数码'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"7"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'电脑、办公'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"8"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'运动户外'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"9"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'厨具'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"10"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'医疗保健'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"11"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'酒类'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"12"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'生鲜'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"13"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'家具'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"14"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'传统滋补'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"15"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'汽车用品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"16"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'家居日用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"17"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"value3"),s(": "),a("span",{class:"hljs-number"},"0"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),x=a("h3",null,"自定义选中态颜色",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu"),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"green"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value2"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options2"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"options1"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'全部商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'新款商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'活动商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'默认排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'好评排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'销量排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"value1"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"value2"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleChange"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'val'"),s(`, val);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        handleChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"自定义图标",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Under"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value2"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options2"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Checked"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Checked"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Under"),s(", "),a("span",{class:"hljs-title class_"},"Checked"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      `),a("span",{class:"hljs-title class_"},"Under"),s(`,
      `),a("span",{class:"hljs-title class_"},"Checked"),s(`
    },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"options1"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'全部商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'新款商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'活动商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'默认排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'好评排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'销量排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"value1"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"value2"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleChange"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'val'"),s(`, val);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        handleChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"向上展开",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"blank"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"up"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value2"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options2"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"options1"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'全部商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'新款商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'活动商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'默认排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'好评排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'销量排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"value1"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"value2"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleChange"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'val'"),s(`, val);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        handleChange
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".blank"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f=a("h3",null,"禁用菜单",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value2"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options2"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"options1"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'全部商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'新款商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'活动商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'默认排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'好评排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'销量排序'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options3"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'全部商品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'家庭清洁/纸品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'个人护理'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'美妆护肤'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'食品饮料'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'家用电器'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"5"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'母婴'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"6"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'数码'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"7"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'电脑、办公'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"8"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'运动户外'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"9"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'厨具'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"10"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'医疗保健'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"11"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'酒类'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"12"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'生鲜'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"13"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'家具'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"14"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'传统滋补'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"15"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'汽车用品'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"16"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'家居日用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"17"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"value1"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"value2"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(`,
        `),a("span",{class:"hljs-attr"},"value3"),s(": "),a("span",{class:"hljs-number"},"0"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=c('<h2>API</h2><h3>Menu Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active-color</td><td>选项的选中态图标颜色</td><td>string</td><td><code class="">#F2270C</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭菜单</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>scroll-fixed</td><td>滚动后是否固定，可设置固定位置</td><td>boolean | string | number</td><td><code class="">false</code></td></tr><tr><td>title-class</td><td>自定义标题样式类</td><td>string</td><td>-</td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Menu Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义标题图标</td></tr></tbody></table><h3>MenuItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>菜单项标题</td><td>string</td><td><code class="">当前选中项文字</code></td></tr><tr><td>options</td><td>选项数组</td><td>Array</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用菜单</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cols</td><td>可以设置一行展示多少列 <code class="">options</code></td><td>number</td><td><code class="">1 </code></td></tr><tr><td>direction</td><td>菜单展开方向，可选值为 <code class="">up</code></td><td>string</td><td><code class="">down</code></td></tr><tr><td>active-title-class</td><td>选项选中时自定义标题样式类</td><td>string</td><td>-</td></tr><tr><td>inactive-title-class</td><td>选项非选中时自定义标题样式类</td><td>string</td><td>-</td></tr></tbody></table><h3>MenuItem Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义选项图标</td></tr></tbody></table><h3>MenuItem Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选择 <code class="">option</code> 之后触发</td><td>选择的 value</td></tr><tr><td>toggle</td><td>切换菜单展示状态，传 <code class="">true</code> 为显示，<code class="">false</code> 为隐藏，不传参为取反</td><td>show?: boolean</td></tr><tr><td>open</td><td>打开菜单栏时触发</td><td>-</td></tr><tr><td>close</td><td>关闭菜单栏时触发</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-menu-bar-line-height</td><td><em>48px</em></td></tr><tr><td>--cub-menu-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-menu-item-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-menu-item-active-text-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-menu-bar-border-bottom-color</td><td><em>#eaf0fb</em></td></tr><tr><td>--cub-menu-bar-opened-z-index</td><td><em>2001</em></td></tr><tr><td>--cub-menu-item-disabled-color</td><td><em>#969799</em></td></tr><tr><td>--cub-menu-title-text-padding-left</td><td><em>8px</em></td></tr><tr><td>--cub-menu-title-text-padding-right</td><td><em>8px</em></td></tr><tr><td>--cub-menu-item-content-padding</td><td><em>12px 24px</em></td></tr><tr><td>--cub-menu-item-content-max-height</td><td><em>214px</em></td></tr><tr><td>--cub-menu-item-option-padding-top</td><td><em>12px</em></td></tr><tr><td>--cub-menu-item-option-padding-bottom</td><td><em>12px</em></td></tr><tr><td>--cub-menu-item-option-i-margin-right</td><td><em>6px</em></td></tr><tr><td>--cub-menu-bar-box-shadow</td><td><em>0 2px 12px rgba(89, 89, 89, 0.12)</em></td></tr><tr><td>--cub-menu-scroll-fixed-top</td><td><em>0</em></td></tr><tr><td>--cub-menu-scroll-fixed-z-index</td><td><em>1000</em></td></tr><tr><td>--cub-menu-active-item-font-weight</td><td><em>500</em></td></tr></tbody></table>',15),_={},D="",L=p({__name:"doc",setup(B,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(W,Y)=>{const l=h("demo-block");return j(),r("div",d,[o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNyw8taXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiIC/fR8pHMiIgQGNoYW5nZT0iaGFuZGxlQ8UO2V4yx148L8hdPgo8L+oAzAo8c2NyaXB0xCRpbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJzsKCiAgZXjFKGRlZmF1bHQge+UAvXNldHVwKCnHDiAgY29uc3Qg5QCMID3JUijIHyAg6AD/OiBbyRQgIHsgdGV4dDogJ+WFqOmDqOWVhuWTgScsIOUA/jogMCB9LNQu5paw5qy+0C4x2C60u+WK0VwyIH3JLV3KOOgBSfcAqOm7mOiupOaOkuW6j8pMJ2En13zlpb3or4TRMGLYMOmUgOmHj9EwYyf2AK7FIDE6IDDPEzLlAJTHFH0p5QHIxAHmAafsAksgPSAodmFsKSA9PukBzcYob2xlLmxvZygndmFs5gCLKTvIUslRcmV0dXJuyzrlAgPqAI7Ma8o9xQcKxQs8L+gCkg=="},{default:n(()=>[i]),_:1}),u,g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNyw8taXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiIC/VR3RpdGxlPSLnrZvpgIkiIHJlZj0ixBkixi4gIDxkaXYgOnN0ecQne2Rpc3BsYXk6ICdmbGV4JywgxAc6IDEsICdqdXN0aWZ5LWNvbnRlbnQnOiAnc3BhY2UtYmV0d2VlbicsICdhbGlnbsV5c8QgY2VudGVyJ33JbdBvIG1hcmdpblJpZ2h0OiAnMTBweMQu6Ieq5a6a5LmJ5YaF5a65PC9kaXbLQ+QA4mJ1dHRvbiBAY2xpY2s9Im9uQ29uZmlybSI+56Gu6K6kPC/KJsg7y0jGH+kBJ8QVyhM+Cjwv6gGpCjxzY3JpcHTEJGltcG9ydCB7IHJlYWN0aXZlLOQBUiB9IGZyb20gJ3Z1ZSc7CgogIGV4xShkZWZhdWx0IHvFdHNldHVwKCnHDiAgY29uc3Qg5QHHID3JUijIHyAg6AHcOiBbyRQgIHsgdGV45AEu5YWo6YOo5ZWG5ZOBJywg5QIiOiAwIH0s1C7mlrDmrL7QLjHYLrS75YrRXDIgfcktXco4xR4xOiAwxxJ9KeUBBcQB5gDk5QKK5ADjZignJ9Ad6QG7ID0gKCkgPT7pASEgxTnmAvsudG9nZ2xlKCk7yGXJR3JldHVybss25QFT6gCfxEXKDslvykjFBwrFCzwv6AHt"},{default:n(()=>[m]),_:1}),b,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNyw8taXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTMiIDpjb2xzPSIyIiA6b3B0aW9uc8gixw8zIiAvxV4vyl88L8p4CjxzY3JpcHTEJGltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tICd2dWUnOwoKICBleMUoZGVmYXVsdCB75QCwc2V0dXAoKccOICBjb25zdCDlAIwgPclSKMgfICDoAKE6IFvJFCAgeyB0ZXh0OiAn5YWo6YOo5ZWG5ZOBJywg5QDxOiAwIH0s1S6utuW6rea4hea0gS/nurjNNTHXNeS4quS6uuaKpOeQhsouMtcu576O5aaG5oqk6IKkyi4z1y7po5/lk4Hppa7mlpnKLjTXLuWutueUqOeUteWZqMouNdcu5q+N5am0yig22CiVsOeg6wEIN9co55S16ISR44CB5Yqe5YWsyjE41zHov5DliqjmiLflpJbKLjnXLuWOqOWFt8ooMfkBxYy755aX5L+d5YGlyy/4Ab/phZLnsbvLKfkBupSf6bKcyyn4AbXkAkbtAKr4AbDkvKDnu5/mu4vooewAqvkBsbG96L2m55So7gKX+AG45ACHsYXml6XnlOsCDjE3IH3JLl3KOcUfMzogMMcSfSnlA6XEAXJldHVybukDkyDmA4/IKDvFCcRUfTsKPC/oBAg="},{default:n(()=>[v]),_:1}),x,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudSBhY3RpdmUtY29sb3I9ImdyZWVuIsQiyyQtaXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiIC/fR8pHMiIgQGNoYW5nZT0iaGFuZGxlQ8UO2V4yx148L8hdPgo8L+oA4Qo8c2NyaXB0xCRpbXBvcnQgeyByZeYA7CwgcmVmIH0gZnJvbSAndnVlJzsKCiAgZXjFKGRlZmF1bHQge+UAvXNldHVwKCnHDiAgY29uc3Qg5QCMID3JUijIHyAg6AD/OiBbyRQgIHsgdGV4dDogJ+WFqOmDqOWVhuWTgScsIOUA/jogMCB9LNQu5paw5qy+0C4x2C60u+WK0VwyIH3JLV3KOOgBSfcAqOm7mOiupOaOkuW6j8pMJ2En13zlpb3or4TRMGLYMOmUgOmHj9EwYyf2AK7FIDE6IDDPEzLlAJTHFH0p5QHIxAHmAafsAksgPSAodmFsKSA9PukBzcYob2xlLmxvZygndmFs5gCLKTvIUslRcmV0dXJuyzrlAgPqAI7Ma8o9xQcKxQs8L+gCkg=="},{default:n(()=>[y]),_:1}),I,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNICDJHCAjaWNvbsYVICA8VW5kZXIgL8clL8xCy0QtaXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiyVffR2x1ZTIiIEBjaGFuZ2U9ImhhbmRsZUPFDtleMiLGXPkA2iAgPENoZWNrZWQ+PC/ICsgz8ADoL+0AosQVyhM+CswvCjxzY3JpcHTEJGltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tICd2dWUnO8wn5QFsLCDnAI3JKEBjdWJmZS/kAL1zLcY1CiAgZXjFNmRlZmF1bHQge+UAqWNvbXBvbmVudHM6xxIgx1bHDcdcxQ59xhVzZXR1cCgpyTDEZ3Qg5QFNID3pALsoyB8gIOgBwDogW8kUICB7IHRleHQ6ICflhajpg6jllYblk4EnLCDlAb86IDDIb88u5paw5qy+0C4x2C60u+WK0VwyIH3JLV3KOOgCCvcAqOm7mOiupOaOkuW6j8pMJ2En13zlpb3or4TRMGLYMOmUgOmHj9EwYyf2AK7FIDE6IDDPEzLlAJTHFH0p5QH8xAHmAafsAwwgPSAodmFsKSA9PukBzcYob2xlLmxvZygndmFs5gCLKeQCecVSyVFyZXR1cm7LOuUCA+oAjsxryj3FBwrFCzwv6AL7"},{default:n(()=>[A]),_:1}),C,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImJsYW5rIj48L2RpdsUcY3ViLW1lbnUgZGlyZWN0aW9uPSJ1cCLEHMseLWl0ZW0gdi1tb2RlbD0ic3RhdGUudmFsdWUxIiA6b3DEOHPIGMcPMSIgL99HykcyIiBAY2hhbmdlPSJoYW5kbGVDxQ7ZXjLHXjwvyF0+Cjwv6gD3CjxzY3JpcHTEJGltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tICd2dWUnOwoKICBleMUoZGVmYXVsdCB75QC9c2V0dXAoKccOICBjb25zdCDlAIwgPclSKMgfICDoAP86IFvJFCAgeyB0ZXh0OiAn5YWo6YOo5ZWG5ZOBJywg5QD+OiAwIH0s1C7mlrDmrL7QLjHYLrS75YrRXDIgfcktXco46AFJ9wCo6buY6K6k5o6S5bqPykwnYSfXfOWlveivhNEwYtgw6ZSA6YeP0TBjJ/YArsUgMTogMM8TMuUAlMcUfSnlAcjEAeYBp+wCSyA9ICh2YWwpID0+6QHNxihvbGUubG9nKCd2YWzmAIspO8hSyVFyZXR1cm7LOuUCA+oAjsxryj3FBwrFCzwv6AKSPHN0eWzlA5su5QOQx1V3aWR0aDogMjAwcHjGOmhlaWdodMsTfcRGxj0="},{default:n(()=>[w]),_:1}),f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNyw8taXRlbSBkaXNhYmxlZCB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiIC/fUNNQMtlQMsdQPC/ITz4KPC/qAMcKPHNjcmlwdMQkaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwoKICBleMUjZGVmYXVsdCB75QCqc2V0dXAoKccOICBjb25zdCDlAIcgPclNKMgfICDoAOw6IFvJFCAgeyB0ZXh0OiAn5YWo6YOo5ZWG5ZOBJywg5QDiOiAwIH0s1C7mlrDmrL7QLjHYLrS75YrRXDIgfcktXco46AFE9wCo6buY6K6k5o6S5bqPykwnYSfXfOWlveivhNEwYtgw6ZSA6YeP0TBjJ/0ArjP/AVb/AVbILq625bqt5riF5rSBL+e6uP8BXcY15Liq5Lq65oqk55CGyi4y1y7nvo7lpobmiqTogqTKLjPXLumjn+WTgemlruaWmcouNNcu5a6255So55S15Zmoyi411y7mr43lqbTKKDbYKJWw56DrAQg31yjnlLXohJHjgIHlip7lhazKMTjXMei/kOWKqOaIt+WklsouOdcu5Y6o5YW3yigx+QHFjLvnlpfkv53lgaXLL/gBv+mFkuexu8sp+QG6lJ/pspzLKfgBteQCRu0AqvgBsOS8oOe7n+a7i+ih7ACq+QGxsb3ovabnlKjuApf4AbjkAIexheaXpeeU6wIOMTf2A0jFHzE6IDDPEzLlA9zPFTM6IDDHEn0p5QUjxAFyZXR1cm7pBREg5gUNyCg7xQnEfH07Cjwv6AWB"},{default:n(()=>[k]),_:1}),H])}}});export{L as default,D as excerpt,_ as frontmatter};
