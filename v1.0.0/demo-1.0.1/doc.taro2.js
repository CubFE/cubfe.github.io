import{d as p,r,b as h,k as n,w as t,aq as c,e as a,o as d,l as s}from"./style_icon.js";const j={class:"markdown-body"},o=c(`<h1>Address 地址</h1><h3>介绍</h3><p>用于进行四级地址选择</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Address</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Address</span>);
</code></pre><h3>选择自定义地址</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddress"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopup"'),s(`
    `),a("span",{class:"hljs-attr"},":province"),s("="),a("span",{class:"hljs-string"},'"province"'),s(`
    `),a("span",{class:"hljs-attr"},":city"),s("="),a("span",{class:"hljs-string"},'"city"'),s(`
    `),a("span",{class:"hljs-attr"},":country"),s("="),a("span",{class:"hljs-string"},'"country"'),s(`
    `),a("span",{class:"hljs-attr"},":town"),s("="),a("span",{class:"hljs-string"},'"town"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    `),a("span",{class:"hljs-attr"},"custom-address-title"),s("="),a("span",{class:"hljs-string"},'"请选择所在地区"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" showPopup = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" address = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"province"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'江西'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'四川'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"city"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'朝阳区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'崇文区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'昌平区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'石景山区'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"country"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'八里庄街道'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北苑'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'常营乡'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"town"),s(`: []
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'选择地址'"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showAddress"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        showPopup.`),a("span",{class:"hljs-property"},"value"),s(" = !showPopup."),a("span",{class:"hljs-property"},"value"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"cal"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(" name = address[cal."),a("span",{class:"hljs-property"},"next"),s(`];
        `),a("span",{class:"hljs-keyword"},"if"),s(" (!name || name."),a("span",{class:"hljs-property"},"length"),s(" < "),a("span",{class:"hljs-number"},"1"),s(`) {
          showPopup.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
        }
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"close"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        text.`),a("span",{class:"hljs-property"},"value"),s(" = val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"addressStr"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { showPopup, text, showAddress, onChange, close, ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(address) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=c('<h3>选择省市区</h3><p>如果想选中某个省市区，需要在 <code class="">model-value</code> 中按照 <code class="">province</code>、<code class="">city</code>、<code class="">country</code>、<code class="">town</code> 的顺序配置想要展示的地区 id 值，并且保证有能查询到对应的省市区数据即可。</p>',2),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddress"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopup"'),s(`
    `),a("span",{class:"hljs-attr"},":province"),s("="),a("span",{class:"hljs-string"},'"province"'),s(`
    `),a("span",{class:"hljs-attr"},":city"),s("="),a("span",{class:"hljs-string"},'"city"'),s(`
    `),a("span",{class:"hljs-attr"},":country"),s("="),a("span",{class:"hljs-string"},'"country"'),s(`
    `),a("span",{class:"hljs-attr"},":town"),s("="),a("span",{class:"hljs-string"},'"town"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    `),a("span",{class:"hljs-attr"},"custom-address-title"),s("="),a("span",{class:"hljs-string"},'"请选择所在地区"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" showPopup = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"3"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" address = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"province"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'江西'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'四川'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"city"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'朝阳区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'崇文区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'昌平区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'石景山区'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"country"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'八里庄街道'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北苑'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'常营乡'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"town"),s(`: []
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'北京朝阳区八里庄街道'"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showAddress"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        showPopup.`),a("span",{class:"hljs-property"},"value"),s(" = !showPopup."),a("span",{class:"hljs-property"},"value"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"cal"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(" name = address[cal."),a("span",{class:"hljs-property"},"next"),s(`];
        `),a("span",{class:"hljs-keyword"},"if"),s(" (!name || name."),a("span",{class:"hljs-property"},"length"),s(" < "),a("span",{class:"hljs-number"},"1"),s(`) {
          showPopup.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
        }
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"close"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        text.`),a("span",{class:"hljs-property"},"value"),s(" = val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"addressStr"),s(`;
        value.`),a("span",{class:"hljs-property"},"value"),s(" = [val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"province"),s("."),a("span",{class:"hljs-property"},"id"),s(", val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"city"),s("."),a("span",{class:"hljs-property"},"id"),s(", val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"country"),s("."),a("span",{class:"hljs-property"},"id"),s(`];
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { showPopup, text, showAddress, onChange, close, value, ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(address) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"选择自定义地址 2",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"custom2"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddress"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopup"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"custom2"'),s(`
    `),a("span",{class:"hljs-attr"},":province"),s("="),a("span",{class:"hljs-string"},'"province"'),s(`
    `),a("span",{class:"hljs-attr"},":city"),s("="),a("span",{class:"hljs-string"},'"city"'),s(`
    `),a("span",{class:"hljs-attr"},":country"),s("="),a("span",{class:"hljs-string"},'"country"'),s(`
    `),a("span",{class:"hljs-attr"},":town"),s("="),a("span",{class:"hljs-string"},'"town"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"270px"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" showPopup = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"3"),s(`]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" address = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"province"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'G'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'江西'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'J'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'四川'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'S'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'浙江'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'Z'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"city"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'朝阳区'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'崇文区'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'昌平区'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'石景山区'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'S'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'八里庄街道'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北苑'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"country"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'八里庄街道'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北苑'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'常营乡'"),s(", "),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"town"),s(`: []
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'北京朝阳区八里庄街道'"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showAddress"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        showPopup.`),a("span",{class:"hljs-property"},"value"),s(" = !showPopup."),a("span",{class:"hljs-property"},"value"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"cal"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(" name = address[cal."),a("span",{class:"hljs-property"},"next"),s(`];
        `),a("span",{class:"hljs-keyword"},"if"),s(" (!name || name."),a("span",{class:"hljs-property"},"length"),s(" < "),a("span",{class:"hljs-number"},"1"),s(`) {
          showPopup.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
        }
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"close"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        text.`),a("span",{class:"hljs-property"},"value"),s(" = val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"addressStr"),s(`;
        value.`),a("span",{class:"hljs-property"},"value"),s(" = [val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"province"),s("."),a("span",{class:"hljs-property"},"id"),s(", val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"city"),s("."),a("span",{class:"hljs-property"},"id"),s(", val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"country"),s("."),a("span",{class:"hljs-property"},"id"),s(`];
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(" { showPopup, text, showAddress, onChange, close, value, ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(address) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",null,"选择已有地址",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddressExist"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopupExist"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"exist"'),s(`
    `),a("span",{class:"hljs-attr"},":exist-address"),s("="),a("span",{class:"hljs-string"},'"existAddress"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    `),a("span",{class:"hljs-attr"},":is-show-custom-address"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    @`),a("span",{class:"hljs-attr"},"selected"),s("="),a("span",{class:"hljs-string"},'"selected"'),s(`
    `),a("span",{class:"hljs-attr"},"exist-address-title"),s("="),a("span",{class:"hljs-string"},'"配送至"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" showPopupExist = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" existAddress = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'次渠镇'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'通州区'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'钓鱼岛全区'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'钓鱼岛'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'京东大厦'"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'大兴区'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'科创十一街18号院'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'选择地址'"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showAddressExist"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        showPopupExist.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"close"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (val."),a("span",{class:"hljs-property"},"type"),s(" == "),a("span",{class:"hljs-string"},"'exist'"),s(`) {
          `),a("span",{class:"hljs-keyword"},"const"),s(" { provinceName, cityName, countyName, townName, addressDetail } = val."),a("span",{class:"hljs-property"},"data"),s(`;
          text.`),a("span",{class:"hljs-property"},"value"),s(` = provinceName + cityName + countyName + townName + addressDetail;
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          text.`),a("span",{class:"hljs-property"},"value"),s(" = val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"addressStr"),s(`;
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selected"),s(" = ("),a("span",{class:"hljs-params"},"prevExistAdd, nowExistAdd, arr"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(prevExistAdd);
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(nowExistAdd);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { showPopupExist, existAddress, showAddressExist, text, close, selected };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",null,"自定义图标",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showCustomImg"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopupCustomImg"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"exist"'),s(`
    `),a("span",{class:"hljs-attr"},":exist-address"),s("="),a("span",{class:"hljs-string"},'"existAddress"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    `),a("span",{class:"hljs-attr"},":is-show-custom-address"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"unselected-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Heart"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right:8px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Heart"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"HeartFill"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right:8px"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#f00"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"HeartFill"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"bottom"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-address-custom-buttom"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"btn"'),s(">")]),s("自定义按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"HeartFill"),s(", "),a("span",{class:"hljs-title class_"},"Heart"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"HeartFill"),s(", "),a("span",{class:"hljs-title class_"},"Heart"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" showPopupCustomImg = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" existAddress = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'次渠镇'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'通州区'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'钓鱼岛全区'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'钓鱼岛'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'京东大厦'"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'大兴区'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'科创十一街18号院'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'选择地址'"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showCustomImg"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        showPopupCustomImg.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"close"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (val."),a("span",{class:"hljs-property"},"type"),s(" == "),a("span",{class:"hljs-string"},"'exist'"),s(`) {
          `),a("span",{class:"hljs-keyword"},"const"),s(" { provinceName, cityName, countyName, townName, addressDetail } = val."),a("span",{class:"hljs-property"},"data"),s(`;
          text.`),a("span",{class:"hljs-property"},"value"),s(` = provinceName + cityName + countyName + townName + addressDetail;
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          text.`),a("span",{class:"hljs-property"},"value"),s(" = val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"addressStr"),s(`;
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selected"),s(" = ("),a("span",{class:"hljs-params"},"prevExistAdd, nowExistAdd, arr"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(prevExistAdd);
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(nowExistAdd);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` { showPopupCustomImg, existAddress, text, showCustomImg, close, selected };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".cub-address-custom-buttom"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"54px"),s(`;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"6px"),s(),a("span",{class:"hljs-number"},"0px"),s(),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#f2f2f2"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".btn"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"90%"),s(`;
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"42px"),s(`;
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"42px"),s(`;
    `),a("span",{class:"hljs-attribute"},"margin"),s(`: auto;
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
    `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-built_in"},"linear-gradient"),s("("),a("span",{class:"hljs-number"},"135deg"),s(", "),a("span",{class:"hljs-number"},"#fa2c19"),s(),a("span",{class:"hljs-number"},"0%"),s(", "),a("span",{class:"hljs-number"},"#fa6419"),s(),a("span",{class:"hljs-number"},"100%"),s(`);
    `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"21px"),s(`;
    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"15px"),s(`;
    `),a("span",{class:"hljs-attribute"},"color"),s(`: white;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v=a("h3",null,"自定义地址与已有地址切换",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择地址"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddressOther"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopupOther"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"exist"'),s(`
    `),a("span",{class:"hljs-attr"},":exist-address"),s("="),a("span",{class:"hljs-string"},'"existAddress"'),s(`
    `),a("span",{class:"hljs-attr"},":province"),s("="),a("span",{class:"hljs-string"},'"province"'),s(`
    `),a("span",{class:"hljs-attr"},":city"),s("="),a("span",{class:"hljs-string"},'"city"'),s(`
    `),a("span",{class:"hljs-attr"},":country"),s("="),a("span",{class:"hljs-string"},'"country"'),s(`
    `),a("span",{class:"hljs-attr"},":town"),s("="),a("span",{class:"hljs-string"},'"town"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    @`),a("span",{class:"hljs-attr"},"selected"),s("="),a("span",{class:"hljs-string"},'"selected"'),s(`
    `),a("span",{class:"hljs-attr"},"custom-and-exist-title"),s("="),a("span",{class:"hljs-string"},'"选择其他地址"'),s(`
    @`),a("span",{class:"hljs-attr"},"switch-module"),s("="),a("span",{class:"hljs-string"},'"switchModule"'),s(`
    @`),a("span",{class:"hljs-attr"},"close-mask"),s("="),a("span",{class:"hljs-string"},'"closeMask"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" showPopupOther = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" address = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"province"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'江西'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'四川'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"city"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'朝阳区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'崇文区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'昌平区'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'石景山区'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"country"),s(`: [
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'八里庄街道'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'北苑'"),s(` },
          { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'常营乡'"),s(` }
        ],
        `),a("span",{class:"hljs-attr"},"town"),s(`: []
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(" existAddress = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'次渠镇'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'通州区'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'钓鱼岛全区'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'钓鱼岛'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'京东大厦'"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'大兴区'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'科创十一街18号院'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京市'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'探探鱼'"),s(`,
          `),a("span",{class:"hljs-attr"},"phone"),s(": "),a("span",{class:"hljs-string"},"'182****1718'"),s(`
        }
      ]);
      `),a("span",{class:"hljs-keyword"},"const"),s(" backBtnIcon = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'left'"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'选择地址'"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showAddressOther"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        showPopupOther.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"close"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (val."),a("span",{class:"hljs-property"},"type"),s(" == "),a("span",{class:"hljs-string"},"'exist'"),s(`) {
          `),a("span",{class:"hljs-keyword"},"const"),s(" { provinceName, cityName, countyName, townName, addressDetail } = val."),a("span",{class:"hljs-property"},"data"),s(`;
          text.`),a("span",{class:"hljs-property"},"value"),s(` = provinceName + cityName + countyName + townName + addressDetail;
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          text.`),a("span",{class:"hljs-property"},"value"),s(" = val."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"addressStr"),s(`;
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selected"),s(" = ("),a("span",{class:"hljs-params"},"prevExistAdd, nowExistAdd, arr"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(prevExistAdd);
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(nowExistAdd);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"switchModule"),s(" = ("),a("span",{class:"hljs-params"},"cal"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (cal."),a("span",{class:"hljs-property"},"type"),s(" == "),a("span",{class:"hljs-string"},"'custom'"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'点击了“选择其他地址”按钮'"),s(`);
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'点击了自定义地址左上角的返回按钮'"),s(`);
        }
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onChange"),s(" = ("),a("span",{class:"hljs-params"},"cal"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(" name = address[cal."),a("span",{class:"hljs-property"},"next"),s(`];
        `),a("span",{class:"hljs-keyword"},"if"),s(" (!name || name."),a("span",{class:"hljs-property"},"length"),s(" < "),a("span",{class:"hljs-number"},"1"),s(`) {
          showPopupOther.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
        }
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"closeMask"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'关闭弹层'"),s(`, val);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        onChange,
        showPopupOther,
        text,
        existAddress,
        showAddressOther,
        switchModule,
        closeMask,
        close,
        selected,
        backBtnIcon,
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(address)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),k=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否打开地址选择</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>v-model:value</td><td>设置默认选中值</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>type</td><td>地址选择类型 <code class="">exist/custom/custom2</code></td><td>string</td><td><code class="">custom</code></td></tr><tr><td>province</td><td>省，每个省的对象中，必须有 <code class="">name</code> 字段，如果类型选择 <code class="">custom2</code>，必须指定 <code class="">title</code> 字段为首字母</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>city</td><td>市，每个市的对象中，必须有 <code class="">name</code> 字段，如果类型选择 <code class="">custom2</code>，必须指定 <code class="">title</code> 字段为首字母</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>country</td><td>县，每个县的对象中，必须有 <code class="">name</code> 字段，如果类型选择 <code class="">custom2</code>，必须指定 <code class="">title</code> 字段为首字母</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>town</td><td>乡/镇，每个乡/镇的对象中,必须有 <code class="">name</code> 字段,如果类型选择 <code class="">custom2</code>，必须指定 <code class="">title</code> 字段为首字母</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>height</td><td>弹层中内容容器的高度，仅在 <code class="">type=&quot;custom2&quot;</code> 时有效</td><td>string | number</td><td><code class="">200px</code></td></tr><tr><td>exist-address</td><td>已存在地址列表，每个地址对象中，必传值 <code class="">provinceName</code>、<code class="">cityName</code>、<code class="">countyName</code>、<code class="">townName</code>、<code class="">addressDetail</code>、<code class="">selectedAddress</code>（字段解释见下）</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>is-show-custom-address</td><td>是否可以切换自定义地址选择，<code class="">type=‘exist’</code> 时生效</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>custom-address-title</td><td>自定义地址选择文案，<code class="">type=&#39;custom&#39;</code> 时生效</td><td>string</td><td><code class="">请选择所在地区</code></td></tr><tr><td>exist-address-title</td><td>已有地址文案 ，<code class="">type=‘exist’</code> 时生效</td><td>string</td><td><code class="">配送至</code></td></tr><tr><td>custom-and-exist-title</td><td>自定义地址与已有地址切换按钮文案 ，<code class="">type=‘exist’</code> 时生效</td><td>string</td><td><code class="">选择其他地址</code></td></tr><tr><td>columns-placeholder</td><td>列提示文字</td><td>string | Array</td><td><code class="">请选择</code></td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><ul><li><code class="">provinceName</code> 省的名字</li><li><code class="">cityName</code> 市的名字</li><li><code class="">countyName</code> 县的名字</li><li><code class="">townName</code> 乡/镇的名字</li><li><code class="">addressDetail</code> 具体地址</li><li><code class="">selectedAddress</code> 字段用于判断当前地址列表的选中项。</li></ul><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>自定义选择地址时，选择地区时触发</td><td>参考 <code class="">onChange</code></td></tr><tr><td>selected</td><td>选择已有地址列表时触发</td><td>参考 <code class="">selected</code></td></tr><tr><td>close</td><td>地址选择弹框关闭时触发</td><td>参考 <code class="">close</code></td></tr><tr><td>close-mask</td><td>点击遮罩层或点击右上角叉号关闭时触发</td><td>{closeWay:&#39;mask&#39;/&#39;cross&#39;}</td></tr><tr><td>switch-module</td><td>点击‘选择其他地址’或自定义地址选择左上角返回按钮触发</td><td>{type:&#39;exist&#39;/&#39;custom&#39;/&#39;custom2&#39;}</td></tr></tbody></table><h3>change 回调参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>可选值</th></tr></thead><tbody><tr><td>custom</td><td>当前点击的行政区域</td><td><code class="">province(省) / city(市) / country(县) / town(乡)</code></td></tr><tr><td>next</td><td>当前点击的行政区域的下一级</td><td><code class="">province(省) / city(市) / country(县) / town(乡)</code></td></tr><tr><td>value</td><td>当前点击的行政区域的值（返回传入的值）</td><td><code class="">{}</code></td></tr></tbody></table><h3>selected 回调参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>可能值</th></tr></thead><tbody><tr><td>第一个参数<code class="">（prevExistAdd）</code></td><td>选择前选中的地址</td><td><code class="">{}</code></td></tr><tr><td>第二个参数<code class="">（nowExistAdd）</code></td><td>当前选中的地址</td><td><code class="">{}</code></td></tr><tr><td>第三个参数<code class="">（arr）</code></td><td>选择完之后的已有地址列表（<code class="">selectedAddress</code> 值发生改变）</td><td><code class="">{}</code></td></tr></tbody></table><h3>close 回调参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>可能值</th></tr></thead><tbody><tr><td>type</td><td>地址选择类型 <code class="">exist/custom/custom2</code></td><td><code class="">exist/custom/custom2</code></td></tr><tr><td>data</td><td>选择地址的值,<code class="">custom</code> 时，<code class="">addressStr</code> 为选择的地址组合</td><td><code class="">{}</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>bottom</td><td>可自定义底部</td></tr><tr><td>icon</td><td>自定义选中项的图标</td></tr><tr><td>unselected-icon</td><td>未选中地址时的图标</td></tr><tr><td>close-icon</td><td>关闭弹层的图标</td></tr><tr><td>back-icon</td><td>自定义地址与已有地址切换时返回的图标</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-address-region-tab-line</td><td><em>linear-gradient(90deg, var(--cub-primary-color) 0%, rgba(#fa2c19, 0.15) 100%)</em></td></tr><tr><td>--cub-address-icon-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-address-header-title-font-size</td><td><em>18px</em></td></tr><tr><td>--cub-address-header-title-color</td><td><em>#262626</em></td></tr><tr><td>--cub-address-region-tab-font-size</td><td><em>13px</em></td></tr><tr><td>--cub-address-region-tab-color</td><td><em>#1d1e1e</em></td></tr><tr><td>--cub-address-region-tab-active-item-font-weight</td><td><em>bold</em></td></tr><tr><td>--cub-address-region-tab-line-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-address-region-tab-line-opacity</td><td><em>1</em></td></tr><tr><td>--cub-address-region-item-color</td><td><em>#333</em></td></tr><tr><td>--cub-address-region-item-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-address-item-margin-right</td><td><em>9px</em></td></tr></tbody></table>',18),N={},H="",W=p({__name:"doc.taro",setup(I,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(B,Z)=>{const l=r("demo-block");return d(),h("div",j,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0idGV4dCIgaXMtbGluayBAY2xpY2s9InNob3dBZGRyZXNzIj48L8hKyVdhxhwKICAgIHYtbW9kZWw6dmlzaWLEaMQ9UG9wdXAixSA6cHJvdmluY2U9IsgKxxljaXR5PSLEBsgRb3VudHLEFMYJxxd0b3duPSLEBsYRQGNoYW5nZT0ib25DxQrIF2xvc2U9IsUHxhNjdXN0b23oAK8t5wEJ6K+35gEM5omA5Zyo5AESjLrEMecA68cvPgo8L+oBUTxzY3JpcHTkAQNpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xS9kZWZhdWx0IHvlAJpzZXR1cCgpxw4gIGNvbnN0IOkBOyA9xF0oZmFsc2UpxEXKJOcAnsUixnooyEUgIOgBYjogW8kUICB7IGlkOiAxLCBuYW1lOiAn5YyX5LqsJyB9LNElMsolub/opb/VJTPJJeaxn9glNMpKm5vlt50nIH3JJF3KL+QB//QArjfKZJyd6Ziz5Yy61Wc4yme0h+aWh9goOcpQmIzludlQNsko55+z5pmv5bGxxiv1AL3mAqj0AMDqASTlhavph4zluoTooZfpgZPVduoAnuWMl+iLkdUl6wFSuLjokKXkuaH3AJjkAyw6IFtdxxF9KTsK7QJE5AP25wJjJ+wEFyfQKesECSA9ICgpID0+6QKzIOoCry52YWx1ZSA9ICHPE+gCu33PWOgDusRVY2Fsz1jGJOQA7CA96ALwW2NhbC5uZXh0XchUICBpZiAoIcUnfHzFLy5sZW5ndGggPCAx6gNb9gCq5QNbykvoAUd97gNt5QRM5ACldvEApeQBRMlOdmFsLmRhdGEu5wCuU3Ry8gD7cmV0dXJuIHvqAI4sxUYs7AFnLOkBHCzGfiwgLi4u5gRbKMdeKegAp+QAtn07Cjwv6ASd"},{default:t(()=>[i]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0idGV4dCIgaXMtbGluayBAY2xpY2s9InNob3dBZGRyZXNzIj48L8hKyVdhxhwKICAgIHYtbW9kZWw9InZhbHVlIswUOnZpc2lixHzEUVBvcHVwxiA6cHJvdmluY2U9IsgKxxljaXR5PSLEBsgRb3VudHLEFMYJxxd0b3duPSLEBsYRQGNoYW5nZT0ib25DxQrIF2xvc2U9IsUHxhNjdXN0b23oAMMt5wEd6K+35gEg5omA5Zyo5AEmjLrEMecA/8cvPgo8L+oBZTxzY3JpcHTkARdpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xS9kZWZhdWx0IHvlAJpzZXR1cCgpxw4gIGNvbnN0IOkBOyA9xF0oZmFsc2UpxEXKJOUBe8cgWzEsIDcsIDNdzyTnAMLFJuYAnijIaSAg6AGGOiBbyRQgIHsgaWQ6IDEsIG5hbWU6ICfljJfkuqwnIH0s0SUyyiW5v+ilv9UlM8kl5rGf2CU0ykqbm+W3nScgfckkXcov5AIj9ACuN8pknJ3pmLPljLrVZzjKZ7SH5paH2Cg5ylCYjOW52VA2ySjnn7Pmma/lsbHGK/UAveYCzPQAwOoBJOWFq+mHjOW6hOihl+mBk9V26gCe5YyX6IuR1SXrAVK4uOiQpeS5ofcAmOQDUDogW13HEX0pOwrtAkTkBC7nAmfnAg3pAWXwAK7QO+sEUyA9ICgpID0+6QLpIOoC5S7oAsshzxPoAs19z1joA/DEVWNhbM9YxiTkAP4gPegDAltjYWwubmV4dF3IVCAgaWYgKCHFJ3x8xS8ubGVuZ3RoIDwgMeoDkfYAquUDkcpL6AFZfe4Df+UEguQApXbxAKXkAVbJTnZhbC5kYXRhLucArlN0cspcxSXJK1vJLOgDvy5pZCzKQuQDI88S5gJ4Lmlk6QD86gFQcmV0dXJuIHvqAOMs5QCbLOwBvCzpAXEs5gDTxV51ZSwgLi4u5gTtKOcAuinoAQPkARJ9Owo8L+gFLw=="},{default:t(()=>[m]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0idGV4dCIgdHlwZT0iY3VzdG9tMiIgaXMtbGluayBAY2xpY2s9InNob3dBZGRyZXNzIj48L8hZyWZhxhwKICAgIHYtbW9kZWw9InZhbHVlIswUOnZpc2li5ACLxFFQb3B1cMYgzn/FEzpwcm92aW5jZT0iyArHGWNpdHk9IsQGyBFvdW50csQUxgnHF3Rvd249IsQGxhFAY2hhbmdlPSJvbkPFCsgXbG9zxH7EB8YTaGVpZ2h0PSIyNzBweMQT5wD05wDnPgo8L+oBaTxzY3JpcHTkAQxpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xS9kZWZhdWx0IHvFfHNldHVwKCnHDiAgY29uc3Qg6QEwID3EXShmYWxzZSnERcok5QFwxyBbMSwgNywgM13PJOcAwsUm5gCeKMhpICDoAWg6IFvJFCAgeyBpZDogMSwgbmFtZTogJ+WMl+S6rCcs5gJWOiAnQicgfSzRMTLKMbm/6KW/yzFH1TEzyTHmsZ/OMUrVMTTKYpub5bedyzFT1TE1ymK1meaxn8sxWicgfckwXco75AJm9AEPN8pLnJ3pmLPljLrLTkPVfzjJNOW0h+aWh980xTQ5ymiYjOW532jGNDbJNOefs+aZr+Wxsc439gEe6gGA5YWr6YeM5bqE6KGX6YGT/wHr7ACl5YyX6IuRzzH1AVjmA6r0AVv/AIj/AIj7AIj9AkK4uOiQpeS5ocs05AFe9AC85ARSOiBbXccRfSk7Cu0DZOQFUucDh+cDLekCJPAA0tA76wVoID0gKCkgPT7pBAkg6gQFLugD6yHPE+gD7X3PWOgE8sRVY2Fsz1jGJOQBCiA96AQiW2NhbC5uZXh0XchUICBpZiAoIcUnfHzFLy5sZW5ndGggPCAx6gSx9gCq5QSxykvoAVl97gSf5QWE5ACldvEApeQBVslOdmFsLmRhdGEu5wCuU3RyylzFJckrW8ks6ATfLmlkLMpC5APizxLmApwuaWTpAPzqAVByZXR1cm4ge+oA4yzlAJss7AG8LOkBcSzmANPFXnVlLCAuLi7mBg0o5wC6KegBA+QBEn07Cjwv6AZP"},{default:t(()=>[y]),_:1}),A,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0idGV4dCIgaXMtbGluayBAY2xpY2s9InNob3dBZGRyZXNzRXhpc3QiPjwvyE/JXGHGIQogICAgdi1tb2RlbDp2aXNpYsRtxEJQb3B1cMZAxSV0eXBlPSJlyhE6xQzISccbx3jGIkBjbG9zZT0ixQfHNWlzLcReLWN1c3Rvbco+ZmFsyCRAc2VsZWN0ZWQ9IsgKxhnNcS3oARmFjemAgeiHs8Qk5wDqxyM+Cjwv6gFVPHNjcmlwdOQBAmltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CsR4xS9kZWZhdWx0IHvlAI1zZXR1cCgpxw4gIGNvbnN0IO4BOiA9xGIo5QDcKcRKyinsAS7HJ1vHISDJVMQBaWQ6IDEsyxHnAN1EZXRhaWw6ICcnzB1jaXR5TmFtZTogJ+asoea4oOmVh84hb3VuySPpgJrlt57ljLrNI3Byb3ZpbmNlxyXljJfkuqzluILNJegBmucAwzogdHJ1ZcwhdG93bsdCzTluxhTmjqLmjqLpsbzOe2hvbsQeMTgyKioqKjE3MTgnyR99yirwASEy/wEhyh3rASHpkpPpsbzlspvlhajwAQTtASf8AR7JRf4BHuUCA/8BH8UB/wEf/wEfxwHwAR8z/AEf5Lqs5Lic5aSn5Y6m+AErxB6FtP0BJeenkeWIm+WNgeS4gOihlzE45Y+36Zmi/wJa/wJa/wE8/wE8/wE87AE8xwpdKTsK7QOn5AVi5wOfJ+wFgyfQKfAFdSA9ICgpID0+6wGM7gQcLnZhbHVlID3lAznoBBx9z1blBTrES3ZhbM9OaWbFFi7kBZggPT0gJ+UEUifqBJHKRnvtAXks6QHZLOsBwuQE/eYBVizuAiIgfSA9IMRpZGF0YegAqMQB5AEb6QDFzGEgK8lixAvJYyAryWQgK85lylh9IGVsc2XtAMXNaegAii7HQFN0css99wFH6AJT5AFKcHJlduUBgUFkZCwgbm93yg1hcnLvAWXEP29sZS5sb2fNOekFzc4jy07JIuoAjHJldHVybiB77wIJLO0GDCzxAkos5QEBLOYCDCzqAMx9xmLkAPR9Owo8L+gG3w=="},{default:t(()=>[b]),_:1}),w,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0idGV4dCIgaXMtbGluayBAY2xpY2s9InNob3dDdXN0b21JbWciPjwvyEzJWWFkZHJlc3MKICAgIHYtbW9kZWw6dmlzaWLEasQ/UG9wdXDKRMUpdHlwZT0iZXhpc3TGETrFDMhNxxtBxg7GIkBjbG9zZT0ixQfHNWlzLcRiLWPFXso+ZmFsxiTkAKYgIOkBDiAjdW5zZWxlY3RlZC1pY29uxiAgIDxIZWFydCBzdHnkALZtYXJnaW4tcmlnaHQ6OHB45AD4xSHHTy/IUNFf0lRGaWxs2VggY29sb3I9IiNmMDDJZcQy32kgI2JvdHRvbclrdmlldyBjbGHkAP3rAZXoARlidcQuIsgvzzFidG4iPuiHquWumuS5ieaMiemSrjwvxCLJYMsO7gCV5gIRx28+CswdPHNjcmlw5QE0aW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzvML+kBECzGC8kqQGN1YmZlL+QBb3MtdnVlLXRhcm/FPGV4xTxkZWZhdWx0IHvlALRjb21wb25lbnRzOtVWLMUmc2V0dXAoKcc0xDZuc3Qg8gLDID3kAMgo5QJlKcR0yi3sArfHJ1vHISDJWMQBaWQ6IDHGd8YB5wFDRGV0YWlsOiAnJ8wdY2l0eU5hbWU6ICfmrKHmuKDplYfOIW91bskj6YCa5bee5Yy6zSNwcm92aW5jZccl5YyX5Lqs5biCzSXoAx3nAMM6IHRydWXMIXRvd27HQs05bsYU5o6i5o6i6bG8zntob27EHjE4MioqKioxNzE4J8kf5wF9xAHwASEy/wEhyh3rASHpkpPpsbzlspvlhajwAQTtASf8AR7JRf4BHuUCA/8BH8UB/wEf/wEfxwHwAR8z/AEf5Lqs5Lic5aSn5Y6m+AErxB6FtP0BJeenkeWIm+WNgeS4gOihlzE45Y+36Zmi/wJa/wJa/wE8/wE8/wE87AE8xwpdKTsK7QOn5Abs5wOfJ+wHDSfQKe0G/yA9ICgpID0+6wGJ8gQdLnZhbHVlID3lAzroBB19z1flBsTET3ZhbM9SaWbFFi7kByIgPT0gJ+UEUyfqBJbKRnvtAXos6QHaLOsBw+QFZOYBVyzuAiMgfSA9IMRpZGF0YegAqMQB5AEc6QDFzGEgK8lixAvJYyAryWQgK85lylh9IGVsc2XtAMXNaegAii7HQFN0css99wFH6AJU5AFKcHJldkXnBX4sIG5vd8oNYXJy7wFlxD9vbGUubG9nzTnpBc7OI8tOySLqAIxyZXR1cm4ge/MCDSztBhEs5QDzLO4CVSzmAg0s6gDNfcZj5AD1fTsKPC/oB0c85QhG5AdPLvkH4+cA5HdpZHRoOiAxMDAlxk1oZeUIdCA1NHB4xhJwYWRkaW5nOiA2cHggMMQExhhib3JkZXItdG9wOiAxcHggc29saWQgI2YyxALEI+QAmC5idG7OaznQajQyyGpsaW5lLdIX5gkNOiBhdXRvxhLkAR4tYWxpZ246IGNlbnRl5wIDYmFja2dyb3VuZDrFTWFyLWdyYWRpZW50KDEzNWRlZywgI2ZhMmMxOSAwJcUMNjQxOeUA/+cBsOcA1sQ2dXM6IDIx6ACGZm9udC1zaXplOiAxNcgV5QmWOiB3aGl05QPDfeQBhuYBfQ=="},{default:t(()=>[x]),_:1}),v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0idGV4dCIgaXMtbGluayBAY2xpY2s9InNob3dBZGRyZXNzT3RoZXIiPjwvyE/JXGHGIQogICAgdi1tb2RlbDp2aXNpYsRtxEJQb3B1cMZAxSV0eXBlPSJleGlzdMYROsUMyEnHG8d4xyJwcm92aW5jZT0iyArHGWNpdHk9IsQGyBFvdW50csQUxgnHF3Rvd249IsQGxhFAY2xvc2U9IsUHxxNzZWxlY3RlZD0iyArGGWN1c3RvbS1hbmQt5gCq7gFKhbbku5bnAVDHSXdpdGNo5AEMdcQoxg9NxQ7Mfi1tYXNr5wCDTWFza8gcaGFuZ2U9Im9uQ8UKxBfnAXnnASM+Cjwv6gHkPHNjcmlwdOQBkWltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFL2RlZmF1bHQge+UAgHNldHVwKCnHDiAgY29uc3Qg7gHJID3EYihmYWxzZSnESsop5wCjxSLGfyjISiAg6AG9OiBbyRQgIHsgaWQ6IDEsIG5hbWU6ICfljJfkuqwnIH0s0SUyyiW5v+ilv9UlM8kl5rGf2CU0ykqbm+W3nScgfckkXcov5AJa9ACuN8pknJ3pmLPljLrVZzjKZ7SH5paH2Cg5ylCYjOW52VA2ySjnn7Pmma/lsbHGK/UAveYDA/QAwOoBJOWFq+mHjOW6hOihl+mBk9V26gCe5YyX6IuR1SXrAVK4uOiQpeS5ofcAmOQDhzogW13HEX3vAkPsBADnAmrqAMHqAk0gxXYxylcg6AJ9RGV0YWlsOiAnJ8wd5AHLTucBZKyh5rig6ZWHziHkAS/II+mAmuW3nuQBXMwj6ALBxyXmAqrluILNJegEPucAwzogdHJ1Zcwh5AEAx0LNOegCAo6i5o6i6bG8zntob27EHjE4MioqKioxNzE4J8kf6wGP8AEhMv8BIcod6wEh6ZKT6bG85bKb5YWo8AEE7QEn/AEeyUX+AR7lBEb/AR/FAf8BH/8BH8cB8AEfM/wBH+S6rOS4nOWkp+WOpvgBK8QehbT9ASXnp5HliJvljYHkuIDooZcxOOWPt+mZov8CWv8CWv8BPP8BPP8BPOwBPMcKXe8DpmJhY2tCdG5JY29u5wOlJ2xlZnQnzyfkCFrIIOwIe8QozSnwCG0gPSAoKSA9PusBsu4GhS52YWx1ZSA95QNfyHV9z1blB13ES3ZhbM9OaWbFFi7kCJAgPT0gJ+UEeCfqBvrKRnvtAZ8s6QH/LOsB6OQHZuYBfCzuAkggfSA9IMRpZGF0YegAqMQB5AEb6QDFzGEgK8lixAvJYyAryWQgK85lylh9IGVsc2XtAMXNaegAii7HQFN0css99wFH6AJ55AFKcHJldkXnBaMsIG5vd8oNYXJy7wFlxD9vbGUubG9nzTnpAibOI8tOySLxAIzrCU/kAJBj9QHaY+wB2uYJwvMB28h4J+eCueWHu+S6huKAnPIJ2OKAneaMiemSruoC3vUBadZT6Ieq5a6a5LmJxk3lt6bkuIrop5LnmoTov5Tlm57TXMcKfe4DTegKE/YA98Yk5APqID3oAh5b5AEIbmV4dF3KXeQBHyHFJ3x8xS8ubGVuZ3RoIDwgMe4BI/cDceUEdv8CNegDfOQK2fYDgO0BLeWFs+mXreW8ueWxgics5AKl8wIAcmV0dXJuy0PoARDqBM3uALLKGOQDA8oO7AhizjzsBILLGusCc8oW6QDgzxPLOOcDN8oS6wU2yhUuLi7mC6Io5wG2Ke4B/+QBYX07Cjwv6Avq"},{default:t(()=>[f]),_:1}),k])}}});export{W as default,H as excerpt,N as frontmatter};
