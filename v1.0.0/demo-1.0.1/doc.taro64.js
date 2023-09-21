import{d as p,r as h,b as r,k as t,w as n,aq as e,e as a,o as d,l as s}from"./style_icon.js";const j={class:"markdown-body"},o=e(`<h1>Skeleton 骨架屏</h1><h3>介绍</h3><p>在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Skeleton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Skeleton</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-skeleton"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"250px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"15px"'),s(),a("span",{class:"hljs-attr"},"animated"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-skeleton"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g=a("h3",null,"传入多行",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-skeleton"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"250px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"15px"'),s(),a("span",{class:"hljs-attr"},"title"),s(),a("span",{class:"hljs-attr"},"animated"),s(),a("span",{class:"hljs-attr"},"row"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-skeleton"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u=a("h3",null,"显示头像",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-skeleton"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"250px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"15px"'),s(),a("span",{class:"hljs-attr"},"title"),s(),a("span",{class:"hljs-attr"},"animated"),s(),a("span",{class:"hljs-attr"},"avatar"),s(),a("span",{class:"hljs-attr"},"avatarSize"),s("="),a("span",{class:"hljs-string"},'"60px"'),s(),a("span",{class:"hljs-attr"},"row"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-skeleton"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x=a("h3",null,"标题段落圆角风格",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-skeleton"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"250px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"15px"'),s(),a("span",{class:"hljs-attr"},"animated"),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-skeleton"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=a("h3",null,"图片组合",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"pic-compose"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-skeleton"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"250px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"15px"'),s(),a("span",{class:"hljs-attr"},"title"),s(),a("span",{class:"hljs-attr"},"animated"),s(),a("span",{class:"hljs-attr"},"row"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-skeleton"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-skeleton"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"250px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"15px"'),s(),a("span",{class:"hljs-attr"},"title"),s(),a("span",{class:"hljs-attr"},"animated"),s(),a("span",{class:"hljs-attr"},"row"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-skeleton"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v=a("pre",null,[a("code",{class:"language-css"},[s(`<style>
`),a("span",{class:"hljs-selector-class"},".pic-compose"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: space-between;
  `),a("span",{class:"hljs-selector-class"},".item"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"47%"),s(`;
  }
}
</style>
`)])],-1),w=a("h3",null,"显示子组件",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"content"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checked"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-skeleton"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"250px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"15px"'),s(),a("span",{class:"hljs-attr"},"title"),s(),a("span",{class:"hljs-attr"},"animated"),s(),a("span",{class:"hljs-attr"},"avatar"),s(),a("span",{class:"hljs-attr"},"row"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":loading"),s("="),a("span",{class:"hljs-string"},'"!checked"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"container"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-avatar"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"50"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
            `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"'),s(`
          />`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-avatar"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"right-content"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s("cubui"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"desc"'),s(`
            >`)]),s(`一套轻量级移动端Vue组库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</view
          >
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-skeleton"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" checked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        checked
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-switch"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"16px"),s(),a("span",{class:"hljs-number"},"8px"),s(),a("span",{class:"hljs-number"},"0"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".container"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  }
  `),a("span",{class:"hljs-selector-class"},".right-content"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"19px"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-family"),s(`: PingFangSC;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"flex-direction"),s(`: column;
  }
  `),a("span",{class:"hljs-selector-class"},".title"),s(` {
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"14px"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"51"),s(", "),a("span",{class:"hljs-number"},"51"),s(", "),a("span",{class:"hljs-number"},"51"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
  }
  `),a("span",{class:"hljs-selector-class"},".desc"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"13px"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"154"),s(", "),a("span",{class:"hljs-number"},"155"),s(", "),a("span",{class:"hljs-number"},"157"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),_=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>loading</td><td>是否显示骨架屏</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>width</td><td>每行宽度</td><td>string</td><td><code class="">default</code></td></tr><tr><td>height</td><td>每行高度</td><td>string</td><td><code class="">15px</code></td></tr><tr><td>animated</td><td>是否开启骨架屏动画</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>avatar</td><td>是否显示头像</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>avatar-shape</td><td>头像形状：正方形/圆形</td><td>string</td><td><code class="">round</code></td></tr><tr><td>avatar-size</td><td>头像大小</td><td>string</td><td><code class="">50px</code></td></tr><tr><td>round</td><td>标题/段落是否采用圆角风格</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>row</td><td>设置段落行数</td><td>string</td><td><code class="">1</code></td></tr><tr><td>title</td><td>是否显示段落标题</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>骨架屏显示内容</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-skeleton-content-avatar-background-color</td><td><em>#efefef</em></td></tr><tr><td>--cub-skeleton-content-line-background-color</td><td><em>#efefef</em></td></tr><tr><td>--cub-skeleton-animation-background-color</td><td><em>linear-gradient(90deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 100%, 0.5) 50%, hsla(0, 0%, 100%, 0) 80%)</em></td></tr></tbody></table>',9),A={},P="",X=p({__name:"doc.taro",setup(W,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(B,Z)=>{const l=h("demo-block");return d(),r("div",j,[o,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2tlbGV0b24gd2lkdGg9IjI1MHB4IiBoZWlnaHQ9IjE1xA5hbmltYXRlZD4gPC/MNT4KPC/KUg=="},{default:n(()=>[i]),_:1}),g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2tlbGV0b24gd2lkdGg9IjI1MHB4IiBoZWlnaHQ9IjE1xA50aXRsZSBhbmltYXRlZCByb3c9IjMiPiA8L8xDPgo8L8pg"},{default:n(()=>[m]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2tlbGV0b24gd2lkdGg9IjI1MHB4IiBoZWlnaHQ9IjE1xA50aXRsZSBhbmltYXRlZCBhdmF0YXLHB1NpemU9IjbFNnJvdz0iMyI+IDwvzFw+Cjwvynk="},{default:n(()=>[b]),_:1}),x,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2tlbGV0b24gd2lkdGg9IjI1MHB4IiBoZWlnaHQ9IjE1xA5hbmltYXRlZCByb3VuZD48L8w6Pgo8L8pX"},{default:n(()=>[y]),_:1}),I,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDx2aWV3IGNsYXNzPSJwaWMtY29tcG9zZSLEHSAgPGN1Yi1za2VsZXRvbiB3aWR0aD0iMjUwcHgiIGhlaWdodD0iMTXEDnRpdGxlIGFuaW1hdGVkIHJvdz0iMyLIWml0ZW0iPiA8L8xQ32PfY99jymM8L+QA5D4KPC/qAPk="},{default:n(()=>[k,v]),_:1}),w,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDx2aWV3IGNsYXNzPSJjb250ZW50IsQZICA8Y3ViLXN3aXRjaCB2LW1vZGVsPSJjaGVja2VkIiAvzCVrZWxldG9uIHdpZHRoPSIyNTBweCIgaGVpZ2h0PSIxNcQOdGl0bGUgYW5pbWF0ZWQgYXZhdGFyIHJvdz0iMyIgOmxvYWRpbmc9IiHIY8Zh8wCjYWluZXLJH+cAhMdQc2l6ZT0iNTDLHyAgPGltZ8sPICBzcmM9Imh0dHBzOi8vaW1nMTQuMzYwYnV5aW1nLmNvbS9pbWFnZXRvb2xzL2pmcy90MS8xNjc5MDIvMi84NzYyLzc5MTM1OC82MDM3NDJkN0U5YjQyNzVlMy9lMDlkOGY5YThiZjRjMGVmLnBuZyLLfOcBN8QBPC/qALjLFuwA7nLkAUEt7gGX0yflAVsiPmN1YnVpPC/EGtkrZGVzY+wAkCAgPuS4gOWll+i9u+mHj+e6p+enu+WKqOerr1Z1Zee7hOW6k++8jOaPkOS+m+S4sOWvjOeahOWfuuehgOe7hOS7tuWSjOS4muWKocYP77yM5biu5Yqp5byA5Y+R6ICF5b+r6YCf5pCt5bu6xl3lupTnlKjjgILmAK3rAI/sAR7sAMjMDuYBOOgCdMQUyB48L+oC2wo8c2NyaXB0IGxh5AJWdHPlAT9pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvFbnNldHVwKCnHDiAgY29uc3Qg5wKkID3ESShmYWxzZSnEQ8QBcmV0dXJuyTEgyC3HEH3GKH0KxQs8L+YAp+UAsXR5bOUDlS7rA3rGR2Rpc3BsYXk6IGZsZXjGQW1hcmdpbjogMCAxNnB4IDhweCAwxBrEWS7pAyfYQMUm7QJfxyrGVy1sZWZ0OiAxOXDHbmZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDxh3RXiDFCi1kaXJlY3Rpb246IGNvbHVtbsl65gQNxnLFW+QDuDogMTTIcGNvbG9yOiByZ2JhKDUxLCDIBDHlAWfFROQCy+4AtXRvcDogMTDtALTHWTPUWTE1NCwgMTU1xAU3ylw8L+cBig=="},{default:n(()=>[f]),_:1}),_])}}});export{X as default,P as excerpt,A as frontmatter};
