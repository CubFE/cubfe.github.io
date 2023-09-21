import{d,r as p,b as r,k as l,w as e,aq as c,e as s,l as a,o}from"./style_icon.js";const h={class:"markdown-body"},i=c(`<h1>Price 商品价格</h1><h3>介绍</h3><p>用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Price</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Price</span>);
</code></pre><h3>价格大小</h3><p>支持 small、normal、large 三种尺寸，默认为 normal。</p>`,7),m=s("pre",null,[s("code",{class:"language-vue"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"cub-price"),a(),s("span",{class:"hljs-attr"},":price"),a("="),s("span",{class:"hljs-string"},'"0"'),a(),s("span",{class:"hljs-attr"},"size"),a("="),s("span",{class:"hljs-string"},'"small"'),a(),s("span",{class:"hljs-attr"},":need-symbol"),a("="),s("span",{class:"hljs-string"},'"false"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"cub-price"),a(),s("span",{class:"hljs-attr"},":price"),a("="),s("span",{class:"hljs-string"},'"0"'),a(),s("span",{class:"hljs-attr"},"size"),a("="),s("span",{class:"hljs-string"},'"normal"'),a(),s("span",{class:"hljs-attr"},":need-symbol"),a("="),s("span",{class:"hljs-string"},'"false"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"cub-price"),a(),s("span",{class:"hljs-attr"},":price"),a("="),s("span",{class:"hljs-string"},'"0"'),a(),s("span",{class:"hljs-attr"},"size"),a("="),s("span",{class:"hljs-string"},'"large"'),a(),s("span",{class:"hljs-attr"},":need-symbol"),a("="),s("span",{class:"hljs-string"},'"false"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),j=s("h3",null,"小数点位数",-1),g=s("p",null,[s("code",{class:""},"decimal-digits"),a(" 可设置小数点位数，默认展示 2 位小数。")],-1),u=s("pre",null,[s("code",{class:"language-vue"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"cub-price"),a(),s("span",{class:"hljs-attr"},":price"),a("="),s("span",{class:"hljs-string"},'"8888"'),a(),s("span",{class:"hljs-attr"},":decimal-digits"),a("="),s("span",{class:"hljs-string"},'"0"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),b=s("h3",null,"划线价",-1),_=s("pre",null,[s("code",{class:"language-vue"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"cub-price"),a(),s("span",{class:"hljs-attr"},":price"),a("="),s("span",{class:"hljs-string"},'"8888"'),a(),s("span",{class:"hljs-attr"},":decimal-digits"),a("="),s("span",{class:"hljs-string"},'"0"'),a(),s("span",{class:"hljs-attr"},"size"),a("="),s("span",{class:"hljs-string"},'"normal"'),a(),s("span",{class:"hljs-attr"},"need-symbol"),a(),s("span",{class:"hljs-attr"},"thousands"),a(),s("span",{class:"hljs-attr"},"strike-through"),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),I=s("h3",null,"货币符号",-1),v=s("p",null,[s("code",{class:""},"symbol"),a(" 可设置货币符号，默认为 "),s("code",{class:""},"¥"),a("。")],-1),y=s("pre",null,[s("code",{class:"language-vue"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"cub-price"),a(),s("span",{class:"hljs-attr"},":price"),a("="),s("span",{class:"hljs-string"},'"10010.01"'),a(),s("span",{class:"hljs-attr"},"symbol"),a("="),s("span",{class:"hljs-string"},'"¥"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),x=s("h3",null,"货币符号位置",-1),P=s("p",null,[s("code",{class:""},"position"),a(" 可以调整货币符号位置。")],-1),f=s("pre",null,[s("code",{class:"language-vue"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"cub-price"),a(),s("span",{class:"hljs-attr"},":price"),a("="),s("span",{class:"hljs-string"},'"8888.01"'),a(),s("span",{class:"hljs-attr"},"position"),a("="),s("span",{class:"hljs-string"},'"after"'),a(),s("span",{class:"hljs-attr"},"symbol"),a("="),s("span",{class:"hljs-string"},'"元"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),H=s("h3",null,"千位分隔",-1),z=s("p",null,[s("code",{class:""},"thousands"),a(" 可以按照千分号形式显示。")],-1),W=s("pre",null,[s("code",{class:"language-vue"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"cub-price"),a(),s("span",{class:"hljs-attr"},":price"),a("="),s("span",{class:"hljs-string"},'"15213.1221"'),a(),s("span",{class:"hljs-attr"},":decimal-digits"),a("="),s("span",{class:"hljs-string"},'"3"'),a(),s("span",{class:"hljs-attr"},"thousands"),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),C=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>price</td><td>价格数量</td><td>number | string</td><td><code class="">0</code></td></tr><tr><td>need-symbol</td><td>是否需要加上 <code class="">symbol</code> 符号</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>symbol</td><td>符号类型</td><td>string</td><td><code class="">&amp;yen;</code></td></tr><tr><td>decimal-digits</td><td>小数位位数</td><td>number</td><td><code class="">2</code></td></tr><tr><td>thousands</td><td>是否按照千分号形式显示</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>position</td><td>符号显示在价格前或者后，<code class="">before</code>、<code class="">after</code></td><td>string</td><td><code class="">before</code></td></tr><tr><td>size</td><td>价格尺寸，<code class="">small</code>、<code class="">normal</code>、<code class="">large</code></td><td>string</td><td><code class="">normal</code></td></tr><tr><td>strike-through<code class="">v4.0.3</code></td><td>是否展示划线价</td><td>Boolean</td><td>false</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-price-symbol-big-size</td><td><em>18px</em></td></tr><tr><td>--cub-price-big-size</td><td><em>24px</em></td></tr><tr><td>--cub-price-decimal-big-size</td><td><em>18px</em></td></tr><tr><td>--cub-price-symbol-medium-size</td><td><em>14px</em></td></tr><tr><td>--cub-price-medium-size</td><td><em>16px</em></td></tr><tr><td>--cub-price-decimal-medium-size</td><td><em>14px</em></td></tr><tr><td>--cub-price-symbol-small-size</td><td><em>10px</em></td></tr><tr><td>--cub-price-small-size</td><td><em>12px</em></td></tr><tr><td>--cub-price-decimal-small-size</td><td><em>10px</em></td></tr></tbody></table>',7),w={},A="",R=d({__name:"doc",setup(Y,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(k,S)=>{const t=p("demo-block");return o(),r("div",h,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHJpY2UgOsUHPSIwIiBzaXplPSJzbWFsbCIgOm5lZWQtc3ltYm9sPSJmYWxzZSIgL989Im5vcm1h3z7aPmxhcmdl2j08L+oAxA=="},{default:e(()=>[m]),_:1}),j,g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHJpY2UgOsUHPSI4ODg4IiA6ZGVjaW1hbC1kaWdpdHM9IjAiIC8+Cjwvyj4="},{default:e(()=>[u]),_:1}),b,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHJpY2UgOsUHPSI4ODg4IiA6ZGVjaW1hbC1kaWdpdHM9IjAiIHNpemU9Im5vcm1hbCIgbmVlZC1zeW1ib2wgdGhvdXNhbmRzIHN0cmlrZS10aHJvdWdoIC8+CjwvynE="},{default:e(()=>[_]),_:1}),I,v,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHJpY2UgOsUHPSIxMDAxMC4wMSIgc3ltYm9sPSLCpSIgLz4KPC/KOg=="},{default:e(()=>[y]),_:1}),x,P,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHJpY2UgOsUHPSI4ODg4LjAxIiBwb3NpdGlvbj0iYWZ0ZXIiIHN5bWJvbD0i5YWDIiAvPgo8L8pL"},{default:e(()=>[f]),_:1}),H,z,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHJpY2UgOsUHPSIxNTIxMy4xMjIxIiA6ZGVjaW1hbC1kaWdpdHM9IjMiIHRob3VzYW5kcyAvPgo8L8pO"},{default:e(()=>[W]),_:1}),C])}}});export{R as default,A as excerpt,w as frontmatter};
