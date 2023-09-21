import{d as p,r,b as h,k as t,w as n,aq as c,e as a,o,l as s}from"./style_icon.js";const d={class:"markdown-body"},i=c(`<h1>Indicator</h1><h3>Intro</h3><p>Displays the progress of a task or process, which is often used to open a process.</p><h3>Install</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Indicator</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Indicator</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-indicator"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("step1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-indicator"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Main button"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-indicator"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"align"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),s("step1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-indicator"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u=a("h3",null,"Block usage",-1),g=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-indicator"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"algin"),s("="),a("span",{class:"hljs-string"},'"center"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),s("step1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-indicator"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-indicator"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"align"),s("="),a("span",{class:"hljs-string"},'"left"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("step1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-indicator"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-indicator"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"align"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),s("step1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-indicator"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b=a("h3",null,"Do not make up 0",-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-indicator"),s(),a("span",{class:"hljs-attr"},":fill-zero"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),s("step1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-indicator"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>current</td><td>Current step</td><td>number</td><td><code class="">1</code></td></tr><tr><td>size</td><td>Step length</td><td>number</td><td><code class="">3</code></td></tr><tr><td>block</td><td>Enable block level layout</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>align</td><td>Alignment, which takes effect only when <code class="">block</code> is <code class="">true</code>. optional value <code class="">left</code>, <code class="">right</code>, <code class="">center</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>fill-zero</td><td>Whether to add 0 before singular number</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-indicator-bg-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-indicator-dot-color</td><td><em>var(--cub-disable-color)</em></td></tr><tr><td>--cub-indicator-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-indicator-size</td><td><em>18px</em></td></tr><tr><td>--cub-indicator-dot-size</td><td><em>calc(var(--cub-indicator-size) / 3)</em></td></tr><tr><td>--cub-indicator-border-size</td><td><em>calc(var(--cub-indicator-size)+ 2)</em></td></tr><tr><td>--cub-indicator-number-font-size</td><td><em>10px</em></td></tr></tbody></table>',7),v={},k="",x=p({__name:"doc.en-US",setup(_,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(I,y)=>{const l=r("demo-block");return o(),h("div",d,[i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw9pbmRpY2F0b3IgOnNpemU9IjMiIDpjdXJyZW50xA0+c3RlcDE8L80sxU3FE8hO1Ftyb3fGDsgfb2wgOnNwYW49IjEyIsgbxx1idXR0b24g5gCEc21hbGwiIHR5cGU9InByaW1hcnkiPk1haW4gxijGfcYMyWTFFGNv5wCD33XvAP1ibG9jayBhbGlnbj0icmlnaHQi6AERNuwBETX6ARHzAITGD+cBCOwBMTwv6gGY"},{default:n(()=>[j]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw9pbmRpY2F0b3IgYmxvY2sgYWxnaW49ImNlbnRlciIgOnNpemU9IjYiIDpjdXJyZW50PSI1Ij5zdGVwMTwvzUHFYsUTyGPfcMdwaWduPSJsZWZ01m4x327fbtVucmlnaNdv/wDdyGI8L+oBWQ=="},{default:n(()=>[g]),_:1}),b,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw9pbmRpY2F0b3IgOmZpbGwtemVybz0iZmFsc2UiIDpzaXplPSI2IiA6Y3VycmVudD0iNSI+c3RlcDE8L80/xWDFE8ZhPC/Keg=="},{default:n(()=>[m]),_:1}),f])}}});export{x as default,k as excerpt,v as frontmatter};