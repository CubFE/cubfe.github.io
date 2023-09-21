import{d as a,b as t,aq as n,o as l}from"./style_icon.js";const p={class:"markdown-body"},e=n(`<h1>Drag 拖拽</h1><h3>介绍</h3><p>实现可拖拽的任意元素</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Drag</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Drag</span>);
</code></pre><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-drag</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>可点击，可拖拽<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-drag</span>&gt;</span>
</code></pre><h3>限制拖拽方向</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>只能在X轴拖动<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-drag</span>&gt;</span>
</code></pre><h3>限制拖拽方向</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>只能在Y轴拖动<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-drag</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">direction</td><td style="text-align:left;">拖拽元素的拖拽方向限制，<strong>x</strong>/<strong>y</strong>/<strong>all</strong> 三选一</td><td style="text-align:left;">string</td><td style="text-align:left;"><code class="">all</code></td></tr></tbody></table>`,14),c=[e],d={},i="",j=a({__name:"doc.taro",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(l(),t("div",p,c))}});export{j as default,i as excerpt,d as frontmatter};
