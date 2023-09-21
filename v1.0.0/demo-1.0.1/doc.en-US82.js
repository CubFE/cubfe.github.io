import{d as r,r as p,b as h,k as l,w as n,aq as e,e as a,o as d,l as s}from"./style_icon.js";const o={class:"markdown-body"},i=e(`<h1>watermark</h1><h3>Intro</h3><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Watermark</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Watermark</span>);
</code></pre><h3>Basic Usage</h3>`,5),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrap"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTextMark"'),s(">")]),s("Text Watermark"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showImageMark"'),s(">")]),s("Image Watermark"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-watermark"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"!flag"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mark1"'),s(),a("span",{class:"hljs-attr"},":z-index"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"cub-ui-water-mark"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-watermark"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-watermark"),s(`
      `),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"flag"'),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mark1"'),s(`
      `),a("span",{class:"hljs-attr"},":image-width"),s("="),a("span",{class:"hljs-string"},'"60"'),s(`
      `),a("span",{class:"hljs-attr"},":image-height"),s("="),a("span",{class:"hljs-string"},'"23"'),s(`
      `),a("span",{class:"hljs-attr"},":z-index"),s("="),a("span",{class:"hljs-string"},'"1"'),s(`
      `),a("span",{class:"hljs-attr"},":image"),s("="),a("span",{class:"hljs-string"},'"imgSrc"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-watermark"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" imgSrc = "),a("span",{class:"hljs-title function_"},"ref"),s(`(
        `),a("span",{class:"hljs-string"},"'//img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'"),s(`
      );
      `),a("span",{class:"hljs-keyword"},"const"),s(" flag = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showTextMark"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        flag.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showImageMark"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        flag.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` { imgSrc, showTextMark, showImageMark, flag };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".wrap"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"240px"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: block;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".wrap"),s(" > "),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".mark1"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"top"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-button"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),m=a("h3",null,"Part Usage",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrap"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"src"'),s(),a("span",{class:"hljs-attr"},"alt"),s("="),a("span",{class:"hljs-string"},'""'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-watermark"),s(),a("span",{class:"hljs-attr"},":fullPage"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"font-color"),s("="),a("span",{class:"hljs-string"},'"#fa2c19"'),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"cub-ui"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-watermark"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" src = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { src };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".wrap"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"240px"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: block;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".wrap"),s(" > "),a("span",{class:"hljs-selector-tag"},"img"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>width</td><td>Width of watermark</td><td>number</td><td><code class="">120</code></td></tr><tr><td>height</td><td>Height of watermark</td><td>number</td><td><code class="">64</code></td></tr><tr><td>rotate</td><td>Rotation angle when drawing watermark</td><td>number</td><td><code class="">-22</code></td></tr><tr><td>image</td><td>Image source, it is recommended to export 2x or 3x images, and the image rendering watermark is preferred</td><td>string</td><td>-</td></tr><tr><td>image-width</td><td>Width of image</td><td>number</td><td><code class="">120</code></td></tr><tr><td>image-height</td><td>Height of image</td><td>number</td><td><code class="">64</code></td></tr><tr><td>z-index</td><td>Z-index of the appended watermark element</td><td>number</td><td><code class="">2000</code></td></tr><tr><td>content</td><td>Watermark text content</td><td>string</td><td>-</td></tr><tr><td>font-color</td><td>Watermark text color</td><td>string</td><td><code class="">rgba(0, 0, 0, .15)</code></td></tr><tr><td>font-size</td><td>Watermark text font size</td><td>string | number</td><td><code class="">16</code></td></tr><tr><td>gap-x</td><td>Horizontal spacing between watermarks</td><td>number</td><td><code class="">24</code></td></tr><tr><td>gap-y</td><td>Vertical spacing between watermarks</td><td>number</td><td><code class="">48</code></td></tr><tr><td>full-page</td><td>Overwrite entire page</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>font-family</td><td>Watermark text font family</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-watermark-z-index</td><td><em>2000</em></td></tr></tbody></table>',7),y={},x="",I=r({__name:"doc.en-US",setup(u,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(k,w)=>{const t=p("demo-block");return d(),h("div",o,[i,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBjbGFzcz0id3JhcCLEGsccYnV0dG9uIEBjbGljaz0ic2hvd1RleHRNYXJrIj7ECiBXYXRlcm1hcms8L8ox3kJJbWFnZcZDxQvfRGItd8ggIHYtaWY9IiFmbGFnIugAtMQZMSIgOnotaW5kZXg9IjEiIGNvbnRlbnQ9IsQ/dWnGQi3EKiI+xmXJVNRoxRMgx27FbccSzXPHFDpp5ADFLXdpZHRoPSI2MM8YaGVpZ2h0PSIyM8kZ6wCqzSw9ImltZ1NyY8YW9ACpxhPkAbI+Cjwv6gHLPHNjcmlwdCBsYW5nPSJ0c+UBxGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQge8Vzc2V0dXAoKccOIOQBR3N0IOYAlSA9xEgoxxogICcvL2ltZzExLjM2MGJ1eWltZy5jb20v5QDJdG9vbHMvamZzL3QxLzU3MzQ1LzYvMjAwNjkvODAxOS82MmI5OTVjZEVkOTZmZWYwMy81MWQzMzAyZGZlY2NkMWQyLnBuZyfHbCnkALDqAI/kAZDnAI1mYWxzZc8f7AKkID0gKCkgPT7pANEgxT4udmFsdWUgPSDFQMg/fdJI6QKq30kgdHJ10khyZXR1cm4ge+cBQSztAJvGDslhLMVQyDx9CsVHPC/mAdfkAeB0eWzlA7Mu5AOj5wCH5QJzOiAxMDAlxjjmAmw6IDI0MHB4xhNkaXNwbGF5OiBibG9ja8YUYmFja2dyb3VuZDogI2ZmZsQWxHPGXD7kALDWYsUl5QL91iAgIHRvcDogNcd+xS/rBAXGNG1hcmdpbi1y5gCrMcksPC/nAOU="},{default:n(()=>[j]),_:1}),m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBjbGFzcz0id3JhcCLEGiAgPGltZyA6c3JjPSJzcmMiIGFsdD0iIiAvxx7EOndhdGVybWFyayA6ZnVsbFBhZ2U9ImZhbHNlIiBmb250LWNvbG9yPSIjZmEyYzE5IiBjb250ZW50PSLEPnVpIj48L81IxFzGE+QAlT4KPC/qAK48c2NyaXB0IGxhbmc9InRz5QCnaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QC5c2V0dXAoKccOIOQAk3N0IHNyYyA9xEUoJ2h0dHBzOi8vb3NzLm5ldGNvbmNlcHRzLmNuL3dlYnNpdGUvYXNzZXRzL21lZGlhL3dhcC9ibG9nLXdhcC1iZy0xLmpwZycp5ACBxAFyZXR1cm4ge8VjfcYWfQogxAs8L+YA0+QA3HR5bOUBki7kAYLnAJ13aWR0aDogMTAwJcY4aGVpZ2h0OiAyNDBweMYTZGlzcGxheTogYmxvY2vGFGJhY2tncm91bmQ6ICNmZmbEFsRzxlw+IOQB2dVifeQAk+YAig=="},{default:n(()=>[g]),_:1}),b])}}});export{I as default,x as excerpt,y as frontmatter};
