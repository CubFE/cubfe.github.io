import{d as p,r as h,b as r,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const o={class:"markdown-body"},i=c(`<h1>Popover 气泡弹出框</h1><h3>介绍</h3><p>点击或在元素上悬停鼠标，弹出气泡卡片浮层。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popover</span>);
</code></pre><h3>基础用法</h3><p>Popover 支持明朗和暗黑两种风格，默认为明朗风格，将 <code class="">theme</code> 属性设置为 <code class="">dark</code> 可切换为暗黑风格。</p>`,7),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left:20px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(`
        `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.lightTheme"'),s(`
        `),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"iconItemList"'),s(`
        `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-start"'),s(`
        @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"chooseItem"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("明朗风格"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left:20px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.darkTheme"'),s(),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-start"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"iconItemList"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("暗黑风格"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
        `),a("span",{class:"hljs-attr"},"darkTheme"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"lightTheme"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(" iconItemList = "),a("span",{class:"hljs-title function_"},"reactive"),s("([{ "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项一'"),s(" }, { "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项二'"),s(" }, { "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项三'"),s(` }]);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        visible,
        iconItemList
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-popover-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"120px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),g=a("h3",null,"选项配置",-1),m=a("p",null,"在 list 数组中，可以通过 disabled 字段来禁用某个选项。",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left:20px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.showIcon"'),s(),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"itemList"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("展示图标"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left:20px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.disableAction"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"itemListDisabled"'),s(),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"right"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("禁用选项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Location"),s(", "),a("span",{class:"hljs-title class_"},"Cart2"),s(", "),a("span",{class:"hljs-title class_"},"My2"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
        `),a("span",{class:"hljs-attr"},"showIcon"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"disableAction"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" itemList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option1'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` {
            `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"My2"),s(`, {
              `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'14px'"),s(`,
              `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'rgba(250, 44, 25, 1)'"),s(`
            });
          }
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option2'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title class_"},"Cart2"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option3'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title class_"},"Location"),s(`
        }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(" itemListDisabled = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项一'"),s(`,
          `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项二'"),s(`,
          `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'选项三'"),s(`
        }
      ]);

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        itemList,
        visible,
        itemListDisabled
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-popover-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"120px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-icon"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"14px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b=a("h3",null,"自定义内容",-1),y=a("p",null,"在名为 content 插槽中自定义内容。",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.customized"'),s(),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-start"'),s(),a("span",{class:"hljs-attr"},"custom-class"),s("="),a("span",{class:"hljs-string"},'"customClass"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("自定义内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"self-content"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"self-content-item"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in selfContent"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Service"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Service"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"self-content-desc"'),s(">")]),s("{{ item.desc }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Service"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Service"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
        `),a("span",{class:"hljs-attr"},"customized"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(" selfContent = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"'option1'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"'option2'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"'option3'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"'option4'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"'option5'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"desc"),s(": "),a("span",{class:"hljs-string"},"'option6'"),s(`
        }
      ]);

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        visible,
        selfContent
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-id"},"#app"),s(` {
    `),a("span",{class:"hljs-attribute"},"padding-top"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".self-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"195px"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"flex-wrap"),s(`: wrap;
  }
  `),a("span",{class:"hljs-selector-class"},".self-content-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"flex-direction"),s(`: column;
  }
  `),a("span",{class:"hljs-selector-class"},".self-content-desc"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"5px"),s(`;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"60px"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),A=a("h3",null,"位置自定义",-1),w=a("p",null,"通过 location 属性来控制气泡的弹出位置。可选值",-1),I=a("pre",null,[a("code",{class:""},`top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
`)],-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"点击查看更多方向"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handlePicker"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPicker"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-picker"),s(`
      `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
      `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'""'),s(`
      @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(`
      `),a("span",{class:"hljs-attr"},":swipe-duration"),s("="),a("span",{class:"hljs-string"},'"500"'),s(`
      @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"closePicker"'),s(`
      @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"closePicker"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"top"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"brickBox"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"brick"'),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"pickerTarget"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-picker"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"customPositon"'),s(`
    `),a("span",{class:"hljs-attr"},"targetId"),s("="),a("span",{class:"hljs-string"},'"pickerTarget"'),s(`
    `),a("span",{class:"hljs-attr"},":location"),s("="),a("span",{class:"hljs-string"},'"curPostion"'),s(`
    `),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(`
    `),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"positionList"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" showPicker = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" customPositon = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" curPostion = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'top'"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" positionList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option1'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option2'"),s(`
        }
      ]);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closePicker"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        customPositon.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
        showPicker.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"{ selectedValue }"),s(`) => {
        curPostion.`),a("span",{class:"hljs-property"},"value"),s(" = selectedValue["),a("span",{class:"hljs-number"},"0"),s(`];
        `),a("span",{class:"hljs-keyword"},"if"),s(" (showPicker."),a("span",{class:"hljs-property"},"value"),s(") customPositon."),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handlePicker"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        showPicker.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          customPositon.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
        }, `),a("span",{class:"hljs-number"},"0"),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'top-start'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'top-start'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'top-end'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'top-end'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'right'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'right'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'right-start'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'right-start'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'right-end'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'right-end'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'bottom'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'bottom'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'bottom-start'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'bottom-start'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'bottom-end'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'bottom-end'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'left'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'left'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'left-start'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'left-start'"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'left-end'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'left-end'"),s(` }
      ]);

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        positionList,
        showPicker,
        customPositon,
        curPostion,
        closePicker,
        change,
        handlePicker,
        columns
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-popover-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"120px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".brickBox"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"80px"),s(),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".brick"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"60px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"60px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-built_in"},"linear-gradient"),s("("),a("span",{class:"hljs-number"},"135deg"),s(", "),a("span",{class:"hljs-number"},"#fa2c19"),s(),a("span",{class:"hljs-number"},"0%"),s(", "),a("span",{class:"hljs-number"},"#fa6419"),s(),a("span",{class:"hljs-number"},"100%"),s(`);
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f=a("h3",null,"自定义目标元素",-1),k=a("p",null,[s("Popover 提供了 "),a("code",{class:""},"targetId"),s(" 属性，用于匹配目标元素，在目标元素上添加对应的 id 值即可")],-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"popid"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clickCustomHandle"'),s(">")]),s("自定义目标元素"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.customTarget"'),s(`
    `),a("span",{class:"hljs-attr"},"targetId"),s("="),a("span",{class:"hljs-string"},'"popid"'),s(`
    `),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"itemList"'),s(`
    `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"top-start"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"customTarget"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" itemList = "),a("span",{class:"hljs-title function_"},"reactive"),s("([{ "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option1'"),s(" }, { "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option2'"),s(" }, { "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option3'"),s(` }]);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickCustomHandle"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        visible.`),a("span",{class:"hljs-property"},"customTarget"),s(" = !visible."),a("span",{class:"hljs-property"},"customTarget"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        itemList,
        visible,
        clickCustomHandle
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-id"},"#app"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"300px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-popover-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"120px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"自定义颜色",-1),C=a("p",null,[s("Popopver 提供了 2 种主题色，同样可以通过 "),a("code",{class:""},"bgColor"),s(" 属性改变背景色")],-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.customColor"'),s(`
    `),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"itemList"'),s(`
    `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"right-start"'),s(`
    `),a("span",{class:"hljs-attr"},"bgColor"),s("="),a("span",{class:"hljs-string"},'"#f00"'),s(`
    `),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("自定义颜色"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"customColor"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" itemList = "),a("span",{class:"hljs-title function_"},"reactive"),s("([{ "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option1'"),s(" }, { "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option2'"),s(" }, { "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option3'"),s(` }]);

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        itemList,
        visible
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-id"},"#app"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"300px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-popover-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"120px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),H=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>list</td><td>选项列表</td><td>List[]</td><td><code class="">[]</code></td></tr><tr><td>visible</td><td>是否展示气泡弹出层</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>theme</td><td>主题风格，可选值为 <code class="">dark</code></td><td>string</td><td><code class="">light</code></td></tr><tr><td>location</td><td>弹出位置</td><td>string</td><td><code class="">bottom</code></td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td>[number,number]</td><td><code class="">[0, 12]</code></td></tr><tr><td>show-arrow</td><td>是否显示小箭头</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>custom-class</td><td>自定义 class 值</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>duration</td><td>动画时长，单位秒</td><td>number | string</td><td><code class="">0.3</code></td></tr><tr><td>overlay</td><td>是否显示遮罩层</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩层类名</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>overlay-style</td><td>自定义遮罩层样式</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭菜单</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>close-on-click-action</td><td>是否在点击选项后关闭</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>close-on-click-outside</td><td>是否在点击外部元素后关闭菜单</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bg-color</td><td>自定义背景色</td><td>string</td><td><code class="">-</code></td></tr><tr><td>target-id</td><td>自定义目标元素 id</td><td>string</td><td><code class="">-</code></td></tr><tr><td>arrow-offset</td><td>小箭头的偏移量</td><td>number</td><td><code class="">0</code></td></tr></tbody></table><h3>List 数据结构</h3><p>List 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>选项文字</td><td>string</td><td><code class="">-</code></td></tr><tr><td>icon</td><td>@cubfe/icons-vue 图标</td><td>VNode</td><td><code class="">-</code></td></tr><tr><td>disabled</td><td>是否为禁用状态</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>className</td><td>为对应选项添加额外的类名</td><td>string | Array | object</td><td><code class="">-</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>content</td><td>自定义气泡组件菜单内容</td></tr><tr><td>reference</td><td>触发 Popover 显示的元素内容</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th></tr></thead><tbody><tr><td>choose</td><td>点击选项时触发</td></tr><tr><td>open</td><td>打开菜单时触发</td></tr><tr><td>close</td><td>关闭菜单时触发</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-popover-white-background-color</td><td><em>rgba(255, 255, 255, 1)</em></td></tr><tr><td>--cub-popover-dark-background-color</td><td><em>rgba(75, 76, 77, 1)</em></td></tr><tr><td>--cub-popover-border-bottom-color</td><td><em>rgba(229, 229, 229, 1)</em></td></tr><tr><td>--cub-popover-primary-text-color</td><td><em>rgba(51, 51, 51, 1)</em></td></tr><tr><td>--cub-popover-disable-color</td><td><em>rgba(154, 155, 157, 1)</em></td></tr><tr><td>--cub-popover-menu-item-padding</td><td><em>8px 0</em></td></tr><tr><td>--cub-popover-menu-item-margin</td><td><em>0 8px</em></td></tr><tr><td>--cub-popover-menu-name-line-height</td><td><em>normal</em></td></tr></tbody></table>',14),J={},_="",Y=p({__name:"doc",setup(W,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(P,X)=>{const l=h("demo-block");return j(),r("div",o,[i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93IHR5cGU9ImZsZXgixBjHGmNvbCA6c3Bhbj0iOCIgc3R5bGU9Im1hcmdpbi1sZWZ0OjIwcMgxxzNwb3BvdmVyxxMgIHYtbW9kZWw6dmlzaWLEP8cJLmxpZ2h0VGhlbWUiyS06bGlzdD0iaWNvbkl0ZW1MaXN0yh1sb2NhdGlvbj0iYm90dG9tLXN0YXLLIEBjaG9vc2U9IsYIxEHIHegAoiAg6QD+ICNyZWZlcmVuY+UBCckg5ADEYnV0dG9u5wEUcHJpbWFyeSIgc2hhxBBzcXVhcmUiPuaYjuacl+mjjuagvDwvyjfLbC/IbcgUxijnASPGFcYTY29s/wF3/wF3x1T6AW9kYXJr5gFuIHTEBz0ixBIi+AFW9QGL/wFH/wFH9wFHmpfpu5H/AUf/AUfwAUfGDXJvdz4KzD08c2NyaXB0xCJpbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB7xWtzZXR1cCgpxw4gIGNvbnN0IOcBaCA9xEkoyBwgIOkBeDogZmFsc2UsyRrqAwHHG8cafSnEe8pa7AGDxV/mALIoW3sgbmHEPSfpgInpobnkuIAnIH0sINAXuozVF7iJJyB9XclscmV0dXJu6QDVIOgA0eoAsOwAiMcVfcY+fQrFCzwv6AFhCjzlArXkAWou6wGrLWNvbnRlbugBSXdpZHRoOiAx5ALOxEl9xELGOA=="},{default:t(()=>[d]),_:1}),g,m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93IHR5cGU9ImZsZXgixBjHGmNvbCA6c3Bhbj0iOCIgc3R5bGU9Im1hcmdpbi1sZWZ0OjIwcMgxxzNwb3BvdmVyIHYtbW9kZWw6dmlzaWLEN8cJLnNob3dJY29uIiB0aGVtZT0iZGFyayIgOmxpc3Q9Iml0ZW1MaXN0yVUgIOkAsSAjcmVmZXJlbmPlALzJIMR3YnV0dG9u5wDHcHJpbWFyeSIgc2hhxBBzcXVhcmUiPuWxleekuuWbvuaghzwvyjfLbC/IbcgUxijnANbGFcYTY29s/wEq/wEq/wEqZS5kaXNhYmxlQWN0aeQBL+8BIkTGHmQiIGxvY2HEIz0icmlnaP8BO/8BO/gBO+emgeeUqOmAiemhuf8BO/8BO+oBO8YNcm93PgrMPQo8c2NyaXB0xCNpbXBvcnQgeyByZWFjdGl2ZSwgcmVmLCBoIH0gZnJvbSAndnVlJzvMKkznAQ4sIENhcnQyLCBNeTLJLkBjdWJmZS9pY29ucy3IO2V4xTtkZWZhdWx0IHvlAKpzZXR1cCgpxw4gIMQydCDnAZsgPeQAhyjIHCAg6ALVOiBmYWxzZSzJGe0BxMcexx19KTsKzV3oAdrFXuYA7yhbyUrKbSAgbmFtZTogJ29wxFYxJ8pvICDkANs6ICgpID0+zTMgIHJldHVybiBoKE15MizPHCAgd2lkdGg6ICcxNHB4zVHEAWNvbG9yOiAncmdiYSgyNTAsIDQ0LCAyNSwgMSknzSzkANXLDskMfcpT+QDJMs145gDJ5QHE30bORjPTRugCFMpJxwpd+AGE6ANe/wGMyn3mAxvkuIDNf+cB/2Q6IHRydegB+f8AyMhLuozfS99Ly0u4ieoBpvMA++cCGspA6AEGylznAvnKEfABKccZfeYB/8RlfTsKPC/oA8sKPOUFFOQD1C7rBBYtY29udGVu6AN15wKFMeQFLcRJxEfFL+QBx88kNMgjPC/HWw=="},{default:t(()=>[u]),_:1}),b,y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcG9wb3ZlciB2LW1vZGVsOnZpc2libGU9IscJLmN1c3RvbWl6ZWQiIGxvY2F0aW9uPSJib3R0b20tc3RhcnQiIMYkLWNsYXNzPSLGDkPEDSLEaCAgyXcgI3JlZmVyZW5j5QCCxRzkAIZidXR0b24gdHlwZT0icHJpbWFyeSIgc2hhxBBzcXVhcmUiPuiHquWumuS5ieWGheWuuTwvyjrHZy/IaD4K0Hhjb250ZW50yXZkaXYg5wCwc2VsZi3HIOcAsdwjLWl0ZW0iIHYtZm9yPSIoxA4sIGluZGV4KSBpbiDEK0PHTSA6a2V5PSLFHctaICA8U2VydmljZT48L8gKzB7YemRlc2MiPnt7IMR1LsQOIH19PC9kaXbKP80Pyw3sAR3EDusB/T4KzB0KPHNjcmlw5QEraW1wb3J0IHsgcmVhY3RpdmUsIHJlZiB9IGZyb20gJ3Z1ZSc7zCfnAM3JIUBjdWJmZS9pY29ucy3ILmV4xS5kZWZhdWx0IHvlAJ9jb21wb25lbnRzOsxILMUdc2V0dXAoKccrxC1uc3Qg5wKiID3kAJQoyBwg5wKO5AKyOiBmYWxzZccafSnEfspA6wGqxUTmAOIoW8lJylMgIOQBbTogJ29w5AMAMSfJGucAot0vMt8vzy8z3y/PLzTfL88vNd8vzy82yy/HCl0pO+YDXyAgcmV0dXJuyz7nAZTKWesBZccUfeYBhsROfTsKPC/oAm4KPHN0eWzlAp4jYXBwx1VwYWRkaW5nLXRvcDogMjAwcHjEP8Q9LuwDG8cud2lkdGg6IDE5NcYoICBkaXNwbGF5OiBmbGXHE8QKLXdyYXA6IMQG1VDlA+XHVW1hcmdpbuYAgjHnAIHJFuYFCcwZ03JqdXN0aWZ5yF06IGNlbnRlcsYdYWxpZ27FcHPOGcRALWRpcmVj5AGJOiBjb2x1bW72AK/lBAzyAK/pAQfnARk26QCmZm9udC1zaXpl7AC7dGV4dC3lAJDsAIp95AGl5gGb"},{default:t(()=>[v]),_:1}),A,w,I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye75p+l55yL5pu05aSa5pa55ZCRIiBAY2xpY2s9ImhhbmRsZVBpY2tlciI+PC/IQslPcG9wdXAgcG9zaXRpb249ImJvdHRvbSIgdi1tb2RlbDp2aXNpYsRsc2hvd8hICiAgyD/FEsUQICA6Y29sdW1ucz0ixwkixxnnAK/ID0BjaGFuZ2U9IsYIyBc6c3dpcGUtZHVyYeYAjDUwMMozb25maXJtPSJjbG9z6ADRyR3EFNMb5gCpICDpAUYgI3RvcMgWICA8ZGl2IGNsYXNzPSJicmlja0JveOcA3tchIiBpZD0i5gD2VGFyZ2V05AFWZGl2y1XMDzwvyHvGEuYBgsZAxBLHEOQBhT4K6wGUb3bnAVbxAYhjdXN0b21Q5AGxb27mAOd05QCJSfAAmcUcOmxvY+cBT2N1clBvc8QMxzdoZW1lPSJkYXJryCxpc3Q9IugCDUxpc8VF7QCo5ACZPgrsANcKPHNjcmlwdCBsYW5nPSJ0c+UBQmltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tICd2dWUnOwogIGV4xSdkZWZhdWx0IHvlAIhzZXR1cCgpxw4gIGNvbnN0IOoCgSA9xEwoZmFsc2UpxEbKJe0BHt0o6AEMxyUndG9wJ88l7AEJxSfmAMooW8cmIOkAosQBbmFtZTogJ29wxDMxJ8kafSzfL2lvbjLLL8cKXfAAsuoC3SA9ICgpID0+y1DtAPgudmFsdWUgPSDlAPrIRyDrAULWIn075AKDy3PlA5/Ebnsgc2VsZWN0ZWRWxTl90X/oAU/JWs0xWzBdyGUgIGlmICjwAIsp9wDCdHJ1+QCf7ATc8wET0GPPTuUCZ1RpbWVvdXQo0Dz4AVHOQX0sIDDpAabxAT3mBQPnAl/rAjMgdGV4dDog5QJxLCDFWscO7QIryyctc3RhcnTOLccU2TNlbmTPMcQS1S9yaWdozF7GENor8QCPzBbbN+4Ak8oU1TPmBojLMMcR2y3xAJjNF9w57gCayxXVNWxlZsxmxQ/ZKfEAlcsV2jXuAJHJE+0EHccLcmV0dXJu6wK87AS2ymDqAw7KFO0C5MwX6APNyxTqBH7LFeUEIMoQ7AORyybmAwnHEH3mAzDkAMl9Owo8L+YGPOUGRnR5bOUHJi7rBmstY29udGVu6AYad2lkdGg6IDEyMHB4xEnERy7oB7rHJG1hcmdpbjogODBweCAwxm9kaXNwbGF5OiBmbGXFOSAganVzdGlmechhOiBjZW50ZXLOVs53Nsd2ICBoZeQCvswSYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZhMmMxOSAwJcUMNjQxOSAxMDAl5wREYm9yZGVyLcQ2dXM6IDHHXH3kASbmARw="},{default:t(()=>[x]),_:1}),f,k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIHNoYcQQc3F1YXJlIiBpZD0icG9waWQiIEBjbGljaz0ixQdDdXN0b21IYW5kbGUiPuiHquWumuS5ieebruagh+WFg+e0oDwvymbJdXBvcG92ZXIKICAgIHYtbW9kZWw6dmlzaWJsZT0ixwkuY8VdVGFyZ2V0IsUrdMUMSekAjcUVOmxpc3Q9Iml0ZW1MaXPHKmxvY2F0aW9uPSJ0b3Atc3RhcsUZPuYAjsd/Pgo8L+oBEAo8c2NyaXB05AClaW1wb3J0IHsgcmVhY3RpdmUsIHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge8V7c2V0dXAoKccOICBjb25zdCDnANUgPclTKMghICDsAOo6IGZhbHNlxxx9KTsKzUjoAOfMSVt7IG5hbWU6ICdvcOQA9TEnIH0sIM8VMtQVMycgfV3QY/EB2iA9ICgpID0+6QDTIOgAz+0BpCA9ICHUGOQBKsQBfclocmV0dXJuy0/oANYs0GHKEfEAlspWxQcKxQs8L+gBxTxzdHls5QLnI2FwcMdsbWFyZ2luLXRvcDogMzAwcHjEPcQ7LusCFy1jb250ZW7oAdB3aWR0aDogMTLJLzwvx1w="},{default:t(()=>[B]),_:1}),Z,C,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcG9wb3ZlcgogICAgdi1tb2RlbDp2aXNpYmxlPSLHCS5jdXN0b21Db2xvciLFKjpsaXN0PSJpdGVtTGlzdMYVbG9jYXRpb249InJpZ2h0LXN0YXLHG2JnxT09IiNmMDDGE3RoZW1lPSJkYXJrxBHkAJEgIOkAoCAjcmVmZXJlbmPlAKvFHOQAr2J1dHRvbiB0eXBlPSJwcmltYXJ5IiBzaGHEEHNxdWFyZSI+6Ieq5a6a5LmJ6aKc6ImyPC/KOsdnL+0BCMUg5wEJPgrMHQo8c2NyaXB0xCdpbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB7xXFzZXR1cCgpxw4gIGNvbnN0IOcBXyA9yVMoyCEgIOsBdDogZmFsc2XHG30pOwrNR+gBhsxIW3sgbmFtZTogJ29w5AGUMScgfSwgzxUy1BUzJyB9XcpjcmV0dXJu6QC5IMluLMkS5wDHxxB95AEFICB9CsULPC/oAUE8c3R5bOUBcCNhcHDHUW1hcmdpbi10b3A6IDMwMHB4xD3EOy7rAZMtY29udGVu6AFMd2lkdGg6IDEyyS88L8dc"},{default:t(()=>[G]),_:1}),H])}}});export{Y as default,_ as excerpt,J as frontmatter};
