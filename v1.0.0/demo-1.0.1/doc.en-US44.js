import{d as p,r as h,b as r,k as l,w as n,aq as c,e as a,o as j,l as s}from"./style_icon.js";const o={class:"markdown-body"},d=c(`<h1>Menu</h1><h3>Intro</h3><p>The menu list that pops down downwards.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Menu</span>, <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Menu</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">MenuItem</span>);
</code></pre><h3>Basic Usage</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'All Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'New Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Activity Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Default Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Praise Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Sales Volume Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
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
`)])],-1),u=a("h3",null,"Custom Menu Content",-1),m=a("p",null,"Popup can be closed with toggle method in menu instance.",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.value1"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.options1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-menu-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Screen"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{display: 'flex', flex: 1, 'justify-content': 'space-between', 'align-items': 'center'}"`),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ marginRight: '10px'}"`),s(">")]),s("Custom content"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"onConfirm"'),s(">")]),s("Confirm"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'All Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'New Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Activity Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
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
`)])],-1),b=a("h3",null,"Two Cols In One Line",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'All Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"5"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product6'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"6"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"7"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"8"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"9"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"10"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product11'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"11"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product12'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"12"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product13'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"13"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product14'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"14"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product15'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"15"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product16'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"16"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product17'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"17"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"value3"),s(": "),a("span",{class:"hljs-number"},"0"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Custom Active Color",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'All Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'New Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Activity Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Default Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Praise Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Sales Volume Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
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
`)])],-1),A=a("h3",null,"Custom Icons",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'All Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'New Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Activity Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Default Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Praise Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Sales Volume Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
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
`)])],-1),C=a("h3",null,"Expand Directions",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'All Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'New Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Activity Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Default Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Praise Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Sales Volume Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
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
`)])],-1),f=a("h3",null,"Disable Menu",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'All Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'New Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Activity Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options2"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Default Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Praise Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Sales Volume Sort'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'c'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"options3"),s(`: [
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'All Products'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"0"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"5"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product6'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"6"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"7"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"8"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"9"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"10"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product11'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"11"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product12'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"12"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product13'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"13"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product14'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"14"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product15'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"15"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product16'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"16"),s(` },
          { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'Product17'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"17"),s(` }
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
`)])],-1),P=c('<h2>API</h2><h3>Menu Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>active-color</td><td>Active color of title and option</td><td>string</td><td><code class="">#F2270C</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>scroll-fixed</td><td>Whether to fixed when window is scrolled, fixed position can be set</td><td>boolean | string | number</td><td><code class="">false</code></td></tr><tr><td>title-class</td><td>Custome title class</td><td>string</td><td>-</td></tr><tr><td>lock-scroll</td><td>Whether the background is locked</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Menu Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>Custom title icon</td></tr></tbody></table><h3>MenuItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Item title</td><td>string</td><td><code class="">当前选中项文字</code></td></tr><tr><td>options</td><td>Options</td><td>Array</td><td>-</td></tr><tr><td>disabled</td><td>Whether to disable dropdown item</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cols</td><td>Display how many options in one line</td><td>number</td><td><code class="">1</code></td></tr><tr><td>direction</td><td>Expand direction, can be set to up</td><td>string</td><td><code class="">down</code></td></tr><tr><td>active-title-class</td><td>Active custome title class</td><td>string</td><td>-</td></tr><tr><td>inactive-title-class</td><td>Inactive custome title class</td><td>string</td><td>-</td></tr></tbody></table><h3>MenuItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>Custom option icon</td></tr></tbody></table><h3>MenuItem Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted select option changed</td><td>Selected value</td></tr><tr><td>toggle</td><td>Toggle menu display status, <code class="">true</code> to show，<code class="">false</code> to hide, no param is negated</td><td>show?: boolean</td></tr><tr><td>open</td><td>Emitted when opening menu</td><td>-</td></tr><tr><td>close</td><td>Emitted when closing menu</td><td>-</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-menu-bar-line-height</td><td><em>48px</em></td></tr><tr><td>--cub-menu-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-menu-item-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-menu-item-active-text-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-menu-bar-border-bottom-color</td><td><em>#eaf0fb</em></td></tr><tr><td>--cub-menu-bar-opened-z-index</td><td><em>2001</em></td></tr><tr><td>--cub-menu-item-disabled-color</td><td><em>#969799</em></td></tr><tr><td>--cub-menu-title-text-padding-left</td><td><em>8px</em></td></tr><tr><td>--cub-menu-title-text-padding-right</td><td><em>8px</em></td></tr><tr><td>--cub-menu-item-content-padding</td><td><em>12px 24px</em></td></tr><tr><td>--cub-menu-item-content-max-height</td><td><em>214px</em></td></tr><tr><td>--cub-menu-item-option-padding-top</td><td><em>12px</em></td></tr><tr><td>--cub-menu-item-option-padding-bottom</td><td><em>12px</em></td></tr><tr><td>--cub-menu-item-option-i-margin-right</td><td><em>6px</em></td></tr><tr><td>--cub-menu-bar-box-shadow</td><td><em>0 2px 12px rgba(89, 89, 89, 0.12)</em></td></tr><tr><td>--cub-menu-scroll-fixed-top</td><td><em>0</em></td></tr><tr><td>--cub-menu-scroll-fixed-z-index</td><td><em>1000</em></td></tr><tr><td>--cub-menu-active-item-font-weight</td><td><em>500</em></td></tr></tbody></table>',15),Q={},_="",Z=p({__name:"doc.en-US",setup(k,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(M,H)=>{const t=h("demo-block");return j(),r("div",o,[d,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNyw8taXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiIC/fR8pHMiIgQGNoYW5nZT0iaGFuZGxlQ8UO2V4yx148L8hdPgo8L+oAzAo8c2NyaXB0xCRpbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJzsKCiAgZXjFKGRlZmF1bHQge+UAvXNldHVwKCnHDiAgY29uc3Qg5QCMID3JUijIHyAg6AD/OiBbyRQgIHsgdGV4dDogJ0FsbCBQcm9kdWN0cycsIOUA/jogMCB9LNQuTmV30y4x1y5B5ACMaXR50zMyIH3JMl3KPegBTvcArUTnAQtTb3J0ykwnYSf3AIFQcmFpc2XQL2LYL1NhbGVzIFZvbHVt0TVjJ/YAssUgMTogMM8TMuUAmMcUfSnlAdHEAeYBsOwCVCA9ICh2YWwpID0+6QHWxihvbGUubG9nKCd2YWzmAIspO8hSyVFyZXR1cm7LOuUCDOoAjsxryj3FBwrFCzwv6AKb"},{default:n(()=>[i]),_:1}),u,m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNyw8taXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiIC/VR3RpdGxlPSJTY3JlZW4iIHJlZj0ixBkixi4gIDxkaXYgOnN0ecQne2Rpc3BsYXk6ICdmbGV4JywgxAc6IDEsICdqdXN0aWZ5LWNvbnRlbnQnOiAnc3BhY2UtYmV0d2VlbicsICdhbGlnbsV5c8QgY2VudGVyJ33JbdBvIG1hcmdpblJpZ2h0OiAnMTBweMQuQ3VzdG9tIMdqPC9kaXbLQuQA4WJ1dHRvbiBAY2xpY2s9Im9uQ29uZmlybSI+xwk8L8onyDzLScYf6QEnxBXKEz4KPC/qAakKPHNjcmlwdMQkaW1wb3J0IHsgcmVhY3RpdmUs5AFSIH0gZnJvbSAndnVlJzsKCiAgZXjFKGRlZmF1bHQge8V0c2V0dXAoKccOIOQA33N0IOUBxyA9yVIoyB8gIOgB3DogW8kUICB7IHRleOQBLkFsbCBQcm9kdWN0cycsIOUCIjogMCB9LNQuTmV30y4x1y5B5ACMaXR50zMyIH3JMl3KPcUeMTogMMcSfSnlAQrEAeYA6eUCj+QA6GYoJyfQHekBwSA9ICgpID0+6QEmIMU55gMALnRvZ2dsZSgpO8hlyUdyZXR1cm7LNuUBWOoAn8RFyg7Jb8pIxQcKxQs8L+gB8g=="},{default:n(()=>[g]),_:1}),b,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNyw8taXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTMiIDpjb2xzPSIyIiA6b3B0aW9uc8gixw8zIiAvxV4vyl88L8p4CjxzY3JpcHTEJGltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tICd2dWUnOwoKICBleMUoZGVmYXVsdCB75QCwc2V0dXAoKccOICBjb25zdCDlAIwgPclSKMgfICDoAKE6IFvJFCAgeyB0ZXh0OiAnQWxsIFByb2R1Y3RzJywg5QDxOiAwIH0s1C7HKjHKKjHeKjLKKjLeKjPKKjPeKjTKKjTeKjXKKjXeKjbKKjbeKjfKKjfeKjjKKjjeKjnKKjneKjEwyisx/wGmMewBp/8BqDHrAakx/wGqMesBqzH/Aawx6wGtMf8BrjHrAa8x/wGwMesBsTH/AbIx6wGzMTcgfckrXco2xR8zOiAwxxJ9KeUDg8QBcmV0dXJu6QNxIOYDbcgoO8UJxFR9Owo8L+gD5g=="},{default:n(()=>[v]),_:1}),y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudSBhY3RpdmUtY29sb3I9ImdyZWVuIsQiyyQtaXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiIC/fR8pHMiIgQGNoYW5nZT0iaGFuZGxlQ8UO2V4yx148L8hdPgo8L+oA4Qo8c2NyaXB0xCRpbXBvcnQgeyByZeYA7CwgcmVmIH0gZnJvbSAndnVlJzsKCiAgZXjFKGRlZmF1bHQge+UAvXNldHVwKCnHDiAgY29uc3Qg5QCMID3JUijIHyAg6AD/OiBbyRQgIHsgdGV4dDogJ0FsbCBQcm9kdWN0cycsIOUA/jogMCB9LNQuTmV30y4x1y5B5ACMaXR50zMyIH3JMl3KPegBTvcArUTnAQtTb3J0ykwnYSf3AIFQcmFpc2XQL2LYL1NhbGVzIFZvbHVt0TVjJ/YAssUgMTogMM8TMuUAmMcUfSnlAdHEAeYBsOwCVCA9ICh2YWwpID0+6QHWxihvbGUubG9nKCd2YWzmAIspO8hSyVFyZXR1cm7LOuUCDOoAjsxryj3FBwrFCzwv6AKb"},{default:n(()=>[x]),_:1}),A,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNICDJHCAjaWNvbsYVICA8VW5kZXIgL8clL8xCy0QtaXRlbSB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiyVffR2x1ZTIiIEBjaGFuZ2U9ImhhbmRsZUPFDtleMiLGXPkA2iAgPENoZWNrZWQ+PC/ICsgz8ADoL+0AosQVyhM+CswvCjxzY3JpcHTEJGltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tICd2dWUnO8wn5QFsLCDnAI3JKEBjdWJmZS/kAL1zLcY1CiAgZXjFNmRlZmF1bHQge+UAqWNvbXBvbmVudHM6xxIgx1bHDcdcxQ59xhVzZXR1cCgpyTDEZ3Qg5QFNID3pALsoyB8gIOgBwDogW8kUICB7IHRleHQ6ICdBbGwgUHJvZHVjdHMnLCDlAb86IDDIb88uTmV30y4x1y5B5ACMaXR50zMyIH3JMl3KPegCD/cArUTnAT9Tb3J0ykwnYSf3AIFQcmFpc2XQL2LYL1NhbGVzIFZvbHVt0TVjJ/YAssUgMTogMM8TMuUAmMcUfSnlAgXEAeYBsOwDFSA9ICh2YWwpID0+6QHWxihvbGUubG9nKCd2YWzmAIsp5AKCxVLJUXJldHVybss65QIM6gCOzGvKPcUHCsULPC/oAwQ="},{default:n(()=>[w]),_:1}),C,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImJsYW5rIj48L2RpdsUcY3ViLW1lbnUgZGlyZWN0aW9uPSJ1cCLEHMseLWl0ZW0gdi1tb2RlbD0ic3RhdGUudmFsdWUxIiA6b3DEOHPIGMcPMSIgL99HykcyIiBAY2hhbmdlPSJoYW5kbGVDxQ7ZXjLHXjwvyF0+Cjwv6gD3CjxzY3JpcHTEJGltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tICd2dWUnOwoKICBleMUoZGVmYXVsdCB75QC9c2V0dXAoKccOICBjb25zdCDlAIwgPclSKMgfICDoAP86IFvJFCAgeyB0ZXh0OiAnQWxsIFByb2R1Y3RzJywg5QD+OiAwIH0s1C5OZXfTLjHXLkHkAIxpdHnTMzIgfckyXco96AFO9wCtROcBC1NvcnTKTCdhJ/cAgVByYWlzZdAvYtgvU2FsZXMgVm9sdW3RNWMn9gCyxSAxOiAwzxMy5QCYxxR9KeUB0cQB5gGw7AJUID0gKHZhbCkgPT7pAdbGKG9sZS5sb2coJ3ZhbOYAiyk7yFLJUXJldHVybss65QIM6gCOzGvKPcUHCsULPC/oAps8c3R5bOUDpC7lA5nHVXdpZHRoOiAyMDBweMY6aGVpZ2h0yxN9xEbGPQ=="},{default:n(()=>[I]),_:1}),f,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbWVudcQNyw8taXRlbSBkaXNhYmxlZCB2LW1vZGVsPSJzdGF0ZS52YWx1ZTEiIDpvcHRpb25zyBjHDzEiIC/fUNNQMtlQMsdQPC/ITz4KPC/qAMcKPHNjcmlwdMQkaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwoKICBleMUjZGVmYXVsdCB75QCqc2V0dXAoKccOICBjb25zdCDlAIcgPclNKMgfICDoAOw6IFvJFCAgeyB0ZXh0OiAnQWxsIFByb2R1Y3RzJywg5QDiOiAwIH0s1C5OZXfTLjHXLkHkAIxpdHnTMzIgfckyXco96AFJ9wCtROcBC1NvcnTKTCdhJ/cAgVByYWlzZdAvYtgvU2FsZXMgVm9sdW3RNWMn/QCyM/8BX/8BX8cuxyox/wFbyioyyioy3iozyioz3io0yio03io1yio13io2yio23io3yio33io4yio43io5yio53ioxMMorMf8BpjHsAaf/Aagx6wGpMf8BqjHrAasx/wGsMesBrTH/Aa4x6wGvMf8BsDHrAbEx/wGyMesBszE39gMmxR8xOiAwzxMy5QO+zxUzOiAwxxJ9KeUFCsQBcmV0dXJu6QT4IOYE9MgoO8UJxHx9Owo8L+gFaA=="},{default:n(()=>[B]),_:1}),P])}}});export{Z as default,_ as excerpt,Q as frontmatter};
