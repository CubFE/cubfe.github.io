import{d as p,r as h,b as r,k as t,w as n,aq as c,e as a,l as s,o}from"./style_icon.js";const i={class:"markdown-body"},j=c(`<h1>Overlay</h1><h3>Intro</h3><p>Create a mask layer, which is usually used to prevent users from doing other operations</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Overlay</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Overlay</span>);
</code></pre><h3>Basic Usage</h3><p>Use <code class="">visible</code> to control the display/hiding of mask layers</p>`,7),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Show mask layer"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Mask style",-1),u=a("p",null,[s("It can be set through "),a("code",{class:""},"overlay-style")],-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Mask style"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":overlay-style"),s("="),a("span",{class:"hljs-string"},'"overlayStyle"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"overlayStyle"),s(`: {
          `),a("span",{class:"hljs-attr"},"backgroundColor"),s(": "),a("span",{class:"hljs-string"},"'rgba(0, 0, 0, .2)'"),s(`
        }
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Set animation time",-1),b=a("p",null,[s("Set mask display/hide time through "),a("code",{class:""},"duration"),s(", time "),a("code",{class:""},"s")],-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Set animation time"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":duration"),s("="),a("span",{class:"hljs-string"},'"2.5"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"Lock Background Scroll",-1),k=a("p",null,[s("Use "),a("code",{class:""},"lock scroll"),s(" to set whether the mask locks the background when displaying, and prohibit scrolling")],-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Lock Background Scroll"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":lock-scroll"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"Nested content",-1),Z=a("p",null,[s("The default "),a("code",{class:""},"slot"),s(" is supported, and any content can be nested")],-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Nested content"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrapper"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"content"'),s(">")]),s("Here is the text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".wrapper"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".content"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"8px"),s(`;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"color"),s(`: red;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),A=a("h3",null,"Click the mask not to close",-1),G=a("p",null,[s("Set "),a("code",{class:""},"close on click override"),s(" to control whether the click mask is closed. If it is set to "),a("code",{class:""},"true"),s(", the "),a("code",{class:""},"click"),s(" event will also become invalid")],-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Click the mask not to close"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-overlay"),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":close-on-click-overlay"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrapper"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"content"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"show = false;"'),s(">")]),s("close"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-overlay"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".wrapper"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".content"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"150px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"8px"),s(`;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"color"),s(`: red;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),H=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:visible</td><td>Control the display/hide of masks</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>z-index</td><td>Custom Mask Level</td><td>string | number</td><td><code class="">2000</code></td></tr><tr><td>duration</td><td>Display/hide animation duration, in seconds</td><td>string | number</td><td><code class="">0.3</code></td></tr><tr><td>overlay-class</td><td>Custom mask class name</td><td>string</td><td>-</td></tr><tr><td>overlay-style</td><td>Custom Mask Style</td><td>CSSProperties</td><td>-</td></tr><tr><td>lock-scroll</td><td>Whether the background is locked when the mask is displayed</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close the mask when clicking.</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Triggered when clicked.</td><td>event: MouseEvent</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Embedded Mask Content Customization</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-overlay-bg-color</td><td><em>rgba(0, 0, 0, 0.7)</em></td></tr></tbody></table>',11),V={},Y="",X=p({__name:"doc.en-US",setup(B,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(_,R)=>{const l=h("demo-block");return o(),r("div",i,[j,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPlPEDW1hc2sgbGF5ZXI8L8pAyU9vdmVybGF5IHYtbW9kZWw6dmlzaWJsZcZKIj7GNMclPgo8L+oAkDxzY3JpcHQgbGFuZz0idHMixFRpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg5ACmOiBmYWxzZccUfSnEXsQBcmV0dXJuyUwgIC4uLuYAjSjFUinIMsYxfQrFCzwv5gDYPgo="},{default:n(()=>[d]),_:1}),g,u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPk1hc2sgc3R5bGU8L8o7yUpvdmVybGF5IHYtbW9kZWw6dmlzaWJsZcZFIiA6xyAtxUI9IscPU8QOIj7GUscUPgo8L+oAqTxzY3JpcHQgbGFuZz0idHMixHJpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg5ADEOiBmYWxzZSzJFewAwzrJTMQBYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCDGAy4yKSfJL33HCn0p5ACwxAFyZXR1cm7LUi4uLuYA3yjlAKQpyDLGMcRBfTsKPC/mASo+Cg=="},{default:n(()=>[m]),_:1}),y,b,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPlNldCBhbmltYXRpxDJpbWU8L8pDyVJvdmVybGF5IHYtbW9kZWw6dmlzaWJsZcZNIiA6ZHVyxUI9IjIuNSI+xkTHNT4KPC/qAKM8c2NyaXB0IGxhbmc9InRzIsRkaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOQAtjogZmFsc2XHFH0pxF7EAXJldHVybslMICAuLi7mAI0oxVIpyDLGMX0KxQs8L+YA2D4K"},{default:n(()=>[v]),_:1}),I,k,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPkxvY2sgQmFja2dyb3VuZCBTY3JvbGw8L8pHyVZvdmVybGF5IHYtbW9kZWw6dmlzaWJsZcZRIiA6bG9jay1zxUA9IsZexkjHOT4KPC/qAKs8c2NyaXB0IGxhbmc9InRzIsRoaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOQAujogZmFsc2XHFH0pxF7EAXJldHVybslMICAuLi7mAI0oxVIpyDLGMX0KxQs8L+YA2D4K"},{default:n(()=>[w]),_:1}),f,Z,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InN1Y2Nlc3MiIEBjbGljaz0ic2hvdyA9IHRydWUiPk5lc3RlZCBjb250ZW50PC/KP8lOb3ZlcmxheSB2LW1vZGVsOnZpc2libMRaaG93IsQnICA8ZGl2IGNsYXNzPSJ3cmFwcGVyxxrOHMdoIj5IZXJlIGlzIHRoZSB0ZXh0PC9kaXbHTMgL5gCOx38+Cjwv6gDpPHNjcmlwdCBsYW5nPSJ0c8VtaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge8V4c2V0dXAoKccOIOQBFHN0IHN0YXRlID3JVCjIHyAg5AEAOiBmYWxzZccUfSnEXsQBcmV0dXJuyUwgIC4uLuYAjSjFUinIMsYxfQrFCzwv5gDY5ADhdHls5QHSLucBUMdMZGlzcGxheTogZmxleMY9aGVpZ2h0OiAxMDAlxhJhbGlnbi1pdGVtczogY2VudGVyxhlqdXN0aWZ5LecBiMwd5ACDLscY2mx3aWR0aDogMTUwcNB+yhNiYWNrZ3JvdW5kOiAjZmZmxxZvcmRlci1yYWRpdXM6IDjILv8ArfUAreQBnmxvcjogcmVkxBB95AE75gEy"},{default:n(()=>[x]),_:1}),A,G,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ic2hvdyA9IHRydWUiPkPEFCB0aGUgbWFzayBub3QgdG8gY2xvc2U8L8pMyVtvdmVybGF5IHYtbW9kZWw6dmlzaWJsZcZWIiA6xTotb24txW3ILz0iZmFsc2UixEcgIDxkaXYgY2xhc3M9IndyYXBwZXLHGs4cY29udGVudOgAui5zdG9wxmkgPSDFUTsiPsVxPC9kaXbHXcgL5gC/5wCBPgo8L+oBJzxzY3JpcHQgbGFuZz0idHPFfmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHvFeHNldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclUKMgfICDkAMg65gDHxxR9KcRexAFyZXR1cm7JTCAgLi4u5gCNKMVSKcgyxjF9CsULPC/mANjkAOF0eWzlAhAu5wFhx0xkaXNwbGF5OiBmbGV4xj1oZWlnaHQ6IDEwMCXGEmFsaWduLWl0ZW1zOiBjZW50ZXLGGWp1c3RpZnkt5wGZzB3kAIMuxxjabHdpZHRoOiAxNTBw0H7KE2JhY2tncm91bmQ6ICNmZmbHFm9yZGVyLXJhZGl1czogOMgu/wCt9QCt5AGebG9yOiByZWTEEH3kATvmATI="},{default:n(()=>[C]),_:1}),H])}}});export{X as default,Y as excerpt,V as frontmatter};
