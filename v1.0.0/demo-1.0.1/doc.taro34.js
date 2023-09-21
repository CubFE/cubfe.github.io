import{d as o,r as p,b as h,k as l,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const r={class:"markdown-body"},i=c(`<h1>Icon 图标</h1><h3>介绍</h3><p>独立安装 @cubfe/icons-vue-taro 图标组件包。基于字体的图标集。</p><h3>安装</h3><pre><code class="language-bash">npm i --save @cubfe/icons-vue-taro
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">IconFont</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubfe/icons-vue-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">IconFont</span>);
</code></pre><h3>方式一：组件方式使用</h3><p>可选项见 @cubfe/icons-vue-taro/dist/types/index.d.ts</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Add</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubfe/icons-vue-taro&#39;</span>;
<span class="hljs-comment">// template</span>
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Add</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> /&gt;</span></span>;
</code></pre><h3>方式二：名称方式使用</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">IconFont</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubfe/icons-vue-taro&#39;</span>;
</code></pre><p><code class="">Icon</code> 的 <code class="">name</code> 属性支持传入图标名称或图片链接。</p>`,12),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"shop"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"gift"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(`
    `),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"40"'),s(`
    `),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"https://oss.netconcepts.cn/website/wap/job-wap-icon-1.png"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),m=a("h4",null,"图标颜色",-1),g=a("p",null,[a("code",{class:""},"Icon"),s(" 的 "),a("code",{class:""},"color"),s(" 属性用来设置图标的颜色。")],-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"shop"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fa2c19"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"shop"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#64b578"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"gift"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fa2c19"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f=a("h4",null,"图标大小",-1),b=a("p",null,[a("code",{class:""},"Icon"),s(" 的 "),a("code",{class:""},"size"),s(" 属性用来设置图标的尺寸大小，默认单位为 "),a("code",{class:""},"px"),s("。")],-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"shop"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"shop"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"shop"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"16"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_=a("h4",null,"通用动态图标",-1),w=a("p",null,[s("添加指定的 class 类就可以实现图片动态效果，默认是播放 1 次，添加 "),a("code",{class:""},"cub-icon-am-infinite"),s(" 类即可实现循环播放。通过设置 css 可实现动画启动前的延迟间隔、动画在多久时间内完成")],-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"dou-arrow-up"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-icon-am-jump cub-icon-am-infinite"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"star-fill-n"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-icon-am-blink cub-icon-am-infinite"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"refresh2"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-icon-am-rotate cub-icon-am-infinite"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart-fill"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-icon-am-breathe cub-icon-am-infinite"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"microphone"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-icon-am-flash cub-icon-am-infinite"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"download"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-icon-am-bounce cub-icon-am-infinite"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"IconFont"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"message"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-icon-am-shake cub-icon-am-infinite"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"IconFont"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-icon"),s(` {
    `),a("span",{class:"hljs-attr"},"--animate-duration"),s(": "),a("span",{class:"hljs-number"},"1s"),s(`;
    `),a("span",{class:"hljs-attr"},"--animate-delay"),s(": "),a("span",{class:"hljs-number"},"0s"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),F=c(`<h4>自定义图标</h4><p>如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。</p><blockquote><p>方案一 引入 <a href="https://www.iconfont.cn/">iconfont</a> 推荐此方案</p></blockquote><p>第一步：首先在 <a href="https://www.iconfont.cn/">iconfont</a> 生成你自定义的 Icon 文件下载存放至本地项目 <a href="https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&amp;helptype=code">详细使用说明</a></p><pre><code class="language-bash">/assets/font/demo.css
/assets/font/demo_index.html
/assets/font/iconfont.css
/assets/font/iconfont.js
/assets/font/iconfont.json
/assets/font/iconfont.ttf
/assets/font/iconfont.woff
/assets/font/iconfont.woff2
</code></pre><p>第二步：项目入口文件 main.js 引用 <code class="">iconfont.css</code></p><pre><code class="language-javascript"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./assets/font/iconfont.css&#39;</span>;
</code></pre><p>第三步：</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 
  font-class-name 指定类名为默认 iconfont
  class-prefix 指定默认 icon
  name 值根据 iconfont.css 中值对应填写 
--&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">IconFont</span> <span class="hljs-attr">font-class-name</span>=<span class="hljs-string">&quot;iconfont&quot;</span> <span class="hljs-attr">class-prefix</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;close&quot;</span> /&gt;</span>
</code></pre><blockquote><p>方案二 第三方自定义字体库</p></blockquote><pre><code class="language-css"><span class="hljs-comment">/* 引入第三方或自定义的字体图标样式 */</span>
<span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&#39;./my-icon.ttf&#39;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&#39;truetype&#39;</span>);
}

<span class="hljs-selector-class">.my-icon</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
}

