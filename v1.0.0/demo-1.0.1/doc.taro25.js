import{d,r as p,b as h,k as e,w as l,aq as n,e as a,o,l as s}from"./style_icon.js";const r={class:"markdown-body"},i=n(`<h1>viewider 分割线</h1><h3>介绍</h3><p>用于将内容分隔为多个区域。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { viewider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(viewider);
</code></pre><h3>基础用法</h3><p>默认渲染一条水平分割线。</p>`,7),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),j=a("h3",null,"展示文本",-1),g=a("p",null,"通过插槽可以在分割线中间插入内容。",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-viewider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v=a("h3",null,"内容位置",-1),b=a("p",null,"通过 content-position 指定内容所在位置。",-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(),a("span",{class:"hljs-attr"},"content-position"),s("="),a("span",{class:"hljs-string"},'"left"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-viewider"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(),a("span",{class:"hljs-attr"},"content-position"),s("="),a("span",{class:"hljs-string"},'"right"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-viewider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=a("h3",null,"虚线",-1),f=a("p",null,"添加 dashed 属性使分割线渲染为虚线。",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(),a("span",{class:"hljs-attr"},"dashed"),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-viewider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y=a("h3",null,"自定义样式",-1),I=a("p",null,"可以直接通过 style 属性设置分割线的样式。",-1),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"`),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-viewider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k=a("h3",null,"垂直分割线",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"text"),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"text"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"text"),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"text"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-viewider"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"text"),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"text"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R=n('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dashed</td><td>是否使用虚线</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>hairline</td><td>是否使用 <code class="">0.5px</code> 线</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>content-position</td><td>内容位置，可选值为 <code class="">left</code>、<code class="">right</code></td><td>string</td><td><code class="">center</code></td></tr><tr><td>direction</td><td>水平还是垂直类型，可选值 <code class="">vertical</code></td><td>string</td><td><code class="">horizontal</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>内容，仅在 <code class="">direction</code> 为 <code class="">horizontal</code> 时生效</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-viewider-margin</td><td><em>16px 0</em></td></tr><tr><td>--cub-viewider-text-font-size</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-viewider-text-color</td><td><em>#909ca4</em></td></tr><tr><td>--cub-viewider-line-height</td><td><em>2px</em></td></tr><tr><td>--cub-viewider-before-margin-right</td><td><em>16px</em></td></tr><tr><td>--cub-viewider-after-margin-left</td><td><em>16px</em></td></tr><tr><td>--cub-viewider-vertical-height</td><td><em>12px</em></td></tr><tr><td>--cub-viewider-vertical-top</td><td><em>2px</em></td></tr><tr><td>--cub-viewider-vertical-border-left</td><td><em>rgba(0, 0, 0, 0.06)</em></td></tr><tr><td>--cub-viewider-vertical-margin</td><td><em>0 8px</em></td></tr></tbody></table>',9),B={},W="",Y=d({__name:"doc.taro",setup(X,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(H,D)=>{const t=p("demo-block");return o(),h("div",r,[i,e(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlld2lkZXIgLz4KPC/KHw=="},{default:l(()=>[m]),_:1}),j,g,e(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlld2lkZXI+5paH5pysPC/NFQo8L8oy"},{default:l(()=>[u]),_:1}),v,b,e(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlld2lkZXIgY29udGVudC1wb3NpdGlvbj0ibGVmdCI+5paH5pysPC/MLd8+xT5yaWdo2T88L+oAiQ=="},{default:l(()=>[_]),_:1}),w,f,e(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlld2lkZXIgZGFzaGVkPuaWh+acrDwvzBw+Cjwvyjk="},{default:l(()=>[x]),_:1}),y,I,e(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdmlld2lkZXIgOnN0eWxlPSJ7IGNvbG9yOiAnIzE5ODlmYScsIGJvcmRlckPRGHBhZGRpbmc6ICcwIDE2cHgnIH0iPuaWh+acrDwvzF4+Cjwvyns="},{default:l(()=>[P]),_:1}),k,e(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDx2aWV3IDpzdHlsZT0ieyBmb250U2l6ZTogJzE0cHgnLCBtYXJnaW5MZWZ0OiAnMjfFFGNvbG9yOiAnIzkwOWNhNCcgfSLETSAgPHRleHQ+5paH5pysPC/FDcYYY3ViLcRraWRlciBkaXJlY3Rpb249InZlcnRpY2FsIiAv30LfQt9CIDwvxD0+CsQS6AD/"},{default:l(()=>[C]),_:1}),R])}}});export{Y as default,W as excerpt,B as frontmatter};
