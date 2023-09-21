import{d as p,r as h,b as r,k as l,w as n,aq as e,e as a,o,l as s}from"./style_icon.js";const d={class:"markdown-body"},g=e(`<h1>Drag</h1><h3>Intro</h3><p>Implement draggable arbitrary elements</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Drag</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Drag</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-drag"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Button"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-drag"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),i=a("h3",null,"Limit Direction",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-drag"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"x"'),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ top: '200px', left: '8px' }"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Button"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-drag"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),m=a("h3",null,"Attract",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-drag"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"x"'),s(),a("span",{class:"hljs-attr"},":attract"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Button"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-drag"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Limit Boundaries",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"drag-boundary"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-drag"),s(),a("span",{class:"hljs-attr"},":boundary"),s("="),a("span",{class:"hljs-string"},'"{ top: 100, left: 9, bottom: bottom(), right: right() }"'),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},`"{ top: '100px', left: '50px' }"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Button"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-drag"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"right"),s("("),a("span",{class:"hljs-params"}),s(`) {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-variable language_"},"document"),s("."),a("span",{class:"hljs-property"},"documentElement"),s("."),a("span",{class:"hljs-property"},"clientWidth"),s(" - "),a("span",{class:"hljs-number"},"300"),s(" - "),a("span",{class:"hljs-number"},"9"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"bottom"),s("("),a("span",{class:"hljs-params"}),s(`) {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-variable language_"},"document"),s("."),a("span",{class:"hljs-property"},"documentElement"),s("."),a("span",{class:"hljs-property"},"clientHeight"),s(" - "),a("span",{class:"hljs-number"},"300"),s(`;
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        right,
        bottom
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".drag-boundary"),s(` {
    `),a("span",{class:"hljs-attribute"},"position"),s(`: absolute;
    `),a("span",{class:"hljs-attribute"},"top"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
    `),a("span",{class:"hljs-attribute"},"left"),s(": "),a("span",{class:"hljs-number"},"8px"),s(`;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"300px"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
    `),a("span",{class:"hljs-attribute"},"border"),s(": "),a("span",{class:"hljs-number"},"1px"),s(` solid red;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">attract</td><td style="text-align:left;">Whether to enable automatic edge suction</td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code class="">false</code></td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">The drag direction limit of the dragged element <strong>x</strong>/<strong>y</strong>/<strong>all</strong></td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">&#39;all&#39; </code></td></tr><tr><td style="text-align:left;">boundary</td><td style="text-align:left;">The drag boundary of the dragged element</td><td style="text-align:left;">object</td><td style="text-align:left;"><code class="">{top: 0,left: 0,right: 0,bottom: 0}</code></td></tr></tbody></table>',3),R={},H="",k=p({__name:"doc.en-US",setup(_,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(I,B)=>{const t=h("demo-block");return o(),r("div",d,[g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZHJhZ8QNxw9idXR0b24gdHlwZT0icHJpbWFyeSI+QsUWPC/KIsVAxRDGQTwvylo="},{default:n(()=>[j]),_:1}),i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZHJhZyBkaXJlY3Rpb249IngiIDpzdHlsZT0ieyB0b3A6ICcyMDBweCcsIGxlZnQ6ICc4cHgnIH0ixELHRGJ1dHRvbiB0eXBlPSJwcmltYXJ5Ij5CxRY8L8oixXXFEMR2Pgo8L+oAjw=="},{default:n(()=>[u]),_:1}),m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZHJhZyBkaXJlY3Rpb249IngiIDphdHRyYWN0PSJ0cnVlIsQrxy1idXR0b24gdHlwZT0icHJpbWFyeSI+QsUWPC/KIsVexRDEXz4KPC/KeA=="},{default:n(()=>[b]),_:1}),y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRyYWctYm91bmRhcnkiPjwvZGl2xSRjdWItxB0gOsgePSJ7IHRvcDogMTAwLCBsZWZ0OiA5LCBib3R0b206xwgoKSwgcmlnaHQ6xgcoKSB9IiA6c3R5bGXJQScxMDBweCfIRSc1xA4gfSLEecd7YnV0dG9uIHR5cGU9InByaW3lAJ9CxRY8L8oixDPGEOQArT4KPC/qAOo8c2NyaXB0xCNleHBvcnQgZGVmYXVsdCB7xWlzZXR1cCgpxw4gIGZ1bmN0aW9u6QC6yBkgIHJldHVybiBkb2N1bWVudC7ICUVsZcUQY2xpZW50V2lkdGggLSAzMDAgLSA5O8c/fdBg6AEr32HSYUhl5ACaxmLQXsdCy1PELCzJD8Z1yDXGPsQ8fTsKPC/oASoKPOUBquQBMy7tAhvHWHBvc2nkAMM6IGFic29sdXRlxknoAhhweMYQ5gHZOMgPd+QBGTrkALbIEmjlAMo6IDLKE2JvcmRlcjogMXB4IHNvbGlkIHJlZMQbfeQAoeYAlw=="},{default:n(()=>[x]),_:1}),f])}}});export{k as default,H as excerpt,R as frontmatter};
