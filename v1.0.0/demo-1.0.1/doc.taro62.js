import{d as h,r as p,b as r,k as l,w as n,aq as c,e as a,o as i,l as s}from"./style_icon.js";const d={class:"markdown-body"},j=c(`<h1>SideNavbar 侧边栏导航</h1><h3>介绍</h3><p>用于内容选择和切换</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">SideNavbar</span>, <span class="hljs-title class_">SubSideNavbar</span>, <span class="hljs-title class_">SideNavbarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SideNavbar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SubSideNavbar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SideNavbarItem</span>);
</code></pre><h3>基础用法</h3><p>可以通过设置 <code class="">position</code> 来控制左右展示</p>`,7),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick1"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("右侧"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show1"'),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},'"{ width, height }"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"智能城市AI"'),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"人体识别1"'),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"9"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"人体检测1"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"11"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"细粒度人像分割1"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"人体识别2"'),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"13"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"人体检测2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"14"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"细粒度人像分割2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popup"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show1"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'80%'"),s(`,
        `),a("span",{class:"hljs-attr"},"height"),s(": "),a("span",{class:"hljs-string"},"'100%'"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleClick1"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        state.`),a("span",{class:"hljs-property"},"show1"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        handleClick1
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"嵌套（建议最多三层）",-1),o=a("p",null,"该组件在小程序环境下不支持异步加载数据，建议在获取到完整数据后再进行组件的渲染。",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick3"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"label"),s(">")]),s("显示"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"label"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"show3"'),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},'"{ width, height }"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar"),s(),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"show3"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"人脸识别"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"handleClick4('人脸识别')"`),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自然语言处理"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"图像理解"'),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":open"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"菜品识别"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"拍照购"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"智能城市AI"'),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"6"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"7"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"企业风险预警模型"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"水质量检测"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"人体识别"'),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"9"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"人体检测"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"11"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"细粒度人像分割"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自然语言处理"'),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"13"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"词法分析"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(),a("span",{class:"hljs-attr"},"ikey"),s("="),a("span",{class:"hljs-string"},'"14"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"句法分析"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sub-side-navbar"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-side-navbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-popup"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"show3"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'80%'"),s(`,
        `),a("span",{class:"hljs-attr"},"height"),s(": "),a("span",{class:"hljs-string"},"'100%'"),s(`,
        `),a("span",{class:"hljs-attr"},"navs"),s(": [] "),a("span",{class:"hljs-keyword"},"as"),s(` any[]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleClick3"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        state.`),a("span",{class:"hljs-property"},"show3"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleClick4"),s(" = ("),a("span",{class:"hljs-params"},"msg: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(msg);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        handleClick3,
        handleClick4
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=c('<h2>API</h2><h3>SideNavbar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>offset</td><td>导航缩进宽度</td><td>number | string</td><td><code class="">15</code></td></tr></tbody></table><h3>SubSideNavbar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>导航标题</td><td>string</td><td>``</td></tr><tr><td>ikey</td><td>导航唯一标识</td><td>number | string</td><td>``</td></tr><tr><td>open</td><td>导航是否默认展开</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>SideNavbarItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>导航标题</td><td>string</td><td><code class="">15</code></td></tr><tr><td>ikey</td><td>导航唯一标识</td><td>number | string</td><td>``</td></tr></tbody></table><h3>SubSideNavbar Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>title-click</td><td>导航点击</td><td>-</td></tr></tbody></table><h3>SideNavbarItem Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>导航点击</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--cub-sidenavbar-content-bg-color</td><td><em>var(--cub-white)</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-border-color</td><td><em>#f6f6f6</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-bg-color</td><td><em>#f6f6f6</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-font-size</td><td><em>var(--cub-font-size-large)</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-radius</td><td><em>0</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-border</td><td><em>0</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-width</td><td><em>100%</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-text-line-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-sub-title-text-color</td><td><em>var(--cub-title-color)</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-item-title-color</td><td><em>#333</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-item-title-bg-color</td><td><em>var(--cub-white)</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-item-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-item-line-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--cub-sidenavbar-item-font-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table>',15),f={},A="",I=h({__name:"doc.taro",setup(v,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(k,y)=>{const t=p("demo-block");return i(),r("div",d,[j,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBAY2xpY2s9ImhhbmRsZUPEDTEixCMgIDxzcGFuPjxsYWJlbD7lj7Pkvqc8L8YOPC/FHMRKL8hLyVhwb3B1cCBwb3NpdGlvbj0icmlnaHQiIHYtbW9kZWw6dmlzaWJsZT0ic2hvdzEiIDpzdHnED3sgd2lkdGgsIGhlxDEgfegAh8RUc2lkZS1uYXZiYXLGFsgYzhwgdGl0xEzmmbrog73ln47luIJBSSIgaWtleT0iNsdS3z4i5Lq65L2T6K+G5YirMcg9Ocs98gCVLWl0ZW3HKjEwIs5K5qOA5rWLMSI+5gEt0DffWMpYMclY57uG57KS5bqm5Lq65YOP5YiG5Ymy32HFX8Yg9gFR/wEV6wEVMugBFTEy/wEW6wC+M/UBFjL/ALXfWD0iMTT+ARbfYf8BFt0d0VjqAxHlAwQ+Cjwv6gN2PHNjcmlwdCBsYW5nPSJ0c+UBOmltcG9ydCB7IHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xSpkZWZhdWx0IHvlAIJzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3JVCjIHyAg5QN0OiBmYWxzZSzJFuUDeTogJzgwJSfKFuYDiDogJzEwMCUnxxd9KTsKzW3sBDkgPSAoKSA9PukAkCDmAIwuxXcgPSB0cnVl5ADNxUrJSXJldHVybss1Li4u5gEGKMU/KesAlMtuykjFBwrFCzwv5gFnPgo="},{default:n(()=>[b]),_:1}),g,o,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBAY2xpY2s9ImhhbmRsZUPEDTMixCMgIDxzcGFuPjxsYWJlbD7mmL7npLo8L8YOPC/FHMRKL8hLyVhwb3B1cCBwb3NpdGlvbj0icmlnaHQiIHYtbW9kZWw6dmlzaWJsZT0ic2hvdzMiIDpzdHnED3sgd2lkdGgsIGhlxDEgfegAh8RUc2lkZS1uYXZiYXIgOsQ5yD/GJNImLWl0ZW0gaWtleT0iMSIgdGl0xGTkurrohLjor4bliKsi9AD8NCgnzCQnKSI+5gDi0FvfeMV4Msl46Ieq54S26K+t6KiA5aSE55CG31jHWM4hyE7lm77lg4/nkIbop6Mix2zkAUlvcGVuPSJmYWxzZekBGP4AojTqAKKPnOWTgecBGv8AnN5UNclU5ouN54Wn6LSt31HnAkXvAO7/AQrGYpm66IO95Z+O5biCQUnoAQw2/wD+6ACqN+oCGLyB5Lia6aOO6Zmp6aKE6K2m5qih5Z6L/wC532A4yWDmsLTotKjph4/mo4Dmtd9X/wD15ALF5L2T6ALFxms56wDz/wMNMOwDDuS9k/8Ak99XyVfqA2Xnu4bnspLluqbkurrlg4/liIblibLfYP8CBd8d0xz7A3roALIy/wIn6QDbM+oDJq+N5rOV5YiG5p6Q/wDS31Ux6gN75Y+l31X/AyrGHdE56gWf5QWSPgo8L+oGBDxzY3JpcHQgbGFuZz0idHPlAQxpbXBvcnQgeyByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUqZGVmYXVsdCB75QCCc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB8gIOUFwzog5QSyLMkW5QYHOiAnODAlJ8oW5gYWOiAnMTDNGG5hdnM6IFtdIGFzIGFueVtdxxp9KTsK7QCI7AbiID0gKCkgPT7pAKsg5gCnLuUAkiA9IHRydWXkAOjFStpJNMRJbXNnOiBzdHJpbmfPVMQwb2xlLmxvZ8QmKdJScmV0dXJuyzMuLi7mAXMo5QCRKesBAcp3M9UWNMpexQcKxQs8L+YB6j4K"},{default:n(()=>[m]),_:1}),u])}}});export{I as default,A as excerpt,f as frontmatter};
