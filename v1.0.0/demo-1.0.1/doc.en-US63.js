import{d as r,r as o,b as p,k as n,w as l,aq as c,e as a,o as d,l as s}from"./style_icon.js";const i={class:"markdown-body"},h=c(`<h1>Signature autograph</h1><h3>Intro</h3><p>Signature component based on canvas.</p><h3>Install</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Signature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Signature</span>);
</code></pre><h3>Basic usage</h3>`,6),g=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'img data'"),s(`, canvas, data);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clear"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  demoSignUrl.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},"''"),s(`;
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'clear'"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),j=a("h3",null,"Modify color and signature thickness",-1),u=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'img data'"),s(`, canvas, data);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clear"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  demoSignUrl.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},"''"),s(`;
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'clear'"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>custom-class</td><td>custom <code class="">class</code></td><td>string</td><td><code class="">-</code></td></tr><tr><td>line-width</td><td>line width</td><td>number</td><td><code class="">3</code></td></tr><tr><td>stroke-style</td><td>drawing stroke color</td><td>string</td><td><code class="">#000</code></td></tr><tr><td>type</td><td>image format</td><td>string</td><td><code class="">png</code></td></tr><tr><td>un-support-tpl</td><td>Display copy when Canvas is not supported</td><td>string</td><td><code class="">Sorry, the current browser does not support Canvas, so this control cannot be used! </code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>start</td><td>Signature start callback function (refers to the start of a certain stroke)</td><td><code class="">-</code></td></tr><tr><td>signing</td><td>The callback function that is signing (referring to a certain stroke in progress)</td><td><code class="">event</code></td></tr><tr><td>end</td><td>Signature end callback function (referring to the end of a certain stroke)</td><td><code class="">-</code></td></tr><tr><td>confirm</td><td>Click the confirm button to trigger the event callback function</td><td><code class="">canvas and signature image display data URI，&lt;br&gt;If not drawn, returns a tooltip and an empty data URI</code></td></tr><tr><td>clear</td><td>Click the re-sign button to trigger the event callback function</td><td><code class="">-</code></td></tr></tbody></table>',5),v={},_="",S=r({__name:"doc.en-US",setup(f,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(b,y)=>{const t=o("demo-block");return d(),p("div",i,[h,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2lnbmF0dXJlIEBjb25maXJtPSLHCSIgQGNsZWFyPSLFByI+PC/NMsVEaW1nIDpzcmM9ImRlbW9TaWduVXJsIiBjbGFzc88Udi1pZs8TLz4KPC/qAJQ8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwpjb25zdCDLTCA9xCYoJycpyB3nAMYgPSAoY2FudmFzLCBkYXRhKSA9PiB7CiAgaWYgKMQRID09PSAnJynFFSDEN3NvbGUubG9nxzgpO8UZcmV0dXJuIGZhbHNlxBJ9CiDsAIEudmFsdWUgPcVlxCDMSSfkASfEGScsIO0AjTsKfekAsOQBZeQArukAotReJyfRXMU55AD4fTsKPC/mAUM+Cg=="},{default:l(()=>[g]),_:1}),j,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2lnbmF0dXJlCiAgICA6bGluZVdpZHRoPSJzdGF0ZS7JESLGIXN0cm9rZVN0eWxlyCPLE8YlQGNvbmZpcm09IscJyBdsZWFyPSLFB8QTPjwv7QCD5QCVaW1nIDpzcmM9ImRlbW9TaWduVXJsIiBjbGFzc88Udi1pZs8TLz4KPC/qAOU8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qg5QDbID3JJSh7CiAg6QENOiA0LAogIOsA+jogJ2dyZWVuJwp9KchE6wCaxUpmKCcnyR3nARsgPSAoY2FudmFzLCBkYXRhKSA9PiDEbGlmICjEESA9PT0gJycpxRUgxDdzb2xlLmxvZ8c4KTvFGXJldHVybiBmYWxzZcQSfQog7ACBLnZhbHXkANHEVMQgzEkn5AF1xBknLCDtAI07Cn3pALDkAbbkAK7pAKLUXicn0VzFOeQA+H07Cjwv5gGRPgo="},{default:l(()=>[u]),_:1}),m])}}});export{S as default,_ as excerpt,v as frontmatter};
