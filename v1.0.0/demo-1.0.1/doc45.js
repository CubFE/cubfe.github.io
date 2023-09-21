import{d as c,r as e,b as p,k as h,w as r,aq as t,o as d,e as a,l as s}from"./style_icon.js";const o={class:"markdown-body"},j=t(`<h1>List 虚拟列表</h1><h3>介绍</h3><p>建议优先使用 <code class="">cubui</code> 提供的 <a href="#/zh-CN/component/infiniteloading">滚动加载</a> 组件实现列表。</p><p><code class="">List</code> 组件为<strong>虚拟列表</strong>组件，它可以只渲染当前可视区域，其他部分在用户滚动到可视区域内之后再渲染。</p><p><strong>在绝大多数场景下，你并不需要使用到虚拟列表</strong>。它可能会出现滑动白屏、计算位置不精确等问题。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">List</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>();
</code></pre><h3>基础用法</h3>`,8),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"h2"),s(">")]),s("基础用法"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"h2"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-list"),s(),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":listData"),s("="),a("span",{class:"hljs-string"},'"count"'),s(" @"),a("span",{class:"hljs-attr"},"scroll-bottom"),s("="),a("span",{class:"hljs-string"},'"handleScroll"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot"),s("="),a("span",{class:"hljs-string"},'"{ item, index }"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"list-item"'),s(">")]),s(" {{ index }} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-list"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { onMounted, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"count"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s("("),a("span",{class:"hljs-number"},"100"),s(")."),a("span",{class:"hljs-title function_"},"fill"),s("("),a("span",{class:"hljs-number"},"0"),s(`)
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleScroll"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" arr = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s("("),a("span",{class:"hljs-number"},"100"),s(")."),a("span",{class:"hljs-title function_"},"fill"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
        `),a("span",{class:"hljs-keyword"},"const"),s(" len = state."),a("span",{class:"hljs-property"},"count"),s("."),a("span",{class:"hljs-property"},"length"),s(`;
        state.`),a("span",{class:"hljs-property"},"count"),s(" = state."),a("span",{class:"hljs-property"},"count"),s("."),a("span",{class:"hljs-title function_"},"concat"),s("(arr."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: number, index: number"),s(") =>")]),s(" len + index + "),a("span",{class:"hljs-number"},"1"),s(`));
      };

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        state.`),a("span",{class:"hljs-property"},"count"),s(" = state."),a("span",{class:"hljs-property"},"count"),s("."),a("span",{class:"hljs-title function_"},"map"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"item: number, index: number"),s(") =>")]),s(" index + "),a("span",{class:"hljs-number"},"1"),s(`);
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(" { ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state), handleScroll };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-tag"},"body"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100vh"),s(`;
  }
  `),a("span",{class:"hljs-selector-id"},"#app"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-cell"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-list-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-number"},"#f4a8b6"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),u=t('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>列表项的高度/预估高度，支持不固定高度</td><td>Number</td><td><code class="">80</code></td></tr><tr><td>list-data</td><td>列表数据</td><td>any[]</td><td><code class="">[]</code></td></tr><tr><td>container-height</td><td>容器高度(最大值不能超过可视区)</td><td>Number</td><td><code class="">可视区高度</code></td></tr><tr><td>buffer-size</td><td>数据缓冲区长度</td><td>Number</td><td><code class="">5</code></td></tr><tr><td>margin</td><td>列表之间的间隙，和自定义样式保持一致</td><td>Number</td><td><code class="">10</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>item</td><td>列表项数据</td><td>Object</td></tr><tr><td>index</td><td>列表索引</td><td>Number</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>scroll-bottom</td><td>滚动到底部时触发</td><td>-</td></tr><tr><td>scroll-up</td><td>向上滚动</td><td>-</td></tr><tr><td>scroll-down</td><td>向下滚动</td><td>-</td></tr></tbody></table>',7),f={},x="",A=c({__name:"doc",setup(m,{expose:l}){return l({frontmatter:{},excerpt:void 0}),(b,g)=>{const n=e("demo-block");return d(),p("div",o,[j,h(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8ixBUgIDxoMj7ln7rnoYDnlKjms5U8L2gyxxpjdWItY2VsbMYPxxFsaXN0IDpoZWlnaHQ9IjUwIiA6xBNEYXRhPSJjb3VudCIgQHNjcm9sbC1ib3R0b209ImhhbmRsZVPFFcd3xVDoAJ8gdi1zbG90PSJ7IGl0ZW0sIGluZGV4IH3LLO4AwMRyLcQrIj4ge3vIL30gPC9kaXbLYS/IYsgUPC/oAMTGEsYQ6ADlxz/MNzxzY3JpcHQgbGFuZz0idHPlAJNpbXBvcnQgeyBvbk3kAPJlZCwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFNWRlZmF1bHQge+UAgHByb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qgc3TkASQ9yWMoyB/EIXVudDogbmV3IEFycmF5KDEwMCkuZmlsbCgwKccmfSk7Cs1Q7AGPID0gKCkgPT7JcyAgbGV0IGFyciA911fkAM3MT2xlbiA95gClLuUAkC5sZW5ndGjKKMsczypjb25jYXQoYXJyLm1hcCgo5AHUOiBudW1iZXLnAgfID+UApsRsK8YYICsgMSnpAI196QDk6QGUKPAA2foAh998xnzKdsl16gFacmV0dXJuIHsgLi4u5gIBKMVhKSzuAW99xjx9CuUAszwv5gJf5AJodHls5QKnYm9keecAtXdpZHRoOiAxMDAlxjfmA3fFEnblAWDESCNhcHDfMckSxDAu6ALzxzXZJOkDZscpZGlzcGxheTogZmxleMZgYWxpZ27FJHM6IGNlbnRlcsYZanVzdGlmeS1jb250ZeQCo8wd+QCnNTBwx1ltYXJnaW7nBELEK8gZYmFja2dyb3VuZC1jb2xvcjogI2Y0YThiNscfb3JkZXItcmFkaXVzyjh95AFr5gFi"},{default:r(()=>[i]),_:1}),u])}}});export{A as default,x as excerpt,f as frontmatter};
