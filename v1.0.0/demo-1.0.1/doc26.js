import{d,r as o,b as p,k as l,w as n,aq as c,e as t,o as r,l as s}from"./style_icon.js";const h={class:"markdown-body"},i=c(`<h1>Dialog 对话框</h1><h3>介绍</h3><p>模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。</p><p>弹出框组件支持函数调用和组件调用两种方式。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp, createVNode } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);
</code></pre><h3>函数式调用</h3>`,7),j=t("pre",null,[t("code",{class:"language-html"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell-group"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"函数式调用"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"基础弹框"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"baseClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"透明弹框"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"transparentClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"支持富文本 html"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"htmlClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"异步关闭"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"beforeCloseClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"无标题弹框"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"noTitleClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"提示弹框"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"tipsClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"底部按钮 垂直调用"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"verticalClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref, createVNode } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`;
  `),t("span",{class:"hljs-keyword"},"import"),s(" { showDialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),t("span",{class:"hljs-keyword"},"import"),s(),t("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/dialog/style'"),s(`;
  `),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
    `),t("span",{class:"hljs-title function_"},"setup"),s("("),t("span",{class:"hljs-params"}),s(`) {
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"onCancel"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        `),t("span",{class:"hljs-variable language_"},"console"),s("."),t("span",{class:"hljs-title function_"},"log"),s("("),t("span",{class:"hljs-string"},"'event cancel'"),s(`);
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"onOk"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        `),t("span",{class:"hljs-variable language_"},"console"),s("."),t("span",{class:"hljs-title function_"},"log"),s("("),t("span",{class:"hljs-string"},"'event ok'"),s(`);
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(" baseClick = (): "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"void"),s(" =>")]),s(` {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'基础弹框'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-title function_"},"createVNode"),s("("),t("span",{class:"hljs-string"},"'span'"),s(", { "),t("span",{class:"hljs-attr"},"style"),s(": { "),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'red'"),s(" } }, "),t("span",{class:"hljs-string"},"'我可以是一个自定义组件'"),s(`),
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(" transparentClick = (): "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"void"),s(" =>")]),s(` {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"overlayStyle"),s(": { "),t("span",{class:"hljs-attr"},"background"),s(": "),t("span",{class:"hljs-string"},"'rgba(0,0,0,0)'"),s(` },
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'透明弹框'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'Content'"),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(" htmlClick = (): "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"void"),s(" =>")]),s(` {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'支持富文本 html'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(`:
            `),t("span",{class:"hljs-string"},`"<p style='color:red'>html</p><img src='https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg' />"`),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(" beforeCloseClick = (): "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"void"),s(" =>")]),s(` {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'异步关闭'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'点击确认后，1秒后关闭'"),s(`,
          onCancel,
          onOk,
          `),t("span",{class:"hljs-attr"},"beforeClose"),s(": "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"action: string"),s(") =>")]),s(` {
            `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-keyword"},"new"),s(),t("span",{class:"hljs-title class_"},"Promise"),s("("),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"r"),s(") =>")]),s(` {
              `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
                `),t("span",{class:"hljs-title function_"},"r"),s("(action == "),t("span",{class:"hljs-string"},"'ok'"),s(`);
              }, `),t("span",{class:"hljs-number"},"1000"),s(`);
            });
          }
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"noTitleClick"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'无标题弹框'"),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"tipsClick"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'温馨提示'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'支持函数调用和组件调用两种方式。'"),s(`,
          `),t("span",{class:"hljs-attr"},"noCancelBtn"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"verticalClick"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'温馨提示'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'支持底部按钮纵向排列。'"),s(`,
          `),t("span",{class:"hljs-attr"},"footerDirection"),s(": "),t("span",{class:"hljs-string"},"'vertical'"),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"return"),s(` {
        baseClick,
        transparentClick,
        htmlClick,
        beforeCloseClick,
        noTitleClick,
        tipsClick,
        verticalClick
      };
    }
  };
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=t("h3",null,"标签式使用",-1),u=t("pre",null,[t("code",{class:"language-html"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell-group"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"标签式使用"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"标签式使用"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"componentClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-dialog"),s(`
      `),t("span",{class:"hljs-attr"},"teleport"),s("="),t("span",{class:"hljs-string"},'"#app"'),s(`
      `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"组件调用"'),s(`
      `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"'),s(`
      `),t("span",{class:"hljs-attr"},"v-model:visible"),s("="),t("span",{class:"hljs-string"},'"visible"'),s(`
    >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-dialog"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"底部按钮 垂直使用"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"componentvVrticalClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-dialog"),s(`
      `),t("span",{class:"hljs-attr"},"footer-direction"),s("="),t("span",{class:"hljs-string"},'"vertical"'),s(`
      `),t("span",{class:"hljs-attr"},"teleport"),s("="),t("span",{class:"hljs-string"},'"#app"'),s(`
      `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"组件调用"'),s(`
      `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"'),s(`
      `),t("span",{class:"hljs-attr"},"v-model:visible"),s("="),t("span",{class:"hljs-string"},'"visible1"'),s(`
    >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-dialog"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`;
  `),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
    `),t("span",{class:"hljs-title function_"},"setup"),s("("),t("span",{class:"hljs-params"}),s(`) {
      `),t("span",{class:"hljs-keyword"},"const"),s(" visible = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-literal"},"false"),s(`);
      `),t("span",{class:"hljs-keyword"},"const"),s(" visible1 = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-literal"},"false"),s(`);
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"componentClick"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        visible.`),t("span",{class:"hljs-property"},"value"),s(" = "),t("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"componentvVrticalClick"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        visible1.`),t("span",{class:"hljs-property"},"value"),s(" = "),t("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),t("span",{class:"hljs-keyword"},"return"),s(` { visible, visible1, componentClick, componentvVrticalClick };
    }
  };
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=t("h3",null,"teleport 使用，挂载到指定节点",-1),b=t("pre",null,[t("code",{class:"language-html"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell-group"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Teleport 使用，挂载到指定节点"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"body element node"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"teleportClick('body')"`),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"#app element node"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"teleportClick('#app')"`),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"demo class element node"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"teleportClick('.demo')"`),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { showDialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),t("span",{class:"hljs-keyword"},"import"),s(),t("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/dialog/style'"),s(`;
  `),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
    `),t("span",{class:"hljs-title function_"},"setup"),s("("),t("span",{class:"hljs-params"}),s(`) {
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"onCancel"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        `),t("span",{class:"hljs-variable language_"},"console"),s("."),t("span",{class:"hljs-title function_"},"log"),s("("),t("span",{class:"hljs-string"},"'event cancel'"),s(`);
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"teleportClick"),s(" = ("),t("span",{class:"hljs-params"},"teleport: string"),s(`) => {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          teleport,
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'teleport to '"),s(` + teleport,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'打开开发者工具看一下 Elements Tab'"),s(`,
          `),t("span",{class:"hljs-attr"},"noCancelBtn"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
          onCancel
        });
      };
      `),t("span",{class:"hljs-keyword"},"return"),s(` {
        teleportClick
      };
    }
  };
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=c('<h2>API</h2><h3>DialogOptions</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>-</td></tr><tr><td>id</td><td>标识符，相同时共用一个实例，默认为多个实例</td><td>string | number</td><td><code class="">new Date().getTime()</code></td></tr><tr><td>content</td><td>内容，支持 <code class="">HTML</code> 和组件</td><td>string | VNode</td><td>-</td></tr><tr><td>teleport</td><td>指定挂载节点</td><td>string</td><td><code class="">&quot;body&quot;</code></td></tr><tr><td>closeOnClickOverlay</td><td>点击蒙层是否关闭对话框</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>noFooter</td><td>是否隐藏底部按钮栏</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>noOkBtn</td><td>是否隐藏确定按钮</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>noCancelBtn</td><td>是否隐藏取消按钮</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cancelText</td><td>取消按钮文案</td><td>string</td><td><code class="">”取消“</code></td></tr><tr><td>okText</td><td>确定按钮文案</td><td>string</td><td><code class="">”确定“</code></td></tr><tr><td>cancelAutoClose</td><td>取消按钮是否默认关闭弹窗</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>textAlign</td><td>文字对齐方向，可选值同 <code class="">css</code> 的 <code class="">text-align</code></td><td>string</td><td><code class="">&quot;center&quot;</code></td></tr><tr><td>closeOnPopstate</td><td>是否在页面回退时自动关闭</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>customClass</td><td>自定义 <code class="">class</code></td><td>string</td><td>-</td></tr><tr><td>overlayClass</td><td>自定义遮罩类名</td><td>string</td><td>-</td></tr><tr><td>overlayStyle</td><td>自定义遮罩样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>popClass</td><td>自定义 <code class="">popup</code> 弹框类名</td><td>string</td><td>-</td></tr><tr><td>popStyle</td><td>自定义 <code class="">popup</code> 弹框样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>onUpdate</td><td>更新</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>onOk</td><td>确定按钮回调</td><td>Function</td><td>-</td></tr><tr><td>onCancel</td><td>取消按钮回调</td><td>Function</td><td>-</td></tr><tr><td>onOpened</td><td>打开弹框后回调</td><td>Function</td><td>-</td></tr><tr><td>onClosed</td><td>关闭弹框后回调</td><td>Function</td><td>-</td></tr><tr><td>beforeClose</td><td>关闭前的回调函数，返回 <code class="">false</code> 可阻止关闭，支持返回 <code class="">Promise</code></td><td>Function(action: string)</td><td>-</td></tr></tbody></table><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>-</td></tr><tr><td>content</td><td>内容，支持 HTML 和组件</td><td>string | VNode</td><td></td></tr><tr><td>teleport</td><td>指定挂载节点</td><td>string</td><td><code class="">&quot;body&quot;</code></td></tr><tr><td>close-on-click-overlay</td><td>点击蒙层是否关闭对话框</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>no-footer</td><td>是否隐藏底部按钮栏</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>no-ok-btn</td><td>是否隐藏确定按钮</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>no-cancel-btn</td><td>是否隐藏取消按钮</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>string</td><td><code class="">”取消“</code></td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>string</td><td><code class="">”确 定“</code></td></tr><tr><td>cancel-auto-close</td><td>取消按钮是否默认关闭弹窗</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>text-align</td><td>文字对齐方向，可选值同 css 的 text-align</td><td>string</td><td><code class="">&quot;center&quot;</code></td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>footer-direction</td><td>使用横纵方向 可选值 <code class="">horizontal</code>、<code class="">vertical</code></td><td>string</td><td><code class="">horizontal</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩类名</td><td>string</td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>pop-class</td><td>自定义 popup 弹框类名</td><td>string</td><td>-</td></tr><tr><td>pop-style</td><td>自定义 popup 弹框样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>custom-class</td><td>自定义 class</td><td>string</td><td>-</td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code class="">false</code> 可阻止关闭，支持返回 <code class="">Promise</code></td><td>Function(action: string)</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>ok</td><td>确定按钮回调</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>取消按钮回调</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>关闭弹框回调</td><td>Function</td><td>-</td></tr><tr><td>opened</td><td>打开弹框回调</td><td>Function</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>header</td><td>自定义标题区域</td></tr><tr><td>default</td><td>自定义内容</td></tr><tr><td>footer</td><td>自定义底部按钮区域</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-dialog-width</td><td><em>296px</em></td></tr><tr><td>--cub-dialog-header-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-dialog-header-color</td><td><em>rgba(38, 38, 38, 1)</em></td></tr><tr><td>--cub-dialog-footer-justify-content</td><td><em>space-around</em></td></tr></tbody></table>',13),v={},A="",B=d({__name:"doc",setup(y,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(C,w)=>{const a=o("demo-block");return r(),p("div",h,[i,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i5Ye95pWw5byP6LCD55SoIsQryy3JJ5+656GA5by55qGGIiBAY2xpY2s9ImJhc2VDxAsiPjwvyDPXQumAj+aYjtBCdHJhbnNwYXJlbnTfSclJ5pSv5oyB5a+M5paH5pysIGh0bWzKUcQO30rJSuW8guatpeWFs+mXrcpCYmVmb3JlQ2xv/wDcy0nml6DmoIfpopjwAN9ub1TEIt9IykiPkOekutBFdGlwc99CyULlupXpg6jmjInpkq4g5Z6C55u05wHZyU92ZXJ0aWNh9gEmyg7mAic+Cjwv6gJGPHNjcmlwdCBsYW5nPSJ0c+UCLmltcG9ydCB7IHJlZiwgY3JlYXRlVk5vZGUgfSBmcm9tICd2dWUnO8wqc2hvd0RpYWxvZ8kkQGN1YnVpxH51acwtzRkvZGlzdC9wYWNrYWdlcy9kxUMvc3R5bMZhZXjFNGRlZmF1bHQge+UBJHNldHVwKCnHDiAgY29uc3Qgb25DYW5jZWwgPSAoKSA9PskfxiFvbGUubG9nKCdldmVudCBjxSwnKcRlxAF9yAnITU9r30nHSW9r2UXpA03FSjogdm9pZM5Q6gE3KMoVIOYB+zogJ+wDpCcsyyFjb250ZW50OuwBnSgnc3Bhbics5AGO5AFAOiB7IGNvbG9yOiAncmVkJyB9IH0sICfmiJHlj6/ku6XmmK/kuIDkuKroh6rlrprkuYnnu4Tku7YnKcxq6AFWzhRPa8kPffgA/vAECf8BBfEBBW92ZXJsYXlT6ADMYmFja+QCwm5k5ADRZ2JhKDAsxQIpJyB97ACf6AE+7ASg9gE+J0PGCs0e/wDy+wDy6QSq/wDr+QHw9AUJ9QC6yxMgICI8cOYB8j0n5gHw5AHuPsQ8PC9wPjxpbWcgc3JjPSdodHRwczovL29zcy5uZXRjb25jZXB0cy5jbi93ZWJzaXRlL2Fzc2V0cy9tZWRpYS93YXAvYmxvZy13YXAtYmctMS5qcGcnIC8+Iv8BL/8BL+kDH+8Fl/8BNvoDJusF9fcB6OeCueWHu+ehruiupOWQju+8jDHnp5LlkI7TNvgA0cwQ6wC7OiAoYWN0aW9uOiBzdHJpbmfvBDPEAXJldHVybiBuZXcgUHJvbWlzZSgoctMo5QTbVGltZW91dCjwBHzJTcdwID09ICfsBH7IAX0sIDEwMDDPGOoBh8UO/wGfc3Qg7Abq8wUL9wGV6gF07wdD/wFk/wI16gRW6Ac7/wCT9ANeuKnppqjmB5L3AijnA4HlCULmB2blkozmBRfGD+S4pOenjeaWueW8j+OAgs1Hbm/mANVCdG46IHRydWX/APL/APLoAPLtB97/APb/APb+APbrCGnnurXlkJHmjpLliJfwAOdmb290ZXJEaXJl5wL3J+gAov8B4/8A8eoDKOoAx+kHQspG8AZXyhrpBX/KE/AEY8oa7ALey13oAl7KE+0Bf+4AseQDRX07Cjwv5glFPgo="},{default:n(()=>[j]),_:1}),g,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i5qCH562+5byP5L2/55SoIsQryy3YJyBAY2xpY2s9ImNvbXBvbmVudEPEECI+PC/IO8tKZGlhbG9nxRAgIHRlbGVwb3J0PSIjYXBwIsgWxmjnu4Tku7bosIPEZccbY29udGVudD0i5aaC5p6c6ZyA6KaB5Zyo5by556qX5YaF5bWM5YWlxjvmiJblhbbku5boh6rlrprkuYnEIa6577yM5Y+v5Lul5gDBzGjnmoTmlrnlvI/jgILIdHYtbW9kZWw6dmlzaWLkAJnHCcYg5wDb5QDr5gDc9wE35bqV6YOo5oyJ6ZKuIOWeguebtPkBQXZWcnRpY2Fs/wFJ6gFJZm9vdGVyLWRpcmVjdGlvbj0idmXGQ+kBVf8Ba/8Ba/8Ba/8Ba/8Ba/8Ba2xlMfwBbOoBHuYCzz4KPC/qAu48c2NyaXB0IGxhbmc9InRz5QLWaW3kAQsgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvFdXNldHVwKCnHDuUBHnN0IOcAnyA9xEkoZmFsc2UpxEPRIjHbI+4DNyA9ICgpID0+yWogyEQudmFsdcRsdHJ1ZchDfddM7QJC2lQx3lVyZXR1cm4ge8gvLMk4LMprxWPLEM57x0x9CsVXPC/mAY8+Cg=="},{default:n(()=>[u]),_:1}),m,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iVGVsZXBvcnQg5L2/55So77yM5oyC6L295Yiw5oyH5a6a6IqC54K5IsRDy0XIP2JvZHkgZWxlbWVudCBub2RlIiBAY2xpY2s9InTHWkPEDygnxConKSI+PC/IRNdTI2FwcN9Tx1PEKt9TxlNkZW1vIGNsYXNz31nHWS7EMdJayg7mAUQ+Cjwv6gFjPHNjcmlwdCBsYW5nPSJ0c+UBM2ltxFcgeyBzaG93RGlhbG9nIH0gZnJvbSAnQGN1YnVpxFR1aSc7yi3NGS9kaXN0L3BhY2thZ2VzL2TFQy9zdHlsZcU0ZXjFNGRlZmF1bHQge+UBAXNldHVwKCnHDiAgY29uc3Qgb25DYW5jZWwgPSAoKSA9PskfxiFvbGUubG9nKCdlduQBIWPFLCcpxGXEAX3ICcZN7QEyxFLIETogc3RyaW5nz2LqAQAoyhUgyUcszBTkAbU6ICfIHCB0byAnICvVLGNvbnRlbnQ6ICfmiZPlvIDEA4+R6ICF5bel5YW355yL5LiA5LiLIEXmAfhzIFRhYifMQm5v5gEWQnRuOiB0cnVlzB3oATPJE33yARByZXR1cm7rAOvtARvOLn0KxQs8L+YCLD4K"},{default:n(()=>[b]),_:1}),k])}}});export{B as default,A as excerpt,v as frontmatter};
