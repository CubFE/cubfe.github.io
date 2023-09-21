import{d as p,r as h,b as j,k as t,w as n,aq as c,e as a,o as i,l as s}from"./style_icon.js";const r={class:"markdown-body"},o=c(`<h1>TabBar 标签栏</h1><h3>介绍</h3><p>底部导航常用场景</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabbar</span>, <span class="hljs-title class_">TabbarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabbar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TabbarItem</span>);
</code></pre><h3>基础用法</h3><p>如果需要在现有 Icon 的基础上使用更多图标，请参考下方自定义 Icon 图标插槽。</p>`,7),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(" @"),a("span",{class:"hljs-attr"},"tab-switch"),s("="),a("span",{class:"hljs-string"},'"tabSwitch"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Home"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Category"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Find"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Cart"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Me"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"tabSwitch"),s("("),a("span",{class:"hljs-params"},"item, index"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item, index);
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        tabSwitch,
        `),a("span",{class:"hljs-title class_"},"Home"),s(`,
        `),a("span",{class:"hljs-title class_"},"Category"),s(`,
        `),a("span",{class:"hljs-title class_"},"Find"),s(`,
        `),a("span",{class:"hljs-title class_"},"Cart"),s(`,
        `),a("span",{class:"hljs-title class_"},"Me"),s(`
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"通过名称匹配",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeName"'),s(" @"),a("span",{class:"hljs-attr"},"tab-switch"),s("="),a("span",{class:"hljs-string"},'"tabSwitch"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in List"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"item.name"'),s(),a("span",{class:"hljs-attr"},":tab-title"),s("="),a("span",{class:"hljs-string"},'"item.title"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"item.icon"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
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
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"props.active"'),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"icon.active"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"v-else"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"icon.unactive"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"props"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"props.active"'),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"icon.active"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"v-else"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"icon.unactive"'),s(" />")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(` },
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
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
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
`)])],-1),v=a("h3",null,"徽标提示",-1),I=a("p",null,"设置 dot 属性后，会在图标右上角展示一个小红点；设置 value 属性后，会在图标右上角展示相应的徽标。",-1),w=a("p",null,"内部使用了 bardge 徽标组件，可将其属性直接作用于 TabbarItem props。",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"首页"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Home"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"分类"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Category"'),s(),a("span",{class:"hljs-attr"},":dot"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"发现"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Find"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"110"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"购物车"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Cart"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"我的"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Me"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        `),a("span",{class:"hljs-title class_"},"Home"),s(`,
        `),a("span",{class:"hljs-title class_"},"Category"),s(`,
        `),a("span",{class:"hljs-title class_"},"Find"),s(`,
        `),a("span",{class:"hljs-title class_"},"Cart"),s(`,
        `),a("span",{class:"hljs-title class_"},"Me"),s(`
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"自定义颜色",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"unactive-color"),s("="),a("span",{class:"hljs-string"},'"#7d7e80"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#1989fa"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in List"'),s(),a("span",{class:"hljs-attr"},":tab-title"),s("="),a("span",{class:"hljs-string"},'"item.title"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"item.icon"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
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
`)])],-1),k=a("h3",null,"自定义数量",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"unactive-color"),s("="),a("span",{class:"hljs-string"},'"#7d7e80"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#1989fa"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Home"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Home"'),s(),a("span",{class:"hljs-attr"},":dot"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Home"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"110"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Home"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        `),a("span",{class:"hljs-title class_"},"Home"),s(`
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"固定底部，可自由跳转",-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"bottom"),s(),a("span",{class:"hljs-attr"},"safe-area-inset-bottom"),s(),a("span",{class:"hljs-attr"},"placeholder"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in List"'),s(),a("span",{class:"hljs-attr"},":tab-title"),s("="),a("span",{class:"hljs-string"},'"item.title"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"item.icon"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Home"),s(", "),a("span",{class:"hljs-title class_"},"Category"),s(", "),a("span",{class:"hljs-title class_"},"Find"),s(", "),a("span",{class:"hljs-title class_"},"Cart"),s(", "),a("span",{class:"hljs-title class_"},"Me"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
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
`)])],-1),G=c('<h2>API</h2><h3>Tabbar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>选中标签的索引值或者名称</td><td>number</td><td><code class="">0</code></td></tr><tr><td>bottom</td><td>是否固定在页面底部</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>unactive-color</td><td>icon 未激活的颜色</td><td>string</td><td><code class="">#7d7e80</code></td></tr><tr><td>active-color</td><td>icon 激活的颜色</td><td>string</td><td><code class="">#1989fa</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启 iphone 系列全面屏底部安全区适配</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>placeholder</td><td>固定在底部时，是否在标签位置生成一个等高的占位元素</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>TabbarItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>tab-title</td><td>标签页的标题</td><td>string</td><td>--</td></tr><tr><td>name</td><td>标签名称，作为匹配的标识符</td><td>string</td><td><code class="">当前标签的索引值</code></td></tr><tr><td>icon</td><td>标签页显示的<a href="#/zh-CN/component/icon">图标名称</a></td><td>string</td><td>--</td></tr></tbody></table><h3>TabbarItem Slots</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td><td>active: boolean</td></tr></tbody></table><h3>Tabbar Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tab-switch</td><td>切换页签时触发事件</td><td>点击的数据和索引值</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-tabbar-active-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-tabbar-unactive-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-tabbar-border-top</td><td><em>1px solid #eee</em></td></tr><tr><td>--cub-tabbar-border-bottom</td><td><em>1px solid #eee</em></td></tr><tr><td>--cub-tabbar-box-shadow</td><td><em>none</em></td></tr><tr><td>--cub-tabbar-item-text-font-size</td><td><em>var(--cub-font-size-0)</em></td></tr><tr><td>--cub-tabbar-item-text-line-height</td><td><em>initial</em></td></tr><tr><td>--cub-tabbar-height</td><td><em>50px</em></td></tr><tr><td>--cub-tabbar-word-margin-top</td><td><em>auto</em></td></tr></tbody></table>',13),Y={},S="",Q=p({__name:"doc.taro",setup(M,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(B,N)=>{const l=h("demo-block");return i(),j("div",r,[o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIEB0YWItc3dpdGNoPSJ0YWJTxQsixCfNKS1pdGVtIMQtdGl0bGU9Iuagh+etviIgOmljb249IkhvbWUiPjwvzzLfSNJIQ2F0ZWdvcnkiPiDfTd9NxE1GaW5k/wCV30jGSENhcnTfSN9IxkhN+AEjzBU+Cjwv6gGuPHNjcmlwdMQlaW1wb3J0IHsg5AFsLCDoASosIOQA58QQcnQsIE1lIH0gZnJvbSAnQGN1YmZlL8R7cy12dWUtdGFybyc7CiAgZXjFSmRlZmF1bHQge+UAyGNvbXBvbmVudHM632TEZCzFNHNldHVwKCnHQiAgZnVuY3Rpb27kAQTmAkoo5ADjLCBpbmRleMooxG5uc29sZS5sb2fNI+QAn8QBfccIcmV0dXJuyznJWuYAgsQB5QCsyQ7pALTJEuUAvMsgcnTKDk1lyHHGesR4fTsKPC/oAXg="},{default:n(()=>[d]),_:1}),m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHYtbW9kZWw9ImFjdGl2ZU5hbWUiIEB0YWItc3dpdGNoPSJ0YWJTxQsixDzNPi1pdGVtIHYtZm9yPSIoxA0saW5kZXgpIGluIExpc3QiIDpuYW1lPSLEHC7ECyIgOsRddGl0bMgXxQwiIDppY29uxxPEC8hvL89wxBfMFT4KPC/qAN48c2NyaXB0xCVpbXBvcnQgeyByZWYsIGggfSBmcm9tICd2dWUnO8wgSG9tZSwgQ2F0ZWdvcnksIEZpbmTEEHJ0LCBNZck4QGN1YmZlL+QAnHMtdnVlLXRhcm/FSmV4xUpkZWZhdWx0IHvlALljb21wb25lbnRzOt9kxGQsxTRzZXR1cCgpx0LERG5zdCDqAZsgPeQAzSgnY8dIJynEf8oq5AF0ID0gW8cVIMlJxAHlAWg6ICfmoIfnrb4nxnLGAeQA1DogaCjkAKYpzBnkAbM6ICdob21lJ8kX5wCt32DUYOgBANRk6QDU32jfaMVo5AFe1GRmaW5k32DfYMZg5AG41GBjYXJ032DfYMZgTfUBhm3sARzHCl3oAgFmdW5jdGlvbiDpA7DmA5Eg5wOS6gCC5AIrb2xlLmxvZ80jyErIW3JldHVybss5yVrqAJzkAnHKDuoCqchLxlTEUn07Cjwv6AOd"},{default:n(()=>[g]),_:1}),b,u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIEB0YWItc3dpdGNoPSJ0YWJTxQsixCfNKS1pdGVtIMQtdGl0bGU9Iuagh+etvscpICDJYSAjaWNvbj0icHJvcHPJHyAgPGltZyB2LWlmxxsuYWN0aXZlIiA6c3JjPSLENckTL9E3ZWxzZcwqdW7RLDwv7ADkxBDvAL7/ANT/ANT/ANT/ANT/ANT/ANT/ANT/ANT8ANTIFyAgPEhvbWU+PC/FB99/zX/MFT4KzDM8c2NyaXB0xCVpbXBvcnQgeyDEXyB9IGZyb20gJ0BjdWJmZS/kAIlzLXZ1ZS10YXJvJzsKICBleMUwZGVmYXVsdCB7xX9jb21wb25lbnRzOslKLMUac2V0dXAoKccoICBmdW5jdGlvbuQBCeYC0ijkAK8sIGluZGV4yijEVG5zb2xlLmxvZ80j5ACFxAF9xwjEKHQg5ACqID3LP+YBsjrJECAgJ2h0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS9pbWFnZXRvb2xzL2pmcy90MS83MDQyMy80LzIwNTUzLzM2NTIvNjJlNzQ2MjlFMjNiYTU1MGUvYWVlZWQwZTNiOWY0M2FlNi5wbmcn5gD6xAHoAjn5AIcz/wCHMS8yMzMxOS/EAzgzMjkvMzA4NOUAiGMzNDZFOTU3YzU0ZWYvNmMzZThhNDllNTJiNzZmMuUAiMd1fegBMnJldHVybusBJOQBNeoArekBks445AFofTsKPC/oAjQ="},{default:n(()=>[_]),_:1}),y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHYtbW9kZWw9ImFjdGl2ZSLEIM0iLWl0ZW0gdi1mb3I9IijEDSxpbmRleCkgaW4gTGlzdCIgOnRhYi10aXRsZT0ixCEuxQwiIDppY29uxxPECyI+IDwvz1rEcMwVPgo8L+oArDxzY3JpcHTEJWltcG9ydCB7IHJlZiwgaCB9IGZyb20gJ3Z1ZSc7zCBIb21lLCBDYXRlZ29yeSwgRmluZMQQcnQsIE1lyThAY3ViZmUv5ACYcy12dWUtdGFyb8VKZXjFSmRlZmF1bHQge+UBEmNvbXBvbmVudHM632TEZCzFNHNldHVwKCnHQsREbnN0IOYBaSA95ADJKDIpxHLKHeQBUSA9IFvHFSDJPMQB5QFXOiAn5qCH562+J8ZlxgHkAMc6IGgo5ACZKcwZbmFtxDNob21lJ8kX5wCg32DUYOgA89RkY8cc32jfaMZo5AFR1GRmaW5k32DfYMZg5AGr1GBjYXJ032DfYMZgTfUBhm3sARzHCl3oAgFmdW5jdGlvbiB0YWJTd2l0Y2jmA24g5wNv6gCC5AIrb2xlLmxvZ80jyErIW3JldHVybss5yVrqAJzkAnHKDuYCnMhHxlDETn07Cjwv6AOM"},{default:n(()=>[f]),_:1}),v,I,w,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyxA/NES1pdGVtIHRhYi10aXRsZT0i6aaW6aG1IiA6aWNvbj0iSG9tZSIgOnZhbHVlPSIxMSI+IDwvzz/fVWU9IuWIhuexu8lVQ2F0ZWdvcnkiIDpkb3Q9InRydWXfWdhZj5HnjrDJWUZpbmTsAK4w31bXVui0reeJqei9pslZQ2FydN9M10zmiJHnmoTJSU1lIj7VRswVPgo8L+oBwTxzY3JpcHTEJWltcG9ydCB7IOQBlywg6AFILCDkAPnEEHJ0LCBNZSB9IGZyb20gJ0BjdWJmZS/Ee3MtdnVlLXRhcm8nOwogIGV4xUpkZWZhdWx0IHvlAMhjb21wb25lbnRzOt9kxGQsxTRzZXR1cCgpx0IgIHJldHVybskPIMZHyQ7JT8kSxVfLIHJ0yg5NZccLfeQAtCAgfQrFCzwv6AET"},{default:n(()=>[C]),_:1}),A,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHVuYWN0aXZlLWNvbG9yPSIjN2Q3ZTgwIiDPFzE5ODlmYSLEP81BLWl0ZW0gdi1mxCYoxA0saW5kZXgpIGluIExpc3QiIDp0YWItdGl0bGU9IsQhLsUMIiA6aWNvbscTxAsiPiA8L89axHDMFT4KPC/qAMs8c2NyaXB0xCVpbXBvcnQgeyBoIH0gZnJvbSAndnVlJzvMG0hvbWUsIENhdGVnb3J5LCBGaW5kxBBydCwgTWXJOEBjdWJmZS/kAJNzLXZ1ZS10YXJvxUpleMVKZGVmYXVsdCB75QENY29tcG9uZW50czrfZMRkLMU0c2V0dXAoKcdCxERuc3TlAS8gPSBbxxUgyR/EAeUBNTogJ+agh+etvifGSMYB5ACqOiBoKMR8KcwZbmFtxDNob21lJ8kX5wCD32DUYOgA1tRkY8cc32jfaMZo5AE01GRmaW5k32DfYMZg5AGO1GBjYXJ032DfYMZgTfUBhm3sARzHCl3kAlbEAXJldHVybstp5AIMxw19xiXENH07Cjwv6AL1"},{default:n(()=>[x]),_:1}),k,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHVuYWN0aXZlLWNvbG9yPSIjN2Q3ZTgwIiDPFzE5ODlmYSLEP81BLWl0ZW0gdGFiLXRpdGxlPSLmoIfnrb4iIDppY29uPSJIb21lIiA6dmFsdWU9IjExIj4gPC/PP99V2VVkb3Q9InRydWXfVd9V9wCqMNhWzBU+Cjwv6gFbPHNjcmlwdMQlaW1wb3J0IHsgxFcgfSBmcm9tICdAY3ViZmUvxHFzLXZ1ZS10YXJvJzsKICBleMUwZGVmYXVsdCB75QC+Y29tcG9uZW50czrJSizFGnNldHVwKCnHKCAgcmV0dXJuyQ8gxS3HDX3EYCAgfQrFCzwv6ACl"},{default:n(()=>[H]),_:1}),Z,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIGJvdHRvbSBzYWZlLWFyZWEtaW5zZXQtxxdwbGFjZWhvbGRlcsQ5zTstaXRlbSB2LWZvcj0iKMQNLGluZGV4KSBpbiBMaXN0IiA6dGFiLXRpdGxlPSLEIS7FDCIgOmljb27HE8QLIj4gPC/PWsRwzBU+Cjwv6gDFPHNjcmlwdMQlaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSc7zBtIb21lLCBDYXRlZ29yeSwgRmluZMQQcnQsIE1lyThAY3ViZmUv5ACTcy12dWUtdGFyb8VKZXjFSmRlZmF1bHQge+UBDWNvbXBvbmVudHM632TEZCzFNHNldHVwKCnHQsREbnN05QEvID0gW8cVIMkfxAHlATU6ICfmoIfnrb4nxkjGAeQAqjogaCjEfCnJGMdr30jUSOgAvt9M30zGTOQBAN9I30jGSOQBQt9I30jGSE3sASLHCl3kAdzEAXJldHVybstT5AGSxw19xiXENH07Cjwv6AJ7"},{default:n(()=>[W]),_:1}),G])}}});export{Q as default,S as excerpt,Y as frontmatter};
