import{d as t,b as a,aq as n,o as l}from"./style_icon.js";const e={class:"markdown-body"},p=n(`<h1>Backtop 返回顶部</h1><h3>介绍</h3><p>提供较长的页面快捷返回顶部功能。</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Backtop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Backtop</span>);
</code></pre><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cub-backtop</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in 24&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;test&quot;</span>&gt;</span>{{index}}<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">cub-backtop</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.test</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">12px</span> <span class="hljs-number">0</span> <span class="hljs-number">12px</span> <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>API</h3><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>滚动区域的高度</td><td>string</td><td><code class="">100vh</code></td></tr><tr><td>bottom</td><td>距离页面底部距离</td><td>number</td><td><code class="">20</code></td></tr><tr><td>right</td><td>距离页面右侧距离</td><td>number</td><td><code class="">10</code></td></tr><tr><td>distance</td><td>页面垂直滚动多高后出现</td><td>number</td><td><code class="">200</code></td></tr><tr><td>z-index</td><td>设置组件页面层级</td><td>number</td><td><code class="">10</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>按钮点击时触发事件</td><td><code class="">event: MouseEvent</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>content</td><td>滚动容器中包含的内容</td></tr><tr><td>icon</td><td>返回到顶部，按钮内容</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-backtop-border-color</td><td><em>#e0e0e0</em></td></tr></tbody></table>`,18),c=[p],j={},i="",m=t({__name:"doc.taro",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,o)=>(l(),a("div",e,c))}});export{m as default,i as excerpt,j as frontmatter};
