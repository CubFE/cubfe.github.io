import{d as a,b as t,aq as n,o as l}from"./style_icon.js";const p={class:"markdown-body"},c=n(`<h1>Dialog 对话框</h1><h3>介绍</h3><p>模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);
</code></pre><h3>使用方式</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;基础弹框&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;baseClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;基础弹框&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是基础弹框。&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible1&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;无标题弹框&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;noTitleClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-dialog</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是无标题弹框。&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible2&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;提示弹框&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;tipsClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-dialog</span>
  <span class="hljs-attr">no-cancel-btn</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;温馨提示&quot;</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示弹框。&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible3&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
  @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;底部按钮 垂直调用&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;verticalClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-dialog</span>
  <span class="hljs-attr">footer-direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>
  <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;#app&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;温馨提示&quot;</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示弹框。&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible5&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">cub-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;异步关闭&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;componentClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;异步关闭&quot;</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;closeContent&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible4&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOkAsync&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> visible1 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> visible2 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> visible3 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> visible4 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> visible5 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> closeContent = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">sleep</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> <span class="hljs-built_in">setTimeout</span>(resolve, <span class="hljs-number">1000</span>));
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">countDown</span> = (<span class="hljs-params">second: number</span>) =&gt; <span class="hljs-string">\`倒计时 <span class="hljs-subst">\${second}</span> 秒\`</span>;

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;event cancel&#39;</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOk</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;event ok&#39;</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOkAsync</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">sleep</span>()
        .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
          closeContent.<span class="hljs-property">value</span> = <span class="hljs-title function_">countDown</span>(<span class="hljs-number">2</span>);
          <span class="hljs-keyword">return</span> <span class="hljs-title function_">sleep</span>();
        })
        .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
          closeContent.<span class="hljs-property">value</span> = <span class="hljs-title function_">countDown</span>(<span class="hljs-number">1</span>);
          <span class="hljs-keyword">return</span> <span class="hljs-title function_">sleep</span>();
        })
        .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
          closeContent.<span class="hljs-property">value</span> = <span class="hljs-title function_">countDown</span>(<span class="hljs-number">0</span>);
        })
        .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
          visible4.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
        });
    };

    <span class="hljs-keyword">const</span> baseClick = (): <span class="hljs-function"><span class="hljs-params">void</span> =&gt;</span> {
      visible1.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">noTitleClick</span> = (<span class="hljs-params"></span>) =&gt; {
      visible2.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">tipsClick</span> = (<span class="hljs-params"></span>) =&gt; {
      visible3.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">componentClick</span> = (<span class="hljs-params"></span>) =&gt; {
      closeContent.<span class="hljs-property">value</span> = <span class="hljs-string">\`点击确定时3s后关闭\`</span>;
      visible4.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">verticalClick</span> = (<span class="hljs-params"></span>) =&gt; {
      visible5.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">return</span> {
      visible1,
      visible2,
      visible3,
      visible4,
      visible5,
      onCancel,
      onOk,
      closeContent,
      onOkAsync,
      baseClick,
      noTitleClick,
      componentClick,
      tipsClick,
      verticalClick
    };
  }
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>-</td></tr><tr><td>content</td><td>内容，支持 <code class="">HTML</code> 和组件</td><td>string | VNode</td><td>-</td></tr><tr><td>teleport</td><td>指定挂载节点</td><td>string</td><td><code class="">&quot;body&quot;</code></td></tr><tr><td>close-on-click-overlay</td><td>点击蒙层是否关闭对话框</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>no-footer</td><td>是否隐藏底部按钮栏</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>no-ok-btn</td><td>是否隐藏确定按钮</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>no-cancel-btn</td><td>是否隐藏取消按钮</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>string</td><td><code class="">”取消“</code></td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>string</td><td><code class="">”确 定“</code></td></tr><tr><td>cancel-auto-close</td><td>取消按钮是否默认关闭弹窗</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>text-align</td><td>文字对齐方向，可选值同 <code class="">css</code> 的 <code class="">text-align </code></td><td>string</td><td><code class="">&quot;center&quot;</code></td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>footer-direction</td><td>使用横纵方向 可选值 <code class="">horizontal</code>、<code class="">vertical</code></td><td>string</td><td><code class="">horizontal</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩类名</td><td>string</td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>pop-class</td><td>自定义 <code class="">popup</code> 弹框类名</td><td>string</td><td>-</td></tr><tr><td>pop-style</td><td>自定义 <code class="">popup</code> 弹框样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>custom-class</td><td>自定义 <code class="">class</code></td><td>string</td><td>-</td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code class="">false</code> 可阻止关闭，支持返回 <code class="">Promise</code></td><td>Function(action: string)</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>ok</td><td>确定按钮回调</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>取消按钮回调</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>关闭弹框回调</td><td>Function</td><td>-</td></tr><tr><td>opened</td><td>打开弹框回调</td><td>Function</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>header</td><td>自定义标题区域</td></tr><tr><td>default</td><td>自定义内容</td></tr><tr><td>footer</td><td>自定义底部按钮区域</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-dialog-width</td><td><em>296px</em></td></tr><tr><td>--cub-dialog-header-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-dialog-header-color</td><td><em>rgba(38, 38, 38, 1)</em></td></tr><tr><td>--cub-dialog-footer-justify-content</td><td><em>space-around</em></td></tr></tbody></table>`,19),e=[c],i={},j="",u=a({__name:"doc.taro",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(l(),t("div",p,e))}});export{u as default,j as excerpt,i as frontmatter};
