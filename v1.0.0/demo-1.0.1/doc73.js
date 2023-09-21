import{d as p,r as h,b as j,k as t,w as n,aq as c,e as a,o as i,l as s}from"./style_icon.js";const r={class:"markdown-body"},o=c(`<h1>TabBar 标签栏</h1><h3>介绍</h3><p>底部导航常用场景</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabbar</span>, <span class="hljs-title class_">TabbarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabbar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TabbarItem</span>);
</code></pre><h3>基础用法</h3><p>如果需要在现有 Icon 的基础上使用更多图标，请参考 icon 组件自定义图标引入。</p>`,7),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(" @"),a("span",{class:"hljs-attr"},"tab-switch"),s("="),a("span",{class:"hljs-string"},'"tabSwitch"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Category"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Category"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Find"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Find"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Cart"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Cart"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Me"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Me"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"tabSwitch"),s("("),a("span",{class:"hljs-params"},"item, index"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item, index);
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        tabSwitch
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),d=a("h3",null,"通过名称匹配",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeName"'),s(" @"),a("span",{class:"hljs-attr"},"tab-switch"),s("="),a("span",{class:"hljs-string"},'"tabSwitch"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in List"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"item.name"'),s(),a("span",{class:"hljs-attr"},":tab-title"),s("="),a("span",{class:"hljs-string"},'"item.title"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"item.icon"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { h, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" activeName = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'category'"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title class_"},"List"),s(` = [
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Home"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'home'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Category"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'category'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Find"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'find'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Cart"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'cart'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Me"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'my'"),s(`
        }
      ];
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"tabSwitch"),s("("),a("span",{class:"hljs-params"},"item, index"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item, index);
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        tabSwitch,
        `),a("span",{class:"hljs-title class_"},"List"),s(`,
        activeName
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"自定义图标",-1),u=a("p",null,"通过 icon 插槽自定义图标，可以通过 slot-scope 判断标签是否选中",-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(" @"),a("span",{class:"hljs-attr"},"tab-switch"),s("="),a("span",{class:"hljs-string"},'"tabSwitch"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"props"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"props.active ? icon.active : icon.unactive"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"props"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"props.active ? icon.active : icon.unactive"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"props"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"props.active ? icon.active : icon.unactive"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"tabSwitch"),s("("),a("span",{class:"hljs-params"},"item, index"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item, index);
      }
      `),a("span",{class:"hljs-keyword"},"const"),s(` icon = {
        `),a("span",{class:"hljs-attr"},"active"),s(`:
          `),a("span",{class:"hljs-string"},"'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png'"),s(`,
        `),a("span",{class:"hljs-attr"},"unactive"),s(`:
          `),a("span",{class:"hljs-string"},"'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png'"),s(`
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        icon,
        tabSwitch
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"自定义选中",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in List"'),s(),a("span",{class:"hljs-attr"},":tab-title"),s("="),a("span",{class:"hljs-string"},'"item.title"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"item.icon"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { h, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" active = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"2"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title class_"},"List"),s(` = [
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Home"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'home'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Category"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'category'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Find"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'find'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Cart"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'cart'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Me"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'my'"),s(`
        }
      ];
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"tabSwitch"),s("("),a("span",{class:"hljs-params"},"item, index"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item, index);
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        tabSwitch,
        `),a("span",{class:"hljs-title class_"},"List"),s(`,
        active
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"徽标提示",-1),C=a("p",null,"设置 dot 属性后，会在图标右上角展示一个小红点；设置 value 属性后，会在图标右上角展示相应的徽标。",-1),I=a("p",null,"内部使用了 bardge 徽标组件，可将其属性直接作用于 TabbarItem props。",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":dot"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"110"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"自定义颜色",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"unactive-color"),s("="),a("span",{class:"hljs-string"},'"#7d7e80"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#1989fa"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in List"'),s(),a("span",{class:"hljs-attr"},":tab-title"),s("="),a("span",{class:"hljs-string"},'"item.title"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"item.icon"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { h, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title class_"},"List"),s(` = [
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Home"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'home'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Category"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'category'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Find"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'find'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Cart"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'cart'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Me"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'my'"),s(`
        }
      ];
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        `),a("span",{class:"hljs-title class_"},"List"),s(`
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"自定义数量",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"unactive-color"),s("="),a("span",{class:"hljs-string"},'"#7d7e80"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#1989fa"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":dot"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"110"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"固定底部，可自由跳转",-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"bottom"),s(),a("span",{class:"hljs-attr"},"safe-area-inset-bottom"),s(),a("span",{class:"hljs-attr"},"placeholder"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in List"'),s(),a("span",{class:"hljs-attr"},":tab-title"),s("="),a("span",{class:"hljs-string"},'"item.title"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"item.icon"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title class_"},"List"),s(` = [
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Home"),s(`)
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Category"),s(`)
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Find"),s(`)
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Cart"),s(`)
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'标签'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Me"),s(`)
        }
      ];
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        `),a("span",{class:"hljs-title class_"},"List"),s(`
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),B=c('<h2>API</h2><h3>Tabbar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>选中标签的索引值或者名称</td><td>number</td><td><code class="">0</code></td></tr><tr><td>bottom</td><td>是否固定在页面底部</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>unactive-color</td><td>icon 未激活的颜色</td><td>string</td><td><code class="">#7d7e80</code></td></tr><tr><td>active-color</td><td>icon 激活的颜色</td><td>string</td><td><code class="">#1989fa</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启 iphone 系列全面屏底部安全区适配</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>placeholder</td><td>固定在底部时，是否在标签位置生成一个等高的占位元素</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>TabbarItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>tab-title</td><td>标签页的标题</td><td>string</td><td>--</td></tr><tr><td>name</td><td>标签名称，作为匹配的标识符</td><td>string</td><td><code class="">当前标签的索引值</code></td></tr><tr><td>icon</td><td>标签页显示的<a href="#/zh-CN/component/icon">图标</a></td><td>Component</td><td>--</td></tr><tr><td>href</td><td>标签页的跳转链接；如果同时存在 <code class="">to</code>，优先级高于 <code class="">to</code></td><td>string</td><td>--</td></tr><tr><td>to</td><td>标签页的路由对象，等于 vue-router 的 <a href="https://router.vuejs.org/zh/api/#to">to 属性</a> 属性</td><td>string | object</td><td>--</td></tr></tbody></table><h3>TabbarItem Slots</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td><td>active: boolean</td></tr></tbody></table><h3>Tabbar Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tab-switch</td><td>切换页签时触发事件</td><td>点击的数据和索引值</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-tabbar-active-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-tabbar-unactive-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-tabbar-border-top</td><td><em>1px solid #eee</em></td></tr><tr><td>--cub-tabbar-border-bottom</td><td><em>1px solid #eee</em></td></tr><tr><td>--cub-tabbar-box-shadow</td><td><em>none</em></td></tr><tr><td>--cub-tabbar-item-text-font-size</td><td><em>var(--cub-font-size-0)</em></td></tr><tr><td>--cub-tabbar-item-text-line-height</td><td><em>initial</em></td></tr><tr><td>--cub-tabbar-height</td><td><em>50px</em></td></tr><tr><td>--cub-tabbar-word-margin-top</td><td><em>auto</em></td></tr></tbody></table>',13),F={},L="",Q=p({__name:"doc",setup(M,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(Y,W)=>{const l=h("demo-block");return i(),j("div",r,[o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIEB0YWItc3dpdGNoPSJ0YWJTxQsixCfNKS1pdGVtIMQtdGl0bGU9Iuagh+etvscpICDJYSAjaWNvbsgXICA8SG9tZT48L8UHyC0vyC7HaC/Pad9/33/Nf0NhdGVnb3J5PjwvyQv/AIf/AIf/AIf2AIdGaW5kPjwvxQfff99/33/Wf0NhcnTlAQJydN9/33/ff9d/TeQCAk3/AgDPe8wVPgrMMzxzY3JpcOUAyWltcG9ydCB7IOQCXywg6AHiLCDkAWnEEHJ0LCBNZSB9IGZyb20gJ0BjdWJmZS/kAJ9zLXZ1ZSc7CiAgZXjFRWRlZmF1bHQge+UAlGNvbXBvbmVudHM631/EXyzFNHNldHVwKCnHQiAgZnVuY3Rpb27kATTmA1ko5ADeLCBpbmRleMooxG5uc29sZS5sb2fNI+QAn8QBfccIcmV0dXJuyznJWsgpxjLEMH07Cjwv6AEr"},{default:n(()=>[m]),_:1}),d,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHYtbW9kZWw9ImFjdGl2ZU5hbWUiIEB0YWItc3dpdGNoPSJ0YWJTxQsixDzNPi1pdGVtIHYtZm9yPSIoxA0saW5kZXgpIGluIExpc3QiIDpuYW1lPSLEHC7ECyIgOsRddGl0bMgXxQwiIDppY29uxxPEC8hvL89wxBfMFT4KPC/qAN48c2NyaXB0xCVpbXBvcnQgeyBoLCByZWYgfSBmcm9tICd2dWUnO8wgSG9tZSwgQ2F0ZWdvcnksIEZpbmTEEHJ0LCBNZck4QGN1YmZlL+QAnHMtyEVleMVFZGVmYXVsdCB75QC0Y29tcG9uZW50czrfX8RfLMU0c2V0dXAoKcdCxERuc3Qg6gGWID3kAMUoJ2PHSCcpxH/KKuQBbyA9IFvHFSDJScQB5QFjOiAn5qCH562+J8ZyxgHkAM86IGgo5ACmKcwZ5AGuOiAnaG9tZSfJF+cArd9g1GDoAQDUZOkA1N9o32jFaOQBXtRkZmluZN9g32DGYOQBuNRgY2FydN9g32DGYE31AYZt7AEcxwpd6AIBZnVuY3Rpb24g6QOr5gOMIOcDjeoAguQCK29sZS5sb2fNI8hKyFtyZXR1cm7LOcla6gCc5AJxyg7qAqnIS8ZUxFJ9Owo8L+gDmA=="},{default:n(()=>[g]),_:1}),b,u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIEB0YWItc3dpdGNoPSJ0YWJTxQsixCfNKS1pdGVtIMQtdGl0bGU9Iuagh+etvscpICDJYSAjaWNvbj0icHJvcHPJHyAgPGltZyA6c3JjxxsuYWN0aXZlID8gxDDIDjrGDnVuxhAiIGFsdD0iIiAvyWgvyGnGEjwv7wCk/wC6/wC6/wC6/wC6/wC6/wC6/wC6/wC6/wC6/wC6/wC6/wC6xBfMFT4KzDM8c2NyaXB0xCVleHBvcnQgZGVmYXVsdCB7xU9zZXR1cCgpxw4gIGZ1bmN0aW9u5AD65gKPKMRlLCBpbmRleMooICBjb25zb2xlLmxvZ80jO8cifccIxCh05QDmID3LP+YA8DrJECAgJ2h0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS9pbWFnZXRvb2xzL2pmcy90MS83MDQyMy80LzIwNTUzLzM2NTIvNjJlNzQ2MjlFMjNiYTU1MGUvYWVlZWQwZTNiOWY0M2FlNi5wbmcnLMl16AF3+QCHM/8AhzEvMjMzMTkvxAM4MzI5LzMwODTlAIhjMzQ2RTk1N2M1NGVmLzZjM2U4YTQ5ZTUyYjc2ZjLlAIjHdX3oATJyZXR1cm7rASTkATXqAK3pAZLOOOQBaH07Cjwv6AHq"},{default:n(()=>[_]),_:1}),y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHYtbW9kZWw9ImFjdGl2ZSLEIM0iLWl0ZW0gdi1mb3I9IijEDSxpbmRleCkgaW4gTGlzdCIgOnRhYi10aXRsZT0ixCEuxQwiIDppY29uxxPECyI+IDwvz1rEcMwVPgo8L+oArDxzY3JpcHTEJWltcG9ydCB7IGgsIHJlZiB9IGZyb20gJ3Z1ZSc7zCBIb21lLCBDYXRlZ29yeSwgRmluZMQQcnQsIE1lyThAY3ViZmUv5ACYcy3IRWV4xUVkZWZhdWx0IHvlAQ1jb21wb25lbnRzOt9fxF8sxTRzZXR1cCgpx0LERG5zdCDmAWQgPeQAwSgyKcRyyh3kAUwgPSBbxxUgyTzEAeUBUjogJ+agh+etvifGZcYB5ADCOiBoKOQAmSnMGW5hbcQzaG9tZSfJF+cAoN9g1GDoAPPUZGPHHN9o32jGaOQBUdRkZmluZN9g32DGYOQBq9RgY2FydN9g32DGYE31AYZt7AEcxwpd6AIBZnVuY3Rpb24gdGFiU3dpdGNo5gNpIOcDauoAguQCK29sZS5sb2fNI8hKyFtyZXR1cm7LOcla6gCc5AJxyg7mApzIR8ZQxE59Owo8L+gDhw=="},{default:n(()=>[f]),_:1}),w,C,I,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyxA/NES1pdGVtIHRhYi10aXRsZT0i5qCH562+IiA6dmFsdWU9IjExIsY1ICDJVSAjaWNvbsgXICA8SG9tZT48L8UHyC0vyC7HdC/Pdf8Ai+wAi2RvdD0idHJ1Zf8Ai/8Ai/8Ai/8Ai+8BFjD/AIz/AIz/AIz/AIzkAIzff99/3H/MFT4KzDM8c2NyaXB0xCVpbXBvcnQgeyDEXywgQ2F0ZWdvcnksIEZpbmTEEHJ0LCBNZSB9IGZyb20gJ0BjdWJmZS/kAKNzLXZ1ZSc7CiAgZXjFRWRlZmF1bHQge+UAlGNvbXBvbmVudHM631/EXwogIH07Cjwv6ACa"},{default:n(()=>[v]),_:1}),A,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHVuYWN0aXZlLWNvbG9yPSIjN2Q3ZTgwIiDPFzE5ODlmYSLEP81BLWl0ZW0gdi1mxCYoxA0saW5kZXgpIGluIExpc3QiIDp0YWItdGl0bGU9IsQhLsUMIiA6aWNvbscTxAsiPiA8L89axHDMFT4KPC/qAMs8c2NyaXB0xCVpbXBvcnQgeyBoLCByZWYgfSBmcm9tICd2dWUnO8wgSG9tZSwgQ2F0ZWdvcnksIEZpbmTEEHJ0LCBNZck4QGN1YmZlL+QAmHMtyEVleMVFZGVmYXVsdCB75QENY29tcG9uZW50czrfX8RfLMU0c2V0dXAoKcdCxERuc3TlAS8gPSBbxxUgyR/EAeUBNTogJ+agh+etvifGSMYB5AClOiBoKMR8KcwZbmFtxDNob21lJ8kX5wCD32DUYOgA1tRkY8cc32jfaMZo5AE01GRmaW5k32DfYMZg5AGO1GBjYXJ032DfYMZgTfUBhm3sARzHCl3kAlbEAXJldHVybstp5AIMxw19xiXENH07Cjwv6AL1"},{default:n(()=>[x]),_:1}),Z,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHVuYWN0aXZlLWNvbG9yPSIjN2Q3ZTgwIiDPFzE5ODlmYSLEP81BLWl0ZW0gdGFiLXRpdGxlPSLmoIfnrb4iIDp2YWx1ZT0iMTHHNSAg6QCFICNpY29uyBcgIDxIb21lPjwvxQfILS/ILsd0L891/wCL7ACLZG90PSJ0cnVl/wCL/wCL/wCL/wCL7wEWMP8AjP8AjP0AjMwVPgrMMzxzY3JpcHTEJWltcG9ydCB7IMRfIH0gZnJvbSAnQGN1YmZlL+QAiXMtdnVlJzsKICBleMUrZGVmYXVsdCB7xXpjb21wb25lbnRzOslFCiAgfTsKPC/IZg=="},{default:n(()=>[H]),_:1}),k,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIGJvdHRvbSBzYWZlLWFyZWEtaW5zZXQtxxdwbGFjZWhvbGRlcsQ5zTstaXRlbSB2LWZvcj0iKMQNLGluZGV4KSBpbiBMaXN0IiA6dGFiLXRpdGxlPSLEIS7FDCIgOmljb27HE8QLIj4gPC/PWsRwzBU+Cjwv6gDFPHNjcmlwdMQlaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSc7zBtIb21lLCBDYXRlZ29yeSwgRmluZMQQcnQsIE1lyThAY3ViZmUv5ACTcy3IRWV4xUVkZWZhdWx0IHvlAQhjb21wb25lbnRzOt9fxF8sxTRzZXR1cCgpx0LERG5zdOUBKiA9IFvHFSDJH8QB5QEwOiAn5qCH562+J8ZIxgHkAKU6IGgoxHwpyRjHa99I1EjoAL7fTN9MxkzkAQDfSN9IxkjkAULfSN9IxkhN7AEixwpd5AHcxAFyZXR1cm7LU+QBkscNfcYlxDR9Owo8L+gCdg=="},{default:n(()=>[G]),_:1}),B])}}});export{Q as default,L as excerpt,F as frontmatter};
