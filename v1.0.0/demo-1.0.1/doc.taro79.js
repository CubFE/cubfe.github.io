import{d as p,r as h,b as r,k as t,w as n,aq as c,e as a,o as d,l as s}from"./style_icon.js";const o={class:"markdown-body"},j=c(`<h1>trendarrow</h1><h3>介绍</h3><p>带有箭头指示的百分比数字，用以展示指标趋势。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TrendArrow</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TrendArrow</span>);
</code></pre><h3>基础用法</h3>`,6),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},":sync-text-color"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},":sync-text-color"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"-0.2535"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u=a("h3",null,"改变文字颜色",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"10.2365"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"-0.2535"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),i=a("h3",null,"指定小数位",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},":digits"),s("="),a("span",{class:"hljs-string"},'"0"'),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"10.2365"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},":digits"),s("="),a("span",{class:"hljs-string"},'"0"'),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"-0.2535"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=a("h3",null,"箭头在前面",-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},"arrowLeft"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"0.2535"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},"arrowLeft"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"-0.2535"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y=a("h3",null,"显示正负号",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},"showSign"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},"showSign"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"-0.2535"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=a("h3",null,"是否展示 0",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},"showSign"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"0"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},"showSign"),s(),a("span",{class:"hljs-attr"},"showZero"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"0"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v=a("h3",null,"自定义颜色",-1),M=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"10.2365"'),s(),a("span",{class:"hljs-attr"},"rise-color"),s("="),a("span",{class:"hljs-string"},'"rgb(73,143,242)"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"-0.2535"'),s(),a("span",{class:"hljs-attr"},"showSign"),s(),a("span",{class:"hljs-attr"},"drop-color"),s("="),a("span",{class:"hljs-string"},'"rgb(255, 190, 13)"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-trend-arrow"),s(`
      `),a("span",{class:"hljs-attr"},":show-text-color"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
      `),a("span",{class:"hljs-attr"},"showSign"),s(`
      `),a("span",{class:"hljs-attr"},":rate"),s("="),a("span",{class:"hljs-string"},'"-0.2535"'),s(`
      `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"rgb(39,197,48)"'),s(`
      `),a("span",{class:"hljs-attr"},"drop-color"),s("="),a("span",{class:"hljs-string"},'"rgb(255, 190, 13)"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C=c(`<h3>自定义图标</h3><p>::: demo</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">cub-trend-arrow</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;10.2365&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">up-icon</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Success</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;blue&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;18px&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">cub-trend-arrow</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">cub-trend-arrow</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;-10.2365&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">down-icon</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Failure</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">cub-trend-arrow</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Success</span>, <span class="hljs-title class_">Failure</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubfe/icons-vue-taro&#39;</span>;
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">components</span>: { <span class="hljs-title class_">Success</span>, <span class="hljs-title class_">Failure</span> }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><p>:::</p><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rate</td><td>数值，大于 0 时箭头向上，小于 0 时箭头向下</td><td>number</td><td>-</td></tr><tr><td>digits</td><td>小数位精度</td><td>number</td><td><code class="">2</code></td></tr><tr><td>show-sign</td><td>是否显示加减号</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>show-zero</td><td>是否显示 0</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>arrow-left</td><td>是否在数字左侧显示箭头</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>sync-text-color</td><td>文字颜色是否与箭头同步</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>text-color</td><td>文字颜色</td><td>string</td><td><code class="">#333333</code></td></tr><tr><td>rise-color</td><td>向上箭头颜色</td><td>string</td><td><code class="">#fa2c19</code></td></tr><tr><td>drop-color</td><td>向下箭头颜色</td><td>string</td><td><code class="">#64b578</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>up-icon</td><td>自定义向上箭头图标，默认使用 <code class="">Up</code></td></tr><tr><td>down-icon</td><td>自定义向下箭头图标，默认使用 <code class="">Under</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-trendarrow-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-trendarrow-before-icon-margin</td><td><em>4px</em></td></tr></tbody></table>`,13),T={},Z="",V=p({__name:"doc.taro",setup(A,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(P,N)=>{const l=h("demo-block");return d(),r("div",o,[j,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw90cmVuZC1hcnJvdyA6c3luYy10ZXh0LWNvbG9yPSJmYWxzZSIgOnJhdGU9IjEiIC/fO9g7LTAuMjUzNcdBPC/qAIo8L+oAow=="},{default:n(()=>[g]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw90cmVuZC1hcnJvdyA6cmF0ZT0iMTAuMjM2NSIgL94oLTAuMjUzyCg8L8pePC/Kdw=="},{default:n(()=>[m]),_:1}),i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw90cmVuZC1hcnJvdyA6ZGlnaXRzPSIwIiA6cmF0ZT0iMTAuMjM2NSIgL980yzQtMC4yNTPINDwvynY8L+oAjw=="},{default:n(()=>[b]),_:1}),w,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw90cmVuZC1hcnJvdyDFBkxlZnQgOnJhdGU9IjAuMjUzNSIgL98xyTEtzTI8L8pxPC/qAIo="},{default:n(()=>[_]),_:1}),y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw90cmVuZC1hcnJvdyBzaG93U2lnbiA6cmF0ZT0iMSIgL98ryCstMC4yNTM1xzE8L8pqPC/qAIM="},{default:n(()=>[x]),_:1}),I,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw90cmVuZC1hcnJvdyBzaG93U2lnbiA6cmF0ZT0iMCIgL98rxQlaZXJv0DQ8L8ptPC/qAIY="},{default:n(()=>[f]),_:1}),v,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw90cmVuZC1hcnJvdyA6cmF0ZT0iMTAuMjM2NSIgcmlzZS1jb2xvcj0icmdiKDczLDE0MywyNDIpIiAv3kUtMC4yNTM1IiBzaG93U2lnbiBkcm9wzE4yNTUsIDE5MCwgMTPaUMUVICA6xEctdGV4dMhDZmFsc2Uixx/IZcgu7gCExxbMPuQAgTM5LDE5Nyw0OCnIIv4Ao8Ul5QCnPC/qAUo8L+oBYw=="},{default:n(()=>[M]),_:1}),C])}}});export{V as default,Z as excerpt,T as frontmatter};
