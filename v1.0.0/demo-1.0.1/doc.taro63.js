import{d as p,r,b as d,k as n,w as t,aq as c,e as a,o,l as s}from"./style_icon.js";const h={class:"markdown-body"},i=c(`<h1>Signature 签名</h1><h3>介绍</h3><p>基于 Canvas 的签名组件。默认竖屏模式使用，如使用横屏模式，请开发者自行设置旋转角度或者宽高。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Signature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Signature</span>);
</code></pre><h3>基础用法</h3>`,6),j=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-signature"),s(" @"),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(" @"),a("span",{class:"hljs-attr"},"clear"),s("="),a("span",{class:"hljs-string"},'"clear"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-signature"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"demoSignUrl"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demoSignUrl"'),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"demoSignUrl"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" demoSignUrl = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"canvas, data"),s(`) => {
  `),a("span",{class:"hljs-keyword"},"if"),s(" (data === "),a("span",{class:"hljs-string"},"''"),s(`) {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(canvas);
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
  }
  demoSignUrl.`),a("span",{class:"hljs-property"},"value"),s(` = data;
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'图片地址'"),s(`, canvas, data);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clear"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  demoSignUrl.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},"''"),s(`;
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'清除事件'"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"修改颜色和签字粗细",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-signature"),s(`
    `),a("span",{class:"hljs-attr"},":lineWidth"),s("="),a("span",{class:"hljs-string"},'"state.lineWidth"'),s(`
    `),a("span",{class:"hljs-attr"},":strokeStyle"),s("="),a("span",{class:"hljs-string"},'"state.strokeStyle"'),s(`
    @`),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
    @`),a("span",{class:"hljs-attr"},"clear"),s("="),a("span",{class:"hljs-string"},'"clear"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-signature"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"demoSignUrl"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demoSignUrl"'),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"demoSignUrl"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"lineWidth"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
  `),a("span",{class:"hljs-attr"},"strokeStyle"),s(": "),a("span",{class:"hljs-string"},"'green'"),s(`
});
`),a("span",{class:"hljs-keyword"},"const"),s(" demoSignUrl = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"confirm"),s(" = ("),a("span",{class:"hljs-params"},"canvas, data"),s(`) => {
  `),a("span",{class:"hljs-keyword"},"if"),s(" (data === "),a("span",{class:"hljs-string"},"''"),s(`) {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(canvas);
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
  }
  demoSignUrl.`),a("span",{class:"hljs-property"},"value"),s(` = data;
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'图片地址'"),s(`, canvas, data);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clear"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  demoSignUrl.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},"''"),s(`;
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'清除事件'"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>custom-class</td><td>自定义 <code class="">class</code></td><td>string</td><td><code class="">-</code></td></tr><tr><td>line-width</td><td>线条的宽度</td><td>number</td><td><code class="">3</code></td></tr><tr><td>stroke-style</td><td>绘图笔触颜色</td><td>string</td><td><code class="">#000</code></td></tr><tr><td>type</td><td>图片格式</td><td>string</td><td><code class="">png</code></td></tr><tr><td>un-support-tpl</td><td>不支持 Canvas 情况下的展示文案</td><td>string</td><td><code class="">对不起，当前浏览器不支持Canvas，无法使用本控件！</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>start</td><td>签名开始回调函数（指某次笔画的开始）</td><td><code class="">-</code></td></tr><tr><td>signing</td><td>正在签名的回调函数（指某次笔画进行中）</td><td><code class="">event</code></td></tr><tr><td>end</td><td>签名结束回调函数（指某次笔画的结束）</td><td><code class="">-</code></td></tr><tr><td>confirm</td><td>点击确认按钮触发事件回调函数</td><td><code class="">canvas和签名图片展示的 data URI，&lt;br&gt;如未绘制，则返回提示信息和空 data URI</code></td></tr><tr><td>clear</td><td>点击重签按钮触发事件回调函数</td><td><code class="">-</code></td></tr></tbody></table>',5),_={},k="",S=p({__name:"doc.taro",setup(y,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(b,f)=>{const l=r("demo-block");return o(),d("div",h,[i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2lnbmF0dXJlIEBjb25maXJtPSLHCSIgQGNsZWFyPSLFByI+PC/NMsVEaW1nIDpzcmM9ImRlbW9TaWduVXJsIiBjbGFzc88Udi1pZs8TLz4KPC/qAJQ8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwpjb25zdCDLTCA9xCYoJycpyB3nAMYgPSAoY2FudmFzLCBkYXRhKSA9PiB7CiAgaWYgKMQRID09PSAnJynFFSDEN3NvbGUubG9nxzgpO8UZcmV0dXJuIGZhbHNlxBJ9CiDsAIEudmFsdWUgPcVlxCDMSSflm77niYflnLDlnYAnLCDtAJE7Cn3pALTkAWnkALLpAKbUYicn0WDmuIXpmaTkuovku7bkAQN9Owo8L+YBTj4K"},{default:t(()=>[j]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2lnbmF0dXJlCiAgICA6bGluZVdpZHRoPSJzdGF0ZS7JESLGIXN0cm9rZVN0eWxlyCPLE8YlQGNvbmZpcm09IscJyBdsZWFyPSLFB8QTPjwv7QCD5QCVaW1nIDpzcmM9ImRlbW9TaWduVXJsIiBjbGFzc88Udi1pZs8TLz4KPC/qAOU8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qg5QDbID3JJSh7CiAg6QENOiA0LAogIOsA+jogJ2dyZWVuJwp9KchE6wCaxUpmKCcnyR3nARsgPSAoY2FudmFzLCBkYXRhKSA9PiDEbGlmICjEESA9PT0gJycpxRUgxDdzb2xlLmxvZ8c4KTvFGXJldHVybiBmYWxzZcQSfQog7ACBLnZhbHXkANHEVMQgzEkn5Zu+54mH5Zyw5Z2AJywg7QCROwp96QC05AG65ACy6QCm1GInJ9Fg5riF6Zmk5LqL5Lu25AEDfTsKPC/mAZw+Cg=="},{default:t(()=>[m]),_:1}),u])}}});export{S as default,k as excerpt,_ as frontmatter};
