import{d as p,r as h,b as o,k as l,w as n,aq as e,e as a,o as i,l as s}from"./style_icon.js";const r={class:"markdown-body"},j=e(`<h1>ActionSheet</h1><h3>Intro</h3><p>Action menu panel that pops up from the bottom.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionSheet</span>);
</code></pre><h3>Basic Usage</h3>`,6),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-html"),s("="),a("span",{class:"hljs-string"},'"state.val"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-comment"},"<!-- demo Basic Usage -->"),s(`
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
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option one'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option two'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option three'"),s(`
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
`)])],-1),m=a("h3",null,"Show Cancel Button",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("Show Cancel Button"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-html"),s("="),a("span",{class:"hljs-string"},'"state.val"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-comment"},"<!-- demo Show Cancel Button -->"),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(),a("span",{class:"hljs-attr"},":menu-items"),s("="),a("span",{class:"hljs-string"},'"menuItems"'),s(),a("span",{class:"hljs-attr"},"cancel-txt"),s("="),a("span",{class:"hljs-string"},'"cancel"'),s(" @"),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"chooseItem"'),s(">")]),s(`
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
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option one'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option two'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option three'"),s(`
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
`)])],-1),b=a("h3",null,"Show Description",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("Show Description"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-html"),s("="),a("span",{class:"hljs-string"},'"state.val"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-comment"},"<!-- demo Show Description -->"),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},"cancel-txt"),s("="),a("span",{class:"hljs-string"},'"cancel"'),s(`
    `),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"This is a presentation"'),s(`
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
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option one'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option two'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option three'"),s(`,
          `),a("span",{class:"hljs-attr"},"subname"),s(": "),a("span",{class:"hljs-string"},"'Description'"),s(`
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
`)])],-1),A=a("h3",null,"Option Status",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("Option Status"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-html"),s("="),a("span",{class:"hljs-string"},'"state.val"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-comment"},"<!-- demo Option Status -->"),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(`
    `),a("span",{class:"hljs-attr"},":menu-items"),s("="),a("span",{class:"hljs-string"},'"menuItems"'),s(`
    `),a("span",{class:"hljs-attr"},"choose-tag-value"),s("="),a("span",{class:"hljs-string"},'"Shading Options"'),s(`
    @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"chooseItem"'),s(`
    `),a("span",{class:"hljs-attr"},"cancel-txt"),s("="),a("span",{class:"hljs-string"},'"cancel"'),s(`
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
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Shading Options'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Disable option'"),s(`,
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
`)])],-1),I=a("h3",null,"Custom Content",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":show-icon"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"switchActionSheet('isVisible')"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("Custom Content"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-action-sheet"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"state.isVisible"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"custom-content"'),s(">")]),s("Custom Content"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
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
`)])],-1),w=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:visible</td><td>Whether to show ActionSheet</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>menu-items</td><td>Options</td><td>MenuItems[]</td><td><code class="">[ ]</code></td></tr><tr><td>option-tag</td><td>Custom Options tag key</td><td>string</td><td><code class="">&#39;name&#39;</code></td></tr><tr><td>option-sub-tag</td><td>Custom Options subtag key</td><td>string</td><td><code class="">&#39;subname&#39;</code></td></tr><tr><td>choose-tag-value</td><td>Set the value of the selected item</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>color</td><td>selected item color，when <code class="">choose-tag-value == option-tag</code></td><td>string</td><td><code class="">&#39;#ee0a24&#39;</code></td></tr><tr><td>title</td><td>set list item title</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>description</td><td>set list item description</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>cancel-txt</td><td>Text of cancel button</td><td>string</td><td><code class="">&#39;cancel&#39;</code></td></tr><tr><td>close-abled</td><td>Whether the mask layer can be closed</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>MenuItems</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>name</td><td>Title</td><td>string</td></tr><tr><td>subname</td><td>Subtitle</td><td>string</td></tr><tr><td>color</td><td>Text color（Selected Item Color Hierarchy &gt; Option Font Color）</td><td>string</td></tr><tr><td>loading</td><td>Whether to be loading status</td><td>boolean</td></tr><tr><td>disable</td><td>Whether to be disabled</td><td>boolean</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>choose</td><td>Triggered after selection</td><td>item, index</td></tr><tr><td>cancel</td><td>Triggered when cancel copy is clicked</td><td>-</td></tr><tr><td>close</td><td>Triggered when the mask layer is clicked</td><td>event: Event</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="">ConfigProvider component</a>。</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-actionsheet-light-color</td><td><em>#f6f6f6</em></td></tr><tr><td>--cub-actionsheet-item-border-bottom</td><td><em>none</em></td></tr><tr><td>--cub-actionsheet-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-actionsheet-item-subdesc-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-actionsheet-item-cancel-border-top</td><td><em>1px solid var(--cub-actionsheet-light-color)</em></td></tr><tr><td>--cub-actionsheet-item-line-height</td><td><em>24px</em></td></tr><tr><td>--cub-actionsheet-item-font-color</td><td><em>var(--cub-title-color)</em></td></tr></tbody></table>',11),Y={},f="",V=p({__name:"doc.en-US",setup(k,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(C,S)=>{const t=h("demo-block");return i(),o("div",r,[j,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPkJhc2ljIFVzYWdlPC/GEzwvxSHGLGRpdiB2LWh0bWw9InN0YXRlLnZhbCI+PC9kaXbEIzwv6ACmxQ4hLS0gZGVtbyDLWCAtLekAz2HlAJstc+QAnCB2LW1vZGVsOnbmAKHIYekAsiIgOm1lbnUtaXRlbXM9IsQMScQL5ADwaG9vc2U9IsYIxBYiPucAjMxjPgo8L+oBUzxzY3JpcHTkAI1pbXBvcnQgeyByZcQwdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAQ9zZXR1cCgpxw4gIGNvbnN0IOUAtyA9yUwoyB8gIOkAzDogZmFsc2UsyRp2YWw6ICcnxxB9KcR0ylPpAOwgPSBbyTTKWCAgbmFtZTogJ29w5ADuIG9uZchLICB9ymbaMnR3b98y0TJocmXMZscKXe4AuvECgyA9IChwYXJhbSkgPT7LX+8B7SA9ICHPE8hZfc5i6gH0xFvkAh1QxF9z1WB2YWwgPSDKJS7kANTRWXJldHVybtA96gEV8QDVyhvpAarKE+oAoc5o5AEyfTsKPC/oAog="},{default:n(()=>[d]),_:1}),m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPlNob3cgQ2FuY2VsIEJ1dHRvbjwvxho8L8UoxjNkaXYgdi1odG1sPSJzdGF0ZS52YWwiPjwvZGl2xCM8L+gArcUOIS0tIGRlbW8g0l8gLS3pAN1h5QCpLXPkAKogdi1tb2RlbDp25gCvyGjpAMAiIDptZW51LWl0ZW1zPSLEDEnECyIgY8VgLXR4dD0ixgzkARJob29zZT0ixgjEKuUA/+YAqcx5Pgo8L+oBdzxzY3JpcHTEK2ltcG9ydCB7IHJlxDB2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge+UBLHNldHVwKCnHDiAgY29uc3Qg5QDNID3JTCjIHyAg6QDiOiBmYWxzZSzJGnZhbDogJyfHEH0pxHTKU+kBAiA9IFvJNMpYICBuYW1lOiAnb3DkAO4gb25lyEsgIH3KZtoydHdv3zLRMmhyZcxmxwpd7gC68QKnID0gKHBhcmFtKSA9Pstf7wIDID0gIc8TyFl9zmLqAfbEW+QCM1DEX3PVYHZhbCA9IMolLuQA1NFZcmV0dXJu0D3qARXxANXKG+kBqsoT6gChzmjkATJ9Owo8L+gCiA=="},{default:n(()=>[g]),_:1}),b,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPlNob3cgRGVzY3JpcMQ2PC/GGDwvxSbGMWRpdiB2LWh0bWw9InN0YXRlLnZhbCI+PC9kaXbEIzwv6ACrxQ4hLS0gZGVtbyDQXSAtLekA2WHlAKUtc+QApsVmdi1tb2RlbDp25gCvyGrpAMAixSZjYW5jZWwtdHh0PSLGDMYYZMpmPSJUaGlzIGlzIGEgcHJlc2VudGHEGMYpOm1lbnUtaXRlbXM9IsQMScQLxhxAY2hvb3NlPSLGCMQaxBnqAOPsALU+Cjwv6gGvPMZ/xCtpbXBvcnQgeyByZcQwdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvFfXNldHVwKCnHDiAgY29uc3Qg5QEFID3JTCjIHyAg6QEaOiBmYWxzZSzJGnZhbDogJyfHEH0pxHTKU+kA9SA9IFvJNMpYICBuYW1lOiAnb+YBtW9uZchLICB9ymbaMnR3b98y0TJocmVlJ8oqICBzdWLHI+sCQctWxwpd7gDc8QMBID0gKHBhcmFtKSA9PusAge8CXSA9ICHPE8hZfc5i6gIbxFvkAkhQxF9z1WB2YWwgPSDKJS7kANPRWXJldHVybtA96gEN8QDVyhvpAczKE+oAoc5o5AEyfTsKPC/oAqo="},{default:n(()=>[u]),_:1}),A,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPk9wxCwgU3RhdHVzPC/GFTwvxSPGLmRpdiB2LWh0bWw9InN0YXRlLnZhbCI+PC9kaXbEIzwv6ACoxQ4hLS0gZGVtbyDNWiAtLekA02HlAJ8tc+QAoMVjdi1tb2RlbDp25gCpyGfpALoixSY6bWVudS1pdGVtcz0ixAxJxAvGHGNob29zZS10YWctdmFsdWU9IlNoYWRpbmfnAIbHJ0DGKD0ixgjEQcdAYW5jZWwtdHh0PSLGDMQY6gDe7ACzPgo8L+oBpzxzY3JpcHTEK2ltcG9ydCB7IHJlxDB2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFImRlZmF1bHQge8V8c2V0dXAoKccOICBjb25zdCDlAQMgPclMKMgfICDpARg6IGZhbHNlLMkadmFsOiAnJ8cQfSnEdMpT6QE0ID0gW8k0ylggIG5hbWU6ICfvATzIUCAgfcpr0zdEaXNhYmxlIG/FNyfKLCAgZMYbOiDkAq/KT8cKXe4AqPECxSA9IChwYXJhbSkgPT7Leu8CJyA9ICHPE8hZfc5i6gH/xFvkAlNQxF9z1WB2YWwgPSDKJS7kAO/RWXJldHVybtA96gEE8QDVyhvpAZjKE+oAoc5o5AEyfTsKPC/oAnY="},{default:n(()=>[y]),_:1}),I,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6c2hvdy1pY29uPSJ0cnVlIiA6aXNMaW5ryA9AY2xpY2s9InN3aXRjaEFjdGlvblNoZWV0KCdpc1Zpc2libGUnKSLEViAgPHNwYW4+PGxhYmVsPkN1c3RvbSBDb250ZW50PC/GFjwvxSTkAIUv6ACG6QCTYcVfLXPEYCB2LW1vZGVsOnbGZT0ic3RhdGUuyXYiIHRpdMQYxQfoAIJkaXYgY2xhc3M9ImPlAIEtY+YAgSLxAJFkaXbqAIjMez4KPC/qAS88c2NyaXB0xCtpbXBvcnQgeyByZcQwdmUgfSBmcm9tICd2dWUnOwogIGV4xSJkZWZhdWx0IHvlAJVzZXR1cCgpxw4gIGNvbnN0IOUAzyA9yUwoyB8gIOkA5DogZmFsc2UsyRp2YWw6ICcnxxB9KcR0y1PwAaUgPSAocGFyYW0pID0+6QCAIMZ86gFLID0gIc8TyFl9yAlyZXR1cm7QROoAmtF8zkF9CsULPC/oAU48c3R5bOUCji7uAanHY3BhZGRpbmc6IDEwcHjHBTYwcHjET33ESMY/"},{default:n(()=>[v]),_:1}),w])}}});export{V as default,f as excerpt,Y as frontmatter};
