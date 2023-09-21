import{d as c,r as o,b as r,k as l,w as e,aq as d,e as t,o as p,l as s}from"./style_icon.js";const h={class:"markdown-body"},i=d(`<h1>Textarea 文本域</h1><h3>介绍</h3><p>文本框内输入或编辑文字，支持限制输入数量。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Textarea</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Textarea</span>);
</code></pre><h3>基础用法</h3>`,6),j=t("pre",null,[t("code",{class:"language-vue"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-textarea"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`;
`),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`);
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=t("h3",null,"显示字数统计",-1),m=t("pre",null,[t("code",{class:"language-vue"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-textarea"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(),t("span",{class:"hljs-attr"},"limit-show"),s(),t("span",{class:"hljs-attr"},"max-length"),s("="),t("span",{class:"hljs-string"},'"20"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`;
`),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`);
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=t("h3",null,"高度自定义，拉伸",-1),b=t("pre",null,[t("code",{class:"language-vue"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-textarea"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(),t("span",{class:"hljs-attr"},":rows"),s("="),t("span",{class:"hljs-string"},'"1"'),s(),t("span",{class:"hljs-attr"},"autosize"),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`;
`),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`);
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=t("h3",null,"只读、禁用",-1),f=t("pre",null,[t("code",{class:"language-vue"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-textarea"),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"model-value"),s("="),t("span",{class:"hljs-string"},'"textarea 只读状态"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-textarea"),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"model-value"),s("="),t("span",{class:"hljs-string"},'"textarea 禁用状态"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x=d('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>输入值，支持双向绑定</td><td>string</td><td>-</td></tr><tr><td>placeholder</td><td>设置占位提示文字</td><td>string</td><td><code class="">&#39;请输入&#39;</code></td></tr><tr><td>max-length</td><td>限制最长输入字符</td><td>string | number</td><td>-</td></tr><tr><td>rows</td><td>textarea 的高度，优先级高于 autosize 属性 <code class="">仅支持 H5</code></td><td>string | number</td><td><code class="">2</code></td></tr><tr><td>limit-show</td><td>textarea 是否展示输入字符。须配合<code class="">max-length</code>使用</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>autosize</td><td>是否自适应内容高度，也可传入对象, 如 { maxHeight: 200, minHeight: 100 }，单位为 px</td><td>boolean | {maxHeight?: number; minHeight?: number}</td><td><code class="">false</code></td></tr><tr><td>text-align</td><td>文本位置,可选值<code class="">left</code>,<code class="">center</code>,<code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>readonly</td><td>只读属性</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>禁用属性</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>autofocus</td><td>自动获取焦点</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>输入框值改变时触发</td><td><code class="">value</code></td></tr><tr><td>focus</td><td>聚焦时触发</td><td><code class="">event</code></td></tr><tr><td>blur</td><td>失焦时触发</td><td><code class="">value,event</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-textarea-font</td><td><em>var(--cub-font-size-2)</em></td></tr><tr><td>--cub-textarea-limit-color</td><td><em>var(--cub-text-color)</em></td></tr><tr><td>--cub-textarea-text-color</td><td><em>var(--cub-title-color)</em></td></tr><tr><td>--cub-textarea-disabled-color</td><td><em>var(--cub-disable-color)</em></td></tr></tbody></table>',9),C={},I="",W=c({__name:"doc",setup(y,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(_,w)=>{const a=o("demo-block");return p(),r("div",h,[i,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGV4dGFyZWEgdi1tb2RlbD0idmFsdWUiIC8+Cjwvyi88c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwpjb25zdCDFRiA9xCAoJycpOwo8L8ZCPgo="},{default:e(()=>[j]),_:1}),g,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGV4dGFyZWEgdi1tb2RlbD0idmFsdWUiIGxpbWl0LXNob3cgbWF4LWxlbmd0aD0iMjAiIC8+Cjwvyko8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwpjb25zdCDFYSA9xCAoJycpOwo8L8ZCPgo="},{default:e(()=>[m]),_:1}),u,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGV4dGFyZWEgdi1tb2RlbD0idmFsdWUiIDpyb3dzPSIxIiBhdXRvc2l6ZSAvPgo8L8pCPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgxVkgPcQgKCcnKTsKPC/GQj4K"},{default:e(()=>[b]),_:1}),v,l(a,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdGV4dGFyZWEgcmVhZG9ubHkgbW9kZWwtdmFsdWU9Iskf5Y+q6K+754q25oCBIiAv0kBkaXNhYmxlZNdA56aB55Soy0A8L+oAjA=="},{default:e(()=>[f]),_:1}),x])}}});export{W as default,I as excerpt,C as frontmatter};
