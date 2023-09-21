import{d as r,r as p,b as o,k as t,w as n,aq as e,e as a,o as d,l as s}from"./style_icon.js";const h={class:"markdown-body"},i=e(`<h1>NumberKeyboard</h1><h3>Intro</h3><p>Virtual numeric keypad, used for scenarios where payment passwords are entered.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);
</code></pre><h3>Default Keyboard</h3><p>For online debugging, please change the browser to mobile mode</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Default Keyboard"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(" @"),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"input"'),s(" @"),a("span",{class:"hljs-attr"},"delete"),s("="),a("span",{class:"hljs-string"},'"onDelete"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`enter："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"onDelete"),s("("),a("span",{class:"hljs-params"}),s(`) {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'delete'"),s(`);
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"close"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        visible,
        input,
        showKeyBoard,
        close,
        onDelete
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"Keyboard With Sidebar",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Keyboard With Sidebar"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"rightColumn"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(`
    `),a("span",{class:"hljs-attr"},":custom-key"),s("="),a("span",{class:"hljs-string"},'"customKey"'),s(`
    `),a("span",{class:"hljs-attr"},"confirm-text"),s("="),a("span",{class:"hljs-string"},'"pay"'),s(`
    @`),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"input"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'.'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`enter"),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"close"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        visible,
        customKey,
        input,
        showKeyBoard,
        close
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"Random Key Order",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Random Key Order"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"rightColumn"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(`
    `),a("span",{class:"hljs-attr"},":randomKeys"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},":custom-key"),s("="),a("span",{class:"hljs-string"},'"customKey"'),s(`
    @`),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"input"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'.'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`enter："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"close"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        visible,
        customKey,
        input,
        showKeyBoard,
        close
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Show Keyboard With Title",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard(4)"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Show Keyboard With Title"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":custom-key"),s("="),a("span",{class:"hljs-string"},'"customKey"'),s(" @"),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"input"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'.'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`enter："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"close"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        visible,
        customKey,
        input,
        showKeyBoard,
        close
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"Show IdNumber Keyboard",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard(4)"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"IdNumber Keyboard"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":custom-key"),s("="),a("span",{class:"hljs-string"},'"customKey"'),s(" @"),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"input"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'X'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`enter："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"close"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        visible,
        customKey,
        input,
        showKeyBoard,
        close
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"Bind Value",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"desc-text-align"),s("="),a("span",{class:"hljs-string"},'"left"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Bind Value"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"maxlength"),s("="),a("span",{class:"hljs-string"},'"6"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'.'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"close"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        visible,
        customKey,
        value,
        showKeyBoard,
        close
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:visible</td><td>Whether to show keyboard</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>v-model</td><td>Current value</td><td>string</td><td>-</td></tr><tr><td>title</td><td>Keyboard title</td><td>string</td><td>-</td></tr><tr><td>type</td><td>Keyboard type can be set to <code class="">rightColumn</code></td><td>string</td><td><code class="">default</code></td></tr><tr><td>random-keys</td><td>Whether to shuffle the order of keys</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>custom-key</td><td>Content of bottom left key</td><td>string []</td><td><code class="">Array form supports adding up to two</code></td></tr><tr><td>maxlength</td><td>Value maxlength，Use with v-model</td><td>number | string</td><td><code class="">6</code></td></tr><tr><td>confirm-text</td><td>Custom done button text,Such as &quot;pay&quot;, &quot;next&quot;, &quot;submit&quot;</td><td>string</td><td><code class="">done</code></td></tr><tr><td>teleport</td><td>Specify the mount node</td><td>string</td><td><code class="">&quot;body&quot;</code></td></tr><tr><td>pop-class</td><td>Custom bullet box classname</td><td>string</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>input</td><td>Emitted when a key is pressed</td><td>key: string</td></tr><tr><td>delete</td><td>Emitted when the delete key is pressed</td><td>-</td></tr><tr><td>close</td><td>Emitted when the close button or non-keyboard area is clicked is clicked</td><td>-</td></tr><tr><td>blur</td><td>Emitted when the close button is clicked or the keyboard is blurred</td><td>-</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-numberkeyboard-width</td><td><em>100%</em></td></tr><tr><td>--cub-numberkeyboard-padding</td><td><em>0</em></td></tr><tr><td>--cub-numberkeyboard-background-color</td><td><em>#f2f3f5</em></td></tr><tr><td>--cub-numberkeyboard-header-height</td><td><em>34px</em></td></tr><tr><td>--cub-numberkeyboard-header-padding</td><td><em>6px 0 0 0</em></td></tr><tr><td>--cub-numberkeyboard-header-color</td><td><em>#646566</em></td></tr><tr><td>--cub-numberkeyboard-header-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-padding</td><td><em>0 16px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-color</td><td><em>#576b95</em></td></tr><tr><td>--cub-numberkeyboard-header-close-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-background-color</td><td><em>transparent</em></td></tr><tr><td>--cub-numberkeyboard-key-background-color</td><td><em>#fff</em></td></tr><tr><td>--cub-numberkeyboard-key-active-background-color</td><td><em>#ebedf0</em></td></tr><tr><td>--cub-numberkeyboard-key-height</td><td><em>48px</em></td></tr><tr><td>--cub-numberkeyboard-key-line-height</td><td><em>1.5</em></td></tr><tr><td>--cub-numberkeyboard-key-border-radius</td><td><em>8px</em></td></tr><tr><td>--cub-numberkeyboard-key-font-size</td><td><em>28px</em></td></tr><tr><td>--cub-numberkeyboard-key-font-size-color</td><td><em>#333</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-font-size-color</td><td><em>#fff</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-background-color</td><td><em>#1989fa</em></td></tr><tr><td>--cub-numberkeyboard-key-activeFinsh-background-color</td><td><em>#0570db</em></td></tr></tbody></table>',9),_={},R="",X=r({__name:"doc.en-US",setup(x,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(B,Z)=>{const l=p("demo-block");return d(),o("div",h,[i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9IkRlZmF1bHQgS2V5YsUZPjwvyEnJVm51bWJlci1rxyQgdi1tb2RlbDp2aXNpYsRGxwkiIEBpbnB1dD0ixQciIEBkZWxldGU9Im9uRMUK5QCOb3NlPSLFByLFY8Vxz2Q+Cjwv6gDePHNjcmlwdMQuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHeQA7FRvYXN0ySNAY3VidWnEa3VpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZOcBNHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5wESID3kAKgoZmFsc2UpxEPEAWZ1bmN0aW9u5QCm6AGSy0IgyD4udmFsdcRE5AHJyD590EblAWwo5gFAzEXpAQQudGV4dChgZW50ZXLvvJoke8YsfWDpAJLRVOgBsO0Als9RJ+YB3SfaRuUB5P0A2eUBGdBAcmV0dXJu0jYsyRHlAPPKD+wBSMoWxX7KD+gA08htxnbEdH07Cjwv6AJi"},{default:n(()=>[j]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9IktleWLEESBXaXRoIFNpZGViYXIiPjwvyE7JW251bWJlci1rxzEKICAgIHR5cGU9InJpZ2h0Q29sdW1uIsUXdi1tb2RlbDp2aXNpYsRmxwnGHjpjdXN0b23ESj0ixgxLZXnGHGNvbmZpcm0tdGV4dD0icGHHF0BpbnB1dD0ixQfHE2Nsb3NlPSLFB8QT5QCp5QC37wCqPgo8L+oBKTxzY3JpcHTELmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wn5AFBVG9hc3TJI0BjdWJ1acR1dWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlAN5zZXR1cCgpxw7lARhzdCDnAUcgPeQAsihmYWxzZSnEQ8oi6QFPxSTmANEoWycuJ13JKWZ1bmN0aW9u5QDP6AIQy2sgyGcudmFsdcRt5AJHyD590EblAZMo5gFzzEXpAS0u5AHMKGBlbnRlciR7xil9YOkAj9FR5QHR/QCQ5QD50EByZXR1cm7SNizJEekBHMoT5QC9yg/sARLLOOQAkchuxnfEdX07Cjwv6AJN"},{default:n(()=>[b]),_:1}),m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9IlJhbmRvbSBLZXkgT3JkZXIiPjwvyEnJVm51bWJlci1rZXlixD0KICAgIHR5cGU9InJpZ2h0Q29sdW1uIsUXdi1tb2RlbDp2aXNpYsRhxwnGHjpyxW9LZXlz5wCexhdjdXN0b23EYT0ixgxLZXnGHEBpbnB1dD0ixQfHE2Nsb3NlPSLFB8QT5QCp5QC37wCqPgo8L+oBJDxzY3JpcHTELmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wn5AE8VG9hc3TJI0BjdWJ1acR1dWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlAN5zZXR1cCgpxw4gIGNvbnN0IOcBRyA95ACyKGZhbHNlKcRDyiLpATjFJOYA0ShbJy4nXckpZnVuY3Rpb27lAM/oAgvLayDIZy52YWx1xG3kAaTIPn3QRuUBkyjmAXPMRekBLS50ZXh0KGBlbnRlcu+8miR7xix9YOkAktFU5QHU/QCT5QD80EByZXR1cm7SNizJEekBH8oT5QDAyg/sARXLOOQAkchuxnfEdX07Cjwv6AJQ"},{default:n(()=>[y]),_:1}),g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCg0KSIgdGl0bGU9IlNob3cgS2V5YsQZIFdpdGggVMQaIj48L8hUyWFudW1iZXIta8gvx0TFByIgdi1tb2RlbDp2aXNpYsQYxwkiIDpjdXN0b23EOT0ixgxLZXkiIEBpbnB1dD0ixQflAKxvc2U9IsUHIsV25QCEz3c+Cjwv6gD8PHNjcmlwdMQuaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7zCfkARRUb2FzdMkjQGN1YnVpxHV1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDnASEgPeQAsihmYWxzZSnEQ8oi6QEtxSTmANEoWycuJ13JKWZ1bmN0aW9u5QDP6QHjymsgyGcudmFsdcRt5AIayD590EblAYwo5gFzzEXpAS0udGV4dChgZW50ZXLvvJoke8YsfWDpAJLRVOUB0f0Ak+UA/NBAcmV0dXJu0jYsyRHpAR/KE+UAwMoP7AEVyzjkAJHIbsZ3xHV9Owo8L+gCUA=="},{default:n(()=>[k]),_:1}),f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCg0KSIgdGl0bGU9IklkTnVtYmVyIEtleWLEHSI+PC/ITclabsUkLWvHJCB2LW1vZGVsOnZpc2lixEfHCSIgOmN1c3RvbcQrPSLGDEtleSIgQGlucHV0PSLFB+UAl29zZT0ixQcixWjFds9pPgo8L+oA5zxzY3JpcHTELmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wn5AD/VG9hc3TJI0BjdWJ1acR1dWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5wEhID3kALIoZmFsc2UpxEPKIukBLcUk5gDRKFsnWCddySlmdW5jdGlvbuUAz+kBzsprIMhnLnZhbHXEbeQCBcg+fdBG5QGMKOYBc8xF6QEtLnRleHQoYGVudGVy77yaJHvGLH1g6QCS0VTlAdH9AJPlAPzQQHJldHVybtI2LMkR6QEfyhPlAMDKD+wBFcs45ACRyG7Gd8R1fTsKPC/oAlA="},{default:n(()=>[w]),_:1}),v,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBkZXNjLXRleHQtYWxpZ249ImxlZnQiIEBjbGljaz0ic2hvd0tleUJvYXJkIiA6xC49InZhbMQ7dGl0bGU9IkJpbmQgVsUTPjwvyGjJdW51bWJlci1rZXlixEUgdi1tb2RlbDp2aXNpYsRAxwkiyhrETMlmbWF4bGVuZ3RoPSI25QCYb3NlPSLFByLFZcVzz2Y+Cjwv6gD/PHNjcmlwdMQuaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDnAL8gPcRTKGZhbHNlKcRDyyLkAMnHICcnzx1jdXN0b21LZXnFIeYAjyhbJy4nXckpZnVuY3Rpb24g7AGN6wCIIOgAhC7IauQB28g+fdBG5QE73T/lAMXQQHJldHVybtI2LMkR6QDLyhPFUsoP7ADByzjkAJHIbsZ3xHV9Owo8L+gBug=="},{default:n(()=>[I]),_:1}),A])}}});export{X as default,R as excerpt,_ as frontmatter};
