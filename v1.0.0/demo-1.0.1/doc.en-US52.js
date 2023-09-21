import{d as p,r,b as h,k as t,w as n,aq as c,e as a,l as s,o}from"./style_icon.js";const i={class:"markdown-body"},j=c(`<h1>Popover</h1><h3>Intro</h3><p>Click or hover over the element to pop up the bubble card overlay.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popover</span>);
</code></pre><h3>Basic Usage</h3><p>Popover supports both light and dark styles. The default is light style. Set the <code class="">theme</code> property to <code class="">dark</code> to switch to dark style.</p>`,7),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left:20px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(`
        `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.lightTheme"'),s(`
        `),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"iconItemList"'),s(`
        `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-start"'),s(`
        @`),a("span",{class:"hljs-attr"},"choose"),s("="),a("span",{class:"hljs-string"},'"chooseItem"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("Light"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left:20px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.darkTheme"'),s(),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-start"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"iconItemList"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("Dark"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
      `),a("span",{class:"hljs-keyword"},"const"),s(" iconItemList = "),a("span",{class:"hljs-title function_"},"reactive"),s("([{ "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option1'"),s(" }, { "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option2'"),s(" }, { "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option3'"),s(` }]);
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
`)])],-1),g=a("h3",null,"Option Configuration",-1),m=a("p",null,[s("In the list array, an option can be disabled via the "),a("code",{class:""},"disabled"),s(" field.")],-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"flex"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left:20px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.showIcon"'),s(),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"itemList"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("Show Icon"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popover"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left:20px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.disableAction"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"itemListDisabled"'),s(),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"right"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("Disabled"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option1'"),s(`,
          `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option2'"),s(`,
          `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'option3'"),s(`
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
`)])],-1),b=a("h3",null,"Custom Content",-1),y=a("p",null,"Customize the content in the slot named content.",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.customized"'),s(),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-start"'),s(),a("span",{class:"hljs-attr"},"custom-class"),s("="),a("span",{class:"hljs-string"},'"customClass"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("Custom Content"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
`)])],-1),w=a("h3",null,"Placement",-1),A=a("p",null,"Use the location property to control where the bubble pops up. optional value",-1),x=a("pre",null,[a("code",{class:""},`top           # Top middle
left          # Left middle
right         # Right middle
bottom        # Bottom middle
top-start     # Top left
top-end       # Top right
left-start    # Left top
left-end      # Left bottom
right-start   # Right top
right-end     # Right bottom
bottom-start  # Bottom left
bottom-end    # Bottom right
`)],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),I=a("h3",null,"custom target",-1),k=a("p",null,"Popover provides the 'targetId' attribute to match the target element by adding the corresponding id value to the target element",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"popid"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clickCustomHandle"'),s(">")]),s("custom target"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
`)])],-1),Z=a("h3",null,"Custom Color",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popover"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"visible.customColor"'),s(`
    `),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"itemList"'),s(`
    `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"right-start"'),s(`
    `),a("span",{class:"hljs-attr"},"bgColor"),s("="),a("span",{class:"hljs-string"},'"#f00"'),s(`
    `),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"reference"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),s("Custom Color"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
`)])],-1),G=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>list</td><td>list of options</td><td>List[]</td><td><code class="">[]</code></td></tr><tr><td>visible</td><td>whether to show</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>theme</td><td>Theme style, can be set to <code class="">dark</code> <code class="">light</code></td><td>string</td><td><code class="">light</code></td></tr><tr><td>location</td><td>pop-up location</td><td>string</td><td><code class="">bottom</code></td></tr><tr><td>offset</td><td>the offset of the occurrence position</td><td>[number,number]</td><td><code class="">[0, 12]</code></td></tr><tr><td>show-arrow</td><td>whether to show small arrows</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>custom-class</td><td>custom class</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>duration</td><td>Transition duration，Unit second</td><td>number | string</td><td><code class="">0.3</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>overlay-class</td><td>Custom overlay class</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>overlay-style</td><td>Custom overlay style</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when clicking overlay</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>close-on-click-action</td><td>Whether to close when clicking action</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>close-on-click-outside</td><td>Whether to close when clicking outside</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bg-color</td><td>Custom color</td><td>string</td><td><code class="">-</code></td></tr><tr><td>target-id</td><td>Custom target id</td><td>string</td><td><code class="">-</code></td></tr><tr><td>arrow-offset</td><td>the offset of the arrow</td><td>number</td><td><code class="">0</code></td></tr></tbody></table><h3>List data structure</h3><p>The List property is an array of objects, each object in the array is configured with a column, and the object can contain the following values:</p><table><thead><tr><th>Key</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>option text</td><td>string</td><td><code class="">-</code></td></tr><tr><td>icon</td><td>@cubfe/icons-vue name</td><td>VNode</td><td><code class="">-</code></td></tr><tr><td>disabled</td><td>whether to disable</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>className</td><td>Add extra class names for corresponding options</td><td>string | Array | object</td><td><code class="">-</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>content</td><td>Customize Bubble Component Menu Content</td></tr><tr><td>reference</td><td>The content of the element that triggers the Popover to display</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th></tr></thead><tbody><tr><td>choose</td><td>Triggered when an option is clicked</td></tr><tr><td>open</td><td>Triggered when the menu is opened</td></tr><tr><td>close</td><td>Fired when the menu is closed</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-popover-white-background-color</td><td><em>rgba(255, 255, 255, 1)</em></td></tr><tr><td>--cub-popover-dark-background-color</td><td><em>rgba(75, 76, 77, 1)</em></td></tr><tr><td>--cub-popover-border-bottom-color</td><td><em>rgba(229, 229, 229, 1)</em></td></tr><tr><td>--cub-popover-primary-text-color</td><td><em>rgba(51, 51, 51, 1)</em></td></tr><tr><td>--cub-popover-disable-color</td><td><em>rgba(154, 155, 157, 1)</em></td></tr><tr><td>--cub-popover-menu-item-padding</td><td><em>8px 0</em></td></tr><tr><td>--cub-popover-menu-item-margin</td><td><em>0 8px</em></td></tr><tr><td>--cub-popover-menu-name-line-height</td><td><em>normal</em></td></tr></tbody></table>',14),L={},W="",J=p({__name:"doc.en-US",setup(P,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(X,H)=>{const l=r("demo-block");return o(),h("div",i,[j,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93IHR5cGU9ImZsZXgixBjHGmNvbCA6c3Bhbj0iOCIgc3R5bGU9Im1hcmdpbi1sZWZ0OjIwcMgxxzNwb3BvdmVyxxMgIHYtbW9kZWw6dmlzaWLEP8cJLmxpZ2h0VGhlbWUiyS06bGlzdD0iaWNvbkl0ZW1MaXN0yh1sb2NhdGlvbj0iYm90dG9tLXN0YXLLIEBjaG9vc2U9IsYIxEHIHegAoiAg6QD+ICNyZWZlcmVuY+UBCckg5ADEYnV0dG9u5wEUcHJpbWFyeSIgc2hhxBBzcXVhcmUiPkzkAMA8L8owy2UvyGbIFMYo5wEcxhXGE2NvbP8BcP8BcMdU+gFoZGFya+YBZyB0xAc9IsQSIvgBT/UBhP8BQP8BQPYBQERhcmv/AT//AT/qAT/GDXJvdz4KzD08c2NyaXB0xCJpbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB7xWtzZXR1cCgpxw4gIGNvbnN0IOcBYCA9xEkoyBwgIOkBcDogZmFsc2UsyRrqAvLHG8cafSnEe8pa7AF7xV/mALIoW3sgbmHEPSdvcOQBujEnIH0sIM8VMtQVMycgfV3JZnJldHVybukAzyDoAMvqAKrsAILHFX3GPn0KxQs8L+gBWwo85QKn5AFkLusBpS1jb250ZW7oAUN3aWR0aDogMeQCwMRJfcRCxjg="},{default:n(()=>[d]),_:1}),g,m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcm93IHR5cGU9ImZsZXgixBjHGmNvbCA6c3Bhbj0iOCIgc3R5bGU9Im1hcmdpbi1sZWZ0OjIwcMgxxzNwb3BvdmVyIHYtbW9kZWw6dmlzaWLEN8cJLnNob3dJY29uIiB0aGVtZT0iZGFyayIgOmxpc3Q9Iml0ZW1MaXN0yVUgIOkAsSAjcmVmZXJlbmPlALzJIMR3YnV0dG9u5wDHcHJpbWFyeSIgc2hhxBBzcXVhcmUiPlNob3cgxHw8L8o0y2kvyGrIFMYo5wDTxhXGE2NvbP8BJ/8BJ/8BJ2UuZGlzYWJsZUFjdGnkASzvAR9Exh5kIiBsb2NhxCM9InJpZ2j/ATj/ATj4ATjIbv8BN/8BN+oBN8YNcm93PgrMPQo8c2NyaXB0xCNpbXBvcnQgeyByZWFjdGl2ZSwgcmVmLCBoIH0gZnJvbSAndnVlJzvMKkznAQosIENhcnQyLCBNeTLJLkBjdWJmZS9pY29ucy3IO2V4xTtkZWZhdWx0IHvlAKpzZXR1cCgpxw4gIMQydCDnAZcgPeQAhyjIHCAg6ALOOiBmYWxzZSzJGe0BwMcexx19KTsKzV3oAdbFXuYA7yhbyUrKbSAgbmFtZTogJ29wxFYxJ8pvICDkANs6ICgpID0+zTMgIHJldHVybiBoKE15MizPHCAgd2lkdGg6ICcxNHB4zVHEAWNvbG9yOiAncmdiYSgyNTAsIDQ0LCAyNSwgMSknzSzkANXLDskMfcpT+QDJMs145gDJ5QHE30bORjPTRugCFMpJxwpd+AGE6ALs/wGM/gGM5wH9ZDogdHJ16AH3/wDG9QEM30ncSTPqAaDzAPXnAhTKPugBAMpa5wLzyhHwASPHGX3mAfnEZX07Cjwv6APFCjzlBQrkA84u6wQQLWNvbnRlbugDb+cCfzHkBSPEScRHxS/kAcHPJDTIIzwvx1s="},{default:n(()=>[u]),_:1}),b,y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcG9wb3ZlciB2LW1vZGVsOnZpc2libGU9IscJLmN1c3RvbWl6ZWQiIGxvY2F0aW9uPSJib3R0b20tc3RhcnQiIMYkLWNsYXNzPSLGDkPEDSLEaCAgyXcgI3JlZmVyZW5j5QCCxRzkAIZidXR0b24gdHlwZT0icHJpbWFyeSIgc2hhxBBzcXVhcmUiPkPFWCBDb250ZW50PC/KOcdmL8hnPgrQd2PGNcl1ZGl2IOcAr3NlbGYtxyDnALDcIy1pdGVtIiB2LWZvcj0iKMQOLCBpbmRleCkgaW4gxCvnAKIiIDprZXk9IsUdy1ogIDxTZXJ2aWNlPjwvyArMHth6ZGVzYyI+e3sgxHUuxA4gfX08L2Rpdso/zQ/LDewBHcQO6wH8PgrMHQo8c2NyaXDlAStpbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJzvMJ+cAzckhQGN1YmZlL2ljb25zLcguZXjFLmRlZmF1bHQge+UAn2NvbXBvbmVudHM6zEgsxR1zZXR1cCgpxyvELW5zdCDnAqEgPeQAlCjIHCDnAo3kArE6IGZhbHNlxxp9KcR+ykDrAarFROYA4ihbyUnKUyAg5AFtOiAnb3DkAv8xJ8ka5wCi3S8y3y/PLzPfL88vNN8vzy813y/PLzbLL8cKXSk75gNfICByZXR1cm7LPucBlMpZ6wFlxxR95gGGxE59Owo8L+gCbgo8c3R5bOUCniNhcHDHVXBhZGRpbmctdG9wOiAyMDBweMQ/xD0u7AMbxy53aWR0aDogMTk1xiggIGRpc3BsYXk6IGZsZccTxAotd3JhcDogxAbVUOUD5cdVbWFyZ2lu5gCCMecAgckW5gUIzBnTcmp1c3RpZnnIXTogY2VudGVyxh1hbGlnbsVwc84ZxEAtZGlyZWPkAYk6IGNvbHVtbvYAr+UEDPIAr+kBB+cBGTbpAKZmb250LXNpemXsALt0ZXh0LeUAkOwAin3kAaXmAZs="},{default:n(()=>[v]),_:1}),w,A,x,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye75p+l55yL5pu05aSa5pa55ZCRIiBAY2xpY2s9ImhhbmRsZVBpY2tlciI+PC/IQslPcG9wdXAgcG9zaXRpb249ImJvdHRvbSIgdi1tb2RlbDp2aXNpYsRsc2hvd8hICiAgyD/FEsUQICA6Y29sdW1ucz0ixwkixxnnAK/ID0BjaGFuZ2U9IsYIyBc6c3dpcGUtZHVyYeYAjDUwMMozb25maXJtPSJjbG9z6ADRyR3EFNMb5gCpICDpAUYgI3RvcMgWICA8ZGl2IGNsYXNzPSJicmlja0JveOcA3tchIiBpZD0i5gD2VGFyZ2V05AFWZGl2y1XMDzwvyHvGEuYBgsZAxBLHEOQBhT4K6wGUb3bnAVbxAYhjdXN0b21Q5AGxb27mAOd05QCJSfAAmcUcOmxvY+cBT2N1clBvc8QMxzdoZW1lPSJkYXJryCxpc3Q9IugCDUxpc8VF7QCo5ACZPgrsANcKPHNjcmlwdCBsYW5nPSJ0c+UBQmltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tICd2dWUnOwogIGV4xSdkZWZhdWx0IHvlAIhzZXR1cCgpxw4gIGNvbnN0IOoCgSA9xEwoZmFsc2UpxEbKJe0BHt0o6AEMxyUndG9wJ88l7AEJxSfmAMooW8cmIOkAosQBbmFtZTogJ29wxDMxJ8kafSzfL2lvbjLLL8cKXfAAsuoC3SA9ICgpID0+y1DtAPgudmFsdWUgPSDlAPrIRyDrAULWIn075AKDy3PlA5/Ebnsgc2VsZWN0ZWRWxTl90X/oAU/JWs0xWzBdyGUgIGlmICjwAIsp9wDCdHJ1+QCf7ATc8wET0GPPTuUCZ1RpbWVvdXQo0Dz4AVHOQX0sIDDpAabxAT3mBQPnAl/rAjMgdGV4dDog5QJxLCDFWscO7QIryyctc3RhcnTOLccU2TNlbmTPMcQS1S9yaWdozF7GENor8QCPzBbbN+4Ak8oU1TPmBojLMMcR2y3xAJjNF9w57gCayxXVNWxlZsxmxQ/ZKfEAlcsV2jXuAJHJE+0EHccLcmV0dXJu6wK87AS2ymDqAw7KFO0C5MwX6APNyxTqBH7LFeUEIMoQ7AORyybmAwnHEH3mAzDkAMl9Owo8L+YGPOUGRnR5bOUHJi7rBmstY29udGVu6AYad2lkdGg6IDEyMHB4xEl95AEGLugHu8clbWFyZ2luOiA4MHB4IDDGcGRpc3BsYXk6IGZsZcU6ICBqdXN0aWZ5yGI6IGNlbnRlcs9Xznk2x3ggIGhl5ALAzBJiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmEyYzE5IDAlxQw2NDE5IDEwMCXnBEZib3JkZXItxDZ1czogMcdcfeQBKOYBHg=="},{default:n(()=>[f]),_:1}),I,k,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIHNoYcQQc3F1YXJlIiBpZD0icG9waWQiIEBjbGljaz0ixQdDdXN0b21IYW5kbGUiPmPFDiB0YXJnZXQ8L8peyW1wb3BvdmVyCiAgICB2LW1vZGVsOnZpc2libGU9IscJLsZHVMVGIsUrxlJJ6QCFxRU6bGlzdD0iaXRlbUxpc8cqbG9jYXRpb249InRvcC1zdGFyxRk+5gCOx38+Cjwv6gEICjxzY3JpcHTkAKVpbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB7xXtzZXR1cCgpxw4gIGNvbnN0IOcA1SA9yVMoyCEgIOwA6jogZmFsc2XHHH0pOwrNSOgA58xJW3sgbmFtZTogJ29w5AD1MScgfSwgzxUy1BUzJyB9XdBj8QHSID0gKCkgPT7pANMg6ADP7QGkID0gIdQY5AEqxAF9yWhyZXR1cm7LT+gA1izQYcoR8QCWylbFBwrFCzwv6AHFPHN0eWzlAt8jYXBwx2xtYXJnaW4tdG9wOiAzMDBweMQ9xDsu6wIXLWNvbnRlbugB0HdpZHRoOiAxMskvPC/HXA=="},{default:n(()=>[B]),_:1}),Z,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcG9wb3ZlcgogICAgdi1tb2RlbDp2aXNpYmxlPSLHCS5jdXN0b21Db2xvciLFKjpsaXN0PSJpdGVtTGlzdMYVbG9jYXRpb249InJpZ2h0LXN0YXLHG2JnxT09IiNmMDDGE3RoZW1lPSJkYXJrxBHkAJEgIOkAoCAjcmVmZXJlbmPlAKvFHOQAr2J1dHRvbiB0eXBlPSJwcmltYXJ5IiBzaGHEEHNxdWFyZSI+Q+UAryDFczwvyjfHZC/tAQXFIOcBBj4KzB0KPHNjcmlwdMQnaW1wb3J0IHsgcmVhY3RpdmUsIHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge8Vxc2V0dXAoKccOICBjb25zdCDnAVwgPclTKMghICDrAXE6IGZhbHNlxxt9KTsKzUfoAYPMSFt7IG5hbWU6ICdvcOQBkTEnIH0sIM8VMtQVMycgfV3KY3JldHVybukAuSDJbizJEucAx8cQfeQBBSAgfQrFCzwv6AFBPHN0eWzlAXAjYXBwx1FtYXJnaW4tdG9wOiAzMDBweMQ9xDsu6wGTLWNvbnRlbugBTHdpZHRoOiAxMskvPC/HXA=="},{default:n(()=>[C]),_:1}),G])}}});export{J as default,W as excerpt,L as frontmatter};
