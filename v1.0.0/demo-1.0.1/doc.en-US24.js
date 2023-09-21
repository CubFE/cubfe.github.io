import{d as o,r as d,b as p,k as l,w as n,aq as e,e as t,o as r,l as s}from"./style_icon.js";const i={class:"markdown-body"},h=e(`<h1>Dialog</h1><h3>Intro</h3><p>Modal dialog box is displayed in the floating layer to guide users to carry out relevant operations. It is often used for message prompt, message confirmation, or completing specific interactive operations in the current page.</p><p>The popup box component supports function call and component call.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp, createVNode } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);
</code></pre><h3>Function use</h3>`,7),j=t("pre",null,[t("code",{class:"language-html"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell-group"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Function Use"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Basic Usage"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"baseClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Transparent Dialog"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"transparentClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Use html"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"htmlClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Before Close"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"beforeCloseClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"No Title"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"noTitleClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Tips Dialog"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"tipsClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Bottom button vertical use"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"verticalClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Basic spring frame'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-title function_"},"createVNode"),s("("),t("span",{class:"hljs-string"},"'span'"),s(", { "),t("span",{class:"hljs-attr"},"style"),s(": { "),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'red'"),s(" } }, "),t("span",{class:"hljs-string"},"'I can be a custom component'"),s(`),
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(" transparentClick = (): "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"void"),s(" =>")]),s(` {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"overlayStyle"),s(": { "),t("span",{class:"hljs-attr"},"background"),s(": "),t("span",{class:"hljs-string"},"'rgba(0,0,0,0)'"),s(` },
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Transparent Dialog'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'Content'"),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(" htmlClick = (): "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"void"),s(" =>")]),s(` {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Use html'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(`:
            `),t("span",{class:"hljs-string"},`"<p style='color:red'>html</p><img src='https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg' />"`),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(" beforeCloseClick = (): "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"void"),s(" =>")]),s(` {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Before Close'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'Click confirm to close it in 1 second'"),s(`,
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
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'Content'"),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"tipsClick"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Title'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'Function call and component call are supported.'"),s(`,
          `),t("span",{class:"hljs-attr"},"noCancelBtn"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
          onCancel,
          onOk
        });
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"verticalClick"),s(" = ("),t("span",{class:"hljs-params"}),s(`) => {
        `),t("span",{class:"hljs-title function_"},"showDialog"),s(`({
          `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Title'"),s(`,
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'Support vertical arrangement of bottom buttons.'"),s(`,
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
`)])],-1),g=t("h3",null,"Template use",-1),u=t("pre",null,[t("code",{class:"language-html"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell-group"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Template use"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Template use"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"componentClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-dialog"),s(`
      `),t("span",{class:"hljs-attr"},"teleport"),s("="),t("span",{class:"hljs-string"},'"#app"'),s(`
      `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Template use"'),s(`
      `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Function call and template call are supported."'),s(`
      `),t("span",{class:"hljs-attr"},"v-model:visible"),s("="),t("span",{class:"hljs-string"},'"visible"'),s(`
    >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-dialog"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Bottom button vertical use"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"componentvVrticalClick"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-dialog"),s(`
      `),t("span",{class:"hljs-attr"},"footer-direction"),s("="),t("span",{class:"hljs-string"},'"vertical"'),s(`
      `),t("span",{class:"hljs-attr"},"teleport"),s("="),t("span",{class:"hljs-string"},'"#app"'),s(`
      `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Template use"'),s(`
      `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Function call and template call are supported."'),s(`
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
`)])],-1),m=t("h3",null,"Teleport use, mount to the specified element node",-1),b=t("pre",null,[t("code",{class:"language-html"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell-group"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Teleport use, mount to the specified element node"'),s(">")]),s(`
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
          `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'Open the developer tool and take a look at the Elements tab'"),s(`,
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
`)])],-1),k=e('<h2>API</h2><h3>DialogOptions</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td>string</td><td>-</td></tr><tr><td>id</td><td>Identifier, share one instance at the same time, default to multiple instances</td><td>string | object</td><td><code class="">new Date().getTime()</code></td></tr><tr><td>content</td><td>Content, support HTML</td><td>string</td><td>-</td></tr><tr><td>teleport</td><td>Specifies a target element where Dialog will be mounted</td><td>string</td><td><code class="">&quot;body&quot;</code></td></tr><tr><td>closeOnClickOverlay</td><td>Whether to close when overlay is clicked</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>noFooter</td><td>Hide bottom button bar</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>noOkBtn</td><td>Hide OK button</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>noCancelBtn</td><td>Hide cancel button</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cancelText</td><td>Cancel button text</td><td>string</td><td><code class="">&quot;Cancel&quot;</code></td></tr><tr><td>okText</td><td>OK button text</td><td>string</td><td><code class="">&quot;Confirm&quot;</code></td></tr><tr><td>cancelAutoClose</td><td>Click Cancel to close the popup</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>textAlign</td><td>Text alignment direction, the optional value is the same as css text-align</td><td>string</td><td><code class="">&quot;center&quot;</code></td></tr><tr><td>closeOnPopstate</td><td>Whether to close when popstate</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>customClass</td><td>Custom dialog class</td><td>string</td><td></td></tr><tr><td>overlayClass</td><td>Custom mask classname</td><td>string</td><td>-</td></tr><tr><td>overlayStyle</td><td>Custom mask styles</td><td>CSSProperties</td><td>-</td></tr><tr><td>popClass</td><td>Custom popup classname</td><td>string</td><td>-</td></tr><tr><td>popStyle</td><td>Custom popup styles</td><td>CSSProperties</td><td>-</td></tr><tr><td>onUpdate</td><td>Update</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>onOk</td><td>Emitted when the confirm button is clicked</td><td>Function</td><td>-</td></tr><tr><td>onCancel</td><td>Emitted when the cancel button is clicked</td><td>Function</td><td>-</td></tr><tr><td>onOpened</td><td>Emitted when Dialog is opened</td><td>Function</td><td>-</td></tr><tr><td>onClosed</td><td>Emitted when Dialog is closed</td><td>Function</td><td>-</td></tr><tr><td>beforeClose</td><td>Callback function before close support return <code class="">promise</code></td><td>Function(action: string)</td><td>-</td></tr></tbody></table><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td>string</td><td>-</td></tr><tr><td>content</td><td>Content, support HTML</td><td>string</td><td>-</td></tr><tr><td>teleport</td><td>Specifies a target element where Dialog will be mounted</td><td>string</td><td><code class="">&quot;body&quot;</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>no-footer</td><td>Hide bottom button bar</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>no-ok-btn</td><td>Hide OK button</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>no-cancel-btn</td><td>Hide cancel button</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cancel-text</td><td>Cancel button text</td><td>string</td><td><code class="">&quot;Cancel&quot;</code></td></tr><tr><td>ok-text</td><td>OK button text</td><td>string</td><td><code class="">&quot;Confirm&quot;</code></td></tr><tr><td>cancel-auto-close</td><td>Click Cancel to close the popup</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>text-align</td><td>Text alignment direction, the optional value is the same as css text-align</td><td>string</td><td><code class="">&quot;center&quot;</code></td></tr><tr><td>close-on-popstate</td><td>Whether to close when popstate</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>lock-scroll</td><td>Whether to lock background scroll</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>footer-direction</td><td>Use <code class="">horizontal</code> and <code class="">vertical</code> optional values</td><td>string</td><td><code class="">horizontal</code></td></tr><tr><td>overlay-class</td><td>Custom mask classname</td><td>string</td><td>-</td></tr><tr><td>overlay-style</td><td>Custom mask styles</td><td>CSSProperties</td><td>-</td></tr><tr><td>pop-class</td><td>Custom popup classname</td><td>string</td><td>-</td></tr><tr><td>pop-style</td><td>Custom popup styles</td><td>CSSProperties</td><td>-</td></tr><tr><td>custom-class</td><td>Custom dialog class</td><td>string</td><td>-</td></tr><tr><td>before-close</td><td>Callback function before close support return <code class="">promise</code></td><td>Function(action: string)</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>ok</td><td>Emitted when the confirm button is clicked</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>Emitted when Dialog is closed</td><td>Function</td><td>-</td></tr><tr><td>opened</td><td>Emitted when Dialog is Opened</td><td>Function</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>header</td><td>Custom title</td></tr><tr><td>default</td><td>Custom default</td></tr><tr><td>footer</td><td>Custom footer</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-dialog-width</td><td><em>296px</em></td></tr><tr><td>--cub-dialog-header-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-dialog-header-color</td><td><em>rgba(38, 38, 38, 1)</em></td></tr><tr><td>--cub-dialog-footer-justify-content</td><td><em>space-around</em></td></tr></tbody></table>',13),w={},A="",B=o({__name:"doc.en-US",setup(y,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(C,f)=>{const a=d("demo-block");return r(),p("div",i,[h,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iRnVuY3Rpb24gVXNlIsQoyyrIJEJhc2ljIFVzYWdlIiBAY2xpY2s9ImJhc2VDxAsiPjwvyDLXQVRyYW5zcGFyZW50IERpYWxvZ8pIdMoc30/JT1VzZSBodG1sykXEDt8+yT5CZWZvcmUgQ2xvc+wAz8UWxRXfSclJTm8gVMQKykVub8UR30HJQVRpcHPyARBpcHPfQclBQm90dG9tIGJ1dHRvbiB2ZXJ0aWNhbCB17ADZyBbVVMoO5gIWPgo8L+oCNTxzY3JpcHQgbGFuZz0idHPlAiBpbXBvcnQgeyByZWYsIGNyZWF0ZVZOb2RlIH0gZnJvbSAndnVlJzvMKnNob3fmAOfJJEBjdWJ1acR+dWnMLc0ZL2Rpc3QvcGFja2FnZXMvZMVDL3N0eWzGYWV4xTRkZWZhdWx0IHvlASVzZXR1cCgpxw4gIGNvbnN0IG9uQ2FuY2VsID0gKCkgPT7JH8Yhb2xlLmxvZygnZXbkAqRjxSwnKcRlxAF9yAnITU9r30nHSW9r2UXpA0DFSjogdm9pZM5Q6gE3KMoVIOYB/DogJ+YDlnNwcmluZyBmcmFtZScsyydjb250ZW50OuwBoygnc3Bhbics5AGU5AFGOiB7IGNvbG9yOiAncmVkJyB9IH0sICdJ5AEBIGJlIGEgY3Vz5AJiY29tcG9uZW50JynMZOgBVs4UT2vJD334AP7wA/b/AQXxAQVvdmVybGF5U+gAxmJhY2vkAsJuZOQAy2diYSgwLMUCKScgfewAn+gBPvIEk/YBPidDxgrNHv8A+PsA+OkEqf8A8fkB9ugE/PUArssTICAiPHDmAeY9J+YB5OQB4j7EPDwvcD48aW1nIHNyYz0naHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnJyAvPiL/ASP/ASPpAxnvBYr/ASr6AyDrBej4AdzFYGNvbmZpcm0gdG8gY8QtIGl0IGluIDEgc2Vjb25k/wH6xBRPa8wQ6wDBOiAoYeUHXzogc3TkA6nvBDPEAXJldHVybiBuZXcgUHJvbWlzZSgoctMo5QTbVGltZW91dCjwBHzJTcdwID09ICfsBH7IAX0sIDEwMDDPGOoBjcUO/wGlc3Qg7Abq8wUL9wGb/wNW/wIz+wRO6Ac0/wCL8wIm5QDH9wIf6QkcY2FsbCBhbmTqBQjHE3JlIHN1cOQGhmVkLs1Gbm/mAM1CdG46IHRydWX/AOr/AOroAOrtB87/AO7/AO7wAO5T5gDJyWMgYXJyYW5nZW3lBslmIGLsCG1z7gDuZm9vdGVyRGlyZecC7ifIRv8B4v8A+OoDH+oAzukHOcpG8AZOyhrpBXDKE/AEYMoa7ALVy13oAl3KE+0Bhu4AseQDPH07Cjwv5gk8Pgo="},{default:n(()=>[j]),_:1}),g,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iVMcjIHVzZSLEKMsq1SQgQGNsaWNrPSJjb21wb25lbnRDxBAiPjwvyDjLR2RpYWxvZ8UQICB0ZWxlcG9ydD0iI2FwcCLIFtNlxxtjb250ZW50PSJGdW5jdGlvbiBjYWxsIGFuZCDoANvHEnJlIHN1cMRdZWQuyD92LW1vZGVsOnZpc2lixGTHCcYg5wCm5QC25gCn9wD/Qm90dG9tIGJ1dHRvbiB2ZXJ0aWNhbPcBDXZWxh//ARXqARVmb290ZXItZGlyZeUA4z0iyGLpASH/ATf/ATf/ATf/ATfrATcx/AE46gDp5gJgPgo8L8htPgo8c2NyaXB0IGxhbmc9InRz5QJqaW3EeSB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQge8V1c2V0dXAoKccO5QDpc3Qg5wCfID3ESShmYWxzZSnEQ9EiMdsj7gLOID0gKCkgPT7JaiDIRC52YWx1xGx0cnVlyEN910ztAg3aVDHeVXJldHVybiB7yC8syTgsymvFY8sQznvHTH0KxVc8L+YBjz4K"},{default:n(()=>[u]),_:1}),m,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iVGVsZXBvcnQgdXNlLCBtb3VudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgbm9kZSLETctPyElib2R5zikgQGNsaWNrPSJ0x2RDxA8oJ8QqJykiPjwvyETXUyNhcHDfU8dTxCrfU8ZTZGVtbyBjbGFzc99Zx1kuxDHSWsoO5gFOPgo8L+oBbTxzY3JpcHQgbGFuZz0idHPlATNpbcRXIHsgc2hvd0RpYWxvZyB9IGZyb20gJ0BjdWJ1acRUdWknO8otzRkvZGlzdC9wYWNrYWdlcy9kxUMvc3R5bGXFNGV4xTRkZWZhdWx0IHvlAQFzZXR1cCgpxw4gIGNvbnN0IG9uQ2FuY2VsID0gKCkgPT7JH8Yhb2xlLmxvZygnZXbkASFjxSwnKcRlxAF9yAnGTe0BMsRSyBE6IHN0cmluZ89i6gEAKMoVIMlHLMwU5AG1OiAnyBzkAponICvVLGNvbnRlbnQ6ICdPcGVu5QLBZGV2ZWxvcGVyIHRvb2wgYW5kIHRha2UgYSBsb29rIGF0xSZF5gIIcyB0YWInzFJub+YBJkJ0bjogdHJ1Zcwd6AFDyRN98gEgcmV0dXJu6wD77QErzi59CsULPC/mAjw+Cg=="},{default:n(()=>[b]),_:1}),k])}}});export{B as default,A as excerpt,w as frontmatter};
