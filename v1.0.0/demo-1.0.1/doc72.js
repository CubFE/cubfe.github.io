import{d as p,r as h,b as d,k as l,w as n,aq as c,e as a,o as r,l as s}from"./style_icon.js";const o={class:"markdown-body"},j=c(`<h1>Switch 开关</h1><h3>介绍</h3><p>用来打开或关闭选项。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Switch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Switch</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checked"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" checked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"禁用状态",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checked"'),s(),a("span",{class:"hljs-attr"},"disable"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" checked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"加载状态",-1),b=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checked"'),s(),a("span",{class:"hljs-attr"},"loading"),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" checked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=a("h3",null,"change 事件",-1),w=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checked"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" checked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"value, event"),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`value："),a("span",{class:"hljs-subst"},"${value}"),s("`")]),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"异步控制",-1),y=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"checkedAsync"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeAsync"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" checkedAsync = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeAsync"),s(" = ("),a("span",{class:"hljs-params"},"value, event"),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`2s "),a("span",{class:"hljs-subst"},"${value}"),s("`")]),s(`);
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    checkedAsync.`),a("span",{class:"hljs-property"},"value"),s(` = value;
  }, `),a("span",{class:"hljs-number"},"2000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"自定义颜色",-1),_=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checked"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"blue"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" checked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=a("h3",null,"支持文字",-1),Z=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checked"'),s(),a("span",{class:"hljs-attr"},"active-text"),s("="),a("span",{class:"hljs-string"},'"开"'),s(),a("span",{class:"hljs-attr"},"inactive-text"),s("="),a("span",{class:"hljs-string"},'"关"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" checked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=a("h3",null,"自定义加载图标",-1),C=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checked"'),s(),a("span",{class:"hljs-attr"},"loading"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Loading"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-switch"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Loading"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" checked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),P=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>开关状态</td><td>boolean | string | number</td><td><code class="">false</code></td></tr><tr><td>disable</td><td>禁用状态</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>loading</td><td>加载状态</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>active-color</td><td>打开时的背景颜色</td><td>string</td><td><code class="">#fa2c19</code></td></tr><tr><td>inactive-color</td><td>关闭时的背景颜色</td><td>string</td><td><code class="">#ebebeb</code></td></tr><tr><td>active-text</td><td>打开时文字描述</td><td>string</td><td>-</td></tr><tr><td>inactive-text</td><td>关闭时文字描述</td><td>string</td><td>-</td></tr><tr><td>active-value</td><td>打开时组件的值</td><td>boolean ｜ string ｜ number</td><td><code class="">true</code></td></tr><tr><td>inactive-value</td><td>关闭组件的值</td><td>boolean ｜ string ｜ number</td><td><code class="">false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>icon</td><td>loading 状态图标</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换开关时触发</td><td>(value: boolean,event: Event)</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-switch-close-bg-color</td><td><em>#ebebeb</em></td></tr><tr><td>--cub-switch-close-cline-bg-color</td><td><em>#f0f0f0</em></td></tr><tr><td>--cub-switch-width</td><td><em>36px</em></td></tr><tr><td>--cub-switch-height</td><td><em>21px</em></td></tr><tr><td>--cub-switch-line-height</td><td><em>21px</em></td></tr><tr><td>--cub-switch-border-radius</td><td><em>21px</em></td></tr><tr><td>--cub-switch-inside-width</td><td><em>13px</em></td></tr><tr><td>--cub-switch-inside-height</td><td><em>13px</em></td></tr><tr><td>--cub-switch-inside-open-transform</td><td><em>translateX(146%)</em></td></tr><tr><td>--cub-switch-inside-close-transform</td><td><em>translateX(30%)</em></td></tr></tbody></table>',11),Y={},K="",A=p({__name:"doc",setup(x,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(H,N)=>{const t=h("demo-block");return r(),d("div",o,[j,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpdGNoIHYtbW9kZWw9ImNoZWNrZWQiIC8+Cjwvyi88c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwpjb25zdCDHSCA9xCIodHJ1ZSk7CjwvxkY+Cg=="},{default:n(()=>[i]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpdGNoIHYtbW9kZWw9ImNoZWNrZWQiIGRpc2FibGUgLz4KPC/KNzxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IMdQID3EIih0cnVlKTsKPC/GRj4K"},{default:n(()=>[m]),_:1}),u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpdGNoIHYtbW9kZWw9ImNoZWNrZWQiIGxvYWRpbmcgYWN0aXZlLWNvbG9yPSJyxBsvPgo8L8pKPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3Qgx2MgPcQiKHRydWUpOwo8L8ZGPgo="},{default:n(()=>[b]),_:1}),v,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpdGNoIHYtbW9kZWw9ImNoZWNrZWQiIEBjaGFuZ2XEEsQIIiAvPgo8L8pAPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3Qgx1kgPcQiKHRydWUpyhvEYiA9ICh2YWx1ZSwgZXZlbnQpID0+IHsKICDEJW9sZS5sb2coYMUi77yaJHvFCn1gKTsKfTsKPC/mAI8+Cg=="},{default:n(()=>[w]),_:1}),I,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpdGNoIDptb2RlbC12YWx1ZT0iY2hlY2tlZEFzeW5jIiBAY2hhbmfFF8QIxxYvPgo8L8pPPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgzGMgPcQnKHRydWUpyiDJbCA9ICjlAJksIGV2ZW50KSA9PiB7CiAgxCpvbGUubG9nKGAycyAke8UnfWApOwog5ACKVGltZW91dCgoyTMgzXkuxTAgPSDFCMQ1fSwgMjAwMCk7Cn07Cjwv5gDVPgo="},{default:n(()=>[y]),_:1}),f,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpdGNoIHYtbW9kZWw9ImNoZWNrZWQiIGFjdGl2ZS1jb2xvcj0iYmx1ZSIgLz4KPC/KQzxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IMdcID3EIih0cnVlKTsKPC/GRj4K"},{default:n(()=>[_]),_:1}),k,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpdGNoIHYtbW9kZWw9ImNoZWNrZWQiIGFjdGl2ZS10ZXh0PSLlvIAiIGluzhSFsyIgLz4KPC/KVTxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IMduID3EIih0cnVlKTsKPC/GRj4K"},{default:n(()=>[Z]),_:1}),W,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc3dpdGNoIHYtbW9kZWw9ImNoZWNrZWQiIGxvYWRpbmfEKSAgyTggI2ljb24+PEzGHiBuYW1lPSLHLCIgLz48L81jL8pkPgrMHDxzY3JpcHQgc2V0dXA+CmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7yhvIdMgfQGN1YmZlL+QAkXMtxizEC3Qg5wDEID3ETih0cnVlKTsKPC/Gcj4K"},{default:n(()=>[C]),_:1}),P])}}});export{A as default,K as excerpt,Y as frontmatter};