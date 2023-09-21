import{d as p,r as o,b as h,k as t,w as n,aq as e,e as a,l as s,o as r}from"./style_icon.js";const d={class:"markdown-body"},i=e(`<h1>Collapse 折叠面板</h1><h3>介绍</h3><p>将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Collapse</span>, <span class="hljs-title class_">CollapseItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Collapse</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CollapseItem</span>);
</code></pre><h3>基础用法</h3><p>通过<code class="">v-model</code>控制展开的面板列表，<code class="">activeNames</code>为数组格式</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeNames"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:title"),s(">")]),s(" {{title1}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      cubui是一套拥有轻量级的 Vue 组件库
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title2"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
      在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title3"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" activeNames = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"2"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" title = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"title1"),s(": "),a("span",{class:"hljs-string"},"'标题1'"),s(`,
        `),a("span",{class:"hljs-attr"},"title2"),s(": "),a("span",{class:"hljs-string"},"'标题2'"),s(`,
        `),a("span",{class:"hljs-attr"},"title3"),s(": "),a("span",{class:"hljs-string"},"'标题3'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"modelValue, currName, status"),s(`) => {
        `),a("span",{class:"hljs-comment"},"// currName: 当前操作的 collapse-item 的 name"),s(`
        `),a("span",{class:"hljs-comment"},"// status: true 打开 false 关闭"),s(`
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(modelValue, currName, status);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        onChange,
        activeNames,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(title)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"手风琴",-1),g=a("p",null,[s("通过"),a("code",{class:""},"accordion"),s("可以设置为手风琴模式，最多展开一个面板，此时"),a("code",{class:""},"activeName"),s("为字符串格式；"),a("code",{class:""},"value"),s("可以设置右侧的内容")],-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeName"'),s(),a("span",{class:"hljs-attr"},":accordion"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title1"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"subTitle"'),s(">")]),s(" 基于京东设计语言体系，构建场景 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title2"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(" 提高界⾯的模块化通用程度 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title3"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(`
      采用组合式 API Composition 语法重构，结构清晰，功能模块化
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" activeName = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" subTitle = "),a("span",{class:"hljs-string"},"'副标题'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" title = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"title1"),s(": "),a("span",{class:"hljs-string"},"'标题1'"),s(`,
        `),a("span",{class:"hljs-attr"},"title2"),s(": "),a("span",{class:"hljs-string"},"'标题2'"),s(`,
        `),a("span",{class:"hljs-attr"},"title3"),s(": "),a("span",{class:"hljs-string"},"'标题3'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        activeName,
        subTitle,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(title)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=a("h3",null,"自定义折叠图标",-1),v=a("p",null,"通过 icon 设置自定义图标",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeName"'),s(),a("span",{class:"hljs-attr"},":accordion"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title1"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Notice"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:value"),s(">")]),s(" 文本测试 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      cubui3.0重新思考其内在的一致性和可组合性
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title2"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},":icon"),s("="),a("span",{class:"hljs-string"},'"Follow"'),s(">")]),s(`
      提⾼产研输出对接的效率，降低输出工作量
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Notice"),s(", "),a("span",{class:"hljs-title class_"},"Follow"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" activeName = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" title = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"title1"),s(": "),a("span",{class:"hljs-string"},"'标题1'"),s(`,
        `),a("span",{class:"hljs-attr"},"title2"),s(": "),a("span",{class:"hljs-string"},"'标题2'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        activeName,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(title),
        `),a("span",{class:"hljs-title class_"},"Notice"),s(`,
        `),a("span",{class:"hljs-title class_"},"Follow"),s(`
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"设置固定内容（不折叠）",-1),I=a("p",null,"通过 slot:extra 设置内容",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"activeName"'),s(),a("span",{class:"hljs-attr"},":accordion"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title1"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:extra"),s(">")]),s("固定内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      cubui是一套拥有轻量级的 Vue 组件库
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"title2"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
      在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" activeName = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" title = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"title1"),s(": "),a("span",{class:"hljs-string"},"'标题1'"),s(`,
        `),a("span",{class:"hljs-attr"},"title2"),s(": "),a("span",{class:"hljs-string"},"'标题2'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        activeName,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(title)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=e('<h2>API</h2><h3>Collapse Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前展开面板的 <code class="">name</code></td><td>手风琴模式：string | number<br>非手风琴模式：(string | number)[]</td><td><code class="">-</code></td></tr><tr><td>accordion</td><td>是否开启手风琴模式</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>CollapseItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标识符，必填</td><td>string | number</td><td><code class="">-1</code></td></tr><tr><td>title</td><td>标题栏左侧内容，支持插槽传入（<code class="">props</code> 传入的优先级更高）</td><td>string</td><td><code class="">-</code></td></tr><tr><td>value</td><td>标题栏右侧内容，支持插槽传入（<code class="">props</code> 传入的优先级更高）</td><td>string</td><td><code class="">-</code></td></tr><tr><td>icon</td><td>标题栏左侧图标组件，等同于 <code class="">cubui-icon</code> 组件</td><td>-</td><td><code class="">-</code></td></tr><tr><td>label</td><td>标题栏描述信息</td><td>number | string</td><td><code class="">-</code></td></tr><tr><td>rotate</td><td>点击折叠和展开的旋转角度,在自定义图标模式下生效</td><td>string | number</td><td><code class="">180</code></td></tr><tr><td>disabled</td><td>标题栏是否禁用</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>border</td><td>是否显示边框</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>CollapseItem Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>标题栏左侧内容插槽</td></tr><tr><td>value</td><td>标题栏右侧内容插槽</td></tr><tr><td>extra</td><td>设置标题下固定内容（不折叠）</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板时触发</td><td><code class="">(modelValue, currName, status)</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-collapse-item-padding</td><td><em>13px 36px 13px 26px</em></td></tr><tr><td>--cub-collapse-item-color</td><td><em>#666666</em></td></tr><tr><td>--cub-collapse-item-disabled-color</td><td><em>#c8c9cc</em></td></tr><tr><td>--cub-collapse-item-icon-color</td><td><em>#666666</em></td></tr><tr><td>--cub-collapse-item-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-collapse-item-line-height</td><td><em>24px</em></td></tr><tr><td>--cub-collapse-item-sub-title-color</td><td><em>#666666</em></td></tr><tr><td>--cub-collapse-wrapper-content-padding</td><td><em>12px 26px</em></td></tr><tr><td>--cub-collapse-wrapper-empty-content-padding</td><td><em>0 26px</em></td></tr><tr><td>--cub-collapse-wrapper-content-color</td><td><em>#666666</em></td></tr><tr><td>--cub-collapse-wrapper-content-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-collapse-wrapper-content-line-height</td><td><em>1.5</em></td></tr><tr><td>--cub-collapse-wrapper-content-background-color</td><td><em>var(--cub-white)</em></td></tr></tbody></table>',13),Z={},L="",B=p({__name:"doc",setup(k,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(x,_)=>{const l=o("demo-block");return r(),h("div",d,[i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29sbGFwc2Ugdi1tb2RlbD0iYWN0aXZlTmFtZXMiIEBjaGFuZ2U9Im9uQ8UKIsQ6zzwtaXRlbSA6bmFtZT0iMcciICDJbSB2LXNsb3Q6dGl0bGU+IHt7xQkxfX0gPC/IJMg1Y3VidWnmmK/kuIDlpZfmi6XmnInovbvph4/nuqfnmoQgVnVlIOe7hOS7tuW6k8U1PC/xAI36AKXFez0ixQcyIugAtTLpALXlnKjkuqflk4HnmoTlip/og73jgIHkvZPpqozjgIHmmJPnlKjmgKflkozngbXmtLvmgKfnrYnlkITkuKrmlrnpnaLlgZrkuoblhajpnaLERY2H57qn77yB/wCs/wCsM+kArDMiIGRpc2FibGVkPthQzhc+CuwBaDxzY3JpcHTEJ2ltcG9ydCB7IHJl5gH2LCByZWYsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFL2RlZmF1bHQge+UAuXNldHVwKCnHDiAgY29uc3Qg6wJFID3EVShbMSwgMl0pxEjKJ+UA28UhxjEoyEYgxhsxOiAn5qCH6aKYMScszhsyyRsy0BszyRszJ8cafc956ALPID0gKOUC+FZhbHVlLCBjdXJy5AC2LCBzdGF0dXMpID0+6QDbICAvL8kiOiDlvZPliY3mk43kvZzkApruAb7EEuQBscw8xlQ6IHRydWUg5omT5byAIGZhbHNlIOWFs+mXrcks5AClb2xlLmxvZ/4An+gA1n3ICXJldHVybusAs+gA6uoBJOsBnMoVLi4u5gH2KOUBQynOWH0KxQs8L+gCPA=="},{default:n(()=>[j]),_:1}),m,g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29sbGFwc2Ugdi1tb2RlbD0iYWN0aXZlTmFtZSIgOmFjY29yZGlvbj0idHJ1ZSLEOM86LWl0ZW0gOnRpdGxlPSLFBzEiIDpuYW1lPSLECnZhbHVlPSJzdWJUxB0iPiDln7rkuo7kuqzkuJzorr7orqHor63oqIDkvZPns7vvvIzmnoTlu7rlnLrmma8gPC/Rb/8Ah+cAhzLpAIcyIj4g5o+Q6auY55WM4r6v55qE5qih5Z2X5YyW6YCa55So56iL5bqm32zbbDPJbDPnASUgIOmHh8Rau4TlkIjlvI8gQVBJIENvbXBvc2l0aW9uIOivreazlemHjeaehO+8jOe7k+aehOa4heaZsO+8jOWKn+iDvekAp8VU9wCfzhc+Cjwv6gHoPHNjcmlwdMQnaW1wb3J0IHsgcmXmAeUsIHJlZiwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUvZGVmYXVsdCB75QCCc2V0dXAoKccOICBjb25zdCDqAjQgPcRUKDEpxELKIegB/SA9ICflia/moIfpopjFZsok5QFIxUDGTyjIZCDGGzE6ICfGOTEnLM4bMskbMtAbM8kbMyfHGn3pAJ1yZXR1cm7pAM0g6wDJykfoALzKEi4uLuYBNCjFYynIWMZXfQrFCzwv6AF6"},{default:n(()=>[u]),_:1}),b,v,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29sbGFwc2Ugdi1tb2RlbD0iYWN0aXZlTmFtZSIgOmFjY29yZGlvbj0idHJ1ZSLEOM86LWl0ZW0gOnRpdGxlPSLFBzEiIDpuYW1lPSLECmljxD9Ob3RpY8hBICDpAIogdi1zbG90OnZhbHVlPiDmlofmnKzmtYvor5UgPC/IJsg3Y3VidWkzLjDph43mlrDmgJ3ogIPlhbblhoXlnKjnmoTkuIDoh7TmgKflkozlj6/nu4TlkIjmgKfFPzwv8QC4/wDQ5wDQMukA0MQK5gDQRm9sbG936QDQ5o+Q4r685Lqn56CU6L6T5Ye65a+55o6l55qE5pWI546H77yM6ZmN5L2Oxx63peS9nOmHj/wAms4XPgrsARA8c2NyaXB0xCdpbXBvcnQgeyByZeYBvSwgcmVmLCB0b1JlZnMgfSBmcm9tICd2dWUnO8wv5gGTLCDmAMvJKEBjdWJmZS/kAOdzLcg1ZXjFNWRlZmF1bHQge+UAt3NldHVwKCnHDiAgxDJ0IOoCQSA95ACJKDEpxELKIeUBVMUcxisoyEAgxhsxOiAn5qCH6aKYMScszhsyyRsyJ8cafclecmV0dXJu6QCOIOsAispHLi4u5gEYKMVRKcoa5wEPyRDmARfIZsZlfQrFCzwv6AF+"},{default:n(()=>[y]),_:1}),f,I,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29sbGFwc2Ugdi1tb2RlbD0iYWN0aXZlTmFtZSIgOmFjY29yZGlvbj0idHJ1ZSLEOM86LWl0ZW0gOnRpdGxlPSLFBzEiIDpuYW1lPSIxxzIgIMl7IHYtc2xvdDpleHRyYT7lm7rlrprlhoXlrrk8L8gkyDVjdWJ1aeaYr+S4gOWll+aLpeaciei9u+mHj+e6p+eahCBWdWUg57uE5Lu25bqTxTU8L/EAnf8AtecAtTLpALUy6QC15Zyo5Lqn5ZOB55qE5Yqf6IO944CB5L2T6aqM44CB5piT55So5oCn5ZKM54G15rS75oCn562J5ZCE5Liq5pa56Z2i5YGa5LqG5YWo6Z2ixEWNh+e6p++8gfwArM4XPgrsARg8c2NyaXB0xCdpbXBvcnQgeyByZeYBtCwgcmVmLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xS9kZWZhdWx0IHvlAIJzZXR1cCgpxw4gIGNvbnN0IOoCAyA9xFQoMSnEQsoh5QExxRzGKyjIQCDGGzE6ICfmoIfpopgxJyzOGzLJGzInxxp9yV5yZXR1cm7pAI4g6wCKykcuLi7mAOMoxVEpyEbGRX0KxQs8L+gBKQ=="},{default:n(()=>[C]),_:1}),w])}}});export{B as default,L as excerpt,Z as frontmatter};
