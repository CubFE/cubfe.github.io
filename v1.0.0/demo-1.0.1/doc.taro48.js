import{d as p,r,b as h,k as n,w as t,aq as e,e as a,o,l as s}from"./style_icon.js";const d={class:"markdown-body"},i=e(`<h1>NumberKeyboard 数字键盘</h1><h3>介绍</h3><p>虚拟数字键盘，用于输入支付密码的场景。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);
</code></pre><h3>默认键盘</h3><p>在线调试请将浏览器变为手机模式</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"默认键盘"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(" @"),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"input"'),s(" @"),a("span",{class:"hljs-attr"},"delete"),s("="),a("span",{class:"hljs-string"},'"onDelete"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"onDelete"),s("("),a("span",{class:"hljs-params"}),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'删除'"),s(`);
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
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'.'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
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
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'.'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
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
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'.'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
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
`)])],-1),v=a("h3",null,"身份证键盘",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard(4)"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"身份证键盘"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},":custom-key"),s("="),a("span",{class:"hljs-string"},'"customKey"'),s(" @"),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"input"'),s(" @"),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-number-keyboard"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customKey = "),a("span",{class:"hljs-title function_"},"reactive"),s("(["),a("span",{class:"hljs-string"},"'X'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"showKeyBoard"),s("("),a("span",{class:"hljs-params"}),s(`) {
        visible.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"input"),s("("),a("span",{class:"hljs-params"},"number"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`输入："),a("span",{class:"hljs-subst"},"${number}"),s("`")]),s(`);
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
`)])],-1),w=a("h3",null,"双向绑定",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":isLink"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"desc-text-align"),s("="),a("span",{class:"hljs-string"},'"left"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showKeyBoard"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"双向绑定："'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
`)])],-1),A=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否显示键盘</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>v-model</td><td>当前输入值</td><td>string</td><td>-</td></tr><tr><td>title</td><td>键盘标题</td><td>string</td><td>-</td></tr><tr><td>type</td><td>键盘模式</td><td>string</td><td><code class="">default</code>：默认样式<br><code class="">rightColumn</code>：带右侧栏</td></tr><tr><td>random-keys</td><td>随机数</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>custom-key</td><td>自定义键盘额外的键</td><td>string []</td><td><code class="">数组形式最多支持添加2个,超出默认取前2项</code></td></tr><tr><td>overlay</td><td>是否显示遮罩</td><td>boolean</td><td>false</td></tr><tr><td>maxlength</td><td>输入值最大长度，结合 v-model 使用</td><td>number | string</td><td><code class="">6</code></td></tr><tr><td>confirm-text</td><td>自定义完成按钮文字，如&quot;支付&quot;，&quot;下一步&quot;，&quot;提交&quot;等</td><td>string</td><td><code class="">完成</code></td></tr><tr><td>pop-class</td><td>自定义弹框类名</td><td>string</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>input</td><td>点击按键时触发</td><td>按键内容</td></tr><tr><td>delete</td><td>点击删除键时触发</td><td>-</td></tr><tr><td>close</td><td>点击关闭按钮或非键盘区域时触发</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-numberkeyboard-width</td><td><em>100%</em></td></tr><tr><td>--cub-numberkeyboard-padding</td><td><em>0</em></td></tr><tr><td>--cub-numberkeyboard-background-color</td><td><em>#f2f3f5</em></td></tr><tr><td>--cub-numberkeyboard-header-height</td><td><em>34px</em></td></tr><tr><td>--cub-numberkeyboard-header-padding</td><td><em>6px 0 0 0</em></td></tr><tr><td>--cub-numberkeyboard-header-color</td><td><em>#646566</em></td></tr><tr><td>--cub-numberkeyboard-header-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-padding</td><td><em>0 16px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-color</td><td><em>#576b95</em></td></tr><tr><td>--cub-numberkeyboard-header-close-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-numberkeyboard-header-close-background-color</td><td><em>transparent</em></td></tr><tr><td>--cub-numberkeyboard-key-background-color</td><td><em>#fff</em></td></tr><tr><td>--cub-numberkeyboard-key-active-background-color</td><td><em>#ebedf0</em></td></tr><tr><td>--cub-numberkeyboard-key-height</td><td><em>48px</em></td></tr><tr><td>--cub-numberkeyboard-key-line-height</td><td><em>1.5</em></td></tr><tr><td>--cub-numberkeyboard-key-border-radius</td><td><em>8px</em></td></tr><tr><td>--cub-numberkeyboard-key-font-size</td><td><em>28px</em></td></tr><tr><td>--cub-numberkeyboard-key-font-size-color</td><td><em>#333</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-font-size-color</td><td><em>#fff</em></td></tr><tr><td>--cub-numberkeyboard-key-finish-background-color</td><td><em>#1989fa</em></td></tr><tr><td>--cub-numberkeyboard-key-activeFinsh-background-color</td><td><em>#0570db</em></td></tr></tbody></table>',9),Z={},K="",W=p({__name:"doc.taro",setup(x,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(_,C)=>{const l=r("demo-block");return o(),h("div",d,[i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9Ium7mOiupOmUruebmCI+PC/IRclSbnVtYmVyLWtleWLEOSB2LW1vZGVsOnZpc2lixELHCSIgQGlucHV0PSLFByIgQGRlbGV0ZT0ib25ExQrlAIpvc2U9IsUHIsVjxXHPZD4KPC/qANo8c2NyaXB0xC5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5wCzID3ESShmYWxzZSnEQ8QBZnVuY3Rpb24g7AEvy0IgyD4udmFsdcRE5AFmyD590EblAQ0o5gDhzEXkAIlvbGUubG9nKGDovpPlhaXvvJoke8YqfWDpAJDRUugBT+0AlMxPJ+WIoOmZpCfaQ+UBgP0A1OUBFNBAcmV0dXJu0jYsyRHlAO7KD+wBQ8oWxX7KD+gA0MhtxnbEdH07Cjwv6AH+"},{default:t(()=>[j]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9IuW4puWPs+S+p+agj+mUruebmCI+PC/IS8lYbnVtYmVyLWtleWLEPwogICAgdHlwZT0icmlnaHRDb2x1bW4ixRd2LW1vZGVsOnZpc2lixGPHCcYeOmN1c3RvbcRKPSLGDEtlecYcY29uZmlybS10ZXh0PSLmlK/ku5jGGkBpbnB1dD0ixQfHE2Nsb3NlPSLFB8QT5QCs5QC67wCtPgo8L+oBKTxzY3JpcHTELmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSdkZWZhdWx0IHvFf3NldHVwKCnHDuUAvHN0IOcA6yA9xFMoZmFsc2UpxEPKIukA88UkxnIoWycuJ13JKWZ1bmN0aW9uIOwBsctrIMhnLnZhbHXEbeQB6Mg+fdBG5QE0KOYBFMxF5ACQb2xlLmxvZyhg6L6T5YWl77yaJHvGKn1g6QCQ0VLlAXP9AJHlAPrQQHJldHVybtI2LMkR6QEdyhPlAL7KD+wBE8s45ACRyG7Gd8R1fTsKPC/oAe8="},{default:t(()=>[m]),_:1}),b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCIgdGl0bGU9Iumaj+acuuaVsOmUruebmCI+PC/ISMlVbnVtYmVyLWtleWLEPAogICAgdHlwZT0icmlnaHRDb2x1bW4ixRd2LW1vZGVsOnZpc2lixGDHCcYeOnJhbmRvbUtleXPnAJ3GF2N1c3RvbcRhPSLGDEtlecYcQGlucHV0PSLFB8cTY2xvc2U9IsUHxBPlAKnlALfvAKo+Cjwv6gEjPHNjcmlwdMQuaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge8V/c2V0dXAoKccOICBjb25zdCDnAOggPcRTKGZhbHNlKcRDyiLpANnFJMZyKFsnLiddySlmdW5jdGlvbiDsAavLayDIZy52YWx1xG3kAUXIPn3QRuUBNCjmARTMReQAkG9sZS5sb2coYOi+k+WFpe+8miR7xip9YOkAkNFS5QFz/QCR5QD60EByZXR1cm7SNizJEekBHcoT5QC+yg/sARPLOOQAkchuxnfEdX07Cjwv6AHv"},{default:t(()=>[g]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCg0KSIgdGl0bGU9IuW4puagh+mimOagj+mUruebmCI+PC/ITslbbnVtYmVyLWtleWLEQsg+6buY6K6kxzggdi1tb2RlbDp2aXNpYsQfxwkiIDpjdXN0b23EQD0ixgxLZXkiIEBpbnB1dD0ixQflAK1vc2U9IsUHIsV95QCLz34+Cjwv6gD9PHNjcmlwdMQuaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCDnAMIgPcRTKGZhbHNlKcRDyiLpAM7FJMZyKFsnLiddySlmdW5jdGlvbiDtAYXKayDIZy52YWx1xG3kAbzIPn3QRuUBLSjmARTMReQAkG9sZS5sb2coYOi+k+WFpe+8miR7xip9YOkAkNFS5QFw/QCR5QD60EByZXR1cm7SNizJEekBHcoT5QC+yg/sARPLOOQAkchuxnfEdX07Cjwv6AHv"},{default:t(()=>[k]),_:1}),v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBAY2xpY2s9InNob3dLZXlCb2FyZCg0KSIgdGl0bGU9Iui6q+S7veivgemUruebmCI+PC/IS8lYbnVtYmVyLWtleWLEPyB2LW1vZGVsOnZpc2lixEXHCSIgOmN1c3RvbcQrPSLGDEtleSIgQGlucHV0PSLFB+UAlW9zZT0ixQcixWjFds9pPgo8L+oA5TxzY3JpcHTELmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSdkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg5wDCID3EUyhmYWxzZSnEQ8oi6QDOxSTGcihbJ1gnXckpZnVuY3Rpb24g7QFtymsgyGcudmFsdcRt5AGkyD590EblAS0o5gEUzEXkAJBvbGUubG9nKGDovpPlhaXvvJoke8YqfWDpAJDRUuUBcP0AkeUA+tBAcmV0dXJu0jYsyRHpAR3KE+UAvsoP7AETyzjkAJHIbsZ3xHV9Owo8L+gB7w=="},{default:t(()=>[f]),_:1}),w,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6aXNMaW5rPSJ0cnVlIiBkZXNjLXRleHQtYWxpZ249ImxlZnQiIEBjbGljaz0ic2hvd0tleUJvYXJkIiA6xC49InZhbMQ7dGl0bGU9IuWPjOWQkee7keWumu+8miI+PC/Ibcl6bnVtYmVyLWtleWLESiB2LW1vZGVsOnZpc2lixEXHCSLKGsRkyWttYXhsZW5ndGg9IjblAJ1vc2U9IsUHIsVlxXPPZj4KPC/qAQQ8c2NyaXB0xC5pbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOcAvyA9xFMoZmFsc2UpxEPLIuQAyccgJyfPHWN1c3RvbUtlecUh5gCPKFsnLiddySlmdW5jdGlvbiDsAZLrAIgg6ACELshq5AHgyD590EblATvdP+UAxdBAcmV0dXJu0jYsyRHpAMvKE8VSyg/sAMHLOOQAkchuxnfEdX07Cjwv6AG6"},{default:t(()=>[I]),_:1}),A])}}});export{W as default,K as excerpt,Z as frontmatter};
