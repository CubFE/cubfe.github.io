import{d as r,r as p,b as h,k as l,w as n,aq as c,e as a,o as d,l as s}from"./style_icon.js";const j={class:"markdown-body"},o=c(`<h1>watermark 水印</h1><h3>介绍</h3><p>页面上添加特定的文字或图案，可用于防止信息盗用。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Watermark</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Watermark</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"wrap"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showTextMark"'),s(">")]),s("文字水印"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showImageMark"'),s(">")]),s("图片水印"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
`)])],-1),m=a("h3",null,"局部用法",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),b=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>水印的宽度</td><td>number</td><td><code class="">120</code></td></tr><tr><td>height</td><td>水印的高度</td><td>number</td><td><code class="">64</code></td></tr><tr><td>rotate</td><td>水印绘制时，旋转的角度</td><td>number</td><td><code class="">-22</code></td></tr><tr><td>image</td><td>图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印</td><td>string</td><td>-</td></tr><tr><td>image-width</td><td>图片宽度</td><td>number</td><td><code class="">120</code></td></tr><tr><td>image-height</td><td>图片高度</td><td>number</td><td><code class="">64</code></td></tr><tr><td>z-index</td><td>追加的水印元素的 z-index</td><td>number</td><td><code class="">2000</code></td></tr><tr><td>content</td><td>水印文字内容</td><td>string</td><td>-</td></tr><tr><td>font-color</td><td>水印文字颜色</td><td>string</td><td><code class="">rgba(0, 0, 0, .15)</code></td></tr><tr><td>font-size</td><td>文字大小</td><td>string | number</td><td><code class="">16</code></td></tr><tr><td>gap-x</td><td>水印之间的水平间距</td><td>number</td><td><code class="">24</code></td></tr><tr><td>gap-y</td><td>水印之间的垂直间距</td><td>number</td><td><code class="">48</code></td></tr><tr><td>full-page</td><td>是否覆盖整个页面</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>font-family</td><td>水印文字字体</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-watermark-z-index</td><td><em>2000</em></td></tr></tbody></table>',7),y={},A="",x=r({__name:"doc.taro",setup(u,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(k,w)=>{const t=p("demo-block");return d(),h("div",j,[o,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBjbGFzcz0id3JhcCLEGsccYnV0dG9uIEBjbGljaz0ic2hvd1RleHRNYXJrIj7mloflrZfmsLTljbA8L8ov3kBJbWFnZcZB5Zu+54mH3UF3YXRlcm1hcmsgdi1pZj0iIWZsYWci6ACvxBkxIiA6ei1pbmRleD0iMSIgY29udGVudD0ixD91acZCLcQqIj7GZclU1GjFEyDHbsVtxxLNc8cUOmnkAM0td2lkdGg9IjYwzxhoZWlnaHQ9IjIzyRnrAKrNLD0iaW1nU3Jjxhb0AKnGE+QBrT4KPC/qAcY8c2NyaXB0IGxhbmc9InRz5QG/aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB7xXNzZXR1cCgpxw4g5AFHc3Qg5gCVID3ESCjHGiAgJy8vaW1nMTEuMzYwYnV5aW1nLmNvbS/lAMl0b29scy9qZnMvdDEvNTczNDUvNi8yMDA2OS84MDE5LzYyYjk5NWNkRWQ5NmZlZjAzLzUxZDMzMDJkZmVjY2QxZDIucG5nJ8dsKeQAsOoAj+QBkOcAjWZhbHNlzx/sAp8gPSAoKSA9PukA0SDFPi52YWx1ZSA9IMVAyD990kjpAqffSSB0cnXSSHJldHVybiB75wFBLO0Am8YOyWEsxVDIPH0KxUc8L+YB1+QB4HR5bOUDri7kA57nAIflAnM6IDEwMCXGOOYCbDogMjQwcHjGE2Rpc3BsYXk6IGJsb2NrxhRiYWNrZ3JvdW5kOiAjZmZmxBbEc8ZcPuQAsNZixSXlAv3WICAgdG9wOiA1x37FL+sEAsY0bWFyZ2luLXLmAKsxySw8L+cA5Q=="},{default:n(()=>[i]),_:1}),m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCBjbGFzcz0id3JhcCLEGiAgPGltZyA6c3JjPSJzcmMiIGFsdD0iIiAvxx7EOndhdGVybWFyayA6ZnVsbFBhZ2U9ImZhbHNlIiBmb250LWNvbG9yPSIjZmEyYzE5IiBjb250ZW50PSLEPnVpIj48L81IxFzGE+QAlT4KPC/qAK48c2NyaXB0IGxhbmc9InRz5QCnaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QC5c2V0dXAoKccOIOQAk3N0IHNyYyA9xEUoJ2h0dHBzOi8vb3NzLm5ldGNvbmNlcHRzLmNuL3dlYnNpdGUvYXNzZXRzL21lZGlhL3dhcC9ibG9nLXdhcC1iZy0xLmpwZycp5ACBxAFyZXR1cm4ge8VjfcYWfQogxAs8L+YA0+QA3HR5bOUBki7kAYLnAJ13aWR0aDogMTAwJcY4aGVpZ2h0OiAyNDBweMYTZGlzcGxheTogYmxvY2vGFGJhY2tncm91bmQ6ICNmZmbEFsRzxlw+IOQB2dVifeQAk+YAig=="},{default:n(()=>[g]),_:1}),b])}}});export{x as default,A as excerpt,y as frontmatter};
