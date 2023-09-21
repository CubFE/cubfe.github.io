import{d as p,r as h,b as r,k as l,w as n,aq as c,e as a,o,l as s}from"./style_icon.js";const d={class:"markdown-body"},j=c(`<h1>Tour</h1><h3>Intro</h3><p>A bubble component used to guide the user through the product&#39;s capabilities. This component has been available since version 4.0.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tour</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tour</span>);
</code></pre><h3>Basic Usage</h3><p>At each step, set the id of the target element, and the Tour component looks up the set id value</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"try click"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:link"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target7"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switchValue"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour3 = true"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tour"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"showTour3"'),s(),a("span",{class:"hljs-attr"},":steps"),s("="),a("span",{class:"hljs-string"},'"steps3"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"tile"'),s(),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-end"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tour"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"switchValue"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"showTour3"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"steps3"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'70+ 高质量组件，覆盖移动端主流场景'"),s(`,
            `),a("span",{class:"hljs-attr"},"target"),s(": "),a("span",{class:"hljs-string"},"'target7'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-tour-content-inner"),s(` {
    `),a("span",{class:"hljs-attribute"},"white-space"),s(`: nowrap;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Custom Style",-1),m=a("p",null,"Through 'maskWidth', 'maskHeight', 'bgColor' can be configured hollow mask size, bubble shell layer background color",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"try click"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:link"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target5"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switchValue"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour1 = true"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tour"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-custom-tour cub-customword-tour cub-customstyle-tour"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"showTour1"'),s(`
    `),a("span",{class:"hljs-attr"},":steps"),s("="),a("span",{class:"hljs-string"},'"steps1"'),s(`
    `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-end"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"tile"'),s(`
    `),a("span",{class:"hljs-attr"},"bgColor"),s("="),a("span",{class:"hljs-string"},'"#f00"'),s(`
    `),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(`
    `),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"[0, 0]"'),s(`
    `),a("span",{class:"hljs-attr"},"maskWidth"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
    `),a("span",{class:"hljs-attr"},"maskHeight"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tour"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"switchValue"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"showTour1"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"steps1"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'70+ 高质量组件，覆盖移动端主流场景'"),s(`,
            `),a("span",{class:"hljs-attr"},"target"),s(": "),a("span",{class:"hljs-string"},"'target5'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-tour-content-inner"),s(` {
    `),a("span",{class:"hljs-attribute"},"white-space"),s(`: nowrap;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b=a("h3",null,"Custom Offset",-1),y=a("p",null,"'offset' sets the distance of the hollow mask relative to the target element, 'popoverOffset' sets the offset of the bubble layer",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"点击试试"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour2 = true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:link"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tour-demo-img"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"i in [1,2,3]"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
          `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width:20px;margin-right:10px"'),s(`
          `),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target6"'),s(`
          `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"'),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tour"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"showTour2"'),s(`
    `),a("span",{class:"hljs-attr"},":steps"),s("="),a("span",{class:"hljs-string"},'"steps2"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"tile"'),s(`
    `),a("span",{class:"hljs-attr"},"bgColor"),s("="),a("span",{class:"hljs-string"},'"#f00"'),s(`
    `),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(`
    `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-end"'),s(`
    `),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"[8, 8]"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tour"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"showTour2"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"steps2"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'支持一套代码同时开发多端小程序+H5'"),s(`,
            `),a("span",{class:"hljs-attr"},"target"),s(": "),a("span",{class:"hljs-string"},"'target6'"),s(`,
            `),a("span",{class:"hljs-attr"},"popoverOffset"),s(": ["),a("span",{class:"hljs-number"},"40"),s(", "),a("span",{class:"hljs-number"},"12"),s(`],
            `),a("span",{class:"hljs-attr"},"arrowOffset"),s(": -"),a("span",{class:"hljs-number"},"36"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-tour-content-inner"),s(` {
    `),a("span",{class:"hljs-attribute"},"white-space"),s(`: nowrap;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f=a("h3",null,"Custom Content",-1),I=a("p",null,"Can customize the bubble layer through the slot slot",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"点击试试"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:link"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switchValue"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour4 = true"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tour"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"showTour4"'),s(`
    `),a("span",{class:"hljs-attr"},":steps"),s("="),a("span",{class:"hljs-string"},'"steps4"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"tile"'),s(`
    `),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(`
    `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"bottom-end"'),s(`
    `),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"[8, 8]"'),s(`
    `),a("span",{class:"hljs-attr"},":closeOnClickOverlay"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tour-demo-custom-content"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("cubui 4.x 即将发布，敬请期待"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-divider"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour4 = false"'),s(">")]),s("知道了"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tour"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"switchValue"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"showTour4"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"steps4"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"target"),s(": "),a("span",{class:"hljs-string"},"'target8'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".tour-demo-custom-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"8px"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"width"),s(`: max-content;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-divider"),s(` {
    `),a("span",{class:"hljs-attribute"},"border-color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),w=a("h3",null,"Steps",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},":bottom"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target1"'),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"首页"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target2"'),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"分类"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target3"'),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"购物车"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target4"'),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"我的"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"点击试试"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tour"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-custom-tour"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"showTour"'),s(`
    `),a("span",{class:"hljs-attr"},":steps"),s("="),a("span",{class:"hljs-string"},'"steps"'),s(`
    `),a("span",{class:"hljs-attr"},"location"),s("="),a("span",{class:"hljs-string"},'"top-start"'),s(`
    `),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"[0, 0]"'),s(`
    `),a("span",{class:"hljs-attr"},"maskWidth"),s("="),a("span",{class:"hljs-string"},'"60"'),s(`
    `),a("span",{class:"hljs-attr"},"maskHeight"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tour"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"showTour"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"steps"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'70+ 高质量组件，覆盖移动端主流场景'"),s(`,
            `),a("span",{class:"hljs-attr"},"target"),s(": "),a("span",{class:"hljs-string"},"'target1'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'支持一套代码同时开发多端小程序+H5'"),s(`,
            `),a("span",{class:"hljs-attr"},"target"),s(": "),a("span",{class:"hljs-string"},"'target2'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'基于京东APP 10.0 视觉规范'"),s(`,
            `),a("span",{class:"hljs-attr"},"target"),s(": "),a("span",{class:"hljs-string"},"'target3'"),s(`,
            `),a("span",{class:"hljs-attr"},"location"),s(": "),a("span",{class:"hljs-string"},"'top-end'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'支持定制主题，内置 700+ 个主题变量'"),s(`,
            `),a("span",{class:"hljs-attr"},"target"),s(": "),a("span",{class:"hljs-string"},"'target4'"),s(`,
            `),a("span",{class:"hljs-attr"},"location"),s(": "),a("span",{class:"hljs-string"},"'top-end'"),s(`
          }
        ]
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-id"},"#app"),s(` {
    `),a("span",{class:"hljs-attribute"},"padding-top"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-tabbar-item_icon-box_nav-word"),s(` {
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"14px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),Z=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Whether to display the boot eject layer</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>type</td><td>Tour type</td><td>string</td><td><code class="">step</code></td></tr><tr><td>steps</td><td>Boot Step Content</td><td>StepOptions[]</td><td><code class="">[]</code></td></tr><tr><td>offset</td><td>The offset of the hollow mask relative to the target element</td><td>[number, number]</td><td><code class="">[8, 10]</code></td></tr><tr><td>current</td><td>When the type is&#39; step &#39;, the number of steps is displayed by default</td><td>number</td><td><code class="">0</code></td></tr><tr><td>custom-class</td><td>Custom class</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>location</td><td>Location of popover,<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">location</a></td><td>string</td><td><code class="">&#39;bottom&#39;</code></td></tr><tr><td>next-step-Txt</td><td>Next step text</td><td>string</td><td><code class="">&#39;next&#39;</code></td></tr><tr><td>prev-step-Txt</td><td>Prev step text</td><td>string</td><td><code class="">&#39;prev&#39; </code></td></tr><tr><td>complete-txt</td><td>Complete text</td><td>string</td><td><code class="">&#39;complete&#39;</code></td></tr><tr><td>mask</td><td>Whether to display cutout mask</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bg-color</td><td>Custom background color</td><td>boolean</td><td>&#39;&#39;</td></tr><tr><td>theme</td><td>Theme style, can be set to dark light,<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">theme</a></td><td>string</td><td><code class="">&#39;light&#39;</code></td></tr><tr><td>mask-width</td><td>Width of hollow mask</td><td>number | string</td><td>&#39;&#39;</td></tr><tr><td>mask-height</td><td>Hollow mask height</td><td>number | string</td><td>&#39;&#39;</td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when clicking overlay,<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">closeOnClickOverlay</a></td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-prev-step</td><td>Whether to show prev button</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-title-bar</td><td>Whether to show title bar</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>StepOptions</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>target dom</td><td>id</td><td>-</td></tr><tr><td>content</td><td>popover content</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>location</td><td>Location of popover,<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">location</a></td><td>string</td><td><code class="">&#39;bottom&#39;</code></td></tr><tr><td>popover-offset</td><td>Offset of popopver <a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">offset</a></td><td>[number, number]</td><td><code class="">[0, 12]</code></td></tr><tr><td>arrow-offset</td><td>Offset of arrow <a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">arrowOffset</a></td><td>number</td><td><code class="">0</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom popover content</td></tr><tr><td>prev-step</td><td>Custom prev strep content</td></tr><tr><td>next-step</td><td>Custom prev strep content</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th></tr></thead><tbody><tr><td>change</td><td>Emit when step change</td></tr><tr><td>close</td><td>Emit when popover close</td></tr></tbody></table>',9),G={},X="",Y=p({__name:"doc.en-US",setup(x,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(W,C)=>{const t=h("demo-block");return o(),r("div",d,[j,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0idHJ5IGNsaWNrIsQfICDJLiB2LXNsb3Q6bGlua8Ybxz5zd2l0Y2ggaWQ9InRhcmdldDciIHYtbW9kZWw9IsYdVmFsdWUiIEDFWT0ic2hvd1RvdXIzID0gdHLEGi/HbS/tAJwv6ACd6QCqdG91cstdyEgiIDpzdGVwcz0ixQczIiB0eXDkAM1pbGUiIGxvY2F0aW9uPSJib3R0b20tZW5kIj7GXsRRPgrMeDxzY3JpcHTEc2ltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHvlAM5zZXR1cCgpxw4gIGNvbnN0IHN05AFNPclUKMgfICDrAS06IGZhbHNlLMoc6ADs0hrlAPM6IFvJEiDJc8l5dGVudDogJzcwKyDpq5jotKjph4/nu4Tku7bvvIzopobnm5bnp7vliqjnq6/kuLvmtYHlnLrmma8nymjEAeYB4TogJ8YJNyfLHn3JDF3HCn0p5AEcxAFyZXR1cm4geyAuLi7mAUMo5QEIKSB9xiPEPX07Cjwv6AF+PHN0eWzlAgcu6AGoLecAyC1pbm5lcucA5HdoaXRlLXNwYWNlOiBub3dyYXDEUn3ES8ZC"},{default:n(()=>[i]),_:1}),g,m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0idHJ5IGNsaWNrIsQfICDJLiB2LXNsb3Q6bGlua8Ybxz5zd2l0Y2ggaWQ9InRhcmdldDUiIHYtbW9kZWw9IsYdVmFsdWUiIEDFWT0ic2hvd1RvdXIxID0gdHLEGi/HbS/tAJwv6ACdPgroAKt0b3VyxStjbGFzcz0ixSJ1c3RvbcUbIMoQd29yZNAUc3R5bGXFFSLFReoAp+gAksYYOnN0ZXBzPSLFB8cUbG9jYXRpb249ImJvdMRwZW5kxhp0eXDkATlpbGXGEGJnQ29sb3I9IiNmMDDHI2hlbWU9ImRhcmvHYm9mZnNldD0iWzAsIDBdxhVtYXNrV2lkdGg9IjXHOcQTSGVpZ2h0yBQ+5gEX5ADFPgrsATEKPHNjcmlwdOQBO2ltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHvFdnNldHVwKCnHDiAgY29uc3Qgc3TkAgc9yVQoyB8gIOsB5zogZmFsc2UsyhzoAVzSGuUBXzogW8kSIMlzyXl0ZW50OiAnNzArIOmrmOi0qOmHj+e7hOS7tu+8jOimhuebluenu+WKqOerr+S4u+a1geWcuuaZryfKaMQB5gKbOiAnxgk1J8sefckMXccKfSnkARzEAXJldHVybiB7IC4uLuYBQyjlAQgpIH3GI8Q9fTsKPC/oAX485QJm5AGGLugBqS3nAMgtaW5uZXLnAOR3aGl0ZS1zcGFjZTogbm93cmFwxFJ9xEvGQg=="},{default:n(()=>[u]),_:1}),b,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye76K+V6K+VIiBAY2xpY2s9InNob3dUb3VyMiA9IHRydWUixDwgIMlLIHYtc2xvdDpsaW5rxhsgIDxkaXYgY2xhc3M9InRvdXItZGVtby1pbWciIHYtZm9yPSJpIGluIFsxLDIsM13HUsU5aW1nyQ0gIHN0eeQAmXdpZHRoOjIwcHg7bWFyZ2luLXJpZ2h0OjEwcHgiyy9pZD0idGFyZ2V0NswXc3JjPSJodHRwczovL2ltZzE0LjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTY3OTAyLzIvODc2Mi83OTEzNTgvNjAzNzQyZDdFOWI0Mjc1ZTMvZTA5ZDhmOWE4YmY0YzBlZi5wbmfKei/pAQ8vZGl2xg08L+0Bgy/oAYQ+CugBkuQBMMUrdi1tb2RlbOsBgsZbOnN0ZXBzPSLFB8cUdHlwZT0idGlsZcYQYmdDb2zkAWgjZjAwxyNoZW1lPSJkYXJrxhFsb2NhdGlvbj0iYm90dG9tLWVuZMdib2Zmc2V0PSJbOCwgOF3EFT7mAKvkAJ0+CuwAxQo8c2NyaXB05ADPaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge8V3c2V0dXAoKccOICBjb25zdCBzdOQCZT3JVCjIHyAg6QEZOiBmYWxzZSzKGuUBHDogW8kSIMlXyV10ZW50OiAn5pSv5oyB5LiA5aWX5Luj56CB5ZCM5pe25byA5Y+R5aSa56uv5bCP56iL5bqPK0g1J8pnxAHmAnE6ICfGCTbPH3BvcG92ZXJP5QFSOiBbNDAsIDEyXc4lYXJyb3fIIy0zNssdfckMXccKfSnkAULEAXJldHVybiB7IC4uLuYBaSjlAS4pIH3GI8Q9fTsKPC/oAaQKPOUDU+QBrS7oAdAt5wELLWlubmVy5wEnd2hpdGUtc3BhY2U6IG5vd3JhcMRTfcRMxkI="},{default:n(()=>[v]),_:1}),f,I,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye76K+V6K+VIsQiICDJMSB2LXNsb3Q6bGlua8Ybx0Fzd2l0Y2ggaWQ9InRhcmdldDgiIHYtbW9kZWw9IsYdVmFsdWUiIEBjbGljaz0ic2hvd1RvdXI0ID0gdHLEGi/HbS/tAJ8v6ACgPgroAK50b3VyxSvKYshNIsUYOnN0ZXBzPSLFB8cUdHlwZT0idGlsZccQaGVtZT0iZGFya8YRbG9jYXRpb249ImJvdHRvbS1lbmTHT29mZnNldD0iWzgsIDhdxxVjbG9zZU9uQ+QAz092ZXJsYXk9ImZhbHPFYecAzGRpdiBjbGFzcz0i5AC2LWRlbW8tY3VzxGBjb250ZW505wFkxi0+Y3VidWkgNC54IOWNs+WwhuWPkeW4g++8jOaVrOivt+acn+W+hTwvxCvIN+QBE2RpdmlkZXIgZGlyZWPmAMZ2ZXJ0aWNhbOkBWcZi9QGB5gC3PuefpemBk+S6hsthyQvmAYrkAMY+CuwBpAo8c2NyaXB0IGxhbmc9InRz5QDRaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge8V2c2V0dXAoKccOICBjb25zdCBzdOQChD3JVCjIHyAg6wJkOuYAzyzKHOgA6tIa5QIhOiBbyRIgyXPGAeYCzjogJ8YJOCfLHn3JDF3HCn0p5ADSxAFyZXR1cm4geyAuLi7mAPko5QC+KSB9xiPEPX07Cjwv5gE+5QFIdHls5QL1LvgCLOcAnXBhZGRpbmc6IDhweMZOZGlzcGxheTogZmxlxxN3aWR0aDogbWF4yD7GGGFsaWduLWl0ZW1zOiBjZW50ZXLEGeQAkC7sAkvGa2JvcmRlci1jb2xvcjogI2ZmZsYtPC/nAK4="},{default:n(()=>[k]),_:1}),w,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIDpib3R0b209InRydWUixB7NIC1pdGVtIGlkPSJ0YXJnZXQxIiB0YWItdGl0bGU9IummlumhtSI+PC/PMt9IZXQyzUjliIbnsbvfSNVIM81I6LSt54mp6L2m30vVSzTNS+aIkeeahNdIzBXpAVFjZWxsIMc+54K55Ye76K+V6K+VIiBAY2xpY2s9InNob3dUb3VyID0g5gFuxkjEOclGdG91cuUAqmNsYXNzPSLFIXVzdG9txRsixRx2LW1vZGVsylLGFzpzdGVwcz0ixQfGE2xvY2F0aW9uPSJ0b3Atc3RhcnTHLG9mZnNldD0iWzAsIDBdxhVtYXNrV2lkdGg9IjYwyhNIZWlnaHQ9IjXFFOgBE291cj4KPC/qAlkKPHNjcmlwdCBsYW5nPSJ0c+UCT2ltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHvlAIBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg6AETOiBmYWxzZSzKGeQBFjogW8kRIMlVyVt0ZW50OiAnNzArIOmrmOi0qOmHj+e7hOS7tu+8jOimhuebluenu+WKqOerr+S4u+a1geWcuuaZryfKZ8QB5gJROiAnxgkxJ8sefcwr+ACB5pSv5oyB5LiA5aWX5Luj56CB5ZCM5pe25byA5Y+R5aSa56uv5bCP56iL5bqPK0g1/gCAMv8AgPIAgOWfuuS6juS6rOS4nEFQUCAxMC4wIOinhuinieinhOiMg95xM88f6AKGxCFvcC1lbmT/AJLyAJLmARLlrprliLbkuLvpopjvvIzlhoXnva4gNzAwKyDkuKrGGOWPmOmHj/4AoTT/AKHvAKHJDF3HCn0p5AKxxAFyZXR1cm4geyAuLi7mAtgo5QKdKSB9xiPEPX07Cjwv5gMd5QMndHls5QWJI2FwcOcA8nBhZGRpbmctdG9wOiAyMDBweMQ/xD0u7wSBX2ljb24tYm94X25hdi13b3Jkx0Nmb250LXNpemU6IDE0yEA8L8du"},{default:n(()=>[A]),_:1}),Z])}}});export{Y as default,X as excerpt,G as frontmatter};
