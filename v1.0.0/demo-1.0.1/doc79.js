import{d as t,b as a,aq as n,o as e}from"./style_icon.js";const l={class:"markdown-body"},c=n(`<h1>TimeSelect 配送时间</h1><h3>介绍</h3><p>用于 xxx</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TimeSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TimeSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TimeSelect</span>);
</code></pre><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-time-select</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-time-select</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> state = <span class="hljs-title function_">reactive</span>({

    });

    <span class="hljs-keyword">return</span> { ...<span class="hljs-title function_">toRefs</span>(state) };
  }
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>电梯区域的高度</td><td>Number、String</td><td><code class="">200px</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click-item</td><td>点击内容</td><td>key: string, item: { id: 0, name: &#39;&#39; }</td></tr></tbody></table>`,13),p=[c],i={},m="",j=t({__name:"doc",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(e(),a("div",l,p))}});export{j as default,m as excerpt,i as frontmatter};
