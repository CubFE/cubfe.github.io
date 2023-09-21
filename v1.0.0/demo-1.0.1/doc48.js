import{d as p,r as d,b as r,k as t,w as n,aq as c,e as a,o as h,l as s}from"./style_icon.js";const o={class:"markdown-body"},j=c(`<h1>Noticebar 通告栏</h1><h3>介绍</h3><p>用于循环播放展示一组消息通知。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Noticebar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Noticebar</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(`
    `),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"cubui 是移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"'),s(`
    `),a("span",{class:"hljs-attr"},":background"),s("="),a("span",{class:"hljs-string"},'"`rgba(251, 248, 220, 1)`"'),s(`
    `),a("span",{class:"hljs-attr"},":color"),s("="),a("span",{class:"hljs-string"},'"`#D9500B`"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g=a("h3",null,"滚动播放",-1),m=a("p",null,"通知栏的内容长度溢出时会自动开启滚动播放，可通过 scrollable 属性可以控制该行为",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"华为畅享9新品即将上市"'),s(),a("span",{class:"hljs-attr"},":scrollable"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(`
    `),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"cubui 是移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"'),s(`
    `),a("span",{class:"hljs-attr"},":scrollable"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u=a("h3",null,"通告栏模式--关闭模式",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(),a("span",{class:"hljs-attr"},":close-mode"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":background"),s("="),a("span",{class:"hljs-string"},'"`rgba(251, 248, 220, 1)`"'),s(),a("span",{class:"hljs-attr"},":color"),s("="),a("span",{class:"hljs-string"},'"`#D9500B`"'),s(">")]),s(`
    cubui 是移动端组件库，使用 Vue 语言来编写可以在
    H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(),a("span",{class:"hljs-attr"},":close-mode"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    cubui 是移动端组件库，使用 Vue 语言来编写可以在
    H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y=a("h3",null,"通告栏模式--链接模式",-1),W=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(),a("span",{class:"hljs-attr"},":scrollable"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:left-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"'),s(`
        `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width: 20px; height: 20px"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"a"),s(),a("span",{class:"hljs-attr"},"href"),s("="),a("span",{class:"hljs-string"},'"https://www.kakusoft.com"'),s(">")]),s("京东商城"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"a"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x=a("h3",null,"多行展示",-1),v=a("p",null,"文字较长时，可以通过设置 wrapable 属性来开启多行展示。默认为不滚动，可以通过设置 scrollable 控制为滚动。",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(`
    `),a("span",{class:"hljs-attr"},"text"),s("="),a("span",{class:"hljs-string"},'"cubui 是移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"'),s(`
    `),a("span",{class:"hljs-attr"},"wrapable"),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=a("h3",null,"纵向滚动",-1),Y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"horseLamp1"'),s(),a("span",{class:"hljs-attr"},":speed"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},":standTime"),s("="),a("span",{class:"hljs-string"},'"1000"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"go"'),s(),a("span",{class:"hljs-attr"},":close-mode"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" horseLamp1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'Noticebar 公告栏'"),s(", "),a("span",{class:"hljs-string"},"'Cascader 级联选择'"),s(", "),a("span",{class:"hljs-string"},"'DatePicker 日期选择器'"),s(", "),a("span",{class:"hljs-string"},"'CheckBox 复选按钮'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"go"),s(" = ("),a("span",{class:"hljs-params"},"item"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` { horseLamp1, go };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"复杂滚动动画",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(`
    `),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
    `),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"horseLamp2"'),s(`
    `),a("span",{class:"hljs-attr"},":speed"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
    `),a("span",{class:"hljs-attr"},":standTime"),s("="),a("span",{class:"hljs-string"},'"2000"'),s(`
    `),a("span",{class:"hljs-attr"},":complexAm"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" horseLamp2 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'Noticebar 公告栏'"),s(", "),a("span",{class:"hljs-string"},"'Cascader 级联选择'"),s(", "),a("span",{class:"hljs-string"},"'DatePicker 日期选择器'"),s(", "),a("span",{class:"hljs-string"},"'CheckBox 复选按钮'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { horseLamp2 };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"自定义滚动内容",-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":speed"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},":standTime"),s("="),a("span",{class:"hljs-string"},'"1000"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"[]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"custom-item"'),s(),a("span",{class:"hljs-attr"},":data-index"),s("="),a("span",{class:"hljs-string"},'"index"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in horseLamp3"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(">")]),s("{{item}}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" horseLamp3 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'Noticebar 公告栏'"),s(", "),a("span",{class:"hljs-string"},"'Cascader 级联选择'"),s(", "),a("span",{class:"hljs-string"},"'DatePicker 日期选择器'"),s(", "),a("span",{class:"hljs-string"},"'CheckBox 复选按钮'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { horseLamp3 };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),D=a("h3",null,"纵向自定义右侧图标",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-noticebar"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(),a("span",{class:"hljs-attr"},":list"),s("="),a("span",{class:"hljs-string"},'"horseLamp1"'),s(),a("span",{class:"hljs-attr"},":speed"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},":standTime"),s("="),a("span",{class:"hljs-string"},'"1000"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Good"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-noticebar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Good"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Good"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"},"props"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" horseLamp1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'Noticebar 公告栏'"),s(", "),a("span",{class:"hljs-string"},"'Cascader 级联选择'"),s(", "),a("span",{class:"hljs-string"},"'DatePicker 日期选择器'"),s(", "),a("span",{class:"hljs-string"},"'CheckBox 复选按钮'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { horseLamp1 };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),P=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>滚动的方向，可选 <code class="">across</code>、<code class="">vertical</code></td><td>string</td><td><code class="">across</code></td></tr><tr><td>text</td><td>提示的信息</td><td>string</td><td>-</td></tr><tr><td>close-mode</td><td>是否启用关闭模式</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>left-icon</td><td>是否展示左侧图标, 滚动方向为 <code class="">across</code> 生效</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>color</td><td>导航栏的文字颜色</td><td>string</td><td>-</td></tr><tr><td>background</td><td>导航栏的背景颜色</td><td>string</td><td>-</td></tr><tr><td>delay</td><td>延时多少秒</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>scrollable</td><td>是否可以滚动</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>speed</td><td>滚动速率 (px/s)</td><td>number</td><td><code class="">50</code></td></tr><tr><td>wrapable</td><td>是否开启文本换行，<code class="">scrollable</code> 会设置为 <code class="">false</code></td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Props（direction=vertical）</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>list</td><td>纵向滚动数据列表</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>speed</td><td>滚动的速度</td><td>number</td><td><code class="">50</code></td></tr><tr><td>stand-time</td><td>停留时间(毫秒)</td><td>number</td><td><code class="">1000</code></td></tr><tr><td>complex-am</td><td>稍复杂的动画，耗能会高</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>height</td><td>每一个滚动列的高度(px)，注意：在使用 <code class="">slot</code> 插槽定义滚动单元时，按照实际高度修改此值</td><td>number</td><td><code class="">40</code></td></tr><tr><td>close-mode</td><td>是否启用右侧关闭图标，可以通过 <code class="">slot[name=right-icon]</code> 自定义图标</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>通知文本的内容</td></tr><tr><td>right-icon</td><td>自定义右侧图标</td></tr><tr><td>left-icon</td><td>自定义左侧图标, 滚动方向为 <code class="">across</code> 生效</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>外层点击事件回调</td><td>event: Event</td></tr><tr><td>close</td><td>关闭通知栏时触发</td><td>event: Event</td></tr><tr><td>across-end</td><td>横向滚动结束时触发</td><td>event: Event</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-noticebar-background</td><td><em>rgba(251, 248, 220, 1)</em></td></tr><tr><td>--cub-noticebar-color</td><td><em>#d9500b</em></td></tr><tr><td>--cub-noticebar-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-noticebar-across-height</td><td><em>40px</em></td></tr><tr><td>--cub-noticebar-across-line-height</td><td><em>24px</em></td></tr><tr><td>--cub-noticebar-box-padding</td><td><em>0 16px</em></td></tr><tr><td>--cub-noticebar-wrapable-padding</td><td><em>16px</em></td></tr><tr><td>--cub-noticebar-lefticon-margin</td><td><em>0px 10px</em></td></tr><tr><td>--cub-noticebar-righticon-margin</td><td><em>0px 10px</em></td></tr></tbody></table>',13),L={},X="",O=p({__name:"doc",setup(N,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(H,V)=>{const l=d("demo-block");return h(),r("div",o,[j,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyCiAgICB0ZXh0PSJjdWJ1aSDmmK/np7vliqjnq6/nu4Tku7blupPvvIzkvb/nlKggVnVlIOivreiogOadpee8luWGmeWPr+S7peWcqCBINe+8jOWwj+eoi+W6j+W5s+WPsOS4iueahOW6lOeUqMQeuK7liqnnoJTlj5HkurrlkZjmj5DljYflvIDlj5HmlYjnjofvvIzmlLnlloTGFeS9k+mqjOOAgiLlAK06YmFja2dyb3VuZD0iYHJnYmEoMjUxLCAyNDgsIDIyMCwgMSlgxytjb2xvcj0iYCNEOTUwMELFFz48L+0BAj4KPC/qASA="},{default:n(()=>[i]),_:1}),g,m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyIHRleHQ9IuWNjuS4uueVheS6qznmlrDlk4HljbPlsIbkuIrluIIiIDpzY3JvbGxhYmxlPSJ0cnVlIj48L81KPgrRXQogICDHYWN1YnVpIOaYr+enu+WKqOerr+e7hOS7tuW6k++8jOS9v+eUqCBWdWUg6K+t6KiA5p2l57yW5YaZ5Y+v5Lul5ZyoIEg177yM5bCP56iL5bqP5bmz5Y+w5LiK55qE5bqU55SoxB64ruWKqeeglOWPkeS6uuWRmOaPkOWNh+W8gOWPkeaViOeOh++8jOaUueWWhMYV5L2T6aqM44CCIuUAre0A52ZhbHNlxBjyAOs8L+oBUw=="},{default:n(()=>[b]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyIDpjbG9zZS1tb2RlPSJ0cnVlIiA6YmFja2dyb3VuZD0iYHJnYmEoMjUxLCAyNDgsIDIyMCwgMSlgIiA6Y29sb3I9ImAjRDk1MDBCYCLEXyAgY3VidWkg5piv56e75Yqo56uv57uE5Lu25bqT77yM5L2/55SoIFZ1ZSDor63oqIDmnaXnvJblhpnlj6/ku6XlnKjFRkg177yM5bCP56iL5bqP5bmz5Y+w5LiK55qE5bqU55SoxB64ruWKqeeglOWPkeS6uuWRmOaPkOWNh+W8gOWPkeaViOeOh++8jOaUueWWhMYV5L2T6aqM44CC5AEJL+0BCj4K/wEd5QEd/wDj/wDj/wDj/wDj/wDj/wDj5QDjPC/qAgs="},{default:n(()=>[I]),_:1}),y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyIDpzY3JvbGxhYmxlPSJmYWxzZSLEJiAgyTUgdi1zbG90OmxlZnQtaWNvbsYgICA8aW1nxwsgIHNyYz0iaHR0cHM6Ly9pbWcxMy4zNjBidXlpbWcuY29tL2ltYWdldG9vbHMvamZzL3QxLzcyMDgyLzIvMzAwNi8xMTk3LzVkMTMwYzhkRTFjNzFiY2Q2L2U0OGEzYjYwODA0Yzk3NzUucG5nIsp1dHnkALd3aWR0aDogMjBweDsgaGVpZ2h0xg7IKi/nANMv7AEJICA8YSBocmVm6gC4d3d3Lmtha3Vzb2Z05AC1Ij7kuqzkuJzllYbln448L2HEODwv7QFCPgrMVw=="},{default:n(()=>[W]),_:1}),x,v,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyCiAgICB0ZXh0PSJjdWJ1aSDmmK/np7vliqjnq6/nu4Tku7blupPvvIzkvb/nlKggVnVlIOivreiogOadpee8luWGmeWPr+S7peWcqCBINe+8jOWwj+eoi+W6j+W5s+WPsOS4iueahOW6lOeUqMQeuK7liqnnoJTlj5HkurrlkZjmj5DljYflvIDlj5HmlYjnjofvvIzmlLnlloTGFeS9k+mqjOOAgiLlAK13cmFwYWJsZQogID48L+0AzT4KPC/qAOs="},{default:n(()=>[k]),_:1}),w,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyIGRpcmVjdGlvbj0idmVydGljYWwiIDpsaXN0PSJob3JzZUxhbXAxIiA6c3BlZWQ9IjEwxAx0YW5kVGltZcQQMDAiIEBjbGljaz0iZ28iIDpjbG9zZS1tb2RlPSJ0cnVlIsV3L814Pgo8L+oAlgo8c2NyaXB0xClpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHsKICAgIHNldHVwKHByb3BzKccTICBjb25zdCDqAMIgPcRRKFsnTukA++WFrOWRiuagjycsICdDYXNjYWRlciDnuqfogZTpgInmi6nEGURhdGVQaWNrZXIg5pel5pyfxhvlmajFN2hlY2tCb3gg5aSNxBmMiemSriddKeQAreoAh2dvID0gKGl0ZW0pID0+6QCkxh9vbGUubG9nxh/IOH3ICXJldHVybiB76wDLLMRQxyF9CsUsPC/oAUE="},{default:n(()=>[Y]),_:1}),A,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyCiAgICBkaXJlY3Rpb249InZlcnRpY2FsIsUZOmxpc3Q9ImhvcnNlTGFtcDLHF3NwZWVkPSIxMMgQdGFuZFRpbWU9IjIwMMgWY29tcGxleEFtPSJ0cnVlxBY+PC/Nfz4KPC/qAJ0KPHNjcmlwdOQAp2ltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQge8Vwc2V0dXAocHJvcHMpxxMgIGNvbnN0IOoAwSA9xFEoWydO6ACDIOWFrOWRiuagjycsICdDYXNjYWRlciDnuqfogZTpgInmi6nEGURhdGVQaWNrZXIg5pel5pyfxhvlmajFN2hlY2tCb3gg5aSNxBmMiemSriddKeQArcQBcmV0dXJuIHvsAIp9xh19CiDECzwv6AD8"},{default:n(()=>[C]),_:1}),f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyIGRpcmVjdGlvbj0idmVydGljYWwiIDpoZWlnaHQ9IjUwIiA6c3BlZWQ9IjHFDHRhbmRUaW1lxBAwxBJsaXN0PSJbXSLEXSAgPGRpdiBjbGFzcz0iY3VzdG9tLWl0ZW0iIDpkYXRhLWluZGV4PSLFByIgdi1mb3I9IijEIizFFCkgaW4gaG9yc2VMYW1wMyIgOmtlecgwPnt7xCp9fTwvZGl2xHA8L+0Azj4KPC/qAOwKPHNjcmlwdMQpaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QDJc2V0dXAocHJvcHMpxxMgIGNvbnN06wCgID3EUShbJ07pAVHlhazlkYrmoI8nLCAnQ2FzY2FkZXIg57qn6IGU6YCJ5oupxBlEYXRlUGlja2VyIOaXpeacn8Yb5ZmoxTdoZWNrQm94IOWkjcQZjInpkq4nXSnkAK3EAXJldHVybiB77ACKfcYdfQogxAs8L+gA/A=="},{default:n(()=>[_]),_:1}),D,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItbm90aWNlYmFyIGRpcmVjdGlvbj0idmVydGljYWwiIDpsaXN0PSJob3JzZUxhbXAxIiA6c3BlZWQ9IjEwxAx0YW5kVGltZcQQMDAixFggIMlnICNyaWdodC1pY29uxhsgIDxHb29kIC/HKi/tAJIv7QCTPgrMHwo8c2NyaXB0xClpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdxWnIHkBjdWJmZS/kAIpzLcgrZXjFK2RlZmF1bHQge+UAlGNvbXBvbmVudHM6yUUsxRpzZXR1cChwcm9wcynHLcQvbnN0IOoBIiA95ACWKFsnTukBW+WFrOWRiuagjycsICdDYXNjYWRlciDnuqfogZTpgInmi6nEGURhdGVQaWNrZXIg5pel5pyfxhvlmajFN2hlY2tCb3gg5aSNxBmMiemSriddKeQAx8QBcmV0dXJuIHvsAIp9xh19CiDECzwv6AFB"},{default:n(()=>[B]),_:1}),P])}}});export{O as default,X as excerpt,L as frontmatter};
