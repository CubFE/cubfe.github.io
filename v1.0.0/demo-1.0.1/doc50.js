import{d as p,r,b as o,k as n,w as t,aq as e,e as a,o as h,l as s}from"./style_icon.js";const d={class:"markdown-body"},i=e(`<h1>NumberKeyboard 数字键盘</h1><h3>介绍</h3><p>虚拟数字键盘，用于输入支付密码的场景。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);
</code></pre><h3>默认键盘</h3><p>在线调试请将浏览器变为手机模式</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"默认键盘"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"onDelete"),s("("),a("span",{class:"hljs-params"}),s(`) {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'删除'"),s(`);
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
`)])],-1),u=a("h3",null,"带右侧栏键盘",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"带右侧栏键盘"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"rightColumn"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(`
    `),a("span",{class:"hljs-attr"},":custom-key"),s("="),a("span",{class:"hljs-string"},'"customKey"'),s(`
    `),a("span",{class:"hljs-attr"},"confirm-text"),s("="),a("span",{class:"hljs-string"},'"支付"'),s(`
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
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
`)])],-1),b=a("h3",null,"随机数键盘",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"随机数键盘"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
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
`)])],-1),y=a("h3",null,"带标题栏键盘",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard(4)"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"带标题栏键盘"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"默认键盘"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":custom-key"),s("="),a("span",{class:"hljs-string"},'"customKey"'),s(" @"),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"input"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(">")]),s(`
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
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
`)])],-1),f=a("h3",null,"身份证键盘",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard(4)"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"身份证键盘"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
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
`)])],-1),v=a("h3",null,"双向绑定",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"desc-text-align"),s("="),a("span",{class:"hljs-string"},'"left"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"双向绑定："'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"maxlength"),s("="),a("span",{class:"hljs-string"},'"6"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
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
`)])],-1),A=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否显示键盘</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>v-model</td><td>当前输入值</td><td>string</td><td>-</td></tr><tr><td>title</td><td>键盘标题</td><td>string</td><td>-</td></tr><tr><td>type</td><td>键盘模式</td><td>string</td><td><code class="">default</code>：默认样式<br><code class="">rightColumn</code>：带右侧栏</td></tr><tr><td>random-keys</td><td>随机数</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>custom-key</td><td>自定义键盘额外的键</td><td>string []</td><td><code class="">数组形式最多支持添加2个,超出默认取前2项</code></td></tr><tr><td>maxlength</td><td>输入值最大长度，结合 v-model 使用</td><td>number | string</td><td><code class="">6</code></td></tr><tr><td>confirm-text</td><td>自定义完成按钮文字，如&quot;支付&quot;，&quot;下一步&quot;，&quot;提交&quot;等</td><td>string</td><td><code class="">完成</code></td></tr><tr><td>pop-class</td><td>自定义弹框类名</td><td>string</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>input</td><td>点击按键时触发</td><td>按键内容</td></tr><tr><td>delete</td><td>点击删除键时触发</td><td>-</td></tr><tr><td>close</td><td>点击关闭按钮时触发</td><td>-</td></tr><tr><td>blur</td><td>点击关闭按钮或非键盘区域时触发</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-numberkeyboard-width</td><td><em>100%</em></td></tr><tr><td>--cub-numberkeyboard-padding</td><td><em>0</em></td></tr><tr><td>--cub-numberkeyboard-background-color</td><td><em>#f2f3f5</em></td></tr><tr><td>--cub-numberkeyboard-header-height</td><td><em>34px</em></td></tr><tr><td>--cub-numberkeyboard-header-padding</td><td><em>6px 0 0 0</em></td></tr><tr><td>--cub-numberkeyboard-header-color</td><td><em>#646566</em></td></tr><tr><td>--cub-numberkeyboard-header-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-padding</td><td><em>0 16px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-color</td><td><em>#576b95</em></td></tr><tr><td>--cub-numberkeyboard-header-close-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-background-color</td><td><em>transparent</em></td></tr><tr><td>--cub-numberkeyboard-key-background-color</td><td><em>#fff</em></td></tr><tr><td>--cub-numberkeyboard-key-active-background-color</td><td><em>#ebedf0</em></td></tr><tr><td>--cub-numberkeyboard-key-height</td><td><em>48px</em></td></tr><tr><td>--cub-numberkeyboard-key-line-height</td><td><em>1.5</em></td></tr><tr><td>--cub-numberkeyboard-key-border-radius</td><td><em>8px</em></td></tr><tr><td>--cub-numberkeyboard-key-font-size</td><td><em>28px</em></td></tr><tr><td>--cub-numberkeyboard-key-font-size-color</td><td><em>#333</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-font-size-color</td><td><em>#fff</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-background-color</td><td><em>#1989fa</em></td></tr><tr><td>--cub-numberkeyboard-key-activeFinsh-background-color</td><td><em>#0570db</em></td></tr></tbody></table>',9),Z={},B="",Q=p({__name:"doc",setup(x,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(C,W)=>{const l=r("demo-block");return h(),o("div",d,[i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9Ium7mOiupOmUruebmCI+PC/IRclSbnVtYmVyLWtleWLEOSB2LW1vZGVsOnZpc2lixELHCSIgQGlucHV0PSLFByIgQGRlbGV0ZT0ib25ExQrlAIpvc2U9IsUHIsVjxXHPZD4KPC/qANo8c2NyaXB0xC5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wd5ADoVG9hc3TJI0BjdWJ1acRrdWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5wESID3kAKgoZmFsc2UpxEPEAWZ1bmN0aW9u5QCm6AGOy0IgyD4udmFsdcRE5AHFyD590EblAWwo5gFAzEXpAQQudGV4dChg6L6T5YWl77yaJHvGLX1g6QCT0VXoAbHtAJfPUifliKDpmaQn2kblAeX9ANrlARrQQHJldHVybtI2LMkR5QD0yg/sAUnKFsV+yg/oANPIbcZ2xHR9Owo8L+gCYw=="},{default:t(()=>[j]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9IuW4puWPs+S+p+agj+mUruebmCI+PC/IS8lYbnVtYmVyLWtleWLEPwogICAgdHlwZT0icmlnaHRDb2x1bW4ixRd2LW1vZGVsOnZpc2lixGPHCcYeOmN1c3RvbcRKPSLGDEtlecYcY29uZmlybS10ZXh0PSLmlK/ku5jGGkBpbnB1dD0ixQfHE2Nsb3NlPSLFB8QT5QCs5QC67wCtPgo8L+oBKTxzY3JpcHTELmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wn5AFBVG9hc3TJI0BjdWJ1acR1dWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHvlAN5zZXR1cCgpxw7lARtzdCDnAUogPeQAsihmYWxzZSnEQ8oi6QFSxSTmANEoWycuJ13JKWZ1bmN0aW9u5QDP6AIQy2sgyGcudmFsdcRt5AJHyD590EblAZMo5gFzzEXpAS0u5AHPKGDovpPlhaXvvJoke8YtfWDpAJPRVeUB1f0AlOUA/dBAcmV0dXJu0jYsyRHpASDKE+UAwcoP7AEWyzjkAJHIbsZ3xHV9Owo8L+gCUQ=="},{default:t(()=>[m]),_:1}),b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9Iumaj+acuuaVsOmUruebmCI+PC/ISMlVbnVtYmVyLWtleWLEPAogICAgdHlwZT0icmlnaHRDb2x1bW4ixRd2LW1vZGVsOnZpc2lixGDHCcYeOnJhbmRvbUtleXPnAJ3GF2N1c3RvbcRhPSLGDEtlecYcQGlucHV0PSLFB8cTY2xvc2U9IsUHxBPlAKnlALfvAKo+Cjwv6gEjPHNjcmlwdMQuaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7zCfkATtUb2FzdMkjQGN1YnVpxHV1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+UA3nNldHVwKCnHDiAgY29uc3Qg5wFHID3kALIoZmFsc2UpxEPKIukBOMUk5gDRKFsnLiddySlmdW5jdGlvbuUAz+gCCstrIMhnLnZhbHXEbeQBpMg+fdBG5QGTKOYBc8xF6QEtLnRleHQoYOi+k+WFpe+8miR7xi19YOkAk9FV5QHV/QCU5QD90EByZXR1cm7SNizJEekBIMoT5QDByg/sARbLOOQAkchuxnfEdX07Cjwv6AJR"},{default:t(()=>[g]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCg0KSIgdGl0bGU9IuW4puagh+mimOagj+mUruebmCI+PC/ITslbbnVtYmVyLWtleWLEQsg+6buY6K6kxzggdi1tb2RlbDp2aXNpYsQfxwkiIDpjdXN0b23EQD0ixgxLZXkiIEBpbnB1dD0ixQflAK1vc2U9IsUHIsV95QCLz34+Cjwv6gD9PHNjcmlwdMQuaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7zCfkARVUb2FzdMkjQGN1YnVpxHV1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDnASEgPeQAsihmYWxzZSnEQ8oi6QEtxSTmANEoWycuJ13JKWZ1bmN0aW9u5QDP6QHkymsgyGcudmFsdcRt5AIbyD590EblAYwo5gFzzEXpAS0udGV4dChg6L6T5YWl77yaJHvGLX1g6QCT0VXlAdL9AJTlAP3QQHJldHVybtI2LMkR6QEgyhPlAMHKD+wBFss45ACRyG7Gd8R1fTsKPC/oAlE="},{default:t(()=>[k]),_:1}),f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCg0KSIgdGl0bGU9Iui6q+S7veivgemUruebmCI+PC/IS8lYbnVtYmVyLWtleWLEPyB2LW1vZGVsOnZpc2lixEXHCSIgOmN1c3RvbcQrPSLGDEtleSIgQGlucHV0PSLFB+UAlW9zZT0ixQcixWjFds9pPgo8L+oA5TxzY3JpcHTELmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wn5AD9VG9hc3TJI0BjdWJ1acR1dWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5wEhID3kALIoZmFsc2UpxEPKIukBLcUk5gDRKFsnWCddySlmdW5jdGlvbuUAz+kBzMprIMhnLnZhbHXEbeQCA8g+fdBG5QGMKOYBc8xF6QEtLnRleHQoYOi+k+WFpe+8miR7xi19YOkAk9FV5QHS/QCU5QD90EByZXR1cm7SNizJEekBIMoT5QDByg/sARbLOOQAkchuxnfEdX07Cjwv6AJR"},{default:t(()=>[w]),_:1}),v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBkZXNjLXRleHQtYWxpZ249ImxlZnQiIEBjbGljaz0ic2hvd0tleUJvYXJkIiA6xC49InZhbMQ7dGl0bGU9IuWPjOWQkee7keWumu+8miI+PC/Ibcl6bnVtYmVyLWtleWLESiB2LW1vZGVsOnZpc2lixEXHCSLIGsllbWF4bGVuZ3RoPSI25QCXb3NlPSLFByI+IMZrz14+Cjwv6gD8PHNjcmlwdOQAi2ltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSdkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5wC3ID3EUyhmYWxzZSnEQ8si5ADHxyAnJ88dY3VzdG9tS2V5xSHmAI8oWycuJ13JKWZ1bmN0aW9uIOwBiusAiCDoAIQuyGrkAdjIPn3QRuUBOd0/5QDF0EByZXR1cm7SNizJEekAy8oTxVLKD+wAwcs45ACRyG7Gd8R1fTsKPC/oAbo="},{default:t(()=>[I]),_:1}),A])}}});export{Q as default,B as excerpt,Z as frontmatter};
