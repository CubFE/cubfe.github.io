import{d as t,b as a,aq as n,o as l}from"./style_icon.js";const p={class:"markdown-body"},e=n(`<h1>Toast 吐司</h1><h3>介绍</h3><p>用于轻提示。</p><blockquote><p>当前组件 Taro 环境暂不支持函数式调用，推荐使用 Taro.API 使用原生组件 <a href="https://taro-docs.kakusoft.com/taro/docs/apis/ui/interaction/showToast">https://taro-docs.kakusoft.com/taro/docs/apis/ui/interaction/showToast</a></p></blockquote><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
</code></pre><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-toast</span>
  <span class="hljs-attr">:msg</span>=<span class="hljs-string">&quot;page.state.msg&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;page.state.show&quot;</span>
  <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;page.state.type&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;page.methods.onClosed&quot;</span>
  <span class="hljs-attr">:cover</span>=<span class="hljs-string">&quot;page.state.cover&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text 文字提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;text&#39;,&#39;网络失败，请稍后再试~&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title 标题文字&quot;</span>
  <span class="hljs-attr">is-link</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;text&#39;, &#39;网络失败，请稍后再试~&#39;,false,&#39;标题文字&#39;)&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text 自定义位置&quot;</span>
  <span class="hljs-attr">is-link</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;text&#39;, &#39;自定义位置&#39;,false,&#39;&#39;,&#39;20%&#39;,false)&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Success 成功提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;success&#39;,&#39;成功提示&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Error 失败提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;fail&#39;,&#39;失败提示&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Warning 警告提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;warn&#39;,&#39;警告提示&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Loading 加载提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;loading&#39;,&#39;加载中&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Loading 带白色背景遮罩&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;loading&#39;,&#39;加载中&#39;,true)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> page = {
      <span class="hljs-attr">state</span>: <span class="hljs-title function_">reactive</span>({
        <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;toast&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;text&#39;</span>,
        <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">bottom</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">center</span>: <span class="hljs-literal">true</span>
      }),
      <span class="hljs-attr">methods</span>: {
        <span class="hljs-attr">openToast</span>: <span class="hljs-function">(<span class="hljs-params">type: string, msg: string, cover: boolean = <span class="hljs-literal">false</span></span>) =&gt;</span> {
          page.<span class="hljs-property">state</span>.<span class="hljs-property">show</span> = <span class="hljs-literal">true</span>;
          page.<span class="hljs-property">state</span>.<span class="hljs-property">msg</span> = msg;
          page.<span class="hljs-property">state</span>.<span class="hljs-property">type</span> = type;
          page.<span class="hljs-property">state</span>.<span class="hljs-property">cover</span> = cover;
          page.<span class="hljs-property">state</span>.<span class="hljs-property">title</span> = title;
          page.<span class="hljs-property">state</span>.<span class="hljs-property">bottom</span> = bottom;
          page.<span class="hljs-property">state</span>.<span class="hljs-property">center</span> = center;
        },
        <span class="hljs-attr">onClosed</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;closed&#39;</span>)
      }
    };
    <span class="hljs-keyword">return</span> {
      page
    };
  }
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>msg</td><td>消息文本内容,支持传入 HTML</td><td>string | VNode</td><td><code class="">&quot;&quot;</code></td></tr><tr><td>duration</td><td>展示时长（毫秒）<br>值为 0 时，toast 不会自动消失（loading 类型默认为 0）</td><td>number</td><td><code class="">2000</code></td></tr><tr><td>title</td><td>标题</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>center</td><td>是否展示在页面中部（为 false 时展示在底部）</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bottom</td><td>距页面底部的距离（像素或者百分比），option.center 为 false 时生效</td><td>string</td><td><code class="">&quot;30px&quot; </code></td></tr><tr><td>text-align-center</td><td>多行文案是否居中</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>bg-color</td><td>背景颜色（透明度）</td><td>string</td><td>&quot;rgba(0, 0, 0, 0.8)&quot;</td></tr><tr><td>custom-class</td><td>自定义类名</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>icon</td><td>自定义图标，<strong>直接传入 Component 或者 h 函数</strong></td><td>Component</td><td>-</td></tr><tr><td>size</td><td>文案尺寸，<strong>small</strong>/<strong>base</strong>/<strong>large</strong>三选一</td><td>string</td><td><code class="">&quot;base&quot;</code></td></tr><tr><td>cover</td><td>是否显示遮罩层，loading 类型默认显示</td><td>boolean</td><td>loading 类型 true/<code class="">其他类型false</code></td></tr><tr><td>cover-color</td><td>遮罩层颜色，默认透明</td><td>string</td><td>&quot;rgba(0,0,0,0)&quot;</td></tr><tr><td>loading-rotate</td><td>loading 图标是否旋转，仅对 loading 类型生效</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>on-close</td><td>关闭时触发的事件</td><td>function</td><td><code class="">null</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭提示</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>toast-style</td><td>提示框 style</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>toast-class</td><td>提示框 class</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>type</td><td>弹框类型 可选值（text、success、fail、warn、loading）</td><td>string</td><td>&quot;&quot;</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-toast-title-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-toast-text-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-toast-font-color</td><td><em>var(--cub-white)</em></td></tr><tr><td>--cub-toast-inner-padding</td><td><em>24px 30px</em></td></tr><tr><td>--cub-toast-inner-bg-color</td><td><em>rgba(0, 0, 0, 0.8)</em></td></tr><tr><td>--cub-toast-inner-border-radius</td><td><em>12px</em></td></tr><tr><td>--cub-toast-cover-bg-color</td><td><em>rgba(0, 0, 0, 0)</em></td></tr></tbody></table>`,16),c=[e],i={},j="",g=t({__name:"doc.taro",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,d)=>(l(),a("div",p,c))}});export{g as default,j as excerpt,i as frontmatter};
