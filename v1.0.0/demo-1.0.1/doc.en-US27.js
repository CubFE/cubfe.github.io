import{d as l,r as c,b as d,k as r,w as o,aq as a,o as h,e as t,l as s}from"./style_icon.js";const p={class:"markdown-body"},i=a(`<h1>Ecard</h1><h3>Intro</h3><p>Virtual e-card selection</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Ecard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Ecard</span>);
</code></pre><h3>Basic</h3>`,6),u=t("pre",null,[t("code",{class:"language-html"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"cub-ecard"),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"money"'),s(`
    @`),t("span",{class:"hljs-attr"},"input-change"),s("="),t("span",{class:"hljs-string"},'"inputChange"'),s(`
    @`),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"change"'),s(`
    @`),t("span",{class:"hljs-attr"},"change-step"),s("="),t("span",{class:"hljs-string"},'"changeStep"'),s(`
    `),t("span",{class:"hljs-attr"},":data-list"),s("="),t("span",{class:"hljs-string"},'"dataList"'),s(`
  >`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"cub-ecard"),s(">")]),s(`
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
`)])],-1),m=a('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>modelValue</td><td>Price</td><td>number</td><td><code class="">0</code></td></tr><tr><td>choose-text</td><td>Main Title</td><td>string</td><td><code class="">Select</code></td></tr><tr><td>other-value-text</td><td>Other Text</td><td>string</td><td><code class="">Other Value</code></td></tr><tr><td>data-list</td><td>Ecard List</td><td>Array</td><td><code class="">DataList[]</code></td></tr><tr><td>card-amount-min</td><td>Other Min Value</td><td>number</td><td><code class="">1</code></td></tr><tr><td>card-amount-max</td><td>Other Max Value</td><td>number</td><td><code class="">9999</code></td></tr><tr><td>card-buy-min</td><td>Choose Min Value</td><td>number</td><td><code class="">1</code></td></tr><tr><td>card-buy-max</td><td>Choose Max Value</td><td>number</td><td><code class="">9999</code></td></tr><tr><td>placeholder</td><td>Placeholder</td><td>string</td><td><code class="">Placeholder</code></td></tr><tr><td>suffix</td><td>Symbol mark</td><td>string</td><td><code class="">¥</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Trigger event when Ecard is clicker</td><td><code class="">value</code></td></tr><tr><td>input-change</td><td>Triggered when the value changes</td><td><code class="">value</code></td></tr><tr><td>change-step</td><td>Triggered when the steps value changes</td><td><code class="">value，modelValue</code></td></tr></tbody></table><h3>Data Structure of DataList</h3><table><thead><tr><th>key</th><th>Description</th><th>Description</th></tr></thead><tbody><tr><td>price</td><td>price</td><td>string</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-ecard-bg-color</td><td><em>#f0f2f5</em></td></tr></tbody></table>',11),v={},f="",w=l({__name:"doc.en-US",setup(j,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(g,y)=>{const n=c("demo-block");return h(),d("div",p,[i,r(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZWNhcmQKICAgIHYtbW9kZWw9Im1vbmV5IsUUQGlucHV0LWNoYW5nZT0ixQ5DxQ3HIMgaxgjNFS1zdGVwyBpTdGVwxh46ZGF0YS1saXN0PSLEC0xpc3TEGj48L+kAkD4KPC/qAKo8c2NyaXB05ACzaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge8V5c2V0dXAoKccOICBjb25zdCDoAIMgPclPKFvHIiDJLMQBcHJpY2U6IDEwyRR9LNwpMt8pySkz3ynJKTTLKccKXSnkAPDEAeYAz+UBvOUAzGYoMTDPHesBvyA9ICh2YWwpID0+y2rFPi52YWx1xCF2YWzIQH3OSeYB1MREaXRlbd1FxCEu5QDA3UzkAiDEUG51bSzmAO/PVsYtdmFsID3GICAqIG51bchM/wC8xQFyZXR1cm7LVOgB/OoBdesBIsoV5gCiyhDFatAf5ADBznHkAaN9Owo8L+gCvw=="},{default:o(()=>[u]),_:1}),m])}}});export{w as default,f as excerpt,v as frontmatter};
