import{d as p,r as h,b as r,k as l,w as n,aq as c,e as a,l as s,o}from"./style_icon.js";const d={class:"markdown-body"},j=c(`<h1>Tour 引导</h1><h3>介绍</h3><p>用于引导用户了解产品功能的气泡组件。自 4.0 版本开始提供该组件。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tour</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tour</span>);
</code></pre><h3>基础用法</h3><p>在每一步中设置 <code class="">target</code> 目标元素的 id ，Tour 组件则会根据设置的 id 值进行查找</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"点击试试"'),s(">")]),s(`
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
`)])],-1),g=a("h3",null,"自定义样式",-1),u=a("p",null,[s("通过 "),a("code",{class:""},"maskWidth"),s("、"),a("code",{class:""},"maskHeight"),s("、"),a("code",{class:""},"bgColor"),s(" 可配置镂空遮罩的大小、气泡弹层背景色")],-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"点击试试"'),s(">")]),s(`
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
`)])],-1),b=a("h3",null,"设置偏移量",-1),I=a("p",null,[a("code",{class:""},"offset"),s(" 可设置镂空遮罩层相对于目标元素的距离，"),a("code",{class:""},"popoverOffset"),s(" 可设置气泡层的偏移量")],-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"点击试试"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour2 = true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:link"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tour-demo-img"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"i in [1,2,3]"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
          `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width:20px;height:20px;margin-right:10px"'),s(`
          `),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target6"'),s(`
          `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"'),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
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
`)])],-1),v=a("h3",null,"自定义内容",-1),w=a("p",null,"通过 slot 插槽可自定义气泡层内容",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tour-demo-custom-content"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(">")]),s("cubui 4.x 即将发布，敬请期待"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour4 = false"'),s(">")]),s("知道了"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
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
  `),a("span",{class:"hljs-selector-class"},".cub-viewider"),s(` {
    `),a("span",{class:"hljs-attribute"},"border-color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),A=a("h3",null,"步骤引导",-1),k=a("p",null,[s("属性 "),a("code",{class:""},"type"),s(" 设置为 "),a("code",{class:""},"step"),s(" 可以进行步骤操作。属性 "),a("code",{class:""},"Steps"),s(" 数组中的每一项代表每步的内容")],-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"点击试试"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTour = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},":bottom"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target1"'),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"首页"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target2"'),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"分类"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target3"'),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"购物车"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"target4"'),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"我的"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tour"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-customword-tour"'),s(`
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
  page {
    `),a("span",{class:"hljs-attribute"},"padding-top"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-tour-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: block;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-tabbar-item_icon-box_nav-word"),s(` {
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"14px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),Y=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否展示引导弹出层</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>type</td><td>引导类型</td><td>string</td><td><code class="">step</code></td></tr><tr><td>steps</td><td>引导步骤内容</td><td>StepOptions[]</td><td><code class="">[]</code></td></tr><tr><td>offset</td><td>镂空遮罩相对于目标元素的偏移量</td><td>[number, number]</td><td><code class="">[8, 10]</code></td></tr><tr><td>current</td><td>类型为 <code class="">step</code> 时，默认展示第几步</td><td>number</td><td><code class="">0</code></td></tr><tr><td>custom-class</td><td>自定义 class 值</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>location</td><td>弹出层位置,同 Popopver 的<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">location 属性</a></td><td>string</td><td><code class="">&#39;bottom&#39;</code></td></tr><tr><td>next-step-Txt</td><td>下一步按钮文案</td><td>string</td><td><code class="">&#39;下一步&#39;</code></td></tr><tr><td>prev-step-Txt</td><td>上一步按钮文案</td><td>string</td><td><code class="">&#39;上一步&#39;</code></td></tr><tr><td>complete-txt</td><td>完成按钮文案</td><td>string</td><td><code class="">&#39;完成&#39;</code></td></tr><tr><td>mask</td><td>是否显示镂空遮罩</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bg-color</td><td>自定义背景色</td><td>boolean</td><td>&#39;&#39;</td></tr><tr><td>theme</td><td>气泡遮罩层主题,同 Popopver 的<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">theme 属性</a></td><td>string</td><td><code class="">&#39;light&#39;</code></td></tr><tr><td>mask-width</td><td>镂空遮罩层宽度</td><td>number |string</td><td>&#39;&#39;</td></tr><tr><td>mask-height</td><td>镂空遮罩层高度</td><td>number |string</td><td>&#39;&#39;</td></tr><tr><td>close-on-click-overlay</td><td>是否在点击镂空遮罩层后关闭,同 Popopver 的<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">closeOnClickOverlay 属性</a></td><td>Boolean</td><td><code class="">true</code></td></tr><tr><td>show-prev-step</td><td>是否展示上一步按钮</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-title-bar</td><td>是否展示标题栏</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>StepOptions</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>目标对象</td><td>id</td><td>-</td></tr><tr><td>content</td><td>气泡层内容</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>location</td><td>弹出层位置,同 Popopver 的<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">location 属性</a></td><td>string</td><td><code class="">&#39;bottom&#39;</code></td></tr><tr><td>popover-offset</td><td>气泡层偏移量，同 Popopver 的<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">offset 属性</a></td><td>[number, number]</td><td><code class="">[0, 12]</code></td></tr><tr><td>arrow-offset</td><td>小箭头的偏移量，同 Popopver 的<a href="https://cubui.kakusoft.com/#/zh-CN/component/popover">arrowOffset 属性</a></td><td>number</td><td><code class="">0</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义气泡层内容</td></tr><tr><td>prev-step</td><td>自定义上一步内容</td></tr><tr><td>next-step</td><td>自定义下一步内容</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>切换步骤时触发</td></tr><tr><td>close</td><td>气泡层关闭时触发</td></tr></tbody></table>',9),H={},R="",V=p({__name:"doc.taro",setup(B,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(C,x)=>{const t=h("demo-block");return o(),r("div",d,[j,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye76K+V6K+VIsQiICDJMSB2LXNsb3Q6bGlua8Ybx0Fzd2l0Y2ggaWQ9InRhcmdldDciIHYtbW9kZWw9IsYdVmFsdWUiIEBjbGljaz0ic2hvd1RvdXIzID0gdHLEGi/HbS/tAJ8v6ACg6QCtdG91cstdyEgiIDpzdGVwcz0ixQczIiB0eXBlPSJ0aWxlIiBsb2NhdGlvbj0iYm90dG9tLWVuZCI+xl7EUT4KzHg8c2NyaXB0xHNpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QDOc2V0dXAoKccOICBjb25zdCBzdOQBTT3JVCjIHyAg6wEtOiBmYWxzZSzKHOgA7NIa5QDzOiBbyRIgyXPJeXRlbnQ6ICc3MCsg6auY6LSo6YeP57uE5Lu277yM6KaG55uW56e75Yqo56uv5Li75rWB5Zy65pmvJ8poxAHmAeE6ICfGCTcnyx59yQxdxwp9KeQBHMQBcmV0dXJuIHsgLi4u5gFDKOUBCCkgfcYjxD19Owo8L+gBfgo8c3R5bOUCCC7oAakt5wDJLWlubmVy5wDld2hpdGUtc3BhY2U6IG5vd3JhcMRTfcRMxkI="},{default:n(()=>[i]),_:1}),g,u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye76K+V6K+VIsQiICDJMSB2LXNsb3Q6bGlua8Ybx0Fzd2l0Y2ggaWQ9InRhcmdldDUiIHYtbW9kZWw9IsYdVmFsdWUiIEBjbGljaz0ic2hvd1RvdXIxID0gdHLEGi/HbS/tAJ8v6ACgPgroAK50b3VyxStjbGFzcz0ixSJ1c3RvbcUbIMoQd29yZNAUc3R5bGXFFSLFReoAp+gAksYYOnN0ZXBzPSLFB8cUbG9jYXRpb249ImJvdMRwZW5kxhp0eXBlPSJ0aWxlxhBiZ0NvbG9yPSIjZjAwxyNoZW1lPSJkYXJrx2JvZmZzZXQ9IlswLCAwXcYVbWFza1dpZHRoPSI1xznEE0hlaWdodMgUPuYBF+QAxT4K7AExCjxzY3JpcHTkATtpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB7xXZzZXR1cCgpxw4gIGNvbnN0IHN05AIHPclUKMgfICDrAec6IGZhbHNlLMoc6AFc0hrlAV86IFvJEiDJc8l5dGVudDogJzcwKyDpq5jotKjph4/nu4Tku7bvvIzopobnm5bnp7vliqjnq6/kuLvmtYHlnLrmma8nymjEAeYCmzogJ8YJNSfLHn3JDF3HCn0p5AEcxAFyZXR1cm4geyAuLi7mAUMo5QEIKSB9xiPEPX07Cjwv6AF+CjzlAmfkAYcu6AGqLecAyS1pbm5lcucA5XdoaXRlLXNwYWNlOiBub3dyYXDEU33ETMZC"},{default:n(()=>[m]),_:1}),b,I,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye76K+V6K+VIiBAY2xpY2s9InNob3dUb3VyMiA9IHRydWUixDwgIMlLIHYtc2xvdDpsaW5rxhsgIDx2aWV3IGNsYXNzPSJ0b3VyLWRlbW8taW1nIiB2LWZvcj0iaSBpbiBbMSwyLDNdx1PFOmltZ8kNICBzdHnkAJp3aWR0aDoyMHB4O2hlaWdodMYMbWFyZ2luLXLFEjEwcHgiyztpZD0idGFyZ2V0NswXc3JjPSJodHRwczovL2ltZzE0LjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTY3OTAyLzIvODc2Mi83OTEzNTgvNjAzNzQyZDdFOWI0Mjc1ZTMvZTA5ZDhmOWE4YmY0YzBlZi5wbmfKei/pARwv5AEdxg48L+0BkS/oAZI+CugBoOQBPcUrdi1tb2RlbOsBkMZcOnN0ZXBzPSLFB8cUdHlwZT0idGlsZcYQYmdDb2zkAXUjZjAwxyNoZW1lPSJkYXJrxhFsb2NhdGlvbj0iYm90dG9tLWVuZMdib2Zmc2V0PSJbOCwgOF3EFT7mAKvkAJ0+CuwAxQo8c2NyaXB05ADPaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge8V3c2V0dXAoKccOICBjb25zdCBzdOQCcz3JVCjIHyAg6QEZOiBmYWxzZSzKGuUBHDogW8kSIMlXyV10ZW50OiAn5pSv5oyB5LiA5aWX5Luj56CB5ZCM5pe25byA5Y+R5aSa56uv5bCP56iL5bqPK0g1J8pnxAHmAnI6ICfGCTbPH3BvcG92ZXJP5QFSOiBbNDAsIDEyXc4lYXJyb3fIIy0zNssdfckMXccKfSnkAULEAXJldHVybiB7IC4uLuYBaSjlAS4pIH3GI8Q9fTsKPC/oAaQKPOUDYOQBrS7oAdAt5wELLWlubmVy5wEnd2hpdGUtc3BhY2U6IG5vd3JhcMRTfcRMxkI="},{default:n(()=>[y]),_:1}),v,w,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye76K+V6K+VIsQiICDJMSB2LXNsb3Q6bGlua8Ybx0Fzd2l0Y2ggaWQ9InRhcmdldDgiIHYtbW9kZWw9IsYdVmFsdWUiIEBjbGljaz0ic2hvd1RvdXI0ID0gdHLEGi/HbS/tAJ8v6ACgPgroAK50b3VyxSvKYshNIsUYOnN0ZXBzPSLFB8cUdHlwZT0idGlsZccQaGVtZT0iZGFya8YRbG9jYXRpb249ImJvdHRvbS1lbmTHT29mZnNldD0iWzgsIDhdxxVjbG9zZU9uQ+QAz092ZXJsYXk9ImZhbHPFYecAzHZpZXcgY2xhc3M9IuQAty1kZW1vLWN1c8RhY29udGVudOcBZccuPmN1YnVpIDQueCDljbPlsIblj5HluIPvvIzmlazor7fmnJ/lvoU8L8UsyDnkARbEEWlkZXIgZGlyZWPmAMp2ZXJ0aWNhbOkBXcdl9QGG5gC8PuefpemBk+S6hsxkygzmAZHkAMw+CuwBqwo8c2NyaXB0IGxhbmc9InRz5QDXaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge8V3c2V0dXAoKccOICBjb25zdCBzdOQCiz3JVCjIHyAg6wJrOuYA0SzKHOgA7NIa5QIoOiBbyRIgyXPGAeYC1TogJ8YJOCfLHn3JDF3HCn0p5ADSxAFyZXR1cm4geyAuLi7mAPko5QC+KSB9xiPEPX07Cjwv5gE+Pgo8c3R5bOUC+y74AjHnAJxwYWRkaW5nOiA4cHjGTWRpc3BsYXk6IGZsZccTd2lkdGg6IG1heMg+xhhhbGlnbi1pdGVtczogY2VudGVyxBnkAI8u7QJOxmxib3JkZXItY29sb3I6ICNmZmbGLjwv5wCv"},{default:n(()=>[f]),_:1}),A,k,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i54K55Ye76K+V6K+VIiBAY2xpY2s9InNob3dUb3VyID0gdHJ1ZSI+PC/IOT4KyEd0YWJiYXIgOmJvdHRvbT0ixioKICDNIC1pdGVtIGlkPSJ0YXJnZXQxIiB0YWItx3/pppbpobXIYMsy30hldDLNSOWIhuexu99I1UgzzUjotK3nianovabfS9VLNM1L5oiR55qE10jMFesBUm91csVlY2xhc3M9IsQUY3VzdG9td29yZMUfIsUgdi1tb2RlbOoBqcYXOnN0ZXBzPSLFB8YTbG9jYXRpb249InRvcC1zdGFydMcsb2Zmc2V0PSJbMCwgMF3GFW1hc2tXaWR0aD0iNjDKE0hlaWdodD0iNcUU6ADSb3VyPgo8L+oCXwo8c2NyaXB0IGxhbmc9InRz5QIOaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQge+UAgHNldHVwKCnHDiAgY29uc3Qgc3RhdGUgPclUKMgfICDoARM6IGZhbHNlLMoZ5AEWOiBbyREgyVXJW3RlbnQ6ICc3MCsg6auY6LSo6YeP57uE5Lu277yM6KaG55uW56e75Yqo56uv5Li75rWB5Zy65pmvJ8pnxAHmAhA6ICfGCTEnyx59zCv4AIHmlK/mjIHkuIDlpZfku6PnoIHlkIzml7blvIDlj5HlpJrnq6/lsI/nqIvluo8rSDX+AIAy/wCA8gCA5Z+65LqO5Lqs5LicQVBQIDEwLjAg6KeG6KeJ6KeE6IyD3nEzzx/oAobEIW9wLWVuZP8AkvIAkuYBEuWumuWItuS4u+mimO+8jOWGhee9riA3MDArIOS4qsYY5Y+Y6YeP/gChNP8Aoe8AockMXccKfSnkArHEAXJldHVybiB7IC4uLuYC2CjlAp0pIH3GI8Q9fTsKPC/mAx0+CjxzdHls5QWOcGFnZecA8XBhZGRpbmctdG9wOiAyMDBweMQ+xDwu6ANtLecBDccyZGlzcGxheTogYmxvY2vGbHfkA7zVQOoEf19pY29uLWJveF9uYXYt5ARZx1Fmb250LXNpemU6IDE0yEA8L+cArg=="},{default:n(()=>[Z]),_:1}),Y])}}});export{V as default,R as excerpt,H as frontmatter};
