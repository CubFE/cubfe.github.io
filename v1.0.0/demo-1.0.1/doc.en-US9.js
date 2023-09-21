import{d as p,r as d,b as r,k as n,w as l,aq as e,e as a,o as h,l as s}from"./style_icon.js";const o={class:"markdown-body"},i=e(`<h1>Barrage bullet chat</h1><h3>Intro</h3><p>It is used for the rotation display of words and phrases, which is suitable for video or other similar needs.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Barrage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Barrage</span>);
</code></pre><h3>Basic usage</h3><p>\`Icon&#39;s&#39; name &#39;attribute supports the incoming icon name or picture link.</p>`,7),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-barrage"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"danmu"'),s(),a("span",{class:"hljs-attr"},":danmu"),s("="),a("span",{class:"hljs-string"},'"list"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-barrage"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"addDanmu"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"add cub-button--primary"'),s(">")]),s("add randomly"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" inputVal = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" danmu = "),a("span",{class:"hljs-title function_"},"ref"),s(`();
      `),a("span",{class:"hljs-keyword"},"let"),s(" list = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'aaaa'"),s(", "),a("span",{class:"hljs-string"},"'bbbb'"),s(", "),a("span",{class:"hljs-string"},"'cccc'"),s(", "),a("span",{class:"hljs-string"},"'dddd'"),s(", "),a("span",{class:"hljs-string"},"'eeee'"),s(", "),a("span",{class:"hljs-string"},"'ffff'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"addDanmu"),s("("),a("span",{class:"hljs-params"}),s(`) {
        `),a("span",{class:"hljs-keyword"},"let"),s(" n = "),a("span",{class:"hljs-title class_"},"Math"),s("."),a("span",{class:"hljs-title function_"},"random"),s(`();
        danmu.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"add"),s("("),a("span",{class:"hljs-string"},"'randomly——'"),s(" + "),a("span",{class:"hljs-title class_"},"String"),s("(n)."),a("span",{class:"hljs-title function_"},"substr"),s("("),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-number"},"10"),s(`));
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        inputVal,
        danmu,
        list,
        addDanmu
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"slot usage",-1),u=a("blockquote",null,[a("p",null,"Using the slot requires putting the scrolling content inside the html tag, the applet environment is not currently supported")],-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-barrage"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("aaa"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("bbb"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("ccc"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("ddd"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-barrage"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>danmu</td><td>Danmaku list data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>frequency</td><td>the time interval of each barrage in the visible area</td><td>number</td><td><code class="">500</code></td></tr><tr><td>speeds</td><td>scrolling time of each barrage</td><td>number</td><td><code class="">5000</code></td></tr><tr><td>rows</td><td>Number of bullet chatting lines, displayed in several lines</td><td>number</td><td><code class="">3</code></td></tr><tr><td>top</td><td>vertical distance of the barrage</td><td>number</td><td><code class="">10</code></td></tr><tr><td>loop</td><td>Whether to play in a loop</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Callback Parameters</th></tr></thead><tbody><tr><td>add</td><td>add data(used via ref instance)</td><td>-</td></tr></tbody></table>',5),v={},I="",w=p({__name:"doc.en-US",setup(y,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(f,_)=>{const t=d("demo-block");return h(),r("div",o,[i,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYmFycmFnZSByZWY9ImRhbm11IiA6xQg9Imxpc3QiPjwvyyjFOGRpdiBjbGFzcz0idGXEIwogICAgPGJ1dHRvbiBAY2xpY2s9ImFkZETGUMcsYWRkIMVLxSgtLXByaW1hcnkiPsQZcmFuZG9tbHk8L8YfxWkvZGl2Pgo8L+oAtjxzY3JpcHTEHmltcG9ydCB75AC7IH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QCicHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCBpbnB1dFZhbCA9xFkoJycpxFDKIOUBHMcdyRtsZXQg5AEuxxhbJ2FhYWEnLCAnYmJiYsQIY2NjY8QIZGRkZMQIZWVlZcQIZmZmZiddyUhmdW5jdGlvbiDoAT3rAJ/GZm4gPSBNYXRoLuYBMeoAgyDmAJoudmFsdWUuYWRkKCfGI2x54oCU4oCUJyArIFN0cmluZyhuKS5zdWJzdHIoMiwgMTApyUV9xwhyZXR1cm7Le+gBFuYBOsluyg/kAP7KDugAv8hXxmDEXn07Cjwv6AHF"},{default:l(()=>[j]),_:1}),m,u,n(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYmFycmFnxRAgIDxzcGFuPmFhYTwvxQrLFWJiYtIVY2Nj0hVkZGTKFTwvzWU8L+oAgQ=="},{default:l(()=>[g]),_:1}),b])}}});export{w as default,I as excerpt,v as frontmatter};
