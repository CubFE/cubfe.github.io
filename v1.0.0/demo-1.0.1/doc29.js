import{d as l,r as c,b as d,k as r,w as p,aq as a,o as h,e as t,l as s}from"./style_icon.js";const o={class:"markdown-body"},i=a(`<h1>Ecard 电子卡</h1><h3>介绍</h3><p>虚拟电子卡选择</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Ecard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Ecard</span>);
</code></pre><h3>基础用法</h3>`,6),j=t("pre",null,[t("code",{class:"language-html"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-ecard"),s(`
      `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"money"'),s(`
      @`),t("span",{class:"hljs-attr"},"input-change"),s("="),t("span",{class:"hljs-string"},'"inputChange"'),s(`
      @`),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"change"'),s(`
      @`),t("span",{class:"hljs-attr"},"change-step"),s("="),t("span",{class:"hljs-string"},'"changeStep"'),s(`
      `),t("span",{class:"hljs-attr"},":data-list"),s("="),t("span",{class:"hljs-string"},'"dataList"'),s(`
    >`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-ecard"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`;
  `),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
    `),t("span",{class:"hljs-title function_"},"setup"),s("("),t("span",{class:"hljs-params"}),s(`) {
      `),t("span",{class:"hljs-keyword"},"const"),s(" dataList = "),t("span",{class:"hljs-title function_"},"reactive"),s(`([
        {
          `),t("span",{class:"hljs-attr"},"price"),s(": "),t("span",{class:"hljs-number"},"10"),s(`
        },
        {
          `),t("span",{class:"hljs-attr"},"price"),s(": "),t("span",{class:"hljs-number"},"20"),s(`
        },
        {
          `),t("span",{class:"hljs-attr"},"price"),s(": "),t("span",{class:"hljs-number"},"30"),s(`
        },
        {
          `),t("span",{class:"hljs-attr"},"price"),s(": "),t("span",{class:"hljs-number"},"40"),s(`
        }
      ]);
      `),t("span",{class:"hljs-keyword"},"const"),s(" money = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-number"},"10"),s(`);
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"inputChange"),s(" = ("),t("span",{class:"hljs-params"},"val"),s(`) => {
        money.`),t("span",{class:"hljs-property"},"value"),s(` = val;
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"change"),s(" = ("),t("span",{class:"hljs-params"},"item"),s(`) => {
        money.`),t("span",{class:"hljs-property"},"value"),s(" = item."),t("span",{class:"hljs-property"},"price"),s(`;
      };
      `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"changeStep"),s(" = ("),t("span",{class:"hljs-params"},"num, price"),s(`) => {
        `),t("span",{class:"hljs-keyword"},"const"),s(` val = price * num;
        money.`),t("span",{class:"hljs-property"},"value"),s(` = val;
      };
      `),t("span",{class:"hljs-keyword"},"return"),s(` {
        dataList,
        inputChange,
        change,
        money,
        changeStep
      };
    }
  };
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>购买电子卡所需价钱</td><td>number</td><td><code class="">0</code></td></tr><tr><td>choose-text</td><td>选择面值文案</td><td>string</td><td><code class="">请选择电子卡面值</code></td></tr><tr><td>other-value-text</td><td>其他面值文案</td><td>string</td><td><code class="">其他面值</code></td></tr><tr><td>data-list</td><td>电子卡面值列表</td><td>Array</td><td><code class="">DataList[]</code></td></tr><tr><td>card-amount-min</td><td>其它面值最小值</td><td>number</td><td><code class="">1</code></td></tr><tr><td>card-amount-max</td><td>其他面值最大值</td><td>number</td><td><code class="">9999</code></td></tr><tr><td>card-buy-min</td><td>购买数量最小值</td><td>number</td><td><code class="">1</code></td></tr><tr><td>card-buy-max</td><td>购买数量最大值</td><td>number</td><td><code class="">9999</code></td></tr><tr><td>placeholder</td><td>其他面值默认提示语</td><td>string</td><td><code class="">请输入1-5000整数</code></td></tr><tr><td>suffix</td><td>符号标示</td><td>string</td><td><code class="">¥</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中电子卡事件</td><td>点击的数据</td></tr><tr><td>input-change</td><td>更改 <code class="">input</code> 框触发事件</td><td>输入的数据</td></tr><tr><td>change-step</td><td>更改数量时触发</td><td>当前数量，当前选中的卡面值</td></tr></tbody></table><h3>DataList 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>price</td><td>每张电子卡价格</td><td>string</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-ecard-bg-color</td><td><em>#f0f2f5</em></td></tr></tbody></table>',11),f={},w="",_=l({__name:"doc",setup(u,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(g,b)=>{const e=c("demo-block");return h(),d("div",o,[i,r(e,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbMQNxw9lY2FyZMUPICB2LW1vZGVsPSJtb25leSLHFkBpbnB1dC1jaGFuZ2U9IsUOQ8UNySLIHMYIzxctc3RlcMgcU3RlcMggOmRhdGEtbGlzdD0ixAtMaXN0xhw+PC/pAJzlALnFD+YAujwv6gDTPHNjcmlwdMQjaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge8Vvc2V0dXAoKccOICBjb25zdCDoAJMgPclPKFvHIiDJLMQBcHJpY2U6IDEwyRR9LNwpMt8pySkz3ynJKTTLKccKXSnkAPDEAeYAz+UB1OUAzGYoMTDPHesB1SA9ICh2YWwpID0+y2rFPi52YWx1xCF2YWzIQH3OSeYB5sREaXRlbd1FxCEu5QDA3UzkAjLEUG51bSzmAO/PVsYtdmFsID3GICAqIG51bchM/wC8xQFyZXR1cm7LVOgB/OoBdesBIsoV5gCiyhDFatAf5ADBznHkAaN9Owo8L+gCvw=="},{default:p(()=>[j]),_:1}),m])}}});export{_ as default,w as excerpt,f as frontmatter};
