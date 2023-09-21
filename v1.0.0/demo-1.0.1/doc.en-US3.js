import{d,r as p,b as r,k as l,w as n,aq as e,e as a,o as i,l as s}from"./style_icon.js";const o={class:"markdown-body"},h=e(`<h1>AddressList</h1><h3>Intro</h3><p>It is mainly used to display and operate the address list.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressList</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address-list"),s(`
    `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(`
    @`),a("span",{class:"hljs-attr"},"click-item"),s("="),a("span",{class:"hljs-string"},'"clickItem"'),s(`
    @`),a("span",{class:"hljs-attr"},"del-icon"),s("="),a("span",{class:"hljs-string"},'"delClick"'),s(`
    @`),a("span",{class:"hljs-attr"},"edit-icon"),s("="),a("span",{class:"hljs-string"},'"editClick"'),s(`
    `),a("span",{class:"hljs-attr"},":show-bottom-button"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    `),a("span",{class:"hljs-attr"},":data-options"),s("="),a("span",{class:"hljs-string"},'"dataOptions"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"testid"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
          `),a("span",{class:"hljs-attr"},"testaddressName"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'123****4567'"),s(`,
          `),a("span",{class:"hljs-attr"},"defaultAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"fullAddress"),s(": "),a("span",{class:"hljs-string"},"'北京市通州区测试测试测试测试测试测试测试测试测试'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"testid"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
          `),a("span",{class:"hljs-attr"},"testaddressName"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'123****4567'"),s(`,
          `),a("span",{class:"hljs-attr"},"defaultAddress"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"fullAddress"),s(": "),a("span",{class:"hljs-string"},"'北京市通州区测试测试测试测试测试测试测试测试测试'"),s(`
        }
      ]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" dataOptions = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'testid'"),s(`,
        `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'testaddressDetail'"),s(`,
        `),a("span",{class:"hljs-attr"},"addressName"),s(": "),a("span",{class:"hljs-string"},"'testaddressName'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickItem"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Address'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Delete'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"editClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Edit'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        data,
        clickItem,
        delClick,
        editClick,
        dataOptions
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Long Press Function",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address-list"),s(`
    `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(`
    `),a("span",{class:"hljs-attr"},"long-press"),s(`
    `),a("span",{class:"hljs-attr"},":show-bottom-button"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    @`),a("span",{class:"hljs-attr"},"del-icon"),s("="),a("span",{class:"hljs-string"},'"delClick"'),s(`
    @`),a("span",{class:"hljs-attr"},"edit-icon"),s("="),a("span",{class:"hljs-string"},'"editClick"'),s(`
    @`),a("span",{class:"hljs-attr"},"click-item"),s("="),a("span",{class:"hljs-string"},'"clickItem"'),s(`
    @`),a("span",{class:"hljs-attr"},"long-copy"),s("="),a("span",{class:"hljs-string"},'"copyClick"'),s(`
    @`),a("span",{class:"hljs-attr"},"long-set"),s("="),a("span",{class:"hljs-string"},'"setClick"'),s(`
    @`),a("span",{class:"hljs-attr"},"long-del"),s("="),a("span",{class:"hljs-string"},'"delClickLong"'),s(`
    `),a("span",{class:"hljs-attr"},":data-options"),s("="),a("span",{class:"hljs-string"},'"dataOptions"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"testid"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
          `),a("span",{class:"hljs-attr"},"testaddressName"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'123****4567'"),s(`,
          `),a("span",{class:"hljs-attr"},"defaultAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"fullAddress"),s(": "),a("span",{class:"hljs-string"},"'北京市通州区测试测试测试测试测试测试测试测试测试'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"testid"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
          `),a("span",{class:"hljs-attr"},"testaddressName"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'123****4567'"),s(`,
          `),a("span",{class:"hljs-attr"},"defaultAddress"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"fullAddress"),s(": "),a("span",{class:"hljs-string"},"'北京市通州区测试测试测试测试测试测试测试测试测试'"),s(`
        }
      ]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" dataOptions = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'testid'"),s(`,
        `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'testaddressDetail'"),s(`,
        `),a("span",{class:"hljs-attr"},"addressName"),s(": "),a("span",{class:"hljs-string"},"'testaddressName'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickItem"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Address'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Delete'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"editClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Edit'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"copyClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Copy'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"setClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click On Settings'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClickLong"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Add'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        data,
        clickItem,
        delClick,
        editClick,
        copyClick,
        setClick,
        delClickLong,
        dataOptions
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"Swipe Function",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address-list"),s(`
    `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(`
    `),a("span",{class:"hljs-attr"},"swipe-edition"),s(`
    `),a("span",{class:"hljs-attr"},"show-bottom-button"),s(`
    @`),a("span",{class:"hljs-attr"},"edit-icon"),s("="),a("span",{class:"hljs-string"},'"editClick"'),s(`
    @`),a("span",{class:"hljs-attr"},"del-icon"),s("="),a("span",{class:"hljs-string"},'"delClick"'),s(`
    @`),a("span",{class:"hljs-attr"},"click-item"),s("="),a("span",{class:"hljs-string"},'"clickItem"'),s(`
    @`),a("span",{class:"hljs-attr"},"swipe-del"),s("="),a("span",{class:"hljs-string"},'"delClickSwipe"'),s(`
    @`),a("span",{class:"hljs-attr"},"add"),s("="),a("span",{class:"hljs-string"},'"addAddress"'),s(`
    `),a("span",{class:"hljs-attr"},":data-options"),s("="),a("span",{class:"hljs-string"},'"dataOptions"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"testid"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
          `),a("span",{class:"hljs-attr"},"testaddressName"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'123****4567'"),s(`,
          `),a("span",{class:"hljs-attr"},"defaultAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"fullAddress"),s(": "),a("span",{class:"hljs-string"},"'北京市通州区测试测试测试测试测试测试测试测试测试'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"testid"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
          `),a("span",{class:"hljs-attr"},"testaddressName"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'123****4567'"),s(`,
          `),a("span",{class:"hljs-attr"},"defaultAddress"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"fullAddress"),s(": "),a("span",{class:"hljs-string"},"'北京市通州区测试测试测试测试测试测试测试测试测试'"),s(`
        }
      ]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" dataOptions = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'testid'"),s(`,
        `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'testaddressDetail'"),s(`,
        `),a("span",{class:"hljs-attr"},"addressName"),s(": "),a("span",{class:"hljs-string"},"'testaddressName'"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickItem"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Address'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"editClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Edit'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClick"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Delete'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClickSwipe"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click On DelClickSwipe'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"addAddress"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Click To Add'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        data,
        clickItem,
        delClick,
        editClick,
        delClickSwipe,
        addAddress,
        dataOptions
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=e(`<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>Address array</td><td>Array</td><td>-</td></tr><tr><td>long-press</td><td>Long Press Function</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>swipe-edition</td><td>Swipe right</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>show-bottom-button</td><td>Whether to show the bottom button</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>data-options</td><td>When customizing the <code class="">key</code> value, set the mapping relationship</td><td></td><td></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th><th>Remark</th></tr></thead><tbody><tr><td>del-icon</td><td>Click the delete icon</td><td>event: Event,item</td><td>public</td></tr><tr><td>edit-icon</td><td>Click the edit icon</td><td>event: Event,item</td><td>public</td></tr><tr><td>click-item</td><td>Click on each item in the address list</td><td>event: Event,item</td><td>public</td></tr><tr><td>add</td><td>Click the Add Address button at the bottom</td><td>event: Event</td><td>public</td></tr><tr><td>long-copy</td><td>Click the Copy Address button</td><td>event: Event,item</td><td>Click event under long press function</td></tr><tr><td>long-set</td><td>Click the Set Default button</td><td>event: Event,item</td><td>Click event under long press function</td></tr><tr><td>long-del</td><td>Click the Delete Address button</td><td>event: Event,item</td><td>Click event under long press function</td></tr><tr><td>swipe-del</td><td>Default right swipe delete button</td><td>event: Event,item</td><td>Click event under swipe function</td></tr></tbody></table><h3>Slots</h3><p>The <code class="">AddressList</code> component is divided into several areas by default, and these areas are defined as slots, which can be replaced as needed</p><table><thead><tr><th>Name</th><th>Description</th><th>Slots</th></tr></thead><tbody><tr><td>item-infos</td><td>Address list item name/contact/default one line</td><td><code class="">{ item }</code></td></tr><tr><td>item-icon</td><td>address list item icon</td><td><code class="">{ item }</code></td></tr><tr><td>item-addr</td><td>Address list item detailed address</td><td><code class="">{ item }</code></td></tr><tr><td>swipe-right</td><td>Address list item right swipe area</td><td><code class="">{ item }</code></td></tr><tr><td>longpress-btns</td><td>Address list item long press to mask content</td><td><code class="">{ item }</code></td></tr></tbody></table><h3>Each item in the data array is smoothed with the parameters of the dataOptions object</h3><p>Below is the underlying data structure for each item in the <code class="">data</code> array</p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataInfo = {
  <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-comment">//地址id</span>
  <span class="hljs-attr">addressName</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-comment">//地址姓名</span>
  <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;123****4567&#39;</span>, <span class="hljs-comment">//联系方式</span>
  <span class="hljs-attr">defaultAddress</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">//是否是默认</span>
  <span class="hljs-attr">fullAddress</span>: <span class="hljs-string">&#39;北京市通州区测试测试测试测试测试测试测试测试测试&#39;</span> <span class="hljs-comment">//详细地址</span>
};
</code></pre><p>In the component, the fields defined in the basic data structure are preferentially obtained. If you want to customize the <code class="">key</code> value, you can set the mapping relationship through <code class="">dataOptions</code></p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataOptions = {
  <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;testid&#39;</span>,
  <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;testaddressDetail&#39;</span>,
  <span class="hljs-attr">addressName</span>: <span class="hljs-string">&#39;testaddressName&#39;</span>
};
</code></pre><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-addresslist-bg</td><td><em>#fff</em></td></tr><tr><td>--cub-addresslist-border</td><td><em>#f0f0f0</em></td></tr><tr><td>--cub-addresslist-font-color</td><td><em>#333333</em></td></tr><tr><td>--cub-addresslist-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-addresslist-mask-bg</td><td><em>rgba(0, 0, 0, 0.4)</em></td></tr><tr><td>--cub-addresslist-addr-font-color</td><td><em>#666666</em></td></tr><tr><td>--cub-addresslist-addr-font-size</td><td><em>12px</em></td></tr><tr><td>--cub-addresslist-set-bg</td><td><em>#f5a623</em></td></tr><tr><td>--cub-addresslist-del-bg</td><td><em>#e1251b</em></td></tr><tr><td>--cub-addresslist-contnts-contact-default</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-addresslist-contnts-contact-color</td><td><em>var(--cub-white)</em></td></tr></tbody></table>`,17),w={},v="",_=d({__name:"doc.en-US",setup(A,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(f,y)=>{const t=p("demo-block");return i(),r("div",o,[h,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYWRkcmVzcy1saXN0CiAgICA6ZGF0YT0ixAYixRFAY2xpY2staXRlbT0ixQxJdGVtxxxkZWwtaWNvbj0iZGVsQ8QdxxllZGl0xxrEC8sbOnNob3ctYm90dG9tLWJ1dHTEJGZhbHNlxyDEey1vcHRpb25z5gCJT8YNxCDlALkv8AC6Pgo8L+oA2zxzY3JpcHQgbGFuZz0idHMixDVpbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB75QCTc2V0dXAoKccOICBjb25zdCDkAJogPcRQKFvHGSDJI8QBdGVzdGlkOiAzLM8V5wC7TmFtZTogJ+Wnk+WQjSfMJXBob27EGzEyMyoqKio0NTY3zSDnAJ9Bxkg6IOUBP8whZnVsbMkeJ+WMl+S6rOW4gumAmuW3nuWMuua1i+ivld8G0QYnyWJ9ym30API0/wDy/wDy/wDy5ADUdHJ1/wDx/wDx3wbxAPHHCl0p5AImxAHqAgXnAp/lAgzmAlco6gEV5AEPJ+YBGOsA0ecBEERldGFpbMchzRTSLOcBPMsqxBLoAKJ97wCY6QOpID0gKCkgPT7rAajEIm9sZS5sb2coJ+UDmiBUbyDnAT4nyUl9zlLoA+HfUcpRRGVsZXRl2VDpBBffUcpRRWRpdNNPcmV0dXJuyz7kAZTqAT/pAQrKE+gAy8oS6QCNyyXqAdrOcuQCC307Cjwv5gRnPgo="},{default:n(()=>[j]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYWRkcmVzcy1saXN0CiAgICA6ZGF0YT0ixAYixRFsb25nLXDEJcYgc2hvdy1ib3R0b20tYnV0dG9uPSJmYWxzZcYvQGRlbC1pY8QWZGVsQ2xpY2vHGWVkaXTHGsQLzBtjxAwtaXRlbT0ixQxJdGVtxxzlAIBjb3B5PSLEBsw3xRtzZXQ9InNlzVDFGWRlbOoAhExvbmfGHeUA4S1vcHRpb25z5gDpT8YNxCDlARkv8AEaPgo8L+oBOzxzY3JpcHQgbGFuZz0idHMixDVpbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB75QCTc2V0dXAoKccOICBjb25zdCDkAJogPcRQKFvHGSDJI8QBdGVzdGlkOiAzLM8V5wC7TmFtZTogJ+Wnk+WQjSfMJXBob27EGzEyMyoqKio0NTY3zSDnAJ9Bxkg6IOUB4MwhZnVsbMkeJ+WMl+S6rOW4gumAmuW3nuWMuua1i+ivld8G0QYnyWJ9ym30API0/wDy/wDy/wDy5ADUdHJ1/wDx/wDx3wbxAPHHCl0p5AImxAHqAgXnAp/lAgzmAlco6gEV5AEPJ+YBGOsA0ecBEERldGFpbMchzRTSLOcBPMsqxBLoAKJ97wCY6QOmID0gKCkgPT7rAajEIm9sZS5sb2coJ+UDfiBUbyDnAT4nyUl9zlLoA6rfUcpRRGVsZXRl2VDpBGTfUcpRRWRpdNlP6QR830/KT0NvcHnZT+gEsd9Ox05PbiBTZXR0aW5n/wFA5wTq31btAZXTUXJldHVybss95AKG6gIx6QH8yhPIfcoS6QF/yzjoAUPKE+gBB9JK5ADHyxbqAwfuAK3kAzh9Owo8L+YFlD4K"},{default:n(()=>[m]),_:1}),u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYWRkcmVzcy1saXN0CiAgICA6ZGF0YT0ixAYixRFzd2lwZS1lZGl0aW9uxhJob3ctYm90dG9tLWJ1dHTHF0DEJC1pY29uPSLEC0NsaWNrxkRAZGVsxxpkZWzMGWPEDC1pdGVtPSLFDEl0ZW3HHMZ6ZGVsyjZTxBPHH2FkZD0iYWRkQeYAw8YW5QC/LW9w5ACtc+YAx0/GDcQg5QD3L/AA+D4KPC/qARk8c2NyaXB0IGxhbmc9InRzIsQ1aW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge+YBL2V0dXAoKccOICBjb25zdCDkAJogPcRQKFvHGSDJI8QBdGVzdGlkOiAzLM8V5wC7TmFtZTogJ+Wnk+WQjSfMJXBob27EGzEyMyoqKio0NTY3zSDnAJ/nATg6IGZhbHNlzCFmdWxsyR4n5YyX5Lqs5biC6YCa5bee5Yy65rWL6K+V3wbRBifJYn3KbfQA8jT/APL/APL/APLkANR0cnX/APH/APHfBvEA8ccKXSnkAibEAeoCBecCn+UCDOYCVyjqARXkAQ8n5gEY6wDR5wEQRGV0YWlsxyHNFNIs5wE8yyrEEugAon3vAJjpA4ogPSAoKSA9PusBqMQib2xlLmxvZygn5QOVIFRvIOcBPifJSX3OUukEEd9SylJFZGl02U/oBBDfTspORGVsZXRl31DnBGDfVcdVT27EVco22VzqBKPfWe0BTtNPcmV0dXJuyz3kAj/qAerpAbXKE+gA18oS6QGI0iXlAMbKF+oAt8sr6gKw7gCd5ALhfTsKPC/mBT0+Cg=="},{default:n(()=>[b]),_:1}),k])}}});export{_ as default,v as excerpt,w as frontmatter};
