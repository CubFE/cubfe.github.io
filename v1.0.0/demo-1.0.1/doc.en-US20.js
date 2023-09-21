import{d as p,r,b as o,k as e,w as t,aq as n,o as h,e as a,l as s}from"./style_icon.js";const i={class:"markdown-body"},j=n(`<h1>ConfigProvider</h1><h3>Intro</h3><p>Used to configure cubui components globally, provide dark mode and dynamic theme.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ConfigProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ConfigProvider</span>);
</code></pre><h3>dark mode</h3><p>Dark mode can be enabled by setting the <code class="">theme</code> property of the ConfigProvider component to <code class="">dark</code>.</p><p>Dark mode takes effect globally, making all cubui components on the page dark.</p>`,8),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-config-provider"),s(),a("span",{class:"hljs-attr"},":theme"),s("="),a("span",{class:"hljs-string"},'"theme"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Switch Dark Mode"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:link"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switchChecked"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"switchChange"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"sub-title"),s("="),a("span",{class:"hljs-string"},'"Subtitle Description"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'"Description"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" switchChecked = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" theme = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"switchChange"),s(" = ("),a("span",{class:"hljs-params"},"v: boolean"),s(`) => {
        theme.`),a("span",{class:"hljs-property"},"value"),s(" = v ? "),a("span",{class:"hljs-string"},"'dark'"),s(" : "),a("span",{class:"hljs-string"},"''"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { switchChecked, switchChange, theme };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),b=n(`<h3>Dynamic Theme</h3><p>cubui components can organize styles through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a> , and cover these CSS variables through the shell to determine themes in real time, dynamically switch themes and other effects.</p><h4>Intro</h4><p>Default values ​​for these variables are defined on the <code class="">:root</code> node, and all child nodes in the HTML can access these variables:</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--cub-primary-color</span>: <span class="hljs-number">#fa2c19</span>;
  <span class="hljs-attr">--cub-primary-color-end</span>: <span class="hljs-number">#fa6419</span>;
  <span class="hljs-attr">--cub-help-color</span>: <span class="hljs-number">#f5f5f5</span>;
}
</code></pre><h4>Override by CSS</h4><p>You can directly override these CSS variables in the code, and the style of the Button component will change accordingly:</p><pre><code class="language-css"><span class="hljs-comment">/* the Primary Button will turn red */</span>
<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--cub-button-primary-background-color</span>: green;
}
</code></pre><h4>Override by ConfigProvider</h4><p>The ConfigProvider component provides the ability to override CSS variables. You need to wrap a ConfigProvider component at the root node and configure some CSS variables through the theme-vars property.</p>`,10),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-config-provider"),s(),a("span",{class:"hljs-attr"},":theme-vars"),s("="),a("span",{class:"hljs-string"},'"themeVars"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"Range"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"hidden-tag"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"range"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" range = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"30"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" themeVars = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'green'"),s(`,
        `),a("span",{class:"hljs-attr"},"primaryColorEnd"),s(": "),a("span",{class:"hljs-string"},"'green'"),s(`,
        `),a("span",{class:"hljs-attr"},"activeColor"),s(": "),a("span",{class:"hljs-string"},"'rgba(0,128,0,0.15)'"),s(`
      });
      `),a("span",{class:"hljs-comment"},"// Of course, you can also choose to use component variables to replace. If both basic variables and component variables are set, the component variables will overwrite the basic variables"),s(`
      `),a("span",{class:"hljs-comment"},"//  const themeVars = {"),s(`
      `),a("span",{class:"hljs-comment"},"//   rangeBgColor: 'rgba(25,137,250,0.15)',"),s(`
      `),a("span",{class:"hljs-comment"},"//   rangeBarBgColor: '#0289fa',"),s(`
      `),a("span",{class:"hljs-comment"},"//   rangeBarBtnBorder: '1px solid #0289fa'"),s(`
      `),a("span",{class:"hljs-comment"},"// };"),s(`

      `),a("span",{class:"hljs-keyword"},"return"),s(` { range, themeVars };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=n(`<h2>Style Variables</h2><h3>basic variable</h3><p>CSS variables in cubui are divided into <strong>basic variable</strong> and <strong>component variable</strong>. Component variables inherit the base variable, so after modifying the base variable, it will affect all related components.</p><h3>variable list</h3><p>Here are all the base variables:</p><pre><code class="language-scss"><span class="hljs-attr">--cub-primary-color</span>: <span class="hljs-number">#fa2c19</span>;
<span class="hljs-attr">--cub-primary-color-end</span>: <span class="hljs-number">#fa6419</span>;
<span class="hljs-attr">--cub-help-color</span>: <span class="hljs-number">#f5f5f5</span>;
<span class="hljs-attr">--cub-title-color</span>: <span class="hljs-number">#1a1a1a</span>;
<span class="hljs-attr">--cub-title-color2</span>: <span class="hljs-number">#666666</span>;
<span class="hljs-attr">--cub-text-color</span>: <span class="hljs-number">#808080</span>;
<span class="hljs-attr">--cub-disable-color</span>: <span class="hljs-number">#cccccc</span>;
<span class="hljs-attr">--cub-white</span>: <span class="hljs-number">#fff</span>;
<span class="hljs-attr">--cub-black</span>: <span class="hljs-number">#000</span>;
<span class="hljs-attr">--cub-required-color</span>: <span class="hljs-number">#fa2c19</span>;
<span class="hljs-attr">--cub-dark-background</span>: <span class="hljs-number">#131313</span>;
<span class="hljs-attr">--cub-dark-background2</span>: <span class="hljs-number">#1b1b1b</span>;
<span class="hljs-attr">--cub-cub-dark-background3</span>: <span class="hljs-number">#141414</span>;
<span class="hljs-attr">--cub-cub-dark-background4</span>: <span class="hljs-number">#323233</span>;
<span class="hljs-attr">--cub-dark-background5</span>: <span class="hljs-number">#646566</span>;
<span class="hljs-attr">--cub-dark-background6</span>: <span class="hljs-number">#380e08</span>;
<span class="hljs-attr">--cub-dark-background7</span>: <span class="hljs-number">#707070</span>;
<span class="hljs-attr">--cub-dark-color</span>: <span class="hljs-built_in">var</span>(--cub-white);
<span class="hljs-attr">--cub-dark-color2</span>: <span class="hljs-number">#f2270c</span>;
<span class="hljs-attr">--cub-dark-color3</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">232</span>, <span class="hljs-number">230</span>, <span class="hljs-number">227</span>, <span class="hljs-number">0.8</span>);
<span class="hljs-attr">--cub-dark-color-gray</span>: <span class="hljs-built_in">var</span>(--cub-text-color);
<span class="hljs-attr">--cub-dark-calendar-choose-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">227</span>, <span class="hljs-number">227</span>, <span class="hljs-number">227</span>, <span class="hljs-number">0.2</span>);
<span class="hljs-attr">--cub-font-family</span>: PingFang SC, Microsoft YaHei, Helvetica, Hiragino Sans GB, SimSun, sans-serif;

<span class="hljs-comment">// Font</span>
<span class="hljs-attr">--cub-font-size-0</span>: <span class="hljs-number">10px</span>;
<span class="hljs-attr">--cub-font-size-1</span>: <span class="hljs-number">12px</span>;
<span class="hljs-attr">--cub-font-size-2</span>: <span class="hljs-number">14px</span>;
<span class="hljs-attr">--cub-font-size-3</span>: <span class="hljs-number">16px</span>;
<span class="hljs-attr">--cub-font-size-4</span>: <span class="hljs-number">18px</span>;
<span class="hljs-attr">--cub-font-weight-bold</span>: <span class="hljs-number">400</span>;
<span class="hljs-attr">--cub-font-size-small</span>: <span class="hljs-built_in">var</span>(--cub-font-size-<span class="hljs-number">1</span>);
<span class="hljs-attr">--cub-font-size-base</span>: <span class="hljs-built_in">var</span>(--cub-font-size-<span class="hljs-number">2</span>);
<span class="hljs-attr">--cub-font-size-large</span>: <span class="hljs-built_in">var</span>(--cub-font-size-<span class="hljs-number">3</span>);
<span class="hljs-attr">--cub-line-height-base</span>: <span class="hljs-number">1.5</span>;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>theme</td><td>Theme style, set to <code class="">dark</code> to enable dark mode, take effect globally</td><td>string</td><td>-</td></tr><tr><td>theme-vars</td><td>Customized theme variable</td><td>object</td><td>-</td></tr><tr><td>tag</td><td>HTML Tag of root element</td><td>string</td><td><code class="">div</code></td></tr></tbody></table>`,9),k={},C="",w=p({__name:"doc.en-US",setup(g,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(f,v)=>{const l=r("demo-block");return h(),o("div",i,[j,e(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29uZmlnLXByb3ZpZGVyIDp0aGVtZT0ixQcixCfIKWVsbCB0aXRsZT0iU3dpdGNoIERhcmsgTW9kyCggIMlgIHYtc2xvdDpsaW5ryB3HSXPGPXYtbW9kZWw9IsYQQ2hlY2tlZCIgQGNoYW5nZcoYxA4iIC/JYy/IZMYSPC/oAJ73AK1UxAciIHN1Yi3HElN1YsUKIERlc2NyaXB0aW9uIiBkZXNjPSLMEz7OXMcO7gExPgrsAJE8xj0gbGFuZz0idHPlARlpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvlAMRzZXR1cCgpxw4gIGNvbnN0IO0BKSA9xE8oZmFsc2UpxEnKKOUBu8cgJyfPHchF5AFWID0gKHY6IGJvb2xlYW4pID0+yXIgxkYudmFsdcQodiA/ICdkYXJrJyA6ICflALrEAX07CscKcmV0dXJuIHvuAKYszXAsxlXENsU9CsVBPC/mATU+Cg=="},{default:t(()=>[d]),_:1}),b,e(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29uZmlnLXByb3ZpZGVyIDp0aGVtZS12YXJzPSLFDFZhcnMixDDHMmZvcm3GD8sRLWl0ZW0gOmxhYmVsPSJSYW5nZcc0ySdyxBUgaGlkZGVuLXRhZyB2LW1vZMQvxRoiPjwvySfJYMUTyWHGF8oVxBDGDu8Axz4KPC/qAOs8c2NyaXB0IGxhbmc9InTmAM5pbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB75QCCc2V0dXAoKccOICBjb25zdCDmAOE9xFEoMzApxD7KHekBS8Uhxm0oyEAgIHByaW1hcnlDb2xvcjogJ2dyZWVuJyzVH0VuZNMixlLIQHJnYmEoMCwxMjgsMCwwLjE1KSfHKn3pAJgvLyBPZiBjb3Vyc2UsIHlvdSBjYW4gYWxzbyBjaG9vc2UgdG8gdXNlIGNvbXBvbmVudCB2YXJpYWJsZXPEG3JlcGxhY2UuIElmIGJvdGggYmFzaWPLJGFuZNU8YXJl5AFCLOQBFNUhd2lsbCBvdmVyd3JpdGXFJ89c6gDD8wFf6AFWxB7mAZVCZ+0BGTI1LDEzNywyNegBHOgBR8syYXLKNSMwMjg5ZmHXJ3RuQm9yZGXEKTFweCBzb2xpZCDIM8oyfTsKxw1yZXR1cm7kAnrEQ+UBB+cAvH3mAZx9CiDECzwv5gK4Pgo="},{default:t(()=>[m]),_:1}),u])}}});export{w as default,C as excerpt,k as frontmatter};
