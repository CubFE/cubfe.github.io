import{d as h,r as d,b as p,k as l,w as n,aq as c,e as a,l as s,o as r}from"./style_icon.js";const o={class:"markdown-body"},j=c(`<h1>image</h1><h3>介绍</h3><p>增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>();
</code></pre><h3>基础用法</h3><p>基础用法与原生 <code class="">img</code> 标签一致，可以设置 <code class="">src</code>、<code class="">width</code>、<code class="">height</code>、<code class="">alt</code> 等原生属性。</p>`,7),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(`
    `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg"'),s(`
    `),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-image"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),i=a("h3",null,"填充模式",-1),m=a("p",null,[s("通过 "),a("code",{class:""},"fit"),s(" 属性可以设置图片填充模式，等同于原生的 "),a("code",{class:""},"object-fit"),s(" 属性，可选值见下方表格。")],-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(`
    `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg"'),s(`
    `),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"fit"),s("="),a("span",{class:"hljs-string"},'"contain"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b=a("h3",null,"图片位置",-1),w=a("p",null,[s("通过 "),a("code",{class:""},"position"),s(" 属性可以设置图片位置，结合 "),a("code",{class:""},"fit"),s(" 属性使用，等同于原生的 "),a("code",{class:""},"object-position"),s(" 属性。")],-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(`
    `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg"'),s(`
    `),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"fit"),s("="),a("span",{class:"hljs-string"},'"contain"'),s(`
    `),a("span",{class:"hljs-attr"},"postion"),s("="),a("span",{class:"hljs-string"},'"left"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=a("h3",null,"圆形图片",-1),y=a("p",null,[s("通过 "),a("code",{class:""},"round"),s(" 属性可以设置图片变圆，注意当图片宽高不相等且 "),a("code",{class:""},"fit"),s(" 为 "),a("code",{class:""},"contain"),s(" 或 "),a("code",{class:""},"scale-down"),s(" 时，将无法填充一个完整的圆形。")],-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(`
    `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg"'),s(`
    `),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"round"),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C=a("h3",null,"加载中图片",-1),f=a("p",null,[s("Image 组件提供了默认的加载中提示，支持通过 "),a("code",{class:""},"loading"),s(" 插槽自定义内容。")],-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},"show-loading"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"loading"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Loading"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-image"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Loading"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Loading"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=a("h3",null,"加载失败",-1),M=a("p",null,[s("Image 组件提供了默认的加载失败提示，支持通过 "),a("code",{class:""},"error"),s(" 插槽自定义内容。")],-1),V=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://x"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},"show-error"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"error"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"CloseCircle"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"16px"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"circleClose"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-image"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"CloseCircle"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"CloseCircle"),s(` }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=a("h3",null,"懒加载",-1),Z=a("p",null,"刷新后滚动 Demo 页面，在控制台中查看图片请求时间。",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},`"src + '?t=1'"`),s(),a("span",{class:"hljs-attr"},"lazy-load"),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"200"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100%"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-image"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},`"src + '?t=2'"`),s(),a("span",{class:"hljs-attr"},"lazy-load"),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"200"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100%"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-image"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},`"src + '?t=3'"`),s(),a("span",{class:"hljs-attr"},"lazy-load"),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"200"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100%"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-image"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},`"src + '?t=4'"`),s(),a("span",{class:"hljs-attr"},"lazy-load"),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"200"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100%"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-image"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-image"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},`"src + '?t=5'"`),s(),a("span",{class:"hljs-attr"},"lazy-load"),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"200"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100%"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-image"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" src = "),a("span",{class:"hljs-title function_"},"ref"),s(`(
        `),a("span",{class:"hljs-string"},"'https:https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`
      );
      `),a("span",{class:"hljs-keyword"},"return"),s(` { src };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片链接</td><td>string</td><td>-</td></tr><tr><td>fit</td><td>图片填充模式，等同于原生的 <code class="">object-fit</code> 属性</td><td>ImageFit</td><td><code class="">fill</code></td></tr><tr><td>position</td><td>图片位置，等同于原生的 <code class="">object-position</code> 属性</td><td>ImagePosition</td><td><code class="">center</code></td></tr><tr><td>alt</td><td>替代文本</td><td>string</td><td>-</td></tr><tr><td>width</td><td>宽度，默认单位 <code class="">px</code></td><td>string</td><td>-</td></tr><tr><td>height</td><td>高度，默认单位 <code class="">px</code></td><td>string</td><td>-</td></tr><tr><td>round</td><td>是否显示为圆角</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>radius</td><td>圆角大小</td><td>string | number</td><td>-</td></tr><tr><td>show-error</td><td>是否展示图片加载失败</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>show-loading</td><td>是否展示加载中图片</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>lazy-load<code class="">4.0.8</code></td><td>懒加载</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>ImageFit 图片填充模式</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>contain</td><td>保持宽高缩放图片，使图片的长边能完全显示出来</td></tr><tr><td>cover</td><td>保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边</td></tr><tr><td>fill</td><td>拉伸图片，使图片填满元素</td></tr><tr><td>none</td><td>保持图片原有尺寸</td></tr><tr><td>scale-down</td><td>取 <code class="">none</code> 或 <code class="">contain</code> 中较小的一个</td></tr></tbody></table><h3>ImagePosition 图片位置</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>center</td><td>居中对齐</td></tr><tr><td>top</td><td>顶部对齐</td></tr><tr><td>right</td><td>右侧对齐</td></tr><tr><td>bottom</td><td>底部对齐</td></tr><tr><td>left</td><td>左侧对齐</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>loading</td><td>自定义加载中的提示内容</td></tr><tr><td>error</td><td>自定义记载失败的提示内容</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击图片时触发</td><td>event: Event</td></tr><tr><td>load</td><td>图片加载完后触发</td><td>--</td></tr><tr><td>error</td><td>图片加载失败后触发</td><td>--</td></tr></tbody></table>',11),A={},R="",B=h({__name:"doc",setup(L,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(z,N)=>{const t=d("demo-block");return r(),p("div",o,[j,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UKICAgIHNyYz0iaHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnIsVQd2lkdGg9IjEwMMYQaGVpZ2h0yRE+PC/pAIA+Cjwv6gCa"},{default:n(()=>[g]),_:1}),i,m,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UKICAgIHNyYz0iaHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnIsVQd2lkdGg9IjEwMMYQaGVpZ2h0yxFmaXQ9ImNvbnRhaW7EEi8+Cjwv6gCh"},{default:n(()=>[u]),_:1}),b,w,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UKICAgIHNyYz0iaHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnIsVQd2lkdGg9IjEwMMYQaGVpZ2h0yxFmaXQ9ImNvbnRhaW7GEnBvc3Rpb249ImxlZnTEEy8+Cjwv6gC0"},{default:n(()=>[v]),_:1}),I,y,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2UKICAgIHNyYz0iaHR0cHM6Ly9vc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanBnIsVQd2lkdGg9IjEwMMYQaGVpZ2h0yxFyb3VuZAogIC8+Cjwv6gCZ"},{default:n(()=>[_]),_:1}),C,f,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2Ugd2lkdGg9IjEwMCIgaGVpZ2h0xw1zaG93LWxvYWRpbmfENCAgyUMgI80YICA8TMYQyU42cHjLT8UObmFtZT0ixzkiIC/HVC/tAJgv6QCZPgrMGzxzY3JpcHQgbGFuZz0idHMixC5pbXBvcnQgeyDIfn0gZnJvbSAnQGN1YmZlL2ljb25zLXZ1ZSc7CiAgZXjFLmRlZmF1bHQge8V/Y29tcG9uZW50czrMSAogIH07CjwvxnY+Cg=="},{default:n(()=>[x]),_:1}),H,M,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW1hZ2Ugc3JjPSJodHRwczovL3giIHdpZHRoPSIxMDAiIGhlaWdodMcNc2hvdy1lcnJvcsRCICDJUSAjyxYgIDxDbG9zZUNpcmNsZclONnB4y0/FDm5hbWU9ImPFKMUzIiAvx1ov7QCsL+kArT4KzBs8c2NyaXB0IGxhbmc9InRzIsQuaW1wb3J0IHsg7ACGfSBmcm9tICdAY3ViZmUvaWNvbnMtdnVlJzsKICBleMUyZGVmYXVsdCB75QCDY29tcG9uZW50czrQTAogIH07Cjwvxn4+Cg=="},{default:n(()=>[V]),_:1}),Y,Z,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw9pbWFnZSA6c3JjPSJzcmMgKyAnP3Q9MSciIGxhenktbG9hZCBoZWlnaHQ9IjIwMCIgd2lkdGg9IjEwMCUiPjwvyUTFYcUPyGLfb8tvMt9v32/fb9FvM99v32/fb9FvNN9v32/fb9FvNd9v32/EYjwv6gI3PHNjcmlwdMQjaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QCnc2V0dXAoKccOICBjb25zdCDkAKw9xEUoxxcgICdodHRwczrGBi8vb3NzLm5ldGNvbmNlcHRzLmNuL3dlYnNpdGUvYXNzZXRzL21lZGlhL3dhcC9ibG9nLXdhcC1iZy0xLmpwZyfHVinkAJfEAXJldHVybiB7xXl9xhZ9CiDECzwv6ADf"},{default:n(()=>[k]),_:1}),W])}}});export{B as default,R as excerpt,A as frontmatter};
