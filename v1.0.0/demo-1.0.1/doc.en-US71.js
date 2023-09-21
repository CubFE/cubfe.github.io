import{d as p,r as h,b as j,k as t,w as n,aq as c,e as a,o as i,l as s}from"./style_icon.js";const r={class:"markdown-body"},o=c(`<h1>TabBar</h1><h3>Intro</h3><p>Bottom navigation bar</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabbar</span>, <span class="hljs-title class_">TabbarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabbar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TabbarItem</span>);
</code></pre><h3>Basic Usage</h3><p>If you need to use more icons based on the existing Icon, please refer to the Icon component custom icon introduction</p>`,7),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(" @"),a("span",{class:"hljs-attr"},"tab-switch"),s("="),a("span",{class:"hljs-string"},'"tabSwitch"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Category"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Category"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Find"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Find"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Cart"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Cart"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
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
`)])],-1),d=a("h3",null,"Custom Icon",-1),b=a("p",null,"Use icon slot to custom icon.",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(" @"),a("span",{class:"hljs-attr"},"tab-switch"),s("="),a("span",{class:"hljs-string"},'"tabSwitch"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"props"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"props.active ? icon.active : icon.unactive"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"props"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"props.active ? icon.active : icon.unactive"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
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
`)])],-1),u=a("h3",null,"Custom Selected",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Home"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'home'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Category"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'category'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Find"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'find'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Cart"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'cart'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
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
`)])],-1),_=a("h3",null,"Show Badge",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(),a("span",{class:"hljs-attr"},":dot"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"110"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(">")]),s(`
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
`)])],-1),C=a("h3",null,"Custom Color",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"unactive-color"),s("="),a("span",{class:"hljs-string"},'"#7d7e80"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#1989fa"'),s(">")]),s(`
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
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Home"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'home'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Category"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'category'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Find"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'find'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Cart"),s(`),
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'cart'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
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
`)])],-1),v=a("h3",null,"Custom Quantity",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar"),s(),a("span",{class:"hljs-attr"},"unactive-color"),s("="),a("span",{class:"hljs-string"},'"#7d7e80"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#1989fa"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(),a("span",{class:"hljs-attr"},":dot"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Home"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Home"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-tabbar-item"),s(),a("span",{class:"hljs-attr"},"tab-title"),s("="),a("span",{class:"hljs-string"},'"tab"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"110"'),s(">")]),s(`
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
`)])],-1),A=a("h3",null,"Fixed Bottom",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Home"),s(`)
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Category"),s(`)
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Find"),s(`)
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Cart"),s(`)
        },
        {
          `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'tab'"),s(`,
          `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-title function_"},"h"),s("("),a("span",{class:"hljs-title class_"},"Me"),s(`)
        }
      ];
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        `),a("span",{class:"hljs-title class_"},"List"),s(`
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=c('<h2>API</h2><h3>Tabbar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:visible</td><td>The index value of the selected label</td><td>number</td><td><code class="">0</code></td></tr><tr><td>bottom</td><td>Whether to fix the bottom</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>unactive-color</td><td>Color of unactive tab item</td><td>string</td><td><code class="">#7d7e80</code></td></tr><tr><td>active-color</td><td>Color of active tab item</td><td>string</td><td><code class="">#1989fa</code></td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>placeholder</td><td>Whether to generate a placeholder element when fixed</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>TabbarItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>tab-title</td><td>title</td><td>string</td><td>--</td></tr><tr><td>name</td><td>Identifier</td><td>string</td><td><code class="">Item index</code></td></tr><tr><td>icon</td><td>icon name</td><td>string</td><td>--</td></tr><tr><td>href</td><td>Jump links for tabs</td><td>string</td><td>--</td></tr><tr><td>to</td><td>Target route of the link, same as to of vue-router</td><td>string | object</td><td>--</td></tr></tbody></table><h3>TabbarItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>icon</td><td>Custom Icon</td><td>active: boolean</td></tr></tbody></table><h3>Tabbar Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>tab-switch</td><td>Emitted when changing active tab</td><td>item,index</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-tabbar-active-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-tabbar-unactive-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-tabbar-border-top</td><td><em>1px solid #eee</em></td></tr><tr><td>--cub-tabbar-border-bottom</td><td><em>1px solid #eee</em></td></tr><tr><td>--cub-tabbar-box-shadow</td><td><em>none</em></td></tr><tr><td>--cub-tabbar-item-text-font-size</td><td><em>var(--cub-font-size-0)</em></td></tr><tr><td>--cub-tabbar-item-text-line-height</td><td><em>initial</em></td></tr><tr><td>--cub-tabbar-height</td><td><em>50px</em></td></tr><tr><td>--cub-tabbar-word-margin-top</td><td><em>auto</em></td></tr></tbody></table>',13),X={},B="",N=p({__name:"doc.en-US",setup(Z,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(k,W)=>{const l=h("demo-block");return i(),j("div",r,[o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIEB0YWItc3dpdGNoPSJ0YWJTxQsixCfNKS1pdGVtIMQtdGl0bGXFLMcmICDJXiAjaWNvbsgXICA8SG9tZT48L8UHyC0vyC7HZS/PZt9833zKfENhdGVnb3J5PjwvyQv/AIT/AIT/AITzAIRGaW5kPjwvxQfffN9833zTfENhcnTlAPxydN9833zffNR8TeQB9k3/AfTPeMwVPgrMMzxzY3JpcOUAxmltcG9ydCB7IOQCUywg6AHZLCDkAWPEEHJ0LCBNZSB9IGZyb20gJ0BjdWJmZS/kAJ9zLXZ1ZSc7CiAgZXjFRWRlZmF1bHQge+UAlGNvbXBvbmVudHM631/EXyzFNHNldHVwKCnHQiAgZnVuY3Rpb27kATHmA0oo5ADeLCBpbmRleMooxG5uc29sZS5sb2fNI+QAn8QBfccIcmV0dXJuyznJWsgpxjLEMH07Cjwv6AEr"},{default:n(()=>[m]),_:1}),d,b,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIEB0YWItc3dpdGNoPSJ0YWJTxQsixCfNKS1pdGVtIMQtdGl0bGXFLMcmICDJXiAjaWNvbj0icHJvcHPJHyAgPGltZyA6c3JjxxsuYWN0aXZlID8gxDDIDjrGDnVuxhAiIGFsdD0iIiAvyWgvyGnGEjwv7wCh/wC3/wC3/wC3/wC3/wC3/wC3/wC3/wC3/wC3/wC3/wC3/QC3zBU+CswzPHNjcmlwdMQlZXhwb3J0IGRlZmF1bHQge8VPc2V0dXAoKccOICBmdW5jdGlvbuQA9+YChijEZSwgaW5kZXjKKCAgY29uc29sZS5sb2fNIzvHIn3HCMQodOUA5iA9yz/mAPA6yRAgICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvNzA0MjMvNC8yMDU1My8zNjUyLzYyZTc0NjI5RTIzYmE1NTBlL2FlZWVkMGUzYjlmNDNhZTYucG5nJyzJdegBd/kAhzP/AIcxLzIzMzE5L8QDODMyOS8zMDg05QCIYzM0NkU5NTdjNTRlZi82YzNlOGE0OWU1MmI3NmYy5QCIx3V96AEycmV0dXJu6wEk5AE16gCt6QGSzjjkAWh9Owo8L+gB6g=="},{default:n(()=>[g]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHYtbW9kZWw9ImFjdGl2ZSLEIM0iLWl0ZW0gdi1mb3I9IijEDSxpbmRleCkgaW4gTGlzdCIgOnRhYi10aXRsZT0ixCEuxQwiIDppY29uxxPECyI+IDwvz1rEcMwVPgo8L+oArDxzY3JpcHTEJWltcG9ydCB7IGgsIHJlZiB9IGZyb20gJ3Z1ZSc7zCBIb21lLCBDYXRlZ29yeSwgRmluZMQQcnQsIE1lyThAY3ViZmUv5ACYcy3IRWV4xUVkZWZhdWx0IHvlAQ1jb21wb25lbnRzOt9fxF8sxTRzZXR1cCgpx0LERG5zdCDmAWQgPeQAwSgyKcRyyh3kAUwgPSBbxxUgyTzEAeUBUjogJ3RhYifGYsYB5AC/OiBoKOQAlinMGW5hbcQwaG9tZSfJF+cAnd9d0V3oAO3UYWPHHN9l32UgaCjkAUjUYWZpbmTfXd9d5QDCcnTUXWNhcnTfXd9dIGgoTfUBem3sARPHCl3oAfJmdW5jdGlvbiB0YWJTd2l0Y2jmA1og5wNbyn/kAhxvbGUubG9nzSPISshbcmV0dXJuyznJWuoAnOQCYsoO5gKNyEfGUMROfTsKPC/oA3g="},{default:n(()=>[y]),_:1}),_,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyxA/NES1pdGVtIHRhYi10aXRsZT0idGFiIiA6dmFsdWU9IjExIsYyICDJUiAjaWNvbsgXICA8SG9tZT48L8UHyC0vyC7HcS/Pcv8AiOkAiGRvdD0idHJ1Zf8AiP8AiP8AiP8AiOwBEDD/AIn/AIn/AIn/AInffN983XzMFT4KzDM8c2NyaXB0xCVpbXBvcnQgeyDEXywgQ2F0ZWdvcnksIEZpbmTEEHJ0LCBNZSB9IGZyb20gJ0BjdWJmZS/kAKNzLXZ1ZSc7CiAgZXjFRWRlZmF1bHQge+UAlGNvbXBvbmVudHM631/EXwogIH07Cjwv6ACa"},{default:n(()=>[f]),_:1}),C,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHVuYWN0aXZlLWNvbG9yPSIjN2Q3ZTgwIiDPFzE5ODlmYSLEP81BLWl0ZW0gdi1mxCYoxA0saW5kZXgpIGluIExpc3QiIDp0YWItdGl0bGU9IsQhLsUMIiA6aWNvbscTxAsiPiA8L89axHDMFT4KPC/qAMs8c2NyaXB0xCVpbXBvcnQgeyBoIH0gZnJvbSAndnVlJzvMG0hvbWUsIENhdGVnb3J5LCBGaW5kxBBydCwgTWXJOEBjdWJmZS/kAJNzLchFZXjFRWRlZmF1bHQge+UBCGNvbXBvbmVudHM631/EXyzFNHNldHVwKCnHQsREbnN05QEqID0gW8cVIMkfxAHlATA6ICd0YWInxkXGAeQAojogaCjEeSnMGW5hbcQwaG9tZSfJF+cAgN9d0V3oANDUYWPHHN9l32UgaCjkASvUYWZpbmTfXd9d5QDCcnTUXWNhcnTfXd9dIGgoTfUBem3sARPHCl3kAkfEAXJldHVybstm5AH9xw19xiXENH07Cjwv6ALh"},{default:n(()=>[I]),_:1}),v,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIHVuYWN0aXZlLWNvbG9yPSIjN2Q3ZTgwIiDPFzE5ODlmYSLEP81BLWl0ZW0gdGFiLXRpdGxlPSJ0YWIiIDp2YWx1ZT0iMTHHMiAg6QCCICNpY29uyBcgIDxIb21lPjwvxQfILS/ILsdxL89y/wCI6QCIZG90PSJ0cnVl/wCI/wCI/wCI/wCI7AEQMP8Aif8Aif0AicwVPgrMMzxzY3JpcHTEJWltcG9ydCB7IMRfIH0gZnJvbSAnQGN1YmZlL+QAiXMtdnVlJzsKICBleMUrZGVmYXVsdCB7xXpjb21wb25lbnRzOslFCiAgfTsKPC/IZg=="},{default:n(()=>[w]),_:1}),A,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGFiYmFyIGJvdHRvbSBzYWZlLWFyZWEtaW5zZXQtxxdwbGFjZWhvbGRlcsQ5zTstaXRlbSB2LWZvcj0iKMQNLGluZGV4KSBpbiBMaXN0IiA6dGFiLXRpdGxlPSLEIS7FDCIgOmljb27HE8QLIj4gPC/PWsRwzBU+Cjwv6gDFPHNjcmlwdMQlaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSc7zBtIb21lLCBDYXRlZ29yeSwgRmluZMQQcnQsIE1lyThAY3ViZmUv5ACTcy3IRWV4xUVkZWZhdWx0IHvlAQhjb21wb25lbnRzOt9fxF8sxTRzZXR1cCgpx0LERG5zdOUBKiA9IFvHFSDJH8QB5QEwOiAndGFiJ8ZFxgHkAKI6IGgoxHkpyRjHaN9F0UXoALjfSd9JIGgo5AD330XfReUAjnJ030XfRSBoKE3sARbHCl3kAc3EAXJldHVybstQ5AGDxw19xiXENH07Cjwv6AJn"},{default:n(()=>[x]),_:1}),H])}}});export{N as default,B as excerpt,X as frontmatter};
