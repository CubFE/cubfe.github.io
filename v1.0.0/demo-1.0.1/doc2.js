import{d as p,r as h,b as i,k as t,w as n,aq as c,e as a,o as r,l as s}from"./style_icon.js";const j={class:"markdown-body"},o=c(`<h1>ActionSheet 动作面板</h1><h3>介绍</h3><p>从底部弹出的动作菜单面板。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionSheet</span>);
</code></pre><h3>基础用法</h3>`,6),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("基础用法"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-html"),s("="),a("span",{class:"hljs-string"},'"state.val"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-comment"},"<!-- demo 基础用法 -->"),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(),a("span",{class:"hljs-attr"},":menu-items"),s("="),a("span",{class:"hljs-string"},'"menuItems"'),s(" @"),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"chooseItem"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"val"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` menuItems = [
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项一'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项二'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项三'"),s(`
        }
      ];
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"switchActionSheet"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"isVisible"),s(" = !state."),a("span",{class:"hljs-property"},"isVisible"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"chooseItem"),s(" = ("),a("span",{class:"hljs-params"},"itemParams"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"val"),s(" = itemParams."),a("span",{class:"hljs-property"},"name"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        switchActionSheet,
        menuItems,
        chooseItem
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"展示取消按钮",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("展示取消按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-html"),s("="),a("span",{class:"hljs-string"},'"state.val"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-comment"},"<!-- demo 展示取消按钮 -->"),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(),a("span",{class:"hljs-attr"},":menu-items"),s("="),a("span",{class:"hljs-string"},'"menuItems"'),s(),a("span",{class:"hljs-attr"},"cancel-txt"),s("="),a("span",{class:"hljs-string"},'"取消"'),s(" @"),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"chooseItem"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"val"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` menuItems = [
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项一'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项二'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项三'"),s(`
        }
      ];
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"switchActionSheet"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"isVisible"),s(" = !state."),a("span",{class:"hljs-property"},"isVisible"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"chooseItem"),s(" = ("),a("span",{class:"hljs-params"},"itemParams"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"val"),s(" = itemParams."),a("span",{class:"hljs-property"},"name"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        switchActionSheet,
        menuItems,
        chooseItem
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"展示描述信息",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("展示描述信息"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-html"),s("="),a("span",{class:"hljs-string"},'"state.val"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-comment"},"<!-- demo 展示描述信息 -->"),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},"cancel-txt"),s("="),a("span",{class:"hljs-string"},'"取消"'),s(`
    `),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"这是一段展示信息"'),s(`
    `),a("span",{class:"hljs-attr"},":menu-items"),s("="),a("span",{class:"hljs-string"},'"menuItems"'),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"chooseItem"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"val"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` menuItems = [
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项一'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项二'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项三'"),s(`,
          `),a("span",{class:"hljs-attr"},"subname"),s(": "),a("span",{class:"hljs-string"},"'描述信息'"),s(`
        }
      ];
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"switchActionSheet"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"isVisible"),s(" = !state."),a("span",{class:"hljs-property"},"isVisible"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"chooseItem"),s(" = ("),a("span",{class:"hljs-params"},"itemParams"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"val"),s(" = itemParams."),a("span",{class:"hljs-property"},"name"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        switchActionSheet,
        menuItems,
        chooseItem
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"选项状态",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("选项状态"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-html"),s("="),a("span",{class:"hljs-string"},'"state.val"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-comment"},"<!-- demo 选项状态 -->"),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":menu-items"),s("="),a("span",{class:"hljs-string"},'"menuItems"'),s(`
    `),a("span",{class:"hljs-attr"},"choose-tag-value"),s("="),a("span",{class:"hljs-string"},'"着色选项"'),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"chooseItem"'),s(`
    `),a("span",{class:"hljs-attr"},"cancel-txt"),s("="),a("span",{class:"hljs-string"},'"取消"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"val"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(` menuItems = [
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'着色选项'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'禁用选项'"),s(`,
          `),a("span",{class:"hljs-attr"},"disable"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        }
      ];
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"switchActionSheet"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"isVisible"),s(" = !state."),a("span",{class:"hljs-property"},"isVisible"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"chooseItem"),s(" = ("),a("span",{class:"hljs-params"},"itemParams"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"val"),s(" = itemParams."),a("span",{class:"hljs-property"},"name"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        switchActionSheet,
        menuItems,
        chooseItem
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"自定义内容",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("自定义内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"custom-content"'),s(">")]),s("自定义内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"isVisible"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"val"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"switchActionSheet"),s(" = ("),a("span",{class:"hljs-params"},"param"),s(`) => {
        state.`),a("span",{class:"hljs-property"},"isVisible"),s(" = !state."),a("span",{class:"hljs-property"},"isVisible"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        state,
        switchActionSheet
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".custom-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"10px"),s(),a("span",{class:"hljs-number"},"10px"),s(),a("span",{class:"hljs-number"},"160px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),w=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否展示动作面板</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>menu-items</td><td>列表项</td><td>MenuItems[]</td><td><code class="">[ ] </code></td></tr><tr><td>option-tag</td><td>设置列表项标题展示使用参数</td><td>string</td><td><code class="">&#39;name&#39;</code></td></tr><tr><td>option-sub-tag</td><td>设置列表项二级标题展示使用参数</td><td>string</td><td><code class="">&#39;subname&#39;</code></td></tr><tr><td>choose-tag-value</td><td>设置选中项的值，和 <code class="">&#39;option-tag&#39;</code> 的值对应</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>color</td><td>选中项颜色，当 <code class="">choose-tag-value == option-tag</code> 的值 生效</td><td>string</td><td><code class="">&#39;#ee0a24&#39;</code></td></tr><tr><td>title</td><td>设置列表项标题</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>description</td><td>设置列表项副标题/描述</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>cancel-txt</td><td>取消文案</td><td>string</td><td><code class="">&#39;取消&#39;</code></td></tr><tr><td>close-abled</td><td>遮罩层是否可关闭</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>MenuItems 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>标题</td><td>string</td></tr><tr><td>subname</td><td>二级标题</td><td>string</td></tr><tr><td>color</td><td>选项字体颜色（选中项颜色层级&gt;选项字体颜色）</td><td>string</td></tr><tr><td>loading</td><td>是否为 <code class="">loading</code> 状态</td><td>boolean</td></tr><tr><td>disable</td><td>是否为禁用状态</td><td>boolean</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>choose</td><td>选择之后触发</td><td>选中列表项 <code class="">item</code>, 选中的索引值 <code class="">index</code></td></tr><tr><td>cancel</td><td>点击取消文案时触发</td><td>-</td></tr><tr><td>close</td><td>点击遮罩层时触发</td><td>event: Event</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-actionsheet-light-color</td><td><em>#f6f6f6</em></td></tr><tr><td>--cub-actionsheet-item-border-bottom</td><td><em>none</em></td></tr><tr><td>--cub-actionsheet-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-actionsheet-item-subdesc-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-actionsheet-item-cancel-border-top</td><td><em>1px solid var(--cub-actionsheet-light-color)</em></td></tr><tr><td>--cub-actionsheet-item-line-height</td><td><em>24px</em></td></tr><tr><td>--cub-actionsheet-item-font-color</td><td><em>var(--cub-title-color)</em></td></tr></tbody></table>',11),C={},S="",V=p({__name:"doc",setup(k,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(P,x)=>{const l=h("demo-block");return r(),i("div",j,[o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPuWfuuehgOeUqOazlTwvxhQ8L8Uixi1kaXYgdi1odG1sPSJzdGF0ZS52YWwiPjwvZGl2xCM8L+gAp8UOIS0tIGRlbW8gzFkgLS3pANFh5QCdLXPkAJ4gdi1tb2RlbDp25gCjyGLpALQiIDptZW51LWl0ZW1zPSLEDEnEC+QA8mhvb3NlPSLGCMQWIj7nAI3MYz4KPC/qAVU8c2NyaXB05ACNaW1wb3J0IHsgcmXEMHZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QEQc2V0dXAoKccOICBjb25zdCDlALcgPclMKMgfICDpAMw6IGZhbHNlLMkadmFsOiAnJ8cQfSnEdMpT6QDsID0gW8k0ylggIG5hbWU6ICfpgInpobnkuIDISiAgfcpl2jG6jN8x0WKJyzHHCl3uALXxAoAgPSAocGFyYW0pID0+y1zvAeggPSAhzxPIWX3OYuoB78Rb5AIYUMRfc9VgdmFsID0gyiUu5ADR0VlyZXR1cm7QPeoBEvEA1cob6QGlyhPqAKHOaOQBMn07Cjwv6AKD"},{default:n(()=>[d]),_:1}),m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPuWxleekuuWPlua2iOaMiemSrjwvxho8L8UoxjNkaXYgdi1odG1sPSJzdGF0ZS52YWwiPjwvZGl2xCM8L+gArcUOIS0tIGRlbW8g0l8gLS3pAN1h5QCpLXPkAKogdi1tb2RlbDp25gCvyGjpAMAiIDptZW51LWl0ZW1zPSLEDEnECyIgY2FuY2VsLXR4dD0ixmvkARJob29zZT0ixgjEKuUA/+YAqcx5Pgo8L+oBdzxzY3JpcHTEK2ltcG9ydCB7IHJlxDB2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UBLHNldHVwKCnHDiAgY29uc3Qg5QDNID3JTCjIHyAg6QDiOiBmYWxzZSzJGnZhbDogJyfHEH0pxHTKU+kBAiA9IFvJNMpYICBuYW1lOiAn6YCJ6aG55LiAyEogIH3KZdoxuozfMdFiicsxxwpd7gC18QKiID0gKHBhcmFtKSA9Pstc7wH+ID0gIc8TyFl9zmLqAfHEW+QCLlDEX3PVYHZhbCA9IMolLuQA0dFZcmV0dXJu0D3qARLxANXKG+kBpcoT6gChzmjkATJ9Owo8L+gCgw=="},{default:n(()=>[g]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPuWxleekuuaPj+i/sOS/oeaBrzwvxho8L8UoxjNkaXYgdi1odG1sPSJzdGF0ZS52YWwiPjwvZGl2xCM8L+gArcUOIS0tIGRlbW8g0l8gLS3pAN1h5QCpLXPkAKrFaHYtbW9kZWw6duYAs8hs6QDEIsUmY2FuY2VsLXR4dD0i5Y+W5raIxhhkZXNjcmlwxFQ9Iui/meaYr+S4gOauteYAhuYAgMYrOm1lbnUtaXRlbXM9IsQMScQLxhxAY2hvb3NlPSLGCMQaxBnqAOfsALc+Cjwv6gG1POYAgcQraW1wb3J0IHsgcmXEMHZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB7xX1zZXR1cCgpxw4gIGNvbnN0IOUBByA9yUwoyB8gIOkBHDogZmFsc2UsyRp2YWw6ICcnxxB9KcR0ylPpAPUgPSBbyTTKWCAgbmFtZTogJ+mAiemhueS4gMhKICB9ymXaMbqM3zHRYoknyicgIHN1Yscg7AI/y1THCl3uANjxAwMgPSAocGFyYW0pID0+y3/vAlsgPSAhzxPIWX3OYuoCF8Rb5AJEUMRfc9VgdmFsID0gyiUu5ADU0VlyZXR1cm7QPeoBDvEA1cob6QHIyhPqAKHOaOQBMn07Cjwv6AKm"},{default:n(()=>[b]),_:1}),A,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPumAiemhueeKtuaAgTwvxhQ8L8Uixi1kaXYgdi1odG1sPSJzdGF0ZS52YWwiPjwvZGl2xCM8L+gAp8UOIS0tIGRlbW8gzFkgLS3pANFh5QCdLXPkAJ7FYnYtbW9kZWw6duYAp8hm6QC4IsUmOm1lbnUtaXRlbXM9IsQMScQLxhxjaG9vc2UtdGFnLXZhbHVlPSLnnYDoibLmAIPGJEDGJT0ixgjEPsc9YW5jZWwtdHh0PSLlj5bmtojEGOoA2uwAsD4KPC/qAaI8c2NyaXB0xCtpbXBvcnQgeyByZcQwdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvFfHNldHVwKCnHDiAgY29uc3Qg5QEAID3JTCjIHyAg6QEVOiBmYWxzZSzJGnZhbDogJyfHEH0pxHTKU+kBMSA9IFvJNMpYICBuYW1lOiAn7AE5yE0gIH3KaNQ0poHnlKjHNMoqICBkaXNh5QCs5AKlyk3HCl3uAKPxArsgPSAocGFyYW0pID0+y3jvAh8gPSAhzxPIWX3OYuoB+sRb5AJLUMRfc9VgdmFsID0gyiUu5ADt0VlyZXR1cm7QPeoBBPEA1cob6QGTyhPqAKHOaOQBMn07Cjwv6AJx"},{default:n(()=>[y]),_:1}),I,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPuiHquWumuS5ieWGheWuuTwvxhc8L8Ul5ACGL+gAh+kAlGHFYC1zxGEgdi1tb2RlbDp2xmY9InN0YXRlLsl3IiB0aXTEGOagh+mimOgAhGRpdiBjbGFzcz0iY3VzdG9tLWNvbnRlbnQi8gCTZGl26gCKzH0+Cjwv6gEyPHNjcmlwdMQraW1wb3J0IHsgcmXEMHZlIH0gZnJvbSAndnVlJzsKICBleMUiZGVmYXVsdCB75QCWc2V0dXAoKccOICBjb25zdCDlANEgPclMKMgfICDpAOY6IGZhbHNlLMkadmFsOiAnJ8cQfSnEdMtT8AGoID0gKHBhcmFtKSA9PukAgCDGfOoBTSA9ICHPE8hZfcgJcmV0dXJu0ETqAJrRfM5BfQrFCzwv6AFOPHN0eWzlApEu7gGqx2NwYWRkaW5nOiAxMHB4xwU2MHB4xE99xEjGPw=="},{default:n(()=>[v]),_:1}),w])}}});export{V as default,S as excerpt,C as frontmatter};