<span class="hljs-selector-class">.my-icon-extra</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&#39;\\e626&#39;</span>;
}
</code></pre><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 
  font-class-name 指定类名为默认 my-icon
  class-prefix 指定默认 my-icon
--&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">IconFont</span> <span class="hljs-attr">font-class-name</span>=<span class="hljs-string">&quot;my-icon&quot;</span> <span class="hljs-attr">class-prefix</span>=<span class="hljs-string">&quot;my-icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;extra&quot;</span> /&gt;</span>
</code></pre><p>自定义 iconfont <a href="https://github.com/cubfe/cubui-demo/blob/master/vite/src/App.vue#L15">Demo 示例</a></p><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>图标名称或图片链接</td><td>string</td><td>-</td></tr><tr><td>color</td><td>图标颜色</td><td>string</td><td>-</td></tr><tr><td>size</td><td>图标大小，如 <code class="">20px</code> <code class="">2em</code> <code class="">2rem</code></td><td>string | object</td><td>-</td></tr><tr><td>font-class-name</td><td>自定义 <code class="">icon</code> 字体基础类名</td><td>string</td><td><code class="">cubui-iconfont</code></td></tr><tr><td>class-prefix</td><td>自定义 <code class="">icon</code> 类名前缀，用于使用自定义图标</td><td>string</td><td><code class="">cub-icon</code></td></tr><tr><td>tag</td><td>小程序标签</td><td>string</td><td><code class="">view</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击图标时触发</td><td>event: Event</td></tr></tbody></table>`,18),X={},q="",C=o({__name:"doc.taro",setup(v,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(x,k)=>{const n=p("demo-block");return j(),h("div",r,[i,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxJY29uRm9udCBuYW1lPSJzaG9wIj48L8gX1CRnaWZ02SQKICAgIHNpemU9IjQwIsUOxjZodHRwczovL29zcy5uZXRjb25jZXB0cy5jbi93ZWJzaXRlL3dhcC9qb2Itd2FwLWljb24tMS5wbmfERc1uPC/qAMI="},{default:t(()=>[d]),_:1}),m,g,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxJY29uRm9udCBuYW1lPSJzaG9wIiBjb2xvcj0iI2ZhMmMxOSI+PC/IJ980PSIjNjRiNTc43zQiZ2lmdN5oPC/qAKg="},{default:t(()=>[u]),_:1}),f,b,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxJY29uRm9udCBuYW1lPSJzaG9wIj48L8gX2SQgc2l6ZT0iMjTfLs0uMTbOLjwv6gCM"},{default:t(()=>[I]),_:1}),_,w,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxJY29uRm9udCBuYW1lPSJkb3UtYXJyb3ctdXAiIGNsYXNzPSJjdWItaWNvbi1hbS1qdW1wIMwRaW5maW5pdGUiPjwvyE3UWnN0YXItZmlsbC1u1VlibGlua99a1lpyZWZyZXNoMtVXcm90YXRl31jWWGhlYXJ05QCz1VpicmVhdGjfW9dbbWljcm9waG9uZdVbZmxhc2jfWdZZZG93bmxvYWTVV2JvdW5j/wCx11htZXNzYWf2AK5zaGFr31bFVjwv6gJ6CjxzdHls5QKDLsg6IHsKICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogMXM70BxlbGF5OiAwxRl9Cjwvx1A="},{default:t(()=>[y]),_:1}),F])}}});export{C as default,q as excerpt,X as frontmatter};
