import{d,r as p,b as r,k as l,w as n,aq as c,e as a,o as i,l as s}from"./style_icon.js";const o={class:"markdown-body"},h=c(`<h1>AddressList 地址列表</h1><h3>介绍</h3><p>主要用于进行地址列表的展示以及操作。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressList</span>);
</code></pre><h3>基础用法</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),g=a("h3",null,"长按功能",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),u=a("h3",null,"滑动功能",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),A=c(`<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>地址数组</td><td>Array</td><td>-</td></tr><tr><td>long-press</td><td>长按功能</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>swipe-edition</td><td>右滑功能</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>show-bottom-button</td><td>是否展示底部按钮</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>data-options</td><td>自定义 <code class="">key</code> 值时，设置映射关系</td><td>Object</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th><th>备注</th></tr></thead><tbody><tr><td>del-icon</td><td>点击删除图标</td><td>event: Event,item</td><td>公共</td></tr><tr><td>edit-icon</td><td>点击编辑图标</td><td>event: Event,item</td><td>公共</td></tr><tr><td>click-item</td><td>点击地址列表每一项</td><td>event: Event,item</td><td>公共</td></tr><tr><td>add</td><td>点击底部添加地址按钮</td><td>event: Event</td><td>公共</td></tr><tr><td>long-copy</td><td>点击复制地址按钮</td><td>event: Event,item</td><td>长按功能下点击事件</td></tr><tr><td>long-set</td><td>点击设置默认按钮</td><td>event: Event,item</td><td>长按功能下点击事件</td></tr><tr><td>long-del</td><td>点击删除地址按钮</td><td>event: Event,item</td><td>长按功能下点击事件</td></tr><tr><td>swipe-del</td><td>默认右滑删除按钮</td><td>event: Event,item</td><td>滑动功能下点击事件</td></tr></tbody></table><h3>Slots</h3><p><code class="">AddressList</code> 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换</p><table><thead><tr><th>名称</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>item-infos</td><td>地址列表项姓名/联系方式/默认一行</td><td><code class="">{ item }</code></td></tr><tr><td>item-icon</td><td>地址列表项图标</td><td><code class="">{ item }</code></td></tr><tr><td>item-addr</td><td>地址列表项详细地址</td><td><code class="">{ item }</code></td></tr><tr><td>swipe-right</td><td>地址列表项右滑区域</td><td><code class="">{ item }</code></td></tr><tr><td>longpress-btns</td><td>地址列表项长按遮罩内容</td><td><code class="">{ item }</code></td></tr></tbody></table><h3>data 数组中每一项 与 dataOptions 对象的参数磨平</h3><p>下面是 <code class="">data</code> 数组中每一项 基础数据结构</p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataInfo = {
  <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-comment">//地址id</span>
  <span class="hljs-attr">addressName</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-comment">//地址姓名</span>
  <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;123****4567&#39;</span>, <span class="hljs-comment">//联系方式</span>
  <span class="hljs-attr">defaultAddress</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">//是否是默认</span>
  <span class="hljs-attr">fullAddress</span>: <span class="hljs-string">&#39;北京市通州区测试测试测试测试测试测试测试测试测试&#39;</span> <span class="hljs-comment">//详细地址</span>
};
</code></pre><p>组件内优先获取基础数据结构中定义的字段，若想自定义 <code class="">key</code> 值，可以通过 <code class="">dataOptions</code> 设置映射关系</p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataOptions = {
  <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;testid&#39;</span>,
  <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;testaddressDetail&#39;</span>,
  <span class="hljs-attr">addressName</span>: <span class="hljs-string">&#39;testaddressName&#39;</span>
};
</code></pre><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-addresslist-bg</td><td><em>#fff</em></td></tr><tr><td>--cub-addresslist-border</td><td><em>#f0f0f0</em></td></tr><tr><td>--cub-addresslist-font-color</td><td><em>#333333</em></td></tr><tr><td>--cub-addresslist-font-size</td><td><em>16px</em></td></tr><tr><td>--cub-addresslist-mask-bg</td><td><em>rgba(0, 0, 0, 0.4)</em></td></tr><tr><td>--cub-addresslist-addr-font-color</td><td><em>#666666</em></td></tr><tr><td>--cub-addresslist-addr-font-size</td><td><em>12px</em></td></tr><tr><td>--cub-addresslist-set-bg</td><td><em>#f5a623</em></td></tr><tr><td>--cub-addresslist-del-bg</td><td><em>#e1251b</em></td></tr><tr><td>--cub-addresslist-contnts-contact-default</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-addresslist-contnts-contact-color</td><td><em>var(--cub-white)</em></td></tr></tbody></table>`,17),w={},_="",v=d({__name:"doc",setup(b,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(f,y)=>{const t=p("demo-block");return i(),r("div",o,[h,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYWRkcmVzcy1saXN0CiAgICA6ZGF0YT0ixAYixRFAY2xpY2staXRlbT0ixQxJdGVtxxxkZWwtaWNvbj0iZGVsQ8QdxxllZGl0xxrEC8sbOnNob3ctYm90dG9tLWJ1dHTEJGZhbHNlxyDEey1vcHRpb25z5gCJT8YNxCDlALkv8AC6Pgo8L+oA2zxzY3JpcHQgbGFuZz0idHMixDVpbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB75QCTc2V0dXAoKccOICBjb25zdCDkAJogPcRQKFvHGSDJI8QBdGVzdGlkOiAzLM8V5wC7TmFtZTogJ+Wnk+WQjSfMJXBob27EGzEyMyoqKio0NTY3zSDnAJ9Bxkg6IOUBP8whZnVsbMkeJ+WMl+S6rOW4gumAmuW3nuWMuua1i+ivld8G0QYnyWJ9ym30API0/wDy/wDy/wDy5ADUdHJ1/wDx/wDx3wbxAPHHCl0p5AImxAHqAgXnAp/lAgzmAlco6gEV5AEPJ+YBGOsA0ecBEERldGFpbMchzRTSLOcBPMsqxBLoAKJ97wCY6QOpID0gKCkgPT7rAajEIm9sZS5sb2coJ+UDmiBUbyDnAT4nyUl9zlLoA+HfUcpRRGVsZXRl2VDpBBffUcpRRWRpdNNPcmV0dXJuyz7kAZTqAT/pAQrKE+gAy8oS6QCNyyXqAdrOcuQCC307Cjwv5gRnPgo="},{default:n(()=>[j]),_:1}),g,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYWRkcmVzcy1saXN0CiAgICA6ZGF0YT0ixAYixRFsb25nLXDEJcYgc2hvdy1ib3R0b20tYnV0dG9uPSJmYWxzZcYvQGRlbC1pY8QWZGVsQ2xpY2vHGWVkaXTHGsQLzBtjxAwtaXRlbT0ixQxJdGVtxxzlAIBjb3B5PSLEBsw3xRtzZXQ9InNlzVDFGWRlbOoAhExvbmfGHeUA4S1vcHRpb25z5gDpT8YNxCDlARkv8AEaPgo8L+oBOzxzY3JpcHQgbGFuZz0idHMixDVpbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUnZGVmYXVsdCB75QCTc2V0dXAoKccOICBjb25zdCDkAJogPcRQKFvHGSDJI8QBdGVzdGlkOiAzLM8V5wC7TmFtZTogJ+Wnk+WQjSfMJXBob27EGzEyMyoqKio0NTY3zSDnAJ9Bxkg6IOUB4MwhZnVsbMkeJ+WMl+S6rOW4gumAmuW3nuWMuua1i+ivld8G0QYnyWJ9ym30API0/wDy/wDy/wDy5ADUdHJ1/wDx/wDx3wbxAPHHCl0p5AImxAHqAgXnAp/lAgzmAlco6gEV5AEPJ+YBGOsA0ecBEERldGFpbMchzRTSLOcBPMsqxBLoAKJ97wCY6QOmID0gKCkgPT7rAajEIm9sZS5sb2coJ+UDfiBUbyDnAT4nyUl9zlLoA6rfUcpRRGVsZXRl2VDpBGTfUcpRRWRpdNlP6QR830/KT0NvcHnZT+gEsd9Ox05PbiBTZXR0aW5n/wFA5wTq31btAZXTUXJldHVybss95AKG6gIx6QH8yhPIfcoS6QF/yzjoAUPKE+gBB9JK5ADHyxbqAwfuAK3kAzh9Owo8L+YFlD4K"},{default:n(()=>[m]),_:1}),u,l(t,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYWRkcmVzcy1saXN0CiAgICA6ZGF0YT0ixAYixRFzd2lwZS1lZGl0aW9uxhJob3ctYm90dG9tLWJ1dHTHF0DEJC1pY29uPSLEC0NsaWNrxkRAZGVsxxpkZWzMGWPEDC1pdGVtPSLFDEl0ZW3HHMZ6ZGVsyjZTxBPHH2FkZD0iYWRkQeYAw8YW5QC/LW9w5ACtc+YAx0/GDcQg5QD3L/AA+D4KPC/qARk8c2NyaXB0IGxhbmc9InRzIsQ1aW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge+YBL2V0dXAoKccOICBjb25zdCDkAJogPcRQKFvHGSDJI8QBdGVzdGlkOiAzLM8V5wC7TmFtZTogJ+Wnk+WQjSfMJXBob27EGzEyMyoqKio0NTY3zSDnAJ/nATg6IGZhbHNlzCFmdWxsyR4n5YyX5Lqs5biC6YCa5bee5Yy65rWL6K+V3wbRBifJYn3KbfQA8jT/APL/APL/APLkANR0cnX/APH/APHfBvEA8ccKXSnkAibEAeoCBecCn+UCDOYCVyjqARXkAQ8n5gEY6wDR5wEQRGV0YWlsxyHNFNIs5wE8yyrEEugAon3vAJjpA4ogPSAoKSA9PusBqMQib2xlLmxvZygn5QOVIFRvIOcBPifJSX3OUukEEd9SylJFZGl02U/oBBDfTspORGVsZXRl31DnBGDfVcdVT27EVco22VzqBKPfWe0BTtNPcmV0dXJuyz3kAj/qAerpAbXKE+gA18oS6QGI0iXlAMbKF+oAt8sr6gKw7gCd5ALhfTsKPC/mBT0+Cg=="},{default:n(()=>[k]),_:1}),A])}}});export{v as default,_ as excerpt,w as frontmatter};
