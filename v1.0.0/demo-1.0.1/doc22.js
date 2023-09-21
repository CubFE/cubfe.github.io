import{d as p,r,b as o,k as c,w as t,aq as n,o as h,e as a,l as s}from"./style_icon.js";const d={class:"markdown-body"},i=n(`<h1>ConfigProvider 全局配置</h1><h3>介绍</h3><p>用于全局配置 cubui 组件，提供暗黑模式，动态主题。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ConfigProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ConfigProvider</span>);
</code></pre><h3>深色模式</h3><p>将 ConfigProvider 组件的 <code class="">theme</code> 属性设置为 <code class="">dark</code>，可以开启深色模式。</p><p>深色模式会全局生效，使页面上的所有 cubui 组件变为深色风格。</p>`,8),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-config-provider"),s(),a("span",{class:"hljs-attr"},":theme"),s("="),a("span",{class:"hljs-string"},'"theme"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"切换暗黑"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:link"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switchChecked"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"switchChange"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"我是标题"'),s(),a("span",{class:"hljs-attr"},"sub-title"),s("="),a("span",{class:"hljs-string"},'"副标题描述"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'"描述文字"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" switchChecked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" theme = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"switchChange"),s(" = ("),a("span",{class:"hljs-params"},"v: boolean"),s(`) => {
        theme.`),a("span",{class:"hljs-property"},"value"),s(" = v ? "),a("span",{class:"hljs-string"},"'dark'"),s(" : "),a("span",{class:"hljs-string"},"''"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { switchChecked, switchChange, theme };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=n(`<h3>主题定制</h3><p><code class="">cubui</code> 组件可以通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS 变量</a> 来组织样式，通过覆盖这些 <code class="">CSS</code> 变量，可以实现定制主题、动态切换主题等功能。</p><h4>示例</h4><p>这些变量的默认值被定义在 <code class="">:root</code> 节点上，<code class="">HTML</code> 里的所有子节点都可以访问到这些变量：</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--cub-primary-color</span>: <span class="hljs-number">#fa2c19</span>;
  <span class="hljs-attr">--cub-primary-color-end</span>: <span class="hljs-number">#fa6419</span>;
}
</code></pre><h4>通过 CSS 覆盖</h4><p>你可以直接在代码中覆盖这些 <code class="">CSS</code> 变量，<code class="">Button</code> 组件的样式会随之发生改变：</p><pre><code class="language-css"><span class="hljs-comment">/* 添加这段样式后，Primary Button 会变成绿色 */</span>
<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--cub-button-primary-background-color</span>: green;
}
</code></pre><h4>通过 ConfigProvider 覆盖</h4><p><code class="">ConfigProvider</code> 组件提供了覆盖 <code class="">CSS</code> 变量的能力，你需要在根节点包裹一个 <code class="">ConfigProvider</code> 组件，并通过 <code class="">theme-vars</code> 属性来配置一些主题变量</p>`,10),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-config-provider"),s(),a("span",{class:"hljs-attr"},":theme-vars"),s("="),a("span",{class:"hljs-string"},'"themeVars"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"滑块"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"hidden-tag"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"range"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" range = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"30"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" themeVars = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#008000'"),s(`,
        `),a("span",{class:"hljs-attr"},"primaryColorEnd"),s(": "),a("span",{class:"hljs-string"},"'#008000'"),s(`
      });
      `),a("span",{class:"hljs-comment"},"// 当然，你也可以选择使用组件变量去替换，如果同时设置了基础变量和组件变量，组件变量会覆盖基础变量。"),s(`
      `),a("span",{class:"hljs-comment"},"//  const themeVars = {"),s(`
      `),a("span",{class:"hljs-comment"},"//   rangeBgColor: 'rgba(25,137,250,0.15)',"),s(`
      `),a("span",{class:"hljs-comment"},"//   rangeBarBgColor: '#0289fa',"),s(`
      `),a("span",{class:"hljs-comment"},"//   rangeBarBtnBorder: '1px solid #0289fa'"),s(`
      `),a("span",{class:"hljs-comment"},"// };"),s(`

      `),a("span",{class:"hljs-keyword"},"return"),s(` { range, themeVars };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=n(`<h3>主题变量</h3><h4>基础变量</h4><p><code class="">cubui</code> 中的 <code class="">CSS</code> 变量分为 <strong>基础变量</strong> 和 <strong>组件变量</strong>。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件。</p><h4>修改变量</h4><ul><li><p>基础变量中的主色调需要您使用十六进制色值来进行覆盖，请勿使用类似于 <code class="">red</code>,<code class="">green</code> 来进行覆盖</p></li><li><p>基础变量和组件变量都能通过 <code class="">:root 选择器</code>和 <code class="">ConfigProvider 组件</code>，推荐您使用 <code class="">ConfigProvider 组件</code> 来修改主色调，因为部分组件的变量激活色的渐变色使用的是 <code class="">rgba</code>，使用 <code class="">:root 选择器</code> 修改主色调会有部分组件变量不生效：</p></li></ul><pre><code class="language-less"><span class="hljs-comment">// 如果您仍旧选择使用:root 选择器来进行修改主色调，您还需要修改以下3个组件变量色  primaryColor为设置的主色调</span>

<span class="hljs-attr">--cub-address-region-tab-line</span>: linear-gradient(90deg, primaryColor 0%, rgba(primaryColor, 0.15) 100%);
<span class="hljs-attr">--cub-tabs-horizontal-tab-line-color</span>: linear-gradient(180deg, primaryColor 0%, rgba(primaryColor, 0.15) 100%);
<span class="hljs-attr">--cub-tabs-vertical-tab-line-color</span>: linear-gradient(180deg, primaryColor 0%, rgba(primaryColor, 0.15) 100%);
</code></pre><h4>变量列表</h4><p>下面是所有的基础变量：</p><pre><code class="language-less"><span class="hljs-comment">// 主色调</span>
<span class="hljs-attr">--cub-primary-color</span>: #fa2c19;
<span class="hljs-attr">--cub-primary-color-end</span>: #fa6419;
<span class="hljs-comment">// 辅助色</span>
<span class="hljs-attr">--cub-help-color</span>: #f5f5f5;
<span class="hljs-comment">// 标题常规文字</span>
<span class="hljs-attr">--cub-title-color</span>: #1a1a1a;
<span class="hljs-comment">// 副标题</span>
<span class="hljs-attr">--cub-title-color2</span>: #666666;
<span class="hljs-comment">// 次内容</span>
<span class="hljs-attr">--cub-text-color</span>: #808080;
<span class="hljs-comment">// 特殊禁用色</span>
<span class="hljs-attr">--cub-disable-color</span>: #cccccc;
<span class="hljs-attr">--cub-white</span>: #fff;
<span class="hljs-attr">--cub-black</span>: #000;
<span class="hljs-attr">--cub-required-color</span>: #fa2c19;
<span class="hljs-comment">// 暗黑模式下颜色</span>
<span class="hljs-attr">--cub-dark-background</span>: #131313;
<span class="hljs-attr">--cub-dark-background2</span>: #1b1b1b;
<span class="hljs-attr">--cub-cub-dark-background3</span>: #141414;
<span class="hljs-attr">--cub-cub-dark-background4</span>: #323233;
<span class="hljs-attr">--cub-dark-background5</span>: #646566;
<span class="hljs-attr">--cub-dark-background6</span>: #380e08;
<span class="hljs-attr">--cub-dark-background7</span>: #707070;
<span class="hljs-attr">--cub-dark-color</span>: var(<span class="hljs-attr">--cub-white</span>);
<span class="hljs-attr">--cub-dark-color2</span>: #f2270c;
<span class="hljs-attr">--cub-dark-color3</span>: rgba(232, 230, 227, 0.8);
<span class="hljs-attr">--cub-dark-color-gray</span>: var(<span class="hljs-attr">--cub-text-color</span>);
<span class="hljs-attr">--cub-dark-calendar-choose-color</span>: rgba(227, 227, 227, 0.2);
<span class="hljs-comment">// 字体</span>
<span class="hljs-attr">--cub-font-family</span>: PingFang SC, Microsoft YaHei, Helvetica, Hiragino Sans GB, SimSun, sans-serif;

<span class="hljs-comment">// Font</span>
<span class="hljs-attr">--cub-font-size-0</span>: 10px;
<span class="hljs-attr">--cub-font-size-1</span>: 12px;
<span class="hljs-attr">--cub-font-size-2</span>: 14px;
<span class="hljs-attr">--cub-font-size-3</span>: 16px;
<span class="hljs-attr">--cub-font-size-4</span>: 18px;
<span class="hljs-attr">--cub-font-weight-bold</span>: 400;
<span class="hljs-attr">--cub-font-size-small</span>: var(<span class="hljs-attr">--cub-font-size-1</span>);
<span class="hljs-attr">--cub-font-size-base</span>: var(<span class="hljs-attr">--cub-font-size-2</span>);
<span class="hljs-attr">--cub-font-size-large</span>: var(<span class="hljs-attr">--cub-font-size-3</span>);
<span class="hljs-attr">--cub-line-height-base</span>: 1.5;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>theme</td><td>主题风格，设置为 <code class="">dark</code> 来开启深色模式，全局生效</td><td>string</td><td>-</td></tr><tr><td>theme-vars</td><td>自定义主题变量</td><td>object</td><td>-</td></tr><tr><td>tag</td><td>根节点对应的 HTML 标签名</td><td>string</td><td><code class="">div</code></td></tr></tbody></table>`,12),k={},v="",w=p({__name:"doc",setup(b,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(f,y)=>{const l=r("demo-block");return h(),o("div",d,[i,c(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29uZmlnLXByb3ZpZGVyIDp0aGVtZT0ixQcixCfIKWVsbCB0aXRsZT0i5YiH5o2i5pqX6buRxyQgIMlcIHYtc2xvdDpsaW5ryB3HRXN3aXRjaCB2LW1vZGVsPSLGEENoZWNrZWQiIEBjaGFuZ2XKGMQOIiAvyWMvyGTGEjwv6ACa9wCp5oiR5piv5qCH6aKYIiBzdWItxxnliccW5o+P6L+wIiBkZXNjPSLGDuaWh+WtlyI+zl/HDu4BMD4K7ACUPHNjcmlwdCBsYW5nPSJ0c+UBHGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQge+UAx3NldHVwKCnHDiAgY29uc3Qg7QEsID3ETyhmYWxzZSnEScoo5QG6xyAnJ88dyEXkAVkgPSAodjogYm9vbGVhbikgPT7JciDGRi52YWx1xCh2ID8gJ2RhcmsnIDogJ+UAusQBfTsKxwpyZXR1cm4ge+4ApizNcCzGVcQ2xT0KxUE8L+YBNT4K"},{default:t(()=>[j]),_:1}),g,c(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29uZmlnLXByb3ZpZGVyIDp0aGVtZS12YXJzPSLFDFZhcnMixDDHMmZvcm3GD8sRLWl0ZW0gbGFiZWw9Iua7keWdl8c0ySdyYW5nZSBoaWRkZW4tdGFnIHYtbW9kxDDFGiI+PC/JJ8lgxRPJYcYXyhXEEMYO7wDHPgo8L+oA6zxzY3JpcHQgbGFuZz0idOYAzmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSdkZWZhdWx0IHvlAIJzZXR1cCgpxw4gIGNvbnN0IOYA4T3EUSgzMCnEPsod6QFLxSHGbSjIQCAgcHJpbWFyeUNvbG9yOiAnIzAwODAwMCcs1SFFbmTLJMcjfclxLy8g5b2T54S277yM5L2g5Lmf5Y+v5Lul6YCJ5oup5L2/55So57uE5Lu25Y+Y6YeP5Y675pu/5o2i77yM5aaC5p6c5ZCM5pe26K6+572u5LqG5Z+656GAxy2SjMw877zND+S8muimhueblswz44CC6gCa8wEP6AEGxB7mAUVCZ+gBCXJnYmEoMjUsMTM3LDI1MCwwLjE1KekBF8syYXLKNSMwMjg5ZmHXJ3RuQm9yZGXEKTFweCBzb2xpZCDIM8oyfTsKxw1yZXR1cm7kAirEQyzrALx95gFzfQogxAs8L+YCaD4K"},{default:t(()=>[m]),_:1}),u])}}});export{w as default,v as excerpt,k as frontmatter};
